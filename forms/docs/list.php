<html>
<div class="m-3" id="yongerDocs" wb-allow="admin,partner,reg,doc,oper">

    <nav class="nav navbar navbar-expand-md col">
        <h3 class="tx-bold tx-spacing--2 order-1">Документы</h3>
        <button class="navbar-toggler order-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <i class="wd-20 ht-20 fa fa-ellipsis-v"></i>
        </button>

        <div class="collapse navbar-collapse order-3 flex-row-reverse" id="navbarSupportedContent">
            <form class="form-inline flex-row-reverse mg-t-10 mg-lg-0" onsubmit="return false;">

                <div class="form-group">
                    <input class="form-control mg-r-10 col-auto" type="search" placeholder="Поиск..." aria-label="Поиск..." data-ajax="{'target':'#{{_form}}List','filter_add':{'$or':[{ 'doc_num' : {'$like' : '$value'} }, { 'fullname': {'$like' : '$value'} }, { 'quotename': {'$like' : '$value'} }]} }">

                    <!--a href="#" data-ajax="{'url':'/cms/ajax/form/docs/edit/_new','html':'#yongerDocs modals'}" class="ml-auto order-2 float-right btn btn-primary">
                        <img src="/module/myicons/item-select-plus-add.svg?size=24&stroke=FFFFFF" /> Новый
                    </a-->
                </div>

            <div class="dropdown ml-auto mr-2">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    Фильтр
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#" data-ajax="{'target':'#{{_form}}List','filter_remove': ['*status','flag']}">
                        <svg class="mi mi-asterisk-rotate-arrow-circle" size="24" stroke="666666" wb-on wb-module="myicons"></svg>
                        Все</a>
                    <a class="dropdown-item" href="#" data-ajax="{'target':'#{{_form}}List','filter_remove': 'status flag','filter_add':{'*status':'new'}}">
                        <svg class="mi mi-thunder-lightning-circle.1" size="24" stroke="666666" wb-on wb-module="myicons"></svg>
                        Новые</a>
                    <a class="dropdown-item" href="#" data-ajax="{'target':'#{{_form}}List','filter_remove': 'status flag','filter_add':{'*status':'progress'}}">
                        <svg class="mi mi-loading-checkmark-status-circle" size="24" stroke="ffc107" wb-on wb-module="myicons"></svg>
                        В работе
                    </a>
                    <a class="dropdown-item" href="#" data-ajax="{'target':'#{{_form}}List','filter_remove': 'status flag','filter_add':{'*status':'preview'}}">
                        <svg class="mi mi-attachment-link-circle" size="24" stroke="ffc107" wb-on wb-module="myicons"></svg>
                        Превью
                    </a>
                    <a class="dropdown-item" href="#" data-ajax="{'target':'#{{_form}}List','filter_remove': 'status flag','filter_add':{'*status':'ready'}}">
                        <svg class="mi mi-checkmark-circle-1" size="24" stroke="10b759" wb-on wb-module="myicons"></svg>
                        Готовые</a>
                    <a class="dropdown-item" href="#" data-ajax="{'target':'#{{_form}}List','filter_remove': 'status flag','filter_add':{'*status':'archive'}}">
                        <svg class="mi mi-zip-archive-circle" size="24" stroke="dc3545" wb-on wb-module="myicons"></svg>
                        Архив</a>
                </div>
            </div>

            </form>
        </div>
    </nav>

    <wb-var date="" />
    <wb-var filter="" wb-if="'{{_sess.user.role}}'=='admin'" />
    <wb-var filter="oper={{_sess.user.id}}" wb-if="'{{_sess.user.role}}'=='oper'" />

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
            <wb-foreach wb="table=docs&sort=_created:d&bind=cms.list.docs&sort=_created:d&size={{_sett.page_size}}"
                __wb-return="id;doc_num;doc_ser;date;@status;order;status;birth_date;fullname;_created;code;_id;_table;_form;_creator;_created;_role;_site"
                wb-filter="{{_var.filter}}">
                <tr wb-if="'{{_var.date}}'!=='{{date}}'" class="bg-transparent">
                    <td colspan="5">
                        <wb-var date="{{date}}" />
                        <div class="divider-text tx-primary">{{date}}</div>
                    </td>
                </tr>
                <tr>
                    <td>{{last_name}} {{first_name}} {{middle_name}}
                        <img loading="lazy" src="/module/myicons/bookmark-favorite-minus.svg?size=18&stroke=10b759" wb-if="'{{oper}}'=='{{_sess.user.id}}'">
                        <br />
                        <small>{{birth_date}}</small>
                    </td>
                    <td>{{doc_ser}} №{{doc_num}}</td>
                    <td>{{quotename}}</td>
                    <td>
                        <svg class="mi mi-thunder-lightning-circle.1" size="24" stroke="666666" wb-on wb-module="myicons" title="Новый" wb-if="'{{status}}' == 'new'"></svg>
                        <svg class="mi mi-loading-checkmark-status-circle" size="24" stroke="ffc107" wb-on wb-module="myicons" title="В процессе" wb-if="'{{status}}' == 'progress'"></svg>
                        <svg class="mi mi-checkmark-circle-1" size="24" stroke="10b759" wb-on wb-module="myicons" title="Готовый" wb-if="'{{status}}' == 'ready'"></svg>
                        <svg class="mi mi-attachment-link-circle" size="24" stroke="10b759" wb-on wb-module="myicons" title="Превью" wb-if="'{{status}}' == 'preview'"></svg>
                        <svg class="mi mi-warning-alarm-delete-error" size="24" stroke="dc3545" wb-on wb-module="myicons" title="Ошибка" wb-if="'{{status}}' == 'error'"></svg>
                        <input wb-module="swico" name="archive" wb-if="'{{status}}' == 'archive'" data-ico-on="zip-archive-circle" data-ico-off="checkmark-circle-1" title="Архив"
                            data-color-on="dc3545" data-color-off="10b759" onchange="wbapp.save($(this),{'table':'{{_form}}','id':'{{_id}}','field':'archive','silent':'true'})">


                        <!--img data-src="/module/myicons/zip-archive-circle.svg?size=24&stroke=dc3545"
                            wb-if="'{{status}}' == 'archive'"-->
                    </td>
                    <td>
                        <a href="javascript:" data-ajax="{'url':'/cms/ajax/form/docs/edit/{{id}}','html':'#yongerDocs modals'}" data-id="{{id}}"
                            class="d-inline editBtn">
                            <svg class="d-inline mi mi-content-edit-pen.svg" size="24" stroke="323232" wb-on wb-module="myicons"></svg>
                        </a>
                        <a href="javascript:" wb-if="'{{_sess.user.role}}'=='admin'" data-ajax="{'url':'/ajax/rmitem/docs/{{id}}','update':'cms.list.docs','html':'#yongerDocs modals'}"
                            class="d-inline">
                            <svg class="d-inline mi mi-trash-delete-bin.2.svg" size="24" stroke="dc3545" wb-on wb-module="myicons"></svg>
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
<script>
    $('.datetimepicker.dropdown-menu').remove()
</script>
</html>