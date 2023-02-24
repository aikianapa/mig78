<html>
<div class="modal fade effect-scale show removable" id="modalScansEdit" data-keyboard="false" data-backdrop="static"
    tabindex="-1" role="dialog" aria-hidden="true" data-id="{{id}}" wb-allow="admin,partner,reg,doc,oper">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header row">
                <div class="col-5">
                    <h5>Описание документа</h5>
                </div>
                <div class="col-7">

                </div>
                <i class="cursor-pointer fa fa-close r-20 position-absolute" data-dismiss="modal"
                    aria-label="Close"></i>
            </div>
            <div class="modal-body pd-20">
                <form class="row" method="post" id="{{_form}}EditForm">
                    <div class="col-12">
                        <div class="mb-2 form-group row">
                            <label class="col-lg-3 form-control-label">Идентификатор</label>
                            <div class="col-lg-9">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="p-1 input-group-text">
                                            <input name="active" wb-module="swico">
                                        </span>
                                    </div>
                                    <input type="text" name="id" class="form-control" wb="module=smartid" required
                                        wb-enabled="admin">
                                </div>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="form-control-label col-sm-3">Категории</label>
                            <div class="col-sm-9">
                                <select name="categories" multiple class="form-control" wb-select2
                                    wb-tree="dict=categories">
                                    {{_current}}
                                    <option value="{{id}}">{{name}}</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-3">Тэги</label>
                            <div class="col-sm-9">
                                <input placeholder="Тэги" class="form-control" type="text" name="tags"
                                    wb-module="tagsinput">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3">Наименование</label>
                            <div class="col-sm-9">
                                <input placeholder="Наименование" class="form-control" type="text" name="name"
                                    wb-module="langinp">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-3">Описание</label>
                            <div class="col-sm-9">
                                <textarea rows="auto" placeholder="Короткое описание услуги" class="form-control"
                                    name="short_descr" wb-module="langinp"></textarea>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-3">Описание</label>
                            <div class="col-sm-9">
                                <textarea rows="auto" placeholder="Полное описание услуги" class="form-control"
                                    name="descr" wb-module="langinp"></textarea>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="form-control-label col-3">Цена</label>
                            <div class="col-9">
                                <wb-multiinput name="prices">
                                    <div class="col-6">
                                        <input type="text" class="form-control" name="price" placeholder="Цена">
                                    </div>
                                    <div class="col-6">
                                        <input type="text" class="form-control" name="price_period" wb-module="langinp"
                                            placeholder="Срок/Период">
                                    </div>
                                </wb-multiinput>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="form-control-label col-3">Процент отчислений</label>
                            <div class="col-sm-2">
                                <input class="form-control tx-right" name="percent" type="number">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3">Реф. ссылка</label>
                            <div class="col-sm-9">
                                <input placeholder="Реферальная ссылка" class="form-control" type="text" name="refurl">
                            </div>
                        </div>

                        <wb-include wb-src="/forms/reqlist/fldset_dict.php"></wb-include>
                    </div>

                </form>
                <div style="margin-bottom:200px;">
                    &nbsp;
                </div>

            </div>
            <div class="modal-footer pd-x-20 pd-b-20 pd-t-0 bd-t-0">
                <wb-include wb="{'form':'common_formsave.php'}" />
            </div>
        </div>
    </div>
</div>
<style>
@media screen and (min-width: 1350px) {
    .row.photoswipe {
        position: fixed;
        top: 0;
        left: -81px;
        height: 100vh;
        width: 100px;
        overflow-y: scroll;
        overflow-x: hidden;
        display: block;
    }

    .row.photoswipe img {
        margin-bottom: 10px;
    }

}
</style>
<script>
$('#exportPDF').off('click');
$('#exportPDF').on('click', function() {
    let data = $('#{{_form}}EditForm').serializeJson();
    wbapp.post('/module/docs/quote/', data, function(res) {
        window.open(res.path, '_blank').focus();
    })
})
</script>

</html>