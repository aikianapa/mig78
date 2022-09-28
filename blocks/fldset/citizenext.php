<html>
<fieldset class="row" id="fldset_citizenext" header="Гражданство (расширенное)">
    <div class="divider-text col-12">Приобретение гражданства</div>
    <div class="form-group col-sm-4">
        <label class="form-control-label">Государство</label>
        <select name="ciexCountry" class="form-control select2" placeholder="Государство" wb-tree="item=countries&tpl=false">
            <option value="{{id}}">{{data.fullname}}</option>
        </select>
    </div>
    <div class="form-group col-sm-4">
        <label class="form-control-label">Место приобретения</label>
        <select name="ciexPlace" class="form-control select2" placeholder="Место приобретения" wb-tree="item=countries&tpl=false">
            <option value="{{id}}">{{name}}</option>
        </select>
    </div>
    <div class="form-group col-sm-4">
        <label class="form-control-label">Дата приобретения</label>
        <input type="datepicker" wb="module=datetimepicker" wb-mask="99.99.9999" name="ciexDate" class="form-control" placeholder="Дата приобретения">
    </div>
    <div class="form-group col-12">
        <div class="row">
        <label class="form-control-label col-sm-3">Основание приобретения</label>
        <div class="col-sm-9">
        <input type="text" name="ciexReason" class="form-control" placeholder="Основание приобретения">
        </div>
        </div>
    </div>
    <div class="divider-text col-12">Утрата гражданства</div>
    <div class="form-group col-sm-4">
        <label class="form-control-label">Без гражданства</label>
        <wb-module wb="module=switch" name="ciexOut_check"></wb-module>
    </div>
    <div class="form-group col-sm-4">
        <label class="form-control-label">Место утраты</label>
        <select name="ciexOutPlace" class="form-control select2" placeholder="Место утраты" wb-tree="item=countries&tpl=false">
            <option value="{{id}}">{{name}}</option>
        </select>
    </div>
    <div class="form-group col-sm-4">
        <label class="form-control-label">Дата утраты</label>
        <input type="datepicker" wb="module=datetimepicker" wb-mask="99.99.9999" name="ciexOutDate" class="form-control" placeholder="Дата приобретения">
    </div>
    <div class="form-group col-12">
        <div class="row">
        <label class="form-control-label col-sm-3">Основание утраты</label>
        <div class="col-sm-9">
        <input type="text" name="ciexOutReason" class="form-control" placeholder="Основание утраты">
        </div>
        </div>
    </div>


</fieldset>

</html>