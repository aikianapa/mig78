<html>
<div id="botChat" class="modal right" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document" wb-off>
        <div class="modal-content">
            <div class="modal-body ht-100v">
                <div class="row pos-absolute b-10 wd-100p">
                    <div class="col-12">
                        <textarea rows="2" placeholder="Сообщение" class="form-control" type="text" name="msg"></textarea>
                        <button type="button" class="btn btn-light mt-2" on-click="message">
                            Отправить
                            <img loading="lazy" src="/module/myicons/send-message.svg?size=20&stroke=323232">
                        </button>
                    </div>
                </div>
                <div class="row pos-absolute pb-5 wd-100p scroll-y t-20 photoswipe" id="botChatArea" on-scroll="scroll">
                    <div class="col-12">
                        {{#each messages}} {{#if sender == "date"}}
                        <div class="divider-text">
                            {{msg}}
                        </div>
                        {{else}}
                        <div class="my-2 bd {{sender}}">
                            {{msg}} {{#if file}}
                            <div class="my-2">
                                {{#each file}}
                                {{#if type == 'image'}}
                                    <a data-href="{{file}}" data-fslightbox="botchat">
                                    <img class="p-1" data-src="/thumbc/50x50/src{{file}}" >
                                    </a>
                                {{/if}}
                                {{#if type == 'video'}}
                                    <video muted="true" playsinline="true" loop="true" class="wd-250" controls="true">
                                        <source type="{{mime}}" data-src="{{file}}">
                                        Ваш браузер не поддерживает этот формат видео
                                    </video>
                                {{/if}}
                                {{#if type == 'audio'}}
                                    <audio class="wd-250" controls>
                                        <source type="{{mime}}" data-src="{{file}}">
                                        Ваш браузер не поддерживает этот формат аудио
                                    </audio>
                                {{/if}}
                                {{#if type == 'pdf'}}
                                    <a data-href="{{file}}" target="_blank">
                                    <img class="p-1" data-src="/thumbc/50x50/src{{file}}" >
                                    </a>
                                {{/if}}
                                {{#if type == 'file'}}
                                    <a data-href="{{file}}" download>
                                        <img class="p-1" data-src="/thumbc/50x50/src{{file}}" >
                                    </a>
                                {{/if}}
                                {{/each}}
                            </div>

                            {{/if}}
                            <div class="time">{{dtime}}</div>
                        </div>
                        {{/if}} {{/each}}
                    </div>
                    <div id="botChatScroll" class="bg-white rounded-circle d-none" on-click="goto">
                        <img src="/module/myicons/download-arrow-circle.1.svg?size=40&stroke=000000">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<style>
    #botChatArea {
        bottom: 130px;
        right: 30px;
        padding-left: 20px;
    }

    #botChatScroll {
        position: fixed;
        right: 30px;
        bottom: 150px;
        opacity: 0.8;
        cursor: pointer;
    }

    #botChat .oper {
        position: relative;
        background-color: #0168fa17;
        text-align: right;
        border-radius: 10px;
        margin-left: 50px;
        padding: 0.7rem;
        padding-bottom: 13px;
        color: #1c273c;
    }

    #botChat .user {
        position: relative;
        background-color: #10b75917;
        text-align: left;
        border-radius: 10px;
        margin-right: 50px;
        padding: 0.7rem;
        padding-bottom: 13px;
        color: #1c273c;
    }

    #botChat .time {
        position: absolute;
        bottom: 0;
        font-size: 12px;
        color: #596882;
    }

    #botChat .oper .time {
        left: 10px;
    }

    #botChat .user .time {
        right: 10px;
    }
</style>
<script>
    /*
                var port = 4010
                var host = '{{_route.hostname}}'
                var chanel = host
                var password = 'accept'
                var hash = wbapp._session.user.id
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
                                    if (data.async !== undefined && data.async == false) {
                                        let res = wbapp.postSync(data.url, data.post)
                                        if (data.func > '') eval(data.func + '(res)')
                                    } else {
                                        $.post(data.url, data.post, function(res) {
                                            if (data.func > '') eval(data.func + '(res)')
                                        })
                                    }
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
                */
</script>
<script>
    var botChat = new Ractive({
        el: $('#botChat'),
        template: $('#botChat').html(),
        data: {
            'timeout': 5,
            'messages': [],
            'lasttime': null,
            'lastupd': null
        },
        on: {
            init() {
                wbapp.loadStyles(["/modules/photoswipe/photoswipe.css"]);
                wbapp.loadScripts(["/modules/photoswipe/photoswipe.js"], 'mod-photoswipe', function () {
                    refreshFsLightbox();
                });
            },
            show() {
                $(botChat.target).modal('show')
                botChat.fire('goto')
            },
            scroll(ev) {
                let btn = $(ev.node).find('#botChatScroll')
                if (ev.node.scrollTop + 100 < $(ev.node).children().height() - $(ev.node).height()) {
                    btn.removeClass('d-none')
                } else {
                    btn.addClass('d-none')
                }
            },
            goto() {
                setTimeout(() => {
                    var objDiv = document.getElementById("botChatArea");
                    objDiv.scrollIntoView({
                        behavior: "smooth"
                    })
                    $(objDiv).animate({
                        scrollTop: objDiv.scrollHeight
                    }, 800);
                }, 50)
            },
            complete() {
                botChat.fire('messages')
                let loop = setInterval(function() {
                    if ($(document).find('#docsEditForm').length) {
                        botChat.fire('messages')
                    }
                }, botChat.get('timeout') * 1000)
                let unloop = setInterval(function() {
                    if (!$(document).find('#docsEditForm').length) {
                        clearInterval(loop);
                        clearInterval(unloop);
                    }
                }, 500)
            },
            update() {
                $('#botChatArea [data-src]').each(function(){
                    $(this).attr('src',$(this).data('src')).removeAttr('data-src')
                })
                $('#botChatArea [data-href]').each(function(){
                    $(this).attr('href',$(this).data('href')).removeAttr('data-href')
                })
                if (refreshFsLightbox !== undefined) refreshFsLightbox();
            },
            message(ev) {
                $('#botChat [name=msg]').next().prop('disabled', true)
                let msg = $('#botChat [name=msg]').val()
                let cid = $('#docsEditForm [name=chat_id]').val()
                let did = $('#docsEditForm [name=id]').val()
                let qte = $('#docsEditForm [name=quote]').val()
                if (msg.trim() > ' ') {
                    wbapp.post('/module/botchat/sendmsg', {
                        chat_id: cid,
                        doc_id: did,
                        msg: msg,
                        quote: qte
                    }, function(data) {
                        if (data.ok) {
                            $('#botChat [name=msg]').val('')
                            botChat.set('lastupd', null)
                            botChat.fire('messages', true)
                        } else {
                            // здесь нужно отработать, если сообщение не отправилось

                        }
                        $('#botChat [name=msg]').next().prop('disabled', false)
                    })
                    setTimeout(() => {
                        $('#botChat [name=msg]').next().prop('disabled', false)
                    }, 1000);
                }
            },
            messages(ev, flag = false) {
                let cid = $('#docsEditForm [name=chat_id]').val()
                let post = {}
                let lasttime = botChat.get('lasttime')
                let lastupd = botChat.get('lastupd')
                let timeout = botChat.get('timeout')

                if (flag === false && time() - lastupd < 5) {
                    return;
                }
                botChat.set('lastupd', time())
                wbapp.loader = false
                let msgs = botChat.get('messages');
                lasttime ? post = {
                    'from': lasttime
                } : null;
                wbapp.post('/module/botchat/getmsg/' + cid, post, function(data) {
                    let last = data.length
                    let cdate = date("d.m.y", strtotime(lasttime))
                    if (last) {
                        data.forEach(msg => {
                            if (msg.time && msg.sender) {
                                let mdate = date("d.m.y", strtotime(msg.time));
                                let mtime = date("H:i", strtotime(msg.time));
                                msg.dtime = mtime
                                if (mdate !== cdate) {
                                    cdate = mdate
                                    botChat.push('messages', {
                                        sender: 'date',
                                        'msg': mdate
                                    })
                                }
                                if (msg.file) {
                                    $(msg.file).each(function(i, file){
                                        file.type = file.mime.split('/').shift()
                                        file.mime == 'application/pdf' ? file.type = 'pdf' : null
                                        in_array(file.type,['image','audio','video','pdf']) ? null : file.type = 'file'
                                        msg.file[i] = file
                                    })
                                }
                                botChat.set('lasttime', msg.time)
                                botChat.push('messages', msg)
                            }
                        });
                        if ($('#botChatScroll').hasClass('d-none') || flag === true) {
                            botChat.fire('goto')
                        }
                        botChat.update()
                    }
                    wbapp.loader = true
                })
                wbapp.loader = true
            }
        }
    })
</script>

</html>