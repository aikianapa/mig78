<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes">
    <meta wb-if='!wbCheckAllow("{{_sett.modules.yonger.allow}}")' http-equiv="refresh" content="0;URL=/signin" />
</head>

<body wb-if='wbCheckAllow("{{_sett.modules.yonger.allow}}")'>
    <wb-include wb="{'src':'/engine/modules/yonger/tpl/ws_glob.php'}" wb-if=' "{{_route.subdomain}}" == "" OR "{{_sett.modules.yonger.standalone}}" == "on" '
    />
    <modals></modals>
    <div class="off-canvas off-canvas-right px-1 scroll-y" id="toasts" wb-off>
        <i class="btn-close fa fa-close r-10 t-10 pos-absolute cursor-pointer" aria-label="Close"></i>
        <div class="p-2 tx-gray-700">Сообщения</div>
        <ul  class="list-group">
        {{#each list}}
        <li class="list-group-item" data-idx="{{@index}}">
            {{#if type=='docmsg'}}
                Сообщение по документу 
                <a href="javascript:" data-ajax="{'url':'/cms/ajax/form/docs/edit/{{doc_id}}','html':'modals'}" data-id="{{doc_id}}">
                    #{{doc_id}}
                </a>
            {{else}}
                {{msg}}
            {{/if}}
            <span class="pos-absolute r-5 t-5 cursor-pointer" on-click="closeitem">×</span>
        </li>
        {{/each}}
        </ul>
    </div>
    <script wb-app src="/assets/js/workspace.js?{{wbNewId()}}"></script>
</body>

</html>