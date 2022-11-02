<html>
<div id="botChat" class="modal right" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document" wb-off>
        <div class="modal-content">
            <div class="modal-body ht-100v">
                <div class="row pos-absolute b-10 wd-100p">
                    <div class="col-12">
                    <textarea rows="2" placeholder="Сообщение" class="form-control" type="text" name="msg"></textarea>
                    <button type="button" class="btn btn-light mt-2" on-click="message">
                        Отправить <img loading="lazy" src="/module/myicons/send-message.svg?size=20&stroke=323232">
                    </button>
                    </div>
                </div>
                <div class="row pos-absolute pb-5 mr-3 scroll-y t-20" style="bottom:130px;" id="botChatArea">
                    <div class="col-12">
                        {{#each messages}}
                        {{#if sender == "date"}}
                            <div class="divider-text" >
                                {{msg}} 
                            </div>
                        {{else}}
                            <div class="my-2 bd {{sender}}" >
                                {{msg}}
                                <div class="time">{{dtime}}</div>
                            </div>
                        {{/if}}
                        {{/each}}
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
<style>
#botChat .oper {
    position: relative;
        background-color: #0168fa17;
        text-align: right;
        border-radius: 10px;
        margin-left: 50px;
        padding: 0.7rem;
        padding-bottom: 10px;
        color: #1c273c;
}
#botChat .user {
    position: relative;
        background-color: #10b75917;
        text-align: left;
        border-radius: 10px;
        margin-right: 50px;
        padding: 0.7rem;
        padding-bottom: 10px;
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
var botChat = new Ractive({
    el: $('#botChat'),
    template: $('#botChat').html(),
    data: {
        'messages': [],
        'lasttime': null
    },
    on: {
        complete() {
            botChat.fire('messages')
            let loop = setInterval(function(){
                if ($(document).find('#docsEditForm').length) {
                    botChat.fire('messages')
                }
            },5000)
            let unloop = setInterval(function(){
                if (!$(document).find('#docsEditForm').length) {
                    clearInterval(loop);
                    clearInterval(unloop);
                }
            },500)
        },
        message(ev) {
            $('#botChat [name=msg]').next().prop('disabled',true)
            let msg = $('#botChat [name=msg]').val()
            let cid = $('#docsEditForm [name=chat_id]').val()
            let did = $('#docsEditForm [name=id]').val()
            let qte = $('#docsEditForm [name=quote]').val()
            if (msg.trim() > ' ') {
                wbapp.post('/module/botchat/sendmsg',{
                    chat_id: cid,
                    doc_id: did,
                    msg: msg,
                    quote: qte
                },function(data){
                    if (data.ok) {
                        $('#botChat [name=msg]').val('')
                        botChat.fire('messages')
                    } else {
                    // здесь нужно отработать, если сообщение не отправилось

                    }
                    $('#botChat [name=msg]').next().prop('disabled',false)
                })
                setTimeout(() => {
                    $('#botChat [name=msg]').next().prop('disabled',false)
                }, 1000);
            }
        },
        messages() {
            let cid = $('#docsEditForm [name=chat_id]').val()
            let post = {}
            let lasttime = botChat.get('lasttime')
            wbapp.loader = false
            let msgs = botChat.get('messages');
            lasttime ? post = {'from':msgs[msgs.length -1].time} : null;
            wbapp.post('/module/botchat/getmsg/'+cid,post,function(data){
                let last = data.length
                let cdate = null
                if (last) {
                    botChat.set('lasttime', data[last -1])
                    data.forEach(msg => {
                        if (msg.time && msg.sender) {
                            let ctime = date("d.m.y",strtotime(msg.time));
                            msg.dtime = date("H:i", strtotime(msg.time));
                            if (ctime !== cdate) {
                                botChat.push('messages',{sender:'date', 'msg':ctime})
                                cdate = ctime
                            }
                            botChat.push('messages',msg)
                        }
                    });
                }
                wbapp.loader = true
            })
            wbapp.loader = true
        }
    }
})
</script>

</html>

                let last = data.length
                let date = null
                if (last) {
                    botChat.set('lasttime', data[last -1])
                    data.forEach(msg => {
                        let cdate = date('d.m.Y',strtotime(msg.time))
                        if (cdate !== date) {
                            botChat.push('messages',{'sender':'date',date:cdate})
                        }
                        botChat.push('messages',msg)
                    });
                }
                wbapp.loader = true