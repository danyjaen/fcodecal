webpackJsonp([1],{"+h1B":function(l,n,u){"use strict";var t=u("/oeL"),o=u("aR8+"),c=u("wQAS"),i=u("q4dy"),r=u("qbdv"),a=u("fc+i");u.d(n,"a",function(){return s});var s=t.b(o.a,[c.a],function(l){return t.c([t.d(512,t.e,t.f,[[8,[i.a]],[3,t.e],t.g]),t.d(5120,t.h,t.i,[[3,t.h]]),t.d(4608,r.a,r.b,[t.h]),t.d(4608,t.j,t.j,[]),t.d(5120,t.k,t.l,[]),t.d(5120,t.m,t.n,[]),t.d(5120,t.o,t.p,[]),t.d(4608,a.b,a.c,[r.c]),t.d(6144,t.q,null,[a.b]),t.d(4608,a.d,a.e,[]),t.d(5120,a.f,function(l,n,u,t){return[new a.g(l),new a.h(n),new a.i(u,t)]},[r.c,r.c,r.c,a.d]),t.d(4608,a.j,a.j,[a.f,t.r]),t.d(135680,a.k,a.k,[r.c]),t.d(4608,a.l,a.l,[a.j,a.k]),t.d(6144,t.s,null,[a.l]),t.d(6144,a.m,null,[a.k]),t.d(4608,t.t,t.t,[t.r]),t.d(4608,a.n,a.n,[r.c]),t.d(4608,a.o,a.o,[r.c]),t.d(512,r.d,r.d,[]),t.d(1024,t.u,a.p,[]),t.d(1024,t.v,function(l,n){return[a.q(l,n)]},[[2,a.r],[2,t.w]]),t.d(512,t.x,t.x,[[2,t.v]]),t.d(131584,t.y,t.y,[t.r,t.z,t.A,t.u,t.e,t.x]),t.d(2048,t.B,null,[t.y]),t.d(512,t.C,t.C,[t.B]),t.d(512,a.s,a.s,[[3,a.s]]),t.d(512,o.a,o.a,[])])})},0:function(l,n,u){l.exports=u("cDNt")},FZZL:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){this.numtemp="",this.funcionTemp="",this.funcion="",this.resultado=0,this.resultFlag=!0,this.operatorFlag=!1,this.puntoFlag=!1,this.value=""}return l.prototype.ngOnInit=function(){},l.prototype.botonNum=function(l){this.resultFlag=!1,this.numtemp=this.numtemp+l,this.operatorFlag=!1,console.log(this.numtemp),this.numtemp.length>23&&(this.botonAC(),alert("Te has pasado de números chaval!!!!"))},l.prototype.botonigual=function(){if(this.resultFlag=!0,this.operatorFlag=!1,this.puntoFlag=!1,this.funcion)this.funcion=this.funcion+this.numtemp,this.numtemp="",this.resultado=math.round(math.eval(this.funcion),6);else if(this.numtemp){var l=0;l=math.eval(this.numtemp),this.numtemp="",this.resultado=l}this.funcion=""},l.prototype.botonOperador=function(l){if(this.resultFlag=!1,this.puntoFlag=!1,this.operatorFlag){var n=this.funcion.split("");n.pop(),this.funcion=n.join(""),this.funcion=this.funcion+l}else this.numtemp?this.funcion=this.funcion+this.numtemp:this.resultado?this.funcion=this.funcion+String(this.resultado):this.funcion+="0",this.funcion=this.funcion+l,this.numtemp="";this.operatorFlag=!0,console.log(this.funcion.length)},l.prototype.botonPunto=function(){this.resultFlag=!1,this.operatorFlag=!1,this.numtemp||(this.numtemp+="0"),this.numtemp+=".",this.puntoFlag=!0},l.prototype.botonAC=function(){this.resultFlag=!0,this.operatorFlag=!1,this.puntoFlag=!1,this.resultado=0,this.numtemp="",this.funcion=""},l.prototype.botonCE=function(){this.numtemp=""},l.ctorParameters=function(){return[]},l}()},NhKt:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=[""]},"aR8+":function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){}return l}()},cDNt:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=u("/oeL"),o=u("p5Ee"),c=u("+h1B"),i=u("fc+i");o.a.production&&u.i(t.a)(),u.i(i.a)().bootstrapModuleFactory(c.a)},gHH2:function(l,n,u){"use strict";function t(l){return a._12(0,[(l()(),a._13(0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),a._15(null,["",""]))],null,function(l,n){l(n,1,0,n.component.funcion)})}function o(l){return a._12(0,[(l()(),a._13(0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),a._15(null,["Función muy larga. No se muestra"]))],null,null)}function c(l){return a._12(0,[(l()(),a._13(0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),a._15(null,["",""]))],null,function(l,n){l(n,1,0,n.component.resultado)})}function i(l){return a._12(0,[(l()(),a._13(0,null,null,171,"div",[["class","container-fluid main-container text-center"]],null,null,null,null,null)),(l()(),a._15(null,["\n  "])),(l()(),a._13(0,null,null,3,"h1",[],null,null,null,null,null)),(l()(),a._15(null,["Calculator APP "])),(l()(),a._13(0,null,null,1,"small",[],null,null,null,null,null)),(l()(),a._15(null,["FreecodeCamp Challenge"])),(l()(),a._15(null,["\n\n  "])),(l()(),a._13(0,null,null,163,"div",[["class","container carcasa text-center main-container"]],null,null,null,null,null)),(l()(),a._15(null,["\n    "])),(l()(),a._13(0,null,null,3,"h3",[],null,null,null,null,null)),(l()(),a._15(null,["KASHIO "])),(l()(),a._13(0,null,null,1,"small",[],null,null,null,null,null)),(l()(),a._15(null,["ALMUSPROOF"])),(l()(),a._15(null,["\n\n    "])),(l()(),a._13(0,null,null,18,"div",[["class","container pantalla text-right"]],null,null,null,null,null)),(l()(),a._15(null,["\n      "])),(l()(),a._13(0,null,null,15,"div",[["class","row"]],null,null,null,null,null)),(l()(),a._15(null,["\n        "])),(l()(),a._13(0,null,null,12,"div",[["class","col-md-12 text-right"]],null,null,null,null,null)),(l()(),a._15(null,["\n          "])),(l()(),a._17(16777216,null,null,1,null,t)),a._14(16384,null,0,s.h,[a._2,a._3],{ngIf:[0,"ngIf"]},null),(l()(),a._17(16777216,null,null,1,null,o)),a._14(16384,null,0,s.h,[a._2,a._3],{ngIf:[0,"ngIf"]},null),(l()(),a._15(null,["\n\n\n          "])),(l()(),a._13(0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),a._15(null,["",""])),(l()(),a._15(null,["\n          "])),(l()(),a._17(16777216,null,null,1,null,c)),a._14(16384,null,0,s.h,[a._2,a._3],{ngIf:[0,"ngIf"]},null),(l()(),a._15(null,["\n        "])),(l()(),a._15(null,["\n    "])),(l()(),a._15(null,["\n          "])),(l()(),a._15(null,["\n\n    "])),(l()(),a._13(0,null,null,135,"div",[["class","container"]],null,null,null,null,null)),(l()(),a._15(null,["\n\n        "])),(l()(),a._13(0,null,null,25,"div",[["class","row  fila-calc"]],null,null,null,null,null)),(l()(),a._15(null,["\n          "])),(l()(),a._13(0,null,null,4,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),a._15(null,["\n            "])),(l()(),a._13(0,null,null,1,"button",[["class","btn btn-primary btn-sm btn-block"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0,o=l.component;if("click"===n){t=!1!==o.botonAC()&&t}return t},null,null)),(l()(),a._15(null,["AC"])),(l()(),a._15(null,["\n          "])),(l()(),a._15(null,["\n          "])),(l()(),a._13(0,null,null,4,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),a._15(null,["\n            "])),(l()(),a._13(0,null,null,1,"button",[["class","btn btn-primary btn-sm btn-block"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0,o=l.component;if("click"===n){t=!1!==o.botonCE()&&t}return t},null,null)),(l()(),a._15(null,["CE"])),(l()(),a._15(null,["\n          "])),(l()(),a._15(null,["\n          "])),(l()(),a._13(0,null,null,4,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),a._15(null,["\n            "])),(l()(),a._13(0,null,null,1,"button",[["class","btn btn-primary btn-sm btn-block"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0,o=l.component;if("click"===n){t=!1!==o.botonOperador("/")&&t}return t},null,null)),(l()(),a._15(null,["/"])),(l()(),a._15(null,["\n          "])),(l()(),a._15(null,["\n          "])),(l()(),a._13(0,null,null,4,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),a._15(null,["\n            "])),(l()(),a._13(0,null,null,1,"button",[["class","btn btn-primary btn-sm btn-block"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0,o=l.component;if("click"===n){t=!1!==o.botonOperador("*")&&t}return t},null,null)),(l()(),a._15(null,["X"])),(l()(),a._15(null,["\n          "])),(l()(),a._15(null,["\n        "])),(l()(),a._15(null,["\n\n        "])),(l()(),a._13(0,null,null,25,"div",[["class","row fila-calc"]],null,null,null,null,null)),(l()(),a._15(null,["\n          "])),(l()(),a._13(0,null,null,4,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),a._15(null,["\n            "])),(l()(),a._13(0,null,null,1,"button",[["class","btn btn-primary btn-sm btn-block"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0,o=l.component;if("click"===n){t=!1!==o.botonNum("7")&&t}return t},null,null)),(l()(),a._15(null,["7"])),(l()(),a._15(null,["\n          "])),(l()(),a._15(null,["\n          "])),(l()(),a._13(0,null,null,4,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),a._15(null,["\n            "])),(l()(),a._13(0,null,null,1,"button",[["class","btn btn-primary btn-sm btn-block"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0,o=l.component;if("click"===n){t=!1!==o.botonNum("8")&&t}return t},null,null)),(l()(),a._15(null,["8"])),(l()(),a._15(null,["\n          "])),(l()(),a._15(null,["\n          "])),(l()(),a._13(0,null,null,4,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),a._15(null,["\n            "])),(l()(),a._13(0,null,null,1,"button",[["class","btn btn-primary btn-sm btn-block"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0,o=l.component;if("click"===n){t=!1!==o.botonNum("9")&&t}return t},null,null)),(l()(),a._15(null,["9"])),(l()(),a._15(null,["\n          "])),(l()(),a._15(null,["\n          "])),(l()(),a._13(0,null,null,4,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),a._15(null,["\n            "])),(l()(),a._13(0,null,null,1,"button",[["class","btn btn-primary btn-sm btn-block"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0,o=l.component;if("click"===n){t=!1!==o.botonOperador("-")&&t}return t},null,null)),(l()(),a._15(null,["-"])),(l()(),a._15(null,["\n          "])),(l()(),a._15(null,["\n        "])),(l()(),a._15(null,["\n\n        "])),(l()(),a._13(0,null,null,25,"div",[["class","row fila-calc"]],null,null,null,null,null)),(l()(),a._15(null,["\n          "])),(l()(),a._13(0,null,null,4,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),a._15(null,["\n            "])),(l()(),a._13(0,null,null,1,"button",[["class","btn btn-primary btn-sm btn-block"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0,o=l.component;if("click"===n){t=!1!==o.botonNum("4")&&t}return t},null,null)),(l()(),a._15(null,["4"])),(l()(),a._15(null,["\n          "])),(l()(),a._15(null,["\n          "])),(l()(),a._13(0,null,null,4,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),a._15(null,["\n            "])),(l()(),a._13(0,null,null,1,"button",[["class","btn btn-primary btn-sm btn-block"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0,o=l.component;if("click"===n){t=!1!==o.botonNum("5")&&t}return t},null,null)),(l()(),a._15(null,["5"])),(l()(),a._15(null,["\n          "])),(l()(),a._15(null,["\n          "])),(l()(),a._13(0,null,null,4,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),a._15(null,["\n            "])),(l()(),a._13(0,null,null,1,"button",[["class","btn btn-primary btn-sm btn-block"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0,o=l.component;if("click"===n){t=!1!==o.botonNum("6")&&t}return t},null,null)),(l()(),a._15(null,["6"])),(l()(),a._15(null,["\n          "])),(l()(),a._15(null,["\n          "])),(l()(),a._13(0,null,null,4,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),a._15(null,["\n            "])),(l()(),a._13(0,null,null,1,"button",[["class","btn btn-primary btn-sm btn-block"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0,o=l.component;if("click"===n){t=!1!==o.botonOperador("+")&&t}return t},null,null)),(l()(),a._15(null,["+"])),(l()(),a._15(null,["\n          "])),(l()(),a._15(null,["\n        "])),(l()(),a._15(null,["\n\n        "])),(l()(),a._13(0,null,null,51,"div",[["class","row fila-calc"]],null,null,null,null,null)),(l()(),a._15(null,["\n          "])),(l()(),a._13(0,null,null,37,"div",[["class","col-md-9"]],null,null,null,null,null)),(l()(),a._15(null,["\n            "])),(l()(),a._13(0,null,null,19,"div",[["class","row"]],null,null,null,null,null)),(l()(),a._15(null,["\n\n              "])),(l()(),a._13(0,null,null,4,"div",[["class","col-md-4"]],null,null,null,null,null)),(l()(),a._15(null,["\n                "])),(l()(),a._13(0,null,null,1,"button",[["class","btn btn-primary btn-sm btn-block"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0,o=l.component;if("click"===n){t=!1!==o.botonNum("1")&&t}return t},null,null)),(l()(),a._15(null,["1"])),(l()(),a._15(null,["\n              "])),(l()(),a._15(null,["\n\n              "])),(l()(),a._13(0,null,null,4,"div",[["class","col-md-4"]],null,null,null,null,null)),(l()(),a._15(null,["\n                "])),(l()(),a._13(0,null,null,1,"button",[["class","btn btn-primary btn-sm btn-block"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0,o=l.component;if("click"===n){t=!1!==o.botonNum("2")&&t}return t},null,null)),(l()(),a._15(null,["2"])),(l()(),a._15(null,["\n              "])),(l()(),a._15(null,["\n\n              "])),(l()(),a._13(0,null,null,4,"div",[["class","col-md-4"]],null,null,null,null,null)),(l()(),a._15(null,["\n                "])),(l()(),a._13(0,null,null,1,"button",[["class","btn btn-primary btn-sm btn-block"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0,o=l.component;if("click"===n){t=!1!==o.botonNum("3")&&t}return t},null,null)),(l()(),a._15(null,["3"])),(l()(),a._15(null,["\n              "])),(l()(),a._15(null,["\n\n\n            "])),(l()(),a._15(null,["\n            "])),(l()(),a._13(0,null,null,13,"div",[["class","row fila-calc"]],null,null,null,null,null)),(l()(),a._15(null,["\n              "])),(l()(),a._13(0,null,null,4,"div",[["class","col-md-8"]],null,null,null,null,null)),(l()(),a._15(null,["\n                "])),(l()(),a._13(0,null,null,1,"button",[["class","btn btn-primary btn-sm btn-block"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0,o=l.component;if("click"===n){t=!1!==o.botonNum("0")&&t}return t},null,null)),(l()(),a._15(null,["0"])),(l()(),a._15(null,["\n              "])),(l()(),a._15(null,["\n              "])),(l()(),a._13(0,null,null,4,"div",[["class","col-md-4"]],null,null,null,null,null)),(l()(),a._15(null,["\n                "])),(l()(),a._13(0,null,null,1,"button",[["class","btn btn-primary btn-sm btn-block"],["type","button"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,u){var t=!0,o=l.component;if("click"===n){t=!1!==o.botonPunto()&&t}return t},null,null)),(l()(),a._15(null,["."])),(l()(),a._15(null,["\n              "])),(l()(),a._15(null,["\n\n            "])),(l()(),a._15(null,["\n          "])),(l()(),a._15(null,["\n          "])),(l()(),a._13(0,null,null,9,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),a._15(null,["\n            "])),(l()(),a._13(0,null,null,1,"button",[["class","btn btn-primary btn-sm btn-block btn-igual"],["type","button"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,u){var t=!0,o=l.component;if("click"===n){t=!1!==o.botonigual()&&t}return t},null,null)),(l()(),a._15(null,["="])),(l()(),a._15(null,["\n            "])),(l()(),a._13(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a._13(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a._13(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a._13(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a._15(null,["\n          "])),(l()(),a._15(null,["\n\n          "])),(l()(),a._15(null,["\n\n        "])),(l()(),a._15(null,["\n\n\n  "])),(l()(),a._15(null,["\n"])),(l()(),a._15(null,["\n"])),(l()(),a._13(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a._13(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a._13(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a._15(null,["\n"])),(l()(),a._13(0,null,null,7,"footer",[["class","text-center"],["id","footer"]],null,null,null,null,null)),(l()(),a._15(null,["\n  "])),(l()(),a._13(0,null,null,4,"div",[["class","container"]],null,null,null,null,null)),(l()(),a._15(null,["\n    Designed & Coded by\n    "])),(l()(),a._13(0,null,null,1,"a",[["href","https://www.freecodecamp.org/danyjaen"],["target","_blank"]],null,null,null,null,null)),(l()(),a._15(null,["\n        Daniel Lopez"])),(l()(),a._15(null,["\n  "])),(l()(),a._15(null,["\n"])),(l()(),a._15(null,["\n"]))],function(l,n){var u=n.component;l(n,21,0,u.funcion.length<36),l(n,23,0,u.funcion.length>36),l(n,29,0,u.resultFlag)},function(l,n){var u=n.component;l(n,26,0,u.numtemp),l(n,152,0,u.puntoFlag),l(n,160,0,u.operatorFlag)})}function r(l){return a._12(0,[(l()(),a._13(0,null,null,1,"app-calcu",[],null,null,null,i,b)),a._14(114688,null,0,e.a,[],null,null)],function(l,n){l(n,1,0)},null)}var a=u("/oeL"),s=u("qbdv"),e=u("FZZL");u.d(n,"b",function(){return b}),n.a=i;var _=[],b=a._11({encapsulation:2,styles:_,data:{}});a._16("app-calcu",e.a,r,{},{},[])},p5Ee:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t={production:!0}},q4dy:function(l,n,u){"use strict";function t(l){return i._12(0,[(l()(),i._13(0,null,null,1,"app-calcu",[],null,null,null,r.a,r.b)),i._14(114688,null,0,a.a,[],null,null),(l()(),i._15(null,["\n"]))],function(l,n){l(n,1,0)},null)}function o(l){return i._12(0,[(l()(),i._13(0,null,null,1,"app-root",[],null,null,null,t,_)),i._14(49152,null,0,s.a,[],null,null)],null,null)}var c=u("NhKt"),i=u("/oeL"),r=u("gHH2"),a=u("FZZL"),s=u("wQAS");u.d(n,"a",function(){return b});var e=[c.a],_=i._11({encapsulation:0,styles:e,data:{}}),b=i._16("app-root",s.a,o,{},{},[])},qtrl:function(l,n){function u(l){throw new Error("Cannot find module '"+l+"'.")}u.keys=function(){return[]},u.resolve=u,l.exports=u,u.id="qtrl"},wQAS:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){this.title="app",this.daniel="prueba"}return l}()}},[0]);