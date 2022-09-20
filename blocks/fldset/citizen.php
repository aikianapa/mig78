<html>
<fieldset class="row" id="fldset_citizen" header="Гражданство">
    <div class="form-group col-sm-4">
        <label class="form-control-label">Гражданство</label>
        <select name="citizen" class="form-control select2" placeholder="Гражданство" wb-tree="item=countries&tpl=false">
            <option value="{{id}}">{{name}}</option>
        </select>
    </div>
</fieldset>
</html>