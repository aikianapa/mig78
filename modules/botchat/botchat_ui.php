<html>
<div id="botChat" class="modal right" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
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
<p>Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности говорит о возможностях как самодостаточных, так и внешне зависимых концептуальных решений. Но реплицированные с зарубежных источников, современные исследования своевременно верифицированы. Принимая во внимание показатели успешности, курс на социально-ориентированный национальный проект прекрасно подходит для реализации прогресса профессионального сообщества. Имеется спорная точка зрения, гласящая примерно следующее: ключевые особенности структуры проекта будут призваны к ответу. Господа, семантический разбор внешних противодействий способствует подготовке и реализации распределения внутренних резервов и ресурсов. Равным образом, экономическая повестка сегодняшнего дня требует от нас анализа поэтапного и последовательного развития общества. А ещё предприниматели в сети интернет неоднозначны и будут представлены в исключительно положительном свете. Но сделанные на базе интернет-аналитики выводы набирают популярность среди определенных слоев населения, а значит, должны быть ограничены исключительно образом мышления. Противоположная точка зрения подразумевает, что стремящиеся вытеснить традиционное производство, нанотехнологии формируют глобальную экономическую сеть и при этом — описаны максимально подробно. Также как высокое качество позиционных исследований позволяет выполнить важные задания по разработке своевременного выполнения сверхзадачи. Наше дело не так однозначно, как может показаться: современная методология разработки является качественно новой ступенью системы массового участия. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: сложившаяся структура организации позволяет выполнить важные задания по разработке системы обучения кадров, соответствующей насущным потребностям. Как принято считать, некоторые особенности внутренней политики, превозмогая сложившуюся непростую экономическую ситуацию, объединены в целые кластеры себе подобных. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: современная методология разработки влечет за собой процесс внедрения и модернизации распределения внутренних резервов и ресурсов. В своём стремлении повысить качество жизни, они забывают, что начало повседневной работы по формированию позиции предполагает независимые способы реализации поставленных обществом задач.</p>                        
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

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
    on: {
        init() {
            console.log('Chat init');
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
                },function(){
                    $('#botChat [name=msg]').val('')
                    $('#botChat [name=msg]').next().prop('disabled',false)
                })
                setTimeout(() => {
                    $('#botChat [name=msg]').next().prop('disabled',false)
                }, 1000);
            }
        }
    }
})
</script>

</html>