<html>
<fieldset class="row" id="fldset_education" header="Образование">
    <div class="col-sm-4">
        <div class="form-group">
                <select name="edu_common" class="form-control select2" placeholder="Общее образование" wb-tree="dict=education&branch=o&parent=false">
                    <option value="{{id}}">{{name}}</option>
                </select>
        </div>
    </div>
    <div class="col-sm-4">
        <div class="form-group">
                <select name="edu_high" class="form-control select2" placeholder="Профессиональное образование" wb-tree="dict=education&branch=p&parent=false">
                    <option value="{{id}}">{{name}}</option>
                </select>
        </div>
    </div>
    <div class="col-sm-4">
        <div class="form-group">
                <select name="edu_science" class="form-control select2" placeholder="Учёная степень" wb-tree="dict=education&branch=s&parent=false">
                    <option value="{{id}}">{{name}}</option>
                </select>
        </div>
    </div>
</fieldset>

</html>