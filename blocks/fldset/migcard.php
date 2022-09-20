<html>
<fieldset class="row" id="fldset_migcard" header="Миграционная карта">
    <div class="col-12">
        <div class="row">
            <div class="form-group col-sm-6">
                <label class="form-control-label">Серия</label>
                <input type="text" name="mc_ser" class="form-control" placeholder="Серия">
            </div>

            <div class="form-group col-sm-6">
                <label class="form-control-label">Номер</label>
                <input type="number" name="mc_num" class="form-control" placeholder="Номер">
            </div>
        </div>
        <div class="row">
            <div class="form-group col-sm-6">
                <label class="form-control-label">Дата выдачи</label>
                <input type="datepicker" wb="module=datetimepicker" wb-mask="99.99.9999" name="mc_date" class="form-control" placeholder="Дата выдачи">
            </div>

            <div class="form-group col-sm-6">
                <label class="form-control-label">Дата окончания</label>
                <input type="datepicker" wb="module=datetimepicker" wb-mask="99.99.9999" name="mc_expire" class="form-control" placeholder="Дата окончания">
            </div>
        </div>
    </div>

</fieldset>

</html>