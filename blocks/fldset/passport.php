<html>
<fieldset class="row" id="fldset_passport" header="Паспорт (удостоверение личности)">
    <div class="col-sm-3">
        <div class="form-group">
            <label class="form-control-label">Документ</label>
            <select name="doc_type" readonly class="form-control select2" placeholder="Документ">
                <option value="Паспорт">Паспорт</option>
            </select>
        </div>
    </div>

    <div class="col-sm-3">
        <div class="row">
            <div class="col-4">
                <div class="form-group">
                    <label class="form-control-label">Серия</label>
                    <input type="text" name="doc_ser" class="form-control" placeholder="Серия">
                </div>
            </div>
            <div class="col-8">
                <div class="form-group">
                    <label class="form-control-label">Номер</label>
                    <input type="number" name="doc_num" class="form-control" placeholder="Номер">
                </div>
            </div>
        </div>
    </div>

    <div class="col-sm-3">
        <div class="form-group">
            <label class="form-control-label">Дата выдачи</label>
            <input type="datepicker" wb="module=datetimepicker" wb-mask="99.99.9999" name="doc_date" class="form-control" placeholder="Дата выдачи">
        </div>
    </div>

    <div class="col-sm-3">
        <div class="form-group">
            <label class="form-control-label">Дата окончания</label>
            <input type="datepicker" wb="module=datetimepicker" wb-mask="99.99.9999" name="doc_expire" class="form-control" placeholder="Дата окончания"
                optional>
        </div>
    </div>

    <div class="col-12">


        <div class="form-group row">
            <label class="col-sm-3 form-control-label">Кем выдан</label>
            <div class="col-sm-9">
                <input type="text" name="doc_who" class="form-control" placeholder="Кем выдан">
            </div>

        </div>
    </div>

</fieldset>

</html>