<html>
    <div class="m-3" id="yongerDocs" wb-allow="admin,oper">
    <nav class="nav navbar navbar-expand-md col">
        <h3 class="tx-bold tx-spacing--2 order-1">Список клиентов</h3>

        <div class="collapse navbar-collapse order-2" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#"
                        data-ajax="{'target':'#docsListOper'}">Свободные</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#"
                        data-ajax="{'target':'#docsListOper','filter':{'status':'archive','oper':'{{_sess.user.id}}'}}">Обработанные</a>
                </li>
            </ul>
            <form class="form-inline mg-t-10 mg-lg-0">
                <div class="form-group">
                    <input class="form-control mg-r-10 col-auto" type="search" placeholder="Поиск..."
                        aria-label="Поиск..."
                        data-ajax="{'target':'#docsListOper','filter_add':{'$or':[{ 'doc_num' : {'$like' : '$value'} }, { 'date': {'$like' : '$value'} }, { 'fullname': {'$like' : '$value'} }, { 'phone': {'$like' : '$value'} }]} }">

                    <a href="#" data-ajax="{'url':'/cms/ajax/form/docs/edit/_new','html':'#yongerDocs modals'}"
                        class="ml-auto order-2 float-right btn btn-primary">
                        <img src="/module/myicons/item-select-plus-add.svg?size=24&stroke=FFFFFF" /> {{_lang.newDoc}}
                    </a>
                </div>
            </form>
        </div>

    </nav>


    <table class="table table-striped table-hover tx-15">
        <thead>
            <tr>
                <th>Ф.И.О.</th>
                <th>Паспорт</th>
                <th>Телефон</th>
                <th>Статус</th>
                <th></th>
            </tr>
        </thead>
        <tbody id="docsListOper">
            <wb-foreach wb="table=docs&sort=_created:d&bind=cms.list.operdocs&sort=_created:d&size={{_sett.page_size}}"
                wb-filter="{
                    'status': 'archive',
                    'oper': {'$lt':' '}
                }">
                <tr wb-if="'{{_var.date}}'!=='{{date}}'" class="bg-transparent">
                    <td colspan="5">
                        <wb-var date="{{date}}" />
                        <div class="divider-text tx-primary">{{wbDate("d.m.Y",{{{{_created}}}})}}</div>
                    </td>
                </tr>
                <tr>
                    <td>{{fullname}}<br /><small>{{wbDate("d.m.Y",{{birth_date}})}}</small></td>
                    <td>{{doc_ser}} №{{doc_num}}</td>
                    <td>{{phone}}</td>
                    <td>
                        <img data-src="/module/myicons/zip-archive-circle.svg?size=24&stroke=10b759"
                            wb-if="'{{status}}' == 'archive' AND '{{oper}}'==''">
                            <img data-src="/module/myicons/zip-archive-circle.svg?size=24&stroke=dc3545"
                            wb-if="'{{status}}' == 'archive' AND '{{oper}}'!==''">
                    </td>
                    <td>
                        <img src="/module/myicons/content-edit-pen.svg?size=24&stroke=323232" class="cursor-pointer"
                        data-id="{{id}}" data-oper="{{_sess.user.id}}" onClick="operGetWork(this)">
                    </td>
                </tr>
            </wb-foreach>
        </tbody>
        <tfoot>
            <tr>
                <td></td>
            </tr>
        </tfoot>
    </table>
    </div>
    <script>
        var operGetWork = function(that) {
            let data = $(that).data();
            wbapp.post('/cms/ajax/form/docs/opergetwork',data,function(res){
                if (res.error) {
                    wbapp.toast('Ошибка!',res.msg,{bgcolor:'warning'});
                    wbapp.storage('cms.list.operdocs.'+data.id, null);
                } else {
                    window.open(res.pdf, '_blank');
                }
            });
        }
    </script>
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
            let id = $(this).parents('tr').data('id');
            $.post('/api/v2/func/scans/block', {id: id}, function() {
                conn.publish({
                    'type': 'ajax',
                    'url': document.location.origin + '/api/v2/func/scans/getblock',
                    'post': {},
                    func: 'afterGetBlocks'
                });
            })
        })

        // закрывая форму снимаем блок
        $(document).undelegate('#modalPeoplesEdit','hide.bs.modal');
        $(document).delegate('#modalPeoplesEdit','hide.bs.modal',function(){
            let id = $(this).data("id");
            $.post('/api/v2/func/scans/unblock', {id: id}, function() {
                conn.publish({
                    'type': 'ajax',
                    'url': document.location.origin + '/api/v2/func/scans/getblock',
                    'post': {},
                    func: 'afterGetBlocks'
                });
            })
        })

        // эвент сохранения записи
        $(document).undelegate('#docsEditForm','wb-form-save');
        $(document).delegate('#docsEditForm','wb-form-save', function(e, data) {
            conn.publish({
                type: 'func',
                func: 'afterFormsave',
                data: data.params
            });
        })


        // функция обновления блокировок
        let afterGetBlocks = function(res) {
            $('#scansList').find('tr[data-id]').removeClass('d-none');
            console.log(res);
            $(res.blocks).each(function(i, id) {
                console.log(id);
                $('#scansList').find('tr[data-id="' + id + '"]').addClass('d-none');
            })
        }

        let afterFormsave = function(data) {
            if (!$('#scansList').length) return;
            let form = data.form;
            let item = data.item;
            let table = data.table;
            $('#scansList').find('tr[data-id="'+item+'"]').remove();
        }

    }
    synapse_connect();

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
                    'post': {}
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