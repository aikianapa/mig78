<html>
<div id="botChat" class="modal right" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <div class="form-group">
                    <textarea rows="auto" placeholder="Сообщение" class="form-control" type="text" name="msg"></textarea>
                    <button type="button" class="btn btn-light mt-2" on-click="message">
                        Отправить <img loading="lazy" src="/module/myicons/send-message.svg?size=20&stroke=323232">
                    </button>
                </div>
                <div class="form-group" id="botChatArea">

                </div>
            </div>
        </div>
    </div>
</div>

<script>
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

var botChat = new Ractive({
    el: $('#botChat'),
    template: $('#botChat').html(),
    on: {
        init() {
            console.log('Chat init');
        },
        message(ev) {
            $('#botChat [name=msg]').next().prop('disabled',true)
            let msg = $('#botChat [name=msg]').val()
            let cid = $('#docsEditForm [name=chat_id]').val()
            wbapp.post('/api/v2/func/docs/sendmsg',{
                chat_id: cid,
                msg: msg
            },function(){
                $('#botChat [name=msg]').val('')
                $('#botChat [name=msg]').next().prop('disabled',false)
                console.log(send);
            })
            setTimeout(() => {
                $('#botChat [name=msg]').next().prop('disabled',false)
            }, 1000);
        }
    }
})
</script>

</html>