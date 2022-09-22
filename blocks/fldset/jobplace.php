<html>
<fieldset class="row" id="fldset_jobplace" header="Места работы">
    <div class="col-12">
        <wb-multiinput name="jobplace">
            <div class="col-md-6 col-lg-2 mb-1">
                <input type="datepicker" wb="module=datetimepicker" wb-mask="99.99.9999" class="form-control" name="date_in" placeholder="Дата приёма">
            </div>
            <div class="col-md-6 col-lg-2 mb-1">
                <input type="datepicker" wb="module=datetimepicker" wb-mask="99.99.9999" class="form-control" name="date_out" placeholder="Дата увольнения">
                </div>
            <div class="col-md-6 col-lg-4 mb-1">
                <input class="form-control" type="text" name="jobname" placeholder="Место работы, должность">
                </div>
            <div class="col-md-6 col-lg-4 mb-1">
                <input class="form-control" type="text" name="jobaddr" placeholder="Адрес места работы">
                </div>
        </wb-multiinput>
    </div>
</fieldset>
</html>