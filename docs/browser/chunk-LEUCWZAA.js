import{a as y}from"./chunk-PWLRZ2BP.js";import{$a as n,Ea as c,Ja as s,Pb as b,Ua as g,Va as f,Wa as x,Xa as h,Ya as u,Za as _,_ as w,_a as o,ab as F,bb as S,ib as l,jb as C,kb as v,mb as E,nb as k,pb as T,wa as a}from"./chunk-HSFLJV7L.js";var I=(e,t,d)=>({"bg-red-200":e,"bg-purple-200":t,"bg-blue-200":d});function $(e,t){e&1&&(o(0,"p"),l(1,"Hola Mundo"),n())}function A(e,t){e&1&&(o(0,"p"),l(1,"**********"),n())}function M(e,t){e&1&&(o(0,"p"),l(1,"Arriba de 90"),n())}function B(e,t){e&1&&(o(0,"p"),l(1,"Arriba de 80"),n())}function D(e,t){e&1&&(o(0,"p"),l(1,"Suspenso"),n())}function N(e,t){e&1&&(o(0,"p"),l(1,"No hay nota"),n())}function H(e,t){if(e&1&&(o(0,"li"),l(1),n()),e&2){let d=t.$implicit,p=t.$index,m=t.$count,i=t.$index,r=t.$count;g(T(5,I,i%2===0&&i!==0&&i!==r-1,i%2!==0&&i!==0&&i!==r-1,i===0||i===r-1)),a(),E("",p+1,"/",m," - ",d,"")}}function Q(e,t){if(e&1&&(o(0,"li"),l(1),n()),e&2){let d=t.$implicit;a(),C(d)}}function R(e,t){e&1&&(o(0,"li"),l(1,"No hay frameworks agregados"),n())}var J=(()=>{let t=class t{constructor(){this.showContent=c(!1),this.grade=c("A"),this.frameworks=c(["Angular","Vue","Svelte","Qwik","React"]),this.frameworks2=c([])}toggleContent(){this.showContent.update(p=>!p)}};t.\u0275fac=function(m){return new(m||t)},t.\u0275cmp=w({type:t,selectors:[["ng-component"]],standalone:!0,features:[k],decls:25,vars:5,consts:[["title","Control Flow","widthShadow",""],[1,"grid","grid-cols-1","md:grid-cols-2","gap-3"],[1,"bg-white","rounded","shadow","p-10"],[1,"text-2xl","font-bold","mb-5"],[1,"p-2","bg-blue-500","rounded","text-white",3,"click"],[1,"text-3xl"],[3,"class"]],template:function(m,i){if(m&1&&(F(0,"shared-title",0),o(1,"section",1)(2,"div",2)(3,"h2",3),l(4),n(),o(5,"button",4),S("click",function(){return i.toggleContent()}),l(6,"Click me!"),n(),s(7,$,2,0,"p")(8,A,2,0),n(),o(9,"div",2)(10,"h2",5),l(11),n(),s(12,M,2,0)(13,B,2,0)(14,D,2,0)(15,N,2,0),n(),o(16,"div",2)(17,"ul"),u(18,H,2,9,"li",6,h),n()(),o(20,"div",2)(21,"ul"),u(22,Q,2,1,"li",null,x,!1,R,2,0,"li"),n()()()),m&2){let r;a(4),v("if: ",i.showContent(),""),a(3),f(7,i.showContent()?7:8),a(4),C(i.grade()),a(),f(12,(r=i.grade())==="A"?12:r==="B"?13:r==="F"?14:15),a(6),_(i.frameworks()),a(4),_(i.frameworks2())}},dependencies:[b,y]});let e=t;return e})();export{J as default};
