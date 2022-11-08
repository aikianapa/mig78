
                        <div class="form-group row" wb-if="'{{_sess.user.role}}'=='admin'">
                            <label class="col-sm-3 form-control-label">Оператор</label>
                            <div class="col-3">
                                <select name="oper" class="form-control" wb-select2>
                                    <!--wb-foreach wb="table=users&tpl=false" wb-filter="{'isgroup':'','role':{'$in':['oper','admin']}}"-->
                                    <wb-foreach wb="table=users&tpl=false" wb-filter="role=[oper,admin]">
                                        <option value="{{id}}" wb-if="'{{active}}'=='on'">{{last_name}} {{first_name}}</option>
                                        <option value="{{id}}" disabled wb-if="'{{active}}'==''">{{last_name}} {{first_name}}</option>
                                    </wb-foreach>
                                </select>
                            </div>
                        </div>