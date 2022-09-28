<html>
<fieldset class="row" id="fldset_money" header="Сумма и валюта">
    <div class="col-sm-3">
        <div class="form-group">
            <label class="form-control-label">Сумма и валюта</label>
        </div>
    </div>
    <div class="col-sm-3">
        <div class="form-group">
            <input type="number" name="money_sum" class="form-control" placeholder="Сумма">
        </div>
    </div>
    <div class="col-sm-3">
        <div class="form-group">
                <select name="money_cur" class="form-control select2" placeholder="Валюта" wb-tree="dict=money">
                    <option value="{{id}}">{{name}}</option>
                </select>
        </div>
    </div>
</fieldset>

</html>