<html>
<div class="m-3" id="yongerscans" wb-allow="admin,reg,oper">

    <nav class="nav navbar navbar-expand-md col">
        <h3 class="tx-bold tx-spacing--2 order-1">Сканы</h3>
        <button class="navbar-toggler order-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <i class="wd-20 ht-20 fa fa-ellipsis-v"></i>
        </button>

        <div class="collapse navbar-collapse order-2" id="navbarSupportedContent">
            <form class="form-inline mg-t-10 mg-lg-0  ml-auto">
                <div class="form-group">
                    <input class="form-control mg-r-10 col-auto" type="search" placeholder="Поиск..." aria-label="Поиск..." data-ajax="{'target':'#{{_form}}List','filter_add':{'$or':[{ 'doc_num' : {'$like' : '$value'} }, { 'fullname': {'$like' : '$value'} }]} }">
                </div>
            </form>
        </div>
    </nav>

    <div id="scansList" wb-off>
        <ul class="list-group">
            {{#each result}}
            <li data-id="{{.id}}" class="list-group-item">
                <div>{{.operator}} {{.quote}} <span class="badge badge-info">Сканов: {{.srclen}}</span></div>
                <div class="tx-12">{{.doc_sernum}}</div>
                <div class="tx-right pos-absolute t-10 r-10">
                    <a href="javascript:" data-ajax="{'url':'/cms/ajax/form/scans/edit/{{.id}}','html':'#yongerscans modals'}"
                        class="d-inline">
                        <img src="/module/myicons/content-edit-pen.svg?size=24&stroke=323232">
                    </a>
                    {{#if ~/user.role == 'admin'}}
                    <div class="dropdown dropright d-inline">
                        <a class="cursor-pointer" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="/module/myicons/trash-delete-bin.2.svg?size=24&stroke=dc3545" class="d-inline">
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#" on-click="remove">
                                <span class="fa fa-trash tx-danger"></span> Удалить</a>
                            <a class="dropdown-item" href="#">
                                <span class="fa fa-close tx-primary"></span> Отмена</a>
                        </div>
                    </div>
                    {{/if}}
                </div>
            </li>
            {{/each}}
        </ul>
        {{#~/pages }} {{#if ~/pages != 1 }}
        <nav aria-label="Page navigation">
            <ul class="pagination mg-b-0 mg-t-10">
                {{#each pagination}} {{#if ~/page == .page}}
                <li class="page-item active">
                    <a class="page-link" data-page="{{.page}}" on-click="setPage" href="#">
                        {{.label}}
                    </a>
                </li>
                {{/if}} {{#if ~/page != .page}}
                <li class="page-item">
                    <a class="page-link" data-page="{{.page}}" on-click="setPage" href="#">
                        {{#if .label == "prev"}}
                        <img src="/module/myicons/interface-essential-181.svg?size=18&stroke=0168fa"
                            class="d-inline">{{/if}} {{#if .label == "next"}}
                        <img src="/module/myicons/interface-essential-35.svg?size=18&stroke=0168fa"
                            class="d-inline">{{/if}} {{#if .label != "prev"}}{{#if .label != "next"}}{{.label}}{{/if}}{{/if}}
                    </a>
                </li>
                {{/if}} {{/each}}
            </ul>
        </nav>
        {{/if}} {{/pages}}
    </div>
    <script>
        var api = "/api/v2"
        var form = "scans"
        var base = api + `/list/${form}?&operator=[,${wbapp._session.user.id}]&@size=10&@sort=_created:d&@return=fullname,doc_sernum,srclen,id,operator,quote`
        var list = new Ractive({
            el: "#scansList",
            template: $("#scansList").html(),
            data: {
                base: base,
                result: [],
                pagination: [],
                user: wbapp._session.user
            },
            on: {
                init() {
                    let base = this.get("base");
                    wbapp.post(`${base}`, {}, function(data) {
                        list.set("result", data.result);
                        list.set("pagination", data.pagination);
                        list.set("page", data.page);
                        list.set("pages", data.pages);
                    })
                },
                setData(ev, data) {
                    list.set("result", data.result);
                    list.set("pagination", data.pagination);
                    list.set("page", data.page);
                    list.set("pages", data.pages);
                },
                setPage(ev) {
                    let page = $(ev.node).attr("data-page");
                    this.fire("loadPage", page)
                    return false
                },
                remove(ev) {
                    let id = $(ev.node).parents('[data-id]').attr('data-id');
                    let result = list.get("result")
                    let page = list.get("page") * 1
                    let pages = list.get("pages") * 1
                    delete result[id]
                    if (Object.keys(result).length == 0 && pages > 0 && page >= pages) page--
                        wbapp.post(`${api}/delete/${form}/${id}`, {}, function(data) {
                            if (data.error == false) {
                                list.fire("loadPage", page)
                            }
                        });
                },
                loadPage(ev, page) {
                    wbapp.post(`${base}&@page=${page}`, {}, function(data) {
                        list.fire("setData", null, data)
                    })
                }
            }
        })
    </script>
    <modals></modals>
</div>

<script wb-app>
    var port = 4010
    var host = '{{_route.hostname}}'
    var chanel = host
    var password = 'accept'
    var hash = md5(chanel, password)
    var conn
    var synapse_connect = function() {
        if (document.conn !== undefined) {
            conn = document.conn
        } else {
            conn = new WebSocket('ws://' + host + ':' + port + '/socket');
            document.conn = conn
        }

        conn.publish = function(data) {
            let msg = {
                action: "publish",
                topic: conn.room,
                message: json_encode(data)
            }
            conn.send(json_encode(msg))
        }
        conn.onopen = function(e) {
            console.log("Connection established!")
        };
        conn.onmessage = function(e) {
            if (conn.user == undefined) {
                conn.user = e.data.split(' ').pop()
                conn.wide = e.target.room
                conn.send(json_encode({
                    action: "subscribe",
                    "topic": hash
                }))
                conn.room = hash;
            } else {
                let data = e.data
                typeof data == "string" ? data = json_decode(data) : null;
                switch (data.type) {
                    case 'func':
                        data.data == undefined ? data.data = {} : null;
                        if (data.func > '') eval(data.func + '(data.data)')
                        break;

                    case 'ajax':
                        data.post == undefined ? data.post = {} : null;
                        $.post(data.url, data.post, function(res) {
                            if (data.func > '') eval(data.func + '(res)')
                        })
                        break;
                }
            }

        };

        conn.onclose = function(e) {
            conn = null;
            delete document.conn;
            console.log("Connection closed!");
            let timer = setTimeout(function() {
                synapse_connect();
                if (conn) {
                    clearInterval(timer);
                }
            }, 3000)
        }

    }
    synapse_connect();

        var itemBlock = function(id) {
            $.post('/api/v2/func/scans/block', {
                id: id,
                __token: wbapp._session.token
            }, function() {
                conn.publish({
                    'type': 'ajax',
                    'url': document.location.origin + '/api/v2/func/scans/getblock',
                    'post': {__token: wbapp._session.token},
                    func: 'afterGetBlocks'
                });
            })
        }

        var itemUnblock = function(id) {
            $.post('/api/v2/func/scans/unblock', {
                id: id,
                __token: wbapp._session.token
            }, function() {
                conn.publish({
                    'type': 'ajax',
                    'url': document.location.origin + '/api/v2/func/scans/getblock',
                    'post': {__token: wbapp._session.token},
                    func: 'afterGetBlocks'
                });
            })
        }

        // эвент сохранения записи
        wbapp.on('wb-save-done', function(e, data) {
            conn.publish({
                'type': 'sysmsg',
                'action': 'formsave',
                'even': e,
                'params': data.params,
                'cast': 'wide'
            });
        })

        // открывая форму ставим блок
        $('#scansList').undelegate('a[data-ajax]', wbapp.evClick);
        $('#scansList').delegate('a[data-ajax]', wbapp.evClick, function() {
            let id = $(this).parents('[data-id]').data('id');
            itemBlock(id)
        })

        // закрывая форму снимаем блок
        $(document).undelegate('#modalScansEdit', 'hidden.bs.modal');
        $(document).delegate('#modalScansEdit', 'hidden.bs.modal', function() {
            let id = $(this).data("id");
            itemUnblock(id)
        })

        // эвент сохранения записи
        $(document).undelegate('#scansEditForm', 'wb-form-save');
        $(document).delegate('#scansEditForm', 'wb-form-save', function(e, data) {
            conn.publish({
                type: 'func',
                func: 'afterFormsave',
                data: data.params
            });
        })


        // функция обновления блокировок
        var afterGetBlocks = function(res) {
            $('#scansList').find('[data-id]').removeClass('d-none');
            $(res.blocks).each(function(i, id) {
                $('#scansList').find('[data-id="' + id + '"]').addClass('d-none');
            })
        }

        var afterFormsave = function(data) {
            if (!$('#scansList').length) return;
            let form = data.form;
            let item = data.item;
            let table = data.table;
            $('#scansList').find('[data-id="' + item + '"]').remove();
        }



    $('#yongerscans').off('mod-filepicker-done');
    $('#yongerscans').on('mod-filepicker-done', function(ev, data) {
        let synapse = $('#scansList').synapse;
        $('#yongerscans .yongerscans-wait').removeClass('d-none');
        if (data[0] !== undefined) {
            wbapp.post('/cms/ajax/form/scans/import', data[0], function(data) {
                $('#yongerscans .yongerscans-wait').addClass('d-none');
                wbapp.render('#scansList');
                conn.publish({
                    'type': 'ajax',
                    'url': document.location.origin + '/cms/ajax/form/scans/block/getblock',
                    'post': {__token: wbapp._session.token}
                });
            });
        } else {
            wbapp.toast('Ошибка!', 'Загрузка файла не удалась, попробуйте снова', {
                bgcolor: 'danger'
            });
        }
    });
</script>

</html>