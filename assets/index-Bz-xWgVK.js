const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SweetAlertDemo-BhqaM25n.js","assets/SweetAlertDemo-tn0RQdqM.css","assets/WeavingGrid-BK-nK9nG.js","assets/PeyoteGridEditor-CrsemyVe.js","assets/PeyoteGridEditor-_eckTEjt.css","assets/WeavingGrid-p5k6qFxd.css","assets/PeyoteGrid-ucvkPu3t.js","assets/PeyoteGrid-DyXLFu-D.css"])))=>i.map(i=>d[i]);
var Kd=t=>{throw TypeError(t)};var $l=(t,e,n)=>e.has(t)||Kd("Cannot "+n);var me=(t,e,n)=>($l(t,e,"read from private field"),n?n.call(t):e.get(t)),ct=(t,e,n)=>e.has(t)?Kd("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Ye=(t,e,n,i)=>($l(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n),qt=(t,e,n)=>($l(t,e,"access private method"),n);var pa=(t,e,n,i)=>({set _(s){Ye(t,e,s,n)},get _(){return me(t,e,i)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Yu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const wt={},wr=[],hi=()=>{},k_=()=>!1,Sl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ku=t=>t.startsWith("onUpdate:"),nn=Object.assign,Zu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},z_=Object.prototype.hasOwnProperty,gt=(t,e)=>z_.call(t,e),We=Array.isArray,br=t=>qo(t)==="[object Map]",Qr=t=>qo(t)==="[object Set]",Zd=t=>qo(t)==="[object Date]",je=t=>typeof t=="function",Ft=t=>typeof t=="string",gi=t=>typeof t=="symbol",St=t=>t!==null&&typeof t=="object",wp=t=>(St(t)||je(t))&&je(t.then)&&je(t.catch),bp=Object.prototype.toString,qo=t=>bp.call(t),H_=t=>qo(t).slice(8,-1),Sp=t=>qo(t)==="[object Object]",Qu=t=>Ft(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,So=Yu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ml=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},V_=/-(\w)/g,Bn=Ml(t=>t.replace(V_,(e,n)=>n?n.toUpperCase():"")),G_=/\B([A-Z])/g,Zs=Ml(t=>t.replace(G_,"-$1").toLowerCase()),El=Ml(t=>t.charAt(0).toUpperCase()+t.slice(1)),ql=Ml(t=>t?`on${El(t)}`:""),fs=(t,e)=>!Object.is(t,e),Ga=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Mp=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},tl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Qd;const Tl=()=>Qd||(Qd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function qn(t){if(We(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Ft(i)?q_(i):qn(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Ft(t)||St(t))return t}const W_=/;(?![^(]*\))/g,X_=/:([^]+)/,$_=/\/\*[^]*?\*\//g;function q_(t){const e={};return t.replace($_,"").split(W_).forEach(n=>{if(n){const i=n.split(X_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function $t(t){let e="";if(Ft(t))e=t;else if(We(t))for(let n=0;n<t.length;n++){const i=$t(t[n]);i&&(e+=i+" ")}else if(St(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const j_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Y_=Yu(j_);function Ep(t){return!!t||t===""}function K_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=jo(t[i],e[i]);return n}function jo(t,e){if(t===e)return!0;let n=Zd(t),i=Zd(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=gi(t),i=gi(e),n||i)return t===e;if(n=We(t),i=We(e),n||i)return n&&i?K_(t,e):!1;if(n=St(t),i=St(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!jo(t[o],e[o]))return!1}}return String(t)===String(e)}function Ju(t,e){return t.findIndex(n=>jo(n,e))}const Tp=t=>!!(t&&t.__v_isRef===!0),Dt=t=>Ft(t)?t:t==null?"":We(t)||St(t)&&(t.toString===bp||!je(t.toString))?Tp(t)?Dt(t.value):JSON.stringify(t,Ap,2):String(t),Ap=(t,e)=>Tp(e)?Ap(t,e.value):br(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[jl(i,r)+" =>"]=s,n),{})}:Qr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>jl(n))}:gi(e)?jl(e):St(e)&&!We(e)&&!Sp(e)?String(e):e,jl=(t,e="")=>{var n;return gi(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let En;class Cp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=En,!e&&En&&(this.index=(En.scopes||(En.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=En;try{return En=this,e()}finally{En=n}}}on(){En=this}off(){En=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Z_(t){return new Cp(t)}function Q_(){return En}let bt;const Yl=new WeakSet;class Rp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,En&&En.active&&En.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Yl.has(this)&&(Yl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Dp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Jd(this),Lp(this);const e=bt,n=Zn;bt=this,Zn=!0;try{return this.fn()}finally{Ip(this),bt=e,Zn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)nd(e);this.deps=this.depsTail=void 0,Jd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Yl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Vc(this)&&this.run()}get dirty(){return Vc(this)}}let Pp=0,Mo,Eo;function Dp(t,e=!1){if(t.flags|=8,e){t.next=Eo,Eo=t;return}t.next=Mo,Mo=t}function ed(){Pp++}function td(){if(--Pp>0)return;if(Eo){let e=Eo;for(Eo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Mo;){let e=Mo;for(Mo=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Lp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ip(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),nd(i),J_(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function Vc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Up(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Up(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Do))return;t.globalVersion=Do;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Vc(t)){t.flags&=-3;return}const n=bt,i=Zn;bt=t,Zn=!0;try{Lp(t);const s=t.fn(t._value);(e.version===0||fs(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{bt=n,Zn=i,Ip(t),t.flags&=-3}}function nd(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)nd(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function J_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Zn=!0;const Op=[];function vs(){Op.push(Zn),Zn=!1}function xs(){const t=Op.pop();Zn=t===void 0?!0:t}function Jd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=bt;bt=void 0;try{e()}finally{bt=n}}}let Do=0;class ev{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class id{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!bt||!Zn||bt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==bt)n=this.activeLink=new ev(bt,this),bt.deps?(n.prevDep=bt.depsTail,bt.depsTail.nextDep=n,bt.depsTail=n):bt.deps=bt.depsTail=n,Np(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=bt.depsTail,n.nextDep=void 0,bt.depsTail.nextDep=n,bt.depsTail=n,bt.deps===n&&(bt.deps=i)}return n}trigger(e){this.version++,Do++,this.notify(e)}notify(e){ed();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{td()}}}function Np(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Np(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Gc=new WeakMap,Gs=Symbol(""),Wc=Symbol(""),Lo=Symbol("");function Zt(t,e,n){if(Zn&&bt){let i=Gc.get(t);i||Gc.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new id),s.map=i,s.key=n),s.track()}}function Ui(t,e,n,i,s,r){const o=Gc.get(t);if(!o){Do++;return}const a=l=>{l&&l.trigger()};if(ed(),e==="clear")o.forEach(a);else{const l=We(t),c=l&&Qu(n);if(l&&n==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===Lo||!gi(f)&&f>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Lo)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Gs)),br(t)&&a(o.get(Wc)));break;case"delete":l||(a(o.get(Gs)),br(t)&&a(o.get(Wc)));break;case"set":br(t)&&a(o.get(Gs));break}}td()}function nr(t){const e=mt(t);return e===t?e:(Zt(e,"iterate",Lo),Fn(t)?e:e.map(Qt))}function Al(t){return Zt(t=mt(t),"iterate",Lo),t}const tv={__proto__:null,[Symbol.iterator](){return Kl(this,Symbol.iterator,Qt)},concat(...t){return nr(this).concat(...t.map(e=>We(e)?nr(e):e))},entries(){return Kl(this,"entries",t=>(t[1]=Qt(t[1]),t))},every(t,e){return bi(this,"every",t,e,void 0,arguments)},filter(t,e){return bi(this,"filter",t,e,n=>n.map(Qt),arguments)},find(t,e){return bi(this,"find",t,e,Qt,arguments)},findIndex(t,e){return bi(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return bi(this,"findLast",t,e,Qt,arguments)},findLastIndex(t,e){return bi(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return bi(this,"forEach",t,e,void 0,arguments)},includes(...t){return Zl(this,"includes",t)},indexOf(...t){return Zl(this,"indexOf",t)},join(t){return nr(this).join(t)},lastIndexOf(...t){return Zl(this,"lastIndexOf",t)},map(t,e){return bi(this,"map",t,e,void 0,arguments)},pop(){return oo(this,"pop")},push(...t){return oo(this,"push",t)},reduce(t,...e){return ef(this,"reduce",t,e)},reduceRight(t,...e){return ef(this,"reduceRight",t,e)},shift(){return oo(this,"shift")},some(t,e){return bi(this,"some",t,e,void 0,arguments)},splice(...t){return oo(this,"splice",t)},toReversed(){return nr(this).toReversed()},toSorted(t){return nr(this).toSorted(t)},toSpliced(...t){return nr(this).toSpliced(...t)},unshift(...t){return oo(this,"unshift",t)},values(){return Kl(this,"values",Qt)}};function Kl(t,e,n){const i=Al(t),s=i[e]();return i!==t&&!Fn(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=n(r.value)),r}),s}const nv=Array.prototype;function bi(t,e,n,i,s,r){const o=Al(t),a=o!==t&&!Fn(t),l=o[e];if(l!==nv[e]){const d=l.apply(t,r);return a?Qt(d):d}let c=n;o!==t&&(a?c=function(d,f){return n.call(this,Qt(d),f,t)}:n.length>2&&(c=function(d,f){return n.call(this,d,f,t)}));const u=l.call(o,c,i);return a&&s?s(u):u}function ef(t,e,n,i){const s=Al(t);let r=n;return s!==t&&(Fn(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,Qt(a),l,t)}),s[e](r,...i)}function Zl(t,e,n){const i=mt(t);Zt(i,"iterate",Lo);const s=i[e](...n);return(s===-1||s===!1)&&od(n[0])?(n[0]=mt(n[0]),i[e](...n)):s}function oo(t,e,n=[]){vs(),ed();const i=mt(t)[e].apply(t,n);return td(),xs(),i}const iv=Yu("__proto__,__v_isRef,__isVue"),Fp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(gi));function sv(t){gi(t)||(t=String(t));const e=mt(this);return Zt(e,"has",t),e.hasOwnProperty(t)}class Bp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?pv:Vp:r?Hp:zp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=We(e);if(!s){let l;if(o&&(l=tv[n]))return l;if(n==="hasOwnProperty")return sv}const a=Reflect.get(e,n,Wt(e)?e:i);return(gi(n)?Fp.has(n):iv(n))||(s||Zt(e,"get",n),r)?a:Wt(a)?o&&Qu(n)?a:a.value:St(a)?s?Wp(a):Yo(a):a}}class kp extends Bp{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(!this._isShallow){const l=Xs(r);if(!Fn(i)&&!Xs(i)&&(r=mt(r),i=mt(i)),!We(e)&&Wt(r)&&!Wt(i))return l?!1:(r.value=i,!0)}const o=We(e)&&Qu(n)?Number(n)<e.length:gt(e,n),a=Reflect.set(e,n,i,Wt(e)?e:s);return e===mt(s)&&(o?fs(i,r)&&Ui(e,"set",n,i):Ui(e,"add",n,i)),a}deleteProperty(e,n){const i=gt(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Ui(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!gi(n)||!Fp.has(n))&&Zt(e,"has",n),i}ownKeys(e){return Zt(e,"iterate",We(e)?"length":Gs),Reflect.ownKeys(e)}}class rv extends Bp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ov=new kp,av=new rv,lv=new kp(!0);const Xc=t=>t,ma=t=>Reflect.getPrototypeOf(t);function cv(t,e,n){return function(...i){const s=this.__v_raw,r=mt(s),o=br(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?Xc:e?$c:Qt;return!e&&Zt(r,"iterate",l?Wc:Gs),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function ga(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function uv(t,e){const n={get(s){const r=this.__v_raw,o=mt(r),a=mt(s);t||(fs(s,a)&&Zt(o,"get",s),Zt(o,"get",a));const{has:l}=ma(o),c=e?Xc:t?$c:Qt;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&Zt(mt(s),"iterate",Gs),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=mt(r),a=mt(s);return t||(fs(s,a)&&Zt(o,"has",s),Zt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=mt(a),c=e?Xc:t?$c:Qt;return!t&&Zt(l,"iterate",Gs),a.forEach((u,d)=>s.call(r,c(u),c(d),o))}};return nn(n,t?{add:ga("add"),set:ga("set"),delete:ga("delete"),clear:ga("clear")}:{add(s){!e&&!Fn(s)&&!Xs(s)&&(s=mt(s));const r=mt(this);return ma(r).has.call(r,s)||(r.add(s),Ui(r,"add",s,s)),this},set(s,r){!e&&!Fn(r)&&!Xs(r)&&(r=mt(r));const o=mt(this),{has:a,get:l}=ma(o);let c=a.call(o,s);c||(s=mt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?fs(r,u)&&Ui(o,"set",s,r):Ui(o,"add",s,r),this},delete(s){const r=mt(this),{has:o,get:a}=ma(r);let l=o.call(r,s);l||(s=mt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Ui(r,"delete",s,void 0),c},clear(){const s=mt(this),r=s.size!==0,o=s.clear();return r&&Ui(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=cv(s,t,e)}),n}function sd(t,e){const n=uv(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(gt(n,s)&&s in i?n:i,s,r)}const dv={get:sd(!1,!1)},fv={get:sd(!1,!0)},hv={get:sd(!0,!1)};const zp=new WeakMap,Hp=new WeakMap,Vp=new WeakMap,pv=new WeakMap;function mv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gv(t){return t.__v_skip||!Object.isExtensible(t)?0:mv(H_(t))}function Yo(t){return Xs(t)?t:rd(t,!1,ov,dv,zp)}function Gp(t){return rd(t,!1,lv,fv,Hp)}function Wp(t){return rd(t,!0,av,hv,Vp)}function rd(t,e,n,i,s){if(!St(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=gv(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Sr(t){return Xs(t)?Sr(t.__v_raw):!!(t&&t.__v_isReactive)}function Xs(t){return!!(t&&t.__v_isReadonly)}function Fn(t){return!!(t&&t.__v_isShallow)}function od(t){return t?!!t.__v_raw:!1}function mt(t){const e=t&&t.__v_raw;return e?mt(e):t}function Xp(t){return!gt(t,"__v_skip")&&Object.isExtensible(t)&&Mp(t,"__v_skip",!0),t}const Qt=t=>St(t)?Yo(t):t,$c=t=>St(t)?Wp(t):t;function Wt(t){return t?t.__v_isRef===!0:!1}function Ke(t){return $p(t,!1)}function _v(t){return $p(t,!0)}function $p(t,e){return Wt(t)?t:new vv(t,e)}class vv{constructor(e,n){this.dep=new id,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:mt(e),this._value=n?e:Qt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Fn(e)||Xs(e);e=i?e:mt(e),fs(e,n)&&(this._rawValue=e,this._value=i?e:Qt(e),this.dep.trigger())}}function hs(t){return Wt(t)?t.value:t}const xv={get:(t,e,n)=>e==="__v_raw"?t:hs(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Wt(s)&&!Wt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function qp(t){return Sr(t)?t:new Proxy(t,xv)}class yv{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new id(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Do-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&bt!==this)return Dp(this,!0),!0}get value(){const e=this.dep.track();return Up(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function wv(t,e,n=!1){let i,s;return je(t)?i=t:(i=t.get,s=t.set),new yv(i,s,n)}const _a={},nl=new WeakMap;let Ls;function bv(t,e=!1,n=Ls){if(n){let i=nl.get(n);i||nl.set(n,i=[]),i.push(t)}}function Sv(t,e,n=wt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=w=>s?w:Fn(w)||s===!1||s===0?Oi(w,1):Oi(w);let u,d,f,h,_=!1,v=!1;if(Wt(t)?(d=()=>t.value,_=Fn(t)):Sr(t)?(d=()=>c(t),_=!0):We(t)?(v=!0,_=t.some(w=>Sr(w)||Fn(w)),d=()=>t.map(w=>{if(Wt(w))return w.value;if(Sr(w))return c(w);if(je(w))return l?l(w,2):w()})):je(t)?e?d=l?()=>l(t,2):t:d=()=>{if(f){vs();try{f()}finally{xs()}}const w=Ls;Ls=u;try{return l?l(t,3,[h]):t(h)}finally{Ls=w}}:d=hi,e&&s){const w=d,L=s===!0?1/0:s;d=()=>Oi(w(),L)}const m=Q_(),p=()=>{u.stop(),m&&m.active&&Zu(m.effects,u)};if(r&&e){const w=e;e=(...L)=>{w(...L),p()}}let A=v?new Array(t.length).fill(_a):_a;const E=w=>{if(!(!(u.flags&1)||!u.dirty&&!w))if(e){const L=u.run();if(s||_||(v?L.some((R,U)=>fs(R,A[U])):fs(L,A))){f&&f();const R=Ls;Ls=u;try{const U=[L,A===_a?void 0:v&&A[0]===_a?[]:A,h];l?l(e,3,U):e(...U),A=L}finally{Ls=R}}}else u.run()};return a&&a(E),u=new Rp(d),u.scheduler=o?()=>o(E,!1):E,h=w=>bv(w,!1,u),f=u.onStop=()=>{const w=nl.get(u);if(w){if(l)l(w,4);else for(const L of w)L();nl.delete(u)}},e?i?E(!0):A=u.run():o?o(E.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Oi(t,e=1/0,n){if(e<=0||!St(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Wt(t))Oi(t.value,e,n);else if(We(t))for(let i=0;i<t.length;i++)Oi(t[i],e,n);else if(Qr(t)||br(t))t.forEach(i=>{Oi(i,e,n)});else if(Sp(t)){for(const i in t)Oi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Oi(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ko(t,e,n,i){try{return i?t(...i):t()}catch(s){Cl(s,e,n)}}function _i(t,e,n,i){if(je(t)){const s=Ko(t,e,n,i);return s&&wp(s)&&s.catch(r=>{Cl(r,e,n)}),s}if(We(t)){const s=[];for(let r=0;r<t.length;r++)s.push(_i(t[r],e,n,i));return s}}function Cl(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||wt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}a=a.parent}if(r){vs(),Ko(r,null,10,[t,l,c]),xs();return}}Mv(t,n,s,i,o)}function Mv(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const cn=[];let si=-1;const Mr=[];let Qi=null,_r=0;const jp=Promise.resolve();let il=null;function Zo(t){const e=il||jp;return t?e.then(this?t.bind(this):t):e}function Ev(t){let e=si+1,n=cn.length;for(;e<n;){const i=e+n>>>1,s=cn[i],r=Io(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function ad(t){if(!(t.flags&1)){const e=Io(t),n=cn[cn.length-1];!n||!(t.flags&2)&&e>=Io(n)?cn.push(t):cn.splice(Ev(e),0,t),t.flags|=1,Yp()}}function Yp(){il||(il=jp.then(Zp))}function Tv(t){We(t)?Mr.push(...t):Qi&&t.id===-1?Qi.splice(_r+1,0,t):t.flags&1||(Mr.push(t),t.flags|=1),Yp()}function tf(t,e,n=si+1){for(;n<cn.length;n++){const i=cn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;cn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Kp(t){if(Mr.length){const e=[...new Set(Mr)].sort((n,i)=>Io(n)-Io(i));if(Mr.length=0,Qi){Qi.push(...e);return}for(Qi=e,_r=0;_r<Qi.length;_r++){const n=Qi[_r];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Qi=null,_r=0}}const Io=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Zp(t){try{for(si=0;si<cn.length;si++){const e=cn[si];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ko(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;si<cn.length;si++){const e=cn[si];e&&(e.flags&=-2)}si=-1,cn.length=0,Kp(),il=null,(cn.length||Mr.length)&&Zp()}}let An=null,Qp=null;function sl(t){const e=An;return An=t,Qp=t&&t.type.__scopeId||null,e}function vo(t,e=An,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&ff(-1);const r=sl(e);let o;try{o=t(...s)}finally{sl(r),i._d&&ff(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Li(t,e){if(An===null)return t;const n=Ll(An),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=wt]=e[s];r&&(je(r)&&(r={mounted:r,updated:r}),r.deep&&Oi(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Ss(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(vs(),_i(l,n,8,[t.el,a,t,e]),xs())}}const Av=Symbol("_vte"),Cv=t=>t.__isTeleport;function ld(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ld(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Jp(t,e){return je(t)?nn({name:t.name},e,{setup:t}):t}function em(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function rl(t,e,n,i,s=!1){if(We(t)){t.forEach((_,v)=>rl(_,e&&(We(e)?e[v]:e),n,i,s));return}if(To(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&rl(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?Ll(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===wt?a.refs={}:a.refs,d=a.setupState,f=mt(d),h=d===wt?()=>!1:_=>gt(f,_);if(c!=null&&c!==l&&(Ft(c)?(u[c]=null,h(c)&&(d[c]=null)):Wt(c)&&(c.value=null)),je(l))Ko(l,a,12,[o,u]);else{const _=Ft(l),v=Wt(l);if(_||v){const m=()=>{if(t.f){const p=_?h(l)?d[l]:u[l]:l.value;s?We(p)&&Zu(p,r):We(p)?p.includes(r)||p.push(r):_?(u[l]=[r],h(l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else _?(u[l]=o,h(l)&&(d[l]=o)):v&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Mn(m,n)):m()}}}Tl().requestIdleCallback;Tl().cancelIdleCallback;const To=t=>!!t.type.__asyncLoader,tm=t=>t.type.__isKeepAlive;function Rv(t,e){nm(t,"a",e)}function Pv(t,e){nm(t,"da",e)}function nm(t,e,n=Jt){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Rl(e,i,n),n){let s=n.parent;for(;s&&s.parent;)tm(s.parent.vnode)&&Dv(i,e,n,s),s=s.parent}}function Dv(t,e,n,i){const s=Rl(e,t,i,!0);ud(()=>{Zu(i[e],s)},n)}function Rl(t,e,n=Jt,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{vs();const a=Qo(n),l=_i(e,n,t,o);return a(),xs(),l});return i?s.unshift(r):s.push(r),r}}const Gi=t=>(e,n=Jt)=>{(!Oo||t==="sp")&&Rl(t,(...i)=>e(...i),n)},Lv=Gi("bm"),Jr=Gi("m"),Iv=Gi("bu"),Uv=Gi("u"),cd=Gi("bum"),ud=Gi("um"),Ov=Gi("sp"),Nv=Gi("rtg"),Fv=Gi("rtc");function Bv(t,e=Jt){Rl("ec",t,e)}const kv="components";function zv(t,e){return Vv(kv,t,!0,e)||t}const Hv=Symbol.for("v-ndc");function Vv(t,e,n=!0,i=!1){const s=An||Jt;if(s){const r=s.type;{const a=C0(r,!1);if(a&&(a===e||a===Bn(e)||a===El(Bn(e))))return r}const o=nf(s[t]||r[t],e)||nf(s.appContext[t],e);return!o&&i?r:o}}function nf(t,e){return t&&(t[e]||t[Bn(e)]||t[El(Bn(e))])}function Ni(t,e,n,i){let s;const r=n,o=We(t);if(o||Ft(t)){const a=o&&Sr(t);let l=!1;a&&(l=!Fn(t),t=Al(t)),s=new Array(t.length);for(let c=0,u=t.length;c<u;c++)s[c]=e(l?Qt(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(St(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,r)}}else s=[];return s}const qc=t=>t?Mm(t)?Ll(t):qc(t.parent):null,Ao=nn(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>qc(t.parent),$root:t=>qc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>sm(t),$forceUpdate:t=>t.f||(t.f=()=>{ad(t.update)}),$nextTick:t=>t.n||(t.n=Zo.bind(t.proxy)),$watch:t=>c0.bind(t)}),Ql=(t,e)=>t!==wt&&!t.__isScriptSetup&&gt(t,e),Gv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Ql(i,e))return o[e]=1,i[e];if(s!==wt&&gt(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&gt(c,e))return o[e]=3,r[e];if(n!==wt&&gt(n,e))return o[e]=4,n[e];jc&&(o[e]=0)}}const u=Ao[e];let d,f;if(u)return e==="$attrs"&&Zt(t.attrs,"get",""),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==wt&&gt(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,gt(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Ql(s,e)?(s[e]=n,!0):i!==wt&&gt(i,e)?(i[e]=n,!0):gt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==wt&&gt(t,o)||Ql(e,o)||(a=r[0])&&gt(a,o)||gt(i,o)||gt(Ao,o)||gt(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:gt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function sf(t){return We(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let jc=!0;function Wv(t){const e=sm(t),n=t.proxy,i=t.ctx;jc=!1,e.beforeCreate&&rf(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:_,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:A,destroyed:E,unmounted:w,render:L,renderTracked:R,renderTriggered:U,errorCaptured:I,serverPrefetch:y,expose:b,inheritAttrs:P,components:Q,directives:$,filters:j}=e;if(c&&Xv(c,i,null),o)for(const ge in o){const q=o[ge];je(q)&&(i[ge]=q.bind(n))}if(s){const ge=s.call(n,n);St(ge)&&(t.data=Yo(ge))}if(jc=!0,r)for(const ge in r){const q=r[ge],Ee=je(q)?q.bind(n,n):je(q.get)?q.get.bind(n,n):hi,Ae=!je(q)&&je(q.set)?q.set.bind(n):hi,Oe=en({get:Ee,set:Ae});Object.defineProperty(i,ge,{enumerable:!0,configurable:!0,get:()=>Oe.value,set:ke=>Oe.value=ke})}if(a)for(const ge in a)im(a[ge],i,n,ge);if(l){const ge=je(l)?l.call(n):l;Reflect.ownKeys(ge).forEach(q=>{Wa(q,ge[q])})}u&&rf(u,t,"c");function J(ge,q){We(q)?q.forEach(Ee=>ge(Ee.bind(n))):q&&ge(q.bind(n))}if(J(Lv,d),J(Jr,f),J(Iv,h),J(Uv,_),J(Rv,v),J(Pv,m),J(Bv,I),J(Fv,R),J(Nv,U),J(cd,A),J(ud,w),J(Ov,y),We(b))if(b.length){const ge=t.exposed||(t.exposed={});b.forEach(q=>{Object.defineProperty(ge,q,{get:()=>n[q],set:Ee=>n[q]=Ee})})}else t.exposed||(t.exposed={});L&&t.render===hi&&(t.render=L),P!=null&&(t.inheritAttrs=P),Q&&(t.components=Q),$&&(t.directives=$),y&&em(t)}function Xv(t,e,n=hi){We(t)&&(t=Yc(t));for(const i in t){const s=t[i];let r;St(s)?"default"in s?r=ki(s.from||i,s.default,!0):r=ki(s.from||i):r=ki(s),Wt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function rf(t,e,n){_i(We(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function im(t,e,n,i){let s=i.includes(".")?vm(n,i):()=>n[i];if(Ft(t)){const r=e[t];je(r)&&Qn(s,r)}else if(je(t))Qn(s,t.bind(n));else if(St(t))if(We(t))t.forEach(r=>im(r,e,n,i));else{const r=je(t.handler)?t.handler.bind(n):e[t.handler];je(r)&&Qn(s,r,t)}}function sm(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>ol(l,c,o,!0)),ol(l,e,o)),St(e)&&r.set(e,l),l}function ol(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&ol(t,r,n,!0),s&&s.forEach(o=>ol(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=$v[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const $v={data:of,props:af,emits:af,methods:xo,computed:xo,beforeCreate:on,created:on,beforeMount:on,mounted:on,beforeUpdate:on,updated:on,beforeDestroy:on,beforeUnmount:on,destroyed:on,unmounted:on,activated:on,deactivated:on,errorCaptured:on,serverPrefetch:on,components:xo,directives:xo,watch:jv,provide:of,inject:qv};function of(t,e){return e?t?function(){return nn(je(t)?t.call(this,this):t,je(e)?e.call(this,this):e)}:e:t}function qv(t,e){return xo(Yc(t),Yc(e))}function Yc(t){if(We(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function on(t,e){return t?[...new Set([].concat(t,e))]:e}function xo(t,e){return t?nn(Object.create(null),t,e):e}function af(t,e){return t?We(t)&&We(e)?[...new Set([...t,...e])]:nn(Object.create(null),sf(t),sf(e??{})):e}function jv(t,e){if(!t)return e;if(!e)return t;const n=nn(Object.create(null),t);for(const i in e)n[i]=on(t[i],e[i]);return n}function rm(){return{app:null,config:{isNativeTag:k_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yv=0;function Kv(t,e){return function(i,s=null){je(i)||(i=nn({},i)),s!=null&&!St(s)&&(s=null);const r=rm(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Yv++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:P0,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&je(u.install)?(o.add(u),u.install(c,...d)):je(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||kt(i,s);return h.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),t(h,u,f),l=!0,c._container=u,u.__vue_app__=c,Ll(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(_i(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=Er;Er=c;try{return u()}finally{Er=d}}};return c}}let Er=null;function Wa(t,e){if(Jt){let n=Jt.provides;const i=Jt.parent&&Jt.parent.provides;i===n&&(n=Jt.provides=Object.create(i)),n[t]=e}}function ki(t,e,n=!1){const i=Jt||An;if(i||Er){const s=Er?Er._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&je(e)?e.call(i&&i.proxy):e}}const om={},am=()=>Object.create(om),lm=t=>Object.getPrototypeOf(t)===om;function Zv(t,e,n,i=!1){const s={},r=am();t.propsDefaults=Object.create(null),cm(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Gp(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function Qv(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=mt(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Pl(t.emitsOptions,f))continue;const h=e[f];if(l)if(gt(r,f))h!==r[f]&&(r[f]=h,c=!0);else{const _=Bn(f);s[_]=Kc(l,a,_,h,t,!1)}else h!==r[f]&&(r[f]=h,c=!0)}}}else{cm(t,e,s,r)&&(c=!0);let u;for(const d in a)(!e||!gt(e,d)&&((u=Zs(d))===d||!gt(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=Kc(l,a,d,void 0,t,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!gt(e,d))&&(delete r[d],c=!0)}c&&Ui(t.attrs,"set","")}function cm(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(So(l))continue;const c=e[l];let u;s&&gt(s,u=Bn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Pl(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=mt(n),c=a||wt;for(let u=0;u<r.length;u++){const d=r[u];n[d]=Kc(s,l,d,c[d],t,!gt(c,d))}}return o}function Kc(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=gt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&je(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=Qo(s);i=c[n]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Zs(n))&&(i=!0))}return i}const Jv=new WeakMap;function um(t,e,n=!1){const i=n?Jv:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!je(t)){const u=d=>{l=!0;const[f,h]=um(d,e,!0);nn(o,f),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return St(t)&&i.set(t,wr),wr;if(We(r))for(let u=0;u<r.length;u++){const d=Bn(r[u]);lf(d)&&(o[d]=wt)}else if(r)for(const u in r){const d=Bn(u);if(lf(d)){const f=r[u],h=o[d]=We(f)||je(f)?{type:f}:nn({},f),_=h.type;let v=!1,m=!0;if(We(_))for(let p=0;p<_.length;++p){const A=_[p],E=je(A)&&A.name;if(E==="Boolean"){v=!0;break}else E==="String"&&(m=!1)}else v=je(_)&&_.name==="Boolean";h[0]=v,h[1]=m,(v||gt(h,"default"))&&a.push(d)}}const c=[o,a];return St(t)&&i.set(t,c),c}function lf(t){return t[0]!=="$"&&!So(t)}const dm=t=>t[0]==="_"||t==="$stable",dd=t=>We(t)?t.map(ci):[ci(t)],e0=(t,e,n)=>{if(e._n)return e;const i=vo((...s)=>dd(e(...s)),n);return i._c=!1,i},fm=(t,e,n)=>{const i=t._ctx;for(const s in t){if(dm(s))continue;const r=t[s];if(je(r))e[s]=e0(s,r,i);else if(r!=null){const o=dd(r);e[s]=()=>o}}},hm=(t,e)=>{const n=dd(e);t.slots.default=()=>n},pm=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},t0=(t,e,n)=>{const i=t.slots=am();if(t.vnode.shapeFlag&32){const s=e._;s?(pm(i,e,n),n&&Mp(i,"_",s,!0)):fm(e,i)}else e&&hm(t,e)},n0=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=wt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:pm(s,e,n):(r=!e.$stable,fm(e,s)),o=e}else e&&(hm(t,e),o={default:1});if(r)for(const a in s)!dm(a)&&o[a]==null&&delete s[a]},Mn=g0;function i0(t){return s0(t)}function s0(t,e){const n=Tl();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=hi,insertStaticContent:_}=t,v=(T,g,k,G=null,se=null,W=null,we=void 0,ee=null,de=!!g.dynamicChildren)=>{if(T===g)return;T&&!ao(T,g)&&(G=B(T),ke(T,se,W,!0),T=null),g.patchFlag===-2&&(de=!1,g.dynamicChildren=null);const{type:_e,ref:De,shapeFlag:S}=g;switch(_e){case Dl:m(T,g,k,G);break;case $s:p(T,g,k,G);break;case Xa:T==null&&A(g,k,G,we);break;case Gt:Q(T,g,k,G,se,W,we,ee,de);break;default:S&1?L(T,g,k,G,se,W,we,ee,de):S&6?$(T,g,k,G,se,W,we,ee,de):(S&64||S&128)&&_e.process(T,g,k,G,se,W,we,ee,de,xe)}De!=null&&se&&rl(De,T&&T.ref,W,g||T,!g)},m=(T,g,k,G)=>{if(T==null)i(g.el=a(g.children),k,G);else{const se=g.el=T.el;g.children!==T.children&&c(se,g.children)}},p=(T,g,k,G)=>{T==null?i(g.el=l(g.children||""),k,G):g.el=T.el},A=(T,g,k,G)=>{[T.el,T.anchor]=_(T.children,g,k,G,T.el,T.anchor)},E=({el:T,anchor:g},k,G)=>{let se;for(;T&&T!==g;)se=f(T),i(T,k,G),T=se;i(g,k,G)},w=({el:T,anchor:g})=>{let k;for(;T&&T!==g;)k=f(T),s(T),T=k;s(g)},L=(T,g,k,G,se,W,we,ee,de)=>{g.type==="svg"?we="svg":g.type==="math"&&(we="mathml"),T==null?R(g,k,G,se,W,we,ee,de):y(T,g,se,W,we,ee,de)},R=(T,g,k,G,se,W,we,ee)=>{let de,_e;const{props:De,shapeFlag:S,transition:x,dirs:F}=T;if(de=T.el=o(T.type,W,De&&De.is,De),S&8?u(de,T.children):S&16&&I(T.children,de,null,G,se,Jl(T,W),we,ee),F&&Ss(T,null,G,"created"),U(de,T,T.scopeId,we,G),De){for(const ce in De)ce!=="value"&&!So(ce)&&r(de,ce,null,De[ce],W,G);"value"in De&&r(de,"value",null,De.value,W),(_e=De.onVnodeBeforeMount)&&ni(_e,G,T)}F&&Ss(T,null,G,"beforeMount");const Y=r0(se,x);Y&&x.beforeEnter(de),i(de,g,k),((_e=De&&De.onVnodeMounted)||Y||F)&&Mn(()=>{_e&&ni(_e,G,T),Y&&x.enter(de),F&&Ss(T,null,G,"mounted")},se)},U=(T,g,k,G,se)=>{if(k&&h(T,k),G)for(let W=0;W<G.length;W++)h(T,G[W]);if(se){let W=se.subTree;if(g===W||ym(W.type)&&(W.ssContent===g||W.ssFallback===g)){const we=se.vnode;U(T,we,we.scopeId,we.slotScopeIds,se.parent)}}},I=(T,g,k,G,se,W,we,ee,de=0)=>{for(let _e=de;_e<T.length;_e++){const De=T[_e]=ee?Ji(T[_e]):ci(T[_e]);v(null,De,g,k,G,se,W,we,ee)}},y=(T,g,k,G,se,W,we)=>{const ee=g.el=T.el;let{patchFlag:de,dynamicChildren:_e,dirs:De}=g;de|=T.patchFlag&16;const S=T.props||wt,x=g.props||wt;let F;if(k&&Ms(k,!1),(F=x.onVnodeBeforeUpdate)&&ni(F,k,g,T),De&&Ss(g,T,k,"beforeUpdate"),k&&Ms(k,!0),(S.innerHTML&&x.innerHTML==null||S.textContent&&x.textContent==null)&&u(ee,""),_e?b(T.dynamicChildren,_e,ee,k,G,Jl(g,se),W):we||q(T,g,ee,null,k,G,Jl(g,se),W,!1),de>0){if(de&16)P(ee,S,x,k,se);else if(de&2&&S.class!==x.class&&r(ee,"class",null,x.class,se),de&4&&r(ee,"style",S.style,x.style,se),de&8){const Y=g.dynamicProps;for(let ce=0;ce<Y.length;ce++){const K=Y[ce],Le=S[K],be=x[K];(be!==Le||K==="value")&&r(ee,K,Le,be,se,k)}}de&1&&T.children!==g.children&&u(ee,g.children)}else!we&&_e==null&&P(ee,S,x,k,se);((F=x.onVnodeUpdated)||De)&&Mn(()=>{F&&ni(F,k,g,T),De&&Ss(g,T,k,"updated")},G)},b=(T,g,k,G,se,W,we)=>{for(let ee=0;ee<g.length;ee++){const de=T[ee],_e=g[ee],De=de.el&&(de.type===Gt||!ao(de,_e)||de.shapeFlag&70)?d(de.el):k;v(de,_e,De,null,G,se,W,we,!0)}},P=(T,g,k,G,se)=>{if(g!==k){if(g!==wt)for(const W in g)!So(W)&&!(W in k)&&r(T,W,g[W],null,se,G);for(const W in k){if(So(W))continue;const we=k[W],ee=g[W];we!==ee&&W!=="value"&&r(T,W,ee,we,se,G)}"value"in k&&r(T,"value",g.value,k.value,se)}},Q=(T,g,k,G,se,W,we,ee,de)=>{const _e=g.el=T?T.el:a(""),De=g.anchor=T?T.anchor:a("");let{patchFlag:S,dynamicChildren:x,slotScopeIds:F}=g;F&&(ee=ee?ee.concat(F):F),T==null?(i(_e,k,G),i(De,k,G),I(g.children||[],k,De,se,W,we,ee,de)):S>0&&S&64&&x&&T.dynamicChildren?(b(T.dynamicChildren,x,k,se,W,we,ee),(g.key!=null||se&&g===se.subTree)&&mm(T,g,!0)):q(T,g,k,De,se,W,we,ee,de)},$=(T,g,k,G,se,W,we,ee,de)=>{g.slotScopeIds=ee,T==null?g.shapeFlag&512?se.ctx.activate(g,k,G,we,de):j(g,k,G,se,W,we,de):pe(T,g,de)},j=(T,g,k,G,se,W,we)=>{const ee=T.component=S0(T,G,se);if(tm(T)&&(ee.ctx.renderer=xe),M0(ee,!1,we),ee.asyncDep){if(se&&se.registerDep(ee,J,we),!T.el){const de=ee.subTree=kt($s);p(null,de,g,k)}}else J(ee,T,g,k,se,W,we)},pe=(T,g,k)=>{const G=g.component=T.component;if(p0(T,g,k))if(G.asyncDep&&!G.asyncResolved){ge(G,g,k);return}else G.next=g,G.update();else g.el=T.el,G.vnode=g},J=(T,g,k,G,se,W,we)=>{const ee=()=>{if(T.isMounted){let{next:S,bu:x,u:F,parent:Y,vnode:ce}=T;{const Ce=gm(T);if(Ce){S&&(S.el=ce.el,ge(T,S,we)),Ce.asyncDep.then(()=>{T.isUnmounted||ee()});return}}let K=S,Le;Ms(T,!1),S?(S.el=ce.el,ge(T,S,we)):S=ce,x&&Ga(x),(Le=S.props&&S.props.onVnodeBeforeUpdate)&&ni(Le,Y,S,ce),Ms(T,!0);const be=uf(T),Ie=T.subTree;T.subTree=be,v(Ie,be,d(Ie.el),B(Ie),T,se,W),S.el=be.el,K===null&&m0(T,be.el),F&&Mn(F,se),(Le=S.props&&S.props.onVnodeUpdated)&&Mn(()=>ni(Le,Y,S,ce),se)}else{let S;const{el:x,props:F}=g,{bm:Y,m:ce,parent:K,root:Le,type:be}=T,Ie=To(g);Ms(T,!1),Y&&Ga(Y),!Ie&&(S=F&&F.onVnodeBeforeMount)&&ni(S,K,g),Ms(T,!0);{Le.ce&&Le.ce._injectChildStyle(be);const Ce=T.subTree=uf(T);v(null,Ce,k,G,T,se,W),g.el=Ce.el}if(ce&&Mn(ce,se),!Ie&&(S=F&&F.onVnodeMounted)){const Ce=g;Mn(()=>ni(S,K,Ce),se)}(g.shapeFlag&256||K&&To(K.vnode)&&K.vnode.shapeFlag&256)&&T.a&&Mn(T.a,se),T.isMounted=!0,g=k=G=null}};T.scope.on();const de=T.effect=new Rp(ee);T.scope.off();const _e=T.update=de.run.bind(de),De=T.job=de.runIfDirty.bind(de);De.i=T,De.id=T.uid,de.scheduler=()=>ad(De),Ms(T,!0),_e()},ge=(T,g,k)=>{g.component=T;const G=T.vnode.props;T.vnode=g,T.next=null,Qv(T,g.props,G,k),n0(T,g.children,k),vs(),tf(T),xs()},q=(T,g,k,G,se,W,we,ee,de=!1)=>{const _e=T&&T.children,De=T?T.shapeFlag:0,S=g.children,{patchFlag:x,shapeFlag:F}=g;if(x>0){if(x&128){Ae(_e,S,k,G,se,W,we,ee,de);return}else if(x&256){Ee(_e,S,k,G,se,W,we,ee,de);return}}F&8?(De&16&&Te(_e,se,W),S!==_e&&u(k,S)):De&16?F&16?Ae(_e,S,k,G,se,W,we,ee,de):Te(_e,se,W,!0):(De&8&&u(k,""),F&16&&I(S,k,G,se,W,we,ee,de))},Ee=(T,g,k,G,se,W,we,ee,de)=>{T=T||wr,g=g||wr;const _e=T.length,De=g.length,S=Math.min(_e,De);let x;for(x=0;x<S;x++){const F=g[x]=de?Ji(g[x]):ci(g[x]);v(T[x],F,k,null,se,W,we,ee,de)}_e>De?Te(T,se,W,!0,!1,S):I(g,k,G,se,W,we,ee,de,S)},Ae=(T,g,k,G,se,W,we,ee,de)=>{let _e=0;const De=g.length;let S=T.length-1,x=De-1;for(;_e<=S&&_e<=x;){const F=T[_e],Y=g[_e]=de?Ji(g[_e]):ci(g[_e]);if(ao(F,Y))v(F,Y,k,null,se,W,we,ee,de);else break;_e++}for(;_e<=S&&_e<=x;){const F=T[S],Y=g[x]=de?Ji(g[x]):ci(g[x]);if(ao(F,Y))v(F,Y,k,null,se,W,we,ee,de);else break;S--,x--}if(_e>S){if(_e<=x){const F=x+1,Y=F<De?g[F].el:G;for(;_e<=x;)v(null,g[_e]=de?Ji(g[_e]):ci(g[_e]),k,Y,se,W,we,ee,de),_e++}}else if(_e>x)for(;_e<=S;)ke(T[_e],se,W,!0),_e++;else{const F=_e,Y=_e,ce=new Map;for(_e=Y;_e<=x;_e++){const O=g[_e]=de?Ji(g[_e]):ci(g[_e]);O.key!=null&&ce.set(O.key,_e)}let K,Le=0;const be=x-Y+1;let Ie=!1,Ce=0;const ye=new Array(be);for(_e=0;_e<be;_e++)ye[_e]=0;for(_e=F;_e<=S;_e++){const O=T[_e];if(Le>=be){ke(O,se,W,!0);continue}let C;if(O.key!=null)C=ce.get(O.key);else for(K=Y;K<=x;K++)if(ye[K-Y]===0&&ao(O,g[K])){C=K;break}C===void 0?ke(O,se,W,!0):(ye[C-Y]=_e+1,C>=Ce?Ce=C:Ie=!0,v(O,g[C],k,null,se,W,we,ee,de),Le++)}const Re=Ie?o0(ye):wr;for(K=Re.length-1,_e=be-1;_e>=0;_e--){const O=Y+_e,C=g[O],z=O+1<De?g[O+1].el:G;ye[_e]===0?v(null,C,k,z,se,W,we,ee,de):Ie&&(K<0||_e!==Re[K]?Oe(C,k,z,2):K--)}}},Oe=(T,g,k,G,se=null)=>{const{el:W,type:we,transition:ee,children:de,shapeFlag:_e}=T;if(_e&6){Oe(T.component.subTree,g,k,G);return}if(_e&128){T.suspense.move(g,k,G);return}if(_e&64){we.move(T,g,k,xe);return}if(we===Gt){i(W,g,k);for(let S=0;S<de.length;S++)Oe(de[S],g,k,G);i(T.anchor,g,k);return}if(we===Xa){E(T,g,k);return}if(G!==2&&_e&1&&ee)if(G===0)ee.beforeEnter(W),i(W,g,k),Mn(()=>ee.enter(W),se);else{const{leave:S,delayLeave:x,afterLeave:F}=ee,Y=()=>i(W,g,k),ce=()=>{S(W,()=>{Y(),F&&F()})};x?x(W,Y,ce):ce()}else i(W,g,k)},ke=(T,g,k,G=!1,se=!1)=>{const{type:W,props:we,ref:ee,children:de,dynamicChildren:_e,shapeFlag:De,patchFlag:S,dirs:x,cacheIndex:F}=T;if(S===-2&&(se=!1),ee!=null&&rl(ee,null,k,T,!0),F!=null&&(g.renderCache[F]=void 0),De&256){g.ctx.deactivate(T);return}const Y=De&1&&x,ce=!To(T);let K;if(ce&&(K=we&&we.onVnodeBeforeUnmount)&&ni(K,g,T),De&6)le(T.component,k,G);else{if(De&128){T.suspense.unmount(k,G);return}Y&&Ss(T,null,g,"beforeUnmount"),De&64?T.type.remove(T,g,k,xe,G):_e&&!_e.hasOnce&&(W!==Gt||S>0&&S&64)?Te(_e,g,k,!1,!0):(W===Gt&&S&384||!se&&De&16)&&Te(de,g,k),G&&at(T)}(ce&&(K=we&&we.onVnodeUnmounted)||Y)&&Mn(()=>{K&&ni(K,g,T),Y&&Ss(T,null,g,"unmounted")},k)},at=T=>{const{type:g,el:k,anchor:G,transition:se}=T;if(g===Gt){et(k,G);return}if(g===Xa){w(T);return}const W=()=>{s(k),se&&!se.persisted&&se.afterLeave&&se.afterLeave()};if(T.shapeFlag&1&&se&&!se.persisted){const{leave:we,delayLeave:ee}=se,de=()=>we(k,W);ee?ee(T.el,W,de):de()}else W()},et=(T,g)=>{let k;for(;T!==g;)k=f(T),s(T),T=k;s(g)},le=(T,g,k)=>{const{bum:G,scope:se,job:W,subTree:we,um:ee,m:de,a:_e}=T;cf(de),cf(_e),G&&Ga(G),se.stop(),W&&(W.flags|=8,ke(we,T,g,k)),ee&&Mn(ee,g),Mn(()=>{T.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Te=(T,g,k,G=!1,se=!1,W=0)=>{for(let we=W;we<T.length;we++)ke(T[we],g,k,G,se)},B=T=>{if(T.shapeFlag&6)return B(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const g=f(T.anchor||T.el),k=g&&g[Av];return k?f(k):g};let he=!1;const ue=(T,g,k)=>{T==null?g._vnode&&ke(g._vnode,null,null,!0):v(g._vnode||null,T,g,null,null,null,k),g._vnode=T,he||(he=!0,tf(),Kp(),he=!1)},xe={p:v,um:ke,m:Oe,r:at,mt:j,mc:I,pc:q,pbc:b,n:B,o:t};return{render:ue,hydrate:void 0,createApp:Kv(ue)}}function Jl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ms({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function r0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function mm(t,e,n=!1){const i=t.children,s=e.children;if(We(i)&&We(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ji(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&mm(o,a)),a.type===Dl&&(a.el=o.el)}}function o0(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function gm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:gm(e)}function cf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const a0=Symbol.for("v-scx"),l0=()=>ki(a0);function Qn(t,e,n){return _m(t,e,n)}function _m(t,e,n=wt){const{immediate:i,deep:s,flush:r,once:o}=n,a=nn({},n),l=e&&i||!e&&r!=="post";let c;if(Oo){if(r==="sync"){const h=l0();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=hi,h.resume=hi,h.pause=hi,h}}const u=Jt;a.call=(h,_,v)=>_i(h,u,_,v);let d=!1;r==="post"?a.scheduler=h=>{Mn(h,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(h,_)=>{_?h():ad(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=Sv(t,e,a);return Oo&&(c?c.push(f):l&&f()),f}function c0(t,e,n){const i=this.proxy,s=Ft(t)?t.includes(".")?vm(i,t):()=>i[t]:t.bind(i,i);let r;je(e)?r=e:(r=e.handler,n=e);const o=Qo(this),a=_m(s,r.bind(i),n);return o(),a}function vm(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const u0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Bn(e)}Modifiers`]||t[`${Zs(e)}Modifiers`];function d0(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||wt;let s=n;const r=e.startsWith("update:"),o=r&&u0(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>Ft(u)?u.trim():u)),o.number&&(s=n.map(tl)));let a,l=i[a=ql(e)]||i[a=ql(Bn(e))];!l&&r&&(l=i[a=ql(Zs(e))]),l&&_i(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,_i(c,t,6,s)}}function xm(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!je(t)){const l=c=>{const u=xm(c,e,!0);u&&(a=!0,nn(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(St(t)&&i.set(t,null),null):(We(r)?r.forEach(l=>o[l]=null):nn(o,r),St(t)&&i.set(t,o),o)}function Pl(t,e){return!t||!Sl(e)?!1:(e=e.slice(2).replace(/Once$/,""),gt(t,e[0].toLowerCase()+e.slice(1))||gt(t,Zs(e))||gt(t,e))}function uf(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:_,inheritAttrs:v}=t,m=sl(t);let p,A;try{if(n.shapeFlag&4){const w=s||i,L=w;p=ci(c.call(L,w,u,d,h,f,_)),A=a}else{const w=e;p=ci(w.length>1?w(d,{attrs:a,slots:o,emit:l}):w(d,null)),A=e.props?a:f0(a)}}catch(w){Co.length=0,Cl(w,t,1),p=kt($s)}let E=p;if(A&&v!==!1){const w=Object.keys(A),{shapeFlag:L}=E;w.length&&L&7&&(r&&w.some(Ku)&&(A=h0(A,r)),E=Hr(E,A,!1,!0))}return n.dirs&&(E=Hr(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&ld(E,n.transition),p=E,sl(m),p}const f0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Sl(n))&&((e||(e={}))[n]=t[n]);return e},h0=(t,e)=>{const n={};for(const i in t)(!Ku(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function p0(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?df(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==i[f]&&!Pl(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?df(i,o,c):!0:!!o;return!1}function df(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Pl(n,r))return!0}return!1}function m0({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const ym=t=>t.__isSuspense;function g0(t,e){e&&e.pendingBranch?We(t)?e.effects.push(...t):e.effects.push(t):Tv(t)}const Gt=Symbol.for("v-fgt"),Dl=Symbol.for("v-txt"),$s=Symbol.for("v-cmt"),Xa=Symbol.for("v-stc"),Co=[];let Cn=null;function ot(t=!1){Co.push(Cn=t?null:[])}function _0(){Co.pop(),Cn=Co[Co.length-1]||null}let Uo=1;function ff(t,e=!1){Uo+=t,t<0&&Cn&&e&&(Cn.hasOnce=!0)}function wm(t){return t.dynamicChildren=Uo>0?Cn||wr:null,_0(),Uo>0&&Cn&&Cn.push(t),t}function ft(t,e,n,i,s,r){return wm(N(t,e,n,i,s,r,!0))}function yo(t,e,n,i,s){return wm(kt(t,e,n,i,s,!0))}function al(t){return t?t.__v_isVNode===!0:!1}function ao(t,e){return t.type===e.type&&t.key===e.key}const bm=({key:t})=>t??null,$a=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ft(t)||Wt(t)||je(t)?{i:An,r:t,k:e,f:!!n}:t:null);function N(t,e=null,n=null,i=0,s=null,r=t===Gt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&bm(e),ref:e&&$a(e),scopeId:Qp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:An};return a?(fd(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Ft(n)?8:16),Uo>0&&!o&&Cn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Cn.push(l),l}const kt=v0;function v0(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===Hv)&&(t=$s),al(t)){const a=Hr(t,e,!0);return n&&fd(a,n),Uo>0&&!r&&Cn&&(a.shapeFlag&6?Cn[Cn.indexOf(t)]=a:Cn.push(a)),a.patchFlag=-2,a}if(R0(t)&&(t=t.__vccOpts),e){e=x0(e);let{class:a,style:l}=e;a&&!Ft(a)&&(e.class=$t(a)),St(l)&&(od(l)&&!We(l)&&(l=nn({},l)),e.style=qn(l))}const o=Ft(t)?1:ym(t)?128:Cv(t)?64:St(t)?4:je(t)?2:0;return N(t,e,n,i,s,o,r,!0)}function x0(t){return t?od(t)||lm(t)?nn({},t):t:null}function Hr(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?y0(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&bm(c),ref:e&&e.ref?n&&r?We(r)?r.concat($a(e)):[r,$a(e)]:$a(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Gt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Hr(t.ssContent),ssFallback:t.ssFallback&&Hr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&ld(u,l.clone(u)),u}function wo(t=" ",e=0){return kt(Dl,null,t,e)}function Sm(t,e){const n=kt(Xa,null,t);return n.staticCount=e,n}function $n(t="",e=!1){return e?(ot(),yo($s,null,t)):kt($s,null,t)}function ci(t){return t==null||typeof t=="boolean"?kt($s):We(t)?kt(Gt,null,t.slice()):al(t)?Ji(t):kt(Dl,null,String(t))}function Ji(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Hr(t)}function fd(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(We(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),fd(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!lm(e)?e._ctx=An:s===3&&An&&(An.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else je(e)?(e={default:e,_ctx:An},n=32):(e=String(e),i&64?(n=16,e=[wo(e)]):n=8);t.children=e,t.shapeFlag|=n}function y0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=$t([e.class,i.class]));else if(s==="style")e.style=qn([e.style,i.style]);else if(Sl(s)){const r=e[s],o=i[s];o&&r!==o&&!(We(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function ni(t,e,n,i=null){_i(t,e,7,[n,i])}const w0=rm();let b0=0;function S0(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||w0,r={uid:b0++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Cp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:um(i,s),emitsOptions:xm(i,s),emit:null,emitted:null,propsDefaults:wt,inheritAttrs:i.inheritAttrs,ctx:wt,data:wt,props:wt,attrs:wt,slots:wt,refs:wt,setupState:wt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=d0.bind(null,r),t.ce&&t.ce(r),r}let Jt=null,ll,Zc;{const t=Tl(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ll=e("__VUE_INSTANCE_SETTERS__",n=>Jt=n),Zc=e("__VUE_SSR_SETTERS__",n=>Oo=n)}const Qo=t=>{const e=Jt;return ll(t),t.scope.on(),()=>{t.scope.off(),ll(e)}},hf=()=>{Jt&&Jt.scope.off(),ll(null)};function Mm(t){return t.vnode.shapeFlag&4}let Oo=!1;function M0(t,e=!1,n=!1){e&&Zc(e);const{props:i,children:s}=t.vnode,r=Mm(t);Zv(t,i,r,e),t0(t,s,n);const o=r?E0(t,e):void 0;return e&&Zc(!1),o}function E0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Gv);const{setup:i}=n;if(i){vs();const s=t.setupContext=i.length>1?A0(t):null,r=Qo(t),o=Ko(i,t,0,[t.props,s]),a=wp(o);if(xs(),r(),(a||t.sp)&&!To(t)&&em(t),a){if(o.then(hf,hf),e)return o.then(l=>{pf(t,l)}).catch(l=>{Cl(l,t,0)});t.asyncDep=o}else pf(t,o)}else Em(t)}function pf(t,e,n){je(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:St(e)&&(t.setupState=qp(e)),Em(t)}function Em(t,e,n){const i=t.type;t.render||(t.render=i.render||hi);{const s=Qo(t);vs();try{Wv(t)}finally{xs(),s()}}}const T0={get(t,e){return Zt(t,"get",""),t[e]}};function A0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,T0),slots:t.slots,emit:t.emit,expose:e}}function Ll(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(qp(Xp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ao)return Ao[n](t)},has(e,n){return n in e||n in Ao}})):t.proxy}function C0(t,e=!0){return je(t)?t.displayName||t.name:t.name||e&&t.__name}function R0(t){return je(t)&&"__vccOpts"in t}const en=(t,e)=>wv(t,e,Oo);function Tm(t,e,n){const i=arguments.length;return i===2?St(e)&&!We(e)?al(e)?kt(t,null,[e]):kt(t,e):kt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&al(n)&&(n=[n]),kt(t,e,n))}const P0="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qc;const mf=typeof window<"u"&&window.trustedTypes;if(mf)try{Qc=mf.createPolicy("vue",{createHTML:t=>t})}catch{}const Am=Qc?t=>Qc.createHTML(t):t=>t,D0="http://www.w3.org/2000/svg",L0="http://www.w3.org/1998/Math/MathML",Di=typeof document<"u"?document:null,gf=Di&&Di.createElement("template"),I0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Di.createElementNS(D0,t):e==="mathml"?Di.createElementNS(L0,t):n?Di.createElement(t,{is:n}):Di.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Di.createTextNode(t),createComment:t=>Di.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Di.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{gf.innerHTML=Am(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=gf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},U0=Symbol("_vtc");function O0(t,e,n){const i=t[U0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const cl=Symbol("_vod"),Cm=Symbol("_vsh"),bP={beforeMount(t,{value:e},{transition:n}){t[cl]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):lo(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),lo(t,!0),i.enter(t)):i.leave(t,()=>{lo(t,!1)}):lo(t,e))},beforeUnmount(t,{value:e}){lo(t,e)}};function lo(t,e){t.style.display=e?t[cl]:"none",t[Cm]=!e}const N0=Symbol(""),F0=/(^|;)\s*display\s*:/;function B0(t,e,n){const i=t.style,s=Ft(n);let r=!1;if(n&&!s){if(e)if(Ft(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&qa(i,a,"")}else for(const o in e)n[o]==null&&qa(i,o,"");for(const o in n)o==="display"&&(r=!0),qa(i,o,n[o])}else if(s){if(e!==n){const o=i[N0];o&&(n+=";"+o),i.cssText=n,r=F0.test(n)}}else e&&t.removeAttribute("style");cl in t&&(t[cl]=r?i.display:"",t[Cm]&&(i.display="none"))}const _f=/\s*!important$/;function qa(t,e,n){if(We(n))n.forEach(i=>qa(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=k0(t,e);_f.test(n)?t.setProperty(Zs(i),n.replace(_f,""),"important"):t[i]=n}}const vf=["Webkit","Moz","ms"],ec={};function k0(t,e){const n=ec[e];if(n)return n;let i=Bn(e);if(i!=="filter"&&i in t)return ec[e]=i;i=El(i);for(let s=0;s<vf.length;s++){const r=vf[s]+i;if(r in t)return ec[e]=r}return e}const xf="http://www.w3.org/1999/xlink";function yf(t,e,n,i,s,r=Y_(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(xf,e.slice(6,e.length)):t.setAttributeNS(xf,e,n):n==null||r&&!Ep(n)?t.removeAttribute(e):t.setAttribute(e,r?"":gi(n)?String(n):n)}function wf(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Am(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Ep(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function is(t,e,n,i){t.addEventListener(e,n,i)}function z0(t,e,n,i){t.removeEventListener(e,n,i)}const bf=Symbol("_vei");function H0(t,e,n,i,s=null){const r=t[bf]||(t[bf]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=V0(e);if(i){const c=r[e]=X0(i,s);is(t,a,c,l)}else o&&(z0(t,a,o,l),r[e]=void 0)}}const Sf=/(?:Once|Passive|Capture)$/;function V0(t){let e;if(Sf.test(t)){e={};let i;for(;i=t.match(Sf);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Zs(t.slice(2)),e]}let tc=0;const G0=Promise.resolve(),W0=()=>tc||(G0.then(()=>tc=0),tc=Date.now());function X0(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;_i($0(i,n.value),e,5,[i])};return n.value=t,n.attached=W0(),n}function $0(t,e){if(We(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Mf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,q0=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?O0(t,i,o):e==="style"?B0(t,n,i):Sl(e)?Ku(e)||H0(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):j0(t,e,i,o))?(wf(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&yf(t,e,i,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ft(i))?wf(t,Bn(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),yf(t,e,i,o))};function j0(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Mf(e)&&je(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Mf(e)&&Ft(n)?!1:e in t}const Vr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return We(e)?n=>Ga(e,n):e};function Y0(t){t.target.composing=!0}function Ef(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const zi=Symbol("_assign"),es={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[zi]=Vr(s);const r=i||s.props&&s.props.type==="number";is(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=tl(a)),t[zi](a)}),n&&is(t,"change",()=>{t.value=t.value.trim()}),e||(is(t,"compositionstart",Y0),is(t,"compositionend",Ef),is(t,"change",Ef))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[zi]=Vr(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?tl(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===l)||(t.value=l))}},SP={deep:!0,created(t,e,n){t[zi]=Vr(n),is(t,"change",()=>{const i=t._modelValue,s=No(t),r=t.checked,o=t[zi];if(We(i)){const a=Ju(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Qr(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Rm(t,r))})},mounted:Tf,beforeUpdate(t,e,n){t[zi]=Vr(n),Tf(t,e,n)}};function Tf(t,{value:e,oldValue:n},i){t._modelValue=e;let s;if(We(e))s=Ju(e,i.props.value)>-1;else if(Qr(e))s=e.has(i.props.value);else{if(e===n)return;s=jo(e,Rm(t,!0))}t.checked!==s&&(t.checked=s)}const K0={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=Qr(e);is(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?tl(No(o)):No(o));t[zi](t.multiple?s?new Set(r):r:r[0]),t._assigning=!0,Zo(()=>{t._assigning=!1})}),t[zi]=Vr(i)},mounted(t,{value:e}){Af(t,e)},beforeUpdate(t,e,n){t[zi]=Vr(n)},updated(t,{value:e}){t._assigning||Af(t,e)}};function Af(t,e){const n=t.multiple,i=We(e);if(!(n&&!i&&!Qr(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],a=No(o);if(n)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Ju(e,a)>-1}else o.selected=e.has(a);else if(jo(No(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function No(t){return"_value"in t?t._value:t.value}function Rm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Z0=["ctrl","shift","alt","meta"],Q0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Z0.some(n=>t[`${n}Key`]&&!e.includes(n))},Cf=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=Q0[e[o]];if(a&&a(s,e))return}return t(s,...r)})},J0=nn({patchProp:q0},I0);let Rf;function ex(){return Rf||(Rf=i0(J0))}const tx=(...t)=>{const e=ex().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=ix(i);if(!s)return;const r=e._component;!je(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,nx(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function nx(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ix(t){return Ft(t)?document.querySelector(t):t}/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const sx=Symbol();var Pf;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Pf||(Pf={}));function rx(){const t=Z_(!0),e=t.run(()=>Ke({}));let n=[],i=[];const s=Xp({install(r){s._a=r,r.provide(sx,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return this._a?n.push(r):i.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const vr=typeof document<"u";function Pm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ox(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Pm(t.default)}const pt=Object.assign;function nc(t,e){const n={};for(const i in e){const s=e[i];n[i]=ei(s)?s.map(t):t(s)}return n}const Ro=()=>{},ei=Array.isArray,Dm=/#/g,ax=/&/g,lx=/\//g,cx=/=/g,ux=/\?/g,Lm=/\+/g,dx=/%5B/g,fx=/%5D/g,Im=/%5E/g,hx=/%60/g,Um=/%7B/g,px=/%7C/g,Om=/%7D/g,mx=/%20/g;function hd(t){return encodeURI(""+t).replace(px,"|").replace(dx,"[").replace(fx,"]")}function gx(t){return hd(t).replace(Um,"{").replace(Om,"}").replace(Im,"^")}function Jc(t){return hd(t).replace(Lm,"%2B").replace(mx,"+").replace(Dm,"%23").replace(ax,"%26").replace(hx,"`").replace(Um,"{").replace(Om,"}").replace(Im,"^")}function _x(t){return Jc(t).replace(cx,"%3D")}function vx(t){return hd(t).replace(Dm,"%23").replace(ux,"%3F")}function xx(t){return t==null?"":vx(t).replace(lx,"%2F")}function Fo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const yx=/\/$/,wx=t=>t.replace(yx,"");function ic(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Ex(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:Fo(o)}}function bx(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Df(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Sx(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Gr(e.matched[i],n.matched[s])&&Nm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Gr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Nm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Mx(t[n],e[n]))return!1;return!0}function Mx(t,e){return ei(t)?Lf(t,e):ei(e)?Lf(e,t):t===e}function Lf(t,e){return ei(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function Ex(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const Wi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Bo;(function(t){t.pop="pop",t.push="push"})(Bo||(Bo={}));var Po;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Po||(Po={}));function Tx(t){if(!t)if(vr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),wx(t)}const Ax=/^[^#]+#/;function Cx(t,e){return t.replace(Ax,"#")+e}function Rx(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Il=()=>({left:window.scrollX,top:window.scrollY});function Px(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Rx(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function If(t,e){return(history.state?history.state.position-e:-1)+t}const eu=new Map;function Dx(t,e){eu.set(t,e)}function Lx(t){const e=eu.get(t);return eu.delete(t),e}let Ix=()=>location.protocol+"//"+location.host;function Fm(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Df(l,"")}return Df(n,t)+i+s}function Ux(t,e,n,i){let s=[],r=[],o=null;const a=({state:f})=>{const h=Fm(t,location),_=n.value,v=e.value;let m=0;if(f){if(n.value=h,e.value=f,o&&o===_){o=null;return}m=v?f.position-v.position:0}else i(h);s.forEach(p=>{p(n.value,_,{delta:m,type:Bo.pop,direction:m?m>0?Po.forward:Po.back:Po.unknown})})};function l(){o=n.value}function c(f){s.push(f);const h=()=>{const _=s.indexOf(f);_>-1&&s.splice(_,1)};return r.push(h),h}function u(){const{history:f}=window;f.state&&f.replaceState(pt({},f.state,{scroll:Il()}),"")}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function Uf(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Il():null}}function Ox(t){const{history:e,location:n}=window,i={value:Fm(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:Ix()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(h){console.error(h),n[u?"replace":"assign"](f)}}function o(l,c){const u=pt({},e.state,Uf(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=pt({},s.value,e.state,{forward:l,scroll:Il()});r(u.current,u,!0);const d=pt({},Uf(i.value,l,null),{position:u.position+1},c);r(l,d,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Nx(t){t=Tx(t);const e=Ox(t),n=Ux(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=pt({location:"",base:t,go:i,createHref:Cx.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Fx(t){return typeof t=="string"||t&&typeof t=="object"}function Bm(t){return typeof t=="string"||typeof t=="symbol"}const km=Symbol("");var Of;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Of||(Of={}));function Wr(t,e){return pt(new Error,{type:t,[km]:!0},e)}function Si(t,e){return t instanceof Error&&km in t&&(e==null||!!(t.type&e))}const Nf="[^/]+?",Bx={sensitive:!1,strict:!1,start:!0,end:!0},kx=/[.+*?^${}()[\]/\\]/g;function zx(t,e){const n=pt({},Bx,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let d=0;d<c.length;d++){const f=c[d];let h=40+(n.sensitive?.25:0);if(f.type===0)d||(s+="/"),s+=f.value.replace(kx,"\\$&"),h+=40;else if(f.type===1){const{value:_,repeatable:v,optional:m,regexp:p}=f;r.push({name:_,repeatable:v,optional:m});const A=p||Nf;if(A!==Nf){h+=10;try{new RegExp(`(${A})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${_}" (${A}): `+w.message)}}let E=v?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;d||(E=m&&c.length<2?`(?:/${E})`:"/"+E),m&&(E+="?"),s+=E,h+=20,m&&(h+=-8),v&&(h+=-20),A===".*"&&(h+=-50)}u.push(h)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",_=r[f-1];d[_.name]=h&&_.repeatable?h.split("/"):h}return d}function l(c){let u="",d=!1;for(const f of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===0)u+=h.value;else if(h.type===1){const{value:_,repeatable:v,optional:m}=h,p=_ in c?c[_]:"";if(ei(p)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const A=ei(p)?p.join("/"):p;if(!A)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${_}"`);u+=A}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function Hx(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function zm(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=Hx(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(Ff(i))return 1;if(Ff(s))return-1}return s.length-i.length}function Ff(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Vx={type:0,value:""},Gx=/[a-zA-Z0-9_]/;function Wx(t){if(!t)return[[]];if(t==="/")return[[Vx]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):f();break;case 4:f(),n=i;break;case 1:l==="("?n=2:Gx.test(l)?f():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),s}function Xx(t,e,n){const i=zx(Wx(t.path),n),s=pt(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function $x(t,e){const n=[],i=new Map;e=Hf({strict:!1,end:!0,sensitive:!1},e);function s(d){return i.get(d)}function r(d,f,h){const _=!h,v=kf(d);v.aliasOf=h&&h.record;const m=Hf(e,d),p=[v];if("alias"in d){const w=typeof d.alias=="string"?[d.alias]:d.alias;for(const L of w)p.push(kf(pt({},v,{components:h?h.record.components:v.components,path:L,aliasOf:h?h.record:v})))}let A,E;for(const w of p){const{path:L}=w;if(f&&L[0]!=="/"){const R=f.record.path,U=R[R.length-1]==="/"?"":"/";w.path=f.record.path+(L&&U+L)}if(A=Xx(w,f,m),h?h.alias.push(A):(E=E||A,E!==A&&E.alias.push(A),_&&d.name&&!zf(A)&&o(d.name)),Hm(A)&&l(A),v.children){const R=v.children;for(let U=0;U<R.length;U++)r(R[U],A,h&&h.children[U])}h=h||A}return E?()=>{o(E)}:Ro}function o(d){if(Bm(d)){const f=i.get(d);f&&(i.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const f=Yx(d,n);n.splice(f,0,d),d.record.name&&!zf(d)&&i.set(d.record.name,d)}function c(d,f){let h,_={},v,m;if("name"in d&&d.name){if(h=i.get(d.name),!h)throw Wr(1,{location:d});m=h.record.name,_=pt(Bf(f.params,h.keys.filter(E=>!E.optional).concat(h.parent?h.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),d.params&&Bf(d.params,h.keys.map(E=>E.name))),v=h.stringify(_)}else if(d.path!=null)v=d.path,h=n.find(E=>E.re.test(v)),h&&(_=h.parse(v),m=h.record.name);else{if(h=f.name?i.get(f.name):n.find(E=>E.re.test(f.path)),!h)throw Wr(1,{location:d,currentLocation:f});m=h.record.name,_=pt({},f.params,d.params),v=h.stringify(_)}const p=[];let A=h;for(;A;)p.unshift(A.record),A=A.parent;return{name:m,path:v,params:_,matched:p,meta:jx(p)}}t.forEach(d=>r(d));function u(){n.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Bf(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function kf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:qx(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function qx(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function zf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function jx(t){return t.reduce((e,n)=>pt(e,n.meta),{})}function Hf(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function Yx(t,e){let n=0,i=e.length;for(;n!==i;){const r=n+i>>1;zm(t,e[r])<0?i=r:n=r+1}const s=Kx(t);return s&&(i=e.lastIndexOf(s,i-1)),i}function Kx(t){let e=t;for(;e=e.parent;)if(Hm(e)&&zm(t,e)===0)return e}function Hm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Zx(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Lm," "),o=r.indexOf("="),a=Fo(o<0?r:r.slice(0,o)),l=o<0?null:Fo(r.slice(o+1));if(a in e){let c=e[a];ei(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Vf(t){let e="";for(let n in t){const i=t[n];if(n=_x(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(ei(i)?i.map(r=>r&&Jc(r)):[i&&Jc(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Qx(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=ei(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const Jx=Symbol(""),Gf=Symbol(""),pd=Symbol(""),Vm=Symbol(""),tu=Symbol("");function co(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ts(t,e,n,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(Wr(4,{from:n,to:e})):f instanceof Error?l(f):Fx(f)?l(Wr(2,{from:e,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=r(()=>t.call(i&&i.instances[s],e,n,c));let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(f=>l(f))})}function sc(t,e,n,i,s=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Pm(l)){const u=(l.__vccOpts||l)[e];u&&r.push(ts(u,n,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=ox(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const h=(d.__vccOpts||d)[e];return h&&ts(h,n,i,o,a,s)()}))}}return r}function Wf(t){const e=ki(pd),n=ki(Vm),i=en(()=>{const l=hs(t.to);return e.resolve(l)}),s=en(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(Gr.bind(null,u));if(f>-1)return f;const h=Xf(l[c-2]);return c>1&&Xf(u)===h&&d[d.length-1].path!==h?d.findIndex(Gr.bind(null,l[c-2])):f}),r=en(()=>s.value>-1&&sy(n.params,i.value.params)),o=en(()=>s.value>-1&&s.value===n.matched.length-1&&Nm(n.params,i.value.params));function a(l={}){if(iy(l)){const c=e[hs(t.replace)?"replace":"push"](hs(t.to)).catch(Ro);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:en(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function ey(t){return t.length===1?t[0]:t}const ty=Jp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Wf,setup(t,{slots:e}){const n=Yo(Wf(t)),{options:i}=ki(pd),s=en(()=>({[$f(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[$f(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&ey(e.default(n));return t.custom?r:Tm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),ny=ty;function iy(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function sy(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!ei(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Xf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const $f=(t,e,n)=>t??e??n,ry=Jp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=ki(tu),s=en(()=>t.route||i.value),r=ki(Gf,0),o=en(()=>{let c=hs(r);const{matched:u}=s.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=en(()=>s.value.matched[o.value]);Wa(Gf,en(()=>o.value+1)),Wa(Jx,a),Wa(tu,s);const l=Ke();return Qn(()=>[l.value,a.value,t.name],([c,u,d],[f,h,_])=>{u&&(u.instances[d]=c,h&&h!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!Gr(u,h)||!f)&&(u.enterCallbacks[d]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,d=a.value,f=d&&d.components[u];if(!f)return qf(n.default,{Component:f,route:c});const h=d.props[u],_=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=Tm(f,pt({},_,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return qf(n.default,{Component:m,route:c})||m}}});function qf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Gm=ry;function oy(t){const e=$x(t.routes,t),n=t.parseQuery||Zx,i=t.stringifyQuery||Vf,s=t.history,r=co(),o=co(),a=co(),l=_v(Wi);let c=Wi;vr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=nc.bind(null,B=>""+B),d=nc.bind(null,xx),f=nc.bind(null,Fo);function h(B,he){let ue,xe;return Bm(B)?(ue=e.getRecordMatcher(B),xe=he):xe=B,e.addRoute(xe,ue)}function _(B){const he=e.getRecordMatcher(B);he&&e.removeRoute(he)}function v(){return e.getRoutes().map(B=>B.record)}function m(B){return!!e.getRecordMatcher(B)}function p(B,he){if(he=pt({},he||l.value),typeof B=="string"){const k=ic(n,B,he.path),G=e.resolve({path:k.path},he),se=s.createHref(k.fullPath);return pt(k,G,{params:f(G.params),hash:Fo(k.hash),redirectedFrom:void 0,href:se})}let ue;if(B.path!=null)ue=pt({},B,{path:ic(n,B.path,he.path).path});else{const k=pt({},B.params);for(const G in k)k[G]==null&&delete k[G];ue=pt({},B,{params:d(k)}),he.params=d(he.params)}const xe=e.resolve(ue,he),He=B.hash||"";xe.params=u(f(xe.params));const T=bx(i,pt({},B,{hash:gx(He),path:xe.path})),g=s.createHref(T);return pt({fullPath:T,hash:He,query:i===Vf?Qx(B.query):B.query||{}},xe,{redirectedFrom:void 0,href:g})}function A(B){return typeof B=="string"?ic(n,B,l.value.path):pt({},B)}function E(B,he){if(c!==B)return Wr(8,{from:he,to:B})}function w(B){return U(B)}function L(B){return w(pt(A(B),{replace:!0}))}function R(B){const he=B.matched[B.matched.length-1];if(he&&he.redirect){const{redirect:ue}=he;let xe=typeof ue=="function"?ue(B):ue;return typeof xe=="string"&&(xe=xe.includes("?")||xe.includes("#")?xe=A(xe):{path:xe},xe.params={}),pt({query:B.query,hash:B.hash,params:xe.path!=null?{}:B.params},xe)}}function U(B,he){const ue=c=p(B),xe=l.value,He=B.state,T=B.force,g=B.replace===!0,k=R(ue);if(k)return U(pt(A(k),{state:typeof k=="object"?pt({},He,k.state):He,force:T,replace:g}),he||ue);const G=ue;G.redirectedFrom=he;let se;return!T&&Sx(i,xe,ue)&&(se=Wr(16,{to:G,from:xe}),Oe(xe,xe,!0,!1)),(se?Promise.resolve(se):b(G,xe)).catch(W=>Si(W)?Si(W,2)?W:Ae(W):q(W,G,xe)).then(W=>{if(W){if(Si(W,2))return U(pt({replace:g},A(W.to),{state:typeof W.to=="object"?pt({},He,W.to.state):He,force:T}),he||G)}else W=Q(G,xe,!0,g,He);return P(G,xe,W),W})}function I(B,he){const ue=E(B,he);return ue?Promise.reject(ue):Promise.resolve()}function y(B){const he=et.values().next().value;return he&&typeof he.runWithContext=="function"?he.runWithContext(B):B()}function b(B,he){let ue;const[xe,He,T]=ay(B,he);ue=sc(xe.reverse(),"beforeRouteLeave",B,he);for(const k of xe)k.leaveGuards.forEach(G=>{ue.push(ts(G,B,he))});const g=I.bind(null,B,he);return ue.push(g),Te(ue).then(()=>{ue=[];for(const k of r.list())ue.push(ts(k,B,he));return ue.push(g),Te(ue)}).then(()=>{ue=sc(He,"beforeRouteUpdate",B,he);for(const k of He)k.updateGuards.forEach(G=>{ue.push(ts(G,B,he))});return ue.push(g),Te(ue)}).then(()=>{ue=[];for(const k of T)if(k.beforeEnter)if(ei(k.beforeEnter))for(const G of k.beforeEnter)ue.push(ts(G,B,he));else ue.push(ts(k.beforeEnter,B,he));return ue.push(g),Te(ue)}).then(()=>(B.matched.forEach(k=>k.enterCallbacks={}),ue=sc(T,"beforeRouteEnter",B,he,y),ue.push(g),Te(ue))).then(()=>{ue=[];for(const k of o.list())ue.push(ts(k,B,he));return ue.push(g),Te(ue)}).catch(k=>Si(k,8)?k:Promise.reject(k))}function P(B,he,ue){a.list().forEach(xe=>y(()=>xe(B,he,ue)))}function Q(B,he,ue,xe,He){const T=E(B,he);if(T)return T;const g=he===Wi,k=vr?history.state:{};ue&&(xe||g?s.replace(B.fullPath,pt({scroll:g&&k&&k.scroll},He)):s.push(B.fullPath,He)),l.value=B,Oe(B,he,ue,g),Ae()}let $;function j(){$||($=s.listen((B,he,ue)=>{if(!le.listening)return;const xe=p(B),He=R(xe);if(He){U(pt(He,{replace:!0,force:!0}),xe).catch(Ro);return}c=xe;const T=l.value;vr&&Dx(If(T.fullPath,ue.delta),Il()),b(xe,T).catch(g=>Si(g,12)?g:Si(g,2)?(U(pt(A(g.to),{force:!0}),xe).then(k=>{Si(k,20)&&!ue.delta&&ue.type===Bo.pop&&s.go(-1,!1)}).catch(Ro),Promise.reject()):(ue.delta&&s.go(-ue.delta,!1),q(g,xe,T))).then(g=>{g=g||Q(xe,T,!1),g&&(ue.delta&&!Si(g,8)?s.go(-ue.delta,!1):ue.type===Bo.pop&&Si(g,20)&&s.go(-1,!1)),P(xe,T,g)}).catch(Ro)}))}let pe=co(),J=co(),ge;function q(B,he,ue){Ae(B);const xe=J.list();return xe.length?xe.forEach(He=>He(B,he,ue)):console.error(B),Promise.reject(B)}function Ee(){return ge&&l.value!==Wi?Promise.resolve():new Promise((B,he)=>{pe.add([B,he])})}function Ae(B){return ge||(ge=!B,j(),pe.list().forEach(([he,ue])=>B?ue(B):he()),pe.reset()),B}function Oe(B,he,ue,xe){const{scrollBehavior:He}=t;if(!vr||!He)return Promise.resolve();const T=!ue&&Lx(If(B.fullPath,0))||(xe||!ue)&&history.state&&history.state.scroll||null;return Zo().then(()=>He(B,he,T)).then(g=>g&&Px(g)).catch(g=>q(g,B,he))}const ke=B=>s.go(B);let at;const et=new Set,le={currentRoute:l,listening:!0,addRoute:h,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:v,resolve:p,options:t,push:w,replace:L,go:ke,back:()=>ke(-1),forward:()=>ke(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:J.add,isReady:Ee,install(B){const he=this;B.component("RouterLink",ny),B.component("RouterView",Gm),B.config.globalProperties.$router=he,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>hs(l)}),vr&&!at&&l.value===Wi&&(at=!0,w(s.location).catch(He=>{}));const ue={};for(const He in Wi)Object.defineProperty(ue,He,{get:()=>l.value[He],enumerable:!0});B.provide(pd,he),B.provide(Vm,Gp(ue)),B.provide(tu,l);const xe=B.unmount;et.add(B),B.unmount=function(){et.delete(B),et.size<1&&(c=Wi,$&&$(),$=null,l.value=Wi,at=!1,ge=!1),xe()}}};function Te(B){return B.reduce((he,ue)=>he.then(()=>y(ue)),Promise.resolve())}return le}function ay(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Gr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Gr(c,l))||s.push(l))}return[n,i,s]}const Jo=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},ly={id:"app"},cy={class:"app-header"},uy={class:"header-content"},dy={class:"header-actions"},fy={class:"main-content"},hy={__name:"App",setup(t){console.log("App.vue");const e=Ke(!1);return Jr(()=>{localStorage.getItem("darkMode")==="true"&&(e.value=!0,document.body.classList.add("dark-mode"))}),(n,i)=>{const s=zv("RouterLink");return ot(),ft("div",ly,[N("header",cy,[N("div",uy,[i[4]||(i[4]=N("div",{class:"logo-section"},[N("h1",{class:"app-title"},"Miyuki Beads Designer")],-1)),N("div",dy,[kt(s,{to:"/"},{default:vo(()=>i[0]||(i[0]=[wo("Flat Grid")])),_:1}),kt(s,{to:"/weaving-grid"},{default:vo(()=>i[1]||(i[1]=[wo("Weaving Grid")])),_:1}),kt(s,{to:"/beadwork-pattern"},{default:vo(()=>i[2]||(i[2]=[wo("Beadwork Pattern")])),_:1}),kt(s,{to:"/peyote-grid"},{default:vo(()=>i[3]||(i[3]=[wo("Peyote Grid")])),_:1})])])]),N("main",fy,[kt(hs(Gm))])])}}},py=Jo(hy,[["__scopeId","data-v-133c8f9a"]]),my="modulepreload",gy=function(t){return"/miyuki-beads-designer/"+t},jf={},uo=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){let o=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=o(n.map(c=>{if(c=gy(c),c in jf)return;jf[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":my,u||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((h,_)=>{f.addEventListener("load",h),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};/*!
* sweetalert2 v11.22.3
* Released under the MIT License.
*/function Wm(t,e,n){if(typeof t=="function"?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}function _y(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Yf(t,e){return t.get(Wm(t,e))}function vy(t,e,n){_y(t,e),e.set(t,n)}function xy(t,e,n){return t.set(Wm(t,e),n),n}const yy=100,Ve={},wy=()=>{Ve.previousActiveElement instanceof HTMLElement?(Ve.previousActiveElement.focus(),Ve.previousActiveElement=null):document.body&&document.body.focus()},by=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,i=window.scrollY;Ve.restoreFocusTimeout=setTimeout(()=>{wy(),e()},yy),window.scrollTo(n,i)}),Xm="swal2-",Sy=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],oe=Sy.reduce((t,e)=>(t[e]=Xm+e,t),{}),My=["success","warning","info","question","error"],ul=My.reduce((t,e)=>(t[e]=Xm+e,t),{}),$m="SweetAlert2:",md=t=>t.charAt(0).toUpperCase()+t.slice(1),dn=t=>{console.warn(`${$m} ${typeof t=="object"?t.join(" "):t}`)},Qs=t=>{console.error(`${$m} ${t}`)},Kf=[],Ey=t=>{Kf.includes(t)||(Kf.push(t),dn(t))},qm=(t,e=null)=>{Ey(`"${t}" is deprecated and will be removed in the next major release.${e?` Use "${e}" instead.`:""}`)},Ul=t=>typeof t=="function"?t():t,gd=t=>t&&typeof t.toPromise=="function",ea=t=>gd(t)?t.toPromise():Promise.resolve(t),_d=t=>t&&Promise.resolve(t)===t,fn=()=>document.body.querySelector(`.${oe.container}`),ta=t=>{const e=fn();return e?e.querySelector(t):null},Pn=t=>ta(`.${t}`),dt=()=>Pn(oe.popup),eo=()=>Pn(oe.icon),Ty=()=>Pn(oe["icon-content"]),jm=()=>Pn(oe.title),vd=()=>Pn(oe["html-container"]),Ym=()=>Pn(oe.image),xd=()=>Pn(oe["progress-steps"]),Ol=()=>Pn(oe["validation-message"]),vi=()=>ta(`.${oe.actions} .${oe.confirm}`),to=()=>ta(`.${oe.actions} .${oe.cancel}`),Js=()=>ta(`.${oe.actions} .${oe.deny}`),Ay=()=>Pn(oe["input-label"]),no=()=>ta(`.${oe.loader}`),na=()=>Pn(oe.actions),Km=()=>Pn(oe.footer),Nl=()=>Pn(oe["timer-progress-bar"]),yd=()=>Pn(oe.close),Cy=`
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
`,wd=()=>{const t=dt();if(!t)return[];const e=t.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),n=Array.from(e).sort((r,o)=>{const a=parseInt(r.getAttribute("tabindex")||"0"),l=parseInt(o.getAttribute("tabindex")||"0");return a>l?1:a<l?-1:0}),i=t.querySelectorAll(Cy),s=Array.from(i).filter(r=>r.getAttribute("tabindex")!=="-1");return[...new Set(n.concat(s))].filter(r=>gn(r))},bd=()=>Hi(document.body,oe.shown)&&!Hi(document.body,oe["toast-shown"])&&!Hi(document.body,oe["no-backdrop"]),Fl=()=>{const t=dt();return t?Hi(t,oe.toast):!1},Ry=()=>{const t=dt();return t?t.hasAttribute("data-loading"):!1},Dn=(t,e)=>{if(t.textContent="",e){const i=new DOMParser().parseFromString(e,"text/html"),s=i.querySelector("head");s&&Array.from(s.childNodes).forEach(o=>{t.appendChild(o)});const r=i.querySelector("body");r&&Array.from(r.childNodes).forEach(o=>{o instanceof HTMLVideoElement||o instanceof HTMLAudioElement?t.appendChild(o.cloneNode(!0)):t.appendChild(o)})}},Hi=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let i=0;i<n.length;i++)if(!t.classList.contains(n[i]))return!1;return!0},Py=(t,e)=>{Array.from(t.classList).forEach(n=>{!Object.values(oe).includes(n)&&!Object.values(ul).includes(n)&&!Object.values(e.showClass||{}).includes(n)&&t.classList.remove(n)})},Rn=(t,e,n)=>{if(Py(t,e),!e.customClass)return;const i=e.customClass[n];if(i){if(typeof i!="string"&&!i.forEach){dn(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof i}"`);return}ht(t,i)}},Bl=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${oe.popup} > .${oe[e]}`);case"checkbox":return t.querySelector(`.${oe.popup} > .${oe.checkbox} input`);case"radio":return t.querySelector(`.${oe.popup} > .${oe.radio} input:checked`)||t.querySelector(`.${oe.popup} > .${oe.radio} input:first-child`);case"range":return t.querySelector(`.${oe.popup} > .${oe.range} input`);default:return t.querySelector(`.${oe.popup} > .${oe.input}`)}},Zm=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},Qm=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(i=>{Array.isArray(t)?t.forEach(s=>{n?s.classList.add(i):s.classList.remove(i)}):n?t.classList.add(i):t.classList.remove(i)}))},ht=(t,e)=>{Qm(t,e,!0)},kn=(t,e)=>{Qm(t,e,!1)},us=(t,e)=>{const n=Array.from(t.children);for(let i=0;i<n.length;i++){const s=n[i];if(s instanceof HTMLElement&&Hi(s,e))return s}},Ws=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style.setProperty(e,typeof n=="number"?`${n}px`:n):t.style.removeProperty(e)},Xt=(t,e="flex")=>{t&&(t.style.display=e)},sn=t=>{t&&(t.style.display="none")},Sd=(t,e="block")=>{t&&new MutationObserver(()=>{ia(t,t.innerHTML,e)}).observe(t,{childList:!0,subtree:!0})},Zf=(t,e,n,i)=>{const s=t.querySelector(e);s&&s.style.setProperty(n,i)},ia=(t,e,n="flex")=>{e?Xt(t,n):sn(t)},gn=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),Dy=()=>!gn(vi())&&!gn(Js())&&!gn(to()),nu=t=>t.scrollHeight>t.clientHeight,Ly=(t,e)=>{let n=t;for(;n&&n!==e;){if(nu(n))return!0;n=n.parentElement}return!1},Jm=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),i=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||i>0},Md=(t,e=!1)=>{const n=Nl();n&&gn(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},Iy=()=>{const t=Nl();if(!t)return;const e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),i=e/n*100;t.style.width=`${i}%`},Uy=()=>typeof window>"u"||typeof document>"u",Oy=`
 <div aria-labelledby="${oe.title}" aria-describedby="${oe["html-container"]}" class="${oe.popup}" tabindex="-1">
   <button type="button" class="${oe.close}"></button>
   <ul class="${oe["progress-steps"]}"></ul>
   <div class="${oe.icon}"></div>
   <img class="${oe.image}" />
   <h2 class="${oe.title}" id="${oe.title}"></h2>
   <div class="${oe["html-container"]}" id="${oe["html-container"]}"></div>
   <input class="${oe.input}" id="${oe.input}" />
   <input type="file" class="${oe.file}" />
   <div class="${oe.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${oe.select}" id="${oe.select}"></select>
   <div class="${oe.radio}"></div>
   <label class="${oe.checkbox}">
     <input type="checkbox" id="${oe.checkbox}" />
     <span class="${oe.label}"></span>
   </label>
   <textarea class="${oe.textarea}" id="${oe.textarea}"></textarea>
   <div class="${oe["validation-message"]}" id="${oe["validation-message"]}"></div>
   <div class="${oe.actions}">
     <div class="${oe.loader}"></div>
     <button type="button" class="${oe.confirm}"></button>
     <button type="button" class="${oe.deny}"></button>
     <button type="button" class="${oe.cancel}"></button>
   </div>
   <div class="${oe.footer}"></div>
   <div class="${oe["timer-progress-bar-container"]}">
     <div class="${oe["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),Ny=()=>{const t=fn();return t?(t.remove(),kn([document.documentElement,document.body],[oe["no-backdrop"],oe["toast-shown"],oe["has-column"]]),!0):!1},Es=()=>{Ve.currentInstance.resetValidationMessage()},Fy=()=>{const t=dt(),e=us(t,oe.input),n=us(t,oe.file),i=t.querySelector(`.${oe.range} input`),s=t.querySelector(`.${oe.range} output`),r=us(t,oe.select),o=t.querySelector(`.${oe.checkbox} input`),a=us(t,oe.textarea);e.oninput=Es,n.onchange=Es,r.onchange=Es,o.onchange=Es,a.oninput=Es,i.oninput=()=>{Es(),s.value=i.value},i.onchange=()=>{Es(),s.value=i.value}},By=t=>typeof t=="string"?document.querySelector(t):t,ky=t=>{const e=dt();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},zy=t=>{window.getComputedStyle(t).direction==="rtl"&&ht(fn(),oe.rtl)},Hy=t=>{const e=Ny();if(Uy()){Qs("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=oe.container,e&&ht(n,oe["no-transition"]),Dn(n,Oy),n.dataset.swal2Theme=t.theme;const i=By(t.target);i.appendChild(n),t.topLayer&&(n.setAttribute("popover",""),n.showPopover()),ky(t),zy(i),Fy()},Ed=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?Vy(t,e):t&&Dn(e,t)},Vy=(t,e)=>{t.jquery?Gy(e,t):Dn(e,t.toString())},Gy=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},Wy=(t,e)=>{const n=na(),i=no();!n||!i||(!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?sn(n):Xt(n),Rn(n,e,"actions"),Xy(n,i,e),Dn(i,e.loaderHtml||""),Rn(i,e,"loader"))};function Xy(t,e,n){const i=vi(),s=Js(),r=to();!i||!s||!r||(oc(i,"confirm",n),oc(s,"deny",n),oc(r,"cancel",n),$y(i,s,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,i),t.insertBefore(s,i)):(t.insertBefore(r,e),t.insertBefore(s,e),t.insertBefore(i,e))))}function $y(t,e,n,i){if(!i.buttonsStyling){kn([t,e,n],oe.styled);return}ht([t,e,n],oe.styled),i.confirmButtonColor&&t.style.setProperty("--swal2-confirm-button-background-color",i.confirmButtonColor),i.denyButtonColor&&e.style.setProperty("--swal2-deny-button-background-color",i.denyButtonColor),i.cancelButtonColor&&n.style.setProperty("--swal2-cancel-button-background-color",i.cancelButtonColor),rc(t),rc(e),rc(n)}function rc(t){const e=window.getComputedStyle(t);if(e.getPropertyValue("--swal2-action-button-focus-box-shadow"))return;const n=e.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/,"rgba($1, $2, $3, 0.5)");t.style.setProperty("--swal2-action-button-focus-box-shadow",e.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/,` ${n}`))}function oc(t,e,n){const i=md(e);ia(t,n[`show${i}Button`],"inline-block"),Dn(t,n[`${e}ButtonText`]||""),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]||""),t.className=oe[e],Rn(t,n,`${e}Button`)}const qy=(t,e)=>{const n=yd();n&&(Dn(n,e.closeButtonHtml||""),Rn(n,e,"closeButton"),ia(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel||""))},jy=(t,e)=>{const n=fn();n&&(Yy(n,e.backdrop),Ky(n,e.position),Zy(n,e.grow),Rn(n,e,"container"))};function Yy(t,e){typeof e=="string"?t.style.background=e:e||ht([document.documentElement,document.body],oe["no-backdrop"])}function Ky(t,e){e&&(e in oe?ht(t,oe[e]):(dn('The "position" parameter is not valid, defaulting to "center"'),ht(t,oe.center)))}function Zy(t,e){e&&ht(t,oe[`grow-${e}`])}var Mt={innerParams:new WeakMap,domCache:new WeakMap};const Qy=["input","file","range","select","radio","checkbox","textarea"],Jy=(t,e)=>{const n=dt();if(!n)return;const i=Mt.innerParams.get(t),s=!i||e.input!==i.input;Qy.forEach(r=>{const o=us(n,oe[r]);o&&(nw(r,e.inputAttributes),o.className=oe[r],s&&sn(o))}),e.input&&(s&&ew(e),iw(e))},ew=t=>{if(!t.input)return;if(!It[t.input]){Qs(`Unexpected type of input! Expected ${Object.keys(It).join(" | ")}, got "${t.input}"`);return}const e=eg(t.input);if(!e)return;const n=It[t.input](e,t);Xt(e),t.inputAutoFocus&&setTimeout(()=>{Zm(n)})},tw=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["id","type","value","style"].includes(n)||t.removeAttribute(n)}},nw=(t,e)=>{const n=dt();if(!n)return;const i=Bl(n,t);if(i){tw(i);for(const s in e)i.setAttribute(s,e[s])}},iw=t=>{if(!t.input)return;const e=eg(t.input);e&&Rn(e,t,"input")},Td=(t,e)=>{!t.placeholder&&e.inputPlaceholder&&(t.placeholder=e.inputPlaceholder)},sa=(t,e,n)=>{if(n.inputLabel){const i=document.createElement("label"),s=oe["input-label"];i.setAttribute("for",t.id),i.className=s,typeof n.customClass=="object"&&ht(i,n.customClass.inputLabel),i.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",i)}},eg=t=>{const e=dt();if(e)return us(e,oe[t]||oe.input)},dl=(t,e)=>{["string","number"].includes(typeof e)?t.value=`${e}`:_d(e)||dn(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e}"`)},It={};It.text=It.email=It.password=It.number=It.tel=It.url=It.search=It.date=It["datetime-local"]=It.time=It.week=It.month=(t,e)=>(dl(t,e.inputValue),sa(t,t,e),Td(t,e),t.type=e.input,t);It.file=(t,e)=>(sa(t,t,e),Td(t,e),t);It.range=(t,e)=>{const n=t.querySelector("input"),i=t.querySelector("output");return dl(n,e.inputValue),n.type=e.input,dl(i,e.inputValue),sa(n,t,e),t};It.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");Dn(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return sa(t,t,e),t};It.radio=t=>(t.textContent="",t);It.checkbox=(t,e)=>{const n=Bl(dt(),"checkbox");n.value="1",n.checked=!!e.inputValue;const i=t.querySelector("span");return Dn(i,e.inputPlaceholder||e.inputLabel),n};It.textarea=(t,e)=>{dl(t,e.inputValue),Td(t,e),sa(t,t,e);const n=i=>parseInt(window.getComputedStyle(i).marginLeft)+parseInt(window.getComputedStyle(i).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const i=parseInt(window.getComputedStyle(dt()).width),s=()=>{if(!document.body.contains(t))return;const r=t.offsetWidth+n(t);r>i?dt().style.width=`${r}px`:Ws(dt(),"width",e.width)};new MutationObserver(s).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const sw=(t,e)=>{const n=vd();n&&(Sd(n),Rn(n,e,"htmlContainer"),e.html?(Ed(e.html,n),Xt(n,"block")):e.text?(n.textContent=e.text,Xt(n,"block")):sn(n),Jy(t,e))},rw=(t,e)=>{const n=Km();n&&(Sd(n),ia(n,e.footer,"block"),e.footer&&Ed(e.footer,n),Rn(n,e,"footer"))},ow=(t,e)=>{const n=Mt.innerParams.get(t),i=eo();if(!i)return;if(n&&e.icon===n.icon){Jf(i,e),Qf(i,e);return}if(!e.icon&&!e.iconHtml){sn(i);return}if(e.icon&&Object.keys(ul).indexOf(e.icon)===-1){Qs(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),sn(i);return}Xt(i),Jf(i,e),Qf(i,e),ht(i,e.showClass&&e.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",tg)},Qf=(t,e)=>{for(const[n,i]of Object.entries(ul))e.icon!==n&&kn(t,i);ht(t,e.icon&&ul[e.icon]),cw(t,e),tg(),Rn(t,e,"icon")},tg=()=>{const t=dt();if(!t)return;const e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let i=0;i<n.length;i++)n[i].style.backgroundColor=e},aw=t=>`
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
`,Jf=(t,e)=>{if(!e.icon&&!e.iconHtml)return;let n=t.innerHTML,i="";e.iconHtml?i=eh(e.iconHtml):e.icon==="success"?(i=aw(e),n=n.replace(/ style=".*?"/g,"")):e.icon==="error"?i=lw:e.icon&&(i=eh({question:"?",warning:"!",info:"i"}[e.icon])),n.trim()!==i.trim()&&Dn(t,i)},cw=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Zf(t,n,"background-color",e.iconColor);Zf(t,".swal2-success-ring","border-color",e.iconColor)}},eh=t=>`<div class="${oe["icon-content"]}">${t}</div>`,uw=(t,e)=>{const n=Ym();if(n){if(!e.imageUrl){sn(n);return}Xt(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt||""),Ws(n,"width",e.imageWidth),Ws(n,"height",e.imageHeight),n.className=oe.image,Rn(n,e,"image")}};let Ad=!1,ng=0,ig=0,sg=0,rg=0;const dw=t=>{t.addEventListener("mousedown",fl),document.body.addEventListener("mousemove",hl),t.addEventListener("mouseup",pl),t.addEventListener("touchstart",fl),document.body.addEventListener("touchmove",hl),t.addEventListener("touchend",pl)},fw=t=>{t.removeEventListener("mousedown",fl),document.body.removeEventListener("mousemove",hl),t.removeEventListener("mouseup",pl),t.removeEventListener("touchstart",fl),document.body.removeEventListener("touchmove",hl),t.removeEventListener("touchend",pl)},fl=t=>{const e=dt();if(t.target===e||eo().contains(t.target)){Ad=!0;const n=og(t);ng=n.clientX,ig=n.clientY,sg=parseInt(e.style.insetInlineStart)||0,rg=parseInt(e.style.insetBlockStart)||0,ht(e,"swal2-dragging")}},hl=t=>{const e=dt();if(Ad){let{clientX:n,clientY:i}=og(t);e.style.insetInlineStart=`${sg+(n-ng)}px`,e.style.insetBlockStart=`${rg+(i-ig)}px`}},pl=()=>{const t=dt();Ad=!1,kn(t,"swal2-dragging")},og=t=>{let e=0,n=0;return t.type.startsWith("mouse")?(e=t.clientX,n=t.clientY):t.type.startsWith("touch")&&(e=t.touches[0].clientX,n=t.touches[0].clientY),{clientX:e,clientY:n}},hw=(t,e)=>{const n=fn(),i=dt();if(!(!n||!i)){if(e.toast){Ws(n,"width",e.width),i.style.width="100%";const s=no();s&&i.insertBefore(s,eo())}else Ws(i,"width",e.width);Ws(i,"padding",e.padding),e.color&&(i.style.color=e.color),e.background&&(i.style.background=e.background),sn(Ol()),pw(i,e),e.draggable&&!e.toast?(ht(i,oe.draggable),dw(i)):(kn(i,oe.draggable),fw(i))}},pw=(t,e)=>{const n=e.showClass||{};t.className=`${oe.popup} ${gn(t)?n.popup:""}`,e.toast?(ht([document.documentElement,document.body],oe["toast-shown"]),ht(t,oe.toast)):ht(t,oe.modal),Rn(t,e,"popup"),typeof e.customClass=="string"&&ht(t,e.customClass),e.icon&&ht(t,oe[`icon-${e.icon}`])},mw=(t,e)=>{const n=xd();if(!n)return;const{progressSteps:i,currentProgressStep:s}=e;if(!i||i.length===0||s===void 0){sn(n);return}Xt(n),n.textContent="",s>=i.length&&dn("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),i.forEach((r,o)=>{const a=gw(r);if(n.appendChild(a),o===s&&ht(a,oe["active-progress-step"]),o!==i.length-1){const l=_w(e);n.appendChild(l)}})},gw=t=>{const e=document.createElement("li");return ht(e,oe["progress-step"]),Dn(e,t),e},_w=t=>{const e=document.createElement("li");return ht(e,oe["progress-step-line"]),t.progressStepsDistance&&Ws(e,"width",t.progressStepsDistance),e},vw=(t,e)=>{const n=jm();n&&(Sd(n),ia(n,e.title||e.titleText,"block"),e.title&&Ed(e.title,n),e.titleText&&(n.innerText=e.titleText),Rn(n,e,"title"))},ag=(t,e)=>{hw(t,e),jy(t,e),mw(t,e),ow(t,e),uw(t,e),vw(t,e),qy(t,e),sw(t,e),Wy(t,e),rw(t,e);const n=dt();typeof e.didRender=="function"&&n&&e.didRender(n),Ve.eventEmitter.emit("didRender",n)},xw=()=>gn(dt()),lg=()=>{var t;return(t=vi())===null||t===void 0?void 0:t.click()},yw=()=>{var t;return(t=Js())===null||t===void 0?void 0:t.click()},ww=()=>{var t;return(t=to())===null||t===void 0?void 0:t.click()},io=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),cg=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},bw=(t,e,n)=>{cg(t),e.toast||(t.keydownHandler=i=>Mw(e,i,n),t.keydownTarget=e.keydownListenerCapture?window:dt(),t.keydownListenerCapture=e.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)},iu=(t,e)=>{var n;const i=wd();if(i.length){t=t+e,t===-2&&(t=i.length-1),t===i.length?t=0:t===-1&&(t=i.length-1),i[t].focus();return}(n=dt())===null||n===void 0||n.focus()},ug=["ArrowRight","ArrowDown"],Sw=["ArrowLeft","ArrowUp"],Mw=(t,e,n)=>{t&&(e.isComposing||e.keyCode===229||(t.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?Ew(e,t):e.key==="Tab"?Tw(e):[...ug,...Sw].includes(e.key)?Aw(e.key):e.key==="Escape"&&Cw(e,t,n)))},Ew=(t,e)=>{if(!Ul(e.allowEnterKey))return;const n=Bl(dt(),e.input);if(t.target&&n&&t.target instanceof HTMLElement&&t.target.outerHTML===n.outerHTML){if(["textarea","file"].includes(e.input))return;lg(),t.preventDefault()}},Tw=t=>{const e=t.target,n=wd();let i=-1;for(let s=0;s<n.length;s++)if(e===n[s]){i=s;break}t.shiftKey?iu(i,-1):iu(i,1),t.stopPropagation(),t.preventDefault()},Aw=t=>{const e=na(),n=vi(),i=Js(),s=to();if(!e||!n||!i||!s)return;const r=[n,i,s];if(document.activeElement instanceof HTMLElement&&!r.includes(document.activeElement))return;const o=ug.includes(t)?"nextElementSibling":"previousElementSibling";let a=document.activeElement;if(a){for(let l=0;l<e.children.length;l++){if(a=a[o],!a)return;if(a instanceof HTMLButtonElement&&gn(a))break}a instanceof HTMLButtonElement&&a.focus()}},Cw=(t,e,n)=>{t.preventDefault(),Ul(e.allowEscapeKey)&&n(io.esc)};var Xr={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const Rw=()=>{const t=fn();Array.from(document.body.children).forEach(n=>{n.contains(t)||(n.hasAttribute("aria-hidden")&&n.setAttribute("data-previous-aria-hidden",n.getAttribute("aria-hidden")||""),n.setAttribute("aria-hidden","true"))})},dg=()=>{Array.from(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||""),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},fg=typeof window<"u"&&!!window.GestureEvent,Pw=()=>{if(fg&&!Hi(document.body,oe.iosfix)){const t=document.body.scrollTop;document.body.style.top=`${t*-1}px`,ht(document.body,oe.iosfix),Dw()}},Dw=()=>{const t=fn();if(!t)return;let e;t.ontouchstart=n=>{e=Lw(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},Lw=t=>{const e=t.target,n=fn(),i=vd();return!n||!i||Iw(t)||Uw(t)?!1:e===n||!nu(n)&&e instanceof HTMLElement&&!Ly(e,i)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(nu(i)&&i.contains(e))},Iw=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",Uw=t=>t.touches&&t.touches.length>1,Ow=()=>{if(Hi(document.body,oe.iosfix)){const t=parseInt(document.body.style.top,10);kn(document.body,oe.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},Nw=()=>{const t=document.createElement("div");t.className=oe["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e};let Tr=null;const Fw=t=>{Tr===null&&(document.body.scrollHeight>window.innerHeight||t==="scroll")&&(Tr=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Tr+Nw()}px`)},Bw=()=>{Tr!==null&&(document.body.style.paddingRight=`${Tr}px`,Tr=null)};function hg(t,e,n,i){Fl()?th(t,i):(by(n).then(()=>th(t,i)),cg(Ve)),fg?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),bd()&&(Bw(),Ow(),dg()),kw()}function kw(){kn([document.documentElement,document.body],[oe.shown,oe["height-auto"],oe["no-backdrop"],oe["toast-shown"]])}function ds(t){t=Hw(t);const e=Xr.swalPromiseResolve.get(this),n=zw(this);this.isAwaitingPromise?t.isDismissed||(ra(this),e(t)):n&&e(t)}const zw=t=>{const e=dt();if(!e)return!1;const n=Mt.innerParams.get(t);if(!n||Hi(e,n.hideClass.popup))return!1;kn(e,n.showClass.popup),ht(e,n.hideClass.popup);const i=fn();return kn(i,n.showClass.backdrop),ht(i,n.hideClass.backdrop),Vw(t,e,n),!0};function pg(t){const e=Xr.swalPromiseReject.get(this);ra(this),e&&e(t)}const ra=t=>{t.isAwaitingPromise&&(delete t.isAwaitingPromise,Mt.innerParams.get(t)||t._destroy())},Hw=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),Vw=(t,e,n)=>{var i;const s=fn(),r=Jm(e);typeof n.willClose=="function"&&n.willClose(e),(i=Ve.eventEmitter)===null||i===void 0||i.emit("willClose",e),r?Gw(t,e,s,n.returnFocus,n.didClose):hg(t,s,n.returnFocus,n.didClose)},Gw=(t,e,n,i,s)=>{Ve.swalCloseEventFinishedCallback=hg.bind(null,t,n,i,s);const r=function(o){if(o.target===e){var a;(a=Ve.swalCloseEventFinishedCallback)===null||a===void 0||a.call(Ve),delete Ve.swalCloseEventFinishedCallback,e.removeEventListener("animationend",r),e.removeEventListener("transitionend",r)}};e.addEventListener("animationend",r),e.addEventListener("transitionend",r)},th=(t,e)=>{setTimeout(()=>{var n;typeof e=="function"&&e.bind(t.params)(),(n=Ve.eventEmitter)===null||n===void 0||n.emit("didClose"),t._destroy&&t._destroy()})},$r=t=>{let e=dt();if(e||new xn,e=dt(),!e)return;const n=no();Fl()?sn(eo()):Ww(e,t),Xt(n),e.setAttribute("data-loading","true"),e.setAttribute("aria-busy","true"),e.focus()},Ww=(t,e)=>{const n=na(),i=no();!n||!i||(!e&&gn(vi())&&(e=vi()),Xt(n),e&&(sn(e),i.setAttribute("data-button-to-replace",e.className),n.insertBefore(i,e)),ht([t,n],oe.loading))},Xw=(t,e)=>{e.input==="select"||e.input==="radio"?Kw(t,e):["text","email","number","tel","textarea"].some(n=>n===e.input)&&(gd(e.inputValue)||_d(e.inputValue))&&($r(vi()),Zw(t,e))},$w=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return qw(n);case"radio":return jw(n);case"file":return Yw(n);default:return e.inputAutoTrim?n.value.trim():n.value}},qw=t=>t.checked?1:0,jw=t=>t.checked?t.value:null,Yw=t=>t.files&&t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,Kw=(t,e)=>{const n=dt();if(!n)return;const i=s=>{e.input==="select"?Qw(n,ml(s),e):e.input==="radio"&&Jw(n,ml(s),e)};gd(e.inputOptions)||_d(e.inputOptions)?($r(vi()),ea(e.inputOptions).then(s=>{t.hideLoading(),i(s)})):typeof e.inputOptions=="object"?i(e.inputOptions):Qs(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},Zw=(t,e)=>{const n=t.getInput();n&&(sn(n),ea(e.inputValue).then(i=>{n.value=e.input==="number"?`${parseFloat(i)||0}`:`${i}`,Xt(n),n.focus(),t.hideLoading()}).catch(i=>{Qs(`Error in inputValue promise: ${i}`),n.value="",Xt(n),n.focus(),t.hideLoading()}))};function Qw(t,e,n){const i=us(t,oe.select);if(!i)return;const s=(r,o,a)=>{const l=document.createElement("option");l.value=a,Dn(l,o),l.selected=mg(a,n.inputValue),r.appendChild(l)};e.forEach(r=>{const o=r[0],a=r[1];if(Array.isArray(a)){const l=document.createElement("optgroup");l.label=o,l.disabled=!1,i.appendChild(l),a.forEach(c=>s(l,c[1],c[0]))}else s(i,a,o)}),i.focus()}function Jw(t,e,n){const i=us(t,oe.radio);if(!i)return;e.forEach(r=>{const o=r[0],a=r[1],l=document.createElement("input"),c=document.createElement("label");l.type="radio",l.name=oe.radio,l.value=o,mg(o,n.inputValue)&&(l.checked=!0);const u=document.createElement("span");Dn(u,a),u.className=oe.label,c.appendChild(l),c.appendChild(u),i.appendChild(c)});const s=i.querySelectorAll("input");s.length&&s[0].focus()}const ml=t=>{const e=[];return t instanceof Map?t.forEach((n,i)=>{let s=n;typeof s=="object"&&(s=ml(s)),e.push([i,s])}):Object.keys(t).forEach(n=>{let i=t[n];typeof i=="object"&&(i=ml(i)),e.push([n,i])}),e},mg=(t,e)=>!!e&&e.toString()===t.toString(),eb=t=>{const e=Mt.innerParams.get(t);t.disableButtons(),e.input?gg(t,"confirm"):Rd(t,!0)},tb=t=>{const e=Mt.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?gg(t,"deny"):Cd(t,!1)},nb=(t,e)=>{t.disableButtons(),e(io.cancel)},gg=(t,e)=>{const n=Mt.innerParams.get(t);if(!n.input){Qs(`The "input" parameter is needed to be set when using returnInputValueOn${md(e)}`);return}const i=t.getInput(),s=$w(t,n);n.inputValidator?ib(t,s,e):i&&!i.checkValidity()?(t.enableButtons(),t.showValidationMessage(n.validationMessage||i.validationMessage)):e==="deny"?Cd(t,s):Rd(t,s)},ib=(t,e,n)=>{const i=Mt.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>ea(i.inputValidator(e,i.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):n==="deny"?Cd(t,e):Rd(t,e)})},Cd=(t,e)=>{const n=Mt.innerParams.get(t||void 0);n.showLoaderOnDeny&&$r(Js()),n.preDeny?(t.isAwaitingPromise=!0,Promise.resolve().then(()=>ea(n.preDeny(e,n.validationMessage))).then(s=>{s===!1?(t.hideLoading(),ra(t)):t.close({isDenied:!0,value:typeof s>"u"?e:s})}).catch(s=>_g(t||void 0,s))):t.close({isDenied:!0,value:e})},nh=(t,e)=>{t.close({isConfirmed:!0,value:e})},_g=(t,e)=>{t.rejectPromise(e)},Rd=(t,e)=>{const n=Mt.innerParams.get(t||void 0);n.showLoaderOnConfirm&&$r(),n.preConfirm?(t.resetValidationMessage(),t.isAwaitingPromise=!0,Promise.resolve().then(()=>ea(n.preConfirm(e,n.validationMessage))).then(s=>{gn(Ol())||s===!1?(t.hideLoading(),ra(t)):nh(t,typeof s>"u"?e:s)}).catch(s=>_g(t||void 0,s))):nh(t,e)};function gl(){const t=Mt.innerParams.get(this);if(!t)return;const e=Mt.domCache.get(this);sn(e.loader),Fl()?t.icon&&Xt(eo()):sb(e),kn([e.popup,e.actions],oe.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const sb=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?Xt(e[0],"inline-block"):Dy()&&sn(t.actions)};function vg(){const t=Mt.innerParams.get(this),e=Mt.domCache.get(this);return e?Bl(e.popup,t.input):null}function xg(t,e,n){const i=Mt.domCache.get(t);e.forEach(s=>{i[s].disabled=n})}function yg(t,e){const n=dt();if(!(!n||!t))if(t.type==="radio"){const i=n.querySelectorAll(`[name="${oe.radio}"]`);for(let s=0;s<i.length;s++)i[s].disabled=e}else t.disabled=e}function wg(){xg(this,["confirmButton","denyButton","cancelButton"],!1)}function bg(){xg(this,["confirmButton","denyButton","cancelButton"],!0)}function Sg(){yg(this.getInput(),!1)}function Mg(){yg(this.getInput(),!0)}function Eg(t){const e=Mt.domCache.get(this),n=Mt.innerParams.get(this);Dn(e.validationMessage,t),e.validationMessage.className=oe["validation-message"],n.customClass&&n.customClass.validationMessage&&ht(e.validationMessage,n.customClass.validationMessage),Xt(e.validationMessage);const i=this.getInput();i&&(i.setAttribute("aria-invalid","true"),i.setAttribute("aria-describedby",oe["validation-message"]),Zm(i),ht(i,oe.inputerror))}function Tg(){const t=Mt.domCache.get(this);t.validationMessage&&sn(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),kn(e,oe.inputerror))}const Ar={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0,topLayer:!1},rb=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],ob={allowEnterKey:void 0},ab=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Ag=t=>Object.prototype.hasOwnProperty.call(Ar,t),Cg=t=>rb.indexOf(t)!==-1,Rg=t=>ob[t],lb=t=>{Ag(t)||dn(`Unknown parameter "${t}"`)},cb=t=>{ab.includes(t)&&dn(`The parameter "${t}" is incompatible with toasts`)},ub=t=>{const e=Rg(t);e&&qm(t,e)},Pg=t=>{t.backdrop===!1&&t.allowOutsideClick&&dn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),t.theme&&!["light","dark","auto","minimal","borderless","embed-iframe","bulma","bulma-light","bulma-dark"].includes(t.theme)&&dn(`Invalid theme "${t.theme}"`);for(const e in t)lb(e),t.toast&&cb(e),ub(e)};function Dg(t){const e=fn(),n=dt(),i=Mt.innerParams.get(this);if(!n||Hi(n,i.hideClass.popup)){dn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const s=db(t),r=Object.assign({},i,s);Pg(r),e.dataset.swal2Theme=r.theme,ag(this,r),Mt.innerParams.set(this,r),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const db=t=>{const e={};return Object.keys(t).forEach(n=>{Cg(n)?e[n]=t[n]:dn(`Invalid parameter to update: ${n}`)}),e};function Lg(){const t=Mt.domCache.get(this),e=Mt.innerParams.get(this);if(!e){Ig(this);return}t.popup&&Ve.swalCloseEventFinishedCallback&&(Ve.swalCloseEventFinishedCallback(),delete Ve.swalCloseEventFinishedCallback),typeof e.didDestroy=="function"&&e.didDestroy(),Ve.eventEmitter.emit("didDestroy"),fb(this)}const fb=t=>{Ig(t),delete t.params,delete Ve.keydownHandler,delete Ve.keydownTarget,delete Ve.currentInstance},Ig=t=>{t.isAwaitingPromise?(ac(Mt,t),t.isAwaitingPromise=!0):(ac(Xr,t),ac(Mt,t),delete t.isAwaitingPromise,delete t.disableButtons,delete t.enableButtons,delete t.getInput,delete t.disableInput,delete t.enableInput,delete t.hideLoading,delete t.disableLoading,delete t.showValidationMessage,delete t.resetValidationMessage,delete t.close,delete t.closePopup,delete t.closeModal,delete t.closeToast,delete t.rejectPromise,delete t.update,delete t._destroy)},ac=(t,e)=>{for(const n in t)t[n].delete(e)};var hb=Object.freeze({__proto__:null,_destroy:Lg,close:ds,closeModal:ds,closePopup:ds,closeToast:ds,disableButtons:bg,disableInput:Mg,disableLoading:gl,enableButtons:wg,enableInput:Sg,getInput:vg,handleAwaitingPromise:ra,hideLoading:gl,rejectPromise:pg,resetValidationMessage:Tg,showValidationMessage:Eg,update:Dg});const pb=(t,e,n)=>{t.toast?mb(t,e,n):(_b(e),vb(e),xb(t,e,n))},mb=(t,e,n)=>{e.popup.onclick=()=>{t&&(gb(t)||t.timer||t.input)||n(io.close)}},gb=t=>!!(t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton);let _l=!1;const _b=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=()=>{},e.target===t.container&&(_l=!0)}}},vb=t=>{t.container.onmousedown=e=>{e.target===t.container&&e.preventDefault(),t.popup.onmouseup=function(n){t.popup.onmouseup=()=>{},(n.target===t.popup||n.target instanceof HTMLElement&&t.popup.contains(n.target))&&(_l=!0)}}},xb=(t,e,n)=>{e.container.onclick=i=>{if(_l){_l=!1;return}i.target===e.container&&Ul(t.allowOutsideClick)&&n(io.backdrop)}},yb=t=>typeof t=="object"&&t.jquery,ih=t=>t instanceof Element||yb(t),wb=t=>{const e={};return typeof t[0]=="object"&&!ih(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,i)=>{const s=t[i];typeof s=="string"||ih(s)?e[n]=s:s!==void 0&&Qs(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof s}`)}),e};function bb(...t){return new this(...t)}function Sb(t){class e extends this{_main(i,s){return super._main(i,Object.assign({},t,s))}}return e}const Mb=()=>Ve.timeout&&Ve.timeout.getTimerLeft(),Ug=()=>{if(Ve.timeout)return Iy(),Ve.timeout.stop()},Og=()=>{if(Ve.timeout){const t=Ve.timeout.start();return Md(t),t}},Eb=()=>{const t=Ve.timeout;return t&&(t.running?Ug():Og())},Tb=t=>{if(Ve.timeout){const e=Ve.timeout.increase(t);return Md(e,!0),e}},Ab=()=>!!(Ve.timeout&&Ve.timeout.isRunning());let sh=!1;const su={};function Cb(t="data-swal-template"){su[t]=this,sh||(document.body.addEventListener("click",Rb),sh=!0)}const Rb=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in su){const i=e.getAttribute(n);if(i){su[n].fire({template:i});return}}};class Pb{constructor(){this.events={}}_getHandlersByEventName(e){return typeof this.events[e]>"u"&&(this.events[e]=[]),this.events[e]}on(e,n){const i=this._getHandlersByEventName(e);i.includes(n)||i.push(n)}once(e,n){const i=(...s)=>{this.removeListener(e,i),n.apply(this,s)};this.on(e,i)}emit(e,...n){this._getHandlersByEventName(e).forEach(i=>{try{i.apply(this,n)}catch(s){console.error(s)}})}removeListener(e,n){const i=this._getHandlersByEventName(e),s=i.indexOf(n);s>-1&&i.splice(s,1)}removeAllListeners(e){this.events[e]!==void 0&&(this.events[e].length=0)}reset(){this.events={}}}Ve.eventEmitter=new Pb;const Db=(t,e)=>{Ve.eventEmitter.on(t,e)},Lb=(t,e)=>{Ve.eventEmitter.once(t,e)},Ib=(t,e)=>{if(!t){Ve.eventEmitter.reset();return}e?Ve.eventEmitter.removeListener(t,e):Ve.eventEmitter.removeAllListeners(t)};var Ub=Object.freeze({__proto__:null,argsToParams:wb,bindClickHandler:Cb,clickCancel:ww,clickConfirm:lg,clickDeny:yw,enableLoading:$r,fire:bb,getActions:na,getCancelButton:to,getCloseButton:yd,getConfirmButton:vi,getContainer:fn,getDenyButton:Js,getFocusableElements:wd,getFooter:Km,getHtmlContainer:vd,getIcon:eo,getIconContent:Ty,getImage:Ym,getInputLabel:Ay,getLoader:no,getPopup:dt,getProgressSteps:xd,getTimerLeft:Mb,getTimerProgressBar:Nl,getTitle:jm,getValidationMessage:Ol,increaseTimer:Tb,isDeprecatedParameter:Rg,isLoading:Ry,isTimerRunning:Ab,isUpdatableParameter:Cg,isValidParameter:Ag,isVisible:xw,mixin:Sb,off:Ib,on:Db,once:Lb,resumeTimer:Og,showLoading:$r,stopTimer:Ug,toggleTimer:Eb});class Ob{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Ng=["swal-title","swal-html","swal-footer"],Nb=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return Wb(n),Object.assign(Fb(n),Bb(n),kb(n),zb(n),Hb(n),Vb(n),Gb(n,Ng))},Fb=t=>{const e={};return Array.from(t.querySelectorAll("swal-param")).forEach(i=>{qs(i,["name","value"]);const s=i.getAttribute("name"),r=i.getAttribute("value");!s||!r||(typeof Ar[s]=="boolean"?e[s]=r!=="false":typeof Ar[s]=="object"?e[s]=JSON.parse(r):e[s]=r)}),e},Bb=t=>{const e={};return Array.from(t.querySelectorAll("swal-function-param")).forEach(i=>{const s=i.getAttribute("name"),r=i.getAttribute("value");!s||!r||(e[s]=new Function(`return ${r}`)())}),e},kb=t=>{const e={};return Array.from(t.querySelectorAll("swal-button")).forEach(i=>{qs(i,["type","color","aria-label"]);const s=i.getAttribute("type");!s||!["confirm","cancel","deny"].includes(s)||(e[`${s}ButtonText`]=i.innerHTML,e[`show${md(s)}Button`]=!0,i.hasAttribute("color")&&(e[`${s}ButtonColor`]=i.getAttribute("color")),i.hasAttribute("aria-label")&&(e[`${s}ButtonAriaLabel`]=i.getAttribute("aria-label")))}),e},zb=t=>{const e={},n=t.querySelector("swal-image");return n&&(qs(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")||void 0),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")||void 0),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")||void 0),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt")||void 0)),e},Hb=t=>{const e={},n=t.querySelector("swal-icon");return n&&(qs(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},Vb=t=>{const e={},n=t.querySelector("swal-input");n&&(qs(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const i=Array.from(t.querySelectorAll("swal-input-option"));return i.length&&(e.inputOptions={},i.forEach(s=>{qs(s,["value"]);const r=s.getAttribute("value");if(!r)return;const o=s.innerHTML;e.inputOptions[r]=o})),e},Gb=(t,e)=>{const n={};for(const i in e){const s=e[i],r=t.querySelector(s);r&&(qs(r,[]),n[s.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},Wb=t=>{const e=Ng.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(t.children).forEach(n=>{const i=n.tagName.toLowerCase();e.includes(i)||dn(`Unrecognized element <${i}>`)})},qs=(t,e)=>{Array.from(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&dn([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},Fg=10,Xb=t=>{const e=fn(),n=dt();typeof t.willOpen=="function"&&t.willOpen(n),Ve.eventEmitter.emit("willOpen",n);const s=window.getComputedStyle(document.body).overflowY;jb(e,n,t),setTimeout(()=>{$b(e,n)},Fg),bd()&&(qb(e,t.scrollbarPadding,s),Rw()),!Fl()&&!Ve.previousActiveElement&&(Ve.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),Ve.eventEmitter.emit("didOpen",n),kn(e,oe["no-transition"])},vl=t=>{const e=dt();if(t.target!==e)return;const n=fn();e.removeEventListener("animationend",vl),e.removeEventListener("transitionend",vl),n.style.overflowY="auto"},$b=(t,e)=>{Jm(e)?(t.style.overflowY="hidden",e.addEventListener("animationend",vl),e.addEventListener("transitionend",vl)):t.style.overflowY="auto"},qb=(t,e,n)=>{Pw(),e&&n!=="hidden"&&Fw(n),setTimeout(()=>{t.scrollTop=0})},jb=(t,e,n)=>{ht(t,n.showClass.backdrop),n.animation?(e.style.setProperty("opacity","0","important"),Xt(e,"grid"),setTimeout(()=>{ht(e,n.showClass.popup),e.style.removeProperty("opacity")},Fg)):Xt(e,"grid"),ht([document.documentElement,document.body],oe.shown),n.heightAuto&&n.backdrop&&!n.toast&&ht([document.documentElement,document.body],oe["height-auto"])};var rh={email:(t,e)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function Yb(t){t.inputValidator||(t.input==="email"&&(t.inputValidator=rh.email),t.input==="url"&&(t.inputValidator=rh.url))}function Kb(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(dn('Target parameter is not valid, defaulting to "body"'),t.target="body")}function Zb(t){Yb(t),t.showLoaderOnConfirm&&!t.preConfirm&&dn(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Kb(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),Hy(t)}let ri;var va=new WeakMap;class Ot{constructor(...e){if(vy(this,va,void 0),typeof window>"u")return;ri=this;const n=Object.freeze(this.constructor.argsToParams(e));this.params=n,this.isAwaitingPromise=!1,xy(va,this,this._main(ri.params))}_main(e,n={}){if(Pg(Object.assign({},n,e)),Ve.currentInstance){const r=Xr.swalPromiseResolve.get(Ve.currentInstance),{isAwaitingPromise:o}=Ve.currentInstance;Ve.currentInstance._destroy(),o||r({isDismissed:!0}),bd()&&dg()}Ve.currentInstance=ri;const i=Jb(e,n);Zb(i),Object.freeze(i),Ve.timeout&&(Ve.timeout.stop(),delete Ve.timeout),clearTimeout(Ve.restoreFocusTimeout);const s=eS(ri);return ag(ri,i),Mt.innerParams.set(ri,i),Qb(ri,s,i)}then(e){return Yf(va,this).then(e)}finally(e){return Yf(va,this).finally(e)}}const Qb=(t,e,n)=>new Promise((i,s)=>{const r=o=>{t.close({isDismissed:!0,dismiss:o})};Xr.swalPromiseResolve.set(t,i),Xr.swalPromiseReject.set(t,s),e.confirmButton.onclick=()=>{eb(t)},e.denyButton.onclick=()=>{tb(t)},e.cancelButton.onclick=()=>{nb(t,r)},e.closeButton.onclick=()=>{r(io.close)},pb(n,e,r),bw(Ve,n,r),Xw(t,n),Xb(n),tS(Ve,n,r),nS(e,n),setTimeout(()=>{e.container.scrollTop=0})}),Jb=(t,e)=>{const n=Nb(t),i=Object.assign({},Ar,e,n,t);return i.showClass=Object.assign({},Ar.showClass,i.showClass),i.hideClass=Object.assign({},Ar.hideClass,i.hideClass),i.animation===!1&&(i.showClass={backdrop:"swal2-noanimation"},i.hideClass={}),i},eS=t=>{const e={popup:dt(),container:fn(),actions:na(),confirmButton:vi(),denyButton:Js(),cancelButton:to(),loader:no(),closeButton:yd(),validationMessage:Ol(),progressSteps:xd()};return Mt.domCache.set(t,e),e},tS=(t,e,n)=>{const i=Nl();sn(i),e.timer&&(t.timeout=new Ob(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(Xt(i),Rn(i,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&Md(e.timer)})))},nS=(t,e)=>{if(!e.toast){if(!Ul(e.allowEnterKey)){qm("allowEnterKey"),rS();return}iS(t)||sS(t,e)||iu(-1,1)}},iS=t=>{const e=Array.from(t.popup.querySelectorAll("[autofocus]"));for(const n of e)if(n instanceof HTMLElement&&gn(n))return n.focus(),!0;return!1},sS=(t,e)=>e.focusDeny&&gn(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&gn(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&gn(t.confirmButton)?(t.confirmButton.focus(),!0):!1,rS=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const t=new Date,e=localStorage.getItem("swal-initiation");e?(t.getTime()-Date.parse(e))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const n=document.createElement("audio");n.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",n.loop=!0,document.body.appendChild(n),setTimeout(()=>{n.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${t}`)}Ot.prototype.disableButtons=bg;Ot.prototype.enableButtons=wg;Ot.prototype.getInput=vg;Ot.prototype.disableInput=Mg;Ot.prototype.enableInput=Sg;Ot.prototype.hideLoading=gl;Ot.prototype.disableLoading=gl;Ot.prototype.showValidationMessage=Eg;Ot.prototype.resetValidationMessage=Tg;Ot.prototype.close=ds;Ot.prototype.closePopup=ds;Ot.prototype.closeModal=ds;Ot.prototype.closeToast=ds;Ot.prototype.rejectPromise=pg;Ot.prototype.update=Dg;Ot.prototype._destroy=Lg;Object.assign(Ot,Ub);Object.keys(hb).forEach(t=>{Ot[t]=function(...e){return ri&&ri[t]?ri[t](...e):null}});Ot.DismissReason=io;Ot.version="11.22.3";const xn=Ot;xn.default=xn;typeof document<"u"&&function(t,e){var n=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=e);else try{n.innerHTML=e}catch{n.innerText=e}}(document,':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.1s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px $swal2-outline-color;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');const ii=(t="Success!",e="Operation completed successfully")=>xn.fire({icon:"success",title:t,text:e,confirmButtonText:"OK",confirmButtonColor:"#10b981"}),Rt=(t="Error!",e="Something went wrong")=>xn.fire({icon:"error",title:t,text:e,confirmButtonText:"OK",confirmButtonColor:"#ef4444"}),MP=(t="Warning!",e="Please check your input")=>xn.fire({icon:"warning",title:t,text:e,confirmButtonText:"OK",confirmButtonColor:"#f59e0b"}),fo=(t="Info",e="Here is some information")=>xn.fire({icon:"info",title:t,text:e,confirmButtonText:"OK",confirmButtonColor:"#3b82f6"}),lc=(t="Are you sure?",e="This action cannot be undone")=>xn.fire({title:t,text:e,icon:"question",showCancelButton:!0,confirmButtonColor:"#10b981",cancelButtonColor:"#6b7280",confirmButtonText:"بله، ادامه بده",cancelButtonText:"لغو"}),EP=t=>xn.fire({confirmButtonColor:"#10b981",cancelButtonColor:"#6b7280",...t}),TP=(t="Enter value",e="Value",n="Type here...")=>xn.fire({title:t,inputLabel:e,input:"text",inputPlaceholder:n,showCancelButton:!0,confirmButtonColor:"#10b981",cancelButtonColor:"#6b7280",confirmButtonText:"ثبت",cancelButtonText:"لغو",inputValidator:i=>{if(!i)return"You need to write something!"}}),AP=(t="Loading...")=>{xn.fire({title:t,allowOutsideClick:!1,didOpen:()=>{xn.showLoading()}})},CP=()=>{xn.close()},RP=(t,e="success",n="top-end")=>{xn.mixin({toast:!0,position:n,showConfirmButton:!1,timer:3e3,timerProgressBar:!0}).fire({icon:e,title:t})},oS={class:"editor-container h-screen overflow-auto"},aS={class:"controls-panel"},lS={class:"controls-content"},cS={class:"dimensions-section"},uS={class:"dimension-inputs"},dS={class:"dimension-label"},fS={class:"dimension-label"},hS={class:"cell-size-section !mt-4"},pS={class:"dimension-inputs"},mS={class:"dimension-label"},gS={class:"dimension-label"},_S={class:"direction-section"},vS={class:"direction-toggle"},xS={class:"color-section"},yS={class:"color-picker-container"},wS={class:"color-value"},bS={class:"recent-colors-header mt-3!"},SS={class:"recent-colors-grid"},MS=["title","onClick"],ES=["onClick"],TS={class:"mode-section"},AS={class:"mode-toggle"},CS={key:0,class:"image-section"},RS={class:"image-picker-container"},PS={class:"available-images-grid"},DS=["onClick"],LS=["src","alt"],IS={class:"image-name"},US={key:0,class:"recent-images-section"},OS={class:"recent-images-grid"},NS=["onClick"],FS=["src","alt"],BS=["onClick"],kS={class:"tools-section"},zS={class:"tools-grid"},HS=["disabled"],VS=["disabled"],GS=["disabled"],WS={class:"background-color-section !mt-4"},XS={class:"background-mode-toggle"},$S={key:0,class:"background-color-controls"},qS={key:1,class:"background-image-controls"},jS={class:"background-image-picker"},YS={class:"background-images-grid"},KS=["onClick"],ZS=["src","alt"],QS={class:"background-image-name"},JS=["disabled"],eM={class:"export-section"},tM={class:"grid grid-cols-2 gap-2"},nM={class:"image-section"},iM={class:"upload-section grid grid-cols-2 gap-2"},sM={class:"upload-label"},rM={class:"upload-label"},oM={key:0,class:"image-preview"},aM=["src"],lM={class:"grid-wrapper"},cM=["onClick"],uM={__name:"GridEditor",emits:["update-grid"],setup(t,{emit:e}){const n=e,i=Ke(16),s=Ke(80),r=Ke(15),o=Ke(15),a=Ke("#ff0000"),l=Ke([]),c=Ke(null),u=Ke(!0),d=Ke(null),f=Ke("color"),h=Ke(null),_=Ke([]),v=Ke([]),m=Ke([]);function p(){try{const O={grid:m.value,rows:i.value,cols:s.value,recentColors:l.value,recentImages:_.value,timestamp:new Date().toISOString()};localStorage.setItem("gridEditorData",JSON.stringify(O)),c.value=O.timestamp,ii("ذخیره شد","گرید با موفقیت ذخیره شد")}catch(O){Rt("خطا در ذخیره","خطا در ذخیره گرید: "+O.message),console.error("Error saving grid:",O)}}function A(){try{const O=localStorage.getItem("gridEditorData");if(O){const C=JSON.parse(O);return C.grid&&Array.isArray(C.grid)&&C.rows&&C.cols&&C.grid.length===C.rows*C.cols?(i.value=C.rows,s.value=C.cols,m.value=[...C.grid],C.recentColors&&Array.isArray(C.recentColors)&&(l.value=[...C.recentColors]),C.recentImages&&Array.isArray(C.recentImages)&&(_.value=[...C.recentImages]),c.value=C.timestamp,$.stacks=[],$.index=-1,j(),n("update-grid",Le()),!0):(localStorage.removeItem("gridEditorData"),fo("اطلاعات","داده‌های ذخیره شده نامعتبر بودند و حذف شدند"),!1)}return!1}catch(O){return Rt("خطا در بارگذاری","خطا در بارگذاری گرید: "+O.message),console.error("Error loading grid:",O),localStorage.removeItem("gridEditorData"),!1}}Jr(()=>{A(),E()});function E(){const O=["310.jpg","1130.jpg","1135.jpg","2116.jpg","2131.jpg","2132.jpg","725.jpg","877.jpg","f111.jpg","f222.jpg","f333.jpg","f444.jpg","f555.jpg","f666.jpg","f777.jpg","f888.jpg","f999.jpg"];v.value=O.map(C=>({name:C,url:`/miyuki-beads-designer/beads/${C}`,displayName:C.replace(".jpg","")}))}const w=Ke([]),L=Ke([]),R=Ke({width:0,height:0}),U=Ke({x:0,y:0}),I=Ke(!1),y=Ke("paint");let b=!1,P=null,Q=!1;const $=Yo({stacks:[],index:-1});function j(){$.stacks=$.stacks.slice(0,$.index+1),$.stacks.push([...m.value]),$.index++}function pe(){$.index>0&&($.index--,m.value=[...$.stacks[$.index]])}function J(){$.index<$.stacks.length-1&&($.index++,m.value=[...$.stacks[$.index]])}j();function ge(O){const C=O.target.files[0];if(C){const z=new FileReader;z.onload=fe=>{try{const D=fe.target.result.trim(),te=JSON.parse(D);if(te.grid&&te.rows&&te.cols){const{grid:ae,rows:ve,cols:re}=te;Array.isArray(ae)&&ae.every(X=>typeof X=="string"&&(X.match(/^#[0-9A-Fa-f]{6}$/)||X.startsWith("/miyuki-beads-designer/beads/")))?ae.length===ve*re?(i.value=ve,s.value=re,Zo(()=>{m.value=[...ae],j(),ii("بارگذاری شد",`گرید ${ve}×${re} با موفقیت بارگذاری شد`)})):Rt("خطا در ابعاد",`تعداد سلول‌ها (${ae.length}) با ابعاد اعلام شده (${ve}×${re}) مطابقت ندارد`):Rt("خطا در فرمت فایل","فایل باید شامل آرایه‌ای معتبر از رنگ‌ها یا تصاویر باشد")}else if(Array.isArray(te)){const ae=te;ae.every(ve=>typeof ve=="string"&&(ve.match(/^#[0-9A-Fa-f]{6}$/)||ve.startsWith("/miyuki-beads-designer/beads/")))?ae.length===i.value*s.value?(m.value=[...ae],j(),ii("بارگذاری شد",`گرید با ابعاد فعلی (${i.value}×${s.value}) بارگذاری شد`)):Rt("خطا در ابعاد",`تعداد سلول‌ها (${ae.length}) با ابعاد فعلی (${i.value}×${s.value}) مطابقت ندارد. لطفاً ابعاد را تنظیم کنید یا از فایل با فرمت جدید استفاده کنید.`):Rt("خطا در فرمت فایل","فایل باید شامل آرایه‌ای معتبر از رنگ‌ها یا تصاویر باشد")}else Rt("خطا در فرمت فایل","فرمت فایل نامعتبر است. فایل باید شامل آرایه‌ای از رنگ‌ها/تصاویر یا آبجکتی با grid، rows و cols باشد.")}catch(D){Rt("خطا در خواندن فایل","خطا در خواندن فایل: "+D.message),console.error("Error parsing text file:",D)}},z.readAsText(C)}}Qn([i,s],()=>{const O=i.value*s.value;m.value.length!==O&&(m.value=Array(O).fill("#ffffff"),L.value=[],R.value={width:0,height:0},w.value=[],I.value=!1,j())}),Qn(m,()=>{setTimeout(()=>{try{const O={grid:m.value,rows:i.value,cols:s.value,recentColors:l.value,recentImages:_.value,timestamp:new Date().toISOString()};localStorage.setItem("gridEditorData",JSON.stringify(O)),c.value=O.timestamp}catch(O){console.error("Error auto-saving grid:",O)}},1e3)},{deep:!0});function q(O){y.value=O,w.value=[],O!=="paste"&&(I.value=!1)}function Ee(){return L.value&&L.value.length>0&&R.value.width>0}function Ae(O){b=!0;const C=T(O);y.value==="paint"?at(C):y.value==="fill"?He(C,m.value[C],a.value):y.value==="select"&&(P=C,w.value=[C],Q=!0)}function Oe(){b&&j(),b=!1,P=null}function ke(O){if(!b)return;const C=T(O);y.value==="paint"?at(C):y.value==="select"&&Q&&(w.value=g(P,C))}function at(O){f.value==="color"?(m.value[O]=a.value,et(a.value)):f.value==="image"&&h.value&&(m.value[O]=h.value.url,le(h.value))}function et(O){const C=l.value.indexOf(O);C>-1&&l.value.splice(C,1),l.value.unshift(O),l.value.length>10&&(l.value=l.value.slice(0,10))}function le(O){const C=_.value.findIndex(z=>z.url===O.url);C>-1&&_.value.splice(C,1),_.value.unshift(O),_.value.length>10&&(_.value=_.value.slice(0,10))}function Te(O){h.value=O,le(O)}function B(O){const C=_.value.findIndex(z=>z.url===O.url);C>-1&&_.value.splice(C,1)}async function he(){(await lc("پاک کردن تصاویر","آیا می‌خواهید تمام تصاویر اخیر پاک شوند؟")).isConfirmed&&(_.value=[])}function ue(O){const C=l.value.indexOf(O);C>-1&&l.value.splice(C,1)}async function xe(){(await lc("پاک کردن رنگ‌ها","آیا می‌خواهید تمام رنگ‌های اخیر پاک شوند؟")).isConfirmed&&(l.value=[])}function He(O,C,z){if(C===z)return;const fe=[O],D=new Set;for(;fe.length;){const te=fe.pop();if(D.has(te)||m.value[te]!==C)continue;D.add(te),m.value[te]=z;const ae=te%i.value,ve=Math.floor(te/i.value);if(ae>0){const re=te-1;!D.has(re)&&m.value[re]===C&&fe.push(re)}if(ae<i.value-1){const re=te+1;!D.has(re)&&m.value[re]===C&&fe.push(re)}if(ve>0){const re=te-i.value;!D.has(re)&&m.value[re]===C&&fe.push(re)}if(ve<s.value-1){const re=te+i.value;!D.has(re)&&m.value[re]===C&&fe.push(re)}}et(z)}function T(O){const C=O.target;return Array.from(C.parentNode.children).indexOf(C)}function g(O,C){const z=O%i.value,fe=Math.floor(O/i.value),D=C%i.value,te=Math.floor(C/i.value),ae=Math.min(z,D),ve=Math.max(z,D),re=Math.min(fe,te),X=Math.max(fe,te),Se=[];for(let Fe=re;Fe<=X;Fe++)for(let Je=ae;Je<=ve;Je++){const it=Fe*i.value+Je;it>=0&&it<m.value.length&&Se.push(it)}return Se}function k(O){if(y.value==="paint")at(O),j();else if(y.value==="fill")He(O,m.value[O],a.value),j();else if(y.value==="paste"&&I.value){const C=O%i.value,z=Math.floor(O/i.value);U.value={x:C,y:z},S()}}function G(){if(w.value.length===0){Rt("خطا","ابتدا یک ناحیه انتخاب کنید");return}const O=i.value,C=Math.min(...w.value.map(ve=>ve%O)),z=Math.max(...w.value.map(ve=>ve%O)),fe=Math.min(...w.value.map(ve=>Math.floor(ve/O))),D=Math.max(...w.value.map(ve=>Math.floor(ve/O))),te=z-C+1,ae=D-fe+1;R.value={width:te,height:ae},L.value=[];for(let ve=0;ve<ae;ve++){const re=[];for(let X=0;X<te;X++){const Se=(fe+ve)*O+(C+X);re.push(m.value[Se])}L.value.push(re)}}function se(){if(w.value.length===0){Rt("خطا","ابتدا یک ناحیه انتخاب کنید");return}G(),w.value.forEach(O=>m.value[O]="#ffffff"),j()}function W(){if(!Ee()){Rt("خطا","هیچ چیزی برای چسباندن وجود ندارد");return}let O=0,C=0;if(w.value.length>0){const z=i.value;O=Math.min(...w.value.map(fe=>fe%z)),C=Math.min(...w.value.map(fe=>Math.floor(fe/z)))}else O=Math.floor((i.value-R.value.width)/2),C=Math.floor((s.value-R.value.height)/2);for(let z=0;z<R.value.height;z++)for(let fe=0;fe<R.value.width;fe++){const D=O+fe,te=C+z;if(D>=0&&D<i.value&&te>=0&&te<s.value){const ae=te*i.value+D;L.value[z]&&L.value[z][fe]&&(m.value[ae]=L.value[z][fe])}}j()}function we(){w.value=[],Q=!1}function ee(){if(w.value.length===0){Rt("خطا","ابتدا یک ناحیه انتخاب کنید");return}try{const O=i.value,C=Math.min(...w.value.map(X=>X%O)),z=Math.max(...w.value.map(X=>X%O)),fe=Math.min(...w.value.map(X=>Math.floor(X/O))),D=Math.max(...w.value.map(X=>Math.floor(X/O))),te=z-C+1,ae=D-fe+1,ve=[];for(let X=0;X<ae;X++){const Se=[];for(let Fe=0;Fe<te;Fe++){const Je=(fe+X)*O+(C+Fe);w.value.includes(Je)?Se.push(m.value[Je]):Se.push("#ffffff")}ve.push(Se)}const re=ve.map(X=>X.reverse());for(let X=0;X<ae;X++)for(let Se=0;Se<te;Se++){const Fe=(fe+X)*O+(C+Se);w.value.includes(Fe)&&(m.value[Fe]=re[X][Se])}j(),ii("آینه شد","طرح انتخاب شده با موفقیت آینه شد")}catch(O){Rt("خطا در آینه کردن","خطا در آینه کردن طرح: "+O.message),console.error("Error mirroring selection:",O)}}function de(){if(w.value.length===0){Rt("خطا","ابتدا یک ناحیه انتخاب کنید");return}try{const O=i.value,C=Math.min(...w.value.map(X=>X%O)),z=Math.max(...w.value.map(X=>X%O)),fe=Math.min(...w.value.map(X=>Math.floor(X/O))),D=Math.max(...w.value.map(X=>Math.floor(X/O))),te=z-C+1,ae=D-fe+1,ve=[];for(let X=0;X<ae;X++){const Se=[];for(let Fe=0;Fe<te;Fe++){const Je=(fe+X)*O+(C+Fe);w.value.includes(Je)?Se.push(m.value[Je]):Se.push("#ffffff")}ve.push(Se)}const re=ve.reverse();for(let X=0;X<ae;X++)for(let Se=0;Se<te;Se++){const Fe=(fe+X)*O+(C+Se);w.value.includes(Fe)&&(m.value[Fe]=re[X][Se])}j(),ii("آینه عمودی شد","طرح انتخاب شده با موفقیت به صورت عمودی آینه شد")}catch(O){Rt("خطا در آینه عمودی","خطا در آینه عمودی کردن طرح: "+O.message),console.error("Error vertical mirroring selection:",O)}}function _e(){if(!Ee()){Rt("خطا","هیچ چیزی برای چسباندن وجود ندارد");return}const O=Math.floor((i.value-R.value.width)/2),C=Math.floor((s.value-R.value.height)/2);for(let z=0;z<R.value.height;z++)for(let fe=0;fe<R.value.width;fe++){const D=O+fe,te=C+z;if(D>=0&&D<i.value&&te>=0&&te<s.value){const ae=te*i.value+D;L.value[z]&&L.value[z][fe]&&(m.value[ae]=L.value[z][fe])}}j()}function De(){if(!Ee()){Rt("خطا","هیچ چیزی برای چسباندن وجود ندارد");return}I.value=!0,y.value="paste",w.value=[],fo("انتخاب موقعیت","حالا روی صفحه کلیک کنید تا موقعیت چسباندن را انتخاب کنید")}function S(){if(!Ee()){Rt("خطا","هیچ چیزی برای چسباندن وجود ندارد");return}for(let O=0;O<R.value.height;O++)for(let C=0;C<R.value.width;C++){const z=U.value.x+C,fe=U.value.y+O;if(z>=0&&z<i.value&&fe>=0&&fe<s.value){const D=fe*i.value+z;L.value[O]&&L.value[O][C]&&(m.value[D]=L.value[O][C])}}j(),I.value=!1,y.value="paint"}function x(){I.value=!1,y.value="paint",fo("لغو شد","حالت چسباندن لغو شد")}async function F(O,C,z,fe,D,te){if(te.startsWith("/miyuki-beads-designer/beads/"))try{const ae=new Image;ae.crossOrigin="anonymous",await new Promise((ve,re)=>{ae.onload=ve,ae.onerror=re,ae.src=te}),O.drawImage(ae,C,z,fe,D)}catch(ae){console.warn("Failed to load image:",te,ae),O.fillStyle="#cccccc",O.fillRect(C,z,fe,D)}else O.fillStyle=te,O.fillRect(C,z,fe,D)}async function Y(){try{fo("در حال پردازش...","لطفاً صبر کنید، در حال ایجاد عکس...");const O=document.createElement("canvas"),C=O.getContext("2d"),z=20,fe=i.value*r.value+z*2,D=s.value*o.value+z*2;O.width=fe,O.height=D,C.fillStyle="#ffffff",C.fillRect(0,0,fe,D);for(let te=0;te<s.value;te++)for(let ae=0;ae<i.value;ae++){const ve=te*i.value+ae,re=m.value[ve];if(re){const X=z+ae*r.value,Se=z+te*o.value;await F(C,X,Se,r.value,o.value,re),C.strokeStyle="#e0e0e0",C.lineWidth=.5,C.strokeRect(X,Se,r.value,o.value)}}C.fillStyle="#000000",C.font="16px Arial",C.textAlign="center",C.fillText(`Grid: ${i.value}×${s.value}`,fe/2,z/2+10),O.toBlob(te=>{const ae=URL.createObjectURL(te),ve=document.createElement("a");ve.href=ae,ve.download=`grid_${i.value}x${s.value}_${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.png`,document.body.appendChild(ve),ve.click(),document.body.removeChild(ve),URL.revokeObjectURL(ae),ii("موفقیت","عکس با موفقیت دانلود شد!")},"image/png")}catch(O){Rt("خطا در خروجی","خطا در ایجاد عکس: "+O.message),console.error("Error exporting grid as image:",O)}}async function ce(){try{fo("در حال پردازش...","لطفاً صبر کنید، در حال ایجاد عکس HD...");const O=document.createElement("canvas"),C=O.getContext("2d"),z=r.value*2,fe=o.value*2,D=40,te=i.value*z+D*2,ae=s.value*fe+D*2;O.width=te,O.height=ae,C.fillStyle="#ffffff",C.fillRect(0,0,te,ae);for(let re=0;re<s.value;re++)for(let X=0;X<i.value;X++){const Se=re*i.value+X,Fe=m.value[Se];if(Fe){const Je=D+X*z,it=D+re*fe;await F(C,Je,it,z,fe,Fe),C.strokeStyle="#d0d0d0",C.lineWidth=1,C.strokeRect(Je,it,z,fe)}}C.fillStyle="#000000",C.font="bold 24px Arial",C.textAlign="center",C.fillText(`Grid: ${i.value}×${s.value}`,te/2,D/2+20),C.font="16px Arial",C.fillStyle="#666666";const ve=new Date().toLocaleString("fa-IR");C.fillText(ve,te/2,ae-D/2),O.toBlob(re=>{const X=URL.createObjectURL(re),Se=document.createElement("a");Se.href=X,Se.download=`grid_HD_${i.value}x${s.value}_${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.png`,document.body.appendChild(Se),Se.click(),document.body.removeChild(Se),URL.revokeObjectURL(X),ii("موفقیت","عکس HD با موفقیت دانلود شد!")},"image/png",1)}catch(O){Rt("خطا در خروجی","خطا در ایجاد عکس HD: "+O.message),console.error("Error exporting grid as high quality image:",O)}}function K(){try{const O={grid:m.value,rows:i.value,cols:s.value,timestamp:new Date().toISOString()},C=JSON.stringify(O,null,2),z=new Blob([C],{type:"text/plain;charset=utf-8"}),fe=URL.createObjectURL(z),D=document.createElement("a");D.href=fe,D.download=`grid_${i.value}x${s.value}_${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.txt`,document.body.appendChild(D),D.click(),document.body.removeChild(D),URL.revokeObjectURL(fe),ii("موفقیت","فایل TXT با موفقیت دانلود شد!")}catch(O){Rt("خطا در خروجی","خطا در ایجاد فایل TXT: "+O.message),console.error("Error exporting grid as TXT:",O)}}function Le(){const O=[];for(let C=0;C<s.value;C++){const z=[];for(let fe=0;fe<i.value;fe++)z.push(m.value[C*i.value+fe]);O.push(z)}return O}function be(O){const C=O.target.files[0];d.value=URL.createObjectURL(C)}const Ie=Ke("#ffffff"),Ce=Ke("color"),ye=Ke(null);async function Re(){let O,C;if(Ce.value==="color")O=Ie.value,C=`آیا می‌خواهید تمام مهره‌ها به رنگ ${O} تغییر یابند؟ این عملیات غیرقابل برگشت است.`;else if(Ce.value==="image"&&ye.value)O=ye.value.url,C=`آیا می‌خواهید تمام مهره‌ها به تصویر ${ye.value.displayName} تغییر یابند؟ این عملیات غیرقابل برگشت است.`;else{Rt("خطا","لطفاً یک رنگ یا تصویر انتخاب کنید");return}if((await lc("تغییر تمام مهره‌ها",C)).isConfirmed){const fe=i.value*s.value;for(let D=0;D<fe;D++)m.value[D]=O;j(),Ce.value==="color"?(et(O),ii("تغییر رنگ",`تمام مهره‌ها به رنگ ${O} تغییر یافتند`)):(le(ye.value),ii("تغییر تصویر",`تمام مهره‌ها به تصویر ${ye.value.displayName} تغییر یافتند`))}}return(O,C)=>(ot(),ft("div",oS,[N("div",aS,[C[32]||(C[32]=N("div",{class:"controls-header"},[N("h3",{class:"mb-4 text-lg font-bold text-gray-800"},"🎨 ابزارهای طراحی")],-1)),N("div",lS,[N("div",cS,[C[22]||(C[22]=N("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 📐 ابعاد شبکه ",-1)),N("div",uS,[N("label",dS,[C[17]||(C[17]=N("span",{class:"dimension-text"},"ردیف‌ها:",-1)),Li(N("input",{"onUpdate:modelValue":C[0]||(C[0]=z=>i.value=z),type:"number",min:"1",class:"dimension-input"},null,512),[[es,i.value,void 0,{number:!0}]])]),N("label",fS,[C[18]||(C[18]=N("span",{class:"dimension-text"},"ستون‌ها:",-1)),Li(N("input",{"onUpdate:modelValue":C[1]||(C[1]=z=>s.value=z),type:"number",min:"1",class:"dimension-input"},null,512),[[es,s.value,void 0,{number:!0}]])])]),N("div",hS,[C[21]||(C[21]=N("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 📏 اندازه سلول ",-1)),N("div",pS,[N("label",mS,[C[19]||(C[19]=N("span",{class:"dimension-text"},"عرض:",-1)),Li(N("input",{"onUpdate:modelValue":C[2]||(C[2]=z=>r.value=z),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[es,r.value,void 0,{number:!0}]])]),N("label",gS,[C[20]||(C[20]=N("span",{class:"dimension-text"},"ارتفاع:",-1)),Li(N("input",{"onUpdate:modelValue":C[3]||(C[3]=z=>o.value=z),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[es,o.value,void 0,{number:!0}]])])])])]),N("div",_S,[C[23]||(C[23]=N("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🔄 جهت ",-1)),N("div",vS,[N("button",{class:$t(["direction-btn",{active:u.value}]),onClick:C[4]||(C[4]=z=>u.value=!u.value)},Dt(u.value?"عمودی":"افقی"),3)])]),N("div",xS,[C[25]||(C[25]=N("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🎨 انتخاب رنگ ",-1)),N("div",yS,[Li(N("input",{"onUpdate:modelValue":C[5]||(C[5]=z=>a.value=z),type:"color",class:"color-picker"},null,512),[[es,a.value]]),N("span",wS,Dt(a.value),1)]),N("div",bS,[C[24]||(C[24]=N("h4",{class:"text-sm font-semibold text-gray-700"},"🔄 رنگ‌های اخیر",-1)),l.value.length>0?(ot(),ft("button",{key:0,class:"clear-colors-btn",title:"پاک کردن تمام رنگ‌ها",onClick:xe}," 🗑️ پاک کردن ")):$n("",!0)]),N("div",SS,[(ot(!0),ft(Gt,null,Ni(l.value,z=>(ot(),ft("div",{key:z,class:"color-swatch",style:qn({backgroundColor:z}),title:z,onClick:fe=>a.value=z},[N("button",{class:"remove-color-btn",onClick:Cf(fe=>ue(z),["stop"])}," × ",8,ES)],12,MS))),128))])]),N("div",TS,[C[26]||(C[26]=N("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🎨 حالت طراحی ",-1)),N("div",AS,[N("button",{class:$t(["mode-btn",{active:f.value==="color"}]),onClick:C[6]||(C[6]=z=>f.value="color")}," 🎨 رنگ ",2),N("button",{class:$t(["mode-btn",{active:f.value==="image"}]),onClick:C[7]||(C[7]=z=>f.value="image")}," 🖼️ تصویر ",2)])]),f.value==="image"?(ot(),ft("div",CS,[C[28]||(C[28]=N("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🖼️ انتخاب تصویر مهره ",-1)),N("div",RS,[N("div",PS,[(ot(!0),ft(Gt,null,Ni(v.value,z=>{var fe;return ot(),ft("div",{key:z.name,class:$t(["image-item",{selected:((fe=h.value)==null?void 0:fe.url)===z.url}]),onClick:D=>Te(z)},[N("img",{src:z.url,alt:z.displayName,class:"bead-image"},null,8,LS),N("span",IS,Dt(z.displayName),1)],10,DS)}),128))])]),_.value.length>0?(ot(),ft("div",US,[N("div",{class:"recent-images-header"},[C[27]||(C[27]=N("h4",{class:"text-sm font-semibold text-gray-700"},"🔄 تصاویر اخیر",-1)),N("button",{class:"clear-images-btn",title:"پاک کردن تمام تصاویر",onClick:he}," 🗑️ پاک کردن ")]),N("div",OS,[(ot(!0),ft(Gt,null,Ni(_.value,z=>{var fe;return ot(),ft("div",{key:z.url,class:$t(["recent-image-item",{selected:((fe=h.value)==null?void 0:fe.url)===z.url}]),onClick:D=>Te(z)},[N("img",{src:z.url,alt:z.displayName,class:"recent-bead-image"},null,8,FS),N("button",{class:"remove-image-btn",onClick:Cf(D=>B(z),["stop"])}," × ",8,BS)],10,NS)}),128))])])):$n("",!0)])):$n("",!0),N("div",kS,[C[30]||(C[30]=N("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"🛠️ ابزارها",-1)),N("div",zS,[N("button",{class:$t(["tool-btn primary",{active:y.value==="paint"}]),onClick:C[8]||(C[8]=z=>q("paint"))}," 🖌️ Paint ",2),N("button",{class:$t(["tool-btn primary",{active:y.value==="fill"}]),onClick:C[9]||(C[9]=z=>q("fill"))}," 🪣 Fill ",2),N("button",{class:$t(["tool-btn secondary",{active:y.value==="select"}]),onClick:C[10]||(C[10]=z=>q("select"))}," 📐 Select ",2),N("button",{class:"tool-btn secondary",onClick:G}," 📋 Copy "),N("button",{class:"tool-btn secondary",onClick:se}," ✂️ Cut "),N("button",{class:"tool-btn secondary",onClick:W}," 📥 Paste "),N("button",{class:"tool-btn secondary",onClick:_e}," 📍 Paste at Center "),N("button",{class:"tool-btn secondary",disabled:!Ee(),onClick:De}," 🎯 Select Paste Position ",8,HS),I.value?(ot(),ft("button",{key:0,class:"tool-btn danger",onClick:x}," ❌ Cancel Paste ")):$n("",!0),N("button",{class:"tool-btn secondary",onClick:we}," 🗑️ Clear Selection "),N("button",{class:"tool-btn secondary",disabled:w.value.length===0,onClick:ee}," 🔄 Mirror Selection ",8,VS),N("button",{class:"tool-btn secondary",disabled:w.value.length===0,onClick:de}," ↕️ Mirror Selection Vertical ",8,GS),N("button",{class:"tool-btn secondary",onClick:pe}," ↩️ Undo "),N("button",{class:"tool-btn secondary",onClick:J}," ↪️ Redo ")]),N("div",WS,[C[29]||(C[29]=N("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"🎨 پس‌زمینه",-1)),N("div",XS,[N("button",{class:$t(["mode-btn",{active:Ce.value==="color"}]),onClick:C[11]||(C[11]=z=>Ce.value="color")}," 🎨 رنگ ",2),N("button",{class:$t(["mode-btn",{active:Ce.value==="image"}]),onClick:C[12]||(C[12]=z=>Ce.value="image")}," 🖼️ تصویر ",2)]),Ce.value==="color"?(ot(),ft("div",$S,[Li(N("input",{"onUpdate:modelValue":C[13]||(C[13]=z=>Ie.value=z),type:"color",class:"color-picker",title:"انتخاب رنگ پس‌زمینه"},null,512),[[es,Ie.value]]),N("button",{class:"tool-btn success",onClick:Re}," 🎨 تغییر تمام مهره‌ها ")])):$n("",!0),Ce.value==="image"?(ot(),ft("div",qS,[N("div",jS,[N("div",YS,[(ot(!0),ft(Gt,null,Ni(v.value,z=>{var fe;return ot(),ft("div",{key:z.name,class:$t(["background-image-item",{selected:((fe=ye.value)==null?void 0:fe.url)===z.url}]),onClick:D=>ye.value=z},[N("img",{src:z.url,alt:z.displayName,class:"background-bead-image"},null,8,ZS),N("span",QS,Dt(z.displayName),1)],10,KS)}),128))])]),N("button",{class:"tool-btn success",disabled:!ye.value,onClick:Re}," 🖼️ تغییر تمام مهره‌ها ",8,JS)])):$n("",!0)])]),N("div",eM,[C[31]||(C[31]=N("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"📤 خروجی",-1)),N("div",{class:"save-load-buttons mb-3"},[N("button",{class:"export-btn success",onClick:p}," 💾 ذخیره گرید "),N("button",{class:"export-btn info",onClick:A}," 📂 بارگذاری اخرین ذخیره ")]),N("div",tM,[N("button",{class:"export-btn primary",onClick:C[14]||(C[14]=z=>O.$emit("update-grid",Le()))}," 🚀 ارسال به 3D "),N("button",{class:"export-btn success",onClick:C[15]||(C[15]=()=>Y())}," 📷 خروجی عکس "),N("button",{class:"export-btn info",onClick:C[16]||(C[16]=()=>ce())}," 🖼️ خروجی HD "),N("button",{class:"export-btn warning",onClick:K}," 📄 خروجی TXT ")])])])]),N("div",{class:$t(["grid-container",{"!flex-row":u.value,"!flex-col-reverse":!u.value}])},[N("div",nM,[N("div",iM,[N("label",sM,[C[33]||(C[33]=N("span",{class:"upload-text"},"📁 آپلود فایل txt grid",-1)),N("input",{type:"file",accept:".txt",class:"upload-input",onChange:ge},null,32)]),N("label",rM,[C[34]||(C[34]=N("span",{class:"upload-text"},"📁 آپلود تصویر",-1)),N("input",{type:"file",accept:"image/*",class:"upload-input",onChange:be},null,32)])]),d.value?(ot(),ft("div",oM,[N("img",{src:d.value,alt:"تصویر انتخاب شده",class:"preview-image"},null,8,aM)])):$n("",!0)]),N("div",lM,[N("div",{class:"grid-item",style:qn({gridTemplateColumns:`repeat(${i.value}, ${r.value}px)`,gridAutoRows:`${o.value}px`}),onMousedown:Ae,onMouseup:Oe,onMouseleave:Oe,onMousemove:ke},[(ot(!0),ft(Gt,null,Ni(m.value,(z,fe)=>(ot(),ft("div",{key:fe,class:$t(["cell",{"!border-red-200":fe==Math.floor(i.value*s.value/2)}]),style:qn({backgroundColor:z.startsWith("/miyuki-beads-designer/beads/")?"transparent":z,backgroundImage:z.startsWith("/miyuki-beads-designer/beads/")?`url(${z})`:"none",backgroundSize:"cover",backgroundPosition:"center",border:w.value.includes(fe)?"2px dashed #ff4757":"1px solid #ddd",width:`${r.value}px`,height:`${o.value}px`,minWidth:`${r.value}px`,minHeight:`${o.value}px`}),onClick:D=>k(fe)},null,14,cM))),128))],36)])],2)]))}},dM=Jo(uM,[["__scopeId","data-v-8042cd30"]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pd="179",Cr={ROTATE:0,DOLLY:1,PAN:2},xr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fM=0,oh=1,hM=2,Bg=1,pM=2,Ri=3,gs=0,_n=1,Fi=2,ps=0,Rr=1,ah=2,lh=3,ch=4,mM=5,Us=100,gM=101,_M=102,vM=103,xM=104,yM=200,wM=201,bM=202,SM=203,ru=204,ou=205,MM=206,EM=207,TM=208,AM=209,CM=210,RM=211,PM=212,DM=213,LM=214,au=0,lu=1,cu=2,qr=3,uu=4,du=5,fu=6,hu=7,kg=0,IM=1,UM=2,ms=0,OM=1,NM=2,FM=3,BM=4,kM=5,zM=6,HM=7,zg=300,jr=301,Yr=302,pu=303,mu=304,kl=306,gu=1e3,Ns=1001,_u=1002,Jn=1003,VM=1004,xa=1005,di=1006,cc=1007,Fs=1008,xi=1009,Hg=1010,Vg=1011,ko=1012,Dd=1013,js=1014,Bi=1015,oa=1016,Ld=1017,Id=1018,zo=1020,Gg=35902,Wg=1021,Xg=1022,Yn=1023,Ho=1026,Vo=1027,$g=1028,Ud=1029,qg=1030,Od=1031,Nd=1033,ja=33776,Ya=33777,Ka=33778,Za=33779,vu=35840,xu=35841,yu=35842,wu=35843,bu=36196,Su=37492,Mu=37496,Eu=37808,Tu=37809,Au=37810,Cu=37811,Ru=37812,Pu=37813,Du=37814,Lu=37815,Iu=37816,Uu=37817,Ou=37818,Nu=37819,Fu=37820,Bu=37821,Qa=36492,ku=36494,zu=36495,jg=36283,Hu=36284,Vu=36285,Gu=36286,GM=3200,WM=3201,Yg=0,XM=1,ss="",Nn="srgb",Kr="srgb-linear",xl="linear",vt="srgb",ir=7680,uh=519,$M=512,qM=513,jM=514,Kg=515,YM=516,KM=517,ZM=518,QM=519,dh=35044,fh="300 es",fi=2e3,yl=2001;class er{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ja=Math.PI/180,Wu=180/Math.PI;function aa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function tt(t,e,n){return Math.max(e,Math.min(n,t))}function JM(t,e){return(t%e+e)%e}function uc(t,e,n){return(1-n)*t+n*e}function ho(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function pn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const eE={DEG2RAD:Ja};class qe{constructor(e=0,n=0){qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ys{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const f=r[o+0],h=r[o+1],_=r[o+2],v=r[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=h,e[n+2]=_,e[n+3]=v;return}if(d!==v||l!==f||c!==h||u!==_){let m=1-a;const p=l*f+c*h+u*_+d*v,A=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const L=Math.sqrt(E),R=Math.atan2(L,p*A);m=Math.sin(m*R)/L,a=Math.sin(a*R)/L}const w=a*A;if(l=l*m+f*w,c=c*m+h*w,u=u*m+_*w,d=d*m+v*w,m===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=L,c*=L,u*=L,d*=L}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],h=r[o+2],_=r[o+3];return e[n]=a*_+u*d+l*h-c*f,e[n+1]=l*_+u*f+c*d-a*h,e[n+2]=c*_+u*h+a*f-l*d,e[n+3]=u*_-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),h=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"YXZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"ZXY":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"ZYX":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"YZX":this._x=f*u*d+c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d-f*h*_;break;case"XZY":this._x=f*u*d-c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d+f*h*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-n;return this._w=h*o+n*this._w,this._x=h*i+n*this._x,this._y=h*s+n*this._y,this._z=h*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,n=0,i=0){Z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(hh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(hh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),d=2*(r*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this.z=tt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this.z=tt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return dc.copy(this).projectOnVector(e),this.sub(dc)}reflect(e){return this.sub(dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dc=new Z,hh=new Ys;class Ze{constructor(e,n,i,s,r,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],_=i[8],v=s[0],m=s[3],p=s[6],A=s[1],E=s[4],w=s[7],L=s[2],R=s[5],U=s[8];return r[0]=o*v+a*A+l*L,r[3]=o*m+a*E+l*R,r[6]=o*p+a*w+l*U,r[1]=c*v+u*A+d*L,r[4]=c*m+u*E+d*R,r[7]=c*p+u*w+d*U,r[2]=f*v+h*A+_*L,r[5]=f*m+h*E+_*R,r[8]=f*p+h*w+_*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*r,h=c*r-o*l,_=n*d+i*f+s*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=d*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=f*v,e[4]=(u*n-s*l)*v,e[5]=(s*r-a*n)*v,e[6]=h*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*r)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(fc.makeScale(e,n)),this}rotate(e){return this.premultiply(fc.makeRotation(-e)),this}translate(e,n){return this.premultiply(fc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fc=new Ze;function Zg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function wl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function tE(){const t=wl("canvas");return t.style.display="block",t}const ph={};function Pr(t){t in ph||(ph[t]=!0,console.warn(t))}function nE(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const mh=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gh=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iE(){const t={enabled:!0,workingColorSpace:Kr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===vt&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(s.r=Dr(s.r),s.g=Dr(s.g),s.b=Dr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ss?xl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Pr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Pr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Kr]:{primaries:e,whitePoint:i,transfer:xl,toXYZ:mh,fromXYZ:gh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:mh,fromXYZ:gh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}}),t}const ut=iE();function Vi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Dr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let sr;class sE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{sr===void 0&&(sr=wl("canvas")),sr.width=e.width,sr.height=e.height;const s=sr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=sr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=wl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vi(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Vi(n[i]/255)*255):n[i]=Vi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rE=0;class Fd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rE++}),this.uuid=aa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(hc(s[o].image)):r.push(hc(s[o]))}else r=hc(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function hc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?sE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oE=0;const pc=new Z;class vn extends er{constructor(e=vn.DEFAULT_IMAGE,n=vn.DEFAULT_MAPPING,i=Ns,s=Ns,r=di,o=Fs,a=Yn,l=xi,c=vn.DEFAULT_ANISOTROPY,u=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=aa(),this.name="",this.source=new Fd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(pc).x}get height(){return this.source.getSize(pc).y}get depth(){return this.source.getSize(pc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gu:e.x=e.x-Math.floor(e.x);break;case Ns:e.x=e.x<0?0:1;break;case _u:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gu:e.y=e.y-Math.floor(e.y);break;case Ns:e.y=e.y<0?0:1;break;case _u:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=zg;vn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,i=0,s=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],_=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,w=(h+1)/2,L=(p+1)/2,R=(u+f)/4,U=(d+v)/4,I=(_+m)/4;return E>w&&E>L?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=R/i,r=U/i):w>L?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=R/s,r=I/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=U/r,s=I/r),this.set(i,s,r,n),this}let A=Math.sqrt((m-_)*(m-_)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(d-v)/A,this.z=(f-u)/A,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this.z=tt(this.z,e.z,n.z),this.w=tt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this.z=tt(this.z,e,n),this.w=tt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class aE extends er{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const s={width:e,height:n,depth:i.depth},r=new vn(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:di,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new Fd(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ks extends aE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Qg extends vn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=Ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lE extends vn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=Ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class la{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(r,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ya.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ya.copy(i.boundingBox)),ya.applyMatrix4(e.matrixWorld),this.union(ya)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(po),wa.subVectors(this.max,po),rr.subVectors(e.a,po),or.subVectors(e.b,po),ar.subVectors(e.c,po),Xi.subVectors(or,rr),$i.subVectors(ar,or),Ts.subVectors(rr,ar);let n=[0,-Xi.z,Xi.y,0,-$i.z,$i.y,0,-Ts.z,Ts.y,Xi.z,0,-Xi.x,$i.z,0,-$i.x,Ts.z,0,-Ts.x,-Xi.y,Xi.x,0,-$i.y,$i.x,0,-Ts.y,Ts.x,0];return!mc(n,rr,or,ar,wa)||(n=[1,0,0,0,1,0,0,0,1],!mc(n,rr,or,ar,wa))?!1:(ba.crossVectors(Xi,$i),n=[ba.x,ba.y,ba.z],mc(n,rr,or,ar,wa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],zn=new Z,ya=new la,rr=new Z,or=new Z,ar=new Z,Xi=new Z,$i=new Z,Ts=new Z,po=new Z,wa=new Z,ba=new Z,As=new Z;function mc(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){As.fromArray(t,r);const a=s.x*Math.abs(As.x)+s.y*Math.abs(As.y)+s.z*Math.abs(As.z),l=e.dot(As),c=n.dot(As),u=i.dot(As);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const cE=new la,mo=new Z,gc=new Z;class Bd{constructor(e=new Z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):cE.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mo.subVectors(e,this.center);const n=mo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(mo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mo.copy(e.center).add(gc)),this.expandByPoint(mo.copy(e.center).sub(gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ei=new Z,_c=new Z,Sa=new Z,qi=new Z,vc=new Z,Ma=new Z,xc=new Z;class Jg{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ei.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,n),Ei.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){_c.copy(e).add(n).multiplyScalar(.5),Sa.copy(n).sub(e).normalize(),qi.copy(this.origin).sub(_c);const r=e.distanceTo(n)*.5,o=-this.direction.dot(Sa),a=qi.dot(this.direction),l=-qi.dot(Sa),c=qi.lengthSq(),u=Math.abs(1-o*o);let d,f,h,_;if(u>0)if(d=o*l-a,f=o*a-l,_=r*u,d>=0)if(f>=-_)if(f<=_){const v=1/u;d*=v,f*=v,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(_c).addScaledVector(Sa,f),h}intersectSphere(e,n){Ei.subVectors(e.center,this.origin);const i=Ei.dot(this.direction),s=Ei.dot(Ei)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,n,i,s,r){vc.subVectors(n,e),Ma.subVectors(i,e),xc.crossVectors(vc,Ma);let o=this.direction.dot(xc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qi.subVectors(this.origin,e);const l=a*this.direction.dot(Ma.crossVectors(qi,Ma));if(l<0)return null;const c=a*this.direction.dot(vc.cross(qi));if(c<0||l+c>o)return null;const u=-a*qi.dot(xc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut{constructor(e,n,i,s,r,o,a,l,c,u,d,f,h,_,v,m){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,d,f,h,_,v,m)}set(e,n,i,s,r,o,a,l,c,u,d,f,h,_,v,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=_,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/lr.setFromMatrixColumn(e,0).length(),r=1/lr.setFromMatrixColumn(e,1).length(),o=1/lr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,h=o*d,_=a*u,v=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=h+_*c,n[5]=f-v*c,n[9]=-a*l,n[2]=v-f*c,n[6]=_+h*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,_=c*u,v=c*d;n[0]=f+v*a,n[4]=_*a-h,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=h*a-_,n[6]=v+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,_=c*u,v=c*d;n[0]=f-v*a,n[4]=-o*d,n[8]=_+h*a,n[1]=h+_*a,n[5]=o*u,n[9]=v-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,h=o*d,_=a*u,v=a*d;n[0]=l*u,n[4]=_*c-h,n[8]=f*c+v,n[1]=l*d,n[5]=v*c+f,n[9]=h*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*c,_=a*l,v=a*c;n[0]=l*u,n[4]=v-f*d,n[8]=_*d+h,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*d+_,n[10]=f-v*d}else if(e.order==="XZY"){const f=o*l,h=o*c,_=a*l,v=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+v,n[5]=o*u,n[9]=h*d-_,n[2]=_*d-h,n[6]=a*u,n[10]=v*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uE,e,dE)}lookAt(e,n,i){const s=this.elements;return bn.subVectors(e,n),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),ji.crossVectors(i,bn),ji.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),ji.crossVectors(i,bn)),ji.normalize(),Ea.crossVectors(bn,ji),s[0]=ji.x,s[4]=Ea.x,s[8]=bn.x,s[1]=ji.y,s[5]=Ea.y,s[9]=bn.y,s[2]=ji.z,s[6]=Ea.z,s[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],_=i[2],v=i[6],m=i[10],p=i[14],A=i[3],E=i[7],w=i[11],L=i[15],R=s[0],U=s[4],I=s[8],y=s[12],b=s[1],P=s[5],Q=s[9],$=s[13],j=s[2],pe=s[6],J=s[10],ge=s[14],q=s[3],Ee=s[7],Ae=s[11],Oe=s[15];return r[0]=o*R+a*b+l*j+c*q,r[4]=o*U+a*P+l*pe+c*Ee,r[8]=o*I+a*Q+l*J+c*Ae,r[12]=o*y+a*$+l*ge+c*Oe,r[1]=u*R+d*b+f*j+h*q,r[5]=u*U+d*P+f*pe+h*Ee,r[9]=u*I+d*Q+f*J+h*Ae,r[13]=u*y+d*$+f*ge+h*Oe,r[2]=_*R+v*b+m*j+p*q,r[6]=_*U+v*P+m*pe+p*Ee,r[10]=_*I+v*Q+m*J+p*Ae,r[14]=_*y+v*$+m*ge+p*Oe,r[3]=A*R+E*b+w*j+L*q,r[7]=A*U+E*P+w*pe+L*Ee,r[11]=A*I+E*Q+w*J+L*Ae,r[15]=A*y+E*$+w*ge+L*Oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],_=e[3],v=e[7],m=e[11],p=e[15];return _*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*h-i*l*h)+v*(+n*l*h-n*c*f+r*o*f-s*o*h+s*c*u-r*l*u)+m*(+n*c*d-n*a*h-r*o*d+i*o*h+r*a*u-i*c*u)+p*(-s*a*u-n*l*d+n*a*f+s*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],_=e[12],v=e[13],m=e[14],p=e[15],A=d*m*c-v*f*c+v*l*h-a*m*h-d*l*p+a*f*p,E=_*f*c-u*m*c-_*l*h+o*m*h+u*l*p-o*f*p,w=u*v*c-_*d*c+_*a*h-o*v*h-u*a*p+o*d*p,L=_*d*l-u*v*l-_*a*f+o*v*f+u*a*m-o*d*m,R=n*A+i*E+s*w+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/R;return e[0]=A*U,e[1]=(v*f*r-d*m*r-v*s*h+i*m*h+d*s*p-i*f*p)*U,e[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*p+i*l*p)*U,e[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*h-i*l*h)*U,e[4]=E*U,e[5]=(u*m*r-_*f*r+_*s*h-n*m*h-u*s*p+n*f*p)*U,e[6]=(_*l*r-o*m*r-_*s*c+n*m*c+o*s*p-n*l*p)*U,e[7]=(o*f*r-u*l*r+u*s*c-n*f*c-o*s*h+n*l*h)*U,e[8]=w*U,e[9]=(_*d*r-u*v*r-_*i*h+n*v*h+u*i*p-n*d*p)*U,e[10]=(o*v*r-_*a*r+_*i*c-n*v*c-o*i*p+n*a*p)*U,e[11]=(u*a*r-o*d*r-u*i*c+n*d*c+o*i*h-n*a*h)*U,e[12]=L*U,e[13]=(u*v*s-_*d*s+_*i*f-n*v*f-u*i*m+n*d*m)*U,e[14]=(_*a*s-o*v*s-_*i*l+n*v*l+o*i*m-n*a*m)*U,e[15]=(o*d*s-u*a*s+u*i*l-n*d*l-o*i*f+n*a*f)*U,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,d=a+a,f=r*c,h=r*u,_=r*d,v=o*u,m=o*d,p=a*d,A=l*c,E=l*u,w=l*d,L=i.x,R=i.y,U=i.z;return s[0]=(1-(v+p))*L,s[1]=(h+w)*L,s[2]=(_-E)*L,s[3]=0,s[4]=(h-w)*R,s[5]=(1-(f+p))*R,s[6]=(m+A)*R,s[7]=0,s[8]=(_+E)*U,s[9]=(m-A)*U,s[10]=(1-(f+v))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let r=lr.set(s[0],s[1],s[2]).length();const o=lr.set(s[4],s[5],s[6]).length(),a=lr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Hn.copy(this);const c=1/r,u=1/o,d=1/a;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=u,Hn.elements[5]*=u,Hn.elements[6]*=u,Hn.elements[8]*=d,Hn.elements[9]*=d,Hn.elements[10]*=d,n.setFromRotationMatrix(Hn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,n,i,s,r,o,a=fi,l=!1){const c=this.elements,u=2*r/(n-e),d=2*r/(i-s),f=(n+e)/(n-e),h=(i+s)/(i-s);let _,v;if(l)_=r/(o-r),v=o*r/(o-r);else if(a===fi)_=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===yl)_=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=fi,l=!1){const c=this.elements,u=2/(n-e),d=2/(i-s),f=-(n+e)/(n-e),h=-(i+s)/(i-s);let _,v;if(l)_=1/(o-r),v=o/(o-r);else if(a===fi)_=-2/(o-r),v=-(o+r)/(o-r);else if(a===yl)_=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const lr=new Z,Hn=new Ut,uE=new Z(0,0,0),dE=new Z(1,1,1),ji=new Z,Ea=new Z,bn=new Z,_h=new Ut,vh=new Ys;class yi{constructor(e=0,n=0,i=0,s=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(n){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return _h.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_h,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return vh.setFromEuler(this),this.setFromQuaternion(vh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class e_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fE=0;const xh=new Z,cr=new Ys,Ti=new Ut,Ta=new Z,go=new Z,hE=new Z,pE=new Ys,yh=new Z(1,0,0),wh=new Z(0,1,0),bh=new Z(0,0,1),Sh={type:"added"},mE={type:"removed"},ur={type:"childadded",child:null},yc={type:"childremoved",child:null};class tn extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=aa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new Z,n=new yi,i=new Ys,s=new Z(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ut},normalMatrix:{value:new Ze}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new e_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return cr.setFromAxisAngle(e,n),this.quaternion.multiply(cr),this}rotateOnWorldAxis(e,n){return cr.setFromAxisAngle(e,n),this.quaternion.premultiply(cr),this}rotateX(e){return this.rotateOnAxis(yh,e)}rotateY(e){return this.rotateOnAxis(wh,e)}rotateZ(e){return this.rotateOnAxis(bh,e)}translateOnAxis(e,n){return xh.copy(e).applyQuaternion(this.quaternion),this.position.add(xh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(yh,e)}translateY(e){return this.translateOnAxis(wh,e)}translateZ(e){return this.translateOnAxis(bh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ta.copy(e):Ta.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(go,Ta,this.up):Ti.lookAt(Ta,go,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),cr.setFromRotationMatrix(Ti),this.quaternion.premultiply(cr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sh),ur.child=e,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(mE),yc.child=e,this.dispatchEvent(yc),yc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sh),ur.child=e,this.dispatchEvent(ur),ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,e,hE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,pE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}tn.DEFAULT_UP=new Z(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new Z,Ai=new Z,wc=new Z,Ci=new Z,dr=new Z,fr=new Z,Mh=new Z,bc=new Z,Sc=new Z,Mc=new Z,Ec=new Lt,Tc=new Lt,Ac=new Lt;class jn{constructor(e=new Z,n=new Z,i=new Z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Vn.subVectors(e,n),s.cross(Vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Vn.subVectors(s,n),Ai.subVectors(i,n),wc.subVectors(e,n);const o=Vn.dot(Vn),a=Vn.dot(Ai),l=Vn.dot(wc),c=Ai.dot(Ai),u=Ai.dot(wc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-h-_,_,h)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ci.x),l.addScaledVector(o,Ci.y),l.addScaledVector(a,Ci.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return Ec.setScalar(0),Tc.setScalar(0),Ac.setScalar(0),Ec.fromBufferAttribute(e,n),Tc.fromBufferAttribute(e,i),Ac.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ec,r.x),o.addScaledVector(Tc,r.y),o.addScaledVector(Ac,r.z),o}static isFrontFacing(e,n,i,s){return Vn.subVectors(i,n),Ai.subVectors(e,n),Vn.cross(Ai).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Vn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return jn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return jn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;dr.subVectors(s,i),fr.subVectors(r,i),bc.subVectors(e,i);const l=dr.dot(bc),c=fr.dot(bc);if(l<=0&&c<=0)return n.copy(i);Sc.subVectors(e,s);const u=dr.dot(Sc),d=fr.dot(Sc);if(u>=0&&d<=u)return n.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(dr,o);Mc.subVectors(e,r);const h=dr.dot(Mc),_=fr.dot(Mc);if(_>=0&&h<=_)return n.copy(r);const v=h*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(fr,a);const m=u*_-h*d;if(m<=0&&d-u>=0&&h-_>=0)return Mh.subVectors(r,s),a=(d-u)/(d-u+(h-_)),n.copy(s).addScaledVector(Mh,a);const p=1/(m+v+f);return o=v*p,a=f*p,n.copy(i).addScaledVector(dr,o).addScaledVector(fr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const t_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function Cc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class nt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=ut.workingColorSpace){return this.r=e,this.g=n,this.b=i,ut.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=ut.workingColorSpace){if(e=JM(e,1),n=tt(n,0,1),i=tt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Cc(o,r,e+1/3),this.g=Cc(o,r,e),this.b=Cc(o,r,e-1/3)}return ut.colorSpaceToWorking(this,s),this}setStyle(e,n=Nn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Nn){const i=t_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return ut.workingToColorSpace(Yt.copy(this),e),Math.round(tt(Yt.r*255,0,255))*65536+Math.round(tt(Yt.g*255,0,255))*256+Math.round(tt(Yt.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ut.workingColorSpace){ut.workingToColorSpace(Yt.copy(this),n);const i=Yt.r,s=Yt.g,r=Yt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ut.workingColorSpace){return ut.workingToColorSpace(Yt.copy(this),n),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Nn){ut.workingToColorSpace(Yt.copy(this),e);const n=Yt.r,i=Yt.g,s=Yt.b;return e!==Nn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+n,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Yi),e.getHSL(Aa);const i=uc(Yi.h,Aa.h,n),s=uc(Yi.s,Aa.s,n),r=uc(Yi.l,Aa.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new nt;nt.NAMES=t_;let gE=0;class ca extends er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=aa(),this.name="",this.type="Material",this.blending=Rr,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ru,this.blendDst=ou,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(i.blending=this.blending),this.side!==gs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ru&&(i.blendSrc=this.blendSrc),this.blendDst!==ou&&(i.blendDst=this.blendDst),this.blendEquation!==Us&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class n_ extends ca{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=kg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new Z,Ca=new qe;let _E=0;class pi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_E++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=dh,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ca.fromBufferAttribute(this,n),Ca.applyMatrix3(e),this.setXY(n,Ca.x,Ca.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix3(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix4(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyNormalMatrix(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.transformDirection(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ho(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=pn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ho(n,this.array)),n}setX(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ho(n,this.array)),n}setY(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ho(n,this.array)),n}setZ(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ho(n,this.array)),n}setW(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),s=pn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),s=pn(s,this.array),r=pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dh&&(e.usage=this.usage),e}}class i_ extends pi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class s_ extends pi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class mi extends pi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let vE=0;const Un=new Ut,Rc=new tn,hr=new Z,Sn=new la,_o=new la,Vt=new Z;class ys extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vE++}),this.uuid=aa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zg(e)?s_:i_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,n,i){return Un.makeTranslation(e,n,i),this.applyMatrix4(Un),this}scale(e,n,i){return Un.makeScale(e,n,i),this.applyMatrix4(Un),this}lookAt(e){return Rc.lookAt(e),Rc.updateMatrix(),this.applyMatrix4(Rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new mi(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new la);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];_o.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(Sn.min,_o.min),Sn.expandByPoint(Vt),Vt.addVectors(Sn.max,_o.max),Sn.expandByPoint(Vt)):(Sn.expandByPoint(_o.min),Sn.expandByPoint(_o.max))}Sn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Vt));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Vt.fromBufferAttribute(a,c),l&&(hr.fromBufferAttribute(e,c),Vt.add(hr)),s=Math.max(s,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new Z,l[I]=new Z;const c=new Z,u=new Z,d=new Z,f=new qe,h=new qe,_=new qe,v=new Z,m=new Z;function p(I,y,b){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,y),d.fromBufferAttribute(i,b),f.fromBufferAttribute(r,I),h.fromBufferAttribute(r,y),_.fromBufferAttribute(r,b),u.sub(c),d.sub(c),h.sub(f),_.sub(f);const P=1/(h.x*_.y-_.x*h.y);isFinite(P)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(d,-h.y).multiplyScalar(P),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-_.x).multiplyScalar(P),a[I].add(v),a[y].add(v),a[b].add(v),l[I].add(m),l[y].add(m),l[b].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let I=0,y=A.length;I<y;++I){const b=A[I],P=b.start,Q=b.count;for(let $=P,j=P+Q;$<j;$+=3)p(e.getX($+0),e.getX($+1),e.getX($+2))}const E=new Z,w=new Z,L=new Z,R=new Z;function U(I){L.fromBufferAttribute(s,I),R.copy(L);const y=a[I];E.copy(y),E.sub(L.multiplyScalar(L.dot(y))).normalize(),w.crossVectors(R,y);const P=w.dot(l[I])<0?-1:1;o.setXYZW(I,E.x,E.y,E.z,P)}for(let I=0,y=A.length;I<y;++I){const b=A[I],P=b.start,Q=b.count;for(let $=P,j=P+Q;$<j;$+=3)U(e.getX($+0)),U(e.getX($+1)),U(e.getX($+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const s=new Z,r=new Z,o=new Z,a=new Z,l=new Z,c=new Z,u=new Z,d=new Z;if(e)for(let f=0,h=e.count;f<h;f+=3){const _=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(n,_),r.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=n.count;f<h;f+=3)s.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Vt.fromBufferAttribute(e,n),Vt.normalize(),e.setXYZ(n,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?h=l[v]*a.data.stride+a.offset:h=l[v]*u;for(let p=0;p<u;p++)f[_++]=c[h++]}return new pi(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ys,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eh=new Ut,Cs=new Jg,Ra=new Bd,Th=new Z,Pa=new Z,Da=new Z,La=new Z,Pc=new Z,Ia=new Z,Ah=new Z,Ua=new Z;class Kn extends tn{constructor(e=new ys,n=new n_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ia.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Pc.fromBufferAttribute(d,e),o?Ia.addScaledVector(Pc,u):Ia.addScaledVector(Pc.sub(n),u))}n.add(Ia)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ra.copy(i.boundingSphere),Ra.applyMatrix4(r),Cs.copy(e.ray).recast(e.near),!(Ra.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(Ra,Th)===null||Cs.origin.distanceToSquared(Th)>(e.far-e.near)**2))&&(Eh.copy(r).invert(),Cs.copy(e.ray).applyMatrix4(Eh),!(i.boundingBox!==null&&Cs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Cs)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const m=f[_],p=o[m.materialIndex],A=Math.max(m.start,h.start),E=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let w=A,L=E;w<L;w+=3){const R=a.getX(w),U=a.getX(w+1),I=a.getX(w+2);s=Oa(this,p,e,i,c,u,d,R,U,I),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const _=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let m=_,p=v;m<p;m+=3){const A=a.getX(m),E=a.getX(m+1),w=a.getX(m+2);s=Oa(this,o,e,i,c,u,d,A,E,w),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const m=f[_],p=o[m.materialIndex],A=Math.max(m.start,h.start),E=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let w=A,L=E;w<L;w+=3){const R=w,U=w+1,I=w+2;s=Oa(this,p,e,i,c,u,d,R,U,I),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const _=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let m=_,p=v;m<p;m+=3){const A=m,E=m+1,w=m+2;s=Oa(this,o,e,i,c,u,d,A,E,w),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function xE(t,e,n,i,s,r,o,a){let l;if(e.side===_n?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===gs,a),l===null)return null;Ua.copy(a),Ua.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ua);return c<n.near||c>n.far?null:{distance:c,point:Ua.clone(),object:t}}function Oa(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,Pa),t.getVertexPosition(l,Da),t.getVertexPosition(c,La);const u=xE(t,e,n,i,Pa,Da,La,Ah);if(u){const d=new Z;jn.getBarycoord(Ah,Pa,Da,La,d),s&&(u.uv=jn.getInterpolatedAttribute(s,a,l,c,d,new qe)),r&&(u.uv1=jn.getInterpolatedAttribute(r,a,l,c,d,new qe)),o&&(u.normal=jn.getInterpolatedAttribute(o,a,l,c,d,new Z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new Z,materialIndex:0};jn.getNormal(Pa,Da,La,f.normal),u.face=f,u.barycoord=d}return u}class ua extends ys{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;_("z","y","x",-1,-1,i,n,e,o,r,0),_("z","y","x",1,-1,i,n,-e,o,r,1),_("x","z","y",1,1,e,i,n,s,o,2),_("x","z","y",1,-1,e,i,-n,s,o,3),_("x","y","z",1,-1,e,n,i,s,r,4),_("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new mi(c,3)),this.setAttribute("normal",new mi(u,3)),this.setAttribute("uv",new mi(d,2));function _(v,m,p,A,E,w,L,R,U,I,y){const b=w/U,P=L/I,Q=w/2,$=L/2,j=R/2,pe=U+1,J=I+1;let ge=0,q=0;const Ee=new Z;for(let Ae=0;Ae<J;Ae++){const Oe=Ae*P-$;for(let ke=0;ke<pe;ke++){const at=ke*b-Q;Ee[v]=at*A,Ee[m]=Oe*E,Ee[p]=j,c.push(Ee.x,Ee.y,Ee.z),Ee[v]=0,Ee[m]=0,Ee[p]=R>0?1:-1,u.push(Ee.x,Ee.y,Ee.z),d.push(ke/U),d.push(1-Ae/I),ge+=1}}for(let Ae=0;Ae<I;Ae++)for(let Oe=0;Oe<U;Oe++){const ke=f+Oe+pe*Ae,at=f+Oe+pe*(Ae+1),et=f+(Oe+1)+pe*(Ae+1),le=f+(Oe+1)+pe*Ae;l.push(ke,at,le),l.push(at,et,le),q+=6}a.addGroup(h,q,y),h+=q,f+=ge}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function an(t){const e={};for(let n=0;n<t.length;n++){const i=Zr(t[n]);for(const s in i)e[s]=i[s]}return e}function yE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function r_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const wE={clone:Zr,merge:an};var bE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,SE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _s extends ca{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bE,this.fragmentShader=SE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zr(e.uniforms),this.uniformsGroups=yE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class o_ extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new Z,Ch=new qe,Rh=new qe;class Tn extends o_{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Wu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ja*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wu*2*Math.atan(Math.tan(Ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,n){return this.getViewBounds(e,Ch,Rh),n.subVectors(Rh,Ch)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ja*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const pr=-90,mr=1;class ME extends tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Tn(pr,mr,e,n);s.layers=this.layers,this.add(s);const r=new Tn(pr,mr,e,n);r.layers=this.layers,this.add(r);const o=new Tn(pr,mr,e,n);o.layers=this.layers,this.add(o);const a=new Tn(pr,mr,e,n);a.layers=this.layers,this.add(a);const l=new Tn(pr,mr,e,n);l.layers=this.layers,this.add(l);const c=new Tn(pr,mr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,o),e.setRenderTarget(i,2,s),e.render(n,a),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(n,u),e.setRenderTarget(d,f,h),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class a_ extends vn{constructor(e=[],n=jr,i,s,r,o,a,l,c,u){super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class EE extends Ks{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new a_(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ua(5,5,5),r=new _s({name:"CubemapFromEquirect",uniforms:Zr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:ps});r.uniforms.tEquirect.value=n;const o=new Kn(s,r),a=n.minFilter;return n.minFilter===Fs&&(n.minFilter=di),new ME(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}class Na extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TE={type:"move"};class Dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Na,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Na,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Na,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,_=.005;c.inputState.pinching&&f>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(TE)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Na;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class l_ extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Lc=new Z,AE=new Z,CE=new Ze;class ns{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=Lc.subVectors(i,n).cross(AE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Lc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||CE.getNormalMatrix(e),s=this.coplanarPoint(Lc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rs=new Bd,RE=new qe(.5,.5),Fa=new Z;class kd{constructor(e=new ns,n=new ns,i=new ns,s=new ns,r=new ns,o=new ns){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=fi,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],f=r[6],h=r[7],_=r[8],v=r[9],m=r[10],p=r[11],A=r[12],E=r[13],w=r[14],L=r[15];if(s[0].setComponents(c-o,h-u,p-_,L-A).normalize(),s[1].setComponents(c+o,h+u,p+_,L+A).normalize(),s[2].setComponents(c+a,h+d,p+v,L+E).normalize(),s[3].setComponents(c-a,h-d,p-v,L-E).normalize(),i)s[4].setComponents(l,f,m,w).normalize(),s[5].setComponents(c-l,h-f,p-m,L-w).normalize();else if(s[4].setComponents(c-l,h-f,p-m,L-w).normalize(),n===fi)s[5].setComponents(c+l,h+f,p+m,L+w).normalize();else if(n===yl)s[5].setComponents(l,f,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){Rs.center.set(0,0,0);const n=RE.distanceTo(e.center);return Rs.radius=.7071067811865476+n,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Fa.x=s.normal.x>0?e.max.x:e.min.x,Fa.y=s.normal.y>0?e.max.y:e.min.y,Fa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class c_ extends vn{constructor(e,n,i=js,s,r,o,a=Jn,l=Jn,c,u=Ho,d=1){if(u!==Ho&&u!==Vo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class zl extends ys{constructor(e=1,n=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],f=[],h=[];let _=0;const v=[],m=i/2;let p=0;A(),o===!1&&(e>0&&E(!0),n>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new mi(d,3)),this.setAttribute("normal",new mi(f,3)),this.setAttribute("uv",new mi(h,2));function A(){const w=new Z,L=new Z;let R=0;const U=(n-e)/i;for(let I=0;I<=r;I++){const y=[],b=I/r,P=b*(n-e)+e;for(let Q=0;Q<=s;Q++){const $=Q/s,j=$*l+a,pe=Math.sin(j),J=Math.cos(j);L.x=P*pe,L.y=-b*i+m,L.z=P*J,d.push(L.x,L.y,L.z),w.set(pe,U,J).normalize(),f.push(w.x,w.y,w.z),h.push($,1-b),y.push(_++)}v.push(y)}for(let I=0;I<s;I++)for(let y=0;y<r;y++){const b=v[y][I],P=v[y+1][I],Q=v[y+1][I+1],$=v[y][I+1];(e>0||y!==0)&&(u.push(b,P,$),R+=3),(n>0||y!==r-1)&&(u.push(P,Q,$),R+=3)}c.addGroup(p,R,0),p+=R}function E(w){const L=_,R=new qe,U=new Z;let I=0;const y=w===!0?e:n,b=w===!0?1:-1;for(let Q=1;Q<=s;Q++)d.push(0,m*b,0),f.push(0,b,0),h.push(.5,.5),_++;const P=_;for(let Q=0;Q<=s;Q++){const j=Q/s*l+a,pe=Math.cos(j),J=Math.sin(j);U.x=y*J,U.y=m*b,U.z=y*pe,d.push(U.x,U.y,U.z),f.push(0,b,0),R.x=pe*.5+.5,R.y=J*.5*b+.5,h.push(R.x,R.y),_++}for(let Q=0;Q<s;Q++){const $=L+Q,j=P+Q;w===!0?u.push(j,j+1,$):u.push(j+1,j,$),I+=3}c.addGroup(p,I,w===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Hl extends ys{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,f=n/l,h=[],_=[],v=[],m=[];for(let p=0;p<u;p++){const A=p*f-o;for(let E=0;E<c;E++){const w=E*d-r;_.push(w,-A,0),v.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){const E=A+c*p,w=A+c*(p+1),L=A+1+c*(p+1),R=A+1+c*p;h.push(E,w,R),h.push(w,L,R)}this.setIndex(h),this.setAttribute("position",new mi(_,3)),this.setAttribute("normal",new mi(v,3)),this.setAttribute("uv",new mi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.width,e.height,e.widthSegments,e.heightSegments)}}class PE extends ca{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yg,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class u_ extends PE{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new nt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new nt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new nt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class DE extends ca{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LE extends ca{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class d_ extends tn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Ic=new Ut,Ph=new Z,Dh=new Z;class IE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kd,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Ph.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ph),Dh.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Dh),n.updateMatrixWorld(),Ic.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ic,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ic)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class f_ extends o_{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class UE extends IE{constructor(){super(new f_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xu extends d_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new UE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class h_ extends d_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class OE extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Lh{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=tt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(tt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class NE extends er{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Ih(t,e,n,i){const s=FE(i);switch(n){case Wg:return t*e;case $g:return t*e/s.components*s.byteLength;case Ud:return t*e/s.components*s.byteLength;case qg:return t*e*2/s.components*s.byteLength;case Od:return t*e*2/s.components*s.byteLength;case Xg:return t*e*3/s.components*s.byteLength;case Yn:return t*e*4/s.components*s.byteLength;case Nd:return t*e*4/s.components*s.byteLength;case ja:case Ya:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ka:case Za:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case xu:case wu:return Math.max(t,16)*Math.max(e,8)/4;case vu:case yu:return Math.max(t,8)*Math.max(e,8)/2;case bu:case Su:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Mu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Eu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Tu:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Au:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Cu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ru:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Pu:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Du:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Lu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Iu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Uu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ou:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Nu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Fu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Bu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Qa:case ku:case zu:return Math.ceil(t/4)*Math.ceil(e/4)*16;case jg:case Hu:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Vu:case Gu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function FE(t){switch(t){case xi:case Hg:return{byteLength:1,components:1};case ko:case Vg:case oa:return{byteLength:2,components:1};case Ld:case Id:return{byteLength:2,components:4};case js:case Dd:case Bi:return{byteLength:4,components:1};case Gg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function p_(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function BE(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((h,_)=>h.start-_.start);let f=0;for(let h=1;h<d.length;h++){const _=d[f],v=d[h];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,d[f]=v)}d.length=f+1;for(let h=0,_=d.length;h<_;h++){const v=d[h];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var kE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zE=`#ifdef USE_ALPHAHASH
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
#endif`,HE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XE=`#ifdef USE_AOMAP
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
#endif`,$E=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qE=`#ifdef USE_BATCHING
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
#endif`,jE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,YE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,QE=`#ifdef USE_IRIDESCENCE
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
#endif`,JE=`#ifdef USE_BUMPMAP
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
#endif`,eT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,aT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lT=`#define PI 3.141592653589793
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
} // validated`,cT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uT=`vec3 transformedNormal = objectNormal;
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
#endif`,dT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mT="gl_FragColor = linearToOutputTexel( gl_FragColor );",gT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_T=`#ifdef USE_ENVMAP
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
#endif`,vT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xT=`#ifdef USE_ENVMAP
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
#endif`,yT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wT=`#ifdef USE_ENVMAP
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
#endif`,bT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ST=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,MT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ET=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TT=`#ifdef USE_GRADIENTMAP
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
}`,AT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PT=`uniform bool receiveShadow;
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
#endif`,DT=`#ifdef USE_ENVMAP
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
#endif`,LT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,UT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NT=`PhysicalMaterial material;
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
#endif`,FT=`struct PhysicalMaterial {
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
}`,BT=`
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
#endif`,kT=`#if defined( RE_IndirectDiffuse )
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
#endif`,zT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$T=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jT=`#if defined( USE_POINTS_UV )
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
#endif`,YT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,QT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eA=`#ifdef USE_MORPHTARGETS
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
#endif`,tA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aA=`#ifdef USE_NORMALMAP
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
#endif`,lA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_A=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,SA=`float getShadowMask() {
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
}`,MA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,EA=`#ifdef USE_SKINNING
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
#endif`,TA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AA=`#ifdef USE_SKINNING
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
#endif`,CA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,LA=`#ifdef USE_TRANSMISSION
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
#endif`,IA=`#ifdef USE_TRANSMISSION
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
#endif`,UA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kA=`uniform sampler2D t2D;
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
}`,zA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,VA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WA=`#include <common>
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
}`,XA=`#if DEPTH_PACKING == 3200
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
}`,$A=`#define DISTANCE
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
}`,qA=`#define DISTANCE
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
}`,jA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KA=`uniform float scale;
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
}`,ZA=`uniform vec3 diffuse;
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
}`,QA=`#include <common>
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
}`,JA=`uniform vec3 diffuse;
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
}`,eC=`#define LAMBERT
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
}`,tC=`#define LAMBERT
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
}`,nC=`#define MATCAP
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
}`,iC=`#define MATCAP
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
}`,sC=`#define NORMAL
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
}`,rC=`#define NORMAL
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
}`,oC=`#define PHONG
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
}`,aC=`#define PHONG
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
}`,lC=`#define STANDARD
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
}`,cC=`#define STANDARD
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
}`,uC=`#define TOON
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
}`,dC=`#define TOON
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
}`,fC=`uniform float size;
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
}`,hC=`uniform vec3 diffuse;
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
}`,pC=`#include <common>
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
}`,mC=`uniform vec3 color;
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
}`,gC=`uniform float rotation;
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
}`,_C=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:kE,alphahash_pars_fragment:zE,alphamap_fragment:HE,alphamap_pars_fragment:VE,alphatest_fragment:GE,alphatest_pars_fragment:WE,aomap_fragment:XE,aomap_pars_fragment:$E,batching_pars_vertex:qE,batching_vertex:jE,begin_vertex:YE,beginnormal_vertex:KE,bsdfs:ZE,iridescence_fragment:QE,bumpmap_pars_fragment:JE,clipping_planes_fragment:eT,clipping_planes_pars_fragment:tT,clipping_planes_pars_vertex:nT,clipping_planes_vertex:iT,color_fragment:sT,color_pars_fragment:rT,color_pars_vertex:oT,color_vertex:aT,common:lT,cube_uv_reflection_fragment:cT,defaultnormal_vertex:uT,displacementmap_pars_vertex:dT,displacementmap_vertex:fT,emissivemap_fragment:hT,emissivemap_pars_fragment:pT,colorspace_fragment:mT,colorspace_pars_fragment:gT,envmap_fragment:_T,envmap_common_pars_fragment:vT,envmap_pars_fragment:xT,envmap_pars_vertex:yT,envmap_physical_pars_fragment:DT,envmap_vertex:wT,fog_vertex:bT,fog_pars_vertex:ST,fog_fragment:MT,fog_pars_fragment:ET,gradientmap_pars_fragment:TT,lightmap_pars_fragment:AT,lights_lambert_fragment:CT,lights_lambert_pars_fragment:RT,lights_pars_begin:PT,lights_toon_fragment:LT,lights_toon_pars_fragment:IT,lights_phong_fragment:UT,lights_phong_pars_fragment:OT,lights_physical_fragment:NT,lights_physical_pars_fragment:FT,lights_fragment_begin:BT,lights_fragment_maps:kT,lights_fragment_end:zT,logdepthbuf_fragment:HT,logdepthbuf_pars_fragment:VT,logdepthbuf_pars_vertex:GT,logdepthbuf_vertex:WT,map_fragment:XT,map_pars_fragment:$T,map_particle_fragment:qT,map_particle_pars_fragment:jT,metalnessmap_fragment:YT,metalnessmap_pars_fragment:KT,morphinstance_vertex:ZT,morphcolor_vertex:QT,morphnormal_vertex:JT,morphtarget_pars_vertex:eA,morphtarget_vertex:tA,normal_fragment_begin:nA,normal_fragment_maps:iA,normal_pars_fragment:sA,normal_pars_vertex:rA,normal_vertex:oA,normalmap_pars_fragment:aA,clearcoat_normal_fragment_begin:lA,clearcoat_normal_fragment_maps:cA,clearcoat_pars_fragment:uA,iridescence_pars_fragment:dA,opaque_fragment:fA,packing:hA,premultiplied_alpha_fragment:pA,project_vertex:mA,dithering_fragment:gA,dithering_pars_fragment:_A,roughnessmap_fragment:vA,roughnessmap_pars_fragment:xA,shadowmap_pars_fragment:yA,shadowmap_pars_vertex:wA,shadowmap_vertex:bA,shadowmask_pars_fragment:SA,skinbase_vertex:MA,skinning_pars_vertex:EA,skinning_vertex:TA,skinnormal_vertex:AA,specularmap_fragment:CA,specularmap_pars_fragment:RA,tonemapping_fragment:PA,tonemapping_pars_fragment:DA,transmission_fragment:LA,transmission_pars_fragment:IA,uv_pars_fragment:UA,uv_pars_vertex:OA,uv_vertex:NA,worldpos_vertex:FA,background_vert:BA,background_frag:kA,backgroundCube_vert:zA,backgroundCube_frag:HA,cube_vert:VA,cube_frag:GA,depth_vert:WA,depth_frag:XA,distanceRGBA_vert:$A,distanceRGBA_frag:qA,equirect_vert:jA,equirect_frag:YA,linedashed_vert:KA,linedashed_frag:ZA,meshbasic_vert:QA,meshbasic_frag:JA,meshlambert_vert:eC,meshlambert_frag:tC,meshmatcap_vert:nC,meshmatcap_frag:iC,meshnormal_vert:sC,meshnormal_frag:rC,meshphong_vert:oC,meshphong_frag:aC,meshphysical_vert:lC,meshphysical_frag:cC,meshtoon_vert:uC,meshtoon_frag:dC,points_vert:fC,points_frag:hC,shadow_vert:pC,shadow_frag:mC,sprite_vert:gC,sprite_frag:_C},Pe={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},ui={basic:{uniforms:an([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:an([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new nt(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:an([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:an([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:an([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new nt(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:an([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:an([Pe.points,Pe.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:an([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:an([Pe.common,Pe.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:an([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:an([Pe.sprite,Pe.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:an([Pe.common,Pe.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:an([Pe.lights,Pe.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};ui.physical={uniforms:an([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Ba={r:0,b:0,g:0},Ps=new yi,vC=new Ut;function xC(t,e,n,i,s,r,o){const a=new nt(0);let l=r===!0?0:1,c,u,d=null,f=0,h=null;function _(E){let w=E.isScene===!0?E.background:null;return w&&w.isTexture&&(w=(E.backgroundBlurriness>0?n:e).get(w)),w}function v(E){let w=!1;const L=_(E);L===null?p(a,l):L&&L.isColor&&(p(L,1),w=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(E,w){const L=_(w);L&&(L.isCubeTexture||L.mapping===kl)?(u===void 0&&(u=new Kn(new ua(1,1,1),new _s({name:"BackgroundCubeMaterial",uniforms:Zr(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,U,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ps.copy(w.backgroundRotation),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(vC.makeRotationFromEuler(Ps)),u.material.toneMapped=ut.getTransfer(L.colorSpace)!==vt,(d!==L||f!==L.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,d=L,f=L.version,h=t.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new Kn(new Hl(2,2),new _s({name:"BackgroundMaterial",uniforms:Zr(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=ut.getTransfer(L.colorSpace)!==vt,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(d!==L||f!==L.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,d=L,f=L.version,h=t.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,w){E.getRGB(Ba,r_(t)),i.buffers.color.setClear(Ba.r,Ba.g,Ba.b,w,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,w=1){a.set(E),l=w,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:v,addToRenderList:m,dispose:A}}function yC(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(b,P,Q,$,j){let pe=!1;const J=d($,Q,P);r!==J&&(r=J,c(r.object)),pe=h(b,$,Q,j),pe&&_(b,$,Q,j),j!==null&&e.update(j,t.ELEMENT_ARRAY_BUFFER),(pe||o)&&(o=!1,w(b,P,Q,$),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return t.createVertexArray()}function c(b){return t.bindVertexArray(b)}function u(b){return t.deleteVertexArray(b)}function d(b,P,Q){const $=Q.wireframe===!0;let j=i[b.id];j===void 0&&(j={},i[b.id]=j);let pe=j[P.id];pe===void 0&&(pe={},j[P.id]=pe);let J=pe[$];return J===void 0&&(J=f(l()),pe[$]=J),J}function f(b){const P=[],Q=[],$=[];for(let j=0;j<n;j++)P[j]=0,Q[j]=0,$[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:Q,attributeDivisors:$,object:b,attributes:{},index:null}}function h(b,P,Q,$){const j=r.attributes,pe=P.attributes;let J=0;const ge=Q.getAttributes();for(const q in ge)if(ge[q].location>=0){const Ae=j[q];let Oe=pe[q];if(Oe===void 0&&(q==="instanceMatrix"&&b.instanceMatrix&&(Oe=b.instanceMatrix),q==="instanceColor"&&b.instanceColor&&(Oe=b.instanceColor)),Ae===void 0||Ae.attribute!==Oe||Oe&&Ae.data!==Oe.data)return!0;J++}return r.attributesNum!==J||r.index!==$}function _(b,P,Q,$){const j={},pe=P.attributes;let J=0;const ge=Q.getAttributes();for(const q in ge)if(ge[q].location>=0){let Ae=pe[q];Ae===void 0&&(q==="instanceMatrix"&&b.instanceMatrix&&(Ae=b.instanceMatrix),q==="instanceColor"&&b.instanceColor&&(Ae=b.instanceColor));const Oe={};Oe.attribute=Ae,Ae&&Ae.data&&(Oe.data=Ae.data),j[q]=Oe,J++}r.attributes=j,r.attributesNum=J,r.index=$}function v(){const b=r.newAttributes;for(let P=0,Q=b.length;P<Q;P++)b[P]=0}function m(b){p(b,0)}function p(b,P){const Q=r.newAttributes,$=r.enabledAttributes,j=r.attributeDivisors;Q[b]=1,$[b]===0&&(t.enableVertexAttribArray(b),$[b]=1),j[b]!==P&&(t.vertexAttribDivisor(b,P),j[b]=P)}function A(){const b=r.newAttributes,P=r.enabledAttributes;for(let Q=0,$=P.length;Q<$;Q++)P[Q]!==b[Q]&&(t.disableVertexAttribArray(Q),P[Q]=0)}function E(b,P,Q,$,j,pe,J){J===!0?t.vertexAttribIPointer(b,P,Q,j,pe):t.vertexAttribPointer(b,P,Q,$,j,pe)}function w(b,P,Q,$){v();const j=$.attributes,pe=Q.getAttributes(),J=P.defaultAttributeValues;for(const ge in pe){const q=pe[ge];if(q.location>=0){let Ee=j[ge];if(Ee===void 0&&(ge==="instanceMatrix"&&b.instanceMatrix&&(Ee=b.instanceMatrix),ge==="instanceColor"&&b.instanceColor&&(Ee=b.instanceColor)),Ee!==void 0){const Ae=Ee.normalized,Oe=Ee.itemSize,ke=e.get(Ee);if(ke===void 0)continue;const at=ke.buffer,et=ke.type,le=ke.bytesPerElement,Te=et===t.INT||et===t.UNSIGNED_INT||Ee.gpuType===Dd;if(Ee.isInterleavedBufferAttribute){const B=Ee.data,he=B.stride,ue=Ee.offset;if(B.isInstancedInterleavedBuffer){for(let xe=0;xe<q.locationSize;xe++)p(q.location+xe,B.meshPerAttribute);b.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let xe=0;xe<q.locationSize;xe++)m(q.location+xe);t.bindBuffer(t.ARRAY_BUFFER,at);for(let xe=0;xe<q.locationSize;xe++)E(q.location+xe,Oe/q.locationSize,et,Ae,he*le,(ue+Oe/q.locationSize*xe)*le,Te)}else{if(Ee.isInstancedBufferAttribute){for(let B=0;B<q.locationSize;B++)p(q.location+B,Ee.meshPerAttribute);b.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let B=0;B<q.locationSize;B++)m(q.location+B);t.bindBuffer(t.ARRAY_BUFFER,at);for(let B=0;B<q.locationSize;B++)E(q.location+B,Oe/q.locationSize,et,Ae,Oe*le,Oe/q.locationSize*B*le,Te)}}else if(J!==void 0){const Ae=J[ge];if(Ae!==void 0)switch(Ae.length){case 2:t.vertexAttrib2fv(q.location,Ae);break;case 3:t.vertexAttrib3fv(q.location,Ae);break;case 4:t.vertexAttrib4fv(q.location,Ae);break;default:t.vertexAttrib1fv(q.location,Ae)}}}}A()}function L(){I();for(const b in i){const P=i[b];for(const Q in P){const $=P[Q];for(const j in $)u($[j].object),delete $[j];delete P[Q]}delete i[b]}}function R(b){if(i[b.id]===void 0)return;const P=i[b.id];for(const Q in P){const $=P[Q];for(const j in $)u($[j].object),delete $[j];delete P[Q]}delete i[b.id]}function U(b){for(const P in i){const Q=i[P];if(Q[b.id]===void 0)continue;const $=Q[b.id];for(const j in $)u($[j].object),delete $[j];delete Q[b.id]}}function I(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:y,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:m,disableUnusedAttributes:A}}function wC(t,e,n){let i;function s(c){i=c}function r(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let _=0;_<d;_++)h+=u[_];n.update(h,i,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let _=0;for(let v=0;v<d;v++)_+=u[v]*f[v];n.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function bC(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(U){return!(U!==Yn&&i.convert(U)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){const I=U===oa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==xi&&i.convert(U)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Bi&&!I)}function l(U){if(U==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),A=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),w=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),L=_>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:E,maxFragmentUniforms:w,vertexTextures:L,maxSamples:R}}function SC(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new ns,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,h){const _=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=t.get(d);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const A=r?0:i,E=A*4;let w=p.clippingState||null;l.value=w,w=u(_,f,E,h);for(let L=0;L!==E;++L)w[L]=n[L];p.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,_){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const p=h+v*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,w=h;E!==v;++E,w+=4)o.copy(d[E]).applyMatrix4(A,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function MC(t){let e=new WeakMap;function n(o,a){return a===pu?o.mapping=jr:a===mu&&(o.mapping=Yr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===pu||a===mu)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new EE(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",s),n(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const yr=4,Uh=[.125,.215,.35,.446,.526,.582],Os=20,Uc=new f_,Oh=new nt;let Oc=null,Nc=0,Fc=0,Bc=!1;const Is=(1+Math.sqrt(5))/2,gr=1/Is,Nh=[new Z(-Is,gr,0),new Z(Is,gr,0),new Z(-gr,0,Is),new Z(gr,0,Is),new Z(0,Is,-gr),new Z(0,Is,gr),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)],EC=new Z;class Fh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=EC}=r;Oc=this._renderer.getRenderTarget(),Nc=this._renderer.getActiveCubeFace(),Fc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oc,Nc,Fc),this._renderer.xr.enabled=Bc,e.scissorTest=!1,ka(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===jr||e.mapping===Yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oc=this._renderer.getRenderTarget(),Nc=this._renderer.getActiveCubeFace(),Fc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:di,minFilter:di,generateMipmaps:!1,type:oa,format:Yn,colorSpace:Kr,depthBuffer:!1},s=Bh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bh(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=TC(r)),this._blurMaterial=AC(r,e,n)}return s}_compileMaterial(e){const n=new Kn(this._lodPlanes[0],e);this._renderer.compile(n,Uc)}_sceneToCubeUV(e,n,i,s,r){const l=new Tn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Oh),d.toneMapping=ms,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const v=new n_({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),m=new Kn(new ua,v);let p=!1;const A=e.background;A?A.isColor&&(v.color.copy(A),e.background=null,p=!0):(v.color.copy(Oh),p=!0);for(let E=0;E<6;E++){const w=E%3;w===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):w===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));const L=this._cubeSize;ka(s,w*L,E>2?L:0,L,L),d.setRenderTarget(s),p&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=A}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===jr||e.mapping===Yr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Kn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ka(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Uc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Nh[(s-r-1)%Nh.length];this._blur(e,r-1,r,o,a)}n.autoClear=i}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Kn(this._lodPlanes[s],c),f=c.uniforms,h=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Os-1),v=r/_,m=isFinite(r)?1+Math.floor(u*v):Os;m>Os&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Os}`);const p=[];let A=0;for(let U=0;U<Os;++U){const I=U/v,y=Math.exp(-I*I/2);p.push(y),U===0?A+=y:U<m&&(A+=2*y)}for(let U=0;U<p.length;U++)p[U]=p[U]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=_,f.mipInt.value=E-i;const w=this._sizeLods[s],L=3*w*(s>E-yr?s-E+yr:0),R=4*(this._cubeSize-w);ka(n,L,R,3*w,2*w),l.setRenderTarget(n),l.render(d,Uc)}}function TC(t){const e=[],n=[],i=[];let s=t;const r=t-yr+1+Uh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);n.push(a);let l=1/a;o>t-yr?l=Uh[o-t+yr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,_=6,v=3,m=2,p=1,A=new Float32Array(v*_*h),E=new Float32Array(m*_*h),w=new Float32Array(p*_*h);for(let R=0;R<h;R++){const U=R%3*2/3-1,I=R>2?0:-1,y=[U,I,0,U+2/3,I,0,U+2/3,I+1,0,U,I,0,U+2/3,I+1,0,U,I+1,0];A.set(y,v*_*R),E.set(f,m*_*R);const b=[R,R,R,R,R,R];w.set(b,p*_*R)}const L=new ys;L.setAttribute("position",new pi(A,v)),L.setAttribute("uv",new pi(E,m)),L.setAttribute("faceIndex",new pi(w,p)),e.push(L),s>yr&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Bh(t,e,n){const i=new Ks(t,e,n);return i.texture.mapping=kl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ka(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function AC(t,e,n){const i=new Float32Array(Os),s=new Z(0,1,0);return new _s({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:zd(),fragmentShader:`

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
		`,blending:ps,depthTest:!1,depthWrite:!1})}function kh(){return new _s({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zd(),fragmentShader:`

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
		`,blending:ps,depthTest:!1,depthWrite:!1})}function zh(){return new _s({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ps,depthTest:!1,depthWrite:!1})}function zd(){return`

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
	`}function CC(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===pu||l===mu,u=l===jr||l===Yr;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Fh(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&s(h)?(n===null&&(n=new Fh(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function RC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&Pr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function PC(t,e,n,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete s[f.id];const h=r.get(f);h&&(e.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],t.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,_=d.attributes.position;let v=0;if(h!==null){const A=h.array;v=h.version;for(let E=0,w=A.length;E<w;E+=3){const L=A[E+0],R=A[E+1],U=A[E+2];f.push(L,R,R,U,U,L)}}else if(_!==void 0){const A=_.array;v=_.version;for(let E=0,w=A.length/3-1;E<w;E+=3){const L=E+0,R=E+1,U=E+2;f.push(L,R,R,U,U,L)}}else return;const m=new(Zg(f)?s_:i_)(f,1);m.version=v;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function DC(t,e,n){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){t.drawElements(i,h,r,f*o),n.update(h,i,1)}function c(f,h,_){_!==0&&(t.drawElementsInstanced(i,h,r,f*o,_),n.update(h,i,_))}function u(f,h,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,_);let m=0;for(let p=0;p<_;p++)m+=h[p];n.update(m,i,1)}function d(f,h,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,h[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,r,f,0,v,0,_);let p=0;for(let A=0;A<_;A++)p+=h[A]*v[A];n.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function LC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function IC(t,e,n){const i=new WeakMap,s=new Lt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let y=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();const h=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let E=0;h===!0&&(E=1),_===!0&&(E=2),v===!0&&(E=3);let w=a.attributes.position.count*E,L=1;w>e.maxTextureSize&&(L=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const R=new Float32Array(w*L*4*d),U=new Qg(R,w,L,d);U.type=Bi,U.needsUpdate=!0;const I=E*4;for(let b=0;b<d;b++){const P=m[b],Q=p[b],$=A[b],j=w*L*4*b;for(let pe=0;pe<P.count;pe++){const J=pe*I;h===!0&&(s.fromBufferAttribute(P,pe),R[j+J+0]=s.x,R[j+J+1]=s.y,R[j+J+2]=s.z,R[j+J+3]=0),_===!0&&(s.fromBufferAttribute(Q,pe),R[j+J+4]=s.x,R[j+J+5]=s.y,R[j+J+6]=s.z,R[j+J+7]=0),v===!0&&(s.fromBufferAttribute($,pe),R[j+J+8]=s.x,R[j+J+9]=s.y,R[j+J+10]=s.z,R[j+J+11]=$.itemSize===4?s.w:1)}}f={count:d,texture:U,size:new qe(w,L)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let h=0;for(let v=0;v<c.length;v++)h+=c[v];const _=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:r}}function UC(t,e,n,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:o}}const m_=new vn,Hh=new c_(1,1),g_=new Qg,__=new lE,v_=new a_,Vh=[],Gh=[],Wh=new Float32Array(16),Xh=new Float32Array(9),$h=new Float32Array(4);function so(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=Vh[s];if(r===void 0&&(r=new Float32Array(s),Vh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ht(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Vl(t,e){let n=Gh[e];n===void 0&&(n=new Int32Array(e),Gh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function OC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function NC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2fv(this.addr,e),Ht(n,e)}}function FC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(zt(n,e))return;t.uniform3fv(this.addr,e),Ht(n,e)}}function BC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4fv(this.addr,e),Ht(n,e)}}function kC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ht(n,e)}else{if(zt(n,i))return;$h.set(i),t.uniformMatrix2fv(this.addr,!1,$h),Ht(n,i)}}function zC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ht(n,e)}else{if(zt(n,i))return;Xh.set(i),t.uniformMatrix3fv(this.addr,!1,Xh),Ht(n,i)}}function HC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ht(n,e)}else{if(zt(n,i))return;Wh.set(i),t.uniformMatrix4fv(this.addr,!1,Wh),Ht(n,i)}}function VC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function GC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2iv(this.addr,e),Ht(n,e)}}function WC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3iv(this.addr,e),Ht(n,e)}}function XC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4iv(this.addr,e),Ht(n,e)}}function $C(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function qC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2uiv(this.addr,e),Ht(n,e)}}function jC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3uiv(this.addr,e),Ht(n,e)}}function YC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4uiv(this.addr,e),Ht(n,e)}}function KC(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(Hh.compareFunction=Kg,r=Hh):r=m_,n.setTexture2D(e||r,s)}function ZC(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||__,s)}function QC(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||v_,s)}function JC(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||g_,s)}function e1(t){switch(t){case 5126:return OC;case 35664:return NC;case 35665:return FC;case 35666:return BC;case 35674:return kC;case 35675:return zC;case 35676:return HC;case 5124:case 35670:return VC;case 35667:case 35671:return GC;case 35668:case 35672:return WC;case 35669:case 35673:return XC;case 5125:return $C;case 36294:return qC;case 36295:return jC;case 36296:return YC;case 35678:case 36198:case 36298:case 36306:case 35682:return KC;case 35679:case 36299:case 36307:return ZC;case 35680:case 36300:case 36308:case 36293:return QC;case 36289:case 36303:case 36311:case 36292:return JC}}function t1(t,e){t.uniform1fv(this.addr,e)}function n1(t,e){const n=so(e,this.size,2);t.uniform2fv(this.addr,n)}function i1(t,e){const n=so(e,this.size,3);t.uniform3fv(this.addr,n)}function s1(t,e){const n=so(e,this.size,4);t.uniform4fv(this.addr,n)}function r1(t,e){const n=so(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function o1(t,e){const n=so(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function a1(t,e){const n=so(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function l1(t,e){t.uniform1iv(this.addr,e)}function c1(t,e){t.uniform2iv(this.addr,e)}function u1(t,e){t.uniform3iv(this.addr,e)}function d1(t,e){t.uniform4iv(this.addr,e)}function f1(t,e){t.uniform1uiv(this.addr,e)}function h1(t,e){t.uniform2uiv(this.addr,e)}function p1(t,e){t.uniform3uiv(this.addr,e)}function m1(t,e){t.uniform4uiv(this.addr,e)}function g1(t,e,n){const i=this.cache,s=e.length,r=Vl(n,s);zt(i,r)||(t.uniform1iv(this.addr,r),Ht(i,r));for(let o=0;o!==s;++o)n.setTexture2D(e[o]||m_,r[o])}function _1(t,e,n){const i=this.cache,s=e.length,r=Vl(n,s);zt(i,r)||(t.uniform1iv(this.addr,r),Ht(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||__,r[o])}function v1(t,e,n){const i=this.cache,s=e.length,r=Vl(n,s);zt(i,r)||(t.uniform1iv(this.addr,r),Ht(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||v_,r[o])}function x1(t,e,n){const i=this.cache,s=e.length,r=Vl(n,s);zt(i,r)||(t.uniform1iv(this.addr,r),Ht(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||g_,r[o])}function y1(t){switch(t){case 5126:return t1;case 35664:return n1;case 35665:return i1;case 35666:return s1;case 35674:return r1;case 35675:return o1;case 35676:return a1;case 5124:case 35670:return l1;case 35667:case 35671:return c1;case 35668:case 35672:return u1;case 35669:case 35673:return d1;case 5125:return f1;case 36294:return h1;case 36295:return p1;case 36296:return m1;case 35678:case 36198:case 36298:case 36306:case 35682:return g1;case 35679:case 36299:case 36307:return _1;case 35680:case 36300:case 36308:case 36293:return v1;case 36289:case 36303:case 36311:case 36292:return x1}}class w1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=e1(n.type)}}class b1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=y1(n.type)}}class S1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const kc=/(\w+)(\])?(\[|\.)?/g;function qh(t,e){t.seq.push(e),t.map[e.id]=e}function M1(t,e,n){const i=t.name,s=i.length;for(kc.lastIndex=0;;){const r=kc.exec(i),o=kc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){qh(n,c===void 0?new w1(a,t,e):new b1(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new S1(a),qh(n,d)),n=d}}}class el{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(n,s),o=e.getUniformLocation(n,r.name);M1(r,o,this)}}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function jh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const E1=37297;let T1=0;function A1(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Yh=new Ze;function C1(t){ut._getMatrix(Yh,ut.workingColorSpace,t);const e=`mat3( ${Yh.elements.map(n=>n.toFixed(4))} )`;switch(ut.getTransfer(t)){case xl:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Kh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+A1(t.getShaderSource(e),a)}else return r}function R1(t,e){const n=C1(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function P1(t,e){let n;switch(e){case OM:n="Linear";break;case NM:n="Reinhard";break;case FM:n="Cineon";break;case BM:n="ACESFilmic";break;case zM:n="AgX";break;case HM:n="Neutral";break;case kM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const za=new Z;function D1(){ut.getLuminanceCoefficients(za);const t=za.x.toFixed(4),e=za.y.toFixed(4),n=za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function I1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function U1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function bo(t){return t!==""}function Zh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const O1=/^[ \t]*#include +<([\w\d./]+)>/gm;function $u(t){return t.replace(O1,F1)}const N1=new Map;function F1(t,e){let n=Qe[e];if(n===void 0){const i=N1.get(e);if(i!==void 0)n=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $u(n)}const B1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jh(t){return t.replace(B1,k1)}function k1(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ep(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function z1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Bg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===pM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function H1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case jr:case Yr:e="ENVMAP_TYPE_CUBE";break;case kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function V1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Yr:e="ENVMAP_MODE_REFRACTION";break}return e}function G1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case kg:e="ENVMAP_BLENDING_MULTIPLY";break;case IM:e="ENVMAP_BLENDING_MIX";break;case UM:e="ENVMAP_BLENDING_ADD";break}return e}function W1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function X1(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=z1(n),c=H1(n),u=V1(n),d=G1(n),f=W1(n),h=L1(n),_=I1(r),v=s.createProgram();let m,p,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(bo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(bo).join(`
`),p.length>0&&(p+=`
`)):(m=[ep(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),p=[ep(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ms?"#define TONE_MAPPING":"",n.toneMapping!==ms?Qe.tonemapping_pars_fragment:"",n.toneMapping!==ms?P1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,R1("linearToOutputTexel",n.outputColorSpace),D1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(bo).join(`
`)),o=$u(o),o=Zh(o,n),o=Qh(o,n),a=$u(a),a=Zh(a,n),a=Qh(a,n),o=Jh(o),a=Jh(a),n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=A+m+o,w=A+p+a,L=jh(s,s.VERTEX_SHADER,E),R=jh(s,s.FRAGMENT_SHADER,w);s.attachShader(v,L),s.attachShader(v,R),n.index0AttributeName!==void 0?s.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function U(P){if(t.debug.checkShaderErrors){const Q=s.getProgramInfoLog(v)||"",$=s.getShaderInfoLog(L)||"",j=s.getShaderInfoLog(R)||"",pe=Q.trim(),J=$.trim(),ge=j.trim();let q=!0,Ee=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,v,L,R);else{const Ae=Kh(s,L,"vertex"),Oe=Kh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+pe+`
`+Ae+`
`+Oe)}else pe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",pe):(J===""||ge==="")&&(Ee=!1);Ee&&(P.diagnostics={runnable:q,programLog:pe,vertexShader:{log:J,prefix:m},fragmentShader:{log:ge,prefix:p}})}s.deleteShader(L),s.deleteShader(R),I=new el(s,v),y=U1(s,v)}let I;this.getUniforms=function(){return I===void 0&&U(this),I};let y;this.getAttributes=function(){return y===void 0&&U(this),y};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,E1)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=T1++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=R,this}let $1=0;class q1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new j1(e),n.set(e,i)),i}}class j1{constructor(e){this.id=$1++,this.code=e,this.usedTimes=0}}function Y1(t,e,n,i,s,r,o){const a=new e_,l=new q1,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let h=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,b,P,Q,$){const j=Q.fog,pe=$.geometry,J=y.isMeshStandardMaterial?Q.environment:null,ge=(y.isMeshStandardMaterial?n:e).get(y.envMap||J),q=ge&&ge.mapping===kl?ge.image.height:null,Ee=_[y.type];y.precision!==null&&(h=s.getMaxPrecision(y.precision),h!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const Ae=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,Oe=Ae!==void 0?Ae.length:0;let ke=0;pe.morphAttributes.position!==void 0&&(ke=1),pe.morphAttributes.normal!==void 0&&(ke=2),pe.morphAttributes.color!==void 0&&(ke=3);let at,et,le,Te;if(Ee){const it=ui[Ee];at=it.vertexShader,et=it.fragmentShader}else at=y.vertexShader,et=y.fragmentShader,l.update(y),le=l.getVertexShaderID(y),Te=l.getFragmentShaderID(y);const B=t.getRenderTarget(),he=t.state.buffers.depth.getReversed(),ue=$.isInstancedMesh===!0,xe=$.isBatchedMesh===!0,He=!!y.map,T=!!y.matcap,g=!!ge,k=!!y.aoMap,G=!!y.lightMap,se=!!y.bumpMap,W=!!y.normalMap,we=!!y.displacementMap,ee=!!y.emissiveMap,de=!!y.metalnessMap,_e=!!y.roughnessMap,De=y.anisotropy>0,S=y.clearcoat>0,x=y.dispersion>0,F=y.iridescence>0,Y=y.sheen>0,ce=y.transmission>0,K=De&&!!y.anisotropyMap,Le=S&&!!y.clearcoatMap,be=S&&!!y.clearcoatNormalMap,Ie=S&&!!y.clearcoatRoughnessMap,Ce=F&&!!y.iridescenceMap,ye=F&&!!y.iridescenceThicknessMap,Re=Y&&!!y.sheenColorMap,O=Y&&!!y.sheenRoughnessMap,C=!!y.specularMap,z=!!y.specularColorMap,fe=!!y.specularIntensityMap,D=ce&&!!y.transmissionMap,te=ce&&!!y.thicknessMap,ae=!!y.gradientMap,ve=!!y.alphaMap,re=y.alphaTest>0,X=!!y.alphaHash,Se=!!y.extensions;let Fe=ms;y.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Fe=t.toneMapping);const Je={shaderID:Ee,shaderType:y.type,shaderName:y.name,vertexShader:at,fragmentShader:et,defines:y.defines,customVertexShaderID:le,customFragmentShaderID:Te,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:xe,batchingColor:xe&&$._colorsTexture!==null,instancing:ue,instancingColor:ue&&$.instanceColor!==null,instancingMorph:ue&&$.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:B===null?t.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Kr,alphaToCoverage:!!y.alphaToCoverage,map:He,matcap:T,envMap:g,envMapMode:g&&ge.mapping,envMapCubeUVHeight:q,aoMap:k,lightMap:G,bumpMap:se,normalMap:W,displacementMap:f&&we,emissiveMap:ee,normalMapObjectSpace:W&&y.normalMapType===XM,normalMapTangentSpace:W&&y.normalMapType===Yg,metalnessMap:de,roughnessMap:_e,anisotropy:De,anisotropyMap:K,clearcoat:S,clearcoatMap:Le,clearcoatNormalMap:be,clearcoatRoughnessMap:Ie,dispersion:x,iridescence:F,iridescenceMap:Ce,iridescenceThicknessMap:ye,sheen:Y,sheenColorMap:Re,sheenRoughnessMap:O,specularMap:C,specularColorMap:z,specularIntensityMap:fe,transmission:ce,transmissionMap:D,thicknessMap:te,gradientMap:ae,opaque:y.transparent===!1&&y.blending===Rr&&y.alphaToCoverage===!1,alphaMap:ve,alphaTest:re,alphaHash:X,combine:y.combine,mapUv:He&&v(y.map.channel),aoMapUv:k&&v(y.aoMap.channel),lightMapUv:G&&v(y.lightMap.channel),bumpMapUv:se&&v(y.bumpMap.channel),normalMapUv:W&&v(y.normalMap.channel),displacementMapUv:we&&v(y.displacementMap.channel),emissiveMapUv:ee&&v(y.emissiveMap.channel),metalnessMapUv:de&&v(y.metalnessMap.channel),roughnessMapUv:_e&&v(y.roughnessMap.channel),anisotropyMapUv:K&&v(y.anisotropyMap.channel),clearcoatMapUv:Le&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:be&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:O&&v(y.sheenRoughnessMap.channel),specularMapUv:C&&v(y.specularMap.channel),specularColorMapUv:z&&v(y.specularColorMap.channel),specularIntensityMapUv:fe&&v(y.specularIntensityMap.channel),transmissionMapUv:D&&v(y.transmissionMap.channel),thicknessMapUv:te&&v(y.thicknessMap.channel),alphaMapUv:ve&&v(y.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(W||De),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!pe.attributes.uv&&(He||ve),fog:!!j,useFog:y.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:he,skinning:$.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:ke,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:Fe,decodeVideoTexture:He&&y.map.isVideoTexture===!0&&ut.getTransfer(y.map.colorSpace)===vt,decodeVideoTextureEmissive:ee&&y.emissiveMap.isVideoTexture===!0&&ut.getTransfer(y.emissiveMap.colorSpace)===vt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Fi,flipSided:y.side===_n,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Se&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&y.extensions.multiDraw===!0||xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Je.vertexUv1s=c.has(1),Je.vertexUv2s=c.has(2),Je.vertexUv3s=c.has(3),c.clear(),Je}function p(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)b.push(P),b.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(A(b,y),E(b,y),b.push(t.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function A(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function E(y,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),y.push(a.mask)}function w(y){const b=_[y.type];let P;if(b){const Q=ui[b];P=wE.clone(Q.uniforms)}else P=y.uniforms;return P}function L(y,b){let P;for(let Q=0,$=u.length;Q<$;Q++){const j=u[Q];if(j.cacheKey===b){P=j,++P.usedTimes;break}}return P===void 0&&(P=new X1(t,b,y,r),u.push(P)),P}function R(y){if(--y.usedTimes===0){const b=u.indexOf(y);u[b]=u[u.length-1],u.pop(),y.destroy()}}function U(y){l.remove(y)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:L,releaseProgram:R,releaseShaderCache:U,programs:u,dispose:I}}function K1(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function Z1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function tp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function np(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(d,f,h,_,v,m){let p=t[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:_,renderOrder:d.renderOrder,z:v,group:m},t[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=_,p.renderOrder=d.renderOrder,p.z=v,p.group=m),e++,p}function a(d,f,h,_,v,m){const p=o(d,f,h,_,v,m);h.transmission>0?i.push(p):h.transparent===!0?s.push(p):n.push(p)}function l(d,f,h,_,v,m){const p=o(d,f,h,_,v,m);h.transmission>0?i.unshift(p):h.transparent===!0?s.unshift(p):n.unshift(p)}function c(d,f){n.length>1&&n.sort(d||Z1),i.length>1&&i.sort(f||tp),s.length>1&&s.sort(f||tp)}function u(){for(let d=e,f=t.length;d<f;d++){const h=t[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Q1(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new np,t.set(i,[o])):s>=r.length?(o=new np,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function J1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Z,color:new nt};break;case"SpotLight":n={position:new Z,direction:new Z,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":n={color:new nt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return t[e.id]=n,n}}}function eR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let tR=0;function nR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function iR(t){const e=new J1,n=eR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Z);const s=new Z,r=new Ut,o=new Ut;function a(c){let u=0,d=0,f=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let h=0,_=0,v=0,m=0,p=0,A=0,E=0,w=0,L=0,R=0,U=0;c.sort(nR);for(let y=0,b=c.length;y<b;y++){const P=c[y],Q=P.color,$=P.intensity,j=P.distance,pe=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=Q.r*$,d+=Q.g*$,f+=Q.b*$;else if(P.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(P.sh.coefficients[J],$);U++}else if(P.isDirectionalLight){const J=e.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ge=P.shadow,q=n.get(P);q.shadowIntensity=ge.intensity,q.shadowBias=ge.bias,q.shadowNormalBias=ge.normalBias,q.shadowRadius=ge.radius,q.shadowMapSize=ge.mapSize,i.directionalShadow[h]=q,i.directionalShadowMap[h]=pe,i.directionalShadowMatrix[h]=P.shadow.matrix,A++}i.directional[h]=J,h++}else if(P.isSpotLight){const J=e.get(P);J.position.setFromMatrixPosition(P.matrixWorld),J.color.copy(Q).multiplyScalar($),J.distance=j,J.coneCos=Math.cos(P.angle),J.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),J.decay=P.decay,i.spot[v]=J;const ge=P.shadow;if(P.map&&(i.spotLightMap[L]=P.map,L++,ge.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[v]=ge.matrix,P.castShadow){const q=n.get(P);q.shadowIntensity=ge.intensity,q.shadowBias=ge.bias,q.shadowNormalBias=ge.normalBias,q.shadowRadius=ge.radius,q.shadowMapSize=ge.mapSize,i.spotShadow[v]=q,i.spotShadowMap[v]=pe,w++}v++}else if(P.isRectAreaLight){const J=e.get(P);J.color.copy(Q).multiplyScalar($),J.halfWidth.set(P.width*.5,0,0),J.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=J,m++}else if(P.isPointLight){const J=e.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),J.distance=P.distance,J.decay=P.decay,P.castShadow){const ge=P.shadow,q=n.get(P);q.shadowIntensity=ge.intensity,q.shadowBias=ge.bias,q.shadowNormalBias=ge.normalBias,q.shadowRadius=ge.radius,q.shadowMapSize=ge.mapSize,q.shadowCameraNear=ge.camera.near,q.shadowCameraFar=ge.camera.far,i.pointShadow[_]=q,i.pointShadowMap[_]=pe,i.pointShadowMatrix[_]=P.shadow.matrix,E++}i.point[_]=J,_++}else if(P.isHemisphereLight){const J=e.get(P);J.skyColor.copy(P.color).multiplyScalar($),J.groundColor.copy(P.groundColor).multiplyScalar($),i.hemi[p]=J,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const I=i.hash;(I.directionalLength!==h||I.pointLength!==_||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==A||I.numPointShadows!==E||I.numSpotShadows!==w||I.numSpotMaps!==L||I.numLightProbes!==U)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=w+L-R,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=U,I.directionalLength=h,I.pointLength=_,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=A,I.numPointShadows=E,I.numSpotShadows=w,I.numSpotMaps=L,I.numLightProbes=U,i.version=tR++)}function l(c,u){let d=0,f=0,h=0,_=0,v=0;const m=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const E=c[p];if(E.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),d++}else if(E.isSpotLight){const w=i.spot[h];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),h++}else if(E.isRectAreaLight){const w=i.rectArea[_];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const w=i.hemi[v];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function ip(t){const e=new iR(t),n=[],i=[];function s(u){c.camera=u,n.length=0,i.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function sR(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new ip(t),e.set(s,[a])):r>=o.length?(a=new ip(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const rR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oR=`uniform sampler2D shadow_pass;
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
}`;function aR(t,e,n){let i=new kd;const s=new qe,r=new qe,o=new Lt,a=new DE({depthPacking:WM}),l=new LE,c={},u=n.maxTextureSize,d={[gs]:_n,[_n]:gs,[Fi]:Fi},f=new _s({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:rR,fragmentShader:oR}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const _=new ys;_.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Kn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bg;let p=this.type;this.render=function(R,U,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const y=t.getRenderTarget(),b=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),Q=t.state;Q.setBlending(ps),Q.buffers.depth.getReversed()?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const $=p!==Ri&&this.type===Ri,j=p===Ri&&this.type!==Ri;for(let pe=0,J=R.length;pe<J;pe++){const ge=R[pe],q=ge.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ge,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const Ee=q.getFrameExtents();if(s.multiply(Ee),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Ee.x),s.x=r.x*Ee.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Ee.y),s.y=r.y*Ee.y,q.mapSize.y=r.y)),q.map===null||$===!0||j===!0){const Oe=this.type!==Ri?{minFilter:Jn,magFilter:Jn}:{};q.map!==null&&q.map.dispose(),q.map=new Ks(s.x,s.y,Oe),q.map.texture.name=ge.name+".shadowMap",q.camera.updateProjectionMatrix()}t.setRenderTarget(q.map),t.clear();const Ae=q.getViewportCount();for(let Oe=0;Oe<Ae;Oe++){const ke=q.getViewport(Oe);o.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),Q.viewport(o),q.updateMatrices(ge,Oe),i=q.getFrustum(),w(U,I,q.camera,ge,this.type)}q.isPointLightShadow!==!0&&this.type===Ri&&A(q,I),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(y,b,P)};function A(R,U){const I=e.update(v);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ks(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(U,null,I,f,v,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(U,null,I,h,v,null)}function E(R,U,I,y){let b=null;const P=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)b=P;else if(b=I.isPointLight===!0?l:a,t.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const Q=b.uuid,$=U.uuid;let j=c[Q];j===void 0&&(j={},c[Q]=j);let pe=j[$];pe===void 0&&(pe=b.clone(),j[$]=pe,U.addEventListener("dispose",L)),b=pe}if(b.visible=U.visible,b.wireframe=U.wireframe,y===Ri?b.side=U.shadowSide!==null?U.shadowSide:U.side:b.side=U.shadowSide!==null?U.shadowSide:d[U.side],b.alphaMap=U.alphaMap,b.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,b.map=U.map,b.clipShadows=U.clipShadows,b.clippingPlanes=U.clippingPlanes,b.clipIntersection=U.clipIntersection,b.displacementMap=U.displacementMap,b.displacementScale=U.displacementScale,b.displacementBias=U.displacementBias,b.wireframeLinewidth=U.wireframeLinewidth,b.linewidth=U.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const Q=t.properties.get(b);Q.light=I}return b}function w(R,U,I,y,b){if(R.visible===!1)return;if(R.layers.test(U.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===Ri)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const $=e.update(R),j=R.material;if(Array.isArray(j)){const pe=$.groups;for(let J=0,ge=pe.length;J<ge;J++){const q=pe[J],Ee=j[q.materialIndex];if(Ee&&Ee.visible){const Ae=E(R,Ee,y,b);R.onBeforeShadow(t,R,U,I,$,Ae,q),t.renderBufferDirect(I,null,$,Ae,R,q),R.onAfterShadow(t,R,U,I,$,Ae,q)}}}else if(j.visible){const pe=E(R,j,y,b);R.onBeforeShadow(t,R,U,I,$,pe,null),t.renderBufferDirect(I,null,$,pe,R,null),R.onAfterShadow(t,R,U,I,$,pe,null)}}const Q=R.children;for(let $=0,j=Q.length;$<j;$++)w(Q[$],U,I,y,b)}function L(R){R.target.removeEventListener("dispose",L);for(const I in c){const y=c[I],b=R.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}const lR={[au]:lu,[cu]:fu,[uu]:hu,[qr]:du,[lu]:au,[fu]:cu,[hu]:uu,[du]:qr};function cR(t,e){function n(){let D=!1;const te=new Lt;let ae=null;const ve=new Lt(0,0,0,0);return{setMask:function(re){ae!==re&&!D&&(t.colorMask(re,re,re,re),ae=re)},setLocked:function(re){D=re},setClear:function(re,X,Se,Fe,Je){Je===!0&&(re*=Fe,X*=Fe,Se*=Fe),te.set(re,X,Se,Fe),ve.equals(te)===!1&&(t.clearColor(re,X,Se,Fe),ve.copy(te))},reset:function(){D=!1,ae=null,ve.set(-1,0,0,0)}}}function i(){let D=!1,te=!1,ae=null,ve=null,re=null;return{setReversed:function(X){if(te!==X){const Se=e.get("EXT_clip_control");X?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),te=X;const Fe=re;re=null,this.setClear(Fe)}},getReversed:function(){return te},setTest:function(X){X?B(t.DEPTH_TEST):he(t.DEPTH_TEST)},setMask:function(X){ae!==X&&!D&&(t.depthMask(X),ae=X)},setFunc:function(X){if(te&&(X=lR[X]),ve!==X){switch(X){case au:t.depthFunc(t.NEVER);break;case lu:t.depthFunc(t.ALWAYS);break;case cu:t.depthFunc(t.LESS);break;case qr:t.depthFunc(t.LEQUAL);break;case uu:t.depthFunc(t.EQUAL);break;case du:t.depthFunc(t.GEQUAL);break;case fu:t.depthFunc(t.GREATER);break;case hu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ve=X}},setLocked:function(X){D=X},setClear:function(X){re!==X&&(te&&(X=1-X),t.clearDepth(X),re=X)},reset:function(){D=!1,ae=null,ve=null,re=null,te=!1}}}function s(){let D=!1,te=null,ae=null,ve=null,re=null,X=null,Se=null,Fe=null,Je=null;return{setTest:function(it){D||(it?B(t.STENCIL_TEST):he(t.STENCIL_TEST))},setMask:function(it){te!==it&&!D&&(t.stencilMask(it),te=it)},setFunc:function(it,wi,ti){(ae!==it||ve!==wi||re!==ti)&&(t.stencilFunc(it,wi,ti),ae=it,ve=wi,re=ti)},setOp:function(it,wi,ti){(X!==it||Se!==wi||Fe!==ti)&&(t.stencilOp(it,wi,ti),X=it,Se=wi,Fe=ti)},setLocked:function(it){D=it},setClear:function(it){Je!==it&&(t.clearStencil(it),Je=it)},reset:function(){D=!1,te=null,ae=null,ve=null,re=null,X=null,Se=null,Fe=null,Je=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],_=null,v=!1,m=null,p=null,A=null,E=null,w=null,L=null,R=null,U=new nt(0,0,0),I=0,y=!1,b=null,P=null,Q=null,$=null,j=null;const pe=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,ge=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(ge=parseFloat(/^WebGL (\d)/.exec(q)[1]),J=ge>=1):q.indexOf("OpenGL ES")!==-1&&(ge=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),J=ge>=2);let Ee=null,Ae={};const Oe=t.getParameter(t.SCISSOR_BOX),ke=t.getParameter(t.VIEWPORT),at=new Lt().fromArray(Oe),et=new Lt().fromArray(ke);function le(D,te,ae,ve){const re=new Uint8Array(4),X=t.createTexture();t.bindTexture(D,X),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Se=0;Se<ae;Se++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(te,0,t.RGBA,1,1,ve,0,t.RGBA,t.UNSIGNED_BYTE,re):t.texImage2D(te+Se,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,re);return X}const Te={};Te[t.TEXTURE_2D]=le(t.TEXTURE_2D,t.TEXTURE_2D,1),Te[t.TEXTURE_CUBE_MAP]=le(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[t.TEXTURE_2D_ARRAY]=le(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Te[t.TEXTURE_3D]=le(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),B(t.DEPTH_TEST),o.setFunc(qr),se(!1),W(oh),B(t.CULL_FACE),k(ps);function B(D){u[D]!==!0&&(t.enable(D),u[D]=!0)}function he(D){u[D]!==!1&&(t.disable(D),u[D]=!1)}function ue(D,te){return d[D]!==te?(t.bindFramebuffer(D,te),d[D]=te,D===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=te),D===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=te),!0):!1}function xe(D,te){let ae=h,ve=!1;if(D){ae=f.get(te),ae===void 0&&(ae=[],f.set(te,ae));const re=D.textures;if(ae.length!==re.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let X=0,Se=re.length;X<Se;X++)ae[X]=t.COLOR_ATTACHMENT0+X;ae.length=re.length,ve=!0}}else ae[0]!==t.BACK&&(ae[0]=t.BACK,ve=!0);ve&&t.drawBuffers(ae)}function He(D){return _!==D?(t.useProgram(D),_=D,!0):!1}const T={[Us]:t.FUNC_ADD,[gM]:t.FUNC_SUBTRACT,[_M]:t.FUNC_REVERSE_SUBTRACT};T[vM]=t.MIN,T[xM]=t.MAX;const g={[yM]:t.ZERO,[wM]:t.ONE,[bM]:t.SRC_COLOR,[ru]:t.SRC_ALPHA,[CM]:t.SRC_ALPHA_SATURATE,[TM]:t.DST_COLOR,[MM]:t.DST_ALPHA,[SM]:t.ONE_MINUS_SRC_COLOR,[ou]:t.ONE_MINUS_SRC_ALPHA,[AM]:t.ONE_MINUS_DST_COLOR,[EM]:t.ONE_MINUS_DST_ALPHA,[RM]:t.CONSTANT_COLOR,[PM]:t.ONE_MINUS_CONSTANT_COLOR,[DM]:t.CONSTANT_ALPHA,[LM]:t.ONE_MINUS_CONSTANT_ALPHA};function k(D,te,ae,ve,re,X,Se,Fe,Je,it){if(D===ps){v===!0&&(he(t.BLEND),v=!1);return}if(v===!1&&(B(t.BLEND),v=!0),D!==mM){if(D!==m||it!==y){if((p!==Us||w!==Us)&&(t.blendEquation(t.FUNC_ADD),p=Us,w=Us),it)switch(D){case Rr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ah:t.blendFunc(t.ONE,t.ONE);break;case lh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ch:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Rr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ah:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case lh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ch:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}A=null,E=null,L=null,R=null,U.set(0,0,0),I=0,m=D,y=it}return}re=re||te,X=X||ae,Se=Se||ve,(te!==p||re!==w)&&(t.blendEquationSeparate(T[te],T[re]),p=te,w=re),(ae!==A||ve!==E||X!==L||Se!==R)&&(t.blendFuncSeparate(g[ae],g[ve],g[X],g[Se]),A=ae,E=ve,L=X,R=Se),(Fe.equals(U)===!1||Je!==I)&&(t.blendColor(Fe.r,Fe.g,Fe.b,Je),U.copy(Fe),I=Je),m=D,y=!1}function G(D,te){D.side===Fi?he(t.CULL_FACE):B(t.CULL_FACE);let ae=D.side===_n;te&&(ae=!ae),se(ae),D.blending===Rr&&D.transparent===!1?k(ps):k(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const ve=D.stencilWrite;a.setTest(ve),ve&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ee(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?B(t.SAMPLE_ALPHA_TO_COVERAGE):he(t.SAMPLE_ALPHA_TO_COVERAGE)}function se(D){b!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),b=D)}function W(D){D!==fM?(B(t.CULL_FACE),D!==P&&(D===oh?t.cullFace(t.BACK):D===hM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):he(t.CULL_FACE),P=D}function we(D){D!==Q&&(J&&t.lineWidth(D),Q=D)}function ee(D,te,ae){D?(B(t.POLYGON_OFFSET_FILL),($!==te||j!==ae)&&(t.polygonOffset(te,ae),$=te,j=ae)):he(t.POLYGON_OFFSET_FILL)}function de(D){D?B(t.SCISSOR_TEST):he(t.SCISSOR_TEST)}function _e(D){D===void 0&&(D=t.TEXTURE0+pe-1),Ee!==D&&(t.activeTexture(D),Ee=D)}function De(D,te,ae){ae===void 0&&(Ee===null?ae=t.TEXTURE0+pe-1:ae=Ee);let ve=Ae[ae];ve===void 0&&(ve={type:void 0,texture:void 0},Ae[ae]=ve),(ve.type!==D||ve.texture!==te)&&(Ee!==ae&&(t.activeTexture(ae),Ee=ae),t.bindTexture(D,te||Te[D]),ve.type=D,ve.texture=te)}function S(){const D=Ae[Ee];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function x(){try{t.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function F(){try{t.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{t.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{t.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{t.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(){try{t.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{t.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(){try{t.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{t.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{t.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(D){at.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),at.copy(D))}function O(D){et.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),et.copy(D))}function C(D,te){let ae=c.get(te);ae===void 0&&(ae=new WeakMap,c.set(te,ae));let ve=ae.get(D);ve===void 0&&(ve=t.getUniformBlockIndex(te,D.name),ae.set(D,ve))}function z(D,te){const ve=c.get(te).get(D);l.get(te)!==ve&&(t.uniformBlockBinding(te,ve,D.__bindingPointIndex),l.set(te,ve))}function fe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},Ee=null,Ae={},d={},f=new WeakMap,h=[],_=null,v=!1,m=null,p=null,A=null,E=null,w=null,L=null,R=null,U=new nt(0,0,0),I=0,y=!1,b=null,P=null,Q=null,$=null,j=null,at.set(0,0,t.canvas.width,t.canvas.height),et.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:B,disable:he,bindFramebuffer:ue,drawBuffers:xe,useProgram:He,setBlending:k,setMaterial:G,setFlipSided:se,setCullFace:W,setLineWidth:we,setPolygonOffset:ee,setScissorTest:de,activeTexture:_e,bindTexture:De,unbindTexture:S,compressedTexImage2D:x,compressedTexImage3D:F,texImage2D:Ce,texImage3D:ye,updateUBOMapping:C,uniformBlockBinding:z,texStorage2D:be,texStorage3D:Ie,texSubImage2D:Y,texSubImage3D:ce,compressedTexSubImage2D:K,compressedTexSubImage3D:Le,scissor:Re,viewport:O,reset:fe}}function uR(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,x){return h?new OffscreenCanvas(S,x):wl("canvas")}function v(S,x,F){let Y=1;const ce=De(S);if((ce.width>F||ce.height>F)&&(Y=F/Math.max(ce.width,ce.height)),Y<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const K=Math.floor(Y*ce.width),Le=Math.floor(Y*ce.height);d===void 0&&(d=_(K,Le));const be=x?_(K,Le):d;return be.width=K,be.height=Le,be.getContext("2d").drawImage(S,0,0,K,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+K+"x"+Le+")."),be}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),S;return S}function m(S){return S.generateMipmaps}function p(S){t.generateMipmap(S)}function A(S){return S.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?t.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(S,x,F,Y,ce=!1){if(S!==null){if(t[S]!==void 0)return t[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let K=x;if(x===t.RED&&(F===t.FLOAT&&(K=t.R32F),F===t.HALF_FLOAT&&(K=t.R16F),F===t.UNSIGNED_BYTE&&(K=t.R8)),x===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(K=t.R8UI),F===t.UNSIGNED_SHORT&&(K=t.R16UI),F===t.UNSIGNED_INT&&(K=t.R32UI),F===t.BYTE&&(K=t.R8I),F===t.SHORT&&(K=t.R16I),F===t.INT&&(K=t.R32I)),x===t.RG&&(F===t.FLOAT&&(K=t.RG32F),F===t.HALF_FLOAT&&(K=t.RG16F),F===t.UNSIGNED_BYTE&&(K=t.RG8)),x===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(K=t.RG8UI),F===t.UNSIGNED_SHORT&&(K=t.RG16UI),F===t.UNSIGNED_INT&&(K=t.RG32UI),F===t.BYTE&&(K=t.RG8I),F===t.SHORT&&(K=t.RG16I),F===t.INT&&(K=t.RG32I)),x===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(K=t.RGB8UI),F===t.UNSIGNED_SHORT&&(K=t.RGB16UI),F===t.UNSIGNED_INT&&(K=t.RGB32UI),F===t.BYTE&&(K=t.RGB8I),F===t.SHORT&&(K=t.RGB16I),F===t.INT&&(K=t.RGB32I)),x===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),F===t.UNSIGNED_INT&&(K=t.RGBA32UI),F===t.BYTE&&(K=t.RGBA8I),F===t.SHORT&&(K=t.RGBA16I),F===t.INT&&(K=t.RGBA32I)),x===t.RGB&&F===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),x===t.RGBA){const Le=ce?xl:ut.getTransfer(Y);F===t.FLOAT&&(K=t.RGBA32F),F===t.HALF_FLOAT&&(K=t.RGBA16F),F===t.UNSIGNED_BYTE&&(K=Le===vt?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function w(S,x){let F;return S?x===null||x===js||x===zo?F=t.DEPTH24_STENCIL8:x===Bi?F=t.DEPTH32F_STENCIL8:x===ko&&(F=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===js||x===zo?F=t.DEPTH_COMPONENT24:x===Bi?F=t.DEPTH_COMPONENT32F:x===ko&&(F=t.DEPTH_COMPONENT16),F}function L(S,x){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Jn&&S.minFilter!==di?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function R(S){const x=S.target;x.removeEventListener("dispose",R),I(x),x.isVideoTexture&&u.delete(x)}function U(S){const x=S.target;x.removeEventListener("dispose",U),b(x)}function I(S){const x=i.get(S);if(x.__webglInit===void 0)return;const F=S.source,Y=f.get(F);if(Y){const ce=Y[x.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&y(S),Object.keys(Y).length===0&&f.delete(F)}i.remove(S)}function y(S){const x=i.get(S);t.deleteTexture(x.__webglTexture);const F=S.source,Y=f.get(F);delete Y[x.__cacheKey],o.memory.textures--}function b(S){const x=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let ce=0;ce<x.__webglFramebuffer[Y].length;ce++)t.deleteFramebuffer(x.__webglFramebuffer[Y][ce]);else t.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)t.deleteFramebuffer(x.__webglFramebuffer[Y]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=S.textures;for(let Y=0,ce=F.length;Y<ce;Y++){const K=i.get(F[Y]);K.__webglTexture&&(t.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(F[Y])}i.remove(S)}let P=0;function Q(){P=0}function $(){const S=P;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),P+=1,S}function j(S){const x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function pe(S,x){const F=i.get(S);if(S.isVideoTexture&&de(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&F.__version!==S.version){const Y=S.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(F,S,x);return}}else S.isExternalTexture&&(F.__webglTexture=S.sourceTexture?S.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+x)}function J(S,x){const F=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){Te(F,S,x);return}n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+x)}function ge(S,x){const F=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){Te(F,S,x);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+x)}function q(S,x){const F=i.get(S);if(S.version>0&&F.__version!==S.version){B(F,S,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+x)}const Ee={[gu]:t.REPEAT,[Ns]:t.CLAMP_TO_EDGE,[_u]:t.MIRRORED_REPEAT},Ae={[Jn]:t.NEAREST,[VM]:t.NEAREST_MIPMAP_NEAREST,[xa]:t.NEAREST_MIPMAP_LINEAR,[di]:t.LINEAR,[cc]:t.LINEAR_MIPMAP_NEAREST,[Fs]:t.LINEAR_MIPMAP_LINEAR},Oe={[$M]:t.NEVER,[QM]:t.ALWAYS,[qM]:t.LESS,[Kg]:t.LEQUAL,[jM]:t.EQUAL,[ZM]:t.GEQUAL,[YM]:t.GREATER,[KM]:t.NOTEQUAL};function ke(S,x){if(x.type===Bi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===di||x.magFilter===cc||x.magFilter===xa||x.magFilter===Fs||x.minFilter===di||x.minFilter===cc||x.minFilter===xa||x.minFilter===Fs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(S,t.TEXTURE_WRAP_S,Ee[x.wrapS]),t.texParameteri(S,t.TEXTURE_WRAP_T,Ee[x.wrapT]),(S===t.TEXTURE_3D||S===t.TEXTURE_2D_ARRAY)&&t.texParameteri(S,t.TEXTURE_WRAP_R,Ee[x.wrapR]),t.texParameteri(S,t.TEXTURE_MAG_FILTER,Ae[x.magFilter]),t.texParameteri(S,t.TEXTURE_MIN_FILTER,Ae[x.minFilter]),x.compareFunction&&(t.texParameteri(S,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(S,t.TEXTURE_COMPARE_FUNC,Oe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Jn||x.minFilter!==xa&&x.minFilter!==Fs||x.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(S,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function at(S,x){let F=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",R));const Y=x.source;let ce=f.get(Y);ce===void 0&&(ce={},f.set(Y,ce));const K=j(x);if(K!==S.__cacheKey){ce[K]===void 0&&(ce[K]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ce[K].usedTimes++;const Le=ce[S.__cacheKey];Le!==void 0&&(ce[S.__cacheKey].usedTimes--,Le.usedTimes===0&&y(x)),S.__cacheKey=K,S.__webglTexture=ce[K].texture}return F}function et(S,x,F){return Math.floor(Math.floor(S/F)/x)}function le(S,x,F,Y){const K=S.updateRanges;if(K.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,F,Y,x.data);else{K.sort((ye,Re)=>ye.start-Re.start);let Le=0;for(let ye=1;ye<K.length;ye++){const Re=K[Le],O=K[ye],C=Re.start+Re.count,z=et(O.start,x.width,4),fe=et(Re.start,x.width,4);O.start<=C+1&&z===fe&&et(O.start+O.count-1,x.width,4)===z?Re.count=Math.max(Re.count,O.start+O.count-Re.start):(++Le,K[Le]=O)}K.length=Le+1;const be=t.getParameter(t.UNPACK_ROW_LENGTH),Ie=t.getParameter(t.UNPACK_SKIP_PIXELS),Ce=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let ye=0,Re=K.length;ye<Re;ye++){const O=K[ye],C=Math.floor(O.start/4),z=Math.ceil(O.count/4),fe=C%x.width,D=Math.floor(C/x.width),te=z,ae=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(t.UNPACK_SKIP_ROWS,D),n.texSubImage2D(t.TEXTURE_2D,0,fe,D,te,ae,F,Y,x.data)}S.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,be),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ie),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ce)}}function Te(S,x,F){let Y=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=t.TEXTURE_3D);const ce=at(S,x),K=x.source;n.bindTexture(Y,S.__webglTexture,t.TEXTURE0+F);const Le=i.get(K);if(K.version!==Le.__version||ce===!0){n.activeTexture(t.TEXTURE0+F);const be=ut.getPrimaries(ut.workingColorSpace),Ie=x.colorSpace===ss?null:ut.getPrimaries(x.colorSpace),Ce=x.colorSpace===ss||be===Ie?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let ye=v(x.image,!1,s.maxTextureSize);ye=_e(x,ye);const Re=r.convert(x.format,x.colorSpace),O=r.convert(x.type);let C=E(x.internalFormat,Re,O,x.colorSpace,x.isVideoTexture);ke(Y,x);let z;const fe=x.mipmaps,D=x.isVideoTexture!==!0,te=Le.__version===void 0||ce===!0,ae=K.dataReady,ve=L(x,ye);if(x.isDepthTexture)C=w(x.format===Vo,x.type),te&&(D?n.texStorage2D(t.TEXTURE_2D,1,C,ye.width,ye.height):n.texImage2D(t.TEXTURE_2D,0,C,ye.width,ye.height,0,Re,O,null));else if(x.isDataTexture)if(fe.length>0){D&&te&&n.texStorage2D(t.TEXTURE_2D,ve,C,fe[0].width,fe[0].height);for(let re=0,X=fe.length;re<X;re++)z=fe[re],D?ae&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,z.width,z.height,Re,O,z.data):n.texImage2D(t.TEXTURE_2D,re,C,z.width,z.height,0,Re,O,z.data);x.generateMipmaps=!1}else D?(te&&n.texStorage2D(t.TEXTURE_2D,ve,C,ye.width,ye.height),ae&&le(x,ye,Re,O)):n.texImage2D(t.TEXTURE_2D,0,C,ye.width,ye.height,0,Re,O,ye.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){D&&te&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,C,fe[0].width,fe[0].height,ye.depth);for(let re=0,X=fe.length;re<X;re++)if(z=fe[re],x.format!==Yn)if(Re!==null)if(D){if(ae)if(x.layerUpdates.size>0){const Se=Ih(z.width,z.height,x.format,x.type);for(const Fe of x.layerUpdates){const Je=z.data.subarray(Fe*Se/z.data.BYTES_PER_ELEMENT,(Fe+1)*Se/z.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,Fe,z.width,z.height,1,Re,Je)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,z.width,z.height,ye.depth,Re,z.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,re,C,z.width,z.height,ye.depth,0,z.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ae&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,z.width,z.height,ye.depth,Re,O,z.data):n.texImage3D(t.TEXTURE_2D_ARRAY,re,C,z.width,z.height,ye.depth,0,Re,O,z.data)}else{D&&te&&n.texStorage2D(t.TEXTURE_2D,ve,C,fe[0].width,fe[0].height);for(let re=0,X=fe.length;re<X;re++)z=fe[re],x.format!==Yn?Re!==null?D?ae&&n.compressedTexSubImage2D(t.TEXTURE_2D,re,0,0,z.width,z.height,Re,z.data):n.compressedTexImage2D(t.TEXTURE_2D,re,C,z.width,z.height,0,z.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ae&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,z.width,z.height,Re,O,z.data):n.texImage2D(t.TEXTURE_2D,re,C,z.width,z.height,0,Re,O,z.data)}else if(x.isDataArrayTexture)if(D){if(te&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,C,ye.width,ye.height,ye.depth),ae)if(x.layerUpdates.size>0){const re=Ih(ye.width,ye.height,x.format,x.type);for(const X of x.layerUpdates){const Se=ye.data.subarray(X*re/ye.data.BYTES_PER_ELEMENT,(X+1)*re/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,X,ye.width,ye.height,1,Re,O,Se)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Re,O,ye.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,C,ye.width,ye.height,ye.depth,0,Re,O,ye.data);else if(x.isData3DTexture)D?(te&&n.texStorage3D(t.TEXTURE_3D,ve,C,ye.width,ye.height,ye.depth),ae&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Re,O,ye.data)):n.texImage3D(t.TEXTURE_3D,0,C,ye.width,ye.height,ye.depth,0,Re,O,ye.data);else if(x.isFramebufferTexture){if(te)if(D)n.texStorage2D(t.TEXTURE_2D,ve,C,ye.width,ye.height);else{let re=ye.width,X=ye.height;for(let Se=0;Se<ve;Se++)n.texImage2D(t.TEXTURE_2D,Se,C,re,X,0,Re,O,null),re>>=1,X>>=1}}else if(fe.length>0){if(D&&te){const re=De(fe[0]);n.texStorage2D(t.TEXTURE_2D,ve,C,re.width,re.height)}for(let re=0,X=fe.length;re<X;re++)z=fe[re],D?ae&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,Re,O,z):n.texImage2D(t.TEXTURE_2D,re,C,Re,O,z);x.generateMipmaps=!1}else if(D){if(te){const re=De(ye);n.texStorage2D(t.TEXTURE_2D,ve,C,re.width,re.height)}ae&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Re,O,ye)}else n.texImage2D(t.TEXTURE_2D,0,C,Re,O,ye);m(x)&&p(Y),Le.__version=K.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function B(S,x,F){if(x.image.length!==6)return;const Y=at(S,x),ce=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,S.__webglTexture,t.TEXTURE0+F);const K=i.get(ce);if(ce.version!==K.__version||Y===!0){n.activeTexture(t.TEXTURE0+F);const Le=ut.getPrimaries(ut.workingColorSpace),be=x.colorSpace===ss?null:ut.getPrimaries(x.colorSpace),Ie=x.colorSpace===ss||Le===be?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const Ce=x.isCompressedTexture||x.image[0].isCompressedTexture,ye=x.image[0]&&x.image[0].isDataTexture,Re=[];for(let X=0;X<6;X++)!Ce&&!ye?Re[X]=v(x.image[X],!0,s.maxCubemapSize):Re[X]=ye?x.image[X].image:x.image[X],Re[X]=_e(x,Re[X]);const O=Re[0],C=r.convert(x.format,x.colorSpace),z=r.convert(x.type),fe=E(x.internalFormat,C,z,x.colorSpace),D=x.isVideoTexture!==!0,te=K.__version===void 0||Y===!0,ae=ce.dataReady;let ve=L(x,O);ke(t.TEXTURE_CUBE_MAP,x);let re;if(Ce){D&&te&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,fe,O.width,O.height);for(let X=0;X<6;X++){re=Re[X].mipmaps;for(let Se=0;Se<re.length;Se++){const Fe=re[Se];x.format!==Yn?C!==null?D?ae&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,Se,0,0,Fe.width,Fe.height,C,Fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,Se,fe,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,Se,0,0,Fe.width,Fe.height,C,z,Fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,Se,fe,Fe.width,Fe.height,0,C,z,Fe.data)}}}else{if(re=x.mipmaps,D&&te){re.length>0&&ve++;const X=De(Re[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,fe,X.width,X.height)}for(let X=0;X<6;X++)if(ye){D?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Re[X].width,Re[X].height,C,z,Re[X].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,fe,Re[X].width,Re[X].height,0,C,z,Re[X].data);for(let Se=0;Se<re.length;Se++){const Je=re[Se].image[X].image;D?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,Se+1,0,0,Je.width,Je.height,C,z,Je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,Se+1,fe,Je.width,Je.height,0,C,z,Je.data)}}else{D?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,C,z,Re[X]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,fe,C,z,Re[X]);for(let Se=0;Se<re.length;Se++){const Fe=re[Se];D?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,Se+1,0,0,C,z,Fe.image[X]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,Se+1,fe,C,z,Fe.image[X])}}}m(x)&&p(t.TEXTURE_CUBE_MAP),K.__version=ce.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function he(S,x,F,Y,ce,K){const Le=r.convert(F.format,F.colorSpace),be=r.convert(F.type),Ie=E(F.internalFormat,Le,be,F.colorSpace),Ce=i.get(x),ye=i.get(F);if(ye.__renderTarget=x,!Ce.__hasExternalTextures){const Re=Math.max(1,x.width>>K),O=Math.max(1,x.height>>K);ce===t.TEXTURE_3D||ce===t.TEXTURE_2D_ARRAY?n.texImage3D(ce,K,Ie,Re,O,x.depth,0,Le,be,null):n.texImage2D(ce,K,Ie,Re,O,0,Le,be,null)}n.bindFramebuffer(t.FRAMEBUFFER,S),ee(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,ce,ye.__webglTexture,0,we(x)):(ce===t.TEXTURE_2D||ce>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,ce,ye.__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(S,x,F){if(t.bindRenderbuffer(t.RENDERBUFFER,S),x.depthBuffer){const Y=x.depthTexture,ce=Y&&Y.isDepthTexture?Y.type:null,K=w(x.stencilBuffer,ce),Le=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,be=we(x);ee(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,be,K,x.width,x.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,be,K,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,K,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Le,t.RENDERBUFFER,S)}else{const Y=x.textures;for(let ce=0;ce<Y.length;ce++){const K=Y[ce],Le=r.convert(K.format,K.colorSpace),be=r.convert(K.type),Ie=E(K.internalFormat,Le,be,K.colorSpace),Ce=we(x);F&&ee(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,Ie,x.width,x.height):ee(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce,Ie,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,Ie,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function xe(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),pe(x.depthTexture,0);const ce=Y.__webglTexture,K=we(x);if(x.depthTexture.format===Ho)ee(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ce,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ce,0);else if(x.depthTexture.format===Vo)ee(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ce,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function He(S){const x=i.get(S),F=S.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==S.depthTexture){const Y=S.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const ce=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",ce)};Y.addEventListener("dispose",ce),x.__depthDisposeCallback=ce}x.__boundDepthTexture=Y}if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const Y=S.texture.mipmaps;Y&&Y.length>0?xe(x.__webglFramebuffer[0],S):xe(x.__webglFramebuffer,S)}else if(F){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=t.createRenderbuffer(),ue(x.__webglDepthbuffer[Y],S,!1);else{const ce=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,ce,t.RENDERBUFFER,K)}}else{const Y=S.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),ue(x.__webglDepthbuffer,S,!1);else{const ce=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,ce,t.RENDERBUFFER,K)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function T(S,x,F){const Y=i.get(S);x!==void 0&&he(Y.__webglFramebuffer,S,S.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&He(S)}function g(S){const x=S.texture,F=i.get(S),Y=i.get(x);S.addEventListener("dispose",U);const ce=S.textures,K=S.isWebGLCubeRenderTarget===!0,Le=ce.length>1;if(Le||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=x.version,o.memory.textures++),K){F.__webglFramebuffer=[];for(let be=0;be<6;be++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[be]=[];for(let Ie=0;Ie<x.mipmaps.length;Ie++)F.__webglFramebuffer[be][Ie]=t.createFramebuffer()}else F.__webglFramebuffer[be]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let be=0;be<x.mipmaps.length;be++)F.__webglFramebuffer[be]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(Le)for(let be=0,Ie=ce.length;be<Ie;be++){const Ce=i.get(ce[be]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=t.createTexture(),o.memory.textures++)}if(S.samples>0&&ee(S)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let be=0;be<ce.length;be++){const Ie=ce[be];F.__webglColorRenderbuffer[be]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[be]);const Ce=r.convert(Ie.format,Ie.colorSpace),ye=r.convert(Ie.type),Re=E(Ie.internalFormat,Ce,ye,Ie.colorSpace,S.isXRRenderTarget===!0),O=we(S);t.renderbufferStorageMultisample(t.RENDERBUFFER,O,Re,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,F.__webglColorRenderbuffer[be])}t.bindRenderbuffer(t.RENDERBUFFER,null),S.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),ue(F.__webglDepthRenderbuffer,S,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),ke(t.TEXTURE_CUBE_MAP,x);for(let be=0;be<6;be++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ie=0;Ie<x.mipmaps.length;Ie++)he(F.__webglFramebuffer[be][Ie],S,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ie);else he(F.__webglFramebuffer[be],S,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);m(x)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Le){for(let be=0,Ie=ce.length;be<Ie;be++){const Ce=ce[be],ye=i.get(Ce);let Re=t.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(Re=S.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Re,ye.__webglTexture),ke(Re,Ce),he(F.__webglFramebuffer,S,Ce,t.COLOR_ATTACHMENT0+be,Re,0),m(Ce)&&p(Re)}n.unbindTexture()}else{let be=t.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(be=S.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(be,Y.__webglTexture),ke(be,x),x.mipmaps&&x.mipmaps.length>0)for(let Ie=0;Ie<x.mipmaps.length;Ie++)he(F.__webglFramebuffer[Ie],S,x,t.COLOR_ATTACHMENT0,be,Ie);else he(F.__webglFramebuffer,S,x,t.COLOR_ATTACHMENT0,be,0);m(x)&&p(be),n.unbindTexture()}S.depthBuffer&&He(S)}function k(S){const x=S.textures;for(let F=0,Y=x.length;F<Y;F++){const ce=x[F];if(m(ce)){const K=A(S),Le=i.get(ce).__webglTexture;n.bindTexture(K,Le),p(K),n.unbindTexture()}}}const G=[],se=[];function W(S){if(S.samples>0){if(ee(S)===!1){const x=S.textures,F=S.width,Y=S.height;let ce=t.COLOR_BUFFER_BIT;const K=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Le=i.get(S),be=x.length>1;if(be)for(let Ce=0;Ce<x.length;Ce++)n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const Ie=S.texture.mipmaps;Ie&&Ie.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ce=0;Ce<x.length;Ce++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(ce|=t.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(ce|=t.STENCIL_BUFFER_BIT)),be){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Le.__webglColorRenderbuffer[Ce]);const ye=i.get(x[Ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ye,0)}t.blitFramebuffer(0,0,F,Y,0,0,F,Y,ce,t.NEAREST),l===!0&&(G.length=0,se.length=0,G.push(t.COLOR_ATTACHMENT0+Ce),S.depthBuffer&&S.resolveDepthBuffer===!1&&(G.push(K),se.push(K),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,se)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,G))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),be)for(let Ce=0;Ce<x.length;Ce++){n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,Le.__webglColorRenderbuffer[Ce]);const ye=i.get(x[Ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,ye,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const x=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function we(S){return Math.min(s.maxSamples,S.samples)}function ee(S){const x=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function de(S){const x=o.render.frame;u.get(S)!==x&&(u.set(S,x),S.update())}function _e(S,x){const F=S.colorSpace,Y=S.format,ce=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||F!==Kr&&F!==ss&&(ut.getTransfer(F)===vt?(Y!==Yn||ce!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function De(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=Q,this.setTexture2D=pe,this.setTexture2DArray=J,this.setTexture3D=ge,this.setTextureCube=q,this.rebindTextures=T,this.setupRenderTarget=g,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=he,this.useMultisampledRTT=ee}function dR(t,e){function n(i,s=ss){let r;const o=ut.getTransfer(s);if(i===xi)return t.UNSIGNED_BYTE;if(i===Ld)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Id)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Gg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Hg)return t.BYTE;if(i===Vg)return t.SHORT;if(i===ko)return t.UNSIGNED_SHORT;if(i===Dd)return t.INT;if(i===js)return t.UNSIGNED_INT;if(i===Bi)return t.FLOAT;if(i===oa)return t.HALF_FLOAT;if(i===Wg)return t.ALPHA;if(i===Xg)return t.RGB;if(i===Yn)return t.RGBA;if(i===Ho)return t.DEPTH_COMPONENT;if(i===Vo)return t.DEPTH_STENCIL;if(i===$g)return t.RED;if(i===Ud)return t.RED_INTEGER;if(i===qg)return t.RG;if(i===Od)return t.RG_INTEGER;if(i===Nd)return t.RGBA_INTEGER;if(i===ja||i===Ya||i===Ka||i===Za)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ja)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ja)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Za)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vu||i===xu||i===yu||i===wu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===vu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bu||i===Su||i===Mu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===bu||i===Su)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Mu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Eu||i===Tu||i===Au||i===Cu||i===Ru||i===Pu||i===Du||i===Lu||i===Iu||i===Uu||i===Ou||i===Nu||i===Fu||i===Bu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Eu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Tu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Au)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Cu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ru)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Du)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Lu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Iu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ou)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qa||i===ku||i===zu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Qa)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ku)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jg||i===Hu||i===Vu||i===Gu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Qa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Hu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class x_ extends vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const fR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hR=`
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

}`;class pR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new x_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new _s({vertexShader:fR,fragmentShader:hR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Kn(new Hl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mR extends er{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,_=null;const v=new pR,m={},p=n.getContextAttributes();let A=null,E=null;const w=[],L=[],R=new qe;let U=null;const I=new Tn;I.viewport=new Lt;const y=new Tn;y.viewport=new Lt;const b=[I,y],P=new OE;let Q=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let Te=w[le];return Te===void 0&&(Te=new Dc,w[le]=Te),Te.getTargetRaySpace()},this.getControllerGrip=function(le){let Te=w[le];return Te===void 0&&(Te=new Dc,w[le]=Te),Te.getGripSpace()},this.getHand=function(le){let Te=w[le];return Te===void 0&&(Te=new Dc,w[le]=Te),Te.getHandSpace()};function j(le){const Te=L.indexOf(le.inputSource);if(Te===-1)return;const B=w[Te];B!==void 0&&(B.update(le.inputSource,le.frame,c||o),B.dispatchEvent({type:le.type,data:le.inputSource}))}function pe(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",pe),s.removeEventListener("inputsourceschange",J);for(let le=0;le<w.length;le++){const Te=L[le];Te!==null&&(L[le]=null,w[le].disconnect(Te))}Q=null,$=null,v.reset();for(const le in m)delete m[le];e.setRenderTarget(A),h=null,f=null,d=null,s=null,E=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){r=le,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){a=le,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(le){c=le},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(le){if(s=le,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",pe),s.addEventListener("inputsourceschange",J),p.xrCompatible!==!0&&await n.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(R),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(s,n)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let B=null,he=null,ue=null;p.depth&&(ue=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,B=p.stencil?Vo:Ho,he=p.stencil?zo:js);const xe={colorFormat:n.RGBA8,depthFormat:ue,scaleFactor:r};f=d.createProjectionLayer(xe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Ks(f.textureWidth,f.textureHeight,{format:Yn,type:xi,depthTexture:new c_(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const B={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,n,B),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),E=new Ks(h.framebufferWidth,h.framebufferHeight,{format:Yn,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),et.setContext(s),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function J(le){for(let Te=0;Te<le.removed.length;Te++){const B=le.removed[Te],he=L.indexOf(B);he>=0&&(L[he]=null,w[he].disconnect(B))}for(let Te=0;Te<le.added.length;Te++){const B=le.added[Te];let he=L.indexOf(B);if(he===-1){for(let xe=0;xe<w.length;xe++)if(xe>=L.length){L.push(B),he=xe;break}else if(L[xe]===null){L[xe]=B,he=xe;break}if(he===-1)break}const ue=w[he];ue&&ue.connect(B)}}const ge=new Z,q=new Z;function Ee(le,Te,B){ge.setFromMatrixPosition(Te.matrixWorld),q.setFromMatrixPosition(B.matrixWorld);const he=ge.distanceTo(q),ue=Te.projectionMatrix.elements,xe=B.projectionMatrix.elements,He=ue[14]/(ue[10]-1),T=ue[14]/(ue[10]+1),g=(ue[9]+1)/ue[5],k=(ue[9]-1)/ue[5],G=(ue[8]-1)/ue[0],se=(xe[8]+1)/xe[0],W=He*G,we=He*se,ee=he/(-G+se),de=ee*-G;if(Te.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(de),le.translateZ(ee),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),ue[10]===-1)le.projectionMatrix.copy(Te.projectionMatrix),le.projectionMatrixInverse.copy(Te.projectionMatrixInverse);else{const _e=He+ee,De=T+ee,S=W-de,x=we+(he-de),F=g*T/De*_e,Y=k*T/De*_e;le.projectionMatrix.makePerspective(S,x,F,Y,_e,De),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function Ae(le,Te){Te===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(Te.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(s===null)return;let Te=le.near,B=le.far;v.texture!==null&&(v.depthNear>0&&(Te=v.depthNear),v.depthFar>0&&(B=v.depthFar)),P.near=y.near=I.near=Te,P.far=y.far=I.far=B,(Q!==P.near||$!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),Q=P.near,$=P.far),P.layers.mask=le.layers.mask|6,I.layers.mask=P.layers.mask&3,y.layers.mask=P.layers.mask&5;const he=le.parent,ue=P.cameras;Ae(P,he);for(let xe=0;xe<ue.length;xe++)Ae(ue[xe],he);ue.length===2?Ee(P,I,y):P.projectionMatrix.copy(I.projectionMatrix),Oe(le,P,he)};function Oe(le,Te,B){B===null?le.matrix.copy(Te.matrixWorld):(le.matrix.copy(B.matrixWorld),le.matrix.invert(),le.matrix.multiply(Te.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(Te.projectionMatrix),le.projectionMatrixInverse.copy(Te.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=Wu*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(le){l=le,f!==null&&(f.fixedFoveation=le),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=le)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(P)},this.getCameraTexture=function(le){return m[le]};let ke=null;function at(le,Te){if(u=Te.getViewerPose(c||o),_=Te,u!==null){const B=u.views;h!==null&&(e.setRenderTargetFramebuffer(E,h.framebuffer),e.setRenderTarget(E));let he=!1;B.length!==P.cameras.length&&(P.cameras.length=0,he=!0);for(let T=0;T<B.length;T++){const g=B[T];let k=null;if(h!==null)k=h.getViewport(g);else{const se=d.getViewSubImage(f,g);k=se.viewport,T===0&&(e.setRenderTargetTextures(E,se.colorTexture,se.depthStencilTexture),e.setRenderTarget(E))}let G=b[T];G===void 0&&(G=new Tn,G.layers.enable(T),G.viewport=new Lt,b[T]=G),G.matrix.fromArray(g.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(g.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(k.x,k.y,k.width,k.height),T===0&&(P.matrix.copy(G.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),he===!0&&P.cameras.push(G)}const ue=s.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&d){const T=d.getDepthInformation(B[0]);T&&T.isValid&&T.texture&&v.init(T,s.renderState)}if(ue&&ue.includes("camera-access")&&(e.state.unbindTexture(),d))for(let T=0;T<B.length;T++){const g=B[T].camera;if(g){let k=m[g];k||(k=new x_,m[g]=k);const G=d.getCameraImage(g);k.sourceTexture=G}}}for(let B=0;B<w.length;B++){const he=L[B],ue=w[B];he!==null&&ue!==void 0&&ue.update(he,Te,c||o)}ke&&ke(le,Te),Te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Te}),_=null}const et=new p_;et.setAnimationLoop(at),this.setAnimationLoop=function(le){ke=le},this.dispose=function(){}}}const Ds=new yi,gR=new Ut;function _R(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,r_(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,A,E,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,w)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,A,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===_n&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===_n&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),E=A.envMap,w=A.envMapRotation;E&&(m.envMap.value=E,Ds.copy(w),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),m.envMapRotation.value.setFromMatrix4(gR.makeRotationFromEuler(Ds)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=E*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===_n&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function vR(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,E){const w=E.program;i.uniformBlockBinding(A,w)}function c(A,E){let w=s[A.id];w===void 0&&(_(A),w=u(A),s[A.id]=w,A.addEventListener("dispose",m));const L=E.program;i.updateUBOMapping(A,L);const R=e.render.frame;r[A.id]!==R&&(f(A),r[A.id]=R)}function u(A){const E=d();A.__bindingPointIndex=E;const w=t.createBuffer(),L=A.__size,R=A.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,L,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,w),w}function d(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const E=s[A.id],w=A.uniforms,L=A.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let R=0,U=w.length;R<U;R++){const I=Array.isArray(w[R])?w[R]:[w[R]];for(let y=0,b=I.length;y<b;y++){const P=I[y];if(h(P,R,y,L)===!0){const Q=P.__offset,$=Array.isArray(P.value)?P.value:[P.value];let j=0;for(let pe=0;pe<$.length;pe++){const J=$[pe],ge=v(J);typeof J=="number"||typeof J=="boolean"?(P.__data[0]=J,t.bufferSubData(t.UNIFORM_BUFFER,Q+j,P.__data)):J.isMatrix3?(P.__data[0]=J.elements[0],P.__data[1]=J.elements[1],P.__data[2]=J.elements[2],P.__data[3]=0,P.__data[4]=J.elements[3],P.__data[5]=J.elements[4],P.__data[6]=J.elements[5],P.__data[7]=0,P.__data[8]=J.elements[6],P.__data[9]=J.elements[7],P.__data[10]=J.elements[8],P.__data[11]=0):(J.toArray(P.__data,j),j+=ge.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Q,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(A,E,w,L){const R=A.value,U=E+"_"+w;if(L[U]===void 0)return typeof R=="number"||typeof R=="boolean"?L[U]=R:L[U]=R.clone(),!0;{const I=L[U];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return L[U]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function _(A){const E=A.uniforms;let w=0;const L=16;for(let U=0,I=E.length;U<I;U++){const y=Array.isArray(E[U])?E[U]:[E[U]];for(let b=0,P=y.length;b<P;b++){const Q=y[b],$=Array.isArray(Q.value)?Q.value:[Q.value];for(let j=0,pe=$.length;j<pe;j++){const J=$[j],ge=v(J),q=w%L,Ee=q%ge.boundary,Ae=q+Ee;w+=Ee,Ae!==0&&L-Ae<ge.storage&&(w+=L-Ae),Q.__data=new Float32Array(ge.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=w,w+=ge.storage}}}const R=w%L;return R>0&&(w+=L-R),A.__size=w,A.__cache={},this}function v(A){const E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function m(A){const E=A.target;E.removeEventListener("dispose",m);const w=o.indexOf(E.__bindingPointIndex);o.splice(w,1),t.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const A in s)t.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class y_{constructor(e={}){const{canvas:n=tE(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const A=[],E=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ms,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let L=!1;this._outputColorSpace=Nn;let R=0,U=0,I=null,y=-1,b=null;const P=new Lt,Q=new Lt;let $=null;const j=new nt(0);let pe=0,J=n.width,ge=n.height,q=1,Ee=null,Ae=null;const Oe=new Lt(0,0,J,ge),ke=new Lt(0,0,J,ge);let at=!1;const et=new kd;let le=!1,Te=!1;const B=new Ut,he=new Z,ue=new Lt,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function T(){return I===null?q:1}let g=i;function k(M,H){return n.getContext(M,H)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Pd}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",ve,!1),n.addEventListener("webglcontextcreationerror",re,!1),g===null){const H="webgl2";if(g=k(H,M),g===null)throw k(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let G,se,W,we,ee,de,_e,De,S,x,F,Y,ce,K,Le,be,Ie,Ce,ye,Re,O,C,z,fe;function D(){G=new RC(g),G.init(),C=new dR(g,G),se=new bC(g,G,e,C),W=new cR(g,G),se.reversedDepthBuffer&&f&&W.buffers.depth.setReversed(!0),we=new LC(g),ee=new K1,de=new uR(g,G,W,ee,se,C,we),_e=new MC(w),De=new CC(w),S=new BE(g),z=new yC(g,S),x=new PC(g,S,we,z),F=new UC(g,x,S,we),ye=new IC(g,se,de),be=new SC(ee),Y=new Y1(w,_e,De,G,se,z,be),ce=new _R(w,ee),K=new Q1,Le=new sR(G),Ce=new xC(w,_e,De,W,F,h,l),Ie=new aR(w,F,se),fe=new vR(g,we,se,W),Re=new wC(g,G,we),O=new DC(g,G,we),we.programs=Y.programs,w.capabilities=se,w.extensions=G,w.properties=ee,w.renderLists=K,w.shadowMap=Ie,w.state=W,w.info=we}D();const te=new mR(w,g);this.xr=te,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const M=G.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=G.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(M){M!==void 0&&(q=M,this.setSize(J,ge,!1))},this.getSize=function(M){return M.set(J,ge)},this.setSize=function(M,H,ne=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=M,ge=H,n.width=Math.floor(M*q),n.height=Math.floor(H*q),ne===!0&&(n.style.width=M+"px",n.style.height=H+"px"),this.setViewport(0,0,M,H)},this.getDrawingBufferSize=function(M){return M.set(J*q,ge*q).floor()},this.setDrawingBufferSize=function(M,H,ne){J=M,ge=H,q=ne,n.width=Math.floor(M*ne),n.height=Math.floor(H*ne),this.setViewport(0,0,M,H)},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(Oe)},this.setViewport=function(M,H,ne,ie){M.isVector4?Oe.set(M.x,M.y,M.z,M.w):Oe.set(M,H,ne,ie),W.viewport(P.copy(Oe).multiplyScalar(q).round())},this.getScissor=function(M){return M.copy(ke)},this.setScissor=function(M,H,ne,ie){M.isVector4?ke.set(M.x,M.y,M.z,M.w):ke.set(M,H,ne,ie),W.scissor(Q.copy(ke).multiplyScalar(q).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(M){W.setScissorTest(at=M)},this.setOpaqueSort=function(M){Ee=M},this.setTransparentSort=function(M){Ae=M},this.getClearColor=function(M){return M.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(M=!0,H=!0,ne=!0){let ie=0;if(M){let V=!1;if(I!==null){const Me=I.texture.format;V=Me===Nd||Me===Od||Me===Ud}if(V){const Me=I.texture.type,Ue=Me===xi||Me===js||Me===ko||Me===zo||Me===Ld||Me===Id,Be=Ce.getClearColor(),Ne=Ce.getClearAlpha(),Xe=Be.r,$e=Be.g,ze=Be.b;Ue?(_[0]=Xe,_[1]=$e,_[2]=ze,_[3]=Ne,g.clearBufferuiv(g.COLOR,0,_)):(v[0]=Xe,v[1]=$e,v[2]=ze,v[3]=Ne,g.clearBufferiv(g.COLOR,0,v))}else ie|=g.COLOR_BUFFER_BIT}H&&(ie|=g.DEPTH_BUFFER_BIT),ne&&(ie|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",ve,!1),n.removeEventListener("webglcontextcreationerror",re,!1),Ce.dispose(),K.dispose(),Le.dispose(),ee.dispose(),_e.dispose(),De.dispose(),F.dispose(),z.dispose(),fe.dispose(),Y.dispose(),te.dispose(),te.removeEventListener("sessionstart",ti),te.removeEventListener("sessionend",Wd),ws.stop()};function ae(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const M=we.autoReset,H=Ie.enabled,ne=Ie.autoUpdate,ie=Ie.needsUpdate,V=Ie.type;D(),we.autoReset=M,Ie.enabled=H,Ie.autoUpdate=ne,Ie.needsUpdate=ie,Ie.type=V}function re(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function X(M){const H=M.target;H.removeEventListener("dispose",X),Se(H)}function Se(M){Fe(M),ee.remove(M)}function Fe(M){const H=ee.get(M).programs;H!==void 0&&(H.forEach(function(ne){Y.releaseProgram(ne)}),M.isShaderMaterial&&Y.releaseShaderCache(M))}this.renderBufferDirect=function(M,H,ne,ie,V,Me){H===null&&(H=xe);const Ue=V.isMesh&&V.matrixWorld.determinant()<0,Be=I_(M,H,ne,ie,V);W.setMaterial(ie,Ue);let Ne=ne.index,Xe=1;if(ie.wireframe===!0){if(Ne=x.getWireframeAttribute(ne),Ne===void 0)return;Xe=2}const $e=ne.drawRange,ze=ne.attributes.position;let rt=$e.start*Xe,_t=($e.start+$e.count)*Xe;Me!==null&&(rt=Math.max(rt,Me.start*Xe),_t=Math.min(_t,(Me.start+Me.count)*Xe)),Ne!==null?(rt=Math.max(rt,0),_t=Math.min(_t,Ne.count)):ze!=null&&(rt=Math.max(rt,0),_t=Math.min(_t,ze.count));const Ct=_t-rt;if(Ct<0||Ct===1/0)return;z.setup(V,ie,Be,ne,Ne);let Et,yt=Re;if(Ne!==null&&(Et=S.get(Ne),yt=O,yt.setIndex(Et)),V.isMesh)ie.wireframe===!0?(W.setLineWidth(ie.wireframeLinewidth*T()),yt.setMode(g.LINES)):yt.setMode(g.TRIANGLES);else if(V.isLine){let Ge=ie.linewidth;Ge===void 0&&(Ge=1),W.setLineWidth(Ge*T()),V.isLineSegments?yt.setMode(g.LINES):V.isLineLoop?yt.setMode(g.LINE_LOOP):yt.setMode(g.LINE_STRIP)}else V.isPoints?yt.setMode(g.POINTS):V.isSprite&&yt.setMode(g.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Pr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(G.get("WEBGL_multi_draw"))yt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ge=V._multiDrawStarts,Tt=V._multiDrawCounts,lt=V._multiDrawCount,yn=Ne?S.get(Ne).bytesPerElement:1,tr=ee.get(ie).currentProgram.getUniforms();for(let wn=0;wn<lt;wn++)tr.setValue(g,"_gl_DrawID",wn),yt.render(Ge[wn]/yn,Tt[wn])}else if(V.isInstancedMesh)yt.renderInstances(rt,Ct,V.count);else if(ne.isInstancedBufferGeometry){const Ge=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Tt=Math.min(ne.instanceCount,Ge);yt.renderInstances(rt,Ct,Tt)}else yt.render(rt,Ct)};function Je(M,H,ne){M.transparent===!0&&M.side===Fi&&M.forceSinglePass===!1?(M.side=_n,M.needsUpdate=!0,ha(M,H,ne),M.side=gs,M.needsUpdate=!0,ha(M,H,ne),M.side=Fi):ha(M,H,ne)}this.compile=function(M,H,ne=null){ne===null&&(ne=M),p=Le.get(ne),p.init(H),E.push(p),ne.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),M!==ne&&M.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const ie=new Set;return M.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const Me=V.material;if(Me)if(Array.isArray(Me))for(let Ue=0;Ue<Me.length;Ue++){const Be=Me[Ue];Je(Be,ne,V),ie.add(Be)}else Je(Me,ne,V),ie.add(Me)}),p=E.pop(),ie},this.compileAsync=function(M,H,ne=null){const ie=this.compile(M,H,ne);return new Promise(V=>{function Me(){if(ie.forEach(function(Ue){ee.get(Ue).currentProgram.isReady()&&ie.delete(Ue)}),ie.size===0){V(M);return}setTimeout(Me,10)}G.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let it=null;function wi(M){it&&it(M)}function ti(){ws.stop()}function Wd(){ws.start()}const ws=new p_;ws.setAnimationLoop(wi),typeof self<"u"&&ws.setContext(self),this.setAnimationLoop=function(M){it=M,te.setAnimationLoop(M),M===null?ws.stop():ws.start()},te.addEventListener("sessionstart",ti),te.addEventListener("sessionend",Wd),this.render=function(M,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(H),H=te.getCamera()),M.isScene===!0&&M.onBeforeRender(w,M,H,I),p=Le.get(M,E.length),p.init(H),E.push(p),B.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),et.setFromProjectionMatrix(B,fi,H.reversedDepth),Te=this.localClippingEnabled,le=be.init(this.clippingPlanes,Te),m=K.get(M,A.length),m.init(),A.push(m),te.enabled===!0&&te.isPresenting===!0){const Me=w.xr.getDepthSensingMesh();Me!==null&&Wl(Me,H,-1/0,w.sortObjects)}Wl(M,H,0,w.sortObjects),m.finish(),w.sortObjects===!0&&m.sort(Ee,Ae),He=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,He&&Ce.addToRenderList(m,M),this.info.render.frame++,le===!0&&be.beginShadows();const ne=p.state.shadowsArray;Ie.render(ne,M,H),le===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=m.opaque,V=m.transmissive;if(p.setupLights(),H.isArrayCamera){const Me=H.cameras;if(V.length>0)for(let Ue=0,Be=Me.length;Ue<Be;Ue++){const Ne=Me[Ue];$d(ie,V,M,Ne)}He&&Ce.render(M);for(let Ue=0,Be=Me.length;Ue<Be;Ue++){const Ne=Me[Ue];Xd(m,M,Ne,Ne.viewport)}}else V.length>0&&$d(ie,V,M,H),He&&Ce.render(M),Xd(m,M,H);I!==null&&U===0&&(de.updateMultisampleRenderTarget(I),de.updateRenderTargetMipmap(I)),M.isScene===!0&&M.onAfterRender(w,M,H),z.resetDefaultState(),y=-1,b=null,E.pop(),E.length>0?(p=E[E.length-1],le===!0&&be.setGlobalState(w.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Wl(M,H,ne,ie){if(M.visible===!1)return;if(M.layers.test(H.layers)){if(M.isGroup)ne=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(H);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||et.intersectsSprite(M)){ie&&ue.setFromMatrixPosition(M.matrixWorld).applyMatrix4(B);const Ue=F.update(M),Be=M.material;Be.visible&&m.push(M,Ue,Be,ne,ue.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||et.intersectsObject(M))){const Ue=F.update(M),Be=M.material;if(ie&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ue.copy(M.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),ue.copy(Ue.boundingSphere.center)),ue.applyMatrix4(M.matrixWorld).applyMatrix4(B)),Array.isArray(Be)){const Ne=Ue.groups;for(let Xe=0,$e=Ne.length;Xe<$e;Xe++){const ze=Ne[Xe],rt=Be[ze.materialIndex];rt&&rt.visible&&m.push(M,Ue,rt,ne,ue.z,ze)}}else Be.visible&&m.push(M,Ue,Be,ne,ue.z,null)}}const Me=M.children;for(let Ue=0,Be=Me.length;Ue<Be;Ue++)Wl(Me[Ue],H,ne,ie)}function Xd(M,H,ne,ie){const V=M.opaque,Me=M.transmissive,Ue=M.transparent;p.setupLightsView(ne),le===!0&&be.setGlobalState(w.clippingPlanes,ne),ie&&W.viewport(P.copy(ie)),V.length>0&&fa(V,H,ne),Me.length>0&&fa(Me,H,ne),Ue.length>0&&fa(Ue,H,ne),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function $d(M,H,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ie.id]===void 0&&(p.state.transmissionRenderTarget[ie.id]=new Ks(1,1,{generateMipmaps:!0,type:G.has("EXT_color_buffer_half_float")||G.has("EXT_color_buffer_float")?oa:xi,minFilter:Fs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const Me=p.state.transmissionRenderTarget[ie.id],Ue=ie.viewport||P;Me.setSize(Ue.z*w.transmissionResolutionScale,Ue.w*w.transmissionResolutionScale);const Be=w.getRenderTarget(),Ne=w.getActiveCubeFace(),Xe=w.getActiveMipmapLevel();w.setRenderTarget(Me),w.getClearColor(j),pe=w.getClearAlpha(),pe<1&&w.setClearColor(16777215,.5),w.clear(),He&&Ce.render(ne);const $e=w.toneMapping;w.toneMapping=ms;const ze=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),p.setupLightsView(ie),le===!0&&be.setGlobalState(w.clippingPlanes,ie),fa(M,ne,ie),de.updateMultisampleRenderTarget(Me),de.updateRenderTargetMipmap(Me),G.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let _t=0,Ct=H.length;_t<Ct;_t++){const Et=H[_t],yt=Et.object,Ge=Et.geometry,Tt=Et.material,lt=Et.group;if(Tt.side===Fi&&yt.layers.test(ie.layers)){const yn=Tt.side;Tt.side=_n,Tt.needsUpdate=!0,qd(yt,ne,ie,Ge,Tt,lt),Tt.side=yn,Tt.needsUpdate=!0,rt=!0}}rt===!0&&(de.updateMultisampleRenderTarget(Me),de.updateRenderTargetMipmap(Me))}w.setRenderTarget(Be,Ne,Xe),w.setClearColor(j,pe),ze!==void 0&&(ie.viewport=ze),w.toneMapping=$e}function fa(M,H,ne){const ie=H.isScene===!0?H.overrideMaterial:null;for(let V=0,Me=M.length;V<Me;V++){const Ue=M[V],Be=Ue.object,Ne=Ue.geometry,Xe=Ue.group;let $e=Ue.material;$e.allowOverride===!0&&ie!==null&&($e=ie),Be.layers.test(ne.layers)&&qd(Be,H,ne,Ne,$e,Xe)}}function qd(M,H,ne,ie,V,Me){M.onBeforeRender(w,H,ne,ie,V,Me),M.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(w,H,ne,ie,M,Me),V.transparent===!0&&V.side===Fi&&V.forceSinglePass===!1?(V.side=_n,V.needsUpdate=!0,w.renderBufferDirect(ne,H,ie,V,M,Me),V.side=gs,V.needsUpdate=!0,w.renderBufferDirect(ne,H,ie,V,M,Me),V.side=Fi):w.renderBufferDirect(ne,H,ie,V,M,Me),M.onAfterRender(w,H,ne,ie,V,Me)}function ha(M,H,ne){H.isScene!==!0&&(H=xe);const ie=ee.get(M),V=p.state.lights,Me=p.state.shadowsArray,Ue=V.state.version,Be=Y.getParameters(M,V.state,Me,H,ne),Ne=Y.getProgramCacheKey(Be);let Xe=ie.programs;ie.environment=M.isMeshStandardMaterial?H.environment:null,ie.fog=H.fog,ie.envMap=(M.isMeshStandardMaterial?De:_e).get(M.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&M.envMap===null?H.environmentRotation:M.envMapRotation,Xe===void 0&&(M.addEventListener("dispose",X),Xe=new Map,ie.programs=Xe);let $e=Xe.get(Ne);if($e!==void 0){if(ie.currentProgram===$e&&ie.lightsStateVersion===Ue)return Yd(M,Be),$e}else Be.uniforms=Y.getUniforms(M),M.onBeforeCompile(Be,w),$e=Y.acquireProgram(Be,Ne),Xe.set(Ne,$e),ie.uniforms=Be.uniforms;const ze=ie.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ze.clippingPlanes=be.uniform),Yd(M,Be),ie.needsLights=O_(M),ie.lightsStateVersion=Ue,ie.needsLights&&(ze.ambientLightColor.value=V.state.ambient,ze.lightProbe.value=V.state.probe,ze.directionalLights.value=V.state.directional,ze.directionalLightShadows.value=V.state.directionalShadow,ze.spotLights.value=V.state.spot,ze.spotLightShadows.value=V.state.spotShadow,ze.rectAreaLights.value=V.state.rectArea,ze.ltc_1.value=V.state.rectAreaLTC1,ze.ltc_2.value=V.state.rectAreaLTC2,ze.pointLights.value=V.state.point,ze.pointLightShadows.value=V.state.pointShadow,ze.hemisphereLights.value=V.state.hemi,ze.directionalShadowMap.value=V.state.directionalShadowMap,ze.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ze.spotShadowMap.value=V.state.spotShadowMap,ze.spotLightMatrix.value=V.state.spotLightMatrix,ze.spotLightMap.value=V.state.spotLightMap,ze.pointShadowMap.value=V.state.pointShadowMap,ze.pointShadowMatrix.value=V.state.pointShadowMatrix),ie.currentProgram=$e,ie.uniformsList=null,$e}function jd(M){if(M.uniformsList===null){const H=M.currentProgram.getUniforms();M.uniformsList=el.seqWithValue(H.seq,M.uniforms)}return M.uniformsList}function Yd(M,H){const ne=ee.get(M);ne.outputColorSpace=H.outputColorSpace,ne.batching=H.batching,ne.batchingColor=H.batchingColor,ne.instancing=H.instancing,ne.instancingColor=H.instancingColor,ne.instancingMorph=H.instancingMorph,ne.skinning=H.skinning,ne.morphTargets=H.morphTargets,ne.morphNormals=H.morphNormals,ne.morphColors=H.morphColors,ne.morphTargetsCount=H.morphTargetsCount,ne.numClippingPlanes=H.numClippingPlanes,ne.numIntersection=H.numClipIntersection,ne.vertexAlphas=H.vertexAlphas,ne.vertexTangents=H.vertexTangents,ne.toneMapping=H.toneMapping}function I_(M,H,ne,ie,V){H.isScene!==!0&&(H=xe),de.resetTextureUnits();const Me=H.fog,Ue=ie.isMeshStandardMaterial?H.environment:null,Be=I===null?w.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Kr,Ne=(ie.isMeshStandardMaterial?De:_e).get(ie.envMap||Ue),Xe=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,$e=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),ze=!!ne.morphAttributes.position,rt=!!ne.morphAttributes.normal,_t=!!ne.morphAttributes.color;let Ct=ms;ie.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ct=w.toneMapping);const Et=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,yt=Et!==void 0?Et.length:0,Ge=ee.get(ie),Tt=p.state.lights;if(le===!0&&(Te===!0||M!==b)){const rn=M===b&&ie.id===y;be.setState(ie,M,rn)}let lt=!1;ie.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Tt.state.version||Ge.outputColorSpace!==Be||V.isBatchedMesh&&Ge.batching===!1||!V.isBatchedMesh&&Ge.batching===!0||V.isBatchedMesh&&Ge.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ge.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ge.instancing===!1||!V.isInstancedMesh&&Ge.instancing===!0||V.isSkinnedMesh&&Ge.skinning===!1||!V.isSkinnedMesh&&Ge.skinning===!0||V.isInstancedMesh&&Ge.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ge.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ge.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ge.instancingMorph===!1&&V.morphTexture!==null||Ge.envMap!==Ne||ie.fog===!0&&Ge.fog!==Me||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==be.numPlanes||Ge.numIntersection!==be.numIntersection)||Ge.vertexAlphas!==Xe||Ge.vertexTangents!==$e||Ge.morphTargets!==ze||Ge.morphNormals!==rt||Ge.morphColors!==_t||Ge.toneMapping!==Ct||Ge.morphTargetsCount!==yt)&&(lt=!0):(lt=!0,Ge.__version=ie.version);let yn=Ge.currentProgram;lt===!0&&(yn=ha(ie,H,V));let tr=!1,wn=!1,ro=!1;const At=yn.getUniforms(),Ln=Ge.uniforms;if(W.useProgram(yn.program)&&(tr=!0,wn=!0,ro=!0),ie.id!==y&&(y=ie.id,wn=!0),tr||b!==M){W.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),At.setValue(g,"projectionMatrix",M.projectionMatrix),At.setValue(g,"viewMatrix",M.matrixWorldInverse);const hn=At.map.cameraPosition;hn!==void 0&&hn.setValue(g,he.setFromMatrixPosition(M.matrixWorld)),se.logarithmicDepthBuffer&&At.setValue(g,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&At.setValue(g,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,wn=!0,ro=!0)}if(V.isSkinnedMesh){At.setOptional(g,V,"bindMatrix"),At.setOptional(g,V,"bindMatrixInverse");const rn=V.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),At.setValue(g,"boneTexture",rn.boneTexture,de))}V.isBatchedMesh&&(At.setOptional(g,V,"batchingTexture"),At.setValue(g,"batchingTexture",V._matricesTexture,de),At.setOptional(g,V,"batchingIdTexture"),At.setValue(g,"batchingIdTexture",V._indirectTexture,de),At.setOptional(g,V,"batchingColorTexture"),V._colorsTexture!==null&&At.setValue(g,"batchingColorTexture",V._colorsTexture,de));const In=ne.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&ye.update(V,ne,yn),(wn||Ge.receiveShadow!==V.receiveShadow)&&(Ge.receiveShadow=V.receiveShadow,At.setValue(g,"receiveShadow",V.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Ln.envMap.value=Ne,Ln.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&H.environment!==null&&(Ln.envMapIntensity.value=H.environmentIntensity),wn&&(At.setValue(g,"toneMappingExposure",w.toneMappingExposure),Ge.needsLights&&U_(Ln,ro),Me&&ie.fog===!0&&ce.refreshFogUniforms(Ln,Me),ce.refreshMaterialUniforms(Ln,ie,q,ge,p.state.transmissionRenderTarget[M.id]),el.upload(g,jd(Ge),Ln,de)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(el.upload(g,jd(Ge),Ln,de),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&At.setValue(g,"center",V.center),At.setValue(g,"modelViewMatrix",V.modelViewMatrix),At.setValue(g,"normalMatrix",V.normalMatrix),At.setValue(g,"modelMatrix",V.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const rn=ie.uniformsGroups;for(let hn=0,Xl=rn.length;hn<Xl;hn++){const bs=rn[hn];fe.update(bs,yn),fe.bind(bs,yn)}}return yn}function U_(M,H){M.ambientLightColor.needsUpdate=H,M.lightProbe.needsUpdate=H,M.directionalLights.needsUpdate=H,M.directionalLightShadows.needsUpdate=H,M.pointLights.needsUpdate=H,M.pointLightShadows.needsUpdate=H,M.spotLights.needsUpdate=H,M.spotLightShadows.needsUpdate=H,M.rectAreaLights.needsUpdate=H,M.hemisphereLights.needsUpdate=H}function O_(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(M,H,ne){const ie=ee.get(M);ie.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),ee.get(M.texture).__webglTexture=H,ee.get(M.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ne,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,H){const ne=ee.get(M);ne.__webglFramebuffer=H,ne.__useDefaultFramebuffer=H===void 0};const N_=g.createFramebuffer();this.setRenderTarget=function(M,H=0,ne=0){I=M,R=H,U=ne;let ie=!0,V=null,Me=!1,Ue=!1;if(M){const Ne=ee.get(M);if(Ne.__useDefaultFramebuffer!==void 0)W.bindFramebuffer(g.FRAMEBUFFER,null),ie=!1;else if(Ne.__webglFramebuffer===void 0)de.setupRenderTarget(M);else if(Ne.__hasExternalTextures)de.rebindTextures(M,ee.get(M.texture).__webglTexture,ee.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const ze=M.depthTexture;if(Ne.__boundDepthTexture!==ze){if(ze!==null&&ee.has(ze)&&(M.width!==ze.image.width||M.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(M)}}const Xe=M.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ue=!0);const $e=ee.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray($e[H])?V=$e[H][ne]:V=$e[H],Me=!0):M.samples>0&&de.useMultisampledRTT(M)===!1?V=ee.get(M).__webglMultisampledFramebuffer:Array.isArray($e)?V=$e[ne]:V=$e,P.copy(M.viewport),Q.copy(M.scissor),$=M.scissorTest}else P.copy(Oe).multiplyScalar(q).floor(),Q.copy(ke).multiplyScalar(q).floor(),$=at;if(ne!==0&&(V=N_),W.bindFramebuffer(g.FRAMEBUFFER,V)&&ie&&W.drawBuffers(M,V),W.viewport(P),W.scissor(Q),W.setScissorTest($),Me){const Ne=ee.get(M.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ne.__webglTexture,ne)}else if(Ue){const Ne=H;for(let Xe=0;Xe<M.textures.length;Xe++){const $e=ee.get(M.textures[Xe]);g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0+Xe,$e.__webglTexture,ne,Ne)}}else if(M!==null&&ne!==0){const Ne=ee.get(M.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,Ne.__webglTexture,ne)}y=-1},this.readRenderTargetPixels=function(M,H,ne,ie,V,Me,Ue,Be=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=ee.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ne=Ne[Ue]),Ne){W.bindFramebuffer(g.FRAMEBUFFER,Ne);try{const Xe=M.textures[Be],$e=Xe.format,ze=Xe.type;if(!se.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=M.width-ie&&ne>=0&&ne<=M.height-V&&(M.textures.length>1&&g.readBuffer(g.COLOR_ATTACHMENT0+Be),g.readPixels(H,ne,ie,V,C.convert($e),C.convert(ze),Me))}finally{const Xe=I!==null?ee.get(I).__webglFramebuffer:null;W.bindFramebuffer(g.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(M,H,ne,ie,V,Me,Ue,Be=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=ee.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ne=Ne[Ue]),Ne)if(H>=0&&H<=M.width-ie&&ne>=0&&ne<=M.height-V){W.bindFramebuffer(g.FRAMEBUFFER,Ne);const Xe=M.textures[Be],$e=Xe.format,ze=Xe.type;if(!se.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,rt),g.bufferData(g.PIXEL_PACK_BUFFER,Me.byteLength,g.STREAM_READ),M.textures.length>1&&g.readBuffer(g.COLOR_ATTACHMENT0+Be),g.readPixels(H,ne,ie,V,C.convert($e),C.convert(ze),0);const _t=I!==null?ee.get(I).__webglFramebuffer:null;W.bindFramebuffer(g.FRAMEBUFFER,_t);const Ct=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await nE(g,Ct,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,rt),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,Me),g.deleteBuffer(rt),g.deleteSync(Ct),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,H=null,ne=0){const ie=Math.pow(2,-ne),V=Math.floor(M.image.width*ie),Me=Math.floor(M.image.height*ie),Ue=H!==null?H.x:0,Be=H!==null?H.y:0;de.setTexture2D(M,0),g.copyTexSubImage2D(g.TEXTURE_2D,ne,0,0,Ue,Be,V,Me),W.unbindTexture()};const F_=g.createFramebuffer(),B_=g.createFramebuffer();this.copyTextureToTexture=function(M,H,ne=null,ie=null,V=0,Me=null){Me===null&&(V!==0?(Pr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=V,V=0):Me=0);let Ue,Be,Ne,Xe,$e,ze,rt,_t,Ct;const Et=M.isCompressedTexture?M.mipmaps[Me]:M.image;if(ne!==null)Ue=ne.max.x-ne.min.x,Be=ne.max.y-ne.min.y,Ne=ne.isBox3?ne.max.z-ne.min.z:1,Xe=ne.min.x,$e=ne.min.y,ze=ne.isBox3?ne.min.z:0;else{const In=Math.pow(2,-V);Ue=Math.floor(Et.width*In),Be=Math.floor(Et.height*In),M.isDataArrayTexture?Ne=Et.depth:M.isData3DTexture?Ne=Math.floor(Et.depth*In):Ne=1,Xe=0,$e=0,ze=0}ie!==null?(rt=ie.x,_t=ie.y,Ct=ie.z):(rt=0,_t=0,Ct=0);const yt=C.convert(H.format),Ge=C.convert(H.type);let Tt;H.isData3DTexture?(de.setTexture3D(H,0),Tt=g.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(de.setTexture2DArray(H,0),Tt=g.TEXTURE_2D_ARRAY):(de.setTexture2D(H,0),Tt=g.TEXTURE_2D),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,H.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,H.unpackAlignment);const lt=g.getParameter(g.UNPACK_ROW_LENGTH),yn=g.getParameter(g.UNPACK_IMAGE_HEIGHT),tr=g.getParameter(g.UNPACK_SKIP_PIXELS),wn=g.getParameter(g.UNPACK_SKIP_ROWS),ro=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,Et.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Et.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Xe),g.pixelStorei(g.UNPACK_SKIP_ROWS,$e),g.pixelStorei(g.UNPACK_SKIP_IMAGES,ze);const At=M.isDataArrayTexture||M.isData3DTexture,Ln=H.isDataArrayTexture||H.isData3DTexture;if(M.isDepthTexture){const In=ee.get(M),rn=ee.get(H),hn=ee.get(In.__renderTarget),Xl=ee.get(rn.__renderTarget);W.bindFramebuffer(g.READ_FRAMEBUFFER,hn.__webglFramebuffer),W.bindFramebuffer(g.DRAW_FRAMEBUFFER,Xl.__webglFramebuffer);for(let bs=0;bs<Ne;bs++)At&&(g.framebufferTextureLayer(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,ee.get(M).__webglTexture,V,ze+bs),g.framebufferTextureLayer(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,ee.get(H).__webglTexture,Me,Ct+bs)),g.blitFramebuffer(Xe,$e,Ue,Be,rt,_t,Ue,Be,g.DEPTH_BUFFER_BIT,g.NEAREST);W.bindFramebuffer(g.READ_FRAMEBUFFER,null),W.bindFramebuffer(g.DRAW_FRAMEBUFFER,null)}else if(V!==0||M.isRenderTargetTexture||ee.has(M)){const In=ee.get(M),rn=ee.get(H);W.bindFramebuffer(g.READ_FRAMEBUFFER,F_),W.bindFramebuffer(g.DRAW_FRAMEBUFFER,B_);for(let hn=0;hn<Ne;hn++)At?g.framebufferTextureLayer(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,In.__webglTexture,V,ze+hn):g.framebufferTexture2D(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,In.__webglTexture,V),Ln?g.framebufferTextureLayer(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,rn.__webglTexture,Me,Ct+hn):g.framebufferTexture2D(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,rn.__webglTexture,Me),V!==0?g.blitFramebuffer(Xe,$e,Ue,Be,rt,_t,Ue,Be,g.COLOR_BUFFER_BIT,g.NEAREST):Ln?g.copyTexSubImage3D(Tt,Me,rt,_t,Ct+hn,Xe,$e,Ue,Be):g.copyTexSubImage2D(Tt,Me,rt,_t,Xe,$e,Ue,Be);W.bindFramebuffer(g.READ_FRAMEBUFFER,null),W.bindFramebuffer(g.DRAW_FRAMEBUFFER,null)}else Ln?M.isDataTexture||M.isData3DTexture?g.texSubImage3D(Tt,Me,rt,_t,Ct,Ue,Be,Ne,yt,Ge,Et.data):H.isCompressedArrayTexture?g.compressedTexSubImage3D(Tt,Me,rt,_t,Ct,Ue,Be,Ne,yt,Et.data):g.texSubImage3D(Tt,Me,rt,_t,Ct,Ue,Be,Ne,yt,Ge,Et):M.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,Me,rt,_t,Ue,Be,yt,Ge,Et.data):M.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,Me,rt,_t,Et.width,Et.height,yt,Et.data):g.texSubImage2D(g.TEXTURE_2D,Me,rt,_t,Ue,Be,yt,Ge,Et);g.pixelStorei(g.UNPACK_ROW_LENGTH,lt),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,yn),g.pixelStorei(g.UNPACK_SKIP_PIXELS,tr),g.pixelStorei(g.UNPACK_SKIP_ROWS,wn),g.pixelStorei(g.UNPACK_SKIP_IMAGES,ro),Me===0&&H.generateMipmaps&&g.generateMipmap(Tt),W.unbindTexture()},this.copyTextureToTexture3D=function(M,H,ne=null,ie=null,V=0){return Pr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,H,ne,ie,V)},this.initRenderTarget=function(M){ee.get(M).__webglFramebuffer===void 0&&de.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?de.setTextureCube(M,0):M.isData3DTexture?de.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?de.setTexture2DArray(M,0):de.setTexture2D(M,0),W.unbindTexture()},this.resetState=function(){R=0,U=0,I=null,W.reset(),z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),n.unpackColorSpace=ut._getUnpackColorSpace()}}const sp={type:"change"},Hd={type:"start"},w_={type:"end"},Ha=new Jg,rp=new ns,xR=Math.cos(70*eE.DEG2RAD),Bt=new Z,mn=2*Math.PI,xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},zc=1e-6;class b_ extends NE{constructor(e,n=null){super(e,n),this.state=xt.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Cr.ROTATE,MIDDLE:Cr.DOLLY,RIGHT:Cr.PAN},this.touches={ONE:xr.ROTATE,TWO:xr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new Ys,this._lastTargetPosition=new Z,this._quat=new Ys().setFromUnitVectors(e.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Lh,this._sphericalDelta=new Lh,this._scale=1,this._panOffset=new Z,this._rotateStart=new qe,this._rotateEnd=new qe,this._rotateDelta=new qe,this._panStart=new qe,this._panEnd=new qe,this._panDelta=new qe,this._dollyStart=new qe,this._dollyEnd=new qe,this._dollyDelta=new qe,this._dollyDirection=new Z,this._mouse=new qe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=wR.bind(this),this._onPointerDown=yR.bind(this),this._onPointerUp=bR.bind(this),this._onContextMenu=RR.bind(this),this._onMouseWheel=ER.bind(this),this._onKeyDown=TR.bind(this),this._onTouchStart=AR.bind(this),this._onTouchMove=CR.bind(this),this._onMouseDown=SR.bind(this),this._onMouseMove=MR.bind(this),this._interceptControlDown=PR.bind(this),this._interceptControlUp=DR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(sp),this.update(),this.state=xt.NONE}update(e=null){const n=this.object.position;Bt.copy(n).sub(this.target),Bt.applyQuaternion(this._quat),this._spherical.setFromVector3(Bt),this.autoRotate&&this.state===xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=mn:i>Math.PI&&(i-=mn),s<-Math.PI?s+=mn:s>Math.PI&&(s-=mn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Bt.setFromSpherical(this._spherical),Bt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Bt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new Z(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new Z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ha.origin.copy(this.object.position),Ha.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ha.direction))<xR?this.object.lookAt(this.target):(rp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ha.intersectPlane(rp,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>zc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>zc||this._lastTargetPosition.distanceToSquared(this.target)>zc?(this.dispatchEvent(sp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?mn/60*this.autoRotateSpeed*e:mn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Bt.setFromMatrixColumn(n,0),Bt.multiplyScalar(-e),this._panOffset.add(Bt)}_panUp(e,n){this.screenSpacePanning===!0?Bt.setFromMatrixColumn(n,1):(Bt.setFromMatrixColumn(n,0),Bt.crossVectors(this.object.up,Bt)),Bt.multiplyScalar(e),this._panOffset.add(Bt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Bt.copy(s).sub(this.target);let r=Bt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=n-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/n.clientHeight),this._rotateUp(mn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/n.clientHeight),this._rotateUp(mn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new qe,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function yR(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function wR(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function bR(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(w_),this.state=xt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function SR(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Cr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=xt.DOLLY;break;case Cr.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=xt.ROTATE}break;case Cr.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=xt.PAN}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(Hd)}function MR(t){switch(this.state){case xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function ER(t){this.enabled===!1||this.enableZoom===!1||this.state!==xt.NONE||(t.preventDefault(),this.dispatchEvent(Hd),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(w_))}function TR(t){this.enabled!==!1&&this._handleKeyDown(t)}function AR(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case xr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=xt.TOUCH_ROTATE;break;case xr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=xt.TOUCH_PAN;break;default:this.state=xt.NONE}break;case 2:switch(this.touches.TWO){case xr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=xt.TOUCH_DOLLY_PAN;break;case xr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=xt.TOUCH_DOLLY_ROTATE;break;default:this.state=xt.NONE}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(Hd)}function CR(t){switch(this._trackPointer(t),this.state){case xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=xt.NONE}}function RR(t){this.enabled!==!1&&t.preventDefault()}function PR(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function DR(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const LR={__name:"MiyukiBeads",props:{pattern:{type:Array,required:!0},rows:{type:Number,default:10},cols:{type:Number,default:50}},setup(t){const e=t,n=Ke(null);let i,s,r,o,a=[];function l(){const c=new zl(.7,.7,1.1,32),u=(e.cols-1)/2,d=(e.rows-1)/2;for(let f=0;f<e.rows;f++)for(let h=0;h<e.cols;h++){const _=f*e.cols+h,v=e.pattern[_]||"#ffffff",m=new u_({color:v,roughness:.1,metalness:.1,clearcoat:.5,clearcoatRoughness:.1}),p=new Kn(c,m);p.position.set((h-u)*1.2,-(f-d)*1.2,0),i.add(p),a.push(p)}}return Jr(()=>{i=new l_,i.background=new nt(15790320),s=new Tn(45,n.value.clientWidth/n.value.clientHeight,.1,1e3),s.position.set(50,-50,50),r=new y_({antialias:!0}),r.setPixelRatio(Math.min(window.devicePixelRatio||1,2));function c(){if(!n.value)return;const h=n.value.clientWidth,_=n.value.clientHeight;h===0||_===0||(s.aspect=h/_,s.updateProjectionMatrix(),r.setSize(h,_,!1))}c(),n.value.appendChild(r.domElement);const u=new ResizeObserver(()=>{c()});u.observe(n.value),r.__resizeObserver=u,o=new b_(s,r.domElement),i.add(new h_(16777215,.5));const d=new Xu(16777215,3);d.position.set(10,10,10),i.add(d),l();function f(){requestAnimationFrame(f),o.update(),r.render(i,s)}f(),window.addEventListener("resize",c),r.__resizeHandler=c}),Qn(()=>e.pattern,()=>{a.forEach(c=>i.remove(c)),a=[],l()},{deep:!0}),cd(()=>{r&&r.__resizeHandler&&window.removeEventListener("resize",r.__resizeHandler),r&&r.__resizeObserver&&n.value&&r.__resizeObserver.disconnect(),o&&o.dispose(),r&&r.dispose(),a=[]}),(c,u)=>(ot(),ft("div",{ref_key:"container",ref:n,class:"bead-container"},null,512))}},IR={class:"bracelet-wrapper"},UR={class:"canvas-container"},OR={class:"toolbar"},NR={class:"info-panel"},FR={class:"info-item"},BR={class:"info-value"},kR={class:"info-item"},zR={class:"info-value"},HR={__name:"BraceletPreview",props:{pattern:{type:Array,required:!0},rows:{type:Number,required:!0},cols:{type:Number,required:!0},width:{type:Number,default:900},height:{type:Number,default:600}},setup(t,{expose:e}){const n=t,i=Ke(null);let s,r,o,a,l=[];function c(){l.forEach(_=>s.remove(_)),l=[]}function u(){if(!s)return;c(),console.log("BraceletPreview - props:",{pattern:n.pattern,rows:n.rows,cols:n.cols,patternLength:n.pattern?n.pattern.length:0,patternType:Array.isArray(n.pattern)?"Array":typeof n.pattern}),n.pattern&&Array.isArray(n.pattern)&&console.log("Pattern structure:",{firstRow:n.pattern[0],firstRowLength:n.pattern[0]?n.pattern[0].length:0,firstRowType:n.pattern[0]?typeof n.pattern[0]:"undefined",sampleValues:n.pattern.slice(0,3).map(R=>R?R.slice(0,3):"undefined")});const _=20,v=Math.PI*1.55,m=-v/2;new nt("#b58a3a");const p=v/n.rows,A=_*p*.98,E=.95,w=1,L=new zl(E*.7,E*.7,A,16);for(let R=0;R<n.rows;R++)for(let U=0;U<n.cols;U++){let I="#ffffff";if(Array.isArray(n.pattern[0]))I=n.pattern[R]&&n.pattern[R][U]?n.pattern[R][U]:"#ffffff";else{const J=R*n.cols+U;I=n.pattern[J]||"#ffffff"}R===0&&U===0&&console.log("First bead debug:",{y:R,x:U,patternY:n.pattern[R],patternYX:n.pattern[R]?n.pattern[R][U]:void 0,colorHex:I,patternType:Array.isArray(n.pattern[0])?"Matrix":"Simple Array",index:R*n.cols+U}),(!I||I==="#"||I.length<3)&&(I="#ffffff",console.warn("Invalid color detected:",I,"using default white"));const y=new nt(I),b=new u_({color:y,roughness:.25,metalness:.15,clearcoat:.4,clearcoatRoughness:.1}),P=m+(R+.5)*p,Q=(n.cols/2-.5-U)*w,$=_*Math.sin(P),j=_*Math.cos(P),pe=new Kn(L,b);pe.position.set($,Q,j),pe.rotation.z=Math.PI/2,pe.rotation.y=P,s.add(pe),l.push(pe)}}function d(){s=new l_,s.background=new nt(15987699),r=new Tn(42,n.width/n.height,.1,2e3),r.position.set(0,3,95),r.lookAt(0,0,0),o=new y_({antialias:!0,preserveDrawingBuffer:!0}),o.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),o.setSize(n.width,n.height,!1),i.value.appendChild(o.domElement),s.add(new h_(16777215,.7));const _=new Xu(16777215,1.1);_.position.set(8,10,12),s.add(_);const v=new Xu(16777215,.6);v.position.set(-8,-3,8),s.add(v),a=new b_(r,o.domElement),a.enableDamping=!0,a.target.set(0,0,0);function m(){requestAnimationFrame(m),a.update(),o.render(s,r)}m()}function f(){o&&(a.update(),o.render(s,r))}function h(){f();const _=o.domElement.toDataURL("image/png"),v=document.createElement("a");v.href=_,v.download="bracelet.png",v.click()}return Jr(()=>{d(),u(),f()}),Qn(()=>[n.pattern,n.rows,n.cols],()=>{u(),f()},{deep:!0}),cd(()=>{a&&a.dispose(),o&&o.dispose(),l=[]}),e({downloadImage:h}),(_,v)=>(ot(),ft("div",IR,[v[4]||(v[4]=N("div",{class:"header"},[N("h2",{class:"title"},"پیش‌نمایش دستبند"),N("p",{class:"subtitle"},"نمایش سه‌بعدی طرح انتخاب شده")],-1)),N("div",UR,[N("div",{ref_key:"container",ref:i,class:"bracelet-canvas"},null,512),v[0]||(v[0]=Sm('<div class="canvas-overlay" data-v-93874d86><div class="controls-hint" data-v-93874d86><div class="hint-item" data-v-93874d86><span class="hint-icon" data-v-93874d86>🖱️</span><span data-v-93874d86>برای چرخاندن کلیک و درگ کنید</span></div><div class="hint-item" data-v-93874d86><span class="hint-icon" data-v-93874d86>🔍</span><span data-v-93874d86>برای زوم اسکرول کنید</span></div></div></div>',1))]),N("div",OR,[N("button",{class:"btn btn-primary",onClick:h},v[1]||(v[1]=[N("span",{class:"btn-icon"},"📥",-1),N("span",null,"دانلود تصویر",-1)])),N("div",NR,[N("div",FR,[v[2]||(v[2]=N("span",{class:"info-label"},"ابعاد:",-1)),N("span",BR,Dt(t.cols)+" × "+Dt(t.rows),1)]),N("div",kR,[v[3]||(v[3]=N("span",{class:"info-label"},"تعداد مهره:",-1)),N("span",zR,Dt(t.cols*t.rows),1)])])])]))}},VR=Jo(HR,[["__scopeId","data-v-93874d86"]]),GR={class:"working-page"},WR={class:"controls-panel"},XR={class:"control-group"},$R={class:"start-controls"},qR={class:"control-label"},jR=["max"],YR={class:"control-label"},KR={class:"control-group"},ZR={class:"navigation-controls"},QR=["disabled"],JR=["disabled"],e2={class:"control-group"},t2={class:"info-display"},n2={class:"info-item"},i2={class:"info-value"},s2={class:"info-item"},r2={class:"info-value"},o2={class:"info-item"},a2={class:"info-value"},l2={class:"control-group"},c2={class:"color-management"},u2={class:"color-list-management"},d2={class:"all-colors-list"},f2=["onUpdate:modelValue","placeholder","onInput"],h2={class:"color-code"},p2={class:"pattern-container"},m2={class:"pattern-header"},g2={class:"pattern-info"},_2={class:"instructions-panel"},v2={class:"row-instructions"},x2={class:"color-instructions"},y2={class:"color-list"},w2={class:"color-count"},b2={class:"pattern-instructions"},S2={class:"pattern-sequence"},M2=["title"],E2={class:"grid-wrapper"},T2=["title"],A2={__name:"WorkingPage",props:{pattern:{type:Array,default:()=>[]},rows:{type:Number,default:16},cols:{type:Number,default:80}},setup(t){const e=t,n=Ke(0),i=Ke("forward"),s=Ke(0),r=Ke({}),o=()=>{if(!e.pattern||e.pattern.length===0){const y=["#ff6b6b","#4ecdc4","#45b7d1","#96ceb4","#feca57","#ff9ff3","#54a0ff","#5f27cd"],b=[];for(let P=0;P<e.rows;P++)for(let Q=0;Q<e.cols;Q++){const $=y[Math.floor(Math.random()*y.length)];b.push({color:$,row:P,col:Q})}return b}const I=[];for(let y=0;y<e.rows;y++)for(let b=0;b<e.cols;b++){const P=y*e.cols+b,Q=e.pattern[P]||"#ffffff";I.push({color:Q,row:y,col:b})}return I},a=Ke(o()),l=en(()=>e.rows),c=en(()=>i.value==="forward"?n.value+s.value:n.value-s.value),u=en(()=>{const I=[];for(let y=0;y<e.cols;y++){const b=c.value*e.cols+y,P=e.pattern[b]||"#ffffff";I.includes(P)||I.push(P)}return I}),d=en(()=>{const I=[];for(let y=0;y<e.cols;y++){const b=c.value*e.cols+y,P=e.pattern[b]||"#ffffff";I.push(P)}return I}),f=en(()=>{const I=new Set;for(let y=0;y<e.pattern.length;y++)e.pattern[y]&&I.add(e.pattern[y]);return Array.from(I).sort()}),h=I=>Math.floor(I/e.cols)===c.value,_=I=>Math.floor(I/e.cols)==c.value,v=I=>{const y=Math.floor(I/e.cols);return i.value==="forward"?y>c.value:y<c.value},m=I=>h(I)?1:_(I)?.4:.2,p=I=>{let y=0;for(let b=0;b<e.cols;b++){const P=c.value*e.cols+b;e.pattern[P]===I&&y++}return y},A=(I,y)=>{r.value[I]=y},E=I=>{const y=r.value[I];return y?`${y} (${I})`:I},w=()=>{s.value<l.value-1&&s.value++},L=()=>{s.value>0&&s.value--},R=()=>{s.value=0},U=I=>{switch(I.key){case"Enter":case" ":I.preventDefault(),w();break;case"ArrowLeft":I.preventDefault(),L();break;case"r":case"R":I.preventDefault(),R();break}};return Jr(()=>{document.addEventListener("keydown",U)}),ud(()=>{document.removeEventListener("keydown",U)}),Qn(i,()=>{s.value=0}),Qn(n,()=>{s.value=0}),Qn(()=>e.pattern,()=>{a.value=o()},{deep:!0}),(I,y)=>(ot(),ft("div",GR,[y[16]||(y[16]=N("div",{class:"page-header"},[N("h1",{class:"page-title"},"🧶 مراحل اجرای دستبند میوکی"),N("p",{class:"page-subtitle"}," مراحل بافت دستبند را ردیف به ردیف (از بالا به پایین) مشاهده کنید ")],-1)),N("div",WR,[N("div",XR,[y[5]||(y[5]=N("h3",null,"🎯 تنظیمات شروع",-1)),N("div",$R,[N("label",qR,[y[2]||(y[2]=N("span",null,"شروع از ردیف:",-1)),Li(N("input",{"onUpdate:modelValue":y[0]||(y[0]=b=>n.value=b),type:"number",min:"0",max:t.rows-1,class:"control-input"},null,8,jR),[[es,n.value,void 0,{number:!0}]])]),N("label",YR,[y[4]||(y[4]=N("span",null,"جهت اجرا:",-1)),Li(N("select",{"onUpdate:modelValue":y[1]||(y[1]=b=>i.value=b),class:"control-select"},y[3]||(y[3]=[N("option",{value:"forward"},"⬇️ از بالا به پایین",-1),N("option",{value:"backward"},"⬆️ از پایین به بالا",-1)]),512),[[K0,i.value]])])])]),N("div",KR,[y[6]||(y[6]=N("h3",null,"🎮 کنترل‌ها",-1)),N("div",ZR,[N("button",{disabled:s.value<=0,class:"nav-btn prev-btn",onClick:L}," ⬅️ مرحله قبل ",8,QR),N("button",{disabled:s.value>=l.value-1,class:"nav-btn next-btn",onClick:w}," مرحله بعد ➡️ ",8,JR),N("button",{class:"nav-btn reset-btn",onClick:R}," 🔄 شروع مجدد ")])]),N("div",e2,[y[10]||(y[10]=N("h3",null,"📊 اطلاعات",-1)),N("div",t2,[N("div",n2,[y[7]||(y[7]=N("span",{class:"info-label"},"مرحله فعلی:",-1)),N("span",i2,Dt(s.value+1)+" از "+Dt(l.value),1)]),N("div",s2,[y[8]||(y[8]=N("span",{class:"info-label"},"ردیف فعلی:",-1)),N("span",r2,Dt(c.value+1)+" از "+Dt(t.rows),1)]),N("div",o2,[y[9]||(y[9]=N("span",{class:"info-label"},"رنگ‌های مورد نیاز:",-1)),N("span",a2,Dt(u.value.length)+" رنگ",1)])])]),N("div",l2,[y[12]||(y[12]=N("h3",null,"🎨 مدیریت رنگ‌ها",-1)),N("div",c2,[N("div",u2,[y[11]||(y[11]=N("h4",null,"رنگ‌های استفاده شده در طرح:",-1)),N("div",d2,[(ot(!0),ft(Gt,null,Ni(f.value,(b,P)=>(ot(),ft("div",{key:b,class:"color-management-item"},[N("div",{class:"color-swatch-large",style:qn({backgroundColor:b})},null,4),Li(N("input",{"onUpdate:modelValue":Q=>r.value[b]=Q,type:"text",placeholder:`نام رنگ ${P+1}`,class:"color-name-input",onInput:Q=>A(b,Q.target.value)},null,40,f2),[[es,r.value[b]]]),N("span",h2,Dt(b),1)]))),128))])])])])]),N("div",p2,[N("div",m2,[y[13]||(y[13]=N("h3",null,"🎨 الگوی دستبند",-1)),N("div",g2,[N("span",null,"ابعاد: "+Dt(t.rows)+" × "+Dt(t.cols),1)])]),N("div",_2,[N("h4",null,"📋 دستورالعمل ردیف "+Dt(c.value+1),1),N("div",v2,[N("div",x2,[y[14]||(y[14]=N("h5",null,"رنگ‌های مورد نیاز:",-1)),N("div",y2,[(ot(!0),ft(Gt,null,Ni(u.value,(b,P)=>(ot(),ft("div",{key:P,class:"color-item"},[N("div",{class:"color-swatch",style:qn({backgroundColor:b})},null,4),N("span",w2,Dt(p(b)),1)]))),128))])]),N("div",b2,[y[15]||(y[15]=N("h5",null,"ترتیب رنگ‌ها:",-1)),N("div",S2,[(ot(!0),ft(Gt,null,Ni(d.value,(b,P)=>(ot(),ft("div",{key:P,class:"sequence-item",style:qn({backgroundColor:b}),title:E(b)},null,12,M2))),128))])])])]),N("div",E2,[N("div",{class:"pattern-grid",style:qn({gridTemplateColumns:`repeat(${t.cols}, 12px)`})},[(ot(!0),ft(Gt,null,Ni(a.value,(b,P)=>(ot(),ft("div",{key:P,class:$t(["grid-cell",{"active-row":h(P),"completed-row":_(P),"upcoming-row":v(P)}]),style:qn({backgroundColor:b.color,opacity:m(P)}),title:`ردیف ${Math.floor(P/t.cols)+1}, ستون ${P%t.cols+1}: ${b.color}`},null,14,T2))),128))],4)])]),y[17]||(y[17]=Sm('<div class="shortcuts-info" data-v-19b678d4><h4 data-v-19b678d4>⌨️ کلیدهای میانبر</h4><div class="shortcuts-list" data-v-19b678d4><div class="shortcut-item" data-v-19b678d4><kbd data-v-19b678d4>Enter</kbd> یا <kbd data-v-19b678d4>Space</kbd> - مرحله بعد </div><div class="shortcut-item" data-v-19b678d4><kbd data-v-19b678d4>←</kbd> - مرحله قبل</div><div class="shortcut-item" data-v-19b678d4><kbd data-v-19b678d4>R</kbd> - شروع مجدد</div></div></div>',1))]))}},C2=Jo(A2,[["__scopeId","data-v-19b678d4"]]),R2={class:"home-container"},P2={class:"app-header flex items-start justify-between mb-3!"},D2={class:"stats-section"},L2={class:"stat-item"},I2={class:"stat-number"},U2={class:"stat-item"},O2={class:"stat-number"},N2={class:"stat-item"},F2={class:"stat-number"},B2={class:"stat-item"},k2={class:"stat-number"},z2={class:"content-container"},H2={__name:"HomeView",setup(t){const e=Ke(16),n=Ke(80),i=Ke(Array(16*80).fill("#ffffff")),s=Ke(!0),r=Ke(!1),o=Ke(!1),a=Ke(!1);function l(){s.value=!0,r.value=!1,o.value=!1,a.value=!1}function c(){r.value=!0,s.value=!1,o.value=!1,a.value=!1}function u(){o.value=!0,r.value=!1,s.value=!1,a.value=!1}function d(){a.value=!0,s.value=!1,r.value=!1,o.value=!1}function f(h){if(!Array.isArray(h)||h.length===0){i.value=[],e.value=0,n.value=0;return}e.value=h.length,n.value=Array.isArray(h[0])?h[0].length:0,i.value=h.flat()}return(h,_)=>(ot(),ft("div",R2,[N("header",P2,[N("div",{class:"header-content"},[N("div",{class:"header-actions mt-3! flex items-center gap-2"},[N("button",{class:"rounded-md bg-cyan-950 px-4! py-1! text-[14px] text-white",onClick:l}," ویرایشگر شبکه "),N("button",{class:"rounded-md bg-blue-900 px-4! py-1! text-[14px] text-white",onClick:c}," نمایش مهره‌ها "),N("button",{class:"rounded-md bg-emerald-900 px-4! py-1! text-[14px] text-white",onClick:u}," پیش‌نمایش دستبند "),N("button",{class:"rounded-md bg-emerald-900 px-4! py-1! text-[14px] text-white",onClick:d}," مراحل اجرا ")])]),N("div",D2,[N("div",L2,[N("div",I2,Dt(e.value),1),_[0]||(_[0]=N("div",{class:"stat-label"},"ردیف",-1))]),N("div",U2,[N("div",O2,Dt(n.value),1),_[1]||(_[1]=N("div",{class:"stat-label"},"ستون",-1))]),N("div",N2,[N("div",F2,Dt(i.value.length),1),_[2]||(_[2]=N("div",{class:"stat-label"},"مهره",-1))]),N("div",B2,[N("div",k2,Dt((i.value.length/190).toFixed(2)),1),_[3]||(_[3]=N("div",{class:"stat-label"},"گرم",-1))])])]),N("div",z2,[s.value?(ot(),yo(dM,{key:0,class:"content-component",onUpdateGrid:f})):$n("",!0),r.value?(ot(),yo(LR,{key:1,pattern:i.value,rows:e.value,cols:n.value,class:"content-component"},null,8,["pattern","rows","cols"])):$n("",!0),o.value?(ot(),yo(VR,{key:2,pattern:i.value,rows:e.value,cols:n.value,class:"content-component"},null,8,["pattern","rows","cols"])):$n("",!0),a.value?(ot(),yo(C2,{key:3,pattern:i.value,rows:e.value,cols:n.value,class:"content-component"},null,8,["pattern","rows","cols"])):$n("",!0)])]))}},V2=Jo(H2,[["__scopeId","data-v-93917f23"]]),G2=oy({history:Nx("/miyuki-beads-designer/"),routes:[{path:"/",name:"home",component:V2},{path:"/about",name:"about",component:()=>uo(()=>import("./AboutView-MGWt9gFg.js"),[])},{path:"/sweetalert-demo",name:"sweetalert-demo",component:()=>uo(()=>import("./SweetAlertDemo-BhqaM25n.js"),__vite__mapDeps([0,1]))},{path:"/weaving-grid",name:"weaving-grid",component:()=>uo(()=>import("./WeavingGrid-BK-nK9nG.js"),__vite__mapDeps([2,3,4,5]))},{path:"/beadwork-pattern",name:"beadwork-pattern",component:()=>uo(()=>import("./BeadworkPattern-DUQ9BqJ0.js"),[])},{path:"/peyote-grid",name:"peyote-grid",component:()=>uo(()=>import("./PeyoteGrid-ucvkPu3t.js"),__vite__mapDeps([6,3,4,7]))}]});var Gl=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},da=typeof window>"u"||"Deno"in globalThis;function Gn(){}function W2(t,e){return typeof t=="function"?t(e):t}function X2(t){return typeof t=="number"&&t>=0&&t!==1/0}function $2(t,e){return Math.max(t+(e||0)-Date.now(),0)}function op(t,e){return typeof t=="function"?t(e):t}function q2(t,e){return typeof t=="function"?t(e):t}function ap(t,e){const{type:n="all",exact:i,fetchStatus:s,predicate:r,queryKey:o,stale:a}=t;if(o){if(i){if(e.queryHash!==Vd(o,e.options))return!1}else if(!Wo(e.queryKey,o))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||s&&s!==e.state.fetchStatus||r&&!r(e))}function lp(t,e){const{exact:n,status:i,predicate:s,mutationKey:r}=t;if(r){if(!e.options.mutationKey)return!1;if(n){if(Go(e.options.mutationKey)!==Go(r))return!1}else if(!Wo(e.options.mutationKey,r))return!1}return!(i&&e.state.status!==i||s&&!s(e))}function Vd(t,e){return((e==null?void 0:e.queryKeyHashFn)||Go)(t)}function Go(t){return JSON.stringify(t,(e,n)=>qu(n)?Object.keys(n).sort().reduce((i,s)=>(i[s]=n[s],i),{}):n)}function Wo(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?Object.keys(e).every(n=>Wo(t[n],e[n])):!1}function S_(t,e){if(t===e)return t;const n=cp(t)&&cp(e);if(n||qu(t)&&qu(e)){const i=n?t:Object.keys(t),s=i.length,r=n?e:Object.keys(e),o=r.length,a=n?[]:{};let l=0;for(let c=0;c<o;c++){const u=n?c:r[c];(!n&&i.includes(u)||n)&&t[u]===void 0&&e[u]===void 0?(a[u]=void 0,l++):(a[u]=S_(t[u],e[u]),a[u]===t[u]&&t[u]!==void 0&&l++)}return s===o&&l===s?t:a}return e}function cp(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function qu(t){if(!up(t))return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(!up(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function up(t){return Object.prototype.toString.call(t)==="[object Object]"}function j2(t){return new Promise(e=>{setTimeout(e,t)})}function Y2(t,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?S_(t,e):e}function K2(t,e,n=0){const i=[...t,e];return n&&i.length>n?i.slice(1):i}function Z2(t,e,n=0){const i=[e,...t];return n&&i.length>n?i.slice(0,-1):i}var Gd=Symbol();function M_(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===Gd?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}var Bs,rs,Lr,hp,Q2=(hp=class extends Gl{constructor(){super();ct(this,Bs);ct(this,rs);ct(this,Lr);Ye(this,Lr,e=>{if(!da&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){me(this,rs)||this.setEventListener(me(this,Lr))}onUnsubscribe(){var e;this.hasListeners()||((e=me(this,rs))==null||e.call(this),Ye(this,rs,void 0))}setEventListener(e){var n;Ye(this,Lr,e),(n=me(this,rs))==null||n.call(this),Ye(this,rs,e(i=>{typeof i=="boolean"?this.setFocused(i):this.onFocus()}))}setFocused(e){me(this,Bs)!==e&&(Ye(this,Bs,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(n=>{n(e)})}isFocused(){var e;return typeof me(this,Bs)=="boolean"?me(this,Bs):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},Bs=new WeakMap,rs=new WeakMap,Lr=new WeakMap,hp),E_=new Q2,Ir,os,Ur,pp,J2=(pp=class extends Gl{constructor(){super();ct(this,Ir,!0);ct(this,os);ct(this,Ur);Ye(this,Ur,e=>{if(!da&&window.addEventListener){const n=()=>e(!0),i=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",i)}}})}onSubscribe(){me(this,os)||this.setEventListener(me(this,Ur))}onUnsubscribe(){var e;this.hasListeners()||((e=me(this,os))==null||e.call(this),Ye(this,os,void 0))}setEventListener(e){var n;Ye(this,Ur,e),(n=me(this,os))==null||n.call(this),Ye(this,os,e(this.setOnline.bind(this)))}setOnline(e){me(this,Ir)!==e&&(Ye(this,Ir,e),this.listeners.forEach(i=>{i(e)}))}isOnline(){return me(this,Ir)}},Ir=new WeakMap,os=new WeakMap,Ur=new WeakMap,pp),bl=new J2;function eP(){let t,e;const n=new Promise((s,r)=>{t=s,e=r});n.status="pending",n.catch(()=>{});function i(s){Object.assign(n,s),delete n.resolve,delete n.reject}return n.resolve=s=>{i({status:"fulfilled",value:s}),t(s)},n.reject=s=>{i({status:"rejected",reason:s}),e(s)},n}function tP(t){return Math.min(1e3*2**t,3e4)}function T_(t){return(t??"online")==="online"?bl.isOnline():!0}var A_=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function Hc(t){return t instanceof A_}function C_(t){let e=!1,n=0,i=!1,s;const r=eP(),o=v=>{var m;i||(f(new A_(v)),(m=t.abort)==null||m.call(t))},a=()=>{e=!0},l=()=>{e=!1},c=()=>E_.isFocused()&&(t.networkMode==="always"||bl.isOnline())&&t.canRun(),u=()=>T_(t.networkMode)&&t.canRun(),d=v=>{var m;i||(i=!0,(m=t.onSuccess)==null||m.call(t,v),s==null||s(),r.resolve(v))},f=v=>{var m;i||(i=!0,(m=t.onError)==null||m.call(t,v),s==null||s(),r.reject(v))},h=()=>new Promise(v=>{var m;s=p=>{(i||c())&&v(p)},(m=t.onPause)==null||m.call(t)}).then(()=>{var v;s=void 0,i||(v=t.onContinue)==null||v.call(t)}),_=()=>{if(i)return;let v;const m=n===0?t.initialPromise:void 0;try{v=m??t.fn()}catch(p){v=Promise.reject(p)}Promise.resolve(v).then(d).catch(p=>{var R;if(i)return;const A=t.retry??(da?0:3),E=t.retryDelay??tP,w=typeof E=="function"?E(n,p):E,L=A===!0||typeof A=="number"&&n<A||typeof A=="function"&&A(n,p);if(e||!L){f(p);return}n++,(R=t.onFail)==null||R.call(t,n,p),j2(w).then(()=>c()?void 0:h()).then(()=>{e?f(p):_()})})};return{promise:r,cancel:o,continue:()=>(s==null||s(),r),cancelRetry:a,continueRetry:l,canStart:u,start:()=>(u()?_():h().then(_),r)}}var nP=t=>setTimeout(t,0);function iP(){let t=[],e=0,n=a=>{a()},i=a=>{a()},s=nP;const r=a=>{e?t.push(a):s(()=>{n(a)})},o=()=>{const a=t;t=[],a.length&&s(()=>{i(()=>{a.forEach(l=>{n(l)})})})};return{batch:a=>{let l;e++;try{l=a()}finally{e--,e||o()}return l},batchCalls:a=>(...l)=>{r(()=>{a(...l)})},schedule:r,setNotifyFunction:a=>{n=a},setBatchNotifyFunction:a=>{i=a},setScheduler:a=>{s=a}}}var un=iP(),ks,mp,R_=(mp=class{constructor(){ct(this,ks)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),X2(this.gcTime)&&Ye(this,ks,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(da?1/0:5*60*1e3))}clearGcTimeout(){me(this,ks)&&(clearTimeout(me(this,ks)),Ye(this,ks,void 0))}},ks=new WeakMap,mp),Or,Nr,On,zs,Kt,Xo,Hs,Wn,Pi,gp,sP=(gp=class extends R_{constructor(e){super();ct(this,Wn);ct(this,Or);ct(this,Nr);ct(this,On);ct(this,zs);ct(this,Kt);ct(this,Xo);ct(this,Hs);Ye(this,Hs,!1),Ye(this,Xo,e.defaultOptions),this.setOptions(e.options),this.observers=[],Ye(this,zs,e.client),Ye(this,On,me(this,zs).getQueryCache()),this.queryKey=e.queryKey,this.queryHash=e.queryHash,Ye(this,Or,oP(this.options)),this.state=e.state??me(this,Or),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var e;return(e=me(this,Kt))==null?void 0:e.promise}setOptions(e){this.options={...me(this,Xo),...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&me(this,On).remove(this)}setData(e,n){const i=Y2(this.state.data,e,this.options);return qt(this,Wn,Pi).call(this,{data:i,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),i}setState(e,n){qt(this,Wn,Pi).call(this,{type:"setState",state:e,setStateOptions:n})}cancel(e){var i,s;const n=(i=me(this,Kt))==null?void 0:i.promise;return(s=me(this,Kt))==null||s.cancel(e),n?n.then(Gn).catch(Gn):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(me(this,Or))}isActive(){return this.observers.some(e=>q2(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Gd||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(e=0){return this.state.isInvalidated||this.state.data===void 0||!$2(this.state.dataUpdatedAt,e)}onFocus(){var n;const e=this.observers.find(i=>i.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(n=me(this,Kt))==null||n.continue()}onOnline(){var n;const e=this.observers.find(i=>i.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(n=me(this,Kt))==null||n.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),me(this,On).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(me(this,Kt)&&(me(this,Hs)?me(this,Kt).cancel({revert:!0}):me(this,Kt).cancelRetry()),this.scheduleGc()),me(this,On).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||qt(this,Wn,Pi).call(this,{type:"invalidate"})}fetch(e,n){var l,c,u;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(me(this,Kt))return me(this,Kt).continueRetry(),me(this,Kt).promise}if(e&&this.setOptions(e),!this.options.queryFn){const d=this.observers.find(f=>f.options.queryFn);d&&this.setOptions(d.options)}const i=new AbortController,s=d=>{Object.defineProperty(d,"signal",{enumerable:!0,get:()=>(Ye(this,Hs,!0),i.signal)})},r=()=>{const d=M_(this.options,n),f={client:me(this,zs),queryKey:this.queryKey,meta:this.meta};return s(f),Ye(this,Hs,!1),this.options.persister?this.options.persister(d,f,this):d(f)},o={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:me(this,zs),state:this.state,fetchFn:r};s(o),(l=this.options.behavior)==null||l.onFetch(o,this),Ye(this,Nr,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((c=o.fetchOptions)==null?void 0:c.meta))&&qt(this,Wn,Pi).call(this,{type:"fetch",meta:(u=o.fetchOptions)==null?void 0:u.meta});const a=d=>{var f,h,_,v;Hc(d)&&d.silent||qt(this,Wn,Pi).call(this,{type:"error",error:d}),Hc(d)||((h=(f=me(this,On).config).onError)==null||h.call(f,d,this),(v=(_=me(this,On).config).onSettled)==null||v.call(_,this.state.data,d,this)),this.scheduleGc()};return Ye(this,Kt,C_({initialPromise:n==null?void 0:n.initialPromise,fn:o.fetchFn,abort:i.abort.bind(i),onSuccess:d=>{var f,h,_,v;if(d===void 0){a(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(d)}catch(m){a(m);return}(h=(f=me(this,On).config).onSuccess)==null||h.call(f,d,this),(v=(_=me(this,On).config).onSettled)==null||v.call(_,d,this.state.error,this),this.scheduleGc()},onError:a,onFail:(d,f)=>{qt(this,Wn,Pi).call(this,{type:"failed",failureCount:d,error:f})},onPause:()=>{qt(this,Wn,Pi).call(this,{type:"pause"})},onContinue:()=>{qt(this,Wn,Pi).call(this,{type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode,canRun:()=>!0})),me(this,Kt).start()}},Or=new WeakMap,Nr=new WeakMap,On=new WeakMap,zs=new WeakMap,Kt=new WeakMap,Xo=new WeakMap,Hs=new WeakMap,Wn=new WeakSet,Pi=function(e){const n=i=>{switch(e.type){case"failed":return{...i,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...rP(i.data,this.options),fetchMeta:e.meta??null};case"success":return{...i,data:e.data,dataUpdateCount:i.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const s=e.error;return Hc(s)&&s.revert&&me(this,Nr)?{...me(this,Nr),fetchStatus:"idle"}:{...i,error:s,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...e.state}}};this.state=n(this.state),un.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),me(this,On).notify({query:this,type:"updated",action:e})})},gp);function rP(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:T_(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function oP(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=e!==void 0,i=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var oi,_p,P_=(_p=class extends Gl{constructor(n={}){super();ct(this,oi);this.config=n,Ye(this,oi,new Map)}build(n,i,s){const r=i.queryKey,o=i.queryHash??Vd(r,i);let a=this.get(o);return a||(a=new sP({client:n,queryKey:r,queryHash:o,options:n.defaultQueryOptions(i),state:s,defaultOptions:n.getQueryDefaults(r)}),this.add(a)),a}add(n){me(this,oi).has(n.queryHash)||(me(this,oi).set(n.queryHash,n),this.notify({type:"added",query:n}))}remove(n){const i=me(this,oi).get(n.queryHash);i&&(n.destroy(),i===n&&me(this,oi).delete(n.queryHash),this.notify({type:"removed",query:n}))}clear(){un.batch(()=>{this.getAll().forEach(n=>{this.remove(n)})})}get(n){return me(this,oi).get(n)}getAll(){return[...me(this,oi).values()]}find(n){const i={exact:!0,...n};return this.getAll().find(s=>ap(i,s))}findAll(n={}){const i=this.getAll();return Object.keys(n).length>0?i.filter(s=>ap(n,s)):i}notify(n){un.batch(()=>{this.listeners.forEach(i=>{i(n)})})}onFocus(){un.batch(()=>{this.getAll().forEach(n=>{n.onFocus()})})}onOnline(){un.batch(()=>{this.getAll().forEach(n=>{n.onOnline()})})}},oi=new WeakMap,_p),ai,ln,Vs,li,Zi,vp,aP=(vp=class extends R_{constructor(e){super();ct(this,li);ct(this,ai);ct(this,ln);ct(this,Vs);this.mutationId=e.mutationId,Ye(this,ln,e.mutationCache),Ye(this,ai,[]),this.state=e.state||lP(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){me(this,ai).includes(e)||(me(this,ai).push(e),this.clearGcTimeout(),me(this,ln).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){Ye(this,ai,me(this,ai).filter(n=>n!==e)),this.scheduleGc(),me(this,ln).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){me(this,ai).length||(this.state.status==="pending"?this.scheduleGc():me(this,ln).remove(this))}continue(){var e;return((e=me(this,Vs))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var r,o,a,l,c,u,d,f,h,_,v,m,p,A,E,w,L,R,U,I;const n=()=>{qt(this,li,Zi).call(this,{type:"continue"})};Ye(this,Vs,C_({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(y,b)=>{qt(this,li,Zi).call(this,{type:"failed",failureCount:y,error:b})},onPause:()=>{qt(this,li,Zi).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>me(this,ln).canRun(this)}));const i=this.state.status==="pending",s=!me(this,Vs).canStart();try{if(i)n();else{qt(this,li,Zi).call(this,{type:"pending",variables:e,isPaused:s}),await((o=(r=me(this,ln).config).onMutate)==null?void 0:o.call(r,e,this));const b=await((l=(a=this.options).onMutate)==null?void 0:l.call(a,e));b!==this.state.context&&qt(this,li,Zi).call(this,{type:"pending",context:b,variables:e,isPaused:s})}const y=await me(this,Vs).start();return await((u=(c=me(this,ln).config).onSuccess)==null?void 0:u.call(c,y,e,this.state.context,this)),await((f=(d=this.options).onSuccess)==null?void 0:f.call(d,y,e,this.state.context)),await((_=(h=me(this,ln).config).onSettled)==null?void 0:_.call(h,y,null,this.state.variables,this.state.context,this)),await((m=(v=this.options).onSettled)==null?void 0:m.call(v,y,null,e,this.state.context)),qt(this,li,Zi).call(this,{type:"success",data:y}),y}catch(y){try{throw await((A=(p=me(this,ln).config).onError)==null?void 0:A.call(p,y,e,this.state.context,this)),await((w=(E=this.options).onError)==null?void 0:w.call(E,y,e,this.state.context)),await((R=(L=me(this,ln).config).onSettled)==null?void 0:R.call(L,void 0,y,this.state.variables,this.state.context,this)),await((I=(U=this.options).onSettled)==null?void 0:I.call(U,void 0,y,e,this.state.context)),y}finally{qt(this,li,Zi).call(this,{type:"error",error:y})}}finally{me(this,ln).runNext(this)}}},ai=new WeakMap,ln=new WeakMap,Vs=new WeakMap,li=new WeakSet,Zi=function(e){const n=i=>{switch(e.type){case"failed":return{...i,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...i,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:e.error,failureCount:i.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=n(this.state),un.batch(()=>{me(this,ai).forEach(i=>{i.onMutationUpdate(e)}),me(this,ln).notify({mutation:this,type:"updated",action:e})})},vp);function lP(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Ii,Xn,$o,xp,D_=(xp=class extends Gl{constructor(n={}){super();ct(this,Ii);ct(this,Xn);ct(this,$o);this.config=n,Ye(this,Ii,new Set),Ye(this,Xn,new Map),Ye(this,$o,0)}build(n,i,s){const r=new aP({mutationCache:this,mutationId:++pa(this,$o)._,options:n.defaultMutationOptions(i),state:s});return this.add(r),r}add(n){me(this,Ii).add(n);const i=Va(n);if(typeof i=="string"){const s=me(this,Xn).get(i);s?s.push(n):me(this,Xn).set(i,[n])}this.notify({type:"added",mutation:n})}remove(n){if(me(this,Ii).delete(n)){const i=Va(n);if(typeof i=="string"){const s=me(this,Xn).get(i);if(s)if(s.length>1){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}else s[0]===n&&me(this,Xn).delete(i)}}this.notify({type:"removed",mutation:n})}canRun(n){const i=Va(n);if(typeof i=="string"){const s=me(this,Xn).get(i),r=s==null?void 0:s.find(o=>o.state.status==="pending");return!r||r===n}else return!0}runNext(n){var s;const i=Va(n);if(typeof i=="string"){const r=(s=me(this,Xn).get(i))==null?void 0:s.find(o=>o!==n&&o.state.isPaused);return(r==null?void 0:r.continue())??Promise.resolve()}else return Promise.resolve()}clear(){un.batch(()=>{me(this,Ii).forEach(n=>{this.notify({type:"removed",mutation:n})}),me(this,Ii).clear(),me(this,Xn).clear()})}getAll(){return Array.from(me(this,Ii))}find(n){const i={exact:!0,...n};return this.getAll().find(s=>lp(i,s))}findAll(n={}){return this.getAll().filter(i=>lp(n,i))}notify(n){un.batch(()=>{this.listeners.forEach(i=>{i(n)})})}resumePausedMutations(){const n=this.getAll().filter(i=>i.state.isPaused);return un.batch(()=>Promise.all(n.map(i=>i.continue().catch(Gn))))}},Ii=new WeakMap,Xn=new WeakMap,$o=new WeakMap,xp);function Va(t){var e;return(e=t.options.scope)==null?void 0:e.id}function dp(t){return{onFetch:(e,n)=>{var u,d,f,h,_;const i=e.options,s=(f=(d=(u=e.fetchOptions)==null?void 0:u.meta)==null?void 0:d.fetchMore)==null?void 0:f.direction,r=((h=e.state.data)==null?void 0:h.pages)||[],o=((_=e.state.data)==null?void 0:_.pageParams)||[];let a={pages:[],pageParams:[]},l=0;const c=async()=>{let v=!1;const m=E=>{Object.defineProperty(E,"signal",{enumerable:!0,get:()=>(e.signal.aborted?v=!0:e.signal.addEventListener("abort",()=>{v=!0}),e.signal)})},p=M_(e.options,e.fetchOptions),A=async(E,w,L)=>{if(v)return Promise.reject();if(w==null&&E.pages.length)return Promise.resolve(E);const R={client:e.client,queryKey:e.queryKey,pageParam:w,direction:L?"backward":"forward",meta:e.options.meta};m(R);const U=await p(R),{maxPages:I}=e.options,y=L?Z2:K2;return{pages:y(E.pages,U,I),pageParams:y(E.pageParams,w,I)}};if(s&&r.length){const E=s==="backward",w=E?cP:fp,L={pages:r,pageParams:o},R=w(i,L);a=await A(L,R,E)}else{const E=t??r.length;do{const w=l===0?o[0]??i.initialPageParam:fp(i,a);if(l>0&&w==null)break;a=await A(a,w),l++}while(l<E)}return a};e.options.persister?e.fetchFn=()=>{var v,m;return(m=(v=e.options).persister)==null?void 0:m.call(v,c,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=c}}}function fp(t,{pages:e,pageParams:n}){const i=e.length-1;return e.length>0?t.getNextPageParam(e[i],e,n[i],n):void 0}function cP(t,{pages:e,pageParams:n}){var i;return e.length>0?(i=t.getPreviousPageParam)==null?void 0:i.call(t,e[0],e,n[0],n):void 0}var Pt,as,ls,Fr,Br,cs,kr,zr,yp,uP=(yp=class{constructor(e={}){ct(this,Pt);ct(this,as);ct(this,ls);ct(this,Fr);ct(this,Br);ct(this,cs);ct(this,kr);ct(this,zr);Ye(this,Pt,e.queryCache||new P_),Ye(this,as,e.mutationCache||new D_),Ye(this,ls,e.defaultOptions||{}),Ye(this,Fr,new Map),Ye(this,Br,new Map),Ye(this,cs,0)}mount(){pa(this,cs)._++,me(this,cs)===1&&(Ye(this,kr,E_.subscribe(async e=>{e&&(await this.resumePausedMutations(),me(this,Pt).onFocus())})),Ye(this,zr,bl.subscribe(async e=>{e&&(await this.resumePausedMutations(),me(this,Pt).onOnline())})))}unmount(){var e,n;pa(this,cs)._--,me(this,cs)===0&&((e=me(this,kr))==null||e.call(this),Ye(this,kr,void 0),(n=me(this,zr))==null||n.call(this),Ye(this,zr,void 0))}isFetching(e){return me(this,Pt).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return me(this,as).findAll({...e,status:"pending"}).length}getQueryData(e){var i;const n=this.defaultQueryOptions({queryKey:e});return(i=me(this,Pt).get(n.queryHash))==null?void 0:i.state.data}ensureQueryData(e){const n=this.defaultQueryOptions(e),i=me(this,Pt).build(this,n),s=i.state.data;return s===void 0?this.fetchQuery(e):(e.revalidateIfStale&&i.isStaleByTime(op(n.staleTime,i))&&this.prefetchQuery(n),Promise.resolve(s))}getQueriesData(e){return me(this,Pt).findAll(e).map(({queryKey:n,state:i})=>{const s=i.data;return[n,s]})}setQueryData(e,n,i){const s=this.defaultQueryOptions({queryKey:e}),r=me(this,Pt).get(s.queryHash),o=r==null?void 0:r.state.data,a=W2(n,o);if(a!==void 0)return me(this,Pt).build(this,s).setData(a,{...i,manual:!0})}setQueriesData(e,n,i){return un.batch(()=>me(this,Pt).findAll(e).map(({queryKey:s})=>[s,this.setQueryData(s,n,i)]))}getQueryState(e){var i;const n=this.defaultQueryOptions({queryKey:e});return(i=me(this,Pt).get(n.queryHash))==null?void 0:i.state}removeQueries(e){const n=me(this,Pt);un.batch(()=>{n.findAll(e).forEach(i=>{n.remove(i)})})}resetQueries(e,n){const i=me(this,Pt);return un.batch(()=>(i.findAll(e).forEach(s=>{s.reset()}),this.refetchQueries({type:"active",...e},n)))}cancelQueries(e,n={}){const i={revert:!0,...n},s=un.batch(()=>me(this,Pt).findAll(e).map(r=>r.cancel(i)));return Promise.all(s).then(Gn).catch(Gn)}invalidateQueries(e,n={}){return un.batch(()=>(me(this,Pt).findAll(e).forEach(i=>{i.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},n)))}refetchQueries(e,n={}){const i={...n,cancelRefetch:n.cancelRefetch??!0},s=un.batch(()=>me(this,Pt).findAll(e).filter(r=>!r.isDisabled()).map(r=>{let o=r.fetch(void 0,i);return i.throwOnError||(o=o.catch(Gn)),r.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(s).then(Gn)}fetchQuery(e){const n=this.defaultQueryOptions(e);n.retry===void 0&&(n.retry=!1);const i=me(this,Pt).build(this,n);return i.isStaleByTime(op(n.staleTime,i))?i.fetch(n):Promise.resolve(i.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(Gn).catch(Gn)}fetchInfiniteQuery(e){return e.behavior=dp(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(Gn).catch(Gn)}ensureInfiniteQueryData(e){return e.behavior=dp(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return bl.isOnline()?me(this,as).resumePausedMutations():Promise.resolve()}getQueryCache(){return me(this,Pt)}getMutationCache(){return me(this,as)}getDefaultOptions(){return me(this,ls)}setDefaultOptions(e){Ye(this,ls,e)}setQueryDefaults(e,n){me(this,Fr).set(Go(e),{queryKey:e,defaultOptions:n})}getQueryDefaults(e){const n=[...me(this,Fr).values()],i={};return n.forEach(s=>{Wo(e,s.queryKey)&&Object.assign(i,s.defaultOptions)}),i}setMutationDefaults(e,n){me(this,Br).set(Go(e),{mutationKey:e,defaultOptions:n})}getMutationDefaults(e){const n=[...me(this,Br).values()],i={};return n.forEach(s=>{Wo(e,s.mutationKey)&&Object.assign(i,s.defaultOptions)}),i}defaultQueryOptions(e){if(e._defaulted)return e;const n={...me(this,ls).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return n.queryHash||(n.queryHash=Vd(n.queryKey,n)),n.refetchOnReconnect===void 0&&(n.refetchOnReconnect=n.networkMode!=="always"),n.throwOnError===void 0&&(n.throwOnError=!!n.suspense),!n.networkMode&&n.persister&&(n.networkMode="offlineFirst"),n.queryFn===Gd&&(n.enabled=!1),n}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...me(this,ls).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){me(this,Pt).clear(),me(this,as).clear()}},Pt=new WeakMap,as=new WeakMap,ls=new WeakMap,Fr=new WeakMap,Br=new WeakMap,cs=new WeakMap,kr=new WeakMap,zr=new WeakMap,yp),dP="VUE_QUERY_CLIENT";function fP(t){const e=t?`:${t}`:"";return`${dP}${e}`}function ju(t,e,n="",i=0){if(e){const s=e(t,n,i);if(s===void 0&&Wt(t)||s!==void 0)return s}if(Array.isArray(t))return t.map((s,r)=>ju(s,e,String(r),i+1));if(typeof t=="object"&&pP(t)){const s=Object.entries(t).map(([r,o])=>[r,ju(o,e,r,i+1)]);return Object.fromEntries(s)}return t}function hP(t,e){return ju(t,e)}function st(t,e=!1){return hP(t,(n,i,s)=>{if(s===1&&i==="queryKey")return st(n,!0);if(e&&mP(n))return st(n(),e);if(Wt(n))return st(hs(n),e)})}function pP(t){if(Object.prototype.toString.call(t)!=="[object Object]")return!1;const e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function mP(t){return typeof t=="function"}var gP=class extends P_{find(t){return super.find(st(t))}findAll(t={}){return super.findAll(st(t))}},_P=class extends D_{find(t){return super.find(st(t))}findAll(t={}){return super.findAll(st(t))}},vP=class extends uP{constructor(t={}){const e={defaultOptions:t.defaultOptions,queryCache:t.queryCache||new gP,mutationCache:t.mutationCache||new _P};super(e),this.isRestoring=Ke(!1)}isFetching(t={}){return super.isFetching(st(t))}isMutating(t={}){return super.isMutating(st(t))}getQueryData(t){return super.getQueryData(st(t))}ensureQueryData(t){return super.ensureQueryData(st(t))}getQueriesData(t){return super.getQueriesData(st(t))}setQueryData(t,e,n={}){return super.setQueryData(st(t),e,st(n))}setQueriesData(t,e,n={}){return super.setQueriesData(st(t),e,st(n))}getQueryState(t){return super.getQueryState(st(t))}removeQueries(t={}){return super.removeQueries(st(t))}resetQueries(t={},e={}){return super.resetQueries(st(t),st(e))}cancelQueries(t={},e={}){return super.cancelQueries(st(t),st(e))}invalidateQueries(t={},e={}){const n=st(t),i=st(e);if(super.invalidateQueries({...n,refetchType:"none"},i),n.refetchType==="none")return Promise.resolve();const s={...n,type:n.refetchType??n.type??"active"};return Zo().then(()=>super.refetchQueries(s,i))}refetchQueries(t={},e={}){return super.refetchQueries(st(t),st(e))}fetchQuery(t){return super.fetchQuery(st(t))}prefetchQuery(t){return super.prefetchQuery(st(t))}fetchInfiniteQuery(t){return super.fetchInfiniteQuery(st(t))}prefetchInfiniteQuery(t){return super.prefetchInfiniteQuery(st(t))}setDefaultOptions(t){super.setDefaultOptions(st(t))}setQueryDefaults(t,e){super.setQueryDefaults(st(t),st(e))}getQueryDefaults(t){return super.getQueryDefaults(st(t))}setMutationDefaults(t,e){super.setMutationDefaults(st(t),st(e))}getMutationDefaults(t){return super.getMutationDefaults(st(t))}},xP={install:(t,e={})=>{const n=fP(e.queryClientKey);let i;if("queryClient"in e&&e.queryClient)i=e.queryClient;else{const o="queryClientConfig"in e?e.queryClientConfig:void 0;i=new vP(o)}da||i.mount();let s=()=>{};if(e.clientPersister){i.isRestoring.value=!0;const[o,a]=e.clientPersister(i);s=o,a.then(()=>{var l;i.isRestoring.value=!1,(l=e.clientPersisterOnSuccess)==null||l.call(e,i)})}const r=()=>{i.unmount(),s()};if(t.onUnmount)t.onUnmount(r);else{const o=t.unmount;t.unmount=function(){r(),o()}}t.provide(n,i)}};const L_=tx(py),yP=rx();L_.use(yP).use(G2).use(xP);L_.mount("#app");export{Cf as A,bP as B,kt as C,LR as D,VR as E,Gt as F,en as G,yo as H,wo as I,nt as J,y_ as K,h_ as L,Xu as M,zl as N,b_ as O,Tn as P,u_ as Q,Kn as R,l_ as S,Sm as T,ud as U,Zo as V,C2 as W,Jo as _,N as a,$n as b,ft as c,Rt as d,MP as e,fo as f,lc as g,TP as h,AP as i,CP as j,RP as k,EP as l,Yo as m,Jr as n,ot as o,cd as p,Li as q,Ke as r,ii as s,Dt as t,Ni as u,es as v,Qn as w,$t as x,SP as y,qn as z};
