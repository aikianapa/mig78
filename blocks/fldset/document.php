<html>
<fieldset class="row" id="fldset_document" header="Документ (серия, номер и тд.)">
    <div class="col-sm-3">
        <div class="form-group">
            <label class="form-control-label">Наименование документа</label>
            <input type="text" name="dname" class="form-control" placeholder="Наименование">
        </div>
    </div>

    <div class="col-sm-3">
        <div class="row">
            <div class="col-4">
                <div class="form-group">
                    <label class="form-control-label">Серия</label>
                    <input type="text" name="dser" class="form-control" placeholder="Серия">
                </div>
            </div>
            <div class="col-8">
                <div class="form-group">
                    <label class="form-control-label">Номер</label>
                    <input type="number" name="dnum" class="form-control" placeholder="Номер">
                </div>
            </div>
        </div>
    </div>

    <div class="col-sm-3">
        <div class="form-group">
            <label class="form-control-label">Дата выдачи</label>
            <input type="datepicker" wb="module=datetimepicker" wb-mask="99.99.9999" name="ddate" class="form-control" placeholder="Дата выдачи">
        </div>
    </div>

    <div class="col-sm-3">
        <div class="form-group">
            <label class="form-control-label">Дата окончания</label>
            <input type="datepicker" wb="module=datetimepicker" wb-mask="99.99.9999" name="dexpire" class="form-control" placeholder="Дата окончания"
                optional>
        </div>
    </div>

    <div class="col-12">
        <div class="form-group row">
            <label class="col-sm-3 form-control-label">Кем выдан</label>
            <div class="col-sm-9">
                <input type="text" name="dwho" class="form-control" placeholder="Кем выдан">
            </div>
        </div>
    </div>
</fieldset>

</html>