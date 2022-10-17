 <html>
<fieldset class="row" id="fldset_custody" header="Подопечный">
    <div class="col">
        
    
    <div class="form-group row">
        <div class="col-sm-3">
            <label class="form-control-label">Подопечный</label>
        </div>
        <div class="col-sm-9">
            <select name="custody" class="form-control" wb-select2 placeholder="Подопечный" wb-tree="item=custody&branch=child&parent=false&tpl=false">
                <option value="{{id}}">{{name}}</option>
            </select>
        </div>
    </div>
    </div>
</fieldset>
 </html>