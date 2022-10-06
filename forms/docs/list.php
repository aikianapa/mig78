<html>
<div class="m-3" id="yongerDocs" wb-allow="admin,partner,reg,doc,oper">

    <nav class="nav navbar navbar-expand-md col">
        <h3 class="tx-bold tx-spacing--2 order-1">Документы</h3>
        <button class="navbar-toggler order-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <i class="wd-20 ht-20 fa fa-ellipsis-v"></i>
        </button>

        <div class="collapse navbar-collapse order-3 flex-row-reverse" id="navbarSupportedContent">
            <form class="form-inline flex-row-reverse mg-t-10 mg-lg-0">

                <div class="form-group">
                    <input class="form-control mg-r-10 col-auto" type="search" placeholder="Поиск..." aria-label="Поиск..." data-ajax="{'target':'#{{_form}}List','filter_add':{'$or':[{ 'doc_num' : {'$like' : '$value'} }, { 'fullname': {'$like' : '$value'} }]} }">

                    <a href="#" data-ajax="{'url':'/cms/ajax/form/docs/edit/_new','html':'#yongerDocs modals'}" class="ml-auto order-2 float-right btn btn-primary">
                        <img src="/module/myicons/item-select-plus-add.svg?size=24&stroke=FFFFFF" /> Новый
                    </a>
                </div>

            <div class="dropdown ml-auto mr-2">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    Фильтр
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#" data-ajax="{'target':'#{{_form}}List','filter_remove': ['*status','flag']}">
                        <img src="/module/myicons/asterisk-rotate-arrow-circle.svg?size=24&stroke=666666"> Все</a>
                    <a class="dropdown-item" href="#" data-ajax="{'target':'#{{_form}}List','filter_remove': 'status flag','filter_add':{'*status':'new'}}">
                        <img src="/module/myicons/thunder-lightning-circle.1.svg?size=24&stroke=666666"> Новые</a>
                    <a class="dropdown-item" href="#" data-ajax="{'target':'#{{_form}}List','filter_remove': 'status flag','filter_add':{'*status':'progress'}}">
                        <img src="/module/myicons/loading-checkmark-status-circle.svg?size=24&stroke=ffc107"> В работе
                    </a>
                    <a class="dropdown-item" href="#" data-ajax="{'target':'#{{_form}}List','filter_remove': 'status flag','filter_add':{'*status':'preview'}}">
                        <img src="/module/myicons/attachment-link-circle.svg?size=24&stroke=ffc107"> Превью
                    </a>
                    <a class="dropdown-item" href="#" data-ajax="{'target':'#{{_form}}List','filter_remove': 'status flag','filter_add':{'*status':'ready'}}">
                        <img src="/module/myicons/checkmark-circle-1.svg?size=24&stroke=10b759"> Готовые</a>
                    <a class="dropdown-item" href="#" data-ajax="{'target':'#{{_form}}List','filter_remove': 'status flag','filter_add':{'*status':'archive'}}">
                        <img src="/module/myicons/zip-archive-circle.svg?size=24&stroke=dc3545"> Архив</a>
                </div>
            </div>

            </form>
        </div>
    </nav>

    <wb-var date="" />
    <wb-var filter="{'_site' : {'$ne': '???'}}" />
    <wb-var filter="{'_site' : {'$ne': '???'},
            '$or' : [
                {'_role':'reg'},
                {'_creator':'{{_sess.user.id}}'}
            ]
    }" wb-if="in_array({{_sess.user.role}},['partner','',null])" />
    <table class="table table-striped table-hover tx-15">
        <thead>
            <tr>
                <th>Ф.И.О.</th>
                <th>Паспорт</th>
                <th>Документ</th>
                <th>Статус</th>
                <th></th>
            </tr>
        </thead>
        <tbody id="docsList">
            <wb-foreach wb="table=docs&sort=_created:d&bind=cms.list.docs&sort=_created:d&size={{_sett.page_size}}" wb-filter="operator={{_sess.user.id}}"
                __wb-return="id;doc_num;doc_ser;date;@status;order;status;birth_date;fullname;_created;code;_id;_table;_form;_creator;_created;_role;_site"
                wb-filter="{{_var.filter}}">
                <tr wb-if="'{{_var.date}}'!=='{{date}}'" class="bg-transparent">
                    <td colspan="5">
                        <wb-var date="{{date}}" />
                        <div class="divider-text tx-primary">{{date}}</div>
                    </td>
                </tr>


                <tr>
                    <td>{{fullname}}
                        <img loading="lazy" src="/module/myicons/bookmark-favorite-minus.svg?size=18&stroke=dc3545" wb-if="'{{flag}}'=='on'">
                        <br />
                        <small>{{birth_date}}</small>
                    </td>
                    <td>{{doc_ser}} №{{doc_num}}</td>
                    <td wb-tree="dict=reqlist&branch={{quote}}">{{name}}</td>
                    <td>
                        <img data-src="/module/myicons/thunder-lightning-circle.1.svg?size=24&stroke=666666" wb-if="'{{status}}' == 'new'">
                        <img data-src="/module/myicons/loading-checkmark-status-circle.svg?size=24&stroke=ffc107" wb-if="'{{status}}' == 'progress'">
                        <img data-src="/module/myicons/checkmark-circle-1.svg?size=24&stroke=10b759" wb-if="'{{status}}' == 'ready'">
                        <img data-src="/module/myicons/attachment-link-circle.svg?size=24&stroke=10b759" wb-if="'{{status}}' == 'preview'">
                        <img data-src="/module/myicons/warning-alarm-delete-error.svg?size=24&stroke=dc3545" wb-if="'{{status}}' == 'error'">
                        <input wb-module="swico" name="archive" wb-if="'{{status}}' == 'archive'" data-ico-on="zip-archive-circle" data-ico-off="checkmark-circle-1"
                            data-color-on="dc3545" data-color-off="10b759" onchange="wbapp.save($(this),{'table':'{{_form}}','id':'{{_id}}','field':'archive','silent':'true'})">


                        <!--img data-src="/module/myicons/zip-archive-circle.svg?size=24&stroke=dc3545"
                            wb-if="'{{status}}' == 'archive'"-->
                    </td>
                    <td>
                        <a href="javascript:" data-ajax="{'url':'/cms/ajax/form/docs/edit/{{id}}','html':'#yongerDocs modals'}" data-id="{{id}}"
                            class="d-inline editBtn">
                            <img src="/module/myicons/content-edit-pen.svg?size=24&stroke=323232">
                        </a>
                        <a href="javascript:" wb-if="'{{_sess.user.role}}'=='admin'" data-ajax="{'url':'/ajax/rmitem/docs/{{id}}','update':'cms.list.docs','html':'#yongerDocs modals'}"
                            class="d-inline">
                            <img src="/module/myicons/trash-delete-bin.2.svg?size=24&stroke=dc3545" class="d-inline">
                        </a>
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


    <modals></modals>
</div>
<script wb-app>
</script>

</html>