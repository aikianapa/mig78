<html>
<fieldset class="row" id="fldset_maritalext" header="Семейное положение (расширенное)">
    <div class="form-group col-sm-4">
        <label class="form-control-label">Семейное положение</label>
        <select name="marital" class="form-control select2" placeholder="Семейное положение" wb-tree="item=marital_status&tpl=false">
            <option value="{{id}}">{{name}}</option>
        </select>
    </div>
    <div class="form-group col-sm-4">
        <label class="form-control-label">Номер св-ва о браке/разводе</label>
        <input type="text" name="maritalDoc" class="form-control" placeholder="Номер св-ва">
    </div>
    <div class="form-group col-sm-4">
        <label class="form-control-label">Дата выдачи</label>
        <input type="datepicker" wb="module=datetimepicker" wb-mask="99.99.9999" name="maritalDate" class="form-control" placeholder="Дата приобретения">
    </div>
    <div class="form-group col-12">
        <div class="row">
        <label class="form-control-label col-sm-3">Место выдачи</label>
        <div class="col-sm-9">
        <input type="text" name="maritalPlace" class="form-control" placeholder="Место выдачи">
        </div>
        </div>
    </div>
</fieldset>

</html>