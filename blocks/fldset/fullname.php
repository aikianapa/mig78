<html>
<fieldset class="row" id="fldset_fullname" header="Полное имя">
    <div class="col-sm-4">
        <div class="form-group">
            <label class="form-control-label">Фамилия</label>
            <input type="text" name="last_name" class="form-control" placeholder="Фамилия">
        </div>
    </div>
    <div class="col-sm-4">
        <div class="form-group">
            <label class="form-control-label">Имя</label>
            <input type="text" name="first_name" class="form-control" placeholder="Имя">
        </div>

    </div>
    <div class="col-sm-4">
        <div class="form-group">
            <label class="form-control-label">Отчество</label>
            <input type="text" name="middle_name" class="form-control" placeholder="Отчество">
        </div>
    </div>
    <input name="fullname" type="hidden">
    <script>
        $('#fldset_fullname input:not([name=fullname])').off('change');
        $('#fldset_fullname input:not([name=fullname])').on('change', function() {
            let l = $('#fldset_fullname input[name=last_name]').val()
            let f = $('#fldset_fullname input[name=first_name]').val()
            let m = $('#fldset_fullname input[name=middle_name]').val()
            let fn = l + ' ' + f + ' ' + m
            $('#fldset_fullname input[name=fullname]').val(fn.trim())
        })
    </script>
</fieldset>
</html>