<html>
<div class="divider-text">Наборы полей для заполнения</div>

<div class="form-group col-12">
    <div class="row">
    <label class="form-control-label col-6">Наименование набора полей</label>
    <label class="form-control-label col-3">Префикс</label>
    <label class="form-control-label col">Обязательное</label>
    </div>
    <wb-multiinput name="fields">
        <div class="col-10 mb-1 d-none">
            <input type="text" class="form-control" name="label" placeholder="Заголовок поля">
        </div>
        <div class="col-6">
            <select name="fldset" class="form-control" wb-select2 placeholder="Набор полей">
                <wb-foreach wb="ajax=/form/docs/fldsetsel&tpl=false">
                    <option value="{{name}}">{{header}}</option>
                </wb-foreach>
            </select>
        </div>
        <div class="col-4">
            <div class="input-group">
                <input type="text" class="form-control" name="prefix">
                <div class="input-group-append">
                    <span class="input-group-text" onclick="$(this).parents('.wb-multiinput-row').find('.col-10').toggleClass('d-none')">></span>
                </div>
            </div>
        </div>
        <div class="col">
            <input type="checkbox" class="form-control wd-20" name="required">
        </div>
    </wb-multiinput>
</div>

</html>