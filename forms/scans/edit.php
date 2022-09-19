<html>
<div class="modal fade effect-scale show removable" id="modalScansEdit" data-keyboard="false" data-backdrop="static" tabindex="-1"
    role="dialog" aria-hidden="true" data-id="{{id}}">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header row">
                <div class="col-5">
                    <h5>Первичные данные</h5>
                </div>
                <div class="col-7">
                    <h5 class='header'></h5>
                </div>
                <i class="fa fa-close r-20 position-absolute cursor-pointer" data-dismiss="modal" aria-label="Close"></i>
            </div>
            <div class="modal-body pd-20">
                <form class="row" method="post" id="{{_form}}EditForm">
                    <meta name="scan" content="{{_route.params.scan}}">
                    <input type="hidden" name="inprint">
                    <input type="hidden" name="status" value='new' wb-if="'{{status}}'==''">

                    <div class="col-12">
                        <div class="form-group">
                            <label class="form-control-label">Тема запроса</label>
                            <select name="citizen" class="form-control select2" placeholder="Тема запроса" wb-tree="item=reqlist&tpl=false" required>
                                <option data-docs="{{data.doc}}" value="{{id}}">{{name}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-sm-3">
                        <div class="form-group">
                            <label class="form-control-label">Фамилия</label>
                            <input type="text" name="last_name" class="form-control" placeholder="Фамилия" required>
                        </div>

                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <label class="form-control-label">Имя</label>
                            <input type="text" name="first_name" class="form-control" placeholder="Имя" required>
                        </div>

                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <label class="form-control-label">Отчество</label>
                            <input type="text" name="middle_name" class="form-control" placeholder="Отчество">
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <label class="form-control-label">Пол</label>
                            <select name="gender" class="form-control" wb-select2 placeholder="Пол" required>
                                <option value="М">Мужской</option>
                                <option value="Ж">Женский</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-sm-3">
                        <div class="form-group">
                            <label class="form-control-label">Гражданство</label>
                            <select name="citizen" class="form-control select2" placeholder="Гражданство" wb-tree="item=countries&tpl=false" required>
                                <option value="{{id}}">{{name}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-sm-3">
                        <div class="form-group">
                            <label class="form-control-label">Дата рождения</label>
                            <input type="datepicker" wb="module=datetimepicker" wb-mask="99.99.9999" name="birth_date" class="form-control" placeholder="Дата рождения"
                                required>
                        </div>
                    </div>

                    <div class="col-sm-3">
                        <div class="form-group">
                            <label class="form-control-label">Место рождения</label>
                            <input type="text" name="birth_place" class="form-control" placeholder="Место рождения" required>
                        </div>
                    </div>

                    <div class="col-sm-3">
                        <div class="form-group">
                            <label class="form-control-label">Телефон</label>
                            <input wb-module="mask" wb-mask="89999999999" name="phone" class="form-control" placeholder="Телефон" required>
                        </div>
                    </div>


                    <div class="col-12">
                        <div class="divider-text">Паспорт</div>
                    </div>


                    <div class="col-sm-3">
                        <div class="form-group">
                            <label class="form-control-label">Документ</label>
                            <select name="doc_type" readonly class="form-control select2" placeholder="Документ">
                                <option value="Паспорт">Паспорт</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-sm-3">
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label class="form-control-label">Серия</label>
                                    <input type="text" name="doc_ser" class="form-control" placeholder="Серия">
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="form-group">
                                    <label class="form-control-label">Номер</label>
                                    <input type="number" name="doc_num" class="form-control" placeholder="Номер" required>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-3">
                        <div class="form-group">
                            <label class="form-control-label">Дата выдачи</label>
                            <input type="datepicker" wb="module=datetimepicker" wb-mask="99.99.9999" name="doc_date" class="form-control" placeholder="Дата выдачи"
                                required>
                        </div>
                    </div>

                    <div class="col-sm-3">
                        <div class="form-group">
                            <label class="form-control-label">Дата окончания</label>
                            <input type="datepicker" wb="module=datetimepicker" wb-mask="99.99.9999" name="doc_expire" class="form-control" placeholder="Дата окончания">
                        </div>
                    </div>

                    <div class="col-12">


                        <div class="form-group row">
                            <label class="col-sm-3 form-control-label">Кем выдан</label>
                            <div class="col-sm-9">
                                <input type="text" name="doc_who" class="form-control" placeholder="Кем выдан" required>
                            </div>

                        </div>
                    </div>

                    <div class="col-12">
                        <div class="form-group row">
                            <label class="col-sm-3 form-control-label">Срок пребывания</label>
                            <div class="col-sm-9">
                                <input type="datepicker" wb="module=datetimepicker" wb-mask="99.99.9999" name="date_out" class="form-control" placeholder="Срок пребывания"
                                    required>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 address">
                        <div class="divider-text">Регистрация</div>
                        <div class="form-group row">
                            <label class=" col-sm-3 form-control-label">Регион</label>
                            <div class="col-sm-9">
                                <select name="region" class="form-control select2" wb-tree="dict=locations&branch=regions&parent=false">
                                    <option value="{{name}}">{{name}}</option>
                                </select>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group col-sm-3">
                                Населённый пункт
                            </div>
                            <div class="form-group col-sm-4">
                                <select name="reg_city_type" class="form-control select2" wb-tree="item=locations&tpl=false&branch=city_type&parent=false"
                                    data-required>
                                    <option value="{{data.short}}">{{name}}</option>
                                </select>
                            </div>

                            <div class="form-group col-sm-5">
                                <input type="text" name="reg_city" class="form-control" placeholder="Населённый пункт" data-required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-3">
                                Название улицы
                            </div>
                            <div class="form-group col-sm-4">
                                <select name="reg_street_type" class="form-control select2" wb-tree="item=locations&tpl=false&branch=street_type&parent=false">
                                    <option value="{{data.short}}">{{name}}</option>
                                </select>
                            </div>

                            <div class="form-group col-sm-5">
                                <input type="text" name="reg_street" class="form-control" placeholder="Название улицы">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <label class="form-control-label">Тип</label>
                                <select name="reg_house" placeholder="Дом/участок/владение" class="form-control select2" wb-tree="item=locations&tpl=false&branch=obj_type&parent=false">
                                    <option value="{{data.short}}">{{name}}</option>
                                </select>
                            </div>
                            <div class="col-sm-6">
                                <label class="form-control-label">Номер</label>
                                <input type="text" name="reg_house_num" class="form-control" placeholder="Номер дома">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <label class="form-control-label">Корпус</label>
                                <input type="text" name="reg_corpse" class="form-control" placeholder="Корпус">
                            </div>
                            <div class="col-sm-6">
                                <label class="form-control-label">Строение</label>
                                <input type="text" name="reg_build" class="form-control" placeholder="Строение">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <label class="form-control-label">Тип (кв/комн/пом)</label>
                                <select name="reg_flat" class="form-control select2" placeholder="Тип помещения" wb-tree="item=locations&tpl=false&branch=flat_type&parent=false">
                                    <option value="{{data.short}}">{{name}}</option>
                                </select>
                            </div>
                            <div class="col-sm-6">
                                <label class="form-control-label">Номер</label>
                                <input type="text" name="reg_flat_num" class="form-control" placeholder="Номер помещения">
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="divider-text">Миграционная карта</div>

                        <div class="row">
                            <div class="form-group col-sm-6">
                                <label class="form-control-label">Серия</label>
                                <input type="text" name="mc_ser" class="form-control" placeholder="Серия" required>
                            </div>

                            <div class="form-group col-sm-6">
                                <label class="form-control-label">Номер</label>
                                <input type="number" name="mc_num" class="form-control" placeholder="Номер" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <label class="form-control-label">Дата выдачи</label>
                                <input type="datepicker" wb="module=datetimepicker" wb-mask="99.99.9999" name="mc_date" class="form-control" placeholder="Дата выдачи"
                                    required>
                            </div>

                            <div class="form-group col-sm-6">
                                <label class="form-control-label">Дата окончания</label>
                                <input type="datepicker" wb="module=datetimepicker" wb-mask="99.99.9999" name="mc_expire" class="form-control" placeholder="Дата окончания"
                                    required>
                            </div>
                        </div>
                    </div>

                    <textarea type="json" class="d-none" name="sources"></textarea>
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