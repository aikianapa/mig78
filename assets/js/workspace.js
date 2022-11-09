var port = 4010
var host = '{{_route.hostname}}'
host = 'mig78.ru'
var chanel = host
var password = 'accept'
var hash = md5(chanel + password)
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
            try {
                typeof data == "string" ? data = json_decode(data) : null;
            } catch (error) {
                void(0)
            }

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
                case 'chat':
                    if (data.oper_id !== wbapp._session.user.id) {
                        return;
                    }
                    if ($('#botChat').is(':visible')) {
                        $('#botChat').trigger('recv', data)
                    } else {
                        let list = toasts.get('list')
                        let newlist = []
                        let did = data.doc_id
                        $(list).each(function(i, item) {
                            item.doc_id == did ? null : newlist.push(item);
                        })
                        toasts.set('list', newlist)
                        toasts.push('list', { type: 'docmsg', doc_id: did, time: data.time })
                        toasts.update()
                        let audio = new Audio('/modules/botchat/message.mp3')
                        audio.autoplay = true
                        $('#toasts').addClass('show')
                    }
                    break;
                case 'scans':
                    if (data.action == 'hide' && $('#scansList').length) {
                        $('#scansList').find('[data-id="' + data.scan_id + '"]').addClass('d-none');
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
var toasts
var toasts_init = function() {
    $(document).delegate('.nav-bell', 'click', function() {
        $('#toasts').addClass('show')
    })
    toasts = new Ractive({
        el: '#toasts',
        template: $('#toasts').html(),
        data: {},
        on: {
            init() {
                let list = wbapp.storage('cms.toasts')
                if (typeof list == 'object') {
                    this.set('list', array_values(list))
                } else {
                    this.set('list', [])
                }
            },
            update() {
                let list = toasts.get('list')
                wbapp.storage('cms.toasts', list)
            },
            closeitem(ev) {
                let idx = $(ev.node).parent('[data-idx]').attr('data-idx')
                toasts.splice('list', idx, 1)
                toasts.update()
            }
        },
        message(message) {
            let audio = new Audio('/modules/botchat/message.mp3')
            audio.autoplay = true
            toasts.push('list', { msg: message })
            toasts.update()
            $(this.el).addClass('show')
        }
    })
}

synapse_connect();
toasts_init();