<html>
<fieldset class="row" id="fldset_criminal" header="Судимость">
    <div class="col-12">
        <div class="form-group row">
            <label class="form-control-label col-sm-3">Где осуждены</label>
            <div class="col-sm-9">
                <input type="text" name="crim_where" class="form-control" placeholder="Где осуждены">
            </div>
        </div>

        <div class="row">
            <div class="col-4">
                <div class="form-group">
                    <label class="form-control-label">Когда осуждены</label>
                    <input type="text" name="crim_when" class="form-control" placeholder="Когда осуждены">
                </div>
            </div>
            <div class="col-4">
                <div class="form-group">
                    <label class="form-control-label">Срок наказания</label>
                    <input type="text" name="crim_period" class="form-control" placeholder="Срок наказания">
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-group">
                    <label class="form-control-label">Дата отбытия наказания</label>
                    <input type="datepicker" wb="module=datetimepicker" wb-mask="99.99.9999" name="crim_date" class="form-control" placeholder="Дата отбытия наказания">
                </div>
            </div>
        </div>
    </div>

</fieldset>

</html>