!function(){"use strict";var t,n,r;t=jQuery,wp.tiCustomizeButton={init:function(){t("#customize-theme-controls").on("click",".menu-shortcut",function(e){wp.customize.section("menu_locations").focus(),e.preventDefault()}),t("#customize-theme-controls").on("click",".neve-control-focus",function(e){wp.customize.control(t(this).data("control-to-focus")).focus(),e.preventDefault()})}},t(document).ready(function(){wp.tiCustomizeButton.init()}),n=jQuery,wp.neveHeadingAccordion={init:function(){this.handleToggle()},handleToggle:function(){n(".customize-control-customizer-heading.accordion .neve-customizer-heading").on("click",function(){var e=n(this).closest(".accordion");return n(e).toggleClass("expanded"),!1})}},n(document).ready(function(){wp.neveHeadingAccordion.init()}),r=jQuery,(J=wp.customize).controlConstructor["select-multiple"]=J.Control.extend({ready:function(){var t=this;r("select",t.container).change(function(){var e=r(this).val();null===e?t.setting.set(""):t.setting.set(e)})}});var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(e,t){return e(t={exports:{}},t.exports),t.exports}function i(e){try{return!!e()}catch(e){return!0}}function c(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}function u(e){return x.call(e).slice(8,-1)}function a(e){if(null==e)throw TypeError("Can't call method on "+e);return e}function s(e){return O(a(e))}function l(e){return"object"==typeof e?null!==e:"function"==typeof e}function f(e,t){if(!l(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!l(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!l(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!l(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}function p(e,t){return E.call(e,t)}function d(e){return S?z.createElement(e):{}}function v(e){if(!l(e))throw TypeError(String(e)+" is not an object");return e}function h(t,n){try{A(g,t,n)}catch(e){g[t]=n}return n}var y=function(e){return e&&e.Math==Math&&e},g=y("object"==typeof globalThis&&globalThis)||y("object"==typeof window&&window)||y("object"==typeof self&&self)||y("object"==typeof e&&e)||function(){return this}()||Function("return this")(),m=!i(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}),w={}.propertyIsEnumerable,b=Object.getOwnPropertyDescriptor,j={f:b&&!w.call({1:2},1)?function(e){e=b(this,e);return!!e&&e.enumerable}:w},x={}.toString,C="".split,O=i(function(){return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==u(e)?C.call(e,""):Object(e)}:Object,E={}.hasOwnProperty,z=g.document,S=l(z)&&l(z.createElement),Q=!m&&!i(function(){return 7!=Object.defineProperty(d("div"),"a",{get:function(){return 7}}).a}),_=Object.getOwnPropertyDescriptor,k={f:m?_:function(e,t){if(e=s(e),t=f(t,!0),Q)try{return _(e,t)}catch(e){}if(p(e,t))return c(!j.f.call(e,t),e[t])}},I=Object.defineProperty,T={f:m?I:function(e,t,n){if(v(e),t=f(t,!0),v(n),Q)try{return I(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},A=m?function(e,t,n){return T.f(e,t,c(1,n))}:function(e,t,n){return e[t]=n,e},P="__core-js_shared__",R=g[P]||h(P,{}),N=Function.toString;"function"!=typeof R.inspectSource&&(R.inspectSource=function(e){return N.call(e)});function D(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++K+G).toString(36)}var M,U,F,L,q,B,V,W,$=R.inspectSource,H=g.WeakMap,J="function"==typeof H&&/native code/.test($(H)),y=o(function(e){(e.exports=function(e,t){return R[e]||(R[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.9.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})}),K=0,G=Math.random(),Y=y("keys"),e=function(e){return Y[e]||(Y[e]=D(e))},X={},w=g.WeakMap;V=J?(M=R.state||(R.state=new w),U=M.get,F=M.has,L=M.set,q=function(e,t){return t.facade=e,L.call(M,e,t),t},B=function(e){return U.call(M,e)||{}},function(e){return F.call(M,e)}):(W=e("state"),X[W]=!0,q=function(e,t){return t.facade=e,A(e,W,t),t},B=function(e){return p(e,W)?e[W]:{}},function(e){return p(e,W)});function Z(e){return"function"==typeof e?e:void 0}function ee(e){return isNaN(e=+e)?0:(0<e?le:se)(e)}function te(e){return 0<e?fe(ee(e),9007199254740991):0}function ne(e,t){var n,r=s(e),o=0,i=[];for(n in r)!p(X,n)&&p(r,n)&&i.push(n);for(;t.length>o;)p(r,n=t[o++])&&(~ve(i,n)||i.push(n));return i}function re(r,o,e){if(!function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(r),void 0===o)return r;switch(e){case 0:return function(){return r.call(o)};case 1:return function(e){return r.call(o,e)};case 2:return function(e,t){return r.call(o,e,t)};case 3:return function(e,t,n){return r.call(o,e,t,n)}}return function(){return r.apply(o,arguments)}}function oe(e){return Object(a(e))}var ie,ce={set:q,get:B,has:V,enforce:function(e){return V(e)?B(e):q(e,{})},getterFor:function(n){return function(e){var t;if(!l(e)||(t=B(e)).type!==n)throw TypeError("Incompatible receiver, "+n+" required");return t}}},ue=o(function(e){var t=ce.get,u=ce.enforce,a=String(String).split("String");(e.exports=function(e,t,n,r){var o=!!r&&!!r.unsafe,i=!!r&&!!r.enumerable,c=!!r&&!!r.noTargetGet;"function"==typeof n&&("string"!=typeof t||p(n,"name")||A(n,"name",t),(r=u(n)).source||(r.source=a.join("string"==typeof t?t:""))),e!==g?(o?!c&&e[t]&&(i=!0):delete e[t],i?e[t]=n:A(e,t,n)):i?e[t]=n:h(t,n)})(Function.prototype,"toString",function(){return"function"==typeof this&&t(this).source||$(this)})}),ae=g,P=function(e,t){return arguments.length<2?Z(ae[e])||Z(g[e]):ae[e]&&ae[e][t]||g[e]&&g[e][t]},se=Math.ceil,le=Math.floor,fe=Math.min,pe=Math.max,de=Math.min,H=function(u){return function(e,t,n){var r,o=s(e),i=te(o.length),c=function(e,t){e=ee(e);return e<0?pe(e+t,0):de(e,t)}(n,i);if(u&&t!=t){for(;c<i;)if((r=o[c++])!=r)return!0}else for(;c<i;c++)if((u||c in o)&&o[c]===t)return u||c||0;return!u&&-1}},ve={includes:H(!0),indexOf:H(!1)}.indexOf,he=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ye=he.concat("length","prototype"),ge={f:Object.getOwnPropertyNames||function(e){return ne(e,ye)}},me={f:Object.getOwnPropertySymbols},we=P("Reflect","ownKeys")||function(e){var t=ge.f(v(e)),n=me.f;return n?t.concat(n(e)):t},be=/#|\.prototype\./,J=function(e,t){e=xe[je(e)];return e==Oe||e!=Ce&&("function"==typeof t?i(t):!!t)},je=J.normalize=function(e){return String(e).replace(be,".").toLowerCase()},xe=J.data={},Ce=J.NATIVE="N",Oe=J.POLYFILL="P",Ee=J,ze=k.f,w=function(e,t){var n,r,o,i=e.target,c=e.global,u=e.stat,a=c?g:u?g[i]||h(i,{}):(g[i]||{}).prototype;if(a)for(n in t){if(r=t[n],o=e.noTargetGet?(o=ze(a,n))&&o.value:a[n],!Ee(c?n:i+(u?".":"#")+n,e.forced)&&void 0!==o){if(typeof r==typeof o)continue;!function(e,t){for(var n=we(t),r=T.f,o=k.f,i=0;i<n.length;i++){var c=n[i];p(e,c)||r(e,c,o(t,c))}}(r,o)}(e.sham||o&&o.sham)&&A(r,"sham",!0),ue(a,n,r,e)}},Se=Array.isArray||function(e){return"Array"==u(e)},Qe="process"==u(g.process),H=P("navigator","userAgent")||"",J=g.process,J=J&&J.versions,J=J&&J.v8;J?Ne=(ie=J.split("."))[0]+ie[1]:H&&(!(ie=H.match(/Edge\/(\d+)/))||74<=ie[1])&&(ie=H.match(/Chrome\/(\d+)/))&&(Ne=ie[1]);function _e(e){return p(De,e)&&(Re||"string"==typeof De[e])||(Re&&p(Me,e)?De[e]=Me[e]:De[e]=Ue("Symbol."+e)),De[e]}function ke(e,t){var n;return new(void 0===(n=Se(e)&&("function"==typeof(n=e.constructor)&&(n===Array||Se(n.prototype))||l(n)&&null===(n=n[Fe]))?void 0:n)?Array:n)(0===t?0:t)}function Ie(){}function Te(e){return"<script>"+e+"</"+$e+">"}var Ae,Pe=Ne&&+Ne,Re=!!Object.getOwnPropertySymbols&&!i(function(){return!Symbol.sham&&(Qe?38===Pe:37<Pe&&Pe<41)}),Ne=Re&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,De=y("wks"),Me=g.Symbol,Ue=Ne?Me:Me&&Me.withoutSetter||D,Fe=_e("species"),Le=[].push,y=function(p){var d=1==p,v=2==p,h=3==p,y=4==p,g=6==p,m=7==p,w=5==p||g;return function(e,t,n,r){for(var o,i,c=oe(e),u=O(c),a=re(t,n,3),s=te(u.length),l=0,r=r||ke,f=d?r(e,s):v||m?r(e,0):void 0;l<s;l++)if((w||l in u)&&(i=a(o=u[l],l,c),p))if(d)f[l]=i;else if(i)switch(p){case 3:return!0;case 5:return o;case 6:return l;case 2:Le.call(f,o)}else switch(p){case 4:return!1;case 7:Le.call(f,o)}return g?-1:h||y?y:f}},Ne={forEach:y(0),map:y(1),filter:y(2),some:y(3),every:y(4),find:y(5),findIndex:y(6),filterOut:y(7)},qe=Object.keys||function(e){return ne(e,he)},Be=m?Object.defineProperties:function(e,t){v(e);for(var n,r=qe(t),o=r.length,i=0;i<o;)T.f(e,n=r[i++],t[n]);return e},Ve=P("document","documentElement"),We="prototype",$e="script",He=e("IE_PROTO"),Je=function(){try{Ae=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e;Je=Ae?function(e){e.write(Te("")),e.close();var t=e.parentWindow.Object;return e=null,t}(Ae):((e=d("iframe")).style.display="none",Ve.appendChild(e),e.src=String("javascript:"),(e=e.contentWindow.document).open(),e.write(Te("document.F=Object")),e.close(),e.F);for(var t=he.length;t--;)delete Je[We][he[t]];return Je()};X[He]=!0;var y=Object.create||function(e,t){var n;return null!==e?(Ie[We]=v(e),n=new Ie,Ie[We]=null,n[He]=e):n=Je(),void 0===t?n:Be(n,t)},Ke=_e("unscopables"),Ge=Array.prototype;null==Ge[Ke]&&T.f(Ge,Ke,{configurable:!0,value:y(null)});var Ye,Xe=Ne.find,m="find",Ze=!0;m in[]&&Array(1)[m](function(){Ze=!1}),w({target:"Array",proto:!0,forced:Ze},{find:function(e){return Xe(this,e,1<arguments.length?arguments[1]:void 0)}}),Ye=m,Ge[Ke][Ye]=!0;var et,tt=_e("species"),P=function(t){return 51<=Pe||!i(function(){var e=[];return(e.constructor={})[tt]=function(){return{foo:1}},1!==e[t](Boolean).foo})},nt=Ne.filter;w({target:"Array",proto:!0,forced:!P("filter")},{filter:function(e){return nt(this,e,1<arguments.length?arguments[1]:void 0)}}),et=jQuery,wp.neveOrderControl={init:function(){this.setupSorting(),this.handleHide()},setupSorting:function(){var e=this;et(".ti-order-sortable").each(function(){et(this).sortable({revert:!0,axis:"y",containment:"parent",update:function(){e.updateOrder(this)}})})},updateOrder:function(e){var t=[],n=et(e).find("li.enabled");et(n).each(function(){t.push(et(this).data("id"))}),t=t.filter(function(e){return void 0!==e}),et(e).next().val(JSON.stringify(t)),et(e).next().trigger("change")},handleHide:function(){var e=this;et(".toggle-display").on("click touchstart",function(){et(this).parent().toggleClass("enabled"),e.updateOrder(et(this).closest(".ti-order-sortable"))})}},et(document).ready(function(){wp.neveOrderControl.init()}),w({target:"Object",stat:!0,forced:i(function(){qe(1)})},{keys:function(e){return qe(oe(e))}}),wp.customize.controlConstructor["range-value"]=wp.customize.Control.extend({ready:function(){jQuery.fn.exists=function(){return 0<this.length};var e=this,t=jQuery("#customize-theme-controls");function r(e,t,n){switch(n){case"slider":var r=e.val(),o=jQuery(t).attr("type");t.val(r="text"===o&&0<=r?"+"+r:r);break;case"input":e.val(t.val())}}function i(e){var t=e.find(".range-collector"),e=function(e){var t,n,r,o={},i=e.find('.range-slider__range[data-query="desktop"]'),c=e.find('.range-slider__range[data-query="tablet"]'),e=e.find('.range-slider__range[data-query="mobile"]');e.exists()&&"undefined"!==(r=e.val())&&""!==r&&(o.mobile=r);c.exists()&&"undefined"!==(n=c.val())&&""!==n&&(o.tablet=n);i.exists()&&"undefined"!==(t=i.val())&&""!==t&&(o.desktop=t);return o}(e);1<Object.keys(e).length?t.val(JSON.stringify(e)):t.val(e.desktop),t.trigger("change")}t.on("input",".range-slider__range",function(){var e=jQuery(this),t=jQuery(this).next(),n=jQuery(this).parent().parent();r(e,t,"slider"),i(n)}),t.on("keyup change input",".range-slider-value",function(){var e=jQuery(this).parent().parent();r(jQuery(this).prev(),jQuery(this),"input"),i(e)}),t.on("blur",".range-slider-value",function(){var e=jQuery(this).prev(),t=parseInt(e.attr("min")),n=parseInt(e.attr("max")),r=jQuery(this),e=parseInt(jQuery(this).val());return e<t?(r.val(t),!1):n<e?(r.val(n),!1):void 0}),t.on("click",".range-reset-slider",function(e){e.preventDefault();var t=jQuery(this).prev(),n=t.prev(),r=jQuery(this).parent().parent(),o=n.data("default"),e=jQuery(t).attr("type");t.val(o="text"===e?"+0":o),n.val(o),i(r)}),t="postMessage"===e.setting.transport?"mousemove change":"change",this.container.on(t,".range-collector",function(){e.setting.set(jQuery(this).val())})}}),wp.customize.controlConstructor["responsive-number"]=wp.customize.Control.extend({ready:function(){var e=this;this.container.on("change keyup paste input","input.responsive-number--input, select.responsive-number--select",function(){e.updateValue()}),this.container.on("click touchstart",".reset-number-input",function(){e.resetValues()})},resetValues:function(){this.container.find(".responsive-number--input").each(function(){jQuery(this).val(jQuery(this).data("default"))}),this.container.find(".responsive-number--select").each(function(){jQuery(this).find("option").removeAttr("selected"),jQuery(this).find("option[value="+jQuery(this).data("default")+"]").attr("selected","selected")}),this.updateValue()},updateValue:function(){var r={suffix:{}};this.container.find(".control-wrap").each(function(){var e=jQuery(this).find("input").val(),t=jQuery(this).find("select").val(),n=jQuery(this).find("input").data("query");r[n]=e,void 0!==t&&(r.suffix[n]=t)}),jQuery(this).find(".responsive-number-collector").val(JSON.stringify(r)),this.setting.set(JSON.stringify(r))}}),jQuery(document).ready(function(c){c.responsiveSwitchers={init:function(){this.manageSwitchers(),this.manageWPDevices()},manageSwitchers:function(){jQuery(".customize-control .responsive-switchers button").on("click",function(e){var t=c(this),n=c(".responsive-switchers"),r=c(e.currentTarget).data("device"),o=c(".customize-control .has-media-queries"),i=c(".wp-full-overlay"),e=c(".wp-full-overlay-footer .devices");n.find("button").removeClass("active"),n.find("button.preview-"+r).addClass("active"),o.find(".control-wrap").removeClass("active"),o.find(".control-wrap."+r).addClass("active"),i.removeClass("preview-desktop preview-tablet preview-mobile").addClass("preview-"+r),e.find("button").removeClass("active").attr("aria-pressed","false"),e.find("button.preview-"+r).addClass("active").attr("aria-pressed","true"),t.hasClass("preview-desktop")&&n.toggleClass("responsive-switchers-open")})},manageWPDevices:function(){jQuery("#customize-footer-actions .devices button").on("click",function(e){e.preventDefault();var t=jQuery(this).data("device"),e=jQuery(".responsive-switchers");"desktop"!==t?e.addClass("responsive-switchers-open"):e.removeClass("responsive-switchers-open"),e.find("button").removeClass("active"),e.find("button.preview-"+t).addClass("active");e=jQuery(".range-slider.has-media-queries");e.find(".desktop-range").removeClass("active"),e.find(".tablet-range").removeClass("active"),e.find(".mobile-range").removeClass("active"),e.find("."+t+"-range").addClass("active"),e.find(".control-wrap").removeClass("active"),e.find(".control-wrap."+t).addClass("active")})}},c.responsiveSwitchers.init()});function rt(e,t){return RegExp(e,t)}var e={UNSUPPORTED_Y:i(function(){var e=rt("a","y");return e.lastIndex=2,null!=e.exec("abcd")}),BROKEN_CARET:i(function(){var e=rt("^r","gy");return e.lastIndex=2,null!=e.exec("str")})},ot=RegExp.prototype.exec,it=String.prototype.replace,y=ot,ct=(m=/a/,Ne=/b*/g,ot.call(m,"a"),ot.call(Ne,"a"),0!==m.lastIndex||0!==Ne.lastIndex),ut=e.UNSUPPORTED_Y||e.BROKEN_CARET,at=void 0!==/()??/.exec("")[1],st=y=ct||at||ut?function(e){var t,n,r,o,i=this,c=ut&&i.sticky,u=function(){var e=v(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}.call(i),a=i.source,s=0,l=e;return c&&(-1===(u=u.replace("y","")).indexOf("g")&&(u+="g"),l=String(e).slice(i.lastIndex),0<i.lastIndex&&(!i.multiline||i.multiline&&"\n"!==e[i.lastIndex-1])&&(a="(?: "+a+")",l=" "+l,s++),n=new RegExp("^(?:"+a+")",u)),at&&(n=new RegExp("^"+a+"$(?!\\s)",u)),ct&&(t=i.lastIndex),r=ot.call(c?n:i,l),c?r?(r.input=r.input.slice(s),r[0]=r[0].slice(s),r.index=i.lastIndex,i.lastIndex+=r[0].length):i.lastIndex=0:ct&&r&&(i.lastIndex=i.global?r.index+r[0].length:t),at&&r&&1<r.length&&it.call(r[0],n,function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)}),r}:y;w({target:"RegExp",proto:!0,forced:/./.exec!==st},{exec:st});var lt,ft,pt,dt,vt,ht,yt,gt,mt,wt=_e("species"),bt=!i(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),jt="$0"==="a".replace(/./,"$0"),y=_e("replace"),xt=!!/./[y]&&""===/./[y]("a","$0"),Ct=!i(function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};e="ab".split(e);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}),Ot=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t};ft=1,pt=function(r,o,i){return[function(e){var t=a(this),n=null==e?void 0:e[r];return void 0!==n?n.call(e,t):new RegExp(e)[r](String(t))},function(e){var t=i(o,e,this);if(t.done)return t.value;var n=v(e),t=String(this),e=n.lastIndex;Ot(e,0)||(n.lastIndex=0);t=function(e,t){var n=e.exec;if("function"==typeof n){n=n.call(e,t);if("object"!=typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==u(e))throw TypeError("RegExp#exec called on incompatible receiver");return st.call(e,t)}(n,t);return Ot(n.lastIndex,e)||(n.lastIndex=e),null===t?-1:t.index}]},yt=_e(lt="search"),gt=!i(function(){var e={};return e[yt]=function(){return 7},7!=""[lt](e)}),mt=gt&&!i(function(){var e=!1,t=/a/;return"split"===lt&&((t={constructor:{}}).constructor[wt]=function(){return t},t.flags="",t[yt]=/./[yt]),t.exec=function(){return e=!0,null},t[yt](""),!e}),gt&&mt&&("replace"!==lt||bt&&jt&&!xt)&&("split"!==lt||Ct)||(vt=/./[yt],pt=(mt=pt(yt,""[lt],function(e,t,n,r,o){return t.exec===st?gt&&!o?{done:!0,value:vt.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}},{REPLACE_KEEPS_$0:jt,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:xt}))[0],ht=mt[1],ue(String.prototype,lt,pt),ue(RegExp.prototype,yt,2==ft?function(e,t){return ht.call(e,this,t)}:function(e){return ht.call(e,this)})),dt&&A(RegExp.prototype[yt],"sham",!0);function Et(e,t,n){(t=f(t))in e?T.f(e,t,c(0,n)):e[t]=n}var zt=_e("isConcatSpreadable"),St=9007199254740991,Qt="Maximum allowed index exceeded",y=51<=Pe||!i(function(){var e=[];return e[zt]=!1,e.concat()[0]!==e}),P=P("concat");w({target:"Array",proto:!0,forced:!y||!P},{concat:function(e){for(var t,n,r,o=oe(this),i=ke(o,0),c=0,u=-1,a=arguments.length;u<a;u++)if(function(e){if(!l(e))return!1;var t=e[zt];return void 0!==t?!!t:Se(e)}(r=-1===u?o:arguments[u])){if(n=te(r.length),St<c+n)throw TypeError(Qt);for(t=0;t<n;t++,c++)t in r&&Et(i,c,r[t])}else{if(St<=c)throw TypeError(Qt);Et(i,c++,r)}return i.length=c,i}}),wp.customize.controlConstructor["interface-tabs"]=wp.customize.Control.extend({ready:function(){wp.customize.previewer.bind("tab-previewer-edit",function(e){jQuery(e.selector).trigger("click")}),wp.customize.previewer.bind("focus-control",function(e){setTimeout(function(){void 0!==wp.customize.control(e)&&wp.customize.control(e).focus()},100)}),wp.customize.previewer.bind("focus-section",function(e){setTimeout(function(){wp.customize.section(e).focus()},100)}),wp.customize.previewer.bind("ready",function(){for(var e=window.location.search.substr(1).split("&"),t={},n=0;n<e.length;n++){var r=e[n].split("=");t[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}void 0!==t["autofocus[control]"]&&""!==t["autofocus[control]"]&&jQuery('li[id^="customize-control-sidebars_widgets"]').on("DOMNodeInserted",function(){jQuery(".neve-customizer-tab > label."+t["autofocus[control]"]).trigger("click")})});var e=this;wp.customize.bind("ready",function(){e.init(),e.handleClick()})},init:function(){var e=this,t=e.section();e.hideAllControls(t);var n,r,o=e.params.controls.general?"general":e.params.controls.layout?"layout":e.params.controls.style?"style":Object.keys(e.params.controls)[0],i=e.params.controls[o],c=[];for(n in i)i.hasOwnProperty(n)&&(!1===jQuery.isEmptyObject(i[n])&&void 0!==wp.customize.control(n)&&(r=wp.customize.control(n).setting._value,c=c.concat(i[n][r])),c.push(n));e.showControls(c,t)},hideAllControls:function(e){var t,n=wp.customize.section(e).controls(),r=this.id;for(t in n){var o,i=n[t].id;"widgets"===i?(o=wp.customize.section(e).container,jQuery(o).children('li[class*="widget"]').css("display","none")):i!==r&&(i=wp.customize.control(i).selector,jQuery(i).hide())}},handleClick:function(){var i=this,c=i.section(),e=i.container;jQuery(e).find(".neve-customizer-tab").on("click",function(){jQuery(this).parent().find(".neve-customizer-tab").removeClass("active"),jQuery(this).addClass("active"),i.hideAllControls(c);var e,t,n=jQuery(this).data("tab"),r=i.params.controls[n],o=[];for(e in r)!1===jQuery.isEmptyObject(r[e])&&void 0!==wp.customize.control(e)&&(t=wp.customize.control(e).setting._value,o=o.concat(r[e][t])),o.push(e);i.showControls(o,c)})},showControls:function(e,t){for(var n in e){var r,n=e[n];"widgets"===n||-1!==n.indexOf("sidebars_widgets")?(r=wp.customize.section(t).container,jQuery(r).children('li[class*="widget"]').css("display","list-item")):void 0!==wp.customize.control(n)&&(r=wp.customize.control(n).selector,jQuery(r).show()),void 0!==wp.customize.control(n)&&(!0===wp.customize.control(n).active()?jQuery(wp.customize.control(n).selector).show():jQuery(wp.customize.control(n).selector).hide())}}}),wp.customize.sectionConstructor.typography_extra_section=wp.customize.Section.extend({attachEvents:function(){return null},isContextuallyActive:function(){return!0}}),wp.customize.bind("ready",function(){var e,t;"undefined"!=typeof upsellConfig&&(e='<div class="nv-upsell"><div class="nv-upsell-content">'+upsellConfig.text+'</div><a rel="external noreferrer noopener" target="_blank" href="'+upsellConfig.button_url+'" class="button button-primary">'+upsellConfig.button_text+'<span class="components-visually-hidden">'+upsellConfig.screen_reader+"</span></a></div>",(t=document.createElement("li")).innerHTML=e,document.getElementById("sub-accordion-panel-hfg_header").appendChild(t))}),wp.customize.sectionConstructor.nv_simple_upsell_section=wp.customize.Section.extend({attachEvents:function(){},isContextuallyActive:function(){return!0}})}();
