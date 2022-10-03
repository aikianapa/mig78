<html>
<div class="modal fade effect-scale show removable" id="modaldocsEdit" data-keyboard="false" data-backdrop="static" tabindex="-1"
    role="dialog" aria-hidden="true" data-id="{{id}}" wb-allow="admin,oper">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header row">
                <div class="col-5">
                    <h5>Первичные данные</h5>
                </div>
                <div class="col-7">
                    <button class="btn btn-primary" type="button" id="exportPDF">Сформировать</button>
                </div>
                <i class="fa fa-close r-20 position-absolute cursor-pointer" data-dismiss="modal" aria-label="Close"></i>
            </div>
            <div class="modal-body pd-20">
                <form class="row" method="post" id="{{_form}}EditForm">
                    <meta name="scan" content="{{_route.params.scan}}">
                    <input type="hidden" name="status" value='new' wb-if="'{{status}}'==''">
                    <input type="hidden" name="operator" value='{{_sess.user.id}}' wb-if="'{{status}}'==''">
                    <div class="col-12">
                        <div class="form-group">
                            <h3 wb-tree="dict=reqlist&branch={{quote}}">{{name}}</h3>
                            <input type="hidden" name="quote">
                        </div>

                    </div>
                    <div class="form-content col-12">

                    </div>

                    <script wbapp>
                        $('#{{_form}}EditForm [name=quote]').one('change', function() {
                            let scan_id = "{{id}}"
                            wbapp.post('/form/docs/fldsetgen/' + $(this).val(), {
                                scan_id: scan_id
                            }, function(res) {
                                $('#{{_form}}EditForm .form-content').html(res);
                                wbapp.init();
                            });
                        }).trigger('change')
                        $('#exportPDF').off('click');
                        $('#exportPDF').on('click', function() {
                            let data = $('#{{_form}}EditForm').serializeJson();
                            wbapp.post('/module/docs/quote/', data, function(res) {
                                window.open(res.path, '_blank').focus();
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
</html>