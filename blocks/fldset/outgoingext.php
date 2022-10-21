<html>
<fieldset class="row" id="fldset_outgoext" header="Выезды из РФ (расширенный)">
    <div class="divider-text">Выезд за пределы РФ</div>
    <div class="col-12">
        <wb-multiinput name="outgoext">
            <div class="col-12">
                <div class="row">

                    <div class="col-sm-3 mb-1">
                        <select name="country" class="form-control form-control-sm select2" placeholder="Страна выезда" wb-tree="item=countries&tpl=false">
                            <option value="{{id}}">{{name}}</option>
                        </select>
                    </div>
                    <div class="col-sm-3 mb-1">
                        <input type="datepicker" wb="module=datetimepicker" wb-mask="99.99.9999" class="form-control form-control-sm" name="date_out"
                            placeholder="Дата выезда">
                    </div>
                    <div class="col-sm-3 mb-1">
                        <input type="text" class="form-control form-control-sm" name="place" placeholder="Место пересечения границы">
                    </div>
                    <div class="col-sm-3 mb-1">
                        <input type="text" class="form-control form-control-sm" name="reason" placeholder="Цель поездки">
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="row">
                    <div class="col-sm-3 mb-1">
                        <select name="country_in" class="form-control form-control-sm select2" placeholder="Страна въезда" wb-tree="item=countries&tpl=false">
                            <option value="{{id}}">{{name}}</option>
                        </select>
                    </div>
                    <div class="col-sm-3 mb-1">
                        <input type="datepicker" wb="module=datetimepicker" wb-mask="99.99.9999" class="form-control form-control-sm" name="date_in"
                            placeholder="Дата въезда">
                    </div>
                    <div class="col-sm-3 mb-1">
                        <input type="text" class="form-control form-control-sm" name="place_in" placeholder="Место пересечения границы">
                    </div>
                </div>
            </div>
        </wb-multiinput>
    </div>
</fieldset>

</html>