if (!document.loadedScripts) document.loadedScripts =[];document.loadedScripts.push('/engine/js/php.js');document.loadedScripts.push('/engine/js/jquery.min.js');document.loadedScripts.push('/engine/js/jquery.tap.js');document.loadedScripts.push('/engine/js/ractive.js');document.loadedScripts.push('/engine/js/topbar.min.js');document.loadedScripts.push('/engine/js/lazyload.js');document.loadedScripts.push('/engine/js/wbapp.js');
;

;
function abs(mixed_number){return Math.abs(mixed_number)||0}function acos(arg){return Math.acos(arg)}function acosh(arg){return Math.log(arg+Math.sqrt(arg*arg-1))}function addslashes(str){return(str+"").replace(/([\\"'])/g,"\\$1").replace(/\0/g,"\\0")}function array_change_key_case(array){var case_fn,tmp_ar=new Object,argc=arguments.length,argv=arguments,key;if(array instanceof Array)return array;if(array instanceof Object){for(key in case_fn=1==argc||"CASE_LOWER"==argv[1]||0==argv[1]?"toLowerCase":"toUpperCase",array)tmp_ar[key[case_fn]()]=array[key];return tmp_ar}return!1}function array_chunk(input,size){for(var x,i=0,c=-1,l=input.length,n=[];i<l;i++)(x=i%size)?n[c][x]=input[i]:n[++c]=[input[i]];return n}function array_combine(keys,values){var new_array={},keycount=keys.length,i;if(!keys||!values||keys.constructor!==Array||values.constructor!==Array)return!1;if(keycount!=values.length)return!1;for(i=0;i<keycount;i++)new_array[keys[i]]=values[i];return new_array}function array_count_values(array){var tmp_arr={},key="",t="",__getType=function(obj){var t=typeof obj;return"object"==(t=t.toLowerCase())&&(t="array"),t},__countValue=function(value){switch(typeof value){case"number":if(Math.floor(value)!=value)return;case"string":value in this?++this[value]:this[value]=1}};if("array"==(t=__getType(array)))for(key in array)__countValue.call(tmp_arr,array[key]);return tmp_arr}function array_diff(){var arr1=arguments[0],retArr={},k1="",i=1,k="",arr={};arr1keys:for(k1 in arr1)for(i=1;i<arguments.length;i++){for(k in arr=arguments[i])if(arr[k]===arr1[k1])continue arr1keys;retArr[k1]=arr1[k1]}return retArr}function array_diff_assoc(){var arr1=arguments[0],retArr={},k1="",i=1,k="",arr={};arr1keys:for(k1 in arr1)for(i=1;i<arguments.length;i++){for(k in arr=arguments[i])if(arr[k]===arr1[k1]&&k===k1)continue arr1keys;retArr[k1]=arr1[k1]}return retArr}function array_diff_key(){var arr1=arguments[0],retArr={},k1="",i=1,k="",arr={};arr1keys:for(k1 in arr1)for(i=1;i<arguments.length;i++){for(k in arr=arguments[i])if(k===k1)continue arr1keys;retArr[k1]=arr1[k1]}return retArr}function array_diff_uassoc(){var arr1=arguments[0],retArr={},cb=arguments[arguments.length-1],arr={},i=1,k1="",k="";cb="string"==typeof cb?window[cb]:cb instanceof Array?window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1)for(i=1;i<arguments.length-1;i++){for(k in arr=arguments[i])if(arr[k]===arr1[k1]&&0===cb(k,k1))continue arr1keys;retArr[k1]=arr1[k1]}return retArr}function array_diff_ukey(){var arr1=arguments[0],retArr={},cb=arguments[arguments.length-1],arr={},i=1,k1="",k="";cb="string"==typeof cb?window[cb]:cb instanceof Array?window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1)for(i=1;i<arguments.length-1;i++){for(k in arr=arguments[i])if(0===cb(k,k1))continue arr1keys;retArr[k1]=arr1[k1]}return retArr}function array_fill(start_index,num,mixed_val){var key,tmp_arr={};if(!isNaN(start_index)&&!isNaN(num))for(key=0;key<num;key++)tmp_arr[key+start_index]=mixed_val;return tmp_arr}function array_fill_keys(keys,value){var retObj={},key="";for(key in keys)retObj[keys[key]]=value;return retObj}function array_filter(arr,func){var retObj={},k;for(k in arr)func(arr[k])&&(retObj[k]=arr[k]);return retObj}function array_flip(trans){var key,tmp_ar={};for(key in trans)tmp_ar[trans[key]]=key;return tmp_ar}function array_intersect(){var arr1=arguments[0],retArr={},k1="",arr={},i=0,k="";arr1keys:for(k1 in arr1)arrs:for(i=1;i<arguments.length;i++){for(k in arr=arguments[i])if(arr[k]===arr1[k1]){i===arguments.length-1&&(retArr[k1]=arr1[k1]);continue arrs}continue arr1keys}return retArr}function array_intersect_assoc(){var arr1=arguments[0],retArr={},k1="",arr={},i=0,k="";arr1keys:for(k1 in arr1)arrs:for(i=1;i<arguments.length;i++){for(k in arr=arguments[i])if(arr[k]===arr1[k1]&&k===k1){i===arguments.length-1&&(retArr[k1]=arr1[k1]);continue arrs}continue arr1keys}return retArr}function array_intersect_key(){var arr1=arguments[0],retArr={},k1="",arr={},i=0,k="";arr1keys:for(k1 in arr1)arrs:for(i=1;i<arguments.length;i++){for(k in arr=arguments[i])if(k===k1){i===arguments.length-1&&(retArr[k1]=arr1[k1]);continue arrs}continue arr1keys}return retArr}function array_intersect_uassoc(){var arr1=arguments[0],retArr={},cb=arguments[arguments.length-1],k1="",i=1,arr={},k="";cb="string"==typeof cb?window[cb]:cb instanceof Array?window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1)arrs:for(i=1;i<arguments.length-1;i++){for(k in arr=arguments[i])if(arr[k]===arr1[k1]&&0===cb(k,k1)){i===arguments.length-2&&(retArr[k1]=arr1[k1]);continue arrs}continue arr1keys}return retArr}function array_intersect_ukey(){var arr1=arguments[0],retArr={},cb=arguments[arguments.length-1],k1="",i=1,arr={},k="";cb="string"==typeof cb?window[cb]:cb instanceof Array?window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1)arrs:for(i=1;i<arguments.length-1;i++){for(k in arr=arguments[i])if(0===cb(k,k1)){i===arguments.length-2&&(retArr[k1]=arr1[k1]);continue arrs}continue arr1keys}return retArr}function array_key_exists(key,search){return!(!search||search.constructor!==Array&&search.constructor!==Object)&&key in search}function array_keys(input,search_value,argStrict){var tmp_arr={},strict=!!argStrict,include=!0,cnt=0,key="";for(key in input)include=!0,null!=search_value&&(strict&&input[key]!==search_value?include=!1:input[key]!=search_value&&(include=!1)),include&&(tmp_arr[cnt]=key,cnt++);return tmp_arr}function array_map(callback){for(var argc=arguments.length,argv=arguments,j=argv[1].length,i=0,k=1,m=0,tmp=[],tmp_ar=[];i<j;){for(;k<argc;)tmp[m++]=argv[k++][i];m=0,k=1,tmp_ar[i++]=callback?callback.apply(null,tmp):tmp,tmp=[]}return tmp_ar}function array_merge(){var args=Array.prototype.slice.call(arguments),retObj={},k,j=0,i=0,retArr;for(i=0,retArr=!0;i<args.length;i++)if(!(args[i]instanceof Array)){retArr=!1;break}if(retArr)return args;var ct=0;for(i=0,ct=0;i<args.length;i++)if(args[i]instanceof Array)for(j=0;j<args[i].length;j++)retObj[ct++]=args[i][j];else for(k in args[i])is_int(k)?retObj[ct++]=args[i][k]:retObj[k]=args[i][k];return retObj}function array_merge_recursive(arr1,arr2){var idx="";if(arr1&&arr1 instanceof Array&&arr2&&arr2 instanceof Array)for(idx in arr2)arr1.push(arr2[idx]);else if(arr1&&arr1 instanceof Object&&arr2&&arr2 instanceof Object)for(idx in arr2)idx in arr1&&"object"==typeof arr1[idx]&&"object"==typeof arr2?arr1[idx]=array_merge(arr1[idx],arr2[idx]):arr1[idx]=arr2[idx];return arr1}function array_pad(input,pad_size,pad_value){var pad=[],newArray=[],newLength,i=0;if(input instanceof Array&&!isNaN(pad_size))if((newLength=pad_size<0?-1*pad_size:pad_size)>input.length){for(i=0;i<newLength-input.length;i++)newArray[i]=pad_value;pad=pad_size<0?newArray.concat(input):input.concat(newArray)}else pad=input;return pad}function array_pop(array){var key="",cnt=0;if(array.hasOwnProperty("length"))return array.length?array.pop():null;for(key in array)cnt++;return cnt?(delete array[key],array[key]):null}function array_product(input){var Index=0,Product=1;if(input instanceof Array)for(;Index<input.length;)Product*=isNaN(input[Index])?0:input[Index],Index++;else Product=null;return Product}function array_push(array){var i,argv=arguments,argc=argv.length;for(i=1;i<argc;i++)array[array.length++]=argv[i];return array.length}function array_rand(input,num_req){var Indexes=[],Ticks=num_req||1,checkDuplicate=function(input,value){for(var Exist=!1,Index=0;Index<input.length;){if(input[Index]===value){Exist=!0;break}Index++}return Exist};if(input instanceof Array&&Ticks<=input.length)for(;;){var Rand=Math.floor(Math.random()*input.length);if(Indexes.length===Ticks)break;checkDuplicate(Indexes,Rand)||Indexes.push(Rand)}else Indexes=null;return 1==Ticks?Indexes.join():Indexes}function array_reduce(a_input,callback){var lon=a_input.length,res=0,i=0,tmp=[];for(i=0;i<lon;i+=2)tmp[0]=a_input[i],a_input[i+1]?tmp[1]=a_input[i+1]:tmp[1]=0,res+=callback.apply(null,tmp),tmp=[];return res}function array_reverse(array,preserve_keys){var arr_len=array.length,newkey=0,tmp_arr={},key="";for(key in preserve_keys=!!preserve_keys,array)tmp_arr[preserve_keys?key:newkey=arr_len-key-1]=array[key];return tmp_arr}function array_search(needle,haystack,argStrict){var strict=!!argStrict,key="";for(key in haystack)if(strict&&haystack[key]===needle||!strict&&haystack[key]==needle)return key;return!1}function array_shift(array){return array.length>0?array.shift():null}function array_slice(arr,offst,lgth,preserve_keys){var key="";if(!(arr instanceof Array)||preserve_keys&&0!=offst){var lgt=0,newAssoc={};for(key in arr)lgt+=1,newAssoc[key]=arr[key];arr=newAssoc,offst=offst<0?lgt+offst:offst,lgth=null==lgth?lgt:lgth<0?lgt+lgth-offst:lgth;var assoc={},start=!1,it=-1,arrlgth=0,no_pk_idx=0;for(key in arr){if(++it,arrlgth>=lgth)break;it==offst&&(start=!0),start&&(++arrlgth,is_int(key)&&!preserve_keys?assoc[no_pk_idx++]=arr[key]:assoc[key]=arr[key])}return assoc}return void 0===lgth?arr.slice(offst):lgth>=0?arr.slice(offst,offst+lgth):arr.slice(offst,lgth)}function array_splice(arr,offst,lgth,replacement){var checkToUpIndices=function(arr,ct,key){if(void 0!==arr[ct]){var tmp=ct;(ct+=1)===key&&(ct+=1),arr[ct=checkToUpIndices(arr,ct,key)]=arr[tmp],delete arr[tmp]}return ct};if(replacement&&"object"!=typeof replacement&&(replacement=[replacement]),void 0===lgth?lgth=offst>=0?arr.length-offst:-offst:lgth<0&&(lgth=(offst>=0?arr.length-offst:-offst)+lgth),!(arr instanceof Array)){var lgt=0,ct=-1,rmvd=[],rmvdObj={},repl_ct=-1,int_ct=-1,returnArr=!0,rmvd_ct=0,rmvd_lgth=0,key="";for(key in arr)lgt+=1;for(key in offst=offst>=0?offst:lgt+offst,arr)if((ct+=1)<offst){if(is_int(key)){if(int_ct+=1,parseInt(key,10)===int_ct)continue;checkToUpIndices(arr,int_ct,key),arr[int_ct]=arr[key],delete arr[key]}}else returnArr&&is_int(key)?(rmvd.push(arr[key]),rmvdObj[rmvd_ct++]=arr[key]):(rmvdObj[key]=arr[key],returnArr=!1),rmvd_lgth+=1,replacement&&replacement[++repl_ct]?arr[key]=replacement[repl_ct]:delete arr[key];return returnArr?rmvd:rmvdObj}return replacement?(replacement.unshift(offst,lgth),Array.prototype.splice.apply(arr,replacement)):arr.splice(offst,lgth)}function array_sum(array){var key,sum=0;if("object"!=typeof array)return null;for(key in array)sum+=1*array[key];return sum}function array_udiff(){var arr1=arguments[0],retArr={},cb=arguments[arguments.length-1],arr="",i=1,k1="",k="";cb="string"==typeof cb?window[cb]:cb instanceof Array?window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1)for(i=1;i<arguments.length-1;i++){for(k in arr=arguments[i])if(0===cb(arr[k],arr1[k1]))continue arr1keys;retArr[k1]=arr1[k1]}return retArr}function array_udiff_assoc(){var arr1=arguments[0],retArr={},cb=arguments[arguments.length-1],arr={},i=1,k1="",k="";cb="string"==typeof cb?window[cb]:cb instanceof Array?window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1)for(i=1;i<arguments.length-1;i++){for(k in arr=arguments[i])if(0===cb(arr[k],arr1[k1])&&k===k1)continue arr1keys;retArr[k1]=arr1[k1]}return retArr}function array_udiff_uassoc(){var arr1=arguments[0],retArr={},cb=arguments[arguments.length-1],cb0=arguments[arguments.length-2],k1="",i=1,k="",arr={};cb="string"==typeof cb?window[cb]:cb instanceof Array?window[cb[0]][cb[1]]:cb,cb0="string"==typeof cb0?window[cb0]:cb0 instanceof Array?window[cb0[0]][cb0[1]]:cb0;arr1keys:for(k1 in arr1)for(i=1;i<arguments.length-2;i++){for(k in arr=arguments[i])if(0===cb0(arr[k],arr1[k1])&&0===cb(k,k1))continue arr1keys;retArr[k1]=arr1[k1]}return retArr}function array_uintersect(){var arr1=arguments[0],retArr={},cb=arguments[arguments.length-1],k1="",i=1,arr={},k="";cb="string"==typeof cb?window[cb]:cb instanceof Array?window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1)arrs:for(i=1;i<arguments.length-1;i++){for(k in arr=arguments[i])if(0===cb(arr[k],arr1[k1])){i===arguments.length-2&&(retArr[k1]=arr1[k1]);continue arrs}continue arr1keys}return retArr}function array_uintersect_assoc(){var arr1=arguments[0],retArr={},cb=arguments[arguments.length-1],k1="",i=1,arr={},k="";cb="string"==typeof cb?window[cb]:cb instanceof Array?window[cb[0]][cb[1]]:cb;arr1keys:for(k1 in arr1)arrs:for(i=1;i<arguments.length-1;i++){for(k in arr=arguments[i])if(0===cb(arr[k],arr1[k1])&&k===k1){i===arguments.length-2&&(retArr[k1]=arr1[k1]);continue arrs}continue arr1keys}return retArr}function array_uintersect_uassoc(){var arr1=arguments[0],retArr={},cb=arguments[arguments.length-1],cb0=arguments[arguments.length-2],k1="",i=1,k="",arr={};cb="string"==typeof cb?window[cb]:cb instanceof Array?window[cb[0]][cb[1]]:cb,cb0="string"==typeof cb0?window[cb0]:cb0 instanceof Array?window[cb0[0]][cb0[1]]:cb0;arr1keys:for(k1 in arr1)arrs:for(i=1;i<arguments.length-2;i++){for(k in arr=arguments[i])if(0===cb0(arr[k],arr1[k1])&&0===cb(k,k1)){i===arguments.length-3&&(retArr[k1]=arr1[k1]);continue arrs}continue arr1keys}return retArr}function array_unique(array){var key="",tmp_arr1={},tmp_arr2={},val="";tmp_arr1=array;var __array_search=function(needle,haystack,argStrict){var fkey="",strict=!!argStrict;for(fkey in haystack)if(strict&&haystack[fkey]===needle||!strict&&haystack[fkey]==needle)return fkey;return!1};for(key in tmp_arr1)!1===__array_search(val=tmp_arr1[key],tmp_arr2)&&(tmp_arr2[key]=val),delete tmp_arr1[key];return tmp_arr2}function array_unshift(array){var argc=arguments.length,argv=arguments,i;for(i=1;i<argc;i++)array.unshift(argv[i]);return array.length}function array_values(input){var tmp_arr=[],cnt=0,key="";for(key in input)tmp_arr[cnt]=input[key],cnt++;return tmp_arr}function array_walk(array,funcname,userdata){var key;if("object"!=typeof array)return!1;for(key in array)void 0!==userdata?eval(funcname+"( array [key] , key , userdata  )"):eval(funcname+"(  userdata ) ");return!0}function array_walk_recursive(array,funcname,userdata){var key;if("object"!=typeof array)return!1;for(key in array){if("object"==typeof array[key])return array_walk_recursive(array[key],funcname,userdata);void 0!==userdata?eval(funcname+"( array [key] , key , userdata  )"):eval(funcname+"(  userdata ) ")}return!0}function arsort(inputArr,sort_flags){var valArr=[],keyArr=[],k,i,ret,sorter;switch(sort_flags){case"SORT_STRING":sorter=function(a,b){return strnatcmp(b,a)};break;case"SORT_LOCALE_STRING":sorter=function(a,b){return b.localeCompare(a)};break;case"SORT_NUMERIC":sorter=function(a,b){return a-b};break;case"SORT_REGULAR":default:sorter=function(a,b){return a>b?1:a<b?-1:0}}var bubbleSort=function(keyArr,inputArr){var i,j,tempValue,tempKeyVal;for(i=inputArr.length-2;i>=0;i--)for(j=0;j<=i;j++)(ret=sorter(inputArr[j+1],inputArr[j]))>0&&(tempValue=inputArr[j],inputArr[j]=inputArr[j+1],inputArr[j+1]=tempValue,tempKeyVal=keyArr[j],keyArr[j]=keyArr[j+1],keyArr[j+1]=tempKeyVal)};for(k in inputArr)valArr.push(inputArr[k]),keyArr.push(k),delete inputArr[k];try{bubbleSort(keyArr,valArr)}catch(e){return!1}for(i=0;i<valArr.length;i++)inputArr[keyArr[i]]=valArr[i];return!0}function asin(arg){return Math.asin(arg)}function asinh(arg){return Math.log(arg+Math.sqrt(arg*arg+1))}function asort(inputArr,sort_flags){var valArr=[],keyArr=[],k,i,ret,sorter;switch(sort_flags){case"SORT_STRING":sorter=function(a,b){return strnatcmp(a,b)};break;case"SORT_LOCALE_STRING":sorter=function(a,b){return a.localeCompare(b)};break;case"SORT_NUMERIC":sorter=function(a,b){return a-b};break;case"SORT_REGULAR":default:sorter=function(a,b){return a>b?1:a<b?-1:0}}var bubbleSort=function(keyArr,inputArr){var i,j,tempValue,tempKeyVal;for(i=inputArr.length-2;i>=0;i--)for(j=0;j<=i;j++)(ret=sorter(inputArr[j+1],inputArr[j]))<0&&(tempValue=inputArr[j],inputArr[j]=inputArr[j+1],inputArr[j+1]=tempValue,tempKeyVal=keyArr[j],keyArr[j]=keyArr[j+1],keyArr[j+1]=tempKeyVal)};for(k in inputArr)valArr.push(inputArr[k]),keyArr.push(k),delete inputArr[k];try{bubbleSort(keyArr,valArr)}catch(e){return!1}for(i=0;i<valArr.length;i++)inputArr[keyArr[i]]=valArr[i];return!0}function atan(arg){return Math.atan(arg)}function atanh(arg){return.5*Math.log((1+arg)/(1-arg))}function base64_decode(data){var b64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o1,o2,o3,h1,h2,h3,h4,bits,i=0,ac=0,dec="",tmp_arr=[];if(!data)return data;data+="";do{o1=(bits=(h1=b64.indexOf(data.charAt(i++)))<<18|(h2=b64.indexOf(data.charAt(i++)))<<12|(h3=b64.indexOf(data.charAt(i++)))<<6|(h4=b64.indexOf(data.charAt(i++))))>>16&255,o2=bits>>8&255,o3=255&bits,tmp_arr[ac++]=64==h3?String.fromCharCode(o1):64==h4?String.fromCharCode(o1,o2):String.fromCharCode(o1,o2,o3)}while(i<data.length);return dec=utf8_decode(dec=tmp_arr.join(""))}function base64_encode(data){var b64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o1,o2,o3,h1,h2,h3,h4,bits,i=0,ac=0,enc="",tmp_arr=[];if(!data)return data;data=utf8_encode(data+"");do{h1=(bits=(o1=data.charCodeAt(i++))<<16|(o2=data.charCodeAt(i++))<<8|(o3=data.charCodeAt(i++)))>>18&63,h2=bits>>12&63,h3=bits>>6&63,h4=63&bits,tmp_arr[ac++]=b64.charAt(h1)+b64.charAt(h2)+b64.charAt(h3)+b64.charAt(h4)}while(i<data.length);switch(enc=tmp_arr.join(""),data.length%3){case 1:enc=enc.slice(0,-2)+"==";break;case 2:enc=enc.slice(0,-1)+"="}return enc}function base_convert(number,frombase,tobase){return parseInt(number+"",frombase+0).toString(tobase+0)}function bin2hex(s){var i,f=0,a=[];for(f=(s+="").length,i=0;i<f;i++)a[i]=s.charCodeAt(i).toString(16).replace(/^([\da-f])$/,"0$1");return a.join("")}function bindec(binary_string){return binary_string=(binary_string+"").replace(/[^01]/gi,""),parseInt(binary_string,2)}function ceil(value){return Math.ceil(value)}function checkdate(month,day,year){var myDate=new Date;return myDate.setFullYear(year,month-1,day),myDate.getMonth()+1==month&&day<32}function chop(str,charlist){return rtrim(str,charlist)}function chr(ascii){return String.fromCharCode(ascii)}function chunk_split(body,argChunklen,argEnd){if(chunklen<1)return!1;for(var result="",chunklen=argChunklen||76,end=argEnd||"\r\n";body.length>chunklen;)result+=body.substring(0,chunklen)+end,body=body.substring(chunklen);return result+body+end}function class_exists(cls){var i="";if("function"!=typeof(cls=window[cls]))return!1;for(i in cls.prototype)return!0;for(i in cls)if("prototype"!==i)return!0;return!(!cls.toSource||!cls.toSource().match(/this\./))}function compact(){var Matrix={},key_value,process=function(value){var i=0,l=value.length,key_value="";for(i=0;i<l;i++)(key_value=value[i])instanceof Array?process(key_value):void 0!==window[key_value]&&(Matrix[key_value]=window[key_value]);return!0};return process(arguments),Matrix}function cos(arg){return Math.cos(arg)}function cosh(arg){return(Math.exp(arg)+Math.exp(-arg))/2}function count(mixed_var,mode){var key,cnt=0;for(key in"COUNT_RECURSIVE"==mode&&(mode=1),1!=mode&&(mode=0),mixed_var)cnt++,1!=mode||!mixed_var[key]||mixed_var[key].constructor!==Array&&mixed_var[key].constructor!==Object||(cnt+=count(mixed_var[key],1));return cnt}function count_chars(str,mode){var histogram={},tmp_arr=[],key,i,code,strl=0,argc=arguments.length,mode_even=0;if(1==argc&&(mode=0),mode_even=0==(1&mode))for(i=1;i<256;++i)histogram[i]=0;for(strl=(str+="").length,i=0;i<strl;++i)(code=str.charCodeAt(i))in histogram?++histogram[code]:histogram[code]=1;if(mode>0)for(key in histogram)0==histogram[key]!=mode_even&&delete histogram[key];if(mode<3)return histogram;for(key in histogram)tmp_arr.push(String.fromCharCode(key));return tmp_arr.join("")}function crc32(str){var table="00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D",crc=0,x=0,y=0;crc^=-1;for(var i=0,iTop=(str=utf8_encode(str)).length;i<iTop;i++)y=255&(crc^str.charCodeAt(i)),crc=crc>>>8^(x="0x"+table.substr(9*y,8));return-1^crc}function date(format,timestamp){var a,tal=[],jsdate=void 0===timestamp?new Date:"number"==typeof timestamp?new Date(1e3*timestamp):new Date(timestamp),pad=function(n,c){return(n+="").length<c?new Array(++c-n.length).join("0")+n:n},ret="",txt_weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],txt_ordin={1:"st",2:"nd",3:"rd",21:"st",22:"nd",23:"rd",31:"st"},txt_months=["","January","February","March","April","May","June","July","August","September","October","November","December"],f={d:function(){return pad(f.j(),2)},D:function(){var t;return f.l().substr(0,3)},j:function(){return jsdate.getDate()},l:function(){return txt_weekdays[f.w()]},N:function(){return f.w()+1},S:function(){return txt_ordin[f.j()]?txt_ordin[f.j()]:"th"},w:function(){return jsdate.getDay()},z:function(){return(jsdate-new Date(jsdate.getFullYear()+"/1/1"))/864e5>>0},W:function(){var a=f.z(),b=364+f.L()-a,nd2,nd=(new Date(jsdate.getFullYear()+"/1/1").getDay()||7)-1;return b<=2&&(jsdate.getDay()||7)-1<=2-b?1:a<=2&&nd>=4&&a>=6-nd?(nd2=new Date(jsdate.getFullYear()-1+"/12/31"),date("W",Math.round(nd2.getTime()/1e3))):1+(nd<=3?(a+nd)/7:(a-(7-nd))/7)>>0},F:function(){return txt_months[f.n()]},m:function(){return pad(f.n(),2)},M:function(){var t;return(t=f.F()).substr(0,3)},n:function(){return jsdate.getMonth()+1},t:function(){var n;return 2==(n=jsdate.getMonth()+1)?28+f.L():1&n&&n<8||!(1&n)&&n>7?31:30},L:function(){var y=f.Y();return 3&y||!(y%100)&&y%400?0:1},o:function(){return 12===f.n()&&1===f.W()?jsdate.getFullYear()+1:1===f.n()&&f.W()>=52?jsdate.getFullYear()-1:jsdate.getFullYear()},Y:function(){return jsdate.getFullYear()},y:function(){return(jsdate.getFullYear()+"").slice(2)},a:function(){return jsdate.getHours()>11?"pm":"am"},A:function(){return f.a().toUpperCase()},B:function(){var off=60*(jsdate.getTimezoneOffset()+60),theSeconds=3600*jsdate.getHours()+60*jsdate.getMinutes()+jsdate.getSeconds()+off,beat=Math.floor(theSeconds/86.4);return beat>1e3&&(beat-=1e3),beat<0&&(beat+=1e3),1==String(beat).length&&(beat="00"+beat),2==String(beat).length&&(beat="0"+beat),beat},g:function(){return jsdate.getHours()%12||12},G:function(){return jsdate.getHours()},h:function(){return pad(f.g(),2)},H:function(){return pad(jsdate.getHours(),2)},i:function(){return pad(jsdate.getMinutes(),2)},s:function(){return pad(jsdate.getSeconds(),2)},u:function(){return pad(1e3*jsdate.getMilliseconds(),6)},e:function(){var abbr="",i=0;if(this.php_js&&this.php_js.default_timezone)return this.php_js.default_timezone;for(abbr in tal.length||(tal=timezone_abbreviations_list()),tal)for(i=0;i<tal[abbr].length;i++)if(tal[abbr][i].offset===60*-jsdate.getTimezoneOffset())return tal[abbr][i].timezone_id;return"UTC"},I:function(){var DST=new Date(jsdate.getFullYear(),6,1,0,0,0),ref;return DST=DST.getHours()-DST.getUTCHours(),jsdate.getHours()-jsdate.getUTCHours()!=DST?1:0},O:function(){var t=pad(Math.abs(jsdate.getTimezoneOffset()/60*100),4);return t=jsdate.getTimezoneOffset()>0?"-"+t:"+"+t},P:function(){var O=f.O();return O.substr(0,3)+":"+O.substr(3,2)},T:function(){var abbr="",i=0;if(tal.length||(tal=timezone_abbreviations_list()),this.php_js&&this.php_js.default_timezone)for(abbr in tal)for(i=0;i<tal[abbr].length;i++)if(tal[abbr][i].timezone_id===this.php_js.default_timezone)return abbr.toUpperCase();for(abbr in tal)for(i=0;i<tal[abbr].length;i++)if(tal[abbr][i].offset===60*-jsdate.getTimezoneOffset())return abbr.toUpperCase();return"UTC"},Z:function(){var t;return 60*-jsdate.getTimezoneOffset()},c:function(){return f.Y()+"-"+f.m()+"-"+f.d()+"T"+f.h()+":"+f.i()+":"+f.s()+f.P()},r:function(){return f.D()+", "+f.d()+" "+f.M()+" "+f.Y()+" "+f.H()+":"+f.i()+":"+f.s()+" "+f.O()},U:function(){return Math.round(jsdate.getTime()/1e3)}};return format.replace(/[\\]?([a-zA-Z])/g,(function(t,s){return ret=t!=s?s:f[s]?f[s]():s}))}function decbin(number){return parseInt(number).toString(2)}function dechex(number){return parseInt(number).toString(16)}function decoct(number){return parseInt(number).toString(8)}function deg2rad(angle){return angle/180*Math.PI}function doubleval(mixed_var){return floatval(mixed_var)}function echo(){var arg="",argc=arguments.length,argv=arguments,i=0,stringToDOM=function(q){var d=document,r=function(a){return a.replace(/\r/g," ").replace(/\n/g," ")},s=function(a){return a.replace(/&amp;/g,"&").replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&nbsp;/g," ").replace(/&quot;/g,'"')},t=function(a){return a.replace(/ /g,"")},u=function(a){var b,c,e,f,g,h,i;if(b=d.createDocumentFragment(),-1===(c=a.indexOf(" ")))b.appendChild(d.createElement(a.toLowerCase()));else for(i=t(a.substring(0,c)).toLowerCase(),a=a.substr(c+1),b.appendChild(d.createElement(i));a.length&&(e=a.indexOf("="))>=0;)f=t(a.substring(0,e)).toLowerCase(),g=a.indexOf('"'),g=(a=a.substr(g+1)).indexOf('"'),h=s(a.substring(0,g)),a=a.substr(g+2),b.lastChild.setAttribute(f,h);return b},v=function(a,b,c){var e,f;for(e=b,c=c.toLowerCase(),f=e.indexOf("</"+c+">"),a=a.concat(e.substring(0,f)),e=e.substr(f);-1!=a.indexOf("<"+c);)a=(a=a.substr(a.indexOf("<"+c))).substr(a.indexOf(">")+1),f=(e=e.substr(e.indexOf(">")+1)).indexOf("</"+c+">"),a=a.concat(e.substring(0,f)),e=e.substr(f);return b.length-e.length},w=function(a){var b,c,e,f,g,h,i,j,k,l,m,n,o,p,q;for(b=d.createDocumentFragment();a&&a.length;)-1===(c=a.indexOf("<"))?(a=s(a),b.appendChild(d.createTextNode(a)),a=null):c?(q=s(a.substring(0,c)),b.appendChild(d.createTextNode(q)),a=a.substr(c)):(e=a.indexOf("\x3c!--"))?(h=a.indexOf(">"),"/"===a.substring(h-1,h)?(i=a.indexOf("/>"),j=a.substring(1,i),b.appendChild(u(j)),a=a.substr(i+2)):(k=a.indexOf(">"),l=a.substring(1,k),(m=d.createDocumentFragment()).appendChild(u(l)),n=(a=a.substr(k+1)).substring(0,a.indexOf("</")),a=a.substr(a.indexOf("</")),-1!=n.indexOf("<")&&(o=m.lastChild.nodeName,p=v(n,a,o),n=n.concat(a.substring(0,p)),a=a.substr(p)),a=a.substr(a.indexOf(">")+1),m.lastChild.appendChild(w(n)),b.appendChild(m))):(f=a.indexOf("--\x3e"),g=a.substring(4,f),g=s(g),b.appendChild(d.createComment(g)),a=a.substr(f+3));return b};return w(q)};for(i=0;i<argc;i++)arg=argv[i],document.createDocumentFragment&&document.createTextNode&&document.appendChild?document.body?document.body.appendChild(stringToDOM(arg)):document.documentElement.appendChild(stringToDOM(arg)):document.write?document.write(arg):print(arg)}function end(arr){this.php_js||(this.php_js={}),this.php_js.pointers||(this.php_js.pointers=[]);var pointers=this.php_js.pointers;-1===pointers.indexOf(arr)&&pointers.push(arr,0);var arrpos=pointers.indexOf(arr);if(!(arr instanceof Array)){var ct=0;for(var k in arr){ct++;var val=arr[k]}return 0!==ct&&(pointers[arrpos+1]=ct-1,val)}return 0!==arr.length&&(pointers[arrpos+1]=arr.length-1,arr[pointers[arrpos+1]])}function exp(arg){return Math.exp(arg)}function explode(delimiter,string,limit){var emptyArray={0:""};if(arguments.length<2||void 0===arguments[0]||void 0===arguments[1])return null;if(""===delimiter||!1===delimiter||null===delimiter)return!1;if("function"==typeof delimiter||"object"==typeof delimiter||"function"==typeof string||"object"==typeof string)return emptyArray;if(!0===delimiter&&(delimiter="1"),limit){var splitted=string.toString().split(delimiter.toString()),partA=splitted.splice(0,limit-1),partB=splitted.join(delimiter.toString());return partA.push(partB),partA}return string.toString().split(delimiter.toString())}function floatval(mixed_var){return parseFloat(mixed_var)||0}function floor(value){return Math.floor(value)}function fmod(x,y){var tmp,tmp2,p=0,pY=0,l=0,l2=0;return tmp=x.toExponential().match(/^.\.?(.*)e(.+)$/),p=parseInt(tmp[2])-(tmp[1]+"").length,tmp=y.toExponential().match(/^.\.?(.*)e(.+)$/),(pY=parseInt(tmp[2])-(tmp[1]+"").length)>p&&(p=pY),tmp2=x%y,p<-100||p>20?(l=Math.round(Math.log(tmp2)/Math.log(10)),(tmp2/(l2=Math.pow(10,l))).toFixed(l-p)*l2):parseFloat(tmp2.toFixed(-p))}function get_class(obj){if(obj instanceof Object&&!(obj instanceof Array)&&!(obj instanceof Function)&&obj.constructor&&obj!=window){var arr=obj.constructor.toString().match(/function\s*(\w+)/);if(arr&&2==arr.length)return arr[1]}return!1}function get_defined_vars(){var i="",arr=[],already={};for(i in window)try{if("function"==typeof window[i])already[i]||(already[i]=1,arr.push(i));else if("object"==typeof window[i])for(var j in window[i])"function"==typeof window[j]&&window[j]&&!already[j]&&(already[j]=1,arr.push(j))}catch(e){}return arr}function get_headers(url,format){var req=window.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest,tmp,headers,pair,i;if(!req)throw new Error("XMLHttpRequest not supported");if(req.open("HEAD",url,!1),req.send(null),req.readyState<3)return!1;for(i in tmp=req.getAllResponseHeaders(),alert(tmp),tmp=array_filter(tmp=tmp.split("\n"),(function(value){return""!=value.substring(1)})),headers=[req.status+" "+req.statusText],tmp)format?headers[(pair=tmp[i].split(":")).splice(0,1)]=pair.join(":").substring(1):headers[headers.length]=tmp[i];return headers}function get_html_translation_table(table,quote_style){var entities={},histogram={},decimal=0,symbol="",constMappingTable={},constMappingQuoteStyle={},useTable={},useQuoteStyle={};if(useTable=table?table.toUpperCase():"HTML_SPECIALCHARS",useQuoteStyle=quote_style?quote_style.toUpperCase():"ENT_COMPAT",constMappingTable[0]="HTML_SPECIALCHARS",constMappingTable[1]="HTML_ENTITIES",constMappingQuoteStyle[0]="ENT_NOQUOTES",constMappingQuoteStyle[2]="ENT_COMPAT",constMappingQuoteStyle[3]="ENT_QUOTES",isNaN(useTable)||(useTable=constMappingTable[useTable]),isNaN(useQuoteStyle)||(useQuoteStyle=constMappingQuoteStyle[useQuoteStyle]),"HTML_SPECIALCHARS"==useTable)entities[38]="&amp;","ENT_NOQUOTES"!=useQuoteStyle&&(entities[34]="&quot;"),"ENT_QUOTES"==useQuoteStyle&&(entities[39]="&#039;"),entities[60]="&lt;",entities[62]="&gt;";else{if("HTML_ENTITIES"!=useTable)throw Error("Table: "+useTable+" not supported");entities[38]="&amp;","ENT_NOQUOTES"!=useQuoteStyle&&(entities[34]="&quot;"),"ENT_QUOTES"==useQuoteStyle&&(entities[39]="&#039;"),entities[60]="&lt;",entities[62]="&gt;",entities[160]="&nbsp;",entities[161]="&iexcl;",entities[162]="&cent;",entities[163]="&pound;",entities[164]="&curren;",entities[165]="&yen;",entities[166]="&brvbar;",entities[167]="&sect;",entities[168]="&uml;",entities[169]="&copy;",entities[170]="&ordf;",entities[171]="&laquo;",entities[172]="&not;",entities[173]="&shy;",entities[174]="&reg;",entities[175]="&macr;",entities[176]="&deg;",entities[177]="&plusmn;",entities[178]="&sup2;",entities[179]="&sup3;",entities[180]="&acute;",entities[181]="&micro;",entities[182]="&para;",entities[183]="&middot;",entities[184]="&cedil;",entities[185]="&sup1;",entities[186]="&ordm;",entities[187]="&raquo;",entities[188]="&frac14;",entities[189]="&frac12;",entities[190]="&frac34;",entities[191]="&iquest;",entities[192]="&Agrave;",entities[193]="&Aacute;",entities[194]="&Acirc;",entities[195]="&Atilde;",entities[196]="&Auml;",entities[197]="&Aring;",entities[198]="&AElig;",entities[199]="&Ccedil;",entities[200]="&Egrave;",entities[201]="&Eacute;",entities[202]="&Ecirc;",entities[203]="&Euml;",entities[204]="&Igrave;",entities[205]="&Iacute;",entities[206]="&Icirc;",entities[207]="&Iuml;",entities[208]="&ETH;",entities[209]="&Ntilde;",entities[210]="&Ograve;",entities[211]="&Oacute;",entities[212]="&Ocirc;",entities[213]="&Otilde;",entities[214]="&Ouml;",entities[215]="&times;",entities[216]="&Oslash;",entities[217]="&Ugrave;",entities[218]="&Uacute;",entities[219]="&Ucirc;",entities[220]="&Uuml;",entities[221]="&Yacute;",entities[222]="&THORN;",entities[223]="&szlig;",entities[224]="&agrave;",entities[225]="&aacute;",entities[226]="&acirc;",entities[227]="&atilde;",entities[228]="&auml;",entities[229]="&aring;",entities[230]="&aelig;",entities[231]="&ccedil;",entities[232]="&egrave;",entities[233]="&eacute;",entities[234]="&ecirc;",entities[235]="&euml;",entities[236]="&igrave;",entities[237]="&iacute;",entities[238]="&icirc;",entities[239]="&iuml;",entities[240]="&eth;",entities[241]="&ntilde;",entities[242]="&ograve;",entities[243]="&oacute;",entities[244]="&ocirc;",entities[245]="&otilde;",entities[246]="&ouml;",entities[247]="&divide;",entities[248]="&oslash;",entities[249]="&ugrave;",entities[250]="&uacute;",entities[251]="&ucirc;",entities[252]="&uuml;",entities[253]="&yacute;",entities[254]="&thorn;",entities[255]="&yuml;"}for(decimal in entities)histogram[symbol=String.fromCharCode(decimal)]=entities[decimal];return histogram}function getdate(timestamp){var _w=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],_m=["January","February","March","April","May","June","July","August","September","October","November","December"],d="number"==typeof timestamp?new Date(1e3*timestamp):new Date,w=d.getDay(),m=d.getMonth(),y=d.getFullYear(),r={};return r.seconds=d.getSeconds(),r.minutes=d.getMinutes(),r.hours=d.getHours(),r.mday=d.getDate(),r.wday=w,r.mon=m+1,r.year=y,r.yday=Math.floor((d-new Date(y,0,1))/864e5),r.weekday=_w[w],r.month=_m[m],r[0]=parseInt(d.getTime()/1e3),r}function getrandmax(){return 2147483647}function hexdec(hex_string){return hex_string=(hex_string+"").replace(/[^a-f0-9]/gi,""),parseInt(hex_string,16)}function html_entity_decode(string,quote_style){var histogram={},symbol="",tmp_str="",entity="";if(tmp_str=string.toString(),!1===(histogram=get_html_translation_table("HTML_ENTITIES",quote_style)))return!1;for(symbol in delete histogram["&"],histogram["&"]="&amp;",histogram)entity=histogram[symbol],tmp_str=tmp_str.split(entity).join(symbol);return tmp_str}function htmlentities(string,quote_style){var histogram={},symbol="",tmp_str="",entity="";if(tmp_str=string.toString(),!1===(histogram=get_html_translation_table("HTML_ENTITIES",quote_style)))return!1;for(symbol in histogram)entity=histogram[symbol],tmp_str=tmp_str.split(symbol).join(entity);return tmp_str}function htmlspecialchars(string,quote_style){var histogram={},symbol="",tmp_str="",entity="";if(tmp_str=string.toString(),!1===(histogram=get_html_translation_table("HTML_SPECIALCHARS",quote_style)))return!1;for(symbol in histogram)entity=histogram[symbol],tmp_str=tmp_str.split(symbol).join(entity);return tmp_str}function htmlspecialchars_decode(string,quote_style){var histogram={},symbol="",tmp_str="",entity="";if(tmp_str=string.toString(),!1===(histogram=get_html_translation_table("HTML_SPECIALCHARS",quote_style)))return!1;for(symbol in delete histogram["&"],histogram["&"]="&amp;",histogram)entity=histogram[symbol],tmp_str=tmp_str.split(entity).join(symbol);return tmp_str}function http_build_query(formdata,numeric_prefix,arg_separator){var key,use_val,use_key,i=0,j=0,tmp_arr=[];for(key in arg_separator||(arg_separator="&"),formdata)use_val=urlencode(formdata[key].toString()),use_key=urlencode(key),numeric_prefix&&!isNaN(key)&&(use_key=numeric_prefix+j,j++),tmp_arr[i++]=use_key+"="+use_val;return tmp_arr.join(arg_separator)}function hypot(x,y){return Math.sqrt(x*x+y*y)||0}function implode(glue,pieces){return pieces instanceof Array?pieces.join(glue):pieces}function in_array(needle,haystack,argStrict){var found=!1,key,strict=!!argStrict;for(key in haystack)if(strict&&haystack[key]===needle||!strict&&haystack[key]==needle){found=!0;break}return found}function intval(mixed_var,base){var tmp,type=typeof mixed_var;return"boolean"==type?1==mixed_var?1:0:"string"==type?(tmp=parseInt(1*mixed_var),isNaN(tmp)||!isFinite(tmp)?0:tmp.toString(base||10)):"number"==type&&isFinite(mixed_var)?Math.floor(mixed_var):0}function ip2long(ip_address){var output=!1,parts=[];return ip_address.match(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/)&&(output=16777216*(parts=ip_address.split("."))[0]+65536*parts[1]+256*parts[2]+1*parts[3]),output}function is_bool(mixed_var){return"boolean"==typeof mixed_var}function is_double(mixed_var){return is_float(mixed_var)}function is_finite(val){var warningType="";if(val===1/0||val===-1/0)return!1;if("object"==typeof val?warningType=val instanceof Array?"array":"object":"string"!=typeof val||val.match(/^[\+\-]?\d/)||(warningType="string"),warningType)throw new Error("Warning: is_finite() expects parameter 1 to be double, "+warningType+" given");return!0}function is_float(mixed_var){return parseFloat(1*mixed_var)!=parseInt(1*mixed_var)}function is_infinite(val){var warningType="";if(val===1/0||val===-1/0)return!0;if("object"==typeof val?warningType=val instanceof Array?"array":"object":"string"!=typeof val||val.match(/^[\+\-]?\d/)||(warningType="string"),warningType)throw new Error("Warning: is_infinite() expects parameter 1 to be double, "+warningType+" given");return!1}function is_int(mixed_var){return"number"==typeof mixed_var&&parseFloat(mixed_var)==parseInt(mixed_var)}function is_integer(mixed_var){return is_int(mixed_var)}function is_long(mixed_var){return is_float(mixed_var)}function is_nan(val){var warningType="";if("number"==typeof val&&isNaN(val))return!0;if("object"==typeof val?warningType=val instanceof Array?"array":"object":"string"!=typeof val||val.match(/^[\+\-]?\d/)||(warningType="string"),warningType)throw new Error("Warning: is_nan() expects parameter 1 to be double, "+warningType+" given");return!1}function is_null(mixed_var){return null===mixed_var}function is_numeric(mixed_var){return!isNaN(1*mixed_var)}function is_real(mixed_var){return is_float(mixed_var)}function is_scalar(mixed_var){return/boolean|number|string/.test(typeof mixed_var)}function is_string(mixed_var){return"string"==typeof mixed_var}function join(glue,pieces){return implode(glue,pieces)}function json_decode(str_json){var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,j,text=str_json,walk=function(holder,key){var k,v,value=holder[key];if(value&&"object"==typeof value)for(k in value)Object.hasOwnProperty.call(value,k)&&(void 0!==(v=walk(value,k))?value[k]=v:delete value[k]);return reviver.call(holder,key,value)};if(cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,(function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}))),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("json_decode")}function json_encode(mixed_val){var indent,value,i,quote=function(string){var escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return escapable.lastIndex=0,escapable.test(string)?'"'+string.replace(escapable,(function(a){var c=meta[a];return"string"==typeof c?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}))+'"':'"'+string+'"'},str=function(key,holder){var gap="",indent="    ",i=0,k="",v="",length=0,mind=gap,partial=[],value=holder[key];switch(value&&"object"==typeof value&&"function"==typeof value.toJSON&&(value=value.toJSON(key)),typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value)return"null";if(gap+="    ",partial=[],"[object Array]"===Object.prototype.toString.apply(value)){for(length=value.length,i=0;i<length;i+=1)partial[i]=str(i,value)||"null";return v=0===partial.length?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]",gap=mind,v}for(k in value)Object.hasOwnProperty.call(value,k)&&(v=str(k,value))&&partial.push(quote(k)+(gap?": ":":")+v);return v=0===partial.length?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}",gap=mind,v}};return str("",{"":mixed_val})}function krsort(array,sort_flags){var tmp_arr={},keys=[],sorter,i,key;switch(sort_flags){case"SORT_STRING":sorter=function(a,b){return strnatcmp(b,a)};break;case"SORT_LOCALE_STRING":sorter=function(a,b){return b.localeCompare(a)};break;case"SORT_NUMERIC":sorter=function(a,b){return b-a};break;case"SORT_REGULAR":default:sorter=function(a,b){return a<b?1:a>b?-1:0}}for(key in array)keys.push(key);for(keys.sort(sorter),i=0;i<keys.length;i++)tmp_arr[key=keys[i]]=array[key],delete array[key];for(i in tmp_arr)array[i]=tmp_arr[i];return!0}function ksort(array,sort_flags){var tmp_arr={},keys=[],sorter,i,key;switch(sort_flags){case"SORT_STRING":sorter=function(a,b){return strnatcmp(a,b)};break;case"SORT_LOCALE_STRING":sorter=function(a,b){return a.localeCompare(b)};break;case"SORT_NUMERIC":sorter=function(a,b){return a-b};break;case"SORT_REGULAR":default:sorter=function(a,b){return a>b?1:a<b?-1:0}}for(key in array)keys.push(key);for(keys.sort(sorter),i=0;i<keys.length;i++)tmp_arr[key=keys[i]]=array[key],delete array[key];for(i in tmp_arr)array[i]=tmp_arr[i];return!0}function lcfirst(str){var f;return(str+="").charAt(0).toLowerCase()+str.substr(1)}function lcg_value(){return Math.random()}function levenshtein(a,b){var min=Math.min,len1=0,len2=0,I=0,i=0,d=[],c="",j=0,J=0,split=!1;try{split=!"0"[0]}catch(i){split=!0}if(a==b)return 0;if(!a.length||!b.length)return b.length||a.length;for(split&&(a=a.split(""),b=b.split("")),len1=a.length+1,len2=b.length+1,d=[[0]];++i<len2;)d[0][i]=i;for(i=0;++i<len1;){for(J=j=0,c=a[I],d[i]=[i];++j<len2;)d[i][j]=min(d[I][j]+1,d[i][J]+1,d[I][J]+(c!=b[J])),++J;++I}return d[len1-1][len2-1]}function log(arg,base){return void 0===base?Math.log(arg):Math.log(arg)/Math.log(base)}function log10(arg){return Math.log(arg)/Math.LN10}function long2ip(proper_address){var output=!1;return!isNaN(proper_address)&&(proper_address>=0||proper_address<=4294967295)&&(output=Math.floor(proper_address/Math.pow(256,3))+"."+Math.floor(proper_address%Math.pow(256,3)/Math.pow(256,2))+"."+Math.floor(proper_address%Math.pow(256,3)%Math.pow(256,2)/Math.pow(256,1))+"."+Math.floor(proper_address%Math.pow(256,3)%Math.pow(256,2)%Math.pow(256,1)/Math.pow(256,0))),output}function ltrim(str,charlist){charlist=charlist?(charlist+"").replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g,"$1"):" s ";var re=new RegExp("^["+charlist+"]+","g");return(str+"").replace(re,"")}function max(){var ar,retVal,i=0,n=0,argv=arguments,argc=argv.length,_obj2Array=function(obj){if(obj instanceof Array)return obj;var ar=[];for(var i in obj)ar.push(obj[i]);return ar},_compare=function(current,next){var i=0,n=0,tmp=0,nl=0,cl=0;if(current===next)return 0;if("object"==typeof current){if("object"==typeof next){if(current=_obj2Array(current),next=_obj2Array(next),cl=current.length,(nl=next.length)>cl)return 1;if(nl<cl)return-1;for(i=0,n=cl;i<n;++i){if(1==(tmp=_compare(current[i],next[i])))return 1;if(-1==tmp)return-1}return 0}return-1}return"object"==typeof next?1:isNaN(next)&&!isNaN(current)?0==current?0:current<0?1:-1:isNaN(current)&&!isNaN(next)?0==next?0:next>0?1:-1:next==current?0:next>current?1:-1};if(0==argc)throw new Error("At least one value should be passed to max()");if(1==argc){if("object"!=typeof argv[0])throw new Error("Wrong parameter count for max()");if(0==(ar=_obj2Array(argv[0])).length)throw new Error("Array must contain at least one element for max()")}else ar=argv;for(retVal=ar[0],i=1,n=ar.length;i<n;++i)1==_compare(retVal,ar[i])&&(retVal=ar[i]);return retVal}function md5(str){var xl,RotateLeft=function(lValue,iShiftBits){return lValue<<iShiftBits|lValue>>>32-iShiftBits},AddUnsigned=function(lX,lY){var lX4,lY4,lX8,lY8,lResult;return lX8=2147483648&lX,lY8=2147483648&lY,lResult=(1073741823&lX)+(1073741823&lY),(lX4=1073741824&lX)&(lY4=1073741824&lY)?2147483648^lResult^lX8^lY8:lX4|lY4?1073741824&lResult?3221225472^lResult^lX8^lY8:1073741824^lResult^lX8^lY8:lResult^lX8^lY8},F=function(x,y,z){return x&y|~x&z},G=function(x,y,z){return x&z|y&~z},H=function(x,y,z){return x^y^z},I=function(x,y,z){return y^(x|~z)},FF=function(a,b,c,d,x,s,ac){return a=AddUnsigned(a,AddUnsigned(AddUnsigned(F(b,c,d),x),ac)),AddUnsigned(RotateLeft(a,s),b)},GG=function(a,b,c,d,x,s,ac){return a=AddUnsigned(a,AddUnsigned(AddUnsigned(G(b,c,d),x),ac)),AddUnsigned(RotateLeft(a,s),b)},HH=function(a,b,c,d,x,s,ac){return a=AddUnsigned(a,AddUnsigned(AddUnsigned(H(b,c,d),x),ac)),AddUnsigned(RotateLeft(a,s),b)},II=function(a,b,c,d,x,s,ac){return a=AddUnsigned(a,AddUnsigned(AddUnsigned(I(b,c,d),x),ac)),AddUnsigned(RotateLeft(a,s),b)},ConvertToWordArray=function(str){for(var lWordCount,lMessageLength=str.length,lNumberOfWords_temp1=lMessageLength+8,lNumberOfWords_temp2,lNumberOfWords=16*((lNumberOfWords_temp1-lNumberOfWords_temp1%64)/64+1),lWordArray=Array(lNumberOfWords-1),lBytePosition=0,lByteCount=0;lByteCount<lMessageLength;)lBytePosition=lByteCount%4*8,lWordArray[lWordCount=(lByteCount-lByteCount%4)/4]=lWordArray[lWordCount]|str.charCodeAt(lByteCount)<<lBytePosition,lByteCount++;return lBytePosition=lByteCount%4*8,lWordArray[lWordCount=(lByteCount-lByteCount%4)/4]=lWordArray[lWordCount]|128<<lBytePosition,lWordArray[lNumberOfWords-2]=lMessageLength<<3,lWordArray[lNumberOfWords-1]=lMessageLength>>>29,lWordArray},WordToHex=function(lValue){var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;for(lCount=0;lCount<=3;lCount++)WordToHexValue+=(WordToHexValue_temp="0"+(lByte=lValue>>>8*lCount&255).toString(16)).substr(WordToHexValue_temp.length-2,2);return WordToHexValue},x=Array(),k,AA,BB,CC,DD,a,b,c,d,S11=7,S12=12,S13=17,S14=22,S21=5,S22=9,S23=14,S24=20,S31=4,S32=11,S33=16,S34=23,S41=6,S42=10,S43=15,S44=21,temp;for(a=1732584193,b=4023233417,c=2562383102,d=271733878,xl=(x=ConvertToWordArray(str=utf8_encode(str))).length,k=0;k<xl;k+=16)AA=a,BB=b,CC=c,DD=d,a=FF(a,b,c,d,x[k+0],7,3614090360),d=FF(d,a,b,c,x[k+1],12,3905402710),c=FF(c,d,a,b,x[k+2],17,606105819),b=FF(b,c,d,a,x[k+3],22,3250441966),a=FF(a,b,c,d,x[k+4],7,4118548399),d=FF(d,a,b,c,x[k+5],12,1200080426),c=FF(c,d,a,b,x[k+6],17,2821735955),b=FF(b,c,d,a,x[k+7],22,4249261313),a=FF(a,b,c,d,x[k+8],7,1770035416),d=FF(d,a,b,c,x[k+9],12,2336552879),c=FF(c,d,a,b,x[k+10],17,4294925233),b=FF(b,c,d,a,x[k+11],22,2304563134),a=FF(a,b,c,d,x[k+12],7,1804603682),d=FF(d,a,b,c,x[k+13],12,4254626195),c=FF(c,d,a,b,x[k+14],17,2792965006),a=GG(a,b=FF(b,c,d,a,x[k+15],22,1236535329),c,d,x[k+1],5,4129170786),d=GG(d,a,b,c,x[k+6],9,3225465664),c=GG(c,d,a,b,x[k+11],14,643717713),b=GG(b,c,d,a,x[k+0],20,3921069994),a=GG(a,b,c,d,x[k+5],5,3593408605),d=GG(d,a,b,c,x[k+10],9,38016083),c=GG(c,d,a,b,x[k+15],14,3634488961),b=GG(b,c,d,a,x[k+4],20,3889429448),a=GG(a,b,c,d,x[k+9],5,568446438),d=GG(d,a,b,c,x[k+14],9,3275163606),c=GG(c,d,a,b,x[k+3],14,4107603335),b=GG(b,c,d,a,x[k+8],20,1163531501),a=GG(a,b,c,d,x[k+13],5,2850285829),d=GG(d,a,b,c,x[k+2],9,4243563512),c=GG(c,d,a,b,x[k+7],14,1735328473),a=HH(a,b=GG(b,c,d,a,x[k+12],20,2368359562),c,d,x[k+5],4,4294588738),d=HH(d,a,b,c,x[k+8],11,2272392833),c=HH(c,d,a,b,x[k+11],16,1839030562),b=HH(b,c,d,a,x[k+14],23,4259657740),a=HH(a,b,c,d,x[k+1],4,2763975236),d=HH(d,a,b,c,x[k+4],11,1272893353),c=HH(c,d,a,b,x[k+7],16,4139469664),b=HH(b,c,d,a,x[k+10],23,3200236656),a=HH(a,b,c,d,x[k+13],4,681279174),d=HH(d,a,b,c,x[k+0],11,3936430074),c=HH(c,d,a,b,x[k+3],16,3572445317),b=HH(b,c,d,a,x[k+6],23,76029189),a=HH(a,b,c,d,x[k+9],4,3654602809),d=HH(d,a,b,c,x[k+12],11,3873151461),c=HH(c,d,a,b,x[k+15],16,530742520),a=II(a,b=HH(b,c,d,a,x[k+2],23,3299628645),c,d,x[k+0],6,4096336452),d=II(d,a,b,c,x[k+7],10,1126891415),c=II(c,d,a,b,x[k+14],15,2878612391),b=II(b,c,d,a,x[k+5],21,4237533241),a=II(a,b,c,d,x[k+12],6,1700485571),d=II(d,a,b,c,x[k+3],10,2399980690),c=II(c,d,a,b,x[k+10],15,4293915773),b=II(b,c,d,a,x[k+1],21,2240044497),a=II(a,b,c,d,x[k+8],6,1873313359),d=II(d,a,b,c,x[k+15],10,4264355552),c=II(c,d,a,b,x[k+6],15,2734768916),b=II(b,c,d,a,x[k+13],21,1309151649),a=II(a,b,c,d,x[k+4],6,4149444226),d=II(d,a,b,c,x[k+11],10,3174756917),c=II(c,d,a,b,x[k+2],15,718787259),b=II(b,c,d,a,x[k+9],21,3951481745),a=AddUnsigned(a,AA),b=AddUnsigned(b,BB),c=AddUnsigned(c,CC),d=AddUnsigned(d,DD);return(WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d)).toLowerCase()}function method_exists(obj,method){return"string"==typeof obj?window[obj]&&"function"==typeof window[obj][method]:"function"==typeof obj[method]}function microtime(get_as_float){var now=(new Date).getTime()/1e3,s=parseInt(now);return get_as_float?now:Math.round(1e3*(now-s))/1e3+" "+s}function min(){var ar,retVal,i=0,n=0,argv=arguments,argc=argv.length,_obj2Array=function(obj){if(obj instanceof Array)return obj;var ar=[];for(var i in obj)ar.push(obj[i]);return ar},_compare=function(current,next){var i=0,n=0,tmp=0,nl=0,cl=0;if(current===next)return 0;if("object"==typeof current){if("object"==typeof next){if(current=_obj2Array(current),next=_obj2Array(next),cl=current.length,(nl=next.length)>cl)return 1;if(nl<cl)return-1;for(i=0,n=cl;i<n;++i){if(1==(tmp=_compare(current[i],next[i])))return 1;if(-1==tmp)return-1}return 0}return-1}return"object"==typeof next?1:isNaN(next)&&!isNaN(current)?0==current?0:current<0?1:-1:isNaN(current)&&!isNaN(next)?0==next?0:next>0?1:-1:next==current?0:next>current?1:-1};if(0==argc)throw new Error("At least one value should be passed to min()");if(1==argc){if("object"!=typeof argv[0])throw new Error("Wrong parameter count for min()");if(0==(ar=_obj2Array(argv[0])).length)throw new Error("Array must contain at least one element for min()")}else ar=argv;for(retVal=ar[0],i=1,n=ar.length;i<n;++i)-1==_compare(retVal,ar[i])&&(retVal=ar[i]);return retVal}function mktime(){var no,ma=0,mb=0,i=0,d=new Date,argv=arguments,argc=argv.length;argc>0&&(d.setHours(0,0,0),d.setDate(1),d.setMonth(1),d.setYear(1972));var dateManip={0:function(tt){return d.setHours(tt)},1:function(tt){return d.setMinutes(tt)},2:function(tt){var set=d.setSeconds(tt);return mb=d.getDate()-1,set},3:function(tt){var set=d.setMonth(parseInt(tt)-1);return ma=d.getFullYear()-1972,set},4:function(tt){return d.setDate(tt+mb)},5:function(tt){return d.setYear(tt+ma)}};for(i=0;i<argc;i++){if(no=parseInt(1*argv[i]),isNaN(no))return!1;if(!dateManip[i](no))return!1}return Math.floor(d.getTime()/1e3)}function mt_getrandmax(){return 2147483647}function mt_rand(min,max){var argc=arguments.length;if(0==argc)min=0,max=2147483647;else if(1==argc)throw new Error("Warning: mt_rand() expects exactly 2 parameters, 1 given");return Math.floor(Math.random()*(max-min+1))+min}function natcasesort(inputArr){var valArr=[],keyArr=[],k,i,ret,bubbleSort=function(keyArr,inputArr){var i,j,tempValue,tempKeyVal;for(i=inputArr.length-2;i>=0;i--)for(j=0;j<=i;j++)(ret=strnatcasecmp(inputArr[j+1],inputArr[j]))<0&&(tempValue=inputArr[j],inputArr[j]=inputArr[j+1],inputArr[j+1]=tempValue,tempKeyVal=keyArr[j],keyArr[j]=keyArr[j+1],keyArr[j+1]=tempKeyVal)};for(k in inputArr)valArr.push(inputArr[k]),keyArr.push(k),delete inputArr[k];try{bubbleSort(keyArr,valArr)}catch(e){return!1}for(i=0;i<valArr.length;i++)inputArr[keyArr[i]]=valArr[i];return!0}function natsort(inputArr){var valArr=[],keyArr=[],k,i,ret,bubbleSort=function(keyArr,inputArr){var i,j,tempValue,tempKeyVal;for(i=inputArr.length-2;i>=0;i--)for(j=0;j<=i;j++)(ret=strnatcmp(inputArr[j+1],inputArr[j]))<0&&(tempValue=inputArr[j],inputArr[j]=inputArr[j+1],inputArr[j+1]=tempValue,tempKeyVal=keyArr[j],keyArr[j]=keyArr[j+1],keyArr[j+1]=tempKeyVal)};for(k in inputArr)valArr.push(inputArr[k]),keyArr.push(k),delete inputArr[k];try{bubbleSort(keyArr,valArr)}catch(e){return!1}for(i=0;i<valArr.length;i++)inputArr[keyArr[i]]=valArr[i];return!0}function nl2br(str,is_xhtml){var breakTag="";return breakTag="<br />",void 0===is_xhtml||is_xhtml||(breakTag="<br>"),(str+"").replace(/([^>]?)\n/g,"$1"+breakTag+"\n")}function number_format(number,decimals,dec_point,thousands_sep){var n=number,prec=decimals;n=isFinite(+n)?+n:0;var sep=void 0===thousands_sep?",":thousands_sep,dec=void 0===dec_point?".":dec_point,s=(prec=isFinite(+prec)?Math.abs(prec):0)>0?n.toFixed(prec):Math.round(n).toFixed(prec),abs=Math.abs(n).toFixed(prec),_,i;return abs>=1e3?(i=(_=abs.split(/\D/))[0].length%3||3,_[0]=s.slice(0,i+(n<0))+_[0].slice(i).replace(/(\d{3})/g,sep+"$1"),s=_.join(dec)):s=s.replace(".",dec),s}function octdec(oct_string){return oct_string=(oct_string+"").replace(/[^0-7]/gi,""),parseInt(oct_string,8)}function ord(string){return(string+"").charCodeAt(0)}function parse_str(str,array){var glue1="=",glue2="&",array2=(str+"").split("&"),array2l=0,tmp="",x=0;for(array2l=array2.length,x=0;x<array2l;x++)tmp=array2[x].split("="),array[unescape(tmp[0])]=unescape(tmp[1]).replace(/[+]/g," ")}function parse_url(str,component){for(var o={strictMode:!1,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/\/?)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},m=o.parser[o.strictMode?"strict":"loose"].exec(str),uri={},i=14;i--;)uri[o.key[i]]=m[i]||"";switch(component){case"PHP_URL_SCHEME":return uri.protocol;case"PHP_URL_HOST":return uri.host;case"PHP_URL_PORT":return uri.port;case"PHP_URL_USER":return uri.user;case"PHP_URL_PASS":return uri.password;case"PHP_URL_PATH":return uri.path;case"PHP_URL_QUERY":return uri.query;case"PHP_URL_FRAGMENT":return uri.anchor;default:var retArr={};return""!==uri.protocol&&(retArr.scheme=uri.protocol),""!==uri.host&&(retArr.host=uri.host),""!==uri.port&&(retArr.port=uri.port),""!==uri.user&&(retArr.user=uri.user),""!==uri.password&&(retArr.pass=uri.password),""!==uri.path&&(retArr.path=uri.path),""!==uri.query&&(retArr.query=uri.query),""!==uri.anchor&&(retArr.fragment=uri.anchor),retArr}}function pi(){return Math.PI}function pow(base,exp){return Math.pow(base,exp)}function preg_quote(str){return(str+"").replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g,"\\$1")}function print_r(array,return_val){var output="",pad_char=" ",pad_val=4,formatArray=function(obj,cur_depth,pad_val,pad_char){cur_depth>0&&cur_depth++;var base_pad=repeat_char(pad_val*cur_depth,pad_char),thick_pad=repeat_char(pad_val*(cur_depth+1),pad_char),str="";if(obj instanceof Array||obj instanceof Object){for(var key in str+="Array\n"+base_pad+"(\n",obj)obj[key]instanceof Array?str+=thick_pad+"["+key+"] => "+formatArray(obj[key],cur_depth+1,pad_val,pad_char):str+=thick_pad+"["+key+"] => "+obj[key]+"\n";str+=base_pad+")\n"}else str=null==obj||null==obj?"":obj.toString();return str},repeat_char=function(len,pad_char){for(var str="",i=0;i<len;i++)str+=pad_char;return str};if(output=formatArray(array,0,4," "),!0!==return_val){if(document.body)echo(output);else try{XULDocument,echo('<pre xmlns="http://www.w3.org/1999/xhtml" style="white-space:pre;">'+output+"</pre>")}catch(e){echo(output)}return!0}return output}function property_exists(cls,prop){return!("function"!=typeof(cls="string"==typeof cls?window[cls]:cls)||!cls.toSource||!cls.toSource().match(new RegExp("this\\."+prop+"\\s")))||(void 0!==cls[prop]&&"function"!=typeof cls[prop]||void 0!==cls.prototype&&void 0!==cls.prototype[prop]&&"function"!=typeof cls.prototype[prop]||cls.constructor&&void 0!==cls.constructor[prop]&&"function"!=typeof cls.constructor[prop])}function quotemeta(str){return(str+"").replace(/([\.\\\+\*\?\[\^\]\$\(\)])/g,"\\$1")}function rad2deg(angle){return angle/Math.PI*180}function rand(min,max){var argc=arguments.length;if(0==argc)min=0,max=2147483647;else if(1==argc)throw new Error("Warning: rand() expects exactly 2 parameters, 1 given");return Math.floor(Math.random()*(max-min+1))+min}function range(low,high,step){var matrix=[],inival,endval,plus,walker=step||1,chars=!1;if(isNaN(low)||isNaN(high)?isNaN(low)&&isNaN(high)?(chars=!0,inival=low.charCodeAt(0),endval=high.charCodeAt(0)):(inival=isNaN(low)?0:low,endval=isNaN(high)?0:high):(inival=low,endval=high),plus=!(inival>endval))for(;inival<=endval;)matrix.push(chars?String.fromCharCode(inival):inival),inival+=walker;else for(;inival>=endval;)matrix.push(chars?String.fromCharCode(inival):inival),inival-=walker;return matrix}function rawurldecode(str){var histogram={},ret=str.toString(),replacer=function(search,replace,str){var tmp_arr=[];return(tmp_arr=str.split(search)).join(replace)};for(replace in histogram["'"]="%27",histogram["("]="%28",histogram[")"]="%29",histogram["*"]="%2A",histogram["~"]="%7E",histogram["!"]="%21",histogram)search=histogram[replace],ret=replacer(search,replace,ret);return ret=decodeURIComponent(ret)}function rawurlencode(str){var histogram={},tmp_arr=[],ret=str.toString(),replacer=function(search,replace,str){var tmp_arr=[];return(tmp_arr=str.split(search)).join(replace)};for(search in histogram["'"]="%27",histogram["("]="%28",histogram[")"]="%29",histogram["*"]="%2A",histogram["~"]="%7E",histogram["!"]="%21",ret=replacer("%20"," ",ret=encodeURIComponent(ret)),histogram)replace=histogram[search],ret=replacer(search,replace,ret);return ret.replace(/(\%([a-z0-9]{2}))/g,(function(full,m1,m2){return"%"+m2.toUpperCase()}))}function reset(arr){this.php_js||(this.php_js={}),this.php_js.pointers||(this.php_js.pointers=[]);var pointers=this.php_js.pointers;-1===pointers.indexOf(arr)&&pointers.push(arr,0);var arrpos=pointers.indexOf(arr);if(!(arr instanceof Array)){for(var k in arr)return-1===pointers.indexOf(arr)?pointers.push(arr,0):pointers[arrpos+1]=0,arr[k];return!1}return 0!==arr.length&&(pointers[arrpos+1]=0,arr[pointers[arrpos+1]])}function round(val,precision){return parseFloat(parseFloat(val).toFixed(precision))}function rsort(inputArr,sort_flags){var valArr=[],keyArr=[],k="",i=0,sorter=!1;for(k in inputArr)valArr.push(inputArr[k]),delete inputArr[k];switch(sort_flags){case"SORT_STRING":sorter=function(a,b){return strnatcmp(b,a)};break;case"SORT_LOCALE_STRING":sorter=function(a,b){return b.localeCompare(a)};break;case"SORT_NUMERIC":sorter=function(a,b){return b-a};break;case"SORT_REGULAR":default:sorter=function(a,b){return a<b?1:a>b?-1:0}}for(valArr.sort(sorter),i=0;i<valArr.length;i++)inputArr[i]=valArr[i];return!0}function rtrim(str,charlist){charlist=charlist?(charlist+"").replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g,"$1"):" s ";var re=new RegExp("["+charlist+"]+$","g");return(str+"").replace(re,"")}function serialize(mixed_value){var _getType=function(inp){var type=typeof inp,match,key;if("object"==type&&!inp)return"null";if("object"==type){if(!inp.constructor)return"object";var cons=inp.constructor.toString();(match=cons.match(/(\w+)\(/))&&(cons=match[1].toLowerCase());var types=["boolean","number","string","array"];for(key in types)if(cons==types[key]){type=types[key];break}}return type},type=_getType(mixed_value),val,ktype="";switch(type){case"function":val="";break;case"undefined":val="N";break;case"boolean":val="b:"+(mixed_value?"1":"0");break;case"number":val=(Math.round(mixed_value)==mixed_value?"i":"d")+":"+mixed_value;break;case"string":val="s:"+mixed_value.length+':"'+mixed_value+'"';break;case"array":case"object":val="a";var count=0,vals="",okey,key;for(key in mixed_value)"function"!=(ktype=_getType(mixed_value[key]))&&(vals+=serialize(okey=key.match(/^[0-9]+$/)?parseInt(key):key)+serialize(mixed_value[key]),count++);val+=":"+count+":{"+vals+"}"}return"object"!=type&&"array"!=type&&(val+=";"),val}function setcookie(name,value,expires,path,domain,secure){return setrawcookie(name,encodeURIComponent(value),expires,path,domain,secure)}function setrawcookie(name,value,expires,path,domain,secure){expires instanceof Date?expires=expires.toGMTString():"number"==typeof expires&&(expires=new Date(+new Date+1e3*expires).toGMTString());var r=[name+"="+value],s,i;for(i in s={expires:expires,path:path,domain:domain})s[i]&&r.push(i+"="+s[i]);return secure&&r.push("secure"),document.cookie=r.join(";"),!0}function settype(vr,type){var is_array=function(arr){return"object"==typeof arr&&"number"==typeof arr.length&&!arr.propertyIsEnumerable("length")&&"function"==typeof arr.splice},v,mtch,i,obj;v=this[vr]?this[vr]:vr;try{switch(type){case"boolean":if(is_array(v)&&0===v.length)this[vr]=!1;else if("0"===v)this[vr]=!1;else if("object"!=typeof v||is_array(v))this[vr]=!!v;else{var lgth=!1;for(i in v)lgth=!0;this[vr]=lgth}break;case"integer":"number"==typeof v?this[vr]=parseInt(v,10):"string"==typeof v?(mtch=v.match(/^([+-]?)(\d+)/),this[vr]=mtch?parseInt(v,10):0):!0===v?this[vr]=1:!1===v||null===v?this[vr]=0:is_array(v)&&0===v.length?this[vr]=0:"object"==typeof v&&(this[vr]=1);break;case"float":"string"==typeof v?(mtch=v.match(/^([+-]?)(\d+(\.\d+)?|\.\d+)([eE][+-]?\d+)?/),this[vr]=mtch?parseFloat(v,10):0):!0===v?this[vr]=1:!1===v||null===v?this[vr]=0:is_array(v)&&0===v.length?this[vr]=0:"object"==typeof v&&(this[vr]=1);break;case"string":null===v||!1===v?this[vr]="":is_array(v)?this[vr]="Array":"object"==typeof v?this[vr]="Object":!0===v?this[vr]="1":this[vr]+="";break;case"array":null===v?this[vr]=[]:"object"!=typeof v&&(this[vr]=[v]);break;case"object":if(null===v)this[vr]={};else if(is_array(v)){for(i=0,obj={};i<v.length;i++)obj[i]=v;this[vr]=obj}else"object"!=typeof v&&(this[vr]={scalar:v});break;case"null":delete this[vr]}return!0}catch(e){return!1}}function sha1(str){var rotate_left=function(n,s){var t4;return n<<s|n>>>32-s},lsb_hex=function(val){var str="",i,vh,vl;for(i=0;i<=6;i+=2)vl=val>>>4*i&15,str+=(vh=val>>>4*i+4&15).toString(16)+vl.toString(16);return str},cvt_hex=function(val){var str="",i,v;for(i=7;i>=0;i--)str+=(v=val>>>4*i&15).toString(16);return str},blockstart,i,j,W=new Array(80),H0=1732584193,H1=4023233417,H2=2562383102,H3=271733878,H4=3285377520,A,B,C,D,E,temp,str_len=(str=utf8_encode(str)).length,word_array=[];for(i=0;i<str_len-3;i+=4)j=str.charCodeAt(i)<<24|str.charCodeAt(i+1)<<16|str.charCodeAt(i+2)<<8|str.charCodeAt(i+3),word_array.push(j);switch(str_len%4){case 0:i=2147483648;break;case 1:i=str.charCodeAt(str_len-1)<<24|8388608;break;case 2:i=str.charCodeAt(str_len-2)<<24|str.charCodeAt(str_len-1)<<16|32768;break;case 3:i=str.charCodeAt(str_len-3)<<24|str.charCodeAt(str_len-2)<<16|str.charCodeAt(str_len-1)<<8|128}for(word_array.push(i);word_array.length%16!=14;)word_array.push(0);for(word_array.push(str_len>>>29),word_array.push(str_len<<3&4294967295),blockstart=0;blockstart<word_array.length;blockstart+=16){for(i=0;i<16;i++)W[i]=word_array[blockstart+i];for(i=16;i<=79;i++)W[i]=rotate_left(W[i-3]^W[i-8]^W[i-14]^W[i-16],1);for(A=H0,B=H1,C=H2,D=H3,E=H4,i=0;i<=19;i++)temp=rotate_left(A,5)+(B&C|~B&D)+E+W[i]+1518500249&4294967295,E=D,D=C,C=rotate_left(B,30),B=A,A=temp;for(i=20;i<=39;i++)temp=rotate_left(A,5)+(B^C^D)+E+W[i]+1859775393&4294967295,E=D,D=C,C=rotate_left(B,30),B=A,A=temp;for(i=40;i<=59;i++)temp=rotate_left(A,5)+(B&C|B&D|C&D)+E+W[i]+2400959708&4294967295,E=D,D=C,C=rotate_left(B,30),B=A,A=temp;for(i=60;i<=79;i++)temp=rotate_left(A,5)+(B^C^D)+E+W[i]+3395469782&4294967295,E=D,D=C,C=rotate_left(B,30),B=A,A=temp;H0=H0+A&4294967295,H1=H1+B&4294967295,H2=H2+C&4294967295,H3=H3+D&4294967295,H4=H4+E&4294967295}return(temp=cvt_hex(H0)+cvt_hex(H1)+cvt_hex(H2)+cvt_hex(H3)+cvt_hex(H4)).toLowerCase()}function shuffle(inputArr){var valArr=[],k="",i=0;for(k in inputArr)valArr.push(inputArr[k]),delete inputArr[k];for(valArr.sort((function(){return.5-Math.random()})),i=0;i<valArr.length;i++)inputArr[i]=valArr[i];return!0}function sin(arg){return Math.sin(arg)}function sinh(arg){return(Math.exp(arg)-Math.exp(-arg))/2}function sizeof(mixed_var,mode){return count(mixed_var,mode)}function sort(inputArr,sort_flags){var valArr=[],keyArr=[],k="",i=0,sorter=!1;for(k in inputArr)valArr.push(inputArr[k]),delete inputArr[k];switch(sort_flags){case"SORT_STRING":sorter=function(a,b){return strnatcmp(a,b)};break;case"SORT_LOCALE_STRING":sorter=function(a,b){return a.localeCompare(b)};break;case"SORT_NUMERIC":sorter=function(a,b){return a-b};break;case"SORT_REGULAR":default:sorter=function(a,b){return a>b?1:a<b?-1:0}}for(valArr.sort(sorter),i=0;i<valArr.length;i++)inputArr[i]=valArr[i];return!0}function soundex(str){var s="",i,j,l,p=isNaN(p)?4:p>10?10:p<4?4:p,m={BFPV:1,CGJKQSXZ:2,DT:3,L:4,MN:5,R:6},r=(s=(str+"").toUpperCase().replace(/[^A-Z]/g,"").split("")).splice(0,1),sl=0;for(i=-1,l=sl=s.length;++i<l;)for(j in m)if(j.indexOf(s[i])+1&&r[r.length-1]!=m[j]&&r.push(m[j]))break;return r.length>p&&(r.length=p),r.join("")+new Array(p-r.length+1).join("0")}function split(delimiter,string){return explode(delimiter,string)}function sprintf(){var regex=/%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuidfegEG])/g,a=arguments,i=0,format=a[i++],pad=function(str,len,chr,leftJustify){chr||(chr=" ");var padding=str.length>=len?"":Array(1+len-str.length>>>0).join(chr);return leftJustify?str+padding:padding+str},justify=function(value,prefix,leftJustify,minWidth,zeroPad,customPadChar){var diff=minWidth-value.length;return diff>0&&(value=leftJustify||!zeroPad?pad(value,minWidth,customPadChar,leftJustify):value.slice(0,prefix.length)+pad("",diff,"0",!0)+value.slice(prefix.length)),value},formatBaseX=function(value,base,prefix,leftJustify,minWidth,precision,zeroPad){var number=value>>>0;return value=(prefix=prefix&&number&&{2:"0b",8:"0",16:"0x"}[base]||"")+pad(number.toString(base),precision||0,"0",!1),justify(value,prefix,leftJustify,minWidth,zeroPad)},formatString=function(value,leftJustify,minWidth,precision,zeroPad,customPadChar){return null!=precision&&(value=value.slice(0,precision)),justify(value,"",leftJustify,minWidth,zeroPad,customPadChar)},doFormat=function(substring,valueIndex,flags,minWidth,_,precision,type){var number,prefix,method,textTransform,value;if("%%"==substring)return"%";for(var leftJustify=!1,positivePrefix="",zeroPad=!1,prefixBaseX=!1,customPadChar=" ",flagsl=flags.length,j=0;flags&&j<flagsl;j++)switch(flags.charAt(j)){case" ":positivePrefix=" ";break;case"+":positivePrefix="+";break;case"-":leftJustify=!0;break;case"'":customPadChar=flags.charAt(j+1);break;case"0":zeroPad=!0;break;case"#":prefixBaseX=!0}if((minWidth=minWidth?"*"==minWidth?+a[i++]:"*"==minWidth.charAt(0)?+a[minWidth.slice(1,-1)]:+minWidth:0)<0&&(minWidth=-minWidth,leftJustify=!0),!isFinite(minWidth))throw new Error("sprintf: (minimum-)width must be finite");switch(precision=precision?"*"==precision?+a[i++]:"*"==precision.charAt(0)?+a[precision.slice(1,-1)]:+precision:"fFeE".indexOf(type)>-1?6:"d"==type?0:void 0,value=valueIndex?a[valueIndex.slice(0,-1)]:a[i++],type){case"s":return formatString(String(value),leftJustify,minWidth,precision,zeroPad,customPadChar);case"c":return formatString(String.fromCharCode(+value),leftJustify,minWidth,precision,zeroPad);case"b":return formatBaseX(value,2,prefixBaseX,leftJustify,minWidth,precision,zeroPad);case"o":return formatBaseX(value,8,prefixBaseX,leftJustify,minWidth,precision,zeroPad);case"x":return formatBaseX(value,16,prefixBaseX,leftJustify,minWidth,precision,zeroPad);case"X":return formatBaseX(value,16,prefixBaseX,leftJustify,minWidth,precision,zeroPad).toUpperCase();case"u":return formatBaseX(value,10,prefixBaseX,leftJustify,minWidth,precision,zeroPad);case"i":case"d":return value=(prefix=(number=parseInt(+value))<0?"-":positivePrefix)+pad(String(Math.abs(number)),precision,"0",!1),justify(value,prefix,leftJustify,minWidth,zeroPad);case"e":case"E":case"f":case"F":case"g":case"G":return prefix=(number=+value)<0?"-":positivePrefix,method=["toExponential","toFixed","toPrecision"]["efg".indexOf(type.toLowerCase())],textTransform=["toString","toUpperCase"]["eEfFgG".indexOf(type)%2],value=prefix+Math.abs(number)[method](precision),justify(value,prefix,leftJustify,minWidth,zeroPad)[textTransform]();default:return substring}};return format.replace(regex,doFormat)}function sqrt(arg){return Math.sqrt(arg)}function str_ireplace(search,replace,subject){var i,k="",searchl=0,reg;if(searchl=(search+="").length,!(replace instanceof Array)&&(replace=new Array(replace),search instanceof Array))for(;searchl>replace.length;)replace[replace.length]=replace[0];for(search instanceof Array||(search=new Array(search));search.length>replace.length;)replace[replace.length]="";if(subject instanceof Array){for(k in subject)subject[k]=str_ireplace(search,replace,subject[k]);return subject}for(searchl=search.length,i=0;i<searchl;i++)reg=new RegExp(search[i],"gi"),subject=subject.replace(reg,replace[i]);return subject}function str_pad(input,pad_length,pad_string,pad_type){var half="",pad_to_go,str_pad_repeater=function(s,len){for(var collect="",i;collect.length<len;)collect+=s;return collect=collect.substr(0,len)};return"STR_PAD_LEFT"!=pad_type&&"STR_PAD_RIGHT"!=pad_type&&"STR_PAD_BOTH"!=pad_type&&(pad_type="STR_PAD_RIGHT"),(pad_to_go=pad_length-(input+="").length)>0&&("STR_PAD_LEFT"==pad_type?input=str_pad_repeater(pad_string,pad_to_go)+input:"STR_PAD_RIGHT"==pad_type?input+=str_pad_repeater(pad_string,pad_to_go):"STR_PAD_BOTH"==pad_type&&(input=(input=(half=str_pad_repeater(pad_string,Math.ceil(pad_to_go/2)))+input+half).substr(0,pad_length))),input}function str_repeat(input,multiplier){return new Array(multiplier+1).join(input)}function str_replace(search,replace,subject){for(var s=subject,ra=r instanceof Array,sa=s instanceof Array,f=[].concat(search),r=[].concat(replace),i=(s=[].concat(s)).length,j=0;j=0,i--;)if(s[i])for(;s[i]=(s[i]+"").split(f[j]).join(ra?r[j]||"":r[0]),++j in f;);return sa?s:s[0]}function str_rot13(str){return(str+"").replace(/[A-Za-z]/g,(function(c){return String.fromCharCode(((223&(c=c.charCodeAt(0)))-52)%26+(32&c)+65)}))}function str_shuffle(str){if(null==str)throw"Wrong parameter count for str_shuffle()";for(var getRandomInt=function(max){return Math.floor(Math.random()*(max+1))},newStr="",rand=0;str.length;)newStr+=str[rand=getRandomInt(str.length-1)],str=str.substring(0,rand)+str.substr(rand+1);return newStr}function str_split(f_string,f_split_length){if(f_string+="",null==f_split_length&&(f_split_length=1),f_split_length>0){for(var result=[];f_string.length>f_split_length;)result[result.length]=f_string.substring(0,f_split_length),f_string=f_string.substring(f_split_length);return result[result.length]=f_string,result}return!1}function strcasecmp(f_string1,f_string2){var string1=(f_string1+"").toLowerCase(),string2=(f_string2+"").toLowerCase();return string1>string2?1:string1==string2?0:-1}function strchr(haystack,needle,bool){return strstr(haystack,needle,bool)}function strcmp(str1,str2){return str1==str2?0:str1>str2?1:-1}function strcspn(str,mask,start,length){start=start||0;var count=length&&start+length<str.length?start+length:str.length;strct:for(var i=start,lgth=0;i<count;i++){for(var j=0;j<mask.length;j++)if(-1!==str[i].indexOf(mask[j]))continue strct;++lgth}return lgth}function strip_tags(str,allowed_tags){var key="",allowed=!1,matches=[],allowed_array=[],allowed_tag="",i=0,k="",html="",replacer=function(search,replace,str){return str.split(search).join(replace)};for(key in allowed_tags&&(allowed_array=allowed_tags.match(/([a-zA-Z]+)/gi)),matches=(str+="").match(/(<\/?[\S][^>]*>)/gi))if(!isNaN(key)){for(k in html=matches[key].toString(),allowed=!1,allowed_array)if(allowed_tag=allowed_array[k],0!=(i=-1)&&(i=html.toLowerCase().indexOf("<"+allowed_tag+">")),0!=i&&(i=html.toLowerCase().indexOf("<"+allowed_tag+" ")),0!=i&&(i=html.toLowerCase().indexOf("</"+allowed_tag)),0==i){allowed=!0;break}allowed||(str=replacer(html,"",str))}return str}function stripos(f_haystack,f_needle,f_offset){var haystack=(f_haystack+"").toLowerCase(),needle=(f_needle+"").toLowerCase(),index=0;return-1!==(index=haystack.indexOf(needle,f_offset))&&index}function stripslashes(str){return(str+"").replace(/\0/g,"0").replace(/\\([\\'"])/g,"$1")}function stristr(haystack,needle,bool){var pos=0;return-1!=(pos=(haystack+="").toLowerCase().indexOf((needle+"").toLowerCase()))&&(bool?haystack.substr(0,pos):haystack.slice(pos))}function strlen(string){var str=string+"",i=0,chr="",lgth=0,getWholeChar=function(str,i){var code=str.charCodeAt(i),next="",prev="";if(55296<=code&&code<=56319){if(str.length<=i+1)throw"High surrogate without following low surrogate";if(56320>(next=str.charCodeAt(i+1))||next>57343)throw"High surrogate without following low surrogate";return str[i]+str[i+1]}if(56320<=code&&code<=57343){if(0===i)throw"Low surrogate without preceding high surrogate";if(55296>(prev=str.charCodeAt(i-1))||prev>56319)throw"Low surrogate without preceding high surrogate";return!1}return str[i]};for(i=0,lgth=0;i<str.length;i++)!1!==(chr=getWholeChar(str,i))&&lgth++;return lgth}function strnatcasecmp(str1,str2){a=(str1+"").toLowerCase(),b=(str2+"").toLowerCase();for(var isWhitespaceChar=function(a){return a.charCodeAt(0)<=32},isDigitChar=function(a){var charCode=a.charCodeAt(0);return charCode>=48&&charCode<=57},compareRight=function(a,b){for(var bias=0,ia=0,ib=0,ca,cb;;ia++,ib++){if(ca=a.charAt(ia),cb=b.charAt(ib),!isDigitChar(ca)&&!isDigitChar(cb))return bias;if(!isDigitChar(ca))return-1;if(!isDigitChar(cb))return 1;if(ca<cb)0==bias&&(bias=-1);else if(ca>cb)0==bias&&(bias=1);else if(0==ca&&0==cb)return bias}},ia=0,ib=0,nza=0,nzb=0,ca,cb,result;;){for(nza=nzb=0,ca=a.charAt(ia),cb=b.charAt(ib);isWhitespaceChar(ca)||"0"==ca;)"0"==ca?nza++:nza=0,ca=a.charAt(++ia);for(;isWhitespaceChar(cb)||"0"==cb;)"0"==cb?nzb++:nzb=0,cb=b.charAt(++ib);if(isDigitChar(ca)&&isDigitChar(cb)&&0!=(result=compareRight(a.substring(ia),b.substring(ib))))return result;if(0==ca&&0==cb)return nza-nzb;if(ca<cb)return-1;if(ca>cb)return 1;++ia,++ib}}function strnatcmp(f_string1,f_string2,f_version){null==f_version&&(f_version=!1);var __strnatcmp_split=function(f_string){var result=[],buffer="",chr="",i=0,f_stringl=0,text=!0;for(f_stringl=f_string.length,i=0;i<f_stringl;i++)(chr=f_string.substring(i,i+1)).match(/[0-9]/)?(text&&(buffer.length>0&&(result[result.length]=buffer,buffer=""),text=!1),buffer+=chr):0==text&&"."==chr&&i<f_string.length-1&&f_string.substring(i+1,i+2).match(/[0-9]/)?(result[result.length]=buffer,buffer=""):(0==text&&(buffer.length>0&&(result[result.length]=parseInt(buffer),buffer=""),text=!0),buffer+=chr);return buffer.length>0&&(result[result.length]=text?buffer:parseInt(buffer)),result},array1=__strnatcmp_split(f_string1+""),array2=__strnatcmp_split(f_string2+""),len=array1.length,text=!0,result=-1,r=0;for(len>array2.length&&(len=array2.length,result=1),i=0;i<len;i++)if(isNaN(array1[i])){if(!isNaN(array2[i]))return text?1:-1;if(text=!0,0!=(r=strcmp(array1[i],array2[i])))return r}else{if(isNaN(array2[i]))return text?-1:1;if(text||f_version){if(0!=(r=array1[i]-array2[i]))return r}else if(0!=(r=strcmp(array1[i].toString(),array2[i].toString())))return r;text=!1}return result}function strncasecmp(argStr1,argStr2,len){var diff,i=0,str1=(argStr1+"").toLowerCase().substr(0,len),str2=(argStr2+"").toLowerCase().substr(0,len);if(str1.length!==str2.length){if(str1.length<str2.length){if(len=str1.length,str2.substr(0,str1.length)==str1)return str1.length-str2.length}else if(len=str2.length,str1.substr(0,str2.length)==str2)return str1.length-str2.length}else len=str1.length;for(diff=0,i=0;i<len;i++)if(0!==(diff=str1.charCodeAt(i)-str2.charCodeAt(i)))return diff;return 0}function strncmp(str1,str2,lgth){var s1=(str1+"").substr(0,lgth),s2=(str2+"").substr(0,lgth);return s1==s2?0:s1>s2?1:-1}function strpbrk(haystack,char_list){var lon=(haystack+="").length,lon_search=(char_list+="").length,ret=!1,stack="",i=0,j=0;if(lon>=lon_search)if(lon==lon_search)haystack==char_list&&(ret=haystack);else{for(j=0,i=0;i<lon_search&&j<lon&&!ret;)char_list[i]==haystack[j]&&++i==lon_search&&(ret=!0),j++;if(ret)for(i=j-lon_search;i<lon;i++)stack+=haystack[i];""!=stack&&(ret=stack)}return ret}function strpos(haystack,needle,offset){var i=(haystack+"").indexOf(needle,offset);return-1!==i&&i}function strrchr(haystack,needle){var pos=0;return"string"!=typeof needle&&(needle=String.fromCharCode(parseInt(needle,10))),needle=needle[0],-1!==(pos=haystack.lastIndexOf(needle))&&haystack.substr(pos)}function strrev(string){var ret="",i=0;for(i=(string+="").length-1;i>=0;i--)ret+=string.charAt(i);return ret}function strripos(haystack,needle,offset){var i=(haystack+"").toLowerCase().lastIndexOf((needle+"").toLowerCase(),offset);return i>=0&&i}function strrpos(haystack,needle,offset){var i=(haystack+"").lastIndexOf(needle,offset);return i>=0&&i}function strspn(str1,str2,start,lgth){var found,stri,strj,j=0,i=0;for(start=start?start<0?str1.length+start:start:0,lgth=lgth?lgth<0?str1.length+lgth-start:lgth:str1.length-start,str1=str1.substr(start,lgth),i=0;i<str1.length;i++){for(found=0,stri=str1.substring(i,i+1),j=0;j<=str2.length;j++)if(stri==(strj=str2.substring(j,j+1))){found=1;break}if(1!=found)return i}return i}function strstr(haystack,needle,bool){var pos=0;return-1!=(pos=(haystack+="").indexOf(needle))&&(bool?haystack.substr(0,pos):haystack.slice(pos))}function strtok(str,tokens){if(void 0===tokens&&(tokens=str,str=strtok.leftOver),0===str.length)return!1;if(-1!==tokens.indexOf(str[0]))return strtok(str.substr(1),tokens);for(var i=0;i<str.length&&-1===tokens.indexOf(str[i]);i++);return strtok.leftOver=str.substr(i+1),str.substring(0,i)}function strtolower(str){return(str+"").toLowerCase()}function strtoupper(str){return(str+"").toUpperCase()}function strtr(str,from,to){var fr="",i=0,lgth=0;if("object"==typeof from){for(fr in from)str=str.replace(fr,from[fr]);return str}for(lgth=to.length,from.length<to.length&&(lgth=from.length),i=0;i<lgth;i++)str=str.replace(from[i],to[i],"g");return str}function substr(f_string,f_start,f_length){return f_string+="",f_start<0&&(f_start+=f_string.length),null==f_length?f_length=f_string.length:f_length+=f_length<0?f_string.length:f_start,f_length<f_start&&(f_length=f_start),f_string.substring(f_start,f_length)}function substr_count(haystack,needle,offset,length){var pos=0,cnt=0;for(haystack+="",needle+="",isNaN(offset)&&(offset=0),isNaN(length)&&(length=0),offset--;-1!=(offset=haystack.indexOf(needle,offset+1));){if(length>0&&offset+needle.length>length)return!1;cnt++}return cnt}function tan(arg){return Math.tan(arg)}function tanh(arg){return(Math.exp(arg)-Math.exp(-arg))/(Math.exp(arg)+Math.exp(-arg))}function time(){return Math.round((new Date).getTime()/1e3)}function trim(str,charlist){var whitespace,l=0,i=0;for(str+="",whitespace=charlist?(charlist+="").replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g,"$1"):" \n\r\t\f\v            ​\u2028\u2029　",l=str.length,i=0;i<l;i++)if(-1===whitespace.indexOf(str.charAt(i))){str=str.substring(i);break}for(i=(l=str.length)-1;i>=0;i--)if(-1===whitespace.indexOf(str.charAt(i))){str=str.substring(0,i+1);break}return-1===whitespace.indexOf(str.charAt(0))?str:""}function uasort(inputArr,sorter){"string"==typeof sorter?sorter=this[sorter]:sorter instanceof Array&&(sorter=this[sorter[0]][sorter[1]]);var valArr=[],keyArr=[],tempKeyVal,tempValue,ret,k="",i=0,sorterNew=function(keyArr,valArr){for(var i=valArr.length-2;i>=0;i--)for(var j=0;j<=i;j++)(ret=sorter(valArr[j+1],valArr[j]))<0&&(tempValue=valArr[j],valArr[j]=valArr[j+1],valArr[j+1]=tempValue,tempKeyVal=keyArr[j],keyArr[j]=keyArr[j+1],keyArr[j+1]=tempKeyVal)};for(k in inputArr)valArr.push(inputArr[k]),keyArr.push(k),delete inputArr[k];try{sorterNew(keyArr,valArr)}catch(e){return!1}for(i=0;i<valArr.length;i++)inputArr[keyArr[i]]=valArr[i];return!0}function ucfirst(str){var f;return(str+="").charAt(0).toUpperCase()+str.substr(1)}function ucwords(str){return(str+"").replace(/^(.)|\s(.)/g,(function($1){return $1.toUpperCase()}))}function uksort(array,sorter){"string"==typeof sorter&&(sorter=window[sorter]);var tmp_arr={},keys=[],i=0,key="";for(key in array)keys.push(key);try{sorter?keys.sort(sorter):keys.sort()}catch(e){return!1}for(i=0;i<keys.length;i++)tmp_arr[key=keys[i]]=array[key],delete array[key];for(i in tmp_arr)array[i]=tmp_arr[i];return!0}function unserialize(data){var error=function(type,msg,filename,line){throw new window[type](msg,filename,line)},read_until=function(data,offset,stopchr){for(var buf=[],chr=data.slice(offset,offset+1),i=2;chr!=stopchr;)i+offset>data.length&&error("Error","Invalid"),buf.push(chr),chr=data.slice(offset+(i-1),offset+i),i+=1;return[buf.length,buf.join("")]},read_chrs=function(data,offset,length){var buf;buf=[];for(var i=0;i<length;i++){var chr=data.slice(offset+(i-1),offset+i);buf.push(chr)}return[buf.length,buf.join("")]},_unserialize=function(data,offset){var readdata,readData,chrs=0,ccount,stringlength,keyandchrs,keys;offset||(offset=0);var dtype=data.slice(offset,offset+1).toLowerCase(),dataoffset=offset+2,typeconvert=new Function("x","return x");switch(dtype){case"i":typeconvert=new Function("x","return parseInt(x)"),chrs=(readData=read_until(data,dataoffset,";"))[0],readdata=readData[1],dataoffset+=chrs+1;break;case"b":typeconvert=new Function("x","return (parseInt(x) == 1)"),chrs=(readData=read_until(data,dataoffset,";"))[0],readdata=readData[1],dataoffset+=chrs+1;break;case"d":typeconvert=new Function("x","return parseFloat(x)"),chrs=(readData=read_until(data,dataoffset,";"))[0],readdata=readData[1],dataoffset+=chrs+1;break;case"n":readdata=null;break;case"s":chrs=(ccount=read_until(data,dataoffset,":"))[0],stringlength=ccount[1],chrs=(readData=read_chrs(data,(dataoffset+=chrs+2)+1,parseInt(stringlength)))[0],readdata=readData[1],dataoffset+=chrs+2,chrs!=parseInt(stringlength)&&chrs!=readdata.length&&error("SyntaxError","String length mismatch");break;case"a":readdata={},chrs=(keyandchrs=read_until(data,dataoffset,":"))[0],keys=keyandchrs[1],dataoffset+=chrs+2;for(var i=0;i<parseInt(keys);i++){var kprops=_unserialize(data,dataoffset),kchrs=kprops[1],key=kprops[2],vprops=_unserialize(data,dataoffset+=kchrs),vchrs=vprops[1],value=vprops[2];dataoffset+=vchrs,readdata[key]=value}dataoffset+=1;break;default:error("SyntaxError","Unknown / Unhandled data type(s): "+dtype)}return[dtype,dataoffset-offset,typeconvert(readdata)]};return _unserialize(data,0)[2]}function urldecode(str){var histogram={},ret=str.toString(),replacer=function(search,replace,str){var tmp_arr=[];return(tmp_arr=str.split(search)).join(replace)};for(replace in histogram["'"]="%27",histogram["("]="%28",histogram[")"]="%29",histogram["*"]="%2A",histogram["~"]="%7E",histogram["!"]="%21",histogram["%20"]="+",histogram)search=histogram[replace],ret=replacer(search,replace,ret);return ret=decodeURIComponent(ret)}function urlencode(str){var histogram={},tmp_arr=[],ret=str.toString(),replacer=function(search,replace,str){var tmp_arr=[];return(tmp_arr=str.split(search)).join(replace)};for(search in histogram["'"]="%27",histogram["("]="%28",histogram[")"]="%29",histogram["*"]="%2A",histogram["~"]="%7E",histogram["!"]="%21",histogram["%20"]="+",ret=encodeURIComponent(ret),histogram)replace=histogram[search],ret=replacer(search,replace,ret);return ret.replace(/(\%([a-z0-9]{2}))/g,(function(full,m1,m2){return"%"+m2.toUpperCase()}))}function usort(inputArr,sorter){var valArr=[],keyArr=[],k="",i=0;for(k in"string"==typeof sorter?sorter=this[sorter]:sorter instanceof Array&&(sorter=this[sorter[0]][sorter[1]]),inputArr)valArr.push(inputArr[k]),delete inputArr[k];try{valArr.sort(sorter)}catch(e){return!1}for(i=0;i<valArr.length;i++)inputArr[i]=valArr[i];return!0}function utf8_decode(str_data){var tmp_arr=[],i=0,ac=0,c1=0,c2=0,c3=0;for(str_data+="";i<str_data.length;)(c1=str_data.charCodeAt(i))<128?(tmp_arr[ac++]=String.fromCharCode(c1),i++):c1>191&&c1<224?(c2=str_data.charCodeAt(i+1),tmp_arr[ac++]=String.fromCharCode((31&c1)<<6|63&c2),i+=2):(c2=str_data.charCodeAt(i+1),c3=str_data.charCodeAt(i+2),tmp_arr[ac++]=String.fromCharCode((15&c1)<<12|(63&c2)<<6|63&c3),i+=3);return tmp_arr.join("")}function utf8_encode(string){var utftext="",start,end,stringl=0;start=end=0,stringl=(string=(string+"").replace(/\r\n/g,"\n").replace(/\r/g,"\n")).length;for(var n=0;n<stringl;n++){var c1=string.charCodeAt(n),enc=null;c1<128?end++:enc=c1>127&&c1<2048?String.fromCharCode(c1>>6|192)+String.fromCharCode(63&c1|128):String.fromCharCode(c1>>12|224)+String.fromCharCode(c1>>6&63|128)+String.fromCharCode(63&c1|128),null!=enc&&(end>start&&(utftext+=string.substring(start,end)),utftext+=enc,start=end=n+1)}return end>start&&(utftext+=string.substring(start,string.length)),utftext}function var_export(mixed_expression,bool_return){var retstr="",iret="",cnt=0,x=[],key="",i=0,__getType,type=function(inp){var type=typeof inp,match;if("object"==type&&!inp)return"null";if("object"==type){if(!inp.constructor)return"object";var cons=inp.constructor.toString();(match=cons.match(/(\w+)\(/))&&(cons=match[1].toLowerCase());var types=["boolean","number","string","array"];for(key in types)if(cons==types[key]){type=types[key];break}}return type}(mixed_expression);if(null===type)retstr="NULL";else if("array"==type||"object"==type){for(i in mixed_expression)x[cnt++]=var_export(i,!0)+" => "+var_export(mixed_expression[i],!0);retstr="array (\n  "+(iret=x.join(",\n  "))+"\n)"}else retstr=isNaN(mixed_expression)?"'"+mixed_expression.replace("/([\"'])/g","\\$1").replace("/\0/g","\\0")+"'":mixed_expression;return 1!=bool_return?(echo(retstr),null):retstr}function vsprintf(format,args){return sprintf.apply(this,[format].concat(args))}function wordwrap(str,int_width,str_break,cut){var m=arguments.length>=2?arguments[1]:75,b=arguments.length>=3?arguments[2]:"\n",c=arguments.length>=4&&arguments[3],i,j,l,s,r;if(str+="",m<1)return str;for(i=-1,l=(r=str.split("\n")).length;++i<l;r[i]+=s)for(s=r[i],r[i]="";s.length>m;r[i]+=s.slice(0,j)+((s=s.slice(j)).length?b:""))j=2==c||(j=s.slice(0,m+1).match(/\S*(\s)?$/))[1]?m:j.input.length-j[0].length||1==c&&m||j.input.length+(j=s.slice(m).match(/^\S*/)).input.length;return r.join("\n")}function strtotime(e,t){function a(e,t,a){var n,r=c[t];void 0!==r&&(0===(n=r-w.getDay())?n=7*a:n>0&&"last"===e?n-=7:0>n&&"next"===e&&(n+=7),w.setDate(w.getDate()+n))}function n(e){var t=e.split(" "),n=t[0],r=t[1].substring(0,3),s=/\d+/.test(n),u,i=("last"===n?-1:1)*("ago"===t[2]?-1:1);if(s&&(i*=parseInt(n,10)),o.hasOwnProperty(r)&&!t[1].match(/^mon(day|\.)?$/i))return w["set"+o[r]](w["get"+o[r]]()+i);if("wee"===r)return w.setDate(w.getDate()+7*i);if("next"===n||"last"===n)a(n,r,i);else if(!s)return!1;return!0}var r,s,u,i,w,c,o,d,D,f,g,l=!1;if(!e)return l;if((s=(e=e.replace(/^\s+|\s+$/g,"").replace(/\s{2,}/g," ").replace(/[\t\r\n]/g,"").toLowerCase()).match(/^(\d{1,4})([\-\.\/\:])(\d{1,2})([\-\.\/\:])(\d{1,4})(?:\s(\d{1,2}):(\d{2})?:?(\d{2})?)?(?:\s([A-Z]+)?)?$/))&&s[2]===s[4])if(s[1]>1901)switch(s[2]){case"-":return s[3]>12||s[5]>31?l:new Date(s[1],parseInt(s[3],10)-1,s[5],s[6]||0,s[7]||0,s[8]||0,s[9]||0)/1e3;case".":return l;case"/":return s[3]>12||s[5]>31?l:new Date(s[1],parseInt(s[3],10)-1,s[5],s[6]||0,s[7]||0,s[8]||0,s[9]||0)/1e3}else if(s[5]>1901)switch(s[2]){case"-":case".":return s[3]>12||s[1]>31?l:new Date(s[5],parseInt(s[3],10)-1,s[1],s[6]||0,s[7]||0,s[8]||0,s[9]||0)/1e3;case"/":return s[1]>12||s[3]>31?l:new Date(s[5],parseInt(s[1],10)-1,s[3],s[6]||0,s[7]||0,s[8]||0,s[9]||0)/1e3}else switch(s[2]){case"-":return s[3]>12||s[5]>31||s[1]<70&&s[1]>38?l:(i=s[1]>=0&&s[1]<=38?+s[1]+2e3:s[1],new Date(i,parseInt(s[3],10)-1,s[5],s[6]||0,s[7]||0,s[8]||0,s[9]||0)/1e3);case".":return s[5]>=70?s[3]>12||s[1]>31?l:new Date(s[5],parseInt(s[3],10)-1,s[1],s[6]||0,s[7]||0,s[8]||0,s[9]||0)/1e3:s[5]<60&&!s[6]?s[1]>23||s[3]>59?l:(u=new Date,new Date(u.getFullYear(),u.getMonth(),u.getDate(),s[1]||0,s[3]||0,s[5]||0,s[9]||0)/1e3):l;case"/":return s[1]>12||s[3]>31||s[5]<70&&s[5]>38?l:(i=s[5]>=0&&s[5]<=38?+s[5]+2e3:s[5],new Date(i,parseInt(s[1],10)-1,s[3],s[6]||0,s[7]||0,s[8]||0,s[9]||0)/1e3);case":":return s[1]>23||s[3]>59||s[5]>59?l:(u=new Date,new Date(u.getFullYear(),u.getMonth(),u.getDate(),s[1]||0,s[3]||0,s[5]||0)/1e3)}if("now"===e)return null===t||isNaN(t)?(new Date).getTime()/1e3|0:0|t;if(!isNaN(r=Date.parse(e)))return r/1e3|0;if(w=t?new Date(1e3*t):new Date,c={sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6},o={yea:"FullYear",mon:"Month",day:"Date",hou:"Hours",min:"Minutes",sec:"Seconds"},f="([+-]?\\d+\\s"+(D="(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec|sunday|sun\\.?|monday|mon\\.?|tuesday|tue\\.?|wednesday|wed\\.?|thursday|thu\\.?|friday|fri\\.?|saturday|sat\\.?)")+"|(last|next)\\s"+D+")(\\sago)?",!(s=e.match(new RegExp(f,"gi"))))return l;for(g=0,d=s.length;d>g;g++)if(!n(s[g]))return l;return w.getTime()/1e3}
;
/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

;

/**
 * jQuery 2.0+  REQUIRED
 * ==============================================
 * iOS9 'click', 'mousedown' and 'mouseup' fix
 * ---------------------------------------------
 * Include this script in your poject to fix 'click', 'mousedown' and 'mouseup' event
 * handling for $(window), $(document), $('body') and $('html'). By default iOS9 Safari is
 * suppressing those events in some situations and without some magic they can't be rely on.
 * This fix is blocking native event handlers from firing
 * (in some rare cases event will reach it's destination)
 * and it handles native event handlers basing on 'touchstart' and 'touchend' event.
 * ---------------------------------------------
 * Use at your own risk
 */

 $(document).ready(function(){

    /** Device is not iOS. There's no need to hack the planet. */
    if( typeof navigator.userAgent == 'undefined' || ! navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ){
      return;
    }
  
    var EVENT_NAMESPACE = 'IOS9FIX';
    var MAX_DOM_DEPTH = 100;
  
    /**
     * Suppress event for $object.
     * @param $object
     * @param eventType
     */
    var blockEventFor = function($object, eventType) {
      var eventQueue, eventRepo = new Array();
  
      if($._data($object.get(0),"events") !== undefined){
        eventQueue = $._data($object.get(0),"events")[eventType];
      }
  
      if(eventQueue !== undefined) {
        for(var i = 0; i < eventQueue.length; i++) {
          eventRepo.push({
            handler: eventQueue[i].handler,
            selector: eventQueue[i].selector,
            namespace: eventQueue[i].namespace
          });
        }
  
        $object.off(eventType);
      }
  
      $object.on(eventType + '.' + EVENT_NAMESPACE, '*', function(event){
        event.stopImmediatePropagation();
      });
  
      for(var i = 0; i < eventRepo.length; i++) {
  
        var _eventType = eventRepo[i].namespace
            ? eventType + '.' + eventRepo[i].namespace
            : eventType;
  
        $object.on(_eventType, eventRepo[i].selector, eventRepo[i].handler);
      }
    };
  
    /**
     * EXECUTE MOCKED-EVENT HANDLERS
     * @param object $object
     * @param string mockedEventType
     * @param object originalEvent
     */
    var executeMockedEventHandlers = function($object, mockedEventType, originalEvent){
      /** Let's say touch is mouse left button (by default touch event has .which === 0) */
      originalEvent.which = 1;
  
      var mockedEventQueue, $target = $(originalEvent.target);
  
      if($._data($object.get(0), "events") !== undefined){
        mockedEventQueue = $._data($object.get(0), "events")[mockedEventType];
      }
  
      /** No event-handlers for event of such type */
      if(mockedEventQueue === undefined){
        return false;
      }
  
      /** Traverse DOM from 'target' to 'base' and execute mockedEventHandlers for all matched elements */
      for(var preventEndlessLoop = 0; preventEndlessLoop < MAX_DOM_DEPTH; preventEndlessLoop++){
  
        /** END THE LOOP */
        if($target.length == 0){
          break;
        }
  
        /** EXECUTE MOCKED EVENT HANDLERS */
        for(var i = 0; i < mockedEventQueue.length; i++){
  
          // Skip eventHandler used to block originalEvent for mockedEvent
          if(mockedEventQueue[i].namespace === EVENT_NAMESPACE){
            continue;
          }
  
          if(mockedEventQueue[i].selector === undefined){
            // Skip $object level eventHandlers until current DOM level is $object level
            if( ! $target.is($object[0])) {
              continue;
            }
          } else {
            // Skip eventHandlers not meant for current DOM level
            if( ! $target.is(mockedEventQueue[i].selector)){
              continue;
            }
          }
  
          // Execute handler for current DOM level
          if(mockedEventQueue[i].handler.call($target[0], originalEvent) === false){
            originalEvent.stopImmediatePropagation();
          }
  
          // Check for stopImmediatePropagation() */
          if(originalEvent.isImmediatePropagationStopped()){
            break;
          }
        }
  
        if(originalEvent.isPropagationStopped()){
          break;
        }
  
        /** Go to parent level */
        $target = $target.parent();
      }
    };
  
  
  
    /*****************************
     *      INITIALIZATION
     ****************************/
  
    /**
     * Go through objects and suppress all selected events.
     */
    $.each([$(document), $(window), $('body'), $('html')], function(objectIndex, $object){
      $.each(['mousedown', 'click',  'mouseup'], function(eventIndex, eventType){
        blockEventFor($object, eventType);
      });
    });
  
  
    /**
     * MOCK MOUSEDOWN EVENT
     */
  
    /**
     * Init MouseDown-Mock for Dom $object
     * @param $object
     */
    var initMouseDownMock = function($object) {
      $object.on('touchstart', function (event) {
        executeMockedEventHandlers($object, 'mousedown', event);
      });
    };
  
    /**
     * Init MouseDown-Mock for objects...
     */
    $.each([$(document), $(window), $('body'), $('html')], function(objectIndex, $object){
      initMouseDownMock($object);
    });
  
  
    /**
     * MOCK MOUSEUP EVENT
     */
  
    /**
     * Init MouseUp-Mock for Dom $object
     * @param $object
     */
    var initMouseUpMock = function($object) {
      $object.on('touchend', function (event) {
        executeMockedEventHandlers($object, 'mouseup', event);
      });
    };
  
    /**
     * Init MouseUp-Mock for objects...
     */
    $.each([$(document), $(window), $('body'), $('html')], function(objectIndex, $object){
      initMouseUpMock($object);
    });
  
  
    /**
     * MOCK CLICK EVENT
     */
  
    /**
     * Init Click-Mock for Dom $object
     * @param $object
     */
    var initClickMock = function($object) {
      var clickCancelationTimer, isClick, cursorX, cursorY, target;
  
      $object.on('touchstart', function(event){
        isClick = true;
  
        cursorX = event.originalEvent.touches[0].pageX;
        cursorY = event.originalEvent.touches[0].pageY;
        target = event.target;
  
        /** Click Timeout */
        clickCancelationTimer = setTimeout(function(){
          isClick = false;
        }, 300);
      });
  
      /** moved more than 10 px away from starting position */
      $object.on('touchmove', function(event){
        if(Math.abs(cursorX - event.originalEvent.touches[0].pageX) > 10 || Math.abs(cursorY - event.originalEvent.touches[0].pageY) > 10){
          isClick = false;
        }
      });
  
      $object.on('touchend', function(event){
        clearTimeout(clickCancelationTimer);
  
        if(isClick){
          executeMockedEventHandlers($object, 'click', event);
        }
      });
    };
  
    /**
     * Init Click-Mock for objects...
     */
    $.each([$(document), $(window), $('body'), $('html')], function(objectIndex, $object){
      initClickMock($object);
    });
  
  
  });
;
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):function(){var n=t.Ractive,i=e();t.Ractive=i,i.noConflict=function(){return t.Ractive=n,i}}()}(this,function(){"use strict";function t(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function e(e){for(var n=[],i=arguments.length-1;i-->0;)n[i]=arguments[i+1];for(var r=0;r<n.length;r++){var s=n[r];for(var a in s)a in e||!t(s,a)||(e[a]=s[a])}return e}function n(e){void 0===e&&(e={});var n=[];for(var i in e)t(e,i)&&n.push([i,e[i]]);return n}function i(t,e){return null===t&&null===e?!0:u(t)||u(e)?!1:t===e}function r(t){return!isNaN(parseFloat(t))&&isFinite(t)}function s(t){return t&&"[object Object]"===Ga.call(t)}function a(t){return!(!t||!u(t)&&!h(t)||o(t))}function o(t){return t instanceof Date}function u(t){return"object"==typeof t}function h(t){return"function"==typeof t}function l(t){return"string"==typeof t}function c(t){return"number"==typeof t}function f(t){return void 0===t}function d(){}function p(t,e){return t.replace(/%s/g,function(){return e.shift()})}function m(t){for(var e=[],n=arguments.length-1;n-->0;)e[n]=arguments[n+1];throw t=p(t,e),new Error(t)}function v(){za.DEBUG&&po.apply(null,arguments)}function g(t){for(var e=[],n=arguments.length-1;n-->0;)e[n]=arguments[n+1];t=p(t,e),mo(t,e)}function y(t){for(var e=[],n=arguments.length-1;n-->0;)e[n]=arguments[n+1];t=p(t,e),bo[t]||(bo[t]=!0,mo(t,e))}function b(){za.DEBUG&&g.apply(null,arguments)}function w(){za.DEBUG&&y.apply(null,arguments)}function x(t,e,n){var i=k(t,e,n);return i?i[t][n]:null}function k(t,e,n){for(;e;){if(n in e[t])return e;if(e.isolated)return null;e=e.parent}}function _(t,e,n,i){if(t===e)return null;if(i){var r=x("interpolators",n,i);if(r)return r(t,e)||null;m(Eo(i,"interpolator"))}return So.number(t,e)||So.array(t,e)||So.object(t,e)||null}function E(t){return l(t)?t.replace(Oo,"\\$&"):t}function S(t){return t?t.replace(Ao,".$1"):""}function A(t){var e,n=[];for(t=S(t);e=Co.exec(t);){var i=e.index+e[1].length;n.push(t.substr(0,i)),t=t.substr(i+1)}return n.push(t),n}function C(t){return l(t)?t.replace(No,"$1$2"):t}function O(t,e){var n=t.indexOf(e);-1===n&&t.push(e)}function N(t,e){for(var n=0,i=t.length;i>n;n++)if(t[n]==e)return!0;return!1}function j(t,e){var n;if(!Qa(t)||!Qa(e))return!1;if(t.length!==e.length)return!1;for(n=t.length;n--;)if(t[n]!==e[n])return!1;return!0}function T(t){return l(t)?[t]:f(t)?[]:t}function V(t){return t[t.length-1]}function P(t,e){if(t){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}}function M(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];for(var n=t.concat.apply([],t),i=n.length;i--;){var r=n.indexOf(n[i]);~r&&i>r&&n.splice(i,1)}return n}function I(t){for(var e=[],n=t.length;n--;)e[n]=t[n];return e}function R(t,e){for(var n=t.length,i=0;n>i;i++){var r=e(t[i]);if(r)return r}}function B(t,e,n){var i=t,r=e;n&&(i=i.map(n),r=r.map(n));var s=i.length,a={},o=0,u=i.map(function(t){var e,n=o;do{if(e=r.indexOf(t,n),-1===e)return-1;n=e+1}while(a[e]===!0&&s>n);return e===o&&(o+=1),a[e]=!0,e}),h=u.oldLen=i.length;if(u.newLen=r.length,h===u.newLen){var l=0;for(l;h>l&&u[l]===l;l++);l===h&&(u.same=!0)}return u}function K(t,e){if(!/this/.test(t.toString()))return t;var n=jo.call(t,e);for(var i in t)n[i]=t[i];return n}function L(t,e,n){return n&&h(e)&&t.parent&&t.parent.isRoot?(t.boundValue||(t.boundValue=K(e._r_unbound||e,t.parent.ractive)),t.boundValue):e}function D(t){t.updateFromBindings(!0)}function F(t){for(var e=t.length;e--;)if(t[e].bound){var n=t[e].owner;if(n){var i="checked"===n.name?n.node.checked:n.node.value;return{value:i}}}}function z(t){if(t){var e=To[t];To[t]=[];for(var n=e.length;n--;)e[n]();var i=Vo[t];for(Vo[t]=[],n=i.length;n--;)i[n].model.register(i[n].item)}else z("early"),z("mark")}function U(t,e,n,i){t.shuffling=!0;for(var r=t.source().length!==t.source().value.length,s=e.length;s--;){var a=e[s];s!==a&&(r=!0,s in t.childByKey&&t.childByKey[s].rebind(~a?t.joinKey(a):void 0,t.childByKey[s],!i))}for(t.links.forEach(function(t){return t.shuffle(e)}),n||z("early"),s=t.deps.length;s--;)t.deps[s].shuffle&&t.deps[s].shuffle(e);t[n?"marked":"mark"](),n||z("mark"),r&&t.notifyUpstream(),t.shuffling=!1}function $(t,e){e!==t.dataModel&&(e&&e.viewmodel&&e.viewmodel.isRoot&&t.childByKey.data?(t.childByKey.data.link(e.viewmodel,"data"),t.dataModel=e):t.dataModel&&(t.childByKey.data.unlink(),t.dataModel=!0))}function q(){Bo.push(Ro=[])}function H(){var t=Bo.pop();return Ro=Bo[Bo.length-1],t}function Z(t){Ro&&O(Ro,t)}function W(t){t.bind()}function G(t){t.cancel()}function Q(t){t.destroyed()}function Y(t){t.handleChange()}function J(t){t.mark()}function X(t){t.mark(!0)}function tt(t){t.marked()}function et(t){t.markedAll()}function nt(t){t.render()}function it(t){t.shuffled()}function rt(t){t.teardown()}function st(t){t.unbind()}function at(t){t.unrender()}function ot(t){t.update()}function ut(t){return t.toString()}function ht(t){return t.toString(!0)}function lt(t,e,n,i){var r=t.r||t;if(!r||!l(r))return e;if("."===r||"@"===r[0]||(e||n).isKey||(e||n).isKeypath)return e;var s=r.split("/"),a=A(s[s.length-1]),o=a[a.length-1],u=e||n;u&&1===a.length&&o!==u.key&&i&&(a=ct(o,i)||a);for(var h=a.length,c=!0,f=!1;u&&h--;)u.shuffling&&(f=!0),a[h]!=u.key&&(c=!1),u=u.parent;return!e&&c&&f?n:e&&!c&&f?n:e}function ct(t,e){for(;e;){var n=e.aliases;if(n&&n[t]){for(var i=(e.owner.iterations?e.owner:e).owner.template.z,r=0;r<i.length;r++)if(i[r].n===t){var s=i[r].x;if(!s.r)return!1;var a=s.r.split("/");return A(a[a.length-1])}return}e=e.componentParent||e.parent}}function ft(t,e){void 0===e&&(e=0);for(var n=new Array(e);e--;)n[e]="_"+e;return new Function([],"return function ("+n.join(",")+"){return("+t+");};")()}function dt(t,e){return Do[t]?Do[t]:Do[t]=Ke(t,e)}function pt(t){if(t){var e=t.e;e&&Wa(e).forEach(function(t){Do[t]||(Do[t]=e[t])})}}function mt(t){if(!t.matchString("="))return null;var e=t.pos;t.sp();var n=t.matchPattern(Fu);if(!n)return t.pos=e,null;if(!t.matchPattern(zu))return null;var i=t.matchPattern(Fu);return i?(t.sp(),t.matchString("=")?[n,i]:(t.pos=e,null)):(t.pos=e,null)}function vt(t){var e;return(e=t.matchPattern(Uu))?{t:vu,v:e}:null}function gt(t){return t.replace($u,"\\$&")}function yt(t,e){return t.search(qu[e.join()]||(qu[e.join()]=new RegExp(e.map(gt).join("|"))))}function bt(t){return t.replace(Qu,function(t,e){var n;return n="#"!==e[0]?Wu[e]:"x"===e[1]?parseInt(e.substring(2),16):parseInt(e.substring(1),10),n?Ju(xt(n)):t})}function wt(t){return t.replace(eh,"&amp;").replace(Xu,"&lt;").replace(th,"&gt;")}function xt(t){return t?10===t?32:128>t?t:159>=t?Gu[t-128]:55296>t?t:57343>=t?nh:65535>=t?t:Yu?t>=65536&&131071>=t?t:t>=131072&&196607>=t?t:nh:nh:nh}function kt(t){var e;return(e=t.matchPattern(sh))?{t:cu,v:e}:null}function _t(t){var e=t.remaining();return"true"===e.substr(0,4)?(t.pos+=4,{t:mu,v:"true"}):"false"===e.substr(0,5)?(t.pos+=5,{t:mu,v:"false"}):null}function Et(t){return function(e){for(var n,i='"',r=!1;!r;)n=e.matchPattern(ah)||e.matchPattern(oh)||e.matchString(t),n?i+='"'===n?'\\"':"\\'"===n?"'":n:(n=e.matchPattern(uh),n?i+="\\u"+("000"+n.charCodeAt(1).toString(16)).slice(-4):r=!0);return i+='"',JSON.parse(i)}}function St(t){var e=t.pos,n=t.matchString("'")||t.matchString('"');if(n){var i=("'"===n?hh:lh)(t);return t.matchString(n)?{t:fu,v:i}:(t.pos=e,null)}return null}function At(t){return JSON.parse('"'+t.replace(fh,Ct)+'"')}function Ct(t){switch(t){case"\n":return"\\n";case"\r":return"\\r";case"	":return"\\t";case"\b":return"\\b";case"\f":return"\\f"}}function Ot(t){if(!t.matchString("`"))return null;for(var e,n="",i=!1,r=[];!i;)if(e=t.matchPattern(ch)||t.matchPattern(oh)||t.matchString("$")||t.matchString('"'))if('"'===e)n+='\\"';else if("\\`"===e)n+="`";else if("$"===e)if(t.matchString("{")){r.push({t:fu,v:At(n)}),n="",t.sp();var s=Ft(t);s||t.error("Expected valid expression"),r.push({t:_u,x:s}),t.sp(),t.matchString("}")||t.error("Expected closing '}' after interpolated expression")}else n+="$";else n+=e;else e=t.matchPattern(uh),e?n+="\\u"+("000"+e.charCodeAt(1).toString(16)).slice(-4):i=!0;if(n.length&&r.push({t:fu,v:At(n)}),t.matchString("`")||t.error("Expected closing '`'"),r.length){if(1===r.length)return r[0];for(var a,o=r.pop();a=r.pop();)o={t:Su,s:"+",o:[a,o]};return{t:_u,x:o}}return{t:fu,v:""}}function Nt(t){var e;return(e=St(t))?gh.test(e.v)?e.v:'"'+e.v.replace(/"/g,'\\"')+'"':(e=kt(t))?e.v:(e=t.matchPattern(dh))?e:null}function jt(t){var e,n=t.pos;t.sp();var i="'"!==t.nextChar()&&'"'!==t.nextChar();i&&(e=t.matchPattern(ph));var r=e?Ft(t):Nt(t);if(null===r)return t.pos=n,null;if(t.sp(),i&&(","===t.nextChar()||"}"===t.nextChar())){e||dh.test(r)||t.error("Expected a valid reference, but found '"+r+"' instead.");var s={t:yu,k:r,v:{t:bu,n:r}};return e&&(s.p=!0),s}if(!t.matchString(":"))return t.pos=n,null;t.sp();var a=Ft(t);return null===a?(t.pos=n,null):{t:yu,k:r,v:a}}function Tt(t){var e=t.pos,n=jt(t);if(null===n)return null;var i=[n];if(t.matchString(",")){var r=Tt(t);return r?i.concat(r):(t.pos=e,null)}return i}function Vt(t){var e=t.pos;if(t.sp(),!t.matchString("{"))return t.pos=e,null;var n=Tt(t);return t.sp(),t.matchString("}")?{t:pu,m:n}:(t.pos=e,null)}function Pt(t){var e=t.pos;if(t.sp(),!t.matchString("["))return t.pos=e,null;var n=zt(t,!0);return t.matchString("]")?{t:du,m:n}:(t.pos=e,null)}function Mt(t){return kt(t)||_t(t)||St(t)||Ot(t)||Vt(t)||Pt(t)||vt(t)}function It(t){var e,n,i,r,s,a=t.pos;e=t.matchPattern(wh)||"",n=!e&&t.relaxedNames&&t.matchPattern(vh)||t.matchPattern(mh);var o=e.length+(n&&n.length||0);if("@."===e&&(e="@",n=n?"this."+n:"this"),!n&&e&&(n=e,e=""),!n)return null;if("@"===e)if(xh.test(n))if(n.indexOf("event")&&n.indexOf("node")||t.inEvent){if(!n.indexOf("context"))return t.pos=t.pos-(n.length-7),{t:_u,x:{t:bu,n:"@context"}}}else t.error("@event and @node are only valid references within an event directive");else t.error("Unrecognized special reference @"+n);if(!e&&!t.relaxedNames&&bh.test(n))return t.pos=a,null;if(!e&&yh.test(n))return i=yh.exec(n)[0],t.pos=a+i.length,{t:gu,v:i};if(r=(e||"")+S(n),t.matchString("("))if(s=r.lastIndexOf("."),-1!==s&&"]"!==n[n.length-1])if(0===s)r=".",t.pos=a;else{var u=r.length;r=r.substr(0,s),t.pos=a+(o-(u-s))}else t.pos-=1;return{t:bu,n:r.replace(/^this\./,"./").replace(/^this$/,".")}}function Rt(t){if(!t.matchString("("))return null;t.sp();var e=Ft(t);return e||t.error(ih),t.sp(),t.matchString(")")||t.error(rh),{t:_u,x:e}}function Bt(t){return Mt(t)||It(t)||Rt(t)}function Kt(t){if(t.strictRefinement||t.sp(),t.matchString(".")){t.sp();var e=t.matchPattern(dh);if(e)return{t:wu,n:e};t.error("Expected a property name")}if(t.matchString("[")){t.sp();var n=Ft(t);return n||t.error(ih),t.sp(),t.matchString("]")||t.error("Expected ']'"),{t:wu,x:n}}return null}function Lt(t){var e=Bt(t);if(!e)return null;for(;e;){var n=Kt(t);if(n)e={t:xu,x:e,r:n};else{if(!t.matchString("("))break;t.sp();var i=zt(t,!0);t.sp(),t.matchString(")")||t.error(rh),e={t:Au,x:e},i&&(e.o=i)}}return e}function Dt(t){var e=Ah(t);if(!e)return null;var n=t.pos;if(t.sp(),!t.matchString("?"))return t.pos=n,e;t.sp();var i=Ft(t);i||t.error(ih),t.sp(),t.matchString(":")||t.error('Expected ":"'),t.sp();var r=Ft(t);return r||t.error(ih),{t:Eu,o:[e,i,r]}}function Ft(t){if(t.allowExpressions===!1){var e=It(t);return t.sp(),e}return Dt(t)}function zt(t,e){var n,i=[],r=t.pos;do{t.sp(),e&&(n=t.matchPattern(ph));var s=Ft(t);if(null===s&&i.length)t.error(ih);else if(null===s)return t.pos=r,null;n&&(s.p=!0),i.push(s),t.sp()}while(t.matchString(","));return i}function Ut(t,e){var n=t.pos,i=Ft(t);if(!i){var r=t.matchPattern(/^(\w+)/);return r?{t:bu,n:r}:null}for(var s=0;s<e.length;s+=1)if(t.remaining().substr(0,e[s].length)===e[s])return i;return t.pos=n,It(t)}function $t(t){function e(t){for(var e=[],n=a-1;n>=0;n--)e.push("x$"+n);return e.length?"(function(){var "+e.join(",")+";return("+t+");})()":t}function n(t){if(l(t))return t;switch(t.t){case mu:case gu:case cu:case vu:return t.v;case fu:return JSON.stringify(String(t.v));case du:return t.m&&qt(t.m)?"[].concat("+r(t.m,"[","]",n)+")":"["+(t.m?t.m.map(n).join(","):"")+"]";case pu:return t.m&&qt(t.m)?"Object.assign({},"+r(t.m,"{","}",i)+")":"{"+(t.m?t.m.map(function(t){return t.k+":"+n(t.v)}).join(","):"")+"}";case ku:return("typeof"===t.s?"typeof ":t.s)+n(t.o);case Su:return n(t.o[0])+("in"===t.s.substr(0,2)?" "+t.s+" ":t.s)+n(t.o[1]);case Au:if(t.o&&qt(t.o)){var e=a++;return"(x$"+e+"="+n(t.x)+").apply(x$"+e+","+n({t:du,m:t.o})+")"}return n(t.x)+"("+(t.o?t.o.map(n).join(","):"")+")";case _u:return"("+n(t.x)+")";case xu:return n(t.x)+n(t.r);case wu:return t.n?"."+t.n:"["+n(t.x)+"]";case Eu:return n(t.o[0])+"?"+n(t.o[1])+":"+n(t.o[2]);case bu:return"_"+s.indexOf(t.n);default:throw new Error("Expected legal JavaScript")}}function i(t){return t.p?n(t.k):t.k+":"+n(t.v)}function r(t,e,n,i){var r=t.reduce(function(t,r){return r.p?t.str+=""+(t.open?n+",":t.str.length?",":"")+i(r):t.str+=""+(t.str.length?t.open?",":","+e:e)+i(r),t.open=!r.p,t},{open:!1,str:""});return r.open&&(r.str+=n),r.str}var s,a=0;Ht(t,s=[]);var o=n(t);return{r:s,s:e(o)}}function qt(t){for(var e=0;e<t.length;e++)if(t[e].p)return!0;return!1}function Ht(t,e){t.t===bu&&l(t.n)&&(~e.indexOf(t.n)||e.unshift(t.n));var n=t.o||t.m;if(n)if(s(n))Ht(n,e);else for(var i=n.length;i--;)Ht(n[i],e);t.k&&t.t===yu&&!l(t.k)&&Ht(t.k,e),t.x&&Ht(t.x,e),t.r&&Ht(t.r,e),t.v&&Ht(t.v,e)}function Zt(t,e){var n;if(t){for(;t.t===_u&&t.x;)t=t.x;if(t.t===bu){var i=t.n;~i.indexOf("@context")?e.x=$t(t):e.r=t.n}else(n=Wt(t))?e.rx=n:e.x=$t(t);return e}}function Wt(t){for(var e,n=[];t.t===xu&&t.r.t===wu;)e=t.r,e.x?e.x.t===bu?n.unshift(e.x):n.unshift($t(e.x)):n.unshift(e.n),t=t.x;return t.t!==bu?null:{r:t.n,m:n}}function Gt(t){for(var e=[],n=0,i=0;i<t.length;i++)"-"===t[i]&&"\\"!==t[i-1]&&(e.push(t.substring(n,i).replace(Kh,"")),n=i+1);return e.push(t.substring(n).replace(Kh,"")),e}function Qt(t){var e,n,i,r;if(t.sp(),e=t.matchPattern(Ch),!e)return null;for(i=e.length,n=0;n<t.tags.length;n++)~(r=e.indexOf(t.tags[n].open))&&i>r&&(i=r);return i<e.length&&(t.pos-=e.length-i,e=e.substr(0,i),!e)?null:{n:e}}function Yt(t){var e=t.pos;if(/[=\/>\s]/.test(t.nextChar())||t.error("Expected `=`, `/`, `>` or whitespace"),t.sp(),!t.matchString("="))return t.pos=e,null;t.sp();var n=t.pos,i=t.sectionDepth,r=te(t,"'")||te(t,'"')||Xt(t);return null===r&&t.error("Expected valid attribute value"),t.sectionDepth!==i&&(t.pos=n,t.error("An attribute value must contain as many opening section tags as closing section tags")),r.length?1===r.length&&l(r[0])?bt(r[0]):r:""}function Jt(t){var e,n,i=t.pos;if(e=t.matchPattern(Ih),!e)return null;var r=e,s=t.tags.map(function(t){return t.open});return-1!==(n=yt(r,s))&&(e=e.substr(0,n),t.pos=i+e.length),e}function Xt(t){t.inAttribute=!0;for(var e=[],n=se(t)||Jt(t);n;)e.push(n),n=se(t)||Jt(t);return e.length?(t.inAttribute=!1,e):null}function te(t,e){var n=t.pos;if(!t.matchString(e))return null;t.inAttribute=e;for(var i=[],r=se(t)||ee(t,e);null!==r;)i.push(r),r=se(t)||ee(t,e);return t.matchString(e)?(t.inAttribute=!1,i):(t.pos=n,null)}function ee(t,e){var n=t.remaining(),i=t.tags.map(function(t){return t.open});i.push(e);var r=yt(n,i);return-1===r&&t.error("Quoted attribute value must have a closing quote"),r?(t.pos+=r,n.substr(0,r)):null}function ne(t){var e,n,i=Qt(t,!1);if(!i)return null;if(n=Mh[i.n])i.t=n.t,n.v&&(i.v=n.v),delete i.n,t.sp(),"="===t.nextChar()&&(i.f=Yt(t));else if(e=Th.exec(i.n))i.n=e[1],i.t=Bu,re(t,i);else if(e=Vh.exec(i.n))i.n=e[1],i.t=Ku,re(t,i),i.v="in-out"===e[2]?"t0":"in"===e[2]?"t1":"t2";else if(e=Nh.exec(i.n))i.n=Gt(e[1]),i.t=Ru,t.matchString("(")&&(i.a=$t({t:du,m:zt(t)}),t.matchString(")")||t.error("Expected closing ')'")),t.inEvent=!0,ie(t,i)?jh.test(i.f)&&(t.pos-=i.f.length,t.error("Cannot use reserved event names (change, reset, teardown, update, construct, config, init, render, unrender, complete, detach, insert, destruct, attachchild, detachchild)")):re(t,i,!0),t.inEvent=!1;else if(e=Ph.exec(i.n)){var r="bind"===e[2];i.n=r?e[3]:e[1],i.t=iu,re(t,i,!1,!0),!i.f&&r&&(i.f=[{t:Zo,r:e[3]}])}else{t.sp();var s="="===t.nextChar()?Yt(t):null;if(i.f=null!=s?s:i.f,t.sanitizeEventAttributes&&Oh.test(i.n))return{exclude:!0};i.f=i.f||(""===i.f?"":0),i.t=iu}return i}function ie(t,e){var n=t.pos;t.matchString("=")||t.error("Missing required directive arguments");var i=t.matchString("'")||t.matchString('"');t.sp();var r=t.matchPattern(Rh);if(void 0!==r)if(i){if(t.sp(),t.matchString(i))return(e.f=r)||!0;t.pos=n}else{if(t.matchPattern(Bh))return(e.f=r)||!0;t.pos=n}else t.pos=n}function re(t,e,n,i){if(void 0===n&&(n=!1),void 0===i&&(i=!1),t.sp(),!t.matchString("="))return void(n&&t.error("Missing required directive arguments"));t.sp();var r=t.matchString('"')||t.matchString("'"),s=t.spreadArgs;t.spreadArgs=!0,t.inUnquotedAttribute=!r;var a=i?Ut(t,[r||" ","/",">"]):{m:zt(t),t:du};if(t.inUnquotedAttribute=!1,t.spreadArgs=s,r&&(t.sp(),t.matchString(r)!==r&&t.error("Expected matching quote '"+r+"'")),i){var o={t:Zo};Zt(a,o),e.f=[o]}else e.f=$t(a)}function se(t){var e,n;if(t.interpolate[t.inside]===!1)return null;for(n=0;n<t.tags.length;n+=1)if(e=ae(t,t.tags[n]))return e;return t.inTag&&!t.inAttribute&&(e=ne(t))?(t.sp(),e):void 0}function ae(t,e){var n,i,r,s=t.pos;if(t.matchString("\\"+e.open)){if(0===s||"\\"!==t.str[s-1])return e.open}else if(!t.matchString(e.open))return null;if(n=mt(t))return t.matchString(e.close)?(e.open=n[0],e.close=n[1],t.sortMustacheTags(),Lh):null;if(t.sp(),t.matchString("/")){t.pos-=1;var a=t.pos;if(vt(t))t.pos=a;else{if(t.pos=a-e.close.length,t.inAttribute)return t.pos=s,null;t.error("Attempted to close a section that wasn't open")}}for(r=0;r<e.readers.length;r+=1)if(i=e.readers[r],n=i(t,e))return e.isStatic&&(n.s=1),t.includeLinePositions&&(n.q=t.getLinePos(s)),n;return t.pos=s,null}function oe(t,e){var n=Ft(t);if(!n)return null;t.matchString(e.close)||t.error("Expected closing delimiter '"+e.close+"'");var i={t:Wo};return Zt(n,i),i}function ue(t,e){if(!t.matchString("&"))return null;t.sp();var n=Ft(t);if(!n)return null;t.matchString(e.close)||t.error("Expected closing delimiter '"+e.close+"'");var i={t:Wo};return Zt(n,i),i}function he(t){var e,n=[],i=t.pos;if(t.sp(),e=le(t)){for(e.x=Zt(e.x,{}),n.push(e),t.sp();t.matchString(",");)e=le(t),e||t.error("Expected another alias."),e.x=Zt(e.x,{}),n.push(e),t.sp();return n}return t.pos=i,null}function le(t){var e=t.pos;t.sp();var n=Ft(t,[]);if(!n)return t.pos=e,null;t.sp(),t.matchPattern(Fh),t.sp();var i=t.matchPattern(Dh);return i?{n:i,x:n}:(t.pos=e,null)}function ce(t,e){var n,i=t.matchString(">")||t.matchString("yield"),r={t:">"===i?Xo:au};if(!i)return null;if(t.sp(),">"===i||!(n=t.matchString("with"))){t.relaxedNames=t.strictRefinement=!0;var s=Ft(t);if(t.relaxedNames=t.strictRefinement=!1,!s&&">"===i)return null;s&&(Zt(s,r),t.sp(),">"!==i&&(n=t.matchString("with")))}if(t.sp(),n||">"===i){if(n=he(t),n&&n.length)r.z=n;else{var a=Ft(t);a&&(r.c={},Zt(a,r.c)),t.matchString(",")&&(n=he(t),n&&n.length&&(r.z=n))}">"===i||r.c||r.z||t.error("Expected a context or one or more aliases")}return t.sp(),t.matchString(e.close)||t.error("Expected closing delimiter '"+e.close+"'"),r}function fe(t,e){if(!t.matchString("!"))return null;var n=t.remaining().indexOf(e.close);return-1!==n?(t.pos+=n+e.close.length,{t:tu}):void 0}function de(t,e){var n,i,r=t.pos;try{n=Ut(t,[e.close])}catch(s){i=s}if(!n){if("!"===t.str.charAt(r))return t.pos=r,null;if(i)throw i}if(!t.matchString(e.close)&&(t.error("Expected closing delimiter '"+e.close+"' after reference"),!n)){if("!"===t.nextChar())return null;t.error("Expected expression or legal reference")}var a={t:Zo};return Zt(n,a),a}function pe(t,e){var n=t.pos;if(!t.matchString(e.open))return null;if(t.sp(),!t.matchString("/"))return t.pos=n,null;t.sp();var i=t.remaining(),r=i.indexOf(e.close);if(-1!==r){var s={t:Yo,r:i.substr(0,r).split(" ")[0]};return t.pos+=r,t.matchString(e.close)||t.error("Expected closing delimiter '"+e.close+"'"),s}return t.pos=n,null}function me(t,e,n){var i=t.pos;if(!t.matchString(e.open))return null;if(!t.matchPattern(zh[n]))return t.pos=i,null;var r={t:Uh[n]};if("elseif"===n)r.x=Ft(t);else if("catch"===n||"then"===n){var s=t.matchPattern(dh);s&&(r.n=s)}return t.matchString(e.close)||t.error("Expected closing delimiter '"+e.close+"'"),r}function ve(t,e){var n,i,r,s,a,o,u,h,l,c,f,d,p,m=!1,v=t.pos;if(t.matchString("^")){if(t.matchString("^/"))return t.pos=v,null;i={t:Go,f:[],n:Ou}}else{if(!t.matchString("#"))return null;i={t:Go,f:[]},t.matchString("partial")&&(t.pos=v-t.standardDelimiters[0].length,t.error("Partial definitions can only be at the top level of the template, or immediately inside components")),(o=t.matchString("await"))?(c=o,i.t=lu):(o=t.matchPattern(Zh))&&(c=o,i.n=$h[o])}if(t.sp(),"with"===o){var g=he(t);g&&(m=!0,i.z=g,i.t=hu)}else if("each"===o){var y=le(t);y&&(i.z=[{n:y.n,x:{r:"."}}],n=y.x)}if(!m){if(n||(n=Ft(t)),n||t.error("Expected expression"),"each"===o&&t.matchString(",")){var b=he(t);b&&(i.z&&b.unshift(i.z[0]),i.z=b)}if("each"!==o&&o||!(l=t.matchPattern(qh)))"await"===o&&t.matchString("then")&&(t.sp(),f=!0,p=t.matchPattern(dh),p||(p=!0));else{var w;(w=t.matchPattern(Hh))?i.i=l+","+w:i.i=l}!o&&n.n&&(c=n.n)}t.sp(),t.matchString("-")&&(i.w=1),t.matchString(e.close)||t.error("Expected closing delimiter '"+e.close+"'"),t.sectionDepth+=1,s=i.f;var x;do if(x=t.pos,r=pe(t,e))c&&r.r!==c&&(o?(t.pos=x,t.error("Expected "+e.open+"/"+c+e.close)):r.r&&t.warn("Expected "+e.open+"/"+c+e.close+" but found "+e.open+"/"+r.r+e.close)),t.sectionDepth-=1,h=!0;else if(!m&&((r=me(t,e,"elseif"))||(r=me(t,e,"else"))||"await"===o&&((r=me(t,e,"then"))||(r=me(t,e,"catch"))))){if(i.n===Ou&&t.error("{{else}} not allowed in {{#unless}}"),a&&(r.t===Vu?t.error("there can only be one {{else}} block, at the end of a section"):r.t===Pu&&t.error("illegal {{elseif...}} after {{else}}")),!u&&(p||!f)&&!d)if("await"===o){var k={f:s};i.f=[k],p?(k.t=Mu,p!==!0&&(k.n=p)):k.t=Go}else u=[];var _={t:Go,f:s=[]};r.t===Vu?("await"===o?(i.f.push(_),_.t=Vu):(_.n=Ou,u.push(_)),a=!0):r.t===Pu?(_.n=Cu,Zt(r.x,_),u.push(_)):r.t===Mu?(a&&t.error("{{then}} block must appear before any {{else}} block"),d&&t.error("{{then}} block must appear before any {{catch}} block"),f&&t.error("there can only be one {{then}} block per {{#await}}"),_.t=Mu,f=!0,r.n&&(_.n=r.n),i.f.push(_)):r.t===Iu&&(a&&t.error("{{catch}} block must appear before any {{else}} block"),d&&t.error("there can only be one {{catch}} block per {{#await}}"),_.t=Iu,d=!0,_.n=r.n,i.f.push(_))}else{if(r=t.read(gl),!r)break;s.push(r)}while(!h);if(u&&(i.l=u),m||Zt(n,i),"await"===o&&(p||!f)&&!d&&!a){var E={f:i.f};i.f=[E],p?(E.t=Mu,p!==!0&&(E.n=p)):E.t=Go}return i.f.length||delete i.f,i}function ge(t){var e=t.pos;if(t.textOnlyMode||!t.matchString(Wh))return null;var n=t.remaining(),i=n.indexOf(Gh);-1===i&&t.error("Illegal HTML - expected closing comment sequence ('-->')");var r=n.substr(0,i);t.pos+=i+3;var s={t:tu,c:r};return t.includeLinePositions&&(s.q=t.getLinePos(e)),s}function ye(t,e){var n,i,r,s,a;for(n=1;n<t.length;n+=1)i=t[n],r=t[n-1],s=t[n-2],l(i)&&be(r)&&l(s)&&Yh.test(s)&&Qh.test(i)&&(t[n-2]=s.replace(Yh,"\n"),t[n]=i.replace(Qh,"")),e||(we(i)&&l(r)&&Yh.test(r)&&l(i.f[0])&&Qh.test(i.f[0])&&(t[n-1]=r.replace(Yh,"\n"),i.f[0]=i.f[0].replace(Qh,"")),l(i)&&we(r)&&(a=V(r.f),l(a)&&Yh.test(a)&&Qh.test(i)&&(r.f[r.f.length-1]=a.replace(Yh,"\n"),t[n]=i.replace(Qh,""))));return t}function be(t){return t.t===tu||t.t===eu}function we(t){return(t.t===Go||t.t===Qo)&&t.f}function xe(t,e,n){var i;e&&(i=t[0],l(i)&&(i=i.replace(e,""),i?t[0]=i:t.shift())),n&&(i=V(t),l(i)&&(i=i.replace(n,""),i?t[t.length-1]=i:t.pop()))}function ke(t,e,n,i,r,s,a){if(!l(t)){var o,u,h,c,f,d,p;for(ye(t,a),o=t.length;o--;)u=t[o],u.exclude?t.splice(o,1):e&&u.t===tu&&t.splice(o,1);for(xe(t,i?Xh:null,r?tl:null),o=t.length;o--;){if(u=t[o],d=p=!1,u.w){var m=t[o-1],v=!0;if("string"==typeof m&&(t[o-1]=m.replace(il,"$1")),u.f){"string"==typeof u.f[0]&&(u.f[0]=u.f[0].replace(rl,""));var g=u.f.length-1;"string"==typeof u.f[g]&&(u.f[g]=u.f[g].replace(il,function(t,e){return v=e,e||""}))}var y=t[o+1];v&&"string"==typeof y&&(t[o+1]=y.replace(rl,""))}if(u.f){var b=u.t===Jo&&(s[u.e.toLowerCase()]||s[u.e]);f=n||b,!n&&b&&xe(u.f,el,nl),f||(h=t[o-1],c=t[o+1],(!h||l(h)&&tl.test(h))&&(d=!0),(!c||l(c)&&Xh.test(c))&&(p=!0)),ke(u.f,e,f,d,p,s)}u.l&&(u.w&&u.l.forEach(function(t){return t.w=1}),ke(u.l,e,n,d,p,s),u.l.forEach(function(t){return t.l=1}),u.l.unshift(o+1,0),t.splice.apply(t,u.l),delete u.l),u.m&&(ke(u.m,e,n,d,p,s),u.m.length<1&&delete u.m),delete u.w}for(o=t.length;o--;)l(t[o])&&(l(t[o+1])&&(t[o]=t[o]+t[o+1],t.splice(o+1,1)),n||(t[o]=t[o].replace(Jh," ")),""===t[o]&&t.splice(o,1))}}function _e(t){var e,n=t.pos;return t.matchString("</")?(e=t.matchPattern(sl))?t.inside&&e!==t.inside?(t.pos=n,null):{t:ru,e:e}:(t.pos-=2,void t.error("Illegal closing tag")):null}function Ee(t){return t.replace(/([A-Z])/g,function(t,e){return"-"+e.toLowerCase()})}function Se(t){var e,n,i,r,s,a,o,u,h,c,f,d=t.pos;if(t.inside||t.inAttribute||t.textOnlyMode)return null;if(!t.matchString("<"))return null;if("/"===t.nextChar())return null;var p={};if(t.includeLinePositions&&(p.q=t.getLinePos(d)),t.matchString("!"))return p.t=uu,t.matchPattern(/^doctype/i)||t.error("Expected DOCTYPE declaration"),p.a=t.matchPattern(/^(.+?)>/),p;if(f=t.matchString("#"))t.sp(),p.t=nu,p.n=t.matchPattern(ol);else if(p.t=Jo,p.e=t.matchPattern(al),!p.e)return null;for(ul.test(t.nextChar())||t.error("Illegal tag name"),t.sp(),t.inTag=!0;e=se(t);)e!==!1&&(p.m||(p.m=[]),p.m.push(e)),t.sp();if(t.inTag=!1,t.sp(),t.matchString("/")&&(n=!0),!t.matchString(">"))return null;var m=(p.e||p.n).toLowerCase(),v=t.preserveWhitespace;if(!n&&(f||!Zu[p.e.toLowerCase()])){f||(t.elementStack.push(m),m in t.interpolate&&(t.inside=m)),i=[],r=qa(null);do{if(u=t.pos,h=t.remaining(),!h){if("script"===t.inside){o=!0;break}t.error("Missing end "+(t.elementStack.length>1?"tags":"tag")+" ("+t.elementStack.reverse().map(function(t){return"</"+t+">"}).join("")+")")}if(f||Ae(m,h))if(!f&&(c=_e(t))){o=!0;var g=c.e.toLowerCase();if(g!==m&&(t.pos=u,!~t.elementStack.indexOf(g))){var y="Unexpected closing tag";Zu[g.toLowerCase()]&&(y+=" (<"+g+"> is a void element - it cannot contain children)"),t.error(y)}}else if(f&&Ce(t,p.n))o=!0;else{var b={open:t.standardDelimiters[0],close:t.standardDelimiters[1]};pe(t,b)||Oe(t,b)?(o=!0,t.pos=u):(a=t.read(yl))?(r[a.n]&&(t.pos=u,t.error("Duplicate partial definition")),ke(a.f,t.stripComments,v,!v,!v,t.whiteSpaceElements),r[a.n]=a.f,s=!0):(a=t.read(gl))?i.push(a):o=!0}else o=!0}while(!o);i.length&&(p.f=i),s&&(p.p=r),t.elementStack.pop()}if(t.inside=null,t.sanitizeElements&&-1!==t.sanitizeElements.indexOf(m))return ll;if(p.m&&"input"!==m&&"select"!==m&&"textarea"!==m&&"option"!==m){for(var w,x,k,_,E,S=p.m,A=0;A<S.length;)E=S[A],E.t===iu?0!==E.n.indexOf("class-")||E.f?0===E.n.indexOf("style-")&&l(E.f)?((x||(x=[])).push(Ee(E.n.slice(6))+": "+E.f+";"),S.splice(A,1)):"class"===E.n&&l(E.f)?((w||(w=[])).push(E.f),S.splice(A,1)):"style"===E.n&&l(E.f)?((x||(x=[])).push(E.f+(hl.test(E.f)?"":";")),S.splice(A,1)):"class"===E.n?(k=E,A++):"style"===E.n?(_=E,A++):!~E.n.indexOf(":")&&"value"!==E.n&&"contenteditable"!==E.n&&l(E.f)?(E.g=1,A++):A++:((w||(w=[])).push(E.n.slice(6)),S.splice(A,1)):A++;w?k&&l(k.f)?k.f+=" "+w.join(" "):S.unshift({t:iu,n:"class",f:w.join(" "),g:1}):k&&l(k.f)&&(k.g=1),x?_&&l(_.f)?_.f+="; "+x.join(" "):S.unshift({t:iu,n:"style",f:x.join(" "),g:1}):_&&l(_.f)&&(_.g=1)}return p}function Ae(t,e){var n=/^<([a-zA-Z][a-zA-Z0-9]*)/.exec(e),i=cl[t];return n&&i?!~i.indexOf(n[1].toLowerCase()):!0}function Ce(t,e){var n=t.pos;return t.matchString("</")?(t.matchString("#"),t.sp(),t.matchString(e)?(t.sp(),t.matchString(">")?!0:(t.pos=n,null)):(t.pos=n,null)):null}function Oe(t,e){var n=t.pos;if(t.matchString(e.open))return t.matchPattern(fl)?!0:void(t.pos=n)}function Ne(t){var e,n,i,r=t.remaining();return t.textOnlyMode?(n=t.tags.map(function(t){return t.open}),n=n.concat(t.tags.map(function(t){return"\\"+t.open})),e=yt(r,n)):(i=t.inside?"</"+t.inside:"<",t.inside&&!t.interpolate[t.inside]?e=r.indexOf(i):(n=t.tags.map(function(t){return t.open}),n=n.concat(t.tags.map(function(t){return"\\"+t.open})),t.inAttribute===!0?n.push('"',"'","=","<",">","`"):t.inAttribute?n.push(t.inAttribute):n.push(i),e=yt(r,n))),e?(-1===e&&(e=r.length),t.pos+=e,t.inside&&"textarea"!==t.inside||t.textOnlyMode?r.substr(0,e):bt(r.substr(0,e))):null}function je(t){var e,n,i=t.pos,r=t.standardDelimiters;if(!t.matchString(r[0]))return null;if(!t.matchPattern(dl))return t.pos=i,null;var s=t.matchPattern(/^[a-zA-Z_$][a-zA-Z_$0-9\-\/]*/);s||t.error("expected legal partial name"),t.sp(),t.matchString(r[1])||t.error("Expected closing delimiter '"+r[1]+"'");var a=[],o=r[0],u=r[1];do(e=pe(t,{open:o,close:u}))?("partial"!==e.r&&t.error("Expected "+o+"/partial"+u),n=!0):(e=t.read(gl),e||t.error("Expected "+o+"/partial"+u),a.push(e));while(!n);return{t:ou,n:s,f:a}}function Te(t){for(var e=[],n=qa(null),i=!1,r=t.preserveWhitespace;t.pos<t.str.length;){var s=t.pos,a=void 0,o=void 0;(o=t.read(yl))?(n[o.n]&&(t.pos=s,t.error("Duplicated partial definition")),ke(o.f,t.stripComments,r,!r,!r,t.whiteSpaceElements),n[o.n]=o.f,i=!0):(a=t.read(gl))?e.push(a):t.error("Unexpected template content")}var u={v:Fo,t:e};return i&&(u.p=n),u}function Ve(t,e){Wa(t).forEach(function(n){if(Pe(n,t))return Me(t,e);var i=t[n];Ie(i)&&Ve(i,e)})}function Pe(t,e){return"s"===t&&Qa(e.r)}function Me(t,e){var n=t.s,i=t.r;e[n]||(e[n]=ft(n,i.length))}function Ie(t){return Qa(t)||s(t)}function Re(t,e){return new xl(t,e||{}).result}function Be(t,e,n){t||m("Missing Ractive.parse - cannot parse "+e+". "+n)}function Ke(t,e){return Be(ft,"new expression function",_l),ft(t,e)}function Le(t,e){Be(Re,'compution string "${str}"',El);var n=Re(t,{expression:!0});return function(){return n.e.apply(e,n.r.map(function(t){return e.get(t)}))}}function De(t,e,n){var i,r,s,a,o;return h(n)&&(i=K(n,t),s=n.toString(),a=!0),l(n)&&(i=Le(n,t),s=n),u(n)&&(l(n.get)?(i=Le(n.get,t),s=n.get):h(n.get)?(i=K(n.get,t),s=n.get.toString(),a=!0):m("`%s` computation must have a `get()` method",e),h(n.set)&&(r=K(n.set,t),o=n.set.toString())),{getter:i,setter:r,getterString:s,setterString:o,getterUseStack:a}}function Fe(t){!t.started||t.outros.length||t.outroChildren||(t.outrosComplete||(t.outrosComplete=!0,t.parent&&t.parent.decrementOutros(t),ze(t)&&t.detachNodes()),t.intros.length||t.totalChildren||(h(t.callback)&&t.callback(),t.parent&&!t.notifiedTotal&&(t.notifiedTotal=!0,t.parent.decrementTotal())))}function ze(t){return!t||t.outrosComplete&&ze(t.parent)}function Ue(t){var e=t.detachQueue,n=$e(t);if(n.length){var i,r,s=e.length,a=0,o=t.detachQueue=[];t:for(;s--;){for(i=e[s].node,a=n.length;a--;)if(r=n[a].element.node,r===i||r.contains(i)||i.contains(r)){o.push(e[s]);continue t}e[s].detach()}}else t.detachNodes()}function $e(t,e){var n=e;if(n){for(var i=t.children.length;i--;)n=$e(t.children[i],n);return t.outros.length&&(n=n.concat(t.outros)),n}n=[];for(var r=t;r.parent;)r=r.parent;return $e(r,n)}function qe(t){t.dispatch()}function He(){var t=Nl.immediateObservers;Nl.immediateObservers=[],t.forEach(qe);var e,n=Nl.fragments.length;for(t=Nl.fragments,Nl.fragments=[];n--;)e=t[n],e.update();Nl.transitionManager.ready(),t=Nl.deferredObservers,Nl.deferredObservers=[],t.forEach(qe);var i=Nl.tasks;for(Nl.tasks=[],n=0;n<i.length;n+=1)i[n]();return Nl.fragments.length||Nl.immediateObservers.length||Nl.deferredObservers.length||Nl.tasks.length?He():void 0}function Ze(){jl.start();var t,e,n=performance.now();for(t=0;t<Tl.length;t+=1)e=Tl[t],e.tick(n)||Tl.splice(t--,1);jl.end(),Tl.length?requestAnimationFrame(Ze):Vl=!1}function We(e,n){var i={};if(!n)return e;n+=".";for(var r in e)t(e,r)&&(i[n+r]=e[r]);return i}function Ge(t){var e;return Il[t]||(e=t?t+".":"",Il[t]=function(n,i){var r;return l(n)?(r={},r[e+n]=i,r):u(n)?e?We(n,t):n:void 0}),Il[t]}function Qe(t){for(var e=[],n=0;n<t.length;n++)e[n]=(t.childByKey[n]||{}).value;
return e}function Ye(t){for(var e=t;e&&!e.context&&!e.aliases;)e=e.parent;return e}function Je(e,n){var i=e;if("."===n)return e.findContext();if("~"===n[0])return e.ractive.viewmodel.joinAll(A(n.slice(2)));if("."===n[0]||"^"===n[0]){for(var r=e,s=n.split("/"),a="^^"===s[0];r&&!r.context;)r=Xe(r);for(var o=r&&r.context;r&&"^^"===s[0];){for(s.shift(),r=r.isIteration?r.parent.parent:Xe(r);r&&!r.context;)r=Xe(r);o=r&&r.context}if(!o&&a)throw new Error("Invalid context parent reference ('"+n+"'). There is not context at that level.");for(;"."===s[0]||".."===s[0];){var u=s.shift();".."===u&&(o=o.parent)}return n=s.join("/"),"."===n[0]&&(n=n.slice(1)),o.joinAll(A(n))}var l=A(n);if(l.length){var c=l.shift();if("@"===c[0]){if("@this"===c||"@"===c)return e.ractive.viewmodel.getRactiveModel().joinAll(l);if("@index"===c||"@key"===c){l.length&&nn(c);var f=tn(e);return f&&f["get"+("i"===c[1]?"Index":"Key")]()}if("@last"===c){var d=tn(e);return d&&d.parent.getLast()}if("@global"===c)return Fl.joinAll(l);if("@shared"===c)return Dl.joinAll(l);if("@keypath"===c||"@rootpath"===c){for(var p="r"===n[1]?e.ractive.root:null,m=e;m&&(!m.context||m.isRoot&&m.ractive.component&&(p||!m.ractive.isolated));)m=m.isRoot?m.componentParent:m.parent;return m.getKeypath(p)}if("@context"===c)return new Ll(e.getContext(),"context").joinAll(l);if("@local"===c)return e.getContext()._data.joinAll(l);if("@style"===c)return e.ractive.constructor._cssModel.joinAll(l);if("@helpers"===c)return e.ractive.viewmodel.getHelpers().joinAll(l);if("@macro"===c){var v=en(e);return v?new Ll(v,"macro").joinAll(l):void 0}throw new Error("Invalid special reference '"+c+"'")}if(c&&!l.length){var g=e.ractive.viewmodel.getHelpers();if(g.has(c))return g.joinKey(c)}var y=Ye(e);y=y&&y.context?y.context:e.findContext();for(var w,x=!1,k=e.ractive.warnAboutAmbiguity,_=0;e;){if(e.isIteration&&(c===e.parent.keyRef?w=e.getKey():c===e.parent.indexRef&&(w=e.getIndex()),w&&l.length&&nn(c)),!w&&e.aliases&&t(e.aliases,c)&&(w=e.aliases[c]),!w&&e.context&&e.context.has(c)&&(w=e.context.joinKey(c),x?k&&b("'"+n+"' resolved but is ambiguous and will create a mapping to a parent component."):k&&_&&b("'"+n+"' resolved but is ambiguous.")),w)return x&&(w=i.ractive.viewmodel.createLink(c,w,c,{implicit:!0})),l.length>0&&h(w.joinAll)&&(w=w.joinAll(l)),w;e.context&&!e.aliases&&(_=1),e.ractive.isolated||e.owner&&e.owner.containerFragment||!(e.componentParent||!e.parent&&e.ractive.component)?e=e.parent:(e=e.componentParent||e.ractive.component.up,x=!0)}var E=i.ractive;return E.resolveInstanceMembers&&"data"!==c&&c in E?E.viewmodel.getRactiveModel().joinKey(c).joinAll(l):(k&&b("'"+n+"' is ambiguous and did not resolve."),y.joinKey(c).joinAll(l))}}function Xe(t){return t&&(!t.ractive.isolated&&!(t.owner&&t.owner.containerFragment)&&(t.componentParent||!t.parent&&t.ractive.component)||t.parent)}function tn(t){for(var e,n=t;!n.isIteration&&(e=Xe(n));)n=e;return n.isIteration&&n}function en(t){for(var e=t;e;){if(e.owner.handle)return e.owner.handle;e=Xe(e)}}function nn(t){throw new Error("An index or key reference ("+t+") cannot have child properties")}function rn(t){for(var e=[],n=arguments.length-1;n-->0;)e[n]=arguments[n+1];var i=t.fragment||t._fakeFragment||(t._fakeFragment=new Ul(t));return i.getContext.apply(i,e)}function sn(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return this.ctx||(this.ctx=new zl.Context(this)),t.unshift(qa(this.ctx)),$a.apply(null,t)}function an(t){for(var e=t;e&&!e.context;)e=e.parent;return e?e:t&&t.ractive.fragment}function on(t,e){var n=ql,i=e&&e.deep,r=e&&e.shuffle,s=jl.start();e&&"keep"in e&&(ql=e.keep);for(var a=t.length;a--;){var o=t[a][0],u=t[a][1],h=t[a][2];if(!o)throw jl.end(),new Error("Failed to set invalid keypath '"+h+"'");if(i)ln(o,u);else if(r){var l=u,c=o.get();if(l||(l=c),f(c))o.set(l);else{if(!Qa(c)||!Qa(l))throw jl.end(),new Error("You cannot merge an array with a non-array");var d=cn(r);o.merge(l,d)}}else o.set(u)}return jl.end(),ql=n,1===t.length?s.then(function(){return t[0][1]}):s}function un(t,e,n,i){if(!n&&("."===e[0]||"^"===e[1]))return b("Attempted to set a relative keypath from a non-relative context. You can use a context object to set relative keypaths."),[];var r=A(e),s=n||t.viewmodel;return Hl.test(e)?s.findMatches(r):s===t.viewmodel?!t.component||t.isolated||s.has(r[0])||"@"===e[0]||!e[0]||i?[s.joinAll(r)]:[Je(t.fragment||new Ul(t),e)]:[s.joinAll(r)]}function hn(e,n,i,r){var a=[];if(s(n)){var o=function(i){t(n,i)&&a.push.apply(a,un(e,i,null,r).map(function(t){return[t,n[i],i]}))};for(var u in n)o(u)}else a.push.apply(a,un(e,n,null,r).map(function(t){return[t,i,n]}));return a}function ln(e,n){var i=e.get(!1,Zl);if(null==i||!u(n)||o(n))return e.set(n);if(!u(i))return e.set(n);for(var r in n)t(n,r)&&ln(e.joinKey(r),n[r])}function cn(t){if(t===!0)return null;if(h(t))return t;if(l(t))return Wl[t]||(Wl[t]=function(e){return e[t]});throw new Error("If supplied, options.compare must be a string, function, or true")}function fn(t,e,n,i){if(!l(e)||!r(n))throw new Error("Bad arguments");var s=hn(t,e,n,i&&i.isolated);return on(s.map(function(t){var e=t[0],n=t[1],i=e.get();if(!r(n)||!r(i))throw new Error(Gl);return[e,i+n]}))}function dn(t,e,n){var i=c(e)?e:1,r=u(e)?e:n;return fn(this,t,i,r)}function pn(t){var e=Promise.resolve(t);return Ha(e,"stop",{value:d}),e}function mn(t,e){t=t||{};var n;return t.easing&&(n=h(t.easing)?t.easing:e.easing[t.easing]),{easing:n||Ql,duration:"duration"in t?t.duration:400,complete:t.complete||d,step:t.step||d,interpolator:t.interpolator}}function vn(t,e,n,r){r=mn(r,t);var s=e.get();if(i(s,n))return r.complete(r.to),pn(n);var a=_(s,n,t,r.interpolator);return a?e.animate(s,n,r,a):(jl.start(),e.set(n),jl.end(),pn(n))}function gn(t,e,n){if(u(t)){var i=Wa(t);throw new Error("ractive.animate(...) no longer supports objects. Instead of ractive.animate({\n  "+i.map(function(e){return"'"+e+"': "+t[e]}).join("\n  ")+"\n}, {...}), do\n\n"+i.map(function(e){return"ractive.animate('"+e+"', "+t[e]+", {...});"}).join("\n")+"\n")}return vn(this,this.viewmodel.joinAll(A(t)),e,n)}function yn(t,e){t.event&&t._eventQueue.push(t.event),t.event=e}function bn(t){t._eventQueue.length?t.event=t._eventQueue.pop():t.event=null}function wn(t,e){var n=e?Yl:Jl;if(n[t])return n[t];var i=t.split("."),r=[],s=!1;e&&(i.unshift("this"),s=!0);for(var a=Math.pow(2,i.length)-(e?1:0),o=0;a>o;o++){for(var u=[],h=0;h<i.length;h++)u.push(1&o>>h?"*":i[h]);r.unshift(u.join("."))}return s&&(i.length>2?r.push.apply(r,wn(t,!1)):(r.push("*"),r.push(t))),n[t]=r,r}function xn(t,e,n,i){if(void 0===i&&(i=[]),e){n.name=e,i.unshift(n);var r=t._nsSubs?wn(e,!0):["*",e];return kn(t,r,n,i,!0)}}function kn(t,e,n,i,r){void 0===r&&(r=!1);var s=!0;if(r||t._nsSubs){yn(t,n);for(var a=e.length;a--;)e[a]in t._subs&&(s=_n(t,t._subs[e[a]],n,i)&&s);bn(t)}if(t.parent&&s){if(r&&t.component){var o=t.component.name+"."+e[e.length-1];e=wn(o,!1),n&&!n.component&&(n.component=t)}s=kn(t.parent,e,n,i)}return s}function _n(t,e,n,i){var r=null,s=!1;e=e.slice();for(var a=0,o=e.length;o>a;a+=1)e[a].off||e[a].handler.apply(t,i)!==!1||(s=!0);return n&&s&&(r=n.event)&&(r.preventDefault&&r.preventDefault(),r.stopPropagation&&r.stopPropagation()),!s}function En(t,e){return t[e._guid]||(t[e._guid]=[])}function Sn(t,e){var n=En(t.queue,e);for(t.hook.fire(e);n.length;)Sn(t,n.shift());delete t.queue[e._guid]}function An(t,e){void 0===e&&(e=null);var n=[];return Cn(t,e,n,t.ractive),n}function Cn(t,e,n,i){if(t.isAnchor)e&&t.name!==e||n.push(t);else if(t.items)t.items.forEach(function(t){return Cn(t,e,n,i)});else if(t.iterations)t.iterations.forEach(function(t){return Cn(t,e,n,i)});else if(!t.fragment||t.component&&t.fragment.ractive!==i){if(t.instance&&t.instance.fragment){var r=[];Cn(t.instance.fragment,e,r,i),r.forEach(function(t){return t.ractive===i&&n.push(t)})}}else Cn(t.fragment,e,n,i)}function On(t,e){void 0===e&&(e=null);var n=An(t.fragment,e),i={},r=t._children.byName;n.forEach(function(t){var e=t.name;e in i||(i[e]=0);var n=i[e],s=(r[e]||[])[n];s&&s.lastBound!==t&&(s.lastBound&&s.lastBound.removeChild(s),t.addChild(s)),i[e]++})}function Nn(t){t.instance.fragment.rendered&&(t.shouldDestroy=!0,t.instance.unrender()),t.instance.el=null}function jn(t,e){void 0===e&&(e={});var n,i=this._children;if(t.parent&&t.parent!==this)throw new Error("Instance "+t._guid+" is already attached to a different instance "+t.parent._guid+". Please detach it from the other instance using detachChild first.");if(t.parent)throw new Error("Instance "+t._guid+" is already attached to this instance.");var r={instance:t,ractive:this,name:e.name||t.constructor.name||"Ractive",target:e.target||!1,bubble:Tn,findNextNode:Vn};if(r.nameOption=e.name,r.target){var s;(s=i.byName[r.target])||(s=[],this.set("@this.children.byName."+r.target,s)),n=e.prepend?0:void 0!==e.insertAt?e.insertAt:s.length}else r.up=this.fragment,r.external=!0;t.parent=this,t.root=this.root,t.component=r,i.push(r);var a=jl.start(),o=t.viewmodel.getRactiveModel();return o.joinKey("parent",{lastLink:!1}).link(this.viewmodel.getRactiveModel()),o.joinKey("root",{lastLink:!1}).link(this.root.viewmodel.getRactiveModel()),nc.attachchild.fire(t),r.target?(Nn(r),this.splice("@this.children.byName."+r.target,n,0,r),On(this,r.target)):t.isolated||t.viewmodel.attached(this.fragment),jl.end(),a.ractive=t,a.then(function(){return t})}function Tn(){jl.addFragment(this.instance.fragment)}function Vn(){return this.anchor?this.anchor.findNextNode():void 0}function Pn(t,e){this.computed[t]=e,(l(e)||h(e))&&(e=this.computed[t]={get:e});var n=A(t);if(!~t.indexOf("*")){var i=n.pop();return this.viewmodel.joinAll(n).compute(i,e)}e.pattern=new RegExp("^"+n.map(function(t){return t.replace(/\*\*/g,"(.+)").replace(/\*/g,"((?:\\\\.|[^\\.])+)")}).join("\\.")+"$")}function Mn(t,e){var n=jl.start(),i=Pn.call(this,t,e);if(i){var r=A(t);1!==r.length||i.isReadonly||i.set(this.viewmodel.value[r[0]]);var s=r.reduce(function(t,e){return t&&t.childByKey[e]},this.viewmodel);s&&(s.rebind(i,s,!1),s.parent&&delete s.parent.childByKey[s.key],z())}return jl.end(),n}function In(){return this.isDetached?this.el:(this.el&&P(this.el.__ractive_instances__,this),this.el=this.fragment.detach(),this.isDetached=!0,nc.detach.fire(this),this.el)}function Rn(t){for(var e,n,i=this._children,r=i.length;r--;)if(i[r].instance===t){n=r,e=i[r];break}if(!e||t.parent!==this)throw new Error("Instance "+t._guid+" is not attached to this instance.");var s=jl.start();e.anchor&&e.anchor.removeChild(e),t.isolated||t.viewmodel.detached(),i.splice(n,1),e.target&&(this.splice("@this.children.byName."+e.target,i.byName[e.target].indexOf(e),1),On(this,e.target));var a=t.viewmodel.getRactiveModel();return a.joinKey("parent",{lastLink:!1}).unlink(),a.joinKey("root",{lastLink:!1}).link(a),t.root=t,t.parent=null,t.component=null,nc.detachchild.fire(t),jl.end(),s.ractive=t,s.then(function(){return t})}function Bn(t,e){var n=this;if(void 0===e&&(e={}),!this.rendered)throw new Error("Cannot call ractive.find('"+t+"') unless instance is rendered to the DOM");var i=this.fragment.find(t,e);if(i)return i;if(e.remote)for(var r=0;r<this._children.length;r++)if(n._children[r].instance.fragment.rendered&&(i=n._children[r].instance.find(t,e)))return i}function Kn(t,e){if(void 0===e&&(e={}),!this.rendered)throw new Error("Cannot call ractive.findAll('"+t+"', ...) unless instance is rendered to the DOM");return Qa(e.result)||(e.result=[]),this.fragment.findAll(t,e),e.remote&&this._children.forEach(function(n){!n.target&&n.instance.fragment&&n.instance.fragment.rendered&&n.instance.findAll(t,e)}),e.result}function Ln(t,e){return!e&&u(t)&&(e=t,t=""),e=e||{},Qa(e.result)||(e.result=[]),this.fragment.findAllComponents(t,e),e.remote&&this._children.forEach(function(n){!n.target&&n.instance.fragment&&n.instance.fragment.rendered&&(t&&n.name!==t||e.result.push(n.instance),n.instance.findAllComponents(t,e))}),e.result}function Dn(t,e){var n=this;void 0===e&&(e={}),u(t)&&(e=t,t="");var i=this.fragment.findComponent(t,e);if(i)return i;if(e.remote){if(!t&&this._children.length)return this._children[0].instance;for(var r=0;r<this._children.length;r++)if(!n._children[r].target){if(n._children[r].name===t)return n._children[r].instance;if(i=n._children[r].instance.findComponent(t,e))return i}}}function Fn(t){return this.container?this.container.component&&this.container.component.name===t?this.container:this.container.findContainer(t):null}function zn(t){return this.parent?this.parent.component&&this.parent.component.name===t?this.parent:this.parent.findParent(t):null}function Un(t,e,n){for(void 0===e&&(e=!0);t&&(t.type!==Jo||n&&t.name!==n)&&(!e||t.type!==su&&t.type!==nu);)t=t.owner?t.owner:t.component||t["yield"]?t.containerFragment||t.component.up:t.parent?t.parent:t.up?t.up:void 0;return t}function $n(t,e,n){var i=[],r=qn(t,e,n);if(!r)return null;var s=r.length-2-r[1],a=Math.min(t,r[0]),o=a+r[1];i.startIndex=a;var u;for(u=0;a>u;u+=1)i.push(u);for(;o>u;u+=1)i.push(-1);for(;t>u;u+=1)i.push(u+s);return 0!==s?i.touchedFrom=r[0]:i.touchedFrom=t,i}function qn(t,e,n){switch(e){case"splice":for(void 0!==n[0]&&n[0]<0&&(n[0]=t+Math.max(n[0],-t)),f(n[0])&&(n[0]=0);n.length<2;)n.push(t-n[0]);return c(n[1])||(n[1]=t-n[0]),n[1]=Math.min(n[1],t-n[0]),n;case"sort":case"reverse":return null;case"pop":return t?[t-1,1]:[0,0];case"push":return[t,0].concat(n);case"shift":return[0,t?1:0];case"unshift":return[0,0].concat(n)}}function Hn(t){function e(t){for(var e=[],i=arguments.length-1;i-->0;)e[i]=arguments[i+1];return n(this.viewmodel.joinAll(A(t)),e)}function n(e,n){var i=e.get();if(!Qa(i)){if(f(i)){i=[];var r=ic[t].apply(i,n),s=jl.start().then(function(){return r});return e.set(i),jl.end(),s}throw new Error("shuffle array method "+t+" called on non-array at "+e.getKeypath())}var a=$n(i.length,t,n),o=ic[t].apply(i,n),u=jl.start().then(function(){return o});return u.result=o,a?e.shuffle?e.shuffle(a):e.mark():e.set(o),jl.end(),u}return{path:e,model:n}}function Zn(t,e,n){e.parent&&e.parent.wrapper&&e.parent.adapt();var i=jl.start();return e.mark(n&&n.force),e.notifyUpstream(),jl.end(),nc.update.fire(t,e),i}function Wn(t,e){var n,i;return l(t)?(i=A(t),n=e):n=t,Zn(this,i?this.viewmodel.joinAll(i):this.viewmodel,n)}function Gn(e,n,i){var r=[];if(s(n))for(var a in n)t(n,a)&&r.push([Qn(e,a).model,n[a]]);else r.push([Qn(e,n).model,i]);return r}function Qn(t,e){var n=t.fragment;return l(e)?{model:Je(n,e),instance:n.ractive}:{model:n.findContext(),instance:e}}function Yn(t,e){return t.events&&t.events.find&&t.events.find(function(t){return~t.template.n.indexOf(e)})}function Jn(t){for(var e=[],n=arguments.length-1;n-->0;)e[n]=arguments[n+1];var i;if(e[0]instanceof dc){var r=e.shift();i=qa(r),$a(i,r)}else i=!u(e[0])||null!==e[0]&&e[0].constructor!==Object?dc.forRactive(this):dc.forRactive(this,e.shift());return xn(this,t,i,e)}function Xn(t,e){if(!l(t))return this.viewmodel.get(!0,t);var n,i=A(t),r=i[0];return this.viewmodel.has(r)||this.component&&!this.isolated&&(n=Je(this.fragment||new Ul(this),r)),n=this.viewmodel.joinAll(i),n.get(!0,e)}function ti(){return cc.f?cc.f.getContext():void 0}function ei(t){l(t)&&Sc&&(t=Sc.call(document,t));var e;if(t){if(t._ractive)return t._ractive.proxy.getContext();if(!(e=t.__ractive_instances__))return ei(t.parentNode);if(1===e.length)return rn(e[0])}}function ni(t,e){return t?(l(t)&&(t=this.find(t,e)),ei(t)):rn(this)}function ii(t){return Pc?t:{is:t}}function ri(){return Xa.createDocumentFragment()}function si(t){var e;if(t&&"boolean"!=typeof t){if(!Ja||!Xa||!t)return null;if(t.nodeType)return t;if(l(t)){if(e=Xa.getElementById(t),!e&&Xa.querySelector)try{e=Xa.querySelector(t)}catch(n){}if(e&&e.nodeType)return e}return t[0]&&t[0].nodeType?t[0]:null}}function ai(t){return t&&"unknown"!=typeof t.parentNode&&t.parentNode&&t.parentNode.removeChild(t),t}function oi(t){return null==t||c(t)&&isNaN(t)||!t.toString?"":""+t}function ui(t){return oi(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function hi(t,e){if(!this.fragment.rendered)throw new Error("The API has changed - you must call `ractive.render(target[, anchor])` to render your Ractive instance. Once rendered you can use `ractive.insert()`.");if(t=si(t),e=si(e)||null,!t)throw new Error("You must specify a valid target to insert into");t.insertBefore(this.detach(),e),this.el=t,(t.__ractive_instances__||(t.__ractive_instances__=[])).push(this),this.isDetached=!1,li(this)}function li(t){nc.insert.fire(t),t.findAllComponents("*").forEach(function(t){li(t.instance)})}function ci(t,e,n){var i,r=n&&(n.ractive||n.instance)||this,s=A(t);!r.viewmodel.has(s[0])&&r.component&&(i=Je(r.component.up,s[0]),i=i.joinAll(s.slice(1)));var a=i||r.viewmodel.joinAll(s),o=this.viewmodel.joinAll(A(e),{lastLink:!1});if(fi(a,o)||fi(o,a))throw new Error("A keypath cannot be linked to itself.");var u=jl.start();return o.link(a,n&&n.keypath||t),jl.end(),u}function fi(t,e){for(var n=e;n;){if(n===t||n.owner===t)return!0;n=n.target||n.parent}}function di(t,e){var n=e&&t.model?t.model.get():t.newValue;try{t.oldValue=t.oldFn?t.oldFn.call(t.oldContext,void 0,n,t.keypath):n}catch(i){b("Failed to execute observer oldValue callback for '"+this.keypath+"': "+(i.message||i)),t.oldValue=n}}function pi(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return t.map(E).join(".")}function mi(t){return A(t).map(C)}function vi(t,e,n){var i=t.oldValues;t.oldFn?(n||(t.oldValues={}),Wa(e).forEach(function(n){var r=[i[n],e[n],n],s=t.pattern.exec(n);s&&r.push.apply(r,s.slice(1)),t.oldValues[n]=t.oldFn.apply(t.oldContext,r)})):n?Wa(e).forEach(function(t){return i[t]=e[t]}):t.oldValues=e}function gi(){return-1}function yi(t,e,n){var i,r,a=this,o=[];s(t)?(i=t,r=e||{}):h(t)?(i={"":t},r=e||{}):(i={},i[t]=e,r=n||{});var u=!1;return Wa(i).forEach(function(t){var e=i[t],n=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return u?void 0:e.apply(this,t)},s=t.split(" ");s.length>1&&(s=s.filter(function(t){return t})),s.forEach(function(t){r.keypath=t;var e=bi(a,t,n,r);e&&o.push(e)})}),this._observers.push.apply(this._observers,o),{cancel:function(){return o.forEach(function(t){return t.cancel()})},isSilenced:function(){return u},silence:function(){return u=!0},resume:function(){return u=!1}}}function bi(t,e,n,i){var r=A(e),s=r.indexOf("*");~s||(s=r.indexOf("**")),i.fragment=i.fragment||t.fragment;var a;if(i.fragment?~r[0].indexOf(".*")?(a=i.fragment.findContext(),s=0,r[0]=r[0].slice(1)):a=0===s?i.fragment.findContext():Je(i.fragment,r[0]):a=t.viewmodel.joinKey(r[0]),a||(a=t.viewmodel.joinKey(r[0])),~s){var o=r.indexOf("**");return~o&&(o+1!==r.length||~r.indexOf("*"))?void w("Recursive observers may only specify a single '**' at the end of the path."):(a=a.joinAll(r.slice(1,s)),new Bc(t,a,r.slice(s),n,i))}return a=a.joinAll(r.slice(1)),i.array?new Lc(t,a,n,i):new Mc(t,a,n,i)}function wi(t,e,n){return s(t)||h(t)?(n=$a(e||{},Fc),this.observe(t,n)):(n=$a(n||{},Fc),this.observe(t,e,n))}function xi(t,e){var n=this;if(t){var i=t.split(" ").map(zc).filter(Uc);i.forEach(function(t){var i=n._subs[t];if(i&&e){var r=i.find(function(t){return t.callback===e});r&&(P(i,r),r.off=!0,t.indexOf(".")&&n._nsSubs--)}else i&&(t.indexOf(".")&&(n._nsSubs-=i.length),i.length=0)})}else this._subs={};return this}function ki(e,n){var i=this,r=u(e)?e:{};l(e)&&(r[e]=n);var s=!1,a=[],o=function(e){var n=r[e],o=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return s?void 0:n.apply(this,t)},u={callback:n,handler:o};if(t(r,e)){var h=e.split(" ").map(zc).filter(Uc);h.forEach(function(t){(i._subs[t]||(i._subs[t]=[])).push(u),t.indexOf(".")&&i._nsSubs++,a.push([t,u])})}};for(var h in r)o(h);return{cancel:function(){return a.forEach(function(t){return i.off(t[0],t[1].callback)})},isSilenced:function(){return s},silence:function(){return s=!0},resume:function(){return s=!1}}}function _i(t,e){var n=this.on(t,function(){e.apply(this,arguments),n.cancel()});return n}function Ei(t,e){void 0===e&&(e={});var n=A(t);if(this.viewmodel.has(n[0])){var i=this.viewmodel.joinAll(n);if(!i.isLink)return;for(;(i=i.target)&&e.canonical!==!1&&i.isLink;);if(i)return{ractive:i.root.ractive,keypath:i.getKeypath()}}}function Si(t){return void 0===t?Yc:Yc=t}function Ai(t){Zc.push(t),Wc=!0}function Ci(t){var e=Ti();e&&(t||Wc)&&(Yc?Zc.forEach(function(t){var e=Ni(t.id);if(e){var n=Oi(t.id);Qc?e.styleSheet.cssText!==n&&(e.styleSheet.cssText=n):e.innerHTML!==n&&(e.innerHTML=n)}}):Qc?e.styleSheet.cssText=Oi(null):e.innerHTML=Oi(null),Wc=!1)}function Oi(t){t&&!Qa(t)&&(t=[t]);var e=t?Zc.filter(function(e){return~t.indexOf(e.id)}):Zc;return e.forEach(function(t){return t.applied=!0}),e.reduce(function(t,e){return""+(t?t+"\n\n/* {"+e.id+"} */\n"+e.styles:"")},Hc)}function Ni(t){return Xa&&(Xa.querySelector('[data-ractive-css="'+t+'"]')||ji(t))}function ji(t){if(Xa){var e=Xa.createElement("style");return e.type="text/css",e.setAttribute("data-ractive-css",t||""),Xa.getElementsByTagName("head")[0].appendChild(e),null===Qc&&(Qc=!!e.styleSheet),e}}function Ti(){return Gc||(Gc=ji()),Gc}function Vi(t,e,n){void 0===n&&(n=[]);var i=[],r=function(t){return t.replace(ef,function(t,e){return i[e]})};return t=t.replace(tf,function(t){return"\x00"+(i.push(t)-1)}).replace(Xc,""),n.forEach(function(e){t=t.replace(e,function(t){return"\x00"+(i.push(t)-1)})}),e(t,r)}function Pi(t){return t.trim()}function Mi(t){return t.str}function Ii(t,e){for(var n,i=[];n=of.exec(t);)i.push({str:n[0],base:n[1],modifiers:n[2]});for(var r=i.map(Mi),s=[],a=i.length;a--;){var o=r.slice(),u=i[a];o[a]=u.base+e+u.modifiers||"";var h=r.slice();h[a]=e+" "+h[a],s.push(o.join(" "),h.join(" "))}return s.join(", ")}function Ri(t,e){var n,i='[data-ractive-css~="{'+e+'}"]';return n=hf.test(t)?t.replace(hf,i):Vi(t,function(t,e){return t=t.replace(rf,"$&").replace(nf,function(t,e){if(uf.test(e))return t;var n=e.split(",").map(Pi),r=n.map(function(t){return Ii(t,i)}).join(", ")+" ";return t.replace(e,r)}).replace(sf,""),e(t)},[af])}function Bi(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}function Ki(){return Bi()+Bi()+"-"+Bi()+"-"+Bi()+"-"+Bi()+"-"+Bi()+Bi()+Bi()}function Li(t,e,n){var i=u(t)?e:n,r=this._cssModel;r.locked=!0;var s=on(hn({viewmodel:r},t,e,!0),i);r.locked=!1;var a=jl.start();return this.extensions.forEach(function(t){var e=t._cssModel;e.mark(),e.downstreamChanged("",1)}),jl.end(),Di(this,!i||i.apply!==!1),s.then(function(){return a})}function Di(t,e){var n=Fi(t),i=t.extensions.map(function(t){return Di(t,!1)}).reduce(function(t,e){return e||t},!1);if(e&&(n||i)){var r=t._cssDef;(!r||r&&r.applied)&&Ci(!0)}return n||i}function Fi(t){var e=t.css;if(h(e)){var n=t._cssDef,i=Ui(t,e),r=n.transform?Ri(i,n.id):i;if(n.styles!==r)return n.styles=r,!0}}function zi(t){for(var e=t,n=[];e;)e.prototype.cssId&&n.push(e.prototype.cssId),e=e.Parent;return n}function Ui(t,e){if(l(e))return e;var n=t.cssData,i=t._cssModel,r=function(t){return i.joinAll(A(t)).get()};r.__proto__=n;var s=e.call(t,r);return l(s)?s:""}function $i(t,e,n){var i=t.css===!0?"":l(t.css)&&!cf.test(t.css)?si(t.css)||t.css:t.css,r=i,s=t.cssId||Ki();u(i)?(i="textContent"in i?i.textContent:i.innerHTML,r=i):h(i)&&(r=i,i=Ui(e,i));var a={transform:"noCSSTransform"in t?!t.noCSSTransform:!t.noCssTransform};Ha(e,"_cssDef",{configurable:!0,value:a}),Ha(e,"css",{get:function(){return r},set:function(t){r=t;var n=Ui(e,r),i=a.styles;a.styles=a.transform?Ri(n,s):n,a.applied&&i!==a.styles&&Ci(!0)}}),a.styles=a.transform?Ri(i,s):i,a.id=n.cssId=s,e._cssIds.push(s),Ai(e._cssDef)}function qi(t){t&&t.constructor!==Object&&(h(t)||(u(t)?b("If supplied, options.data should be a plain JavaScript object - using a non-POJO as the root object may work, but is discouraged"):m("data option must be an object or a function, `"+t+"` is not valid")))}function Hi(){return{}}function Zi(t,e){qi(e);var n=h(t);e||n||(e=Hi);var i=h(e);return n||i?function(){var r=i?Wi(e,this):e,s=n?Wi(t,this):t;return Gi(r,s)}:Gi(e,t)}function Wi(t,e){var n=t.call(e);if(n)return u(n)||m("Data function must return an object"),n.constructor!==Object&&w("Data function returned something other than a plain JavaScript object. This might work, but is strongly discouraged"),n}function Gi(t,e){if(t&&e){for(var n in e)n in t||(t[n]=e[n]);return t}return t||e}function Qi(t){var e=t._config.template;if(e&&e.fn){var n=Yi(t,e.fn);return n!==e.result?(e.result=n,n):void 0}}function Yi(t,e){return e.call(t,{fromId:Sl.fromId,isParsed:Sl.isParsed,parse:function(e,n){return void 0===n&&(n=Sl.getParseOptions(t)),Sl.parse(e,n)}})}function Ji(t,e){return l(t)?t=Xi(t,e):(tr(t),pt(t)),t}function Xi(t,e){return"#"===t[0]&&(t=Sl.fromId(t)),Sl.parseFor(t,e)}function tr(t){if(void 0==t)throw new Error("The template cannot be "+t+".");if(!c(t.v))throw new Error("The template parser was passed a non-string template, but the template doesn't have a version.  Make sure you're passing in the template you think you are.");if(t.v!==Fo)throw new Error("Mismatched template version (expected "+Fo+", got "+t.v+") Please ensure you are using the latest version of Ractive.js in your build process as well as in your app")}function er(e,n,i){if(n)for(var r in n)(i||!t(e,r))&&(e[r]=n[r])}function nr(t,e,n){function i(){var t=ir(i._parent,e),r="_super"in this,s=this._super;this._super=t;var a=n.apply(this,arguments);return r?this._super=s:delete this._super,a}return/_super/.test(n)?(i._parent=t,i._method=n,i):n}function ir(t,e){if(e in t){var n=t[e];return h(n)?n:function(){return n}}return d}function rr(t,e,n){return"options."+t+" has been deprecated in favour of options."+e+"."+(n?" You cannot specify both options, please use options."+e+".":"")}function sr(t,e,n){if(e in t){if(n in t)throw new Error(rr(e,n,!0));b(rr(e,n)),t[n]=t[e]}}function ar(t){sr(t,"beforeInit","onconstruct"),sr(t,"init","onrender"),sr(t,"complete","oncomplete"),sr(t,"eventDefinitions","events"),Qa(t.adaptors)&&sr(t,"adaptors","adapt")}function or(e,n,i,r,s){ar(r);for(var a in r)if(t(_f,a)){var o=r[a];"el"!==a&&h(o)?b(a+" is a Ractive option that does not expect a function and will be ignored","init"===e?i:null):i[a]=o}if(i.append&&i.enhance)throw new Error("Cannot use append and enhance at the same time");bf.forEach(function(t){t[e](n,i,r,s)}),Jc[e](n,i,r,s),pf[e](n,i,r,s),ff[e](n,i,r,s),ur(n.prototype,i,r)}function ur(e,n,i){for(var r in i)if(!Ef[r]&&t(i,r)){var s=i[r];h(s)&&((r in rm||"on"===r.slice(0,2)&&r.slice(2)in nc&&r in n)&&!Af.test(s.toString())&&b("Overriding Ractive prototype function '"+r+"' without calling the '"+Af+"' method can be very dangerous."),s=nr(e,r,s)),n[r]=s}}function hr(t){var e={};return t.forEach(function(t){return e[t]=!0}),e}function lr(t){return l(t)?Vi(t,function(t,e){return t.split(";").filter(function(t){return!!t.trim()}).map(e).reduce(function(t,e){var n=e.indexOf(":"),i=e.substr(0,n).trim();return t[i]=e.substr(n+1).trim(),t},{})}):{}}function cr(t){for(var e=t.split(jf),n=e.length;n--;)e[n]||e.splice(n,1);return e}function fr(t){var e=t.element,n=t.name;if("value"===n){if(t.interpolator&&(t.interpolator.bound=!0),"select"===e.name&&"value"===n)return e.getAttribute("multiple")?dr:pr;if("textarea"===e.name)return yr;if(null!=e.getAttribute("contenteditable"))return mr;if("input"===e.name){var i=e.getAttribute("type");if("file"===i)return d;if("radio"===i&&e.binding&&"name"===e.binding.attribute.name)return vr;if(~Tf.indexOf(i))return yr}return gr}var r=e.node;if(t.isTwoway&&"name"===n){if("radio"===r.type)return br;if("checkbox"===r.type)return wr}if("style"===n)return xr;if(0===n.indexOf("style-"))return kr;if("class"===n&&(!r.namespaceURI||r.namespaceURI===Ac))return _r;if(0===n.indexOf("class-"))return Er;if(t.isBoolean){var s=e.getAttribute("type");return!t.interpolator||"checked"!==n||"checkbox"!==s&&"radio"!==s||(t.interpolator.bound=!0),Sr}return t.namespace&&t.namespace!==t.node.namespaceURI?Cr:Ar}function dr(t){var e=this.getValue();Qa(e)||(e=[e]);var n=this.node.options,i=n.length;if(t)for(;i--;)n[i].selected=!1;else for(;i--;){var r=n[i],s=r._ractive?r._ractive.value:r.value;r.selected=N(e,s)}}function pr(t){var e=this.getValue();if(!this.locked){this.node._ractive.value=e;var n=this.node.options,i=n.length,r=!1;if(t)for(;i--;)n[i].selected=!1;else for(;i--;){var s=n[i],a=s._ractive?s._ractive.value:s.value;if(s.disabled&&s.selected&&(r=!0),a==e)return void(s.selected=!0)}r||(this.node.selectedIndex=-1)}}function mr(t){var e=this.getValue();this.locked||(t?this.node.innerHTML="":this.node.innerHTML=f(e)?"":e)}function vr(t){var e=this.node,n=e.checked,i=this.getValue();return t?e.checked=!1:(e.value=this.node._ractive.value=i,e.checked=this.element.compare(i,this.element.getAttribute("name")),void(n&&!e.checked&&this.element.binding&&this.element.binding.rendered&&this.element.binding.group.model.set(this.element.binding.group.getValue())))}function gr(t){if(!this.locked)if(t)this.node.removeAttribute("value"),this.node.value=this.node._ractive.value=null;else{var e=this.getValue();this.node.value=this.node._ractive.value=e,this.node.setAttribute("value",oi(e))}}function yr(t){if(!this.locked)if(t)this.node._ractive.value="",this.node.removeAttribute("value");else{var e=this.getValue();this.node._ractive.value=e;var n=oi(e);this.node.value!==n&&(this.node.value=n),this.node.setAttribute("value",n)}}function br(t){t?this.node.checked=!1:this.node.checked=this.element.compare(this.getValue(),this.element.binding.getValue())}function wr(t){var e=this,n=e.element,i=e.node,r=n.binding,s=this.getValue(),a=n.getAttribute("value");if(Qa(s)){for(var o=s.length;o--;)if(n.compare(a,s[o]))return void(r.isChecked=i.checked=!0);r.isChecked=i.checked=!1}else r.isChecked=i.checked=n.compare(s,a)}function xr(t){for(var e=t?{}:lr(this.getValue()||""),n=this.node.style,i=Wa(e),r=this.previous||[],s=0;s<i.length;){if(i[s]in n){var a=e[i[s]].replace("!important","");n.setProperty(i[s],a,a.length!==e[i[s]].length?"important":"")}s++}for(s=r.length;s--;)!~i.indexOf(r[s])&&r[s]in n&&n.setProperty(r[s],"","");this.previous=i}function kr(t){if(this.style||(this.style=Ee(this.name.substr(6))),!t||this.node.style.getPropertyValue(this.style)===this.last){var e=t?"":oi(this.getValue()),n=e.replace("!important","");this.node.style.setProperty(this.style,n,n.length!==e.length?"important":""),this.last=this.node.style.getPropertyValue(this.style)}}function _r(t){var e=t?[]:cr(oi(this.getValue())),n=this.node.className;n=void 0!==n.baseVal?n.baseVal:n;var i=cr(n),r=this.previous||[],s=e.concat(i.filter(function(t){return!~r.indexOf(t)})).join(" ");s!==n&&(l(this.node.className)?this.node.className=s:this.node.className.baseVal=s),this.previous=e}function Er(t){var e=this.name.substr(6),n=this.node.className;n=void 0!==n.baseVal?n.baseVal:n;var i=cr(n),r=t?!1:this.getValue();this.inlineClass||(this.inlineClass=e),r&&!~i.indexOf(e)?i.push(e):!r&&~i.indexOf(e)&&i.splice(i.indexOf(e),1),l(this.node.className)?this.node.className=i.join(" "):this.node.className.baseVal=i.join(" ")}function Sr(t){if(!this.locked)if(t)this.useProperty&&(this.node[this.propertyName]=!1),this.node.removeAttribute(this.propertyName);else if(this.useProperty)this.node[this.propertyName]=this.getValue();else{var e=this.getValue();e?this.node.setAttribute(this.propertyName,l(e)?e:""):this.node.removeAttribute(this.propertyName)}}function Ar(t){t?this.node.getAttribute(this.name)===this.value&&this.node.removeAttribute(this.name):(this.value=oi(this.getString()),this.node.setAttribute(this.name,this.value))}function Cr(t){t?this.value===this.node.getAttributeNS(this.namespace,this.name.slice(this.name.indexOf(":")+1))&&this.node.removeAttributeNS(this.namespace,this.name.slice(this.name.indexOf(":")+1)):(this.value=oi(this.getString()),this.node.setAttributeNS(this.namespace,this.name.slice(this.name.indexOf(":")+1),this.value))}function Or(){return Mf}function Nr(t,e){if(Rf.test(t))return[];var n=e?"svg":"div";return t?(Pf.innerHTML="<"+n+" "+t+"></"+n+">")&&I(Pf.childNodes[0].attributes):[]}function jr(t,e){for(var n=t.length;n--;)if(t[n].name===e.name)return!1;
return!0}function Tr(t,e){for(var n="xmlns:"+e;t;){if(t.hasAttribute&&t.hasAttribute(n))return t.getAttribute(n);t=t.parentNode}return Vc[e]}function Vr(){return Bf}function Pr(t,e,n){0===e?t.value=!0:"true"===e?t.value=!0:"false"===e||"0"===e?t.value=!1:t.value=e;var i=t.element[t.flag];return t.element[t.flag]=t.value,n&&!t.element.attributes.binding&&i!==t.value&&t.element.recreateTwowayBinding(),t.value}function Mr(t){Cf.call(this,t)}function Ir(){var t=this;return this.torndown?(b("ractive.teardown() was called on a Ractive instance that was already torn down"),Promise.resolve()):(this.shouldDestroy=!0,Rr(this,function(){return t.fragment.rendered?t.unrender():Promise.resolve()}))}function Rr(t,e){t.torndown=!0,t.fragment.unbind(),t._observers.slice().forEach(G),t.el&&t.el.__ractive_instances__&&P(t.el.__ractive_instances__,t);var n=e();return nc.teardown.fire(t),n.then(function(){nc.destruct.fire(t),t.viewmodel.teardown()}),n}function Br(t,e){if(t.applyValue=function(t){this.parent.value[e]=t,t&&t.viewmodel?(this.link(t.viewmodel.getRactiveModel(),e),this._link.markedAll()):(this.link(qa(Ko),e),this._link.markedAll())},"root"===e){var n=t.mark;t.mark=function(t){this._marking||(this._marking=!0,n.apply(this,t),this._marking=!1)}}return t.applyValue(t.parent.ractive[e],e),t._link.set=function(e){return t.applyValue(e)},t._link.applyValue=function(e){return t.applyValue(e)},t._link}function Kr(t,e){t._link&&t._link.implicit&&t._link.isDetached()&&t.attach(e);for(var n in t.childByKey)if(t.value)if(n in t.value)Kr(t.childByKey[n],e);else if(!t.childByKey[n]._link||t.childByKey[n]._link.isDetached()){var i=Je(e,n);i&&t.childByKey[n].link(i,n,{implicit:!0})}}function Lr(t){t._link&&t._link.implicit&&t.unlink();for(var e in t.childByKey)Lr(t.childByKey[e])}function Dr(t,e,i){var r=(t.constructor["_"+i]||[]).concat(n(e[i]||[])),s="on"===i?"once":i+"Once";r.forEach(function(e){var n=e[0],r=e[1];h(r)?t[i](n,r):u(r)&&h(r.handler)&&t[r.once?s:i](n,r.handler,qa(r))})}function Fr(e,n){za.DEBUG&&vo(),Ur(e),$r(e),Dr(e,n,"on"),!t(n,"delegate")&&e.parent&&e.parent.delegate!==e.delegate&&(e.delegate=!1),Qa(n.use)&&e.use.apply(e,n.use.filter(function(t){return t.construct})),nc.construct.fire(e,n),n.onconstruct&&n.onconstruct.call(e,rn(e),n);for(var i=$f.length;i--;){var r=$f[i];e[r]=$a(qa(e.constructor[r]||null),n[r])}for(i=qf.length;i--;){var s=qf[i];e[s]=$a(qa(e.constructor.prototype[s]),n[s])}e._attributePartial&&(e.partials["extra-attributes"]=e._attributePartial,delete e._attributePartial);var a=new Uf({adapt:zr(e,e.adapt,n),data:df.init(e.constructor,e,n),ractive:e});e.adapt=a.adaptors,e.viewmodel=a;for(var o in e.computed)Pn.call(e,o,e.computed[o])}function zr(t,e,n){function i(e){return l(e)&&(e=x("adaptors",t,e),e||m(Eo(e,"adaptor"))),e}e=e.map(i);var r=T(n.adapt).map(i),s=[e,r];return t.parent&&!t.isolated&&s.push(t.parent.viewmodel.adaptors),M.apply(null,s)}function Ur(t){t._guid="r-"+Hf++,t._subs=qa(null),t._nsSubs=0,t._config={},t.event=null,t._eventQueue=[],t._observers=[],t._children=[],t._children.byName={},t.children=t._children,t.component||(t.root=t,t.parent=t.container=null)}function $r(t){var e=t.component,n=t.constructor.attributes;if(n&&e){var i=e.template,r=i.m?i.m.slice():[],s=r.filter(function(t){return t.t===iu}).map(function(t){return t.n});n.required.forEach(function(t){~s.indexOf(t)||b("Component '"+e.name+"' requires attribute '"+t+"' to be provided")});for(var a=n.optional.concat(n.required),o=[],u=r.length;u--;){var h=r[u];h.t!==iu||~a.indexOf(h.n)?n.mapAll||h.t!==Bu&&h.t!==Ku&&h.t!==Lu||o.unshift(r.splice(u,1)[0]):n.mapAll?o.unshift({t:iu,n:h.n,f:[{t:Zo,r:"~/"+h.n}]}):o.unshift(r.splice(u,1)[0])}o.length&&(e.template={t:i.t,e:i.e,f:i.f,m:r,p:i.p}),t._attributePartial=o}}function qr(t){this.item&&this.removeChild(this.item);var e=t.instance;t.anchor=this,t.up=this.up,t.name=t.nameOption||this.name,this.name=t.name,e.isolated||e.viewmodel.attached(this.up),this.rendered&&Zr(this,t)}function Hr(t){this.item===t&&(Wr(this,t),this.name=this.template.n)}function Zr(t,e){if(t.rendered){e.shouldDestroy=!1,e.up=t.up,t.item=e,t.instance=e.instance;var n=t.up.findNextNode(t);e.instance.fragment.rendered&&e.instance.unrender(),e.partials=e.instance.partials,e.instance.partials=$a(qa(e.partials),e.partials,t._partials),e.instance.fragment.unbind(!0),e.instance.fragment.componentParent=t.up,e.instance.fragment.bind(e.instance.viewmodel),t.attributes.forEach(W),t.eventHandlers.forEach(W),t.attributes.forEach(nt),t.eventHandlers.forEach(nt);var i=t.up.findParentNode();fa(e.instance,i,i.contains(n)?n:null,t.occupants),e.lastBound!==t&&(e.lastBound=t)}}function Wr(t,e){t.rendered&&(e.shouldDestroy=!0,e.instance.unrender(),t.eventHandlers.forEach(at),t.attributes.forEach(at),t.eventHandlers.forEach(st),t.attributes.forEach(st),e.instance.el=e.instance.anchor=null,e.instance.fragment.componentParent=null,e.up=null,e.anchor=null,t.item=null,t.instance=null)}function Gr(){var t=Wf;Wf=[],t.forEach(On)}function Qr(t){t.deps.length||t.refs||t.links.length||t.teardown()}function Yr(t,e,n,i){void 0===i&&(i={}),e&&e.f&&e.f.s&&(i.register?(t.model=new Xf(n,e.f),t.model.register(t)):t.fn=dt(e.f.s,e.f.r.length))}function Jr(t,e,n,i){return void 0===i&&(i={}),e.f.r.map(function(t,e){var r;return i.specialRef&&(r=i.specialRef(t,e))?r:r=Je(n,t)})}function Xr(t){t.model&&t.model.unregister(t)}function ts(){this._ractive.binding.handleChange()}function es(t,e,n){var i=t+"-bindingGroup";return e[i]||(e[i]=new ld(i,e,n))}function ns(){var t=this,e=this.bindings.filter(function(t){return t.node&&t.node.checked}).map(function(t){return t.element.getAttribute("value")}),n=[];return e.forEach(function(e){t.bindings[0].arrayContains(n,e)||n.push(e)}),n}function is(){ts.call(this);var t=this._ractive.binding.model.get();this.value=void 0==t?"":t}function rs(t){var e;return function(){var n=this;e&&clearTimeout(e),e=setTimeout(function(){var t=n._ractive.binding;t.rendered&&ts.call(n),e=null},t)}}function ss(t){return t.selectedOptions?I(t.selectedOptions):t.options?I(t.options).filter(function(t){return t.selected}):[]}function as(t){return bd[t]||(bd[t]=[])}function os(){var t=this.bindings.filter(function(t){return t.node.checked});return t.length>0?t[0].element.getAttribute("value"):void 0}function us(t){return t&&t.template.f&&1===t.template.f.length&&!t.template.f[0].s?t.template.f[0].t===Zo?!0:(t.template.f[0].t===Wo&&b("It is not possible create a binding using a triple mustache."),!1):!1}function hs(t){var e=t.name,n=t.attributeByName;if("input"===e||"textarea"===e||"select"===e||n.contenteditable){var i=us(n.value),r=us(n.contenteditable),s=t.getAttribute("contenteditable");if((s||r)&&i)return pd;if("input"===e){var a=t.getAttribute("type");if("radio"===a){var o=us(n.name),u=us(n.checked);return o&&u?(b("A radio input can have two-way binding on its name attribute, or its checked attribute - not both",{ractive:t.root}),xd):o?xd:u?wd:null}if("checkbox"===a){var h=us(n.name),l=us(n.checked);return h&&l?hd:h?dd:l?hd:null}return"file"===a&&i?vd:"number"===a&&i?yd:"range"===a&&i?yd:i?md:null}return"select"===e&&i?t.getAttribute("multiple")?gd:kd:"textarea"===e&&i?md:null}}function ls(t){var e=t.attributeByName.name;return"radio"===t.getAttribute("type")&&(e||{}).interpolator&&t.getAttribute("value")===e.interpolator.model.get()}function cs(t){var e=t.toString();return e?" "+e:""}function fs(t){var e=t.getAttribute("xmlns");if(e)return e;if("svg"===t.name)return Oc;var n=t.parent;return n?"foreignobject"===n.name?Ac:n.node.namespaceURI:t.ractive.el.namespaceURI}function ds(){Sd=!0}function ps(){Ad=!0}function ms(){Cd=!0}function vs(t){var e,n=t.type,i=t.currentTarget,r=i._ractive&&i._ractive.proxy,s=t.target,a=!0,o=!1;Sd=Ad=Cd=!1;var u=t.stopPropagation,h=t.stopImmediatePropagation,l=t.preventDefault;for(t.stopPropagation=ds,t.stopImmediatePropagation=ps,t.preventDefault=ms;a&&s&&s!==i;){var c=s._ractive&&s._ractive.proxy;if(c&&c.up.delegate===r&&gs(t,s,i)&&(e=c.listeners&&c.listeners[n]))for(var f=e.length,d=0;f>d;d++){if(a=e[d].call(s,t)!==!1&&a,Ad){a=!1;break}Sd&&(a=!1),Cd&&!o&&(o=!0,l.call(t))}s=s.parentNode||s.correspondingUseElement}return a&&(a=!Sd&&!Ad),Sd&&u.call(t),Ad&&h.call(t),t.stopPropagation=u,t.stopImmediaitePropagation=h,t.preventDefault=l,a}function gs(t,e,n){if(Od&&t instanceof Od)for(var i=e;i&&i!==n;){if(i.disabled)return!1;i=i.parentNode||i.correspondingUseElement}return!0}function ys(t){var e,n=this,i=this._ractive.proxy;if(i.listeners&&(e=i.listeners[t.type]))for(var r=e.length,s=0;r>s;s++)e[s]&&e[s].call(n,t)}function bs(){var t=this._ractive.proxy;jl.start(),t.formBindings.forEach(ws),jl.end()}function ws(t){t.model.set(t.resetValue)}function xs(t,e,n,i){if(n){var r=n[0];if(r&&3===r.nodeType){var s=r.nodeValue.indexOf(i);n.shift(),0===s?r.nodeValue.length!==i.length&&n.unshift(r.splitText(i.length)):r.nodeValue=i}else r=t.node=Xa.createTextNode(i),n[0]?e.insertBefore(r,n[0]):e.appendChild(r);t.node=r}else t.node||(t.node=Xa.createTextNode(i)),e.appendChild(t.node)}function ks(t){t.base&&t.base.unregister(t.proxy),t.models&&t.models.forEach(function(e){e.unregister&&e.unregister(t)})}function _s(t){var e,n,i=t.deps.length;for(e=0;i>e;e++)n=t.deps[e],n.pathChanged&&n.pathChanged(),n.fragment&&n.fragment.pathModel&&n.fragment.pathModel.applyValue(t.getKeypath());for(i=t.children.length,e=0;i>e;e++)_s(t.children[e])}function Es(t,e){return e.r?Je(t,e.r):e.x?new Xf(t,e.x):e.rx?new Fd(t,e.rx):void 0}function Ss(t){$d.call(this,t)}function As(t){t.sp();var e=Nt(t);if(!e)return null;var n={key:e};if(t.sp(),!t.matchString(":"))return null;t.sp();var i=t.read();return i?(n.value=i.v,n):null}function Cs(t,e){var n=new tp(t,{values:e});return n.result}function Os(t){var e=t.template.f,n=t.element.instance.viewmodel,i=n.value;if(1===e.length&&e[0].t===Zo){var r=Es(t.up,e[0]),s=r.get(!1);e[0].s?!u(s)||e[0].x?n.joinKey(A(t.name)).set(s):b("Cannot copy non-computed object value from static mapping '"+t.name+"'"):(t.model=r,t.link=n.createLink(t.name,r,e[0].r,{mapping:!0}),f(s)&&!r.isReadonly&&t.name in i&&r.set(i[t.name])),r!==t.model&&r.unregister()}else t.boundFragment=new Qp({owner:t,template:e}).bind(),t.model=n.joinKey(A(t.name)),t.model.set(t.boundFragment.valueOf()),t.boundFragment.bubble=function(){Qp.prototype.bubble.call(t.boundFragment),jl.scheduleTask(function(){t.boundFragment.update(),t.model.set(t.boundFragment.valueOf())})}}function Ns(t,n,i){var r=js(t,n,i||{});if(r)return r;if(r=Sl.fromId(n,{noThrow:!0})){var s=Sl.parseFor(r,t);return s.p&&e(t.partials,s.p),t.partials[n]=s.t}}function js(e,n,i){var r=Ps(n,i.owner);if(r)return r;var s=k("partials",e,n);if(s){r=s.partials[n];var a;if(h(r)){if(a=r,a.styleSet)return a;a=r.bind(s),a.isOwner=t(s.partials,n),r=a.call(e,Sl)}if(!r&&""!==r)return void b(_o,n,"partial","partial",{ractive:e});if(!Sl.isParsed(r)){var o=Sl.parseFor(r,s);o.p&&b("Partials ({{>%s}}) cannot contain nested inline partials",n,{ractive:e});var u=a?s:Ts(s,n);u.partials[n]=r=o.t}return a&&(r._fn=a),r.v?(pt(r),s.partials[n]=r.t):r}}function Ts(e,n){return t(e.partials,n)?e:Vs(e.constructor,n)}function Vs(e,n){return e?t(e.partials,n)?e:Vs(e.Parent,n):void 0}function Ps(e,n){if(n){if(n.template&&n.template.p&&!Qa(n.template.p)&&t(n.template.p,e))return n.template.p[e];if(n.up&&n.up.owner)return Ps(e,n.up.owner)}}function Ms(t){Ss.call(this,t);var e=t.template;e.t===au?this.yielder=1:e.t===Jo&&(this.type=Xo,this.macro=t.macro)}function Is(t,e){t.partial=t.last=e,Rs(t);var n={owner:t,template:t.partial};t.yielder&&(n.ractive=t.container.parent),t.fn&&(n.cssIds=t.fn._cssIds),t.fragment=new Qp(n)}function Rs(t){t.template.c&&(t.partial=[{t:Go,n:ju,f:t.partial}],$a(t.partial[0],t.template.c),t.yielder?t.partial[0].y=t:t.partial[0].z=t.template.z)}function Bs(t,e,n){var i=e;return Qa(i)?t.partial=i:i&&u(i)?Qa(i.t)?t.partial=i.t:l(i.template)&&(t.partial=Fs(i.template,i.template,t.ractive).t):h(i)&&i.styleSet?(t.fn=i,t.fragment&&(t.fragment.cssIds=i._cssIds)):null!=i&&(i=Ns(t.ractive,""+i,t.containerFragment||t.up),i?(t.name=e,i.styleSet?(t.fn=i,t.fragment&&(t.fragment.cssIds=i._cssIds)):t.partial=i):n?t.partial=Fs(""+e,""+e,t.ractive).t:t.name=e),t.partial}function Ks(t){if(Bs(this,t,!0),!this.initing){if(this.dirtyTemplate=!0,this.fnTemplate=this.partial,!this.updating){var e=jl.start();return this.bubble(),jl.end(),e}this.bubble(),jl.promise()}}function Ls(t,e){var n=this.fragment.aliases||(this.fragment.aliases={});e?n[e]=this._data.joinAll(A(t)):n[t]=this._data}function Ds(e){var n=e.fn,i=e.fragment,r=e.template=$a({},e.template),s=e.handle=i.getContext({proxy:e,aliasLocal:Ls,name:e.template.e||e.name,attributes:{},setTemplate:Ks.bind(e),template:r,macro:n});if(r.p||(r.p={}),r.p=s.partials=$a({},r.p),t(r.p,"content")||(r.p.content=r.f||[]),Qa(n.attributes)){e._attrs={};var a=function(){this.dirty=!0,e.dirtyAttrs=!0,e.bubble()};if(Qa(r.m)){var o=r.m;r.p[rp]=r.m=o.filter(function(t){return!~n.attributes.indexOf(t.n)}),o.filter(function(t){return~n.attributes.indexOf(t.n)}).forEach(function(t){var n=new Qp({template:t.f,owner:e});n.bubble=a,n.findFirstNode=d,e._attrs[t.n]=n})}else r.p[rp]=[]}else r.p[rp]=r.m;e._attrs&&(Wa(e._attrs).forEach(function(t){e._attrs[t].bind()}),e.refreshAttrs()),e.initing=1,e.proxy=n.call(e.ractive,s,s.attributes)||{},e.partial||(e.partial=[]),e.fnTemplate=e.partial,e.initing=0,Rs(e),i.resetTemplate(e.partial)}function Fs(t,e,n){var i;try{i=Sl.parse(e,Sl.getParseOptions(n))}catch(r){b("Could not parse partial from expression '"+t+"'\n"+r.message)}return i||{t:[]}}function zs(t){var e,n,i=t;t:for(;i;){for(n=0;!n&&i;){if(i.owner.type===Jo&&(n=i.owner),i.owner.ractive&&i.owner.ractive.delegate===!1)break t;i=i.parent||i.componentParent}if(n.delegate===!1)break t;for(e=n.delegate||n;i&&!i.iterations;){if(i.owner.ractive&&i.owner.ractive.delegate===!1)break t;i=i.parent||i.componentParent}}return e}function Us(t,e,n,i){var r=t.context?qs(t,e,n):void 0;e.key=n,e.index=i,e.context=r,t.source&&(e.lastValue=r&&r.get()),e.idxModel&&e.idxModel.applyValue(i),e.keyModel&&e.keyModel.applyValue(n),e.pathModel&&(e.pathModel.context=r,e.pathModel.applyValue(r.getKeypath())),e.rootModel&&(e.rootModel.context=r,e.rootModel.applyValue(r.getKeypath(e.ractive.root)));var s=e.aliases;t.aliases&&t.aliases.forEach(function(t){"."===t.x.r?s[t.n]=r:"@index"===t.x.r?s[t.n]=e.getIndex():"@key"===t.x.r?s[t.n]=e.getKey():"@keypath"===t.x.r?s[t.n]=e.getKeypath():"@rootpath"===t.x.r&&(s[t.n]=e.getKeypath(!0))})}function $s(t,e){var n=t.context.get()||[];return e===!0?n.slice():n.map(function(t){return e.reduce(function(t,e){return t&&t[e]},t)})}function qs(t,e,n){if(t.source){var i,r=t.source.model.get();if(r.indexOf&&~(i=r.indexOf(t.context.joinKey(n).get())))return t.source.model.joinKey(i)}return t.context.joinKey(n)}function Hs(t){return!t||Qa(t)&&0===t.length||s(t)&&0===Wa(t).length}function Zs(t,e){return e||Qa(t)?Nu:a(t)?Tu:f(t)?null:Cu}function Ws(t,e){var n=(t.containerFragment||t.up).findNextNode(t);if(n){var i=ri();e.render(i),n.parentNode.insertBefore(i,n)}else e.render(t.up.findParentNode())}function Gs(){mp=!Xa[vp]}function Qs(){mp=!1}function Ys(){mp=!0}function Js(t){return t?(Sp.test(t)&&(t="-"+t),t.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()})):""}function Xs(e,n,i){for(var r=n;r;){if(t(r,e)&&(f(i)||i?r.rendering:r.unrendering))return r[e];r=r.component&&r.component.ractive}return n[e]}function ta(t,e){var n=[];if(null==t||""===t)return n;var i,r,s;Up&&(r=$p[e.tagName])?(i=ea("DIV"),i.innerHTML=r[0]+t+r[1],i=i.querySelector(".x"),"SELECT"===i.tagName&&(s=i.options[i.selectedIndex])):e.namespaceURI===Oc?(i=ea("DIV"),i.innerHTML='<svg class="x">'+t+"</svg>",i=i.querySelector(".x")):"TEXTAREA"===e.tagName?(i=vc("div"),"undefined"!=typeof i.textContent?i.textContent=t:i.innerHTML=t):(i=ea(e.tagName),i.innerHTML=t,"SELECT"===i.tagName&&(s=i.options[i.selectedIndex]));for(var a;a=i.firstChild;)n.push(a),i.removeChild(a);var o;if("SELECT"===e.tagName)for(o=n.length;o--;)n[o]!==s&&(n[o].selected=!1);return n}function ea(t){return qp[t]||(qp[t]=vc(t))}function na(e,n){var i,r=k("components",e,n);if(r&&(i=r.components[n],i&&!i.isInstance))if(i["default"]&&i["default"].isInstance)i=i["default"];else if(!i.then&&h(i)){var s=i.bind(r);if(s.isOwner=t(r.components,n),i=s(),!i)return void b(_o,n,"component","component",{ractive:e});l(i)&&(i=na(e,i)),i._fn=s,r.components[n]=i}return i}function ia(t,e){var n=e.template.p||{},i=e.template.e,r=$a({},e,{template:{t:Jo,e:i},macro:function(r){r.setTemplate(n["async-loading"]||[]),t.then(function(t){e.up.ractive.components[i]=t,n["async-loaded"]?(r.partials.component=[e.template],r.setTemplate(n["async-loaded"])):r.setTemplate([e.template])},function(t){n["async-failed"]?(r.aliasLocal("error","error"),r.set("@local.error",t),r.setTemplate(n["async-failed"])):r.setTemplate([])})}});return new Ms(r)}function ra(t,e,n){var i=t.f.find(function(t){return t.t===e});return i?i.n?[{t:19,n:54,f:i.f||[],z:[{n:i.n,x:{r:"__await."+n}}]}]:i.f||[]:[]}function sa(t){var e=t.template,n=ra(e,Mu,"value"),i=ra(e,Iu,"error"),r=ra(e,Go),s=ra(e,Vu),a=$a({},t,{template:{t:Jo,m:[{t:iu,n:"for",f:[{t:Zo,r:e.r,rx:e.rx,x:e.x}]}]},macro:function(t,e){function a(e){e["for"]&&h(e["for"].then)?(t.setTemplate(r),e["for"].then(function(e){t.set("@local.value",e),t.setTemplate(n)},function(e){t.set("@local.error",e),t.setTemplate(i)})):f(e["for"])?t.setTemplate(s):(t.set("@local.value",e["for"]),t.setTemplate(n))}return t.aliasLocal("__await"),a(e),{update:a}}});return a.macro.attributes=["for"],new Ms(a)}function aa(t){if(l(t.template))return new dp(t);var e,n,i=t.template.t;if(i===Jo){if(n=t.template.e,e=k("partials",t.up.ractive,n),e&&(e=e.partials[n],e.styleSet))return t.macro=e,new Ms(t);if(e=na(t.up.ractive,n)){if(h(e.then))return ia(e,t);if(h(e))return new Zf(t,e)}return new(e=Gp[n.toLowerCase()]||Ed)(t)}var r;if(i===iu){var s=t.owner;(!s||s.type!==nu&&s.type!==su&&s.type!==Jo)&&(s=Un(t.up)),t.element=s,r=s.type===su||s.type===nu?ep:Kf}else r=Wp[i];if(!r)throw new Error("Unrecognised item type "+i);return new r(t)}function oa(t,e,n,i){return void 0===i&&(i=0),t.map(function(t){if(t.type===Ho)return t.template;if(t.fragment)return t.fragment.iterations?t.fragment.iterations.map(function(t){return oa(t.items,e,n,i)}).join(""):oa(t.fragment.items,e,n,i);var r=n+"-"+i++,s=t.model||t.newModel;return e[r]=s?s.wrapper?s.wrapperValue:s.get():void 0,"${"+r+"}"}).join("")}function ua(t,e,n){void 0===n&&(n={});for(var i=0;i<t.length;i++)if(!n[t[i].n]){var r=Es(e,t[i].x);n[t[i].n]=r,r.reference()}return n}function ha(t){var e,n=an(this);if(t){if(this.rootModel)return this.rootModel;this.rootModel=new sp(this.context.getKeypath(this.ractive.root),this.context,this.ractive.root),e=this.rootModel}else{if(this.pathModel)return this.pathModel;this.pathModel=new sp(this.context.getKeypath(),this.context),e=this.pathModel}return n&&n.context&&n.getKeypath(t).registerChild(e),e}function la(t,e,n){var i=t.viewmodel.computed;if(i)for(var r in i)r in t.viewmodel.value&&i[r]&&!i[r].isReadonly&&i[r].set(t.viewmodel.value[r]);wf.init(t.constructor,t,e),Qa(e.use)&&t.use.apply(t,e.use.filter(function(t){return!t.construct})),nc.config.fire(t),nc.init.begin(t);var s=t.fragment=ca(t,n);if(s&&s.bind(t.viewmodel),nc.init.end(t),Dr(t,e,"observe"),s){var a=t.el=t.target=si(t.el||t.target);if(a&&!t.component){var o=t.render(a,t.append);za.DEBUG_PROMISES&&o["catch"](function(e){throw w("Promise debugging is enabled, to help solve errors that happen asynchronously. Some browsers will log unhandled promise rejections, in which case you can safely disable promise debugging:\n  Ractive.DEBUG_PROMISES = false;"),b("An error happened during rendering",{ractive:t}),v(e),e})}}}function ca(t,e){if(void 0===e&&(e={}),t.template){var n=[].concat(t.constructor._cssIds||[],e.cssIds||[]);return new Qp({owner:t,template:t.template,cssIds:n})}}function fa(t,e,n,i){t.rendering=!0;var r=jl.start();if(jl.scheduleTask(function(){return nc.render.fire(t)},!0),t.fragment.rendered)throw new Error("You cannot call ractive.render() on an already rendered instance! Call ractive.unrender() first");if(t.destroyed&&(t.destroyed=!1,t.fragment=ca(t).bind(t.viewmodel)),n=si(n)||t.anchor,t.el=t.target=e,t.anchor=n,t.cssId&&Ci(),e)if((e.__ractive_instances__||(e.__ractive_instances__=[])).push(t),n){var s=Xa.createDocumentFragment();t.fragment.render(s),e.insertBefore(s,n)}else t.fragment.render(e,i);return jl.end(),t.rendering=!1,r.then(function(){t.torndown||nc.complete.fire(t)})}function da(t,e){if(this.torndown)return b("ractive.render() was called on a Ractive instance that was already torn down"),Promise.resolve();if(t=si(t)||this.el,!this.append&&t){var n=t.__ractive_instances__;n&&n.forEach(rt),this.enhance||(t.innerHTML="")}var i=this.enhance?I(t.childNodes):null,r=fa(this,t,e,i);if(i)for(;i.length;)t.removeChild(i.pop());return r}function pa(t){if(t=t||{},!u(t))throw new Error("The reset method takes either no arguments, or an object containing new data");t=df.init(this.constructor,this,{data:t});var e=jl.start(),n=this.viewmodel.wrapper;n&&n.reset?n.reset(t)===!1&&this.viewmodel.set(t):this.viewmodel.set(t);for(var i,r=wf.reset(this),s=r.length;s--;)if(Jp.indexOf(r[s])>-1){i=!0;break}return i&&(nc.unrender.fire(this),this.fragment.resetTemplate(this.template),nc.render.fire(this),nc.complete.fire(this)),jl.end(),nc.reset.fire(this,t),e}function ma(t,e,n,i){t.forEach(function(t){if(t.type===Xo&&(t.refName===e||t.name===e))return t.inAttribute=n,void i.push(t);if(t.fragment)ma(t.fragment.iterations||t.fragment.items,e,n,i);else if(Qa(t.items))ma(t.items,e,n,i);else if(t.type===su&&t.instance){if(t.instance.partials[e])return;ma(t.instance.fragment.items,e,n,i)}t.type===Jo&&Qa(t.attributes)&&ma(t.attributes,e,!0,i)})}function va(t,e){var n=[];ma(this.fragment.items,t,!1,n);var i=jl.start();return this.partials[t]=e,n.forEach(Y),jl.end(),i}function ga(t){pf.init(null,this,{template:t});var e=this.transitionsEnabled;this.transitionsEnabled=!1;var n=this.component;n&&(n.shouldDestroy=!0),this.unrender(),n&&(n.shouldDestroy=!1);var i=jl.start();this.fragment.unbind().unrender(!0),this.fragment=new Qp({template:this.template,root:this,owner:this});var r=ri();return this.fragment.bind(this.viewmodel).render(r),n&&!n.external?this.fragment.findParentNode().insertBefore(r,n.findNextNode()):this.el.insertBefore(r,this.anchor),jl.end(),this.transitionsEnabled=e,i}function ya(t,e,n){var i=this,r=u(t)?e:n;return on(hn(i,t,e,r&&r.isolated),r)}function ba(t,e,n){var i=c(e)?-e:-1,r=u(e)?e:n;return fn(this,t,i,r)}function wa(t,e){if(!l(t))throw new TypeError(ko);return on(un(this,t,null,e&&e.isolated).map(function(t){return[t,!t.get()]}),e)}function xa(){var t=[this.cssId].concat(this.findAllComponents().map(function(t){return t.cssId})),e=Wa(t.reduce(function(t,e){return t[e]=!0,t},{}));return Oi(e)}function ka(){return this.fragment.toString(!0)}function _a(){return this.fragment.toString(!1)}function Ea(t,e,n){e instanceof HTMLElement||s(e)&&(n=e),e=e||this.event.node,e&&e._ractive||m("No node was supplied for transition "+t),n=n||{};var i=e._ractive.proxy,r=new Dp({owner:i,up:i.up,name:t,params:n});r.bind();var a=jl.start();return jl.registerTransition(r),jl.end(),a.then(function(){return r.unbind()}),a}function Sa(t){var e=jl.start();return this.viewmodel.joinAll(A(t),{lastLink:!1}).unlink(),jl.end(),e}function Aa(){if(!this.fragment.rendered)return b("ractive.unrender() was called on a Ractive instance that was not rendered"),Promise.resolve();this.unrendering=!0;var t=jl.start();nc.unrendering.fire(this);var e=!this.component||(this.component.anchor||{}).shouldDestroy||this.component.shouldDestroy||this.shouldDestroy;return this.fragment.unrender(e),e&&(this.destroyed=!0),P(this.el.__ractive_instances__,this),nc.unrender.fire(this),jl.end(),this.unrendering=!1,t}function Ca(t,e){var n=jl.start();return t?this.viewmodel.joinAll(A(t)).updateFromBindings(e!==!1):this.viewmodel.updateFromBindings(!0),jl.end(),n}function Oa(){for(var t=this,e=[],n=arguments.length;n--;)e[n]=arguments[n];return e.forEach(function(e){e({proto:t,Ractive:t.constructor.Ractive,instance:t})}),this}function Na(t){return t&&t instanceof this}function ja(t,e){return this._cssModel.joinAll(A(t)).get(!0,e)}function Ta(t,e){if(sm.find(function(e){return e.id===t}))throw new Error("Extra styles with the id '"+t+"' have already been added.");sm.push({id:t,css:e}),this.css||Object.defineProperty(this,"css",{configurable:!1,writable:!1,value:Va}),this._cssDef||(Object.defineProperty(this,"_cssDef",{configurable:!0,writable:!1,value:{transform:!1,id:"Ractive.addStyle"}}),Ai(this._cssDef)),Fi(this),Ci(!0)}function Va(t){return sm.map(function(e){return"\n/* ---- extra style "+e.id+" */\n"+(h(e.css)?e.css(t):e.css)}).join("")}function Pa(t){return!!sm.find(function(e){return e.id===t})}function Ma(t,e,n){var i=u(t)?e:n,r=Dl;return on(hn({viewmodel:r},t,e,!0),i)}function Ia(t,e){return Dl.joinAll(A(t)).get(!0,e)}function Ra(){for(var t=this,e=[],n=arguments.length;n--;)e[n]=arguments[n];return e.forEach(function(e){h(e)&&e({proto:t.prototype,Ractive:t.Ractive,instance:t})}),this}function Ba(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return t.length?t.reduce(La,this):La(this)}function Ka(t,e){return void 0===e&&(e={}),La(this,e,t)}function La(t,e,i){void 0===e&&(e={});var r,s=h(i)&&i;if(e.prototype instanceof za)throw new Error("Ractive no longer supports multiple inheritance.");if(s){if(!(s.prototype instanceof t))throw new Error("Only classes that inherit the appropriate prototype may be used with extend");if(!am.test(s.toString()))throw new Error("Only classes that call super in their constructor may be used with extend");r=s.prototype}else s=function(t){return this instanceof s?void(t&&t.component===!0||(Fr(this,t||{}),la(this,t||{},{}))):new s(t)},r=qa(t.prototype),r.constructor=s,s.prototype=r;if(Za(s,{defaults:{value:r},extend:{value:Ba,writable:!0,configurable:!0},extendWith:{value:Ka,writable:!0,configurable:!0},extensions:{value:[]},use:{value:Ra},isInstance:{value:Na},Parent:{value:t},Ractive:{value:za},styleGet:{value:ja.bind(s),configurable:!0},styleSet:{value:Li.bind(s),configurable:!0}}),wf.extend(t,r,e,s),s._on=(t._on||[]).concat(n(e.on)),s._observe=(t._observe||[]).concat(n(e.observe)),t.extensions.push(s),e.attributes){var a;a=Qa(e.attributes)?{optional:e.attributes,required:[]}:e.attributes,Qa(a.required)||(a.required=[]),Qa(a.optional)||(a.optional=[]),s.attributes=a}return df.extend(t,r,e,s),Ha(s,"helpers",{writable:!0,value:r.helpers}),Qa(e.use)&&s.use.apply(s,e.use),s}function Da(t,e){if(!h(t))throw new Error("The macro must be a function");return $a(t,e),Za(t,{extensions:{value:[]},_cssIds:{value:[]},cssData:{value:$a(qa(this.cssData),t.cssData||{})},styleGet:{value:ja.bind(t)},styleSet:{value:Li.bind(t)}}),Ha(t,"_cssModel",{value:new lf(t)}),t.css&&$i(t,t,t),this.extensions.push(t),t}function Fa(t,e,n){return x(e,n,t)}function za(t){return this instanceof za?void(t&&t.component||(Fr(this,t||{}),la(this,t||{},{}))):new za(t)}Object.assign||(Object.assign=function(t){for(var e=[],n=arguments.length-1;n-->0;)e[n]=arguments[n+1];if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(t),r=e.length,s=0;r>s;s++){var a=e[s];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(i[o]=a[o])}return i});var Ua=Object,$a=Ua.assign,qa=Ua.create,Ha=Ua.defineProperty,Za=Ua.defineProperties,Wa=Ua.keys,Ga=Object.prototype.toString,Qa=Array.isArray;if(Array.prototype.find||Ha(Array.prototype,"find",{value:function(e,n){if(null===this||f(this))throw new TypeError("Array.prototype.find called on null or undefined");if(!h(e))throw new TypeError(e+" is not a function");for(var i=Object(this),r=i.length>>>0,s=0;r>s;s++)if(t(i,s)&&e.call(n,i[s],s,i))return i[s];return void 0},configurable:!0,writable:!0}),"undefined"!=typeof window&&window.Node&&window.Node.prototype&&!window.Node.prototype.contains&&(Node.prototype.contains=function(t){var e=this;if(!t)throw new TypeError("node required");do if(e===t)return!0;while(t=t&&t.parentNode);return!1}),"undefined"!=typeof window&&window.performance&&!window.performance.now){window.performance=window.performance||{};var Ya=Date.now();window.performance.now=function(){return Date.now()-Ya}}var Ja="undefined"!=typeof window?window:null,Xa=Ja?document:null,to=!!Xa,eo="undefined"!=typeof global?global:Ja,no="undefined"!=typeof console&&h(console.warn)&&h(console.warn.apply),io=Xa?Xa.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"):!1,ro=["o","ms","moz","webkit"];if(!eo.Promise){var so={},ao={},oo={},uo=eo.Promise=function(t){var e,n,i=[],r=[],s=so,a=function(t){return function(a){s===so&&(e=a,s=t,n=lo(s===ao?i:r,e),ho(n))}},o=a(ao),u=a(oo);try{t(o,u)}catch(l){u(l)}return{then:function(t,e){var a=new uo(function(o,u){var l=function(t,e,n){h(t)?e.push(function(e){try{co(a,t(e),o,u)}catch(n){u(n)}}):e.push(n)};l(t,i,o),l(e,r,u),s!==so&&ho(n)});return a},"catch":function(t){return this.then(null,t)},"finally":function(t){return this.then(function(e){return t(),e},function(e){throw t(),e})}}};uo.all=function(t){return new uo(function(e,n){var i,r,s=[];if(!t.length)return void e(s);var a=function(t,r){t&&h(t.then)?t.then(function(t){s[r]=t,--i||e(s)},n):(s[r]=t,--i||e(s))};for(i=r=t.length;r--;)a(t[r],r)})},uo.race=function(t){return new uo(function(e,n){function i(t){s&&(s=!1,e(t))}function r(t){s&&(s=!1,n(t))}for(var s=!0,a=0;a<t.length;a++)t[a]&&h(t[a].then)&&t[a].then(i,r)})},uo.resolve=function(t){return t&&h(t.then)?t:new uo(function(e){e(t)})},uo.reject=function(t){return t&&h(t.then)?t:new uo(function(e,n){n(t)})};var ho=function(t){setTimeout(t,0)},lo=function(t,e){return function(){for(var n=void 0;n=t.shift();)n(e)}},co=function(t,e,n,i){var r;if(e===t)throw new TypeError("A promise's fulfillment handler cannot return the same promise");if(e instanceof uo)e.then(n,i);else if(e&&(u(e)||h(e))){try{r=e.then}catch(s){return void i(s)}if(h(r)){var a,o=function(e){a||(a=!0,co(t,e,n,i))},l=function(t){a||(a=!0,i(t))};try{r.call(e,o,l)}catch(s){if(!a)return i(s),void(a=!0)}}else n(e)}else n(e)}}if(!("undefined"==typeof window||window.requestAnimationFrame&&window.cancelAnimationFrame)){var fo=0;window.requestAnimationFrame=function(t){var e=Date.now(),n=Math.max(0,16-(e-fo)),i=window.setTimeout(function(){t(e+n)},n);return fo=e+n,i},window.cancelAnimationFrame=function(t){clearTimeout(t)}}var po,mo,vo,go={el:void 0,append:!1,delegate:!0,enhance:!1,template:null,allowExpressions:!0,delimiters:["{{","}}"],tripleDelimiters:["{{{","}}}"],staticDelimiters:["[[","]]"],staticTripleDelimiters:["[[[","]]]"],csp:!0,interpolate:!1,preserveWhitespace:!1,preserveStandaloneSections:!1,sanitize:!1,stripComments:!0,contextLines:0,data:qa(null),helpers:qa(null),computed:qa(null),syncComputedChildren:!1,resolveInstanceMembers:!1,warnAboutAmbiguity:!1,adapt:[],isolated:!0,twoway:!0,lazy:!1,noIntro:!1,noOutro:!1,transitionsEnabled:!0,complete:void 0,nestedTransitions:!0,css:null,noCSSTransform:!1},yo={linear:function(t){return t},easeIn:function(t){return Math.pow(t,3)},easeOut:function(t){return Math.pow(t-1,3)+1},easeInOut:function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)}},bo={};if(no){var wo=["%cRactive.js %c1.4.1 %cin debug mode, %cmore...","color: rgb(114, 157, 52); font-weight: normal;","color: rgb(85, 85, 85); font-weight: normal;","color: rgb(85, 85, 85); font-weight: normal;","color: rgb(82, 140, 224); font-weight: normal; text-decoration: underline;"],xo="You're running Ractive 1.4.1 in debug mode - messages will be printed to the console to help you fix problems and optimise your application.\n\nTo disable debug mode, add this line at the start of your app:\n  Ractive.DEBUG = false;\n\nTo disable debug mode when your app is minified, add this snippet:\n  Ractive.DEBUG = /unminified/.test(function(){/*unminified*/});\n\nGet help and support:\n  http://ractive.js.org\n  http://stackoverflow.com/questions/tagged/ractivejs\n  http://groups.google.com/forum/#!forum/ractive-js\n  http://twitter.com/ractivejs\n\nFound a bug? Raise an issue:\n  https://github.com/ractivejs/ractive/issues\n\n";
vo=function(){if(za.WELCOME_MESSAGE===!1)return void(vo=d);var t="WELCOME_MESSAGE"in za?za.WELCOME_MESSAGE:xo,e=!!console.groupCollapsed;e&&console.groupCollapsed.apply(console,wo),console.log(t),e&&console.groupEnd(wo),vo=d},mo=function(t,e){if(vo(),u(e[e.length-1])){var n=e.pop(),i=n?n.ractive:null;if(i){var r;i.component&&(r=i.component.name)&&(t="<"+r+"> "+t);var s;(s=n.node||i.fragment&&i.fragment.rendered&&i.find("*"))&&e.push(s)}}console.warn.apply(console,["%cRactive.js: %c"+t,"color: rgb(114, 157, 52);","color: rgb(85, 85, 85);"].concat(e))},po=function(){console.log.apply(console,arguments)}}else mo=po=vo=d;var ko="Bad arguments",_o='A function was specified for "%s" %s, but no %s was returned',Eo=function(t,e){return'Missing "'+t+'" '+e+" plugin. You may need to download a plugin via http://ractive.js.org/integrations/#"+e+"s"},So={number:function(t,e){if(!r(t)||!r(e))return null;t=+t,e=+e;var n=e-t;return n?function(e){return t+e*n}:function(){return t}},array:function(t,e){var n,i;if(!Qa(t)||!Qa(e))return null;var r=[],s=[];for(i=n=Math.min(t.length,e.length);i--;)s[i]=_(t[i],e[i]);for(i=n;i<t.length;i+=1)r[i]=t[i];for(i=n;i<e.length;i+=1)r[i]=e[i];return function(t){for(var e=n;e--;)r[e]=s[e](t);return r}},object:function(e,n){if(!s(e)||!s(n))return null;var i=[],r={},a={},o=function(s){t(e,s)&&(t(n,s)?(i.push(s),a[s]=_(e[s],n[s])||function(){return n[s]}):r[s]=e[s])};for(var u in e)o(u);for(var h in n)t(n,h)&&!t(e,h)&&(r[h]=n[h]);var l=i.length;return function(t){for(var e=l;e--;){var n=i[e];r[n]=a[n](t)}return r}}},Ao=/\[\s*(\*|[0-9]|[1-9][0-9]+)\s*\]/g,Co=/([^\\](?:\\\\)*)\./,Oo=/\\|\./g,No=/((?:\\)+)\1|\\(\.)/g,jo=Function.prototype.bind,To={early:[],mark:[]},Vo={early:[],mark:[]},Po={virtual:!1},Mo=function(t){this.deps=[],this.children=[],this.childByKey={},this.links=[],this.bindings=[],t&&(this.parent=t,this.root=t.root)},Io=Mo.prototype;Io.addShuffleTask=function(t,e){void 0===e&&(e="early"),To[e].push(t)},Io.addShuffleRegister=function(t,e){void 0===e&&(e="early"),Vo[e].push({model:this,item:t})},Io.downstreamChanged=function(){},Io.findMatches=function(t){var e,n,i=t.length,r=[this],s=function(){var i=t[n];"*"===i?(e=[],r.forEach(function(t){e.push.apply(e,t.getValueChildren(t.get()))})):e=r.map(function(t){return t.joinKey(i)}),r=e};for(n=0;i>n;n+=1)s();return e},Io.getKeypath=function(t){if(t!==this.ractive&&this._link)return this._link.target.getKeypath(t);if(!this.keypath){var e=this.parent&&this.parent.getKeypath(t);this.keypath=e?this.parent.getKeypath(t)+"."+E(this.key):E(this.key)}return this.keypath},Io.getValueChildren=function(t){var e,n=this;Qa(t)?(e=[],"length"in this&&this.length!==t.length&&e.push(this.joinKey("length")),t.forEach(function(t,i){e.push(n.joinKey(i))})):s(t)||h(t)?e=Wa(t).map(function(t){return n.joinKey(E(t))}):null!=t&&(e=[]);var i=this.computed;return i&&e.push.apply(e,Wa(i).map(function(t){return n.joinKey(t)})),e},Io.getVirtual=function(t){var e=this,n=this.get(t,{virtual:!1});if(a(n)){for(var i=Qa(n)?[]:qa(null),r=Wa(n),s=r.length;s--;){var o=e.childByKey[r[s]];o?o._link?i[r[s]]=o._link.getVirtual():i[r[s]]=o.getVirtual():i[r[s]]=n[r[s]]}for(s=this.children.length;s--;){var u=e.children[s];u.key in i||!u._link||(i[u.key]=u._link.getVirtual())}if(this.computed)for(r=Wa(this.computed),s=r.length;s--;)i[r[s]]=e.computed[r[s]].get();return i}return n},Io.has=function(t){var e=this;if(this._link)return this._link.has(t);var n=this.get(!1,Po);if(!n)return!1;if(t=C(t),(h(n)||s(n))&&t in n)return!0;var i=this.computed;return i&&t in this.computed?!0:(i=this.root.ractive&&this.root.ractive.computed,i&&Wa(i).forEach(function(t){return i[t].pattern&&i[t].pattern.test(e.getKeypath())?!0:void 0}),!1)},Io.joinAll=function(t,e){for(var n=this,i=0;i<t.length;i+=1){if(e&&e.lastLink===!1&&i+1===t.length&&n.childByKey[t[i]]&&n.childByKey[t[i]]._link)return n.childByKey[t[i]];n=n.joinKey(t[i],e)}return n},Io.notifyUpstream=function(t){for(var e=this,n=this.parent,i=t||[this.key];n;)n.patterns&&n.patterns.forEach(function(t){return t.notify(i.slice())}),i.unshift(n.key),n.links.forEach(function(t){return t.notifiedUpstream(i,e.root)}),n.deps.forEach(function(t){return t.handleChange(i)}),n.downstreamChanged(t),n=n.parent},Io.rebind=function(t,e,n){var i=this;if(this._link&&this._link.rebind(t,e,!1),t!==this){for(var r=this.deps.length;r--;)i.deps[r].rebind&&i.deps[r].rebind(t,e,n);for(r=this.links.length;r--;){var s=i.links[r];s.owner&&s.owner._link&&s.relinking(t,n)}for(r=this.children.length;r--;){var a=i.children[r];a.rebind(t?t.joinKey(a.key):void 0,a._link||a,n),i.dataModel&&i.addShuffleTask(function(){return $(i,i.retrieve())},"early")}for(r=this.bindings.length;r--;)i.bindings[r].rebind(t,e,n)}},Io.reference=function(){"refs"in this?this.refs++:this.refs=1},Io.register=function(t){this.deps.push(t)},Io.registerLink=function(t){O(this.links,t)},Io.registerPatternObserver=function(t){(this.patterns||(this.patterns=[])).push(t),this.register(t)},Io.registerTwowayBinding=function(t){this.bindings.push(t)},Io.unreference=function(){"refs"in this&&this.refs--},Io.unregister=function(t){P(this.deps,t)},Io.unregisterLink=function(t){P(this.links,t)},Io.unregisterPatternObserver=function(t){P(this.patterns,t),this.unregister(t)},Io.unregisterTwowayBinding=function(t){P(this.bindings,t)},Io.updateFromBindings=function(t){for(var e=this,n=this.bindings.length;n--;){var i=e.bindings[n].getValue();i!==e.value&&e.set(i)}if(!this.bindings.length){var r=F(this.deps);r&&r.value!==this.value&&this.set(r.value)}t&&(this.children.forEach(D),this.links.forEach(D),this._link&&this._link.updateFromBindings(t))};var Ro,Bo=[],Ko={key:"@missing",animate:d,applyValue:d,get:d,getKeypath:function(){return this.key},joinAll:function(){return this},joinKey:function(){return this},mark:d,registerLink:d,shufle:d,set:d,unregisterLink:d};Ko.parent=Ko;var Lo=function(e){function n(t,n,i,r){e.call(this,t),this.owner=n,this.target=i,this.key=f(r)?n.key:r,n&&n.isLink&&(this.sourcePath=n.sourcePath+"."+this.key),i&&i.registerLink(this),t&&(this.isReadonly=t.isReadonly),this.isLink=!0}e&&(n.__proto__=e);var i=n.prototype=Object.create(e&&e.prototype);return i.constructor=n,i.animate=function(t,e,n,i){return this.target.animate(t,e,n,i)},i.applyValue=function(t){this.boundValue&&(this.boundValue=null),this.target.applyValue(t)},i.attach=function(t){var e=Je(t,this.key);e?this.relinking(e,!1):this.owner.unlink()},i.detach=function(){this.relinking(Ko,!1)},i.get=function(t,e){void 0===e&&(e={}),t&&(Z(this),e.unwrap="unwrap"in e?e.unwrap:!0);var n="shouldBind"in e?e.shouldBind:!0;return e.shouldBind=this.mapping&&this.target.parent&&this.target.parent.isRoot,L(this,this.target.get(!1,e),n)},i.getKeypath=function(t){return t&&t!==this.root.ractive?this.target.getKeypath(t):e.prototype.getKeypath.call(this,t)},i.handleChange=function(){this.deps.forEach(Y),this.links.forEach(Y),this.notifyUpstream()},i.isDetached=function(){return this.virtual&&this.target===Ko},i.joinKey=function(e){if(f(e)||""===e)return this;if(!t(this.childByKey,e)){var i=new n(this,this,this.target.joinKey(e),e);this.children.push(i),this.childByKey[e]=i}return this.childByKey[e]},i.mark=function(t){this.target.mark(t)},i.marked=function(){this.boundValue&&(this.boundValue=null),this.links.forEach(tt),this.deps.forEach(Y)},i.markedAll=function(){this.children.forEach(et),this.marked()},i.notifiedUpstream=function(t,e){var n=this;if(this.links.forEach(function(e){return e.notifiedUpstream(t,n.root)}),this.deps.forEach(Y),t&&this.rootLink){var i=this.parent;if(this.root!==e){var r=t.slice(1);r.unshift(this.key),this.notifyUpstream(r)}else if(i&&i!==this.target){var s=[i.key,this.key];i.links.forEach(function(t){return t.notifiedUpstream(s,i.root)}),i.deps.forEach(function(t){return t.handleChange(s)}),i.notifyUpstream(s)}}},i.relinked=function(){this.target.registerLink(this),this.children.forEach(function(t){return t.relinked()})},i.relinking=function(t,e){var n=this;this.rootLink&&this.sourcePath&&(t=lt(this.sourcePath,t,this.target)),t&&this.target!==t&&(this.target&&this.target.unregisterLink(this),this.target=t,this.children.forEach(function(n){n.relinking(t.joinKey(n.key),e)}),e||(this.keypath=void 0),this.rootLink&&this.addShuffleTask(function(){n.relinked(),e||(n.markedAll(),n.notifyUpstream())}))},i.set=function(t){this.boundValue&&(this.boundValue=null),this.target.set(t)},i.shuffle=function(t){this.shuffling||(this.target.shuffling?U(this,t,!0):this.target.shuffle?this.target.shuffle(t):this.target.mark())},i.source=function(){return this.target.source?this.target.source():this.target},i.teardown=function(){this._link&&this._link.teardown(),this.target.unregisterLink(this),this.children.forEach(rt)},n}(Mo);Mo.prototype.link=function(t,e,n){var i=this._link||new Lo(this.parent,this,t,this.key);return i.implicit=n&&n.implicit,i.mapping=n&&n.mapping,i.sourcePath=e,i.rootLink=!0,this._link&&this._link.relinking(t,!1),this._link=i,this.rebind(i,this,!1),z(),i.markedAll(),this.notifyUpstream(),i},Mo.prototype.unlink=function(){if(this._link){var t=this._link;this._link=void 0,t.rebind(this,t,!1),z(),t.teardown(),this.notifyUpstream()}};var Do=qa(null),Fo=4,zo=/^\s+/,Uo=function(t){this.name="ParseError",this.message=t;try{throw new Error(t)}catch(e){this.stack=e.stack}};Uo.prototype=Error.prototype;var $o=function(t,e){var n,i=0;this.str=t,this.options=e||{},this.pos=0,this.lines=this.str.split("\n"),this.lineEnds=this.lines.map(function(t){var e=i+t.length+1;return i=e,e},0),this.init&&this.init(t,e);for(var r=[];this.pos<this.str.length&&(n=this.read());)r.push(n);this.leftover=this.remaining(),this.result=this.postProcess?this.postProcess(r,e):r};$o.prototype={read:function(t){var e,n,i=this;t||(t=this.converters);var r=this.pos,s=t.length;for(e=0;s>e;e+=1)if(i.pos=r,n=t[e](i))return n;return null},getContextMessage:function(t,e){var n=this.getLinePos(t),i=n[0],r=n[1];if(-1===this.options.contextLines)return[i,r,e+" at line "+i+" character "+r];var s=this.lines[i-1],a="",o="";if(this.options.contextLines){var u=i-1-this.options.contextLines<0?0:i-1-this.options.contextLines;a=this.lines.slice(u,i-1-u).join("\n").replace(/\t/g,"  "),o=this.lines.slice(i,i+this.options.contextLines).join("\n").replace(/\t/g,"  "),a&&(a+="\n"),o&&(o="\n"+o)}var h=0,l=a+s.replace(/\t/g,function(t,e){return r>e&&(h+=1),"  "})+"\n"+new Array(r+h).join(" ")+"^----"+o;return[i,r,e+" at line "+i+" character "+r+":\n"+l]},getLinePos:function(t){for(var e=this,n=0,i=0;t>=this.lineEnds[n];)i=e.lineEnds[n],n+=1;var r=t-i;return[n+1,r+1,t]},error:function hm(t){var e=this.getContextMessage(this.pos,t),n=e[0],i=e[1],r=e[2],hm=new Uo(r);throw hm.line=n,hm.character=i,hm.shortMessage=t,hm},matchString:function(t){return this.str.substr(this.pos,t.length)===t?(this.pos+=t.length,t):void 0},matchPattern:function(t){var e;return(e=t.exec(this.remaining()))?(this.pos+=e[0].length,e[1]||e[0]):void 0},sp:function(){this.matchPattern(zo)},remaining:function(){return this.str.substring(this.pos)},nextChar:function(){return this.str.charAt(this.pos)},warn:function(t){var e=this.getContextMessage(this.pos,t)[2];b(e)}},$o.extend=function(e){var n=this,i=function(t,e){$o.call(this,t,e)};i.prototype=qa(n.prototype);for(var r in e)t(e,r)&&(i.prototype[r]=e[r]);return i.extend=$o.extend,i};var qo,Ho=1,Zo=2,Wo=3,Go=4,Qo=5,Yo=6,Jo=7,Xo=8,tu=9,eu=10,nu=11,iu=13,ru=14,su=15,au=16,ou=17,uu=18,hu=19,lu=55,cu=20,fu=21,du=22,pu=23,mu=24,vu=25,gu=26,yu=27,bu=30,wu=31,xu=32,ku=33,_u=34,Eu=35,Su=36,Au=40,Cu=50,Ou=51,Nu=52,ju=53,Tu=54,Vu=60,Pu=61,Mu=62,Iu=63,Ru=70,Bu=71,Ku=72,Lu=73,Du=74,Fu=/^[^\s=]+/,zu=/^\s+/,Uu=/^(\/(?:[^\n\r\u2028\u2029/\\[]|\\.|\[(?:[^\n\r\u2028\u2029\]\\]|\\.)*])+\/(?:([gimuy])(?![a-z]*\2))*(?![a-zA-Z_$0-9]))/,$u=/[-/\\^$*+?.()|[\]{}]/g,qu={},Hu={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,compact:1,controls:1,declare:1,"default":1,defaultchecked:1,defaultmuted:1,defaultselected:1,defer:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,indeterminate:1,inert:1,ismap:1,itemscope:1,loop:1,multiple:1,muted:1,nohref:1,noresize:1,noshade:1,novalidate:1,nowrap:1,open:1,pauseonexit:1,readonly:1,required:1,reversed:1,scoped:1,seamless:1,selected:1,sortable:1,translate:1,truespeed:1,typemustmatch:1,visible:1},Zu={area:1,base:1,br:1,col:1,command:1,doctype:1,embed:1,hr:1,img:1,input:1,keygen:1,link:1,meta:1,param:1,source:1,track:1,wbr:1},Wu={quot:34,amp:38,apos:39,lt:60,gt:62,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,copy:169,ordf:170,laquo:171,not:172,shy:173,reg:174,macr:175,deg:176,plusmn:177,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,sup1:185,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,Agrave:192,Aacute:193,Acirc:194,Atilde:195,Auml:196,Aring:197,AElig:198,Ccedil:199,Egrave:200,Eacute:201,Ecirc:202,Euml:203,Igrave:204,Iacute:205,Icirc:206,Iuml:207,ETH:208,Ntilde:209,Ograve:210,Oacute:211,Ocirc:212,Otilde:213,Ouml:214,times:215,Oslash:216,Ugrave:217,Uacute:218,Ucirc:219,Uuml:220,Yacute:221,THORN:222,szlig:223,agrave:224,aacute:225,acirc:226,atilde:227,auml:228,aring:229,aelig:230,ccedil:231,egrave:232,eacute:233,ecirc:234,euml:235,igrave:236,iacute:237,icirc:238,iuml:239,eth:240,ntilde:241,ograve:242,oacute:243,ocirc:244,otilde:245,ouml:246,divide:247,oslash:248,ugrave:249,uacute:250,ucirc:251,uuml:252,yacute:253,thorn:254,yuml:255,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,"int":8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830},Gu=[8364,129,8218,402,8222,8230,8224,8225,710,8240,352,8249,338,141,381,143,144,8216,8217,8220,8221,8226,8211,8212,732,8482,353,8250,339,157,382,376],Qu=new RegExp("&(#?(?:x[\\w\\d]+|\\d+|"+Wa(Wu).join("|")+"));?","g"),Yu=h(String.fromCodePoint),Ju=Yu?String.fromCodePoint:String.fromCharCode,Xu=/</g,th=/>/g,eh=/&/g,nh=65533,ih="Expected a JavaScript expression",rh="Expected closing paren",sh=/^(?:[+-]?)0*(?:(?:(?:[1-9]\d*)?\.\d+)|(?:(?:0|[1-9]\d*)\.)|(?:0|[1-9]\d*))(?:[eE][+-]?\d+)?/,ah=/^(?=.)[^"'\\]+?(?:(?!.)|(?=["'\\]))/,oh=/^\\(?:[`'"\\bfnrt]|0(?![0-9])|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|(?=.)[^ux0-9])/,uh=/^\\(?:\r\n|[\u000A\u000D\u2028\u2029])/,hh=Et('"'),lh=Et("'"),ch=/^[^`"\\\$]+?(?:(?=[`"\\\$]))/,fh=/[\r\n\t\b\f]/g,dh=/^[a-zA-Z_$][a-zA-Z_$0-9]*/,ph=/^\s*\.{3}/,mh=/^(?:[a-zA-Z$_0-9]|\\\.)+(?:(?:\.(?:[a-zA-Z$_0-9]|\\\.)+)|(?:\[[0-9]+\]))*/,vh=/^[a-zA-Z_$][-\/a-zA-Z_$0-9]*(?:\.(?:[a-zA-Z_$][-\/a-zA-Z_$0-9]*))*/,gh=/^[a-zA-Z_$][a-zA-Z_$0-9]*$/,yh=/^(?:Array|console|Date|RegExp|decodeURIComponent|decodeURI|encodeURIComponent|encodeURI|isFinite|isNaN|parseFloat|parseInt|JSON|Math|NaN|undefined|null|Object|Number|String|Boolean)\b/,bh=/^(?:break|case|catch|continue|debugger|default|delete|do|else|finally|for|function|if|in|instanceof|new|return|switch|throw|try|typeof|var|void|while|with)$/,wh=/^(?:\@\.|\@|~\/|(?:\^\^\/(?:\^\^\/)*(?:\.\.\/)*)|(?:\.\.\/)+|\.\/(?:\.\.\/)*|\.)/,xh=/^(key|index|keypath|rootpath|this|global|shared|context|event|node|local|style|helpers|last|macro)/,kh=function(t,e){return function(n){var i;return(i=e(n))?i:n.matchString(t)?(n.sp(),i=Ft(n),i||n.error(ih),{s:t,o:i,t:ku}):null}};!function(){var t,e,n,i,r="! ~ + - typeof".split(" ");for(i=Lt,t=0,e=r.length;e>t;t+=1)n=kh(r[t],i),i=n;qo=i}();var _h,Eh=qo,Sh=function(t,e){return function(n){if(n.inUnquotedAttribute&&(">"===t||"/"===t))return e(n);var i,r,s;if(r=e(n),!r)return null;for(;;){if(i=n.pos,n.sp(),!n.matchString(t))return n.pos=i,r;if("in"===t&&/[a-zA-Z_$0-9]/.test(n.remaining().charAt(0)))return n.pos=i,r;if(n.sp(),s=e(n),!s)return n.pos=i,r;r={t:Su,s:t,o:[r,s]}}}};!function(){var t,e,n,i,r="* / % + - << >> >>> < <= > >= in instanceof == != === !== & ^ | && ||".split(" ");for(i=Eh,t=0,e=r.length;e>t;t+=1)n=Sh(r[t],i),i=n;_h=i}();var Ah=_h,Ch=/^[^\s"'>\/=(]+/,Oh=/^on/,Nh=/^on-([a-zA-Z\*\.$_]((?:[a-zA-Z\*\.$_0-9\-]|\\-)+))$/,jh=/^(?:change|reset|teardown|update|construct|config|init|render|complete|unrender|detach|insert|destruct|attachchild|detachchild)$/,Th=/^as-([a-z-A-Z][-a-zA-Z_0-9]*)$/,Vh=/^([a-zA-Z](?:(?!-in-out)[-a-zA-Z_0-9])*)-(in|out|in-out)$/,Ph=/^((bind|class)-(([-a-zA-Z0-9_])+))$/,Mh={lazy:{t:Lu,v:"l"},twoway:{t:Lu,v:"t"},"no-delegation":{t:Du}},Ih=/^[^\s"'=<>\/`]+/,Rh=/^[^\s"'=<>@\[\]()]*/,Bh=/^\s+/,Kh=/\\/g,Lh={t:eu,exclude:!0},Dh=/^(?:[a-zA-Z$_0-9]|\\\.)+(?:(?:(?:[a-zA-Z$_0-9]|\\\.)+)|(?:\[[0-9]+\]))*/,Fh=/^as/i,zh={"else":/^\s*else\s*/,elseif:/^\s*elseif\s+/,then:/^\s*then\s*/,"catch":/^\s*catch\s*/},Uh={"else":Vu,elseif:Pu,then:Mu,"catch":Iu},$h={each:Nu,"if":Cu,"with":Tu,unless:Ou},qh=/^\s*:\s*([a-zA-Z_$][a-zA-Z_$0-9]*)/,Hh=/^\s*,\s*([a-zA-Z_$][a-zA-Z_$0-9]*)/,Zh=new RegExp("^("+Wa($h).join("|")+")\\b"),Wh="<!--",Gh="-->",Qh=/^[ \t\f\r\n]*\r?\n/,Yh=/\r?\n[ \t\f\r\n]*$/,Jh=/[ \t\f\r\n]+/g,Xh=/^[ \t\f\r\n]+/,tl=/[ \t\f\r\n]+$/,el=/^(?:\r\n|\r|\n)/,nl=/(?:\r\n|\r|\n)$/,il=/(\n)?[ \t]*$/,rl=/[ \t]*\n/,sl=/^([a-zA-Z]{1,}:?[a-zA-Z0-9\-]*)\s*\>/,al=/^[a-zA-Z]{1,}:?[a-zA-Z0-9\-]*/,ol=/^[a-zA-Z_$][-a-zA-Z0-9_$]*/,ul=/^[\s\n\/>]/,hl=/;\s*$/,ll={exclude:!0},cl={li:["li"],dt:["dt","dd"],dd:["dt","dd"],p:"address article aside blockquote div dl fieldset footer form h1 h2 h3 h4 h5 h6 header hgroup hr main menu nav ol p pre section table ul".split(" "),rt:["rt","rp"],rp:["rt","rp"],optgroup:["optgroup"],option:["option","optgroup"],thead:["tbody","tfoot"],tbody:["tbody","tfoot"],tfoot:["tbody"],tr:["tr","tbody"],td:["td","th","tr"],th:["td","th","tr"]},fl=/^\s*(elseif|else|then|catch)\s*/,dl=/^\s*#\s*partial\s+/,pl={},ml=[ce,ue,ve,de,fe],vl=[oe],gl=[se,ge,Se,Ne],yl=[je],bl={pre:1,script:1,style:1,textarea:1},wl={textarea:!0,script:!0,style:!0,template:!0},xl=$o.extend({init:function(t,e){var n=e.tripleDelimiters||pl.defaults.tripleDelimiters,i=e.staticDelimiters||pl.defaults.staticDelimiters,r=e.staticTripleDelimiters||pl.defaults.staticTripleDelimiters;this.standardDelimiters=e.delimiters||pl.defaults.delimiters,this.tags=[{isStatic:!1,isTriple:!1,open:this.standardDelimiters[0],close:this.standardDelimiters[1],readers:ml},{isStatic:!1,isTriple:!0,open:n[0],close:n[1],readers:vl},{isStatic:!0,isTriple:!1,open:i[0],close:i[1],readers:ml},{isStatic:!0,isTriple:!0,open:r[0],close:r[1],readers:vl}],this.contextLines=e.contextLines||pl.defaults.contextLines,this.sortMustacheTags(),this.sectionDepth=0,this.elementStack=[],this.interpolate=$a({},wl,pl.defaults.interpolate,e.interpolate),e.sanitize===!0&&(e.sanitize={elements:"applet base basefont body frame frameset head html isindex link meta noframes noscript object param script style title".split(" "),eventAttributes:!0}),this.stripComments=e.stripComments!==!1,this.preserveWhitespace=u(e.preserveWhitespace)?!1:e.preserveWhitespace,this.sanitizeElements=e.sanitize&&e.sanitize.elements,this.sanitizeEventAttributes=e.sanitize&&e.sanitize.eventAttributes,this.includeLinePositions=e.includeLinePositions,this.textOnlyMode=e.textOnlyMode,this.csp=e.csp,this.allowExpressions=e.allowExpressions,this.preserveStandaloneSections=this.preserveWhitespace&&e.preserveStandaloneSections,e.expression&&(this.converters=[Ft]),e.attributes&&(this.inTag=!0),this.whiteSpaceElements=$a({},e.preserveWhitespace,bl)},postProcess:function(t,e){var n=t[0];if(e.expression){var i=$t(n);return i.e=ft(i.s,i.r.length),i}if(!t.length)return{t:[],v:Fo};if(this.sectionDepth>0&&this.error("A section was left open"),ke(n.t,this.stripComments,this.preserveWhitespace,!this.preserveWhitespace,!this.preserveWhitespace,this.whiteSpaceElements,this.preserveStandaloneSections),this.csp!==!1){var r={};Ve(n.t,r),Ve(n.p||{},r),Wa(r).length&&(n.e=r)}return n},converters:[Te],sortMustacheTags:function(){this.tags.sort(function(t,e){return e.open.length-t.open.length})}}),kl=["delimiters","tripleDelimiters","staticDelimiters","staticTripleDelimiters","csp","interpolate","preserveWhitespace","preserveStandaloneSections","sanitize","stripComments","contextLines","allowExpressions","attributes"],_l="Either preparse or use a ractive runtime source that includes the parser. ",El="Either include a version of Ractive that can parse or convert your computation strings to functions.",Sl={fromId:function(t,e){if(!Xa){if(e&&e.noThrow)return;throw new Error("Cannot retrieve template #"+t+" as Ractive is not running in a browser.")}t&&(t=t.replace(/^#/,""));var n;if(!(n=Xa.getElementById(t))){if(e&&e.noThrow)return;throw new Error("Could not find template element with id #"+t)}if("SCRIPT"!==n.tagName.toUpperCase()){if(e&&e.noThrow)return;throw new Error("Template element with id #"+t+", must be a <script> element")}return"textContent"in n?n.textContent:n.innerHTML},isParsed:function(t){return!l(t)},getParseOptions:function(t){return t.defaults&&(t=t.defaults),kl.reduce(function(e,n){return e[n]=t[n],e},{})},parse:function(t,e){Be(Re,"template",_l);var n=Re(t,e);return pt(n),n},parseFor:function(t,e){return this.parse(t,this.getParseOptions(e))}},Al=0,Cl=function(t,e){this.callback=t,this.parent=e,this.intros=[],this.outros=[],this.children=[],this.totalChildren=this.outroChildren=0,this.detachQueue=[],this.outrosComplete=!1,this.id=Al++,e&&e.addChild(this)},Ol=Cl.prototype;Ol.add=function(t){var e=t.isIntro?this.intros:this.outros;t.starting=!0,e.push(t)},Ol.addChild=function(t){this.children.push(t),this.totalChildren+=1,this.outroChildren+=1},Ol.checkStart=function(){this.parent&&this.parent.started&&this.start()},Ol.decrementOutros=function(){this.outroChildren-=1,Fe(this)},Ol.decrementTotal=function(){this.totalChildren-=1,Fe(this)},Ol.detachNodes=function(){for(var t=this,e=this.detachQueue.length,n=0;e>n;n++)t.detachQueue[n].detach();e=this.children.length;for(var i=0;e>i;i++)t.children[i].detachNodes();this.detachQueue=[]},Ol.ready=function(){this.detachQueue.length&&Ue(this)},Ol.remove=function(t){var e=t.isIntro?this.intros:this.outros;P(e,t),Fe(this)},Ol.start=function(){this.started=!0,this.children.forEach(function(t){return t.start()}),this.intros.concat(this.outros).forEach(function(t){return t.start()}),Fe(this)};var Nl,jl={active:function(){return!!Nl},start:function(){var t,e=new Promise(function(e){return t=e});return Nl={previousBatch:Nl,transitionManager:new Cl(t,Nl&&Nl.transitionManager),fragments:[],tasks:[],immediateObservers:[],deferredObservers:[],promise:e},e},end:function(){He(),Nl.previousBatch?Nl.transitionManager.checkStart():Nl.transitionManager.start(),Nl=Nl.previousBatch},addFragment:function(t){O(Nl.fragments,t)},addFragmentToRoot:function(t){if(Nl){for(var e=Nl;e.previousBatch;)e=e.previousBatch;O(e.fragments,t)}},addObserver:function(t,e){Nl?O(e?Nl.deferredObservers:Nl.immediateObservers,t):t.dispatch()},registerTransition:function(t){t._manager=Nl.transitionManager,Nl.transitionManager.add(t)},detachWhenReady:function(t){Nl.transitionManager.detachQueue.push(t)},scheduleTask:function(t,e){var n;if(Nl){for(n=Nl;e&&n.previousBatch;)n=n.previousBatch;n.tasks.push(t)}else t()},promise:function(){if(!Nl)return Promise.resolve();for(var t=Nl;t.previousBatch;)t=t.previousBatch;return t.promise||Promise.resolve()}},Tl=[],Vl=!1,Pl=function(t){this.duration=t.duration,this.step=t.step,this.complete=t.complete,this.easing=t.easing,this.start=performance.now(),this.end=this.start+this.duration,this.running=!0,Tl.push(this),Vl||requestAnimationFrame(Ze)},Ml=Pl.prototype;Ml.tick=function(t){if(!this.running)return!1;if(t>this.end)return this.step&&this.step(1),this.complete&&this.complete(1),!1;var e=t-this.start,n=this.easing(e/this.duration);return this.step&&this.step(n),!0},Ml.stop=function(){this.abort&&this.abort(),this.running=!1};var Il={},Rl={},Bl=function(e){function n(t,n){e.call(this,t),this.ticker=null,t&&(this.key=C(n),this.isReadonly=t.isReadonly,t.value&&(this.value=t.value[this.key],Qa(this.value)&&(this.length=this.value.length),this.adapt()))}e&&(n.__proto__=e);var s=n.prototype=Object.create(e&&e.prototype);return s.constructor=n,s.adapt=function(){var t=this,e=this.root.adaptors,n=e.length;if(this.rewrap=!1,0!==n){var i=this.wrapper?"newWrapperValue"in this?this.newWrapperValue:this.wrapperValue:this.value,r=this.root.ractive,s=this.getKeypath();if(this.wrapper){var a=this.wrapperValue===i?!1:!this.wrapper.reset||this.wrapper.reset(i)===!1;if(!a)return delete this.newWrapperValue,void(this.value=this.wrapper.get());if(this.wrapper.teardown(),delete this.wrapper,delete this.wrapperValue,delete this.newWrapperValue,void 0!==this.value){var o=this.parent.value||this.parent.createBranch(this.key);o[this.key]!==i&&(o[this.key]=i),this.value=i}}var u;for(u=0;n>u;u+=1){var h=e[u];if(h.filter(i,s,r)){t.wrapper=h.wrap(r,i,s,Ge(s)),t.wrapperValue=i,t.wrapper.__model=t,t.value=t.wrapper.get();break}}}},s.animate=function(t,e,n,i){var r=this;this.ticker&&this.ticker.stop();var s,a=new Promise(function(t){return s=t});return this.ticker=new Pl({duration:n.duration,easing:n.easing,step:function(t){var e=i(t);r.applyValue(e),n.step&&n.step(t,e)},complete:function(){r.applyValue(e),n.complete&&n.complete(e),r.ticker=null,s(e)}}),a.stop=this.ticker.stop,a},s.applyValue=function(t,e){if(void 0===e&&(e=!0),!i(t,this.value)){if(this.boundValue&&(this.boundValue=null),this.parent.wrapper&&this.parent.wrapper.set)this.parent.wrapper.set(this.key,t),this.parent.value=this.parent.wrapper.get(),this.value=this.parent.value[this.key],this.wrapper&&(this.newWrapperValue=this.value),this.adapt();else if(this.wrapper)this.newWrapperValue=t,this.adapt();else{var n=this.parent.value||this.parent.createBranch(this.key);if(!a(n))return void b("Attempted to set a property of a non-object '"+this.getKeypath()+"'");n[this.key]=t,this.value=t,this.adapt()}(this.dataModel||t&&t.viewmodel&&t.viewmodel.isRoot)&&$(this,t),Qa(t)?(this.length=t.length,this.isArray=!0):this.isArray=!1,this.links.forEach(Y),this.children.forEach(J),this.deps.forEach(Y),e&&this.notifyUpstream(),this.parent.isArray&&("length"===this.key?this.parent.length=t:this.parent.joinKey("length").mark())}},s.compute=function(t,e){var n=this.computed||(this.computed={});return n[t]?(n[t].signature=De(this.root.ractive,t,e),n[t].mark()):n[t]=new Rl.Computation(this,De(this.root.ractive,t,e),t),n[t]},s.createBranch=function(t){var e=r(t)?[]:{};return this.applyValue(e,!1),e},s.get=function(t,e){return this._link?this._link.get(t,e):(t&&Z(this),e&&e.virtual?this.getVirtual(!1):L(this,(e&&"unwrap"in e?e.unwrap!==!1:t)&&this.wrapper?this.wrapperValue:this.value,!e||e.shouldBind!==!1))},s.joinKey=function(e,i){var r=this;if(this._link)return i&&i.lastLink!==!1&&(f(e)||""===e)?this:this._link.joinKey(e);if(f(e)||""===e)return this;var s;if(s=t(this.childByKey,e)?this.childByKey[e]:this.computed&&this.computed[e],!s){var a;if(this.isRoot&&this.ractive&&(a=this.ractive.computed[e]))s=this.compute(e,a);else if(!this.isRoot&&this.root.ractive){var o=this.root.ractive.computed;for(var u in o)a=o[u],a.pattern&&a.pattern.test(r.getKeypath()+"."+e)&&(s=r.compute(e,a))}}if(!s&&(s=new n(this,e),this.children.push(s),this.childByKey[e]=s,"data"===e)){var h=this.retrieve();if(h&&h.viewmodel&&h.viewmodel.isRoot){var l=jl.active();l||jl.start(),s.link(h.viewmodel,"data"),this.dataModel=h,l||jl.end()}}return!s._link||i&&i.lastLink===!1?s:s._link},s.mark=function(t){if(this._link)return this._link.mark(t);var e=this.value,n=this.retrieve();(this.dataModel||n&&n.viewmodel&&n.viewmodel.isRoot)&&$(this,n),(t||!i(n,e))&&(this.value=n,this.boundValue&&(this.boundValue=null),(e!==n||this.rewrap)&&(this.wrapper&&(this.newWrapperValue=n),this.adapt()),Qa(n)?(this.length=n.length,this.isArray=!0):this.isArray=!1,this.children.forEach(t?X:J),this.links.forEach(tt),this.deps.forEach(Y))},s.merge=function(t,e){var n=B(this.value===t?Qe(this):this.value,t,e);this.parent.value[this.key]=t,this.shuffle(n,!0)},s.retrieve=function(){return this.parent.value?this.parent.value[this.key]:void 0},s.set=function(t){this.ticker&&this.ticker.stop(),this.applyValue(t)},s.shuffle=function(t,e){U(this,t,!1,e)},s.source=function(){return this},s.teardown=function(){var t=this;this._link&&(this._link.teardown(),this._link=null),this.children.forEach(rt),this.wrapper&&this.wrapper.teardown(),this.computed&&Wa(this.computed).forEach(function(e){return t.computed[e].teardown()})},n}(Mo),Kl={},Ll=function(t){function e(e,n,i){t.call(this,null,"@"+n),this.key="@"+n,this.value=e,this.isRoot=!0,this.root=this,this.adaptors=[],this.ractive=i}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.getKeypath=function(){return this.key},n.retrieve=function(){return this.value},e}(Bl),Dl=new Ll(Kl,"shared"),Fl=new Ll(eo,"global"),zl={},Ul=function(t){this.ractive=t};Ul.prototype.findContext=function(){return this.ractive.viewmodel};var $l=Ul.prototype;$l.getContext=sn,$l.find=$l.findComponent=$l.findAll=$l.findAllComponents=d;var ql=!1,Hl=/\*/,Zl={virtual:!1},Wl={},Gl="Cannot add to a non-numeric value",Ql=yo.linear,Yl={},Jl={},Xl=function(t){this.event=t,this.method="on"+t};Xl.prototype.fire=function(t,e){var n=rn(t),i=this.method;t[i]&&(e?t[i](n,e):t[i](n)),xn(t,this.event,n,e?[e,t]:[t])};var tc=function(t){this.hook=new Xl(t),this.inProcess={},this.queue={}},ec=tc.prototype;ec.begin=function(t){this.inProcess[t._guid]=!0},ec.end=function(t){var e=t.parent;e&&this.inProcess[e._guid]?En(this.queue,e).push(t):Sn(this,t),delete this.inProcess[t._guid]};var nc={};["construct","config","attachchild","detach","detachchild","insert","complete","reset","render","unrendering","unrender","teardown","destruct","update"].forEach(function(t){nc[t]=new Xl(t)}),nc.init=new tc("init");var ic=Array.prototype,rc=Hn("push").model,sc=Hn("pop").model,ac=Hn("shift").model,oc=Hn("unshift").model,uc=Hn("sort").model,hc=Hn("splice").model,lc=Hn("reverse").model,cc={},fc=function(t){function e(e){t.call(this,null,null),this.isRoot=!0,this.root=this,this.value={},this.ractive=e.ractive,this.adaptors=[],this.context=e.context}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.getKeypath=function(){return"@context.data"},n.rebound=function(){},e}(Bl),dc=function(t,e){this.fragment=t,this.element=e||Un(t),this.node=this.element&&this.element.node,this.ractive=t.ractive,this.root=this},pc=dc.prototype,mc={decorators:{},_data:{}};mc.decorators.get=function(){var t={};return this.element?(this.element.decorators.forEach(function(e){return t[e.name]=e.handle}),t):t},mc._data.get=function(){return this.model||(this.root.model=new fc({ractive:this.ractive,context:this.root}))},pc.add=function(t,e,n){var i=c(e)?+e:1,s=u(e)?e:n;return on(Gn(this,t,i).map(function(t){var e=t[0],n=t[1],i=e.get();if(!r(n)||!r(i))throw new Error("Cannot add non-numeric value");
return[e,i+n]}),s)},pc.animate=function(t,e,n){var i=Qn(this,t).model;return vn(this.ractive,i,e,n)},pc.find=function(t,e){return this.fragment.find(t,e)},pc.findAll=function(t,e){var n=[];return e=e||{},e.result=n,this.fragment.findAll(t,e),n},pc.findAllComponents=function(t,e){var n=[];return e=e||{},e.result=n,this.fragment.findAllComponents(t,e),n},pc.findComponent=function(t,e){return this.fragment.findComponent(t,e)},pc.get=function(t){if(!t)return this.fragment.findContext().get(!0);var e=Qn(this,t),n=e.model;return n?n.get(!0):void 0},pc.getParent=function(t){var e=this.fragment;return!e.parent&&t?e=e.componentParent:e.context?e=an(e.parent):(e=an(e.parent),e&&(e=!e.parent&&t?e.componentParent:an(e.parent))),e&&e!==this.fragment?e.getContext():void 0},pc.hasListener=function(t,e){var n,i=this.fragment.owner.component?this.fragment.owner:this.element||this.fragment.owner;do{if(n=i.component||i,n.template.t===Jo&&Yn(n,t))return!0;i=i.up&&i.up.owner,i&&i.component&&(i=i.component)}while(i&&e)},pc.link=function(t,e){var n=Qn(this,t).model,i=Qn(this,e).model,r=jl.start();return i.link(n,t),jl.end(),r},pc.listen=function(t,e){var n=this.element;return n.on(t,e),{cancel:function(){n.off(t,e)}}},pc.observe=function(t,e,n){return void 0===n&&(n={}),s(t)&&(n=e||{}),n.fragment=this.fragment,this.ractive.observe(t,e,n)},pc.observeOnce=function(t,e,n){return void 0===n&&(n={}),s(t)&&(n=e||{}),n.fragment=this.fragment,this.ractive.observeOnce(t,e,n)},pc.pop=function(t){return sc(Qn(this,t).model,[])},pc.push=function(t){for(var e=[],n=arguments.length-1;n-->0;)e[n]=arguments[n+1];return rc(Qn(this,t).model,e)},pc.raise=function(t,e){for(var n=[],i=arguments.length-2;i-->0;)n[i]=arguments[i+2];for(var r,s=this.element;s;){if(s.component&&(s=s.component),r=Yn(s,t))return r.fire(r.element.getContext(e||{},!e||"original"in e?{}:{original:{}}),n);s=s.up&&s.up.owner}},pc.readLink=function(t,e){return this.ractive.readLink(this.resolve(t),e)},pc.resolve=function(t,e){var n=Qn(this,t),i=n.model,r=n.instance;return i?i.getKeypath(e||r):t},pc.reverse=function(t){return lc(Qn(this,t).model,[])},pc.set=function(t,e,n){return on(Gn(this,t,e),n)},pc.shift=function(t){return ac(Qn(this,t).model,[])},pc.splice=function(t,e,n){for(var i=[],r=arguments.length-3;r-->0;)i[r]=arguments[r+3];return i.unshift(e,n),hc(Qn(this,t).model,i)},pc.sort=function(t){return uc(Qn(this,t).model,[])},pc.subtract=function(t,e,n){var i=c(e)?e:1,s=u(e)?e:n;return on(Gn(this,t,i).map(function(t){var e=t[0],n=t[1],i=e.get();if(!r(n)||!r(i))throw new Error("Cannot add non-numeric value");return[e,i-n]}),s)},pc.toggle=function(t,e){var n=Qn(this,t),i=n.model;return on([[i,!i.get()]],e)},pc.unlink=function(t){var e=Qn(this,t).model,n=jl.start();return e.owner&&e.owner._link&&e.owner.unlink(),jl.end(),n},pc.unlisten=function(t,e){this.element.off(t,e)},pc.unshift=function(t){for(var e=[],n=arguments.length-1;n-->0;)e[n]=arguments[n+1];return oc(Qn(this,t).model,e)},pc.update=function(t,e){return Zn(this.ractive,Qn(this,t).model,e)},pc.updateModel=function(t,e){var n=Qn(this,t),i=n.model,r=jl.start();return i.updateFromBindings(e),jl.end(),r},pc.isBound=function(){var t=this.getBindingModel(this),e=t.model;return!!e},pc.getBindingPath=function(t){var e=this.getBindingModel(this),n=e.model,i=e.instance;return n?n.getKeypath(t||i):void 0},pc.getBinding=function(){var t=this.getBindingModel(this),e=t.model;return e?e.get(!0):void 0},pc.getBindingModel=function(t){var e=t.element;return{model:e.binding&&e.binding.model,instance:e.up.ractive}},pc.setBinding=function(t){var e=this.getBindingModel(this),n=e.model;return on([[n,t]])},Object.defineProperties(pc,mc),dc.forRactive=rn,zl.Context=dc;var vc,gc,yc,bc,wc,xc,kc,_c,Ec,Sc=Xa&&Xa.querySelector,Ac="http://www.w3.org/1999/xhtml",Cc="http://www.w3.org/1998/Math/MathML",Oc="http://www.w3.org/2000/svg",Nc="http://www.w3.org/1999/xlink",jc="http://www.w3.org/XML/1998/namespace",Tc="http://www.w3.org/2000/xmlns",Vc={html:Ac,mathml:Cc,svg:Oc,xlink:Nc,xml:jc,xmlns:Tc},Pc=to&&"registerElement"in Xa;if(vc=io?function(t,e,n){return e&&e!==Ac?n?Xa.createElementNS(e,t,ii(n)):Xa.createElementNS(e,t):n?Xa.createElement(t,ii(n)):Xa.createElement(t)}:function(t,e,n){if(e&&e!==Ac)throw"This browser does not support namespaces other than http://www.w3.org/1999/xhtml. The most likely cause of this error is that you're trying to render SVG in an older browser. See http://ractive.js.org/support/#svgs for more information";return n?Xa.createElement(t,ii(n)):Xa.createElement(t)},to){for(yc=vc("div"),bc=["matches","matchesSelector"],Ec=function(t){return function(e,n){return e[t](n)}},kc=bc.length;kc--&&!gc;)if(wc=bc[kc],yc[wc])gc=Ec(wc);else for(_c=ro.length;_c--;)if(xc=ro[kc]+wc.substr(0,1).toUpperCase()+wc.substring(1),yc[xc]){gc=Ec(xc);break}gc||(gc=function(t,e){var n,i;n=t.parentNode,n||(yc.innerHTML="",n=yc,t=t.cloneNode(),yc.appendChild(t));var r=n.querySelectorAll(e);for(i=r.length;i--;)if(r[i]===t)return!0;return!1})}else gc=null;var Mc=function(t,e,n,i){this.context=i.context||t,this.callback=n,this.ractive=t,this.keypath=i.keypath,this.options=i,e&&this.resolved(e),h(i.old)&&(this.oldContext=qa(t),this.oldFn=i.old),i.init!==!1?(this.dirty=!0,this.dispatch()):di(this),this.dirty=!1},Ic=Mc.prototype;Ic.cancel=function(){this.cancelled=!0,this.model?this.model.unregister(this):this.resolver.unbind(),P(this.ractive._observers,this)},Ic.dispatch=function(){if(!this.cancelled){try{this.callback.call(this.context,this.newValue,this.oldValue,this.keypath)}catch(t){b("Failed to execute observer callback for '"+this.keypath+"': "+(t.message||t))}di(this,!0),this.dirty=!1}},Ic.handleChange=function(){var t=this;if(this.dirty)this.newValue=this.model.get();else{var e=this.model.get();if(i(e,this.oldValue))return;if(this.newValue=e,this.options.strict&&this.newValue===this.oldValue)return;jl.addObserver(this,this.options.defer),this.dirty=!0,this.options.once&&jl.scheduleTask(function(){return t.cancel()})}},Ic.rebind=function(t,e){var n=this;return t=lt(this.keypath,t,e),t===this.model?!1:(this.model&&this.model.unregister(this),void(t&&t.addShuffleTask(function(){return n.resolved(t)})))},Ic.resolved=function(t){this.model=t,this.oldValue=void 0,this.newValue=t.get(),t.register(this)};var Rc=/\*+/g,Bc=function(t,e,n,i,r){var s=this;this.context=r.context||t,this.ractive=t,this.baseModel=e,this.keys=n,this.callback=i;var a=n.join("\\.").replace(Rc,"(.+)"),o=this.baseKeypath=e.getKeypath(t);this.pattern=new RegExp("^"+(o?o+"\\.":"")+a+"$"),this.recursive=1===n.length&&"**"===n[0],this.recursive&&(this.keys=["*"]),r.old&&(this.oldContext=qa(t),this.oldFn=r.old),this.oldValues={},this.newValues={},this.defer=r.defer,this.once=r.once,this.strict=r.strict,this.dirty=!1,this.changed=[],this.cache=[],this.partial=!1,this.links=r.links;var u=e.findMatches(this.keys);u.forEach(function(t){s.newValues[t.getKeypath(s.ractive)]=t.get()}),r.init!==!1?this.dispatch():vi(this,this.newValues),e.registerPatternObserver(this)},Kc=Bc.prototype;Kc.cancel=function(){this.baseModel.unregisterPatternObserver(this),P(this.ractive._observers,this)},Kc.dispatch=function(){var t=this,e=this.newValues;this.newValues={},Wa(e).forEach(function(n){var r=e[n],s=t.oldValues[n];if(!(t.strict&&r===s||i(r,s))){var a=[r,s,n];if(n){var o=t.pattern.exec(n);o&&(a=a.concat(o.slice(1)))}try{t.callback.apply(t.context,a)}catch(u){b("Failed to execute pattern observer callback for '"+t.keypath+"': "+(u.message||u))}}}),vi(this,e,this.partial),this.dirty=!1},Kc.notify=function(t){var e=pi(t);~this.cache.indexOf(e)||(this.cache.push(e),this.changed.push(t))},Kc.shuffle=function(t){var e=this;if(Qa(this.baseModel.value)){for(var n=this.baseModel.value.length,i=0;i<t.length;i++)-1!==t[i]&&t[i]!==i&&e.changed.push([i]);for(var r=t.touchedFrom;n>r;r++)e.changed.push([r])}},Kc.handleChange=function(){var t=this;if(!this.dirty||this.changed.length){if(this.dirty||(this.newValues={}),this.changed.length){var e=0;if(this.recursive){var n=this.changed.slice();this.changed.length=0,this.dirty=!0,n.forEach(function(n){var i=t.baseModel.joinAll(n);(!i.isLink||t.links)&&(e++,t.newValues[i.getKeypath(t.ractive)]=i.get())}),this.dirty=!1}else{var i=this.baseModel.isRoot?this.changed.map(function(t){return t.map(E).join(".")}):this.changed.map(function(e){return t.baseKeypath+"."+e.map(E).join(".")});this.baseModel.findMatches(this.keys).forEach(function(n){var r=n.getKeypath(t.ractive),s=function(t){return 0===t.indexOf(r)&&(t.length===r.length||"."===t[r.length])||0===r.indexOf(t)&&(t.length===r.length||"."===r[t.length])};i.filter(s).length&&(e++,t.newValues[r]=n.get())})}if(!e)return;this.partial=!0}else this.baseModel.findMatches(this.keys).forEach(function(e){var n=e.getKeypath(t.ractive);t.newValues[n]=e.get()}),this.partial=!1;jl.addObserver(this,this.defer),this.dirty=!0,this.changed.length=0,this.cache=[],this.once&&this.cancel()}};var Lc=function(t,e,n,i){this.ractive=t,this.model=e,this.keypath=e.getKeypath(),this.callback=n,this.options=i,this.pending=null,e.register(this),i.init!==!1?(this.sliced=[],this.shuffle([]),this.dispatch()):this.sliced=this.slice()},Dc=Lc.prototype;Dc.cancel=function(){this.model.unregister(this),P(this.ractive._observers,this)},Dc.dispatch=function(){try{this.callback(this.pending)}catch(t){b("Failed to execute array observer callback for '"+this.keypath+"': "+(t.message||t))}this.pending=null,this.options.once&&this.cancel()},Dc.handleChange=function(t){this.pending?jl.addObserver(this,this.options.defer):t||(this.shuffle(this.sliced.map(gi)),this.handleChange())},Dc.shuffle=function(t){var e,n=this,i=this.slice(),r=[],s=[],a={};t.forEach(function(t,i){a[t]=!0,t!==i&&f(e)&&(e=i),-1===t&&s.push(n.sliced[i])}),f(e)&&(e=t.length);for(var o=i.length,u=0;o>u;u+=1)a[u]||r.push(i[u]);this.pending={inserted:r,deleted:s,start:e},this.sliced=i},Dc.slice=function(){var t=this.model.get();return Qa(t)?t.slice():[]};var Fc={init:!1,once:!0},zc=function(t){return t.trim()},Uc=function(t){return""!==t},$c=Hn("pop").path,qc=Hn("push").path,Hc="/* Ractive.js component styles */",Zc=[],Wc=!1,Gc=null,Qc=null,Yc=!1,Jc={extend:function(t,e,n){e.adapt=M(e.adapt,T(n.adapt))},init:function(){}},Xc=/\/\*(?:[\s\S]*?)\*\//g,tf=/url\(\s*(['"])(?:\\[\s\S]|(?!\1).)*\1\s*\)|url\((?:\\[\s\S]|[^)])*\)|(['"])(?:\\[\s\S]|(?!\2).)*\2/gi,ef=/\0(\d+)/g,nf=/(?:^|\}|\{|\x01)\s*([^\{\}\0\x01]+)\s*(?=\{)/g,rf=/@import\s*\([^)]*\)\s*;?/gi,sf=/\x01/g,af=/@keyframes\s+[^\{\}]+\s*\{(?:[^{}]+|\{[^{}]+})*}/gi,of=/((?:(?:\[[^\]]+\])|(?:[^\s\+\>~:]))+)((?:::?[^\s\+\>\~\(:]+(?:\([^\)]+\))?)*\s*[\s\+\>\~]?)\s*/g,uf=/^(?:@|\d+%)/,hf=/\[data-ractive-css~="\{[a-z0-9-]+\}"]/g,lf=function(t){function e(e){t.call(this,e.cssData,"@style"),this.component=e}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.downstreamChanged=function(t,e){if(!this.locked){var n=this.component;n.extensions.forEach(function(n){var i=n._cssModel;i.mark(),i.downstreamChanged(t,e||1)}),e||Di(n,!0)}},e}(Ll),cf=/\{/,ff={name:"css",extend:function(t,e,n,i){i._cssIds=zi(t),Ha(i,"cssData",{configurable:!0,value:$a(qa(t.cssData),n.cssData||{})}),Ha(i,"_cssModel",{configurable:!0,value:new lf(i)}),n.css&&$i(n,i,e)},init:function(t,e,n){n.css&&b("\nThe css option is currently not supported on a per-instance basis and will be discarded. Instead, we recommend instantiating from a component definition with a css option.\n\nconst Component = Ractive.extend({\n	...\n	css: '/* your css */',\n	...\n});\n\nconst componentInstance = new Component({ ... })\n		")}},df={name:"data",extend:function(t,e,n){var i,r;if(n.data&&s(n.data))for(i in n.data)r=n.data[i],r&&u(r)&&(s(r)||Qa(r))&&b("Passing a `data` option with object and array properties to Ractive.extend() is discouraged, as mutating them is likely to cause bugs. Consider using a data function instead:\n\n  // this...\n  data: function () {\n    return {\n      myObject: {}\n    };\n  })\n\n  // instead of this:\n  data: {\n    myObject: {}\n  }");e.data=Zi(e.data,n.data)},init:function(t,e,n){var i=Zi(t.prototype.data,n.data);if(h(i)&&(i=i.call(e)),i&&i.constructor===Object)for(var r in i)if(h(i[r])){var s=i[r];i[r]=K(s,e),i[r]._r_unbound=s}return i||{}},reset:function(t){var e=this.init(t.constructor,t,t.viewmodel);return t.viewmodel.root.set(e),!0}},pf={name:"template",extend:function(t,e,n){if("template"in n){var i=n.template;h(i)?e.template=i:e.template=Ji(i,e)}},init:function(t,e,n){var i="template"in n?n.template:t.prototype.template;if(i=i||{v:Fo,t:[]},h(i)){var r=i;i=Yi(e,r),e._config.template={fn:r,result:i}}i=Ji(i,e),e.template=i.t,i.p&&er(e.partials,i.p)},reset:function(t){var e=Qi(t);if(e){var n=Ji(e,t);return t.template=n.t,er(t.partials,n.p,!0),!0}}},mf=["adaptors","components","computed","decorators","easing","events","helpers","interpolators","partials","transitions"],vf=["computed","helpers"],gf=function(t,e){this.name=t,this.useDefaults=e},yf=gf.prototype;yf.extend=function(t,e,n){var i=this.useDefaults?t.defaults:t,r=this.useDefaults?e:e.constructor;this.configure(i,r,n)},yf.init=function(){},yf.configure=function(t,e,n){var i=this.name,r=n[i],s=qa(t[i]);$a(s,r),e[i]=s,"partials"===i&&e[i]&&Wa(e[i]).forEach(function(t){pt(e[i][t])})},yf.reset=function(t){var e=t[this.name],n=!1;return Wa(e).forEach(function(t){var i=e[t];i._fn&&(i._fn.isOwner?e[t]=i._fn:delete e[t],n=!0)}),n};var bf=mf.map(function(t){var e=vf.indexOf(t)>-1;return new gf(t,e)}),wf={extend:function(t,e,n,i){return or("extend",t,e,n,i)},init:function(t,e,n){return or("init",t,e,n)},reset:function(t){return Sf.filter(function(e){return e.reset&&e.reset(t)}).map(function(t){return t.name})}},xf={adapt:Jc,computed:wf,css:ff,data:df,helpers:wf,template:pf},kf=Wa(go),_f=hr(kf.filter(function(t){return!xf[t]})),Ef=hr(kf.concat(bf.map(function(t){return t.name}),["on","observe","attributes","cssData","use"])),Sf=[].concat(kf.filter(function(t){return!bf[t]&&!xf[t]}),bf,xf.template,xf.css),Af=/\b_super\b/,Cf=function(t){this.up=t.up,this.ractive=t.up.ractive,this.template=t.template,this.index=t.index,this.type=t.template.t,this.dirty=!1},Of=Cf.prototype;Of.bubble=function(){this.dirty||(this.dirty=!0,this.up.bubble())},Of.destroyed=function(){this.fragment&&this.fragment.destroyed()},Of.find=function(){return null},Of.findComponent=function(){return null},Of.findNextNode=function(){return this.up.findNextNode(this)},Of.rebound=function(t){this.fragment&&this.fragment.rebound(t)},Of.shuffled=function(){this.fragment&&this.fragment.shuffled()},Of.valueOf=function(){return this.toString()},Cf.prototype.findAll=d,Cf.prototype.findAllComponents=d;var Nf=function(t){function e(e){t.call(this,e)}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.detach=function(){return this.fragment?this.fragment.detach():ri()},n.find=function(t){return this.fragment?this.fragment.find(t):void 0},n.findAll=function(t,e){this.fragment&&this.fragment.findAll(t,e)},n.findComponent=function(t){return this.fragment?this.fragment.findComponent(t):void 0},n.findAllComponents=function(t,e){this.fragment&&this.fragment.findAllComponents(t,e)},n.firstNode=function(t){return this.fragment&&this.fragment.firstNode(t)},n.toString=function(t){return this.fragment?this.fragment.toString(t):""},e}(Cf),jf=/\s+/,Tf=[void 0,"text","search","url","email","hidden","password","search","reset","submit"],Vf={"accept-charset":"acceptCharset",accesskey:"accessKey",bgcolor:"bgColor","class":"className",codebase:"codeBase",colspan:"colSpan",contenteditable:"contentEditable",datetime:"dateTime",dirname:"dirName","for":"htmlFor","http-equiv":"httpEquiv",ismap:"isMap",maxlength:"maxLength",novalidate:"noValidate",pubdate:"pubDate",readonly:"readOnly",rowspan:"rowSpan",tabindex:"tabIndex",usemap:"useMap"},Pf=Xa?vc("div"):null,Mf=!1,If=function(t){function e(e){t.call(this,e),this.attributes=[],this.owner=e.owner,this.fragment=new Qp({ractive:this.ractive,owner:this,template:this.template}),this.fragment.findNextNode=d,this.dirty=!1}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.bind=function(){this.fragment.bind()},n.bubble=function(){this.dirty||(this.dirty=!0,this.owner.bubble())},n.destroyed=function(){this.unrender()},n.render=function(){this.node=this.owner.node,this.node&&(this.isSvg=this.node.namespaceURI===Oc),Mf=!0,this.rendered||this.fragment.render(),this.rendered=!0,this.dirty=!0,this.update(),Mf=!1},n.toString=function(){return this.fragment.toString()},n.unbind=function(t){this.fragment.unbind(t)},n.unrender=function(){this.rendered=!1,this.fragment.unrender()},n.update=function(){var t,e,n=this;if(this.dirty){this.dirty=!1;var i=Mf;Mf=!0,this.fragment.update(),this.rendered&&this.node&&(t=this.fragment.toString(),e=Nr(t,this.isSvg),this.attributes.filter(function(t){return jr(e,t)}).forEach(function(t){n.node.removeAttribute(t.name)}),e.forEach(function(t){n.node.setAttribute(t.name,t.value)}),this.attributes=e),Mf=i||!1}},e}(Cf),Rf=/^\s*$/,Bf=!1,Kf=function(t){function e(e){return t.call(this,e),this.name=e.template.n,this.namespace=null,this.owner=e.owner||e.up.owner||e.element||Un(e.up),this.element=e.element||(this.owner.attributeByName?this.owner:Un(e.up)),this.up=e.up,this.ractive=this.up.ractive,this.rendered=!1,this.updateDelegate=null,this.fragment=null,this.element.attributeByName[this.name]=this,Qa(e.template.f)?(this.fragment=new Qp({owner:this,template:e.template.f}),this.interpolator=this.fragment&&1===this.fragment.items.length&&this.fragment.items[0].type===Zo&&this.fragment.items[0],void(this.interpolator&&(this.interpolator.owner=this))):(this.value=e.template.f,void(0===this.value?this.value="":f(this.value)&&(this.value=!0)))}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.bind=function(){this.fragment&&this.fragment.bind()},n.bubble=function(){this.dirty||(this.up.bubble(),this.element.bubble(),this.dirty=!0)},n.firstNode=function(){},n.getString=function(){Bf=!0;var t=this.fragment?this.fragment.toString():null!=this.value?""+this.value:"";return Bf=!1,t},n.getValue=function(){Bf=!0;var t=this.fragment?this.fragment.valueOf():Hu[this.name.toLowerCase()]?!0:this.value;return Bf=!1,t},n.render=function(){var t=this.element.node;if(this.node=t,t.namespaceURI&&t.namespaceURI!==Vc.html||(this.propertyName=Vf[this.name]||this.name,void 0!==t[this.propertyName]&&(this.useProperty=!0),(Hu[this.name.toLowerCase()]||this.isTwoway)&&(this.isBoolean=!0),"value"===this.propertyName&&(t._ractive.value=this.value)),t.namespaceURI){var e=this.name.indexOf(":");-1!==e?this.namespace=Tr(t,this.name.slice(0,e)):this.namespace=t.namespaceURI}this.rendered=!0,this.updateDelegate=fr(this),this.updateDelegate()},n.toString=function(){if(Or())return"";Bf=!0;var t=this.getValue();if("value"!==this.name||void 0===this.element.getAttribute("contenteditable")&&"select"!==this.element.name&&"textarea"!==this.element.name){if("name"===this.name&&"input"===this.element.name&&this.interpolator&&"radio"===this.element.getAttribute("type"))return'name="{{'+this.interpolator.model.getKeypath()+'}}"';if(this.owner!==this.element||"style"!==this.name&&"class"!==this.name&&!this.style&&!this.inlineClass){if(!(this.rendered||this.owner!==this.element||this.name.indexOf("style-")&&this.name.indexOf("class-")))return void(this.name.indexOf("style-")?this.inlineClass=this.name.substr(6):this.style=Ee(this.name.substr(6)));if(Hu[this.name.toLowerCase()])return t?l(t)?this.name+'="'+ui(t)+'"':this.name:"";if(null==t)return"";var e=ui(this.getString());return Bf=!1,e?this.name+'="'+e+'"':this.name}}},n.unbind=function(t){this.fragment&&this.fragment.unbind(t)},n.unrender=function(){this.updateDelegate(!0),this.rendered=!1},n.update=function(){if(this.dirty){var t;if(this.dirty=!1,this.fragment&&this.fragment.update(),this.rendered&&this.updateDelegate(),this.isTwoway&&!this.locked)this.interpolator.twowayBinding.lastVal(!0,this.interpolator.model.get());else if("value"===this.name&&(t=this.element.binding)){var e=t.attribute;e&&!e.dirty&&e.rendered&&this.element.binding.attribute.updateDelegate()}}},e}(Cf),Lf=function(t){function e(e){t.call(this,e),this.owner=e.owner||e.up.owner||Un(e.up),this.element=this.owner.attributeByName?this.owner:Un(e.up),this.flag="l"===e.template.v?"lazy":"twoway",this.bubbler=this.owner===this.element?this.element:this.up,this.element.type===Jo&&(Qa(e.template.f)&&(this.fragment=new Qp({owner:this,template:e.template.f})),this.interpolator=this.fragment&&1===this.fragment.items.length&&this.fragment.items[0].type===Zo&&this.fragment.items[0])}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.bind=function(){this.fragment&&this.fragment.bind(),Pr(this,this.getValue(),!0)},n.bubble=function(){this.dirty||(this.bubbler.bubble(),this.dirty=!0)},n.getValue=function(){return this.fragment?this.fragment.valueOf():"value"in this?this.value:"f"in this.template?this.template.f:!0},n.render=function(){Pr(this,this.getValue(),!0)},n.toString=function(){return""},n.unbind=function(t){this.fragment&&this.fragment.unbind(t),delete this.element[this.flag]},n.unrender=function(){this.element.rendered&&this.element.recreateTwowayBinding()},n.update=function(){this.dirty&&(this.dirty=!1,this.fragment&&this.fragment.update(),Pr(this,this.getValue(),!0))},e}(Cf),Df=qa(Cf.prototype);$a(Df,{bind:d,unbind:d,update:d,detach:function(){return ai(this.node)},firstNode:function(){return this.node},render:function(t){this.rendered=!0,this.node=Xa.createComment(this.template.c),t.appendChild(this.node)},toString:function(){return"<!-- "+this.template.c+" -->"},unrender:function(t){this.rendered&&t&&this.detach(),this.rendered=!1}}),Mr.prototype=Df;var Ff=function(t){function e(e){t.call(this,e,"@this"),this.ractive=e}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.joinKey=function(e){var n=t.prototype.joinKey.call(this,e);return"root"!==e&&"parent"!==e||n.isLink?"data"===e?this.ractive.viewmodel:"cssData"===e?this.ractive.constructor._cssModel:n:Br(n,e)},e}(Ll),zf={"@this":function(t){return t.getRactiveModel()},"@global":function(){return Fl},"@shared":function(){return Dl},"@style":function(t){return t.getRactiveModel().joinKey("cssData")},"@helpers":function(t){return t.getHelpers()}};zf["@"]=zf["@this"];var Uf=function(t){function e(e){t.call(this,null,null),this.isRoot=!0,this.root=this,this.ractive=e.ractive,this.value=e.data,this.adaptors=e.adapt,this.adapt()}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.attached=function(t){Kr(this,t)},n.createLink=function(t,e,n,i){for(var r=A(t),s=this;r.length;){var a=r.shift();s=s.childByKey[a]||s.joinKey(a)}return s.link(e,n,i)},n.detached=function(){Lr(this)},n.get=function(t,e){return t&&Z(this),e&&e.virtual===!1?this.value:this.getVirtual()},n.getHelpers=function(){return this.helpers||(this.helpers=new Ll(this.ractive.helpers,"helpers",this.ractive)),this.helpers},n.getKeypath=function(){return""},n.getRactiveModel=function(){return this.ractiveModel||(this.ractiveModel=new Ff(this.ractive))},n.getValueChildren=function(){var e=t.prototype.getValueChildren.call(this,this.value);return this.children.forEach(function(t){if(t._link){var n=e.indexOf(t);~n?e.splice(n,1,t._link):e.push(t._link)}}),e},n.has=function(e){if("~"===e[0]&&"/"===e[1]&&(e=e.slice(2)),zf[e]||""===e)return!0;if(t.prototype.has.call(this,e))return!0;var n=C(e);return this.childByKey[n]&&this.childByKey[n]._link?!0:void 0},n.joinKey=function(e,n){if("~"===e[0]&&"/"===e[1]&&(e=e.slice(2)),"@"!==e[0])return t.prototype.joinKey.call(this,e,n);var i=zf[e];return i?i(this):void 0},n.set=function(t){var e=this.wrapper;if(e){var n=!e.reset||e.reset(t)===!1;n&&(e.teardown(),this.wrapper=null,this.value=t,this.adapt())}else this.value=t,this.adapt();this.deps.forEach(Y),this.children.forEach(J)},n.retrieve=function(){return this.wrapper?this.wrapper.get():this.value},n.teardown=function(){t.prototype.teardown.call(this),this.ractiveModel&&this.ractiveModel.teardown()},e}(Bl);Uf.prototype.update=d;var $f=["adaptors","components","decorators","easing","events","interpolators","partials","transitions"],qf=["computed","helpers"],Hf=0,Zf=function(t){function e(e,n){var i=this;t.call(this,e);var r=e.template;this.isAnchor=r.t===nu,this.type=this.isAnchor?nu:su;var s=r.m,a=r.p||{};if("content"in a||(a.content=r.f||[]),this._partials=a,this.isAnchor)this.name=r.n,this.addChild=qr,this.removeChild=Hr;else{var o=new n({component:!0});this.instance=o,this.name=r.e,(o.el||o.target)&&(b("The <"+this.name+"> component has a default '"+(o.el?"el":"target")+"' property; it has been disregarded"),o.el=o.target=null);for(var u,h=e.up;h;){if(h.owner.type===au){u=h.owner.container;break}h=h.parent}o.parent=this.up.ractive,o.container=u||null,o.root=o.parent.root,o.component=this,Fr(this.instance,{partials:a},n),r=this.template,s=r.m,Qa(this.mappings)?s=(s||[]).concat(this.mappings):l(this.mappings)&&(s=(s||[]).concat(Sl.parse(this.mappings,{attributes:!0}).t)),o._inlinePartials=a}if(this.attributeByName={},this.attributes=[],s){var c=[];s.forEach(function(t){switch(t.t){case iu:case Ru:i.attributes.push(aa({owner:i,up:i.up,template:t}));break;case Ku:case Lu:case Bu:break;default:c.push(t)}}),c.length&&this.attributes.push(new If({owner:this,up:this.up,template:c}))}this.eventHandlers=[]}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.bind=function(){this.isAnchor||(this.attributes.forEach(W),this.eventHandlers.forEach(W),la(this.instance,{partials:this._partials},{cssIds:this.up.cssIds}),(this.instance.target||this.instance.el)&&(this.extern=!0),this.bound=!0)},n.bubble=function(){this.dirty||(this.dirty=!0,this.up.bubble())},n.destroyed=function(){!this.isAnchor&&this.instance.fragment&&this.instance.fragment.destroyed()},n.detach=function(){return this.isAnchor?this.instance?this.instance.fragment.detach():ri():this.instance.fragment.detach()},n.find=function(t,e){return this.instance?this.instance.fragment.find(t,e):void 0},n.findAll=function(t,e){this.instance&&this.instance.fragment.findAll(t,e)},n.findComponent=function(t,e){return t&&this.name!==t?this.instance.fragment?this.instance.fragment.findComponent(t,e):void 0:this.instance},n.findAllComponents=function(t,e){var n=e.result;!this.instance||t&&this.name!==t||n.push(this.instance),this.instance&&this.instance.findAllComponents(t,e)},n.firstNode=function(t){return this.instance?this.instance.fragment.firstNode(t):void 0},n.getContext=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return t.unshift(this.instance),rn.apply(null,t)},n.rebound=function(t){this.attributes.forEach(function(e){return e.rebound(t)})},n.render=function(t,e){this.isAnchor?(this.rendered=!0,this.target=t,Wf.length||(Wf.push(this.ractive),e?(this.occupants=e,Gr(),this.occupants=null):jl.scheduleTask(Gr,!0))):(this.attributes.forEach(nt),this.eventHandlers.forEach(nt),this.extern?(this.instance.delegate=!1,this.instance.render()):fa(this.instance,t,null,e),this.rendered=!0)},n.shuffled=function(){t.prototype.shuffled.call(this),this.instance&&!this.instance.isolated&&this.instance.fragment&&this.instance.fragment.shuffled()},n.toString=function(){return this.instance?this.instance.toHTML():void 0},n.unbind=function(t){this.isAnchor||(this.bound=!1,this.attributes.forEach(st),t?this.instance.fragment.unbind():Rr(this.instance,function(){return jl.promise()}))},n.unrender=function(t){this.shouldDestroy=t,this.isAnchor?(this.item&&Wr(this,this.item),this.target=null,Wf.length||(Wf.push(this.ractive),jl.scheduleTask(Gr,!0))):(this.instance.unrender(),this.instance.el=this.instance.target=null,this.attributes.forEach(at),this.eventHandlers.forEach(at)),this.rendered=!1},n.update=function(){this.dirty=!1,this.instance&&(this.instance.fragment.update(),this.attributes.forEach(ot),this.eventHandlers.forEach(ot))},e}(Cf),Wf=[],Gf=function(e){function n(t,n){e.call(this,t,n),this.isReadonly=!this.root.ractive.syncComputedChildren,this.dirty=!0,this.isComputed=!0}e&&(n.__proto__=e);var i=n.prototype=Object.create(e&&e.prototype);i.constructor=n;var r={setRoot:{}};return r.setRoot.get=function(){return this.parent.setRoot},i.applyValue=function(t){if(e.prototype.applyValue.call(this,t),!this.isReadonly){for(var n=this.parent;n&&n.shuffle;)n=n.parent;n&&n.dependencies.forEach(J)}this.setRoot&&this.setRoot.set(this.setRoot.value)},i.get=function(t,e){if(t&&Z(this),this.dirty){var n=this.parent.get();this.value=n?n[this.key]:void 0,this.wrapper&&(this.newWrapperValue=this.value),this.adapt()}return this.dirty=!1,(e&&"unwrap"in e?e.unwrap!==!1:t)&&this.wrapper?this.wrapperValue:this.value},i.handleChange=function(){return this.dirty?void this.deps.forEach(Y):(this.dirty=!0,this.boundValue&&(this.boundValue=null),this.links.forEach(tt),this.deps.forEach(Y),void this.children.forEach(Y))},i.joinKey=function(e){if(f(e)||""===e)return this;if(!t(this.childByKey,e)){var i=new n(this,e);this.children.push(i),this.childByKey[e]=i}return this.childByKey[e]},Object.defineProperties(i,r),n}(Bl),Qf=function(t){function e(e,n,i){t.call(this,e,i),this.signature=n,this.isReadonly=!this.signature.setter,this.isComputed=!0,this.dependencies=[],this.children=[],this.childByKey={},this.deps=[],this.dirty=!0,this.shuffle=void 0}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);n.constructor=e;var r={setRoot:{}};return r.setRoot.get=function(){return this.signature.setter?this:void 0},n.get=function(t,e){if(t&&Z(this),this.dirty){var n=this.value;this.value=this.getValue(),jl.active()?i(n,this.value)||this.notifyUpstream():(jl.start(),i(n,this.value)||this.notifyUpstream(),jl.end()),this.wrapper&&(this.newWrapperValue=this.value),this.adapt(),this.dirty=!1}return L(this,this.wrapper&&(e&&"unwrap"in e?e.unwrap!==!1:t)?this.wrapperValue:this.value,!e||e.shouldBind!==!1)},n.getContext=function(){return this.parent.isRoot?this.root.ractive:this.parent.get(!1,Po)},n.getValue=function(){q();var t;try{t=this.signature.getter.call(this.root.ractive,this.getContext(),this.getKeypath())}catch(e){if(b("Failed to compute "+this.getKeypath()+": "+(e.message||e)),no){console.groupCollapsed&&console.groupCollapsed("%cshow details","color: rgb(82, 140, 224); font-weight: normal; text-decoration: underline;");var n=this.signature;console.error(e.name+": "+e.message+"\n\n"+n.getterString+(n.getterUseStack?"\n\n"+e.stack:"")),console.groupCollapsed&&console.groupEnd()}}var i=H();return this.parent.keypath&&!~i.indexOf(this.parent)&&i.push(this.parent),this.setDependencies(i),t},n.mark=function(){this.handleChange()},n.rebind=function(t,e){t!==e&&this.handleChange()},n.set=function(t){if(this.isReadonly)throw new Error("Cannot set read-only computed value '"+this.key+"'");this.signature.setter(t,this.getContext(),this.getKeypath()),this.mark()},n.setDependencies=function(t){for(var e=this,n=this.dependencies.length;n--;){var i=e.dependencies[n];~t.indexOf(i)||i.unregister(e)}for(n=t.length;n--;){var r=t[n];~e.dependencies.indexOf(r)||r.register(e)}this.dependencies=t},n.teardown=function(){for(var e=this,n=this.dependencies.length;n--;)e.dependencies[n]&&e.dependencies[n].unregister(e);this.parent.computed[this.key]===this&&delete this.parent.computed[this.key],t.prototype.teardown.call(this)},Object.defineProperties(n,r),e}(Bl),Yf=Qf.prototype,Jf=Gf.prototype;Yf.handleChange=Jf.handleChange,Yf.joinKey=Jf.joinKey,Rl.Computation=Qf;var Xf=function(t){function e(e,n){var i=this;t.call(this,e.ractive.viewmodel,null),this.fragment=e,this.template=n,this.isReadonly=!0,this.isComputed=!0,this.dirty=!0,this.fn=e.ractive.allowExpressions===!1?d:dt(n.s,n.r.length),this.models=this.template.r.map(function(t){return Je(i.fragment,t)}),this.dependencies=[],this.shuffle=void 0,this.bubble()}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);
return n.constructor=e,n.bubble=function(t){void 0===t&&(t=!0),this.keypath=void 0,t&&this.handleChange()},n.getKeypath=function(){var t=this;return this.template?(this.keypath||(this.keypath="@"+this.template.s.replace(/_(\d+)/g,function(e,n){if(n>=t.models.length)return e;var i=t.models[n];return i?i.getKeypath():"@undefined"})),this.keypath):"@undefined"},n.getValue=function(){var t=this;q();var e;try{var n=this.models.map(function(t){return t?t.get(!0):void 0});e=this.fn.apply(this.fragment.ractive,n)}catch(i){b("Failed to compute "+this.getKeypath()+": "+(i.message||i))}var r=H();return this.dependencies.filter(function(t){return!~r.indexOf(t)}).forEach(function(e){e.unregister(t),P(t.dependencies,e)}),r.filter(function(e){return!~t.dependencies.indexOf(e)}).forEach(function(e){e.register(t),t.dependencies.push(e)}),e},n.notifyUpstream=function(){},n.rebind=function(t,e,n){var i=this.models.indexOf(e);~i&&(t=lt(this.template.r[i],t,e),t!==e&&(e.unregister(this),this.models.splice(i,1,t),t&&t.addShuffleRegister(this,"mark"))),this.bubble(!n)},n.rebound=function(t){var e=this;this.models=this.template.r.map(function(t){return Je(e.fragment,t)}),t&&this.bubble(!0)},n.retrieve=function(){return this.get()},n.teardown=function(){var e=this;this.fragment=void 0,this.dependencies&&this.dependencies.forEach(function(t){return t.unregister(e)}),t.prototype.teardown.call(this)},n.unreference=function(){t.prototype.unreference.call(this),Qr(this)},n.unregister=function(e){t.prototype.unregister.call(this,e),Qr(this)},n.unregisterLink=function(e){t.prototype.unregisterLink.call(this,e),Qr(this)},e}(Bl),td=Xf.prototype,ed=Qf.prototype;td.get=ed.get,td.handleChange=ed.handleChange,td.joinKey=ed.joinKey,td.mark=ed.mark,td.unbind=d;var nd={update:d,teardown:d},id=function(t){this.owner=t.owner||t.up.owner||Un(t.up),this.element=this.owner.attributeByName?this.owner:Un(t.up),this.up=t.up||this.owner.up,this.ractive=this.up.ractive||this.owner.ractive;var e=this.template=t.template;this.name=e.n,this.node=null,this.handle=null,this.element.decorators.push(this)},rd=id.prototype;rd.bind=function(){var t=this.element===this.owner?new Qp({owner:this.owner}):this.up;Yr(this,this.template,t,{register:!0})},rd.bubble=function(){this.dirty||(this.dirty=!0,this.owner.bubble(),this.up.bubble())},rd.destroyed=function(){this.handle&&(this.handle.teardown(),this.handle=null),this.shouldDestroy=!0},rd.handleChange=function(){this.bubble()},rd.rebound=function(t){this.model&&this.model.rebound(t)},rd.render=function(){var t=this;this.shouldDestroy=!1,this.handle&&this.unrender();var e=this.ractive;jl.scheduleTask(function(){if(t.element.rendered){var n=x("decorators",e,t.name);if(!n)return y(Eo(t.name,"decorator")),void(t.handle=nd);t.node=t.element.node;var i=t.model?t.model.get():[];if(cc.f=t.up,t.handle=n.apply(e,[t.node].concat(i)),cc.f=null,!t.handle||!t.handle.teardown)throw new Error("The '"+t.name+"' decorator must return an object with a teardown method");t.shouldDestroy&&t.destroyed()}},!0)},rd.shuffled=function(){this.handle&&this.handle.shuffled&&this.handle.shuffled()},rd.toString=function(){return""},rd.unbind=function(){Xr(this,this.template)},rd.unrender=function(t){t&&!this.element.rendered||!this.handle||(this.handle.teardown(),this.handle=null)},rd.update=function(){var t=this.handle;if(!this.dirty)return void(t&&t.invalidate&&jl.scheduleTask(function(){return t.invalidate()},!0));if(this.dirty=!1,t)if(t.update){var e=this.model?this.model.get():[];t.update.apply(this.ractive,e)}else this.unrender(),this.render()},id.prototype.firstNode=d;var sd=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.toString=function(){return"<!DOCTYPE"+this.template.a+">"},e}(Cf),ad=sd.prototype;ad.bind=ad.render=ad.teardown=ad.unbind=ad.unrender=ad.update=d;var od=function(t,e){void 0===e&&(e="value"),this.element=t,this.ractive=t.ractive,this.attribute=t.attributeByName[e];var n=this.attribute.interpolator;n.twowayBinding=this;var i=n.model;if(i.isReadonly&&!i.setRoot){var r=i.getKeypath().replace(/^@/,"");return w("Cannot use two-way binding on <"+t.name+"> element: "+r+" is read-only. To suppress this warning use <"+t.name+" twoway='false'...>",{ractive:this.ractive}),!1}this.attribute.isTwoway=!0,this.model=i;var s=i.get();this.wasUndefined=f(s),f(s)&&this.getInitialValue&&(s=this.getInitialValue(),i.set(s)),this.lastVal(!0,s);var a=Un(this.element,!1,"form");a&&(this.resetValue=s,a.formBindings.push(this))},ud=od.prototype;ud.bind=function(){this.model.registerTwowayBinding(this)},ud.handleChange=function(){var t=this,e=this.getValue();this.lastVal()!==e&&(jl.start(),this.attribute.locked=!0,this.model.set(e),this.lastVal(!0,e),this.model.get()!==e?this.attribute.locked=!1:jl.scheduleTask(function(){return t.attribute.locked=!1}),jl.end())},ud.lastVal=function(t,e){return t?void(this.lastValue=e):this.lastValue},ud.rebind=function(t,e){var n=this;this.model&&this.model===e&&e.unregisterTwowayBinding(this),t&&(this.model=t,jl.scheduleTask(function(){return t.registerTwowayBinding(n)}))},ud.rebound=function(){this.model&&this.model.unregisterTwowayBinding(this),this.model=this.attribute.interpolator.model,this.model&&this.model.registerTwowayBinding(this)},ud.render=function(){this.node=this.element.node,this.node._ractive.binding=this,this.rendered=!0},ud.setFromNode=function(t){this.model.set(t.value)},ud.unbind=function(){this.model&&this.model.unregisterTwowayBinding(this)},od.prototype.unrender=d;var hd=function(t){function e(e){t.call(this,e,"checked")}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.render=function(){t.prototype.render.call(this),this.element.on("change",ts),this.node.attachEvent&&this.element.on("click",ts)},n.unrender=function(){this.element.off("change",ts),this.node.attachEvent&&this.element.off("click",ts)},n.getInitialValue=function(){return!!this.element.getAttribute("checked")},n.getValue=function(){return this.node.checked},n.setFromNode=function(t){this.model.set(t.checked)},e}(od),ld=function(t,e,n){var i=this;this.model=e,this.hash=t,this.getValue=function(){return i.value=n.call(i),i.value},this.bindings=[]},cd=ld.prototype;cd.add=function(t){this.bindings.push(t)},cd.bind=function(){var t=this;this.value=this.model.get(),this.bindings.forEach(function(e){return e.lastVal(!0,t.value)}),this.model.registerTwowayBinding(this),this.bound=!0},cd.remove=function(t){P(this.bindings,t),this.bindings.length||this.unbind()},cd.unbind=function(){this.model.unregisterTwowayBinding(this),this.bound=!1,delete this.model[this.hash]},ld.prototype.rebind=od.prototype.rebind;var fd=[].push,dd=function(t){function e(e){if(t.call(this,e,"name"),this.checkboxName=!0,this.group=es("checkboxes",this.model,ns),this.group.add(this),this.noInitialValue&&(this.group.noInitialValue=!0),this.group.noInitialValue&&this.element.getAttribute("checked")){var n=this.model.get(),i=this.element.getAttribute("value");this.arrayContains(n,i)||fd.call(n,i)}}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.bind=function(){this.group.bound||this.group.bind()},n.getInitialValue=function(){return this.noInitialValue=!0,[]},n.getValue=function(){return this.group.value},n.handleChange=function(){this.isChecked=this.element.node.checked;var e=this.model.get();this.group.value=void 0===e?[]:e.slice();var n=this.element.getAttribute("value");this.isChecked&&!this.arrayContains(this.group.value,n)?this.group.value.push(n):!this.isChecked&&this.arrayContains(this.group.value,n)&&this.removeFromArray(this.group.value,n),this.lastValue=null,t.prototype.handleChange.call(this)},n.render=function(){t.prototype.render.call(this);var e=this.node,n=this.model.get(),i=this.element.getAttribute("value");Qa(n)?this.isChecked=this.arrayContains(n,i):this.isChecked=this.element.compare(n,i),e.name="{{"+this.model.getKeypath()+"}}",e.checked=this.isChecked,this.element.on("change",ts),this.node.attachEvent&&this.element.on("click",ts)},n.setFromNode=function(t){if(this.group.bindings.forEach(function(t){return t.wasUndefined=!0}),t.checked){var e=this.group.getValue();e.push(this.element.getAttribute("value")),this.group.model.set(e)}},n.unbind=function(){this.group.remove(this)},n.unrender=function(){var t=this.element;t.off("change",ts),this.node.attachEvent&&t.off("click",ts)},n.arrayContains=function(t,e){for(var n=this,i=t.length;i--;)if(n.element.compare(e,t[i]))return!0;return!1},n.removeFromArray=function(t,e){var n=this;if(t)for(var i=t.length;i--;)n.element.compare(e,t[i])&&t.splice(i,1)},e}(od),pd=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.getInitialValue=function(){return this.element.fragment?this.element.fragment.toString():""},n.getValue=function(){return this.element.node.innerHTML},n.render=function(){t.prototype.render.call(this);var e=this.element;e.on("change",ts),e.on("blur",ts),this.ractive.lazy||(e.on("input",ts),this.node.attachEvent&&e.on("keyup",ts))},n.setFromNode=function(t){this.model.set(t.innerHTML)},n.unrender=function(){var t=this.element;t.off("blur",ts),t.off("change",ts),t.off("input",ts),t.off("keyup",ts)},e}(od),md=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.getInitialValue=function(){return""},n.getValue=function(){return this.node.value},n.render=function(){t.prototype.render.call(this);var e=this.ractive.lazy,n=!1,i=this.element;"lazy"in this.element&&(e=this.element.lazy),r(e)&&(n=+e,e=!1),this.handler=n?rs(n):ts;var s=this.node;i.on("change",ts),"file"!==s.type&&(e||(i.on("input",this.handler),s.attachEvent&&i.on("keyup",this.handler)),i.on("blur",is))},n.unrender=function(){var t=this.element;this.rendered=!1,t.off("change",ts),t.off("input",this.handler),t.off("keyup",this.handler),t.off("blur",is)},e}(od),vd=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.getInitialValue=function(){return void 0},n.getValue=function(){return this.node.files},n.render=function(){this.element.lazy=!1,t.prototype.render.call(this)},n.setFromNode=function(t){this.model.set(t.files)},e}(md),gd=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.getInitialValue=function(){return this.element.options.filter(function(t){return t.getAttribute("selected")}).map(function(t){return t.getAttribute("value")})},n.getValue=function(){for(var t=this.element.node.options,e=t.length,n=[],i=0;e>i;i+=1){var r=t[i];if(r.selected){var s=r._ractive?r._ractive.value:r.value;n.push(s)}}return n},n.handleChange=function(){var e=this.attribute,n=e.getValue(),i=this.getValue();return(f(n)||!j(i,n))&&t.prototype.handleChange.call(this),this},n.render=function(){t.prototype.render.call(this),this.element.on("change",ts),f(this.model.get())&&this.handleChange()},n.setFromNode=function(t){for(var e=ss(t),n=e.length,i=new Array(n);n--;){var r=e[n];i[n]=r._ractive?r._ractive.value:r.value}this.model.set(i)},n.unrender=function(){this.element.off("change",ts)},e}(od),yd=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.getInitialValue=function(){return void 0},n.getValue=function(){var t=parseFloat(this.node.value);return isNaN(t)?void 0:t},n.setFromNode=function(t){var e=parseFloat(t.value);isNaN(e)||this.model.set(e)},e}(md),bd={},wd=function(t){function e(e){t.call(this,e,"checked"),this.siblings=as(this.ractive._guid+this.element.getAttribute("name")),this.siblings.push(this)}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.getValue=function(){return this.node.checked},n.handleChange=function(){jl.start(),this.siblings.forEach(function(t){t.model.set(t.getValue())}),jl.end()},n.render=function(){t.prototype.render.call(this),this.element.on("change",ts),this.node.attachEvent&&this.element.on("click",ts)},n.setFromNode=function(t){this.model.set(t.checked)},n.unbind=function(){P(this.siblings,this)},n.unrender=function(){this.element.off("change",ts),this.node.attachEvent&&this.element.off("click",ts)},e}(od),xd=function(t){function e(e){var n=this;t.call(this,e,"name"),this.group=es("radioname",this.model,os),this.group.add(this),e.checked&&(this.group.value=this.getValue()),this.attribute.interpolator.pathChanged=function(){return n.updateName()}}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.bind=function(){this.group.bound||this.group.bind()},n.getInitialValue=function(){return this.element.getAttribute("checked")?this.element.getAttribute("value"):void 0},n.getValue=function(){return this.element.getAttribute("value")},n.handleChange=function(){this.node.checked&&(this.group.value=this.getValue(),t.prototype.handleChange.call(this)),this.updateName()},n.lastVal=function(t,e){return this.group?t?void(this.group.lastValue=e):this.group.lastValue:void 0},n.rebind=function(e,n){t.prototype.rebind.call(this,e,n),this.updateName()},n.rebound=function(e){t.prototype.rebound.call(this,e),this.updateName()},n.render=function(){t.prototype.render.call(this);var e=this.node;this.updateName(),e.checked=this.element.compare(this.model.get(),this.element.getAttribute("value")),this.element.on("change",ts),e.attachEvent&&this.element.on("click",ts)},n.setFromNode=function(t){t.checked&&this.group.model.set(this.element.getAttribute("value"))},n.unbind=function(){this.group.remove(this)},n.unrender=function(){var t=this.element;t.off("change",ts),this.node.attachEvent&&t.off("click",ts)},n.updateName=function(){this.node&&(this.node.name="{{"+this.model.getKeypath()+"}}")},e}(od),kd=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.forceUpdate=function(){var t=this,e=this.getValue();void 0!==e&&(this.attribute.locked=!0,jl.scheduleTask(function(){return t.attribute.locked=!1}),this.model.set(e))},n.getInitialValue=function(){if(void 0===this.element.getAttribute("value")){var t=this.element.options,e=t.length;if(e){for(var n,i,r=e;r--;){var s=t[r];if(s.getAttribute("selected")){s.getAttribute("disabled")||(n=s.getAttribute("value")),i=!0;break}}if(!i)for(;++r<e;)if(!t[r].getAttribute("disabled")){n=t[r].getAttribute("value");break}return void 0!==n&&(this.element.attributeByName.value.value=n),n}}},n.getValue=function(){var t,e=this.node.options,n=e.length;for(t=0;n>t;t+=1){var i=e[t];if(e[t].selected&&!e[t].disabled)return i._ractive?i._ractive.value:i.value}},n.render=function(){t.prototype.render.call(this),this.element.on("change",ts)},n.setFromNode=function(t){var e=ss(t)[0];this.model.set(e._ractive?e._ractive.value:e.value)},n.unrender=function(){this.element.off("change",ts)},e}(od),_d=/;\s*$/,Ed=function(t){function e(e){var n=this;if(t.call(this,e),this.name=e.template.e.toLowerCase(),this.parent=Un(this.up,!1),this.parent&&"option"===this.parent.name)throw new Error("An <option> element cannot contain other elements (encountered <"+this.name+">)");this.decorators=[],this.attributeByName={};for(var i,r,s,a,o,u,h,c,f=this.template.m,d=f&&f.length||0,p=0;d>p;p++)if(h=f[p],h.g)(n.statics||(n.statics={}))[h.n]=l(h.f)?h.f:h.n;else switch(h.t){case iu:case Lu:case Bu:case Ru:case Ku:s=aa({owner:n,up:n.up,template:h}),r=h.n,i=i||(i=n.attributes=[]),"value"===r?a=s:"name"===r?u=s:"class"===r?o=s:i.push(s);break;case Du:n.delegate=!1;break;default:(c||(c=[])).push(h)}a&&i.push(a),u&&i.push(u),o&&i.unshift(o),c&&((i||(this.attributes=[])).push(new If({owner:this,up:this.up,template:c})),c=[]),e.template.f&&!e.deferContent&&(this.fragment=new Qp({template:e.template.f,owner:this,cssIds:null})),this.binding=null}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.bind=function(){var t=this.attributes;if(t){t.binding=!0;for(var e=t.length,n=0;e>n;n++)t[n].bind();t.binding=!1}this.fragment&&this.fragment.bind(),this.binding?this.binding.bind():this.recreateTwowayBinding()},n.createTwowayBinding=function(){if("twoway"in this?this.twoway:this.ractive.twoway){var t=hs(this);if(t){var e=new t(this);if(e&&e.model)return e}}},n.destroyed=function(){this.attributes&&this.attributes.forEach(Q),this.fragment&&this.fragment.destroyed()},n.detach=function(){return this.rendered||this.destroyed(),ai(this.node)},n.find=function(t,e){return this.node&&gc(this.node,t)?this.node:this.fragment?this.fragment.find(t,e):void 0},n.findAll=function(t,e){var n=e.result;gc(this.node,t)&&n.push(this.node),this.fragment&&this.fragment.findAll(t,e)},n.findNextNode=function(){return null},n.firstNode=function(){return this.node},n.getAttribute=function(t){if(this.statics&&t in this.statics)return this.statics[t];var e=this.attributeByName[t];return e?e.getValue():void 0},n.getContext=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return this.fragment?(n=this.fragment).getContext.apply(n,t):(this.ctx||(this.ctx=new dc(this.up,this)),t.unshift(qa(this.ctx)),$a.apply(null,t));var n},n.off=function(t,e,n){void 0===n&&(n=!1);var i=this.up.delegate,r=this.listeners&&this.listeners[t];if(r)if(P(r,e),i){var s=(i.listeners||(i.listeners=[]))&&(i.listeners[t]||(i.listeners[t]=[]));s.refs&&!--s.refs&&i.off(t,vs,!0)}else if(this.rendered){var a=this.node,o=a.addEventListener,u=a.removeEventListener;r.length?r.length&&!r.refs&&n&&(u.call(a,t,ys,!0),o.call(a,t,ys,!1)):u.call(a,t,ys,n)}},n.on=function(t,e,n){void 0===n&&(n=!1);var i=this.up.delegate,r=(this.listeners||(this.listeners={}))[t]||(this.listeners[t]=[]);if(i){var s=(i.listeners||(i.listeners=[]))&&i.listeners[t]||(i.listeners[t]=[]);s.refs?s.refs++:(s.refs=0,i.on(t,vs,!0),s.refs++)}else if(this.rendered){var a=this.node,o=a.addEventListener,u=a.removeEventListener;r.length?r.length&&!r.refs&&n&&(u.call(a,t,ys,!1),o.call(a,t,ys,!0)):o.call(a,t,ys,n)}O(this.listeners[t],e)},n.recreateTwowayBinding=function(){this.binding&&(this.binding.unbind(),this.binding.unrender()),(this.binding=this.createTwowayBinding())&&(this.binding.bind(),this.rendered&&this.binding.render())},n.rebound=function(e){t.prototype.rebound.call(this,e),this.attributes&&this.attributes.forEach(function(t){return t.rebound(e)}),this.binding&&this.binding.rebound(e)},n.render=function(t,e){var n=this;this.namespace=fs(this);var i,r=!1;if(e)for(var s;s=e.shift();){if(s.nodeName.toUpperCase()===n.template.e.toUpperCase()&&s.namespaceURI===n.namespace){n.node=i=s,r=!0;break}ai(s)}if(!r&&this.node&&(i=this.node,t.appendChild(i),r=!0),!i){var a=this.template.e;i=vc(this.namespace===Ac?a.toLowerCase():a,this.namespace,this.getAttribute("is")),this.node=i}Ha(i,"_ractive",{value:{proxy:this},configurable:!0}),this.statics&&Wa(this.statics).forEach(function(t){i.setAttribute(t,n.statics[t])}),r&&this.foundNode&&this.foundNode(i);var o=this.intro;if(o&&o.shouldFire("intro")&&(o.isIntro=!0,o.isOutro=!1,jl.registerTransition(o)),this.fragment){var u=r?I(i.childNodes):void 0;this.fragment.render(i,u),u&&u.forEach(ai)}if(r){this.binding&&this.binding.wasUndefined&&this.binding.setFromNode(i);for(var h=i.attributes.length;h--;){var l=i.attributes[h].name;l in n.attributeByName||n.statics&&l in n.statics||i.removeAttribute(l)}}if(this.up.cssIds&&i.setAttribute("data-ractive-css",this.up.cssIds.map(function(t){return"{"+t+"}"}).join(" ")),this.attributes)for(var c=this.attributes.length,f=0;c>f;f++)n.attributes[f].render();if(this.binding&&this.binding.render(),!this.up.delegate&&this.listeners){var d=this.listeners;for(var p in d)d[p]&&d[p].length&&n.node.addEventListener(p,ys,!!d[p].refs)}r||t.appendChild(i),this.rendered=!0},n.shuffled=function(){t.prototype.shuffled.call(this),this.decorators.forEach(it)},n.toString=function(){var t=this,e=this.template.e,n=this.attributes&&this.attributes.map(cs).join("")||"";this.statics&&Wa(this.statics).forEach(function(e){return"class"!==e&&"style"!==e&&(n=" "+e+'="'+ui(t.statics[e])+'"'+n)}),"option"===this.name&&this.isSelected()&&(n+=" selected"),"input"===this.name&&ls(this)&&(n+=" checked");var i=this.statics?this.statics.style:void 0,r=this.statics?this.statics["class"]:void 0;this.attributes&&this.attributes.forEach(function(t){"class"===t.name?r=(r||"")+(r?" ":"")+ui(t.getString()):"style"===t.name?(i=(i||"")+(i?" ":"")+ui(t.getString()),i&&!_d.test(i)&&(i+=";")):t.style?i=(i||"")+(i?" ":"")+t.style+": "+ui(t.getString())+";":t.inlineClass&&t.getValue()&&(r=(r||"")+(r?" ":"")+t.inlineClass)}),void 0!==i&&(n=" style"+(i?'="'+i+'"':"")+n),void 0!==r&&(n=" class"+(r?'="'+r+'"':"")+n),this.up.cssIds&&(n+=' data-ractive-css="'+this.up.cssIds.map(function(t){return"{"+t+"}"}).join(" ")+'"');var s="<"+e+n+">";return Zu[this.name.toLowerCase()]?s:("textarea"===this.name&&void 0!==this.getAttribute("value")?s+=wt(this.getAttribute("value")):void 0!==this.getAttribute("contenteditable")&&(s+=this.getAttribute("value")||""),this.fragment&&(s+=this.fragment.toString(!/^(?:script|style)$/i.test(this.template.e))),s+="</"+e+">")},n.unbind=function(t){var e=this.attributes;if(e){e.unbinding=!0;for(var n=e.length,i=0;n>i;i++)e[i].unbind(t);e.unbinding=!1}this.binding&&this.binding.unbind(t),this.fragment&&this.fragment.unbind(t)},n.unrender=function(t){if(this.rendered){this.rendered=!1;var e=this.intro;e&&e.complete&&e.complete(),"option"===this.name?this.detach():t&&jl.detachWhenReady(this);var n=this.outro;n&&n.shouldFire("outro")&&(n.isIntro=!1,n.isOutro=!0,jl.registerTransition(n)),this.fragment&&this.fragment.unrender(),this.binding&&this.binding.unrender()}},n.update=function(){if(this.dirty){this.dirty=!1;var t=this.attributes;if(t)for(var e=t.length,n=0;e>n;n++)t[n].update();this.fragment&&this.fragment.update()}},e}(Nf),Sd=!1,Ad=!1,Cd=!1,Od=null!==Ja?Ja.UIEvent:null,Nd=function(t){function e(e){t.call(this,e),this.formBindings=[]}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.render=function(e,n){t.prototype.render.call(this,e,n),this.on("reset",bs)},n.unrender=function(e){this.off("reset",bs),t.prototype.unrender.call(this,e)},e}(Ed),jd=function(t,e){-1!==t.indexOf("*")&&m('Only component proxy-events may contain "*" wildcards, <'+e.name+" on-"+t+'="..."/> is not valid'),this.name=t,this.owner=e,this.handler=null},Td=jd.prototype;Td.bind=function(){},Td.render=function(t){var e=this,n=this.name,i=function(){var i=e.owner.node;e.owner.on(n,e.handler=function(e){return t.fire({node:i,original:e,event:e,name:n})})};"load"!==n?jl.scheduleTask(i,!0):i()},Td.unbind=function(){},Td.unrender=function(){this.handler&&this.owner.off(this.name,this.handler)};var Vd=function(t,e,n,i){this.eventPlugin=t,this.owner=e,this.name=n,this.handler=null,this.args=i},Pd=Vd.prototype;Pd.bind=function(){},Pd.render=function(t){var e=this;jl.scheduleTask(function(){var n=e.owner.node;cc.f=t.up,e.handler=e.eventPlugin.apply(e.owner.ractive,[n,function(i){return void 0===i&&(i={}),i.original?i.event=i.original:i.original=i.event,i.name=e.name,i.node=i.node||n,t.fire(i)}].concat(e.args||[])),cc.f=null})},Pd.unbind=function(){},Pd.unrender=function(){var t=this;this.handler?this.handler.teardown():jl.scheduleTask(function(){return t.handler&&t.handler.teardown()})};var Md=function(t,e){this.component=t,this.name=e,this.handler=null},Id=Md.prototype;Id.bind=function(t){var e=this.component.instance;this.handler=e.on(this.name,function(){for(var n=[],i=arguments.length;i--;)n[i]=arguments[i];if(n[0]instanceof dc){var r=n.shift();r.component=e,t.fire(r,n)}else t.fire({},n);return!1})},Id.render=function(){},Id.unbind=function(){this.handler.cancel()},Id.unrender=function(){};var Rd=/^(event|arguments|@node|@event|@context)(\..+)?$/,Bd=/^\$(\d+)(\..+)?$/,Kd=function(t){this.owner=t.owner||t.up.owner||Un(t.up),this.element=this.owner.attributeByName?this.owner:Un(t.up,!0),this.template=t.template,this.up=t.up,this.ractive=t.up.ractive,this.events=[]},Ld=Kd.prototype;Ld.bind=function(){var t=this;if(this.events.length&&(this.events.forEach(function(t){return t.unrender()}),this.events=[]),this.element.type===su||this.element.type===nu)this.template.n.forEach(function(e){t.events.push(new Md(t.element,e))});else{var e;if(e=this.template.a){var n=e.r.map(function(e){var n=Je(t.up,e);return n?n.get():void 0});try{e=dt(e.s,n.length).apply(null,n)}catch(i){e=null,b("Failed to compute args for event on-"+this.template.n.join("- ")+": "+(i.message||i))}}this.template.n.forEach(function(n){var i=x("events",t.ractive,n);i?t.events.push(new Vd(i,t.element,n,e)):t.events.push(new jd(n,t.element))})}this.models=null,O(this.element.events||(this.element.events=[]),this),Yr(this,this.template),this.fn||(this.action=this.template.f),this.events.forEach(function(e){return e.bind(t)})},Ld.destroyed=function(){this.events.forEach(function(t){return t.unrender()})},Ld.fire=function(t,e){var n=this;void 0===e&&(e=[]);var i=t instanceof dc&&t.refire?t:this.element.getContext(t);if(this.fn){var r=[],s=Jr(this,this.template,this.up,{specialRef:function(t){var e=Rd.exec(t);if(e)return{special:e[1],keys:e[2]?A(e[2].substr(1)):[]};var n=Bd.exec(t);return n?{special:"arguments",keys:[n[1]-1].concat(n[2]?A(n[2].substr(1)):[])}:void 0}});s&&s.forEach(function(s){if(!s)return r.push(void 0);if(s.special){var a,o=s.special;"@node"===o?a=n.element.node:"@event"===o?a=t&&t.event:"event"===o?(w("The event reference available to event directives is deprecated and should be replaced with @context and @event"),a=i):a="@context"===o?i:e;for(var u=s.keys.slice();a&&u.length;)a=a[u.shift()];return r.push(a)}return s.wrapper?r.push(s.wrapperValue):void r.push(s.get())});var a=this.ractive,o=a.event;a.event=i;var u=this.fn.apply(a,r),h=u.pop();if(h===!1){var c=t?t.original:void 0;c?(c.preventDefault&&c.preventDefault(),c.stopPropagation&&c.stopPropagation()):w("handler '"+this.template.n.join(" ")+"' returned false, but there is no event available to cancel")}else!u.length&&Qa(h)&&l(h[0])&&(h=xn(this.ractive,h.shift(),i,h));return a.event=o,h}return xn(this.ractive,this.action,i,e)},Ld.handleChange=function(){},Ld.render=function(){var t=this;this.events.forEach(function(e){return e.render(t)})},Ld.toString=function(){return""},Ld.unbind=function(t){P(this.element.events,this),this.events.forEach(function(e){return e.unbind(t)})},Ld.unrender=function(){this.events.forEach(function(t){return t.unrender()})};var Dd=Kd.prototype;Dd.firstNode=Dd.rebound=Dd.update=d;var Fd=function(t){function e(e,n){t.call(this,null,null,null,"@undefined"),this.root=e.ractive.viewmodel,this.template=n,this.rootLink=!0,this.template=n,this.fragment=e,this.rebound()}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.getKeypath=function(){return this.model?this.model.getKeypath():"@undefined"},n.rebound=function(){var t,e=this,n=this.fragment,i=this.template,r=this.base=Es(n,i);this.proxy&&ks(this);var s=this.proxy={rebind:function(n,o){o===r?(n=lt(i,n,o),n!==r&&(e.base=r=n)):~(t=a.indexOf(o))&&(n=lt(i.m[t].n,n,o),n!==a[t]&&a.splice(t,1,n||Ko)),n!==o&&(o.unregister(s),n&&n.addShuffleTask(function(){return n.register(s)}))},handleChange:function(){o()}};r.register(s);var a=this.members=i.m.map(function(t){if(l(t))return{get:function(){return t}};var e;return t.t===bu?(e=Je(n,t.n),e.register(s),e):(e=new Xf(n,t),e.register(s),e)}),o=function(){var t=r&&r.joinAll(a.reduce(function(t,e){var n=e.get();return Qa(n)?t.concat(n):(t.push(E(String(n))),t)},[]));t!==e.model&&(e.model=t,e.relinking(t),z(),_s(e),e.fragment.shuffled())};o()},n.teardown=function(){ks(this),t.prototype.teardown.call(this)},n.unreference=function(){t.prototype.unreference.call(this),this.deps.length||this.refs||this.teardown()},n.unregister=function(e){t.prototype.unregister.call(this,e),this.deps.length||this.refs||this.teardown()},e}(Lo),zd=Xf.prototype,Ud=Fd.prototype;Ud.unreference=zd.unreference,Ud.unregister=zd.unregister,Ud.unregisterLink=zd.unregisterLink;var $d=function(t){function e(e){t.call(this,e),e.owner&&(this.parent=e.owner),this.isStatic=!!e.template.s,this.model=null,this.dirty=!1}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.bind=function(t){var e=this.template.y?this.template.y.containerFragment:this.containerFragment||this.up,n=t||Es(e,this.template);if(n){var i=n.get();if(this.isStatic)return this.model={get:function(){return i}},void n.unreference();n.register(this),this.model=n}},n.handleChange=function(){this.bubble()},n.rebind=function(t,e,n){return this.isStatic?void 0:(t=lt(this.template,t,e,this.up),t===this.model?!1:(this.model&&this.model.unregister(this),t&&t.addShuffleRegister(this,"mark"),this.model=t,n||this.handleChange(),!0))},n.rebound=function(t){if(this.model){if(this.model.rebound)this.model.rebound(t);else{var e=this.template.y?this.template.y.containerFragment:this.containerFragment||this.up,n=Es(e,this.template);n!==this.model&&(this.model.unregister(this),this.bind(n))}t&&this.bubble()}this.fragment&&this.fragment.rebound(t)},n.unbind=function(){this.isStatic||(this.model&&this.model.unregister(this),this.model=void 0)},e}(Cf),qd=Ss.prototype=Object.create(Nf.prototype);$a(qd,$d.prototype,{constructor:Ss});var Hd=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.bubble=function(){this.owner&&this.owner.bubble(),t.prototype.bubble.call(this)},n.detach=function(){return ai(this.node)},n.firstNode=function(){return this.node},n.getString=function(){return this.model?oi(this.model.get()):""},n.render=function(t,e){if(!Or()){var n=this.value=this.getString();this.rendered=!0,xs(this,t,e,n)}},n.toString=function(t){var e=this.getString();return t?wt(e):e},n.unrender=function(t){t&&this.detach(),this.rendered=!1},n.update=function(){if(this.dirty&&(this.dirty=!1,this.rendered)){var t=this.getString();t!==this.value&&(this.node.data=this.value=t)}},n.valueOf=function(){return this.model?this.model.get():void 0},e}($d),Zd=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.render=function(e,n){t.prototype.render.call(this,e,n),this.node.defaultValue=this.node.value},n.compare=function(t,e){var n=this.getAttribute("value-comparator");if(n){if(h(n))return n(t,e);if(t&&e)return t[n]==e[n]}return t==e},e}(Ed),Wd={"true":!0,"false":!1,"null":null,undefined:void 0},Gd=new RegExp("^(?:"+Wa(Wd).join("|")+")"),Qd=/^(?:[+-]?)(?:(?:(?:0|[1-9]\d*)?\.\d+)|(?:(?:0|[1-9]\d*)\.)|(?:0|[1-9]\d*))(?:[eE][+-]?\d+)?/,Yd=/\$\{([^\}]+)\}/g,Jd=/^\$\{([^\}]+)\}/,Xd=/^\s*$/,tp=$o.extend({init:function(t,e){this.values=e.values,this.sp()},postProcess:function(t){return 1===t.length&&Xd.test(this.leftover)?{value:t[0].v}:null},converters:[function(e){if(!e.values)return null;var n=e.matchPattern(Jd);return n&&t(e.values,n)?{v:e.values[n]}:void 0},function(t){var e=t.matchPattern(Gd);return e?{v:Wd[e]}:void 0},function(t){var e=t.matchPattern(Qd);return e?{v:+e}:void 0},function(t){var e=St(t),n=t.values;return e&&n?{v:e.v.replace(Yd,function(t,e){return e in n?n[e]:e})}:e},function(t){if(!t.matchString("{"))return null;var e={};if(t.sp(),t.matchString("}"))return{v:e};for(var n;n=As(t);){if(e[n.key]=n.value,t.sp(),t.matchString("}"))return{v:e};if(!t.matchString(","))return null}return null},function(t){if(!t.matchString("["))return null;var e=[];if(t.sp(),t.matchString("]"))return{v:e};for(var n;n=t.read();){if(e.push(n.v),t.sp(),t.matchString("]"))return{v:e};if(!t.matchString(","))return null;t.sp()}return null}]}),ep=function(t){function e(e){t.call(this,e),this.name=e.template.n,
this.owner=e.owner||e.up.owner||e.element||Un(e.up),this.element=e.element||(this.owner.attributeByName?this.owner:Un(e.up)),this.up=this.element.up,this.ractive=this.up.ractive,this.element.attributeByName[this.name]=this,this.value=e.template.f}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.bind=function(){var t=this.template.f,e=this.element.instance.viewmodel;if(0===t)e.joinKey(this.name).set(!0);else if(l(t)){var n=Cs(t);e.joinKey(this.name).set(n?n.value:t)}else Qa(t)&&Os(this,!0)},n.rebound=function(t){if(this.boundFragment&&this.boundFragment.rebound(t),this.link){this.model=Es(this.up,this.template.f[0]);var e=this.element.instance.viewmodel.joinAll(A(this.name));e.link(this.model,this.name,{mapping:!0})}},n.render=function(){},n.unbind=function(t){this.model&&this.model.unregister(this),this.boundFragment&&this.boundFragment.unbind(t),this.element.bound&&this.link.target===this.model&&this.link.owner.unlink()},n.unrender=function(){},n.update=function(){this.dirty&&(this.dirty=!1,this.boundFragment&&this.boundFragment.update())},e}(Cf),np=function(t){function e(e){var n=e.template;n.a||(n.a={}),!f(n.a.value)||"disabled"in n.a||(n.a.value=n.f||""),t.call(this,e),this.select=Un(this.parent||this.up,!1,"select")}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.bind=function(){if(!this.select)return void t.prototype.bind.call(this);var e=this.attributeByName.selected;if(e&&void 0!==this.select.getAttribute("value")){var n=this.attributes.indexOf(e);this.attributes.splice(n,1),delete this.attributeByName.selected}t.prototype.bind.call(this),this.select.options.push(this)},n.bubble=function(){var e=this.getAttribute("value");this.node&&this.node.value!==e&&(this.node._ractive.value=e),t.prototype.bubble.call(this)},n.getAttribute=function(t){var e=this.attributeByName[t];return e?e.getValue():"value"===t&&this.fragment?this.fragment.valueOf():void 0},n.isSelected=function(){var t=this,e=this.getAttribute("value");if(f(e)||!this.select)return!1;var n=this.select.getAttribute("value");if(this.select.compare(n,e))return!0;if(this.select.getAttribute("multiple")&&Qa(n))for(var i=n.length;i--;)if(t.select.compare(n[i],e))return!0},n.render=function(e,n){t.prototype.render.call(this,e,n),this.attributeByName.value||(this.node._ractive.value=this.getAttribute("value"))},n.unbind=function(e){t.prototype.unbind.call(this,e),this.select&&P(this.select.options,this)},e}(Ed),ip=Ms.prototype=qa(Ss.prototype);$a(ip,{constructor:Ms,bind:function(){var t=this.template;if(this.yielder){if(this.container=this.up.ractive,this.component=this.container.component,this.containerFragment=this.up,!this.component)return this.fragment=new Qp({owner:this,template:[]}),void this.fragment.bind();this.up=this.component.up,t.r||t.x||t.rx||(this.refName="content")}this.macro?this.fn=this.macro:(this.refName||(this.refName=t.r),this.refName&&Bs(this,this.refName),this.partial||this.fn||(Ss.prototype.bind.call(this),this.model&&Bs(this,this.model.get()))),this.partial||this.fn||w("Could not find template for partial '"+this.name+"'"),Is(this,this.partial||[]),this.fn&&Ds(this),this.fragment.bind()},bubble:function(){this.dirty||(this.dirty=!0,this.yielder?this.containerFragment.bubble():this.up.bubble())},findNextNode:function(){return(this.containerFragment||this.up).findNextNode(this)},handleChange:function(){this.dirtyTemplate=!0,this.externalChange=!0,this.bubble()},rebound:function(t){var e=this;this._attrs&&Wa(this._attrs).forEach(function(n){return e._attrs[n].rebound(t)}),Ss.prototype.rebound.call(this,t)},refreshAttrs:function(){var t=this;Wa(this._attrs).forEach(function(e){t.handle.attributes[e]=!t._attrs[e].items.length||t._attrs[e].valueOf()})},resetTemplate:function(){var t=this;if(this.fn&&this.proxy){if(this.last=0,!this.externalChange)return this.partial=this.fnTemplate,!0;h(this.proxy.teardown)&&this.proxy.teardown(),this.fn=this.proxy=null}if(this.partial=null,this.refName&&(this.partial=Ns(this.ractive,this.refName,this.up)),!this.partial&&this.model&&Bs(this,this.model.get()),!this.fn){if(this.last&&this.partial===this.last)return!1;this.partial&&(this.last=this.partial,Rs(this))}return this.unbindAttrs(),this.fn?(Ds(this),h(this.proxy.render)&&jl.scheduleTask(function(){return t.proxy.render()})):this.partial||w("Could not find template for partial '"+this.name+"'"),!0},render:function(t,e){this.fn&&this.fn._cssDef&&!this.fn._cssDef.applied&&Ci(),this.fragment.render(t,e),this.proxy&&h(this.proxy.render)&&this.proxy.render()},unbind:function(t){this.fragment.unbind(t),this.unbindAttrs(t),Ss.prototype.unbind.call(this,t)},unbindAttrs:function(t){var e=this;this._attrs&&Wa(this._attrs).forEach(function(n){e._attrs[n].unbind(t)})},unrender:function(t){this.proxy&&h(this.proxy.teardown)&&this.proxy.teardown(),this.fragment.unrender(t)},update:function(){var t=this,e=this.proxy;this.updating=1,this.dirtyAttrs&&(this.dirtyAttrs=!1,Wa(this._attrs).forEach(function(e){return t._attrs[e].update()}),this.refreshAttrs(),h(e.update)&&e.update(this.handle.attributes)),this.dirtyTemplate&&(this.dirtyTemplate=!1,this.resetTemplate()&&this.fragment.resetTemplate(this.partial||[])),this.dirty&&(this.dirty=!1,e&&h(e.invalidate)&&e.invalidate(),this.fragment.update()),this.externalChange=!1,this.updating=0}});var rp="extra-attributes",sp=function(t,e,n){this.value=this.key=t,this.context=e,this.isReadonly=this.isKey=!0,this.deps=[],this.links=[],this.children=[],this.instance=n},ap=sp.prototype;ap.applyValue=function(t){t!==this.value&&(this.value=this.key=t,this.deps.forEach(Y),this.links.forEach(Y),this.children.forEach(function(t){t.applyValue(t.context.getKeypath(t.instance))}))},ap.destroyed=function(){this.upstream&&this.upstream.unregisterChild(this)},ap.get=function(t){return t&&Z(this),C(this.value)},ap.getKeypath=function(){return C(this.value)},ap.has=function(){return!1},ap.rebind=function(t,e){for(var n=this,i=this.deps.length;i--;)n.deps[i].rebind(t,e,!1);for(i=this.links.length;i--;)n.links[i].relinking(t,!1)},ap.register=function(t){this.deps.push(t)},ap.registerChild=function(t){O(this.children,t),t.upstream=this},ap.registerLink=function(t){O(this.links,t)},ap.unregister=function(t){P(this.deps,t)},ap.unregisterChild=function(t){P(this.children,t)},ap.unregisterLink=function(t){P(this.links,t)},sp.prototype.reference=d,sp.prototype.unreference=d;var op=/^"(\\"|[^"])+"$/,up=function(t){this.parent=t.owner.up,this.up=this,this.owner=t.owner,this.ractive=this.parent.ractive,this.delegate=this.ractive.delegate!==!1&&(this.parent.delegate||zs(this.parent)),this.delegate&&this.delegate.delegate===!1&&(this.delegate=!1),this.delegate&&(this.delegate.delegate=this.delegate),this.cssIds="cssIds"in t?t.cssIds:this.parent?this.parent.cssIds:null,this.context=null,this.rendered=!1,this.iterations=[],this.template=t.template,this.indexRef=t.indexRef,this.keyRef=t.keyRef,this.pendingNewIndices=null,this.previousIterations=null,this.isArray=!1},hp=up.prototype;hp.bind=function(t){var e=this;this.context=t,this.bound=!0;var n=t.get(),i=this.aliases=this.owner.template.z&&this.owner.template.z.slice(),r=i&&i.find(function(t){return"shuffle"===t.n});r&&r.x&&r.x.x&&("true"===r.x.x.s?this.shuffler=!0:op.test(r.x.x.s)&&(this.shuffler=A(r.x.x.s.slice(1,-1)))),this.shuffler&&(this.values=$s(this,this.shuffler)),this.source&&this.source.model.unbind(this.source);var a=t.isComputed&&i&&i.find(function(t){return"source"===t.n});if(a&&a.x&&a.x.r){var o=Es(this,a.x);this.source={handleChange:function(){},rebind:function(t){this.model.unregister(this),this.model=t,t.register(this)}},this.source.model=o,o.register(this.source)}if(this.isArray=Qa(n)){this.iterations=[];for(var u=this.length=n.length,h=0;u>h;h+=1)e.iterations[h]=e.createIteration(h,h)}else if(s(n)){if(this.isArray=!1,this.indexRef){var l=this.indexRef.split(",");this.keyRef=l[0],this.indexRef=l[1]}var c=Wa(n);this.length=c.length,this.iterations=c.map(function(t,n){return e.createIteration(t,n)})}return this},hp.bubble=function(t){this.bubbled||(this.bubbled=[]),this.bubbled.push(t),this.rebounding||this.owner.bubble()},hp.createIteration=function(t,e){var n=new Qp({owner:this,template:this.template});return n.isIteration=!0,n.delegate=this.delegate,this.aliases&&(n.aliases={}),Us(this,n,t,e),n.bind(n.context)},hp.destroyed=function(){for(var t=this,e=this.iterations.length,n=0;e>n;n++)t.iterations[n].destroyed();this.pathModel&&this.pathModel.destroyed(),this.rootModel&&this.rootModel.destroyed()},hp.detach=function(){var t=ri();return this.iterations.forEach(function(e){return t.appendChild(e.detach())}),t},hp.find=function(t,e){return R(this.iterations,function(n){return n.find(t,e)})},hp.findAll=function(t,e){return this.iterations.forEach(function(n){return n.findAll(t,e)})},hp.findAllComponents=function(t,e){return this.iterations.forEach(function(n){return n.findAllComponents(t,e)})},hp.findComponent=function(t,e){return R(this.iterations,function(n){return n.findComponent(t,e)})},hp.findContext=function(){return this.context},hp.findNextNode=function(t){var e=this;if(t.index<this.iterations.length-1)for(var n=t.index+1;n<this.iterations.length;n++){var i=e.iterations[n].firstNode(!0);if(i)return i}return this.owner.findNextNode()},hp.firstNode=function(t){return this.iterations[0]?this.iterations[0].firstNode(t):null},hp.getLast=function(){return this.lastModel||(this.lastModel=new sp(this.length-1))},hp.rebind=function(t){var e=this;this.context=t,this.source||t&&this.iterations.forEach(function(t){Us(e,t,t.key,t.index)})},hp.rebound=function(t){var e=this;this.context=this.owner.model,this.iterations.forEach(function(n,i){n.context=qs(e,n,i),n.rebound(t)})},hp.render=function(t,e){var n=this.iterations;if(n)for(var i=n.length,r=0;i>r;r++)n[r].render(t,e);this.rendered=!0},hp.shuffle=function(t,e){var n=this;this.pendingNewIndices||(this.previousIterations=this.iterations.slice()),this.pendingNewIndices||(this.pendingNewIndices=[]),this.pendingNewIndices.push(t);var i=[];t.forEach(function(t,r){if(-1!==t){var s=n.iterations[r];i[t]=s,t!==r&&s&&(s.dirty=!0,e&&(s.shouldRebind=1))}}),this.iterations=i,e||this.bubble()},hp.shuffled=function(){this.iterations.forEach(it)},hp.toString=function(t){return this.iterations?this.iterations.map(t?ht:ut).join(""):""},hp.unbind=function(t){this.bound=!1,this.source&&this.source.model.unregister(this.source);for(var e=this.pendingNewIndices?this.previousIterations:this.iterations,n=e.length,i=0;n>i;i++)e[i].unbind(t);return this},hp.unrender=function(t){for(var e=this,n=this.iterations.length,i=0;n>i;i++)e.iterations[i].unrender(t);if(this.pendingNewIndices&&this.previousIterations){n=this.previousIterations.length;for(var r=0;n>r;r++)e.previousIterations[r].unrender(t)}this.rendered=!1},hp.update=function(){var t=this;if(this.pendingNewIndices)return this.bubbled.length=0,void this.updatePostShuffle();if(!this.updating){if(this.updating=!0,this.shuffler){var e=$s(this,this.shuffler),n=B(this.values,e);n.same?this.iterations.forEach(ot):(this.shuffle(n,!0),this.updatePostShuffle())}else{for(var i=this.iterations.length,r=0;i>r;r++){var a=t.iterations[r];a&&a.idxModel&&a.idxModel.applyValue(r)}var o,u,h,l=this.context.get(),c=this.isArray,f=!0;if(this.isArray=Qa(l)){if(this.source){this.rebounding=1;var d=this.source.model.get();this.iterations.forEach(function(e,n){n<l.length&&e.lastValue!==l[n]&&~(h=d.indexOf(l[n]))&&(Us(t,e,n,n),e.rebound(!0))}),this.rebounding=0}c&&(f=!1,this.iterations.length>l.length&&(o=this.iterations.splice(l.length)))}else if(s(l)&&!c)for(f=!1,o=[],u={},h=this.iterations.length;h--;){var p=t.iterations[h];p.key in l?u[p.key]=!0:(t.iterations.splice(h,1),o.push(p))}var m=Qa(l)?l.length:s(l)?Wa(l).length:0;if(this.length=m,this.updateLast(),f&&(o=this.iterations,this.iterations=[]),o){i=o.length;for(var v=0;i>v;v++)o[v].unbind().unrender(!0)}if(!f&&this.isArray&&this.bubbled&&this.bubbled.length){var g=this.bubbled;this.bubbled=[],i=g.length;for(var y=0;i>y;y++)t.iterations[g[y]]&&t.iterations[g[y]].update()}else{i=this.iterations.length;for(var b=0;i>b;b++)t.iterations[b].update()}var w,x;if(m>this.iterations.length){if(w=this.rendered?ri():null,h=this.iterations.length,Qa(l))for(;h<l.length;)x=t.createIteration(h,h),t.iterations.push(x),t.rendered&&x.render(w),h+=1;else if(s(l)){if(this.indexRef&&!this.keyRef){var k=this.indexRef.split(",");this.keyRef=k[0],this.indexRef=k[1]}Wa(l).forEach(function(e){u&&e in u||(x=t.createIteration(e,h),t.iterations.push(x),t.rendered&&x.render(w),h+=1)})}if(this.rendered){var _=this.parent.findParentNode(),E=this.parent.findNextNode(this.owner);_.insertBefore(w,E)}}}this.updating=!1}},hp.updateLast=function(){this.lastModel&&this.lastModel.applyValue(this.length-1)},hp.updatePostShuffle=function(){var t=this,e=this.pendingNewIndices[0],n=this.rendered?this.parent.findParentNode():null,i=n&&this.owner.findNextNode(),r=n?ri():null;this.pendingNewIndices.slice(1).forEach(function(t){e.forEach(function(n,i){e[i]=t[n]})});var s,a,o,h,l,c,d=this.length=this.context.get().length,p=this.previousIterations,m=this.iterations,v=this.context.get(),g={},y=new Array(e.length);for(e.forEach(function(t,e){return y[t]=e}),this.updateLast(),s=o=0;d>s;)f(y[s])?(h=m[s]=t.createIteration(s,s),n&&(l=p[o],l=l&&n&&l.firstNode()||i,h.render(r),n.insertBefore(r,l)),s++):(a=e[o],-1===a?(p[o]&&p[o].unbind().unrender(!0),p[o++]=0):a>s?(g[a]=p[o],p[o++]=null):(m[s]=h=m[s]||g[s]||t.createIteration(s,s),(g[s]||o!==s)&&(c=t.source&&h.lastValue!==v[s],Us(t,h,s,s)),!n||!g[s]&&p[o]||(l=p[o+1],l=l&&n&&l.firstNode()||i,g[s]?n.insertBefore(h.detach(),l):(h.render(r),n.insertBefore(r,l))),p[o++]=0,s++),h&&u(h)&&((h.shouldRebind||c)&&(h.rebound(c),h.shouldRebind=0),h.update(),h.shuffled()));for(var b=p.length,w=0;b>w;w++)p[w]&&p[w].unbind().unrender(!0);this.shuffler&&(this.values=$s(this,this.shuffler)),this.pendingNewIndices=null,this.previousIterations=null},up.prototype.getContext=sn,up.prototype.getKeypath=ha;var lp=function(t){function e(e){t.call(this,e),this.isAlias=e.template.t===hu,this.sectionType=e.template.n||this.isAlias&&ju||null,this.templateSectionType=this.sectionType,this.subordinate=1===e.template.l,this.fragment=null}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.bind=function(){t.prototype.bind.call(this),this.subordinate&&(this.sibling=this.up.items[this.up.items.indexOf(this)-1],this.sibling.nextSibling=this),this.model||this.isAlias?(this.dirty=!0,this.update()):!this.sectionType||this.sectionType!==Ou||this.sibling&&this.sibling.isTruthy()||(this.fragment=new Qp({owner:this,template:this.template.f}).bind())},n.bubble=function(){!this.dirty&&this["yield"]?(this.dirty=!0,this.containerFragment.bubble()):t.prototype.bubble.call(this)},n.detach=function(){var e=this.fragment||this.detached;return e?e.detach():t.prototype.detach.call(this)},n.findNextNode=function(){return(this.containerFragment||this.up).findNextNode(this)},n.isTruthy=function(){if(this.subordinate&&this.sibling.isTruthy())return!0;var t=this.model?this.model.isRoot?this.model.value:this.model.get():void 0;return!(!t||this.templateSectionType!==Tu&&Hs(t))},n.rebind=function(e,n,i){t.prototype.rebind.call(this,e,n,i)&&this.fragment&&this.sectionType!==Cu&&this.sectionType!==Ou&&this.fragment.rebind(e)},n.rebound=function(e){this.model&&(this.model.rebound?this.model.rebound(e):(t.prototype.unbind.call(this),t.prototype.bind.call(this),(this.sectionType===ju||this.sectionType===Tu||this.sectionType===Nu)&&this.fragment&&this.fragment.rebind(this.model),e&&this.bubble())),this.fragment&&this.fragment.rebound(e)},n.render=function(t,e){this.rendered=!0,this.fragment&&this.fragment.render(t,e)},n.shuffle=function(t){this.fragment&&this.sectionType===Nu&&this.fragment.shuffle(t)},n.unbind=function(e){t.prototype.unbind.call(this,e),this.fragment&&this.fragment.unbind(e)},n.unrender=function(t){this.rendered&&this.fragment&&this.fragment.unrender(t),this.rendered=!1},n.update=function(){var t=this;if(this.dirty&&(this.fragment&&this.sectionType!==Cu&&this.sectionType!==Ou&&(this.fragment.context=this.model),this.model||this.sectionType===Ou||this.isAlias)){this.dirty=!1;var e=this.model?this.model.isRoot?this.model.value:this.model.get():void 0,n=!this.subordinate||!this.sibling.isTruthy(),i=this.sectionType;this["yield"]&&this["yield"]!==e?(this.up=this.containerFragment,this.container=null,this["yield"]=null,this.rendered&&this.fragment.unbind().unrender(!0),this.fragment=null):this.rendered&&!this["yield"]&&e instanceof dc&&(this.rendered&&this.fragment&&this.fragment.unbind().unrender(!0),this.fragment=null),(null===this.sectionType||null===this.templateSectionType)&&(this.sectionType=Zs(e,this.template.i)),i&&i!==this.sectionType&&this.fragment&&(this.rendered&&this.fragment.unbind().unrender(!0),this.fragment=null);var r,s=this.sectionType===Nu||this.sectionType===ju||n&&(this.sectionType===Ou?!this.isTruthy():this.isTruthy())||this.isAlias;if(s)if(this.fragment||(this.fragment=this.detached),this.fragment)this.detached&&(Ws(this,this.fragment),this.detached=!1,this.rendered=!0),this.fragment.bound||this.fragment.bind(this.model),this.fragment.update();else if(this.sectionType===Nu)r=new up({owner:this,template:this.template.f,indexRef:this.template.i}).bind(this.model);else{var a=this.sectionType!==Cu&&this.sectionType!==Ou?this.model:null;e instanceof dc&&(this["yield"]=e,this.containerFragment=this.up,this.up=e.fragment,this.container=e.ractive,a=void 0),r=new Qp({owner:this,template:this.template.f}).bind(a)}else this.fragment&&this.rendered?ql!==!0?this.fragment.unbind().unrender(!0):(this.unrender(!1),this.detached=this.fragment,jl.promise().then(function(){t.detached&&t.detach()})):this.fragment&&this.fragment.unbind(),this.fragment=null;r&&(this.rendered&&Ws(this,r),this.fragment=r),this.nextSibling&&(this.nextSibling.dirty=!0,this.nextSibling.update())}},e}(Ss),cp=function(t){function e(e){t.call(this,e),this.options=[]}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.foundNode=function(t){if(this.binding){var e=ss(t);e.length>0&&(this.selectedOptions=e)}},n.render=function(e,n){t.prototype.render.call(this,e,n),this.sync();for(var i=this.node,r=i.options.length;r--;)i.options[r].defaultSelected=i.options[r].selected;this.rendered=!0},n.sync=function(){var t=this,e=this.node;if(e){var n=I(e.options);if(this.selectedOptions)return n.forEach(function(e){t.selectedOptions.indexOf(e)>=0?e.selected=!0:e.selected=!1}),this.binding.setFromNode(e),void delete this.selectedOptions;var i=this.getAttribute("value"),r=this.getAttribute("multiple"),s=r&&Qa(i);if(void 0!==i){var a;n.forEach(function(e){var n=e._ractive?e._ractive.value:e.value,o=r?s&&t.valueContains(i,n):t.compare(i,n);o&&(a=!0),e.selected=o}),a||r||this.binding&&this.binding.forceUpdate()}else this.binding&&this.binding.forceUpdate&&this.binding.forceUpdate()}},n.valueContains=function(t,e){for(var n=this,i=t.length;i--;)if(n.compare(e,t[i]))return!0},n.compare=function(t,e){var n=this.getAttribute("value-comparator");if(n){if(h(n))return n(e,t);if(e&&t)return e[n]==t[n]}return e==t},n.update=function(){var e=this.dirty;t.prototype.update.call(this),e&&this.sync()},e}(Ed),fp=function(t){function e(e){var n=e.template;e.deferContent=!0,t.call(this,e),this.attributeByName.value||(n.f&&us({template:n})?(this.attributes||(this.attributes=[])).push(aa({owner:this,template:{t:iu,f:n.f,n:"value"},up:this.up})):this.fragment=new Qp({owner:this,cssIds:null,template:n.f}))}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.bubble=function(){var t=this;this.dirty||(this.dirty=!0,this.rendered&&!this.binding&&this.fragment&&jl.scheduleTask(function(){t.dirty=!1,t.node.value=t.fragment.toString()}),this.up.bubble())},e}(Zd),dp=function(t){function e(e){t.call(this,e),this.type=Ho}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.detach=function(){return ai(this.node)},n.firstNode=function(){return this.node},n.render=function(t,e){Or()||(this.rendered=!0,xs(this,t,e,this.template))},n.toString=function(t){return t?wt(this.template):this.template},n.unrender=function(t){this.rendered&&t&&this.detach(),this.rendered=!1},n.valueOf=function(){return this.template},e}(Cf),pp=dp.prototype;pp.bind=pp.unbind=pp.update=d;var mp,vp="hidden";if(Xa){var gp;if(vp in Xa)gp="";else for(var yp=ro.length;yp--;){var bp=ro[yp];if(vp=bp+"Hidden",vp in Xa){gp=bp;break}}void 0!==gp?(Xa.addEventListener(gp+"visibilitychange",Gs),Gs()):("onfocusout"in Xa?(Xa.addEventListener("focusout",Qs),Xa.addEventListener("focusin",Ys)):(Ja.addEventListener("pagehide",Qs),Ja.addEventListener("blur",Qs),Ja.addEventListener("pageshow",Ys),Ja.addEventListener("focus",Ys)),mp=!0)}var wp;if(to){var xp={},kp=vc("div").style;wp=function(t){if(!xp[t]){var e=Ee(t);if(void 0!==kp[t])xp[t]=e;else for(var n=ro.length;n--;){var i="-"+ro[n]+"-"+e;if(void 0!==kp[i]){xp[t]=i;break}}}return xp[t]}}else wp=null;var _p,Ep=wp,Sp=new RegExp("^(?:"+ro.join("|")+")([A-Z])");if(to){var Ap,Cp,Op,Np,jp,Tp,Vp=vc("div").style,Pp=function(t){return t},Mp={},Ip={};void 0!==Vp.transition?(Ap="transition",Cp="transitionend",Op=!0):void 0!==Vp.webkitTransition?(Ap="webkitTransition",Cp="webkitTransitionEnd",Op=!0):Op=!1,Ap&&(Np=Ap+"Duration",jp=Ap+"Property",Tp=Ap+"TimingFunction"),_p=function(t,e,n,i,r){setTimeout(function(){function s(){clearTimeout(d)}function a(){c&&f&&(t.unregisterCompleteHandler(s),t.ractive.fire(t.name+":end",t.node,t.isIntro),r())}function o(e){if(e.target===t.node){var n=i.indexOf(e.propertyName);-1!==n&&i.splice(n,1),i.length||(clearTimeout(d),u())}}function u(){m[jp]=v.property,m[Tp]=v.duration,m[Np]=v.timing,t.node.removeEventListener(Cp,o,!1),f=!0,a()}var c,f,d,p=(t.node.namespaceURI||"")+t.node.tagName,m=t.node.style,v={property:m[jp],timing:m[Tp],duration:m[Np]};t.node.addEventListener(Cp,o,!1),d=setTimeout(function(){i=[],u()},n.duration+(n.delay||0)+50),t.registerCompleteHandler(s),m[jp]=i.join(",");var g=Js(n.easing||"linear");m[Tp]=g;var y=m[Tp]===g;m[Np]=n.duration/1e3+"s",setTimeout(function(){for(var r,s,u,d,v,g=i.length,x=null,k=[];g--;){if(u=i[g],r=p+u,y&&Op&&!Ip[r]){var E=m[u];m[u]=e[u],r in Mp||(x=t.getStyle(u),Mp[r]=t.getStyle(u)!=e[u],Ip[r]=!Mp[r],Ip[r]&&(m[u]=E))}y&&Op&&!Ip[r]||(null===x&&(x=t.getStyle(u)),s=i.indexOf(u),-1===s?b("Something very strange happened with transitions. Please raise an issue at https://github.com/ractivejs/ractive/issues - thanks!",{node:t.node}):i.splice(s,1),d=/[^\d]*$/.exec(x)[0],v=_(parseFloat(x),parseFloat(e[u])),v?k.push({name:u,interpolator:v,suffix:d}):m[u]=e[u],x=null)}if(k.length){var S;l(n.easing)?(S=t.ractive.easing[n.easing],S||(w(Eo(n.easing,"easing")),S=Pp)):S=h(n.easing)?n.easing:Pp,new Pl({duration:n.duration,easing:S,step:function(t){for(var e=k.length;e--;){var n=k[e];m[n.name]=n.interpolator(t)+n.suffix}},complete:function(){c=!0,a()}})}else c=!0;i.length?m[jp]=i.join(","):(m[jp]="none",t.node.removeEventListener(Cp,o,!1),f=!0,a())},0)},n.delay||0)}}else _p=null;var Rp=_p,Bp=Ja&&Ja.getComputedStyle,Kp=Promise.resolve(),Lp={t0:"intro-outro",t1:"intro",t2:"outro"},Dp=function(t){this.owner=t.owner||t.up.owner||Un(t.up),this.element=this.owner.attributeByName?this.owner:Un(t.up),this.ractive=this.owner.ractive,this.template=t.template,this.up=t.up,this.options=t,this.onComplete=[]},Fp=Dp.prototype;Fp.animateStyle=function(t,e,n){var i=this;if(4===arguments.length)throw new Error("t.animateStyle() returns a promise - use .then() instead of passing a callback");if(!mp)return this.setStyle(t,e),Kp;var r;return l(t)?(r={},r[t]=e):(r=t,n=e),new Promise(function(t){if(!n.duration)return i.setStyle(r),void t();for(var e=Wa(r),s=[],a=Bp(i.node),o=e.length;o--;){var u=e[o],h=Ep(u),l=a[Ep(u)],c=i.node.style[h];h in i.originals||(i.originals[h]=i.node.style[h]),i.node.style[h]=r[u],i.targets[h]=i.node.style[h],i.node.style[h]=c,l!=r[u]&&(s.push(h),r[h]=r[u],i.node.style[h]=l)}return s.length?void Rp(i,r,n,s,t):void t()})},Fp.bind=function(){var t=this.options,e=t.template&&t.template.v;e&&(("t0"===e||"t1"===e)&&(this.element.intro=this),("t0"===e||"t2"===e)&&(this.element.outro=this),this.eventName=Lp[e]);var n=this.owner.ractive;this.name=t.name||t.template.n,t.params&&(this.params=t.params),h(this.name)?(this._fn=this.name,this.name=this._fn.name):this._fn=x("transitions",n,this.name),this._fn||w(Eo(this.name,"transition"),{ractive:n}),Yr(this,t.template)},Fp.getParams=function(){if(this.params)return this.params;if(this.fn){var t=Jr(this,this.template,this.up).map(function(t){return t?t.get():void 0});return this.fn.apply(this.ractive,t)}},Fp.getStyle=function(t){var e=Bp(this.node);if(l(t))return e[Ep(t)];if(!Qa(t))throw new Error("Transition$getStyle must be passed a string, or an array of strings representing CSS properties");for(var n={},i=t.length;i--;){var r=t[i],s=e[Ep(r)];"0px"===s&&(s=0),n[r]=s}return n},Fp.processParams=function(t,e){return c(t)?t={duration:t}:l(t)?t="slow"===t?{duration:600}:"fast"===t?{duration:200}:{duration:400}:t||(t={}),$a({},e,t)},Fp.registerCompleteHandler=function(t){O(this.onComplete,t)},Fp.setStyle=function(e,n){var i=this;if(l(e)){var r=Ep(e);t(this.originals,r)||(this.originals[r]=this.node.style[r]),this.node.style[r]=n,this.targets[r]=this.node.style[r]}else{var s;for(s in e)t(e,s)&&i.setStyle(s,e[s])}return this},Fp.shouldFire=function(t){if(!this.ractive.transitionsEnabled)return!1;if("intro"===t&&this.ractive.rendering&&Xs("noIntro",this.ractive,!0))return!1;if("outro"===t&&this.ractive.unrendering&&Xs("noOutro",this.ractive,!1))return!1;var e=this.getParams();if(!this.element.parent)return!0;if(e&&e[0]&&s(e[0])&&"nested"in e[0]){if(e[0].nested!==!1)return!0}else if(Xs("nestedTransitions",this.ractive)!==!1)return!0;for(var n=this.element.parent;n;){if(n[t]&&n[t].starting)return!1;n=n.parent}return!0},Fp.start=function(){var t,e=this,n=this.node=this.element.node,i=this.originals={},r=this.targets={},s=this.getParams();if(this.complete=function(s){if(e.starting=!1,!t){if(e.onComplete.forEach(function(t){return t()}),!s&&e.isIntro)for(var a in r)n.style[a]===r[a]&&(n.style[a]=i[a]);e._manager.remove(e),t=!0}},!this._fn)return void this.complete();var a=this._fn.apply(this.ractive,[this].concat(s));a&&a.then(this.complete)},Fp.toString=function(){return""},Fp.unbind=function(){if(!this.element.attributes||!this.element.attributes.unbinding){var t=this.options&&this.options.template&&this.options.template.v;("t0"===t||"t1"===t)&&(this.element.intro=null),("t0"===t||"t2"===t)&&(this.element.outro=null)}},Fp.unregisterCompleteHandler=function(t){P(this.onComplete,t)};var zp=Dp.prototype;zp.destroyed=zp.firstNode=zp.rebound=zp.render=zp.unrender=zp.update=d;var Up,$p,qp={};try{vc("table").innerHTML="foo"}catch(Hp){Up=!0,$p={TABLE:['<table class="x">',"</table>"],THEAD:['<table><thead class="x">',"</thead></table>"],TBODY:['<table><tbody class="x">',"</tbody></table>"],TR:['<table><tr class="x">',"</tr></table>"],SELECT:['<select class="x">',"</select>"]}}var Zp=function(t){function e(e){t.call(this,e)}t&&(e.__proto__=t);var n=e.prototype=Object.create(t&&t.prototype);return n.constructor=e,n.detach=function(){var t=ri();return this.nodes&&this.nodes.forEach(function(e){return t.appendChild(e)}),t},n.find=function(t){var e,n=this,i=this.nodes.length;for(e=0;i>e;e+=1){var r=n.nodes[e];if(1===r.nodeType){if(gc(r,t))return r;var s=r.querySelector(t);if(s)return s}}return null},n.findAll=function(t,e){var n,i=this,r=e.result,s=this.nodes.length;for(n=0;s>n;n+=1){var a=i.nodes[n];if(1===a.nodeType){gc(a,t)&&r.push(a);var o=a.querySelectorAll(t);o&&r.push.apply(r,o)}}},n.findComponent=function(){return null},n.firstNode=function(){return this.rendered&&this.nodes[0]},n.render=function(t,e,n){var i=this;if(!this.nodes){var r=this.model?this.model.get():"";this.nodes=ta(r,t)}var s=this.nodes;if(e){for(var a,o=-1;e.length&&(a=this.nodes[o+1]);)for(var u=void 0;u=e.shift();){var h=u.nodeType;if(h===a.nodeType&&(1===h&&u.outerHTML===a.outerHTML||(3===h||8===h)&&u.nodeValue===a.nodeValue)){i.nodes.splice(++o,1,u);break}t.removeChild(u)}o>=0&&(s=this.nodes.slice(o)),e.length&&(n=e[0])}if(s.length){var l=ri();s.forEach(function(t){return l.appendChild(t)}),n?t.insertBefore(l,n):t.appendChild(l)}this.rendered=!0},n.toString=function(){var t=this.model&&this.model.get();return t=null!=t?""+t:"",Vr()?bt(t):t},n.unrender=function(){this.nodes&&this.nodes.forEach(function(t){jl.detachWhenReady({node:t,detach:function(){ai(t)}})}),this.rendered=!1,this.nodes=null},n.update=function(){this.rendered&&this.dirty?(this.dirty=!1,this.unrender(),this.render(this.up.findParentNode(),null,this.up.findNextNode(this))):this.dirty=!1},e}($d),Wp={};Wp[hu]=lp,Wp[nu]=Zf,Wp[lu]=sa,Wp[uu]=sd,Wp[Zo]=Hd,Wp[Xo]=Ms,Wp[Go]=lp,Wp[Wo]=Zp,Wp[au]=Ms,Wp[iu]=Kf,Wp[Lu]=Lf,Wp[Bu]=id,Wp[Ru]=Kd,Wp[Ku]=Dp,Wp[tu]=Mr;var Gp={doctype:sd,form:Nd,input:Zd,option:np,select:cp,textarea:fp},Qp=function(t){this.owner=t.owner,this.isRoot=!t.owner.up,this.parent=this.isRoot?null:this.owner.up,this.ractive=t.ractive||(this.isRoot?t.owner:this.parent.ractive),this.componentParent=this.isRoot&&this.ractive.component?this.ractive.component.up:this.owner.containerFragment||null,!this.isRoot||this.ractive.delegate?this.delegate=this.owner.containerFragment?this.owner.containerFragment&&this.owner.containerFragment.delegate:this.componentParent&&this.componentParent.delegate||this.parent&&this.parent.delegate:this.delegate=!1,this.context=null,this.rendered=!1,"cssIds"in t?this.cssIds=t.cssIds&&t.cssIds.length&&t.cssIds:this.cssIds=this.parent?this.parent.cssIds:null,this.dirty=!1,this.dirtyValue=!0,this.template=t.template||[],this.createItems()},Yp=Qp.prototype;Yp.bind=function(t){var e=this;this.context=t,this.owner.template.z&&(this.aliases=ua(this.owner.template.z,this.owner.containerFragment||this.parent));for(var n=this.items.length,i=0;n>i;i++)e.items[i].bind();return this.bound=!0,this.dirty&&this.update(),this},Yp.bubble=function(){this.dirtyValue=!0,this.dirty||(this.dirty=!0,this.isRoot?this.ractive.component?this.ractive.component.bubble():this.bound&&jl.addFragment(this):this.owner.bubble(this.index))},Yp.createItems=function(){var t=this,e=this.template.length;this.items=[];for(var n=0;e>n;n++)t.items[n]=aa({up:t,template:t.template[n],index:n})},Yp.destroyed=function(){for(var t=this,e=this.items.length,n=0;e>n;n++)t.items[n].destroyed();this.pathModel&&this.pathModel.destroyed(),this.rootModel&&this.rootModel.destroyed()},Yp.detach=function(){for(var t=ri(),e=this.items,n=e.length,i=0;n>i;i++)t.appendChild(e[i].detach());return t},Yp.find=function(t,e){return R(this.items,function(n){return n.find(t,e)})},Yp.findAll=function(t,e){this.items&&this.items.forEach(function(n){return n.findAll&&n.findAll(t,e)})},Yp.findComponent=function(t,e){return R(this.items,function(n){return n.findComponent(t,e)})},Yp.findAllComponents=function(t,e){this.items&&this.items.forEach(function(n){return n.findAllComponents&&n.findAllComponents(t,e)})},Yp.findContext=function(){var t=an(this);return t&&t.context?t.context:this.ractive.viewmodel},Yp.findNextNode=function(t){var e=this;if(t)for(var n,i=t.index+1;i<this.items.length;i++)if(n=e.items[i],n&&n.firstNode){var r=n.firstNode(!0);if(r)return r}return this.isRoot?this.ractive.component?this.ractive.component.up.findNextNode(this.ractive.component):null:this.parent?this.owner.findNextNode(this):void 0},Yp.findParentNode=function(){var t=this;do{if(t.owner.type===Jo)return t.owner.node;if(t.isRoot&&!t.ractive.component)return t.ractive.el;t=t.owner.type===au?t.owner.containerFragment:t.componentParent||t.parent}while(t);throw new Error("Could not find parent node")},Yp.firstNode=function(t){var e=R(this.items,function(t){return t.firstNode(!0)});return e?e:t?null:this.parent.findNextNode(this.owner);
},Yp.getKey=function(){return this.keyModel||(this.keyModel=new sp(this.key))},Yp.getIndex=function(){return this.idxModel||(this.idxModel=new sp(this.index))},Yp.rebind=function(t){this.context=t,this.rootModel&&(this.rootModel.context=this.context),this.pathModel&&(this.pathModel.context=this.context)},Yp.rebound=function(t){if(this.owner.template.z){var e=this.aliases;for(var n in e)e[n].rebound?e[n].rebound(t):(e[n].unreference(),e[n]=0);ua(this.owner.template.z,this.owner.containerFragment||this.parent,e)}this.items.forEach(function(e){return e.rebound(t)}),t&&(this.rootModel&&this.rootModel.applyValue(this.context.getKeypath(this.ractive.root)),this.pathModel&&this.pathModel.applyValue(this.context.getKeypath()))},Yp.render=function(t,e){if(this.rendered)throw new Error("Fragment is already rendered!");this.rendered=!0;for(var n=this.items,i=n.length,r=0;i>r;r++)n[r].render(t,e)},Yp.resetTemplate=function(t){var e=this.bound,n=this.rendered;if(e&&(n&&this.unrender(!0),this.unbind()),this.template=t,this.createItems(),e&&(this.bind(this.context),n)){var i=this.findParentNode(),r=this.findNextNode();if(r){var s=ri();this.render(s),i.insertBefore(s,r)}else this.render(i)}},Yp.shuffled=function(){this.items.forEach(it),this.rootModel&&this.rootModel.applyValue(this.context.getKeypath(this.ractive.root)),this.pathModel&&this.pathModel.applyValue(this.context.getKeypath())},Yp.toString=function(t){return this.items.map(t?ht:ut).join("")},Yp.unbind=function(t){var e=this;if(this.owner.template.z&&!this.owner.yielder){for(var n in e.aliases)e.aliases[n].unreference();this.aliases={}}this.context=null;for(var i=this.items.length,r=0;i>r;r++)e.items[r].unbind(t);return this.bound=!1,this},Yp.unrender=function(t){for(var e=this,n=this.items.length,i=0;n>i;i++)e.items[i].unrender(t);this.rendered=!1},Yp.update=function(){var t=this;if(this.dirty)if(this.updating)this.isRoot&&jl.addFragmentToRoot(this);else{this.dirty=!1,this.updating=!0;for(var e=this.items.length,n=0;e>n;n++)t.items[n].update();this.updating=!1}},Yp.valueOf=function(){if(1===this.items.length)return this.items[0].valueOf();if(this.dirtyValue){var t={},e=oa(this.items,t,this.ractive._guid),n=Cs(e,t);this.value=n?n.value:this.toString(),this.dirtyValue=!1}return this.value},Qp.prototype.getContext=sn,Qp.prototype.getKeypath=ha;var Jp=["template","partials","components","decorators","events"],Xp=Hn("reverse").path,tm=Hn("shift").path,em=Hn("sort").path,nm=Hn("splice").path,im=Hn("unshift").path,rm={add:dn,animate:gn,attachChild:jn,compute:Mn,detach:In,detachChild:Rn,find:Bn,findAll:Kn,findAllComponents:Ln,findComponent:Dn,findContainer:Fn,findParent:zn,fire:Jn,get:Xn,getLocalContext:ti,getContext:ni,insert:hi,link:ci,observe:yi,observeOnce:wi,off:xi,on:ki,once:_i,pop:$c,push:qc,readLink:Ei,render:da,reset:pa,resetPartial:va,resetTemplate:ga,reverse:Xp,set:ya,shift:tm,sort:em,splice:nm,subtract:ba,teardown:Ir,toggle:wa,toCSS:xa,toCss:xa,toHTML:ka,toHtml:ka,toText:_a,transition:Ea,unlink:Sa,unrender:Aa,unshift:im,update:Wn,updateModel:Ca,use:Oa},sm=[],am=/super\s*\(|\.call\s*\(\s*this/;if(Za(za,{sharedGet:{value:Ia},sharedSet:{value:Ma},styleGet:{configurable:!0,value:ja.bind(za)},styleSet:{configurable:!0,value:Li.bind(za)},addCSS:{configurable:!1,value:Ta.bind(za)},hasCSS:{configurable:!1,value:Pa.bind(za)}}),Ja&&!Ja.Ractive){var om="",um=document.currentScript||document.querySelector("script[data-ractive-options]");um&&(om=um.getAttribute("data-ractive-options")||""),~om.indexOf("ForceGlobal")&&(Ja.Ractive=za)}else Ja&&g("Ractive already appears to be loaded while loading 1.4.1.");return $a(za.prototype,rm,go),za.prototype.constructor=za,za.defaults=za.prototype,pl.defaults=za.defaults,pl.Ractive=za,Za(za,{DEBUG:{writable:!0,value:!0},DEBUG_PROMISES:{writable:!0,value:!0},extend:{value:Ba},extendWith:{value:Ka},escapeKey:{value:E},evalObjectString:{value:Cs},findPlugin:{value:Fa},getContext:{value:ei},getCSS:{value:Oi},isInstance:{value:Na},joinKeys:{value:pi},macro:{value:Da},normaliseKeypath:{value:S},parse:{value:Re},splitKeypath:{value:mi},unescapeKey:{value:C},use:{value:Ra},enhance:{writable:!0,value:!1},svg:{value:io},tick:{get:function(){return Nl&&Nl.promise}},VERSION:{value:"1.4.1"},adaptors:{writable:!0,value:{}},components:{writable:!0,value:{}},decorators:{writable:!0,value:{}},easing:{writable:!0,value:yo},events:{writable:!0,value:{}},extensions:{value:[]},helpers:{writable:!0,value:go.helpers},interpolators:{writable:!0,value:So},partials:{writable:!0,value:{}},transitions:{writable:!0,value:{}},cssData:{configurable:!0,value:{}},perComponentStyleElements:{get:Si,set:Si},sharedData:{value:Kl},Ractive:{value:za},Context:{value:zl.Context.prototype}}),Ha(za,"_cssModel",{configurable:!0,value:new lf(za)}),Ha(za.prototype,"rendered",{get:function(){return this.fragment&&this.fragment.rendered}}),za});
//# sourceMappingURL=/engine/js/ractive.min.js.map

;
/**
 * @license MIT
 * topbar 1.0.0, 2021-01-06
 * http://buunguyen.github.io/topbar
 * Copyright (c) 2021 Buu Nguyen
 */
(function(window,document){"use strict";!function(){for(var lastTime=0,vendors=["ms","moz","webkit","o"],x=0;x<vendors.length&&!window.requestAnimationFrame;++x)window.requestAnimationFrame=window[vendors[x]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[vendors[x]+"CancelAnimationFrame"]||window[vendors[x]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(callback,element){var currTime=(new Date).getTime(),timeToCall=Math.max(0,16-(currTime-lastTime)),id=window.setTimeout(function(){callback(currTime+timeToCall)},timeToCall);return lastTime=currTime+timeToCall,id}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(id){clearTimeout(id)})}();function repaint(){canvas.width=window.innerWidth,canvas.height=5*options.barThickness;var ctx=canvas.getContext("2d");ctx.shadowBlur=options.shadowBlur,ctx.shadowColor=options.shadowColor;var stop,lineGradient=ctx.createLinearGradient(0,0,canvas.width,0);for(stop in options.barColors)lineGradient.addColorStop(stop,options.barColors[stop]);ctx.lineWidth=options.barThickness,ctx.beginPath(),ctx.moveTo(0,options.barThickness/2),ctx.lineTo(Math.ceil(currentProgress*canvas.width),options.barThickness/2),ctx.strokeStyle=lineGradient,ctx.stroke()}var canvas,progressTimerId,fadeTimerId,currentProgress,showing,options={autoRun:!0,barThickness:3,barColors:{0:"rgba(26,  188, 156, .9)",".25":"rgba(52,  152, 219, .9)",".50":"rgba(241, 196, 15,  .9)",".75":"rgba(230, 126, 34,  .9)","1.0":"rgba(211, 84,  0,   .9)"},shadowBlur:10,shadowColor:"rgba(0,   0,   0,   .6)",className:null},topbar={config:function(opts){for(var key in opts)options.hasOwnProperty(key)&&(options[key]=opts[key])},show:function(){var type,handler,elem;showing||(showing=!0,null!==fadeTimerId&&window.cancelAnimationFrame(fadeTimerId),canvas||((elem=(canvas=document.createElement("canvas")).style).position="fixed",elem.top=elem.left=elem.right=elem.margin=elem.padding=0,elem.zIndex=100001,elem.display="none",options.className&&canvas.classList.add(options.className),document.body.appendChild(canvas),type="resize",handler=repaint,(elem=window).addEventListener?elem.addEventListener(type,handler,!1):elem.attachEvent?elem.attachEvent("on"+type,handler):elem["on"+type]=handler),canvas.style.opacity=1,canvas.style.display="block",topbar.progress(0),options.autoRun&&function loop(){progressTimerId=window.requestAnimationFrame(loop),topbar.progress("+"+.05*Math.pow(1-Math.sqrt(currentProgress),2))}())},progress:function(to){return void 0===to||("string"==typeof to&&(to=(0<=to.indexOf("+")||0<=to.indexOf("-")?currentProgress:0)+parseFloat(to)),currentProgress=1<to?1:to,repaint()),currentProgress},hide:function(){showing&&(showing=!1,null!=progressTimerId&&(window.cancelAnimationFrame(progressTimerId),progressTimerId=null),function loop(){return 1<=topbar.progress("+.1")&&(canvas.style.opacity-=.05,canvas.style.opacity<=.05)?(canvas.style.display="none",void(fadeTimerId=null)):void(fadeTimerId=window.requestAnimationFrame(loop))}())}};"object"==typeof module&&"object"==typeof module.exports?module.exports=topbar:"function"==typeof define&&define.amd?define(function(){return topbar}):this.topbar=topbar}).call(this,window,document);
;
/*! Lazy Load 2.0.0-rc.2 - MIT license - Copyright 2007-2019 Mika Tuupola */
!function(t,e){"object"==typeof exports?module.exports=e(t):"function"==typeof define&&define.amd?define([],e):t.LazyLoad=e(t)}("undefined"!=typeof global?global:this.window||this.global,function(t){"use strict";function e(t,e){this.settings=s(r,e||{}),this.images=t||document.querySelectorAll(this.settings.selector),this.observer=null,this.init()}"function"==typeof define&&define.amd&&(t=window);const r={src:"data-src",srcset:"data-srcset",selector:".lazyload",root:null,rootMargin:"0px",threshold:0},s=function(){let t={},e=!1,r=0,o=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],r++);for(;r<o;r++)!function(r){for(let o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e&&"[object Object]"===Object.prototype.toString.call(r[o])?t[o]=s(!0,t[o],r[o]):t[o]=r[o])}(arguments[r]);return t};if(e.prototype={init:function(){if(!t.IntersectionObserver)return void this.loadImages();let e=this,r={root:this.settings.root,rootMargin:this.settings.rootMargin,threshold:[this.settings.threshold]};this.observer=new IntersectionObserver(function(t){Array.prototype.forEach.call(t,function(t){if(t.isIntersecting){e.observer.unobserve(t.target);let r=t.target.getAttribute(e.settings.src),s=t.target.getAttribute(e.settings.srcset);"img"===t.target.tagName.toLowerCase()?(r&&(t.target.src=r),s&&(t.target.srcset=s)):t.target.style.backgroundImage="url("+r+")"}})},r),Array.prototype.forEach.call(this.images,function(t){e.observer.observe(t)})},loadAndDestroy:function(){this.settings&&(this.loadImages(),this.destroy())},loadImages:function(){if(!this.settings)return;let t=this;Array.prototype.forEach.call(this.images,function(e){let r=e.getAttribute(t.settings.src),s=e.getAttribute(t.settings.srcset);"img"===e.tagName.toLowerCase()?(r&&(e.src=r),s&&(e.srcset=s)):e.style.backgroundImage="url('"+r+"')"})},destroy:function(){this.settings&&(this.observer.disconnect(),this.settings=null)}},t.lazyload=function(t,r){return new e(t,r)},t.jQuery){const r=t.jQuery;r.fn.lazyload=function(t){return t=t||{},t.attribute=t.attribute||"data-src",new e(r.makeArray(this),t),this}}return e});

;
"use strict"
var wbapp = new Object();
wbapp.tmp = {};
var _tmpphp = false;
var _tmpjq = false;

setTimeout(async function() {
    wbapp.loader = true;
    let loader = document.getElementById("loader");
    typeof(loader) !== 'undefined' && loader !== null ? wbapp.delay = 20 : wbapp.delay = 10;

    var get_cookie = function(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    wbapp.devmode = get_cookie('devmode');
    wbapp.evClick = 'tap click';
    wbapp.start();
}, 5);

wbapp.start = async function() {
    if (typeof str_replace === 'undefined') {
        loadPhpjs();
        return;
    }
    if (typeof $ === 'undefined') {
        loadJquery();
        return;
    }
    var data = {};
    wbapp.bind = {};
    wbapp.ui = {
        spinner_sm: '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>',
        spinner_sm_grow: '<span class="spinner-grow spinner-grow-sm" role="status"></span>'
    };
    wbapp.session();
    wbapp.settings();

    $(document).on('session_close', function() {

    });


    $.fn.disableSelection = function() {
        return this
            .attr('unselectable', 'on')
            .css('user-select', 'none')
            .on('selectstart', false);
    };

    $.fn.verify = function() {
        var form = this;
        var res = true;
        var idx = 0;
        $(form).find("[required],[minlength],[min],[max],[name=password],[type=email]").each(function() {
            if ($(this).is('[name=password_check],[name=password-confirm]')) return;
            idx++;
            var label = $(this).attr("data-label");

            if (label == undefined || label == "") label = $(this).prev("label").text();
            if (label == undefined || label == "") label = $(this).next("label").text();
            if ((label == undefined || label == "") && $(this).attr("id") !== undefined) label = $(this).parents("form").find("label[for=" + $(this).attr("id") + "]").text();
            if (label == undefined || label == "") label = $(this).parents(".form-group").find("label").text();
            if (label == undefined || label == "") label = $(this).attr("placeholder");
            if (label == undefined || label == "") label = $(this).attr("name");

            $(this).data("idx", idx);

            if ($(this).is('[type=email]')) {
                if (($(this).val() > '' && !wbapp.check_email($(this).val())) || ($(this).val() == '' && $(this).prop('required'))) {
                    res = false;
                    $(this).data("error", wbapp._settings.sysmsg.email_correct);
                    wbapp.console("trigger: wb-verify-false [" + $(this).attr("name") + "]");
                    $(form).trigger("wb-verify-false", [this, $(this).data("error")]);
                } else {
                    wbapp.console("trigger: wb-verify-true [" + $(this).attr("name") + "]");
                    $(form).trigger("wb-verify-true", [this]);
                }
            } else if ($(this).is("[required]:not(select)") && $(this).val() == "") {
                res = false;
                $(this).data("error", wbapp._settings.sysmsg.required + ucfirst(label));
                wbapp.console("trigger: wb-verify-false [" + $(this).attr("name") + "]");
                $(form).trigger("wb-verify-false", [this, $(this).data("error")]);
            } else if ($(this).is(":not([disabled],[readonly],[min],[max],[maxlength],[type=checkbox])")) {
                if ($(this).val() == "") {
                    res = false;
                    wbapp.console("trigger: wb-verify-false [" + $(this).attr("name") + "]");
                    $(form).trigger("wb-verify-false", [this]);
                } else {

                    wbapp.console("trigger: wb-verify-true [" + $(this).attr("name") + "]");
                    $(form).trigger("wb-verify-true", [this]);
                }
            }
            if ($(this).is("[required][type=checkbox]:not(:checked)")) {
                res = false;
                $(this).data("error", wbapp._settings.sysmsg.required + ucfirst(label));
                wbapp.console("trigger: wb-verify-false [" + $(this).attr("name") + "]");
                $(form).trigger("wb-verify-false", [this, $(this).data("error")]);
            }
            if ($(this).is("[type=radio]") && $(this).is(":not(:checked)")) {
                res = false;
                var fld = $(this).attr("name");
                if (fld > "") {
                    $("[type=radio][name='" + fld + "']").each(function() {
                        if ($(this).is(":checked")) {
                            res = true;
                        }
                    });
                }
                if (!res) {
                    wbapp.console("trigger: wb-verify-false [" + $(this).attr("name") + "]");
                    $(form).trigger("wb-verify-false", [this]);
                }
            }
            if ($(this).is("[name=password]")) {
                if ($(form).find($(this).attr("name") + "_check").length) {
                    var pcheck = $(this).attr("name") + "_check";
                } else {
                    var pcheck = $(this).attr("name") + "-confirm";
                }
                let check = $(form).find("input[name=" + pcheck + "]");

                if (check.length) {
                    if ($(this).val() !== $(check).val()) {
                        res = false;

                        $(this).data("error", wbapp._settings.sysmsg.pass_match);
                        wbapp.console("trigger: wb-verify-false [" + $(this).attr("name") + "]");
                        $(form).trigger("wb-verify-false", [this, $(this).data("error")]);
                        $(form).trigger("wb-verify-false", [check, $(check).data("error")]);
                    } else {
                        $(form).trigger("wb-verify-true", [check]);
                    }
                }
            }
            if ($(this).is("[min]:not([readonly],[disabled])") && $(this).val() > "") {
                let min = $(this).attr("min") * 1;
                let minstr = $(this).val() * 1;
                if (minstr < min) {
                    res = false;
                    $(this).data("error", ucfirst(label) + " " + wbapp._settings.sysmsg.min_val + ": " + min);
                    wbapp.console("trigger: wb-verify-false [" + $(this).attr("name") + "]");
                    $(form).trigger("wb-verify-false", [this, $(this).data("error")]);
                }
            }

            if ($(this).is("[max]:not([readonly],[disabled])") && $(this).val() > "") {
                let max = $(this).attr("max") * 1;
                let maxstr = $(this).val() * 1;
                if (maxstr > max) {
                    res = false;
                    $(this).data("error", ucfirst(label) + " " + wbapp._settings.sysmsg.max_val + ": " + max);
                    wbapp.console("trigger: wb-verify-false [" + $(this).attr("name") + "]");
                    $(form).trigger("wb-verify-false", [this, $(this).data("error")]);
                }
            }

            if ($(this).is("[minlength]:not([readonly],[disabled])") && $(this).val() > "") {
                let minlen = $(this).attr("minlength") * 1;
                let lenstr = strlen($(this).val());
                if (lenstr < minlen) {
                    res = false;
                    $(this).data("error", ucfirst(label) + " " + wbapp._settings.sysmsg.min_length + ": " + minlen);
                    wbapp.console("trigger: wb-verify-false [" + $(this).attr("name") + "]");
                    $(form).trigger("wb-verify-false", [this, $(this).data("error")]);
                }
            }

            if ($(this).is('select[required]')) {
                let val = $(this).find('option:selected').attr('value');
                if (val == undefined || val == '') {
                    res = false;
                    $(this).data("error", wbapp._settings.sysmsg.required + ucfirst(label));
                    wbapp.console("trigger: wb-verify-false [" + $(this).attr("name") + "]");
                    $(form).trigger("wb-verify-false", [this, $(this).data("error")]);
                }
            }


            if ($(this).is("button")) {
                if (
                    ($(this).attr("value") !== undefined && $(this).val() == "") ||
                    ($(this).attr("value") == undefined && $(this).html() == "")
                ) {
                    res = false;
                }
            }


        });
        if (res == true) {
            wbapp.trigger('wb-verify-success', form, [form]);
        }
        if (res == false) {
            wbapp.trigger('wb-verify-fail', form, [form]);
        }
        return res;
    }

    $.fn.outer = function(s) {
        return s ? this.before(s).remove() : jQuery("<p>").append(this.eq(0).clone()).html();
    };

    $.fn.runScripts = async function() {
        $(this).find("script").each(function() {
            var type = $(this).attr("type");
            if (type !== "text/locale" && type !== "text/template") {
                eval($(this).text());
                if ($(this).attr("removable") !== undefined) $(this).remove();
            }
        });
    }

    $.fn.serializeJson = function(data = {}) {
        var form = this;
        $(form).find("form [name], .wb-unsaved[name], .wb-tree-item [name]").each(function() {
            $(this).attr("wb-tmp-name", $(this).attr("name"));
            $(this).removeAttr("name");
        });
        var branch = $(form).serializeArray();

        $(branch).each(function(i, val) {
            let value = val["value"];
            let name = val["name"];
            data[name] = value;
            let $textarea = $(form).find("textarea[name='" + name + "']");
            if ($textarea.length && $textarea.is("[type=json]")) {
                let _val = $textarea.val();
                let _text = $textarea.text();

                _val == 'null' ? data[name] = _text : data[name] = _val;

                if (in_array(data[name], ['null', '', '{}', '[]'])) {
                    data[name] = '';
                } else {
                    try {
                        data[name] = json_decode(data[name]);
                    } catch (error) {
                        wbapp.console('Unknown error!');
                    }

                }
            } else if ($textarea.length) {
                if ($(form).parents(".treeData").length) {
                    data[name] = htmlentities(data[name]);
                    data[name] = str_replace('&quot;', '/"', data[name]);
                    data[name] = str_replace('&amp;quot;', '"', data[name]);
                } else {
                    let value = $textarea.val();
                    let text = $textarea.text();
                    if (value == 'null') {
                        data[name] = text;
                    } else { data[name] = value; }
                }
            }
            if ($textarea.length && $textarea.data('iconv')) {
                value = data[name];
                eval(`value = ${$textarea.data('iconv')}(value)`);
                data[name] = value;
            }
        });

        let sel = $(form).find('select[name]:not([multiple])');
        $.each(sel, function() {
            data[this.name] = $(this).val();
        });

        let multi = $(form).find('select[name][multiple]');
        $.each(multi, function() {
            data[this.name] = $(this).val();
        });

        let attaches = $(form).find('input[name][type=file]');
        let reader = new FileReader();
        $.each(attaches, function() {
            let file = $(this)[0].files[0];
            if (file) {
                let that = this;
                reader.readAsDataURL(file);
                reader.onload = function() {
                    data[that.name] = reader.result; //base64encoded string
                };
            }
        });

        var check = $(form).find('input[name][type=checkbox]');
        // fix unchecked values
        $.each(check, function() {
            data[this.name] = "";
            if (this.checked) data[this.name] = "on";
        });

        var check = $(form).find('input[name][type=radio]');
        // fix unchecked values
        $.each(check, function() {
            if (this.checked) data[this.name] = $(this).attr('value');
        });

        $(form).find("form [wb-tmp-name], .wb-unsaved [wb-tmp-name], .wb-tree-item [wb-tmp-name]").each(function() {
            $(this).attr("name", $(this).attr("wb-tmp-name"));
            $(this).removeAttr("wb-tmp-name");
        });
        // fix dot notation
        let obj = {}
        $.each(data, function(name, value) {
            if (strpos(name, ".")) {
                let chunks = explode(".", name);
                let idx = ""
                $.each(chunks, function(i, key) {
                    if (i < chunks.length) {
                        idx == "" ? idx = key : idx += "." + key
                        eval(`if (obj.${idx} == undefined) obj.${idx} = {}`);
                    }
                })
                eval(`obj.${name} = value`);
            } else {
                eval(`obj.${name} = value`);
            }
        })
        return obj;
    }

    $.fn.jsonVal = function(data = undefined) {
        if (strtolower($(this).attr("type")) !== "json") {
            return $(this).val();
        }
        if (data == undefined) {
            data = $(this).val();
            try {
                data = json_decode(data);
            } catch (error) {
                data = {};
            }
            return data;
        } else {
            if (data == "") {
                data = {};
            } else {
                data = json_encode(data);
            }
            if ($(this).is("textarea")) $(this).html(data);
            $(this).val(data).trigger("change");
        }
    }

    setTimeout(function() {
        let load = [];
        if (typeof topbar == 'undefined') load.push("/engine/js/topbar.min.js");
        if (typeof jQuery.ui == 'undefined') load.push("/engine/js/jquery-ui.min.js");
        if (typeof Ractive == 'undefined') load.push(`/engine/js/ractive.js`);
        load.push(`/engine/js/jquery.tap.js`);
        if (typeof lazyload == 'undefined') load.push(`/engine/js/lazyload.js`);


        wbapp.loadScripts(load, "wbapp-go", async function() {
            Ractive.DEBUG = false;
            wbapp.eventsInit();
            wbapp.wbappScripts();
            wbapp.tplInit();
            wbapp.ajaxAuto();
            wbapp.lazyload();
            wbapp.modalsInit();
            wbapp.fileinpInit();
            wbapp.wbappScripts();
            //$(document).scrollTop(0);
            $(document).on("wb-ajax-done", async function() {
                wbapp.console("Trigger: wb-ajax-done");
                if (wbapp !== undefined) {
                    wbapp.tplInit();
                    wbapp.wbappScripts();
                    //wbapp.pluginsInit();
                    wbapp.lazyload();
                }
                if ($(".modal.show:not(:visible),.modal[data-show=true]:not(:visible)").length) $(".modal.show:not(:visible),.modal[data-show=true]:not(:visible)").modal("show");
                if ($.fn.tooltip) $('[data-toggle="tooltip"]').tooltip();
            });
            wbapp.trigger("wb-ready");
        });
    }, wbapp.delay);

}

wbapp.ractive = function(target = 'body', tpl = 'empty', data = []) {
    return new Ractive({
        'target': target,
        'template': tpl,
        'data': data
    });
}

wbapp.fileinpInit = function() {
    var getBase64 = function(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                //let encoded = reader.result.toString().replace(/^data:(.*,)?/, '');
                let encoded = reader.result.toString();
                if ((encoded.length % 4) > 0) {
                    encoded += '='.repeat(4 - (encoded.length % 4));
                }
                resolve(encoded);
            };
            reader.onerror = error => reject(error);
        });
    }
    $(document).delegate('input[type=file][data-base64]', 'change', async function() {
        if ($(this).val() == '') {
            $(this).data('base64', '');
        } else {
            $(this).data('base64', await getBase64($(this).prop('files')[0]));
        }
    })
}

wbapp.confirm = function(title = null, text = null, options = null) {
    /*
    wbapp.confirm()
    .on('confirm', function () {
        alert(1);
    })
    .on('cancel', function () {
        alert(0)
    });
    */
    let modal = wbapp.getForm('common', 'confirm', { data: { 'confirm': true } });
    let $modal = $(modal.result);
    let confirm = false;
    title !== null ? title = $modal.find('.modal-title').text(title) : null;
    text !== null ? text = $modal.find('.modal-body').text(text) : null;
    $modal.modal();
    $modal.undelegate('.btn.confirm', wbapp.evClick);
    $modal.delegate('.btn.confirm', wbapp.evClick, function() {
        confirm = true;
        $modal.trigger('confirm').modal('hide');
    });
    $modal.on('hide.bs.modal', function() {
        confirm == false ? $modal.trigger('cancel') : null;
    })
    return $modal;
}

wbapp.lazyload = async function() {
    /*
    $("[data-src]:not([src])").each(function() {
        let link = document.createElement('link');
        link.rel = "preload";
        link.as = "image";
        link.href = $(this).attr('data-src');
        document.head.appendChild(link);
    });
    */
    $("[data-src]:not([src])").lazyload();
}

wbapp.eventsInit = async function() {
    $(document).undelegate("[data-ajax]:not(input,select)", wbapp.evClick);
    $(document).delegate("[data-ajax]:not(input,select)", wbapp.evClick, async function(e, tid) {
        if (!$(this).is("input,select")) {
            let params = wbapp.parseAttr($(this).attr("data-ajax"));
            if (params.url == undefined && typeof params == 'string') {
                // ajax string only
                params.url = $(this).attr("data-ajax");
                if ($(this).parents('form').length) {
                    let id = wbapp.newId('_', 'ax');
                    if ($(this).parents('form').attr('id') == undefined) {
                        $(this).parents('form').attr('id', id);
                    }
                    params.form = 'form#' + $(this).parents('form').attr('id');
                    if (!$(params.form).verify()) {
                        return false;
                    }
                }
            }
            if ($(this).is('[data-toggle=tooltip]')) { $(this).tooltip('hide'); } // fix tooltips
            params._event = e;
            if (tid !== undefined) params._tid = tid;
            wbapp.ajax(params);
            wbapp.trigger("data-ajax", params);
            let href = $(this).attr('href');
            if (href !== undefined && href.substr(0, 1) == '#') {
                document.location.anchor = $(this).attr('href');
            }
        }
    })

    $(document).undelegate("input[data-ajax],select[data-ajax]", "change")
    $(document).delegate("input[data-ajax],select[data-ajax]", "change", async function(e, tid) {
        e.preventDefault();
        let search = $(this).attr("data-ajax");
        search = str_replace('$value', $(this).val(), search);
        let params = wbapp.parseAttr(search);
        params._event = e;
        if (tid !== undefined) params._tid = tid;
        wbapp.ajax(params);
        return false;
    })

    $(document).undelegate("input[type=search][data-ajax]", "keyup");
    $(document).delegate("input[type=search][data-ajax]", "keyup", function() {
        var minlen = 0;
        var that = this;
        var val = $(this).val();
        that.waitajax = false;
        if ($(this).attr("minlength")) minlen = $(this).attr("minlength") * 1;
        if (that.waitajax == false && val.length >= minlen) {
            that.waitajax = true;
            $(this).trigger("change");
            setTimeout(function() {
                that.waitajax = false;
            }, 500);
        }
    })

    $(document).undelegate("input[type=checkbox]", "click");
    $(document).delegate("input[type=checkbox]", "click", async function() {
        if ($(this).prop("checked") == false) {
            $(this).removeAttr("checked");
        } else {
            $(this).prop("checked", true);
            $(this).attr("checked", true);
        }
    });

    $(document).undelegate("[rows=auto]", "keydown keyup focus");
    $(document).delegate("[rows=auto]", "keydown keyup focus", function() {
        this.style.overflow = "hidden";
        this.style.height = "1px";
        this.style.height = (this.scrollHeight) + "px";
    });

    $(document).undelegate("[rows=auto]", "focusout")
    $(document).delegate("[rows=auto]", "focusout", async function() {
        this.style.overflow = "hidden";
        this.style.height = "auto";
    });


}

wbapp.ajaxAuto = async function(func = null) {
    $(document).find("[data-ajax][auto]").each(async function() {
        $(this).trigger("click");
        if ($(this).attr('once') !== undefined) $(this).removeAttr('data-ajax').removeAttr('once');
        $(this).removeAttr("auto");
    });
}

wbapp.auth = function(form, mode = 'signin') {
    if (!$(form).verify()) return;
    let data = $(form).serializeJson();

    let dislink = function() {
        $(form).find('a:not([disabled]),button:not([disabled]),[data-ajax]:not([disabled])').addClass('wb-auth-disabled').attr('disabled', true);
        $(form).addClass('cursor-wait');
    }

    let enlink = function() {
        $(form).find('.wb-auth-disabled').removeClass('wb-auth-disabled').removeAttr('disabled');
        $(form).removeClass('cursor-wait');
    }

    let signin = function() {
        if ($(form).attr("action") !== undefined) var url = $(form).attr("action");
        else var url = "/api/auth/email";
        wbapp.post(url, data, function(res) {
            if (res.login) {
                wbapp.console("Trigger: wb-signin-success");
                $(document).trigger('wb-signin-success');
                if (res.redirect) document.location.href = res.redirect;
            } else {
                wbapp.console("Trigger: wb-signin-error");
                $(document).trigger('wb-signin-error');
                $(form).find('.is-valid').removeClass('is-valid');
                $(form)[0].reset();
                $(form).find('.signin-error').removeClass('d-none');
            }
            enlink();
        });
    }

    let signup = function() {
        if ($(form).attr("action") !== undefined) var url = $(form).attr("action");
        else var url = "/api/auth/signup";
        wbapp.post(url, data, function(res) {
            if (res.signup) {
                wbapp.console("Trigger: wb-signup-success");
                $(document).trigger('wb-signup-success');
                $(form).find('.signup-success').removeClass('d-none');
                $(form).find(".signup-error, .signup-form").remove();
                if (res.redirect) document.location.href = res.redirect;
            } else {
                $(form).find('.is-valid').removeClass('is-valid');
                wbapp.console("Trigger: wb-signup-error");
                $(document).trigger('wb-signup-error');
                $(form).find('.signup-error').removeClass('d-none');
            }
            enlink();
        });
    }

    let recover = function() {
        if ($(form).attr("action") !== undefined) var url = $(form).attr("action");
        else var url = "/api/auth/recover";
        data.text = json_encode($(form).find('.recover-text').html());

        wbapp.post(url, data, function(res) {
            if (res.recover) {
                wbapp.console("Trigger: wb-signrc-success");
                $(document).trigger('wb-signrc-success');
                $(form).find(".recover-success").removeClass('d-none');
                $(form).find(".recover-error, .recover-form").remove();
            } else {
                $(form).find('.is-valid').removeClass('is-valid');
                wbapp.console("Trigger: wb-signrc-error");
                $(document).trigger('wb-signrc-error');
                $(form).find(".recover-error").removeClass('d-none');
            }
            enlink();
        });
    }

    dislink();

    eval(mode)();
}

wbapp.alive = async function() {
    $.post("/ajax/alive", {}, async function(data) {
        if (data.result == false || data.result == undefined) {
            wbapp.console("Trigger: session_close");
            $(document).trigger("session_close");
            clearInterval(alive);
        }
    });
}

wbapp.storage = function(key, value = undefined, binds = true) {
    function getKey(list) {
        key = "";
        $(list).each(function(i, k) {
            if (k.substr(0, 1) * 1 > -1) {
                key += `['${k}']`
            } else {
                if (i > 0) key += '.'
                key += k
            }
        })
        return key
    }

    if (value === undefined) {
        // get data
        let list = key.split(".");
        var res;
        var data = localStorage.getItem(list[0]);
        if (data !== null) data = JSON.parse(data);
        if (list.length) {
            key = getKey(list);
            try {
                eval(`res = data.${key}`);
                if (typeof res == 'object') res = Object.assign({}, res);
                return res;
            } catch (err) {
                return undefined
            }
        }
        return data;
    } else {
        // set data
        var path, branch, type;
        var list = key.split(".");
        var last = list.length;
        var lastkey = list[last - 1];
        $(list).each(function(i, k) {
            if (i == 0) {
                key = k;
                data = localStorage.getItem(key);
                if (i + 1 !== last && data == null) {
                    data = {}
                } else {
                    try {
                        data = JSON.parse(data);
                    } catch (err) {
                        data = {}
                    }
                }
            } else {
                if (k.substr(0, 1) * 1 > -1) {
                    key += `['${k}']`
                } else {
                    if (i > 0) key += '.'
                    key += k
                }
            }
            try {
                eval(`branch = data.${key}`);
                if (typeof branch == 'object') branch = Object.assign({}, branch);
                if (i + 1 < last && typeof branch !== "object") eval(`data.${key} = {}`);
            } catch (err) {
                eval(`data.${key} = {}`);
            }
        })
        var tmpValue = value;
        if (value === null) {
            eval(`delete data.${key}`);
        } else if (value !== {}) {
            if (typeof value == 'string') {
                eval(`data.${key} = value`);
            } else {
                eval(`tmpValue = Object.assign({}, value)`);
                Object.entries(tmpValue).length == 0 ? null : value = tmpValue;
                if (typeof value == 'object') value = Object.assign({}, value);
                eval(`data.${key} = value`);
            }
        }
        localStorage.setItem(list[0], json_encode(data));

        let checkBind = function(bind, key) {
            if (bind == key) return true;
            if (key.substr(0, bind.length) == bind) return true;
            return false;
        }

        if (binds == true) {
            $.each(wbapp.template, function(i, tpl) {
                if (tpl.params.bind !== undefined && tpl.params.bind !== null && checkBind(tpl.params.bind, key) &&
                    tpl.params.render !== undefined && tpl.params.render == 'client') {
                    wbapp.render(tpl.params.target);
                } else if (tpl.params._params !== undefined && tpl.params._params.bind !== undefined &&
                    checkBind(tpl.params._params.bind, key) && tpl.params.render == 'server') {
                    wbapp.render(tpl.params.target);
                }
            });
            $(document).trigger("bind", { key: key, data: value });
            $(document).trigger("bind-" + key, value);
            wbapp.console("Trigger: bind [" + key + "]");
        }
        return data;
    }
}

wbapp.data = function(key, value = undefined, binds = true) {
    function getKey(list) {
        key = "";
        $(list).each(function(i, k) {
            if (k.substr(0, 1) * 1 > -1) {
                key += `['${k}']`
            } else {
                if (i > 0) key += '.'
                key += k
            }
        })
        return key
    }

    if (value === undefined) {
        // get data
        let list = key.split(".");
        var res;
        var data = sessionStorage.getItem(list[0]);
        if (data !== null) data = JSON.parse(data);
        if (list.length) {
            key = getKey(list);
            try {
                eval(`res = data.${key}`);
                if (typeof res == 'object') res = Object.assign({}, res);
                return res;
            } catch (err) {
                return undefined
            }
        }
        return data;
    } else {
        // set data
        var path, branch, type;
        var list = key.split(".");
        var last = list.length;
        var lastkey = list[last - 1];
        $(list).each(function(i, k) {
            if (i == 0) {
                key = k;
                data = sessionStorage.getItem(key);
                //if (i + 1 !== last && data == null) {
                if (i + 1 !== last || data == null) {
                    data = {}
                } else {
                    try {
                        data = JSON.parse(data);
                    } catch (err) {
                        data = {}
                    }
                }
            } else {
                if (k.substr(0, 1) * 1 > -1) {
                    key += `['${k}']`
                } else {
                    if (i > 0) key += '.'
                    key += k
                }
            }
            try {
                eval(`branch = data.${key}`);
                if (typeof branch == 'object') branch = Object.assign({}, branch);
                if (i + 1 < last && typeof branch !== "object") eval(`data.${key} = {}`);
            } catch (err) {
                eval(`data.${key} = {}`);
            }
        })
        var tmpValue = value;
        if (value === null) {
            eval(`delete data.${key}`);
        } else if (value !== {}) {
            if (typeof value == 'string') {
                eval(`data.${key} = value`);
            } else {
                eval(`tmpValue = Object.assign({}, value)`);
                Object.entries(tmpValue).length == 0 ? null : value = tmpValue;
                if (typeof value == 'object') value = Object.assign({}, value);
                eval(`data.${key} = value`);
            }
        }
        sessionStorage.setItem(list[0], json_encode(data));

        let checkBind = function(bind, key) {
            if (bind == key) return true;
            if (key.substr(0, bind.length) == bind) return true;
            return false;
        }

        if (binds == true) {
            $.each(wbapp.template, function(i, tpl) {
                if (tpl.params.bind !== undefined && tpl.params.bind !== null && checkBind(tpl.params.bind, key) &&
                    tpl.params.render !== undefined && tpl.params.render == 'client') {
                    wbapp.render(tpl.params.target);
                } else if (tpl.params._params !== undefined && tpl.params._params.bind !== undefined &&
                    checkBind(tpl.params._params.bind, key) && tpl.params.render == 'server') {
                    wbapp.render(tpl.params.target);
                }
            });
            $(document).trigger("bind", { key: key, data: value });
            $(document).trigger("bind-" + key, value);
            wbapp.console("Trigger: bind [" + key + "]");
        }
        return data;
    }
}

wbapp.save = async function(obj, params, func = null) {
    wbapp.console("Trigger: wb-save-start");
    $(obj).trigger("wb-save-start", params);
    let that = this;
    let data, form, result;
    let method = "POST";
    params.form !== undefined ? form = $(params.form) : form = $(obj).parents("form");

    if ($(form).length && !$(form).verify()) {
        $(obj).trigger("wb-save-error", {
            params: params
        });
        return false;
    }

    if ($(form).attr("method") !== undefined) method = $(form).attr("method");
    if ($(form).parents('.modal.saveclose').length) {
        params.dismiss = $(form).parents('.modal.saveclose').attr('id');
    }

    setTimeout(function() {
        // Задержка для ожидания обработки возможных плагинов
        data = wbapp.objByForm(form);
        if (data._idx) delete data._idx;

        //if ($(obj).is("input,select,textarea,button,img,a") && params.table && (params.id || params.item)) {
        if (params.table && (params.id || params.item)) {
            let fld = $(obj).attr("name");
            let value = $(obj).val();
            let id;
            if (params.field == undefined && fld > '') params.field = fld;
            if ($(obj).is(":checkbox") && $(obj).prop("checked")) value = "on";
            if ($(obj).is(":checkbox") && !$(obj).prop("checked")) value = "";

            if (params.id) {
                id = params.id;
            } else if (params.item) id = params.item;

            if (data.id !== undefined && data.id > '') id = data.id;

            if (fld !== undefined) {
                data = {};
                data['id'] = id;
                eval(`data.${fld} = value;`);
            } else {
                let tmpId = 'tmp.' + wbapp.newId();
                wbapp.storage(tmpId, {
                    'id': id
                }, false);
                if (params.field !== undefined) {
                    wbapp.storage(tmpId + '.' + params.field, data, false);
                } else {
                    data['id'] = id;
                    wbapp.storage(tmpId, data, false);
                }
                data = wbapp.storage(tmpId);
                wbapp.storage(tmpId, null);
            }
            data['id'] = id;
            if (params.url == undefined) params.url = `/api/save/${params.table}`;
        } else if (params.field !== undefined) {
            wbapp.storage('tmp' + '.' + params.table + '.' + params.field, data, false);
            data = wbapp.storage('tmp' + '.' + params.table);
        }
        if ($(obj).data('saved-id') !== undefined) {
            data['id'] = $(obj).data('saved-id');
        }
        wbapp.post(params.url, data, function(data) {
            if (data.error == true) {
                $(obj).trigger("wb-save-error", {
                    params: params,
                    data: data,
                });
                return null;
            }

            if (params.callback) eval('params = ' + params.callback + '(params,data)');

            if (params.data && params.error !== true) {
                var update = [];
                var dataname;
                $.each(data, function(key, value) {
                    update[key] = value
                });
                eval('var checknew = (typeof ' + params.data + ');');
                if (checknew == "undefined") {
                    eval(`dataname = str_replace("['` + data._id + `']","","` + params.data + `");`);
                    eval(dataname + '.push(update)');
                } else {
                    eval(params.data + ' = update;');
                }
            }

            if (params.dismiss && params.error !== true) $("#" + params.dismiss).modal("hide");
            wbapp.console('Update by tpl');
            wbapp.updateView(params, data);
            if (data._id !== undefined) $(obj).data('saved-id', data._id);

            wbapp.console("Trigger: wb-save-done");
            $(obj).trigger("wb-save-done", {
                params: params,
                data: data,
            });
            wbapp.console("Trigger: wb-form-save " + params.form);
            $(params.form).trigger("wb-form-save", {
                params: params,
                data: data,
            });

            if (func !== null) return func(data);

        });
    }, 50);
}

wbapp.updateView = function(params = {}, data = {}) {
    console.log('Update view');
    $.each(wbapp.template, function(i, tpl) {
        if (tpl.params.render == undefined || tpl.params.render !== 'client') tpl.params.render = 'server';
        if (tpl.params.render == 'client') {
            // client-side update
            if (tpl.params._params && tpl.params._params.bind) tpl.params = tpl.params._params;
            if (tpl.params.bind && (tpl.params.bind == params.bind || strpos(' ' + tpl.params.bind, params.update)) == 1) {
                if (params.bind) wbapp.storage(params.bind, data);
                if (params.update) wbapp.storageUpdate(params.update, data);
            }
        } else {
            // server-side update
            let prms = Object.assign({}, tpl.params);
            let post = null;
            prms.route == undefined ? prms.route = [] : null;
            if (prms.bind !== undefined && prms.update == undefined) prms.update = prms.bind;
            if (prms._params !== undefined && prms._params.bind !== undefined) prms.update = prms._params.bind;
            if (prms._params !== undefined && prms._params.update !== undefined) prms.update = prms._params.update;
            if (prms.route !== undefined && prms.route._post !== undefined) post = prms.route._post;
            if (prms.url == undefined && prms.route.url !== undefined) prms.url = prms.route.url;
            if (params.update == prms.update) {
                let target = prms.target;
                if (post && prms.url !== undefined) {
                    fetch(prms.url, {
                            method: 'POST',
                            body: post
                        })
                        .then((resp) => resp.text())
                        .then(function(res) {
                            let html = $(res).find(target).html();
                            $(document).find(target).html(html);
                            wbapp.refresh();
                        })
                } else {
                    wbapp.renderServer(prms, data);
                }
            }

        }
    })
}

wbapp.updateInputs = function() {
    $(document).find(":checkbox").each(async function() {
        if ($(this).attr("value") == "on") {
            $(this).attr("checked", true).prop("checked", true);
        } else {
            $(this).attr("checked", false).prop("checked", false);
        }
    })
}

wbapp.wbappScripts = async function() {
    var done = [];
    $(document).find("script[type=wbapp],script[wbapp],script[wb-app]").each(function() {
        if (this.done !== undefined) return;
        this.done = true;
        let src = null;
        if ($(this).is('[src]')) {
            src = $(this).attr('src');
        } else if ($(this).is('[wbapp]')) {
            src = $(this).attr('wbapp');
        } else if ($(this).is('[wb-app]')) {
            src = $(this).attr('wb-app');
        }
        var that = this;
        if (src !== null && src > '') {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', src, true);
            xhr.onload = function() {
                //eval(xhr.responseText);
                $(that).after('<script type="text/javascript">' + xhr.responseText + '</script>').remove();
            };
            xhr.send();
        } else {
            var script = $(this).text();
            var hash = md5(script);
            if (!in_array(hash, done)) {
                $(that).after('<script type="text/javascript">' + script + '</script>').remove();
                //eval(script);
                done.push(hash);
            }
        }
        if ($(this).attr("remove") !== undefined) $(this).remove();
        if ($(this).attr("removable") !== undefined) $(this).remove();
    });
}

wbapp.checkJson = function(queryString) {
    queryString = str_replace(" ", "", queryString.trim());
    if (queryString == "{}") return true;
    if (queryString.substr(0, 1) == "{" && queryString.substr(-1) == "}" && strpos(queryString, ":")) return true;
    return false;
}

wbapp.parseAttr = function(queryString = null) {
    if (queryString == null) queryString = $(this).attr("wb-data");
    queryString = str_replace("'", '"', queryString);
    queryString = str_replace("&amp;", '&', queryString);
    var params = {};
    if (wbapp.checkJson(queryString)) {
        params = JSON.parse(queryString);
    } else {
        parse_str(queryString, params);
    }
    $(this).data("wb-data", params);
    return params;
}

wbapp.post = async function(url, data = {}, func = null) {
    if (is_string(data)) {
        data += '&__token=' + wbapp._session.token;
    } else {
        try { data.__token = wbapp._session.token; } catch (error) { null }
    }
    wbapp.loading();
    $.post(url, data).then(function(res) {
        wbapp.unloading();
        if (func !== null) return func(res);
    })
}

wbapp.get = async function(url, data = {}, func = null) {
    if (is_string(data)) {
        data += '&__token=' + wbapp._session.token;
    } else {
        try { data.__token = wbapp._session.token; } catch (error) { null }
    }
    wbapp.loading();
    $.get(url, data)
        .then(function(data) {
            wbapp.unloading();
            if (func !== null) return func(data);
        })
        .fail(function(data) {
            wbapp.unloading();
            if (func !== null) return func(false);
        })
}

wbapp.ajax = async function(params, func = null) {
    if (!params.url && !params.tpl && !params.target) return;
    let opts = Object.assign({}, params);
    let token;
    delete opts._event;

    if (params.form !== undefined) {
        $(params.form).trigger("wb-ajax-start", params);
    } else if (params.target !== undefined) {
        $(params.target).trigger("wb-ajax-start", params);
    }
    wbapp.trigger("wb-ajax-start", params);

    if (params.request_type == 'remove_item') {
        wbapp.post(params.url, opts, async function(data) {
            if (data._removed !== undefined && data._removed == true && params.update !== undefined) {
                $.each(wbapp.template, function(i, tpl) {
                    let rend = false;
                    if (tpl.params !== undefined && tpl.params.bind !== undefined && tpl.params.bind == params.update) rend = true;
                    if (tpl.params !== undefined && tpl.params._params !== undefined && tpl.params._params.bind !== undefined && tpl.params._params.bind == params.update) rend = true;
                    if (rend) wbapp.renderServer(tpl.params);
                });
            }
        });
    } else if (params.url !== undefined) {
        if (params.form !== undefined) {
            params.formdata = wbapp.objByForm(params.form);
            params.formflds = {};
            $(params.form).find('[name]').each(function() {
                params.formflds[$(this).attr('name')] = $(this).attr('name');
                if ($(this).attr('name')) {
                    if ($(this).attr('data-label') > '') {
                        params.formflds[$(this).attr('name')] = $(this).attr('data-label');
                    } else if ($(this).closest('.form-group').find('label').length) {
                        params.formflds[$(this).attr('name')] = $(this).closest('.form-group').find('label').text();
                    } else if ($(this).prev("label").length) {
                        params.formflds[$(this).attr('name')] = $(this).prev("label").text();
                    } else if ($(this).attr('placeholder') > '') {
                        params.formflds[$(this).attr('name')] = $(this).attr('placeholder');
                    }
                }
            })
        }
        let opts = Object.assign({}, params);
        delete opts._event;

        if (opts._tid !== undefined && opts._tid > '') {
            delete opts.data; // добавил для очистки фильтра
            params = wbapp.tpl(opts._tid).params;
        }

        wbapp.loading();
        if (params.filter !== undefined) opts.filter = params.filter;
        wbapp.post(params.url, opts, async function(data) {
            wbapp.unloading();
            if (count(data) == 2 && data.error !== undefined && data.callback !== undefined) {
                eval(data.callback + '(params,data)');
                if (func !== null) return func(params, data);
            } else if (data.callback !== undefined) {
                eval(data.callback);
            }

            if (params.target && params.target > '#') {
                if ($(data).is(params.target)) {
                    $(document).find(params.target).html($(data).html());
                } else {
                    $(document).find(params.target).html($(data).find(params.target + ':first').html());
                }
            }

            if (params.source && params.source > '') data = $(data).find(params.source).html();
            if (params.html) $(document).find(params.html).html(data);
            if (params.append) $(document).find(params.append).append(data);
            if (params.prepend) $(document).find(params.prepend).prepend(data);
            if (params.replace) $(document).find(params.replace).replaceWith(data);
            //if (params.form) wbapp.formByObj(params.form,data);
            if (params.render == 'client') {
                if (params.bind && typeof data == "object") wbapp.storage(params.bind, data);
                if (params.update && typeof data == "object") wbapp.storageUpdate(params.update, data);
            }
            if (params._trigger !== undefined && params._trigger == "remove") eval('delete ' + params.data); // ???
            if (params.dismiss && params.error !== true) $("#" + params.dismiss).modal("hide");
            if (params.render !== undefined && params.render == 'client') wbapp.renderClient(params, data);
            if (params._event !== undefined && $(params._event.target).parent().is(":input")) {
                // $inp = $(params._event.target).parent();
                // тут нужна обработка значений на клиенте
            }
            if (params.update !== undefined) wbapp.updateView(params, data);
            wbapp.refresh(data);
            if (data.html !== undefined && params.target !== undefined) {
                if (params._params !== undefined && params._params.more !== undefined) {
                    $(document).find(params.target).append(data.html);
                } else {
                    $(document).find(params.target).html(data.html);
                }
            }
            /*
            if (params.render == 'client') {
                let res = $(data).find(params.target).html();
                $(document).find(params.target).html(res);
            } else if (params.render == undefined || params.render == 'server') {
                if (data.html !== undefined && params.target !== undefined) {
                    if (params._params !== undefined && params._params.more !== undefined) {
                        $(document).find(params.target).append(data.html);
                    } else {
                        $(document).find(params.target).html(data.html);
                    }

                } else if (params.update !== undefined || params.update !== undefined) {
                    $.each(wbapp.template, function(i, tpl) {
                        if (tpl.params && tpl.params.bind && tpl.params.bind == params.update) {
                            if (typeof tpl.params == 'object' && typeof data == 'object') wbapp.renderServer(tpl.params, data);
                        } else if (tpl.params && tpl.params._params && tpl.params._params.bind && tpl.params._params.bind == params.update) {
                            if (typeof tpl.params._params == 'object' && typeof data == 'object') wbapp.renderServer(tpl.params._params, data);
                        }
                    })
                }

                $(document).find(params.target).children('template').remove();
            }
            */
            if (params.callback !== undefined) eval(params.callback + '(params,data)');
            wbapp.setPag(params.target, data);
            //wbapp.console("Trigger: wb-ajax-done");
            if (data.result == undefined) params['data'] = data;
            if (params.form !== undefined) {
                $(params.form).trigger("wb-ajax-done", params);
            } else if (params.target !== undefined) {
                $(params.target).trigger("wb-ajax-done", params);
            } else {
                $(document).trigger("wb-ajax-done", params);
            }
            setTimeout(async function() {
                let showmod = $(document).find(".modal.show:not(:visible)");
                if (showmod.length) showmod.removeClass("show").modal('show');
            }, 50);
            if (func !== null) return func(params, data);
        });
    } else if (params.target !== undefined) {
        if (wbapp.template[params.target] !== undefined) {
            var target = wbapp.template[params.target].params;
        }
        if (!target) {
            wbapp.console("Template not found: " + params.target);
            return;
        } else {
            target.target = params.target;
            if ($(target.target)[0].filter == undefined) {
                try {
                    $(target.target)[0].filter = wbapp.template[target.target].params._params.filter;
                } catch (error) {
                    $(target.target)[0].filter = {}
                }
            }

            target.filter = $(target.target)[0].filter;
            if (target._params == undefined) target._params = {};
            let clearval = null;
            $.each(params, function(key, val) {
                if (key == 'filter') {
                    if (val == 'clear') {
                        target.filter = {};
                    } else {
                        target.filter = val;
                    }
                }
                if (key == 'filter_clear') {
                    clearval = val;
                }
                if (key == 'filter_remove') {
                    if (typeof val == "string") {
                        val = val.trim().split(' ');
                        delete target.filter[val];
                    }
                    if (typeof val == "object") {
                        $.each(val, function(i, v) {
                            delete target.filter[v];
                        })
                    }

                }
                if (key == 'filter_add') {
                    $.each(val, function(k, v) {
                        target.filter[k] = v;
                    })
                }
            });
            if (clearval !== null) {
                $(clearval).each(function(k, v) {
                    $(target.filter).each(function(tk, tv) {
                        json_encode(tv) == json_encode(v) ? target.filter = {} : null;
                    })
                })
            }
            $(target.target)[0].filter = target.filter;
            if (target._params && target._params.page !== undefined) target._params.page = 1
            if (target._params && target._params.pages !== undefined) delete target._params.pages
            if (target._params && target._params.count !== undefined) delete target._params.count
            if (target.tpl !== undefined) target._params.tpl = target.tpl;
            if (target._tid == undefined) target._tid = params.target; // чтобы срабатывал вариант ответа с json
            if (target.url == undefined && target.route !== undefined && target.route.uri !== undefined) target.url = target.route.uri;
            params.clear !== undefined && params.clear == "true" ? $(document).find(target._tid).html('') : null;

            wbapp.template[params.target].params = target;
            if (target._params == undefined || target._params.length == 0) { void(0); } else {

                if (target.filter) {
                    console.log(params.target);
                    wbapp.template[params.target].params._params.filter = target.filter;
                }


                if (wbapp.tmp.ajax_params == undefined || wbapp.tmp.ajax_params !== target) {
                    wbapp.tmp.ajax_params = target;
                    wbapp.ajax(target, function() {
                        delete wbapp.tmp.ajax_params;
                        func
                    }); // только если переданы предыдущие параметры
                }
            }
        }
    }
}

wbapp.refresh = function(data = null) {
    setTimeout(async function() {
        wbapp.wbappScripts();
        wbapp.tplInit();
        wbapp.ajaxAuto();
        wbapp.lazyload();
        wbapp.modalsInit();
        //        wbapp.fileinpInit();
        wbapp.wbappScripts();
        if ($.fn.tooltip) $('[data-toggle="tooltip"]').tooltip();
        if (data !== null) paginationfix(data);
    }, 1)
    let paginationfix = async function(data) {
        if (data.pag == undefined || data.params == undefined) return;
        if (data.params.more == undefined || data.params.more < 'more') return;
        if (data.params.target == undefined || data.params.target < '#') return;
        let $pag = $(document).find(`.pagination[data-tpl="${data.params.target}"]`)
        if (!$pag) return;
        if (data.params.page >= data.params.pages) data.pag = '';
        if (data.pag > '') {
            data.pag = $(data.pag).find(`.pagination[data-tpl="${data.params.target}"]`).html();
        }
        $pag.html(data.pag);
    }
}

wbapp.renderFilter = function(tid, filter) {
    let tpl = wbapp.tpl(tid);
    tpl.params.filter = filter;
    if (tpl.params._params !== undefined) tpl.params._params.filter = filter;
    wbapp.tpl(tid, tpl);
    wbapp.data('wbapp.filter.' + tid.substr(1), filter);
    wbapp.render(tid);
}

wbapp.storageUpdate = async function(key, data) {
    var store = wbapp.storage(key);
    if (!store) wbapp.storage(key, {});
    if (store._id == undefined && (store.result !== undefined || store.params !== undefined) && data !== null && data._id !== undefined) {
        if (data._removed !== undefined && data._removed == true) {
            if (store.params !== undefined && store.params.render == 'server') {
                wbapp.renderServer(store.params);
            } else {
                try {
                    delete store.result[data._id]
                } catch (err) {
                    wbapp.console('Not removed');
                }
            }
        } else if (data._renamed !== undefined && data._renamed == true) {
            /// rename
        } else {
            try {
                store.result[data._id] = data
            } catch (err) {
                wbapp.console('Error: wbapp.storageUpdate()');
            }
        }
        wbapp.storage(key, store);
    } else {
        wbapp.storage(key, data);
    }
}


wbapp.loading = async function() {
    if (wbapp.loader !== true) return;
    $(document).find('body').addClass('loading');
    if (typeof topbar !== 'undefined') {
        topbar.hide();
        topbar.show();
    }
}

wbapp.unloading = async function() {
    if (wbapp.loader !== true) return;
    $(document).find('body').removeClass('loading');
    if (typeof topbar !== 'undefined') {
        topbar.hide();
    }
}

wbapp.fetch = function(selector = 'body', data = {}, ret) {
    if ($(selector).length) {
        var tpl_id = $(selector).attr("data-wb-tpl");
        if (tpl_id !== undefined) {
            var html = urldecode($("#" + tpl_id).html());
        } else {
            if ($(selector).is("script")) {
                var html = $(selector).html();
            } else {
                if ($(selector).length == 1) {
                    var html = $(selector).outer();
                } else {
                    var html = selector;
                }
            }
        }
    } else {
        var html = selector;
    }
    var form = "undefined";
    var item = "undefined";
    if (data.form !== undefined) {
        form = data.form;
    }
    if (data.id !== undefined) {
        item = data.id;
    }
    if (data._form !== undefined) {
        form = data._form;
    }
    if (data._id !== undefined) {
        item = data._id;
    }
    if (data._item !== undefined) {
        item = data._item;
    }

    if (is_object(html)) { var tpl = $(html).outer(); } else { var tpl = html; }
    // контроллер не обслуживает данный запрос - устарело
    var url = "/ajax/setdata/" + form + "/" + item;
    var res = null;
    var param = { tpl: tpl, data: data };
    param = base64_encode(JSON.stringify(param));
    wbapp.postSync(url, {
        data: param
    }, function(data) {
        if (ret == undefined || ret == false) {
            $(selector).after(data).remove();
            res = true;
        } else {
            res = data;
        }
    });
    return res;
}


wbapp.toast = async function(title, text, params = {}) {
    console.log(text);
    var target = '.content-toasts';
    if (!$(document).find(target).length) {
        $('body').prepend('<div class="content-toasts position-fixed t-0" style="z-index:999999;right:0;"></div>');
    }

    let options = {
        'target': target,
        'delay': 3000,
    }

    if (wbapp.template['wb.toast'] == undefined) {
        var res = wbapp.getForm("snippets", "toast");
        wbapp.tpl('wb.toast', {
            html: res.result,
            params: {}
        });
    }

    let $tpl = $(wbapp.tpl('wb.toast').html);

    if (params.target) options.target = params.target;
    if (params.delay) options.delay = params.delay;
    if (params.bgcolor) {
        $tpl.addClass('bd-' + params.bgcolor);
        $tpl.find('.toast-header').addClass('bg-' + params.bgcolor);
    }
    if (params.txcolor) {
        $tpl.find('.toast-header h6').addClass('tx-' + params.txcolor).removeClass('tx-inverse');
    }
    $tpl.attr('data-delay', options.delay);

    let toast = Ractive({
        el: options.target,
        append: true,
        template: $tpl.outer(),
        data: {
            title: title,
            text: text,
            age: ''
        }
    });

    let last = $(document).find(options.target).find(".toast:last-child")
    if (last.length && last.toast !== undefined) {
        last.toast('show')
            .off('hidden.bs.toast')
            .on('hidden.bs.toast', function(e) {
                $(e.currentTarget).remove();
            });
    }
}


wbapp.formByObj = function(selector, data) {
    var form = $(document).find(selector, 0);
    $(form)[0].clear;
    $.each(data, async function(key, value) {
        $(form).find("[name='" + key + "']").val(value);
    });
}

wbapp.objByForm = function(form) {
    form = $(form);
    let data = $(form).serializeJson();
    return data;
}

wbapp.tplInit = async function() {
    if (!wbapp.template) wbapp.template = {};
    if (wbapp.template['wb.modal'] == undefined) {
        var res = wbapp.getForm("snippets", "modal");
        wbapp.tpl('wb.modal', {
            html: res.result,
            params: {}
        });
    }

    $(document).find("template:not([nowb])").each(async function() {
        if (this.done !== undefined) return
        else this.done = true;
        var tid
        if (tid == undefined && $(this).is("template[id]")) tid = $(this).attr("id");
        if (tid == undefined) tid = $(this).parent().attr("id");
        if (tid == undefined && $(this).is("[data-target]")) tid = $(this).attr("data-target");
        if (tid == undefined) {
            $(this).attr("id", "fe_" + wbapp.newId());
            var tid = $(this).attr("id");
        }
        tid = "#" + tid;

        var params = [];
        if ($(this).attr("data-params") !== undefined) {
            try {
                params = wbapp.parseAttr($(this).attr("data-params"));
                params['target'] = tid;
            } catch (error) { null }
        }

        if (params.filter !== undefined) {
            wbapp.data('wbapp.filter.' + tid.substr(1), params.filter);
        }

        let html = $(this).html();

        html = html.replace(/<template\b[^<]*(?:(?!<\/template>)<[^<]*)*<\/template>/gi, "");
        html = str_replace('%7B%7B', '{{', html);
        html = str_replace('%7D%7D', '}}', html);

        $(this).removeAttr("data-params");
        if ($(this).attr("data-ajax") !== undefined) {
            let prms = wbapp.parseAttr($(this).attr("data-ajax"));
            params = array_merge(prms, params);
            wbapp.tpl(tid, {
                'html': html,
                'params': params
            });
            $(this).trigger("click", tid);
        } else {
            wbapp.tpl(tid, {
                "html": html,
                "params": params
            });
        }

        if (params.bind && params.render == 'client') {
            wbapp.render(tid, wbapp.storage(params.bind));
        } else if (params.bind && params.render == 'server') {
            wbapp.storage(params.bind, params);
        } else if (params._params && params._params.bind && params._params.render == 'server') {
            wbapp.storage(params._params.bind, params);
        }
        if ($(this).prop("visible") == undefined) $(this).remove();
        wbapp.wbappScripts();
    });
}

wbapp.getForm = function(form, mode, data = {}, func = null) {
    if (!func) {
        var res = wbapp.postSync("/ajax/getform/" + form + "/" + mode, data);
    } else {
        var res = wbapp.post("/ajax/getform/" + form + "/" + mode, data, func);
    }
    return res;
}

wbapp.getTpl = function(tpl, data = {}, func = null) {
    if (!func) {
        var res = wbapp.postSync(`/ajax/gettpl/${tpl}`, data);
    } else {
        var res = wbapp.post(`/ajax/gettpl/${tpl}`, data, func);
    }
    return res;
}


wbapp.tpl = function(tid, data = null) {
    if (data == null && wbapp.template[tid] !== undefined) {
        if (wbapp.template[tid].params !== undefined && wbapp.template[tid].params.locale !== undefined) {
            let tpl = wbapp.template[tid].html;
            let loc = wbapp.template[tid].params.locale;
            $.each(loc, function(key, val) {
                tpl = str_replace('{{_lang.' + key + '}}', val, tpl);
            });
            wbapp.template[tid].html = tpl;
        }
        return wbapp.template[tid];
    } else {
        wbapp.template[tid] = data;
    }
}

wbapp.render = async function(tid, data) {
    if (tid == undefined) return;
    let params = wbapp.template[tid].params;
    if (data == undefined) {
        data = {};
        params.bind !== undefined ? data = wbapp.storage(params.bind) : null;
        params.update !== undefined ? data = wbapp.storage(params.update) : null;
    }
    if (params.render == undefined) params.render = null; // для рендера не списковых данных

    switch (params.render) {
        case 'client':
            wbapp.renderClient(params, data);
            break;
        case 'server':
            wbapp.renderServer(params, data);
            break;
        case null:
            wbapp.renderServer(params, data);
            break;
            /*
            new Ractive({
                'target': tid,
                'template': wbapp.template[tid].html,
                'data': () => { return data; }
            });
            break;
            */
    }
    wbapp.lazyload();
    wbapp.trigger('wb-render-done', tid, data);
}

wbapp.setPag = async function(target, data) {
    $(document).find('.pagination[data-tpl="' + target + '"]').parents('nav').remove();
    var pagert = $(document).find(target);
    if ($(pagert).is('li')) pagert = $(pagert).parent();
    if ($(pagert).is('tbody')) pagert = $(pagert).parents('table');
    if (data.pos == 'both' || data.pos == 'top') $(pagert).before(data.pag);
    if (data.pos == 'both' || data.pos == 'bottom') $(pagert).after(data.pag);
}

wbapp.renderServer = async function(params, data = {}) {
    if (params.target !== undefined && params.target > '#' && $(document).find(params.target).length) {
        //delete params.data;
        params.bind ? params.update = params.bind : null;
        delete params.bind;
        params._tid = params.target;
        let post;
        params.url == undefined && params.ajax !== undefined ? params.url = params.ajax : null;
        try {
            post = params._route._post;
        } catch (error) {
            post = null;
        }

        if (post) {
            wbapp.post(params.url, post, function(res) {
                let html = $(res).find(params.target).html();
                $(document).find(params.target).html(html);
                wbapp.refresh();
            })
        } else {
            wbapp.ajax(params, function(data) {
                wbapp.setPag(params.target, data.data)
            });
        }
    }
}

wbapp.renderClient = async function(params, data = {}) {
    var tid;
    var newbind = false;
    if (tid == undefined && params._tid !== undefined) tid = params._tid;
    if (tid == undefined && params.target !== undefined) tid = params.target;
    if (params.target == undefined && tid !== undefined) params.target = tid;

    /*
    var that = params._event.target;
    var tpl = $(that).parent();
    if ($(that).is("template")) tpl = $(that);
    var tid = "#"+$(tpl).parent().attr("id");
    if (params.target !== undefined) tid = params.target;
    */

    if (wbapp.template[tid] == undefined) return;

    if (params.from !== undefined && data[params.from] == undefined) {
        let from = {};
        from[params.from] = data;
        data = from;
    }


    if (wbapp.bind[params.bind] == undefined) {
        wbapp.bind[params.bind] = {};
        newbind = tid;
    }
    var html = wbapp.template[tid].html;
    wbapp.bind[params.bind][tid] = new Ractive({
            target: params.target,
            template: html,
            data: () => {
                return data
            }
        })
        ///wbapp.storage(params.bind, data);
    wbapp.template[tid].params = params;
    var pagination = $(tid).find(".pagination");
    if (pagination) {
        let page = 1;
        $(pagination).data("tpl", tid);
        params.page ? page = params.page : page = 1;
        $(pagination).find(".page-item").removeClass("active");
        $(pagination).find(`[data-page="${page}"]`).parent(".page-item").addClass("active");
    }

    if (newbind) {
        wbapp.bind[params.bind][tid].set(data);
        $(document).off("bind-" + params.bind);
        $(document).on("bind-" + params.bind, function(e, data) {
            try {
                wbapp.bind[params.bind][tid].set(data);
            } catch (error) {
                wbapp.bind[params.bind][tid].update(data);
            }
        })
    }
}

wbapp.newId = function(separator, prefix) {
    if (separator == undefined) {
        separator = "";
    }
    var mt = explode(" ", microtime());
    var md = substr(str_repeat("0", 2) + dechex(ceil(mt[0] * 10000)), -4);
    var id = dechex(time() + rand(100, 999));
    if (prefix !== undefined && prefix > "") {
        id = prefix + separator + id + md;
    } else {
        id = "id" + id + separator + md;
    }
    return id;
}

wbapp.modalsInit = async function() {
    wbapp.modalZndx == undefined ? wbapp.modalZndx = 2000 : null;

    $(document).undelegate(".modal-header", "dblclick");
    $(document).delegate(".modal-header", "dblclick", function(event) {
        var that = $(event.target);
        $(that).closest(".modal").toggleClass("modal-fullscreen");
    });

    if (document.modalDelegates == undefined) {
        document.modalDelegates = true;
        $(document).delegate(".modal", "shown.bs.modal", function() {
            $('.modal[data-zidx]').each(function() {
                let max = $(this).attr('data-zidx') * 1;
                if (max > wbapp.modalZndx) wbapp.modalZndx = max;
            })

            if ($(this).parents('.modal')) {
                $(this).appendTo($(this).parents('.modal').parent());
            }

            var that = this;
            if ($(that).find('.modal-content').css('position') == 'fixed') return;
            $(that).find('.modal-content')
                //      .resizable({
                //        minWidth: 300,
                //        minHeight: 175,
                //        handles: 'n, e, s, w, ne, sw, se, nw',
                //      })
                .draggable({
                    handle: '.modal-header',
                    containment: "body"
                });

            wbapp.modalZndx += 10;
            if (!$(this).closest().is("body")) {
                if ($(this).data("parent") == undefined) $(this).data("parent", $(this).closest());
                // нельзя переносить модальное окно, так как могут возникнуть проблемы с селектором!
                //$(this).appendTo("body");
            }
            if ($(that).attr('data-zidx') == undefined) {
                $(that).css("z-index", wbapp.modalZndx).attr('data-zidx', wbapp.modalZndx);
                if ($(that).attr("data-backdrop") !== "false") {
                    $(".modal-backdrop:not([data-zidx])").css("z-index", (wbapp.modalZndx - 5)).attr('data-zidx', wbapp.modalZndx - 5);
                }
            }

            let bh = $(this).find('.modal-body').height()
            if (bh > 0) {
                $(this).find('.modal-body .modal-h').height(bh)
            }

            window.dispatchEvent(new Event('resize'));
        });

        $(document).delegate(".modal", "DOMSubtreeModified", async function() {
            if ($(this).find('.modal-content').height() > $(window).height() - 80) {
                $(this).addClass('h-100');
            } else {
                $(this).removeClass('h-100');
            }
        })

        $(document).delegate(".modal", 'hidden.bs.modal', async function() {
            let zndx = $(this).css("z-index") * 1;
            $(".modal-backdrop[style*='z-index: " + (zndx - 5) + "']").remove();
            $(this).removeAttr('data-zidx');
        })

        $(document).delegate(".modal [data-dismiss]", "click", function(event) {
            event.preventDefault();
            let zndx = $(this).attr("data-dismiss") * 1;
            let modal = $(document).find(".modal[data-zidx='" + $(this).attr("data-dismiss") + "']");
            modal.modal("hide");
            $(this).removeAttr('data-zidx');
        });


        $(document).delegate(".modal", "hidden.bs.modal", function(event) {
            var that = this;
            if ($(this).hasClass("removable") || $(this).hasClass("remove")) {
                $(that).modal("dispose").remove();
            } else {
                $(this).appendTo($(this).data("parent"));
            }
        });
    }
}

wbapp.getModal = function(id = null) {
    var modal = $(document).data("wbapp-modal");
    if (modal == undefined) {
        var modal = wbapp.getForm("snippets", "modal");
        modal = $("<div>" + modal.content + "</div>").find(".modal").clone();
        $(document).data("wbapp-modal", modal);
    }
    var zndx = wbapp.modalZndx * 1 + 10;
    wbapp.modalZndx = zndx;
    if (id !== null) $(modal).attr("id", id);
    if (zndx !== undefined) $(modal).data("zndx", zndx).attr("style", "z-index:" + zndx);
    return $(modal).clone();
}

wbapp.ajaxSync = function(ajaxObjs, fn) {
    if (!ajaxObjs) return;
    wbapp.loading();
    var data = [];
    var ajaxCount = ajaxObjs.length;
    if (fn == undefined) {
        var fn = function(data) {
            return data;
        }
    }
    for (var i = 0; i < ajaxCount; i++) { //append logic to invoke callback function once all the ajax calls are completed, in success handler.
        try { ajaxObjs[i].data.__token = wbapp._session.token; } catch (error) { null }
        $.ajax(ajaxObjs[i]).done(function(res) {
            ajaxCount--;
            if (ajaxObjs.length > 0) {
                data.push(res);
            } else {
                data = res;
            }
        }).fail(function() {
            wbapp.unloading();
            ajaxCount--;
            if (ajaxObjs.length > 0) {
                data.push(false);
            } else {
                data = false;
            }
        }); //make ajax call
    };
    while (ajaxCount > 0) {
        // wait all done
    }
    wbapp.unloading();
    return fn(data);
}


wbapp.getSync = function(url, data = {}) {
    return wbapp.ajaxSync([{
        url: url,
        type: 'GET',
        async: false,
        data: data
    }])[0];
}

wbapp.postSync = function(url, data = {}) {
    return wbapp.ajaxSync([{
        url: url,
        type: 'POST',
        async: false,
        data: data
    }])[0];
}

wbapp.session = function(e) {
    if (wbapp._session == undefined) wbapp._session = wbapp.postSync("/ajax/getsess/");
    wbapp.trigger('wb-getsess', e, wbapp._session);
    return wbapp._session;
}

wbapp.settings = function(e) {
    if (wbapp._settings == undefined) wbapp._settings = wbapp.postSync("/ajax/getsett/");
    wbapp.trigger('wb-getsett', e, wbapp._settings);
    return wbapp._settings;
}

wbapp.console = async function(text) {
    if (wbapp._settings == undefined || wbapp._settings.devmode == 'on') {
        console.log(text);
    }
}

wbapp.loadScripts = async function(scripts = [], trigger = null, func = null) {
    if (document.loadedScripts == undefined) document.loadedScripts = [];
    if (document.loadingScripts == undefined) document.loadingScripts = [];
    let ready = [];
    var stop = 0;
    var count = scripts.length;
    var loadedArr = JSON.parse(JSON.stringify(document.loadedScripts));
    var loadingArr = JSON.parse(JSON.stringify(document.loadingScripts));
    scripts.forEach(function(src, i) {
        //    let name = src.split("/");
        //    name = name[name.length-1];
        let name = src + '';
        let loaded = in_array(name, loadedArr);
        let loading = in_array(name, loadingArr);;
        if (wbapp.devmode > 0 && src.indexOf('?') == -1) src += '?' + wbapp.devmode;
        if (loading) {
            wbapp.console("Script is loading: " + name);
        } else if (loaded) {
            wbapp.console("Script already loaded: " + name);
            stop += 1;
            if (stop >= count) {
                if (trigger > '') {
                    $(document).find("script#" + trigger + "-remove").remove();
                    $(document).trigger(trigger);
                }
                if (func !== null) return func(scripts);
            }
        } else if (!loading && !loaded) {
            let script = document.createElement('script');
            document.loadingScripts.push(name);
            script.src = name;
            script.async = false;
            script.onload = async function() {
                document.loadedScripts.push(name);
                let pos = document.loadingScripts.indexOf(name);
                delete document.loadingScripts[pos];
                wbapp.console("Script loaded: " + name);
                stop += 1;
                if (stop >= count) {
                    if (trigger > '') {
                        $(document).find("script#" + trigger + "-remove").remove();
                        $(document).trigger(trigger);
                    }
                    if (func !== null) return func(scripts);
                }
            }
            document.head.appendChild(script);
        }

    });
}

wbapp.loadStyles = async function(styles = [], trigger = null, func = null) {
    if (wbapp.loadedStyles == undefined) wbapp.loadedStyles = [];
    var i = 0;


    styles.forEach(function(src) {
        setTimeout(function() {
            if (wbapp.loadedStyles.indexOf(src) !== -1) {
                i++;
                if (i >= styles.length) {
                    if (func !== null) return func(styles);
                    if (trigger !== null) {
                        wbapp.console("Trigger: " + trigger);
                        $(document).find("script#" + trigger + "-remove").remove();
                        $(document).trigger(trigger);
                    }
                }
            } else {
                if (wbapp.devmode && src.indexOf('?') == -1) src += '?' + wbapp.devmode;
                var style = document.createElement('link');
                wbapp.loadedStyles.push(src);
                style.href = src;
                style.rel = "stylesheet";
                style.type = "text/css";
                style.async = false;
                style.onload = function() {
                    i++;
                    if (i >= styles.length) {
                        if (func !== null) return func(styles);
                        if (trigger !== null) {
                            $(document).find("script#" + trigger + "-remove").remove();
                            $(document).trigger(trigger);
                            wbapp.console("Trigger: " + trigger);
                        }
                    }
                }
                document.head.appendChild(style);
            }
        }, 1)
    });
}

wbapp.loadPreload = function(trigger = null, func = null) {
    let preloads = {};
    $('link[rel=preload][as][href]').each(function() {
        if (preloads[$(this).attr('as')] == undefined) { preloads[$(this).attr('as')] = []; }
        preloads[$(this).attr('as')].push($(this).attr('href'))
    });
    let preload_max = 0;
    let preload_count = 0;
    if (preloads.script !== undefined && preloads.script.length > 0) preload_max++;
    if (preloads.style !== undefined && preloads.style.length > 0) preload_max++;
    let preload_check = () => {
        if (preload_count == preload_max) {
            if (func !== null) return func(styles);
            if (trigger !== null) {
                $(document).trigger(trigger);
                wbapp.console("Trigger: " + trigger);
            }
            wbapp.trigger('ready-all');
        }
    }
    wbapp.loadScripts(preloads.script, 'preloaded-js', () => {
        preload_count++;
        preload_check()
    });
    wbapp.loadStyles(preloads.style, 'preloaded-css', () => {
        preload_count++;
        preload_check()
    });
}

wbapp.on = async function(trigger, func = null) {
    if (func == null) func = () => { return true; }
    $(document).on(trigger, func);
}

wbapp.trigger = async function(trigger, event = null, data = null) {
    wbapp.console('Trigger: ' + trigger);
    if (event == null) {
        $(document).trigger(trigger, data);
    } else {
        $(document).trigger(trigger, event, data);
        //$(event).trigger(trigger, data);
    }
}

String.prototype.replaceArray = function(find, replace) {
    var replaceString = this;
    var regex;
    for (var i = 0; i < find.length; i++) {
        regex = new RegExp(find[i], "g");
        replaceString = replaceString.replace(regex, replace[i]);
    }
    return replaceString;
};

wbapp.furl = function(str) {
    str = wbapp.transilt(str);
    str = str.replace("'", '');
    str = str.replace(/[^\/а-яА-Яa-zA-Z0-9_-]{1,}/gm, "-");
    str = str.replace(/[__]{1,}/gm, "_");
    str = str.replace(/[--]{1,}/gm, "-");
    if (str.substr(-1) == '-' || str.substr(-1) == '_') {
        str = str.substr(0, str.length - 1)
    }
    //str = str.replace('-', '_');
    return str.toLowerCase();
}



wbapp.transilt = function(word) {
    let cyr = [
        'ё', 'ж', 'ч', 'щ', 'ш', 'ю', 'а', 'б', 'в', 'г', 'д', 'е', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ъ', 'ы', 'ь', 'э', 'я',
        'Ё', 'Ж', 'Ч', 'Щ', 'Ш', 'Ю', 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ъ', 'Ы', 'Ь', 'Э', 'Я'
    ]
    let lat = [
        'yo', 'j', 'ch', 'sch', 'sh', 'u', 'a', 'b', 'v', 'g', 'd', 'e', 'z', 'i', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'f', 'h', 'c', '`', 'y', '', 'e', 'ya',
        'yo', 'J', 'Ch', 'Sch', 'Sh', 'U', 'A', 'B', 'V', 'G', 'D', 'E', 'Z', 'I', 'I', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'F', 'H', 'c', '`', 'Y', '', 'E', 'ya'
    ]
    return word.replaceArray(cyr, lat)
}

wbapp.check_email = function(email) {
    if (email.match(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i)) {
        return true;
    } else {
        return false;
    }
}

var array_column = function(list, column, indice) {
    var result, key;
    if (list.length) {
        if (typeof indice !== "undefined") {
            result = {};

            for (key in list)
                if (typeof list[key][column] !== 'undefined' && typeof list[key][indice] !== 'undefined')
                    result[list[key][indice]] = list[key][column];
        } else {
            result = [];

            for (key in list)
                if (typeof list[key][column] !== 'undefined')
                    result.push(list[key][column]);
        }
    }
    return result;
}

var alive = setInterval(async function() {
    wbapp.alive();
}, 84600);

wbapp.init = async function() {
    wbapp.wbappScripts();
    wbapp.tplInit();
    wbapp.lazyload()
    wbapp.modalsInit();
}

wbapp.print = async function(pid) {
    var divToPrint = document.getElementById(pid);
    var newWin = window.open('', 'Print-Window');
    newWin.document.open();
    newWin.document.write('<!DOCTYPE html><html><head><link rel="stylesheet" type="text/css" href="/engine/lib/bootstrap/css/bootstrap.min.css"></head><body onload="window.print()">' + divToPrint.innerHTML + '</body></html>');
    newWin.document.close();
    setTimeout(() => { newWin.close(); }, 1000);
}

wbapp.redirectPost = async function(location, args) {
    var form = '';
    $.each(args, function(key, value) {
        value == undefined ? value = "" : null;
        typeof value == 'object' ? value = JSON.stringify(value) : null;
        value = value.split('"').join('\"');
        form += '<textarea style="display:none;" name="' + key + '">' + value + '</textarea>';
    });
    $('<form action="' + location + '" method="POST">' + form + '</form>').appendTo($(document.body)).submit();
}

function is_object(val) { return val instanceof Object; }

function is_callable(t, n, o) {
    var e = "",
        r = {},
        i = "";
    if ("string" == typeof t) r = window, e = i = t;
    else {
        if (!(t instanceof Array && 2 === t.length && "object" == typeof t[0] && "string" == typeof t[1])) return !1;
        r = t[0], i = t[1], e = (r.constructor && r.constructor.name) + "::" + i
    }
    return !(!n && "function" != typeof r[i]) && (o && (window[o] = e), !0)
}

function is_visible(elem) {
    if (!(elem instanceof Element)) throw Error('DomUtil: elem is not an element.');
    const style = getComputedStyle(elem);
    if (style.display === 'none') return false;
    if (style.visibility !== 'visible') return false;
    if (style.opacity < 0.1) return false;
    if (elem.offsetWidth + elem.offsetHeight + elem.getBoundingClientRect().height +
        elem.getBoundingClientRect().width === 0) {
        return false;
    }
    const elemCenter = {
        x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
        y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
    };
    if (elemCenter.x < 0) return false;
    if (elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)) return false;
    if (elemCenter.y < 0) return false;
    if (elemCenter.y > (document.documentElement.clientHeight || window.innerHeight)) return false;
    let pointContainer = document.elementFromPoint(elemCenter.x, elemCenter.y);
    do {
        if (pointContainer === elem) return true;
    } while (pointContainer = pointContainer.parentNode);
    return false;
}

var loadPhpjs = async function() {
    if (_tmpphp == false) {
        _tmpphp = true;
        let phpjs = document.createElement('script');
        phpjs.src = `/engine/js/php.js`;
        phpjs.async = false;
        phpjs.onload = async function() {
            setTimeout(() => { wbapp.start() }, 10);
        }
        document.head.appendChild(phpjs);
    }
}

var loadJquery = async function() {
    if (_tmpjq == false) {
        _tmpjq = true;
        let jquery = document.createElement('script');
        jquery.src = '/engine/js/jquery.min.js';
        jquery.async = false;
        jquery.onload = async function() {
            setTimeout(() => { wbapp.start() }, 10);
        }
        document.head.appendChild(jquery);
    }

}