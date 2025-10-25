const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SweetAlertDemo-CYnsxkY-.js","assets/SweetAlertDemo-tn0RQdqM.css","assets/WeavingGrid-DCpjBrcL.js","assets/PeyoteGridEditor-D6wv1j_U.js","assets/PeyoteGridEditor-_eckTEjt.css","assets/WeavingGrid-p5k6qFxd.css","assets/PeyoteGrid-SHqUQlQj.js","assets/PeyoteGrid-DyXLFu-D.css"])))=>i.map(i=>d[i]);
var rf=t=>{throw TypeError(t)};var ic=(t,e,n)=>e.has(t)||rf("Cannot "+n);var fe=(t,e,n)=>(ic(t,e,"read from private field"),n?n.call(t):e.get(t)),St=(t,e,n)=>e.has(t)?rf("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),ht=(t,e,n,i)=>(ic(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n),un=(t,e,n)=>(ic(t,e,"access private method"),n);var Aa=(t,e,n,i)=>({set _(s){ht(t,e,s,n)},get _(){return fe(t,e,i)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ld(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ot={},Ur=[],Ri=()=>{},Vv=()=>!1,Ol=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),cd=t=>t.startsWith("onUpdate:"),_n=Object.assign,ud=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Gv=Object.prototype.hasOwnProperty,Rt=(t,e)=>Gv.call(t,e),et=Array.isArray,Or=t=>la(t)==="[object Map]",fo=t=>la(t)==="[object Set]",of=t=>la(t)==="[object Date]",ut=t=>typeof t=="function",Jt=t=>typeof t=="string",Li=t=>typeof t=="symbol",Ft=t=>t!==null&&typeof t=="object",Cp=t=>(Ft(t)||ut(t))&&ut(t.then)&&ut(t.catch),Rp=Object.prototype.toString,la=t=>Rp.call(t),Wv=t=>la(t).slice(8,-1),Pp=t=>la(t)==="[object Object]",dd=t=>Jt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fo=ld(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Nl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},$v=/-(\w)/g,si=Nl(t=>t.replace($v,(e,n)=>n?n.toUpperCase():"")),Xv=/\B([A-Z])/g,cr=Nl(t=>t.replace(Xv,"-$1").toLowerCase()),Fl=Nl(t=>t.charAt(0).toUpperCase()+t.slice(1)),sc=Nl(t=>t?`on${Fl(t)}`:""),Es=(t,e)=>!Object.is(t,e),nl=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Dp=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},pl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let af;const kl=()=>af||(af=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xn(t){if(et(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Jt(i)?Kv(i):Xn(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Jt(t)||Ft(t))return t}const jv=/;(?![^(]*\))/g,qv=/:([^]+)/,Yv=/\/\*[^]*?\*\//g;function Kv(t){const e={};return t.replace(Yv,"").split(jv).forEach(n=>{if(n){const i=n.split(qv);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Je(t){let e="";if(Jt(t))e=t;else if(et(t))for(let n=0;n<t.length;n++){const i=Je(t[n]);i&&(e+=i+" ")}else if(Ft(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Zv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qv=ld(Zv);function Lp(t){return!!t||t===""}function Jv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=ca(t[i],e[i]);return n}function ca(t,e){if(t===e)return!0;let n=of(t),i=of(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Li(t),i=Li(e),n||i)return t===e;if(n=et(t),i=et(e),n||i)return n&&i?Jv(t,e):!1;if(n=Ft(t),i=Ft(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ca(t[o],e[o]))return!1}}return String(t)===String(e)}function fd(t,e){return t.findIndex(n=>ca(n,e))}const Ip=t=>!!(t&&t.__v_isRef===!0),at=t=>Jt(t)?t:t==null?"":et(t)||Ft(t)&&(t.toString===Rp||!ut(t.toString))?Ip(t)?at(t.value):JSON.stringify(t,Up,2):String(t),Up=(t,e)=>Ip(e)?Up(t,e.value):Or(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[rc(i,r)+" =>"]=s,n),{})}:fo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>rc(n))}:Li(e)?rc(e):Ft(e)&&!et(e)&&!Pp(e)?String(e):e,rc=(t,e="")=>{var n;return Li(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wn;class Op{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Wn,!e&&Wn&&(this.index=(Wn.scopes||(Wn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Wn;try{return Wn=this,e()}finally{Wn=n}}}on(){Wn=this}off(){Wn=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function e_(t){return new Op(t)}function t_(){return Wn}let Nt;const oc=new WeakSet;class Np{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Wn&&Wn.active&&Wn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,oc.has(this)&&(oc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||kp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,lf(this),Bp(this);const e=Nt,n=mi;Nt=this,mi=!0;try{return this.fn()}finally{Hp(this),Nt=e,mi=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)md(e);this.deps=this.depsTail=void 0,lf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?oc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){eu(this)&&this.run()}get dirty(){return eu(this)}}let Fp=0,ko,Bo;function kp(t,e=!1){if(t.flags|=8,e){t.next=Bo,Bo=t;return}t.next=ko,ko=t}function hd(){Fp++}function pd(){if(--Fp>0)return;if(Bo){let e=Bo;for(Bo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ko;){let e=ko;for(ko=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Bp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Hp(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),md(i),n_(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function eu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(zp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function zp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===$o))return;t.globalVersion=$o;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!eu(t)){t.flags&=-3;return}const n=Nt,i=mi;Nt=t,mi=!0;try{Bp(t);const s=t.fn(t._value);(e.version===0||Es(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Nt=n,mi=i,Hp(t),t.flags&=-3}}function md(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)md(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function n_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let mi=!0;const Vp=[];function Ds(){Vp.push(mi),mi=!1}function Ls(){const t=Vp.pop();mi=t===void 0?!0:t}function lf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Nt;Nt=void 0;try{e()}finally{Nt=n}}}let $o=0;class i_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class gd{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Nt||!mi||Nt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Nt)n=this.activeLink=new i_(Nt,this),Nt.deps?(n.prevDep=Nt.depsTail,Nt.depsTail.nextDep=n,Nt.depsTail=n):Nt.deps=Nt.depsTail=n,Gp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Nt.depsTail,n.nextDep=void 0,Nt.depsTail.nextDep=n,Nt.depsTail=n,Nt.deps===n&&(Nt.deps=i)}return n}trigger(e){this.version++,$o++,this.notify(e)}notify(e){hd();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{pd()}}}function Gp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Gp(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const tu=new WeakMap,tr=Symbol(""),nu=Symbol(""),Xo=Symbol("");function pn(t,e,n){if(mi&&Nt){let i=tu.get(t);i||tu.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new gd),s.map=i,s.key=n),s.track()}}function qi(t,e,n,i,s,r){const o=tu.get(t);if(!o){$o++;return}const a=l=>{l&&l.trigger()};if(hd(),e==="clear")o.forEach(a);else{const l=et(t),c=l&&dd(n);if(l&&n==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===Xo||!Li(f)&&f>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Xo)),e){case"add":l?c&&a(o.get("length")):(a(o.get(tr)),Or(t)&&a(o.get(nu)));break;case"delete":l||(a(o.get(tr)),Or(t)&&a(o.get(nu)));break;case"set":Or(t)&&a(o.get(tr));break}}pd()}function pr(t){const e=Ct(t);return e===t?e:(pn(e,"iterate",Xo),ii(t)?e:e.map(mn))}function Bl(t){return pn(t=Ct(t),"iterate",Xo),t}const s_={__proto__:null,[Symbol.iterator](){return ac(this,Symbol.iterator,mn)},concat(...t){return pr(this).concat(...t.map(e=>et(e)?pr(e):e))},entries(){return ac(this,"entries",t=>(t[1]=mn(t[1]),t))},every(t,e){return Fi(this,"every",t,e,void 0,arguments)},filter(t,e){return Fi(this,"filter",t,e,n=>n.map(mn),arguments)},find(t,e){return Fi(this,"find",t,e,mn,arguments)},findIndex(t,e){return Fi(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Fi(this,"findLast",t,e,mn,arguments)},findLastIndex(t,e){return Fi(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Fi(this,"forEach",t,e,void 0,arguments)},includes(...t){return lc(this,"includes",t)},indexOf(...t){return lc(this,"indexOf",t)},join(t){return pr(this).join(t)},lastIndexOf(...t){return lc(this,"lastIndexOf",t)},map(t,e){return Fi(this,"map",t,e,void 0,arguments)},pop(){return xo(this,"pop")},push(...t){return xo(this,"push",t)},reduce(t,...e){return cf(this,"reduce",t,e)},reduceRight(t,...e){return cf(this,"reduceRight",t,e)},shift(){return xo(this,"shift")},some(t,e){return Fi(this,"some",t,e,void 0,arguments)},splice(...t){return xo(this,"splice",t)},toReversed(){return pr(this).toReversed()},toSorted(t){return pr(this).toSorted(t)},toSpliced(...t){return pr(this).toSpliced(...t)},unshift(...t){return xo(this,"unshift",t)},values(){return ac(this,"values",mn)}};function ac(t,e,n){const i=Bl(t),s=i[e]();return i!==t&&!ii(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=n(r.value)),r}),s}const r_=Array.prototype;function Fi(t,e,n,i,s,r){const o=Bl(t),a=o!==t&&!ii(t),l=o[e];if(l!==r_[e]){const d=l.apply(t,r);return a?mn(d):d}let c=n;o!==t&&(a?c=function(d,f){return n.call(this,mn(d),f,t)}:n.length>2&&(c=function(d,f){return n.call(this,d,f,t)}));const u=l.call(o,c,i);return a&&s?s(u):u}function cf(t,e,n,i){const s=Bl(t);let r=n;return s!==t&&(ii(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,mn(a),l,t)}),s[e](r,...i)}function lc(t,e,n){const i=Ct(t);pn(i,"iterate",Xo);const s=i[e](...n);return(s===-1||s===!1)&&bd(n[0])?(n[0]=Ct(n[0]),i[e](...n)):s}function xo(t,e,n=[]){Ds(),hd();const i=Ct(t)[e].apply(t,n);return pd(),Ls(),i}const o_=ld("__proto__,__v_isRef,__isVue"),Wp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Li));function a_(t){Li(t)||(t=String(t));const e=Ct(this);return pn(e,"has",t),e.hasOwnProperty(t)}class $p{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?v_:Yp:r?qp:jp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=et(e);if(!s){let l;if(o&&(l=s_[n]))return l;if(n==="hasOwnProperty")return a_}const a=Reflect.get(e,n,ln(e)?e:i);return(Li(n)?Wp.has(n):o_(n))||(s||pn(e,"get",n),r)?a:ln(a)?o&&dd(n)?a:a.value:Ft(a)?s?Zp(a):ua(a):a}}class Xp extends $p{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(!this._isShallow){const l=ir(r);if(!ii(i)&&!ir(i)&&(r=Ct(r),i=Ct(i)),!et(e)&&ln(r)&&!ln(i))return l?!1:(r.value=i,!0)}const o=et(e)&&dd(n)?Number(n)<e.length:Rt(e,n),a=Reflect.set(e,n,i,ln(e)?e:s);return e===Ct(s)&&(o?Es(i,r)&&qi(e,"set",n,i):qi(e,"add",n,i)),a}deleteProperty(e,n){const i=Rt(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&qi(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!Li(n)||!Wp.has(n))&&pn(e,"has",n),i}ownKeys(e){return pn(e,"iterate",et(e)?"length":tr),Reflect.ownKeys(e)}}class l_ extends $p{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const c_=new Xp,u_=new l_,d_=new Xp(!0);const iu=t=>t,Ca=t=>Reflect.getPrototypeOf(t);function f_(t,e,n){return function(...i){const s=this.__v_raw,r=Ct(s),o=Or(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?iu:e?su:mn;return!e&&pn(r,"iterate",l?nu:tr),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function Ra(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function h_(t,e){const n={get(s){const r=this.__v_raw,o=Ct(r),a=Ct(s);t||(Es(s,a)&&pn(o,"get",s),pn(o,"get",a));const{has:l}=Ca(o),c=e?iu:t?su:mn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&pn(Ct(s),"iterate",tr),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=Ct(r),a=Ct(s);return t||(Es(s,a)&&pn(o,"has",s),pn(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=Ct(a),c=e?iu:t?su:mn;return!t&&pn(l,"iterate",tr),a.forEach((u,d)=>s.call(r,c(u),c(d),o))}};return _n(n,t?{add:Ra("add"),set:Ra("set"),delete:Ra("delete"),clear:Ra("clear")}:{add(s){!e&&!ii(s)&&!ir(s)&&(s=Ct(s));const r=Ct(this);return Ca(r).has.call(r,s)||(r.add(s),qi(r,"add",s,s)),this},set(s,r){!e&&!ii(r)&&!ir(r)&&(r=Ct(r));const o=Ct(this),{has:a,get:l}=Ca(o);let c=a.call(o,s);c||(s=Ct(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Es(r,u)&&qi(o,"set",s,r):qi(o,"add",s,r),this},delete(s){const r=Ct(this),{has:o,get:a}=Ca(r);let l=o.call(r,s);l||(s=Ct(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&qi(r,"delete",s,void 0),c},clear(){const s=Ct(this),r=s.size!==0,o=s.clear();return r&&qi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=f_(s,t,e)}),n}function vd(t,e){const n=h_(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(Rt(n,s)&&s in i?n:i,s,r)}const p_={get:vd(!1,!1)},m_={get:vd(!1,!0)},g_={get:vd(!0,!1)};const jp=new WeakMap,qp=new WeakMap,Yp=new WeakMap,v_=new WeakMap;function __(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function b_(t){return t.__v_skip||!Object.isExtensible(t)?0:__(Wv(t))}function ua(t){return ir(t)?t:_d(t,!1,c_,p_,jp)}function Kp(t){return _d(t,!1,d_,m_,qp)}function Zp(t){return _d(t,!0,u_,g_,Yp)}function _d(t,e,n,i,s){if(!Ft(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=b_(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Nr(t){return ir(t)?Nr(t.__v_raw):!!(t&&t.__v_isReactive)}function ir(t){return!!(t&&t.__v_isReadonly)}function ii(t){return!!(t&&t.__v_isShallow)}function bd(t){return t?!!t.__v_raw:!1}function Ct(t){const e=t&&t.__v_raw;return e?Ct(e):t}function Qp(t){return!Rt(t,"__v_skip")&&Object.isExtensible(t)&&Dp(t,"__v_skip",!0),t}const mn=t=>Ft(t)?ua(t):t,su=t=>Ft(t)?Zp(t):t;function ln(t){return t?t.__v_isRef===!0:!1}function ot(t){return Jp(t,!1)}function x_(t){return Jp(t,!0)}function Jp(t,e){return ln(t)?t:new y_(t,e)}class y_{constructor(e,n){this.dep=new gd,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ct(e),this._value=n?e:mn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||ii(e)||ir(e);e=i?e:Ct(e),Es(e,n)&&(this._rawValue=e,this._value=i?e:mn(e),this.dep.trigger())}}function Ts(t){return ln(t)?t.value:t}const w_={get:(t,e,n)=>e==="__v_raw"?t:Ts(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return ln(s)&&!ln(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function em(t){return Nr(t)?t:new Proxy(t,w_)}class S_{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new gd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=$o-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Nt!==this)return kp(this,!0),!0}get value(){const e=this.dep.track();return zp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function M_(t,e,n=!1){let i,s;return ut(t)?i=t:(i=t.get,s=t.set),new S_(i,s,n)}const Pa={},ml=new WeakMap;let Ws;function E_(t,e=!1,n=Ws){if(n){let i=ml.get(n);i||ml.set(n,i=[]),i.push(t)}}function T_(t,e,n=Ot){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=w=>s?w:ii(w)||s===!1||s===0?Yi(w,1):Yi(w);let u,d,f,h,v=!1,g=!1;if(ln(t)?(d=()=>t.value,v=ii(t)):Nr(t)?(d=()=>c(t),v=!0):et(t)?(g=!0,v=t.some(w=>Nr(w)||ii(w)),d=()=>t.map(w=>{if(ln(w))return w.value;if(Nr(w))return c(w);if(ut(w))return l?l(w,2):w()})):ut(t)?e?d=l?()=>l(t,2):t:d=()=>{if(f){Ds();try{f()}finally{Ls()}}const w=Ws;Ws=u;try{return l?l(t,3,[h]):t(h)}finally{Ws=w}}:d=Ri,e&&s){const w=d,U=s===!0?1/0:s;d=()=>Yi(w(),U)}const m=t_(),p=()=>{u.stop(),m&&m.active&&ud(m.effects,u)};if(r&&e){const w=e;e=(...U)=>{w(...U),p()}}let A=g?new Array(t.length).fill(Pa):Pa;const C=w=>{if(!(!(u.flags&1)||!u.dirty&&!w))if(e){const U=u.run();if(s||v||(g?U.some((I,D)=>Es(I,A[D])):Es(U,A))){f&&f();const I=Ws;Ws=u;try{const D=[U,A===Pa?void 0:g&&A[0]===Pa?[]:A,h];l?l(e,3,D):e(...D),A=U}finally{Ws=I}}}else u.run()};return a&&a(C),u=new Np(d),u.scheduler=o?()=>o(C,!1):C,h=w=>E_(w,!1,u),f=u.onStop=()=>{const w=ml.get(u);if(w){if(l)l(w,4);else for(const U of w)U();ml.delete(u)}},e?i?C(!0):A=u.run():o?o(C.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Yi(t,e=1/0,n){if(e<=0||!Ft(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ln(t))Yi(t.value,e,n);else if(et(t))for(let i=0;i<t.length;i++)Yi(t[i],e,n);else if(fo(t)||Or(t))t.forEach(i=>{Yi(i,e,n)});else if(Pp(t)){for(const i in t)Yi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Yi(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function da(t,e,n,i){try{return i?t(...i):t()}catch(s){Hl(s,e,n)}}function Ii(t,e,n,i){if(ut(t)){const s=da(t,e,n,i);return s&&Cp(s)&&s.catch(r=>{Hl(r,e,n)}),s}if(et(t)){const s=[];for(let r=0;r<t.length;r++)s.push(Ii(t[r],e,n,i));return s}}function Hl(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ot;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}a=a.parent}if(r){Ds(),da(r,null,10,[t,l,c]),Ls();return}}A_(t,n,s,i,o)}function A_(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const En=[];let xi=-1;const Fr=[];let fs=null,Pr=0;const tm=Promise.resolve();let gl=null;function fa(t){const e=gl||tm;return t?e.then(this?t.bind(this):t):e}function C_(t){let e=xi+1,n=En.length;for(;e<n;){const i=e+n>>>1,s=En[i],r=jo(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function xd(t){if(!(t.flags&1)){const e=jo(t),n=En[En.length-1];!n||!(t.flags&2)&&e>=jo(n)?En.push(t):En.splice(C_(e),0,t),t.flags|=1,nm()}}function nm(){gl||(gl=tm.then(sm))}function R_(t){et(t)?Fr.push(...t):fs&&t.id===-1?fs.splice(Pr+1,0,t):t.flags&1||(Fr.push(t),t.flags|=1),nm()}function uf(t,e,n=xi+1){for(;n<En.length;n++){const i=En[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;En.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function im(t){if(Fr.length){const e=[...new Set(Fr)].sort((n,i)=>jo(n)-jo(i));if(Fr.length=0,fs){fs.push(...e);return}for(fs=e,Pr=0;Pr<fs.length;Pr++){const n=fs[Pr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}fs=null,Pr=0}}const jo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function sm(t){try{for(xi=0;xi<En.length;xi++){const e=En[xi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),da(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;xi<En.length;xi++){const e=En[xi];e&&(e.flags&=-2)}xi=-1,En.length=0,im(),gl=null,(En.length||Fr.length)&&sm()}}let jn=null,rm=null;function vl(t){const e=jn;return jn=t,rm=t&&t.type.__scopeId||null,e}function Lo(t,e=jn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&xf(-1);const r=vl(e);let o;try{o=t(...s)}finally{vl(r),i._d&&xf(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Qt(t,e){if(jn===null)return t;const n=Wl(jn),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Ot]=e[s];r&&(ut(r)&&(r={mounted:r,updated:r}),r.deep&&Yi(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Os(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Ds(),Ii(l,n,8,[t.el,a,t,e]),Ls())}}const P_=Symbol("_vte"),D_=t=>t.__isTeleport;function yd(t,e){t.shapeFlag&6&&t.component?(t.transition=e,yd(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function om(t,e){return ut(t)?_n({name:t.name},e,{setup:t}):t}function am(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function _l(t,e,n,i,s=!1){if(et(t)){t.forEach((v,g)=>_l(v,e&&(et(e)?e[g]:e),n,i,s));return}if(Ho(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&_l(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?Wl(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ot?a.refs={}:a.refs,d=a.setupState,f=Ct(d),h=d===Ot?()=>!1:v=>Rt(f,v);if(c!=null&&c!==l&&(Jt(c)?(u[c]=null,h(c)&&(d[c]=null)):ln(c)&&(c.value=null)),ut(l))da(l,a,12,[o,u]);else{const v=Jt(l),g=ln(l);if(v||g){const m=()=>{if(t.f){const p=v?h(l)?d[l]:u[l]:l.value;s?et(p)&&ud(p,r):et(p)?p.includes(r)||p.push(r):v?(u[l]=[r],h(l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else v?(u[l]=o,h(l)&&(d[l]=o)):g&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Gn(m,n)):m()}}}kl().requestIdleCallback;kl().cancelIdleCallback;const Ho=t=>!!t.type.__asyncLoader,lm=t=>t.type.__isKeepAlive;function L_(t,e){cm(t,"a",e)}function I_(t,e){cm(t,"da",e)}function cm(t,e,n=gn){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(zl(e,i,n),n){let s=n.parent;for(;s&&s.parent;)lm(s.parent.vnode)&&U_(i,e,n,s),s=s.parent}}function U_(t,e,n,i){const s=zl(e,t,i,!0);Sd(()=>{ud(i[e],s)},n)}function zl(t,e,n=gn,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Ds();const a=ha(n),l=Ii(e,n,t,o);return a(),Ls(),l});return i?s.unshift(r):s.push(r),r}}const ns=t=>(e,n=gn)=>{(!Yo||t==="sp")&&zl(t,(...i)=>e(...i),n)},O_=ns("bm"),ho=ns("m"),N_=ns("bu"),F_=ns("u"),wd=ns("bum"),Sd=ns("um"),k_=ns("sp"),B_=ns("rtg"),H_=ns("rtc");function z_(t,e=gn){zl("ec",t,e)}const V_="components";function G_(t,e){return $_(V_,t,!0,e)||t}const W_=Symbol.for("v-ndc");function $_(t,e,n=!0,i=!1){const s=jn||gn;if(s){const r=s.type;{const a=D0(r,!1);if(a&&(a===e||a===si(e)||a===Fl(si(e))))return r}const o=df(s[t]||r[t],e)||df(s.appContext[t],e);return!o&&i?r:o}}function df(t,e){return t&&(t[e]||t[si(e)]||t[Fl(si(e))])}function Mn(t,e,n,i){let s;const r=n,o=et(t);if(o||Jt(t)){const a=o&&Nr(t);let l=!1;a&&(l=!ii(t),t=Bl(t)),s=new Array(t.length);for(let c=0,u=t.length;c<u;c++)s[c]=e(l?mn(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(Ft(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,r)}}else s=[];return s}const ru=t=>t?Dm(t)?Wl(t):ru(t.parent):null,zo=_n(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ru(t.parent),$root:t=>ru(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>dm(t),$forceUpdate:t=>t.f||(t.f=()=>{xd(t.update)}),$nextTick:t=>t.n||(t.n=fa.bind(t.proxy)),$watch:t=>f0.bind(t)}),cc=(t,e)=>t!==Ot&&!t.__isScriptSetup&&Rt(t,e),X_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(cc(i,e))return o[e]=1,i[e];if(s!==Ot&&Rt(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&Rt(c,e))return o[e]=3,r[e];if(n!==Ot&&Rt(n,e))return o[e]=4,n[e];ou&&(o[e]=0)}}const u=zo[e];let d,f;if(u)return e==="$attrs"&&pn(t.attrs,"get",""),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Ot&&Rt(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,Rt(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return cc(s,e)?(s[e]=n,!0):i!==Ot&&Rt(i,e)?(i[e]=n,!0):Rt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==Ot&&Rt(t,o)||cc(e,o)||(a=r[0])&&Rt(a,o)||Rt(i,o)||Rt(zo,o)||Rt(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Rt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ff(t){return et(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ou=!0;function j_(t){const e=dm(t),n=t.proxy,i=t.ctx;ou=!1,e.beforeCreate&&hf(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:v,activated:g,deactivated:m,beforeDestroy:p,beforeUnmount:A,destroyed:C,unmounted:w,render:U,renderTracked:I,renderTriggered:D,errorCaptured:k,serverPrefetch:E,expose:T,inheritAttrs:R,components:L,directives:O,filters:V}=e;if(c&&q_(c,i,null),o)for(const te in o){const q=o[te];ut(q)&&(i[te]=q.bind(n))}if(s){const te=s.call(n,n);Ft(te)&&(t.data=ua(te))}if(ou=!0,r)for(const te in r){const q=r[te],we=ut(q)?q.bind(n,n):ut(q.get)?q.get.bind(n,n):Ri,Me=!ut(q)&&ut(q.set)?q.set.bind(n):Ri,Ne=an({get:we,set:Me});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>Ne.value,set:Ge=>Ne.value=Ge})}if(a)for(const te in a)um(a[te],i,n,te);if(l){const te=ut(l)?l.call(n):l;Reflect.ownKeys(te).forEach(q=>{il(q,te[q])})}u&&hf(u,t,"c");function Q(te,q){et(q)?q.forEach(we=>te(we.bind(n))):q&&te(q.bind(n))}if(Q(O_,d),Q(ho,f),Q(N_,h),Q(F_,v),Q(L_,g),Q(I_,m),Q(z_,k),Q(H_,I),Q(B_,D),Q(wd,A),Q(Sd,w),Q(k_,E),et(T))if(T.length){const te=t.exposed||(t.exposed={});T.forEach(q=>{Object.defineProperty(te,q,{get:()=>n[q],set:we=>n[q]=we})})}else t.exposed||(t.exposed={});U&&t.render===Ri&&(t.render=U),R!=null&&(t.inheritAttrs=R),L&&(t.components=L),O&&(t.directives=O),E&&am(t)}function q_(t,e,n=Ri){et(t)&&(t=au(t));for(const i in t){const s=t[i];let r;Ft(s)?"default"in s?r=Qi(s.from||i,s.default,!0):r=Qi(s.from||i):r=Qi(s),ln(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function hf(t,e,n){Ii(et(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function um(t,e,n,i){let s=i.includes(".")?Em(n,i):()=>n[i];if(Jt(t)){const r=e[t];ut(r)&&qn(s,r)}else if(ut(t))qn(s,t.bind(n));else if(Ft(t))if(et(t))t.forEach(r=>um(r,e,n,i));else{const r=ut(t.handler)?t.handler.bind(n):e[t.handler];ut(r)&&qn(s,r,t)}}function dm(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>bl(l,c,o,!0)),bl(l,e,o)),Ft(e)&&r.set(e,l),l}function bl(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&bl(t,r,n,!0),s&&s.forEach(o=>bl(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Y_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Y_={data:pf,props:mf,emits:mf,methods:Io,computed:Io,beforeCreate:yn,created:yn,beforeMount:yn,mounted:yn,beforeUpdate:yn,updated:yn,beforeDestroy:yn,beforeUnmount:yn,destroyed:yn,unmounted:yn,activated:yn,deactivated:yn,errorCaptured:yn,serverPrefetch:yn,components:Io,directives:Io,watch:Z_,provide:pf,inject:K_};function pf(t,e){return e?t?function(){return _n(ut(t)?t.call(this,this):t,ut(e)?e.call(this,this):e)}:e:t}function K_(t,e){return Io(au(t),au(e))}function au(t){if(et(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function yn(t,e){return t?[...new Set([].concat(t,e))]:e}function Io(t,e){return t?_n(Object.create(null),t,e):e}function mf(t,e){return t?et(t)&&et(e)?[...new Set([...t,...e])]:_n(Object.create(null),ff(t),ff(e??{})):e}function Z_(t,e){if(!t)return e;if(!e)return t;const n=_n(Object.create(null),t);for(const i in e)n[i]=yn(t[i],e[i]);return n}function fm(){return{app:null,config:{isNativeTag:Vv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Q_=0;function J_(t,e){return function(i,s=null){ut(i)||(i=_n({},i)),s!=null&&!Ft(s)&&(s=null);const r=fm(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Q_++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:I0,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&ut(u.install)?(o.add(u),u.install(c,...d)):ut(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||nn(i,s);return h.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),t(h,u,f),l=!0,c._container=u,u.__vue_app__=c,Wl(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Ii(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=kr;kr=c;try{return u()}finally{kr=d}}};return c}}let kr=null;function il(t,e){if(gn){let n=gn.provides;const i=gn.parent&&gn.parent.provides;i===n&&(n=gn.provides=Object.create(i)),n[t]=e}}function Qi(t,e,n=!1){const i=gn||jn;if(i||kr){const s=kr?kr._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ut(e)?e.call(i&&i.proxy):e}}const hm={},pm=()=>Object.create(hm),mm=t=>Object.getPrototypeOf(t)===hm;function e0(t,e,n,i=!1){const s={},r=pm();t.propsDefaults=Object.create(null),gm(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Kp(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function t0(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=Ct(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Vl(t.emitsOptions,f))continue;const h=e[f];if(l)if(Rt(r,f))h!==r[f]&&(r[f]=h,c=!0);else{const v=si(f);s[v]=lu(l,a,v,h,t,!1)}else h!==r[f]&&(r[f]=h,c=!0)}}}else{gm(t,e,s,r)&&(c=!0);let u;for(const d in a)(!e||!Rt(e,d)&&((u=cr(d))===d||!Rt(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=lu(l,a,d,void 0,t,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!Rt(e,d))&&(delete r[d],c=!0)}c&&qi(t.attrs,"set","")}function gm(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Fo(l))continue;const c=e[l];let u;s&&Rt(s,u=si(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Vl(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Ct(n),c=a||Ot;for(let u=0;u<r.length;u++){const d=r[u];n[d]=lu(s,l,d,c[d],t,!Rt(c,d))}}return o}function lu(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=Rt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ut(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=ha(s);i=c[n]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===cr(n))&&(i=!0))}return i}const n0=new WeakMap;function vm(t,e,n=!1){const i=n?n0:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!ut(t)){const u=d=>{l=!0;const[f,h]=vm(d,e,!0);_n(o,f),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Ft(t)&&i.set(t,Ur),Ur;if(et(r))for(let u=0;u<r.length;u++){const d=si(r[u]);gf(d)&&(o[d]=Ot)}else if(r)for(const u in r){const d=si(u);if(gf(d)){const f=r[u],h=o[d]=et(f)||ut(f)?{type:f}:_n({},f),v=h.type;let g=!1,m=!0;if(et(v))for(let p=0;p<v.length;++p){const A=v[p],C=ut(A)&&A.name;if(C==="Boolean"){g=!0;break}else C==="String"&&(m=!1)}else g=ut(v)&&v.name==="Boolean";h[0]=g,h[1]=m,(g||Rt(h,"default"))&&a.push(d)}}const c=[o,a];return Ft(t)&&i.set(t,c),c}function gf(t){return t[0]!=="$"&&!Fo(t)}const _m=t=>t[0]==="_"||t==="$stable",Md=t=>et(t)?t.map(Ei):[Ei(t)],i0=(t,e,n)=>{if(e._n)return e;const i=Lo((...s)=>Md(e(...s)),n);return i._c=!1,i},bm=(t,e,n)=>{const i=t._ctx;for(const s in t){if(_m(s))continue;const r=t[s];if(ut(r))e[s]=i0(s,r,i);else if(r!=null){const o=Md(r);e[s]=()=>o}}},xm=(t,e)=>{const n=Md(e);t.slots.default=()=>n},ym=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},s0=(t,e,n)=>{const i=t.slots=pm();if(t.vnode.shapeFlag&32){const s=e._;s?(ym(i,e,n),n&&Dp(i,"_",s,!0)):bm(e,i)}else e&&xm(t,e)},r0=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Ot;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:ym(s,e,n):(r=!e.$stable,bm(e,s)),o=e}else e&&(xm(t,e),o={default:1});if(r)for(const a in s)!_m(a)&&o[a]==null&&delete s[a]},Gn=b0;function o0(t){return a0(t)}function a0(t,e){const n=kl();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=Ri,insertStaticContent:v}=t,g=(P,_,z,j=null,ie=null,X=null,ge=void 0,J=null,ce=!!_.dynamicChildren)=>{if(P===_)return;P&&!yo(P,_)&&(j=B(P),Ge(P,ie,X,!0),P=null),_.patchFlag===-2&&(ce=!1,_.dynamicChildren=null);const{type:de,ref:Pe,shapeFlag:S}=_;switch(de){case Gl:m(P,_,z,j);break;case sr:p(P,_,z,j);break;case sl:P==null&&A(_,z,j,ge);break;case Ht:L(P,_,z,j,ie,X,ge,J,ce);break;default:S&1?U(P,_,z,j,ie,X,ge,J,ce):S&6?O(P,_,z,j,ie,X,ge,J,ce):(S&64||S&128)&&de.process(P,_,z,j,ie,X,ge,J,ce,me)}Pe!=null&&ie&&_l(Pe,P&&P.ref,X,_||P,!_)},m=(P,_,z,j)=>{if(P==null)i(_.el=a(_.children),z,j);else{const ie=_.el=P.el;_.children!==P.children&&c(ie,_.children)}},p=(P,_,z,j)=>{P==null?i(_.el=l(_.children||""),z,j):_.el=P.el},A=(P,_,z,j)=>{[P.el,P.anchor]=v(P.children,_,z,j,P.el,P.anchor)},C=({el:P,anchor:_},z,j)=>{let ie;for(;P&&P!==_;)ie=f(P),i(P,z,j),P=ie;i(_,z,j)},w=({el:P,anchor:_})=>{let z;for(;P&&P!==_;)z=f(P),s(P),P=z;s(_)},U=(P,_,z,j,ie,X,ge,J,ce)=>{_.type==="svg"?ge="svg":_.type==="math"&&(ge="mathml"),P==null?I(_,z,j,ie,X,ge,J,ce):E(P,_,ie,X,ge,J,ce)},I=(P,_,z,j,ie,X,ge,J)=>{let ce,de;const{props:Pe,shapeFlag:S,transition:x,dirs:F}=P;if(ce=P.el=o(P.type,X,Pe&&Pe.is,Pe),S&8?u(ce,P.children):S&16&&k(P.children,ce,null,j,ie,uc(P,X),ge,J),F&&Os(P,null,j,"created"),D(ce,P,P.scopeId,ge,j),Pe){for(const le in Pe)le!=="value"&&!Fo(le)&&r(ce,le,null,Pe[le],X,j);"value"in Pe&&r(ce,"value",null,Pe.value,X),(de=Pe.onVnodeBeforeMount)&&_i(de,j,P)}F&&Os(P,null,j,"beforeMount");const Y=l0(ie,x);Y&&x.beforeEnter(ce),i(ce,_,z),((de=Pe&&Pe.onVnodeMounted)||Y||F)&&Gn(()=>{de&&_i(de,j,P),Y&&x.enter(ce),F&&Os(P,null,j,"mounted")},ie)},D=(P,_,z,j,ie)=>{if(z&&h(P,z),j)for(let X=0;X<j.length;X++)h(P,j[X]);if(ie){let X=ie.subTree;if(_===X||Am(X.type)&&(X.ssContent===_||X.ssFallback===_)){const ge=ie.vnode;D(P,ge,ge.scopeId,ge.slotScopeIds,ie.parent)}}},k=(P,_,z,j,ie,X,ge,J,ce=0)=>{for(let de=ce;de<P.length;de++){const Pe=P[de]=J?hs(P[de]):Ei(P[de]);g(null,Pe,_,z,j,ie,X,ge,J)}},E=(P,_,z,j,ie,X,ge)=>{const J=_.el=P.el;let{patchFlag:ce,dynamicChildren:de,dirs:Pe}=_;ce|=P.patchFlag&16;const S=P.props||Ot,x=_.props||Ot;let F;if(z&&Ns(z,!1),(F=x.onVnodeBeforeUpdate)&&_i(F,z,_,P),Pe&&Os(_,P,z,"beforeUpdate"),z&&Ns(z,!0),(S.innerHTML&&x.innerHTML==null||S.textContent&&x.textContent==null)&&u(J,""),de?T(P.dynamicChildren,de,J,z,j,uc(_,ie),X):ge||q(P,_,J,null,z,j,uc(_,ie),X,!1),ce>0){if(ce&16)R(J,S,x,z,ie);else if(ce&2&&S.class!==x.class&&r(J,"class",null,x.class,ie),ce&4&&r(J,"style",S.style,x.style,ie),ce&8){const Y=_.dynamicProps;for(let le=0;le<Y.length;le++){const K=Y[le],Le=S[K],ve=x[K];(ve!==Le||K==="value")&&r(J,K,Le,ve,ie,z)}}ce&1&&P.children!==_.children&&u(J,_.children)}else!ge&&de==null&&R(J,S,x,z,ie);((F=x.onVnodeUpdated)||Pe)&&Gn(()=>{F&&_i(F,z,_,P),Pe&&Os(_,P,z,"updated")},j)},T=(P,_,z,j,ie,X,ge)=>{for(let J=0;J<_.length;J++){const ce=P[J],de=_[J],Pe=ce.el&&(ce.type===Ht||!yo(ce,de)||ce.shapeFlag&70)?d(ce.el):z;g(ce,de,Pe,null,j,ie,X,ge,!0)}},R=(P,_,z,j,ie)=>{if(_!==z){if(_!==Ot)for(const X in _)!Fo(X)&&!(X in z)&&r(P,X,_[X],null,ie,j);for(const X in z){if(Fo(X))continue;const ge=z[X],J=_[X];ge!==J&&X!=="value"&&r(P,X,J,ge,ie,j)}"value"in z&&r(P,"value",_.value,z.value,ie)}},L=(P,_,z,j,ie,X,ge,J,ce)=>{const de=_.el=P?P.el:a(""),Pe=_.anchor=P?P.anchor:a("");let{patchFlag:S,dynamicChildren:x,slotScopeIds:F}=_;F&&(J=J?J.concat(F):F),P==null?(i(de,z,j),i(Pe,z,j),k(_.children||[],z,Pe,ie,X,ge,J,ce)):S>0&&S&64&&x&&P.dynamicChildren?(T(P.dynamicChildren,x,z,ie,X,ge,J),(_.key!=null||ie&&_===ie.subTree)&&wm(P,_,!0)):q(P,_,z,Pe,ie,X,ge,J,ce)},O=(P,_,z,j,ie,X,ge,J,ce)=>{_.slotScopeIds=J,P==null?_.shapeFlag&512?ie.ctx.activate(_,z,j,ge,ce):V(_,z,j,ie,X,ge,ce):ae(P,_,ce)},V=(P,_,z,j,ie,X,ge)=>{const J=P.component=T0(P,j,ie);if(lm(P)&&(J.ctx.renderer=me),A0(J,!1,ge),J.asyncDep){if(ie&&ie.registerDep(J,Q,ge),!P.el){const ce=J.subTree=nn(sr);p(null,ce,_,z)}}else Q(J,P,_,z,ie,X,ge)},ae=(P,_,z)=>{const j=_.component=P.component;if(v0(P,_,z))if(j.asyncDep&&!j.asyncResolved){te(j,_,z);return}else j.next=_,j.update();else _.el=P.el,j.vnode=_},Q=(P,_,z,j,ie,X,ge)=>{const J=()=>{if(P.isMounted){let{next:S,bu:x,u:F,parent:Y,vnode:le}=P;{const Ie=Sm(P);if(Ie){S&&(S.el=le.el,te(P,S,ge)),Ie.asyncDep.then(()=>{P.isUnmounted||J()});return}}let K=S,Le;Ns(P,!1),S?(S.el=le.el,te(P,S,ge)):S=le,x&&nl(x),(Le=S.props&&S.props.onVnodeBeforeUpdate)&&_i(Le,Y,S,le),Ns(P,!0);const ve=_f(P),De=P.subTree;P.subTree=ve,g(De,ve,d(De.el),B(De),P,ie,X),S.el=ve.el,K===null&&_0(P,ve.el),F&&Gn(F,ie),(Le=S.props&&S.props.onVnodeUpdated)&&Gn(()=>_i(Le,Y,S,le),ie)}else{let S;const{el:x,props:F}=_,{bm:Y,m:le,parent:K,root:Le,type:ve}=P,De=Ho(_);Ns(P,!1),Y&&nl(Y),!De&&(S=F&&F.onVnodeBeforeMount)&&_i(S,K,_),Ns(P,!0);{Le.ce&&Le.ce._injectChildStyle(ve);const Ie=P.subTree=_f(P);g(null,Ie,z,j,P,ie,X),_.el=Ie.el}if(le&&Gn(le,ie),!De&&(S=F&&F.onVnodeMounted)){const Ie=_;Gn(()=>_i(S,K,Ie),ie)}(_.shapeFlag&256||K&&Ho(K.vnode)&&K.vnode.shapeFlag&256)&&P.a&&Gn(P.a,ie),P.isMounted=!0,_=z=j=null}};P.scope.on();const ce=P.effect=new Np(J);P.scope.off();const de=P.update=ce.run.bind(ce),Pe=P.job=ce.runIfDirty.bind(ce);Pe.i=P,Pe.id=P.uid,ce.scheduler=()=>xd(Pe),Ns(P,!0),de()},te=(P,_,z)=>{_.component=P;const j=P.vnode.props;P.vnode=_,P.next=null,t0(P,_.props,j,z),r0(P,_.children,z),Ds(),uf(P),Ls()},q=(P,_,z,j,ie,X,ge,J,ce=!1)=>{const de=P&&P.children,Pe=P?P.shapeFlag:0,S=_.children,{patchFlag:x,shapeFlag:F}=_;if(x>0){if(x&128){Me(de,S,z,j,ie,X,ge,J,ce);return}else if(x&256){we(de,S,z,j,ie,X,ge,J,ce);return}}F&8?(Pe&16&&xe(de,ie,X),S!==de&&u(z,S)):Pe&16?F&16?Me(de,S,z,j,ie,X,ge,J,ce):xe(de,ie,X,!0):(Pe&8&&u(z,""),F&16&&k(S,z,j,ie,X,ge,J,ce))},we=(P,_,z,j,ie,X,ge,J,ce)=>{P=P||Ur,_=_||Ur;const de=P.length,Pe=_.length,S=Math.min(de,Pe);let x;for(x=0;x<S;x++){const F=_[x]=ce?hs(_[x]):Ei(_[x]);g(P[x],F,z,null,ie,X,ge,J,ce)}de>Pe?xe(P,ie,X,!0,!1,S):k(_,z,j,ie,X,ge,J,ce,S)},Me=(P,_,z,j,ie,X,ge,J,ce)=>{let de=0;const Pe=_.length;let S=P.length-1,x=Pe-1;for(;de<=S&&de<=x;){const F=P[de],Y=_[de]=ce?hs(_[de]):Ei(_[de]);if(yo(F,Y))g(F,Y,z,null,ie,X,ge,J,ce);else break;de++}for(;de<=S&&de<=x;){const F=P[S],Y=_[x]=ce?hs(_[x]):Ei(_[x]);if(yo(F,Y))g(F,Y,z,null,ie,X,ge,J,ce);else break;S--,x--}if(de>S){if(de<=x){const F=x+1,Y=F<Pe?_[F].el:j;for(;de<=x;)g(null,_[de]=ce?hs(_[de]):Ei(_[de]),z,Y,ie,X,ge,J,ce),de++}}else if(de>x)for(;de<=S;)Ge(P[de],ie,X,!0),de++;else{const F=de,Y=de,le=new Map;for(de=Y;de<=x;de++){const Be=_[de]=ce?hs(_[de]):Ei(_[de]);Be.key!=null&&le.set(Be.key,de)}let K,Le=0;const ve=x-Y+1;let De=!1,Ie=0;const _e=new Array(ve);for(de=0;de<ve;de++)_e[de]=0;for(de=F;de<=S;de++){const Be=P[de];if(Le>=ve){Ge(Be,ie,X,!0);continue}let Ue;if(Be.key!=null)Ue=le.get(Be.key);else for(K=Y;K<=x;K++)if(_e[K-Y]===0&&yo(Be,_[K])){Ue=K;break}Ue===void 0?Ge(Be,ie,X,!0):(_e[Ue-Y]=de+1,Ue>=Ie?Ie=Ue:De=!0,g(Be,_[Ue],z,null,ie,X,ge,J,ce),Le++)}const Ce=De?c0(_e):Ur;for(K=Ce.length-1,de=ve-1;de>=0;de--){const Be=Y+de,Ue=_[Be],Te=Be+1<Pe?_[Be+1].el:j;_e[de]===0?g(null,Ue,z,Te,ie,X,ge,J,ce):De&&(K<0||de!==Ce[K]?Ne(Ue,z,Te,2):K--)}}},Ne=(P,_,z,j,ie=null)=>{const{el:X,type:ge,transition:J,children:ce,shapeFlag:de}=P;if(de&6){Ne(P.component.subTree,_,z,j);return}if(de&128){P.suspense.move(_,z,j);return}if(de&64){ge.move(P,_,z,me);return}if(ge===Ht){i(X,_,z);for(let S=0;S<ce.length;S++)Ne(ce[S],_,z,j);i(P.anchor,_,z);return}if(ge===sl){C(P,_,z);return}if(j!==2&&de&1&&J)if(j===0)J.beforeEnter(X),i(X,_,z),Gn(()=>J.enter(X),ie);else{const{leave:S,delayLeave:x,afterLeave:F}=J,Y=()=>i(X,_,z),le=()=>{S(X,()=>{Y(),F&&F()})};x?x(X,Y,le):le()}else i(X,_,z)},Ge=(P,_,z,j=!1,ie=!1)=>{const{type:X,props:ge,ref:J,children:ce,dynamicChildren:de,shapeFlag:Pe,patchFlag:S,dirs:x,cacheIndex:F}=P;if(S===-2&&(ie=!1),J!=null&&_l(J,null,z,P,!0),F!=null&&(_.renderCache[F]=void 0),Pe&256){_.ctx.deactivate(P);return}const Y=Pe&1&&x,le=!Ho(P);let K;if(le&&(K=ge&&ge.onVnodeBeforeUnmount)&&_i(K,_,P),Pe&6)ne(P.component,z,j);else{if(Pe&128){P.suspense.unmount(z,j);return}Y&&Os(P,null,_,"beforeUnmount"),Pe&64?P.type.remove(P,_,z,me,j):de&&!de.hasOnce&&(X!==Ht||S>0&&S&64)?xe(de,_,z,!1,!0):(X===Ht&&S&384||!ie&&Pe&16)&&xe(ce,_,z),j&&bt(P)}(le&&(K=ge&&ge.onVnodeUnmounted)||Y)&&Gn(()=>{K&&_i(K,_,P),Y&&Os(P,null,_,"unmounted")},z)},bt=P=>{const{type:_,el:z,anchor:j,transition:ie}=P;if(_===Ht){Ke(z,j);return}if(_===sl){w(P);return}const X=()=>{s(z),ie&&!ie.persisted&&ie.afterLeave&&ie.afterLeave()};if(P.shapeFlag&1&&ie&&!ie.persisted){const{leave:ge,delayLeave:J}=ie,ce=()=>ge(z,X);J?J(P.el,X,ce):ce()}else X()},Ke=(P,_)=>{let z;for(;P!==_;)z=f(P),s(P),P=z;s(_)},ne=(P,_,z)=>{const{bum:j,scope:ie,job:X,subTree:ge,um:J,m:ce,a:de}=P;vf(ce),vf(de),j&&nl(j),ie.stop(),X&&(X.flags|=8,Ge(ge,P,_,z)),J&&Gn(J,_),Gn(()=>{P.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&P.asyncDep&&!P.asyncResolved&&P.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},xe=(P,_,z,j=!1,ie=!1,X=0)=>{for(let ge=X;ge<P.length;ge++)Ge(P[ge],_,z,j,ie)},B=P=>{if(P.shapeFlag&6)return B(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const _=f(P.anchor||P.el),z=_&&_[P_];return z?f(z):_};let ue=!1;const re=(P,_,z)=>{P==null?_._vnode&&Ge(_._vnode,null,null,!0):g(_._vnode||null,P,_,null,null,null,z),_._vnode=P,ue||(ue=!0,uf(),im(),ue=!1)},me={p:g,um:Ge,m:Ne,r:bt,mt:V,mc:k,pc:q,pbc:T,n:B,o:t};return{render:re,hydrate:void 0,createApp:J_(re)}}function uc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ns({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function l0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function wm(t,e,n=!1){const i=t.children,s=e.children;if(et(i)&&et(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=hs(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&wm(o,a)),a.type===Gl&&(a.el=o.el)}}function c0(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Sm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Sm(e)}function vf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const u0=Symbol.for("v-scx"),d0=()=>Qi(u0);function qn(t,e,n){return Mm(t,e,n)}function Mm(t,e,n=Ot){const{immediate:i,deep:s,flush:r,once:o}=n,a=_n({},n),l=e&&i||!e&&r!=="post";let c;if(Yo){if(r==="sync"){const h=d0();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Ri,h.resume=Ri,h.pause=Ri,h}}const u=gn;a.call=(h,v,g)=>Ii(h,u,v,g);let d=!1;r==="post"?a.scheduler=h=>{Gn(h,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(h,v)=>{v?h():xd(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=T_(t,e,a);return Yo&&(c?c.push(f):l&&f()),f}function f0(t,e,n){const i=this.proxy,s=Jt(t)?t.includes(".")?Em(i,t):()=>i[t]:t.bind(i,i);let r;ut(e)?r=e:(r=e.handler,n=e);const o=ha(this),a=Mm(s,r.bind(i),n);return o(),a}function Em(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const h0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${si(e)}Modifiers`]||t[`${cr(e)}Modifiers`];function p0(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Ot;let s=n;const r=e.startsWith("update:"),o=r&&h0(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>Jt(u)?u.trim():u)),o.number&&(s=n.map(pl)));let a,l=i[a=sc(e)]||i[a=sc(si(e))];!l&&r&&(l=i[a=sc(cr(e))]),l&&Ii(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ii(c,t,6,s)}}function Tm(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!ut(t)){const l=c=>{const u=Tm(c,e,!0);u&&(a=!0,_n(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Ft(t)&&i.set(t,null),null):(et(r)?r.forEach(l=>o[l]=null):_n(o,r),Ft(t)&&i.set(t,o),o)}function Vl(t,e){return!t||!Ol(e)?!1:(e=e.slice(2).replace(/Once$/,""),Rt(t,e[0].toLowerCase()+e.slice(1))||Rt(t,cr(e))||Rt(t,e))}function _f(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:v,inheritAttrs:g}=t,m=vl(t);let p,A;try{if(n.shapeFlag&4){const w=s||i,U=w;p=Ei(c.call(U,w,u,d,h,f,v)),A=a}else{const w=e;p=Ei(w.length>1?w(d,{attrs:a,slots:o,emit:l}):w(d,null)),A=e.props?a:m0(a)}}catch(w){Vo.length=0,Hl(w,t,1),p=nn(sr)}let C=p;if(A&&g!==!1){const w=Object.keys(A),{shapeFlag:U}=C;w.length&&U&7&&(r&&w.some(cd)&&(A=g0(A,r)),C=eo(C,A,!1,!0))}return n.dirs&&(C=eo(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&yd(C,n.transition),p=C,vl(m),p}const m0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ol(n))&&((e||(e={}))[n]=t[n]);return e},g0=(t,e)=>{const n={};for(const i in t)(!cd(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function v0(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?bf(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==i[f]&&!Vl(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?bf(i,o,c):!0:!!o;return!1}function bf(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Vl(n,r))return!0}return!1}function _0({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Am=t=>t.__isSuspense;function b0(t,e){e&&e.pendingBranch?et(t)?e.effects.push(...t):e.effects.push(t):R_(t)}const Ht=Symbol.for("v-fgt"),Gl=Symbol.for("v-txt"),sr=Symbol.for("v-cmt"),sl=Symbol.for("v-stc"),Vo=[];let Yn=null;function ze(t=!1){Vo.push(Yn=t?null:[])}function x0(){Vo.pop(),Yn=Vo[Vo.length-1]||null}let qo=1;function xf(t,e=!1){qo+=t,t<0&&Yn&&e&&(Yn.hasOnce=!0)}function Cm(t){return t.dynamicChildren=qo>0?Yn||Ur:null,x0(),qo>0&&Yn&&Yn.push(t),t}function $e(t,e,n,i,s,r){return Cm(b(t,e,n,i,s,r,!0))}function Uo(t,e,n,i,s){return Cm(nn(t,e,n,i,s,!0))}function xl(t){return t?t.__v_isVNode===!0:!1}function yo(t,e){return t.type===e.type&&t.key===e.key}const Rm=({key:t})=>t??null,rl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Jt(t)||ln(t)||ut(t)?{i:jn,r:t,k:e,f:!!n}:t:null);function b(t,e=null,n=null,i=0,s=null,r=t===Ht?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Rm(e),ref:e&&rl(e),scopeId:rm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:jn};return a?(Ed(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Jt(n)?8:16),qo>0&&!o&&Yn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Yn.push(l),l}const nn=y0;function y0(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===W_)&&(t=sr),xl(t)){const a=eo(t,e,!0);return n&&Ed(a,n),qo>0&&!r&&Yn&&(a.shapeFlag&6?Yn[Yn.indexOf(t)]=a:Yn.push(a)),a.patchFlag=-2,a}if(L0(t)&&(t=t.__vccOpts),e){e=w0(e);let{class:a,style:l}=e;a&&!Jt(a)&&(e.class=Je(a)),Ft(l)&&(bd(l)&&!et(l)&&(l=_n({},l)),e.style=Xn(l))}const o=Jt(t)?1:Am(t)?128:D_(t)?64:Ft(t)?4:ut(t)?2:0;return b(t,e,n,i,s,o,r,!0)}function w0(t){return t?bd(t)||mm(t)?_n({},t):t:null}function eo(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?S0(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Rm(c),ref:e&&e.ref?n&&r?et(r)?r.concat(rl(e)):[r,rl(e)]:rl(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ht?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&eo(t.ssContent),ssFallback:t.ssFallback&&eo(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&yd(u,l.clone(u)),u}function Oo(t=" ",e=0){return nn(Gl,null,t,e)}function Pm(t,e){const n=nn(sl,null,t);return n.staticCount=e,n}function Dt(t="",e=!1){return e?(ze(),Uo(sr,null,t)):nn(sr,null,t)}function Ei(t){return t==null||typeof t=="boolean"?nn(sr):et(t)?nn(Ht,null,t.slice()):xl(t)?hs(t):nn(Gl,null,String(t))}function hs(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:eo(t)}function Ed(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(et(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Ed(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!mm(e)?e._ctx=jn:s===3&&jn&&(jn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ut(e)?(e={default:e,_ctx:jn},n=32):(e=String(e),i&64?(n=16,e=[Oo(e)]):n=8);t.children=e,t.shapeFlag|=n}function S0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Je([e.class,i.class]));else if(s==="style")e.style=Xn([e.style,i.style]);else if(Ol(s)){const r=e[s],o=i[s];o&&r!==o&&!(et(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function _i(t,e,n,i=null){Ii(t,e,7,[n,i])}const M0=fm();let E0=0;function T0(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||M0,r={uid:E0++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Op(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vm(i,s),emitsOptions:Tm(i,s),emit:null,emitted:null,propsDefaults:Ot,inheritAttrs:i.inheritAttrs,ctx:Ot,data:Ot,props:Ot,attrs:Ot,slots:Ot,refs:Ot,setupState:Ot,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=p0.bind(null,r),t.ce&&t.ce(r),r}let gn=null,yl,cu;{const t=kl(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};yl=e("__VUE_INSTANCE_SETTERS__",n=>gn=n),cu=e("__VUE_SSR_SETTERS__",n=>Yo=n)}const ha=t=>{const e=gn;return yl(t),t.scope.on(),()=>{t.scope.off(),yl(e)}},yf=()=>{gn&&gn.scope.off(),yl(null)};function Dm(t){return t.vnode.shapeFlag&4}let Yo=!1;function A0(t,e=!1,n=!1){e&&cu(e);const{props:i,children:s}=t.vnode,r=Dm(t);e0(t,i,r,e),s0(t,s,n);const o=r?C0(t,e):void 0;return e&&cu(!1),o}function C0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,X_);const{setup:i}=n;if(i){Ds();const s=t.setupContext=i.length>1?P0(t):null,r=ha(t),o=da(i,t,0,[t.props,s]),a=Cp(o);if(Ls(),r(),(a||t.sp)&&!Ho(t)&&am(t),a){if(o.then(yf,yf),e)return o.then(l=>{wf(t,l)}).catch(l=>{Hl(l,t,0)});t.asyncDep=o}else wf(t,o)}else Lm(t)}function wf(t,e,n){ut(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ft(e)&&(t.setupState=em(e)),Lm(t)}function Lm(t,e,n){const i=t.type;t.render||(t.render=i.render||Ri);{const s=ha(t);Ds();try{j_(t)}finally{Ls(),s()}}}const R0={get(t,e){return pn(t,"get",""),t[e]}};function P0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,R0),slots:t.slots,emit:t.emit,expose:e}}function Wl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(em(Qp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in zo)return zo[n](t)},has(e,n){return n in e||n in zo}})):t.proxy}function D0(t,e=!0){return ut(t)?t.displayName||t.name:t.name||e&&t.__name}function L0(t){return ut(t)&&"__vccOpts"in t}const an=(t,e)=>M_(t,e,Yo);function Im(t,e,n){const i=arguments.length;return i===2?Ft(e)&&!et(e)?xl(e)?nn(t,null,[e]):nn(t,e):nn(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&xl(n)&&(n=[n]),nn(t,e,n))}const I0="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let uu;const Sf=typeof window<"u"&&window.trustedTypes;if(Sf)try{uu=Sf.createPolicy("vue",{createHTML:t=>t})}catch{}const Um=uu?t=>uu.createHTML(t):t=>t,U0="http://www.w3.org/2000/svg",O0="http://www.w3.org/1998/Math/MathML",Xi=typeof document<"u"?document:null,Mf=Xi&&Xi.createElement("template"),N0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Xi.createElementNS(U0,t):e==="mathml"?Xi.createElementNS(O0,t):n?Xi.createElement(t,{is:n}):Xi.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Xi.createTextNode(t),createComment:t=>Xi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Xi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Mf.innerHTML=Um(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Mf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},F0=Symbol("_vtc");function k0(t,e,n){const i=t[F0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const wl=Symbol("_vod"),Om=Symbol("_vsh"),HL={beforeMount(t,{value:e},{transition:n}){t[wl]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):wo(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),wo(t,!0),i.enter(t)):i.leave(t,()=>{wo(t,!1)}):wo(t,e))},beforeUnmount(t,{value:e}){wo(t,e)}};function wo(t,e){t.style.display=e?t[wl]:"none",t[Om]=!e}const B0=Symbol(""),H0=/(^|;)\s*display\s*:/;function z0(t,e,n){const i=t.style,s=Jt(n);let r=!1;if(n&&!s){if(e)if(Jt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ol(i,a,"")}else for(const o in e)n[o]==null&&ol(i,o,"");for(const o in n)o==="display"&&(r=!0),ol(i,o,n[o])}else if(s){if(e!==n){const o=i[B0];o&&(n+=";"+o),i.cssText=n,r=H0.test(n)}}else e&&t.removeAttribute("style");wl in t&&(t[wl]=r?i.display:"",t[Om]&&(i.display="none"))}const Ef=/\s*!important$/;function ol(t,e,n){if(et(n))n.forEach(i=>ol(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=V0(t,e);Ef.test(n)?t.setProperty(cr(i),n.replace(Ef,""),"important"):t[i]=n}}const Tf=["Webkit","Moz","ms"],dc={};function V0(t,e){const n=dc[e];if(n)return n;let i=si(e);if(i!=="filter"&&i in t)return dc[e]=i;i=Fl(i);for(let s=0;s<Tf.length;s++){const r=Tf[s]+i;if(r in t)return dc[e]=r}return e}const Af="http://www.w3.org/1999/xlink";function Cf(t,e,n,i,s,r=Qv(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Af,e.slice(6,e.length)):t.setAttributeNS(Af,e,n):n==null||r&&!Lp(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Li(n)?String(n):n)}function Rf(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Um(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Lp(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function gs(t,e,n,i){t.addEventListener(e,n,i)}function G0(t,e,n,i){t.removeEventListener(e,n,i)}const Pf=Symbol("_vei");function W0(t,e,n,i,s=null){const r=t[Pf]||(t[Pf]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=$0(e);if(i){const c=r[e]=q0(i,s);gs(t,a,c,l)}else o&&(G0(t,a,o,l),r[e]=void 0)}}const Df=/(?:Once|Passive|Capture)$/;function $0(t){let e;if(Df.test(t)){e={};let i;for(;i=t.match(Df);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):cr(t.slice(2)),e]}let fc=0;const X0=Promise.resolve(),j0=()=>fc||(X0.then(()=>fc=0),fc=Date.now());function q0(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Ii(Y0(i,n.value),e,5,[i])};return n.value=t,n.attached=j0(),n}function Y0(t,e){if(et(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Lf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,K0=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?k0(t,i,o):e==="style"?z0(t,n,i):Ol(e)?cd(e)||W0(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Z0(t,e,i,o))?(Rf(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Cf(t,e,i,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Jt(i))?Rf(t,si(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Cf(t,e,i,o))};function Z0(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Lf(e)&&ut(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Lf(e)&&Jt(n)?!1:e in t}const to=t=>{const e=t.props["onUpdate:modelValue"]||!1;return et(e)?n=>nl(e,n):e};function Q0(t){t.target.composing=!0}function If(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ji=Symbol("_assign"),tn={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[Ji]=to(s);const r=i||s.props&&s.props.type==="number";gs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=pl(a)),t[Ji](a)}),n&&gs(t,"change",()=>{t.value=t.value.trim()}),e||(gs(t,"compositionstart",Q0),gs(t,"compositionend",If),gs(t,"change",If))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[Ji]=to(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?pl(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===l)||(t.value=l))}},zL={deep:!0,created(t,e,n){t[Ji]=to(n),gs(t,"change",()=>{const i=t._modelValue,s=Ko(t),r=t.checked,o=t[Ji];if(et(i)){const a=fd(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(fo(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Nm(t,r))})},mounted:Uf,beforeUpdate(t,e,n){t[Ji]=to(n),Uf(t,e,n)}};function Uf(t,{value:e,oldValue:n},i){t._modelValue=e;let s;if(et(e))s=fd(e,i.props.value)>-1;else if(fo(e))s=e.has(i.props.value);else{if(e===n)return;s=ca(e,Nm(t,!0))}t.checked!==s&&(t.checked=s)}const J0={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=fo(e);gs(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?pl(Ko(o)):Ko(o));t[Ji](t.multiple?s?new Set(r):r:r[0]),t._assigning=!0,fa(()=>{t._assigning=!1})}),t[Ji]=to(i)},mounted(t,{value:e}){Of(t,e)},beforeUpdate(t,e,n){t[Ji]=to(n)},updated(t,{value:e}){t._assigning||Of(t,e)}};function Of(t,e){const n=t.multiple,i=et(e);if(!(n&&!i&&!fo(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],a=Ko(o);if(n)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=fd(e,a)>-1}else o.selected=e.has(a);else if(ca(Ko(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ko(t){return"_value"in t?t._value:t.value}function Nm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const eb=["ctrl","shift","alt","meta"],tb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>eb.some(n=>t[`${n}Key`]&&!e.includes(n))},So=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=tb[e[o]];if(a&&a(s,e))return}return t(s,...r)})},nb=_n({patchProp:K0},N0);let Nf;function ib(){return Nf||(Nf=o0(nb))}const sb=(...t)=>{const e=ib().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=ob(i);if(!s)return;const r=e._component;!ut(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,rb(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function rb(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ob(t){return Jt(t)?document.querySelector(t):t}/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const ab=Symbol();var Ff;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ff||(Ff={}));function lb(){const t=e_(!0),e=t.run(()=>ot({}));let n=[],i=[];const s=Qp({install(r){s._a=r,r.provide(ab,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return this._a?n.push(r):i.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Dr=typeof document<"u";function Fm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function cb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Fm(t.default)}const At=Object.assign;function hc(t,e){const n={};for(const i in e){const s=e[i];n[i]=vi(s)?s.map(t):t(s)}return n}const Go=()=>{},vi=Array.isArray,km=/#/g,ub=/&/g,db=/\//g,fb=/=/g,hb=/\?/g,Bm=/\+/g,pb=/%5B/g,mb=/%5D/g,Hm=/%5E/g,gb=/%60/g,zm=/%7B/g,vb=/%7C/g,Vm=/%7D/g,_b=/%20/g;function Td(t){return encodeURI(""+t).replace(vb,"|").replace(pb,"[").replace(mb,"]")}function bb(t){return Td(t).replace(zm,"{").replace(Vm,"}").replace(Hm,"^")}function du(t){return Td(t).replace(Bm,"%2B").replace(_b,"+").replace(km,"%23").replace(ub,"%26").replace(gb,"`").replace(zm,"{").replace(Vm,"}").replace(Hm,"^")}function xb(t){return du(t).replace(fb,"%3D")}function yb(t){return Td(t).replace(km,"%23").replace(hb,"%3F")}function wb(t){return t==null?"":yb(t).replace(db,"%2F")}function Zo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Sb=/\/$/,Mb=t=>t.replace(Sb,"");function pc(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Cb(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:Zo(o)}}function Eb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function kf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Tb(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&no(e.matched[i],n.matched[s])&&Gm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function no(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Gm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Ab(t[n],e[n]))return!1;return!0}function Ab(t,e){return vi(t)?Bf(t,e):vi(e)?Bf(e,t):t===e}function Bf(t,e){return vi(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function Cb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const ss={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Qo;(function(t){t.pop="pop",t.push="push"})(Qo||(Qo={}));var Wo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Wo||(Wo={}));function Rb(t){if(!t)if(Dr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Mb(t)}const Pb=/^[^#]+#/;function Db(t,e){return t.replace(Pb,"#")+e}function Lb(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const $l=()=>({left:window.scrollX,top:window.scrollY});function Ib(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Lb(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Hf(t,e){return(history.state?history.state.position-e:-1)+t}const fu=new Map;function Ub(t,e){fu.set(t,e)}function Ob(t){const e=fu.get(t);return fu.delete(t),e}let Nb=()=>location.protocol+"//"+location.host;function Wm(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),kf(l,"")}return kf(n,t)+i+s}function Fb(t,e,n,i){let s=[],r=[],o=null;const a=({state:f})=>{const h=Wm(t,location),v=n.value,g=e.value;let m=0;if(f){if(n.value=h,e.value=f,o&&o===v){o=null;return}m=g?f.position-g.position:0}else i(h);s.forEach(p=>{p(n.value,v,{delta:m,type:Qo.pop,direction:m?m>0?Wo.forward:Wo.back:Wo.unknown})})};function l(){o=n.value}function c(f){s.push(f);const h=()=>{const v=s.indexOf(f);v>-1&&s.splice(v,1)};return r.push(h),h}function u(){const{history:f}=window;f.state&&f.replaceState(At({},f.state,{scroll:$l()}),"")}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function zf(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?$l():null}}function kb(t){const{history:e,location:n}=window,i={value:Wm(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:Nb()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(h){console.error(h),n[u?"replace":"assign"](f)}}function o(l,c){const u=At({},e.state,zf(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=At({},s.value,e.state,{forward:l,scroll:$l()});r(u.current,u,!0);const d=At({},zf(i.value,l,null),{position:u.position+1},c);r(l,d,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Bb(t){t=Rb(t);const e=kb(t),n=Fb(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=At({location:"",base:t,go:i,createHref:Db.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Hb(t){return typeof t=="string"||t&&typeof t=="object"}function $m(t){return typeof t=="string"||typeof t=="symbol"}const Xm=Symbol("");var Vf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Vf||(Vf={}));function io(t,e){return At(new Error,{type:t,[Xm]:!0},e)}function ki(t,e){return t instanceof Error&&Xm in t&&(e==null||!!(t.type&e))}const Gf="[^/]+?",zb={sensitive:!1,strict:!1,start:!0,end:!0},Vb=/[.+*?^${}()[\]/\\]/g;function Gb(t,e){const n=At({},zb,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let d=0;d<c.length;d++){const f=c[d];let h=40+(n.sensitive?.25:0);if(f.type===0)d||(s+="/"),s+=f.value.replace(Vb,"\\$&"),h+=40;else if(f.type===1){const{value:v,repeatable:g,optional:m,regexp:p}=f;r.push({name:v,repeatable:g,optional:m});const A=p||Gf;if(A!==Gf){h+=10;try{new RegExp(`(${A})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${v}" (${A}): `+w.message)}}let C=g?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;d||(C=m&&c.length<2?`(?:/${C})`:"/"+C),m&&(C+="?"),s+=C,h+=20,m&&(h+=-8),g&&(h+=-20),A===".*"&&(h+=-50)}u.push(h)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",v=r[f-1];d[v.name]=h&&v.repeatable?h.split("/"):h}return d}function l(c){let u="",d=!1;for(const f of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===0)u+=h.value;else if(h.type===1){const{value:v,repeatable:g,optional:m}=h,p=v in c?c[v]:"";if(vi(p)&&!g)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const A=vi(p)?p.join("/"):p;if(!A)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${v}"`);u+=A}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function Wb(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function jm(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=Wb(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(Wf(i))return 1;if(Wf(s))return-1}return s.length-i.length}function Wf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const $b={type:0,value:""},Xb=/[a-zA-Z0-9_]/;function jb(t){if(!t)return[[]];if(t==="/")return[[$b]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):f();break;case 4:f(),n=i;break;case 1:l==="("?n=2:Xb.test(l)?f():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),s}function qb(t,e,n){const i=Gb(jb(t.path),n),s=At(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Yb(t,e){const n=[],i=new Map;e=qf({strict:!1,end:!0,sensitive:!1},e);function s(d){return i.get(d)}function r(d,f,h){const v=!h,g=Xf(d);g.aliasOf=h&&h.record;const m=qf(e,d),p=[g];if("alias"in d){const w=typeof d.alias=="string"?[d.alias]:d.alias;for(const U of w)p.push(Xf(At({},g,{components:h?h.record.components:g.components,path:U,aliasOf:h?h.record:g})))}let A,C;for(const w of p){const{path:U}=w;if(f&&U[0]!=="/"){const I=f.record.path,D=I[I.length-1]==="/"?"":"/";w.path=f.record.path+(U&&D+U)}if(A=qb(w,f,m),h?h.alias.push(A):(C=C||A,C!==A&&C.alias.push(A),v&&d.name&&!jf(A)&&o(d.name)),qm(A)&&l(A),g.children){const I=g.children;for(let D=0;D<I.length;D++)r(I[D],A,h&&h.children[D])}h=h||A}return C?()=>{o(C)}:Go}function o(d){if($m(d)){const f=i.get(d);f&&(i.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const f=Qb(d,n);n.splice(f,0,d),d.record.name&&!jf(d)&&i.set(d.record.name,d)}function c(d,f){let h,v={},g,m;if("name"in d&&d.name){if(h=i.get(d.name),!h)throw io(1,{location:d});m=h.record.name,v=At($f(f.params,h.keys.filter(C=>!C.optional).concat(h.parent?h.parent.keys.filter(C=>C.optional):[]).map(C=>C.name)),d.params&&$f(d.params,h.keys.map(C=>C.name))),g=h.stringify(v)}else if(d.path!=null)g=d.path,h=n.find(C=>C.re.test(g)),h&&(v=h.parse(g),m=h.record.name);else{if(h=f.name?i.get(f.name):n.find(C=>C.re.test(f.path)),!h)throw io(1,{location:d,currentLocation:f});m=h.record.name,v=At({},f.params,d.params),g=h.stringify(v)}const p=[];let A=h;for(;A;)p.unshift(A.record),A=A.parent;return{name:m,path:g,params:v,matched:p,meta:Zb(p)}}t.forEach(d=>r(d));function u(){n.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function $f(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Xf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Kb(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Kb(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function jf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Zb(t){return t.reduce((e,n)=>At(e,n.meta),{})}function qf(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function Qb(t,e){let n=0,i=e.length;for(;n!==i;){const r=n+i>>1;jm(t,e[r])<0?i=r:n=r+1}const s=Jb(t);return s&&(i=e.lastIndexOf(s,i-1)),i}function Jb(t){let e=t;for(;e=e.parent;)if(qm(e)&&jm(t,e)===0)return e}function qm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function ex(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Bm," "),o=r.indexOf("="),a=Zo(o<0?r:r.slice(0,o)),l=o<0?null:Zo(r.slice(o+1));if(a in e){let c=e[a];vi(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Yf(t){let e="";for(let n in t){const i=t[n];if(n=xb(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(vi(i)?i.map(r=>r&&du(r)):[i&&du(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function tx(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=vi(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const nx=Symbol(""),Kf=Symbol(""),Ad=Symbol(""),Ym=Symbol(""),hu=Symbol("");function Mo(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ps(t,e,n,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(io(4,{from:n,to:e})):f instanceof Error?l(f):Hb(f)?l(io(2,{from:e,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=r(()=>t.call(i&&i.instances[s],e,n,c));let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(f=>l(f))})}function mc(t,e,n,i,s=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Fm(l)){const u=(l.__vccOpts||l)[e];u&&r.push(ps(u,n,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=cb(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const h=(d.__vccOpts||d)[e];return h&&ps(h,n,i,o,a,s)()}))}}return r}function Zf(t){const e=Qi(Ad),n=Qi(Ym),i=an(()=>{const l=Ts(t.to);return e.resolve(l)}),s=an(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(no.bind(null,u));if(f>-1)return f;const h=Qf(l[c-2]);return c>1&&Qf(u)===h&&d[d.length-1].path!==h?d.findIndex(no.bind(null,l[c-2])):f}),r=an(()=>s.value>-1&&ax(n.params,i.value.params)),o=an(()=>s.value>-1&&s.value===n.matched.length-1&&Gm(n.params,i.value.params));function a(l={}){if(ox(l)){const c=e[Ts(t.replace)?"replace":"push"](Ts(t.to)).catch(Go);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:an(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function ix(t){return t.length===1?t[0]:t}const sx=om({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Zf,setup(t,{slots:e}){const n=ua(Zf(t)),{options:i}=Qi(Ad),s=an(()=>({[Jf(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Jf(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&ix(e.default(n));return t.custom?r:Im("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),rx=sx;function ox(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ax(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!vi(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Qf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Jf=(t,e,n)=>t??e??n,lx=om({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Qi(hu),s=an(()=>t.route||i.value),r=Qi(Kf,0),o=an(()=>{let c=Ts(r);const{matched:u}=s.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=an(()=>s.value.matched[o.value]);il(Kf,an(()=>o.value+1)),il(nx,a),il(hu,s);const l=ot();return qn(()=>[l.value,a.value,t.name],([c,u,d],[f,h,v])=>{u&&(u.instances[d]=c,h&&h!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!no(u,h)||!f)&&(u.enterCallbacks[d]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,d=a.value,f=d&&d.components[u];if(!f)return eh(n.default,{Component:f,route:c});const h=d.props[u],v=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=Im(f,At({},v,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return eh(n.default,{Component:m,route:c})||m}}});function eh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Km=lx;function cx(t){const e=Yb(t.routes,t),n=t.parseQuery||ex,i=t.stringifyQuery||Yf,s=t.history,r=Mo(),o=Mo(),a=Mo(),l=x_(ss);let c=ss;Dr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=hc.bind(null,B=>""+B),d=hc.bind(null,wb),f=hc.bind(null,Zo);function h(B,ue){let re,me;return $m(B)?(re=e.getRecordMatcher(B),me=ue):me=B,e.addRoute(me,re)}function v(B){const ue=e.getRecordMatcher(B);ue&&e.removeRoute(ue)}function g(){return e.getRoutes().map(B=>B.record)}function m(B){return!!e.getRecordMatcher(B)}function p(B,ue){if(ue=At({},ue||l.value),typeof B=="string"){const z=pc(n,B,ue.path),j=e.resolve({path:z.path},ue),ie=s.createHref(z.fullPath);return At(z,j,{params:f(j.params),hash:Zo(z.hash),redirectedFrom:void 0,href:ie})}let re;if(B.path!=null)re=At({},B,{path:pc(n,B.path,ue.path).path});else{const z=At({},B.params);for(const j in z)z[j]==null&&delete z[j];re=At({},B,{params:d(z)}),ue.params=d(ue.params)}const me=e.resolve(re,ue),Ze=B.hash||"";me.params=u(f(me.params));const P=Eb(i,At({},B,{hash:bb(Ze),path:me.path})),_=s.createHref(P);return At({fullPath:P,hash:Ze,query:i===Yf?tx(B.query):B.query||{}},me,{redirectedFrom:void 0,href:_})}function A(B){return typeof B=="string"?pc(n,B,l.value.path):At({},B)}function C(B,ue){if(c!==B)return io(8,{from:ue,to:B})}function w(B){return D(B)}function U(B){return w(At(A(B),{replace:!0}))}function I(B){const ue=B.matched[B.matched.length-1];if(ue&&ue.redirect){const{redirect:re}=ue;let me=typeof re=="function"?re(B):re;return typeof me=="string"&&(me=me.includes("?")||me.includes("#")?me=A(me):{path:me},me.params={}),At({query:B.query,hash:B.hash,params:me.path!=null?{}:B.params},me)}}function D(B,ue){const re=c=p(B),me=l.value,Ze=B.state,P=B.force,_=B.replace===!0,z=I(re);if(z)return D(At(A(z),{state:typeof z=="object"?At({},Ze,z.state):Ze,force:P,replace:_}),ue||re);const j=re;j.redirectedFrom=ue;let ie;return!P&&Tb(i,me,re)&&(ie=io(16,{to:j,from:me}),Ne(me,me,!0,!1)),(ie?Promise.resolve(ie):T(j,me)).catch(X=>ki(X)?ki(X,2)?X:Me(X):q(X,j,me)).then(X=>{if(X){if(ki(X,2))return D(At({replace:_},A(X.to),{state:typeof X.to=="object"?At({},Ze,X.to.state):Ze,force:P}),ue||j)}else X=L(j,me,!0,_,Ze);return R(j,me,X),X})}function k(B,ue){const re=C(B,ue);return re?Promise.reject(re):Promise.resolve()}function E(B){const ue=Ke.values().next().value;return ue&&typeof ue.runWithContext=="function"?ue.runWithContext(B):B()}function T(B,ue){let re;const[me,Ze,P]=ux(B,ue);re=mc(me.reverse(),"beforeRouteLeave",B,ue);for(const z of me)z.leaveGuards.forEach(j=>{re.push(ps(j,B,ue))});const _=k.bind(null,B,ue);return re.push(_),xe(re).then(()=>{re=[];for(const z of r.list())re.push(ps(z,B,ue));return re.push(_),xe(re)}).then(()=>{re=mc(Ze,"beforeRouteUpdate",B,ue);for(const z of Ze)z.updateGuards.forEach(j=>{re.push(ps(j,B,ue))});return re.push(_),xe(re)}).then(()=>{re=[];for(const z of P)if(z.beforeEnter)if(vi(z.beforeEnter))for(const j of z.beforeEnter)re.push(ps(j,B,ue));else re.push(ps(z.beforeEnter,B,ue));return re.push(_),xe(re)}).then(()=>(B.matched.forEach(z=>z.enterCallbacks={}),re=mc(P,"beforeRouteEnter",B,ue,E),re.push(_),xe(re))).then(()=>{re=[];for(const z of o.list())re.push(ps(z,B,ue));return re.push(_),xe(re)}).catch(z=>ki(z,8)?z:Promise.reject(z))}function R(B,ue,re){a.list().forEach(me=>E(()=>me(B,ue,re)))}function L(B,ue,re,me,Ze){const P=C(B,ue);if(P)return P;const _=ue===ss,z=Dr?history.state:{};re&&(me||_?s.replace(B.fullPath,At({scroll:_&&z&&z.scroll},Ze)):s.push(B.fullPath,Ze)),l.value=B,Ne(B,ue,re,_),Me()}let O;function V(){O||(O=s.listen((B,ue,re)=>{if(!ne.listening)return;const me=p(B),Ze=I(me);if(Ze){D(At(Ze,{replace:!0,force:!0}),me).catch(Go);return}c=me;const P=l.value;Dr&&Ub(Hf(P.fullPath,re.delta),$l()),T(me,P).catch(_=>ki(_,12)?_:ki(_,2)?(D(At(A(_.to),{force:!0}),me).then(z=>{ki(z,20)&&!re.delta&&re.type===Qo.pop&&s.go(-1,!1)}).catch(Go),Promise.reject()):(re.delta&&s.go(-re.delta,!1),q(_,me,P))).then(_=>{_=_||L(me,P,!1),_&&(re.delta&&!ki(_,8)?s.go(-re.delta,!1):re.type===Qo.pop&&ki(_,20)&&s.go(-1,!1)),R(me,P,_)}).catch(Go)}))}let ae=Mo(),Q=Mo(),te;function q(B,ue,re){Me(B);const me=Q.list();return me.length?me.forEach(Ze=>Ze(B,ue,re)):console.error(B),Promise.reject(B)}function we(){return te&&l.value!==ss?Promise.resolve():new Promise((B,ue)=>{ae.add([B,ue])})}function Me(B){return te||(te=!B,V(),ae.list().forEach(([ue,re])=>B?re(B):ue()),ae.reset()),B}function Ne(B,ue,re,me){const{scrollBehavior:Ze}=t;if(!Dr||!Ze)return Promise.resolve();const P=!re&&Ob(Hf(B.fullPath,0))||(me||!re)&&history.state&&history.state.scroll||null;return fa().then(()=>Ze(B,ue,P)).then(_=>_&&Ib(_)).catch(_=>q(_,B,ue))}const Ge=B=>s.go(B);let bt;const Ke=new Set,ne={currentRoute:l,listening:!0,addRoute:h,removeRoute:v,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:g,resolve:p,options:t,push:w,replace:U,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Q.add,isReady:we,install(B){const ue=this;B.component("RouterLink",rx),B.component("RouterView",Km),B.config.globalProperties.$router=ue,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>Ts(l)}),Dr&&!bt&&l.value===ss&&(bt=!0,w(s.location).catch(Ze=>{}));const re={};for(const Ze in ss)Object.defineProperty(re,Ze,{get:()=>l.value[Ze],enumerable:!0});B.provide(Ad,ue),B.provide(Ym,Kp(re)),B.provide(hu,l);const me=B.unmount;Ke.add(B),B.unmount=function(){Ke.delete(B),Ke.size<1&&(c=ss,O&&O(),O=null,l.value=ss,bt=!1,te=!1),me()}}};function xe(B){return B.reduce((ue,re)=>ue.then(()=>E(re)),Promise.resolve())}return ne}function ux(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>no(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>no(c,l))||s.push(l))}return[n,i,s]}const pa=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},dx={id:"app"},fx={class:"app-header"},hx={class:"header-content"},px={class:"header-actions max-md:text-[11px]"},mx={class:"main-content"},gx={__name:"App",setup(t){const e=ot(!1),n=ot(!1);function i(){n.value=!n.value}return ho(()=>{localStorage.getItem("darkMode")==="true"&&(e.value=!0,document.body.classList.add("dark-mode"))}),(s,r)=>{const o=G_("RouterLink");return ze(),$e("div",dx,[b("header",fx,[b("div",hx,[r[5]||(r[5]=b("div",{class:"logo-section max-md:hidden"},[b("h1",{class:"app-title"},"Miyuki Beads Designer")],-1)),b("div",px,[nn(o,{to:"/"},{default:Lo(()=>r[0]||(r[0]=[Oo("Flat Grid")])),_:1}),nn(o,{to:"/weaving-grid"},{default:Lo(()=>r[1]||(r[1]=[Oo("Weaving Grid")])),_:1}),nn(o,{to:"/beadwork-pattern"},{default:Lo(()=>r[2]||(r[2]=[Oo("Beadwork Pattern")])),_:1}),nn(o,{to:"/peyote-grid"},{default:Lo(()=>r[3]||(r[3]=[Oo("Peyote Grid")])),_:1})]),b("button",{class:Je(["mobile-toggle-btn md:hidden",{active:n.value}]),onClick:i},r[4]||(r[4]=[b("span",{class:"hamburger-line"},null,-1),b("span",{class:"hamburger-line"},null,-1),b("span",{class:"hamburger-line"},null,-1)]),2)])]),b("main",mx,[nn(Ts(Km),{"is-mobile-header-open":n.value},null,8,["is-mobile-header-open"])])])}}},vx=pa(gx,[["__scopeId","data-v-f02a28cd"]]),_x="modulepreload",bx=function(t){return"/miyuki-beads-designer/"+t},th={},Eo=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){let o=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=o(n.map(c=>{if(c=bx(c),c in th)return;th[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":_x,u||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((h,v)=>{f.addEventListener("load",h),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};/*!
* sweetalert2 v11.22.3
* Released under the MIT License.
*/function Zm(t,e,n){if(typeof t=="function"?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}function xx(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function nh(t,e){return t.get(Zm(t,e))}function yx(t,e,n){xx(t,e),e.set(t,n)}function wx(t,e,n){return t.set(Zm(t,e),n),n}const Sx=100,Ye={},Mx=()=>{Ye.previousActiveElement instanceof HTMLElement?(Ye.previousActiveElement.focus(),Ye.previousActiveElement=null):document.body&&document.body.focus()},Ex=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,i=window.scrollY;Ye.restoreFocusTimeout=setTimeout(()=>{Mx(),e()},Sx),window.scrollTo(n,i)}),Qm="swal2-",Tx=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],oe=Tx.reduce((t,e)=>(t[e]=Qm+e,t),{}),Ax=["success","warning","info","question","error"],Sl=Ax.reduce((t,e)=>(t[e]=Qm+e,t),{}),Jm="SweetAlert2:",Cd=t=>t.charAt(0).toUpperCase()+t.slice(1),Cn=t=>{console.warn(`${Jm} ${typeof t=="object"?t.join(" "):t}`)},ur=t=>{console.error(`${Jm} ${t}`)},ih=[],Cx=t=>{ih.includes(t)||(ih.push(t),Cn(t))},eg=(t,e=null)=>{Cx(`"${t}" is deprecated and will be removed in the next major release.${e?` Use "${e}" instead.`:""}`)},Xl=t=>typeof t=="function"?t():t,Rd=t=>t&&typeof t.toPromise=="function",ma=t=>Rd(t)?t.toPromise():Promise.resolve(t),Pd=t=>t&&Promise.resolve(t)===t,Rn=()=>document.body.querySelector(`.${oe.container}`),ga=t=>{const e=Rn();return e?e.querySelector(t):null},Zn=t=>ga(`.${t}`),Et=()=>Zn(oe.popup),po=()=>Zn(oe.icon),Rx=()=>Zn(oe["icon-content"]),tg=()=>Zn(oe.title),Dd=()=>Zn(oe["html-container"]),ng=()=>Zn(oe.image),Ld=()=>Zn(oe["progress-steps"]),jl=()=>Zn(oe["validation-message"]),Ui=()=>ga(`.${oe.actions} .${oe.confirm}`),mo=()=>ga(`.${oe.actions} .${oe.cancel}`),dr=()=>ga(`.${oe.actions} .${oe.deny}`),Px=()=>Zn(oe["input-label"]),go=()=>ga(`.${oe.loader}`),va=()=>Zn(oe.actions),ig=()=>Zn(oe.footer),ql=()=>Zn(oe["timer-progress-bar"]),Id=()=>Zn(oe.close),Dx=`
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
`,Ud=()=>{const t=Et();if(!t)return[];const e=t.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),n=Array.from(e).sort((r,o)=>{const a=parseInt(r.getAttribute("tabindex")||"0"),l=parseInt(o.getAttribute("tabindex")||"0");return a>l?1:a<l?-1:0}),i=t.querySelectorAll(Dx),s=Array.from(i).filter(r=>r.getAttribute("tabindex")!=="-1");return[...new Set(n.concat(s))].filter(r=>Nn(r))},Od=()=>es(document.body,oe.shown)&&!es(document.body,oe["toast-shown"])&&!es(document.body,oe["no-backdrop"]),Yl=()=>{const t=Et();return t?es(t,oe.toast):!1},Lx=()=>{const t=Et();return t?t.hasAttribute("data-loading"):!1},Qn=(t,e)=>{if(t.textContent="",e){const i=new DOMParser().parseFromString(e,"text/html"),s=i.querySelector("head");s&&Array.from(s.childNodes).forEach(o=>{t.appendChild(o)});const r=i.querySelector("body");r&&Array.from(r.childNodes).forEach(o=>{o instanceof HTMLVideoElement||o instanceof HTMLAudioElement?t.appendChild(o.cloneNode(!0)):t.appendChild(o)})}},es=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let i=0;i<n.length;i++)if(!t.classList.contains(n[i]))return!1;return!0},Ix=(t,e)=>{Array.from(t.classList).forEach(n=>{!Object.values(oe).includes(n)&&!Object.values(Sl).includes(n)&&!Object.values(e.showClass||{}).includes(n)&&t.classList.remove(n)})},Kn=(t,e,n)=>{if(Ix(t,e),!e.customClass)return;const i=e.customClass[n];if(i){if(typeof i!="string"&&!i.forEach){Cn(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof i}"`);return}Tt(t,i)}},Kl=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${oe.popup} > .${oe[e]}`);case"checkbox":return t.querySelector(`.${oe.popup} > .${oe.checkbox} input`);case"radio":return t.querySelector(`.${oe.popup} > .${oe.radio} input:checked`)||t.querySelector(`.${oe.popup} > .${oe.radio} input:first-child`);case"range":return t.querySelector(`.${oe.popup} > .${oe.range} input`);default:return t.querySelector(`.${oe.popup} > .${oe.input}`)}},sg=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},rg=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(i=>{Array.isArray(t)?t.forEach(s=>{n?s.classList.add(i):s.classList.remove(i)}):n?t.classList.add(i):t.classList.remove(i)}))},Tt=(t,e)=>{rg(t,e,!0)},ri=(t,e)=>{rg(t,e,!1)},Ss=(t,e)=>{const n=Array.from(t.children);for(let i=0;i<n.length;i++){const s=n[i];if(s instanceof HTMLElement&&es(s,e))return s}},nr=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style.setProperty(e,typeof n=="number"?`${n}px`:n):t.style.removeProperty(e)},cn=(t,e="flex")=>{t&&(t.style.display=e)},bn=t=>{t&&(t.style.display="none")},Nd=(t,e="block")=>{t&&new MutationObserver(()=>{_a(t,t.innerHTML,e)}).observe(t,{childList:!0,subtree:!0})},sh=(t,e,n,i)=>{const s=t.querySelector(e);s&&s.style.setProperty(n,i)},_a=(t,e,n="flex")=>{e?cn(t,n):bn(t)},Nn=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),Ux=()=>!Nn(Ui())&&!Nn(dr())&&!Nn(mo()),pu=t=>t.scrollHeight>t.clientHeight,Ox=(t,e)=>{let n=t;for(;n&&n!==e;){if(pu(n))return!0;n=n.parentElement}return!1},og=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),i=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||i>0},Fd=(t,e=!1)=>{const n=ql();n&&Nn(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},Nx=()=>{const t=ql();if(!t)return;const e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),i=e/n*100;t.style.width=`${i}%`},Fx=()=>typeof window>"u"||typeof document>"u",kx=`
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
`.replace(/(^|\n)\s*/g,""),Bx=()=>{const t=Rn();return t?(t.remove(),ri([document.documentElement,document.body],[oe["no-backdrop"],oe["toast-shown"],oe["has-column"]]),!0):!1},Fs=()=>{Ye.currentInstance.resetValidationMessage()},Hx=()=>{const t=Et(),e=Ss(t,oe.input),n=Ss(t,oe.file),i=t.querySelector(`.${oe.range} input`),s=t.querySelector(`.${oe.range} output`),r=Ss(t,oe.select),o=t.querySelector(`.${oe.checkbox} input`),a=Ss(t,oe.textarea);e.oninput=Fs,n.onchange=Fs,r.onchange=Fs,o.onchange=Fs,a.oninput=Fs,i.oninput=()=>{Fs(),s.value=i.value},i.onchange=()=>{Fs(),s.value=i.value}},zx=t=>typeof t=="string"?document.querySelector(t):t,Vx=t=>{const e=Et();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},Gx=t=>{window.getComputedStyle(t).direction==="rtl"&&Tt(Rn(),oe.rtl)},Wx=t=>{const e=Bx();if(Fx()){ur("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=oe.container,e&&Tt(n,oe["no-transition"]),Qn(n,kx),n.dataset.swal2Theme=t.theme;const i=zx(t.target);i.appendChild(n),t.topLayer&&(n.setAttribute("popover",""),n.showPopover()),Vx(t),Gx(i),Hx()},kd=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?$x(t,e):t&&Qn(e,t)},$x=(t,e)=>{t.jquery?Xx(e,t):Qn(e,t.toString())},Xx=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},jx=(t,e)=>{const n=va(),i=go();!n||!i||(!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?bn(n):cn(n),Kn(n,e,"actions"),qx(n,i,e),Qn(i,e.loaderHtml||""),Kn(i,e,"loader"))};function qx(t,e,n){const i=Ui(),s=dr(),r=mo();!i||!s||!r||(vc(i,"confirm",n),vc(s,"deny",n),vc(r,"cancel",n),Yx(i,s,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,i),t.insertBefore(s,i)):(t.insertBefore(r,e),t.insertBefore(s,e),t.insertBefore(i,e))))}function Yx(t,e,n,i){if(!i.buttonsStyling){ri([t,e,n],oe.styled);return}Tt([t,e,n],oe.styled),i.confirmButtonColor&&t.style.setProperty("--swal2-confirm-button-background-color",i.confirmButtonColor),i.denyButtonColor&&e.style.setProperty("--swal2-deny-button-background-color",i.denyButtonColor),i.cancelButtonColor&&n.style.setProperty("--swal2-cancel-button-background-color",i.cancelButtonColor),gc(t),gc(e),gc(n)}function gc(t){const e=window.getComputedStyle(t);if(e.getPropertyValue("--swal2-action-button-focus-box-shadow"))return;const n=e.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/,"rgba($1, $2, $3, 0.5)");t.style.setProperty("--swal2-action-button-focus-box-shadow",e.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/,` ${n}`))}function vc(t,e,n){const i=Cd(e);_a(t,n[`show${i}Button`],"inline-block"),Qn(t,n[`${e}ButtonText`]||""),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]||""),t.className=oe[e],Kn(t,n,`${e}Button`)}const Kx=(t,e)=>{const n=Id();n&&(Qn(n,e.closeButtonHtml||""),Kn(n,e,"closeButton"),_a(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel||""))},Zx=(t,e)=>{const n=Rn();n&&(Qx(n,e.backdrop),Jx(n,e.position),ey(n,e.grow),Kn(n,e,"container"))};function Qx(t,e){typeof e=="string"?t.style.background=e:e||Tt([document.documentElement,document.body],oe["no-backdrop"])}function Jx(t,e){e&&(e in oe?Tt(t,oe[e]):(Cn('The "position" parameter is not valid, defaulting to "center"'),Tt(t,oe.center)))}function ey(t,e){e&&Tt(t,oe[`grow-${e}`])}var kt={innerParams:new WeakMap,domCache:new WeakMap};const ty=["input","file","range","select","radio","checkbox","textarea"],ny=(t,e)=>{const n=Et();if(!n)return;const i=kt.innerParams.get(t),s=!i||e.input!==i.input;ty.forEach(r=>{const o=Ss(n,oe[r]);o&&(ry(r,e.inputAttributes),o.className=oe[r],s&&bn(o))}),e.input&&(s&&iy(e),oy(e))},iy=t=>{if(!t.input)return;if(!qt[t.input]){ur(`Unexpected type of input! Expected ${Object.keys(qt).join(" | ")}, got "${t.input}"`);return}const e=ag(t.input);if(!e)return;const n=qt[t.input](e,t);cn(e),t.inputAutoFocus&&setTimeout(()=>{sg(n)})},sy=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["id","type","value","style"].includes(n)||t.removeAttribute(n)}},ry=(t,e)=>{const n=Et();if(!n)return;const i=Kl(n,t);if(i){sy(i);for(const s in e)i.setAttribute(s,e[s])}},oy=t=>{if(!t.input)return;const e=ag(t.input);e&&Kn(e,t,"input")},Bd=(t,e)=>{!t.placeholder&&e.inputPlaceholder&&(t.placeholder=e.inputPlaceholder)},ba=(t,e,n)=>{if(n.inputLabel){const i=document.createElement("label"),s=oe["input-label"];i.setAttribute("for",t.id),i.className=s,typeof n.customClass=="object"&&Tt(i,n.customClass.inputLabel),i.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",i)}},ag=t=>{const e=Et();if(e)return Ss(e,oe[t]||oe.input)},Ml=(t,e)=>{["string","number"].includes(typeof e)?t.value=`${e}`:Pd(e)||Cn(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e}"`)},qt={};qt.text=qt.email=qt.password=qt.number=qt.tel=qt.url=qt.search=qt.date=qt["datetime-local"]=qt.time=qt.week=qt.month=(t,e)=>(Ml(t,e.inputValue),ba(t,t,e),Bd(t,e),t.type=e.input,t);qt.file=(t,e)=>(ba(t,t,e),Bd(t,e),t);qt.range=(t,e)=>{const n=t.querySelector("input"),i=t.querySelector("output");return Ml(n,e.inputValue),n.type=e.input,Ml(i,e.inputValue),ba(n,t,e),t};qt.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");Qn(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return ba(t,t,e),t};qt.radio=t=>(t.textContent="",t);qt.checkbox=(t,e)=>{const n=Kl(Et(),"checkbox");n.value="1",n.checked=!!e.inputValue;const i=t.querySelector("span");return Qn(i,e.inputPlaceholder||e.inputLabel),n};qt.textarea=(t,e)=>{Ml(t,e.inputValue),Bd(t,e),ba(t,t,e);const n=i=>parseInt(window.getComputedStyle(i).marginLeft)+parseInt(window.getComputedStyle(i).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const i=parseInt(window.getComputedStyle(Et()).width),s=()=>{if(!document.body.contains(t))return;const r=t.offsetWidth+n(t);r>i?Et().style.width=`${r}px`:nr(Et(),"width",e.width)};new MutationObserver(s).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const ay=(t,e)=>{const n=Dd();n&&(Nd(n),Kn(n,e,"htmlContainer"),e.html?(kd(e.html,n),cn(n,"block")):e.text?(n.textContent=e.text,cn(n,"block")):bn(n),ny(t,e))},ly=(t,e)=>{const n=ig();n&&(Nd(n),_a(n,e.footer,"block"),e.footer&&kd(e.footer,n),Kn(n,e,"footer"))},cy=(t,e)=>{const n=kt.innerParams.get(t),i=po();if(!i)return;if(n&&e.icon===n.icon){oh(i,e),rh(i,e);return}if(!e.icon&&!e.iconHtml){bn(i);return}if(e.icon&&Object.keys(Sl).indexOf(e.icon)===-1){ur(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),bn(i);return}cn(i),oh(i,e),rh(i,e),Tt(i,e.showClass&&e.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",lg)},rh=(t,e)=>{for(const[n,i]of Object.entries(Sl))e.icon!==n&&ri(t,i);Tt(t,e.icon&&Sl[e.icon]),fy(t,e),lg(),Kn(t,e,"icon")},lg=()=>{const t=Et();if(!t)return;const e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let i=0;i<n.length;i++)n[i].style.backgroundColor=e},uy=t=>`
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
`,oh=(t,e)=>{if(!e.icon&&!e.iconHtml)return;let n=t.innerHTML,i="";e.iconHtml?i=ah(e.iconHtml):e.icon==="success"?(i=uy(e),n=n.replace(/ style=".*?"/g,"")):e.icon==="error"?i=dy:e.icon&&(i=ah({question:"?",warning:"!",info:"i"}[e.icon])),n.trim()!==i.trim()&&Qn(t,i)},fy=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])sh(t,n,"background-color",e.iconColor);sh(t,".swal2-success-ring","border-color",e.iconColor)}},ah=t=>`<div class="${oe["icon-content"]}">${t}</div>`,hy=(t,e)=>{const n=ng();if(n){if(!e.imageUrl){bn(n);return}cn(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt||""),nr(n,"width",e.imageWidth),nr(n,"height",e.imageHeight),n.className=oe.image,Kn(n,e,"image")}};let Hd=!1,cg=0,ug=0,dg=0,fg=0;const py=t=>{t.addEventListener("mousedown",El),document.body.addEventListener("mousemove",Tl),t.addEventListener("mouseup",Al),t.addEventListener("touchstart",El),document.body.addEventListener("touchmove",Tl),t.addEventListener("touchend",Al)},my=t=>{t.removeEventListener("mousedown",El),document.body.removeEventListener("mousemove",Tl),t.removeEventListener("mouseup",Al),t.removeEventListener("touchstart",El),document.body.removeEventListener("touchmove",Tl),t.removeEventListener("touchend",Al)},El=t=>{const e=Et();if(t.target===e||po().contains(t.target)){Hd=!0;const n=hg(t);cg=n.clientX,ug=n.clientY,dg=parseInt(e.style.insetInlineStart)||0,fg=parseInt(e.style.insetBlockStart)||0,Tt(e,"swal2-dragging")}},Tl=t=>{const e=Et();if(Hd){let{clientX:n,clientY:i}=hg(t);e.style.insetInlineStart=`${dg+(n-cg)}px`,e.style.insetBlockStart=`${fg+(i-ug)}px`}},Al=()=>{const t=Et();Hd=!1,ri(t,"swal2-dragging")},hg=t=>{let e=0,n=0;return t.type.startsWith("mouse")?(e=t.clientX,n=t.clientY):t.type.startsWith("touch")&&(e=t.touches[0].clientX,n=t.touches[0].clientY),{clientX:e,clientY:n}},gy=(t,e)=>{const n=Rn(),i=Et();if(!(!n||!i)){if(e.toast){nr(n,"width",e.width),i.style.width="100%";const s=go();s&&i.insertBefore(s,po())}else nr(i,"width",e.width);nr(i,"padding",e.padding),e.color&&(i.style.color=e.color),e.background&&(i.style.background=e.background),bn(jl()),vy(i,e),e.draggable&&!e.toast?(Tt(i,oe.draggable),py(i)):(ri(i,oe.draggable),my(i))}},vy=(t,e)=>{const n=e.showClass||{};t.className=`${oe.popup} ${Nn(t)?n.popup:""}`,e.toast?(Tt([document.documentElement,document.body],oe["toast-shown"]),Tt(t,oe.toast)):Tt(t,oe.modal),Kn(t,e,"popup"),typeof e.customClass=="string"&&Tt(t,e.customClass),e.icon&&Tt(t,oe[`icon-${e.icon}`])},_y=(t,e)=>{const n=Ld();if(!n)return;const{progressSteps:i,currentProgressStep:s}=e;if(!i||i.length===0||s===void 0){bn(n);return}cn(n),n.textContent="",s>=i.length&&Cn("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),i.forEach((r,o)=>{const a=by(r);if(n.appendChild(a),o===s&&Tt(a,oe["active-progress-step"]),o!==i.length-1){const l=xy(e);n.appendChild(l)}})},by=t=>{const e=document.createElement("li");return Tt(e,oe["progress-step"]),Qn(e,t),e},xy=t=>{const e=document.createElement("li");return Tt(e,oe["progress-step-line"]),t.progressStepsDistance&&nr(e,"width",t.progressStepsDistance),e},yy=(t,e)=>{const n=tg();n&&(Nd(n),_a(n,e.title||e.titleText,"block"),e.title&&kd(e.title,n),e.titleText&&(n.innerText=e.titleText),Kn(n,e,"title"))},pg=(t,e)=>{gy(t,e),Zx(t,e),_y(t,e),cy(t,e),hy(t,e),yy(t,e),Kx(t,e),ay(t,e),jx(t,e),ly(t,e);const n=Et();typeof e.didRender=="function"&&n&&e.didRender(n),Ye.eventEmitter.emit("didRender",n)},wy=()=>Nn(Et()),mg=()=>{var t;return(t=Ui())===null||t===void 0?void 0:t.click()},Sy=()=>{var t;return(t=dr())===null||t===void 0?void 0:t.click()},My=()=>{var t;return(t=mo())===null||t===void 0?void 0:t.click()},vo=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),gg=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},Ey=(t,e,n)=>{gg(t),e.toast||(t.keydownHandler=i=>Ay(e,i,n),t.keydownTarget=e.keydownListenerCapture?window:Et(),t.keydownListenerCapture=e.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)},mu=(t,e)=>{var n;const i=Ud();if(i.length){t=t+e,t===-2&&(t=i.length-1),t===i.length?t=0:t===-1&&(t=i.length-1),i[t].focus();return}(n=Et())===null||n===void 0||n.focus()},vg=["ArrowRight","ArrowDown"],Ty=["ArrowLeft","ArrowUp"],Ay=(t,e,n)=>{t&&(e.isComposing||e.keyCode===229||(t.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?Cy(e,t):e.key==="Tab"?Ry(e):[...vg,...Ty].includes(e.key)?Py(e.key):e.key==="Escape"&&Dy(e,t,n)))},Cy=(t,e)=>{if(!Xl(e.allowEnterKey))return;const n=Kl(Et(),e.input);if(t.target&&n&&t.target instanceof HTMLElement&&t.target.outerHTML===n.outerHTML){if(["textarea","file"].includes(e.input))return;mg(),t.preventDefault()}},Ry=t=>{const e=t.target,n=Ud();let i=-1;for(let s=0;s<n.length;s++)if(e===n[s]){i=s;break}t.shiftKey?mu(i,-1):mu(i,1),t.stopPropagation(),t.preventDefault()},Py=t=>{const e=va(),n=Ui(),i=dr(),s=mo();if(!e||!n||!i||!s)return;const r=[n,i,s];if(document.activeElement instanceof HTMLElement&&!r.includes(document.activeElement))return;const o=vg.includes(t)?"nextElementSibling":"previousElementSibling";let a=document.activeElement;if(a){for(let l=0;l<e.children.length;l++){if(a=a[o],!a)return;if(a instanceof HTMLButtonElement&&Nn(a))break}a instanceof HTMLButtonElement&&a.focus()}},Dy=(t,e,n)=>{t.preventDefault(),Xl(e.allowEscapeKey)&&n(vo.esc)};var so={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const Ly=()=>{const t=Rn();Array.from(document.body.children).forEach(n=>{n.contains(t)||(n.hasAttribute("aria-hidden")&&n.setAttribute("data-previous-aria-hidden",n.getAttribute("aria-hidden")||""),n.setAttribute("aria-hidden","true"))})},_g=()=>{Array.from(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||""),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},bg=typeof window<"u"&&!!window.GestureEvent,Iy=()=>{if(bg&&!es(document.body,oe.iosfix)){const t=document.body.scrollTop;document.body.style.top=`${t*-1}px`,Tt(document.body,oe.iosfix),Uy()}},Uy=()=>{const t=Rn();if(!t)return;let e;t.ontouchstart=n=>{e=Oy(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},Oy=t=>{const e=t.target,n=Rn(),i=Dd();return!n||!i||Ny(t)||Fy(t)?!1:e===n||!pu(n)&&e instanceof HTMLElement&&!Ox(e,i)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(pu(i)&&i.contains(e))},Ny=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",Fy=t=>t.touches&&t.touches.length>1,ky=()=>{if(es(document.body,oe.iosfix)){const t=parseInt(document.body.style.top,10);ri(document.body,oe.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},By=()=>{const t=document.createElement("div");t.className=oe["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e};let Br=null;const Hy=t=>{Br===null&&(document.body.scrollHeight>window.innerHeight||t==="scroll")&&(Br=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Br+By()}px`)},zy=()=>{Br!==null&&(document.body.style.paddingRight=`${Br}px`,Br=null)};function xg(t,e,n,i){Yl()?lh(t,i):(Ex(n).then(()=>lh(t,i)),gg(Ye)),bg?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),Od()&&(zy(),ky(),_g()),Vy()}function Vy(){ri([document.documentElement,document.body],[oe.shown,oe["height-auto"],oe["no-backdrop"],oe["toast-shown"]])}function Ms(t){t=Wy(t);const e=so.swalPromiseResolve.get(this),n=Gy(this);this.isAwaitingPromise?t.isDismissed||(xa(this),e(t)):n&&e(t)}const Gy=t=>{const e=Et();if(!e)return!1;const n=kt.innerParams.get(t);if(!n||es(e,n.hideClass.popup))return!1;ri(e,n.showClass.popup),Tt(e,n.hideClass.popup);const i=Rn();return ri(i,n.showClass.backdrop),Tt(i,n.hideClass.backdrop),$y(t,e,n),!0};function yg(t){const e=so.swalPromiseReject.get(this);xa(this),e&&e(t)}const xa=t=>{t.isAwaitingPromise&&(delete t.isAwaitingPromise,kt.innerParams.get(t)||t._destroy())},Wy=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),$y=(t,e,n)=>{var i;const s=Rn(),r=og(e);typeof n.willClose=="function"&&n.willClose(e),(i=Ye.eventEmitter)===null||i===void 0||i.emit("willClose",e),r?Xy(t,e,s,n.returnFocus,n.didClose):xg(t,s,n.returnFocus,n.didClose)},Xy=(t,e,n,i,s)=>{Ye.swalCloseEventFinishedCallback=xg.bind(null,t,n,i,s);const r=function(o){if(o.target===e){var a;(a=Ye.swalCloseEventFinishedCallback)===null||a===void 0||a.call(Ye),delete Ye.swalCloseEventFinishedCallback,e.removeEventListener("animationend",r),e.removeEventListener("transitionend",r)}};e.addEventListener("animationend",r),e.addEventListener("transitionend",r)},lh=(t,e)=>{setTimeout(()=>{var n;typeof e=="function"&&e.bind(t.params)(),(n=Ye.eventEmitter)===null||n===void 0||n.emit("didClose"),t._destroy&&t._destroy()})},ro=t=>{let e=Et();if(e||new kn,e=Et(),!e)return;const n=go();Yl()?bn(po()):jy(e,t),cn(n),e.setAttribute("data-loading","true"),e.setAttribute("aria-busy","true"),e.focus()},jy=(t,e)=>{const n=va(),i=go();!n||!i||(!e&&Nn(Ui())&&(e=Ui()),cn(n),e&&(bn(e),i.setAttribute("data-button-to-replace",e.className),n.insertBefore(i,e)),Tt([t,n],oe.loading))},qy=(t,e)=>{e.input==="select"||e.input==="radio"?Jy(t,e):["text","email","number","tel","textarea"].some(n=>n===e.input)&&(Rd(e.inputValue)||Pd(e.inputValue))&&(ro(Ui()),ew(t,e))},Yy=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return Ky(n);case"radio":return Zy(n);case"file":return Qy(n);default:return e.inputAutoTrim?n.value.trim():n.value}},Ky=t=>t.checked?1:0,Zy=t=>t.checked?t.value:null,Qy=t=>t.files&&t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,Jy=(t,e)=>{const n=Et();if(!n)return;const i=s=>{e.input==="select"?tw(n,Cl(s),e):e.input==="radio"&&nw(n,Cl(s),e)};Rd(e.inputOptions)||Pd(e.inputOptions)?(ro(Ui()),ma(e.inputOptions).then(s=>{t.hideLoading(),i(s)})):typeof e.inputOptions=="object"?i(e.inputOptions):ur(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},ew=(t,e)=>{const n=t.getInput();n&&(bn(n),ma(e.inputValue).then(i=>{n.value=e.input==="number"?`${parseFloat(i)||0}`:`${i}`,cn(n),n.focus(),t.hideLoading()}).catch(i=>{ur(`Error in inputValue promise: ${i}`),n.value="",cn(n),n.focus(),t.hideLoading()}))};function tw(t,e,n){const i=Ss(t,oe.select);if(!i)return;const s=(r,o,a)=>{const l=document.createElement("option");l.value=a,Qn(l,o),l.selected=wg(a,n.inputValue),r.appendChild(l)};e.forEach(r=>{const o=r[0],a=r[1];if(Array.isArray(a)){const l=document.createElement("optgroup");l.label=o,l.disabled=!1,i.appendChild(l),a.forEach(c=>s(l,c[1],c[0]))}else s(i,a,o)}),i.focus()}function nw(t,e,n){const i=Ss(t,oe.radio);if(!i)return;e.forEach(r=>{const o=r[0],a=r[1],l=document.createElement("input"),c=document.createElement("label");l.type="radio",l.name=oe.radio,l.value=o,wg(o,n.inputValue)&&(l.checked=!0);const u=document.createElement("span");Qn(u,a),u.className=oe.label,c.appendChild(l),c.appendChild(u),i.appendChild(c)});const s=i.querySelectorAll("input");s.length&&s[0].focus()}const Cl=t=>{const e=[];return t instanceof Map?t.forEach((n,i)=>{let s=n;typeof s=="object"&&(s=Cl(s)),e.push([i,s])}):Object.keys(t).forEach(n=>{let i=t[n];typeof i=="object"&&(i=Cl(i)),e.push([n,i])}),e},wg=(t,e)=>!!e&&e.toString()===t.toString(),iw=t=>{const e=kt.innerParams.get(t);t.disableButtons(),e.input?Sg(t,"confirm"):Vd(t,!0)},sw=t=>{const e=kt.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?Sg(t,"deny"):zd(t,!1)},rw=(t,e)=>{t.disableButtons(),e(vo.cancel)},Sg=(t,e)=>{const n=kt.innerParams.get(t);if(!n.input){ur(`The "input" parameter is needed to be set when using returnInputValueOn${Cd(e)}`);return}const i=t.getInput(),s=Yy(t,n);n.inputValidator?ow(t,s,e):i&&!i.checkValidity()?(t.enableButtons(),t.showValidationMessage(n.validationMessage||i.validationMessage)):e==="deny"?zd(t,s):Vd(t,s)},ow=(t,e,n)=>{const i=kt.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>ma(i.inputValidator(e,i.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):n==="deny"?zd(t,e):Vd(t,e)})},zd=(t,e)=>{const n=kt.innerParams.get(t||void 0);n.showLoaderOnDeny&&ro(dr()),n.preDeny?(t.isAwaitingPromise=!0,Promise.resolve().then(()=>ma(n.preDeny(e,n.validationMessage))).then(s=>{s===!1?(t.hideLoading(),xa(t)):t.close({isDenied:!0,value:typeof s>"u"?e:s})}).catch(s=>Mg(t||void 0,s))):t.close({isDenied:!0,value:e})},ch=(t,e)=>{t.close({isConfirmed:!0,value:e})},Mg=(t,e)=>{t.rejectPromise(e)},Vd=(t,e)=>{const n=kt.innerParams.get(t||void 0);n.showLoaderOnConfirm&&ro(),n.preConfirm?(t.resetValidationMessage(),t.isAwaitingPromise=!0,Promise.resolve().then(()=>ma(n.preConfirm(e,n.validationMessage))).then(s=>{Nn(jl())||s===!1?(t.hideLoading(),xa(t)):ch(t,typeof s>"u"?e:s)}).catch(s=>Mg(t||void 0,s))):ch(t,e)};function Rl(){const t=kt.innerParams.get(this);if(!t)return;const e=kt.domCache.get(this);bn(e.loader),Yl()?t.icon&&cn(po()):aw(e),ri([e.popup,e.actions],oe.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const aw=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?cn(e[0],"inline-block"):Ux()&&bn(t.actions)};function Eg(){const t=kt.innerParams.get(this),e=kt.domCache.get(this);return e?Kl(e.popup,t.input):null}function Tg(t,e,n){const i=kt.domCache.get(t);e.forEach(s=>{i[s].disabled=n})}function Ag(t,e){const n=Et();if(!(!n||!t))if(t.type==="radio"){const i=n.querySelectorAll(`[name="${oe.radio}"]`);for(let s=0;s<i.length;s++)i[s].disabled=e}else t.disabled=e}function Cg(){Tg(this,["confirmButton","denyButton","cancelButton"],!1)}function Rg(){Tg(this,["confirmButton","denyButton","cancelButton"],!0)}function Pg(){Ag(this.getInput(),!1)}function Dg(){Ag(this.getInput(),!0)}function Lg(t){const e=kt.domCache.get(this),n=kt.innerParams.get(this);Qn(e.validationMessage,t),e.validationMessage.className=oe["validation-message"],n.customClass&&n.customClass.validationMessage&&Tt(e.validationMessage,n.customClass.validationMessage),cn(e.validationMessage);const i=this.getInput();i&&(i.setAttribute("aria-invalid","true"),i.setAttribute("aria-describedby",oe["validation-message"]),sg(i),Tt(i,oe.inputerror))}function Ig(){const t=kt.domCache.get(this);t.validationMessage&&bn(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),ri(e,oe.inputerror))}const Hr={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0,topLayer:!1},lw=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],cw={allowEnterKey:void 0},uw=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Ug=t=>Object.prototype.hasOwnProperty.call(Hr,t),Og=t=>lw.indexOf(t)!==-1,Ng=t=>cw[t],dw=t=>{Ug(t)||Cn(`Unknown parameter "${t}"`)},fw=t=>{uw.includes(t)&&Cn(`The parameter "${t}" is incompatible with toasts`)},hw=t=>{const e=Ng(t);e&&eg(t,e)},Fg=t=>{t.backdrop===!1&&t.allowOutsideClick&&Cn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),t.theme&&!["light","dark","auto","minimal","borderless","embed-iframe","bulma","bulma-light","bulma-dark"].includes(t.theme)&&Cn(`Invalid theme "${t.theme}"`);for(const e in t)dw(e),t.toast&&fw(e),hw(e)};function kg(t){const e=Rn(),n=Et(),i=kt.innerParams.get(this);if(!n||es(n,i.hideClass.popup)){Cn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const s=pw(t),r=Object.assign({},i,s);Fg(r),e.dataset.swal2Theme=r.theme,pg(this,r),kt.innerParams.set(this,r),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const pw=t=>{const e={};return Object.keys(t).forEach(n=>{Og(n)?e[n]=t[n]:Cn(`Invalid parameter to update: ${n}`)}),e};function Bg(){const t=kt.domCache.get(this),e=kt.innerParams.get(this);if(!e){Hg(this);return}t.popup&&Ye.swalCloseEventFinishedCallback&&(Ye.swalCloseEventFinishedCallback(),delete Ye.swalCloseEventFinishedCallback),typeof e.didDestroy=="function"&&e.didDestroy(),Ye.eventEmitter.emit("didDestroy"),mw(this)}const mw=t=>{Hg(t),delete t.params,delete Ye.keydownHandler,delete Ye.keydownTarget,delete Ye.currentInstance},Hg=t=>{t.isAwaitingPromise?(_c(kt,t),t.isAwaitingPromise=!0):(_c(so,t),_c(kt,t),delete t.isAwaitingPromise,delete t.disableButtons,delete t.enableButtons,delete t.getInput,delete t.disableInput,delete t.enableInput,delete t.hideLoading,delete t.disableLoading,delete t.showValidationMessage,delete t.resetValidationMessage,delete t.close,delete t.closePopup,delete t.closeModal,delete t.closeToast,delete t.rejectPromise,delete t.update,delete t._destroy)},_c=(t,e)=>{for(const n in t)t[n].delete(e)};var gw=Object.freeze({__proto__:null,_destroy:Bg,close:Ms,closeModal:Ms,closePopup:Ms,closeToast:Ms,disableButtons:Rg,disableInput:Dg,disableLoading:Rl,enableButtons:Cg,enableInput:Pg,getInput:Eg,handleAwaitingPromise:xa,hideLoading:Rl,rejectPromise:yg,resetValidationMessage:Ig,showValidationMessage:Lg,update:kg});const vw=(t,e,n)=>{t.toast?_w(t,e,n):(xw(e),yw(e),ww(t,e,n))},_w=(t,e,n)=>{e.popup.onclick=()=>{t&&(bw(t)||t.timer||t.input)||n(vo.close)}},bw=t=>!!(t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton);let Pl=!1;const xw=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=()=>{},e.target===t.container&&(Pl=!0)}}},yw=t=>{t.container.onmousedown=e=>{e.target===t.container&&e.preventDefault(),t.popup.onmouseup=function(n){t.popup.onmouseup=()=>{},(n.target===t.popup||n.target instanceof HTMLElement&&t.popup.contains(n.target))&&(Pl=!0)}}},ww=(t,e,n)=>{e.container.onclick=i=>{if(Pl){Pl=!1;return}i.target===e.container&&Xl(t.allowOutsideClick)&&n(vo.backdrop)}},Sw=t=>typeof t=="object"&&t.jquery,uh=t=>t instanceof Element||Sw(t),Mw=t=>{const e={};return typeof t[0]=="object"&&!uh(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,i)=>{const s=t[i];typeof s=="string"||uh(s)?e[n]=s:s!==void 0&&ur(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof s}`)}),e};function Ew(...t){return new this(...t)}function Tw(t){class e extends this{_main(i,s){return super._main(i,Object.assign({},t,s))}}return e}const Aw=()=>Ye.timeout&&Ye.timeout.getTimerLeft(),zg=()=>{if(Ye.timeout)return Nx(),Ye.timeout.stop()},Vg=()=>{if(Ye.timeout){const t=Ye.timeout.start();return Fd(t),t}},Cw=()=>{const t=Ye.timeout;return t&&(t.running?zg():Vg())},Rw=t=>{if(Ye.timeout){const e=Ye.timeout.increase(t);return Fd(e,!0),e}},Pw=()=>!!(Ye.timeout&&Ye.timeout.isRunning());let dh=!1;const gu={};function Dw(t="data-swal-template"){gu[t]=this,dh||(document.body.addEventListener("click",Lw),dh=!0)}const Lw=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in gu){const i=e.getAttribute(n);if(i){gu[n].fire({template:i});return}}};class Iw{constructor(){this.events={}}_getHandlersByEventName(e){return typeof this.events[e]>"u"&&(this.events[e]=[]),this.events[e]}on(e,n){const i=this._getHandlersByEventName(e);i.includes(n)||i.push(n)}once(e,n){const i=(...s)=>{this.removeListener(e,i),n.apply(this,s)};this.on(e,i)}emit(e,...n){this._getHandlersByEventName(e).forEach(i=>{try{i.apply(this,n)}catch(s){console.error(s)}})}removeListener(e,n){const i=this._getHandlersByEventName(e),s=i.indexOf(n);s>-1&&i.splice(s,1)}removeAllListeners(e){this.events[e]!==void 0&&(this.events[e].length=0)}reset(){this.events={}}}Ye.eventEmitter=new Iw;const Uw=(t,e)=>{Ye.eventEmitter.on(t,e)},Ow=(t,e)=>{Ye.eventEmitter.once(t,e)},Nw=(t,e)=>{if(!t){Ye.eventEmitter.reset();return}e?Ye.eventEmitter.removeListener(t,e):Ye.eventEmitter.removeAllListeners(t)};var Fw=Object.freeze({__proto__:null,argsToParams:Mw,bindClickHandler:Dw,clickCancel:My,clickConfirm:mg,clickDeny:Sy,enableLoading:ro,fire:Ew,getActions:va,getCancelButton:mo,getCloseButton:Id,getConfirmButton:Ui,getContainer:Rn,getDenyButton:dr,getFocusableElements:Ud,getFooter:ig,getHtmlContainer:Dd,getIcon:po,getIconContent:Rx,getImage:ng,getInputLabel:Px,getLoader:go,getPopup:Et,getProgressSteps:Ld,getTimerLeft:Aw,getTimerProgressBar:ql,getTitle:tg,getValidationMessage:jl,increaseTimer:Rw,isDeprecatedParameter:Ng,isLoading:Lx,isTimerRunning:Pw,isUpdatableParameter:Og,isValidParameter:Ug,isVisible:wy,mixin:Tw,off:Nw,on:Uw,once:Ow,resumeTimer:Vg,showLoading:ro,stopTimer:zg,toggleTimer:Cw});class kw{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Gg=["swal-title","swal-html","swal-footer"],Bw=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return jw(n),Object.assign(Hw(n),zw(n),Vw(n),Gw(n),Ww(n),$w(n),Xw(n,Gg))},Hw=t=>{const e={};return Array.from(t.querySelectorAll("swal-param")).forEach(i=>{rr(i,["name","value"]);const s=i.getAttribute("name"),r=i.getAttribute("value");!s||!r||(typeof Hr[s]=="boolean"?e[s]=r!=="false":typeof Hr[s]=="object"?e[s]=JSON.parse(r):e[s]=r)}),e},zw=t=>{const e={};return Array.from(t.querySelectorAll("swal-function-param")).forEach(i=>{const s=i.getAttribute("name"),r=i.getAttribute("value");!s||!r||(e[s]=new Function(`return ${r}`)())}),e},Vw=t=>{const e={};return Array.from(t.querySelectorAll("swal-button")).forEach(i=>{rr(i,["type","color","aria-label"]);const s=i.getAttribute("type");!s||!["confirm","cancel","deny"].includes(s)||(e[`${s}ButtonText`]=i.innerHTML,e[`show${Cd(s)}Button`]=!0,i.hasAttribute("color")&&(e[`${s}ButtonColor`]=i.getAttribute("color")),i.hasAttribute("aria-label")&&(e[`${s}ButtonAriaLabel`]=i.getAttribute("aria-label")))}),e},Gw=t=>{const e={},n=t.querySelector("swal-image");return n&&(rr(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")||void 0),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")||void 0),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")||void 0),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt")||void 0)),e},Ww=t=>{const e={},n=t.querySelector("swal-icon");return n&&(rr(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},$w=t=>{const e={},n=t.querySelector("swal-input");n&&(rr(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const i=Array.from(t.querySelectorAll("swal-input-option"));return i.length&&(e.inputOptions={},i.forEach(s=>{rr(s,["value"]);const r=s.getAttribute("value");if(!r)return;const o=s.innerHTML;e.inputOptions[r]=o})),e},Xw=(t,e)=>{const n={};for(const i in e){const s=e[i],r=t.querySelector(s);r&&(rr(r,[]),n[s.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},jw=t=>{const e=Gg.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(t.children).forEach(n=>{const i=n.tagName.toLowerCase();e.includes(i)||Cn(`Unrecognized element <${i}>`)})},rr=(t,e)=>{Array.from(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&Cn([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},Wg=10,qw=t=>{const e=Rn(),n=Et();typeof t.willOpen=="function"&&t.willOpen(n),Ye.eventEmitter.emit("willOpen",n);const s=window.getComputedStyle(document.body).overflowY;Zw(e,n,t),setTimeout(()=>{Yw(e,n)},Wg),Od()&&(Kw(e,t.scrollbarPadding,s),Ly()),!Yl()&&!Ye.previousActiveElement&&(Ye.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),Ye.eventEmitter.emit("didOpen",n),ri(e,oe["no-transition"])},Dl=t=>{const e=Et();if(t.target!==e)return;const n=Rn();e.removeEventListener("animationend",Dl),e.removeEventListener("transitionend",Dl),n.style.overflowY="auto"},Yw=(t,e)=>{og(e)?(t.style.overflowY="hidden",e.addEventListener("animationend",Dl),e.addEventListener("transitionend",Dl)):t.style.overflowY="auto"},Kw=(t,e,n)=>{Iy(),e&&n!=="hidden"&&Hy(n),setTimeout(()=>{t.scrollTop=0})},Zw=(t,e,n)=>{Tt(t,n.showClass.backdrop),n.animation?(e.style.setProperty("opacity","0","important"),cn(e,"grid"),setTimeout(()=>{Tt(e,n.showClass.popup),e.style.removeProperty("opacity")},Wg)):cn(e,"grid"),Tt([document.documentElement,document.body],oe.shown),n.heightAuto&&n.backdrop&&!n.toast&&Tt([document.documentElement,document.body],oe["height-auto"])};var fh={email:(t,e)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function Qw(t){t.inputValidator||(t.input==="email"&&(t.inputValidator=fh.email),t.input==="url"&&(t.inputValidator=fh.url))}function Jw(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(Cn('Target parameter is not valid, defaulting to "body"'),t.target="body")}function eS(t){Qw(t),t.showLoaderOnConfirm&&!t.preConfirm&&Cn(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Jw(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),Wx(t)}let yi;var Da=new WeakMap;class Kt{constructor(...e){if(yx(this,Da,void 0),typeof window>"u")return;yi=this;const n=Object.freeze(this.constructor.argsToParams(e));this.params=n,this.isAwaitingPromise=!1,wx(Da,this,this._main(yi.params))}_main(e,n={}){if(Fg(Object.assign({},n,e)),Ye.currentInstance){const r=so.swalPromiseResolve.get(Ye.currentInstance),{isAwaitingPromise:o}=Ye.currentInstance;Ye.currentInstance._destroy(),o||r({isDismissed:!0}),Od()&&_g()}Ye.currentInstance=yi;const i=nS(e,n);eS(i),Object.freeze(i),Ye.timeout&&(Ye.timeout.stop(),delete Ye.timeout),clearTimeout(Ye.restoreFocusTimeout);const s=iS(yi);return pg(yi,i),kt.innerParams.set(yi,i),tS(yi,s,i)}then(e){return nh(Da,this).then(e)}finally(e){return nh(Da,this).finally(e)}}const tS=(t,e,n)=>new Promise((i,s)=>{const r=o=>{t.close({isDismissed:!0,dismiss:o})};so.swalPromiseResolve.set(t,i),so.swalPromiseReject.set(t,s),e.confirmButton.onclick=()=>{iw(t)},e.denyButton.onclick=()=>{sw(t)},e.cancelButton.onclick=()=>{rw(t,r)},e.closeButton.onclick=()=>{r(vo.close)},vw(n,e,r),Ey(Ye,n,r),qy(t,n),qw(n),sS(Ye,n,r),rS(e,n),setTimeout(()=>{e.container.scrollTop=0})}),nS=(t,e)=>{const n=Bw(t),i=Object.assign({},Hr,e,n,t);return i.showClass=Object.assign({},Hr.showClass,i.showClass),i.hideClass=Object.assign({},Hr.hideClass,i.hideClass),i.animation===!1&&(i.showClass={backdrop:"swal2-noanimation"},i.hideClass={}),i},iS=t=>{const e={popup:Et(),container:Rn(),actions:va(),confirmButton:Ui(),denyButton:dr(),cancelButton:mo(),loader:go(),closeButton:Id(),validationMessage:jl(),progressSteps:Ld()};return kt.domCache.set(t,e),e},sS=(t,e,n)=>{const i=ql();bn(i),e.timer&&(t.timeout=new kw(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(cn(i),Kn(i,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&Fd(e.timer)})))},rS=(t,e)=>{if(!e.toast){if(!Xl(e.allowEnterKey)){eg("allowEnterKey"),lS();return}oS(t)||aS(t,e)||mu(-1,1)}},oS=t=>{const e=Array.from(t.popup.querySelectorAll("[autofocus]"));for(const n of e)if(n instanceof HTMLElement&&Nn(n))return n.focus(),!0;return!1},aS=(t,e)=>e.focusDeny&&Nn(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&Nn(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&Nn(t.confirmButton)?(t.confirmButton.focus(),!0):!1,lS=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const t=new Date,e=localStorage.getItem("swal-initiation");e?(t.getTime()-Date.parse(e))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const n=document.createElement("audio");n.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",n.loop=!0,document.body.appendChild(n),setTimeout(()=>{n.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${t}`)}Kt.prototype.disableButtons=Rg;Kt.prototype.enableButtons=Cg;Kt.prototype.getInput=Eg;Kt.prototype.disableInput=Dg;Kt.prototype.enableInput=Pg;Kt.prototype.hideLoading=Rl;Kt.prototype.disableLoading=Rl;Kt.prototype.showValidationMessage=Lg;Kt.prototype.resetValidationMessage=Ig;Kt.prototype.close=Ms;Kt.prototype.closePopup=Ms;Kt.prototype.closeModal=Ms;Kt.prototype.closeToast=Ms;Kt.prototype.rejectPromise=yg;Kt.prototype.update=kg;Kt.prototype._destroy=Bg;Object.assign(Kt,Fw);Object.keys(gw).forEach(t=>{Kt[t]=function(...e){return yi&&yi[t]?yi[t](...e):null}});Kt.DismissReason=vo;Kt.version="11.22.3";const kn=Kt;kn.default=kn;typeof document<"u"&&function(t,e){var n=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=e);else try{n.innerHTML=e}catch{n.innerText=e}}(document,':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.1s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px $swal2-outline-color;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');const bi=(t="Success!",e="Operation completed successfully")=>kn.fire({icon:"success",title:t,text:e,confirmButtonText:"OK",confirmButtonColor:"#10b981"}),$t=(t="Error!",e="Something went wrong")=>kn.fire({icon:"error",title:t,text:e,confirmButtonText:"OK",confirmButtonColor:"#ef4444"}),VL=(t="Warning!",e="Please check your input")=>kn.fire({icon:"warning",title:t,text:e,confirmButtonText:"OK",confirmButtonColor:"#f59e0b"}),To=(t="Info",e="Here is some information")=>kn.fire({icon:"info",title:t,text:e,confirmButtonText:"OK",confirmButtonColor:"#3b82f6"}),bc=(t="Are you sure?",e="This action cannot be undone")=>kn.fire({title:t,text:e,icon:"question",showCancelButton:!0,confirmButtonColor:"#10b981",cancelButtonColor:"#6b7280",confirmButtonText:"بله، ادامه بده",cancelButtonText:"لغو"}),GL=t=>kn.fire({confirmButtonColor:"#10b981",cancelButtonColor:"#6b7280",...t}),WL=(t="Enter value",e="Value",n="Type here...")=>kn.fire({title:t,inputLabel:e,input:"text",inputPlaceholder:n,showCancelButton:!0,confirmButtonColor:"#10b981",cancelButtonColor:"#6b7280",confirmButtonText:"ثبت",cancelButtonText:"لغو",inputValidator:i=>{if(!i)return"You need to write something!"}}),$L=(t="Loading...")=>{kn.fire({title:t,allowOutsideClick:!1,didOpen:()=>{kn.showLoading()}})},XL=()=>{kn.close()},jL=(t,e="success",n="top-end")=>{kn.mixin({toast:!0,position:n,showConfirmButton:!1,timer:3e3,timerProgressBar:!0}).fire({icon:e,title:t})},cS={class:"editor-container overflow-auto"},uS={class:"mobile-control-bar"},dS={key:0,class:"pinned-section"},fS={class:"pinned-section-header"},hS={class:"pinned-section-title"},pS={class:"pinned-section-content"},mS={key:0,class:"pinned-dimensions"},gS={class:"dimension-inputs"},vS={class:"dimension-label"},_S={class:"dimension-label"},bS={class:"cell-size-section"},xS={class:"dimension-inputs"},yS={class:"dimension-label"},wS={class:"dimension-label"},SS={key:1,class:"pinned-direction"},MS={class:"direction-toggle"},ES={class:"direction-toggle"},TS={key:2,class:"pinned-color"},AS={class:"color-picker-container"},CS={class:"color-value"},RS={class:"recent-colors-header"},PS={class:"recent-colors-grid"},DS=["title","onClick"],LS=["onClick"],IS={key:3,class:"pinned-mode"},US={class:"mode-toggle"},OS={key:4,class:"pinned-image"},NS={class:"image-picker-container"},FS={class:"available-images-grid"},kS=["onClick"],BS=["src","alt"],HS={class:"image-name"},zS={key:5,class:"pinned-tools"},VS={class:"tools-grid"},GS=["disabled"],WS=["disabled"],$S=["disabled"],XS={key:6,class:"pinned-export"},jS={class:"grid grid-cols-2 gap-2"},qS={class:"mobile-panel-content"},YS={class:"mobile-image-section"},KS={class:"upload-section grid grid-cols-2 gap-2"},ZS={class:"upload-label"},QS={class:"upload-label"},JS={key:0,class:"image-preview"},eM=["src"],tM={class:"mobile-controls-content"},nM={class:"controls-content"},iM={class:"dimensions-section"},sM={class:"section-header"},rM=["title"],oM={class:"dimension-inputs"},aM={class:"dimension-label"},lM={class:"dimension-label"},cM={class:"cell-size-section !mt-4"},uM={class:"dimension-inputs"},dM={class:"dimension-label"},fM={class:"dimension-label"},hM={class:"direction-section"},pM={class:"section-header"},mM=["title"],gM={class:"direction-toggle"},vM={class:"direction-toggle"},_M={class:"color-section"},bM={class:"section-header"},xM=["title"],yM={class:"color-picker-container"},wM={class:"color-value"},SM={class:"recent-colors-header mt-3!"},MM={class:"recent-colors-grid"},EM=["title","onClick"],TM=["onClick"],AM={class:"mode-section"},CM={class:"section-header"},RM=["title"],PM={class:"mode-toggle"},DM={key:0,class:"mode-section"},LM={class:"section-header"},IM=["title"],UM={class:"image-picker-container"},OM={class:"available-images-grid"},NM=["onClick"],FM=["src","alt"],kM={class:"image-name"},BM={key:0,class:"recent-images-section"},HM={class:"recent-images-grid"},zM=["onClick"],VM=["src","alt"],GM=["onClick"],WM={class:"tools-section"},$M={class:"section-header"},XM=["title"],jM={class:"tools-grid"},qM=["disabled"],YM=["disabled"],KM=["disabled"],ZM={class:"background-color-section !mt-4"},QM={class:"background-mode-toggle"},JM={key:0,class:"background-color-controls"},eE={key:1,class:"background-image-controls"},tE={class:"background-image-picker"},nE={class:"background-images-grid"},iE=["onClick"],sE=["src","alt"],rE={class:"background-image-name"},oE=["disabled"],aE={class:"export-section"},lE={class:"section-header"},cE=["title"],uE={class:"grid grid-cols-2 gap-2"},dE={class:"controls-panel"},fE={class:"controls-content"},hE={class:"dimensions-section"},pE={class:"dimension-inputs"},mE={class:"dimension-label"},gE={class:"dimension-label"},vE={class:"cell-size-section !mt-4"},_E={class:"dimension-inputs"},bE={class:"dimension-label"},xE={class:"dimension-label"},yE={class:"direction-section"},wE={class:"direction-toggle"},SE={class:"direction-toggle"},ME={class:"color-section"},EE={class:"color-picker-container"},TE={class:"color-value"},AE={class:"recent-colors-header mt-3!"},CE={class:"recent-colors-grid"},RE=["title","onClick"],PE=["onClick"],DE={class:"mode-section"},LE={class:"mode-toggle"},IE={key:0,class:"image-section"},UE={class:"image-picker-container"},OE={class:"available-images-grid"},NE=["onClick"],FE=["src","alt"],kE={class:"image-name"},BE={key:0,class:"recent-images-section"},HE={class:"recent-images-grid"},zE=["onClick"],VE=["src","alt"],GE=["onClick"],WE={class:"tools-section"},$E={class:"tools-grid"},XE=["disabled"],jE=["disabled"],qE=["disabled"],YE={class:"background-color-section !mt-4"},KE={class:"background-mode-toggle"},ZE={key:0,class:"background-color-controls"},QE={key:1,class:"background-image-controls"},JE={class:"background-image-picker"},eT={class:"background-images-grid"},tT=["onClick"],nT=["src","alt"],iT={class:"background-image-name"},sT=["disabled"],rT={class:"export-section"},oT={class:"grid grid-cols-2 gap-2"},aT={class:"image-section max-h-[70%]"},lT={class:"upload-section grid grid-cols-2 gap-2"},cT={class:"upload-label"},uT={class:"upload-label"},dT={key:0,class:"image-preview"},fT=["src"],hT=["onClick"],pT={__name:"GridEditor",emits:["update-grid"],setup(t,{emit:e}){const n=e,i=ot(16),s=ot(80),r=ot(15),o=ot(17),a=ot("#ff0000"),l=ot([]),c=ot(null),u=ot(()=>{try{const G=localStorage.getItem("gridEditor_isVertical");return console.log("saved",G),G!==null?JSON.parse(G):!0}catch{return!0}}),d=ot(!0),f=ot(null),h=ot("color"),v=ot(null),g=ot([]),m=ot([]),p=ot(!1),A=ot(null);function C(){p.value=!p.value}function w(G){A.value===G?A.value=null:(A.value=G,p.value=!1)}function U(){A.value=null}function I(G){return{dimensions:"📐 ابعاد شبکه",direction:"🔄 جهت",color:"🎨 انتخاب رنگ",mode:"🎨 حالت طراحی",image:"🖼️ انتخاب تصویر مهره",tools:"🛠️ ابزارها",export:"📤 خروجی"}[G]||G}const D=ot([]);function k(){try{const G={grid:D.value,rows:i.value,cols:s.value,cellWidth:r.value,cellHeight:o.value,isVertical:u.value,isVerticalGrid:d.value,recentColors:l.value,recentImages:g.value,timestamp:new Date().toISOString()};localStorage.setItem("gridEditorData",JSON.stringify(G)),c.value=G.timestamp,bi("ذخیره شد","گرید با موفقیت ذخیره شد")}catch(G){$t("خطا در ذخیره","خطا در ذخیره گرید: "+G.message),console.error("Error saving grid:",G)}}function E(){try{const G=localStorage.getItem("gridEditorData");if(G){const y=JSON.parse(G);return y.grid&&Array.isArray(y.grid)&&y.rows&&y.cols&&y.grid.length===y.rows*y.cols?(i.value=y.rows,s.value=y.cols,D.value=[...y.grid],y.cellWidth&&typeof y.cellWidth=="number"&&(r.value=y.cellWidth),y.cellHeight&&typeof y.cellHeight=="number"&&(o.value=y.cellHeight),typeof y.isVertical=="boolean"&&(u.value=y.isVertical),typeof y.isVerticalGrid=="boolean"&&(d.value=y.isVerticalGrid),y.recentColors&&Array.isArray(y.recentColors)&&(l.value=[...y.recentColors]),y.recentImages&&Array.isArray(y.recentImages)&&(g.value=[...y.recentImages]),c.value=y.timestamp,Ke.stacks=[],Ke.index=-1,ne(),n("update-grid",he()),!0):(localStorage.removeItem("gridEditorData"),To("اطلاعات","داده‌های ذخیره شده نامعتبر بودند و حذف شدند"),!1)}return!1}catch(G){return $t("خطا در بارگذاری","خطا در بارگذاری گرید: "+G.message),console.error("Error loading grid:",G),localStorage.removeItem("gridEditorData"),!1}}function T(G){console.log("Key pressed:",G.key,"Ctrl:",G.ctrlKey),G.ctrlKey&&G.key==="z"&&(G.preventDefault(),xe(),console.log("Undo triggered by Ctrl+Z"))}ho(()=>{const G=E();if(u.value=localStorage.getItem("gridEditor_isVertical")!==null?JSON.parse(localStorage.getItem("gridEditor_isVertical")):!0,!G){const y=i.value*s.value;D.value=Array(y).fill("#ffffff"),ne()}R(),document.addEventListener("keydown",T)});function R(){const G=["310.jpg","1130.jpg","1135.jpg","2116.jpg","2131.jpg","2132.jpg","725.jpg","877.jpg","f111.jpg","f222.jpg","f333.jpg","f444.jpg","f555.jpg","f666.jpg","f777.jpg","f888.jpg","f999.jpg","f1010.jpg","f1111.jpg","f1212.jpg","f1313.jpg","f1414.jpg","f1515.jpg","Awhite.jpg","db0042.jpg","db0221.jpg","db0231.jpg","db0268.jpg","db0623.jpg","db0627.jpg","db0635.jpg","db0651.jpg","db0721.jpg","db0722.jpg","db0723.jpg","db0725.jpg","db0726.jpg","db0729.jpg","db0759.jpg","db0763.jpg","db0791.jpg","db0796.jpg","db0877.jpg","db1132.jpg","db1133.jpg","db1135.jpg","db1153.jpg","db1262.jpg","db1570.jpg","db2111.jpg","db2127.jpg","db2131.jpg","db2132.jpg","db2144.jpg","db2316.jpg","db2352.jpg","db2357.jpg","db310.jpg","db626.jpg","db732.jpg","db856.jpg"];m.value=G.map(y=>({name:y,url:`/miyuki-beads-designer/beads/${y}`,displayName:y.replace(".jpg","")}))}const L=ot([]),O=ot([]),V=ot({width:0,height:0}),ae=ot({x:0,y:0}),Q=ot(!1),te=ot("paint");let q=!1,we=null,Me=!1,Ne=!1,Ge=!1,bt=-1;const Ke=ua({stacks:[],index:-1});function ne(){Ke.stacks=Ke.stacks.slice(0,Ke.index+1),Ke.stacks.push([...D.value]),Ke.index++}function xe(){Ke.index>0&&(Ke.index--,D.value=[...Ke.stacks[Ke.index]])}function B(){Ke.index<Ke.stacks.length-1&&(Ke.index++,D.value=[...Ke.stacks[Ke.index]])}ne();function ue(G){const y=G.target.files[0];if(y){const N=new FileReader;N.onload=pe=>{try{const Ae=pe.target.result.trim(),ke=JSON.parse(Ae);if(ke.grid&&ke.rows&&ke.cols){const{grid:je,rows:st,cols:rt}=ke;Array.isArray(je)&&je.every(Xe=>typeof Xe=="string"&&(Xe.match(/^#[0-9A-Fa-f]{6}$/)||Xe.startsWith("/miyuki-beads-designer/beads/")))?je.length===st*rt?(i.value=st,s.value=rt,ke.cellWidth&&typeof ke.cellWidth=="number"&&(r.value=ke.cellWidth),ke.cellHeight&&typeof ke.cellHeight=="number"&&(o.value=ke.cellHeight),typeof ke.isVertical=="boolean"&&(u.value=ke.isVertical),typeof ke.isVerticalGrid=="boolean"&&(d.value=ke.isVerticalGrid),fa(()=>{D.value=[...je],ne(),bi("بارگذاری شد",`گرید ${st}×${rt} با موفقیت بارگذاری شد`)})):$t("خطا در ابعاد",`تعداد سلول‌ها (${je.length}) با ابعاد اعلام شده (${st}×${rt}) مطابقت ندارد`):$t("خطا در فرمت فایل","فایل باید شامل آرایه‌ای معتبر از رنگ‌ها یا تصاویر باشد")}else if(Array.isArray(ke)){const je=ke;je.every(st=>typeof st=="string"&&(st.match(/^#[0-9A-Fa-f]{6}$/)||st.startsWith("/miyuki-beads-designer/beads/")))?je.length===i.value*s.value?(D.value=[...je],ne(),bi("بارگذاری شد",`گرید با ابعاد فعلی (${i.value}×${s.value}) بارگذاری شد`)):$t("خطا در ابعاد",`تعداد سلول‌ها (${je.length}) با ابعاد فعلی (${i.value}×${s.value}) مطابقت ندارد. لطفاً ابعاد را تنظیم کنید یا از فایل با فرمت جدید استفاده کنید.`):$t("خطا در فرمت فایل","فایل باید شامل آرایه‌ای معتبر از رنگ‌ها یا تصاویر باشد")}else $t("خطا در فرمت فایل","فرمت فایل نامعتبر است. فایل باید شامل آرایه‌ای از رنگ‌ها/تصاویر یا آبجکتی با grid، rows و cols باشد.")}catch(Ae){$t("خطا در خواندن فایل","خطا در خواندن فایل: "+Ae.message),console.error("Error parsing text file:",Ae)}},N.readAsText(y)}}qn([i,s],()=>{const G=i.value*s.value;D.value.length!==G&&(D.value=Array(G).fill("#ffffff"),L.value=[],Q.value=!1,ne())},{immediate:!0}),qn(D,()=>{setTimeout(()=>{try{const G={grid:D.value,rows:i.value,cols:s.value,recentColors:l.value,recentImages:g.value,timestamp:new Date().toISOString()};localStorage.setItem("gridEditorData",JSON.stringify(G)),c.value=G.timestamp}catch(G){console.error("Error auto-saving grid:",G)}},1e3)},{deep:!0}),qn(u,G=>{try{localStorage.setItem("gridEditor_isVertical",JSON.stringify(G)),console.log("isVertical saved",G)}catch(y){console.error("Error saving isVertical to localStorage:",y)}},{immediate:!1});function re(G){te.value=G,L.value=[],G!=="paste"&&(Q.value=!1)}function me(){return O.value&&O.value.length>0&&V.value.width>0}function Ze(G){q=!0;const y=le(G);te.value==="paint"?X(y):te.value==="fill"?Y(y,D.value[y],ge()):te.value==="select"&&(we=y,L.value=[y],Me=!0)}function P(){q&&ne(),q=!1,we=null}function _(G){if(!q)return;const y=le(G);te.value==="paint"?X(y):te.value==="select"&&Me&&(L.value=K(we,y))}function z(G){G.preventDefault();const y=G.touches;if(Ne=y.length>1,y.length===1){const N=y[0],pe=document.elementFromPoint(N.clientX,N.clientY);if(pe&&pe.classList.contains("cell")){const Ae=Array.from(pe.parentNode.children).indexOf(pe);bt=Ae,Ge=!0,te.value==="paint"?X(Ae):te.value==="fill"?(Y(Ae,D.value[Ae],ge()),ne()):te.value==="select"&&(we=Ae,L.value=[Ae],Me=!0)}}else Ge=!1}function j(G){const y=G.touches;if(y.length===1&&Ge&&!Ne){G.preventDefault();const N=y[0],pe=document.elementFromPoint(N.clientX,N.clientY);if(pe&&pe.classList.contains("cell")){const Ae=Array.from(pe.parentNode.children).indexOf(pe);Ae!==bt&&(bt=Ae,te.value==="paint"?X(Ae):te.value==="select"&&Me&&(L.value=K(we,Ae)))}}else y.length>1&&(Ne=!0,Ge=!1)}function ie(){Ge&&!Ne&&te.value==="paint"&&ne(),Ge=!1,Ne=!1,bt=-1,we=null,Me=!1}function X(G){h.value==="color"?(D.value[G]=a.value,J(a.value)):h.value==="image"&&v.value&&(D.value[G]=v.value.url,ce(v.value))}function ge(){return h.value==="color"?a.value:h.value==="image"&&v.value?v.value.url:a.value}function J(G){const y=l.value.indexOf(G);y>-1&&l.value.splice(y,1),l.value.unshift(G),l.value.length>10&&(l.value=l.value.slice(0,10))}function ce(G){const y=g.value.findIndex(N=>N.url===G.url);y>-1&&g.value.splice(y,1),g.value.unshift(G),g.value.length>10&&(g.value=g.value.slice(0,10))}function de(G){v.value=G,ce(G)}function Pe(G){const y=g.value.findIndex(N=>N.url===G.url);y>-1&&g.value.splice(y,1)}async function S(){(await bc("پاک کردن تصاویر","آیا می‌خواهید تمام تصاویر اخیر پاک شوند؟")).isConfirmed&&(g.value=[])}function x(G){const y=l.value.indexOf(G);y>-1&&l.value.splice(y,1)}async function F(){(await bc("پاک کردن رنگ‌ها","آیا می‌خواهید تمام رنگ‌های اخیر پاک شوند؟")).isConfirmed&&(l.value=[])}function Y(G,y,N){if(y===N)return;const pe=[G],Ae=new Set;for(;pe.length;){const ke=pe.pop();if(Ae.has(ke)||D.value[ke]!==y)continue;Ae.add(ke),D.value[ke]=N;const je=ke%i.value,st=Math.floor(ke/i.value);if(je>0){const rt=ke-1;!Ae.has(rt)&&D.value[rt]===y&&pe.push(rt)}if(je<i.value-1){const rt=ke+1;!Ae.has(rt)&&D.value[rt]===y&&pe.push(rt)}if(st>0){const rt=ke-i.value;!Ae.has(rt)&&D.value[rt]===y&&pe.push(rt)}if(st<s.value-1){const rt=ke+i.value;!Ae.has(rt)&&D.value[rt]===y&&pe.push(rt)}}J(N)}function le(G){const y=G.target;return Array.from(y.parentNode.children).indexOf(y)}function K(G,y){const N=G%i.value,pe=Math.floor(G/i.value),Ae=y%i.value,ke=Math.floor(y/i.value),je=Math.min(N,Ae),st=Math.max(N,Ae),rt=Math.min(pe,ke),Xe=Math.max(pe,ke),xt=[];for(let Gt=rt;Gt<=Xe;Gt++)for(let Dn=je;Dn<=st;Dn++){const is=Gt*i.value+Dn;is>=0&&is<D.value.length&&xt.push(is)}return xt}function Le(G){if(te.value==="paint")X(G),ne();else if(te.value==="fill")Y(G,D.value[G],ge()),ne();else if(te.value==="paste"&&Q.value){const y=G%i.value,N=Math.floor(G/i.value);ae.value={x:y,y:N},ct()}}function ve(){if(L.value.length===0){$t("خطا","ابتدا یک ناحیه انتخاب کنید");return}const G=i.value,y=Math.min(...L.value.map(st=>st%G)),N=Math.max(...L.value.map(st=>st%G)),pe=Math.min(...L.value.map(st=>Math.floor(st/G))),Ae=Math.max(...L.value.map(st=>Math.floor(st/G))),ke=N-y+1,je=Ae-pe+1;V.value={width:ke,height:je},O.value=[];for(let st=0;st<je;st++){const rt=[];for(let Xe=0;Xe<ke;Xe++){const xt=(pe+st)*G+(y+Xe);rt.push(D.value[xt])}O.value.push(rt)}}function De(){if(L.value.length===0){$t("خطا","ابتدا یک ناحیه انتخاب کنید");return}ve(),L.value.forEach(G=>D.value[G]="#ffffff"),ne()}function Ie(){if(!me()){$t("خطا","هیچ چیزی برای چسباندن وجود ندارد");return}let G=0,y=0;if(L.value.length>0){const N=i.value;G=Math.min(...L.value.map(pe=>pe%N)),y=Math.min(...L.value.map(pe=>Math.floor(pe/N)))}else G=Math.floor((i.value-V.value.width)/2),y=Math.floor((s.value-V.value.height)/2);for(let N=0;N<V.value.height;N++)for(let pe=0;pe<V.value.width;pe++){const Ae=G+pe,ke=y+N;if(Ae>=0&&Ae<i.value&&ke>=0&&ke<s.value){const je=ke*i.value+Ae;O.value[N]&&O.value[N][pe]&&(D.value[je]=O.value[N][pe])}}ne()}function _e(){L.value=[],Me=!1}function Ce(){if(L.value.length===0){$t("خطا","ابتدا یک ناحیه انتخاب کنید");return}try{const G=i.value,y=Math.min(...L.value.map(Xe=>Xe%G)),N=Math.max(...L.value.map(Xe=>Xe%G)),pe=Math.min(...L.value.map(Xe=>Math.floor(Xe/G))),Ae=Math.max(...L.value.map(Xe=>Math.floor(Xe/G))),ke=N-y+1,je=Ae-pe+1,st=[];for(let Xe=0;Xe<je;Xe++){const xt=[];for(let Gt=0;Gt<ke;Gt++){const Dn=(pe+Xe)*G+(y+Gt);L.value.includes(Dn)?xt.push(D.value[Dn]):xt.push("#ffffff")}st.push(xt)}const rt=st.map(Xe=>Xe.reverse());for(let Xe=0;Xe<je;Xe++)for(let xt=0;xt<ke;xt++){const Gt=(pe+Xe)*G+(y+xt);L.value.includes(Gt)&&(D.value[Gt]=rt[Xe][xt])}ne(),bi("آینه شد","طرح انتخاب شده با موفقیت آینه شد")}catch(G){$t("خطا در آینه کردن","خطا در آینه کردن طرح: "+G.message),console.error("Error mirroring selection:",G)}}function Be(){if(L.value.length===0){$t("خطا","ابتدا یک ناحیه انتخاب کنید");return}try{const G=i.value,y=Math.min(...L.value.map(Xe=>Xe%G)),N=Math.max(...L.value.map(Xe=>Xe%G)),pe=Math.min(...L.value.map(Xe=>Math.floor(Xe/G))),Ae=Math.max(...L.value.map(Xe=>Math.floor(Xe/G))),ke=N-y+1,je=Ae-pe+1,st=[];for(let Xe=0;Xe<je;Xe++){const xt=[];for(let Gt=0;Gt<ke;Gt++){const Dn=(pe+Xe)*G+(y+Gt);L.value.includes(Dn)?xt.push(D.value[Dn]):xt.push("#ffffff")}st.push(xt)}const rt=st.reverse();for(let Xe=0;Xe<je;Xe++)for(let xt=0;xt<ke;xt++){const Gt=(pe+Xe)*G+(y+xt);L.value.includes(Gt)&&(D.value[Gt]=rt[Xe][xt])}ne(),bi("آینه عمودی شد","طرح انتخاب شده با موفقیت به صورت عمودی آینه شد")}catch(G){$t("خطا در آینه عمودی","خطا در آینه عمودی کردن طرح: "+G.message),console.error("Error vertical mirroring selection:",G)}}function Ue(){if(!me()){$t("خطا","هیچ چیزی برای چسباندن وجود ندارد");return}const G=Math.floor((i.value-V.value.width)/2),y=Math.floor((s.value-V.value.height)/2);for(let N=0;N<V.value.height;N++)for(let pe=0;pe<V.value.width;pe++){const Ae=G+pe,ke=y+N;if(Ae>=0&&Ae<i.value&&ke>=0&&ke<s.value){const je=ke*i.value+Ae;O.value[N]&&O.value[N][pe]&&(D.value[je]=O.value[N][pe])}}ne()}function Te(){if(!me()){$t("خطا","هیچ چیزی برای چسباندن وجود ندارد");return}Q.value=!0,te.value="paste",L.value=[],To("انتخاب موقعیت","حالا روی صفحه کلیک کنید تا موقعیت چسباندن را انتخاب کنید")}function ct(){if(!me()){$t("خطا","هیچ چیزی برای چسباندن وجود ندارد");return}for(let G=0;G<V.value.height;G++)for(let y=0;y<V.value.width;y++){const N=ae.value.x+y,pe=ae.value.y+G;if(N>=0&&N<i.value&&pe>=0&&pe<s.value){const Ae=pe*i.value+N;O.value[G]&&O.value[G][y]&&(D.value[Ae]=O.value[G][y])}}ne(),Q.value=!1,te.value="paint"}function H(){Q.value=!1,te.value="paint",To("لغو شد","حالت چسباندن لغو شد")}async function ye(G,y,N,pe,Ae,ke){if(ke.startsWith("/miyuki-beads-designer/beads/"))try{const je=new Image;je.crossOrigin="anonymous",await new Promise((st,rt)=>{je.onload=st,je.onerror=rt,je.src=ke}),G.drawImage(je,y,N,pe,Ae)}catch(je){console.warn("Failed to load image:",ke,je),G.fillStyle="#cccccc",G.fillRect(y,N,pe,Ae)}else G.fillStyle=ke,G.fillRect(y,N,pe,Ae)}async function Ee(){try{To("در حال پردازش...","لطفاً صبر کنید، در حال ایجاد عکس...");const G=document.createElement("canvas"),y=G.getContext("2d"),N=20,pe=i.value*r.value+N*2,Ae=s.value*o.value+N*2;G.width=pe,G.height=Ae,y.fillStyle="#ffffff",y.fillRect(0,0,pe,Ae);for(let ke=0;ke<s.value;ke++)for(let je=0;je<i.value;je++){const st=ke*i.value+je,rt=D.value[st];if(rt){const Xe=N+je*r.value,xt=N+ke*o.value;await ye(y,Xe,xt,r.value,o.value,rt),y.strokeStyle="#e0e0e0",y.lineWidth=.5,y.strokeRect(Xe,xt,r.value,o.value)}}y.fillStyle="#000000",y.font="16px Arial",y.textAlign="center",y.fillText(`Grid: ${i.value}×${s.value}`,pe/2,N/2+10),G.toBlob(ke=>{const je=URL.createObjectURL(ke),st=document.createElement("a");st.href=je,st.download=`grid_${i.value}x${s.value}_${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.png`,document.body.appendChild(st),st.click(),document.body.removeChild(st),URL.revokeObjectURL(je),bi("موفقیت","عکس با موفقیت دانلود شد!")},"image/png")}catch(G){$t("خطا در خروجی","خطا در ایجاد عکس: "+G.message),console.error("Error exporting grid as image:",G)}}async function Fe(){try{To("در حال پردازش...","لطفاً صبر کنید، در حال ایجاد عکس HD...");const G=document.createElement("canvas"),y=G.getContext("2d"),N=r.value*2,pe=o.value*2,Ae=40,ke=i.value*N+Ae*2,je=s.value*pe+Ae*2;G.width=ke,G.height=je,y.fillStyle="#ffffff",y.fillRect(0,0,ke,je);for(let rt=0;rt<s.value;rt++)for(let Xe=0;Xe<i.value;Xe++){const xt=rt*i.value+Xe,Gt=D.value[xt];if(Gt){const Dn=Ae+Xe*N,is=Ae+rt*pe;await ye(y,Dn,is,N,pe,Gt),y.strokeStyle="#d0d0d0",y.lineWidth=1,y.strokeRect(Dn,is,N,pe)}}y.fillStyle="#000000",y.font="bold 24px Arial",y.textAlign="center",y.fillText(`Grid: ${i.value}×${s.value}`,ke/2,Ae/2+20),y.font="16px Arial",y.fillStyle="#666666";const st=new Date().toLocaleString("fa-IR");y.fillText(st,ke/2,je-Ae/2),G.toBlob(rt=>{const Xe=URL.createObjectURL(rt),xt=document.createElement("a");xt.href=Xe,xt.download=`grid_HD_${i.value}x${s.value}_${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.png`,document.body.appendChild(xt),xt.click(),document.body.removeChild(xt),URL.revokeObjectURL(Xe),bi("موفقیت","عکس HD با موفقیت دانلود شد!")},"image/png",1)}catch(G){$t("خطا در خروجی","خطا در ایجاد عکس HD: "+G.message),console.error("Error exporting grid as high quality image:",G)}}function be(){try{const G={grid:D.value,rows:i.value,cols:s.value,cellWidth:r.value,cellHeight:o.value,isVertical:u.value,isVerticalGrid:d.value,timestamp:new Date().toISOString()},y=JSON.stringify(G,null,2),N=new Blob([y],{type:"text/plain;charset=utf-8"}),pe=URL.createObjectURL(N),Ae=document.createElement("a");Ae.href=pe,Ae.download=`grid_${i.value}x${s.value}_${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.txt`,document.body.appendChild(Ae),Ae.click(),document.body.removeChild(Ae),URL.revokeObjectURL(pe),bi("موفقیت","فایل TXT با موفقیت دانلود شد!")}catch(G){$t("خطا در خروجی","خطا در ایجاد فایل TXT: "+G.message),console.error("Error exporting grid as TXT:",G)}}function he(){const G=[];for(let y=0;y<s.value;y++){const N=[];for(let pe=0;pe<i.value;pe++)N.push(D.value[y*i.value+pe]);G.push(N)}return G}function Ve(G){const y=G.target.files[0];f.value=URL.createObjectURL(y)}const tt=ot("#ffffff"),dt=ot("color"),ft=ot(null);async function Pn(){let G,y;if(dt.value==="color")G=tt.value,y=`آیا می‌خواهید تمام مهره‌ها به رنگ ${G} تغییر یابند؟ این عملیات غیرقابل برگشت است.`;else if(dt.value==="image"&&ft.value)G=ft.value.url,y=`آیا می‌خواهید تمام مهره‌ها به تصویر ${ft.value.displayName} تغییر یابند؟ این عملیات غیرقابل برگشت است.`;else{$t("خطا","لطفاً یک رنگ یا تصویر انتخاب کنید");return}if((await bc("تغییر تمام مهره‌ها",y)).isConfirmed){const pe=i.value*s.value;for(let Ae=0;Ae<pe;Ae++)D.value[Ae]=G;ne(),dt.value==="color"?(J(G),bi("تغییر رنگ",`تمام مهره‌ها به رنگ ${G} تغییر یافتند`)):(ce(ft.value),bi("تغییر تصویر",`تمام مهره‌ها به تصویر ${ft.value.displayName} تغییر یافتند`))}}return(G,y)=>(ze(),$e("div",cS,[b("div",uS,[b("button",{class:Je(["mobile-menu-btn",{active:p.value}]),onClick:C},y[58]||(y[58]=[b("span",{class:"menu-icon"},"☰",-1),b("span",{class:"menu-text"},"ابزارها",-1)]),2),y[59]||(y[59]=b("div",{class:"mobile-title"},"🎨 ویرایشگر شبکه",-1))]),A.value?(ze(),$e("div",dS,[b("div",fS,[b("h4",hS,at(I(A.value)),1),b("button",{class:"unpin-btn",title:"Unpin Section",onClick:U}," ✕ ")]),b("div",pS,[A.value==="dimensions"?(ze(),$e("div",mS,[b("div",gS,[b("label",vS,[y[60]||(y[60]=b("span",{class:"dimension-text"},"ستون ها:",-1)),Qt(b("input",{"onUpdate:modelValue":y[0]||(y[0]=N=>i.value=N),type:"number",min:"1",class:"dimension-input"},null,512),[[tn,i.value,void 0,{number:!0}]])]),b("label",_S,[y[61]||(y[61]=b("span",{class:"dimension-text"},"ردیف ها:",-1)),Qt(b("input",{"onUpdate:modelValue":y[1]||(y[1]=N=>s.value=N),type:"number",min:"1",class:"dimension-input"},null,512),[[tn,s.value,void 0,{number:!0}]])])]),b("div",bS,[y[64]||(y[64]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 📏 اندازه سلول ",-1)),b("div",xS,[b("label",yS,[y[62]||(y[62]=b("span",{class:"dimension-text"},"عرض:",-1)),Qt(b("input",{"onUpdate:modelValue":y[2]||(y[2]=N=>r.value=N),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[tn,r.value,void 0,{number:!0}]])]),b("label",wS,[y[63]||(y[63]=b("span",{class:"dimension-text"},"ارتفاع:",-1)),Qt(b("input",{"onUpdate:modelValue":y[3]||(y[3]=N=>o.value=N),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[tn,o.value,void 0,{number:!0}]])])])])])):Dt("",!0),A.value==="direction"?(ze(),$e("div",SS,[b("div",MS,[b("button",{class:Je(["direction-btn",{active:u.value}]),onClick:y[4]||(y[4]=N=>u.value=!u.value)},at(u.value?"عمودی":"افقی"),3)]),b("div",ES,[b("button",{class:Je(["direction-btn",{active:d.value}]),onClick:y[5]||(y[5]=N=>d.value=!d.value)},at(d.value?"گرید عمودی":"گرید افقی"),3)])])):Dt("",!0),A.value==="color"?(ze(),$e("div",TS,[b("div",AS,[Qt(b("input",{"onUpdate:modelValue":y[6]||(y[6]=N=>a.value=N),type:"color",class:"color-picker"},null,512),[[tn,a.value]]),b("span",CS,at(a.value),1)]),b("div",RS,[y[65]||(y[65]=b("h4",{class:"text-sm font-semibold text-gray-700"},"🔄 رنگ‌های اخیر",-1)),l.value.length>0?(ze(),$e("button",{key:0,class:"clear-colors-btn",title:"پاک کردن تمام رنگ‌ها",onClick:F}," 🗑️ پاک کردن ")):Dt("",!0)]),b("div",PS,[(ze(!0),$e(Ht,null,Mn(l.value,N=>(ze(),$e("div",{key:N,class:"color-swatch",style:Xn({backgroundColor:N}),title:N,onClick:pe=>a.value=N},[b("button",{class:"remove-color-btn",onClick:So(pe=>x(N),["stop"])}," × ",8,LS)],12,DS))),128))])])):Dt("",!0),A.value==="mode"?(ze(),$e("div",IS,[b("div",US,[b("button",{class:Je(["mode-btn",{active:h.value==="color"}]),onClick:y[7]||(y[7]=N=>h.value="color")}," 🎨 رنگ ",2),b("button",{class:Je(["mode-btn",{active:h.value==="image"}]),onClick:y[8]||(y[8]=N=>h.value="image")}," 🖼️ تصویر ",2)])])):Dt("",!0),A.value==="image"?(ze(),$e("div",OS,[b("div",NS,[b("div",FS,[(ze(!0),$e(Ht,null,Mn(m.value,N=>{var pe;return ze(),$e("div",{key:N.name,class:Je(["image-item",{selected:((pe=v.value)==null?void 0:pe.url)===N.url}]),onClick:Ae=>de(N)},[b("img",{src:N.url,alt:N.displayName,class:"bead-image"},null,8,BS),b("span",HS,at(N.displayName),1)],10,kS)}),128))])])])):Dt("",!0),A.value==="tools"?(ze(),$e("div",zS,[b("div",VS,[b("button",{class:Je(["tool-btn primary",{active:te.value==="paint"}]),onClick:y[9]||(y[9]=N=>re("paint"))}," 🖌️ Paint ",2),b("button",{class:Je(["tool-btn primary",{active:te.value==="fill"}]),onClick:y[10]||(y[10]=N=>re("fill"))}," 🪣 Fill ",2),b("button",{class:Je(["tool-btn secondary",{active:te.value==="select"}]),onClick:y[11]||(y[11]=N=>re("select"))}," 📐 Select ",2),b("button",{class:"tool-btn secondary",onClick:ve}," 📋 Copy "),b("button",{class:"tool-btn secondary",onClick:De}," ✂️ Cut "),b("button",{class:"tool-btn secondary",onClick:Ie}," 📥 Paste "),b("button",{class:"tool-btn secondary",onClick:Ue}," 📍 Paste at Center "),b("button",{class:"tool-btn secondary",disabled:!me(),onClick:Te}," 🎯 Select Paste Position ",8,GS),Q.value?(ze(),$e("button",{key:0,class:"tool-btn danger",onClick:H}," ❌ Cancel Paste ")):Dt("",!0),b("button",{class:"tool-btn secondary",onClick:_e}," 🗑️ Clear Selection "),b("button",{class:"tool-btn secondary",disabled:L.value.length===0,onClick:Ce}," 🔄 Mirror Selection ",8,WS),b("button",{class:"tool-btn secondary",disabled:L.value.length===0,onClick:Be}," ↕️ Mirror Selection Vertical ",8,$S),b("button",{class:"tool-btn secondary",onClick:xe}," ↩️ Undo "),b("button",{class:"tool-btn secondary",onClick:B}," ↪️ Redo ")])])):Dt("",!0),A.value==="export"?(ze(),$e("div",XS,[b("div",{class:"save-load-buttons"},[b("button",{class:"export-btn success",onClick:k}," 💾 ذخیره گرید "),b("button",{class:"export-btn info",onClick:E}," 📂 بارگذاری اخرین ذخیره ")]),b("div",jS,[b("button",{class:"export-btn primary",onClick:y[12]||(y[12]=N=>G.$emit("update-grid",he()))}," 🚀 ارسال به 3D "),b("button",{class:"export-btn success",onClick:y[13]||(y[13]=()=>Ee())}," 📷 خروجی عکس "),b("button",{class:"export-btn info",onClick:y[14]||(y[14]=()=>Fe())}," 🖼️ خروجی HD "),b("button",{class:"export-btn warning",onClick:be}," 📄 خروجی TXT ")])])):Dt("",!0)])])):Dt("",!0),b("div",{class:Je(["mobile-dropdown-panel",{open:p.value}])},[b("div",qS,[b("div",YS,[b("div",KS,[b("label",ZS,[y[66]||(y[66]=b("span",{class:"upload-text"},"📁 آپلود فایل txt grid",-1)),b("input",{type:"file",accept:".txt",class:"upload-input",onChange:ue},null,32)]),b("label",QS,[y[67]||(y[67]=b("span",{class:"upload-text"},"📁 آپلود تصویر",-1)),b("input",{type:"file",accept:"image/*",class:"upload-input",onChange:Ve},null,32)])]),f.value?(ze(),$e("div",JS,[b("img",{src:f.value,alt:"تصویر انتخاب شده",class:"preview-image"},null,8,eM)])):Dt("",!0)]),b("div",tM,[y[83]||(y[83]=b("div",{class:"controls-header"},[b("h3",{class:"mb-4 text-lg font-bold text-gray-800"}," 🎨 ابزارهای طراحی ")],-1)),b("div",nM,[b("div",iM,[b("div",sM,[y[68]||(y[68]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 📐 ابعاد شبکه ",-1)),b("button",{class:Je(["pin-btn",{pinned:A.value==="dimensions"}]),title:A.value==="dimensions"?"Unpin Section":"Pin Section",onClick:y[15]||(y[15]=N=>w("dimensions"))},at((A.value==="dimensions","📌")),11,rM)]),b("div",oM,[b("label",aM,[y[69]||(y[69]=b("span",{class:"dimension-text"},"ستون ها:",-1)),Qt(b("input",{"onUpdate:modelValue":y[16]||(y[16]=N=>i.value=N),type:"number",min:"1",class:"dimension-input"},null,512),[[tn,i.value,void 0,{number:!0}]])]),b("label",lM,[y[70]||(y[70]=b("span",{class:"dimension-text"},"ردیف ها:",-1)),Qt(b("input",{"onUpdate:modelValue":y[17]||(y[17]=N=>s.value=N),type:"number",min:"1",class:"dimension-input"},null,512),[[tn,s.value,void 0,{number:!0}]])])]),b("div",cM,[y[73]||(y[73]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 📏 اندازه سلول ",-1)),b("div",uM,[b("label",dM,[y[71]||(y[71]=b("span",{class:"dimension-text"},"عرض:",-1)),Qt(b("input",{"onUpdate:modelValue":y[18]||(y[18]=N=>r.value=N),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[tn,r.value,void 0,{number:!0}]])]),b("label",fM,[y[72]||(y[72]=b("span",{class:"dimension-text"},"ارتفاع:",-1)),Qt(b("input",{"onUpdate:modelValue":y[19]||(y[19]=N=>o.value=N),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[tn,o.value,void 0,{number:!0}]])])])])]),b("div",hM,[b("div",pM,[y[74]||(y[74]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"🔄 جهت",-1)),b("button",{class:Je(["pin-btn",{pinned:A.value==="direction"}]),title:A.value==="direction"?"Unpin Section":"Pin Section",onClick:y[20]||(y[20]=N=>w("direction"))},at((A.value==="direction","📌")),11,mM)]),b("div",gM,[b("button",{class:Je(["direction-btn",{active:u.value}]),onClick:y[21]||(y[21]=N=>u.value=!u.value)},at(u.value?"عمودی":"افقی"),3)]),b("div",vM,[b("button",{class:Je(["direction-btn",{active:d.value}]),onClick:y[22]||(y[22]=N=>d.value=!d.value)},at(d.value?"گرید عمودی":"گرید افقی"),3)])]),b("div",_M,[b("div",bM,[y[75]||(y[75]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🎨 انتخاب رنگ ",-1)),b("button",{class:Je(["pin-btn",{pinned:A.value==="color"}]),title:A.value==="color"?"Unpin Section":"Pin Section",onClick:y[23]||(y[23]=N=>w("color"))},at((A.value==="color","📌")),11,xM)]),b("div",yM,[Qt(b("input",{"onUpdate:modelValue":y[24]||(y[24]=N=>a.value=N),type:"color",class:"color-picker"},null,512),[[tn,a.value]]),b("span",wM,at(a.value),1)]),b("div",SM,[y[76]||(y[76]=b("h4",{class:"text-sm font-semibold text-gray-700"}," 🔄 رنگ‌های اخیر ",-1)),l.value.length>0?(ze(),$e("button",{key:0,class:"clear-colors-btn",title:"پاک کردن تمام رنگ‌ها",onClick:F}," 🗑️ پاک کردن ")):Dt("",!0)]),b("div",MM,[(ze(!0),$e(Ht,null,Mn(l.value,N=>(ze(),$e("div",{key:N,class:"color-swatch",style:Xn({backgroundColor:N}),title:N,onClick:pe=>a.value=N},[b("button",{class:"remove-color-btn",onClick:So(pe=>x(N),["stop"])}," × ",8,TM)],12,EM))),128))])]),b("div",AM,[b("div",CM,[y[77]||(y[77]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🎨 حالت طراحی ",-1)),b("button",{class:Je(["pin-btn",{pinned:A.value==="mode"}]),title:A.value==="mode"?"Unpin Section":"Pin Section",onClick:y[25]||(y[25]=N=>w("mode"))},at((A.value==="mode","📌")),11,RM)]),b("div",PM,[b("button",{class:Je(["mode-btn",{active:h.value==="color"}]),onClick:y[26]||(y[26]=N=>h.value="color")}," 🎨 رنگ ",2),b("button",{class:Je(["mode-btn",{active:h.value==="image"}]),onClick:y[27]||(y[27]=N=>h.value="image")}," 🖼️ تصویر ",2)])]),h.value==="image"?(ze(),$e("div",DM,[b("div",LM,[y[78]||(y[78]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🖼️ انتخاب تصویر مهره ",-1)),b("button",{class:Je(["pin-btn",{pinned:A.value==="image"}]),title:A.value==="image"?"Unpin Section":"Pin Section",onClick:y[28]||(y[28]=N=>w("image"))},at((A.value==="image","📌")),11,IM)]),b("div",UM,[b("div",OM,[(ze(!0),$e(Ht,null,Mn(m.value,N=>{var pe;return ze(),$e("div",{key:N.name,class:Je(["image-item",{selected:((pe=v.value)==null?void 0:pe.url)===N.url}]),onClick:Ae=>de(N)},[b("img",{src:N.url,alt:N.displayName,class:"bead-image"},null,8,FM),b("span",kM,at(N.displayName),1)],10,NM)}),128))])]),g.value.length>0?(ze(),$e("div",BM,[b("div",{class:"recent-images-header"},[y[79]||(y[79]=b("h4",{class:"text-sm font-semibold text-gray-700"}," 🔄 تصاویر اخیر ",-1)),b("button",{class:"clear-images-btn",title:"پاک کردن تمام تصاویر",onClick:S}," 🗑️ پاک کردن ")]),b("div",HM,[(ze(!0),$e(Ht,null,Mn(g.value,N=>{var pe;return ze(),$e("div",{key:N.url,class:Je(["recent-image-item",{selected:((pe=v.value)==null?void 0:pe.url)===N.url}]),onClick:Ae=>de(N)},[b("img",{src:N.url,alt:N.displayName,class:"recent-bead-image"},null,8,VM),b("button",{class:"remove-image-btn",onClick:So(Ae=>Pe(N),["stop"])}," × ",8,GM)],10,zM)}),128))])])):Dt("",!0)])):Dt("",!0),b("div",WM,[b("div",$M,[y[80]||(y[80]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🛠️ ابزارها ",-1)),b("button",{class:Je(["pin-btn",{pinned:A.value==="tools"}]),title:A.value==="tools"?"Unpin Section":"Pin Section",onClick:y[29]||(y[29]=N=>w("tools"))},at((A.value==="tools","📌")),11,XM)]),b("div",jM,[b("button",{class:Je(["tool-btn primary",{active:te.value==="paint"}]),onClick:y[30]||(y[30]=N=>re("paint"))}," 🖌️ Paint ",2),b("button",{class:Je(["tool-btn primary",{active:te.value==="fill"}]),onClick:y[31]||(y[31]=N=>re("fill"))}," 🪣 Fill ",2),b("button",{class:Je(["tool-btn secondary",{active:te.value==="select"}]),onClick:y[32]||(y[32]=N=>re("select"))}," 📐 Select ",2),b("button",{class:"tool-btn secondary",onClick:ve}," 📋 Copy "),b("button",{class:"tool-btn secondary",onClick:De}," ✂️ Cut "),b("button",{class:"tool-btn secondary",onClick:Ie}," 📥 Paste "),b("button",{class:"tool-btn secondary",onClick:Ue}," 📍 Paste at Center "),b("button",{class:"tool-btn secondary",disabled:!me(),onClick:Te}," 🎯 Select Paste Position ",8,qM),Q.value?(ze(),$e("button",{key:0,class:"tool-btn danger",onClick:H}," ❌ Cancel Paste ")):Dt("",!0),b("button",{class:"tool-btn secondary",onClick:_e}," 🗑️ Clear Selection "),b("button",{class:"tool-btn secondary",disabled:L.value.length===0,onClick:Ce}," 🔄 Mirror Selection ",8,YM),b("button",{class:"tool-btn secondary",disabled:L.value.length===0,onClick:Be}," ↕️ Mirror Selection Vertical ",8,KM),b("button",{class:"tool-btn secondary",onClick:xe}," ↩️ Undo "),b("button",{class:"tool-btn secondary",onClick:B}," ↪️ Redo ")]),b("div",ZM,[y[81]||(y[81]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🎨 پس‌زمینه ",-1)),b("div",QM,[b("button",{class:Je(["mode-btn",{active:dt.value==="color"}]),onClick:y[33]||(y[33]=N=>dt.value="color")}," 🎨 رنگ ",2),b("button",{class:Je(["mode-btn",{active:dt.value==="image"}]),onClick:y[34]||(y[34]=N=>dt.value="image")}," 🖼️ تصویر ",2)]),dt.value==="color"?(ze(),$e("div",JM,[Qt(b("input",{"onUpdate:modelValue":y[35]||(y[35]=N=>tt.value=N),type:"color",class:"color-picker",title:"انتخاب رنگ پس‌زمینه"},null,512),[[tn,tt.value]]),b("button",{class:"tool-btn success",onClick:Pn}," 🎨 تغییر تمام مهره‌ها ")])):Dt("",!0),dt.value==="image"?(ze(),$e("div",eE,[b("div",tE,[b("div",nE,[(ze(!0),$e(Ht,null,Mn(m.value,N=>{var pe;return ze(),$e("div",{key:N.name,class:Je(["background-image-item",{selected:((pe=ft.value)==null?void 0:pe.url)===N.url}]),onClick:Ae=>ft.value=N},[b("img",{src:N.url,alt:N.displayName,class:"background-bead-image"},null,8,sE),b("span",rE,at(N.displayName),1)],10,iE)}),128))])]),b("button",{class:"tool-btn success",disabled:!ft.value,onClick:Pn}," 🖼️ تغییر تمام مهره‌ها ",8,oE)])):Dt("",!0)])]),b("div",aE,[b("div",lE,[y[82]||(y[82]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 📤 خروجی ",-1)),b("button",{class:Je(["pin-btn",{pinned:A.value==="export"}]),title:A.value==="export"?"Unpin Section":"Pin Section",onClick:y[36]||(y[36]=N=>w("export"))},at((A.value==="export","📌")),11,cE)]),b("div",{class:"save-load-buttons mb-3"},[b("button",{class:"export-btn success",onClick:k}," 💾 ذخیره گرید "),b("button",{class:"export-btn info",onClick:E}," 📂 بارگذاری اخرین ذخیره ")]),b("div",uE,[b("button",{class:"export-btn primary",onClick:y[37]||(y[37]=N=>G.$emit("update-grid",he()))}," 🚀 ارسال به 3D "),b("button",{class:"export-btn success",onClick:y[38]||(y[38]=()=>Ee())}," 📷 خروجی عکس "),b("button",{class:"export-btn info",onClick:y[39]||(y[39]=()=>Fe())}," 🖼️ خروجی HD "),b("button",{class:"export-btn warning",onClick:be}," 📄 خروجی TXT ")])])])])])],2),b("div",dE,[y[99]||(y[99]=b("div",{class:"controls-header"},[b("h3",{class:"mb-4 text-lg font-bold text-gray-800"},"🎨 ابزارهای طراحی")],-1)),b("div",fE,[b("div",hE,[y[89]||(y[89]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 📐 ابعاد شبکه ",-1)),b("div",pE,[b("label",mE,[y[84]||(y[84]=b("span",{class:"dimension-text"},"ستون ها:",-1)),Qt(b("input",{"onUpdate:modelValue":y[40]||(y[40]=N=>i.value=N),type:"number",min:"1",class:"dimension-input"},null,512),[[tn,i.value,void 0,{number:!0}]])]),b("label",gE,[y[85]||(y[85]=b("span",{class:"dimension-text"},"ردیف ها:",-1)),Qt(b("input",{"onUpdate:modelValue":y[41]||(y[41]=N=>s.value=N),type:"number",min:"1",class:"dimension-input"},null,512),[[tn,s.value,void 0,{number:!0}]])])]),b("div",vE,[y[88]||(y[88]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 📏 اندازه سلول ",-1)),b("div",_E,[b("label",bE,[y[86]||(y[86]=b("span",{class:"dimension-text"},"عرض:",-1)),Qt(b("input",{"onUpdate:modelValue":y[42]||(y[42]=N=>r.value=N),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[tn,r.value,void 0,{number:!0}]])]),b("label",xE,[y[87]||(y[87]=b("span",{class:"dimension-text"},"ارتفاع:",-1)),Qt(b("input",{"onUpdate:modelValue":y[43]||(y[43]=N=>o.value=N),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[tn,o.value,void 0,{number:!0}]])])])])]),b("div",yE,[y[90]||(y[90]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"🔄 جهت",-1)),b("div",wE,[b("button",{class:Je(["direction-btn",{active:u.value}]),onClick:y[44]||(y[44]=N=>u.value=!u.value)},at(u.value?"عمودی":"افقی"),3)]),b("div",SE,[b("button",{class:Je(["direction-btn",{active:d.value}]),onClick:y[45]||(y[45]=N=>d.value=!d.value)},at(d.value?"گرید عمودی":"گرید افقی"),3)])]),b("div",ME,[y[92]||(y[92]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🎨 انتخاب رنگ ",-1)),b("div",EE,[Qt(b("input",{"onUpdate:modelValue":y[46]||(y[46]=N=>a.value=N),type:"color",class:"color-picker"},null,512),[[tn,a.value]]),b("span",TE,at(a.value),1)]),b("div",AE,[y[91]||(y[91]=b("h4",{class:"text-sm font-semibold text-gray-700"},"🔄 رنگ‌های اخیر",-1)),l.value.length>0?(ze(),$e("button",{key:0,class:"clear-colors-btn",title:"پاک کردن تمام رنگ‌ها",onClick:F}," 🗑️ پاک کردن ")):Dt("",!0)]),b("div",CE,[(ze(!0),$e(Ht,null,Mn(l.value,N=>(ze(),$e("div",{key:N,class:"color-swatch",style:Xn({backgroundColor:N}),title:N,onClick:pe=>a.value=N},[b("button",{class:"remove-color-btn",onClick:So(pe=>x(N),["stop"])}," × ",8,PE)],12,RE))),128))])]),b("div",DE,[y[93]||(y[93]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🎨 حالت طراحی ",-1)),b("div",LE,[b("button",{class:Je(["mode-btn",{active:h.value==="color"}]),onClick:y[47]||(y[47]=N=>h.value="color")}," 🎨 رنگ ",2),b("button",{class:Je(["mode-btn",{active:h.value==="image"}]),onClick:y[48]||(y[48]=N=>h.value="image")}," 🖼️ تصویر ",2)])]),h.value==="image"?(ze(),$e("div",IE,[y[95]||(y[95]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🖼️ انتخاب تصویر مهره ",-1)),b("div",UE,[b("div",OE,[(ze(!0),$e(Ht,null,Mn(m.value,N=>{var pe;return ze(),$e("div",{key:N.name,class:Je(["image-item",{selected:((pe=v.value)==null?void 0:pe.url)===N.url}]),onClick:Ae=>de(N)},[b("img",{src:N.url,alt:N.displayName,class:"bead-image"},null,8,FE),b("span",kE,at(N.displayName),1)],10,NE)}),128))])]),g.value.length>0?(ze(),$e("div",BE,[b("div",{class:"recent-images-header"},[y[94]||(y[94]=b("h4",{class:"text-sm font-semibold text-gray-700"}," 🔄 تصاویر اخیر ",-1)),b("button",{class:"clear-images-btn",title:"پاک کردن تمام تصاویر",onClick:S}," 🗑️ پاک کردن ")]),b("div",HE,[(ze(!0),$e(Ht,null,Mn(g.value,N=>{var pe;return ze(),$e("div",{key:N.url,class:Je(["recent-image-item",{selected:((pe=v.value)==null?void 0:pe.url)===N.url}]),onClick:Ae=>de(N)},[b("img",{src:N.url,alt:N.displayName,class:"recent-bead-image"},null,8,VE),b("button",{class:"remove-image-btn",onClick:So(Ae=>Pe(N),["stop"])}," × ",8,GE)],10,zE)}),128))])])):Dt("",!0)])):Dt("",!0),b("div",WE,[y[97]||(y[97]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"🛠️ ابزارها",-1)),b("div",$E,[b("button",{class:Je(["tool-btn primary",{active:te.value==="paint"}]),onClick:y[49]||(y[49]=N=>re("paint"))}," 🖌️ Paint ",2),b("button",{class:Je(["tool-btn primary",{active:te.value==="fill"}]),onClick:y[50]||(y[50]=N=>re("fill"))}," 🪣 Fill ",2),b("button",{class:Je(["tool-btn secondary",{active:te.value==="select"}]),onClick:y[51]||(y[51]=N=>re("select"))}," 📐 Select ",2),b("button",{class:"tool-btn secondary",onClick:ve}," 📋 Copy "),b("button",{class:"tool-btn secondary",onClick:De}," ✂️ Cut "),b("button",{class:"tool-btn secondary",onClick:Ie}," 📥 Paste "),b("button",{class:"tool-btn secondary",onClick:Ue}," 📍 Paste at Center "),b("button",{class:"tool-btn secondary",disabled:!me(),onClick:Te}," 🎯 Select Paste Position ",8,XE),Q.value?(ze(),$e("button",{key:0,class:"tool-btn danger",onClick:H}," ❌ Cancel Paste ")):Dt("",!0),b("button",{class:"tool-btn secondary",onClick:_e}," 🗑️ Clear Selection "),b("button",{class:"tool-btn secondary",disabled:L.value.length===0,onClick:Ce}," 🔄 Mirror Selection ",8,jE),b("button",{class:"tool-btn secondary",disabled:L.value.length===0,onClick:Be}," ↕️ Mirror Selection Vertical ",8,qE),b("button",{class:"tool-btn secondary",onClick:xe}," ↩️ Undo "),b("button",{class:"tool-btn secondary",onClick:B}," ↪️ Redo ")]),b("div",YE,[y[96]||(y[96]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🎨 پس‌زمینه ",-1)),b("div",KE,[b("button",{class:Je(["mode-btn",{active:dt.value==="color"}]),onClick:y[52]||(y[52]=N=>dt.value="color")}," 🎨 رنگ ",2),b("button",{class:Je(["mode-btn",{active:dt.value==="image"}]),onClick:y[53]||(y[53]=N=>dt.value="image")}," 🖼️ تصویر ",2)]),dt.value==="color"?(ze(),$e("div",ZE,[Qt(b("input",{"onUpdate:modelValue":y[54]||(y[54]=N=>tt.value=N),type:"color",class:"color-picker",title:"انتخاب رنگ پس‌زمینه"},null,512),[[tn,tt.value]]),b("button",{class:"tool-btn success",onClick:Pn}," 🎨 تغییر تمام مهره‌ها ")])):Dt("",!0),dt.value==="image"?(ze(),$e("div",QE,[b("div",JE,[b("div",eT,[(ze(!0),$e(Ht,null,Mn(m.value,N=>{var pe;return ze(),$e("div",{key:N.name,class:Je(["background-image-item",{selected:((pe=ft.value)==null?void 0:pe.url)===N.url}]),onClick:Ae=>ft.value=N},[b("img",{src:N.url,alt:N.displayName,class:"background-bead-image"},null,8,nT),b("span",iT,at(N.displayName),1)],10,tT)}),128))])]),b("button",{class:"tool-btn success",disabled:!ft.value,onClick:Pn}," 🖼️ تغییر تمام مهره‌ها ",8,sT)])):Dt("",!0)])]),b("div",rT,[y[98]||(y[98]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"📤 خروجی",-1)),b("div",{class:"save-load-buttons mb-3"},[b("button",{class:"export-btn success",onClick:k}," 💾 ذخیره گرید "),b("button",{class:"export-btn info",onClick:E}," 📂 بارگذاری اخرین ذخیره ")]),b("div",oT,[b("button",{class:"export-btn primary",onClick:y[55]||(y[55]=N=>G.$emit("update-grid",he()))}," 🚀 ارسال به 3D "),b("button",{class:"export-btn success",onClick:y[56]||(y[56]=()=>Ee())}," 📷 خروجی عکس "),b("button",{class:"export-btn info",onClick:y[57]||(y[57]=()=>Fe())}," 🖼️ خروجی HD "),b("button",{class:"export-btn warning",onClick:be}," 📄 خروجی TXT ")])])])]),b("div",{class:Je(["grid-container max-md:min-h-[calc(100vh_-_310px)] md:max-h-[calc(100vh_-_200px)]",{"!flex-row":u.value,"!flex-col-reverse":!u.value,"pinned-active":A.value}])},[b("div",aT,[b("div",lT,[b("label",cT,[y[100]||(y[100]=b("span",{class:"upload-text"},"📁 آپلود فایل txt grid",-1)),b("input",{type:"file",accept:".txt",class:"upload-input",onChange:ue},null,32)]),b("label",uT,[y[101]||(y[101]=b("span",{class:"upload-text"},"📁 آپلود تصویر",-1)),b("input",{type:"file",accept:"image/*",class:"upload-input",onChange:Ve},null,32)])]),f.value?(ze(),$e("div",dT,[b("img",{src:f.value,alt:"تصویر انتخاب شده",class:"preview-image"},null,8,fT)])):Dt("",!0)]),b("div",{class:Je(["grid-wrapper",{"rotate-none":d.value,"z-10 h-fit! min-h-fit! w-fit! translate-x-[200%] translate-y-[10%] rotate-90":!d.value}])},[b("div",{class:"grid-item",style:Xn({gridTemplateColumns:`repeat(${i.value}, ${r.value}px)`,gridAutoRows:`${o.value}px`}),onMousedown:Ze,onMouseup:P,onMouseleave:P,onMousemove:_,onTouchstart:z,onTouchmove:j,onTouchend:ie,onTouchcancel:ie},[(ze(!0),$e(Ht,null,Mn(D.value,(N,pe)=>(ze(),$e("div",{key:pe,class:Je(["cell",{"!border-red-200":pe==Math.floor(i.value*s.value/2)}]),style:Xn({backgroundColor:N.startsWith("/miyuki-beads-designer/beads/")?"transparent":N,backgroundImage:N.startsWith("/miyuki-beads-designer/beads/")?`url(${N})`:"none",backgroundSize:"cover",backgroundPosition:"center",border:L.value.includes(pe)?"2px dashed #ff4757":"1px solid #ddd",width:`${r.value}px`,height:`${o.value}px`,minWidth:`${r.value}px`,minHeight:`${o.value}px`}),onClick:Ae=>Le(pe)},null,14,hT))),128))],36)],2)],2)]))}},mT=pa(pT,[["__scopeId","data-v-97c81e6d"]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gd="179",zr={ROTATE:0,DOLLY:1,PAN:2},Lr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gT=0,hh=1,vT=2,$g=1,_T=2,Wi=3,Rs=0,Fn=1,Ki=2,As=0,Vr=1,ph=2,mh=3,gh=4,bT=5,Xs=100,xT=101,yT=102,wT=103,ST=104,MT=200,ET=201,TT=202,AT=203,vu=204,_u=205,CT=206,RT=207,PT=208,DT=209,LT=210,IT=211,UT=212,OT=213,NT=214,bu=0,xu=1,yu=2,oo=3,wu=4,Su=5,Mu=6,Eu=7,Xg=0,FT=1,kT=2,Cs=0,BT=1,HT=2,zT=3,VT=4,GT=5,WT=6,$T=7,jg=300,ao=301,lo=302,Tu=303,Au=304,Zl=306,Cu=1e3,qs=1001,Ru=1002,gi=1003,XT=1004,La=1005,Ai=1006,xc=1007,Ys=1008,Oi=1009,qg=1010,Yg=1011,Jo=1012,Wd=1013,or=1014,Zi=1015,ya=1016,$d=1017,Xd=1018,ea=1020,Kg=35902,Zg=1021,Qg=1022,hi=1023,ta=1026,na=1027,Jg=1028,jd=1029,ev=1030,qd=1031,Yd=1033,al=33776,ll=33777,cl=33778,ul=33779,Pu=35840,Du=35841,Lu=35842,Iu=35843,Uu=36196,Ou=37492,Nu=37496,Fu=37808,ku=37809,Bu=37810,Hu=37811,zu=37812,Vu=37813,Gu=37814,Wu=37815,$u=37816,Xu=37817,ju=37818,qu=37819,Yu=37820,Ku=37821,dl=36492,Zu=36494,Qu=36495,tv=36283,Ju=36284,ed=36285,td=36286,jT=3200,qT=3201,nv=0,YT=1,vs="",On="srgb",co="srgb-linear",Ll="linear",Lt="srgb",mr=7680,vh=519,KT=512,ZT=513,QT=514,iv=515,JT=516,eA=517,tA=518,nA=519,_h=35044,bh="300 es",Ci=2e3,Il=2001;class fr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fl=Math.PI/180,nd=180/Math.PI;function wa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[t&255]+dn[t>>8&255]+dn[t>>16&255]+dn[t>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[n&63|128]+dn[n>>8&255]+"-"+dn[n>>16&255]+dn[n>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function gt(t,e,n){return Math.max(e,Math.min(n,t))}function iA(t,e){return(t%e+e)%e}function yc(t,e,n){return(1-n)*t+n*e}function Ao(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function In(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const sA={DEG2RAD:fl};class lt{constructor(e=0,n=0){lt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ar{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const f=r[o+0],h=r[o+1],v=r[o+2],g=r[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=h,e[n+2]=v,e[n+3]=g;return}if(d!==g||l!==f||c!==h||u!==v){let m=1-a;const p=l*f+c*h+u*v+d*g,A=p>=0?1:-1,C=1-p*p;if(C>Number.EPSILON){const U=Math.sqrt(C),I=Math.atan2(U,p*A);m=Math.sin(m*I)/U,a=Math.sin(a*I)/U}const w=a*A;if(l=l*m+f*w,c=c*m+h*w,u=u*m+v*w,d=d*m+g*w,m===1-a){const U=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=U,c*=U,u*=U,d*=U}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],h=r[o+2],v=r[o+3];return e[n]=a*v+u*d+l*h-c*f,e[n+1]=l*v+u*f+c*d-a*h,e[n+2]=c*v+u*h+a*f-l*d,e[n+3]=u*v-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),h=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*h*v,this._y=c*h*d-f*u*v,this._z=c*u*v+f*h*d,this._w=c*u*d-f*h*v;break;case"YXZ":this._x=f*u*d+c*h*v,this._y=c*h*d-f*u*v,this._z=c*u*v-f*h*d,this._w=c*u*d+f*h*v;break;case"ZXY":this._x=f*u*d-c*h*v,this._y=c*h*d+f*u*v,this._z=c*u*v+f*h*d,this._w=c*u*d-f*h*v;break;case"ZYX":this._x=f*u*d-c*h*v,this._y=c*h*d+f*u*v,this._z=c*u*v-f*h*d,this._w=c*u*d+f*h*v;break;case"YZX":this._x=f*u*d+c*h*v,this._y=c*h*d+f*u*v,this._z=c*u*v-f*h*d,this._w=c*u*d-f*h*v;break;case"XZY":this._x=f*u*d-c*h*v,this._y=c*h*d-f*u*v,this._z=c*u*v+f*h*d,this._w=c*u*d+f*h*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-n;return this._w=h*o+n*this._w,this._x=h*i+n*this._x,this._y=h*s+n*this._y,this._z=h*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,n=0,i=0){Z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(xh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(xh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),d=2*(r*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wc.copy(this).projectOnVector(e),this.sub(wc)}reflect(e){return this.sub(wc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wc=new Z,xh=new ar;class pt{constructor(e,n,i,s,r,o,a,l,c){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],v=i[8],g=s[0],m=s[3],p=s[6],A=s[1],C=s[4],w=s[7],U=s[2],I=s[5],D=s[8];return r[0]=o*g+a*A+l*U,r[3]=o*m+a*C+l*I,r[6]=o*p+a*w+l*D,r[1]=c*g+u*A+d*U,r[4]=c*m+u*C+d*I,r[7]=c*p+u*w+d*D,r[2]=f*g+h*A+v*U,r[5]=f*m+h*C+v*I,r[8]=f*p+h*w+v*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*r,h=c*r-o*l,v=n*d+i*f+s*h;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=d*g,e[1]=(s*c-u*i)*g,e[2]=(a*i-s*o)*g,e[3]=f*g,e[4]=(u*n-s*l)*g,e[5]=(s*r-a*n)*g,e[6]=h*g,e[7]=(i*l-c*n)*g,e[8]=(o*n-i*r)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Sc.makeScale(e,n)),this}rotate(e){return this.premultiply(Sc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Sc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sc=new pt;function sv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ia(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function rA(){const t=ia("canvas");return t.style.display="block",t}const yh={};function Gr(t){t in yh||(yh[t]=!0,console.warn(t))}function oA(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const wh=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sh=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aA(){const t={enabled:!0,workingColorSpace:co,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Lt&&(s.r=ts(s.r),s.g=ts(s.g),s.b=ts(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Lt&&(s.r=Wr(s.r),s.g=Wr(s.g),s.b=Wr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vs?Ll:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Gr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Gr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[co]:{primaries:e,whitePoint:i,transfer:Ll,toXYZ:wh,fromXYZ:Sh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:e,whitePoint:i,transfer:Lt,toXYZ:wh,fromXYZ:Sh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),t}const Mt=aA();function ts(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Wr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let gr;class lA{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{gr===void 0&&(gr=ia("canvas")),gr.width=e.width,gr.height=e.height;const s=gr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=gr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ia("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ts(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ts(n[i]/255)*255):n[i]=ts(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cA=0;class Kd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cA++}),this.uuid=wa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Mc(s[o].image)):r.push(Mc(s[o]))}else r=Mc(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Mc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?lA.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uA=0;const Ec=new Z;class An extends fr{constructor(e=An.DEFAULT_IMAGE,n=An.DEFAULT_MAPPING,i=qs,s=qs,r=Ai,o=Ys,a=hi,l=Oi,c=An.DEFAULT_ANISOTROPY,u=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uA++}),this.uuid=wa(),this.name="",this.source=new Kd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ec).x}get height(){return this.source.getSize(Ec).y}get depth(){return this.source.getSize(Ec).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cu:e.x=e.x-Math.floor(e.x);break;case qs:e.x=e.x<0?0:1;break;case Ru:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cu:e.y=e.y-Math.floor(e.y);break;case qs:e.y=e.y<0?0:1;break;case Ru:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=jg;An.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,n=0,i=0,s=1){jt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],v=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const C=(c+1)/2,w=(h+1)/2,U=(p+1)/2,I=(u+f)/4,D=(d+g)/4,k=(v+m)/4;return C>w&&C>U?C<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(C),s=I/i,r=D/i):w>U?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=I/s,r=k/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=D/r,s=k/r),this.set(i,s,r,n),this}let A=Math.sqrt((m-v)*(m-v)+(d-g)*(d-g)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(m-v)/A,this.y=(d-g)/A,this.z=(f-u)/A,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this.w=gt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this.w=gt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dA extends fr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new jt(0,0,e,n),this.scissorTest=!1,this.viewport=new jt(0,0,e,n);const s={width:e,height:n,depth:i.depth},r=new An(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Ai,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new Kd(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lr extends dA{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class rv extends An{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=gi,this.minFilter=gi,this.wrapR=qs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fA extends An{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=gi,this.minFilter=gi,this.wrapR=qs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sa{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(oi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(oi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=oi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,oi):oi.fromBufferAttribute(r,o),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ia.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ia.copy(i.boundingBox)),Ia.applyMatrix4(e.matrixWorld),this.union(Ia)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),Ua.subVectors(this.max,Co),vr.subVectors(e.a,Co),_r.subVectors(e.b,Co),br.subVectors(e.c,Co),rs.subVectors(_r,vr),os.subVectors(br,_r),ks.subVectors(vr,br);let n=[0,-rs.z,rs.y,0,-os.z,os.y,0,-ks.z,ks.y,rs.z,0,-rs.x,os.z,0,-os.x,ks.z,0,-ks.x,-rs.y,rs.x,0,-os.y,os.x,0,-ks.y,ks.x,0];return!Tc(n,vr,_r,br,Ua)||(n=[1,0,0,0,1,0,0,0,1],!Tc(n,vr,_r,br,Ua))?!1:(Oa.crossVectors(rs,os),n=[Oa.x,Oa.y,Oa.z],Tc(n,vr,_r,br,Ua))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Bi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],oi=new Z,Ia=new Sa,vr=new Z,_r=new Z,br=new Z,rs=new Z,os=new Z,ks=new Z,Co=new Z,Ua=new Z,Oa=new Z,Bs=new Z;function Tc(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){Bs.fromArray(t,r);const a=s.x*Math.abs(Bs.x)+s.y*Math.abs(Bs.y)+s.z*Math.abs(Bs.z),l=e.dot(Bs),c=n.dot(Bs),u=i.dot(Bs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const hA=new Sa,Ro=new Z,Ac=new Z;class Zd{constructor(e=new Z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):hA.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const n=Ro.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Ro,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ac.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(Ac)),this.expandByPoint(Ro.copy(e.center).sub(Ac))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Hi=new Z,Cc=new Z,Na=new Z,as=new Z,Rc=new Z,Fa=new Z,Pc=new Z;class ov{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Hi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,n),Hi.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Cc.copy(e).add(n).multiplyScalar(.5),Na.copy(n).sub(e).normalize(),as.copy(this.origin).sub(Cc);const r=e.distanceTo(n)*.5,o=-this.direction.dot(Na),a=as.dot(this.direction),l=-as.dot(Na),c=as.lengthSq(),u=Math.abs(1-o*o);let d,f,h,v;if(u>0)if(d=o*l-a,f=o*a-l,v=r*u,d>=0)if(f>=-v)if(f<=v){const g=1/u;d*=g,f*=g,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Cc).addScaledVector(Na,f),h}intersectSphere(e,n){Hi.subVectors(e.center,this.origin);const i=Hi.dot(this.direction),s=Hi.dot(Hi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,n,i,s,r){Rc.subVectors(n,e),Fa.subVectors(i,e),Pc.crossVectors(Rc,Fa);let o=this.direction.dot(Pc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;as.subVectors(this.origin,e);const l=a*this.direction.dot(Fa.crossVectors(as,Fa));if(l<0)return null;const c=a*this.direction.dot(Rc.cross(as));if(c<0||l+c>o)return null;const u=-a*as.dot(Pc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(e,n,i,s,r,o,a,l,c,u,d,f,h,v,g,m){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,d,f,h,v,g,m)}set(e,n,i,s,r,o,a,l,c,u,d,f,h,v,g,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/xr.setFromMatrixColumn(e,0).length(),r=1/xr.setFromMatrixColumn(e,1).length(),o=1/xr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,h=o*d,v=a*u,g=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=h+v*c,n[5]=f-g*c,n[9]=-a*l,n[2]=g-f*c,n[6]=v+h*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,v=c*u,g=c*d;n[0]=f+g*a,n[4]=v*a-h,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=h*a-v,n[6]=g+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,v=c*u,g=c*d;n[0]=f-g*a,n[4]=-o*d,n[8]=v+h*a,n[1]=h+v*a,n[5]=o*u,n[9]=g-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,h=o*d,v=a*u,g=a*d;n[0]=l*u,n[4]=v*c-h,n[8]=f*c+g,n[1]=l*d,n[5]=g*c+f,n[9]=h*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*c,v=a*l,g=a*c;n[0]=l*u,n[4]=g-f*d,n[8]=v*d+h,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*d+v,n[10]=f-g*d}else if(e.order==="XZY"){const f=o*l,h=o*c,v=a*l,g=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+g,n[5]=o*u,n[9]=h*d-v,n[2]=v*d-h,n[6]=a*u,n[10]=g*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pA,e,mA)}lookAt(e,n,i){const s=this.elements;return zn.subVectors(e,n),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),ls.crossVectors(i,zn),ls.lengthSq()===0&&(Math.abs(i.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),ls.crossVectors(i,zn)),ls.normalize(),ka.crossVectors(zn,ls),s[0]=ls.x,s[4]=ka.x,s[8]=zn.x,s[1]=ls.y,s[5]=ka.y,s[9]=zn.y,s[2]=ls.z,s[6]=ka.z,s[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],v=i[2],g=i[6],m=i[10],p=i[14],A=i[3],C=i[7],w=i[11],U=i[15],I=s[0],D=s[4],k=s[8],E=s[12],T=s[1],R=s[5],L=s[9],O=s[13],V=s[2],ae=s[6],Q=s[10],te=s[14],q=s[3],we=s[7],Me=s[11],Ne=s[15];return r[0]=o*I+a*T+l*V+c*q,r[4]=o*D+a*R+l*ae+c*we,r[8]=o*k+a*L+l*Q+c*Me,r[12]=o*E+a*O+l*te+c*Ne,r[1]=u*I+d*T+f*V+h*q,r[5]=u*D+d*R+f*ae+h*we,r[9]=u*k+d*L+f*Q+h*Me,r[13]=u*E+d*O+f*te+h*Ne,r[2]=v*I+g*T+m*V+p*q,r[6]=v*D+g*R+m*ae+p*we,r[10]=v*k+g*L+m*Q+p*Me,r[14]=v*E+g*O+m*te+p*Ne,r[3]=A*I+C*T+w*V+U*q,r[7]=A*D+C*R+w*ae+U*we,r[11]=A*k+C*L+w*Q+U*Me,r[15]=A*E+C*O+w*te+U*Ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],v=e[3],g=e[7],m=e[11],p=e[15];return v*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*h-i*l*h)+g*(+n*l*h-n*c*f+r*o*f-s*o*h+s*c*u-r*l*u)+m*(+n*c*d-n*a*h-r*o*d+i*o*h+r*a*u-i*c*u)+p*(-s*a*u-n*l*d+n*a*f+s*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],v=e[12],g=e[13],m=e[14],p=e[15],A=d*m*c-g*f*c+g*l*h-a*m*h-d*l*p+a*f*p,C=v*f*c-u*m*c-v*l*h+o*m*h+u*l*p-o*f*p,w=u*g*c-v*d*c+v*a*h-o*g*h-u*a*p+o*d*p,U=v*d*l-u*g*l-v*a*f+o*g*f+u*a*m-o*d*m,I=n*A+i*C+s*w+r*U;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/I;return e[0]=A*D,e[1]=(g*f*r-d*m*r-g*s*h+i*m*h+d*s*p-i*f*p)*D,e[2]=(a*m*r-g*l*r+g*s*c-i*m*c-a*s*p+i*l*p)*D,e[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*h-i*l*h)*D,e[4]=C*D,e[5]=(u*m*r-v*f*r+v*s*h-n*m*h-u*s*p+n*f*p)*D,e[6]=(v*l*r-o*m*r-v*s*c+n*m*c+o*s*p-n*l*p)*D,e[7]=(o*f*r-u*l*r+u*s*c-n*f*c-o*s*h+n*l*h)*D,e[8]=w*D,e[9]=(v*d*r-u*g*r-v*i*h+n*g*h+u*i*p-n*d*p)*D,e[10]=(o*g*r-v*a*r+v*i*c-n*g*c-o*i*p+n*a*p)*D,e[11]=(u*a*r-o*d*r-u*i*c+n*d*c+o*i*h-n*a*h)*D,e[12]=U*D,e[13]=(u*g*s-v*d*s+v*i*f-n*g*f-u*i*m+n*d*m)*D,e[14]=(v*a*s-o*g*s-v*i*l+n*g*l+o*i*m-n*a*m)*D,e[15]=(o*d*s-u*a*s+u*i*l-n*d*l-o*i*f+n*a*f)*D,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,d=a+a,f=r*c,h=r*u,v=r*d,g=o*u,m=o*d,p=a*d,A=l*c,C=l*u,w=l*d,U=i.x,I=i.y,D=i.z;return s[0]=(1-(g+p))*U,s[1]=(h+w)*U,s[2]=(v-C)*U,s[3]=0,s[4]=(h-w)*I,s[5]=(1-(f+p))*I,s[6]=(m+A)*I,s[7]=0,s[8]=(v+C)*D,s[9]=(m-A)*D,s[10]=(1-(f+g))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let r=xr.set(s[0],s[1],s[2]).length();const o=xr.set(s[4],s[5],s[6]).length(),a=xr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ai.copy(this);const c=1/r,u=1/o,d=1/a;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=u,ai.elements[5]*=u,ai.elements[6]*=u,ai.elements[8]*=d,ai.elements[9]*=d,ai.elements[10]*=d,n.setFromRotationMatrix(ai),i.x=r,i.y=o,i.z=a,this}makePerspective(e,n,i,s,r,o,a=Ci,l=!1){const c=this.elements,u=2*r/(n-e),d=2*r/(i-s),f=(n+e)/(n-e),h=(i+s)/(i-s);let v,g;if(l)v=r/(o-r),g=o*r/(o-r);else if(a===Ci)v=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Il)v=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=Ci,l=!1){const c=this.elements,u=2/(n-e),d=2/(i-s),f=-(n+e)/(n-e),h=-(i+s)/(i-s);let v,g;if(l)v=1/(o-r),g=o/(o-r);else if(a===Ci)v=-2/(o-r),g=-(o+r)/(o-r);else if(a===Il)v=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=v,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const xr=new Z,ai=new Yt,pA=new Z(0,0,0),mA=new Z(1,1,1),ls=new Z,ka=new Z,zn=new Z,Mh=new Yt,Eh=new ar;class Ni{constructor(e=0,n=0,i=0,s=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(n){case"XYZ":this._y=Math.asin(gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Mh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Eh.setFromEuler(this),this.setFromQuaternion(Eh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class av{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gA=0;const Th=new Z,yr=new ar,zi=new Yt,Ba=new Z,Po=new Z,vA=new Z,_A=new ar,Ah=new Z(1,0,0),Ch=new Z(0,1,0),Rh=new Z(0,0,1),Ph={type:"added"},bA={type:"removed"},wr={type:"childadded",child:null},Dc={type:"childremoved",child:null};class vn extends fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gA++}),this.uuid=wa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new Z,n=new Ni,i=new ar,s=new Z(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Yt},normalMatrix:{value:new pt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new av,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return yr.setFromAxisAngle(e,n),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,n){return yr.setFromAxisAngle(e,n),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(Ah,e)}rotateY(e){return this.rotateOnAxis(Ch,e)}rotateZ(e){return this.rotateOnAxis(Rh,e)}translateOnAxis(e,n){return Th.copy(e).applyQuaternion(this.quaternion),this.position.add(Th.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ah,e)}translateY(e){return this.translateOnAxis(Ch,e)}translateZ(e){return this.translateOnAxis(Rh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ba.copy(e):Ba.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(Po,Ba,this.up):zi.lookAt(Ba,Po,this.up),this.quaternion.setFromRotationMatrix(zi),s&&(zi.extractRotation(s.matrixWorld),yr.setFromRotationMatrix(zi),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ph),wr.child=e,this.dispatchEvent(wr),wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(bA),Dc.child=e,this.dispatchEvent(Dc),Dc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ph),wr.child=e,this.dispatchEvent(wr),wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,e,vA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,_A,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}vn.DEFAULT_UP=new Z(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new Z,Vi=new Z,Lc=new Z,Gi=new Z,Sr=new Z,Mr=new Z,Dh=new Z,Ic=new Z,Uc=new Z,Oc=new Z,Nc=new jt,Fc=new jt,kc=new jt;class fi{constructor(e=new Z,n=new Z,i=new Z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),li.subVectors(e,n),s.cross(li);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){li.subVectors(s,n),Vi.subVectors(i,n),Lc.subVectors(e,n);const o=li.dot(li),a=li.dot(Vi),l=li.dot(Lc),c=Vi.dot(Vi),u=Vi.dot(Lc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,v=(o*u-a*l)*f;return r.set(1-h-v,v,h)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,Gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gi.x),l.addScaledVector(o,Gi.y),l.addScaledVector(a,Gi.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return Nc.setScalar(0),Fc.setScalar(0),kc.setScalar(0),Nc.fromBufferAttribute(e,n),Fc.fromBufferAttribute(e,i),kc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Nc,r.x),o.addScaledVector(Fc,r.y),o.addScaledVector(kc,r.z),o}static isFrontFacing(e,n,i,s){return li.subVectors(i,n),Vi.subVectors(e,n),li.cross(Vi).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),li.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return fi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return fi.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;Sr.subVectors(s,i),Mr.subVectors(r,i),Ic.subVectors(e,i);const l=Sr.dot(Ic),c=Mr.dot(Ic);if(l<=0&&c<=0)return n.copy(i);Uc.subVectors(e,s);const u=Sr.dot(Uc),d=Mr.dot(Uc);if(u>=0&&d<=u)return n.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Sr,o);Oc.subVectors(e,r);const h=Sr.dot(Oc),v=Mr.dot(Oc);if(v>=0&&h<=v)return n.copy(r);const g=h*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(Mr,a);const m=u*v-h*d;if(m<=0&&d-u>=0&&h-v>=0)return Dh.subVectors(r,s),a=(d-u)/(d-u+(h-v)),n.copy(s).addScaledVector(Dh,a);const p=1/(m+g+f);return o=g*p,a=f*p,n.copy(i).addScaledVector(Sr,o).addScaledVector(Mr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},Ha={h:0,s:0,l:0};function Bc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class vt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=Mt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Mt.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=Mt.workingColorSpace){if(e=iA(e,1),n=gt(n,0,1),i=gt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Bc(o,r,e+1/3),this.g=Bc(o,r,e),this.b=Bc(o,r,e-1/3)}return Mt.colorSpaceToWorking(this,s),this}setStyle(e,n=On){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=On){const i=lv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}copyLinearToSRGB(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return Mt.workingToColorSpace(fn.copy(this),e),Math.round(gt(fn.r*255,0,255))*65536+Math.round(gt(fn.g*255,0,255))*256+Math.round(gt(fn.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Mt.workingColorSpace){Mt.workingToColorSpace(fn.copy(this),n);const i=fn.r,s=fn.g,r=fn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Mt.workingColorSpace){return Mt.workingToColorSpace(fn.copy(this),n),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=On){Mt.workingToColorSpace(fn.copy(this),e);const n=fn.r,i=fn.g,s=fn.b;return e!==On?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(cs),this.setHSL(cs.h+e,cs.s+n,cs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(cs),e.getHSL(Ha);const i=yc(cs.h,Ha.h,n),s=yc(cs.s,Ha.s,n),r=yc(cs.l,Ha.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new vt;vt.NAMES=lv;let xA=0;class Ma extends fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xA++}),this.uuid=wa(),this.name="",this.type="Material",this.blending=Vr,this.side=Rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vu,this.blendDst=_u,this.blendEquation=Xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mr,this.stencilZFail=mr,this.stencilZPass=mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(i.blending=this.blending),this.side!==Rs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vu&&(i.blendSrc=this.blendSrc),this.blendDst!==_u&&(i.blendDst=this.blendDst),this.blendEquation!==Xs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==oo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==mr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==mr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cv extends Ma{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Xg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new Z,za=new lt;let yA=0;class Pi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yA++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=_h,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)za.fromBufferAttribute(this,n),za.applyMatrix3(e),this.setXY(n,za.x,za.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix3(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix4(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.applyNormalMatrix(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.transformDirection(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ao(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ao(n,this.array)),n}setX(e,n){return this.normalized&&(n=In(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ao(n,this.array)),n}setY(e,n){return this.normalized&&(n=In(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ao(n,this.array)),n}setZ(e,n){return this.normalized&&(n=In(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ao(n,this.array)),n}setW(e,n){return this.normalized&&(n=In(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=In(n,this.array),i=In(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=In(n,this.array),i=In(i,this.array),s=In(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=In(n,this.array),i=In(i,this.array),s=In(s,this.array),r=In(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_h&&(e.usage=this.usage),e}}class uv extends Pi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class dv extends Pi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Di extends Pi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let wA=0;const ti=new Yt,Hc=new vn,Er=new Z,Vn=new Sa,Do=new Sa,on=new Z;class Is extends fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wA++}),this.uuid=wa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sv(e)?dv:uv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new pt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,n,i){return ti.makeTranslation(e,n,i),this.applyMatrix4(ti),this}scale(e,n,i){return ti.makeScale(e,n,i),this.applyMatrix4(ti),this}lookAt(e){return Hc.lookAt(e),Hc.updateMatrix(),this.applyMatrix4(Hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Di(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Vn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Do.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Vn.min,Do.min),Vn.expandByPoint(on),on.addVectors(Vn.max,Do.max),Vn.expandByPoint(on)):(Vn.expandByPoint(Do.min),Vn.expandByPoint(Do.max))}Vn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)on.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(on));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)on.fromBufferAttribute(a,c),l&&(Er.fromBufferAttribute(e,c),on.add(Er)),s=Math.max(s,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let k=0;k<i.count;k++)a[k]=new Z,l[k]=new Z;const c=new Z,u=new Z,d=new Z,f=new lt,h=new lt,v=new lt,g=new Z,m=new Z;function p(k,E,T){c.fromBufferAttribute(i,k),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,T),f.fromBufferAttribute(r,k),h.fromBufferAttribute(r,E),v.fromBufferAttribute(r,T),u.sub(c),d.sub(c),h.sub(f),v.sub(f);const R=1/(h.x*v.y-v.x*h.y);isFinite(R)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(d,-h.y).multiplyScalar(R),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-v.x).multiplyScalar(R),a[k].add(g),a[E].add(g),a[T].add(g),l[k].add(m),l[E].add(m),l[T].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let k=0,E=A.length;k<E;++k){const T=A[k],R=T.start,L=T.count;for(let O=R,V=R+L;O<V;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const C=new Z,w=new Z,U=new Z,I=new Z;function D(k){U.fromBufferAttribute(s,k),I.copy(U);const E=a[k];C.copy(E),C.sub(U.multiplyScalar(U.dot(E))).normalize(),w.crossVectors(I,E);const R=w.dot(l[k])<0?-1:1;o.setXYZW(k,C.x,C.y,C.z,R)}for(let k=0,E=A.length;k<E;++k){const T=A[k],R=T.start,L=T.count;for(let O=R,V=R+L;O<V;O+=3)D(e.getX(O+0)),D(e.getX(O+1)),D(e.getX(O+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const s=new Z,r=new Z,o=new Z,a=new Z,l=new Z,c=new Z,u=new Z,d=new Z;if(e)for(let f=0,h=e.count;f<h;f+=3){const v=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(n,v),r.fromBufferAttribute(n,g),o.fromBufferAttribute(n,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=n.count;f<h;f+=3)s.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)on.fromBufferAttribute(e,n),on.normalize(),e.setXYZ(n,on.x,on.y,on.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,v=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?h=l[g]*a.data.stride+a.offset:h=l[g]*u;for(let p=0;p<u;p++)f[v++]=c[h++]}return new Pi(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Is,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lh=new Yt,Hs=new ov,Va=new Zd,Ih=new Z,Ga=new Z,Wa=new Z,$a=new Z,zc=new Z,Xa=new Z,Uh=new Z,ja=new Z;class pi extends vn{constructor(e=new Is,n=new cv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Xa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(zc.fromBufferAttribute(d,e),o?Xa.addScaledVector(zc,u):Xa.addScaledVector(zc.sub(n),u))}n.add(Xa)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(r),Hs.copy(e.ray).recast(e.near),!(Va.containsPoint(Hs.origin)===!1&&(Hs.intersectSphere(Va,Ih)===null||Hs.origin.distanceToSquared(Ih)>(e.far-e.near)**2))&&(Lh.copy(r).invert(),Hs.copy(e.ray).applyMatrix4(Lh),!(i.boundingBox!==null&&Hs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Hs)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=f.length;v<g;v++){const m=f[v],p=o[m.materialIndex],A=Math.max(m.start,h.start),C=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let w=A,U=C;w<U;w+=3){const I=a.getX(w),D=a.getX(w+1),k=a.getX(w+2);s=qa(this,p,e,i,c,u,d,I,D,k),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const v=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let m=v,p=g;m<p;m+=3){const A=a.getX(m),C=a.getX(m+1),w=a.getX(m+2);s=qa(this,o,e,i,c,u,d,A,C,w),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=f.length;v<g;v++){const m=f[v],p=o[m.materialIndex],A=Math.max(m.start,h.start),C=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let w=A,U=C;w<U;w+=3){const I=w,D=w+1,k=w+2;s=qa(this,p,e,i,c,u,d,I,D,k),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const v=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let m=v,p=g;m<p;m+=3){const A=m,C=m+1,w=m+2;s=qa(this,o,e,i,c,u,d,A,C,w),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function SA(t,e,n,i,s,r,o,a){let l;if(e.side===Fn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Rs,a),l===null)return null;ja.copy(a),ja.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ja);return c<n.near||c>n.far?null:{distance:c,point:ja.clone(),object:t}}function qa(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,Ga),t.getVertexPosition(l,Wa),t.getVertexPosition(c,$a);const u=SA(t,e,n,i,Ga,Wa,$a,Uh);if(u){const d=new Z;fi.getBarycoord(Uh,Ga,Wa,$a,d),s&&(u.uv=fi.getInterpolatedAttribute(s,a,l,c,d,new lt)),r&&(u.uv1=fi.getInterpolatedAttribute(r,a,l,c,d,new lt)),o&&(u.normal=fi.getInterpolatedAttribute(o,a,l,c,d,new Z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new Z,materialIndex:0};fi.getNormal(Ga,Wa,$a,f.normal),u.face=f,u.barycoord=d}return u}class Ea extends Is{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;v("z","y","x",-1,-1,i,n,e,o,r,0),v("z","y","x",1,-1,i,n,-e,o,r,1),v("x","z","y",1,1,e,i,n,s,o,2),v("x","z","y",1,-1,e,i,-n,s,o,3),v("x","y","z",1,-1,e,n,i,s,r,4),v("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Di(c,3)),this.setAttribute("normal",new Di(u,3)),this.setAttribute("uv",new Di(d,2));function v(g,m,p,A,C,w,U,I,D,k,E){const T=w/D,R=U/k,L=w/2,O=U/2,V=I/2,ae=D+1,Q=k+1;let te=0,q=0;const we=new Z;for(let Me=0;Me<Q;Me++){const Ne=Me*R-O;for(let Ge=0;Ge<ae;Ge++){const bt=Ge*T-L;we[g]=bt*A,we[m]=Ne*C,we[p]=V,c.push(we.x,we.y,we.z),we[g]=0,we[m]=0,we[p]=I>0?1:-1,u.push(we.x,we.y,we.z),d.push(Ge/D),d.push(1-Me/k),te+=1}}for(let Me=0;Me<k;Me++)for(let Ne=0;Ne<D;Ne++){const Ge=f+Ne+ae*Me,bt=f+Ne+ae*(Me+1),Ke=f+(Ne+1)+ae*(Me+1),ne=f+(Ne+1)+ae*Me;l.push(Ge,bt,ne),l.push(bt,Ke,ne),q+=6}a.addGroup(h,q,E),h+=q,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ea(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function uo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function wn(t){const e={};for(let n=0;n<t.length;n++){const i=uo(t[n]);for(const s in i)e[s]=i[s]}return e}function MA(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function fv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const EA={clone:uo,merge:wn};var TA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ps extends Ma{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TA,this.fragmentShader=AA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=uo(e.uniforms),this.uniformsGroups=MA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class hv extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const us=new Z,Oh=new lt,Nh=new lt;class $n extends hv{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=nd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nd*2*Math.atan(Math.tan(fl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,n){return this.getViewBounds(e,Oh,Nh),n.subVectors(Nh,Oh)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(fl*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Tr=-90,Ar=1;class CA extends vn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new $n(Tr,Ar,e,n);s.layers=this.layers,this.add(s);const r=new $n(Tr,Ar,e,n);r.layers=this.layers,this.add(r);const o=new $n(Tr,Ar,e,n);o.layers=this.layers,this.add(o);const a=new $n(Tr,Ar,e,n);a.layers=this.layers,this.add(a);const l=new $n(Tr,Ar,e,n);l.layers=this.layers,this.add(l);const c=new $n(Tr,Ar,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Il)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,o),e.setRenderTarget(i,2,s),e.render(n,a),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),e.render(n,u),e.setRenderTarget(d,f,h),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class pv extends An{constructor(e=[],n=ao,i,s,r,o,a,l,c,u){super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class RA extends lr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new pv(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ea(5,5,5),r=new Ps({name:"CubemapFromEquirect",uniforms:uo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fn,blending:As});r.uniforms.tEquirect.value=n;const o=new pi(s,r),a=n.minFilter;return n.minFilter===Ys&&(n.minFilter=Ai),new CA(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}class Ya extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PA={type:"move"};class Vc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ya,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ya,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ya,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=n.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,v=.005;c.inputState.pinching&&f>h+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(PA)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ya;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class mv extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Gc=new Z,DA=new Z,LA=new pt;class ms{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=Gc.subVectors(i,n).cross(DA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Gc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||LA.getNormalMatrix(e),s=this.coplanarPoint(Gc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zs=new Zd,IA=new lt(.5,.5),Ka=new Z;class Qd{constructor(e=new ms,n=new ms,i=new ms,s=new ms,r=new ms,o=new ms){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ci,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],f=r[6],h=r[7],v=r[8],g=r[9],m=r[10],p=r[11],A=r[12],C=r[13],w=r[14],U=r[15];if(s[0].setComponents(c-o,h-u,p-v,U-A).normalize(),s[1].setComponents(c+o,h+u,p+v,U+A).normalize(),s[2].setComponents(c+a,h+d,p+g,U+C).normalize(),s[3].setComponents(c-a,h-d,p-g,U-C).normalize(),i)s[4].setComponents(l,f,m,w).normalize(),s[5].setComponents(c-l,h-f,p-m,U-w).normalize();else if(s[4].setComponents(c-l,h-f,p-m,U-w).normalize(),n===Ci)s[5].setComponents(c+l,h+f,p+m,U+w).normalize();else if(n===Il)s[5].setComponents(l,f,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(e){zs.center.set(0,0,0);const n=IA.distanceTo(e.center);return zs.radius=.7071067811865476+n,zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Ka.x=s.normal.x>0?e.max.x:e.min.x,Ka.y=s.normal.y>0?e.max.y:e.min.y,Ka.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gv extends An{constructor(e,n,i=or,s,r,o,a=gi,l=gi,c,u=ta,d=1){if(u!==ta&&u!==na)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Ql extends Is{constructor(e=1,n=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],f=[],h=[];let v=0;const g=[],m=i/2;let p=0;A(),o===!1&&(e>0&&C(!0),n>0&&C(!1)),this.setIndex(u),this.setAttribute("position",new Di(d,3)),this.setAttribute("normal",new Di(f,3)),this.setAttribute("uv",new Di(h,2));function A(){const w=new Z,U=new Z;let I=0;const D=(n-e)/i;for(let k=0;k<=r;k++){const E=[],T=k/r,R=T*(n-e)+e;for(let L=0;L<=s;L++){const O=L/s,V=O*l+a,ae=Math.sin(V),Q=Math.cos(V);U.x=R*ae,U.y=-T*i+m,U.z=R*Q,d.push(U.x,U.y,U.z),w.set(ae,D,Q).normalize(),f.push(w.x,w.y,w.z),h.push(O,1-T),E.push(v++)}g.push(E)}for(let k=0;k<s;k++)for(let E=0;E<r;E++){const T=g[E][k],R=g[E+1][k],L=g[E+1][k+1],O=g[E][k+1];(e>0||E!==0)&&(u.push(T,R,O),I+=3),(n>0||E!==r-1)&&(u.push(R,L,O),I+=3)}c.addGroup(p,I,0),p+=I}function C(w){const U=v,I=new lt,D=new Z;let k=0;const E=w===!0?e:n,T=w===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,m*T,0),f.push(0,T,0),h.push(.5,.5),v++;const R=v;for(let L=0;L<=s;L++){const V=L/s*l+a,ae=Math.cos(V),Q=Math.sin(V);D.x=E*Q,D.y=m*T,D.z=E*ae,d.push(D.x,D.y,D.z),f.push(0,T,0),I.x=ae*.5+.5,I.y=Q*.5*T+.5,h.push(I.x,I.y),v++}for(let L=0;L<s;L++){const O=U+L,V=R+L;w===!0?u.push(V,V+1,O):u.push(V+1,V,O),k+=3}c.addGroup(p,k,w===!0?1:2),p+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ql(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jl extends Is{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,f=n/l,h=[],v=[],g=[],m=[];for(let p=0;p<u;p++){const A=p*f-o;for(let C=0;C<c;C++){const w=C*d-r;v.push(w,-A,0),g.push(0,0,1),m.push(C/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){const C=A+c*p,w=A+c*(p+1),U=A+1+c*(p+1),I=A+1+c*p;h.push(C,w,I),h.push(w,U,I)}this.setIndex(h),this.setAttribute("position",new Di(v,3)),this.setAttribute("normal",new Di(g,3)),this.setAttribute("uv",new Di(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jl(e.width,e.height,e.widthSegments,e.heightSegments)}}class UA extends Ma{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nv,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class id extends UA{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new vt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new vt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new vt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class OA extends Ma{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class NA extends Ma{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wc={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class FA{constructor(e,n,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const h=c[d],v=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const kA=new FA;class Jd{constructor(e){this.manager=e!==void 0?e:kA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Jd.DEFAULT_MATERIAL_NAME="__DEFAULT";const Cr=new WeakMap;class BA extends Jd{constructor(e){super(e)}load(e,n,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Wc.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){n&&n(o),r.manager.itemEnd(e)},0);else{let d=Cr.get(o);d===void 0&&(d=[],Cr.set(o,d)),d.push({onLoad:n,onError:s})}return o}const a=ia("img");function l(){u(),n&&n(this);const d=Cr.get(this)||[];for(let f=0;f<d.length;f++){const h=d[f];h.onLoad&&h.onLoad(this)}Cr.delete(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),Wc.remove(`image:${e}`);const f=Cr.get(this)||[];for(let h=0;h<f.length;h++){const v=f[h];v.onError&&v.onError(d)}Cr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Wc.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class HA extends Jd{constructor(e){super(e)}load(e,n,i,s){const r=new An,o=new BA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,n!==void 0&&n(r)},i,s),r}}class vv extends vn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const $c=new Yt,Fh=new Z,kh=new Z;class zA{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=Oi,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qd,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Fh.setFromMatrixPosition(e.matrixWorld),n.position.copy(Fh),kh.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(kh),n.updateMatrixWorld(),$c.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($c,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply($c)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _v extends hv{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class VA extends zA{constructor(){super(new _v(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sd extends vv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new VA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class bv extends vv{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class GA extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Bh{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(gt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class WA extends fr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Hh(t,e,n,i){const s=$A(i);switch(n){case Zg:return t*e;case Jg:return t*e/s.components*s.byteLength;case jd:return t*e/s.components*s.byteLength;case ev:return t*e*2/s.components*s.byteLength;case qd:return t*e*2/s.components*s.byteLength;case Qg:return t*e*3/s.components*s.byteLength;case hi:return t*e*4/s.components*s.byteLength;case Yd:return t*e*4/s.components*s.byteLength;case al:case ll:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case cl:case ul:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Du:case Iu:return Math.max(t,16)*Math.max(e,8)/4;case Pu:case Lu:return Math.max(t,8)*Math.max(e,8)/2;case Uu:case Ou:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Nu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Fu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ku:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Bu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Hu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case zu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Vu:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Gu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Wu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case $u:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Xu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ju:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case qu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Yu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ku:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case dl:case Zu:case Qu:return Math.ceil(t/4)*Math.ceil(e/4)*16;case tv:case Ju:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ed:case td:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function $A(t){switch(t){case Oi:case qg:return{byteLength:1,components:1};case Jo:case Yg:case ya:return{byteLength:2,components:1};case $d:case Xd:return{byteLength:2,components:4};case or:case Wd:case Zi:return{byteLength:4,components:1};case Kg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xv(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function XA(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((h,v)=>h.start-v.start);let f=0;for(let h=1;h<d.length;h++){const v=d[f],g=d[h];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++f,d[f]=g)}d.length=f+1;for(let h=0,v=d.length;h<v;h++){const g=d[h];t.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var jA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qA=`#ifdef USE_ALPHAHASH
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
#endif`,j1=`#if defined( RE_IndirectDiffuse )
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
#endif`,q1=`#if defined( RE_IndirectDiffuse )
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
}`,jC=`uniform sampler2D t2D;
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
}`,qC=`varying vec3 vWorldDirection;
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
}`,mt={alphahash_fragment:jA,alphahash_pars_fragment:qA,alphamap_fragment:YA,alphamap_pars_fragment:KA,alphatest_fragment:ZA,alphatest_pars_fragment:QA,aomap_fragment:JA,aomap_pars_fragment:e1,batching_pars_vertex:t1,batching_vertex:n1,begin_vertex:i1,beginnormal_vertex:s1,bsdfs:r1,iridescence_fragment:o1,bumpmap_pars_fragment:a1,clipping_planes_fragment:l1,clipping_planes_pars_fragment:c1,clipping_planes_pars_vertex:u1,clipping_planes_vertex:d1,color_fragment:f1,color_pars_fragment:h1,color_pars_vertex:p1,color_vertex:m1,common:g1,cube_uv_reflection_fragment:v1,defaultnormal_vertex:_1,displacementmap_pars_vertex:b1,displacementmap_vertex:x1,emissivemap_fragment:y1,emissivemap_pars_fragment:w1,colorspace_fragment:S1,colorspace_pars_fragment:M1,envmap_fragment:E1,envmap_common_pars_fragment:T1,envmap_pars_fragment:A1,envmap_pars_vertex:C1,envmap_physical_pars_fragment:B1,envmap_vertex:R1,fog_vertex:P1,fog_pars_vertex:D1,fog_fragment:L1,fog_pars_fragment:I1,gradientmap_pars_fragment:U1,lightmap_pars_fragment:O1,lights_lambert_fragment:N1,lights_lambert_pars_fragment:F1,lights_pars_begin:k1,lights_toon_fragment:H1,lights_toon_pars_fragment:z1,lights_phong_fragment:V1,lights_phong_pars_fragment:G1,lights_physical_fragment:W1,lights_physical_pars_fragment:$1,lights_fragment_begin:X1,lights_fragment_maps:j1,lights_fragment_end:q1,logdepthbuf_fragment:Y1,logdepthbuf_pars_fragment:K1,logdepthbuf_pars_vertex:Z1,logdepthbuf_vertex:Q1,map_fragment:J1,map_pars_fragment:eC,map_particle_fragment:tC,map_particle_pars_fragment:nC,metalnessmap_fragment:iC,metalnessmap_pars_fragment:sC,morphinstance_vertex:rC,morphcolor_vertex:oC,morphnormal_vertex:aC,morphtarget_pars_vertex:lC,morphtarget_vertex:cC,normal_fragment_begin:uC,normal_fragment_maps:dC,normal_pars_fragment:fC,normal_pars_vertex:hC,normal_vertex:pC,normalmap_pars_fragment:mC,clearcoat_normal_fragment_begin:gC,clearcoat_normal_fragment_maps:vC,clearcoat_pars_fragment:_C,iridescence_pars_fragment:bC,opaque_fragment:xC,packing:yC,premultiplied_alpha_fragment:wC,project_vertex:SC,dithering_fragment:MC,dithering_pars_fragment:EC,roughnessmap_fragment:TC,roughnessmap_pars_fragment:AC,shadowmap_pars_fragment:CC,shadowmap_pars_vertex:RC,shadowmap_vertex:PC,shadowmask_pars_fragment:DC,skinbase_vertex:LC,skinning_pars_vertex:IC,skinning_vertex:UC,skinnormal_vertex:OC,specularmap_fragment:NC,specularmap_pars_fragment:FC,tonemapping_fragment:kC,tonemapping_pars_fragment:BC,transmission_fragment:HC,transmission_pars_fragment:zC,uv_pars_fragment:VC,uv_pars_vertex:GC,uv_vertex:WC,worldpos_vertex:$C,background_vert:XC,background_frag:jC,backgroundCube_vert:qC,backgroundCube_frag:YC,cube_vert:KC,cube_frag:ZC,depth_vert:QC,depth_frag:JC,distanceRGBA_vert:e2,distanceRGBA_frag:t2,equirect_vert:n2,equirect_frag:i2,linedashed_vert:s2,linedashed_frag:r2,meshbasic_vert:o2,meshbasic_frag:a2,meshlambert_vert:l2,meshlambert_frag:c2,meshmatcap_vert:u2,meshmatcap_frag:d2,meshnormal_vert:f2,meshnormal_frag:h2,meshphong_vert:p2,meshphong_frag:m2,meshphysical_vert:g2,meshphysical_frag:v2,meshtoon_vert:_2,meshtoon_frag:b2,points_vert:x2,points_frag:y2,shadow_vert:w2,shadow_frag:S2,sprite_vert:M2,sprite_frag:E2},Re={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Ti={basic:{uniforms:wn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:wn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new vt(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:wn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:wn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:wn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new vt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:wn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:wn([Re.points,Re.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:wn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:wn([Re.common,Re.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:wn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:wn([Re.sprite,Re.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:wn([Re.common,Re.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:wn([Re.lights,Re.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Ti.physical={uniforms:wn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Za={r:0,b:0,g:0},Vs=new Ni,T2=new Yt;function A2(t,e,n,i,s,r,o){const a=new vt(0);let l=r===!0?0:1,c,u,d=null,f=0,h=null;function v(C){let w=C.isScene===!0?C.background:null;return w&&w.isTexture&&(w=(C.backgroundBlurriness>0?n:e).get(w)),w}function g(C){let w=!1;const U=v(C);U===null?p(a,l):U&&U.isColor&&(p(U,1),w=!0);const I=t.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(C,w){const U=v(w);U&&(U.isCubeTexture||U.mapping===Zl)?(u===void 0&&(u=new pi(new Ea(1,1,1),new Ps({name:"BackgroundCubeMaterial",uniforms:uo(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,D,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Vs.copy(w.backgroundRotation),Vs.x*=-1,Vs.y*=-1,Vs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Vs.y*=-1,Vs.z*=-1),u.material.uniforms.envMap.value=U,u.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(T2.makeRotationFromEuler(Vs)),u.material.toneMapped=Mt.getTransfer(U.colorSpace)!==Lt,(d!==U||f!==U.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,d=U,f=U.version,h=t.toneMapping),u.layers.enableAll(),C.unshift(u,u.geometry,u.material,0,0,null)):U&&U.isTexture&&(c===void 0&&(c=new pi(new Jl(2,2),new Ps({name:"BackgroundMaterial",uniforms:uo(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=U,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Mt.getTransfer(U.colorSpace)!==Lt,U.matrixAutoUpdate===!0&&U.updateMatrix(),c.material.uniforms.uvTransform.value.copy(U.matrix),(d!==U||f!==U.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,d=U,f=U.version,h=t.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function p(C,w){C.getRGB(Za,fv(t)),i.buffers.color.setClear(Za.r,Za.g,Za.b,w,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(C,w=1){a.set(C),l=w,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(C){l=C,p(a,l)},render:g,addToRenderList:m,dispose:A}}function C2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(T,R,L,O,V){let ae=!1;const Q=d(O,L,R);r!==Q&&(r=Q,c(r.object)),ae=h(T,O,L,V),ae&&v(T,O,L,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(ae||o)&&(o=!1,w(T,R,L,O),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(T){return t.bindVertexArray(T)}function u(T){return t.deleteVertexArray(T)}function d(T,R,L){const O=L.wireframe===!0;let V=i[T.id];V===void 0&&(V={},i[T.id]=V);let ae=V[R.id];ae===void 0&&(ae={},V[R.id]=ae);let Q=ae[O];return Q===void 0&&(Q=f(l()),ae[O]=Q),Q}function f(T){const R=[],L=[],O=[];for(let V=0;V<n;V++)R[V]=0,L[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:L,attributeDivisors:O,object:T,attributes:{},index:null}}function h(T,R,L,O){const V=r.attributes,ae=R.attributes;let Q=0;const te=L.getAttributes();for(const q in te)if(te[q].location>=0){const Me=V[q];let Ne=ae[q];if(Ne===void 0&&(q==="instanceMatrix"&&T.instanceMatrix&&(Ne=T.instanceMatrix),q==="instanceColor"&&T.instanceColor&&(Ne=T.instanceColor)),Me===void 0||Me.attribute!==Ne||Ne&&Me.data!==Ne.data)return!0;Q++}return r.attributesNum!==Q||r.index!==O}function v(T,R,L,O){const V={},ae=R.attributes;let Q=0;const te=L.getAttributes();for(const q in te)if(te[q].location>=0){let Me=ae[q];Me===void 0&&(q==="instanceMatrix"&&T.instanceMatrix&&(Me=T.instanceMatrix),q==="instanceColor"&&T.instanceColor&&(Me=T.instanceColor));const Ne={};Ne.attribute=Me,Me&&Me.data&&(Ne.data=Me.data),V[q]=Ne,Q++}r.attributes=V,r.attributesNum=Q,r.index=O}function g(){const T=r.newAttributes;for(let R=0,L=T.length;R<L;R++)T[R]=0}function m(T){p(T,0)}function p(T,R){const L=r.newAttributes,O=r.enabledAttributes,V=r.attributeDivisors;L[T]=1,O[T]===0&&(t.enableVertexAttribArray(T),O[T]=1),V[T]!==R&&(t.vertexAttribDivisor(T,R),V[T]=R)}function A(){const T=r.newAttributes,R=r.enabledAttributes;for(let L=0,O=R.length;L<O;L++)R[L]!==T[L]&&(t.disableVertexAttribArray(L),R[L]=0)}function C(T,R,L,O,V,ae,Q){Q===!0?t.vertexAttribIPointer(T,R,L,V,ae):t.vertexAttribPointer(T,R,L,O,V,ae)}function w(T,R,L,O){g();const V=O.attributes,ae=L.getAttributes(),Q=R.defaultAttributeValues;for(const te in ae){const q=ae[te];if(q.location>=0){let we=V[te];if(we===void 0&&(te==="instanceMatrix"&&T.instanceMatrix&&(we=T.instanceMatrix),te==="instanceColor"&&T.instanceColor&&(we=T.instanceColor)),we!==void 0){const Me=we.normalized,Ne=we.itemSize,Ge=e.get(we);if(Ge===void 0)continue;const bt=Ge.buffer,Ke=Ge.type,ne=Ge.bytesPerElement,xe=Ke===t.INT||Ke===t.UNSIGNED_INT||we.gpuType===Wd;if(we.isInterleavedBufferAttribute){const B=we.data,ue=B.stride,re=we.offset;if(B.isInstancedInterleavedBuffer){for(let me=0;me<q.locationSize;me++)p(q.location+me,B.meshPerAttribute);T.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let me=0;me<q.locationSize;me++)m(q.location+me);t.bindBuffer(t.ARRAY_BUFFER,bt);for(let me=0;me<q.locationSize;me++)C(q.location+me,Ne/q.locationSize,Ke,Me,ue*ne,(re+Ne/q.locationSize*me)*ne,xe)}else{if(we.isInstancedBufferAttribute){for(let B=0;B<q.locationSize;B++)p(q.location+B,we.meshPerAttribute);T.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let B=0;B<q.locationSize;B++)m(q.location+B);t.bindBuffer(t.ARRAY_BUFFER,bt);for(let B=0;B<q.locationSize;B++)C(q.location+B,Ne/q.locationSize,Ke,Me,Ne*ne,Ne/q.locationSize*B*ne,xe)}}else if(Q!==void 0){const Me=Q[te];if(Me!==void 0)switch(Me.length){case 2:t.vertexAttrib2fv(q.location,Me);break;case 3:t.vertexAttrib3fv(q.location,Me);break;case 4:t.vertexAttrib4fv(q.location,Me);break;default:t.vertexAttrib1fv(q.location,Me)}}}}A()}function U(){k();for(const T in i){const R=i[T];for(const L in R){const O=R[L];for(const V in O)u(O[V].object),delete O[V];delete R[L]}delete i[T]}}function I(T){if(i[T.id]===void 0)return;const R=i[T.id];for(const L in R){const O=R[L];for(const V in O)u(O[V].object),delete O[V];delete R[L]}delete i[T.id]}function D(T){for(const R in i){const L=i[R];if(L[T.id]===void 0)continue;const O=L[T.id];for(const V in O)u(O[V].object),delete O[V];delete L[T.id]}}function k(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:k,resetDefaultState:E,dispose:U,releaseStatesOfGeometry:I,releaseStatesOfProgram:D,initAttributes:g,enableAttribute:m,disableUnusedAttributes:A}}function R2(t,e,n){let i;function s(c){i=c}function r(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let v=0;v<d;v++)h+=u[v];n.update(h,i,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let v=0;v<c.length;v++)o(c[v],u[v],f[v]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let v=0;for(let g=0;g<d;g++)v+=u[g]*f[g];n.update(v,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function P2(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==hi&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const k=D===ya&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Oi&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Zi&&!k)}function l(D){if(D==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),A=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),C=t.getParameter(t.MAX_VARYING_VECTORS),w=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),U=v>0,I=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:C,maxFragmentUniforms:w,vertexTextures:U,maxSamples:I}}function D2(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new ms,a=new pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,h){const v=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,p=t.get(d);if(!s||v===null||v.length===0||r&&!m)r?u(null):c();else{const A=r?0:i,C=A*4;let w=p.clippingState||null;l.value=w,w=u(v,f,C,h);for(let U=0;U!==C;++U)w[U]=n[U];p.clippingState=w,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,v){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const p=h+g*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let C=0,w=h;C!==g;++C,w+=4)o.copy(d[C]).applyMatrix4(A,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function L2(t){let e=new WeakMap;function n(o,a){return a===Tu?o.mapping=ao:a===Au&&(o.mapping=lo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Tu||a===Au)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new RA(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",s),n(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Ir=4,zh=[.125,.215,.35,.446,.526,.582],js=20,Xc=new _v,Vh=new vt;let jc=null,qc=0,Yc=0,Kc=!1;const $s=(1+Math.sqrt(5))/2,Rr=1/$s,Gh=[new Z(-$s,Rr,0),new Z($s,Rr,0),new Z(-Rr,0,$s),new Z(Rr,0,$s),new Z(0,$s,-Rr),new Z(0,$s,Rr),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)],I2=new Z;class Wh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=I2}=r;jc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),Kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jc,qc,Yc),this._renderer.xr.enabled=Kc,e.scissorTest=!1,Qa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ao||e.mapping===lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),Kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ai,minFilter:Ai,generateMipmaps:!1,type:ya,format:hi,colorSpace:co,depthBuffer:!1},s=$h(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$h(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=U2(r)),this._blurMaterial=O2(r,e,n)}return s}_compileMaterial(e){const n=new pi(this._lodPlanes[0],e);this._renderer.compile(n,Xc)}_sceneToCubeUV(e,n,i,s,r){const l=new $n(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Vh),d.toneMapping=Cs,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const g=new cv({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),m=new pi(new Ea,g);let p=!1;const A=e.background;A?A.isColor&&(g.color.copy(A),e.background=null,p=!0):(g.color.copy(Vh),p=!0);for(let C=0;C<6;C++){const w=C%3;w===0?(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[C],r.y,r.z)):w===1?(l.up.set(0,0,c[C]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[C],r.z)):(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[C]));const U=this._cubeSize;Qa(s,w*U,C>2?U:0,U,U),d.setRenderTarget(s),p&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=A}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===ao||e.mapping===lo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new pi(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Qa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Xc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Gh[(s-r-1)%Gh.length];this._blur(e,r-1,r,o,a)}n.autoClear=i}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new pi(this._lodPlanes[s],c),f=c.uniforms,h=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*js-1),g=r/v,m=isFinite(r)?1+Math.floor(u*g):js;m>js&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${js}`);const p=[];let A=0;for(let D=0;D<js;++D){const k=D/g,E=Math.exp(-k*k/2);p.push(E),D===0?A+=E:D<m&&(A+=2*E)}for(let D=0;D<p.length;D++)p[D]=p[D]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:C}=this;f.dTheta.value=v,f.mipInt.value=C-i;const w=this._sizeLods[s],U=3*w*(s>C-Ir?s-C+Ir:0),I=4*(this._cubeSize-w);Qa(n,U,I,3*w,2*w),l.setRenderTarget(n),l.render(d,Xc)}}function U2(t){const e=[],n=[],i=[];let s=t;const r=t-Ir+1+zh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);n.push(a);let l=1/a;o>t-Ir?l=zh[o-t+Ir-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,v=6,g=3,m=2,p=1,A=new Float32Array(g*v*h),C=new Float32Array(m*v*h),w=new Float32Array(p*v*h);for(let I=0;I<h;I++){const D=I%3*2/3-1,k=I>2?0:-1,E=[D,k,0,D+2/3,k,0,D+2/3,k+1,0,D,k,0,D+2/3,k+1,0,D,k+1,0];A.set(E,g*v*I),C.set(f,m*v*I);const T=[I,I,I,I,I,I];w.set(T,p*v*I)}const U=new Is;U.setAttribute("position",new Pi(A,g)),U.setAttribute("uv",new Pi(C,m)),U.setAttribute("faceIndex",new Pi(w,p)),e.push(U),s>Ir&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function $h(t,e,n){const i=new lr(t,e,n);return i.texture.mapping=Zl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qa(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function O2(t,e,n){const i=new Float32Array(js),s=new Z(0,1,0);return new Ps({name:"SphericalGaussianBlur",defines:{n:js,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ef(),fragmentShader:`

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
		`,blending:As,depthTest:!1,depthWrite:!1})}function Xh(){return new Ps({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ef(),fragmentShader:`

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
		`,blending:As,depthTest:!1,depthWrite:!1})}function jh(){return new Ps({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ef(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:As,depthTest:!1,depthWrite:!1})}function ef(){return`

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
	`}function N2(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Tu||l===Au,u=l===ao||l===lo;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Wh(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&s(h)?(n===null&&(n=new Wh(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function F2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&Gr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function k2(t,e,n,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",o),delete s[f.id];const h=r.get(f);h&&(e.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],t.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,v=d.attributes.position;let g=0;if(h!==null){const A=h.array;g=h.version;for(let C=0,w=A.length;C<w;C+=3){const U=A[C+0],I=A[C+1],D=A[C+2];f.push(U,I,I,D,D,U)}}else if(v!==void 0){const A=v.array;g=v.version;for(let C=0,w=A.length/3-1;C<w;C+=3){const U=C+0,I=C+1,D=C+2;f.push(U,I,I,D,D,U)}}else return;const m=new(sv(f)?dv:uv)(f,1);m.version=g;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function B2(t,e,n){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){t.drawElements(i,h,r,f*o),n.update(h,i,1)}function c(f,h,v){v!==0&&(t.drawElementsInstanced(i,h,r,f*o,v),n.update(h,i,v))}function u(f,h,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,v);let m=0;for(let p=0;p<v;p++)m+=h[p];n.update(m,i,1)}function d(f,h,v,g){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,h[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,r,f,0,g,0,v);let p=0;for(let A=0;A<v;A++)p+=h[A]*g[A];n.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function H2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function z2(t,e,n){const i=new WeakMap,s=new jt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let E=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();const h=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let C=0;h===!0&&(C=1),v===!0&&(C=2),g===!0&&(C=3);let w=a.attributes.position.count*C,U=1;w>e.maxTextureSize&&(U=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const I=new Float32Array(w*U*4*d),D=new rv(I,w,U,d);D.type=Zi,D.needsUpdate=!0;const k=C*4;for(let T=0;T<d;T++){const R=m[T],L=p[T],O=A[T],V=w*U*4*T;for(let ae=0;ae<R.count;ae++){const Q=ae*k;h===!0&&(s.fromBufferAttribute(R,ae),I[V+Q+0]=s.x,I[V+Q+1]=s.y,I[V+Q+2]=s.z,I[V+Q+3]=0),v===!0&&(s.fromBufferAttribute(L,ae),I[V+Q+4]=s.x,I[V+Q+5]=s.y,I[V+Q+6]=s.z,I[V+Q+7]=0),g===!0&&(s.fromBufferAttribute(O,ae),I[V+Q+8]=s.x,I[V+Q+9]=s.y,I[V+Q+10]=s.z,I[V+Q+11]=O.itemSize===4?s.w:1)}}f={count:d,texture:D,size:new lt(w,U)},i.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let h=0;for(let g=0;g<c.length;g++)h+=c[g];const v=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:r}}function V2(t,e,n,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:o}}const yv=new An,qh=new gv(1,1),wv=new rv,Sv=new fA,Mv=new pv,Yh=[],Kh=[],Zh=new Float32Array(16),Qh=new Float32Array(9),Jh=new Float32Array(4);function _o(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=Yh[s];if(r===void 0&&(r=new Float32Array(s),Yh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function sn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function rn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ec(t,e){let n=Kh[e];n===void 0&&(n=new Int32Array(e),Kh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function G2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function W2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(sn(n,e))return;t.uniform2fv(this.addr,e),rn(n,e)}}function $2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(sn(n,e))return;t.uniform3fv(this.addr,e),rn(n,e)}}function X2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(sn(n,e))return;t.uniform4fv(this.addr,e),rn(n,e)}}function j2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(sn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),rn(n,e)}else{if(sn(n,i))return;Jh.set(i),t.uniformMatrix2fv(this.addr,!1,Jh),rn(n,i)}}function q2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(sn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),rn(n,e)}else{if(sn(n,i))return;Qh.set(i),t.uniformMatrix3fv(this.addr,!1,Qh),rn(n,i)}}function Y2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(sn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),rn(n,e)}else{if(sn(n,i))return;Zh.set(i),t.uniformMatrix4fv(this.addr,!1,Zh),rn(n,i)}}function K2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Z2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(sn(n,e))return;t.uniform2iv(this.addr,e),rn(n,e)}}function Q2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(sn(n,e))return;t.uniform3iv(this.addr,e),rn(n,e)}}function J2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(sn(n,e))return;t.uniform4iv(this.addr,e),rn(n,e)}}function eR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function tR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(sn(n,e))return;t.uniform2uiv(this.addr,e),rn(n,e)}}function nR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(sn(n,e))return;t.uniform3uiv(this.addr,e),rn(n,e)}}function iR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(sn(n,e))return;t.uniform4uiv(this.addr,e),rn(n,e)}}function sR(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(qh.compareFunction=iv,r=qh):r=yv,n.setTexture2D(e||r,s)}function rR(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||Sv,s)}function oR(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||Mv,s)}function aR(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||wv,s)}function lR(t){switch(t){case 5126:return G2;case 35664:return W2;case 35665:return $2;case 35666:return X2;case 35674:return j2;case 35675:return q2;case 35676:return Y2;case 5124:case 35670:return K2;case 35667:case 35671:return Z2;case 35668:case 35672:return Q2;case 35669:case 35673:return J2;case 5125:return eR;case 36294:return tR;case 36295:return nR;case 36296:return iR;case 35678:case 36198:case 36298:case 36306:case 35682:return sR;case 35679:case 36299:case 36307:return rR;case 35680:case 36300:case 36308:case 36293:return oR;case 36289:case 36303:case 36311:case 36292:return aR}}function cR(t,e){t.uniform1fv(this.addr,e)}function uR(t,e){const n=_o(e,this.size,2);t.uniform2fv(this.addr,n)}function dR(t,e){const n=_o(e,this.size,3);t.uniform3fv(this.addr,n)}function fR(t,e){const n=_o(e,this.size,4);t.uniform4fv(this.addr,n)}function hR(t,e){const n=_o(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function pR(t,e){const n=_o(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function mR(t,e){const n=_o(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function gR(t,e){t.uniform1iv(this.addr,e)}function vR(t,e){t.uniform2iv(this.addr,e)}function _R(t,e){t.uniform3iv(this.addr,e)}function bR(t,e){t.uniform4iv(this.addr,e)}function xR(t,e){t.uniform1uiv(this.addr,e)}function yR(t,e){t.uniform2uiv(this.addr,e)}function wR(t,e){t.uniform3uiv(this.addr,e)}function SR(t,e){t.uniform4uiv(this.addr,e)}function MR(t,e,n){const i=this.cache,s=e.length,r=ec(n,s);sn(i,r)||(t.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)n.setTexture2D(e[o]||yv,r[o])}function ER(t,e,n){const i=this.cache,s=e.length,r=ec(n,s);sn(i,r)||(t.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||Sv,r[o])}function TR(t,e,n){const i=this.cache,s=e.length,r=ec(n,s);sn(i,r)||(t.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||Mv,r[o])}function AR(t,e,n){const i=this.cache,s=e.length,r=ec(n,s);sn(i,r)||(t.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||wv,r[o])}function CR(t){switch(t){case 5126:return cR;case 35664:return uR;case 35665:return dR;case 35666:return fR;case 35674:return hR;case 35675:return pR;case 35676:return mR;case 5124:case 35670:return gR;case 35667:case 35671:return vR;case 35668:case 35672:return _R;case 35669:case 35673:return bR;case 5125:return xR;case 36294:return yR;case 36295:return wR;case 36296:return SR;case 35678:case 36198:case 36298:case 36306:case 35682:return MR;case 35679:case 36299:case 36307:return ER;case 35680:case 36300:case 36308:case 36293:return TR;case 36289:case 36303:case 36311:case 36292:return AR}}class RR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=lR(n.type)}}class PR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=CR(n.type)}}class DR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const Zc=/(\w+)(\])?(\[|\.)?/g;function ep(t,e){t.seq.push(e),t.map[e.id]=e}function LR(t,e,n){const i=t.name,s=i.length;for(Zc.lastIndex=0;;){const r=Zc.exec(i),o=Zc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ep(n,c===void 0?new RR(a,t,e):new PR(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new DR(a),ep(n,d)),n=d}}}class hl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(n,s),o=e.getUniformLocation(n,r.name);LR(r,o,this)}}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function tp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const IR=37297;let UR=0;function OR(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const np=new pt;function NR(t){Mt._getMatrix(np,Mt.workingColorSpace,t);const e=`mat3( ${np.elements.map(n=>n.toFixed(4))} )`;switch(Mt.getTransfer(t)){case Ll:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function ip(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+OR(t.getShaderSource(e),a)}else return r}function FR(t,e){const n=NR(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function kR(t,e){let n;switch(e){case BT:n="Linear";break;case HT:n="Reinhard";break;case zT:n="Cineon";break;case VT:n="ACESFilmic";break;case WT:n="AgX";break;case $T:n="Neutral";break;case GT:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ja=new Z;function BR(){Mt.getLuminanceCoefficients(Ja);const t=Ja.x.toFixed(4),e=Ja.y.toFixed(4),n=Ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function zR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function VR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function No(t){return t!==""}function sp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GR=/^[ \t]*#include +<([\w\d./]+)>/gm;function rd(t){return t.replace(GR,$R)}const WR=new Map;function $R(t,e){let n=mt[e];if(n===void 0){const i=WR.get(e);if(i!==void 0)n=mt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return rd(n)}const XR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function op(t){return t.replace(XR,jR)}function jR(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ap(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function qR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===$g?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===_T?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Wi&&(e="SHADOWMAP_TYPE_VSM"),e}function YR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ao:case lo:e="ENVMAP_TYPE_CUBE";break;case Zl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function KR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case lo:e="ENVMAP_MODE_REFRACTION";break}return e}function ZR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Xg:e="ENVMAP_BLENDING_MULTIPLY";break;case FT:e="ENVMAP_BLENDING_MIX";break;case kT:e="ENVMAP_BLENDING_ADD";break}return e}function QR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function JR(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=qR(n),c=YR(n),u=KR(n),d=ZR(n),f=QR(n),h=HR(n),v=zR(r),g=s.createProgram();let m,p,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(No).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(No).join(`
`),p.length>0&&(p+=`
`)):(m=[ap(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),p=[ap(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Cs?"#define TONE_MAPPING":"",n.toneMapping!==Cs?mt.tonemapping_pars_fragment:"",n.toneMapping!==Cs?kR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,FR("linearToOutputTexel",n.outputColorSpace),BR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(No).join(`
`)),o=rd(o),o=sp(o,n),o=rp(o,n),a=rd(a),a=sp(a,n),a=rp(a,n),o=op(o),a=op(a),n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const C=A+m+o,w=A+p+a,U=tp(s,s.VERTEX_SHADER,C),I=tp(s,s.FRAGMENT_SHADER,w);s.attachShader(g,U),s.attachShader(g,I),n.index0AttributeName!==void 0?s.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function D(R){if(t.debug.checkShaderErrors){const L=s.getProgramInfoLog(g)||"",O=s.getShaderInfoLog(U)||"",V=s.getShaderInfoLog(I)||"",ae=L.trim(),Q=O.trim(),te=V.trim();let q=!0,we=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,g,U,I);else{const Me=ip(s,U,"vertex"),Ne=ip(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+ae+`
`+Me+`
`+Ne)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(Q===""||te==="")&&(we=!1);we&&(R.diagnostics={runnable:q,programLog:ae,vertexShader:{log:Q,prefix:m},fragmentShader:{log:te,prefix:p}})}s.deleteShader(U),s.deleteShader(I),k=new hl(s,g),E=VR(s,g)}let k;this.getUniforms=function(){return k===void 0&&D(this),k};let E;this.getAttributes=function(){return E===void 0&&D(this),E};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(g,IR)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=UR++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=U,this.fragmentShader=I,this}let eP=0;class tP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new nP(e),n.set(e,i)),i}}class nP{constructor(e){this.id=eP++,this.code=e,this.usedTimes=0}}function iP(t,e,n,i,s,r,o){const a=new av,l=new tP,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let h=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,T,R,L,O){const V=L.fog,ae=O.geometry,Q=E.isMeshStandardMaterial?L.environment:null,te=(E.isMeshStandardMaterial?n:e).get(E.envMap||Q),q=te&&te.mapping===Zl?te.image.height:null,we=v[E.type];E.precision!==null&&(h=s.getMaxPrecision(E.precision),h!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",h,"instead."));const Me=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Ne=Me!==void 0?Me.length:0;let Ge=0;ae.morphAttributes.position!==void 0&&(Ge=1),ae.morphAttributes.normal!==void 0&&(Ge=2),ae.morphAttributes.color!==void 0&&(Ge=3);let bt,Ke,ne,xe;if(we){const ft=Ti[we];bt=ft.vertexShader,Ke=ft.fragmentShader}else bt=E.vertexShader,Ke=E.fragmentShader,l.update(E),ne=l.getVertexShaderID(E),xe=l.getFragmentShaderID(E);const B=t.getRenderTarget(),ue=t.state.buffers.depth.getReversed(),re=O.isInstancedMesh===!0,me=O.isBatchedMesh===!0,Ze=!!E.map,P=!!E.matcap,_=!!te,z=!!E.aoMap,j=!!E.lightMap,ie=!!E.bumpMap,X=!!E.normalMap,ge=!!E.displacementMap,J=!!E.emissiveMap,ce=!!E.metalnessMap,de=!!E.roughnessMap,Pe=E.anisotropy>0,S=E.clearcoat>0,x=E.dispersion>0,F=E.iridescence>0,Y=E.sheen>0,le=E.transmission>0,K=Pe&&!!E.anisotropyMap,Le=S&&!!E.clearcoatMap,ve=S&&!!E.clearcoatNormalMap,De=S&&!!E.clearcoatRoughnessMap,Ie=F&&!!E.iridescenceMap,_e=F&&!!E.iridescenceThicknessMap,Ce=Y&&!!E.sheenColorMap,Be=Y&&!!E.sheenRoughnessMap,Ue=!!E.specularMap,Te=!!E.specularColorMap,ct=!!E.specularIntensityMap,H=le&&!!E.transmissionMap,ye=le&&!!E.thicknessMap,Ee=!!E.gradientMap,Fe=!!E.alphaMap,be=E.alphaTest>0,he=!!E.alphaHash,Ve=!!E.extensions;let tt=Cs;E.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(tt=t.toneMapping);const dt={shaderID:we,shaderType:E.type,shaderName:E.name,vertexShader:bt,fragmentShader:Ke,defines:E.defines,customVertexShaderID:ne,customFragmentShaderID:xe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:h,batching:me,batchingColor:me&&O._colorsTexture!==null,instancing:re,instancingColor:re&&O.instanceColor!==null,instancingMorph:re&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:B===null?t.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:co,alphaToCoverage:!!E.alphaToCoverage,map:Ze,matcap:P,envMap:_,envMapMode:_&&te.mapping,envMapCubeUVHeight:q,aoMap:z,lightMap:j,bumpMap:ie,normalMap:X,displacementMap:f&&ge,emissiveMap:J,normalMapObjectSpace:X&&E.normalMapType===YT,normalMapTangentSpace:X&&E.normalMapType===nv,metalnessMap:ce,roughnessMap:de,anisotropy:Pe,anisotropyMap:K,clearcoat:S,clearcoatMap:Le,clearcoatNormalMap:ve,clearcoatRoughnessMap:De,dispersion:x,iridescence:F,iridescenceMap:Ie,iridescenceThicknessMap:_e,sheen:Y,sheenColorMap:Ce,sheenRoughnessMap:Be,specularMap:Ue,specularColorMap:Te,specularIntensityMap:ct,transmission:le,transmissionMap:H,thicknessMap:ye,gradientMap:Ee,opaque:E.transparent===!1&&E.blending===Vr&&E.alphaToCoverage===!1,alphaMap:Fe,alphaTest:be,alphaHash:he,combine:E.combine,mapUv:Ze&&g(E.map.channel),aoMapUv:z&&g(E.aoMap.channel),lightMapUv:j&&g(E.lightMap.channel),bumpMapUv:ie&&g(E.bumpMap.channel),normalMapUv:X&&g(E.normalMap.channel),displacementMapUv:ge&&g(E.displacementMap.channel),emissiveMapUv:J&&g(E.emissiveMap.channel),metalnessMapUv:ce&&g(E.metalnessMap.channel),roughnessMapUv:de&&g(E.roughnessMap.channel),anisotropyMapUv:K&&g(E.anisotropyMap.channel),clearcoatMapUv:Le&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:ve&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:Be&&g(E.sheenRoughnessMap.channel),specularMapUv:Ue&&g(E.specularMap.channel),specularColorMapUv:Te&&g(E.specularColorMap.channel),specularIntensityMapUv:ct&&g(E.specularIntensityMap.channel),transmissionMapUv:H&&g(E.transmissionMap.channel),thicknessMapUv:ye&&g(E.thicknessMap.channel),alphaMapUv:Fe&&g(E.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(X||Pe),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!ae.attributes.uv&&(Ze||Fe),fog:!!V,useFog:E.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ue,skinning:O.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:Ge,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:tt,decodeVideoTexture:Ze&&E.map.isVideoTexture===!0&&Mt.getTransfer(E.map.colorSpace)===Lt,decodeVideoTextureEmissive:J&&E.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(E.emissiveMap.colorSpace)===Lt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ki,flipSided:E.side===Fn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ve&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&E.extensions.multiDraw===!0||me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function p(E){const T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)T.push(R),T.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(A(T,E),C(T,E),T.push(t.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function A(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function C(E,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),T.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),E.push(a.mask)}function w(E){const T=v[E.type];let R;if(T){const L=Ti[T];R=EA.clone(L.uniforms)}else R=E.uniforms;return R}function U(E,T){let R;for(let L=0,O=u.length;L<O;L++){const V=u[L];if(V.cacheKey===T){R=V,++R.usedTimes;break}}return R===void 0&&(R=new JR(t,T,E,r),u.push(R)),R}function I(E){if(--E.usedTimes===0){const T=u.indexOf(E);u[T]=u[u.length-1],u.pop(),E.destroy()}}function D(E){l.remove(E)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:U,releaseProgram:I,releaseShaderCache:D,programs:u,dispose:k}}function sP(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function rP(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function lp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function cp(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(d,f,h,v,g,m){let p=t[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:v,renderOrder:d.renderOrder,z:g,group:m},t[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=g,p.group=m),e++,p}function a(d,f,h,v,g,m){const p=o(d,f,h,v,g,m);h.transmission>0?i.push(p):h.transparent===!0?s.push(p):n.push(p)}function l(d,f,h,v,g,m){const p=o(d,f,h,v,g,m);h.transmission>0?i.unshift(p):h.transparent===!0?s.unshift(p):n.unshift(p)}function c(d,f){n.length>1&&n.sort(d||rP),i.length>1&&i.sort(f||lp),s.length>1&&s.sort(f||lp)}function u(){for(let d=e,f=t.length;d<f;d++){const h=t[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function oP(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new cp,t.set(i,[o])):s>=r.length?(o=new cp,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function aP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Z,color:new vt};break;case"SpotLight":n={position:new Z,direction:new Z,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new vt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":n={color:new vt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return t[e.id]=n,n}}}function lP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let cP=0;function uP(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function dP(t){const e=new aP,n=lP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Z);const s=new Z,r=new Yt,o=new Yt;function a(c){let u=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let h=0,v=0,g=0,m=0,p=0,A=0,C=0,w=0,U=0,I=0,D=0;c.sort(uP);for(let E=0,T=c.length;E<T;E++){const R=c[E],L=R.color,O=R.intensity,V=R.distance,ae=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=L.r*O,d+=L.g*O,f+=L.b*O;else if(R.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(R.sh.coefficients[Q],O);D++}else if(R.isDirectionalLight){const Q=e.get(R);if(Q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const te=R.shadow,q=n.get(R);q.shadowIntensity=te.intensity,q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,i.directionalShadow[h]=q,i.directionalShadowMap[h]=ae,i.directionalShadowMatrix[h]=R.shadow.matrix,A++}i.directional[h]=Q,h++}else if(R.isSpotLight){const Q=e.get(R);Q.position.setFromMatrixPosition(R.matrixWorld),Q.color.copy(L).multiplyScalar(O),Q.distance=V,Q.coneCos=Math.cos(R.angle),Q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Q.decay=R.decay,i.spot[g]=Q;const te=R.shadow;if(R.map&&(i.spotLightMap[U]=R.map,U++,te.updateMatrices(R),R.castShadow&&I++),i.spotLightMatrix[g]=te.matrix,R.castShadow){const q=n.get(R);q.shadowIntensity=te.intensity,q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,i.spotShadow[g]=q,i.spotShadowMap[g]=ae,w++}g++}else if(R.isRectAreaLight){const Q=e.get(R);Q.color.copy(L).multiplyScalar(O),Q.halfWidth.set(R.width*.5,0,0),Q.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=Q,m++}else if(R.isPointLight){const Q=e.get(R);if(Q.color.copy(R.color).multiplyScalar(R.intensity),Q.distance=R.distance,Q.decay=R.decay,R.castShadow){const te=R.shadow,q=n.get(R);q.shadowIntensity=te.intensity,q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,q.shadowCameraNear=te.camera.near,q.shadowCameraFar=te.camera.far,i.pointShadow[v]=q,i.pointShadowMap[v]=ae,i.pointShadowMatrix[v]=R.shadow.matrix,C++}i.point[v]=Q,v++}else if(R.isHemisphereLight){const Q=e.get(R);Q.skyColor.copy(R.color).multiplyScalar(O),Q.groundColor.copy(R.groundColor).multiplyScalar(O),i.hemi[p]=Q,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const k=i.hash;(k.directionalLength!==h||k.pointLength!==v||k.spotLength!==g||k.rectAreaLength!==m||k.hemiLength!==p||k.numDirectionalShadows!==A||k.numPointShadows!==C||k.numSpotShadows!==w||k.numSpotMaps!==U||k.numLightProbes!==D)&&(i.directional.length=h,i.spot.length=g,i.rectArea.length=m,i.point.length=v,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=w+U-I,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=D,k.directionalLength=h,k.pointLength=v,k.spotLength=g,k.rectAreaLength=m,k.hemiLength=p,k.numDirectionalShadows=A,k.numPointShadows=C,k.numSpotShadows=w,k.numSpotMaps=U,k.numLightProbes=D,i.version=cP++)}function l(c,u){let d=0,f=0,h=0,v=0,g=0;const m=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const C=c[p];if(C.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),d++}else if(C.isSpotLight){const w=i.spot[h];w.position.setFromMatrixPosition(C.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),h++}else if(C.isRectAreaLight){const w=i.rectArea[v];w.position.setFromMatrixPosition(C.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(C.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(C.width*.5,0,0),w.halfHeight.set(0,C.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),v++}else if(C.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(C.matrixWorld),w.position.applyMatrix4(m),f++}else if(C.isHemisphereLight){const w=i.hemi[g];w.direction.setFromMatrixPosition(C.matrixWorld),w.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function up(t){const e=new dP(t),n=[],i=[];function s(u){c.camera=u,n.length=0,i.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function fP(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new up(t),e.set(s,[a])):r>=o.length?(a=new up(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const hP=`void main() {
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
}`;function mP(t,e,n){let i=new Qd;const s=new lt,r=new lt,o=new jt,a=new OA({depthPacking:qT}),l=new NA,c={},u=n.maxTextureSize,d={[Rs]:Fn,[Fn]:Rs,[Ki]:Ki},f=new Ps({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:hP,fragmentShader:pP}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const v=new Is;v.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new pi(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$g;let p=this.type;this.render=function(I,D,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const E=t.getRenderTarget(),T=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),L=t.state;L.setBlending(As),L.buffers.depth.getReversed()?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const O=p!==Wi&&this.type===Wi,V=p===Wi&&this.type!==Wi;for(let ae=0,Q=I.length;ae<Q;ae++){const te=I[ae],q=te.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const we=q.getFrameExtents();if(s.multiply(we),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/we.x),s.x=r.x*we.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/we.y),s.y=r.y*we.y,q.mapSize.y=r.y)),q.map===null||O===!0||V===!0){const Ne=this.type!==Wi?{minFilter:gi,magFilter:gi}:{};q.map!==null&&q.map.dispose(),q.map=new lr(s.x,s.y,Ne),q.map.texture.name=te.name+".shadowMap",q.camera.updateProjectionMatrix()}t.setRenderTarget(q.map),t.clear();const Me=q.getViewportCount();for(let Ne=0;Ne<Me;Ne++){const Ge=q.getViewport(Ne);o.set(r.x*Ge.x,r.y*Ge.y,r.x*Ge.z,r.y*Ge.w),L.viewport(o),q.updateMatrices(te,Ne),i=q.getFrustum(),w(D,k,q.camera,te,this.type)}q.isPointLightShadow!==!0&&this.type===Wi&&A(q,k),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(E,T,R)};function A(I,D){const k=e.update(g);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,h.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new lr(s.x,s.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,t.setRenderTarget(I.mapPass),t.clear(),t.renderBufferDirect(D,null,k,f,g,null),h.uniforms.shadow_pass.value=I.mapPass.texture,h.uniforms.resolution.value=I.mapSize,h.uniforms.radius.value=I.radius,t.setRenderTarget(I.map),t.clear(),t.renderBufferDirect(D,null,k,h,g,null)}function C(I,D,k,E){let T=null;const R=k.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(R!==void 0)T=R;else if(T=k.isPointLight===!0?l:a,t.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const L=T.uuid,O=D.uuid;let V=c[L];V===void 0&&(V={},c[L]=V);let ae=V[O];ae===void 0&&(ae=T.clone(),V[O]=ae,D.addEventListener("dispose",U)),T=ae}if(T.visible=D.visible,T.wireframe=D.wireframe,E===Wi?T.side=D.shadowSide!==null?D.shadowSide:D.side:T.side=D.shadowSide!==null?D.shadowSide:d[D.side],T.alphaMap=D.alphaMap,T.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,T.map=D.map,T.clipShadows=D.clipShadows,T.clippingPlanes=D.clippingPlanes,T.clipIntersection=D.clipIntersection,T.displacementMap=D.displacementMap,T.displacementScale=D.displacementScale,T.displacementBias=D.displacementBias,T.wireframeLinewidth=D.wireframeLinewidth,T.linewidth=D.linewidth,k.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const L=t.properties.get(T);L.light=k}return T}function w(I,D,k,E,T){if(I.visible===!1)return;if(I.layers.test(D.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&T===Wi)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,I.matrixWorld);const O=e.update(I),V=I.material;if(Array.isArray(V)){const ae=O.groups;for(let Q=0,te=ae.length;Q<te;Q++){const q=ae[Q],we=V[q.materialIndex];if(we&&we.visible){const Me=C(I,we,E,T);I.onBeforeShadow(t,I,D,k,O,Me,q),t.renderBufferDirect(k,null,O,Me,I,q),I.onAfterShadow(t,I,D,k,O,Me,q)}}}else if(V.visible){const ae=C(I,V,E,T);I.onBeforeShadow(t,I,D,k,O,ae,null),t.renderBufferDirect(k,null,O,ae,I,null),I.onAfterShadow(t,I,D,k,O,ae,null)}}const L=I.children;for(let O=0,V=L.length;O<V;O++)w(L[O],D,k,E,T)}function U(I){I.target.removeEventListener("dispose",U);for(const k in c){const E=c[k],T=I.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}const gP={[bu]:xu,[yu]:Mu,[wu]:Eu,[oo]:Su,[xu]:bu,[Mu]:yu,[Eu]:wu,[Su]:oo};function vP(t,e){function n(){let H=!1;const ye=new jt;let Ee=null;const Fe=new jt(0,0,0,0);return{setMask:function(be){Ee!==be&&!H&&(t.colorMask(be,be,be,be),Ee=be)},setLocked:function(be){H=be},setClear:function(be,he,Ve,tt,dt){dt===!0&&(be*=tt,he*=tt,Ve*=tt),ye.set(be,he,Ve,tt),Fe.equals(ye)===!1&&(t.clearColor(be,he,Ve,tt),Fe.copy(ye))},reset:function(){H=!1,Ee=null,Fe.set(-1,0,0,0)}}}function i(){let H=!1,ye=!1,Ee=null,Fe=null,be=null;return{setReversed:function(he){if(ye!==he){const Ve=e.get("EXT_clip_control");he?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),ye=he;const tt=be;be=null,this.setClear(tt)}},getReversed:function(){return ye},setTest:function(he){he?B(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(he){Ee!==he&&!H&&(t.depthMask(he),Ee=he)},setFunc:function(he){if(ye&&(he=gP[he]),Fe!==he){switch(he){case bu:t.depthFunc(t.NEVER);break;case xu:t.depthFunc(t.ALWAYS);break;case yu:t.depthFunc(t.LESS);break;case oo:t.depthFunc(t.LEQUAL);break;case wu:t.depthFunc(t.EQUAL);break;case Su:t.depthFunc(t.GEQUAL);break;case Mu:t.depthFunc(t.GREATER);break;case Eu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Fe=he}},setLocked:function(he){H=he},setClear:function(he){be!==he&&(ye&&(he=1-he),t.clearDepth(he),be=he)},reset:function(){H=!1,Ee=null,Fe=null,be=null,ye=!1}}}function s(){let H=!1,ye=null,Ee=null,Fe=null,be=null,he=null,Ve=null,tt=null,dt=null;return{setTest:function(ft){H||(ft?B(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(ft){ye!==ft&&!H&&(t.stencilMask(ft),ye=ft)},setFunc:function(ft,Pn,G){(Ee!==ft||Fe!==Pn||be!==G)&&(t.stencilFunc(ft,Pn,G),Ee=ft,Fe=Pn,be=G)},setOp:function(ft,Pn,G){(he!==ft||Ve!==Pn||tt!==G)&&(t.stencilOp(ft,Pn,G),he=ft,Ve=Pn,tt=G)},setLocked:function(ft){H=ft},setClear:function(ft){dt!==ft&&(t.clearStencil(ft),dt=ft)},reset:function(){H=!1,ye=null,Ee=null,Fe=null,be=null,he=null,Ve=null,tt=null,dt=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],v=null,g=!1,m=null,p=null,A=null,C=null,w=null,U=null,I=null,D=new vt(0,0,0),k=0,E=!1,T=null,R=null,L=null,O=null,V=null;const ae=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,te=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(q)[1]),Q=te>=1):q.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Q=te>=2);let we=null,Me={};const Ne=t.getParameter(t.SCISSOR_BOX),Ge=t.getParameter(t.VIEWPORT),bt=new jt().fromArray(Ne),Ke=new jt().fromArray(Ge);function ne(H,ye,Ee,Fe){const be=new Uint8Array(4),he=t.createTexture();t.bindTexture(H,he),t.texParameteri(H,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(H,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ve=0;Ve<Ee;Ve++)H===t.TEXTURE_3D||H===t.TEXTURE_2D_ARRAY?t.texImage3D(ye,0,t.RGBA,1,1,Fe,0,t.RGBA,t.UNSIGNED_BYTE,be):t.texImage2D(ye+Ve,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,be);return he}const xe={};xe[t.TEXTURE_2D]=ne(t.TEXTURE_2D,t.TEXTURE_2D,1),xe[t.TEXTURE_CUBE_MAP]=ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[t.TEXTURE_2D_ARRAY]=ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),xe[t.TEXTURE_3D]=ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),B(t.DEPTH_TEST),o.setFunc(oo),ie(!1),X(hh),B(t.CULL_FACE),z(As);function B(H){u[H]!==!0&&(t.enable(H),u[H]=!0)}function ue(H){u[H]!==!1&&(t.disable(H),u[H]=!1)}function re(H,ye){return d[H]!==ye?(t.bindFramebuffer(H,ye),d[H]=ye,H===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ye),H===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ye),!0):!1}function me(H,ye){let Ee=h,Fe=!1;if(H){Ee=f.get(ye),Ee===void 0&&(Ee=[],f.set(ye,Ee));const be=H.textures;if(Ee.length!==be.length||Ee[0]!==t.COLOR_ATTACHMENT0){for(let he=0,Ve=be.length;he<Ve;he++)Ee[he]=t.COLOR_ATTACHMENT0+he;Ee.length=be.length,Fe=!0}}else Ee[0]!==t.BACK&&(Ee[0]=t.BACK,Fe=!0);Fe&&t.drawBuffers(Ee)}function Ze(H){return v!==H?(t.useProgram(H),v=H,!0):!1}const P={[Xs]:t.FUNC_ADD,[xT]:t.FUNC_SUBTRACT,[yT]:t.FUNC_REVERSE_SUBTRACT};P[wT]=t.MIN,P[ST]=t.MAX;const _={[MT]:t.ZERO,[ET]:t.ONE,[TT]:t.SRC_COLOR,[vu]:t.SRC_ALPHA,[LT]:t.SRC_ALPHA_SATURATE,[PT]:t.DST_COLOR,[CT]:t.DST_ALPHA,[AT]:t.ONE_MINUS_SRC_COLOR,[_u]:t.ONE_MINUS_SRC_ALPHA,[DT]:t.ONE_MINUS_DST_COLOR,[RT]:t.ONE_MINUS_DST_ALPHA,[IT]:t.CONSTANT_COLOR,[UT]:t.ONE_MINUS_CONSTANT_COLOR,[OT]:t.CONSTANT_ALPHA,[NT]:t.ONE_MINUS_CONSTANT_ALPHA};function z(H,ye,Ee,Fe,be,he,Ve,tt,dt,ft){if(H===As){g===!0&&(ue(t.BLEND),g=!1);return}if(g===!1&&(B(t.BLEND),g=!0),H!==bT){if(H!==m||ft!==E){if((p!==Xs||w!==Xs)&&(t.blendEquation(t.FUNC_ADD),p=Xs,w=Xs),ft)switch(H){case Vr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ph:t.blendFunc(t.ONE,t.ONE);break;case mh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case gh:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Vr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ph:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case mh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}A=null,C=null,U=null,I=null,D.set(0,0,0),k=0,m=H,E=ft}return}be=be||ye,he=he||Ee,Ve=Ve||Fe,(ye!==p||be!==w)&&(t.blendEquationSeparate(P[ye],P[be]),p=ye,w=be),(Ee!==A||Fe!==C||he!==U||Ve!==I)&&(t.blendFuncSeparate(_[Ee],_[Fe],_[he],_[Ve]),A=Ee,C=Fe,U=he,I=Ve),(tt.equals(D)===!1||dt!==k)&&(t.blendColor(tt.r,tt.g,tt.b,dt),D.copy(tt),k=dt),m=H,E=!1}function j(H,ye){H.side===Ki?ue(t.CULL_FACE):B(t.CULL_FACE);let Ee=H.side===Fn;ye&&(Ee=!Ee),ie(Ee),H.blending===Vr&&H.transparent===!1?z(As):z(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);const Fe=H.stencilWrite;a.setTest(Fe),Fe&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),J(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?B(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function ie(H){T!==H&&(H?t.frontFace(t.CW):t.frontFace(t.CCW),T=H)}function X(H){H!==gT?(B(t.CULL_FACE),H!==R&&(H===hh?t.cullFace(t.BACK):H===vT?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),R=H}function ge(H){H!==L&&(Q&&t.lineWidth(H),L=H)}function J(H,ye,Ee){H?(B(t.POLYGON_OFFSET_FILL),(O!==ye||V!==Ee)&&(t.polygonOffset(ye,Ee),O=ye,V=Ee)):ue(t.POLYGON_OFFSET_FILL)}function ce(H){H?B(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function de(H){H===void 0&&(H=t.TEXTURE0+ae-1),we!==H&&(t.activeTexture(H),we=H)}function Pe(H,ye,Ee){Ee===void 0&&(we===null?Ee=t.TEXTURE0+ae-1:Ee=we);let Fe=Me[Ee];Fe===void 0&&(Fe={type:void 0,texture:void 0},Me[Ee]=Fe),(Fe.type!==H||Fe.texture!==ye)&&(we!==Ee&&(t.activeTexture(Ee),we=Ee),t.bindTexture(H,ye||xe[H]),Fe.type=H,Fe.texture=ye)}function S(){const H=Me[we];H!==void 0&&H.type!==void 0&&(t.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function x(){try{t.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function F(){try{t.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Y(){try{t.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function le(){try{t.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function K(){try{t.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Le(){try{t.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ve(){try{t.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function De(){try{t.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ie(){try{t.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _e(){try{t.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(H){bt.equals(H)===!1&&(t.scissor(H.x,H.y,H.z,H.w),bt.copy(H))}function Be(H){Ke.equals(H)===!1&&(t.viewport(H.x,H.y,H.z,H.w),Ke.copy(H))}function Ue(H,ye){let Ee=c.get(ye);Ee===void 0&&(Ee=new WeakMap,c.set(ye,Ee));let Fe=Ee.get(H);Fe===void 0&&(Fe=t.getUniformBlockIndex(ye,H.name),Ee.set(H,Fe))}function Te(H,ye){const Fe=c.get(ye).get(H);l.get(ye)!==Fe&&(t.uniformBlockBinding(ye,Fe,H.__bindingPointIndex),l.set(ye,Fe))}function ct(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},we=null,Me={},d={},f=new WeakMap,h=[],v=null,g=!1,m=null,p=null,A=null,C=null,w=null,U=null,I=null,D=new vt(0,0,0),k=0,E=!1,T=null,R=null,L=null,O=null,V=null,bt.set(0,0,t.canvas.width,t.canvas.height),Ke.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:B,disable:ue,bindFramebuffer:re,drawBuffers:me,useProgram:Ze,setBlending:z,setMaterial:j,setFlipSided:ie,setCullFace:X,setLineWidth:ge,setPolygonOffset:J,setScissorTest:ce,activeTexture:de,bindTexture:Pe,unbindTexture:S,compressedTexImage2D:x,compressedTexImage3D:F,texImage2D:Ie,texImage3D:_e,updateUBOMapping:Ue,uniformBlockBinding:Te,texStorage2D:ve,texStorage3D:De,texSubImage2D:Y,texSubImage3D:le,compressedTexSubImage2D:K,compressedTexSubImage3D:Le,scissor:Ce,viewport:Be,reset:ct}}function _P(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(S,x){return h?new OffscreenCanvas(S,x):ia("canvas")}function g(S,x,F){let Y=1;const le=Pe(S);if((le.width>F||le.height>F)&&(Y=F/Math.max(le.width,le.height)),Y<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const K=Math.floor(Y*le.width),Le=Math.floor(Y*le.height);d===void 0&&(d=v(K,Le));const ve=x?v(K,Le):d;return ve.width=K,ve.height=Le,ve.getContext("2d").drawImage(S,0,0,K,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+K+"x"+Le+")."),ve}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),S;return S}function m(S){return S.generateMipmaps}function p(S){t.generateMipmap(S)}function A(S){return S.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?t.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function C(S,x,F,Y,le=!1){if(S!==null){if(t[S]!==void 0)return t[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let K=x;if(x===t.RED&&(F===t.FLOAT&&(K=t.R32F),F===t.HALF_FLOAT&&(K=t.R16F),F===t.UNSIGNED_BYTE&&(K=t.R8)),x===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(K=t.R8UI),F===t.UNSIGNED_SHORT&&(K=t.R16UI),F===t.UNSIGNED_INT&&(K=t.R32UI),F===t.BYTE&&(K=t.R8I),F===t.SHORT&&(K=t.R16I),F===t.INT&&(K=t.R32I)),x===t.RG&&(F===t.FLOAT&&(K=t.RG32F),F===t.HALF_FLOAT&&(K=t.RG16F),F===t.UNSIGNED_BYTE&&(K=t.RG8)),x===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(K=t.RG8UI),F===t.UNSIGNED_SHORT&&(K=t.RG16UI),F===t.UNSIGNED_INT&&(K=t.RG32UI),F===t.BYTE&&(K=t.RG8I),F===t.SHORT&&(K=t.RG16I),F===t.INT&&(K=t.RG32I)),x===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(K=t.RGB8UI),F===t.UNSIGNED_SHORT&&(K=t.RGB16UI),F===t.UNSIGNED_INT&&(K=t.RGB32UI),F===t.BYTE&&(K=t.RGB8I),F===t.SHORT&&(K=t.RGB16I),F===t.INT&&(K=t.RGB32I)),x===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),F===t.UNSIGNED_INT&&(K=t.RGBA32UI),F===t.BYTE&&(K=t.RGBA8I),F===t.SHORT&&(K=t.RGBA16I),F===t.INT&&(K=t.RGBA32I)),x===t.RGB&&F===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),x===t.RGBA){const Le=le?Ll:Mt.getTransfer(Y);F===t.FLOAT&&(K=t.RGBA32F),F===t.HALF_FLOAT&&(K=t.RGBA16F),F===t.UNSIGNED_BYTE&&(K=Le===Lt?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function w(S,x){let F;return S?x===null||x===or||x===ea?F=t.DEPTH24_STENCIL8:x===Zi?F=t.DEPTH32F_STENCIL8:x===Jo&&(F=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===or||x===ea?F=t.DEPTH_COMPONENT24:x===Zi?F=t.DEPTH_COMPONENT32F:x===Jo&&(F=t.DEPTH_COMPONENT16),F}function U(S,x){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==gi&&S.minFilter!==Ai?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function I(S){const x=S.target;x.removeEventListener("dispose",I),k(x),x.isVideoTexture&&u.delete(x)}function D(S){const x=S.target;x.removeEventListener("dispose",D),T(x)}function k(S){const x=i.get(S);if(x.__webglInit===void 0)return;const F=S.source,Y=f.get(F);if(Y){const le=Y[x.__cacheKey];le.usedTimes--,le.usedTimes===0&&E(S),Object.keys(Y).length===0&&f.delete(F)}i.remove(S)}function E(S){const x=i.get(S);t.deleteTexture(x.__webglTexture);const F=S.source,Y=f.get(F);delete Y[x.__cacheKey],o.memory.textures--}function T(S){const x=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let le=0;le<x.__webglFramebuffer[Y].length;le++)t.deleteFramebuffer(x.__webglFramebuffer[Y][le]);else t.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)t.deleteFramebuffer(x.__webglFramebuffer[Y]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=S.textures;for(let Y=0,le=F.length;Y<le;Y++){const K=i.get(F[Y]);K.__webglTexture&&(t.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(F[Y])}i.remove(S)}let R=0;function L(){R=0}function O(){const S=R;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),R+=1,S}function V(S){const x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function ae(S,x){const F=i.get(S);if(S.isVideoTexture&&ce(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&F.__version!==S.version){const Y=S.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(F,S,x);return}}else S.isExternalTexture&&(F.__webglTexture=S.sourceTexture?S.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+x)}function Q(S,x){const F=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){xe(F,S,x);return}n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+x)}function te(S,x){const F=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){xe(F,S,x);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+x)}function q(S,x){const F=i.get(S);if(S.version>0&&F.__version!==S.version){B(F,S,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+x)}const we={[Cu]:t.REPEAT,[qs]:t.CLAMP_TO_EDGE,[Ru]:t.MIRRORED_REPEAT},Me={[gi]:t.NEAREST,[XT]:t.NEAREST_MIPMAP_NEAREST,[La]:t.NEAREST_MIPMAP_LINEAR,[Ai]:t.LINEAR,[xc]:t.LINEAR_MIPMAP_NEAREST,[Ys]:t.LINEAR_MIPMAP_LINEAR},Ne={[KT]:t.NEVER,[nA]:t.ALWAYS,[ZT]:t.LESS,[iv]:t.LEQUAL,[QT]:t.EQUAL,[tA]:t.GEQUAL,[JT]:t.GREATER,[eA]:t.NOTEQUAL};function Ge(S,x){if(x.type===Zi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ai||x.magFilter===xc||x.magFilter===La||x.magFilter===Ys||x.minFilter===Ai||x.minFilter===xc||x.minFilter===La||x.minFilter===Ys)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(S,t.TEXTURE_WRAP_S,we[x.wrapS]),t.texParameteri(S,t.TEXTURE_WRAP_T,we[x.wrapT]),(S===t.TEXTURE_3D||S===t.TEXTURE_2D_ARRAY)&&t.texParameteri(S,t.TEXTURE_WRAP_R,we[x.wrapR]),t.texParameteri(S,t.TEXTURE_MAG_FILTER,Me[x.magFilter]),t.texParameteri(S,t.TEXTURE_MIN_FILTER,Me[x.minFilter]),x.compareFunction&&(t.texParameteri(S,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(S,t.TEXTURE_COMPARE_FUNC,Ne[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===gi||x.minFilter!==La&&x.minFilter!==Ys||x.type===Zi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(S,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function bt(S,x){let F=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",I));const Y=x.source;let le=f.get(Y);le===void 0&&(le={},f.set(Y,le));const K=V(x);if(K!==S.__cacheKey){le[K]===void 0&&(le[K]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,F=!0),le[K].usedTimes++;const Le=le[S.__cacheKey];Le!==void 0&&(le[S.__cacheKey].usedTimes--,Le.usedTimes===0&&E(x)),S.__cacheKey=K,S.__webglTexture=le[K].texture}return F}function Ke(S,x,F){return Math.floor(Math.floor(S/F)/x)}function ne(S,x,F,Y){const K=S.updateRanges;if(K.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,F,Y,x.data);else{K.sort((_e,Ce)=>_e.start-Ce.start);let Le=0;for(let _e=1;_e<K.length;_e++){const Ce=K[Le],Be=K[_e],Ue=Ce.start+Ce.count,Te=Ke(Be.start,x.width,4),ct=Ke(Ce.start,x.width,4);Be.start<=Ue+1&&Te===ct&&Ke(Be.start+Be.count-1,x.width,4)===Te?Ce.count=Math.max(Ce.count,Be.start+Be.count-Ce.start):(++Le,K[Le]=Be)}K.length=Le+1;const ve=t.getParameter(t.UNPACK_ROW_LENGTH),De=t.getParameter(t.UNPACK_SKIP_PIXELS),Ie=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let _e=0,Ce=K.length;_e<Ce;_e++){const Be=K[_e],Ue=Math.floor(Be.start/4),Te=Math.ceil(Be.count/4),ct=Ue%x.width,H=Math.floor(Ue/x.width),ye=Te,Ee=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ct),t.pixelStorei(t.UNPACK_SKIP_ROWS,H),n.texSubImage2D(t.TEXTURE_2D,0,ct,H,ye,Ee,F,Y,x.data)}S.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ve),t.pixelStorei(t.UNPACK_SKIP_PIXELS,De),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ie)}}function xe(S,x,F){let Y=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=t.TEXTURE_3D);const le=bt(S,x),K=x.source;n.bindTexture(Y,S.__webglTexture,t.TEXTURE0+F);const Le=i.get(K);if(K.version!==Le.__version||le===!0){n.activeTexture(t.TEXTURE0+F);const ve=Mt.getPrimaries(Mt.workingColorSpace),De=x.colorSpace===vs?null:Mt.getPrimaries(x.colorSpace),Ie=x.colorSpace===vs||ve===De?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let _e=g(x.image,!1,s.maxTextureSize);_e=de(x,_e);const Ce=r.convert(x.format,x.colorSpace),Be=r.convert(x.type);let Ue=C(x.internalFormat,Ce,Be,x.colorSpace,x.isVideoTexture);Ge(Y,x);let Te;const ct=x.mipmaps,H=x.isVideoTexture!==!0,ye=Le.__version===void 0||le===!0,Ee=K.dataReady,Fe=U(x,_e);if(x.isDepthTexture)Ue=w(x.format===na,x.type),ye&&(H?n.texStorage2D(t.TEXTURE_2D,1,Ue,_e.width,_e.height):n.texImage2D(t.TEXTURE_2D,0,Ue,_e.width,_e.height,0,Ce,Be,null));else if(x.isDataTexture)if(ct.length>0){H&&ye&&n.texStorage2D(t.TEXTURE_2D,Fe,Ue,ct[0].width,ct[0].height);for(let be=0,he=ct.length;be<he;be++)Te=ct[be],H?Ee&&n.texSubImage2D(t.TEXTURE_2D,be,0,0,Te.width,Te.height,Ce,Be,Te.data):n.texImage2D(t.TEXTURE_2D,be,Ue,Te.width,Te.height,0,Ce,Be,Te.data);x.generateMipmaps=!1}else H?(ye&&n.texStorage2D(t.TEXTURE_2D,Fe,Ue,_e.width,_e.height),Ee&&ne(x,_e,Ce,Be)):n.texImage2D(t.TEXTURE_2D,0,Ue,_e.width,_e.height,0,Ce,Be,_e.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){H&&ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Fe,Ue,ct[0].width,ct[0].height,_e.depth);for(let be=0,he=ct.length;be<he;be++)if(Te=ct[be],x.format!==hi)if(Ce!==null)if(H){if(Ee)if(x.layerUpdates.size>0){const Ve=Hh(Te.width,Te.height,x.format,x.type);for(const tt of x.layerUpdates){const dt=Te.data.subarray(tt*Ve/Te.data.BYTES_PER_ELEMENT,(tt+1)*Ve/Te.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,be,0,0,tt,Te.width,Te.height,1,Ce,dt)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,be,0,0,0,Te.width,Te.height,_e.depth,Ce,Te.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,be,Ue,Te.width,Te.height,_e.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Ee&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,be,0,0,0,Te.width,Te.height,_e.depth,Ce,Be,Te.data):n.texImage3D(t.TEXTURE_2D_ARRAY,be,Ue,Te.width,Te.height,_e.depth,0,Ce,Be,Te.data)}else{H&&ye&&n.texStorage2D(t.TEXTURE_2D,Fe,Ue,ct[0].width,ct[0].height);for(let be=0,he=ct.length;be<he;be++)Te=ct[be],x.format!==hi?Ce!==null?H?Ee&&n.compressedTexSubImage2D(t.TEXTURE_2D,be,0,0,Te.width,Te.height,Ce,Te.data):n.compressedTexImage2D(t.TEXTURE_2D,be,Ue,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Ee&&n.texSubImage2D(t.TEXTURE_2D,be,0,0,Te.width,Te.height,Ce,Be,Te.data):n.texImage2D(t.TEXTURE_2D,be,Ue,Te.width,Te.height,0,Ce,Be,Te.data)}else if(x.isDataArrayTexture)if(H){if(ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Fe,Ue,_e.width,_e.height,_e.depth),Ee)if(x.layerUpdates.size>0){const be=Hh(_e.width,_e.height,x.format,x.type);for(const he of x.layerUpdates){const Ve=_e.data.subarray(he*be/_e.data.BYTES_PER_ELEMENT,(he+1)*be/_e.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,_e.width,_e.height,1,Ce,Be,Ve)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ce,Be,_e.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ue,_e.width,_e.height,_e.depth,0,Ce,Be,_e.data);else if(x.isData3DTexture)H?(ye&&n.texStorage3D(t.TEXTURE_3D,Fe,Ue,_e.width,_e.height,_e.depth),Ee&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ce,Be,_e.data)):n.texImage3D(t.TEXTURE_3D,0,Ue,_e.width,_e.height,_e.depth,0,Ce,Be,_e.data);else if(x.isFramebufferTexture){if(ye)if(H)n.texStorage2D(t.TEXTURE_2D,Fe,Ue,_e.width,_e.height);else{let be=_e.width,he=_e.height;for(let Ve=0;Ve<Fe;Ve++)n.texImage2D(t.TEXTURE_2D,Ve,Ue,be,he,0,Ce,Be,null),be>>=1,he>>=1}}else if(ct.length>0){if(H&&ye){const be=Pe(ct[0]);n.texStorage2D(t.TEXTURE_2D,Fe,Ue,be.width,be.height)}for(let be=0,he=ct.length;be<he;be++)Te=ct[be],H?Ee&&n.texSubImage2D(t.TEXTURE_2D,be,0,0,Ce,Be,Te):n.texImage2D(t.TEXTURE_2D,be,Ue,Ce,Be,Te);x.generateMipmaps=!1}else if(H){if(ye){const be=Pe(_e);n.texStorage2D(t.TEXTURE_2D,Fe,Ue,be.width,be.height)}Ee&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ce,Be,_e)}else n.texImage2D(t.TEXTURE_2D,0,Ue,Ce,Be,_e);m(x)&&p(Y),Le.__version=K.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function B(S,x,F){if(x.image.length!==6)return;const Y=bt(S,x),le=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,S.__webglTexture,t.TEXTURE0+F);const K=i.get(le);if(le.version!==K.__version||Y===!0){n.activeTexture(t.TEXTURE0+F);const Le=Mt.getPrimaries(Mt.workingColorSpace),ve=x.colorSpace===vs?null:Mt.getPrimaries(x.colorSpace),De=x.colorSpace===vs||Le===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const Ie=x.isCompressedTexture||x.image[0].isCompressedTexture,_e=x.image[0]&&x.image[0].isDataTexture,Ce=[];for(let he=0;he<6;he++)!Ie&&!_e?Ce[he]=g(x.image[he],!0,s.maxCubemapSize):Ce[he]=_e?x.image[he].image:x.image[he],Ce[he]=de(x,Ce[he]);const Be=Ce[0],Ue=r.convert(x.format,x.colorSpace),Te=r.convert(x.type),ct=C(x.internalFormat,Ue,Te,x.colorSpace),H=x.isVideoTexture!==!0,ye=K.__version===void 0||Y===!0,Ee=le.dataReady;let Fe=U(x,Be);Ge(t.TEXTURE_CUBE_MAP,x);let be;if(Ie){H&&ye&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Fe,ct,Be.width,Be.height);for(let he=0;he<6;he++){be=Ce[he].mipmaps;for(let Ve=0;Ve<be.length;Ve++){const tt=be[Ve];x.format!==hi?Ue!==null?H?Ee&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ve,0,0,tt.width,tt.height,Ue,tt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ve,ct,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ve,0,0,tt.width,tt.height,Ue,Te,tt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ve,ct,tt.width,tt.height,0,Ue,Te,tt.data)}}}else{if(be=x.mipmaps,H&&ye){be.length>0&&Fe++;const he=Pe(Ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Fe,ct,he.width,he.height)}for(let he=0;he<6;he++)if(_e){H?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ce[he].width,Ce[he].height,Ue,Te,Ce[he].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ct,Ce[he].width,Ce[he].height,0,Ue,Te,Ce[he].data);for(let Ve=0;Ve<be.length;Ve++){const dt=be[Ve].image[he].image;H?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ve+1,0,0,dt.width,dt.height,Ue,Te,dt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ve+1,ct,dt.width,dt.height,0,Ue,Te,dt.data)}}else{H?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ue,Te,Ce[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ct,Ue,Te,Ce[he]);for(let Ve=0;Ve<be.length;Ve++){const tt=be[Ve];H?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ve+1,0,0,Ue,Te,tt.image[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ve+1,ct,Ue,Te,tt.image[he])}}}m(x)&&p(t.TEXTURE_CUBE_MAP),K.__version=le.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function ue(S,x,F,Y,le,K){const Le=r.convert(F.format,F.colorSpace),ve=r.convert(F.type),De=C(F.internalFormat,Le,ve,F.colorSpace),Ie=i.get(x),_e=i.get(F);if(_e.__renderTarget=x,!Ie.__hasExternalTextures){const Ce=Math.max(1,x.width>>K),Be=Math.max(1,x.height>>K);le===t.TEXTURE_3D||le===t.TEXTURE_2D_ARRAY?n.texImage3D(le,K,De,Ce,Be,x.depth,0,Le,ve,null):n.texImage2D(le,K,De,Ce,Be,0,Le,ve,null)}n.bindFramebuffer(t.FRAMEBUFFER,S),J(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,le,_e.__webglTexture,0,ge(x)):(le===t.TEXTURE_2D||le>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,le,_e.__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function re(S,x,F){if(t.bindRenderbuffer(t.RENDERBUFFER,S),x.depthBuffer){const Y=x.depthTexture,le=Y&&Y.isDepthTexture?Y.type:null,K=w(x.stencilBuffer,le),Le=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=ge(x);J(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ve,K,x.width,x.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,K,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,K,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Le,t.RENDERBUFFER,S)}else{const Y=x.textures;for(let le=0;le<Y.length;le++){const K=Y[le],Le=r.convert(K.format,K.colorSpace),ve=r.convert(K.type),De=C(K.internalFormat,Le,ve,K.colorSpace),Ie=ge(x);F&&J(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,De,x.width,x.height):J(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ie,De,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,De,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function me(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ae(x.depthTexture,0);const le=Y.__webglTexture,K=ge(x);if(x.depthTexture.format===ta)J(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0);else if(x.depthTexture.format===na)J(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Ze(S){const x=i.get(S),F=S.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==S.depthTexture){const Y=S.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const le=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",le)};Y.addEventListener("dispose",le),x.__depthDisposeCallback=le}x.__boundDepthTexture=Y}if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const Y=S.texture.mipmaps;Y&&Y.length>0?me(x.__webglFramebuffer[0],S):me(x.__webglFramebuffer,S)}else if(F){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=t.createRenderbuffer(),re(x.__webglDepthbuffer[Y],S,!1);else{const le=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,K)}}else{const Y=S.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),re(x.__webglDepthbuffer,S,!1);else{const le=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,K)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function P(S,x,F){const Y=i.get(S);x!==void 0&&ue(Y.__webglFramebuffer,S,S.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&Ze(S)}function _(S){const x=S.texture,F=i.get(S),Y=i.get(x);S.addEventListener("dispose",D);const le=S.textures,K=S.isWebGLCubeRenderTarget===!0,Le=le.length>1;if(Le||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=x.version,o.memory.textures++),K){F.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[ve]=[];for(let De=0;De<x.mipmaps.length;De++)F.__webglFramebuffer[ve][De]=t.createFramebuffer()}else F.__webglFramebuffer[ve]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let ve=0;ve<x.mipmaps.length;ve++)F.__webglFramebuffer[ve]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(Le)for(let ve=0,De=le.length;ve<De;ve++){const Ie=i.get(le[ve]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=t.createTexture(),o.memory.textures++)}if(S.samples>0&&J(S)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ve=0;ve<le.length;ve++){const De=le[ve];F.__webglColorRenderbuffer[ve]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[ve]);const Ie=r.convert(De.format,De.colorSpace),_e=r.convert(De.type),Ce=C(De.internalFormat,Ie,_e,De.colorSpace,S.isXRRenderTarget===!0),Be=ge(S);t.renderbufferStorageMultisample(t.RENDERBUFFER,Be,Ce,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,F.__webglColorRenderbuffer[ve])}t.bindRenderbuffer(t.RENDERBUFFER,null),S.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),re(F.__webglDepthRenderbuffer,S,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),Ge(t.TEXTURE_CUBE_MAP,x);for(let ve=0;ve<6;ve++)if(x.mipmaps&&x.mipmaps.length>0)for(let De=0;De<x.mipmaps.length;De++)ue(F.__webglFramebuffer[ve][De],S,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,De);else ue(F.__webglFramebuffer[ve],S,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(x)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Le){for(let ve=0,De=le.length;ve<De;ve++){const Ie=le[ve],_e=i.get(Ie);let Ce=t.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(Ce=S.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ce,_e.__webglTexture),Ge(Ce,Ie),ue(F.__webglFramebuffer,S,Ie,t.COLOR_ATTACHMENT0+ve,Ce,0),m(Ie)&&p(Ce)}n.unbindTexture()}else{let ve=t.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ve=S.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ve,Y.__webglTexture),Ge(ve,x),x.mipmaps&&x.mipmaps.length>0)for(let De=0;De<x.mipmaps.length;De++)ue(F.__webglFramebuffer[De],S,x,t.COLOR_ATTACHMENT0,ve,De);else ue(F.__webglFramebuffer,S,x,t.COLOR_ATTACHMENT0,ve,0);m(x)&&p(ve),n.unbindTexture()}S.depthBuffer&&Ze(S)}function z(S){const x=S.textures;for(let F=0,Y=x.length;F<Y;F++){const le=x[F];if(m(le)){const K=A(S),Le=i.get(le).__webglTexture;n.bindTexture(K,Le),p(K),n.unbindTexture()}}}const j=[],ie=[];function X(S){if(S.samples>0){if(J(S)===!1){const x=S.textures,F=S.width,Y=S.height;let le=t.COLOR_BUFFER_BIT;const K=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Le=i.get(S),ve=x.length>1;if(ve)for(let Ie=0;Ie<x.length;Ie++)n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ie,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ie,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const De=S.texture.mipmaps;De&&De.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ie=0;Ie<x.length;Ie++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(le|=t.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(le|=t.STENCIL_BUFFER_BIT)),ve){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Le.__webglColorRenderbuffer[Ie]);const _e=i.get(x[Ie]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,_e,0)}t.blitFramebuffer(0,0,F,Y,0,0,F,Y,le,t.NEAREST),l===!0&&(j.length=0,ie.length=0,j.push(t.COLOR_ATTACHMENT0+Ie),S.depthBuffer&&S.resolveDepthBuffer===!1&&(j.push(K),ie.push(K),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ie)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,j))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ve)for(let Ie=0;Ie<x.length;Ie++){n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ie,t.RENDERBUFFER,Le.__webglColorRenderbuffer[Ie]);const _e=i.get(x[Ie]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ie,t.TEXTURE_2D,_e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const x=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function ge(S){return Math.min(s.maxSamples,S.samples)}function J(S){const x=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ce(S){const x=o.render.frame;u.get(S)!==x&&(u.set(S,x),S.update())}function de(S,x){const F=S.colorSpace,Y=S.format,le=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||F!==co&&F!==vs&&(Mt.getTransfer(F)===Lt?(Y!==hi||le!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function Pe(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=L,this.setTexture2D=ae,this.setTexture2DArray=Q,this.setTexture3D=te,this.setTextureCube=q,this.rebindTextures=P,this.setupRenderTarget=_,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=J}function bP(t,e){function n(i,s=vs){let r;const o=Mt.getTransfer(s);if(i===Oi)return t.UNSIGNED_BYTE;if(i===$d)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Xd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Kg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===qg)return t.BYTE;if(i===Yg)return t.SHORT;if(i===Jo)return t.UNSIGNED_SHORT;if(i===Wd)return t.INT;if(i===or)return t.UNSIGNED_INT;if(i===Zi)return t.FLOAT;if(i===ya)return t.HALF_FLOAT;if(i===Zg)return t.ALPHA;if(i===Qg)return t.RGB;if(i===hi)return t.RGBA;if(i===ta)return t.DEPTH_COMPONENT;if(i===na)return t.DEPTH_STENCIL;if(i===Jg)return t.RED;if(i===jd)return t.RED_INTEGER;if(i===ev)return t.RG;if(i===qd)return t.RG_INTEGER;if(i===Yd)return t.RGBA_INTEGER;if(i===al||i===ll||i===cl||i===ul)if(o===Lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===al)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ll)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===cl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ul)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===al)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ll)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===cl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ul)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Pu||i===Du||i===Lu||i===Iu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Pu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Du)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Lu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Iu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Uu||i===Ou||i===Nu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Uu||i===Ou)return o===Lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Nu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Fu||i===ku||i===Bu||i===Hu||i===zu||i===Vu||i===Gu||i===Wu||i===$u||i===Xu||i===ju||i===qu||i===Yu||i===Ku)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Fu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ku)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$u)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ju)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ku)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dl||i===Zu||i===Qu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===dl)return o===Lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Qu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tv||i===Ju||i===ed||i===td)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===dl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ju)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ed)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===td)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ea?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Ev extends An{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const xP=`
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

}`;class wP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Ev(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ps({vertexShader:xP,fragmentShader:yP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new pi(new Jl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SP extends fr{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,v=null;const g=new wP,m={},p=n.getContextAttributes();let A=null,C=null;const w=[],U=[],I=new lt;let D=null;const k=new $n;k.viewport=new jt;const E=new $n;E.viewport=new jt;const T=[k,E],R=new GA;let L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let xe=w[ne];return xe===void 0&&(xe=new Vc,w[ne]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(ne){let xe=w[ne];return xe===void 0&&(xe=new Vc,w[ne]=xe),xe.getGripSpace()},this.getHand=function(ne){let xe=w[ne];return xe===void 0&&(xe=new Vc,w[ne]=xe),xe.getHandSpace()};function V(ne){const xe=U.indexOf(ne.inputSource);if(xe===-1)return;const B=w[xe];B!==void 0&&(B.update(ne.inputSource,ne.frame,c||o),B.dispatchEvent({type:ne.type,data:ne.inputSource}))}function ae(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",ae),s.removeEventListener("inputsourceschange",Q);for(let ne=0;ne<w.length;ne++){const xe=U[ne];xe!==null&&(U[ne]=null,w[ne].disconnect(xe))}L=null,O=null,g.reset();for(const ne in m)delete m[ne];e.setRenderTarget(A),h=null,f=null,d=null,s=null,C=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",ae),s.addEventListener("inputsourceschange",Q),p.xrCompatible!==!0&&await n.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(s,n)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let B=null,ue=null,re=null;p.depth&&(re=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,B=p.stencil?na:ta,ue=p.stencil?ea:or);const me={colorFormat:n.RGBA8,depthFormat:re,scaleFactor:r};f=d.createProjectionLayer(me),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),C=new lr(f.textureWidth,f.textureHeight,{format:hi,type:Oi,depthTexture:new gv(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const B={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,n,B),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),C=new lr(h.framebufferWidth,h.framebufferHeight,{format:hi,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ke.setContext(s),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Q(ne){for(let xe=0;xe<ne.removed.length;xe++){const B=ne.removed[xe],ue=U.indexOf(B);ue>=0&&(U[ue]=null,w[ue].disconnect(B))}for(let xe=0;xe<ne.added.length;xe++){const B=ne.added[xe];let ue=U.indexOf(B);if(ue===-1){for(let me=0;me<w.length;me++)if(me>=U.length){U.push(B),ue=me;break}else if(U[me]===null){U[me]=B,ue=me;break}if(ue===-1)break}const re=w[ue];re&&re.connect(B)}}const te=new Z,q=new Z;function we(ne,xe,B){te.setFromMatrixPosition(xe.matrixWorld),q.setFromMatrixPosition(B.matrixWorld);const ue=te.distanceTo(q),re=xe.projectionMatrix.elements,me=B.projectionMatrix.elements,Ze=re[14]/(re[10]-1),P=re[14]/(re[10]+1),_=(re[9]+1)/re[5],z=(re[9]-1)/re[5],j=(re[8]-1)/re[0],ie=(me[8]+1)/me[0],X=Ze*j,ge=Ze*ie,J=ue/(-j+ie),ce=J*-j;if(xe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(ce),ne.translateZ(J),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),re[10]===-1)ne.projectionMatrix.copy(xe.projectionMatrix),ne.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const de=Ze+J,Pe=P+J,S=X-ce,x=ge+(ue-ce),F=_*P/Pe*de,Y=z*P/Pe*de;ne.projectionMatrix.makePerspective(S,x,F,Y,de,Pe),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function Me(ne,xe){xe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(xe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let xe=ne.near,B=ne.far;g.texture!==null&&(g.depthNear>0&&(xe=g.depthNear),g.depthFar>0&&(B=g.depthFar)),R.near=E.near=k.near=xe,R.far=E.far=k.far=B,(L!==R.near||O!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),L=R.near,O=R.far),R.layers.mask=ne.layers.mask|6,k.layers.mask=R.layers.mask&3,E.layers.mask=R.layers.mask&5;const ue=ne.parent,re=R.cameras;Me(R,ue);for(let me=0;me<re.length;me++)Me(re[me],ue);re.length===2?we(R,k,E):R.projectionMatrix.copy(k.projectionMatrix),Ne(ne,R,ue)};function Ne(ne,xe,B){B===null?ne.matrix.copy(xe.matrixWorld):(ne.matrix.copy(B.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(xe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(xe.projectionMatrix),ne.projectionMatrixInverse.copy(xe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=nd*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(ne){l=ne,f!==null&&(f.fixedFoveation=ne),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ne)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(R)},this.getCameraTexture=function(ne){return m[ne]};let Ge=null;function bt(ne,xe){if(u=xe.getViewerPose(c||o),v=xe,u!==null){const B=u.views;h!==null&&(e.setRenderTargetFramebuffer(C,h.framebuffer),e.setRenderTarget(C));let ue=!1;B.length!==R.cameras.length&&(R.cameras.length=0,ue=!0);for(let P=0;P<B.length;P++){const _=B[P];let z=null;if(h!==null)z=h.getViewport(_);else{const ie=d.getViewSubImage(f,_);z=ie.viewport,P===0&&(e.setRenderTargetTextures(C,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(C))}let j=T[P];j===void 0&&(j=new $n,j.layers.enable(P),j.viewport=new jt,T[P]=j),j.matrix.fromArray(_.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(_.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(z.x,z.y,z.width,z.height),P===0&&(R.matrix.copy(j.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ue===!0&&R.cameras.push(j)}const re=s.enabledFeatures;if(re&&re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&d){const P=d.getDepthInformation(B[0]);P&&P.isValid&&P.texture&&g.init(P,s.renderState)}if(re&&re.includes("camera-access")&&(e.state.unbindTexture(),d))for(let P=0;P<B.length;P++){const _=B[P].camera;if(_){let z=m[_];z||(z=new Ev,m[_]=z);const j=d.getCameraImage(_);z.sourceTexture=j}}}for(let B=0;B<w.length;B++){const ue=U[B],re=w[B];ue!==null&&re!==void 0&&re.update(ue,xe,c||o)}Ge&&Ge(ne,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),v=null}const Ke=new xv;Ke.setAnimationLoop(bt),this.setAnimationLoop=function(ne){Ge=ne},this.dispose=function(){}}}const Gs=new Ni,MP=new Yt;function EP(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,fv(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,A,C,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,w)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,A,C):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Fn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Fn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),C=A.envMap,w=A.envMapRotation;C&&(m.envMap.value=C,Gs.copy(w),Gs.x*=-1,Gs.y*=-1,Gs.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Gs.y*=-1,Gs.z*=-1),m.envMapRotation.value.setFromMatrix4(MP.makeRotationFromEuler(Gs)),m.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,C){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=C*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function TP(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,C){const w=C.program;i.uniformBlockBinding(A,w)}function c(A,C){let w=s[A.id];w===void 0&&(v(A),w=u(A),s[A.id]=w,A.addEventListener("dispose",m));const U=C.program;i.updateUBOMapping(A,U);const I=e.render.frame;r[A.id]!==I&&(f(A),r[A.id]=I)}function u(A){const C=d();A.__bindingPointIndex=C;const w=t.createBuffer(),U=A.__size,I=A.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,U,I),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,C,w),w}function d(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const C=s[A.id],w=A.uniforms,U=A.__cache;t.bindBuffer(t.UNIFORM_BUFFER,C);for(let I=0,D=w.length;I<D;I++){const k=Array.isArray(w[I])?w[I]:[w[I]];for(let E=0,T=k.length;E<T;E++){const R=k[E];if(h(R,I,E,U)===!0){const L=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let V=0;for(let ae=0;ae<O.length;ae++){const Q=O[ae],te=g(Q);typeof Q=="number"||typeof Q=="boolean"?(R.__data[0]=Q,t.bufferSubData(t.UNIFORM_BUFFER,L+V,R.__data)):Q.isMatrix3?(R.__data[0]=Q.elements[0],R.__data[1]=Q.elements[1],R.__data[2]=Q.elements[2],R.__data[3]=0,R.__data[4]=Q.elements[3],R.__data[5]=Q.elements[4],R.__data[6]=Q.elements[5],R.__data[7]=0,R.__data[8]=Q.elements[6],R.__data[9]=Q.elements[7],R.__data[10]=Q.elements[8],R.__data[11]=0):(Q.toArray(R.__data,V),V+=te.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,L,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(A,C,w,U){const I=A.value,D=C+"_"+w;if(U[D]===void 0)return typeof I=="number"||typeof I=="boolean"?U[D]=I:U[D]=I.clone(),!0;{const k=U[D];if(typeof I=="number"||typeof I=="boolean"){if(k!==I)return U[D]=I,!0}else if(k.equals(I)===!1)return k.copy(I),!0}return!1}function v(A){const C=A.uniforms;let w=0;const U=16;for(let D=0,k=C.length;D<k;D++){const E=Array.isArray(C[D])?C[D]:[C[D]];for(let T=0,R=E.length;T<R;T++){const L=E[T],O=Array.isArray(L.value)?L.value:[L.value];for(let V=0,ae=O.length;V<ae;V++){const Q=O[V],te=g(Q),q=w%U,we=q%te.boundary,Me=q+we;w+=we,Me!==0&&U-Me<te.storage&&(w+=U-Me),L.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,w+=te.storage}}}const I=w%U;return I>0&&(w+=U-I),A.__size=w,A.__cache={},this}function g(A){const C={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(C.boundary=4,C.storage=4):A.isVector2?(C.boundary=8,C.storage=8):A.isVector3||A.isColor?(C.boundary=16,C.storage=12):A.isVector4?(C.boundary=16,C.storage=16):A.isMatrix3?(C.boundary=48,C.storage=48):A.isMatrix4?(C.boundary=64,C.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),C}function m(A){const C=A.target;C.removeEventListener("dispose",m);const w=o.indexOf(C.__bindingPointIndex);o.splice(w,1),t.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function p(){for(const A in s)t.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Tv{constructor(e={}){const{canvas:n=rA(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const v=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const A=[],C=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let U=!1;this._outputColorSpace=On;let I=0,D=0,k=null,E=-1,T=null;const R=new jt,L=new jt;let O=null;const V=new vt(0);let ae=0,Q=n.width,te=n.height,q=1,we=null,Me=null;const Ne=new jt(0,0,Q,te),Ge=new jt(0,0,Q,te);let bt=!1;const Ke=new Qd;let ne=!1,xe=!1;const B=new Yt,ue=new Z,re=new jt,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function P(){return k===null?q:1}let _=i;function z(M,W){return n.getContext(M,W)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Gd}`),n.addEventListener("webglcontextlost",Ee,!1),n.addEventListener("webglcontextrestored",Fe,!1),n.addEventListener("webglcontextcreationerror",be,!1),_===null){const W="webgl2";if(_=z(W,M),_===null)throw z(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let j,ie,X,ge,J,ce,de,Pe,S,x,F,Y,le,K,Le,ve,De,Ie,_e,Ce,Be,Ue,Te,ct;function H(){j=new F2(_),j.init(),Ue=new bP(_,j),ie=new P2(_,j,e,Ue),X=new vP(_,j),ie.reversedDepthBuffer&&f&&X.buffers.depth.setReversed(!0),ge=new H2(_),J=new sP,ce=new _P(_,j,X,J,ie,Ue,ge),de=new L2(w),Pe=new N2(w),S=new XA(_),Te=new C2(_,S),x=new k2(_,S,ge,Te),F=new V2(_,x,S,ge),_e=new z2(_,ie,ce),ve=new D2(J),Y=new iP(w,de,Pe,j,ie,Te,ve),le=new EP(w,J),K=new oP,Le=new fP(j),Ie=new A2(w,de,Pe,X,F,h,l),De=new mP(w,F,ie),ct=new TP(_,ge,ie,X),Ce=new R2(_,j,ge),Be=new B2(_,j,ge),ge.programs=Y.programs,w.capabilities=ie,w.extensions=j,w.properties=J,w.renderLists=K,w.shadowMap=De,w.state=X,w.info=ge}H();const ye=new SP(w,_);this.xr=ye,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const M=j.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=j.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(M){M!==void 0&&(q=M,this.setSize(Q,te,!1))},this.getSize=function(M){return M.set(Q,te)},this.setSize=function(M,W,ee=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=M,te=W,n.width=Math.floor(M*q),n.height=Math.floor(W*q),ee===!0&&(n.style.width=M+"px",n.style.height=W+"px"),this.setViewport(0,0,M,W)},this.getDrawingBufferSize=function(M){return M.set(Q*q,te*q).floor()},this.setDrawingBufferSize=function(M,W,ee){Q=M,te=W,q=ee,n.width=Math.floor(M*ee),n.height=Math.floor(W*ee),this.setViewport(0,0,M,W)},this.getCurrentViewport=function(M){return M.copy(R)},this.getViewport=function(M){return M.copy(Ne)},this.setViewport=function(M,W,ee,se){M.isVector4?Ne.set(M.x,M.y,M.z,M.w):Ne.set(M,W,ee,se),X.viewport(R.copy(Ne).multiplyScalar(q).round())},this.getScissor=function(M){return M.copy(Ge)},this.setScissor=function(M,W,ee,se){M.isVector4?Ge.set(M.x,M.y,M.z,M.w):Ge.set(M,W,ee,se),X.scissor(L.copy(Ge).multiplyScalar(q).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(M){X.setScissorTest(bt=M)},this.setOpaqueSort=function(M){we=M},this.setTransparentSort=function(M){Me=M},this.getClearColor=function(M){return M.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(M=!0,W=!0,ee=!0){let se=0;if(M){let $=!1;if(k!==null){const Se=k.texture.format;$=Se===Yd||Se===qd||Se===jd}if($){const Se=k.texture.type,Oe=Se===Oi||Se===or||Se===Jo||Se===ea||Se===$d||Se===Xd,We=Ie.getClearColor(),He=Ie.getClearAlpha(),nt=We.r,it=We.g,qe=We.b;Oe?(v[0]=nt,v[1]=it,v[2]=qe,v[3]=He,_.clearBufferuiv(_.COLOR,0,v)):(g[0]=nt,g[1]=it,g[2]=qe,g[3]=He,_.clearBufferiv(_.COLOR,0,g))}else se|=_.COLOR_BUFFER_BIT}W&&(se|=_.DEPTH_BUFFER_BIT),ee&&(se|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ee,!1),n.removeEventListener("webglcontextrestored",Fe,!1),n.removeEventListener("webglcontextcreationerror",be,!1),Ie.dispose(),K.dispose(),Le.dispose(),J.dispose(),de.dispose(),Pe.dispose(),F.dispose(),Te.dispose(),ct.dispose(),Y.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",G),ye.removeEventListener("sessionend",y),N.stop()};function Ee(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const M=ge.autoReset,W=De.enabled,ee=De.autoUpdate,se=De.needsUpdate,$=De.type;H(),ge.autoReset=M,De.enabled=W,De.autoUpdate=ee,De.needsUpdate=se,De.type=$}function be(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function he(M){const W=M.target;W.removeEventListener("dispose",he),Ve(W)}function Ve(M){tt(M),J.remove(M)}function tt(M){const W=J.get(M).programs;W!==void 0&&(W.forEach(function(ee){Y.releaseProgram(ee)}),M.isShaderMaterial&&Y.releaseShaderCache(M))}this.renderBufferDirect=function(M,W,ee,se,$,Se){W===null&&(W=me);const Oe=$.isMesh&&$.matrixWorld.determinant()<0,We=Gt(M,W,ee,se,$);X.setMaterial(se,Oe);let He=ee.index,nt=1;if(se.wireframe===!0){if(He=x.getWireframeAttribute(ee),He===void 0)return;nt=2}const it=ee.drawRange,qe=ee.attributes.position;let yt=it.start*nt,Pt=(it.start+it.count)*nt;Se!==null&&(yt=Math.max(yt,Se.start*nt),Pt=Math.min(Pt,(Se.start+Se.count)*nt)),He!==null?(yt=Math.max(yt,0),Pt=Math.min(Pt,He.count)):qe!=null&&(yt=Math.max(yt,0),Pt=Math.min(Pt,qe.count));const Wt=Pt-yt;if(Wt<0||Wt===1/0)return;Te.setup($,se,We,ee,He);let Bt,Ut=Ce;if(He!==null&&(Bt=S.get(He),Ut=Be,Ut.setIndex(Bt)),$.isMesh)se.wireframe===!0?(X.setLineWidth(se.wireframeLinewidth*P()),Ut.setMode(_.LINES)):Ut.setMode(_.TRIANGLES);else if($.isLine){let Qe=se.linewidth;Qe===void 0&&(Qe=1),X.setLineWidth(Qe*P()),$.isLineSegments?Ut.setMode(_.LINES):$.isLineLoop?Ut.setMode(_.LINE_LOOP):Ut.setMode(_.LINE_STRIP)}else $.isPoints?Ut.setMode(_.POINTS):$.isSprite&&Ut.setMode(_.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Gr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ut.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))Ut.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Qe=$._multiDrawStarts,zt=$._multiDrawCounts,wt=$._multiDrawCount,Bn=He?S.get(He).bytesPerElement:1,hr=J.get(se).currentProgram.getUniforms();for(let Hn=0;Hn<wt;Hn++)hr.setValue(_,"_gl_DrawID",Hn),Ut.render(Qe[Hn]/Bn,zt[Hn])}else if($.isInstancedMesh)Ut.renderInstances(yt,Wt,$.count);else if(ee.isInstancedBufferGeometry){const Qe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,zt=Math.min(ee.instanceCount,Qe);Ut.renderInstances(yt,Wt,zt)}else Ut.render(yt,Wt)};function dt(M,W,ee){M.transparent===!0&&M.side===Ki&&M.forceSinglePass===!1?(M.side=Fn,M.needsUpdate=!0,rt(M,W,ee),M.side=Rs,M.needsUpdate=!0,rt(M,W,ee),M.side=Ki):rt(M,W,ee)}this.compile=function(M,W,ee=null){ee===null&&(ee=M),p=Le.get(ee),p.init(W),C.push(p),ee.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),M!==ee&&M.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights();const se=new Set;return M.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Se=$.material;if(Se)if(Array.isArray(Se))for(let Oe=0;Oe<Se.length;Oe++){const We=Se[Oe];dt(We,ee,$),se.add(We)}else dt(Se,ee,$),se.add(Se)}),p=C.pop(),se},this.compileAsync=function(M,W,ee=null){const se=this.compile(M,W,ee);return new Promise($=>{function Se(){if(se.forEach(function(Oe){J.get(Oe).currentProgram.isReady()&&se.delete(Oe)}),se.size===0){$(M);return}setTimeout(Se,10)}j.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let ft=null;function Pn(M){ft&&ft(M)}function G(){N.stop()}function y(){N.start()}const N=new xv;N.setAnimationLoop(Pn),typeof self<"u"&&N.setContext(self),this.setAnimationLoop=function(M){ft=M,ye.setAnimationLoop(M),M===null?N.stop():N.start()},ye.addEventListener("sessionstart",G),ye.addEventListener("sessionend",y),this.render=function(M,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(W),W=ye.getCamera()),M.isScene===!0&&M.onBeforeRender(w,M,W,k),p=Le.get(M,C.length),p.init(W),C.push(p),B.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Ke.setFromProjectionMatrix(B,Ci,W.reversedDepth),xe=this.localClippingEnabled,ne=ve.init(this.clippingPlanes,xe),m=K.get(M,A.length),m.init(),A.push(m),ye.enabled===!0&&ye.isPresenting===!0){const Se=w.xr.getDepthSensingMesh();Se!==null&&pe(Se,W,-1/0,w.sortObjects)}pe(M,W,0,w.sortObjects),m.finish(),w.sortObjects===!0&&m.sort(we,Me),Ze=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,Ze&&Ie.addToRenderList(m,M),this.info.render.frame++,ne===!0&&ve.beginShadows();const ee=p.state.shadowsArray;De.render(ee,M,W),ne===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=m.opaque,$=m.transmissive;if(p.setupLights(),W.isArrayCamera){const Se=W.cameras;if($.length>0)for(let Oe=0,We=Se.length;Oe<We;Oe++){const He=Se[Oe];ke(se,$,M,He)}Ze&&Ie.render(M);for(let Oe=0,We=Se.length;Oe<We;Oe++){const He=Se[Oe];Ae(m,M,He,He.viewport)}}else $.length>0&&ke(se,$,M,W),Ze&&Ie.render(M),Ae(m,M,W);k!==null&&D===0&&(ce.updateMultisampleRenderTarget(k),ce.updateRenderTargetMipmap(k)),M.isScene===!0&&M.onAfterRender(w,M,W),Te.resetDefaultState(),E=-1,T=null,C.pop(),C.length>0?(p=C[C.length-1],ne===!0&&ve.setGlobalState(w.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function pe(M,W,ee,se){if(M.visible===!1)return;if(M.layers.test(W.layers)){if(M.isGroup)ee=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(W);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ke.intersectsSprite(M)){se&&re.setFromMatrixPosition(M.matrixWorld).applyMatrix4(B);const Oe=F.update(M),We=M.material;We.visible&&m.push(M,Oe,We,ee,re.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ke.intersectsObject(M))){const Oe=F.update(M),We=M.material;if(se&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),re.copy(M.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),re.copy(Oe.boundingSphere.center)),re.applyMatrix4(M.matrixWorld).applyMatrix4(B)),Array.isArray(We)){const He=Oe.groups;for(let nt=0,it=He.length;nt<it;nt++){const qe=He[nt],yt=We[qe.materialIndex];yt&&yt.visible&&m.push(M,Oe,yt,ee,re.z,qe)}}else We.visible&&m.push(M,Oe,We,ee,re.z,null)}}const Se=M.children;for(let Oe=0,We=Se.length;Oe<We;Oe++)pe(Se[Oe],W,ee,se)}function Ae(M,W,ee,se){const $=M.opaque,Se=M.transmissive,Oe=M.transparent;p.setupLightsView(ee),ne===!0&&ve.setGlobalState(w.clippingPlanes,ee),se&&X.viewport(R.copy(se)),$.length>0&&je($,W,ee),Se.length>0&&je(Se,W,ee),Oe.length>0&&je(Oe,W,ee),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function ke(M,W,ee,se){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[se.id]===void 0&&(p.state.transmissionRenderTarget[se.id]=new lr(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?ya:Oi,minFilter:Ys,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const Se=p.state.transmissionRenderTarget[se.id],Oe=se.viewport||R;Se.setSize(Oe.z*w.transmissionResolutionScale,Oe.w*w.transmissionResolutionScale);const We=w.getRenderTarget(),He=w.getActiveCubeFace(),nt=w.getActiveMipmapLevel();w.setRenderTarget(Se),w.getClearColor(V),ae=w.getClearAlpha(),ae<1&&w.setClearColor(16777215,.5),w.clear(),Ze&&Ie.render(ee);const it=w.toneMapping;w.toneMapping=Cs;const qe=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),p.setupLightsView(se),ne===!0&&ve.setGlobalState(w.clippingPlanes,se),je(M,ee,se),ce.updateMultisampleRenderTarget(Se),ce.updateRenderTargetMipmap(Se),j.has("WEBGL_multisampled_render_to_texture")===!1){let yt=!1;for(let Pt=0,Wt=W.length;Pt<Wt;Pt++){const Bt=W[Pt],Ut=Bt.object,Qe=Bt.geometry,zt=Bt.material,wt=Bt.group;if(zt.side===Ki&&Ut.layers.test(se.layers)){const Bn=zt.side;zt.side=Fn,zt.needsUpdate=!0,st(Ut,ee,se,Qe,zt,wt),zt.side=Bn,zt.needsUpdate=!0,yt=!0}}yt===!0&&(ce.updateMultisampleRenderTarget(Se),ce.updateRenderTargetMipmap(Se))}w.setRenderTarget(We,He,nt),w.setClearColor(V,ae),qe!==void 0&&(se.viewport=qe),w.toneMapping=it}function je(M,W,ee){const se=W.isScene===!0?W.overrideMaterial:null;for(let $=0,Se=M.length;$<Se;$++){const Oe=M[$],We=Oe.object,He=Oe.geometry,nt=Oe.group;let it=Oe.material;it.allowOverride===!0&&se!==null&&(it=se),We.layers.test(ee.layers)&&st(We,W,ee,He,it,nt)}}function st(M,W,ee,se,$,Se){M.onBeforeRender(w,W,ee,se,$,Se),M.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),$.onBeforeRender(w,W,ee,se,M,Se),$.transparent===!0&&$.side===Ki&&$.forceSinglePass===!1?($.side=Fn,$.needsUpdate=!0,w.renderBufferDirect(ee,W,se,$,M,Se),$.side=Rs,$.needsUpdate=!0,w.renderBufferDirect(ee,W,se,$,M,Se),$.side=Ki):w.renderBufferDirect(ee,W,se,$,M,Se),M.onAfterRender(w,W,ee,se,$,Se)}function rt(M,W,ee){W.isScene!==!0&&(W=me);const se=J.get(M),$=p.state.lights,Se=p.state.shadowsArray,Oe=$.state.version,We=Y.getParameters(M,$.state,Se,W,ee),He=Y.getProgramCacheKey(We);let nt=se.programs;se.environment=M.isMeshStandardMaterial?W.environment:null,se.fog=W.fog,se.envMap=(M.isMeshStandardMaterial?Pe:de).get(M.envMap||se.environment),se.envMapRotation=se.environment!==null&&M.envMap===null?W.environmentRotation:M.envMapRotation,nt===void 0&&(M.addEventListener("dispose",he),nt=new Map,se.programs=nt);let it=nt.get(He);if(it!==void 0){if(se.currentProgram===it&&se.lightsStateVersion===Oe)return xt(M,We),it}else We.uniforms=Y.getUniforms(M),M.onBeforeCompile(We,w),it=Y.acquireProgram(We,He),nt.set(He,it),se.uniforms=We.uniforms;const qe=se.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(qe.clippingPlanes=ve.uniform),xt(M,We),se.needsLights=is(M),se.lightsStateVersion=Oe,se.needsLights&&(qe.ambientLightColor.value=$.state.ambient,qe.lightProbe.value=$.state.probe,qe.directionalLights.value=$.state.directional,qe.directionalLightShadows.value=$.state.directionalShadow,qe.spotLights.value=$.state.spot,qe.spotLightShadows.value=$.state.spotShadow,qe.rectAreaLights.value=$.state.rectArea,qe.ltc_1.value=$.state.rectAreaLTC1,qe.ltc_2.value=$.state.rectAreaLTC2,qe.pointLights.value=$.state.point,qe.pointLightShadows.value=$.state.pointShadow,qe.hemisphereLights.value=$.state.hemi,qe.directionalShadowMap.value=$.state.directionalShadowMap,qe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,qe.spotShadowMap.value=$.state.spotShadowMap,qe.spotLightMatrix.value=$.state.spotLightMatrix,qe.spotLightMap.value=$.state.spotLightMap,qe.pointShadowMap.value=$.state.pointShadowMap,qe.pointShadowMatrix.value=$.state.pointShadowMatrix),se.currentProgram=it,se.uniformsList=null,it}function Xe(M){if(M.uniformsList===null){const W=M.currentProgram.getUniforms();M.uniformsList=hl.seqWithValue(W.seq,M.uniforms)}return M.uniformsList}function xt(M,W){const ee=J.get(M);ee.outputColorSpace=W.outputColorSpace,ee.batching=W.batching,ee.batchingColor=W.batchingColor,ee.instancing=W.instancing,ee.instancingColor=W.instancingColor,ee.instancingMorph=W.instancingMorph,ee.skinning=W.skinning,ee.morphTargets=W.morphTargets,ee.morphNormals=W.morphNormals,ee.morphColors=W.morphColors,ee.morphTargetsCount=W.morphTargetsCount,ee.numClippingPlanes=W.numClippingPlanes,ee.numIntersection=W.numClipIntersection,ee.vertexAlphas=W.vertexAlphas,ee.vertexTangents=W.vertexTangents,ee.toneMapping=W.toneMapping}function Gt(M,W,ee,se,$){W.isScene!==!0&&(W=me),ce.resetTextureUnits();const Se=W.fog,Oe=se.isMeshStandardMaterial?W.environment:null,We=k===null?w.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:co,He=(se.isMeshStandardMaterial?Pe:de).get(se.envMap||Oe),nt=se.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,it=!!ee.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),qe=!!ee.morphAttributes.position,yt=!!ee.morphAttributes.normal,Pt=!!ee.morphAttributes.color;let Wt=Cs;se.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Wt=w.toneMapping);const Bt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Ut=Bt!==void 0?Bt.length:0,Qe=J.get(se),zt=p.state.lights;if(ne===!0&&(xe===!0||M!==T)){const xn=M===T&&se.id===E;ve.setState(se,M,xn)}let wt=!1;se.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==zt.state.version||Qe.outputColorSpace!==We||$.isBatchedMesh&&Qe.batching===!1||!$.isBatchedMesh&&Qe.batching===!0||$.isBatchedMesh&&Qe.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Qe.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Qe.instancing===!1||!$.isInstancedMesh&&Qe.instancing===!0||$.isSkinnedMesh&&Qe.skinning===!1||!$.isSkinnedMesh&&Qe.skinning===!0||$.isInstancedMesh&&Qe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Qe.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Qe.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Qe.instancingMorph===!1&&$.morphTexture!==null||Qe.envMap!==He||se.fog===!0&&Qe.fog!==Se||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==ve.numPlanes||Qe.numIntersection!==ve.numIntersection)||Qe.vertexAlphas!==nt||Qe.vertexTangents!==it||Qe.morphTargets!==qe||Qe.morphNormals!==yt||Qe.morphColors!==Pt||Qe.toneMapping!==Wt||Qe.morphTargetsCount!==Ut)&&(wt=!0):(wt=!0,Qe.__version=se.version);let Bn=Qe.currentProgram;wt===!0&&(Bn=rt(se,W,$));let hr=!1,Hn=!1,bo=!1;const Vt=Bn.getUniforms(),Jn=Qe.uniforms;if(X.useProgram(Bn.program)&&(hr=!0,Hn=!0,bo=!0),se.id!==E&&(E=se.id,Hn=!0),hr||T!==M){X.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Vt.setValue(_,"projectionMatrix",M.projectionMatrix),Vt.setValue(_,"viewMatrix",M.matrixWorldInverse);const Ln=Vt.map.cameraPosition;Ln!==void 0&&Ln.setValue(_,ue.setFromMatrixPosition(M.matrixWorld)),ie.logarithmicDepthBuffer&&Vt.setValue(_,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Vt.setValue(_,"isOrthographic",M.isOrthographicCamera===!0),T!==M&&(T=M,Hn=!0,bo=!0)}if($.isSkinnedMesh){Vt.setOptional(_,$,"bindMatrix"),Vt.setOptional(_,$,"bindMatrixInverse");const xn=$.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Vt.setValue(_,"boneTexture",xn.boneTexture,ce))}$.isBatchedMesh&&(Vt.setOptional(_,$,"batchingTexture"),Vt.setValue(_,"batchingTexture",$._matricesTexture,ce),Vt.setOptional(_,$,"batchingIdTexture"),Vt.setValue(_,"batchingIdTexture",$._indirectTexture,ce),Vt.setOptional(_,$,"batchingColorTexture"),$._colorsTexture!==null&&Vt.setValue(_,"batchingColorTexture",$._colorsTexture,ce));const ei=ee.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&_e.update($,ee,Bn),(Hn||Qe.receiveShadow!==$.receiveShadow)&&(Qe.receiveShadow=$.receiveShadow,Vt.setValue(_,"receiveShadow",$.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Jn.envMap.value=He,Jn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&W.environment!==null&&(Jn.envMapIntensity.value=W.environmentIntensity),Hn&&(Vt.setValue(_,"toneMappingExposure",w.toneMappingExposure),Qe.needsLights&&Dn(Jn,bo),Se&&se.fog===!0&&le.refreshFogUniforms(Jn,Se),le.refreshMaterialUniforms(Jn,se,q,te,p.state.transmissionRenderTarget[M.id]),hl.upload(_,Xe(Qe),Jn,ce)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(hl.upload(_,Xe(Qe),Jn,ce),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Vt.setValue(_,"center",$.center),Vt.setValue(_,"modelViewMatrix",$.modelViewMatrix),Vt.setValue(_,"normalMatrix",$.normalMatrix),Vt.setValue(_,"modelMatrix",$.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const xn=se.uniformsGroups;for(let Ln=0,nc=xn.length;Ln<nc;Ln++){const Us=xn[Ln];ct.update(Us,Bn),ct.bind(Us,Bn)}}return Bn}function Dn(M,W){M.ambientLightColor.needsUpdate=W,M.lightProbe.needsUpdate=W,M.directionalLights.needsUpdate=W,M.directionalLightShadows.needsUpdate=W,M.pointLights.needsUpdate=W,M.pointLightShadows.needsUpdate=W,M.spotLights.needsUpdate=W,M.spotLightShadows.needsUpdate=W,M.rectAreaLights.needsUpdate=W,M.hemisphereLights.needsUpdate=W}function is(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(M,W,ee){const se=J.get(M);se.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),J.get(M.texture).__webglTexture=W,J.get(M.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ee,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,W){const ee=J.get(M);ee.__webglFramebuffer=W,ee.__useDefaultFramebuffer=W===void 0};const Bv=_.createFramebuffer();this.setRenderTarget=function(M,W=0,ee=0){k=M,I=W,D=ee;let se=!0,$=null,Se=!1,Oe=!1;if(M){const He=J.get(M);if(He.__useDefaultFramebuffer!==void 0)X.bindFramebuffer(_.FRAMEBUFFER,null),se=!1;else if(He.__webglFramebuffer===void 0)ce.setupRenderTarget(M);else if(He.__hasExternalTextures)ce.rebindTextures(M,J.get(M.texture).__webglTexture,J.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const qe=M.depthTexture;if(He.__boundDepthTexture!==qe){if(qe!==null&&J.has(qe)&&(M.width!==qe.image.width||M.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(M)}}const nt=M.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Oe=!0);const it=J.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(it[W])?$=it[W][ee]:$=it[W],Se=!0):M.samples>0&&ce.useMultisampledRTT(M)===!1?$=J.get(M).__webglMultisampledFramebuffer:Array.isArray(it)?$=it[ee]:$=it,R.copy(M.viewport),L.copy(M.scissor),O=M.scissorTest}else R.copy(Ne).multiplyScalar(q).floor(),L.copy(Ge).multiplyScalar(q).floor(),O=bt;if(ee!==0&&($=Bv),X.bindFramebuffer(_.FRAMEBUFFER,$)&&se&&X.drawBuffers(M,$),X.viewport(R),X.scissor(L),X.setScissorTest(O),Se){const He=J.get(M.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+W,He.__webglTexture,ee)}else if(Oe){const He=W;for(let nt=0;nt<M.textures.length;nt++){const it=J.get(M.textures[nt]);_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0+nt,it.__webglTexture,ee,He)}}else if(M!==null&&ee!==0){const He=J.get(M.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,He.__webglTexture,ee)}E=-1},this.readRenderTargetPixels=function(M,W,ee,se,$,Se,Oe,We=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=J.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Oe!==void 0&&(He=He[Oe]),He){X.bindFramebuffer(_.FRAMEBUFFER,He);try{const nt=M.textures[We],it=nt.format,qe=nt.type;if(!ie.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=M.width-se&&ee>=0&&ee<=M.height-$&&(M.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+We),_.readPixels(W,ee,se,$,Ue.convert(it),Ue.convert(qe),Se))}finally{const nt=k!==null?J.get(k).__webglFramebuffer:null;X.bindFramebuffer(_.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(M,W,ee,se,$,Se,Oe,We=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=J.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Oe!==void 0&&(He=He[Oe]),He)if(W>=0&&W<=M.width-se&&ee>=0&&ee<=M.height-$){X.bindFramebuffer(_.FRAMEBUFFER,He);const nt=M.textures[We],it=nt.format,qe=nt.type;if(!ie.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const yt=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,yt),_.bufferData(_.PIXEL_PACK_BUFFER,Se.byteLength,_.STREAM_READ),M.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+We),_.readPixels(W,ee,se,$,Ue.convert(it),Ue.convert(qe),0);const Pt=k!==null?J.get(k).__webglFramebuffer:null;X.bindFramebuffer(_.FRAMEBUFFER,Pt);const Wt=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await oA(_,Wt,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,yt),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,Se),_.deleteBuffer(yt),_.deleteSync(Wt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,W=null,ee=0){const se=Math.pow(2,-ee),$=Math.floor(M.image.width*se),Se=Math.floor(M.image.height*se),Oe=W!==null?W.x:0,We=W!==null?W.y:0;ce.setTexture2D(M,0),_.copyTexSubImage2D(_.TEXTURE_2D,ee,0,0,Oe,We,$,Se),X.unbindTexture()};const Hv=_.createFramebuffer(),zv=_.createFramebuffer();this.copyTextureToTexture=function(M,W,ee=null,se=null,$=0,Se=null){Se===null&&($!==0?(Gr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=$,$=0):Se=0);let Oe,We,He,nt,it,qe,yt,Pt,Wt;const Bt=M.isCompressedTexture?M.mipmaps[Se]:M.image;if(ee!==null)Oe=ee.max.x-ee.min.x,We=ee.max.y-ee.min.y,He=ee.isBox3?ee.max.z-ee.min.z:1,nt=ee.min.x,it=ee.min.y,qe=ee.isBox3?ee.min.z:0;else{const ei=Math.pow(2,-$);Oe=Math.floor(Bt.width*ei),We=Math.floor(Bt.height*ei),M.isDataArrayTexture?He=Bt.depth:M.isData3DTexture?He=Math.floor(Bt.depth*ei):He=1,nt=0,it=0,qe=0}se!==null?(yt=se.x,Pt=se.y,Wt=se.z):(yt=0,Pt=0,Wt=0);const Ut=Ue.convert(W.format),Qe=Ue.convert(W.type);let zt;W.isData3DTexture?(ce.setTexture3D(W,0),zt=_.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ce.setTexture2DArray(W,0),zt=_.TEXTURE_2D_ARRAY):(ce.setTexture2D(W,0),zt=_.TEXTURE_2D),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,W.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,W.unpackAlignment);const wt=_.getParameter(_.UNPACK_ROW_LENGTH),Bn=_.getParameter(_.UNPACK_IMAGE_HEIGHT),hr=_.getParameter(_.UNPACK_SKIP_PIXELS),Hn=_.getParameter(_.UNPACK_SKIP_ROWS),bo=_.getParameter(_.UNPACK_SKIP_IMAGES);_.pixelStorei(_.UNPACK_ROW_LENGTH,Bt.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,Bt.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,nt),_.pixelStorei(_.UNPACK_SKIP_ROWS,it),_.pixelStorei(_.UNPACK_SKIP_IMAGES,qe);const Vt=M.isDataArrayTexture||M.isData3DTexture,Jn=W.isDataArrayTexture||W.isData3DTexture;if(M.isDepthTexture){const ei=J.get(M),xn=J.get(W),Ln=J.get(ei.__renderTarget),nc=J.get(xn.__renderTarget);X.bindFramebuffer(_.READ_FRAMEBUFFER,Ln.__webglFramebuffer),X.bindFramebuffer(_.DRAW_FRAMEBUFFER,nc.__webglFramebuffer);for(let Us=0;Us<He;Us++)Vt&&(_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,J.get(M).__webglTexture,$,qe+Us),_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,J.get(W).__webglTexture,Se,Wt+Us)),_.blitFramebuffer(nt,it,Oe,We,yt,Pt,Oe,We,_.DEPTH_BUFFER_BIT,_.NEAREST);X.bindFramebuffer(_.READ_FRAMEBUFFER,null),X.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else if($!==0||M.isRenderTargetTexture||J.has(M)){const ei=J.get(M),xn=J.get(W);X.bindFramebuffer(_.READ_FRAMEBUFFER,Hv),X.bindFramebuffer(_.DRAW_FRAMEBUFFER,zv);for(let Ln=0;Ln<He;Ln++)Vt?_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,ei.__webglTexture,$,qe+Ln):_.framebufferTexture2D(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,ei.__webglTexture,$),Jn?_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,xn.__webglTexture,Se,Wt+Ln):_.framebufferTexture2D(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,xn.__webglTexture,Se),$!==0?_.blitFramebuffer(nt,it,Oe,We,yt,Pt,Oe,We,_.COLOR_BUFFER_BIT,_.NEAREST):Jn?_.copyTexSubImage3D(zt,Se,yt,Pt,Wt+Ln,nt,it,Oe,We):_.copyTexSubImage2D(zt,Se,yt,Pt,nt,it,Oe,We);X.bindFramebuffer(_.READ_FRAMEBUFFER,null),X.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else Jn?M.isDataTexture||M.isData3DTexture?_.texSubImage3D(zt,Se,yt,Pt,Wt,Oe,We,He,Ut,Qe,Bt.data):W.isCompressedArrayTexture?_.compressedTexSubImage3D(zt,Se,yt,Pt,Wt,Oe,We,He,Ut,Bt.data):_.texSubImage3D(zt,Se,yt,Pt,Wt,Oe,We,He,Ut,Qe,Bt):M.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,Se,yt,Pt,Oe,We,Ut,Qe,Bt.data):M.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,Se,yt,Pt,Bt.width,Bt.height,Ut,Bt.data):_.texSubImage2D(_.TEXTURE_2D,Se,yt,Pt,Oe,We,Ut,Qe,Bt);_.pixelStorei(_.UNPACK_ROW_LENGTH,wt),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,Bn),_.pixelStorei(_.UNPACK_SKIP_PIXELS,hr),_.pixelStorei(_.UNPACK_SKIP_ROWS,Hn),_.pixelStorei(_.UNPACK_SKIP_IMAGES,bo),Se===0&&W.generateMipmaps&&_.generateMipmap(zt),X.unbindTexture()},this.copyTextureToTexture3D=function(M,W,ee=null,se=null,$=0){return Gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,W,ee,se,$)},this.initRenderTarget=function(M){J.get(M).__webglFramebuffer===void 0&&ce.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ce.setTextureCube(M,0):M.isData3DTexture?ce.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ce.setTexture2DArray(M,0):ce.setTexture2D(M,0),X.unbindTexture()},this.resetState=function(){I=0,D=0,k=null,X.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Mt._getUnpackColorSpace()}}const dp={type:"change"},tf={type:"start"},Av={type:"end"},el=new ov,fp=new ms,AP=Math.cos(70*sA.DEG2RAD),en=new Z,Un=2*Math.PI,It={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Qc=1e-6;class Cv extends WA{constructor(e,n=null){super(e,n),this.state=It.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zr.ROTATE,MIDDLE:zr.DOLLY,RIGHT:zr.PAN},this.touches={ONE:Lr.ROTATE,TWO:Lr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new ar,this._lastTargetPosition=new Z,this._quat=new ar().setFromUnitVectors(e.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Bh,this._sphericalDelta=new Bh,this._scale=1,this._panOffset=new Z,this._rotateStart=new lt,this._rotateEnd=new lt,this._rotateDelta=new lt,this._panStart=new lt,this._panEnd=new lt,this._panDelta=new lt,this._dollyStart=new lt,this._dollyEnd=new lt,this._dollyDelta=new lt,this._dollyDirection=new Z,this._mouse=new lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=RP.bind(this),this._onPointerDown=CP.bind(this),this._onPointerUp=PP.bind(this),this._onContextMenu=FP.bind(this),this._onMouseWheel=IP.bind(this),this._onKeyDown=UP.bind(this),this._onTouchStart=OP.bind(this),this._onTouchMove=NP.bind(this),this._onMouseDown=DP.bind(this),this._onMouseMove=LP.bind(this),this._interceptControlDown=kP.bind(this),this._interceptControlUp=BP.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(dp),this.update(),this.state=It.NONE}update(e=null){const n=this.object.position;en.copy(n).sub(this.target),en.applyQuaternion(this._quat),this._spherical.setFromVector3(en),this.autoRotate&&this.state===It.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Un:i>Math.PI&&(i-=Un),s<-Math.PI?s+=Un:s>Math.PI&&(s-=Un),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(en.setFromSpherical(this._spherical),en.applyQuaternion(this._quatInverse),n.copy(this.target).add(en),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=en.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new Z(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new Z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=en.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(el.origin.copy(this.object.position),el.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(el.direction))<AP?this.object.lookAt(this.target):(fp.setFromNormalAndCoplanarPoint(this.object.up,this.target),el.intersectPlane(fp,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Qc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Qc||this._lastTargetPosition.distanceToSquared(this.target)>Qc?(this.dispatchEvent(dp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Un/60*this.autoRotateSpeed*e:Un/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){en.setFromMatrixColumn(n,0),en.multiplyScalar(-e),this._panOffset.add(en)}_panUp(e,n){this.screenSpacePanning===!0?en.setFromMatrixColumn(n,1):(en.setFromMatrixColumn(n,0),en.crossVectors(this.object.up,en)),en.multiplyScalar(e),this._panOffset.add(en)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;en.copy(s).sub(this.target);let r=en.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=n-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/n.clientHeight),this._rotateUp(Un*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/n.clientHeight),this._rotateUp(Un*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new lt,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function CP(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function RP(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function PP(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Av),this.state=It.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function DP(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case zr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=It.DOLLY;break;case zr.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=It.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=It.ROTATE}break;case zr.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=It.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=It.PAN}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(tf)}function LP(t){switch(this.state){case It.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case It.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case It.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function IP(t){this.enabled===!1||this.enableZoom===!1||this.state!==It.NONE||(t.preventDefault(),this.dispatchEvent(tf),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Av))}function UP(t){this.enabled!==!1&&this._handleKeyDown(t)}function OP(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Lr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=It.TOUCH_ROTATE;break;case Lr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=It.TOUCH_PAN;break;default:this.state=It.NONE}break;case 2:switch(this.touches.TWO){case Lr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=It.TOUCH_DOLLY_PAN;break;case Lr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=It.TOUCH_DOLLY_ROTATE;break;default:this.state=It.NONE}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(tf)}function NP(t){switch(this._trackPointer(t),this.state){case It.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case It.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case It.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case It.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=It.NONE}}function FP(t){this.enabled!==!1&&t.preventDefault()}function kP(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function BP(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const HP={__name:"MiyukiBeads",props:{pattern:{type:Array,required:!0},rows:{type:Number,default:10},cols:{type:Number,default:50}},setup(t){const e=t,n=ot(null);let i,s,r,o,a=[];const l=new HA,c=new Map;function u(v){return typeof v=="string"&&v.startsWith("/miyuki-beads-designer/beads/")}function d(v){if(u(v)){const g=v;let m=c.get(g);return m||(m=l.load(g,A=>{A.colorSpace=On,r&&(A.anisotropy=r.capabilities.getMaxAnisotropy())}),m.colorSpace=On,c.set(g,m)),new id({color:16777215,map:m,roughness:.1,metalness:.1,clearcoat:.5,clearcoatRoughness:.1})}return new id({color:v,roughness:.1,metalness:.1,clearcoat:.5,clearcoatRoughness:.1})}function f(){a.forEach(v=>{i.remove(v),v.material&&v.material.dispose()}),a=[]}function h(){const v=new Ql(.7,.7,1.1,32),g=(e.cols-1)/2,m=(e.rows-1)/2;for(let p=0;p<e.rows;p++)for(let A=0;A<e.cols;A++){const C=p*e.cols+A,w=e.pattern[C]||"#ffffff",U=d(w),I=new pi(v,U);I.position.set((A-g)*1.2,-(p-m)*1.2,0),i.add(I),a.push(I)}}return ho(()=>{i=new mv,i.background=new vt(15790320),s=new $n(45,n.value.clientWidth/n.value.clientHeight,.1,1e3),s.position.set(50,-50,50),r=new Tv({antialias:!0}),r.setPixelRatio(Math.min(window.devicePixelRatio||1,2));function v(){if(!n.value)return;const A=n.value.clientWidth,C=n.value.clientHeight;A===0||C===0||(s.aspect=A/C,s.updateProjectionMatrix(),r.setSize(A,C,!1))}v(),n.value.appendChild(r.domElement);const g=new ResizeObserver(()=>{v()});g.observe(n.value),r.__resizeObserver=g,o=new Cv(s,r.domElement),i.add(new bv(16777215,.5));const m=new sd(16777215,3);m.position.set(10,10,10),i.add(m),h();function p(){requestAnimationFrame(p),o.update(),r.render(i,s)}p(),window.addEventListener("resize",v),r.__resizeHandler=v}),qn(()=>e.pattern,()=>{f(),h()},{deep:!0}),wd(()=>{r&&r.__resizeHandler&&window.removeEventListener("resize",r.__resizeHandler),r&&r.__resizeObserver&&n.value&&r.__resizeObserver.disconnect(),o&&o.dispose(),r&&r.dispose(),f()}),(v,g)=>(ze(),$e("div",{ref_key:"container",ref:n,class:"bead-container"},null,512))}},zP={class:"bracelet-wrapper"},VP={class:"canvas-container"},GP={class:"toolbar"},WP={class:"info-panel"},$P={class:"info-item"},XP={class:"info-value"},jP={class:"info-item"},qP={class:"info-value"},YP={__name:"BraceletPreview",props:{pattern:{type:Array,required:!0},rows:{type:Number,required:!0},cols:{type:Number,required:!0},width:{type:Number,default:900},height:{type:Number,default:600}},setup(t,{expose:e}){const n=t,i=ot(null);let s,r,o,a,l=[];function c(){l.forEach(v=>s.remove(v)),l=[]}function u(){if(!s)return;c(),console.log("BraceletPreview - props:",{pattern:n.pattern,rows:n.rows,cols:n.cols,patternLength:n.pattern?n.pattern.length:0,patternType:Array.isArray(n.pattern)?"Array":typeof n.pattern}),n.pattern&&Array.isArray(n.pattern)&&console.log("Pattern structure:",{firstRow:n.pattern[0],firstRowLength:n.pattern[0]?n.pattern[0].length:0,firstRowType:n.pattern[0]?typeof n.pattern[0]:"undefined",sampleValues:n.pattern.slice(0,3).map(I=>I?I.slice(0,3):"undefined")});const v=20,g=Math.PI*1.55,m=-g/2;new vt("#b58a3a");const p=g/n.rows,A=v*p*.98,C=.95,w=1,U=new Ql(C*.7,C*.7,A,16);for(let I=0;I<n.rows;I++)for(let D=0;D<n.cols;D++){let k="#ffffff";if(Array.isArray(n.pattern[0]))k=n.pattern[I]&&n.pattern[I][D]?n.pattern[I][D]:"#ffffff";else{const Q=I*n.cols+D;k=n.pattern[Q]||"#ffffff"}I===0&&D===0&&console.log("First bead debug:",{y:I,x:D,patternY:n.pattern[I],patternYX:n.pattern[I]?n.pattern[I][D]:void 0,colorHex:k,patternType:Array.isArray(n.pattern[0])?"Matrix":"Simple Array",index:I*n.cols+D}),(!k||k==="#"||k.length<3)&&(k="#ffffff",console.warn("Invalid color detected:",k,"using default white"));const E=new vt(k),T=new id({color:E,roughness:.25,metalness:.15,clearcoat:.4,clearcoatRoughness:.1}),R=m+(I+.5)*p,L=(n.cols/2-.5-D)*w,O=v*Math.sin(R),V=v*Math.cos(R),ae=new pi(U,T);ae.position.set(O,L,V),ae.rotation.z=Math.PI/2,ae.rotation.y=R,s.add(ae),l.push(ae)}}function d(){s=new mv,s.background=new vt(15987699),r=new $n(42,n.width/n.height,.1,2e3),r.position.set(0,3,95),r.lookAt(0,0,0),o=new Tv({antialias:!0,preserveDrawingBuffer:!0}),o.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),o.setSize(n.width,n.height,!1),i.value.appendChild(o.domElement),s.add(new bv(16777215,.7));const v=new sd(16777215,1.1);v.position.set(8,10,12),s.add(v);const g=new sd(16777215,.6);g.position.set(-8,-3,8),s.add(g),a=new Cv(r,o.domElement),a.enableDamping=!0,a.target.set(0,0,0);function m(){requestAnimationFrame(m),a.update(),o.render(s,r)}m()}function f(){o&&(a.update(),o.render(s,r))}function h(){f();const v=o.domElement.toDataURL("image/png"),g=document.createElement("a");g.href=v,g.download="bracelet.png",g.click()}return ho(()=>{d(),u(),f()}),qn(()=>[n.pattern,n.rows,n.cols],()=>{u(),f()},{deep:!0}),wd(()=>{a&&a.dispose(),o&&o.dispose(),l=[]}),e({downloadImage:h}),(v,g)=>(ze(),$e("div",zP,[g[4]||(g[4]=b("div",{class:"header"},[b("h2",{class:"title"},"پیش‌نمایش دستبند"),b("p",{class:"subtitle"},"نمایش سه‌بعدی طرح انتخاب شده")],-1)),b("div",VP,[b("div",{ref_key:"container",ref:i,class:"bracelet-canvas"},null,512),g[0]||(g[0]=Pm('<div class="canvas-overlay" data-v-93874d86><div class="controls-hint" data-v-93874d86><div class="hint-item" data-v-93874d86><span class="hint-icon" data-v-93874d86>🖱️</span><span data-v-93874d86>برای چرخاندن کلیک و درگ کنید</span></div><div class="hint-item" data-v-93874d86><span class="hint-icon" data-v-93874d86>🔍</span><span data-v-93874d86>برای زوم اسکرول کنید</span></div></div></div>',1))]),b("div",GP,[b("button",{class:"btn btn-primary",onClick:h},g[1]||(g[1]=[b("span",{class:"btn-icon"},"📥",-1),b("span",null,"دانلود تصویر",-1)])),b("div",WP,[b("div",$P,[g[2]||(g[2]=b("span",{class:"info-label"},"ابعاد:",-1)),b("span",XP,at(t.cols)+" × "+at(t.rows),1)]),b("div",jP,[g[3]||(g[3]=b("span",{class:"info-label"},"تعداد مهره:",-1)),b("span",qP,at(t.cols*t.rows),1)])])])]))}},KP=pa(YP,[["__scopeId","data-v-93874d86"]]),ZP={class:"working-page"},QP={class:"controls-panel"},JP={class:"control-group"},eD={class:"start-controls"},tD={class:"control-label"},nD=["max"],iD={class:"control-label"},sD={class:"control-group"},rD={class:"navigation-controls"},oD=["disabled"],aD=["disabled"],lD={class:"control-group"},cD={class:"info-display"},uD={class:"info-item"},dD={class:"info-value"},fD={class:"info-item"},hD={class:"info-value"},pD={class:"info-item"},mD={class:"info-value"},gD={class:"control-group"},vD={class:"color-management"},_D={class:"color-list-management"},bD={class:"all-colors-list"},xD=["onUpdate:modelValue","placeholder","onInput"],yD={class:"color-code"},wD={class:"pattern-container"},SD={class:"pattern-header"},MD={class:"pattern-info"},ED={class:"instructions-panel"},TD={class:"row-instructions"},AD={class:"color-instructions"},CD={class:"color-list"},RD={class:"color-count"},PD={class:"pattern-instructions"},DD={class:"pattern-sequence"},LD=["title"],ID={class:"grid-wrapper"},UD=["title"],OD={__name:"WorkingPage",props:{pattern:{type:Array,default:()=>[]},rows:{type:Number,default:16},cols:{type:Number,default:80}},setup(t){const e=t,n=ot(0),i=ot("forward"),s=ot(0),r=ot({}),o=()=>{if(!e.pattern||e.pattern.length===0){const L=["#ff6b6b","#4ecdc4","#45b7d1","#96ceb4","#feca57","#ff9ff3","#54a0ff","#5f27cd"],O=[];for(let V=0;V<e.rows;V++)for(let ae=0;ae<e.cols;ae++){const Q=L[Math.floor(Math.random()*L.length)];O.push({color:Q,row:V,col:ae})}return O}const R=[];for(let L=0;L<e.rows;L++)for(let O=0;O<e.cols;O++){const V=L*e.cols+O,ae=e.pattern[V]||"#ffffff";R.push({color:ae,row:L,col:O})}return R},a=ot(o()),l=ot(!0),c=an(()=>l.value?e.rows:e.cols),u=an(()=>c.value-1),d=an(()=>c.value),f=an(()=>{const R=i.value==="forward"?n.value+s.value:n.value-s.value;return Math.max(0,Math.min(c.value-1,R))}),h=an(()=>{const R=[];if(l.value)for(let L=0;L<e.cols;L++){const O=f.value*e.cols+L,V=e.pattern[O]||"#ffffff";R.includes(V)||R.push(V)}else for(let L=0;L<e.rows;L++){const O=L*e.cols+f.value,V=e.pattern[O]||"#ffffff";R.includes(V)||R.push(V)}return R}),v=an(()=>{const R=[];if(l.value)for(let L=0;L<e.cols;L++){const O=f.value*e.cols+L,V=e.pattern[O]||"#ffffff";R.push(V)}else for(let L=0;L<e.rows;L++){const O=L*e.cols+f.value,V=e.pattern[O]||"#ffffff";R.push(V)}return R}),g=an(()=>{const R=new Set;for(let L=0;L<e.pattern.length;L++)e.pattern[L]&&R.add(e.pattern[L]);return Array.from(R).sort()}),m=R=>{const L=Math.floor(R/e.cols),O=R%e.cols;return l.value?L===f.value:O===f.value},p=R=>{const L=Math.floor(R/e.cols),O=R%e.cols;return l.value?L==f.value:O==f.value},A=R=>{const L=Math.floor(R/e.cols),O=R%e.cols;return i.value==="forward"?l.value?L>f.value:O>f.value:l.value?L<f.value:O<f.value},C=R=>m(R)?1:p(R)?.4:.2,w=R=>{let L=0;if(l.value)for(let O=0;O<e.cols;O++){const V=f.value*e.cols+O;e.pattern[V]===R&&L++}else for(let O=0;O<e.rows;O++){const V=O*e.cols+f.value;e.pattern[V]===R&&L++}return L},U=(R,L)=>{r.value[R]=L},I=R=>{const L=r.value[R];if(R.startsWith("/miyuki-beads-designer/beads/")){const O=R.split("/").pop().replace(".jpg","");return L?`${L} (${O})`:O}return L?`${L} (${R})`:R},D=()=>{s.value<d.value-1&&s.value++},k=()=>{s.value>0&&s.value--},E=()=>{s.value=0},T=R=>{switch(R.key){case"Enter":case" ":R.preventDefault(),D();break;case"ArrowLeft":R.preventDefault(),k();break;case"r":case"R":R.preventDefault(),E();break}};return ho(()=>{try{const R=localStorage.getItem("gridEditor_isVertical");l.value=R!==null?JSON.parse(R):!0}catch(R){console.error("Failed to read gridEditor_isVertical from localStorage",R),l.value=!0}document.addEventListener("keydown",T)}),Sd(()=>{document.removeEventListener("keydown",T)}),qn(i,()=>{s.value=0}),qn(n,()=>{s.value=0}),qn(l,()=>{s.value=0,n.value>u.value&&(n.value=0)}),qn(()=>e.pattern,()=>{a.value=o()},{deep:!0}),(R,L)=>(ze(),$e("div",ZP,[L[16]||(L[16]=b("div",{class:"page-header"},[b("h1",{class:"page-title"},"🧶 مراحل اجرای دستبند میوکی"),b("p",{class:"page-subtitle"}," مراحل بافت دستبند را ردیف به ردیف (از بالا به پایین) مشاهده کنید ")],-1)),b("div",QP,[b("div",JP,[L[5]||(L[5]=b("h3",null,"🎯 تنظیمات شروع",-1)),b("div",eD,[b("label",tD,[L[2]||(L[2]=b("span",null,"شروع از ردیف:",-1)),Qt(b("input",{"onUpdate:modelValue":L[0]||(L[0]=O=>n.value=O),type:"number",min:"0",max:u.value,class:"control-input"},null,8,nD),[[tn,n.value,void 0,{number:!0}]])]),b("label",iD,[L[4]||(L[4]=b("span",null,"جهت اجرا:",-1)),Qt(b("select",{"onUpdate:modelValue":L[1]||(L[1]=O=>i.value=O),class:"control-select"},L[3]||(L[3]=[b("option",{value:"forward"},"⬇️ از بالا به پایین",-1),b("option",{value:"backward"},"⬆️ از پایین به بالا",-1)]),512),[[J0,i.value]])])])]),b("div",sD,[L[6]||(L[6]=b("h3",null,"🎮 کنترل‌ها",-1)),b("div",rD,[b("button",{disabled:s.value<=0,class:"nav-btn prev-btn",onClick:k}," ⬅️ مرحله قبل ",8,oD),b("button",{disabled:s.value>=d.value-1,class:"nav-btn next-btn",onClick:D}," مرحله بعد ➡️ ",8,aD),b("button",{class:"nav-btn reset-btn",onClick:E}," 🔄 شروع مجدد ")])]),b("div",lD,[L[10]||(L[10]=b("h3",null,"📊 اطلاعات",-1)),b("div",cD,[b("div",uD,[L[7]||(L[7]=b("span",{class:"info-label"},"مرحله فعلی:",-1)),b("span",dD,at(s.value+1)+" از "+at(d.value),1)]),b("div",fD,[L[8]||(L[8]=b("span",{class:"info-label"},"ردیف فعلی:",-1)),b("span",hD,at(f.value+1)+" از "+at(c.value),1)]),b("div",pD,[L[9]||(L[9]=b("span",{class:"info-label"},"رنگ‌های مورد نیاز:",-1)),b("span",mD,at(h.value.length)+" رنگ",1)])])]),b("div",gD,[L[12]||(L[12]=b("h3",null,"🎨 مدیریت رنگ‌ها",-1)),b("div",vD,[b("div",_D,[L[11]||(L[11]=b("h4",null,"رنگ‌های استفاده شده در طرح:",-1)),b("div",bD,[(ze(!0),$e(Ht,null,Mn(g.value,(O,V)=>(ze(),$e("div",{key:O,class:"color-management-item"},[b("div",{class:"color-swatch-large",style:Xn({backgroundColor:O.startsWith("/miyuki-beads-designer/beads/")?"transparent":O,backgroundImage:O.startsWith("/miyuki-beads-designer/beads/")?`url(${O})`:"none",backgroundSize:"cover",backgroundPosition:"center"})},null,4),Qt(b("input",{"onUpdate:modelValue":ae=>r.value[O]=ae,type:"text",placeholder:`نام رنگ ${V+1}`,class:"color-name-input",onInput:ae=>U(O,ae.target.value)},null,40,xD),[[tn,r.value[O]]]),b("span",yD,at(O),1)]))),128))])])])])]),b("div",wD,[b("div",SD,[L[13]||(L[13]=b("h3",null,"🎨 الگوی دستبند",-1)),b("div",MD,[b("span",null,"ابعاد: "+at(t.rows)+" × "+at(t.cols),1)])]),b("div",ED,[b("h4",null,"📋 دستورالعمل ردیف "+at(f.value+1),1),b("div",TD,[b("div",AD,[L[14]||(L[14]=b("h5",null,"رنگ‌های مورد نیاز:",-1)),b("div",CD,[(ze(!0),$e(Ht,null,Mn(h.value,(O,V)=>(ze(),$e("div",{key:V,class:"color-item"},[b("div",{class:"color-swatch",style:Xn({backgroundColor:O.startsWith("/miyuki-beads-designer/beads/")?"transparent":O,backgroundImage:O.startsWith("/miyuki-beads-designer/beads/")?`url(${O})`:"none",backgroundSize:"cover",backgroundPosition:"center"})},null,4),b("span",RD,at(w(O)),1)]))),128))])]),b("div",PD,[L[15]||(L[15]=b("h5",null,"ترتیب رنگ‌ها:",-1)),b("div",DD,[(ze(!0),$e(Ht,null,Mn(v.value,(O,V)=>(ze(),$e("div",{key:V,class:"sequence-item",style:Xn({backgroundColor:O.startsWith("/miyuki-beads-designer/beads/")?"transparent":O,backgroundImage:O.startsWith("/miyuki-beads-designer/beads/")?`url(${O})`:"none",backgroundSize:"cover",backgroundPosition:"center"}),title:I(O)},null,12,LD))),128))])])])]),b("div",ID,[b("div",{class:"pattern-grid",style:Xn({gridTemplateColumns:`repeat(${t.cols}, 12px)`})},[(ze(!0),$e(Ht,null,Mn(a.value,(O,V)=>(ze(),$e("div",{key:V,class:Je(["grid-cell",{"active-row":m(V),"completed-row":p(V),"upcoming-row":A(V)}]),style:Xn({backgroundColor:O.color.startsWith("/miyuki-beads-designer/beads/")?"transparent":O.color,backgroundImage:O.color.startsWith("/miyuki-beads-designer/beads/")?`url(${O.color})`:"none",backgroundSize:"cover",backgroundPosition:"center",opacity:C(V)}),title:`ردیف ${Math.floor(V/t.cols)+1}, ستون ${V%t.cols+1}: ${O.color}`},null,14,UD))),128))],4)])]),L[17]||(L[17]=Pm('<div class="shortcuts-info" data-v-0bb56b32><h4 data-v-0bb56b32>⌨️ کلیدهای میانبر</h4><div class="shortcuts-list" data-v-0bb56b32><div class="shortcut-item" data-v-0bb56b32><kbd data-v-0bb56b32>Enter</kbd> یا <kbd data-v-0bb56b32>Space</kbd> - مرحله بعد </div><div class="shortcut-item" data-v-0bb56b32><kbd data-v-0bb56b32>←</kbd> - مرحله قبل</div><div class="shortcut-item" data-v-0bb56b32><kbd data-v-0bb56b32>R</kbd> - شروع مجدد</div></div></div>',1))]))}},ND=pa(OD,[["__scopeId","data-v-0bb56b32"]]),FD={class:"home-container"},kD={class:"app-header max-md:hidden flex items-start justify-between mb-3!"},BD={class:"stats-section"},HD={class:"stat-item"},zD={class:"stat-number"},VD={class:"stat-item"},GD={class:"stat-number"},WD={class:"stat-item"},$D={class:"stat-number"},XD={class:"stat-item"},jD={class:"stat-number"},qD={class:"mobile-header-content"},YD={class:"mobile-stats"},KD={class:"mobile-stat-item"},ZD={class:"mobile-stat-number"},QD={class:"mobile-stat-item"},JD={class:"mobile-stat-number"},eL={class:"mobile-stat-item"},tL={class:"mobile-stat-number"},nL={class:"mobile-stat-item"},iL={class:"mobile-stat-number"},sL={class:"content-container"},rL={__name:"HomeView",props:{isMobileHeaderOpen:{type:Boolean,default:!1}},setup(t){const e=t,n=ot(16),i=ot(80),s=ot(Array(16*80).fill("#ffffff")),r=ot(!0),o=ot(!1),a=ot(!1),l=ot(!1);function c(){r.value=!0,o.value=!1,a.value=!1,l.value=!1}function u(){o.value=!0,r.value=!1,a.value=!1,l.value=!1}function d(){a.value=!0,o.value=!1,r.value=!1,l.value=!1}function f(){l.value=!0,r.value=!1,o.value=!1,a.value=!1}function h(v){if(!Array.isArray(v)||v.length===0){s.value=[],n.value=0,i.value=0;return}n.value=v.length,i.value=Array.isArray(v[0])?v[0].length:0,s.value=v.flat()}return(v,g)=>(ze(),$e("div",FD,[b("header",kD,[b("div",{class:"header-content"},[b("div",{class:"header-actions mt-3! flex items-center gap-2"},[b("button",{class:"rounded-md bg-cyan-950 px-4! py-1! text-[14px] text-white",onClick:c}," ویرایشگر شبکه "),b("button",{class:"rounded-md bg-blue-900 px-4! py-1! text-[14px] text-white",onClick:u}," نمایش مهره‌ها "),b("button",{class:"rounded-md bg-emerald-900 px-4! py-1! text-[14px] text-white",onClick:d}," پیش‌نمایش دستبند "),b("button",{class:"rounded-md bg-emerald-900 px-4! py-1! text-[14px] text-white",onClick:f}," مراحل اجرا ")])]),b("div",BD,[b("div",HD,[b("div",zD,at(n.value),1),g[0]||(g[0]=b("div",{class:"stat-label"},"ردیف",-1))]),b("div",VD,[b("div",GD,at(i.value),1),g[1]||(g[1]=b("div",{class:"stat-label"},"ستون",-1))]),b("div",WD,[b("div",$D,at(s.value.length),1),g[2]||(g[2]=b("div",{class:"stat-label"},"مهره",-1))]),b("div",XD,[b("div",jD,at((s.value.length/190).toFixed(2)),1),g[3]||(g[3]=b("div",{class:"stat-label"},"گرم",-1))])])]),b("div",{class:Je(["mobile-header-panel md:hidden",{open:e.isMobileHeaderOpen}])},[b("div",qD,[b("div",{class:"mobile-actions"},[b("button",{class:"mobile-action-btn bg-cyan-950",onClick:c}," ویرایشگر شبکه "),b("button",{class:"mobile-action-btn bg-blue-900",onClick:u}," نمایش مهره‌ها "),b("button",{class:"mobile-action-btn bg-emerald-900",onClick:d}," پیش‌نمایش دستبند "),b("button",{class:"mobile-action-btn bg-emerald-900",onClick:f}," مراحل اجرا ")]),b("div",YD,[b("div",KD,[b("div",ZD,at(n.value),1),g[4]||(g[4]=b("div",{class:"mobile-stat-label"},"ردیف",-1))]),b("div",QD,[b("div",JD,at(i.value),1),g[5]||(g[5]=b("div",{class:"mobile-stat-label"},"ستون",-1))]),b("div",eL,[b("div",tL,at(s.value.length),1),g[6]||(g[6]=b("div",{class:"mobile-stat-label"},"مهره",-1))]),b("div",nL,[b("div",iL,at((s.value.length/190).toFixed(2)),1),g[7]||(g[7]=b("div",{class:"mobile-stat-label"},"گرم",-1))])])])],2),b("div",sL,[r.value?(ze(),Uo(mT,{key:0,class:"content-component",onUpdateGrid:h})):Dt("",!0),o.value?(ze(),Uo(HP,{key:1,pattern:s.value,rows:n.value,cols:i.value,class:"content-component"},null,8,["pattern","rows","cols"])):Dt("",!0),a.value?(ze(),Uo(KP,{key:2,pattern:s.value,rows:n.value,cols:i.value,class:"content-component"},null,8,["pattern","rows","cols"])):Dt("",!0),l.value?(ze(),Uo(ND,{key:3,pattern:s.value,rows:n.value,cols:i.value,class:"content-component"},null,8,["pattern","rows","cols"])):Dt("",!0)])]))}},oL=pa(rL,[["__scopeId","data-v-3694130d"]]),aL=cx({history:Bb("/miyuki-beads-designer/"),routes:[{path:"/",name:"home",component:oL},{path:"/about",name:"about",component:()=>Eo(()=>import("./AboutView-CXi9m9M2.js"),[])},{path:"/sweetalert-demo",name:"sweetalert-demo",component:()=>Eo(()=>import("./SweetAlertDemo-CYnsxkY-.js"),__vite__mapDeps([0,1]))},{path:"/weaving-grid",name:"weaving-grid",component:()=>Eo(()=>import("./WeavingGrid-DCpjBrcL.js"),__vite__mapDeps([2,3,4,5]))},{path:"/beadwork-pattern",name:"beadwork-pattern",component:()=>Eo(()=>import("./BeadworkPattern-CZCCUGND.js"),[])},{path:"/peyote-grid",name:"peyote-grid",component:()=>Eo(()=>import("./PeyoteGrid-SHqUQlQj.js"),__vite__mapDeps([6,3,4,7]))}]});var tc=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Ta=typeof window>"u"||"Deno"in globalThis;function ci(){}function lL(t,e){return typeof t=="function"?t(e):t}function cL(t){return typeof t=="number"&&t>=0&&t!==1/0}function uL(t,e){return Math.max(t+(e||0)-Date.now(),0)}function hp(t,e){return typeof t=="function"?t(e):t}function dL(t,e){return typeof t=="function"?t(e):t}function pp(t,e){const{type:n="all",exact:i,fetchStatus:s,predicate:r,queryKey:o,stale:a}=t;if(o){if(i){if(e.queryHash!==nf(o,e.options))return!1}else if(!ra(e.queryKey,o))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||s&&s!==e.state.fetchStatus||r&&!r(e))}function mp(t,e){const{exact:n,status:i,predicate:s,mutationKey:r}=t;if(r){if(!e.options.mutationKey)return!1;if(n){if(sa(e.options.mutationKey)!==sa(r))return!1}else if(!ra(e.options.mutationKey,r))return!1}return!(i&&e.state.status!==i||s&&!s(e))}function nf(t,e){return((e==null?void 0:e.queryKeyHashFn)||sa)(t)}function sa(t){return JSON.stringify(t,(e,n)=>od(n)?Object.keys(n).sort().reduce((i,s)=>(i[s]=n[s],i),{}):n)}function ra(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?Object.keys(e).every(n=>ra(t[n],e[n])):!1}function Rv(t,e){if(t===e)return t;const n=gp(t)&&gp(e);if(n||od(t)&&od(e)){const i=n?t:Object.keys(t),s=i.length,r=n?e:Object.keys(e),o=r.length,a=n?[]:{};let l=0;for(let c=0;c<o;c++){const u=n?c:r[c];(!n&&i.includes(u)||n)&&t[u]===void 0&&e[u]===void 0?(a[u]=void 0,l++):(a[u]=Rv(t[u],e[u]),a[u]===t[u]&&t[u]!==void 0&&l++)}return s===o&&l===s?t:a}return e}function gp(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function od(t){if(!vp(t))return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(!vp(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function vp(t){return Object.prototype.toString.call(t)==="[object Object]"}function fL(t){return new Promise(e=>{setTimeout(e,t)})}function hL(t,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?Rv(t,e):e}function pL(t,e,n=0){const i=[...t,e];return n&&i.length>n?i.slice(1):i}function mL(t,e,n=0){const i=[e,...t];return n&&i.length>n?i.slice(0,-1):i}var sf=Symbol();function Pv(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===sf?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}var Ks,_s,$r,xp,gL=(xp=class extends tc{constructor(){super();St(this,Ks);St(this,_s);St(this,$r);ht(this,$r,e=>{if(!Ta&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){fe(this,_s)||this.setEventListener(fe(this,$r))}onUnsubscribe(){var e;this.hasListeners()||((e=fe(this,_s))==null||e.call(this),ht(this,_s,void 0))}setEventListener(e){var n;ht(this,$r,e),(n=fe(this,_s))==null||n.call(this),ht(this,_s,e(i=>{typeof i=="boolean"?this.setFocused(i):this.onFocus()}))}setFocused(e){fe(this,Ks)!==e&&(ht(this,Ks,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(n=>{n(e)})}isFocused(){var e;return typeof fe(this,Ks)=="boolean"?fe(this,Ks):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},Ks=new WeakMap,_s=new WeakMap,$r=new WeakMap,xp),Dv=new gL,Xr,bs,jr,yp,vL=(yp=class extends tc{constructor(){super();St(this,Xr,!0);St(this,bs);St(this,jr);ht(this,jr,e=>{if(!Ta&&window.addEventListener){const n=()=>e(!0),i=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",i)}}})}onSubscribe(){fe(this,bs)||this.setEventListener(fe(this,jr))}onUnsubscribe(){var e;this.hasListeners()||((e=fe(this,bs))==null||e.call(this),ht(this,bs,void 0))}setEventListener(e){var n;ht(this,jr,e),(n=fe(this,bs))==null||n.call(this),ht(this,bs,e(this.setOnline.bind(this)))}setOnline(e){fe(this,Xr)!==e&&(ht(this,Xr,e),this.listeners.forEach(i=>{i(e)}))}isOnline(){return fe(this,Xr)}},Xr=new WeakMap,bs=new WeakMap,jr=new WeakMap,yp),Ul=new vL;function _L(){let t,e;const n=new Promise((s,r)=>{t=s,e=r});n.status="pending",n.catch(()=>{});function i(s){Object.assign(n,s),delete n.resolve,delete n.reject}return n.resolve=s=>{i({status:"fulfilled",value:s}),t(s)},n.reject=s=>{i({status:"rejected",reason:s}),e(s)},n}function bL(t){return Math.min(1e3*2**t,3e4)}function Lv(t){return(t??"online")==="online"?Ul.isOnline():!0}var Iv=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function Jc(t){return t instanceof Iv}function Uv(t){let e=!1,n=0,i=!1,s;const r=_L(),o=g=>{var m;i||(f(new Iv(g)),(m=t.abort)==null||m.call(t))},a=()=>{e=!0},l=()=>{e=!1},c=()=>Dv.isFocused()&&(t.networkMode==="always"||Ul.isOnline())&&t.canRun(),u=()=>Lv(t.networkMode)&&t.canRun(),d=g=>{var m;i||(i=!0,(m=t.onSuccess)==null||m.call(t,g),s==null||s(),r.resolve(g))},f=g=>{var m;i||(i=!0,(m=t.onError)==null||m.call(t,g),s==null||s(),r.reject(g))},h=()=>new Promise(g=>{var m;s=p=>{(i||c())&&g(p)},(m=t.onPause)==null||m.call(t)}).then(()=>{var g;s=void 0,i||(g=t.onContinue)==null||g.call(t)}),v=()=>{if(i)return;let g;const m=n===0?t.initialPromise:void 0;try{g=m??t.fn()}catch(p){g=Promise.reject(p)}Promise.resolve(g).then(d).catch(p=>{var I;if(i)return;const A=t.retry??(Ta?0:3),C=t.retryDelay??bL,w=typeof C=="function"?C(n,p):C,U=A===!0||typeof A=="number"&&n<A||typeof A=="function"&&A(n,p);if(e||!U){f(p);return}n++,(I=t.onFail)==null||I.call(t,n,p),fL(w).then(()=>c()?void 0:h()).then(()=>{e?f(p):v()})})};return{promise:r,cancel:o,continue:()=>(s==null||s(),r),cancelRetry:a,continueRetry:l,canStart:u,start:()=>(u()?v():h().then(v),r)}}var xL=t=>setTimeout(t,0);function yL(){let t=[],e=0,n=a=>{a()},i=a=>{a()},s=xL;const r=a=>{e?t.push(a):s(()=>{n(a)})},o=()=>{const a=t;t=[],a.length&&s(()=>{i(()=>{a.forEach(l=>{n(l)})})})};return{batch:a=>{let l;e++;try{l=a()}finally{e--,e||o()}return l},batchCalls:a=>(...l)=>{r(()=>{a(...l)})},schedule:r,setNotifyFunction:a=>{n=a},setBatchNotifyFunction:a=>{i=a},setScheduler:a=>{s=a}}}var Tn=yL(),Zs,wp,Ov=(wp=class{constructor(){St(this,Zs)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),cL(this.gcTime)&&ht(this,Zs,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(Ta?1/0:5*60*1e3))}clearGcTimeout(){fe(this,Zs)&&(clearTimeout(fe(this,Zs)),ht(this,Zs,void 0))}},Zs=new WeakMap,wp),qr,Yr,ni,Qs,hn,oa,Js,ui,$i,Sp,wL=(Sp=class extends Ov{constructor(e){super();St(this,ui);St(this,qr);St(this,Yr);St(this,ni);St(this,Qs);St(this,hn);St(this,oa);St(this,Js);ht(this,Js,!1),ht(this,oa,e.defaultOptions),this.setOptions(e.options),this.observers=[],ht(this,Qs,e.client),ht(this,ni,fe(this,Qs).getQueryCache()),this.queryKey=e.queryKey,this.queryHash=e.queryHash,ht(this,qr,ML(this.options)),this.state=e.state??fe(this,qr),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var e;return(e=fe(this,hn))==null?void 0:e.promise}setOptions(e){this.options={...fe(this,oa),...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&fe(this,ni).remove(this)}setData(e,n){const i=hL(this.state.data,e,this.options);return un(this,ui,$i).call(this,{data:i,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),i}setState(e,n){un(this,ui,$i).call(this,{type:"setState",state:e,setStateOptions:n})}cancel(e){var i,s;const n=(i=fe(this,hn))==null?void 0:i.promise;return(s=fe(this,hn))==null||s.cancel(e),n?n.then(ci).catch(ci):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(fe(this,qr))}isActive(){return this.observers.some(e=>dL(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===sf||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(e=0){return this.state.isInvalidated||this.state.data===void 0||!uL(this.state.dataUpdatedAt,e)}onFocus(){var n;const e=this.observers.find(i=>i.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(n=fe(this,hn))==null||n.continue()}onOnline(){var n;const e=this.observers.find(i=>i.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(n=fe(this,hn))==null||n.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),fe(this,ni).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(fe(this,hn)&&(fe(this,Js)?fe(this,hn).cancel({revert:!0}):fe(this,hn).cancelRetry()),this.scheduleGc()),fe(this,ni).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||un(this,ui,$i).call(this,{type:"invalidate"})}fetch(e,n){var l,c,u;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(fe(this,hn))return fe(this,hn).continueRetry(),fe(this,hn).promise}if(e&&this.setOptions(e),!this.options.queryFn){const d=this.observers.find(f=>f.options.queryFn);d&&this.setOptions(d.options)}const i=new AbortController,s=d=>{Object.defineProperty(d,"signal",{enumerable:!0,get:()=>(ht(this,Js,!0),i.signal)})},r=()=>{const d=Pv(this.options,n),f={client:fe(this,Qs),queryKey:this.queryKey,meta:this.meta};return s(f),ht(this,Js,!1),this.options.persister?this.options.persister(d,f,this):d(f)},o={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:fe(this,Qs),state:this.state,fetchFn:r};s(o),(l=this.options.behavior)==null||l.onFetch(o,this),ht(this,Yr,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((c=o.fetchOptions)==null?void 0:c.meta))&&un(this,ui,$i).call(this,{type:"fetch",meta:(u=o.fetchOptions)==null?void 0:u.meta});const a=d=>{var f,h,v,g;Jc(d)&&d.silent||un(this,ui,$i).call(this,{type:"error",error:d}),Jc(d)||((h=(f=fe(this,ni).config).onError)==null||h.call(f,d,this),(g=(v=fe(this,ni).config).onSettled)==null||g.call(v,this.state.data,d,this)),this.scheduleGc()};return ht(this,hn,Uv({initialPromise:n==null?void 0:n.initialPromise,fn:o.fetchFn,abort:i.abort.bind(i),onSuccess:d=>{var f,h,v,g;if(d===void 0){a(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(d)}catch(m){a(m);return}(h=(f=fe(this,ni).config).onSuccess)==null||h.call(f,d,this),(g=(v=fe(this,ni).config).onSettled)==null||g.call(v,d,this.state.error,this),this.scheduleGc()},onError:a,onFail:(d,f)=>{un(this,ui,$i).call(this,{type:"failed",failureCount:d,error:f})},onPause:()=>{un(this,ui,$i).call(this,{type:"pause"})},onContinue:()=>{un(this,ui,$i).call(this,{type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode,canRun:()=>!0})),fe(this,hn).start()}},qr=new WeakMap,Yr=new WeakMap,ni=new WeakMap,Qs=new WeakMap,hn=new WeakMap,oa=new WeakMap,Js=new WeakMap,ui=new WeakSet,$i=function(e){const n=i=>{switch(e.type){case"failed":return{...i,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...SL(i.data,this.options),fetchMeta:e.meta??null};case"success":return{...i,data:e.data,dataUpdateCount:i.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const s=e.error;return Jc(s)&&s.revert&&fe(this,Yr)?{...fe(this,Yr),fetchStatus:"idle"}:{...i,error:s,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...e.state}}};this.state=n(this.state),Tn.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),fe(this,ni).notify({query:this,type:"updated",action:e})})},Sp);function SL(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Lv(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function ML(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=e!==void 0,i=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var wi,Mp,Nv=(Mp=class extends tc{constructor(n={}){super();St(this,wi);this.config=n,ht(this,wi,new Map)}build(n,i,s){const r=i.queryKey,o=i.queryHash??nf(r,i);let a=this.get(o);return a||(a=new wL({client:n,queryKey:r,queryHash:o,options:n.defaultQueryOptions(i),state:s,defaultOptions:n.getQueryDefaults(r)}),this.add(a)),a}add(n){fe(this,wi).has(n.queryHash)||(fe(this,wi).set(n.queryHash,n),this.notify({type:"added",query:n}))}remove(n){const i=fe(this,wi).get(n.queryHash);i&&(n.destroy(),i===n&&fe(this,wi).delete(n.queryHash),this.notify({type:"removed",query:n}))}clear(){Tn.batch(()=>{this.getAll().forEach(n=>{this.remove(n)})})}get(n){return fe(this,wi).get(n)}getAll(){return[...fe(this,wi).values()]}find(n){const i={exact:!0,...n};return this.getAll().find(s=>pp(i,s))}findAll(n={}){const i=this.getAll();return Object.keys(n).length>0?i.filter(s=>pp(n,s)):i}notify(n){Tn.batch(()=>{this.listeners.forEach(i=>{i(n)})})}onFocus(){Tn.batch(()=>{this.getAll().forEach(n=>{n.onFocus()})})}onOnline(){Tn.batch(()=>{this.getAll().forEach(n=>{n.onOnline()})})}},wi=new WeakMap,Mp),Si,Sn,er,Mi,ds,Ep,EL=(Ep=class extends Ov{constructor(e){super();St(this,Mi);St(this,Si);St(this,Sn);St(this,er);this.mutationId=e.mutationId,ht(this,Sn,e.mutationCache),ht(this,Si,[]),this.state=e.state||TL(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){fe(this,Si).includes(e)||(fe(this,Si).push(e),this.clearGcTimeout(),fe(this,Sn).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){ht(this,Si,fe(this,Si).filter(n=>n!==e)),this.scheduleGc(),fe(this,Sn).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){fe(this,Si).length||(this.state.status==="pending"?this.scheduleGc():fe(this,Sn).remove(this))}continue(){var e;return((e=fe(this,er))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var r,o,a,l,c,u,d,f,h,v,g,m,p,A,C,w,U,I,D,k;const n=()=>{un(this,Mi,ds).call(this,{type:"continue"})};ht(this,er,Uv({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(E,T)=>{un(this,Mi,ds).call(this,{type:"failed",failureCount:E,error:T})},onPause:()=>{un(this,Mi,ds).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>fe(this,Sn).canRun(this)}));const i=this.state.status==="pending",s=!fe(this,er).canStart();try{if(i)n();else{un(this,Mi,ds).call(this,{type:"pending",variables:e,isPaused:s}),await((o=(r=fe(this,Sn).config).onMutate)==null?void 0:o.call(r,e,this));const T=await((l=(a=this.options).onMutate)==null?void 0:l.call(a,e));T!==this.state.context&&un(this,Mi,ds).call(this,{type:"pending",context:T,variables:e,isPaused:s})}const E=await fe(this,er).start();return await((u=(c=fe(this,Sn).config).onSuccess)==null?void 0:u.call(c,E,e,this.state.context,this)),await((f=(d=this.options).onSuccess)==null?void 0:f.call(d,E,e,this.state.context)),await((v=(h=fe(this,Sn).config).onSettled)==null?void 0:v.call(h,E,null,this.state.variables,this.state.context,this)),await((m=(g=this.options).onSettled)==null?void 0:m.call(g,E,null,e,this.state.context)),un(this,Mi,ds).call(this,{type:"success",data:E}),E}catch(E){try{throw await((A=(p=fe(this,Sn).config).onError)==null?void 0:A.call(p,E,e,this.state.context,this)),await((w=(C=this.options).onError)==null?void 0:w.call(C,E,e,this.state.context)),await((I=(U=fe(this,Sn).config).onSettled)==null?void 0:I.call(U,void 0,E,this.state.variables,this.state.context,this)),await((k=(D=this.options).onSettled)==null?void 0:k.call(D,void 0,E,e,this.state.context)),E}finally{un(this,Mi,ds).call(this,{type:"error",error:E})}}finally{fe(this,Sn).runNext(this)}}},Si=new WeakMap,Sn=new WeakMap,er=new WeakMap,Mi=new WeakSet,ds=function(e){const n=i=>{switch(e.type){case"failed":return{...i,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...i,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:e.error,failureCount:i.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=n(this.state),Tn.batch(()=>{fe(this,Si).forEach(i=>{i.onMutationUpdate(e)}),fe(this,Sn).notify({mutation:this,type:"updated",action:e})})},Ep);function TL(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var ji,di,aa,Tp,Fv=(Tp=class extends tc{constructor(n={}){super();St(this,ji);St(this,di);St(this,aa);this.config=n,ht(this,ji,new Set),ht(this,di,new Map),ht(this,aa,0)}build(n,i,s){const r=new EL({mutationCache:this,mutationId:++Aa(this,aa)._,options:n.defaultMutationOptions(i),state:s});return this.add(r),r}add(n){fe(this,ji).add(n);const i=tl(n);if(typeof i=="string"){const s=fe(this,di).get(i);s?s.push(n):fe(this,di).set(i,[n])}this.notify({type:"added",mutation:n})}remove(n){if(fe(this,ji).delete(n)){const i=tl(n);if(typeof i=="string"){const s=fe(this,di).get(i);if(s)if(s.length>1){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}else s[0]===n&&fe(this,di).delete(i)}}this.notify({type:"removed",mutation:n})}canRun(n){const i=tl(n);if(typeof i=="string"){const s=fe(this,di).get(i),r=s==null?void 0:s.find(o=>o.state.status==="pending");return!r||r===n}else return!0}runNext(n){var s;const i=tl(n);if(typeof i=="string"){const r=(s=fe(this,di).get(i))==null?void 0:s.find(o=>o!==n&&o.state.isPaused);return(r==null?void 0:r.continue())??Promise.resolve()}else return Promise.resolve()}clear(){Tn.batch(()=>{fe(this,ji).forEach(n=>{this.notify({type:"removed",mutation:n})}),fe(this,ji).clear(),fe(this,di).clear()})}getAll(){return Array.from(fe(this,ji))}find(n){const i={exact:!0,...n};return this.getAll().find(s=>mp(i,s))}findAll(n={}){return this.getAll().filter(i=>mp(n,i))}notify(n){Tn.batch(()=>{this.listeners.forEach(i=>{i(n)})})}resumePausedMutations(){const n=this.getAll().filter(i=>i.state.isPaused);return Tn.batch(()=>Promise.all(n.map(i=>i.continue().catch(ci))))}},ji=new WeakMap,di=new WeakMap,aa=new WeakMap,Tp);function tl(t){var e;return(e=t.options.scope)==null?void 0:e.id}function _p(t){return{onFetch:(e,n)=>{var u,d,f,h,v;const i=e.options,s=(f=(d=(u=e.fetchOptions)==null?void 0:u.meta)==null?void 0:d.fetchMore)==null?void 0:f.direction,r=((h=e.state.data)==null?void 0:h.pages)||[],o=((v=e.state.data)==null?void 0:v.pageParams)||[];let a={pages:[],pageParams:[]},l=0;const c=async()=>{let g=!1;const m=C=>{Object.defineProperty(C,"signal",{enumerable:!0,get:()=>(e.signal.aborted?g=!0:e.signal.addEventListener("abort",()=>{g=!0}),e.signal)})},p=Pv(e.options,e.fetchOptions),A=async(C,w,U)=>{if(g)return Promise.reject();if(w==null&&C.pages.length)return Promise.resolve(C);const I={client:e.client,queryKey:e.queryKey,pageParam:w,direction:U?"backward":"forward",meta:e.options.meta};m(I);const D=await p(I),{maxPages:k}=e.options,E=U?mL:pL;return{pages:E(C.pages,D,k),pageParams:E(C.pageParams,w,k)}};if(s&&r.length){const C=s==="backward",w=C?AL:bp,U={pages:r,pageParams:o},I=w(i,U);a=await A(U,I,C)}else{const C=t??r.length;do{const w=l===0?o[0]??i.initialPageParam:bp(i,a);if(l>0&&w==null)break;a=await A(a,w),l++}while(l<C)}return a};e.options.persister?e.fetchFn=()=>{var g,m;return(m=(g=e.options).persister)==null?void 0:m.call(g,c,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=c}}}function bp(t,{pages:e,pageParams:n}){const i=e.length-1;return e.length>0?t.getNextPageParam(e[i],e,n[i],n):void 0}function AL(t,{pages:e,pageParams:n}){var i;return e.length>0?(i=t.getPreviousPageParam)==null?void 0:i.call(t,e[0],e,n[0],n):void 0}var Xt,xs,ys,Kr,Zr,ws,Qr,Jr,Ap,CL=(Ap=class{constructor(e={}){St(this,Xt);St(this,xs);St(this,ys);St(this,Kr);St(this,Zr);St(this,ws);St(this,Qr);St(this,Jr);ht(this,Xt,e.queryCache||new Nv),ht(this,xs,e.mutationCache||new Fv),ht(this,ys,e.defaultOptions||{}),ht(this,Kr,new Map),ht(this,Zr,new Map),ht(this,ws,0)}mount(){Aa(this,ws)._++,fe(this,ws)===1&&(ht(this,Qr,Dv.subscribe(async e=>{e&&(await this.resumePausedMutations(),fe(this,Xt).onFocus())})),ht(this,Jr,Ul.subscribe(async e=>{e&&(await this.resumePausedMutations(),fe(this,Xt).onOnline())})))}unmount(){var e,n;Aa(this,ws)._--,fe(this,ws)===0&&((e=fe(this,Qr))==null||e.call(this),ht(this,Qr,void 0),(n=fe(this,Jr))==null||n.call(this),ht(this,Jr,void 0))}isFetching(e){return fe(this,Xt).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return fe(this,xs).findAll({...e,status:"pending"}).length}getQueryData(e){var i;const n=this.defaultQueryOptions({queryKey:e});return(i=fe(this,Xt).get(n.queryHash))==null?void 0:i.state.data}ensureQueryData(e){const n=this.defaultQueryOptions(e),i=fe(this,Xt).build(this,n),s=i.state.data;return s===void 0?this.fetchQuery(e):(e.revalidateIfStale&&i.isStaleByTime(hp(n.staleTime,i))&&this.prefetchQuery(n),Promise.resolve(s))}getQueriesData(e){return fe(this,Xt).findAll(e).map(({queryKey:n,state:i})=>{const s=i.data;return[n,s]})}setQueryData(e,n,i){const s=this.defaultQueryOptions({queryKey:e}),r=fe(this,Xt).get(s.queryHash),o=r==null?void 0:r.state.data,a=lL(n,o);if(a!==void 0)return fe(this,Xt).build(this,s).setData(a,{...i,manual:!0})}setQueriesData(e,n,i){return Tn.batch(()=>fe(this,Xt).findAll(e).map(({queryKey:s})=>[s,this.setQueryData(s,n,i)]))}getQueryState(e){var i;const n=this.defaultQueryOptions({queryKey:e});return(i=fe(this,Xt).get(n.queryHash))==null?void 0:i.state}removeQueries(e){const n=fe(this,Xt);Tn.batch(()=>{n.findAll(e).forEach(i=>{n.remove(i)})})}resetQueries(e,n){const i=fe(this,Xt);return Tn.batch(()=>(i.findAll(e).forEach(s=>{s.reset()}),this.refetchQueries({type:"active",...e},n)))}cancelQueries(e,n={}){const i={revert:!0,...n},s=Tn.batch(()=>fe(this,Xt).findAll(e).map(r=>r.cancel(i)));return Promise.all(s).then(ci).catch(ci)}invalidateQueries(e,n={}){return Tn.batch(()=>(fe(this,Xt).findAll(e).forEach(i=>{i.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},n)))}refetchQueries(e,n={}){const i={...n,cancelRefetch:n.cancelRefetch??!0},s=Tn.batch(()=>fe(this,Xt).findAll(e).filter(r=>!r.isDisabled()).map(r=>{let o=r.fetch(void 0,i);return i.throwOnError||(o=o.catch(ci)),r.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(s).then(ci)}fetchQuery(e){const n=this.defaultQueryOptions(e);n.retry===void 0&&(n.retry=!1);const i=fe(this,Xt).build(this,n);return i.isStaleByTime(hp(n.staleTime,i))?i.fetch(n):Promise.resolve(i.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(ci).catch(ci)}fetchInfiniteQuery(e){return e.behavior=_p(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(ci).catch(ci)}ensureInfiniteQueryData(e){return e.behavior=_p(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return Ul.isOnline()?fe(this,xs).resumePausedMutations():Promise.resolve()}getQueryCache(){return fe(this,Xt)}getMutationCache(){return fe(this,xs)}getDefaultOptions(){return fe(this,ys)}setDefaultOptions(e){ht(this,ys,e)}setQueryDefaults(e,n){fe(this,Kr).set(sa(e),{queryKey:e,defaultOptions:n})}getQueryDefaults(e){const n=[...fe(this,Kr).values()],i={};return n.forEach(s=>{ra(e,s.queryKey)&&Object.assign(i,s.defaultOptions)}),i}setMutationDefaults(e,n){fe(this,Zr).set(sa(e),{mutationKey:e,defaultOptions:n})}getMutationDefaults(e){const n=[...fe(this,Zr).values()],i={};return n.forEach(s=>{ra(e,s.mutationKey)&&Object.assign(i,s.defaultOptions)}),i}defaultQueryOptions(e){if(e._defaulted)return e;const n={...fe(this,ys).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return n.queryHash||(n.queryHash=nf(n.queryKey,n)),n.refetchOnReconnect===void 0&&(n.refetchOnReconnect=n.networkMode!=="always"),n.throwOnError===void 0&&(n.throwOnError=!!n.suspense),!n.networkMode&&n.persister&&(n.networkMode="offlineFirst"),n.queryFn===sf&&(n.enabled=!1),n}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...fe(this,ys).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){fe(this,Xt).clear(),fe(this,xs).clear()}},Xt=new WeakMap,xs=new WeakMap,ys=new WeakMap,Kr=new WeakMap,Zr=new WeakMap,ws=new WeakMap,Qr=new WeakMap,Jr=new WeakMap,Ap),RL="VUE_QUERY_CLIENT";function PL(t){const e=t?`:${t}`:"";return`${RL}${e}`}function ad(t,e,n="",i=0){if(e){const s=e(t,n,i);if(s===void 0&&ln(t)||s!==void 0)return s}if(Array.isArray(t))return t.map((s,r)=>ad(s,e,String(r),i+1));if(typeof t=="object"&&LL(t)){const s=Object.entries(t).map(([r,o])=>[r,ad(o,e,r,i+1)]);return Object.fromEntries(s)}return t}function DL(t,e){return ad(t,e)}function _t(t,e=!1){return DL(t,(n,i,s)=>{if(s===1&&i==="queryKey")return _t(n,!0);if(e&&IL(n))return _t(n(),e);if(ln(n))return _t(Ts(n),e)})}function LL(t){if(Object.prototype.toString.call(t)!=="[object Object]")return!1;const e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function IL(t){return typeof t=="function"}var UL=class extends Nv{find(t){return super.find(_t(t))}findAll(t={}){return super.findAll(_t(t))}},OL=class extends Fv{find(t){return super.find(_t(t))}findAll(t={}){return super.findAll(_t(t))}},NL=class extends CL{constructor(t={}){const e={defaultOptions:t.defaultOptions,queryCache:t.queryCache||new UL,mutationCache:t.mutationCache||new OL};super(e),this.isRestoring=ot(!1)}isFetching(t={}){return super.isFetching(_t(t))}isMutating(t={}){return super.isMutating(_t(t))}getQueryData(t){return super.getQueryData(_t(t))}ensureQueryData(t){return super.ensureQueryData(_t(t))}getQueriesData(t){return super.getQueriesData(_t(t))}setQueryData(t,e,n={}){return super.setQueryData(_t(t),e,_t(n))}setQueriesData(t,e,n={}){return super.setQueriesData(_t(t),e,_t(n))}getQueryState(t){return super.getQueryState(_t(t))}removeQueries(t={}){return super.removeQueries(_t(t))}resetQueries(t={},e={}){return super.resetQueries(_t(t),_t(e))}cancelQueries(t={},e={}){return super.cancelQueries(_t(t),_t(e))}invalidateQueries(t={},e={}){const n=_t(t),i=_t(e);if(super.invalidateQueries({...n,refetchType:"none"},i),n.refetchType==="none")return Promise.resolve();const s={...n,type:n.refetchType??n.type??"active"};return fa().then(()=>super.refetchQueries(s,i))}refetchQueries(t={},e={}){return super.refetchQueries(_t(t),_t(e))}fetchQuery(t){return super.fetchQuery(_t(t))}prefetchQuery(t){return super.prefetchQuery(_t(t))}fetchInfiniteQuery(t){return super.fetchInfiniteQuery(_t(t))}prefetchInfiniteQuery(t){return super.prefetchInfiniteQuery(_t(t))}setDefaultOptions(t){super.setDefaultOptions(_t(t))}setQueryDefaults(t,e){super.setQueryDefaults(_t(t),_t(e))}getQueryDefaults(t){return super.getQueryDefaults(_t(t))}setMutationDefaults(t,e){super.setMutationDefaults(_t(t),_t(e))}getMutationDefaults(t){return super.getMutationDefaults(_t(t))}},FL={install:(t,e={})=>{const n=PL(e.queryClientKey);let i;if("queryClient"in e&&e.queryClient)i=e.queryClient;else{const o="queryClientConfig"in e?e.queryClientConfig:void 0;i=new NL(o)}Ta||i.mount();let s=()=>{};if(e.clientPersister){i.isRestoring.value=!0;const[o,a]=e.clientPersister(i);s=o,a.then(()=>{var l;i.isRestoring.value=!1,(l=e.clientPersisterOnSuccess)==null||l.call(e,i)})}const r=()=>{i.unmount(),s()};if(t.onUnmount)t.onUnmount(r);else{const o=t.unmount;t.unmount=function(){r(),o()}}t.provide(n,i)}};const kv=sb(vx),kL=lb();kv.use(kL).use(aL).use(FL);kv.mount("#app");export{So as A,HL as B,nn as C,HP as D,KP as E,Ht as F,an as G,Uo as H,Oo as I,vt as J,Tv as K,bv as L,sd as M,Ql as N,Cv as O,$n as P,id as Q,pi as R,mv as S,Pm as T,Sd as U,fa as V,ND as W,pa as _,b as a,Dt as b,$e as c,$t as d,VL as e,To as f,bc as g,WL as h,$L as i,XL as j,jL as k,GL as l,ua as m,ho as n,ze as o,wd as p,Qt as q,ot as r,bi as s,at as t,Mn as u,tn as v,qn as w,Je as x,zL as y,Xn as z};
