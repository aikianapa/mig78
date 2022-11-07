<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes">
<meta wb-if='!wbCheckAllow("{{_sett.modules.yonger.allow}}")' http-equiv="refresh" content="0;URL=/signin" />
</head>
<body wb-if='wbCheckAllow("{{_sett.modules.yonger.allow}}")'>
<wb-include wb="{'src':'/engine/modules/yonger/tpl/ws_glob.php'}" wb-if=' "{{_route.subdomain}}" == "" OR "{{_sett.modules.yonger.standalone}}" == "on" ' />
<wb-include wb="{'src':'/engine/modules/yonger/tpl/ws_site.php'}" wb-if=' "{{_route.subdomain}}" > ""  AND "{{_sett.modules.yonger.standalone}}" !== "on" ' />
<modals></modals>
</body>
<script wb-app>
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
                        console.log(data);
                        wbapp.toast('Сообщение','Пришло сообщение в чат по документу')
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


</script>
</html>