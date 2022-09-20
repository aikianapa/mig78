<html>
<fieldset class="row" id="fldset_address" header="Адрес">
    <div class="col-12">
        <div class="form-group row">
            <label class=" col-sm-3 form-control-label">Регион</label>
            <div class="col-sm-9">
                <select name="region" class="form-control select2" wb-tree="dict=locations&branch=regions&parent=false">
                    <option value="{{name}}">{{name}}</option>
                </select>
            </div>
        </div>

        <div class="row">
            <div class="form-group col-sm-3">
                Населённый пункт
            </div>
            <div class="form-group col-sm-4">
                <select name="reg_city_type" class="form-control select2" wb-tree="item=locations&tpl=false&branch=city_type&parent=false">
                    <option value="{{data.short}}">{{name}}</option>
                </select>
            </div>

            <div class="form-group col-sm-5">
                <input type="text" name="reg_city" class="form-control" placeholder="Населённый пункт">
            </div>
        </div>
        <div class="row">
            <div class="form-group col-sm-3">
                Название улицы
            </div>
            <div class="form-group col-sm-4">
                <select name="reg_street_type" class="form-control select2" wb-tree="item=locations&tpl=false&branch=street_type&parent=false">
                    <option value="{{data.short}}">{{name}}</option>
                </select>
            </div>

            <div class="form-group col-sm-5">
                <input type="text" name="reg_street" class="form-control" placeholder="Название улицы">
            </div>
        </div>
        
        <div class="row">
            <div class="col-sm-6">
                <label class="form-control-label">Тип</label>
                <select name="reg_house" placeholder="Дом/участок/владение" class="form-control select2" wb-tree="item=locations&tpl=false&branch=obj_type&parent=false">
                    <option value="{{data.short}}">{{name}}</option>
                </select>
            </div>
            <div class="col-sm-6">
                <label class="form-control-label">Номер</label>
                <input type="text" name="reg_house_num" class="form-control" placeholder="Номер дома">
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <label class="form-control-label">Корпус</label>
                <input type="text" name="reg_corpse" class="form-control" placeholder="Корпус">
            </div>
            <div class="col-sm-6">
                <label class="form-control-label">Строение</label>
                <input type="text" name="reg_build" class="form-control" placeholder="Строение">
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <label class="form-control-label">Тип (кв/комн/пом)</label>
                <select name="reg_flat" class="form-control select2" placeholder="Тип помещения" wb-tree="item=locations&tpl=false&branch=flat_type&parent=false">
                    <option value="{{data.short}}">{{name}}</option>
                </select>
            </div>
            <div class="col-sm-6">
                <label class="form-control-label">Номер</label>
                <input type="text" name="reg_flat_num" class="form-control" placeholder="Номер помещения">
            </div>
        </div>
    </div>
</fieldset>