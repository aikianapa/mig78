 <html>
<fieldset class="row" id="fldset_custody" header="Опекун">
    <div class="col">
        
    
    <div class="form-group row">
        <div class="col-sm-3">
            <label class="form-control-label">Опекун</label>
        </div>
        <div class="col-sm-9">
            <select name="custodian" class="form-control" wb-select2 placeholder="Опекуны" wb-tree="item=custody&branch=adult&parent=false&tpl=false">
                <option value="{{id}}">{{name}}</option>
            </select>
        </div>
    </div>
    </div>
</fieldset>
 </html>