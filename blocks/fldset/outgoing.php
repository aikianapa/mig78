<html>
<fieldset class="row" id="fldset_outgoing" header="Выезды из РФ">
    <div class="col-12">
        <wb-multiinput name="outgoing">
            <div class="col-sm-4 mb-1">
                <select name="country" class="form-control select2" placeholder="Государство выезда" wb-tree="item=countries&tpl=false">
                    <option value="{{id}}">{{name}}</option>
                </select>
            </div>
            <div class="col-sm-4 mb-1">
                <input type="datepicker" wb="module=datetimepicker" wb-mask="99.99.9999"  class="form-control" name="date_out" placeholder="Дата выезда">
            </div>
            <div class="col-sm-4 mb-1">
                <input type="datepicker" wb="module=datetimepicker" wb-mask="99.99.9999" class="form-control" name="date_in" placeholder="Дата прибытия">
            </div>
        </wb-multiinput>
    </div>
</fieldset>

</html>