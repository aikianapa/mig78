<html>
<fieldset class="row" id="fldset_address" header="Адрес">
    <wb-var uid="{{wbNewId()}}"></wb-var>
    <div class="col-12">
        <div class="form-group row" id="{{_var.uid}}">
            <label class=" col-sm-3 mb-2 form-control-label">Регион</label>
            <div class="col-sm-9 mb-2">
                <select name="reg_region" class="form-control select2 reg_region" placeholder="Регион" wb-off>
                    {{#each ~/regions}}
                    <option value="{{id}}">{{name}}</option>
                    {{/each}}
                </select>
            </div>

            <label class=" col-sm-3 form-control-label">Район</label>
            <div class="col-sm-9">
                <select name="reg_distr" class="form-control select2 reg_distr" placeholder="Район" wb-off>
                    {{#each .districts}}
                    <option value="{{id}}">{{name}}</option>
                    {{/each}}
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

        <div class="row mb-1">
            <label class="form-control-label col-sm-3">Тип</label>
            <div class="col-sm-3">
                <select name="reg_house" placeholder="Дом/участок/владение" class="form-control select2" wb-tree="item=locations&tpl=false&branch=obj_type&parent=false">
                    <option value="{{data.short}}">{{name}}</option>
                </select>
            </div>

            <label class="form-control-label col-sm-3">Номер</label>
            <div class="col-sm-3">
                <input type="text" name="reg_house_num" class="form-control" placeholder="Номер дома">
            </div>
        </div>
        <div class="row mb-1">
            <label class="form-control-label col-sm-3">Корпус</label>
            <div class="col-sm-3">
                <input type="text" name="reg_corpse" class="form-control" placeholder="Корпус">
            </div>

            <label class="form-control-label col-sm-3">Строение</label>
            <div class="col-sm-3">
                <input type="text" name="reg_build" class="form-control" placeholder="Строение">
            </div>
        </div>
        <div class="row mb-1">
            <label class="form-control-label col-sm-3">Тип (кв/комн/пом)</label>
            <div class="col-sm-3">
                <select name="reg_flat" class="form-control select2" placeholder="Тип помещения" wb-tree="item=locations&tpl=false&branch=flat_type&parent=false">
                    <option value="{{data.short}}">{{name}}</option>
                </select>
            </div>

            <label class="form-control-label col-sm-3">Номер</label>
            <div class="col-sm-3">
                <input type="text" name="reg_flat_num" class="form-control" placeholder="Номер помещения">
            </div>
        </div>
    </div>
        <script>
            var r{{_var.uid}} = new Ractive({
                el: '#{{_var.uid}}',
                template: $('#{{_var.uid}}').html(),
                data: {
                    regions: {},
                    districts: {},
                },
                on: {
                    init() {
                        let mod = this
                        wbapp.post('/api/v2/list/catalogs/locations/tree.data.regions.children',{},function(data){
                            mod.set('regions',data[0])
                            let reg = $(mod.node).find('.reg_region').val()
                            // on-change не работает с select2
                            $('#{{_var.uid}}').delegate('select.reg_region','change',function(){
                                let reg = $(this).val()
                                let list = mod.get('regions')[reg].children
                                mod.set('districts',list)
                                $(this).attr('value',reg)
                            })
                            $('#{{_var.uid}}').delegate('select.reg_district','change',function(){
                                $(this).attr('value',$(this).val())
                            })
                        })
                    },
                    complete() {
                        setTimeout(function(){
                            $('#{{_var.uid}} select.reg_region').trigger('change')
                        },300)
                    }
                }
            }) 


        </script>

</fieldset>