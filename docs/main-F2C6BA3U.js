import{a as S}from"./chunk-OMCN3JG2.js";import{b as D,e as M,f as N}from"./chunk-EPZTAGYJ.js";import{b as R,c as F,d as I,e as P}from"./chunk-HM65A5PA.js";import{$ as h,$a as f,Ib as C,Ja as u,Z as d,Za as g,ac as b,bb as y,db as v,eb as A,fa as p,ja as c,ma as m,xc as w}from"./chunk-COR7V3X2.js";var _="@",V=(()=>{let e=class e{constructor(r,i,n,s,a){this.doc=r,this.delegate=i,this.zone=n,this.animationType=s,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=p(f,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-VQN5XI7C.js").then(i=>i)).catch(i=>{throw new d(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:n})=>{this._engine=i(this.animationType,this.doc);let s=new n(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(r,i){let n=this.delegate.createRenderer(r,i);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let s=new l(n);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let O=a.createRenderer(r,i);s.use(O),this.scheduler?.notify(9)}).catch(a=>{s.use(n)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(i){g()},e.\u0275prov=h({token:e,factory:e.\u0275fac});let o=e;return o})(),l=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,r,i){this.delegate.insertBefore(e,t,r,i)}removeChild(e,t,r){this.delegate.removeChild(e,t,r)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,r,i){this.delegate.setAttribute(e,t,r,i)}removeAttribute(e,t,r){this.delegate.removeAttribute(e,t,r)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,r,i){this.delegate.setStyle(e,t,r,i)}removeStyle(e,t,r){this.delegate.removeStyle(e,t,r)}setProperty(e,t,r){this.shouldReplay(t)&&this.replay.push(i=>i.setProperty(e,t,r)),this.delegate.setProperty(e,t,r)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,r){return this.shouldReplay(t)&&this.replay.push(i=>i.listen(e,t,r)),this.delegate.listen(e,t,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(_)}};function E(o="animations"){return v("NgAsyncAnimations"),m([{provide:y,useFactory:(e,t,r)=>new V(e,t,r,o),deps:[w,I,A]},{provide:u,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var T={providers:[M(S,N({skipInitialTransition:!0})),R(F()),E()]};var x=(()=>{let e=class e{constructor(){this.title="my-dashboard"}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["app-root"]],standalone:!0,features:[b],decls:1,vars:0,template:function(i,n){i&1&&C(0,"router-outlet")},dependencies:[D]});let o=e;return o})();P(x,T).catch(o=>console.error(o));
