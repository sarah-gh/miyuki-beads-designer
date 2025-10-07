const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SweetAlertDemo-Df467C9P.js","assets/SweetAlertDemo-tn0RQdqM.css","assets/WeavingGrid-CCn2UCrq.js","assets/PeyoteGridEditor-BZGWQEez.js","assets/PeyoteGridEditor-_eckTEjt.css","assets/WeavingGrid-p5k6qFxd.css","assets/PeyoteGrid-ByXG5oYr.js","assets/PeyoteGrid-DyXLFu-D.css"])))=>i.map(i=>d[i]);
var Qd=t=>{throw TypeError(t)};var ec=(t,e,n)=>e.has(t)||Qd("Cannot "+n);var de=(t,e,n)=>(ec(t,e,"read from private field"),n?n.call(t):e.get(t)),bt=(t,e,n)=>e.has(t)?Qd("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),dt=(t,e,n,i)=>(ec(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n),ln=(t,e,n)=>(ec(t,e,"access private method"),n);var Sa=(t,e,n,i)=>({set _(s){dt(t,e,s,n)},get _(){return de(t,e,i)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function id(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ut={},Dr=[],Ai=()=>{},Bv=()=>!1,Ll=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),sd=t=>t.startsWith("onUpdate:"),vn=Object.assign,rd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},zv=Object.prototype.hasOwnProperty,Ct=(t,e)=>zv.call(t,e),et=Array.isArray,Lr=t=>sa(t)==="[object Map]",lo=t=>sa(t)==="[object Set]",Jd=t=>sa(t)==="[object Date]",ut=t=>typeof t=="function",Qt=t=>typeof t=="string",Pi=t=>typeof t=="symbol",Nt=t=>t!==null&&typeof t=="object",wp=t=>(Nt(t)||ut(t))&&ut(t.then)&&ut(t.catch),Sp=Object.prototype.toString,sa=t=>Sp.call(t),Hv=t=>sa(t).slice(8,-1),Mp=t=>sa(t)==="[object Object]",od=t=>Qt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Uo=id(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Il=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Vv=/-(\w)/g,ti=Il(t=>t.replace(Vv,(e,n)=>n?n.toUpperCase():"")),Gv=/\B([A-Z])/g,ar=Il(t=>t.replace(Gv,"-$1").toLowerCase()),Ul=Il(t=>t.charAt(0).toUpperCase()+t.slice(1)),tc=Il(t=>t?`on${Ul(t)}`:""),Ss=(t,e)=>!Object.is(t,e),Qa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ep=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},ul=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ef;const Ol=()=>ef||(ef=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Gn(t){if(et(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Qt(i)?qv(i):Gn(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Qt(t)||Nt(t))return t}const Wv=/;(?![^(]*\))/g,$v=/:([^]+)/,Xv=/\/\*[^]*?\*\//g;function qv(t){const e={};return t.replace(Xv,"").split(Wv).forEach(n=>{if(n){const i=n.split($v);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function it(t){let e="";if(Qt(t))e=t;else if(et(t))for(let n=0;n<t.length;n++){const i=it(t[n]);i&&(e+=i+" ")}else if(Nt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const jv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Yv=id(jv);function Tp(t){return!!t||t===""}function Kv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=ra(t[i],e[i]);return n}function ra(t,e){if(t===e)return!0;let n=Jd(t),i=Jd(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Pi(t),i=Pi(e),n||i)return t===e;if(n=et(t),i=et(e),n||i)return n&&i?Kv(t,e):!1;if(n=Nt(t),i=Nt(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ra(t[o],e[o]))return!1}}return String(t)===String(e)}function ad(t,e){return t.findIndex(n=>ra(n,e))}const Ap=t=>!!(t&&t.__v_isRef===!0),pt=t=>Qt(t)?t:t==null?"":et(t)||Nt(t)&&(t.toString===Sp||!ut(t.toString))?Ap(t)?pt(t.value):JSON.stringify(t,Cp,2):String(t),Cp=(t,e)=>Ap(e)?Cp(t,e.value):Lr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[nc(i,r)+" =>"]=s,n),{})}:lo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>nc(n))}:Pi(e)?nc(e):Nt(e)&&!et(e)&&!Mp(e)?String(e):e,nc=(t,e="")=>{var n;return Pi(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Hn;class Rp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Hn,!e&&Hn&&(this.index=(Hn.scopes||(Hn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Hn;try{return Hn=this,e()}finally{Hn=n}}}on(){Hn=this}off(){Hn=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Zv(t){return new Rp(t)}function Qv(){return Hn}let Ot;const ic=new WeakSet;class Pp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Hn&&Hn.active&&Hn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ic.has(this)&&(ic.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Lp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,tf(this),Ip(this);const e=Ot,n=fi;Ot=this,fi=!0;try{return this.fn()}finally{Up(this),Ot=e,fi=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ud(e);this.deps=this.depsTail=void 0,tf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ic.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Kc(this)&&this.run()}get dirty(){return Kc(this)}}let Dp=0,Oo,No;function Lp(t,e=!1){if(t.flags|=8,e){t.next=No,No=t;return}t.next=Oo,Oo=t}function ld(){Dp++}function cd(){if(--Dp>0)return;if(No){let e=No;for(No=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Oo;){let e=Oo;for(Oo=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Ip(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Up(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),ud(i),Jv(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function Kc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Op(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Op(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Vo))return;t.globalVersion=Vo;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Kc(t)){t.flags&=-3;return}const n=Ot,i=fi;Ot=t,fi=!0;try{Ip(t);const s=t.fn(t._value);(e.version===0||Ss(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ot=n,fi=i,Up(t),t.flags&=-3}}function ud(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)ud(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Jv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let fi=!0;const Np=[];function Rs(){Np.push(fi),fi=!1}function Ps(){const t=Np.pop();fi=t===void 0?!0:t}function tf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ot;Ot=void 0;try{e()}finally{Ot=n}}}let Vo=0;class e_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class dd{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ot||!fi||Ot===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ot)n=this.activeLink=new e_(Ot,this),Ot.deps?(n.prevDep=Ot.depsTail,Ot.depsTail.nextDep=n,Ot.depsTail=n):Ot.deps=Ot.depsTail=n,Fp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Ot.depsTail,n.nextDep=void 0,Ot.depsTail.nextDep=n,Ot.depsTail=n,Ot.deps===n&&(Ot.deps=i)}return n}trigger(e){this.version++,Vo++,this.notify(e)}notify(e){ld();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{cd()}}}function Fp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Fp(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Zc=new WeakMap,Js=Symbol(""),Qc=Symbol(""),Go=Symbol("");function fn(t,e,n){if(fi&&Ot){let i=Zc.get(t);i||Zc.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new dd),s.map=i,s.key=n),s.track()}}function Xi(t,e,n,i,s,r){const o=Zc.get(t);if(!o){Vo++;return}const a=l=>{l&&l.trigger()};if(ld(),e==="clear")o.forEach(a);else{const l=et(t),c=l&&od(n);if(l&&n==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===Go||!Pi(f)&&f>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Go)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Js)),Lr(t)&&a(o.get(Qc)));break;case"delete":l||(a(o.get(Js)),Lr(t)&&a(o.get(Qc)));break;case"set":Lr(t)&&a(o.get(Js));break}}cd()}function fr(t){const e=At(t);return e===t?e:(fn(e,"iterate",Go),ei(t)?e:e.map(hn))}function Nl(t){return fn(t=At(t),"iterate",Go),t}const t_={__proto__:null,[Symbol.iterator](){return sc(this,Symbol.iterator,hn)},concat(...t){return fr(this).concat(...t.map(e=>et(e)?fr(e):e))},entries(){return sc(this,"entries",t=>(t[1]=hn(t[1]),t))},every(t,e){return Oi(this,"every",t,e,void 0,arguments)},filter(t,e){return Oi(this,"filter",t,e,n=>n.map(hn),arguments)},find(t,e){return Oi(this,"find",t,e,hn,arguments)},findIndex(t,e){return Oi(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Oi(this,"findLast",t,e,hn,arguments)},findLastIndex(t,e){return Oi(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Oi(this,"forEach",t,e,void 0,arguments)},includes(...t){return rc(this,"includes",t)},indexOf(...t){return rc(this,"indexOf",t)},join(t){return fr(this).join(t)},lastIndexOf(...t){return rc(this,"lastIndexOf",t)},map(t,e){return Oi(this,"map",t,e,void 0,arguments)},pop(){return vo(this,"pop")},push(...t){return vo(this,"push",t)},reduce(t,...e){return nf(this,"reduce",t,e)},reduceRight(t,...e){return nf(this,"reduceRight",t,e)},shift(){return vo(this,"shift")},some(t,e){return Oi(this,"some",t,e,void 0,arguments)},splice(...t){return vo(this,"splice",t)},toReversed(){return fr(this).toReversed()},toSorted(t){return fr(this).toSorted(t)},toSpliced(...t){return fr(this).toSpliced(...t)},unshift(...t){return vo(this,"unshift",t)},values(){return sc(this,"values",hn)}};function sc(t,e,n){const i=Nl(t),s=i[e]();return i!==t&&!ei(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=n(r.value)),r}),s}const n_=Array.prototype;function Oi(t,e,n,i,s,r){const o=Nl(t),a=o!==t&&!ei(t),l=o[e];if(l!==n_[e]){const d=l.apply(t,r);return a?hn(d):d}let c=n;o!==t&&(a?c=function(d,f){return n.call(this,hn(d),f,t)}:n.length>2&&(c=function(d,f){return n.call(this,d,f,t)}));const u=l.call(o,c,i);return a&&s?s(u):u}function nf(t,e,n,i){const s=Nl(t);let r=n;return s!==t&&(ei(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,hn(a),l,t)}),s[e](r,...i)}function rc(t,e,n){const i=At(t);fn(i,"iterate",Go);const s=i[e](...n);return(s===-1||s===!1)&&pd(n[0])?(n[0]=At(n[0]),i[e](...n)):s}function vo(t,e,n=[]){Rs(),ld();const i=At(t)[e].apply(t,n);return cd(),Ps(),i}const i_=id("__proto__,__v_isRef,__isVue"),kp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Pi));function s_(t){Pi(t)||(t=String(t));const e=At(this);return fn(e,"has",t),e.hasOwnProperty(t)}class Bp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?p_:Gp:r?Vp:Hp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=et(e);if(!s){let l;if(o&&(l=t_[n]))return l;if(n==="hasOwnProperty")return s_}const a=Reflect.get(e,n,on(e)?e:i);return(Pi(n)?kp.has(n):i_(n))||(s||fn(e,"get",n),r)?a:on(a)?o&&od(n)?a:a.value:Nt(a)?s?$p(a):oa(a):a}}class zp extends Bp{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(!this._isShallow){const l=tr(r);if(!ei(i)&&!tr(i)&&(r=At(r),i=At(i)),!et(e)&&on(r)&&!on(i))return l?!1:(r.value=i,!0)}const o=et(e)&&od(n)?Number(n)<e.length:Ct(e,n),a=Reflect.set(e,n,i,on(e)?e:s);return e===At(s)&&(o?Ss(i,r)&&Xi(e,"set",n,i):Xi(e,"add",n,i)),a}deleteProperty(e,n){const i=Ct(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Xi(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!Pi(n)||!kp.has(n))&&fn(e,"has",n),i}ownKeys(e){return fn(e,"iterate",et(e)?"length":Js),Reflect.ownKeys(e)}}class r_ extends Bp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const o_=new zp,a_=new r_,l_=new zp(!0);const Jc=t=>t,Ma=t=>Reflect.getPrototypeOf(t);function c_(t,e,n){return function(...i){const s=this.__v_raw,r=At(s),o=Lr(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?Jc:e?eu:hn;return!e&&fn(r,"iterate",l?Qc:Js),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function Ea(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function u_(t,e){const n={get(s){const r=this.__v_raw,o=At(r),a=At(s);t||(Ss(s,a)&&fn(o,"get",s),fn(o,"get",a));const{has:l}=Ma(o),c=e?Jc:t?eu:hn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&fn(At(s),"iterate",Js),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=At(r),a=At(s);return t||(Ss(s,a)&&fn(o,"has",s),fn(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=At(a),c=e?Jc:t?eu:hn;return!t&&fn(l,"iterate",Js),a.forEach((u,d)=>s.call(r,c(u),c(d),o))}};return vn(n,t?{add:Ea("add"),set:Ea("set"),delete:Ea("delete"),clear:Ea("clear")}:{add(s){!e&&!ei(s)&&!tr(s)&&(s=At(s));const r=At(this);return Ma(r).has.call(r,s)||(r.add(s),Xi(r,"add",s,s)),this},set(s,r){!e&&!ei(r)&&!tr(r)&&(r=At(r));const o=At(this),{has:a,get:l}=Ma(o);let c=a.call(o,s);c||(s=At(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Ss(r,u)&&Xi(o,"set",s,r):Xi(o,"add",s,r),this},delete(s){const r=At(this),{has:o,get:a}=Ma(r);let l=o.call(r,s);l||(s=At(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Xi(r,"delete",s,void 0),c},clear(){const s=At(this),r=s.size!==0,o=s.clear();return r&&Xi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=c_(s,t,e)}),n}function fd(t,e){const n=u_(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(Ct(n,s)&&s in i?n:i,s,r)}const d_={get:fd(!1,!1)},f_={get:fd(!1,!0)},h_={get:fd(!0,!1)};const Hp=new WeakMap,Vp=new WeakMap,Gp=new WeakMap,p_=new WeakMap;function m_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function g_(t){return t.__v_skip||!Object.isExtensible(t)?0:m_(Hv(t))}function oa(t){return tr(t)?t:hd(t,!1,o_,d_,Hp)}function Wp(t){return hd(t,!1,l_,f_,Vp)}function $p(t){return hd(t,!0,a_,h_,Gp)}function hd(t,e,n,i,s){if(!Nt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=g_(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Ir(t){return tr(t)?Ir(t.__v_raw):!!(t&&t.__v_isReactive)}function tr(t){return!!(t&&t.__v_isReadonly)}function ei(t){return!!(t&&t.__v_isShallow)}function pd(t){return t?!!t.__v_raw:!1}function At(t){const e=t&&t.__v_raw;return e?At(e):t}function Xp(t){return!Ct(t,"__v_skip")&&Object.isExtensible(t)&&Ep(t,"__v_skip",!0),t}const hn=t=>Nt(t)?oa(t):t,eu=t=>Nt(t)?$p(t):t;function on(t){return t?t.__v_isRef===!0:!1}function lt(t){return qp(t,!1)}function v_(t){return qp(t,!0)}function qp(t,e){return on(t)?t:new __(t,e)}class __{constructor(e,n){this.dep=new dd,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:At(e),this._value=n?e:hn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||ei(e)||tr(e);e=i?e:At(e),Ss(e,n)&&(this._rawValue=e,this._value=i?e:hn(e),this.dep.trigger())}}function Ms(t){return on(t)?t.value:t}const x_={get:(t,e,n)=>e==="__v_raw"?t:Ms(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return on(s)&&!on(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function jp(t){return Ir(t)?t:new Proxy(t,x_)}class y_{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new dd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Vo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ot!==this)return Lp(this,!0),!0}get value(){const e=this.dep.track();return Op(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function b_(t,e,n=!1){let i,s;return ut(t)?i=t:(i=t.get,s=t.set),new y_(i,s,n)}const Ta={},dl=new WeakMap;let Vs;function w_(t,e=!1,n=Vs){if(n){let i=dl.get(n);i||dl.set(n,i=[]),i.push(t)}}function S_(t,e,n=Ut){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=w=>s?w:ei(w)||s===!1||s===0?qi(w,1):qi(w);let u,d,f,h,v=!1,_=!1;if(on(t)?(d=()=>t.value,v=ei(t)):Ir(t)?(d=()=>c(t),v=!0):et(t)?(_=!0,v=t.some(w=>Ir(w)||ei(w)),d=()=>t.map(w=>{if(on(w))return w.value;if(Ir(w))return c(w);if(ut(w))return l?l(w,2):w()})):ut(t)?e?d=l?()=>l(t,2):t:d=()=>{if(f){Rs();try{f()}finally{Ps()}}const w=Vs;Vs=u;try{return l?l(t,3,[h]):t(h)}finally{Vs=w}}:d=Ai,e&&s){const w=d,U=s===!0?1/0:s;d=()=>qi(w(),U)}const m=Qv(),p=()=>{u.stop(),m&&m.active&&rd(m.effects,u)};if(r&&e){const w=e;e=(...U)=>{w(...U),p()}}let C=_?new Array(t.length).fill(Ta):Ta;const A=w=>{if(!(!(u.flags&1)||!u.dirty&&!w))if(e){const U=u.run();if(s||v||(_?U.some((L,D)=>Ss(L,C[D])):Ss(U,C))){f&&f();const L=Vs;Vs=u;try{const D=[U,C===Ta?void 0:_&&C[0]===Ta?[]:C,h];l?l(e,3,D):e(...D),C=U}finally{Vs=L}}}else u.run()};return a&&a(A),u=new Pp(d),u.scheduler=o?()=>o(A,!1):A,h=w=>w_(w,!1,u),f=u.onStop=()=>{const w=dl.get(u);if(w){if(l)l(w,4);else for(const U of w)U();dl.delete(u)}},e?i?A(!0):C=u.run():o?o(A.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function qi(t,e=1/0,n){if(e<=0||!Nt(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,on(t))qi(t.value,e,n);else if(et(t))for(let i=0;i<t.length;i++)qi(t[i],e,n);else if(lo(t)||Lr(t))t.forEach(i=>{qi(i,e,n)});else if(Mp(t)){for(const i in t)qi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&qi(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function aa(t,e,n,i){try{return i?t(...i):t()}catch(s){Fl(s,e,n)}}function Di(t,e,n,i){if(ut(t)){const s=aa(t,e,n,i);return s&&wp(s)&&s.catch(r=>{Fl(r,e,n)}),s}if(et(t)){const s=[];for(let r=0;r<t.length;r++)s.push(Di(t[r],e,n,i));return s}}function Fl(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ut;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}a=a.parent}if(r){Rs(),aa(r,null,10,[t,l,c]),Ps();return}}M_(t,n,s,i,o)}function M_(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const En=[];let _i=-1;const Ur=[];let us=null,Ar=0;const Yp=Promise.resolve();let fl=null;function la(t){const e=fl||Yp;return t?e.then(this?t.bind(this):t):e}function E_(t){let e=_i+1,n=En.length;for(;e<n;){const i=e+n>>>1,s=En[i],r=Wo(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function md(t){if(!(t.flags&1)){const e=Wo(t),n=En[En.length-1];!n||!(t.flags&2)&&e>=Wo(n)?En.push(t):En.splice(E_(e),0,t),t.flags|=1,Kp()}}function Kp(){fl||(fl=Yp.then(Qp))}function T_(t){et(t)?Ur.push(...t):us&&t.id===-1?us.splice(Ar+1,0,t):t.flags&1||(Ur.push(t),t.flags|=1),Kp()}function sf(t,e,n=_i+1){for(;n<En.length;n++){const i=En[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;En.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Zp(t){if(Ur.length){const e=[...new Set(Ur)].sort((n,i)=>Wo(n)-Wo(i));if(Ur.length=0,us){us.push(...e);return}for(us=e,Ar=0;Ar<us.length;Ar++){const n=us[Ar];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}us=null,Ar=0}}const Wo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Qp(t){try{for(_i=0;_i<En.length;_i++){const e=En[_i];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),aa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;_i<En.length;_i++){const e=En[_i];e&&(e.flags&=-2)}_i=-1,En.length=0,Zp(),fl=null,(En.length||Ur.length)&&Qp()}}let Wn=null,Jp=null;function hl(t){const e=Wn;return Wn=t,Jp=t&&t.type.__scopeId||null,e}function Ro(t,e=Wn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&pf(-1);const r=hl(e);let o;try{o=t(...s)}finally{hl(r),i._d&&pf(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Zt(t,e){if(Wn===null)return t;const n=Hl(Wn),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Ut]=e[s];r&&(ut(r)&&(r={mounted:r,updated:r}),r.deep&&qi(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Is(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Rs(),Di(l,n,8,[t.el,a,t,e]),Ps())}}const A_=Symbol("_vte"),C_=t=>t.__isTeleport;function gd(t,e){t.shapeFlag&6&&t.component?(t.transition=e,gd(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function em(t,e){return ut(t)?vn({name:t.name},e,{setup:t}):t}function tm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function pl(t,e,n,i,s=!1){if(et(t)){t.forEach((v,_)=>pl(v,e&&(et(e)?e[_]:e),n,i,s));return}if(Fo(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&pl(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?Hl(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ut?a.refs={}:a.refs,d=a.setupState,f=At(d),h=d===Ut?()=>!1:v=>Ct(f,v);if(c!=null&&c!==l&&(Qt(c)?(u[c]=null,h(c)&&(d[c]=null)):on(c)&&(c.value=null)),ut(l))aa(l,a,12,[o,u]);else{const v=Qt(l),_=on(l);if(v||_){const m=()=>{if(t.f){const p=v?h(l)?d[l]:u[l]:l.value;s?et(p)&&rd(p,r):et(p)?p.includes(r)||p.push(r):v?(u[l]=[r],h(l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else v?(u[l]=o,h(l)&&(d[l]=o)):_&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,zn(m,n)):m()}}}Ol().requestIdleCallback;Ol().cancelIdleCallback;const Fo=t=>!!t.type.__asyncLoader,nm=t=>t.type.__isKeepAlive;function R_(t,e){im(t,"a",e)}function P_(t,e){im(t,"da",e)}function im(t,e,n=pn){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(kl(e,i,n),n){let s=n.parent;for(;s&&s.parent;)nm(s.parent.vnode)&&D_(i,e,n,s),s=s.parent}}function D_(t,e,n,i){const s=kl(e,t,i,!0);_d(()=>{rd(i[e],s)},n)}function kl(t,e,n=pn,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Rs();const a=ca(n),l=Di(e,n,t,o);return a(),Ps(),l});return i?s.unshift(r):s.push(r),r}}const es=t=>(e,n=pn)=>{(!Xo||t==="sp")&&kl(t,(...i)=>e(...i),n)},L_=es("bm"),co=es("m"),I_=es("bu"),U_=es("u"),vd=es("bum"),_d=es("um"),O_=es("sp"),N_=es("rtg"),F_=es("rtc");function k_(t,e=pn){kl("ec",t,e)}const B_="components";function z_(t,e){return V_(B_,t,!0,e)||t}const H_=Symbol.for("v-ndc");function V_(t,e,n=!0,i=!1){const s=Wn||pn;if(s){const r=s.type;{const a=C0(r,!1);if(a&&(a===e||a===ti(e)||a===Ul(ti(e))))return r}const o=rf(s[t]||r[t],e)||rf(s.appContext[t],e);return!o&&i?r:o}}function rf(t,e){return t&&(t[e]||t[ti(e)]||t[Ul(ti(e))])}function Mn(t,e,n,i){let s;const r=n,o=et(t);if(o||Qt(t)){const a=o&&Ir(t);let l=!1;a&&(l=!ei(t),t=Nl(t)),s=new Array(t.length);for(let c=0,u=t.length;c<u;c++)s[c]=e(l?hn(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(Nt(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,r)}}else s=[];return s}const tu=t=>t?Em(t)?Hl(t):tu(t.parent):null,ko=vn(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>tu(t.parent),$root:t=>tu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>rm(t),$forceUpdate:t=>t.f||(t.f=()=>{md(t.update)}),$nextTick:t=>t.n||(t.n=la.bind(t.proxy)),$watch:t=>c0.bind(t)}),oc=(t,e)=>t!==Ut&&!t.__isScriptSetup&&Ct(t,e),G_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(oc(i,e))return o[e]=1,i[e];if(s!==Ut&&Ct(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&Ct(c,e))return o[e]=3,r[e];if(n!==Ut&&Ct(n,e))return o[e]=4,n[e];nu&&(o[e]=0)}}const u=ko[e];let d,f;if(u)return e==="$attrs"&&fn(t.attrs,"get",""),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Ut&&Ct(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,Ct(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return oc(s,e)?(s[e]=n,!0):i!==Ut&&Ct(i,e)?(i[e]=n,!0):Ct(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==Ut&&Ct(t,o)||oc(e,o)||(a=r[0])&&Ct(a,o)||Ct(i,o)||Ct(ko,o)||Ct(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ct(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function of(t){return et(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let nu=!0;function W_(t){const e=rm(t),n=t.proxy,i=t.ctx;nu=!1,e.beforeCreate&&af(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:v,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:C,destroyed:A,unmounted:w,render:U,renderTracked:L,renderTriggered:D,errorCaptured:I,serverPrefetch:b,expose:M,inheritAttrs:R,components:q,directives:j,filters:J}=e;if(c&&$_(c,i,null),o)for(const ue in o){const X=o[ue];ut(X)&&(i[ue]=X.bind(n))}if(s){const ue=s.call(n,n);Nt(ue)&&(t.data=oa(ue))}if(nu=!0,r)for(const ue in r){const X=r[ue],be=ut(X)?X.bind(n,n):ut(X.get)?X.get.bind(n,n):Ai,Te=!ut(X)&&ut(X.set)?X.set.bind(n):Ai,Ne=mn({get:be,set:Te});Object.defineProperty(i,ue,{enumerable:!0,configurable:!0,get:()=>Ne.value,set:We=>Ne.value=We})}if(a)for(const ue in a)sm(a[ue],i,n,ue);if(l){const ue=ut(l)?l.call(n):l;Reflect.ownKeys(ue).forEach(X=>{Ja(X,ue[X])})}u&&af(u,t,"c");function G(ue,X){et(X)?X.forEach(be=>ue(be.bind(n))):X&&ue(X.bind(n))}if(G(L_,d),G(co,f),G(I_,h),G(U_,v),G(R_,_),G(P_,m),G(k_,I),G(F_,L),G(N_,D),G(vd,C),G(_d,w),G(O_,b),et(M))if(M.length){const ue=t.exposed||(t.exposed={});M.forEach(X=>{Object.defineProperty(ue,X,{get:()=>n[X],set:be=>n[X]=be})})}else t.exposed||(t.exposed={});U&&t.render===Ai&&(t.render=U),R!=null&&(t.inheritAttrs=R),q&&(t.components=q),j&&(t.directives=j),b&&tm(t)}function $_(t,e,n=Ai){et(t)&&(t=iu(t));for(const i in t){const s=t[i];let r;Nt(s)?"default"in s?r=Ki(s.from||i,s.default,!0):r=Ki(s.from||i):r=Ki(s),on(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function af(t,e,n){Di(et(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function sm(t,e,n,i){let s=i.includes(".")?xm(n,i):()=>n[i];if(Qt(t)){const r=e[t];ut(r)&&hi(s,r)}else if(ut(t))hi(s,t.bind(n));else if(Nt(t))if(et(t))t.forEach(r=>sm(r,e,n,i));else{const r=ut(t.handler)?t.handler.bind(n):e[t.handler];ut(r)&&hi(s,r,t)}}function rm(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>ml(l,c,o,!0)),ml(l,e,o)),Nt(e)&&r.set(e,l),l}function ml(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&ml(t,r,n,!0),s&&s.forEach(o=>ml(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=X_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const X_={data:lf,props:cf,emits:cf,methods:Po,computed:Po,beforeCreate:bn,created:bn,beforeMount:bn,mounted:bn,beforeUpdate:bn,updated:bn,beforeDestroy:bn,beforeUnmount:bn,destroyed:bn,unmounted:bn,activated:bn,deactivated:bn,errorCaptured:bn,serverPrefetch:bn,components:Po,directives:Po,watch:j_,provide:lf,inject:q_};function lf(t,e){return e?t?function(){return vn(ut(t)?t.call(this,this):t,ut(e)?e.call(this,this):e)}:e:t}function q_(t,e){return Po(iu(t),iu(e))}function iu(t){if(et(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function bn(t,e){return t?[...new Set([].concat(t,e))]:e}function Po(t,e){return t?vn(Object.create(null),t,e):e}function cf(t,e){return t?et(t)&&et(e)?[...new Set([...t,...e])]:vn(Object.create(null),of(t),of(e??{})):e}function j_(t,e){if(!t)return e;if(!e)return t;const n=vn(Object.create(null),t);for(const i in e)n[i]=bn(t[i],e[i]);return n}function om(){return{app:null,config:{isNativeTag:Bv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Y_=0;function K_(t,e){return function(i,s=null){ut(i)||(i=vn({},i)),s!=null&&!Nt(s)&&(s=null);const r=om(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Y_++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:P0,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&ut(u.install)?(o.add(u),u.install(c,...d)):ut(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||tn(i,s);return h.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),t(h,u,f),l=!0,c._container=u,u.__vue_app__=c,Hl(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Di(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=Or;Or=c;try{return u()}finally{Or=d}}};return c}}let Or=null;function Ja(t,e){if(pn){let n=pn.provides;const i=pn.parent&&pn.parent.provides;i===n&&(n=pn.provides=Object.create(i)),n[t]=e}}function Ki(t,e,n=!1){const i=pn||Wn;if(i||Or){const s=Or?Or._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ut(e)?e.call(i&&i.proxy):e}}const am={},lm=()=>Object.create(am),cm=t=>Object.getPrototypeOf(t)===am;function Z_(t,e,n,i=!1){const s={},r=lm();t.propsDefaults=Object.create(null),um(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Wp(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function Q_(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=At(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Bl(t.emitsOptions,f))continue;const h=e[f];if(l)if(Ct(r,f))h!==r[f]&&(r[f]=h,c=!0);else{const v=ti(f);s[v]=su(l,a,v,h,t,!1)}else h!==r[f]&&(r[f]=h,c=!0)}}}else{um(t,e,s,r)&&(c=!0);let u;for(const d in a)(!e||!Ct(e,d)&&((u=ar(d))===d||!Ct(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=su(l,a,d,void 0,t,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!Ct(e,d))&&(delete r[d],c=!0)}c&&Xi(t.attrs,"set","")}function um(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Uo(l))continue;const c=e[l];let u;s&&Ct(s,u=ti(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Bl(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=At(n),c=a||Ut;for(let u=0;u<r.length;u++){const d=r[u];n[d]=su(s,l,d,c[d],t,!Ct(c,d))}}return o}function su(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=Ct(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ut(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=ca(s);i=c[n]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ar(n))&&(i=!0))}return i}const J_=new WeakMap;function dm(t,e,n=!1){const i=n?J_:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!ut(t)){const u=d=>{l=!0;const[f,h]=dm(d,e,!0);vn(o,f),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Nt(t)&&i.set(t,Dr),Dr;if(et(r))for(let u=0;u<r.length;u++){const d=ti(r[u]);uf(d)&&(o[d]=Ut)}else if(r)for(const u in r){const d=ti(u);if(uf(d)){const f=r[u],h=o[d]=et(f)||ut(f)?{type:f}:vn({},f),v=h.type;let _=!1,m=!0;if(et(v))for(let p=0;p<v.length;++p){const C=v[p],A=ut(C)&&C.name;if(A==="Boolean"){_=!0;break}else A==="String"&&(m=!1)}else _=ut(v)&&v.name==="Boolean";h[0]=_,h[1]=m,(_||Ct(h,"default"))&&a.push(d)}}const c=[o,a];return Nt(t)&&i.set(t,c),c}function uf(t){return t[0]!=="$"&&!Uo(t)}const fm=t=>t[0]==="_"||t==="$stable",xd=t=>et(t)?t.map(Si):[Si(t)],e0=(t,e,n)=>{if(e._n)return e;const i=Ro((...s)=>xd(e(...s)),n);return i._c=!1,i},hm=(t,e,n)=>{const i=t._ctx;for(const s in t){if(fm(s))continue;const r=t[s];if(ut(r))e[s]=e0(s,r,i);else if(r!=null){const o=xd(r);e[s]=()=>o}}},pm=(t,e)=>{const n=xd(e);t.slots.default=()=>n},mm=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},t0=(t,e,n)=>{const i=t.slots=lm();if(t.vnode.shapeFlag&32){const s=e._;s?(mm(i,e,n),n&&Ep(i,"_",s,!0)):hm(e,i)}else e&&pm(t,e)},n0=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Ut;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:mm(s,e,n):(r=!e.$stable,hm(e,s)),o=e}else e&&(pm(t,e),o={default:1});if(r)for(const a in s)!fm(a)&&o[a]==null&&delete s[a]},zn=g0;function i0(t){return s0(t)}function s0(t,e){const n=Ol();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=Ai,insertStaticContent:v}=t,_=(P,g,B,$=null,ee=null,W=null,ge=void 0,Q=null,ce=!!g.dynamicChildren)=>{if(P===g)return;P&&!_o(P,g)&&($=F(P),We(P,ee,W,!0),P=null),g.patchFlag===-2&&(ce=!1,g.dynamicChildren=null);const{type:fe,ref:Pe,shapeFlag:E}=g;switch(fe){case zl:m(P,g,B,$);break;case nr:p(P,g,B,$);break;case el:P==null&&C(g,B,$,ge);break;case Bt:q(P,g,B,$,ee,W,ge,Q,ce);break;default:E&1?U(P,g,B,$,ee,W,ge,Q,ce):E&6?j(P,g,B,$,ee,W,ge,Q,ce):(E&64||E&128)&&fe.process(P,g,B,$,ee,W,ge,Q,ce,me)}Pe!=null&&ee&&pl(Pe,P&&P.ref,W,g||P,!g)},m=(P,g,B,$)=>{if(P==null)i(g.el=a(g.children),B,$);else{const ee=g.el=P.el;g.children!==P.children&&c(ee,g.children)}},p=(P,g,B,$)=>{P==null?i(g.el=l(g.children||""),B,$):g.el=P.el},C=(P,g,B,$)=>{[P.el,P.anchor]=v(P.children,g,B,$,P.el,P.anchor)},A=({el:P,anchor:g},B,$)=>{let ee;for(;P&&P!==g;)ee=f(P),i(P,B,$),P=ee;i(g,B,$)},w=({el:P,anchor:g})=>{let B;for(;P&&P!==g;)B=f(P),s(P),P=B;s(g)},U=(P,g,B,$,ee,W,ge,Q,ce)=>{g.type==="svg"?ge="svg":g.type==="math"&&(ge="mathml"),P==null?L(g,B,$,ee,W,ge,Q,ce):b(P,g,ee,W,ge,Q,ce)},L=(P,g,B,$,ee,W,ge,Q)=>{let ce,fe;const{props:Pe,shapeFlag:E,transition:x,dirs:N}=P;if(ce=P.el=o(P.type,W,Pe&&Pe.is,Pe),E&8?u(ce,P.children):E&16&&I(P.children,ce,null,$,ee,ac(P,W),ge,Q),N&&Is(P,null,$,"created"),D(ce,P,P.scopeId,ge,$),Pe){for(const ae in Pe)ae!=="value"&&!Uo(ae)&&r(ce,ae,null,Pe[ae],W,$);"value"in Pe&&r(ce,"value",null,Pe.value,W),(fe=Pe.onVnodeBeforeMount)&&gi(fe,$,P)}N&&Is(P,null,$,"beforeMount");const K=r0(ee,x);K&&x.beforeEnter(ce),i(ce,g,B),((fe=Pe&&Pe.onVnodeMounted)||K||N)&&zn(()=>{fe&&gi(fe,$,P),K&&x.enter(ce),N&&Is(P,null,$,"mounted")},ee)},D=(P,g,B,$,ee)=>{if(B&&h(P,B),$)for(let W=0;W<$.length;W++)h(P,$[W]);if(ee){let W=ee.subTree;if(g===W||bm(W.type)&&(W.ssContent===g||W.ssFallback===g)){const ge=ee.vnode;D(P,ge,ge.scopeId,ge.slotScopeIds,ee.parent)}}},I=(P,g,B,$,ee,W,ge,Q,ce=0)=>{for(let fe=ce;fe<P.length;fe++){const Pe=P[fe]=Q?ds(P[fe]):Si(P[fe]);_(null,Pe,g,B,$,ee,W,ge,Q)}},b=(P,g,B,$,ee,W,ge)=>{const Q=g.el=P.el;let{patchFlag:ce,dynamicChildren:fe,dirs:Pe}=g;ce|=P.patchFlag&16;const E=P.props||Ut,x=g.props||Ut;let N;if(B&&Us(B,!1),(N=x.onVnodeBeforeUpdate)&&gi(N,B,g,P),Pe&&Is(g,P,B,"beforeUpdate"),B&&Us(B,!0),(E.innerHTML&&x.innerHTML==null||E.textContent&&x.textContent==null)&&u(Q,""),fe?M(P.dynamicChildren,fe,Q,B,$,ac(g,ee),W):ge||X(P,g,Q,null,B,$,ac(g,ee),W,!1),ce>0){if(ce&16)R(Q,E,x,B,ee);else if(ce&2&&E.class!==x.class&&r(Q,"class",null,x.class,ee),ce&4&&r(Q,"style",E.style,x.style,ee),ce&8){const K=g.dynamicProps;for(let ae=0;ae<K.length;ae++){const Y=K[ae],Le=E[Y],ve=x[Y];(ve!==Le||Y==="value")&&r(Q,Y,Le,ve,ee,B)}}ce&1&&P.children!==g.children&&u(Q,g.children)}else!ge&&fe==null&&R(Q,E,x,B,ee);((N=x.onVnodeUpdated)||Pe)&&zn(()=>{N&&gi(N,B,g,P),Pe&&Is(g,P,B,"updated")},$)},M=(P,g,B,$,ee,W,ge)=>{for(let Q=0;Q<g.length;Q++){const ce=P[Q],fe=g[Q],Pe=ce.el&&(ce.type===Bt||!_o(ce,fe)||ce.shapeFlag&70)?d(ce.el):B;_(ce,fe,Pe,null,$,ee,W,ge,!0)}},R=(P,g,B,$,ee)=>{if(g!==B){if(g!==Ut)for(const W in g)!Uo(W)&&!(W in B)&&r(P,W,g[W],null,ee,$);for(const W in B){if(Uo(W))continue;const ge=B[W],Q=g[W];ge!==Q&&W!=="value"&&r(P,W,Q,ge,ee,$)}"value"in B&&r(P,"value",g.value,B.value,ee)}},q=(P,g,B,$,ee,W,ge,Q,ce)=>{const fe=g.el=P?P.el:a(""),Pe=g.anchor=P?P.anchor:a("");let{patchFlag:E,dynamicChildren:x,slotScopeIds:N}=g;N&&(Q=Q?Q.concat(N):N),P==null?(i(fe,B,$),i(Pe,B,$),I(g.children||[],B,Pe,ee,W,ge,Q,ce)):E>0&&E&64&&x&&P.dynamicChildren?(M(P.dynamicChildren,x,B,ee,W,ge,Q),(g.key!=null||ee&&g===ee.subTree)&&gm(P,g,!0)):X(P,g,B,Pe,ee,W,ge,Q,ce)},j=(P,g,B,$,ee,W,ge,Q,ce)=>{g.slotScopeIds=Q,P==null?g.shapeFlag&512?ee.ctx.activate(g,B,$,ge,ce):J(g,B,$,ee,W,ge,ce):le(P,g,ce)},J=(P,g,B,$,ee,W,ge)=>{const Q=P.component=S0(P,$,ee);if(nm(P)&&(Q.ctx.renderer=me),M0(Q,!1,ge),Q.asyncDep){if(ee&&ee.registerDep(Q,G,ge),!P.el){const ce=Q.subTree=tn(nr);p(null,ce,g,B)}}else G(Q,P,g,B,ee,W,ge)},le=(P,g,B)=>{const $=g.component=P.component;if(p0(P,g,B))if($.asyncDep&&!$.asyncResolved){ue($,g,B);return}else $.next=g,$.update();else g.el=P.el,$.vnode=g},G=(P,g,B,$,ee,W,ge)=>{const Q=()=>{if(P.isMounted){let{next:E,bu:x,u:N,parent:K,vnode:ae}=P;{const Ue=vm(P);if(Ue){E&&(E.el=ae.el,ue(P,E,ge)),Ue.asyncDep.then(()=>{P.isUnmounted||Q()});return}}let Y=E,Le;Us(P,!1),E?(E.el=ae.el,ue(P,E,ge)):E=ae,x&&Qa(x),(Le=E.props&&E.props.onVnodeBeforeUpdate)&&gi(Le,K,E,ae),Us(P,!0);const ve=ff(P),Ie=P.subTree;P.subTree=ve,_(Ie,ve,d(Ie.el),F(Ie),P,ee,W),E.el=ve.el,Y===null&&m0(P,ve.el),N&&zn(N,ee),(Le=E.props&&E.props.onVnodeUpdated)&&zn(()=>gi(Le,K,E,ae),ee)}else{let E;const{el:x,props:N}=g,{bm:K,m:ae,parent:Y,root:Le,type:ve}=P,Ie=Fo(g);Us(P,!1),K&&Qa(K),!Ie&&(E=N&&N.onVnodeBeforeMount)&&gi(E,Y,g),Us(P,!0);{Le.ce&&Le.ce._injectChildStyle(ve);const Ue=P.subTree=ff(P);_(null,Ue,B,$,P,ee,W),g.el=Ue.el}if(ae&&zn(ae,ee),!Ie&&(E=N&&N.onVnodeMounted)){const Ue=g;zn(()=>gi(E,Y,Ue),ee)}(g.shapeFlag&256||Y&&Fo(Y.vnode)&&Y.vnode.shapeFlag&256)&&P.a&&zn(P.a,ee),P.isMounted=!0,g=B=$=null}};P.scope.on();const ce=P.effect=new Pp(Q);P.scope.off();const fe=P.update=ce.run.bind(ce),Pe=P.job=ce.runIfDirty.bind(ce);Pe.i=P,Pe.id=P.uid,ce.scheduler=()=>md(Pe),Us(P,!0),fe()},ue=(P,g,B)=>{g.component=P;const $=P.vnode.props;P.vnode=g,P.next=null,Q_(P,g.props,$,B),n0(P,g.children,B),Rs(),sf(P),Ps()},X=(P,g,B,$,ee,W,ge,Q,ce=!1)=>{const fe=P&&P.children,Pe=P?P.shapeFlag:0,E=g.children,{patchFlag:x,shapeFlag:N}=g;if(x>0){if(x&128){Te(fe,E,B,$,ee,W,ge,Q,ce);return}else if(x&256){be(fe,E,B,$,ee,W,ge,Q,ce);return}}N&8?(Pe&16&&we(fe,ee,W),E!==fe&&u(B,E)):Pe&16?N&16?Te(fe,E,B,$,ee,W,ge,Q,ce):we(fe,ee,W,!0):(Pe&8&&u(B,""),N&16&&I(E,B,$,ee,W,ge,Q,ce))},be=(P,g,B,$,ee,W,ge,Q,ce)=>{P=P||Dr,g=g||Dr;const fe=P.length,Pe=g.length,E=Math.min(fe,Pe);let x;for(x=0;x<E;x++){const N=g[x]=ce?ds(g[x]):Si(g[x]);_(P[x],N,B,null,ee,W,ge,Q,ce)}fe>Pe?we(P,ee,W,!0,!1,E):I(g,B,$,ee,W,ge,Q,ce,E)},Te=(P,g,B,$,ee,W,ge,Q,ce)=>{let fe=0;const Pe=g.length;let E=P.length-1,x=Pe-1;for(;fe<=E&&fe<=x;){const N=P[fe],K=g[fe]=ce?ds(g[fe]):Si(g[fe]);if(_o(N,K))_(N,K,B,null,ee,W,ge,Q,ce);else break;fe++}for(;fe<=E&&fe<=x;){const N=P[E],K=g[x]=ce?ds(g[x]):Si(g[x]);if(_o(N,K))_(N,K,B,null,ee,W,ge,Q,ce);else break;E--,x--}if(fe>E){if(fe<=x){const N=x+1,K=N<Pe?g[N].el:$;for(;fe<=x;)_(null,g[fe]=ce?ds(g[fe]):Si(g[fe]),B,K,ee,W,ge,Q,ce),fe++}}else if(fe>x)for(;fe<=E;)We(P[fe],ee,W,!0),fe++;else{const N=fe,K=fe,ae=new Map;for(fe=K;fe<=x;fe++){const Be=g[fe]=ce?ds(g[fe]):Si(g[fe]);Be.key!=null&&ae.set(Be.key,fe)}let Y,Le=0;const ve=x-K+1;let Ie=!1,Ue=0;const _e=new Array(ve);for(fe=0;fe<ve;fe++)_e[fe]=0;for(fe=N;fe<=E;fe++){const Be=P[fe];if(Le>=ve){We(Be,ee,W,!0);continue}let Fe;if(Be.key!=null)Fe=ae.get(Be.key);else for(Y=K;Y<=x;Y++)if(_e[Y-K]===0&&_o(Be,g[Y])){Fe=Y;break}Fe===void 0?We(Be,ee,W,!0):(_e[Fe-K]=fe+1,Fe>=Ue?Ue=Fe:Ie=!0,_(Be,g[Fe],B,null,ee,W,ge,Q,ce),Le++)}const Ce=Ie?o0(_e):Dr;for(Y=Ce.length-1,fe=ve-1;fe>=0;fe--){const Be=K+fe,Fe=g[Be],Ae=Be+1<Pe?g[Be+1].el:$;_e[fe]===0?_(null,Fe,B,Ae,ee,W,ge,Q,ce):Ie&&(Y<0||fe!==Ce[Y]?Ne(Fe,B,Ae,2):Y--)}}},Ne=(P,g,B,$,ee=null)=>{const{el:W,type:ge,transition:Q,children:ce,shapeFlag:fe}=P;if(fe&6){Ne(P.component.subTree,g,B,$);return}if(fe&128){P.suspense.move(g,B,$);return}if(fe&64){ge.move(P,g,B,me);return}if(ge===Bt){i(W,g,B);for(let E=0;E<ce.length;E++)Ne(ce[E],g,B,$);i(P.anchor,g,B);return}if(ge===el){A(P,g,B);return}if($!==2&&fe&1&&Q)if($===0)Q.beforeEnter(W),i(W,g,B),zn(()=>Q.enter(W),ee);else{const{leave:E,delayLeave:x,afterLeave:N}=Q,K=()=>i(W,g,B),ae=()=>{E(W,()=>{K(),N&&N()})};x?x(W,K,ae):ae()}else i(W,g,B)},We=(P,g,B,$=!1,ee=!1)=>{const{type:W,props:ge,ref:Q,children:ce,dynamicChildren:fe,shapeFlag:Pe,patchFlag:E,dirs:x,cacheIndex:N}=P;if(E===-2&&(ee=!1),Q!=null&&pl(Q,null,B,P,!0),N!=null&&(g.renderCache[N]=void 0),Pe&256){g.ctx.deactivate(P);return}const K=Pe&1&&x,ae=!Fo(P);let Y;if(ae&&(Y=ge&&ge.onVnodeBeforeUnmount)&&gi(Y,g,P),Pe&6)re(P.component,B,$);else{if(Pe&128){P.suspense.unmount(B,$);return}K&&Is(P,null,g,"beforeUnmount"),Pe&64?P.type.remove(P,g,B,me,$):fe&&!fe.hasOnce&&(W!==Bt||E>0&&E&64)?we(fe,g,B,!1,!0):(W===Bt&&E&384||!ee&&Pe&16)&&we(ce,g,B),$&&nt(P)}(ae&&(Y=ge&&ge.onVnodeUnmounted)||K)&&zn(()=>{Y&&gi(Y,g,P),K&&Is(P,null,g,"unmounted")},B)},nt=P=>{const{type:g,el:B,anchor:$,transition:ee}=P;if(g===Bt){je(B,$);return}if(g===el){w(P);return}const W=()=>{s(B),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave()};if(P.shapeFlag&1&&ee&&!ee.persisted){const{leave:ge,delayLeave:Q}=ee,ce=()=>ge(B,W);Q?Q(P.el,W,ce):ce()}else W()},je=(P,g)=>{let B;for(;P!==g;)B=f(P),s(P),P=B;s(g)},re=(P,g,B)=>{const{bum:$,scope:ee,job:W,subTree:ge,um:Q,m:ce,a:fe}=P;df(ce),df(fe),$&&Qa($),ee.stop(),W&&(W.flags|=8,We(ge,P,g,B)),Q&&zn(Q,g),zn(()=>{P.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&P.asyncDep&&!P.asyncResolved&&P.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},we=(P,g,B,$=!1,ee=!1,W=0)=>{for(let ge=W;ge<P.length;ge++)We(P[ge],g,B,$,ee)},F=P=>{if(P.shapeFlag&6)return F(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const g=f(P.anchor||P.el),B=g&&g[A_];return B?f(B):g};let oe=!1;const se=(P,g,B)=>{P==null?g._vnode&&We(g._vnode,null,null,!0):_(g._vnode||null,P,g,null,null,null,B),g._vnode=P,oe||(oe=!0,sf(),Zp(),oe=!1)},me={p:_,um:We,m:Ne,r:nt,mt:J,mc:I,pc:X,pbc:M,n:F,o:t};return{render:se,hydrate:void 0,createApp:K_(se)}}function ac({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Us({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function r0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function gm(t,e,n=!1){const i=t.children,s=e.children;if(et(i)&&et(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ds(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&gm(o,a)),a.type===zl&&(a.el=o.el)}}function o0(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function vm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:vm(e)}function df(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const a0=Symbol.for("v-scx"),l0=()=>Ki(a0);function hi(t,e,n){return _m(t,e,n)}function _m(t,e,n=Ut){const{immediate:i,deep:s,flush:r,once:o}=n,a=vn({},n),l=e&&i||!e&&r!=="post";let c;if(Xo){if(r==="sync"){const h=l0();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Ai,h.resume=Ai,h.pause=Ai,h}}const u=pn;a.call=(h,v,_)=>Di(h,u,v,_);let d=!1;r==="post"?a.scheduler=h=>{zn(h,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(h,v)=>{v?h():md(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=S_(t,e,a);return Xo&&(c?c.push(f):l&&f()),f}function c0(t,e,n){const i=this.proxy,s=Qt(t)?t.includes(".")?xm(i,t):()=>i[t]:t.bind(i,i);let r;ut(e)?r=e:(r=e.handler,n=e);const o=ca(this),a=_m(s,r.bind(i),n);return o(),a}function xm(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const u0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${ti(e)}Modifiers`]||t[`${ar(e)}Modifiers`];function d0(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Ut;let s=n;const r=e.startsWith("update:"),o=r&&u0(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>Qt(u)?u.trim():u)),o.number&&(s=n.map(ul)));let a,l=i[a=tc(e)]||i[a=tc(ti(e))];!l&&r&&(l=i[a=tc(ar(e))]),l&&Di(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Di(c,t,6,s)}}function ym(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!ut(t)){const l=c=>{const u=ym(c,e,!0);u&&(a=!0,vn(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Nt(t)&&i.set(t,null),null):(et(r)?r.forEach(l=>o[l]=null):vn(o,r),Nt(t)&&i.set(t,o),o)}function Bl(t,e){return!t||!Ll(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ct(t,e[0].toLowerCase()+e.slice(1))||Ct(t,ar(e))||Ct(t,e))}function ff(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:v,inheritAttrs:_}=t,m=hl(t);let p,C;try{if(n.shapeFlag&4){const w=s||i,U=w;p=Si(c.call(U,w,u,d,h,f,v)),C=a}else{const w=e;p=Si(w.length>1?w(d,{attrs:a,slots:o,emit:l}):w(d,null)),C=e.props?a:f0(a)}}catch(w){Bo.length=0,Fl(w,t,1),p=tn(nr)}let A=p;if(C&&_!==!1){const w=Object.keys(C),{shapeFlag:U}=A;w.length&&U&7&&(r&&w.some(sd)&&(C=h0(C,r)),A=Zr(A,C,!1,!0))}return n.dirs&&(A=Zr(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&gd(A,n.transition),p=A,hl(m),p}const f0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ll(n))&&((e||(e={}))[n]=t[n]);return e},h0=(t,e)=>{const n={};for(const i in t)(!sd(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function p0(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?hf(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==i[f]&&!Bl(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?hf(i,o,c):!0:!!o;return!1}function hf(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Bl(n,r))return!0}return!1}function m0({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const bm=t=>t.__isSuspense;function g0(t,e){e&&e.pendingBranch?et(t)?e.effects.push(...t):e.effects.push(t):T_(t)}const Bt=Symbol.for("v-fgt"),zl=Symbol.for("v-txt"),nr=Symbol.for("v-cmt"),el=Symbol.for("v-stc"),Bo=[];let $n=null;function He(t=!1){Bo.push($n=t?null:[])}function v0(){Bo.pop(),$n=Bo[Bo.length-1]||null}let $o=1;function pf(t,e=!1){$o+=t,t<0&&$n&&e&&($n.hasOnce=!0)}function wm(t){return t.dynamicChildren=$o>0?$n||Dr:null,v0(),$o>0&&$n&&$n.push(t),t}function Ge(t,e,n,i,s,r){return wm(y(t,e,n,i,s,r,!0))}function Do(t,e,n,i,s){return wm(tn(t,e,n,i,s,!0))}function gl(t){return t?t.__v_isVNode===!0:!1}function _o(t,e){return t.type===e.type&&t.key===e.key}const Sm=({key:t})=>t??null,tl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Qt(t)||on(t)||ut(t)?{i:Wn,r:t,k:e,f:!!n}:t:null);function y(t,e=null,n=null,i=0,s=null,r=t===Bt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Sm(e),ref:e&&tl(e),scopeId:Jp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Wn};return a?(yd(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Qt(n)?8:16),$o>0&&!o&&$n&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&$n.push(l),l}const tn=_0;function _0(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===H_)&&(t=nr),gl(t)){const a=Zr(t,e,!0);return n&&yd(a,n),$o>0&&!r&&$n&&(a.shapeFlag&6?$n[$n.indexOf(t)]=a:$n.push(a)),a.patchFlag=-2,a}if(R0(t)&&(t=t.__vccOpts),e){e=x0(e);let{class:a,style:l}=e;a&&!Qt(a)&&(e.class=it(a)),Nt(l)&&(pd(l)&&!et(l)&&(l=vn({},l)),e.style=Gn(l))}const o=Qt(t)?1:bm(t)?128:C_(t)?64:Nt(t)?4:ut(t)?2:0;return y(t,e,n,i,s,o,r,!0)}function x0(t){return t?pd(t)||cm(t)?vn({},t):t:null}function Zr(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?y0(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Sm(c),ref:e&&e.ref?n&&r?et(r)?r.concat(tl(e)):[r,tl(e)]:tl(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Bt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zr(t.ssContent),ssFallback:t.ssFallback&&Zr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&gd(u,l.clone(u)),u}function Lo(t=" ",e=0){return tn(zl,null,t,e)}function Mm(t,e){const n=tn(el,null,t);return n.staticCount=e,n}function Pt(t="",e=!1){return e?(He(),Do(nr,null,t)):tn(nr,null,t)}function Si(t){return t==null||typeof t=="boolean"?tn(nr):et(t)?tn(Bt,null,t.slice()):gl(t)?ds(t):tn(zl,null,String(t))}function ds(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Zr(t)}function yd(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(et(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),yd(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!cm(e)?e._ctx=Wn:s===3&&Wn&&(Wn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ut(e)?(e={default:e,_ctx:Wn},n=32):(e=String(e),i&64?(n=16,e=[Lo(e)]):n=8);t.children=e,t.shapeFlag|=n}function y0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=it([e.class,i.class]));else if(s==="style")e.style=Gn([e.style,i.style]);else if(Ll(s)){const r=e[s],o=i[s];o&&r!==o&&!(et(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function gi(t,e,n,i=null){Di(t,e,7,[n,i])}const b0=om();let w0=0;function S0(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||b0,r={uid:w0++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Rp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dm(i,s),emitsOptions:ym(i,s),emit:null,emitted:null,propsDefaults:Ut,inheritAttrs:i.inheritAttrs,ctx:Ut,data:Ut,props:Ut,attrs:Ut,slots:Ut,refs:Ut,setupState:Ut,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=d0.bind(null,r),t.ce&&t.ce(r),r}let pn=null,vl,ru;{const t=Ol(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};vl=e("__VUE_INSTANCE_SETTERS__",n=>pn=n),ru=e("__VUE_SSR_SETTERS__",n=>Xo=n)}const ca=t=>{const e=pn;return vl(t),t.scope.on(),()=>{t.scope.off(),vl(e)}},mf=()=>{pn&&pn.scope.off(),vl(null)};function Em(t){return t.vnode.shapeFlag&4}let Xo=!1;function M0(t,e=!1,n=!1){e&&ru(e);const{props:i,children:s}=t.vnode,r=Em(t);Z_(t,i,r,e),t0(t,s,n);const o=r?E0(t,e):void 0;return e&&ru(!1),o}function E0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,G_);const{setup:i}=n;if(i){Rs();const s=t.setupContext=i.length>1?A0(t):null,r=ca(t),o=aa(i,t,0,[t.props,s]),a=wp(o);if(Ps(),r(),(a||t.sp)&&!Fo(t)&&tm(t),a){if(o.then(mf,mf),e)return o.then(l=>{gf(t,l)}).catch(l=>{Fl(l,t,0)});t.asyncDep=o}else gf(t,o)}else Tm(t)}function gf(t,e,n){ut(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Nt(e)&&(t.setupState=jp(e)),Tm(t)}function Tm(t,e,n){const i=t.type;t.render||(t.render=i.render||Ai);{const s=ca(t);Rs();try{W_(t)}finally{Ps(),s()}}}const T0={get(t,e){return fn(t,"get",""),t[e]}};function A0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,T0),slots:t.slots,emit:t.emit,expose:e}}function Hl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(jp(Xp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ko)return ko[n](t)},has(e,n){return n in e||n in ko}})):t.proxy}function C0(t,e=!0){return ut(t)?t.displayName||t.name:t.name||e&&t.__name}function R0(t){return ut(t)&&"__vccOpts"in t}const mn=(t,e)=>b_(t,e,Xo);function Am(t,e,n){const i=arguments.length;return i===2?Nt(e)&&!et(e)?gl(e)?tn(t,null,[e]):tn(t,e):tn(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&gl(n)&&(n=[n]),tn(t,e,n))}const P0="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ou;const vf=typeof window<"u"&&window.trustedTypes;if(vf)try{ou=vf.createPolicy("vue",{createHTML:t=>t})}catch{}const Cm=ou?t=>ou.createHTML(t):t=>t,D0="http://www.w3.org/2000/svg",L0="http://www.w3.org/1998/Math/MathML",Wi=typeof document<"u"?document:null,_f=Wi&&Wi.createElement("template"),I0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Wi.createElementNS(D0,t):e==="mathml"?Wi.createElementNS(L0,t):n?Wi.createElement(t,{is:n}):Wi.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Wi.createTextNode(t),createComment:t=>Wi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Wi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{_f.innerHTML=Cm(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=_f.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},U0=Symbol("_vtc");function O0(t,e,n){const i=t[U0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const _l=Symbol("_vod"),Rm=Symbol("_vsh"),SL={beforeMount(t,{value:e},{transition:n}){t[_l]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):xo(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),xo(t,!0),i.enter(t)):i.leave(t,()=>{xo(t,!1)}):xo(t,e))},beforeUnmount(t,{value:e}){xo(t,e)}};function xo(t,e){t.style.display=e?t[_l]:"none",t[Rm]=!e}const N0=Symbol(""),F0=/(^|;)\s*display\s*:/;function k0(t,e,n){const i=t.style,s=Qt(n);let r=!1;if(n&&!s){if(e)if(Qt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&nl(i,a,"")}else for(const o in e)n[o]==null&&nl(i,o,"");for(const o in n)o==="display"&&(r=!0),nl(i,o,n[o])}else if(s){if(e!==n){const o=i[N0];o&&(n+=";"+o),i.cssText=n,r=F0.test(n)}}else e&&t.removeAttribute("style");_l in t&&(t[_l]=r?i.display:"",t[Rm]&&(i.display="none"))}const xf=/\s*!important$/;function nl(t,e,n){if(et(n))n.forEach(i=>nl(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=B0(t,e);xf.test(n)?t.setProperty(ar(i),n.replace(xf,""),"important"):t[i]=n}}const yf=["Webkit","Moz","ms"],lc={};function B0(t,e){const n=lc[e];if(n)return n;let i=ti(e);if(i!=="filter"&&i in t)return lc[e]=i;i=Ul(i);for(let s=0;s<yf.length;s++){const r=yf[s]+i;if(r in t)return lc[e]=r}return e}const bf="http://www.w3.org/1999/xlink";function wf(t,e,n,i,s,r=Yv(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(bf,e.slice(6,e.length)):t.setAttributeNS(bf,e,n):n==null||r&&!Tp(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Pi(n)?String(n):n)}function Sf(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Cm(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Tp(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function ps(t,e,n,i){t.addEventListener(e,n,i)}function z0(t,e,n,i){t.removeEventListener(e,n,i)}const Mf=Symbol("_vei");function H0(t,e,n,i,s=null){const r=t[Mf]||(t[Mf]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=V0(e);if(i){const c=r[e]=$0(i,s);ps(t,a,c,l)}else o&&(z0(t,a,o,l),r[e]=void 0)}}const Ef=/(?:Once|Passive|Capture)$/;function V0(t){let e;if(Ef.test(t)){e={};let i;for(;i=t.match(Ef);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ar(t.slice(2)),e]}let cc=0;const G0=Promise.resolve(),W0=()=>cc||(G0.then(()=>cc=0),cc=Date.now());function $0(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Di(X0(i,n.value),e,5,[i])};return n.value=t,n.attached=W0(),n}function X0(t,e){if(et(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Tf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,q0=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?O0(t,i,o):e==="style"?k0(t,n,i):Ll(e)?sd(e)||H0(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):j0(t,e,i,o))?(Sf(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&wf(t,e,i,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Qt(i))?Sf(t,ti(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),wf(t,e,i,o))};function j0(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Tf(e)&&ut(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Tf(e)&&Qt(n)?!1:e in t}const Qr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return et(e)?n=>Qa(e,n):e};function Y0(t){t.target.composing=!0}function Af(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Zi=Symbol("_assign"),en={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[Zi]=Qr(s);const r=i||s.props&&s.props.type==="number";ps(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=ul(a)),t[Zi](a)}),n&&ps(t,"change",()=>{t.value=t.value.trim()}),e||(ps(t,"compositionstart",Y0),ps(t,"compositionend",Af),ps(t,"change",Af))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[Zi]=Qr(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?ul(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===l)||(t.value=l))}},ML={deep:!0,created(t,e,n){t[Zi]=Qr(n),ps(t,"change",()=>{const i=t._modelValue,s=qo(t),r=t.checked,o=t[Zi];if(et(i)){const a=ad(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(lo(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Pm(t,r))})},mounted:Cf,beforeUpdate(t,e,n){t[Zi]=Qr(n),Cf(t,e,n)}};function Cf(t,{value:e,oldValue:n},i){t._modelValue=e;let s;if(et(e))s=ad(e,i.props.value)>-1;else if(lo(e))s=e.has(i.props.value);else{if(e===n)return;s=ra(e,Pm(t,!0))}t.checked!==s&&(t.checked=s)}const K0={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=lo(e);ps(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ul(qo(o)):qo(o));t[Zi](t.multiple?s?new Set(r):r:r[0]),t._assigning=!0,la(()=>{t._assigning=!1})}),t[Zi]=Qr(i)},mounted(t,{value:e}){Rf(t,e)},beforeUpdate(t,e,n){t[Zi]=Qr(n)},updated(t,{value:e}){t._assigning||Rf(t,e)}};function Rf(t,e){const n=t.multiple,i=et(e);if(!(n&&!i&&!lo(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],a=qo(o);if(n)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=ad(e,a)>-1}else o.selected=e.has(a);else if(ra(qo(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function qo(t){return"_value"in t?t._value:t.value}function Pm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Z0=["ctrl","shift","alt","meta"],Q0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Z0.some(n=>t[`${n}Key`]&&!e.includes(n))},yo=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=Q0[e[o]];if(a&&a(s,e))return}return t(s,...r)})},J0=vn({patchProp:q0},I0);let Pf;function ex(){return Pf||(Pf=i0(J0))}const tx=(...t)=>{const e=ex().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=ix(i);if(!s)return;const r=e._component;!ut(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,nx(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function nx(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ix(t){return Qt(t)?document.querySelector(t):t}/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const sx=Symbol();var Df;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Df||(Df={}));function rx(){const t=Zv(!0),e=t.run(()=>lt({}));let n=[],i=[];const s=Xp({install(r){s._a=r,r.provide(sx,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return this._a?n.push(r):i.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Cr=typeof document<"u";function Dm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ox(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Dm(t.default)}const Tt=Object.assign;function uc(t,e){const n={};for(const i in e){const s=e[i];n[i]=mi(s)?s.map(t):t(s)}return n}const zo=()=>{},mi=Array.isArray,Lm=/#/g,ax=/&/g,lx=/\//g,cx=/=/g,ux=/\?/g,Im=/\+/g,dx=/%5B/g,fx=/%5D/g,Um=/%5E/g,hx=/%60/g,Om=/%7B/g,px=/%7C/g,Nm=/%7D/g,mx=/%20/g;function bd(t){return encodeURI(""+t).replace(px,"|").replace(dx,"[").replace(fx,"]")}function gx(t){return bd(t).replace(Om,"{").replace(Nm,"}").replace(Um,"^")}function au(t){return bd(t).replace(Im,"%2B").replace(mx,"+").replace(Lm,"%23").replace(ax,"%26").replace(hx,"`").replace(Om,"{").replace(Nm,"}").replace(Um,"^")}function vx(t){return au(t).replace(cx,"%3D")}function _x(t){return bd(t).replace(Lm,"%23").replace(ux,"%3F")}function xx(t){return t==null?"":_x(t).replace(lx,"%2F")}function jo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const yx=/\/$/,bx=t=>t.replace(yx,"");function dc(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Ex(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:jo(o)}}function wx(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Lf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Sx(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Jr(e.matched[i],n.matched[s])&&Fm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Jr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Fm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Mx(t[n],e[n]))return!1;return!0}function Mx(t,e){return mi(t)?If(t,e):mi(e)?If(e,t):t===e}function If(t,e){return mi(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function Ex(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const ns={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Yo;(function(t){t.pop="pop",t.push="push"})(Yo||(Yo={}));var Ho;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ho||(Ho={}));function Tx(t){if(!t)if(Cr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),bx(t)}const Ax=/^[^#]+#/;function Cx(t,e){return t.replace(Ax,"#")+e}function Rx(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Vl=()=>({left:window.scrollX,top:window.scrollY});function Px(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Rx(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Uf(t,e){return(history.state?history.state.position-e:-1)+t}const lu=new Map;function Dx(t,e){lu.set(t,e)}function Lx(t){const e=lu.get(t);return lu.delete(t),e}let Ix=()=>location.protocol+"//"+location.host;function km(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Lf(l,"")}return Lf(n,t)+i+s}function Ux(t,e,n,i){let s=[],r=[],o=null;const a=({state:f})=>{const h=km(t,location),v=n.value,_=e.value;let m=0;if(f){if(n.value=h,e.value=f,o&&o===v){o=null;return}m=_?f.position-_.position:0}else i(h);s.forEach(p=>{p(n.value,v,{delta:m,type:Yo.pop,direction:m?m>0?Ho.forward:Ho.back:Ho.unknown})})};function l(){o=n.value}function c(f){s.push(f);const h=()=>{const v=s.indexOf(f);v>-1&&s.splice(v,1)};return r.push(h),h}function u(){const{history:f}=window;f.state&&f.replaceState(Tt({},f.state,{scroll:Vl()}),"")}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function Of(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Vl():null}}function Ox(t){const{history:e,location:n}=window,i={value:km(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:Ix()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(h){console.error(h),n[u?"replace":"assign"](f)}}function o(l,c){const u=Tt({},e.state,Of(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=Tt({},s.value,e.state,{forward:l,scroll:Vl()});r(u.current,u,!0);const d=Tt({},Of(i.value,l,null),{position:u.position+1},c);r(l,d,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Nx(t){t=Tx(t);const e=Ox(t),n=Ux(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=Tt({location:"",base:t,go:i,createHref:Cx.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Fx(t){return typeof t=="string"||t&&typeof t=="object"}function Bm(t){return typeof t=="string"||typeof t=="symbol"}const zm=Symbol("");var Nf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Nf||(Nf={}));function eo(t,e){return Tt(new Error,{type:t,[zm]:!0},e)}function Ni(t,e){return t instanceof Error&&zm in t&&(e==null||!!(t.type&e))}const Ff="[^/]+?",kx={sensitive:!1,strict:!1,start:!0,end:!0},Bx=/[.+*?^${}()[\]/\\]/g;function zx(t,e){const n=Tt({},kx,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let d=0;d<c.length;d++){const f=c[d];let h=40+(n.sensitive?.25:0);if(f.type===0)d||(s+="/"),s+=f.value.replace(Bx,"\\$&"),h+=40;else if(f.type===1){const{value:v,repeatable:_,optional:m,regexp:p}=f;r.push({name:v,repeatable:_,optional:m});const C=p||Ff;if(C!==Ff){h+=10;try{new RegExp(`(${C})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${v}" (${C}): `+w.message)}}let A=_?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;d||(A=m&&c.length<2?`(?:/${A})`:"/"+A),m&&(A+="?"),s+=A,h+=20,m&&(h+=-8),_&&(h+=-20),C===".*"&&(h+=-50)}u.push(h)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",v=r[f-1];d[v.name]=h&&v.repeatable?h.split("/"):h}return d}function l(c){let u="",d=!1;for(const f of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===0)u+=h.value;else if(h.type===1){const{value:v,repeatable:_,optional:m}=h,p=v in c?c[v]:"";if(mi(p)&&!_)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const C=mi(p)?p.join("/"):p;if(!C)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${v}"`);u+=C}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function Hx(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Hm(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=Hx(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(kf(i))return 1;if(kf(s))return-1}return s.length-i.length}function kf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Vx={type:0,value:""},Gx=/[a-zA-Z0-9_]/;function Wx(t){if(!t)return[[]];if(t==="/")return[[Vx]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):f();break;case 4:f(),n=i;break;case 1:l==="("?n=2:Gx.test(l)?f():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),s}function $x(t,e,n){const i=zx(Wx(t.path),n),s=Tt(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Xx(t,e){const n=[],i=new Map;e=Vf({strict:!1,end:!0,sensitive:!1},e);function s(d){return i.get(d)}function r(d,f,h){const v=!h,_=zf(d);_.aliasOf=h&&h.record;const m=Vf(e,d),p=[_];if("alias"in d){const w=typeof d.alias=="string"?[d.alias]:d.alias;for(const U of w)p.push(zf(Tt({},_,{components:h?h.record.components:_.components,path:U,aliasOf:h?h.record:_})))}let C,A;for(const w of p){const{path:U}=w;if(f&&U[0]!=="/"){const L=f.record.path,D=L[L.length-1]==="/"?"":"/";w.path=f.record.path+(U&&D+U)}if(C=$x(w,f,m),h?h.alias.push(C):(A=A||C,A!==C&&A.alias.push(C),v&&d.name&&!Hf(C)&&o(d.name)),Vm(C)&&l(C),_.children){const L=_.children;for(let D=0;D<L.length;D++)r(L[D],C,h&&h.children[D])}h=h||C}return A?()=>{o(A)}:zo}function o(d){if(Bm(d)){const f=i.get(d);f&&(i.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const f=Yx(d,n);n.splice(f,0,d),d.record.name&&!Hf(d)&&i.set(d.record.name,d)}function c(d,f){let h,v={},_,m;if("name"in d&&d.name){if(h=i.get(d.name),!h)throw eo(1,{location:d});m=h.record.name,v=Tt(Bf(f.params,h.keys.filter(A=>!A.optional).concat(h.parent?h.parent.keys.filter(A=>A.optional):[]).map(A=>A.name)),d.params&&Bf(d.params,h.keys.map(A=>A.name))),_=h.stringify(v)}else if(d.path!=null)_=d.path,h=n.find(A=>A.re.test(_)),h&&(v=h.parse(_),m=h.record.name);else{if(h=f.name?i.get(f.name):n.find(A=>A.re.test(f.path)),!h)throw eo(1,{location:d,currentLocation:f});m=h.record.name,v=Tt({},f.params,d.params),_=h.stringify(v)}const p=[];let C=h;for(;C;)p.unshift(C.record),C=C.parent;return{name:m,path:_,params:v,matched:p,meta:jx(p)}}t.forEach(d=>r(d));function u(){n.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Bf(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function zf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:qx(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function qx(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Hf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function jx(t){return t.reduce((e,n)=>Tt(e,n.meta),{})}function Vf(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function Yx(t,e){let n=0,i=e.length;for(;n!==i;){const r=n+i>>1;Hm(t,e[r])<0?i=r:n=r+1}const s=Kx(t);return s&&(i=e.lastIndexOf(s,i-1)),i}function Kx(t){let e=t;for(;e=e.parent;)if(Vm(e)&&Hm(t,e)===0)return e}function Vm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Zx(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Im," "),o=r.indexOf("="),a=jo(o<0?r:r.slice(0,o)),l=o<0?null:jo(r.slice(o+1));if(a in e){let c=e[a];mi(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Gf(t){let e="";for(let n in t){const i=t[n];if(n=vx(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(mi(i)?i.map(r=>r&&au(r)):[i&&au(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Qx(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=mi(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const Jx=Symbol(""),Wf=Symbol(""),wd=Symbol(""),Gm=Symbol(""),cu=Symbol("");function bo(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function fs(t,e,n,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(eo(4,{from:n,to:e})):f instanceof Error?l(f):Fx(f)?l(eo(2,{from:e,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=r(()=>t.call(i&&i.instances[s],e,n,c));let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(f=>l(f))})}function fc(t,e,n,i,s=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Dm(l)){const u=(l.__vccOpts||l)[e];u&&r.push(fs(u,n,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=ox(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const h=(d.__vccOpts||d)[e];return h&&fs(h,n,i,o,a,s)()}))}}return r}function $f(t){const e=Ki(wd),n=Ki(Gm),i=mn(()=>{const l=Ms(t.to);return e.resolve(l)}),s=mn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(Jr.bind(null,u));if(f>-1)return f;const h=Xf(l[c-2]);return c>1&&Xf(u)===h&&d[d.length-1].path!==h?d.findIndex(Jr.bind(null,l[c-2])):f}),r=mn(()=>s.value>-1&&sy(n.params,i.value.params)),o=mn(()=>s.value>-1&&s.value===n.matched.length-1&&Fm(n.params,i.value.params));function a(l={}){if(iy(l)){const c=e[Ms(t.replace)?"replace":"push"](Ms(t.to)).catch(zo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:mn(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function ey(t){return t.length===1?t[0]:t}const ty=em({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$f,setup(t,{slots:e}){const n=oa($f(t)),{options:i}=Ki(wd),s=mn(()=>({[qf(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[qf(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&ey(e.default(n));return t.custom?r:Am("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),ny=ty;function iy(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function sy(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!mi(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Xf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const qf=(t,e,n)=>t??e??n,ry=em({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Ki(cu),s=mn(()=>t.route||i.value),r=Ki(Wf,0),o=mn(()=>{let c=Ms(r);const{matched:u}=s.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=mn(()=>s.value.matched[o.value]);Ja(Wf,mn(()=>o.value+1)),Ja(Jx,a),Ja(cu,s);const l=lt();return hi(()=>[l.value,a.value,t.name],([c,u,d],[f,h,v])=>{u&&(u.instances[d]=c,h&&h!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!Jr(u,h)||!f)&&(u.enterCallbacks[d]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,d=a.value,f=d&&d.components[u];if(!f)return jf(n.default,{Component:f,route:c});const h=d.props[u],v=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=Am(f,Tt({},v,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return jf(n.default,{Component:m,route:c})||m}}});function jf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Wm=ry;function oy(t){const e=Xx(t.routes,t),n=t.parseQuery||Zx,i=t.stringifyQuery||Gf,s=t.history,r=bo(),o=bo(),a=bo(),l=v_(ns);let c=ns;Cr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=uc.bind(null,F=>""+F),d=uc.bind(null,xx),f=uc.bind(null,jo);function h(F,oe){let se,me;return Bm(F)?(se=e.getRecordMatcher(F),me=oe):me=F,e.addRoute(me,se)}function v(F){const oe=e.getRecordMatcher(F);oe&&e.removeRoute(oe)}function _(){return e.getRoutes().map(F=>F.record)}function m(F){return!!e.getRecordMatcher(F)}function p(F,oe){if(oe=Tt({},oe||l.value),typeof F=="string"){const B=dc(n,F,oe.path),$=e.resolve({path:B.path},oe),ee=s.createHref(B.fullPath);return Tt(B,$,{params:f($.params),hash:jo(B.hash),redirectedFrom:void 0,href:ee})}let se;if(F.path!=null)se=Tt({},F,{path:dc(n,F.path,oe.path).path});else{const B=Tt({},F.params);for(const $ in B)B[$]==null&&delete B[$];se=Tt({},F,{params:d(B)}),oe.params=d(oe.params)}const me=e.resolve(se,oe),Ke=F.hash||"";me.params=u(f(me.params));const P=wx(i,Tt({},F,{hash:gx(Ke),path:me.path})),g=s.createHref(P);return Tt({fullPath:P,hash:Ke,query:i===Gf?Qx(F.query):F.query||{}},me,{redirectedFrom:void 0,href:g})}function C(F){return typeof F=="string"?dc(n,F,l.value.path):Tt({},F)}function A(F,oe){if(c!==F)return eo(8,{from:oe,to:F})}function w(F){return D(F)}function U(F){return w(Tt(C(F),{replace:!0}))}function L(F){const oe=F.matched[F.matched.length-1];if(oe&&oe.redirect){const{redirect:se}=oe;let me=typeof se=="function"?se(F):se;return typeof me=="string"&&(me=me.includes("?")||me.includes("#")?me=C(me):{path:me},me.params={}),Tt({query:F.query,hash:F.hash,params:me.path!=null?{}:F.params},me)}}function D(F,oe){const se=c=p(F),me=l.value,Ke=F.state,P=F.force,g=F.replace===!0,B=L(se);if(B)return D(Tt(C(B),{state:typeof B=="object"?Tt({},Ke,B.state):Ke,force:P,replace:g}),oe||se);const $=se;$.redirectedFrom=oe;let ee;return!P&&Sx(i,me,se)&&(ee=eo(16,{to:$,from:me}),Ne(me,me,!0,!1)),(ee?Promise.resolve(ee):M($,me)).catch(W=>Ni(W)?Ni(W,2)?W:Te(W):X(W,$,me)).then(W=>{if(W){if(Ni(W,2))return D(Tt({replace:g},C(W.to),{state:typeof W.to=="object"?Tt({},Ke,W.to.state):Ke,force:P}),oe||$)}else W=q($,me,!0,g,Ke);return R($,me,W),W})}function I(F,oe){const se=A(F,oe);return se?Promise.reject(se):Promise.resolve()}function b(F){const oe=je.values().next().value;return oe&&typeof oe.runWithContext=="function"?oe.runWithContext(F):F()}function M(F,oe){let se;const[me,Ke,P]=ay(F,oe);se=fc(me.reverse(),"beforeRouteLeave",F,oe);for(const B of me)B.leaveGuards.forEach($=>{se.push(fs($,F,oe))});const g=I.bind(null,F,oe);return se.push(g),we(se).then(()=>{se=[];for(const B of r.list())se.push(fs(B,F,oe));return se.push(g),we(se)}).then(()=>{se=fc(Ke,"beforeRouteUpdate",F,oe);for(const B of Ke)B.updateGuards.forEach($=>{se.push(fs($,F,oe))});return se.push(g),we(se)}).then(()=>{se=[];for(const B of P)if(B.beforeEnter)if(mi(B.beforeEnter))for(const $ of B.beforeEnter)se.push(fs($,F,oe));else se.push(fs(B.beforeEnter,F,oe));return se.push(g),we(se)}).then(()=>(F.matched.forEach(B=>B.enterCallbacks={}),se=fc(P,"beforeRouteEnter",F,oe,b),se.push(g),we(se))).then(()=>{se=[];for(const B of o.list())se.push(fs(B,F,oe));return se.push(g),we(se)}).catch(B=>Ni(B,8)?B:Promise.reject(B))}function R(F,oe,se){a.list().forEach(me=>b(()=>me(F,oe,se)))}function q(F,oe,se,me,Ke){const P=A(F,oe);if(P)return P;const g=oe===ns,B=Cr?history.state:{};se&&(me||g?s.replace(F.fullPath,Tt({scroll:g&&B&&B.scroll},Ke)):s.push(F.fullPath,Ke)),l.value=F,Ne(F,oe,se,g),Te()}let j;function J(){j||(j=s.listen((F,oe,se)=>{if(!re.listening)return;const me=p(F),Ke=L(me);if(Ke){D(Tt(Ke,{replace:!0,force:!0}),me).catch(zo);return}c=me;const P=l.value;Cr&&Dx(Uf(P.fullPath,se.delta),Vl()),M(me,P).catch(g=>Ni(g,12)?g:Ni(g,2)?(D(Tt(C(g.to),{force:!0}),me).then(B=>{Ni(B,20)&&!se.delta&&se.type===Yo.pop&&s.go(-1,!1)}).catch(zo),Promise.reject()):(se.delta&&s.go(-se.delta,!1),X(g,me,P))).then(g=>{g=g||q(me,P,!1),g&&(se.delta&&!Ni(g,8)?s.go(-se.delta,!1):se.type===Yo.pop&&Ni(g,20)&&s.go(-1,!1)),R(me,P,g)}).catch(zo)}))}let le=bo(),G=bo(),ue;function X(F,oe,se){Te(F);const me=G.list();return me.length?me.forEach(Ke=>Ke(F,oe,se)):console.error(F),Promise.reject(F)}function be(){return ue&&l.value!==ns?Promise.resolve():new Promise((F,oe)=>{le.add([F,oe])})}function Te(F){return ue||(ue=!F,J(),le.list().forEach(([oe,se])=>F?se(F):oe()),le.reset()),F}function Ne(F,oe,se,me){const{scrollBehavior:Ke}=t;if(!Cr||!Ke)return Promise.resolve();const P=!se&&Lx(Uf(F.fullPath,0))||(me||!se)&&history.state&&history.state.scroll||null;return la().then(()=>Ke(F,oe,P)).then(g=>g&&Px(g)).catch(g=>X(g,F,oe))}const We=F=>s.go(F);let nt;const je=new Set,re={currentRoute:l,listening:!0,addRoute:h,removeRoute:v,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:p,options:t,push:w,replace:U,go:We,back:()=>We(-1),forward:()=>We(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:G.add,isReady:be,install(F){const oe=this;F.component("RouterLink",ny),F.component("RouterView",Wm),F.config.globalProperties.$router=oe,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>Ms(l)}),Cr&&!nt&&l.value===ns&&(nt=!0,w(s.location).catch(Ke=>{}));const se={};for(const Ke in ns)Object.defineProperty(se,Ke,{get:()=>l.value[Ke],enumerable:!0});F.provide(wd,oe),F.provide(Gm,Wp(se)),F.provide(cu,l);const me=F.unmount;je.add(F),F.unmount=function(){je.delete(F),je.size<1&&(c=ns,j&&j(),j=null,l.value=ns,nt=!1,ue=!1),me()}}};function we(F){return F.reduce((oe,se)=>oe.then(()=>b(se)),Promise.resolve())}return re}function ay(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Jr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Jr(c,l))||s.push(l))}return[n,i,s]}const ua=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},ly={id:"app"},cy={class:"app-header"},uy={class:"header-content"},dy={class:"header-actions max-md:text-[12px]"},fy={class:"main-content"},hy={__name:"App",setup(t){console.log("App.vue");const e=lt(!1);return co(()=>{localStorage.getItem("darkMode")==="true"&&(e.value=!0,document.body.classList.add("dark-mode"))}),(n,i)=>{const s=z_("RouterLink");return He(),Ge("div",ly,[y("header",cy,[y("div",uy,[i[4]||(i[4]=y("div",{class:"logo-section max-md:hidden"},[y("h1",{class:"app-title"},"Miyuki Beads Designer")],-1)),y("div",dy,[tn(s,{to:"/"},{default:Ro(()=>i[0]||(i[0]=[Lo("Flat Grid")])),_:1}),tn(s,{to:"/weaving-grid"},{default:Ro(()=>i[1]||(i[1]=[Lo("Weaving Grid")])),_:1}),tn(s,{to:"/beadwork-pattern"},{default:Ro(()=>i[2]||(i[2]=[Lo("Beadwork Pattern")])),_:1}),tn(s,{to:"/peyote-grid"},{default:Ro(()=>i[3]||(i[3]=[Lo("Peyote Grid")])),_:1})])])]),y("main",fy,[tn(Ms(Wm))])])}}},py=ua(hy,[["__scopeId","data-v-7a37d691"]]),my="modulepreload",gy=function(t){return"/miyuki-beads-designer/"+t},Yf={},wo=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){let o=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=o(n.map(c=>{if(c=gy(c),c in Yf)return;Yf[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":my,u||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((h,v)=>{f.addEventListener("load",h),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};/*!
* sweetalert2 v11.22.3
* Released under the MIT License.
*/function $m(t,e,n){if(typeof t=="function"?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}function vy(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Kf(t,e){return t.get($m(t,e))}function _y(t,e,n){vy(t,e),e.set(t,n)}function xy(t,e,n){return t.set($m(t,e),n),n}const yy=100,Ze={},by=()=>{Ze.previousActiveElement instanceof HTMLElement?(Ze.previousActiveElement.focus(),Ze.previousActiveElement=null):document.body&&document.body.focus()},wy=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,i=window.scrollY;Ze.restoreFocusTimeout=setTimeout(()=>{by(),e()},yy),window.scrollTo(n,i)}),Xm="swal2-",Sy=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],ie=Sy.reduce((t,e)=>(t[e]=Xm+e,t),{}),My=["success","warning","info","question","error"],xl=My.reduce((t,e)=>(t[e]=Xm+e,t),{}),qm="SweetAlert2:",Sd=t=>t.charAt(0).toUpperCase()+t.slice(1),An=t=>{console.warn(`${qm} ${typeof t=="object"?t.join(" "):t}`)},lr=t=>{console.error(`${qm} ${t}`)},Zf=[],Ey=t=>{Zf.includes(t)||(Zf.push(t),An(t))},jm=(t,e=null)=>{Ey(`"${t}" is deprecated and will be removed in the next major release.${e?` Use "${e}" instead.`:""}`)},Gl=t=>typeof t=="function"?t():t,Md=t=>t&&typeof t.toPromise=="function",da=t=>Md(t)?t.toPromise():Promise.resolve(t),Ed=t=>t&&Promise.resolve(t)===t,Cn=()=>document.body.querySelector(`.${ie.container}`),fa=t=>{const e=Cn();return e?e.querySelector(t):null},qn=t=>fa(`.${t}`),St=()=>qn(ie.popup),uo=()=>qn(ie.icon),Ty=()=>qn(ie["icon-content"]),Ym=()=>qn(ie.title),Td=()=>qn(ie["html-container"]),Km=()=>qn(ie.image),Ad=()=>qn(ie["progress-steps"]),Wl=()=>qn(ie["validation-message"]),Li=()=>fa(`.${ie.actions} .${ie.confirm}`),fo=()=>fa(`.${ie.actions} .${ie.cancel}`),cr=()=>fa(`.${ie.actions} .${ie.deny}`),Ay=()=>qn(ie["input-label"]),ho=()=>fa(`.${ie.loader}`),ha=()=>qn(ie.actions),Zm=()=>qn(ie.footer),$l=()=>qn(ie["timer-progress-bar"]),Cd=()=>qn(ie.close),Cy=`
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
`,Rd=()=>{const t=St();if(!t)return[];const e=t.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),n=Array.from(e).sort((r,o)=>{const a=parseInt(r.getAttribute("tabindex")||"0"),l=parseInt(o.getAttribute("tabindex")||"0");return a>l?1:a<l?-1:0}),i=t.querySelectorAll(Cy),s=Array.from(i).filter(r=>r.getAttribute("tabindex")!=="-1");return[...new Set(n.concat(s))].filter(r=>Ln(r))},Pd=()=>Qi(document.body,ie.shown)&&!Qi(document.body,ie["toast-shown"])&&!Qi(document.body,ie["no-backdrop"]),Xl=()=>{const t=St();return t?Qi(t,ie.toast):!1},Ry=()=>{const t=St();return t?t.hasAttribute("data-loading"):!1},jn=(t,e)=>{if(t.textContent="",e){const i=new DOMParser().parseFromString(e,"text/html"),s=i.querySelector("head");s&&Array.from(s.childNodes).forEach(o=>{t.appendChild(o)});const r=i.querySelector("body");r&&Array.from(r.childNodes).forEach(o=>{o instanceof HTMLVideoElement||o instanceof HTMLAudioElement?t.appendChild(o.cloneNode(!0)):t.appendChild(o)})}},Qi=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let i=0;i<n.length;i++)if(!t.classList.contains(n[i]))return!1;return!0},Py=(t,e)=>{Array.from(t.classList).forEach(n=>{!Object.values(ie).includes(n)&&!Object.values(xl).includes(n)&&!Object.values(e.showClass||{}).includes(n)&&t.classList.remove(n)})},Xn=(t,e,n)=>{if(Py(t,e),!e.customClass)return;const i=e.customClass[n];if(i){if(typeof i!="string"&&!i.forEach){An(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof i}"`);return}Et(t,i)}},ql=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${ie.popup} > .${ie[e]}`);case"checkbox":return t.querySelector(`.${ie.popup} > .${ie.checkbox} input`);case"radio":return t.querySelector(`.${ie.popup} > .${ie.radio} input:checked`)||t.querySelector(`.${ie.popup} > .${ie.radio} input:first-child`);case"range":return t.querySelector(`.${ie.popup} > .${ie.range} input`);default:return t.querySelector(`.${ie.popup} > .${ie.input}`)}},Qm=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},Jm=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(i=>{Array.isArray(t)?t.forEach(s=>{n?s.classList.add(i):s.classList.remove(i)}):n?t.classList.add(i):t.classList.remove(i)}))},Et=(t,e)=>{Jm(t,e,!0)},ni=(t,e)=>{Jm(t,e,!1)},bs=(t,e)=>{const n=Array.from(t.children);for(let i=0;i<n.length;i++){const s=n[i];if(s instanceof HTMLElement&&Qi(s,e))return s}},er=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style.setProperty(e,typeof n=="number"?`${n}px`:n):t.style.removeProperty(e)},an=(t,e="flex")=>{t&&(t.style.display=e)},_n=t=>{t&&(t.style.display="none")},Dd=(t,e="block")=>{t&&new MutationObserver(()=>{pa(t,t.innerHTML,e)}).observe(t,{childList:!0,subtree:!0})},Qf=(t,e,n,i)=>{const s=t.querySelector(e);s&&s.style.setProperty(n,i)},pa=(t,e,n="flex")=>{e?an(t,n):_n(t)},Ln=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),Dy=()=>!Ln(Li())&&!Ln(cr())&&!Ln(fo()),uu=t=>t.scrollHeight>t.clientHeight,Ly=(t,e)=>{let n=t;for(;n&&n!==e;){if(uu(n))return!0;n=n.parentElement}return!1},eg=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),i=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||i>0},Ld=(t,e=!1)=>{const n=$l();n&&Ln(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},Iy=()=>{const t=$l();if(!t)return;const e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),i=e/n*100;t.style.width=`${i}%`},Uy=()=>typeof window>"u"||typeof document>"u",Oy=`
 <div aria-labelledby="${ie.title}" aria-describedby="${ie["html-container"]}" class="${ie.popup}" tabindex="-1">
   <button type="button" class="${ie.close}"></button>
   <ul class="${ie["progress-steps"]}"></ul>
   <div class="${ie.icon}"></div>
   <img class="${ie.image}" />
   <h2 class="${ie.title}" id="${ie.title}"></h2>
   <div class="${ie["html-container"]}" id="${ie["html-container"]}"></div>
   <input class="${ie.input}" id="${ie.input}" />
   <input type="file" class="${ie.file}" />
   <div class="${ie.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${ie.select}" id="${ie.select}"></select>
   <div class="${ie.radio}"></div>
   <label class="${ie.checkbox}">
     <input type="checkbox" id="${ie.checkbox}" />
     <span class="${ie.label}"></span>
   </label>
   <textarea class="${ie.textarea}" id="${ie.textarea}"></textarea>
   <div class="${ie["validation-message"]}" id="${ie["validation-message"]}"></div>
   <div class="${ie.actions}">
     <div class="${ie.loader}"></div>
     <button type="button" class="${ie.confirm}"></button>
     <button type="button" class="${ie.deny}"></button>
     <button type="button" class="${ie.cancel}"></button>
   </div>
   <div class="${ie.footer}"></div>
   <div class="${ie["timer-progress-bar-container"]}">
     <div class="${ie["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),Ny=()=>{const t=Cn();return t?(t.remove(),ni([document.documentElement,document.body],[ie["no-backdrop"],ie["toast-shown"],ie["has-column"]]),!0):!1},Os=()=>{Ze.currentInstance.resetValidationMessage()},Fy=()=>{const t=St(),e=bs(t,ie.input),n=bs(t,ie.file),i=t.querySelector(`.${ie.range} input`),s=t.querySelector(`.${ie.range} output`),r=bs(t,ie.select),o=t.querySelector(`.${ie.checkbox} input`),a=bs(t,ie.textarea);e.oninput=Os,n.onchange=Os,r.onchange=Os,o.onchange=Os,a.oninput=Os,i.oninput=()=>{Os(),s.value=i.value},i.onchange=()=>{Os(),s.value=i.value}},ky=t=>typeof t=="string"?document.querySelector(t):t,By=t=>{const e=St();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},zy=t=>{window.getComputedStyle(t).direction==="rtl"&&Et(Cn(),ie.rtl)},Hy=t=>{const e=Ny();if(Uy()){lr("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=ie.container,e&&Et(n,ie["no-transition"]),jn(n,Oy),n.dataset.swal2Theme=t.theme;const i=ky(t.target);i.appendChild(n),t.topLayer&&(n.setAttribute("popover",""),n.showPopover()),By(t),zy(i),Fy()},Id=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?Vy(t,e):t&&jn(e,t)},Vy=(t,e)=>{t.jquery?Gy(e,t):jn(e,t.toString())},Gy=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},Wy=(t,e)=>{const n=ha(),i=ho();!n||!i||(!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?_n(n):an(n),Xn(n,e,"actions"),$y(n,i,e),jn(i,e.loaderHtml||""),Xn(i,e,"loader"))};function $y(t,e,n){const i=Li(),s=cr(),r=fo();!i||!s||!r||(pc(i,"confirm",n),pc(s,"deny",n),pc(r,"cancel",n),Xy(i,s,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,i),t.insertBefore(s,i)):(t.insertBefore(r,e),t.insertBefore(s,e),t.insertBefore(i,e))))}function Xy(t,e,n,i){if(!i.buttonsStyling){ni([t,e,n],ie.styled);return}Et([t,e,n],ie.styled),i.confirmButtonColor&&t.style.setProperty("--swal2-confirm-button-background-color",i.confirmButtonColor),i.denyButtonColor&&e.style.setProperty("--swal2-deny-button-background-color",i.denyButtonColor),i.cancelButtonColor&&n.style.setProperty("--swal2-cancel-button-background-color",i.cancelButtonColor),hc(t),hc(e),hc(n)}function hc(t){const e=window.getComputedStyle(t);if(e.getPropertyValue("--swal2-action-button-focus-box-shadow"))return;const n=e.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/,"rgba($1, $2, $3, 0.5)");t.style.setProperty("--swal2-action-button-focus-box-shadow",e.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/,` ${n}`))}function pc(t,e,n){const i=Sd(e);pa(t,n[`show${i}Button`],"inline-block"),jn(t,n[`${e}ButtonText`]||""),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]||""),t.className=ie[e],Xn(t,n,`${e}Button`)}const qy=(t,e)=>{const n=Cd();n&&(jn(n,e.closeButtonHtml||""),Xn(n,e,"closeButton"),pa(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel||""))},jy=(t,e)=>{const n=Cn();n&&(Yy(n,e.backdrop),Ky(n,e.position),Zy(n,e.grow),Xn(n,e,"container"))};function Yy(t,e){typeof e=="string"?t.style.background=e:e||Et([document.documentElement,document.body],ie["no-backdrop"])}function Ky(t,e){e&&(e in ie?Et(t,ie[e]):(An('The "position" parameter is not valid, defaulting to "center"'),Et(t,ie.center)))}function Zy(t,e){e&&Et(t,ie[`grow-${e}`])}var Ft={innerParams:new WeakMap,domCache:new WeakMap};const Qy=["input","file","range","select","radio","checkbox","textarea"],Jy=(t,e)=>{const n=St();if(!n)return;const i=Ft.innerParams.get(t),s=!i||e.input!==i.input;Qy.forEach(r=>{const o=bs(n,ie[r]);o&&(nb(r,e.inputAttributes),o.className=ie[r],s&&_n(o))}),e.input&&(s&&eb(e),ib(e))},eb=t=>{if(!t.input)return;if(!qt[t.input]){lr(`Unexpected type of input! Expected ${Object.keys(qt).join(" | ")}, got "${t.input}"`);return}const e=tg(t.input);if(!e)return;const n=qt[t.input](e,t);an(e),t.inputAutoFocus&&setTimeout(()=>{Qm(n)})},tb=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["id","type","value","style"].includes(n)||t.removeAttribute(n)}},nb=(t,e)=>{const n=St();if(!n)return;const i=ql(n,t);if(i){tb(i);for(const s in e)i.setAttribute(s,e[s])}},ib=t=>{if(!t.input)return;const e=tg(t.input);e&&Xn(e,t,"input")},Ud=(t,e)=>{!t.placeholder&&e.inputPlaceholder&&(t.placeholder=e.inputPlaceholder)},ma=(t,e,n)=>{if(n.inputLabel){const i=document.createElement("label"),s=ie["input-label"];i.setAttribute("for",t.id),i.className=s,typeof n.customClass=="object"&&Et(i,n.customClass.inputLabel),i.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",i)}},tg=t=>{const e=St();if(e)return bs(e,ie[t]||ie.input)},yl=(t,e)=>{["string","number"].includes(typeof e)?t.value=`${e}`:Ed(e)||An(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e}"`)},qt={};qt.text=qt.email=qt.password=qt.number=qt.tel=qt.url=qt.search=qt.date=qt["datetime-local"]=qt.time=qt.week=qt.month=(t,e)=>(yl(t,e.inputValue),ma(t,t,e),Ud(t,e),t.type=e.input,t);qt.file=(t,e)=>(ma(t,t,e),Ud(t,e),t);qt.range=(t,e)=>{const n=t.querySelector("input"),i=t.querySelector("output");return yl(n,e.inputValue),n.type=e.input,yl(i,e.inputValue),ma(n,t,e),t};qt.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");jn(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return ma(t,t,e),t};qt.radio=t=>(t.textContent="",t);qt.checkbox=(t,e)=>{const n=ql(St(),"checkbox");n.value="1",n.checked=!!e.inputValue;const i=t.querySelector("span");return jn(i,e.inputPlaceholder||e.inputLabel),n};qt.textarea=(t,e)=>{yl(t,e.inputValue),Ud(t,e),ma(t,t,e);const n=i=>parseInt(window.getComputedStyle(i).marginLeft)+parseInt(window.getComputedStyle(i).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const i=parseInt(window.getComputedStyle(St()).width),s=()=>{if(!document.body.contains(t))return;const r=t.offsetWidth+n(t);r>i?St().style.width=`${r}px`:er(St(),"width",e.width)};new MutationObserver(s).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const sb=(t,e)=>{const n=Td();n&&(Dd(n),Xn(n,e,"htmlContainer"),e.html?(Id(e.html,n),an(n,"block")):e.text?(n.textContent=e.text,an(n,"block")):_n(n),Jy(t,e))},rb=(t,e)=>{const n=Zm();n&&(Dd(n),pa(n,e.footer,"block"),e.footer&&Id(e.footer,n),Xn(n,e,"footer"))},ob=(t,e)=>{const n=Ft.innerParams.get(t),i=uo();if(!i)return;if(n&&e.icon===n.icon){eh(i,e),Jf(i,e);return}if(!e.icon&&!e.iconHtml){_n(i);return}if(e.icon&&Object.keys(xl).indexOf(e.icon)===-1){lr(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),_n(i);return}an(i),eh(i,e),Jf(i,e),Et(i,e.showClass&&e.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",ng)},Jf=(t,e)=>{for(const[n,i]of Object.entries(xl))e.icon!==n&&ni(t,i);Et(t,e.icon&&xl[e.icon]),cb(t,e),ng(),Xn(t,e,"icon")},ng=()=>{const t=St();if(!t)return;const e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let i=0;i<n.length;i++)n[i].style.backgroundColor=e},ab=t=>`
  ${t.animation?'<div class="swal2-success-circular-line-left"></div>':""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${t.animation?'<div class="swal2-success-fix"></div>':""}
  ${t.animation?'<div class="swal2-success-circular-line-right"></div>':""}
`,lb=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,eh=(t,e)=>{if(!e.icon&&!e.iconHtml)return;let n=t.innerHTML,i="";e.iconHtml?i=th(e.iconHtml):e.icon==="success"?(i=ab(e),n=n.replace(/ style=".*?"/g,"")):e.icon==="error"?i=lb:e.icon&&(i=th({question:"?",warning:"!",info:"i"}[e.icon])),n.trim()!==i.trim()&&jn(t,i)},cb=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Qf(t,n,"background-color",e.iconColor);Qf(t,".swal2-success-ring","border-color",e.iconColor)}},th=t=>`<div class="${ie["icon-content"]}">${t}</div>`,ub=(t,e)=>{const n=Km();if(n){if(!e.imageUrl){_n(n);return}an(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt||""),er(n,"width",e.imageWidth),er(n,"height",e.imageHeight),n.className=ie.image,Xn(n,e,"image")}};let Od=!1,ig=0,sg=0,rg=0,og=0;const db=t=>{t.addEventListener("mousedown",bl),document.body.addEventListener("mousemove",wl),t.addEventListener("mouseup",Sl),t.addEventListener("touchstart",bl),document.body.addEventListener("touchmove",wl),t.addEventListener("touchend",Sl)},fb=t=>{t.removeEventListener("mousedown",bl),document.body.removeEventListener("mousemove",wl),t.removeEventListener("mouseup",Sl),t.removeEventListener("touchstart",bl),document.body.removeEventListener("touchmove",wl),t.removeEventListener("touchend",Sl)},bl=t=>{const e=St();if(t.target===e||uo().contains(t.target)){Od=!0;const n=ag(t);ig=n.clientX,sg=n.clientY,rg=parseInt(e.style.insetInlineStart)||0,og=parseInt(e.style.insetBlockStart)||0,Et(e,"swal2-dragging")}},wl=t=>{const e=St();if(Od){let{clientX:n,clientY:i}=ag(t);e.style.insetInlineStart=`${rg+(n-ig)}px`,e.style.insetBlockStart=`${og+(i-sg)}px`}},Sl=()=>{const t=St();Od=!1,ni(t,"swal2-dragging")},ag=t=>{let e=0,n=0;return t.type.startsWith("mouse")?(e=t.clientX,n=t.clientY):t.type.startsWith("touch")&&(e=t.touches[0].clientX,n=t.touches[0].clientY),{clientX:e,clientY:n}},hb=(t,e)=>{const n=Cn(),i=St();if(!(!n||!i)){if(e.toast){er(n,"width",e.width),i.style.width="100%";const s=ho();s&&i.insertBefore(s,uo())}else er(i,"width",e.width);er(i,"padding",e.padding),e.color&&(i.style.color=e.color),e.background&&(i.style.background=e.background),_n(Wl()),pb(i,e),e.draggable&&!e.toast?(Et(i,ie.draggable),db(i)):(ni(i,ie.draggable),fb(i))}},pb=(t,e)=>{const n=e.showClass||{};t.className=`${ie.popup} ${Ln(t)?n.popup:""}`,e.toast?(Et([document.documentElement,document.body],ie["toast-shown"]),Et(t,ie.toast)):Et(t,ie.modal),Xn(t,e,"popup"),typeof e.customClass=="string"&&Et(t,e.customClass),e.icon&&Et(t,ie[`icon-${e.icon}`])},mb=(t,e)=>{const n=Ad();if(!n)return;const{progressSteps:i,currentProgressStep:s}=e;if(!i||i.length===0||s===void 0){_n(n);return}an(n),n.textContent="",s>=i.length&&An("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),i.forEach((r,o)=>{const a=gb(r);if(n.appendChild(a),o===s&&Et(a,ie["active-progress-step"]),o!==i.length-1){const l=vb(e);n.appendChild(l)}})},gb=t=>{const e=document.createElement("li");return Et(e,ie["progress-step"]),jn(e,t),e},vb=t=>{const e=document.createElement("li");return Et(e,ie["progress-step-line"]),t.progressStepsDistance&&er(e,"width",t.progressStepsDistance),e},_b=(t,e)=>{const n=Ym();n&&(Dd(n),pa(n,e.title||e.titleText,"block"),e.title&&Id(e.title,n),e.titleText&&(n.innerText=e.titleText),Xn(n,e,"title"))},lg=(t,e)=>{hb(t,e),jy(t,e),mb(t,e),ob(t,e),ub(t,e),_b(t,e),qy(t,e),sb(t,e),Wy(t,e),rb(t,e);const n=St();typeof e.didRender=="function"&&n&&e.didRender(n),Ze.eventEmitter.emit("didRender",n)},xb=()=>Ln(St()),cg=()=>{var t;return(t=Li())===null||t===void 0?void 0:t.click()},yb=()=>{var t;return(t=cr())===null||t===void 0?void 0:t.click()},bb=()=>{var t;return(t=fo())===null||t===void 0?void 0:t.click()},po=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),ug=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},wb=(t,e,n)=>{ug(t),e.toast||(t.keydownHandler=i=>Mb(e,i,n),t.keydownTarget=e.keydownListenerCapture?window:St(),t.keydownListenerCapture=e.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)},du=(t,e)=>{var n;const i=Rd();if(i.length){t=t+e,t===-2&&(t=i.length-1),t===i.length?t=0:t===-1&&(t=i.length-1),i[t].focus();return}(n=St())===null||n===void 0||n.focus()},dg=["ArrowRight","ArrowDown"],Sb=["ArrowLeft","ArrowUp"],Mb=(t,e,n)=>{t&&(e.isComposing||e.keyCode===229||(t.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?Eb(e,t):e.key==="Tab"?Tb(e):[...dg,...Sb].includes(e.key)?Ab(e.key):e.key==="Escape"&&Cb(e,t,n)))},Eb=(t,e)=>{if(!Gl(e.allowEnterKey))return;const n=ql(St(),e.input);if(t.target&&n&&t.target instanceof HTMLElement&&t.target.outerHTML===n.outerHTML){if(["textarea","file"].includes(e.input))return;cg(),t.preventDefault()}},Tb=t=>{const e=t.target,n=Rd();let i=-1;for(let s=0;s<n.length;s++)if(e===n[s]){i=s;break}t.shiftKey?du(i,-1):du(i,1),t.stopPropagation(),t.preventDefault()},Ab=t=>{const e=ha(),n=Li(),i=cr(),s=fo();if(!e||!n||!i||!s)return;const r=[n,i,s];if(document.activeElement instanceof HTMLElement&&!r.includes(document.activeElement))return;const o=dg.includes(t)?"nextElementSibling":"previousElementSibling";let a=document.activeElement;if(a){for(let l=0;l<e.children.length;l++){if(a=a[o],!a)return;if(a instanceof HTMLButtonElement&&Ln(a))break}a instanceof HTMLButtonElement&&a.focus()}},Cb=(t,e,n)=>{t.preventDefault(),Gl(e.allowEscapeKey)&&n(po.esc)};var to={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const Rb=()=>{const t=Cn();Array.from(document.body.children).forEach(n=>{n.contains(t)||(n.hasAttribute("aria-hidden")&&n.setAttribute("data-previous-aria-hidden",n.getAttribute("aria-hidden")||""),n.setAttribute("aria-hidden","true"))})},fg=()=>{Array.from(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||""),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},hg=typeof window<"u"&&!!window.GestureEvent,Pb=()=>{if(hg&&!Qi(document.body,ie.iosfix)){const t=document.body.scrollTop;document.body.style.top=`${t*-1}px`,Et(document.body,ie.iosfix),Db()}},Db=()=>{const t=Cn();if(!t)return;let e;t.ontouchstart=n=>{e=Lb(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},Lb=t=>{const e=t.target,n=Cn(),i=Td();return!n||!i||Ib(t)||Ub(t)?!1:e===n||!uu(n)&&e instanceof HTMLElement&&!Ly(e,i)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(uu(i)&&i.contains(e))},Ib=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",Ub=t=>t.touches&&t.touches.length>1,Ob=()=>{if(Qi(document.body,ie.iosfix)){const t=parseInt(document.body.style.top,10);ni(document.body,ie.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},Nb=()=>{const t=document.createElement("div");t.className=ie["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e};let Nr=null;const Fb=t=>{Nr===null&&(document.body.scrollHeight>window.innerHeight||t==="scroll")&&(Nr=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Nr+Nb()}px`)},kb=()=>{Nr!==null&&(document.body.style.paddingRight=`${Nr}px`,Nr=null)};function pg(t,e,n,i){Xl()?nh(t,i):(wy(n).then(()=>nh(t,i)),ug(Ze)),hg?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),Pd()&&(kb(),Ob(),fg()),Bb()}function Bb(){ni([document.documentElement,document.body],[ie.shown,ie["height-auto"],ie["no-backdrop"],ie["toast-shown"]])}function ws(t){t=Hb(t);const e=to.swalPromiseResolve.get(this),n=zb(this);this.isAwaitingPromise?t.isDismissed||(ga(this),e(t)):n&&e(t)}const zb=t=>{const e=St();if(!e)return!1;const n=Ft.innerParams.get(t);if(!n||Qi(e,n.hideClass.popup))return!1;ni(e,n.showClass.popup),Et(e,n.hideClass.popup);const i=Cn();return ni(i,n.showClass.backdrop),Et(i,n.hideClass.backdrop),Vb(t,e,n),!0};function mg(t){const e=to.swalPromiseReject.get(this);ga(this),e&&e(t)}const ga=t=>{t.isAwaitingPromise&&(delete t.isAwaitingPromise,Ft.innerParams.get(t)||t._destroy())},Hb=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),Vb=(t,e,n)=>{var i;const s=Cn(),r=eg(e);typeof n.willClose=="function"&&n.willClose(e),(i=Ze.eventEmitter)===null||i===void 0||i.emit("willClose",e),r?Gb(t,e,s,n.returnFocus,n.didClose):pg(t,s,n.returnFocus,n.didClose)},Gb=(t,e,n,i,s)=>{Ze.swalCloseEventFinishedCallback=pg.bind(null,t,n,i,s);const r=function(o){if(o.target===e){var a;(a=Ze.swalCloseEventFinishedCallback)===null||a===void 0||a.call(Ze),delete Ze.swalCloseEventFinishedCallback,e.removeEventListener("animationend",r),e.removeEventListener("transitionend",r)}};e.addEventListener("animationend",r),e.addEventListener("transitionend",r)},nh=(t,e)=>{setTimeout(()=>{var n;typeof e=="function"&&e.bind(t.params)(),(n=Ze.eventEmitter)===null||n===void 0||n.emit("didClose"),t._destroy&&t._destroy()})},no=t=>{let e=St();if(e||new On,e=St(),!e)return;const n=ho();Xl()?_n(uo()):Wb(e,t),an(n),e.setAttribute("data-loading","true"),e.setAttribute("aria-busy","true"),e.focus()},Wb=(t,e)=>{const n=ha(),i=ho();!n||!i||(!e&&Ln(Li())&&(e=Li()),an(n),e&&(_n(e),i.setAttribute("data-button-to-replace",e.className),n.insertBefore(i,e)),Et([t,n],ie.loading))},$b=(t,e)=>{e.input==="select"||e.input==="radio"?Kb(t,e):["text","email","number","tel","textarea"].some(n=>n===e.input)&&(Md(e.inputValue)||Ed(e.inputValue))&&(no(Li()),Zb(t,e))},Xb=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return qb(n);case"radio":return jb(n);case"file":return Yb(n);default:return e.inputAutoTrim?n.value.trim():n.value}},qb=t=>t.checked?1:0,jb=t=>t.checked?t.value:null,Yb=t=>t.files&&t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,Kb=(t,e)=>{const n=St();if(!n)return;const i=s=>{e.input==="select"?Qb(n,Ml(s),e):e.input==="radio"&&Jb(n,Ml(s),e)};Md(e.inputOptions)||Ed(e.inputOptions)?(no(Li()),da(e.inputOptions).then(s=>{t.hideLoading(),i(s)})):typeof e.inputOptions=="object"?i(e.inputOptions):lr(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},Zb=(t,e)=>{const n=t.getInput();n&&(_n(n),da(e.inputValue).then(i=>{n.value=e.input==="number"?`${parseFloat(i)||0}`:`${i}`,an(n),n.focus(),t.hideLoading()}).catch(i=>{lr(`Error in inputValue promise: ${i}`),n.value="",an(n),n.focus(),t.hideLoading()}))};function Qb(t,e,n){const i=bs(t,ie.select);if(!i)return;const s=(r,o,a)=>{const l=document.createElement("option");l.value=a,jn(l,o),l.selected=gg(a,n.inputValue),r.appendChild(l)};e.forEach(r=>{const o=r[0],a=r[1];if(Array.isArray(a)){const l=document.createElement("optgroup");l.label=o,l.disabled=!1,i.appendChild(l),a.forEach(c=>s(l,c[1],c[0]))}else s(i,a,o)}),i.focus()}function Jb(t,e,n){const i=bs(t,ie.radio);if(!i)return;e.forEach(r=>{const o=r[0],a=r[1],l=document.createElement("input"),c=document.createElement("label");l.type="radio",l.name=ie.radio,l.value=o,gg(o,n.inputValue)&&(l.checked=!0);const u=document.createElement("span");jn(u,a),u.className=ie.label,c.appendChild(l),c.appendChild(u),i.appendChild(c)});const s=i.querySelectorAll("input");s.length&&s[0].focus()}const Ml=t=>{const e=[];return t instanceof Map?t.forEach((n,i)=>{let s=n;typeof s=="object"&&(s=Ml(s)),e.push([i,s])}):Object.keys(t).forEach(n=>{let i=t[n];typeof i=="object"&&(i=Ml(i)),e.push([n,i])}),e},gg=(t,e)=>!!e&&e.toString()===t.toString(),ew=t=>{const e=Ft.innerParams.get(t);t.disableButtons(),e.input?vg(t,"confirm"):Fd(t,!0)},tw=t=>{const e=Ft.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?vg(t,"deny"):Nd(t,!1)},nw=(t,e)=>{t.disableButtons(),e(po.cancel)},vg=(t,e)=>{const n=Ft.innerParams.get(t);if(!n.input){lr(`The "input" parameter is needed to be set when using returnInputValueOn${Sd(e)}`);return}const i=t.getInput(),s=Xb(t,n);n.inputValidator?iw(t,s,e):i&&!i.checkValidity()?(t.enableButtons(),t.showValidationMessage(n.validationMessage||i.validationMessage)):e==="deny"?Nd(t,s):Fd(t,s)},iw=(t,e,n)=>{const i=Ft.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>da(i.inputValidator(e,i.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):n==="deny"?Nd(t,e):Fd(t,e)})},Nd=(t,e)=>{const n=Ft.innerParams.get(t||void 0);n.showLoaderOnDeny&&no(cr()),n.preDeny?(t.isAwaitingPromise=!0,Promise.resolve().then(()=>da(n.preDeny(e,n.validationMessage))).then(s=>{s===!1?(t.hideLoading(),ga(t)):t.close({isDenied:!0,value:typeof s>"u"?e:s})}).catch(s=>_g(t||void 0,s))):t.close({isDenied:!0,value:e})},ih=(t,e)=>{t.close({isConfirmed:!0,value:e})},_g=(t,e)=>{t.rejectPromise(e)},Fd=(t,e)=>{const n=Ft.innerParams.get(t||void 0);n.showLoaderOnConfirm&&no(),n.preConfirm?(t.resetValidationMessage(),t.isAwaitingPromise=!0,Promise.resolve().then(()=>da(n.preConfirm(e,n.validationMessage))).then(s=>{Ln(Wl())||s===!1?(t.hideLoading(),ga(t)):ih(t,typeof s>"u"?e:s)}).catch(s=>_g(t||void 0,s))):ih(t,e)};function El(){const t=Ft.innerParams.get(this);if(!t)return;const e=Ft.domCache.get(this);_n(e.loader),Xl()?t.icon&&an(uo()):sw(e),ni([e.popup,e.actions],ie.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const sw=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?an(e[0],"inline-block"):Dy()&&_n(t.actions)};function xg(){const t=Ft.innerParams.get(this),e=Ft.domCache.get(this);return e?ql(e.popup,t.input):null}function yg(t,e,n){const i=Ft.domCache.get(t);e.forEach(s=>{i[s].disabled=n})}function bg(t,e){const n=St();if(!(!n||!t))if(t.type==="radio"){const i=n.querySelectorAll(`[name="${ie.radio}"]`);for(let s=0;s<i.length;s++)i[s].disabled=e}else t.disabled=e}function wg(){yg(this,["confirmButton","denyButton","cancelButton"],!1)}function Sg(){yg(this,["confirmButton","denyButton","cancelButton"],!0)}function Mg(){bg(this.getInput(),!1)}function Eg(){bg(this.getInput(),!0)}function Tg(t){const e=Ft.domCache.get(this),n=Ft.innerParams.get(this);jn(e.validationMessage,t),e.validationMessage.className=ie["validation-message"],n.customClass&&n.customClass.validationMessage&&Et(e.validationMessage,n.customClass.validationMessage),an(e.validationMessage);const i=this.getInput();i&&(i.setAttribute("aria-invalid","true"),i.setAttribute("aria-describedby",ie["validation-message"]),Qm(i),Et(i,ie.inputerror))}function Ag(){const t=Ft.domCache.get(this);t.validationMessage&&_n(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),ni(e,ie.inputerror))}const Fr={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0,topLayer:!1},rw=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],ow={allowEnterKey:void 0},aw=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Cg=t=>Object.prototype.hasOwnProperty.call(Fr,t),Rg=t=>rw.indexOf(t)!==-1,Pg=t=>ow[t],lw=t=>{Cg(t)||An(`Unknown parameter "${t}"`)},cw=t=>{aw.includes(t)&&An(`The parameter "${t}" is incompatible with toasts`)},uw=t=>{const e=Pg(t);e&&jm(t,e)},Dg=t=>{t.backdrop===!1&&t.allowOutsideClick&&An('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),t.theme&&!["light","dark","auto","minimal","borderless","embed-iframe","bulma","bulma-light","bulma-dark"].includes(t.theme)&&An(`Invalid theme "${t.theme}"`);for(const e in t)lw(e),t.toast&&cw(e),uw(e)};function Lg(t){const e=Cn(),n=St(),i=Ft.innerParams.get(this);if(!n||Qi(n,i.hideClass.popup)){An("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const s=dw(t),r=Object.assign({},i,s);Dg(r),e.dataset.swal2Theme=r.theme,lg(this,r),Ft.innerParams.set(this,r),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const dw=t=>{const e={};return Object.keys(t).forEach(n=>{Rg(n)?e[n]=t[n]:An(`Invalid parameter to update: ${n}`)}),e};function Ig(){const t=Ft.domCache.get(this),e=Ft.innerParams.get(this);if(!e){Ug(this);return}t.popup&&Ze.swalCloseEventFinishedCallback&&(Ze.swalCloseEventFinishedCallback(),delete Ze.swalCloseEventFinishedCallback),typeof e.didDestroy=="function"&&e.didDestroy(),Ze.eventEmitter.emit("didDestroy"),fw(this)}const fw=t=>{Ug(t),delete t.params,delete Ze.keydownHandler,delete Ze.keydownTarget,delete Ze.currentInstance},Ug=t=>{t.isAwaitingPromise?(mc(Ft,t),t.isAwaitingPromise=!0):(mc(to,t),mc(Ft,t),delete t.isAwaitingPromise,delete t.disableButtons,delete t.enableButtons,delete t.getInput,delete t.disableInput,delete t.enableInput,delete t.hideLoading,delete t.disableLoading,delete t.showValidationMessage,delete t.resetValidationMessage,delete t.close,delete t.closePopup,delete t.closeModal,delete t.closeToast,delete t.rejectPromise,delete t.update,delete t._destroy)},mc=(t,e)=>{for(const n in t)t[n].delete(e)};var hw=Object.freeze({__proto__:null,_destroy:Ig,close:ws,closeModal:ws,closePopup:ws,closeToast:ws,disableButtons:Sg,disableInput:Eg,disableLoading:El,enableButtons:wg,enableInput:Mg,getInput:xg,handleAwaitingPromise:ga,hideLoading:El,rejectPromise:mg,resetValidationMessage:Ag,showValidationMessage:Tg,update:Lg});const pw=(t,e,n)=>{t.toast?mw(t,e,n):(vw(e),_w(e),xw(t,e,n))},mw=(t,e,n)=>{e.popup.onclick=()=>{t&&(gw(t)||t.timer||t.input)||n(po.close)}},gw=t=>!!(t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton);let Tl=!1;const vw=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=()=>{},e.target===t.container&&(Tl=!0)}}},_w=t=>{t.container.onmousedown=e=>{e.target===t.container&&e.preventDefault(),t.popup.onmouseup=function(n){t.popup.onmouseup=()=>{},(n.target===t.popup||n.target instanceof HTMLElement&&t.popup.contains(n.target))&&(Tl=!0)}}},xw=(t,e,n)=>{e.container.onclick=i=>{if(Tl){Tl=!1;return}i.target===e.container&&Gl(t.allowOutsideClick)&&n(po.backdrop)}},yw=t=>typeof t=="object"&&t.jquery,sh=t=>t instanceof Element||yw(t),bw=t=>{const e={};return typeof t[0]=="object"&&!sh(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,i)=>{const s=t[i];typeof s=="string"||sh(s)?e[n]=s:s!==void 0&&lr(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof s}`)}),e};function ww(...t){return new this(...t)}function Sw(t){class e extends this{_main(i,s){return super._main(i,Object.assign({},t,s))}}return e}const Mw=()=>Ze.timeout&&Ze.timeout.getTimerLeft(),Og=()=>{if(Ze.timeout)return Iy(),Ze.timeout.stop()},Ng=()=>{if(Ze.timeout){const t=Ze.timeout.start();return Ld(t),t}},Ew=()=>{const t=Ze.timeout;return t&&(t.running?Og():Ng())},Tw=t=>{if(Ze.timeout){const e=Ze.timeout.increase(t);return Ld(e,!0),e}},Aw=()=>!!(Ze.timeout&&Ze.timeout.isRunning());let rh=!1;const fu={};function Cw(t="data-swal-template"){fu[t]=this,rh||(document.body.addEventListener("click",Rw),rh=!0)}const Rw=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in fu){const i=e.getAttribute(n);if(i){fu[n].fire({template:i});return}}};class Pw{constructor(){this.events={}}_getHandlersByEventName(e){return typeof this.events[e]>"u"&&(this.events[e]=[]),this.events[e]}on(e,n){const i=this._getHandlersByEventName(e);i.includes(n)||i.push(n)}once(e,n){const i=(...s)=>{this.removeListener(e,i),n.apply(this,s)};this.on(e,i)}emit(e,...n){this._getHandlersByEventName(e).forEach(i=>{try{i.apply(this,n)}catch(s){console.error(s)}})}removeListener(e,n){const i=this._getHandlersByEventName(e),s=i.indexOf(n);s>-1&&i.splice(s,1)}removeAllListeners(e){this.events[e]!==void 0&&(this.events[e].length=0)}reset(){this.events={}}}Ze.eventEmitter=new Pw;const Dw=(t,e)=>{Ze.eventEmitter.on(t,e)},Lw=(t,e)=>{Ze.eventEmitter.once(t,e)},Iw=(t,e)=>{if(!t){Ze.eventEmitter.reset();return}e?Ze.eventEmitter.removeListener(t,e):Ze.eventEmitter.removeAllListeners(t)};var Uw=Object.freeze({__proto__:null,argsToParams:bw,bindClickHandler:Cw,clickCancel:bb,clickConfirm:cg,clickDeny:yb,enableLoading:no,fire:ww,getActions:ha,getCancelButton:fo,getCloseButton:Cd,getConfirmButton:Li,getContainer:Cn,getDenyButton:cr,getFocusableElements:Rd,getFooter:Zm,getHtmlContainer:Td,getIcon:uo,getIconContent:Ty,getImage:Km,getInputLabel:Ay,getLoader:ho,getPopup:St,getProgressSteps:Ad,getTimerLeft:Mw,getTimerProgressBar:$l,getTitle:Ym,getValidationMessage:Wl,increaseTimer:Tw,isDeprecatedParameter:Pg,isLoading:Ry,isTimerRunning:Aw,isUpdatableParameter:Rg,isValidParameter:Cg,isVisible:xb,mixin:Sw,off:Iw,on:Dw,once:Lw,resumeTimer:Ng,showLoading:no,stopTimer:Og,toggleTimer:Ew});class Ow{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Fg=["swal-title","swal-html","swal-footer"],Nw=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return Ww(n),Object.assign(Fw(n),kw(n),Bw(n),zw(n),Hw(n),Vw(n),Gw(n,Fg))},Fw=t=>{const e={};return Array.from(t.querySelectorAll("swal-param")).forEach(i=>{ir(i,["name","value"]);const s=i.getAttribute("name"),r=i.getAttribute("value");!s||!r||(typeof Fr[s]=="boolean"?e[s]=r!=="false":typeof Fr[s]=="object"?e[s]=JSON.parse(r):e[s]=r)}),e},kw=t=>{const e={};return Array.from(t.querySelectorAll("swal-function-param")).forEach(i=>{const s=i.getAttribute("name"),r=i.getAttribute("value");!s||!r||(e[s]=new Function(`return ${r}`)())}),e},Bw=t=>{const e={};return Array.from(t.querySelectorAll("swal-button")).forEach(i=>{ir(i,["type","color","aria-label"]);const s=i.getAttribute("type");!s||!["confirm","cancel","deny"].includes(s)||(e[`${s}ButtonText`]=i.innerHTML,e[`show${Sd(s)}Button`]=!0,i.hasAttribute("color")&&(e[`${s}ButtonColor`]=i.getAttribute("color")),i.hasAttribute("aria-label")&&(e[`${s}ButtonAriaLabel`]=i.getAttribute("aria-label")))}),e},zw=t=>{const e={},n=t.querySelector("swal-image");return n&&(ir(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")||void 0),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")||void 0),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")||void 0),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt")||void 0)),e},Hw=t=>{const e={},n=t.querySelector("swal-icon");return n&&(ir(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},Vw=t=>{const e={},n=t.querySelector("swal-input");n&&(ir(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const i=Array.from(t.querySelectorAll("swal-input-option"));return i.length&&(e.inputOptions={},i.forEach(s=>{ir(s,["value"]);const r=s.getAttribute("value");if(!r)return;const o=s.innerHTML;e.inputOptions[r]=o})),e},Gw=(t,e)=>{const n={};for(const i in e){const s=e[i],r=t.querySelector(s);r&&(ir(r,[]),n[s.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},Ww=t=>{const e=Fg.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(t.children).forEach(n=>{const i=n.tagName.toLowerCase();e.includes(i)||An(`Unrecognized element <${i}>`)})},ir=(t,e)=>{Array.from(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&An([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},kg=10,$w=t=>{const e=Cn(),n=St();typeof t.willOpen=="function"&&t.willOpen(n),Ze.eventEmitter.emit("willOpen",n);const s=window.getComputedStyle(document.body).overflowY;jw(e,n,t),setTimeout(()=>{Xw(e,n)},kg),Pd()&&(qw(e,t.scrollbarPadding,s),Rb()),!Xl()&&!Ze.previousActiveElement&&(Ze.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),Ze.eventEmitter.emit("didOpen",n),ni(e,ie["no-transition"])},Al=t=>{const e=St();if(t.target!==e)return;const n=Cn();e.removeEventListener("animationend",Al),e.removeEventListener("transitionend",Al),n.style.overflowY="auto"},Xw=(t,e)=>{eg(e)?(t.style.overflowY="hidden",e.addEventListener("animationend",Al),e.addEventListener("transitionend",Al)):t.style.overflowY="auto"},qw=(t,e,n)=>{Pb(),e&&n!=="hidden"&&Fb(n),setTimeout(()=>{t.scrollTop=0})},jw=(t,e,n)=>{Et(t,n.showClass.backdrop),n.animation?(e.style.setProperty("opacity","0","important"),an(e,"grid"),setTimeout(()=>{Et(e,n.showClass.popup),e.style.removeProperty("opacity")},kg)):an(e,"grid"),Et([document.documentElement,document.body],ie.shown),n.heightAuto&&n.backdrop&&!n.toast&&Et([document.documentElement,document.body],ie["height-auto"])};var oh={email:(t,e)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function Yw(t){t.inputValidator||(t.input==="email"&&(t.inputValidator=oh.email),t.input==="url"&&(t.inputValidator=oh.url))}function Kw(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(An('Target parameter is not valid, defaulting to "body"'),t.target="body")}function Zw(t){Yw(t),t.showLoaderOnConfirm&&!t.preConfirm&&An(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Kw(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),Hy(t)}let xi;var Aa=new WeakMap;class Yt{constructor(...e){if(_y(this,Aa,void 0),typeof window>"u")return;xi=this;const n=Object.freeze(this.constructor.argsToParams(e));this.params=n,this.isAwaitingPromise=!1,xy(Aa,this,this._main(xi.params))}_main(e,n={}){if(Dg(Object.assign({},n,e)),Ze.currentInstance){const r=to.swalPromiseResolve.get(Ze.currentInstance),{isAwaitingPromise:o}=Ze.currentInstance;Ze.currentInstance._destroy(),o||r({isDismissed:!0}),Pd()&&fg()}Ze.currentInstance=xi;const i=Jw(e,n);Zw(i),Object.freeze(i),Ze.timeout&&(Ze.timeout.stop(),delete Ze.timeout),clearTimeout(Ze.restoreFocusTimeout);const s=eS(xi);return lg(xi,i),Ft.innerParams.set(xi,i),Qw(xi,s,i)}then(e){return Kf(Aa,this).then(e)}finally(e){return Kf(Aa,this).finally(e)}}const Qw=(t,e,n)=>new Promise((i,s)=>{const r=o=>{t.close({isDismissed:!0,dismiss:o})};to.swalPromiseResolve.set(t,i),to.swalPromiseReject.set(t,s),e.confirmButton.onclick=()=>{ew(t)},e.denyButton.onclick=()=>{tw(t)},e.cancelButton.onclick=()=>{nw(t,r)},e.closeButton.onclick=()=>{r(po.close)},pw(n,e,r),wb(Ze,n,r),$b(t,n),$w(n),tS(Ze,n,r),nS(e,n),setTimeout(()=>{e.container.scrollTop=0})}),Jw=(t,e)=>{const n=Nw(t),i=Object.assign({},Fr,e,n,t);return i.showClass=Object.assign({},Fr.showClass,i.showClass),i.hideClass=Object.assign({},Fr.hideClass,i.hideClass),i.animation===!1&&(i.showClass={backdrop:"swal2-noanimation"},i.hideClass={}),i},eS=t=>{const e={popup:St(),container:Cn(),actions:ha(),confirmButton:Li(),denyButton:cr(),cancelButton:fo(),loader:ho(),closeButton:Cd(),validationMessage:Wl(),progressSteps:Ad()};return Ft.domCache.set(t,e),e},tS=(t,e,n)=>{const i=$l();_n(i),e.timer&&(t.timeout=new Ow(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(an(i),Xn(i,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&Ld(e.timer)})))},nS=(t,e)=>{if(!e.toast){if(!Gl(e.allowEnterKey)){jm("allowEnterKey"),rS();return}iS(t)||sS(t,e)||du(-1,1)}},iS=t=>{const e=Array.from(t.popup.querySelectorAll("[autofocus]"));for(const n of e)if(n instanceof HTMLElement&&Ln(n))return n.focus(),!0;return!1},sS=(t,e)=>e.focusDeny&&Ln(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&Ln(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&Ln(t.confirmButton)?(t.confirmButton.focus(),!0):!1,rS=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const t=new Date,e=localStorage.getItem("swal-initiation");e?(t.getTime()-Date.parse(e))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const n=document.createElement("audio");n.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",n.loop=!0,document.body.appendChild(n),setTimeout(()=>{n.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${t}`)}Yt.prototype.disableButtons=Sg;Yt.prototype.enableButtons=wg;Yt.prototype.getInput=xg;Yt.prototype.disableInput=Eg;Yt.prototype.enableInput=Mg;Yt.prototype.hideLoading=El;Yt.prototype.disableLoading=El;Yt.prototype.showValidationMessage=Tg;Yt.prototype.resetValidationMessage=Ag;Yt.prototype.close=ws;Yt.prototype.closePopup=ws;Yt.prototype.closeModal=ws;Yt.prototype.closeToast=ws;Yt.prototype.rejectPromise=mg;Yt.prototype.update=Lg;Yt.prototype._destroy=Ig;Object.assign(Yt,Uw);Object.keys(hw).forEach(t=>{Yt[t]=function(...e){return xi&&xi[t]?xi[t](...e):null}});Yt.DismissReason=po;Yt.version="11.22.3";const On=Yt;On.default=On;typeof document<"u"&&function(t,e){var n=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=e);else try{n.innerHTML=e}catch{n.innerText=e}}(document,':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.1s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px $swal2-outline-color;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');const vi=(t="Success!",e="Operation completed successfully")=>On.fire({icon:"success",title:t,text:e,confirmButtonText:"OK",confirmButtonColor:"#10b981"}),Wt=(t="Error!",e="Something went wrong")=>On.fire({icon:"error",title:t,text:e,confirmButtonText:"OK",confirmButtonColor:"#ef4444"}),EL=(t="Warning!",e="Please check your input")=>On.fire({icon:"warning",title:t,text:e,confirmButtonText:"OK",confirmButtonColor:"#f59e0b"}),So=(t="Info",e="Here is some information")=>On.fire({icon:"info",title:t,text:e,confirmButtonText:"OK",confirmButtonColor:"#3b82f6"}),gc=(t="Are you sure?",e="This action cannot be undone")=>On.fire({title:t,text:e,icon:"question",showCancelButton:!0,confirmButtonColor:"#10b981",cancelButtonColor:"#6b7280",confirmButtonText:"بله، ادامه بده",cancelButtonText:"لغو"}),TL=t=>On.fire({confirmButtonColor:"#10b981",cancelButtonColor:"#6b7280",...t}),AL=(t="Enter value",e="Value",n="Type here...")=>On.fire({title:t,inputLabel:e,input:"text",inputPlaceholder:n,showCancelButton:!0,confirmButtonColor:"#10b981",cancelButtonColor:"#6b7280",confirmButtonText:"ثبت",cancelButtonText:"لغو",inputValidator:i=>{if(!i)return"You need to write something!"}}),CL=(t="Loading...")=>{On.fire({title:t,allowOutsideClick:!1,didOpen:()=>{On.showLoading()}})},RL=()=>{On.close()},PL=(t,e="success",n="top-end")=>{On.mixin({toast:!0,position:n,showConfirmButton:!1,timer:3e3,timerProgressBar:!0}).fire({icon:e,title:t})},oS={class:"editor-container overflow-auto"},aS={class:"mobile-control-bar"},lS={key:0,class:"pinned-section"},cS={class:"pinned-section-header"},uS={class:"pinned-section-title"},dS={class:"pinned-section-content"},fS={key:0,class:"pinned-dimensions"},hS={class:"dimension-inputs"},pS={class:"dimension-label"},mS={class:"dimension-label"},gS={class:"cell-size-section"},vS={class:"dimension-inputs"},_S={class:"dimension-label"},xS={class:"dimension-label"},yS={key:1,class:"pinned-direction"},bS={class:"direction-toggle"},wS={class:"direction-toggle"},SS={key:2,class:"pinned-color"},MS={class:"color-picker-container"},ES={class:"color-value"},TS={class:"recent-colors-header"},AS={class:"recent-colors-grid"},CS=["title","onClick"],RS=["onClick"],PS={key:3,class:"pinned-mode"},DS={class:"mode-toggle"},LS={key:4,class:"pinned-image"},IS={class:"image-picker-container"},US={class:"available-images-grid"},OS=["onClick"],NS=["src","alt"],FS={class:"image-name"},kS={key:5,class:"pinned-tools"},BS={class:"tools-grid"},zS=["disabled"],HS=["disabled"],VS=["disabled"],GS={key:6,class:"pinned-export"},WS={class:"grid grid-cols-2 gap-2"},$S={class:"mobile-panel-content"},XS={class:"mobile-image-section"},qS={class:"upload-section grid grid-cols-2 gap-2"},jS={class:"upload-label"},YS={class:"upload-label"},KS={key:0,class:"image-preview"},ZS=["src"],QS={class:"mobile-controls-content"},JS={class:"controls-content"},eM={class:"dimensions-section"},tM={class:"section-header"},nM=["title"],iM={class:"dimension-inputs"},sM={class:"dimension-label"},rM={class:"dimension-label"},oM={class:"cell-size-section !mt-4"},aM={class:"dimension-inputs"},lM={class:"dimension-label"},cM={class:"dimension-label"},uM={class:"direction-section"},dM={class:"section-header"},fM=["title"],hM={class:"direction-toggle"},pM={class:"direction-toggle"},mM={class:"color-section"},gM={class:"section-header"},vM=["title"],_M={class:"color-picker-container"},xM={class:"color-value"},yM={class:"recent-colors-header mt-3!"},bM={class:"recent-colors-grid"},wM=["title","onClick"],SM=["onClick"],MM={class:"mode-section"},EM={class:"section-header"},TM=["title"],AM={class:"mode-toggle"},CM={key:0,class:"mode-section"},RM={class:"section-header"},PM=["title"],DM={class:"image-picker-container"},LM={class:"available-images-grid"},IM=["onClick"],UM=["src","alt"],OM={class:"image-name"},NM={key:0,class:"recent-images-section"},FM={class:"recent-images-grid"},kM=["onClick"],BM=["src","alt"],zM=["onClick"],HM={class:"tools-section"},VM={class:"section-header"},GM=["title"],WM={class:"tools-grid"},$M=["disabled"],XM=["disabled"],qM=["disabled"],jM={class:"background-color-section !mt-4"},YM={class:"background-mode-toggle"},KM={key:0,class:"background-color-controls"},ZM={key:1,class:"background-image-controls"},QM={class:"background-image-picker"},JM={class:"background-images-grid"},eE=["onClick"],tE=["src","alt"],nE={class:"background-image-name"},iE=["disabled"],sE={class:"export-section"},rE={class:"section-header"},oE=["title"],aE={class:"grid grid-cols-2 gap-2"},lE={class:"controls-panel"},cE={class:"controls-content"},uE={class:"dimensions-section"},dE={class:"dimension-inputs"},fE={class:"dimension-label"},hE={class:"dimension-label"},pE={class:"cell-size-section !mt-4"},mE={class:"dimension-inputs"},gE={class:"dimension-label"},vE={class:"dimension-label"},_E={class:"direction-section"},xE={class:"direction-toggle"},yE={class:"direction-toggle"},bE={class:"color-section"},wE={class:"color-picker-container"},SE={class:"color-value"},ME={class:"recent-colors-header mt-3!"},EE={class:"recent-colors-grid"},TE=["title","onClick"],AE=["onClick"],CE={class:"mode-section"},RE={class:"mode-toggle"},PE={key:0,class:"image-section"},DE={class:"image-picker-container"},LE={class:"available-images-grid"},IE=["onClick"],UE=["src","alt"],OE={class:"image-name"},NE={key:0,class:"recent-images-section"},FE={class:"recent-images-grid"},kE=["onClick"],BE=["src","alt"],zE=["onClick"],HE={class:"tools-section"},VE={class:"tools-grid"},GE=["disabled"],WE=["disabled"],$E=["disabled"],XE={class:"background-color-section !mt-4"},qE={class:"background-mode-toggle"},jE={key:0,class:"background-color-controls"},YE={key:1,class:"background-image-controls"},KE={class:"background-image-picker"},ZE={class:"background-images-grid"},QE=["onClick"],JE=["src","alt"],eT={class:"background-image-name"},tT=["disabled"],nT={class:"export-section"},iT={class:"grid grid-cols-2 gap-2"},sT={class:"image-section max-h-[70%]"},rT={class:"upload-section grid grid-cols-2 gap-2"},oT={class:"upload-label"},aT={class:"upload-label"},lT={key:0,class:"image-preview"},cT=["src"],uT=["onClick"],dT={__name:"GridEditor",emits:["update-grid"],setup(t,{emit:e}){const n=e,i=lt(16),s=lt(80),r=lt(15),o=lt(17),a=lt("#ff0000"),l=lt([]),c=lt(null),u=lt(!0),d=lt(!0),f=lt(null),h=lt("color"),v=lt(null),_=lt([]),m=lt([]),p=lt(!1),C=lt(null);function A(){p.value=!p.value}function w(z){C.value===z?C.value=null:(C.value=z,p.value=!1)}function U(){C.value=null}function L(z){return{dimensions:"📐 ابعاد شبکه",direction:"🔄 جهت",color:"🎨 انتخاب رنگ",mode:"🎨 حالت طراحی",image:"🖼️ انتخاب تصویر مهره",tools:"🛠️ ابزارها",export:"📤 خروجی"}[z]||z}const D=lt([]);function I(){try{const z={grid:D.value,rows:i.value,cols:s.value,recentColors:l.value,recentImages:_.value,timestamp:new Date().toISOString()};localStorage.setItem("gridEditorData",JSON.stringify(z)),c.value=z.timestamp,vi("ذخیره شد","گرید با موفقیت ذخیره شد")}catch(z){Wt("خطا در ذخیره","خطا در ذخیره گرید: "+z.message),console.error("Error saving grid:",z)}}function b(){try{const z=localStorage.getItem("gridEditorData");if(z){const S=JSON.parse(z);return S.grid&&Array.isArray(S.grid)&&S.rows&&S.cols&&S.grid.length===S.rows*S.cols?(i.value=S.rows,s.value=S.cols,D.value=[...S.grid],S.recentColors&&Array.isArray(S.recentColors)&&(l.value=[...S.recentColors]),S.recentImages&&Array.isArray(S.recentImages)&&(_.value=[...S.recentImages]),c.value=S.timestamp,nt.stacks=[],nt.index=-1,je(),n("update-grid",ke()),!0):(localStorage.removeItem("gridEditorData"),So("اطلاعات","داده‌های ذخیره شده نامعتبر بودند و حذف شدند"),!1)}return!1}catch(z){return Wt("خطا در بارگذاری","خطا در بارگذاری گرید: "+z.message),console.error("Error loading grid:",z),localStorage.removeItem("gridEditorData"),!1}}co(()=>{if(!b()){const S=i.value*s.value;D.value=Array(S).fill("#ffffff"),je()}M()});function M(){const z=["310.jpg","1130.jpg","1135.jpg","2116.jpg","2131.jpg","2132.jpg","725.jpg","877.jpg","f111.jpg","f222.jpg","f333.jpg","f444.jpg","f555.jpg","f666.jpg","f777.jpg","f888.jpg","f999.jpg"];m.value=z.map(S=>({name:S,url:`/miyuki-beads-designer/beads/${S}`,displayName:S.replace(".jpg","")}))}const R=lt([]),q=lt([]),j=lt({width:0,height:0}),J=lt({x:0,y:0}),le=lt(!1),G=lt("paint");let ue=!1,X=null,be=!1,Te=!1,Ne=!1,We=-1;const nt=oa({stacks:[],index:-1});function je(){nt.stacks=nt.stacks.slice(0,nt.index+1),nt.stacks.push([...D.value]),nt.index++}function re(){nt.index>0&&(nt.index--,D.value=[...nt.stacks[nt.index]])}function we(){nt.index<nt.stacks.length-1&&(nt.index++,D.value=[...nt.stacks[nt.index]])}je();function F(z){const S=z.target.files[0];if(S){const O=new FileReader;O.onload=pe=>{try{const Me=pe.target.result.trim(),Xe=JSON.parse(Me);if(Xe.grid&&Xe.rows&&Xe.cols){const{grid:Qe,rows:rt,cols:ot}=Xe;Array.isArray(Qe)&&Qe.every($e=>typeof $e=="string"&&($e.match(/^#[0-9A-Fa-f]{6}$/)||$e.startsWith("/miyuki-beads-designer/beads/")))?Qe.length===rt*ot?(i.value=rt,s.value=ot,la(()=>{D.value=[...Qe],je(),vi("بارگذاری شد",`گرید ${rt}×${ot} با موفقیت بارگذاری شد`)})):Wt("خطا در ابعاد",`تعداد سلول‌ها (${Qe.length}) با ابعاد اعلام شده (${rt}×${ot}) مطابقت ندارد`):Wt("خطا در فرمت فایل","فایل باید شامل آرایه‌ای معتبر از رنگ‌ها یا تصاویر باشد")}else if(Array.isArray(Xe)){const Qe=Xe;Qe.every(rt=>typeof rt=="string"&&(rt.match(/^#[0-9A-Fa-f]{6}$/)||rt.startsWith("/miyuki-beads-designer/beads/")))?Qe.length===i.value*s.value?(D.value=[...Qe],je(),vi("بارگذاری شد",`گرید با ابعاد فعلی (${i.value}×${s.value}) بارگذاری شد`)):Wt("خطا در ابعاد",`تعداد سلول‌ها (${Qe.length}) با ابعاد فعلی (${i.value}×${s.value}) مطابقت ندارد. لطفاً ابعاد را تنظیم کنید یا از فایل با فرمت جدید استفاده کنید.`):Wt("خطا در فرمت فایل","فایل باید شامل آرایه‌ای معتبر از رنگ‌ها یا تصاویر باشد")}else Wt("خطا در فرمت فایل","فرمت فایل نامعتبر است. فایل باید شامل آرایه‌ای از رنگ‌ها/تصاویر یا آبجکتی با grid، rows و cols باشد.")}catch(Me){Wt("خطا در خواندن فایل","خطا در خواندن فایل: "+Me.message),console.error("Error parsing text file:",Me)}},O.readAsText(S)}}hi([i,s],()=>{const z=i.value*s.value;D.value.length!==z&&(D.value=Array(z).fill("#ffffff"),q.value=[],j.value={width:0,height:0},R.value=[],le.value=!1,je())},{immediate:!0}),hi(D,()=>{setTimeout(()=>{try{const z={grid:D.value,rows:i.value,cols:s.value,recentColors:l.value,recentImages:_.value,timestamp:new Date().toISOString()};localStorage.setItem("gridEditorData",JSON.stringify(z)),c.value=z.timestamp}catch(z){console.error("Error auto-saving grid:",z)}},1e3)},{deep:!0});function oe(z){G.value=z,R.value=[],z!=="paste"&&(le.value=!1)}function se(){return q.value&&q.value.length>0&&j.value.width>0}function me(z){ue=!0;const S=N(z);G.value==="paint"?ee(S):G.value==="fill"?x(S,D.value[S],a.value):G.value==="select"&&(X=S,R.value=[S],be=!0)}function Ke(){ue&&je(),ue=!1,X=null}function P(z){if(!ue)return;const S=N(z);G.value==="paint"?ee(S):G.value==="select"&&be&&(R.value=K(X,S))}function g(z){z.preventDefault();const S=z.touches;if(Te=S.length>1,S.length===1){const O=S[0],pe=document.elementFromPoint(O.clientX,O.clientY);if(pe&&pe.classList.contains("cell")){const Me=Array.from(pe.parentNode.children).indexOf(pe);We=Me,Ne=!0,G.value==="paint"?ee(Me):G.value==="fill"?(x(Me,D.value[Me],a.value),je()):G.value==="select"&&(X=Me,R.value=[Me],be=!0)}}else Ne=!1}function B(z){const S=z.touches;if(S.length===1&&Ne&&!Te){z.preventDefault();const O=S[0],pe=document.elementFromPoint(O.clientX,O.clientY);if(pe&&pe.classList.contains("cell")){const Me=Array.from(pe.parentNode.children).indexOf(pe);Me!==We&&(We=Me,G.value==="paint"?ee(Me):G.value==="select"&&be&&(R.value=K(X,Me)))}}else S.length>1&&(Te=!0,Ne=!1)}function $(){Ne&&!Te&&G.value==="paint"&&je(),Ne=!1,Te=!1,We=-1,X=null,be=!1}function ee(z){h.value==="color"?(D.value[z]=a.value,W(a.value)):h.value==="image"&&v.value&&(D.value[z]=v.value.url,ge(v.value))}function W(z){const S=l.value.indexOf(z);S>-1&&l.value.splice(S,1),l.value.unshift(z),l.value.length>10&&(l.value=l.value.slice(0,10))}function ge(z){const S=_.value.findIndex(O=>O.url===z.url);S>-1&&_.value.splice(S,1),_.value.unshift(z),_.value.length>10&&(_.value=_.value.slice(0,10))}function Q(z){v.value=z,ge(z)}function ce(z){const S=_.value.findIndex(O=>O.url===z.url);S>-1&&_.value.splice(S,1)}async function fe(){(await gc("پاک کردن تصاویر","آیا می‌خواهید تمام تصاویر اخیر پاک شوند؟")).isConfirmed&&(_.value=[])}function Pe(z){const S=l.value.indexOf(z);S>-1&&l.value.splice(S,1)}async function E(){(await gc("پاک کردن رنگ‌ها","آیا می‌خواهید تمام رنگ‌های اخیر پاک شوند؟")).isConfirmed&&(l.value=[])}function x(z,S,O){if(S===O)return;const pe=[z],Me=new Set;for(;pe.length;){const Xe=pe.pop();if(Me.has(Xe)||D.value[Xe]!==S)continue;Me.add(Xe),D.value[Xe]=O;const Qe=Xe%i.value,rt=Math.floor(Xe/i.value);if(Qe>0){const ot=Xe-1;!Me.has(ot)&&D.value[ot]===S&&pe.push(ot)}if(Qe<i.value-1){const ot=Xe+1;!Me.has(ot)&&D.value[ot]===S&&pe.push(ot)}if(rt>0){const ot=Xe-i.value;!Me.has(ot)&&D.value[ot]===S&&pe.push(ot)}if(rt<s.value-1){const ot=Xe+i.value;!Me.has(ot)&&D.value[ot]===S&&pe.push(ot)}}W(O)}function N(z){const S=z.target;return Array.from(S.parentNode.children).indexOf(S)}function K(z,S){const O=z%i.value,pe=Math.floor(z/i.value),Me=S%i.value,Xe=Math.floor(S/i.value),Qe=Math.min(O,Me),rt=Math.max(O,Me),ot=Math.min(pe,Xe),$e=Math.max(pe,Xe),mt=[];for(let zt=ot;zt<=$e;zt++)for(let xn=Qe;xn<=rt;xn++){const ts=zt*i.value+xn;ts>=0&&ts<D.value.length&&mt.push(ts)}return mt}function ae(z){if(G.value==="paint")ee(z),je();else if(G.value==="fill")x(z,D.value[z],a.value),je();else if(G.value==="paste"&&le.value){const S=z%i.value,O=Math.floor(z/i.value);J.value={x:S,y:O},Fe()}}function Y(){if(R.value.length===0){Wt("خطا","ابتدا یک ناحیه انتخاب کنید");return}const z=i.value,S=Math.min(...R.value.map(rt=>rt%z)),O=Math.max(...R.value.map(rt=>rt%z)),pe=Math.min(...R.value.map(rt=>Math.floor(rt/z))),Me=Math.max(...R.value.map(rt=>Math.floor(rt/z))),Xe=O-S+1,Qe=Me-pe+1;j.value={width:Xe,height:Qe},q.value=[];for(let rt=0;rt<Qe;rt++){const ot=[];for(let $e=0;$e<Xe;$e++){const mt=(pe+rt)*z+(S+$e);ot.push(D.value[mt])}q.value.push(ot)}}function Le(){if(R.value.length===0){Wt("خطا","ابتدا یک ناحیه انتخاب کنید");return}Y(),R.value.forEach(z=>D.value[z]="#ffffff"),je()}function ve(){if(!se()){Wt("خطا","هیچ چیزی برای چسباندن وجود ندارد");return}let z=0,S=0;if(R.value.length>0){const O=i.value;z=Math.min(...R.value.map(pe=>pe%O)),S=Math.min(...R.value.map(pe=>Math.floor(pe/O)))}else z=Math.floor((i.value-j.value.width)/2),S=Math.floor((s.value-j.value.height)/2);for(let O=0;O<j.value.height;O++)for(let pe=0;pe<j.value.width;pe++){const Me=z+pe,Xe=S+O;if(Me>=0&&Me<i.value&&Xe>=0&&Xe<s.value){const Qe=Xe*i.value+Me;q.value[O]&&q.value[O][pe]&&(D.value[Qe]=q.value[O][pe])}}je()}function Ie(){R.value=[],be=!1}function Ue(){if(R.value.length===0){Wt("خطا","ابتدا یک ناحیه انتخاب کنید");return}try{const z=i.value,S=Math.min(...R.value.map($e=>$e%z)),O=Math.max(...R.value.map($e=>$e%z)),pe=Math.min(...R.value.map($e=>Math.floor($e/z))),Me=Math.max(...R.value.map($e=>Math.floor($e/z))),Xe=O-S+1,Qe=Me-pe+1,rt=[];for(let $e=0;$e<Qe;$e++){const mt=[];for(let zt=0;zt<Xe;zt++){const xn=(pe+$e)*z+(S+zt);R.value.includes(xn)?mt.push(D.value[xn]):mt.push("#ffffff")}rt.push(mt)}const ot=rt.map($e=>$e.reverse());for(let $e=0;$e<Qe;$e++)for(let mt=0;mt<Xe;mt++){const zt=(pe+$e)*z+(S+mt);R.value.includes(zt)&&(D.value[zt]=ot[$e][mt])}je(),vi("آینه شد","طرح انتخاب شده با موفقیت آینه شد")}catch(z){Wt("خطا در آینه کردن","خطا در آینه کردن طرح: "+z.message),console.error("Error mirroring selection:",z)}}function _e(){if(R.value.length===0){Wt("خطا","ابتدا یک ناحیه انتخاب کنید");return}try{const z=i.value,S=Math.min(...R.value.map($e=>$e%z)),O=Math.max(...R.value.map($e=>$e%z)),pe=Math.min(...R.value.map($e=>Math.floor($e/z))),Me=Math.max(...R.value.map($e=>Math.floor($e/z))),Xe=O-S+1,Qe=Me-pe+1,rt=[];for(let $e=0;$e<Qe;$e++){const mt=[];for(let zt=0;zt<Xe;zt++){const xn=(pe+$e)*z+(S+zt);R.value.includes(xn)?mt.push(D.value[xn]):mt.push("#ffffff")}rt.push(mt)}const ot=rt.reverse();for(let $e=0;$e<Qe;$e++)for(let mt=0;mt<Xe;mt++){const zt=(pe+$e)*z+(S+mt);R.value.includes(zt)&&(D.value[zt]=ot[$e][mt])}je(),vi("آینه عمودی شد","طرح انتخاب شده با موفقیت به صورت عمودی آینه شد")}catch(z){Wt("خطا در آینه عمودی","خطا در آینه عمودی کردن طرح: "+z.message),console.error("Error vertical mirroring selection:",z)}}function Ce(){if(!se()){Wt("خطا","هیچ چیزی برای چسباندن وجود ندارد");return}const z=Math.floor((i.value-j.value.width)/2),S=Math.floor((s.value-j.value.height)/2);for(let O=0;O<j.value.height;O++)for(let pe=0;pe<j.value.width;pe++){const Me=z+pe,Xe=S+O;if(Me>=0&&Me<i.value&&Xe>=0&&Xe<s.value){const Qe=Xe*i.value+Me;q.value[O]&&q.value[O][pe]&&(D.value[Qe]=q.value[O][pe])}}je()}function Be(){if(!se()){Wt("خطا","هیچ چیزی برای چسباندن وجود ندارد");return}le.value=!0,G.value="paste",R.value=[],So("انتخاب موقعیت","حالا روی صفحه کلیک کنید تا موقعیت چسباندن را انتخاب کنید")}function Fe(){if(!se()){Wt("خطا","هیچ چیزی برای چسباندن وجود ندارد");return}for(let z=0;z<j.value.height;z++)for(let S=0;S<j.value.width;S++){const O=J.value.x+S,pe=J.value.y+z;if(O>=0&&O<i.value&&pe>=0&&pe<s.value){const Me=pe*i.value+O;q.value[z]&&q.value[z][S]&&(D.value[Me]=q.value[z][S])}}je(),le.value=!1,G.value="paint"}function Ae(){le.value=!1,G.value="paint",So("لغو شد","حالت چسباندن لغو شد")}async function at(z,S,O,pe,Me,Xe){if(Xe.startsWith("/miyuki-beads-designer/beads/"))try{const Qe=new Image;Qe.crossOrigin="anonymous",await new Promise((rt,ot)=>{Qe.onload=rt,Qe.onerror=ot,Qe.src=Xe}),z.drawImage(Qe,S,O,pe,Me)}catch(Qe){console.warn("Failed to load image:",Xe,Qe),z.fillStyle="#cccccc",z.fillRect(S,O,pe,Me)}else z.fillStyle=Xe,z.fillRect(S,O,pe,Me)}async function k(){try{So("در حال پردازش...","لطفاً صبر کنید، در حال ایجاد عکس...");const z=document.createElement("canvas"),S=z.getContext("2d"),O=20,pe=i.value*r.value+O*2,Me=s.value*o.value+O*2;z.width=pe,z.height=Me,S.fillStyle="#ffffff",S.fillRect(0,0,pe,Me);for(let Xe=0;Xe<s.value;Xe++)for(let Qe=0;Qe<i.value;Qe++){const rt=Xe*i.value+Qe,ot=D.value[rt];if(ot){const $e=O+Qe*r.value,mt=O+Xe*o.value;await at(S,$e,mt,r.value,o.value,ot),S.strokeStyle="#e0e0e0",S.lineWidth=.5,S.strokeRect($e,mt,r.value,o.value)}}S.fillStyle="#000000",S.font="16px Arial",S.textAlign="center",S.fillText(`Grid: ${i.value}×${s.value}`,pe/2,O/2+10),z.toBlob(Xe=>{const Qe=URL.createObjectURL(Xe),rt=document.createElement("a");rt.href=Qe,rt.download=`grid_${i.value}x${s.value}_${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.png`,document.body.appendChild(rt),rt.click(),document.body.removeChild(rt),URL.revokeObjectURL(Qe),vi("موفقیت","عکس با موفقیت دانلود شد!")},"image/png")}catch(z){Wt("خطا در خروجی","خطا در ایجاد عکس: "+z.message),console.error("Error exporting grid as image:",z)}}async function ye(){try{So("در حال پردازش...","لطفاً صبر کنید، در حال ایجاد عکس HD...");const z=document.createElement("canvas"),S=z.getContext("2d"),O=r.value*2,pe=o.value*2,Me=40,Xe=i.value*O+Me*2,Qe=s.value*pe+Me*2;z.width=Xe,z.height=Qe,S.fillStyle="#ffffff",S.fillRect(0,0,Xe,Qe);for(let ot=0;ot<s.value;ot++)for(let $e=0;$e<i.value;$e++){const mt=ot*i.value+$e,zt=D.value[mt];if(zt){const xn=Me+$e*O,ts=Me+ot*pe;await at(S,xn,ts,O,pe,zt),S.strokeStyle="#d0d0d0",S.lineWidth=1,S.strokeRect(xn,ts,O,pe)}}S.fillStyle="#000000",S.font="bold 24px Arial",S.textAlign="center",S.fillText(`Grid: ${i.value}×${s.value}`,Xe/2,Me/2+20),S.font="16px Arial",S.fillStyle="#666666";const rt=new Date().toLocaleString("fa-IR");S.fillText(rt,Xe/2,Qe-Me/2),z.toBlob(ot=>{const $e=URL.createObjectURL(ot),mt=document.createElement("a");mt.href=$e,mt.download=`grid_HD_${i.value}x${s.value}_${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.png`,document.body.appendChild(mt),mt.click(),document.body.removeChild(mt),URL.revokeObjectURL($e),vi("موفقیت","عکس HD با موفقیت دانلود شد!")},"image/png",1)}catch(z){Wt("خطا در خروجی","خطا در ایجاد عکس HD: "+z.message),console.error("Error exporting grid as high quality image:",z)}}function Ee(){try{const z={grid:D.value,rows:i.value,cols:s.value,timestamp:new Date().toISOString()},S=JSON.stringify(z,null,2),O=new Blob([S],{type:"text/plain;charset=utf-8"}),pe=URL.createObjectURL(O),Me=document.createElement("a");Me.href=pe,Me.download=`grid_${i.value}x${s.value}_${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.txt`,document.body.appendChild(Me),Me.click(),document.body.removeChild(Me),URL.revokeObjectURL(pe),vi("موفقیت","فایل TXT با موفقیت دانلود شد!")}catch(z){Wt("خطا در خروجی","خطا در ایجاد فایل TXT: "+z.message),console.error("Error exporting grid as TXT:",z)}}function ke(){const z=[];for(let S=0;S<s.value;S++){const O=[];for(let pe=0;pe<i.value;pe++)O.push(D.value[S*i.value+pe]);z.push(O)}return z}function xe(z){const S=z.target.files[0];f.value=URL.createObjectURL(S)}const he=lt("#ffffff"),Re=lt("color"),qe=lt(null);async function Mt(){let z,S;if(Re.value==="color")z=he.value,S=`آیا می‌خواهید تمام مهره‌ها به رنگ ${z} تغییر یابند؟ این عملیات غیرقابل برگشت است.`;else if(Re.value==="image"&&qe.value)z=qe.value.url,S=`آیا می‌خواهید تمام مهره‌ها به تصویر ${qe.value.displayName} تغییر یابند؟ این عملیات غیرقابل برگشت است.`;else{Wt("خطا","لطفاً یک رنگ یا تصویر انتخاب کنید");return}if((await gc("تغییر تمام مهره‌ها",S)).isConfirmed){const pe=i.value*s.value;for(let Me=0;Me<pe;Me++)D.value[Me]=z;je(),Re.value==="color"?(W(z),vi("تغییر رنگ",`تمام مهره‌ها به رنگ ${z} تغییر یافتند`)):(ge(qe.value),vi("تغییر تصویر",`تمام مهره‌ها به تصویر ${qe.value.displayName} تغییر یافتند`))}}return(z,S)=>(He(),Ge("div",oS,[y("div",aS,[y("button",{class:it(["mobile-menu-btn",{active:p.value}]),onClick:A},S[58]||(S[58]=[y("span",{class:"menu-icon"},"☰",-1),y("span",{class:"menu-text"},"منو",-1)]),2),S[59]||(S[59]=y("div",{class:"mobile-title"},"🎨 ویرایشگر شبکه",-1))]),C.value?(He(),Ge("div",lS,[y("div",cS,[y("h4",uS,pt(L(C.value)),1),y("button",{class:"unpin-btn",title:"Unpin Section",onClick:U}," ✕ ")]),y("div",dS,[C.value==="dimensions"?(He(),Ge("div",fS,[y("div",hS,[y("label",pS,[S[60]||(S[60]=y("span",{class:"dimension-text"},"ستون ها:",-1)),Zt(y("input",{"onUpdate:modelValue":S[0]||(S[0]=O=>i.value=O),type:"number",min:"1",class:"dimension-input"},null,512),[[en,i.value,void 0,{number:!0}]])]),y("label",mS,[S[61]||(S[61]=y("span",{class:"dimension-text"},"ردیف ها:",-1)),Zt(y("input",{"onUpdate:modelValue":S[1]||(S[1]=O=>s.value=O),type:"number",min:"1",class:"dimension-input"},null,512),[[en,s.value,void 0,{number:!0}]])])]),y("div",gS,[S[64]||(S[64]=y("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"📏 اندازه سلول",-1)),y("div",vS,[y("label",_S,[S[62]||(S[62]=y("span",{class:"dimension-text"},"عرض:",-1)),Zt(y("input",{"onUpdate:modelValue":S[2]||(S[2]=O=>r.value=O),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[en,r.value,void 0,{number:!0}]])]),y("label",xS,[S[63]||(S[63]=y("span",{class:"dimension-text"},"ارتفاع:",-1)),Zt(y("input",{"onUpdate:modelValue":S[3]||(S[3]=O=>o.value=O),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[en,o.value,void 0,{number:!0}]])])])])])):Pt("",!0),C.value==="direction"?(He(),Ge("div",yS,[y("div",bS,[y("button",{class:it(["direction-btn",{active:u.value}]),onClick:S[4]||(S[4]=O=>u.value=!u.value)},pt(u.value?"عمودی":"افقی"),3)]),y("div",wS,[y("button",{class:it(["direction-btn",{active:d.value}]),onClick:S[5]||(S[5]=O=>d.value=!d.value)},pt(d.value?"گرید عمودی":"گرید افقی"),3)])])):Pt("",!0),C.value==="color"?(He(),Ge("div",SS,[y("div",MS,[Zt(y("input",{"onUpdate:modelValue":S[6]||(S[6]=O=>a.value=O),type:"color",class:"color-picker"},null,512),[[en,a.value]]),y("span",ES,pt(a.value),1)]),y("div",TS,[S[65]||(S[65]=y("h4",{class:"text-sm font-semibold text-gray-700"},"🔄 رنگ‌های اخیر",-1)),l.value.length>0?(He(),Ge("button",{key:0,class:"clear-colors-btn",title:"پاک کردن تمام رنگ‌ها",onClick:E}," 🗑️ پاک کردن ")):Pt("",!0)]),y("div",AS,[(He(!0),Ge(Bt,null,Mn(l.value,O=>(He(),Ge("div",{key:O,class:"color-swatch",style:Gn({backgroundColor:O}),title:O,onClick:pe=>a.value=O},[y("button",{class:"remove-color-btn",onClick:yo(pe=>Pe(O),["stop"])}," × ",8,RS)],12,CS))),128))])])):Pt("",!0),C.value==="mode"?(He(),Ge("div",PS,[y("div",DS,[y("button",{class:it(["mode-btn",{active:h.value==="color"}]),onClick:S[7]||(S[7]=O=>h.value="color")}," 🎨 رنگ ",2),y("button",{class:it(["mode-btn",{active:h.value==="image"}]),onClick:S[8]||(S[8]=O=>h.value="image")}," 🖼️ تصویر ",2)])])):Pt("",!0),C.value==="image"?(He(),Ge("div",LS,[y("div",IS,[y("div",US,[(He(!0),Ge(Bt,null,Mn(m.value,O=>{var pe;return He(),Ge("div",{key:O.name,class:it(["image-item",{selected:((pe=v.value)==null?void 0:pe.url)===O.url}]),onClick:Me=>Q(O)},[y("img",{src:O.url,alt:O.displayName,class:"bead-image"},null,8,NS),y("span",FS,pt(O.displayName),1)],10,OS)}),128))])])])):Pt("",!0),C.value==="tools"?(He(),Ge("div",kS,[y("div",BS,[y("button",{class:it(["tool-btn primary",{active:G.value==="paint"}]),onClick:S[9]||(S[9]=O=>oe("paint"))}," 🖌️ Paint ",2),y("button",{class:it(["tool-btn primary",{active:G.value==="fill"}]),onClick:S[10]||(S[10]=O=>oe("fill"))}," 🪣 Fill ",2),y("button",{class:it(["tool-btn secondary",{active:G.value==="select"}]),onClick:S[11]||(S[11]=O=>oe("select"))}," 📐 Select ",2),y("button",{class:"tool-btn secondary",onClick:Y}," 📋 Copy "),y("button",{class:"tool-btn secondary",onClick:Le}," ✂️ Cut "),y("button",{class:"tool-btn secondary",onClick:ve}," 📥 Paste "),y("button",{class:"tool-btn secondary",onClick:Ce}," 📍 Paste at Center "),y("button",{class:"tool-btn secondary",disabled:!se(),onClick:Be}," 🎯 Select Paste Position ",8,zS),le.value?(He(),Ge("button",{key:0,class:"tool-btn danger",onClick:Ae}," ❌ Cancel Paste ")):Pt("",!0),y("button",{class:"tool-btn secondary",onClick:Ie}," 🗑️ Clear Selection "),y("button",{class:"tool-btn secondary",disabled:R.value.length===0,onClick:Ue}," 🔄 Mirror Selection ",8,HS),y("button",{class:"tool-btn secondary",disabled:R.value.length===0,onClick:_e}," ↕️ Mirror Selection Vertical ",8,VS),y("button",{class:"tool-btn secondary",onClick:re}," ↩️ Undo "),y("button",{class:"tool-btn secondary",onClick:we}," ↪️ Redo ")])])):Pt("",!0),C.value==="export"?(He(),Ge("div",GS,[y("div",{class:"save-load-buttons"},[y("button",{class:"export-btn success",onClick:I}," 💾 ذخیره گرید "),y("button",{class:"export-btn info",onClick:b}," 📂 بارگذاری اخرین ذخیره ")]),y("div",WS,[y("button",{class:"export-btn primary",onClick:S[12]||(S[12]=O=>z.$emit("update-grid",ke()))}," 🚀 ارسال به 3D "),y("button",{class:"export-btn success",onClick:S[13]||(S[13]=()=>k())}," 📷 خروجی عکس "),y("button",{class:"export-btn info",onClick:S[14]||(S[14]=()=>ye())}," 🖼️ خروجی HD "),y("button",{class:"export-btn warning",onClick:Ee}," 📄 خروجی TXT ")])])):Pt("",!0)])])):Pt("",!0),y("div",{class:it(["mobile-dropdown-panel",{open:p.value}])},[y("div",$S,[y("div",XS,[y("div",qS,[y("label",jS,[S[66]||(S[66]=y("span",{class:"upload-text"},"📁 آپلود فایل txt grid",-1)),y("input",{type:"file",accept:".txt",class:"upload-input",onChange:F},null,32)]),y("label",YS,[S[67]||(S[67]=y("span",{class:"upload-text"},"📁 آپلود تصویر",-1)),y("input",{type:"file",accept:"image/*",class:"upload-input",onChange:xe},null,32)])]),f.value?(He(),Ge("div",KS,[y("img",{src:f.value,alt:"تصویر انتخاب شده",class:"preview-image"},null,8,ZS)])):Pt("",!0)]),y("div",QS,[S[83]||(S[83]=y("div",{class:"controls-header"},[y("h3",{class:"mb-4 text-lg font-bold text-gray-800"},"🎨 ابزارهای طراحی")],-1)),y("div",JS,[y("div",eM,[y("div",tM,[S[68]||(S[68]=y("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 📐 ابعاد شبکه ",-1)),y("button",{class:it(["pin-btn",{pinned:C.value==="dimensions"}]),title:C.value==="dimensions"?"Unpin Section":"Pin Section",onClick:S[15]||(S[15]=O=>w("dimensions"))},pt((C.value==="dimensions","📌")),11,nM)]),y("div",iM,[y("label",sM,[S[69]||(S[69]=y("span",{class:"dimension-text"},"ستون ها:",-1)),Zt(y("input",{"onUpdate:modelValue":S[16]||(S[16]=O=>i.value=O),type:"number",min:"1",class:"dimension-input"},null,512),[[en,i.value,void 0,{number:!0}]])]),y("label",rM,[S[70]||(S[70]=y("span",{class:"dimension-text"},"ردیف ها:",-1)),Zt(y("input",{"onUpdate:modelValue":S[17]||(S[17]=O=>s.value=O),type:"number",min:"1",class:"dimension-input"},null,512),[[en,s.value,void 0,{number:!0}]])])]),y("div",oM,[S[73]||(S[73]=y("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 📏 اندازه سلول ",-1)),y("div",aM,[y("label",lM,[S[71]||(S[71]=y("span",{class:"dimension-text"},"عرض:",-1)),Zt(y("input",{"onUpdate:modelValue":S[18]||(S[18]=O=>r.value=O),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[en,r.value,void 0,{number:!0}]])]),y("label",cM,[S[72]||(S[72]=y("span",{class:"dimension-text"},"ارتفاع:",-1)),Zt(y("input",{"onUpdate:modelValue":S[19]||(S[19]=O=>o.value=O),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[en,o.value,void 0,{number:!0}]])])])])]),y("div",uM,[y("div",dM,[S[74]||(S[74]=y("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🔄 جهت ",-1)),y("button",{class:it(["pin-btn",{pinned:C.value==="direction"}]),title:C.value==="direction"?"Unpin Section":"Pin Section",onClick:S[20]||(S[20]=O=>w("direction"))},pt((C.value==="direction","📌")),11,fM)]),y("div",hM,[y("button",{class:it(["direction-btn",{active:u.value}]),onClick:S[21]||(S[21]=O=>u.value=!u.value)},pt(u.value?"عمودی":"افقی"),3)]),y("div",pM,[y("button",{class:it(["direction-btn",{active:d.value}]),onClick:S[22]||(S[22]=O=>d.value=!d.value)},pt(d.value?"گرید عمودی":"گرید افقی"),3)])]),y("div",mM,[y("div",gM,[S[75]||(S[75]=y("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🎨 انتخاب رنگ ",-1)),y("button",{class:it(["pin-btn",{pinned:C.value==="color"}]),title:C.value==="color"?"Unpin Section":"Pin Section",onClick:S[23]||(S[23]=O=>w("color"))},pt((C.value==="color","📌")),11,vM)]),y("div",_M,[Zt(y("input",{"onUpdate:modelValue":S[24]||(S[24]=O=>a.value=O),type:"color",class:"color-picker"},null,512),[[en,a.value]]),y("span",xM,pt(a.value),1)]),y("div",yM,[S[76]||(S[76]=y("h4",{class:"text-sm font-semibold text-gray-700"},"🔄 رنگ‌های اخیر",-1)),l.value.length>0?(He(),Ge("button",{key:0,class:"clear-colors-btn",title:"پاک کردن تمام رنگ‌ها",onClick:E}," 🗑️ پاک کردن ")):Pt("",!0)]),y("div",bM,[(He(!0),Ge(Bt,null,Mn(l.value,O=>(He(),Ge("div",{key:O,class:"color-swatch",style:Gn({backgroundColor:O}),title:O,onClick:pe=>a.value=O},[y("button",{class:"remove-color-btn",onClick:yo(pe=>Pe(O),["stop"])}," × ",8,SM)],12,wM))),128))])]),y("div",MM,[y("div",EM,[S[77]||(S[77]=y("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🎨 حالت طراحی ",-1)),y("button",{class:it(["pin-btn",{pinned:C.value==="mode"}]),title:C.value==="mode"?"Unpin Section":"Pin Section",onClick:S[25]||(S[25]=O=>w("mode"))},pt((C.value==="mode","📌")),11,TM)]),y("div",AM,[y("button",{class:it(["mode-btn",{active:h.value==="color"}]),onClick:S[26]||(S[26]=O=>h.value="color")}," 🎨 رنگ ",2),y("button",{class:it(["mode-btn",{active:h.value==="image"}]),onClick:S[27]||(S[27]=O=>h.value="image")}," 🖼️ تصویر ",2)])]),h.value==="image"?(He(),Ge("div",CM,[y("div",RM,[S[78]||(S[78]=y("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🖼️ انتخاب تصویر مهره ",-1)),y("button",{class:it(["pin-btn",{pinned:C.value==="image"}]),title:C.value==="image"?"Unpin Section":"Pin Section",onClick:S[28]||(S[28]=O=>w("image"))},pt((C.value==="image","📌")),11,PM)]),y("div",DM,[y("div",LM,[(He(!0),Ge(Bt,null,Mn(m.value,O=>{var pe;return He(),Ge("div",{key:O.name,class:it(["image-item",{selected:((pe=v.value)==null?void 0:pe.url)===O.url}]),onClick:Me=>Q(O)},[y("img",{src:O.url,alt:O.displayName,class:"bead-image"},null,8,UM),y("span",OM,pt(O.displayName),1)],10,IM)}),128))])]),_.value.length>0?(He(),Ge("div",NM,[y("div",{class:"recent-images-header"},[S[79]||(S[79]=y("h4",{class:"text-sm font-semibold text-gray-700"},"🔄 تصاویر اخیر",-1)),y("button",{class:"clear-images-btn",title:"پاک کردن تمام تصاویر",onClick:fe}," 🗑️ پاک کردن ")]),y("div",FM,[(He(!0),Ge(Bt,null,Mn(_.value,O=>{var pe;return He(),Ge("div",{key:O.url,class:it(["recent-image-item",{selected:((pe=v.value)==null?void 0:pe.url)===O.url}]),onClick:Me=>Q(O)},[y("img",{src:O.url,alt:O.displayName,class:"recent-bead-image"},null,8,BM),y("button",{class:"remove-image-btn",onClick:yo(Me=>ce(O),["stop"])}," × ",8,zM)],10,kM)}),128))])])):Pt("",!0)])):Pt("",!0),y("div",HM,[y("div",VM,[S[80]||(S[80]=y("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"🛠️ ابزارها",-1)),y("button",{class:it(["pin-btn",{pinned:C.value==="tools"}]),title:C.value==="tools"?"Unpin Section":"Pin Section",onClick:S[29]||(S[29]=O=>w("tools"))},pt((C.value==="tools","📌")),11,GM)]),y("div",WM,[y("button",{class:it(["tool-btn primary",{active:G.value==="paint"}]),onClick:S[30]||(S[30]=O=>oe("paint"))}," 🖌️ Paint ",2),y("button",{class:it(["tool-btn primary",{active:G.value==="fill"}]),onClick:S[31]||(S[31]=O=>oe("fill"))}," 🪣 Fill ",2),y("button",{class:it(["tool-btn secondary",{active:G.value==="select"}]),onClick:S[32]||(S[32]=O=>oe("select"))}," 📐 Select ",2),y("button",{class:"tool-btn secondary",onClick:Y}," 📋 Copy "),y("button",{class:"tool-btn secondary",onClick:Le}," ✂️ Cut "),y("button",{class:"tool-btn secondary",onClick:ve}," 📥 Paste "),y("button",{class:"tool-btn secondary",onClick:Ce}," 📍 Paste at Center "),y("button",{class:"tool-btn secondary",disabled:!se(),onClick:Be}," 🎯 Select Paste Position ",8,$M),le.value?(He(),Ge("button",{key:0,class:"tool-btn danger",onClick:Ae}," ❌ Cancel Paste ")):Pt("",!0),y("button",{class:"tool-btn secondary",onClick:Ie}," 🗑️ Clear Selection "),y("button",{class:"tool-btn secondary",disabled:R.value.length===0,onClick:Ue}," 🔄 Mirror Selection ",8,XM),y("button",{class:"tool-btn secondary",disabled:R.value.length===0,onClick:_e}," ↕️ Mirror Selection Vertical ",8,qM),y("button",{class:"tool-btn secondary",onClick:re}," ↩️ Undo "),y("button",{class:"tool-btn secondary",onClick:we}," ↪️ Redo ")]),y("div",jM,[S[81]||(S[81]=y("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"🎨 پس‌زمینه",-1)),y("div",YM,[y("button",{class:it(["mode-btn",{active:Re.value==="color"}]),onClick:S[33]||(S[33]=O=>Re.value="color")}," 🎨 رنگ ",2),y("button",{class:it(["mode-btn",{active:Re.value==="image"}]),onClick:S[34]||(S[34]=O=>Re.value="image")}," 🖼️ تصویر ",2)]),Re.value==="color"?(He(),Ge("div",KM,[Zt(y("input",{"onUpdate:modelValue":S[35]||(S[35]=O=>he.value=O),type:"color",class:"color-picker",title:"انتخاب رنگ پس‌زمینه"},null,512),[[en,he.value]]),y("button",{class:"tool-btn success",onClick:Mt}," 🎨 تغییر تمام مهره‌ها ")])):Pt("",!0),Re.value==="image"?(He(),Ge("div",ZM,[y("div",QM,[y("div",JM,[(He(!0),Ge(Bt,null,Mn(m.value,O=>{var pe;return He(),Ge("div",{key:O.name,class:it(["background-image-item",{selected:((pe=qe.value)==null?void 0:pe.url)===O.url}]),onClick:Me=>qe.value=O},[y("img",{src:O.url,alt:O.displayName,class:"background-bead-image"},null,8,tE),y("span",nE,pt(O.displayName),1)],10,eE)}),128))])]),y("button",{class:"tool-btn success",disabled:!qe.value,onClick:Mt}," 🖼️ تغییر تمام مهره‌ها ",8,iE)])):Pt("",!0)])]),y("div",sE,[y("div",rE,[S[82]||(S[82]=y("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"📤 خروجی",-1)),y("button",{class:it(["pin-btn",{pinned:C.value==="export"}]),title:C.value==="export"?"Unpin Section":"Pin Section",onClick:S[36]||(S[36]=O=>w("export"))},pt((C.value==="export","📌")),11,oE)]),y("div",{class:"save-load-buttons mb-3"},[y("button",{class:"export-btn success",onClick:I}," 💾 ذخیره گرید "),y("button",{class:"export-btn info",onClick:b}," 📂 بارگذاری اخرین ذخیره ")]),y("div",aE,[y("button",{class:"export-btn primary",onClick:S[37]||(S[37]=O=>z.$emit("update-grid",ke()))}," 🚀 ارسال به 3D "),y("button",{class:"export-btn success",onClick:S[38]||(S[38]=()=>k())}," 📷 خروجی عکس "),y("button",{class:"export-btn info",onClick:S[39]||(S[39]=()=>ye())}," 🖼️ خروجی HD "),y("button",{class:"export-btn warning",onClick:Ee}," 📄 خروجی TXT ")])])])])])],2),y("div",lE,[S[99]||(S[99]=y("div",{class:"controls-header"},[y("h3",{class:"mb-4 text-lg font-bold text-gray-800"},"🎨 ابزارهای طراحی")],-1)),y("div",cE,[y("div",uE,[S[89]||(S[89]=y("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 📐 ابعاد شبکه ",-1)),y("div",dE,[y("label",fE,[S[84]||(S[84]=y("span",{class:"dimension-text"},"ستون ها:",-1)),Zt(y("input",{"onUpdate:modelValue":S[40]||(S[40]=O=>i.value=O),type:"number",min:"1",class:"dimension-input"},null,512),[[en,i.value,void 0,{number:!0}]])]),y("label",hE,[S[85]||(S[85]=y("span",{class:"dimension-text"},"ردیف ها:",-1)),Zt(y("input",{"onUpdate:modelValue":S[41]||(S[41]=O=>s.value=O),type:"number",min:"1",class:"dimension-input"},null,512),[[en,s.value,void 0,{number:!0}]])])]),y("div",pE,[S[88]||(S[88]=y("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 📏 اندازه سلول ",-1)),y("div",mE,[y("label",gE,[S[86]||(S[86]=y("span",{class:"dimension-text"},"عرض:",-1)),Zt(y("input",{"onUpdate:modelValue":S[42]||(S[42]=O=>r.value=O),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[en,r.value,void 0,{number:!0}]])]),y("label",vE,[S[87]||(S[87]=y("span",{class:"dimension-text"},"ارتفاع:",-1)),Zt(y("input",{"onUpdate:modelValue":S[43]||(S[43]=O=>o.value=O),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[en,o.value,void 0,{number:!0}]])])])])]),y("div",_E,[S[90]||(S[90]=y("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🔄 جهت ",-1)),y("div",xE,[y("button",{class:it(["direction-btn",{active:u.value}]),onClick:S[44]||(S[44]=O=>u.value=!u.value)},pt(u.value?"عمودی":"افقی"),3)]),y("div",yE,[y("button",{class:it(["direction-btn",{active:d.value}]),onClick:S[45]||(S[45]=O=>d.value=!d.value)},pt(d.value?"گرید عمودی":"گرید افقی"),3)])]),y("div",bE,[S[92]||(S[92]=y("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🎨 انتخاب رنگ ",-1)),y("div",wE,[Zt(y("input",{"onUpdate:modelValue":S[46]||(S[46]=O=>a.value=O),type:"color",class:"color-picker"},null,512),[[en,a.value]]),y("span",SE,pt(a.value),1)]),y("div",ME,[S[91]||(S[91]=y("h4",{class:"text-sm font-semibold text-gray-700"},"🔄 رنگ‌های اخیر",-1)),l.value.length>0?(He(),Ge("button",{key:0,class:"clear-colors-btn",title:"پاک کردن تمام رنگ‌ها",onClick:E}," 🗑️ پاک کردن ")):Pt("",!0)]),y("div",EE,[(He(!0),Ge(Bt,null,Mn(l.value,O=>(He(),Ge("div",{key:O,class:"color-swatch",style:Gn({backgroundColor:O}),title:O,onClick:pe=>a.value=O},[y("button",{class:"remove-color-btn",onClick:yo(pe=>Pe(O),["stop"])}," × ",8,AE)],12,TE))),128))])]),y("div",CE,[S[93]||(S[93]=y("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🎨 حالت طراحی ",-1)),y("div",RE,[y("button",{class:it(["mode-btn",{active:h.value==="color"}]),onClick:S[47]||(S[47]=O=>h.value="color")}," 🎨 رنگ ",2),y("button",{class:it(["mode-btn",{active:h.value==="image"}]),onClick:S[48]||(S[48]=O=>h.value="image")}," 🖼️ تصویر ",2)])]),h.value==="image"?(He(),Ge("div",PE,[S[95]||(S[95]=y("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🖼️ انتخاب تصویر مهره ",-1)),y("div",DE,[y("div",LE,[(He(!0),Ge(Bt,null,Mn(m.value,O=>{var pe;return He(),Ge("div",{key:O.name,class:it(["image-item",{selected:((pe=v.value)==null?void 0:pe.url)===O.url}]),onClick:Me=>Q(O)},[y("img",{src:O.url,alt:O.displayName,class:"bead-image"},null,8,UE),y("span",OE,pt(O.displayName),1)],10,IE)}),128))])]),_.value.length>0?(He(),Ge("div",NE,[y("div",{class:"recent-images-header"},[S[94]||(S[94]=y("h4",{class:"text-sm font-semibold text-gray-700"},"🔄 تصاویر اخیر",-1)),y("button",{class:"clear-images-btn",title:"پاک کردن تمام تصاویر",onClick:fe}," 🗑️ پاک کردن ")]),y("div",FE,[(He(!0),Ge(Bt,null,Mn(_.value,O=>{var pe;return He(),Ge("div",{key:O.url,class:it(["recent-image-item",{selected:((pe=v.value)==null?void 0:pe.url)===O.url}]),onClick:Me=>Q(O)},[y("img",{src:O.url,alt:O.displayName,class:"recent-bead-image"},null,8,BE),y("button",{class:"remove-image-btn",onClick:yo(Me=>ce(O),["stop"])}," × ",8,zE)],10,kE)}),128))])])):Pt("",!0)])):Pt("",!0),y("div",HE,[S[97]||(S[97]=y("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"🛠️ ابزارها",-1)),y("div",VE,[y("button",{class:it(["tool-btn primary",{active:G.value==="paint"}]),onClick:S[49]||(S[49]=O=>oe("paint"))}," 🖌️ Paint ",2),y("button",{class:it(["tool-btn primary",{active:G.value==="fill"}]),onClick:S[50]||(S[50]=O=>oe("fill"))}," 🪣 Fill ",2),y("button",{class:it(["tool-btn secondary",{active:G.value==="select"}]),onClick:S[51]||(S[51]=O=>oe("select"))}," 📐 Select ",2),y("button",{class:"tool-btn secondary",onClick:Y}," 📋 Copy "),y("button",{class:"tool-btn secondary",onClick:Le}," ✂️ Cut "),y("button",{class:"tool-btn secondary",onClick:ve}," 📥 Paste "),y("button",{class:"tool-btn secondary",onClick:Ce}," 📍 Paste at Center "),y("button",{class:"tool-btn secondary",disabled:!se(),onClick:Be}," 🎯 Select Paste Position ",8,GE),le.value?(He(),Ge("button",{key:0,class:"tool-btn danger",onClick:Ae}," ❌ Cancel Paste ")):Pt("",!0),y("button",{class:"tool-btn secondary",onClick:Ie}," 🗑️ Clear Selection "),y("button",{class:"tool-btn secondary",disabled:R.value.length===0,onClick:Ue}," 🔄 Mirror Selection ",8,WE),y("button",{class:"tool-btn secondary",disabled:R.value.length===0,onClick:_e}," ↕️ Mirror Selection Vertical ",8,$E),y("button",{class:"tool-btn secondary",onClick:re}," ↩️ Undo "),y("button",{class:"tool-btn secondary",onClick:we}," ↪️ Redo ")]),y("div",XE,[S[96]||(S[96]=y("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"🎨 پس‌زمینه",-1)),y("div",qE,[y("button",{class:it(["mode-btn",{active:Re.value==="color"}]),onClick:S[52]||(S[52]=O=>Re.value="color")}," 🎨 رنگ ",2),y("button",{class:it(["mode-btn",{active:Re.value==="image"}]),onClick:S[53]||(S[53]=O=>Re.value="image")}," 🖼️ تصویر ",2)]),Re.value==="color"?(He(),Ge("div",jE,[Zt(y("input",{"onUpdate:modelValue":S[54]||(S[54]=O=>he.value=O),type:"color",class:"color-picker",title:"انتخاب رنگ پس‌زمینه"},null,512),[[en,he.value]]),y("button",{class:"tool-btn success",onClick:Mt}," 🎨 تغییر تمام مهره‌ها ")])):Pt("",!0),Re.value==="image"?(He(),Ge("div",YE,[y("div",KE,[y("div",ZE,[(He(!0),Ge(Bt,null,Mn(m.value,O=>{var pe;return He(),Ge("div",{key:O.name,class:it(["background-image-item",{selected:((pe=qe.value)==null?void 0:pe.url)===O.url}]),onClick:Me=>qe.value=O},[y("img",{src:O.url,alt:O.displayName,class:"background-bead-image"},null,8,JE),y("span",eT,pt(O.displayName),1)],10,QE)}),128))])]),y("button",{class:"tool-btn success",disabled:!qe.value,onClick:Mt}," 🖼️ تغییر تمام مهره‌ها ",8,tT)])):Pt("",!0)])]),y("div",nT,[S[98]||(S[98]=y("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"📤 خروجی",-1)),y("div",{class:"save-load-buttons mb-3"},[y("button",{class:"export-btn success",onClick:I}," 💾 ذخیره گرید "),y("button",{class:"export-btn info",onClick:b}," 📂 بارگذاری اخرین ذخیره ")]),y("div",iT,[y("button",{class:"export-btn primary",onClick:S[55]||(S[55]=O=>z.$emit("update-grid",ke()))}," 🚀 ارسال به 3D "),y("button",{class:"export-btn success",onClick:S[56]||(S[56]=()=>k())}," 📷 خروجی عکس "),y("button",{class:"export-btn info",onClick:S[57]||(S[57]=()=>ye())}," 🖼️ خروجی HD "),y("button",{class:"export-btn warning",onClick:Ee}," 📄 خروجی TXT ")])])])]),y("div",{class:it(["grid-container md:max-h-[calc(100vh_-_200px)]",{"!flex-row":u.value,"!flex-col-reverse":!u.value,"pinned-active":C.value}])},[y("div",sT,[y("div",rT,[y("label",oT,[S[100]||(S[100]=y("span",{class:"upload-text"},"📁 آپلود فایل txt grid",-1)),y("input",{type:"file",accept:".txt",class:"upload-input",onChange:F},null,32)]),y("label",aT,[S[101]||(S[101]=y("span",{class:"upload-text"},"📁 آپلود تصویر",-1)),y("input",{type:"file",accept:"image/*",class:"upload-input",onChange:xe},null,32)])]),f.value?(He(),Ge("div",lT,[y("img",{src:f.value,alt:"تصویر انتخاب شده",class:"preview-image"},null,8,cT)])):Pt("",!0)]),y("div",{class:it(["grid-wrapper",{"rotate-none":d.value," rotate-90 z-10 translate-x-[200%] min-h-fit! translate-y-[10%] h-fit! w-fit!":!d.value}])},[y("div",{class:"grid-item",style:Gn({gridTemplateColumns:`repeat(${i.value}, ${r.value}px)`,gridAutoRows:`${o.value}px`}),onMousedown:me,onMouseup:Ke,onMouseleave:Ke,onMousemove:P,onTouchstart:g,onTouchmove:B,onTouchend:$,onTouchcancel:$},[(He(!0),Ge(Bt,null,Mn(D.value,(O,pe)=>(He(),Ge("div",{key:pe,class:it(["cell",{"!border-red-200":pe==Math.floor(i.value*s.value/2)}]),style:Gn({backgroundColor:O.startsWith("/miyuki-beads-designer/beads/")?"transparent":O,backgroundImage:O.startsWith("/miyuki-beads-designer/beads/")?`url(${O})`:"none",backgroundSize:"cover",backgroundPosition:"center",border:R.value.includes(pe)?"2px dashed #ff4757":"1px solid #ddd",width:`${r.value}px`,height:`${o.value}px`,minWidth:`${r.value}px`,minHeight:`${o.value}px`}),onClick:Me=>ae(pe)},null,14,uT))),128))],36)],2)],2)]))}},fT=ua(dT,[["__scopeId","data-v-21df38ad"]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kd="179",kr={ROTATE:0,DOLLY:1,PAN:2},Rr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hT=0,ah=1,pT=2,Bg=1,mT=2,Vi=3,As=0,In=1,ji=2,Es=0,Br=1,lh=2,ch=3,uh=4,gT=5,Ws=100,vT=101,_T=102,xT=103,yT=104,bT=200,wT=201,ST=202,MT=203,hu=204,pu=205,ET=206,TT=207,AT=208,CT=209,RT=210,PT=211,DT=212,LT=213,IT=214,mu=0,gu=1,vu=2,io=3,_u=4,xu=5,yu=6,bu=7,zg=0,UT=1,OT=2,Ts=0,NT=1,FT=2,kT=3,BT=4,zT=5,HT=6,VT=7,Hg=300,so=301,ro=302,wu=303,Su=304,jl=306,Mu=1e3,Xs=1001,Eu=1002,pi=1003,GT=1004,Ca=1005,Ei=1006,vc=1007,qs=1008,Ii=1009,Vg=1010,Gg=1011,Ko=1012,Bd=1013,sr=1014,Yi=1015,va=1016,zd=1017,Hd=1018,Zo=1020,Wg=35902,$g=1021,Xg=1022,ui=1023,Qo=1026,Jo=1027,qg=1028,Vd=1029,jg=1030,Gd=1031,Wd=1033,il=33776,sl=33777,rl=33778,ol=33779,Tu=35840,Au=35841,Cu=35842,Ru=35843,Pu=36196,Du=37492,Lu=37496,Iu=37808,Uu=37809,Ou=37810,Nu=37811,Fu=37812,ku=37813,Bu=37814,zu=37815,Hu=37816,Vu=37817,Gu=37818,Wu=37819,$u=37820,Xu=37821,al=36492,qu=36494,ju=36495,Yg=36283,Yu=36284,Ku=36285,Zu=36286,WT=3200,$T=3201,Kg=0,XT=1,ms="",Jn="srgb",oo="srgb-linear",Cl="linear",Dt="srgb",hr=7680,dh=519,qT=512,jT=513,YT=514,Zg=515,KT=516,ZT=517,QT=518,JT=519,fh=35044,hh="300 es",Ti=2e3,Rl=2001;class ur{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ll=Math.PI/180,Qu=180/Math.PI;function _a(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[t&255]+cn[t>>8&255]+cn[t>>16&255]+cn[t>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[n&63|128]+cn[n>>8&255]+"-"+cn[n>>16&255]+cn[n>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function gt(t,e,n){return Math.max(e,Math.min(n,t))}function eA(t,e){return(t%e+e)%e}function _c(t,e,n){return(1-n)*t+n*e}function Mo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Pn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const tA={DEG2RAD:ll};class ct{constructor(e=0,n=0){ct.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rr{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const f=r[o+0],h=r[o+1],v=r[o+2],_=r[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=h,e[n+2]=v,e[n+3]=_;return}if(d!==_||l!==f||c!==h||u!==v){let m=1-a;const p=l*f+c*h+u*v+d*_,C=p>=0?1:-1,A=1-p*p;if(A>Number.EPSILON){const U=Math.sqrt(A),L=Math.atan2(U,p*C);m=Math.sin(m*L)/U,a=Math.sin(a*L)/U}const w=a*C;if(l=l*m+f*w,c=c*m+h*w,u=u*m+v*w,d=d*m+_*w,m===1-a){const U=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=U,c*=U,u*=U,d*=U}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],h=r[o+2],v=r[o+3];return e[n]=a*v+u*d+l*h-c*f,e[n+1]=l*v+u*f+c*d-a*h,e[n+2]=c*v+u*h+a*f-l*d,e[n+3]=u*v-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),h=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*h*v,this._y=c*h*d-f*u*v,this._z=c*u*v+f*h*d,this._w=c*u*d-f*h*v;break;case"YXZ":this._x=f*u*d+c*h*v,this._y=c*h*d-f*u*v,this._z=c*u*v-f*h*d,this._w=c*u*d+f*h*v;break;case"ZXY":this._x=f*u*d-c*h*v,this._y=c*h*d+f*u*v,this._z=c*u*v+f*h*d,this._w=c*u*d-f*h*v;break;case"ZYX":this._x=f*u*d-c*h*v,this._y=c*h*d+f*u*v,this._z=c*u*v-f*h*d,this._w=c*u*d+f*h*v;break;case"YZX":this._x=f*u*d+c*h*v,this._y=c*h*d+f*u*v,this._z=c*u*v-f*h*d,this._w=c*u*d-f*h*v;break;case"XZY":this._x=f*u*d-c*h*v,this._y=c*h*d-f*u*v,this._z=c*u*v+f*h*d,this._w=c*u*d+f*h*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-n;return this._w=h*o+n*this._w,this._x=h*i+n*this._x,this._y=h*s+n*this._y,this._z=h*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,n=0,i=0){Z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ph.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ph.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),d=2*(r*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xc.copy(this).projectOnVector(e),this.sub(xc)}reflect(e){return this.sub(xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xc=new Z,ph=new rr;class ft{constructor(e,n,i,s,r,o,a,l,c){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],v=i[8],_=s[0],m=s[3],p=s[6],C=s[1],A=s[4],w=s[7],U=s[2],L=s[5],D=s[8];return r[0]=o*_+a*C+l*U,r[3]=o*m+a*A+l*L,r[6]=o*p+a*w+l*D,r[1]=c*_+u*C+d*U,r[4]=c*m+u*A+d*L,r[7]=c*p+u*w+d*D,r[2]=f*_+h*C+v*U,r[5]=f*m+h*A+v*L,r[8]=f*p+h*w+v*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*r,h=c*r-o*l,v=n*d+i*f+s*h;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=d*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=f*_,e[4]=(u*n-s*l)*_,e[5]=(s*r-a*n)*_,e[6]=h*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*r)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(yc.makeScale(e,n)),this}rotate(e){return this.premultiply(yc.makeRotation(-e)),this}translate(e,n){return this.premultiply(yc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yc=new ft;function Qg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Pl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function nA(){const t=Pl("canvas");return t.style.display="block",t}const mh={};function zr(t){t in mh||(mh[t]=!0,console.warn(t))}function iA(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const gh=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vh=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sA(){const t={enabled:!0,workingColorSpace:oo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Dt&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Dt&&(s.r=Hr(s.r),s.g=Hr(s.g),s.b=Hr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ms?Cl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return zr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return zr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[oo]:{primaries:e,whitePoint:i,transfer:Cl,toXYZ:gh,fromXYZ:vh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Jn},outputColorSpaceConfig:{drawingBufferColorSpace:Jn}},[Jn]:{primaries:e,whitePoint:i,transfer:Dt,toXYZ:gh,fromXYZ:vh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Jn}}}),t}const wt=sA();function Ji(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Hr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let pr;class rA{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{pr===void 0&&(pr=Pl("canvas")),pr.width=e.width,pr.height=e.height;const s=pr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=pr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Pl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ji(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ji(n[i]/255)*255):n[i]=Ji(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oA=0;class $d{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oA++}),this.uuid=_a(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(bc(s[o].image)):r.push(bc(s[o]))}else r=bc(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function bc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?rA.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let aA=0;const wc=new Z;class Un extends ur{constructor(e=Un.DEFAULT_IMAGE,n=Un.DEFAULT_MAPPING,i=Xs,s=Xs,r=Ei,o=qs,a=ui,l=Ii,c=Un.DEFAULT_ANISOTROPY,u=ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:aA++}),this.uuid=_a(),this.name="",this.source=new $d(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wc).x}get height(){return this.source.getSize(wc).y}get depth(){return this.source.getSize(wc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mu:e.x=e.x-Math.floor(e.x);break;case Xs:e.x=e.x<0?0:1;break;case Eu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mu:e.y=e.y-Math.floor(e.y);break;case Xs:e.y=e.y<0?0:1;break;case Eu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=Hg;Un.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,n=0,i=0,s=1){Xt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],v=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(v+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const A=(c+1)/2,w=(h+1)/2,U=(p+1)/2,L=(u+f)/4,D=(d+_)/4,I=(v+m)/4;return A>w&&A>U?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=L/i,r=D/i):w>U?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=L/s,r=I/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=D/r,s=I/r),this.set(i,s,r,n),this}let C=Math.sqrt((m-v)*(m-v)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(C)<.001&&(C=1),this.x=(m-v)/C,this.y=(d-_)/C,this.z=(f-u)/C,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this.w=gt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this.w=gt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lA extends ur{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Xt(0,0,e,n),this.scissorTest=!1,this.viewport=new Xt(0,0,e,n);const s={width:e,height:n,depth:i.depth},r=new Un(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Ei,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new $d(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class or extends lA{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Jg extends Un{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=pi,this.minFilter=pi,this.wrapR=Xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cA extends Un{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=pi,this.minFilter=pi,this.wrapR=Xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xa{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ii.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ii.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ii.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ii):ii.fromBufferAttribute(r,o),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ra.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ra.copy(i.boundingBox)),Ra.applyMatrix4(e.matrixWorld),this.union(Ra)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Eo),Pa.subVectors(this.max,Eo),mr.subVectors(e.a,Eo),gr.subVectors(e.b,Eo),vr.subVectors(e.c,Eo),is.subVectors(gr,mr),ss.subVectors(vr,gr),Ns.subVectors(mr,vr);let n=[0,-is.z,is.y,0,-ss.z,ss.y,0,-Ns.z,Ns.y,is.z,0,-is.x,ss.z,0,-ss.x,Ns.z,0,-Ns.x,-is.y,is.x,0,-ss.y,ss.x,0,-Ns.y,Ns.x,0];return!Sc(n,mr,gr,vr,Pa)||(n=[1,0,0,0,1,0,0,0,1],!Sc(n,mr,gr,vr,Pa))?!1:(Da.crossVectors(is,ss),n=[Da.x,Da.y,Da.z],Sc(n,mr,gr,vr,Pa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],ii=new Z,Ra=new xa,mr=new Z,gr=new Z,vr=new Z,is=new Z,ss=new Z,Ns=new Z,Eo=new Z,Pa=new Z,Da=new Z,Fs=new Z;function Sc(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){Fs.fromArray(t,r);const a=s.x*Math.abs(Fs.x)+s.y*Math.abs(Fs.y)+s.z*Math.abs(Fs.z),l=e.dot(Fs),c=n.dot(Fs),u=i.dot(Fs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const uA=new xa,To=new Z,Mc=new Z;class Xd{constructor(e=new Z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):uA.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;To.subVectors(e,this.center);const n=To.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(To,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(To.copy(e.center).add(Mc)),this.expandByPoint(To.copy(e.center).sub(Mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ki=new Z,Ec=new Z,La=new Z,rs=new Z,Tc=new Z,Ia=new Z,Ac=new Z;class ev{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ki.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,n),ki.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Ec.copy(e).add(n).multiplyScalar(.5),La.copy(n).sub(e).normalize(),rs.copy(this.origin).sub(Ec);const r=e.distanceTo(n)*.5,o=-this.direction.dot(La),a=rs.dot(this.direction),l=-rs.dot(La),c=rs.lengthSq(),u=Math.abs(1-o*o);let d,f,h,v;if(u>0)if(d=o*l-a,f=o*a-l,v=r*u,d>=0)if(f>=-v)if(f<=v){const _=1/u;d*=_,f*=_,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ec).addScaledVector(La,f),h}intersectSphere(e,n){ki.subVectors(e.center,this.origin);const i=ki.dot(this.direction),s=ki.dot(ki)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,n,i,s,r){Tc.subVectors(n,e),Ia.subVectors(i,e),Ac.crossVectors(Tc,Ia);let o=this.direction.dot(Ac),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rs.subVectors(this.origin,e);const l=a*this.direction.dot(Ia.crossVectors(rs,Ia));if(l<0)return null;const c=a*this.direction.dot(Tc.cross(rs));if(c<0||l+c>o)return null;const u=-a*rs.dot(Ac);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,n,i,s,r,o,a,l,c,u,d,f,h,v,_,m){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,d,f,h,v,_,m)}set(e,n,i,s,r,o,a,l,c,u,d,f,h,v,_,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=v,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/_r.setFromMatrixColumn(e,0).length(),r=1/_r.setFromMatrixColumn(e,1).length(),o=1/_r.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,h=o*d,v=a*u,_=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=h+v*c,n[5]=f-_*c,n[9]=-a*l,n[2]=_-f*c,n[6]=v+h*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,v=c*u,_=c*d;n[0]=f+_*a,n[4]=v*a-h,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=h*a-v,n[6]=_+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,v=c*u,_=c*d;n[0]=f-_*a,n[4]=-o*d,n[8]=v+h*a,n[1]=h+v*a,n[5]=o*u,n[9]=_-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,h=o*d,v=a*u,_=a*d;n[0]=l*u,n[4]=v*c-h,n[8]=f*c+_,n[1]=l*d,n[5]=_*c+f,n[9]=h*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*c,v=a*l,_=a*c;n[0]=l*u,n[4]=_-f*d,n[8]=v*d+h,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*d+v,n[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,h=o*c,v=a*l,_=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+_,n[5]=o*u,n[9]=h*d-v,n[2]=v*d-h,n[6]=a*u,n[10]=_*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dA,e,fA)}lookAt(e,n,i){const s=this.elements;return kn.subVectors(e,n),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),os.crossVectors(i,kn),os.lengthSq()===0&&(Math.abs(i.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),os.crossVectors(i,kn)),os.normalize(),Ua.crossVectors(kn,os),s[0]=os.x,s[4]=Ua.x,s[8]=kn.x,s[1]=os.y,s[5]=Ua.y,s[9]=kn.y,s[2]=os.z,s[6]=Ua.z,s[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],v=i[2],_=i[6],m=i[10],p=i[14],C=i[3],A=i[7],w=i[11],U=i[15],L=s[0],D=s[4],I=s[8],b=s[12],M=s[1],R=s[5],q=s[9],j=s[13],J=s[2],le=s[6],G=s[10],ue=s[14],X=s[3],be=s[7],Te=s[11],Ne=s[15];return r[0]=o*L+a*M+l*J+c*X,r[4]=o*D+a*R+l*le+c*be,r[8]=o*I+a*q+l*G+c*Te,r[12]=o*b+a*j+l*ue+c*Ne,r[1]=u*L+d*M+f*J+h*X,r[5]=u*D+d*R+f*le+h*be,r[9]=u*I+d*q+f*G+h*Te,r[13]=u*b+d*j+f*ue+h*Ne,r[2]=v*L+_*M+m*J+p*X,r[6]=v*D+_*R+m*le+p*be,r[10]=v*I+_*q+m*G+p*Te,r[14]=v*b+_*j+m*ue+p*Ne,r[3]=C*L+A*M+w*J+U*X,r[7]=C*D+A*R+w*le+U*be,r[11]=C*I+A*q+w*G+U*Te,r[15]=C*b+A*j+w*ue+U*Ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],v=e[3],_=e[7],m=e[11],p=e[15];return v*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*h-i*l*h)+_*(+n*l*h-n*c*f+r*o*f-s*o*h+s*c*u-r*l*u)+m*(+n*c*d-n*a*h-r*o*d+i*o*h+r*a*u-i*c*u)+p*(-s*a*u-n*l*d+n*a*f+s*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],v=e[12],_=e[13],m=e[14],p=e[15],C=d*m*c-_*f*c+_*l*h-a*m*h-d*l*p+a*f*p,A=v*f*c-u*m*c-v*l*h+o*m*h+u*l*p-o*f*p,w=u*_*c-v*d*c+v*a*h-o*_*h-u*a*p+o*d*p,U=v*d*l-u*_*l-v*a*f+o*_*f+u*a*m-o*d*m,L=n*C+i*A+s*w+r*U;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/L;return e[0]=C*D,e[1]=(_*f*r-d*m*r-_*s*h+i*m*h+d*s*p-i*f*p)*D,e[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*D,e[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*h-i*l*h)*D,e[4]=A*D,e[5]=(u*m*r-v*f*r+v*s*h-n*m*h-u*s*p+n*f*p)*D,e[6]=(v*l*r-o*m*r-v*s*c+n*m*c+o*s*p-n*l*p)*D,e[7]=(o*f*r-u*l*r+u*s*c-n*f*c-o*s*h+n*l*h)*D,e[8]=w*D,e[9]=(v*d*r-u*_*r-v*i*h+n*_*h+u*i*p-n*d*p)*D,e[10]=(o*_*r-v*a*r+v*i*c-n*_*c-o*i*p+n*a*p)*D,e[11]=(u*a*r-o*d*r-u*i*c+n*d*c+o*i*h-n*a*h)*D,e[12]=U*D,e[13]=(u*_*s-v*d*s+v*i*f-n*_*f-u*i*m+n*d*m)*D,e[14]=(v*a*s-o*_*s-v*i*l+n*_*l+o*i*m-n*a*m)*D,e[15]=(o*d*s-u*a*s+u*i*l-n*d*l-o*i*f+n*a*f)*D,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,d=a+a,f=r*c,h=r*u,v=r*d,_=o*u,m=o*d,p=a*d,C=l*c,A=l*u,w=l*d,U=i.x,L=i.y,D=i.z;return s[0]=(1-(_+p))*U,s[1]=(h+w)*U,s[2]=(v-A)*U,s[3]=0,s[4]=(h-w)*L,s[5]=(1-(f+p))*L,s[6]=(m+C)*L,s[7]=0,s[8]=(v+A)*D,s[9]=(m-C)*D,s[10]=(1-(f+_))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let r=_r.set(s[0],s[1],s[2]).length();const o=_r.set(s[4],s[5],s[6]).length(),a=_r.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],si.copy(this);const c=1/r,u=1/o,d=1/a;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=u,si.elements[5]*=u,si.elements[6]*=u,si.elements[8]*=d,si.elements[9]*=d,si.elements[10]*=d,n.setFromRotationMatrix(si),i.x=r,i.y=o,i.z=a,this}makePerspective(e,n,i,s,r,o,a=Ti,l=!1){const c=this.elements,u=2*r/(n-e),d=2*r/(i-s),f=(n+e)/(n-e),h=(i+s)/(i-s);let v,_;if(l)v=r/(o-r),_=o*r/(o-r);else if(a===Ti)v=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Rl)v=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=Ti,l=!1){const c=this.elements,u=2/(n-e),d=2/(i-s),f=-(n+e)/(n-e),h=-(i+s)/(i-s);let v,_;if(l)v=1/(o-r),_=o/(o-r);else if(a===Ti)v=-2/(o-r),_=-(o+r)/(o-r);else if(a===Rl)v=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const _r=new Z,si=new jt,dA=new Z(0,0,0),fA=new Z(1,1,1),os=new Z,Ua=new Z,kn=new Z,_h=new jt,xh=new rr;class Ui{constructor(e=0,n=0,i=0,s=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(n){case"XYZ":this._y=Math.asin(gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return _h.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_h,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return xh.setFromEuler(this),this.setFromQuaternion(xh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class tv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hA=0;const yh=new Z,xr=new rr,Bi=new jt,Oa=new Z,Ao=new Z,pA=new Z,mA=new rr,bh=new Z(1,0,0),wh=new Z(0,1,0),Sh=new Z(0,0,1),Mh={type:"added"},gA={type:"removed"},yr={type:"childadded",child:null},Cc={type:"childremoved",child:null};class gn extends ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hA++}),this.uuid=_a(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new Z,n=new Ui,i=new rr,s=new Z(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new jt},normalMatrix:{value:new ft}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return xr.setFromAxisAngle(e,n),this.quaternion.multiply(xr),this}rotateOnWorldAxis(e,n){return xr.setFromAxisAngle(e,n),this.quaternion.premultiply(xr),this}rotateX(e){return this.rotateOnAxis(bh,e)}rotateY(e){return this.rotateOnAxis(wh,e)}rotateZ(e){return this.rotateOnAxis(Sh,e)}translateOnAxis(e,n){return yh.copy(e).applyQuaternion(this.quaternion),this.position.add(yh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(bh,e)}translateY(e){return this.translateOnAxis(wh,e)}translateZ(e){return this.translateOnAxis(Sh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Oa.copy(e):Oa.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(Ao,Oa,this.up):Bi.lookAt(Oa,Ao,this.up),this.quaternion.setFromRotationMatrix(Bi),s&&(Bi.extractRotation(s.matrixWorld),xr.setFromRotationMatrix(Bi),this.quaternion.premultiply(xr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mh),yr.child=e,this.dispatchEvent(yr),yr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(gA),Cc.child=e,this.dispatchEvent(Cc),Cc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mh),yr.child=e,this.dispatchEvent(yr),yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,e,pA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,mA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}gn.DEFAULT_UP=new Z(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ri=new Z,zi=new Z,Rc=new Z,Hi=new Z,br=new Z,wr=new Z,Eh=new Z,Pc=new Z,Dc=new Z,Lc=new Z,Ic=new Xt,Uc=new Xt,Oc=new Xt;class ci{constructor(e=new Z,n=new Z,i=new Z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),ri.subVectors(e,n),s.cross(ri);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){ri.subVectors(s,n),zi.subVectors(i,n),Rc.subVectors(e,n);const o=ri.dot(ri),a=ri.dot(zi),l=ri.dot(Rc),c=zi.dot(zi),u=zi.dot(Rc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,v=(o*u-a*l)*f;return r.set(1-h-v,v,h)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,Hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hi.x),l.addScaledVector(o,Hi.y),l.addScaledVector(a,Hi.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return Ic.setScalar(0),Uc.setScalar(0),Oc.setScalar(0),Ic.fromBufferAttribute(e,n),Uc.fromBufferAttribute(e,i),Oc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ic,r.x),o.addScaledVector(Uc,r.y),o.addScaledVector(Oc,r.z),o}static isFrontFacing(e,n,i,s){return ri.subVectors(i,n),zi.subVectors(e,n),ri.cross(zi).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),ri.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ci.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return ci.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;br.subVectors(s,i),wr.subVectors(r,i),Pc.subVectors(e,i);const l=br.dot(Pc),c=wr.dot(Pc);if(l<=0&&c<=0)return n.copy(i);Dc.subVectors(e,s);const u=br.dot(Dc),d=wr.dot(Dc);if(u>=0&&d<=u)return n.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(br,o);Lc.subVectors(e,r);const h=br.dot(Lc),v=wr.dot(Lc);if(v>=0&&h<=v)return n.copy(r);const _=h*c-l*v;if(_<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(wr,a);const m=u*v-h*d;if(m<=0&&d-u>=0&&h-v>=0)return Eh.subVectors(r,s),a=(d-u)/(d-u+(h-v)),n.copy(s).addScaledVector(Eh,a);const p=1/(m+_+f);return o=_*p,a=f*p,n.copy(i).addScaledVector(br,o).addScaledVector(wr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},Na={h:0,s:0,l:0};function Nc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class vt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=wt.workingColorSpace){return this.r=e,this.g=n,this.b=i,wt.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=wt.workingColorSpace){if(e=eA(e,1),n=gt(n,0,1),i=gt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Nc(o,r,e+1/3),this.g=Nc(o,r,e),this.b=Nc(o,r,e-1/3)}return wt.colorSpaceToWorking(this,s),this}setStyle(e,n=Jn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Jn){const i=nv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return wt.workingToColorSpace(un.copy(this),e),Math.round(gt(un.r*255,0,255))*65536+Math.round(gt(un.g*255,0,255))*256+Math.round(gt(un.b*255,0,255))}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=wt.workingColorSpace){wt.workingToColorSpace(un.copy(this),n);const i=un.r,s=un.g,r=un.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=wt.workingColorSpace){return wt.workingToColorSpace(un.copy(this),n),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=Jn){wt.workingToColorSpace(un.copy(this),e);const n=un.r,i=un.g,s=un.b;return e!==Jn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(as),this.setHSL(as.h+e,as.s+n,as.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(as),e.getHSL(Na);const i=_c(as.h,Na.h,n),s=_c(as.s,Na.s,n),r=_c(as.l,Na.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new vt;vt.NAMES=nv;let vA=0;class ya extends ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vA++}),this.uuid=_a(),this.name="",this.type="Material",this.blending=Br,this.side=As,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hu,this.blendDst=pu,this.blendEquation=Ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(i.blending=this.blending),this.side!==As&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hu&&(i.blendSrc=this.blendSrc),this.blendDst!==pu&&(i.blendDst=this.blendDst),this.blendEquation!==Ws&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==io&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class iv extends ya{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=zg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new Z,Fa=new ct;let _A=0;class Ci{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_A++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=fh,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Fa.fromBufferAttribute(this,n),Fa.applyMatrix3(e),this.setXY(n,Fa.x,Fa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix3(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix4(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.applyNormalMatrix(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.transformDirection(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Mo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Pn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Mo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Mo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Mo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Mo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),i=Pn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),i=Pn(i,this.array),s=Pn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),i=Pn(i,this.array),s=Pn(s,this.array),r=Pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fh&&(e.usage=this.usage),e}}class sv extends Ci{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class rv extends Ci{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ri extends Ci{constructor(e,n,i){super(new Float32Array(e),n,i)}}let xA=0;const Zn=new jt,Fc=new gn,Sr=new Z,Bn=new xa,Co=new xa,rn=new Z;class Ds extends ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xA++}),this.uuid=_a(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qg(e)?rv:sv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ft().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,n,i){return Zn.makeTranslation(e,n,i),this.applyMatrix4(Zn),this}scale(e,n,i){return Zn.makeScale(e,n,i),this.applyMatrix4(Zn),this}lookAt(e){return Fc.lookAt(e),Fc.updateMatrix(),this.applyMatrix4(Fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ri(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Co.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(Bn.min,Co.min),Bn.expandByPoint(rn),rn.addVectors(Bn.max,Co.max),Bn.expandByPoint(rn)):(Bn.expandByPoint(Co.min),Bn.expandByPoint(Co.max))}Bn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)rn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(rn));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)rn.fromBufferAttribute(a,c),l&&(Sr.fromBufferAttribute(e,c),rn.add(Sr)),s=Math.max(s,i.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new Z,l[I]=new Z;const c=new Z,u=new Z,d=new Z,f=new ct,h=new ct,v=new ct,_=new Z,m=new Z;function p(I,b,M){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,M),f.fromBufferAttribute(r,I),h.fromBufferAttribute(r,b),v.fromBufferAttribute(r,M),u.sub(c),d.sub(c),h.sub(f),v.sub(f);const R=1/(h.x*v.y-v.x*h.y);isFinite(R)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(d,-h.y).multiplyScalar(R),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-v.x).multiplyScalar(R),a[I].add(_),a[b].add(_),a[M].add(_),l[I].add(m),l[b].add(m),l[M].add(m))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let I=0,b=C.length;I<b;++I){const M=C[I],R=M.start,q=M.count;for(let j=R,J=R+q;j<J;j+=3)p(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const A=new Z,w=new Z,U=new Z,L=new Z;function D(I){U.fromBufferAttribute(s,I),L.copy(U);const b=a[I];A.copy(b),A.sub(U.multiplyScalar(U.dot(b))).normalize(),w.crossVectors(L,b);const R=w.dot(l[I])<0?-1:1;o.setXYZW(I,A.x,A.y,A.z,R)}for(let I=0,b=C.length;I<b;++I){const M=C[I],R=M.start,q=M.count;for(let j=R,J=R+q;j<J;j+=3)D(e.getX(j+0)),D(e.getX(j+1)),D(e.getX(j+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ci(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const s=new Z,r=new Z,o=new Z,a=new Z,l=new Z,c=new Z,u=new Z,d=new Z;if(e)for(let f=0,h=e.count;f<h;f+=3){const v=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(n,v),r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=n.count;f<h;f+=3)s.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)rn.fromBufferAttribute(e,n),rn.normalize(),e.setXYZ(n,rn.x,rn.y,rn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,v=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let p=0;p<u;p++)f[v++]=c[h++]}return new Ci(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ds,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Th=new jt,ks=new ev,ka=new Xd,Ah=new Z,Ba=new Z,za=new Z,Ha=new Z,kc=new Z,Va=new Z,Ch=new Z,Ga=new Z;class di extends gn{constructor(e=new Ds,n=new iv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Va.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(kc.fromBufferAttribute(d,e),o?Va.addScaledVector(kc,u):Va.addScaledVector(kc.sub(n),u))}n.add(Va)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(r),ks.copy(e.ray).recast(e.near),!(ka.containsPoint(ks.origin)===!1&&(ks.intersectSphere(ka,Ah)===null||ks.origin.distanceToSquared(Ah)>(e.far-e.near)**2))&&(Th.copy(r).invert(),ks.copy(e.ray).applyMatrix4(Th),!(i.boundingBox!==null&&ks.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ks)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){const m=f[v],p=o[m.materialIndex],C=Math.max(m.start,h.start),A=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let w=C,U=A;w<U;w+=3){const L=a.getX(w),D=a.getX(w+1),I=a.getX(w+2);s=Wa(this,p,e,i,c,u,d,L,D,I),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const v=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let m=v,p=_;m<p;m+=3){const C=a.getX(m),A=a.getX(m+1),w=a.getX(m+2);s=Wa(this,o,e,i,c,u,d,C,A,w),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){const m=f[v],p=o[m.materialIndex],C=Math.max(m.start,h.start),A=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let w=C,U=A;w<U;w+=3){const L=w,D=w+1,I=w+2;s=Wa(this,p,e,i,c,u,d,L,D,I),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const v=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=v,p=_;m<p;m+=3){const C=m,A=m+1,w=m+2;s=Wa(this,o,e,i,c,u,d,C,A,w),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function yA(t,e,n,i,s,r,o,a){let l;if(e.side===In?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===As,a),l===null)return null;Ga.copy(a),Ga.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ga);return c<n.near||c>n.far?null:{distance:c,point:Ga.clone(),object:t}}function Wa(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,Ba),t.getVertexPosition(l,za),t.getVertexPosition(c,Ha);const u=yA(t,e,n,i,Ba,za,Ha,Ch);if(u){const d=new Z;ci.getBarycoord(Ch,Ba,za,Ha,d),s&&(u.uv=ci.getInterpolatedAttribute(s,a,l,c,d,new ct)),r&&(u.uv1=ci.getInterpolatedAttribute(r,a,l,c,d,new ct)),o&&(u.normal=ci.getInterpolatedAttribute(o,a,l,c,d,new Z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new Z,materialIndex:0};ci.getNormal(Ba,za,Ha,f.normal),u.face=f,u.barycoord=d}return u}class ba extends Ds{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;v("z","y","x",-1,-1,i,n,e,o,r,0),v("z","y","x",1,-1,i,n,-e,o,r,1),v("x","z","y",1,1,e,i,n,s,o,2),v("x","z","y",1,-1,e,i,-n,s,o,3),v("x","y","z",1,-1,e,n,i,s,r,4),v("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ri(c,3)),this.setAttribute("normal",new Ri(u,3)),this.setAttribute("uv",new Ri(d,2));function v(_,m,p,C,A,w,U,L,D,I,b){const M=w/D,R=U/I,q=w/2,j=U/2,J=L/2,le=D+1,G=I+1;let ue=0,X=0;const be=new Z;for(let Te=0;Te<G;Te++){const Ne=Te*R-j;for(let We=0;We<le;We++){const nt=We*M-q;be[_]=nt*C,be[m]=Ne*A,be[p]=J,c.push(be.x,be.y,be.z),be[_]=0,be[m]=0,be[p]=L>0?1:-1,u.push(be.x,be.y,be.z),d.push(We/D),d.push(1-Te/I),ue+=1}}for(let Te=0;Te<I;Te++)for(let Ne=0;Ne<D;Ne++){const We=f+Ne+le*Te,nt=f+Ne+le*(Te+1),je=f+(Ne+1)+le*(Te+1),re=f+(Ne+1)+le*Te;l.push(We,nt,re),l.push(nt,je,re),X+=6}a.addGroup(h,X,b),h+=X,f+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ba(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ao(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function wn(t){const e={};for(let n=0;n<t.length;n++){const i=ao(t[n]);for(const s in i)e[s]=i[s]}return e}function bA(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function ov(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const wA={clone:ao,merge:wn};var SA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cs extends ya{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=SA,this.fragmentShader=MA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ao(e.uniforms),this.uniformsGroups=bA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class av extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ls=new Z,Rh=new ct,Ph=new ct;class Vn extends av{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Qu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ll*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qu*2*Math.atan(Math.tan(ll*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ls.x,ls.y).multiplyScalar(-e/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ls.x,ls.y).multiplyScalar(-e/ls.z)}getViewSize(e,n){return this.getViewBounds(e,Rh,Ph),n.subVectors(Ph,Rh)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ll*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Mr=-90,Er=1;class EA extends gn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Vn(Mr,Er,e,n);s.layers=this.layers,this.add(s);const r=new Vn(Mr,Er,e,n);r.layers=this.layers,this.add(r);const o=new Vn(Mr,Er,e,n);o.layers=this.layers,this.add(o);const a=new Vn(Mr,Er,e,n);a.layers=this.layers,this.add(a);const l=new Vn(Mr,Er,e,n);l.layers=this.layers,this.add(l);const c=new Vn(Mr,Er,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,o),e.setRenderTarget(i,2,s),e.render(n,a),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(n,u),e.setRenderTarget(d,f,h),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class lv extends Un{constructor(e=[],n=so,i,s,r,o,a,l,c,u){super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class TA extends or{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new lv(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ba(5,5,5),r=new Cs({name:"CubemapFromEquirect",uniforms:ao(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:In,blending:Es});r.uniforms.tEquirect.value=n;const o=new di(s,r),a=n.minFilter;return n.minFilter===qs&&(n.minFilter=Ei),new EA(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}class $a extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AA={type:"move"};class Bc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $a,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $a,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $a,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,v=.005;c.inputState.pinching&&f>h+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(AA)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new $a;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class cv extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const zc=new Z,CA=new Z,RA=new ft;class hs{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=zc.subVectors(i,n).cross(CA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(zc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||RA.getNormalMatrix(e),s=this.coplanarPoint(zc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bs=new Xd,PA=new ct(.5,.5),Xa=new Z;class qd{constructor(e=new hs,n=new hs,i=new hs,s=new hs,r=new hs,o=new hs){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ti,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],f=r[6],h=r[7],v=r[8],_=r[9],m=r[10],p=r[11],C=r[12],A=r[13],w=r[14],U=r[15];if(s[0].setComponents(c-o,h-u,p-v,U-C).normalize(),s[1].setComponents(c+o,h+u,p+v,U+C).normalize(),s[2].setComponents(c+a,h+d,p+_,U+A).normalize(),s[3].setComponents(c-a,h-d,p-_,U-A).normalize(),i)s[4].setComponents(l,f,m,w).normalize(),s[5].setComponents(c-l,h-f,p-m,U-w).normalize();else if(s[4].setComponents(c-l,h-f,p-m,U-w).normalize(),n===Ti)s[5].setComponents(c+l,h+f,p+m,U+w).normalize();else if(n===Rl)s[5].setComponents(l,f,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(e){Bs.center.set(0,0,0);const n=PA.distanceTo(e.center);return Bs.radius=.7071067811865476+n,Bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Xa.x=s.normal.x>0?e.max.x:e.min.x,Xa.y=s.normal.y>0?e.max.y:e.min.y,Xa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uv extends Un{constructor(e,n,i=sr,s,r,o,a=pi,l=pi,c,u=Qo,d=1){if(u!==Qo&&u!==Jo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $d(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Yl extends Ds{constructor(e=1,n=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],f=[],h=[];let v=0;const _=[],m=i/2;let p=0;C(),o===!1&&(e>0&&A(!0),n>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new Ri(d,3)),this.setAttribute("normal",new Ri(f,3)),this.setAttribute("uv",new Ri(h,2));function C(){const w=new Z,U=new Z;let L=0;const D=(n-e)/i;for(let I=0;I<=r;I++){const b=[],M=I/r,R=M*(n-e)+e;for(let q=0;q<=s;q++){const j=q/s,J=j*l+a,le=Math.sin(J),G=Math.cos(J);U.x=R*le,U.y=-M*i+m,U.z=R*G,d.push(U.x,U.y,U.z),w.set(le,D,G).normalize(),f.push(w.x,w.y,w.z),h.push(j,1-M),b.push(v++)}_.push(b)}for(let I=0;I<s;I++)for(let b=0;b<r;b++){const M=_[b][I],R=_[b+1][I],q=_[b+1][I+1],j=_[b][I+1];(e>0||b!==0)&&(u.push(M,R,j),L+=3),(n>0||b!==r-1)&&(u.push(R,q,j),L+=3)}c.addGroup(p,L,0),p+=L}function A(w){const U=v,L=new ct,D=new Z;let I=0;const b=w===!0?e:n,M=w===!0?1:-1;for(let q=1;q<=s;q++)d.push(0,m*M,0),f.push(0,M,0),h.push(.5,.5),v++;const R=v;for(let q=0;q<=s;q++){const J=q/s*l+a,le=Math.cos(J),G=Math.sin(J);D.x=b*G,D.y=m*M,D.z=b*le,d.push(D.x,D.y,D.z),f.push(0,M,0),L.x=le*.5+.5,L.y=G*.5*M+.5,h.push(L.x,L.y),v++}for(let q=0;q<s;q++){const j=U+q,J=R+q;w===!0?u.push(J,J+1,j):u.push(J+1,J,j),I+=3}c.addGroup(p,I,w===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Kl extends Ds{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,f=n/l,h=[],v=[],_=[],m=[];for(let p=0;p<u;p++){const C=p*f-o;for(let A=0;A<c;A++){const w=A*d-r;v.push(w,-C,0),_.push(0,0,1),m.push(A/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let C=0;C<a;C++){const A=C+c*p,w=C+c*(p+1),U=C+1+c*(p+1),L=C+1+c*p;h.push(A,w,L),h.push(w,U,L)}this.setIndex(h),this.setAttribute("position",new Ri(v,3)),this.setAttribute("normal",new Ri(_,3)),this.setAttribute("uv",new Ri(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.width,e.height,e.widthSegments,e.heightSegments)}}class DA extends ya{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kg,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dv extends DA{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new vt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new vt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new vt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class LA extends ya{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class IA extends ya{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class fv extends gn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Hc=new jt,Dh=new Z,Lh=new Z;class UA{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=Ii,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qd,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Dh.setFromMatrixPosition(e.matrixWorld),n.position.copy(Dh),Lh.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Lh),n.updateMatrixWorld(),Hc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hc,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Hc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class hv extends av{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class OA extends UA{constructor(){super(new hv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ju extends fv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new OA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class pv extends fv{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class NA extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ih{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(gt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class FA extends ur{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Uh(t,e,n,i){const s=kA(i);switch(n){case $g:return t*e;case qg:return t*e/s.components*s.byteLength;case Vd:return t*e/s.components*s.byteLength;case jg:return t*e*2/s.components*s.byteLength;case Gd:return t*e*2/s.components*s.byteLength;case Xg:return t*e*3/s.components*s.byteLength;case ui:return t*e*4/s.components*s.byteLength;case Wd:return t*e*4/s.components*s.byteLength;case il:case sl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case rl:case ol:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Au:case Ru:return Math.max(t,16)*Math.max(e,8)/4;case Tu:case Cu:return Math.max(t,8)*Math.max(e,8)/2;case Pu:case Du:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Lu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Iu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Uu:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ou:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Nu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Fu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ku:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Bu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case zu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Hu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Vu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Gu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Wu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case $u:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Xu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case al:case qu:case ju:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Yg:case Yu:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ku:case Zu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function kA(t){switch(t){case Ii:case Vg:return{byteLength:1,components:1};case Ko:case Gg:case va:return{byteLength:2,components:1};case zd:case Hd:return{byteLength:2,components:4};case sr:case Bd:case Yi:return{byteLength:4,components:1};case Wg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function mv(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function BA(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((h,v)=>h.start-v.start);let f=0;for(let h=1;h<d.length;h++){const v=d[f],_=d[h];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++f,d[f]=_)}d.length=f+1;for(let h=0,v=d.length;h<v;h++){const _=d[h];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var zA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HA=`#ifdef USE_ALPHAHASH
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
#endif`,VA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$A=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XA=`#ifdef USE_AOMAP
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
#endif`,qA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jA=`#ifdef USE_BATCHING
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
#endif`,YA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,KA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,JA=`#ifdef USE_IRIDESCENCE
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
#endif`,e1=`#ifdef USE_BUMPMAP
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
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,n1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,r1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,o1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,a1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,l1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,c1=`#define PI 3.141592653589793
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
} // validated`,u1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,d1=`vec3 transformedNormal = objectNormal;
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
#endif`,f1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g1="gl_FragColor = linearToOutputTexel( gl_FragColor );",v1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_1=`#ifdef USE_ENVMAP
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
#endif`,x1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,y1=`#ifdef USE_ENVMAP
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
#endif`,b1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,w1=`#ifdef USE_ENVMAP
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
#endif`,S1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,E1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,T1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,A1=`#ifdef USE_GRADIENTMAP
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
}`,C1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,D1=`uniform bool receiveShadow;
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
#endif`,L1=`#ifdef USE_ENVMAP
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
#endif`,I1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F1=`PhysicalMaterial material;
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
#endif`,k1=`struct PhysicalMaterial {
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
}`,B1=`
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
#endif`,z1=`#if defined( RE_IndirectDiffuse )
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
#endif`,H1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,V1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,X1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Y1=`#if defined( USE_POINTS_UV )
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
#endif`,K1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Q1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,J1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tC=`#ifdef USE_MORPHTARGETS
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
#endif`,nC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lC=`#ifdef USE_NORMALMAP
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
#endif`,cC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_C=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,SC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,MC=`float getShadowMask() {
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
}`,EC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TC=`#ifdef USE_SKINNING
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
#endif`,AC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CC=`#ifdef USE_SKINNING
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
#endif`,RC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,PC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,IC=`#ifdef USE_TRANSMISSION
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
#endif`,UC=`#ifdef USE_TRANSMISSION
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
#endif`,OC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zC=`uniform sampler2D t2D;
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
}`,HC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VC=`#ifdef ENVMAP_TYPE_CUBE
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
}`,GC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$C=`#include <common>
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
}`,XC=`#if DEPTH_PACKING == 3200
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
}`,qC=`#define DISTANCE
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
}`,jC=`#define DISTANCE
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
}`,YC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZC=`uniform float scale;
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
}`,QC=`uniform vec3 diffuse;
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
}`,JC=`#include <common>
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
}`,e2=`uniform vec3 diffuse;
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
}`,t2=`#define LAMBERT
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
}`,n2=`#define LAMBERT
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
}`,i2=`#define MATCAP
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
}`,s2=`#define MATCAP
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
}`,r2=`#define NORMAL
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
}`,o2=`#define NORMAL
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
}`,a2=`#define PHONG
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
}`,l2=`#define PHONG
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
}`,c2=`#define STANDARD
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
}`,u2=`#define STANDARD
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
}`,d2=`#define TOON
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
}`,f2=`#define TOON
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
}`,h2=`uniform float size;
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
}`,p2=`uniform vec3 diffuse;
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
}`,m2=`#include <common>
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
}`,g2=`uniform vec3 color;
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
}`,v2=`uniform float rotation;
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
}`,_2=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:zA,alphahash_pars_fragment:HA,alphamap_fragment:VA,alphamap_pars_fragment:GA,alphatest_fragment:WA,alphatest_pars_fragment:$A,aomap_fragment:XA,aomap_pars_fragment:qA,batching_pars_vertex:jA,batching_vertex:YA,begin_vertex:KA,beginnormal_vertex:ZA,bsdfs:QA,iridescence_fragment:JA,bumpmap_pars_fragment:e1,clipping_planes_fragment:t1,clipping_planes_pars_fragment:n1,clipping_planes_pars_vertex:i1,clipping_planes_vertex:s1,color_fragment:r1,color_pars_fragment:o1,color_pars_vertex:a1,color_vertex:l1,common:c1,cube_uv_reflection_fragment:u1,defaultnormal_vertex:d1,displacementmap_pars_vertex:f1,displacementmap_vertex:h1,emissivemap_fragment:p1,emissivemap_pars_fragment:m1,colorspace_fragment:g1,colorspace_pars_fragment:v1,envmap_fragment:_1,envmap_common_pars_fragment:x1,envmap_pars_fragment:y1,envmap_pars_vertex:b1,envmap_physical_pars_fragment:L1,envmap_vertex:w1,fog_vertex:S1,fog_pars_vertex:M1,fog_fragment:E1,fog_pars_fragment:T1,gradientmap_pars_fragment:A1,lightmap_pars_fragment:C1,lights_lambert_fragment:R1,lights_lambert_pars_fragment:P1,lights_pars_begin:D1,lights_toon_fragment:I1,lights_toon_pars_fragment:U1,lights_phong_fragment:O1,lights_phong_pars_fragment:N1,lights_physical_fragment:F1,lights_physical_pars_fragment:k1,lights_fragment_begin:B1,lights_fragment_maps:z1,lights_fragment_end:H1,logdepthbuf_fragment:V1,logdepthbuf_pars_fragment:G1,logdepthbuf_pars_vertex:W1,logdepthbuf_vertex:$1,map_fragment:X1,map_pars_fragment:q1,map_particle_fragment:j1,map_particle_pars_fragment:Y1,metalnessmap_fragment:K1,metalnessmap_pars_fragment:Z1,morphinstance_vertex:Q1,morphcolor_vertex:J1,morphnormal_vertex:eC,morphtarget_pars_vertex:tC,morphtarget_vertex:nC,normal_fragment_begin:iC,normal_fragment_maps:sC,normal_pars_fragment:rC,normal_pars_vertex:oC,normal_vertex:aC,normalmap_pars_fragment:lC,clearcoat_normal_fragment_begin:cC,clearcoat_normal_fragment_maps:uC,clearcoat_pars_fragment:dC,iridescence_pars_fragment:fC,opaque_fragment:hC,packing:pC,premultiplied_alpha_fragment:mC,project_vertex:gC,dithering_fragment:vC,dithering_pars_fragment:_C,roughnessmap_fragment:xC,roughnessmap_pars_fragment:yC,shadowmap_pars_fragment:bC,shadowmap_pars_vertex:wC,shadowmap_vertex:SC,shadowmask_pars_fragment:MC,skinbase_vertex:EC,skinning_pars_vertex:TC,skinning_vertex:AC,skinnormal_vertex:CC,specularmap_fragment:RC,specularmap_pars_fragment:PC,tonemapping_fragment:DC,tonemapping_pars_fragment:LC,transmission_fragment:IC,transmission_pars_fragment:UC,uv_pars_fragment:OC,uv_pars_vertex:NC,uv_vertex:FC,worldpos_vertex:kC,background_vert:BC,background_frag:zC,backgroundCube_vert:HC,backgroundCube_frag:VC,cube_vert:GC,cube_frag:WC,depth_vert:$C,depth_frag:XC,distanceRGBA_vert:qC,distanceRGBA_frag:jC,equirect_vert:YC,equirect_frag:KC,linedashed_vert:ZC,linedashed_frag:QC,meshbasic_vert:JC,meshbasic_frag:e2,meshlambert_vert:t2,meshlambert_frag:n2,meshmatcap_vert:i2,meshmatcap_frag:s2,meshnormal_vert:r2,meshnormal_frag:o2,meshphong_vert:a2,meshphong_frag:l2,meshphysical_vert:c2,meshphysical_frag:u2,meshtoon_vert:d2,meshtoon_frag:f2,points_vert:h2,points_frag:p2,shadow_vert:m2,shadow_frag:g2,sprite_vert:v2,sprite_frag:_2},De={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Mi={basic:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new vt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:wn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:wn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new vt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:wn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:wn([De.points,De.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:wn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:wn([De.common,De.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:wn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:wn([De.sprite,De.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:wn([De.common,De.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:wn([De.lights,De.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Mi.physical={uniforms:wn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const qa={r:0,b:0,g:0},zs=new Ui,x2=new jt;function y2(t,e,n,i,s,r,o){const a=new vt(0);let l=r===!0?0:1,c,u,d=null,f=0,h=null;function v(A){let w=A.isScene===!0?A.background:null;return w&&w.isTexture&&(w=(A.backgroundBlurriness>0?n:e).get(w)),w}function _(A){let w=!1;const U=v(A);U===null?p(a,l):U&&U.isColor&&(p(U,1),w=!0);const L=t.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(A,w){const U=v(w);U&&(U.isCubeTexture||U.mapping===jl)?(u===void 0&&(u=new di(new ba(1,1,1),new Cs({name:"BackgroundCubeMaterial",uniforms:ao(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,D,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),zs.copy(w.backgroundRotation),zs.x*=-1,zs.y*=-1,zs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),u.material.uniforms.envMap.value=U,u.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(x2.makeRotationFromEuler(zs)),u.material.toneMapped=wt.getTransfer(U.colorSpace)!==Dt,(d!==U||f!==U.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,d=U,f=U.version,h=t.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):U&&U.isTexture&&(c===void 0&&(c=new di(new Kl(2,2),new Cs({name:"BackgroundMaterial",uniforms:ao(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:As,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=U,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=wt.getTransfer(U.colorSpace)!==Dt,U.matrixAutoUpdate===!0&&U.updateMatrix(),c.material.uniforms.uvTransform.value.copy(U.matrix),(d!==U||f!==U.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,d=U,f=U.version,h=t.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function p(A,w){A.getRGB(qa,ov(t)),i.buffers.color.setClear(qa.r,qa.g,qa.b,w,o)}function C(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,w=1){a.set(A),l=w,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,p(a,l)},render:_,addToRenderList:m,dispose:C}}function b2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(M,R,q,j,J){let le=!1;const G=d(j,q,R);r!==G&&(r=G,c(r.object)),le=h(M,j,q,J),le&&v(M,j,q,J),J!==null&&e.update(J,t.ELEMENT_ARRAY_BUFFER),(le||o)&&(o=!1,w(M,R,q,j),J!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function d(M,R,q){const j=q.wireframe===!0;let J=i[M.id];J===void 0&&(J={},i[M.id]=J);let le=J[R.id];le===void 0&&(le={},J[R.id]=le);let G=le[j];return G===void 0&&(G=f(l()),le[j]=G),G}function f(M){const R=[],q=[],j=[];for(let J=0;J<n;J++)R[J]=0,q[J]=0,j[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:q,attributeDivisors:j,object:M,attributes:{},index:null}}function h(M,R,q,j){const J=r.attributes,le=R.attributes;let G=0;const ue=q.getAttributes();for(const X in ue)if(ue[X].location>=0){const Te=J[X];let Ne=le[X];if(Ne===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(Ne=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(Ne=M.instanceColor)),Te===void 0||Te.attribute!==Ne||Ne&&Te.data!==Ne.data)return!0;G++}return r.attributesNum!==G||r.index!==j}function v(M,R,q,j){const J={},le=R.attributes;let G=0;const ue=q.getAttributes();for(const X in ue)if(ue[X].location>=0){let Te=le[X];Te===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(Te=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(Te=M.instanceColor));const Ne={};Ne.attribute=Te,Te&&Te.data&&(Ne.data=Te.data),J[X]=Ne,G++}r.attributes=J,r.attributesNum=G,r.index=j}function _(){const M=r.newAttributes;for(let R=0,q=M.length;R<q;R++)M[R]=0}function m(M){p(M,0)}function p(M,R){const q=r.newAttributes,j=r.enabledAttributes,J=r.attributeDivisors;q[M]=1,j[M]===0&&(t.enableVertexAttribArray(M),j[M]=1),J[M]!==R&&(t.vertexAttribDivisor(M,R),J[M]=R)}function C(){const M=r.newAttributes,R=r.enabledAttributes;for(let q=0,j=R.length;q<j;q++)R[q]!==M[q]&&(t.disableVertexAttribArray(q),R[q]=0)}function A(M,R,q,j,J,le,G){G===!0?t.vertexAttribIPointer(M,R,q,J,le):t.vertexAttribPointer(M,R,q,j,J,le)}function w(M,R,q,j){_();const J=j.attributes,le=q.getAttributes(),G=R.defaultAttributeValues;for(const ue in le){const X=le[ue];if(X.location>=0){let be=J[ue];if(be===void 0&&(ue==="instanceMatrix"&&M.instanceMatrix&&(be=M.instanceMatrix),ue==="instanceColor"&&M.instanceColor&&(be=M.instanceColor)),be!==void 0){const Te=be.normalized,Ne=be.itemSize,We=e.get(be);if(We===void 0)continue;const nt=We.buffer,je=We.type,re=We.bytesPerElement,we=je===t.INT||je===t.UNSIGNED_INT||be.gpuType===Bd;if(be.isInterleavedBufferAttribute){const F=be.data,oe=F.stride,se=be.offset;if(F.isInstancedInterleavedBuffer){for(let me=0;me<X.locationSize;me++)p(X.location+me,F.meshPerAttribute);M.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let me=0;me<X.locationSize;me++)m(X.location+me);t.bindBuffer(t.ARRAY_BUFFER,nt);for(let me=0;me<X.locationSize;me++)A(X.location+me,Ne/X.locationSize,je,Te,oe*re,(se+Ne/X.locationSize*me)*re,we)}else{if(be.isInstancedBufferAttribute){for(let F=0;F<X.locationSize;F++)p(X.location+F,be.meshPerAttribute);M.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let F=0;F<X.locationSize;F++)m(X.location+F);t.bindBuffer(t.ARRAY_BUFFER,nt);for(let F=0;F<X.locationSize;F++)A(X.location+F,Ne/X.locationSize,je,Te,Ne*re,Ne/X.locationSize*F*re,we)}}else if(G!==void 0){const Te=G[ue];if(Te!==void 0)switch(Te.length){case 2:t.vertexAttrib2fv(X.location,Te);break;case 3:t.vertexAttrib3fv(X.location,Te);break;case 4:t.vertexAttrib4fv(X.location,Te);break;default:t.vertexAttrib1fv(X.location,Te)}}}}C()}function U(){I();for(const M in i){const R=i[M];for(const q in R){const j=R[q];for(const J in j)u(j[J].object),delete j[J];delete R[q]}delete i[M]}}function L(M){if(i[M.id]===void 0)return;const R=i[M.id];for(const q in R){const j=R[q];for(const J in j)u(j[J].object),delete j[J];delete R[q]}delete i[M.id]}function D(M){for(const R in i){const q=i[R];if(q[M.id]===void 0)continue;const j=q[M.id];for(const J in j)u(j[J].object),delete j[J];delete q[M.id]}}function I(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:b,dispose:U,releaseStatesOfGeometry:L,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:m,disableUnusedAttributes:C}}function w2(t,e,n){let i;function s(c){i=c}function r(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let v=0;v<d;v++)h+=u[v];n.update(h,i,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let v=0;v<c.length;v++)o(c[v],u[v],f[v]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let v=0;for(let _=0;_<d;_++)v+=u[_]*f[_];n.update(v,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function S2(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==ui&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const I=D===va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Ii&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Yi&&!I)}function l(D){if(D==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),C=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),A=t.getParameter(t.MAX_VARYING_VECTORS),w=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),U=v>0,L=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:C,maxVaryings:A,maxFragmentUniforms:w,vertexTextures:U,maxSamples:L}}function M2(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new hs,a=new ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,h){const v=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=t.get(d);if(!s||v===null||v.length===0||r&&!m)r?u(null):c();else{const C=r?0:i,A=C*4;let w=p.clippingState||null;l.value=w,w=u(v,f,A,h);for(let U=0;U!==A;++U)w[U]=n[U];p.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,v){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,v!==!0||m===null){const p=h+_*4,C=f.matrixWorldInverse;a.getNormalMatrix(C),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,w=h;A!==_;++A,w+=4)o.copy(d[A]).applyMatrix4(C,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function E2(t){let e=new WeakMap;function n(o,a){return a===wu?o.mapping=so:a===Su&&(o.mapping=ro),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===wu||a===Su)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new TA(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",s),n(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Pr=4,Oh=[.125,.215,.35,.446,.526,.582],$s=20,Vc=new hv,Nh=new vt;let Gc=null,Wc=0,$c=0,Xc=!1;const Gs=(1+Math.sqrt(5))/2,Tr=1/Gs,Fh=[new Z(-Gs,Tr,0),new Z(Gs,Tr,0),new Z(-Tr,0,Gs),new Z(Tr,0,Gs),new Z(0,Gs,-Tr),new Z(0,Gs,Tr),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)],T2=new Z;class kh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=T2}=r;Gc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gc,Wc,$c),this._renderer.xr.enabled=Xc,e.scissorTest=!1,ja(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===so||e.mapping===ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:va,format:ui,colorSpace:oo,depthBuffer:!1},s=Bh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bh(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=A2(r)),this._blurMaterial=C2(r,e,n)}return s}_compileMaterial(e){const n=new di(this._lodPlanes[0],e);this._renderer.compile(n,Vc)}_sceneToCubeUV(e,n,i,s,r){const l=new Vn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Nh),d.toneMapping=Ts,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const _=new iv({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),m=new di(new ba,_);let p=!1;const C=e.background;C?C.isColor&&(_.color.copy(C),e.background=null,p=!0):(_.color.copy(Nh),p=!0);for(let A=0;A<6;A++){const w=A%3;w===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):w===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));const U=this._cubeSize;ja(s,w*U,A>2?U:0,U,U),d.setRenderTarget(s),p&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=C}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===so||e.mapping===ro;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new di(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ja(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Vc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Fh[(s-r-1)%Fh.length];this._blur(e,r-1,r,o,a)}n.autoClear=i}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new di(this._lodPlanes[s],c),f=c.uniforms,h=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*$s-1),_=r/v,m=isFinite(r)?1+Math.floor(u*_):$s;m>$s&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$s}`);const p=[];let C=0;for(let D=0;D<$s;++D){const I=D/_,b=Math.exp(-I*I/2);p.push(b),D===0?C+=b:D<m&&(C+=2*b)}for(let D=0;D<p.length;D++)p[D]=p[D]/C;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:A}=this;f.dTheta.value=v,f.mipInt.value=A-i;const w=this._sizeLods[s],U=3*w*(s>A-Pr?s-A+Pr:0),L=4*(this._cubeSize-w);ja(n,U,L,3*w,2*w),l.setRenderTarget(n),l.render(d,Vc)}}function A2(t){const e=[],n=[],i=[];let s=t;const r=t-Pr+1+Oh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);n.push(a);let l=1/a;o>t-Pr?l=Oh[o-t+Pr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,v=6,_=3,m=2,p=1,C=new Float32Array(_*v*h),A=new Float32Array(m*v*h),w=new Float32Array(p*v*h);for(let L=0;L<h;L++){const D=L%3*2/3-1,I=L>2?0:-1,b=[D,I,0,D+2/3,I,0,D+2/3,I+1,0,D,I,0,D+2/3,I+1,0,D,I+1,0];C.set(b,_*v*L),A.set(f,m*v*L);const M=[L,L,L,L,L,L];w.set(M,p*v*L)}const U=new Ds;U.setAttribute("position",new Ci(C,_)),U.setAttribute("uv",new Ci(A,m)),U.setAttribute("faceIndex",new Ci(w,p)),e.push(U),s>Pr&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Bh(t,e,n){const i=new or(t,e,n);return i.texture.mapping=jl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ja(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function C2(t,e,n){const i=new Float32Array($s),s=new Z(0,1,0);return new Cs({name:"SphericalGaussianBlur",defines:{n:$s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:jd(),fragmentShader:`

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
		`,blending:Es,depthTest:!1,depthWrite:!1})}function zh(){return new Cs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jd(),fragmentShader:`

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
		`,blending:Es,depthTest:!1,depthWrite:!1})}function Hh(){return new Cs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Es,depthTest:!1,depthWrite:!1})}function jd(){return`

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
	`}function R2(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===wu||l===Su,u=l===so||l===ro;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new kh(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&s(h)?(n===null&&(n=new kh(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function P2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&zr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function D2(t,e,n,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",o),delete s[f.id];const h=r.get(f);h&&(e.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],t.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,v=d.attributes.position;let _=0;if(h!==null){const C=h.array;_=h.version;for(let A=0,w=C.length;A<w;A+=3){const U=C[A+0],L=C[A+1],D=C[A+2];f.push(U,L,L,D,D,U)}}else if(v!==void 0){const C=v.array;_=v.version;for(let A=0,w=C.length/3-1;A<w;A+=3){const U=A+0,L=A+1,D=A+2;f.push(U,L,L,D,D,U)}}else return;const m=new(Qg(f)?rv:sv)(f,1);m.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function L2(t,e,n){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){t.drawElements(i,h,r,f*o),n.update(h,i,1)}function c(f,h,v){v!==0&&(t.drawElementsInstanced(i,h,r,f*o,v),n.update(h,i,v))}function u(f,h,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,v);let m=0;for(let p=0;p<v;p++)m+=h[p];n.update(m,i,1)}function d(f,h,v,_){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,r,f,0,_,0,v);let p=0;for(let C=0;C<v;C++)p+=h[C]*_[C];n.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function I2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function U2(t,e,n){const i=new WeakMap,s=new Xt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let b=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const h=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],C=a.morphAttributes.color||[];let A=0;h===!0&&(A=1),v===!0&&(A=2),_===!0&&(A=3);let w=a.attributes.position.count*A,U=1;w>e.maxTextureSize&&(U=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const L=new Float32Array(w*U*4*d),D=new Jg(L,w,U,d);D.type=Yi,D.needsUpdate=!0;const I=A*4;for(let M=0;M<d;M++){const R=m[M],q=p[M],j=C[M],J=w*U*4*M;for(let le=0;le<R.count;le++){const G=le*I;h===!0&&(s.fromBufferAttribute(R,le),L[J+G+0]=s.x,L[J+G+1]=s.y,L[J+G+2]=s.z,L[J+G+3]=0),v===!0&&(s.fromBufferAttribute(q,le),L[J+G+4]=s.x,L[J+G+5]=s.y,L[J+G+6]=s.z,L[J+G+7]=0),_===!0&&(s.fromBufferAttribute(j,le),L[J+G+8]=s.x,L[J+G+9]=s.y,L[J+G+10]=s.z,L[J+G+11]=j.itemSize===4?s.w:1)}}f={count:d,texture:D,size:new ct(w,U)},i.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let h=0;for(let _=0;_<c.length;_++)h+=c[_];const v=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:r}}function O2(t,e,n,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:o}}const gv=new Un,Vh=new uv(1,1),vv=new Jg,_v=new cA,xv=new lv,Gh=[],Wh=[],$h=new Float32Array(16),Xh=new Float32Array(9),qh=new Float32Array(4);function mo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=Gh[s];if(r===void 0&&(r=new Float32Array(s),Gh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function nn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function sn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Zl(t,e){let n=Wh[e];n===void 0&&(n=new Int32Array(e),Wh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function N2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function F2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;t.uniform2fv(this.addr,e),sn(n,e)}}function k2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(nn(n,e))return;t.uniform3fv(this.addr,e),sn(n,e)}}function B2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;t.uniform4fv(this.addr,e),sn(n,e)}}function z2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(nn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),sn(n,e)}else{if(nn(n,i))return;qh.set(i),t.uniformMatrix2fv(this.addr,!1,qh),sn(n,i)}}function H2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(nn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),sn(n,e)}else{if(nn(n,i))return;Xh.set(i),t.uniformMatrix3fv(this.addr,!1,Xh),sn(n,i)}}function V2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(nn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),sn(n,e)}else{if(nn(n,i))return;$h.set(i),t.uniformMatrix4fv(this.addr,!1,$h),sn(n,i)}}function G2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function W2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;t.uniform2iv(this.addr,e),sn(n,e)}}function $2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;t.uniform3iv(this.addr,e),sn(n,e)}}function X2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;t.uniform4iv(this.addr,e),sn(n,e)}}function q2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function j2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;t.uniform2uiv(this.addr,e),sn(n,e)}}function Y2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;t.uniform3uiv(this.addr,e),sn(n,e)}}function K2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;t.uniform4uiv(this.addr,e),sn(n,e)}}function Z2(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(Vh.compareFunction=Zg,r=Vh):r=gv,n.setTexture2D(e||r,s)}function Q2(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||_v,s)}function J2(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||xv,s)}function eR(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||vv,s)}function tR(t){switch(t){case 5126:return N2;case 35664:return F2;case 35665:return k2;case 35666:return B2;case 35674:return z2;case 35675:return H2;case 35676:return V2;case 5124:case 35670:return G2;case 35667:case 35671:return W2;case 35668:case 35672:return $2;case 35669:case 35673:return X2;case 5125:return q2;case 36294:return j2;case 36295:return Y2;case 36296:return K2;case 35678:case 36198:case 36298:case 36306:case 35682:return Z2;case 35679:case 36299:case 36307:return Q2;case 35680:case 36300:case 36308:case 36293:return J2;case 36289:case 36303:case 36311:case 36292:return eR}}function nR(t,e){t.uniform1fv(this.addr,e)}function iR(t,e){const n=mo(e,this.size,2);t.uniform2fv(this.addr,n)}function sR(t,e){const n=mo(e,this.size,3);t.uniform3fv(this.addr,n)}function rR(t,e){const n=mo(e,this.size,4);t.uniform4fv(this.addr,n)}function oR(t,e){const n=mo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function aR(t,e){const n=mo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function lR(t,e){const n=mo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function cR(t,e){t.uniform1iv(this.addr,e)}function uR(t,e){t.uniform2iv(this.addr,e)}function dR(t,e){t.uniform3iv(this.addr,e)}function fR(t,e){t.uniform4iv(this.addr,e)}function hR(t,e){t.uniform1uiv(this.addr,e)}function pR(t,e){t.uniform2uiv(this.addr,e)}function mR(t,e){t.uniform3uiv(this.addr,e)}function gR(t,e){t.uniform4uiv(this.addr,e)}function vR(t,e,n){const i=this.cache,s=e.length,r=Zl(n,s);nn(i,r)||(t.uniform1iv(this.addr,r),sn(i,r));for(let o=0;o!==s;++o)n.setTexture2D(e[o]||gv,r[o])}function _R(t,e,n){const i=this.cache,s=e.length,r=Zl(n,s);nn(i,r)||(t.uniform1iv(this.addr,r),sn(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||_v,r[o])}function xR(t,e,n){const i=this.cache,s=e.length,r=Zl(n,s);nn(i,r)||(t.uniform1iv(this.addr,r),sn(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||xv,r[o])}function yR(t,e,n){const i=this.cache,s=e.length,r=Zl(n,s);nn(i,r)||(t.uniform1iv(this.addr,r),sn(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||vv,r[o])}function bR(t){switch(t){case 5126:return nR;case 35664:return iR;case 35665:return sR;case 35666:return rR;case 35674:return oR;case 35675:return aR;case 35676:return lR;case 5124:case 35670:return cR;case 35667:case 35671:return uR;case 35668:case 35672:return dR;case 35669:case 35673:return fR;case 5125:return hR;case 36294:return pR;case 36295:return mR;case 36296:return gR;case 35678:case 36198:case 36298:case 36306:case 35682:return vR;case 35679:case 36299:case 36307:return _R;case 35680:case 36300:case 36308:case 36293:return xR;case 36289:case 36303:case 36311:case 36292:return yR}}class wR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=tR(n.type)}}class SR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=bR(n.type)}}class MR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const qc=/(\w+)(\])?(\[|\.)?/g;function jh(t,e){t.seq.push(e),t.map[e.id]=e}function ER(t,e,n){const i=t.name,s=i.length;for(qc.lastIndex=0;;){const r=qc.exec(i),o=qc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){jh(n,c===void 0?new wR(a,t,e):new SR(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new MR(a),jh(n,d)),n=d}}}class cl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(n,s),o=e.getUniformLocation(n,r.name);ER(r,o,this)}}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function Yh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const TR=37297;let AR=0;function CR(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Kh=new ft;function RR(t){wt._getMatrix(Kh,wt.workingColorSpace,t);const e=`mat3( ${Kh.elements.map(n=>n.toFixed(4))} )`;switch(wt.getTransfer(t)){case Cl:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Zh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+CR(t.getShaderSource(e),a)}else return r}function PR(t,e){const n=RR(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function DR(t,e){let n;switch(e){case NT:n="Linear";break;case FT:n="Reinhard";break;case kT:n="Cineon";break;case BT:n="ACESFilmic";break;case HT:n="AgX";break;case VT:n="Neutral";break;case zT:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ya=new Z;function LR(){wt.getLuminanceCoefficients(Ya);const t=Ya.x.toFixed(4),e=Ya.y.toFixed(4),n=Ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function UR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function OR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Io(t){return t!==""}function Qh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NR=/^[ \t]*#include +<([\w\d./]+)>/gm;function ed(t){return t.replace(NR,kR)}const FR=new Map;function kR(t,e){let n=ht[e];if(n===void 0){const i=FR.get(e);if(i!==void 0)n=ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ed(n)}const BR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ep(t){return t.replace(BR,zR)}function zR(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tp(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function HR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Bg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===mT?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function VR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case so:case ro:e="ENVMAP_TYPE_CUBE";break;case jl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function GR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ro:e="ENVMAP_MODE_REFRACTION";break}return e}function WR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case zg:e="ENVMAP_BLENDING_MULTIPLY";break;case UT:e="ENVMAP_BLENDING_MIX";break;case OT:e="ENVMAP_BLENDING_ADD";break}return e}function $R(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function XR(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=HR(n),c=VR(n),u=GR(n),d=WR(n),f=$R(n),h=IR(n),v=UR(r),_=s.createProgram();let m,p,C=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Io).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Io).join(`
`),p.length>0&&(p+=`
`)):(m=[tp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),p=[tp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ts?"#define TONE_MAPPING":"",n.toneMapping!==Ts?ht.tonemapping_pars_fragment:"",n.toneMapping!==Ts?DR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,PR("linearToOutputTexel",n.outputColorSpace),LR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Io).join(`
`)),o=ed(o),o=Qh(o,n),o=Jh(o,n),a=ed(a),a=Qh(a,n),a=Jh(a,n),o=ep(o),a=ep(a),n.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=C+m+o,w=C+p+a,U=Yh(s,s.VERTEX_SHADER,A),L=Yh(s,s.FRAGMENT_SHADER,w);s.attachShader(_,U),s.attachShader(_,L),n.index0AttributeName!==void 0?s.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function D(R){if(t.debug.checkShaderErrors){const q=s.getProgramInfoLog(_)||"",j=s.getShaderInfoLog(U)||"",J=s.getShaderInfoLog(L)||"",le=q.trim(),G=j.trim(),ue=J.trim();let X=!0,be=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,_,U,L);else{const Te=Zh(s,U,"vertex"),Ne=Zh(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+le+`
`+Te+`
`+Ne)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(G===""||ue==="")&&(be=!1);be&&(R.diagnostics={runnable:X,programLog:le,vertexShader:{log:G,prefix:m},fragmentShader:{log:ue,prefix:p}})}s.deleteShader(U),s.deleteShader(L),I=new cl(s,_),b=OR(s,_)}let I;this.getUniforms=function(){return I===void 0&&D(this),I};let b;this.getAttributes=function(){return b===void 0&&D(this),b};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,TR)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=AR++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=U,this.fragmentShader=L,this}let qR=0;class jR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new YR(e),n.set(e,i)),i}}class YR{constructor(e){this.id=qR++,this.code=e,this.usedTimes=0}}function KR(t,e,n,i,s,r,o){const a=new tv,l=new jR,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let h=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,R,q,j){const J=q.fog,le=j.geometry,G=b.isMeshStandardMaterial?q.environment:null,ue=(b.isMeshStandardMaterial?n:e).get(b.envMap||G),X=ue&&ue.mapping===jl?ue.image.height:null,be=v[b.type];b.precision!==null&&(h=s.getMaxPrecision(b.precision),h!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));const Te=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Ne=Te!==void 0?Te.length:0;let We=0;le.morphAttributes.position!==void 0&&(We=1),le.morphAttributes.normal!==void 0&&(We=2),le.morphAttributes.color!==void 0&&(We=3);let nt,je,re,we;if(be){const z=Mi[be];nt=z.vertexShader,je=z.fragmentShader}else nt=b.vertexShader,je=b.fragmentShader,l.update(b),re=l.getVertexShaderID(b),we=l.getFragmentShaderID(b);const F=t.getRenderTarget(),oe=t.state.buffers.depth.getReversed(),se=j.isInstancedMesh===!0,me=j.isBatchedMesh===!0,Ke=!!b.map,P=!!b.matcap,g=!!ue,B=!!b.aoMap,$=!!b.lightMap,ee=!!b.bumpMap,W=!!b.normalMap,ge=!!b.displacementMap,Q=!!b.emissiveMap,ce=!!b.metalnessMap,fe=!!b.roughnessMap,Pe=b.anisotropy>0,E=b.clearcoat>0,x=b.dispersion>0,N=b.iridescence>0,K=b.sheen>0,ae=b.transmission>0,Y=Pe&&!!b.anisotropyMap,Le=E&&!!b.clearcoatMap,ve=E&&!!b.clearcoatNormalMap,Ie=E&&!!b.clearcoatRoughnessMap,Ue=N&&!!b.iridescenceMap,_e=N&&!!b.iridescenceThicknessMap,Ce=K&&!!b.sheenColorMap,Be=K&&!!b.sheenRoughnessMap,Fe=!!b.specularMap,Ae=!!b.specularColorMap,at=!!b.specularIntensityMap,k=ae&&!!b.transmissionMap,ye=ae&&!!b.thicknessMap,Ee=!!b.gradientMap,ke=!!b.alphaMap,xe=b.alphaTest>0,he=!!b.alphaHash,Re=!!b.extensions;let qe=Ts;b.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(qe=t.toneMapping);const Mt={shaderID:be,shaderType:b.type,shaderName:b.name,vertexShader:nt,fragmentShader:je,defines:b.defines,customVertexShaderID:re,customFragmentShaderID:we,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:me,batchingColor:me&&j._colorsTexture!==null,instancing:se,instancingColor:se&&j.instanceColor!==null,instancingMorph:se&&j.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:F===null?t.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:oo,alphaToCoverage:!!b.alphaToCoverage,map:Ke,matcap:P,envMap:g,envMapMode:g&&ue.mapping,envMapCubeUVHeight:X,aoMap:B,lightMap:$,bumpMap:ee,normalMap:W,displacementMap:f&&ge,emissiveMap:Q,normalMapObjectSpace:W&&b.normalMapType===XT,normalMapTangentSpace:W&&b.normalMapType===Kg,metalnessMap:ce,roughnessMap:fe,anisotropy:Pe,anisotropyMap:Y,clearcoat:E,clearcoatMap:Le,clearcoatNormalMap:ve,clearcoatRoughnessMap:Ie,dispersion:x,iridescence:N,iridescenceMap:Ue,iridescenceThicknessMap:_e,sheen:K,sheenColorMap:Ce,sheenRoughnessMap:Be,specularMap:Fe,specularColorMap:Ae,specularIntensityMap:at,transmission:ae,transmissionMap:k,thicknessMap:ye,gradientMap:Ee,opaque:b.transparent===!1&&b.blending===Br&&b.alphaToCoverage===!1,alphaMap:ke,alphaTest:xe,alphaHash:he,combine:b.combine,mapUv:Ke&&_(b.map.channel),aoMapUv:B&&_(b.aoMap.channel),lightMapUv:$&&_(b.lightMap.channel),bumpMapUv:ee&&_(b.bumpMap.channel),normalMapUv:W&&_(b.normalMap.channel),displacementMapUv:ge&&_(b.displacementMap.channel),emissiveMapUv:Q&&_(b.emissiveMap.channel),metalnessMapUv:ce&&_(b.metalnessMap.channel),roughnessMapUv:fe&&_(b.roughnessMap.channel),anisotropyMapUv:Y&&_(b.anisotropyMap.channel),clearcoatMapUv:Le&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:ve&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Be&&_(b.sheenRoughnessMap.channel),specularMapUv:Fe&&_(b.specularMap.channel),specularColorMapUv:Ae&&_(b.specularColorMap.channel),specularIntensityMapUv:at&&_(b.specularIntensityMap.channel),transmissionMapUv:k&&_(b.transmissionMap.channel),thicknessMapUv:ye&&_(b.thicknessMap.channel),alphaMapUv:ke&&_(b.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(W||Pe),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!le.attributes.uv&&(Ke||ke),fog:!!J,useFog:b.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:oe,skinning:j.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:We,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:qe,decodeVideoTexture:Ke&&b.map.isVideoTexture===!0&&wt.getTransfer(b.map.colorSpace)===Dt,decodeVideoTextureEmissive:Q&&b.emissiveMap.isVideoTexture===!0&&wt.getTransfer(b.emissiveMap.colorSpace)===Dt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ji,flipSided:b.side===In,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Re&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&b.extensions.multiDraw===!0||me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const R in b.defines)M.push(R),M.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(C(M,b),A(M,b),M.push(t.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function C(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function A(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function w(b){const M=v[b.type];let R;if(M){const q=Mi[M];R=wA.clone(q.uniforms)}else R=b.uniforms;return R}function U(b,M){let R;for(let q=0,j=u.length;q<j;q++){const J=u[q];if(J.cacheKey===M){R=J,++R.usedTimes;break}}return R===void 0&&(R=new XR(t,M,b,r),u.push(R)),R}function L(b){if(--b.usedTimes===0){const M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),b.destroy()}}function D(b){l.remove(b)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:U,releaseProgram:L,releaseShaderCache:D,programs:u,dispose:I}}function ZR(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function QR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function np(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ip(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(d,f,h,v,_,m){let p=t[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:v,renderOrder:d.renderOrder,z:_,group:m},t[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function a(d,f,h,v,_,m){const p=o(d,f,h,v,_,m);h.transmission>0?i.push(p):h.transparent===!0?s.push(p):n.push(p)}function l(d,f,h,v,_,m){const p=o(d,f,h,v,_,m);h.transmission>0?i.unshift(p):h.transparent===!0?s.unshift(p):n.unshift(p)}function c(d,f){n.length>1&&n.sort(d||QR),i.length>1&&i.sort(f||np),s.length>1&&s.sort(f||np)}function u(){for(let d=e,f=t.length;d<f;d++){const h=t[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function JR(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new ip,t.set(i,[o])):s>=r.length?(o=new ip,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function eP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Z,color:new vt};break;case"SpotLight":n={position:new Z,direction:new Z,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new vt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":n={color:new vt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return t[e.id]=n,n}}}function tP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let nP=0;function iP(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function sP(t){const e=new eP,n=tP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Z);const s=new Z,r=new jt,o=new jt;function a(c){let u=0,d=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let h=0,v=0,_=0,m=0,p=0,C=0,A=0,w=0,U=0,L=0,D=0;c.sort(iP);for(let b=0,M=c.length;b<M;b++){const R=c[b],q=R.color,j=R.intensity,J=R.distance,le=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=q.r*j,d+=q.g*j,f+=q.b*j;else if(R.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(R.sh.coefficients[G],j);D++}else if(R.isDirectionalLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const ue=R.shadow,X=n.get(R);X.shadowIntensity=ue.intensity,X.shadowBias=ue.bias,X.shadowNormalBias=ue.normalBias,X.shadowRadius=ue.radius,X.shadowMapSize=ue.mapSize,i.directionalShadow[h]=X,i.directionalShadowMap[h]=le,i.directionalShadowMatrix[h]=R.shadow.matrix,C++}i.directional[h]=G,h++}else if(R.isSpotLight){const G=e.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(q).multiplyScalar(j),G.distance=J,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,i.spot[_]=G;const ue=R.shadow;if(R.map&&(i.spotLightMap[U]=R.map,U++,ue.updateMatrices(R),R.castShadow&&L++),i.spotLightMatrix[_]=ue.matrix,R.castShadow){const X=n.get(R);X.shadowIntensity=ue.intensity,X.shadowBias=ue.bias,X.shadowNormalBias=ue.normalBias,X.shadowRadius=ue.radius,X.shadowMapSize=ue.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=le,w++}_++}else if(R.isRectAreaLight){const G=e.get(R);G.color.copy(q).multiplyScalar(j),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=G,m++}else if(R.isPointLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const ue=R.shadow,X=n.get(R);X.shadowIntensity=ue.intensity,X.shadowBias=ue.bias,X.shadowNormalBias=ue.normalBias,X.shadowRadius=ue.radius,X.shadowMapSize=ue.mapSize,X.shadowCameraNear=ue.camera.near,X.shadowCameraFar=ue.camera.far,i.pointShadow[v]=X,i.pointShadowMap[v]=le,i.pointShadowMatrix[v]=R.shadow.matrix,A++}i.point[v]=G,v++}else if(R.isHemisphereLight){const G=e.get(R);G.skyColor.copy(R.color).multiplyScalar(j),G.groundColor.copy(R.groundColor).multiplyScalar(j),i.hemi[p]=G,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const I=i.hash;(I.directionalLength!==h||I.pointLength!==v||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==C||I.numPointShadows!==A||I.numSpotShadows!==w||I.numSpotMaps!==U||I.numLightProbes!==D)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=m,i.point.length=v,i.hemi.length=p,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=w+U-L,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=D,I.directionalLength=h,I.pointLength=v,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=C,I.numPointShadows=A,I.numSpotShadows=w,I.numSpotMaps=U,I.numLightProbes=D,i.version=nP++)}function l(c,u){let d=0,f=0,h=0,v=0,_=0;const m=u.matrixWorldInverse;for(let p=0,C=c.length;p<C;p++){const A=c[p];if(A.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),d++}else if(A.isSpotLight){const w=i.spot[h];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),h++}else if(A.isRectAreaLight){const w=i.rectArea[v];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(A.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(A.width*.5,0,0),w.halfHeight.set(0,A.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),v++}else if(A.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(m),f++}else if(A.isHemisphereLight){const w=i.hemi[_];w.direction.setFromMatrixPosition(A.matrixWorld),w.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function sp(t){const e=new sP(t),n=[],i=[];function s(u){c.camera=u,n.length=0,i.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function rP(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new sp(t),e.set(s,[a])):r>=o.length?(a=new sp(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const oP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aP=`uniform sampler2D shadow_pass;
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
}`;function lP(t,e,n){let i=new qd;const s=new ct,r=new ct,o=new Xt,a=new LA({depthPacking:$T}),l=new IA,c={},u=n.maxTextureSize,d={[As]:In,[In]:As,[ji]:ji},f=new Cs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:oP,fragmentShader:aP}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const v=new Ds;v.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new di(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bg;let p=this.type;this.render=function(L,D,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const b=t.getRenderTarget(),M=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),q=t.state;q.setBlending(Es),q.buffers.depth.getReversed()?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const j=p!==Vi&&this.type===Vi,J=p===Vi&&this.type!==Vi;for(let le=0,G=L.length;le<G;le++){const ue=L[le],X=ue.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const be=X.getFrameExtents();if(s.multiply(be),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/be.x),s.x=r.x*be.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/be.y),s.y=r.y*be.y,X.mapSize.y=r.y)),X.map===null||j===!0||J===!0){const Ne=this.type!==Vi?{minFilter:pi,magFilter:pi}:{};X.map!==null&&X.map.dispose(),X.map=new or(s.x,s.y,Ne),X.map.texture.name=ue.name+".shadowMap",X.camera.updateProjectionMatrix()}t.setRenderTarget(X.map),t.clear();const Te=X.getViewportCount();for(let Ne=0;Ne<Te;Ne++){const We=X.getViewport(Ne);o.set(r.x*We.x,r.y*We.y,r.x*We.z,r.y*We.w),q.viewport(o),X.updateMatrices(ue,Ne),i=X.getFrustum(),w(D,I,X.camera,ue,this.type)}X.isPointLightShadow!==!0&&this.type===Vi&&C(X,I),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(b,M,R)};function C(L,D){const I=e.update(_);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,h.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new or(s.x,s.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,t.setRenderTarget(L.mapPass),t.clear(),t.renderBufferDirect(D,null,I,f,_,null),h.uniforms.shadow_pass.value=L.mapPass.texture,h.uniforms.resolution.value=L.mapSize,h.uniforms.radius.value=L.radius,t.setRenderTarget(L.map),t.clear(),t.renderBufferDirect(D,null,I,h,_,null)}function A(L,D,I,b){let M=null;const R=I.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(R!==void 0)M=R;else if(M=I.isPointLight===!0?l:a,t.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const q=M.uuid,j=D.uuid;let J=c[q];J===void 0&&(J={},c[q]=J);let le=J[j];le===void 0&&(le=M.clone(),J[j]=le,D.addEventListener("dispose",U)),M=le}if(M.visible=D.visible,M.wireframe=D.wireframe,b===Vi?M.side=D.shadowSide!==null?D.shadowSide:D.side:M.side=D.shadowSide!==null?D.shadowSide:d[D.side],M.alphaMap=D.alphaMap,M.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,M.map=D.map,M.clipShadows=D.clipShadows,M.clippingPlanes=D.clippingPlanes,M.clipIntersection=D.clipIntersection,M.displacementMap=D.displacementMap,M.displacementScale=D.displacementScale,M.displacementBias=D.displacementBias,M.wireframeLinewidth=D.wireframeLinewidth,M.linewidth=D.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const q=t.properties.get(M);q.light=I}return M}function w(L,D,I,b,M){if(L.visible===!1)return;if(L.layers.test(D.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&M===Vi)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,L.matrixWorld);const j=e.update(L),J=L.material;if(Array.isArray(J)){const le=j.groups;for(let G=0,ue=le.length;G<ue;G++){const X=le[G],be=J[X.materialIndex];if(be&&be.visible){const Te=A(L,be,b,M);L.onBeforeShadow(t,L,D,I,j,Te,X),t.renderBufferDirect(I,null,j,Te,L,X),L.onAfterShadow(t,L,D,I,j,Te,X)}}}else if(J.visible){const le=A(L,J,b,M);L.onBeforeShadow(t,L,D,I,j,le,null),t.renderBufferDirect(I,null,j,le,L,null),L.onAfterShadow(t,L,D,I,j,le,null)}}const q=L.children;for(let j=0,J=q.length;j<J;j++)w(q[j],D,I,b,M)}function U(L){L.target.removeEventListener("dispose",U);for(const I in c){const b=c[I],M=L.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const cP={[mu]:gu,[vu]:yu,[_u]:bu,[io]:xu,[gu]:mu,[yu]:vu,[bu]:_u,[xu]:io};function uP(t,e){function n(){let k=!1;const ye=new Xt;let Ee=null;const ke=new Xt(0,0,0,0);return{setMask:function(xe){Ee!==xe&&!k&&(t.colorMask(xe,xe,xe,xe),Ee=xe)},setLocked:function(xe){k=xe},setClear:function(xe,he,Re,qe,Mt){Mt===!0&&(xe*=qe,he*=qe,Re*=qe),ye.set(xe,he,Re,qe),ke.equals(ye)===!1&&(t.clearColor(xe,he,Re,qe),ke.copy(ye))},reset:function(){k=!1,Ee=null,ke.set(-1,0,0,0)}}}function i(){let k=!1,ye=!1,Ee=null,ke=null,xe=null;return{setReversed:function(he){if(ye!==he){const Re=e.get("EXT_clip_control");he?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ye=he;const qe=xe;xe=null,this.setClear(qe)}},getReversed:function(){return ye},setTest:function(he){he?F(t.DEPTH_TEST):oe(t.DEPTH_TEST)},setMask:function(he){Ee!==he&&!k&&(t.depthMask(he),Ee=he)},setFunc:function(he){if(ye&&(he=cP[he]),ke!==he){switch(he){case mu:t.depthFunc(t.NEVER);break;case gu:t.depthFunc(t.ALWAYS);break;case vu:t.depthFunc(t.LESS);break;case io:t.depthFunc(t.LEQUAL);break;case _u:t.depthFunc(t.EQUAL);break;case xu:t.depthFunc(t.GEQUAL);break;case yu:t.depthFunc(t.GREATER);break;case bu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ke=he}},setLocked:function(he){k=he},setClear:function(he){xe!==he&&(ye&&(he=1-he),t.clearDepth(he),xe=he)},reset:function(){k=!1,Ee=null,ke=null,xe=null,ye=!1}}}function s(){let k=!1,ye=null,Ee=null,ke=null,xe=null,he=null,Re=null,qe=null,Mt=null;return{setTest:function(z){k||(z?F(t.STENCIL_TEST):oe(t.STENCIL_TEST))},setMask:function(z){ye!==z&&!k&&(t.stencilMask(z),ye=z)},setFunc:function(z,S,O){(Ee!==z||ke!==S||xe!==O)&&(t.stencilFunc(z,S,O),Ee=z,ke=S,xe=O)},setOp:function(z,S,O){(he!==z||Re!==S||qe!==O)&&(t.stencilOp(z,S,O),he=z,Re=S,qe=O)},setLocked:function(z){k=z},setClear:function(z){Mt!==z&&(t.clearStencil(z),Mt=z)},reset:function(){k=!1,ye=null,Ee=null,ke=null,xe=null,he=null,Re=null,qe=null,Mt=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],v=null,_=!1,m=null,p=null,C=null,A=null,w=null,U=null,L=null,D=new vt(0,0,0),I=0,b=!1,M=null,R=null,q=null,j=null,J=null;const le=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,ue=0;const X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=ue>=1):X.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=ue>=2);let be=null,Te={};const Ne=t.getParameter(t.SCISSOR_BOX),We=t.getParameter(t.VIEWPORT),nt=new Xt().fromArray(Ne),je=new Xt().fromArray(We);function re(k,ye,Ee,ke){const xe=new Uint8Array(4),he=t.createTexture();t.bindTexture(k,he),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Re=0;Re<Ee;Re++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(ye,0,t.RGBA,1,1,ke,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(ye+Re,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return he}const we={};we[t.TEXTURE_2D]=re(t.TEXTURE_2D,t.TEXTURE_2D,1),we[t.TEXTURE_CUBE_MAP]=re(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[t.TEXTURE_2D_ARRAY]=re(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),we[t.TEXTURE_3D]=re(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),F(t.DEPTH_TEST),o.setFunc(io),ee(!1),W(ah),F(t.CULL_FACE),B(Es);function F(k){u[k]!==!0&&(t.enable(k),u[k]=!0)}function oe(k){u[k]!==!1&&(t.disable(k),u[k]=!1)}function se(k,ye){return d[k]!==ye?(t.bindFramebuffer(k,ye),d[k]=ye,k===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ye),k===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ye),!0):!1}function me(k,ye){let Ee=h,ke=!1;if(k){Ee=f.get(ye),Ee===void 0&&(Ee=[],f.set(ye,Ee));const xe=k.textures;if(Ee.length!==xe.length||Ee[0]!==t.COLOR_ATTACHMENT0){for(let he=0,Re=xe.length;he<Re;he++)Ee[he]=t.COLOR_ATTACHMENT0+he;Ee.length=xe.length,ke=!0}}else Ee[0]!==t.BACK&&(Ee[0]=t.BACK,ke=!0);ke&&t.drawBuffers(Ee)}function Ke(k){return v!==k?(t.useProgram(k),v=k,!0):!1}const P={[Ws]:t.FUNC_ADD,[vT]:t.FUNC_SUBTRACT,[_T]:t.FUNC_REVERSE_SUBTRACT};P[xT]=t.MIN,P[yT]=t.MAX;const g={[bT]:t.ZERO,[wT]:t.ONE,[ST]:t.SRC_COLOR,[hu]:t.SRC_ALPHA,[RT]:t.SRC_ALPHA_SATURATE,[AT]:t.DST_COLOR,[ET]:t.DST_ALPHA,[MT]:t.ONE_MINUS_SRC_COLOR,[pu]:t.ONE_MINUS_SRC_ALPHA,[CT]:t.ONE_MINUS_DST_COLOR,[TT]:t.ONE_MINUS_DST_ALPHA,[PT]:t.CONSTANT_COLOR,[DT]:t.ONE_MINUS_CONSTANT_COLOR,[LT]:t.CONSTANT_ALPHA,[IT]:t.ONE_MINUS_CONSTANT_ALPHA};function B(k,ye,Ee,ke,xe,he,Re,qe,Mt,z){if(k===Es){_===!0&&(oe(t.BLEND),_=!1);return}if(_===!1&&(F(t.BLEND),_=!0),k!==gT){if(k!==m||z!==b){if((p!==Ws||w!==Ws)&&(t.blendEquation(t.FUNC_ADD),p=Ws,w=Ws),z)switch(k){case Br:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case lh:t.blendFunc(t.ONE,t.ONE);break;case ch:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case uh:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Br:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case lh:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case ch:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}C=null,A=null,U=null,L=null,D.set(0,0,0),I=0,m=k,b=z}return}xe=xe||ye,he=he||Ee,Re=Re||ke,(ye!==p||xe!==w)&&(t.blendEquationSeparate(P[ye],P[xe]),p=ye,w=xe),(Ee!==C||ke!==A||he!==U||Re!==L)&&(t.blendFuncSeparate(g[Ee],g[ke],g[he],g[Re]),C=Ee,A=ke,U=he,L=Re),(qe.equals(D)===!1||Mt!==I)&&(t.blendColor(qe.r,qe.g,qe.b,Mt),D.copy(qe),I=Mt),m=k,b=!1}function $(k,ye){k.side===ji?oe(t.CULL_FACE):F(t.CULL_FACE);let Ee=k.side===In;ye&&(Ee=!Ee),ee(Ee),k.blending===Br&&k.transparent===!1?B(Es):B(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const ke=k.stencilWrite;a.setTest(ke),ke&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Q(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?F(t.SAMPLE_ALPHA_TO_COVERAGE):oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function ee(k){M!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),M=k)}function W(k){k!==hT?(F(t.CULL_FACE),k!==R&&(k===ah?t.cullFace(t.BACK):k===pT?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):oe(t.CULL_FACE),R=k}function ge(k){k!==q&&(G&&t.lineWidth(k),q=k)}function Q(k,ye,Ee){k?(F(t.POLYGON_OFFSET_FILL),(j!==ye||J!==Ee)&&(t.polygonOffset(ye,Ee),j=ye,J=Ee)):oe(t.POLYGON_OFFSET_FILL)}function ce(k){k?F(t.SCISSOR_TEST):oe(t.SCISSOR_TEST)}function fe(k){k===void 0&&(k=t.TEXTURE0+le-1),be!==k&&(t.activeTexture(k),be=k)}function Pe(k,ye,Ee){Ee===void 0&&(be===null?Ee=t.TEXTURE0+le-1:Ee=be);let ke=Te[Ee];ke===void 0&&(ke={type:void 0,texture:void 0},Te[Ee]=ke),(ke.type!==k||ke.texture!==ye)&&(be!==Ee&&(t.activeTexture(Ee),be=Ee),t.bindTexture(k,ye||we[k]),ke.type=k,ke.texture=ye)}function E(){const k=Te[be];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function x(){try{t.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function N(){try{t.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function K(){try{t.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ae(){try{t.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Y(){try{t.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Le(){try{t.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{t.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ie(){try{t.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ue(){try{t.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(){try{t.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ce(k){nt.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),nt.copy(k))}function Be(k){je.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),je.copy(k))}function Fe(k,ye){let Ee=c.get(ye);Ee===void 0&&(Ee=new WeakMap,c.set(ye,Ee));let ke=Ee.get(k);ke===void 0&&(ke=t.getUniformBlockIndex(ye,k.name),Ee.set(k,ke))}function Ae(k,ye){const ke=c.get(ye).get(k);l.get(ye)!==ke&&(t.uniformBlockBinding(ye,ke,k.__bindingPointIndex),l.set(ye,ke))}function at(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},be=null,Te={},d={},f=new WeakMap,h=[],v=null,_=!1,m=null,p=null,C=null,A=null,w=null,U=null,L=null,D=new vt(0,0,0),I=0,b=!1,M=null,R=null,q=null,j=null,J=null,nt.set(0,0,t.canvas.width,t.canvas.height),je.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:F,disable:oe,bindFramebuffer:se,drawBuffers:me,useProgram:Ke,setBlending:B,setMaterial:$,setFlipSided:ee,setCullFace:W,setLineWidth:ge,setPolygonOffset:Q,setScissorTest:ce,activeTexture:fe,bindTexture:Pe,unbindTexture:E,compressedTexImage2D:x,compressedTexImage3D:N,texImage2D:Ue,texImage3D:_e,updateUBOMapping:Fe,uniformBlockBinding:Ae,texStorage2D:ve,texStorage3D:Ie,texSubImage2D:K,texSubImage3D:ae,compressedTexSubImage2D:Y,compressedTexSubImage3D:Le,scissor:Ce,viewport:Be,reset:at}}function dP(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,x){return h?new OffscreenCanvas(E,x):Pl("canvas")}function _(E,x,N){let K=1;const ae=Pe(E);if((ae.width>N||ae.height>N)&&(K=N/Math.max(ae.width,ae.height)),K<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Y=Math.floor(K*ae.width),Le=Math.floor(K*ae.height);d===void 0&&(d=v(Y,Le));const ve=x?v(Y,Le):d;return ve.width=Y,ve.height=Le,ve.getContext("2d").drawImage(E,0,0,Y,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+Y+"x"+Le+")."),ve}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){t.generateMipmap(E)}function C(E){return E.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?t.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function A(E,x,N,K,ae=!1){if(E!==null){if(t[E]!==void 0)return t[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Y=x;if(x===t.RED&&(N===t.FLOAT&&(Y=t.R32F),N===t.HALF_FLOAT&&(Y=t.R16F),N===t.UNSIGNED_BYTE&&(Y=t.R8)),x===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(Y=t.R8UI),N===t.UNSIGNED_SHORT&&(Y=t.R16UI),N===t.UNSIGNED_INT&&(Y=t.R32UI),N===t.BYTE&&(Y=t.R8I),N===t.SHORT&&(Y=t.R16I),N===t.INT&&(Y=t.R32I)),x===t.RG&&(N===t.FLOAT&&(Y=t.RG32F),N===t.HALF_FLOAT&&(Y=t.RG16F),N===t.UNSIGNED_BYTE&&(Y=t.RG8)),x===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(Y=t.RG8UI),N===t.UNSIGNED_SHORT&&(Y=t.RG16UI),N===t.UNSIGNED_INT&&(Y=t.RG32UI),N===t.BYTE&&(Y=t.RG8I),N===t.SHORT&&(Y=t.RG16I),N===t.INT&&(Y=t.RG32I)),x===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),N===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),N===t.UNSIGNED_INT&&(Y=t.RGB32UI),N===t.BYTE&&(Y=t.RGB8I),N===t.SHORT&&(Y=t.RGB16I),N===t.INT&&(Y=t.RGB32I)),x===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),N===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),N===t.UNSIGNED_INT&&(Y=t.RGBA32UI),N===t.BYTE&&(Y=t.RGBA8I),N===t.SHORT&&(Y=t.RGBA16I),N===t.INT&&(Y=t.RGBA32I)),x===t.RGB&&N===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),x===t.RGBA){const Le=ae?Cl:wt.getTransfer(K);N===t.FLOAT&&(Y=t.RGBA32F),N===t.HALF_FLOAT&&(Y=t.RGBA16F),N===t.UNSIGNED_BYTE&&(Y=Le===Dt?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function w(E,x){let N;return E?x===null||x===sr||x===Zo?N=t.DEPTH24_STENCIL8:x===Yi?N=t.DEPTH32F_STENCIL8:x===Ko&&(N=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===sr||x===Zo?N=t.DEPTH_COMPONENT24:x===Yi?N=t.DEPTH_COMPONENT32F:x===Ko&&(N=t.DEPTH_COMPONENT16),N}function U(E,x){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==pi&&E.minFilter!==Ei?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function L(E){const x=E.target;x.removeEventListener("dispose",L),I(x),x.isVideoTexture&&u.delete(x)}function D(E){const x=E.target;x.removeEventListener("dispose",D),M(x)}function I(E){const x=i.get(E);if(x.__webglInit===void 0)return;const N=E.source,K=f.get(N);if(K){const ae=K[x.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&b(E),Object.keys(K).length===0&&f.delete(N)}i.remove(E)}function b(E){const x=i.get(E);t.deleteTexture(x.__webglTexture);const N=E.source,K=f.get(N);delete K[x.__cacheKey],o.memory.textures--}function M(E){const x=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let ae=0;ae<x.__webglFramebuffer[K].length;ae++)t.deleteFramebuffer(x.__webglFramebuffer[K][ae]);else t.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)t.deleteFramebuffer(x.__webglFramebuffer[K]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=E.textures;for(let K=0,ae=N.length;K<ae;K++){const Y=i.get(N[K]);Y.__webglTexture&&(t.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(N[K])}i.remove(E)}let R=0;function q(){R=0}function j(){const E=R;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),R+=1,E}function J(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function le(E,x){const N=i.get(E);if(E.isVideoTexture&&ce(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&N.__version!==E.version){const K=E.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(N,E,x);return}}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+x)}function G(E,x){const N=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){we(N,E,x);return}n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+x)}function ue(E,x){const N=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){we(N,E,x);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+x)}function X(E,x){const N=i.get(E);if(E.version>0&&N.__version!==E.version){F(N,E,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+x)}const be={[Mu]:t.REPEAT,[Xs]:t.CLAMP_TO_EDGE,[Eu]:t.MIRRORED_REPEAT},Te={[pi]:t.NEAREST,[GT]:t.NEAREST_MIPMAP_NEAREST,[Ca]:t.NEAREST_MIPMAP_LINEAR,[Ei]:t.LINEAR,[vc]:t.LINEAR_MIPMAP_NEAREST,[qs]:t.LINEAR_MIPMAP_LINEAR},Ne={[qT]:t.NEVER,[JT]:t.ALWAYS,[jT]:t.LESS,[Zg]:t.LEQUAL,[YT]:t.EQUAL,[QT]:t.GEQUAL,[KT]:t.GREATER,[ZT]:t.NOTEQUAL};function We(E,x){if(x.type===Yi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ei||x.magFilter===vc||x.magFilter===Ca||x.magFilter===qs||x.minFilter===Ei||x.minFilter===vc||x.minFilter===Ca||x.minFilter===qs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(E,t.TEXTURE_WRAP_S,be[x.wrapS]),t.texParameteri(E,t.TEXTURE_WRAP_T,be[x.wrapT]),(E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)&&t.texParameteri(E,t.TEXTURE_WRAP_R,be[x.wrapR]),t.texParameteri(E,t.TEXTURE_MAG_FILTER,Te[x.magFilter]),t.texParameteri(E,t.TEXTURE_MIN_FILTER,Te[x.minFilter]),x.compareFunction&&(t.texParameteri(E,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(E,t.TEXTURE_COMPARE_FUNC,Ne[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===pi||x.minFilter!==Ca&&x.minFilter!==qs||x.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function nt(E,x){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",L));const K=x.source;let ae=f.get(K);ae===void 0&&(ae={},f.set(K,ae));const Y=J(x);if(Y!==E.__cacheKey){ae[Y]===void 0&&(ae[Y]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,N=!0),ae[Y].usedTimes++;const Le=ae[E.__cacheKey];Le!==void 0&&(ae[E.__cacheKey].usedTimes--,Le.usedTimes===0&&b(x)),E.__cacheKey=Y,E.__webglTexture=ae[Y].texture}return N}function je(E,x,N){return Math.floor(Math.floor(E/N)/x)}function re(E,x,N,K){const Y=E.updateRanges;if(Y.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,N,K,x.data);else{Y.sort((_e,Ce)=>_e.start-Ce.start);let Le=0;for(let _e=1;_e<Y.length;_e++){const Ce=Y[Le],Be=Y[_e],Fe=Ce.start+Ce.count,Ae=je(Be.start,x.width,4),at=je(Ce.start,x.width,4);Be.start<=Fe+1&&Ae===at&&je(Be.start+Be.count-1,x.width,4)===Ae?Ce.count=Math.max(Ce.count,Be.start+Be.count-Ce.start):(++Le,Y[Le]=Be)}Y.length=Le+1;const ve=t.getParameter(t.UNPACK_ROW_LENGTH),Ie=t.getParameter(t.UNPACK_SKIP_PIXELS),Ue=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let _e=0,Ce=Y.length;_e<Ce;_e++){const Be=Y[_e],Fe=Math.floor(Be.start/4),Ae=Math.ceil(Be.count/4),at=Fe%x.width,k=Math.floor(Fe/x.width),ye=Ae,Ee=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,at),t.pixelStorei(t.UNPACK_SKIP_ROWS,k),n.texSubImage2D(t.TEXTURE_2D,0,at,k,ye,Ee,N,K,x.data)}E.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ve),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ie),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ue)}}function we(E,x,N){let K=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=t.TEXTURE_3D);const ae=nt(E,x),Y=x.source;n.bindTexture(K,E.__webglTexture,t.TEXTURE0+N);const Le=i.get(Y);if(Y.version!==Le.__version||ae===!0){n.activeTexture(t.TEXTURE0+N);const ve=wt.getPrimaries(wt.workingColorSpace),Ie=x.colorSpace===ms?null:wt.getPrimaries(x.colorSpace),Ue=x.colorSpace===ms||ve===Ie?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let _e=_(x.image,!1,s.maxTextureSize);_e=fe(x,_e);const Ce=r.convert(x.format,x.colorSpace),Be=r.convert(x.type);let Fe=A(x.internalFormat,Ce,Be,x.colorSpace,x.isVideoTexture);We(K,x);let Ae;const at=x.mipmaps,k=x.isVideoTexture!==!0,ye=Le.__version===void 0||ae===!0,Ee=Y.dataReady,ke=U(x,_e);if(x.isDepthTexture)Fe=w(x.format===Jo,x.type),ye&&(k?n.texStorage2D(t.TEXTURE_2D,1,Fe,_e.width,_e.height):n.texImage2D(t.TEXTURE_2D,0,Fe,_e.width,_e.height,0,Ce,Be,null));else if(x.isDataTexture)if(at.length>0){k&&ye&&n.texStorage2D(t.TEXTURE_2D,ke,Fe,at[0].width,at[0].height);for(let xe=0,he=at.length;xe<he;xe++)Ae=at[xe],k?Ee&&n.texSubImage2D(t.TEXTURE_2D,xe,0,0,Ae.width,Ae.height,Ce,Be,Ae.data):n.texImage2D(t.TEXTURE_2D,xe,Fe,Ae.width,Ae.height,0,Ce,Be,Ae.data);x.generateMipmaps=!1}else k?(ye&&n.texStorage2D(t.TEXTURE_2D,ke,Fe,_e.width,_e.height),Ee&&re(x,_e,Ce,Be)):n.texImage2D(t.TEXTURE_2D,0,Fe,_e.width,_e.height,0,Ce,Be,_e.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){k&&ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ke,Fe,at[0].width,at[0].height,_e.depth);for(let xe=0,he=at.length;xe<he;xe++)if(Ae=at[xe],x.format!==ui)if(Ce!==null)if(k){if(Ee)if(x.layerUpdates.size>0){const Re=Uh(Ae.width,Ae.height,x.format,x.type);for(const qe of x.layerUpdates){const Mt=Ae.data.subarray(qe*Re/Ae.data.BYTES_PER_ELEMENT,(qe+1)*Re/Ae.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,xe,0,0,qe,Ae.width,Ae.height,1,Ce,Mt)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,xe,0,0,0,Ae.width,Ae.height,_e.depth,Ce,Ae.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,xe,Fe,Ae.width,Ae.height,_e.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Ee&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,xe,0,0,0,Ae.width,Ae.height,_e.depth,Ce,Be,Ae.data):n.texImage3D(t.TEXTURE_2D_ARRAY,xe,Fe,Ae.width,Ae.height,_e.depth,0,Ce,Be,Ae.data)}else{k&&ye&&n.texStorage2D(t.TEXTURE_2D,ke,Fe,at[0].width,at[0].height);for(let xe=0,he=at.length;xe<he;xe++)Ae=at[xe],x.format!==ui?Ce!==null?k?Ee&&n.compressedTexSubImage2D(t.TEXTURE_2D,xe,0,0,Ae.width,Ae.height,Ce,Ae.data):n.compressedTexImage2D(t.TEXTURE_2D,xe,Fe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Ee&&n.texSubImage2D(t.TEXTURE_2D,xe,0,0,Ae.width,Ae.height,Ce,Be,Ae.data):n.texImage2D(t.TEXTURE_2D,xe,Fe,Ae.width,Ae.height,0,Ce,Be,Ae.data)}else if(x.isDataArrayTexture)if(k){if(ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ke,Fe,_e.width,_e.height,_e.depth),Ee)if(x.layerUpdates.size>0){const xe=Uh(_e.width,_e.height,x.format,x.type);for(const he of x.layerUpdates){const Re=_e.data.subarray(he*xe/_e.data.BYTES_PER_ELEMENT,(he+1)*xe/_e.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,_e.width,_e.height,1,Ce,Be,Re)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ce,Be,_e.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Fe,_e.width,_e.height,_e.depth,0,Ce,Be,_e.data);else if(x.isData3DTexture)k?(ye&&n.texStorage3D(t.TEXTURE_3D,ke,Fe,_e.width,_e.height,_e.depth),Ee&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ce,Be,_e.data)):n.texImage3D(t.TEXTURE_3D,0,Fe,_e.width,_e.height,_e.depth,0,Ce,Be,_e.data);else if(x.isFramebufferTexture){if(ye)if(k)n.texStorage2D(t.TEXTURE_2D,ke,Fe,_e.width,_e.height);else{let xe=_e.width,he=_e.height;for(let Re=0;Re<ke;Re++)n.texImage2D(t.TEXTURE_2D,Re,Fe,xe,he,0,Ce,Be,null),xe>>=1,he>>=1}}else if(at.length>0){if(k&&ye){const xe=Pe(at[0]);n.texStorage2D(t.TEXTURE_2D,ke,Fe,xe.width,xe.height)}for(let xe=0,he=at.length;xe<he;xe++)Ae=at[xe],k?Ee&&n.texSubImage2D(t.TEXTURE_2D,xe,0,0,Ce,Be,Ae):n.texImage2D(t.TEXTURE_2D,xe,Fe,Ce,Be,Ae);x.generateMipmaps=!1}else if(k){if(ye){const xe=Pe(_e);n.texStorage2D(t.TEXTURE_2D,ke,Fe,xe.width,xe.height)}Ee&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ce,Be,_e)}else n.texImage2D(t.TEXTURE_2D,0,Fe,Ce,Be,_e);m(x)&&p(K),Le.__version=Y.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function F(E,x,N){if(x.image.length!==6)return;const K=nt(E,x),ae=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,E.__webglTexture,t.TEXTURE0+N);const Y=i.get(ae);if(ae.version!==Y.__version||K===!0){n.activeTexture(t.TEXTURE0+N);const Le=wt.getPrimaries(wt.workingColorSpace),ve=x.colorSpace===ms?null:wt.getPrimaries(x.colorSpace),Ie=x.colorSpace===ms||Le===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const Ue=x.isCompressedTexture||x.image[0].isCompressedTexture,_e=x.image[0]&&x.image[0].isDataTexture,Ce=[];for(let he=0;he<6;he++)!Ue&&!_e?Ce[he]=_(x.image[he],!0,s.maxCubemapSize):Ce[he]=_e?x.image[he].image:x.image[he],Ce[he]=fe(x,Ce[he]);const Be=Ce[0],Fe=r.convert(x.format,x.colorSpace),Ae=r.convert(x.type),at=A(x.internalFormat,Fe,Ae,x.colorSpace),k=x.isVideoTexture!==!0,ye=Y.__version===void 0||K===!0,Ee=ae.dataReady;let ke=U(x,Be);We(t.TEXTURE_CUBE_MAP,x);let xe;if(Ue){k&&ye&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ke,at,Be.width,Be.height);for(let he=0;he<6;he++){xe=Ce[he].mipmaps;for(let Re=0;Re<xe.length;Re++){const qe=xe[Re];x.format!==ui?Fe!==null?k?Ee&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re,0,0,qe.width,qe.height,Fe,qe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re,at,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re,0,0,qe.width,qe.height,Fe,Ae,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re,at,qe.width,qe.height,0,Fe,Ae,qe.data)}}}else{if(xe=x.mipmaps,k&&ye){xe.length>0&&ke++;const he=Pe(Ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ke,at,he.width,he.height)}for(let he=0;he<6;he++)if(_e){k?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ce[he].width,Ce[he].height,Fe,Ae,Ce[he].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,at,Ce[he].width,Ce[he].height,0,Fe,Ae,Ce[he].data);for(let Re=0;Re<xe.length;Re++){const Mt=xe[Re].image[he].image;k?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re+1,0,0,Mt.width,Mt.height,Fe,Ae,Mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re+1,at,Mt.width,Mt.height,0,Fe,Ae,Mt.data)}}else{k?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Fe,Ae,Ce[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,at,Fe,Ae,Ce[he]);for(let Re=0;Re<xe.length;Re++){const qe=xe[Re];k?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re+1,0,0,Fe,Ae,qe.image[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re+1,at,Fe,Ae,qe.image[he])}}}m(x)&&p(t.TEXTURE_CUBE_MAP),Y.__version=ae.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function oe(E,x,N,K,ae,Y){const Le=r.convert(N.format,N.colorSpace),ve=r.convert(N.type),Ie=A(N.internalFormat,Le,ve,N.colorSpace),Ue=i.get(x),_e=i.get(N);if(_e.__renderTarget=x,!Ue.__hasExternalTextures){const Ce=Math.max(1,x.width>>Y),Be=Math.max(1,x.height>>Y);ae===t.TEXTURE_3D||ae===t.TEXTURE_2D_ARRAY?n.texImage3D(ae,Y,Ie,Ce,Be,x.depth,0,Le,ve,null):n.texImage2D(ae,Y,Ie,Ce,Be,0,Le,ve,null)}n.bindFramebuffer(t.FRAMEBUFFER,E),Q(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,ae,_e.__webglTexture,0,ge(x)):(ae===t.TEXTURE_2D||ae>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,ae,_e.__webglTexture,Y),n.bindFramebuffer(t.FRAMEBUFFER,null)}function se(E,x,N){if(t.bindRenderbuffer(t.RENDERBUFFER,E),x.depthBuffer){const K=x.depthTexture,ae=K&&K.isDepthTexture?K.type:null,Y=w(x.stencilBuffer,ae),Le=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=ge(x);Q(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ve,Y,x.width,x.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,Y,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,Y,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Le,t.RENDERBUFFER,E)}else{const K=x.textures;for(let ae=0;ae<K.length;ae++){const Y=K[ae],Le=r.convert(Y.format,Y.colorSpace),ve=r.convert(Y.type),Ie=A(Y.internalFormat,Le,ve,Y.colorSpace),Ue=ge(x);N&&Q(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,Ie,x.width,x.height):Q(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ue,Ie,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,Ie,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function me(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(x.depthTexture);K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),le(x.depthTexture,0);const ae=K.__webglTexture,Y=ge(x);if(x.depthTexture.format===Qo)Q(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0,Y):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0);else if(x.depthTexture.format===Jo)Q(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0,Y):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Ke(E){const x=i.get(E),N=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){const K=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const ae=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",ae)};K.addEventListener("dispose",ae),x.__depthDisposeCallback=ae}x.__boundDepthTexture=K}if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");const K=E.texture.mipmaps;K&&K.length>0?me(x.__webglFramebuffer[0],E):me(x.__webglFramebuffer,E)}else if(N){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=t.createRenderbuffer(),se(x.__webglDepthbuffer[K],E,!1);else{const ae=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,Y),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,Y)}}else{const K=E.texture.mipmaps;if(K&&K.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),se(x.__webglDepthbuffer,E,!1);else{const ae=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Y),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,Y)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function P(E,x,N){const K=i.get(E);x!==void 0&&oe(K.__webglFramebuffer,E,E.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&Ke(E)}function g(E){const x=E.texture,N=i.get(E),K=i.get(x);E.addEventListener("dispose",D);const ae=E.textures,Y=E.isWebGLCubeRenderTarget===!0,Le=ae.length>1;if(Le||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=x.version,o.memory.textures++),Y){N.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[ve]=[];for(let Ie=0;Ie<x.mipmaps.length;Ie++)N.__webglFramebuffer[ve][Ie]=t.createFramebuffer()}else N.__webglFramebuffer[ve]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let ve=0;ve<x.mipmaps.length;ve++)N.__webglFramebuffer[ve]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(Le)for(let ve=0,Ie=ae.length;ve<Ie;ve++){const Ue=i.get(ae[ve]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=t.createTexture(),o.memory.textures++)}if(E.samples>0&&Q(E)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ve=0;ve<ae.length;ve++){const Ie=ae[ve];N.__webglColorRenderbuffer[ve]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[ve]);const Ue=r.convert(Ie.format,Ie.colorSpace),_e=r.convert(Ie.type),Ce=A(Ie.internalFormat,Ue,_e,Ie.colorSpace,E.isXRRenderTarget===!0),Be=ge(E);t.renderbufferStorageMultisample(t.RENDERBUFFER,Be,Ce,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,N.__webglColorRenderbuffer[ve])}t.bindRenderbuffer(t.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),se(N.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Y){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),We(t.TEXTURE_CUBE_MAP,x);for(let ve=0;ve<6;ve++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ie=0;Ie<x.mipmaps.length;Ie++)oe(N.__webglFramebuffer[ve][Ie],E,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie);else oe(N.__webglFramebuffer[ve],E,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(x)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Le){for(let ve=0,Ie=ae.length;ve<Ie;ve++){const Ue=ae[ve],_e=i.get(Ue);let Ce=t.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Ce=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ce,_e.__webglTexture),We(Ce,Ue),oe(N.__webglFramebuffer,E,Ue,t.COLOR_ATTACHMENT0+ve,Ce,0),m(Ue)&&p(Ce)}n.unbindTexture()}else{let ve=t.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ve=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ve,K.__webglTexture),We(ve,x),x.mipmaps&&x.mipmaps.length>0)for(let Ie=0;Ie<x.mipmaps.length;Ie++)oe(N.__webglFramebuffer[Ie],E,x,t.COLOR_ATTACHMENT0,ve,Ie);else oe(N.__webglFramebuffer,E,x,t.COLOR_ATTACHMENT0,ve,0);m(x)&&p(ve),n.unbindTexture()}E.depthBuffer&&Ke(E)}function B(E){const x=E.textures;for(let N=0,K=x.length;N<K;N++){const ae=x[N];if(m(ae)){const Y=C(E),Le=i.get(ae).__webglTexture;n.bindTexture(Y,Le),p(Y),n.unbindTexture()}}}const $=[],ee=[];function W(E){if(E.samples>0){if(Q(E)===!1){const x=E.textures,N=E.width,K=E.height;let ae=t.COLOR_BUFFER_BIT;const Y=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Le=i.get(E),ve=x.length>1;if(ve)for(let Ue=0;Ue<x.length;Ue++)n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const Ie=E.texture.mipmaps;Ie&&Ie.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ue=0;Ue<x.length;Ue++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ae|=t.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ae|=t.STENCIL_BUFFER_BIT)),ve){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Le.__webglColorRenderbuffer[Ue]);const _e=i.get(x[Ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,_e,0)}t.blitFramebuffer(0,0,N,K,0,0,N,K,ae,t.NEAREST),l===!0&&($.length=0,ee.length=0,$.push(t.COLOR_ATTACHMENT0+Ue),E.depthBuffer&&E.resolveDepthBuffer===!1&&($.push(Y),ee.push(Y),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ee)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,$))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ve)for(let Ue=0;Ue<x.length;Ue++){n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,Le.__webglColorRenderbuffer[Ue]);const _e=i.get(x[Ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,_e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const x=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function ge(E){return Math.min(s.maxSamples,E.samples)}function Q(E){const x=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ce(E){const x=o.render.frame;u.get(E)!==x&&(u.set(E,x),E.update())}function fe(E,x){const N=E.colorSpace,K=E.format,ae=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==oo&&N!==ms&&(wt.getTransfer(N)===Dt?(K!==ui||ae!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}function Pe(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=q,this.setTexture2D=le,this.setTexture2DArray=G,this.setTexture3D=ue,this.setTextureCube=X,this.rebindTextures=P,this.setupRenderTarget=g,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Q}function fP(t,e){function n(i,s=ms){let r;const o=wt.getTransfer(s);if(i===Ii)return t.UNSIGNED_BYTE;if(i===zd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Hd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Wg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Vg)return t.BYTE;if(i===Gg)return t.SHORT;if(i===Ko)return t.UNSIGNED_SHORT;if(i===Bd)return t.INT;if(i===sr)return t.UNSIGNED_INT;if(i===Yi)return t.FLOAT;if(i===va)return t.HALF_FLOAT;if(i===$g)return t.ALPHA;if(i===Xg)return t.RGB;if(i===ui)return t.RGBA;if(i===Qo)return t.DEPTH_COMPONENT;if(i===Jo)return t.DEPTH_STENCIL;if(i===qg)return t.RED;if(i===Vd)return t.RED_INTEGER;if(i===jg)return t.RG;if(i===Gd)return t.RG_INTEGER;if(i===Wd)return t.RGBA_INTEGER;if(i===il||i===sl||i===rl||i===ol)if(o===Dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===il)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===rl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ol)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===il)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===rl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ol)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Tu||i===Au||i===Cu||i===Ru)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Tu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Au)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Cu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ru)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pu||i===Du||i===Lu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Pu||i===Du)return o===Dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Lu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Iu||i===Uu||i===Ou||i===Nu||i===Fu||i===ku||i===Bu||i===zu||i===Hu||i===Vu||i===Gu||i===Wu||i===$u||i===Xu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Iu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ou)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ku)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$u)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===al||i===qu||i===ju)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===al)return o===Dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ju)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yg||i===Yu||i===Ku||i===Zu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===al)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Yu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ku)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class yv extends Un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const hP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pP=`
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

}`;class mP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new yv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Cs({vertexShader:hP,fragmentShader:pP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new di(new Kl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gP extends ur{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,v=null;const _=new mP,m={},p=n.getContextAttributes();let C=null,A=null;const w=[],U=[],L=new ct;let D=null;const I=new Vn;I.viewport=new Xt;const b=new Vn;b.viewport=new Xt;const M=[I,b],R=new NA;let q=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let we=w[re];return we===void 0&&(we=new Bc,w[re]=we),we.getTargetRaySpace()},this.getControllerGrip=function(re){let we=w[re];return we===void 0&&(we=new Bc,w[re]=we),we.getGripSpace()},this.getHand=function(re){let we=w[re];return we===void 0&&(we=new Bc,w[re]=we),we.getHandSpace()};function J(re){const we=U.indexOf(re.inputSource);if(we===-1)return;const F=w[we];F!==void 0&&(F.update(re.inputSource,re.frame,c||o),F.dispatchEvent({type:re.type,data:re.inputSource}))}function le(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",le),s.removeEventListener("inputsourceschange",G);for(let re=0;re<w.length;re++){const we=U[re];we!==null&&(U[re]=null,w[re].disconnect(we))}q=null,j=null,_.reset();for(const re in m)delete m[re];e.setRenderTarget(C),h=null,f=null,d=null,s=null,A=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){r=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(re){if(s=re,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",le),s.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await n.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(s,n)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let F=null,oe=null,se=null;p.depth&&(se=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,F=p.stencil?Jo:Qo,oe=p.stencil?Zo:sr);const me={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:r};f=d.createProjectionLayer(me),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new or(f.textureWidth,f.textureHeight,{format:ui,type:Ii,depthTexture:new uv(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const F={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,n,F),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),A=new or(h.framebufferWidth,h.framebufferHeight,{format:ui,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),je.setContext(s),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(re){for(let we=0;we<re.removed.length;we++){const F=re.removed[we],oe=U.indexOf(F);oe>=0&&(U[oe]=null,w[oe].disconnect(F))}for(let we=0;we<re.added.length;we++){const F=re.added[we];let oe=U.indexOf(F);if(oe===-1){for(let me=0;me<w.length;me++)if(me>=U.length){U.push(F),oe=me;break}else if(U[me]===null){U[me]=F,oe=me;break}if(oe===-1)break}const se=w[oe];se&&se.connect(F)}}const ue=new Z,X=new Z;function be(re,we,F){ue.setFromMatrixPosition(we.matrixWorld),X.setFromMatrixPosition(F.matrixWorld);const oe=ue.distanceTo(X),se=we.projectionMatrix.elements,me=F.projectionMatrix.elements,Ke=se[14]/(se[10]-1),P=se[14]/(se[10]+1),g=(se[9]+1)/se[5],B=(se[9]-1)/se[5],$=(se[8]-1)/se[0],ee=(me[8]+1)/me[0],W=Ke*$,ge=Ke*ee,Q=oe/(-$+ee),ce=Q*-$;if(we.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(ce),re.translateZ(Q),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),se[10]===-1)re.projectionMatrix.copy(we.projectionMatrix),re.projectionMatrixInverse.copy(we.projectionMatrixInverse);else{const fe=Ke+Q,Pe=P+Q,E=W-ce,x=ge+(oe-ce),N=g*P/Pe*fe,K=B*P/Pe*fe;re.projectionMatrix.makePerspective(E,x,N,K,fe,Pe),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function Te(re,we){we===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(we.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(s===null)return;let we=re.near,F=re.far;_.texture!==null&&(_.depthNear>0&&(we=_.depthNear),_.depthFar>0&&(F=_.depthFar)),R.near=b.near=I.near=we,R.far=b.far=I.far=F,(q!==R.near||j!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),q=R.near,j=R.far),R.layers.mask=re.layers.mask|6,I.layers.mask=R.layers.mask&3,b.layers.mask=R.layers.mask&5;const oe=re.parent,se=R.cameras;Te(R,oe);for(let me=0;me<se.length;me++)Te(se[me],oe);se.length===2?be(R,I,b):R.projectionMatrix.copy(I.projectionMatrix),Ne(re,R,oe)};function Ne(re,we,F){F===null?re.matrix.copy(we.matrixWorld):(re.matrix.copy(F.matrixWorld),re.matrix.invert(),re.matrix.multiply(we.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(we.projectionMatrix),re.projectionMatrixInverse.copy(we.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Qu*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(re){l=re,f!==null&&(f.fixedFoveation=re),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=re)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(R)},this.getCameraTexture=function(re){return m[re]};let We=null;function nt(re,we){if(u=we.getViewerPose(c||o),v=we,u!==null){const F=u.views;h!==null&&(e.setRenderTargetFramebuffer(A,h.framebuffer),e.setRenderTarget(A));let oe=!1;F.length!==R.cameras.length&&(R.cameras.length=0,oe=!0);for(let P=0;P<F.length;P++){const g=F[P];let B=null;if(h!==null)B=h.getViewport(g);else{const ee=d.getViewSubImage(f,g);B=ee.viewport,P===0&&(e.setRenderTargetTextures(A,ee.colorTexture,ee.depthStencilTexture),e.setRenderTarget(A))}let $=M[P];$===void 0&&($=new Vn,$.layers.enable(P),$.viewport=new Xt,M[P]=$),$.matrix.fromArray(g.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(g.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(B.x,B.y,B.width,B.height),P===0&&(R.matrix.copy($.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),oe===!0&&R.cameras.push($)}const se=s.enabledFeatures;if(se&&se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&d){const P=d.getDepthInformation(F[0]);P&&P.isValid&&P.texture&&_.init(P,s.renderState)}if(se&&se.includes("camera-access")&&(e.state.unbindTexture(),d))for(let P=0;P<F.length;P++){const g=F[P].camera;if(g){let B=m[g];B||(B=new yv,m[g]=B);const $=d.getCameraImage(g);B.sourceTexture=$}}}for(let F=0;F<w.length;F++){const oe=U[F],se=w[F];oe!==null&&se!==void 0&&se.update(oe,we,c||o)}We&&We(re,we),we.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:we}),v=null}const je=new mv;je.setAnimationLoop(nt),this.setAnimationLoop=function(re){We=re},this.dispose=function(){}}}const Hs=new Ui,vP=new jt;function _P(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ov(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,C,A,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,w)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,C,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===In&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===In&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const C=e.get(p),A=C.envMap,w=C.envMapRotation;A&&(m.envMap.value=A,Hs.copy(w),Hs.x*=-1,Hs.y*=-1,Hs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Hs.y*=-1,Hs.z*=-1),m.envMapRotation.value.setFromMatrix4(vP.makeRotationFromEuler(Hs)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,C,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*C,m.scale.value=A*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,C){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===In&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const C=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function xP(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(C,A){const w=A.program;i.uniformBlockBinding(C,w)}function c(C,A){let w=s[C.id];w===void 0&&(v(C),w=u(C),s[C.id]=w,C.addEventListener("dispose",m));const U=A.program;i.updateUBOMapping(C,U);const L=e.render.frame;r[C.id]!==L&&(f(C),r[C.id]=L)}function u(C){const A=d();C.__bindingPointIndex=A;const w=t.createBuffer(),U=C.__size,L=C.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,U,L),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,A,w),w}function d(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(C){const A=s[C.id],w=C.uniforms,U=C.__cache;t.bindBuffer(t.UNIFORM_BUFFER,A);for(let L=0,D=w.length;L<D;L++){const I=Array.isArray(w[L])?w[L]:[w[L]];for(let b=0,M=I.length;b<M;b++){const R=I[b];if(h(R,L,b,U)===!0){const q=R.__offset,j=Array.isArray(R.value)?R.value:[R.value];let J=0;for(let le=0;le<j.length;le++){const G=j[le],ue=_(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,q+J,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,J),J+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,q,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(C,A,w,U){const L=C.value,D=A+"_"+w;if(U[D]===void 0)return typeof L=="number"||typeof L=="boolean"?U[D]=L:U[D]=L.clone(),!0;{const I=U[D];if(typeof L=="number"||typeof L=="boolean"){if(I!==L)return U[D]=L,!0}else if(I.equals(L)===!1)return I.copy(L),!0}return!1}function v(C){const A=C.uniforms;let w=0;const U=16;for(let D=0,I=A.length;D<I;D++){const b=Array.isArray(A[D])?A[D]:[A[D]];for(let M=0,R=b.length;M<R;M++){const q=b[M],j=Array.isArray(q.value)?q.value:[q.value];for(let J=0,le=j.length;J<le;J++){const G=j[J],ue=_(G),X=w%U,be=X%ue.boundary,Te=X+be;w+=be,Te!==0&&U-Te<ue.storage&&(w+=U-Te),q.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=w,w+=ue.storage}}}const L=w%U;return L>0&&(w+=U-L),C.__size=w,C.__cache={},this}function _(C){const A={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(A.boundary=4,A.storage=4):C.isVector2?(A.boundary=8,A.storage=8):C.isVector3||C.isColor?(A.boundary=16,A.storage=12):C.isVector4?(A.boundary=16,A.storage=16):C.isMatrix3?(A.boundary=48,A.storage=48):C.isMatrix4?(A.boundary=64,A.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),A}function m(C){const A=C.target;A.removeEventListener("dispose",m);const w=o.indexOf(A.__bindingPointIndex);o.splice(w,1),t.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function p(){for(const C in s)t.deleteBuffer(s[C]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class bv{constructor(e={}){const{canvas:n=nA(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const v=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const C=[],A=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ts,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let U=!1;this._outputColorSpace=Jn;let L=0,D=0,I=null,b=-1,M=null;const R=new Xt,q=new Xt;let j=null;const J=new vt(0);let le=0,G=n.width,ue=n.height,X=1,be=null,Te=null;const Ne=new Xt(0,0,G,ue),We=new Xt(0,0,G,ue);let nt=!1;const je=new qd;let re=!1,we=!1;const F=new jt,oe=new Z,se=new Xt,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function P(){return I===null?X:1}let g=i;function B(T,H){return n.getContext(T,H)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${kd}`),n.addEventListener("webglcontextlost",Ee,!1),n.addEventListener("webglcontextrestored",ke,!1),n.addEventListener("webglcontextcreationerror",xe,!1),g===null){const H="webgl2";if(g=B(H,T),g===null)throw B(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let $,ee,W,ge,Q,ce,fe,Pe,E,x,N,K,ae,Y,Le,ve,Ie,Ue,_e,Ce,Be,Fe,Ae,at;function k(){$=new P2(g),$.init(),Fe=new fP(g,$),ee=new S2(g,$,e,Fe),W=new uP(g,$),ee.reversedDepthBuffer&&f&&W.buffers.depth.setReversed(!0),ge=new I2(g),Q=new ZR,ce=new dP(g,$,W,Q,ee,Fe,ge),fe=new E2(w),Pe=new R2(w),E=new BA(g),Ae=new b2(g,E),x=new D2(g,E,ge,Ae),N=new O2(g,x,E,ge),_e=new U2(g,ee,ce),ve=new M2(Q),K=new KR(w,fe,Pe,$,ee,Ae,ve),ae=new _P(w,Q),Y=new JR,Le=new rP($),Ue=new y2(w,fe,Pe,W,N,h,l),Ie=new lP(w,N,ee),at=new xP(g,ge,ee,W),Ce=new w2(g,$,ge),Be=new L2(g,$,ge),ge.programs=K.programs,w.capabilities=ee,w.extensions=$,w.properties=Q,w.renderLists=Y,w.shadowMap=Ie,w.state=W,w.info=ge}k();const ye=new gP(w,g);this.xr=ye,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const T=$.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=$.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(G,ue,!1))},this.getSize=function(T){return T.set(G,ue)},this.setSize=function(T,H,te=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,ue=H,n.width=Math.floor(T*X),n.height=Math.floor(H*X),te===!0&&(n.style.width=T+"px",n.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(G*X,ue*X).floor()},this.setDrawingBufferSize=function(T,H,te){G=T,ue=H,X=te,n.width=Math.floor(T*te),n.height=Math.floor(H*te),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy(Ne)},this.setViewport=function(T,H,te,ne){T.isVector4?Ne.set(T.x,T.y,T.z,T.w):Ne.set(T,H,te,ne),W.viewport(R.copy(Ne).multiplyScalar(X).round())},this.getScissor=function(T){return T.copy(We)},this.setScissor=function(T,H,te,ne){T.isVector4?We.set(T.x,T.y,T.z,T.w):We.set(T,H,te,ne),W.scissor(q.copy(We).multiplyScalar(X).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(T){W.setScissorTest(nt=T)},this.setOpaqueSort=function(T){be=T},this.setTransparentSort=function(T){Te=T},this.getClearColor=function(T){return T.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(T=!0,H=!0,te=!0){let ne=0;if(T){let V=!1;if(I!==null){const Se=I.texture.format;V=Se===Wd||Se===Gd||Se===Vd}if(V){const Se=I.texture.type,Oe=Se===Ii||Se===sr||Se===Ko||Se===Zo||Se===zd||Se===Hd,Ve=Ue.getClearColor(),ze=Ue.getClearAlpha(),tt=Ve.r,st=Ve.g,Ye=Ve.b;Oe?(v[0]=tt,v[1]=st,v[2]=Ye,v[3]=ze,g.clearBufferuiv(g.COLOR,0,v)):(_[0]=tt,_[1]=st,_[2]=Ye,_[3]=ze,g.clearBufferiv(g.COLOR,0,_))}else ne|=g.COLOR_BUFFER_BIT}H&&(ne|=g.DEPTH_BUFFER_BIT),te&&(ne|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ee,!1),n.removeEventListener("webglcontextrestored",ke,!1),n.removeEventListener("webglcontextcreationerror",xe,!1),Ue.dispose(),Y.dispose(),Le.dispose(),Q.dispose(),fe.dispose(),Pe.dispose(),N.dispose(),Ae.dispose(),at.dispose(),K.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",O),ye.removeEventListener("sessionend",pe),Me.stop()};function Ee(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const T=ge.autoReset,H=Ie.enabled,te=Ie.autoUpdate,ne=Ie.needsUpdate,V=Ie.type;k(),ge.autoReset=T,Ie.enabled=H,Ie.autoUpdate=te,Ie.needsUpdate=ne,Ie.type=V}function xe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function he(T){const H=T.target;H.removeEventListener("dispose",he),Re(H)}function Re(T){qe(T),Q.remove(T)}function qe(T){const H=Q.get(T).programs;H!==void 0&&(H.forEach(function(te){K.releaseProgram(te)}),T.isShaderMaterial&&K.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,te,ne,V,Se){H===null&&(H=me);const Oe=V.isMesh&&V.matrixWorld.determinant()<0,Ve=ts(T,H,te,ne,V);W.setMaterial(ne,Oe);let ze=te.index,tt=1;if(ne.wireframe===!0){if(ze=x.getWireframeAttribute(te),ze===void 0)return;tt=2}const st=te.drawRange,Ye=te.attributes.position;let xt=st.start*tt,Rt=(st.start+st.count)*tt;Se!==null&&(xt=Math.max(xt,Se.start*tt),Rt=Math.min(Rt,(Se.start+Se.count)*tt)),ze!==null?(xt=Math.max(xt,0),Rt=Math.min(Rt,ze.count)):Ye!=null&&(xt=Math.max(xt,0),Rt=Math.min(Rt,Ye.count));const Gt=Rt-xt;if(Gt<0||Gt===1/0)return;Ae.setup(V,ne,Ve,te,ze);let kt,It=Ce;if(ze!==null&&(kt=E.get(ze),It=Be,It.setIndex(kt)),V.isMesh)ne.wireframe===!0?(W.setLineWidth(ne.wireframeLinewidth*P()),It.setMode(g.LINES)):It.setMode(g.TRIANGLES);else if(V.isLine){let Je=ne.linewidth;Je===void 0&&(Je=1),W.setLineWidth(Je*P()),V.isLineSegments?It.setMode(g.LINES):V.isLineLoop?It.setMode(g.LINE_LOOP):It.setMode(g.LINE_STRIP)}else V.isPoints?It.setMode(g.POINTS):V.isSprite&&It.setMode(g.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)zr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),It.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if($.get("WEBGL_multi_draw"))It.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Je=V._multiDrawStarts,Ht=V._multiDrawCounts,yt=V._multiDrawCount,Nn=ze?E.get(ze).bytesPerElement:1,dr=Q.get(ne).currentProgram.getUniforms();for(let Fn=0;Fn<yt;Fn++)dr.setValue(g,"_gl_DrawID",Fn),It.render(Je[Fn]/Nn,Ht[Fn])}else if(V.isInstancedMesh)It.renderInstances(xt,Gt,V.count);else if(te.isInstancedBufferGeometry){const Je=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Ht=Math.min(te.instanceCount,Je);It.renderInstances(xt,Gt,Ht)}else It.render(xt,Gt)};function Mt(T,H,te){T.transparent===!0&&T.side===ji&&T.forceSinglePass===!1?(T.side=In,T.needsUpdate=!0,mt(T,H,te),T.side=As,T.needsUpdate=!0,mt(T,H,te),T.side=ji):mt(T,H,te)}this.compile=function(T,H,te=null){te===null&&(te=T),p=Le.get(te),p.init(H),A.push(p),te.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),T!==te&&T.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const ne=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const Se=V.material;if(Se)if(Array.isArray(Se))for(let Oe=0;Oe<Se.length;Oe++){const Ve=Se[Oe];Mt(Ve,te,V),ne.add(Ve)}else Mt(Se,te,V),ne.add(Se)}),p=A.pop(),ne},this.compileAsync=function(T,H,te=null){const ne=this.compile(T,H,te);return new Promise(V=>{function Se(){if(ne.forEach(function(Oe){Q.get(Oe).currentProgram.isReady()&&ne.delete(Oe)}),ne.size===0){V(T);return}setTimeout(Se,10)}$.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let z=null;function S(T){z&&z(T)}function O(){Me.stop()}function pe(){Me.start()}const Me=new mv;Me.setAnimationLoop(S),typeof self<"u"&&Me.setContext(self),this.setAnimationLoop=function(T){z=T,ye.setAnimationLoop(T),T===null?Me.stop():Me.start()},ye.addEventListener("sessionstart",O),ye.addEventListener("sessionend",pe),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(H),H=ye.getCamera()),T.isScene===!0&&T.onBeforeRender(w,T,H,I),p=Le.get(T,A.length),p.init(H),A.push(p),F.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),je.setFromProjectionMatrix(F,Ti,H.reversedDepth),we=this.localClippingEnabled,re=ve.init(this.clippingPlanes,we),m=Y.get(T,C.length),m.init(),C.push(m),ye.enabled===!0&&ye.isPresenting===!0){const Se=w.xr.getDepthSensingMesh();Se!==null&&Xe(Se,H,-1/0,w.sortObjects)}Xe(T,H,0,w.sortObjects),m.finish(),w.sortObjects===!0&&m.sort(be,Te),Ke=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,Ke&&Ue.addToRenderList(m,T),this.info.render.frame++,re===!0&&ve.beginShadows();const te=p.state.shadowsArray;Ie.render(te,T,H),re===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=m.opaque,V=m.transmissive;if(p.setupLights(),H.isArrayCamera){const Se=H.cameras;if(V.length>0)for(let Oe=0,Ve=Se.length;Oe<Ve;Oe++){const ze=Se[Oe];rt(ne,V,T,ze)}Ke&&Ue.render(T);for(let Oe=0,Ve=Se.length;Oe<Ve;Oe++){const ze=Se[Oe];Qe(m,T,ze,ze.viewport)}}else V.length>0&&rt(ne,V,T,H),Ke&&Ue.render(T),Qe(m,T,H);I!==null&&D===0&&(ce.updateMultisampleRenderTarget(I),ce.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(w,T,H),Ae.resetDefaultState(),b=-1,M=null,A.pop(),A.length>0?(p=A[A.length-1],re===!0&&ve.setGlobalState(w.clippingPlanes,p.state.camera)):p=null,C.pop(),C.length>0?m=C[C.length-1]:m=null};function Xe(T,H,te,ne){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)te=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||je.intersectsSprite(T)){ne&&se.setFromMatrixPosition(T.matrixWorld).applyMatrix4(F);const Oe=N.update(T),Ve=T.material;Ve.visible&&m.push(T,Oe,Ve,te,se.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||je.intersectsObject(T))){const Oe=N.update(T),Ve=T.material;if(ne&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),se.copy(T.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),se.copy(Oe.boundingSphere.center)),se.applyMatrix4(T.matrixWorld).applyMatrix4(F)),Array.isArray(Ve)){const ze=Oe.groups;for(let tt=0,st=ze.length;tt<st;tt++){const Ye=ze[tt],xt=Ve[Ye.materialIndex];xt&&xt.visible&&m.push(T,Oe,xt,te,se.z,Ye)}}else Ve.visible&&m.push(T,Oe,Ve,te,se.z,null)}}const Se=T.children;for(let Oe=0,Ve=Se.length;Oe<Ve;Oe++)Xe(Se[Oe],H,te,ne)}function Qe(T,H,te,ne){const V=T.opaque,Se=T.transmissive,Oe=T.transparent;p.setupLightsView(te),re===!0&&ve.setGlobalState(w.clippingPlanes,te),ne&&W.viewport(R.copy(ne)),V.length>0&&ot(V,H,te),Se.length>0&&ot(Se,H,te),Oe.length>0&&ot(Oe,H,te),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function rt(T,H,te,ne){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ne.id]===void 0&&(p.state.transmissionRenderTarget[ne.id]=new or(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?va:Ii,minFilter:qs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Se=p.state.transmissionRenderTarget[ne.id],Oe=ne.viewport||R;Se.setSize(Oe.z*w.transmissionResolutionScale,Oe.w*w.transmissionResolutionScale);const Ve=w.getRenderTarget(),ze=w.getActiveCubeFace(),tt=w.getActiveMipmapLevel();w.setRenderTarget(Se),w.getClearColor(J),le=w.getClearAlpha(),le<1&&w.setClearColor(16777215,.5),w.clear(),Ke&&Ue.render(te);const st=w.toneMapping;w.toneMapping=Ts;const Ye=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),p.setupLightsView(ne),re===!0&&ve.setGlobalState(w.clippingPlanes,ne),ot(T,te,ne),ce.updateMultisampleRenderTarget(Se),ce.updateRenderTargetMipmap(Se),$.has("WEBGL_multisampled_render_to_texture")===!1){let xt=!1;for(let Rt=0,Gt=H.length;Rt<Gt;Rt++){const kt=H[Rt],It=kt.object,Je=kt.geometry,Ht=kt.material,yt=kt.group;if(Ht.side===ji&&It.layers.test(ne.layers)){const Nn=Ht.side;Ht.side=In,Ht.needsUpdate=!0,$e(It,te,ne,Je,Ht,yt),Ht.side=Nn,Ht.needsUpdate=!0,xt=!0}}xt===!0&&(ce.updateMultisampleRenderTarget(Se),ce.updateRenderTargetMipmap(Se))}w.setRenderTarget(Ve,ze,tt),w.setClearColor(J,le),Ye!==void 0&&(ne.viewport=Ye),w.toneMapping=st}function ot(T,H,te){const ne=H.isScene===!0?H.overrideMaterial:null;for(let V=0,Se=T.length;V<Se;V++){const Oe=T[V],Ve=Oe.object,ze=Oe.geometry,tt=Oe.group;let st=Oe.material;st.allowOverride===!0&&ne!==null&&(st=ne),Ve.layers.test(te.layers)&&$e(Ve,H,te,ze,st,tt)}}function $e(T,H,te,ne,V,Se){T.onBeforeRender(w,H,te,ne,V,Se),T.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(w,H,te,ne,T,Se),V.transparent===!0&&V.side===ji&&V.forceSinglePass===!1?(V.side=In,V.needsUpdate=!0,w.renderBufferDirect(te,H,ne,V,T,Se),V.side=As,V.needsUpdate=!0,w.renderBufferDirect(te,H,ne,V,T,Se),V.side=ji):w.renderBufferDirect(te,H,ne,V,T,Se),T.onAfterRender(w,H,te,ne,V,Se)}function mt(T,H,te){H.isScene!==!0&&(H=me);const ne=Q.get(T),V=p.state.lights,Se=p.state.shadowsArray,Oe=V.state.version,Ve=K.getParameters(T,V.state,Se,H,te),ze=K.getProgramCacheKey(Ve);let tt=ne.programs;ne.environment=T.isMeshStandardMaterial?H.environment:null,ne.fog=H.fog,ne.envMap=(T.isMeshStandardMaterial?Pe:fe).get(T.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,tt===void 0&&(T.addEventListener("dispose",he),tt=new Map,ne.programs=tt);let st=tt.get(ze);if(st!==void 0){if(ne.currentProgram===st&&ne.lightsStateVersion===Oe)return xn(T,Ve),st}else Ve.uniforms=K.getUniforms(T),T.onBeforeCompile(Ve,w),st=K.acquireProgram(Ve,ze),tt.set(ze,st),ne.uniforms=Ve.uniforms;const Ye=ne.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ye.clippingPlanes=ve.uniform),xn(T,Ve),ne.needsLights=Ov(T),ne.lightsStateVersion=Oe,ne.needsLights&&(Ye.ambientLightColor.value=V.state.ambient,Ye.lightProbe.value=V.state.probe,Ye.directionalLights.value=V.state.directional,Ye.directionalLightShadows.value=V.state.directionalShadow,Ye.spotLights.value=V.state.spot,Ye.spotLightShadows.value=V.state.spotShadow,Ye.rectAreaLights.value=V.state.rectArea,Ye.ltc_1.value=V.state.rectAreaLTC1,Ye.ltc_2.value=V.state.rectAreaLTC2,Ye.pointLights.value=V.state.point,Ye.pointLightShadows.value=V.state.pointShadow,Ye.hemisphereLights.value=V.state.hemi,Ye.directionalShadowMap.value=V.state.directionalShadowMap,Ye.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ye.spotShadowMap.value=V.state.spotShadowMap,Ye.spotLightMatrix.value=V.state.spotLightMatrix,Ye.spotLightMap.value=V.state.spotLightMap,Ye.pointShadowMap.value=V.state.pointShadowMap,Ye.pointShadowMatrix.value=V.state.pointShadowMatrix),ne.currentProgram=st,ne.uniformsList=null,st}function zt(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=cl.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function xn(T,H){const te=Q.get(T);te.outputColorSpace=H.outputColorSpace,te.batching=H.batching,te.batchingColor=H.batchingColor,te.instancing=H.instancing,te.instancingColor=H.instancingColor,te.instancingMorph=H.instancingMorph,te.skinning=H.skinning,te.morphTargets=H.morphTargets,te.morphNormals=H.morphNormals,te.morphColors=H.morphColors,te.morphTargetsCount=H.morphTargetsCount,te.numClippingPlanes=H.numClippingPlanes,te.numIntersection=H.numClipIntersection,te.vertexAlphas=H.vertexAlphas,te.vertexTangents=H.vertexTangents,te.toneMapping=H.toneMapping}function ts(T,H,te,ne,V){H.isScene!==!0&&(H=me),ce.resetTextureUnits();const Se=H.fog,Oe=ne.isMeshStandardMaterial?H.environment:null,Ve=I===null?w.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:oo,ze=(ne.isMeshStandardMaterial?Pe:fe).get(ne.envMap||Oe),tt=ne.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,st=!!te.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ye=!!te.morphAttributes.position,xt=!!te.morphAttributes.normal,Rt=!!te.morphAttributes.color;let Gt=Ts;ne.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Gt=w.toneMapping);const kt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,It=kt!==void 0?kt.length:0,Je=Q.get(ne),Ht=p.state.lights;if(re===!0&&(we===!0||T!==M)){const yn=T===M&&ne.id===b;ve.setState(ne,T,yn)}let yt=!1;ne.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Ht.state.version||Je.outputColorSpace!==Ve||V.isBatchedMesh&&Je.batching===!1||!V.isBatchedMesh&&Je.batching===!0||V.isBatchedMesh&&Je.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Je.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Je.instancing===!1||!V.isInstancedMesh&&Je.instancing===!0||V.isSkinnedMesh&&Je.skinning===!1||!V.isSkinnedMesh&&Je.skinning===!0||V.isInstancedMesh&&Je.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Je.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Je.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Je.instancingMorph===!1&&V.morphTexture!==null||Je.envMap!==ze||ne.fog===!0&&Je.fog!==Se||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==ve.numPlanes||Je.numIntersection!==ve.numIntersection)||Je.vertexAlphas!==tt||Je.vertexTangents!==st||Je.morphTargets!==Ye||Je.morphNormals!==xt||Je.morphColors!==Rt||Je.toneMapping!==Gt||Je.morphTargetsCount!==It)&&(yt=!0):(yt=!0,Je.__version=ne.version);let Nn=Je.currentProgram;yt===!0&&(Nn=mt(ne,H,V));let dr=!1,Fn=!1,go=!1;const Vt=Nn.getUniforms(),Yn=Je.uniforms;if(W.useProgram(Nn.program)&&(dr=!0,Fn=!0,go=!0),ne.id!==b&&(b=ne.id,Fn=!0),dr||M!==T){W.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Vt.setValue(g,"projectionMatrix",T.projectionMatrix),Vt.setValue(g,"viewMatrix",T.matrixWorldInverse);const Rn=Vt.map.cameraPosition;Rn!==void 0&&Rn.setValue(g,oe.setFromMatrixPosition(T.matrixWorld)),ee.logarithmicDepthBuffer&&Vt.setValue(g,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Vt.setValue(g,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Fn=!0,go=!0)}if(V.isSkinnedMesh){Vt.setOptional(g,V,"bindMatrix"),Vt.setOptional(g,V,"bindMatrixInverse");const yn=V.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Vt.setValue(g,"boneTexture",yn.boneTexture,ce))}V.isBatchedMesh&&(Vt.setOptional(g,V,"batchingTexture"),Vt.setValue(g,"batchingTexture",V._matricesTexture,ce),Vt.setOptional(g,V,"batchingIdTexture"),Vt.setValue(g,"batchingIdTexture",V._indirectTexture,ce),Vt.setOptional(g,V,"batchingColorTexture"),V._colorsTexture!==null&&Vt.setValue(g,"batchingColorTexture",V._colorsTexture,ce));const Kn=te.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&_e.update(V,te,Nn),(Fn||Je.receiveShadow!==V.receiveShadow)&&(Je.receiveShadow=V.receiveShadow,Vt.setValue(g,"receiveShadow",V.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Yn.envMap.value=ze,Yn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&H.environment!==null&&(Yn.envMapIntensity.value=H.environmentIntensity),Fn&&(Vt.setValue(g,"toneMappingExposure",w.toneMappingExposure),Je.needsLights&&Uv(Yn,go),Se&&ne.fog===!0&&ae.refreshFogUniforms(Yn,Se),ae.refreshMaterialUniforms(Yn,ne,X,ue,p.state.transmissionRenderTarget[T.id]),cl.upload(g,zt(Je),Yn,ce)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(cl.upload(g,zt(Je),Yn,ce),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Vt.setValue(g,"center",V.center),Vt.setValue(g,"modelViewMatrix",V.modelViewMatrix),Vt.setValue(g,"normalMatrix",V.normalMatrix),Vt.setValue(g,"modelMatrix",V.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const yn=ne.uniformsGroups;for(let Rn=0,Jl=yn.length;Rn<Jl;Rn++){const Ls=yn[Rn];at.update(Ls,Nn),at.bind(Ls,Nn)}}return Nn}function Uv(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function Ov(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,H,te){const ne=Q.get(T);ne.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),Q.get(T.texture).__webglTexture=H,Q.get(T.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:te,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,H){const te=Q.get(T);te.__webglFramebuffer=H,te.__useDefaultFramebuffer=H===void 0};const Nv=g.createFramebuffer();this.setRenderTarget=function(T,H=0,te=0){I=T,L=H,D=te;let ne=!0,V=null,Se=!1,Oe=!1;if(T){const ze=Q.get(T);if(ze.__useDefaultFramebuffer!==void 0)W.bindFramebuffer(g.FRAMEBUFFER,null),ne=!1;else if(ze.__webglFramebuffer===void 0)ce.setupRenderTarget(T);else if(ze.__hasExternalTextures)ce.rebindTextures(T,Q.get(T.texture).__webglTexture,Q.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ye=T.depthTexture;if(ze.__boundDepthTexture!==Ye){if(Ye!==null&&Q.has(Ye)&&(T.width!==Ye.image.width||T.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(T)}}const tt=T.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Oe=!0);const st=Q.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(st[H])?V=st[H][te]:V=st[H],Se=!0):T.samples>0&&ce.useMultisampledRTT(T)===!1?V=Q.get(T).__webglMultisampledFramebuffer:Array.isArray(st)?V=st[te]:V=st,R.copy(T.viewport),q.copy(T.scissor),j=T.scissorTest}else R.copy(Ne).multiplyScalar(X).floor(),q.copy(We).multiplyScalar(X).floor(),j=nt;if(te!==0&&(V=Nv),W.bindFramebuffer(g.FRAMEBUFFER,V)&&ne&&W.drawBuffers(T,V),W.viewport(R),W.scissor(q),W.setScissorTest(j),Se){const ze=Q.get(T.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+H,ze.__webglTexture,te)}else if(Oe){const ze=H;for(let tt=0;tt<T.textures.length;tt++){const st=Q.get(T.textures[tt]);g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0+tt,st.__webglTexture,te,ze)}}else if(T!==null&&te!==0){const ze=Q.get(T.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,ze.__webglTexture,te)}b=-1},this.readRenderTargetPixels=function(T,H,te,ne,V,Se,Oe,Ve=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze){W.bindFramebuffer(g.FRAMEBUFFER,ze);try{const tt=T.textures[Ve],st=tt.format,Ye=tt.type;if(!ee.textureFormatReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-ne&&te>=0&&te<=T.height-V&&(T.textures.length>1&&g.readBuffer(g.COLOR_ATTACHMENT0+Ve),g.readPixels(H,te,ne,V,Fe.convert(st),Fe.convert(Ye),Se))}finally{const tt=I!==null?Q.get(I).__webglFramebuffer:null;W.bindFramebuffer(g.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(T,H,te,ne,V,Se,Oe,Ve=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=Q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze)if(H>=0&&H<=T.width-ne&&te>=0&&te<=T.height-V){W.bindFramebuffer(g.FRAMEBUFFER,ze);const tt=T.textures[Ve],st=tt.format,Ye=tt.type;if(!ee.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xt=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,xt),g.bufferData(g.PIXEL_PACK_BUFFER,Se.byteLength,g.STREAM_READ),T.textures.length>1&&g.readBuffer(g.COLOR_ATTACHMENT0+Ve),g.readPixels(H,te,ne,V,Fe.convert(st),Fe.convert(Ye),0);const Rt=I!==null?Q.get(I).__webglFramebuffer:null;W.bindFramebuffer(g.FRAMEBUFFER,Rt);const Gt=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await iA(g,Gt,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,xt),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,Se),g.deleteBuffer(xt),g.deleteSync(Gt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,H=null,te=0){const ne=Math.pow(2,-te),V=Math.floor(T.image.width*ne),Se=Math.floor(T.image.height*ne),Oe=H!==null?H.x:0,Ve=H!==null?H.y:0;ce.setTexture2D(T,0),g.copyTexSubImage2D(g.TEXTURE_2D,te,0,0,Oe,Ve,V,Se),W.unbindTexture()};const Fv=g.createFramebuffer(),kv=g.createFramebuffer();this.copyTextureToTexture=function(T,H,te=null,ne=null,V=0,Se=null){Se===null&&(V!==0?(zr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=V,V=0):Se=0);let Oe,Ve,ze,tt,st,Ye,xt,Rt,Gt;const kt=T.isCompressedTexture?T.mipmaps[Se]:T.image;if(te!==null)Oe=te.max.x-te.min.x,Ve=te.max.y-te.min.y,ze=te.isBox3?te.max.z-te.min.z:1,tt=te.min.x,st=te.min.y,Ye=te.isBox3?te.min.z:0;else{const Kn=Math.pow(2,-V);Oe=Math.floor(kt.width*Kn),Ve=Math.floor(kt.height*Kn),T.isDataArrayTexture?ze=kt.depth:T.isData3DTexture?ze=Math.floor(kt.depth*Kn):ze=1,tt=0,st=0,Ye=0}ne!==null?(xt=ne.x,Rt=ne.y,Gt=ne.z):(xt=0,Rt=0,Gt=0);const It=Fe.convert(H.format),Je=Fe.convert(H.type);let Ht;H.isData3DTexture?(ce.setTexture3D(H,0),Ht=g.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(ce.setTexture2DArray(H,0),Ht=g.TEXTURE_2D_ARRAY):(ce.setTexture2D(H,0),Ht=g.TEXTURE_2D),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,H.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,H.unpackAlignment);const yt=g.getParameter(g.UNPACK_ROW_LENGTH),Nn=g.getParameter(g.UNPACK_IMAGE_HEIGHT),dr=g.getParameter(g.UNPACK_SKIP_PIXELS),Fn=g.getParameter(g.UNPACK_SKIP_ROWS),go=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,kt.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,kt.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,tt),g.pixelStorei(g.UNPACK_SKIP_ROWS,st),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Ye);const Vt=T.isDataArrayTexture||T.isData3DTexture,Yn=H.isDataArrayTexture||H.isData3DTexture;if(T.isDepthTexture){const Kn=Q.get(T),yn=Q.get(H),Rn=Q.get(Kn.__renderTarget),Jl=Q.get(yn.__renderTarget);W.bindFramebuffer(g.READ_FRAMEBUFFER,Rn.__webglFramebuffer),W.bindFramebuffer(g.DRAW_FRAMEBUFFER,Jl.__webglFramebuffer);for(let Ls=0;Ls<ze;Ls++)Vt&&(g.framebufferTextureLayer(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,Q.get(T).__webglTexture,V,Ye+Ls),g.framebufferTextureLayer(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,Q.get(H).__webglTexture,Se,Gt+Ls)),g.blitFramebuffer(tt,st,Oe,Ve,xt,Rt,Oe,Ve,g.DEPTH_BUFFER_BIT,g.NEAREST);W.bindFramebuffer(g.READ_FRAMEBUFFER,null),W.bindFramebuffer(g.DRAW_FRAMEBUFFER,null)}else if(V!==0||T.isRenderTargetTexture||Q.has(T)){const Kn=Q.get(T),yn=Q.get(H);W.bindFramebuffer(g.READ_FRAMEBUFFER,Fv),W.bindFramebuffer(g.DRAW_FRAMEBUFFER,kv);for(let Rn=0;Rn<ze;Rn++)Vt?g.framebufferTextureLayer(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,Kn.__webglTexture,V,Ye+Rn):g.framebufferTexture2D(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,Kn.__webglTexture,V),Yn?g.framebufferTextureLayer(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,yn.__webglTexture,Se,Gt+Rn):g.framebufferTexture2D(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,yn.__webglTexture,Se),V!==0?g.blitFramebuffer(tt,st,Oe,Ve,xt,Rt,Oe,Ve,g.COLOR_BUFFER_BIT,g.NEAREST):Yn?g.copyTexSubImage3D(Ht,Se,xt,Rt,Gt+Rn,tt,st,Oe,Ve):g.copyTexSubImage2D(Ht,Se,xt,Rt,tt,st,Oe,Ve);W.bindFramebuffer(g.READ_FRAMEBUFFER,null),W.bindFramebuffer(g.DRAW_FRAMEBUFFER,null)}else Yn?T.isDataTexture||T.isData3DTexture?g.texSubImage3D(Ht,Se,xt,Rt,Gt,Oe,Ve,ze,It,Je,kt.data):H.isCompressedArrayTexture?g.compressedTexSubImage3D(Ht,Se,xt,Rt,Gt,Oe,Ve,ze,It,kt.data):g.texSubImage3D(Ht,Se,xt,Rt,Gt,Oe,Ve,ze,It,Je,kt):T.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,Se,xt,Rt,Oe,Ve,It,Je,kt.data):T.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,Se,xt,Rt,kt.width,kt.height,It,kt.data):g.texSubImage2D(g.TEXTURE_2D,Se,xt,Rt,Oe,Ve,It,Je,kt);g.pixelStorei(g.UNPACK_ROW_LENGTH,yt),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Nn),g.pixelStorei(g.UNPACK_SKIP_PIXELS,dr),g.pixelStorei(g.UNPACK_SKIP_ROWS,Fn),g.pixelStorei(g.UNPACK_SKIP_IMAGES,go),Se===0&&H.generateMipmaps&&g.generateMipmap(Ht),W.unbindTexture()},this.copyTextureToTexture3D=function(T,H,te=null,ne=null,V=0){return zr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,H,te,ne,V)},this.initRenderTarget=function(T){Q.get(T).__webglFramebuffer===void 0&&ce.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ce.setTextureCube(T,0):T.isData3DTexture?ce.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ce.setTexture2DArray(T,0):ce.setTexture2D(T,0),W.unbindTexture()},this.resetState=function(){L=0,D=0,I=null,W.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),n.unpackColorSpace=wt._getUnpackColorSpace()}}const rp={type:"change"},Yd={type:"start"},wv={type:"end"},Ka=new ev,op=new hs,yP=Math.cos(70*tA.DEG2RAD),Jt=new Z,Dn=2*Math.PI,Lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},jc=1e-6;class Sv extends FA{constructor(e,n=null){super(e,n),this.state=Lt.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:kr.ROTATE,MIDDLE:kr.DOLLY,RIGHT:kr.PAN},this.touches={ONE:Rr.ROTATE,TWO:Rr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new rr,this._lastTargetPosition=new Z,this._quat=new rr().setFromUnitVectors(e.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ih,this._sphericalDelta=new Ih,this._scale=1,this._panOffset=new Z,this._rotateStart=new ct,this._rotateEnd=new ct,this._rotateDelta=new ct,this._panStart=new ct,this._panEnd=new ct,this._panDelta=new ct,this._dollyStart=new ct,this._dollyEnd=new ct,this._dollyDelta=new ct,this._dollyDirection=new Z,this._mouse=new ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=wP.bind(this),this._onPointerDown=bP.bind(this),this._onPointerUp=SP.bind(this),this._onContextMenu=PP.bind(this),this._onMouseWheel=TP.bind(this),this._onKeyDown=AP.bind(this),this._onTouchStart=CP.bind(this),this._onTouchMove=RP.bind(this),this._onMouseDown=MP.bind(this),this._onMouseMove=EP.bind(this),this._interceptControlDown=DP.bind(this),this._interceptControlUp=LP.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(rp),this.update(),this.state=Lt.NONE}update(e=null){const n=this.object.position;Jt.copy(n).sub(this.target),Jt.applyQuaternion(this._quat),this._spherical.setFromVector3(Jt),this.autoRotate&&this.state===Lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Dn:i>Math.PI&&(i-=Dn),s<-Math.PI?s+=Dn:s>Math.PI&&(s-=Dn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Jt.setFromSpherical(this._spherical),Jt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Jt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Jt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new Z(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new Z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Jt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ka.origin.copy(this.object.position),Ka.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ka.direction))<yP?this.object.lookAt(this.target):(op.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ka.intersectPlane(op,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>jc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>jc||this._lastTargetPosition.distanceToSquared(this.target)>jc?(this.dispatchEvent(rp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Dn/60*this.autoRotateSpeed*e:Dn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Jt.setFromMatrixColumn(n,0),Jt.multiplyScalar(-e),this._panOffset.add(Jt)}_panUp(e,n){this.screenSpacePanning===!0?Jt.setFromMatrixColumn(n,1):(Jt.setFromMatrixColumn(n,0),Jt.crossVectors(this.object.up,Jt)),Jt.multiplyScalar(e),this._panOffset.add(Jt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Jt.copy(s).sub(this.target);let r=Jt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=n-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Dn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Dn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Dn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Dn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new ct,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function bP(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function wP(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function SP(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(wv),this.state=Lt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function MP(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case kr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=Lt.DOLLY;break;case kr.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Lt.ROTATE}break;case kr.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Lt.PAN}break;default:this.state=Lt.NONE}this.state!==Lt.NONE&&this.dispatchEvent(Yd)}function EP(t){switch(this.state){case Lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case Lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case Lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function TP(t){this.enabled===!1||this.enableZoom===!1||this.state!==Lt.NONE||(t.preventDefault(),this.dispatchEvent(Yd),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(wv))}function AP(t){this.enabled!==!1&&this._handleKeyDown(t)}function CP(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Rr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=Lt.TOUCH_ROTATE;break;case Rr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=Lt.TOUCH_PAN;break;default:this.state=Lt.NONE}break;case 2:switch(this.touches.TWO){case Rr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=Lt.TOUCH_DOLLY_PAN;break;case Rr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=Lt.TOUCH_DOLLY_ROTATE;break;default:this.state=Lt.NONE}break;default:this.state=Lt.NONE}this.state!==Lt.NONE&&this.dispatchEvent(Yd)}function RP(t){switch(this._trackPointer(t),this.state){case Lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case Lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case Lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case Lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=Lt.NONE}}function PP(t){this.enabled!==!1&&t.preventDefault()}function DP(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function LP(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const IP={__name:"MiyukiBeads",props:{pattern:{type:Array,required:!0},rows:{type:Number,default:10},cols:{type:Number,default:50}},setup(t){const e=t,n=lt(null);let i,s,r,o,a=[];function l(){const c=new Yl(.7,.7,1.1,32),u=(e.cols-1)/2,d=(e.rows-1)/2;for(let f=0;f<e.rows;f++)for(let h=0;h<e.cols;h++){const v=f*e.cols+h,_=e.pattern[v]||"#ffffff",m=new dv({color:_,roughness:.1,metalness:.1,clearcoat:.5,clearcoatRoughness:.1}),p=new di(c,m);p.position.set((h-u)*1.2,-(f-d)*1.2,0),i.add(p),a.push(p)}}return co(()=>{i=new cv,i.background=new vt(15790320),s=new Vn(45,n.value.clientWidth/n.value.clientHeight,.1,1e3),s.position.set(50,-50,50),r=new bv({antialias:!0}),r.setPixelRatio(Math.min(window.devicePixelRatio||1,2));function c(){if(!n.value)return;const h=n.value.clientWidth,v=n.value.clientHeight;h===0||v===0||(s.aspect=h/v,s.updateProjectionMatrix(),r.setSize(h,v,!1))}c(),n.value.appendChild(r.domElement);const u=new ResizeObserver(()=>{c()});u.observe(n.value),r.__resizeObserver=u,o=new Sv(s,r.domElement),i.add(new pv(16777215,.5));const d=new Ju(16777215,3);d.position.set(10,10,10),i.add(d),l();function f(){requestAnimationFrame(f),o.update(),r.render(i,s)}f(),window.addEventListener("resize",c),r.__resizeHandler=c}),hi(()=>e.pattern,()=>{a.forEach(c=>i.remove(c)),a=[],l()},{deep:!0}),vd(()=>{r&&r.__resizeHandler&&window.removeEventListener("resize",r.__resizeHandler),r&&r.__resizeObserver&&n.value&&r.__resizeObserver.disconnect(),o&&o.dispose(),r&&r.dispose(),a=[]}),(c,u)=>(He(),Ge("div",{ref_key:"container",ref:n,class:"bead-container"},null,512))}},UP={class:"bracelet-wrapper"},OP={class:"canvas-container"},NP={class:"toolbar"},FP={class:"info-panel"},kP={class:"info-item"},BP={class:"info-value"},zP={class:"info-item"},HP={class:"info-value"},VP={__name:"BraceletPreview",props:{pattern:{type:Array,required:!0},rows:{type:Number,required:!0},cols:{type:Number,required:!0},width:{type:Number,default:900},height:{type:Number,default:600}},setup(t,{expose:e}){const n=t,i=lt(null);let s,r,o,a,l=[];function c(){l.forEach(v=>s.remove(v)),l=[]}function u(){if(!s)return;c(),console.log("BraceletPreview - props:",{pattern:n.pattern,rows:n.rows,cols:n.cols,patternLength:n.pattern?n.pattern.length:0,patternType:Array.isArray(n.pattern)?"Array":typeof n.pattern}),n.pattern&&Array.isArray(n.pattern)&&console.log("Pattern structure:",{firstRow:n.pattern[0],firstRowLength:n.pattern[0]?n.pattern[0].length:0,firstRowType:n.pattern[0]?typeof n.pattern[0]:"undefined",sampleValues:n.pattern.slice(0,3).map(L=>L?L.slice(0,3):"undefined")});const v=20,_=Math.PI*1.55,m=-_/2;new vt("#b58a3a");const p=_/n.rows,C=v*p*.98,A=.95,w=1,U=new Yl(A*.7,A*.7,C,16);for(let L=0;L<n.rows;L++)for(let D=0;D<n.cols;D++){let I="#ffffff";if(Array.isArray(n.pattern[0]))I=n.pattern[L]&&n.pattern[L][D]?n.pattern[L][D]:"#ffffff";else{const G=L*n.cols+D;I=n.pattern[G]||"#ffffff"}L===0&&D===0&&console.log("First bead debug:",{y:L,x:D,patternY:n.pattern[L],patternYX:n.pattern[L]?n.pattern[L][D]:void 0,colorHex:I,patternType:Array.isArray(n.pattern[0])?"Matrix":"Simple Array",index:L*n.cols+D}),(!I||I==="#"||I.length<3)&&(I="#ffffff",console.warn("Invalid color detected:",I,"using default white"));const b=new vt(I),M=new dv({color:b,roughness:.25,metalness:.15,clearcoat:.4,clearcoatRoughness:.1}),R=m+(L+.5)*p,q=(n.cols/2-.5-D)*w,j=v*Math.sin(R),J=v*Math.cos(R),le=new di(U,M);le.position.set(j,q,J),le.rotation.z=Math.PI/2,le.rotation.y=R,s.add(le),l.push(le)}}function d(){s=new cv,s.background=new vt(15987699),r=new Vn(42,n.width/n.height,.1,2e3),r.position.set(0,3,95),r.lookAt(0,0,0),o=new bv({antialias:!0,preserveDrawingBuffer:!0}),o.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),o.setSize(n.width,n.height,!1),i.value.appendChild(o.domElement),s.add(new pv(16777215,.7));const v=new Ju(16777215,1.1);v.position.set(8,10,12),s.add(v);const _=new Ju(16777215,.6);_.position.set(-8,-3,8),s.add(_),a=new Sv(r,o.domElement),a.enableDamping=!0,a.target.set(0,0,0);function m(){requestAnimationFrame(m),a.update(),o.render(s,r)}m()}function f(){o&&(a.update(),o.render(s,r))}function h(){f();const v=o.domElement.toDataURL("image/png"),_=document.createElement("a");_.href=v,_.download="bracelet.png",_.click()}return co(()=>{d(),u(),f()}),hi(()=>[n.pattern,n.rows,n.cols],()=>{u(),f()},{deep:!0}),vd(()=>{a&&a.dispose(),o&&o.dispose(),l=[]}),e({downloadImage:h}),(v,_)=>(He(),Ge("div",UP,[_[4]||(_[4]=y("div",{class:"header"},[y("h2",{class:"title"},"پیش‌نمایش دستبند"),y("p",{class:"subtitle"},"نمایش سه‌بعدی طرح انتخاب شده")],-1)),y("div",OP,[y("div",{ref_key:"container",ref:i,class:"bracelet-canvas"},null,512),_[0]||(_[0]=Mm('<div class="canvas-overlay" data-v-93874d86><div class="controls-hint" data-v-93874d86><div class="hint-item" data-v-93874d86><span class="hint-icon" data-v-93874d86>🖱️</span><span data-v-93874d86>برای چرخاندن کلیک و درگ کنید</span></div><div class="hint-item" data-v-93874d86><span class="hint-icon" data-v-93874d86>🔍</span><span data-v-93874d86>برای زوم اسکرول کنید</span></div></div></div>',1))]),y("div",NP,[y("button",{class:"btn btn-primary",onClick:h},_[1]||(_[1]=[y("span",{class:"btn-icon"},"📥",-1),y("span",null,"دانلود تصویر",-1)])),y("div",FP,[y("div",kP,[_[2]||(_[2]=y("span",{class:"info-label"},"ابعاد:",-1)),y("span",BP,pt(t.cols)+" × "+pt(t.rows),1)]),y("div",zP,[_[3]||(_[3]=y("span",{class:"info-label"},"تعداد مهره:",-1)),y("span",HP,pt(t.cols*t.rows),1)])])])]))}},GP=ua(VP,[["__scopeId","data-v-93874d86"]]),WP={class:"working-page"},$P={class:"controls-panel"},XP={class:"control-group"},qP={class:"start-controls"},jP={class:"control-label"},YP=["max"],KP={class:"control-label"},ZP={class:"control-group"},QP={class:"navigation-controls"},JP=["disabled"],eD=["disabled"],tD={class:"control-group"},nD={class:"info-display"},iD={class:"info-item"},sD={class:"info-value"},rD={class:"info-item"},oD={class:"info-value"},aD={class:"info-item"},lD={class:"info-value"},cD={class:"control-group"},uD={class:"color-management"},dD={class:"color-list-management"},fD={class:"all-colors-list"},hD=["onUpdate:modelValue","placeholder","onInput"],pD={class:"color-code"},mD={class:"pattern-container"},gD={class:"pattern-header"},vD={class:"pattern-info"},_D={class:"instructions-panel"},xD={class:"row-instructions"},yD={class:"color-instructions"},bD={class:"color-list"},wD={class:"color-count"},SD={class:"pattern-instructions"},MD={class:"pattern-sequence"},ED=["title"],TD={class:"grid-wrapper"},AD=["title"],CD={__name:"WorkingPage",props:{pattern:{type:Array,default:()=>[]},rows:{type:Number,default:16},cols:{type:Number,default:80}},setup(t){const e=t,n=lt(0),i=lt("forward"),s=lt(0),r=lt({}),o=()=>{if(!e.pattern||e.pattern.length===0){const b=["#ff6b6b","#4ecdc4","#45b7d1","#96ceb4","#feca57","#ff9ff3","#54a0ff","#5f27cd"],M=[];for(let R=0;R<e.rows;R++)for(let q=0;q<e.cols;q++){const j=b[Math.floor(Math.random()*b.length)];M.push({color:j,row:R,col:q})}return M}const I=[];for(let b=0;b<e.rows;b++)for(let M=0;M<e.cols;M++){const R=b*e.cols+M,q=e.pattern[R]||"#ffffff";I.push({color:q,row:b,col:M})}return I},a=lt(o()),l=mn(()=>e.rows),c=mn(()=>i.value==="forward"?n.value+s.value:n.value-s.value),u=mn(()=>{const I=[];for(let b=0;b<e.cols;b++){const M=c.value*e.cols+b,R=e.pattern[M]||"#ffffff";I.includes(R)||I.push(R)}return I}),d=mn(()=>{const I=[];for(let b=0;b<e.cols;b++){const M=c.value*e.cols+b,R=e.pattern[M]||"#ffffff";I.push(R)}return I}),f=mn(()=>{const I=new Set;for(let b=0;b<e.pattern.length;b++)e.pattern[b]&&I.add(e.pattern[b]);return Array.from(I).sort()}),h=I=>Math.floor(I/e.cols)===c.value,v=I=>Math.floor(I/e.cols)==c.value,_=I=>{const b=Math.floor(I/e.cols);return i.value==="forward"?b>c.value:b<c.value},m=I=>h(I)?1:v(I)?.4:.2,p=I=>{let b=0;for(let M=0;M<e.cols;M++){const R=c.value*e.cols+M;e.pattern[R]===I&&b++}return b},C=(I,b)=>{r.value[I]=b},A=I=>{const b=r.value[I];return b?`${b} (${I})`:I},w=()=>{s.value<l.value-1&&s.value++},U=()=>{s.value>0&&s.value--},L=()=>{s.value=0},D=I=>{switch(I.key){case"Enter":case" ":I.preventDefault(),w();break;case"ArrowLeft":I.preventDefault(),U();break;case"r":case"R":I.preventDefault(),L();break}};return co(()=>{document.addEventListener("keydown",D)}),_d(()=>{document.removeEventListener("keydown",D)}),hi(i,()=>{s.value=0}),hi(n,()=>{s.value=0}),hi(()=>e.pattern,()=>{a.value=o()},{deep:!0}),(I,b)=>(He(),Ge("div",WP,[b[16]||(b[16]=y("div",{class:"page-header"},[y("h1",{class:"page-title"},"🧶 مراحل اجرای دستبند میوکی"),y("p",{class:"page-subtitle"}," مراحل بافت دستبند را ردیف به ردیف (از بالا به پایین) مشاهده کنید ")],-1)),y("div",$P,[y("div",XP,[b[5]||(b[5]=y("h3",null,"🎯 تنظیمات شروع",-1)),y("div",qP,[y("label",jP,[b[2]||(b[2]=y("span",null,"شروع از ردیف:",-1)),Zt(y("input",{"onUpdate:modelValue":b[0]||(b[0]=M=>n.value=M),type:"number",min:"0",max:t.rows-1,class:"control-input"},null,8,YP),[[en,n.value,void 0,{number:!0}]])]),y("label",KP,[b[4]||(b[4]=y("span",null,"جهت اجرا:",-1)),Zt(y("select",{"onUpdate:modelValue":b[1]||(b[1]=M=>i.value=M),class:"control-select"},b[3]||(b[3]=[y("option",{value:"forward"},"⬇️ از بالا به پایین",-1),y("option",{value:"backward"},"⬆️ از پایین به بالا",-1)]),512),[[K0,i.value]])])])]),y("div",ZP,[b[6]||(b[6]=y("h3",null,"🎮 کنترل‌ها",-1)),y("div",QP,[y("button",{disabled:s.value<=0,class:"nav-btn prev-btn",onClick:U}," ⬅️ مرحله قبل ",8,JP),y("button",{disabled:s.value>=l.value-1,class:"nav-btn next-btn",onClick:w}," مرحله بعد ➡️ ",8,eD),y("button",{class:"nav-btn reset-btn",onClick:L}," 🔄 شروع مجدد ")])]),y("div",tD,[b[10]||(b[10]=y("h3",null,"📊 اطلاعات",-1)),y("div",nD,[y("div",iD,[b[7]||(b[7]=y("span",{class:"info-label"},"مرحله فعلی:",-1)),y("span",sD,pt(s.value+1)+" از "+pt(l.value),1)]),y("div",rD,[b[8]||(b[8]=y("span",{class:"info-label"},"ردیف فعلی:",-1)),y("span",oD,pt(c.value+1)+" از "+pt(t.rows),1)]),y("div",aD,[b[9]||(b[9]=y("span",{class:"info-label"},"رنگ‌های مورد نیاز:",-1)),y("span",lD,pt(u.value.length)+" رنگ",1)])])]),y("div",cD,[b[12]||(b[12]=y("h3",null,"🎨 مدیریت رنگ‌ها",-1)),y("div",uD,[y("div",dD,[b[11]||(b[11]=y("h4",null,"رنگ‌های استفاده شده در طرح:",-1)),y("div",fD,[(He(!0),Ge(Bt,null,Mn(f.value,(M,R)=>(He(),Ge("div",{key:M,class:"color-management-item"},[y("div",{class:"color-swatch-large",style:Gn({backgroundColor:M})},null,4),Zt(y("input",{"onUpdate:modelValue":q=>r.value[M]=q,type:"text",placeholder:`نام رنگ ${R+1}`,class:"color-name-input",onInput:q=>C(M,q.target.value)},null,40,hD),[[en,r.value[M]]]),y("span",pD,pt(M),1)]))),128))])])])])]),y("div",mD,[y("div",gD,[b[13]||(b[13]=y("h3",null,"🎨 الگوی دستبند",-1)),y("div",vD,[y("span",null,"ابعاد: "+pt(t.rows)+" × "+pt(t.cols),1)])]),y("div",_D,[y("h4",null,"📋 دستورالعمل ردیف "+pt(c.value+1),1),y("div",xD,[y("div",yD,[b[14]||(b[14]=y("h5",null,"رنگ‌های مورد نیاز:",-1)),y("div",bD,[(He(!0),Ge(Bt,null,Mn(u.value,(M,R)=>(He(),Ge("div",{key:R,class:"color-item"},[y("div",{class:"color-swatch",style:Gn({backgroundColor:M})},null,4),y("span",wD,pt(p(M)),1)]))),128))])]),y("div",SD,[b[15]||(b[15]=y("h5",null,"ترتیب رنگ‌ها:",-1)),y("div",MD,[(He(!0),Ge(Bt,null,Mn(d.value,(M,R)=>(He(),Ge("div",{key:R,class:"sequence-item",style:Gn({backgroundColor:M}),title:A(M)},null,12,ED))),128))])])])]),y("div",TD,[y("div",{class:"pattern-grid",style:Gn({gridTemplateColumns:`repeat(${t.cols}, 12px)`})},[(He(!0),Ge(Bt,null,Mn(a.value,(M,R)=>(He(),Ge("div",{key:R,class:it(["grid-cell",{"active-row":h(R),"completed-row":v(R),"upcoming-row":_(R)}]),style:Gn({backgroundColor:M.color,opacity:m(R)}),title:`ردیف ${Math.floor(R/t.cols)+1}, ستون ${R%t.cols+1}: ${M.color}`},null,14,AD))),128))],4)])]),b[17]||(b[17]=Mm('<div class="shortcuts-info" data-v-19b678d4><h4 data-v-19b678d4>⌨️ کلیدهای میانبر</h4><div class="shortcuts-list" data-v-19b678d4><div class="shortcut-item" data-v-19b678d4><kbd data-v-19b678d4>Enter</kbd> یا <kbd data-v-19b678d4>Space</kbd> - مرحله بعد </div><div class="shortcut-item" data-v-19b678d4><kbd data-v-19b678d4>←</kbd> - مرحله قبل</div><div class="shortcut-item" data-v-19b678d4><kbd data-v-19b678d4>R</kbd> - شروع مجدد</div></div></div>',1))]))}},RD=ua(CD,[["__scopeId","data-v-19b678d4"]]),PD={class:"home-container"},DD={class:"app-header max-md:hidden flex items-start justify-between mb-3!"},LD={class:"stats-section"},ID={class:"stat-item"},UD={class:"stat-number"},OD={class:"stat-item"},ND={class:"stat-number"},FD={class:"stat-item"},kD={class:"stat-number"},BD={class:"stat-item"},zD={class:"stat-number"},HD={class:"content-container"},VD={__name:"HomeView",setup(t){const e=lt(16),n=lt(80),i=lt(Array(16*80).fill("#ffffff")),s=lt(!0),r=lt(!1),o=lt(!1),a=lt(!1);function l(){s.value=!0,r.value=!1,o.value=!1,a.value=!1}function c(){r.value=!0,s.value=!1,o.value=!1,a.value=!1}function u(){o.value=!0,r.value=!1,s.value=!1,a.value=!1}function d(){a.value=!0,s.value=!1,r.value=!1,o.value=!1}function f(h){if(!Array.isArray(h)||h.length===0){i.value=[],e.value=0,n.value=0;return}e.value=h.length,n.value=Array.isArray(h[0])?h[0].length:0,i.value=h.flat()}return(h,v)=>(He(),Ge("div",PD,[y("header",DD,[y("div",{class:"header-content"},[y("div",{class:"header-actions mt-3! flex items-center gap-2"},[y("button",{class:"rounded-md bg-cyan-950 px-4! py-1! text-[14px] text-white",onClick:l}," ویرایشگر شبکه "),y("button",{class:"rounded-md bg-blue-900 px-4! py-1! text-[14px] text-white",onClick:c}," نمایش مهره‌ها "),y("button",{class:"rounded-md bg-emerald-900 px-4! py-1! text-[14px] text-white",onClick:u}," پیش‌نمایش دستبند "),y("button",{class:"rounded-md bg-emerald-900 px-4! py-1! text-[14px] text-white",onClick:d}," مراحل اجرا ")])]),y("div",LD,[y("div",ID,[y("div",UD,pt(e.value),1),v[0]||(v[0]=y("div",{class:"stat-label"},"ردیف",-1))]),y("div",OD,[y("div",ND,pt(n.value),1),v[1]||(v[1]=y("div",{class:"stat-label"},"ستون",-1))]),y("div",FD,[y("div",kD,pt(i.value.length),1),v[2]||(v[2]=y("div",{class:"stat-label"},"مهره",-1))]),y("div",BD,[y("div",zD,pt((i.value.length/190).toFixed(2)),1),v[3]||(v[3]=y("div",{class:"stat-label"},"گرم",-1))])])]),y("div",HD,[s.value?(He(),Do(fT,{key:0,class:"content-component",onUpdateGrid:f})):Pt("",!0),r.value?(He(),Do(IP,{key:1,pattern:i.value,rows:e.value,cols:n.value,class:"content-component"},null,8,["pattern","rows","cols"])):Pt("",!0),o.value?(He(),Do(GP,{key:2,pattern:i.value,rows:e.value,cols:n.value,class:"content-component"},null,8,["pattern","rows","cols"])):Pt("",!0),a.value?(He(),Do(RD,{key:3,pattern:i.value,rows:e.value,cols:n.value,class:"content-component"},null,8,["pattern","rows","cols"])):Pt("",!0)])]))}},GD=ua(VD,[["__scopeId","data-v-08380e58"]]),WD=oy({history:Nx("/miyuki-beads-designer/"),routes:[{path:"/",name:"home",component:GD},{path:"/about",name:"about",component:()=>wo(()=>import("./AboutView-Lw3nuCG-.js"),[])},{path:"/sweetalert-demo",name:"sweetalert-demo",component:()=>wo(()=>import("./SweetAlertDemo-Df467C9P.js"),__vite__mapDeps([0,1]))},{path:"/weaving-grid",name:"weaving-grid",component:()=>wo(()=>import("./WeavingGrid-CCn2UCrq.js"),__vite__mapDeps([2,3,4,5]))},{path:"/beadwork-pattern",name:"beadwork-pattern",component:()=>wo(()=>import("./BeadworkPattern-Cn_N5nLW.js"),[])},{path:"/peyote-grid",name:"peyote-grid",component:()=>wo(()=>import("./PeyoteGrid-ByXG5oYr.js"),__vite__mapDeps([6,3,4,7]))}]});var Ql=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},wa=typeof window>"u"||"Deno"in globalThis;function oi(){}function $D(t,e){return typeof t=="function"?t(e):t}function XD(t){return typeof t=="number"&&t>=0&&t!==1/0}function qD(t,e){return Math.max(t+(e||0)-Date.now(),0)}function ap(t,e){return typeof t=="function"?t(e):t}function jD(t,e){return typeof t=="function"?t(e):t}function lp(t,e){const{type:n="all",exact:i,fetchStatus:s,predicate:r,queryKey:o,stale:a}=t;if(o){if(i){if(e.queryHash!==Kd(o,e.options))return!1}else if(!ta(e.queryKey,o))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||s&&s!==e.state.fetchStatus||r&&!r(e))}function cp(t,e){const{exact:n,status:i,predicate:s,mutationKey:r}=t;if(r){if(!e.options.mutationKey)return!1;if(n){if(ea(e.options.mutationKey)!==ea(r))return!1}else if(!ta(e.options.mutationKey,r))return!1}return!(i&&e.state.status!==i||s&&!s(e))}function Kd(t,e){return((e==null?void 0:e.queryKeyHashFn)||ea)(t)}function ea(t){return JSON.stringify(t,(e,n)=>td(n)?Object.keys(n).sort().reduce((i,s)=>(i[s]=n[s],i),{}):n)}function ta(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?Object.keys(e).every(n=>ta(t[n],e[n])):!1}function Mv(t,e){if(t===e)return t;const n=up(t)&&up(e);if(n||td(t)&&td(e)){const i=n?t:Object.keys(t),s=i.length,r=n?e:Object.keys(e),o=r.length,a=n?[]:{};let l=0;for(let c=0;c<o;c++){const u=n?c:r[c];(!n&&i.includes(u)||n)&&t[u]===void 0&&e[u]===void 0?(a[u]=void 0,l++):(a[u]=Mv(t[u],e[u]),a[u]===t[u]&&t[u]!==void 0&&l++)}return s===o&&l===s?t:a}return e}function up(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function td(t){if(!dp(t))return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(!dp(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function dp(t){return Object.prototype.toString.call(t)==="[object Object]"}function YD(t){return new Promise(e=>{setTimeout(e,t)})}function KD(t,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?Mv(t,e):e}function ZD(t,e,n=0){const i=[...t,e];return n&&i.length>n?i.slice(1):i}function QD(t,e,n=0){const i=[e,...t];return n&&i.length>n?i.slice(0,-1):i}var Zd=Symbol();function Ev(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===Zd?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}var js,gs,Vr,pp,JD=(pp=class extends Ql{constructor(){super();bt(this,js);bt(this,gs);bt(this,Vr);dt(this,Vr,e=>{if(!wa&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){de(this,gs)||this.setEventListener(de(this,Vr))}onUnsubscribe(){var e;this.hasListeners()||((e=de(this,gs))==null||e.call(this),dt(this,gs,void 0))}setEventListener(e){var n;dt(this,Vr,e),(n=de(this,gs))==null||n.call(this),dt(this,gs,e(i=>{typeof i=="boolean"?this.setFocused(i):this.onFocus()}))}setFocused(e){de(this,js)!==e&&(dt(this,js,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(n=>{n(e)})}isFocused(){var e;return typeof de(this,js)=="boolean"?de(this,js):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},js=new WeakMap,gs=new WeakMap,Vr=new WeakMap,pp),Tv=new JD,Gr,vs,Wr,mp,eL=(mp=class extends Ql{constructor(){super();bt(this,Gr,!0);bt(this,vs);bt(this,Wr);dt(this,Wr,e=>{if(!wa&&window.addEventListener){const n=()=>e(!0),i=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",i)}}})}onSubscribe(){de(this,vs)||this.setEventListener(de(this,Wr))}onUnsubscribe(){var e;this.hasListeners()||((e=de(this,vs))==null||e.call(this),dt(this,vs,void 0))}setEventListener(e){var n;dt(this,Wr,e),(n=de(this,vs))==null||n.call(this),dt(this,vs,e(this.setOnline.bind(this)))}setOnline(e){de(this,Gr)!==e&&(dt(this,Gr,e),this.listeners.forEach(i=>{i(e)}))}isOnline(){return de(this,Gr)}},Gr=new WeakMap,vs=new WeakMap,Wr=new WeakMap,mp),Dl=new eL;function tL(){let t,e;const n=new Promise((s,r)=>{t=s,e=r});n.status="pending",n.catch(()=>{});function i(s){Object.assign(n,s),delete n.resolve,delete n.reject}return n.resolve=s=>{i({status:"fulfilled",value:s}),t(s)},n.reject=s=>{i({status:"rejected",reason:s}),e(s)},n}function nL(t){return Math.min(1e3*2**t,3e4)}function Av(t){return(t??"online")==="online"?Dl.isOnline():!0}var Cv=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function Yc(t){return t instanceof Cv}function Rv(t){let e=!1,n=0,i=!1,s;const r=tL(),o=_=>{var m;i||(f(new Cv(_)),(m=t.abort)==null||m.call(t))},a=()=>{e=!0},l=()=>{e=!1},c=()=>Tv.isFocused()&&(t.networkMode==="always"||Dl.isOnline())&&t.canRun(),u=()=>Av(t.networkMode)&&t.canRun(),d=_=>{var m;i||(i=!0,(m=t.onSuccess)==null||m.call(t,_),s==null||s(),r.resolve(_))},f=_=>{var m;i||(i=!0,(m=t.onError)==null||m.call(t,_),s==null||s(),r.reject(_))},h=()=>new Promise(_=>{var m;s=p=>{(i||c())&&_(p)},(m=t.onPause)==null||m.call(t)}).then(()=>{var _;s=void 0,i||(_=t.onContinue)==null||_.call(t)}),v=()=>{if(i)return;let _;const m=n===0?t.initialPromise:void 0;try{_=m??t.fn()}catch(p){_=Promise.reject(p)}Promise.resolve(_).then(d).catch(p=>{var L;if(i)return;const C=t.retry??(wa?0:3),A=t.retryDelay??nL,w=typeof A=="function"?A(n,p):A,U=C===!0||typeof C=="number"&&n<C||typeof C=="function"&&C(n,p);if(e||!U){f(p);return}n++,(L=t.onFail)==null||L.call(t,n,p),YD(w).then(()=>c()?void 0:h()).then(()=>{e?f(p):v()})})};return{promise:r,cancel:o,continue:()=>(s==null||s(),r),cancelRetry:a,continueRetry:l,canStart:u,start:()=>(u()?v():h().then(v),r)}}var iL=t=>setTimeout(t,0);function sL(){let t=[],e=0,n=a=>{a()},i=a=>{a()},s=iL;const r=a=>{e?t.push(a):s(()=>{n(a)})},o=()=>{const a=t;t=[],a.length&&s(()=>{i(()=>{a.forEach(l=>{n(l)})})})};return{batch:a=>{let l;e++;try{l=a()}finally{e--,e||o()}return l},batchCalls:a=>(...l)=>{r(()=>{a(...l)})},schedule:r,setNotifyFunction:a=>{n=a},setBatchNotifyFunction:a=>{i=a},setScheduler:a=>{s=a}}}var Tn=sL(),Ys,gp,Pv=(gp=class{constructor(){bt(this,Ys)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),XD(this.gcTime)&&dt(this,Ys,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(wa?1/0:5*60*1e3))}clearGcTimeout(){de(this,Ys)&&(clearTimeout(de(this,Ys)),dt(this,Ys,void 0))}},Ys=new WeakMap,gp),$r,Xr,Qn,Ks,dn,na,Zs,ai,Gi,vp,rL=(vp=class extends Pv{constructor(e){super();bt(this,ai);bt(this,$r);bt(this,Xr);bt(this,Qn);bt(this,Ks);bt(this,dn);bt(this,na);bt(this,Zs);dt(this,Zs,!1),dt(this,na,e.defaultOptions),this.setOptions(e.options),this.observers=[],dt(this,Ks,e.client),dt(this,Qn,de(this,Ks).getQueryCache()),this.queryKey=e.queryKey,this.queryHash=e.queryHash,dt(this,$r,aL(this.options)),this.state=e.state??de(this,$r),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var e;return(e=de(this,dn))==null?void 0:e.promise}setOptions(e){this.options={...de(this,na),...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&de(this,Qn).remove(this)}setData(e,n){const i=KD(this.state.data,e,this.options);return ln(this,ai,Gi).call(this,{data:i,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),i}setState(e,n){ln(this,ai,Gi).call(this,{type:"setState",state:e,setStateOptions:n})}cancel(e){var i,s;const n=(i=de(this,dn))==null?void 0:i.promise;return(s=de(this,dn))==null||s.cancel(e),n?n.then(oi).catch(oi):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(de(this,$r))}isActive(){return this.observers.some(e=>jD(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Zd||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(e=0){return this.state.isInvalidated||this.state.data===void 0||!qD(this.state.dataUpdatedAt,e)}onFocus(){var n;const e=this.observers.find(i=>i.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(n=de(this,dn))==null||n.continue()}onOnline(){var n;const e=this.observers.find(i=>i.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(n=de(this,dn))==null||n.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),de(this,Qn).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(de(this,dn)&&(de(this,Zs)?de(this,dn).cancel({revert:!0}):de(this,dn).cancelRetry()),this.scheduleGc()),de(this,Qn).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||ln(this,ai,Gi).call(this,{type:"invalidate"})}fetch(e,n){var l,c,u;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(de(this,dn))return de(this,dn).continueRetry(),de(this,dn).promise}if(e&&this.setOptions(e),!this.options.queryFn){const d=this.observers.find(f=>f.options.queryFn);d&&this.setOptions(d.options)}const i=new AbortController,s=d=>{Object.defineProperty(d,"signal",{enumerable:!0,get:()=>(dt(this,Zs,!0),i.signal)})},r=()=>{const d=Ev(this.options,n),f={client:de(this,Ks),queryKey:this.queryKey,meta:this.meta};return s(f),dt(this,Zs,!1),this.options.persister?this.options.persister(d,f,this):d(f)},o={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:de(this,Ks),state:this.state,fetchFn:r};s(o),(l=this.options.behavior)==null||l.onFetch(o,this),dt(this,Xr,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((c=o.fetchOptions)==null?void 0:c.meta))&&ln(this,ai,Gi).call(this,{type:"fetch",meta:(u=o.fetchOptions)==null?void 0:u.meta});const a=d=>{var f,h,v,_;Yc(d)&&d.silent||ln(this,ai,Gi).call(this,{type:"error",error:d}),Yc(d)||((h=(f=de(this,Qn).config).onError)==null||h.call(f,d,this),(_=(v=de(this,Qn).config).onSettled)==null||_.call(v,this.state.data,d,this)),this.scheduleGc()};return dt(this,dn,Rv({initialPromise:n==null?void 0:n.initialPromise,fn:o.fetchFn,abort:i.abort.bind(i),onSuccess:d=>{var f,h,v,_;if(d===void 0){a(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(d)}catch(m){a(m);return}(h=(f=de(this,Qn).config).onSuccess)==null||h.call(f,d,this),(_=(v=de(this,Qn).config).onSettled)==null||_.call(v,d,this.state.error,this),this.scheduleGc()},onError:a,onFail:(d,f)=>{ln(this,ai,Gi).call(this,{type:"failed",failureCount:d,error:f})},onPause:()=>{ln(this,ai,Gi).call(this,{type:"pause"})},onContinue:()=>{ln(this,ai,Gi).call(this,{type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode,canRun:()=>!0})),de(this,dn).start()}},$r=new WeakMap,Xr=new WeakMap,Qn=new WeakMap,Ks=new WeakMap,dn=new WeakMap,na=new WeakMap,Zs=new WeakMap,ai=new WeakSet,Gi=function(e){const n=i=>{switch(e.type){case"failed":return{...i,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...oL(i.data,this.options),fetchMeta:e.meta??null};case"success":return{...i,data:e.data,dataUpdateCount:i.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const s=e.error;return Yc(s)&&s.revert&&de(this,Xr)?{...de(this,Xr),fetchStatus:"idle"}:{...i,error:s,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...e.state}}};this.state=n(this.state),Tn.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),de(this,Qn).notify({query:this,type:"updated",action:e})})},vp);function oL(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Av(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function aL(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=e!==void 0,i=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var yi,_p,Dv=(_p=class extends Ql{constructor(n={}){super();bt(this,yi);this.config=n,dt(this,yi,new Map)}build(n,i,s){const r=i.queryKey,o=i.queryHash??Kd(r,i);let a=this.get(o);return a||(a=new rL({client:n,queryKey:r,queryHash:o,options:n.defaultQueryOptions(i),state:s,defaultOptions:n.getQueryDefaults(r)}),this.add(a)),a}add(n){de(this,yi).has(n.queryHash)||(de(this,yi).set(n.queryHash,n),this.notify({type:"added",query:n}))}remove(n){const i=de(this,yi).get(n.queryHash);i&&(n.destroy(),i===n&&de(this,yi).delete(n.queryHash),this.notify({type:"removed",query:n}))}clear(){Tn.batch(()=>{this.getAll().forEach(n=>{this.remove(n)})})}get(n){return de(this,yi).get(n)}getAll(){return[...de(this,yi).values()]}find(n){const i={exact:!0,...n};return this.getAll().find(s=>lp(i,s))}findAll(n={}){const i=this.getAll();return Object.keys(n).length>0?i.filter(s=>lp(n,s)):i}notify(n){Tn.batch(()=>{this.listeners.forEach(i=>{i(n)})})}onFocus(){Tn.batch(()=>{this.getAll().forEach(n=>{n.onFocus()})})}onOnline(){Tn.batch(()=>{this.getAll().forEach(n=>{n.onOnline()})})}},yi=new WeakMap,_p),bi,Sn,Qs,wi,cs,xp,lL=(xp=class extends Pv{constructor(e){super();bt(this,wi);bt(this,bi);bt(this,Sn);bt(this,Qs);this.mutationId=e.mutationId,dt(this,Sn,e.mutationCache),dt(this,bi,[]),this.state=e.state||cL(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){de(this,bi).includes(e)||(de(this,bi).push(e),this.clearGcTimeout(),de(this,Sn).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){dt(this,bi,de(this,bi).filter(n=>n!==e)),this.scheduleGc(),de(this,Sn).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){de(this,bi).length||(this.state.status==="pending"?this.scheduleGc():de(this,Sn).remove(this))}continue(){var e;return((e=de(this,Qs))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var r,o,a,l,c,u,d,f,h,v,_,m,p,C,A,w,U,L,D,I;const n=()=>{ln(this,wi,cs).call(this,{type:"continue"})};dt(this,Qs,Rv({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(b,M)=>{ln(this,wi,cs).call(this,{type:"failed",failureCount:b,error:M})},onPause:()=>{ln(this,wi,cs).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>de(this,Sn).canRun(this)}));const i=this.state.status==="pending",s=!de(this,Qs).canStart();try{if(i)n();else{ln(this,wi,cs).call(this,{type:"pending",variables:e,isPaused:s}),await((o=(r=de(this,Sn).config).onMutate)==null?void 0:o.call(r,e,this));const M=await((l=(a=this.options).onMutate)==null?void 0:l.call(a,e));M!==this.state.context&&ln(this,wi,cs).call(this,{type:"pending",context:M,variables:e,isPaused:s})}const b=await de(this,Qs).start();return await((u=(c=de(this,Sn).config).onSuccess)==null?void 0:u.call(c,b,e,this.state.context,this)),await((f=(d=this.options).onSuccess)==null?void 0:f.call(d,b,e,this.state.context)),await((v=(h=de(this,Sn).config).onSettled)==null?void 0:v.call(h,b,null,this.state.variables,this.state.context,this)),await((m=(_=this.options).onSettled)==null?void 0:m.call(_,b,null,e,this.state.context)),ln(this,wi,cs).call(this,{type:"success",data:b}),b}catch(b){try{throw await((C=(p=de(this,Sn).config).onError)==null?void 0:C.call(p,b,e,this.state.context,this)),await((w=(A=this.options).onError)==null?void 0:w.call(A,b,e,this.state.context)),await((L=(U=de(this,Sn).config).onSettled)==null?void 0:L.call(U,void 0,b,this.state.variables,this.state.context,this)),await((I=(D=this.options).onSettled)==null?void 0:I.call(D,void 0,b,e,this.state.context)),b}finally{ln(this,wi,cs).call(this,{type:"error",error:b})}}finally{de(this,Sn).runNext(this)}}},bi=new WeakMap,Sn=new WeakMap,Qs=new WeakMap,wi=new WeakSet,cs=function(e){const n=i=>{switch(e.type){case"failed":return{...i,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...i,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:e.error,failureCount:i.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=n(this.state),Tn.batch(()=>{de(this,bi).forEach(i=>{i.onMutationUpdate(e)}),de(this,Sn).notify({mutation:this,type:"updated",action:e})})},xp);function cL(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var $i,li,ia,yp,Lv=(yp=class extends Ql{constructor(n={}){super();bt(this,$i);bt(this,li);bt(this,ia);this.config=n,dt(this,$i,new Set),dt(this,li,new Map),dt(this,ia,0)}build(n,i,s){const r=new lL({mutationCache:this,mutationId:++Sa(this,ia)._,options:n.defaultMutationOptions(i),state:s});return this.add(r),r}add(n){de(this,$i).add(n);const i=Za(n);if(typeof i=="string"){const s=de(this,li).get(i);s?s.push(n):de(this,li).set(i,[n])}this.notify({type:"added",mutation:n})}remove(n){if(de(this,$i).delete(n)){const i=Za(n);if(typeof i=="string"){const s=de(this,li).get(i);if(s)if(s.length>1){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}else s[0]===n&&de(this,li).delete(i)}}this.notify({type:"removed",mutation:n})}canRun(n){const i=Za(n);if(typeof i=="string"){const s=de(this,li).get(i),r=s==null?void 0:s.find(o=>o.state.status==="pending");return!r||r===n}else return!0}runNext(n){var s;const i=Za(n);if(typeof i=="string"){const r=(s=de(this,li).get(i))==null?void 0:s.find(o=>o!==n&&o.state.isPaused);return(r==null?void 0:r.continue())??Promise.resolve()}else return Promise.resolve()}clear(){Tn.batch(()=>{de(this,$i).forEach(n=>{this.notify({type:"removed",mutation:n})}),de(this,$i).clear(),de(this,li).clear()})}getAll(){return Array.from(de(this,$i))}find(n){const i={exact:!0,...n};return this.getAll().find(s=>cp(i,s))}findAll(n={}){return this.getAll().filter(i=>cp(n,i))}notify(n){Tn.batch(()=>{this.listeners.forEach(i=>{i(n)})})}resumePausedMutations(){const n=this.getAll().filter(i=>i.state.isPaused);return Tn.batch(()=>Promise.all(n.map(i=>i.continue().catch(oi))))}},$i=new WeakMap,li=new WeakMap,ia=new WeakMap,yp);function Za(t){var e;return(e=t.options.scope)==null?void 0:e.id}function fp(t){return{onFetch:(e,n)=>{var u,d,f,h,v;const i=e.options,s=(f=(d=(u=e.fetchOptions)==null?void 0:u.meta)==null?void 0:d.fetchMore)==null?void 0:f.direction,r=((h=e.state.data)==null?void 0:h.pages)||[],o=((v=e.state.data)==null?void 0:v.pageParams)||[];let a={pages:[],pageParams:[]},l=0;const c=async()=>{let _=!1;const m=A=>{Object.defineProperty(A,"signal",{enumerable:!0,get:()=>(e.signal.aborted?_=!0:e.signal.addEventListener("abort",()=>{_=!0}),e.signal)})},p=Ev(e.options,e.fetchOptions),C=async(A,w,U)=>{if(_)return Promise.reject();if(w==null&&A.pages.length)return Promise.resolve(A);const L={client:e.client,queryKey:e.queryKey,pageParam:w,direction:U?"backward":"forward",meta:e.options.meta};m(L);const D=await p(L),{maxPages:I}=e.options,b=U?QD:ZD;return{pages:b(A.pages,D,I),pageParams:b(A.pageParams,w,I)}};if(s&&r.length){const A=s==="backward",w=A?uL:hp,U={pages:r,pageParams:o},L=w(i,U);a=await C(U,L,A)}else{const A=t??r.length;do{const w=l===0?o[0]??i.initialPageParam:hp(i,a);if(l>0&&w==null)break;a=await C(a,w),l++}while(l<A)}return a};e.options.persister?e.fetchFn=()=>{var _,m;return(m=(_=e.options).persister)==null?void 0:m.call(_,c,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=c}}}function hp(t,{pages:e,pageParams:n}){const i=e.length-1;return e.length>0?t.getNextPageParam(e[i],e,n[i],n):void 0}function uL(t,{pages:e,pageParams:n}){var i;return e.length>0?(i=t.getPreviousPageParam)==null?void 0:i.call(t,e[0],e,n[0],n):void 0}var $t,_s,xs,qr,jr,ys,Yr,Kr,bp,dL=(bp=class{constructor(e={}){bt(this,$t);bt(this,_s);bt(this,xs);bt(this,qr);bt(this,jr);bt(this,ys);bt(this,Yr);bt(this,Kr);dt(this,$t,e.queryCache||new Dv),dt(this,_s,e.mutationCache||new Lv),dt(this,xs,e.defaultOptions||{}),dt(this,qr,new Map),dt(this,jr,new Map),dt(this,ys,0)}mount(){Sa(this,ys)._++,de(this,ys)===1&&(dt(this,Yr,Tv.subscribe(async e=>{e&&(await this.resumePausedMutations(),de(this,$t).onFocus())})),dt(this,Kr,Dl.subscribe(async e=>{e&&(await this.resumePausedMutations(),de(this,$t).onOnline())})))}unmount(){var e,n;Sa(this,ys)._--,de(this,ys)===0&&((e=de(this,Yr))==null||e.call(this),dt(this,Yr,void 0),(n=de(this,Kr))==null||n.call(this),dt(this,Kr,void 0))}isFetching(e){return de(this,$t).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return de(this,_s).findAll({...e,status:"pending"}).length}getQueryData(e){var i;const n=this.defaultQueryOptions({queryKey:e});return(i=de(this,$t).get(n.queryHash))==null?void 0:i.state.data}ensureQueryData(e){const n=this.defaultQueryOptions(e),i=de(this,$t).build(this,n),s=i.state.data;return s===void 0?this.fetchQuery(e):(e.revalidateIfStale&&i.isStaleByTime(ap(n.staleTime,i))&&this.prefetchQuery(n),Promise.resolve(s))}getQueriesData(e){return de(this,$t).findAll(e).map(({queryKey:n,state:i})=>{const s=i.data;return[n,s]})}setQueryData(e,n,i){const s=this.defaultQueryOptions({queryKey:e}),r=de(this,$t).get(s.queryHash),o=r==null?void 0:r.state.data,a=$D(n,o);if(a!==void 0)return de(this,$t).build(this,s).setData(a,{...i,manual:!0})}setQueriesData(e,n,i){return Tn.batch(()=>de(this,$t).findAll(e).map(({queryKey:s})=>[s,this.setQueryData(s,n,i)]))}getQueryState(e){var i;const n=this.defaultQueryOptions({queryKey:e});return(i=de(this,$t).get(n.queryHash))==null?void 0:i.state}removeQueries(e){const n=de(this,$t);Tn.batch(()=>{n.findAll(e).forEach(i=>{n.remove(i)})})}resetQueries(e,n){const i=de(this,$t);return Tn.batch(()=>(i.findAll(e).forEach(s=>{s.reset()}),this.refetchQueries({type:"active",...e},n)))}cancelQueries(e,n={}){const i={revert:!0,...n},s=Tn.batch(()=>de(this,$t).findAll(e).map(r=>r.cancel(i)));return Promise.all(s).then(oi).catch(oi)}invalidateQueries(e,n={}){return Tn.batch(()=>(de(this,$t).findAll(e).forEach(i=>{i.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},n)))}refetchQueries(e,n={}){const i={...n,cancelRefetch:n.cancelRefetch??!0},s=Tn.batch(()=>de(this,$t).findAll(e).filter(r=>!r.isDisabled()).map(r=>{let o=r.fetch(void 0,i);return i.throwOnError||(o=o.catch(oi)),r.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(s).then(oi)}fetchQuery(e){const n=this.defaultQueryOptions(e);n.retry===void 0&&(n.retry=!1);const i=de(this,$t).build(this,n);return i.isStaleByTime(ap(n.staleTime,i))?i.fetch(n):Promise.resolve(i.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(oi).catch(oi)}fetchInfiniteQuery(e){return e.behavior=fp(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(oi).catch(oi)}ensureInfiniteQueryData(e){return e.behavior=fp(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return Dl.isOnline()?de(this,_s).resumePausedMutations():Promise.resolve()}getQueryCache(){return de(this,$t)}getMutationCache(){return de(this,_s)}getDefaultOptions(){return de(this,xs)}setDefaultOptions(e){dt(this,xs,e)}setQueryDefaults(e,n){de(this,qr).set(ea(e),{queryKey:e,defaultOptions:n})}getQueryDefaults(e){const n=[...de(this,qr).values()],i={};return n.forEach(s=>{ta(e,s.queryKey)&&Object.assign(i,s.defaultOptions)}),i}setMutationDefaults(e,n){de(this,jr).set(ea(e),{mutationKey:e,defaultOptions:n})}getMutationDefaults(e){const n=[...de(this,jr).values()],i={};return n.forEach(s=>{ta(e,s.mutationKey)&&Object.assign(i,s.defaultOptions)}),i}defaultQueryOptions(e){if(e._defaulted)return e;const n={...de(this,xs).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return n.queryHash||(n.queryHash=Kd(n.queryKey,n)),n.refetchOnReconnect===void 0&&(n.refetchOnReconnect=n.networkMode!=="always"),n.throwOnError===void 0&&(n.throwOnError=!!n.suspense),!n.networkMode&&n.persister&&(n.networkMode="offlineFirst"),n.queryFn===Zd&&(n.enabled=!1),n}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...de(this,xs).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){de(this,$t).clear(),de(this,_s).clear()}},$t=new WeakMap,_s=new WeakMap,xs=new WeakMap,qr=new WeakMap,jr=new WeakMap,ys=new WeakMap,Yr=new WeakMap,Kr=new WeakMap,bp),fL="VUE_QUERY_CLIENT";function hL(t){const e=t?`:${t}`:"";return`${fL}${e}`}function nd(t,e,n="",i=0){if(e){const s=e(t,n,i);if(s===void 0&&on(t)||s!==void 0)return s}if(Array.isArray(t))return t.map((s,r)=>nd(s,e,String(r),i+1));if(typeof t=="object"&&mL(t)){const s=Object.entries(t).map(([r,o])=>[r,nd(o,e,r,i+1)]);return Object.fromEntries(s)}return t}function pL(t,e){return nd(t,e)}function _t(t,e=!1){return pL(t,(n,i,s)=>{if(s===1&&i==="queryKey")return _t(n,!0);if(e&&gL(n))return _t(n(),e);if(on(n))return _t(Ms(n),e)})}function mL(t){if(Object.prototype.toString.call(t)!=="[object Object]")return!1;const e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function gL(t){return typeof t=="function"}var vL=class extends Dv{find(t){return super.find(_t(t))}findAll(t={}){return super.findAll(_t(t))}},_L=class extends Lv{find(t){return super.find(_t(t))}findAll(t={}){return super.findAll(_t(t))}},xL=class extends dL{constructor(t={}){const e={defaultOptions:t.defaultOptions,queryCache:t.queryCache||new vL,mutationCache:t.mutationCache||new _L};super(e),this.isRestoring=lt(!1)}isFetching(t={}){return super.isFetching(_t(t))}isMutating(t={}){return super.isMutating(_t(t))}getQueryData(t){return super.getQueryData(_t(t))}ensureQueryData(t){return super.ensureQueryData(_t(t))}getQueriesData(t){return super.getQueriesData(_t(t))}setQueryData(t,e,n={}){return super.setQueryData(_t(t),e,_t(n))}setQueriesData(t,e,n={}){return super.setQueriesData(_t(t),e,_t(n))}getQueryState(t){return super.getQueryState(_t(t))}removeQueries(t={}){return super.removeQueries(_t(t))}resetQueries(t={},e={}){return super.resetQueries(_t(t),_t(e))}cancelQueries(t={},e={}){return super.cancelQueries(_t(t),_t(e))}invalidateQueries(t={},e={}){const n=_t(t),i=_t(e);if(super.invalidateQueries({...n,refetchType:"none"},i),n.refetchType==="none")return Promise.resolve();const s={...n,type:n.refetchType??n.type??"active"};return la().then(()=>super.refetchQueries(s,i))}refetchQueries(t={},e={}){return super.refetchQueries(_t(t),_t(e))}fetchQuery(t){return super.fetchQuery(_t(t))}prefetchQuery(t){return super.prefetchQuery(_t(t))}fetchInfiniteQuery(t){return super.fetchInfiniteQuery(_t(t))}prefetchInfiniteQuery(t){return super.prefetchInfiniteQuery(_t(t))}setDefaultOptions(t){super.setDefaultOptions(_t(t))}setQueryDefaults(t,e){super.setQueryDefaults(_t(t),_t(e))}getQueryDefaults(t){return super.getQueryDefaults(_t(t))}setMutationDefaults(t,e){super.setMutationDefaults(_t(t),_t(e))}getMutationDefaults(t){return super.getMutationDefaults(_t(t))}},yL={install:(t,e={})=>{const n=hL(e.queryClientKey);let i;if("queryClient"in e&&e.queryClient)i=e.queryClient;else{const o="queryClientConfig"in e?e.queryClientConfig:void 0;i=new xL(o)}wa||i.mount();let s=()=>{};if(e.clientPersister){i.isRestoring.value=!0;const[o,a]=e.clientPersister(i);s=o,a.then(()=>{var l;i.isRestoring.value=!1,(l=e.clientPersisterOnSuccess)==null||l.call(e,i)})}const r=()=>{i.unmount(),s()};if(t.onUnmount)t.onUnmount(r);else{const o=t.unmount;t.unmount=function(){r(),o()}}t.provide(n,i)}};const Iv=tx(py),bL=rx();Iv.use(bL).use(WD).use(yL);Iv.mount("#app");export{yo as A,SL as B,tn as C,IP as D,GP as E,Bt as F,mn as G,Do as H,Lo as I,vt as J,bv as K,pv as L,Ju as M,Yl as N,Sv as O,Vn as P,dv as Q,di as R,cv as S,Mm as T,_d as U,la as V,RD as W,ua as _,y as a,Pt as b,Ge as c,Wt as d,EL as e,So as f,gc as g,AL as h,CL as i,RL as j,PL as k,TL as l,oa as m,co as n,He as o,vd as p,Zt as q,lt as r,vi as s,pt as t,Mn as u,en as v,hi as w,it as x,ML as y,Gn as z};
