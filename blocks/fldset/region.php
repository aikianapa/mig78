<html>
<fieldset class="row" id="fldset_region" header="Регион РФ">
    <div class="col-12" id="{{_var.uid}}">
        <div class="form-group row">
            <label class=" col-sm-3 form-control-label">Регион РФ</label>
            <div class="col-sm-9">
                <select name="regionrf" class="form-control select2" placeholder="Регион" wb-tree="dict=locations&branch=regions&parent=false&children=false&tpl=false">
                    <option value="{{id}}">{{name}}</option>
                </select>
            </div>
        </div>
    </div>
</fieldset>