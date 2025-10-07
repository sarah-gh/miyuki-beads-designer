const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SweetAlertDemo-DY8E0yIB.js","assets/SweetAlertDemo-tn0RQdqM.css","assets/WeavingGrid-4Cr5rZqH.js","assets/PeyoteGridEditor-DT3hX9YI.js","assets/PeyoteGridEditor-_eckTEjt.css","assets/WeavingGrid-p5k6qFxd.css","assets/PeyoteGrid-C3bEPWAS.js","assets/PeyoteGrid-DyXLFu-D.css"])))=>i.map(i=>d[i]);
var nf=t=>{throw TypeError(t)};var tc=(t,e,n)=>e.has(t)||nf("Cannot "+n);var de=(t,e,n)=>(tc(t,e,"read from private field"),n?n.call(t):e.get(t)),yt=(t,e,n)=>e.has(t)?nf("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),ft=(t,e,n,i)=>(tc(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n),cn=(t,e,n)=>(tc(t,e,"access private method"),n);var Ea=(t,e,n,i)=>({set _(s){ft(t,e,s,n)},get _(){return de(t,e,i)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function od(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ut={},Lr=[],Ai=()=>{},Vv=()=>!1,Il=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ad=t=>t.startsWith("onUpdate:"),vn=Object.assign,ld=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Gv=Object.prototype.hasOwnProperty,Ct=(t,e)=>Gv.call(t,e),tt=Array.isArray,Ir=t=>oa(t)==="[object Map]",co=t=>oa(t)==="[object Set]",sf=t=>oa(t)==="[object Date]",dt=t=>typeof t=="function",Qt=t=>typeof t=="string",Pi=t=>typeof t=="symbol",Nt=t=>t!==null&&typeof t=="object",Tp=t=>(Nt(t)||dt(t))&&dt(t.then)&&dt(t.catch),Ap=Object.prototype.toString,oa=t=>Ap.call(t),Wv=t=>oa(t).slice(8,-1),Cp=t=>oa(t)==="[object Object]",cd=t=>Qt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Oo=od(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ul=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},$v=/-(\w)/g,ni=Ul(t=>t.replace($v,(e,n)=>n?n.toUpperCase():"")),Xv=/\B([A-Z])/g,ar=Ul(t=>t.replace(Xv,"-$1").toLowerCase()),Ol=Ul(t=>t.charAt(0).toUpperCase()+t.slice(1)),nc=Ul(t=>t?`on${Ol(t)}`:""),Ss=(t,e)=>!Object.is(t,e),el=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Rp=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},fl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let rf;const Nl=()=>rf||(rf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Wn(t){if(tt(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Qt(i)?Kv(i):Wn(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Qt(t)||Nt(t))return t}const qv=/;(?![^(]*\))/g,jv=/:([^]+)/,Yv=/\/\*[^]*?\*\//g;function Kv(t){const e={};return t.replace(Yv,"").split(qv).forEach(n=>{if(n){const i=n.split(jv);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function et(t){let e="";if(Qt(t))e=t;else if(tt(t))for(let n=0;n<t.length;n++){const i=et(t[n]);i&&(e+=i+" ")}else if(Nt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Zv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qv=od(Zv);function Pp(t){return!!t||t===""}function Jv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=aa(t[i],e[i]);return n}function aa(t,e){if(t===e)return!0;let n=sf(t),i=sf(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Pi(t),i=Pi(e),n||i)return t===e;if(n=tt(t),i=tt(e),n||i)return n&&i?Jv(t,e):!1;if(n=Nt(t),i=Nt(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!aa(t[o],e[o]))return!1}}return String(t)===String(e)}function ud(t,e){return t.findIndex(n=>aa(n,e))}const Dp=t=>!!(t&&t.__v_isRef===!0),ct=t=>Qt(t)?t:t==null?"":tt(t)||Nt(t)&&(t.toString===Ap||!dt(t.toString))?Dp(t)?ct(t.value):JSON.stringify(t,Lp,2):String(t),Lp=(t,e)=>Dp(e)?Lp(t,e.value):Ir(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[ic(i,r)+" =>"]=s,n),{})}:co(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ic(n))}:Pi(e)?ic(e):Nt(e)&&!tt(e)&&!Cp(e)?String(e):e,ic=(t,e="")=>{var n;return Pi(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Vn;class Ip{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Vn,!e&&Vn&&(this.index=(Vn.scopes||(Vn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Vn;try{return Vn=this,e()}finally{Vn=n}}}on(){Vn=this}off(){Vn=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function e_(t){return new Ip(t)}function t_(){return Vn}let Ot;const sc=new WeakSet;class Up{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Vn&&Vn.active&&Vn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,sc.has(this)&&(sc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Np(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,of(this),Fp(this);const e=Ot,n=hi;Ot=this,hi=!0;try{return this.fn()}finally{kp(this),Ot=e,hi=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)hd(e);this.deps=this.depsTail=void 0,of(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?sc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Qc(this)&&this.run()}get dirty(){return Qc(this)}}let Op=0,No,Fo;function Np(t,e=!1){if(t.flags|=8,e){t.next=Fo,Fo=t;return}t.next=No,No=t}function dd(){Op++}function fd(){if(--Op>0)return;if(Fo){let e=Fo;for(Fo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;No;){let e=No;for(No=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Fp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function kp(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),hd(i),n_(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function Qc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Bp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Bp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Go))return;t.globalVersion=Go;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Qc(t)){t.flags&=-3;return}const n=Ot,i=hi;Ot=t,hi=!0;try{Fp(t);const s=t.fn(t._value);(e.version===0||Ss(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ot=n,hi=i,kp(t),t.flags&=-3}}function hd(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)hd(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function n_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let hi=!0;const Hp=[];function Rs(){Hp.push(hi),hi=!1}function Ps(){const t=Hp.pop();hi=t===void 0?!0:t}function of(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ot;Ot=void 0;try{e()}finally{Ot=n}}}let Go=0;class i_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class pd{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ot||!hi||Ot===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ot)n=this.activeLink=new i_(Ot,this),Ot.deps?(n.prevDep=Ot.depsTail,Ot.depsTail.nextDep=n,Ot.depsTail=n):Ot.deps=Ot.depsTail=n,zp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Ot.depsTail,n.nextDep=void 0,Ot.depsTail.nextDep=n,Ot.depsTail=n,Ot.deps===n&&(Ot.deps=i)}return n}trigger(e){this.version++,Go++,this.notify(e)}notify(e){dd();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{fd()}}}function zp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)zp(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Jc=new WeakMap,Js=Symbol(""),eu=Symbol(""),Wo=Symbol("");function hn(t,e,n){if(hi&&Ot){let i=Jc.get(t);i||Jc.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new pd),s.map=i,s.key=n),s.track()}}function Xi(t,e,n,i,s,r){const o=Jc.get(t);if(!o){Go++;return}const a=l=>{l&&l.trigger()};if(dd(),e==="clear")o.forEach(a);else{const l=tt(t),c=l&&cd(n);if(l&&n==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===Wo||!Pi(f)&&f>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Wo)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Js)),Ir(t)&&a(o.get(eu)));break;case"delete":l||(a(o.get(Js)),Ir(t)&&a(o.get(eu)));break;case"set":Ir(t)&&a(o.get(Js));break}}fd()}function fr(t){const e=At(t);return e===t?e:(hn(e,"iterate",Wo),ti(t)?e:e.map(pn))}function Fl(t){return hn(t=At(t),"iterate",Wo),t}const s_={__proto__:null,[Symbol.iterator](){return rc(this,Symbol.iterator,pn)},concat(...t){return fr(this).concat(...t.map(e=>tt(e)?fr(e):e))},entries(){return rc(this,"entries",t=>(t[1]=pn(t[1]),t))},every(t,e){return Oi(this,"every",t,e,void 0,arguments)},filter(t,e){return Oi(this,"filter",t,e,n=>n.map(pn),arguments)},find(t,e){return Oi(this,"find",t,e,pn,arguments)},findIndex(t,e){return Oi(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Oi(this,"findLast",t,e,pn,arguments)},findLastIndex(t,e){return Oi(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Oi(this,"forEach",t,e,void 0,arguments)},includes(...t){return oc(this,"includes",t)},indexOf(...t){return oc(this,"indexOf",t)},join(t){return fr(this).join(t)},lastIndexOf(...t){return oc(this,"lastIndexOf",t)},map(t,e){return Oi(this,"map",t,e,void 0,arguments)},pop(){return _o(this,"pop")},push(...t){return _o(this,"push",t)},reduce(t,...e){return af(this,"reduce",t,e)},reduceRight(t,...e){return af(this,"reduceRight",t,e)},shift(){return _o(this,"shift")},some(t,e){return Oi(this,"some",t,e,void 0,arguments)},splice(...t){return _o(this,"splice",t)},toReversed(){return fr(this).toReversed()},toSorted(t){return fr(this).toSorted(t)},toSpliced(...t){return fr(this).toSpliced(...t)},unshift(...t){return _o(this,"unshift",t)},values(){return rc(this,"values",pn)}};function rc(t,e,n){const i=Fl(t),s=i[e]();return i!==t&&!ti(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=n(r.value)),r}),s}const r_=Array.prototype;function Oi(t,e,n,i,s,r){const o=Fl(t),a=o!==t&&!ti(t),l=o[e];if(l!==r_[e]){const d=l.apply(t,r);return a?pn(d):d}let c=n;o!==t&&(a?c=function(d,f){return n.call(this,pn(d),f,t)}:n.length>2&&(c=function(d,f){return n.call(this,d,f,t)}));const u=l.call(o,c,i);return a&&s?s(u):u}function af(t,e,n,i){const s=Fl(t);let r=n;return s!==t&&(ti(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,pn(a),l,t)}),s[e](r,...i)}function oc(t,e,n){const i=At(t);hn(i,"iterate",Wo);const s=i[e](...n);return(s===-1||s===!1)&&vd(n[0])?(n[0]=At(n[0]),i[e](...n)):s}function _o(t,e,n=[]){Rs(),dd();const i=At(t)[e].apply(t,n);return fd(),Ps(),i}const o_=od("__proto__,__v_isRef,__isVue"),Vp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Pi));function a_(t){Pi(t)||(t=String(t));const e=At(this);return hn(e,"has",t),e.hasOwnProperty(t)}class Gp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?v_:qp:r?Xp:$p).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=tt(e);if(!s){let l;if(o&&(l=s_[n]))return l;if(n==="hasOwnProperty")return a_}const a=Reflect.get(e,n,an(e)?e:i);return(Pi(n)?Vp.has(n):o_(n))||(s||hn(e,"get",n),r)?a:an(a)?o&&cd(n)?a:a.value:Nt(a)?s?Yp(a):la(a):a}}class Wp extends Gp{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(!this._isShallow){const l=tr(r);if(!ti(i)&&!tr(i)&&(r=At(r),i=At(i)),!tt(e)&&an(r)&&!an(i))return l?!1:(r.value=i,!0)}const o=tt(e)&&cd(n)?Number(n)<e.length:Ct(e,n),a=Reflect.set(e,n,i,an(e)?e:s);return e===At(s)&&(o?Ss(i,r)&&Xi(e,"set",n,i):Xi(e,"add",n,i)),a}deleteProperty(e,n){const i=Ct(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Xi(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!Pi(n)||!Vp.has(n))&&hn(e,"has",n),i}ownKeys(e){return hn(e,"iterate",tt(e)?"length":Js),Reflect.ownKeys(e)}}class l_ extends Gp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const c_=new Wp,u_=new l_,d_=new Wp(!0);const tu=t=>t,Ta=t=>Reflect.getPrototypeOf(t);function f_(t,e,n){return function(...i){const s=this.__v_raw,r=At(s),o=Ir(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?tu:e?nu:pn;return!e&&hn(r,"iterate",l?eu:Js),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function Aa(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function h_(t,e){const n={get(s){const r=this.__v_raw,o=At(r),a=At(s);t||(Ss(s,a)&&hn(o,"get",s),hn(o,"get",a));const{has:l}=Ta(o),c=e?tu:t?nu:pn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&hn(At(s),"iterate",Js),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=At(r),a=At(s);return t||(Ss(s,a)&&hn(o,"has",s),hn(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=At(a),c=e?tu:t?nu:pn;return!t&&hn(l,"iterate",Js),a.forEach((u,d)=>s.call(r,c(u),c(d),o))}};return vn(n,t?{add:Aa("add"),set:Aa("set"),delete:Aa("delete"),clear:Aa("clear")}:{add(s){!e&&!ti(s)&&!tr(s)&&(s=At(s));const r=At(this);return Ta(r).has.call(r,s)||(r.add(s),Xi(r,"add",s,s)),this},set(s,r){!e&&!ti(r)&&!tr(r)&&(r=At(r));const o=At(this),{has:a,get:l}=Ta(o);let c=a.call(o,s);c||(s=At(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Ss(r,u)&&Xi(o,"set",s,r):Xi(o,"add",s,r),this},delete(s){const r=At(this),{has:o,get:a}=Ta(r);let l=o.call(r,s);l||(s=At(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Xi(r,"delete",s,void 0),c},clear(){const s=At(this),r=s.size!==0,o=s.clear();return r&&Xi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=f_(s,t,e)}),n}function md(t,e){const n=h_(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(Ct(n,s)&&s in i?n:i,s,r)}const p_={get:md(!1,!1)},m_={get:md(!1,!0)},g_={get:md(!0,!1)};const $p=new WeakMap,Xp=new WeakMap,qp=new WeakMap,v_=new WeakMap;function __(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function b_(t){return t.__v_skip||!Object.isExtensible(t)?0:__(Wv(t))}function la(t){return tr(t)?t:gd(t,!1,c_,p_,$p)}function jp(t){return gd(t,!1,d_,m_,Xp)}function Yp(t){return gd(t,!0,u_,g_,qp)}function gd(t,e,n,i,s){if(!Nt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=b_(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Ur(t){return tr(t)?Ur(t.__v_raw):!!(t&&t.__v_isReactive)}function tr(t){return!!(t&&t.__v_isReadonly)}function ti(t){return!!(t&&t.__v_isShallow)}function vd(t){return t?!!t.__v_raw:!1}function At(t){const e=t&&t.__v_raw;return e?At(e):t}function Kp(t){return!Ct(t,"__v_skip")&&Object.isExtensible(t)&&Rp(t,"__v_skip",!0),t}const pn=t=>Nt(t)?la(t):t,nu=t=>Nt(t)?Yp(t):t;function an(t){return t?t.__v_isRef===!0:!1}function at(t){return Zp(t,!1)}function x_(t){return Zp(t,!0)}function Zp(t,e){return an(t)?t:new y_(t,e)}class y_{constructor(e,n){this.dep=new pd,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:At(e),this._value=n?e:pn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||ti(e)||tr(e);e=i?e:At(e),Ss(e,n)&&(this._rawValue=e,this._value=i?e:pn(e),this.dep.trigger())}}function Ms(t){return an(t)?t.value:t}const w_={get:(t,e,n)=>e==="__v_raw"?t:Ms(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return an(s)&&!an(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Qp(t){return Ur(t)?t:new Proxy(t,w_)}class S_{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new pd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Go-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ot!==this)return Np(this,!0),!0}get value(){const e=this.dep.track();return Bp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function M_(t,e,n=!1){let i,s;return dt(t)?i=t:(i=t.get,s=t.set),new S_(i,s,n)}const Ca={},hl=new WeakMap;let Vs;function E_(t,e=!1,n=Vs){if(n){let i=hl.get(n);i||hl.set(n,i=[]),i.push(t)}}function T_(t,e,n=Ut){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=w=>s?w:ti(w)||s===!1||s===0?qi(w,1):qi(w);let u,d,f,h,v=!1,g=!1;if(an(t)?(d=()=>t.value,v=ti(t)):Ur(t)?(d=()=>c(t),v=!0):tt(t)?(g=!0,v=t.some(w=>Ur(w)||ti(w)),d=()=>t.map(w=>{if(an(w))return w.value;if(Ur(w))return c(w);if(dt(w))return l?l(w,2):w()})):dt(t)?e?d=l?()=>l(t,2):t:d=()=>{if(f){Rs();try{f()}finally{Ps()}}const w=Vs;Vs=u;try{return l?l(t,3,[h]):t(h)}finally{Vs=w}}:d=Ai,e&&s){const w=d,U=s===!0?1/0:s;d=()=>qi(w(),U)}const m=t_(),p=()=>{u.stop(),m&&m.active&&ld(m.effects,u)};if(r&&e){const w=e;e=(...U)=>{w(...U),p()}}let C=g?new Array(t.length).fill(Ca):Ca;const R=w=>{if(!(!(u.flags&1)||!u.dirty&&!w))if(e){const U=u.run();if(s||v||(g?U.some((L,D)=>Ss(L,C[D])):Ss(U,C))){f&&f();const L=Vs;Vs=u;try{const D=[U,C===Ca?void 0:g&&C[0]===Ca?[]:C,h];l?l(e,3,D):e(...D),C=U}finally{Vs=L}}}else u.run()};return a&&a(R),u=new Up(d),u.scheduler=o?()=>o(R,!1):R,h=w=>E_(w,!1,u),f=u.onStop=()=>{const w=hl.get(u);if(w){if(l)l(w,4);else for(const U of w)U();hl.delete(u)}},e?i?R(!0):C=u.run():o?o(R.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function qi(t,e=1/0,n){if(e<=0||!Nt(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,an(t))qi(t.value,e,n);else if(tt(t))for(let i=0;i<t.length;i++)qi(t[i],e,n);else if(co(t)||Ir(t))t.forEach(i=>{qi(i,e,n)});else if(Cp(t)){for(const i in t)qi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&qi(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ca(t,e,n,i){try{return i?t(...i):t()}catch(s){kl(s,e,n)}}function Di(t,e,n,i){if(dt(t)){const s=ca(t,e,n,i);return s&&Tp(s)&&s.catch(r=>{kl(r,e,n)}),s}if(tt(t)){const s=[];for(let r=0;r<t.length;r++)s.push(Di(t[r],e,n,i));return s}}function kl(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ut;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}a=a.parent}if(r){Rs(),ca(r,null,10,[t,l,c]),Ps();return}}A_(t,n,s,i,o)}function A_(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const En=[];let _i=-1;const Or=[];let us=null,Cr=0;const Jp=Promise.resolve();let pl=null;function ua(t){const e=pl||Jp;return t?e.then(this?t.bind(this):t):e}function C_(t){let e=_i+1,n=En.length;for(;e<n;){const i=e+n>>>1,s=En[i],r=$o(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function _d(t){if(!(t.flags&1)){const e=$o(t),n=En[En.length-1];!n||!(t.flags&2)&&e>=$o(n)?En.push(t):En.splice(C_(e),0,t),t.flags|=1,em()}}function em(){pl||(pl=Jp.then(nm))}function R_(t){tt(t)?Or.push(...t):us&&t.id===-1?us.splice(Cr+1,0,t):t.flags&1||(Or.push(t),t.flags|=1),em()}function lf(t,e,n=_i+1){for(;n<En.length;n++){const i=En[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;En.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function tm(t){if(Or.length){const e=[...new Set(Or)].sort((n,i)=>$o(n)-$o(i));if(Or.length=0,us){us.push(...e);return}for(us=e,Cr=0;Cr<us.length;Cr++){const n=us[Cr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}us=null,Cr=0}}const $o=t=>t.id==null?t.flags&2?-1:1/0:t.id;function nm(t){try{for(_i=0;_i<En.length;_i++){const e=En[_i];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ca(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;_i<En.length;_i++){const e=En[_i];e&&(e.flags&=-2)}_i=-1,En.length=0,tm(),pl=null,(En.length||Or.length)&&nm()}}let $n=null,im=null;function ml(t){const e=$n;return $n=t,im=t&&t.type.__scopeId||null,e}function Po(t,e=$n,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&_f(-1);const r=ml(e);let o;try{o=t(...s)}finally{ml(r),i._d&&_f(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Zt(t,e){if($n===null)return t;const n=Vl($n),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Ut]=e[s];r&&(dt(r)&&(r={mounted:r,updated:r}),r.deep&&qi(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Is(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Rs(),Di(l,n,8,[t.el,a,t,e]),Ps())}}const P_=Symbol("_vte"),D_=t=>t.__isTeleport;function bd(t,e){t.shapeFlag&6&&t.component?(t.transition=e,bd(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function sm(t,e){return dt(t)?vn({name:t.name},e,{setup:t}):t}function rm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function gl(t,e,n,i,s=!1){if(tt(t)){t.forEach((v,g)=>gl(v,e&&(tt(e)?e[g]:e),n,i,s));return}if(ko(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&gl(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?Vl(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ut?a.refs={}:a.refs,d=a.setupState,f=At(d),h=d===Ut?()=>!1:v=>Ct(f,v);if(c!=null&&c!==l&&(Qt(c)?(u[c]=null,h(c)&&(d[c]=null)):an(c)&&(c.value=null)),dt(l))ca(l,a,12,[o,u]);else{const v=Qt(l),g=an(l);if(v||g){const m=()=>{if(t.f){const p=v?h(l)?d[l]:u[l]:l.value;s?tt(p)&&ld(p,r):tt(p)?p.includes(r)||p.push(r):v?(u[l]=[r],h(l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else v?(u[l]=o,h(l)&&(d[l]=o)):g&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,zn(m,n)):m()}}}Nl().requestIdleCallback;Nl().cancelIdleCallback;const ko=t=>!!t.type.__asyncLoader,om=t=>t.type.__isKeepAlive;function L_(t,e){am(t,"a",e)}function I_(t,e){am(t,"da",e)}function am(t,e,n=mn){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Bl(e,i,n),n){let s=n.parent;for(;s&&s.parent;)om(s.parent.vnode)&&U_(i,e,n,s),s=s.parent}}function U_(t,e,n,i){const s=Bl(e,t,i,!0);yd(()=>{ld(i[e],s)},n)}function Bl(t,e,n=mn,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Rs();const a=da(n),l=Di(e,n,t,o);return a(),Ps(),l});return i?s.unshift(r):s.push(r),r}}const es=t=>(e,n=mn)=>{(!qo||t==="sp")&&Bl(t,(...i)=>e(...i),n)},O_=es("bm"),uo=es("m"),N_=es("bu"),F_=es("u"),xd=es("bum"),yd=es("um"),k_=es("sp"),B_=es("rtg"),H_=es("rtc");function z_(t,e=mn){Bl("ec",t,e)}const V_="components";function G_(t,e){return $_(V_,t,!0,e)||t}const W_=Symbol.for("v-ndc");function $_(t,e,n=!0,i=!1){const s=$n||mn;if(s){const r=s.type;{const a=D0(r,!1);if(a&&(a===e||a===ni(e)||a===Ol(ni(e))))return r}const o=cf(s[t]||r[t],e)||cf(s.appContext[t],e);return!o&&i?r:o}}function cf(t,e){return t&&(t[e]||t[ni(e)]||t[Ol(ni(e))])}function Mn(t,e,n,i){let s;const r=n,o=tt(t);if(o||Qt(t)){const a=o&&Ur(t);let l=!1;a&&(l=!ti(t),t=Fl(t)),s=new Array(t.length);for(let c=0,u=t.length;c<u;c++)s[c]=e(l?pn(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(Nt(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,r)}}else s=[];return s}const iu=t=>t?Rm(t)?Vl(t):iu(t.parent):null,Bo=vn(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>iu(t.parent),$root:t=>iu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>cm(t),$forceUpdate:t=>t.f||(t.f=()=>{_d(t.update)}),$nextTick:t=>t.n||(t.n=ua.bind(t.proxy)),$watch:t=>f0.bind(t)}),ac=(t,e)=>t!==Ut&&!t.__isScriptSetup&&Ct(t,e),X_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(ac(i,e))return o[e]=1,i[e];if(s!==Ut&&Ct(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&Ct(c,e))return o[e]=3,r[e];if(n!==Ut&&Ct(n,e))return o[e]=4,n[e];su&&(o[e]=0)}}const u=Bo[e];let d,f;if(u)return e==="$attrs"&&hn(t.attrs,"get",""),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Ut&&Ct(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,Ct(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return ac(s,e)?(s[e]=n,!0):i!==Ut&&Ct(i,e)?(i[e]=n,!0):Ct(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==Ut&&Ct(t,o)||ac(e,o)||(a=r[0])&&Ct(a,o)||Ct(i,o)||Ct(Bo,o)||Ct(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ct(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function uf(t){return tt(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let su=!0;function q_(t){const e=cm(t),n=t.proxy,i=t.ctx;su=!1,e.beforeCreate&&df(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:v,activated:g,deactivated:m,beforeDestroy:p,beforeUnmount:C,destroyed:R,unmounted:w,render:U,renderTracked:L,renderTriggered:D,errorCaptured:k,serverPrefetch:E,expose:A,inheritAttrs:T,components:I,directives:O,filters:G}=e;if(c&&j_(c,i,null),o)for(const ue in o){const Y=o[ue];dt(Y)&&(i[ue]=Y.bind(n))}if(s){const ue=s.call(n,n);Nt(ue)&&(t.data=la(ue))}if(su=!0,r)for(const ue in r){const Y=r[ue],ye=dt(Y)?Y.bind(n,n):dt(Y.get)?Y.get.bind(n,n):Ai,Te=!dt(Y)&&dt(Y.set)?Y.set.bind(n):Ai,Ne=on({get:ye,set:Te});Object.defineProperty(i,ue,{enumerable:!0,configurable:!0,get:()=>Ne.value,set:$e=>Ne.value=$e})}if(a)for(const ue in a)lm(a[ue],i,n,ue);if(l){const ue=dt(l)?l.call(n):l;Reflect.ownKeys(ue).forEach(Y=>{tl(Y,ue[Y])})}u&&df(u,t,"c");function $(ue,Y){tt(Y)?Y.forEach(ye=>ue(ye.bind(n))):Y&&ue(Y.bind(n))}if($(O_,d),$(uo,f),$(N_,h),$(F_,v),$(L_,g),$(I_,m),$(z_,k),$(H_,L),$(B_,D),$(xd,C),$(yd,w),$(k_,E),tt(A))if(A.length){const ue=t.exposed||(t.exposed={});A.forEach(Y=>{Object.defineProperty(ue,Y,{get:()=>n[Y],set:ye=>n[Y]=ye})})}else t.exposed||(t.exposed={});U&&t.render===Ai&&(t.render=U),T!=null&&(t.inheritAttrs=T),I&&(t.components=I),O&&(t.directives=O),E&&rm(t)}function j_(t,e,n=Ai){tt(t)&&(t=ru(t));for(const i in t){const s=t[i];let r;Nt(s)?"default"in s?r=Ki(s.from||i,s.default,!0):r=Ki(s.from||i):r=Ki(s),an(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function df(t,e,n){Di(tt(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function lm(t,e,n,i){let s=i.includes(".")?Sm(n,i):()=>n[i];if(Qt(t)){const r=e[t];dt(r)&&Xn(s,r)}else if(dt(t))Xn(s,t.bind(n));else if(Nt(t))if(tt(t))t.forEach(r=>lm(r,e,n,i));else{const r=dt(t.handler)?t.handler.bind(n):e[t.handler];dt(r)&&Xn(s,r,t)}}function cm(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>vl(l,c,o,!0)),vl(l,e,o)),Nt(e)&&r.set(e,l),l}function vl(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&vl(t,r,n,!0),s&&s.forEach(o=>vl(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Y_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Y_={data:ff,props:hf,emits:hf,methods:Do,computed:Do,beforeCreate:yn,created:yn,beforeMount:yn,mounted:yn,beforeUpdate:yn,updated:yn,beforeDestroy:yn,beforeUnmount:yn,destroyed:yn,unmounted:yn,activated:yn,deactivated:yn,errorCaptured:yn,serverPrefetch:yn,components:Do,directives:Do,watch:Z_,provide:ff,inject:K_};function ff(t,e){return e?t?function(){return vn(dt(t)?t.call(this,this):t,dt(e)?e.call(this,this):e)}:e:t}function K_(t,e){return Do(ru(t),ru(e))}function ru(t){if(tt(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function yn(t,e){return t?[...new Set([].concat(t,e))]:e}function Do(t,e){return t?vn(Object.create(null),t,e):e}function hf(t,e){return t?tt(t)&&tt(e)?[...new Set([...t,...e])]:vn(Object.create(null),uf(t),uf(e??{})):e}function Z_(t,e){if(!t)return e;if(!e)return t;const n=vn(Object.create(null),t);for(const i in e)n[i]=yn(t[i],e[i]);return n}function um(){return{app:null,config:{isNativeTag:Vv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Q_=0;function J_(t,e){return function(i,s=null){dt(i)||(i=vn({},i)),s!=null&&!Nt(s)&&(s=null);const r=um(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Q_++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:I0,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&dt(u.install)?(o.add(u),u.install(c,...d)):dt(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||tn(i,s);return h.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),t(h,u,f),l=!0,c._container=u,u.__vue_app__=c,Vl(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Di(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=Nr;Nr=c;try{return u()}finally{Nr=d}}};return c}}let Nr=null;function tl(t,e){if(mn){let n=mn.provides;const i=mn.parent&&mn.parent.provides;i===n&&(n=mn.provides=Object.create(i)),n[t]=e}}function Ki(t,e,n=!1){const i=mn||$n;if(i||Nr){const s=Nr?Nr._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&dt(e)?e.call(i&&i.proxy):e}}const dm={},fm=()=>Object.create(dm),hm=t=>Object.getPrototypeOf(t)===dm;function e0(t,e,n,i=!1){const s={},r=fm();t.propsDefaults=Object.create(null),pm(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:jp(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function t0(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=At(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Hl(t.emitsOptions,f))continue;const h=e[f];if(l)if(Ct(r,f))h!==r[f]&&(r[f]=h,c=!0);else{const v=ni(f);s[v]=ou(l,a,v,h,t,!1)}else h!==r[f]&&(r[f]=h,c=!0)}}}else{pm(t,e,s,r)&&(c=!0);let u;for(const d in a)(!e||!Ct(e,d)&&((u=ar(d))===d||!Ct(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=ou(l,a,d,void 0,t,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!Ct(e,d))&&(delete r[d],c=!0)}c&&Xi(t.attrs,"set","")}function pm(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Oo(l))continue;const c=e[l];let u;s&&Ct(s,u=ni(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Hl(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=At(n),c=a||Ut;for(let u=0;u<r.length;u++){const d=r[u];n[d]=ou(s,l,d,c[d],t,!Ct(c,d))}}return o}function ou(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=Ct(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&dt(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=da(s);i=c[n]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ar(n))&&(i=!0))}return i}const n0=new WeakMap;function mm(t,e,n=!1){const i=n?n0:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!dt(t)){const u=d=>{l=!0;const[f,h]=mm(d,e,!0);vn(o,f),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Nt(t)&&i.set(t,Lr),Lr;if(tt(r))for(let u=0;u<r.length;u++){const d=ni(r[u]);pf(d)&&(o[d]=Ut)}else if(r)for(const u in r){const d=ni(u);if(pf(d)){const f=r[u],h=o[d]=tt(f)||dt(f)?{type:f}:vn({},f),v=h.type;let g=!1,m=!0;if(tt(v))for(let p=0;p<v.length;++p){const C=v[p],R=dt(C)&&C.name;if(R==="Boolean"){g=!0;break}else R==="String"&&(m=!1)}else g=dt(v)&&v.name==="Boolean";h[0]=g,h[1]=m,(g||Ct(h,"default"))&&a.push(d)}}const c=[o,a];return Nt(t)&&i.set(t,c),c}function pf(t){return t[0]!=="$"&&!Oo(t)}const gm=t=>t[0]==="_"||t==="$stable",wd=t=>tt(t)?t.map(Si):[Si(t)],i0=(t,e,n)=>{if(e._n)return e;const i=Po((...s)=>wd(e(...s)),n);return i._c=!1,i},vm=(t,e,n)=>{const i=t._ctx;for(const s in t){if(gm(s))continue;const r=t[s];if(dt(r))e[s]=i0(s,r,i);else if(r!=null){const o=wd(r);e[s]=()=>o}}},_m=(t,e)=>{const n=wd(e);t.slots.default=()=>n},bm=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},s0=(t,e,n)=>{const i=t.slots=fm();if(t.vnode.shapeFlag&32){const s=e._;s?(bm(i,e,n),n&&Rp(i,"_",s,!0)):vm(e,i)}else e&&_m(t,e)},r0=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Ut;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:bm(s,e,n):(r=!e.$stable,vm(e,s)),o=e}else e&&(_m(t,e),o={default:1});if(r)for(const a in s)!gm(a)&&o[a]==null&&delete s[a]},zn=b0;function o0(t){return a0(t)}function a0(t,e){const n=Nl();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=Ai,insertStaticContent:v}=t,g=(P,_,V,j=null,ee=null,q=null,ge=void 0,J=null,ce=!!_.dynamicChildren)=>{if(P===_)return;P&&!bo(P,_)&&(j=H(P),$e(P,ee,q,!0),P=null),_.patchFlag===-2&&(ce=!1,_.dynamicChildren=null);const{type:fe,ref:Pe,shapeFlag:S}=_;switch(fe){case zl:m(P,_,V,j);break;case nr:p(P,_,V,j);break;case nl:P==null&&C(_,V,j,ge);break;case Bt:I(P,_,V,j,ee,q,ge,J,ce);break;default:S&1?U(P,_,V,j,ee,q,ge,J,ce):S&6?O(P,_,V,j,ee,q,ge,J,ce):(S&64||S&128)&&fe.process(P,_,V,j,ee,q,ge,J,ce,me)}Pe!=null&&ee&&gl(Pe,P&&P.ref,q,_||P,!_)},m=(P,_,V,j)=>{if(P==null)i(_.el=a(_.children),V,j);else{const ee=_.el=P.el;_.children!==P.children&&c(ee,_.children)}},p=(P,_,V,j)=>{P==null?i(_.el=l(_.children||""),V,j):_.el=P.el},C=(P,_,V,j)=>{[P.el,P.anchor]=v(P.children,_,V,j,P.el,P.anchor)},R=({el:P,anchor:_},V,j)=>{let ee;for(;P&&P!==_;)ee=f(P),i(P,V,j),P=ee;i(_,V,j)},w=({el:P,anchor:_})=>{let V;for(;P&&P!==_;)V=f(P),s(P),P=V;s(_)},U=(P,_,V,j,ee,q,ge,J,ce)=>{_.type==="svg"?ge="svg":_.type==="math"&&(ge="mathml"),P==null?L(_,V,j,ee,q,ge,J,ce):E(P,_,ee,q,ge,J,ce)},L=(P,_,V,j,ee,q,ge,J)=>{let ce,fe;const{props:Pe,shapeFlag:S,transition:x,dirs:F}=P;if(ce=P.el=o(P.type,q,Pe&&Pe.is,Pe),S&8?u(ce,P.children):S&16&&k(P.children,ce,null,j,ee,lc(P,q),ge,J),F&&Is(P,null,j,"created"),D(ce,P,P.scopeId,ge,j),Pe){for(const le in Pe)le!=="value"&&!Oo(le)&&r(ce,le,null,Pe[le],q,j);"value"in Pe&&r(ce,"value",null,Pe.value,q),(fe=Pe.onVnodeBeforeMount)&&gi(fe,j,P)}F&&Is(P,null,j,"beforeMount");const Z=l0(ee,x);Z&&x.beforeEnter(ce),i(ce,_,V),((fe=Pe&&Pe.onVnodeMounted)||Z||F)&&zn(()=>{fe&&gi(fe,j,P),Z&&x.enter(ce),F&&Is(P,null,j,"mounted")},ee)},D=(P,_,V,j,ee)=>{if(V&&h(P,V),j)for(let q=0;q<j.length;q++)h(P,j[q]);if(ee){let q=ee.subTree;if(_===q||Em(q.type)&&(q.ssContent===_||q.ssFallback===_)){const ge=ee.vnode;D(P,ge,ge.scopeId,ge.slotScopeIds,ee.parent)}}},k=(P,_,V,j,ee,q,ge,J,ce=0)=>{for(let fe=ce;fe<P.length;fe++){const Pe=P[fe]=J?ds(P[fe]):Si(P[fe]);g(null,Pe,_,V,j,ee,q,ge,J)}},E=(P,_,V,j,ee,q,ge)=>{const J=_.el=P.el;let{patchFlag:ce,dynamicChildren:fe,dirs:Pe}=_;ce|=P.patchFlag&16;const S=P.props||Ut,x=_.props||Ut;let F;if(V&&Us(V,!1),(F=x.onVnodeBeforeUpdate)&&gi(F,V,_,P),Pe&&Is(_,P,V,"beforeUpdate"),V&&Us(V,!0),(S.innerHTML&&x.innerHTML==null||S.textContent&&x.textContent==null)&&u(J,""),fe?A(P.dynamicChildren,fe,J,V,j,lc(_,ee),q):ge||Y(P,_,J,null,V,j,lc(_,ee),q,!1),ce>0){if(ce&16)T(J,S,x,V,ee);else if(ce&2&&S.class!==x.class&&r(J,"class",null,x.class,ee),ce&4&&r(J,"style",S.style,x.style,ee),ce&8){const Z=_.dynamicProps;for(let le=0;le<Z.length;le++){const K=Z[le],Le=S[K],ve=x[K];(ve!==Le||K==="value")&&r(J,K,Le,ve,ee,V)}}ce&1&&P.children!==_.children&&u(J,_.children)}else!ge&&fe==null&&T(J,S,x,V,ee);((F=x.onVnodeUpdated)||Pe)&&zn(()=>{F&&gi(F,V,_,P),Pe&&Is(_,P,V,"updated")},j)},A=(P,_,V,j,ee,q,ge)=>{for(let J=0;J<_.length;J++){const ce=P[J],fe=_[J],Pe=ce.el&&(ce.type===Bt||!bo(ce,fe)||ce.shapeFlag&70)?d(ce.el):V;g(ce,fe,Pe,null,j,ee,q,ge,!0)}},T=(P,_,V,j,ee)=>{if(_!==V){if(_!==Ut)for(const q in _)!Oo(q)&&!(q in V)&&r(P,q,_[q],null,ee,j);for(const q in V){if(Oo(q))continue;const ge=V[q],J=_[q];ge!==J&&q!=="value"&&r(P,q,J,ge,ee,j)}"value"in V&&r(P,"value",_.value,V.value,ee)}},I=(P,_,V,j,ee,q,ge,J,ce)=>{const fe=_.el=P?P.el:a(""),Pe=_.anchor=P?P.anchor:a("");let{patchFlag:S,dynamicChildren:x,slotScopeIds:F}=_;F&&(J=J?J.concat(F):F),P==null?(i(fe,V,j),i(Pe,V,j),k(_.children||[],V,Pe,ee,q,ge,J,ce)):S>0&&S&64&&x&&P.dynamicChildren?(A(P.dynamicChildren,x,V,ee,q,ge,J),(_.key!=null||ee&&_===ee.subTree)&&xm(P,_,!0)):Y(P,_,V,Pe,ee,q,ge,J,ce)},O=(P,_,V,j,ee,q,ge,J,ce)=>{_.slotScopeIds=J,P==null?_.shapeFlag&512?ee.ctx.activate(_,V,j,ge,ce):G(_,V,j,ee,q,ge,ce):ie(P,_,ce)},G=(P,_,V,j,ee,q,ge)=>{const J=P.component=T0(P,j,ee);if(om(P)&&(J.ctx.renderer=me),A0(J,!1,ge),J.asyncDep){if(ee&&ee.registerDep(J,$,ge),!P.el){const ce=J.subTree=tn(nr);p(null,ce,_,V)}}else $(J,P,_,V,ee,q,ge)},ie=(P,_,V)=>{const j=_.component=P.component;if(v0(P,_,V))if(j.asyncDep&&!j.asyncResolved){ue(j,_,V);return}else j.next=_,j.update();else _.el=P.el,j.vnode=_},$=(P,_,V,j,ee,q,ge)=>{const J=()=>{if(P.isMounted){let{next:S,bu:x,u:F,parent:Z,vnode:le}=P;{const Ue=ym(P);if(Ue){S&&(S.el=le.el,ue(P,S,ge)),Ue.asyncDep.then(()=>{P.isUnmounted||J()});return}}let K=S,Le;Us(P,!1),S?(S.el=le.el,ue(P,S,ge)):S=le,x&&el(x),(Le=S.props&&S.props.onVnodeBeforeUpdate)&&gi(Le,Z,S,le),Us(P,!0);const ve=gf(P),Ie=P.subTree;P.subTree=ve,g(Ie,ve,d(Ie.el),H(Ie),P,ee,q),S.el=ve.el,K===null&&_0(P,ve.el),F&&zn(F,ee),(Le=S.props&&S.props.onVnodeUpdated)&&zn(()=>gi(Le,Z,S,le),ee)}else{let S;const{el:x,props:F}=_,{bm:Z,m:le,parent:K,root:Le,type:ve}=P,Ie=ko(_);Us(P,!1),Z&&el(Z),!Ie&&(S=F&&F.onVnodeBeforeMount)&&gi(S,K,_),Us(P,!0);{Le.ce&&Le.ce._injectChildStyle(ve);const Ue=P.subTree=gf(P);g(null,Ue,V,j,P,ee,q),_.el=Ue.el}if(le&&zn(le,ee),!Ie&&(S=F&&F.onVnodeMounted)){const Ue=_;zn(()=>gi(S,K,Ue),ee)}(_.shapeFlag&256||K&&ko(K.vnode)&&K.vnode.shapeFlag&256)&&P.a&&zn(P.a,ee),P.isMounted=!0,_=V=j=null}};P.scope.on();const ce=P.effect=new Up(J);P.scope.off();const fe=P.update=ce.run.bind(ce),Pe=P.job=ce.runIfDirty.bind(ce);Pe.i=P,Pe.id=P.uid,ce.scheduler=()=>_d(Pe),Us(P,!0),fe()},ue=(P,_,V)=>{_.component=P;const j=P.vnode.props;P.vnode=_,P.next=null,t0(P,_.props,j,V),r0(P,_.children,V),Rs(),lf(P),Ps()},Y=(P,_,V,j,ee,q,ge,J,ce=!1)=>{const fe=P&&P.children,Pe=P?P.shapeFlag:0,S=_.children,{patchFlag:x,shapeFlag:F}=_;if(x>0){if(x&128){Te(fe,S,V,j,ee,q,ge,J,ce);return}else if(x&256){ye(fe,S,V,j,ee,q,ge,J,ce);return}}F&8?(Pe&16&&we(fe,ee,q),S!==fe&&u(V,S)):Pe&16?F&16?Te(fe,S,V,j,ee,q,ge,J,ce):we(fe,ee,q,!0):(Pe&8&&u(V,""),F&16&&k(S,V,j,ee,q,ge,J,ce))},ye=(P,_,V,j,ee,q,ge,J,ce)=>{P=P||Lr,_=_||Lr;const fe=P.length,Pe=_.length,S=Math.min(fe,Pe);let x;for(x=0;x<S;x++){const F=_[x]=ce?ds(_[x]):Si(_[x]);g(P[x],F,V,null,ee,q,ge,J,ce)}fe>Pe?we(P,ee,q,!0,!1,S):k(_,V,j,ee,q,ge,J,ce,S)},Te=(P,_,V,j,ee,q,ge,J,ce)=>{let fe=0;const Pe=_.length;let S=P.length-1,x=Pe-1;for(;fe<=S&&fe<=x;){const F=P[fe],Z=_[fe]=ce?ds(_[fe]):Si(_[fe]);if(bo(F,Z))g(F,Z,V,null,ee,q,ge,J,ce);else break;fe++}for(;fe<=S&&fe<=x;){const F=P[S],Z=_[x]=ce?ds(_[x]):Si(_[x]);if(bo(F,Z))g(F,Z,V,null,ee,q,ge,J,ce);else break;S--,x--}if(fe>S){if(fe<=x){const F=x+1,Z=F<Pe?_[F].el:j;for(;fe<=x;)g(null,_[fe]=ce?ds(_[fe]):Si(_[fe]),V,Z,ee,q,ge,J,ce),fe++}}else if(fe>x)for(;fe<=S;)$e(P[fe],ee,q,!0),fe++;else{const F=fe,Z=fe,le=new Map;for(fe=Z;fe<=x;fe++){const He=_[fe]=ce?ds(_[fe]):Si(_[fe]);He.key!=null&&le.set(He.key,fe)}let K,Le=0;const ve=x-Z+1;let Ie=!1,Ue=0;const _e=new Array(ve);for(fe=0;fe<ve;fe++)_e[fe]=0;for(fe=F;fe<=S;fe++){const He=P[fe];if(Le>=ve){$e(He,ee,q,!0);continue}let Fe;if(He.key!=null)Fe=le.get(He.key);else for(K=Z;K<=x;K++)if(_e[K-Z]===0&&bo(He,_[K])){Fe=K;break}Fe===void 0?$e(He,ee,q,!0):(_e[Fe-Z]=fe+1,Fe>=Ue?Ue=Fe:Ie=!0,g(He,_[Fe],V,null,ee,q,ge,J,ce),Le++)}const Ce=Ie?c0(_e):Lr;for(K=Ce.length-1,fe=ve-1;fe>=0;fe--){const He=Z+fe,Fe=_[He],Ae=He+1<Pe?_[He+1].el:j;_e[fe]===0?g(null,Fe,V,Ae,ee,q,ge,J,ce):Ie&&(K<0||fe!==Ce[K]?Ne(Fe,V,Ae,2):K--)}}},Ne=(P,_,V,j,ee=null)=>{const{el:q,type:ge,transition:J,children:ce,shapeFlag:fe}=P;if(fe&6){Ne(P.component.subTree,_,V,j);return}if(fe&128){P.suspense.move(_,V,j);return}if(fe&64){ge.move(P,_,V,me);return}if(ge===Bt){i(q,_,V);for(let S=0;S<ce.length;S++)Ne(ce[S],_,V,j);i(P.anchor,_,V);return}if(ge===nl){R(P,_,V);return}if(j!==2&&fe&1&&J)if(j===0)J.beforeEnter(q),i(q,_,V),zn(()=>J.enter(q),ee);else{const{leave:S,delayLeave:x,afterLeave:F}=J,Z=()=>i(q,_,V),le=()=>{S(q,()=>{Z(),F&&F()})};x?x(q,Z,le):le()}else i(q,_,V)},$e=(P,_,V,j=!1,ee=!1)=>{const{type:q,props:ge,ref:J,children:ce,dynamicChildren:fe,shapeFlag:Pe,patchFlag:S,dirs:x,cacheIndex:F}=P;if(S===-2&&(ee=!1),J!=null&&gl(J,null,V,P,!0),F!=null&&(_.renderCache[F]=void 0),Pe&256){_.ctx.deactivate(P);return}const Z=Pe&1&&x,le=!ko(P);let K;if(le&&(K=ge&&ge.onVnodeBeforeUnmount)&&gi(K,_,P),Pe&6)oe(P.component,V,j);else{if(Pe&128){P.suspense.unmount(V,j);return}Z&&Is(P,null,_,"beforeUnmount"),Pe&64?P.type.remove(P,_,V,me,j):fe&&!fe.hasOnce&&(q!==Bt||S>0&&S&64)?we(fe,_,V,!1,!0):(q===Bt&&S&384||!ee&&Pe&16)&&we(ce,_,V),j&&it(P)}(le&&(K=ge&&ge.onVnodeUnmounted)||Z)&&zn(()=>{K&&gi(K,_,P),Z&&Is(P,null,_,"unmounted")},V)},it=P=>{const{type:_,el:V,anchor:j,transition:ee}=P;if(_===Bt){je(V,j);return}if(_===nl){w(P);return}const q=()=>{s(V),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave()};if(P.shapeFlag&1&&ee&&!ee.persisted){const{leave:ge,delayLeave:J}=ee,ce=()=>ge(V,q);J?J(P.el,q,ce):ce()}else q()},je=(P,_)=>{let V;for(;P!==_;)V=f(P),s(P),P=V;s(_)},oe=(P,_,V)=>{const{bum:j,scope:ee,job:q,subTree:ge,um:J,m:ce,a:fe}=P;mf(ce),mf(fe),j&&el(j),ee.stop(),q&&(q.flags|=8,$e(ge,P,_,V)),J&&zn(J,_),zn(()=>{P.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&P.asyncDep&&!P.asyncResolved&&P.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},we=(P,_,V,j=!1,ee=!1,q=0)=>{for(let ge=q;ge<P.length;ge++)$e(P[ge],_,V,j,ee)},H=P=>{if(P.shapeFlag&6)return H(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const _=f(P.anchor||P.el),V=_&&_[P_];return V?f(V):_};let ae=!1;const re=(P,_,V)=>{P==null?_._vnode&&$e(_._vnode,null,null,!0):g(_._vnode||null,P,_,null,null,null,V),_._vnode=P,ae||(ae=!0,lf(),tm(),ae=!1)},me={p:g,um:$e,m:Ne,r:it,mt:G,mc:k,pc:Y,pbc:A,n:H,o:t};return{render:re,hydrate:void 0,createApp:J_(re)}}function lc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Us({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function l0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function xm(t,e,n=!1){const i=t.children,s=e.children;if(tt(i)&&tt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ds(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&xm(o,a)),a.type===zl&&(a.el=o.el)}}function c0(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function ym(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ym(e)}function mf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const u0=Symbol.for("v-scx"),d0=()=>Ki(u0);function Xn(t,e,n){return wm(t,e,n)}function wm(t,e,n=Ut){const{immediate:i,deep:s,flush:r,once:o}=n,a=vn({},n),l=e&&i||!e&&r!=="post";let c;if(qo){if(r==="sync"){const h=d0();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Ai,h.resume=Ai,h.pause=Ai,h}}const u=mn;a.call=(h,v,g)=>Di(h,u,v,g);let d=!1;r==="post"?a.scheduler=h=>{zn(h,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(h,v)=>{v?h():_d(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=T_(t,e,a);return qo&&(c?c.push(f):l&&f()),f}function f0(t,e,n){const i=this.proxy,s=Qt(t)?t.includes(".")?Sm(i,t):()=>i[t]:t.bind(i,i);let r;dt(e)?r=e:(r=e.handler,n=e);const o=da(this),a=wm(s,r.bind(i),n);return o(),a}function Sm(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const h0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${ni(e)}Modifiers`]||t[`${ar(e)}Modifiers`];function p0(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Ut;let s=n;const r=e.startsWith("update:"),o=r&&h0(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>Qt(u)?u.trim():u)),o.number&&(s=n.map(fl)));let a,l=i[a=nc(e)]||i[a=nc(ni(e))];!l&&r&&(l=i[a=nc(ar(e))]),l&&Di(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Di(c,t,6,s)}}function Mm(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!dt(t)){const l=c=>{const u=Mm(c,e,!0);u&&(a=!0,vn(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Nt(t)&&i.set(t,null),null):(tt(r)?r.forEach(l=>o[l]=null):vn(o,r),Nt(t)&&i.set(t,o),o)}function Hl(t,e){return!t||!Il(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ct(t,e[0].toLowerCase()+e.slice(1))||Ct(t,ar(e))||Ct(t,e))}function gf(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:v,inheritAttrs:g}=t,m=ml(t);let p,C;try{if(n.shapeFlag&4){const w=s||i,U=w;p=Si(c.call(U,w,u,d,h,f,v)),C=a}else{const w=e;p=Si(w.length>1?w(d,{attrs:a,slots:o,emit:l}):w(d,null)),C=e.props?a:m0(a)}}catch(w){Ho.length=0,kl(w,t,1),p=tn(nr)}let R=p;if(C&&g!==!1){const w=Object.keys(C),{shapeFlag:U}=R;w.length&&U&7&&(r&&w.some(ad)&&(C=g0(C,r)),R=Qr(R,C,!1,!0))}return n.dirs&&(R=Qr(R,null,!1,!0),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&bd(R,n.transition),p=R,ml(m),p}const m0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Il(n))&&((e||(e={}))[n]=t[n]);return e},g0=(t,e)=>{const n={};for(const i in t)(!ad(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function v0(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?vf(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==i[f]&&!Hl(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?vf(i,o,c):!0:!!o;return!1}function vf(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Hl(n,r))return!0}return!1}function _0({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Em=t=>t.__isSuspense;function b0(t,e){e&&e.pendingBranch?tt(t)?e.effects.push(...t):e.effects.push(t):R_(t)}const Bt=Symbol.for("v-fgt"),zl=Symbol.for("v-txt"),nr=Symbol.for("v-cmt"),nl=Symbol.for("v-stc"),Ho=[];let qn=null;function Ve(t=!1){Ho.push(qn=t?null:[])}function x0(){Ho.pop(),qn=Ho[Ho.length-1]||null}let Xo=1;function _f(t,e=!1){Xo+=t,t<0&&qn&&e&&(qn.hasOnce=!0)}function Tm(t){return t.dynamicChildren=Xo>0?qn||Lr:null,x0(),Xo>0&&qn&&qn.push(t),t}function We(t,e,n,i,s,r){return Tm(b(t,e,n,i,s,r,!0))}function Lo(t,e,n,i,s){return Tm(tn(t,e,n,i,s,!0))}function _l(t){return t?t.__v_isVNode===!0:!1}function bo(t,e){return t.type===e.type&&t.key===e.key}const Am=({key:t})=>t??null,il=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Qt(t)||an(t)||dt(t)?{i:$n,r:t,k:e,f:!!n}:t:null);function b(t,e=null,n=null,i=0,s=null,r=t===Bt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Am(e),ref:e&&il(e),scopeId:im,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:$n};return a?(Sd(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Qt(n)?8:16),Xo>0&&!o&&qn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&qn.push(l),l}const tn=y0;function y0(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===W_)&&(t=nr),_l(t)){const a=Qr(t,e,!0);return n&&Sd(a,n),Xo>0&&!r&&qn&&(a.shapeFlag&6?qn[qn.indexOf(t)]=a:qn.push(a)),a.patchFlag=-2,a}if(L0(t)&&(t=t.__vccOpts),e){e=w0(e);let{class:a,style:l}=e;a&&!Qt(a)&&(e.class=et(a)),Nt(l)&&(vd(l)&&!tt(l)&&(l=vn({},l)),e.style=Wn(l))}const o=Qt(t)?1:Em(t)?128:D_(t)?64:Nt(t)?4:dt(t)?2:0;return b(t,e,n,i,s,o,r,!0)}function w0(t){return t?vd(t)||hm(t)?vn({},t):t:null}function Qr(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?S0(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Am(c),ref:e&&e.ref?n&&r?tt(r)?r.concat(il(e)):[r,il(e)]:il(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Bt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Qr(t.ssContent),ssFallback:t.ssFallback&&Qr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&bd(u,l.clone(u)),u}function Io(t=" ",e=0){return tn(zl,null,t,e)}function Cm(t,e){const n=tn(nl,null,t);return n.staticCount=e,n}function Pt(t="",e=!1){return e?(Ve(),Lo(nr,null,t)):tn(nr,null,t)}function Si(t){return t==null||typeof t=="boolean"?tn(nr):tt(t)?tn(Bt,null,t.slice()):_l(t)?ds(t):tn(zl,null,String(t))}function ds(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Qr(t)}function Sd(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(tt(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Sd(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!hm(e)?e._ctx=$n:s===3&&$n&&($n.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else dt(e)?(e={default:e,_ctx:$n},n=32):(e=String(e),i&64?(n=16,e=[Io(e)]):n=8);t.children=e,t.shapeFlag|=n}function S0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=et([e.class,i.class]));else if(s==="style")e.style=Wn([e.style,i.style]);else if(Il(s)){const r=e[s],o=i[s];o&&r!==o&&!(tt(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function gi(t,e,n,i=null){Di(t,e,7,[n,i])}const M0=um();let E0=0;function T0(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||M0,r={uid:E0++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ip(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mm(i,s),emitsOptions:Mm(i,s),emit:null,emitted:null,propsDefaults:Ut,inheritAttrs:i.inheritAttrs,ctx:Ut,data:Ut,props:Ut,attrs:Ut,slots:Ut,refs:Ut,setupState:Ut,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=p0.bind(null,r),t.ce&&t.ce(r),r}let mn=null,bl,au;{const t=Nl(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};bl=e("__VUE_INSTANCE_SETTERS__",n=>mn=n),au=e("__VUE_SSR_SETTERS__",n=>qo=n)}const da=t=>{const e=mn;return bl(t),t.scope.on(),()=>{t.scope.off(),bl(e)}},bf=()=>{mn&&mn.scope.off(),bl(null)};function Rm(t){return t.vnode.shapeFlag&4}let qo=!1;function A0(t,e=!1,n=!1){e&&au(e);const{props:i,children:s}=t.vnode,r=Rm(t);e0(t,i,r,e),s0(t,s,n);const o=r?C0(t,e):void 0;return e&&au(!1),o}function C0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,X_);const{setup:i}=n;if(i){Rs();const s=t.setupContext=i.length>1?P0(t):null,r=da(t),o=ca(i,t,0,[t.props,s]),a=Tp(o);if(Ps(),r(),(a||t.sp)&&!ko(t)&&rm(t),a){if(o.then(bf,bf),e)return o.then(l=>{xf(t,l)}).catch(l=>{kl(l,t,0)});t.asyncDep=o}else xf(t,o)}else Pm(t)}function xf(t,e,n){dt(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Nt(e)&&(t.setupState=Qp(e)),Pm(t)}function Pm(t,e,n){const i=t.type;t.render||(t.render=i.render||Ai);{const s=da(t);Rs();try{q_(t)}finally{Ps(),s()}}}const R0={get(t,e){return hn(t,"get",""),t[e]}};function P0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,R0),slots:t.slots,emit:t.emit,expose:e}}function Vl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Qp(Kp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Bo)return Bo[n](t)},has(e,n){return n in e||n in Bo}})):t.proxy}function D0(t,e=!0){return dt(t)?t.displayName||t.name:t.name||e&&t.__name}function L0(t){return dt(t)&&"__vccOpts"in t}const on=(t,e)=>M_(t,e,qo);function Dm(t,e,n){const i=arguments.length;return i===2?Nt(e)&&!tt(e)?_l(e)?tn(t,null,[e]):tn(t,e):tn(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&_l(n)&&(n=[n]),tn(t,e,n))}const I0="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let lu;const yf=typeof window<"u"&&window.trustedTypes;if(yf)try{lu=yf.createPolicy("vue",{createHTML:t=>t})}catch{}const Lm=lu?t=>lu.createHTML(t):t=>t,U0="http://www.w3.org/2000/svg",O0="http://www.w3.org/1998/Math/MathML",Wi=typeof document<"u"?document:null,wf=Wi&&Wi.createElement("template"),N0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Wi.createElementNS(U0,t):e==="mathml"?Wi.createElementNS(O0,t):n?Wi.createElement(t,{is:n}):Wi.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Wi.createTextNode(t),createComment:t=>Wi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Wi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{wf.innerHTML=Lm(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=wf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},F0=Symbol("_vtc");function k0(t,e,n){const i=t[F0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const xl=Symbol("_vod"),Im=Symbol("_vsh"),HL={beforeMount(t,{value:e},{transition:n}){t[xl]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):xo(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),xo(t,!0),i.enter(t)):i.leave(t,()=>{xo(t,!1)}):xo(t,e))},beforeUnmount(t,{value:e}){xo(t,e)}};function xo(t,e){t.style.display=e?t[xl]:"none",t[Im]=!e}const B0=Symbol(""),H0=/(^|;)\s*display\s*:/;function z0(t,e,n){const i=t.style,s=Qt(n);let r=!1;if(n&&!s){if(e)if(Qt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&sl(i,a,"")}else for(const o in e)n[o]==null&&sl(i,o,"");for(const o in n)o==="display"&&(r=!0),sl(i,o,n[o])}else if(s){if(e!==n){const o=i[B0];o&&(n+=";"+o),i.cssText=n,r=H0.test(n)}}else e&&t.removeAttribute("style");xl in t&&(t[xl]=r?i.display:"",t[Im]&&(i.display="none"))}const Sf=/\s*!important$/;function sl(t,e,n){if(tt(n))n.forEach(i=>sl(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=V0(t,e);Sf.test(n)?t.setProperty(ar(i),n.replace(Sf,""),"important"):t[i]=n}}const Mf=["Webkit","Moz","ms"],cc={};function V0(t,e){const n=cc[e];if(n)return n;let i=ni(e);if(i!=="filter"&&i in t)return cc[e]=i;i=Ol(i);for(let s=0;s<Mf.length;s++){const r=Mf[s]+i;if(r in t)return cc[e]=r}return e}const Ef="http://www.w3.org/1999/xlink";function Tf(t,e,n,i,s,r=Qv(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ef,e.slice(6,e.length)):t.setAttributeNS(Ef,e,n):n==null||r&&!Pp(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Pi(n)?String(n):n)}function Af(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Lm(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Pp(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function ps(t,e,n,i){t.addEventListener(e,n,i)}function G0(t,e,n,i){t.removeEventListener(e,n,i)}const Cf=Symbol("_vei");function W0(t,e,n,i,s=null){const r=t[Cf]||(t[Cf]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=$0(e);if(i){const c=r[e]=j0(i,s);ps(t,a,c,l)}else o&&(G0(t,a,o,l),r[e]=void 0)}}const Rf=/(?:Once|Passive|Capture)$/;function $0(t){let e;if(Rf.test(t)){e={};let i;for(;i=t.match(Rf);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ar(t.slice(2)),e]}let uc=0;const X0=Promise.resolve(),q0=()=>uc||(X0.then(()=>uc=0),uc=Date.now());function j0(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Di(Y0(i,n.value),e,5,[i])};return n.value=t,n.attached=q0(),n}function Y0(t,e){if(tt(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Pf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,K0=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?k0(t,i,o):e==="style"?z0(t,n,i):Il(e)?ad(e)||W0(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Z0(t,e,i,o))?(Af(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Tf(t,e,i,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Qt(i))?Af(t,ni(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Tf(t,e,i,o))};function Z0(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Pf(e)&&dt(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Pf(e)&&Qt(n)?!1:e in t}const Jr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return tt(e)?n=>el(e,n):e};function Q0(t){t.target.composing=!0}function Df(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Zi=Symbol("_assign"),en={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[Zi]=Jr(s);const r=i||s.props&&s.props.type==="number";ps(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=fl(a)),t[Zi](a)}),n&&ps(t,"change",()=>{t.value=t.value.trim()}),e||(ps(t,"compositionstart",Q0),ps(t,"compositionend",Df),ps(t,"change",Df))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[Zi]=Jr(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?fl(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===l)||(t.value=l))}},zL={deep:!0,created(t,e,n){t[Zi]=Jr(n),ps(t,"change",()=>{const i=t._modelValue,s=jo(t),r=t.checked,o=t[Zi];if(tt(i)){const a=ud(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(co(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Um(t,r))})},mounted:Lf,beforeUpdate(t,e,n){t[Zi]=Jr(n),Lf(t,e,n)}};function Lf(t,{value:e,oldValue:n},i){t._modelValue=e;let s;if(tt(e))s=ud(e,i.props.value)>-1;else if(co(e))s=e.has(i.props.value);else{if(e===n)return;s=aa(e,Um(t,!0))}t.checked!==s&&(t.checked=s)}const J0={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=co(e);ps(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?fl(jo(o)):jo(o));t[Zi](t.multiple?s?new Set(r):r:r[0]),t._assigning=!0,ua(()=>{t._assigning=!1})}),t[Zi]=Jr(i)},mounted(t,{value:e}){If(t,e)},beforeUpdate(t,e,n){t[Zi]=Jr(n)},updated(t,{value:e}){t._assigning||If(t,e)}};function If(t,e){const n=t.multiple,i=tt(e);if(!(n&&!i&&!co(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],a=jo(o);if(n)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=ud(e,a)>-1}else o.selected=e.has(a);else if(aa(jo(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function jo(t){return"_value"in t?t._value:t.value}function Um(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const eb=["ctrl","shift","alt","meta"],tb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>eb.some(n=>t[`${n}Key`]&&!e.includes(n))},yo=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=tb[e[o]];if(a&&a(s,e))return}return t(s,...r)})},nb=vn({patchProp:K0},N0);let Uf;function ib(){return Uf||(Uf=o0(nb))}const sb=(...t)=>{const e=ib().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=ob(i);if(!s)return;const r=e._component;!dt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,rb(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function rb(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ob(t){return Qt(t)?document.querySelector(t):t}/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const ab=Symbol();var Of;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Of||(Of={}));function lb(){const t=e_(!0),e=t.run(()=>at({}));let n=[],i=[];const s=Kp({install(r){s._a=r,r.provide(ab,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return this._a?n.push(r):i.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Rr=typeof document<"u";function Om(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function cb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Om(t.default)}const Tt=Object.assign;function dc(t,e){const n={};for(const i in e){const s=e[i];n[i]=mi(s)?s.map(t):t(s)}return n}const zo=()=>{},mi=Array.isArray,Nm=/#/g,ub=/&/g,db=/\//g,fb=/=/g,hb=/\?/g,Fm=/\+/g,pb=/%5B/g,mb=/%5D/g,km=/%5E/g,gb=/%60/g,Bm=/%7B/g,vb=/%7C/g,Hm=/%7D/g,_b=/%20/g;function Md(t){return encodeURI(""+t).replace(vb,"|").replace(pb,"[").replace(mb,"]")}function bb(t){return Md(t).replace(Bm,"{").replace(Hm,"}").replace(km,"^")}function cu(t){return Md(t).replace(Fm,"%2B").replace(_b,"+").replace(Nm,"%23").replace(ub,"%26").replace(gb,"`").replace(Bm,"{").replace(Hm,"}").replace(km,"^")}function xb(t){return cu(t).replace(fb,"%3D")}function yb(t){return Md(t).replace(Nm,"%23").replace(hb,"%3F")}function wb(t){return t==null?"":yb(t).replace(db,"%2F")}function Yo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Sb=/\/$/,Mb=t=>t.replace(Sb,"");function fc(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Cb(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:Yo(o)}}function Eb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Nf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Tb(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&eo(e.matched[i],n.matched[s])&&zm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function eo(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function zm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Ab(t[n],e[n]))return!1;return!0}function Ab(t,e){return mi(t)?Ff(t,e):mi(e)?Ff(e,t):t===e}function Ff(t,e){return mi(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function Cb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const ns={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ko;(function(t){t.pop="pop",t.push="push"})(Ko||(Ko={}));var Vo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Vo||(Vo={}));function Rb(t){if(!t)if(Rr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Mb(t)}const Pb=/^[^#]+#/;function Db(t,e){return t.replace(Pb,"#")+e}function Lb(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Gl=()=>({left:window.scrollX,top:window.scrollY});function Ib(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Lb(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function kf(t,e){return(history.state?history.state.position-e:-1)+t}const uu=new Map;function Ub(t,e){uu.set(t,e)}function Ob(t){const e=uu.get(t);return uu.delete(t),e}let Nb=()=>location.protocol+"//"+location.host;function Vm(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Nf(l,"")}return Nf(n,t)+i+s}function Fb(t,e,n,i){let s=[],r=[],o=null;const a=({state:f})=>{const h=Vm(t,location),v=n.value,g=e.value;let m=0;if(f){if(n.value=h,e.value=f,o&&o===v){o=null;return}m=g?f.position-g.position:0}else i(h);s.forEach(p=>{p(n.value,v,{delta:m,type:Ko.pop,direction:m?m>0?Vo.forward:Vo.back:Vo.unknown})})};function l(){o=n.value}function c(f){s.push(f);const h=()=>{const v=s.indexOf(f);v>-1&&s.splice(v,1)};return r.push(h),h}function u(){const{history:f}=window;f.state&&f.replaceState(Tt({},f.state,{scroll:Gl()}),"")}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function Bf(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Gl():null}}function kb(t){const{history:e,location:n}=window,i={value:Vm(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:Nb()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(h){console.error(h),n[u?"replace":"assign"](f)}}function o(l,c){const u=Tt({},e.state,Bf(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=Tt({},s.value,e.state,{forward:l,scroll:Gl()});r(u.current,u,!0);const d=Tt({},Bf(i.value,l,null),{position:u.position+1},c);r(l,d,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Bb(t){t=Rb(t);const e=kb(t),n=Fb(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=Tt({location:"",base:t,go:i,createHref:Db.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Hb(t){return typeof t=="string"||t&&typeof t=="object"}function Gm(t){return typeof t=="string"||typeof t=="symbol"}const Wm=Symbol("");var Hf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Hf||(Hf={}));function to(t,e){return Tt(new Error,{type:t,[Wm]:!0},e)}function Ni(t,e){return t instanceof Error&&Wm in t&&(e==null||!!(t.type&e))}const zf="[^/]+?",zb={sensitive:!1,strict:!1,start:!0,end:!0},Vb=/[.+*?^${}()[\]/\\]/g;function Gb(t,e){const n=Tt({},zb,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let d=0;d<c.length;d++){const f=c[d];let h=40+(n.sensitive?.25:0);if(f.type===0)d||(s+="/"),s+=f.value.replace(Vb,"\\$&"),h+=40;else if(f.type===1){const{value:v,repeatable:g,optional:m,regexp:p}=f;r.push({name:v,repeatable:g,optional:m});const C=p||zf;if(C!==zf){h+=10;try{new RegExp(`(${C})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${v}" (${C}): `+w.message)}}let R=g?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;d||(R=m&&c.length<2?`(?:/${R})`:"/"+R),m&&(R+="?"),s+=R,h+=20,m&&(h+=-8),g&&(h+=-20),C===".*"&&(h+=-50)}u.push(h)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",v=r[f-1];d[v.name]=h&&v.repeatable?h.split("/"):h}return d}function l(c){let u="",d=!1;for(const f of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===0)u+=h.value;else if(h.type===1){const{value:v,repeatable:g,optional:m}=h,p=v in c?c[v]:"";if(mi(p)&&!g)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const C=mi(p)?p.join("/"):p;if(!C)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${v}"`);u+=C}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function Wb(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function $m(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=Wb(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(Vf(i))return 1;if(Vf(s))return-1}return s.length-i.length}function Vf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const $b={type:0,value:""},Xb=/[a-zA-Z0-9_]/;function qb(t){if(!t)return[[]];if(t==="/")return[[$b]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):f();break;case 4:f(),n=i;break;case 1:l==="("?n=2:Xb.test(l)?f():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),s}function jb(t,e,n){const i=Gb(qb(t.path),n),s=Tt(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Yb(t,e){const n=[],i=new Map;e=Xf({strict:!1,end:!0,sensitive:!1},e);function s(d){return i.get(d)}function r(d,f,h){const v=!h,g=Wf(d);g.aliasOf=h&&h.record;const m=Xf(e,d),p=[g];if("alias"in d){const w=typeof d.alias=="string"?[d.alias]:d.alias;for(const U of w)p.push(Wf(Tt({},g,{components:h?h.record.components:g.components,path:U,aliasOf:h?h.record:g})))}let C,R;for(const w of p){const{path:U}=w;if(f&&U[0]!=="/"){const L=f.record.path,D=L[L.length-1]==="/"?"":"/";w.path=f.record.path+(U&&D+U)}if(C=jb(w,f,m),h?h.alias.push(C):(R=R||C,R!==C&&R.alias.push(C),v&&d.name&&!$f(C)&&o(d.name)),Xm(C)&&l(C),g.children){const L=g.children;for(let D=0;D<L.length;D++)r(L[D],C,h&&h.children[D])}h=h||C}return R?()=>{o(R)}:zo}function o(d){if(Gm(d)){const f=i.get(d);f&&(i.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const f=Qb(d,n);n.splice(f,0,d),d.record.name&&!$f(d)&&i.set(d.record.name,d)}function c(d,f){let h,v={},g,m;if("name"in d&&d.name){if(h=i.get(d.name),!h)throw to(1,{location:d});m=h.record.name,v=Tt(Gf(f.params,h.keys.filter(R=>!R.optional).concat(h.parent?h.parent.keys.filter(R=>R.optional):[]).map(R=>R.name)),d.params&&Gf(d.params,h.keys.map(R=>R.name))),g=h.stringify(v)}else if(d.path!=null)g=d.path,h=n.find(R=>R.re.test(g)),h&&(v=h.parse(g),m=h.record.name);else{if(h=f.name?i.get(f.name):n.find(R=>R.re.test(f.path)),!h)throw to(1,{location:d,currentLocation:f});m=h.record.name,v=Tt({},f.params,d.params),g=h.stringify(v)}const p=[];let C=h;for(;C;)p.unshift(C.record),C=C.parent;return{name:m,path:g,params:v,matched:p,meta:Zb(p)}}t.forEach(d=>r(d));function u(){n.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Gf(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Wf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Kb(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Kb(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function $f(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Zb(t){return t.reduce((e,n)=>Tt(e,n.meta),{})}function Xf(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function Qb(t,e){let n=0,i=e.length;for(;n!==i;){const r=n+i>>1;$m(t,e[r])<0?i=r:n=r+1}const s=Jb(t);return s&&(i=e.lastIndexOf(s,i-1)),i}function Jb(t){let e=t;for(;e=e.parent;)if(Xm(e)&&$m(t,e)===0)return e}function Xm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function ex(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Fm," "),o=r.indexOf("="),a=Yo(o<0?r:r.slice(0,o)),l=o<0?null:Yo(r.slice(o+1));if(a in e){let c=e[a];mi(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function qf(t){let e="";for(let n in t){const i=t[n];if(n=xb(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(mi(i)?i.map(r=>r&&cu(r)):[i&&cu(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function tx(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=mi(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const nx=Symbol(""),jf=Symbol(""),Ed=Symbol(""),qm=Symbol(""),du=Symbol("");function wo(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function fs(t,e,n,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(to(4,{from:n,to:e})):f instanceof Error?l(f):Hb(f)?l(to(2,{from:e,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=r(()=>t.call(i&&i.instances[s],e,n,c));let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(f=>l(f))})}function hc(t,e,n,i,s=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Om(l)){const u=(l.__vccOpts||l)[e];u&&r.push(fs(u,n,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=cb(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const h=(d.__vccOpts||d)[e];return h&&fs(h,n,i,o,a,s)()}))}}return r}function Yf(t){const e=Ki(Ed),n=Ki(qm),i=on(()=>{const l=Ms(t.to);return e.resolve(l)}),s=on(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(eo.bind(null,u));if(f>-1)return f;const h=Kf(l[c-2]);return c>1&&Kf(u)===h&&d[d.length-1].path!==h?d.findIndex(eo.bind(null,l[c-2])):f}),r=on(()=>s.value>-1&&ax(n.params,i.value.params)),o=on(()=>s.value>-1&&s.value===n.matched.length-1&&zm(n.params,i.value.params));function a(l={}){if(ox(l)){const c=e[Ms(t.replace)?"replace":"push"](Ms(t.to)).catch(zo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:on(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function ix(t){return t.length===1?t[0]:t}const sx=sm({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Yf,setup(t,{slots:e}){const n=la(Yf(t)),{options:i}=Ki(Ed),s=on(()=>({[Zf(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Zf(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&ix(e.default(n));return t.custom?r:Dm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),rx=sx;function ox(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ax(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!mi(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Kf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Zf=(t,e,n)=>t??e??n,lx=sm({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Ki(du),s=on(()=>t.route||i.value),r=Ki(jf,0),o=on(()=>{let c=Ms(r);const{matched:u}=s.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=on(()=>s.value.matched[o.value]);tl(jf,on(()=>o.value+1)),tl(nx,a),tl(du,s);const l=at();return Xn(()=>[l.value,a.value,t.name],([c,u,d],[f,h,v])=>{u&&(u.instances[d]=c,h&&h!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!eo(u,h)||!f)&&(u.enterCallbacks[d]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,d=a.value,f=d&&d.components[u];if(!f)return Qf(n.default,{Component:f,route:c});const h=d.props[u],v=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=Dm(f,Tt({},v,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Qf(n.default,{Component:m,route:c})||m}}});function Qf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const jm=lx;function cx(t){const e=Yb(t.routes,t),n=t.parseQuery||ex,i=t.stringifyQuery||qf,s=t.history,r=wo(),o=wo(),a=wo(),l=x_(ns);let c=ns;Rr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=dc.bind(null,H=>""+H),d=dc.bind(null,wb),f=dc.bind(null,Yo);function h(H,ae){let re,me;return Gm(H)?(re=e.getRecordMatcher(H),me=ae):me=H,e.addRoute(me,re)}function v(H){const ae=e.getRecordMatcher(H);ae&&e.removeRoute(ae)}function g(){return e.getRoutes().map(H=>H.record)}function m(H){return!!e.getRecordMatcher(H)}function p(H,ae){if(ae=Tt({},ae||l.value),typeof H=="string"){const V=fc(n,H,ae.path),j=e.resolve({path:V.path},ae),ee=s.createHref(V.fullPath);return Tt(V,j,{params:f(j.params),hash:Yo(V.hash),redirectedFrom:void 0,href:ee})}let re;if(H.path!=null)re=Tt({},H,{path:fc(n,H.path,ae.path).path});else{const V=Tt({},H.params);for(const j in V)V[j]==null&&delete V[j];re=Tt({},H,{params:d(V)}),ae.params=d(ae.params)}const me=e.resolve(re,ae),Ke=H.hash||"";me.params=u(f(me.params));const P=Eb(i,Tt({},H,{hash:bb(Ke),path:me.path})),_=s.createHref(P);return Tt({fullPath:P,hash:Ke,query:i===qf?tx(H.query):H.query||{}},me,{redirectedFrom:void 0,href:_})}function C(H){return typeof H=="string"?fc(n,H,l.value.path):Tt({},H)}function R(H,ae){if(c!==H)return to(8,{from:ae,to:H})}function w(H){return D(H)}function U(H){return w(Tt(C(H),{replace:!0}))}function L(H){const ae=H.matched[H.matched.length-1];if(ae&&ae.redirect){const{redirect:re}=ae;let me=typeof re=="function"?re(H):re;return typeof me=="string"&&(me=me.includes("?")||me.includes("#")?me=C(me):{path:me},me.params={}),Tt({query:H.query,hash:H.hash,params:me.path!=null?{}:H.params},me)}}function D(H,ae){const re=c=p(H),me=l.value,Ke=H.state,P=H.force,_=H.replace===!0,V=L(re);if(V)return D(Tt(C(V),{state:typeof V=="object"?Tt({},Ke,V.state):Ke,force:P,replace:_}),ae||re);const j=re;j.redirectedFrom=ae;let ee;return!P&&Tb(i,me,re)&&(ee=to(16,{to:j,from:me}),Ne(me,me,!0,!1)),(ee?Promise.resolve(ee):A(j,me)).catch(q=>Ni(q)?Ni(q,2)?q:Te(q):Y(q,j,me)).then(q=>{if(q){if(Ni(q,2))return D(Tt({replace:_},C(q.to),{state:typeof q.to=="object"?Tt({},Ke,q.to.state):Ke,force:P}),ae||j)}else q=I(j,me,!0,_,Ke);return T(j,me,q),q})}function k(H,ae){const re=R(H,ae);return re?Promise.reject(re):Promise.resolve()}function E(H){const ae=je.values().next().value;return ae&&typeof ae.runWithContext=="function"?ae.runWithContext(H):H()}function A(H,ae){let re;const[me,Ke,P]=ux(H,ae);re=hc(me.reverse(),"beforeRouteLeave",H,ae);for(const V of me)V.leaveGuards.forEach(j=>{re.push(fs(j,H,ae))});const _=k.bind(null,H,ae);return re.push(_),we(re).then(()=>{re=[];for(const V of r.list())re.push(fs(V,H,ae));return re.push(_),we(re)}).then(()=>{re=hc(Ke,"beforeRouteUpdate",H,ae);for(const V of Ke)V.updateGuards.forEach(j=>{re.push(fs(j,H,ae))});return re.push(_),we(re)}).then(()=>{re=[];for(const V of P)if(V.beforeEnter)if(mi(V.beforeEnter))for(const j of V.beforeEnter)re.push(fs(j,H,ae));else re.push(fs(V.beforeEnter,H,ae));return re.push(_),we(re)}).then(()=>(H.matched.forEach(V=>V.enterCallbacks={}),re=hc(P,"beforeRouteEnter",H,ae,E),re.push(_),we(re))).then(()=>{re=[];for(const V of o.list())re.push(fs(V,H,ae));return re.push(_),we(re)}).catch(V=>Ni(V,8)?V:Promise.reject(V))}function T(H,ae,re){a.list().forEach(me=>E(()=>me(H,ae,re)))}function I(H,ae,re,me,Ke){const P=R(H,ae);if(P)return P;const _=ae===ns,V=Rr?history.state:{};re&&(me||_?s.replace(H.fullPath,Tt({scroll:_&&V&&V.scroll},Ke)):s.push(H.fullPath,Ke)),l.value=H,Ne(H,ae,re,_),Te()}let O;function G(){O||(O=s.listen((H,ae,re)=>{if(!oe.listening)return;const me=p(H),Ke=L(me);if(Ke){D(Tt(Ke,{replace:!0,force:!0}),me).catch(zo);return}c=me;const P=l.value;Rr&&Ub(kf(P.fullPath,re.delta),Gl()),A(me,P).catch(_=>Ni(_,12)?_:Ni(_,2)?(D(Tt(C(_.to),{force:!0}),me).then(V=>{Ni(V,20)&&!re.delta&&re.type===Ko.pop&&s.go(-1,!1)}).catch(zo),Promise.reject()):(re.delta&&s.go(-re.delta,!1),Y(_,me,P))).then(_=>{_=_||I(me,P,!1),_&&(re.delta&&!Ni(_,8)?s.go(-re.delta,!1):re.type===Ko.pop&&Ni(_,20)&&s.go(-1,!1)),T(me,P,_)}).catch(zo)}))}let ie=wo(),$=wo(),ue;function Y(H,ae,re){Te(H);const me=$.list();return me.length?me.forEach(Ke=>Ke(H,ae,re)):console.error(H),Promise.reject(H)}function ye(){return ue&&l.value!==ns?Promise.resolve():new Promise((H,ae)=>{ie.add([H,ae])})}function Te(H){return ue||(ue=!H,G(),ie.list().forEach(([ae,re])=>H?re(H):ae()),ie.reset()),H}function Ne(H,ae,re,me){const{scrollBehavior:Ke}=t;if(!Rr||!Ke)return Promise.resolve();const P=!re&&Ob(kf(H.fullPath,0))||(me||!re)&&history.state&&history.state.scroll||null;return ua().then(()=>Ke(H,ae,P)).then(_=>_&&Ib(_)).catch(_=>Y(_,H,ae))}const $e=H=>s.go(H);let it;const je=new Set,oe={currentRoute:l,listening:!0,addRoute:h,removeRoute:v,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:g,resolve:p,options:t,push:w,replace:U,go:$e,back:()=>$e(-1),forward:()=>$e(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:$.add,isReady:ye,install(H){const ae=this;H.component("RouterLink",rx),H.component("RouterView",jm),H.config.globalProperties.$router=ae,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>Ms(l)}),Rr&&!it&&l.value===ns&&(it=!0,w(s.location).catch(Ke=>{}));const re={};for(const Ke in ns)Object.defineProperty(re,Ke,{get:()=>l.value[Ke],enumerable:!0});H.provide(Ed,ae),H.provide(qm,jp(re)),H.provide(du,l);const me=H.unmount;je.add(H),H.unmount=function(){je.delete(H),je.size<1&&(c=ns,O&&O(),O=null,l.value=ns,it=!1,ue=!1),me()}}};function we(H){return H.reduce((ae,re)=>ae.then(()=>E(re)),Promise.resolve())}return oe}function ux(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>eo(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>eo(c,l))||s.push(l))}return[n,i,s]}const fa=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},dx={id:"app"},fx={class:"app-header"},hx={class:"header-content"},px={class:"header-actions max-md:text-[11px]"},mx={class:"main-content"},gx={__name:"App",setup(t){const e=at(!1),n=at(!1);function i(){n.value=!n.value}return uo(()=>{localStorage.getItem("darkMode")==="true"&&(e.value=!0,document.body.classList.add("dark-mode"))}),(s,r)=>{const o=G_("RouterLink");return Ve(),We("div",dx,[b("header",fx,[b("div",hx,[r[5]||(r[5]=b("div",{class:"logo-section max-md:hidden"},[b("h1",{class:"app-title"},"Miyuki Beads Designer")],-1)),b("div",px,[tn(o,{to:"/"},{default:Po(()=>r[0]||(r[0]=[Io("Flat Grid")])),_:1}),tn(o,{to:"/weaving-grid"},{default:Po(()=>r[1]||(r[1]=[Io("Weaving Grid")])),_:1}),tn(o,{to:"/beadwork-pattern"},{default:Po(()=>r[2]||(r[2]=[Io("Beadwork Pattern")])),_:1}),tn(o,{to:"/peyote-grid"},{default:Po(()=>r[3]||(r[3]=[Io("Peyote Grid")])),_:1})]),b("button",{class:et(["mobile-toggle-btn md:hidden",{active:n.value}]),onClick:i},r[4]||(r[4]=[b("span",{class:"hamburger-line"},null,-1),b("span",{class:"hamburger-line"},null,-1),b("span",{class:"hamburger-line"},null,-1)]),2)])]),b("main",mx,[tn(Ms(jm),{"is-mobile-header-open":n.value},null,8,["is-mobile-header-open"])])])}}},vx=fa(gx,[["__scopeId","data-v-f02a28cd"]]),_x="modulepreload",bx=function(t){return"/miyuki-beads-designer/"+t},Jf={},So=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){let o=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=o(n.map(c=>{if(c=bx(c),c in Jf)return;Jf[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":_x,u||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((h,v)=>{f.addEventListener("load",h),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};/*!
* sweetalert2 v11.22.3
* Released under the MIT License.
*/function Ym(t,e,n){if(typeof t=="function"?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}function xx(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function eh(t,e){return t.get(Ym(t,e))}function yx(t,e,n){xx(t,e),e.set(t,n)}function wx(t,e,n){return t.set(Ym(t,e),n),n}const Sx=100,Ze={},Mx=()=>{Ze.previousActiveElement instanceof HTMLElement?(Ze.previousActiveElement.focus(),Ze.previousActiveElement=null):document.body&&document.body.focus()},Ex=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,i=window.scrollY;Ze.restoreFocusTimeout=setTimeout(()=>{Mx(),e()},Sx),window.scrollTo(n,i)}),Km="swal2-",Tx=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],se=Tx.reduce((t,e)=>(t[e]=Km+e,t),{}),Ax=["success","warning","info","question","error"],yl=Ax.reduce((t,e)=>(t[e]=Km+e,t),{}),Zm="SweetAlert2:",Td=t=>t.charAt(0).toUpperCase()+t.slice(1),Cn=t=>{console.warn(`${Zm} ${typeof t=="object"?t.join(" "):t}`)},lr=t=>{console.error(`${Zm} ${t}`)},th=[],Cx=t=>{th.includes(t)||(th.push(t),Cn(t))},Qm=(t,e=null)=>{Cx(`"${t}" is deprecated and will be removed in the next major release.${e?` Use "${e}" instead.`:""}`)},Wl=t=>typeof t=="function"?t():t,Ad=t=>t&&typeof t.toPromise=="function",ha=t=>Ad(t)?t.toPromise():Promise.resolve(t),Cd=t=>t&&Promise.resolve(t)===t,Rn=()=>document.body.querySelector(`.${se.container}`),pa=t=>{const e=Rn();return e?e.querySelector(t):null},Yn=t=>pa(`.${t}`),St=()=>Yn(se.popup),fo=()=>Yn(se.icon),Rx=()=>Yn(se["icon-content"]),Jm=()=>Yn(se.title),Rd=()=>Yn(se["html-container"]),eg=()=>Yn(se.image),Pd=()=>Yn(se["progress-steps"]),$l=()=>Yn(se["validation-message"]),Li=()=>pa(`.${se.actions} .${se.confirm}`),ho=()=>pa(`.${se.actions} .${se.cancel}`),cr=()=>pa(`.${se.actions} .${se.deny}`),Px=()=>Yn(se["input-label"]),po=()=>pa(`.${se.loader}`),ma=()=>Yn(se.actions),tg=()=>Yn(se.footer),Xl=()=>Yn(se["timer-progress-bar"]),Dd=()=>Yn(se.close),Dx=`
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
`,Ld=()=>{const t=St();if(!t)return[];const e=t.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),n=Array.from(e).sort((r,o)=>{const a=parseInt(r.getAttribute("tabindex")||"0"),l=parseInt(o.getAttribute("tabindex")||"0");return a>l?1:a<l?-1:0}),i=t.querySelectorAll(Dx),s=Array.from(i).filter(r=>r.getAttribute("tabindex")!=="-1");return[...new Set(n.concat(s))].filter(r=>Un(r))},Id=()=>Qi(document.body,se.shown)&&!Qi(document.body,se["toast-shown"])&&!Qi(document.body,se["no-backdrop"]),ql=()=>{const t=St();return t?Qi(t,se.toast):!1},Lx=()=>{const t=St();return t?t.hasAttribute("data-loading"):!1},Kn=(t,e)=>{if(t.textContent="",e){const i=new DOMParser().parseFromString(e,"text/html"),s=i.querySelector("head");s&&Array.from(s.childNodes).forEach(o=>{t.appendChild(o)});const r=i.querySelector("body");r&&Array.from(r.childNodes).forEach(o=>{o instanceof HTMLVideoElement||o instanceof HTMLAudioElement?t.appendChild(o.cloneNode(!0)):t.appendChild(o)})}},Qi=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let i=0;i<n.length;i++)if(!t.classList.contains(n[i]))return!1;return!0},Ix=(t,e)=>{Array.from(t.classList).forEach(n=>{!Object.values(se).includes(n)&&!Object.values(yl).includes(n)&&!Object.values(e.showClass||{}).includes(n)&&t.classList.remove(n)})},jn=(t,e,n)=>{if(Ix(t,e),!e.customClass)return;const i=e.customClass[n];if(i){if(typeof i!="string"&&!i.forEach){Cn(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof i}"`);return}Et(t,i)}},jl=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${se.popup} > .${se[e]}`);case"checkbox":return t.querySelector(`.${se.popup} > .${se.checkbox} input`);case"radio":return t.querySelector(`.${se.popup} > .${se.radio} input:checked`)||t.querySelector(`.${se.popup} > .${se.radio} input:first-child`);case"range":return t.querySelector(`.${se.popup} > .${se.range} input`);default:return t.querySelector(`.${se.popup} > .${se.input}`)}},ng=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},ig=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(i=>{Array.isArray(t)?t.forEach(s=>{n?s.classList.add(i):s.classList.remove(i)}):n?t.classList.add(i):t.classList.remove(i)}))},Et=(t,e)=>{ig(t,e,!0)},ii=(t,e)=>{ig(t,e,!1)},ys=(t,e)=>{const n=Array.from(t.children);for(let i=0;i<n.length;i++){const s=n[i];if(s instanceof HTMLElement&&Qi(s,e))return s}},er=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style.setProperty(e,typeof n=="number"?`${n}px`:n):t.style.removeProperty(e)},ln=(t,e="flex")=>{t&&(t.style.display=e)},_n=t=>{t&&(t.style.display="none")},Ud=(t,e="block")=>{t&&new MutationObserver(()=>{ga(t,t.innerHTML,e)}).observe(t,{childList:!0,subtree:!0})},nh=(t,e,n,i)=>{const s=t.querySelector(e);s&&s.style.setProperty(n,i)},ga=(t,e,n="flex")=>{e?ln(t,n):_n(t)},Un=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),Ux=()=>!Un(Li())&&!Un(cr())&&!Un(ho()),fu=t=>t.scrollHeight>t.clientHeight,Ox=(t,e)=>{let n=t;for(;n&&n!==e;){if(fu(n))return!0;n=n.parentElement}return!1},sg=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),i=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||i>0},Od=(t,e=!1)=>{const n=Xl();n&&Un(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},Nx=()=>{const t=Xl();if(!t)return;const e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),i=e/n*100;t.style.width=`${i}%`},Fx=()=>typeof window>"u"||typeof document>"u",kx=`
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
`.replace(/(^|\n)\s*/g,""),Bx=()=>{const t=Rn();return t?(t.remove(),ii([document.documentElement,document.body],[se["no-backdrop"],se["toast-shown"],se["has-column"]]),!0):!1},Os=()=>{Ze.currentInstance.resetValidationMessage()},Hx=()=>{const t=St(),e=ys(t,se.input),n=ys(t,se.file),i=t.querySelector(`.${se.range} input`),s=t.querySelector(`.${se.range} output`),r=ys(t,se.select),o=t.querySelector(`.${se.checkbox} input`),a=ys(t,se.textarea);e.oninput=Os,n.onchange=Os,r.onchange=Os,o.onchange=Os,a.oninput=Os,i.oninput=()=>{Os(),s.value=i.value},i.onchange=()=>{Os(),s.value=i.value}},zx=t=>typeof t=="string"?document.querySelector(t):t,Vx=t=>{const e=St();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},Gx=t=>{window.getComputedStyle(t).direction==="rtl"&&Et(Rn(),se.rtl)},Wx=t=>{const e=Bx();if(Fx()){lr("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=se.container,e&&Et(n,se["no-transition"]),Kn(n,kx),n.dataset.swal2Theme=t.theme;const i=zx(t.target);i.appendChild(n),t.topLayer&&(n.setAttribute("popover",""),n.showPopover()),Vx(t),Gx(i),Hx()},Nd=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?$x(t,e):t&&Kn(e,t)},$x=(t,e)=>{t.jquery?Xx(e,t):Kn(e,t.toString())},Xx=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},qx=(t,e)=>{const n=ma(),i=po();!n||!i||(!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?_n(n):ln(n),jn(n,e,"actions"),jx(n,i,e),Kn(i,e.loaderHtml||""),jn(i,e,"loader"))};function jx(t,e,n){const i=Li(),s=cr(),r=ho();!i||!s||!r||(mc(i,"confirm",n),mc(s,"deny",n),mc(r,"cancel",n),Yx(i,s,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,i),t.insertBefore(s,i)):(t.insertBefore(r,e),t.insertBefore(s,e),t.insertBefore(i,e))))}function Yx(t,e,n,i){if(!i.buttonsStyling){ii([t,e,n],se.styled);return}Et([t,e,n],se.styled),i.confirmButtonColor&&t.style.setProperty("--swal2-confirm-button-background-color",i.confirmButtonColor),i.denyButtonColor&&e.style.setProperty("--swal2-deny-button-background-color",i.denyButtonColor),i.cancelButtonColor&&n.style.setProperty("--swal2-cancel-button-background-color",i.cancelButtonColor),pc(t),pc(e),pc(n)}function pc(t){const e=window.getComputedStyle(t);if(e.getPropertyValue("--swal2-action-button-focus-box-shadow"))return;const n=e.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/,"rgba($1, $2, $3, 0.5)");t.style.setProperty("--swal2-action-button-focus-box-shadow",e.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/,` ${n}`))}function mc(t,e,n){const i=Td(e);ga(t,n[`show${i}Button`],"inline-block"),Kn(t,n[`${e}ButtonText`]||""),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]||""),t.className=se[e],jn(t,n,`${e}Button`)}const Kx=(t,e)=>{const n=Dd();n&&(Kn(n,e.closeButtonHtml||""),jn(n,e,"closeButton"),ga(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel||""))},Zx=(t,e)=>{const n=Rn();n&&(Qx(n,e.backdrop),Jx(n,e.position),ey(n,e.grow),jn(n,e,"container"))};function Qx(t,e){typeof e=="string"?t.style.background=e:e||Et([document.documentElement,document.body],se["no-backdrop"])}function Jx(t,e){e&&(e in se?Et(t,se[e]):(Cn('The "position" parameter is not valid, defaulting to "center"'),Et(t,se.center)))}function ey(t,e){e&&Et(t,se[`grow-${e}`])}var Ft={innerParams:new WeakMap,domCache:new WeakMap};const ty=["input","file","range","select","radio","checkbox","textarea"],ny=(t,e)=>{const n=St();if(!n)return;const i=Ft.innerParams.get(t),s=!i||e.input!==i.input;ty.forEach(r=>{const o=ys(n,se[r]);o&&(ry(r,e.inputAttributes),o.className=se[r],s&&_n(o))}),e.input&&(s&&iy(e),oy(e))},iy=t=>{if(!t.input)return;if(!qt[t.input]){lr(`Unexpected type of input! Expected ${Object.keys(qt).join(" | ")}, got "${t.input}"`);return}const e=rg(t.input);if(!e)return;const n=qt[t.input](e,t);ln(e),t.inputAutoFocus&&setTimeout(()=>{ng(n)})},sy=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["id","type","value","style"].includes(n)||t.removeAttribute(n)}},ry=(t,e)=>{const n=St();if(!n)return;const i=jl(n,t);if(i){sy(i);for(const s in e)i.setAttribute(s,e[s])}},oy=t=>{if(!t.input)return;const e=rg(t.input);e&&jn(e,t,"input")},Fd=(t,e)=>{!t.placeholder&&e.inputPlaceholder&&(t.placeholder=e.inputPlaceholder)},va=(t,e,n)=>{if(n.inputLabel){const i=document.createElement("label"),s=se["input-label"];i.setAttribute("for",t.id),i.className=s,typeof n.customClass=="object"&&Et(i,n.customClass.inputLabel),i.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",i)}},rg=t=>{const e=St();if(e)return ys(e,se[t]||se.input)},wl=(t,e)=>{["string","number"].includes(typeof e)?t.value=`${e}`:Cd(e)||Cn(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e}"`)},qt={};qt.text=qt.email=qt.password=qt.number=qt.tel=qt.url=qt.search=qt.date=qt["datetime-local"]=qt.time=qt.week=qt.month=(t,e)=>(wl(t,e.inputValue),va(t,t,e),Fd(t,e),t.type=e.input,t);qt.file=(t,e)=>(va(t,t,e),Fd(t,e),t);qt.range=(t,e)=>{const n=t.querySelector("input"),i=t.querySelector("output");return wl(n,e.inputValue),n.type=e.input,wl(i,e.inputValue),va(n,t,e),t};qt.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");Kn(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return va(t,t,e),t};qt.radio=t=>(t.textContent="",t);qt.checkbox=(t,e)=>{const n=jl(St(),"checkbox");n.value="1",n.checked=!!e.inputValue;const i=t.querySelector("span");return Kn(i,e.inputPlaceholder||e.inputLabel),n};qt.textarea=(t,e)=>{wl(t,e.inputValue),Fd(t,e),va(t,t,e);const n=i=>parseInt(window.getComputedStyle(i).marginLeft)+parseInt(window.getComputedStyle(i).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const i=parseInt(window.getComputedStyle(St()).width),s=()=>{if(!document.body.contains(t))return;const r=t.offsetWidth+n(t);r>i?St().style.width=`${r}px`:er(St(),"width",e.width)};new MutationObserver(s).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const ay=(t,e)=>{const n=Rd();n&&(Ud(n),jn(n,e,"htmlContainer"),e.html?(Nd(e.html,n),ln(n,"block")):e.text?(n.textContent=e.text,ln(n,"block")):_n(n),ny(t,e))},ly=(t,e)=>{const n=tg();n&&(Ud(n),ga(n,e.footer,"block"),e.footer&&Nd(e.footer,n),jn(n,e,"footer"))},cy=(t,e)=>{const n=Ft.innerParams.get(t),i=fo();if(!i)return;if(n&&e.icon===n.icon){sh(i,e),ih(i,e);return}if(!e.icon&&!e.iconHtml){_n(i);return}if(e.icon&&Object.keys(yl).indexOf(e.icon)===-1){lr(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),_n(i);return}ln(i),sh(i,e),ih(i,e),Et(i,e.showClass&&e.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",og)},ih=(t,e)=>{for(const[n,i]of Object.entries(yl))e.icon!==n&&ii(t,i);Et(t,e.icon&&yl[e.icon]),fy(t,e),og(),jn(t,e,"icon")},og=()=>{const t=St();if(!t)return;const e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let i=0;i<n.length;i++)n[i].style.backgroundColor=e},uy=t=>`
  ${t.animation?'<div class="swal2-success-circular-line-left"></div>':""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${t.animation?'<div class="swal2-success-fix"></div>':""}
  ${t.animation?'<div class="swal2-success-circular-line-right"></div>':""}
`,dy=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,sh=(t,e)=>{if(!e.icon&&!e.iconHtml)return;let n=t.innerHTML,i="";e.iconHtml?i=rh(e.iconHtml):e.icon==="success"?(i=uy(e),n=n.replace(/ style=".*?"/g,"")):e.icon==="error"?i=dy:e.icon&&(i=rh({question:"?",warning:"!",info:"i"}[e.icon])),n.trim()!==i.trim()&&Kn(t,i)},fy=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])nh(t,n,"background-color",e.iconColor);nh(t,".swal2-success-ring","border-color",e.iconColor)}},rh=t=>`<div class="${se["icon-content"]}">${t}</div>`,hy=(t,e)=>{const n=eg();if(n){if(!e.imageUrl){_n(n);return}ln(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt||""),er(n,"width",e.imageWidth),er(n,"height",e.imageHeight),n.className=se.image,jn(n,e,"image")}};let kd=!1,ag=0,lg=0,cg=0,ug=0;const py=t=>{t.addEventListener("mousedown",Sl),document.body.addEventListener("mousemove",Ml),t.addEventListener("mouseup",El),t.addEventListener("touchstart",Sl),document.body.addEventListener("touchmove",Ml),t.addEventListener("touchend",El)},my=t=>{t.removeEventListener("mousedown",Sl),document.body.removeEventListener("mousemove",Ml),t.removeEventListener("mouseup",El),t.removeEventListener("touchstart",Sl),document.body.removeEventListener("touchmove",Ml),t.removeEventListener("touchend",El)},Sl=t=>{const e=St();if(t.target===e||fo().contains(t.target)){kd=!0;const n=dg(t);ag=n.clientX,lg=n.clientY,cg=parseInt(e.style.insetInlineStart)||0,ug=parseInt(e.style.insetBlockStart)||0,Et(e,"swal2-dragging")}},Ml=t=>{const e=St();if(kd){let{clientX:n,clientY:i}=dg(t);e.style.insetInlineStart=`${cg+(n-ag)}px`,e.style.insetBlockStart=`${ug+(i-lg)}px`}},El=()=>{const t=St();kd=!1,ii(t,"swal2-dragging")},dg=t=>{let e=0,n=0;return t.type.startsWith("mouse")?(e=t.clientX,n=t.clientY):t.type.startsWith("touch")&&(e=t.touches[0].clientX,n=t.touches[0].clientY),{clientX:e,clientY:n}},gy=(t,e)=>{const n=Rn(),i=St();if(!(!n||!i)){if(e.toast){er(n,"width",e.width),i.style.width="100%";const s=po();s&&i.insertBefore(s,fo())}else er(i,"width",e.width);er(i,"padding",e.padding),e.color&&(i.style.color=e.color),e.background&&(i.style.background=e.background),_n($l()),vy(i,e),e.draggable&&!e.toast?(Et(i,se.draggable),py(i)):(ii(i,se.draggable),my(i))}},vy=(t,e)=>{const n=e.showClass||{};t.className=`${se.popup} ${Un(t)?n.popup:""}`,e.toast?(Et([document.documentElement,document.body],se["toast-shown"]),Et(t,se.toast)):Et(t,se.modal),jn(t,e,"popup"),typeof e.customClass=="string"&&Et(t,e.customClass),e.icon&&Et(t,se[`icon-${e.icon}`])},_y=(t,e)=>{const n=Pd();if(!n)return;const{progressSteps:i,currentProgressStep:s}=e;if(!i||i.length===0||s===void 0){_n(n);return}ln(n),n.textContent="",s>=i.length&&Cn("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),i.forEach((r,o)=>{const a=by(r);if(n.appendChild(a),o===s&&Et(a,se["active-progress-step"]),o!==i.length-1){const l=xy(e);n.appendChild(l)}})},by=t=>{const e=document.createElement("li");return Et(e,se["progress-step"]),Kn(e,t),e},xy=t=>{const e=document.createElement("li");return Et(e,se["progress-step-line"]),t.progressStepsDistance&&er(e,"width",t.progressStepsDistance),e},yy=(t,e)=>{const n=Jm();n&&(Ud(n),ga(n,e.title||e.titleText,"block"),e.title&&Nd(e.title,n),e.titleText&&(n.innerText=e.titleText),jn(n,e,"title"))},fg=(t,e)=>{gy(t,e),Zx(t,e),_y(t,e),cy(t,e),hy(t,e),yy(t,e),Kx(t,e),ay(t,e),qx(t,e),ly(t,e);const n=St();typeof e.didRender=="function"&&n&&e.didRender(n),Ze.eventEmitter.emit("didRender",n)},wy=()=>Un(St()),hg=()=>{var t;return(t=Li())===null||t===void 0?void 0:t.click()},Sy=()=>{var t;return(t=cr())===null||t===void 0?void 0:t.click()},My=()=>{var t;return(t=ho())===null||t===void 0?void 0:t.click()},mo=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),pg=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},Ey=(t,e,n)=>{pg(t),e.toast||(t.keydownHandler=i=>Ay(e,i,n),t.keydownTarget=e.keydownListenerCapture?window:St(),t.keydownListenerCapture=e.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)},hu=(t,e)=>{var n;const i=Ld();if(i.length){t=t+e,t===-2&&(t=i.length-1),t===i.length?t=0:t===-1&&(t=i.length-1),i[t].focus();return}(n=St())===null||n===void 0||n.focus()},mg=["ArrowRight","ArrowDown"],Ty=["ArrowLeft","ArrowUp"],Ay=(t,e,n)=>{t&&(e.isComposing||e.keyCode===229||(t.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?Cy(e,t):e.key==="Tab"?Ry(e):[...mg,...Ty].includes(e.key)?Py(e.key):e.key==="Escape"&&Dy(e,t,n)))},Cy=(t,e)=>{if(!Wl(e.allowEnterKey))return;const n=jl(St(),e.input);if(t.target&&n&&t.target instanceof HTMLElement&&t.target.outerHTML===n.outerHTML){if(["textarea","file"].includes(e.input))return;hg(),t.preventDefault()}},Ry=t=>{const e=t.target,n=Ld();let i=-1;for(let s=0;s<n.length;s++)if(e===n[s]){i=s;break}t.shiftKey?hu(i,-1):hu(i,1),t.stopPropagation(),t.preventDefault()},Py=t=>{const e=ma(),n=Li(),i=cr(),s=ho();if(!e||!n||!i||!s)return;const r=[n,i,s];if(document.activeElement instanceof HTMLElement&&!r.includes(document.activeElement))return;const o=mg.includes(t)?"nextElementSibling":"previousElementSibling";let a=document.activeElement;if(a){for(let l=0;l<e.children.length;l++){if(a=a[o],!a)return;if(a instanceof HTMLButtonElement&&Un(a))break}a instanceof HTMLButtonElement&&a.focus()}},Dy=(t,e,n)=>{t.preventDefault(),Wl(e.allowEscapeKey)&&n(mo.esc)};var no={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const Ly=()=>{const t=Rn();Array.from(document.body.children).forEach(n=>{n.contains(t)||(n.hasAttribute("aria-hidden")&&n.setAttribute("data-previous-aria-hidden",n.getAttribute("aria-hidden")||""),n.setAttribute("aria-hidden","true"))})},gg=()=>{Array.from(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||""),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},vg=typeof window<"u"&&!!window.GestureEvent,Iy=()=>{if(vg&&!Qi(document.body,se.iosfix)){const t=document.body.scrollTop;document.body.style.top=`${t*-1}px`,Et(document.body,se.iosfix),Uy()}},Uy=()=>{const t=Rn();if(!t)return;let e;t.ontouchstart=n=>{e=Oy(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},Oy=t=>{const e=t.target,n=Rn(),i=Rd();return!n||!i||Ny(t)||Fy(t)?!1:e===n||!fu(n)&&e instanceof HTMLElement&&!Ox(e,i)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(fu(i)&&i.contains(e))},Ny=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",Fy=t=>t.touches&&t.touches.length>1,ky=()=>{if(Qi(document.body,se.iosfix)){const t=parseInt(document.body.style.top,10);ii(document.body,se.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},By=()=>{const t=document.createElement("div");t.className=se["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e};let Fr=null;const Hy=t=>{Fr===null&&(document.body.scrollHeight>window.innerHeight||t==="scroll")&&(Fr=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Fr+By()}px`)},zy=()=>{Fr!==null&&(document.body.style.paddingRight=`${Fr}px`,Fr=null)};function _g(t,e,n,i){ql()?oh(t,i):(Ex(n).then(()=>oh(t,i)),pg(Ze)),vg?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),Id()&&(zy(),ky(),gg()),Vy()}function Vy(){ii([document.documentElement,document.body],[se.shown,se["height-auto"],se["no-backdrop"],se["toast-shown"]])}function ws(t){t=Wy(t);const e=no.swalPromiseResolve.get(this),n=Gy(this);this.isAwaitingPromise?t.isDismissed||(_a(this),e(t)):n&&e(t)}const Gy=t=>{const e=St();if(!e)return!1;const n=Ft.innerParams.get(t);if(!n||Qi(e,n.hideClass.popup))return!1;ii(e,n.showClass.popup),Et(e,n.hideClass.popup);const i=Rn();return ii(i,n.showClass.backdrop),Et(i,n.hideClass.backdrop),$y(t,e,n),!0};function bg(t){const e=no.swalPromiseReject.get(this);_a(this),e&&e(t)}const _a=t=>{t.isAwaitingPromise&&(delete t.isAwaitingPromise,Ft.innerParams.get(t)||t._destroy())},Wy=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),$y=(t,e,n)=>{var i;const s=Rn(),r=sg(e);typeof n.willClose=="function"&&n.willClose(e),(i=Ze.eventEmitter)===null||i===void 0||i.emit("willClose",e),r?Xy(t,e,s,n.returnFocus,n.didClose):_g(t,s,n.returnFocus,n.didClose)},Xy=(t,e,n,i,s)=>{Ze.swalCloseEventFinishedCallback=_g.bind(null,t,n,i,s);const r=function(o){if(o.target===e){var a;(a=Ze.swalCloseEventFinishedCallback)===null||a===void 0||a.call(Ze),delete Ze.swalCloseEventFinishedCallback,e.removeEventListener("animationend",r),e.removeEventListener("transitionend",r)}};e.addEventListener("animationend",r),e.addEventListener("transitionend",r)},oh=(t,e)=>{setTimeout(()=>{var n;typeof e=="function"&&e.bind(t.params)(),(n=Ze.eventEmitter)===null||n===void 0||n.emit("didClose"),t._destroy&&t._destroy()})},io=t=>{let e=St();if(e||new Nn,e=St(),!e)return;const n=po();ql()?_n(fo()):qy(e,t),ln(n),e.setAttribute("data-loading","true"),e.setAttribute("aria-busy","true"),e.focus()},qy=(t,e)=>{const n=ma(),i=po();!n||!i||(!e&&Un(Li())&&(e=Li()),ln(n),e&&(_n(e),i.setAttribute("data-button-to-replace",e.className),n.insertBefore(i,e)),Et([t,n],se.loading))},jy=(t,e)=>{e.input==="select"||e.input==="radio"?Jy(t,e):["text","email","number","tel","textarea"].some(n=>n===e.input)&&(Ad(e.inputValue)||Cd(e.inputValue))&&(io(Li()),ew(t,e))},Yy=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return Ky(n);case"radio":return Zy(n);case"file":return Qy(n);default:return e.inputAutoTrim?n.value.trim():n.value}},Ky=t=>t.checked?1:0,Zy=t=>t.checked?t.value:null,Qy=t=>t.files&&t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,Jy=(t,e)=>{const n=St();if(!n)return;const i=s=>{e.input==="select"?tw(n,Tl(s),e):e.input==="radio"&&nw(n,Tl(s),e)};Ad(e.inputOptions)||Cd(e.inputOptions)?(io(Li()),ha(e.inputOptions).then(s=>{t.hideLoading(),i(s)})):typeof e.inputOptions=="object"?i(e.inputOptions):lr(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},ew=(t,e)=>{const n=t.getInput();n&&(_n(n),ha(e.inputValue).then(i=>{n.value=e.input==="number"?`${parseFloat(i)||0}`:`${i}`,ln(n),n.focus(),t.hideLoading()}).catch(i=>{lr(`Error in inputValue promise: ${i}`),n.value="",ln(n),n.focus(),t.hideLoading()}))};function tw(t,e,n){const i=ys(t,se.select);if(!i)return;const s=(r,o,a)=>{const l=document.createElement("option");l.value=a,Kn(l,o),l.selected=xg(a,n.inputValue),r.appendChild(l)};e.forEach(r=>{const o=r[0],a=r[1];if(Array.isArray(a)){const l=document.createElement("optgroup");l.label=o,l.disabled=!1,i.appendChild(l),a.forEach(c=>s(l,c[1],c[0]))}else s(i,a,o)}),i.focus()}function nw(t,e,n){const i=ys(t,se.radio);if(!i)return;e.forEach(r=>{const o=r[0],a=r[1],l=document.createElement("input"),c=document.createElement("label");l.type="radio",l.name=se.radio,l.value=o,xg(o,n.inputValue)&&(l.checked=!0);const u=document.createElement("span");Kn(u,a),u.className=se.label,c.appendChild(l),c.appendChild(u),i.appendChild(c)});const s=i.querySelectorAll("input");s.length&&s[0].focus()}const Tl=t=>{const e=[];return t instanceof Map?t.forEach((n,i)=>{let s=n;typeof s=="object"&&(s=Tl(s)),e.push([i,s])}):Object.keys(t).forEach(n=>{let i=t[n];typeof i=="object"&&(i=Tl(i)),e.push([n,i])}),e},xg=(t,e)=>!!e&&e.toString()===t.toString(),iw=t=>{const e=Ft.innerParams.get(t);t.disableButtons(),e.input?yg(t,"confirm"):Hd(t,!0)},sw=t=>{const e=Ft.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?yg(t,"deny"):Bd(t,!1)},rw=(t,e)=>{t.disableButtons(),e(mo.cancel)},yg=(t,e)=>{const n=Ft.innerParams.get(t);if(!n.input){lr(`The "input" parameter is needed to be set when using returnInputValueOn${Td(e)}`);return}const i=t.getInput(),s=Yy(t,n);n.inputValidator?ow(t,s,e):i&&!i.checkValidity()?(t.enableButtons(),t.showValidationMessage(n.validationMessage||i.validationMessage)):e==="deny"?Bd(t,s):Hd(t,s)},ow=(t,e,n)=>{const i=Ft.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>ha(i.inputValidator(e,i.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):n==="deny"?Bd(t,e):Hd(t,e)})},Bd=(t,e)=>{const n=Ft.innerParams.get(t||void 0);n.showLoaderOnDeny&&io(cr()),n.preDeny?(t.isAwaitingPromise=!0,Promise.resolve().then(()=>ha(n.preDeny(e,n.validationMessage))).then(s=>{s===!1?(t.hideLoading(),_a(t)):t.close({isDenied:!0,value:typeof s>"u"?e:s})}).catch(s=>wg(t||void 0,s))):t.close({isDenied:!0,value:e})},ah=(t,e)=>{t.close({isConfirmed:!0,value:e})},wg=(t,e)=>{t.rejectPromise(e)},Hd=(t,e)=>{const n=Ft.innerParams.get(t||void 0);n.showLoaderOnConfirm&&io(),n.preConfirm?(t.resetValidationMessage(),t.isAwaitingPromise=!0,Promise.resolve().then(()=>ha(n.preConfirm(e,n.validationMessage))).then(s=>{Un($l())||s===!1?(t.hideLoading(),_a(t)):ah(t,typeof s>"u"?e:s)}).catch(s=>wg(t||void 0,s))):ah(t,e)};function Al(){const t=Ft.innerParams.get(this);if(!t)return;const e=Ft.domCache.get(this);_n(e.loader),ql()?t.icon&&ln(fo()):aw(e),ii([e.popup,e.actions],se.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const aw=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?ln(e[0],"inline-block"):Ux()&&_n(t.actions)};function Sg(){const t=Ft.innerParams.get(this),e=Ft.domCache.get(this);return e?jl(e.popup,t.input):null}function Mg(t,e,n){const i=Ft.domCache.get(t);e.forEach(s=>{i[s].disabled=n})}function Eg(t,e){const n=St();if(!(!n||!t))if(t.type==="radio"){const i=n.querySelectorAll(`[name="${se.radio}"]`);for(let s=0;s<i.length;s++)i[s].disabled=e}else t.disabled=e}function Tg(){Mg(this,["confirmButton","denyButton","cancelButton"],!1)}function Ag(){Mg(this,["confirmButton","denyButton","cancelButton"],!0)}function Cg(){Eg(this.getInput(),!1)}function Rg(){Eg(this.getInput(),!0)}function Pg(t){const e=Ft.domCache.get(this),n=Ft.innerParams.get(this);Kn(e.validationMessage,t),e.validationMessage.className=se["validation-message"],n.customClass&&n.customClass.validationMessage&&Et(e.validationMessage,n.customClass.validationMessage),ln(e.validationMessage);const i=this.getInput();i&&(i.setAttribute("aria-invalid","true"),i.setAttribute("aria-describedby",se["validation-message"]),ng(i),Et(i,se.inputerror))}function Dg(){const t=Ft.domCache.get(this);t.validationMessage&&_n(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),ii(e,se.inputerror))}const kr={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0,topLayer:!1},lw=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],cw={allowEnterKey:void 0},uw=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Lg=t=>Object.prototype.hasOwnProperty.call(kr,t),Ig=t=>lw.indexOf(t)!==-1,Ug=t=>cw[t],dw=t=>{Lg(t)||Cn(`Unknown parameter "${t}"`)},fw=t=>{uw.includes(t)&&Cn(`The parameter "${t}" is incompatible with toasts`)},hw=t=>{const e=Ug(t);e&&Qm(t,e)},Og=t=>{t.backdrop===!1&&t.allowOutsideClick&&Cn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),t.theme&&!["light","dark","auto","minimal","borderless","embed-iframe","bulma","bulma-light","bulma-dark"].includes(t.theme)&&Cn(`Invalid theme "${t.theme}"`);for(const e in t)dw(e),t.toast&&fw(e),hw(e)};function Ng(t){const e=Rn(),n=St(),i=Ft.innerParams.get(this);if(!n||Qi(n,i.hideClass.popup)){Cn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const s=pw(t),r=Object.assign({},i,s);Og(r),e.dataset.swal2Theme=r.theme,fg(this,r),Ft.innerParams.set(this,r),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const pw=t=>{const e={};return Object.keys(t).forEach(n=>{Ig(n)?e[n]=t[n]:Cn(`Invalid parameter to update: ${n}`)}),e};function Fg(){const t=Ft.domCache.get(this),e=Ft.innerParams.get(this);if(!e){kg(this);return}t.popup&&Ze.swalCloseEventFinishedCallback&&(Ze.swalCloseEventFinishedCallback(),delete Ze.swalCloseEventFinishedCallback),typeof e.didDestroy=="function"&&e.didDestroy(),Ze.eventEmitter.emit("didDestroy"),mw(this)}const mw=t=>{kg(t),delete t.params,delete Ze.keydownHandler,delete Ze.keydownTarget,delete Ze.currentInstance},kg=t=>{t.isAwaitingPromise?(gc(Ft,t),t.isAwaitingPromise=!0):(gc(no,t),gc(Ft,t),delete t.isAwaitingPromise,delete t.disableButtons,delete t.enableButtons,delete t.getInput,delete t.disableInput,delete t.enableInput,delete t.hideLoading,delete t.disableLoading,delete t.showValidationMessage,delete t.resetValidationMessage,delete t.close,delete t.closePopup,delete t.closeModal,delete t.closeToast,delete t.rejectPromise,delete t.update,delete t._destroy)},gc=(t,e)=>{for(const n in t)t[n].delete(e)};var gw=Object.freeze({__proto__:null,_destroy:Fg,close:ws,closeModal:ws,closePopup:ws,closeToast:ws,disableButtons:Ag,disableInput:Rg,disableLoading:Al,enableButtons:Tg,enableInput:Cg,getInput:Sg,handleAwaitingPromise:_a,hideLoading:Al,rejectPromise:bg,resetValidationMessage:Dg,showValidationMessage:Pg,update:Ng});const vw=(t,e,n)=>{t.toast?_w(t,e,n):(xw(e),yw(e),ww(t,e,n))},_w=(t,e,n)=>{e.popup.onclick=()=>{t&&(bw(t)||t.timer||t.input)||n(mo.close)}},bw=t=>!!(t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton);let Cl=!1;const xw=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=()=>{},e.target===t.container&&(Cl=!0)}}},yw=t=>{t.container.onmousedown=e=>{e.target===t.container&&e.preventDefault(),t.popup.onmouseup=function(n){t.popup.onmouseup=()=>{},(n.target===t.popup||n.target instanceof HTMLElement&&t.popup.contains(n.target))&&(Cl=!0)}}},ww=(t,e,n)=>{e.container.onclick=i=>{if(Cl){Cl=!1;return}i.target===e.container&&Wl(t.allowOutsideClick)&&n(mo.backdrop)}},Sw=t=>typeof t=="object"&&t.jquery,lh=t=>t instanceof Element||Sw(t),Mw=t=>{const e={};return typeof t[0]=="object"&&!lh(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,i)=>{const s=t[i];typeof s=="string"||lh(s)?e[n]=s:s!==void 0&&lr(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof s}`)}),e};function Ew(...t){return new this(...t)}function Tw(t){class e extends this{_main(i,s){return super._main(i,Object.assign({},t,s))}}return e}const Aw=()=>Ze.timeout&&Ze.timeout.getTimerLeft(),Bg=()=>{if(Ze.timeout)return Nx(),Ze.timeout.stop()},Hg=()=>{if(Ze.timeout){const t=Ze.timeout.start();return Od(t),t}},Cw=()=>{const t=Ze.timeout;return t&&(t.running?Bg():Hg())},Rw=t=>{if(Ze.timeout){const e=Ze.timeout.increase(t);return Od(e,!0),e}},Pw=()=>!!(Ze.timeout&&Ze.timeout.isRunning());let ch=!1;const pu={};function Dw(t="data-swal-template"){pu[t]=this,ch||(document.body.addEventListener("click",Lw),ch=!0)}const Lw=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in pu){const i=e.getAttribute(n);if(i){pu[n].fire({template:i});return}}};class Iw{constructor(){this.events={}}_getHandlersByEventName(e){return typeof this.events[e]>"u"&&(this.events[e]=[]),this.events[e]}on(e,n){const i=this._getHandlersByEventName(e);i.includes(n)||i.push(n)}once(e,n){const i=(...s)=>{this.removeListener(e,i),n.apply(this,s)};this.on(e,i)}emit(e,...n){this._getHandlersByEventName(e).forEach(i=>{try{i.apply(this,n)}catch(s){console.error(s)}})}removeListener(e,n){const i=this._getHandlersByEventName(e),s=i.indexOf(n);s>-1&&i.splice(s,1)}removeAllListeners(e){this.events[e]!==void 0&&(this.events[e].length=0)}reset(){this.events={}}}Ze.eventEmitter=new Iw;const Uw=(t,e)=>{Ze.eventEmitter.on(t,e)},Ow=(t,e)=>{Ze.eventEmitter.once(t,e)},Nw=(t,e)=>{if(!t){Ze.eventEmitter.reset();return}e?Ze.eventEmitter.removeListener(t,e):Ze.eventEmitter.removeAllListeners(t)};var Fw=Object.freeze({__proto__:null,argsToParams:Mw,bindClickHandler:Dw,clickCancel:My,clickConfirm:hg,clickDeny:Sy,enableLoading:io,fire:Ew,getActions:ma,getCancelButton:ho,getCloseButton:Dd,getConfirmButton:Li,getContainer:Rn,getDenyButton:cr,getFocusableElements:Ld,getFooter:tg,getHtmlContainer:Rd,getIcon:fo,getIconContent:Rx,getImage:eg,getInputLabel:Px,getLoader:po,getPopup:St,getProgressSteps:Pd,getTimerLeft:Aw,getTimerProgressBar:Xl,getTitle:Jm,getValidationMessage:$l,increaseTimer:Rw,isDeprecatedParameter:Ug,isLoading:Lx,isTimerRunning:Pw,isUpdatableParameter:Ig,isValidParameter:Lg,isVisible:wy,mixin:Tw,off:Nw,on:Uw,once:Ow,resumeTimer:Hg,showLoading:io,stopTimer:Bg,toggleTimer:Cw});class kw{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const zg=["swal-title","swal-html","swal-footer"],Bw=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return qw(n),Object.assign(Hw(n),zw(n),Vw(n),Gw(n),Ww(n),$w(n),Xw(n,zg))},Hw=t=>{const e={};return Array.from(t.querySelectorAll("swal-param")).forEach(i=>{ir(i,["name","value"]);const s=i.getAttribute("name"),r=i.getAttribute("value");!s||!r||(typeof kr[s]=="boolean"?e[s]=r!=="false":typeof kr[s]=="object"?e[s]=JSON.parse(r):e[s]=r)}),e},zw=t=>{const e={};return Array.from(t.querySelectorAll("swal-function-param")).forEach(i=>{const s=i.getAttribute("name"),r=i.getAttribute("value");!s||!r||(e[s]=new Function(`return ${r}`)())}),e},Vw=t=>{const e={};return Array.from(t.querySelectorAll("swal-button")).forEach(i=>{ir(i,["type","color","aria-label"]);const s=i.getAttribute("type");!s||!["confirm","cancel","deny"].includes(s)||(e[`${s}ButtonText`]=i.innerHTML,e[`show${Td(s)}Button`]=!0,i.hasAttribute("color")&&(e[`${s}ButtonColor`]=i.getAttribute("color")),i.hasAttribute("aria-label")&&(e[`${s}ButtonAriaLabel`]=i.getAttribute("aria-label")))}),e},Gw=t=>{const e={},n=t.querySelector("swal-image");return n&&(ir(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")||void 0),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")||void 0),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")||void 0),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt")||void 0)),e},Ww=t=>{const e={},n=t.querySelector("swal-icon");return n&&(ir(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},$w=t=>{const e={},n=t.querySelector("swal-input");n&&(ir(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const i=Array.from(t.querySelectorAll("swal-input-option"));return i.length&&(e.inputOptions={},i.forEach(s=>{ir(s,["value"]);const r=s.getAttribute("value");if(!r)return;const o=s.innerHTML;e.inputOptions[r]=o})),e},Xw=(t,e)=>{const n={};for(const i in e){const s=e[i],r=t.querySelector(s);r&&(ir(r,[]),n[s.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},qw=t=>{const e=zg.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(t.children).forEach(n=>{const i=n.tagName.toLowerCase();e.includes(i)||Cn(`Unrecognized element <${i}>`)})},ir=(t,e)=>{Array.from(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&Cn([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},Vg=10,jw=t=>{const e=Rn(),n=St();typeof t.willOpen=="function"&&t.willOpen(n),Ze.eventEmitter.emit("willOpen",n);const s=window.getComputedStyle(document.body).overflowY;Zw(e,n,t),setTimeout(()=>{Yw(e,n)},Vg),Id()&&(Kw(e,t.scrollbarPadding,s),Ly()),!ql()&&!Ze.previousActiveElement&&(Ze.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),Ze.eventEmitter.emit("didOpen",n),ii(e,se["no-transition"])},Rl=t=>{const e=St();if(t.target!==e)return;const n=Rn();e.removeEventListener("animationend",Rl),e.removeEventListener("transitionend",Rl),n.style.overflowY="auto"},Yw=(t,e)=>{sg(e)?(t.style.overflowY="hidden",e.addEventListener("animationend",Rl),e.addEventListener("transitionend",Rl)):t.style.overflowY="auto"},Kw=(t,e,n)=>{Iy(),e&&n!=="hidden"&&Hy(n),setTimeout(()=>{t.scrollTop=0})},Zw=(t,e,n)=>{Et(t,n.showClass.backdrop),n.animation?(e.style.setProperty("opacity","0","important"),ln(e,"grid"),setTimeout(()=>{Et(e,n.showClass.popup),e.style.removeProperty("opacity")},Vg)):ln(e,"grid"),Et([document.documentElement,document.body],se.shown),n.heightAuto&&n.backdrop&&!n.toast&&Et([document.documentElement,document.body],se["height-auto"])};var uh={email:(t,e)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function Qw(t){t.inputValidator||(t.input==="email"&&(t.inputValidator=uh.email),t.input==="url"&&(t.inputValidator=uh.url))}function Jw(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(Cn('Target parameter is not valid, defaulting to "body"'),t.target="body")}function eS(t){Qw(t),t.showLoaderOnConfirm&&!t.preConfirm&&Cn(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Jw(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),Wx(t)}let bi;var Ra=new WeakMap;class Yt{constructor(...e){if(yx(this,Ra,void 0),typeof window>"u")return;bi=this;const n=Object.freeze(this.constructor.argsToParams(e));this.params=n,this.isAwaitingPromise=!1,wx(Ra,this,this._main(bi.params))}_main(e,n={}){if(Og(Object.assign({},n,e)),Ze.currentInstance){const r=no.swalPromiseResolve.get(Ze.currentInstance),{isAwaitingPromise:o}=Ze.currentInstance;Ze.currentInstance._destroy(),o||r({isDismissed:!0}),Id()&&gg()}Ze.currentInstance=bi;const i=nS(e,n);eS(i),Object.freeze(i),Ze.timeout&&(Ze.timeout.stop(),delete Ze.timeout),clearTimeout(Ze.restoreFocusTimeout);const s=iS(bi);return fg(bi,i),Ft.innerParams.set(bi,i),tS(bi,s,i)}then(e){return eh(Ra,this).then(e)}finally(e){return eh(Ra,this).finally(e)}}const tS=(t,e,n)=>new Promise((i,s)=>{const r=o=>{t.close({isDismissed:!0,dismiss:o})};no.swalPromiseResolve.set(t,i),no.swalPromiseReject.set(t,s),e.confirmButton.onclick=()=>{iw(t)},e.denyButton.onclick=()=>{sw(t)},e.cancelButton.onclick=()=>{rw(t,r)},e.closeButton.onclick=()=>{r(mo.close)},vw(n,e,r),Ey(Ze,n,r),jy(t,n),jw(n),sS(Ze,n,r),rS(e,n),setTimeout(()=>{e.container.scrollTop=0})}),nS=(t,e)=>{const n=Bw(t),i=Object.assign({},kr,e,n,t);return i.showClass=Object.assign({},kr.showClass,i.showClass),i.hideClass=Object.assign({},kr.hideClass,i.hideClass),i.animation===!1&&(i.showClass={backdrop:"swal2-noanimation"},i.hideClass={}),i},iS=t=>{const e={popup:St(),container:Rn(),actions:ma(),confirmButton:Li(),denyButton:cr(),cancelButton:ho(),loader:po(),closeButton:Dd(),validationMessage:$l(),progressSteps:Pd()};return Ft.domCache.set(t,e),e},sS=(t,e,n)=>{const i=Xl();_n(i),e.timer&&(t.timeout=new kw(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(ln(i),jn(i,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&Od(e.timer)})))},rS=(t,e)=>{if(!e.toast){if(!Wl(e.allowEnterKey)){Qm("allowEnterKey"),lS();return}oS(t)||aS(t,e)||hu(-1,1)}},oS=t=>{const e=Array.from(t.popup.querySelectorAll("[autofocus]"));for(const n of e)if(n instanceof HTMLElement&&Un(n))return n.focus(),!0;return!1},aS=(t,e)=>e.focusDeny&&Un(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&Un(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&Un(t.confirmButton)?(t.confirmButton.focus(),!0):!1,lS=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const t=new Date,e=localStorage.getItem("swal-initiation");e?(t.getTime()-Date.parse(e))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const n=document.createElement("audio");n.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",n.loop=!0,document.body.appendChild(n),setTimeout(()=>{n.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${t}`)}Yt.prototype.disableButtons=Ag;Yt.prototype.enableButtons=Tg;Yt.prototype.getInput=Sg;Yt.prototype.disableInput=Rg;Yt.prototype.enableInput=Cg;Yt.prototype.hideLoading=Al;Yt.prototype.disableLoading=Al;Yt.prototype.showValidationMessage=Pg;Yt.prototype.resetValidationMessage=Dg;Yt.prototype.close=ws;Yt.prototype.closePopup=ws;Yt.prototype.closeModal=ws;Yt.prototype.closeToast=ws;Yt.prototype.rejectPromise=bg;Yt.prototype.update=Ng;Yt.prototype._destroy=Fg;Object.assign(Yt,Fw);Object.keys(gw).forEach(t=>{Yt[t]=function(...e){return bi&&bi[t]?bi[t](...e):null}});Yt.DismissReason=mo;Yt.version="11.22.3";const Nn=Yt;Nn.default=Nn;typeof document<"u"&&function(t,e){var n=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=e);else try{n.innerHTML=e}catch{n.innerText=e}}(document,':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.1s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px $swal2-outline-color;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');const vi=(t="Success!",e="Operation completed successfully")=>Nn.fire({icon:"success",title:t,text:e,confirmButtonText:"OK",confirmButtonColor:"#10b981"}),Wt=(t="Error!",e="Something went wrong")=>Nn.fire({icon:"error",title:t,text:e,confirmButtonText:"OK",confirmButtonColor:"#ef4444"}),VL=(t="Warning!",e="Please check your input")=>Nn.fire({icon:"warning",title:t,text:e,confirmButtonText:"OK",confirmButtonColor:"#f59e0b"}),Mo=(t="Info",e="Here is some information")=>Nn.fire({icon:"info",title:t,text:e,confirmButtonText:"OK",confirmButtonColor:"#3b82f6"}),vc=(t="Are you sure?",e="This action cannot be undone")=>Nn.fire({title:t,text:e,icon:"question",showCancelButton:!0,confirmButtonColor:"#10b981",cancelButtonColor:"#6b7280",confirmButtonText:"بله، ادامه بده",cancelButtonText:"لغو"}),GL=t=>Nn.fire({confirmButtonColor:"#10b981",cancelButtonColor:"#6b7280",...t}),WL=(t="Enter value",e="Value",n="Type here...")=>Nn.fire({title:t,inputLabel:e,input:"text",inputPlaceholder:n,showCancelButton:!0,confirmButtonColor:"#10b981",cancelButtonColor:"#6b7280",confirmButtonText:"ثبت",cancelButtonText:"لغو",inputValidator:i=>{if(!i)return"You need to write something!"}}),$L=(t="Loading...")=>{Nn.fire({title:t,allowOutsideClick:!1,didOpen:()=>{Nn.showLoading()}})},XL=()=>{Nn.close()},qL=(t,e="success",n="top-end")=>{Nn.mixin({toast:!0,position:n,showConfirmButton:!1,timer:3e3,timerProgressBar:!0}).fire({icon:e,title:t})},cS={class:"editor-container overflow-auto"},uS={class:"mobile-control-bar"},dS={key:0,class:"pinned-section"},fS={class:"pinned-section-header"},hS={class:"pinned-section-title"},pS={class:"pinned-section-content"},mS={key:0,class:"pinned-dimensions"},gS={class:"dimension-inputs"},vS={class:"dimension-label"},_S={class:"dimension-label"},bS={class:"cell-size-section"},xS={class:"dimension-inputs"},yS={class:"dimension-label"},wS={class:"dimension-label"},SS={key:1,class:"pinned-direction"},MS={class:"direction-toggle"},ES={class:"direction-toggle"},TS={key:2,class:"pinned-color"},AS={class:"color-picker-container"},CS={class:"color-value"},RS={class:"recent-colors-header"},PS={class:"recent-colors-grid"},DS=["title","onClick"],LS=["onClick"],IS={key:3,class:"pinned-mode"},US={class:"mode-toggle"},OS={key:4,class:"pinned-image"},NS={class:"image-picker-container"},FS={class:"available-images-grid"},kS=["onClick"],BS=["src","alt"],HS={class:"image-name"},zS={key:5,class:"pinned-tools"},VS={class:"tools-grid"},GS=["disabled"],WS=["disabled"],$S=["disabled"],XS={key:6,class:"pinned-export"},qS={class:"grid grid-cols-2 gap-2"},jS={class:"mobile-panel-content"},YS={class:"mobile-image-section"},KS={class:"upload-section grid grid-cols-2 gap-2"},ZS={class:"upload-label"},QS={class:"upload-label"},JS={key:0,class:"image-preview"},eM=["src"],tM={class:"mobile-controls-content"},nM={class:"controls-content"},iM={class:"dimensions-section"},sM={class:"section-header"},rM=["title"],oM={class:"dimension-inputs"},aM={class:"dimension-label"},lM={class:"dimension-label"},cM={class:"cell-size-section !mt-4"},uM={class:"dimension-inputs"},dM={class:"dimension-label"},fM={class:"dimension-label"},hM={class:"direction-section"},pM={class:"section-header"},mM=["title"],gM={class:"direction-toggle"},vM={class:"direction-toggle"},_M={class:"color-section"},bM={class:"section-header"},xM=["title"],yM={class:"color-picker-container"},wM={class:"color-value"},SM={class:"recent-colors-header mt-3!"},MM={class:"recent-colors-grid"},EM=["title","onClick"],TM=["onClick"],AM={class:"mode-section"},CM={class:"section-header"},RM=["title"],PM={class:"mode-toggle"},DM={key:0,class:"mode-section"},LM={class:"section-header"},IM=["title"],UM={class:"image-picker-container"},OM={class:"available-images-grid"},NM=["onClick"],FM=["src","alt"],kM={class:"image-name"},BM={key:0,class:"recent-images-section"},HM={class:"recent-images-grid"},zM=["onClick"],VM=["src","alt"],GM=["onClick"],WM={class:"tools-section"},$M={class:"section-header"},XM=["title"],qM={class:"tools-grid"},jM=["disabled"],YM=["disabled"],KM=["disabled"],ZM={class:"background-color-section !mt-4"},QM={class:"background-mode-toggle"},JM={key:0,class:"background-color-controls"},eE={key:1,class:"background-image-controls"},tE={class:"background-image-picker"},nE={class:"background-images-grid"},iE=["onClick"],sE=["src","alt"],rE={class:"background-image-name"},oE=["disabled"],aE={class:"export-section"},lE={class:"section-header"},cE=["title"],uE={class:"grid grid-cols-2 gap-2"},dE={class:"controls-panel"},fE={class:"controls-content"},hE={class:"dimensions-section"},pE={class:"dimension-inputs"},mE={class:"dimension-label"},gE={class:"dimension-label"},vE={class:"cell-size-section !mt-4"},_E={class:"dimension-inputs"},bE={class:"dimension-label"},xE={class:"dimension-label"},yE={class:"direction-section"},wE={class:"direction-toggle"},SE={class:"direction-toggle"},ME={class:"color-section"},EE={class:"color-picker-container"},TE={class:"color-value"},AE={class:"recent-colors-header mt-3!"},CE={class:"recent-colors-grid"},RE=["title","onClick"],PE=["onClick"],DE={class:"mode-section"},LE={class:"mode-toggle"},IE={key:0,class:"image-section"},UE={class:"image-picker-container"},OE={class:"available-images-grid"},NE=["onClick"],FE=["src","alt"],kE={class:"image-name"},BE={key:0,class:"recent-images-section"},HE={class:"recent-images-grid"},zE=["onClick"],VE=["src","alt"],GE=["onClick"],WE={class:"tools-section"},$E={class:"tools-grid"},XE=["disabled"],qE=["disabled"],jE=["disabled"],YE={class:"background-color-section !mt-4"},KE={class:"background-mode-toggle"},ZE={key:0,class:"background-color-controls"},QE={key:1,class:"background-image-controls"},JE={class:"background-image-picker"},eT={class:"background-images-grid"},tT=["onClick"],nT=["src","alt"],iT={class:"background-image-name"},sT=["disabled"],rT={class:"export-section"},oT={class:"grid grid-cols-2 gap-2"},aT={class:"image-section max-h-[70%]"},lT={class:"upload-section grid grid-cols-2 gap-2"},cT={class:"upload-label"},uT={class:"upload-label"},dT={key:0,class:"image-preview"},fT=["src"],hT=["onClick"],pT={__name:"GridEditor",emits:["update-grid"],setup(t,{emit:e}){const n=e,i=at(16),s=at(80),r=at(15),o=at(17),a=at("#ff0000"),l=at([]),c=at(null),u=at(()=>{try{const B=localStorage.getItem("gridEditor_isVertical");return console.log("saved",B),B!==null?JSON.parse(B):!0}catch{return!0}}),d=at(!0),f=at(null),h=at("color"),v=at(null),g=at([]),m=at([]),p=at(!1),C=at(null);function R(){p.value=!p.value}function w(B){C.value===B?C.value=null:(C.value=B,p.value=!1)}function U(){C.value=null}function L(B){return{dimensions:"📐 ابعاد شبکه",direction:"🔄 جهت",color:"🎨 انتخاب رنگ",mode:"🎨 حالت طراحی",image:"🖼️ انتخاب تصویر مهره",tools:"🛠️ ابزارها",export:"📤 خروجی"}[B]||B}const D=at([]);function k(){try{const B={grid:D.value,rows:i.value,cols:s.value,cellWidth:r.value,cellHeight:o.value,isVertical:u.value,isVerticalGrid:d.value,recentColors:l.value,recentImages:g.value,timestamp:new Date().toISOString()};localStorage.setItem("gridEditorData",JSON.stringify(B)),c.value=B.timestamp,vi("ذخیره شد","گرید با موفقیت ذخیره شد")}catch(B){Wt("خطا در ذخیره","خطا در ذخیره گرید: "+B.message),console.error("Error saving grid:",B)}}function E(){try{const B=localStorage.getItem("gridEditorData");if(B){const y=JSON.parse(B);return y.grid&&Array.isArray(y.grid)&&y.rows&&y.cols&&y.grid.length===y.rows*y.cols?(i.value=y.rows,s.value=y.cols,D.value=[...y.grid],y.cellWidth&&typeof y.cellWidth=="number"&&(r.value=y.cellWidth),y.cellHeight&&typeof y.cellHeight=="number"&&(o.value=y.cellHeight),typeof y.isVertical=="boolean"&&(u.value=y.isVertical),typeof y.isVerticalGrid=="boolean"&&(d.value=y.isVerticalGrid),y.recentColors&&Array.isArray(y.recentColors)&&(l.value=[...y.recentColors]),y.recentImages&&Array.isArray(y.recentImages)&&(g.value=[...y.recentImages]),c.value=y.timestamp,it.stacks=[],it.index=-1,je(),n("update-grid",ke()),!0):(localStorage.removeItem("gridEditorData"),Mo("اطلاعات","داده‌های ذخیره شده نامعتبر بودند و حذف شدند"),!1)}return!1}catch(B){return Wt("خطا در بارگذاری","خطا در بارگذاری گرید: "+B.message),console.error("Error loading grid:",B),localStorage.removeItem("gridEditorData"),!1}}uo(()=>{const B=E();if(u.value=localStorage.getItem("gridEditor_isVertical")!==null?JSON.parse(localStorage.getItem("gridEditor_isVertical")):!0,!B){const y=i.value*s.value;D.value=Array(y).fill("#ffffff"),je()}A()});function A(){const B=["310.jpg","1130.jpg","1135.jpg","2116.jpg","2131.jpg","2132.jpg","725.jpg","877.jpg","f111.jpg","f222.jpg","f333.jpg","f444.jpg","f555.jpg","f666.jpg","f777.jpg","f888.jpg","f999.jpg","f1010.jpg","f1111.jpg","f1212.jpg","f1313.jpg","f1414.jpg","f1515.jpg","Awhite.jpg"];m.value=B.map(y=>({name:y,url:`/miyuki-beads-designer/beads/${y}`,displayName:y.replace(".jpg","")}))}const T=at([]),I=at([]),O=at({width:0,height:0}),G=at({x:0,y:0}),ie=at(!1),$=at("paint");let ue=!1,Y=null,ye=!1,Te=!1,Ne=!1,$e=-1;const it=la({stacks:[],index:-1});function je(){it.stacks=it.stacks.slice(0,it.index+1),it.stacks.push([...D.value]),it.index++}function oe(){it.index>0&&(it.index--,D.value=[...it.stacks[it.index]])}function we(){it.index<it.stacks.length-1&&(it.index++,D.value=[...it.stacks[it.index]])}je();function H(B){const y=B.target.files[0];if(y){const N=new FileReader;N.onload=pe=>{try{const Me=pe.target.result.trim(),Be=JSON.parse(Me);if(Be.grid&&Be.rows&&Be.cols){const{grid:Qe,rows:rt,cols:ot}=Be;Array.isArray(Qe)&&Qe.every(Xe=>typeof Xe=="string"&&(Xe.match(/^#[0-9A-Fa-f]{6}$/)||Xe.startsWith("/miyuki-beads-designer/beads/")))?Qe.length===rt*ot?(i.value=rt,s.value=ot,Be.cellWidth&&typeof Be.cellWidth=="number"&&(r.value=Be.cellWidth),Be.cellHeight&&typeof Be.cellHeight=="number"&&(o.value=Be.cellHeight),typeof Be.isVertical=="boolean"&&(u.value=Be.isVertical),typeof Be.isVerticalGrid=="boolean"&&(d.value=Be.isVerticalGrid),ua(()=>{D.value=[...Qe],je(),vi("بارگذاری شد",`گرید ${rt}×${ot} با موفقیت بارگذاری شد`)})):Wt("خطا در ابعاد",`تعداد سلول‌ها (${Qe.length}) با ابعاد اعلام شده (${rt}×${ot}) مطابقت ندارد`):Wt("خطا در فرمت فایل","فایل باید شامل آرایه‌ای معتبر از رنگ‌ها یا تصاویر باشد")}else if(Array.isArray(Be)){const Qe=Be;Qe.every(rt=>typeof rt=="string"&&(rt.match(/^#[0-9A-Fa-f]{6}$/)||rt.startsWith("/miyuki-beads-designer/beads/")))?Qe.length===i.value*s.value?(D.value=[...Qe],je(),vi("بارگذاری شد",`گرید با ابعاد فعلی (${i.value}×${s.value}) بارگذاری شد`)):Wt("خطا در ابعاد",`تعداد سلول‌ها (${Qe.length}) با ابعاد فعلی (${i.value}×${s.value}) مطابقت ندارد. لطفاً ابعاد را تنظیم کنید یا از فایل با فرمت جدید استفاده کنید.`):Wt("خطا در فرمت فایل","فایل باید شامل آرایه‌ای معتبر از رنگ‌ها یا تصاویر باشد")}else Wt("خطا در فرمت فایل","فرمت فایل نامعتبر است. فایل باید شامل آرایه‌ای از رنگ‌ها/تصاویر یا آبجکتی با grid، rows و cols باشد.")}catch(Me){Wt("خطا در خواندن فایل","خطا در خواندن فایل: "+Me.message),console.error("Error parsing text file:",Me)}},N.readAsText(y)}}Xn([i,s],()=>{const B=i.value*s.value;D.value.length!==B&&(D.value=Array(B).fill("#ffffff"),I.value=[],O.value={width:0,height:0},T.value=[],ie.value=!1,je())},{immediate:!0}),Xn(D,()=>{setTimeout(()=>{try{const B={grid:D.value,rows:i.value,cols:s.value,recentColors:l.value,recentImages:g.value,timestamp:new Date().toISOString()};localStorage.setItem("gridEditorData",JSON.stringify(B)),c.value=B.timestamp}catch(B){console.error("Error auto-saving grid:",B)}},1e3)},{deep:!0}),Xn(u,B=>{try{localStorage.setItem("gridEditor_isVertical",JSON.stringify(B)),console.log("isVertical saved",B)}catch(y){console.error("Error saving isVertical to localStorage:",y)}},{immediate:!1});function ae(B){$.value=B,T.value=[],B!=="paste"&&(ie.value=!1)}function re(){return I.value&&I.value.length>0&&O.value.width>0}function me(B){ue=!0;const y=F(B);$.value==="paint"?ee(y):$.value==="fill"?x(y,D.value[y],a.value):$.value==="select"&&(Y=y,T.value=[y],ye=!0)}function Ke(){ue&&je(),ue=!1,Y=null}function P(B){if(!ue)return;const y=F(B);$.value==="paint"?ee(y):$.value==="select"&&ye&&(T.value=Z(Y,y))}function _(B){B.preventDefault();const y=B.touches;if(Te=y.length>1,y.length===1){const N=y[0],pe=document.elementFromPoint(N.clientX,N.clientY);if(pe&&pe.classList.contains("cell")){const Me=Array.from(pe.parentNode.children).indexOf(pe);$e=Me,Ne=!0,$.value==="paint"?ee(Me):$.value==="fill"?(x(Me,D.value[Me],a.value),je()):$.value==="select"&&(Y=Me,T.value=[Me],ye=!0)}}else Ne=!1}function V(B){const y=B.touches;if(y.length===1&&Ne&&!Te){B.preventDefault();const N=y[0],pe=document.elementFromPoint(N.clientX,N.clientY);if(pe&&pe.classList.contains("cell")){const Me=Array.from(pe.parentNode.children).indexOf(pe);Me!==$e&&($e=Me,$.value==="paint"?ee(Me):$.value==="select"&&ye&&(T.value=Z(Y,Me)))}}else y.length>1&&(Te=!0,Ne=!1)}function j(){Ne&&!Te&&$.value==="paint"&&je(),Ne=!1,Te=!1,$e=-1,Y=null,ye=!1}function ee(B){h.value==="color"?(D.value[B]=a.value,q(a.value)):h.value==="image"&&v.value&&(D.value[B]=v.value.url,ge(v.value))}function q(B){const y=l.value.indexOf(B);y>-1&&l.value.splice(y,1),l.value.unshift(B),l.value.length>10&&(l.value=l.value.slice(0,10))}function ge(B){const y=g.value.findIndex(N=>N.url===B.url);y>-1&&g.value.splice(y,1),g.value.unshift(B),g.value.length>10&&(g.value=g.value.slice(0,10))}function J(B){v.value=B,ge(B)}function ce(B){const y=g.value.findIndex(N=>N.url===B.url);y>-1&&g.value.splice(y,1)}async function fe(){(await vc("پاک کردن تصاویر","آیا می‌خواهید تمام تصاویر اخیر پاک شوند؟")).isConfirmed&&(g.value=[])}function Pe(B){const y=l.value.indexOf(B);y>-1&&l.value.splice(y,1)}async function S(){(await vc("پاک کردن رنگ‌ها","آیا می‌خواهید تمام رنگ‌های اخیر پاک شوند؟")).isConfirmed&&(l.value=[])}function x(B,y,N){if(y===N)return;const pe=[B],Me=new Set;for(;pe.length;){const Be=pe.pop();if(Me.has(Be)||D.value[Be]!==y)continue;Me.add(Be),D.value[Be]=N;const Qe=Be%i.value,rt=Math.floor(Be/i.value);if(Qe>0){const ot=Be-1;!Me.has(ot)&&D.value[ot]===y&&pe.push(ot)}if(Qe<i.value-1){const ot=Be+1;!Me.has(ot)&&D.value[ot]===y&&pe.push(ot)}if(rt>0){const ot=Be-i.value;!Me.has(ot)&&D.value[ot]===y&&pe.push(ot)}if(rt<s.value-1){const ot=Be+i.value;!Me.has(ot)&&D.value[ot]===y&&pe.push(ot)}}q(N)}function F(B){const y=B.target;return Array.from(y.parentNode.children).indexOf(y)}function Z(B,y){const N=B%i.value,pe=Math.floor(B/i.value),Me=y%i.value,Be=Math.floor(y/i.value),Qe=Math.min(N,Me),rt=Math.max(N,Me),ot=Math.min(pe,Be),Xe=Math.max(pe,Be),mt=[];for(let Ht=ot;Ht<=Xe;Ht++)for(let bn=Qe;bn<=rt;bn++){const ts=Ht*i.value+bn;ts>=0&&ts<D.value.length&&mt.push(ts)}return mt}function le(B){if($.value==="paint")ee(B),je();else if($.value==="fill")x(B,D.value[B],a.value),je();else if($.value==="paste"&&ie.value){const y=B%i.value,N=Math.floor(B/i.value);G.value={x:y,y:N},Fe()}}function K(){if(T.value.length===0){Wt("خطا","ابتدا یک ناحیه انتخاب کنید");return}const B=i.value,y=Math.min(...T.value.map(rt=>rt%B)),N=Math.max(...T.value.map(rt=>rt%B)),pe=Math.min(...T.value.map(rt=>Math.floor(rt/B))),Me=Math.max(...T.value.map(rt=>Math.floor(rt/B))),Be=N-y+1,Qe=Me-pe+1;O.value={width:Be,height:Qe},I.value=[];for(let rt=0;rt<Qe;rt++){const ot=[];for(let Xe=0;Xe<Be;Xe++){const mt=(pe+rt)*B+(y+Xe);ot.push(D.value[mt])}I.value.push(ot)}}function Le(){if(T.value.length===0){Wt("خطا","ابتدا یک ناحیه انتخاب کنید");return}K(),T.value.forEach(B=>D.value[B]="#ffffff"),je()}function ve(){if(!re()){Wt("خطا","هیچ چیزی برای چسباندن وجود ندارد");return}let B=0,y=0;if(T.value.length>0){const N=i.value;B=Math.min(...T.value.map(pe=>pe%N)),y=Math.min(...T.value.map(pe=>Math.floor(pe/N)))}else B=Math.floor((i.value-O.value.width)/2),y=Math.floor((s.value-O.value.height)/2);for(let N=0;N<O.value.height;N++)for(let pe=0;pe<O.value.width;pe++){const Me=B+pe,Be=y+N;if(Me>=0&&Me<i.value&&Be>=0&&Be<s.value){const Qe=Be*i.value+Me;I.value[N]&&I.value[N][pe]&&(D.value[Qe]=I.value[N][pe])}}je()}function Ie(){T.value=[],ye=!1}function Ue(){if(T.value.length===0){Wt("خطا","ابتدا یک ناحیه انتخاب کنید");return}try{const B=i.value,y=Math.min(...T.value.map(Xe=>Xe%B)),N=Math.max(...T.value.map(Xe=>Xe%B)),pe=Math.min(...T.value.map(Xe=>Math.floor(Xe/B))),Me=Math.max(...T.value.map(Xe=>Math.floor(Xe/B))),Be=N-y+1,Qe=Me-pe+1,rt=[];for(let Xe=0;Xe<Qe;Xe++){const mt=[];for(let Ht=0;Ht<Be;Ht++){const bn=(pe+Xe)*B+(y+Ht);T.value.includes(bn)?mt.push(D.value[bn]):mt.push("#ffffff")}rt.push(mt)}const ot=rt.map(Xe=>Xe.reverse());for(let Xe=0;Xe<Qe;Xe++)for(let mt=0;mt<Be;mt++){const Ht=(pe+Xe)*B+(y+mt);T.value.includes(Ht)&&(D.value[Ht]=ot[Xe][mt])}je(),vi("آینه شد","طرح انتخاب شده با موفقیت آینه شد")}catch(B){Wt("خطا در آینه کردن","خطا در آینه کردن طرح: "+B.message),console.error("Error mirroring selection:",B)}}function _e(){if(T.value.length===0){Wt("خطا","ابتدا یک ناحیه انتخاب کنید");return}try{const B=i.value,y=Math.min(...T.value.map(Xe=>Xe%B)),N=Math.max(...T.value.map(Xe=>Xe%B)),pe=Math.min(...T.value.map(Xe=>Math.floor(Xe/B))),Me=Math.max(...T.value.map(Xe=>Math.floor(Xe/B))),Be=N-y+1,Qe=Me-pe+1,rt=[];for(let Xe=0;Xe<Qe;Xe++){const mt=[];for(let Ht=0;Ht<Be;Ht++){const bn=(pe+Xe)*B+(y+Ht);T.value.includes(bn)?mt.push(D.value[bn]):mt.push("#ffffff")}rt.push(mt)}const ot=rt.reverse();for(let Xe=0;Xe<Qe;Xe++)for(let mt=0;mt<Be;mt++){const Ht=(pe+Xe)*B+(y+mt);T.value.includes(Ht)&&(D.value[Ht]=ot[Xe][mt])}je(),vi("آینه عمودی شد","طرح انتخاب شده با موفقیت به صورت عمودی آینه شد")}catch(B){Wt("خطا در آینه عمودی","خطا در آینه عمودی کردن طرح: "+B.message),console.error("Error vertical mirroring selection:",B)}}function Ce(){if(!re()){Wt("خطا","هیچ چیزی برای چسباندن وجود ندارد");return}const B=Math.floor((i.value-O.value.width)/2),y=Math.floor((s.value-O.value.height)/2);for(let N=0;N<O.value.height;N++)for(let pe=0;pe<O.value.width;pe++){const Me=B+pe,Be=y+N;if(Me>=0&&Me<i.value&&Be>=0&&Be<s.value){const Qe=Be*i.value+Me;I.value[N]&&I.value[N][pe]&&(D.value[Qe]=I.value[N][pe])}}je()}function He(){if(!re()){Wt("خطا","هیچ چیزی برای چسباندن وجود ندارد");return}ie.value=!0,$.value="paste",T.value=[],Mo("انتخاب موقعیت","حالا روی صفحه کلیک کنید تا موقعیت چسباندن را انتخاب کنید")}function Fe(){if(!re()){Wt("خطا","هیچ چیزی برای چسباندن وجود ندارد");return}for(let B=0;B<O.value.height;B++)for(let y=0;y<O.value.width;y++){const N=G.value.x+y,pe=G.value.y+B;if(N>=0&&N<i.value&&pe>=0&&pe<s.value){const Me=pe*i.value+N;I.value[B]&&I.value[B][y]&&(D.value[Me]=I.value[B][y])}}je(),ie.value=!1,$.value="paint"}function Ae(){ie.value=!1,$.value="paint",Mo("لغو شد","حالت چسباندن لغو شد")}async function lt(B,y,N,pe,Me,Be){if(Be.startsWith("/miyuki-beads-designer/beads/"))try{const Qe=new Image;Qe.crossOrigin="anonymous",await new Promise((rt,ot)=>{Qe.onload=rt,Qe.onerror=ot,Qe.src=Be}),B.drawImage(Qe,y,N,pe,Me)}catch(Qe){console.warn("Failed to load image:",Be,Qe),B.fillStyle="#cccccc",B.fillRect(y,N,pe,Me)}else B.fillStyle=Be,B.fillRect(y,N,pe,Me)}async function z(){try{Mo("در حال پردازش...","لطفاً صبر کنید، در حال ایجاد عکس...");const B=document.createElement("canvas"),y=B.getContext("2d"),N=20,pe=i.value*r.value+N*2,Me=s.value*o.value+N*2;B.width=pe,B.height=Me,y.fillStyle="#ffffff",y.fillRect(0,0,pe,Me);for(let Be=0;Be<s.value;Be++)for(let Qe=0;Qe<i.value;Qe++){const rt=Be*i.value+Qe,ot=D.value[rt];if(ot){const Xe=N+Qe*r.value,mt=N+Be*o.value;await lt(y,Xe,mt,r.value,o.value,ot),y.strokeStyle="#e0e0e0",y.lineWidth=.5,y.strokeRect(Xe,mt,r.value,o.value)}}y.fillStyle="#000000",y.font="16px Arial",y.textAlign="center",y.fillText(`Grid: ${i.value}×${s.value}`,pe/2,N/2+10),B.toBlob(Be=>{const Qe=URL.createObjectURL(Be),rt=document.createElement("a");rt.href=Qe,rt.download=`grid_${i.value}x${s.value}_${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.png`,document.body.appendChild(rt),rt.click(),document.body.removeChild(rt),URL.revokeObjectURL(Qe),vi("موفقیت","عکس با موفقیت دانلود شد!")},"image/png")}catch(B){Wt("خطا در خروجی","خطا در ایجاد عکس: "+B.message),console.error("Error exporting grid as image:",B)}}async function xe(){try{Mo("در حال پردازش...","لطفاً صبر کنید، در حال ایجاد عکس HD...");const B=document.createElement("canvas"),y=B.getContext("2d"),N=r.value*2,pe=o.value*2,Me=40,Be=i.value*N+Me*2,Qe=s.value*pe+Me*2;B.width=Be,B.height=Qe,y.fillStyle="#ffffff",y.fillRect(0,0,Be,Qe);for(let ot=0;ot<s.value;ot++)for(let Xe=0;Xe<i.value;Xe++){const mt=ot*i.value+Xe,Ht=D.value[mt];if(Ht){const bn=Me+Xe*N,ts=Me+ot*pe;await lt(y,bn,ts,N,pe,Ht),y.strokeStyle="#d0d0d0",y.lineWidth=1,y.strokeRect(bn,ts,N,pe)}}y.fillStyle="#000000",y.font="bold 24px Arial",y.textAlign="center",y.fillText(`Grid: ${i.value}×${s.value}`,Be/2,Me/2+20),y.font="16px Arial",y.fillStyle="#666666";const rt=new Date().toLocaleString("fa-IR");y.fillText(rt,Be/2,Qe-Me/2),B.toBlob(ot=>{const Xe=URL.createObjectURL(ot),mt=document.createElement("a");mt.href=Xe,mt.download=`grid_HD_${i.value}x${s.value}_${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.png`,document.body.appendChild(mt),mt.click(),document.body.removeChild(mt),URL.revokeObjectURL(Xe),vi("موفقیت","عکس HD با موفقیت دانلود شد!")},"image/png",1)}catch(B){Wt("خطا در خروجی","خطا در ایجاد عکس HD: "+B.message),console.error("Error exporting grid as high quality image:",B)}}function Ee(){try{const B={grid:D.value,rows:i.value,cols:s.value,cellWidth:r.value,cellHeight:o.value,isVertical:u.value,isVerticalGrid:d.value,timestamp:new Date().toISOString()},y=JSON.stringify(B,null,2),N=new Blob([y],{type:"text/plain;charset=utf-8"}),pe=URL.createObjectURL(N),Me=document.createElement("a");Me.href=pe,Me.download=`grid_${i.value}x${s.value}_${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.txt`,document.body.appendChild(Me),Me.click(),document.body.removeChild(Me),URL.revokeObjectURL(pe),vi("موفقیت","فایل TXT با موفقیت دانلود شد!")}catch(B){Wt("خطا در خروجی","خطا در ایجاد فایل TXT: "+B.message),console.error("Error exporting grid as TXT:",B)}}function ke(){const B=[];for(let y=0;y<s.value;y++){const N=[];for(let pe=0;pe<i.value;pe++)N.push(D.value[y*i.value+pe]);B.push(N)}return B}function be(B){const y=B.target.files[0];f.value=URL.createObjectURL(y)}const he=at("#ffffff"),Re=at("color"),qe=at(null);async function Mt(){let B,y;if(Re.value==="color")B=he.value,y=`آیا می‌خواهید تمام مهره‌ها به رنگ ${B} تغییر یابند؟ این عملیات غیرقابل برگشت است.`;else if(Re.value==="image"&&qe.value)B=qe.value.url,y=`آیا می‌خواهید تمام مهره‌ها به تصویر ${qe.value.displayName} تغییر یابند؟ این عملیات غیرقابل برگشت است.`;else{Wt("خطا","لطفاً یک رنگ یا تصویر انتخاب کنید");return}if((await vc("تغییر تمام مهره‌ها",y)).isConfirmed){const pe=i.value*s.value;for(let Me=0;Me<pe;Me++)D.value[Me]=B;je(),Re.value==="color"?(q(B),vi("تغییر رنگ",`تمام مهره‌ها به رنگ ${B} تغییر یافتند`)):(ge(qe.value),vi("تغییر تصویر",`تمام مهره‌ها به تصویر ${qe.value.displayName} تغییر یافتند`))}}return(B,y)=>(Ve(),We("div",cS,[b("div",uS,[b("button",{class:et(["mobile-menu-btn",{active:p.value}]),onClick:R},y[58]||(y[58]=[b("span",{class:"menu-icon"},"☰",-1),b("span",{class:"menu-text"},"ابزارها",-1)]),2),y[59]||(y[59]=b("div",{class:"mobile-title"},"🎨 ویرایشگر شبکه",-1))]),C.value?(Ve(),We("div",dS,[b("div",fS,[b("h4",hS,ct(L(C.value)),1),b("button",{class:"unpin-btn",title:"Unpin Section",onClick:U}," ✕ ")]),b("div",pS,[C.value==="dimensions"?(Ve(),We("div",mS,[b("div",gS,[b("label",vS,[y[60]||(y[60]=b("span",{class:"dimension-text"},"ستون ها:",-1)),Zt(b("input",{"onUpdate:modelValue":y[0]||(y[0]=N=>i.value=N),type:"number",min:"1",class:"dimension-input"},null,512),[[en,i.value,void 0,{number:!0}]])]),b("label",_S,[y[61]||(y[61]=b("span",{class:"dimension-text"},"ردیف ها:",-1)),Zt(b("input",{"onUpdate:modelValue":y[1]||(y[1]=N=>s.value=N),type:"number",min:"1",class:"dimension-input"},null,512),[[en,s.value,void 0,{number:!0}]])])]),b("div",bS,[y[64]||(y[64]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"📏 اندازه سلول",-1)),b("div",xS,[b("label",yS,[y[62]||(y[62]=b("span",{class:"dimension-text"},"عرض:",-1)),Zt(b("input",{"onUpdate:modelValue":y[2]||(y[2]=N=>r.value=N),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[en,r.value,void 0,{number:!0}]])]),b("label",wS,[y[63]||(y[63]=b("span",{class:"dimension-text"},"ارتفاع:",-1)),Zt(b("input",{"onUpdate:modelValue":y[3]||(y[3]=N=>o.value=N),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[en,o.value,void 0,{number:!0}]])])])])])):Pt("",!0),C.value==="direction"?(Ve(),We("div",SS,[b("div",MS,[b("button",{class:et(["direction-btn",{active:u.value}]),onClick:y[4]||(y[4]=N=>u.value=!u.value)},ct(u.value?"عمودی":"افقی"),3)]),b("div",ES,[b("button",{class:et(["direction-btn",{active:d.value}]),onClick:y[5]||(y[5]=N=>d.value=!d.value)},ct(d.value?"گرید عمودی":"گرید افقی"),3)])])):Pt("",!0),C.value==="color"?(Ve(),We("div",TS,[b("div",AS,[Zt(b("input",{"onUpdate:modelValue":y[6]||(y[6]=N=>a.value=N),type:"color",class:"color-picker"},null,512),[[en,a.value]]),b("span",CS,ct(a.value),1)]),b("div",RS,[y[65]||(y[65]=b("h4",{class:"text-sm font-semibold text-gray-700"},"🔄 رنگ‌های اخیر",-1)),l.value.length>0?(Ve(),We("button",{key:0,class:"clear-colors-btn",title:"پاک کردن تمام رنگ‌ها",onClick:S}," 🗑️ پاک کردن ")):Pt("",!0)]),b("div",PS,[(Ve(!0),We(Bt,null,Mn(l.value,N=>(Ve(),We("div",{key:N,class:"color-swatch",style:Wn({backgroundColor:N}),title:N,onClick:pe=>a.value=N},[b("button",{class:"remove-color-btn",onClick:yo(pe=>Pe(N),["stop"])}," × ",8,LS)],12,DS))),128))])])):Pt("",!0),C.value==="mode"?(Ve(),We("div",IS,[b("div",US,[b("button",{class:et(["mode-btn",{active:h.value==="color"}]),onClick:y[7]||(y[7]=N=>h.value="color")}," 🎨 رنگ ",2),b("button",{class:et(["mode-btn",{active:h.value==="image"}]),onClick:y[8]||(y[8]=N=>h.value="image")}," 🖼️ تصویر ",2)])])):Pt("",!0),C.value==="image"?(Ve(),We("div",OS,[b("div",NS,[b("div",FS,[(Ve(!0),We(Bt,null,Mn(m.value,N=>{var pe;return Ve(),We("div",{key:N.name,class:et(["image-item",{selected:((pe=v.value)==null?void 0:pe.url)===N.url}]),onClick:Me=>J(N)},[b("img",{src:N.url,alt:N.displayName,class:"bead-image"},null,8,BS),b("span",HS,ct(N.displayName),1)],10,kS)}),128))])])])):Pt("",!0),C.value==="tools"?(Ve(),We("div",zS,[b("div",VS,[b("button",{class:et(["tool-btn primary",{active:$.value==="paint"}]),onClick:y[9]||(y[9]=N=>ae("paint"))}," 🖌️ Paint ",2),b("button",{class:et(["tool-btn primary",{active:$.value==="fill"}]),onClick:y[10]||(y[10]=N=>ae("fill"))}," 🪣 Fill ",2),b("button",{class:et(["tool-btn secondary",{active:$.value==="select"}]),onClick:y[11]||(y[11]=N=>ae("select"))}," 📐 Select ",2),b("button",{class:"tool-btn secondary",onClick:K}," 📋 Copy "),b("button",{class:"tool-btn secondary",onClick:Le}," ✂️ Cut "),b("button",{class:"tool-btn secondary",onClick:ve}," 📥 Paste "),b("button",{class:"tool-btn secondary",onClick:Ce}," 📍 Paste at Center "),b("button",{class:"tool-btn secondary",disabled:!re(),onClick:He}," 🎯 Select Paste Position ",8,GS),ie.value?(Ve(),We("button",{key:0,class:"tool-btn danger",onClick:Ae}," ❌ Cancel Paste ")):Pt("",!0),b("button",{class:"tool-btn secondary",onClick:Ie}," 🗑️ Clear Selection "),b("button",{class:"tool-btn secondary",disabled:T.value.length===0,onClick:Ue}," 🔄 Mirror Selection ",8,WS),b("button",{class:"tool-btn secondary",disabled:T.value.length===0,onClick:_e}," ↕️ Mirror Selection Vertical ",8,$S),b("button",{class:"tool-btn secondary",onClick:oe}," ↩️ Undo "),b("button",{class:"tool-btn secondary",onClick:we}," ↪️ Redo ")])])):Pt("",!0),C.value==="export"?(Ve(),We("div",XS,[b("div",{class:"save-load-buttons"},[b("button",{class:"export-btn success",onClick:k}," 💾 ذخیره گرید "),b("button",{class:"export-btn info",onClick:E}," 📂 بارگذاری اخرین ذخیره ")]),b("div",qS,[b("button",{class:"export-btn primary",onClick:y[12]||(y[12]=N=>B.$emit("update-grid",ke()))}," 🚀 ارسال به 3D "),b("button",{class:"export-btn success",onClick:y[13]||(y[13]=()=>z())}," 📷 خروجی عکس "),b("button",{class:"export-btn info",onClick:y[14]||(y[14]=()=>xe())}," 🖼️ خروجی HD "),b("button",{class:"export-btn warning",onClick:Ee}," 📄 خروجی TXT ")])])):Pt("",!0)])])):Pt("",!0),b("div",{class:et(["mobile-dropdown-panel",{open:p.value}])},[b("div",jS,[b("div",YS,[b("div",KS,[b("label",ZS,[y[66]||(y[66]=b("span",{class:"upload-text"},"📁 آپلود فایل txt grid",-1)),b("input",{type:"file",accept:".txt",class:"upload-input",onChange:H},null,32)]),b("label",QS,[y[67]||(y[67]=b("span",{class:"upload-text"},"📁 آپلود تصویر",-1)),b("input",{type:"file",accept:"image/*",class:"upload-input",onChange:be},null,32)])]),f.value?(Ve(),We("div",JS,[b("img",{src:f.value,alt:"تصویر انتخاب شده",class:"preview-image"},null,8,eM)])):Pt("",!0)]),b("div",tM,[y[83]||(y[83]=b("div",{class:"controls-header"},[b("h3",{class:"mb-4 text-lg font-bold text-gray-800"},"🎨 ابزارهای طراحی")],-1)),b("div",nM,[b("div",iM,[b("div",sM,[y[68]||(y[68]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 📐 ابعاد شبکه ",-1)),b("button",{class:et(["pin-btn",{pinned:C.value==="dimensions"}]),title:C.value==="dimensions"?"Unpin Section":"Pin Section",onClick:y[15]||(y[15]=N=>w("dimensions"))},ct((C.value==="dimensions","📌")),11,rM)]),b("div",oM,[b("label",aM,[y[69]||(y[69]=b("span",{class:"dimension-text"},"ستون ها:",-1)),Zt(b("input",{"onUpdate:modelValue":y[16]||(y[16]=N=>i.value=N),type:"number",min:"1",class:"dimension-input"},null,512),[[en,i.value,void 0,{number:!0}]])]),b("label",lM,[y[70]||(y[70]=b("span",{class:"dimension-text"},"ردیف ها:",-1)),Zt(b("input",{"onUpdate:modelValue":y[17]||(y[17]=N=>s.value=N),type:"number",min:"1",class:"dimension-input"},null,512),[[en,s.value,void 0,{number:!0}]])])]),b("div",cM,[y[73]||(y[73]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 📏 اندازه سلول ",-1)),b("div",uM,[b("label",dM,[y[71]||(y[71]=b("span",{class:"dimension-text"},"عرض:",-1)),Zt(b("input",{"onUpdate:modelValue":y[18]||(y[18]=N=>r.value=N),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[en,r.value,void 0,{number:!0}]])]),b("label",fM,[y[72]||(y[72]=b("span",{class:"dimension-text"},"ارتفاع:",-1)),Zt(b("input",{"onUpdate:modelValue":y[19]||(y[19]=N=>o.value=N),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[en,o.value,void 0,{number:!0}]])])])])]),b("div",hM,[b("div",pM,[y[74]||(y[74]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🔄 جهت ",-1)),b("button",{class:et(["pin-btn",{pinned:C.value==="direction"}]),title:C.value==="direction"?"Unpin Section":"Pin Section",onClick:y[20]||(y[20]=N=>w("direction"))},ct((C.value==="direction","📌")),11,mM)]),b("div",gM,[b("button",{class:et(["direction-btn",{active:u.value}]),onClick:y[21]||(y[21]=N=>u.value=!u.value)},ct(u.value?"عمودی":"افقی"),3)]),b("div",vM,[b("button",{class:et(["direction-btn",{active:d.value}]),onClick:y[22]||(y[22]=N=>d.value=!d.value)},ct(d.value?"گرید عمودی":"گرید افقی"),3)])]),b("div",_M,[b("div",bM,[y[75]||(y[75]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🎨 انتخاب رنگ ",-1)),b("button",{class:et(["pin-btn",{pinned:C.value==="color"}]),title:C.value==="color"?"Unpin Section":"Pin Section",onClick:y[23]||(y[23]=N=>w("color"))},ct((C.value==="color","📌")),11,xM)]),b("div",yM,[Zt(b("input",{"onUpdate:modelValue":y[24]||(y[24]=N=>a.value=N),type:"color",class:"color-picker"},null,512),[[en,a.value]]),b("span",wM,ct(a.value),1)]),b("div",SM,[y[76]||(y[76]=b("h4",{class:"text-sm font-semibold text-gray-700"},"🔄 رنگ‌های اخیر",-1)),l.value.length>0?(Ve(),We("button",{key:0,class:"clear-colors-btn",title:"پاک کردن تمام رنگ‌ها",onClick:S}," 🗑️ پاک کردن ")):Pt("",!0)]),b("div",MM,[(Ve(!0),We(Bt,null,Mn(l.value,N=>(Ve(),We("div",{key:N,class:"color-swatch",style:Wn({backgroundColor:N}),title:N,onClick:pe=>a.value=N},[b("button",{class:"remove-color-btn",onClick:yo(pe=>Pe(N),["stop"])}," × ",8,TM)],12,EM))),128))])]),b("div",AM,[b("div",CM,[y[77]||(y[77]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🎨 حالت طراحی ",-1)),b("button",{class:et(["pin-btn",{pinned:C.value==="mode"}]),title:C.value==="mode"?"Unpin Section":"Pin Section",onClick:y[25]||(y[25]=N=>w("mode"))},ct((C.value==="mode","📌")),11,RM)]),b("div",PM,[b("button",{class:et(["mode-btn",{active:h.value==="color"}]),onClick:y[26]||(y[26]=N=>h.value="color")}," 🎨 رنگ ",2),b("button",{class:et(["mode-btn",{active:h.value==="image"}]),onClick:y[27]||(y[27]=N=>h.value="image")}," 🖼️ تصویر ",2)])]),h.value==="image"?(Ve(),We("div",DM,[b("div",LM,[y[78]||(y[78]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🖼️ انتخاب تصویر مهره ",-1)),b("button",{class:et(["pin-btn",{pinned:C.value==="image"}]),title:C.value==="image"?"Unpin Section":"Pin Section",onClick:y[28]||(y[28]=N=>w("image"))},ct((C.value==="image","📌")),11,IM)]),b("div",UM,[b("div",OM,[(Ve(!0),We(Bt,null,Mn(m.value,N=>{var pe;return Ve(),We("div",{key:N.name,class:et(["image-item",{selected:((pe=v.value)==null?void 0:pe.url)===N.url}]),onClick:Me=>J(N)},[b("img",{src:N.url,alt:N.displayName,class:"bead-image"},null,8,FM),b("span",kM,ct(N.displayName),1)],10,NM)}),128))])]),g.value.length>0?(Ve(),We("div",BM,[b("div",{class:"recent-images-header"},[y[79]||(y[79]=b("h4",{class:"text-sm font-semibold text-gray-700"},"🔄 تصاویر اخیر",-1)),b("button",{class:"clear-images-btn",title:"پاک کردن تمام تصاویر",onClick:fe}," 🗑️ پاک کردن ")]),b("div",HM,[(Ve(!0),We(Bt,null,Mn(g.value,N=>{var pe;return Ve(),We("div",{key:N.url,class:et(["recent-image-item",{selected:((pe=v.value)==null?void 0:pe.url)===N.url}]),onClick:Me=>J(N)},[b("img",{src:N.url,alt:N.displayName,class:"recent-bead-image"},null,8,VM),b("button",{class:"remove-image-btn",onClick:yo(Me=>ce(N),["stop"])}," × ",8,GM)],10,zM)}),128))])])):Pt("",!0)])):Pt("",!0),b("div",WM,[b("div",$M,[y[80]||(y[80]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"🛠️ ابزارها",-1)),b("button",{class:et(["pin-btn",{pinned:C.value==="tools"}]),title:C.value==="tools"?"Unpin Section":"Pin Section",onClick:y[29]||(y[29]=N=>w("tools"))},ct((C.value==="tools","📌")),11,XM)]),b("div",qM,[b("button",{class:et(["tool-btn primary",{active:$.value==="paint"}]),onClick:y[30]||(y[30]=N=>ae("paint"))}," 🖌️ Paint ",2),b("button",{class:et(["tool-btn primary",{active:$.value==="fill"}]),onClick:y[31]||(y[31]=N=>ae("fill"))}," 🪣 Fill ",2),b("button",{class:et(["tool-btn secondary",{active:$.value==="select"}]),onClick:y[32]||(y[32]=N=>ae("select"))}," 📐 Select ",2),b("button",{class:"tool-btn secondary",onClick:K}," 📋 Copy "),b("button",{class:"tool-btn secondary",onClick:Le}," ✂️ Cut "),b("button",{class:"tool-btn secondary",onClick:ve}," 📥 Paste "),b("button",{class:"tool-btn secondary",onClick:Ce}," 📍 Paste at Center "),b("button",{class:"tool-btn secondary",disabled:!re(),onClick:He}," 🎯 Select Paste Position ",8,jM),ie.value?(Ve(),We("button",{key:0,class:"tool-btn danger",onClick:Ae}," ❌ Cancel Paste ")):Pt("",!0),b("button",{class:"tool-btn secondary",onClick:Ie}," 🗑️ Clear Selection "),b("button",{class:"tool-btn secondary",disabled:T.value.length===0,onClick:Ue}," 🔄 Mirror Selection ",8,YM),b("button",{class:"tool-btn secondary",disabled:T.value.length===0,onClick:_e}," ↕️ Mirror Selection Vertical ",8,KM),b("button",{class:"tool-btn secondary",onClick:oe}," ↩️ Undo "),b("button",{class:"tool-btn secondary",onClick:we}," ↪️ Redo ")]),b("div",ZM,[y[81]||(y[81]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"🎨 پس‌زمینه",-1)),b("div",QM,[b("button",{class:et(["mode-btn",{active:Re.value==="color"}]),onClick:y[33]||(y[33]=N=>Re.value="color")}," 🎨 رنگ ",2),b("button",{class:et(["mode-btn",{active:Re.value==="image"}]),onClick:y[34]||(y[34]=N=>Re.value="image")}," 🖼️ تصویر ",2)]),Re.value==="color"?(Ve(),We("div",JM,[Zt(b("input",{"onUpdate:modelValue":y[35]||(y[35]=N=>he.value=N),type:"color",class:"color-picker",title:"انتخاب رنگ پس‌زمینه"},null,512),[[en,he.value]]),b("button",{class:"tool-btn success",onClick:Mt}," 🎨 تغییر تمام مهره‌ها ")])):Pt("",!0),Re.value==="image"?(Ve(),We("div",eE,[b("div",tE,[b("div",nE,[(Ve(!0),We(Bt,null,Mn(m.value,N=>{var pe;return Ve(),We("div",{key:N.name,class:et(["background-image-item",{selected:((pe=qe.value)==null?void 0:pe.url)===N.url}]),onClick:Me=>qe.value=N},[b("img",{src:N.url,alt:N.displayName,class:"background-bead-image"},null,8,sE),b("span",rE,ct(N.displayName),1)],10,iE)}),128))])]),b("button",{class:"tool-btn success",disabled:!qe.value,onClick:Mt}," 🖼️ تغییر تمام مهره‌ها ",8,oE)])):Pt("",!0)])]),b("div",aE,[b("div",lE,[y[82]||(y[82]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"📤 خروجی",-1)),b("button",{class:et(["pin-btn",{pinned:C.value==="export"}]),title:C.value==="export"?"Unpin Section":"Pin Section",onClick:y[36]||(y[36]=N=>w("export"))},ct((C.value==="export","📌")),11,cE)]),b("div",{class:"save-load-buttons mb-3"},[b("button",{class:"export-btn success",onClick:k}," 💾 ذخیره گرید "),b("button",{class:"export-btn info",onClick:E}," 📂 بارگذاری اخرین ذخیره ")]),b("div",uE,[b("button",{class:"export-btn primary",onClick:y[37]||(y[37]=N=>B.$emit("update-grid",ke()))}," 🚀 ارسال به 3D "),b("button",{class:"export-btn success",onClick:y[38]||(y[38]=()=>z())}," 📷 خروجی عکس "),b("button",{class:"export-btn info",onClick:y[39]||(y[39]=()=>xe())}," 🖼️ خروجی HD "),b("button",{class:"export-btn warning",onClick:Ee}," 📄 خروجی TXT ")])])])])])],2),b("div",dE,[y[99]||(y[99]=b("div",{class:"controls-header"},[b("h3",{class:"mb-4 text-lg font-bold text-gray-800"},"🎨 ابزارهای طراحی")],-1)),b("div",fE,[b("div",hE,[y[89]||(y[89]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 📐 ابعاد شبکه ",-1)),b("div",pE,[b("label",mE,[y[84]||(y[84]=b("span",{class:"dimension-text"},"ستون ها:",-1)),Zt(b("input",{"onUpdate:modelValue":y[40]||(y[40]=N=>i.value=N),type:"number",min:"1",class:"dimension-input"},null,512),[[en,i.value,void 0,{number:!0}]])]),b("label",gE,[y[85]||(y[85]=b("span",{class:"dimension-text"},"ردیف ها:",-1)),Zt(b("input",{"onUpdate:modelValue":y[41]||(y[41]=N=>s.value=N),type:"number",min:"1",class:"dimension-input"},null,512),[[en,s.value,void 0,{number:!0}]])])]),b("div",vE,[y[88]||(y[88]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 📏 اندازه سلول ",-1)),b("div",_E,[b("label",bE,[y[86]||(y[86]=b("span",{class:"dimension-text"},"عرض:",-1)),Zt(b("input",{"onUpdate:modelValue":y[42]||(y[42]=N=>r.value=N),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[en,r.value,void 0,{number:!0}]])]),b("label",xE,[y[87]||(y[87]=b("span",{class:"dimension-text"},"ارتفاع:",-1)),Zt(b("input",{"onUpdate:modelValue":y[43]||(y[43]=N=>o.value=N),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[en,o.value,void 0,{number:!0}]])])])])]),b("div",yE,[y[90]||(y[90]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🔄 جهت ",-1)),b("div",wE,[b("button",{class:et(["direction-btn",{active:u.value}]),onClick:y[44]||(y[44]=N=>u.value=!u.value)},ct(u.value?"عمودی":"افقی"),3)]),b("div",SE,[b("button",{class:et(["direction-btn",{active:d.value}]),onClick:y[45]||(y[45]=N=>d.value=!d.value)},ct(d.value?"گرید عمودی":"گرید افقی"),3)])]),b("div",ME,[y[92]||(y[92]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🎨 انتخاب رنگ ",-1)),b("div",EE,[Zt(b("input",{"onUpdate:modelValue":y[46]||(y[46]=N=>a.value=N),type:"color",class:"color-picker"},null,512),[[en,a.value]]),b("span",TE,ct(a.value),1)]),b("div",AE,[y[91]||(y[91]=b("h4",{class:"text-sm font-semibold text-gray-700"},"🔄 رنگ‌های اخیر",-1)),l.value.length>0?(Ve(),We("button",{key:0,class:"clear-colors-btn",title:"پاک کردن تمام رنگ‌ها",onClick:S}," 🗑️ پاک کردن ")):Pt("",!0)]),b("div",CE,[(Ve(!0),We(Bt,null,Mn(l.value,N=>(Ve(),We("div",{key:N,class:"color-swatch",style:Wn({backgroundColor:N}),title:N,onClick:pe=>a.value=N},[b("button",{class:"remove-color-btn",onClick:yo(pe=>Pe(N),["stop"])}," × ",8,PE)],12,RE))),128))])]),b("div",DE,[y[93]||(y[93]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🎨 حالت طراحی ",-1)),b("div",LE,[b("button",{class:et(["mode-btn",{active:h.value==="color"}]),onClick:y[47]||(y[47]=N=>h.value="color")}," 🎨 رنگ ",2),b("button",{class:et(["mode-btn",{active:h.value==="image"}]),onClick:y[48]||(y[48]=N=>h.value="image")}," 🖼️ تصویر ",2)])]),h.value==="image"?(Ve(),We("div",IE,[y[95]||(y[95]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🖼️ انتخاب تصویر مهره ",-1)),b("div",UE,[b("div",OE,[(Ve(!0),We(Bt,null,Mn(m.value,N=>{var pe;return Ve(),We("div",{key:N.name,class:et(["image-item",{selected:((pe=v.value)==null?void 0:pe.url)===N.url}]),onClick:Me=>J(N)},[b("img",{src:N.url,alt:N.displayName,class:"bead-image"},null,8,FE),b("span",kE,ct(N.displayName),1)],10,NE)}),128))])]),g.value.length>0?(Ve(),We("div",BE,[b("div",{class:"recent-images-header"},[y[94]||(y[94]=b("h4",{class:"text-sm font-semibold text-gray-700"},"🔄 تصاویر اخیر",-1)),b("button",{class:"clear-images-btn",title:"پاک کردن تمام تصاویر",onClick:fe}," 🗑️ پاک کردن ")]),b("div",HE,[(Ve(!0),We(Bt,null,Mn(g.value,N=>{var pe;return Ve(),We("div",{key:N.url,class:et(["recent-image-item",{selected:((pe=v.value)==null?void 0:pe.url)===N.url}]),onClick:Me=>J(N)},[b("img",{src:N.url,alt:N.displayName,class:"recent-bead-image"},null,8,VE),b("button",{class:"remove-image-btn",onClick:yo(Me=>ce(N),["stop"])}," × ",8,GE)],10,zE)}),128))])])):Pt("",!0)])):Pt("",!0),b("div",WE,[y[97]||(y[97]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"🛠️ ابزارها",-1)),b("div",$E,[b("button",{class:et(["tool-btn primary",{active:$.value==="paint"}]),onClick:y[49]||(y[49]=N=>ae("paint"))}," 🖌️ Paint ",2),b("button",{class:et(["tool-btn primary",{active:$.value==="fill"}]),onClick:y[50]||(y[50]=N=>ae("fill"))}," 🪣 Fill ",2),b("button",{class:et(["tool-btn secondary",{active:$.value==="select"}]),onClick:y[51]||(y[51]=N=>ae("select"))}," 📐 Select ",2),b("button",{class:"tool-btn secondary",onClick:K}," 📋 Copy "),b("button",{class:"tool-btn secondary",onClick:Le}," ✂️ Cut "),b("button",{class:"tool-btn secondary",onClick:ve}," 📥 Paste "),b("button",{class:"tool-btn secondary",onClick:Ce}," 📍 Paste at Center "),b("button",{class:"tool-btn secondary",disabled:!re(),onClick:He}," 🎯 Select Paste Position ",8,XE),ie.value?(Ve(),We("button",{key:0,class:"tool-btn danger",onClick:Ae}," ❌ Cancel Paste ")):Pt("",!0),b("button",{class:"tool-btn secondary",onClick:Ie}," 🗑️ Clear Selection "),b("button",{class:"tool-btn secondary",disabled:T.value.length===0,onClick:Ue}," 🔄 Mirror Selection ",8,qE),b("button",{class:"tool-btn secondary",disabled:T.value.length===0,onClick:_e}," ↕️ Mirror Selection Vertical ",8,jE),b("button",{class:"tool-btn secondary",onClick:oe}," ↩️ Undo "),b("button",{class:"tool-btn secondary",onClick:we}," ↪️ Redo ")]),b("div",YE,[y[96]||(y[96]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"🎨 پس‌زمینه",-1)),b("div",KE,[b("button",{class:et(["mode-btn",{active:Re.value==="color"}]),onClick:y[52]||(y[52]=N=>Re.value="color")}," 🎨 رنگ ",2),b("button",{class:et(["mode-btn",{active:Re.value==="image"}]),onClick:y[53]||(y[53]=N=>Re.value="image")}," 🖼️ تصویر ",2)]),Re.value==="color"?(Ve(),We("div",ZE,[Zt(b("input",{"onUpdate:modelValue":y[54]||(y[54]=N=>he.value=N),type:"color",class:"color-picker",title:"انتخاب رنگ پس‌زمینه"},null,512),[[en,he.value]]),b("button",{class:"tool-btn success",onClick:Mt}," 🎨 تغییر تمام مهره‌ها ")])):Pt("",!0),Re.value==="image"?(Ve(),We("div",QE,[b("div",JE,[b("div",eT,[(Ve(!0),We(Bt,null,Mn(m.value,N=>{var pe;return Ve(),We("div",{key:N.name,class:et(["background-image-item",{selected:((pe=qe.value)==null?void 0:pe.url)===N.url}]),onClick:Me=>qe.value=N},[b("img",{src:N.url,alt:N.displayName,class:"background-bead-image"},null,8,nT),b("span",iT,ct(N.displayName),1)],10,tT)}),128))])]),b("button",{class:"tool-btn success",disabled:!qe.value,onClick:Mt}," 🖼️ تغییر تمام مهره‌ها ",8,sT)])):Pt("",!0)])]),b("div",rT,[y[98]||(y[98]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"📤 خروجی",-1)),b("div",{class:"save-load-buttons mb-3"},[b("button",{class:"export-btn success",onClick:k}," 💾 ذخیره گرید "),b("button",{class:"export-btn info",onClick:E}," 📂 بارگذاری اخرین ذخیره ")]),b("div",oT,[b("button",{class:"export-btn primary",onClick:y[55]||(y[55]=N=>B.$emit("update-grid",ke()))}," 🚀 ارسال به 3D "),b("button",{class:"export-btn success",onClick:y[56]||(y[56]=()=>z())}," 📷 خروجی عکس "),b("button",{class:"export-btn info",onClick:y[57]||(y[57]=()=>xe())}," 🖼️ خروجی HD "),b("button",{class:"export-btn warning",onClick:Ee}," 📄 خروجی TXT ")])])])]),b("div",{class:et(["grid-container md:max-h-[calc(100vh_-_200px)] max-md:min-h-[calc(100vh_-_310px)]",{"!flex-row":u.value,"!flex-col-reverse":!u.value,"pinned-active":C.value}])},[b("div",aT,[b("div",lT,[b("label",cT,[y[100]||(y[100]=b("span",{class:"upload-text"},"📁 آپلود فایل txt grid",-1)),b("input",{type:"file",accept:".txt",class:"upload-input",onChange:H},null,32)]),b("label",uT,[y[101]||(y[101]=b("span",{class:"upload-text"},"📁 آپلود تصویر",-1)),b("input",{type:"file",accept:"image/*",class:"upload-input",onChange:be},null,32)])]),f.value?(Ve(),We("div",dT,[b("img",{src:f.value,alt:"تصویر انتخاب شده",class:"preview-image"},null,8,fT)])):Pt("",!0)]),b("div",{class:et(["grid-wrapper",{"rotate-none":d.value," rotate-90 z-10 translate-x-[200%] min-h-fit! translate-y-[10%] h-fit! w-fit!":!d.value}])},[b("div",{class:"grid-item",style:Wn({gridTemplateColumns:`repeat(${i.value}, ${r.value}px)`,gridAutoRows:`${o.value}px`}),onMousedown:me,onMouseup:Ke,onMouseleave:Ke,onMousemove:P,onTouchstart:_,onTouchmove:V,onTouchend:j,onTouchcancel:j},[(Ve(!0),We(Bt,null,Mn(D.value,(N,pe)=>(Ve(),We("div",{key:pe,class:et(["cell",{"!border-red-200":pe==Math.floor(i.value*s.value/2)}]),style:Wn({backgroundColor:N.startsWith("/miyuki-beads-designer/beads/")?"transparent":N,backgroundImage:N.startsWith("/miyuki-beads-designer/beads/")?`url(${N})`:"none",backgroundSize:"cover",backgroundPosition:"center",border:T.value.includes(pe)?"2px dashed #ff4757":"1px solid #ddd",width:`${r.value}px`,height:`${o.value}px`,minWidth:`${r.value}px`,minHeight:`${o.value}px`}),onClick:Me=>le(pe)},null,14,hT))),128))],36)],2)],2)]))}},mT=fa(pT,[["__scopeId","data-v-18a9a820"]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zd="179",Br={ROTATE:0,DOLLY:1,PAN:2},Pr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gT=0,dh=1,vT=2,Gg=1,_T=2,Vi=3,As=0,On=1,ji=2,Es=0,Hr=1,fh=2,hh=3,ph=4,bT=5,Ws=100,xT=101,yT=102,wT=103,ST=104,MT=200,ET=201,TT=202,AT=203,mu=204,gu=205,CT=206,RT=207,PT=208,DT=209,LT=210,IT=211,UT=212,OT=213,NT=214,vu=0,_u=1,bu=2,so=3,xu=4,yu=5,wu=6,Su=7,Wg=0,FT=1,kT=2,Ts=0,BT=1,HT=2,zT=3,VT=4,GT=5,WT=6,$T=7,$g=300,ro=301,oo=302,Mu=303,Eu=304,Yl=306,Tu=1e3,Xs=1001,Au=1002,pi=1003,XT=1004,Pa=1005,Ei=1006,_c=1007,qs=1008,Ii=1009,Xg=1010,qg=1011,Zo=1012,Vd=1013,sr=1014,Yi=1015,ba=1016,Gd=1017,Wd=1018,Qo=1020,jg=35902,Yg=1021,Kg=1022,di=1023,Jo=1026,ea=1027,Zg=1028,$d=1029,Qg=1030,Xd=1031,qd=1033,rl=33776,ol=33777,al=33778,ll=33779,Cu=35840,Ru=35841,Pu=35842,Du=35843,Lu=36196,Iu=37492,Uu=37496,Ou=37808,Nu=37809,Fu=37810,ku=37811,Bu=37812,Hu=37813,zu=37814,Vu=37815,Gu=37816,Wu=37817,$u=37818,Xu=37819,qu=37820,ju=37821,cl=36492,Yu=36494,Ku=36495,Jg=36283,Zu=36284,Qu=36285,Ju=36286,qT=3200,jT=3201,ev=0,YT=1,ms="",In="srgb",ao="srgb-linear",Pl="linear",Dt="srgb",hr=7680,mh=519,KT=512,ZT=513,QT=514,tv=515,JT=516,eA=517,tA=518,nA=519,gh=35044,vh="300 es",Ti=2e3,Dl=2001;class ur{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ul=Math.PI/180,ed=180/Math.PI;function xa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(un[t&255]+un[t>>8&255]+un[t>>16&255]+un[t>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[n&63|128]+un[n>>8&255]+"-"+un[n>>16&255]+un[n>>24&255]+un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]).toLowerCase()}function gt(t,e,n){return Math.max(e,Math.min(n,t))}function iA(t,e){return(t%e+e)%e}function bc(t,e,n){return(1-n)*t+n*e}function Eo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Dn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const sA={DEG2RAD:ul};class ut{constructor(e=0,n=0){ut.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rr{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const f=r[o+0],h=r[o+1],v=r[o+2],g=r[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=h,e[n+2]=v,e[n+3]=g;return}if(d!==g||l!==f||c!==h||u!==v){let m=1-a;const p=l*f+c*h+u*v+d*g,C=p>=0?1:-1,R=1-p*p;if(R>Number.EPSILON){const U=Math.sqrt(R),L=Math.atan2(U,p*C);m=Math.sin(m*L)/U,a=Math.sin(a*L)/U}const w=a*C;if(l=l*m+f*w,c=c*m+h*w,u=u*m+v*w,d=d*m+g*w,m===1-a){const U=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=U,c*=U,u*=U,d*=U}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],h=r[o+2],v=r[o+3];return e[n]=a*v+u*d+l*h-c*f,e[n+1]=l*v+u*f+c*d-a*h,e[n+2]=c*v+u*h+a*f-l*d,e[n+3]=u*v-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),h=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*h*v,this._y=c*h*d-f*u*v,this._z=c*u*v+f*h*d,this._w=c*u*d-f*h*v;break;case"YXZ":this._x=f*u*d+c*h*v,this._y=c*h*d-f*u*v,this._z=c*u*v-f*h*d,this._w=c*u*d+f*h*v;break;case"ZXY":this._x=f*u*d-c*h*v,this._y=c*h*d+f*u*v,this._z=c*u*v+f*h*d,this._w=c*u*d-f*h*v;break;case"ZYX":this._x=f*u*d-c*h*v,this._y=c*h*d+f*u*v,this._z=c*u*v-f*h*d,this._w=c*u*d+f*h*v;break;case"YZX":this._x=f*u*d+c*h*v,this._y=c*h*d+f*u*v,this._z=c*u*v-f*h*d,this._w=c*u*d-f*h*v;break;case"XZY":this._x=f*u*d-c*h*v,this._y=c*h*d-f*u*v,this._z=c*u*v+f*h*d,this._w=c*u*d+f*h*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-n;return this._w=h*o+n*this._w,this._x=h*i+n*this._x,this._y=h*s+n*this._y,this._z=h*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,n=0,i=0){Q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(_h.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(_h.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),d=2*(r*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xc.copy(this).projectOnVector(e),this.sub(xc)}reflect(e){return this.sub(xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xc=new Q,_h=new rr;class ht{constructor(e,n,i,s,r,o,a,l,c){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],v=i[8],g=s[0],m=s[3],p=s[6],C=s[1],R=s[4],w=s[7],U=s[2],L=s[5],D=s[8];return r[0]=o*g+a*C+l*U,r[3]=o*m+a*R+l*L,r[6]=o*p+a*w+l*D,r[1]=c*g+u*C+d*U,r[4]=c*m+u*R+d*L,r[7]=c*p+u*w+d*D,r[2]=f*g+h*C+v*U,r[5]=f*m+h*R+v*L,r[8]=f*p+h*w+v*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*r,h=c*r-o*l,v=n*d+i*f+s*h;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=d*g,e[1]=(s*c-u*i)*g,e[2]=(a*i-s*o)*g,e[3]=f*g,e[4]=(u*n-s*l)*g,e[5]=(s*r-a*n)*g,e[6]=h*g,e[7]=(i*l-c*n)*g,e[8]=(o*n-i*r)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(yc.makeScale(e,n)),this}rotate(e){return this.premultiply(yc.makeRotation(-e)),this}translate(e,n){return this.premultiply(yc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yc=new ht;function nv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ta(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function rA(){const t=ta("canvas");return t.style.display="block",t}const bh={};function zr(t){t in bh||(bh[t]=!0,console.warn(t))}function oA(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const xh=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yh=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aA(){const t={enabled:!0,workingColorSpace:ao,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Dt&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Dt&&(s.r=Vr(s.r),s.g=Vr(s.g),s.b=Vr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ms?Pl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return zr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return zr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[ao]:{primaries:e,whitePoint:i,transfer:Pl,toXYZ:xh,fromXYZ:yh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:e,whitePoint:i,transfer:Dt,toXYZ:xh,fromXYZ:yh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),t}const wt=aA();function Ji(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Vr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let pr;class lA{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{pr===void 0&&(pr=ta("canvas")),pr.width=e.width,pr.height=e.height;const s=pr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=pr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ta("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ji(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ji(n[i]/255)*255):n[i]=Ji(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cA=0;class jd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cA++}),this.uuid=xa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(wc(s[o].image)):r.push(wc(s[o]))}else r=wc(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function wc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?lA.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uA=0;const Sc=new Q;class An extends ur{constructor(e=An.DEFAULT_IMAGE,n=An.DEFAULT_MAPPING,i=Xs,s=Xs,r=Ei,o=qs,a=di,l=Ii,c=An.DEFAULT_ANISOTROPY,u=ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uA++}),this.uuid=xa(),this.name="",this.source=new jd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Sc).x}get height(){return this.source.getSize(Sc).y}get depth(){return this.source.getSize(Sc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$g)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tu:e.x=e.x-Math.floor(e.x);break;case Xs:e.x=e.x<0?0:1;break;case Au:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tu:e.y=e.y-Math.floor(e.y);break;case Xs:e.y=e.y<0?0:1;break;case Au:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=$g;An.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,n=0,i=0,s=1){Xt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],v=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const R=(c+1)/2,w=(h+1)/2,U=(p+1)/2,L=(u+f)/4,D=(d+g)/4,k=(v+m)/4;return R>w&&R>U?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=L/i,r=D/i):w>U?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=L/s,r=k/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=D/r,s=k/r),this.set(i,s,r,n),this}let C=Math.sqrt((m-v)*(m-v)+(d-g)*(d-g)+(f-u)*(f-u));return Math.abs(C)<.001&&(C=1),this.x=(m-v)/C,this.y=(d-g)/C,this.z=(f-u)/C,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this.w=gt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this.w=gt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dA extends ur{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Xt(0,0,e,n),this.scissorTest=!1,this.viewport=new Xt(0,0,e,n);const s={width:e,height:n,depth:i.depth},r=new An(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Ei,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new jd(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class or extends dA{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class iv extends An{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=pi,this.minFilter=pi,this.wrapR=Xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fA extends An{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=pi,this.minFilter=pi,this.wrapR=Xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ya{constructor(e=new Q(1/0,1/0,1/0),n=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(si.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(si.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=si.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,si):si.fromBufferAttribute(r,o),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Da.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Da.copy(i.boundingBox)),Da.applyMatrix4(e.matrixWorld),this.union(Da)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(To),La.subVectors(this.max,To),mr.subVectors(e.a,To),gr.subVectors(e.b,To),vr.subVectors(e.c,To),is.subVectors(gr,mr),ss.subVectors(vr,gr),Ns.subVectors(mr,vr);let n=[0,-is.z,is.y,0,-ss.z,ss.y,0,-Ns.z,Ns.y,is.z,0,-is.x,ss.z,0,-ss.x,Ns.z,0,-Ns.x,-is.y,is.x,0,-ss.y,ss.x,0,-Ns.y,Ns.x,0];return!Mc(n,mr,gr,vr,La)||(n=[1,0,0,0,1,0,0,0,1],!Mc(n,mr,gr,vr,La))?!1:(Ia.crossVectors(is,ss),n=[Ia.x,Ia.y,Ia.z],Mc(n,mr,gr,vr,La))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fi=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],si=new Q,Da=new ya,mr=new Q,gr=new Q,vr=new Q,is=new Q,ss=new Q,Ns=new Q,To=new Q,La=new Q,Ia=new Q,Fs=new Q;function Mc(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){Fs.fromArray(t,r);const a=s.x*Math.abs(Fs.x)+s.y*Math.abs(Fs.y)+s.z*Math.abs(Fs.z),l=e.dot(Fs),c=n.dot(Fs),u=i.dot(Fs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const hA=new ya,Ao=new Q,Ec=new Q;class Yd{constructor(e=new Q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):hA.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ao.subVectors(e,this.center);const n=Ao.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Ao,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ao.copy(e.center).add(Ec)),this.expandByPoint(Ao.copy(e.center).sub(Ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ki=new Q,Tc=new Q,Ua=new Q,rs=new Q,Ac=new Q,Oa=new Q,Cc=new Q;class sv{constructor(e=new Q,n=new Q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ki.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,n),ki.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Tc.copy(e).add(n).multiplyScalar(.5),Ua.copy(n).sub(e).normalize(),rs.copy(this.origin).sub(Tc);const r=e.distanceTo(n)*.5,o=-this.direction.dot(Ua),a=rs.dot(this.direction),l=-rs.dot(Ua),c=rs.lengthSq(),u=Math.abs(1-o*o);let d,f,h,v;if(u>0)if(d=o*l-a,f=o*a-l,v=r*u,d>=0)if(f>=-v)if(f<=v){const g=1/u;d*=g,f*=g,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Tc).addScaledVector(Ua,f),h}intersectSphere(e,n){ki.subVectors(e.center,this.origin);const i=ki.dot(this.direction),s=ki.dot(ki)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,n,i,s,r){Ac.subVectors(n,e),Oa.subVectors(i,e),Cc.crossVectors(Ac,Oa);let o=this.direction.dot(Cc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rs.subVectors(this.origin,e);const l=a*this.direction.dot(Oa.crossVectors(rs,Oa));if(l<0)return null;const c=a*this.direction.dot(Ac.cross(rs));if(c<0||l+c>o)return null;const u=-a*rs.dot(Cc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,n,i,s,r,o,a,l,c,u,d,f,h,v,g,m){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,d,f,h,v,g,m)}set(e,n,i,s,r,o,a,l,c,u,d,f,h,v,g,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/_r.setFromMatrixColumn(e,0).length(),r=1/_r.setFromMatrixColumn(e,1).length(),o=1/_r.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,h=o*d,v=a*u,g=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=h+v*c,n[5]=f-g*c,n[9]=-a*l,n[2]=g-f*c,n[6]=v+h*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,v=c*u,g=c*d;n[0]=f+g*a,n[4]=v*a-h,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=h*a-v,n[6]=g+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,v=c*u,g=c*d;n[0]=f-g*a,n[4]=-o*d,n[8]=v+h*a,n[1]=h+v*a,n[5]=o*u,n[9]=g-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,h=o*d,v=a*u,g=a*d;n[0]=l*u,n[4]=v*c-h,n[8]=f*c+g,n[1]=l*d,n[5]=g*c+f,n[9]=h*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*c,v=a*l,g=a*c;n[0]=l*u,n[4]=g-f*d,n[8]=v*d+h,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*d+v,n[10]=f-g*d}else if(e.order==="XZY"){const f=o*l,h=o*c,v=a*l,g=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+g,n[5]=o*u,n[9]=h*d-v,n[2]=v*d-h,n[6]=a*u,n[10]=g*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pA,e,mA)}lookAt(e,n,i){const s=this.elements;return Bn.subVectors(e,n),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),os.crossVectors(i,Bn),os.lengthSq()===0&&(Math.abs(i.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),os.crossVectors(i,Bn)),os.normalize(),Na.crossVectors(Bn,os),s[0]=os.x,s[4]=Na.x,s[8]=Bn.x,s[1]=os.y,s[5]=Na.y,s[9]=Bn.y,s[2]=os.z,s[6]=Na.z,s[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],v=i[2],g=i[6],m=i[10],p=i[14],C=i[3],R=i[7],w=i[11],U=i[15],L=s[0],D=s[4],k=s[8],E=s[12],A=s[1],T=s[5],I=s[9],O=s[13],G=s[2],ie=s[6],$=s[10],ue=s[14],Y=s[3],ye=s[7],Te=s[11],Ne=s[15];return r[0]=o*L+a*A+l*G+c*Y,r[4]=o*D+a*T+l*ie+c*ye,r[8]=o*k+a*I+l*$+c*Te,r[12]=o*E+a*O+l*ue+c*Ne,r[1]=u*L+d*A+f*G+h*Y,r[5]=u*D+d*T+f*ie+h*ye,r[9]=u*k+d*I+f*$+h*Te,r[13]=u*E+d*O+f*ue+h*Ne,r[2]=v*L+g*A+m*G+p*Y,r[6]=v*D+g*T+m*ie+p*ye,r[10]=v*k+g*I+m*$+p*Te,r[14]=v*E+g*O+m*ue+p*Ne,r[3]=C*L+R*A+w*G+U*Y,r[7]=C*D+R*T+w*ie+U*ye,r[11]=C*k+R*I+w*$+U*Te,r[15]=C*E+R*O+w*ue+U*Ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],v=e[3],g=e[7],m=e[11],p=e[15];return v*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*h-i*l*h)+g*(+n*l*h-n*c*f+r*o*f-s*o*h+s*c*u-r*l*u)+m*(+n*c*d-n*a*h-r*o*d+i*o*h+r*a*u-i*c*u)+p*(-s*a*u-n*l*d+n*a*f+s*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],v=e[12],g=e[13],m=e[14],p=e[15],C=d*m*c-g*f*c+g*l*h-a*m*h-d*l*p+a*f*p,R=v*f*c-u*m*c-v*l*h+o*m*h+u*l*p-o*f*p,w=u*g*c-v*d*c+v*a*h-o*g*h-u*a*p+o*d*p,U=v*d*l-u*g*l-v*a*f+o*g*f+u*a*m-o*d*m,L=n*C+i*R+s*w+r*U;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/L;return e[0]=C*D,e[1]=(g*f*r-d*m*r-g*s*h+i*m*h+d*s*p-i*f*p)*D,e[2]=(a*m*r-g*l*r+g*s*c-i*m*c-a*s*p+i*l*p)*D,e[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*h-i*l*h)*D,e[4]=R*D,e[5]=(u*m*r-v*f*r+v*s*h-n*m*h-u*s*p+n*f*p)*D,e[6]=(v*l*r-o*m*r-v*s*c+n*m*c+o*s*p-n*l*p)*D,e[7]=(o*f*r-u*l*r+u*s*c-n*f*c-o*s*h+n*l*h)*D,e[8]=w*D,e[9]=(v*d*r-u*g*r-v*i*h+n*g*h+u*i*p-n*d*p)*D,e[10]=(o*g*r-v*a*r+v*i*c-n*g*c-o*i*p+n*a*p)*D,e[11]=(u*a*r-o*d*r-u*i*c+n*d*c+o*i*h-n*a*h)*D,e[12]=U*D,e[13]=(u*g*s-v*d*s+v*i*f-n*g*f-u*i*m+n*d*m)*D,e[14]=(v*a*s-o*g*s-v*i*l+n*g*l+o*i*m-n*a*m)*D,e[15]=(o*d*s-u*a*s+u*i*l-n*d*l-o*i*f+n*a*f)*D,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,d=a+a,f=r*c,h=r*u,v=r*d,g=o*u,m=o*d,p=a*d,C=l*c,R=l*u,w=l*d,U=i.x,L=i.y,D=i.z;return s[0]=(1-(g+p))*U,s[1]=(h+w)*U,s[2]=(v-R)*U,s[3]=0,s[4]=(h-w)*L,s[5]=(1-(f+p))*L,s[6]=(m+C)*L,s[7]=0,s[8]=(v+R)*D,s[9]=(m-C)*D,s[10]=(1-(f+g))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let r=_r.set(s[0],s[1],s[2]).length();const o=_r.set(s[4],s[5],s[6]).length(),a=_r.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ri.copy(this);const c=1/r,u=1/o,d=1/a;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=u,ri.elements[5]*=u,ri.elements[6]*=u,ri.elements[8]*=d,ri.elements[9]*=d,ri.elements[10]*=d,n.setFromRotationMatrix(ri),i.x=r,i.y=o,i.z=a,this}makePerspective(e,n,i,s,r,o,a=Ti,l=!1){const c=this.elements,u=2*r/(n-e),d=2*r/(i-s),f=(n+e)/(n-e),h=(i+s)/(i-s);let v,g;if(l)v=r/(o-r),g=o*r/(o-r);else if(a===Ti)v=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Dl)v=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=Ti,l=!1){const c=this.elements,u=2/(n-e),d=2/(i-s),f=-(n+e)/(n-e),h=-(i+s)/(i-s);let v,g;if(l)v=1/(o-r),g=o/(o-r);else if(a===Ti)v=-2/(o-r),g=-(o+r)/(o-r);else if(a===Dl)v=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=v,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const _r=new Q,ri=new jt,pA=new Q(0,0,0),mA=new Q(1,1,1),os=new Q,Na=new Q,Bn=new Q,wh=new jt,Sh=new rr;class Ui{constructor(e=0,n=0,i=0,s=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(n){case"XYZ":this._y=Math.asin(gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Sh.setFromEuler(this),this.setFromQuaternion(Sh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class rv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gA=0;const Mh=new Q,br=new rr,Bi=new jt,Fa=new Q,Co=new Q,vA=new Q,_A=new rr,Eh=new Q(1,0,0),Th=new Q(0,1,0),Ah=new Q(0,0,1),Ch={type:"added"},bA={type:"removed"},xr={type:"childadded",child:null},Rc={type:"childremoved",child:null};class gn extends ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gA++}),this.uuid=xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new Q,n=new Ui,i=new rr,s=new Q(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new jt},normalMatrix:{value:new ht}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return br.setFromAxisAngle(e,n),this.quaternion.multiply(br),this}rotateOnWorldAxis(e,n){return br.setFromAxisAngle(e,n),this.quaternion.premultiply(br),this}rotateX(e){return this.rotateOnAxis(Eh,e)}rotateY(e){return this.rotateOnAxis(Th,e)}rotateZ(e){return this.rotateOnAxis(Ah,e)}translateOnAxis(e,n){return Mh.copy(e).applyQuaternion(this.quaternion),this.position.add(Mh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Eh,e)}translateY(e){return this.translateOnAxis(Th,e)}translateZ(e){return this.translateOnAxis(Ah,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Fa.copy(e):Fa.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(Co,Fa,this.up):Bi.lookAt(Fa,Co,this.up),this.quaternion.setFromRotationMatrix(Bi),s&&(Bi.extractRotation(s.matrixWorld),br.setFromRotationMatrix(Bi),this.quaternion.premultiply(br.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ch),xr.child=e,this.dispatchEvent(xr),xr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(bA),Rc.child=e,this.dispatchEvent(Rc),Rc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ch),xr.child=e,this.dispatchEvent(xr),xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,vA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,_A,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}gn.DEFAULT_UP=new Q(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new Q,Hi=new Q,Pc=new Q,zi=new Q,yr=new Q,wr=new Q,Rh=new Q,Dc=new Q,Lc=new Q,Ic=new Q,Uc=new Xt,Oc=new Xt,Nc=new Xt;class ui{constructor(e=new Q,n=new Q,i=new Q){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),oi.subVectors(e,n),s.cross(oi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){oi.subVectors(s,n),Hi.subVectors(i,n),Pc.subVectors(e,n);const o=oi.dot(oi),a=oi.dot(Hi),l=oi.dot(Pc),c=Hi.dot(Hi),u=Hi.dot(Pc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,v=(o*u-a*l)*f;return r.set(1-h-v,v,h)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zi.x),l.addScaledVector(o,zi.y),l.addScaledVector(a,zi.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return Uc.setScalar(0),Oc.setScalar(0),Nc.setScalar(0),Uc.fromBufferAttribute(e,n),Oc.fromBufferAttribute(e,i),Nc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Uc,r.x),o.addScaledVector(Oc,r.y),o.addScaledVector(Nc,r.z),o}static isFrontFacing(e,n,i,s){return oi.subVectors(i,n),Hi.subVectors(e,n),oi.cross(Hi).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),oi.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ui.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return ui.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;yr.subVectors(s,i),wr.subVectors(r,i),Dc.subVectors(e,i);const l=yr.dot(Dc),c=wr.dot(Dc);if(l<=0&&c<=0)return n.copy(i);Lc.subVectors(e,s);const u=yr.dot(Lc),d=wr.dot(Lc);if(u>=0&&d<=u)return n.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(yr,o);Ic.subVectors(e,r);const h=yr.dot(Ic),v=wr.dot(Ic);if(v>=0&&h<=v)return n.copy(r);const g=h*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(wr,a);const m=u*v-h*d;if(m<=0&&d-u>=0&&h-v>=0)return Rh.subVectors(r,s),a=(d-u)/(d-u+(h-v)),n.copy(s).addScaledVector(Rh,a);const p=1/(m+g+f);return o=g*p,a=f*p,n.copy(i).addScaledVector(yr,o).addScaledVector(wr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ov={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},ka={h:0,s:0,l:0};function Fc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class vt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=wt.workingColorSpace){return this.r=e,this.g=n,this.b=i,wt.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=wt.workingColorSpace){if(e=iA(e,1),n=gt(n,0,1),i=gt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Fc(o,r,e+1/3),this.g=Fc(o,r,e),this.b=Fc(o,r,e-1/3)}return wt.colorSpaceToWorking(this,s),this}setStyle(e,n=In){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=In){const i=ov[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return wt.workingToColorSpace(dn.copy(this),e),Math.round(gt(dn.r*255,0,255))*65536+Math.round(gt(dn.g*255,0,255))*256+Math.round(gt(dn.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=wt.workingColorSpace){wt.workingToColorSpace(dn.copy(this),n);const i=dn.r,s=dn.g,r=dn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=wt.workingColorSpace){return wt.workingToColorSpace(dn.copy(this),n),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=In){wt.workingToColorSpace(dn.copy(this),e);const n=dn.r,i=dn.g,s=dn.b;return e!==In?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(as),this.setHSL(as.h+e,as.s+n,as.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(as),e.getHSL(ka);const i=bc(as.h,ka.h,n),s=bc(as.s,ka.s,n),r=bc(as.l,ka.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new vt;vt.NAMES=ov;let xA=0;class wa extends ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xA++}),this.uuid=xa(),this.name="",this.type="Material",this.blending=Hr,this.side=As,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mu,this.blendDst=gu,this.blendEquation=Ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(i.blending=this.blending),this.side!==As&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==mu&&(i.blendSrc=this.blendSrc),this.blendDst!==gu&&(i.blendDst=this.blendDst),this.blendEquation!==Ws&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==so&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class av extends wa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=Wg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new Q,Ba=new ut;let yA=0;class Ci{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yA++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=gh,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ba.fromBufferAttribute(this,n),Ba.applyMatrix3(e),this.setXY(n,Ba.x,Ba.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix3(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix4(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.applyNormalMatrix(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.transformDirection(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Eo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Dn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Eo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Dn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Eo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Dn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Eo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Dn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Eo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Dn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Dn(n,this.array),i=Dn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=Dn(n,this.array),i=Dn(i,this.array),s=Dn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=Dn(n,this.array),i=Dn(i,this.array),s=Dn(s,this.array),r=Dn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gh&&(e.usage=this.usage),e}}class lv extends Ci{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class cv extends Ci{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ri extends Ci{constructor(e,n,i){super(new Float32Array(e),n,i)}}let wA=0;const Jn=new jt,kc=new gn,Sr=new Q,Hn=new ya,Ro=new ya,rn=new Q;class Ds extends ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wA++}),this.uuid=xa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nv(e)?cv:lv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ht().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,n,i){return Jn.makeTranslation(e,n,i),this.applyMatrix4(Jn),this}scale(e,n,i){return Jn.makeScale(e,n,i),this.applyMatrix4(Jn),this}lookAt(e){return kc.lookAt(e),kc.updateMatrix(),this.applyMatrix4(kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ri(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ya);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Hn.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const i=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Ro.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(Hn.min,Ro.min),Hn.expandByPoint(rn),rn.addVectors(Hn.max,Ro.max),Hn.expandByPoint(rn)):(Hn.expandByPoint(Ro.min),Hn.expandByPoint(Ro.max))}Hn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)rn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(rn));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)rn.fromBufferAttribute(a,c),l&&(Sr.fromBufferAttribute(e,c),rn.add(Sr)),s=Math.max(s,i.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let k=0;k<i.count;k++)a[k]=new Q,l[k]=new Q;const c=new Q,u=new Q,d=new Q,f=new ut,h=new ut,v=new ut,g=new Q,m=new Q;function p(k,E,A){c.fromBufferAttribute(i,k),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,A),f.fromBufferAttribute(r,k),h.fromBufferAttribute(r,E),v.fromBufferAttribute(r,A),u.sub(c),d.sub(c),h.sub(f),v.sub(f);const T=1/(h.x*v.y-v.x*h.y);isFinite(T)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(d,-h.y).multiplyScalar(T),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-v.x).multiplyScalar(T),a[k].add(g),a[E].add(g),a[A].add(g),l[k].add(m),l[E].add(m),l[A].add(m))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let k=0,E=C.length;k<E;++k){const A=C[k],T=A.start,I=A.count;for(let O=T,G=T+I;O<G;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const R=new Q,w=new Q,U=new Q,L=new Q;function D(k){U.fromBufferAttribute(s,k),L.copy(U);const E=a[k];R.copy(E),R.sub(U.multiplyScalar(U.dot(E))).normalize(),w.crossVectors(L,E);const T=w.dot(l[k])<0?-1:1;o.setXYZW(k,R.x,R.y,R.z,T)}for(let k=0,E=C.length;k<E;++k){const A=C[k],T=A.start,I=A.count;for(let O=T,G=T+I;O<G;O+=3)D(e.getX(O+0)),D(e.getX(O+1)),D(e.getX(O+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ci(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const s=new Q,r=new Q,o=new Q,a=new Q,l=new Q,c=new Q,u=new Q,d=new Q;if(e)for(let f=0,h=e.count;f<h;f+=3){const v=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(n,v),r.fromBufferAttribute(n,g),o.fromBufferAttribute(n,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=n.count;f<h;f+=3)s.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)rn.fromBufferAttribute(e,n),rn.normalize(),e.setXYZ(n,rn.x,rn.y,rn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,v=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?h=l[g]*a.data.stride+a.offset:h=l[g]*u;for(let p=0;p<u;p++)f[v++]=c[h++]}return new Ci(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ds,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ph=new jt,ks=new sv,Ha=new Yd,Dh=new Q,za=new Q,Va=new Q,Ga=new Q,Bc=new Q,Wa=new Q,Lh=new Q,$a=new Q;class fi extends gn{constructor(e=new Ds,n=new av){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Wa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Bc.fromBufferAttribute(d,e),o?Wa.addScaledVector(Bc,u):Wa.addScaledVector(Bc.sub(n),u))}n.add(Wa)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ha.copy(i.boundingSphere),Ha.applyMatrix4(r),ks.copy(e.ray).recast(e.near),!(Ha.containsPoint(ks.origin)===!1&&(ks.intersectSphere(Ha,Dh)===null||ks.origin.distanceToSquared(Dh)>(e.far-e.near)**2))&&(Ph.copy(r).invert(),ks.copy(e.ray).applyMatrix4(Ph),!(i.boundingBox!==null&&ks.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ks)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=f.length;v<g;v++){const m=f[v],p=o[m.materialIndex],C=Math.max(m.start,h.start),R=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let w=C,U=R;w<U;w+=3){const L=a.getX(w),D=a.getX(w+1),k=a.getX(w+2);s=Xa(this,p,e,i,c,u,d,L,D,k),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const v=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let m=v,p=g;m<p;m+=3){const C=a.getX(m),R=a.getX(m+1),w=a.getX(m+2);s=Xa(this,o,e,i,c,u,d,C,R,w),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=f.length;v<g;v++){const m=f[v],p=o[m.materialIndex],C=Math.max(m.start,h.start),R=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let w=C,U=R;w<U;w+=3){const L=w,D=w+1,k=w+2;s=Xa(this,p,e,i,c,u,d,L,D,k),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const v=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let m=v,p=g;m<p;m+=3){const C=m,R=m+1,w=m+2;s=Xa(this,o,e,i,c,u,d,C,R,w),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function SA(t,e,n,i,s,r,o,a){let l;if(e.side===On?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===As,a),l===null)return null;$a.copy(a),$a.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo($a);return c<n.near||c>n.far?null:{distance:c,point:$a.clone(),object:t}}function Xa(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,za),t.getVertexPosition(l,Va),t.getVertexPosition(c,Ga);const u=SA(t,e,n,i,za,Va,Ga,Lh);if(u){const d=new Q;ui.getBarycoord(Lh,za,Va,Ga,d),s&&(u.uv=ui.getInterpolatedAttribute(s,a,l,c,d,new ut)),r&&(u.uv1=ui.getInterpolatedAttribute(r,a,l,c,d,new ut)),o&&(u.normal=ui.getInterpolatedAttribute(o,a,l,c,d,new Q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new Q,materialIndex:0};ui.getNormal(za,Va,Ga,f.normal),u.face=f,u.barycoord=d}return u}class Sa extends Ds{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;v("z","y","x",-1,-1,i,n,e,o,r,0),v("z","y","x",1,-1,i,n,-e,o,r,1),v("x","z","y",1,1,e,i,n,s,o,2),v("x","z","y",1,-1,e,i,-n,s,o,3),v("x","y","z",1,-1,e,n,i,s,r,4),v("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ri(c,3)),this.setAttribute("normal",new Ri(u,3)),this.setAttribute("uv",new Ri(d,2));function v(g,m,p,C,R,w,U,L,D,k,E){const A=w/D,T=U/k,I=w/2,O=U/2,G=L/2,ie=D+1,$=k+1;let ue=0,Y=0;const ye=new Q;for(let Te=0;Te<$;Te++){const Ne=Te*T-O;for(let $e=0;$e<ie;$e++){const it=$e*A-I;ye[g]=it*C,ye[m]=Ne*R,ye[p]=G,c.push(ye.x,ye.y,ye.z),ye[g]=0,ye[m]=0,ye[p]=L>0?1:-1,u.push(ye.x,ye.y,ye.z),d.push($e/D),d.push(1-Te/k),ue+=1}}for(let Te=0;Te<k;Te++)for(let Ne=0;Ne<D;Ne++){const $e=f+Ne+ie*Te,it=f+Ne+ie*(Te+1),je=f+(Ne+1)+ie*(Te+1),oe=f+(Ne+1)+ie*Te;l.push($e,it,oe),l.push(it,je,oe),Y+=6}a.addGroup(h,Y,E),h+=Y,f+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function lo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function wn(t){const e={};for(let n=0;n<t.length;n++){const i=lo(t[n]);for(const s in i)e[s]=i[s]}return e}function MA(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function uv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const EA={clone:lo,merge:wn};var TA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cs extends wa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TA,this.fragmentShader=AA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lo(e.uniforms),this.uniformsGroups=MA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class dv extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ls=new Q,Ih=new ut,Uh=new ut;class Gn extends dv{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ed*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ul*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ed*2*Math.atan(Math.tan(ul*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ls.x,ls.y).multiplyScalar(-e/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ls.x,ls.y).multiplyScalar(-e/ls.z)}getViewSize(e,n){return this.getViewBounds(e,Ih,Uh),n.subVectors(Uh,Ih)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ul*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Mr=-90,Er=1;class CA extends gn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Gn(Mr,Er,e,n);s.layers=this.layers,this.add(s);const r=new Gn(Mr,Er,e,n);r.layers=this.layers,this.add(r);const o=new Gn(Mr,Er,e,n);o.layers=this.layers,this.add(o);const a=new Gn(Mr,Er,e,n);a.layers=this.layers,this.add(a);const l=new Gn(Mr,Er,e,n);l.layers=this.layers,this.add(l);const c=new Gn(Mr,Er,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,o),e.setRenderTarget(i,2,s),e.render(n,a),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),e.render(n,u),e.setRenderTarget(d,f,h),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class fv extends An{constructor(e=[],n=ro,i,s,r,o,a,l,c,u){super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class RA extends or{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new fv(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Sa(5,5,5),r=new Cs({name:"CubemapFromEquirect",uniforms:lo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:On,blending:Es});r.uniforms.tEquirect.value=n;const o=new fi(s,r),a=n.minFilter;return n.minFilter===qs&&(n.minFilter=Ei),new CA(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}class qa extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PA={type:"move"};class Hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=n.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,v=.005;c.inputState.pinching&&f>h+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(PA)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new qa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class hv extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const zc=new Q,DA=new Q,LA=new ht;class hs{constructor(e=new Q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=zc.subVectors(i,n).cross(DA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(zc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||LA.getNormalMatrix(e),s=this.coplanarPoint(zc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bs=new Yd,IA=new ut(.5,.5),ja=new Q;class Kd{constructor(e=new hs,n=new hs,i=new hs,s=new hs,r=new hs,o=new hs){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ti,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],f=r[6],h=r[7],v=r[8],g=r[9],m=r[10],p=r[11],C=r[12],R=r[13],w=r[14],U=r[15];if(s[0].setComponents(c-o,h-u,p-v,U-C).normalize(),s[1].setComponents(c+o,h+u,p+v,U+C).normalize(),s[2].setComponents(c+a,h+d,p+g,U+R).normalize(),s[3].setComponents(c-a,h-d,p-g,U-R).normalize(),i)s[4].setComponents(l,f,m,w).normalize(),s[5].setComponents(c-l,h-f,p-m,U-w).normalize();else if(s[4].setComponents(c-l,h-f,p-m,U-w).normalize(),n===Ti)s[5].setComponents(c+l,h+f,p+m,U+w).normalize();else if(n===Dl)s[5].setComponents(l,f,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(e){Bs.center.set(0,0,0);const n=IA.distanceTo(e.center);return Bs.radius=.7071067811865476+n,Bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(ja.x=s.normal.x>0?e.max.x:e.min.x,ja.y=s.normal.y>0?e.max.y:e.min.y,ja.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ja)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pv extends An{constructor(e,n,i=sr,s,r,o,a=pi,l=pi,c,u=Jo,d=1){if(u!==Jo&&u!==ea)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Kl extends Ds{constructor(e=1,n=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],f=[],h=[];let v=0;const g=[],m=i/2;let p=0;C(),o===!1&&(e>0&&R(!0),n>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new Ri(d,3)),this.setAttribute("normal",new Ri(f,3)),this.setAttribute("uv",new Ri(h,2));function C(){const w=new Q,U=new Q;let L=0;const D=(n-e)/i;for(let k=0;k<=r;k++){const E=[],A=k/r,T=A*(n-e)+e;for(let I=0;I<=s;I++){const O=I/s,G=O*l+a,ie=Math.sin(G),$=Math.cos(G);U.x=T*ie,U.y=-A*i+m,U.z=T*$,d.push(U.x,U.y,U.z),w.set(ie,D,$).normalize(),f.push(w.x,w.y,w.z),h.push(O,1-A),E.push(v++)}g.push(E)}for(let k=0;k<s;k++)for(let E=0;E<r;E++){const A=g[E][k],T=g[E+1][k],I=g[E+1][k+1],O=g[E][k+1];(e>0||E!==0)&&(u.push(A,T,O),L+=3),(n>0||E!==r-1)&&(u.push(T,I,O),L+=3)}c.addGroup(p,L,0),p+=L}function R(w){const U=v,L=new ut,D=new Q;let k=0;const E=w===!0?e:n,A=w===!0?1:-1;for(let I=1;I<=s;I++)d.push(0,m*A,0),f.push(0,A,0),h.push(.5,.5),v++;const T=v;for(let I=0;I<=s;I++){const G=I/s*l+a,ie=Math.cos(G),$=Math.sin(G);D.x=E*$,D.y=m*A,D.z=E*ie,d.push(D.x,D.y,D.z),f.push(0,A,0),L.x=ie*.5+.5,L.y=$*.5*A+.5,h.push(L.x,L.y),v++}for(let I=0;I<s;I++){const O=U+I,G=T+I;w===!0?u.push(G,G+1,O):u.push(G+1,G,O),k+=3}c.addGroup(p,k,w===!0?1:2),p+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zl extends Ds{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,f=n/l,h=[],v=[],g=[],m=[];for(let p=0;p<u;p++){const C=p*f-o;for(let R=0;R<c;R++){const w=R*d-r;v.push(w,-C,0),g.push(0,0,1),m.push(R/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let C=0;C<a;C++){const R=C+c*p,w=C+c*(p+1),U=C+1+c*(p+1),L=C+1+c*p;h.push(R,w,L),h.push(w,U,L)}this.setIndex(h),this.setAttribute("position",new Ri(v,3)),this.setAttribute("normal",new Ri(g,3)),this.setAttribute("uv",new Ri(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zl(e.width,e.height,e.widthSegments,e.heightSegments)}}class UA extends wa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ev,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class td extends UA{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ut(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new vt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new vt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new vt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class OA extends wa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class NA extends wa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Vc={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class FA{constructor(e,n,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const h=c[d],v=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const kA=new FA;class Zd{constructor(e){this.manager=e!==void 0?e:kA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Zd.DEFAULT_MATERIAL_NAME="__DEFAULT";const Tr=new WeakMap;class BA extends Zd{constructor(e){super(e)}load(e,n,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Vc.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){n&&n(o),r.manager.itemEnd(e)},0);else{let d=Tr.get(o);d===void 0&&(d=[],Tr.set(o,d)),d.push({onLoad:n,onError:s})}return o}const a=ta("img");function l(){u(),n&&n(this);const d=Tr.get(this)||[];for(let f=0;f<d.length;f++){const h=d[f];h.onLoad&&h.onLoad(this)}Tr.delete(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),Vc.remove(`image:${e}`);const f=Tr.get(this)||[];for(let h=0;h<f.length;h++){const v=f[h];v.onError&&v.onError(d)}Tr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Vc.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class HA extends Zd{constructor(e){super(e)}load(e,n,i,s){const r=new An,o=new BA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,n!==void 0&&n(r)},i,s),r}}class mv extends gn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Gc=new jt,Oh=new Q,Nh=new Q;class zA{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=Ii,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kd,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Oh.setFromMatrixPosition(e.matrixWorld),n.position.copy(Oh),Nh.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Nh),n.updateMatrixWorld(),Gc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gc,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class gv extends dv{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class VA extends zA{constructor(){super(new gv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nd extends mv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new VA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class vv extends mv{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class GA extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Fh{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(gt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class WA extends ur{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function kh(t,e,n,i){const s=$A(i);switch(n){case Yg:return t*e;case Zg:return t*e/s.components*s.byteLength;case $d:return t*e/s.components*s.byteLength;case Qg:return t*e*2/s.components*s.byteLength;case Xd:return t*e*2/s.components*s.byteLength;case Kg:return t*e*3/s.components*s.byteLength;case di:return t*e*4/s.components*s.byteLength;case qd:return t*e*4/s.components*s.byteLength;case rl:case ol:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case al:case ll:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ru:case Du:return Math.max(t,16)*Math.max(e,8)/4;case Cu:case Pu:return Math.max(t,8)*Math.max(e,8)/2;case Lu:case Iu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Uu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ou:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nu:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Fu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ku:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Bu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Hu:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case zu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Vu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Gu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Wu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case $u:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Xu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case qu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ju:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case cl:case Yu:case Ku:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Jg:case Zu:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Qu:case Ju:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function $A(t){switch(t){case Ii:case Xg:return{byteLength:1,components:1};case Zo:case qg:case ba:return{byteLength:2,components:1};case Gd:case Wd:return{byteLength:2,components:4};case sr:case Vd:case Yi:return{byteLength:4,components:1};case jg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _v(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function XA(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((h,v)=>h.start-v.start);let f=0;for(let h=1;h<d.length;h++){const v=d[f],g=d[h];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++f,d[f]=g)}d.length=f+1;for(let h=0,v=d.length;h<v;h++){const g=d[h];t.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var qA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jA=`#ifdef USE_ALPHAHASH
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
#endif`,YA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,KA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,QA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,JA=`#ifdef USE_AOMAP
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
#endif`,e1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t1=`#ifdef USE_BATCHING
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
#endif`,n1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,i1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,o1=`#ifdef USE_IRIDESCENCE
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
#endif`,a1=`#ifdef USE_BUMPMAP
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
#endif`,l1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,c1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,h1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,p1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,m1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,g1=`#define PI 3.141592653589793
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
} // validated`,v1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_1=`vec3 transformedNormal = objectNormal;
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
#endif`,b1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,w1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,S1="gl_FragColor = linearToOutputTexel( gl_FragColor );",M1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,E1=`#ifdef USE_ENVMAP
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
#endif`,T1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,A1=`#ifdef USE_ENVMAP
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
#endif`,C1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,R1=`#ifdef USE_ENVMAP
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
#endif`,P1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,D1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,I1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U1=`#ifdef USE_GRADIENTMAP
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
}`,O1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,N1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,F1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,k1=`uniform bool receiveShadow;
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
#endif`,B1=`#ifdef USE_ENVMAP
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
#endif`,H1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,z1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,V1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,G1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W1=`PhysicalMaterial material;
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
#endif`,$1=`struct PhysicalMaterial {
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
}`,X1=`
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
#endif`,q1=`#if defined( RE_IndirectDiffuse )
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
#endif`,j1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Y1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,K1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,J1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nC=`#if defined( USE_POINTS_UV )
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
#endif`,iC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lC=`#ifdef USE_MORPHTARGETS
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
#endif`,cC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mC=`#ifdef USE_NORMALMAP
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
#endif`,gC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_C=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,SC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,EC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,DC=`float getShadowMask() {
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
}`,LC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,IC=`#ifdef USE_SKINNING
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
#endif`,UC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,OC=`#ifdef USE_SKINNING
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
#endif`,NC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,HC=`#ifdef USE_TRANSMISSION
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
#endif`,zC=`#ifdef USE_TRANSMISSION
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
#endif`,VC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$C=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qC=`uniform sampler2D t2D;
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
}`,jC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YC=`#ifdef ENVMAP_TYPE_CUBE
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
}`,KC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QC=`#include <common>
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
}`,JC=`#if DEPTH_PACKING == 3200
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
}`,e2=`#define DISTANCE
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
}`,t2=`#define DISTANCE
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
}`,n2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s2=`uniform float scale;
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
}`,r2=`uniform vec3 diffuse;
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
}`,o2=`#include <common>
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
}`,a2=`uniform vec3 diffuse;
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
}`,l2=`#define LAMBERT
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
}`,c2=`#define LAMBERT
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
}`,u2=`#define MATCAP
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
}`,d2=`#define MATCAP
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
}`,f2=`#define NORMAL
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
}`,h2=`#define NORMAL
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
}`,p2=`#define PHONG
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
}`,m2=`#define PHONG
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
}`,g2=`#define STANDARD
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
}`,v2=`#define STANDARD
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
}`,_2=`#define TOON
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
}`,b2=`#define TOON
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
}`,x2=`uniform float size;
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
}`,y2=`uniform vec3 diffuse;
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
}`,w2=`#include <common>
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
}`,S2=`uniform vec3 color;
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
}`,M2=`uniform float rotation;
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
}`,E2=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:qA,alphahash_pars_fragment:jA,alphamap_fragment:YA,alphamap_pars_fragment:KA,alphatest_fragment:ZA,alphatest_pars_fragment:QA,aomap_fragment:JA,aomap_pars_fragment:e1,batching_pars_vertex:t1,batching_vertex:n1,begin_vertex:i1,beginnormal_vertex:s1,bsdfs:r1,iridescence_fragment:o1,bumpmap_pars_fragment:a1,clipping_planes_fragment:l1,clipping_planes_pars_fragment:c1,clipping_planes_pars_vertex:u1,clipping_planes_vertex:d1,color_fragment:f1,color_pars_fragment:h1,color_pars_vertex:p1,color_vertex:m1,common:g1,cube_uv_reflection_fragment:v1,defaultnormal_vertex:_1,displacementmap_pars_vertex:b1,displacementmap_vertex:x1,emissivemap_fragment:y1,emissivemap_pars_fragment:w1,colorspace_fragment:S1,colorspace_pars_fragment:M1,envmap_fragment:E1,envmap_common_pars_fragment:T1,envmap_pars_fragment:A1,envmap_pars_vertex:C1,envmap_physical_pars_fragment:B1,envmap_vertex:R1,fog_vertex:P1,fog_pars_vertex:D1,fog_fragment:L1,fog_pars_fragment:I1,gradientmap_pars_fragment:U1,lightmap_pars_fragment:O1,lights_lambert_fragment:N1,lights_lambert_pars_fragment:F1,lights_pars_begin:k1,lights_toon_fragment:H1,lights_toon_pars_fragment:z1,lights_phong_fragment:V1,lights_phong_pars_fragment:G1,lights_physical_fragment:W1,lights_physical_pars_fragment:$1,lights_fragment_begin:X1,lights_fragment_maps:q1,lights_fragment_end:j1,logdepthbuf_fragment:Y1,logdepthbuf_pars_fragment:K1,logdepthbuf_pars_vertex:Z1,logdepthbuf_vertex:Q1,map_fragment:J1,map_pars_fragment:eC,map_particle_fragment:tC,map_particle_pars_fragment:nC,metalnessmap_fragment:iC,metalnessmap_pars_fragment:sC,morphinstance_vertex:rC,morphcolor_vertex:oC,morphnormal_vertex:aC,morphtarget_pars_vertex:lC,morphtarget_vertex:cC,normal_fragment_begin:uC,normal_fragment_maps:dC,normal_pars_fragment:fC,normal_pars_vertex:hC,normal_vertex:pC,normalmap_pars_fragment:mC,clearcoat_normal_fragment_begin:gC,clearcoat_normal_fragment_maps:vC,clearcoat_pars_fragment:_C,iridescence_pars_fragment:bC,opaque_fragment:xC,packing:yC,premultiplied_alpha_fragment:wC,project_vertex:SC,dithering_fragment:MC,dithering_pars_fragment:EC,roughnessmap_fragment:TC,roughnessmap_pars_fragment:AC,shadowmap_pars_fragment:CC,shadowmap_pars_vertex:RC,shadowmap_vertex:PC,shadowmask_pars_fragment:DC,skinbase_vertex:LC,skinning_pars_vertex:IC,skinning_vertex:UC,skinnormal_vertex:OC,specularmap_fragment:NC,specularmap_pars_fragment:FC,tonemapping_fragment:kC,tonemapping_pars_fragment:BC,transmission_fragment:HC,transmission_pars_fragment:zC,uv_pars_fragment:VC,uv_pars_vertex:GC,uv_vertex:WC,worldpos_vertex:$C,background_vert:XC,background_frag:qC,backgroundCube_vert:jC,backgroundCube_frag:YC,cube_vert:KC,cube_frag:ZC,depth_vert:QC,depth_frag:JC,distanceRGBA_vert:e2,distanceRGBA_frag:t2,equirect_vert:n2,equirect_frag:i2,linedashed_vert:s2,linedashed_frag:r2,meshbasic_vert:o2,meshbasic_frag:a2,meshlambert_vert:l2,meshlambert_frag:c2,meshmatcap_vert:u2,meshmatcap_frag:d2,meshnormal_vert:f2,meshnormal_frag:h2,meshphong_vert:p2,meshphong_frag:m2,meshphysical_vert:g2,meshphysical_frag:v2,meshtoon_vert:_2,meshtoon_frag:b2,points_vert:x2,points_frag:y2,shadow_vert:w2,shadow_frag:S2,sprite_vert:M2,sprite_frag:E2},De={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Mi={basic:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new vt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:wn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:wn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new vt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:wn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:wn([De.points,De.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:wn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:wn([De.common,De.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:wn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:wn([De.sprite,De.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:wn([De.common,De.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:wn([De.lights,De.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Mi.physical={uniforms:wn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Ya={r:0,b:0,g:0},Hs=new Ui,T2=new jt;function A2(t,e,n,i,s,r,o){const a=new vt(0);let l=r===!0?0:1,c,u,d=null,f=0,h=null;function v(R){let w=R.isScene===!0?R.background:null;return w&&w.isTexture&&(w=(R.backgroundBlurriness>0?n:e).get(w)),w}function g(R){let w=!1;const U=v(R);U===null?p(a,l):U&&U.isColor&&(p(U,1),w=!0);const L=t.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(R,w){const U=v(w);U&&(U.isCubeTexture||U.mapping===Yl)?(u===void 0&&(u=new fi(new Sa(1,1,1),new Cs({name:"BackgroundCubeMaterial",uniforms:lo(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,D,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Hs.copy(w.backgroundRotation),Hs.x*=-1,Hs.y*=-1,Hs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Hs.y*=-1,Hs.z*=-1),u.material.uniforms.envMap.value=U,u.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(T2.makeRotationFromEuler(Hs)),u.material.toneMapped=wt.getTransfer(U.colorSpace)!==Dt,(d!==U||f!==U.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,d=U,f=U.version,h=t.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null)):U&&U.isTexture&&(c===void 0&&(c=new fi(new Zl(2,2),new Cs({name:"BackgroundMaterial",uniforms:lo(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:As,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=U,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=wt.getTransfer(U.colorSpace)!==Dt,U.matrixAutoUpdate===!0&&U.updateMatrix(),c.material.uniforms.uvTransform.value.copy(U.matrix),(d!==U||f!==U.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,d=U,f=U.version,h=t.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function p(R,w){R.getRGB(Ya,uv(t)),i.buffers.color.setClear(Ya.r,Ya.g,Ya.b,w,o)}function C(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(R,w=1){a.set(R),l=w,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,p(a,l)},render:g,addToRenderList:m,dispose:C}}function C2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(A,T,I,O,G){let ie=!1;const $=d(O,I,T);r!==$&&(r=$,c(r.object)),ie=h(A,O,I,G),ie&&v(A,O,I,G),G!==null&&e.update(G,t.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,w(A,T,I,O),G!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return t.createVertexArray()}function c(A){return t.bindVertexArray(A)}function u(A){return t.deleteVertexArray(A)}function d(A,T,I){const O=I.wireframe===!0;let G=i[A.id];G===void 0&&(G={},i[A.id]=G);let ie=G[T.id];ie===void 0&&(ie={},G[T.id]=ie);let $=ie[O];return $===void 0&&($=f(l()),ie[O]=$),$}function f(A){const T=[],I=[],O=[];for(let G=0;G<n;G++)T[G]=0,I[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:I,attributeDivisors:O,object:A,attributes:{},index:null}}function h(A,T,I,O){const G=r.attributes,ie=T.attributes;let $=0;const ue=I.getAttributes();for(const Y in ue)if(ue[Y].location>=0){const Te=G[Y];let Ne=ie[Y];if(Ne===void 0&&(Y==="instanceMatrix"&&A.instanceMatrix&&(Ne=A.instanceMatrix),Y==="instanceColor"&&A.instanceColor&&(Ne=A.instanceColor)),Te===void 0||Te.attribute!==Ne||Ne&&Te.data!==Ne.data)return!0;$++}return r.attributesNum!==$||r.index!==O}function v(A,T,I,O){const G={},ie=T.attributes;let $=0;const ue=I.getAttributes();for(const Y in ue)if(ue[Y].location>=0){let Te=ie[Y];Te===void 0&&(Y==="instanceMatrix"&&A.instanceMatrix&&(Te=A.instanceMatrix),Y==="instanceColor"&&A.instanceColor&&(Te=A.instanceColor));const Ne={};Ne.attribute=Te,Te&&Te.data&&(Ne.data=Te.data),G[Y]=Ne,$++}r.attributes=G,r.attributesNum=$,r.index=O}function g(){const A=r.newAttributes;for(let T=0,I=A.length;T<I;T++)A[T]=0}function m(A){p(A,0)}function p(A,T){const I=r.newAttributes,O=r.enabledAttributes,G=r.attributeDivisors;I[A]=1,O[A]===0&&(t.enableVertexAttribArray(A),O[A]=1),G[A]!==T&&(t.vertexAttribDivisor(A,T),G[A]=T)}function C(){const A=r.newAttributes,T=r.enabledAttributes;for(let I=0,O=T.length;I<O;I++)T[I]!==A[I]&&(t.disableVertexAttribArray(I),T[I]=0)}function R(A,T,I,O,G,ie,$){$===!0?t.vertexAttribIPointer(A,T,I,G,ie):t.vertexAttribPointer(A,T,I,O,G,ie)}function w(A,T,I,O){g();const G=O.attributes,ie=I.getAttributes(),$=T.defaultAttributeValues;for(const ue in ie){const Y=ie[ue];if(Y.location>=0){let ye=G[ue];if(ye===void 0&&(ue==="instanceMatrix"&&A.instanceMatrix&&(ye=A.instanceMatrix),ue==="instanceColor"&&A.instanceColor&&(ye=A.instanceColor)),ye!==void 0){const Te=ye.normalized,Ne=ye.itemSize,$e=e.get(ye);if($e===void 0)continue;const it=$e.buffer,je=$e.type,oe=$e.bytesPerElement,we=je===t.INT||je===t.UNSIGNED_INT||ye.gpuType===Vd;if(ye.isInterleavedBufferAttribute){const H=ye.data,ae=H.stride,re=ye.offset;if(H.isInstancedInterleavedBuffer){for(let me=0;me<Y.locationSize;me++)p(Y.location+me,H.meshPerAttribute);A.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let me=0;me<Y.locationSize;me++)m(Y.location+me);t.bindBuffer(t.ARRAY_BUFFER,it);for(let me=0;me<Y.locationSize;me++)R(Y.location+me,Ne/Y.locationSize,je,Te,ae*oe,(re+Ne/Y.locationSize*me)*oe,we)}else{if(ye.isInstancedBufferAttribute){for(let H=0;H<Y.locationSize;H++)p(Y.location+H,ye.meshPerAttribute);A.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let H=0;H<Y.locationSize;H++)m(Y.location+H);t.bindBuffer(t.ARRAY_BUFFER,it);for(let H=0;H<Y.locationSize;H++)R(Y.location+H,Ne/Y.locationSize,je,Te,Ne*oe,Ne/Y.locationSize*H*oe,we)}}else if($!==void 0){const Te=$[ue];if(Te!==void 0)switch(Te.length){case 2:t.vertexAttrib2fv(Y.location,Te);break;case 3:t.vertexAttrib3fv(Y.location,Te);break;case 4:t.vertexAttrib4fv(Y.location,Te);break;default:t.vertexAttrib1fv(Y.location,Te)}}}}C()}function U(){k();for(const A in i){const T=i[A];for(const I in T){const O=T[I];for(const G in O)u(O[G].object),delete O[G];delete T[I]}delete i[A]}}function L(A){if(i[A.id]===void 0)return;const T=i[A.id];for(const I in T){const O=T[I];for(const G in O)u(O[G].object),delete O[G];delete T[I]}delete i[A.id]}function D(A){for(const T in i){const I=i[T];if(I[A.id]===void 0)continue;const O=I[A.id];for(const G in O)u(O[G].object),delete O[G];delete I[A.id]}}function k(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:k,resetDefaultState:E,dispose:U,releaseStatesOfGeometry:L,releaseStatesOfProgram:D,initAttributes:g,enableAttribute:m,disableUnusedAttributes:C}}function R2(t,e,n){let i;function s(c){i=c}function r(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let v=0;v<d;v++)h+=u[v];n.update(h,i,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let v=0;v<c.length;v++)o(c[v],u[v],f[v]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let v=0;for(let g=0;g<d;g++)v+=u[g]*f[g];n.update(v,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function P2(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==di&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const k=D===ba&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Ii&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Yi&&!k)}function l(D){if(D==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),C=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),R=t.getParameter(t.MAX_VARYING_VECTORS),w=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),U=v>0,L=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:C,maxVaryings:R,maxFragmentUniforms:w,vertexTextures:U,maxSamples:L}}function D2(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new hs,a=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,h){const v=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,p=t.get(d);if(!s||v===null||v.length===0||r&&!m)r?u(null):c();else{const C=r?0:i,R=C*4;let w=p.clippingState||null;l.value=w,w=u(v,f,R,h);for(let U=0;U!==R;++U)w[U]=n[U];p.clippingState=w,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,v){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const p=h+g*4,C=f.matrixWorldInverse;a.getNormalMatrix(C),(m===null||m.length<p)&&(m=new Float32Array(p));for(let R=0,w=h;R!==g;++R,w+=4)o.copy(d[R]).applyMatrix4(C,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function L2(t){let e=new WeakMap;function n(o,a){return a===Mu?o.mapping=ro:a===Eu&&(o.mapping=oo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Mu||a===Eu)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new RA(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",s),n(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Dr=4,Bh=[.125,.215,.35,.446,.526,.582],$s=20,Wc=new gv,Hh=new vt;let $c=null,Xc=0,qc=0,jc=!1;const Gs=(1+Math.sqrt(5))/2,Ar=1/Gs,zh=[new Q(-Gs,Ar,0),new Q(Gs,Ar,0),new Q(-Ar,0,Gs),new Q(Ar,0,Gs),new Q(0,Gs,-Ar),new Q(0,Gs,Ar),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)],I2=new Q;class Vh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=I2}=r;$c=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($c,Xc,qc),this._renderer.xr.enabled=jc,e.scissorTest=!1,Ka(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ro||e.mapping===oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$c=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:ba,format:di,colorSpace:ao,depthBuffer:!1},s=Gh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gh(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=U2(r)),this._blurMaterial=O2(r,e,n)}return s}_compileMaterial(e){const n=new fi(this._lodPlanes[0],e);this._renderer.compile(n,Wc)}_sceneToCubeUV(e,n,i,s,r){const l=new Gn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Hh),d.toneMapping=Ts,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const g=new av({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),m=new fi(new Sa,g);let p=!1;const C=e.background;C?C.isColor&&(g.color.copy(C),e.background=null,p=!0):(g.color.copy(Hh),p=!0);for(let R=0;R<6;R++){const w=R%3;w===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[R],r.y,r.z)):w===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[R]));const U=this._cubeSize;Ka(s,w*U,R>2?U:0,U,U),d.setRenderTarget(s),p&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=C}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===ro||e.mapping===oo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$h()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new fi(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ka(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Wc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=zh[(s-r-1)%zh.length];this._blur(e,r-1,r,o,a)}n.autoClear=i}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new fi(this._lodPlanes[s],c),f=c.uniforms,h=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*$s-1),g=r/v,m=isFinite(r)?1+Math.floor(u*g):$s;m>$s&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$s}`);const p=[];let C=0;for(let D=0;D<$s;++D){const k=D/g,E=Math.exp(-k*k/2);p.push(E),D===0?C+=E:D<m&&(C+=2*E)}for(let D=0;D<p.length;D++)p[D]=p[D]/C;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:R}=this;f.dTheta.value=v,f.mipInt.value=R-i;const w=this._sizeLods[s],U=3*w*(s>R-Dr?s-R+Dr:0),L=4*(this._cubeSize-w);Ka(n,U,L,3*w,2*w),l.setRenderTarget(n),l.render(d,Wc)}}function U2(t){const e=[],n=[],i=[];let s=t;const r=t-Dr+1+Bh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);n.push(a);let l=1/a;o>t-Dr?l=Bh[o-t+Dr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,v=6,g=3,m=2,p=1,C=new Float32Array(g*v*h),R=new Float32Array(m*v*h),w=new Float32Array(p*v*h);for(let L=0;L<h;L++){const D=L%3*2/3-1,k=L>2?0:-1,E=[D,k,0,D+2/3,k,0,D+2/3,k+1,0,D,k,0,D+2/3,k+1,0,D,k+1,0];C.set(E,g*v*L),R.set(f,m*v*L);const A=[L,L,L,L,L,L];w.set(A,p*v*L)}const U=new Ds;U.setAttribute("position",new Ci(C,g)),U.setAttribute("uv",new Ci(R,m)),U.setAttribute("faceIndex",new Ci(w,p)),e.push(U),s>Dr&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Gh(t,e,n){const i=new or(t,e,n);return i.texture.mapping=Yl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ka(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function O2(t,e,n){const i=new Float32Array($s),s=new Q(0,1,0);return new Cs({name:"SphericalGaussianBlur",defines:{n:$s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qd(),fragmentShader:`

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
		`,blending:Es,depthTest:!1,depthWrite:!1})}function Wh(){return new Cs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qd(),fragmentShader:`

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
		`,blending:Es,depthTest:!1,depthWrite:!1})}function $h(){return new Cs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Es,depthTest:!1,depthWrite:!1})}function Qd(){return`

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
	`}function N2(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Mu||l===Eu,u=l===ro||l===oo;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Vh(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&s(h)?(n===null&&(n=new Vh(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function F2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&zr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function k2(t,e,n,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",o),delete s[f.id];const h=r.get(f);h&&(e.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],t.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,v=d.attributes.position;let g=0;if(h!==null){const C=h.array;g=h.version;for(let R=0,w=C.length;R<w;R+=3){const U=C[R+0],L=C[R+1],D=C[R+2];f.push(U,L,L,D,D,U)}}else if(v!==void 0){const C=v.array;g=v.version;for(let R=0,w=C.length/3-1;R<w;R+=3){const U=R+0,L=R+1,D=R+2;f.push(U,L,L,D,D,U)}}else return;const m=new(nv(f)?cv:lv)(f,1);m.version=g;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function B2(t,e,n){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){t.drawElements(i,h,r,f*o),n.update(h,i,1)}function c(f,h,v){v!==0&&(t.drawElementsInstanced(i,h,r,f*o,v),n.update(h,i,v))}function u(f,h,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,v);let m=0;for(let p=0;p<v;p++)m+=h[p];n.update(m,i,1)}function d(f,h,v,g){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,h[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,r,f,0,g,0,v);let p=0;for(let C=0;C<v;C++)p+=h[C]*g[C];n.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function H2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function z2(t,e,n){const i=new WeakMap,s=new Xt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let E=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();const h=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],C=a.morphAttributes.color||[];let R=0;h===!0&&(R=1),v===!0&&(R=2),g===!0&&(R=3);let w=a.attributes.position.count*R,U=1;w>e.maxTextureSize&&(U=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const L=new Float32Array(w*U*4*d),D=new iv(L,w,U,d);D.type=Yi,D.needsUpdate=!0;const k=R*4;for(let A=0;A<d;A++){const T=m[A],I=p[A],O=C[A],G=w*U*4*A;for(let ie=0;ie<T.count;ie++){const $=ie*k;h===!0&&(s.fromBufferAttribute(T,ie),L[G+$+0]=s.x,L[G+$+1]=s.y,L[G+$+2]=s.z,L[G+$+3]=0),v===!0&&(s.fromBufferAttribute(I,ie),L[G+$+4]=s.x,L[G+$+5]=s.y,L[G+$+6]=s.z,L[G+$+7]=0),g===!0&&(s.fromBufferAttribute(O,ie),L[G+$+8]=s.x,L[G+$+9]=s.y,L[G+$+10]=s.z,L[G+$+11]=O.itemSize===4?s.w:1)}}f={count:d,texture:D,size:new ut(w,U)},i.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let h=0;for(let g=0;g<c.length;g++)h+=c[g];const v=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:r}}function V2(t,e,n,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:o}}const bv=new An,Xh=new pv(1,1),xv=new iv,yv=new fA,wv=new fv,qh=[],jh=[],Yh=new Float32Array(16),Kh=new Float32Array(9),Zh=new Float32Array(4);function go(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=qh[s];if(r===void 0&&(r=new Float32Array(s),qh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function nn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function sn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ql(t,e){let n=jh[e];n===void 0&&(n=new Int32Array(e),jh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function G2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function W2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;t.uniform2fv(this.addr,e),sn(n,e)}}function $2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(nn(n,e))return;t.uniform3fv(this.addr,e),sn(n,e)}}function X2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;t.uniform4fv(this.addr,e),sn(n,e)}}function q2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(nn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),sn(n,e)}else{if(nn(n,i))return;Zh.set(i),t.uniformMatrix2fv(this.addr,!1,Zh),sn(n,i)}}function j2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(nn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),sn(n,e)}else{if(nn(n,i))return;Kh.set(i),t.uniformMatrix3fv(this.addr,!1,Kh),sn(n,i)}}function Y2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(nn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),sn(n,e)}else{if(nn(n,i))return;Yh.set(i),t.uniformMatrix4fv(this.addr,!1,Yh),sn(n,i)}}function K2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Z2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;t.uniform2iv(this.addr,e),sn(n,e)}}function Q2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;t.uniform3iv(this.addr,e),sn(n,e)}}function J2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;t.uniform4iv(this.addr,e),sn(n,e)}}function eR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function tR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;t.uniform2uiv(this.addr,e),sn(n,e)}}function nR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;t.uniform3uiv(this.addr,e),sn(n,e)}}function iR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;t.uniform4uiv(this.addr,e),sn(n,e)}}function sR(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(Xh.compareFunction=tv,r=Xh):r=bv,n.setTexture2D(e||r,s)}function rR(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||yv,s)}function oR(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||wv,s)}function aR(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||xv,s)}function lR(t){switch(t){case 5126:return G2;case 35664:return W2;case 35665:return $2;case 35666:return X2;case 35674:return q2;case 35675:return j2;case 35676:return Y2;case 5124:case 35670:return K2;case 35667:case 35671:return Z2;case 35668:case 35672:return Q2;case 35669:case 35673:return J2;case 5125:return eR;case 36294:return tR;case 36295:return nR;case 36296:return iR;case 35678:case 36198:case 36298:case 36306:case 35682:return sR;case 35679:case 36299:case 36307:return rR;case 35680:case 36300:case 36308:case 36293:return oR;case 36289:case 36303:case 36311:case 36292:return aR}}function cR(t,e){t.uniform1fv(this.addr,e)}function uR(t,e){const n=go(e,this.size,2);t.uniform2fv(this.addr,n)}function dR(t,e){const n=go(e,this.size,3);t.uniform3fv(this.addr,n)}function fR(t,e){const n=go(e,this.size,4);t.uniform4fv(this.addr,n)}function hR(t,e){const n=go(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function pR(t,e){const n=go(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function mR(t,e){const n=go(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function gR(t,e){t.uniform1iv(this.addr,e)}function vR(t,e){t.uniform2iv(this.addr,e)}function _R(t,e){t.uniform3iv(this.addr,e)}function bR(t,e){t.uniform4iv(this.addr,e)}function xR(t,e){t.uniform1uiv(this.addr,e)}function yR(t,e){t.uniform2uiv(this.addr,e)}function wR(t,e){t.uniform3uiv(this.addr,e)}function SR(t,e){t.uniform4uiv(this.addr,e)}function MR(t,e,n){const i=this.cache,s=e.length,r=Ql(n,s);nn(i,r)||(t.uniform1iv(this.addr,r),sn(i,r));for(let o=0;o!==s;++o)n.setTexture2D(e[o]||bv,r[o])}function ER(t,e,n){const i=this.cache,s=e.length,r=Ql(n,s);nn(i,r)||(t.uniform1iv(this.addr,r),sn(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||yv,r[o])}function TR(t,e,n){const i=this.cache,s=e.length,r=Ql(n,s);nn(i,r)||(t.uniform1iv(this.addr,r),sn(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||wv,r[o])}function AR(t,e,n){const i=this.cache,s=e.length,r=Ql(n,s);nn(i,r)||(t.uniform1iv(this.addr,r),sn(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||xv,r[o])}function CR(t){switch(t){case 5126:return cR;case 35664:return uR;case 35665:return dR;case 35666:return fR;case 35674:return hR;case 35675:return pR;case 35676:return mR;case 5124:case 35670:return gR;case 35667:case 35671:return vR;case 35668:case 35672:return _R;case 35669:case 35673:return bR;case 5125:return xR;case 36294:return yR;case 36295:return wR;case 36296:return SR;case 35678:case 36198:case 36298:case 36306:case 35682:return MR;case 35679:case 36299:case 36307:return ER;case 35680:case 36300:case 36308:case 36293:return TR;case 36289:case 36303:case 36311:case 36292:return AR}}class RR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=lR(n.type)}}class PR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=CR(n.type)}}class DR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const Yc=/(\w+)(\])?(\[|\.)?/g;function Qh(t,e){t.seq.push(e),t.map[e.id]=e}function LR(t,e,n){const i=t.name,s=i.length;for(Yc.lastIndex=0;;){const r=Yc.exec(i),o=Yc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Qh(n,c===void 0?new RR(a,t,e):new PR(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new DR(a),Qh(n,d)),n=d}}}class dl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(n,s),o=e.getUniformLocation(n,r.name);LR(r,o,this)}}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function Jh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const IR=37297;let UR=0;function OR(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const ep=new ht;function NR(t){wt._getMatrix(ep,wt.workingColorSpace,t);const e=`mat3( ${ep.elements.map(n=>n.toFixed(4))} )`;switch(wt.getTransfer(t)){case Pl:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function tp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+OR(t.getShaderSource(e),a)}else return r}function FR(t,e){const n=NR(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function kR(t,e){let n;switch(e){case BT:n="Linear";break;case HT:n="Reinhard";break;case zT:n="Cineon";break;case VT:n="ACESFilmic";break;case WT:n="AgX";break;case $T:n="Neutral";break;case GT:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Za=new Q;function BR(){wt.getLuminanceCoefficients(Za);const t=Za.x.toFixed(4),e=Za.y.toFixed(4),n=Za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function zR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function VR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Uo(t){return t!==""}function np(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ip(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GR=/^[ \t]*#include +<([\w\d./]+)>/gm;function id(t){return t.replace(GR,$R)}const WR=new Map;function $R(t,e){let n=pt[e];if(n===void 0){const i=WR.get(e);if(i!==void 0)n=pt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return id(n)}const XR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sp(t){return t.replace(XR,qR)}function qR(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rp(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function jR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Gg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===_T?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function YR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ro:case oo:e="ENVMAP_TYPE_CUBE";break;case Yl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function KR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case oo:e="ENVMAP_MODE_REFRACTION";break}return e}function ZR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Wg:e="ENVMAP_BLENDING_MULTIPLY";break;case FT:e="ENVMAP_BLENDING_MIX";break;case kT:e="ENVMAP_BLENDING_ADD";break}return e}function QR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function JR(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=jR(n),c=YR(n),u=KR(n),d=ZR(n),f=QR(n),h=HR(n),v=zR(r),g=s.createProgram();let m,p,C=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Uo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Uo).join(`
`),p.length>0&&(p+=`
`)):(m=[rp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),p=[rp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ts?"#define TONE_MAPPING":"",n.toneMapping!==Ts?pt.tonemapping_pars_fragment:"",n.toneMapping!==Ts?kR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,FR("linearToOutputTexel",n.outputColorSpace),BR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Uo).join(`
`)),o=id(o),o=np(o,n),o=ip(o,n),a=id(a),a=np(a,n),a=ip(a,n),o=sp(o),a=sp(a),n.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const R=C+m+o,w=C+p+a,U=Jh(s,s.VERTEX_SHADER,R),L=Jh(s,s.FRAGMENT_SHADER,w);s.attachShader(g,U),s.attachShader(g,L),n.index0AttributeName!==void 0?s.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function D(T){if(t.debug.checkShaderErrors){const I=s.getProgramInfoLog(g)||"",O=s.getShaderInfoLog(U)||"",G=s.getShaderInfoLog(L)||"",ie=I.trim(),$=O.trim(),ue=G.trim();let Y=!0,ye=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,g,U,L);else{const Te=tp(s,U,"vertex"),Ne=tp(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+ie+`
`+Te+`
`+Ne)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):($===""||ue==="")&&(ye=!1);ye&&(T.diagnostics={runnable:Y,programLog:ie,vertexShader:{log:$,prefix:m},fragmentShader:{log:ue,prefix:p}})}s.deleteShader(U),s.deleteShader(L),k=new dl(s,g),E=VR(s,g)}let k;this.getUniforms=function(){return k===void 0&&D(this),k};let E;this.getAttributes=function(){return E===void 0&&D(this),E};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(g,IR)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=UR++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=U,this.fragmentShader=L,this}let eP=0;class tP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new nP(e),n.set(e,i)),i}}class nP{constructor(e){this.id=eP++,this.code=e,this.usedTimes=0}}function iP(t,e,n,i,s,r,o){const a=new rv,l=new tP,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let h=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,A,T,I,O){const G=I.fog,ie=O.geometry,$=E.isMeshStandardMaterial?I.environment:null,ue=(E.isMeshStandardMaterial?n:e).get(E.envMap||$),Y=ue&&ue.mapping===Yl?ue.image.height:null,ye=v[E.type];E.precision!==null&&(h=s.getMaxPrecision(E.precision),h!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",h,"instead."));const Te=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Ne=Te!==void 0?Te.length:0;let $e=0;ie.morphAttributes.position!==void 0&&($e=1),ie.morphAttributes.normal!==void 0&&($e=2),ie.morphAttributes.color!==void 0&&($e=3);let it,je,oe,we;if(ye){const B=Mi[ye];it=B.vertexShader,je=B.fragmentShader}else it=E.vertexShader,je=E.fragmentShader,l.update(E),oe=l.getVertexShaderID(E),we=l.getFragmentShaderID(E);const H=t.getRenderTarget(),ae=t.state.buffers.depth.getReversed(),re=O.isInstancedMesh===!0,me=O.isBatchedMesh===!0,Ke=!!E.map,P=!!E.matcap,_=!!ue,V=!!E.aoMap,j=!!E.lightMap,ee=!!E.bumpMap,q=!!E.normalMap,ge=!!E.displacementMap,J=!!E.emissiveMap,ce=!!E.metalnessMap,fe=!!E.roughnessMap,Pe=E.anisotropy>0,S=E.clearcoat>0,x=E.dispersion>0,F=E.iridescence>0,Z=E.sheen>0,le=E.transmission>0,K=Pe&&!!E.anisotropyMap,Le=S&&!!E.clearcoatMap,ve=S&&!!E.clearcoatNormalMap,Ie=S&&!!E.clearcoatRoughnessMap,Ue=F&&!!E.iridescenceMap,_e=F&&!!E.iridescenceThicknessMap,Ce=Z&&!!E.sheenColorMap,He=Z&&!!E.sheenRoughnessMap,Fe=!!E.specularMap,Ae=!!E.specularColorMap,lt=!!E.specularIntensityMap,z=le&&!!E.transmissionMap,xe=le&&!!E.thicknessMap,Ee=!!E.gradientMap,ke=!!E.alphaMap,be=E.alphaTest>0,he=!!E.alphaHash,Re=!!E.extensions;let qe=Ts;E.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(qe=t.toneMapping);const Mt={shaderID:ye,shaderType:E.type,shaderName:E.name,vertexShader:it,fragmentShader:je,defines:E.defines,customVertexShaderID:oe,customFragmentShaderID:we,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:h,batching:me,batchingColor:me&&O._colorsTexture!==null,instancing:re,instancingColor:re&&O.instanceColor!==null,instancingMorph:re&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:H===null?t.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:ao,alphaToCoverage:!!E.alphaToCoverage,map:Ke,matcap:P,envMap:_,envMapMode:_&&ue.mapping,envMapCubeUVHeight:Y,aoMap:V,lightMap:j,bumpMap:ee,normalMap:q,displacementMap:f&&ge,emissiveMap:J,normalMapObjectSpace:q&&E.normalMapType===YT,normalMapTangentSpace:q&&E.normalMapType===ev,metalnessMap:ce,roughnessMap:fe,anisotropy:Pe,anisotropyMap:K,clearcoat:S,clearcoatMap:Le,clearcoatNormalMap:ve,clearcoatRoughnessMap:Ie,dispersion:x,iridescence:F,iridescenceMap:Ue,iridescenceThicknessMap:_e,sheen:Z,sheenColorMap:Ce,sheenRoughnessMap:He,specularMap:Fe,specularColorMap:Ae,specularIntensityMap:lt,transmission:le,transmissionMap:z,thicknessMap:xe,gradientMap:Ee,opaque:E.transparent===!1&&E.blending===Hr&&E.alphaToCoverage===!1,alphaMap:ke,alphaTest:be,alphaHash:he,combine:E.combine,mapUv:Ke&&g(E.map.channel),aoMapUv:V&&g(E.aoMap.channel),lightMapUv:j&&g(E.lightMap.channel),bumpMapUv:ee&&g(E.bumpMap.channel),normalMapUv:q&&g(E.normalMap.channel),displacementMapUv:ge&&g(E.displacementMap.channel),emissiveMapUv:J&&g(E.emissiveMap.channel),metalnessMapUv:ce&&g(E.metalnessMap.channel),roughnessMapUv:fe&&g(E.roughnessMap.channel),anisotropyMapUv:K&&g(E.anisotropyMap.channel),clearcoatMapUv:Le&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:ve&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:He&&g(E.sheenRoughnessMap.channel),specularMapUv:Fe&&g(E.specularMap.channel),specularColorMapUv:Ae&&g(E.specularColorMap.channel),specularIntensityMapUv:lt&&g(E.specularIntensityMap.channel),transmissionMapUv:z&&g(E.transmissionMap.channel),thicknessMapUv:xe&&g(E.thicknessMap.channel),alphaMapUv:ke&&g(E.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(q||Pe),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!ie.attributes.uv&&(Ke||ke),fog:!!G,useFog:E.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ae,skinning:O.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:$e,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&T.length>0,shadowMapType:t.shadowMap.type,toneMapping:qe,decodeVideoTexture:Ke&&E.map.isVideoTexture===!0&&wt.getTransfer(E.map.colorSpace)===Dt,decodeVideoTextureEmissive:J&&E.emissiveMap.isVideoTexture===!0&&wt.getTransfer(E.emissiveMap.colorSpace)===Dt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ji,flipSided:E.side===On,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Re&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&E.extensions.multiDraw===!0||me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function p(E){const A=[];if(E.shaderID?A.push(E.shaderID):(A.push(E.customVertexShaderID),A.push(E.customFragmentShaderID)),E.defines!==void 0)for(const T in E.defines)A.push(T),A.push(E.defines[T]);return E.isRawShaderMaterial===!1&&(C(A,E),R(A,E),A.push(t.outputColorSpace)),A.push(E.customProgramCacheKey),A.join()}function C(E,A){E.push(A.precision),E.push(A.outputColorSpace),E.push(A.envMapMode),E.push(A.envMapCubeUVHeight),E.push(A.mapUv),E.push(A.alphaMapUv),E.push(A.lightMapUv),E.push(A.aoMapUv),E.push(A.bumpMapUv),E.push(A.normalMapUv),E.push(A.displacementMapUv),E.push(A.emissiveMapUv),E.push(A.metalnessMapUv),E.push(A.roughnessMapUv),E.push(A.anisotropyMapUv),E.push(A.clearcoatMapUv),E.push(A.clearcoatNormalMapUv),E.push(A.clearcoatRoughnessMapUv),E.push(A.iridescenceMapUv),E.push(A.iridescenceThicknessMapUv),E.push(A.sheenColorMapUv),E.push(A.sheenRoughnessMapUv),E.push(A.specularMapUv),E.push(A.specularColorMapUv),E.push(A.specularIntensityMapUv),E.push(A.transmissionMapUv),E.push(A.thicknessMapUv),E.push(A.combine),E.push(A.fogExp2),E.push(A.sizeAttenuation),E.push(A.morphTargetsCount),E.push(A.morphAttributeCount),E.push(A.numDirLights),E.push(A.numPointLights),E.push(A.numSpotLights),E.push(A.numSpotLightMaps),E.push(A.numHemiLights),E.push(A.numRectAreaLights),E.push(A.numDirLightShadows),E.push(A.numPointLightShadows),E.push(A.numSpotLightShadows),E.push(A.numSpotLightShadowsWithMaps),E.push(A.numLightProbes),E.push(A.shadowMapType),E.push(A.toneMapping),E.push(A.numClippingPlanes),E.push(A.numClipIntersection),E.push(A.depthPacking)}function R(E,A){a.disableAll(),A.supportsVertexTextures&&a.enable(0),A.instancing&&a.enable(1),A.instancingColor&&a.enable(2),A.instancingMorph&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),A.dispersion&&a.enable(20),A.batchingColor&&a.enable(21),A.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),E.push(a.mask)}function w(E){const A=v[E.type];let T;if(A){const I=Mi[A];T=EA.clone(I.uniforms)}else T=E.uniforms;return T}function U(E,A){let T;for(let I=0,O=u.length;I<O;I++){const G=u[I];if(G.cacheKey===A){T=G,++T.usedTimes;break}}return T===void 0&&(T=new JR(t,A,E,r),u.push(T)),T}function L(E){if(--E.usedTimes===0){const A=u.indexOf(E);u[A]=u[u.length-1],u.pop(),E.destroy()}}function D(E){l.remove(E)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:U,releaseProgram:L,releaseShaderCache:D,programs:u,dispose:k}}function sP(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function rP(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function op(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ap(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(d,f,h,v,g,m){let p=t[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:v,renderOrder:d.renderOrder,z:g,group:m},t[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=g,p.group=m),e++,p}function a(d,f,h,v,g,m){const p=o(d,f,h,v,g,m);h.transmission>0?i.push(p):h.transparent===!0?s.push(p):n.push(p)}function l(d,f,h,v,g,m){const p=o(d,f,h,v,g,m);h.transmission>0?i.unshift(p):h.transparent===!0?s.unshift(p):n.unshift(p)}function c(d,f){n.length>1&&n.sort(d||rP),i.length>1&&i.sort(f||op),s.length>1&&s.sort(f||op)}function u(){for(let d=e,f=t.length;d<f;d++){const h=t[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function oP(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new ap,t.set(i,[o])):s>=r.length?(o=new ap,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function aP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Q,color:new vt};break;case"SpotLight":n={position:new Q,direction:new Q,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Q,color:new vt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Q,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":n={color:new vt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return t[e.id]=n,n}}}function lP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let cP=0;function uP(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function dP(t){const e=new aP,n=lP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Q);const s=new Q,r=new jt,o=new jt;function a(c){let u=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let h=0,v=0,g=0,m=0,p=0,C=0,R=0,w=0,U=0,L=0,D=0;c.sort(uP);for(let E=0,A=c.length;E<A;E++){const T=c[E],I=T.color,O=T.intensity,G=T.distance,ie=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=I.r*O,d+=I.g*O,f+=I.b*O;else if(T.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(T.sh.coefficients[$],O);D++}else if(T.isDirectionalLight){const $=e.get(T);if($.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const ue=T.shadow,Y=n.get(T);Y.shadowIntensity=ue.intensity,Y.shadowBias=ue.bias,Y.shadowNormalBias=ue.normalBias,Y.shadowRadius=ue.radius,Y.shadowMapSize=ue.mapSize,i.directionalShadow[h]=Y,i.directionalShadowMap[h]=ie,i.directionalShadowMatrix[h]=T.shadow.matrix,C++}i.directional[h]=$,h++}else if(T.isSpotLight){const $=e.get(T);$.position.setFromMatrixPosition(T.matrixWorld),$.color.copy(I).multiplyScalar(O),$.distance=G,$.coneCos=Math.cos(T.angle),$.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),$.decay=T.decay,i.spot[g]=$;const ue=T.shadow;if(T.map&&(i.spotLightMap[U]=T.map,U++,ue.updateMatrices(T),T.castShadow&&L++),i.spotLightMatrix[g]=ue.matrix,T.castShadow){const Y=n.get(T);Y.shadowIntensity=ue.intensity,Y.shadowBias=ue.bias,Y.shadowNormalBias=ue.normalBias,Y.shadowRadius=ue.radius,Y.shadowMapSize=ue.mapSize,i.spotShadow[g]=Y,i.spotShadowMap[g]=ie,w++}g++}else if(T.isRectAreaLight){const $=e.get(T);$.color.copy(I).multiplyScalar(O),$.halfWidth.set(T.width*.5,0,0),$.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=$,m++}else if(T.isPointLight){const $=e.get(T);if($.color.copy(T.color).multiplyScalar(T.intensity),$.distance=T.distance,$.decay=T.decay,T.castShadow){const ue=T.shadow,Y=n.get(T);Y.shadowIntensity=ue.intensity,Y.shadowBias=ue.bias,Y.shadowNormalBias=ue.normalBias,Y.shadowRadius=ue.radius,Y.shadowMapSize=ue.mapSize,Y.shadowCameraNear=ue.camera.near,Y.shadowCameraFar=ue.camera.far,i.pointShadow[v]=Y,i.pointShadowMap[v]=ie,i.pointShadowMatrix[v]=T.shadow.matrix,R++}i.point[v]=$,v++}else if(T.isHemisphereLight){const $=e.get(T);$.skyColor.copy(T.color).multiplyScalar(O),$.groundColor.copy(T.groundColor).multiplyScalar(O),i.hemi[p]=$,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const k=i.hash;(k.directionalLength!==h||k.pointLength!==v||k.spotLength!==g||k.rectAreaLength!==m||k.hemiLength!==p||k.numDirectionalShadows!==C||k.numPointShadows!==R||k.numSpotShadows!==w||k.numSpotMaps!==U||k.numLightProbes!==D)&&(i.directional.length=h,i.spot.length=g,i.rectArea.length=m,i.point.length=v,i.hemi.length=p,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=w+U-L,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=D,k.directionalLength=h,k.pointLength=v,k.spotLength=g,k.rectAreaLength=m,k.hemiLength=p,k.numDirectionalShadows=C,k.numPointShadows=R,k.numSpotShadows=w,k.numSpotMaps=U,k.numLightProbes=D,i.version=cP++)}function l(c,u){let d=0,f=0,h=0,v=0,g=0;const m=u.matrixWorldInverse;for(let p=0,C=c.length;p<C;p++){const R=c[p];if(R.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),d++}else if(R.isSpotLight){const w=i.spot[h];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),h++}else if(R.isRectAreaLight){const w=i.rectArea[v];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(R.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(R.width*.5,0,0),w.halfHeight.set(0,R.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),v++}else if(R.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(R.matrixWorld),w.position.applyMatrix4(m),f++}else if(R.isHemisphereLight){const w=i.hemi[g];w.direction.setFromMatrixPosition(R.matrixWorld),w.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function lp(t){const e=new dP(t),n=[],i=[];function s(u){c.camera=u,n.length=0,i.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function fP(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new lp(t),e.set(s,[a])):r>=o.length?(a=new lp(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const hP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pP=`uniform sampler2D shadow_pass;
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
}`;function mP(t,e,n){let i=new Kd;const s=new ut,r=new ut,o=new Xt,a=new OA({depthPacking:jT}),l=new NA,c={},u=n.maxTextureSize,d={[As]:On,[On]:As,[ji]:ji},f=new Cs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:hP,fragmentShader:pP}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const v=new Ds;v.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new fi(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gg;let p=this.type;this.render=function(L,D,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const E=t.getRenderTarget(),A=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),I=t.state;I.setBlending(Es),I.buffers.depth.getReversed()?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const O=p!==Vi&&this.type===Vi,G=p===Vi&&this.type!==Vi;for(let ie=0,$=L.length;ie<$;ie++){const ue=L[ie],Y=ue.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const ye=Y.getFrameExtents();if(s.multiply(ye),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ye.x),s.x=r.x*ye.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ye.y),s.y=r.y*ye.y,Y.mapSize.y=r.y)),Y.map===null||O===!0||G===!0){const Ne=this.type!==Vi?{minFilter:pi,magFilter:pi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new or(s.x,s.y,Ne),Y.map.texture.name=ue.name+".shadowMap",Y.camera.updateProjectionMatrix()}t.setRenderTarget(Y.map),t.clear();const Te=Y.getViewportCount();for(let Ne=0;Ne<Te;Ne++){const $e=Y.getViewport(Ne);o.set(r.x*$e.x,r.y*$e.y,r.x*$e.z,r.y*$e.w),I.viewport(o),Y.updateMatrices(ue,Ne),i=Y.getFrustum(),w(D,k,Y.camera,ue,this.type)}Y.isPointLightShadow!==!0&&this.type===Vi&&C(Y,k),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(E,A,T)};function C(L,D){const k=e.update(g);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,h.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new or(s.x,s.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,t.setRenderTarget(L.mapPass),t.clear(),t.renderBufferDirect(D,null,k,f,g,null),h.uniforms.shadow_pass.value=L.mapPass.texture,h.uniforms.resolution.value=L.mapSize,h.uniforms.radius.value=L.radius,t.setRenderTarget(L.map),t.clear(),t.renderBufferDirect(D,null,k,h,g,null)}function R(L,D,k,E){let A=null;const T=k.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(T!==void 0)A=T;else if(A=k.isPointLight===!0?l:a,t.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const I=A.uuid,O=D.uuid;let G=c[I];G===void 0&&(G={},c[I]=G);let ie=G[O];ie===void 0&&(ie=A.clone(),G[O]=ie,D.addEventListener("dispose",U)),A=ie}if(A.visible=D.visible,A.wireframe=D.wireframe,E===Vi?A.side=D.shadowSide!==null?D.shadowSide:D.side:A.side=D.shadowSide!==null?D.shadowSide:d[D.side],A.alphaMap=D.alphaMap,A.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,A.map=D.map,A.clipShadows=D.clipShadows,A.clippingPlanes=D.clippingPlanes,A.clipIntersection=D.clipIntersection,A.displacementMap=D.displacementMap,A.displacementScale=D.displacementScale,A.displacementBias=D.displacementBias,A.wireframeLinewidth=D.wireframeLinewidth,A.linewidth=D.linewidth,k.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const I=t.properties.get(A);I.light=k}return A}function w(L,D,k,E,A){if(L.visible===!1)return;if(L.layers.test(D.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&A===Vi)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,L.matrixWorld);const O=e.update(L),G=L.material;if(Array.isArray(G)){const ie=O.groups;for(let $=0,ue=ie.length;$<ue;$++){const Y=ie[$],ye=G[Y.materialIndex];if(ye&&ye.visible){const Te=R(L,ye,E,A);L.onBeforeShadow(t,L,D,k,O,Te,Y),t.renderBufferDirect(k,null,O,Te,L,Y),L.onAfterShadow(t,L,D,k,O,Te,Y)}}}else if(G.visible){const ie=R(L,G,E,A);L.onBeforeShadow(t,L,D,k,O,ie,null),t.renderBufferDirect(k,null,O,ie,L,null),L.onAfterShadow(t,L,D,k,O,ie,null)}}const I=L.children;for(let O=0,G=I.length;O<G;O++)w(I[O],D,k,E,A)}function U(L){L.target.removeEventListener("dispose",U);for(const k in c){const E=c[k],A=L.target.uuid;A in E&&(E[A].dispose(),delete E[A])}}}const gP={[vu]:_u,[bu]:wu,[xu]:Su,[so]:yu,[_u]:vu,[wu]:bu,[Su]:xu,[yu]:so};function vP(t,e){function n(){let z=!1;const xe=new Xt;let Ee=null;const ke=new Xt(0,0,0,0);return{setMask:function(be){Ee!==be&&!z&&(t.colorMask(be,be,be,be),Ee=be)},setLocked:function(be){z=be},setClear:function(be,he,Re,qe,Mt){Mt===!0&&(be*=qe,he*=qe,Re*=qe),xe.set(be,he,Re,qe),ke.equals(xe)===!1&&(t.clearColor(be,he,Re,qe),ke.copy(xe))},reset:function(){z=!1,Ee=null,ke.set(-1,0,0,0)}}}function i(){let z=!1,xe=!1,Ee=null,ke=null,be=null;return{setReversed:function(he){if(xe!==he){const Re=e.get("EXT_clip_control");he?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),xe=he;const qe=be;be=null,this.setClear(qe)}},getReversed:function(){return xe},setTest:function(he){he?H(t.DEPTH_TEST):ae(t.DEPTH_TEST)},setMask:function(he){Ee!==he&&!z&&(t.depthMask(he),Ee=he)},setFunc:function(he){if(xe&&(he=gP[he]),ke!==he){switch(he){case vu:t.depthFunc(t.NEVER);break;case _u:t.depthFunc(t.ALWAYS);break;case bu:t.depthFunc(t.LESS);break;case so:t.depthFunc(t.LEQUAL);break;case xu:t.depthFunc(t.EQUAL);break;case yu:t.depthFunc(t.GEQUAL);break;case wu:t.depthFunc(t.GREATER);break;case Su:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ke=he}},setLocked:function(he){z=he},setClear:function(he){be!==he&&(xe&&(he=1-he),t.clearDepth(he),be=he)},reset:function(){z=!1,Ee=null,ke=null,be=null,xe=!1}}}function s(){let z=!1,xe=null,Ee=null,ke=null,be=null,he=null,Re=null,qe=null,Mt=null;return{setTest:function(B){z||(B?H(t.STENCIL_TEST):ae(t.STENCIL_TEST))},setMask:function(B){xe!==B&&!z&&(t.stencilMask(B),xe=B)},setFunc:function(B,y,N){(Ee!==B||ke!==y||be!==N)&&(t.stencilFunc(B,y,N),Ee=B,ke=y,be=N)},setOp:function(B,y,N){(he!==B||Re!==y||qe!==N)&&(t.stencilOp(B,y,N),he=B,Re=y,qe=N)},setLocked:function(B){z=B},setClear:function(B){Mt!==B&&(t.clearStencil(B),Mt=B)},reset:function(){z=!1,xe=null,Ee=null,ke=null,be=null,he=null,Re=null,qe=null,Mt=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],v=null,g=!1,m=null,p=null,C=null,R=null,w=null,U=null,L=null,D=new vt(0,0,0),k=0,E=!1,A=null,T=null,I=null,O=null,G=null;const ie=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ue=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(Y)[1]),$=ue>=1):Y.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),$=ue>=2);let ye=null,Te={};const Ne=t.getParameter(t.SCISSOR_BOX),$e=t.getParameter(t.VIEWPORT),it=new Xt().fromArray(Ne),je=new Xt().fromArray($e);function oe(z,xe,Ee,ke){const be=new Uint8Array(4),he=t.createTexture();t.bindTexture(z,he),t.texParameteri(z,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(z,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Re=0;Re<Ee;Re++)z===t.TEXTURE_3D||z===t.TEXTURE_2D_ARRAY?t.texImage3D(xe,0,t.RGBA,1,1,ke,0,t.RGBA,t.UNSIGNED_BYTE,be):t.texImage2D(xe+Re,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,be);return he}const we={};we[t.TEXTURE_2D]=oe(t.TEXTURE_2D,t.TEXTURE_2D,1),we[t.TEXTURE_CUBE_MAP]=oe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[t.TEXTURE_2D_ARRAY]=oe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),we[t.TEXTURE_3D]=oe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),H(t.DEPTH_TEST),o.setFunc(so),ee(!1),q(dh),H(t.CULL_FACE),V(Es);function H(z){u[z]!==!0&&(t.enable(z),u[z]=!0)}function ae(z){u[z]!==!1&&(t.disable(z),u[z]=!1)}function re(z,xe){return d[z]!==xe?(t.bindFramebuffer(z,xe),d[z]=xe,z===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=xe),z===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=xe),!0):!1}function me(z,xe){let Ee=h,ke=!1;if(z){Ee=f.get(xe),Ee===void 0&&(Ee=[],f.set(xe,Ee));const be=z.textures;if(Ee.length!==be.length||Ee[0]!==t.COLOR_ATTACHMENT0){for(let he=0,Re=be.length;he<Re;he++)Ee[he]=t.COLOR_ATTACHMENT0+he;Ee.length=be.length,ke=!0}}else Ee[0]!==t.BACK&&(Ee[0]=t.BACK,ke=!0);ke&&t.drawBuffers(Ee)}function Ke(z){return v!==z?(t.useProgram(z),v=z,!0):!1}const P={[Ws]:t.FUNC_ADD,[xT]:t.FUNC_SUBTRACT,[yT]:t.FUNC_REVERSE_SUBTRACT};P[wT]=t.MIN,P[ST]=t.MAX;const _={[MT]:t.ZERO,[ET]:t.ONE,[TT]:t.SRC_COLOR,[mu]:t.SRC_ALPHA,[LT]:t.SRC_ALPHA_SATURATE,[PT]:t.DST_COLOR,[CT]:t.DST_ALPHA,[AT]:t.ONE_MINUS_SRC_COLOR,[gu]:t.ONE_MINUS_SRC_ALPHA,[DT]:t.ONE_MINUS_DST_COLOR,[RT]:t.ONE_MINUS_DST_ALPHA,[IT]:t.CONSTANT_COLOR,[UT]:t.ONE_MINUS_CONSTANT_COLOR,[OT]:t.CONSTANT_ALPHA,[NT]:t.ONE_MINUS_CONSTANT_ALPHA};function V(z,xe,Ee,ke,be,he,Re,qe,Mt,B){if(z===Es){g===!0&&(ae(t.BLEND),g=!1);return}if(g===!1&&(H(t.BLEND),g=!0),z!==bT){if(z!==m||B!==E){if((p!==Ws||w!==Ws)&&(t.blendEquation(t.FUNC_ADD),p=Ws,w=Ws),B)switch(z){case Hr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case fh:t.blendFunc(t.ONE,t.ONE);break;case hh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ph:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Hr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case fh:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case hh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ph:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}C=null,R=null,U=null,L=null,D.set(0,0,0),k=0,m=z,E=B}return}be=be||xe,he=he||Ee,Re=Re||ke,(xe!==p||be!==w)&&(t.blendEquationSeparate(P[xe],P[be]),p=xe,w=be),(Ee!==C||ke!==R||he!==U||Re!==L)&&(t.blendFuncSeparate(_[Ee],_[ke],_[he],_[Re]),C=Ee,R=ke,U=he,L=Re),(qe.equals(D)===!1||Mt!==k)&&(t.blendColor(qe.r,qe.g,qe.b,Mt),D.copy(qe),k=Mt),m=z,E=!1}function j(z,xe){z.side===ji?ae(t.CULL_FACE):H(t.CULL_FACE);let Ee=z.side===On;xe&&(Ee=!Ee),ee(Ee),z.blending===Hr&&z.transparent===!1?V(Es):V(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const ke=z.stencilWrite;a.setTest(ke),ke&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),J(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?H(t.SAMPLE_ALPHA_TO_COVERAGE):ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function ee(z){A!==z&&(z?t.frontFace(t.CW):t.frontFace(t.CCW),A=z)}function q(z){z!==gT?(H(t.CULL_FACE),z!==T&&(z===dh?t.cullFace(t.BACK):z===vT?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ae(t.CULL_FACE),T=z}function ge(z){z!==I&&($&&t.lineWidth(z),I=z)}function J(z,xe,Ee){z?(H(t.POLYGON_OFFSET_FILL),(O!==xe||G!==Ee)&&(t.polygonOffset(xe,Ee),O=xe,G=Ee)):ae(t.POLYGON_OFFSET_FILL)}function ce(z){z?H(t.SCISSOR_TEST):ae(t.SCISSOR_TEST)}function fe(z){z===void 0&&(z=t.TEXTURE0+ie-1),ye!==z&&(t.activeTexture(z),ye=z)}function Pe(z,xe,Ee){Ee===void 0&&(ye===null?Ee=t.TEXTURE0+ie-1:Ee=ye);let ke=Te[Ee];ke===void 0&&(ke={type:void 0,texture:void 0},Te[Ee]=ke),(ke.type!==z||ke.texture!==xe)&&(ye!==Ee&&(t.activeTexture(Ee),ye=Ee),t.bindTexture(z,xe||we[z]),ke.type=z,ke.texture=xe)}function S(){const z=Te[ye];z!==void 0&&z.type!==void 0&&(t.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function x(){try{t.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function F(){try{t.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Z(){try{t.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{t.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function K(){try{t.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Le(){try{t.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ve(){try{t.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ie(){try{t.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ue(){try{t.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _e(){try{t.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ce(z){it.equals(z)===!1&&(t.scissor(z.x,z.y,z.z,z.w),it.copy(z))}function He(z){je.equals(z)===!1&&(t.viewport(z.x,z.y,z.z,z.w),je.copy(z))}function Fe(z,xe){let Ee=c.get(xe);Ee===void 0&&(Ee=new WeakMap,c.set(xe,Ee));let ke=Ee.get(z);ke===void 0&&(ke=t.getUniformBlockIndex(xe,z.name),Ee.set(z,ke))}function Ae(z,xe){const ke=c.get(xe).get(z);l.get(xe)!==ke&&(t.uniformBlockBinding(xe,ke,z.__bindingPointIndex),l.set(xe,ke))}function lt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},ye=null,Te={},d={},f=new WeakMap,h=[],v=null,g=!1,m=null,p=null,C=null,R=null,w=null,U=null,L=null,D=new vt(0,0,0),k=0,E=!1,A=null,T=null,I=null,O=null,G=null,it.set(0,0,t.canvas.width,t.canvas.height),je.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:H,disable:ae,bindFramebuffer:re,drawBuffers:me,useProgram:Ke,setBlending:V,setMaterial:j,setFlipSided:ee,setCullFace:q,setLineWidth:ge,setPolygonOffset:J,setScissorTest:ce,activeTexture:fe,bindTexture:Pe,unbindTexture:S,compressedTexImage2D:x,compressedTexImage3D:F,texImage2D:Ue,texImage3D:_e,updateUBOMapping:Fe,uniformBlockBinding:Ae,texStorage2D:ve,texStorage3D:Ie,texSubImage2D:Z,texSubImage3D:le,compressedTexSubImage2D:K,compressedTexSubImage3D:Le,scissor:Ce,viewport:He,reset:lt}}function _P(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(S,x){return h?new OffscreenCanvas(S,x):ta("canvas")}function g(S,x,F){let Z=1;const le=Pe(S);if((le.width>F||le.height>F)&&(Z=F/Math.max(le.width,le.height)),Z<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const K=Math.floor(Z*le.width),Le=Math.floor(Z*le.height);d===void 0&&(d=v(K,Le));const ve=x?v(K,Le):d;return ve.width=K,ve.height=Le,ve.getContext("2d").drawImage(S,0,0,K,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+K+"x"+Le+")."),ve}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),S;return S}function m(S){return S.generateMipmaps}function p(S){t.generateMipmap(S)}function C(S){return S.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?t.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function R(S,x,F,Z,le=!1){if(S!==null){if(t[S]!==void 0)return t[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let K=x;if(x===t.RED&&(F===t.FLOAT&&(K=t.R32F),F===t.HALF_FLOAT&&(K=t.R16F),F===t.UNSIGNED_BYTE&&(K=t.R8)),x===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(K=t.R8UI),F===t.UNSIGNED_SHORT&&(K=t.R16UI),F===t.UNSIGNED_INT&&(K=t.R32UI),F===t.BYTE&&(K=t.R8I),F===t.SHORT&&(K=t.R16I),F===t.INT&&(K=t.R32I)),x===t.RG&&(F===t.FLOAT&&(K=t.RG32F),F===t.HALF_FLOAT&&(K=t.RG16F),F===t.UNSIGNED_BYTE&&(K=t.RG8)),x===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(K=t.RG8UI),F===t.UNSIGNED_SHORT&&(K=t.RG16UI),F===t.UNSIGNED_INT&&(K=t.RG32UI),F===t.BYTE&&(K=t.RG8I),F===t.SHORT&&(K=t.RG16I),F===t.INT&&(K=t.RG32I)),x===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(K=t.RGB8UI),F===t.UNSIGNED_SHORT&&(K=t.RGB16UI),F===t.UNSIGNED_INT&&(K=t.RGB32UI),F===t.BYTE&&(K=t.RGB8I),F===t.SHORT&&(K=t.RGB16I),F===t.INT&&(K=t.RGB32I)),x===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),F===t.UNSIGNED_INT&&(K=t.RGBA32UI),F===t.BYTE&&(K=t.RGBA8I),F===t.SHORT&&(K=t.RGBA16I),F===t.INT&&(K=t.RGBA32I)),x===t.RGB&&F===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),x===t.RGBA){const Le=le?Pl:wt.getTransfer(Z);F===t.FLOAT&&(K=t.RGBA32F),F===t.HALF_FLOAT&&(K=t.RGBA16F),F===t.UNSIGNED_BYTE&&(K=Le===Dt?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function w(S,x){let F;return S?x===null||x===sr||x===Qo?F=t.DEPTH24_STENCIL8:x===Yi?F=t.DEPTH32F_STENCIL8:x===Zo&&(F=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===sr||x===Qo?F=t.DEPTH_COMPONENT24:x===Yi?F=t.DEPTH_COMPONENT32F:x===Zo&&(F=t.DEPTH_COMPONENT16),F}function U(S,x){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==pi&&S.minFilter!==Ei?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function L(S){const x=S.target;x.removeEventListener("dispose",L),k(x),x.isVideoTexture&&u.delete(x)}function D(S){const x=S.target;x.removeEventListener("dispose",D),A(x)}function k(S){const x=i.get(S);if(x.__webglInit===void 0)return;const F=S.source,Z=f.get(F);if(Z){const le=Z[x.__cacheKey];le.usedTimes--,le.usedTimes===0&&E(S),Object.keys(Z).length===0&&f.delete(F)}i.remove(S)}function E(S){const x=i.get(S);t.deleteTexture(x.__webglTexture);const F=S.source,Z=f.get(F);delete Z[x.__cacheKey],o.memory.textures--}function A(S){const x=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let le=0;le<x.__webglFramebuffer[Z].length;le++)t.deleteFramebuffer(x.__webglFramebuffer[Z][le]);else t.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)t.deleteFramebuffer(x.__webglFramebuffer[Z]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=S.textures;for(let Z=0,le=F.length;Z<le;Z++){const K=i.get(F[Z]);K.__webglTexture&&(t.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(F[Z])}i.remove(S)}let T=0;function I(){T=0}function O(){const S=T;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),T+=1,S}function G(S){const x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function ie(S,x){const F=i.get(S);if(S.isVideoTexture&&ce(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&F.__version!==S.version){const Z=S.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(F,S,x);return}}else S.isExternalTexture&&(F.__webglTexture=S.sourceTexture?S.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+x)}function $(S,x){const F=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){we(F,S,x);return}n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+x)}function ue(S,x){const F=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){we(F,S,x);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+x)}function Y(S,x){const F=i.get(S);if(S.version>0&&F.__version!==S.version){H(F,S,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+x)}const ye={[Tu]:t.REPEAT,[Xs]:t.CLAMP_TO_EDGE,[Au]:t.MIRRORED_REPEAT},Te={[pi]:t.NEAREST,[XT]:t.NEAREST_MIPMAP_NEAREST,[Pa]:t.NEAREST_MIPMAP_LINEAR,[Ei]:t.LINEAR,[_c]:t.LINEAR_MIPMAP_NEAREST,[qs]:t.LINEAR_MIPMAP_LINEAR},Ne={[KT]:t.NEVER,[nA]:t.ALWAYS,[ZT]:t.LESS,[tv]:t.LEQUAL,[QT]:t.EQUAL,[tA]:t.GEQUAL,[JT]:t.GREATER,[eA]:t.NOTEQUAL};function $e(S,x){if(x.type===Yi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ei||x.magFilter===_c||x.magFilter===Pa||x.magFilter===qs||x.minFilter===Ei||x.minFilter===_c||x.minFilter===Pa||x.minFilter===qs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(S,t.TEXTURE_WRAP_S,ye[x.wrapS]),t.texParameteri(S,t.TEXTURE_WRAP_T,ye[x.wrapT]),(S===t.TEXTURE_3D||S===t.TEXTURE_2D_ARRAY)&&t.texParameteri(S,t.TEXTURE_WRAP_R,ye[x.wrapR]),t.texParameteri(S,t.TEXTURE_MAG_FILTER,Te[x.magFilter]),t.texParameteri(S,t.TEXTURE_MIN_FILTER,Te[x.minFilter]),x.compareFunction&&(t.texParameteri(S,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(S,t.TEXTURE_COMPARE_FUNC,Ne[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===pi||x.minFilter!==Pa&&x.minFilter!==qs||x.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(S,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function it(S,x){let F=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",L));const Z=x.source;let le=f.get(Z);le===void 0&&(le={},f.set(Z,le));const K=G(x);if(K!==S.__cacheKey){le[K]===void 0&&(le[K]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,F=!0),le[K].usedTimes++;const Le=le[S.__cacheKey];Le!==void 0&&(le[S.__cacheKey].usedTimes--,Le.usedTimes===0&&E(x)),S.__cacheKey=K,S.__webglTexture=le[K].texture}return F}function je(S,x,F){return Math.floor(Math.floor(S/F)/x)}function oe(S,x,F,Z){const K=S.updateRanges;if(K.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,F,Z,x.data);else{K.sort((_e,Ce)=>_e.start-Ce.start);let Le=0;for(let _e=1;_e<K.length;_e++){const Ce=K[Le],He=K[_e],Fe=Ce.start+Ce.count,Ae=je(He.start,x.width,4),lt=je(Ce.start,x.width,4);He.start<=Fe+1&&Ae===lt&&je(He.start+He.count-1,x.width,4)===Ae?Ce.count=Math.max(Ce.count,He.start+He.count-Ce.start):(++Le,K[Le]=He)}K.length=Le+1;const ve=t.getParameter(t.UNPACK_ROW_LENGTH),Ie=t.getParameter(t.UNPACK_SKIP_PIXELS),Ue=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let _e=0,Ce=K.length;_e<Ce;_e++){const He=K[_e],Fe=Math.floor(He.start/4),Ae=Math.ceil(He.count/4),lt=Fe%x.width,z=Math.floor(Fe/x.width),xe=Ae,Ee=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,lt),t.pixelStorei(t.UNPACK_SKIP_ROWS,z),n.texSubImage2D(t.TEXTURE_2D,0,lt,z,xe,Ee,F,Z,x.data)}S.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ve),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ie),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ue)}}function we(S,x,F){let Z=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=t.TEXTURE_3D);const le=it(S,x),K=x.source;n.bindTexture(Z,S.__webglTexture,t.TEXTURE0+F);const Le=i.get(K);if(K.version!==Le.__version||le===!0){n.activeTexture(t.TEXTURE0+F);const ve=wt.getPrimaries(wt.workingColorSpace),Ie=x.colorSpace===ms?null:wt.getPrimaries(x.colorSpace),Ue=x.colorSpace===ms||ve===Ie?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let _e=g(x.image,!1,s.maxTextureSize);_e=fe(x,_e);const Ce=r.convert(x.format,x.colorSpace),He=r.convert(x.type);let Fe=R(x.internalFormat,Ce,He,x.colorSpace,x.isVideoTexture);$e(Z,x);let Ae;const lt=x.mipmaps,z=x.isVideoTexture!==!0,xe=Le.__version===void 0||le===!0,Ee=K.dataReady,ke=U(x,_e);if(x.isDepthTexture)Fe=w(x.format===ea,x.type),xe&&(z?n.texStorage2D(t.TEXTURE_2D,1,Fe,_e.width,_e.height):n.texImage2D(t.TEXTURE_2D,0,Fe,_e.width,_e.height,0,Ce,He,null));else if(x.isDataTexture)if(lt.length>0){z&&xe&&n.texStorage2D(t.TEXTURE_2D,ke,Fe,lt[0].width,lt[0].height);for(let be=0,he=lt.length;be<he;be++)Ae=lt[be],z?Ee&&n.texSubImage2D(t.TEXTURE_2D,be,0,0,Ae.width,Ae.height,Ce,He,Ae.data):n.texImage2D(t.TEXTURE_2D,be,Fe,Ae.width,Ae.height,0,Ce,He,Ae.data);x.generateMipmaps=!1}else z?(xe&&n.texStorage2D(t.TEXTURE_2D,ke,Fe,_e.width,_e.height),Ee&&oe(x,_e,Ce,He)):n.texImage2D(t.TEXTURE_2D,0,Fe,_e.width,_e.height,0,Ce,He,_e.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){z&&xe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ke,Fe,lt[0].width,lt[0].height,_e.depth);for(let be=0,he=lt.length;be<he;be++)if(Ae=lt[be],x.format!==di)if(Ce!==null)if(z){if(Ee)if(x.layerUpdates.size>0){const Re=kh(Ae.width,Ae.height,x.format,x.type);for(const qe of x.layerUpdates){const Mt=Ae.data.subarray(qe*Re/Ae.data.BYTES_PER_ELEMENT,(qe+1)*Re/Ae.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,be,0,0,qe,Ae.width,Ae.height,1,Ce,Mt)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,be,0,0,0,Ae.width,Ae.height,_e.depth,Ce,Ae.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,be,Fe,Ae.width,Ae.height,_e.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?Ee&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,be,0,0,0,Ae.width,Ae.height,_e.depth,Ce,He,Ae.data):n.texImage3D(t.TEXTURE_2D_ARRAY,be,Fe,Ae.width,Ae.height,_e.depth,0,Ce,He,Ae.data)}else{z&&xe&&n.texStorage2D(t.TEXTURE_2D,ke,Fe,lt[0].width,lt[0].height);for(let be=0,he=lt.length;be<he;be++)Ae=lt[be],x.format!==di?Ce!==null?z?Ee&&n.compressedTexSubImage2D(t.TEXTURE_2D,be,0,0,Ae.width,Ae.height,Ce,Ae.data):n.compressedTexImage2D(t.TEXTURE_2D,be,Fe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?Ee&&n.texSubImage2D(t.TEXTURE_2D,be,0,0,Ae.width,Ae.height,Ce,He,Ae.data):n.texImage2D(t.TEXTURE_2D,be,Fe,Ae.width,Ae.height,0,Ce,He,Ae.data)}else if(x.isDataArrayTexture)if(z){if(xe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ke,Fe,_e.width,_e.height,_e.depth),Ee)if(x.layerUpdates.size>0){const be=kh(_e.width,_e.height,x.format,x.type);for(const he of x.layerUpdates){const Re=_e.data.subarray(he*be/_e.data.BYTES_PER_ELEMENT,(he+1)*be/_e.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,_e.width,_e.height,1,Ce,He,Re)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ce,He,_e.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Fe,_e.width,_e.height,_e.depth,0,Ce,He,_e.data);else if(x.isData3DTexture)z?(xe&&n.texStorage3D(t.TEXTURE_3D,ke,Fe,_e.width,_e.height,_e.depth),Ee&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ce,He,_e.data)):n.texImage3D(t.TEXTURE_3D,0,Fe,_e.width,_e.height,_e.depth,0,Ce,He,_e.data);else if(x.isFramebufferTexture){if(xe)if(z)n.texStorage2D(t.TEXTURE_2D,ke,Fe,_e.width,_e.height);else{let be=_e.width,he=_e.height;for(let Re=0;Re<ke;Re++)n.texImage2D(t.TEXTURE_2D,Re,Fe,be,he,0,Ce,He,null),be>>=1,he>>=1}}else if(lt.length>0){if(z&&xe){const be=Pe(lt[0]);n.texStorage2D(t.TEXTURE_2D,ke,Fe,be.width,be.height)}for(let be=0,he=lt.length;be<he;be++)Ae=lt[be],z?Ee&&n.texSubImage2D(t.TEXTURE_2D,be,0,0,Ce,He,Ae):n.texImage2D(t.TEXTURE_2D,be,Fe,Ce,He,Ae);x.generateMipmaps=!1}else if(z){if(xe){const be=Pe(_e);n.texStorage2D(t.TEXTURE_2D,ke,Fe,be.width,be.height)}Ee&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ce,He,_e)}else n.texImage2D(t.TEXTURE_2D,0,Fe,Ce,He,_e);m(x)&&p(Z),Le.__version=K.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function H(S,x,F){if(x.image.length!==6)return;const Z=it(S,x),le=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,S.__webglTexture,t.TEXTURE0+F);const K=i.get(le);if(le.version!==K.__version||Z===!0){n.activeTexture(t.TEXTURE0+F);const Le=wt.getPrimaries(wt.workingColorSpace),ve=x.colorSpace===ms?null:wt.getPrimaries(x.colorSpace),Ie=x.colorSpace===ms||Le===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const Ue=x.isCompressedTexture||x.image[0].isCompressedTexture,_e=x.image[0]&&x.image[0].isDataTexture,Ce=[];for(let he=0;he<6;he++)!Ue&&!_e?Ce[he]=g(x.image[he],!0,s.maxCubemapSize):Ce[he]=_e?x.image[he].image:x.image[he],Ce[he]=fe(x,Ce[he]);const He=Ce[0],Fe=r.convert(x.format,x.colorSpace),Ae=r.convert(x.type),lt=R(x.internalFormat,Fe,Ae,x.colorSpace),z=x.isVideoTexture!==!0,xe=K.__version===void 0||Z===!0,Ee=le.dataReady;let ke=U(x,He);$e(t.TEXTURE_CUBE_MAP,x);let be;if(Ue){z&&xe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ke,lt,He.width,He.height);for(let he=0;he<6;he++){be=Ce[he].mipmaps;for(let Re=0;Re<be.length;Re++){const qe=be[Re];x.format!==di?Fe!==null?z?Ee&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re,0,0,qe.width,qe.height,Fe,qe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re,lt,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re,0,0,qe.width,qe.height,Fe,Ae,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re,lt,qe.width,qe.height,0,Fe,Ae,qe.data)}}}else{if(be=x.mipmaps,z&&xe){be.length>0&&ke++;const he=Pe(Ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ke,lt,he.width,he.height)}for(let he=0;he<6;he++)if(_e){z?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ce[he].width,Ce[he].height,Fe,Ae,Ce[he].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,lt,Ce[he].width,Ce[he].height,0,Fe,Ae,Ce[he].data);for(let Re=0;Re<be.length;Re++){const Mt=be[Re].image[he].image;z?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re+1,0,0,Mt.width,Mt.height,Fe,Ae,Mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re+1,lt,Mt.width,Mt.height,0,Fe,Ae,Mt.data)}}else{z?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Fe,Ae,Ce[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,lt,Fe,Ae,Ce[he]);for(let Re=0;Re<be.length;Re++){const qe=be[Re];z?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re+1,0,0,Fe,Ae,qe.image[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re+1,lt,Fe,Ae,qe.image[he])}}}m(x)&&p(t.TEXTURE_CUBE_MAP),K.__version=le.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function ae(S,x,F,Z,le,K){const Le=r.convert(F.format,F.colorSpace),ve=r.convert(F.type),Ie=R(F.internalFormat,Le,ve,F.colorSpace),Ue=i.get(x),_e=i.get(F);if(_e.__renderTarget=x,!Ue.__hasExternalTextures){const Ce=Math.max(1,x.width>>K),He=Math.max(1,x.height>>K);le===t.TEXTURE_3D||le===t.TEXTURE_2D_ARRAY?n.texImage3D(le,K,Ie,Ce,He,x.depth,0,Le,ve,null):n.texImage2D(le,K,Ie,Ce,He,0,Le,ve,null)}n.bindFramebuffer(t.FRAMEBUFFER,S),J(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,le,_e.__webglTexture,0,ge(x)):(le===t.TEXTURE_2D||le>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,le,_e.__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function re(S,x,F){if(t.bindRenderbuffer(t.RENDERBUFFER,S),x.depthBuffer){const Z=x.depthTexture,le=Z&&Z.isDepthTexture?Z.type:null,K=w(x.stencilBuffer,le),Le=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=ge(x);J(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ve,K,x.width,x.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,K,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,K,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Le,t.RENDERBUFFER,S)}else{const Z=x.textures;for(let le=0;le<Z.length;le++){const K=Z[le],Le=r.convert(K.format,K.colorSpace),ve=r.convert(K.type),Ie=R(K.internalFormat,Le,ve,K.colorSpace),Ue=ge(x);F&&J(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,Ie,x.width,x.height):J(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ue,Ie,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,Ie,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function me(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(x.depthTexture);Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ie(x.depthTexture,0);const le=Z.__webglTexture,K=ge(x);if(x.depthTexture.format===Jo)J(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0);else if(x.depthTexture.format===ea)J(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Ke(S){const x=i.get(S),F=S.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==S.depthTexture){const Z=S.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){const le=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",le)};Z.addEventListener("dispose",le),x.__depthDisposeCallback=le}x.__boundDepthTexture=Z}if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const Z=S.texture.mipmaps;Z&&Z.length>0?me(x.__webglFramebuffer[0],S):me(x.__webglFramebuffer,S)}else if(F){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=t.createRenderbuffer(),re(x.__webglDepthbuffer[Z],S,!1);else{const le=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,K)}}else{const Z=S.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),re(x.__webglDepthbuffer,S,!1);else{const le=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,K)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function P(S,x,F){const Z=i.get(S);x!==void 0&&ae(Z.__webglFramebuffer,S,S.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&Ke(S)}function _(S){const x=S.texture,F=i.get(S),Z=i.get(x);S.addEventListener("dispose",D);const le=S.textures,K=S.isWebGLCubeRenderTarget===!0,Le=le.length>1;if(Le||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=x.version,o.memory.textures++),K){F.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[ve]=[];for(let Ie=0;Ie<x.mipmaps.length;Ie++)F.__webglFramebuffer[ve][Ie]=t.createFramebuffer()}else F.__webglFramebuffer[ve]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let ve=0;ve<x.mipmaps.length;ve++)F.__webglFramebuffer[ve]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(Le)for(let ve=0,Ie=le.length;ve<Ie;ve++){const Ue=i.get(le[ve]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=t.createTexture(),o.memory.textures++)}if(S.samples>0&&J(S)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ve=0;ve<le.length;ve++){const Ie=le[ve];F.__webglColorRenderbuffer[ve]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[ve]);const Ue=r.convert(Ie.format,Ie.colorSpace),_e=r.convert(Ie.type),Ce=R(Ie.internalFormat,Ue,_e,Ie.colorSpace,S.isXRRenderTarget===!0),He=ge(S);t.renderbufferStorageMultisample(t.RENDERBUFFER,He,Ce,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,F.__webglColorRenderbuffer[ve])}t.bindRenderbuffer(t.RENDERBUFFER,null),S.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),re(F.__webglDepthRenderbuffer,S,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),$e(t.TEXTURE_CUBE_MAP,x);for(let ve=0;ve<6;ve++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ie=0;Ie<x.mipmaps.length;Ie++)ae(F.__webglFramebuffer[ve][Ie],S,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie);else ae(F.__webglFramebuffer[ve],S,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(x)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Le){for(let ve=0,Ie=le.length;ve<Ie;ve++){const Ue=le[ve],_e=i.get(Ue);let Ce=t.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(Ce=S.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ce,_e.__webglTexture),$e(Ce,Ue),ae(F.__webglFramebuffer,S,Ue,t.COLOR_ATTACHMENT0+ve,Ce,0),m(Ue)&&p(Ce)}n.unbindTexture()}else{let ve=t.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ve=S.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ve,Z.__webglTexture),$e(ve,x),x.mipmaps&&x.mipmaps.length>0)for(let Ie=0;Ie<x.mipmaps.length;Ie++)ae(F.__webglFramebuffer[Ie],S,x,t.COLOR_ATTACHMENT0,ve,Ie);else ae(F.__webglFramebuffer,S,x,t.COLOR_ATTACHMENT0,ve,0);m(x)&&p(ve),n.unbindTexture()}S.depthBuffer&&Ke(S)}function V(S){const x=S.textures;for(let F=0,Z=x.length;F<Z;F++){const le=x[F];if(m(le)){const K=C(S),Le=i.get(le).__webglTexture;n.bindTexture(K,Le),p(K),n.unbindTexture()}}}const j=[],ee=[];function q(S){if(S.samples>0){if(J(S)===!1){const x=S.textures,F=S.width,Z=S.height;let le=t.COLOR_BUFFER_BIT;const K=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Le=i.get(S),ve=x.length>1;if(ve)for(let Ue=0;Ue<x.length;Ue++)n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const Ie=S.texture.mipmaps;Ie&&Ie.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ue=0;Ue<x.length;Ue++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(le|=t.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(le|=t.STENCIL_BUFFER_BIT)),ve){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Le.__webglColorRenderbuffer[Ue]);const _e=i.get(x[Ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,_e,0)}t.blitFramebuffer(0,0,F,Z,0,0,F,Z,le,t.NEAREST),l===!0&&(j.length=0,ee.length=0,j.push(t.COLOR_ATTACHMENT0+Ue),S.depthBuffer&&S.resolveDepthBuffer===!1&&(j.push(K),ee.push(K),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ee)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,j))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ve)for(let Ue=0;Ue<x.length;Ue++){n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,Le.__webglColorRenderbuffer[Ue]);const _e=i.get(x[Ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,_e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const x=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function ge(S){return Math.min(s.maxSamples,S.samples)}function J(S){const x=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ce(S){const x=o.render.frame;u.get(S)!==x&&(u.set(S,x),S.update())}function fe(S,x){const F=S.colorSpace,Z=S.format,le=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||F!==ao&&F!==ms&&(wt.getTransfer(F)===Dt?(Z!==di||le!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function Pe(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=I,this.setTexture2D=ie,this.setTexture2DArray=$,this.setTexture3D=ue,this.setTextureCube=Y,this.rebindTextures=P,this.setupRenderTarget=_,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=J}function bP(t,e){function n(i,s=ms){let r;const o=wt.getTransfer(s);if(i===Ii)return t.UNSIGNED_BYTE;if(i===Gd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Wd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===jg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Xg)return t.BYTE;if(i===qg)return t.SHORT;if(i===Zo)return t.UNSIGNED_SHORT;if(i===Vd)return t.INT;if(i===sr)return t.UNSIGNED_INT;if(i===Yi)return t.FLOAT;if(i===ba)return t.HALF_FLOAT;if(i===Yg)return t.ALPHA;if(i===Kg)return t.RGB;if(i===di)return t.RGBA;if(i===Jo)return t.DEPTH_COMPONENT;if(i===ea)return t.DEPTH_STENCIL;if(i===Zg)return t.RED;if(i===$d)return t.RED_INTEGER;if(i===Qg)return t.RG;if(i===Xd)return t.RG_INTEGER;if(i===qd)return t.RGBA_INTEGER;if(i===rl||i===ol||i===al||i===ll)if(o===Dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===rl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ol)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===al)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ll)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===rl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ol)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===al)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ll)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cu||i===Ru||i===Pu||i===Du)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Cu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ru)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Du)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Lu||i===Iu||i===Uu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Lu||i===Iu)return o===Dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Uu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ou||i===Nu||i===Fu||i===ku||i===Bu||i===Hu||i===zu||i===Vu||i===Gu||i===Wu||i===$u||i===Xu||i===qu||i===ju)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ou)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ku)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$u)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ju)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cl||i===Yu||i===Ku)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===cl)return o===Dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ku)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jg||i===Zu||i===Qu||i===Ju)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===cl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Zu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ju)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Sv extends An{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const xP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yP=`
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

}`;class wP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Sv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Cs({vertexShader:xP,fragmentShader:yP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new fi(new Zl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SP extends ur{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,v=null;const g=new wP,m={},p=n.getContextAttributes();let C=null,R=null;const w=[],U=[],L=new ut;let D=null;const k=new Gn;k.viewport=new Xt;const E=new Gn;E.viewport=new Xt;const A=[k,E],T=new GA;let I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let we=w[oe];return we===void 0&&(we=new Hc,w[oe]=we),we.getTargetRaySpace()},this.getControllerGrip=function(oe){let we=w[oe];return we===void 0&&(we=new Hc,w[oe]=we),we.getGripSpace()},this.getHand=function(oe){let we=w[oe];return we===void 0&&(we=new Hc,w[oe]=we),we.getHandSpace()};function G(oe){const we=U.indexOf(oe.inputSource);if(we===-1)return;const H=w[we];H!==void 0&&(H.update(oe.inputSource,oe.frame,c||o),H.dispatchEvent({type:oe.type,data:oe.inputSource}))}function ie(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",ie),s.removeEventListener("inputsourceschange",$);for(let oe=0;oe<w.length;oe++){const we=U[oe];we!==null&&(U[oe]=null,w[oe].disconnect(we))}I=null,O=null,g.reset();for(const oe in m)delete m[oe];e.setRenderTarget(C),h=null,f=null,d=null,s=null,R=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){r=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(oe){c=oe},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(oe){if(s=oe,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",ie),s.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await n.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(s,n)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let H=null,ae=null,re=null;p.depth&&(re=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,H=p.stencil?ea:Jo,ae=p.stencil?Qo:sr);const me={colorFormat:n.RGBA8,depthFormat:re,scaleFactor:r};f=d.createProjectionLayer(me),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),R=new or(f.textureWidth,f.textureHeight,{format:di,type:Ii,depthTexture:new pv(f.textureWidth,f.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const H={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,n,H),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),R=new or(h.framebufferWidth,h.framebufferHeight,{format:di,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),je.setContext(s),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(oe){for(let we=0;we<oe.removed.length;we++){const H=oe.removed[we],ae=U.indexOf(H);ae>=0&&(U[ae]=null,w[ae].disconnect(H))}for(let we=0;we<oe.added.length;we++){const H=oe.added[we];let ae=U.indexOf(H);if(ae===-1){for(let me=0;me<w.length;me++)if(me>=U.length){U.push(H),ae=me;break}else if(U[me]===null){U[me]=H,ae=me;break}if(ae===-1)break}const re=w[ae];re&&re.connect(H)}}const ue=new Q,Y=new Q;function ye(oe,we,H){ue.setFromMatrixPosition(we.matrixWorld),Y.setFromMatrixPosition(H.matrixWorld);const ae=ue.distanceTo(Y),re=we.projectionMatrix.elements,me=H.projectionMatrix.elements,Ke=re[14]/(re[10]-1),P=re[14]/(re[10]+1),_=(re[9]+1)/re[5],V=(re[9]-1)/re[5],j=(re[8]-1)/re[0],ee=(me[8]+1)/me[0],q=Ke*j,ge=Ke*ee,J=ae/(-j+ee),ce=J*-j;if(we.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(ce),oe.translateZ(J),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),re[10]===-1)oe.projectionMatrix.copy(we.projectionMatrix),oe.projectionMatrixInverse.copy(we.projectionMatrixInverse);else{const fe=Ke+J,Pe=P+J,S=q-ce,x=ge+(ae-ce),F=_*P/Pe*fe,Z=V*P/Pe*fe;oe.projectionMatrix.makePerspective(S,x,F,Z,fe,Pe),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function Te(oe,we){we===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(we.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(s===null)return;let we=oe.near,H=oe.far;g.texture!==null&&(g.depthNear>0&&(we=g.depthNear),g.depthFar>0&&(H=g.depthFar)),T.near=E.near=k.near=we,T.far=E.far=k.far=H,(I!==T.near||O!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),I=T.near,O=T.far),T.layers.mask=oe.layers.mask|6,k.layers.mask=T.layers.mask&3,E.layers.mask=T.layers.mask&5;const ae=oe.parent,re=T.cameras;Te(T,ae);for(let me=0;me<re.length;me++)Te(re[me],ae);re.length===2?ye(T,k,E):T.projectionMatrix.copy(k.projectionMatrix),Ne(oe,T,ae)};function Ne(oe,we,H){H===null?oe.matrix.copy(we.matrixWorld):(oe.matrix.copy(H.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(we.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(we.projectionMatrix),oe.projectionMatrixInverse.copy(we.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=ed*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(oe){l=oe,f!==null&&(f.fixedFoveation=oe),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=oe)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(T)},this.getCameraTexture=function(oe){return m[oe]};let $e=null;function it(oe,we){if(u=we.getViewerPose(c||o),v=we,u!==null){const H=u.views;h!==null&&(e.setRenderTargetFramebuffer(R,h.framebuffer),e.setRenderTarget(R));let ae=!1;H.length!==T.cameras.length&&(T.cameras.length=0,ae=!0);for(let P=0;P<H.length;P++){const _=H[P];let V=null;if(h!==null)V=h.getViewport(_);else{const ee=d.getViewSubImage(f,_);V=ee.viewport,P===0&&(e.setRenderTargetTextures(R,ee.colorTexture,ee.depthStencilTexture),e.setRenderTarget(R))}let j=A[P];j===void 0&&(j=new Gn,j.layers.enable(P),j.viewport=new Xt,A[P]=j),j.matrix.fromArray(_.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(_.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(V.x,V.y,V.width,V.height),P===0&&(T.matrix.copy(j.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ae===!0&&T.cameras.push(j)}const re=s.enabledFeatures;if(re&&re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&d){const P=d.getDepthInformation(H[0]);P&&P.isValid&&P.texture&&g.init(P,s.renderState)}if(re&&re.includes("camera-access")&&(e.state.unbindTexture(),d))for(let P=0;P<H.length;P++){const _=H[P].camera;if(_){let V=m[_];V||(V=new Sv,m[_]=V);const j=d.getCameraImage(_);V.sourceTexture=j}}}for(let H=0;H<w.length;H++){const ae=U[H],re=w[H];ae!==null&&re!==void 0&&re.update(ae,we,c||o)}$e&&$e(oe,we),we.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:we}),v=null}const je=new _v;je.setAnimationLoop(it),this.setAnimationLoop=function(oe){$e=oe},this.dispose=function(){}}}const zs=new Ui,MP=new jt;function EP(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,uv(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,C,R,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,w)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,C,R):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===On&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===On&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const C=e.get(p),R=C.envMap,w=C.envMapRotation;R&&(m.envMap.value=R,zs.copy(w),zs.x*=-1,zs.y*=-1,zs.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),m.envMapRotation.value.setFromMatrix4(MP.makeRotationFromEuler(zs)),m.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,C,R){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*C,m.scale.value=R*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,C){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===On&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const C=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function TP(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(C,R){const w=R.program;i.uniformBlockBinding(C,w)}function c(C,R){let w=s[C.id];w===void 0&&(v(C),w=u(C),s[C.id]=w,C.addEventListener("dispose",m));const U=R.program;i.updateUBOMapping(C,U);const L=e.render.frame;r[C.id]!==L&&(f(C),r[C.id]=L)}function u(C){const R=d();C.__bindingPointIndex=R;const w=t.createBuffer(),U=C.__size,L=C.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,U,L),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,R,w),w}function d(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(C){const R=s[C.id],w=C.uniforms,U=C.__cache;t.bindBuffer(t.UNIFORM_BUFFER,R);for(let L=0,D=w.length;L<D;L++){const k=Array.isArray(w[L])?w[L]:[w[L]];for(let E=0,A=k.length;E<A;E++){const T=k[E];if(h(T,L,E,U)===!0){const I=T.__offset,O=Array.isArray(T.value)?T.value:[T.value];let G=0;for(let ie=0;ie<O.length;ie++){const $=O[ie],ue=g($);typeof $=="number"||typeof $=="boolean"?(T.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,I+G,T.__data)):$.isMatrix3?(T.__data[0]=$.elements[0],T.__data[1]=$.elements[1],T.__data[2]=$.elements[2],T.__data[3]=0,T.__data[4]=$.elements[3],T.__data[5]=$.elements[4],T.__data[6]=$.elements[5],T.__data[7]=0,T.__data[8]=$.elements[6],T.__data[9]=$.elements[7],T.__data[10]=$.elements[8],T.__data[11]=0):($.toArray(T.__data,G),G+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,T.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(C,R,w,U){const L=C.value,D=R+"_"+w;if(U[D]===void 0)return typeof L=="number"||typeof L=="boolean"?U[D]=L:U[D]=L.clone(),!0;{const k=U[D];if(typeof L=="number"||typeof L=="boolean"){if(k!==L)return U[D]=L,!0}else if(k.equals(L)===!1)return k.copy(L),!0}return!1}function v(C){const R=C.uniforms;let w=0;const U=16;for(let D=0,k=R.length;D<k;D++){const E=Array.isArray(R[D])?R[D]:[R[D]];for(let A=0,T=E.length;A<T;A++){const I=E[A],O=Array.isArray(I.value)?I.value:[I.value];for(let G=0,ie=O.length;G<ie;G++){const $=O[G],ue=g($),Y=w%U,ye=Y%ue.boundary,Te=Y+ye;w+=ye,Te!==0&&U-Te<ue.storage&&(w+=U-Te),I.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=w,w+=ue.storage}}}const L=w%U;return L>0&&(w+=U-L),C.__size=w,C.__cache={},this}function g(C){const R={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(R.boundary=4,R.storage=4):C.isVector2?(R.boundary=8,R.storage=8):C.isVector3||C.isColor?(R.boundary=16,R.storage=12):C.isVector4?(R.boundary=16,R.storage=16):C.isMatrix3?(R.boundary=48,R.storage=48):C.isMatrix4?(R.boundary=64,R.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),R}function m(C){const R=C.target;R.removeEventListener("dispose",m);const w=o.indexOf(R.__bindingPointIndex);o.splice(w,1),t.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function p(){for(const C in s)t.deleteBuffer(s[C]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Mv{constructor(e={}){const{canvas:n=rA(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const v=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const C=[],R=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ts,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let U=!1;this._outputColorSpace=In;let L=0,D=0,k=null,E=-1,A=null;const T=new Xt,I=new Xt;let O=null;const G=new vt(0);let ie=0,$=n.width,ue=n.height,Y=1,ye=null,Te=null;const Ne=new Xt(0,0,$,ue),$e=new Xt(0,0,$,ue);let it=!1;const je=new Kd;let oe=!1,we=!1;const H=new jt,ae=new Q,re=new Xt,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function P(){return k===null?Y:1}let _=i;function V(M,W){return n.getContext(M,W)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${zd}`),n.addEventListener("webglcontextlost",Ee,!1),n.addEventListener("webglcontextrestored",ke,!1),n.addEventListener("webglcontextcreationerror",be,!1),_===null){const W="webgl2";if(_=V(W,M),_===null)throw V(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let j,ee,q,ge,J,ce,fe,Pe,S,x,F,Z,le,K,Le,ve,Ie,Ue,_e,Ce,He,Fe,Ae,lt;function z(){j=new F2(_),j.init(),Fe=new bP(_,j),ee=new P2(_,j,e,Fe),q=new vP(_,j),ee.reversedDepthBuffer&&f&&q.buffers.depth.setReversed(!0),ge=new H2(_),J=new sP,ce=new _P(_,j,q,J,ee,Fe,ge),fe=new L2(w),Pe=new N2(w),S=new XA(_),Ae=new C2(_,S),x=new k2(_,S,ge,Ae),F=new V2(_,x,S,ge),_e=new z2(_,ee,ce),ve=new D2(J),Z=new iP(w,fe,Pe,j,ee,Ae,ve),le=new EP(w,J),K=new oP,Le=new fP(j),Ue=new A2(w,fe,Pe,q,F,h,l),Ie=new mP(w,F,ee),lt=new TP(_,ge,ee,q),Ce=new R2(_,j,ge),He=new B2(_,j,ge),ge.programs=Z.programs,w.capabilities=ee,w.extensions=j,w.properties=J,w.renderLists=K,w.shadowMap=Ie,w.state=q,w.info=ge}z();const xe=new SP(w,_);this.xr=xe,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const M=j.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=j.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(M){M!==void 0&&(Y=M,this.setSize($,ue,!1))},this.getSize=function(M){return M.set($,ue)},this.setSize=function(M,W,te=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=M,ue=W,n.width=Math.floor(M*Y),n.height=Math.floor(W*Y),te===!0&&(n.style.width=M+"px",n.style.height=W+"px"),this.setViewport(0,0,M,W)},this.getDrawingBufferSize=function(M){return M.set($*Y,ue*Y).floor()},this.setDrawingBufferSize=function(M,W,te){$=M,ue=W,Y=te,n.width=Math.floor(M*te),n.height=Math.floor(W*te),this.setViewport(0,0,M,W)},this.getCurrentViewport=function(M){return M.copy(T)},this.getViewport=function(M){return M.copy(Ne)},this.setViewport=function(M,W,te,ne){M.isVector4?Ne.set(M.x,M.y,M.z,M.w):Ne.set(M,W,te,ne),q.viewport(T.copy(Ne).multiplyScalar(Y).round())},this.getScissor=function(M){return M.copy($e)},this.setScissor=function(M,W,te,ne){M.isVector4?$e.set(M.x,M.y,M.z,M.w):$e.set(M,W,te,ne),q.scissor(I.copy($e).multiplyScalar(Y).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(M){q.setScissorTest(it=M)},this.setOpaqueSort=function(M){ye=M},this.setTransparentSort=function(M){Te=M},this.getClearColor=function(M){return M.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(M=!0,W=!0,te=!0){let ne=0;if(M){let X=!1;if(k!==null){const Se=k.texture.format;X=Se===qd||Se===Xd||Se===$d}if(X){const Se=k.texture.type,Oe=Se===Ii||Se===sr||Se===Zo||Se===Qo||Se===Gd||Se===Wd,Ge=Ue.getClearColor(),ze=Ue.getClearAlpha(),nt=Ge.r,st=Ge.g,Ye=Ge.b;Oe?(v[0]=nt,v[1]=st,v[2]=Ye,v[3]=ze,_.clearBufferuiv(_.COLOR,0,v)):(g[0]=nt,g[1]=st,g[2]=Ye,g[3]=ze,_.clearBufferiv(_.COLOR,0,g))}else ne|=_.COLOR_BUFFER_BIT}W&&(ne|=_.DEPTH_BUFFER_BIT),te&&(ne|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ee,!1),n.removeEventListener("webglcontextrestored",ke,!1),n.removeEventListener("webglcontextcreationerror",be,!1),Ue.dispose(),K.dispose(),Le.dispose(),J.dispose(),fe.dispose(),Pe.dispose(),F.dispose(),Ae.dispose(),lt.dispose(),Z.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",N),xe.removeEventListener("sessionend",pe),Me.stop()};function Ee(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const M=ge.autoReset,W=Ie.enabled,te=Ie.autoUpdate,ne=Ie.needsUpdate,X=Ie.type;z(),ge.autoReset=M,Ie.enabled=W,Ie.autoUpdate=te,Ie.needsUpdate=ne,Ie.type=X}function be(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function he(M){const W=M.target;W.removeEventListener("dispose",he),Re(W)}function Re(M){qe(M),J.remove(M)}function qe(M){const W=J.get(M).programs;W!==void 0&&(W.forEach(function(te){Z.releaseProgram(te)}),M.isShaderMaterial&&Z.releaseShaderCache(M))}this.renderBufferDirect=function(M,W,te,ne,X,Se){W===null&&(W=me);const Oe=X.isMesh&&X.matrixWorld.determinant()<0,Ge=ts(M,W,te,ne,X);q.setMaterial(ne,Oe);let ze=te.index,nt=1;if(ne.wireframe===!0){if(ze=x.getWireframeAttribute(te),ze===void 0)return;nt=2}const st=te.drawRange,Ye=te.attributes.position;let bt=st.start*nt,Rt=(st.start+st.count)*nt;Se!==null&&(bt=Math.max(bt,Se.start*nt),Rt=Math.min(Rt,(Se.start+Se.count)*nt)),ze!==null?(bt=Math.max(bt,0),Rt=Math.min(Rt,ze.count)):Ye!=null&&(bt=Math.max(bt,0),Rt=Math.min(Rt,Ye.count));const Gt=Rt-bt;if(Gt<0||Gt===1/0)return;Ae.setup(X,ne,Ge,te,ze);let kt,It=Ce;if(ze!==null&&(kt=S.get(ze),It=He,It.setIndex(kt)),X.isMesh)ne.wireframe===!0?(q.setLineWidth(ne.wireframeLinewidth*P()),It.setMode(_.LINES)):It.setMode(_.TRIANGLES);else if(X.isLine){let Je=ne.linewidth;Je===void 0&&(Je=1),q.setLineWidth(Je*P()),X.isLineSegments?It.setMode(_.LINES):X.isLineLoop?It.setMode(_.LINE_LOOP):It.setMode(_.LINE_STRIP)}else X.isPoints?It.setMode(_.POINTS):X.isSprite&&It.setMode(_.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)zr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),It.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))It.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Je=X._multiDrawStarts,zt=X._multiDrawCounts,xt=X._multiDrawCount,Fn=ze?S.get(ze).bytesPerElement:1,dr=J.get(ne).currentProgram.getUniforms();for(let kn=0;kn<xt;kn++)dr.setValue(_,"_gl_DrawID",kn),It.render(Je[kn]/Fn,zt[kn])}else if(X.isInstancedMesh)It.renderInstances(bt,Gt,X.count);else if(te.isInstancedBufferGeometry){const Je=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,zt=Math.min(te.instanceCount,Je);It.renderInstances(bt,Gt,zt)}else It.render(bt,Gt)};function Mt(M,W,te){M.transparent===!0&&M.side===ji&&M.forceSinglePass===!1?(M.side=On,M.needsUpdate=!0,mt(M,W,te),M.side=As,M.needsUpdate=!0,mt(M,W,te),M.side=ji):mt(M,W,te)}this.compile=function(M,W,te=null){te===null&&(te=M),p=Le.get(te),p.init(W),R.push(p),te.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),M!==te&&M.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();const ne=new Set;return M.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Se=X.material;if(Se)if(Array.isArray(Se))for(let Oe=0;Oe<Se.length;Oe++){const Ge=Se[Oe];Mt(Ge,te,X),ne.add(Ge)}else Mt(Se,te,X),ne.add(Se)}),p=R.pop(),ne},this.compileAsync=function(M,W,te=null){const ne=this.compile(M,W,te);return new Promise(X=>{function Se(){if(ne.forEach(function(Oe){J.get(Oe).currentProgram.isReady()&&ne.delete(Oe)}),ne.size===0){X(M);return}setTimeout(Se,10)}j.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let B=null;function y(M){B&&B(M)}function N(){Me.stop()}function pe(){Me.start()}const Me=new _v;Me.setAnimationLoop(y),typeof self<"u"&&Me.setContext(self),this.setAnimationLoop=function(M){B=M,xe.setAnimationLoop(M),M===null?Me.stop():Me.start()},xe.addEventListener("sessionstart",N),xe.addEventListener("sessionend",pe),this.render=function(M,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(W),W=xe.getCamera()),M.isScene===!0&&M.onBeforeRender(w,M,W,k),p=Le.get(M,R.length),p.init(W),R.push(p),H.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),je.setFromProjectionMatrix(H,Ti,W.reversedDepth),we=this.localClippingEnabled,oe=ve.init(this.clippingPlanes,we),m=K.get(M,C.length),m.init(),C.push(m),xe.enabled===!0&&xe.isPresenting===!0){const Se=w.xr.getDepthSensingMesh();Se!==null&&Be(Se,W,-1/0,w.sortObjects)}Be(M,W,0,w.sortObjects),m.finish(),w.sortObjects===!0&&m.sort(ye,Te),Ke=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,Ke&&Ue.addToRenderList(m,M),this.info.render.frame++,oe===!0&&ve.beginShadows();const te=p.state.shadowsArray;Ie.render(te,M,W),oe===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=m.opaque,X=m.transmissive;if(p.setupLights(),W.isArrayCamera){const Se=W.cameras;if(X.length>0)for(let Oe=0,Ge=Se.length;Oe<Ge;Oe++){const ze=Se[Oe];rt(ne,X,M,ze)}Ke&&Ue.render(M);for(let Oe=0,Ge=Se.length;Oe<Ge;Oe++){const ze=Se[Oe];Qe(m,M,ze,ze.viewport)}}else X.length>0&&rt(ne,X,M,W),Ke&&Ue.render(M),Qe(m,M,W);k!==null&&D===0&&(ce.updateMultisampleRenderTarget(k),ce.updateRenderTargetMipmap(k)),M.isScene===!0&&M.onAfterRender(w,M,W),Ae.resetDefaultState(),E=-1,A=null,R.pop(),R.length>0?(p=R[R.length-1],oe===!0&&ve.setGlobalState(w.clippingPlanes,p.state.camera)):p=null,C.pop(),C.length>0?m=C[C.length-1]:m=null};function Be(M,W,te,ne){if(M.visible===!1)return;if(M.layers.test(W.layers)){if(M.isGroup)te=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(W);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||je.intersectsSprite(M)){ne&&re.setFromMatrixPosition(M.matrixWorld).applyMatrix4(H);const Oe=F.update(M),Ge=M.material;Ge.visible&&m.push(M,Oe,Ge,te,re.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||je.intersectsObject(M))){const Oe=F.update(M),Ge=M.material;if(ne&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),re.copy(M.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),re.copy(Oe.boundingSphere.center)),re.applyMatrix4(M.matrixWorld).applyMatrix4(H)),Array.isArray(Ge)){const ze=Oe.groups;for(let nt=0,st=ze.length;nt<st;nt++){const Ye=ze[nt],bt=Ge[Ye.materialIndex];bt&&bt.visible&&m.push(M,Oe,bt,te,re.z,Ye)}}else Ge.visible&&m.push(M,Oe,Ge,te,re.z,null)}}const Se=M.children;for(let Oe=0,Ge=Se.length;Oe<Ge;Oe++)Be(Se[Oe],W,te,ne)}function Qe(M,W,te,ne){const X=M.opaque,Se=M.transmissive,Oe=M.transparent;p.setupLightsView(te),oe===!0&&ve.setGlobalState(w.clippingPlanes,te),ne&&q.viewport(T.copy(ne)),X.length>0&&ot(X,W,te),Se.length>0&&ot(Se,W,te),Oe.length>0&&ot(Oe,W,te),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function rt(M,W,te,ne){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ne.id]===void 0&&(p.state.transmissionRenderTarget[ne.id]=new or(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?ba:Ii,minFilter:qs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Se=p.state.transmissionRenderTarget[ne.id],Oe=ne.viewport||T;Se.setSize(Oe.z*w.transmissionResolutionScale,Oe.w*w.transmissionResolutionScale);const Ge=w.getRenderTarget(),ze=w.getActiveCubeFace(),nt=w.getActiveMipmapLevel();w.setRenderTarget(Se),w.getClearColor(G),ie=w.getClearAlpha(),ie<1&&w.setClearColor(16777215,.5),w.clear(),Ke&&Ue.render(te);const st=w.toneMapping;w.toneMapping=Ts;const Ye=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),p.setupLightsView(ne),oe===!0&&ve.setGlobalState(w.clippingPlanes,ne),ot(M,te,ne),ce.updateMultisampleRenderTarget(Se),ce.updateRenderTargetMipmap(Se),j.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let Rt=0,Gt=W.length;Rt<Gt;Rt++){const kt=W[Rt],It=kt.object,Je=kt.geometry,zt=kt.material,xt=kt.group;if(zt.side===ji&&It.layers.test(ne.layers)){const Fn=zt.side;zt.side=On,zt.needsUpdate=!0,Xe(It,te,ne,Je,zt,xt),zt.side=Fn,zt.needsUpdate=!0,bt=!0}}bt===!0&&(ce.updateMultisampleRenderTarget(Se),ce.updateRenderTargetMipmap(Se))}w.setRenderTarget(Ge,ze,nt),w.setClearColor(G,ie),Ye!==void 0&&(ne.viewport=Ye),w.toneMapping=st}function ot(M,W,te){const ne=W.isScene===!0?W.overrideMaterial:null;for(let X=0,Se=M.length;X<Se;X++){const Oe=M[X],Ge=Oe.object,ze=Oe.geometry,nt=Oe.group;let st=Oe.material;st.allowOverride===!0&&ne!==null&&(st=ne),Ge.layers.test(te.layers)&&Xe(Ge,W,te,ze,st,nt)}}function Xe(M,W,te,ne,X,Se){M.onBeforeRender(w,W,te,ne,X,Se),M.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),X.onBeforeRender(w,W,te,ne,M,Se),X.transparent===!0&&X.side===ji&&X.forceSinglePass===!1?(X.side=On,X.needsUpdate=!0,w.renderBufferDirect(te,W,ne,X,M,Se),X.side=As,X.needsUpdate=!0,w.renderBufferDirect(te,W,ne,X,M,Se),X.side=ji):w.renderBufferDirect(te,W,ne,X,M,Se),M.onAfterRender(w,W,te,ne,X,Se)}function mt(M,W,te){W.isScene!==!0&&(W=me);const ne=J.get(M),X=p.state.lights,Se=p.state.shadowsArray,Oe=X.state.version,Ge=Z.getParameters(M,X.state,Se,W,te),ze=Z.getProgramCacheKey(Ge);let nt=ne.programs;ne.environment=M.isMeshStandardMaterial?W.environment:null,ne.fog=W.fog,ne.envMap=(M.isMeshStandardMaterial?Pe:fe).get(M.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&M.envMap===null?W.environmentRotation:M.envMapRotation,nt===void 0&&(M.addEventListener("dispose",he),nt=new Map,ne.programs=nt);let st=nt.get(ze);if(st!==void 0){if(ne.currentProgram===st&&ne.lightsStateVersion===Oe)return bn(M,Ge),st}else Ge.uniforms=Z.getUniforms(M),M.onBeforeCompile(Ge,w),st=Z.acquireProgram(Ge,ze),nt.set(ze,st),ne.uniforms=Ge.uniforms;const Ye=ne.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ye.clippingPlanes=ve.uniform),bn(M,Ge),ne.needsLights=kv(M),ne.lightsStateVersion=Oe,ne.needsLights&&(Ye.ambientLightColor.value=X.state.ambient,Ye.lightProbe.value=X.state.probe,Ye.directionalLights.value=X.state.directional,Ye.directionalLightShadows.value=X.state.directionalShadow,Ye.spotLights.value=X.state.spot,Ye.spotLightShadows.value=X.state.spotShadow,Ye.rectAreaLights.value=X.state.rectArea,Ye.ltc_1.value=X.state.rectAreaLTC1,Ye.ltc_2.value=X.state.rectAreaLTC2,Ye.pointLights.value=X.state.point,Ye.pointLightShadows.value=X.state.pointShadow,Ye.hemisphereLights.value=X.state.hemi,Ye.directionalShadowMap.value=X.state.directionalShadowMap,Ye.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ye.spotShadowMap.value=X.state.spotShadowMap,Ye.spotLightMatrix.value=X.state.spotLightMatrix,Ye.spotLightMap.value=X.state.spotLightMap,Ye.pointShadowMap.value=X.state.pointShadowMap,Ye.pointShadowMatrix.value=X.state.pointShadowMatrix),ne.currentProgram=st,ne.uniformsList=null,st}function Ht(M){if(M.uniformsList===null){const W=M.currentProgram.getUniforms();M.uniformsList=dl.seqWithValue(W.seq,M.uniforms)}return M.uniformsList}function bn(M,W){const te=J.get(M);te.outputColorSpace=W.outputColorSpace,te.batching=W.batching,te.batchingColor=W.batchingColor,te.instancing=W.instancing,te.instancingColor=W.instancingColor,te.instancingMorph=W.instancingMorph,te.skinning=W.skinning,te.morphTargets=W.morphTargets,te.morphNormals=W.morphNormals,te.morphColors=W.morphColors,te.morphTargetsCount=W.morphTargetsCount,te.numClippingPlanes=W.numClippingPlanes,te.numIntersection=W.numClipIntersection,te.vertexAlphas=W.vertexAlphas,te.vertexTangents=W.vertexTangents,te.toneMapping=W.toneMapping}function ts(M,W,te,ne,X){W.isScene!==!0&&(W=me),ce.resetTextureUnits();const Se=W.fog,Oe=ne.isMeshStandardMaterial?W.environment:null,Ge=k===null?w.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ao,ze=(ne.isMeshStandardMaterial?Pe:fe).get(ne.envMap||Oe),nt=ne.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,st=!!te.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ye=!!te.morphAttributes.position,bt=!!te.morphAttributes.normal,Rt=!!te.morphAttributes.color;let Gt=Ts;ne.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Gt=w.toneMapping);const kt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,It=kt!==void 0?kt.length:0,Je=J.get(ne),zt=p.state.lights;if(oe===!0&&(we===!0||M!==A)){const xn=M===A&&ne.id===E;ve.setState(ne,M,xn)}let xt=!1;ne.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==zt.state.version||Je.outputColorSpace!==Ge||X.isBatchedMesh&&Je.batching===!1||!X.isBatchedMesh&&Je.batching===!0||X.isBatchedMesh&&Je.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Je.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Je.instancing===!1||!X.isInstancedMesh&&Je.instancing===!0||X.isSkinnedMesh&&Je.skinning===!1||!X.isSkinnedMesh&&Je.skinning===!0||X.isInstancedMesh&&Je.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Je.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Je.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Je.instancingMorph===!1&&X.morphTexture!==null||Je.envMap!==ze||ne.fog===!0&&Je.fog!==Se||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==ve.numPlanes||Je.numIntersection!==ve.numIntersection)||Je.vertexAlphas!==nt||Je.vertexTangents!==st||Je.morphTargets!==Ye||Je.morphNormals!==bt||Je.morphColors!==Rt||Je.toneMapping!==Gt||Je.morphTargetsCount!==It)&&(xt=!0):(xt=!0,Je.__version=ne.version);let Fn=Je.currentProgram;xt===!0&&(Fn=mt(ne,W,X));let dr=!1,kn=!1,vo=!1;const Vt=Fn.getUniforms(),Zn=Je.uniforms;if(q.useProgram(Fn.program)&&(dr=!0,kn=!0,vo=!0),ne.id!==E&&(E=ne.id,kn=!0),dr||A!==M){q.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Vt.setValue(_,"projectionMatrix",M.projectionMatrix),Vt.setValue(_,"viewMatrix",M.matrixWorldInverse);const Pn=Vt.map.cameraPosition;Pn!==void 0&&Pn.setValue(_,ae.setFromMatrixPosition(M.matrixWorld)),ee.logarithmicDepthBuffer&&Vt.setValue(_,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Vt.setValue(_,"isOrthographic",M.isOrthographicCamera===!0),A!==M&&(A=M,kn=!0,vo=!0)}if(X.isSkinnedMesh){Vt.setOptional(_,X,"bindMatrix"),Vt.setOptional(_,X,"bindMatrixInverse");const xn=X.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Vt.setValue(_,"boneTexture",xn.boneTexture,ce))}X.isBatchedMesh&&(Vt.setOptional(_,X,"batchingTexture"),Vt.setValue(_,"batchingTexture",X._matricesTexture,ce),Vt.setOptional(_,X,"batchingIdTexture"),Vt.setValue(_,"batchingIdTexture",X._indirectTexture,ce),Vt.setOptional(_,X,"batchingColorTexture"),X._colorsTexture!==null&&Vt.setValue(_,"batchingColorTexture",X._colorsTexture,ce));const Qn=te.morphAttributes;if((Qn.position!==void 0||Qn.normal!==void 0||Qn.color!==void 0)&&_e.update(X,te,Fn),(kn||Je.receiveShadow!==X.receiveShadow)&&(Je.receiveShadow=X.receiveShadow,Vt.setValue(_,"receiveShadow",X.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Zn.envMap.value=ze,Zn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&W.environment!==null&&(Zn.envMapIntensity.value=W.environmentIntensity),kn&&(Vt.setValue(_,"toneMappingExposure",w.toneMappingExposure),Je.needsLights&&Fv(Zn,vo),Se&&ne.fog===!0&&le.refreshFogUniforms(Zn,Se),le.refreshMaterialUniforms(Zn,ne,Y,ue,p.state.transmissionRenderTarget[M.id]),dl.upload(_,Ht(Je),Zn,ce)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(dl.upload(_,Ht(Je),Zn,ce),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Vt.setValue(_,"center",X.center),Vt.setValue(_,"modelViewMatrix",X.modelViewMatrix),Vt.setValue(_,"normalMatrix",X.normalMatrix),Vt.setValue(_,"modelMatrix",X.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const xn=ne.uniformsGroups;for(let Pn=0,ec=xn.length;Pn<ec;Pn++){const Ls=xn[Pn];lt.update(Ls,Fn),lt.bind(Ls,Fn)}}return Fn}function Fv(M,W){M.ambientLightColor.needsUpdate=W,M.lightProbe.needsUpdate=W,M.directionalLights.needsUpdate=W,M.directionalLightShadows.needsUpdate=W,M.pointLights.needsUpdate=W,M.pointLightShadows.needsUpdate=W,M.spotLights.needsUpdate=W,M.spotLightShadows.needsUpdate=W,M.rectAreaLights.needsUpdate=W,M.hemisphereLights.needsUpdate=W}function kv(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(M,W,te){const ne=J.get(M);ne.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),J.get(M.texture).__webglTexture=W,J.get(M.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:te,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,W){const te=J.get(M);te.__webglFramebuffer=W,te.__useDefaultFramebuffer=W===void 0};const Bv=_.createFramebuffer();this.setRenderTarget=function(M,W=0,te=0){k=M,L=W,D=te;let ne=!0,X=null,Se=!1,Oe=!1;if(M){const ze=J.get(M);if(ze.__useDefaultFramebuffer!==void 0)q.bindFramebuffer(_.FRAMEBUFFER,null),ne=!1;else if(ze.__webglFramebuffer===void 0)ce.setupRenderTarget(M);else if(ze.__hasExternalTextures)ce.rebindTextures(M,J.get(M.texture).__webglTexture,J.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ye=M.depthTexture;if(ze.__boundDepthTexture!==Ye){if(Ye!==null&&J.has(Ye)&&(M.width!==Ye.image.width||M.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(M)}}const nt=M.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Oe=!0);const st=J.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(st[W])?X=st[W][te]:X=st[W],Se=!0):M.samples>0&&ce.useMultisampledRTT(M)===!1?X=J.get(M).__webglMultisampledFramebuffer:Array.isArray(st)?X=st[te]:X=st,T.copy(M.viewport),I.copy(M.scissor),O=M.scissorTest}else T.copy(Ne).multiplyScalar(Y).floor(),I.copy($e).multiplyScalar(Y).floor(),O=it;if(te!==0&&(X=Bv),q.bindFramebuffer(_.FRAMEBUFFER,X)&&ne&&q.drawBuffers(M,X),q.viewport(T),q.scissor(I),q.setScissorTest(O),Se){const ze=J.get(M.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+W,ze.__webglTexture,te)}else if(Oe){const ze=W;for(let nt=0;nt<M.textures.length;nt++){const st=J.get(M.textures[nt]);_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0+nt,st.__webglTexture,te,ze)}}else if(M!==null&&te!==0){const ze=J.get(M.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,ze.__webglTexture,te)}E=-1},this.readRenderTargetPixels=function(M,W,te,ne,X,Se,Oe,Ge=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=J.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze){q.bindFramebuffer(_.FRAMEBUFFER,ze);try{const nt=M.textures[Ge],st=nt.format,Ye=nt.type;if(!ee.textureFormatReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=M.width-ne&&te>=0&&te<=M.height-X&&(M.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+Ge),_.readPixels(W,te,ne,X,Fe.convert(st),Fe.convert(Ye),Se))}finally{const nt=k!==null?J.get(k).__webglFramebuffer:null;q.bindFramebuffer(_.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(M,W,te,ne,X,Se,Oe,Ge=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=J.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze)if(W>=0&&W<=M.width-ne&&te>=0&&te<=M.height-X){q.bindFramebuffer(_.FRAMEBUFFER,ze);const nt=M.textures[Ge],st=nt.format,Ye=nt.type;if(!ee.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const bt=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,bt),_.bufferData(_.PIXEL_PACK_BUFFER,Se.byteLength,_.STREAM_READ),M.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+Ge),_.readPixels(W,te,ne,X,Fe.convert(st),Fe.convert(Ye),0);const Rt=k!==null?J.get(k).__webglFramebuffer:null;q.bindFramebuffer(_.FRAMEBUFFER,Rt);const Gt=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await oA(_,Gt,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,bt),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,Se),_.deleteBuffer(bt),_.deleteSync(Gt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,W=null,te=0){const ne=Math.pow(2,-te),X=Math.floor(M.image.width*ne),Se=Math.floor(M.image.height*ne),Oe=W!==null?W.x:0,Ge=W!==null?W.y:0;ce.setTexture2D(M,0),_.copyTexSubImage2D(_.TEXTURE_2D,te,0,0,Oe,Ge,X,Se),q.unbindTexture()};const Hv=_.createFramebuffer(),zv=_.createFramebuffer();this.copyTextureToTexture=function(M,W,te=null,ne=null,X=0,Se=null){Se===null&&(X!==0?(zr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=X,X=0):Se=0);let Oe,Ge,ze,nt,st,Ye,bt,Rt,Gt;const kt=M.isCompressedTexture?M.mipmaps[Se]:M.image;if(te!==null)Oe=te.max.x-te.min.x,Ge=te.max.y-te.min.y,ze=te.isBox3?te.max.z-te.min.z:1,nt=te.min.x,st=te.min.y,Ye=te.isBox3?te.min.z:0;else{const Qn=Math.pow(2,-X);Oe=Math.floor(kt.width*Qn),Ge=Math.floor(kt.height*Qn),M.isDataArrayTexture?ze=kt.depth:M.isData3DTexture?ze=Math.floor(kt.depth*Qn):ze=1,nt=0,st=0,Ye=0}ne!==null?(bt=ne.x,Rt=ne.y,Gt=ne.z):(bt=0,Rt=0,Gt=0);const It=Fe.convert(W.format),Je=Fe.convert(W.type);let zt;W.isData3DTexture?(ce.setTexture3D(W,0),zt=_.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ce.setTexture2DArray(W,0),zt=_.TEXTURE_2D_ARRAY):(ce.setTexture2D(W,0),zt=_.TEXTURE_2D),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,W.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,W.unpackAlignment);const xt=_.getParameter(_.UNPACK_ROW_LENGTH),Fn=_.getParameter(_.UNPACK_IMAGE_HEIGHT),dr=_.getParameter(_.UNPACK_SKIP_PIXELS),kn=_.getParameter(_.UNPACK_SKIP_ROWS),vo=_.getParameter(_.UNPACK_SKIP_IMAGES);_.pixelStorei(_.UNPACK_ROW_LENGTH,kt.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,kt.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,nt),_.pixelStorei(_.UNPACK_SKIP_ROWS,st),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Ye);const Vt=M.isDataArrayTexture||M.isData3DTexture,Zn=W.isDataArrayTexture||W.isData3DTexture;if(M.isDepthTexture){const Qn=J.get(M),xn=J.get(W),Pn=J.get(Qn.__renderTarget),ec=J.get(xn.__renderTarget);q.bindFramebuffer(_.READ_FRAMEBUFFER,Pn.__webglFramebuffer),q.bindFramebuffer(_.DRAW_FRAMEBUFFER,ec.__webglFramebuffer);for(let Ls=0;Ls<ze;Ls++)Vt&&(_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,J.get(M).__webglTexture,X,Ye+Ls),_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,J.get(W).__webglTexture,Se,Gt+Ls)),_.blitFramebuffer(nt,st,Oe,Ge,bt,Rt,Oe,Ge,_.DEPTH_BUFFER_BIT,_.NEAREST);q.bindFramebuffer(_.READ_FRAMEBUFFER,null),q.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else if(X!==0||M.isRenderTargetTexture||J.has(M)){const Qn=J.get(M),xn=J.get(W);q.bindFramebuffer(_.READ_FRAMEBUFFER,Hv),q.bindFramebuffer(_.DRAW_FRAMEBUFFER,zv);for(let Pn=0;Pn<ze;Pn++)Vt?_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Qn.__webglTexture,X,Ye+Pn):_.framebufferTexture2D(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Qn.__webglTexture,X),Zn?_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,xn.__webglTexture,Se,Gt+Pn):_.framebufferTexture2D(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,xn.__webglTexture,Se),X!==0?_.blitFramebuffer(nt,st,Oe,Ge,bt,Rt,Oe,Ge,_.COLOR_BUFFER_BIT,_.NEAREST):Zn?_.copyTexSubImage3D(zt,Se,bt,Rt,Gt+Pn,nt,st,Oe,Ge):_.copyTexSubImage2D(zt,Se,bt,Rt,nt,st,Oe,Ge);q.bindFramebuffer(_.READ_FRAMEBUFFER,null),q.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else Zn?M.isDataTexture||M.isData3DTexture?_.texSubImage3D(zt,Se,bt,Rt,Gt,Oe,Ge,ze,It,Je,kt.data):W.isCompressedArrayTexture?_.compressedTexSubImage3D(zt,Se,bt,Rt,Gt,Oe,Ge,ze,It,kt.data):_.texSubImage3D(zt,Se,bt,Rt,Gt,Oe,Ge,ze,It,Je,kt):M.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,Se,bt,Rt,Oe,Ge,It,Je,kt.data):M.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,Se,bt,Rt,kt.width,kt.height,It,kt.data):_.texSubImage2D(_.TEXTURE_2D,Se,bt,Rt,Oe,Ge,It,Je,kt);_.pixelStorei(_.UNPACK_ROW_LENGTH,xt),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,Fn),_.pixelStorei(_.UNPACK_SKIP_PIXELS,dr),_.pixelStorei(_.UNPACK_SKIP_ROWS,kn),_.pixelStorei(_.UNPACK_SKIP_IMAGES,vo),Se===0&&W.generateMipmaps&&_.generateMipmap(zt),q.unbindTexture()},this.copyTextureToTexture3D=function(M,W,te=null,ne=null,X=0){return zr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,W,te,ne,X)},this.initRenderTarget=function(M){J.get(M).__webglFramebuffer===void 0&&ce.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ce.setTextureCube(M,0):M.isData3DTexture?ce.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ce.setTexture2DArray(M,0):ce.setTexture2D(M,0),q.unbindTexture()},this.resetState=function(){L=0,D=0,k=null,q.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),n.unpackColorSpace=wt._getUnpackColorSpace()}}const cp={type:"change"},Jd={type:"start"},Ev={type:"end"},Qa=new sv,up=new hs,AP=Math.cos(70*sA.DEG2RAD),Jt=new Q,Ln=2*Math.PI,Lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Kc=1e-6;class Tv extends WA{constructor(e,n=null){super(e,n),this.state=Lt.NONE,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Br.ROTATE,MIDDLE:Br.DOLLY,RIGHT:Br.PAN},this.touches={ONE:Pr.ROTATE,TWO:Pr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Q,this._lastQuaternion=new rr,this._lastTargetPosition=new Q,this._quat=new rr().setFromUnitVectors(e.up,new Q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fh,this._sphericalDelta=new Fh,this._scale=1,this._panOffset=new Q,this._rotateStart=new ut,this._rotateEnd=new ut,this._rotateDelta=new ut,this._panStart=new ut,this._panEnd=new ut,this._panDelta=new ut,this._dollyStart=new ut,this._dollyEnd=new ut,this._dollyDelta=new ut,this._dollyDirection=new Q,this._mouse=new ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=RP.bind(this),this._onPointerDown=CP.bind(this),this._onPointerUp=PP.bind(this),this._onContextMenu=FP.bind(this),this._onMouseWheel=IP.bind(this),this._onKeyDown=UP.bind(this),this._onTouchStart=OP.bind(this),this._onTouchMove=NP.bind(this),this._onMouseDown=DP.bind(this),this._onMouseMove=LP.bind(this),this._interceptControlDown=kP.bind(this),this._interceptControlUp=BP.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(cp),this.update(),this.state=Lt.NONE}update(e=null){const n=this.object.position;Jt.copy(n).sub(this.target),Jt.applyQuaternion(this._quat),this._spherical.setFromVector3(Jt),this.autoRotate&&this.state===Lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Ln:i>Math.PI&&(i-=Ln),s<-Math.PI?s+=Ln:s>Math.PI&&(s-=Ln),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Jt.setFromSpherical(this._spherical),Jt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Jt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Jt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new Q(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new Q(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Jt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Qa.origin.copy(this.object.position),Qa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Qa.direction))<AP?this.object.lookAt(this.target):(up.setFromNormalAndCoplanarPoint(this.object.up,this.target),Qa.intersectPlane(up,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Kc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Kc||this._lastTargetPosition.distanceToSquared(this.target)>Kc?(this.dispatchEvent(cp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ln/60*this.autoRotateSpeed*e:Ln/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Jt.setFromMatrixColumn(n,0),Jt.multiplyScalar(-e),this._panOffset.add(Jt)}_panUp(e,n){this.screenSpacePanning===!0?Jt.setFromMatrixColumn(n,1):(Jt.setFromMatrixColumn(n,0),Jt.crossVectors(this.object.up,Jt)),Jt.multiplyScalar(e),this._panOffset.add(Jt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Jt.copy(s).sub(this.target);let r=Jt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=n-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/n.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/n.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new ut,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function CP(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function RP(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function PP(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ev),this.state=Lt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function DP(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Br.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=Lt.DOLLY;break;case Br.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Lt.ROTATE}break;case Br.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Lt.PAN}break;default:this.state=Lt.NONE}this.state!==Lt.NONE&&this.dispatchEvent(Jd)}function LP(t){switch(this.state){case Lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case Lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case Lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function IP(t){this.enabled===!1||this.enableZoom===!1||this.state!==Lt.NONE||(t.preventDefault(),this.dispatchEvent(Jd),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Ev))}function UP(t){this.enabled!==!1&&this._handleKeyDown(t)}function OP(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Pr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=Lt.TOUCH_ROTATE;break;case Pr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=Lt.TOUCH_PAN;break;default:this.state=Lt.NONE}break;case 2:switch(this.touches.TWO){case Pr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=Lt.TOUCH_DOLLY_PAN;break;case Pr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=Lt.TOUCH_DOLLY_ROTATE;break;default:this.state=Lt.NONE}break;default:this.state=Lt.NONE}this.state!==Lt.NONE&&this.dispatchEvent(Jd)}function NP(t){switch(this._trackPointer(t),this.state){case Lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case Lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case Lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case Lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=Lt.NONE}}function FP(t){this.enabled!==!1&&t.preventDefault()}function kP(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function BP(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const HP={__name:"MiyukiBeads",props:{pattern:{type:Array,required:!0},rows:{type:Number,default:10},cols:{type:Number,default:50}},setup(t){const e=t,n=at(null);let i,s,r,o,a=[];const l=new HA,c=new Map;function u(v){return typeof v=="string"&&v.startsWith("/miyuki-beads-designer/beads/")}function d(v){if(u(v)){const g=v;let m=c.get(g);return m||(m=l.load(g,C=>{C.colorSpace=In,r&&(C.anisotropy=r.capabilities.getMaxAnisotropy())}),m.colorSpace=In,c.set(g,m)),new td({color:16777215,map:m,roughness:.1,metalness:.1,clearcoat:.5,clearcoatRoughness:.1})}return new td({color:v,roughness:.1,metalness:.1,clearcoat:.5,clearcoatRoughness:.1})}function f(){a.forEach(v=>{i.remove(v),v.material&&v.material.dispose()}),a=[]}function h(){const v=new Kl(.7,.7,1.1,32),g=(e.cols-1)/2,m=(e.rows-1)/2;for(let p=0;p<e.rows;p++)for(let C=0;C<e.cols;C++){const R=p*e.cols+C,w=e.pattern[R]||"#ffffff",U=d(w),L=new fi(v,U);L.position.set((C-g)*1.2,-(p-m)*1.2,0),i.add(L),a.push(L)}}return uo(()=>{i=new hv,i.background=new vt(15790320),s=new Gn(45,n.value.clientWidth/n.value.clientHeight,.1,1e3),s.position.set(50,-50,50),r=new Mv({antialias:!0}),r.setPixelRatio(Math.min(window.devicePixelRatio||1,2));function v(){if(!n.value)return;const C=n.value.clientWidth,R=n.value.clientHeight;C===0||R===0||(s.aspect=C/R,s.updateProjectionMatrix(),r.setSize(C,R,!1))}v(),n.value.appendChild(r.domElement);const g=new ResizeObserver(()=>{v()});g.observe(n.value),r.__resizeObserver=g,o=new Tv(s,r.domElement),i.add(new vv(16777215,.5));const m=new nd(16777215,3);m.position.set(10,10,10),i.add(m),h();function p(){requestAnimationFrame(p),o.update(),r.render(i,s)}p(),window.addEventListener("resize",v),r.__resizeHandler=v}),Xn(()=>e.pattern,()=>{f(),h()},{deep:!0}),xd(()=>{r&&r.__resizeHandler&&window.removeEventListener("resize",r.__resizeHandler),r&&r.__resizeObserver&&n.value&&r.__resizeObserver.disconnect(),o&&o.dispose(),r&&r.dispose(),f()}),(v,g)=>(Ve(),We("div",{ref_key:"container",ref:n,class:"bead-container"},null,512))}},zP={class:"bracelet-wrapper"},VP={class:"canvas-container"},GP={class:"toolbar"},WP={class:"info-panel"},$P={class:"info-item"},XP={class:"info-value"},qP={class:"info-item"},jP={class:"info-value"},YP={__name:"BraceletPreview",props:{pattern:{type:Array,required:!0},rows:{type:Number,required:!0},cols:{type:Number,required:!0},width:{type:Number,default:900},height:{type:Number,default:600}},setup(t,{expose:e}){const n=t,i=at(null);let s,r,o,a,l=[];function c(){l.forEach(v=>s.remove(v)),l=[]}function u(){if(!s)return;c(),console.log("BraceletPreview - props:",{pattern:n.pattern,rows:n.rows,cols:n.cols,patternLength:n.pattern?n.pattern.length:0,patternType:Array.isArray(n.pattern)?"Array":typeof n.pattern}),n.pattern&&Array.isArray(n.pattern)&&console.log("Pattern structure:",{firstRow:n.pattern[0],firstRowLength:n.pattern[0]?n.pattern[0].length:0,firstRowType:n.pattern[0]?typeof n.pattern[0]:"undefined",sampleValues:n.pattern.slice(0,3).map(L=>L?L.slice(0,3):"undefined")});const v=20,g=Math.PI*1.55,m=-g/2;new vt("#b58a3a");const p=g/n.rows,C=v*p*.98,R=.95,w=1,U=new Kl(R*.7,R*.7,C,16);for(let L=0;L<n.rows;L++)for(let D=0;D<n.cols;D++){let k="#ffffff";if(Array.isArray(n.pattern[0]))k=n.pattern[L]&&n.pattern[L][D]?n.pattern[L][D]:"#ffffff";else{const $=L*n.cols+D;k=n.pattern[$]||"#ffffff"}L===0&&D===0&&console.log("First bead debug:",{y:L,x:D,patternY:n.pattern[L],patternYX:n.pattern[L]?n.pattern[L][D]:void 0,colorHex:k,patternType:Array.isArray(n.pattern[0])?"Matrix":"Simple Array",index:L*n.cols+D}),(!k||k==="#"||k.length<3)&&(k="#ffffff",console.warn("Invalid color detected:",k,"using default white"));const E=new vt(k),A=new td({color:E,roughness:.25,metalness:.15,clearcoat:.4,clearcoatRoughness:.1}),T=m+(L+.5)*p,I=(n.cols/2-.5-D)*w,O=v*Math.sin(T),G=v*Math.cos(T),ie=new fi(U,A);ie.position.set(O,I,G),ie.rotation.z=Math.PI/2,ie.rotation.y=T,s.add(ie),l.push(ie)}}function d(){s=new hv,s.background=new vt(15987699),r=new Gn(42,n.width/n.height,.1,2e3),r.position.set(0,3,95),r.lookAt(0,0,0),o=new Mv({antialias:!0,preserveDrawingBuffer:!0}),o.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),o.setSize(n.width,n.height,!1),i.value.appendChild(o.domElement),s.add(new vv(16777215,.7));const v=new nd(16777215,1.1);v.position.set(8,10,12),s.add(v);const g=new nd(16777215,.6);g.position.set(-8,-3,8),s.add(g),a=new Tv(r,o.domElement),a.enableDamping=!0,a.target.set(0,0,0);function m(){requestAnimationFrame(m),a.update(),o.render(s,r)}m()}function f(){o&&(a.update(),o.render(s,r))}function h(){f();const v=o.domElement.toDataURL("image/png"),g=document.createElement("a");g.href=v,g.download="bracelet.png",g.click()}return uo(()=>{d(),u(),f()}),Xn(()=>[n.pattern,n.rows,n.cols],()=>{u(),f()},{deep:!0}),xd(()=>{a&&a.dispose(),o&&o.dispose(),l=[]}),e({downloadImage:h}),(v,g)=>(Ve(),We("div",zP,[g[4]||(g[4]=b("div",{class:"header"},[b("h2",{class:"title"},"پیش‌نمایش دستبند"),b("p",{class:"subtitle"},"نمایش سه‌بعدی طرح انتخاب شده")],-1)),b("div",VP,[b("div",{ref_key:"container",ref:i,class:"bracelet-canvas"},null,512),g[0]||(g[0]=Cm('<div class="canvas-overlay" data-v-93874d86><div class="controls-hint" data-v-93874d86><div class="hint-item" data-v-93874d86><span class="hint-icon" data-v-93874d86>🖱️</span><span data-v-93874d86>برای چرخاندن کلیک و درگ کنید</span></div><div class="hint-item" data-v-93874d86><span class="hint-icon" data-v-93874d86>🔍</span><span data-v-93874d86>برای زوم اسکرول کنید</span></div></div></div>',1))]),b("div",GP,[b("button",{class:"btn btn-primary",onClick:h},g[1]||(g[1]=[b("span",{class:"btn-icon"},"📥",-1),b("span",null,"دانلود تصویر",-1)])),b("div",WP,[b("div",$P,[g[2]||(g[2]=b("span",{class:"info-label"},"ابعاد:",-1)),b("span",XP,ct(t.cols)+" × "+ct(t.rows),1)]),b("div",qP,[g[3]||(g[3]=b("span",{class:"info-label"},"تعداد مهره:",-1)),b("span",jP,ct(t.cols*t.rows),1)])])])]))}},KP=fa(YP,[["__scopeId","data-v-93874d86"]]),ZP={class:"working-page"},QP={class:"controls-panel"},JP={class:"control-group"},eD={class:"start-controls"},tD={class:"control-label"},nD=["max"],iD={class:"control-label"},sD={class:"control-group"},rD={class:"navigation-controls"},oD=["disabled"],aD=["disabled"],lD={class:"control-group"},cD={class:"info-display"},uD={class:"info-item"},dD={class:"info-value"},fD={class:"info-item"},hD={class:"info-value"},pD={class:"info-item"},mD={class:"info-value"},gD={class:"control-group"},vD={class:"color-management"},_D={class:"color-list-management"},bD={class:"all-colors-list"},xD=["onUpdate:modelValue","placeholder","onInput"],yD={class:"color-code"},wD={class:"pattern-container"},SD={class:"pattern-header"},MD={class:"pattern-info"},ED={class:"instructions-panel"},TD={class:"row-instructions"},AD={class:"color-instructions"},CD={class:"color-list"},RD={class:"color-count"},PD={class:"pattern-instructions"},DD={class:"pattern-sequence"},LD=["title"],ID={class:"grid-wrapper"},UD=["title"],OD={__name:"WorkingPage",props:{pattern:{type:Array,default:()=>[]},rows:{type:Number,default:16},cols:{type:Number,default:80}},setup(t){const e=t,n=at(0),i=at("forward"),s=at(0),r=at({}),o=()=>{if(!e.pattern||e.pattern.length===0){const I=["#ff6b6b","#4ecdc4","#45b7d1","#96ceb4","#feca57","#ff9ff3","#54a0ff","#5f27cd"],O=[];for(let G=0;G<e.rows;G++)for(let ie=0;ie<e.cols;ie++){const $=I[Math.floor(Math.random()*I.length)];O.push({color:$,row:G,col:ie})}return O}const T=[];for(let I=0;I<e.rows;I++)for(let O=0;O<e.cols;O++){const G=I*e.cols+O,ie=e.pattern[G]||"#ffffff";T.push({color:ie,row:I,col:O})}return T},a=at(o()),l=at(!0),c=on(()=>l.value?e.rows:e.cols),u=on(()=>c.value-1),d=on(()=>c.value),f=on(()=>{const T=i.value==="forward"?n.value+s.value:n.value-s.value;return Math.max(0,Math.min(c.value-1,T))}),h=on(()=>{const T=[];if(l.value)for(let I=0;I<e.cols;I++){const O=f.value*e.cols+I,G=e.pattern[O]||"#ffffff";T.includes(G)||T.push(G)}else for(let I=0;I<e.rows;I++){const O=I*e.cols+f.value,G=e.pattern[O]||"#ffffff";T.includes(G)||T.push(G)}return T}),v=on(()=>{const T=[];if(l.value)for(let I=0;I<e.cols;I++){const O=f.value*e.cols+I,G=e.pattern[O]||"#ffffff";T.push(G)}else for(let I=0;I<e.rows;I++){const O=I*e.cols+f.value,G=e.pattern[O]||"#ffffff";T.push(G)}return T}),g=on(()=>{const T=new Set;for(let I=0;I<e.pattern.length;I++)e.pattern[I]&&T.add(e.pattern[I]);return Array.from(T).sort()}),m=T=>{const I=Math.floor(T/e.cols),O=T%e.cols;return l.value?I===f.value:O===f.value},p=T=>{const I=Math.floor(T/e.cols),O=T%e.cols;return l.value?I==f.value:O==f.value},C=T=>{const I=Math.floor(T/e.cols),O=T%e.cols;return i.value==="forward"?l.value?I>f.value:O>f.value:l.value?I<f.value:O<f.value},R=T=>m(T)?1:p(T)?.4:.2,w=T=>{let I=0;if(l.value)for(let O=0;O<e.cols;O++){const G=f.value*e.cols+O;e.pattern[G]===T&&I++}else for(let O=0;O<e.rows;O++){const G=O*e.cols+f.value;e.pattern[G]===T&&I++}return I},U=(T,I)=>{r.value[T]=I},L=T=>{const I=r.value[T];if(T.startsWith("/miyuki-beads-designer/beads/")){const O=T.split("/").pop().replace(".jpg","");return I?`${I} (${O})`:O}return I?`${I} (${T})`:T},D=()=>{s.value<d.value-1&&s.value++},k=()=>{s.value>0&&s.value--},E=()=>{s.value=0},A=T=>{switch(T.key){case"Enter":case" ":T.preventDefault(),D();break;case"ArrowLeft":T.preventDefault(),k();break;case"r":case"R":T.preventDefault(),E();break}};return uo(()=>{try{const T=localStorage.getItem("gridEditor_isVertical");l.value=T!==null?JSON.parse(T):!0}catch(T){console.error("Failed to read gridEditor_isVertical from localStorage",T),l.value=!0}document.addEventListener("keydown",A)}),yd(()=>{document.removeEventListener("keydown",A)}),Xn(i,()=>{s.value=0}),Xn(n,()=>{s.value=0}),Xn(l,()=>{s.value=0,n.value>u.value&&(n.value=0)}),Xn(()=>e.pattern,()=>{a.value=o()},{deep:!0}),(T,I)=>(Ve(),We("div",ZP,[I[16]||(I[16]=b("div",{class:"page-header"},[b("h1",{class:"page-title"},"🧶 مراحل اجرای دستبند میوکی"),b("p",{class:"page-subtitle"}," مراحل بافت دستبند را ردیف به ردیف (از بالا به پایین) مشاهده کنید ")],-1)),b("div",QP,[b("div",JP,[I[5]||(I[5]=b("h3",null,"🎯 تنظیمات شروع",-1)),b("div",eD,[b("label",tD,[I[2]||(I[2]=b("span",null,"شروع از ردیف:",-1)),Zt(b("input",{"onUpdate:modelValue":I[0]||(I[0]=O=>n.value=O),type:"number",min:"0",max:u.value,class:"control-input"},null,8,nD),[[en,n.value,void 0,{number:!0}]])]),b("label",iD,[I[4]||(I[4]=b("span",null,"جهت اجرا:",-1)),Zt(b("select",{"onUpdate:modelValue":I[1]||(I[1]=O=>i.value=O),class:"control-select"},I[3]||(I[3]=[b("option",{value:"forward"},"⬇️ از بالا به پایین",-1),b("option",{value:"backward"},"⬆️ از پایین به بالا",-1)]),512),[[J0,i.value]])])])]),b("div",sD,[I[6]||(I[6]=b("h3",null,"🎮 کنترل‌ها",-1)),b("div",rD,[b("button",{disabled:s.value<=0,class:"nav-btn prev-btn",onClick:k}," ⬅️ مرحله قبل ",8,oD),b("button",{disabled:s.value>=d.value-1,class:"nav-btn next-btn",onClick:D}," مرحله بعد ➡️ ",8,aD),b("button",{class:"nav-btn reset-btn",onClick:E}," 🔄 شروع مجدد ")])]),b("div",lD,[I[10]||(I[10]=b("h3",null,"📊 اطلاعات",-1)),b("div",cD,[b("div",uD,[I[7]||(I[7]=b("span",{class:"info-label"},"مرحله فعلی:",-1)),b("span",dD,ct(s.value+1)+" از "+ct(d.value),1)]),b("div",fD,[I[8]||(I[8]=b("span",{class:"info-label"},"ردیف فعلی:",-1)),b("span",hD,ct(f.value+1)+" از "+ct(c.value),1)]),b("div",pD,[I[9]||(I[9]=b("span",{class:"info-label"},"رنگ‌های مورد نیاز:",-1)),b("span",mD,ct(h.value.length)+" رنگ",1)])])]),b("div",gD,[I[12]||(I[12]=b("h3",null,"🎨 مدیریت رنگ‌ها",-1)),b("div",vD,[b("div",_D,[I[11]||(I[11]=b("h4",null,"رنگ‌های استفاده شده در طرح:",-1)),b("div",bD,[(Ve(!0),We(Bt,null,Mn(g.value,(O,G)=>(Ve(),We("div",{key:O,class:"color-management-item"},[b("div",{class:"color-swatch-large",style:Wn({backgroundColor:O.startsWith("/miyuki-beads-designer/beads/")?"transparent":O,backgroundImage:O.startsWith("/miyuki-beads-designer/beads/")?`url(${O})`:"none",backgroundSize:"cover",backgroundPosition:"center"})},null,4),Zt(b("input",{"onUpdate:modelValue":ie=>r.value[O]=ie,type:"text",placeholder:`نام رنگ ${G+1}`,class:"color-name-input",onInput:ie=>U(O,ie.target.value)},null,40,xD),[[en,r.value[O]]]),b("span",yD,ct(O),1)]))),128))])])])])]),b("div",wD,[b("div",SD,[I[13]||(I[13]=b("h3",null,"🎨 الگوی دستبند",-1)),b("div",MD,[b("span",null,"ابعاد: "+ct(t.rows)+" × "+ct(t.cols),1)])]),b("div",ED,[b("h4",null,"📋 دستورالعمل ردیف "+ct(f.value+1),1),b("div",TD,[b("div",AD,[I[14]||(I[14]=b("h5",null,"رنگ‌های مورد نیاز:",-1)),b("div",CD,[(Ve(!0),We(Bt,null,Mn(h.value,(O,G)=>(Ve(),We("div",{key:G,class:"color-item"},[b("div",{class:"color-swatch",style:Wn({backgroundColor:O.startsWith("/miyuki-beads-designer/beads/")?"transparent":O,backgroundImage:O.startsWith("/miyuki-beads-designer/beads/")?`url(${O})`:"none",backgroundSize:"cover",backgroundPosition:"center"})},null,4),b("span",RD,ct(w(O)),1)]))),128))])]),b("div",PD,[I[15]||(I[15]=b("h5",null,"ترتیب رنگ‌ها:",-1)),b("div",DD,[(Ve(!0),We(Bt,null,Mn(v.value,(O,G)=>(Ve(),We("div",{key:G,class:"sequence-item",style:Wn({backgroundColor:O.startsWith("/miyuki-beads-designer/beads/")?"transparent":O,backgroundImage:O.startsWith("/miyuki-beads-designer/beads/")?`url(${O})`:"none",backgroundSize:"cover",backgroundPosition:"center"}),title:L(O)},null,12,LD))),128))])])])]),b("div",ID,[b("div",{class:"pattern-grid",style:Wn({gridTemplateColumns:`repeat(${t.cols}, 12px)`})},[(Ve(!0),We(Bt,null,Mn(a.value,(O,G)=>(Ve(),We("div",{key:G,class:et(["grid-cell",{"active-row":m(G),"completed-row":p(G),"upcoming-row":C(G)}]),style:Wn({backgroundColor:O.color.startsWith("/miyuki-beads-designer/beads/")?"transparent":O.color,backgroundImage:O.color.startsWith("/miyuki-beads-designer/beads/")?`url(${O.color})`:"none",backgroundSize:"cover",backgroundPosition:"center",opacity:R(G)}),title:`ردیف ${Math.floor(G/t.cols)+1}, ستون ${G%t.cols+1}: ${O.color}`},null,14,UD))),128))],4)])]),I[17]||(I[17]=Cm('<div class="shortcuts-info" data-v-0bb56b32><h4 data-v-0bb56b32>⌨️ کلیدهای میانبر</h4><div class="shortcuts-list" data-v-0bb56b32><div class="shortcut-item" data-v-0bb56b32><kbd data-v-0bb56b32>Enter</kbd> یا <kbd data-v-0bb56b32>Space</kbd> - مرحله بعد </div><div class="shortcut-item" data-v-0bb56b32><kbd data-v-0bb56b32>←</kbd> - مرحله قبل</div><div class="shortcut-item" data-v-0bb56b32><kbd data-v-0bb56b32>R</kbd> - شروع مجدد</div></div></div>',1))]))}},ND=fa(OD,[["__scopeId","data-v-0bb56b32"]]),FD={class:"home-container"},kD={class:"app-header max-md:hidden flex items-start justify-between mb-3!"},BD={class:"stats-section"},HD={class:"stat-item"},zD={class:"stat-number"},VD={class:"stat-item"},GD={class:"stat-number"},WD={class:"stat-item"},$D={class:"stat-number"},XD={class:"stat-item"},qD={class:"stat-number"},jD={class:"mobile-header-content"},YD={class:"mobile-stats"},KD={class:"mobile-stat-item"},ZD={class:"mobile-stat-number"},QD={class:"mobile-stat-item"},JD={class:"mobile-stat-number"},eL={class:"mobile-stat-item"},tL={class:"mobile-stat-number"},nL={class:"mobile-stat-item"},iL={class:"mobile-stat-number"},sL={class:"content-container"},rL={__name:"HomeView",props:{isMobileHeaderOpen:{type:Boolean,default:!1}},setup(t){const e=t,n=at(16),i=at(80),s=at(Array(16*80).fill("#ffffff")),r=at(!0),o=at(!1),a=at(!1),l=at(!1);function c(){r.value=!0,o.value=!1,a.value=!1,l.value=!1}function u(){o.value=!0,r.value=!1,a.value=!1,l.value=!1}function d(){a.value=!0,o.value=!1,r.value=!1,l.value=!1}function f(){l.value=!0,r.value=!1,o.value=!1,a.value=!1}function h(v){if(!Array.isArray(v)||v.length===0){s.value=[],n.value=0,i.value=0;return}n.value=v.length,i.value=Array.isArray(v[0])?v[0].length:0,s.value=v.flat()}return(v,g)=>(Ve(),We("div",FD,[b("header",kD,[b("div",{class:"header-content"},[b("div",{class:"header-actions mt-3! flex items-center gap-2"},[b("button",{class:"rounded-md bg-cyan-950 px-4! py-1! text-[14px] text-white",onClick:c}," ویرایشگر شبکه "),b("button",{class:"rounded-md bg-blue-900 px-4! py-1! text-[14px] text-white",onClick:u}," نمایش مهره‌ها "),b("button",{class:"rounded-md bg-emerald-900 px-4! py-1! text-[14px] text-white",onClick:d}," پیش‌نمایش دستبند "),b("button",{class:"rounded-md bg-emerald-900 px-4! py-1! text-[14px] text-white",onClick:f}," مراحل اجرا ")])]),b("div",BD,[b("div",HD,[b("div",zD,ct(n.value),1),g[0]||(g[0]=b("div",{class:"stat-label"},"ردیف",-1))]),b("div",VD,[b("div",GD,ct(i.value),1),g[1]||(g[1]=b("div",{class:"stat-label"},"ستون",-1))]),b("div",WD,[b("div",$D,ct(s.value.length),1),g[2]||(g[2]=b("div",{class:"stat-label"},"مهره",-1))]),b("div",XD,[b("div",qD,ct((s.value.length/190).toFixed(2)),1),g[3]||(g[3]=b("div",{class:"stat-label"},"گرم",-1))])])]),b("div",{class:et(["mobile-header-panel md:hidden",{open:e.isMobileHeaderOpen}])},[b("div",jD,[b("div",{class:"mobile-actions"},[b("button",{class:"mobile-action-btn bg-cyan-950",onClick:c}," ویرایشگر شبکه "),b("button",{class:"mobile-action-btn bg-blue-900",onClick:u}," نمایش مهره‌ها "),b("button",{class:"mobile-action-btn bg-emerald-900",onClick:d}," پیش‌نمایش دستبند "),b("button",{class:"mobile-action-btn bg-emerald-900",onClick:f}," مراحل اجرا ")]),b("div",YD,[b("div",KD,[b("div",ZD,ct(n.value),1),g[4]||(g[4]=b("div",{class:"mobile-stat-label"},"ردیف",-1))]),b("div",QD,[b("div",JD,ct(i.value),1),g[5]||(g[5]=b("div",{class:"mobile-stat-label"},"ستون",-1))]),b("div",eL,[b("div",tL,ct(s.value.length),1),g[6]||(g[6]=b("div",{class:"mobile-stat-label"},"مهره",-1))]),b("div",nL,[b("div",iL,ct((s.value.length/190).toFixed(2)),1),g[7]||(g[7]=b("div",{class:"mobile-stat-label"},"گرم",-1))])])])],2),b("div",sL,[r.value?(Ve(),Lo(mT,{key:0,class:"content-component",onUpdateGrid:h})):Pt("",!0),o.value?(Ve(),Lo(HP,{key:1,pattern:s.value,rows:n.value,cols:i.value,class:"content-component"},null,8,["pattern","rows","cols"])):Pt("",!0),a.value?(Ve(),Lo(KP,{key:2,pattern:s.value,rows:n.value,cols:i.value,class:"content-component"},null,8,["pattern","rows","cols"])):Pt("",!0),l.value?(Ve(),Lo(ND,{key:3,pattern:s.value,rows:n.value,cols:i.value,class:"content-component"},null,8,["pattern","rows","cols"])):Pt("",!0)])]))}},oL=fa(rL,[["__scopeId","data-v-3694130d"]]),aL=cx({history:Bb("/miyuki-beads-designer/"),routes:[{path:"/",name:"home",component:oL},{path:"/about",name:"about",component:()=>So(()=>import("./AboutView-9FbNQiFY.js"),[])},{path:"/sweetalert-demo",name:"sweetalert-demo",component:()=>So(()=>import("./SweetAlertDemo-DY8E0yIB.js"),__vite__mapDeps([0,1]))},{path:"/weaving-grid",name:"weaving-grid",component:()=>So(()=>import("./WeavingGrid-4Cr5rZqH.js"),__vite__mapDeps([2,3,4,5]))},{path:"/beadwork-pattern",name:"beadwork-pattern",component:()=>So(()=>import("./BeadworkPattern-BTeOQfU3.js"),[])},{path:"/peyote-grid",name:"peyote-grid",component:()=>So(()=>import("./PeyoteGrid-C3bEPWAS.js"),__vite__mapDeps([6,3,4,7]))}]});var Jl=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Ma=typeof window>"u"||"Deno"in globalThis;function ai(){}function lL(t,e){return typeof t=="function"?t(e):t}function cL(t){return typeof t=="number"&&t>=0&&t!==1/0}function uL(t,e){return Math.max(t+(e||0)-Date.now(),0)}function dp(t,e){return typeof t=="function"?t(e):t}function dL(t,e){return typeof t=="function"?t(e):t}function fp(t,e){const{type:n="all",exact:i,fetchStatus:s,predicate:r,queryKey:o,stale:a}=t;if(o){if(i){if(e.queryHash!==ef(o,e.options))return!1}else if(!ia(e.queryKey,o))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||s&&s!==e.state.fetchStatus||r&&!r(e))}function hp(t,e){const{exact:n,status:i,predicate:s,mutationKey:r}=t;if(r){if(!e.options.mutationKey)return!1;if(n){if(na(e.options.mutationKey)!==na(r))return!1}else if(!ia(e.options.mutationKey,r))return!1}return!(i&&e.state.status!==i||s&&!s(e))}function ef(t,e){return((e==null?void 0:e.queryKeyHashFn)||na)(t)}function na(t){return JSON.stringify(t,(e,n)=>sd(n)?Object.keys(n).sort().reduce((i,s)=>(i[s]=n[s],i),{}):n)}function ia(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?Object.keys(e).every(n=>ia(t[n],e[n])):!1}function Av(t,e){if(t===e)return t;const n=pp(t)&&pp(e);if(n||sd(t)&&sd(e)){const i=n?t:Object.keys(t),s=i.length,r=n?e:Object.keys(e),o=r.length,a=n?[]:{};let l=0;for(let c=0;c<o;c++){const u=n?c:r[c];(!n&&i.includes(u)||n)&&t[u]===void 0&&e[u]===void 0?(a[u]=void 0,l++):(a[u]=Av(t[u],e[u]),a[u]===t[u]&&t[u]!==void 0&&l++)}return s===o&&l===s?t:a}return e}function pp(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function sd(t){if(!mp(t))return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(!mp(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function mp(t){return Object.prototype.toString.call(t)==="[object Object]"}function fL(t){return new Promise(e=>{setTimeout(e,t)})}function hL(t,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?Av(t,e):e}function pL(t,e,n=0){const i=[...t,e];return n&&i.length>n?i.slice(1):i}function mL(t,e,n=0){const i=[e,...t];return n&&i.length>n?i.slice(0,-1):i}var tf=Symbol();function Cv(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===tf?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}var js,gs,Gr,_p,gL=(_p=class extends Jl{constructor(){super();yt(this,js);yt(this,gs);yt(this,Gr);ft(this,Gr,e=>{if(!Ma&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){de(this,gs)||this.setEventListener(de(this,Gr))}onUnsubscribe(){var e;this.hasListeners()||((e=de(this,gs))==null||e.call(this),ft(this,gs,void 0))}setEventListener(e){var n;ft(this,Gr,e),(n=de(this,gs))==null||n.call(this),ft(this,gs,e(i=>{typeof i=="boolean"?this.setFocused(i):this.onFocus()}))}setFocused(e){de(this,js)!==e&&(ft(this,js,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(n=>{n(e)})}isFocused(){var e;return typeof de(this,js)=="boolean"?de(this,js):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},js=new WeakMap,gs=new WeakMap,Gr=new WeakMap,_p),Rv=new gL,Wr,vs,$r,bp,vL=(bp=class extends Jl{constructor(){super();yt(this,Wr,!0);yt(this,vs);yt(this,$r);ft(this,$r,e=>{if(!Ma&&window.addEventListener){const n=()=>e(!0),i=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",i)}}})}onSubscribe(){de(this,vs)||this.setEventListener(de(this,$r))}onUnsubscribe(){var e;this.hasListeners()||((e=de(this,vs))==null||e.call(this),ft(this,vs,void 0))}setEventListener(e){var n;ft(this,$r,e),(n=de(this,vs))==null||n.call(this),ft(this,vs,e(this.setOnline.bind(this)))}setOnline(e){de(this,Wr)!==e&&(ft(this,Wr,e),this.listeners.forEach(i=>{i(e)}))}isOnline(){return de(this,Wr)}},Wr=new WeakMap,vs=new WeakMap,$r=new WeakMap,bp),Ll=new vL;function _L(){let t,e;const n=new Promise((s,r)=>{t=s,e=r});n.status="pending",n.catch(()=>{});function i(s){Object.assign(n,s),delete n.resolve,delete n.reject}return n.resolve=s=>{i({status:"fulfilled",value:s}),t(s)},n.reject=s=>{i({status:"rejected",reason:s}),e(s)},n}function bL(t){return Math.min(1e3*2**t,3e4)}function Pv(t){return(t??"online")==="online"?Ll.isOnline():!0}var Dv=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function Zc(t){return t instanceof Dv}function Lv(t){let e=!1,n=0,i=!1,s;const r=_L(),o=g=>{var m;i||(f(new Dv(g)),(m=t.abort)==null||m.call(t))},a=()=>{e=!0},l=()=>{e=!1},c=()=>Rv.isFocused()&&(t.networkMode==="always"||Ll.isOnline())&&t.canRun(),u=()=>Pv(t.networkMode)&&t.canRun(),d=g=>{var m;i||(i=!0,(m=t.onSuccess)==null||m.call(t,g),s==null||s(),r.resolve(g))},f=g=>{var m;i||(i=!0,(m=t.onError)==null||m.call(t,g),s==null||s(),r.reject(g))},h=()=>new Promise(g=>{var m;s=p=>{(i||c())&&g(p)},(m=t.onPause)==null||m.call(t)}).then(()=>{var g;s=void 0,i||(g=t.onContinue)==null||g.call(t)}),v=()=>{if(i)return;let g;const m=n===0?t.initialPromise:void 0;try{g=m??t.fn()}catch(p){g=Promise.reject(p)}Promise.resolve(g).then(d).catch(p=>{var L;if(i)return;const C=t.retry??(Ma?0:3),R=t.retryDelay??bL,w=typeof R=="function"?R(n,p):R,U=C===!0||typeof C=="number"&&n<C||typeof C=="function"&&C(n,p);if(e||!U){f(p);return}n++,(L=t.onFail)==null||L.call(t,n,p),fL(w).then(()=>c()?void 0:h()).then(()=>{e?f(p):v()})})};return{promise:r,cancel:o,continue:()=>(s==null||s(),r),cancelRetry:a,continueRetry:l,canStart:u,start:()=>(u()?v():h().then(v),r)}}var xL=t=>setTimeout(t,0);function yL(){let t=[],e=0,n=a=>{a()},i=a=>{a()},s=xL;const r=a=>{e?t.push(a):s(()=>{n(a)})},o=()=>{const a=t;t=[],a.length&&s(()=>{i(()=>{a.forEach(l=>{n(l)})})})};return{batch:a=>{let l;e++;try{l=a()}finally{e--,e||o()}return l},batchCalls:a=>(...l)=>{r(()=>{a(...l)})},schedule:r,setNotifyFunction:a=>{n=a},setBatchNotifyFunction:a=>{i=a},setScheduler:a=>{s=a}}}var Tn=yL(),Ys,xp,Iv=(xp=class{constructor(){yt(this,Ys)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),cL(this.gcTime)&&ft(this,Ys,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(Ma?1/0:5*60*1e3))}clearGcTimeout(){de(this,Ys)&&(clearTimeout(de(this,Ys)),ft(this,Ys,void 0))}},Ys=new WeakMap,xp),Xr,qr,ei,Ks,fn,sa,Zs,li,Gi,yp,wL=(yp=class extends Iv{constructor(e){super();yt(this,li);yt(this,Xr);yt(this,qr);yt(this,ei);yt(this,Ks);yt(this,fn);yt(this,sa);yt(this,Zs);ft(this,Zs,!1),ft(this,sa,e.defaultOptions),this.setOptions(e.options),this.observers=[],ft(this,Ks,e.client),ft(this,ei,de(this,Ks).getQueryCache()),this.queryKey=e.queryKey,this.queryHash=e.queryHash,ft(this,Xr,ML(this.options)),this.state=e.state??de(this,Xr),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var e;return(e=de(this,fn))==null?void 0:e.promise}setOptions(e){this.options={...de(this,sa),...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&de(this,ei).remove(this)}setData(e,n){const i=hL(this.state.data,e,this.options);return cn(this,li,Gi).call(this,{data:i,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),i}setState(e,n){cn(this,li,Gi).call(this,{type:"setState",state:e,setStateOptions:n})}cancel(e){var i,s;const n=(i=de(this,fn))==null?void 0:i.promise;return(s=de(this,fn))==null||s.cancel(e),n?n.then(ai).catch(ai):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(de(this,Xr))}isActive(){return this.observers.some(e=>dL(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===tf||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(e=0){return this.state.isInvalidated||this.state.data===void 0||!uL(this.state.dataUpdatedAt,e)}onFocus(){var n;const e=this.observers.find(i=>i.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(n=de(this,fn))==null||n.continue()}onOnline(){var n;const e=this.observers.find(i=>i.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(n=de(this,fn))==null||n.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),de(this,ei).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(de(this,fn)&&(de(this,Zs)?de(this,fn).cancel({revert:!0}):de(this,fn).cancelRetry()),this.scheduleGc()),de(this,ei).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||cn(this,li,Gi).call(this,{type:"invalidate"})}fetch(e,n){var l,c,u;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(de(this,fn))return de(this,fn).continueRetry(),de(this,fn).promise}if(e&&this.setOptions(e),!this.options.queryFn){const d=this.observers.find(f=>f.options.queryFn);d&&this.setOptions(d.options)}const i=new AbortController,s=d=>{Object.defineProperty(d,"signal",{enumerable:!0,get:()=>(ft(this,Zs,!0),i.signal)})},r=()=>{const d=Cv(this.options,n),f={client:de(this,Ks),queryKey:this.queryKey,meta:this.meta};return s(f),ft(this,Zs,!1),this.options.persister?this.options.persister(d,f,this):d(f)},o={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:de(this,Ks),state:this.state,fetchFn:r};s(o),(l=this.options.behavior)==null||l.onFetch(o,this),ft(this,qr,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((c=o.fetchOptions)==null?void 0:c.meta))&&cn(this,li,Gi).call(this,{type:"fetch",meta:(u=o.fetchOptions)==null?void 0:u.meta});const a=d=>{var f,h,v,g;Zc(d)&&d.silent||cn(this,li,Gi).call(this,{type:"error",error:d}),Zc(d)||((h=(f=de(this,ei).config).onError)==null||h.call(f,d,this),(g=(v=de(this,ei).config).onSettled)==null||g.call(v,this.state.data,d,this)),this.scheduleGc()};return ft(this,fn,Lv({initialPromise:n==null?void 0:n.initialPromise,fn:o.fetchFn,abort:i.abort.bind(i),onSuccess:d=>{var f,h,v,g;if(d===void 0){a(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(d)}catch(m){a(m);return}(h=(f=de(this,ei).config).onSuccess)==null||h.call(f,d,this),(g=(v=de(this,ei).config).onSettled)==null||g.call(v,d,this.state.error,this),this.scheduleGc()},onError:a,onFail:(d,f)=>{cn(this,li,Gi).call(this,{type:"failed",failureCount:d,error:f})},onPause:()=>{cn(this,li,Gi).call(this,{type:"pause"})},onContinue:()=>{cn(this,li,Gi).call(this,{type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode,canRun:()=>!0})),de(this,fn).start()}},Xr=new WeakMap,qr=new WeakMap,ei=new WeakMap,Ks=new WeakMap,fn=new WeakMap,sa=new WeakMap,Zs=new WeakMap,li=new WeakSet,Gi=function(e){const n=i=>{switch(e.type){case"failed":return{...i,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...SL(i.data,this.options),fetchMeta:e.meta??null};case"success":return{...i,data:e.data,dataUpdateCount:i.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const s=e.error;return Zc(s)&&s.revert&&de(this,qr)?{...de(this,qr),fetchStatus:"idle"}:{...i,error:s,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...e.state}}};this.state=n(this.state),Tn.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),de(this,ei).notify({query:this,type:"updated",action:e})})},yp);function SL(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Pv(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function ML(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=e!==void 0,i=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var xi,wp,Uv=(wp=class extends Jl{constructor(n={}){super();yt(this,xi);this.config=n,ft(this,xi,new Map)}build(n,i,s){const r=i.queryKey,o=i.queryHash??ef(r,i);let a=this.get(o);return a||(a=new wL({client:n,queryKey:r,queryHash:o,options:n.defaultQueryOptions(i),state:s,defaultOptions:n.getQueryDefaults(r)}),this.add(a)),a}add(n){de(this,xi).has(n.queryHash)||(de(this,xi).set(n.queryHash,n),this.notify({type:"added",query:n}))}remove(n){const i=de(this,xi).get(n.queryHash);i&&(n.destroy(),i===n&&de(this,xi).delete(n.queryHash),this.notify({type:"removed",query:n}))}clear(){Tn.batch(()=>{this.getAll().forEach(n=>{this.remove(n)})})}get(n){return de(this,xi).get(n)}getAll(){return[...de(this,xi).values()]}find(n){const i={exact:!0,...n};return this.getAll().find(s=>fp(i,s))}findAll(n={}){const i=this.getAll();return Object.keys(n).length>0?i.filter(s=>fp(n,s)):i}notify(n){Tn.batch(()=>{this.listeners.forEach(i=>{i(n)})})}onFocus(){Tn.batch(()=>{this.getAll().forEach(n=>{n.onFocus()})})}onOnline(){Tn.batch(()=>{this.getAll().forEach(n=>{n.onOnline()})})}},xi=new WeakMap,wp),yi,Sn,Qs,wi,cs,Sp,EL=(Sp=class extends Iv{constructor(e){super();yt(this,wi);yt(this,yi);yt(this,Sn);yt(this,Qs);this.mutationId=e.mutationId,ft(this,Sn,e.mutationCache),ft(this,yi,[]),this.state=e.state||TL(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){de(this,yi).includes(e)||(de(this,yi).push(e),this.clearGcTimeout(),de(this,Sn).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){ft(this,yi,de(this,yi).filter(n=>n!==e)),this.scheduleGc(),de(this,Sn).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){de(this,yi).length||(this.state.status==="pending"?this.scheduleGc():de(this,Sn).remove(this))}continue(){var e;return((e=de(this,Qs))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var r,o,a,l,c,u,d,f,h,v,g,m,p,C,R,w,U,L,D,k;const n=()=>{cn(this,wi,cs).call(this,{type:"continue"})};ft(this,Qs,Lv({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(E,A)=>{cn(this,wi,cs).call(this,{type:"failed",failureCount:E,error:A})},onPause:()=>{cn(this,wi,cs).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>de(this,Sn).canRun(this)}));const i=this.state.status==="pending",s=!de(this,Qs).canStart();try{if(i)n();else{cn(this,wi,cs).call(this,{type:"pending",variables:e,isPaused:s}),await((o=(r=de(this,Sn).config).onMutate)==null?void 0:o.call(r,e,this));const A=await((l=(a=this.options).onMutate)==null?void 0:l.call(a,e));A!==this.state.context&&cn(this,wi,cs).call(this,{type:"pending",context:A,variables:e,isPaused:s})}const E=await de(this,Qs).start();return await((u=(c=de(this,Sn).config).onSuccess)==null?void 0:u.call(c,E,e,this.state.context,this)),await((f=(d=this.options).onSuccess)==null?void 0:f.call(d,E,e,this.state.context)),await((v=(h=de(this,Sn).config).onSettled)==null?void 0:v.call(h,E,null,this.state.variables,this.state.context,this)),await((m=(g=this.options).onSettled)==null?void 0:m.call(g,E,null,e,this.state.context)),cn(this,wi,cs).call(this,{type:"success",data:E}),E}catch(E){try{throw await((C=(p=de(this,Sn).config).onError)==null?void 0:C.call(p,E,e,this.state.context,this)),await((w=(R=this.options).onError)==null?void 0:w.call(R,E,e,this.state.context)),await((L=(U=de(this,Sn).config).onSettled)==null?void 0:L.call(U,void 0,E,this.state.variables,this.state.context,this)),await((k=(D=this.options).onSettled)==null?void 0:k.call(D,void 0,E,e,this.state.context)),E}finally{cn(this,wi,cs).call(this,{type:"error",error:E})}}finally{de(this,Sn).runNext(this)}}},yi=new WeakMap,Sn=new WeakMap,Qs=new WeakMap,wi=new WeakSet,cs=function(e){const n=i=>{switch(e.type){case"failed":return{...i,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...i,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:e.error,failureCount:i.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=n(this.state),Tn.batch(()=>{de(this,yi).forEach(i=>{i.onMutationUpdate(e)}),de(this,Sn).notify({mutation:this,type:"updated",action:e})})},Sp);function TL(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var $i,ci,ra,Mp,Ov=(Mp=class extends Jl{constructor(n={}){super();yt(this,$i);yt(this,ci);yt(this,ra);this.config=n,ft(this,$i,new Set),ft(this,ci,new Map),ft(this,ra,0)}build(n,i,s){const r=new EL({mutationCache:this,mutationId:++Ea(this,ra)._,options:n.defaultMutationOptions(i),state:s});return this.add(r),r}add(n){de(this,$i).add(n);const i=Ja(n);if(typeof i=="string"){const s=de(this,ci).get(i);s?s.push(n):de(this,ci).set(i,[n])}this.notify({type:"added",mutation:n})}remove(n){if(de(this,$i).delete(n)){const i=Ja(n);if(typeof i=="string"){const s=de(this,ci).get(i);if(s)if(s.length>1){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}else s[0]===n&&de(this,ci).delete(i)}}this.notify({type:"removed",mutation:n})}canRun(n){const i=Ja(n);if(typeof i=="string"){const s=de(this,ci).get(i),r=s==null?void 0:s.find(o=>o.state.status==="pending");return!r||r===n}else return!0}runNext(n){var s;const i=Ja(n);if(typeof i=="string"){const r=(s=de(this,ci).get(i))==null?void 0:s.find(o=>o!==n&&o.state.isPaused);return(r==null?void 0:r.continue())??Promise.resolve()}else return Promise.resolve()}clear(){Tn.batch(()=>{de(this,$i).forEach(n=>{this.notify({type:"removed",mutation:n})}),de(this,$i).clear(),de(this,ci).clear()})}getAll(){return Array.from(de(this,$i))}find(n){const i={exact:!0,...n};return this.getAll().find(s=>hp(i,s))}findAll(n={}){return this.getAll().filter(i=>hp(n,i))}notify(n){Tn.batch(()=>{this.listeners.forEach(i=>{i(n)})})}resumePausedMutations(){const n=this.getAll().filter(i=>i.state.isPaused);return Tn.batch(()=>Promise.all(n.map(i=>i.continue().catch(ai))))}},$i=new WeakMap,ci=new WeakMap,ra=new WeakMap,Mp);function Ja(t){var e;return(e=t.options.scope)==null?void 0:e.id}function gp(t){return{onFetch:(e,n)=>{var u,d,f,h,v;const i=e.options,s=(f=(d=(u=e.fetchOptions)==null?void 0:u.meta)==null?void 0:d.fetchMore)==null?void 0:f.direction,r=((h=e.state.data)==null?void 0:h.pages)||[],o=((v=e.state.data)==null?void 0:v.pageParams)||[];let a={pages:[],pageParams:[]},l=0;const c=async()=>{let g=!1;const m=R=>{Object.defineProperty(R,"signal",{enumerable:!0,get:()=>(e.signal.aborted?g=!0:e.signal.addEventListener("abort",()=>{g=!0}),e.signal)})},p=Cv(e.options,e.fetchOptions),C=async(R,w,U)=>{if(g)return Promise.reject();if(w==null&&R.pages.length)return Promise.resolve(R);const L={client:e.client,queryKey:e.queryKey,pageParam:w,direction:U?"backward":"forward",meta:e.options.meta};m(L);const D=await p(L),{maxPages:k}=e.options,E=U?mL:pL;return{pages:E(R.pages,D,k),pageParams:E(R.pageParams,w,k)}};if(s&&r.length){const R=s==="backward",w=R?AL:vp,U={pages:r,pageParams:o},L=w(i,U);a=await C(U,L,R)}else{const R=t??r.length;do{const w=l===0?o[0]??i.initialPageParam:vp(i,a);if(l>0&&w==null)break;a=await C(a,w),l++}while(l<R)}return a};e.options.persister?e.fetchFn=()=>{var g,m;return(m=(g=e.options).persister)==null?void 0:m.call(g,c,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=c}}}function vp(t,{pages:e,pageParams:n}){const i=e.length-1;return e.length>0?t.getNextPageParam(e[i],e,n[i],n):void 0}function AL(t,{pages:e,pageParams:n}){var i;return e.length>0?(i=t.getPreviousPageParam)==null?void 0:i.call(t,e[0],e,n[0],n):void 0}var $t,_s,bs,jr,Yr,xs,Kr,Zr,Ep,CL=(Ep=class{constructor(e={}){yt(this,$t);yt(this,_s);yt(this,bs);yt(this,jr);yt(this,Yr);yt(this,xs);yt(this,Kr);yt(this,Zr);ft(this,$t,e.queryCache||new Uv),ft(this,_s,e.mutationCache||new Ov),ft(this,bs,e.defaultOptions||{}),ft(this,jr,new Map),ft(this,Yr,new Map),ft(this,xs,0)}mount(){Ea(this,xs)._++,de(this,xs)===1&&(ft(this,Kr,Rv.subscribe(async e=>{e&&(await this.resumePausedMutations(),de(this,$t).onFocus())})),ft(this,Zr,Ll.subscribe(async e=>{e&&(await this.resumePausedMutations(),de(this,$t).onOnline())})))}unmount(){var e,n;Ea(this,xs)._--,de(this,xs)===0&&((e=de(this,Kr))==null||e.call(this),ft(this,Kr,void 0),(n=de(this,Zr))==null||n.call(this),ft(this,Zr,void 0))}isFetching(e){return de(this,$t).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return de(this,_s).findAll({...e,status:"pending"}).length}getQueryData(e){var i;const n=this.defaultQueryOptions({queryKey:e});return(i=de(this,$t).get(n.queryHash))==null?void 0:i.state.data}ensureQueryData(e){const n=this.defaultQueryOptions(e),i=de(this,$t).build(this,n),s=i.state.data;return s===void 0?this.fetchQuery(e):(e.revalidateIfStale&&i.isStaleByTime(dp(n.staleTime,i))&&this.prefetchQuery(n),Promise.resolve(s))}getQueriesData(e){return de(this,$t).findAll(e).map(({queryKey:n,state:i})=>{const s=i.data;return[n,s]})}setQueryData(e,n,i){const s=this.defaultQueryOptions({queryKey:e}),r=de(this,$t).get(s.queryHash),o=r==null?void 0:r.state.data,a=lL(n,o);if(a!==void 0)return de(this,$t).build(this,s).setData(a,{...i,manual:!0})}setQueriesData(e,n,i){return Tn.batch(()=>de(this,$t).findAll(e).map(({queryKey:s})=>[s,this.setQueryData(s,n,i)]))}getQueryState(e){var i;const n=this.defaultQueryOptions({queryKey:e});return(i=de(this,$t).get(n.queryHash))==null?void 0:i.state}removeQueries(e){const n=de(this,$t);Tn.batch(()=>{n.findAll(e).forEach(i=>{n.remove(i)})})}resetQueries(e,n){const i=de(this,$t);return Tn.batch(()=>(i.findAll(e).forEach(s=>{s.reset()}),this.refetchQueries({type:"active",...e},n)))}cancelQueries(e,n={}){const i={revert:!0,...n},s=Tn.batch(()=>de(this,$t).findAll(e).map(r=>r.cancel(i)));return Promise.all(s).then(ai).catch(ai)}invalidateQueries(e,n={}){return Tn.batch(()=>(de(this,$t).findAll(e).forEach(i=>{i.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},n)))}refetchQueries(e,n={}){const i={...n,cancelRefetch:n.cancelRefetch??!0},s=Tn.batch(()=>de(this,$t).findAll(e).filter(r=>!r.isDisabled()).map(r=>{let o=r.fetch(void 0,i);return i.throwOnError||(o=o.catch(ai)),r.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(s).then(ai)}fetchQuery(e){const n=this.defaultQueryOptions(e);n.retry===void 0&&(n.retry=!1);const i=de(this,$t).build(this,n);return i.isStaleByTime(dp(n.staleTime,i))?i.fetch(n):Promise.resolve(i.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(ai).catch(ai)}fetchInfiniteQuery(e){return e.behavior=gp(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(ai).catch(ai)}ensureInfiniteQueryData(e){return e.behavior=gp(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return Ll.isOnline()?de(this,_s).resumePausedMutations():Promise.resolve()}getQueryCache(){return de(this,$t)}getMutationCache(){return de(this,_s)}getDefaultOptions(){return de(this,bs)}setDefaultOptions(e){ft(this,bs,e)}setQueryDefaults(e,n){de(this,jr).set(na(e),{queryKey:e,defaultOptions:n})}getQueryDefaults(e){const n=[...de(this,jr).values()],i={};return n.forEach(s=>{ia(e,s.queryKey)&&Object.assign(i,s.defaultOptions)}),i}setMutationDefaults(e,n){de(this,Yr).set(na(e),{mutationKey:e,defaultOptions:n})}getMutationDefaults(e){const n=[...de(this,Yr).values()],i={};return n.forEach(s=>{ia(e,s.mutationKey)&&Object.assign(i,s.defaultOptions)}),i}defaultQueryOptions(e){if(e._defaulted)return e;const n={...de(this,bs).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return n.queryHash||(n.queryHash=ef(n.queryKey,n)),n.refetchOnReconnect===void 0&&(n.refetchOnReconnect=n.networkMode!=="always"),n.throwOnError===void 0&&(n.throwOnError=!!n.suspense),!n.networkMode&&n.persister&&(n.networkMode="offlineFirst"),n.queryFn===tf&&(n.enabled=!1),n}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...de(this,bs).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){de(this,$t).clear(),de(this,_s).clear()}},$t=new WeakMap,_s=new WeakMap,bs=new WeakMap,jr=new WeakMap,Yr=new WeakMap,xs=new WeakMap,Kr=new WeakMap,Zr=new WeakMap,Ep),RL="VUE_QUERY_CLIENT";function PL(t){const e=t?`:${t}`:"";return`${RL}${e}`}function rd(t,e,n="",i=0){if(e){const s=e(t,n,i);if(s===void 0&&an(t)||s!==void 0)return s}if(Array.isArray(t))return t.map((s,r)=>rd(s,e,String(r),i+1));if(typeof t=="object"&&LL(t)){const s=Object.entries(t).map(([r,o])=>[r,rd(o,e,r,i+1)]);return Object.fromEntries(s)}return t}function DL(t,e){return rd(t,e)}function _t(t,e=!1){return DL(t,(n,i,s)=>{if(s===1&&i==="queryKey")return _t(n,!0);if(e&&IL(n))return _t(n(),e);if(an(n))return _t(Ms(n),e)})}function LL(t){if(Object.prototype.toString.call(t)!=="[object Object]")return!1;const e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function IL(t){return typeof t=="function"}var UL=class extends Uv{find(t){return super.find(_t(t))}findAll(t={}){return super.findAll(_t(t))}},OL=class extends Ov{find(t){return super.find(_t(t))}findAll(t={}){return super.findAll(_t(t))}},NL=class extends CL{constructor(t={}){const e={defaultOptions:t.defaultOptions,queryCache:t.queryCache||new UL,mutationCache:t.mutationCache||new OL};super(e),this.isRestoring=at(!1)}isFetching(t={}){return super.isFetching(_t(t))}isMutating(t={}){return super.isMutating(_t(t))}getQueryData(t){return super.getQueryData(_t(t))}ensureQueryData(t){return super.ensureQueryData(_t(t))}getQueriesData(t){return super.getQueriesData(_t(t))}setQueryData(t,e,n={}){return super.setQueryData(_t(t),e,_t(n))}setQueriesData(t,e,n={}){return super.setQueriesData(_t(t),e,_t(n))}getQueryState(t){return super.getQueryState(_t(t))}removeQueries(t={}){return super.removeQueries(_t(t))}resetQueries(t={},e={}){return super.resetQueries(_t(t),_t(e))}cancelQueries(t={},e={}){return super.cancelQueries(_t(t),_t(e))}invalidateQueries(t={},e={}){const n=_t(t),i=_t(e);if(super.invalidateQueries({...n,refetchType:"none"},i),n.refetchType==="none")return Promise.resolve();const s={...n,type:n.refetchType??n.type??"active"};return ua().then(()=>super.refetchQueries(s,i))}refetchQueries(t={},e={}){return super.refetchQueries(_t(t),_t(e))}fetchQuery(t){return super.fetchQuery(_t(t))}prefetchQuery(t){return super.prefetchQuery(_t(t))}fetchInfiniteQuery(t){return super.fetchInfiniteQuery(_t(t))}prefetchInfiniteQuery(t){return super.prefetchInfiniteQuery(_t(t))}setDefaultOptions(t){super.setDefaultOptions(_t(t))}setQueryDefaults(t,e){super.setQueryDefaults(_t(t),_t(e))}getQueryDefaults(t){return super.getQueryDefaults(_t(t))}setMutationDefaults(t,e){super.setMutationDefaults(_t(t),_t(e))}getMutationDefaults(t){return super.getMutationDefaults(_t(t))}},FL={install:(t,e={})=>{const n=PL(e.queryClientKey);let i;if("queryClient"in e&&e.queryClient)i=e.queryClient;else{const o="queryClientConfig"in e?e.queryClientConfig:void 0;i=new NL(o)}Ma||i.mount();let s=()=>{};if(e.clientPersister){i.isRestoring.value=!0;const[o,a]=e.clientPersister(i);s=o,a.then(()=>{var l;i.isRestoring.value=!1,(l=e.clientPersisterOnSuccess)==null||l.call(e,i)})}const r=()=>{i.unmount(),s()};if(t.onUnmount)t.onUnmount(r);else{const o=t.unmount;t.unmount=function(){r(),o()}}t.provide(n,i)}};const Nv=sb(vx),kL=lb();Nv.use(kL).use(aL).use(FL);Nv.mount("#app");export{yo as A,HL as B,tn as C,HP as D,KP as E,Bt as F,on as G,Lo as H,Io as I,vt as J,Mv as K,vv as L,nd as M,Kl as N,Tv as O,Gn as P,td as Q,fi as R,hv as S,Cm as T,yd as U,ua as V,ND as W,fa as _,b as a,Pt as b,We as c,Wt as d,VL as e,Mo as f,vc as g,WL as h,$L as i,XL as j,qL as k,GL as l,la as m,uo as n,Ve as o,xd as p,Zt as q,at as r,vi as s,ct as t,Mn as u,en as v,Xn as w,et as x,zL as y,Wn as z};
