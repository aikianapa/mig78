<html>
<fieldset class="row" id="fldset_birth" header="Дата и место рождения">

    <div class="col-sm-3">
        <div class="form-group">
            <label class="form-control-label">Дата рождения</label>
            <input type="datepicker" wb="module=datetimepicker" wb-mask="99.99.9999" name="birth_date" class="form-control" placeholder="Дата рождения">
        </div>
    </div>

    <div class="col-sm-3">
        <div class="form-group">
            <label class="form-control-label">Страна рождения</label>
            <select name="birth_country" class="form-control select2" placeholder="Страна рождения" wb-tree="item=countries&tpl=false">
                <option value="{{id}}">{{name}}</option>
            </select>
        </div>
    </div>

    <div class="col-sm-6">
        <div class="form-group">
            <label class="form-control-label">Место рождения</label>
            <input type="text" name="birth_place" class="form-control" placeholder="Место рождения">
        </div>
    </div>

</fieldset>

</html>