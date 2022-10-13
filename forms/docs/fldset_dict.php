<html>
<div class="form-group row">
    <label class="form-control-label col-3">Цена</label>
    <div class="col-3">
        <input type="text" class="form-control" name="price">
    </div>
    <label class="form-control-label col-3">Срок выполнения</label>
    <div class="col-3">
        <input type="text" class="form-control" name="price_period">
    </div>
</div>

<div class="row">
    <div class="col-sm-3">
        <label class="form-control-label">Шаблон печатной формы</label>
    </div>
    <div class="col-sm-9">
        <wb-module name="template" wb="{
        'module':'filepicker',
        'mode':'single',
        'width':'70',
        'height':'70',
        'original': true,
        'ext': 'doc,docx,xls,xlsx',
        'path': '/tpl/docs'
    }" />
    </div>
</div>

<div class="row mt-2">
    <label class="form-control-label col-sm-3">Безопасная сделка</label>
    <div class="col-sm-9">
        <input name="safepay" wb-module="module=switch" />
    </div>
</div>

<div class="row mt-2">
    <label class="form-control-label col-sm-3">Документы</label>
    <div class="col-sm-9">
        <select name="doc" multiple class="form-control select2" wb-module="select2" wb-tree="dict=doc_types">
            <option value="{{id}}">{{name}}</option>
        </select>
    </div>
</div>

<div class="row mt-2">
    <label class="form-control-label col-sm-3">Документы (опционально)</label>
    <div class="col-sm-9">
        <select name="doc_opt" multiple class="form-control select2" wb-module="select2" wb-tree="dict=doc_types">
            <option value="{{id}}">{{name}}</option>
        </select>
    </div>
</div>

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