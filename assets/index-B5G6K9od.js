const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SweetAlertDemo-IaexAzD5.js","assets/SweetAlertDemo-tn0RQdqM.css","assets/WeavingGrid-BIDb68ws.js","assets/WeavingGrid-3Jn-kFr_.css"])))=>i.map(i=>d[i]);
var Yd=t=>{throw TypeError(t)};var Xl=(t,e,n)=>e.has(t)||Yd("Cannot "+n);var de=(t,e,n)=>(Xl(t,e,"read from private field"),n?n.call(t):e.get(t)),rt=(t,e,n)=>e.has(t)?Yd("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),je=(t,e,n,i)=>(Xl(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n),Xt=(t,e,n)=>(Xl(t,e,"access private method"),n);var ua=(t,e,n,i)=>({set _(s){je(t,e,s,n)},get _(){return de(t,e,i)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ju(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const vt={},wr=[],ui=()=>{},B_=()=>!1,bl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Yu=t=>t.startsWith("onUpdate:"),en=Object.assign,Ku=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},k_=Object.prototype.hasOwnProperty,ht=(t,e)=>k_.call(t,e),Ve=Array.isArray,br=t=>Go(t)==="[object Map]",Qr=t=>Go(t)==="[object Set]",Kd=t=>Go(t)==="[object Date]",qe=t=>typeof t=="function",Ot=t=>typeof t=="string",hi=t=>typeof t=="symbol",bt=t=>t!==null&&typeof t=="object",yp=t=>(bt(t)||qe(t))&&qe(t.then)&&qe(t.catch),wp=Object.prototype.toString,Go=t=>wp.call(t),z_=t=>Go(t).slice(8,-1),bp=t=>Go(t)==="[object Object]",Zu=t=>Ot(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,xo=ju(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Sl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},H_=/-(\w)/g,Fn=Sl(t=>t.replace(H_,(e,n)=>n?n.toUpperCase():"")),V_=/\B([A-Z])/g,Ys=Sl(t=>t.replace(V_,"-$1").toLowerCase()),Ml=Sl(t=>t.charAt(0).toUpperCase()+t.slice(1)),$l=Sl(t=>t?`on${Ml(t)}`:""),ls=(t,e)=>!Object.is(t,e),za=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Sp=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},el=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Zd;const El=()=>Zd||(Zd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xn(t){if(Ve(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Ot(i)?$_(i):Xn(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Ot(t)||bt(t))return t}const G_=/;(?![^(]*\))/g,W_=/:([^]+)/,X_=/\/\*[^]*?\*\//g;function $_(t){const e={};return t.replace(X_,"").split(G_).forEach(n=>{if(n){const i=n.split(W_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function rs(t){let e="";if(Ot(t))e=t;else if(Ve(t))for(let n=0;n<t.length;n++){const i=rs(t[n]);i&&(e+=i+" ")}else if(bt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const q_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",j_=ju(q_);function Mp(t){return!!t||t===""}function Y_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Wo(t[i],e[i]);return n}function Wo(t,e){if(t===e)return!0;let n=Kd(t),i=Kd(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=hi(t),i=hi(e),n||i)return t===e;if(n=Ve(t),i=Ve(e),n||i)return n&&i?Y_(t,e):!1;if(n=bt(t),i=bt(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Wo(t[o],e[o]))return!1}}return String(t)===String(e)}function Qu(t,e){return t.findIndex(n=>Wo(n,e))}const Ep=t=>!!(t&&t.__v_isRef===!0),Bt=t=>Ot(t)?t:t==null?"":Ve(t)||bt(t)&&(t.toString===wp||!qe(t.toString))?Ep(t)?Bt(t.value):JSON.stringify(t,Tp,2):String(t),Tp=(t,e)=>Ep(e)?Tp(t,e.value):br(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[ql(i,r)+" =>"]=s,n),{})}:Qr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ql(n))}:hi(e)?ql(e):bt(e)&&!Ve(e)&&!bp(e)?String(e):e,ql=(t,e="")=>{var n;return hi(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Mn;class Ap{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Mn,!e&&Mn&&(this.index=(Mn.scopes||(Mn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Mn;try{return Mn=this,e()}finally{Mn=n}}}on(){Mn=this}off(){Mn=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function K_(t){return new Ap(t)}function Z_(){return Mn}let yt;const jl=new WeakSet;class Cp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Mn&&Mn.active&&Mn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,jl.has(this)&&(jl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Qd(this),Dp(this);const e=yt,n=Yn;yt=this,Yn=!0;try{return this.fn()}finally{Lp(this),yt=e,Yn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)td(e);this.deps=this.depsTail=void 0,Qd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?jl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Hc(this)&&this.run()}get dirty(){return Hc(this)}}let Rp=0,yo,wo;function Pp(t,e=!1){if(t.flags|=8,e){t.next=wo,wo=t;return}t.next=yo,yo=t}function Ju(){Rp++}function ed(){if(--Rp>0)return;if(wo){let e=wo;for(wo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;yo;){let e=yo;for(yo=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Dp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Lp(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),td(i),Q_(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function Hc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ip(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ip(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ao))return;t.globalVersion=Ao;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Hc(t)){t.flags&=-3;return}const n=yt,i=Yn;yt=t,Yn=!0;try{Dp(t);const s=t.fn(t._value);(e.version===0||ls(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{yt=n,Yn=i,Lp(t),t.flags&=-3}}function td(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)td(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Q_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Yn=!0;const Up=[];function ps(){Up.push(Yn),Yn=!1}function ms(){const t=Up.pop();Yn=t===void 0?!0:t}function Qd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=yt;yt=void 0;try{e()}finally{yt=n}}}let Ao=0;class J_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class nd{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!yt||!Yn||yt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==yt)n=this.activeLink=new J_(yt,this),yt.deps?(n.prevDep=yt.depsTail,yt.depsTail.nextDep=n,yt.depsTail=n):yt.deps=yt.depsTail=n,Op(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=yt.depsTail,n.nextDep=void 0,yt.depsTail.nextDep=n,yt.depsTail=n,yt.deps===n&&(yt.deps=i)}return n}trigger(e){this.version++,Ao++,this.notify(e)}notify(e){Ju();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ed()}}}function Op(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Op(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Vc=new WeakMap,Hs=Symbol(""),Gc=Symbol(""),Co=Symbol("");function Yt(t,e,n){if(Yn&&yt){let i=Vc.get(t);i||Vc.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new nd),s.map=i,s.key=n),s.track()}}function Di(t,e,n,i,s,r){const o=Vc.get(t);if(!o){Ao++;return}const a=l=>{l&&l.trigger()};if(Ju(),e==="clear")o.forEach(a);else{const l=Ve(t),c=l&&Zu(n);if(l&&n==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===Co||!hi(f)&&f>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Co)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Hs)),br(t)&&a(o.get(Gc)));break;case"delete":l||(a(o.get(Hs)),br(t)&&a(o.get(Gc)));break;case"set":br(t)&&a(o.get(Hs));break}}ed()}function er(t){const e=ft(t);return e===t?e:(Yt(e,"iterate",Co),Nn(t)?e:e.map(Kt))}function Tl(t){return Yt(t=ft(t),"iterate",Co),t}const ev={__proto__:null,[Symbol.iterator](){return Yl(this,Symbol.iterator,Kt)},concat(...t){return er(this).concat(...t.map(e=>Ve(e)?er(e):e))},entries(){return Yl(this,"entries",t=>(t[1]=Kt(t[1]),t))},every(t,e){return xi(this,"every",t,e,void 0,arguments)},filter(t,e){return xi(this,"filter",t,e,n=>n.map(Kt),arguments)},find(t,e){return xi(this,"find",t,e,Kt,arguments)},findIndex(t,e){return xi(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return xi(this,"findLast",t,e,Kt,arguments)},findLastIndex(t,e){return xi(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return xi(this,"forEach",t,e,void 0,arguments)},includes(...t){return Kl(this,"includes",t)},indexOf(...t){return Kl(this,"indexOf",t)},join(t){return er(this).join(t)},lastIndexOf(...t){return Kl(this,"lastIndexOf",t)},map(t,e){return xi(this,"map",t,e,void 0,arguments)},pop(){return oo(this,"pop")},push(...t){return oo(this,"push",t)},reduce(t,...e){return Jd(this,"reduce",t,e)},reduceRight(t,...e){return Jd(this,"reduceRight",t,e)},shift(){return oo(this,"shift")},some(t,e){return xi(this,"some",t,e,void 0,arguments)},splice(...t){return oo(this,"splice",t)},toReversed(){return er(this).toReversed()},toSorted(t){return er(this).toSorted(t)},toSpliced(...t){return er(this).toSpliced(...t)},unshift(...t){return oo(this,"unshift",t)},values(){return Yl(this,"values",Kt)}};function Yl(t,e,n){const i=Tl(t),s=i[e]();return i!==t&&!Nn(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=n(r.value)),r}),s}const tv=Array.prototype;function xi(t,e,n,i,s,r){const o=Tl(t),a=o!==t&&!Nn(t),l=o[e];if(l!==tv[e]){const d=l.apply(t,r);return a?Kt(d):d}let c=n;o!==t&&(a?c=function(d,f){return n.call(this,Kt(d),f,t)}:n.length>2&&(c=function(d,f){return n.call(this,d,f,t)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Jd(t,e,n,i){const s=Tl(t);let r=n;return s!==t&&(Nn(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,Kt(a),l,t)}),s[e](r,...i)}function Kl(t,e,n){const i=ft(t);Yt(i,"iterate",Co);const s=i[e](...n);return(s===-1||s===!1)&&rd(n[0])?(n[0]=ft(n[0]),i[e](...n)):s}function oo(t,e,n=[]){ps(),Ju();const i=ft(t)[e].apply(t,n);return ed(),ms(),i}const nv=ju("__proto__,__v_isRef,__isVue"),Np=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(hi));function iv(t){hi(t)||(t=String(t));const e=ft(this);return Yt(e,"has",t),e.hasOwnProperty(t)}class Fp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?hv:Hp:r?zp:kp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ve(e);if(!s){let l;if(o&&(l=ev[n]))return l;if(n==="hasOwnProperty")return iv}const a=Reflect.get(e,n,Gt(e)?e:i);return(hi(n)?Np.has(n):nv(n))||(s||Yt(e,"get",n),r)?a:Gt(a)?o&&Zu(n)?a:a.value:bt(a)?s?Gp(a):Xo(a):a}}class Bp extends Fp{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(!this._isShallow){const l=Gs(r);if(!Nn(i)&&!Gs(i)&&(r=ft(r),i=ft(i)),!Ve(e)&&Gt(r)&&!Gt(i))return l?!1:(r.value=i,!0)}const o=Ve(e)&&Zu(n)?Number(n)<e.length:ht(e,n),a=Reflect.set(e,n,i,Gt(e)?e:s);return e===ft(s)&&(o?ls(i,r)&&Di(e,"set",n,i):Di(e,"add",n,i)),a}deleteProperty(e,n){const i=ht(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Di(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!hi(n)||!Np.has(n))&&Yt(e,"has",n),i}ownKeys(e){return Yt(e,"iterate",Ve(e)?"length":Hs),Reflect.ownKeys(e)}}class sv extends Fp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const rv=new Bp,ov=new sv,av=new Bp(!0);const Wc=t=>t,da=t=>Reflect.getPrototypeOf(t);function lv(t,e,n){return function(...i){const s=this.__v_raw,r=ft(s),o=br(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?Wc:e?Xc:Kt;return!e&&Yt(r,"iterate",l?Gc:Hs),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function fa(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function cv(t,e){const n={get(s){const r=this.__v_raw,o=ft(r),a=ft(s);t||(ls(s,a)&&Yt(o,"get",s),Yt(o,"get",a));const{has:l}=da(o),c=e?Wc:t?Xc:Kt;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&Yt(ft(s),"iterate",Hs),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=ft(r),a=ft(s);return t||(ls(s,a)&&Yt(o,"has",s),Yt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ft(a),c=e?Wc:t?Xc:Kt;return!t&&Yt(l,"iterate",Hs),a.forEach((u,d)=>s.call(r,c(u),c(d),o))}};return en(n,t?{add:fa("add"),set:fa("set"),delete:fa("delete"),clear:fa("clear")}:{add(s){!e&&!Nn(s)&&!Gs(s)&&(s=ft(s));const r=ft(this);return da(r).has.call(r,s)||(r.add(s),Di(r,"add",s,s)),this},set(s,r){!e&&!Nn(r)&&!Gs(r)&&(r=ft(r));const o=ft(this),{has:a,get:l}=da(o);let c=a.call(o,s);c||(s=ft(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?ls(r,u)&&Di(o,"set",s,r):Di(o,"add",s,r),this},delete(s){const r=ft(this),{has:o,get:a}=da(r);let l=o.call(r,s);l||(s=ft(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Di(r,"delete",s,void 0),c},clear(){const s=ft(this),r=s.size!==0,o=s.clear();return r&&Di(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=lv(s,t,e)}),n}function id(t,e){const n=cv(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(ht(n,s)&&s in i?n:i,s,r)}const uv={get:id(!1,!1)},dv={get:id(!1,!0)},fv={get:id(!0,!1)};const kp=new WeakMap,zp=new WeakMap,Hp=new WeakMap,hv=new WeakMap;function pv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mv(t){return t.__v_skip||!Object.isExtensible(t)?0:pv(z_(t))}function Xo(t){return Gs(t)?t:sd(t,!1,rv,uv,kp)}function Vp(t){return sd(t,!1,av,dv,zp)}function Gp(t){return sd(t,!0,ov,fv,Hp)}function sd(t,e,n,i,s){if(!bt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=mv(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Sr(t){return Gs(t)?Sr(t.__v_raw):!!(t&&t.__v_isReactive)}function Gs(t){return!!(t&&t.__v_isReadonly)}function Nn(t){return!!(t&&t.__v_isShallow)}function rd(t){return t?!!t.__v_raw:!1}function ft(t){const e=t&&t.__v_raw;return e?ft(e):t}function Wp(t){return!ht(t,"__v_skip")&&Object.isExtensible(t)&&Sp(t,"__v_skip",!0),t}const Kt=t=>bt(t)?Xo(t):t,Xc=t=>bt(t)?Gp(t):t;function Gt(t){return t?t.__v_isRef===!0:!1}function ot(t){return Xp(t,!1)}function gv(t){return Xp(t,!0)}function Xp(t,e){return Gt(t)?t:new _v(t,e)}class _v{constructor(e,n){this.dep=new nd,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ft(e),this._value=n?e:Kt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Nn(e)||Gs(e);e=i?e:ft(e),ls(e,n)&&(this._rawValue=e,this._value=i?e:Kt(e),this.dep.trigger())}}function cs(t){return Gt(t)?t.value:t}const vv={get:(t,e,n)=>e==="__v_raw"?t:cs(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Gt(s)&&!Gt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function $p(t){return Sr(t)?t:new Proxy(t,vv)}class xv{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new nd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ao-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&yt!==this)return Pp(this,!0),!0}get value(){const e=this.dep.track();return Ip(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function yv(t,e,n=!1){let i,s;return qe(t)?i=t:(i=t.get,s=t.set),new xv(i,s,n)}const ha={},tl=new WeakMap;let Cs;function wv(t,e=!1,n=Cs){if(n){let i=tl.get(n);i||tl.set(n,i=[]),i.push(t)}}function bv(t,e,n=vt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=b=>s?b:Nn(b)||s===!1||s===0?Li(b,1):Li(b);let u,d,f,h,v=!1,x=!1;if(Gt(t)?(d=()=>t.value,v=Nn(t)):Sr(t)?(d=()=>c(t),v=!0):Ve(t)?(x=!0,v=t.some(b=>Sr(b)||Nn(b)),d=()=>t.map(b=>{if(Gt(b))return b.value;if(Sr(b))return c(b);if(qe(b))return l?l(b,2):b()})):qe(t)?e?d=l?()=>l(t,2):t:d=()=>{if(f){ps();try{f()}finally{ms()}}const b=Cs;Cs=u;try{return l?l(t,3,[h]):t(h)}finally{Cs=b}}:d=ui,e&&s){const b=d,D=s===!0?1/0:s;d=()=>Li(b(),D)}const m=Z_(),p=()=>{u.stop(),m&&m.active&&Ku(m.effects,u)};if(r&&e){const b=e;e=(...D)=>{b(...D),p()}}let A=x?new Array(t.length).fill(ha):ha;const E=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(e){const D=u.run();if(s||v||(x?D.some((C,O)=>ls(C,A[O])):ls(D,A))){f&&f();const C=Cs;Cs=u;try{const O=[D,A===ha?void 0:x&&A[0]===ha?[]:A,h];l?l(e,3,O):e(...O),A=D}finally{Cs=C}}}else u.run()};return a&&a(E),u=new Cp(d),u.scheduler=o?()=>o(E,!1):E,h=b=>wv(b,!1,u),f=u.onStop=()=>{const b=tl.get(u);if(b){if(l)l(b,4);else for(const D of b)D();tl.delete(u)}},e?i?E(!0):A=u.run():o?o(E.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Li(t,e=1/0,n){if(e<=0||!bt(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Gt(t))Li(t.value,e,n);else if(Ve(t))for(let i=0;i<t.length;i++)Li(t[i],e,n);else if(Qr(t)||br(t))t.forEach(i=>{Li(i,e,n)});else if(bp(t)){for(const i in t)Li(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Li(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $o(t,e,n,i){try{return i?t(...i):t()}catch(s){Al(s,e,n)}}function pi(t,e,n,i){if(qe(t)){const s=$o(t,e,n,i);return s&&yp(s)&&s.catch(r=>{Al(r,e,n)}),s}if(Ve(t)){const s=[];for(let r=0;r<t.length;r++)s.push(pi(t[r],e,n,i));return s}}function Al(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||vt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}a=a.parent}if(r){ps(),$o(r,null,10,[t,l,c]),ms();return}}Sv(t,n,s,i,o)}function Sv(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const an=[];let ti=-1;const Mr=[];let ji=null,mr=0;const qp=Promise.resolve();let nl=null;function qo(t){const e=nl||qp;return t?e.then(this?t.bind(this):t):e}function Mv(t){let e=ti+1,n=an.length;for(;e<n;){const i=e+n>>>1,s=an[i],r=Ro(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function od(t){if(!(t.flags&1)){const e=Ro(t),n=an[an.length-1];!n||!(t.flags&2)&&e>=Ro(n)?an.push(t):an.splice(Mv(e),0,t),t.flags|=1,jp()}}function jp(){nl||(nl=qp.then(Kp))}function Ev(t){Ve(t)?Mr.push(...t):ji&&t.id===-1?ji.splice(mr+1,0,t):t.flags&1||(Mr.push(t),t.flags|=1),jp()}function ef(t,e,n=ti+1){for(;n<an.length;n++){const i=an[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;an.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Yp(t){if(Mr.length){const e=[...new Set(Mr)].sort((n,i)=>Ro(n)-Ro(i));if(Mr.length=0,ji){ji.push(...e);return}for(ji=e,mr=0;mr<ji.length;mr++){const n=ji[mr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ji=null,mr=0}}const Ro=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Kp(t){try{for(ti=0;ti<an.length;ti++){const e=an[ti];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),$o(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ti<an.length;ti++){const e=an[ti];e&&(e.flags&=-2)}ti=-1,an.length=0,Yp(),nl=null,(an.length||Mr.length)&&Kp()}}let Tn=null,Zp=null;function il(t){const e=Tn;return Tn=t,Zp=t&&t.type.__scopeId||null,e}function Ha(t,e=Tn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&df(-1);const r=il(e);let o;try{o=t(...s)}finally{il(r),i._d&&df(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ls(t,e){if(Tn===null)return t;const n=Dl(Tn),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=vt]=e[s];r&&(qe(r)&&(r={mounted:r,updated:r}),r.deep&&Li(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function xs(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(ps(),pi(l,n,8,[t.el,a,t,e]),ms())}}const Tv=Symbol("_vte"),Av=t=>t.__isTeleport;function ad(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ad(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Qp(t,e){return qe(t)?en({name:t.name},e,{setup:t}):t}function Jp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function sl(t,e,n,i,s=!1){if(Ve(t)){t.forEach((v,x)=>sl(v,e&&(Ve(e)?e[x]:e),n,i,s));return}if(bo(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&sl(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?Dl(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===vt?a.refs={}:a.refs,d=a.setupState,f=ft(d),h=d===vt?()=>!1:v=>ht(f,v);if(c!=null&&c!==l&&(Ot(c)?(u[c]=null,h(c)&&(d[c]=null)):Gt(c)&&(c.value=null)),qe(l))$o(l,a,12,[o,u]);else{const v=Ot(l),x=Gt(l);if(v||x){const m=()=>{if(t.f){const p=v?h(l)?d[l]:u[l]:l.value;s?Ve(p)&&Ku(p,r):Ve(p)?p.includes(r)||p.push(r):v?(u[l]=[r],h(l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else v?(u[l]=o,h(l)&&(d[l]=o)):x&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Sn(m,n)):m()}}}El().requestIdleCallback;El().cancelIdleCallback;const bo=t=>!!t.type.__asyncLoader,em=t=>t.type.__isKeepAlive;function Cv(t,e){tm(t,"a",e)}function Rv(t,e){tm(t,"da",e)}function tm(t,e,n=Zt){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Cl(e,i,n),n){let s=n.parent;for(;s&&s.parent;)em(s.parent.vnode)&&Pv(i,e,n,s),s=s.parent}}function Pv(t,e,n,i){const s=Cl(e,t,i,!0);cd(()=>{Ku(i[e],s)},n)}function Cl(t,e,n=Zt,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{ps();const a=jo(n),l=pi(e,n,t,o);return a(),ms(),l});return i?s.unshift(r):s.push(r),r}}const ki=t=>(e,n=Zt)=>{(!Do||t==="sp")&&Cl(t,(...i)=>e(...i),n)},Dv=ki("bm"),Jr=ki("m"),Lv=ki("bu"),Iv=ki("u"),ld=ki("bum"),cd=ki("um"),Uv=ki("sp"),Ov=ki("rtg"),Nv=ki("rtc");function Fv(t,e=Zt){Cl("ec",t,e)}const Bv="components";function kv(t,e){return Hv(Bv,t,!0,e)||t}const zv=Symbol.for("v-ndc");function Hv(t,e,n=!0,i=!1){const s=Tn||Zt;if(s){const r=s.type;{const a=A0(r,!1);if(a&&(a===e||a===Fn(e)||a===Ml(Fn(e))))return r}const o=tf(s[t]||r[t],e)||tf(s.appContext[t],e);return!o&&i?r:o}}function tf(t,e){return t&&(t[e]||t[Fn(e)]||t[Ml(Fn(e))])}function _r(t,e,n,i){let s;const r=n,o=Ve(t);if(o||Ot(t)){const a=o&&Sr(t);let l=!1;a&&(l=!Nn(t),t=Tl(t)),s=new Array(t.length);for(let c=0,u=t.length;c<u;c++)s[c]=e(l?Kt(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(bt(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,r)}}else s=[];return s}const $c=t=>t?Sm(t)?Dl(t):$c(t.parent):null,So=en(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>$c(t.parent),$root:t=>$c(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>im(t),$forceUpdate:t=>t.f||(t.f=()=>{od(t.update)}),$nextTick:t=>t.n||(t.n=qo.bind(t.proxy)),$watch:t=>l0.bind(t)}),Zl=(t,e)=>t!==vt&&!t.__isScriptSetup&&ht(t,e),Vv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Zl(i,e))return o[e]=1,i[e];if(s!==vt&&ht(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&ht(c,e))return o[e]=3,r[e];if(n!==vt&&ht(n,e))return o[e]=4,n[e];qc&&(o[e]=0)}}const u=So[e];let d,f;if(u)return e==="$attrs"&&Yt(t.attrs,"get",""),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==vt&&ht(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,ht(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Zl(s,e)?(s[e]=n,!0):i!==vt&&ht(i,e)?(i[e]=n,!0):ht(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==vt&&ht(t,o)||Zl(e,o)||(a=r[0])&&ht(a,o)||ht(i,o)||ht(So,o)||ht(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ht(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function nf(t){return Ve(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let qc=!0;function Gv(t){const e=im(t),n=t.proxy,i=t.ctx;qc=!1,e.beforeCreate&&sf(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:v,activated:x,deactivated:m,beforeDestroy:p,beforeUnmount:A,destroyed:E,unmounted:b,render:D,renderTracked:C,renderTriggered:O,errorCaptured:U,serverPrefetch:w,expose:S,inheritAttrs:R,components:K,directives:Z,filters:te}=e;if(c&&Wv(c,i,null),o)for(const fe in o){const q=o[fe];qe(q)&&(i[fe]=q.bind(n))}if(s){const fe=s.call(n,n);bt(fe)&&(t.data=Xo(fe))}if(qc=!0,r)for(const fe in r){const q=r[fe],be=qe(q)?q.bind(n,n):qe(q.get)?q.get.bind(n,n):ui,Se=!qe(q)&&qe(q.set)?q.set.bind(n):ui,De=Qt({get:be,set:Se});Object.defineProperty(i,fe,{enumerable:!0,configurable:!0,get:()=>De.value,set:Fe=>De.value=Fe})}if(a)for(const fe in a)nm(a[fe],i,n,fe);if(l){const fe=qe(l)?l.call(n):l;Reflect.ownKeys(fe).forEach(q=>{Va(q,fe[q])})}u&&sf(u,t,"c");function Q(fe,q){Ve(q)?q.forEach(be=>fe(be.bind(n))):q&&fe(q.bind(n))}if(Q(Dv,d),Q(Jr,f),Q(Lv,h),Q(Iv,v),Q(Cv,x),Q(Rv,m),Q(Fv,U),Q(Nv,C),Q(Ov,O),Q(ld,A),Q(cd,b),Q(Uv,w),Ve(S))if(S.length){const fe=t.exposed||(t.exposed={});S.forEach(q=>{Object.defineProperty(fe,q,{get:()=>n[q],set:be=>n[q]=be})})}else t.exposed||(t.exposed={});D&&t.render===ui&&(t.render=D),R!=null&&(t.inheritAttrs=R),K&&(t.components=K),Z&&(t.directives=Z),w&&Jp(t)}function Wv(t,e,n=ui){Ve(t)&&(t=jc(t));for(const i in t){const s=t[i];let r;bt(s)?"default"in s?r=Oi(s.from||i,s.default,!0):r=Oi(s.from||i):r=Oi(s),Gt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function sf(t,e,n){pi(Ve(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function nm(t,e,n,i){let s=i.includes(".")?_m(n,i):()=>n[i];if(Ot(t)){const r=e[t];qe(r)&&Kn(s,r)}else if(qe(t))Kn(s,t.bind(n));else if(bt(t))if(Ve(t))t.forEach(r=>nm(r,e,n,i));else{const r=qe(t.handler)?t.handler.bind(n):e[t.handler];qe(r)&&Kn(s,r,t)}}function im(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>rl(l,c,o,!0)),rl(l,e,o)),bt(e)&&r.set(e,l),l}function rl(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&rl(t,r,n,!0),s&&s.forEach(o=>rl(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Xv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Xv={data:rf,props:of,emits:of,methods:go,computed:go,beforeCreate:sn,created:sn,beforeMount:sn,mounted:sn,beforeUpdate:sn,updated:sn,beforeDestroy:sn,beforeUnmount:sn,destroyed:sn,unmounted:sn,activated:sn,deactivated:sn,errorCaptured:sn,serverPrefetch:sn,components:go,directives:go,watch:qv,provide:rf,inject:$v};function rf(t,e){return e?t?function(){return en(qe(t)?t.call(this,this):t,qe(e)?e.call(this,this):e)}:e:t}function $v(t,e){return go(jc(t),jc(e))}function jc(t){if(Ve(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function sn(t,e){return t?[...new Set([].concat(t,e))]:e}function go(t,e){return t?en(Object.create(null),t,e):e}function of(t,e){return t?Ve(t)&&Ve(e)?[...new Set([...t,...e])]:en(Object.create(null),nf(t),nf(e??{})):e}function qv(t,e){if(!t)return e;if(!e)return t;const n=en(Object.create(null),t);for(const i in e)n[i]=sn(t[i],e[i]);return n}function sm(){return{app:null,config:{isNativeTag:B_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jv=0;function Yv(t,e){return function(i,s=null){qe(i)||(i=en({},i)),s!=null&&!bt(s)&&(s=null);const r=sm(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:jv++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:R0,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&qe(u.install)?(o.add(u),u.install(c,...d)):qe(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||Vt(i,s);return h.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),t(h,u,f),l=!0,c._container=u,u.__vue_app__=c,Dl(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(pi(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=Er;Er=c;try{return u()}finally{Er=d}}};return c}}let Er=null;function Va(t,e){if(Zt){let n=Zt.provides;const i=Zt.parent&&Zt.parent.provides;i===n&&(n=Zt.provides=Object.create(i)),n[t]=e}}function Oi(t,e,n=!1){const i=Zt||Tn;if(i||Er){const s=Er?Er._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&qe(e)?e.call(i&&i.proxy):e}}const rm={},om=()=>Object.create(rm),am=t=>Object.getPrototypeOf(t)===rm;function Kv(t,e,n,i=!1){const s={},r=om();t.propsDefaults=Object.create(null),lm(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Vp(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function Zv(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=ft(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Rl(t.emitsOptions,f))continue;const h=e[f];if(l)if(ht(r,f))h!==r[f]&&(r[f]=h,c=!0);else{const v=Fn(f);s[v]=Yc(l,a,v,h,t,!1)}else h!==r[f]&&(r[f]=h,c=!0)}}}else{lm(t,e,s,r)&&(c=!0);let u;for(const d in a)(!e||!ht(e,d)&&((u=Ys(d))===d||!ht(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=Yc(l,a,d,void 0,t,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!ht(e,d))&&(delete r[d],c=!0)}c&&Di(t.attrs,"set","")}function lm(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(xo(l))continue;const c=e[l];let u;s&&ht(s,u=Fn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Rl(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ft(n),c=a||vt;for(let u=0;u<r.length;u++){const d=r[u];n[d]=Yc(s,l,d,c[d],t,!ht(c,d))}}return o}function Yc(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=ht(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qe(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=jo(s);i=c[n]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ys(n))&&(i=!0))}return i}const Qv=new WeakMap;function cm(t,e,n=!1){const i=n?Qv:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!qe(t)){const u=d=>{l=!0;const[f,h]=cm(d,e,!0);en(o,f),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return bt(t)&&i.set(t,wr),wr;if(Ve(r))for(let u=0;u<r.length;u++){const d=Fn(r[u]);af(d)&&(o[d]=vt)}else if(r)for(const u in r){const d=Fn(u);if(af(d)){const f=r[u],h=o[d]=Ve(f)||qe(f)?{type:f}:en({},f),v=h.type;let x=!1,m=!0;if(Ve(v))for(let p=0;p<v.length;++p){const A=v[p],E=qe(A)&&A.name;if(E==="Boolean"){x=!0;break}else E==="String"&&(m=!1)}else x=qe(v)&&v.name==="Boolean";h[0]=x,h[1]=m,(x||ht(h,"default"))&&a.push(d)}}const c=[o,a];return bt(t)&&i.set(t,c),c}function af(t){return t[0]!=="$"&&!xo(t)}const um=t=>t[0]==="_"||t==="$stable",ud=t=>Ve(t)?t.map(oi):[oi(t)],Jv=(t,e,n)=>{if(e._n)return e;const i=Ha((...s)=>ud(e(...s)),n);return i._c=!1,i},dm=(t,e,n)=>{const i=t._ctx;for(const s in t){if(um(s))continue;const r=t[s];if(qe(r))e[s]=Jv(s,r,i);else if(r!=null){const o=ud(r);e[s]=()=>o}}},fm=(t,e)=>{const n=ud(e);t.slots.default=()=>n},hm=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},e0=(t,e,n)=>{const i=t.slots=om();if(t.vnode.shapeFlag&32){const s=e._;s?(hm(i,e,n),n&&Sp(i,"_",s,!0)):dm(e,i)}else e&&fm(t,e)},t0=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=vt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:hm(s,e,n):(r=!e.$stable,dm(e,s)),o=e}else e&&(fm(t,e),o={default:1});if(r)for(const a in s)!um(a)&&o[a]==null&&delete s[a]},Sn=m0;function n0(t){return i0(t)}function i0(t,e){const n=El();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=ui,insertStaticContent:v}=t,x=(T,_,B,X=null,ne=null,$=null,me=void 0,J=null,I=!!_.dynamicChildren)=>{if(T===_)return;T&&!ao(T,_)&&(X=F(T),Fe(T,ne,$,!0),T=null),_.patchFlag===-2&&(I=!1,_.dynamicChildren=null);const{type:P,ref:j,shapeFlag:y}=_;switch(P){case Pl:m(T,_,B,X);break;case Ws:p(T,_,B,X);break;case Ga:T==null&&A(_,B,X,me);break;case ln:K(T,_,B,X,ne,$,me,J,I);break;default:y&1?D(T,_,B,X,ne,$,me,J,I):y&6?Z(T,_,B,X,ne,$,me,J,I):(y&64||y&128)&&P.process(T,_,B,X,ne,$,me,J,I,pe)}j!=null&&ne&&sl(j,T&&T.ref,$,_||T,!_)},m=(T,_,B,X)=>{if(T==null)i(_.el=a(_.children),B,X);else{const ne=_.el=T.el;_.children!==T.children&&c(ne,_.children)}},p=(T,_,B,X)=>{T==null?i(_.el=l(_.children||""),B,X):_.el=T.el},A=(T,_,B,X)=>{[T.el,T.anchor]=v(T.children,_,B,X,T.el,T.anchor)},E=({el:T,anchor:_},B,X)=>{let ne;for(;T&&T!==_;)ne=f(T),i(T,B,X),T=ne;i(_,B,X)},b=({el:T,anchor:_})=>{let B;for(;T&&T!==_;)B=f(T),s(T),T=B;s(_)},D=(T,_,B,X,ne,$,me,J,I)=>{_.type==="svg"?me="svg":_.type==="math"&&(me="mathml"),T==null?C(_,B,X,ne,$,me,J,I):w(T,_,ne,$,me,J,I)},C=(T,_,B,X,ne,$,me,J)=>{let I,P;const{props:j,shapeFlag:y,transition:g,dirs:L}=T;if(I=T.el=o(T.type,$,j&&j.is,j),y&8?u(I,T.children):y&16&&U(T.children,I,null,X,ne,Ql(T,$),me,J),L&&xs(T,null,X,"created"),O(I,T,T.scopeId,me,X),j){for(const V in j)V!=="value"&&!xo(V)&&r(I,V,null,j[V],$,X);"value"in j&&r(I,"value",null,j.value,$),(P=j.onVnodeBeforeMount)&&ei(P,X,T)}L&&xs(T,null,X,"beforeMount");const k=s0(ne,g);k&&g.beforeEnter(I),i(I,_,B),((P=j&&j.onVnodeMounted)||k||L)&&Sn(()=>{P&&ei(P,X,T),k&&g.enter(I),L&&xs(T,null,X,"mounted")},ne)},O=(T,_,B,X,ne)=>{if(B&&h(T,B),X)for(let $=0;$<X.length;$++)h(T,X[$]);if(ne){let $=ne.subTree;if(_===$||xm($.type)&&($.ssContent===_||$.ssFallback===_)){const me=ne.vnode;O(T,me,me.scopeId,me.slotScopeIds,ne.parent)}}},U=(T,_,B,X,ne,$,me,J,I=0)=>{for(let P=I;P<T.length;P++){const j=T[P]=J?Yi(T[P]):oi(T[P]);x(null,j,_,B,X,ne,$,me,J)}},w=(T,_,B,X,ne,$,me)=>{const J=_.el=T.el;let{patchFlag:I,dynamicChildren:P,dirs:j}=_;I|=T.patchFlag&16;const y=T.props||vt,g=_.props||vt;let L;if(B&&ys(B,!1),(L=g.onVnodeBeforeUpdate)&&ei(L,B,_,T),j&&xs(_,T,B,"beforeUpdate"),B&&ys(B,!0),(y.innerHTML&&g.innerHTML==null||y.textContent&&g.textContent==null)&&u(J,""),P?S(T.dynamicChildren,P,J,B,X,Ql(_,ne),$):me||q(T,_,J,null,B,X,Ql(_,ne),$,!1),I>0){if(I&16)R(J,y,g,B,ne);else if(I&2&&y.class!==g.class&&r(J,"class",null,g.class,ne),I&4&&r(J,"style",y.style,g.style,ne),I&8){const k=_.dynamicProps;for(let V=0;V<k.length;V++){const N=k[V],re=y[N],le=g[N];(le!==re||N==="value")&&r(J,N,re,le,ne,B)}}I&1&&T.children!==_.children&&u(J,_.children)}else!me&&P==null&&R(J,y,g,B,ne);((L=g.onVnodeUpdated)||j)&&Sn(()=>{L&&ei(L,B,_,T),j&&xs(_,T,B,"updated")},X)},S=(T,_,B,X,ne,$,me)=>{for(let J=0;J<_.length;J++){const I=T[J],P=_[J],j=I.el&&(I.type===ln||!ao(I,P)||I.shapeFlag&70)?d(I.el):B;x(I,P,j,null,X,ne,$,me,!0)}},R=(T,_,B,X,ne)=>{if(_!==B){if(_!==vt)for(const $ in _)!xo($)&&!($ in B)&&r(T,$,_[$],null,ne,X);for(const $ in B){if(xo($))continue;const me=B[$],J=_[$];me!==J&&$!=="value"&&r(T,$,J,me,ne,X)}"value"in B&&r(T,"value",_.value,B.value,ne)}},K=(T,_,B,X,ne,$,me,J,I)=>{const P=_.el=T?T.el:a(""),j=_.anchor=T?T.anchor:a("");let{patchFlag:y,dynamicChildren:g,slotScopeIds:L}=_;L&&(J=J?J.concat(L):L),T==null?(i(P,B,X),i(j,B,X),U(_.children||[],B,j,ne,$,me,J,I)):y>0&&y&64&&g&&T.dynamicChildren?(S(T.dynamicChildren,g,B,ne,$,me,J),(_.key!=null||ne&&_===ne.subTree)&&pm(T,_,!0)):q(T,_,B,j,ne,$,me,J,I)},Z=(T,_,B,X,ne,$,me,J,I)=>{_.slotScopeIds=J,T==null?_.shapeFlag&512?ne.ctx.activate(_,B,X,me,I):te(_,B,X,ne,$,me,I):ce(T,_,I)},te=(T,_,B,X,ne,$,me)=>{const J=T.component=b0(T,X,ne);if(em(T)&&(J.ctx.renderer=pe),S0(J,!1,me),J.asyncDep){if(ne&&ne.registerDep(J,Q,me),!T.el){const I=J.subTree=Vt(Ws);p(null,I,_,B)}}else Q(J,T,_,B,ne,$,me)},ce=(T,_,B)=>{const X=_.component=T.component;if(h0(T,_,B))if(X.asyncDep&&!X.asyncResolved){fe(X,_,B);return}else X.next=_,X.update();else _.el=T.el,X.vnode=_},Q=(T,_,B,X,ne,$,me)=>{const J=()=>{if(T.isMounted){let{next:y,bu:g,u:L,parent:k,vnode:V}=T;{const Ee=mm(T);if(Ee){y&&(y.el=V.el,fe(T,y,me)),Ee.asyncDep.then(()=>{T.isUnmounted||J()});return}}let N=y,re;ys(T,!1),y?(y.el=V.el,fe(T,y,me)):y=V,g&&za(g),(re=y.props&&y.props.onVnodeBeforeUpdate)&&ei(re,k,y,V),ys(T,!0);const le=cf(T),we=T.subTree;T.subTree=le,x(we,le,d(we.el),F(we),T,ne,$),y.el=le.el,N===null&&p0(T,le.el),L&&Sn(L,ne),(re=y.props&&y.props.onVnodeUpdated)&&Sn(()=>ei(re,k,y,V),ne)}else{let y;const{el:g,props:L}=_,{bm:k,m:V,parent:N,root:re,type:le}=T,we=bo(_);ys(T,!1),k&&za(k),!we&&(y=L&&L.onVnodeBeforeMount)&&ei(y,N,_),ys(T,!0);{re.ce&&re.ce._injectChildStyle(le);const Ee=T.subTree=cf(T);x(null,Ee,B,X,T,ne,$),_.el=Ee.el}if(V&&Sn(V,ne),!we&&(y=L&&L.onVnodeMounted)){const Ee=_;Sn(()=>ei(y,N,Ee),ne)}(_.shapeFlag&256||N&&bo(N.vnode)&&N.vnode.shapeFlag&256)&&T.a&&Sn(T.a,ne),T.isMounted=!0,_=B=X=null}};T.scope.on();const I=T.effect=new Cp(J);T.scope.off();const P=T.update=I.run.bind(I),j=T.job=I.runIfDirty.bind(I);j.i=T,j.id=T.uid,I.scheduler=()=>od(j),ys(T,!0),P()},fe=(T,_,B)=>{_.component=T;const X=T.vnode.props;T.vnode=_,T.next=null,Zv(T,_.props,X,B),t0(T,_.children,B),ps(),ef(T),ms()},q=(T,_,B,X,ne,$,me,J,I=!1)=>{const P=T&&T.children,j=T?T.shapeFlag:0,y=_.children,{patchFlag:g,shapeFlag:L}=_;if(g>0){if(g&128){Se(P,y,B,X,ne,$,me,J,I);return}else if(g&256){be(P,y,B,X,ne,$,me,J,I);return}}L&8?(j&16&&xe(P,ne,$),y!==P&&u(B,y)):j&16?L&16?Se(P,y,B,X,ne,$,me,J,I):xe(P,ne,$,!0):(j&8&&u(B,""),L&16&&U(y,B,X,ne,$,me,J,I))},be=(T,_,B,X,ne,$,me,J,I)=>{T=T||wr,_=_||wr;const P=T.length,j=_.length,y=Math.min(P,j);let g;for(g=0;g<y;g++){const L=_[g]=I?Yi(_[g]):oi(_[g]);x(T[g],L,B,null,ne,$,me,J,I)}P>j?xe(T,ne,$,!0,!1,y):U(_,B,X,ne,$,me,J,I,y)},Se=(T,_,B,X,ne,$,me,J,I)=>{let P=0;const j=_.length;let y=T.length-1,g=j-1;for(;P<=y&&P<=g;){const L=T[P],k=_[P]=I?Yi(_[P]):oi(_[P]);if(ao(L,k))x(L,k,B,null,ne,$,me,J,I);else break;P++}for(;P<=y&&P<=g;){const L=T[y],k=_[g]=I?Yi(_[g]):oi(_[g]);if(ao(L,k))x(L,k,B,null,ne,$,me,J,I);else break;y--,g--}if(P>y){if(P<=g){const L=g+1,k=L<j?_[L].el:X;for(;P<=g;)x(null,_[P]=I?Yi(_[P]):oi(_[P]),B,k,ne,$,me,J,I),P++}}else if(P>g)for(;P<=y;)Fe(T[P],ne,$,!0),P++;else{const L=P,k=P,V=new Map;for(P=k;P<=g;P++){const Ue=_[P]=I?Yi(_[P]):oi(_[P]);Ue.key!=null&&V.set(Ue.key,P)}let N,re=0;const le=g-k+1;let we=!1,Ee=0;const ge=new Array(le);for(P=0;P<le;P++)ge[P]=0;for(P=L;P<=y;P++){const Ue=T[P];if(re>=le){Fe(Ue,ne,$,!0);continue}let Pe;if(Ue.key!=null)Pe=V.get(Ue.key);else for(N=k;N<=g;N++)if(ge[N-k]===0&&ao(Ue,_[N])){Pe=N;break}Pe===void 0?Fe(Ue,ne,$,!0):(ge[Pe-k]=P+1,Pe>=Ee?Ee=Pe:we=!0,x(Ue,_[Pe],B,null,ne,$,me,J,I),re++)}const Ce=we?r0(ge):wr;for(N=Ce.length-1,P=le-1;P>=0;P--){const Ue=k+P,Pe=_[Ue],Te=Ue+1<j?_[Ue+1].el:X;ge[P]===0?x(null,Pe,B,Te,ne,$,me,J,I):we&&(N<0||P!==Ce[N]?De(Pe,B,Te,2):N--)}}},De=(T,_,B,X,ne=null)=>{const{el:$,type:me,transition:J,children:I,shapeFlag:P}=T;if(P&6){De(T.component.subTree,_,B,X);return}if(P&128){T.suspense.move(_,B,X);return}if(P&64){me.move(T,_,B,pe);return}if(me===ln){i($,_,B);for(let y=0;y<I.length;y++)De(I[y],_,B,X);i(T.anchor,_,B);return}if(me===Ga){E(T,_,B);return}if(X!==2&&P&1&&J)if(X===0)J.beforeEnter($),i($,_,B),Sn(()=>J.enter($),ne);else{const{leave:y,delayLeave:g,afterLeave:L}=J,k=()=>i($,_,B),V=()=>{y($,()=>{k(),L&&L()})};g?g($,k,V):V()}else i($,_,B)},Fe=(T,_,B,X=!1,ne=!1)=>{const{type:$,props:me,ref:J,children:I,dynamicChildren:P,shapeFlag:j,patchFlag:y,dirs:g,cacheIndex:L}=T;if(y===-2&&(ne=!1),J!=null&&sl(J,null,B,T,!0),L!=null&&(_.renderCache[L]=void 0),j&256){_.ctx.deactivate(T);return}const k=j&1&&g,V=!bo(T);let N;if(V&&(N=me&&me.onVnodeBeforeUnmount)&&ei(N,_,T),j&6)oe(T.component,B,X);else{if(j&128){T.suspense.unmount(B,X);return}k&&xs(T,null,_,"beforeUnmount"),j&64?T.type.remove(T,_,B,pe,X):P&&!P.hasOnce&&($!==ln||y>0&&y&64)?xe(P,_,B,!1,!0):($===ln&&y&384||!ne&&j&16)&&xe(I,_,B),X&&it(T)}(V&&(N=me&&me.onVnodeUnmounted)||k)&&Sn(()=>{N&&ei(N,_,T),k&&xs(T,null,_,"unmounted")},B)},it=T=>{const{type:_,el:B,anchor:X,transition:ne}=T;if(_===ln){tt(B,X);return}if(_===Ga){b(T);return}const $=()=>{s(B),ne&&!ne.persisted&&ne.afterLeave&&ne.afterLeave()};if(T.shapeFlag&1&&ne&&!ne.persisted){const{leave:me,delayLeave:J}=ne,I=()=>me(B,$);J?J(T.el,$,I):I()}else $()},tt=(T,_)=>{let B;for(;T!==_;)B=f(T),s(T),T=B;s(_)},oe=(T,_,B)=>{const{bum:X,scope:ne,job:$,subTree:me,um:J,m:I,a:P}=T;lf(I),lf(P),X&&za(X),ne.stop(),$&&($.flags|=8,Fe(me,T,_,B)),J&&Sn(J,_),Sn(()=>{T.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},xe=(T,_,B,X=!1,ne=!1,$=0)=>{for(let me=$;me<T.length;me++)Fe(T[me],_,B,X,ne)},F=T=>{if(T.shapeFlag&6)return F(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const _=f(T.anchor||T.el),B=_&&_[Tv];return B?f(B):_};let ue=!1;const ae=(T,_,B)=>{T==null?_._vnode&&Fe(_._vnode,null,null,!0):x(_._vnode||null,T,_,null,null,null,B),_._vnode=T,ue||(ue=!0,ef(),Yp(),ue=!1)},pe={p:x,um:Fe,m:De,r:it,mt:te,mc:U,pc:q,pbc:S,n:F,o:t};return{render:ae,hydrate:void 0,createApp:Yv(ae)}}function Ql({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ys({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function s0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function pm(t,e,n=!1){const i=t.children,s=e.children;if(Ve(i)&&Ve(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Yi(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&pm(o,a)),a.type===Pl&&(a.el=o.el)}}function r0(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function mm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:mm(e)}function lf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const o0=Symbol.for("v-scx"),a0=()=>Oi(o0);function Kn(t,e,n){return gm(t,e,n)}function gm(t,e,n=vt){const{immediate:i,deep:s,flush:r,once:o}=n,a=en({},n),l=e&&i||!e&&r!=="post";let c;if(Do){if(r==="sync"){const h=a0();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=ui,h.resume=ui,h.pause=ui,h}}const u=Zt;a.call=(h,v,x)=>pi(h,u,v,x);let d=!1;r==="post"?a.scheduler=h=>{Sn(h,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(h,v)=>{v?h():od(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=bv(t,e,a);return Do&&(c?c.push(f):l&&f()),f}function l0(t,e,n){const i=this.proxy,s=Ot(t)?t.includes(".")?_m(i,t):()=>i[t]:t.bind(i,i);let r;qe(e)?r=e:(r=e.handler,n=e);const o=jo(this),a=gm(s,r.bind(i),n);return o(),a}function _m(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const c0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Fn(e)}Modifiers`]||t[`${Ys(e)}Modifiers`];function u0(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||vt;let s=n;const r=e.startsWith("update:"),o=r&&c0(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>Ot(u)?u.trim():u)),o.number&&(s=n.map(el)));let a,l=i[a=$l(e)]||i[a=$l(Fn(e))];!l&&r&&(l=i[a=$l(Ys(e))]),l&&pi(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,pi(c,t,6,s)}}function vm(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!qe(t)){const l=c=>{const u=vm(c,e,!0);u&&(a=!0,en(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(bt(t)&&i.set(t,null),null):(Ve(r)?r.forEach(l=>o[l]=null):en(o,r),bt(t)&&i.set(t,o),o)}function Rl(t,e){return!t||!bl(e)?!1:(e=e.slice(2).replace(/Once$/,""),ht(t,e[0].toLowerCase()+e.slice(1))||ht(t,Ys(e))||ht(t,e))}function cf(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:v,inheritAttrs:x}=t,m=il(t);let p,A;try{if(n.shapeFlag&4){const b=s||i,D=b;p=oi(c.call(D,b,u,d,h,f,v)),A=a}else{const b=e;p=oi(b.length>1?b(d,{attrs:a,slots:o,emit:l}):b(d,null)),A=e.props?a:d0(a)}}catch(b){Mo.length=0,Al(b,t,1),p=Vt(Ws)}let E=p;if(A&&x!==!1){const b=Object.keys(A),{shapeFlag:D}=E;b.length&&D&7&&(r&&b.some(Yu)&&(A=f0(A,r)),E=Hr(E,A,!1,!0))}return n.dirs&&(E=Hr(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&ad(E,n.transition),p=E,il(m),p}const d0=t=>{let e;for(const n in t)(n==="class"||n==="style"||bl(n))&&((e||(e={}))[n]=t[n]);return e},f0=(t,e)=>{const n={};for(const i in t)(!Yu(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function h0(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?uf(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==i[f]&&!Rl(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?uf(i,o,c):!0:!!o;return!1}function uf(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Rl(n,r))return!0}return!1}function p0({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const xm=t=>t.__isSuspense;function m0(t,e){e&&e.pendingBranch?Ve(t)?e.effects.push(...t):e.effects.push(t):Ev(t)}const ln=Symbol.for("v-fgt"),Pl=Symbol.for("v-txt"),Ws=Symbol.for("v-cmt"),Ga=Symbol.for("v-stc"),Mo=[];let An=null;function wt(t=!1){Mo.push(An=t?null:[])}function g0(){Mo.pop(),An=Mo[Mo.length-1]||null}let Po=1;function df(t,e=!1){Po+=t,t<0&&An&&e&&(An.hasOnce=!0)}function ym(t){return t.dynamicChildren=Po>0?An||wr:null,g0(),Po>0&&An&&An.push(t),t}function Dt(t,e,n,i,s,r){return ym(W(t,e,n,i,s,r,!0))}function _o(t,e,n,i,s){return ym(Vt(t,e,n,i,s,!0))}function ol(t){return t?t.__v_isVNode===!0:!1}function ao(t,e){return t.type===e.type&&t.key===e.key}const wm=({key:t})=>t??null,Wa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ot(t)||Gt(t)||qe(t)?{i:Tn,r:t,k:e,f:!!n}:t:null);function W(t,e=null,n=null,i=0,s=null,r=t===ln?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&wm(e),ref:e&&Wa(e),scopeId:Zp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Tn};return a?(dd(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Ot(n)?8:16),Po>0&&!o&&An&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&An.push(l),l}const Vt=_0;function _0(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===zv)&&(t=Ws),ol(t)){const a=Hr(t,e,!0);return n&&dd(a,n),Po>0&&!r&&An&&(a.shapeFlag&6?An[An.indexOf(t)]=a:An.push(a)),a.patchFlag=-2,a}if(C0(t)&&(t=t.__vccOpts),e){e=v0(e);let{class:a,style:l}=e;a&&!Ot(a)&&(e.class=rs(a)),bt(l)&&(rd(l)&&!Ve(l)&&(l=en({},l)),e.style=Xn(l))}const o=Ot(t)?1:xm(t)?128:Av(t)?64:bt(t)?4:qe(t)?2:0;return W(t,e,n,i,s,o,r,!0)}function v0(t){return t?rd(t)||am(t)?en({},t):t:null}function Hr(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?x0(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&wm(c),ref:e&&e.ref?n&&r?Ve(r)?r.concat(Wa(e)):[r,Wa(e)]:Wa(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ln?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Hr(t.ssContent),ssFallback:t.ssFallback&&Hr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&ad(u,l.clone(u)),u}function Xa(t=" ",e=0){return Vt(Pl,null,t,e)}function bm(t,e){const n=Vt(Ga,null,t);return n.staticCount=e,n}function Is(t="",e=!1){return e?(wt(),_o(Ws,null,t)):Vt(Ws,null,t)}function oi(t){return t==null||typeof t=="boolean"?Vt(Ws):Ve(t)?Vt(ln,null,t.slice()):ol(t)?Yi(t):Vt(Pl,null,String(t))}function Yi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Hr(t)}function dd(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ve(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),dd(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!am(e)?e._ctx=Tn:s===3&&Tn&&(Tn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else qe(e)?(e={default:e,_ctx:Tn},n=32):(e=String(e),i&64?(n=16,e=[Xa(e)]):n=8);t.children=e,t.shapeFlag|=n}function x0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=rs([e.class,i.class]));else if(s==="style")e.style=Xn([e.style,i.style]);else if(bl(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ve(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function ei(t,e,n,i=null){pi(t,e,7,[n,i])}const y0=sm();let w0=0;function b0(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||y0,r={uid:w0++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ap(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cm(i,s),emitsOptions:vm(i,s),emit:null,emitted:null,propsDefaults:vt,inheritAttrs:i.inheritAttrs,ctx:vt,data:vt,props:vt,attrs:vt,slots:vt,refs:vt,setupState:vt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=u0.bind(null,r),t.ce&&t.ce(r),r}let Zt=null,al,Kc;{const t=El(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};al=e("__VUE_INSTANCE_SETTERS__",n=>Zt=n),Kc=e("__VUE_SSR_SETTERS__",n=>Do=n)}const jo=t=>{const e=Zt;return al(t),t.scope.on(),()=>{t.scope.off(),al(e)}},ff=()=>{Zt&&Zt.scope.off(),al(null)};function Sm(t){return t.vnode.shapeFlag&4}let Do=!1;function S0(t,e=!1,n=!1){e&&Kc(e);const{props:i,children:s}=t.vnode,r=Sm(t);Kv(t,i,r,e),e0(t,s,n);const o=r?M0(t,e):void 0;return e&&Kc(!1),o}function M0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Vv);const{setup:i}=n;if(i){ps();const s=t.setupContext=i.length>1?T0(t):null,r=jo(t),o=$o(i,t,0,[t.props,s]),a=yp(o);if(ms(),r(),(a||t.sp)&&!bo(t)&&Jp(t),a){if(o.then(ff,ff),e)return o.then(l=>{hf(t,l)}).catch(l=>{Al(l,t,0)});t.asyncDep=o}else hf(t,o)}else Mm(t)}function hf(t,e,n){qe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:bt(e)&&(t.setupState=$p(e)),Mm(t)}function Mm(t,e,n){const i=t.type;t.render||(t.render=i.render||ui);{const s=jo(t);ps();try{Gv(t)}finally{ms(),s()}}}const E0={get(t,e){return Yt(t,"get",""),t[e]}};function T0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,E0),slots:t.slots,emit:t.emit,expose:e}}function Dl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy($p(Wp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in So)return So[n](t)},has(e,n){return n in e||n in So}})):t.proxy}function A0(t,e=!0){return qe(t)?t.displayName||t.name:t.name||e&&t.__name}function C0(t){return qe(t)&&"__vccOpts"in t}const Qt=(t,e)=>yv(t,e,Do);function Em(t,e,n){const i=arguments.length;return i===2?bt(e)&&!Ve(e)?ol(e)?Vt(t,null,[e]):Vt(t,e):Vt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&ol(n)&&(n=[n]),Vt(t,e,n))}const R0="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zc;const pf=typeof window<"u"&&window.trustedTypes;if(pf)try{Zc=pf.createPolicy("vue",{createHTML:t=>t})}catch{}const Tm=Zc?t=>Zc.createHTML(t):t=>t,P0="http://www.w3.org/2000/svg",D0="http://www.w3.org/1998/Math/MathML",Ri=typeof document<"u"?document:null,mf=Ri&&Ri.createElement("template"),L0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Ri.createElementNS(P0,t):e==="mathml"?Ri.createElementNS(D0,t):n?Ri.createElement(t,{is:n}):Ri.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Ri.createTextNode(t),createComment:t=>Ri.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ri.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{mf.innerHTML=Tm(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=mf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},I0=Symbol("_vtc");function U0(t,e,n){const i=t[I0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ll=Symbol("_vod"),Am=Symbol("_vsh"),K2={beforeMount(t,{value:e},{transition:n}){t[ll]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):lo(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),lo(t,!0),i.enter(t)):i.leave(t,()=>{lo(t,!1)}):lo(t,e))},beforeUnmount(t,{value:e}){lo(t,e)}};function lo(t,e){t.style.display=e?t[ll]:"none",t[Am]=!e}const O0=Symbol(""),N0=/(^|;)\s*display\s*:/;function F0(t,e,n){const i=t.style,s=Ot(n);let r=!1;if(n&&!s){if(e)if(Ot(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&$a(i,a,"")}else for(const o in e)n[o]==null&&$a(i,o,"");for(const o in n)o==="display"&&(r=!0),$a(i,o,n[o])}else if(s){if(e!==n){const o=i[O0];o&&(n+=";"+o),i.cssText=n,r=N0.test(n)}}else e&&t.removeAttribute("style");ll in t&&(t[ll]=r?i.display:"",t[Am]&&(i.display="none"))}const gf=/\s*!important$/;function $a(t,e,n){if(Ve(n))n.forEach(i=>$a(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=B0(t,e);gf.test(n)?t.setProperty(Ys(i),n.replace(gf,""),"important"):t[i]=n}}const _f=["Webkit","Moz","ms"],Jl={};function B0(t,e){const n=Jl[e];if(n)return n;let i=Fn(e);if(i!=="filter"&&i in t)return Jl[e]=i;i=Ml(i);for(let s=0;s<_f.length;s++){const r=_f[s]+i;if(r in t)return Jl[e]=r}return e}const vf="http://www.w3.org/1999/xlink";function xf(t,e,n,i,s,r=j_(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(vf,e.slice(6,e.length)):t.setAttributeNS(vf,e,n):n==null||r&&!Mp(n)?t.removeAttribute(e):t.setAttribute(e,r?"":hi(n)?String(n):n)}function yf(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Tm(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Mp(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Qi(t,e,n,i){t.addEventListener(e,n,i)}function k0(t,e,n,i){t.removeEventListener(e,n,i)}const wf=Symbol("_vei");function z0(t,e,n,i,s=null){const r=t[wf]||(t[wf]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=H0(e);if(i){const c=r[e]=W0(i,s);Qi(t,a,c,l)}else o&&(k0(t,a,o,l),r[e]=void 0)}}const bf=/(?:Once|Passive|Capture)$/;function H0(t){let e;if(bf.test(t)){e={};let i;for(;i=t.match(bf);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ys(t.slice(2)),e]}let ec=0;const V0=Promise.resolve(),G0=()=>ec||(V0.then(()=>ec=0),ec=Date.now());function W0(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;pi(X0(i,n.value),e,5,[i])};return n.value=t,n.attached=G0(),n}function X0(t,e){if(Ve(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Sf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,$0=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?U0(t,i,o):e==="style"?F0(t,n,i):bl(e)?Yu(e)||z0(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):q0(t,e,i,o))?(yf(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&xf(t,e,i,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ot(i))?yf(t,Fn(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),xf(t,e,i,o))};function q0(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Sf(e)&&qe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Sf(e)&&Ot(n)?!1:e in t}const Vr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Ve(e)?n=>za(e,n):e};function j0(t){t.target.composing=!0}function Mf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ni=Symbol("_assign"),vr={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[Ni]=Vr(s);const r=i||s.props&&s.props.type==="number";Qi(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=el(a)),t[Ni](a)}),n&&Qi(t,"change",()=>{t.value=t.value.trim()}),e||(Qi(t,"compositionstart",j0),Qi(t,"compositionend",Mf),Qi(t,"change",Mf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[Ni]=Vr(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?el(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Z2={deep:!0,created(t,e,n){t[Ni]=Vr(n),Qi(t,"change",()=>{const i=t._modelValue,s=Lo(t),r=t.checked,o=t[Ni];if(Ve(i)){const a=Qu(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Qr(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Cm(t,r))})},mounted:Ef,beforeUpdate(t,e,n){t[Ni]=Vr(n),Ef(t,e,n)}};function Ef(t,{value:e,oldValue:n},i){t._modelValue=e;let s;if(Ve(e))s=Qu(e,i.props.value)>-1;else if(Qr(e))s=e.has(i.props.value);else{if(e===n)return;s=Wo(e,Cm(t,!0))}t.checked!==s&&(t.checked=s)}const Y0={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=Qr(e);Qi(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?el(Lo(o)):Lo(o));t[Ni](t.multiple?s?new Set(r):r:r[0]),t._assigning=!0,qo(()=>{t._assigning=!1})}),t[Ni]=Vr(i)},mounted(t,{value:e}){Tf(t,e)},beforeUpdate(t,e,n){t[Ni]=Vr(n)},updated(t,{value:e}){t._assigning||Tf(t,e)}};function Tf(t,e){const n=t.multiple,i=Ve(e);if(!(n&&!i&&!Qr(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],a=Lo(o);if(n)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Qu(e,a)>-1}else o.selected=e.has(a);else if(Wo(Lo(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Lo(t){return"_value"in t?t._value:t.value}function Cm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const K0=["ctrl","shift","alt","meta"],Z0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>K0.some(n=>t[`${n}Key`]&&!e.includes(n))},Q0=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=Z0[e[o]];if(a&&a(s,e))return}return t(s,...r)})},J0=en({patchProp:$0},L0);let Af;function ex(){return Af||(Af=n0(J0))}const tx=(...t)=>{const e=ex().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=ix(i);if(!s)return;const r=e._component;!qe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,nx(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function nx(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ix(t){return Ot(t)?document.querySelector(t):t}/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const sx=Symbol();var Cf;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Cf||(Cf={}));function rx(){const t=K_(!0),e=t.run(()=>ot({}));let n=[],i=[];const s=Wp({install(r){s._a=r,r.provide(sx,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return this._a?n.push(r):i.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const gr=typeof document<"u";function Rm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ox(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Rm(t.default)}const dt=Object.assign;function tc(t,e){const n={};for(const i in e){const s=e[i];n[i]=Qn(s)?s.map(t):t(s)}return n}const Eo=()=>{},Qn=Array.isArray,Pm=/#/g,ax=/&/g,lx=/\//g,cx=/=/g,ux=/\?/g,Dm=/\+/g,dx=/%5B/g,fx=/%5D/g,Lm=/%5E/g,hx=/%60/g,Im=/%7B/g,px=/%7C/g,Um=/%7D/g,mx=/%20/g;function fd(t){return encodeURI(""+t).replace(px,"|").replace(dx,"[").replace(fx,"]")}function gx(t){return fd(t).replace(Im,"{").replace(Um,"}").replace(Lm,"^")}function Qc(t){return fd(t).replace(Dm,"%2B").replace(mx,"+").replace(Pm,"%23").replace(ax,"%26").replace(hx,"`").replace(Im,"{").replace(Um,"}").replace(Lm,"^")}function _x(t){return Qc(t).replace(cx,"%3D")}function vx(t){return fd(t).replace(Pm,"%23").replace(ux,"%3F")}function xx(t){return t==null?"":vx(t).replace(lx,"%2F")}function Io(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const yx=/\/$/,wx=t=>t.replace(yx,"");function nc(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Ex(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:Io(o)}}function bx(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Rf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Sx(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Gr(e.matched[i],n.matched[s])&&Om(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Gr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Om(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Mx(t[n],e[n]))return!1;return!0}function Mx(t,e){return Qn(t)?Pf(t,e):Qn(e)?Pf(e,t):t===e}function Pf(t,e){return Qn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function Ex(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const zi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Uo;(function(t){t.pop="pop",t.push="push"})(Uo||(Uo={}));var To;(function(t){t.back="back",t.forward="forward",t.unknown=""})(To||(To={}));function Tx(t){if(!t)if(gr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),wx(t)}const Ax=/^[^#]+#/;function Cx(t,e){return t.replace(Ax,"#")+e}function Rx(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Ll=()=>({left:window.scrollX,top:window.scrollY});function Px(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Rx(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Df(t,e){return(history.state?history.state.position-e:-1)+t}const Jc=new Map;function Dx(t,e){Jc.set(t,e)}function Lx(t){const e=Jc.get(t);return Jc.delete(t),e}let Ix=()=>location.protocol+"//"+location.host;function Nm(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Rf(l,"")}return Rf(n,t)+i+s}function Ux(t,e,n,i){let s=[],r=[],o=null;const a=({state:f})=>{const h=Nm(t,location),v=n.value,x=e.value;let m=0;if(f){if(n.value=h,e.value=f,o&&o===v){o=null;return}m=x?f.position-x.position:0}else i(h);s.forEach(p=>{p(n.value,v,{delta:m,type:Uo.pop,direction:m?m>0?To.forward:To.back:To.unknown})})};function l(){o=n.value}function c(f){s.push(f);const h=()=>{const v=s.indexOf(f);v>-1&&s.splice(v,1)};return r.push(h),h}function u(){const{history:f}=window;f.state&&f.replaceState(dt({},f.state,{scroll:Ll()}),"")}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function Lf(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Ll():null}}function Ox(t){const{history:e,location:n}=window,i={value:Nm(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:Ix()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(h){console.error(h),n[u?"replace":"assign"](f)}}function o(l,c){const u=dt({},e.state,Lf(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=dt({},s.value,e.state,{forward:l,scroll:Ll()});r(u.current,u,!0);const d=dt({},Lf(i.value,l,null),{position:u.position+1},c);r(l,d,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Nx(t){t=Tx(t);const e=Ox(t),n=Ux(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=dt({location:"",base:t,go:i,createHref:Cx.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Fx(t){return typeof t=="string"||t&&typeof t=="object"}function Fm(t){return typeof t=="string"||typeof t=="symbol"}const Bm=Symbol("");var If;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(If||(If={}));function Wr(t,e){return dt(new Error,{type:t,[Bm]:!0},e)}function yi(t,e){return t instanceof Error&&Bm in t&&(e==null||!!(t.type&e))}const Uf="[^/]+?",Bx={sensitive:!1,strict:!1,start:!0,end:!0},kx=/[.+*?^${}()[\]/\\]/g;function zx(t,e){const n=dt({},Bx,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let d=0;d<c.length;d++){const f=c[d];let h=40+(n.sensitive?.25:0);if(f.type===0)d||(s+="/"),s+=f.value.replace(kx,"\\$&"),h+=40;else if(f.type===1){const{value:v,repeatable:x,optional:m,regexp:p}=f;r.push({name:v,repeatable:x,optional:m});const A=p||Uf;if(A!==Uf){h+=10;try{new RegExp(`(${A})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${v}" (${A}): `+b.message)}}let E=x?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;d||(E=m&&c.length<2?`(?:/${E})`:"/"+E),m&&(E+="?"),s+=E,h+=20,m&&(h+=-8),x&&(h+=-20),A===".*"&&(h+=-50)}u.push(h)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",v=r[f-1];d[v.name]=h&&v.repeatable?h.split("/"):h}return d}function l(c){let u="",d=!1;for(const f of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===0)u+=h.value;else if(h.type===1){const{value:v,repeatable:x,optional:m}=h,p=v in c?c[v]:"";if(Qn(p)&&!x)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const A=Qn(p)?p.join("/"):p;if(!A)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${v}"`);u+=A}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function Hx(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function km(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=Hx(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(Of(i))return 1;if(Of(s))return-1}return s.length-i.length}function Of(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Vx={type:0,value:""},Gx=/[a-zA-Z0-9_]/;function Wx(t){if(!t)return[[]];if(t==="/")return[[Vx]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):f();break;case 4:f(),n=i;break;case 1:l==="("?n=2:Gx.test(l)?f():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),s}function Xx(t,e,n){const i=zx(Wx(t.path),n),s=dt(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function $x(t,e){const n=[],i=new Map;e=kf({strict:!1,end:!0,sensitive:!1},e);function s(d){return i.get(d)}function r(d,f,h){const v=!h,x=Ff(d);x.aliasOf=h&&h.record;const m=kf(e,d),p=[x];if("alias"in d){const b=typeof d.alias=="string"?[d.alias]:d.alias;for(const D of b)p.push(Ff(dt({},x,{components:h?h.record.components:x.components,path:D,aliasOf:h?h.record:x})))}let A,E;for(const b of p){const{path:D}=b;if(f&&D[0]!=="/"){const C=f.record.path,O=C[C.length-1]==="/"?"":"/";b.path=f.record.path+(D&&O+D)}if(A=Xx(b,f,m),h?h.alias.push(A):(E=E||A,E!==A&&E.alias.push(A),v&&d.name&&!Bf(A)&&o(d.name)),zm(A)&&l(A),x.children){const C=x.children;for(let O=0;O<C.length;O++)r(C[O],A,h&&h.children[O])}h=h||A}return E?()=>{o(E)}:Eo}function o(d){if(Fm(d)){const f=i.get(d);f&&(i.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const f=Yx(d,n);n.splice(f,0,d),d.record.name&&!Bf(d)&&i.set(d.record.name,d)}function c(d,f){let h,v={},x,m;if("name"in d&&d.name){if(h=i.get(d.name),!h)throw Wr(1,{location:d});m=h.record.name,v=dt(Nf(f.params,h.keys.filter(E=>!E.optional).concat(h.parent?h.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),d.params&&Nf(d.params,h.keys.map(E=>E.name))),x=h.stringify(v)}else if(d.path!=null)x=d.path,h=n.find(E=>E.re.test(x)),h&&(v=h.parse(x),m=h.record.name);else{if(h=f.name?i.get(f.name):n.find(E=>E.re.test(f.path)),!h)throw Wr(1,{location:d,currentLocation:f});m=h.record.name,v=dt({},f.params,d.params),x=h.stringify(v)}const p=[];let A=h;for(;A;)p.unshift(A.record),A=A.parent;return{name:m,path:x,params:v,matched:p,meta:jx(p)}}t.forEach(d=>r(d));function u(){n.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Nf(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Ff(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:qx(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function qx(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Bf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function jx(t){return t.reduce((e,n)=>dt(e,n.meta),{})}function kf(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function Yx(t,e){let n=0,i=e.length;for(;n!==i;){const r=n+i>>1;km(t,e[r])<0?i=r:n=r+1}const s=Kx(t);return s&&(i=e.lastIndexOf(s,i-1)),i}function Kx(t){let e=t;for(;e=e.parent;)if(zm(e)&&km(t,e)===0)return e}function zm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Zx(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Dm," "),o=r.indexOf("="),a=Io(o<0?r:r.slice(0,o)),l=o<0?null:Io(r.slice(o+1));if(a in e){let c=e[a];Qn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function zf(t){let e="";for(let n in t){const i=t[n];if(n=_x(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Qn(i)?i.map(r=>r&&Qc(r)):[i&&Qc(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Qx(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Qn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const Jx=Symbol(""),Hf=Symbol(""),hd=Symbol(""),Hm=Symbol(""),eu=Symbol("");function co(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ki(t,e,n,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(Wr(4,{from:n,to:e})):f instanceof Error?l(f):Fx(f)?l(Wr(2,{from:e,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=r(()=>t.call(i&&i.instances[s],e,n,c));let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(f=>l(f))})}function ic(t,e,n,i,s=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Rm(l)){const u=(l.__vccOpts||l)[e];u&&r.push(Ki(u,n,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=ox(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const h=(d.__vccOpts||d)[e];return h&&Ki(h,n,i,o,a,s)()}))}}return r}function Vf(t){const e=Oi(hd),n=Oi(Hm),i=Qt(()=>{const l=cs(t.to);return e.resolve(l)}),s=Qt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(Gr.bind(null,u));if(f>-1)return f;const h=Gf(l[c-2]);return c>1&&Gf(u)===h&&d[d.length-1].path!==h?d.findIndex(Gr.bind(null,l[c-2])):f}),r=Qt(()=>s.value>-1&&sy(n.params,i.value.params)),o=Qt(()=>s.value>-1&&s.value===n.matched.length-1&&Om(n.params,i.value.params));function a(l={}){if(iy(l)){const c=e[cs(t.replace)?"replace":"push"](cs(t.to)).catch(Eo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Qt(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function ey(t){return t.length===1?t[0]:t}const ty=Qp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Vf,setup(t,{slots:e}){const n=Xo(Vf(t)),{options:i}=Oi(hd),s=Qt(()=>({[Wf(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Wf(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&ey(e.default(n));return t.custom?r:Em("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),ny=ty;function iy(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function sy(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Qn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Gf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Wf=(t,e,n)=>t??e??n,ry=Qp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Oi(eu),s=Qt(()=>t.route||i.value),r=Oi(Hf,0),o=Qt(()=>{let c=cs(r);const{matched:u}=s.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=Qt(()=>s.value.matched[o.value]);Va(Hf,Qt(()=>o.value+1)),Va(Jx,a),Va(eu,s);const l=ot();return Kn(()=>[l.value,a.value,t.name],([c,u,d],[f,h,v])=>{u&&(u.instances[d]=c,h&&h!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!Gr(u,h)||!f)&&(u.enterCallbacks[d]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,d=a.value,f=d&&d.components[u];if(!f)return Xf(n.default,{Component:f,route:c});const h=d.props[u],v=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=Em(f,dt({},v,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Xf(n.default,{Component:m,route:c})||m}}});function Xf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Vm=ry;function oy(t){const e=$x(t.routes,t),n=t.parseQuery||Zx,i=t.stringifyQuery||zf,s=t.history,r=co(),o=co(),a=co(),l=gv(zi);let c=zi;gr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=tc.bind(null,F=>""+F),d=tc.bind(null,xx),f=tc.bind(null,Io);function h(F,ue){let ae,pe;return Fm(F)?(ae=e.getRecordMatcher(F),pe=ue):pe=F,e.addRoute(pe,ae)}function v(F){const ue=e.getRecordMatcher(F);ue&&e.removeRoute(ue)}function x(){return e.getRoutes().map(F=>F.record)}function m(F){return!!e.getRecordMatcher(F)}function p(F,ue){if(ue=dt({},ue||l.value),typeof F=="string"){const B=nc(n,F,ue.path),X=e.resolve({path:B.path},ue),ne=s.createHref(B.fullPath);return dt(B,X,{params:f(X.params),hash:Io(B.hash),redirectedFrom:void 0,href:ne})}let ae;if(F.path!=null)ae=dt({},F,{path:nc(n,F.path,ue.path).path});else{const B=dt({},F.params);for(const X in B)B[X]==null&&delete B[X];ae=dt({},F,{params:d(B)}),ue.params=d(ue.params)}const pe=e.resolve(ae,ue),ze=F.hash||"";pe.params=u(f(pe.params));const T=bx(i,dt({},F,{hash:gx(ze),path:pe.path})),_=s.createHref(T);return dt({fullPath:T,hash:ze,query:i===zf?Qx(F.query):F.query||{}},pe,{redirectedFrom:void 0,href:_})}function A(F){return typeof F=="string"?nc(n,F,l.value.path):dt({},F)}function E(F,ue){if(c!==F)return Wr(8,{from:ue,to:F})}function b(F){return O(F)}function D(F){return b(dt(A(F),{replace:!0}))}function C(F){const ue=F.matched[F.matched.length-1];if(ue&&ue.redirect){const{redirect:ae}=ue;let pe=typeof ae=="function"?ae(F):ae;return typeof pe=="string"&&(pe=pe.includes("?")||pe.includes("#")?pe=A(pe):{path:pe},pe.params={}),dt({query:F.query,hash:F.hash,params:pe.path!=null?{}:F.params},pe)}}function O(F,ue){const ae=c=p(F),pe=l.value,ze=F.state,T=F.force,_=F.replace===!0,B=C(ae);if(B)return O(dt(A(B),{state:typeof B=="object"?dt({},ze,B.state):ze,force:T,replace:_}),ue||ae);const X=ae;X.redirectedFrom=ue;let ne;return!T&&Sx(i,pe,ae)&&(ne=Wr(16,{to:X,from:pe}),De(pe,pe,!0,!1)),(ne?Promise.resolve(ne):S(X,pe)).catch($=>yi($)?yi($,2)?$:Se($):q($,X,pe)).then($=>{if($){if(yi($,2))return O(dt({replace:_},A($.to),{state:typeof $.to=="object"?dt({},ze,$.to.state):ze,force:T}),ue||X)}else $=K(X,pe,!0,_,ze);return R(X,pe,$),$})}function U(F,ue){const ae=E(F,ue);return ae?Promise.reject(ae):Promise.resolve()}function w(F){const ue=tt.values().next().value;return ue&&typeof ue.runWithContext=="function"?ue.runWithContext(F):F()}function S(F,ue){let ae;const[pe,ze,T]=ay(F,ue);ae=ic(pe.reverse(),"beforeRouteLeave",F,ue);for(const B of pe)B.leaveGuards.forEach(X=>{ae.push(Ki(X,F,ue))});const _=U.bind(null,F,ue);return ae.push(_),xe(ae).then(()=>{ae=[];for(const B of r.list())ae.push(Ki(B,F,ue));return ae.push(_),xe(ae)}).then(()=>{ae=ic(ze,"beforeRouteUpdate",F,ue);for(const B of ze)B.updateGuards.forEach(X=>{ae.push(Ki(X,F,ue))});return ae.push(_),xe(ae)}).then(()=>{ae=[];for(const B of T)if(B.beforeEnter)if(Qn(B.beforeEnter))for(const X of B.beforeEnter)ae.push(Ki(X,F,ue));else ae.push(Ki(B.beforeEnter,F,ue));return ae.push(_),xe(ae)}).then(()=>(F.matched.forEach(B=>B.enterCallbacks={}),ae=ic(T,"beforeRouteEnter",F,ue,w),ae.push(_),xe(ae))).then(()=>{ae=[];for(const B of o.list())ae.push(Ki(B,F,ue));return ae.push(_),xe(ae)}).catch(B=>yi(B,8)?B:Promise.reject(B))}function R(F,ue,ae){a.list().forEach(pe=>w(()=>pe(F,ue,ae)))}function K(F,ue,ae,pe,ze){const T=E(F,ue);if(T)return T;const _=ue===zi,B=gr?history.state:{};ae&&(pe||_?s.replace(F.fullPath,dt({scroll:_&&B&&B.scroll},ze)):s.push(F.fullPath,ze)),l.value=F,De(F,ue,ae,_),Se()}let Z;function te(){Z||(Z=s.listen((F,ue,ae)=>{if(!oe.listening)return;const pe=p(F),ze=C(pe);if(ze){O(dt(ze,{replace:!0,force:!0}),pe).catch(Eo);return}c=pe;const T=l.value;gr&&Dx(Df(T.fullPath,ae.delta),Ll()),S(pe,T).catch(_=>yi(_,12)?_:yi(_,2)?(O(dt(A(_.to),{force:!0}),pe).then(B=>{yi(B,20)&&!ae.delta&&ae.type===Uo.pop&&s.go(-1,!1)}).catch(Eo),Promise.reject()):(ae.delta&&s.go(-ae.delta,!1),q(_,pe,T))).then(_=>{_=_||K(pe,T,!1),_&&(ae.delta&&!yi(_,8)?s.go(-ae.delta,!1):ae.type===Uo.pop&&yi(_,20)&&s.go(-1,!1)),R(pe,T,_)}).catch(Eo)}))}let ce=co(),Q=co(),fe;function q(F,ue,ae){Se(F);const pe=Q.list();return pe.length?pe.forEach(ze=>ze(F,ue,ae)):console.error(F),Promise.reject(F)}function be(){return fe&&l.value!==zi?Promise.resolve():new Promise((F,ue)=>{ce.add([F,ue])})}function Se(F){return fe||(fe=!F,te(),ce.list().forEach(([ue,ae])=>F?ae(F):ue()),ce.reset()),F}function De(F,ue,ae,pe){const{scrollBehavior:ze}=t;if(!gr||!ze)return Promise.resolve();const T=!ae&&Lx(Df(F.fullPath,0))||(pe||!ae)&&history.state&&history.state.scroll||null;return qo().then(()=>ze(F,ue,T)).then(_=>_&&Px(_)).catch(_=>q(_,F,ue))}const Fe=F=>s.go(F);let it;const tt=new Set,oe={currentRoute:l,listening:!0,addRoute:h,removeRoute:v,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:x,resolve:p,options:t,push:b,replace:D,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Q.add,isReady:be,install(F){const ue=this;F.component("RouterLink",ny),F.component("RouterView",Vm),F.config.globalProperties.$router=ue,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>cs(l)}),gr&&!it&&l.value===zi&&(it=!0,b(s.location).catch(ze=>{}));const ae={};for(const ze in zi)Object.defineProperty(ae,ze,{get:()=>l.value[ze],enumerable:!0});F.provide(hd,ue),F.provide(Hm,Vp(ae)),F.provide(eu,l);const pe=F.unmount;tt.add(F),F.unmount=function(){tt.delete(F),tt.size<1&&(c=zi,Z&&Z(),Z=null,l.value=zi,it=!1,fe=!1),pe()}}};function xe(F){return F.reduce((ue,ae)=>ue.then(()=>w(ae)),Promise.resolve())}return oe}function ay(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Gr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Gr(c,l))||s.push(l))}return[n,i,s]}const Yo=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},ly={id:"app"},cy={class:"app-header"},uy={class:"header-content"},dy={class:"header-actions"},fy={class:"main-content"},hy={__name:"App",setup(t){console.log("App.vue");const e=ot(!1);return Jr(()=>{localStorage.getItem("darkMode")==="true"&&(e.value=!0,document.body.classList.add("dark-mode"))}),(n,i)=>{const s=kv("RouterLink");return wt(),Dt("div",ly,[W("header",cy,[W("div",uy,[i[3]||(i[3]=W("div",{class:"logo-section"},[W("h1",{class:"app-title"},"Miyuki Beads Designer")],-1)),W("div",dy,[Vt(s,{to:"/"},{default:Ha(()=>i[0]||(i[0]=[Xa("Flat Grid")])),_:1}),Vt(s,{to:"/weaving-grid"},{default:Ha(()=>i[1]||(i[1]=[Xa("Weaving Grid")])),_:1}),Vt(s,{to:"/beadwork-pattern"},{default:Ha(()=>i[2]||(i[2]=[Xa("Beadwork Pattern")])),_:1})])])]),W("main",fy,[Vt(cs(Vm))])])}}},py=Yo(hy,[["__scopeId","data-v-0080eea3"]]),my="modulepreload",gy=function(t){return"/"+t},$f={},pa=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){let o=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=o(n.map(c=>{if(c=gy(c),c in $f)return;$f[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":my,u||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((h,v)=>{f.addEventListener("load",h),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};/*!
* sweetalert2 v11.22.3
* Released under the MIT License.
*/function Gm(t,e,n){if(typeof t=="function"?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}function _y(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function qf(t,e){return t.get(Gm(t,e))}function vy(t,e,n){_y(t,e),e.set(t,n)}function xy(t,e,n){return t.set(Gm(t,e),n),n}const yy=100,ke={},wy=()=>{ke.previousActiveElement instanceof HTMLElement?(ke.previousActiveElement.focus(),ke.previousActiveElement=null):document.body&&document.body.focus()},by=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,i=window.scrollY;ke.restoreFocusTimeout=setTimeout(()=>{wy(),e()},yy),window.scrollTo(n,i)}),Wm="swal2-",Sy=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],se=Sy.reduce((t,e)=>(t[e]=Wm+e,t),{}),My=["success","warning","info","question","error"],cl=My.reduce((t,e)=>(t[e]=Wm+e,t),{}),Xm="SweetAlert2:",pd=t=>t.charAt(0).toUpperCase()+t.slice(1),un=t=>{console.warn(`${Xm} ${typeof t=="object"?t.join(" "):t}`)},Ks=t=>{console.error(`${Xm} ${t}`)},jf=[],Ey=t=>{jf.includes(t)||(jf.push(t),un(t))},$m=(t,e=null)=>{Ey(`"${t}" is deprecated and will be removed in the next major release.${e?` Use "${e}" instead.`:""}`)},Il=t=>typeof t=="function"?t():t,md=t=>t&&typeof t.toPromise=="function",Ko=t=>md(t)?t.toPromise():Promise.resolve(t),gd=t=>t&&Promise.resolve(t)===t,dn=()=>document.body.querySelector(`.${se.container}`),Zo=t=>{const e=dn();return e?e.querySelector(t):null},Rn=t=>Zo(`.${t}`),lt=()=>Rn(se.popup),eo=()=>Rn(se.icon),Ty=()=>Rn(se["icon-content"]),qm=()=>Rn(se.title),_d=()=>Rn(se["html-container"]),jm=()=>Rn(se.image),vd=()=>Rn(se["progress-steps"]),Ul=()=>Rn(se["validation-message"]),mi=()=>Zo(`.${se.actions} .${se.confirm}`),to=()=>Zo(`.${se.actions} .${se.cancel}`),Zs=()=>Zo(`.${se.actions} .${se.deny}`),Ay=()=>Rn(se["input-label"]),no=()=>Zo(`.${se.loader}`),Qo=()=>Rn(se.actions),Ym=()=>Rn(se.footer),Ol=()=>Rn(se["timer-progress-bar"]),xd=()=>Rn(se.close),Cy=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,yd=()=>{const t=lt();if(!t)return[];const e=t.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),n=Array.from(e).sort((r,o)=>{const a=parseInt(r.getAttribute("tabindex")||"0"),l=parseInt(o.getAttribute("tabindex")||"0");return a>l?1:a<l?-1:0}),i=t.querySelectorAll(Cy),s=Array.from(i).filter(r=>r.getAttribute("tabindex")!=="-1");return[...new Set(n.concat(s))].filter(r=>mn(r))},wd=()=>Fi(document.body,se.shown)&&!Fi(document.body,se["toast-shown"])&&!Fi(document.body,se["no-backdrop"]),Nl=()=>{const t=lt();return t?Fi(t,se.toast):!1},Ry=()=>{const t=lt();return t?t.hasAttribute("data-loading"):!1},Pn=(t,e)=>{if(t.textContent="",e){const i=new DOMParser().parseFromString(e,"text/html"),s=i.querySelector("head");s&&Array.from(s.childNodes).forEach(o=>{t.appendChild(o)});const r=i.querySelector("body");r&&Array.from(r.childNodes).forEach(o=>{o instanceof HTMLVideoElement||o instanceof HTMLAudioElement?t.appendChild(o.cloneNode(!0)):t.appendChild(o)})}},Fi=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let i=0;i<n.length;i++)if(!t.classList.contains(n[i]))return!1;return!0},Py=(t,e)=>{Array.from(t.classList).forEach(n=>{!Object.values(se).includes(n)&&!Object.values(cl).includes(n)&&!Object.values(e.showClass||{}).includes(n)&&t.classList.remove(n)})},Cn=(t,e,n)=>{if(Py(t,e),!e.customClass)return;const i=e.customClass[n];if(i){if(typeof i!="string"&&!i.forEach){un(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof i}"`);return}ct(t,i)}},Fl=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${se.popup} > .${se[e]}`);case"checkbox":return t.querySelector(`.${se.popup} > .${se.checkbox} input`);case"radio":return t.querySelector(`.${se.popup} > .${se.radio} input:checked`)||t.querySelector(`.${se.popup} > .${se.radio} input:first-child`);case"range":return t.querySelector(`.${se.popup} > .${se.range} input`);default:return t.querySelector(`.${se.popup} > .${se.input}`)}},Km=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},Zm=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(i=>{Array.isArray(t)?t.forEach(s=>{n?s.classList.add(i):s.classList.remove(i)}):n?t.classList.add(i):t.classList.remove(i)}))},ct=(t,e)=>{Zm(t,e,!0)},Bn=(t,e)=>{Zm(t,e,!1)},os=(t,e)=>{const n=Array.from(t.children);for(let i=0;i<n.length;i++){const s=n[i];if(s instanceof HTMLElement&&Fi(s,e))return s}},Vs=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style.setProperty(e,typeof n=="number"?`${n}px`:n):t.style.removeProperty(e)},Wt=(t,e="flex")=>{t&&(t.style.display=e)},tn=t=>{t&&(t.style.display="none")},bd=(t,e="block")=>{t&&new MutationObserver(()=>{Jo(t,t.innerHTML,e)}).observe(t,{childList:!0,subtree:!0})},Yf=(t,e,n,i)=>{const s=t.querySelector(e);s&&s.style.setProperty(n,i)},Jo=(t,e,n="flex")=>{e?Wt(t,n):tn(t)},mn=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),Dy=()=>!mn(mi())&&!mn(Zs())&&!mn(to()),tu=t=>t.scrollHeight>t.clientHeight,Ly=(t,e)=>{let n=t;for(;n&&n!==e;){if(tu(n))return!0;n=n.parentElement}return!1},Qm=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),i=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||i>0},Sd=(t,e=!1)=>{const n=Ol();n&&mn(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},Iy=()=>{const t=Ol();if(!t)return;const e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),i=e/n*100;t.style.width=`${i}%`},Uy=()=>typeof window>"u"||typeof document>"u",Oy=`
 <div aria-labelledby="${se.title}" aria-describedby="${se["html-container"]}" class="${se.popup}" tabindex="-1">
   <button type="button" class="${se.close}"></button>
   <ul class="${se["progress-steps"]}"></ul>
   <div class="${se.icon}"></div>
   <img class="${se.image}" />
   <h2 class="${se.title}" id="${se.title}"></h2>
   <div class="${se["html-container"]}" id="${se["html-container"]}"></div>
   <input class="${se.input}" id="${se.input}" />
   <input type="file" class="${se.file}" />
   <div class="${se.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${se.select}" id="${se.select}"></select>
   <div class="${se.radio}"></div>
   <label class="${se.checkbox}">
     <input type="checkbox" id="${se.checkbox}" />
     <span class="${se.label}"></span>
   </label>
   <textarea class="${se.textarea}" id="${se.textarea}"></textarea>
   <div class="${se["validation-message"]}" id="${se["validation-message"]}"></div>
   <div class="${se.actions}">
     <div class="${se.loader}"></div>
     <button type="button" class="${se.confirm}"></button>
     <button type="button" class="${se.deny}"></button>
     <button type="button" class="${se.cancel}"></button>
   </div>
   <div class="${se.footer}"></div>
   <div class="${se["timer-progress-bar-container"]}">
     <div class="${se["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),Ny=()=>{const t=dn();return t?(t.remove(),Bn([document.documentElement,document.body],[se["no-backdrop"],se["toast-shown"],se["has-column"]]),!0):!1},ws=()=>{ke.currentInstance.resetValidationMessage()},Fy=()=>{const t=lt(),e=os(t,se.input),n=os(t,se.file),i=t.querySelector(`.${se.range} input`),s=t.querySelector(`.${se.range} output`),r=os(t,se.select),o=t.querySelector(`.${se.checkbox} input`),a=os(t,se.textarea);e.oninput=ws,n.onchange=ws,r.onchange=ws,o.onchange=ws,a.oninput=ws,i.oninput=()=>{ws(),s.value=i.value},i.onchange=()=>{ws(),s.value=i.value}},By=t=>typeof t=="string"?document.querySelector(t):t,ky=t=>{const e=lt();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},zy=t=>{window.getComputedStyle(t).direction==="rtl"&&ct(dn(),se.rtl)},Hy=t=>{const e=Ny();if(Uy()){Ks("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=se.container,e&&ct(n,se["no-transition"]),Pn(n,Oy),n.dataset.swal2Theme=t.theme;const i=By(t.target);i.appendChild(n),t.topLayer&&(n.setAttribute("popover",""),n.showPopover()),ky(t),zy(i),Fy()},Md=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?Vy(t,e):t&&Pn(e,t)},Vy=(t,e)=>{t.jquery?Gy(e,t):Pn(e,t.toString())},Gy=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},Wy=(t,e)=>{const n=Qo(),i=no();!n||!i||(!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?tn(n):Wt(n),Cn(n,e,"actions"),Xy(n,i,e),Pn(i,e.loaderHtml||""),Cn(i,e,"loader"))};function Xy(t,e,n){const i=mi(),s=Zs(),r=to();!i||!s||!r||(rc(i,"confirm",n),rc(s,"deny",n),rc(r,"cancel",n),$y(i,s,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,i),t.insertBefore(s,i)):(t.insertBefore(r,e),t.insertBefore(s,e),t.insertBefore(i,e))))}function $y(t,e,n,i){if(!i.buttonsStyling){Bn([t,e,n],se.styled);return}ct([t,e,n],se.styled),i.confirmButtonColor&&t.style.setProperty("--swal2-confirm-button-background-color",i.confirmButtonColor),i.denyButtonColor&&e.style.setProperty("--swal2-deny-button-background-color",i.denyButtonColor),i.cancelButtonColor&&n.style.setProperty("--swal2-cancel-button-background-color",i.cancelButtonColor),sc(t),sc(e),sc(n)}function sc(t){const e=window.getComputedStyle(t);if(e.getPropertyValue("--swal2-action-button-focus-box-shadow"))return;const n=e.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/,"rgba($1, $2, $3, 0.5)");t.style.setProperty("--swal2-action-button-focus-box-shadow",e.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/,` ${n}`))}function rc(t,e,n){const i=pd(e);Jo(t,n[`show${i}Button`],"inline-block"),Pn(t,n[`${e}ButtonText`]||""),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]||""),t.className=se[e],Cn(t,n,`${e}Button`)}const qy=(t,e)=>{const n=xd();n&&(Pn(n,e.closeButtonHtml||""),Cn(n,e,"closeButton"),Jo(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel||""))},jy=(t,e)=>{const n=dn();n&&(Yy(n,e.backdrop),Ky(n,e.position),Zy(n,e.grow),Cn(n,e,"container"))};function Yy(t,e){typeof e=="string"?t.style.background=e:e||ct([document.documentElement,document.body],se["no-backdrop"])}function Ky(t,e){e&&(e in se?ct(t,se[e]):(un('The "position" parameter is not valid, defaulting to "center"'),ct(t,se.center)))}function Zy(t,e){e&&ct(t,se[`grow-${e}`])}var St={innerParams:new WeakMap,domCache:new WeakMap};const Qy=["input","file","range","select","radio","checkbox","textarea"],Jy=(t,e)=>{const n=lt();if(!n)return;const i=St.innerParams.get(t),s=!i||e.input!==i.input;Qy.forEach(r=>{const o=os(n,se[r]);o&&(nw(r,e.inputAttributes),o.className=se[r],s&&tn(o))}),e.input&&(s&&ew(e),iw(e))},ew=t=>{if(!t.input)return;if(!Pt[t.input]){Ks(`Unexpected type of input! Expected ${Object.keys(Pt).join(" | ")}, got "${t.input}"`);return}const e=Jm(t.input);if(!e)return;const n=Pt[t.input](e,t);Wt(e),t.inputAutoFocus&&setTimeout(()=>{Km(n)})},tw=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["id","type","value","style"].includes(n)||t.removeAttribute(n)}},nw=(t,e)=>{const n=lt();if(!n)return;const i=Fl(n,t);if(i){tw(i);for(const s in e)i.setAttribute(s,e[s])}},iw=t=>{if(!t.input)return;const e=Jm(t.input);e&&Cn(e,t,"input")},Ed=(t,e)=>{!t.placeholder&&e.inputPlaceholder&&(t.placeholder=e.inputPlaceholder)},ea=(t,e,n)=>{if(n.inputLabel){const i=document.createElement("label"),s=se["input-label"];i.setAttribute("for",t.id),i.className=s,typeof n.customClass=="object"&&ct(i,n.customClass.inputLabel),i.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",i)}},Jm=t=>{const e=lt();if(e)return os(e,se[t]||se.input)},ul=(t,e)=>{["string","number"].includes(typeof e)?t.value=`${e}`:gd(e)||un(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e}"`)},Pt={};Pt.text=Pt.email=Pt.password=Pt.number=Pt.tel=Pt.url=Pt.search=Pt.date=Pt["datetime-local"]=Pt.time=Pt.week=Pt.month=(t,e)=>(ul(t,e.inputValue),ea(t,t,e),Ed(t,e),t.type=e.input,t);Pt.file=(t,e)=>(ea(t,t,e),Ed(t,e),t);Pt.range=(t,e)=>{const n=t.querySelector("input"),i=t.querySelector("output");return ul(n,e.inputValue),n.type=e.input,ul(i,e.inputValue),ea(n,t,e),t};Pt.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");Pn(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return ea(t,t,e),t};Pt.radio=t=>(t.textContent="",t);Pt.checkbox=(t,e)=>{const n=Fl(lt(),"checkbox");n.value="1",n.checked=!!e.inputValue;const i=t.querySelector("span");return Pn(i,e.inputPlaceholder||e.inputLabel),n};Pt.textarea=(t,e)=>{ul(t,e.inputValue),Ed(t,e),ea(t,t,e);const n=i=>parseInt(window.getComputedStyle(i).marginLeft)+parseInt(window.getComputedStyle(i).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const i=parseInt(window.getComputedStyle(lt()).width),s=()=>{if(!document.body.contains(t))return;const r=t.offsetWidth+n(t);r>i?lt().style.width=`${r}px`:Vs(lt(),"width",e.width)};new MutationObserver(s).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const sw=(t,e)=>{const n=_d();n&&(bd(n),Cn(n,e,"htmlContainer"),e.html?(Md(e.html,n),Wt(n,"block")):e.text?(n.textContent=e.text,Wt(n,"block")):tn(n),Jy(t,e))},rw=(t,e)=>{const n=Ym();n&&(bd(n),Jo(n,e.footer,"block"),e.footer&&Md(e.footer,n),Cn(n,e,"footer"))},ow=(t,e)=>{const n=St.innerParams.get(t),i=eo();if(!i)return;if(n&&e.icon===n.icon){Zf(i,e),Kf(i,e);return}if(!e.icon&&!e.iconHtml){tn(i);return}if(e.icon&&Object.keys(cl).indexOf(e.icon)===-1){Ks(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),tn(i);return}Wt(i),Zf(i,e),Kf(i,e),ct(i,e.showClass&&e.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",eg)},Kf=(t,e)=>{for(const[n,i]of Object.entries(cl))e.icon!==n&&Bn(t,i);ct(t,e.icon&&cl[e.icon]),cw(t,e),eg(),Cn(t,e,"icon")},eg=()=>{const t=lt();if(!t)return;const e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let i=0;i<n.length;i++)n[i].style.backgroundColor=e},aw=t=>`
  ${t.animation?'<div class="swal2-success-circular-line-left"></div>':""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${t.animation?'<div class="swal2-success-fix"></div>':""}
  ${t.animation?'<div class="swal2-success-circular-line-right"></div>':""}
`,lw=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Zf=(t,e)=>{if(!e.icon&&!e.iconHtml)return;let n=t.innerHTML,i="";e.iconHtml?i=Qf(e.iconHtml):e.icon==="success"?(i=aw(e),n=n.replace(/ style=".*?"/g,"")):e.icon==="error"?i=lw:e.icon&&(i=Qf({question:"?",warning:"!",info:"i"}[e.icon])),n.trim()!==i.trim()&&Pn(t,i)},cw=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Yf(t,n,"background-color",e.iconColor);Yf(t,".swal2-success-ring","border-color",e.iconColor)}},Qf=t=>`<div class="${se["icon-content"]}">${t}</div>`,uw=(t,e)=>{const n=jm();if(n){if(!e.imageUrl){tn(n);return}Wt(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt||""),Vs(n,"width",e.imageWidth),Vs(n,"height",e.imageHeight),n.className=se.image,Cn(n,e,"image")}};let Td=!1,tg=0,ng=0,ig=0,sg=0;const dw=t=>{t.addEventListener("mousedown",dl),document.body.addEventListener("mousemove",fl),t.addEventListener("mouseup",hl),t.addEventListener("touchstart",dl),document.body.addEventListener("touchmove",fl),t.addEventListener("touchend",hl)},fw=t=>{t.removeEventListener("mousedown",dl),document.body.removeEventListener("mousemove",fl),t.removeEventListener("mouseup",hl),t.removeEventListener("touchstart",dl),document.body.removeEventListener("touchmove",fl),t.removeEventListener("touchend",hl)},dl=t=>{const e=lt();if(t.target===e||eo().contains(t.target)){Td=!0;const n=rg(t);tg=n.clientX,ng=n.clientY,ig=parseInt(e.style.insetInlineStart)||0,sg=parseInt(e.style.insetBlockStart)||0,ct(e,"swal2-dragging")}},fl=t=>{const e=lt();if(Td){let{clientX:n,clientY:i}=rg(t);e.style.insetInlineStart=`${ig+(n-tg)}px`,e.style.insetBlockStart=`${sg+(i-ng)}px`}},hl=()=>{const t=lt();Td=!1,Bn(t,"swal2-dragging")},rg=t=>{let e=0,n=0;return t.type.startsWith("mouse")?(e=t.clientX,n=t.clientY):t.type.startsWith("touch")&&(e=t.touches[0].clientX,n=t.touches[0].clientY),{clientX:e,clientY:n}},hw=(t,e)=>{const n=dn(),i=lt();if(!(!n||!i)){if(e.toast){Vs(n,"width",e.width),i.style.width="100%";const s=no();s&&i.insertBefore(s,eo())}else Vs(i,"width",e.width);Vs(i,"padding",e.padding),e.color&&(i.style.color=e.color),e.background&&(i.style.background=e.background),tn(Ul()),pw(i,e),e.draggable&&!e.toast?(ct(i,se.draggable),dw(i)):(Bn(i,se.draggable),fw(i))}},pw=(t,e)=>{const n=e.showClass||{};t.className=`${se.popup} ${mn(t)?n.popup:""}`,e.toast?(ct([document.documentElement,document.body],se["toast-shown"]),ct(t,se.toast)):ct(t,se.modal),Cn(t,e,"popup"),typeof e.customClass=="string"&&ct(t,e.customClass),e.icon&&ct(t,se[`icon-${e.icon}`])},mw=(t,e)=>{const n=vd();if(!n)return;const{progressSteps:i,currentProgressStep:s}=e;if(!i||i.length===0||s===void 0){tn(n);return}Wt(n),n.textContent="",s>=i.length&&un("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),i.forEach((r,o)=>{const a=gw(r);if(n.appendChild(a),o===s&&ct(a,se["active-progress-step"]),o!==i.length-1){const l=_w(e);n.appendChild(l)}})},gw=t=>{const e=document.createElement("li");return ct(e,se["progress-step"]),Pn(e,t),e},_w=t=>{const e=document.createElement("li");return ct(e,se["progress-step-line"]),t.progressStepsDistance&&Vs(e,"width",t.progressStepsDistance),e},vw=(t,e)=>{const n=qm();n&&(bd(n),Jo(n,e.title||e.titleText,"block"),e.title&&Md(e.title,n),e.titleText&&(n.innerText=e.titleText),Cn(n,e,"title"))},og=(t,e)=>{hw(t,e),jy(t,e),mw(t,e),ow(t,e),uw(t,e),vw(t,e),qy(t,e),sw(t,e),Wy(t,e),rw(t,e);const n=lt();typeof e.didRender=="function"&&n&&e.didRender(n),ke.eventEmitter.emit("didRender",n)},xw=()=>mn(lt()),ag=()=>{var t;return(t=mi())===null||t===void 0?void 0:t.click()},yw=()=>{var t;return(t=Zs())===null||t===void 0?void 0:t.click()},ww=()=>{var t;return(t=to())===null||t===void 0?void 0:t.click()},io=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),lg=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},bw=(t,e,n)=>{lg(t),e.toast||(t.keydownHandler=i=>Mw(e,i,n),t.keydownTarget=e.keydownListenerCapture?window:lt(),t.keydownListenerCapture=e.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)},nu=(t,e)=>{var n;const i=yd();if(i.length){t=t+e,t===-2&&(t=i.length-1),t===i.length?t=0:t===-1&&(t=i.length-1),i[t].focus();return}(n=lt())===null||n===void 0||n.focus()},cg=["ArrowRight","ArrowDown"],Sw=["ArrowLeft","ArrowUp"],Mw=(t,e,n)=>{t&&(e.isComposing||e.keyCode===229||(t.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?Ew(e,t):e.key==="Tab"?Tw(e):[...cg,...Sw].includes(e.key)?Aw(e.key):e.key==="Escape"&&Cw(e,t,n)))},Ew=(t,e)=>{if(!Il(e.allowEnterKey))return;const n=Fl(lt(),e.input);if(t.target&&n&&t.target instanceof HTMLElement&&t.target.outerHTML===n.outerHTML){if(["textarea","file"].includes(e.input))return;ag(),t.preventDefault()}},Tw=t=>{const e=t.target,n=yd();let i=-1;for(let s=0;s<n.length;s++)if(e===n[s]){i=s;break}t.shiftKey?nu(i,-1):nu(i,1),t.stopPropagation(),t.preventDefault()},Aw=t=>{const e=Qo(),n=mi(),i=Zs(),s=to();if(!e||!n||!i||!s)return;const r=[n,i,s];if(document.activeElement instanceof HTMLElement&&!r.includes(document.activeElement))return;const o=cg.includes(t)?"nextElementSibling":"previousElementSibling";let a=document.activeElement;if(a){for(let l=0;l<e.children.length;l++){if(a=a[o],!a)return;if(a instanceof HTMLButtonElement&&mn(a))break}a instanceof HTMLButtonElement&&a.focus()}},Cw=(t,e,n)=>{t.preventDefault(),Il(e.allowEscapeKey)&&n(io.esc)};var Xr={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const Rw=()=>{const t=dn();Array.from(document.body.children).forEach(n=>{n.contains(t)||(n.hasAttribute("aria-hidden")&&n.setAttribute("data-previous-aria-hidden",n.getAttribute("aria-hidden")||""),n.setAttribute("aria-hidden","true"))})},ug=()=>{Array.from(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||""),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},dg=typeof window<"u"&&!!window.GestureEvent,Pw=()=>{if(dg&&!Fi(document.body,se.iosfix)){const t=document.body.scrollTop;document.body.style.top=`${t*-1}px`,ct(document.body,se.iosfix),Dw()}},Dw=()=>{const t=dn();if(!t)return;let e;t.ontouchstart=n=>{e=Lw(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},Lw=t=>{const e=t.target,n=dn(),i=_d();return!n||!i||Iw(t)||Uw(t)?!1:e===n||!tu(n)&&e instanceof HTMLElement&&!Ly(e,i)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(tu(i)&&i.contains(e))},Iw=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",Uw=t=>t.touches&&t.touches.length>1,Ow=()=>{if(Fi(document.body,se.iosfix)){const t=parseInt(document.body.style.top,10);Bn(document.body,se.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},Nw=()=>{const t=document.createElement("div");t.className=se["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e};let Tr=null;const Fw=t=>{Tr===null&&(document.body.scrollHeight>window.innerHeight||t==="scroll")&&(Tr=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Tr+Nw()}px`)},Bw=()=>{Tr!==null&&(document.body.style.paddingRight=`${Tr}px`,Tr=null)};function fg(t,e,n,i){Nl()?Jf(t,i):(by(n).then(()=>Jf(t,i)),lg(ke)),dg?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),wd()&&(Bw(),Ow(),ug()),kw()}function kw(){Bn([document.documentElement,document.body],[se.shown,se["height-auto"],se["no-backdrop"],se["toast-shown"]])}function as(t){t=Hw(t);const e=Xr.swalPromiseResolve.get(this),n=zw(this);this.isAwaitingPromise?t.isDismissed||(ta(this),e(t)):n&&e(t)}const zw=t=>{const e=lt();if(!e)return!1;const n=St.innerParams.get(t);if(!n||Fi(e,n.hideClass.popup))return!1;Bn(e,n.showClass.popup),ct(e,n.hideClass.popup);const i=dn();return Bn(i,n.showClass.backdrop),ct(i,n.hideClass.backdrop),Vw(t,e,n),!0};function hg(t){const e=Xr.swalPromiseReject.get(this);ta(this),e&&e(t)}const ta=t=>{t.isAwaitingPromise&&(delete t.isAwaitingPromise,St.innerParams.get(t)||t._destroy())},Hw=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),Vw=(t,e,n)=>{var i;const s=dn(),r=Qm(e);typeof n.willClose=="function"&&n.willClose(e),(i=ke.eventEmitter)===null||i===void 0||i.emit("willClose",e),r?Gw(t,e,s,n.returnFocus,n.didClose):fg(t,s,n.returnFocus,n.didClose)},Gw=(t,e,n,i,s)=>{ke.swalCloseEventFinishedCallback=fg.bind(null,t,n,i,s);const r=function(o){if(o.target===e){var a;(a=ke.swalCloseEventFinishedCallback)===null||a===void 0||a.call(ke),delete ke.swalCloseEventFinishedCallback,e.removeEventListener("animationend",r),e.removeEventListener("transitionend",r)}};e.addEventListener("animationend",r),e.addEventListener("transitionend",r)},Jf=(t,e)=>{setTimeout(()=>{var n;typeof e=="function"&&e.bind(t.params)(),(n=ke.eventEmitter)===null||n===void 0||n.emit("didClose"),t._destroy&&t._destroy()})},$r=t=>{let e=lt();if(e||new vn,e=lt(),!e)return;const n=no();Nl()?tn(eo()):Ww(e,t),Wt(n),e.setAttribute("data-loading","true"),e.setAttribute("aria-busy","true"),e.focus()},Ww=(t,e)=>{const n=Qo(),i=no();!n||!i||(!e&&mn(mi())&&(e=mi()),Wt(n),e&&(tn(e),i.setAttribute("data-button-to-replace",e.className),n.insertBefore(i,e)),ct([t,n],se.loading))},Xw=(t,e)=>{e.input==="select"||e.input==="radio"?Kw(t,e):["text","email","number","tel","textarea"].some(n=>n===e.input)&&(md(e.inputValue)||gd(e.inputValue))&&($r(mi()),Zw(t,e))},$w=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return qw(n);case"radio":return jw(n);case"file":return Yw(n);default:return e.inputAutoTrim?n.value.trim():n.value}},qw=t=>t.checked?1:0,jw=t=>t.checked?t.value:null,Yw=t=>t.files&&t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,Kw=(t,e)=>{const n=lt();if(!n)return;const i=s=>{e.input==="select"?Qw(n,pl(s),e):e.input==="radio"&&Jw(n,pl(s),e)};md(e.inputOptions)||gd(e.inputOptions)?($r(mi()),Ko(e.inputOptions).then(s=>{t.hideLoading(),i(s)})):typeof e.inputOptions=="object"?i(e.inputOptions):Ks(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},Zw=(t,e)=>{const n=t.getInput();n&&(tn(n),Ko(e.inputValue).then(i=>{n.value=e.input==="number"?`${parseFloat(i)||0}`:`${i}`,Wt(n),n.focus(),t.hideLoading()}).catch(i=>{Ks(`Error in inputValue promise: ${i}`),n.value="",Wt(n),n.focus(),t.hideLoading()}))};function Qw(t,e,n){const i=os(t,se.select);if(!i)return;const s=(r,o,a)=>{const l=document.createElement("option");l.value=a,Pn(l,o),l.selected=pg(a,n.inputValue),r.appendChild(l)};e.forEach(r=>{const o=r[0],a=r[1];if(Array.isArray(a)){const l=document.createElement("optgroup");l.label=o,l.disabled=!1,i.appendChild(l),a.forEach(c=>s(l,c[1],c[0]))}else s(i,a,o)}),i.focus()}function Jw(t,e,n){const i=os(t,se.radio);if(!i)return;e.forEach(r=>{const o=r[0],a=r[1],l=document.createElement("input"),c=document.createElement("label");l.type="radio",l.name=se.radio,l.value=o,pg(o,n.inputValue)&&(l.checked=!0);const u=document.createElement("span");Pn(u,a),u.className=se.label,c.appendChild(l),c.appendChild(u),i.appendChild(c)});const s=i.querySelectorAll("input");s.length&&s[0].focus()}const pl=t=>{const e=[];return t instanceof Map?t.forEach((n,i)=>{let s=n;typeof s=="object"&&(s=pl(s)),e.push([i,s])}):Object.keys(t).forEach(n=>{let i=t[n];typeof i=="object"&&(i=pl(i)),e.push([n,i])}),e},pg=(t,e)=>!!e&&e.toString()===t.toString(),eb=t=>{const e=St.innerParams.get(t);t.disableButtons(),e.input?mg(t,"confirm"):Cd(t,!0)},tb=t=>{const e=St.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?mg(t,"deny"):Ad(t,!1)},nb=(t,e)=>{t.disableButtons(),e(io.cancel)},mg=(t,e)=>{const n=St.innerParams.get(t);if(!n.input){Ks(`The "input" parameter is needed to be set when using returnInputValueOn${pd(e)}`);return}const i=t.getInput(),s=$w(t,n);n.inputValidator?ib(t,s,e):i&&!i.checkValidity()?(t.enableButtons(),t.showValidationMessage(n.validationMessage||i.validationMessage)):e==="deny"?Ad(t,s):Cd(t,s)},ib=(t,e,n)=>{const i=St.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>Ko(i.inputValidator(e,i.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):n==="deny"?Ad(t,e):Cd(t,e)})},Ad=(t,e)=>{const n=St.innerParams.get(t||void 0);n.showLoaderOnDeny&&$r(Zs()),n.preDeny?(t.isAwaitingPromise=!0,Promise.resolve().then(()=>Ko(n.preDeny(e,n.validationMessage))).then(s=>{s===!1?(t.hideLoading(),ta(t)):t.close({isDenied:!0,value:typeof s>"u"?e:s})}).catch(s=>gg(t||void 0,s))):t.close({isDenied:!0,value:e})},eh=(t,e)=>{t.close({isConfirmed:!0,value:e})},gg=(t,e)=>{t.rejectPromise(e)},Cd=(t,e)=>{const n=St.innerParams.get(t||void 0);n.showLoaderOnConfirm&&$r(),n.preConfirm?(t.resetValidationMessage(),t.isAwaitingPromise=!0,Promise.resolve().then(()=>Ko(n.preConfirm(e,n.validationMessage))).then(s=>{mn(Ul())||s===!1?(t.hideLoading(),ta(t)):eh(t,typeof s>"u"?e:s)}).catch(s=>gg(t||void 0,s))):eh(t,e)};function ml(){const t=St.innerParams.get(this);if(!t)return;const e=St.domCache.get(this);tn(e.loader),Nl()?t.icon&&Wt(eo()):sb(e),Bn([e.popup,e.actions],se.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const sb=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?Wt(e[0],"inline-block"):Dy()&&tn(t.actions)};function _g(){const t=St.innerParams.get(this),e=St.domCache.get(this);return e?Fl(e.popup,t.input):null}function vg(t,e,n){const i=St.domCache.get(t);e.forEach(s=>{i[s].disabled=n})}function xg(t,e){const n=lt();if(!(!n||!t))if(t.type==="radio"){const i=n.querySelectorAll(`[name="${se.radio}"]`);for(let s=0;s<i.length;s++)i[s].disabled=e}else t.disabled=e}function yg(){vg(this,["confirmButton","denyButton","cancelButton"],!1)}function wg(){vg(this,["confirmButton","denyButton","cancelButton"],!0)}function bg(){xg(this.getInput(),!1)}function Sg(){xg(this.getInput(),!0)}function Mg(t){const e=St.domCache.get(this),n=St.innerParams.get(this);Pn(e.validationMessage,t),e.validationMessage.className=se["validation-message"],n.customClass&&n.customClass.validationMessage&&ct(e.validationMessage,n.customClass.validationMessage),Wt(e.validationMessage);const i=this.getInput();i&&(i.setAttribute("aria-invalid","true"),i.setAttribute("aria-describedby",se["validation-message"]),Km(i),ct(i,se.inputerror))}function Eg(){const t=St.domCache.get(this);t.validationMessage&&tn(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),Bn(e,se.inputerror))}const Ar={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0,topLayer:!1},rb=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],ob={allowEnterKey:void 0},ab=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Tg=t=>Object.prototype.hasOwnProperty.call(Ar,t),Ag=t=>rb.indexOf(t)!==-1,Cg=t=>ob[t],lb=t=>{Tg(t)||un(`Unknown parameter "${t}"`)},cb=t=>{ab.includes(t)&&un(`The parameter "${t}" is incompatible with toasts`)},ub=t=>{const e=Cg(t);e&&$m(t,e)},Rg=t=>{t.backdrop===!1&&t.allowOutsideClick&&un('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),t.theme&&!["light","dark","auto","minimal","borderless","embed-iframe","bulma","bulma-light","bulma-dark"].includes(t.theme)&&un(`Invalid theme "${t.theme}"`);for(const e in t)lb(e),t.toast&&cb(e),ub(e)};function Pg(t){const e=dn(),n=lt(),i=St.innerParams.get(this);if(!n||Fi(n,i.hideClass.popup)){un("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const s=db(t),r=Object.assign({},i,s);Rg(r),e.dataset.swal2Theme=r.theme,og(this,r),St.innerParams.set(this,r),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const db=t=>{const e={};return Object.keys(t).forEach(n=>{Ag(n)?e[n]=t[n]:un(`Invalid parameter to update: ${n}`)}),e};function Dg(){const t=St.domCache.get(this),e=St.innerParams.get(this);if(!e){Lg(this);return}t.popup&&ke.swalCloseEventFinishedCallback&&(ke.swalCloseEventFinishedCallback(),delete ke.swalCloseEventFinishedCallback),typeof e.didDestroy=="function"&&e.didDestroy(),ke.eventEmitter.emit("didDestroy"),fb(this)}const fb=t=>{Lg(t),delete t.params,delete ke.keydownHandler,delete ke.keydownTarget,delete ke.currentInstance},Lg=t=>{t.isAwaitingPromise?(oc(St,t),t.isAwaitingPromise=!0):(oc(Xr,t),oc(St,t),delete t.isAwaitingPromise,delete t.disableButtons,delete t.enableButtons,delete t.getInput,delete t.disableInput,delete t.enableInput,delete t.hideLoading,delete t.disableLoading,delete t.showValidationMessage,delete t.resetValidationMessage,delete t.close,delete t.closePopup,delete t.closeModal,delete t.closeToast,delete t.rejectPromise,delete t.update,delete t._destroy)},oc=(t,e)=>{for(const n in t)t[n].delete(e)};var hb=Object.freeze({__proto__:null,_destroy:Dg,close:as,closeModal:as,closePopup:as,closeToast:as,disableButtons:wg,disableInput:Sg,disableLoading:ml,enableButtons:yg,enableInput:bg,getInput:_g,handleAwaitingPromise:ta,hideLoading:ml,rejectPromise:hg,resetValidationMessage:Eg,showValidationMessage:Mg,update:Pg});const pb=(t,e,n)=>{t.toast?mb(t,e,n):(_b(e),vb(e),xb(t,e,n))},mb=(t,e,n)=>{e.popup.onclick=()=>{t&&(gb(t)||t.timer||t.input)||n(io.close)}},gb=t=>!!(t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton);let gl=!1;const _b=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=()=>{},e.target===t.container&&(gl=!0)}}},vb=t=>{t.container.onmousedown=e=>{e.target===t.container&&e.preventDefault(),t.popup.onmouseup=function(n){t.popup.onmouseup=()=>{},(n.target===t.popup||n.target instanceof HTMLElement&&t.popup.contains(n.target))&&(gl=!0)}}},xb=(t,e,n)=>{e.container.onclick=i=>{if(gl){gl=!1;return}i.target===e.container&&Il(t.allowOutsideClick)&&n(io.backdrop)}},yb=t=>typeof t=="object"&&t.jquery,th=t=>t instanceof Element||yb(t),wb=t=>{const e={};return typeof t[0]=="object"&&!th(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,i)=>{const s=t[i];typeof s=="string"||th(s)?e[n]=s:s!==void 0&&Ks(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof s}`)}),e};function bb(...t){return new this(...t)}function Sb(t){class e extends this{_main(i,s){return super._main(i,Object.assign({},t,s))}}return e}const Mb=()=>ke.timeout&&ke.timeout.getTimerLeft(),Ig=()=>{if(ke.timeout)return Iy(),ke.timeout.stop()},Ug=()=>{if(ke.timeout){const t=ke.timeout.start();return Sd(t),t}},Eb=()=>{const t=ke.timeout;return t&&(t.running?Ig():Ug())},Tb=t=>{if(ke.timeout){const e=ke.timeout.increase(t);return Sd(e,!0),e}},Ab=()=>!!(ke.timeout&&ke.timeout.isRunning());let nh=!1;const iu={};function Cb(t="data-swal-template"){iu[t]=this,nh||(document.body.addEventListener("click",Rb),nh=!0)}const Rb=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in iu){const i=e.getAttribute(n);if(i){iu[n].fire({template:i});return}}};class Pb{constructor(){this.events={}}_getHandlersByEventName(e){return typeof this.events[e]>"u"&&(this.events[e]=[]),this.events[e]}on(e,n){const i=this._getHandlersByEventName(e);i.includes(n)||i.push(n)}once(e,n){const i=(...s)=>{this.removeListener(e,i),n.apply(this,s)};this.on(e,i)}emit(e,...n){this._getHandlersByEventName(e).forEach(i=>{try{i.apply(this,n)}catch(s){console.error(s)}})}removeListener(e,n){const i=this._getHandlersByEventName(e),s=i.indexOf(n);s>-1&&i.splice(s,1)}removeAllListeners(e){this.events[e]!==void 0&&(this.events[e].length=0)}reset(){this.events={}}}ke.eventEmitter=new Pb;const Db=(t,e)=>{ke.eventEmitter.on(t,e)},Lb=(t,e)=>{ke.eventEmitter.once(t,e)},Ib=(t,e)=>{if(!t){ke.eventEmitter.reset();return}e?ke.eventEmitter.removeListener(t,e):ke.eventEmitter.removeAllListeners(t)};var Ub=Object.freeze({__proto__:null,argsToParams:wb,bindClickHandler:Cb,clickCancel:ww,clickConfirm:ag,clickDeny:yw,enableLoading:$r,fire:bb,getActions:Qo,getCancelButton:to,getCloseButton:xd,getConfirmButton:mi,getContainer:dn,getDenyButton:Zs,getFocusableElements:yd,getFooter:Ym,getHtmlContainer:_d,getIcon:eo,getIconContent:Ty,getImage:jm,getInputLabel:Ay,getLoader:no,getPopup:lt,getProgressSteps:vd,getTimerLeft:Mb,getTimerProgressBar:Ol,getTitle:qm,getValidationMessage:Ul,increaseTimer:Tb,isDeprecatedParameter:Cg,isLoading:Ry,isTimerRunning:Ab,isUpdatableParameter:Ag,isValidParameter:Tg,isVisible:xw,mixin:Sb,off:Ib,on:Db,once:Lb,resumeTimer:Ug,showLoading:$r,stopTimer:Ig,toggleTimer:Eb});class Ob{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Og=["swal-title","swal-html","swal-footer"],Nb=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return Wb(n),Object.assign(Fb(n),Bb(n),kb(n),zb(n),Hb(n),Vb(n),Gb(n,Og))},Fb=t=>{const e={};return Array.from(t.querySelectorAll("swal-param")).forEach(i=>{Xs(i,["name","value"]);const s=i.getAttribute("name"),r=i.getAttribute("value");!s||!r||(typeof Ar[s]=="boolean"?e[s]=r!=="false":typeof Ar[s]=="object"?e[s]=JSON.parse(r):e[s]=r)}),e},Bb=t=>{const e={};return Array.from(t.querySelectorAll("swal-function-param")).forEach(i=>{const s=i.getAttribute("name"),r=i.getAttribute("value");!s||!r||(e[s]=new Function(`return ${r}`)())}),e},kb=t=>{const e={};return Array.from(t.querySelectorAll("swal-button")).forEach(i=>{Xs(i,["type","color","aria-label"]);const s=i.getAttribute("type");!s||!["confirm","cancel","deny"].includes(s)||(e[`${s}ButtonText`]=i.innerHTML,e[`show${pd(s)}Button`]=!0,i.hasAttribute("color")&&(e[`${s}ButtonColor`]=i.getAttribute("color")),i.hasAttribute("aria-label")&&(e[`${s}ButtonAriaLabel`]=i.getAttribute("aria-label")))}),e},zb=t=>{const e={},n=t.querySelector("swal-image");return n&&(Xs(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")||void 0),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")||void 0),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")||void 0),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt")||void 0)),e},Hb=t=>{const e={},n=t.querySelector("swal-icon");return n&&(Xs(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},Vb=t=>{const e={},n=t.querySelector("swal-input");n&&(Xs(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const i=Array.from(t.querySelectorAll("swal-input-option"));return i.length&&(e.inputOptions={},i.forEach(s=>{Xs(s,["value"]);const r=s.getAttribute("value");if(!r)return;const o=s.innerHTML;e.inputOptions[r]=o})),e},Gb=(t,e)=>{const n={};for(const i in e){const s=e[i],r=t.querySelector(s);r&&(Xs(r,[]),n[s.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},Wb=t=>{const e=Og.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(t.children).forEach(n=>{const i=n.tagName.toLowerCase();e.includes(i)||un(`Unrecognized element <${i}>`)})},Xs=(t,e)=>{Array.from(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&un([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},Ng=10,Xb=t=>{const e=dn(),n=lt();typeof t.willOpen=="function"&&t.willOpen(n),ke.eventEmitter.emit("willOpen",n);const s=window.getComputedStyle(document.body).overflowY;jb(e,n,t),setTimeout(()=>{$b(e,n)},Ng),wd()&&(qb(e,t.scrollbarPadding,s),Rw()),!Nl()&&!ke.previousActiveElement&&(ke.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),ke.eventEmitter.emit("didOpen",n),Bn(e,se["no-transition"])},_l=t=>{const e=lt();if(t.target!==e)return;const n=dn();e.removeEventListener("animationend",_l),e.removeEventListener("transitionend",_l),n.style.overflowY="auto"},$b=(t,e)=>{Qm(e)?(t.style.overflowY="hidden",e.addEventListener("animationend",_l),e.addEventListener("transitionend",_l)):t.style.overflowY="auto"},qb=(t,e,n)=>{Pw(),e&&n!=="hidden"&&Fw(n),setTimeout(()=>{t.scrollTop=0})},jb=(t,e,n)=>{ct(t,n.showClass.backdrop),n.animation?(e.style.setProperty("opacity","0","important"),Wt(e,"grid"),setTimeout(()=>{ct(e,n.showClass.popup),e.style.removeProperty("opacity")},Ng)):Wt(e,"grid"),ct([document.documentElement,document.body],se.shown),n.heightAuto&&n.backdrop&&!n.toast&&ct([document.documentElement,document.body],se["height-auto"])};var ih={email:(t,e)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function Yb(t){t.inputValidator||(t.input==="email"&&(t.inputValidator=ih.email),t.input==="url"&&(t.inputValidator=ih.url))}function Kb(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(un('Target parameter is not valid, defaulting to "body"'),t.target="body")}function Zb(t){Yb(t),t.showLoaderOnConfirm&&!t.preConfirm&&un(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Kb(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),Hy(t)}let ni;var ma=new WeakMap;class It{constructor(...e){if(vy(this,ma,void 0),typeof window>"u")return;ni=this;const n=Object.freeze(this.constructor.argsToParams(e));this.params=n,this.isAwaitingPromise=!1,xy(ma,this,this._main(ni.params))}_main(e,n={}){if(Rg(Object.assign({},n,e)),ke.currentInstance){const r=Xr.swalPromiseResolve.get(ke.currentInstance),{isAwaitingPromise:o}=ke.currentInstance;ke.currentInstance._destroy(),o||r({isDismissed:!0}),wd()&&ug()}ke.currentInstance=ni;const i=Jb(e,n);Zb(i),Object.freeze(i),ke.timeout&&(ke.timeout.stop(),delete ke.timeout),clearTimeout(ke.restoreFocusTimeout);const s=eS(ni);return og(ni,i),St.innerParams.set(ni,i),Qb(ni,s,i)}then(e){return qf(ma,this).then(e)}finally(e){return qf(ma,this).finally(e)}}const Qb=(t,e,n)=>new Promise((i,s)=>{const r=o=>{t.close({isDismissed:!0,dismiss:o})};Xr.swalPromiseResolve.set(t,i),Xr.swalPromiseReject.set(t,s),e.confirmButton.onclick=()=>{eb(t)},e.denyButton.onclick=()=>{tb(t)},e.cancelButton.onclick=()=>{nb(t,r)},e.closeButton.onclick=()=>{r(io.close)},pb(n,e,r),bw(ke,n,r),Xw(t,n),Xb(n),tS(ke,n,r),nS(e,n),setTimeout(()=>{e.container.scrollTop=0})}),Jb=(t,e)=>{const n=Nb(t),i=Object.assign({},Ar,e,n,t);return i.showClass=Object.assign({},Ar.showClass,i.showClass),i.hideClass=Object.assign({},Ar.hideClass,i.hideClass),i.animation===!1&&(i.showClass={backdrop:"swal2-noanimation"},i.hideClass={}),i},eS=t=>{const e={popup:lt(),container:dn(),actions:Qo(),confirmButton:mi(),denyButton:Zs(),cancelButton:to(),loader:no(),closeButton:xd(),validationMessage:Ul(),progressSteps:vd()};return St.domCache.set(t,e),e},tS=(t,e,n)=>{const i=Ol();tn(i),e.timer&&(t.timeout=new Ob(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(Wt(i),Cn(i,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&Sd(e.timer)})))},nS=(t,e)=>{if(!e.toast){if(!Il(e.allowEnterKey)){$m("allowEnterKey"),rS();return}iS(t)||sS(t,e)||nu(-1,1)}},iS=t=>{const e=Array.from(t.popup.querySelectorAll("[autofocus]"));for(const n of e)if(n instanceof HTMLElement&&mn(n))return n.focus(),!0;return!1},sS=(t,e)=>e.focusDeny&&mn(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&mn(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&mn(t.confirmButton)?(t.confirmButton.focus(),!0):!1,rS=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const t=new Date,e=localStorage.getItem("swal-initiation");e?(t.getTime()-Date.parse(e))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const n=document.createElement("audio");n.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",n.loop=!0,document.body.appendChild(n),setTimeout(()=>{n.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${t}`)}It.prototype.disableButtons=wg;It.prototype.enableButtons=yg;It.prototype.getInput=_g;It.prototype.disableInput=Sg;It.prototype.enableInput=bg;It.prototype.hideLoading=ml;It.prototype.disableLoading=ml;It.prototype.showValidationMessage=Mg;It.prototype.resetValidationMessage=Eg;It.prototype.close=as;It.prototype.closePopup=as;It.prototype.closeModal=as;It.prototype.closeToast=as;It.prototype.rejectPromise=hg;It.prototype.update=Pg;It.prototype._destroy=Dg;Object.assign(It,Ub);Object.keys(hb).forEach(t=>{It[t]=function(...e){return ni&&ni[t]?ni[t](...e):null}});It.DismissReason=io;It.version="11.22.3";const vn=It;vn.default=vn;typeof document<"u"&&function(t,e){var n=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=e);else try{n.innerHTML=e}catch{n.innerText=e}}(document,':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.1s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px $swal2-outline-color;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');const wi=(t="Success!",e="Operation completed successfully")=>vn.fire({icon:"success",title:t,text:e,confirmButtonText:"OK",confirmButtonColor:"#10b981"}),Nt=(t="Error!",e="Something went wrong")=>vn.fire({icon:"error",title:t,text:e,confirmButtonText:"OK",confirmButtonColor:"#ef4444"}),Q2=(t="Warning!",e="Please check your input")=>vn.fire({icon:"warning",title:t,text:e,confirmButtonText:"OK",confirmButtonColor:"#f59e0b"}),ac=(t="Info",e="Here is some information")=>vn.fire({icon:"info",title:t,text:e,confirmButtonText:"OK",confirmButtonColor:"#3b82f6"}),sh=(t="Are you sure?",e="This action cannot be undone")=>vn.fire({title:t,text:e,icon:"question",showCancelButton:!0,confirmButtonColor:"#10b981",cancelButtonColor:"#6b7280",confirmButtonText:"بله، ادامه بده",cancelButtonText:"لغو"}),J2=t=>vn.fire({confirmButtonColor:"#10b981",cancelButtonColor:"#6b7280",...t}),eP=(t="Enter value",e="Value",n="Type here...")=>vn.fire({title:t,inputLabel:e,input:"text",inputPlaceholder:n,showCancelButton:!0,confirmButtonColor:"#10b981",cancelButtonColor:"#6b7280",confirmButtonText:"ثبت",cancelButtonText:"لغو",inputValidator:i=>{if(!i)return"You need to write something!"}}),tP=(t="Loading...")=>{vn.fire({title:t,allowOutsideClick:!1,didOpen:()=>{vn.showLoading()}})},nP=()=>{vn.close()},iP=(t,e="success",n="top-end")=>{vn.mixin({toast:!0,position:n,showConfirmButton:!1,timer:3e3,timerProgressBar:!0}).fire({icon:e,title:t})},oS={class:"editor-container h-screen overflow-auto"},aS={class:"controls-panel"},lS={class:"controls-content"},cS={class:"dimensions-section"},uS={class:"dimension-inputs"},dS={class:"dimension-label"},fS={class:"dimension-label"},hS={class:"color-section"},pS={class:"color-picker-container"},mS={class:"color-value"},gS={class:"recent-colors-header mt-3!"},_S={class:"recent-colors-grid"},vS=["title","onClick"],xS=["onClick"],yS={class:"tools-section"},wS={class:"tools-grid"},bS=["disabled"],SS=["disabled"],MS=["disabled"],ES={class:"background-color-section !mt-4"},TS={class:"background-color-controls"},AS={class:"export-section"},CS={class:"grid grid-cols-2 gap-2"},RS={class:"grid-container"},PS={class:"image-section"},DS={class:"upload-section grid grid-cols-2 gap-2"},LS={class:"upload-label"},IS={class:"upload-label"},US={key:0,class:"image-preview"},OS=["src"],NS={class:"grid-wrapper"},FS=["onClick"],BS={__name:"GridEditor",emits:["update-grid"],setup(t,{emit:e}){const n=e,i=ot(16),s=ot(80),r=ot("#ff0000"),o=ot([]),a=ot(null),l=ot(null),c=ot([]);function u(){try{const I={grid:c.value,rows:i.value,cols:s.value,recentColors:o.value,timestamp:new Date().toISOString()};localStorage.setItem("gridEditorData",JSON.stringify(I)),a.value=I.timestamp,wi("ذخیره شد","گرید با موفقیت ذخیره شد")}catch(I){Nt("خطا در ذخیره","خطا در ذخیره گرید: "+I.message),console.error("Error saving grid:",I)}}function d(){try{const I=localStorage.getItem("gridEditorData");if(I){const P=JSON.parse(I);return P.grid&&Array.isArray(P.grid)&&P.rows&&P.cols&&P.grid.length===P.rows*P.cols?(i.value=P.rows,s.value=P.cols,c.value=[...P.grid],P.recentColors&&Array.isArray(P.recentColors)&&(o.value=[...P.recentColors]),a.value=P.timestamp,D.stacks=[],D.index=-1,C(),n("update-grid",ne()),!0):(localStorage.removeItem("gridEditorData"),ac("اطلاعات","داده‌های ذخیره شده نامعتبر بودند و حذف شدند"),!1)}return!1}catch(I){return Nt("خطا در بارگذاری","خطا در بارگذاری گرید: "+I.message),console.error("Error loading grid:",I),localStorage.removeItem("gridEditorData"),!1}}Jr(()=>{d()});const f=ot([]),h=ot([]),v=ot({width:0,height:0}),x=ot({x:0,y:0}),m=ot(!1),p=ot("paint");let A=!1,E=null,b=!1;const D=Xo({stacks:[],index:-1});function C(){D.stacks=D.stacks.slice(0,D.index+1),D.stacks.push([...c.value]),D.index++}function O(){D.index>0&&(D.index--,c.value=[...D.stacks[D.index]])}function U(){D.index<D.stacks.length-1&&(D.index++,c.value=[...D.stacks[D.index]])}C();function w(I){const P=I.target.files[0];if(P){const j=new FileReader;j.onload=y=>{try{const g=y.target.result.trim(),L=JSON.parse(g);if(L.grid&&L.rows&&L.cols){const{grid:k,rows:V,cols:N}=L;Array.isArray(k)&&k.every(re=>typeof re=="string"&&re.match(/^#[0-9A-Fa-f]{6}$/))?k.length===V*N?(i.value=V,s.value=N,qo(()=>{c.value=[...k],C(),wi("بارگذاری شد",`گرید ${V}×${N} با موفقیت بارگذاری شد`)})):Nt("خطا در ابعاد",`تعداد سلول‌ها (${k.length}) با ابعاد اعلام شده (${V}×${N}) مطابقت ندارد`):Nt("خطا در فرمت فایل","فایل باید شامل آرایه‌ای معتبر از رنگ‌ها باشد")}else if(Array.isArray(L)){const k=L;k.every(V=>typeof V=="string"&&V.match(/^#[0-9A-Fa-f]{6}$/))?k.length===i.value*s.value?(c.value=[...k],C(),wi("بارگذاری شد",`گرید با ابعاد فعلی (${i.value}×${s.value}) بارگذاری شد`)):Nt("خطا در ابعاد",`تعداد سلول‌ها (${k.length}) با ابعاد فعلی (${i.value}×${s.value}) مطابقت ندارد. لطفاً ابعاد را تنظیم کنید یا از فایل با فرمت جدید استفاده کنید.`):Nt("خطا در فرمت فایل","فایل باید شامل آرایه‌ای معتبر از رنگ‌ها باشد")}else Nt("خطا در فرمت فایل","فرمت فایل نامعتبر است. فایل باید شامل آرایه‌ای از رنگ‌ها یا آبجکتی با grid، rows و cols باشد.")}catch(g){Nt("خطا در خواندن فایل","خطا در خواندن فایل: "+g.message),console.error("Error parsing text file:",g)}},j.readAsText(P)}}Kn([i,s],()=>{const I=i.value*s.value;c.value.length!==I&&(c.value=Array(I).fill("#ffffff"),h.value=[],v.value={width:0,height:0},f.value=[],m.value=!1,C())}),Kn(c,()=>{setTimeout(()=>{try{const I={grid:c.value,rows:i.value,cols:s.value,recentColors:o.value,timestamp:new Date().toISOString()};localStorage.setItem("gridEditorData",JSON.stringify(I)),a.value=I.timestamp}catch(I){console.error("Error auto-saving grid:",I)}},1e3)},{deep:!0});function S(I){p.value=I,f.value=[],I!=="paste"&&(m.value=!1)}function R(){return h.value&&h.value.length>0&&v.value.width>0}function K(I){A=!0;const P=Se(I);p.value==="paint"?ce(P):p.value==="fill"?be(P,c.value[P],r.value):p.value==="select"&&(E=P,f.value=[P],b=!0)}function Z(){A&&C(),A=!1,E=null}function te(I){if(!A)return;const P=Se(I);p.value==="paint"?ce(P):p.value==="select"&&b&&(f.value=De(E,P))}function ce(I){c.value[I]=r.value,Q(r.value)}function Q(I){const P=o.value.indexOf(I);P>-1&&o.value.splice(P,1),o.value.unshift(I),o.value.length>10&&(o.value=o.value.slice(0,10))}function fe(I){const P=o.value.indexOf(I);P>-1&&o.value.splice(P,1)}async function q(){(await sh("پاک کردن رنگ‌ها","آیا می‌خواهید تمام رنگ‌های اخیر پاک شوند؟")).isConfirmed&&(o.value=[])}function be(I,P,j){if(P===j)return;const y=[I],g=new Set;for(;y.length;){const L=y.pop();if(g.has(L)||c.value[L]!==P)continue;g.add(L),c.value[L]=j;const k=L%i.value,V=Math.floor(L/i.value);if(k>0){const N=L-1;!g.has(N)&&c.value[N]===P&&y.push(N)}if(k<i.value-1){const N=L+1;!g.has(N)&&c.value[N]===P&&y.push(N)}if(V>0){const N=L-i.value;!g.has(N)&&c.value[N]===P&&y.push(N)}if(V<s.value-1){const N=L+i.value;!g.has(N)&&c.value[N]===P&&y.push(N)}}Q(j)}function Se(I){const P=I.target;return Array.from(P.parentNode.children).indexOf(P)}function De(I,P){const j=I%i.value,y=Math.floor(I/i.value),g=P%i.value,L=Math.floor(P/i.value),k=Math.min(j,g),V=Math.max(j,g),N=Math.min(y,L),re=Math.max(y,L),le=[];for(let we=N;we<=re;we++)for(let Ee=k;Ee<=V;Ee++){const ge=we*i.value+Ee;ge>=0&&ge<c.value.length&&le.push(ge)}return le}function Fe(I){if(p.value==="paint")ce(I),C();else if(p.value==="fill")be(I,c.value[I],r.value),C();else if(p.value==="paste"&&m.value){const P=I%i.value,j=Math.floor(I/i.value);x.value={x:P,y:j},ze()}}function it(){if(f.value.length===0){Nt("خطا","ابتدا یک ناحیه انتخاب کنید");return}const I=i.value,P=Math.min(...f.value.map(V=>V%I)),j=Math.max(...f.value.map(V=>V%I)),y=Math.min(...f.value.map(V=>Math.floor(V/I))),g=Math.max(...f.value.map(V=>Math.floor(V/I))),L=j-P+1,k=g-y+1;v.value={width:L,height:k},h.value=[];for(let V=0;V<k;V++){const N=[];for(let re=0;re<L;re++){const le=(y+V)*I+(P+re);N.push(c.value[le])}h.value.push(N)}}function tt(){if(f.value.length===0){Nt("خطا","ابتدا یک ناحیه انتخاب کنید");return}it(),f.value.forEach(I=>c.value[I]="#ffffff"),C()}function oe(){if(!R()){Nt("خطا","هیچ چیزی برای چسباندن وجود ندارد");return}let I=0,P=0;if(f.value.length>0){const j=i.value;I=Math.min(...f.value.map(y=>y%j)),P=Math.min(...f.value.map(y=>Math.floor(y/j)))}else I=Math.floor((i.value-v.value.width)/2),P=Math.floor((s.value-v.value.height)/2);for(let j=0;j<v.value.height;j++)for(let y=0;y<v.value.width;y++){const g=I+y,L=P+j;if(g>=0&&g<i.value&&L>=0&&L<s.value){const k=L*i.value+g;h.value[j]&&h.value[j][y]&&(c.value[k]=h.value[j][y])}}C()}function xe(){f.value=[],b=!1}function F(){if(f.value.length===0){Nt("خطا","ابتدا یک ناحیه انتخاب کنید");return}try{const I=i.value,P=Math.min(...f.value.map(re=>re%I)),j=Math.max(...f.value.map(re=>re%I)),y=Math.min(...f.value.map(re=>Math.floor(re/I))),g=Math.max(...f.value.map(re=>Math.floor(re/I))),L=j-P+1,k=g-y+1,V=[];for(let re=0;re<k;re++){const le=[];for(let we=0;we<L;we++){const Ee=(y+re)*I+(P+we);f.value.includes(Ee)?le.push(c.value[Ee]):le.push("#ffffff")}V.push(le)}const N=V.map(re=>re.reverse());for(let re=0;re<k;re++)for(let le=0;le<L;le++){const we=(y+re)*I+(P+le);f.value.includes(we)&&(c.value[we]=N[re][le])}C(),wi("آینه شد","طرح انتخاب شده با موفقیت آینه شد")}catch(I){Nt("خطا در آینه کردن","خطا در آینه کردن طرح: "+I.message),console.error("Error mirroring selection:",I)}}function ue(){if(f.value.length===0){Nt("خطا","ابتدا یک ناحیه انتخاب کنید");return}try{const I=i.value,P=Math.min(...f.value.map(re=>re%I)),j=Math.max(...f.value.map(re=>re%I)),y=Math.min(...f.value.map(re=>Math.floor(re/I))),g=Math.max(...f.value.map(re=>Math.floor(re/I))),L=j-P+1,k=g-y+1,V=[];for(let re=0;re<k;re++){const le=[];for(let we=0;we<L;we++){const Ee=(y+re)*I+(P+we);f.value.includes(Ee)?le.push(c.value[Ee]):le.push("#ffffff")}V.push(le)}const N=V.reverse();for(let re=0;re<k;re++)for(let le=0;le<L;le++){const we=(y+re)*I+(P+le);f.value.includes(we)&&(c.value[we]=N[re][le])}C(),wi("آینه عمودی شد","طرح انتخاب شده با موفقیت به صورت عمودی آینه شد")}catch(I){Nt("خطا در آینه عمودی","خطا در آینه عمودی کردن طرح: "+I.message),console.error("Error vertical mirroring selection:",I)}}function ae(){if(!R()){Nt("خطا","هیچ چیزی برای چسباندن وجود ندارد");return}const I=Math.floor((i.value-v.value.width)/2),P=Math.floor((s.value-v.value.height)/2);for(let j=0;j<v.value.height;j++)for(let y=0;y<v.value.width;y++){const g=I+y,L=P+j;if(g>=0&&g<i.value&&L>=0&&L<s.value){const k=L*i.value+g;h.value[j]&&h.value[j][y]&&(c.value[k]=h.value[j][y])}}C()}function pe(){if(!R()){Nt("خطا","هیچ چیزی برای چسباندن وجود ندارد");return}m.value=!0,p.value="paste",f.value=[],ac("انتخاب موقعیت","حالا روی صفحه کلیک کنید تا موقعیت چسباندن را انتخاب کنید")}function ze(){if(!R()){Nt("خطا","هیچ چیزی برای چسباندن وجود ندارد");return}for(let I=0;I<v.value.height;I++)for(let P=0;P<v.value.width;P++){const j=x.value.x+P,y=x.value.y+I;if(j>=0&&j<i.value&&y>=0&&y<s.value){const g=y*i.value+j;h.value[I]&&h.value[I][P]&&(c.value[g]=h.value[I][P])}}C(),m.value=!1,p.value="paint"}function T(){m.value=!1,p.value="paint",ac("لغو شد","حالت چسباندن لغو شد")}function _(){const I=document.createElement("canvas"),P=I.getContext("2d"),j=15,y=20,g=i.value*j+y*2,L=s.value*j+y*2;I.width=g,I.height=L,P.fillStyle="#ffffff",P.fillRect(0,0,g,L);for(let k=0;k<s.value;k++)for(let V=0;V<i.value;V++){const N=k*i.value+V,re=c.value[N];re&&(P.fillStyle=re,P.fillRect(y+V*j,y+k*j,j,j),P.strokeStyle="#e0e0e0",P.lineWidth=.5,P.strokeRect(y+V*j,y+k*j,j,j))}P.fillStyle="#000000",P.font="16px Arial",P.textAlign="center",P.fillText(`Grid: ${i.value}×${s.value}`,g/2,y/2+10),I.toBlob(k=>{const V=URL.createObjectURL(k),N=document.createElement("a");N.href=V,N.download=`grid_${i.value}x${s.value}_${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.png`,document.body.appendChild(N),N.click(),document.body.removeChild(N),URL.revokeObjectURL(V),wi("موفقیت","عکس با موفقیت دانلود شد!")},"image/png")}function B(){const I=document.createElement("canvas"),P=I.getContext("2d"),j=30,y=40,g=i.value*j+y*2,L=s.value*j+y*2;I.width=g,I.height=L,P.fillStyle="#ffffff",P.fillRect(0,0,g,L);for(let V=0;V<s.value;V++)for(let N=0;N<i.value;N++){const re=V*i.value+N,le=c.value[re];le&&(P.fillStyle=le,P.fillRect(y+N*j,y+V*j,j,j),P.strokeStyle="#d0d0d0",P.lineWidth=1,P.strokeRect(y+N*j,y+V*j,j,j))}P.fillStyle="#000000",P.font="bold 24px Arial",P.textAlign="center",P.fillText(`Grid: ${i.value}×${s.value}`,g/2,y/2+20),P.font="16px Arial",P.fillStyle="#666666";const k=new Date().toLocaleString("fa-IR");P.fillText(k,g/2,L-y/2),I.toBlob(V=>{const N=URL.createObjectURL(V),re=document.createElement("a");re.href=N,re.download=`grid_HD_${i.value}x${s.value}_${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.png`,document.body.appendChild(re),re.click(),document.body.removeChild(re),URL.revokeObjectURL(N),wi("موفقیت","عکس HD با موفقیت دانلود شد!")},"image/png",1)}function X(){try{const I={grid:c.value,rows:i.value,cols:s.value,timestamp:new Date().toISOString()},P=JSON.stringify(I,null,2),j=new Blob([P],{type:"text/plain;charset=utf-8"}),y=URL.createObjectURL(j),g=document.createElement("a");g.href=y,g.download=`grid_${i.value}x${s.value}_${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.txt`,document.body.appendChild(g),g.click(),document.body.removeChild(g),URL.revokeObjectURL(y),wi("موفقیت","فایل TXT با موفقیت دانلود شد!")}catch(I){Nt("خطا در خروجی","خطا در ایجاد فایل TXT: "+I.message),console.error("Error exporting grid as TXT:",I)}}function ne(){const I=[];for(let P=0;P<s.value;P++){const j=[];for(let y=0;y<i.value;y++)j.push(c.value[P*i.value+y]);I.push(j)}return I}function $(I){const P=I.target.files[0];l.value=URL.createObjectURL(P)}const me=ot("#ffffff");async function J(){const I=me.value;if((await sh("تغییر رنگ تمام مهره‌ها",`آیا می‌خواهید تمام مهره‌ها به رنگ ${I} تغییر یابند؟ این عملیات غیرقابل برگشت است.`)).isConfirmed){const j=i.value*s.value;for(let y=0;y<j;y++)c.value[y]=I;C(),Q(I),wi("تغییر رنگ",`تمام مهره‌ها به رنگ ${I} تغییر یافتند`)}}return(I,P)=>(wt(),Dt("div",oS,[W("div",aS,[P[16]||(P[16]=W("div",{class:"controls-header"},[W("h3",{class:"mb-4 text-lg font-bold text-gray-800"},"🎨 ابزارهای طراحی")],-1)),W("div",lS,[W("div",cS,[P[10]||(P[10]=W("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 📐 ابعاد شبکه ",-1)),W("div",uS,[W("label",dS,[P[8]||(P[8]=W("span",{class:"dimension-text"},"ردیف‌ها:",-1)),Ls(W("input",{"onUpdate:modelValue":P[0]||(P[0]=j=>i.value=j),type:"number",min:"1",class:"dimension-input"},null,512),[[vr,i.value,void 0,{number:!0}]])]),W("label",fS,[P[9]||(P[9]=W("span",{class:"dimension-text"},"ستون‌ها:",-1)),Ls(W("input",{"onUpdate:modelValue":P[1]||(P[1]=j=>s.value=j),type:"number",min:"1",class:"dimension-input"},null,512),[[vr,s.value,void 0,{number:!0}]])])])]),W("div",hS,[P[12]||(P[12]=W("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🎨 انتخاب رنگ ",-1)),W("div",pS,[Ls(W("input",{"onUpdate:modelValue":P[2]||(P[2]=j=>r.value=j),type:"color",class:"color-picker"},null,512),[[vr,r.value]]),W("span",mS,Bt(r.value),1)]),W("div",gS,[P[11]||(P[11]=W("h4",{class:"text-sm font-semibold text-gray-700"},"🔄 رنگ‌های اخیر",-1)),o.value.length>0?(wt(),Dt("button",{key:0,class:"clear-colors-btn",title:"پاک کردن تمام رنگ‌ها",onClick:q}," 🗑️ پاک کردن ")):Is("",!0)]),W("div",_S,[(wt(!0),Dt(ln,null,_r(o.value,j=>(wt(),Dt("div",{key:j,class:"color-swatch",style:Xn({backgroundColor:j}),title:j,onClick:y=>r.value=j},[W("button",{class:"remove-color-btn",onClick:Q0(y=>fe(j),["stop"])}," × ",8,xS)],12,vS))),128))])]),W("div",yS,[P[14]||(P[14]=W("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"🛠️ ابزارها",-1)),W("div",wS,[W("button",{class:rs(["tool-btn primary",{active:p.value==="paint"}]),onClick:P[3]||(P[3]=j=>S("paint"))}," 🖌️ Paint ",2),W("button",{class:rs(["tool-btn primary",{active:p.value==="fill"}]),onClick:P[4]||(P[4]=j=>S("fill"))}," 🪣 Fill ",2),W("button",{class:rs(["tool-btn secondary",{active:p.value==="select"}]),onClick:P[5]||(P[5]=j=>S("select"))}," 📐 Select ",2),W("button",{class:"tool-btn secondary",onClick:it}," 📋 Copy "),W("button",{class:"tool-btn secondary",onClick:tt}," ✂️ Cut "),W("button",{class:"tool-btn secondary",onClick:oe}," 📥 Paste "),W("button",{class:"tool-btn secondary",onClick:ae}," 📍 Paste at Center "),W("button",{class:"tool-btn secondary",disabled:!R(),onClick:pe}," 🎯 Select Paste Position ",8,bS),m.value?(wt(),Dt("button",{key:0,class:"tool-btn danger",onClick:T}," ❌ Cancel Paste ")):Is("",!0),W("button",{class:"tool-btn secondary",onClick:xe}," 🗑️ Clear Selection "),W("button",{class:"tool-btn secondary",disabled:f.value.length===0,onClick:F}," 🔄 Mirror Selection ",8,SS),W("button",{class:"tool-btn secondary",disabled:f.value.length===0,onClick:ue}," ↕️ Mirror Selection Vertical ",8,MS),W("button",{class:"tool-btn secondary",onClick:O}," ↩️ Undo "),W("button",{class:"tool-btn secondary",onClick:U}," ↪️ Redo ")]),W("div",ES,[P[13]||(P[13]=W("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"🎨 رنگ پس‌زمینه",-1)),W("div",TS,[Ls(W("input",{"onUpdate:modelValue":P[6]||(P[6]=j=>me.value=j),type:"color",class:"color-picker",title:"انتخاب رنگ پس‌زمینه"},null,512),[[vr,me.value]]),W("button",{class:"tool-btn success",onClick:J}," 🎨 تغییر تمام مهره‌ها ")])])]),W("div",AS,[P[15]||(P[15]=W("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"📤 خروجی",-1)),W("div",{class:"save-load-buttons mb-3"},[W("button",{class:"export-btn success",onClick:u}," 💾 ذخیره گرید "),W("button",{class:"export-btn info",onClick:d}," 📂 بارگذاری اخرین ذخیره ")]),W("div",CS,[W("button",{class:"export-btn primary",onClick:P[7]||(P[7]=j=>I.$emit("update-grid",ne()))}," 🚀 ارسال به 3D "),W("button",{class:"export-btn success",onClick:_}," 📷 خروجی عکس "),W("button",{class:"export-btn info",onClick:B}," 🖼️ خروجی HD "),W("button",{class:"export-btn warning",onClick:X}," 📄 خروجی TXT ")])])])]),W("div",RS,[W("div",PS,[W("div",DS,[W("label",LS,[P[17]||(P[17]=W("span",{class:"upload-text"},"📁 آپلود فایل txt grid",-1)),W("input",{type:"file",accept:".txt",class:"upload-input",onChange:w},null,32)]),W("label",IS,[P[18]||(P[18]=W("span",{class:"upload-text"},"📁 آپلود تصویر",-1)),W("input",{type:"file",accept:"image/*",class:"upload-input",onChange:$},null,32)])]),l.value?(wt(),Dt("div",US,[W("img",{src:l.value,alt:"تصویر انتخاب شده",class:"preview-image"},null,8,OS)])):Is("",!0)]),W("div",NS,[W("div",{class:"grid-item",style:Xn({gridTemplateColumns:`repeat(${i.value}, 15px)`}),onMousedown:K,onMouseup:Z,onMouseleave:Z,onMousemove:te},[(wt(!0),Dt(ln,null,_r(c.value,(j,y)=>(wt(),Dt("div",{key:y,class:rs(["cell",{"!border-red-200":y==Math.floor(i.value*s.value/2)}]),style:Xn({backgroundColor:j,border:f.value.includes(y)?"2px dashed #ff4757":"1px solid #ddd"}),onClick:g=>Fe(y)},null,14,FS))),128))],36)])])]))}},kS=Yo(BS,[["__scopeId","data-v-664bf8f5"]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rd="179",Cr={ROTATE:0,DOLLY:1,PAN:2},xr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zS=0,rh=1,HS=2,Fg=1,VS=2,Ai=3,fs=0,gn=1,Ii=2,us=0,Rr=1,oh=2,ah=3,lh=4,GS=5,Ps=100,WS=101,XS=102,$S=103,qS=104,jS=200,YS=201,KS=202,ZS=203,su=204,ru=205,QS=206,JS=207,eM=208,tM=209,nM=210,iM=211,sM=212,rM=213,oM=214,ou=0,au=1,lu=2,qr=3,cu=4,uu=5,du=6,fu=7,Bg=0,aM=1,lM=2,ds=0,cM=1,uM=2,dM=3,fM=4,hM=5,pM=6,mM=7,kg=300,jr=301,Yr=302,hu=303,pu=304,Bl=306,mu=1e3,Us=1001,gu=1002,Zn=1003,gM=1004,ga=1005,li=1006,lc=1007,Os=1008,gi=1009,zg=1010,Hg=1011,Oo=1012,Pd=1013,$s=1014,Ui=1015,na=1016,Dd=1017,Ld=1018,No=1020,Vg=35902,Gg=1021,Wg=1022,qn=1023,Fo=1026,Bo=1027,Xg=1028,Id=1029,$g=1030,Ud=1031,Od=1033,qa=33776,ja=33777,Ya=33778,Ka=33779,_u=35840,vu=35841,xu=35842,yu=35843,wu=36196,bu=37492,Su=37496,Mu=37808,Eu=37809,Tu=37810,Au=37811,Cu=37812,Ru=37813,Pu=37814,Du=37815,Lu=37816,Iu=37817,Uu=37818,Ou=37819,Nu=37820,Fu=37821,Za=36492,Bu=36494,ku=36495,qg=36283,zu=36284,Hu=36285,Vu=36286,_M=3200,vM=3201,jg=0,xM=1,Ji="",On="srgb",Kr="srgb-linear",vl="linear",mt="srgb",tr=7680,ch=519,yM=512,wM=513,bM=514,Yg=515,SM=516,MM=517,EM=518,TM=519,uh=35044,dh="300 es",ci=2e3,xl=2001;class Qs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qa=Math.PI/180,Gu=180/Math.PI;function ia(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[t&255]+$t[t>>8&255]+$t[t>>16&255]+$t[t>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[n&63|128]+$t[n>>8&255]+"-"+$t[n>>16&255]+$t[n>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function Qe(t,e,n){return Math.max(e,Math.min(n,t))}function AM(t,e){return(t%e+e)%e}function cc(t,e,n){return(1-n)*t+n*e}function uo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function hn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const CM={DEG2RAD:Qa};class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qs{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const f=r[o+0],h=r[o+1],v=r[o+2],x=r[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=h,e[n+2]=v,e[n+3]=x;return}if(d!==x||l!==f||c!==h||u!==v){let m=1-a;const p=l*f+c*h+u*v+d*x,A=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const D=Math.sqrt(E),C=Math.atan2(D,p*A);m=Math.sin(m*C)/D,a=Math.sin(a*C)/D}const b=a*A;if(l=l*m+f*b,c=c*m+h*b,u=u*m+v*b,d=d*m+x*b,m===1-a){const D=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=D,c*=D,u*=D,d*=D}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],h=r[o+2],v=r[o+3];return e[n]=a*v+u*d+l*h-c*f,e[n+1]=l*v+u*f+c*d-a*h,e[n+2]=c*v+u*h+a*f-l*d,e[n+3]=u*v-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),h=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*h*v,this._y=c*h*d-f*u*v,this._z=c*u*v+f*h*d,this._w=c*u*d-f*h*v;break;case"YXZ":this._x=f*u*d+c*h*v,this._y=c*h*d-f*u*v,this._z=c*u*v-f*h*d,this._w=c*u*d+f*h*v;break;case"ZXY":this._x=f*u*d-c*h*v,this._y=c*h*d+f*u*v,this._z=c*u*v+f*h*d,this._w=c*u*d-f*h*v;break;case"ZYX":this._x=f*u*d-c*h*v,this._y=c*h*d+f*u*v,this._z=c*u*v-f*h*d,this._w=c*u*d+f*h*v;break;case"YZX":this._x=f*u*d+c*h*v,this._y=c*h*d+f*u*v,this._z=c*u*v-f*h*d,this._w=c*u*d-f*h*v;break;case"XZY":this._x=f*u*d-c*h*v,this._y=c*h*d-f*u*v,this._z=c*u*v+f*h*d,this._w=c*u*d+f*h*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-n;return this._w=h*o+n*this._w,this._x=h*i+n*this._x,this._y=h*s+n*this._y,this._z=h*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,n=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(fh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(fh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),d=2*(r*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return uc.copy(this).projectOnVector(e),this.sub(uc)}reflect(e){return this.sub(uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uc=new Y,fh=new qs;class Ke{constructor(e,n,i,s,r,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],v=i[8],x=s[0],m=s[3],p=s[6],A=s[1],E=s[4],b=s[7],D=s[2],C=s[5],O=s[8];return r[0]=o*x+a*A+l*D,r[3]=o*m+a*E+l*C,r[6]=o*p+a*b+l*O,r[1]=c*x+u*A+d*D,r[4]=c*m+u*E+d*C,r[7]=c*p+u*b+d*O,r[2]=f*x+h*A+v*D,r[5]=f*m+h*E+v*C,r[8]=f*p+h*b+v*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*r,h=c*r-o*l,v=n*d+i*f+s*h;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=d*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(u*n-s*l)*x,e[5]=(s*r-a*n)*x,e[6]=h*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*r)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(dc.makeScale(e,n)),this}rotate(e){return this.premultiply(dc.makeRotation(-e)),this}translate(e,n){return this.premultiply(dc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dc=new Ke;function Kg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function yl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function RM(){const t=yl("canvas");return t.style.display="block",t}const hh={};function Pr(t){t in hh||(hh[t]=!0,console.warn(t))}function PM(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const ph=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mh=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function DM(){const t={enabled:!0,workingColorSpace:Kr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===mt&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(s.r=Dr(s.r),s.g=Dr(s.g),s.b=Dr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ji?vl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Pr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Pr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Kr]:{primaries:e,whitePoint:i,transfer:vl,toXYZ:ph,fromXYZ:mh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:ph,fromXYZ:mh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),t}const at=DM();function Bi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Dr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let nr;class LM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{nr===void 0&&(nr=yl("canvas")),nr.width=e.width,nr.height=e.height;const s=nr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=nr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=yl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bi(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Bi(n[i]/255)*255):n[i]=Bi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let IM=0;class Nd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=ia(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(fc(s[o].image)):r.push(fc(s[o]))}else r=fc(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function fc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?LM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let UM=0;const hc=new Y;class _n extends Qs{constructor(e=_n.DEFAULT_IMAGE,n=_n.DEFAULT_MAPPING,i=Us,s=Us,r=li,o=Os,a=qn,l=gi,c=_n.DEFAULT_ANISOTROPY,u=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=ia(),this.name="",this.source=new Nd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(hc).x}get height(){return this.source.getSize(hc).y}get depth(){return this.source.getSize(hc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mu:e.x=e.x-Math.floor(e.x);break;case Us:e.x=e.x<0?0:1;break;case gu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mu:e.y=e.y-Math.floor(e.y);break;case Us:e.y=e.y<0?0:1;break;case gu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=kg;_n.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,n=0,i=0,s=1){Rt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],v=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,b=(h+1)/2,D=(p+1)/2,C=(u+f)/4,O=(d+x)/4,U=(v+m)/4;return E>b&&E>D?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=C/i,r=O/i):b>D?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=C/s,r=U/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=O/r,s=U/r),this.set(i,s,r,n),this}let A=Math.sqrt((m-v)*(m-v)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(m-v)/A,this.y=(d-x)/A,this.z=(f-u)/A,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this.w=Qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this.w=Qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class OM extends Qs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n);const s={width:e,height:n,depth:i.depth},r=new _n(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:li,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new Nd(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class js extends OM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Zg extends _n{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=Us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class NM extends _n{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=Us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sa{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(kn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(kn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=kn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(r,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_a.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_a.copy(i.boundingBox)),_a.applyMatrix4(e.matrixWorld),this.union(_a)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fo),va.subVectors(this.max,fo),ir.subVectors(e.a,fo),sr.subVectors(e.b,fo),rr.subVectors(e.c,fo),Hi.subVectors(sr,ir),Vi.subVectors(rr,sr),bs.subVectors(ir,rr);let n=[0,-Hi.z,Hi.y,0,-Vi.z,Vi.y,0,-bs.z,bs.y,Hi.z,0,-Hi.x,Vi.z,0,-Vi.x,bs.z,0,-bs.x,-Hi.y,Hi.x,0,-Vi.y,Vi.x,0,-bs.y,bs.x,0];return!pc(n,ir,sr,rr,va)||(n=[1,0,0,0,1,0,0,0,1],!pc(n,ir,sr,rr,va))?!1:(xa.crossVectors(Hi,Vi),n=[xa.x,xa.y,xa.z],pc(n,ir,sr,rr,va))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const bi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],kn=new Y,_a=new sa,ir=new Y,sr=new Y,rr=new Y,Hi=new Y,Vi=new Y,bs=new Y,fo=new Y,va=new Y,xa=new Y,Ss=new Y;function pc(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){Ss.fromArray(t,r);const a=s.x*Math.abs(Ss.x)+s.y*Math.abs(Ss.y)+s.z*Math.abs(Ss.z),l=e.dot(Ss),c=n.dot(Ss),u=i.dot(Ss);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const FM=new sa,ho=new Y,mc=new Y;class Fd{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):FM.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ho.subVectors(e,this.center);const n=ho.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(ho,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ho.copy(e.center).add(mc)),this.expandByPoint(ho.copy(e.center).sub(mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Si=new Y,gc=new Y,ya=new Y,Gi=new Y,_c=new Y,wa=new Y,vc=new Y;class Qg{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Si.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,n),Si.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){gc.copy(e).add(n).multiplyScalar(.5),ya.copy(n).sub(e).normalize(),Gi.copy(this.origin).sub(gc);const r=e.distanceTo(n)*.5,o=-this.direction.dot(ya),a=Gi.dot(this.direction),l=-Gi.dot(ya),c=Gi.lengthSq(),u=Math.abs(1-o*o);let d,f,h,v;if(u>0)if(d=o*l-a,f=o*a-l,v=r*u,d>=0)if(f>=-v)if(f<=v){const x=1/u;d*=x,f*=x,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(gc).addScaledVector(ya,f),h}intersectSphere(e,n){Si.subVectors(e.center,this.origin);const i=Si.dot(this.direction),s=Si.dot(Si)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,n,i,s,r){_c.subVectors(n,e),wa.subVectors(i,e),vc.crossVectors(_c,wa);let o=this.direction.dot(vc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gi.subVectors(this.origin,e);const l=a*this.direction.dot(wa.crossVectors(Gi,wa));if(l<0)return null;const c=a*this.direction.dot(_c.cross(Gi));if(c<0||l+c>o)return null;const u=-a*Gi.dot(vc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,n,i,s,r,o,a,l,c,u,d,f,h,v,x,m){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,d,f,h,v,x,m)}set(e,n,i,s,r,o,a,l,c,u,d,f,h,v,x,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=v,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/or.setFromMatrixColumn(e,0).length(),r=1/or.setFromMatrixColumn(e,1).length(),o=1/or.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,h=o*d,v=a*u,x=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=h+v*c,n[5]=f-x*c,n[9]=-a*l,n[2]=x-f*c,n[6]=v+h*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,v=c*u,x=c*d;n[0]=f+x*a,n[4]=v*a-h,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=h*a-v,n[6]=x+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,v=c*u,x=c*d;n[0]=f-x*a,n[4]=-o*d,n[8]=v+h*a,n[1]=h+v*a,n[5]=o*u,n[9]=x-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,h=o*d,v=a*u,x=a*d;n[0]=l*u,n[4]=v*c-h,n[8]=f*c+x,n[1]=l*d,n[5]=x*c+f,n[9]=h*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*c,v=a*l,x=a*c;n[0]=l*u,n[4]=x-f*d,n[8]=v*d+h,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*d+v,n[10]=f-x*d}else if(e.order==="XZY"){const f=o*l,h=o*c,v=a*l,x=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+x,n[5]=o*u,n[9]=h*d-v,n[2]=v*d-h,n[6]=a*u,n[10]=x*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(BM,e,kM)}lookAt(e,n,i){const s=this.elements;return wn.subVectors(e,n),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Wi.crossVectors(i,wn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Wi.crossVectors(i,wn)),Wi.normalize(),ba.crossVectors(wn,Wi),s[0]=Wi.x,s[4]=ba.x,s[8]=wn.x,s[1]=Wi.y,s[5]=ba.y,s[9]=wn.y,s[2]=Wi.z,s[6]=ba.z,s[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],v=i[2],x=i[6],m=i[10],p=i[14],A=i[3],E=i[7],b=i[11],D=i[15],C=s[0],O=s[4],U=s[8],w=s[12],S=s[1],R=s[5],K=s[9],Z=s[13],te=s[2],ce=s[6],Q=s[10],fe=s[14],q=s[3],be=s[7],Se=s[11],De=s[15];return r[0]=o*C+a*S+l*te+c*q,r[4]=o*O+a*R+l*ce+c*be,r[8]=o*U+a*K+l*Q+c*Se,r[12]=o*w+a*Z+l*fe+c*De,r[1]=u*C+d*S+f*te+h*q,r[5]=u*O+d*R+f*ce+h*be,r[9]=u*U+d*K+f*Q+h*Se,r[13]=u*w+d*Z+f*fe+h*De,r[2]=v*C+x*S+m*te+p*q,r[6]=v*O+x*R+m*ce+p*be,r[10]=v*U+x*K+m*Q+p*Se,r[14]=v*w+x*Z+m*fe+p*De,r[3]=A*C+E*S+b*te+D*q,r[7]=A*O+E*R+b*ce+D*be,r[11]=A*U+E*K+b*Q+D*Se,r[15]=A*w+E*Z+b*fe+D*De,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],v=e[3],x=e[7],m=e[11],p=e[15];return v*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*h-i*l*h)+x*(+n*l*h-n*c*f+r*o*f-s*o*h+s*c*u-r*l*u)+m*(+n*c*d-n*a*h-r*o*d+i*o*h+r*a*u-i*c*u)+p*(-s*a*u-n*l*d+n*a*f+s*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],v=e[12],x=e[13],m=e[14],p=e[15],A=d*m*c-x*f*c+x*l*h-a*m*h-d*l*p+a*f*p,E=v*f*c-u*m*c-v*l*h+o*m*h+u*l*p-o*f*p,b=u*x*c-v*d*c+v*a*h-o*x*h-u*a*p+o*d*p,D=v*d*l-u*x*l-v*a*f+o*x*f+u*a*m-o*d*m,C=n*A+i*E+s*b+r*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/C;return e[0]=A*O,e[1]=(x*f*r-d*m*r-x*s*h+i*m*h+d*s*p-i*f*p)*O,e[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*p+i*l*p)*O,e[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*h-i*l*h)*O,e[4]=E*O,e[5]=(u*m*r-v*f*r+v*s*h-n*m*h-u*s*p+n*f*p)*O,e[6]=(v*l*r-o*m*r-v*s*c+n*m*c+o*s*p-n*l*p)*O,e[7]=(o*f*r-u*l*r+u*s*c-n*f*c-o*s*h+n*l*h)*O,e[8]=b*O,e[9]=(v*d*r-u*x*r-v*i*h+n*x*h+u*i*p-n*d*p)*O,e[10]=(o*x*r-v*a*r+v*i*c-n*x*c-o*i*p+n*a*p)*O,e[11]=(u*a*r-o*d*r-u*i*c+n*d*c+o*i*h-n*a*h)*O,e[12]=D*O,e[13]=(u*x*s-v*d*s+v*i*f-n*x*f-u*i*m+n*d*m)*O,e[14]=(v*a*s-o*x*s-v*i*l+n*x*l+o*i*m-n*a*m)*O,e[15]=(o*d*s-u*a*s+u*i*l-n*d*l-o*i*f+n*a*f)*O,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,d=a+a,f=r*c,h=r*u,v=r*d,x=o*u,m=o*d,p=a*d,A=l*c,E=l*u,b=l*d,D=i.x,C=i.y,O=i.z;return s[0]=(1-(x+p))*D,s[1]=(h+b)*D,s[2]=(v-E)*D,s[3]=0,s[4]=(h-b)*C,s[5]=(1-(f+p))*C,s[6]=(m+A)*C,s[7]=0,s[8]=(v+E)*O,s[9]=(m-A)*O,s[10]=(1-(f+x))*O,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let r=or.set(s[0],s[1],s[2]).length();const o=or.set(s[4],s[5],s[6]).length(),a=or.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],zn.copy(this);const c=1/r,u=1/o,d=1/a;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=u,zn.elements[5]*=u,zn.elements[6]*=u,zn.elements[8]*=d,zn.elements[9]*=d,zn.elements[10]*=d,n.setFromRotationMatrix(zn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,n,i,s,r,o,a=ci,l=!1){const c=this.elements,u=2*r/(n-e),d=2*r/(i-s),f=(n+e)/(n-e),h=(i+s)/(i-s);let v,x;if(l)v=r/(o-r),x=o*r/(o-r);else if(a===ci)v=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===xl)v=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=ci,l=!1){const c=this.elements,u=2/(n-e),d=2/(i-s),f=-(n+e)/(n-e),h=-(i+s)/(i-s);let v,x;if(l)v=1/(o-r),x=o/(o-r);else if(a===ci)v=-2/(o-r),x=-(o+r)/(o-r);else if(a===xl)v=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const or=new Y,zn=new Lt,BM=new Y(0,0,0),kM=new Y(1,1,1),Wi=new Y,ba=new Y,wn=new Y,gh=new Lt,_h=new qs;class _i{constructor(e=0,n=0,i=0,s=_i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(n){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return gh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return _h.setFromEuler(this),this.setFromQuaternion(_h,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_i.DEFAULT_ORDER="XYZ";class Jg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zM=0;const vh=new Y,ar=new qs,Mi=new Lt,Sa=new Y,po=new Y,HM=new Y,VM=new qs,xh=new Y(1,0,0),yh=new Y(0,1,0),wh=new Y(0,0,1),bh={type:"added"},GM={type:"removed"},lr={type:"childadded",child:null},xc={type:"childremoved",child:null};class Jt extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new Y,n=new _i,i=new qs,s=new Y(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Lt},normalMatrix:{value:new Ke}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ar.setFromAxisAngle(e,n),this.quaternion.multiply(ar),this}rotateOnWorldAxis(e,n){return ar.setFromAxisAngle(e,n),this.quaternion.premultiply(ar),this}rotateX(e){return this.rotateOnAxis(xh,e)}rotateY(e){return this.rotateOnAxis(yh,e)}rotateZ(e){return this.rotateOnAxis(wh,e)}translateOnAxis(e,n){return vh.copy(e).applyQuaternion(this.quaternion),this.position.add(vh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(xh,e)}translateY(e){return this.translateOnAxis(yh,e)}translateZ(e){return this.translateOnAxis(wh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Sa.copy(e):Sa.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(po,Sa,this.up):Mi.lookAt(Sa,po,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),ar.setFromRotationMatrix(Mi),this.quaternion.premultiply(ar.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bh),lr.child=e,this.dispatchEvent(lr),lr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(GM),xc.child=e,this.dispatchEvent(xc),xc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bh),lr.child=e,this.dispatchEvent(lr),lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,e,HM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,VM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Jt.DEFAULT_UP=new Y(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new Y,Ei=new Y,yc=new Y,Ti=new Y,cr=new Y,ur=new Y,Sh=new Y,wc=new Y,bc=new Y,Sc=new Y,Mc=new Rt,Ec=new Rt,Tc=new Rt;class $n{constructor(e=new Y,n=new Y,i=new Y){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Hn.subVectors(e,n),s.cross(Hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Hn.subVectors(s,n),Ei.subVectors(i,n),yc.subVectors(e,n);const o=Hn.dot(Hn),a=Hn.dot(Ei),l=Hn.dot(yc),c=Ei.dot(Ei),u=Ei.dot(yc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,v=(o*u-a*l)*f;return r.set(1-h-v,v,h)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(a,Ti.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return Mc.setScalar(0),Ec.setScalar(0),Tc.setScalar(0),Mc.fromBufferAttribute(e,n),Ec.fromBufferAttribute(e,i),Tc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Mc,r.x),o.addScaledVector(Ec,r.y),o.addScaledVector(Tc,r.z),o}static isFrontFacing(e,n,i,s){return Hn.subVectors(i,n),Ei.subVectors(e,n),Hn.cross(Ei).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Hn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return $n.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return $n.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;cr.subVectors(s,i),ur.subVectors(r,i),wc.subVectors(e,i);const l=cr.dot(wc),c=ur.dot(wc);if(l<=0&&c<=0)return n.copy(i);bc.subVectors(e,s);const u=cr.dot(bc),d=ur.dot(bc);if(u>=0&&d<=u)return n.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(cr,o);Sc.subVectors(e,r);const h=cr.dot(Sc),v=ur.dot(Sc);if(v>=0&&h<=v)return n.copy(r);const x=h*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(ur,a);const m=u*v-h*d;if(m<=0&&d-u>=0&&h-v>=0)return Sh.subVectors(r,s),a=(d-u)/(d-u+(h-v)),n.copy(s).addScaledVector(Sh,a);const p=1/(m+x+f);return o=x*p,a=f*p,n.copy(i).addScaledVector(cr,o).addScaledVector(ur,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const e_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},Ma={h:0,s:0,l:0};function Ac(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=at.workingColorSpace){return this.r=e,this.g=n,this.b=i,at.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=at.workingColorSpace){if(e=AM(e,1),n=Qe(n,0,1),i=Qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Ac(o,r,e+1/3),this.g=Ac(o,r,e),this.b=Ac(o,r,e-1/3)}return at.colorSpaceToWorking(this,s),this}setStyle(e,n=On){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=On){const i=e_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return at.workingToColorSpace(qt.copy(this),e),Math.round(Qe(qt.r*255,0,255))*65536+Math.round(Qe(qt.g*255,0,255))*256+Math.round(Qe(qt.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=at.workingColorSpace){at.workingToColorSpace(qt.copy(this),n);const i=qt.r,s=qt.g,r=qt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=at.workingColorSpace){return at.workingToColorSpace(qt.copy(this),n),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=On){at.workingToColorSpace(qt.copy(this),e);const n=qt.r,i=qt.g,s=qt.b;return e!==On?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+n,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Xi),e.getHSL(Ma);const i=cc(Xi.h,Ma.h,n),s=cc(Xi.s,Ma.s,n),r=cc(Xi.l,Ma.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new Je;Je.NAMES=e_;let WM=0;class ra extends Qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=ia(),this.name="",this.type="Material",this.blending=Rr,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=su,this.blendDst=ru,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tr,this.stencilZFail=tr,this.stencilZPass=tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(i.blending=this.blending),this.side!==fs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==su&&(i.blendSrc=this.blendSrc),this.blendDst!==ru&&(i.blendDst=this.blendDst),this.blendEquation!==Ps&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ch&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==tr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==tr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class t_ extends ra{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=Bg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new Y,Ea=new Xe;let XM=0;class di{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:XM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=uh,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ea.fromBufferAttribute(this,n),Ea.applyMatrix3(e),this.setXY(n,Ea.x,Ea.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix3(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix4(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyNormalMatrix(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.transformDirection(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=uo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=hn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=uo(n,this.array)),n}setX(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=uo(n,this.array)),n}setY(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=uo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=uo(n,this.array)),n}setW(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array),s=hn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array),s=hn(s,this.array),r=hn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uh&&(e.usage=this.usage),e}}class n_ extends di{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class i_ extends di{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class fi extends di{constructor(e,n,i){super(new Float32Array(e),n,i)}}let $M=0;const In=new Lt,Cc=new Jt,dr=new Y,bn=new sa,mo=new sa,Ht=new Y;class gs extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=ia(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kg(e)?i_:n_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,n,i){return In.makeTranslation(e,n,i),this.applyMatrix4(In),this}scale(e,n,i){return In.makeScale(e,n,i),this.applyMatrix4(In),this}lookAt(e){return Cc.lookAt(e),Cc.updateMatrix(),this.applyMatrix4(Cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fi(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];mo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(bn.min,mo.min),bn.expandByPoint(Ht),Ht.addVectors(bn.max,mo.max),bn.expandByPoint(Ht)):(bn.expandByPoint(mo.min),bn.expandByPoint(mo.max))}bn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ht));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ht.fromBufferAttribute(a,c),l&&(dr.fromBufferAttribute(e,c),Ht.add(dr)),s=Math.max(s,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new Y,l[U]=new Y;const c=new Y,u=new Y,d=new Y,f=new Xe,h=new Xe,v=new Xe,x=new Y,m=new Y;function p(U,w,S){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,S),f.fromBufferAttribute(r,U),h.fromBufferAttribute(r,w),v.fromBufferAttribute(r,S),u.sub(c),d.sub(c),h.sub(f),v.sub(f);const R=1/(h.x*v.y-v.x*h.y);isFinite(R)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(d,-h.y).multiplyScalar(R),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-v.x).multiplyScalar(R),a[U].add(x),a[w].add(x),a[S].add(x),l[U].add(m),l[w].add(m),l[S].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let U=0,w=A.length;U<w;++U){const S=A[U],R=S.start,K=S.count;for(let Z=R,te=R+K;Z<te;Z+=3)p(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const E=new Y,b=new Y,D=new Y,C=new Y;function O(U){D.fromBufferAttribute(s,U),C.copy(D);const w=a[U];E.copy(w),E.sub(D.multiplyScalar(D.dot(w))).normalize(),b.crossVectors(C,w);const R=b.dot(l[U])<0?-1:1;o.setXYZW(U,E.x,E.y,E.z,R)}for(let U=0,w=A.length;U<w;++U){const S=A[U],R=S.start,K=S.count;for(let Z=R,te=R+K;Z<te;Z+=3)O(e.getX(Z+0)),O(e.getX(Z+1)),O(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new di(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const s=new Y,r=new Y,o=new Y,a=new Y,l=new Y,c=new Y,u=new Y,d=new Y;if(e)for(let f=0,h=e.count;f<h;f+=3){const v=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(n,v),r.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=n.count;f<h;f+=3)s.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ht.fromBufferAttribute(e,n),Ht.normalize(),e.setXYZ(n,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,v=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?h=l[x]*a.data.stride+a.offset:h=l[x]*u;for(let p=0;p<u;p++)f[v++]=c[h++]}return new di(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new gs,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mh=new Lt,Ms=new Qg,Ta=new Fd,Eh=new Y,Aa=new Y,Ca=new Y,Ra=new Y,Rc=new Y,Pa=new Y,Th=new Y,Da=new Y;class jn extends Jt{constructor(e=new gs,n=new t_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Pa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Rc.fromBufferAttribute(d,e),o?Pa.addScaledVector(Rc,u):Pa.addScaledVector(Rc.sub(n),u))}n.add(Pa)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(r),Ms.copy(e.ray).recast(e.near),!(Ta.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(Ta,Eh)===null||Ms.origin.distanceToSquared(Eh)>(e.far-e.near)**2))&&(Mh.copy(r).invert(),Ms.copy(e.ray).applyMatrix4(Mh),!(i.boundingBox!==null&&Ms.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ms)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=f.length;v<x;v++){const m=f[v],p=o[m.materialIndex],A=Math.max(m.start,h.start),E=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let b=A,D=E;b<D;b+=3){const C=a.getX(b),O=a.getX(b+1),U=a.getX(b+2);s=La(this,p,e,i,c,u,d,C,O,U),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const v=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let m=v,p=x;m<p;m+=3){const A=a.getX(m),E=a.getX(m+1),b=a.getX(m+2);s=La(this,o,e,i,c,u,d,A,E,b),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=f.length;v<x;v++){const m=f[v],p=o[m.materialIndex],A=Math.max(m.start,h.start),E=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let b=A,D=E;b<D;b+=3){const C=b,O=b+1,U=b+2;s=La(this,p,e,i,c,u,d,C,O,U),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const v=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let m=v,p=x;m<p;m+=3){const A=m,E=m+1,b=m+2;s=La(this,o,e,i,c,u,d,A,E,b),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function qM(t,e,n,i,s,r,o,a){let l;if(e.side===gn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===fs,a),l===null)return null;Da.copy(a),Da.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Da);return c<n.near||c>n.far?null:{distance:c,point:Da.clone(),object:t}}function La(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,Aa),t.getVertexPosition(l,Ca),t.getVertexPosition(c,Ra);const u=qM(t,e,n,i,Aa,Ca,Ra,Th);if(u){const d=new Y;$n.getBarycoord(Th,Aa,Ca,Ra,d),s&&(u.uv=$n.getInterpolatedAttribute(s,a,l,c,d,new Xe)),r&&(u.uv1=$n.getInterpolatedAttribute(r,a,l,c,d,new Xe)),o&&(u.normal=$n.getInterpolatedAttribute(o,a,l,c,d,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new Y,materialIndex:0};$n.getNormal(Aa,Ca,Ra,f.normal),u.face=f,u.barycoord=d}return u}class oa extends gs{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;v("z","y","x",-1,-1,i,n,e,o,r,0),v("z","y","x",1,-1,i,n,-e,o,r,1),v("x","z","y",1,1,e,i,n,s,o,2),v("x","z","y",1,-1,e,i,-n,s,o,3),v("x","y","z",1,-1,e,n,i,s,r,4),v("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new fi(c,3)),this.setAttribute("normal",new fi(u,3)),this.setAttribute("uv",new fi(d,2));function v(x,m,p,A,E,b,D,C,O,U,w){const S=b/O,R=D/U,K=b/2,Z=D/2,te=C/2,ce=O+1,Q=U+1;let fe=0,q=0;const be=new Y;for(let Se=0;Se<Q;Se++){const De=Se*R-Z;for(let Fe=0;Fe<ce;Fe++){const it=Fe*S-K;be[x]=it*A,be[m]=De*E,be[p]=te,c.push(be.x,be.y,be.z),be[x]=0,be[m]=0,be[p]=C>0?1:-1,u.push(be.x,be.y,be.z),d.push(Fe/O),d.push(1-Se/U),fe+=1}}for(let Se=0;Se<U;Se++)for(let De=0;De<O;De++){const Fe=f+De+ce*Se,it=f+De+ce*(Se+1),tt=f+(De+1)+ce*(Se+1),oe=f+(De+1)+ce*Se;l.push(Fe,it,oe),l.push(it,tt,oe),q+=6}a.addGroup(h,q,w),h+=q,f+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function rn(t){const e={};for(let n=0;n<t.length;n++){const i=Zr(t[n]);for(const s in i)e[s]=i[s]}return e}function jM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function s_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const YM={clone:Zr,merge:rn};var KM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hs extends ra{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=KM,this.fragmentShader=ZM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zr(e.uniforms),this.uniformsGroups=jM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class r_ extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new Y,Ah=new Xe,Ch=new Xe;class En extends r_{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Gu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gu*2*Math.atan(Math.tan(Qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,n){return this.getViewBounds(e,Ah,Ch),n.subVectors(Ch,Ah)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Qa*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const fr=-90,hr=1;class QM extends Jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new En(fr,hr,e,n);s.layers=this.layers,this.add(s);const r=new En(fr,hr,e,n);r.layers=this.layers,this.add(r);const o=new En(fr,hr,e,n);o.layers=this.layers,this.add(o);const a=new En(fr,hr,e,n);a.layers=this.layers,this.add(a);const l=new En(fr,hr,e,n);l.layers=this.layers,this.add(l);const c=new En(fr,hr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,o),e.setRenderTarget(i,2,s),e.render(n,a),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(n,u),e.setRenderTarget(d,f,h),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class o_ extends _n{constructor(e=[],n=jr,i,s,r,o,a,l,c,u){super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class JM extends js{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new o_(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new oa(5,5,5),r=new hs({name:"CubemapFromEquirect",uniforms:Zr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:us});r.uniforms.tEquirect.value=n;const o=new jn(s,r),a=n.minFilter;return n.minFilter===Os&&(n.minFilter=li),new QM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}class Ia extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eE={type:"move"};class Pc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ia,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ia,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ia,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,v=.005;c.inputState.pinching&&f>h+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(eE)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ia;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class a_ extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Dc=new Y,tE=new Y,nE=new Ke;class Zi{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=Dc.subVectors(i,n).cross(tE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Dc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||nE.getNormalMatrix(e),s=this.coplanarPoint(Dc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Es=new Fd,iE=new Xe(.5,.5),Ua=new Y;class Bd{constructor(e=new Zi,n=new Zi,i=new Zi,s=new Zi,r=new Zi,o=new Zi){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ci,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],f=r[6],h=r[7],v=r[8],x=r[9],m=r[10],p=r[11],A=r[12],E=r[13],b=r[14],D=r[15];if(s[0].setComponents(c-o,h-u,p-v,D-A).normalize(),s[1].setComponents(c+o,h+u,p+v,D+A).normalize(),s[2].setComponents(c+a,h+d,p+x,D+E).normalize(),s[3].setComponents(c-a,h-d,p-x,D-E).normalize(),i)s[4].setComponents(l,f,m,b).normalize(),s[5].setComponents(c-l,h-f,p-m,D-b).normalize();else if(s[4].setComponents(c-l,h-f,p-m,D-b).normalize(),n===ci)s[5].setComponents(c+l,h+f,p+m,D+b).normalize();else if(n===xl)s[5].setComponents(l,f,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){Es.center.set(0,0,0);const n=iE.distanceTo(e.center);return Es.radius=.7071067811865476+n,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Ua.x=s.normal.x>0?e.max.x:e.min.x,Ua.y=s.normal.y>0?e.max.y:e.min.y,Ua.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class l_ extends _n{constructor(e,n,i=$s,s,r,o,a=Zn,l=Zn,c,u=Fo,d=1){if(u!==Fo&&u!==Bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class kl extends gs{constructor(e=1,n=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],f=[],h=[];let v=0;const x=[],m=i/2;let p=0;A(),o===!1&&(e>0&&E(!0),n>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new fi(d,3)),this.setAttribute("normal",new fi(f,3)),this.setAttribute("uv",new fi(h,2));function A(){const b=new Y,D=new Y;let C=0;const O=(n-e)/i;for(let U=0;U<=r;U++){const w=[],S=U/r,R=S*(n-e)+e;for(let K=0;K<=s;K++){const Z=K/s,te=Z*l+a,ce=Math.sin(te),Q=Math.cos(te);D.x=R*ce,D.y=-S*i+m,D.z=R*Q,d.push(D.x,D.y,D.z),b.set(ce,O,Q).normalize(),f.push(b.x,b.y,b.z),h.push(Z,1-S),w.push(v++)}x.push(w)}for(let U=0;U<s;U++)for(let w=0;w<r;w++){const S=x[w][U],R=x[w+1][U],K=x[w+1][U+1],Z=x[w][U+1];(e>0||w!==0)&&(u.push(S,R,Z),C+=3),(n>0||w!==r-1)&&(u.push(R,K,Z),C+=3)}c.addGroup(p,C,0),p+=C}function E(b){const D=v,C=new Xe,O=new Y;let U=0;const w=b===!0?e:n,S=b===!0?1:-1;for(let K=1;K<=s;K++)d.push(0,m*S,0),f.push(0,S,0),h.push(.5,.5),v++;const R=v;for(let K=0;K<=s;K++){const te=K/s*l+a,ce=Math.cos(te),Q=Math.sin(te);O.x=w*Q,O.y=m*S,O.z=w*ce,d.push(O.x,O.y,O.z),f.push(0,S,0),C.x=ce*.5+.5,C.y=Q*.5*S+.5,h.push(C.x,C.y),v++}for(let K=0;K<s;K++){const Z=D+K,te=R+K;b===!0?u.push(te,te+1,Z):u.push(te+1,te,Z),U+=3}c.addGroup(p,U,b===!0?1:2),p+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zl extends gs{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,f=n/l,h=[],v=[],x=[],m=[];for(let p=0;p<u;p++){const A=p*f-o;for(let E=0;E<c;E++){const b=E*d-r;v.push(b,-A,0),x.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){const E=A+c*p,b=A+c*(p+1),D=A+1+c*(p+1),C=A+1+c*p;h.push(E,b,C),h.push(b,D,C)}this.setIndex(h),this.setAttribute("position",new fi(v,3)),this.setAttribute("normal",new fi(x,3)),this.setAttribute("uv",new fi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zl(e.width,e.height,e.widthSegments,e.heightSegments)}}class sE extends ra{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jg,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class c_ extends sE{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class rE extends ra{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_M,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oE extends ra{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class u_ extends Jt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Lc=new Lt,Rh=new Y,Ph=new Y;class aE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bd,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Rh.setFromMatrixPosition(e.matrixWorld),n.position.copy(Rh),Ph.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Ph),n.updateMatrixWorld(),Lc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lc,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Lc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class d_ extends r_{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class lE extends aE{constructor(){super(new d_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wu extends u_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new lE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class f_ extends u_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class cE extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Dh{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Qe(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class uE extends Qs{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Lh(t,e,n,i){const s=dE(i);switch(n){case Gg:return t*e;case Xg:return t*e/s.components*s.byteLength;case Id:return t*e/s.components*s.byteLength;case $g:return t*e*2/s.components*s.byteLength;case Ud:return t*e*2/s.components*s.byteLength;case Wg:return t*e*3/s.components*s.byteLength;case qn:return t*e*4/s.components*s.byteLength;case Od:return t*e*4/s.components*s.byteLength;case qa:case ja:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ya:case Ka:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case vu:case yu:return Math.max(t,16)*Math.max(e,8)/4;case _u:case xu:return Math.max(t,8)*Math.max(e,8)/2;case wu:case bu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Su:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Mu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Eu:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Tu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Au:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Cu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ru:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Pu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Du:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Lu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Iu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Uu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ou:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Nu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Fu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Za:case Bu:case ku:return Math.ceil(t/4)*Math.ceil(e/4)*16;case qg:case zu:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Hu:case Vu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function dE(t){switch(t){case gi:case zg:return{byteLength:1,components:1};case Oo:case Hg:case na:return{byteLength:2,components:1};case Dd:case Ld:return{byteLength:2,components:4};case $s:case Pd:case Ui:return{byteLength:4,components:1};case Vg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function h_(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function fE(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((h,v)=>h.start-v.start);let f=0;for(let h=1;h<d.length;h++){const v=d[f],x=d[h];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++f,d[f]=x)}d.length=f+1;for(let h=0,v=d.length;h<v;h++){const x=d[h];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var hE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_E=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ME=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,EE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,TE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,AE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,CE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,RE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,DE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,IE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,UE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,OE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,NE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,FE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,BE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,HE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,VE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GE="gl_FragColor = linearToOutputTexel( gl_FragColor );",WE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$E=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,KE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,oT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_T=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ST=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ET=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,RT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,DT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,LT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,OT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,NT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,VT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$T=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,YT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,KT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ZT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,QT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,oA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,aA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_A=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,EA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,AA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,DA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,IA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,UA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,FA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,HA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,WA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:hE,alphahash_pars_fragment:pE,alphamap_fragment:mE,alphamap_pars_fragment:gE,alphatest_fragment:_E,alphatest_pars_fragment:vE,aomap_fragment:xE,aomap_pars_fragment:yE,batching_pars_vertex:wE,batching_vertex:bE,begin_vertex:SE,beginnormal_vertex:ME,bsdfs:EE,iridescence_fragment:TE,bumpmap_pars_fragment:AE,clipping_planes_fragment:CE,clipping_planes_pars_fragment:RE,clipping_planes_pars_vertex:PE,clipping_planes_vertex:DE,color_fragment:LE,color_pars_fragment:IE,color_pars_vertex:UE,color_vertex:OE,common:NE,cube_uv_reflection_fragment:FE,defaultnormal_vertex:BE,displacementmap_pars_vertex:kE,displacementmap_vertex:zE,emissivemap_fragment:HE,emissivemap_pars_fragment:VE,colorspace_fragment:GE,colorspace_pars_fragment:WE,envmap_fragment:XE,envmap_common_pars_fragment:$E,envmap_pars_fragment:qE,envmap_pars_vertex:jE,envmap_physical_pars_fragment:rT,envmap_vertex:YE,fog_vertex:KE,fog_pars_vertex:ZE,fog_fragment:QE,fog_pars_fragment:JE,gradientmap_pars_fragment:eT,lightmap_pars_fragment:tT,lights_lambert_fragment:nT,lights_lambert_pars_fragment:iT,lights_pars_begin:sT,lights_toon_fragment:oT,lights_toon_pars_fragment:aT,lights_phong_fragment:lT,lights_phong_pars_fragment:cT,lights_physical_fragment:uT,lights_physical_pars_fragment:dT,lights_fragment_begin:fT,lights_fragment_maps:hT,lights_fragment_end:pT,logdepthbuf_fragment:mT,logdepthbuf_pars_fragment:gT,logdepthbuf_pars_vertex:_T,logdepthbuf_vertex:vT,map_fragment:xT,map_pars_fragment:yT,map_particle_fragment:wT,map_particle_pars_fragment:bT,metalnessmap_fragment:ST,metalnessmap_pars_fragment:MT,morphinstance_vertex:ET,morphcolor_vertex:TT,morphnormal_vertex:AT,morphtarget_pars_vertex:CT,morphtarget_vertex:RT,normal_fragment_begin:PT,normal_fragment_maps:DT,normal_pars_fragment:LT,normal_pars_vertex:IT,normal_vertex:UT,normalmap_pars_fragment:OT,clearcoat_normal_fragment_begin:NT,clearcoat_normal_fragment_maps:FT,clearcoat_pars_fragment:BT,iridescence_pars_fragment:kT,opaque_fragment:zT,packing:HT,premultiplied_alpha_fragment:VT,project_vertex:GT,dithering_fragment:WT,dithering_pars_fragment:XT,roughnessmap_fragment:$T,roughnessmap_pars_fragment:qT,shadowmap_pars_fragment:jT,shadowmap_pars_vertex:YT,shadowmap_vertex:KT,shadowmask_pars_fragment:ZT,skinbase_vertex:QT,skinning_pars_vertex:JT,skinning_vertex:eA,skinnormal_vertex:tA,specularmap_fragment:nA,specularmap_pars_fragment:iA,tonemapping_fragment:sA,tonemapping_pars_fragment:rA,transmission_fragment:oA,transmission_pars_fragment:aA,uv_pars_fragment:lA,uv_pars_vertex:cA,uv_vertex:uA,worldpos_vertex:dA,background_vert:fA,background_frag:hA,backgroundCube_vert:pA,backgroundCube_frag:mA,cube_vert:gA,cube_frag:_A,depth_vert:vA,depth_frag:xA,distanceRGBA_vert:yA,distanceRGBA_frag:wA,equirect_vert:bA,equirect_frag:SA,linedashed_vert:MA,linedashed_frag:EA,meshbasic_vert:TA,meshbasic_frag:AA,meshlambert_vert:CA,meshlambert_frag:RA,meshmatcap_vert:PA,meshmatcap_frag:DA,meshnormal_vert:LA,meshnormal_frag:IA,meshphong_vert:UA,meshphong_frag:OA,meshphysical_vert:NA,meshphysical_frag:FA,meshtoon_vert:BA,meshtoon_frag:kA,points_vert:zA,points_frag:HA,shadow_vert:VA,shadow_frag:GA,sprite_vert:WA,sprite_frag:XA},Ae={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},ai={basic:{uniforms:rn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:rn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:rn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:rn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:rn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:rn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:rn([Ae.points,Ae.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:rn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:rn([Ae.common,Ae.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:rn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:rn([Ae.sprite,Ae.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:rn([Ae.common,Ae.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:rn([Ae.lights,Ae.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};ai.physical={uniforms:rn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Oa={r:0,b:0,g:0},Ts=new _i,$A=new Lt;function qA(t,e,n,i,s,r,o){const a=new Je(0);let l=r===!0?0:1,c,u,d=null,f=0,h=null;function v(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?n:e).get(b)),b}function x(E){let b=!1;const D=v(E);D===null?p(a,l):D&&D.isColor&&(p(D,1),b=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(E,b){const D=v(b);D&&(D.isCubeTexture||D.mapping===Bl)?(u===void 0&&(u=new jn(new oa(1,1,1),new hs({name:"BackgroundCubeMaterial",uniforms:Zr(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,O,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ts.copy(b.backgroundRotation),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),u.material.uniforms.envMap.value=D,u.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($A.makeRotationFromEuler(Ts)),u.material.toneMapped=at.getTransfer(D.colorSpace)!==mt,(d!==D||f!==D.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,d=D,f=D.version,h=t.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new jn(new zl(2,2),new hs({name:"BackgroundMaterial",uniforms:Zr(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=at.getTransfer(D.colorSpace)!==mt,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(d!==D||f!==D.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,d=D,f=D.version,h=t.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,b){E.getRGB(Oa,s_(t)),i.buffers.color.setClear(Oa.r,Oa.g,Oa.b,b,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,b=1){a.set(E),l=b,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:x,addToRenderList:m,dispose:A}}function jA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(S,R,K,Z,te){let ce=!1;const Q=d(Z,K,R);r!==Q&&(r=Q,c(r.object)),ce=h(S,Z,K,te),ce&&v(S,Z,K,te),te!==null&&e.update(te,t.ELEMENT_ARRAY_BUFFER),(ce||o)&&(o=!1,b(S,R,K,Z),te!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function d(S,R,K){const Z=K.wireframe===!0;let te=i[S.id];te===void 0&&(te={},i[S.id]=te);let ce=te[R.id];ce===void 0&&(ce={},te[R.id]=ce);let Q=ce[Z];return Q===void 0&&(Q=f(l()),ce[Z]=Q),Q}function f(S){const R=[],K=[],Z=[];for(let te=0;te<n;te++)R[te]=0,K[te]=0,Z[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:K,attributeDivisors:Z,object:S,attributes:{},index:null}}function h(S,R,K,Z){const te=r.attributes,ce=R.attributes;let Q=0;const fe=K.getAttributes();for(const q in fe)if(fe[q].location>=0){const Se=te[q];let De=ce[q];if(De===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(De=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(De=S.instanceColor)),Se===void 0||Se.attribute!==De||De&&Se.data!==De.data)return!0;Q++}return r.attributesNum!==Q||r.index!==Z}function v(S,R,K,Z){const te={},ce=R.attributes;let Q=0;const fe=K.getAttributes();for(const q in fe)if(fe[q].location>=0){let Se=ce[q];Se===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(Se=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(Se=S.instanceColor));const De={};De.attribute=Se,Se&&Se.data&&(De.data=Se.data),te[q]=De,Q++}r.attributes=te,r.attributesNum=Q,r.index=Z}function x(){const S=r.newAttributes;for(let R=0,K=S.length;R<K;R++)S[R]=0}function m(S){p(S,0)}function p(S,R){const K=r.newAttributes,Z=r.enabledAttributes,te=r.attributeDivisors;K[S]=1,Z[S]===0&&(t.enableVertexAttribArray(S),Z[S]=1),te[S]!==R&&(t.vertexAttribDivisor(S,R),te[S]=R)}function A(){const S=r.newAttributes,R=r.enabledAttributes;for(let K=0,Z=R.length;K<Z;K++)R[K]!==S[K]&&(t.disableVertexAttribArray(K),R[K]=0)}function E(S,R,K,Z,te,ce,Q){Q===!0?t.vertexAttribIPointer(S,R,K,te,ce):t.vertexAttribPointer(S,R,K,Z,te,ce)}function b(S,R,K,Z){x();const te=Z.attributes,ce=K.getAttributes(),Q=R.defaultAttributeValues;for(const fe in ce){const q=ce[fe];if(q.location>=0){let be=te[fe];if(be===void 0&&(fe==="instanceMatrix"&&S.instanceMatrix&&(be=S.instanceMatrix),fe==="instanceColor"&&S.instanceColor&&(be=S.instanceColor)),be!==void 0){const Se=be.normalized,De=be.itemSize,Fe=e.get(be);if(Fe===void 0)continue;const it=Fe.buffer,tt=Fe.type,oe=Fe.bytesPerElement,xe=tt===t.INT||tt===t.UNSIGNED_INT||be.gpuType===Pd;if(be.isInterleavedBufferAttribute){const F=be.data,ue=F.stride,ae=be.offset;if(F.isInstancedInterleavedBuffer){for(let pe=0;pe<q.locationSize;pe++)p(q.location+pe,F.meshPerAttribute);S.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let pe=0;pe<q.locationSize;pe++)m(q.location+pe);t.bindBuffer(t.ARRAY_BUFFER,it);for(let pe=0;pe<q.locationSize;pe++)E(q.location+pe,De/q.locationSize,tt,Se,ue*oe,(ae+De/q.locationSize*pe)*oe,xe)}else{if(be.isInstancedBufferAttribute){for(let F=0;F<q.locationSize;F++)p(q.location+F,be.meshPerAttribute);S.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let F=0;F<q.locationSize;F++)m(q.location+F);t.bindBuffer(t.ARRAY_BUFFER,it);for(let F=0;F<q.locationSize;F++)E(q.location+F,De/q.locationSize,tt,Se,De*oe,De/q.locationSize*F*oe,xe)}}else if(Q!==void 0){const Se=Q[fe];if(Se!==void 0)switch(Se.length){case 2:t.vertexAttrib2fv(q.location,Se);break;case 3:t.vertexAttrib3fv(q.location,Se);break;case 4:t.vertexAttrib4fv(q.location,Se);break;default:t.vertexAttrib1fv(q.location,Se)}}}}A()}function D(){U();for(const S in i){const R=i[S];for(const K in R){const Z=R[K];for(const te in Z)u(Z[te].object),delete Z[te];delete R[K]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const R=i[S.id];for(const K in R){const Z=R[K];for(const te in Z)u(Z[te].object),delete Z[te];delete R[K]}delete i[S.id]}function O(S){for(const R in i){const K=i[R];if(K[S.id]===void 0)continue;const Z=K[S.id];for(const te in Z)u(Z[te].object),delete Z[te];delete K[S.id]}}function U(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:w,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:O,initAttributes:x,enableAttribute:m,disableUnusedAttributes:A}}function YA(t,e,n){let i;function s(c){i=c}function r(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let v=0;v<d;v++)h+=u[v];n.update(h,i,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let v=0;v<c.length;v++)o(c[v],u[v],f[v]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let v=0;for(let x=0;x<d;x++)v+=u[x]*f[x];n.update(v,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function KA(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(O){return!(O!==qn&&i.convert(O)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(O){const U=O===na&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==gi&&i.convert(O)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ui&&!U)}function l(O){if(O==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),A=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),b=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),D=v>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:E,maxFragmentUniforms:b,vertexTextures:D,maxSamples:C}}function ZA(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new Zi,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,h){const v=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=t.get(d);if(!s||v===null||v.length===0||r&&!m)r?u(null):c();else{const A=r?0:i,E=A*4;let b=p.clippingState||null;l.value=b,b=u(v,f,E,h);for(let D=0;D!==E;++D)b[D]=n[D];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,v){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const p=h+x*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,b=h;E!==x;++E,b+=4)o.copy(d[E]).applyMatrix4(A,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function QA(t){let e=new WeakMap;function n(o,a){return a===hu?o.mapping=jr:a===pu&&(o.mapping=Yr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===hu||a===pu)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new JM(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",s),n(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const yr=4,Ih=[.125,.215,.35,.446,.526,.582],Ds=20,Ic=new d_,Uh=new Je;let Uc=null,Oc=0,Nc=0,Fc=!1;const Rs=(1+Math.sqrt(5))/2,pr=1/Rs,Oh=[new Y(-Rs,pr,0),new Y(Rs,pr,0),new Y(-pr,0,Rs),new Y(pr,0,Rs),new Y(0,Rs,-pr),new Y(0,Rs,pr),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)],JA=new Y;class Nh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=JA}=r;Uc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uc,Oc,Nc),this._renderer.xr.enabled=Fc,e.scissorTest=!1,Na(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===jr||e.mapping===Yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:li,minFilter:li,generateMipmaps:!1,type:na,format:qn,colorSpace:Kr,depthBuffer:!1},s=Fh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fh(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eC(r)),this._blurMaterial=tC(r,e,n)}return s}_compileMaterial(e){const n=new jn(this._lodPlanes[0],e);this._renderer.compile(n,Ic)}_sceneToCubeUV(e,n,i,s,r){const l=new En(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Uh),d.toneMapping=ds,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const x=new t_({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),m=new jn(new oa,x);let p=!1;const A=e.background;A?A.isColor&&(x.color.copy(A),e.background=null,p=!0):(x.color.copy(Uh),p=!0);for(let E=0;E<6;E++){const b=E%3;b===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):b===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));const D=this._cubeSize;Na(s,b*D,E>2?D:0,D,D),d.setRenderTarget(s),p&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=A}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===jr||e.mapping===Yr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=kh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new jn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Na(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ic)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Oh[(s-r-1)%Oh.length];this._blur(e,r-1,r,o,a)}n.autoClear=i}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new jn(this._lodPlanes[s],c),f=c.uniforms,h=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Ds-1),x=r/v,m=isFinite(r)?1+Math.floor(u*x):Ds;m>Ds&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ds}`);const p=[];let A=0;for(let O=0;O<Ds;++O){const U=O/x,w=Math.exp(-U*U/2);p.push(w),O===0?A+=w:O<m&&(A+=2*w)}for(let O=0;O<p.length;O++)p[O]=p[O]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=v,f.mipInt.value=E-i;const b=this._sizeLods[s],D=3*b*(s>E-yr?s-E+yr:0),C=4*(this._cubeSize-b);Na(n,D,C,3*b,2*b),l.setRenderTarget(n),l.render(d,Ic)}}function eC(t){const e=[],n=[],i=[];let s=t;const r=t-yr+1+Ih.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);n.push(a);let l=1/a;o>t-yr?l=Ih[o-t+yr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,v=6,x=3,m=2,p=1,A=new Float32Array(x*v*h),E=new Float32Array(m*v*h),b=new Float32Array(p*v*h);for(let C=0;C<h;C++){const O=C%3*2/3-1,U=C>2?0:-1,w=[O,U,0,O+2/3,U,0,O+2/3,U+1,0,O,U,0,O+2/3,U+1,0,O,U+1,0];A.set(w,x*v*C),E.set(f,m*v*C);const S=[C,C,C,C,C,C];b.set(S,p*v*C)}const D=new gs;D.setAttribute("position",new di(A,x)),D.setAttribute("uv",new di(E,m)),D.setAttribute("faceIndex",new di(b,p)),e.push(D),s>yr&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Fh(t,e,n){const i=new js(t,e,n);return i.texture.mapping=Bl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Na(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function tC(t,e,n){const i=new Float32Array(Ds),s=new Y(0,1,0);return new hs({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:us,depthTest:!1,depthWrite:!1})}function Bh(){return new hs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:us,depthTest:!1,depthWrite:!1})}function kh(){return new hs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:us,depthTest:!1,depthWrite:!1})}function kd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nC(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===hu||l===pu,u=l===jr||l===Yr;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Nh(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&s(h)?(n===null&&(n=new Nh(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function iC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&Pr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function sC(t,e,n,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",o),delete s[f.id];const h=r.get(f);h&&(e.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],t.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,v=d.attributes.position;let x=0;if(h!==null){const A=h.array;x=h.version;for(let E=0,b=A.length;E<b;E+=3){const D=A[E+0],C=A[E+1],O=A[E+2];f.push(D,C,C,O,O,D)}}else if(v!==void 0){const A=v.array;x=v.version;for(let E=0,b=A.length/3-1;E<b;E+=3){const D=E+0,C=E+1,O=E+2;f.push(D,C,C,O,O,D)}}else return;const m=new(Kg(f)?i_:n_)(f,1);m.version=x;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function rC(t,e,n){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){t.drawElements(i,h,r,f*o),n.update(h,i,1)}function c(f,h,v){v!==0&&(t.drawElementsInstanced(i,h,r,f*o,v),n.update(h,i,v))}function u(f,h,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,v);let m=0;for(let p=0;p<v;p++)m+=h[p];n.update(m,i,1)}function d(f,h,v,x){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,h[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,r,f,0,x,0,v);let p=0;for(let A=0;A<v;A++)p+=h[A]*x[A];n.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function oC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function aC(t,e,n){const i=new WeakMap,s=new Rt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let w=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();const h=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let E=0;h===!0&&(E=1),v===!0&&(E=2),x===!0&&(E=3);let b=a.attributes.position.count*E,D=1;b>e.maxTextureSize&&(D=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const C=new Float32Array(b*D*4*d),O=new Zg(C,b,D,d);O.type=Ui,O.needsUpdate=!0;const U=E*4;for(let S=0;S<d;S++){const R=m[S],K=p[S],Z=A[S],te=b*D*4*S;for(let ce=0;ce<R.count;ce++){const Q=ce*U;h===!0&&(s.fromBufferAttribute(R,ce),C[te+Q+0]=s.x,C[te+Q+1]=s.y,C[te+Q+2]=s.z,C[te+Q+3]=0),v===!0&&(s.fromBufferAttribute(K,ce),C[te+Q+4]=s.x,C[te+Q+5]=s.y,C[te+Q+6]=s.z,C[te+Q+7]=0),x===!0&&(s.fromBufferAttribute(Z,ce),C[te+Q+8]=s.x,C[te+Q+9]=s.y,C[te+Q+10]=s.z,C[te+Q+11]=Z.itemSize===4?s.w:1)}}f={count:d,texture:O,size:new Xe(b,D)},i.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let h=0;for(let x=0;x<c.length;x++)h+=c[x];const v=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:r}}function lC(t,e,n,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:o}}const p_=new _n,zh=new l_(1,1),m_=new Zg,g_=new NM,__=new o_,Hh=[],Vh=[],Gh=new Float32Array(16),Wh=new Float32Array(9),Xh=new Float32Array(4);function so(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=Hh[s];if(r===void 0&&(r=new Float32Array(s),Hh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function kt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Hl(t,e){let n=Vh[e];n===void 0&&(n=new Int32Array(e),Vh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function cC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function uC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function dC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(kt(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function fC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function hC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(kt(n,i))return;Xh.set(i),t.uniformMatrix2fv(this.addr,!1,Xh),zt(n,i)}}function pC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(kt(n,i))return;Wh.set(i),t.uniformMatrix3fv(this.addr,!1,Wh),zt(n,i)}}function mC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(kt(n,i))return;Gh.set(i),t.uniformMatrix4fv(this.addr,!1,Gh),zt(n,i)}}function gC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function _C(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function vC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function xC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function yC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function wC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function bC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function SC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function MC(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(zh.compareFunction=Yg,r=zh):r=p_,n.setTexture2D(e||r,s)}function EC(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||g_,s)}function TC(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||__,s)}function AC(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||m_,s)}function CC(t){switch(t){case 5126:return cC;case 35664:return uC;case 35665:return dC;case 35666:return fC;case 35674:return hC;case 35675:return pC;case 35676:return mC;case 5124:case 35670:return gC;case 35667:case 35671:return _C;case 35668:case 35672:return vC;case 35669:case 35673:return xC;case 5125:return yC;case 36294:return wC;case 36295:return bC;case 36296:return SC;case 35678:case 36198:case 36298:case 36306:case 35682:return MC;case 35679:case 36299:case 36307:return EC;case 35680:case 36300:case 36308:case 36293:return TC;case 36289:case 36303:case 36311:case 36292:return AC}}function RC(t,e){t.uniform1fv(this.addr,e)}function PC(t,e){const n=so(e,this.size,2);t.uniform2fv(this.addr,n)}function DC(t,e){const n=so(e,this.size,3);t.uniform3fv(this.addr,n)}function LC(t,e){const n=so(e,this.size,4);t.uniform4fv(this.addr,n)}function IC(t,e){const n=so(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function UC(t,e){const n=so(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function OC(t,e){const n=so(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function NC(t,e){t.uniform1iv(this.addr,e)}function FC(t,e){t.uniform2iv(this.addr,e)}function BC(t,e){t.uniform3iv(this.addr,e)}function kC(t,e){t.uniform4iv(this.addr,e)}function zC(t,e){t.uniform1uiv(this.addr,e)}function HC(t,e){t.uniform2uiv(this.addr,e)}function VC(t,e){t.uniform3uiv(this.addr,e)}function GC(t,e){t.uniform4uiv(this.addr,e)}function WC(t,e,n){const i=this.cache,s=e.length,r=Hl(n,s);kt(i,r)||(t.uniform1iv(this.addr,r),zt(i,r));for(let o=0;o!==s;++o)n.setTexture2D(e[o]||p_,r[o])}function XC(t,e,n){const i=this.cache,s=e.length,r=Hl(n,s);kt(i,r)||(t.uniform1iv(this.addr,r),zt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||g_,r[o])}function $C(t,e,n){const i=this.cache,s=e.length,r=Hl(n,s);kt(i,r)||(t.uniform1iv(this.addr,r),zt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||__,r[o])}function qC(t,e,n){const i=this.cache,s=e.length,r=Hl(n,s);kt(i,r)||(t.uniform1iv(this.addr,r),zt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||m_,r[o])}function jC(t){switch(t){case 5126:return RC;case 35664:return PC;case 35665:return DC;case 35666:return LC;case 35674:return IC;case 35675:return UC;case 35676:return OC;case 5124:case 35670:return NC;case 35667:case 35671:return FC;case 35668:case 35672:return BC;case 35669:case 35673:return kC;case 5125:return zC;case 36294:return HC;case 36295:return VC;case 36296:return GC;case 35678:case 36198:case 36298:case 36306:case 35682:return WC;case 35679:case 36299:case 36307:return XC;case 35680:case 36300:case 36308:case 36293:return $C;case 36289:case 36303:case 36311:case 36292:return qC}}class YC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=CC(n.type)}}class KC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=jC(n.type)}}class ZC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const Bc=/(\w+)(\])?(\[|\.)?/g;function $h(t,e){t.seq.push(e),t.map[e.id]=e}function QC(t,e,n){const i=t.name,s=i.length;for(Bc.lastIndex=0;;){const r=Bc.exec(i),o=Bc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){$h(n,c===void 0?new YC(a,t,e):new KC(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new ZC(a),$h(n,d)),n=d}}}class Ja{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(n,s),o=e.getUniformLocation(n,r.name);QC(r,o,this)}}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function qh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const JC=37297;let e1=0;function t1(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const jh=new Ke;function n1(t){at._getMatrix(jh,at.workingColorSpace,t);const e=`mat3( ${jh.elements.map(n=>n.toFixed(4))} )`;switch(at.getTransfer(t)){case vl:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Yh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+t1(t.getShaderSource(e),a)}else return r}function i1(t,e){const n=n1(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function s1(t,e){let n;switch(e){case cM:n="Linear";break;case uM:n="Reinhard";break;case dM:n="Cineon";break;case fM:n="ACESFilmic";break;case pM:n="AgX";break;case mM:n="Neutral";break;case hM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Fa=new Y;function r1(){at.getLuminanceCoefficients(Fa);const t=Fa.x.toFixed(4),e=Fa.y.toFixed(4),n=Fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vo).join(`
`)}function a1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function l1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function vo(t){return t!==""}function Kh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const c1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xu(t){return t.replace(c1,d1)}const u1=new Map;function d1(t,e){let n=Ze[e];if(n===void 0){const i=u1.get(e);if(i!==void 0)n=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xu(n)}const f1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qh(t){return t.replace(f1,h1)}function h1(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jh(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function p1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Fg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===VS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ai&&(e="SHADOWMAP_TYPE_VSM"),e}function m1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case jr:case Yr:e="ENVMAP_TYPE_CUBE";break;case Bl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function g1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Yr:e="ENVMAP_MODE_REFRACTION";break}return e}function _1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Bg:e="ENVMAP_BLENDING_MULTIPLY";break;case aM:e="ENVMAP_BLENDING_MIX";break;case lM:e="ENVMAP_BLENDING_ADD";break}return e}function v1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function x1(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=p1(n),c=m1(n),u=g1(n),d=_1(n),f=v1(n),h=o1(n),v=a1(r),x=s.createProgram();let m,p,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(vo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(vo).join(`
`),p.length>0&&(p+=`
`)):(m=[Jh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vo).join(`
`),p=[Jh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ds?"#define TONE_MAPPING":"",n.toneMapping!==ds?Ze.tonemapping_pars_fragment:"",n.toneMapping!==ds?s1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,i1("linearToOutputTexel",n.outputColorSpace),r1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(vo).join(`
`)),o=Xu(o),o=Kh(o,n),o=Zh(o,n),a=Xu(a),a=Kh(a,n),a=Zh(a,n),o=Qh(o),a=Qh(a),n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=A+m+o,b=A+p+a,D=qh(s,s.VERTEX_SHADER,E),C=qh(s,s.FRAGMENT_SHADER,b);s.attachShader(x,D),s.attachShader(x,C),n.index0AttributeName!==void 0?s.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function O(R){if(t.debug.checkShaderErrors){const K=s.getProgramInfoLog(x)||"",Z=s.getShaderInfoLog(D)||"",te=s.getShaderInfoLog(C)||"",ce=K.trim(),Q=Z.trim(),fe=te.trim();let q=!0,be=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,x,D,C);else{const Se=Yh(s,D,"vertex"),De=Yh(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+ce+`
`+Se+`
`+De)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(Q===""||fe==="")&&(be=!1);be&&(R.diagnostics={runnable:q,programLog:ce,vertexShader:{log:Q,prefix:m},fragmentShader:{log:fe,prefix:p}})}s.deleteShader(D),s.deleteShader(C),U=new Ja(s,x),w=l1(s,x)}let U;this.getUniforms=function(){return U===void 0&&O(this),U};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,JC)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=e1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=C,this}let y1=0;class w1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new b1(e),n.set(e,i)),i}}class b1{constructor(e){this.id=y1++,this.code=e,this.usedTimes=0}}function S1(t,e,n,i,s,r,o){const a=new Jg,l=new w1,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let h=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,S,R,K,Z){const te=K.fog,ce=Z.geometry,Q=w.isMeshStandardMaterial?K.environment:null,fe=(w.isMeshStandardMaterial?n:e).get(w.envMap||Q),q=fe&&fe.mapping===Bl?fe.image.height:null,be=v[w.type];w.precision!==null&&(h=s.getMaxPrecision(w.precision),h!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",h,"instead."));const Se=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,De=Se!==void 0?Se.length:0;let Fe=0;ce.morphAttributes.position!==void 0&&(Fe=1),ce.morphAttributes.normal!==void 0&&(Fe=2),ce.morphAttributes.color!==void 0&&(Fe=3);let it,tt,oe,xe;if(be){const ut=ai[be];it=ut.vertexShader,tt=ut.fragmentShader}else it=w.vertexShader,tt=w.fragmentShader,l.update(w),oe=l.getVertexShaderID(w),xe=l.getFragmentShaderID(w);const F=t.getRenderTarget(),ue=t.state.buffers.depth.getReversed(),ae=Z.isInstancedMesh===!0,pe=Z.isBatchedMesh===!0,ze=!!w.map,T=!!w.matcap,_=!!fe,B=!!w.aoMap,X=!!w.lightMap,ne=!!w.bumpMap,$=!!w.normalMap,me=!!w.displacementMap,J=!!w.emissiveMap,I=!!w.metalnessMap,P=!!w.roughnessMap,j=w.anisotropy>0,y=w.clearcoat>0,g=w.dispersion>0,L=w.iridescence>0,k=w.sheen>0,V=w.transmission>0,N=j&&!!w.anisotropyMap,re=y&&!!w.clearcoatMap,le=y&&!!w.clearcoatNormalMap,we=y&&!!w.clearcoatRoughnessMap,Ee=L&&!!w.iridescenceMap,ge=L&&!!w.iridescenceThicknessMap,Ce=k&&!!w.sheenColorMap,Ue=k&&!!w.sheenRoughnessMap,Pe=!!w.specularMap,Te=!!w.specularColorMap,Ye=!!w.specularIntensityMap,z=V&&!!w.transmissionMap,ye=V&&!!w.thicknessMap,Me=!!w.gradientMap,Ie=!!w.alphaMap,_e=w.alphaTest>0,he=!!w.alphaHash,Ne=!!w.extensions;let $e=ds;w.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&($e=t.toneMapping);const xt={shaderID:be,shaderType:w.type,shaderName:w.name,vertexShader:it,fragmentShader:tt,defines:w.defines,customVertexShaderID:oe,customFragmentShaderID:xe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:h,batching:pe,batchingColor:pe&&Z._colorsTexture!==null,instancing:ae,instancingColor:ae&&Z.instanceColor!==null,instancingMorph:ae&&Z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:F===null?t.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Kr,alphaToCoverage:!!w.alphaToCoverage,map:ze,matcap:T,envMap:_,envMapMode:_&&fe.mapping,envMapCubeUVHeight:q,aoMap:B,lightMap:X,bumpMap:ne,normalMap:$,displacementMap:f&&me,emissiveMap:J,normalMapObjectSpace:$&&w.normalMapType===xM,normalMapTangentSpace:$&&w.normalMapType===jg,metalnessMap:I,roughnessMap:P,anisotropy:j,anisotropyMap:N,clearcoat:y,clearcoatMap:re,clearcoatNormalMap:le,clearcoatRoughnessMap:we,dispersion:g,iridescence:L,iridescenceMap:Ee,iridescenceThicknessMap:ge,sheen:k,sheenColorMap:Ce,sheenRoughnessMap:Ue,specularMap:Pe,specularColorMap:Te,specularIntensityMap:Ye,transmission:V,transmissionMap:z,thicknessMap:ye,gradientMap:Me,opaque:w.transparent===!1&&w.blending===Rr&&w.alphaToCoverage===!1,alphaMap:Ie,alphaTest:_e,alphaHash:he,combine:w.combine,mapUv:ze&&x(w.map.channel),aoMapUv:B&&x(w.aoMap.channel),lightMapUv:X&&x(w.lightMap.channel),bumpMapUv:ne&&x(w.bumpMap.channel),normalMapUv:$&&x(w.normalMap.channel),displacementMapUv:me&&x(w.displacementMap.channel),emissiveMapUv:J&&x(w.emissiveMap.channel),metalnessMapUv:I&&x(w.metalnessMap.channel),roughnessMapUv:P&&x(w.roughnessMap.channel),anisotropyMapUv:N&&x(w.anisotropyMap.channel),clearcoatMapUv:re&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:le&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&x(w.sheenRoughnessMap.channel),specularMapUv:Pe&&x(w.specularMap.channel),specularColorMapUv:Te&&x(w.specularColorMap.channel),specularIntensityMapUv:Ye&&x(w.specularIntensityMap.channel),transmissionMapUv:z&&x(w.transmissionMap.channel),thicknessMapUv:ye&&x(w.thicknessMap.channel),alphaMapUv:Ie&&x(w.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&($||j),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ce.attributes.uv&&(ze||Ie),fog:!!te,useFog:w.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ue,skinning:Z.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:Fe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:$e,decodeVideoTexture:ze&&w.map.isVideoTexture===!0&&at.getTransfer(w.map.colorSpace)===mt,decodeVideoTextureEmissive:J&&w.emissiveMap.isVideoTexture===!0&&at.getTransfer(w.emissiveMap.colorSpace)===mt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ii,flipSided:w.side===gn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ne&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&w.extensions.multiDraw===!0||pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return xt.vertexUv1s=c.has(1),xt.vertexUv2s=c.has(2),xt.vertexUv3s=c.has(3),c.clear(),xt}function p(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const R in w.defines)S.push(R),S.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(A(S,w),E(S,w),S.push(t.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function A(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function E(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function b(w){const S=v[w.type];let R;if(S){const K=ai[S];R=YM.clone(K.uniforms)}else R=w.uniforms;return R}function D(w,S){let R;for(let K=0,Z=u.length;K<Z;K++){const te=u[K];if(te.cacheKey===S){R=te,++R.usedTimes;break}}return R===void 0&&(R=new x1(t,S,w,r),u.push(R)),R}function C(w){if(--w.usedTimes===0){const S=u.indexOf(w);u[S]=u[u.length-1],u.pop(),w.destroy()}}function O(w){l.remove(w)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:D,releaseProgram:C,releaseShaderCache:O,programs:u,dispose:U}}function M1(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function E1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function ep(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function tp(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(d,f,h,v,x,m){let p=t[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:v,renderOrder:d.renderOrder,z:x,group:m},t[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=x,p.group=m),e++,p}function a(d,f,h,v,x,m){const p=o(d,f,h,v,x,m);h.transmission>0?i.push(p):h.transparent===!0?s.push(p):n.push(p)}function l(d,f,h,v,x,m){const p=o(d,f,h,v,x,m);h.transmission>0?i.unshift(p):h.transparent===!0?s.unshift(p):n.unshift(p)}function c(d,f){n.length>1&&n.sort(d||E1),i.length>1&&i.sort(f||ep),s.length>1&&s.sort(f||ep)}function u(){for(let d=e,f=t.length;d<f;d++){const h=t[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function T1(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new tp,t.set(i,[o])):s>=r.length?(o=new tp,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function A1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new Je};break;case"SpotLight":n={position:new Y,direction:new Y,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return t[e.id]=n,n}}}function C1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let R1=0;function P1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function D1(t){const e=new A1,n=C1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const s=new Y,r=new Lt,o=new Lt;function a(c){let u=0,d=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let h=0,v=0,x=0,m=0,p=0,A=0,E=0,b=0,D=0,C=0,O=0;c.sort(P1);for(let w=0,S=c.length;w<S;w++){const R=c[w],K=R.color,Z=R.intensity,te=R.distance,ce=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=K.r*Z,d+=K.g*Z,f+=K.b*Z;else if(R.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(R.sh.coefficients[Q],Z);O++}else if(R.isDirectionalLight){const Q=e.get(R);if(Q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const fe=R.shadow,q=n.get(R);q.shadowIntensity=fe.intensity,q.shadowBias=fe.bias,q.shadowNormalBias=fe.normalBias,q.shadowRadius=fe.radius,q.shadowMapSize=fe.mapSize,i.directionalShadow[h]=q,i.directionalShadowMap[h]=ce,i.directionalShadowMatrix[h]=R.shadow.matrix,A++}i.directional[h]=Q,h++}else if(R.isSpotLight){const Q=e.get(R);Q.position.setFromMatrixPosition(R.matrixWorld),Q.color.copy(K).multiplyScalar(Z),Q.distance=te,Q.coneCos=Math.cos(R.angle),Q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Q.decay=R.decay,i.spot[x]=Q;const fe=R.shadow;if(R.map&&(i.spotLightMap[D]=R.map,D++,fe.updateMatrices(R),R.castShadow&&C++),i.spotLightMatrix[x]=fe.matrix,R.castShadow){const q=n.get(R);q.shadowIntensity=fe.intensity,q.shadowBias=fe.bias,q.shadowNormalBias=fe.normalBias,q.shadowRadius=fe.radius,q.shadowMapSize=fe.mapSize,i.spotShadow[x]=q,i.spotShadowMap[x]=ce,b++}x++}else if(R.isRectAreaLight){const Q=e.get(R);Q.color.copy(K).multiplyScalar(Z),Q.halfWidth.set(R.width*.5,0,0),Q.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=Q,m++}else if(R.isPointLight){const Q=e.get(R);if(Q.color.copy(R.color).multiplyScalar(R.intensity),Q.distance=R.distance,Q.decay=R.decay,R.castShadow){const fe=R.shadow,q=n.get(R);q.shadowIntensity=fe.intensity,q.shadowBias=fe.bias,q.shadowNormalBias=fe.normalBias,q.shadowRadius=fe.radius,q.shadowMapSize=fe.mapSize,q.shadowCameraNear=fe.camera.near,q.shadowCameraFar=fe.camera.far,i.pointShadow[v]=q,i.pointShadowMap[v]=ce,i.pointShadowMatrix[v]=R.shadow.matrix,E++}i.point[v]=Q,v++}else if(R.isHemisphereLight){const Q=e.get(R);Q.skyColor.copy(R.color).multiplyScalar(Z),Q.groundColor.copy(R.groundColor).multiplyScalar(Z),i.hemi[p]=Q,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const U=i.hash;(U.directionalLength!==h||U.pointLength!==v||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==A||U.numPointShadows!==E||U.numSpotShadows!==b||U.numSpotMaps!==D||U.numLightProbes!==O)&&(i.directional.length=h,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=b+D-C,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=O,U.directionalLength=h,U.pointLength=v,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=A,U.numPointShadows=E,U.numSpotShadows=b,U.numSpotMaps=D,U.numLightProbes=O,i.version=R1++)}function l(c,u){let d=0,f=0,h=0,v=0,x=0;const m=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const E=c[p];if(E.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),d++}else if(E.isSpotLight){const b=i.spot[h];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),h++}else if(E.isRectAreaLight){const b=i.rectArea[v];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),v++}else if(E.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const b=i.hemi[x];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function np(t){const e=new D1(t),n=[],i=[];function s(u){c.camera=u,n.length=0,i.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function L1(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new np(t),e.set(s,[a])):r>=o.length?(a=new np(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const I1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function O1(t,e,n){let i=new Bd;const s=new Xe,r=new Xe,o=new Rt,a=new rE({depthPacking:vM}),l=new oE,c={},u=n.maxTextureSize,d={[fs]:gn,[gn]:fs,[Ii]:Ii},f=new hs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:I1,fragmentShader:U1}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const v=new gs;v.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new jn(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fg;let p=this.type;this.render=function(C,O,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const w=t.getRenderTarget(),S=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),K=t.state;K.setBlending(us),K.buffers.depth.getReversed()?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const Z=p!==Ai&&this.type===Ai,te=p===Ai&&this.type!==Ai;for(let ce=0,Q=C.length;ce<Q;ce++){const fe=C[ce],q=fe.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const be=q.getFrameExtents();if(s.multiply(be),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/be.x),s.x=r.x*be.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/be.y),s.y=r.y*be.y,q.mapSize.y=r.y)),q.map===null||Z===!0||te===!0){const De=this.type!==Ai?{minFilter:Zn,magFilter:Zn}:{};q.map!==null&&q.map.dispose(),q.map=new js(s.x,s.y,De),q.map.texture.name=fe.name+".shadowMap",q.camera.updateProjectionMatrix()}t.setRenderTarget(q.map),t.clear();const Se=q.getViewportCount();for(let De=0;De<Se;De++){const Fe=q.getViewport(De);o.set(r.x*Fe.x,r.y*Fe.y,r.x*Fe.z,r.y*Fe.w),K.viewport(o),q.updateMatrices(fe,De),i=q.getFrustum(),b(O,U,q.camera,fe,this.type)}q.isPointLightShadow!==!0&&this.type===Ai&&A(q,U),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(w,S,R)};function A(C,O){const U=e.update(x);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,h.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new js(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(O,null,U,f,x,null),h.uniforms.shadow_pass.value=C.mapPass.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(O,null,U,h,x,null)}function E(C,O,U,w){let S=null;const R=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)S=R;else if(S=U.isPointLight===!0?l:a,t.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const K=S.uuid,Z=O.uuid;let te=c[K];te===void 0&&(te={},c[K]=te);let ce=te[Z];ce===void 0&&(ce=S.clone(),te[Z]=ce,O.addEventListener("dispose",D)),S=ce}if(S.visible=O.visible,S.wireframe=O.wireframe,w===Ai?S.side=O.shadowSide!==null?O.shadowSide:O.side:S.side=O.shadowSide!==null?O.shadowSide:d[O.side],S.alphaMap=O.alphaMap,S.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,S.map=O.map,S.clipShadows=O.clipShadows,S.clippingPlanes=O.clippingPlanes,S.clipIntersection=O.clipIntersection,S.displacementMap=O.displacementMap,S.displacementScale=O.displacementScale,S.displacementBias=O.displacementBias,S.wireframeLinewidth=O.wireframeLinewidth,S.linewidth=O.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const K=t.properties.get(S);K.light=U}return S}function b(C,O,U,w,S){if(C.visible===!1)return;if(C.layers.test(O.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Ai)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const Z=e.update(C),te=C.material;if(Array.isArray(te)){const ce=Z.groups;for(let Q=0,fe=ce.length;Q<fe;Q++){const q=ce[Q],be=te[q.materialIndex];if(be&&be.visible){const Se=E(C,be,w,S);C.onBeforeShadow(t,C,O,U,Z,Se,q),t.renderBufferDirect(U,null,Z,Se,C,q),C.onAfterShadow(t,C,O,U,Z,Se,q)}}}else if(te.visible){const ce=E(C,te,w,S);C.onBeforeShadow(t,C,O,U,Z,ce,null),t.renderBufferDirect(U,null,Z,ce,C,null),C.onAfterShadow(t,C,O,U,Z,ce,null)}}const K=C.children;for(let Z=0,te=K.length;Z<te;Z++)b(K[Z],O,U,w,S)}function D(C){C.target.removeEventListener("dispose",D);for(const U in c){const w=c[U],S=C.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const N1={[ou]:au,[lu]:du,[cu]:fu,[qr]:uu,[au]:ou,[du]:lu,[fu]:cu,[uu]:qr};function F1(t,e){function n(){let z=!1;const ye=new Rt;let Me=null;const Ie=new Rt(0,0,0,0);return{setMask:function(_e){Me!==_e&&!z&&(t.colorMask(_e,_e,_e,_e),Me=_e)},setLocked:function(_e){z=_e},setClear:function(_e,he,Ne,$e,xt){xt===!0&&(_e*=$e,he*=$e,Ne*=$e),ye.set(_e,he,Ne,$e),Ie.equals(ye)===!1&&(t.clearColor(_e,he,Ne,$e),Ie.copy(ye))},reset:function(){z=!1,Me=null,Ie.set(-1,0,0,0)}}}function i(){let z=!1,ye=!1,Me=null,Ie=null,_e=null;return{setReversed:function(he){if(ye!==he){const Ne=e.get("EXT_clip_control");he?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),ye=he;const $e=_e;_e=null,this.setClear($e)}},getReversed:function(){return ye},setTest:function(he){he?F(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(he){Me!==he&&!z&&(t.depthMask(he),Me=he)},setFunc:function(he){if(ye&&(he=N1[he]),Ie!==he){switch(he){case ou:t.depthFunc(t.NEVER);break;case au:t.depthFunc(t.ALWAYS);break;case lu:t.depthFunc(t.LESS);break;case qr:t.depthFunc(t.LEQUAL);break;case cu:t.depthFunc(t.EQUAL);break;case uu:t.depthFunc(t.GEQUAL);break;case du:t.depthFunc(t.GREATER);break;case fu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ie=he}},setLocked:function(he){z=he},setClear:function(he){_e!==he&&(ye&&(he=1-he),t.clearDepth(he),_e=he)},reset:function(){z=!1,Me=null,Ie=null,_e=null,ye=!1}}}function s(){let z=!1,ye=null,Me=null,Ie=null,_e=null,he=null,Ne=null,$e=null,xt=null;return{setTest:function(ut){z||(ut?F(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(ut){ye!==ut&&!z&&(t.stencilMask(ut),ye=ut)},setFunc:function(ut,vi,Jn){(Me!==ut||Ie!==vi||_e!==Jn)&&(t.stencilFunc(ut,vi,Jn),Me=ut,Ie=vi,_e=Jn)},setOp:function(ut,vi,Jn){(he!==ut||Ne!==vi||$e!==Jn)&&(t.stencilOp(ut,vi,Jn),he=ut,Ne=vi,$e=Jn)},setLocked:function(ut){z=ut},setClear:function(ut){xt!==ut&&(t.clearStencil(ut),xt=ut)},reset:function(){z=!1,ye=null,Me=null,Ie=null,_e=null,he=null,Ne=null,$e=null,xt=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],v=null,x=!1,m=null,p=null,A=null,E=null,b=null,D=null,C=null,O=new Je(0,0,0),U=0,w=!1,S=null,R=null,K=null,Z=null,te=null;const ce=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,fe=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(q)[1]),Q=fe>=1):q.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Q=fe>=2);let be=null,Se={};const De=t.getParameter(t.SCISSOR_BOX),Fe=t.getParameter(t.VIEWPORT),it=new Rt().fromArray(De),tt=new Rt().fromArray(Fe);function oe(z,ye,Me,Ie){const _e=new Uint8Array(4),he=t.createTexture();t.bindTexture(z,he),t.texParameteri(z,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(z,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ne=0;Ne<Me;Ne++)z===t.TEXTURE_3D||z===t.TEXTURE_2D_ARRAY?t.texImage3D(ye,0,t.RGBA,1,1,Ie,0,t.RGBA,t.UNSIGNED_BYTE,_e):t.texImage2D(ye+Ne,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,_e);return he}const xe={};xe[t.TEXTURE_2D]=oe(t.TEXTURE_2D,t.TEXTURE_2D,1),xe[t.TEXTURE_CUBE_MAP]=oe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[t.TEXTURE_2D_ARRAY]=oe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),xe[t.TEXTURE_3D]=oe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),F(t.DEPTH_TEST),o.setFunc(qr),ne(!1),$(rh),F(t.CULL_FACE),B(us);function F(z){u[z]!==!0&&(t.enable(z),u[z]=!0)}function ue(z){u[z]!==!1&&(t.disable(z),u[z]=!1)}function ae(z,ye){return d[z]!==ye?(t.bindFramebuffer(z,ye),d[z]=ye,z===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ye),z===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ye),!0):!1}function pe(z,ye){let Me=h,Ie=!1;if(z){Me=f.get(ye),Me===void 0&&(Me=[],f.set(ye,Me));const _e=z.textures;if(Me.length!==_e.length||Me[0]!==t.COLOR_ATTACHMENT0){for(let he=0,Ne=_e.length;he<Ne;he++)Me[he]=t.COLOR_ATTACHMENT0+he;Me.length=_e.length,Ie=!0}}else Me[0]!==t.BACK&&(Me[0]=t.BACK,Ie=!0);Ie&&t.drawBuffers(Me)}function ze(z){return v!==z?(t.useProgram(z),v=z,!0):!1}const T={[Ps]:t.FUNC_ADD,[WS]:t.FUNC_SUBTRACT,[XS]:t.FUNC_REVERSE_SUBTRACT};T[$S]=t.MIN,T[qS]=t.MAX;const _={[jS]:t.ZERO,[YS]:t.ONE,[KS]:t.SRC_COLOR,[su]:t.SRC_ALPHA,[nM]:t.SRC_ALPHA_SATURATE,[eM]:t.DST_COLOR,[QS]:t.DST_ALPHA,[ZS]:t.ONE_MINUS_SRC_COLOR,[ru]:t.ONE_MINUS_SRC_ALPHA,[tM]:t.ONE_MINUS_DST_COLOR,[JS]:t.ONE_MINUS_DST_ALPHA,[iM]:t.CONSTANT_COLOR,[sM]:t.ONE_MINUS_CONSTANT_COLOR,[rM]:t.CONSTANT_ALPHA,[oM]:t.ONE_MINUS_CONSTANT_ALPHA};function B(z,ye,Me,Ie,_e,he,Ne,$e,xt,ut){if(z===us){x===!0&&(ue(t.BLEND),x=!1);return}if(x===!1&&(F(t.BLEND),x=!0),z!==GS){if(z!==m||ut!==w){if((p!==Ps||b!==Ps)&&(t.blendEquation(t.FUNC_ADD),p=Ps,b=Ps),ut)switch(z){case Rr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case oh:t.blendFunc(t.ONE,t.ONE);break;case ah:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case lh:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Rr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case oh:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case ah:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}A=null,E=null,D=null,C=null,O.set(0,0,0),U=0,m=z,w=ut}return}_e=_e||ye,he=he||Me,Ne=Ne||Ie,(ye!==p||_e!==b)&&(t.blendEquationSeparate(T[ye],T[_e]),p=ye,b=_e),(Me!==A||Ie!==E||he!==D||Ne!==C)&&(t.blendFuncSeparate(_[Me],_[Ie],_[he],_[Ne]),A=Me,E=Ie,D=he,C=Ne),($e.equals(O)===!1||xt!==U)&&(t.blendColor($e.r,$e.g,$e.b,xt),O.copy($e),U=xt),m=z,w=!1}function X(z,ye){z.side===Ii?ue(t.CULL_FACE):F(t.CULL_FACE);let Me=z.side===gn;ye&&(Me=!Me),ne(Me),z.blending===Rr&&z.transparent===!1?B(us):B(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const Ie=z.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),J(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?F(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function ne(z){S!==z&&(z?t.frontFace(t.CW):t.frontFace(t.CCW),S=z)}function $(z){z!==zS?(F(t.CULL_FACE),z!==R&&(z===rh?t.cullFace(t.BACK):z===HS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),R=z}function me(z){z!==K&&(Q&&t.lineWidth(z),K=z)}function J(z,ye,Me){z?(F(t.POLYGON_OFFSET_FILL),(Z!==ye||te!==Me)&&(t.polygonOffset(ye,Me),Z=ye,te=Me)):ue(t.POLYGON_OFFSET_FILL)}function I(z){z?F(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function P(z){z===void 0&&(z=t.TEXTURE0+ce-1),be!==z&&(t.activeTexture(z),be=z)}function j(z,ye,Me){Me===void 0&&(be===null?Me=t.TEXTURE0+ce-1:Me=be);let Ie=Se[Me];Ie===void 0&&(Ie={type:void 0,texture:void 0},Se[Me]=Ie),(Ie.type!==z||Ie.texture!==ye)&&(be!==Me&&(t.activeTexture(Me),be=Me),t.bindTexture(z,ye||xe[z]),Ie.type=z,Ie.texture=ye)}function y(){const z=Se[be];z!==void 0&&z.type!==void 0&&(t.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function g(){try{t.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function L(){try{t.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function k(){try{t.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function V(){try{t.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function N(){try{t.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function re(){try{t.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{t.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function we(){try{t.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ee(){try{t.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ge(){try{t.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ce(z){it.equals(z)===!1&&(t.scissor(z.x,z.y,z.z,z.w),it.copy(z))}function Ue(z){tt.equals(z)===!1&&(t.viewport(z.x,z.y,z.z,z.w),tt.copy(z))}function Pe(z,ye){let Me=c.get(ye);Me===void 0&&(Me=new WeakMap,c.set(ye,Me));let Ie=Me.get(z);Ie===void 0&&(Ie=t.getUniformBlockIndex(ye,z.name),Me.set(z,Ie))}function Te(z,ye){const Ie=c.get(ye).get(z);l.get(ye)!==Ie&&(t.uniformBlockBinding(ye,Ie,z.__bindingPointIndex),l.set(ye,Ie))}function Ye(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},be=null,Se={},d={},f=new WeakMap,h=[],v=null,x=!1,m=null,p=null,A=null,E=null,b=null,D=null,C=null,O=new Je(0,0,0),U=0,w=!1,S=null,R=null,K=null,Z=null,te=null,it.set(0,0,t.canvas.width,t.canvas.height),tt.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:F,disable:ue,bindFramebuffer:ae,drawBuffers:pe,useProgram:ze,setBlending:B,setMaterial:X,setFlipSided:ne,setCullFace:$,setLineWidth:me,setPolygonOffset:J,setScissorTest:I,activeTexture:P,bindTexture:j,unbindTexture:y,compressedTexImage2D:g,compressedTexImage3D:L,texImage2D:Ee,texImage3D:ge,updateUBOMapping:Pe,uniformBlockBinding:Te,texStorage2D:le,texStorage3D:we,texSubImage2D:k,texSubImage3D:V,compressedTexSubImage2D:N,compressedTexSubImage3D:re,scissor:Ce,viewport:Ue,reset:Ye}}function B1(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(y,g){return h?new OffscreenCanvas(y,g):yl("canvas")}function x(y,g,L){let k=1;const V=j(y);if((V.width>L||V.height>L)&&(k=L/Math.max(V.width,V.height)),k<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const N=Math.floor(k*V.width),re=Math.floor(k*V.height);d===void 0&&(d=v(N,re));const le=g?v(N,re):d;return le.width=N,le.height=re,le.getContext("2d").drawImage(y,0,0,N,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+N+"x"+re+")."),le}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),y;return y}function m(y){return y.generateMipmaps}function p(y){t.generateMipmap(y)}function A(y){return y.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?t.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(y,g,L,k,V=!1){if(y!==null){if(t[y]!==void 0)return t[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let N=g;if(g===t.RED&&(L===t.FLOAT&&(N=t.R32F),L===t.HALF_FLOAT&&(N=t.R16F),L===t.UNSIGNED_BYTE&&(N=t.R8)),g===t.RED_INTEGER&&(L===t.UNSIGNED_BYTE&&(N=t.R8UI),L===t.UNSIGNED_SHORT&&(N=t.R16UI),L===t.UNSIGNED_INT&&(N=t.R32UI),L===t.BYTE&&(N=t.R8I),L===t.SHORT&&(N=t.R16I),L===t.INT&&(N=t.R32I)),g===t.RG&&(L===t.FLOAT&&(N=t.RG32F),L===t.HALF_FLOAT&&(N=t.RG16F),L===t.UNSIGNED_BYTE&&(N=t.RG8)),g===t.RG_INTEGER&&(L===t.UNSIGNED_BYTE&&(N=t.RG8UI),L===t.UNSIGNED_SHORT&&(N=t.RG16UI),L===t.UNSIGNED_INT&&(N=t.RG32UI),L===t.BYTE&&(N=t.RG8I),L===t.SHORT&&(N=t.RG16I),L===t.INT&&(N=t.RG32I)),g===t.RGB_INTEGER&&(L===t.UNSIGNED_BYTE&&(N=t.RGB8UI),L===t.UNSIGNED_SHORT&&(N=t.RGB16UI),L===t.UNSIGNED_INT&&(N=t.RGB32UI),L===t.BYTE&&(N=t.RGB8I),L===t.SHORT&&(N=t.RGB16I),L===t.INT&&(N=t.RGB32I)),g===t.RGBA_INTEGER&&(L===t.UNSIGNED_BYTE&&(N=t.RGBA8UI),L===t.UNSIGNED_SHORT&&(N=t.RGBA16UI),L===t.UNSIGNED_INT&&(N=t.RGBA32UI),L===t.BYTE&&(N=t.RGBA8I),L===t.SHORT&&(N=t.RGBA16I),L===t.INT&&(N=t.RGBA32I)),g===t.RGB&&L===t.UNSIGNED_INT_5_9_9_9_REV&&(N=t.RGB9_E5),g===t.RGBA){const re=V?vl:at.getTransfer(k);L===t.FLOAT&&(N=t.RGBA32F),L===t.HALF_FLOAT&&(N=t.RGBA16F),L===t.UNSIGNED_BYTE&&(N=re===mt?t.SRGB8_ALPHA8:t.RGBA8),L===t.UNSIGNED_SHORT_4_4_4_4&&(N=t.RGBA4),L===t.UNSIGNED_SHORT_5_5_5_1&&(N=t.RGB5_A1)}return(N===t.R16F||N===t.R32F||N===t.RG16F||N===t.RG32F||N===t.RGBA16F||N===t.RGBA32F)&&e.get("EXT_color_buffer_float"),N}function b(y,g){let L;return y?g===null||g===$s||g===No?L=t.DEPTH24_STENCIL8:g===Ui?L=t.DEPTH32F_STENCIL8:g===Oo&&(L=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===$s||g===No?L=t.DEPTH_COMPONENT24:g===Ui?L=t.DEPTH_COMPONENT32F:g===Oo&&(L=t.DEPTH_COMPONENT16),L}function D(y,g){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==Zn&&y.minFilter!==li?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function C(y){const g=y.target;g.removeEventListener("dispose",C),U(g),g.isVideoTexture&&u.delete(g)}function O(y){const g=y.target;g.removeEventListener("dispose",O),S(g)}function U(y){const g=i.get(y);if(g.__webglInit===void 0)return;const L=y.source,k=f.get(L);if(k){const V=k[g.__cacheKey];V.usedTimes--,V.usedTimes===0&&w(y),Object.keys(k).length===0&&f.delete(L)}i.remove(y)}function w(y){const g=i.get(y);t.deleteTexture(g.__webglTexture);const L=y.source,k=f.get(L);delete k[g.__cacheKey],o.memory.textures--}function S(y){const g=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(g.__webglFramebuffer[k]))for(let V=0;V<g.__webglFramebuffer[k].length;V++)t.deleteFramebuffer(g.__webglFramebuffer[k][V]);else t.deleteFramebuffer(g.__webglFramebuffer[k]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[k])}else{if(Array.isArray(g.__webglFramebuffer))for(let k=0;k<g.__webglFramebuffer.length;k++)t.deleteFramebuffer(g.__webglFramebuffer[k]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let k=0;k<g.__webglColorRenderbuffer.length;k++)g.__webglColorRenderbuffer[k]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[k]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const L=y.textures;for(let k=0,V=L.length;k<V;k++){const N=i.get(L[k]);N.__webglTexture&&(t.deleteTexture(N.__webglTexture),o.memory.textures--),i.remove(L[k])}i.remove(y)}let R=0;function K(){R=0}function Z(){const y=R;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),R+=1,y}function te(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function ce(y,g){const L=i.get(y);if(y.isVideoTexture&&I(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&L.__version!==y.version){const k=y.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(L,y,g);return}}else y.isExternalTexture&&(L.__webglTexture=y.sourceTexture?y.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,L.__webglTexture,t.TEXTURE0+g)}function Q(y,g){const L=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&L.__version!==y.version){xe(L,y,g);return}n.bindTexture(t.TEXTURE_2D_ARRAY,L.__webglTexture,t.TEXTURE0+g)}function fe(y,g){const L=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&L.__version!==y.version){xe(L,y,g);return}n.bindTexture(t.TEXTURE_3D,L.__webglTexture,t.TEXTURE0+g)}function q(y,g){const L=i.get(y);if(y.version>0&&L.__version!==y.version){F(L,y,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+g)}const be={[mu]:t.REPEAT,[Us]:t.CLAMP_TO_EDGE,[gu]:t.MIRRORED_REPEAT},Se={[Zn]:t.NEAREST,[gM]:t.NEAREST_MIPMAP_NEAREST,[ga]:t.NEAREST_MIPMAP_LINEAR,[li]:t.LINEAR,[lc]:t.LINEAR_MIPMAP_NEAREST,[Os]:t.LINEAR_MIPMAP_LINEAR},De={[yM]:t.NEVER,[TM]:t.ALWAYS,[wM]:t.LESS,[Yg]:t.LEQUAL,[bM]:t.EQUAL,[EM]:t.GEQUAL,[SM]:t.GREATER,[MM]:t.NOTEQUAL};function Fe(y,g){if(g.type===Ui&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===li||g.magFilter===lc||g.magFilter===ga||g.magFilter===Os||g.minFilter===li||g.minFilter===lc||g.minFilter===ga||g.minFilter===Os)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(y,t.TEXTURE_WRAP_S,be[g.wrapS]),t.texParameteri(y,t.TEXTURE_WRAP_T,be[g.wrapT]),(y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY)&&t.texParameteri(y,t.TEXTURE_WRAP_R,be[g.wrapR]),t.texParameteri(y,t.TEXTURE_MAG_FILTER,Se[g.magFilter]),t.texParameteri(y,t.TEXTURE_MIN_FILTER,Se[g.minFilter]),g.compareFunction&&(t.texParameteri(y,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(y,t.TEXTURE_COMPARE_FUNC,De[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Zn||g.minFilter!==ga&&g.minFilter!==Os||g.type===Ui&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");t.texParameterf(y,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function it(y,g){let L=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",C));const k=g.source;let V=f.get(k);V===void 0&&(V={},f.set(k,V));const N=te(g);if(N!==y.__cacheKey){V[N]===void 0&&(V[N]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,L=!0),V[N].usedTimes++;const re=V[y.__cacheKey];re!==void 0&&(V[y.__cacheKey].usedTimes--,re.usedTimes===0&&w(g)),y.__cacheKey=N,y.__webglTexture=V[N].texture}return L}function tt(y,g,L){return Math.floor(Math.floor(y/L)/g)}function oe(y,g,L,k){const N=y.updateRanges;if(N.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,L,k,g.data);else{N.sort((ge,Ce)=>ge.start-Ce.start);let re=0;for(let ge=1;ge<N.length;ge++){const Ce=N[re],Ue=N[ge],Pe=Ce.start+Ce.count,Te=tt(Ue.start,g.width,4),Ye=tt(Ce.start,g.width,4);Ue.start<=Pe+1&&Te===Ye&&tt(Ue.start+Ue.count-1,g.width,4)===Te?Ce.count=Math.max(Ce.count,Ue.start+Ue.count-Ce.start):(++re,N[re]=Ue)}N.length=re+1;const le=t.getParameter(t.UNPACK_ROW_LENGTH),we=t.getParameter(t.UNPACK_SKIP_PIXELS),Ee=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let ge=0,Ce=N.length;ge<Ce;ge++){const Ue=N[ge],Pe=Math.floor(Ue.start/4),Te=Math.ceil(Ue.count/4),Ye=Pe%g.width,z=Math.floor(Pe/g.width),ye=Te,Me=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ye),t.pixelStorei(t.UNPACK_SKIP_ROWS,z),n.texSubImage2D(t.TEXTURE_2D,0,Ye,z,ye,Me,L,k,g.data)}y.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,le),t.pixelStorei(t.UNPACK_SKIP_PIXELS,we),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ee)}}function xe(y,g,L){let k=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(k=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(k=t.TEXTURE_3D);const V=it(y,g),N=g.source;n.bindTexture(k,y.__webglTexture,t.TEXTURE0+L);const re=i.get(N);if(N.version!==re.__version||V===!0){n.activeTexture(t.TEXTURE0+L);const le=at.getPrimaries(at.workingColorSpace),we=g.colorSpace===Ji?null:at.getPrimaries(g.colorSpace),Ee=g.colorSpace===Ji||le===we?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let ge=x(g.image,!1,s.maxTextureSize);ge=P(g,ge);const Ce=r.convert(g.format,g.colorSpace),Ue=r.convert(g.type);let Pe=E(g.internalFormat,Ce,Ue,g.colorSpace,g.isVideoTexture);Fe(k,g);let Te;const Ye=g.mipmaps,z=g.isVideoTexture!==!0,ye=re.__version===void 0||V===!0,Me=N.dataReady,Ie=D(g,ge);if(g.isDepthTexture)Pe=b(g.format===Bo,g.type),ye&&(z?n.texStorage2D(t.TEXTURE_2D,1,Pe,ge.width,ge.height):n.texImage2D(t.TEXTURE_2D,0,Pe,ge.width,ge.height,0,Ce,Ue,null));else if(g.isDataTexture)if(Ye.length>0){z&&ye&&n.texStorage2D(t.TEXTURE_2D,Ie,Pe,Ye[0].width,Ye[0].height);for(let _e=0,he=Ye.length;_e<he;_e++)Te=Ye[_e],z?Me&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,Te.width,Te.height,Ce,Ue,Te.data):n.texImage2D(t.TEXTURE_2D,_e,Pe,Te.width,Te.height,0,Ce,Ue,Te.data);g.generateMipmaps=!1}else z?(ye&&n.texStorage2D(t.TEXTURE_2D,Ie,Pe,ge.width,ge.height),Me&&oe(g,ge,Ce,Ue)):n.texImage2D(t.TEXTURE_2D,0,Pe,ge.width,ge.height,0,Ce,Ue,ge.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){z&&ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ie,Pe,Ye[0].width,Ye[0].height,ge.depth);for(let _e=0,he=Ye.length;_e<he;_e++)if(Te=Ye[_e],g.format!==qn)if(Ce!==null)if(z){if(Me)if(g.layerUpdates.size>0){const Ne=Lh(Te.width,Te.height,g.format,g.type);for(const $e of g.layerUpdates){const xt=Te.data.subarray($e*Ne/Te.data.BYTES_PER_ELEMENT,($e+1)*Ne/Te.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,$e,Te.width,Te.height,1,Ce,xt)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,0,Te.width,Te.height,ge.depth,Ce,Te.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,_e,Pe,Te.width,Te.height,ge.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?Me&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,0,Te.width,Te.height,ge.depth,Ce,Ue,Te.data):n.texImage3D(t.TEXTURE_2D_ARRAY,_e,Pe,Te.width,Te.height,ge.depth,0,Ce,Ue,Te.data)}else{z&&ye&&n.texStorage2D(t.TEXTURE_2D,Ie,Pe,Ye[0].width,Ye[0].height);for(let _e=0,he=Ye.length;_e<he;_e++)Te=Ye[_e],g.format!==qn?Ce!==null?z?Me&&n.compressedTexSubImage2D(t.TEXTURE_2D,_e,0,0,Te.width,Te.height,Ce,Te.data):n.compressedTexImage2D(t.TEXTURE_2D,_e,Pe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?Me&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,Te.width,Te.height,Ce,Ue,Te.data):n.texImage2D(t.TEXTURE_2D,_e,Pe,Te.width,Te.height,0,Ce,Ue,Te.data)}else if(g.isDataArrayTexture)if(z){if(ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ie,Pe,ge.width,ge.height,ge.depth),Me)if(g.layerUpdates.size>0){const _e=Lh(ge.width,ge.height,g.format,g.type);for(const he of g.layerUpdates){const Ne=ge.data.subarray(he*_e/ge.data.BYTES_PER_ELEMENT,(he+1)*_e/ge.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,ge.width,ge.height,1,Ce,Ue,Ne)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Ce,Ue,ge.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,ge.width,ge.height,ge.depth,0,Ce,Ue,ge.data);else if(g.isData3DTexture)z?(ye&&n.texStorage3D(t.TEXTURE_3D,Ie,Pe,ge.width,ge.height,ge.depth),Me&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Ce,Ue,ge.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,ge.width,ge.height,ge.depth,0,Ce,Ue,ge.data);else if(g.isFramebufferTexture){if(ye)if(z)n.texStorage2D(t.TEXTURE_2D,Ie,Pe,ge.width,ge.height);else{let _e=ge.width,he=ge.height;for(let Ne=0;Ne<Ie;Ne++)n.texImage2D(t.TEXTURE_2D,Ne,Pe,_e,he,0,Ce,Ue,null),_e>>=1,he>>=1}}else if(Ye.length>0){if(z&&ye){const _e=j(Ye[0]);n.texStorage2D(t.TEXTURE_2D,Ie,Pe,_e.width,_e.height)}for(let _e=0,he=Ye.length;_e<he;_e++)Te=Ye[_e],z?Me&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,Ce,Ue,Te):n.texImage2D(t.TEXTURE_2D,_e,Pe,Ce,Ue,Te);g.generateMipmaps=!1}else if(z){if(ye){const _e=j(ge);n.texStorage2D(t.TEXTURE_2D,Ie,Pe,_e.width,_e.height)}Me&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ce,Ue,ge)}else n.texImage2D(t.TEXTURE_2D,0,Pe,Ce,Ue,ge);m(g)&&p(k),re.__version=N.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function F(y,g,L){if(g.image.length!==6)return;const k=it(y,g),V=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,y.__webglTexture,t.TEXTURE0+L);const N=i.get(V);if(V.version!==N.__version||k===!0){n.activeTexture(t.TEXTURE0+L);const re=at.getPrimaries(at.workingColorSpace),le=g.colorSpace===Ji?null:at.getPrimaries(g.colorSpace),we=g.colorSpace===Ji||re===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Ee=g.isCompressedTexture||g.image[0].isCompressedTexture,ge=g.image[0]&&g.image[0].isDataTexture,Ce=[];for(let he=0;he<6;he++)!Ee&&!ge?Ce[he]=x(g.image[he],!0,s.maxCubemapSize):Ce[he]=ge?g.image[he].image:g.image[he],Ce[he]=P(g,Ce[he]);const Ue=Ce[0],Pe=r.convert(g.format,g.colorSpace),Te=r.convert(g.type),Ye=E(g.internalFormat,Pe,Te,g.colorSpace),z=g.isVideoTexture!==!0,ye=N.__version===void 0||k===!0,Me=V.dataReady;let Ie=D(g,Ue);Fe(t.TEXTURE_CUBE_MAP,g);let _e;if(Ee){z&&ye&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ie,Ye,Ue.width,Ue.height);for(let he=0;he<6;he++){_e=Ce[he].mipmaps;for(let Ne=0;Ne<_e.length;Ne++){const $e=_e[Ne];g.format!==qn?Pe!==null?z?Me&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne,0,0,$e.width,$e.height,Pe,$e.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne,Ye,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?Me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne,0,0,$e.width,$e.height,Pe,Te,$e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne,Ye,$e.width,$e.height,0,Pe,Te,$e.data)}}}else{if(_e=g.mipmaps,z&&ye){_e.length>0&&Ie++;const he=j(Ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ie,Ye,he.width,he.height)}for(let he=0;he<6;he++)if(ge){z?Me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ce[he].width,Ce[he].height,Pe,Te,Ce[he].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ye,Ce[he].width,Ce[he].height,0,Pe,Te,Ce[he].data);for(let Ne=0;Ne<_e.length;Ne++){const xt=_e[Ne].image[he].image;z?Me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne+1,0,0,xt.width,xt.height,Pe,Te,xt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne+1,Ye,xt.width,xt.height,0,Pe,Te,xt.data)}}else{z?Me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Pe,Te,Ce[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Ye,Pe,Te,Ce[he]);for(let Ne=0;Ne<_e.length;Ne++){const $e=_e[Ne];z?Me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne+1,0,0,Pe,Te,$e.image[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne+1,Ye,Pe,Te,$e.image[he])}}}m(g)&&p(t.TEXTURE_CUBE_MAP),N.__version=V.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function ue(y,g,L,k,V,N){const re=r.convert(L.format,L.colorSpace),le=r.convert(L.type),we=E(L.internalFormat,re,le,L.colorSpace),Ee=i.get(g),ge=i.get(L);if(ge.__renderTarget=g,!Ee.__hasExternalTextures){const Ce=Math.max(1,g.width>>N),Ue=Math.max(1,g.height>>N);V===t.TEXTURE_3D||V===t.TEXTURE_2D_ARRAY?n.texImage3D(V,N,we,Ce,Ue,g.depth,0,re,le,null):n.texImage2D(V,N,we,Ce,Ue,0,re,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,y),J(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,k,V,ge.__webglTexture,0,me(g)):(V===t.TEXTURE_2D||V>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,k,V,ge.__webglTexture,N),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ae(y,g,L){if(t.bindRenderbuffer(t.RENDERBUFFER,y),g.depthBuffer){const k=g.depthTexture,V=k&&k.isDepthTexture?k.type:null,N=b(g.stencilBuffer,V),re=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=me(g);J(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,N,g.width,g.height):L?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,N,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,N,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,re,t.RENDERBUFFER,y)}else{const k=g.textures;for(let V=0;V<k.length;V++){const N=k[V],re=r.convert(N.format,N.colorSpace),le=r.convert(N.type),we=E(N.internalFormat,re,le,N.colorSpace),Ee=me(g);L&&J(g)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ee,we,g.width,g.height):J(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ee,we,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,we,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function pe(y,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const k=i.get(g.depthTexture);k.__renderTarget=g,(!k.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ce(g.depthTexture,0);const V=k.__webglTexture,N=me(g);if(g.depthTexture.format===Fo)J(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,V,0,N):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,V,0);else if(g.depthTexture.format===Bo)J(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,V,0,N):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function ze(y){const g=i.get(y),L=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const k=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),k){const V=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,k.removeEventListener("dispose",V)};k.addEventListener("dispose",V),g.__depthDisposeCallback=V}g.__boundDepthTexture=k}if(y.depthTexture&&!g.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");const k=y.texture.mipmaps;k&&k.length>0?pe(g.__webglFramebuffer[0],y):pe(g.__webglFramebuffer,y)}else if(L){g.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[k]),g.__webglDepthbuffer[k]===void 0)g.__webglDepthbuffer[k]=t.createRenderbuffer(),ae(g.__webglDepthbuffer[k],y,!1);else{const V=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,N=g.__webglDepthbuffer[k];t.bindRenderbuffer(t.RENDERBUFFER,N),t.framebufferRenderbuffer(t.FRAMEBUFFER,V,t.RENDERBUFFER,N)}}else{const k=y.texture.mipmaps;if(k&&k.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),ae(g.__webglDepthbuffer,y,!1);else{const V=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,N=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,N),t.framebufferRenderbuffer(t.FRAMEBUFFER,V,t.RENDERBUFFER,N)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function T(y,g,L){const k=i.get(y);g!==void 0&&ue(k.__webglFramebuffer,y,y.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),L!==void 0&&ze(y)}function _(y){const g=y.texture,L=i.get(y),k=i.get(g);y.addEventListener("dispose",O);const V=y.textures,N=y.isWebGLCubeRenderTarget===!0,re=V.length>1;if(re||(k.__webglTexture===void 0&&(k.__webglTexture=t.createTexture()),k.__version=g.version,o.memory.textures++),N){L.__webglFramebuffer=[];for(let le=0;le<6;le++)if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[le]=[];for(let we=0;we<g.mipmaps.length;we++)L.__webglFramebuffer[le][we]=t.createFramebuffer()}else L.__webglFramebuffer[le]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let le=0;le<g.mipmaps.length;le++)L.__webglFramebuffer[le]=t.createFramebuffer()}else L.__webglFramebuffer=t.createFramebuffer();if(re)for(let le=0,we=V.length;le<we;le++){const Ee=i.get(V[le]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=t.createTexture(),o.memory.textures++)}if(y.samples>0&&J(y)===!1){L.__webglMultisampledFramebuffer=t.createFramebuffer(),L.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let le=0;le<V.length;le++){const we=V[le];L.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,L.__webglColorRenderbuffer[le]);const Ee=r.convert(we.format,we.colorSpace),ge=r.convert(we.type),Ce=E(we.internalFormat,Ee,ge,we.colorSpace,y.isXRRenderTarget===!0),Ue=me(y);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,Ce,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,L.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),y.depthBuffer&&(L.__webglDepthRenderbuffer=t.createRenderbuffer(),ae(L.__webglDepthRenderbuffer,y,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(N){n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture),Fe(t.TEXTURE_CUBE_MAP,g);for(let le=0;le<6;le++)if(g.mipmaps&&g.mipmaps.length>0)for(let we=0;we<g.mipmaps.length;we++)ue(L.__webglFramebuffer[le][we],y,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,we);else ue(L.__webglFramebuffer[le],y,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(g)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(re){for(let le=0,we=V.length;le<we;le++){const Ee=V[le],ge=i.get(Ee);let Ce=t.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(Ce=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ce,ge.__webglTexture),Fe(Ce,Ee),ue(L.__webglFramebuffer,y,Ee,t.COLOR_ATTACHMENT0+le,Ce,0),m(Ee)&&p(Ce)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(le=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,k.__webglTexture),Fe(le,g),g.mipmaps&&g.mipmaps.length>0)for(let we=0;we<g.mipmaps.length;we++)ue(L.__webglFramebuffer[we],y,g,t.COLOR_ATTACHMENT0,le,we);else ue(L.__webglFramebuffer,y,g,t.COLOR_ATTACHMENT0,le,0);m(g)&&p(le),n.unbindTexture()}y.depthBuffer&&ze(y)}function B(y){const g=y.textures;for(let L=0,k=g.length;L<k;L++){const V=g[L];if(m(V)){const N=A(y),re=i.get(V).__webglTexture;n.bindTexture(N,re),p(N),n.unbindTexture()}}}const X=[],ne=[];function $(y){if(y.samples>0){if(J(y)===!1){const g=y.textures,L=y.width,k=y.height;let V=t.COLOR_BUFFER_BIT;const N=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=i.get(y),le=g.length>1;if(le)for(let Ee=0;Ee<g.length;Ee++)n.bindFramebuffer(t.FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);const we=y.texture.mipmaps;we&&we.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let Ee=0;Ee<g.length;Ee++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(V|=t.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(V|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,re.__webglColorRenderbuffer[Ee]);const ge=i.get(g[Ee]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ge,0)}t.blitFramebuffer(0,0,L,k,0,0,L,k,V,t.NEAREST),l===!0&&(X.length=0,ne.length=0,X.push(t.COLOR_ATTACHMENT0+Ee),y.depthBuffer&&y.resolveDepthBuffer===!1&&(X.push(N),ne.push(N),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ne)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,X))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let Ee=0;Ee<g.length;Ee++){n.bindFramebuffer(t.FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,re.__webglColorRenderbuffer[Ee]);const ge=i.get(g[Ee]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,ge,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const g=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function me(y){return Math.min(s.maxSamples,y.samples)}function J(y){const g=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function I(y){const g=o.render.frame;u.get(y)!==g&&(u.set(y,g),y.update())}function P(y,g){const L=y.colorSpace,k=y.format,V=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||L!==Kr&&L!==Ji&&(at.getTransfer(L)===mt?(k!==qn||V!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),g}function j(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=K,this.setTexture2D=ce,this.setTexture2DArray=Q,this.setTexture3D=fe,this.setTextureCube=q,this.rebindTextures=T,this.setupRenderTarget=_,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=J}function k1(t,e){function n(i,s=Ji){let r;const o=at.getTransfer(s);if(i===gi)return t.UNSIGNED_BYTE;if(i===Dd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Ld)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Vg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===zg)return t.BYTE;if(i===Hg)return t.SHORT;if(i===Oo)return t.UNSIGNED_SHORT;if(i===Pd)return t.INT;if(i===$s)return t.UNSIGNED_INT;if(i===Ui)return t.FLOAT;if(i===na)return t.HALF_FLOAT;if(i===Gg)return t.ALPHA;if(i===Wg)return t.RGB;if(i===qn)return t.RGBA;if(i===Fo)return t.DEPTH_COMPONENT;if(i===Bo)return t.DEPTH_STENCIL;if(i===Xg)return t.RED;if(i===Id)return t.RED_INTEGER;if(i===$g)return t.RG;if(i===Ud)return t.RG_INTEGER;if(i===Od)return t.RGBA_INTEGER;if(i===qa||i===ja||i===Ya||i===Ka)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===qa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===qa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ja)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ka)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_u||i===vu||i===xu||i===yu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===_u)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wu||i===bu||i===Su)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===wu||i===bu)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Su)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Mu||i===Eu||i===Tu||i===Au||i===Cu||i===Ru||i===Pu||i===Du||i===Lu||i===Iu||i===Uu||i===Ou||i===Nu||i===Fu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Mu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Eu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Au)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ru)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Pu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Du)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Iu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Uu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ou)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fu)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Za||i===Bu||i===ku)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Za)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ku)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qg||i===zu||i===Hu||i===Vu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Za)return r.COMPRESSED_RED_RGTC1_EXT;if(i===zu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===No?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class v_ extends _n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const z1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class V1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new v_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new hs({vertexShader:z1,fragmentShader:H1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new jn(new zl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class G1 extends Qs{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,v=null;const x=new V1,m={},p=n.getContextAttributes();let A=null,E=null;const b=[],D=[],C=new Xe;let O=null;const U=new En;U.viewport=new Rt;const w=new En;w.viewport=new Rt;const S=[U,w],R=new cE;let K=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let xe=b[oe];return xe===void 0&&(xe=new Pc,b[oe]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(oe){let xe=b[oe];return xe===void 0&&(xe=new Pc,b[oe]=xe),xe.getGripSpace()},this.getHand=function(oe){let xe=b[oe];return xe===void 0&&(xe=new Pc,b[oe]=xe),xe.getHandSpace()};function te(oe){const xe=D.indexOf(oe.inputSource);if(xe===-1)return;const F=b[xe];F!==void 0&&(F.update(oe.inputSource,oe.frame,c||o),F.dispatchEvent({type:oe.type,data:oe.inputSource}))}function ce(){s.removeEventListener("select",te),s.removeEventListener("selectstart",te),s.removeEventListener("selectend",te),s.removeEventListener("squeeze",te),s.removeEventListener("squeezestart",te),s.removeEventListener("squeezeend",te),s.removeEventListener("end",ce),s.removeEventListener("inputsourceschange",Q);for(let oe=0;oe<b.length;oe++){const xe=D[oe];xe!==null&&(D[oe]=null,b[oe].disconnect(xe))}K=null,Z=null,x.reset();for(const oe in m)delete m[oe];e.setRenderTarget(A),h=null,f=null,d=null,s=null,E=null,tt.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){r=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(oe){c=oe},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(oe){if(s=oe,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",te),s.addEventListener("selectstart",te),s.addEventListener("selectend",te),s.addEventListener("squeeze",te),s.addEventListener("squeezestart",te),s.addEventListener("squeezeend",te),s.addEventListener("end",ce),s.addEventListener("inputsourceschange",Q),p.xrCompatible!==!0&&await n.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(s,n)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let F=null,ue=null,ae=null;p.depth&&(ae=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,F=p.stencil?Bo:Fo,ue=p.stencil?No:$s);const pe={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:r};f=d.createProjectionLayer(pe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new js(f.textureWidth,f.textureHeight,{format:qn,type:gi,depthTexture:new l_(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const F={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,n,F),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),E=new js(h.framebufferWidth,h.framebufferHeight,{format:qn,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),tt.setContext(s),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Q(oe){for(let xe=0;xe<oe.removed.length;xe++){const F=oe.removed[xe],ue=D.indexOf(F);ue>=0&&(D[ue]=null,b[ue].disconnect(F))}for(let xe=0;xe<oe.added.length;xe++){const F=oe.added[xe];let ue=D.indexOf(F);if(ue===-1){for(let pe=0;pe<b.length;pe++)if(pe>=D.length){D.push(F),ue=pe;break}else if(D[pe]===null){D[pe]=F,ue=pe;break}if(ue===-1)break}const ae=b[ue];ae&&ae.connect(F)}}const fe=new Y,q=new Y;function be(oe,xe,F){fe.setFromMatrixPosition(xe.matrixWorld),q.setFromMatrixPosition(F.matrixWorld);const ue=fe.distanceTo(q),ae=xe.projectionMatrix.elements,pe=F.projectionMatrix.elements,ze=ae[14]/(ae[10]-1),T=ae[14]/(ae[10]+1),_=(ae[9]+1)/ae[5],B=(ae[9]-1)/ae[5],X=(ae[8]-1)/ae[0],ne=(pe[8]+1)/pe[0],$=ze*X,me=ze*ne,J=ue/(-X+ne),I=J*-X;if(xe.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(I),oe.translateZ(J),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),ae[10]===-1)oe.projectionMatrix.copy(xe.projectionMatrix),oe.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const P=ze+J,j=T+J,y=$-I,g=me+(ue-I),L=_*T/j*P,k=B*T/j*P;oe.projectionMatrix.makePerspective(y,g,L,k,P,j),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function Se(oe,xe){xe===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(xe.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(s===null)return;let xe=oe.near,F=oe.far;x.texture!==null&&(x.depthNear>0&&(xe=x.depthNear),x.depthFar>0&&(F=x.depthFar)),R.near=w.near=U.near=xe,R.far=w.far=U.far=F,(K!==R.near||Z!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),K=R.near,Z=R.far),R.layers.mask=oe.layers.mask|6,U.layers.mask=R.layers.mask&3,w.layers.mask=R.layers.mask&5;const ue=oe.parent,ae=R.cameras;Se(R,ue);for(let pe=0;pe<ae.length;pe++)Se(ae[pe],ue);ae.length===2?be(R,U,w):R.projectionMatrix.copy(U.projectionMatrix),De(oe,R,ue)};function De(oe,xe,F){F===null?oe.matrix.copy(xe.matrixWorld):(oe.matrix.copy(F.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(xe.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(xe.projectionMatrix),oe.projectionMatrixInverse.copy(xe.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Gu*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(oe){l=oe,f!==null&&(f.fixedFoveation=oe),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=oe)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(R)},this.getCameraTexture=function(oe){return m[oe]};let Fe=null;function it(oe,xe){if(u=xe.getViewerPose(c||o),v=xe,u!==null){const F=u.views;h!==null&&(e.setRenderTargetFramebuffer(E,h.framebuffer),e.setRenderTarget(E));let ue=!1;F.length!==R.cameras.length&&(R.cameras.length=0,ue=!0);for(let T=0;T<F.length;T++){const _=F[T];let B=null;if(h!==null)B=h.getViewport(_);else{const ne=d.getViewSubImage(f,_);B=ne.viewport,T===0&&(e.setRenderTargetTextures(E,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(E))}let X=S[T];X===void 0&&(X=new En,X.layers.enable(T),X.viewport=new Rt,S[T]=X),X.matrix.fromArray(_.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(_.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(B.x,B.y,B.width,B.height),T===0&&(R.matrix.copy(X.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ue===!0&&R.cameras.push(X)}const ae=s.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&d){const T=d.getDepthInformation(F[0]);T&&T.isValid&&T.texture&&x.init(T,s.renderState)}if(ae&&ae.includes("camera-access")&&(e.state.unbindTexture(),d))for(let T=0;T<F.length;T++){const _=F[T].camera;if(_){let B=m[_];B||(B=new v_,m[_]=B);const X=d.getCameraImage(_);B.sourceTexture=X}}}for(let F=0;F<b.length;F++){const ue=D[F],ae=b[F];ue!==null&&ae!==void 0&&ae.update(ue,xe,c||o)}Fe&&Fe(oe,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),v=null}const tt=new h_;tt.setAnimationLoop(it),this.setAnimationLoop=function(oe){Fe=oe},this.dispose=function(){}}}const As=new _i,W1=new Lt;function X1(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,s_(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,A,E,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,A,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===gn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===gn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),E=A.envMap,b=A.envMapRotation;E&&(m.envMap.value=E,As.copy(b),As.x*=-1,As.y*=-1,As.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),m.envMapRotation.value.setFromMatrix4(W1.makeRotationFromEuler(As)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=E*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function $1(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,E){const b=E.program;i.uniformBlockBinding(A,b)}function c(A,E){let b=s[A.id];b===void 0&&(v(A),b=u(A),s[A.id]=b,A.addEventListener("dispose",m));const D=E.program;i.updateUBOMapping(A,D);const C=e.render.frame;r[A.id]!==C&&(f(A),r[A.id]=C)}function u(A){const E=d();A.__bindingPointIndex=E;const b=t.createBuffer(),D=A.__size,C=A.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,D,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,b),b}function d(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const E=s[A.id],b=A.uniforms,D=A.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let C=0,O=b.length;C<O;C++){const U=Array.isArray(b[C])?b[C]:[b[C]];for(let w=0,S=U.length;w<S;w++){const R=U[w];if(h(R,C,w,D)===!0){const K=R.__offset,Z=Array.isArray(R.value)?R.value:[R.value];let te=0;for(let ce=0;ce<Z.length;ce++){const Q=Z[ce],fe=x(Q);typeof Q=="number"||typeof Q=="boolean"?(R.__data[0]=Q,t.bufferSubData(t.UNIFORM_BUFFER,K+te,R.__data)):Q.isMatrix3?(R.__data[0]=Q.elements[0],R.__data[1]=Q.elements[1],R.__data[2]=Q.elements[2],R.__data[3]=0,R.__data[4]=Q.elements[3],R.__data[5]=Q.elements[4],R.__data[6]=Q.elements[5],R.__data[7]=0,R.__data[8]=Q.elements[6],R.__data[9]=Q.elements[7],R.__data[10]=Q.elements[8],R.__data[11]=0):(Q.toArray(R.__data,te),te+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,K,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(A,E,b,D){const C=A.value,O=E+"_"+b;if(D[O]===void 0)return typeof C=="number"||typeof C=="boolean"?D[O]=C:D[O]=C.clone(),!0;{const U=D[O];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return D[O]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function v(A){const E=A.uniforms;let b=0;const D=16;for(let O=0,U=E.length;O<U;O++){const w=Array.isArray(E[O])?E[O]:[E[O]];for(let S=0,R=w.length;S<R;S++){const K=w[S],Z=Array.isArray(K.value)?K.value:[K.value];for(let te=0,ce=Z.length;te<ce;te++){const Q=Z[te],fe=x(Q),q=b%D,be=q%fe.boundary,Se=q+be;b+=be,Se!==0&&D-Se<fe.storage&&(b+=D-Se),K.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=b,b+=fe.storage}}}const C=b%D;return C>0&&(b+=D-C),A.__size=b,A.__cache={},this}function x(A){const E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function m(A){const E=A.target;E.removeEventListener("dispose",m);const b=o.indexOf(E.__bindingPointIndex);o.splice(b,1),t.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const A in s)t.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class x_{constructor(e={}){const{canvas:n=RM(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const v=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const A=[],E=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ds,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let D=!1;this._outputColorSpace=On;let C=0,O=0,U=null,w=-1,S=null;const R=new Rt,K=new Rt;let Z=null;const te=new Je(0);let ce=0,Q=n.width,fe=n.height,q=1,be=null,Se=null;const De=new Rt(0,0,Q,fe),Fe=new Rt(0,0,Q,fe);let it=!1;const tt=new Bd;let oe=!1,xe=!1;const F=new Lt,ue=new Y,ae=new Rt,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function T(){return U===null?q:1}let _=i;function B(M,H){return n.getContext(M,H)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Rd}`),n.addEventListener("webglcontextlost",Me,!1),n.addEventListener("webglcontextrestored",Ie,!1),n.addEventListener("webglcontextcreationerror",_e,!1),_===null){const H="webgl2";if(_=B(H,M),_===null)throw B(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let X,ne,$,me,J,I,P,j,y,g,L,k,V,N,re,le,we,Ee,ge,Ce,Ue,Pe,Te,Ye;function z(){X=new iC(_),X.init(),Pe=new k1(_,X),ne=new KA(_,X,e,Pe),$=new F1(_,X),ne.reversedDepthBuffer&&f&&$.buffers.depth.setReversed(!0),me=new oC(_),J=new M1,I=new B1(_,X,$,J,ne,Pe,me),P=new QA(b),j=new nC(b),y=new fE(_),Te=new jA(_,y),g=new sC(_,y,me,Te),L=new lC(_,g,y,me),ge=new aC(_,ne,I),le=new ZA(J),k=new S1(b,P,j,X,ne,Te,le),V=new X1(b,J),N=new T1,re=new L1(X),Ee=new qA(b,P,j,$,L,h,l),we=new O1(b,L,ne),Ye=new $1(_,me,ne,$),Ce=new YA(_,X,me),Ue=new rC(_,X,me),me.programs=k.programs,b.capabilities=ne,b.extensions=X,b.properties=J,b.renderLists=N,b.shadowMap=we,b.state=$,b.info=me}z();const ye=new G1(b,_);this.xr=ye,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const M=X.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=X.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(M){M!==void 0&&(q=M,this.setSize(Q,fe,!1))},this.getSize=function(M){return M.set(Q,fe)},this.setSize=function(M,H,ee=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=M,fe=H,n.width=Math.floor(M*q),n.height=Math.floor(H*q),ee===!0&&(n.style.width=M+"px",n.style.height=H+"px"),this.setViewport(0,0,M,H)},this.getDrawingBufferSize=function(M){return M.set(Q*q,fe*q).floor()},this.setDrawingBufferSize=function(M,H,ee){Q=M,fe=H,q=ee,n.width=Math.floor(M*ee),n.height=Math.floor(H*ee),this.setViewport(0,0,M,H)},this.getCurrentViewport=function(M){return M.copy(R)},this.getViewport=function(M){return M.copy(De)},this.setViewport=function(M,H,ee,ie){M.isVector4?De.set(M.x,M.y,M.z,M.w):De.set(M,H,ee,ie),$.viewport(R.copy(De).multiplyScalar(q).round())},this.getScissor=function(M){return M.copy(Fe)},this.setScissor=function(M,H,ee,ie){M.isVector4?Fe.set(M.x,M.y,M.z,M.w):Fe.set(M,H,ee,ie),$.scissor(K.copy(Fe).multiplyScalar(q).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(M){$.setScissorTest(it=M)},this.setOpaqueSort=function(M){be=M},this.setTransparentSort=function(M){Se=M},this.getClearColor=function(M){return M.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(M=!0,H=!0,ee=!0){let ie=0;if(M){let G=!1;if(U!==null){const ve=U.texture.format;G=ve===Od||ve===Ud||ve===Id}if(G){const ve=U.texture.type,Re=ve===gi||ve===$s||ve===Oo||ve===No||ve===Dd||ve===Ld,Oe=Ee.getClearColor(),Le=Ee.getClearAlpha(),Ge=Oe.r,We=Oe.g,Be=Oe.b;Re?(v[0]=Ge,v[1]=We,v[2]=Be,v[3]=Le,_.clearBufferuiv(_.COLOR,0,v)):(x[0]=Ge,x[1]=We,x[2]=Be,x[3]=Le,_.clearBufferiv(_.COLOR,0,x))}else ie|=_.COLOR_BUFFER_BIT}H&&(ie|=_.DEPTH_BUFFER_BIT),ee&&(ie|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Me,!1),n.removeEventListener("webglcontextrestored",Ie,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),Ee.dispose(),N.dispose(),re.dispose(),J.dispose(),P.dispose(),j.dispose(),L.dispose(),Te.dispose(),Ye.dispose(),k.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Jn),ye.removeEventListener("sessionend",Gd),_s.stop()};function Me(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const M=me.autoReset,H=we.enabled,ee=we.autoUpdate,ie=we.needsUpdate,G=we.type;z(),me.autoReset=M,we.enabled=H,we.autoUpdate=ee,we.needsUpdate=ie,we.type=G}function _e(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function he(M){const H=M.target;H.removeEventListener("dispose",he),Ne(H)}function Ne(M){$e(M),J.remove(M)}function $e(M){const H=J.get(M).programs;H!==void 0&&(H.forEach(function(ee){k.releaseProgram(ee)}),M.isShaderMaterial&&k.releaseShaderCache(M))}this.renderBufferDirect=function(M,H,ee,ie,G,ve){H===null&&(H=pe);const Re=G.isMesh&&G.matrixWorld.determinant()<0,Oe=L_(M,H,ee,ie,G);$.setMaterial(ie,Re);let Le=ee.index,Ge=1;if(ie.wireframe===!0){if(Le=g.getWireframeAttribute(ee),Le===void 0)return;Ge=2}const We=ee.drawRange,Be=ee.attributes.position;let nt=We.start*Ge,pt=(We.start+We.count)*Ge;ve!==null&&(nt=Math.max(nt,ve.start*Ge),pt=Math.min(pt,(ve.start+ve.count)*Ge)),Le!==null?(nt=Math.max(nt,0),pt=Math.min(pt,Le.count)):Be!=null&&(nt=Math.max(nt,0),pt=Math.min(pt,Be.count));const At=pt-nt;if(At<0||At===1/0)return;Te.setup(G,ie,Oe,ee,Le);let Mt,_t=Ce;if(Le!==null&&(Mt=y.get(Le),_t=Ue,_t.setIndex(Mt)),G.isMesh)ie.wireframe===!0?($.setLineWidth(ie.wireframeLinewidth*T()),_t.setMode(_.LINES)):_t.setMode(_.TRIANGLES);else if(G.isLine){let He=ie.linewidth;He===void 0&&(He=1),$.setLineWidth(He*T()),G.isLineSegments?_t.setMode(_.LINES):G.isLineLoop?_t.setMode(_.LINE_LOOP):_t.setMode(_.LINE_STRIP)}else G.isPoints?_t.setMode(_.POINTS):G.isSprite&&_t.setMode(_.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Pr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(X.get("WEBGL_multi_draw"))_t.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const He=G._multiDrawStarts,Et=G._multiDrawCounts,st=G._multiDrawCount,xn=Le?y.get(Le).bytesPerElement:1,Js=J.get(ie).currentProgram.getUniforms();for(let yn=0;yn<st;yn++)Js.setValue(_,"_gl_DrawID",yn),_t.render(He[yn]/xn,Et[yn])}else if(G.isInstancedMesh)_t.renderInstances(nt,At,G.count);else if(ee.isInstancedBufferGeometry){const He=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Et=Math.min(ee.instanceCount,He);_t.renderInstances(nt,At,Et)}else _t.render(nt,At)};function xt(M,H,ee){M.transparent===!0&&M.side===Ii&&M.forceSinglePass===!1?(M.side=gn,M.needsUpdate=!0,ca(M,H,ee),M.side=fs,M.needsUpdate=!0,ca(M,H,ee),M.side=Ii):ca(M,H,ee)}this.compile=function(M,H,ee=null){ee===null&&(ee=M),p=re.get(ee),p.init(H),E.push(p),ee.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),M!==ee&&M.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const ie=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ve=G.material;if(ve)if(Array.isArray(ve))for(let Re=0;Re<ve.length;Re++){const Oe=ve[Re];xt(Oe,ee,G),ie.add(Oe)}else xt(ve,ee,G),ie.add(ve)}),p=E.pop(),ie},this.compileAsync=function(M,H,ee=null){const ie=this.compile(M,H,ee);return new Promise(G=>{function ve(){if(ie.forEach(function(Re){J.get(Re).currentProgram.isReady()&&ie.delete(Re)}),ie.size===0){G(M);return}setTimeout(ve,10)}X.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let ut=null;function vi(M){ut&&ut(M)}function Jn(){_s.stop()}function Gd(){_s.start()}const _s=new h_;_s.setAnimationLoop(vi),typeof self<"u"&&_s.setContext(self),this.setAnimationLoop=function(M){ut=M,ye.setAnimationLoop(M),M===null?_s.stop():_s.start()},ye.addEventListener("sessionstart",Jn),ye.addEventListener("sessionend",Gd),this.render=function(M,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(H),H=ye.getCamera()),M.isScene===!0&&M.onBeforeRender(b,M,H,U),p=re.get(M,E.length),p.init(H),E.push(p),F.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),tt.setFromProjectionMatrix(F,ci,H.reversedDepth),xe=this.localClippingEnabled,oe=le.init(this.clippingPlanes,xe),m=N.get(M,A.length),m.init(),A.push(m),ye.enabled===!0&&ye.isPresenting===!0){const ve=b.xr.getDepthSensingMesh();ve!==null&&Gl(ve,H,-1/0,b.sortObjects)}Gl(M,H,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(be,Se),ze=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,ze&&Ee.addToRenderList(m,M),this.info.render.frame++,oe===!0&&le.beginShadows();const ee=p.state.shadowsArray;we.render(ee,M,H),oe===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=m.opaque,G=m.transmissive;if(p.setupLights(),H.isArrayCamera){const ve=H.cameras;if(G.length>0)for(let Re=0,Oe=ve.length;Re<Oe;Re++){const Le=ve[Re];Xd(ie,G,M,Le)}ze&&Ee.render(M);for(let Re=0,Oe=ve.length;Re<Oe;Re++){const Le=ve[Re];Wd(m,M,Le,Le.viewport)}}else G.length>0&&Xd(ie,G,M,H),ze&&Ee.render(M),Wd(m,M,H);U!==null&&O===0&&(I.updateMultisampleRenderTarget(U),I.updateRenderTargetMipmap(U)),M.isScene===!0&&M.onAfterRender(b,M,H),Te.resetDefaultState(),w=-1,S=null,E.pop(),E.length>0?(p=E[E.length-1],oe===!0&&le.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Gl(M,H,ee,ie){if(M.visible===!1)return;if(M.layers.test(H.layers)){if(M.isGroup)ee=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(H);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||tt.intersectsSprite(M)){ie&&ae.setFromMatrixPosition(M.matrixWorld).applyMatrix4(F);const Re=L.update(M),Oe=M.material;Oe.visible&&m.push(M,Re,Oe,ee,ae.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||tt.intersectsObject(M))){const Re=L.update(M),Oe=M.material;if(ie&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ae.copy(M.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),ae.copy(Re.boundingSphere.center)),ae.applyMatrix4(M.matrixWorld).applyMatrix4(F)),Array.isArray(Oe)){const Le=Re.groups;for(let Ge=0,We=Le.length;Ge<We;Ge++){const Be=Le[Ge],nt=Oe[Be.materialIndex];nt&&nt.visible&&m.push(M,Re,nt,ee,ae.z,Be)}}else Oe.visible&&m.push(M,Re,Oe,ee,ae.z,null)}}const ve=M.children;for(let Re=0,Oe=ve.length;Re<Oe;Re++)Gl(ve[Re],H,ee,ie)}function Wd(M,H,ee,ie){const G=M.opaque,ve=M.transmissive,Re=M.transparent;p.setupLightsView(ee),oe===!0&&le.setGlobalState(b.clippingPlanes,ee),ie&&$.viewport(R.copy(ie)),G.length>0&&la(G,H,ee),ve.length>0&&la(ve,H,ee),Re.length>0&&la(Re,H,ee),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function Xd(M,H,ee,ie){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ie.id]===void 0&&(p.state.transmissionRenderTarget[ie.id]=new js(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")||X.has("EXT_color_buffer_float")?na:gi,minFilter:Os,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const ve=p.state.transmissionRenderTarget[ie.id],Re=ie.viewport||R;ve.setSize(Re.z*b.transmissionResolutionScale,Re.w*b.transmissionResolutionScale);const Oe=b.getRenderTarget(),Le=b.getActiveCubeFace(),Ge=b.getActiveMipmapLevel();b.setRenderTarget(ve),b.getClearColor(te),ce=b.getClearAlpha(),ce<1&&b.setClearColor(16777215,.5),b.clear(),ze&&Ee.render(ee);const We=b.toneMapping;b.toneMapping=ds;const Be=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),p.setupLightsView(ie),oe===!0&&le.setGlobalState(b.clippingPlanes,ie),la(M,ee,ie),I.updateMultisampleRenderTarget(ve),I.updateRenderTargetMipmap(ve),X.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let pt=0,At=H.length;pt<At;pt++){const Mt=H[pt],_t=Mt.object,He=Mt.geometry,Et=Mt.material,st=Mt.group;if(Et.side===Ii&&_t.layers.test(ie.layers)){const xn=Et.side;Et.side=gn,Et.needsUpdate=!0,$d(_t,ee,ie,He,Et,st),Et.side=xn,Et.needsUpdate=!0,nt=!0}}nt===!0&&(I.updateMultisampleRenderTarget(ve),I.updateRenderTargetMipmap(ve))}b.setRenderTarget(Oe,Le,Ge),b.setClearColor(te,ce),Be!==void 0&&(ie.viewport=Be),b.toneMapping=We}function la(M,H,ee){const ie=H.isScene===!0?H.overrideMaterial:null;for(let G=0,ve=M.length;G<ve;G++){const Re=M[G],Oe=Re.object,Le=Re.geometry,Ge=Re.group;let We=Re.material;We.allowOverride===!0&&ie!==null&&(We=ie),Oe.layers.test(ee.layers)&&$d(Oe,H,ee,Le,We,Ge)}}function $d(M,H,ee,ie,G,ve){M.onBeforeRender(b,H,ee,ie,G,ve),M.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(b,H,ee,ie,M,ve),G.transparent===!0&&G.side===Ii&&G.forceSinglePass===!1?(G.side=gn,G.needsUpdate=!0,b.renderBufferDirect(ee,H,ie,G,M,ve),G.side=fs,G.needsUpdate=!0,b.renderBufferDirect(ee,H,ie,G,M,ve),G.side=Ii):b.renderBufferDirect(ee,H,ie,G,M,ve),M.onAfterRender(b,H,ee,ie,G,ve)}function ca(M,H,ee){H.isScene!==!0&&(H=pe);const ie=J.get(M),G=p.state.lights,ve=p.state.shadowsArray,Re=G.state.version,Oe=k.getParameters(M,G.state,ve,H,ee),Le=k.getProgramCacheKey(Oe);let Ge=ie.programs;ie.environment=M.isMeshStandardMaterial?H.environment:null,ie.fog=H.fog,ie.envMap=(M.isMeshStandardMaterial?j:P).get(M.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&M.envMap===null?H.environmentRotation:M.envMapRotation,Ge===void 0&&(M.addEventListener("dispose",he),Ge=new Map,ie.programs=Ge);let We=Ge.get(Le);if(We!==void 0){if(ie.currentProgram===We&&ie.lightsStateVersion===Re)return jd(M,Oe),We}else Oe.uniforms=k.getUniforms(M),M.onBeforeCompile(Oe,b),We=k.acquireProgram(Oe,Le),Ge.set(Le,We),ie.uniforms=Oe.uniforms;const Be=ie.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Be.clippingPlanes=le.uniform),jd(M,Oe),ie.needsLights=U_(M),ie.lightsStateVersion=Re,ie.needsLights&&(Be.ambientLightColor.value=G.state.ambient,Be.lightProbe.value=G.state.probe,Be.directionalLights.value=G.state.directional,Be.directionalLightShadows.value=G.state.directionalShadow,Be.spotLights.value=G.state.spot,Be.spotLightShadows.value=G.state.spotShadow,Be.rectAreaLights.value=G.state.rectArea,Be.ltc_1.value=G.state.rectAreaLTC1,Be.ltc_2.value=G.state.rectAreaLTC2,Be.pointLights.value=G.state.point,Be.pointLightShadows.value=G.state.pointShadow,Be.hemisphereLights.value=G.state.hemi,Be.directionalShadowMap.value=G.state.directionalShadowMap,Be.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Be.spotShadowMap.value=G.state.spotShadowMap,Be.spotLightMatrix.value=G.state.spotLightMatrix,Be.spotLightMap.value=G.state.spotLightMap,Be.pointShadowMap.value=G.state.pointShadowMap,Be.pointShadowMatrix.value=G.state.pointShadowMatrix),ie.currentProgram=We,ie.uniformsList=null,We}function qd(M){if(M.uniformsList===null){const H=M.currentProgram.getUniforms();M.uniformsList=Ja.seqWithValue(H.seq,M.uniforms)}return M.uniformsList}function jd(M,H){const ee=J.get(M);ee.outputColorSpace=H.outputColorSpace,ee.batching=H.batching,ee.batchingColor=H.batchingColor,ee.instancing=H.instancing,ee.instancingColor=H.instancingColor,ee.instancingMorph=H.instancingMorph,ee.skinning=H.skinning,ee.morphTargets=H.morphTargets,ee.morphNormals=H.morphNormals,ee.morphColors=H.morphColors,ee.morphTargetsCount=H.morphTargetsCount,ee.numClippingPlanes=H.numClippingPlanes,ee.numIntersection=H.numClipIntersection,ee.vertexAlphas=H.vertexAlphas,ee.vertexTangents=H.vertexTangents,ee.toneMapping=H.toneMapping}function L_(M,H,ee,ie,G){H.isScene!==!0&&(H=pe),I.resetTextureUnits();const ve=H.fog,Re=ie.isMeshStandardMaterial?H.environment:null,Oe=U===null?b.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Kr,Le=(ie.isMeshStandardMaterial?j:P).get(ie.envMap||Re),Ge=ie.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,We=!!ee.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Be=!!ee.morphAttributes.position,nt=!!ee.morphAttributes.normal,pt=!!ee.morphAttributes.color;let At=ds;ie.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(At=b.toneMapping);const Mt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,_t=Mt!==void 0?Mt.length:0,He=J.get(ie),Et=p.state.lights;if(oe===!0&&(xe===!0||M!==S)){const nn=M===S&&ie.id===w;le.setState(ie,M,nn)}let st=!1;ie.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Et.state.version||He.outputColorSpace!==Oe||G.isBatchedMesh&&He.batching===!1||!G.isBatchedMesh&&He.batching===!0||G.isBatchedMesh&&He.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&He.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&He.instancing===!1||!G.isInstancedMesh&&He.instancing===!0||G.isSkinnedMesh&&He.skinning===!1||!G.isSkinnedMesh&&He.skinning===!0||G.isInstancedMesh&&He.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&He.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&He.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&He.instancingMorph===!1&&G.morphTexture!==null||He.envMap!==Le||ie.fog===!0&&He.fog!==ve||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==le.numPlanes||He.numIntersection!==le.numIntersection)||He.vertexAlphas!==Ge||He.vertexTangents!==We||He.morphTargets!==Be||He.morphNormals!==nt||He.morphColors!==pt||He.toneMapping!==At||He.morphTargetsCount!==_t)&&(st=!0):(st=!0,He.__version=ie.version);let xn=He.currentProgram;st===!0&&(xn=ca(ie,H,G));let Js=!1,yn=!1,ro=!1;const Tt=xn.getUniforms(),Dn=He.uniforms;if($.useProgram(xn.program)&&(Js=!0,yn=!0,ro=!0),ie.id!==w&&(w=ie.id,yn=!0),Js||S!==M){$.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Tt.setValue(_,"projectionMatrix",M.projectionMatrix),Tt.setValue(_,"viewMatrix",M.matrixWorldInverse);const fn=Tt.map.cameraPosition;fn!==void 0&&fn.setValue(_,ue.setFromMatrixPosition(M.matrixWorld)),ne.logarithmicDepthBuffer&&Tt.setValue(_,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Tt.setValue(_,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,yn=!0,ro=!0)}if(G.isSkinnedMesh){Tt.setOptional(_,G,"bindMatrix"),Tt.setOptional(_,G,"bindMatrixInverse");const nn=G.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Tt.setValue(_,"boneTexture",nn.boneTexture,I))}G.isBatchedMesh&&(Tt.setOptional(_,G,"batchingTexture"),Tt.setValue(_,"batchingTexture",G._matricesTexture,I),Tt.setOptional(_,G,"batchingIdTexture"),Tt.setValue(_,"batchingIdTexture",G._indirectTexture,I),Tt.setOptional(_,G,"batchingColorTexture"),G._colorsTexture!==null&&Tt.setValue(_,"batchingColorTexture",G._colorsTexture,I));const Ln=ee.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&ge.update(G,ee,xn),(yn||He.receiveShadow!==G.receiveShadow)&&(He.receiveShadow=G.receiveShadow,Tt.setValue(_,"receiveShadow",G.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Dn.envMap.value=Le,Dn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&H.environment!==null&&(Dn.envMapIntensity.value=H.environmentIntensity),yn&&(Tt.setValue(_,"toneMappingExposure",b.toneMappingExposure),He.needsLights&&I_(Dn,ro),ve&&ie.fog===!0&&V.refreshFogUniforms(Dn,ve),V.refreshMaterialUniforms(Dn,ie,q,fe,p.state.transmissionRenderTarget[M.id]),Ja.upload(_,qd(He),Dn,I)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Ja.upload(_,qd(He),Dn,I),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Tt.setValue(_,"center",G.center),Tt.setValue(_,"modelViewMatrix",G.modelViewMatrix),Tt.setValue(_,"normalMatrix",G.normalMatrix),Tt.setValue(_,"modelMatrix",G.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const nn=ie.uniformsGroups;for(let fn=0,Wl=nn.length;fn<Wl;fn++){const vs=nn[fn];Ye.update(vs,xn),Ye.bind(vs,xn)}}return xn}function I_(M,H){M.ambientLightColor.needsUpdate=H,M.lightProbe.needsUpdate=H,M.directionalLights.needsUpdate=H,M.directionalLightShadows.needsUpdate=H,M.pointLights.needsUpdate=H,M.pointLightShadows.needsUpdate=H,M.spotLights.needsUpdate=H,M.spotLightShadows.needsUpdate=H,M.rectAreaLights.needsUpdate=H,M.hemisphereLights.needsUpdate=H}function U_(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(M,H,ee){const ie=J.get(M);ie.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),J.get(M.texture).__webglTexture=H,J.get(M.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ee,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,H){const ee=J.get(M);ee.__webglFramebuffer=H,ee.__useDefaultFramebuffer=H===void 0};const O_=_.createFramebuffer();this.setRenderTarget=function(M,H=0,ee=0){U=M,C=H,O=ee;let ie=!0,G=null,ve=!1,Re=!1;if(M){const Le=J.get(M);if(Le.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(_.FRAMEBUFFER,null),ie=!1;else if(Le.__webglFramebuffer===void 0)I.setupRenderTarget(M);else if(Le.__hasExternalTextures)I.rebindTextures(M,J.get(M.texture).__webglTexture,J.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Be=M.depthTexture;if(Le.__boundDepthTexture!==Be){if(Be!==null&&J.has(Be)&&(M.width!==Be.image.width||M.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(M)}}const Ge=M.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Re=!0);const We=J.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(We[H])?G=We[H][ee]:G=We[H],ve=!0):M.samples>0&&I.useMultisampledRTT(M)===!1?G=J.get(M).__webglMultisampledFramebuffer:Array.isArray(We)?G=We[ee]:G=We,R.copy(M.viewport),K.copy(M.scissor),Z=M.scissorTest}else R.copy(De).multiplyScalar(q).floor(),K.copy(Fe).multiplyScalar(q).floor(),Z=it;if(ee!==0&&(G=O_),$.bindFramebuffer(_.FRAMEBUFFER,G)&&ie&&$.drawBuffers(M,G),$.viewport(R),$.scissor(K),$.setScissorTest(Z),ve){const Le=J.get(M.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+H,Le.__webglTexture,ee)}else if(Re){const Le=H;for(let Ge=0;Ge<M.textures.length;Ge++){const We=J.get(M.textures[Ge]);_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0+Ge,We.__webglTexture,ee,Le)}}else if(M!==null&&ee!==0){const Le=J.get(M.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Le.__webglTexture,ee)}w=-1},this.readRenderTargetPixels=function(M,H,ee,ie,G,ve,Re,Oe=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=J.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){$.bindFramebuffer(_.FRAMEBUFFER,Le);try{const Ge=M.textures[Oe],We=Ge.format,Be=Ge.type;if(!ne.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=M.width-ie&&ee>=0&&ee<=M.height-G&&(M.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+Oe),_.readPixels(H,ee,ie,G,Pe.convert(We),Pe.convert(Be),ve))}finally{const Ge=U!==null?J.get(U).__webglFramebuffer:null;$.bindFramebuffer(_.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(M,H,ee,ie,G,ve,Re,Oe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=J.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le)if(H>=0&&H<=M.width-ie&&ee>=0&&ee<=M.height-G){$.bindFramebuffer(_.FRAMEBUFFER,Le);const Ge=M.textures[Oe],We=Ge.format,Be=Ge.type;if(!ne.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,nt),_.bufferData(_.PIXEL_PACK_BUFFER,ve.byteLength,_.STREAM_READ),M.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+Oe),_.readPixels(H,ee,ie,G,Pe.convert(We),Pe.convert(Be),0);const pt=U!==null?J.get(U).__webglFramebuffer:null;$.bindFramebuffer(_.FRAMEBUFFER,pt);const At=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await PM(_,At,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,nt),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,ve),_.deleteBuffer(nt),_.deleteSync(At),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,H=null,ee=0){const ie=Math.pow(2,-ee),G=Math.floor(M.image.width*ie),ve=Math.floor(M.image.height*ie),Re=H!==null?H.x:0,Oe=H!==null?H.y:0;I.setTexture2D(M,0),_.copyTexSubImage2D(_.TEXTURE_2D,ee,0,0,Re,Oe,G,ve),$.unbindTexture()};const N_=_.createFramebuffer(),F_=_.createFramebuffer();this.copyTextureToTexture=function(M,H,ee=null,ie=null,G=0,ve=null){ve===null&&(G!==0?(Pr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ve=G,G=0):ve=0);let Re,Oe,Le,Ge,We,Be,nt,pt,At;const Mt=M.isCompressedTexture?M.mipmaps[ve]:M.image;if(ee!==null)Re=ee.max.x-ee.min.x,Oe=ee.max.y-ee.min.y,Le=ee.isBox3?ee.max.z-ee.min.z:1,Ge=ee.min.x,We=ee.min.y,Be=ee.isBox3?ee.min.z:0;else{const Ln=Math.pow(2,-G);Re=Math.floor(Mt.width*Ln),Oe=Math.floor(Mt.height*Ln),M.isDataArrayTexture?Le=Mt.depth:M.isData3DTexture?Le=Math.floor(Mt.depth*Ln):Le=1,Ge=0,We=0,Be=0}ie!==null?(nt=ie.x,pt=ie.y,At=ie.z):(nt=0,pt=0,At=0);const _t=Pe.convert(H.format),He=Pe.convert(H.type);let Et;H.isData3DTexture?(I.setTexture3D(H,0),Et=_.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(I.setTexture2DArray(H,0),Et=_.TEXTURE_2D_ARRAY):(I.setTexture2D(H,0),Et=_.TEXTURE_2D),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,H.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,H.unpackAlignment);const st=_.getParameter(_.UNPACK_ROW_LENGTH),xn=_.getParameter(_.UNPACK_IMAGE_HEIGHT),Js=_.getParameter(_.UNPACK_SKIP_PIXELS),yn=_.getParameter(_.UNPACK_SKIP_ROWS),ro=_.getParameter(_.UNPACK_SKIP_IMAGES);_.pixelStorei(_.UNPACK_ROW_LENGTH,Mt.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,Mt.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Ge),_.pixelStorei(_.UNPACK_SKIP_ROWS,We),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Be);const Tt=M.isDataArrayTexture||M.isData3DTexture,Dn=H.isDataArrayTexture||H.isData3DTexture;if(M.isDepthTexture){const Ln=J.get(M),nn=J.get(H),fn=J.get(Ln.__renderTarget),Wl=J.get(nn.__renderTarget);$.bindFramebuffer(_.READ_FRAMEBUFFER,fn.__webglFramebuffer),$.bindFramebuffer(_.DRAW_FRAMEBUFFER,Wl.__webglFramebuffer);for(let vs=0;vs<Le;vs++)Tt&&(_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,J.get(M).__webglTexture,G,Be+vs),_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,J.get(H).__webglTexture,ve,At+vs)),_.blitFramebuffer(Ge,We,Re,Oe,nt,pt,Re,Oe,_.DEPTH_BUFFER_BIT,_.NEAREST);$.bindFramebuffer(_.READ_FRAMEBUFFER,null),$.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||J.has(M)){const Ln=J.get(M),nn=J.get(H);$.bindFramebuffer(_.READ_FRAMEBUFFER,N_),$.bindFramebuffer(_.DRAW_FRAMEBUFFER,F_);for(let fn=0;fn<Le;fn++)Tt?_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Ln.__webglTexture,G,Be+fn):_.framebufferTexture2D(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Ln.__webglTexture,G),Dn?_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,nn.__webglTexture,ve,At+fn):_.framebufferTexture2D(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,nn.__webglTexture,ve),G!==0?_.blitFramebuffer(Ge,We,Re,Oe,nt,pt,Re,Oe,_.COLOR_BUFFER_BIT,_.NEAREST):Dn?_.copyTexSubImage3D(Et,ve,nt,pt,At+fn,Ge,We,Re,Oe):_.copyTexSubImage2D(Et,ve,nt,pt,Ge,We,Re,Oe);$.bindFramebuffer(_.READ_FRAMEBUFFER,null),$.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else Dn?M.isDataTexture||M.isData3DTexture?_.texSubImage3D(Et,ve,nt,pt,At,Re,Oe,Le,_t,He,Mt.data):H.isCompressedArrayTexture?_.compressedTexSubImage3D(Et,ve,nt,pt,At,Re,Oe,Le,_t,Mt.data):_.texSubImage3D(Et,ve,nt,pt,At,Re,Oe,Le,_t,He,Mt):M.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,ve,nt,pt,Re,Oe,_t,He,Mt.data):M.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,ve,nt,pt,Mt.width,Mt.height,_t,Mt.data):_.texSubImage2D(_.TEXTURE_2D,ve,nt,pt,Re,Oe,_t,He,Mt);_.pixelStorei(_.UNPACK_ROW_LENGTH,st),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,xn),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Js),_.pixelStorei(_.UNPACK_SKIP_ROWS,yn),_.pixelStorei(_.UNPACK_SKIP_IMAGES,ro),ve===0&&H.generateMipmaps&&_.generateMipmap(Et),$.unbindTexture()},this.copyTextureToTexture3D=function(M,H,ee=null,ie=null,G=0){return Pr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,H,ee,ie,G)},this.initRenderTarget=function(M){J.get(M).__webglFramebuffer===void 0&&I.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?I.setTextureCube(M,0):M.isData3DTexture?I.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?I.setTexture2DArray(M,0):I.setTexture2D(M,0),$.unbindTexture()},this.resetState=function(){C=0,O=0,U=null,$.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),n.unpackColorSpace=at._getUnpackColorSpace()}}const ip={type:"change"},zd={type:"start"},y_={type:"end"},Ba=new Qg,sp=new Zi,q1=Math.cos(70*CM.DEG2RAD),Ft=new Y,pn=2*Math.PI,gt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},kc=1e-6;class w_ extends uE{constructor(e,n=null){super(e,n),this.state=gt.NONE,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Cr.ROTATE,MIDDLE:Cr.DOLLY,RIGHT:Cr.PAN},this.touches={ONE:xr.ROTATE,TWO:xr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new qs,this._lastTargetPosition=new Y,this._quat=new qs().setFromUnitVectors(e.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Dh,this._sphericalDelta=new Dh,this._scale=1,this._panOffset=new Y,this._rotateStart=new Xe,this._rotateEnd=new Xe,this._rotateDelta=new Xe,this._panStart=new Xe,this._panEnd=new Xe,this._panDelta=new Xe,this._dollyStart=new Xe,this._dollyEnd=new Xe,this._dollyDelta=new Xe,this._dollyDirection=new Y,this._mouse=new Xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Y1.bind(this),this._onPointerDown=j1.bind(this),this._onPointerUp=K1.bind(this),this._onContextMenu=iR.bind(this),this._onMouseWheel=J1.bind(this),this._onKeyDown=eR.bind(this),this._onTouchStart=tR.bind(this),this._onTouchMove=nR.bind(this),this._onMouseDown=Z1.bind(this),this._onMouseMove=Q1.bind(this),this._interceptControlDown=sR.bind(this),this._interceptControlUp=rR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ip),this.update(),this.state=gt.NONE}update(e=null){const n=this.object.position;Ft.copy(n).sub(this.target),Ft.applyQuaternion(this._quat),this._spherical.setFromVector3(Ft),this.autoRotate&&this.state===gt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=pn:i>Math.PI&&(i-=pn),s<-Math.PI?s+=pn:s>Math.PI&&(s-=pn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ft.setFromSpherical(this._spherical),Ft.applyQuaternion(this._quatInverse),n.copy(this.target).add(Ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ft.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new Y(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new Y(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ba.origin.copy(this.object.position),Ba.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ba.direction))<q1?this.object.lookAt(this.target):(sp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ba.intersectPlane(sp,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>kc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>kc||this._lastTargetPosition.distanceToSquared(this.target)>kc?(this.dispatchEvent(ip),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?pn/60*this.autoRotateSpeed*e:pn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Ft.setFromMatrixColumn(n,0),Ft.multiplyScalar(-e),this._panOffset.add(Ft)}_panUp(e,n){this.screenSpacePanning===!0?Ft.setFromMatrixColumn(n,1):(Ft.setFromMatrixColumn(n,0),Ft.crossVectors(this.object.up,Ft)),Ft.multiplyScalar(e),this._panOffset.add(Ft)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ft.copy(s).sub(this.target);let r=Ft.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=n-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/n.clientHeight),this._rotateUp(pn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/n.clientHeight),this._rotateUp(pn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Xe,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function j1(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function Y1(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function K1(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(y_),this.state=gt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function Z1(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Cr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=gt.DOLLY;break;case Cr.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=gt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=gt.ROTATE}break;case Cr.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=gt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=gt.PAN}break;default:this.state=gt.NONE}this.state!==gt.NONE&&this.dispatchEvent(zd)}function Q1(t){switch(this.state){case gt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case gt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case gt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function J1(t){this.enabled===!1||this.enableZoom===!1||this.state!==gt.NONE||(t.preventDefault(),this.dispatchEvent(zd),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(y_))}function eR(t){this.enabled!==!1&&this._handleKeyDown(t)}function tR(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case xr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=gt.TOUCH_ROTATE;break;case xr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=gt.TOUCH_PAN;break;default:this.state=gt.NONE}break;case 2:switch(this.touches.TWO){case xr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=gt.TOUCH_DOLLY_PAN;break;case xr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=gt.TOUCH_DOLLY_ROTATE;break;default:this.state=gt.NONE}break;default:this.state=gt.NONE}this.state!==gt.NONE&&this.dispatchEvent(zd)}function nR(t){switch(this._trackPointer(t),this.state){case gt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case gt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case gt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case gt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=gt.NONE}}function iR(t){this.enabled!==!1&&t.preventDefault()}function sR(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function rR(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const oR={__name:"MiyukiBeads",props:{pattern:{type:Array,required:!0},rows:{type:Number,default:10},cols:{type:Number,default:50}},setup(t){const e=t,n=ot(null);let i,s,r,o,a=[];function l(){const c=new kl(.7,.7,1.1,32),u=(e.cols-1)/2,d=(e.rows-1)/2;for(let f=0;f<e.rows;f++)for(let h=0;h<e.cols;h++){const v=f*e.cols+h,x=e.pattern[v]||"#ffffff",m=new c_({color:x,roughness:.1,metalness:.1,clearcoat:.5,clearcoatRoughness:.1}),p=new jn(c,m);p.position.set((h-u)*1.2,-(f-d)*1.2,0),i.add(p),a.push(p)}}return Jr(()=>{i=new a_,i.background=new Je(15790320),s=new En(45,n.value.clientWidth/n.value.clientHeight,.1,1e3),s.position.set(50,-50,50),r=new x_({antialias:!0}),r.setPixelRatio(Math.min(window.devicePixelRatio||1,2));function c(){if(!n.value)return;const h=n.value.clientWidth,v=n.value.clientHeight;h===0||v===0||(s.aspect=h/v,s.updateProjectionMatrix(),r.setSize(h,v,!1))}c(),n.value.appendChild(r.domElement);const u=new ResizeObserver(()=>{c()});u.observe(n.value),r.__resizeObserver=u,o=new w_(s,r.domElement),i.add(new f_(16777215,.5));const d=new Wu(16777215,3);d.position.set(10,10,10),i.add(d),l();function f(){requestAnimationFrame(f),o.update(),r.render(i,s)}f(),window.addEventListener("resize",c),r.__resizeHandler=c}),Kn(()=>e.pattern,()=>{a.forEach(c=>i.remove(c)),a=[],l()},{deep:!0}),ld(()=>{r&&r.__resizeHandler&&window.removeEventListener("resize",r.__resizeHandler),r&&r.__resizeObserver&&n.value&&r.__resizeObserver.disconnect(),o&&o.dispose(),r&&r.dispose(),a=[]}),(c,u)=>(wt(),Dt("div",{ref_key:"container",ref:n,class:"bead-container"},null,512))}},aR={class:"bracelet-wrapper"},lR={class:"canvas-container"},cR={class:"toolbar"},uR={class:"info-panel"},dR={class:"info-item"},fR={class:"info-value"},hR={class:"info-item"},pR={class:"info-value"},mR={__name:"BraceletPreview",props:{pattern:{type:Array,required:!0},rows:{type:Number,required:!0},cols:{type:Number,required:!0},width:{type:Number,default:900},height:{type:Number,default:600}},setup(t,{expose:e}){const n=t,i=ot(null);let s,r,o,a,l=[];function c(){l.forEach(v=>s.remove(v)),l=[]}function u(){if(!s)return;c(),console.log("BraceletPreview - props:",{pattern:n.pattern,rows:n.rows,cols:n.cols,patternLength:n.pattern?n.pattern.length:0,patternType:Array.isArray(n.pattern)?"Array":typeof n.pattern}),n.pattern&&Array.isArray(n.pattern)&&console.log("Pattern structure:",{firstRow:n.pattern[0],firstRowLength:n.pattern[0]?n.pattern[0].length:0,firstRowType:n.pattern[0]?typeof n.pattern[0]:"undefined",sampleValues:n.pattern.slice(0,3).map(C=>C?C.slice(0,3):"undefined")});const v=20,x=Math.PI*1.55,m=-x/2;new Je("#b58a3a");const p=x/n.rows,A=v*p*.98,E=.95,b=1,D=new kl(E*.7,E*.7,A,16);for(let C=0;C<n.rows;C++)for(let O=0;O<n.cols;O++){let U="#ffffff";if(Array.isArray(n.pattern[0]))U=n.pattern[C]&&n.pattern[C][O]?n.pattern[C][O]:"#ffffff";else{const Q=C*n.cols+O;U=n.pattern[Q]||"#ffffff"}C===0&&O===0&&console.log("First bead debug:",{y:C,x:O,patternY:n.pattern[C],patternYX:n.pattern[C]?n.pattern[C][O]:void 0,colorHex:U,patternType:Array.isArray(n.pattern[0])?"Matrix":"Simple Array",index:C*n.cols+O}),(!U||U==="#"||U.length<3)&&(U="#ffffff",console.warn("Invalid color detected:",U,"using default white"));const w=new Je(U),S=new c_({color:w,roughness:.25,metalness:.15,clearcoat:.4,clearcoatRoughness:.1}),R=m+(C+.5)*p,K=(n.cols/2-.5-O)*b,Z=v*Math.sin(R),te=v*Math.cos(R),ce=new jn(D,S);ce.position.set(Z,K,te),ce.rotation.z=Math.PI/2,ce.rotation.y=R,s.add(ce),l.push(ce)}}function d(){s=new a_,s.background=new Je(15987699),r=new En(42,n.width/n.height,.1,2e3),r.position.set(0,3,95),r.lookAt(0,0,0),o=new x_({antialias:!0,preserveDrawingBuffer:!0}),o.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),o.setSize(n.width,n.height,!1),i.value.appendChild(o.domElement),s.add(new f_(16777215,.7));const v=new Wu(16777215,1.1);v.position.set(8,10,12),s.add(v);const x=new Wu(16777215,.6);x.position.set(-8,-3,8),s.add(x),a=new w_(r,o.domElement),a.enableDamping=!0,a.target.set(0,0,0);function m(){requestAnimationFrame(m),a.update(),o.render(s,r)}m()}function f(){o&&(a.update(),o.render(s,r))}function h(){f();const v=o.domElement.toDataURL("image/png"),x=document.createElement("a");x.href=v,x.download="bracelet.png",x.click()}return Jr(()=>{d(),u(),f()}),Kn(()=>[n.pattern,n.rows,n.cols],()=>{u(),f()},{deep:!0}),ld(()=>{a&&a.dispose(),o&&o.dispose(),l=[]}),e({downloadImage:h}),(v,x)=>(wt(),Dt("div",aR,[x[4]||(x[4]=W("div",{class:"header"},[W("h2",{class:"title"},"پیش‌نمایش دستبند"),W("p",{class:"subtitle"},"نمایش سه‌بعدی طرح انتخاب شده")],-1)),W("div",lR,[W("div",{ref_key:"container",ref:i,class:"bracelet-canvas"},null,512),x[0]||(x[0]=bm('<div class="canvas-overlay" data-v-93874d86><div class="controls-hint" data-v-93874d86><div class="hint-item" data-v-93874d86><span class="hint-icon" data-v-93874d86>🖱️</span><span data-v-93874d86>برای چرخاندن کلیک و درگ کنید</span></div><div class="hint-item" data-v-93874d86><span class="hint-icon" data-v-93874d86>🔍</span><span data-v-93874d86>برای زوم اسکرول کنید</span></div></div></div>',1))]),W("div",cR,[W("button",{class:"btn btn-primary",onClick:h},x[1]||(x[1]=[W("span",{class:"btn-icon"},"📥",-1),W("span",null,"دانلود تصویر",-1)])),W("div",uR,[W("div",dR,[x[2]||(x[2]=W("span",{class:"info-label"},"ابعاد:",-1)),W("span",fR,Bt(t.cols)+" × "+Bt(t.rows),1)]),W("div",hR,[x[3]||(x[3]=W("span",{class:"info-label"},"تعداد مهره:",-1)),W("span",pR,Bt(t.cols*t.rows),1)])])])]))}},gR=Yo(mR,[["__scopeId","data-v-93874d86"]]),_R={class:"working-page"},vR={class:"controls-panel"},xR={class:"control-group"},yR={class:"start-controls"},wR={class:"control-label"},bR=["max"],SR={class:"control-label"},MR={class:"control-group"},ER={class:"navigation-controls"},TR=["disabled"],AR=["disabled"],CR={class:"control-group"},RR={class:"info-display"},PR={class:"info-item"},DR={class:"info-value"},LR={class:"info-item"},IR={class:"info-value"},UR={class:"info-item"},OR={class:"info-value"},NR={class:"control-group"},FR={class:"color-management"},BR={class:"color-list-management"},kR={class:"all-colors-list"},zR=["onUpdate:modelValue","placeholder","onInput"],HR={class:"color-code"},VR={class:"pattern-container"},GR={class:"pattern-header"},WR={class:"pattern-info"},XR={class:"instructions-panel"},$R={class:"row-instructions"},qR={class:"color-instructions"},jR={class:"color-list"},YR={class:"color-count"},KR={class:"pattern-instructions"},ZR={class:"pattern-sequence"},QR=["title"],JR={class:"grid-wrapper"},e2=["title"],t2={__name:"WorkingPage",props:{pattern:{type:Array,default:()=>[]},rows:{type:Number,default:16},cols:{type:Number,default:80}},setup(t){const e=t,n=ot(0),i=ot("forward"),s=ot(0),r=ot({}),o=()=>{if(!e.pattern||e.pattern.length===0){const w=["#ff6b6b","#4ecdc4","#45b7d1","#96ceb4","#feca57","#ff9ff3","#54a0ff","#5f27cd"],S=[];for(let R=0;R<e.rows;R++)for(let K=0;K<e.cols;K++){const Z=w[Math.floor(Math.random()*w.length)];S.push({color:Z,row:R,col:K})}return S}const U=[];for(let w=0;w<e.rows;w++)for(let S=0;S<e.cols;S++){const R=w*e.cols+S,K=e.pattern[R]||"#ffffff";U.push({color:K,row:w,col:S})}return U},a=ot(o()),l=Qt(()=>e.rows),c=Qt(()=>i.value==="forward"?n.value+s.value:n.value-s.value),u=Qt(()=>{const U=[];for(let w=0;w<e.cols;w++){const S=c.value*e.cols+w,R=e.pattern[S]||"#ffffff";U.includes(R)||U.push(R)}return U}),d=Qt(()=>{const U=[];for(let w=0;w<e.cols;w++){const S=c.value*e.cols+w,R=e.pattern[S]||"#ffffff";U.push(R)}return U}),f=Qt(()=>{const U=new Set;for(let w=0;w<e.pattern.length;w++)e.pattern[w]&&U.add(e.pattern[w]);return Array.from(U).sort()}),h=U=>Math.floor(U/e.cols)===c.value,v=U=>Math.floor(U/e.cols)==c.value,x=U=>{const w=Math.floor(U/e.cols);return i.value==="forward"?w>c.value:w<c.value},m=U=>h(U)?1:v(U)?.4:.2,p=U=>{let w=0;for(let S=0;S<e.cols;S++){const R=c.value*e.cols+S;e.pattern[R]===U&&w++}return w},A=(U,w)=>{r.value[U]=w},E=U=>{const w=r.value[U];return w?`${w} (${U})`:U},b=()=>{s.value<l.value-1&&s.value++},D=()=>{s.value>0&&s.value--},C=()=>{s.value=0},O=U=>{switch(U.key){case"Enter":case" ":U.preventDefault(),b();break;case"ArrowLeft":U.preventDefault(),D();break;case"r":case"R":U.preventDefault(),C();break}};return Jr(()=>{document.addEventListener("keydown",O)}),cd(()=>{document.removeEventListener("keydown",O)}),Kn(i,()=>{s.value=0}),Kn(n,()=>{s.value=0}),Kn(()=>e.pattern,()=>{a.value=o()},{deep:!0}),(U,w)=>(wt(),Dt("div",_R,[w[16]||(w[16]=W("div",{class:"page-header"},[W("h1",{class:"page-title"},"🧶 مراحل اجرای دستبند میوکی"),W("p",{class:"page-subtitle"}," مراحل بافت دستبند را ردیف به ردیف (از بالا به پایین) مشاهده کنید ")],-1)),W("div",vR,[W("div",xR,[w[5]||(w[5]=W("h3",null,"🎯 تنظیمات شروع",-1)),W("div",yR,[W("label",wR,[w[2]||(w[2]=W("span",null,"شروع از ردیف:",-1)),Ls(W("input",{"onUpdate:modelValue":w[0]||(w[0]=S=>n.value=S),type:"number",min:"0",max:t.rows-1,class:"control-input"},null,8,bR),[[vr,n.value,void 0,{number:!0}]])]),W("label",SR,[w[4]||(w[4]=W("span",null,"جهت اجرا:",-1)),Ls(W("select",{"onUpdate:modelValue":w[1]||(w[1]=S=>i.value=S),class:"control-select"},w[3]||(w[3]=[W("option",{value:"forward"},"⬇️ از بالا به پایین",-1),W("option",{value:"backward"},"⬆️ از پایین به بالا",-1)]),512),[[Y0,i.value]])])])]),W("div",MR,[w[6]||(w[6]=W("h3",null,"🎮 کنترل‌ها",-1)),W("div",ER,[W("button",{disabled:s.value<=0,class:"nav-btn prev-btn",onClick:D}," ⬅️ مرحله قبل ",8,TR),W("button",{disabled:s.value>=l.value-1,class:"nav-btn next-btn",onClick:b}," مرحله بعد ➡️ ",8,AR),W("button",{class:"nav-btn reset-btn",onClick:C}," 🔄 شروع مجدد ")])]),W("div",CR,[w[10]||(w[10]=W("h3",null,"📊 اطلاعات",-1)),W("div",RR,[W("div",PR,[w[7]||(w[7]=W("span",{class:"info-label"},"مرحله فعلی:",-1)),W("span",DR,Bt(s.value+1)+" از "+Bt(l.value),1)]),W("div",LR,[w[8]||(w[8]=W("span",{class:"info-label"},"ردیف فعلی:",-1)),W("span",IR,Bt(c.value+1)+" از "+Bt(t.rows),1)]),W("div",UR,[w[9]||(w[9]=W("span",{class:"info-label"},"رنگ‌های مورد نیاز:",-1)),W("span",OR,Bt(u.value.length)+" رنگ",1)])])]),W("div",NR,[w[12]||(w[12]=W("h3",null,"🎨 مدیریت رنگ‌ها",-1)),W("div",FR,[W("div",BR,[w[11]||(w[11]=W("h4",null,"رنگ‌های استفاده شده در طرح:",-1)),W("div",kR,[(wt(!0),Dt(ln,null,_r(f.value,(S,R)=>(wt(),Dt("div",{key:S,class:"color-management-item"},[W("div",{class:"color-swatch-large",style:Xn({backgroundColor:S})},null,4),Ls(W("input",{"onUpdate:modelValue":K=>r.value[S]=K,type:"text",placeholder:`نام رنگ ${R+1}`,class:"color-name-input",onInput:K=>A(S,K.target.value)},null,40,zR),[[vr,r.value[S]]]),W("span",HR,Bt(S),1)]))),128))])])])])]),W("div",VR,[W("div",GR,[w[13]||(w[13]=W("h3",null,"🎨 الگوی دستبند",-1)),W("div",WR,[W("span",null,"ابعاد: "+Bt(t.rows)+" × "+Bt(t.cols),1)])]),W("div",XR,[W("h4",null,"📋 دستورالعمل ردیف "+Bt(c.value+1),1),W("div",$R,[W("div",qR,[w[14]||(w[14]=W("h5",null,"رنگ‌های مورد نیاز:",-1)),W("div",jR,[(wt(!0),Dt(ln,null,_r(u.value,(S,R)=>(wt(),Dt("div",{key:R,class:"color-item"},[W("div",{class:"color-swatch",style:Xn({backgroundColor:S})},null,4),W("span",YR,Bt(p(S)),1)]))),128))])]),W("div",KR,[w[15]||(w[15]=W("h5",null,"ترتیب رنگ‌ها:",-1)),W("div",ZR,[(wt(!0),Dt(ln,null,_r(d.value,(S,R)=>(wt(),Dt("div",{key:R,class:"sequence-item",style:Xn({backgroundColor:S}),title:E(S)},null,12,QR))),128))])])])]),W("div",JR,[W("div",{class:"pattern-grid",style:Xn({gridTemplateColumns:`repeat(${t.cols}, 12px)`})},[(wt(!0),Dt(ln,null,_r(a.value,(S,R)=>(wt(),Dt("div",{key:R,class:rs(["grid-cell",{"active-row":h(R),"completed-row":v(R),"upcoming-row":x(R)}]),style:Xn({backgroundColor:S.color,opacity:m(R)}),title:`ردیف ${Math.floor(R/t.cols)+1}, ستون ${R%t.cols+1}: ${S.color}`},null,14,e2))),128))],4)])]),w[17]||(w[17]=bm('<div class="shortcuts-info" data-v-19b678d4><h4 data-v-19b678d4>⌨️ کلیدهای میانبر</h4><div class="shortcuts-list" data-v-19b678d4><div class="shortcut-item" data-v-19b678d4><kbd data-v-19b678d4>Enter</kbd> یا <kbd data-v-19b678d4>Space</kbd> - مرحله بعد </div><div class="shortcut-item" data-v-19b678d4><kbd data-v-19b678d4>←</kbd> - مرحله قبل</div><div class="shortcut-item" data-v-19b678d4><kbd data-v-19b678d4>R</kbd> - شروع مجدد</div></div></div>',1))]))}},n2=Yo(t2,[["__scopeId","data-v-19b678d4"]]),i2={class:"home-container"},s2={class:"app-header flex items-start justify-between mb-3!"},r2={class:"stats-section"},o2={class:"stat-item"},a2={class:"stat-number"},l2={class:"stat-item"},c2={class:"stat-number"},u2={class:"stat-item"},d2={class:"stat-number"},f2={class:"stat-item"},h2={class:"stat-number"},p2={class:"content-container"},m2={__name:"HomeView",setup(t){const e=ot(16),n=ot(80),i=ot(Array(16*80).fill("#ffffff")),s=ot(!0),r=ot(!1),o=ot(!1),a=ot(!1);function l(){s.value=!0,r.value=!1,o.value=!1,a.value=!1}function c(){r.value=!0,s.value=!1,o.value=!1,a.value=!1}function u(){o.value=!0,r.value=!1,s.value=!1,a.value=!1}function d(){a.value=!0,s.value=!1,r.value=!1,o.value=!1}function f(h){if(!Array.isArray(h)||h.length===0){i.value=[],e.value=0,n.value=0;return}e.value=h.length,n.value=Array.isArray(h[0])?h[0].length:0,i.value=h.flat()}return(h,v)=>(wt(),Dt("div",i2,[W("header",s2,[W("div",{class:"header-content"},[W("div",{class:"header-actions mt-3! flex items-center gap-2"},[W("button",{class:"rounded-md bg-cyan-950 px-4! py-1! text-[14px] text-white",onClick:l}," ویرایشگر شبکه "),W("button",{class:"rounded-md bg-blue-900 px-4! py-1! text-[14px] text-white",onClick:c}," نمایش مهره‌ها "),W("button",{class:"rounded-md bg-emerald-900 px-4! py-1! text-[14px] text-white",onClick:u}," پیش‌نمایش دستبند "),W("button",{class:"rounded-md bg-emerald-900 px-4! py-1! text-[14px] text-white",onClick:d}," مراحل اجرا ")])]),W("div",r2,[W("div",o2,[W("div",a2,Bt(e.value),1),v[0]||(v[0]=W("div",{class:"stat-label"},"ردیف",-1))]),W("div",l2,[W("div",c2,Bt(n.value),1),v[1]||(v[1]=W("div",{class:"stat-label"},"ستون",-1))]),W("div",u2,[W("div",d2,Bt(i.value.length),1),v[2]||(v[2]=W("div",{class:"stat-label"},"مهره",-1))]),W("div",f2,[W("div",h2,Bt((i.value.length/190).toFixed(2)),1),v[3]||(v[3]=W("div",{class:"stat-label"},"گرم",-1))])])]),W("div",p2,[s.value?(wt(),_o(kS,{key:0,class:"content-component",onUpdateGrid:f})):Is("",!0),r.value?(wt(),_o(oR,{key:1,pattern:i.value,rows:e.value,cols:n.value,class:"content-component"},null,8,["pattern","rows","cols"])):Is("",!0),o.value?(wt(),_o(gR,{key:2,pattern:i.value,rows:e.value,cols:n.value,class:"content-component"},null,8,["pattern","rows","cols"])):Is("",!0),a.value?(wt(),_o(n2,{key:3,pattern:i.value,rows:e.value,cols:n.value,class:"content-component"},null,8,["pattern","rows","cols"])):Is("",!0)])]))}},g2=Yo(m2,[["__scopeId","data-v-93917f23"]]),_2=oy({history:Nx("/"),routes:[{path:"/",name:"home",component:g2},{path:"/about",name:"about",component:()=>pa(()=>import("./AboutView-D96CWAEV.js"),[])},{path:"/sweetalert-demo",name:"sweetalert-demo",component:()=>pa(()=>import("./SweetAlertDemo-IaexAzD5.js"),__vite__mapDeps([0,1]))},{path:"/weaving-grid",name:"weaving-grid",component:()=>pa(()=>import("./WeavingGrid-BIDb68ws.js"),__vite__mapDeps([2,3]))},{path:"/beadwork-pattern",name:"beadwork-pattern",component:()=>pa(()=>import("./BeadworkPattern-CR4YoBxd.js"),[])}]});var Vl=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},aa=typeof window>"u"||"Deno"in globalThis;function Vn(){}function v2(t,e){return typeof t=="function"?t(e):t}function x2(t){return typeof t=="number"&&t>=0&&t!==1/0}function y2(t,e){return Math.max(t+(e||0)-Date.now(),0)}function rp(t,e){return typeof t=="function"?t(e):t}function w2(t,e){return typeof t=="function"?t(e):t}function op(t,e){const{type:n="all",exact:i,fetchStatus:s,predicate:r,queryKey:o,stale:a}=t;if(o){if(i){if(e.queryHash!==Hd(o,e.options))return!1}else if(!zo(e.queryKey,o))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||s&&s!==e.state.fetchStatus||r&&!r(e))}function ap(t,e){const{exact:n,status:i,predicate:s,mutationKey:r}=t;if(r){if(!e.options.mutationKey)return!1;if(n){if(ko(e.options.mutationKey)!==ko(r))return!1}else if(!zo(e.options.mutationKey,r))return!1}return!(i&&e.state.status!==i||s&&!s(e))}function Hd(t,e){return((e==null?void 0:e.queryKeyHashFn)||ko)(t)}function ko(t){return JSON.stringify(t,(e,n)=>$u(n)?Object.keys(n).sort().reduce((i,s)=>(i[s]=n[s],i),{}):n)}function zo(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?Object.keys(e).every(n=>zo(t[n],e[n])):!1}function b_(t,e){if(t===e)return t;const n=lp(t)&&lp(e);if(n||$u(t)&&$u(e)){const i=n?t:Object.keys(t),s=i.length,r=n?e:Object.keys(e),o=r.length,a=n?[]:{};let l=0;for(let c=0;c<o;c++){const u=n?c:r[c];(!n&&i.includes(u)||n)&&t[u]===void 0&&e[u]===void 0?(a[u]=void 0,l++):(a[u]=b_(t[u],e[u]),a[u]===t[u]&&t[u]!==void 0&&l++)}return s===o&&l===s?t:a}return e}function lp(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function $u(t){if(!cp(t))return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(!cp(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function cp(t){return Object.prototype.toString.call(t)==="[object Object]"}function b2(t){return new Promise(e=>{setTimeout(e,t)})}function S2(t,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?b_(t,e):e}function M2(t,e,n=0){const i=[...t,e];return n&&i.length>n?i.slice(1):i}function E2(t,e,n=0){const i=[e,...t];return n&&i.length>n?i.slice(0,-1):i}var Vd=Symbol();function S_(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===Vd?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}var Ns,es,Lr,fp,T2=(fp=class extends Vl{constructor(){super();rt(this,Ns);rt(this,es);rt(this,Lr);je(this,Lr,e=>{if(!aa&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){de(this,es)||this.setEventListener(de(this,Lr))}onUnsubscribe(){var e;this.hasListeners()||((e=de(this,es))==null||e.call(this),je(this,es,void 0))}setEventListener(e){var n;je(this,Lr,e),(n=de(this,es))==null||n.call(this),je(this,es,e(i=>{typeof i=="boolean"?this.setFocused(i):this.onFocus()}))}setFocused(e){de(this,Ns)!==e&&(je(this,Ns,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(n=>{n(e)})}isFocused(){var e;return typeof de(this,Ns)=="boolean"?de(this,Ns):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},Ns=new WeakMap,es=new WeakMap,Lr=new WeakMap,fp),M_=new T2,Ir,ts,Ur,hp,A2=(hp=class extends Vl{constructor(){super();rt(this,Ir,!0);rt(this,ts);rt(this,Ur);je(this,Ur,e=>{if(!aa&&window.addEventListener){const n=()=>e(!0),i=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",i)}}})}onSubscribe(){de(this,ts)||this.setEventListener(de(this,Ur))}onUnsubscribe(){var e;this.hasListeners()||((e=de(this,ts))==null||e.call(this),je(this,ts,void 0))}setEventListener(e){var n;je(this,Ur,e),(n=de(this,ts))==null||n.call(this),je(this,ts,e(this.setOnline.bind(this)))}setOnline(e){de(this,Ir)!==e&&(je(this,Ir,e),this.listeners.forEach(i=>{i(e)}))}isOnline(){return de(this,Ir)}},Ir=new WeakMap,ts=new WeakMap,Ur=new WeakMap,hp),wl=new A2;function C2(){let t,e;const n=new Promise((s,r)=>{t=s,e=r});n.status="pending",n.catch(()=>{});function i(s){Object.assign(n,s),delete n.resolve,delete n.reject}return n.resolve=s=>{i({status:"fulfilled",value:s}),t(s)},n.reject=s=>{i({status:"rejected",reason:s}),e(s)},n}function R2(t){return Math.min(1e3*2**t,3e4)}function E_(t){return(t??"online")==="online"?wl.isOnline():!0}var T_=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function zc(t){return t instanceof T_}function A_(t){let e=!1,n=0,i=!1,s;const r=C2(),o=x=>{var m;i||(f(new T_(x)),(m=t.abort)==null||m.call(t))},a=()=>{e=!0},l=()=>{e=!1},c=()=>M_.isFocused()&&(t.networkMode==="always"||wl.isOnline())&&t.canRun(),u=()=>E_(t.networkMode)&&t.canRun(),d=x=>{var m;i||(i=!0,(m=t.onSuccess)==null||m.call(t,x),s==null||s(),r.resolve(x))},f=x=>{var m;i||(i=!0,(m=t.onError)==null||m.call(t,x),s==null||s(),r.reject(x))},h=()=>new Promise(x=>{var m;s=p=>{(i||c())&&x(p)},(m=t.onPause)==null||m.call(t)}).then(()=>{var x;s=void 0,i||(x=t.onContinue)==null||x.call(t)}),v=()=>{if(i)return;let x;const m=n===0?t.initialPromise:void 0;try{x=m??t.fn()}catch(p){x=Promise.reject(p)}Promise.resolve(x).then(d).catch(p=>{var C;if(i)return;const A=t.retry??(aa?0:3),E=t.retryDelay??R2,b=typeof E=="function"?E(n,p):E,D=A===!0||typeof A=="number"&&n<A||typeof A=="function"&&A(n,p);if(e||!D){f(p);return}n++,(C=t.onFail)==null||C.call(t,n,p),b2(b).then(()=>c()?void 0:h()).then(()=>{e?f(p):v()})})};return{promise:r,cancel:o,continue:()=>(s==null||s(),r),cancelRetry:a,continueRetry:l,canStart:u,start:()=>(u()?v():h().then(v),r)}}var P2=t=>setTimeout(t,0);function D2(){let t=[],e=0,n=a=>{a()},i=a=>{a()},s=P2;const r=a=>{e?t.push(a):s(()=>{n(a)})},o=()=>{const a=t;t=[],a.length&&s(()=>{i(()=>{a.forEach(l=>{n(l)})})})};return{batch:a=>{let l;e++;try{l=a()}finally{e--,e||o()}return l},batchCalls:a=>(...l)=>{r(()=>{a(...l)})},schedule:r,setNotifyFunction:a=>{n=a},setBatchNotifyFunction:a=>{i=a},setScheduler:a=>{s=a}}}var cn=D2(),Fs,pp,C_=(pp=class{constructor(){rt(this,Fs)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),x2(this.gcTime)&&je(this,Fs,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(aa?1/0:5*60*1e3))}clearGcTimeout(){de(this,Fs)&&(clearTimeout(de(this,Fs)),je(this,Fs,void 0))}},Fs=new WeakMap,pp),Or,Nr,Un,Bs,jt,Ho,ks,Gn,Ci,mp,L2=(mp=class extends C_{constructor(e){super();rt(this,Gn);rt(this,Or);rt(this,Nr);rt(this,Un);rt(this,Bs);rt(this,jt);rt(this,Ho);rt(this,ks);je(this,ks,!1),je(this,Ho,e.defaultOptions),this.setOptions(e.options),this.observers=[],je(this,Bs,e.client),je(this,Un,de(this,Bs).getQueryCache()),this.queryKey=e.queryKey,this.queryHash=e.queryHash,je(this,Or,U2(this.options)),this.state=e.state??de(this,Or),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var e;return(e=de(this,jt))==null?void 0:e.promise}setOptions(e){this.options={...de(this,Ho),...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&de(this,Un).remove(this)}setData(e,n){const i=S2(this.state.data,e,this.options);return Xt(this,Gn,Ci).call(this,{data:i,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),i}setState(e,n){Xt(this,Gn,Ci).call(this,{type:"setState",state:e,setStateOptions:n})}cancel(e){var i,s;const n=(i=de(this,jt))==null?void 0:i.promise;return(s=de(this,jt))==null||s.cancel(e),n?n.then(Vn).catch(Vn):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(de(this,Or))}isActive(){return this.observers.some(e=>w2(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Vd||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(e=0){return this.state.isInvalidated||this.state.data===void 0||!y2(this.state.dataUpdatedAt,e)}onFocus(){var n;const e=this.observers.find(i=>i.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(n=de(this,jt))==null||n.continue()}onOnline(){var n;const e=this.observers.find(i=>i.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(n=de(this,jt))==null||n.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),de(this,Un).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(de(this,jt)&&(de(this,ks)?de(this,jt).cancel({revert:!0}):de(this,jt).cancelRetry()),this.scheduleGc()),de(this,Un).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Xt(this,Gn,Ci).call(this,{type:"invalidate"})}fetch(e,n){var l,c,u;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(de(this,jt))return de(this,jt).continueRetry(),de(this,jt).promise}if(e&&this.setOptions(e),!this.options.queryFn){const d=this.observers.find(f=>f.options.queryFn);d&&this.setOptions(d.options)}const i=new AbortController,s=d=>{Object.defineProperty(d,"signal",{enumerable:!0,get:()=>(je(this,ks,!0),i.signal)})},r=()=>{const d=S_(this.options,n),f={client:de(this,Bs),queryKey:this.queryKey,meta:this.meta};return s(f),je(this,ks,!1),this.options.persister?this.options.persister(d,f,this):d(f)},o={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:de(this,Bs),state:this.state,fetchFn:r};s(o),(l=this.options.behavior)==null||l.onFetch(o,this),je(this,Nr,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((c=o.fetchOptions)==null?void 0:c.meta))&&Xt(this,Gn,Ci).call(this,{type:"fetch",meta:(u=o.fetchOptions)==null?void 0:u.meta});const a=d=>{var f,h,v,x;zc(d)&&d.silent||Xt(this,Gn,Ci).call(this,{type:"error",error:d}),zc(d)||((h=(f=de(this,Un).config).onError)==null||h.call(f,d,this),(x=(v=de(this,Un).config).onSettled)==null||x.call(v,this.state.data,d,this)),this.scheduleGc()};return je(this,jt,A_({initialPromise:n==null?void 0:n.initialPromise,fn:o.fetchFn,abort:i.abort.bind(i),onSuccess:d=>{var f,h,v,x;if(d===void 0){a(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(d)}catch(m){a(m);return}(h=(f=de(this,Un).config).onSuccess)==null||h.call(f,d,this),(x=(v=de(this,Un).config).onSettled)==null||x.call(v,d,this.state.error,this),this.scheduleGc()},onError:a,onFail:(d,f)=>{Xt(this,Gn,Ci).call(this,{type:"failed",failureCount:d,error:f})},onPause:()=>{Xt(this,Gn,Ci).call(this,{type:"pause"})},onContinue:()=>{Xt(this,Gn,Ci).call(this,{type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode,canRun:()=>!0})),de(this,jt).start()}},Or=new WeakMap,Nr=new WeakMap,Un=new WeakMap,Bs=new WeakMap,jt=new WeakMap,Ho=new WeakMap,ks=new WeakMap,Gn=new WeakSet,Ci=function(e){const n=i=>{switch(e.type){case"failed":return{...i,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...I2(i.data,this.options),fetchMeta:e.meta??null};case"success":return{...i,data:e.data,dataUpdateCount:i.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const s=e.error;return zc(s)&&s.revert&&de(this,Nr)?{...de(this,Nr),fetchStatus:"idle"}:{...i,error:s,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...e.state}}};this.state=n(this.state),cn.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),de(this,Un).notify({query:this,type:"updated",action:e})})},mp);function I2(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:E_(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function U2(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=e!==void 0,i=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var ii,gp,R_=(gp=class extends Vl{constructor(n={}){super();rt(this,ii);this.config=n,je(this,ii,new Map)}build(n,i,s){const r=i.queryKey,o=i.queryHash??Hd(r,i);let a=this.get(o);return a||(a=new L2({client:n,queryKey:r,queryHash:o,options:n.defaultQueryOptions(i),state:s,defaultOptions:n.getQueryDefaults(r)}),this.add(a)),a}add(n){de(this,ii).has(n.queryHash)||(de(this,ii).set(n.queryHash,n),this.notify({type:"added",query:n}))}remove(n){const i=de(this,ii).get(n.queryHash);i&&(n.destroy(),i===n&&de(this,ii).delete(n.queryHash),this.notify({type:"removed",query:n}))}clear(){cn.batch(()=>{this.getAll().forEach(n=>{this.remove(n)})})}get(n){return de(this,ii).get(n)}getAll(){return[...de(this,ii).values()]}find(n){const i={exact:!0,...n};return this.getAll().find(s=>op(i,s))}findAll(n={}){const i=this.getAll();return Object.keys(n).length>0?i.filter(s=>op(n,s)):i}notify(n){cn.batch(()=>{this.listeners.forEach(i=>{i(n)})})}onFocus(){cn.batch(()=>{this.getAll().forEach(n=>{n.onFocus()})})}onOnline(){cn.batch(()=>{this.getAll().forEach(n=>{n.onOnline()})})}},ii=new WeakMap,gp),si,on,zs,ri,qi,_p,O2=(_p=class extends C_{constructor(e){super();rt(this,ri);rt(this,si);rt(this,on);rt(this,zs);this.mutationId=e.mutationId,je(this,on,e.mutationCache),je(this,si,[]),this.state=e.state||N2(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){de(this,si).includes(e)||(de(this,si).push(e),this.clearGcTimeout(),de(this,on).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){je(this,si,de(this,si).filter(n=>n!==e)),this.scheduleGc(),de(this,on).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){de(this,si).length||(this.state.status==="pending"?this.scheduleGc():de(this,on).remove(this))}continue(){var e;return((e=de(this,zs))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var r,o,a,l,c,u,d,f,h,v,x,m,p,A,E,b,D,C,O,U;const n=()=>{Xt(this,ri,qi).call(this,{type:"continue"})};je(this,zs,A_({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(w,S)=>{Xt(this,ri,qi).call(this,{type:"failed",failureCount:w,error:S})},onPause:()=>{Xt(this,ri,qi).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>de(this,on).canRun(this)}));const i=this.state.status==="pending",s=!de(this,zs).canStart();try{if(i)n();else{Xt(this,ri,qi).call(this,{type:"pending",variables:e,isPaused:s}),await((o=(r=de(this,on).config).onMutate)==null?void 0:o.call(r,e,this));const S=await((l=(a=this.options).onMutate)==null?void 0:l.call(a,e));S!==this.state.context&&Xt(this,ri,qi).call(this,{type:"pending",context:S,variables:e,isPaused:s})}const w=await de(this,zs).start();return await((u=(c=de(this,on).config).onSuccess)==null?void 0:u.call(c,w,e,this.state.context,this)),await((f=(d=this.options).onSuccess)==null?void 0:f.call(d,w,e,this.state.context)),await((v=(h=de(this,on).config).onSettled)==null?void 0:v.call(h,w,null,this.state.variables,this.state.context,this)),await((m=(x=this.options).onSettled)==null?void 0:m.call(x,w,null,e,this.state.context)),Xt(this,ri,qi).call(this,{type:"success",data:w}),w}catch(w){try{throw await((A=(p=de(this,on).config).onError)==null?void 0:A.call(p,w,e,this.state.context,this)),await((b=(E=this.options).onError)==null?void 0:b.call(E,w,e,this.state.context)),await((C=(D=de(this,on).config).onSettled)==null?void 0:C.call(D,void 0,w,this.state.variables,this.state.context,this)),await((U=(O=this.options).onSettled)==null?void 0:U.call(O,void 0,w,e,this.state.context)),w}finally{Xt(this,ri,qi).call(this,{type:"error",error:w})}}finally{de(this,on).runNext(this)}}},si=new WeakMap,on=new WeakMap,zs=new WeakMap,ri=new WeakSet,qi=function(e){const n=i=>{switch(e.type){case"failed":return{...i,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...i,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:e.error,failureCount:i.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=n(this.state),cn.batch(()=>{de(this,si).forEach(i=>{i.onMutationUpdate(e)}),de(this,on).notify({mutation:this,type:"updated",action:e})})},_p);function N2(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Pi,Wn,Vo,vp,P_=(vp=class extends Vl{constructor(n={}){super();rt(this,Pi);rt(this,Wn);rt(this,Vo);this.config=n,je(this,Pi,new Set),je(this,Wn,new Map),je(this,Vo,0)}build(n,i,s){const r=new O2({mutationCache:this,mutationId:++ua(this,Vo)._,options:n.defaultMutationOptions(i),state:s});return this.add(r),r}add(n){de(this,Pi).add(n);const i=ka(n);if(typeof i=="string"){const s=de(this,Wn).get(i);s?s.push(n):de(this,Wn).set(i,[n])}this.notify({type:"added",mutation:n})}remove(n){if(de(this,Pi).delete(n)){const i=ka(n);if(typeof i=="string"){const s=de(this,Wn).get(i);if(s)if(s.length>1){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}else s[0]===n&&de(this,Wn).delete(i)}}this.notify({type:"removed",mutation:n})}canRun(n){const i=ka(n);if(typeof i=="string"){const s=de(this,Wn).get(i),r=s==null?void 0:s.find(o=>o.state.status==="pending");return!r||r===n}else return!0}runNext(n){var s;const i=ka(n);if(typeof i=="string"){const r=(s=de(this,Wn).get(i))==null?void 0:s.find(o=>o!==n&&o.state.isPaused);return(r==null?void 0:r.continue())??Promise.resolve()}else return Promise.resolve()}clear(){cn.batch(()=>{de(this,Pi).forEach(n=>{this.notify({type:"removed",mutation:n})}),de(this,Pi).clear(),de(this,Wn).clear()})}getAll(){return Array.from(de(this,Pi))}find(n){const i={exact:!0,...n};return this.getAll().find(s=>ap(i,s))}findAll(n={}){return this.getAll().filter(i=>ap(n,i))}notify(n){cn.batch(()=>{this.listeners.forEach(i=>{i(n)})})}resumePausedMutations(){const n=this.getAll().filter(i=>i.state.isPaused);return cn.batch(()=>Promise.all(n.map(i=>i.continue().catch(Vn))))}},Pi=new WeakMap,Wn=new WeakMap,Vo=new WeakMap,vp);function ka(t){var e;return(e=t.options.scope)==null?void 0:e.id}function up(t){return{onFetch:(e,n)=>{var u,d,f,h,v;const i=e.options,s=(f=(d=(u=e.fetchOptions)==null?void 0:u.meta)==null?void 0:d.fetchMore)==null?void 0:f.direction,r=((h=e.state.data)==null?void 0:h.pages)||[],o=((v=e.state.data)==null?void 0:v.pageParams)||[];let a={pages:[],pageParams:[]},l=0;const c=async()=>{let x=!1;const m=E=>{Object.defineProperty(E,"signal",{enumerable:!0,get:()=>(e.signal.aborted?x=!0:e.signal.addEventListener("abort",()=>{x=!0}),e.signal)})},p=S_(e.options,e.fetchOptions),A=async(E,b,D)=>{if(x)return Promise.reject();if(b==null&&E.pages.length)return Promise.resolve(E);const C={client:e.client,queryKey:e.queryKey,pageParam:b,direction:D?"backward":"forward",meta:e.options.meta};m(C);const O=await p(C),{maxPages:U}=e.options,w=D?E2:M2;return{pages:w(E.pages,O,U),pageParams:w(E.pageParams,b,U)}};if(s&&r.length){const E=s==="backward",b=E?F2:dp,D={pages:r,pageParams:o},C=b(i,D);a=await A(D,C,E)}else{const E=t??r.length;do{const b=l===0?o[0]??i.initialPageParam:dp(i,a);if(l>0&&b==null)break;a=await A(a,b),l++}while(l<E)}return a};e.options.persister?e.fetchFn=()=>{var x,m;return(m=(x=e.options).persister)==null?void 0:m.call(x,c,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=c}}}function dp(t,{pages:e,pageParams:n}){const i=e.length-1;return e.length>0?t.getNextPageParam(e[i],e,n[i],n):void 0}function F2(t,{pages:e,pageParams:n}){var i;return e.length>0?(i=t.getPreviousPageParam)==null?void 0:i.call(t,e[0],e,n[0],n):void 0}var Ct,ns,is,Fr,Br,ss,kr,zr,xp,B2=(xp=class{constructor(e={}){rt(this,Ct);rt(this,ns);rt(this,is);rt(this,Fr);rt(this,Br);rt(this,ss);rt(this,kr);rt(this,zr);je(this,Ct,e.queryCache||new R_),je(this,ns,e.mutationCache||new P_),je(this,is,e.defaultOptions||{}),je(this,Fr,new Map),je(this,Br,new Map),je(this,ss,0)}mount(){ua(this,ss)._++,de(this,ss)===1&&(je(this,kr,M_.subscribe(async e=>{e&&(await this.resumePausedMutations(),de(this,Ct).onFocus())})),je(this,zr,wl.subscribe(async e=>{e&&(await this.resumePausedMutations(),de(this,Ct).onOnline())})))}unmount(){var e,n;ua(this,ss)._--,de(this,ss)===0&&((e=de(this,kr))==null||e.call(this),je(this,kr,void 0),(n=de(this,zr))==null||n.call(this),je(this,zr,void 0))}isFetching(e){return de(this,Ct).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return de(this,ns).findAll({...e,status:"pending"}).length}getQueryData(e){var i;const n=this.defaultQueryOptions({queryKey:e});return(i=de(this,Ct).get(n.queryHash))==null?void 0:i.state.data}ensureQueryData(e){const n=this.defaultQueryOptions(e),i=de(this,Ct).build(this,n),s=i.state.data;return s===void 0?this.fetchQuery(e):(e.revalidateIfStale&&i.isStaleByTime(rp(n.staleTime,i))&&this.prefetchQuery(n),Promise.resolve(s))}getQueriesData(e){return de(this,Ct).findAll(e).map(({queryKey:n,state:i})=>{const s=i.data;return[n,s]})}setQueryData(e,n,i){const s=this.defaultQueryOptions({queryKey:e}),r=de(this,Ct).get(s.queryHash),o=r==null?void 0:r.state.data,a=v2(n,o);if(a!==void 0)return de(this,Ct).build(this,s).setData(a,{...i,manual:!0})}setQueriesData(e,n,i){return cn.batch(()=>de(this,Ct).findAll(e).map(({queryKey:s})=>[s,this.setQueryData(s,n,i)]))}getQueryState(e){var i;const n=this.defaultQueryOptions({queryKey:e});return(i=de(this,Ct).get(n.queryHash))==null?void 0:i.state}removeQueries(e){const n=de(this,Ct);cn.batch(()=>{n.findAll(e).forEach(i=>{n.remove(i)})})}resetQueries(e,n){const i=de(this,Ct);return cn.batch(()=>(i.findAll(e).forEach(s=>{s.reset()}),this.refetchQueries({type:"active",...e},n)))}cancelQueries(e,n={}){const i={revert:!0,...n},s=cn.batch(()=>de(this,Ct).findAll(e).map(r=>r.cancel(i)));return Promise.all(s).then(Vn).catch(Vn)}invalidateQueries(e,n={}){return cn.batch(()=>(de(this,Ct).findAll(e).forEach(i=>{i.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},n)))}refetchQueries(e,n={}){const i={...n,cancelRefetch:n.cancelRefetch??!0},s=cn.batch(()=>de(this,Ct).findAll(e).filter(r=>!r.isDisabled()).map(r=>{let o=r.fetch(void 0,i);return i.throwOnError||(o=o.catch(Vn)),r.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(s).then(Vn)}fetchQuery(e){const n=this.defaultQueryOptions(e);n.retry===void 0&&(n.retry=!1);const i=de(this,Ct).build(this,n);return i.isStaleByTime(rp(n.staleTime,i))?i.fetch(n):Promise.resolve(i.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(Vn).catch(Vn)}fetchInfiniteQuery(e){return e.behavior=up(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(Vn).catch(Vn)}ensureInfiniteQueryData(e){return e.behavior=up(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return wl.isOnline()?de(this,ns).resumePausedMutations():Promise.resolve()}getQueryCache(){return de(this,Ct)}getMutationCache(){return de(this,ns)}getDefaultOptions(){return de(this,is)}setDefaultOptions(e){je(this,is,e)}setQueryDefaults(e,n){de(this,Fr).set(ko(e),{queryKey:e,defaultOptions:n})}getQueryDefaults(e){const n=[...de(this,Fr).values()],i={};return n.forEach(s=>{zo(e,s.queryKey)&&Object.assign(i,s.defaultOptions)}),i}setMutationDefaults(e,n){de(this,Br).set(ko(e),{mutationKey:e,defaultOptions:n})}getMutationDefaults(e){const n=[...de(this,Br).values()],i={};return n.forEach(s=>{zo(e,s.mutationKey)&&Object.assign(i,s.defaultOptions)}),i}defaultQueryOptions(e){if(e._defaulted)return e;const n={...de(this,is).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return n.queryHash||(n.queryHash=Hd(n.queryKey,n)),n.refetchOnReconnect===void 0&&(n.refetchOnReconnect=n.networkMode!=="always"),n.throwOnError===void 0&&(n.throwOnError=!!n.suspense),!n.networkMode&&n.persister&&(n.networkMode="offlineFirst"),n.queryFn===Vd&&(n.enabled=!1),n}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...de(this,is).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){de(this,Ct).clear(),de(this,ns).clear()}},Ct=new WeakMap,ns=new WeakMap,is=new WeakMap,Fr=new WeakMap,Br=new WeakMap,ss=new WeakMap,kr=new WeakMap,zr=new WeakMap,xp),k2="VUE_QUERY_CLIENT";function z2(t){const e=t?`:${t}`:"";return`${k2}${e}`}function qu(t,e,n="",i=0){if(e){const s=e(t,n,i);if(s===void 0&&Gt(t)||s!==void 0)return s}if(Array.isArray(t))return t.map((s,r)=>qu(s,e,String(r),i+1));if(typeof t=="object"&&V2(t)){const s=Object.entries(t).map(([r,o])=>[r,qu(o,e,r,i+1)]);return Object.fromEntries(s)}return t}function H2(t,e){return qu(t,e)}function et(t,e=!1){return H2(t,(n,i,s)=>{if(s===1&&i==="queryKey")return et(n,!0);if(e&&G2(n))return et(n(),e);if(Gt(n))return et(cs(n),e)})}function V2(t){if(Object.prototype.toString.call(t)!=="[object Object]")return!1;const e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function G2(t){return typeof t=="function"}var W2=class extends R_{find(t){return super.find(et(t))}findAll(t={}){return super.findAll(et(t))}},X2=class extends P_{find(t){return super.find(et(t))}findAll(t={}){return super.findAll(et(t))}},$2=class extends B2{constructor(t={}){const e={defaultOptions:t.defaultOptions,queryCache:t.queryCache||new W2,mutationCache:t.mutationCache||new X2};super(e),this.isRestoring=ot(!1)}isFetching(t={}){return super.isFetching(et(t))}isMutating(t={}){return super.isMutating(et(t))}getQueryData(t){return super.getQueryData(et(t))}ensureQueryData(t){return super.ensureQueryData(et(t))}getQueriesData(t){return super.getQueriesData(et(t))}setQueryData(t,e,n={}){return super.setQueryData(et(t),e,et(n))}setQueriesData(t,e,n={}){return super.setQueriesData(et(t),e,et(n))}getQueryState(t){return super.getQueryState(et(t))}removeQueries(t={}){return super.removeQueries(et(t))}resetQueries(t={},e={}){return super.resetQueries(et(t),et(e))}cancelQueries(t={},e={}){return super.cancelQueries(et(t),et(e))}invalidateQueries(t={},e={}){const n=et(t),i=et(e);if(super.invalidateQueries({...n,refetchType:"none"},i),n.refetchType==="none")return Promise.resolve();const s={...n,type:n.refetchType??n.type??"active"};return qo().then(()=>super.refetchQueries(s,i))}refetchQueries(t={},e={}){return super.refetchQueries(et(t),et(e))}fetchQuery(t){return super.fetchQuery(et(t))}prefetchQuery(t){return super.prefetchQuery(et(t))}fetchInfiniteQuery(t){return super.fetchInfiniteQuery(et(t))}prefetchInfiniteQuery(t){return super.prefetchInfiniteQuery(et(t))}setDefaultOptions(t){super.setDefaultOptions(et(t))}setQueryDefaults(t,e){super.setQueryDefaults(et(t),et(e))}getQueryDefaults(t){return super.getQueryDefaults(et(t))}setMutationDefaults(t,e){super.setMutationDefaults(et(t),et(e))}getMutationDefaults(t){return super.getMutationDefaults(et(t))}},q2={install:(t,e={})=>{const n=z2(e.queryClientKey);let i;if("queryClient"in e&&e.queryClient)i=e.queryClient;else{const o="queryClientConfig"in e?e.queryClientConfig:void 0;i=new $2(o)}aa||i.mount();let s=()=>{};if(e.clientPersister){i.isRestoring.value=!0;const[o,a]=e.clientPersister(i);s=o,a.then(()=>{var l;i.isRestoring.value=!1,(l=e.clientPersisterOnSuccess)==null||l.call(e,i)})}const r=()=>{i.unmount(),s()};if(t.onUnmount)t.onUnmount(r);else{const o=t.unmount;t.unmount=function(){r(),o()}}t.provide(n,i)}};const D_=tx(py),j2=rx();D_.use(j2).use(_2).use(q2);D_.mount("#app");export{Q0 as A,K2 as B,Vt as C,oR as D,gR as E,ln as F,Qt as G,_o as H,Xa as I,n2 as W,Yo as _,W as a,Is as b,Dt as c,Nt as d,Q2 as e,ac as f,sh as g,eP as h,tP as i,nP as j,iP as k,J2 as l,Xo as m,Jr as n,wt as o,ld as p,Ls as q,ot as r,wi as s,Bt as t,_r as u,vr as v,Kn as w,rs as x,Z2 as y,Xn as z};
