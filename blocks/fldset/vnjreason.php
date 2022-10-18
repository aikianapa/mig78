 <html>
 <fieldset class="row" id="fldset_vnjreason" header="Основание ВНЖ">
     <div class="col">
         <div class="form-group row">
             <div class="col-sm-3">
                 <label class="form-control-label">Основание ВНЖ</label>
             </div>
             <div class="col-sm-9">
                 <select name="vnjreason" class="form-control" multiple wb-select2 placeholder="Основание ВНЖ"
                     wb-tree="item=vnj_reason&tpl=false">
                     <option value="{{id}}">{{name}}</option>
                 </select>
             </div>
         </div>
     </div>
 </fieldset>
 </html>