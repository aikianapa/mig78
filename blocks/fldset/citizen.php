<html>
<fieldset class="row" id="fldset_citizen" header="Гражданство">
        <label class="form-control-label col-sm-3">Гражданство</label>
        <div class="form-group col-sm-3">
        <select name="citizen" class="form-control select2" placeholder="Гражданство" wb-tree="item=countries&tpl=false">
            <option value="{{id}}">{{name}}</option>
        </select>
    </div>
</fieldset>
</html>