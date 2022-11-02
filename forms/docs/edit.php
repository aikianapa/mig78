<html>
<div class="modal fade effect-scale show removable" id="modaldocsEdit" data-keyboard="false" data-backdrop="static"
    tabindex="-1" role="dialog" aria-hidden="true" data-id="{{id}}" wb-allow="admin,oper">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header row">
                <div class="col-5">
                    <h5>Первичные данные</h5>
                </div>
                <div class="col-7">
                    <a href="#botChat" class="btn btn-dark" data-toggle="modal">Чат</a>
                    <button class="btn btn-primary" type="button" id="exportPDF">Сформировать</button>
                    <button class="btn btn-secondary d-none" type="button" id="sendDemo">Отправить демо</button>
                    <button class="btn btn-info d-none" type="button" id="sendReady">Отправить документ</button>
                </div>
                <i class="fa fa-close r-20 position-absolute cursor-pointer" data-dismiss="modal"
                    aria-label="Close"></i>
            </div>
            <div class="modal-body pd-20">
                <form class="row" method="post" id="{{_form}}EditForm" autocomplete="off">
                    <meta name="scan" content="{{_route.params.scan}}">
                    <input type="hidden" name="id">
                    <input type="hidden" name="chat_id">
                    <input type="hidden" name="quote">
                    <input type="hidden" name="status">
                    <input type="hidden" name="oper">
                    <input type="hidden" name="document">
                    <input type="hidden" name="payed">
                    <div class="col-12">
                        <div class="form-group">
                            <wb-data wb="table=reqlist&item={{quote}}">
                                <h3 wb-if="'{{name.ru}}' > ' '">{{name.ru}}</h3>
                                <h3 wb-if="'{{name.ru}}' == ''">{{name}}</h3>
                            </wb-data>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-3 form-control-label">Документ готов (демо версия)</label>
                            <div class="col-3">
                                <input type="checkbox" id="docDemo" class="wd-20 ht-20">
                            </div>
                        </div>
                        <div class="form-group row" wb-if="'{{payed}}'=='on'">
                            <label class="col-sm-3 form-control-label">Документ готов и оплачен</label>
                            <div class="col-3">
                                <input type="checkbox" id="docReady" class="wd-20 ht-20">
                            </div>
                        </div>
                    </div>
                    <div class="form-content col-12">

                    </div>

                    <script>
                        $('.datetimepicker.dropdown-menu').remove()
                        wbapp.loadScripts(["/engine/modules/datetimepicker/datetimepicker.js"],"datatimepicker-js",function(){
                        var did = "{{id}}"
                        /*
                        wbapp.post('/form/docs/fldsetgen/' + $('#{{_form}}EditForm [name=quote]').val(), {
                            scan_id: did
                        }, function(res) {
                            $('#{{_form}}EditForm .form-content').html(res);
                            wbapp.init();
                        });
*/
                        $('#{{_form}}EditForm [name=quote]').trigger('change')
                        $('#modaldocsEdit #exportPDF').off('click');
                        $('#modaldocsEdit #exportPDF').on('click', function() {
                            let data = $('#{{_form}}EditForm').serializeJson();
                            wbapp.post('/module/docs/quote/', data, function(res) {
                                window.open(res.uri, '_blank').focus();
                                $('#modaldocsEdit #sendDemo').removeClass('d-none');
                                $('#{{_form}}EditForm [name=document]').val(res.doc);
                                $('#{{_form}}EditForm [name=status]').val('progress');
                                $('#{{_form}}EditForm #docDemo').prop('checked', true);
                            })
                        })
                        $('#modaldocsEdit #sendDemo').off('click');
                        $('#modaldocsEdit #sendDemo').on('click', function() {
                            $('#{{_form}}EditForm #docDemo').trigger('click');
                            wbapp.post('/module/docs/senddoc/', {
                                'uri': $('#{{_form}}EditForm [name=document]').val(),
                                'chat_id': $('#{{_form}}EditForm [name=chat_id]').val(),
                                'doc': $('#{{_form}}EditForm h3').text(),
                                'id': $('#{{_form}}EditForm [name=id]').val(),
                                'demo': true
                            }, function(res) {
                                if (res.ok == true) {
                                    $('#{{_form}}EditForm [name=status]').val('preview');
                                    $('#modaldocsEdit .btn-save').trigger('click');
                                    wbapp.toast('Ошибка', 'Документ успешно отправлен', {
                                        bgcolor: 'success'
                                    });
                                } else {
                                    wbapp.toast('Ошибка', 'Не удалось отправить документ', {
                                        bgcolor: 'warning'
                                    });
                                }
                            })
                        })

                        $('#modaldocsEdit #docDemo').off('click');
                        $('#modaldocsEdit #docDemo').on('click', function() {
                            if ($(this).prop('checked')) {
                                $('#modaldocsEdit #sendDemo').removeClass('d-none');
                            } else {
                                $('#modaldocsEdit #sendDemo').addClass('d-none');

                            }
                        })
                    })
                    </script>

                </form>
                <div class="divider-text">Сканы</div>
                <div class="row mt-3" wb="module=photoswipe&imgset=migreg">
                    <wb-foreach wb="from=sources&tpl=false">
                        <a href="{{_val}}" class="col-3" wb-if="_val > ''">
                            <img data-src="/thumbc/80x100/src{{_val}}?{{wbNewId()}}">
                        </a>
                    </wb-foreach>
                </div>
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
<meta wb-module="botchat" />
</html>