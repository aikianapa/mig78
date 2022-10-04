<html>
<div class="modal fade effect-scale show removable" id="modalScansEdit" data-keyboard="false" data-backdrop="static" tabindex="-1"
    role="dialog" aria-hidden="true" data-id="{{id}}" wb-allow="admin,partner,reg,doc,oper">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header row">
                <div class="col-5">
                    <h5 wb-tree="dict=reqlist&branch={{quote}}&parent=false&children=false">{{name}}</h5>
                </div>
                <div class="col-7">
                    <!--button class="btn btn-primary" type="button" id="exportPDF">Сформировать</button-->

                </div>
                <i class="fa fa-close r-20 position-absolute cursor-pointer" data-dismiss="modal" aria-label="Close"></i>
            </div>
            <div class="modal-body pd-20">
                <form class="row" method="post" id="{{_form}}EditForm">
                    <meta name="scan" content="{{_route.params.scan}}">
                    <input type="hidden" name="status" value='new' wb-if="'{{status}}'==''">
                    <input type="hidden" name="operator" value='{{_sess.user.id}}' wb-if="'{{status}}'==''">

                    <div class="col-sm-4">
                        <div class="form-group">
                            <label class="form-control-label">Фамилия</label>
                            <input type="text" name="last_name" class="form-control" placeholder="Фамилия" readonly>
                        </div>

                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label class="form-control-label">Имя</label>
                            <input type="text" name="first_name" class="form-control" placeholder="Имя" readonly>
                        </div>

                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label class="form-control-label">Отчество</label>
                            <input type="text" name="middle_name" class="form-control" placeholder="Отчество" readonly>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="form-group">
                            <label class="form-control-label">Документ</label>
                            <select name="doc_type" readonly class="form-control select2" placeholder="Документ" readonly>
                                <option value="Паспорт">Паспорт</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="form-group">
                            <label class="form-control-label">Серия</label>
                            <input type="text" name="doc_ser" class="form-control" placeholder="Серия" readonly>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label class="form-control-label">Номер</label>
                            <input type="number" name="doc_num" class="form-control" placeholder="Номер" readonly>
                        </div>
                    </div>

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
                <button type="button" class="cms btn-close btn btn-danger" data-dismiss="modal">
                    Отмена
                </button>
                <button class="btn btn-primary" type="button" id="importToDocs">Взять в работу</button>
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
<script wb-app>
    $('#{{_form}}EditForm [name=quote]').on('change', function() {
        let scan_id = "{{id}}"
        wbapp.post('/form/docs/fldsetgen/' + $(this).val(), {
            scan_id: scan_id
        }, function(res) {
            $('#{{_form}}EditForm .form-content').html(res);
            wbapp.init();
        });
    }).trigger('change')
    $('#modalScansEdit #importToDocs').on('click', function() {
        let scan_id = "{{id}}"
        wbapp.post("/api/v2/func/scans/todocs/", {
            id: scan_id
        }, function(data) {
            if (data.error === false) {
                $("#modalScansEdit").modal('hide')
                $('#scansEditForm').trigger('wb-form-save',data);
                setTimeout(function() {
                    wbapp.ajax({
                        'url': '/cms/ajax/form/docs/list',
                        'html': '.content-body'
                    }, function() {
                        $(`.content-body #docsList a.editBtn[data-id="${scan_id}"]`).trigger(
                            'click')
                    })

                }, 200)
            }
        })

    });
</script>

</html>