const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SweetAlertDemo-XNJGIcX_.js","assets/SweetAlertDemo-tn0RQdqM.css","assets/WeavingGrid-CuTTYaBy.js","assets/PeyoteGridEditor-TD1pyI-e.js","assets/PeyoteGridEditor-a3NLjfbt.css","assets/WeavingGrid-CtNwMiec.css","assets/PeyoteGrid-CHDMb5ta.js","assets/PeyoteGrid-Cf_BLC9L.css"])))=>i.map(i=>d[i]);
var Ef=t=>{throw TypeError(t)};var xc=(t,e,n)=>e.has(t)||Ef("Cannot "+n);var fe=(t,e,n)=>(xc(t,e,"read from private field"),n?n.call(t):e.get(t)),St=(t,e,n)=>e.has(t)?Ef("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),ht=(t,e,n,i)=>(xc(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n),fn=(t,e,n)=>(xc(t,e,"access private method"),n);var ka=(t,e,n,i)=>({set _(s){ht(t,e,s,n)},get _(){return fe(t,e,i)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Cd(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Nt={},Xr=[],Li=()=>{},T_=()=>!1,Zl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Rd=t=>t.startsWith("onUpdate:"),cn=Object.assign,Pd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},A_=Object.prototype.hasOwnProperty,Pt=(t,e)=>A_.call(t,e),Ye=Array.isArray,jr=t=>ba(t)==="[object Map]",So=t=>ba(t)==="[object Set]",Tf=t=>ba(t)==="[object Date]",ct=t=>typeof t=="function",qt=t=>typeof t=="string",Ni=t=>typeof t=="symbol",Ot=t=>t!==null&&typeof t=="object",sm=t=>(Ot(t)||ct(t))&&ct(t.then)&&ct(t.catch),rm=Object.prototype.toString,ba=t=>rm.call(t),C_=t=>ba(t).slice(8,-1),om=t=>ba(t)==="[object Object]",Dd=t=>qt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$o=Cd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ql=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},R_=/-(\w)/g,oi=Ql(t=>t.replace(R_,(e,n)=>n?n.toUpperCase():"")),P_=/\B([A-Z])/g,xr=Ql(t=>t.replace(P_,"-$1").toLowerCase()),Jl=Ql(t=>t.charAt(0).toUpperCase()+t.slice(1)),yc=Ql(t=>t?`on${Jl(t)}`:""),Ds=(t,e)=>!Object.is(t,e),gl=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},am=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Rl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},D_=t=>{const e=qt(t)?Number(t):NaN;return isNaN(e)?t:e};let Af;const ec=()=>Af||(Af=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Yn(t){if(Ye(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=qt(i)?N_(i):Yn(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(qt(t)||Ot(t))return t}const L_=/;(?![^(]*\))/g,I_=/:([^]+)/,U_=/\/\*[^]*?\*\//g;function N_(t){const e={};return t.replace(U_,"").split(L_).forEach(n=>{if(n){const i=n.split(I_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ke(t){let e="";if(qt(t))e=t;else if(Ye(t))for(let n=0;n<t.length;n++){const i=Ke(t[n]);i&&(e+=i+" ")}else if(Ot(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const O_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",F_=Cd(O_);function lm(t){return!!t||t===""}function k_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=xa(t[i],e[i]);return n}function xa(t,e){if(t===e)return!0;let n=Tf(t),i=Tf(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Ni(t),i=Ni(e),n||i)return t===e;if(n=Ye(t),i=Ye(e),n||i)return n&&i?k_(t,e):!1;if(n=Ot(t),i=Ot(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!xa(t[o],e[o]))return!1}}return String(t)===String(e)}function Ld(t,e){return t.findIndex(n=>xa(n,e))}const cm=t=>!!(t&&t.__v_isRef===!0),st=t=>qt(t)?t:t==null?"":Ye(t)||Ot(t)&&(t.toString===rm||!ct(t.toString))?cm(t)?st(t.value):JSON.stringify(t,um,2):String(t),um=(t,e)=>cm(e)?um(t,e.value):jr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[wc(i,r)+" =>"]=s,n),{})}:So(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>wc(n))}:Ni(e)?wc(e):Ot(e)&&!Ye(e)&&!om(e)?String(e):e,wc=(t,e="")=>{var n;return Ni(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let jn;class dm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=jn,!e&&jn&&(this.index=(jn.scopes||(jn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=jn;try{return jn=this,e()}finally{jn=n}}}on(){jn=this}off(){jn=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function B_(t){return new dm(t)}function H_(){return jn}let Ft;const Sc=new WeakSet;class fm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,jn&&jn.active&&jn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Sc.has(this)&&(Sc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||pm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Cf(this),mm(this);const e=Ft,n=vi;Ft=this,vi=!0;try{return this.fn()}finally{gm(this),Ft=e,vi=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Nd(e);this.deps=this.depsTail=void 0,Cf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Sc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){bu(this)&&this.run()}get dirty(){return bu(this)}}let hm=0,Xo,jo;function pm(t,e=!1){if(t.flags|=8,e){t.next=jo,jo=t;return}t.next=Xo,Xo=t}function Id(){hm++}function Ud(){if(--hm>0)return;if(jo){let e=jo;for(jo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Xo;){let e=Xo;for(Xo=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function mm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function gm(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),Nd(i),z_(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function bu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(vm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function vm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ea))return;t.globalVersion=ea;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!bu(t)){t.flags&=-3;return}const n=Ft,i=vi;Ft=t,vi=!0;try{mm(t);const s=t.fn(t._value);(e.version===0||Ds(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ft=n,vi=i,gm(t),t.flags&=-3}}function Nd(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Nd(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function z_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let vi=!0;const _m=[];function ks(){_m.push(vi),vi=!1}function Bs(){const t=_m.pop();vi=t===void 0?!0:t}function Cf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ft;Ft=void 0;try{e()}finally{Ft=n}}}let ea=0;class V_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Od{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ft||!vi||Ft===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ft)n=this.activeLink=new V_(Ft,this),Ft.deps?(n.prevDep=Ft.depsTail,Ft.depsTail.nextDep=n,Ft.depsTail=n):Ft.deps=Ft.depsTail=n,bm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Ft.depsTail,n.nextDep=void 0,Ft.depsTail.nextDep=n,Ft.depsTail=n,Ft.deps===n&&(Ft.deps=i)}return n}trigger(e){this.version++,ea++,this.notify(e)}notify(e){Id();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ud()}}}function bm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)bm(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const xu=new WeakMap,hr=Symbol(""),yu=Symbol(""),ta=Symbol("");function vn(t,e,n){if(vi&&Ft){let i=xu.get(t);i||xu.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new Od),s.map=i,s.key=n),s.track()}}function Zi(t,e,n,i,s,r){const o=xu.get(t);if(!o){ea++;return}const a=l=>{l&&l.trigger()};if(Id(),e==="clear")o.forEach(a);else{const l=Ye(t),c=l&&Dd(n);if(l&&n==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===ta||!Ni(f)&&f>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(ta)),e){case"add":l?c&&a(o.get("length")):(a(o.get(hr)),jr(t)&&a(o.get(yu)));break;case"delete":l||(a(o.get(hr)),jr(t)&&a(o.get(yu)));break;case"set":jr(t)&&a(o.get(hr));break}}Ud()}function Er(t){const e=Tt(t);return e===t?e:(vn(e,"iterate",ta),ri(t)?e:e.map(_n))}function tc(t){return vn(t=Tt(t),"iterate",ta),t}const G_={__proto__:null,[Symbol.iterator](){return Mc(this,Symbol.iterator,_n)},concat(...t){return Er(this).concat(...t.map(e=>Ye(e)?Er(e):e))},entries(){return Mc(this,"entries",t=>(t[1]=_n(t[1]),t))},every(t,e){return Bi(this,"every",t,e,void 0,arguments)},filter(t,e){return Bi(this,"filter",t,e,n=>n.map(_n),arguments)},find(t,e){return Bi(this,"find",t,e,_n,arguments)},findIndex(t,e){return Bi(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Bi(this,"findLast",t,e,_n,arguments)},findLastIndex(t,e){return Bi(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Bi(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ec(this,"includes",t)},indexOf(...t){return Ec(this,"indexOf",t)},join(t){return Er(this).join(t)},lastIndexOf(...t){return Ec(this,"lastIndexOf",t)},map(t,e){return Bi(this,"map",t,e,void 0,arguments)},pop(){return Do(this,"pop")},push(...t){return Do(this,"push",t)},reduce(t,...e){return Rf(this,"reduce",t,e)},reduceRight(t,...e){return Rf(this,"reduceRight",t,e)},shift(){return Do(this,"shift")},some(t,e){return Bi(this,"some",t,e,void 0,arguments)},splice(...t){return Do(this,"splice",t)},toReversed(){return Er(this).toReversed()},toSorted(t){return Er(this).toSorted(t)},toSpliced(...t){return Er(this).toSpliced(...t)},unshift(...t){return Do(this,"unshift",t)},values(){return Mc(this,"values",_n)}};function Mc(t,e,n){const i=tc(t),s=i[e]();return i!==t&&!ri(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=n(r.value)),r}),s}const W_=Array.prototype;function Bi(t,e,n,i,s,r){const o=tc(t),a=o!==t&&!ri(t),l=o[e];if(l!==W_[e]){const d=l.apply(t,r);return a?_n(d):d}let c=n;o!==t&&(a?c=function(d,f){return n.call(this,_n(d),f,t)}:n.length>2&&(c=function(d,f){return n.call(this,d,f,t)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Rf(t,e,n,i){const s=tc(t);let r=n;return s!==t&&(ri(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,_n(a),l,t)}),s[e](r,...i)}function Ec(t,e,n){const i=Tt(t);vn(i,"iterate",ta);const s=i[e](...n);return(s===-1||s===!1)&&Bd(n[0])?(n[0]=Tt(n[0]),i[e](...n)):s}function Do(t,e,n=[]){ks(),Id();const i=Tt(t)[e].apply(t,n);return Ud(),Bs(),i}const $_=Cd("__proto__,__v_isRef,__isVue"),xm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ni));function X_(t){Ni(t)||(t=String(t));const e=Tt(this);return vn(e,"has",t),e.hasOwnProperty(t)}class ym{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?n0:Em:r?Mm:Sm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ye(e);if(!s){let l;if(o&&(l=G_[n]))return l;if(n==="hasOwnProperty")return X_}const a=Reflect.get(e,n,ln(e)?e:i);return(Ni(n)?xm.has(n):$_(n))||(s||vn(e,"get",n),r)?a:ln(a)?o&&Dd(n)?a:a.value:Ot(a)?s?Am(a):ya(a):a}}class wm extends ym{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(!this._isShallow){const l=mr(r);if(!ri(i)&&!mr(i)&&(r=Tt(r),i=Tt(i)),!Ye(e)&&ln(r)&&!ln(i))return l?!1:(r.value=i,!0)}const o=Ye(e)&&Dd(n)?Number(n)<e.length:Pt(e,n),a=Reflect.set(e,n,i,ln(e)?e:s);return e===Tt(s)&&(o?Ds(i,r)&&Zi(e,"set",n,i):Zi(e,"add",n,i)),a}deleteProperty(e,n){const i=Pt(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Zi(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!Ni(n)||!xm.has(n))&&vn(e,"has",n),i}ownKeys(e){return vn(e,"iterate",Ye(e)?"length":hr),Reflect.ownKeys(e)}}class j_ extends ym{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const q_=new wm,Y_=new j_,K_=new wm(!0);const wu=t=>t,Ba=t=>Reflect.getPrototypeOf(t);function Z_(t,e,n){return function(...i){const s=this.__v_raw,r=Tt(s),o=jr(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?wu:e?Su:_n;return!e&&vn(r,"iterate",l?yu:hr),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function Ha(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Q_(t,e){const n={get(s){const r=this.__v_raw,o=Tt(r),a=Tt(s);t||(Ds(s,a)&&vn(o,"get",s),vn(o,"get",a));const{has:l}=Ba(o),c=e?wu:t?Su:_n;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&vn(Tt(s),"iterate",hr),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=Tt(r),a=Tt(s);return t||(Ds(s,a)&&vn(o,"has",s),vn(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=Tt(a),c=e?wu:t?Su:_n;return!t&&vn(l,"iterate",hr),a.forEach((u,d)=>s.call(r,c(u),c(d),o))}};return cn(n,t?{add:Ha("add"),set:Ha("set"),delete:Ha("delete"),clear:Ha("clear")}:{add(s){!e&&!ri(s)&&!mr(s)&&(s=Tt(s));const r=Tt(this);return Ba(r).has.call(r,s)||(r.add(s),Zi(r,"add",s,s)),this},set(s,r){!e&&!ri(r)&&!mr(r)&&(r=Tt(r));const o=Tt(this),{has:a,get:l}=Ba(o);let c=a.call(o,s);c||(s=Tt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Ds(r,u)&&Zi(o,"set",s,r):Zi(o,"add",s,r),this},delete(s){const r=Tt(this),{has:o,get:a}=Ba(r);let l=o.call(r,s);l||(s=Tt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Zi(r,"delete",s,void 0),c},clear(){const s=Tt(this),r=s.size!==0,o=s.clear();return r&&Zi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Z_(s,t,e)}),n}function Fd(t,e){const n=Q_(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(Pt(n,s)&&s in i?n:i,s,r)}const J_={get:Fd(!1,!1)},e0={get:Fd(!1,!0)},t0={get:Fd(!0,!1)};const Sm=new WeakMap,Mm=new WeakMap,Em=new WeakMap,n0=new WeakMap;function i0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function s0(t){return t.__v_skip||!Object.isExtensible(t)?0:i0(C_(t))}function ya(t){return mr(t)?t:kd(t,!1,q_,J_,Sm)}function Tm(t){return kd(t,!1,K_,e0,Mm)}function Am(t){return kd(t,!0,Y_,t0,Em)}function kd(t,e,n,i,s){if(!Ot(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=s0(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function qr(t){return mr(t)?qr(t.__v_raw):!!(t&&t.__v_isReactive)}function mr(t){return!!(t&&t.__v_isReadonly)}function ri(t){return!!(t&&t.__v_isShallow)}function Bd(t){return t?!!t.__v_raw:!1}function Tt(t){const e=t&&t.__v_raw;return e?Tt(e):t}function Cm(t){return!Pt(t,"__v_skip")&&Object.isExtensible(t)&&am(t,"__v_skip",!0),t}const _n=t=>Ot(t)?ya(t):t,Su=t=>Ot(t)?Am(t):t;function ln(t){return t?t.__v_isRef===!0:!1}function tt(t){return Rm(t,!1)}function r0(t){return Rm(t,!0)}function Rm(t,e){return ln(t)?t:new o0(t,e)}class o0{constructor(e,n){this.dep=new Od,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Tt(e),this._value=n?e:_n(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||ri(e)||mr(e);e=i?e:Tt(e),Ds(e,n)&&(this._rawValue=e,this._value=i?e:_n(e),this.dep.trigger())}}function Ls(t){return ln(t)?t.value:t}const a0={get:(t,e,n)=>e==="__v_raw"?t:Ls(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return ln(s)&&!ln(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Pm(t){return qr(t)?t:new Proxy(t,a0)}class l0{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Od(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ea-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ft!==this)return pm(this,!0),!0}get value(){const e=this.dep.track();return vm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function c0(t,e,n=!1){let i,s;return ct(t)?i=t:(i=t.get,s=t.set),new l0(i,s,n)}const za={},Pl=new WeakMap;let er;function u0(t,e=!1,n=er){if(n){let i=Pl.get(n);i||Pl.set(n,i=[]),i.push(t)}}function d0(t,e,n=Nt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=y=>s?y:ri(y)||s===!1||s===0?Qi(y,1):Qi(y);let u,d,f,h,g=!1,v=!1;if(ln(t)?(d=()=>t.value,g=ri(t)):qr(t)?(d=()=>c(t),g=!0):Ye(t)?(v=!0,g=t.some(y=>qr(y)||ri(y)),d=()=>t.map(y=>{if(ln(y))return y.value;if(qr(y))return c(y);if(ct(y))return l?l(y,2):y()})):ct(t)?e?d=l?()=>l(t,2):t:d=()=>{if(f){ks();try{f()}finally{Bs()}}const y=er;er=u;try{return l?l(t,3,[h]):t(h)}finally{er=y}}:d=Li,e&&s){const y=d,U=s===!0?1/0:s;d=()=>Qi(y(),U)}const m=H_(),p=()=>{u.stop(),m&&m.active&&Pd(m.effects,u)};if(r&&e){const y=e;e=(...U)=>{y(...U),p()}}let C=v?new Array(t.length).fill(za):za;const E=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const U=u.run();if(s||g||(v?U.some((I,R)=>Ds(I,C[R])):Ds(U,C))){f&&f();const I=er;er=u;try{const R=[U,C===za?void 0:v&&C[0]===za?[]:C,h];l?l(e,3,R):e(...R),C=U}finally{er=I}}}else u.run()};return a&&a(E),u=new fm(d),u.scheduler=o?()=>o(E,!1):E,h=y=>u0(y,!1,u),f=u.onStop=()=>{const y=Pl.get(u);if(y){if(l)l(y,4);else for(const U of y)U();Pl.delete(u)}},e?i?E(!0):C=u.run():o?o(E.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Qi(t,e=1/0,n){if(e<=0||!Ot(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ln(t))Qi(t.value,e,n);else if(Ye(t))for(let i=0;i<t.length;i++)Qi(t[i],e,n);else if(So(t)||jr(t))t.forEach(i=>{Qi(i,e,n)});else if(om(t)){for(const i in t)Qi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Qi(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function wa(t,e,n,i){try{return i?t(...i):t()}catch(s){nc(s,e,n)}}function bi(t,e,n,i){if(ct(t)){const s=wa(t,e,n,i);return s&&sm(s)&&s.catch(r=>{nc(r,e,n)}),s}if(Ye(t)){const s=[];for(let r=0;r<t.length;r++)s.push(bi(t[r],e,n,i));return s}}function nc(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Nt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}a=a.parent}if(r){ks(),wa(r,null,10,[t,l,c]),Bs();return}}f0(t,n,s,i,o)}function f0(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const An=[];let Si=-1;const Yr=[];let gs=null,zr=0;const Dm=Promise.resolve();let Dl=null;function Sa(t){const e=Dl||Dm;return t?e.then(this?t.bind(this):t):e}function h0(t){let e=Si+1,n=An.length;for(;e<n;){const i=e+n>>>1,s=An[i],r=na(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function Hd(t){if(!(t.flags&1)){const e=na(t),n=An[An.length-1];!n||!(t.flags&2)&&e>=na(n)?An.push(t):An.splice(h0(e),0,t),t.flags|=1,Lm()}}function Lm(){Dl||(Dl=Dm.then(Um))}function p0(t){Ye(t)?Yr.push(...t):gs&&t.id===-1?gs.splice(zr+1,0,t):t.flags&1||(Yr.push(t),t.flags|=1),Lm()}function Pf(t,e,n=Si+1){for(;n<An.length;n++){const i=An[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;An.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Im(t){if(Yr.length){const e=[...new Set(Yr)].sort((n,i)=>na(n)-na(i));if(Yr.length=0,gs){gs.push(...e);return}for(gs=e,zr=0;zr<gs.length;zr++){const n=gs[zr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}gs=null,zr=0}}const na=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Um(t){try{for(Si=0;Si<An.length;Si++){const e=An[Si];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),wa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Si<An.length;Si++){const e=An[Si];e&&(e.flags&=-2)}Si=-1,An.length=0,Im(),Dl=null,(An.length||Yr.length)&&Um()}}let kn=null,Nm=null;function Ll(t){const e=kn;return kn=t,Nm=t&&t.type.__scopeId||null,e}function Gr(t,e=kn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Wf(-1);const r=Ll(e);let o;try{o=t(...s)}finally{Ll(r),i._d&&Wf(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Yt(t,e){if(kn===null)return t;const n=ac(kn),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Nt]=e[s];r&&(ct(r)&&(r={mounted:r,updated:r}),r.deep&&Qi(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Gs(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(ks(),bi(l,n,8,[t.el,a,t,e]),Bs())}}const Om=Symbol("_vte"),Fm=t=>t.__isTeleport,qo=t=>t&&(t.disabled||t.disabled===""),Df=t=>t&&(t.defer||t.defer===""),Lf=t=>typeof SVGElement<"u"&&t instanceof SVGElement,If=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Mu=(t,e)=>{const n=t&&t.to;return qt(n)?e?e(n):null:n},km={name:"Teleport",__isTeleport:!0,process(t,e,n,i,s,r,o,a,l,c){const{mc:u,pc:d,pbc:f,o:{insert:h,querySelector:g,createText:v,createComment:m}}=c,p=qo(e.props);let{shapeFlag:C,children:E,dynamicChildren:y}=e;if(t==null){const U=e.el=v(""),I=e.anchor=v("");h(U,n,i),h(I,n,i);const R=(w,M)=>{C&16&&(s&&s.isCE&&(s.ce._teleportTarget=w),u(E,w,M,s,r,o,a,l))},k=()=>{const w=e.target=Mu(e.props,g),M=Bm(w,e,v,h);w&&(o!=="svg"&&Lf(w)?o="svg":o!=="mathml"&&If(w)&&(o="mathml"),p||(R(w,M),vl(e,!1)))};p&&(R(n,I),vl(e,!0)),Df(e.props)?Tn(()=>{k(),e.el.__isMounted=!0},r):k()}else{if(Df(e.props)&&!t.el.__isMounted){Tn(()=>{km.process(t,e,n,i,s,r,o,a,l,c),delete t.el.__isMounted},r);return}e.el=t.el,e.targetStart=t.targetStart;const U=e.anchor=t.anchor,I=e.target=t.target,R=e.targetAnchor=t.targetAnchor,k=qo(t.props),w=k?n:I,M=k?U:R;if(o==="svg"||Lf(I)?o="svg":(o==="mathml"||If(I))&&(o="mathml"),y?(f(t.dynamicChildren,y,w,s,r,o,a),Gd(t,e,!0)):l||d(t,e,w,M,s,r,o,a,!1),p)k?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Va(e,n,U,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const L=e.target=Mu(e.props,g);L&&Va(e,L,null,c,0)}else k&&Va(e,I,R,c,1);vl(e,p)}},remove(t,e,n,{um:i,o:{remove:s}},r){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:d,props:f}=t;if(d&&(s(c),s(u)),r&&s(l),o&16){const h=r||!qo(f);for(let g=0;g<a.length;g++){const v=a[g];i(v,e,n,h,!!v.dynamicChildren)}}},move:Va,hydrate:m0};function Va(t,e,n,{o:{insert:i},m:s},r=2){r===0&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,d=r===2;if(d&&i(o,e,n),(!d||qo(u))&&l&16)for(let f=0;f<c.length;f++)s(c[f],e,n,2);d&&i(a,e,n)}function m0(t,e,n,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},d){const f=e.target=Mu(e.props,l);if(f){const h=qo(e.props),g=f._lpa||f.firstChild;if(e.shapeFlag&16)if(h)e.anchor=d(o(t),e,a(t),n,i,s,r),e.targetStart=g,e.targetAnchor=g&&o(g);else{e.anchor=o(t);let v=g;for(;v;){if(v&&v.nodeType===8){if(v.data==="teleport start anchor")e.targetStart=v;else if(v.data==="teleport anchor"){e.targetAnchor=v,f._lpa=e.targetAnchor&&o(e.targetAnchor);break}}v=o(v)}e.targetAnchor||Bm(f,e,u,c),d(g&&o(g),e,f,n,i,s,r)}vl(e,h)}return e.anchor&&o(e.anchor)}const g0=km;function vl(t,e){const n=t.ctx;if(n&&n.ut){let i,s;for(e?(i=t.el,s=t.anchor):(i=t.targetStart,s=t.targetAnchor);i&&i!==s;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function Bm(t,e,n,i){const s=e.targetStart=n(""),r=e.targetAnchor=n("");return s[Om]=r,t&&(i(s,t),i(r,t)),r}const vs=Symbol("_leaveCb"),Ga=Symbol("_enterCb");function v0(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Hs(()=>{t.isMounted=!0}),Ma(()=>{t.isUnmounting=!0}),t}const ni=[Function,Array],Hm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ni,onEnter:ni,onAfterEnter:ni,onEnterCancelled:ni,onBeforeLeave:ni,onLeave:ni,onAfterLeave:ni,onLeaveCancelled:ni,onBeforeAppear:ni,onAppear:ni,onAfterAppear:ni,onAppearCancelled:ni},zm=t=>{const e=t.subTree;return e.component?zm(e.component):e},_0={name:"BaseTransition",props:Hm,setup(t,{slots:e}){const n=mb(),i=v0();return()=>{const s=e.default&&Wm(e.default(),!0);if(!s||!s.length)return;const r=Vm(s),o=Tt(t),{mode:a}=o;if(i.isLeaving)return Tc(r);const l=Uf(r);if(!l)return Tc(r);let c=Eu(l,o,i,n,d=>c=d);l.type!==Fn&&ia(l,c);let u=n.subTree&&Uf(n.subTree);if(u&&u.type!==Fn&&!nr(l,u)&&zm(n).type!==Fn){let d=Eu(u,o,i,n);if(ia(u,d),a==="out-in"&&l.type!==Fn)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},Tc(r);a==="in-out"&&l.type!==Fn?d.delayLeave=(f,h,g)=>{const v=Gm(i,u);v[String(u.key)]=u,f[vs]=()=>{h(),f[vs]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function Vm(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Fn){e=n;break}}return e}const b0=_0;function Gm(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Eu(t,e,n,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:g,onLeaveCancelled:v,onBeforeAppear:m,onAppear:p,onAfterAppear:C,onAppearCancelled:E}=e,y=String(t.key),U=Gm(n,t),I=(w,M)=>{w&&bi(w,i,9,M)},R=(w,M)=>{const L=M[1];I(w,M),Ye(w)?w.every(N=>N.length<=1)&&L():w.length<=1&&L()},k={mode:o,persisted:a,beforeEnter(w){let M=l;if(!n.isMounted)if(r)M=m||l;else return;w[vs]&&w[vs](!0);const L=U[y];L&&nr(t,L)&&L.el[vs]&&L.el[vs](),I(M,[w])},enter(w){let M=c,L=u,N=d;if(!n.isMounted)if(r)M=p||c,L=C||u,N=E||d;else return;let O=!1;const D=w[Ga]=V=>{O||(O=!0,V?I(N,[w]):I(L,[w]),k.delayedLeave&&k.delayedLeave(),w[Ga]=void 0)};M?R(M,[w,D]):D()},leave(w,M){const L=String(t.key);if(w[Ga]&&w[Ga](!0),n.isUnmounting)return M();I(f,[w]);let N=!1;const O=w[vs]=D=>{N||(N=!0,M(),D?I(v,[w]):I(g,[w]),w[vs]=void 0,U[L]===t&&delete U[L])};U[L]=t,h?R(h,[w,O]):O()},clone(w){const M=Eu(w,e,n,i,s);return s&&s(M),M}};return k}function Tc(t){if(ic(t))return t=Ns(t),t.children=null,t}function Uf(t){if(!ic(t))return Fm(t.type)&&t.children?Vm(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ct(n.default))return n.default()}}function ia(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ia(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Wm(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Ht?(o.patchFlag&128&&s++,i=i.concat(Wm(o.children,e,a))):(e||o.type!==Fn)&&i.push(a!=null?Ns(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function $m(t,e){return ct(t)?cn({name:t.name},e,{setup:t}):t}function Xm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Il(t,e,n,i,s=!1){if(Ye(t)){t.forEach((g,v)=>Il(g,e&&(Ye(e)?e[v]:e),n,i,s));return}if(Yo(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Il(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?ac(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Nt?a.refs={}:a.refs,d=a.setupState,f=Tt(d),h=d===Nt?()=>!1:g=>Pt(f,g);if(c!=null&&c!==l&&(qt(c)?(u[c]=null,h(c)&&(d[c]=null)):ln(c)&&(c.value=null)),ct(l))wa(l,a,12,[o,u]);else{const g=qt(l),v=ln(l);if(g||v){const m=()=>{if(t.f){const p=g?h(l)?d[l]:u[l]:l.value;s?Ye(p)&&Pd(p,r):Ye(p)?p.includes(r)||p.push(r):g?(u[l]=[r],h(l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else g?(u[l]=o,h(l)&&(d[l]=o)):v&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Tn(m,n)):m()}}}ec().requestIdleCallback;ec().cancelIdleCallback;const Yo=t=>!!t.type.__asyncLoader,ic=t=>t.type.__isKeepAlive;function x0(t,e){jm(t,"a",e)}function y0(t,e){jm(t,"da",e)}function jm(t,e,n=dn){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(sc(e,i,n),n){let s=n.parent;for(;s&&s.parent;)ic(s.parent.vnode)&&w0(i,e,n,s),s=s.parent}}function w0(t,e,n,i){const s=sc(e,t,i,!0);zd(()=>{Pd(i[e],s)},n)}function sc(t,e,n=dn,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{ks();const a=Ea(n),l=bi(e,n,t,o);return a(),Bs(),l});return i?s.unshift(r):s.push(r),r}}const rs=t=>(e,n=dn)=>{(!ra||t==="sp")&&sc(t,(...i)=>e(...i),n)},S0=rs("bm"),Hs=rs("m"),M0=rs("bu"),E0=rs("u"),Ma=rs("bum"),zd=rs("um"),T0=rs("sp"),A0=rs("rtg"),C0=rs("rtc");function R0(t,e=dn){sc("ec",t,e)}const P0="components";function D0(t,e){return I0(P0,t,!0,e)||t}const L0=Symbol.for("v-ndc");function I0(t,e,n=!0,i=!1){const s=kn||dn;if(s){const r=s.type;{const a=xb(r,!1);if(a&&(a===e||a===oi(e)||a===Jl(oi(e))))return r}const o=Nf(s[t]||r[t],e)||Nf(s.appContext[t],e);return!o&&i?r:o}}function Nf(t,e){return t&&(t[e]||t[oi(e)]||t[Jl(oi(e))])}function En(t,e,n,i){let s;const r=n,o=Ye(t);if(o||qt(t)){const a=o&&qr(t);let l=!1;a&&(l=!ri(t),t=tc(t)),s=new Array(t.length);for(let c=0,u=t.length;c<u;c++)s[c]=e(l?_n(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(Ot(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,r)}}else s=[];return s}const Tu=t=>t?pg(t)?ac(t):Tu(t.parent):null,Ko=cn(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Tu(t.parent),$root:t=>Tu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ym(t),$forceUpdate:t=>t.f||(t.f=()=>{Hd(t.update)}),$nextTick:t=>t.n||(t.n=Sa.bind(t.proxy)),$watch:t=>eb.bind(t)}),Ac=(t,e)=>t!==Nt&&!t.__isScriptSetup&&Pt(t,e),U0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Ac(i,e))return o[e]=1,i[e];if(s!==Nt&&Pt(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&Pt(c,e))return o[e]=3,r[e];if(n!==Nt&&Pt(n,e))return o[e]=4,n[e];Au&&(o[e]=0)}}const u=Ko[e];let d,f;if(u)return e==="$attrs"&&vn(t.attrs,"get",""),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Nt&&Pt(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,Pt(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Ac(s,e)?(s[e]=n,!0):i!==Nt&&Pt(i,e)?(i[e]=n,!0):Pt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==Nt&&Pt(t,o)||Ac(e,o)||(a=r[0])&&Pt(a,o)||Pt(i,o)||Pt(Ko,o)||Pt(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Pt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Of(t){return Ye(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Au=!0;function N0(t){const e=Ym(t),n=t.proxy,i=t.ctx;Au=!1,e.beforeCreate&&Ff(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:g,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:C,destroyed:E,unmounted:y,render:U,renderTracked:I,renderTriggered:R,errorCaptured:k,serverPrefetch:w,expose:M,inheritAttrs:L,components:N,directives:O,filters:D}=e;if(c&&O0(c,i,null),o)for(const ee in o){const Y=o[ee];ct(Y)&&(i[ee]=Y.bind(n))}if(s){const ee=s.call(n,n);Ot(ee)&&(t.data=ya(ee))}if(Au=!0,r)for(const ee in r){const Y=r[ee],xe=ct(Y)?Y.bind(n,n):ct(Y.get)?Y.get.bind(n,n):Li,Me=!ct(Y)&&ct(Y.set)?Y.set.bind(n):Li,Le=an({get:xe,set:Me});Object.defineProperty(i,ee,{enumerable:!0,configurable:!0,get:()=>Le.value,set:We=>Le.value=We})}if(a)for(const ee in a)qm(a[ee],i,n,ee);if(l){const ee=ct(l)?l.call(n):l;Reflect.ownKeys(ee).forEach(Y=>{_l(Y,ee[Y])})}u&&Ff(u,t,"c");function W(ee,Y){Ye(Y)?Y.forEach(xe=>ee(xe.bind(n))):Y&&ee(Y.bind(n))}if(W(S0,d),W(Hs,f),W(M0,h),W(E0,g),W(x0,v),W(y0,m),W(R0,k),W(C0,I),W(A0,R),W(Ma,C),W(zd,y),W(T0,w),Ye(M))if(M.length){const ee=t.exposed||(t.exposed={});M.forEach(Y=>{Object.defineProperty(ee,Y,{get:()=>n[Y],set:xe=>n[Y]=xe})})}else t.exposed||(t.exposed={});U&&t.render===Li&&(t.render=U),L!=null&&(t.inheritAttrs=L),N&&(t.components=N),O&&(t.directives=O),w&&Xm(t)}function O0(t,e,n=Li){Ye(t)&&(t=Cu(t));for(const i in t){const s=t[i];let r;Ot(s)?"default"in s?r=ts(s.from||i,s.default,!0):r=ts(s.from||i):r=ts(s),ln(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Ff(t,e,n){bi(Ye(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function qm(t,e,n,i){let s=i.includes(".")?lg(n,i):()=>n[i];if(qt(t)){const r=e[t];ct(r)&&Bn(s,r)}else if(ct(t))Bn(s,t.bind(n));else if(Ot(t))if(Ye(t))t.forEach(r=>qm(r,e,n,i));else{const r=ct(t.handler)?t.handler.bind(n):e[t.handler];ct(r)&&Bn(s,r,t)}}function Ym(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>Ul(l,c,o,!0)),Ul(l,e,o)),Ot(e)&&r.set(e,l),l}function Ul(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Ul(t,r,n,!0),s&&s.forEach(o=>Ul(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=F0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const F0={data:kf,props:Bf,emits:Bf,methods:Go,computed:Go,beforeCreate:wn,created:wn,beforeMount:wn,mounted:wn,beforeUpdate:wn,updated:wn,beforeDestroy:wn,beforeUnmount:wn,destroyed:wn,unmounted:wn,activated:wn,deactivated:wn,errorCaptured:wn,serverPrefetch:wn,components:Go,directives:Go,watch:B0,provide:kf,inject:k0};function kf(t,e){return e?t?function(){return cn(ct(t)?t.call(this,this):t,ct(e)?e.call(this,this):e)}:e:t}function k0(t,e){return Go(Cu(t),Cu(e))}function Cu(t){if(Ye(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function wn(t,e){return t?[...new Set([].concat(t,e))]:e}function Go(t,e){return t?cn(Object.create(null),t,e):e}function Bf(t,e){return t?Ye(t)&&Ye(e)?[...new Set([...t,...e])]:cn(Object.create(null),Of(t),Of(e??{})):e}function B0(t,e){if(!t)return e;if(!e)return t;const n=cn(Object.create(null),t);for(const i in e)n[i]=wn(t[i],e[i]);return n}function Km(){return{app:null,config:{isNativeTag:T_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let H0=0;function z0(t,e){return function(i,s=null){ct(i)||(i=cn({},i)),s!=null&&!Ot(s)&&(s=null);const r=Km(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:H0++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:wb,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&ct(u.install)?(o.add(u),u.install(c,...d)):ct(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||tn(i,s);return h.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),t(h,u,f),l=!0,c._container=u,u.__vue_app__=c,ac(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(bi(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=Kr;Kr=c;try{return u()}finally{Kr=d}}};return c}}let Kr=null;function _l(t,e){if(dn){let n=dn.provides;const i=dn.parent&&dn.parent.provides;i===n&&(n=dn.provides=Object.create(i)),n[t]=e}}function ts(t,e,n=!1){const i=dn||kn;if(i||Kr){const s=Kr?Kr._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ct(e)?e.call(i&&i.proxy):e}}const Zm={},Qm=()=>Object.create(Zm),Jm=t=>Object.getPrototypeOf(t)===Zm;function V0(t,e,n,i=!1){const s={},r=Qm();t.propsDefaults=Object.create(null),eg(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Tm(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function G0(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=Tt(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(rc(t.emitsOptions,f))continue;const h=e[f];if(l)if(Pt(r,f))h!==r[f]&&(r[f]=h,c=!0);else{const g=oi(f);s[g]=Ru(l,a,g,h,t,!1)}else h!==r[f]&&(r[f]=h,c=!0)}}}else{eg(t,e,s,r)&&(c=!0);let u;for(const d in a)(!e||!Pt(e,d)&&((u=xr(d))===d||!Pt(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=Ru(l,a,d,void 0,t,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!Pt(e,d))&&(delete r[d],c=!0)}c&&Zi(t.attrs,"set","")}function eg(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if($o(l))continue;const c=e[l];let u;s&&Pt(s,u=oi(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:rc(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Tt(n),c=a||Nt;for(let u=0;u<r.length;u++){const d=r[u];n[d]=Ru(s,l,d,c[d],t,!Pt(c,d))}}return o}function Ru(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=Pt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ct(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=Ea(s);i=c[n]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===xr(n))&&(i=!0))}return i}const W0=new WeakMap;function tg(t,e,n=!1){const i=n?W0:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!ct(t)){const u=d=>{l=!0;const[f,h]=tg(d,e,!0);cn(o,f),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Ot(t)&&i.set(t,Xr),Xr;if(Ye(r))for(let u=0;u<r.length;u++){const d=oi(r[u]);Hf(d)&&(o[d]=Nt)}else if(r)for(const u in r){const d=oi(u);if(Hf(d)){const f=r[u],h=o[d]=Ye(f)||ct(f)?{type:f}:cn({},f),g=h.type;let v=!1,m=!0;if(Ye(g))for(let p=0;p<g.length;++p){const C=g[p],E=ct(C)&&C.name;if(E==="Boolean"){v=!0;break}else E==="String"&&(m=!1)}else v=ct(g)&&g.name==="Boolean";h[0]=v,h[1]=m,(v||Pt(h,"default"))&&a.push(d)}}const c=[o,a];return Ot(t)&&i.set(t,c),c}function Hf(t){return t[0]!=="$"&&!$o(t)}const ng=t=>t[0]==="_"||t==="$stable",Vd=t=>Ye(t)?t.map(Ci):[Ci(t)],$0=(t,e,n)=>{if(e._n)return e;const i=Gr((...s)=>Vd(e(...s)),n);return i._c=!1,i},ig=(t,e,n)=>{const i=t._ctx;for(const s in t){if(ng(s))continue;const r=t[s];if(ct(r))e[s]=$0(s,r,i);else if(r!=null){const o=Vd(r);e[s]=()=>o}}},sg=(t,e)=>{const n=Vd(e);t.slots.default=()=>n},rg=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},X0=(t,e,n)=>{const i=t.slots=Qm();if(t.vnode.shapeFlag&32){const s=e._;s?(rg(i,e,n),n&&am(i,"_",s,!0)):ig(e,i)}else e&&sg(t,e)},j0=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Nt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:rg(s,e,n):(r=!e.$stable,ig(e,s)),o=e}else e&&(sg(t,e),o={default:1});if(r)for(const a in s)!ng(a)&&o[a]==null&&delete s[a]},Tn=ab;function q0(t){return Y0(t)}function Y0(t,e){const n=ec();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=Li,insertStaticContent:g}=t,v=(P,b,G,K=null,se=null,q=null,ge=void 0,te=null,ce=!!b.dynamicChildren)=>{if(P===b)return;P&&!nr(P,b)&&(K=H(P),We(P,se,q,!0),P=null),b.patchFlag===-2&&(ce=!1,b.dynamicChildren=null);const{type:de,ref:Pe,shapeFlag:T}=b;switch(de){case oc:m(P,b,G,K);break;case Fn:p(P,b,G,K);break;case bl:P==null&&C(b,G,K,ge);break;case Ht:N(P,b,G,K,se,q,ge,te,ce);break;default:T&1?U(P,b,G,K,se,q,ge,te,ce):T&6?O(P,b,G,K,se,q,ge,te,ce):(T&64||T&128)&&de.process(P,b,G,K,se,q,ge,te,ce,me)}Pe!=null&&se&&Il(Pe,P&&P.ref,q,b||P,!b)},m=(P,b,G,K)=>{if(P==null)i(b.el=a(b.children),G,K);else{const se=b.el=P.el;b.children!==P.children&&c(se,b.children)}},p=(P,b,G,K)=>{P==null?i(b.el=l(b.children||""),G,K):b.el=P.el},C=(P,b,G,K)=>{[P.el,P.anchor]=g(P.children,b,G,K,P.el,P.anchor)},E=({el:P,anchor:b},G,K)=>{let se;for(;P&&P!==b;)se=f(P),i(P,G,K),P=se;i(b,G,K)},y=({el:P,anchor:b})=>{let G;for(;P&&P!==b;)G=f(P),s(P),P=G;s(b)},U=(P,b,G,K,se,q,ge,te,ce)=>{b.type==="svg"?ge="svg":b.type==="math"&&(ge="mathml"),P==null?I(b,G,K,se,q,ge,te,ce):w(P,b,se,q,ge,te,ce)},I=(P,b,G,K,se,q,ge,te)=>{let ce,de;const{props:Pe,shapeFlag:T,transition:x,dirs:B}=P;if(ce=P.el=o(P.type,q,Pe&&Pe.is,Pe),T&8?u(ce,P.children):T&16&&k(P.children,ce,null,K,se,Cc(P,q),ge,te),B&&Gs(P,null,K,"created"),R(ce,P,P.scopeId,ge,K),Pe){for(const le in Pe)le!=="value"&&!$o(le)&&r(ce,le,null,Pe[le],q,K);"value"in Pe&&r(ce,"value",null,Pe.value,q),(de=Pe.onVnodeBeforeMount)&&yi(de,K,P)}B&&Gs(P,null,K,"beforeMount");const Z=K0(se,x);Z&&x.beforeEnter(ce),i(ce,b,G),((de=Pe&&Pe.onVnodeMounted)||Z||B)&&Tn(()=>{de&&yi(de,K,P),Z&&x.enter(ce),B&&Gs(P,null,K,"mounted")},se)},R=(P,b,G,K,se)=>{if(G&&h(P,G),K)for(let q=0;q<K.length;q++)h(P,K[q]);if(se){let q=se.subTree;if(b===q||ug(q.type)&&(q.ssContent===b||q.ssFallback===b)){const ge=se.vnode;R(P,ge,ge.scopeId,ge.slotScopeIds,se.parent)}}},k=(P,b,G,K,se,q,ge,te,ce=0)=>{for(let de=ce;de<P.length;de++){const Pe=P[de]=te?_s(P[de]):Ci(P[de]);v(null,Pe,b,G,K,se,q,ge,te)}},w=(P,b,G,K,se,q,ge)=>{const te=b.el=P.el;let{patchFlag:ce,dynamicChildren:de,dirs:Pe}=b;ce|=P.patchFlag&16;const T=P.props||Nt,x=b.props||Nt;let B;if(G&&Ws(G,!1),(B=x.onVnodeBeforeUpdate)&&yi(B,G,b,P),Pe&&Gs(b,P,G,"beforeUpdate"),G&&Ws(G,!0),(T.innerHTML&&x.innerHTML==null||T.textContent&&x.textContent==null)&&u(te,""),de?M(P.dynamicChildren,de,te,G,K,Cc(b,se),q):ge||Y(P,b,te,null,G,K,Cc(b,se),q,!1),ce>0){if(ce&16)L(te,T,x,G,se);else if(ce&2&&T.class!==x.class&&r(te,"class",null,x.class,se),ce&4&&r(te,"style",T.style,x.style,se),ce&8){const Z=b.dynamicProps;for(let le=0;le<Z.length;le++){const Q=Z[le],Ie=T[Q],ve=x[Q];(ve!==Ie||Q==="value")&&r(te,Q,Ie,ve,se,G)}}ce&1&&P.children!==b.children&&u(te,b.children)}else!ge&&de==null&&L(te,T,x,G,se);((B=x.onVnodeUpdated)||Pe)&&Tn(()=>{B&&yi(B,G,b,P),Pe&&Gs(b,P,G,"updated")},K)},M=(P,b,G,K,se,q,ge)=>{for(let te=0;te<b.length;te++){const ce=P[te],de=b[te],Pe=ce.el&&(ce.type===Ht||!nr(ce,de)||ce.shapeFlag&70)?d(ce.el):G;v(ce,de,Pe,null,K,se,q,ge,!0)}},L=(P,b,G,K,se)=>{if(b!==G){if(b!==Nt)for(const q in b)!$o(q)&&!(q in G)&&r(P,q,b[q],null,se,K);for(const q in G){if($o(q))continue;const ge=G[q],te=b[q];ge!==te&&q!=="value"&&r(P,q,te,ge,se,K)}"value"in G&&r(P,"value",b.value,G.value,se)}},N=(P,b,G,K,se,q,ge,te,ce)=>{const de=b.el=P?P.el:a(""),Pe=b.anchor=P?P.anchor:a("");let{patchFlag:T,dynamicChildren:x,slotScopeIds:B}=b;B&&(te=te?te.concat(B):B),P==null?(i(de,G,K),i(Pe,G,K),k(b.children||[],G,Pe,se,q,ge,te,ce)):T>0&&T&64&&x&&P.dynamicChildren?(M(P.dynamicChildren,x,G,se,q,ge,te),(b.key!=null||se&&b===se.subTree)&&Gd(P,b,!0)):Y(P,b,G,Pe,se,q,ge,te,ce)},O=(P,b,G,K,se,q,ge,te,ce)=>{b.slotScopeIds=te,P==null?b.shapeFlag&512?se.ctx.activate(b,G,K,ge,ce):D(b,G,K,se,q,ge,ce):V(P,b,ce)},D=(P,b,G,K,se,q,ge)=>{const te=P.component=pb(P,K,se);if(ic(P)&&(te.ctx.renderer=me),gb(te,!1,ge),te.asyncDep){if(se&&se.registerDep(te,W,ge),!P.el){const ce=te.subTree=tn(Fn);p(null,ce,b,G)}}else W(te,P,b,G,se,q,ge)},V=(P,b,G)=>{const K=b.component=P.component;if(rb(P,b,G))if(K.asyncDep&&!K.asyncResolved){ee(K,b,G);return}else K.next=b,K.update();else b.el=P.el,K.vnode=b},W=(P,b,G,K,se,q,ge)=>{const te=()=>{if(P.isMounted){let{next:T,bu:x,u:B,parent:Z,vnode:le}=P;{const Ue=og(P);if(Ue){T&&(T.el=le.el,ee(P,T,ge)),Ue.asyncDep.then(()=>{P.isUnmounted||te()});return}}let Q=T,Ie;Ws(P,!1),T?(T.el=le.el,ee(P,T,ge)):T=le,x&&gl(x),(Ie=T.props&&T.props.onVnodeBeforeUpdate)&&yi(Ie,Z,T,le),Ws(P,!0);const ve=Vf(P),De=P.subTree;P.subTree=ve,v(De,ve,d(De.el),H(De),P,se,q),T.el=ve.el,Q===null&&ob(P,ve.el),B&&Tn(B,se),(Ie=T.props&&T.props.onVnodeUpdated)&&Tn(()=>yi(Ie,Z,T,le),se)}else{let T;const{el:x,props:B}=b,{bm:Z,m:le,parent:Q,root:Ie,type:ve}=P,De=Yo(b);Ws(P,!1),Z&&gl(Z),!De&&(T=B&&B.onVnodeBeforeMount)&&yi(T,Q,b),Ws(P,!0);{Ie.ce&&Ie.ce._injectChildStyle(ve);const Ue=P.subTree=Vf(P);v(null,Ue,G,K,P,se,q),b.el=Ue.el}if(le&&Tn(le,se),!De&&(T=B&&B.onVnodeMounted)){const Ue=b;Tn(()=>yi(T,Q,Ue),se)}(b.shapeFlag&256||Q&&Yo(Q.vnode)&&Q.vnode.shapeFlag&256)&&P.a&&Tn(P.a,se),P.isMounted=!0,b=G=K=null}};P.scope.on();const ce=P.effect=new fm(te);P.scope.off();const de=P.update=ce.run.bind(ce),Pe=P.job=ce.runIfDirty.bind(ce);Pe.i=P,Pe.id=P.uid,ce.scheduler=()=>Hd(Pe),Ws(P,!0),de()},ee=(P,b,G)=>{b.component=P;const K=P.vnode.props;P.vnode=b,P.next=null,G0(P,b.props,K,G),j0(P,b.children,G),ks(),Pf(P),Bs()},Y=(P,b,G,K,se,q,ge,te,ce=!1)=>{const de=P&&P.children,Pe=P?P.shapeFlag:0,T=b.children,{patchFlag:x,shapeFlag:B}=b;if(x>0){if(x&128){Me(de,T,G,K,se,q,ge,te,ce);return}else if(x&256){xe(de,T,G,K,se,q,ge,te,ce);return}}B&8?(Pe&16&&ye(de,se,q),T!==de&&u(G,T)):Pe&16?B&16?Me(de,T,G,K,se,q,ge,te,ce):ye(de,se,q,!0):(Pe&8&&u(G,""),B&16&&k(T,G,K,se,q,ge,te,ce))},xe=(P,b,G,K,se,q,ge,te,ce)=>{P=P||Xr,b=b||Xr;const de=P.length,Pe=b.length,T=Math.min(de,Pe);let x;for(x=0;x<T;x++){const B=b[x]=ce?_s(b[x]):Ci(b[x]);v(P[x],B,G,null,se,q,ge,te,ce)}de>Pe?ye(P,se,q,!0,!1,T):k(b,G,K,se,q,ge,te,ce,T)},Me=(P,b,G,K,se,q,ge,te,ce)=>{let de=0;const Pe=b.length;let T=P.length-1,x=Pe-1;for(;de<=T&&de<=x;){const B=P[de],Z=b[de]=ce?_s(b[de]):Ci(b[de]);if(nr(B,Z))v(B,Z,G,null,se,q,ge,te,ce);else break;de++}for(;de<=T&&de<=x;){const B=P[T],Z=b[x]=ce?_s(b[x]):Ci(b[x]);if(nr(B,Z))v(B,Z,G,null,se,q,ge,te,ce);else break;T--,x--}if(de>T){if(de<=x){const B=x+1,Z=B<Pe?b[B].el:K;for(;de<=x;)v(null,b[de]=ce?_s(b[de]):Ci(b[de]),G,Z,se,q,ge,te,ce),de++}}else if(de>x)for(;de<=T;)We(P[de],se,q,!0),de++;else{const B=de,Z=de,le=new Map;for(de=Z;de<=x;de++){const He=b[de]=ce?_s(b[de]):Ci(b[de]);He.key!=null&&le.set(He.key,de)}let Q,Ie=0;const ve=x-Z+1;let De=!1,Ue=0;const _e=new Array(ve);for(de=0;de<ve;de++)_e[de]=0;for(de=B;de<=T;de++){const He=P[de];if(Ie>=ve){We(He,se,q,!0);continue}let Ne;if(He.key!=null)Ne=le.get(He.key);else for(Q=Z;Q<=x;Q++)if(_e[Q-Z]===0&&nr(He,b[Q])){Ne=Q;break}Ne===void 0?We(He,se,q,!0):(_e[Ne-Z]=de+1,Ne>=Ue?Ue=Ne:De=!0,v(He,b[Ne],G,null,se,q,ge,te,ce),Ie++)}const Ce=De?Z0(_e):Xr;for(Q=Ce.length-1,de=ve-1;de>=0;de--){const He=Z+de,Ne=b[He],Te=He+1<Pe?b[He+1].el:K;_e[de]===0?v(null,Ne,G,Te,se,q,ge,te,ce):De&&(Q<0||de!==Ce[Q]?Le(Ne,G,Te,2):Q--)}}},Le=(P,b,G,K,se=null)=>{const{el:q,type:ge,transition:te,children:ce,shapeFlag:de}=P;if(de&6){Le(P.component.subTree,b,G,K);return}if(de&128){P.suspense.move(b,G,K);return}if(de&64){ge.move(P,b,G,me);return}if(ge===Ht){i(q,b,G);for(let T=0;T<ce.length;T++)Le(ce[T],b,G,K);i(P.anchor,b,G);return}if(ge===bl){E(P,b,G);return}if(K!==2&&de&1&&te)if(K===0)te.beforeEnter(q),i(q,b,G),Tn(()=>te.enter(q),se);else{const{leave:T,delayLeave:x,afterLeave:B}=te,Z=()=>i(q,b,G),le=()=>{T(q,()=>{Z(),B&&B()})};x?x(q,Z,le):le()}else i(q,b,G)},We=(P,b,G,K=!1,se=!1)=>{const{type:q,props:ge,ref:te,children:ce,dynamicChildren:de,shapeFlag:Pe,patchFlag:T,dirs:x,cacheIndex:B}=P;if(T===-2&&(se=!1),te!=null&&Il(te,null,G,P,!0),B!=null&&(b.renderCache[B]=void 0),Pe&256){b.ctx.deactivate(P);return}const Z=Pe&1&&x,le=!Yo(P);let Q;if(le&&(Q=ge&&ge.onVnodeBeforeUnmount)&&yi(Q,b,P),Pe&6)ie(P.component,G,K);else{if(Pe&128){P.suspense.unmount(G,K);return}Z&&Gs(P,null,b,"beforeUnmount"),Pe&64?P.type.remove(P,b,G,me,K):de&&!de.hasOnce&&(q!==Ht||T>0&&T&64)?ye(de,b,G,!1,!0):(q===Ht&&T&384||!se&&Pe&16)&&ye(ce,b,G),K&&_t(P)}(le&&(Q=ge&&ge.onVnodeUnmounted)||Z)&&Tn(()=>{Q&&yi(Q,b,P),Z&&Gs(P,null,b,"unmounted")},G)},_t=P=>{const{type:b,el:G,anchor:K,transition:se}=P;if(b===Ht){Qe(G,K);return}if(b===bl){y(P);return}const q=()=>{s(G),se&&!se.persisted&&se.afterLeave&&se.afterLeave()};if(P.shapeFlag&1&&se&&!se.persisted){const{leave:ge,delayLeave:te}=se,ce=()=>ge(G,q);te?te(P.el,q,ce):ce()}else q()},Qe=(P,b)=>{let G;for(;P!==b;)G=f(P),s(P),P=G;s(b)},ie=(P,b,G)=>{const{bum:K,scope:se,job:q,subTree:ge,um:te,m:ce,a:de}=P;zf(ce),zf(de),K&&gl(K),se.stop(),q&&(q.flags|=8,We(ge,P,b,G)),te&&Tn(te,b),Tn(()=>{P.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&P.asyncDep&&!P.asyncResolved&&P.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},ye=(P,b,G,K=!1,se=!1,q=0)=>{for(let ge=q;ge<P.length;ge++)We(P[ge],b,G,K,se)},H=P=>{if(P.shapeFlag&6)return H(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const b=f(P.anchor||P.el),G=b&&b[Om];return G?f(G):b};let ue=!1;const oe=(P,b,G)=>{P==null?b._vnode&&We(b._vnode,null,null,!0):v(b._vnode||null,P,b,null,null,null,G),b._vnode=P,ue||(ue=!0,Pf(),Im(),ue=!1)},me={p:v,um:We,m:Le,r:_t,mt:D,mc:k,pc:Y,pbc:M,n:H,o:t};return{render:oe,hydrate:void 0,createApp:z0(oe)}}function Cc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ws({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function K0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Gd(t,e,n=!1){const i=t.children,s=e.children;if(Ye(i)&&Ye(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=_s(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Gd(o,a)),a.type===oc&&(a.el=o.el)}}function Z0(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function og(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:og(e)}function zf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Q0=Symbol.for("v-scx"),J0=()=>ts(Q0);function Bn(t,e,n){return ag(t,e,n)}function ag(t,e,n=Nt){const{immediate:i,deep:s,flush:r,once:o}=n,a=cn({},n),l=e&&i||!e&&r!=="post";let c;if(ra){if(r==="sync"){const h=J0();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Li,h.resume=Li,h.pause=Li,h}}const u=dn;a.call=(h,g,v)=>bi(h,u,g,v);let d=!1;r==="post"?a.scheduler=h=>{Tn(h,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(h,g)=>{g?h():Hd(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=d0(t,e,a);return ra&&(c?c.push(f):l&&f()),f}function eb(t,e,n){const i=this.proxy,s=qt(t)?t.includes(".")?lg(i,t):()=>i[t]:t.bind(i,i);let r;ct(e)?r=e:(r=e.handler,n=e);const o=Ea(this),a=ag(s,r.bind(i),n);return o(),a}function lg(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const tb=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${oi(e)}Modifiers`]||t[`${xr(e)}Modifiers`];function nb(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Nt;let s=n;const r=e.startsWith("update:"),o=r&&tb(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>qt(u)?u.trim():u)),o.number&&(s=n.map(Rl)));let a,l=i[a=yc(e)]||i[a=yc(oi(e))];!l&&r&&(l=i[a=yc(xr(e))]),l&&bi(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,bi(c,t,6,s)}}function cg(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!ct(t)){const l=c=>{const u=cg(c,e,!0);u&&(a=!0,cn(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Ot(t)&&i.set(t,null),null):(Ye(r)?r.forEach(l=>o[l]=null):cn(o,r),Ot(t)&&i.set(t,o),o)}function rc(t,e){return!t||!Zl(e)?!1:(e=e.slice(2).replace(/Once$/,""),Pt(t,e[0].toLowerCase()+e.slice(1))||Pt(t,xr(e))||Pt(t,e))}function Vf(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:g,inheritAttrs:v}=t,m=Ll(t);let p,C;try{if(n.shapeFlag&4){const y=s||i,U=y;p=Ci(c.call(U,y,u,d,h,f,g)),C=a}else{const y=e;p=Ci(y.length>1?y(d,{attrs:a,slots:o,emit:l}):y(d,null)),C=e.props?a:ib(a)}}catch(y){Zo.length=0,nc(y,t,1),p=tn(Fn)}let E=p;if(C&&v!==!1){const y=Object.keys(C),{shapeFlag:U}=E;y.length&&U&7&&(r&&y.some(Rd)&&(C=sb(C,r)),E=Ns(E,C,!1,!0))}return n.dirs&&(E=Ns(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&ia(E,n.transition),p=E,Ll(m),p}const ib=t=>{let e;for(const n in t)(n==="class"||n==="style"||Zl(n))&&((e||(e={}))[n]=t[n]);return e},sb=(t,e)=>{const n={};for(const i in t)(!Rd(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function rb(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Gf(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==i[f]&&!rc(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Gf(i,o,c):!0:!!o;return!1}function Gf(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!rc(n,r))return!0}return!1}function ob({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const ug=t=>t.__isSuspense;function ab(t,e){e&&e.pendingBranch?Ye(t)?e.effects.push(...t):e.effects.push(t):p0(t)}const Ht=Symbol.for("v-fgt"),oc=Symbol.for("v-txt"),Fn=Symbol.for("v-cmt"),bl=Symbol.for("v-stc"),Zo=[];let Kn=null;function Fe(t=!1){Zo.push(Kn=t?null:[])}function lb(){Zo.pop(),Kn=Zo[Zo.length-1]||null}let sa=1;function Wf(t,e=!1){sa+=t,t<0&&Kn&&e&&(Kn.hasOnce=!0)}function dg(t){return t.dynamicChildren=sa>0?Kn||Xr:null,lb(),sa>0&&Kn&&Kn.push(t),t}function Ve(t,e,n,i,s,r){return dg(_(t,e,n,i,s,r,!0))}function rr(t,e,n,i,s){return dg(tn(t,e,n,i,s,!0))}function Nl(t){return t?t.__v_isVNode===!0:!1}function nr(t,e){return t.type===e.type&&t.key===e.key}const fg=({key:t})=>t??null,xl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?qt(t)||ln(t)||ct(t)?{i:kn,r:t,k:e,f:!!n}:t:null);function _(t,e=null,n=null,i=0,s=null,r=t===Ht?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&fg(e),ref:e&&xl(e),scopeId:Nm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:kn};return a?(Wd(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=qt(n)?8:16),sa>0&&!o&&Kn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Kn.push(l),l}const tn=cb;function cb(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===L0)&&(t=Fn),Nl(t)){const a=Ns(t,e,!0);return n&&Wd(a,n),sa>0&&!r&&Kn&&(a.shapeFlag&6?Kn[Kn.indexOf(t)]=a:Kn.push(a)),a.patchFlag=-2,a}if(yb(t)&&(t=t.__vccOpts),e){e=ub(e);let{class:a,style:l}=e;a&&!qt(a)&&(e.class=Ke(a)),Ot(l)&&(Bd(l)&&!Ye(l)&&(l=cn({},l)),e.style=Yn(l))}const o=qt(t)?1:ug(t)?128:Fm(t)?64:Ot(t)?4:ct(t)?2:0;return _(t,e,n,i,s,o,r,!0)}function ub(t){return t?Bd(t)||Jm(t)?cn({},t):t:null}function Ns(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?db(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&fg(c),ref:e&&e.ref?n&&r?Ye(r)?r.concat(xl(e)):[r,xl(e)]:xl(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ht?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ns(t.ssContent),ssFallback:t.ssFallback&&Ns(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&ia(u,l.clone(u)),u}function Cs(t=" ",e=0){return tn(oc,null,t,e)}function hg(t,e){const n=tn(bl,null,t);return n.staticCount=e,n}function Ct(t="",e=!1){return e?(Fe(),rr(Fn,null,t)):tn(Fn,null,t)}function Ci(t){return t==null||typeof t=="boolean"?tn(Fn):Ye(t)?tn(Ht,null,t.slice()):Nl(t)?_s(t):tn(oc,null,String(t))}function _s(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ns(t)}function Wd(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ye(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Wd(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Jm(e)?e._ctx=kn:s===3&&kn&&(kn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ct(e)?(e={default:e,_ctx:kn},n=32):(e=String(e),i&64?(n=16,e=[Cs(e)]):n=8);t.children=e,t.shapeFlag|=n}function db(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Ke([e.class,i.class]));else if(s==="style")e.style=Yn([e.style,i.style]);else if(Zl(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ye(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function yi(t,e,n,i=null){bi(t,e,7,[n,i])}const fb=Km();let hb=0;function pb(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||fb,r={uid:hb++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new dm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:tg(i,s),emitsOptions:cg(i,s),emit:null,emitted:null,propsDefaults:Nt,inheritAttrs:i.inheritAttrs,ctx:Nt,data:Nt,props:Nt,attrs:Nt,slots:Nt,refs:Nt,setupState:Nt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=nb.bind(null,r),t.ce&&t.ce(r),r}let dn=null;const mb=()=>dn||kn;let Ol,Pu;{const t=ec(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Ol=e("__VUE_INSTANCE_SETTERS__",n=>dn=n),Pu=e("__VUE_SSR_SETTERS__",n=>ra=n)}const Ea=t=>{const e=dn;return Ol(t),t.scope.on(),()=>{t.scope.off(),Ol(e)}},$f=()=>{dn&&dn.scope.off(),Ol(null)};function pg(t){return t.vnode.shapeFlag&4}let ra=!1;function gb(t,e=!1,n=!1){e&&Pu(e);const{props:i,children:s}=t.vnode,r=pg(t);V0(t,i,r,e),X0(t,s,n);const o=r?vb(t,e):void 0;return e&&Pu(!1),o}function vb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,U0);const{setup:i}=n;if(i){ks();const s=t.setupContext=i.length>1?bb(t):null,r=Ea(t),o=wa(i,t,0,[t.props,s]),a=sm(o);if(Bs(),r(),(a||t.sp)&&!Yo(t)&&Xm(t),a){if(o.then($f,$f),e)return o.then(l=>{Xf(t,l)}).catch(l=>{nc(l,t,0)});t.asyncDep=o}else Xf(t,o)}else mg(t)}function Xf(t,e,n){ct(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ot(e)&&(t.setupState=Pm(e)),mg(t)}function mg(t,e,n){const i=t.type;t.render||(t.render=i.render||Li);{const s=Ea(t);ks();try{N0(t)}finally{Bs(),s()}}}const _b={get(t,e){return vn(t,"get",""),t[e]}};function bb(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,_b),slots:t.slots,emit:t.emit,expose:e}}function ac(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Pm(Cm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ko)return Ko[n](t)},has(e,n){return n in e||n in Ko}})):t.proxy}function xb(t,e=!0){return ct(t)?t.displayName||t.name:t.name||e&&t.__name}function yb(t){return ct(t)&&"__vccOpts"in t}const an=(t,e)=>c0(t,e,ra);function $d(t,e,n){const i=arguments.length;return i===2?Ot(e)&&!Ye(e)?Nl(e)?tn(t,null,[e]):tn(t,e):tn(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Nl(n)&&(n=[n]),tn(t,e,n))}const wb="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Du;const jf=typeof window<"u"&&window.trustedTypes;if(jf)try{Du=jf.createPolicy("vue",{createHTML:t=>t})}catch{}const gg=Du?t=>Du.createHTML(t):t=>t,Sb="http://www.w3.org/2000/svg",Mb="http://www.w3.org/1998/Math/MathML",Yi=typeof document<"u"?document:null,qf=Yi&&Yi.createElement("template"),Eb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Yi.createElementNS(Sb,t):e==="mathml"?Yi.createElementNS(Mb,t):n?Yi.createElement(t,{is:n}):Yi.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Yi.createTextNode(t),createComment:t=>Yi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Yi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{qf.innerHTML=gg(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=qf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},as="transition",Lo="animation",oa=Symbol("_vtc"),vg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Tb=cn({},Hm,vg),Ab=t=>(t.displayName="Transition",t.props=Tb,t),Cb=Ab((t,{slots:e})=>$d(b0,Rb(t),e)),$s=(t,e=[])=>{Ye(t)?t.forEach(n=>n(...e)):t&&t(...e)},Yf=t=>t?Ye(t)?t.some(e=>e.length>1):t.length>1:!1;function Rb(t){const e={};for(const N in t)N in vg||(e[N]=t[N]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,g=Pb(s),v=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:C,onEnterCancelled:E,onLeave:y,onLeaveCancelled:U,onBeforeAppear:I=p,onAppear:R=C,onAppearCancelled:k=E}=e,w=(N,O,D,V)=>{N._enterCancelled=V,Xs(N,O?u:a),Xs(N,O?c:o),D&&D()},M=(N,O)=>{N._isLeaving=!1,Xs(N,d),Xs(N,h),Xs(N,f),O&&O()},L=N=>(O,D)=>{const V=N?R:C,W=()=>w(O,N,D);$s(V,[O,W]),Kf(()=>{Xs(O,N?l:r),Hi(O,N?u:a),Yf(V)||Zf(O,i,v,W)})};return cn(e,{onBeforeEnter(N){$s(p,[N]),Hi(N,r),Hi(N,o)},onBeforeAppear(N){$s(I,[N]),Hi(N,l),Hi(N,c)},onEnter:L(!1),onAppear:L(!0),onLeave(N,O){N._isLeaving=!0;const D=()=>M(N,O);Hi(N,d),N._enterCancelled?(Hi(N,f),eh()):(eh(),Hi(N,f)),Kf(()=>{N._isLeaving&&(Xs(N,d),Hi(N,h),Yf(y)||Zf(N,i,m,D))}),$s(y,[N,D])},onEnterCancelled(N){w(N,!1,void 0,!0),$s(E,[N])},onAppearCancelled(N){w(N,!0,void 0,!0),$s(k,[N])},onLeaveCancelled(N){M(N),$s(U,[N])}})}function Pb(t){if(t==null)return null;if(Ot(t))return[Rc(t.enter),Rc(t.leave)];{const e=Rc(t);return[e,e]}}function Rc(t){return D_(t)}function Hi(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[oa]||(t[oa]=new Set)).add(e)}function Xs(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[oa];n&&(n.delete(e),n.size||(t[oa]=void 0))}function Kf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Db=0;function Zf(t,e,n,i){const s=t._endId=++Db,r=()=>{s===t._endId&&i()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=Lb(t,e);if(!o)return i();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,f),r()},f=h=>{h.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,f)}function Lb(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),s=i(`${as}Delay`),r=i(`${as}Duration`),o=Qf(s,r),a=i(`${Lo}Delay`),l=i(`${Lo}Duration`),c=Qf(a,l);let u=null,d=0,f=0;e===as?o>0&&(u=as,d=o,f=r.length):e===Lo?c>0&&(u=Lo,d=c,f=l.length):(d=Math.max(o,c),u=d>0?o>c?as:Lo:null,f=u?u===as?r.length:l.length:0);const h=u===as&&/\b(transform|all)(,|$)/.test(i(`${as}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:h}}function Qf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Jf(n)+Jf(t[i])))}function Jf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function eh(){return document.body.offsetHeight}function Ib(t,e,n){const i=t[oa];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Fl=Symbol("_vod"),_g=Symbol("_vsh"),eU={beforeMount(t,{value:e},{transition:n}){t[Fl]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Io(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),Io(t,!0),i.enter(t)):i.leave(t,()=>{Io(t,!1)}):Io(t,e))},beforeUnmount(t,{value:e}){Io(t,e)}};function Io(t,e){t.style.display=e?t[Fl]:"none",t[_g]=!e}const Ub=Symbol(""),Nb=/(^|;)\s*display\s*:/;function Ob(t,e,n){const i=t.style,s=qt(n);let r=!1;if(n&&!s){if(e)if(qt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&yl(i,a,"")}else for(const o in e)n[o]==null&&yl(i,o,"");for(const o in n)o==="display"&&(r=!0),yl(i,o,n[o])}else if(s){if(e!==n){const o=i[Ub];o&&(n+=";"+o),i.cssText=n,r=Nb.test(n)}}else e&&t.removeAttribute("style");Fl in t&&(t[Fl]=r?i.display:"",t[_g]&&(i.display="none"))}const th=/\s*!important$/;function yl(t,e,n){if(Ye(n))n.forEach(i=>yl(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Fb(t,e);th.test(n)?t.setProperty(xr(i),n.replace(th,""),"important"):t[i]=n}}const nh=["Webkit","Moz","ms"],Pc={};function Fb(t,e){const n=Pc[e];if(n)return n;let i=oi(e);if(i!=="filter"&&i in t)return Pc[e]=i;i=Jl(i);for(let s=0;s<nh.length;s++){const r=nh[s]+i;if(r in t)return Pc[e]=r}return e}const ih="http://www.w3.org/1999/xlink";function sh(t,e,n,i,s,r=F_(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ih,e.slice(6,e.length)):t.setAttributeNS(ih,e,n):n==null||r&&!lm(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Ni(n)?String(n):n)}function rh(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?gg(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=lm(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function ys(t,e,n,i){t.addEventListener(e,n,i)}function kb(t,e,n,i){t.removeEventListener(e,n,i)}const oh=Symbol("_vei");function Bb(t,e,n,i,s=null){const r=t[oh]||(t[oh]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Hb(e);if(i){const c=r[e]=Gb(i,s);ys(t,a,c,l)}else o&&(kb(t,a,o,l),r[e]=void 0)}}const ah=/(?:Once|Passive|Capture)$/;function Hb(t){let e;if(ah.test(t)){e={};let i;for(;i=t.match(ah);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):xr(t.slice(2)),e]}let Dc=0;const zb=Promise.resolve(),Vb=()=>Dc||(zb.then(()=>Dc=0),Dc=Date.now());function Gb(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;bi(Wb(i,n.value),e,5,[i])};return n.value=t,n.attached=Vb(),n}function Wb(t,e){if(Ye(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const lh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,$b=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?Ib(t,i,o):e==="style"?Ob(t,n,i):Zl(e)?Rd(e)||Bb(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Xb(t,e,i,o))?(rh(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&sh(t,e,i,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!qt(i))?rh(t,oi(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),sh(t,e,i,o))};function Xb(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&lh(e)&&ct(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return lh(e)&&qt(n)?!1:e in t}const ho=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Ye(e)?n=>gl(e,n):e};function jb(t){t.target.composing=!0}function ch(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ns=Symbol("_assign"),en={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[ns]=ho(s);const r=i||s.props&&s.props.type==="number";ys(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Rl(a)),t[ns](a)}),n&&ys(t,"change",()=>{t.value=t.value.trim()}),e||(ys(t,"compositionstart",jb),ys(t,"compositionend",ch),ys(t,"change",ch))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[ns]=ho(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?Rl(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===l)||(t.value=l))}},tU={deep:!0,created(t,e,n){t[ns]=ho(n),ys(t,"change",()=>{const i=t._modelValue,s=aa(t),r=t.checked,o=t[ns];if(Ye(i)){const a=Ld(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(So(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(bg(t,r))})},mounted:uh,beforeUpdate(t,e,n){t[ns]=ho(n),uh(t,e,n)}};function uh(t,{value:e,oldValue:n},i){t._modelValue=e;let s;if(Ye(e))s=Ld(e,i.props.value)>-1;else if(So(e))s=e.has(i.props.value);else{if(e===n)return;s=xa(e,bg(t,!0))}t.checked!==s&&(t.checked=s)}const qb={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=So(e);ys(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Rl(aa(o)):aa(o));t[ns](t.multiple?s?new Set(r):r:r[0]),t._assigning=!0,Sa(()=>{t._assigning=!1})}),t[ns]=ho(i)},mounted(t,{value:e}){dh(t,e)},beforeUpdate(t,e,n){t[ns]=ho(n)},updated(t,{value:e}){t._assigning||dh(t,e)}};function dh(t,e){const n=t.multiple,i=Ye(e);if(!(n&&!i&&!So(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],a=aa(o);if(n)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Ld(e,a)>-1}else o.selected=e.has(a);else if(xa(aa(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function aa(t){return"_value"in t?t._value:t.value}function bg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Yb=["ctrl","shift","alt","meta"],Kb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Yb.some(n=>t[`${n}Key`]&&!e.includes(n))},Uo=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=Kb[e[o]];if(a&&a(s,e))return}return t(s,...r)})},Zb=cn({patchProp:$b},Eb);let fh;function Qb(){return fh||(fh=q0(Zb))}const Jb=(...t)=>{const e=Qb().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=tx(i);if(!s)return;const r=e._component;!ct(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,ex(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function ex(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function tx(t){return qt(t)?document.querySelector(t):t}/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const nx=Symbol();var hh;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(hh||(hh={}));function ix(){const t=B_(!0),e=t.run(()=>tt({}));let n=[],i=[];const s=Cm({install(r){s._a=r,r.provide(nx,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return this._a?n.push(r):i.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Vr=typeof document<"u";function xg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function sx(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&xg(t.default)}const Rt=Object.assign;function Lc(t,e){const n={};for(const i in e){const s=e[i];n[i]=xi(s)?s.map(t):t(s)}return n}const Qo=()=>{},xi=Array.isArray,yg=/#/g,rx=/&/g,ox=/\//g,ax=/=/g,lx=/\?/g,wg=/\+/g,cx=/%5B/g,ux=/%5D/g,Sg=/%5E/g,dx=/%60/g,Mg=/%7B/g,fx=/%7C/g,Eg=/%7D/g,hx=/%20/g;function Xd(t){return encodeURI(""+t).replace(fx,"|").replace(cx,"[").replace(ux,"]")}function px(t){return Xd(t).replace(Mg,"{").replace(Eg,"}").replace(Sg,"^")}function Lu(t){return Xd(t).replace(wg,"%2B").replace(hx,"+").replace(yg,"%23").replace(rx,"%26").replace(dx,"`").replace(Mg,"{").replace(Eg,"}").replace(Sg,"^")}function mx(t){return Lu(t).replace(ax,"%3D")}function gx(t){return Xd(t).replace(yg,"%23").replace(lx,"%3F")}function vx(t){return t==null?"":gx(t).replace(ox,"%2F")}function la(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const _x=/\/$/,bx=t=>t.replace(_x,"");function Ic(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Sx(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:la(o)}}function xx(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ph(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function yx(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&po(e.matched[i],n.matched[s])&&Tg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function po(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Tg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!wx(t[n],e[n]))return!1;return!0}function wx(t,e){return xi(t)?mh(t,e):xi(e)?mh(e,t):t===e}function mh(t,e){return xi(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function Sx(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const ls={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ca;(function(t){t.pop="pop",t.push="push"})(ca||(ca={}));var Jo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Jo||(Jo={}));function Mx(t){if(!t)if(Vr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),bx(t)}const Ex=/^[^#]+#/;function Tx(t,e){return t.replace(Ex,"#")+e}function Ax(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const lc=()=>({left:window.scrollX,top:window.scrollY});function Cx(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Ax(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function gh(t,e){return(history.state?history.state.position-e:-1)+t}const Iu=new Map;function Rx(t,e){Iu.set(t,e)}function Px(t){const e=Iu.get(t);return Iu.delete(t),e}let Dx=()=>location.protocol+"//"+location.host;function Ag(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),ph(l,"")}return ph(n,t)+i+s}function Lx(t,e,n,i){let s=[],r=[],o=null;const a=({state:f})=>{const h=Ag(t,location),g=n.value,v=e.value;let m=0;if(f){if(n.value=h,e.value=f,o&&o===g){o=null;return}m=v?f.position-v.position:0}else i(h);s.forEach(p=>{p(n.value,g,{delta:m,type:ca.pop,direction:m?m>0?Jo.forward:Jo.back:Jo.unknown})})};function l(){o=n.value}function c(f){s.push(f);const h=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return r.push(h),h}function u(){const{history:f}=window;f.state&&f.replaceState(Rt({},f.state,{scroll:lc()}),"")}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function vh(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?lc():null}}function Ix(t){const{history:e,location:n}=window,i={value:Ag(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:Dx()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(h){console.error(h),n[u?"replace":"assign"](f)}}function o(l,c){const u=Rt({},e.state,vh(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=Rt({},s.value,e.state,{forward:l,scroll:lc()});r(u.current,u,!0);const d=Rt({},vh(i.value,l,null),{position:u.position+1},c);r(l,d,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Ux(t){t=Mx(t);const e=Ix(t),n=Lx(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=Rt({location:"",base:t,go:i,createHref:Tx.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Nx(t){return typeof t=="string"||t&&typeof t=="object"}function Cg(t){return typeof t=="string"||typeof t=="symbol"}const Rg=Symbol("");var _h;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(_h||(_h={}));function mo(t,e){return Rt(new Error,{type:t,[Rg]:!0},e)}function zi(t,e){return t instanceof Error&&Rg in t&&(e==null||!!(t.type&e))}const bh="[^/]+?",Ox={sensitive:!1,strict:!1,start:!0,end:!0},Fx=/[.+*?^${}()[\]/\\]/g;function kx(t,e){const n=Rt({},Ox,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let d=0;d<c.length;d++){const f=c[d];let h=40+(n.sensitive?.25:0);if(f.type===0)d||(s+="/"),s+=f.value.replace(Fx,"\\$&"),h+=40;else if(f.type===1){const{value:g,repeatable:v,optional:m,regexp:p}=f;r.push({name:g,repeatable:v,optional:m});const C=p||bh;if(C!==bh){h+=10;try{new RegExp(`(${C})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${g}" (${C}): `+y.message)}}let E=v?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;d||(E=m&&c.length<2?`(?:/${E})`:"/"+E),m&&(E+="?"),s+=E,h+=20,m&&(h+=-8),v&&(h+=-20),C===".*"&&(h+=-50)}u.push(h)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",g=r[f-1];d[g.name]=h&&g.repeatable?h.split("/"):h}return d}function l(c){let u="",d=!1;for(const f of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===0)u+=h.value;else if(h.type===1){const{value:g,repeatable:v,optional:m}=h,p=g in c?c[g]:"";if(xi(p)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const C=xi(p)?p.join("/"):p;if(!C)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=C}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function Bx(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Pg(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=Bx(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(xh(i))return 1;if(xh(s))return-1}return s.length-i.length}function xh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Hx={type:0,value:""},zx=/[a-zA-Z0-9_]/;function Vx(t){if(!t)return[[]];if(t==="/")return[[Hx]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):f();break;case 4:f(),n=i;break;case 1:l==="("?n=2:zx.test(l)?f():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),s}function Gx(t,e,n){const i=kx(Vx(t.path),n),s=Rt(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Wx(t,e){const n=[],i=new Map;e=Mh({strict:!1,end:!0,sensitive:!1},e);function s(d){return i.get(d)}function r(d,f,h){const g=!h,v=wh(d);v.aliasOf=h&&h.record;const m=Mh(e,d),p=[v];if("alias"in d){const y=typeof d.alias=="string"?[d.alias]:d.alias;for(const U of y)p.push(wh(Rt({},v,{components:h?h.record.components:v.components,path:U,aliasOf:h?h.record:v})))}let C,E;for(const y of p){const{path:U}=y;if(f&&U[0]!=="/"){const I=f.record.path,R=I[I.length-1]==="/"?"":"/";y.path=f.record.path+(U&&R+U)}if(C=Gx(y,f,m),h?h.alias.push(C):(E=E||C,E!==C&&E.alias.push(C),g&&d.name&&!Sh(C)&&o(d.name)),Dg(C)&&l(C),v.children){const I=v.children;for(let R=0;R<I.length;R++)r(I[R],C,h&&h.children[R])}h=h||C}return E?()=>{o(E)}:Qo}function o(d){if(Cg(d)){const f=i.get(d);f&&(i.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const f=jx(d,n);n.splice(f,0,d),d.record.name&&!Sh(d)&&i.set(d.record.name,d)}function c(d,f){let h,g={},v,m;if("name"in d&&d.name){if(h=i.get(d.name),!h)throw mo(1,{location:d});m=h.record.name,g=Rt(yh(f.params,h.keys.filter(E=>!E.optional).concat(h.parent?h.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),d.params&&yh(d.params,h.keys.map(E=>E.name))),v=h.stringify(g)}else if(d.path!=null)v=d.path,h=n.find(E=>E.re.test(v)),h&&(g=h.parse(v),m=h.record.name);else{if(h=f.name?i.get(f.name):n.find(E=>E.re.test(f.path)),!h)throw mo(1,{location:d,currentLocation:f});m=h.record.name,g=Rt({},f.params,d.params),v=h.stringify(g)}const p=[];let C=h;for(;C;)p.unshift(C.record),C=C.parent;return{name:m,path:v,params:g,matched:p,meta:Xx(p)}}t.forEach(d=>r(d));function u(){n.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function yh(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function wh(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:$x(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function $x(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Sh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Xx(t){return t.reduce((e,n)=>Rt(e,n.meta),{})}function Mh(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function jx(t,e){let n=0,i=e.length;for(;n!==i;){const r=n+i>>1;Pg(t,e[r])<0?i=r:n=r+1}const s=qx(t);return s&&(i=e.lastIndexOf(s,i-1)),i}function qx(t){let e=t;for(;e=e.parent;)if(Dg(e)&&Pg(t,e)===0)return e}function Dg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Yx(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(wg," "),o=r.indexOf("="),a=la(o<0?r:r.slice(0,o)),l=o<0?null:la(r.slice(o+1));if(a in e){let c=e[a];xi(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Eh(t){let e="";for(let n in t){const i=t[n];if(n=mx(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(xi(i)?i.map(r=>r&&Lu(r)):[i&&Lu(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Kx(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=xi(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const Zx=Symbol(""),Th=Symbol(""),jd=Symbol(""),Lg=Symbol(""),Uu=Symbol("");function No(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function bs(t,e,n,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(mo(4,{from:n,to:e})):f instanceof Error?l(f):Nx(f)?l(mo(2,{from:e,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=r(()=>t.call(i&&i.instances[s],e,n,c));let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(f=>l(f))})}function Uc(t,e,n,i,s=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(xg(l)){const u=(l.__vccOpts||l)[e];u&&r.push(bs(u,n,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=sx(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const h=(d.__vccOpts||d)[e];return h&&bs(h,n,i,o,a,s)()}))}}return r}function Ah(t){const e=ts(jd),n=ts(Lg),i=an(()=>{const l=Ls(t.to);return e.resolve(l)}),s=an(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(po.bind(null,u));if(f>-1)return f;const h=Ch(l[c-2]);return c>1&&Ch(u)===h&&d[d.length-1].path!==h?d.findIndex(po.bind(null,l[c-2])):f}),r=an(()=>s.value>-1&&ny(n.params,i.value.params)),o=an(()=>s.value>-1&&s.value===n.matched.length-1&&Tg(n.params,i.value.params));function a(l={}){if(ty(l)){const c=e[Ls(t.replace)?"replace":"push"](Ls(t.to)).catch(Qo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:an(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function Qx(t){return t.length===1?t[0]:t}const Jx=$m({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ah,setup(t,{slots:e}){const n=ya(Ah(t)),{options:i}=ts(jd),s=an(()=>({[Rh(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Rh(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&Qx(e.default(n));return t.custom?r:$d("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),ey=Jx;function ty(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ny(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!xi(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Ch(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Rh=(t,e,n)=>t??e??n,iy=$m({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=ts(Uu),s=an(()=>t.route||i.value),r=ts(Th,0),o=an(()=>{let c=Ls(r);const{matched:u}=s.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=an(()=>s.value.matched[o.value]);_l(Th,an(()=>o.value+1)),_l(Zx,a),_l(Uu,s);const l=tt();return Bn(()=>[l.value,a.value,t.name],([c,u,d],[f,h,g])=>{u&&(u.instances[d]=c,h&&h!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!po(u,h)||!f)&&(u.enterCallbacks[d]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,d=a.value,f=d&&d.components[u];if(!f)return Ph(n.default,{Component:f,route:c});const h=d.props[u],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=$d(f,Rt({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Ph(n.default,{Component:m,route:c})||m}}});function Ph(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ig=iy;function sy(t){const e=Wx(t.routes,t),n=t.parseQuery||Yx,i=t.stringifyQuery||Eh,s=t.history,r=No(),o=No(),a=No(),l=r0(ls);let c=ls;Vr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Lc.bind(null,H=>""+H),d=Lc.bind(null,vx),f=Lc.bind(null,la);function h(H,ue){let oe,me;return Cg(H)?(oe=e.getRecordMatcher(H),me=ue):me=H,e.addRoute(me,oe)}function g(H){const ue=e.getRecordMatcher(H);ue&&e.removeRoute(ue)}function v(){return e.getRoutes().map(H=>H.record)}function m(H){return!!e.getRecordMatcher(H)}function p(H,ue){if(ue=Rt({},ue||l.value),typeof H=="string"){const G=Ic(n,H,ue.path),K=e.resolve({path:G.path},ue),se=s.createHref(G.fullPath);return Rt(G,K,{params:f(K.params),hash:la(G.hash),redirectedFrom:void 0,href:se})}let oe;if(H.path!=null)oe=Rt({},H,{path:Ic(n,H.path,ue.path).path});else{const G=Rt({},H.params);for(const K in G)G[K]==null&&delete G[K];oe=Rt({},H,{params:d(G)}),ue.params=d(ue.params)}const me=e.resolve(oe,ue),Je=H.hash||"";me.params=u(f(me.params));const P=xx(i,Rt({},H,{hash:px(Je),path:me.path})),b=s.createHref(P);return Rt({fullPath:P,hash:Je,query:i===Eh?Kx(H.query):H.query||{}},me,{redirectedFrom:void 0,href:b})}function C(H){return typeof H=="string"?Ic(n,H,l.value.path):Rt({},H)}function E(H,ue){if(c!==H)return mo(8,{from:ue,to:H})}function y(H){return R(H)}function U(H){return y(Rt(C(H),{replace:!0}))}function I(H){const ue=H.matched[H.matched.length-1];if(ue&&ue.redirect){const{redirect:oe}=ue;let me=typeof oe=="function"?oe(H):oe;return typeof me=="string"&&(me=me.includes("?")||me.includes("#")?me=C(me):{path:me},me.params={}),Rt({query:H.query,hash:H.hash,params:me.path!=null?{}:H.params},me)}}function R(H,ue){const oe=c=p(H),me=l.value,Je=H.state,P=H.force,b=H.replace===!0,G=I(oe);if(G)return R(Rt(C(G),{state:typeof G=="object"?Rt({},Je,G.state):Je,force:P,replace:b}),ue||oe);const K=oe;K.redirectedFrom=ue;let se;return!P&&yx(i,me,oe)&&(se=mo(16,{to:K,from:me}),Le(me,me,!0,!1)),(se?Promise.resolve(se):M(K,me)).catch(q=>zi(q)?zi(q,2)?q:Me(q):Y(q,K,me)).then(q=>{if(q){if(zi(q,2))return R(Rt({replace:b},C(q.to),{state:typeof q.to=="object"?Rt({},Je,q.to.state):Je,force:P}),ue||K)}else q=N(K,me,!0,b,Je);return L(K,me,q),q})}function k(H,ue){const oe=E(H,ue);return oe?Promise.reject(oe):Promise.resolve()}function w(H){const ue=Qe.values().next().value;return ue&&typeof ue.runWithContext=="function"?ue.runWithContext(H):H()}function M(H,ue){let oe;const[me,Je,P]=ry(H,ue);oe=Uc(me.reverse(),"beforeRouteLeave",H,ue);for(const G of me)G.leaveGuards.forEach(K=>{oe.push(bs(K,H,ue))});const b=k.bind(null,H,ue);return oe.push(b),ye(oe).then(()=>{oe=[];for(const G of r.list())oe.push(bs(G,H,ue));return oe.push(b),ye(oe)}).then(()=>{oe=Uc(Je,"beforeRouteUpdate",H,ue);for(const G of Je)G.updateGuards.forEach(K=>{oe.push(bs(K,H,ue))});return oe.push(b),ye(oe)}).then(()=>{oe=[];for(const G of P)if(G.beforeEnter)if(xi(G.beforeEnter))for(const K of G.beforeEnter)oe.push(bs(K,H,ue));else oe.push(bs(G.beforeEnter,H,ue));return oe.push(b),ye(oe)}).then(()=>(H.matched.forEach(G=>G.enterCallbacks={}),oe=Uc(P,"beforeRouteEnter",H,ue,w),oe.push(b),ye(oe))).then(()=>{oe=[];for(const G of o.list())oe.push(bs(G,H,ue));return oe.push(b),ye(oe)}).catch(G=>zi(G,8)?G:Promise.reject(G))}function L(H,ue,oe){a.list().forEach(me=>w(()=>me(H,ue,oe)))}function N(H,ue,oe,me,Je){const P=E(H,ue);if(P)return P;const b=ue===ls,G=Vr?history.state:{};oe&&(me||b?s.replace(H.fullPath,Rt({scroll:b&&G&&G.scroll},Je)):s.push(H.fullPath,Je)),l.value=H,Le(H,ue,oe,b),Me()}let O;function D(){O||(O=s.listen((H,ue,oe)=>{if(!ie.listening)return;const me=p(H),Je=I(me);if(Je){R(Rt(Je,{replace:!0,force:!0}),me).catch(Qo);return}c=me;const P=l.value;Vr&&Rx(gh(P.fullPath,oe.delta),lc()),M(me,P).catch(b=>zi(b,12)?b:zi(b,2)?(R(Rt(C(b.to),{force:!0}),me).then(G=>{zi(G,20)&&!oe.delta&&oe.type===ca.pop&&s.go(-1,!1)}).catch(Qo),Promise.reject()):(oe.delta&&s.go(-oe.delta,!1),Y(b,me,P))).then(b=>{b=b||N(me,P,!1),b&&(oe.delta&&!zi(b,8)?s.go(-oe.delta,!1):oe.type===ca.pop&&zi(b,20)&&s.go(-1,!1)),L(me,P,b)}).catch(Qo)}))}let V=No(),W=No(),ee;function Y(H,ue,oe){Me(H);const me=W.list();return me.length?me.forEach(Je=>Je(H,ue,oe)):console.error(H),Promise.reject(H)}function xe(){return ee&&l.value!==ls?Promise.resolve():new Promise((H,ue)=>{V.add([H,ue])})}function Me(H){return ee||(ee=!H,D(),V.list().forEach(([ue,oe])=>H?oe(H):ue()),V.reset()),H}function Le(H,ue,oe,me){const{scrollBehavior:Je}=t;if(!Vr||!Je)return Promise.resolve();const P=!oe&&Px(gh(H.fullPath,0))||(me||!oe)&&history.state&&history.state.scroll||null;return Sa().then(()=>Je(H,ue,P)).then(b=>b&&Cx(b)).catch(b=>Y(b,H,ue))}const We=H=>s.go(H);let _t;const Qe=new Set,ie={currentRoute:l,listening:!0,addRoute:h,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:v,resolve:p,options:t,push:y,replace:U,go:We,back:()=>We(-1),forward:()=>We(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:W.add,isReady:xe,install(H){const ue=this;H.component("RouterLink",ey),H.component("RouterView",Ig),H.config.globalProperties.$router=ue,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>Ls(l)}),Vr&&!_t&&l.value===ls&&(_t=!0,y(s.location).catch(Je=>{}));const oe={};for(const Je in ls)Object.defineProperty(oe,Je,{get:()=>l.value[Je],enumerable:!0});H.provide(jd,ue),H.provide(Lg,Tm(oe)),H.provide(Uu,l);const me=H.unmount;Qe.add(H),H.unmount=function(){Qe.delete(H),Qe.size<1&&(c=ls,O&&O(),O=null,l.value=ls,_t=!1,ee=!1),me()}}};function ye(H){return H.reduce((ue,oe)=>ue.then(()=>w(oe)),Promise.resolve())}return ie}function ry(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>po(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>po(c,l))||s.push(l))}return[n,i,s]}const Mo=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},oy={key:0,class:"install-prompt",dir:"rtl",role:"dialog","aria-labelledby":"install-prompt-title"},ay={class:"install-copy"},ly={key:0,class:"install-text"},cy={key:1,class:"install-text"},uy={class:"install-actions"},Wa="pwaInstallDismissedAt",dy=14*24*60*60*1e3,fy=3e3,hy={__name:"InstallPrompt",setup(t){const e="/miyuki-beads-designer/pwa-192x192.png",n=tt(!1),i=tt(!1),s=tt(null);let r=null;function o(){return window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0}function a(){return/iphone|ipad|ipod/i.test(window.navigator.userAgent)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1}function l(){const g=Number(localStorage.getItem(Wa));return!!g&&Date.now()-g<dy}function c(){r=setTimeout(()=>{n.value=!0},fy)}function u(g){g.preventDefault(),s.value=g,l()||c()}function d(){n.value=!1,s.value=null,localStorage.removeItem(Wa)}async function f(){const g=s.value;if(!g)return;n.value=!1,g.prompt();const{outcome:v}=await g.userChoice;s.value=null,v==="dismissed"&&localStorage.setItem(Wa,String(Date.now()))}function h(){n.value=!1,localStorage.setItem(Wa,String(Date.now()))}return Hs(()=>{o()||l()||(window.addEventListener("beforeinstallprompt",u),window.addEventListener("appinstalled",d),a()&&(i.value=!0,c()))}),Ma(()=>{clearTimeout(r),window.removeEventListener("beforeinstallprompt",u),window.removeEventListener("appinstalled",d)}),(g,v)=>(Fe(),rr(Cb,{name:"install-slide"},{default:Gr(()=>[n.value?(Fe(),Ve("div",oy,[_("img",{class:"install-icon",src:e,alt:"",width:"56",height:"56"}),_("div",ay,[v[1]||(v[1]=_("p",{id:"install-prompt-title",class:"install-title"}," نصب اپلیکیشن میوکی ",-1)),i.value?(Fe(),Ve("p",cy,v[0]||(v[0]=[Cs(" در سافاری روی "),_("span",{class:"ios-key"},"هم‌رسانی",-1),Cs(" بزنید و سپس "),_("span",{class:"ios-key"},"افزودن به صفحهٔ اصلی",-1),Cs(" را انتخاب کنید. ")]))):(Fe(),Ve("p",ly," آن را به صفحهٔ اصلی اضافه کنید تا تمام‌صفحه اجرا شود و بدون اینترنت هم کار کند. "))]),_("div",uy,[i.value?Ct("",!0):(Fe(),Ve("button",{key:0,class:"install-btn install-btn--primary",onClick:f}," نصب ")),_("button",{class:"install-btn install-btn--ghost",onClick:h},st(i.value?"متوجه شدم":"فعلاً نه"),1)]),_("button",{class:"install-close","aria-label":"بستن",onClick:h}," × ")])):Ct("",!0)]),_:1}))}},py=Mo(hy,[["__scopeId","data-v-8b790cc8"]]),my={id:"app"},gy={class:"app-header"},vy={class:"header-content"},_y={class:"header-actions max-md:text-[11px]"},by={class:"main-content"},xy={__name:"App",setup(t){const e=tt(!1),n=tt(!1);function i(){n.value=!n.value}return Hs(()=>{localStorage.getItem("darkMode")==="true"&&(e.value=!0,document.body.classList.add("dark-mode"))}),(s,r)=>{const o=D0("RouterLink");return Fe(),Ve("div",my,[_("header",gy,[_("div",vy,[r[6]||(r[6]=_("div",{class:"logo-section max-md:hidden"},[_("h1",{class:"app-title"},"Miyuki Beads Designer")],-1)),_("div",_y,[tn(o,{to:"/"},{default:Gr(()=>r[1]||(r[1]=[Cs("Flat Grid")])),_:1}),tn(o,{to:"/weaving-grid"},{default:Gr(()=>r[2]||(r[2]=[Cs("Weaving Grid")])),_:1}),tn(o,{to:"/beadwork-pattern"},{default:Gr(()=>r[3]||(r[3]=[Cs("Beadwork Pattern")])),_:1}),tn(o,{to:"/peyote-grid"},{default:Gr(()=>r[4]||(r[4]=[Cs("Peyote Grid")])),_:1})]),_("button",{class:Ke(["mobile-toggle-btn md:hidden",{active:n.value}]),onClick:i},r[5]||(r[5]=[_("span",{class:"hamburger-line"},null,-1),_("span",{class:"hamburger-line"},null,-1),_("span",{class:"hamburger-line"},null,-1)]),2)])]),_("main",by,[tn(Ls(Ig),{"is-mobile-header-open":n.value,onCloseMobileHeader:r[0]||(r[0]=a=>n.value=!1)},null,8,["is-mobile-header-open"])]),tn(py)])}}},yy=Mo(xy,[["__scopeId","data-v-60297c7c"]]),wy="modulepreload",Sy=function(t){return"/miyuki-beads-designer/"+t},Dh={},Oo=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){let o=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=o(n.map(c=>{if(c=Sy(c),c in Dh)return;Dh[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":wy,u||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((h,g)=>{f.addEventListener("load",h),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};/*!
* sweetalert2 v11.22.3
* Released under the MIT License.
*/function Ug(t,e,n){if(typeof t=="function"?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}function My(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Lh(t,e){return t.get(Ug(t,e))}function Ey(t,e,n){My(t,e),e.set(t,n)}function Ty(t,e,n){return t.set(Ug(t,e),n),n}const Ay=100,Ze={},Cy=()=>{Ze.previousActiveElement instanceof HTMLElement?(Ze.previousActiveElement.focus(),Ze.previousActiveElement=null):document.body&&document.body.focus()},Ry=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,i=window.scrollY;Ze.restoreFocusTimeout=setTimeout(()=>{Cy(),e()},Ay),window.scrollTo(n,i)}),Ng="swal2-",Py=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],ae=Py.reduce((t,e)=>(t[e]=Ng+e,t),{}),Dy=["success","warning","info","question","error"],kl=Dy.reduce((t,e)=>(t[e]=Ng+e,t),{}),Og="SweetAlert2:",qd=t=>t.charAt(0).toUpperCase()+t.slice(1),Pn=t=>{console.warn(`${Og} ${typeof t=="object"?t.join(" "):t}`)},yr=t=>{console.error(`${Og} ${t}`)},Ih=[],Ly=t=>{Ih.includes(t)||(Ih.push(t),Pn(t))},Fg=(t,e=null)=>{Ly(`"${t}" is deprecated and will be removed in the next major release.${e?` Use "${e}" instead.`:""}`)},cc=t=>typeof t=="function"?t():t,Yd=t=>t&&typeof t.toPromise=="function",Ta=t=>Yd(t)?t.toPromise():Promise.resolve(t),Kd=t=>t&&Promise.resolve(t)===t,Dn=()=>document.body.querySelector(`.${ae.container}`),Aa=t=>{const e=Dn();return e?e.querySelector(t):null},Qn=t=>Aa(`.${t}`),Et=()=>Qn(ae.popup),Eo=()=>Qn(ae.icon),Iy=()=>Qn(ae["icon-content"]),kg=()=>Qn(ae.title),Zd=()=>Qn(ae["html-container"]),Bg=()=>Qn(ae.image),Qd=()=>Qn(ae["progress-steps"]),uc=()=>Qn(ae["validation-message"]),Oi=()=>Aa(`.${ae.actions} .${ae.confirm}`),To=()=>Aa(`.${ae.actions} .${ae.cancel}`),wr=()=>Aa(`.${ae.actions} .${ae.deny}`),Uy=()=>Qn(ae["input-label"]),Ao=()=>Aa(`.${ae.loader}`),Ca=()=>Qn(ae.actions),Hg=()=>Qn(ae.footer),dc=()=>Qn(ae["timer-progress-bar"]),Jd=()=>Qn(ae.close),Ny=`
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
`,ef=()=>{const t=Et();if(!t)return[];const e=t.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),n=Array.from(e).sort((r,o)=>{const a=parseInt(r.getAttribute("tabindex")||"0"),l=parseInt(o.getAttribute("tabindex")||"0");return a>l?1:a<l?-1:0}),i=t.querySelectorAll(Ny),s=Array.from(i).filter(r=>r.getAttribute("tabindex")!=="-1");return[...new Set(n.concat(s))].filter(r=>Hn(r))},tf=()=>is(document.body,ae.shown)&&!is(document.body,ae["toast-shown"])&&!is(document.body,ae["no-backdrop"]),fc=()=>{const t=Et();return t?is(t,ae.toast):!1},Oy=()=>{const t=Et();return t?t.hasAttribute("data-loading"):!1},Jn=(t,e)=>{if(t.textContent="",e){const i=new DOMParser().parseFromString(e,"text/html"),s=i.querySelector("head");s&&Array.from(s.childNodes).forEach(o=>{t.appendChild(o)});const r=i.querySelector("body");r&&Array.from(r.childNodes).forEach(o=>{o instanceof HTMLVideoElement||o instanceof HTMLAudioElement?t.appendChild(o.cloneNode(!0)):t.appendChild(o)})}},is=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let i=0;i<n.length;i++)if(!t.classList.contains(n[i]))return!1;return!0},Fy=(t,e)=>{Array.from(t.classList).forEach(n=>{!Object.values(ae).includes(n)&&!Object.values(kl).includes(n)&&!Object.values(e.showClass||{}).includes(n)&&t.classList.remove(n)})},Zn=(t,e,n)=>{if(Fy(t,e),!e.customClass)return;const i=e.customClass[n];if(i){if(typeof i!="string"&&!i.forEach){Pn(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof i}"`);return}At(t,i)}},hc=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${ae.popup} > .${ae[e]}`);case"checkbox":return t.querySelector(`.${ae.popup} > .${ae.checkbox} input`);case"radio":return t.querySelector(`.${ae.popup} > .${ae.radio} input:checked`)||t.querySelector(`.${ae.popup} > .${ae.radio} input:first-child`);case"range":return t.querySelector(`.${ae.popup} > .${ae.range} input`);default:return t.querySelector(`.${ae.popup} > .${ae.input}`)}},zg=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},Vg=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(i=>{Array.isArray(t)?t.forEach(s=>{n?s.classList.add(i):s.classList.remove(i)}):n?t.classList.add(i):t.classList.remove(i)}))},At=(t,e)=>{Vg(t,e,!0)},ai=(t,e)=>{Vg(t,e,!1)},Rs=(t,e)=>{const n=Array.from(t.children);for(let i=0;i<n.length;i++){const s=n[i];if(s instanceof HTMLElement&&is(s,e))return s}},pr=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style.setProperty(e,typeof n=="number"?`${n}px`:n):t.style.removeProperty(e)},un=(t,e="flex")=>{t&&(t.style.display=e)},xn=t=>{t&&(t.style.display="none")},nf=(t,e="block")=>{t&&new MutationObserver(()=>{Ra(t,t.innerHTML,e)}).observe(t,{childList:!0,subtree:!0})},Uh=(t,e,n,i)=>{const s=t.querySelector(e);s&&s.style.setProperty(n,i)},Ra=(t,e,n="flex")=>{e?un(t,n):xn(t)},Hn=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),ky=()=>!Hn(Oi())&&!Hn(wr())&&!Hn(To()),Nu=t=>t.scrollHeight>t.clientHeight,By=(t,e)=>{let n=t;for(;n&&n!==e;){if(Nu(n))return!0;n=n.parentElement}return!1},Gg=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),i=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||i>0},sf=(t,e=!1)=>{const n=dc();n&&Hn(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},Hy=()=>{const t=dc();if(!t)return;const e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),i=e/n*100;t.style.width=`${i}%`},zy=()=>typeof window>"u"||typeof document>"u",Vy=`
 <div aria-labelledby="${ae.title}" aria-describedby="${ae["html-container"]}" class="${ae.popup}" tabindex="-1">
   <button type="button" class="${ae.close}"></button>
   <ul class="${ae["progress-steps"]}"></ul>
   <div class="${ae.icon}"></div>
   <img class="${ae.image}" />
   <h2 class="${ae.title}" id="${ae.title}"></h2>
   <div class="${ae["html-container"]}" id="${ae["html-container"]}"></div>
   <input class="${ae.input}" id="${ae.input}" />
   <input type="file" class="${ae.file}" />
   <div class="${ae.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${ae.select}" id="${ae.select}"></select>
   <div class="${ae.radio}"></div>
   <label class="${ae.checkbox}">
     <input type="checkbox" id="${ae.checkbox}" />
     <span class="${ae.label}"></span>
   </label>
   <textarea class="${ae.textarea}" id="${ae.textarea}"></textarea>
   <div class="${ae["validation-message"]}" id="${ae["validation-message"]}"></div>
   <div class="${ae.actions}">
     <div class="${ae.loader}"></div>
     <button type="button" class="${ae.confirm}"></button>
     <button type="button" class="${ae.deny}"></button>
     <button type="button" class="${ae.cancel}"></button>
   </div>
   <div class="${ae.footer}"></div>
   <div class="${ae["timer-progress-bar-container"]}">
     <div class="${ae["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),Gy=()=>{const t=Dn();return t?(t.remove(),ai([document.documentElement,document.body],[ae["no-backdrop"],ae["toast-shown"],ae["has-column"]]),!0):!1},js=()=>{Ze.currentInstance.resetValidationMessage()},Wy=()=>{const t=Et(),e=Rs(t,ae.input),n=Rs(t,ae.file),i=t.querySelector(`.${ae.range} input`),s=t.querySelector(`.${ae.range} output`),r=Rs(t,ae.select),o=t.querySelector(`.${ae.checkbox} input`),a=Rs(t,ae.textarea);e.oninput=js,n.onchange=js,r.onchange=js,o.onchange=js,a.oninput=js,i.oninput=()=>{js(),s.value=i.value},i.onchange=()=>{js(),s.value=i.value}},$y=t=>typeof t=="string"?document.querySelector(t):t,Xy=t=>{const e=Et();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},jy=t=>{window.getComputedStyle(t).direction==="rtl"&&At(Dn(),ae.rtl)},qy=t=>{const e=Gy();if(zy()){yr("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=ae.container,e&&At(n,ae["no-transition"]),Jn(n,Vy),n.dataset.swal2Theme=t.theme;const i=$y(t.target);i.appendChild(n),t.topLayer&&(n.setAttribute("popover",""),n.showPopover()),Xy(t),jy(i),Wy()},rf=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?Yy(t,e):t&&Jn(e,t)},Yy=(t,e)=>{t.jquery?Ky(e,t):Jn(e,t.toString())},Ky=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},Zy=(t,e)=>{const n=Ca(),i=Ao();!n||!i||(!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?xn(n):un(n),Zn(n,e,"actions"),Qy(n,i,e),Jn(i,e.loaderHtml||""),Zn(i,e,"loader"))};function Qy(t,e,n){const i=Oi(),s=wr(),r=To();!i||!s||!r||(Oc(i,"confirm",n),Oc(s,"deny",n),Oc(r,"cancel",n),Jy(i,s,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,i),t.insertBefore(s,i)):(t.insertBefore(r,e),t.insertBefore(s,e),t.insertBefore(i,e))))}function Jy(t,e,n,i){if(!i.buttonsStyling){ai([t,e,n],ae.styled);return}At([t,e,n],ae.styled),i.confirmButtonColor&&t.style.setProperty("--swal2-confirm-button-background-color",i.confirmButtonColor),i.denyButtonColor&&e.style.setProperty("--swal2-deny-button-background-color",i.denyButtonColor),i.cancelButtonColor&&n.style.setProperty("--swal2-cancel-button-background-color",i.cancelButtonColor),Nc(t),Nc(e),Nc(n)}function Nc(t){const e=window.getComputedStyle(t);if(e.getPropertyValue("--swal2-action-button-focus-box-shadow"))return;const n=e.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/,"rgba($1, $2, $3, 0.5)");t.style.setProperty("--swal2-action-button-focus-box-shadow",e.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/,` ${n}`))}function Oc(t,e,n){const i=qd(e);Ra(t,n[`show${i}Button`],"inline-block"),Jn(t,n[`${e}ButtonText`]||""),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]||""),t.className=ae[e],Zn(t,n,`${e}Button`)}const ew=(t,e)=>{const n=Jd();n&&(Jn(n,e.closeButtonHtml||""),Zn(n,e,"closeButton"),Ra(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel||""))},tw=(t,e)=>{const n=Dn();n&&(nw(n,e.backdrop),iw(n,e.position),sw(n,e.grow),Zn(n,e,"container"))};function nw(t,e){typeof e=="string"?t.style.background=e:e||At([document.documentElement,document.body],ae["no-backdrop"])}function iw(t,e){e&&(e in ae?At(t,ae[e]):(Pn('The "position" parameter is not valid, defaulting to "center"'),At(t,ae.center)))}function sw(t,e){e&&At(t,ae[`grow-${e}`])}var kt={innerParams:new WeakMap,domCache:new WeakMap};const rw=["input","file","range","select","radio","checkbox","textarea"],ow=(t,e)=>{const n=Et();if(!n)return;const i=kt.innerParams.get(t),s=!i||e.input!==i.input;rw.forEach(r=>{const o=Rs(n,ae[r]);o&&(cw(r,e.inputAttributes),o.className=ae[r],s&&xn(o))}),e.input&&(s&&aw(e),uw(e))},aw=t=>{if(!t.input)return;if(!Kt[t.input]){yr(`Unexpected type of input! Expected ${Object.keys(Kt).join(" | ")}, got "${t.input}"`);return}const e=Wg(t.input);if(!e)return;const n=Kt[t.input](e,t);un(e),t.inputAutoFocus&&setTimeout(()=>{zg(n)})},lw=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["id","type","value","style"].includes(n)||t.removeAttribute(n)}},cw=(t,e)=>{const n=Et();if(!n)return;const i=hc(n,t);if(i){lw(i);for(const s in e)i.setAttribute(s,e[s])}},uw=t=>{if(!t.input)return;const e=Wg(t.input);e&&Zn(e,t,"input")},of=(t,e)=>{!t.placeholder&&e.inputPlaceholder&&(t.placeholder=e.inputPlaceholder)},Pa=(t,e,n)=>{if(n.inputLabel){const i=document.createElement("label"),s=ae["input-label"];i.setAttribute("for",t.id),i.className=s,typeof n.customClass=="object"&&At(i,n.customClass.inputLabel),i.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",i)}},Wg=t=>{const e=Et();if(e)return Rs(e,ae[t]||ae.input)},Bl=(t,e)=>{["string","number"].includes(typeof e)?t.value=`${e}`:Kd(e)||Pn(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e}"`)},Kt={};Kt.text=Kt.email=Kt.password=Kt.number=Kt.tel=Kt.url=Kt.search=Kt.date=Kt["datetime-local"]=Kt.time=Kt.week=Kt.month=(t,e)=>(Bl(t,e.inputValue),Pa(t,t,e),of(t,e),t.type=e.input,t);Kt.file=(t,e)=>(Pa(t,t,e),of(t,e),t);Kt.range=(t,e)=>{const n=t.querySelector("input"),i=t.querySelector("output");return Bl(n,e.inputValue),n.type=e.input,Bl(i,e.inputValue),Pa(n,t,e),t};Kt.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");Jn(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return Pa(t,t,e),t};Kt.radio=t=>(t.textContent="",t);Kt.checkbox=(t,e)=>{const n=hc(Et(),"checkbox");n.value="1",n.checked=!!e.inputValue;const i=t.querySelector("span");return Jn(i,e.inputPlaceholder||e.inputLabel),n};Kt.textarea=(t,e)=>{Bl(t,e.inputValue),of(t,e),Pa(t,t,e);const n=i=>parseInt(window.getComputedStyle(i).marginLeft)+parseInt(window.getComputedStyle(i).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const i=parseInt(window.getComputedStyle(Et()).width),s=()=>{if(!document.body.contains(t))return;const r=t.offsetWidth+n(t);r>i?Et().style.width=`${r}px`:pr(Et(),"width",e.width)};new MutationObserver(s).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const dw=(t,e)=>{const n=Zd();n&&(nf(n),Zn(n,e,"htmlContainer"),e.html?(rf(e.html,n),un(n,"block")):e.text?(n.textContent=e.text,un(n,"block")):xn(n),ow(t,e))},fw=(t,e)=>{const n=Hg();n&&(nf(n),Ra(n,e.footer,"block"),e.footer&&rf(e.footer,n),Zn(n,e,"footer"))},hw=(t,e)=>{const n=kt.innerParams.get(t),i=Eo();if(!i)return;if(n&&e.icon===n.icon){Oh(i,e),Nh(i,e);return}if(!e.icon&&!e.iconHtml){xn(i);return}if(e.icon&&Object.keys(kl).indexOf(e.icon)===-1){yr(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),xn(i);return}un(i),Oh(i,e),Nh(i,e),At(i,e.showClass&&e.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",$g)},Nh=(t,e)=>{for(const[n,i]of Object.entries(kl))e.icon!==n&&ai(t,i);At(t,e.icon&&kl[e.icon]),gw(t,e),$g(),Zn(t,e,"icon")},$g=()=>{const t=Et();if(!t)return;const e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let i=0;i<n.length;i++)n[i].style.backgroundColor=e},pw=t=>`
  ${t.animation?'<div class="swal2-success-circular-line-left"></div>':""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${t.animation?'<div class="swal2-success-fix"></div>':""}
  ${t.animation?'<div class="swal2-success-circular-line-right"></div>':""}
`,mw=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Oh=(t,e)=>{if(!e.icon&&!e.iconHtml)return;let n=t.innerHTML,i="";e.iconHtml?i=Fh(e.iconHtml):e.icon==="success"?(i=pw(e),n=n.replace(/ style=".*?"/g,"")):e.icon==="error"?i=mw:e.icon&&(i=Fh({question:"?",warning:"!",info:"i"}[e.icon])),n.trim()!==i.trim()&&Jn(t,i)},gw=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Uh(t,n,"background-color",e.iconColor);Uh(t,".swal2-success-ring","border-color",e.iconColor)}},Fh=t=>`<div class="${ae["icon-content"]}">${t}</div>`,vw=(t,e)=>{const n=Bg();if(n){if(!e.imageUrl){xn(n);return}un(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt||""),pr(n,"width",e.imageWidth),pr(n,"height",e.imageHeight),n.className=ae.image,Zn(n,e,"image")}};let af=!1,Xg=0,jg=0,qg=0,Yg=0;const _w=t=>{t.addEventListener("mousedown",Hl),document.body.addEventListener("mousemove",zl),t.addEventListener("mouseup",Vl),t.addEventListener("touchstart",Hl),document.body.addEventListener("touchmove",zl),t.addEventListener("touchend",Vl)},bw=t=>{t.removeEventListener("mousedown",Hl),document.body.removeEventListener("mousemove",zl),t.removeEventListener("mouseup",Vl),t.removeEventListener("touchstart",Hl),document.body.removeEventListener("touchmove",zl),t.removeEventListener("touchend",Vl)},Hl=t=>{const e=Et();if(t.target===e||Eo().contains(t.target)){af=!0;const n=Kg(t);Xg=n.clientX,jg=n.clientY,qg=parseInt(e.style.insetInlineStart)||0,Yg=parseInt(e.style.insetBlockStart)||0,At(e,"swal2-dragging")}},zl=t=>{const e=Et();if(af){let{clientX:n,clientY:i}=Kg(t);e.style.insetInlineStart=`${qg+(n-Xg)}px`,e.style.insetBlockStart=`${Yg+(i-jg)}px`}},Vl=()=>{const t=Et();af=!1,ai(t,"swal2-dragging")},Kg=t=>{let e=0,n=0;return t.type.startsWith("mouse")?(e=t.clientX,n=t.clientY):t.type.startsWith("touch")&&(e=t.touches[0].clientX,n=t.touches[0].clientY),{clientX:e,clientY:n}},xw=(t,e)=>{const n=Dn(),i=Et();if(!(!n||!i)){if(e.toast){pr(n,"width",e.width),i.style.width="100%";const s=Ao();s&&i.insertBefore(s,Eo())}else pr(i,"width",e.width);pr(i,"padding",e.padding),e.color&&(i.style.color=e.color),e.background&&(i.style.background=e.background),xn(uc()),yw(i,e),e.draggable&&!e.toast?(At(i,ae.draggable),_w(i)):(ai(i,ae.draggable),bw(i))}},yw=(t,e)=>{const n=e.showClass||{};t.className=`${ae.popup} ${Hn(t)?n.popup:""}`,e.toast?(At([document.documentElement,document.body],ae["toast-shown"]),At(t,ae.toast)):At(t,ae.modal),Zn(t,e,"popup"),typeof e.customClass=="string"&&At(t,e.customClass),e.icon&&At(t,ae[`icon-${e.icon}`])},ww=(t,e)=>{const n=Qd();if(!n)return;const{progressSteps:i,currentProgressStep:s}=e;if(!i||i.length===0||s===void 0){xn(n);return}un(n),n.textContent="",s>=i.length&&Pn("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),i.forEach((r,o)=>{const a=Sw(r);if(n.appendChild(a),o===s&&At(a,ae["active-progress-step"]),o!==i.length-1){const l=Mw(e);n.appendChild(l)}})},Sw=t=>{const e=document.createElement("li");return At(e,ae["progress-step"]),Jn(e,t),e},Mw=t=>{const e=document.createElement("li");return At(e,ae["progress-step-line"]),t.progressStepsDistance&&pr(e,"width",t.progressStepsDistance),e},Ew=(t,e)=>{const n=kg();n&&(nf(n),Ra(n,e.title||e.titleText,"block"),e.title&&rf(e.title,n),e.titleText&&(n.innerText=e.titleText),Zn(n,e,"title"))},Zg=(t,e)=>{xw(t,e),tw(t,e),ww(t,e),hw(t,e),vw(t,e),Ew(t,e),ew(t,e),dw(t,e),Zy(t,e),fw(t,e);const n=Et();typeof e.didRender=="function"&&n&&e.didRender(n),Ze.eventEmitter.emit("didRender",n)},Tw=()=>Hn(Et()),Qg=()=>{var t;return(t=Oi())===null||t===void 0?void 0:t.click()},Aw=()=>{var t;return(t=wr())===null||t===void 0?void 0:t.click()},Cw=()=>{var t;return(t=To())===null||t===void 0?void 0:t.click()},Co=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Jg=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},Rw=(t,e,n)=>{Jg(t),e.toast||(t.keydownHandler=i=>Dw(e,i,n),t.keydownTarget=e.keydownListenerCapture?window:Et(),t.keydownListenerCapture=e.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)},Ou=(t,e)=>{var n;const i=ef();if(i.length){t=t+e,t===-2&&(t=i.length-1),t===i.length?t=0:t===-1&&(t=i.length-1),i[t].focus();return}(n=Et())===null||n===void 0||n.focus()},ev=["ArrowRight","ArrowDown"],Pw=["ArrowLeft","ArrowUp"],Dw=(t,e,n)=>{t&&(e.isComposing||e.keyCode===229||(t.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?Lw(e,t):e.key==="Tab"?Iw(e):[...ev,...Pw].includes(e.key)?Uw(e.key):e.key==="Escape"&&Nw(e,t,n)))},Lw=(t,e)=>{if(!cc(e.allowEnterKey))return;const n=hc(Et(),e.input);if(t.target&&n&&t.target instanceof HTMLElement&&t.target.outerHTML===n.outerHTML){if(["textarea","file"].includes(e.input))return;Qg(),t.preventDefault()}},Iw=t=>{const e=t.target,n=ef();let i=-1;for(let s=0;s<n.length;s++)if(e===n[s]){i=s;break}t.shiftKey?Ou(i,-1):Ou(i,1),t.stopPropagation(),t.preventDefault()},Uw=t=>{const e=Ca(),n=Oi(),i=wr(),s=To();if(!e||!n||!i||!s)return;const r=[n,i,s];if(document.activeElement instanceof HTMLElement&&!r.includes(document.activeElement))return;const o=ev.includes(t)?"nextElementSibling":"previousElementSibling";let a=document.activeElement;if(a){for(let l=0;l<e.children.length;l++){if(a=a[o],!a)return;if(a instanceof HTMLButtonElement&&Hn(a))break}a instanceof HTMLButtonElement&&a.focus()}},Nw=(t,e,n)=>{t.preventDefault(),cc(e.allowEscapeKey)&&n(Co.esc)};var go={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const Ow=()=>{const t=Dn();Array.from(document.body.children).forEach(n=>{n.contains(t)||(n.hasAttribute("aria-hidden")&&n.setAttribute("data-previous-aria-hidden",n.getAttribute("aria-hidden")||""),n.setAttribute("aria-hidden","true"))})},tv=()=>{Array.from(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||""),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},nv=typeof window<"u"&&!!window.GestureEvent,Fw=()=>{if(nv&&!is(document.body,ae.iosfix)){const t=document.body.scrollTop;document.body.style.top=`${t*-1}px`,At(document.body,ae.iosfix),kw()}},kw=()=>{const t=Dn();if(!t)return;let e;t.ontouchstart=n=>{e=Bw(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},Bw=t=>{const e=t.target,n=Dn(),i=Zd();return!n||!i||Hw(t)||zw(t)?!1:e===n||!Nu(n)&&e instanceof HTMLElement&&!By(e,i)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(Nu(i)&&i.contains(e))},Hw=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",zw=t=>t.touches&&t.touches.length>1,Vw=()=>{if(is(document.body,ae.iosfix)){const t=parseInt(document.body.style.top,10);ai(document.body,ae.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},Gw=()=>{const t=document.createElement("div");t.className=ae["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e};let Zr=null;const Ww=t=>{Zr===null&&(document.body.scrollHeight>window.innerHeight||t==="scroll")&&(Zr=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Zr+Gw()}px`)},$w=()=>{Zr!==null&&(document.body.style.paddingRight=`${Zr}px`,Zr=null)};function iv(t,e,n,i){fc()?kh(t,i):(Ry(n).then(()=>kh(t,i)),Jg(Ze)),nv?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),tf()&&($w(),Vw(),tv()),Xw()}function Xw(){ai([document.documentElement,document.body],[ae.shown,ae["height-auto"],ae["no-backdrop"],ae["toast-shown"]])}function Ps(t){t=qw(t);const e=go.swalPromiseResolve.get(this),n=jw(this);this.isAwaitingPromise?t.isDismissed||(Da(this),e(t)):n&&e(t)}const jw=t=>{const e=Et();if(!e)return!1;const n=kt.innerParams.get(t);if(!n||is(e,n.hideClass.popup))return!1;ai(e,n.showClass.popup),At(e,n.hideClass.popup);const i=Dn();return ai(i,n.showClass.backdrop),At(i,n.hideClass.backdrop),Yw(t,e,n),!0};function sv(t){const e=go.swalPromiseReject.get(this);Da(this),e&&e(t)}const Da=t=>{t.isAwaitingPromise&&(delete t.isAwaitingPromise,kt.innerParams.get(t)||t._destroy())},qw=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),Yw=(t,e,n)=>{var i;const s=Dn(),r=Gg(e);typeof n.willClose=="function"&&n.willClose(e),(i=Ze.eventEmitter)===null||i===void 0||i.emit("willClose",e),r?Kw(t,e,s,n.returnFocus,n.didClose):iv(t,s,n.returnFocus,n.didClose)},Kw=(t,e,n,i,s)=>{Ze.swalCloseEventFinishedCallback=iv.bind(null,t,n,i,s);const r=function(o){if(o.target===e){var a;(a=Ze.swalCloseEventFinishedCallback)===null||a===void 0||a.call(Ze),delete Ze.swalCloseEventFinishedCallback,e.removeEventListener("animationend",r),e.removeEventListener("transitionend",r)}};e.addEventListener("animationend",r),e.addEventListener("transitionend",r)},kh=(t,e)=>{setTimeout(()=>{var n;typeof e=="function"&&e.bind(t.params)(),(n=Ze.eventEmitter)===null||n===void 0||n.emit("didClose"),t._destroy&&t._destroy()})},vo=t=>{let e=Et();if(e||new Vn,e=Et(),!e)return;const n=Ao();fc()?xn(Eo()):Zw(e,t),un(n),e.setAttribute("data-loading","true"),e.setAttribute("aria-busy","true"),e.focus()},Zw=(t,e)=>{const n=Ca(),i=Ao();!n||!i||(!e&&Hn(Oi())&&(e=Oi()),un(n),e&&(xn(e),i.setAttribute("data-button-to-replace",e.className),n.insertBefore(i,e)),At([t,n],ae.loading))},Qw=(t,e)=>{e.input==="select"||e.input==="radio"?iS(t,e):["text","email","number","tel","textarea"].some(n=>n===e.input)&&(Yd(e.inputValue)||Kd(e.inputValue))&&(vo(Oi()),sS(t,e))},Jw=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return eS(n);case"radio":return tS(n);case"file":return nS(n);default:return e.inputAutoTrim?n.value.trim():n.value}},eS=t=>t.checked?1:0,tS=t=>t.checked?t.value:null,nS=t=>t.files&&t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,iS=(t,e)=>{const n=Et();if(!n)return;const i=s=>{e.input==="select"?rS(n,Gl(s),e):e.input==="radio"&&oS(n,Gl(s),e)};Yd(e.inputOptions)||Kd(e.inputOptions)?(vo(Oi()),Ta(e.inputOptions).then(s=>{t.hideLoading(),i(s)})):typeof e.inputOptions=="object"?i(e.inputOptions):yr(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},sS=(t,e)=>{const n=t.getInput();n&&(xn(n),Ta(e.inputValue).then(i=>{n.value=e.input==="number"?`${parseFloat(i)||0}`:`${i}`,un(n),n.focus(),t.hideLoading()}).catch(i=>{yr(`Error in inputValue promise: ${i}`),n.value="",un(n),n.focus(),t.hideLoading()}))};function rS(t,e,n){const i=Rs(t,ae.select);if(!i)return;const s=(r,o,a)=>{const l=document.createElement("option");l.value=a,Jn(l,o),l.selected=rv(a,n.inputValue),r.appendChild(l)};e.forEach(r=>{const o=r[0],a=r[1];if(Array.isArray(a)){const l=document.createElement("optgroup");l.label=o,l.disabled=!1,i.appendChild(l),a.forEach(c=>s(l,c[1],c[0]))}else s(i,a,o)}),i.focus()}function oS(t,e,n){const i=Rs(t,ae.radio);if(!i)return;e.forEach(r=>{const o=r[0],a=r[1],l=document.createElement("input"),c=document.createElement("label");l.type="radio",l.name=ae.radio,l.value=o,rv(o,n.inputValue)&&(l.checked=!0);const u=document.createElement("span");Jn(u,a),u.className=ae.label,c.appendChild(l),c.appendChild(u),i.appendChild(c)});const s=i.querySelectorAll("input");s.length&&s[0].focus()}const Gl=t=>{const e=[];return t instanceof Map?t.forEach((n,i)=>{let s=n;typeof s=="object"&&(s=Gl(s)),e.push([i,s])}):Object.keys(t).forEach(n=>{let i=t[n];typeof i=="object"&&(i=Gl(i)),e.push([n,i])}),e},rv=(t,e)=>!!e&&e.toString()===t.toString(),aS=t=>{const e=kt.innerParams.get(t);t.disableButtons(),e.input?ov(t,"confirm"):cf(t,!0)},lS=t=>{const e=kt.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?ov(t,"deny"):lf(t,!1)},cS=(t,e)=>{t.disableButtons(),e(Co.cancel)},ov=(t,e)=>{const n=kt.innerParams.get(t);if(!n.input){yr(`The "input" parameter is needed to be set when using returnInputValueOn${qd(e)}`);return}const i=t.getInput(),s=Jw(t,n);n.inputValidator?uS(t,s,e):i&&!i.checkValidity()?(t.enableButtons(),t.showValidationMessage(n.validationMessage||i.validationMessage)):e==="deny"?lf(t,s):cf(t,s)},uS=(t,e,n)=>{const i=kt.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>Ta(i.inputValidator(e,i.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):n==="deny"?lf(t,e):cf(t,e)})},lf=(t,e)=>{const n=kt.innerParams.get(t||void 0);n.showLoaderOnDeny&&vo(wr()),n.preDeny?(t.isAwaitingPromise=!0,Promise.resolve().then(()=>Ta(n.preDeny(e,n.validationMessage))).then(s=>{s===!1?(t.hideLoading(),Da(t)):t.close({isDenied:!0,value:typeof s>"u"?e:s})}).catch(s=>av(t||void 0,s))):t.close({isDenied:!0,value:e})},Bh=(t,e)=>{t.close({isConfirmed:!0,value:e})},av=(t,e)=>{t.rejectPromise(e)},cf=(t,e)=>{const n=kt.innerParams.get(t||void 0);n.showLoaderOnConfirm&&vo(),n.preConfirm?(t.resetValidationMessage(),t.isAwaitingPromise=!0,Promise.resolve().then(()=>Ta(n.preConfirm(e,n.validationMessage))).then(s=>{Hn(uc())||s===!1?(t.hideLoading(),Da(t)):Bh(t,typeof s>"u"?e:s)}).catch(s=>av(t||void 0,s))):Bh(t,e)};function Wl(){const t=kt.innerParams.get(this);if(!t)return;const e=kt.domCache.get(this);xn(e.loader),fc()?t.icon&&un(Eo()):dS(e),ai([e.popup,e.actions],ae.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const dS=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?un(e[0],"inline-block"):ky()&&xn(t.actions)};function lv(){const t=kt.innerParams.get(this),e=kt.domCache.get(this);return e?hc(e.popup,t.input):null}function cv(t,e,n){const i=kt.domCache.get(t);e.forEach(s=>{i[s].disabled=n})}function uv(t,e){const n=Et();if(!(!n||!t))if(t.type==="radio"){const i=n.querySelectorAll(`[name="${ae.radio}"]`);for(let s=0;s<i.length;s++)i[s].disabled=e}else t.disabled=e}function dv(){cv(this,["confirmButton","denyButton","cancelButton"],!1)}function fv(){cv(this,["confirmButton","denyButton","cancelButton"],!0)}function hv(){uv(this.getInput(),!1)}function pv(){uv(this.getInput(),!0)}function mv(t){const e=kt.domCache.get(this),n=kt.innerParams.get(this);Jn(e.validationMessage,t),e.validationMessage.className=ae["validation-message"],n.customClass&&n.customClass.validationMessage&&At(e.validationMessage,n.customClass.validationMessage),un(e.validationMessage);const i=this.getInput();i&&(i.setAttribute("aria-invalid","true"),i.setAttribute("aria-describedby",ae["validation-message"]),zg(i),At(i,ae.inputerror))}function gv(){const t=kt.domCache.get(this);t.validationMessage&&xn(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),ai(e,ae.inputerror))}const Qr={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0,topLayer:!1},fS=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],hS={allowEnterKey:void 0},pS=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],vv=t=>Object.prototype.hasOwnProperty.call(Qr,t),_v=t=>fS.indexOf(t)!==-1,bv=t=>hS[t],mS=t=>{vv(t)||Pn(`Unknown parameter "${t}"`)},gS=t=>{pS.includes(t)&&Pn(`The parameter "${t}" is incompatible with toasts`)},vS=t=>{const e=bv(t);e&&Fg(t,e)},xv=t=>{t.backdrop===!1&&t.allowOutsideClick&&Pn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),t.theme&&!["light","dark","auto","minimal","borderless","embed-iframe","bulma","bulma-light","bulma-dark"].includes(t.theme)&&Pn(`Invalid theme "${t.theme}"`);for(const e in t)mS(e),t.toast&&gS(e),vS(e)};function yv(t){const e=Dn(),n=Et(),i=kt.innerParams.get(this);if(!n||is(n,i.hideClass.popup)){Pn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const s=_S(t),r=Object.assign({},i,s);xv(r),e.dataset.swal2Theme=r.theme,Zg(this,r),kt.innerParams.set(this,r),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const _S=t=>{const e={};return Object.keys(t).forEach(n=>{_v(n)?e[n]=t[n]:Pn(`Invalid parameter to update: ${n}`)}),e};function wv(){const t=kt.domCache.get(this),e=kt.innerParams.get(this);if(!e){Sv(this);return}t.popup&&Ze.swalCloseEventFinishedCallback&&(Ze.swalCloseEventFinishedCallback(),delete Ze.swalCloseEventFinishedCallback),typeof e.didDestroy=="function"&&e.didDestroy(),Ze.eventEmitter.emit("didDestroy"),bS(this)}const bS=t=>{Sv(t),delete t.params,delete Ze.keydownHandler,delete Ze.keydownTarget,delete Ze.currentInstance},Sv=t=>{t.isAwaitingPromise?(Fc(kt,t),t.isAwaitingPromise=!0):(Fc(go,t),Fc(kt,t),delete t.isAwaitingPromise,delete t.disableButtons,delete t.enableButtons,delete t.getInput,delete t.disableInput,delete t.enableInput,delete t.hideLoading,delete t.disableLoading,delete t.showValidationMessage,delete t.resetValidationMessage,delete t.close,delete t.closePopup,delete t.closeModal,delete t.closeToast,delete t.rejectPromise,delete t.update,delete t._destroy)},Fc=(t,e)=>{for(const n in t)t[n].delete(e)};var xS=Object.freeze({__proto__:null,_destroy:wv,close:Ps,closeModal:Ps,closePopup:Ps,closeToast:Ps,disableButtons:fv,disableInput:pv,disableLoading:Wl,enableButtons:dv,enableInput:hv,getInput:lv,handleAwaitingPromise:Da,hideLoading:Wl,rejectPromise:sv,resetValidationMessage:gv,showValidationMessage:mv,update:yv});const yS=(t,e,n)=>{t.toast?wS(t,e,n):(MS(e),ES(e),TS(t,e,n))},wS=(t,e,n)=>{e.popup.onclick=()=>{t&&(SS(t)||t.timer||t.input)||n(Co.close)}},SS=t=>!!(t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton);let $l=!1;const MS=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=()=>{},e.target===t.container&&($l=!0)}}},ES=t=>{t.container.onmousedown=e=>{e.target===t.container&&e.preventDefault(),t.popup.onmouseup=function(n){t.popup.onmouseup=()=>{},(n.target===t.popup||n.target instanceof HTMLElement&&t.popup.contains(n.target))&&($l=!0)}}},TS=(t,e,n)=>{e.container.onclick=i=>{if($l){$l=!1;return}i.target===e.container&&cc(t.allowOutsideClick)&&n(Co.backdrop)}},AS=t=>typeof t=="object"&&t.jquery,Hh=t=>t instanceof Element||AS(t),CS=t=>{const e={};return typeof t[0]=="object"&&!Hh(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,i)=>{const s=t[i];typeof s=="string"||Hh(s)?e[n]=s:s!==void 0&&yr(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof s}`)}),e};function RS(...t){return new this(...t)}function PS(t){class e extends this{_main(i,s){return super._main(i,Object.assign({},t,s))}}return e}const DS=()=>Ze.timeout&&Ze.timeout.getTimerLeft(),Mv=()=>{if(Ze.timeout)return Hy(),Ze.timeout.stop()},Ev=()=>{if(Ze.timeout){const t=Ze.timeout.start();return sf(t),t}},LS=()=>{const t=Ze.timeout;return t&&(t.running?Mv():Ev())},IS=t=>{if(Ze.timeout){const e=Ze.timeout.increase(t);return sf(e,!0),e}},US=()=>!!(Ze.timeout&&Ze.timeout.isRunning());let zh=!1;const Fu={};function NS(t="data-swal-template"){Fu[t]=this,zh||(document.body.addEventListener("click",OS),zh=!0)}const OS=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in Fu){const i=e.getAttribute(n);if(i){Fu[n].fire({template:i});return}}};class FS{constructor(){this.events={}}_getHandlersByEventName(e){return typeof this.events[e]>"u"&&(this.events[e]=[]),this.events[e]}on(e,n){const i=this._getHandlersByEventName(e);i.includes(n)||i.push(n)}once(e,n){const i=(...s)=>{this.removeListener(e,i),n.apply(this,s)};this.on(e,i)}emit(e,...n){this._getHandlersByEventName(e).forEach(i=>{try{i.apply(this,n)}catch(s){console.error(s)}})}removeListener(e,n){const i=this._getHandlersByEventName(e),s=i.indexOf(n);s>-1&&i.splice(s,1)}removeAllListeners(e){this.events[e]!==void 0&&(this.events[e].length=0)}reset(){this.events={}}}Ze.eventEmitter=new FS;const kS=(t,e)=>{Ze.eventEmitter.on(t,e)},BS=(t,e)=>{Ze.eventEmitter.once(t,e)},HS=(t,e)=>{if(!t){Ze.eventEmitter.reset();return}e?Ze.eventEmitter.removeListener(t,e):Ze.eventEmitter.removeAllListeners(t)};var zS=Object.freeze({__proto__:null,argsToParams:CS,bindClickHandler:NS,clickCancel:Cw,clickConfirm:Qg,clickDeny:Aw,enableLoading:vo,fire:RS,getActions:Ca,getCancelButton:To,getCloseButton:Jd,getConfirmButton:Oi,getContainer:Dn,getDenyButton:wr,getFocusableElements:ef,getFooter:Hg,getHtmlContainer:Zd,getIcon:Eo,getIconContent:Iy,getImage:Bg,getInputLabel:Uy,getLoader:Ao,getPopup:Et,getProgressSteps:Qd,getTimerLeft:DS,getTimerProgressBar:dc,getTitle:kg,getValidationMessage:uc,increaseTimer:IS,isDeprecatedParameter:bv,isLoading:Oy,isTimerRunning:US,isUpdatableParameter:_v,isValidParameter:vv,isVisible:Tw,mixin:PS,off:HS,on:kS,once:BS,resumeTimer:Ev,showLoading:vo,stopTimer:Mv,toggleTimer:LS});class VS{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Tv=["swal-title","swal-html","swal-footer"],GS=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return ZS(n),Object.assign(WS(n),$S(n),XS(n),jS(n),qS(n),YS(n),KS(n,Tv))},WS=t=>{const e={};return Array.from(t.querySelectorAll("swal-param")).forEach(i=>{gr(i,["name","value"]);const s=i.getAttribute("name"),r=i.getAttribute("value");!s||!r||(typeof Qr[s]=="boolean"?e[s]=r!=="false":typeof Qr[s]=="object"?e[s]=JSON.parse(r):e[s]=r)}),e},$S=t=>{const e={};return Array.from(t.querySelectorAll("swal-function-param")).forEach(i=>{const s=i.getAttribute("name"),r=i.getAttribute("value");!s||!r||(e[s]=new Function(`return ${r}`)())}),e},XS=t=>{const e={};return Array.from(t.querySelectorAll("swal-button")).forEach(i=>{gr(i,["type","color","aria-label"]);const s=i.getAttribute("type");!s||!["confirm","cancel","deny"].includes(s)||(e[`${s}ButtonText`]=i.innerHTML,e[`show${qd(s)}Button`]=!0,i.hasAttribute("color")&&(e[`${s}ButtonColor`]=i.getAttribute("color")),i.hasAttribute("aria-label")&&(e[`${s}ButtonAriaLabel`]=i.getAttribute("aria-label")))}),e},jS=t=>{const e={},n=t.querySelector("swal-image");return n&&(gr(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")||void 0),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")||void 0),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")||void 0),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt")||void 0)),e},qS=t=>{const e={},n=t.querySelector("swal-icon");return n&&(gr(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},YS=t=>{const e={},n=t.querySelector("swal-input");n&&(gr(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const i=Array.from(t.querySelectorAll("swal-input-option"));return i.length&&(e.inputOptions={},i.forEach(s=>{gr(s,["value"]);const r=s.getAttribute("value");if(!r)return;const o=s.innerHTML;e.inputOptions[r]=o})),e},KS=(t,e)=>{const n={};for(const i in e){const s=e[i],r=t.querySelector(s);r&&(gr(r,[]),n[s.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},ZS=t=>{const e=Tv.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(t.children).forEach(n=>{const i=n.tagName.toLowerCase();e.includes(i)||Pn(`Unrecognized element <${i}>`)})},gr=(t,e)=>{Array.from(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&Pn([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},Av=10,QS=t=>{const e=Dn(),n=Et();typeof t.willOpen=="function"&&t.willOpen(n),Ze.eventEmitter.emit("willOpen",n);const s=window.getComputedStyle(document.body).overflowY;tM(e,n,t),setTimeout(()=>{JS(e,n)},Av),tf()&&(eM(e,t.scrollbarPadding,s),Ow()),!fc()&&!Ze.previousActiveElement&&(Ze.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),Ze.eventEmitter.emit("didOpen",n),ai(e,ae["no-transition"])},Xl=t=>{const e=Et();if(t.target!==e)return;const n=Dn();e.removeEventListener("animationend",Xl),e.removeEventListener("transitionend",Xl),n.style.overflowY="auto"},JS=(t,e)=>{Gg(e)?(t.style.overflowY="hidden",e.addEventListener("animationend",Xl),e.addEventListener("transitionend",Xl)):t.style.overflowY="auto"},eM=(t,e,n)=>{Fw(),e&&n!=="hidden"&&Ww(n),setTimeout(()=>{t.scrollTop=0})},tM=(t,e,n)=>{At(t,n.showClass.backdrop),n.animation?(e.style.setProperty("opacity","0","important"),un(e,"grid"),setTimeout(()=>{At(e,n.showClass.popup),e.style.removeProperty("opacity")},Av)):un(e,"grid"),At([document.documentElement,document.body],ae.shown),n.heightAuto&&n.backdrop&&!n.toast&&At([document.documentElement,document.body],ae["height-auto"])};var Vh={email:(t,e)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function nM(t){t.inputValidator||(t.input==="email"&&(t.inputValidator=Vh.email),t.input==="url"&&(t.inputValidator=Vh.url))}function iM(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(Pn('Target parameter is not valid, defaulting to "body"'),t.target="body")}function sM(t){nM(t),t.showLoaderOnConfirm&&!t.preConfirm&&Pn(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),iM(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),qy(t)}let Mi;var $a=new WeakMap;class Qt{constructor(...e){if(Ey(this,$a,void 0),typeof window>"u")return;Mi=this;const n=Object.freeze(this.constructor.argsToParams(e));this.params=n,this.isAwaitingPromise=!1,Ty($a,this,this._main(Mi.params))}_main(e,n={}){if(xv(Object.assign({},n,e)),Ze.currentInstance){const r=go.swalPromiseResolve.get(Ze.currentInstance),{isAwaitingPromise:o}=Ze.currentInstance;Ze.currentInstance._destroy(),o||r({isDismissed:!0}),tf()&&tv()}Ze.currentInstance=Mi;const i=oM(e,n);sM(i),Object.freeze(i),Ze.timeout&&(Ze.timeout.stop(),delete Ze.timeout),clearTimeout(Ze.restoreFocusTimeout);const s=aM(Mi);return Zg(Mi,i),kt.innerParams.set(Mi,i),rM(Mi,s,i)}then(e){return Lh($a,this).then(e)}finally(e){return Lh($a,this).finally(e)}}const rM=(t,e,n)=>new Promise((i,s)=>{const r=o=>{t.close({isDismissed:!0,dismiss:o})};go.swalPromiseResolve.set(t,i),go.swalPromiseReject.set(t,s),e.confirmButton.onclick=()=>{aS(t)},e.denyButton.onclick=()=>{lS(t)},e.cancelButton.onclick=()=>{cS(t,r)},e.closeButton.onclick=()=>{r(Co.close)},yS(n,e,r),Rw(Ze,n,r),Qw(t,n),QS(n),lM(Ze,n,r),cM(e,n),setTimeout(()=>{e.container.scrollTop=0})}),oM=(t,e)=>{const n=GS(t),i=Object.assign({},Qr,e,n,t);return i.showClass=Object.assign({},Qr.showClass,i.showClass),i.hideClass=Object.assign({},Qr.hideClass,i.hideClass),i.animation===!1&&(i.showClass={backdrop:"swal2-noanimation"},i.hideClass={}),i},aM=t=>{const e={popup:Et(),container:Dn(),actions:Ca(),confirmButton:Oi(),denyButton:wr(),cancelButton:To(),loader:Ao(),closeButton:Jd(),validationMessage:uc(),progressSteps:Qd()};return kt.domCache.set(t,e),e},lM=(t,e,n)=>{const i=dc();xn(i),e.timer&&(t.timeout=new VS(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(un(i),Zn(i,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&sf(e.timer)})))},cM=(t,e)=>{if(!e.toast){if(!cc(e.allowEnterKey)){Fg("allowEnterKey"),fM();return}uM(t)||dM(t,e)||Ou(-1,1)}},uM=t=>{const e=Array.from(t.popup.querySelectorAll("[autofocus]"));for(const n of e)if(n instanceof HTMLElement&&Hn(n))return n.focus(),!0;return!1},dM=(t,e)=>e.focusDeny&&Hn(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&Hn(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&Hn(t.confirmButton)?(t.confirmButton.focus(),!0):!1,fM=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const t=new Date,e=localStorage.getItem("swal-initiation");e?(t.getTime()-Date.parse(e))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const n=document.createElement("audio");n.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",n.loop=!0,document.body.appendChild(n),setTimeout(()=>{n.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${t}`)}Qt.prototype.disableButtons=fv;Qt.prototype.enableButtons=dv;Qt.prototype.getInput=lv;Qt.prototype.disableInput=pv;Qt.prototype.enableInput=hv;Qt.prototype.hideLoading=Wl;Qt.prototype.disableLoading=Wl;Qt.prototype.showValidationMessage=mv;Qt.prototype.resetValidationMessage=gv;Qt.prototype.close=Ps;Qt.prototype.closePopup=Ps;Qt.prototype.closeModal=Ps;Qt.prototype.closeToast=Ps;Qt.prototype.rejectPromise=sv;Qt.prototype.update=yv;Qt.prototype._destroy=wv;Object.assign(Qt,zS);Object.keys(xS).forEach(t=>{Qt[t]=function(...e){return Mi&&Mi[t]?Mi[t](...e):null}});Qt.DismissReason=Co;Qt.version="11.22.3";const Vn=Qt;Vn.default=Vn;typeof document<"u"&&function(t,e){var n=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=e);else try{n.innerHTML=e}catch{n.innerText=e}}(document,':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.1s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px $swal2-outline-color;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');const wi=(t="Success!",e="Operation completed successfully")=>Vn.fire({icon:"success",title:t,text:e,confirmButtonText:"OK",confirmButtonColor:"#10b981"}),$t=(t="Error!",e="Something went wrong")=>Vn.fire({icon:"error",title:t,text:e,confirmButtonText:"OK",confirmButtonColor:"#ef4444"}),nU=(t="Warning!",e="Please check your input")=>Vn.fire({icon:"warning",title:t,text:e,confirmButtonText:"OK",confirmButtonColor:"#f59e0b"}),Fo=(t="Info",e="Here is some information")=>Vn.fire({icon:"info",title:t,text:e,confirmButtonText:"OK",confirmButtonColor:"#3b82f6"}),kc=(t="Are you sure?",e="This action cannot be undone")=>Vn.fire({title:t,text:e,icon:"question",showCancelButton:!0,confirmButtonColor:"#10b981",cancelButtonColor:"#6b7280",confirmButtonText:"بله، ادامه بده",cancelButtonText:"لغو"}),iU=t=>Vn.fire({confirmButtonColor:"#10b981",cancelButtonColor:"#6b7280",...t}),sU=(t="Enter value",e="Value",n="Type here...")=>Vn.fire({title:t,inputLabel:e,input:"text",inputPlaceholder:n,showCancelButton:!0,confirmButtonColor:"#10b981",cancelButtonColor:"#6b7280",confirmButtonText:"ثبت",cancelButtonText:"لغو",inputValidator:i=>{if(!i)return"You need to write something!"}}),rU=(t="Loading...")=>{Vn.fire({title:t,allowOutsideClick:!1,didOpen:()=>{Vn.showLoading()}})},oU=()=>{Vn.close()},aU=(t,e="success",n="top-end")=>{Vn.mixin({toast:!0,position:n,showConfirmButton:!1,timer:3e3,timerProgressBar:!0}).fire({icon:e,title:t})},hM={class:"editor-container overflow-auto"},pM={class:"mobile-control-bar"},mM={key:0,class:"pinned-section"},gM={class:"pinned-section-header"},vM={class:"pinned-section-title"},_M={class:"pinned-section-content"},bM={key:0,class:"pinned-dimensions"},xM={class:"dimension-inputs"},yM={class:"dimension-label"},wM={class:"dimension-label"},SM={class:"cell-size-section"},MM={class:"dimension-inputs"},EM={class:"dimension-label"},TM={class:"dimension-label"},AM={key:1,class:"pinned-direction"},CM={class:"direction-toggle"},RM={class:"direction-toggle"},PM={key:2,class:"pinned-color"},DM={class:"color-picker-container"},LM={class:"color-value"},IM={class:"recent-colors-header"},UM={class:"recent-colors-grid"},NM=["title","onClick"],OM=["onClick"],FM={key:3,class:"pinned-mode"},kM={class:"mode-toggle"},BM={key:4,class:"pinned-image"},HM={class:"image-picker-container"},zM={class:"available-images-grid"},VM=["onClick"],GM=["src","alt"],WM={class:"image-name"},$M={key:5,class:"pinned-tools"},XM={class:"tools-grid"},jM=["disabled"],qM=["disabled"],YM=["disabled"],KM={key:6,class:"pinned-export"},ZM={class:"grid grid-cols-2 gap-2"},QM={class:"mobile-panel-content"},JM={class:"mobile-image-section"},eE={class:"upload-section grid grid-cols-2 gap-2"},tE={class:"upload-label"},nE={class:"upload-label"},iE={key:0,class:"image-preview"},sE=["src"],rE={class:"mobile-controls-content"},oE={class:"controls-content"},aE={class:"dimensions-section"},lE={class:"section-header"},cE=["title"],uE={class:"dimension-inputs"},dE={class:"dimension-label"},fE={class:"dimension-label"},hE={class:"cell-size-section !mt-4"},pE={class:"dimension-inputs"},mE={class:"dimension-label"},gE={class:"dimension-label"},vE={class:"direction-section"},_E={class:"section-header"},bE=["title"],xE={class:"direction-toggle"},yE={class:"direction-toggle"},wE={class:"color-section"},SE={class:"section-header"},ME=["title"],EE={class:"color-picker-container"},TE={class:"color-value"},AE={class:"recent-colors-header mt-3!"},CE={class:"recent-colors-grid"},RE=["title","onClick"],PE=["onClick"],DE={class:"mode-section"},LE={class:"section-header"},IE=["title"],UE={class:"mode-toggle"},NE={key:0,class:"mode-section"},OE={class:"section-header"},FE=["title"],kE={class:"image-picker-container"},BE={class:"available-images-grid"},HE=["onClick"],zE=["src","alt"],VE={class:"image-name"},GE={key:0,class:"recent-images-section"},WE={class:"recent-images-grid"},$E=["onClick"],XE=["src","alt"],jE=["onClick"],qE={class:"tools-section"},YE={class:"section-header"},KE=["title"],ZE={class:"tools-grid"},QE=["disabled"],JE=["disabled"],eT=["disabled"],tT={class:"background-color-section !mt-4"},nT={class:"background-mode-toggle"},iT={key:0,class:"background-color-controls"},sT={key:1,class:"background-image-controls"},rT={class:"background-image-picker"},oT={class:"background-images-grid"},aT=["onClick"],lT=["src","alt"],cT={class:"background-image-name"},uT=["disabled"],dT={class:"export-section"},fT={class:"section-header"},hT=["title"],pT={class:"grid grid-cols-2 gap-2"},mT={class:"controls-panel"},gT={class:"controls-content"},vT={class:"dimensions-section"},_T={class:"dimension-inputs"},bT={class:"dimension-label"},xT={class:"dimension-label"},yT={class:"cell-size-section !mt-4"},wT={class:"dimension-inputs"},ST={class:"dimension-label"},MT={class:"dimension-label"},ET={class:"direction-section"},TT={class:"direction-toggle"},AT={class:"direction-toggle"},CT={class:"color-section"},RT={class:"color-picker-container"},PT={class:"color-value"},DT={class:"recent-colors-header mt-3!"},LT={class:"recent-colors-grid"},IT=["title","onClick"],UT=["onClick"],NT={class:"mode-section"},OT={class:"mode-toggle"},FT={key:0,class:"image-section"},kT={class:"image-picker-container"},BT={class:"available-images-grid"},HT=["onClick"],zT=["src","alt"],VT={class:"image-name"},GT={key:0,class:"recent-images-section"},WT={class:"recent-images-grid"},$T=["onClick"],XT=["src","alt"],jT=["onClick"],qT={class:"tools-section"},YT={class:"tools-grid"},KT=["disabled"],ZT=["disabled"],QT=["disabled"],JT={class:"background-color-section !mt-4"},eA={class:"background-mode-toggle"},tA={key:0,class:"background-color-controls"},nA={key:1,class:"background-image-controls"},iA={class:"background-image-picker"},sA={class:"background-images-grid"},rA=["onClick"],oA=["src","alt"],aA={class:"background-image-name"},lA=["disabled"],cA={class:"export-section"},uA={class:"grid grid-cols-2 gap-2"},dA={class:"image-section max-h-[70%]"},fA={class:"upload-section grid grid-cols-2 gap-2"},hA={class:"upload-label"},pA={class:"upload-label"},mA={key:0,class:"image-preview"},gA=["src"],vA=["onClick"],_A={__name:"GridEditor",emits:["update-grid"],setup(t,{emit:e}){const n=e,i=tt(16),s=tt(80),r=tt(15),o=tt(17),a=tt("#ff0000"),l=tt([]),c=tt(null),u=tt(()=>{try{const $=localStorage.getItem("gridEditor_isVertical");return console.log("saved",$),$!==null?JSON.parse($):!0}catch{return!0}}),d=tt(!0),f=tt(null),h=tt("color"),g=tt(null),v=tt([]),m=tt([]),p=tt(!1),C=tt(null);function E(){p.value=!p.value}function y($){C.value===$?C.value=null:(C.value=$,p.value=!1)}function U(){C.value=null}function I($){return{dimensions:"📐 ابعاد شبکه",direction:"🔄 جهت",color:"🎨 انتخاب رنگ",mode:"🎨 حالت طراحی",image:"🖼️ انتخاب تصویر مهره",tools:"🛠️ ابزارها",export:"📤 خروجی"}[$]||$}const R=tt([]);function k(){try{const $={grid:R.value,rows:i.value,cols:s.value,cellWidth:r.value,cellHeight:o.value,isVertical:u.value,isVerticalGrid:d.value,recentColors:l.value,recentImages:v.value,timestamp:new Date().toISOString()};localStorage.setItem("gridEditorData",JSON.stringify($)),c.value=$.timestamp,wi("ذخیره شد","گرید با موفقیت ذخیره شد")}catch($){$t("خطا در ذخیره","خطا در ذخیره گرید: "+$.message),console.error("Error saving grid:",$)}}function w(){try{const $=localStorage.getItem("gridEditorData");if($){const S=JSON.parse($);return S.grid&&Array.isArray(S.grid)&&S.rows&&S.cols&&S.grid.length===S.rows*S.cols?(i.value=S.rows,s.value=S.cols,R.value=[...S.grid],S.cellWidth&&typeof S.cellWidth=="number"&&(r.value=S.cellWidth),S.cellHeight&&typeof S.cellHeight=="number"&&(o.value=S.cellHeight),typeof S.isVertical=="boolean"&&(u.value=S.isVertical),typeof S.isVerticalGrid=="boolean"&&(d.value=S.isVerticalGrid),S.recentColors&&Array.isArray(S.recentColors)&&(l.value=[...S.recentColors]),S.recentImages&&Array.isArray(S.recentImages)&&(v.value=[...S.recentImages]),c.value=S.timestamp,Qe.stacks=[],Qe.index=-1,ie(),n("update-grid",he()),!0):(localStorage.removeItem("gridEditorData"),Fo("اطلاعات","داده‌های ذخیره شده نامعتبر بودند و حذف شدند"),!1)}return!1}catch($){return $t("خطا در بارگذاری","خطا در بارگذاری گرید: "+$.message),console.error("Error loading grid:",$),localStorage.removeItem("gridEditorData"),!1}}function M($){console.log("Key pressed:",$.key,"Ctrl:",$.ctrlKey),$.ctrlKey&&$.key==="z"&&($.preventDefault(),ye(),console.log("Undo triggered by Ctrl+Z"))}Hs(()=>{const $=w();if(u.value=localStorage.getItem("gridEditor_isVertical")!==null?JSON.parse(localStorage.getItem("gridEditor_isVertical")):!0,!$){const S=i.value*s.value;R.value=Array(S).fill("#ffffff"),ie()}L(),document.addEventListener("keydown",M)});function L(){const $=["310.jpg","1130.jpg","1135.jpg","2116.jpg","2131.jpg","2132.jpg","725.jpg","877.jpg","f111.jpg","f222.jpg","f333.jpg","f444.jpg","f555.jpg","f666.jpg","f777.jpg","f888.jpg","f999.jpg","f1010.jpg","f1111.jpg","f1212.jpg","f1313.jpg","f1414.jpg","f1515.jpg","Awhite.jpg","Turquoise.jpg","db0042.jpg","db0221.jpg","db0231.jpg","db0268.jpg","db0623.jpg","db0627.jpg","db0635.jpg","db0651.jpg","db0680.jpg","db0721.jpg","db0722.jpg","db0723.jpg","db0725.jpg","db0726.jpg","db0729.jpg","db0759.jpg","db0763.jpg","db0791.jpg","db0796.jpg","db0877.jpg","db1132.jpg","db1133.jpg","db1135.jpg","db1153.jpg","db1262.jpg","db1570.jpg","db1802.jpg","db1832.jpg","db1832-2.jpg","db2111.jpg","db2127.jpg","db2131.jpg","db2132.jpg","db2144.jpg","db2316.jpg","db2352.jpg","db2357.jpg","db310.jpg","db626.jpg","db732.jpg","db856.jpg"];m.value=$.map(S=>({name:S,url:`/miyuki-beads-designer/beads/${S}`,displayName:S.replace(".jpg","")}))}const N=tt([]),O=tt([]),D=tt({width:0,height:0}),V=tt({x:0,y:0}),W=tt(!1),ee=tt("paint");let Y=!1,xe=null,Me=!1,Le=!1,We=!1,_t=-1;const Qe=ya({stacks:[],index:-1});function ie(){Qe.stacks=Qe.stacks.slice(0,Qe.index+1),Qe.stacks.push([...R.value]),Qe.index++}function ye(){Qe.index>0&&(Qe.index--,R.value=[...Qe.stacks[Qe.index]])}function H(){Qe.index<Qe.stacks.length-1&&(Qe.index++,R.value=[...Qe.stacks[Qe.index]])}ie();function ue($){const S=$.target.files[0];if(S){const F=new FileReader;F.onload=pe=>{try{const Ae=pe.target.result.trim(),Be=JSON.parse(Ae);if(Be.grid&&Be.rows&&Be.cols){const{grid:je,rows:ot,cols:at}=Be;Array.isArray(je)&&je.every(Xe=>typeof Xe=="string"&&(Xe.match(/^#[0-9A-Fa-f]{6}$/)||Xe.startsWith("/miyuki-beads-designer/beads/")))?je.length===ot*at?(i.value=ot,s.value=at,Be.cellWidth&&typeof Be.cellWidth=="number"&&(r.value=Be.cellWidth),Be.cellHeight&&typeof Be.cellHeight=="number"&&(o.value=Be.cellHeight),typeof Be.isVertical=="boolean"&&(u.value=Be.isVertical),typeof Be.isVerticalGrid=="boolean"&&(d.value=Be.isVerticalGrid),Sa(()=>{R.value=[...je],ie(),wi("بارگذاری شد",`گرید ${ot}×${at} با موفقیت بارگذاری شد`)})):$t("خطا در ابعاد",`تعداد سلول‌ها (${je.length}) با ابعاد اعلام شده (${ot}×${at}) مطابقت ندارد`):$t("خطا در فرمت فایل","فایل باید شامل آرایه‌ای معتبر از رنگ‌ها یا تصاویر باشد")}else if(Array.isArray(Be)){const je=Be;je.every(ot=>typeof ot=="string"&&(ot.match(/^#[0-9A-Fa-f]{6}$/)||ot.startsWith("/miyuki-beads-designer/beads/")))?je.length===i.value*s.value?(R.value=[...je],ie(),wi("بارگذاری شد",`گرید با ابعاد فعلی (${i.value}×${s.value}) بارگذاری شد`)):$t("خطا در ابعاد",`تعداد سلول‌ها (${je.length}) با ابعاد فعلی (${i.value}×${s.value}) مطابقت ندارد. لطفاً ابعاد را تنظیم کنید یا از فایل با فرمت جدید استفاده کنید.`):$t("خطا در فرمت فایل","فایل باید شامل آرایه‌ای معتبر از رنگ‌ها یا تصاویر باشد")}else $t("خطا در فرمت فایل","فرمت فایل نامعتبر است. فایل باید شامل آرایه‌ای از رنگ‌ها/تصاویر یا آبجکتی با grid، rows و cols باشد.")}catch(Ae){$t("خطا در خواندن فایل","خطا در خواندن فایل: "+Ae.message),console.error("Error parsing text file:",Ae)}},F.readAsText(S)}}Bn([i,s],()=>{const $=i.value*s.value;R.value.length!==$&&(R.value=Array($).fill("#ffffff"),N.value=[],W.value=!1,ie())},{immediate:!0}),Bn(R,()=>{setTimeout(()=>{try{const $={grid:R.value,rows:i.value,cols:s.value,recentColors:l.value,recentImages:v.value,timestamp:new Date().toISOString()};localStorage.setItem("gridEditorData",JSON.stringify($)),c.value=$.timestamp}catch($){console.error("Error auto-saving grid:",$)}},1e3)},{deep:!0}),Bn(u,$=>{try{localStorage.setItem("gridEditor_isVertical",JSON.stringify($)),console.log("isVertical saved",$)}catch(S){console.error("Error saving isVertical to localStorage:",S)}},{immediate:!1});function oe($){ee.value=$,N.value=[],$!=="paste"&&(W.value=!1)}function me(){return O.value&&O.value.length>0&&D.value.width>0}function Je($){Y=!0;const S=le($);ee.value==="paint"?q(S):ee.value==="fill"?Z(S,R.value[S],ge()):ee.value==="select"&&(xe=S,N.value=[S],Me=!0)}function P(){Y&&ie(),Y=!1,xe=null}function b($){if(!Y)return;const S=le($);ee.value==="paint"?q(S):ee.value==="select"&&Me&&(N.value=Q(xe,S))}function G($){$.preventDefault();const S=$.touches;if(Le=S.length>1,S.length===1){const F=S[0],pe=document.elementFromPoint(F.clientX,F.clientY);if(pe&&pe.classList.contains("cell")){const Ae=Array.from(pe.parentNode.children).indexOf(pe);_t=Ae,We=!0,ee.value==="paint"?q(Ae):ee.value==="fill"?(Z(Ae,R.value[Ae],ge()),ie()):ee.value==="select"&&(xe=Ae,N.value=[Ae],Me=!0)}}else We=!1}function K($){const S=$.touches;if(S.length===1&&We&&!Le){$.preventDefault();const F=S[0],pe=document.elementFromPoint(F.clientX,F.clientY);if(pe&&pe.classList.contains("cell")){const Ae=Array.from(pe.parentNode.children).indexOf(pe);Ae!==_t&&(_t=Ae,ee.value==="paint"?q(Ae):ee.value==="select"&&Me&&(N.value=Q(xe,Ae)))}}else S.length>1&&(Le=!0,We=!1)}function se(){We&&!Le&&ee.value==="paint"&&ie(),We=!1,Le=!1,_t=-1,xe=null,Me=!1}function q($){h.value==="color"?(R.value[$]=a.value,te(a.value)):h.value==="image"&&g.value&&(R.value[$]=g.value.url,ce(g.value))}function ge(){return h.value==="color"?a.value:h.value==="image"&&g.value?g.value.url:a.value}function te($){const S=l.value.indexOf($);S>-1&&l.value.splice(S,1),l.value.unshift($),l.value.length>10&&(l.value=l.value.slice(0,10))}function ce($){const S=v.value.findIndex(F=>F.url===$.url);S>-1&&v.value.splice(S,1),v.value.unshift($),v.value.length>10&&(v.value=v.value.slice(0,10))}function de($){g.value=$,ce($)}function Pe($){const S=v.value.findIndex(F=>F.url===$.url);S>-1&&v.value.splice(S,1)}async function T(){(await kc("پاک کردن تصاویر","آیا می‌خواهید تمام تصاویر اخیر پاک شوند؟")).isConfirmed&&(v.value=[])}function x($){const S=l.value.indexOf($);S>-1&&l.value.splice(S,1)}async function B(){(await kc("پاک کردن رنگ‌ها","آیا می‌خواهید تمام رنگ‌های اخیر پاک شوند؟")).isConfirmed&&(l.value=[])}function Z($,S,F){if(S===F)return;const pe=[$],Ae=new Set;for(;pe.length;){const Be=pe.pop();if(Ae.has(Be)||R.value[Be]!==S)continue;Ae.add(Be),R.value[Be]=F;const je=Be%i.value,ot=Math.floor(Be/i.value);if(je>0){const at=Be-1;!Ae.has(at)&&R.value[at]===S&&pe.push(at)}if(je<i.value-1){const at=Be+1;!Ae.has(at)&&R.value[at]===S&&pe.push(at)}if(ot>0){const at=Be-i.value;!Ae.has(at)&&R.value[at]===S&&pe.push(at)}if(ot<s.value-1){const at=Be+i.value;!Ae.has(at)&&R.value[at]===S&&pe.push(at)}}te(F)}function le($){const S=$.target;return Array.from(S.parentNode.children).indexOf(S)}function Q($,S){const F=$%i.value,pe=Math.floor($/i.value),Ae=S%i.value,Be=Math.floor(S/i.value),je=Math.min(F,Ae),ot=Math.max(F,Ae),at=Math.min(pe,Be),Xe=Math.max(pe,Be),bt=[];for(let Gt=at;Gt<=Xe;Gt++)for(let In=je;In<=ot;In++){const os=Gt*i.value+In;os>=0&&os<R.value.length&&bt.push(os)}return bt}function Ie($){if(ee.value==="paint")q($),ie();else if(ee.value==="fill")Z($,R.value[$],ge()),ie();else if(ee.value==="paste"&&W.value){const S=$%i.value,F=Math.floor($/i.value);V.value={x:S,y:F},ut()}}function ve(){if(N.value.length===0){$t("خطا","ابتدا یک ناحیه انتخاب کنید");return}const $=i.value,S=Math.min(...N.value.map(ot=>ot%$)),F=Math.max(...N.value.map(ot=>ot%$)),pe=Math.min(...N.value.map(ot=>Math.floor(ot/$))),Ae=Math.max(...N.value.map(ot=>Math.floor(ot/$))),Be=F-S+1,je=Ae-pe+1;D.value={width:Be,height:je},O.value=[];for(let ot=0;ot<je;ot++){const at=[];for(let Xe=0;Xe<Be;Xe++){const bt=(pe+ot)*$+(S+Xe);at.push(R.value[bt])}O.value.push(at)}}function De(){if(N.value.length===0){$t("خطا","ابتدا یک ناحیه انتخاب کنید");return}ve(),N.value.forEach($=>R.value[$]="#ffffff"),ie()}function Ue(){if(!me()){$t("خطا","هیچ چیزی برای چسباندن وجود ندارد");return}let $=0,S=0;if(N.value.length>0){const F=i.value;$=Math.min(...N.value.map(pe=>pe%F)),S=Math.min(...N.value.map(pe=>Math.floor(pe/F)))}else $=Math.floor((i.value-D.value.width)/2),S=Math.floor((s.value-D.value.height)/2);for(let F=0;F<D.value.height;F++)for(let pe=0;pe<D.value.width;pe++){const Ae=$+pe,Be=S+F;if(Ae>=0&&Ae<i.value&&Be>=0&&Be<s.value){const je=Be*i.value+Ae;O.value[F]&&O.value[F][pe]&&(R.value[je]=O.value[F][pe])}}ie()}function _e(){N.value=[],Me=!1}function Ce(){if(N.value.length===0){$t("خطا","ابتدا یک ناحیه انتخاب کنید");return}try{const $=i.value,S=Math.min(...N.value.map(Xe=>Xe%$)),F=Math.max(...N.value.map(Xe=>Xe%$)),pe=Math.min(...N.value.map(Xe=>Math.floor(Xe/$))),Ae=Math.max(...N.value.map(Xe=>Math.floor(Xe/$))),Be=F-S+1,je=Ae-pe+1,ot=[];for(let Xe=0;Xe<je;Xe++){const bt=[];for(let Gt=0;Gt<Be;Gt++){const In=(pe+Xe)*$+(S+Gt);N.value.includes(In)?bt.push(R.value[In]):bt.push("#ffffff")}ot.push(bt)}const at=ot.map(Xe=>Xe.reverse());for(let Xe=0;Xe<je;Xe++)for(let bt=0;bt<Be;bt++){const Gt=(pe+Xe)*$+(S+bt);N.value.includes(Gt)&&(R.value[Gt]=at[Xe][bt])}ie(),wi("آینه شد","طرح انتخاب شده با موفقیت آینه شد")}catch($){$t("خطا در آینه کردن","خطا در آینه کردن طرح: "+$.message),console.error("Error mirroring selection:",$)}}function He(){if(N.value.length===0){$t("خطا","ابتدا یک ناحیه انتخاب کنید");return}try{const $=i.value,S=Math.min(...N.value.map(Xe=>Xe%$)),F=Math.max(...N.value.map(Xe=>Xe%$)),pe=Math.min(...N.value.map(Xe=>Math.floor(Xe/$))),Ae=Math.max(...N.value.map(Xe=>Math.floor(Xe/$))),Be=F-S+1,je=Ae-pe+1,ot=[];for(let Xe=0;Xe<je;Xe++){const bt=[];for(let Gt=0;Gt<Be;Gt++){const In=(pe+Xe)*$+(S+Gt);N.value.includes(In)?bt.push(R.value[In]):bt.push("#ffffff")}ot.push(bt)}const at=ot.reverse();for(let Xe=0;Xe<je;Xe++)for(let bt=0;bt<Be;bt++){const Gt=(pe+Xe)*$+(S+bt);N.value.includes(Gt)&&(R.value[Gt]=at[Xe][bt])}ie(),wi("آینه عمودی شد","طرح انتخاب شده با موفقیت به صورت عمودی آینه شد")}catch($){$t("خطا در آینه عمودی","خطا در آینه عمودی کردن طرح: "+$.message),console.error("Error vertical mirroring selection:",$)}}function Ne(){if(!me()){$t("خطا","هیچ چیزی برای چسباندن وجود ندارد");return}const $=Math.floor((i.value-D.value.width)/2),S=Math.floor((s.value-D.value.height)/2);for(let F=0;F<D.value.height;F++)for(let pe=0;pe<D.value.width;pe++){const Ae=$+pe,Be=S+F;if(Ae>=0&&Ae<i.value&&Be>=0&&Be<s.value){const je=Be*i.value+Ae;O.value[F]&&O.value[F][pe]&&(R.value[je]=O.value[F][pe])}}ie()}function Te(){if(!me()){$t("خطا","هیچ چیزی برای چسباندن وجود ندارد");return}W.value=!0,ee.value="paste",N.value=[],Fo("انتخاب موقعیت","حالا روی صفحه کلیک کنید تا موقعیت چسباندن را انتخاب کنید")}function ut(){if(!me()){$t("خطا","هیچ چیزی برای چسباندن وجود ندارد");return}for(let $=0;$<D.value.height;$++)for(let S=0;S<D.value.width;S++){const F=V.value.x+S,pe=V.value.y+$;if(F>=0&&F<i.value&&pe>=0&&pe<s.value){const Ae=pe*i.value+F;O.value[$]&&O.value[$][S]&&(R.value[Ae]=O.value[$][S])}}ie(),W.value=!1,ee.value="paint"}function z(){W.value=!1,ee.value="paint",Fo("لغو شد","حالت چسباندن لغو شد")}async function we($,S,F,pe,Ae,Be){if(Be.startsWith("/miyuki-beads-designer/beads/"))try{const je=new Image;je.crossOrigin="anonymous",await new Promise((ot,at)=>{je.onload=ot,je.onerror=at,je.src=Be}),$.drawImage(je,S,F,pe,Ae)}catch(je){console.warn("Failed to load image:",Be,je),$.fillStyle="#cccccc",$.fillRect(S,F,pe,Ae)}else $.fillStyle=Be,$.fillRect(S,F,pe,Ae)}async function Ee(){try{Fo("در حال پردازش...","لطفاً صبر کنید، در حال ایجاد عکس...");const $=document.createElement("canvas"),S=$.getContext("2d"),F=20,pe=i.value*r.value+F*2,Ae=s.value*o.value+F*2;$.width=pe,$.height=Ae,S.fillStyle="#ffffff",S.fillRect(0,0,pe,Ae);for(let Be=0;Be<s.value;Be++)for(let je=0;je<i.value;je++){const ot=Be*i.value+je,at=R.value[ot];if(at){const Xe=F+je*r.value,bt=F+Be*o.value;await we(S,Xe,bt,r.value,o.value,at),S.strokeStyle="#e0e0e0",S.lineWidth=.5,S.strokeRect(Xe,bt,r.value,o.value)}}S.fillStyle="#000000",S.font="16px Arial",S.textAlign="center",S.fillText(`Grid: ${i.value}×${s.value}`,pe/2,F/2+10),$.toBlob(Be=>{const je=URL.createObjectURL(Be),ot=document.createElement("a");ot.href=je,ot.download=`grid_${i.value}x${s.value}_${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.png`,document.body.appendChild(ot),ot.click(),document.body.removeChild(ot),URL.revokeObjectURL(je),wi("موفقیت","عکس با موفقیت دانلود شد!")},"image/png")}catch($){$t("خطا در خروجی","خطا در ایجاد عکس: "+$.message),console.error("Error exporting grid as image:",$)}}async function ke(){try{Fo("در حال پردازش...","لطفاً صبر کنید، در حال ایجاد عکس HD...");const $=document.createElement("canvas"),S=$.getContext("2d"),F=r.value*2,pe=o.value*2,Ae=40,Be=i.value*F+Ae*2,je=s.value*pe+Ae*2;$.width=Be,$.height=je,S.fillStyle="#ffffff",S.fillRect(0,0,Be,je);for(let at=0;at<s.value;at++)for(let Xe=0;Xe<i.value;Xe++){const bt=at*i.value+Xe,Gt=R.value[bt];if(Gt){const In=Ae+Xe*F,os=Ae+at*pe;await we(S,In,os,F,pe,Gt),S.strokeStyle="#d0d0d0",S.lineWidth=1,S.strokeRect(In,os,F,pe)}}S.fillStyle="#000000",S.font="bold 24px Arial",S.textAlign="center",S.fillText(`Grid: ${i.value}×${s.value}`,Be/2,Ae/2+20),S.font="16px Arial",S.fillStyle="#666666";const ot=new Date().toLocaleString("fa-IR");S.fillText(ot,Be/2,je-Ae/2),$.toBlob(at=>{const Xe=URL.createObjectURL(at),bt=document.createElement("a");bt.href=Xe,bt.download=`grid_HD_${i.value}x${s.value}_${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.png`,document.body.appendChild(bt),bt.click(),document.body.removeChild(bt),URL.revokeObjectURL(Xe),wi("موفقیت","عکس HD با موفقیت دانلود شد!")},"image/png",1)}catch($){$t("خطا در خروجی","خطا در ایجاد عکس HD: "+$.message),console.error("Error exporting grid as high quality image:",$)}}function be(){try{const $={grid:R.value,rows:i.value,cols:s.value,cellWidth:r.value,cellHeight:o.value,isVertical:u.value,isVerticalGrid:d.value,timestamp:new Date().toISOString()},S=JSON.stringify($,null,2),F=new Blob([S],{type:"text/plain;charset=utf-8"}),pe=URL.createObjectURL(F),Ae=document.createElement("a");Ae.href=pe,Ae.download=`grid_${i.value}x${s.value}_${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.txt`,document.body.appendChild(Ae),Ae.click(),document.body.removeChild(Ae),URL.revokeObjectURL(pe),wi("موفقیت","فایل TXT با موفقیت دانلود شد!")}catch($){$t("خطا در خروجی","خطا در ایجاد فایل TXT: "+$.message),console.error("Error exporting grid as TXT:",$)}}function he(){const $=[];for(let S=0;S<s.value;S++){const F=[];for(let pe=0;pe<i.value;pe++)F.push(R.value[S*i.value+pe]);$.push(F)}return $}function Ge($){const S=$.target.files[0];f.value=URL.createObjectURL(S)}const nt=tt("#ffffff"),dt=tt("color"),ft=tt(null);async function Ln(){let $,S;if(dt.value==="color")$=nt.value,S=`آیا می‌خواهید تمام مهره‌ها به رنگ ${$} تغییر یابند؟ این عملیات غیرقابل برگشت است.`;else if(dt.value==="image"&&ft.value)$=ft.value.url,S=`آیا می‌خواهید تمام مهره‌ها به تصویر ${ft.value.displayName} تغییر یابند؟ این عملیات غیرقابل برگشت است.`;else{$t("خطا","لطفاً یک رنگ یا تصویر انتخاب کنید");return}if((await kc("تغییر تمام مهره‌ها",S)).isConfirmed){const pe=i.value*s.value;for(let Ae=0;Ae<pe;Ae++)R.value[Ae]=$;ie(),dt.value==="color"?(te($),wi("تغییر رنگ",`تمام مهره‌ها به رنگ ${$} تغییر یافتند`)):(ce(ft.value),wi("تغییر تصویر",`تمام مهره‌ها به تصویر ${ft.value.displayName} تغییر یافتند`))}}return($,S)=>(Fe(),Ve("div",hM,[_("div",pM,[_("button",{class:Ke(["mobile-menu-btn",{active:p.value}]),onClick:E},S[58]||(S[58]=[_("span",{class:"menu-icon"},"☰",-1),_("span",{class:"menu-text"},"ابزارها",-1)]),2),S[59]||(S[59]=_("div",{class:"mobile-title"},"🎨 ویرایشگر شبکه",-1))]),C.value?(Fe(),Ve("div",mM,[_("div",gM,[_("h4",vM,st(I(C.value)),1),_("button",{class:"unpin-btn",title:"Unpin Section",onClick:U}," ✕ ")]),_("div",_M,[C.value==="dimensions"?(Fe(),Ve("div",bM,[_("div",xM,[_("label",yM,[S[60]||(S[60]=_("span",{class:"dimension-text"},"ستون ها:",-1)),Yt(_("input",{"onUpdate:modelValue":S[0]||(S[0]=F=>i.value=F),type:"number",min:"1",class:"dimension-input"},null,512),[[en,i.value,void 0,{number:!0}]])]),_("label",wM,[S[61]||(S[61]=_("span",{class:"dimension-text"},"ردیف ها:",-1)),Yt(_("input",{"onUpdate:modelValue":S[1]||(S[1]=F=>s.value=F),type:"number",min:"1",class:"dimension-input"},null,512),[[en,s.value,void 0,{number:!0}]])])]),_("div",SM,[S[64]||(S[64]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 📏 اندازه سلول ",-1)),_("div",MM,[_("label",EM,[S[62]||(S[62]=_("span",{class:"dimension-text"},"عرض:",-1)),Yt(_("input",{"onUpdate:modelValue":S[2]||(S[2]=F=>r.value=F),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[en,r.value,void 0,{number:!0}]])]),_("label",TM,[S[63]||(S[63]=_("span",{class:"dimension-text"},"ارتفاع:",-1)),Yt(_("input",{"onUpdate:modelValue":S[3]||(S[3]=F=>o.value=F),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[en,o.value,void 0,{number:!0}]])])])])])):Ct("",!0),C.value==="direction"?(Fe(),Ve("div",AM,[_("div",CM,[_("button",{class:Ke(["direction-btn",{active:u.value}]),onClick:S[4]||(S[4]=F=>u.value=!u.value)},st(u.value?"عمودی":"افقی"),3)]),_("div",RM,[_("button",{class:Ke(["direction-btn",{active:d.value}]),onClick:S[5]||(S[5]=F=>d.value=!d.value)},st(d.value?"گرید عمودی":"گرید افقی"),3)])])):Ct("",!0),C.value==="color"?(Fe(),Ve("div",PM,[_("div",DM,[Yt(_("input",{"onUpdate:modelValue":S[6]||(S[6]=F=>a.value=F),type:"color",class:"color-picker"},null,512),[[en,a.value]]),_("span",LM,st(a.value),1)]),_("div",IM,[S[65]||(S[65]=_("h4",{class:"text-sm font-semibold text-gray-700"},"🔄 رنگ‌های اخیر",-1)),l.value.length>0?(Fe(),Ve("button",{key:0,class:"clear-colors-btn",title:"پاک کردن تمام رنگ‌ها",onClick:B}," 🗑️ پاک کردن ")):Ct("",!0)]),_("div",UM,[(Fe(!0),Ve(Ht,null,En(l.value,F=>(Fe(),Ve("div",{key:F,class:"color-swatch",style:Yn({backgroundColor:F}),title:F,onClick:pe=>a.value=F},[_("button",{class:"remove-color-btn",onClick:Uo(pe=>x(F),["stop"])}," × ",8,OM)],12,NM))),128))])])):Ct("",!0),C.value==="mode"?(Fe(),Ve("div",FM,[_("div",kM,[_("button",{class:Ke(["mode-btn",{active:h.value==="color"}]),onClick:S[7]||(S[7]=F=>h.value="color")}," 🎨 رنگ ",2),_("button",{class:Ke(["mode-btn",{active:h.value==="image"}]),onClick:S[8]||(S[8]=F=>h.value="image")}," 🖼️ تصویر ",2)])])):Ct("",!0),C.value==="image"?(Fe(),Ve("div",BM,[_("div",HM,[_("div",zM,[(Fe(!0),Ve(Ht,null,En(m.value,F=>{var pe;return Fe(),Ve("div",{key:F.name,class:Ke(["image-item",{selected:((pe=g.value)==null?void 0:pe.url)===F.url}]),onClick:Ae=>de(F)},[_("img",{src:F.url,alt:F.displayName,class:"bead-image"},null,8,GM),_("span",WM,st(F.displayName),1)],10,VM)}),128))])])])):Ct("",!0),C.value==="tools"?(Fe(),Ve("div",$M,[_("div",XM,[_("button",{class:Ke(["tool-btn primary",{active:ee.value==="paint"}]),onClick:S[9]||(S[9]=F=>oe("paint"))}," 🖌️ Paint ",2),_("button",{class:Ke(["tool-btn primary",{active:ee.value==="fill"}]),onClick:S[10]||(S[10]=F=>oe("fill"))}," 🪣 Fill ",2),_("button",{class:Ke(["tool-btn secondary",{active:ee.value==="select"}]),onClick:S[11]||(S[11]=F=>oe("select"))}," 📐 Select ",2),_("button",{class:"tool-btn secondary",onClick:ve}," 📋 Copy "),_("button",{class:"tool-btn secondary",onClick:De}," ✂️ Cut "),_("button",{class:"tool-btn secondary",onClick:Ue}," 📥 Paste "),_("button",{class:"tool-btn secondary",onClick:Ne}," 📍 Paste at Center "),_("button",{class:"tool-btn secondary",disabled:!me(),onClick:Te}," 🎯 Select Paste Position ",8,jM),W.value?(Fe(),Ve("button",{key:0,class:"tool-btn danger",onClick:z}," ❌ Cancel Paste ")):Ct("",!0),_("button",{class:"tool-btn secondary",onClick:_e}," 🗑️ Clear Selection "),_("button",{class:"tool-btn secondary",disabled:N.value.length===0,onClick:Ce}," 🔄 Mirror Selection ",8,qM),_("button",{class:"tool-btn secondary",disabled:N.value.length===0,onClick:He}," ↕️ Mirror Selection Vertical ",8,YM),_("button",{class:"tool-btn secondary",onClick:ye}," ↩️ Undo "),_("button",{class:"tool-btn secondary",onClick:H}," ↪️ Redo ")])])):Ct("",!0),C.value==="export"?(Fe(),Ve("div",KM,[_("div",{class:"save-load-buttons"},[_("button",{class:"export-btn success",onClick:k}," 💾 ذخیره گرید "),_("button",{class:"export-btn info",onClick:w}," 📂 بارگذاری اخرین ذخیره ")]),_("div",ZM,[_("button",{class:"export-btn primary",onClick:S[12]||(S[12]=F=>$.$emit("update-grid",he()))}," 🚀 ارسال به 3D "),_("button",{class:"export-btn success",onClick:S[13]||(S[13]=()=>Ee())}," 📷 خروجی عکس "),_("button",{class:"export-btn info",onClick:S[14]||(S[14]=()=>ke())}," 🖼️ خروجی HD "),_("button",{class:"export-btn warning",onClick:be}," 📄 خروجی TXT ")])])):Ct("",!0)])])):Ct("",!0),_("div",{class:Ke(["mobile-dropdown-panel",{open:p.value}])},[_("div",QM,[_("div",JM,[_("div",eE,[_("label",tE,[S[66]||(S[66]=_("span",{class:"upload-text"},"📁 آپلود فایل txt grid",-1)),_("input",{type:"file",accept:".txt",class:"upload-input",onChange:ue},null,32)]),_("label",nE,[S[67]||(S[67]=_("span",{class:"upload-text"},"📁 آپلود تصویر",-1)),_("input",{type:"file",accept:"image/*",class:"upload-input",onChange:Ge},null,32)])]),f.value?(Fe(),Ve("div",iE,[_("img",{src:f.value,alt:"تصویر انتخاب شده",class:"preview-image"},null,8,sE)])):Ct("",!0)]),_("div",rE,[S[83]||(S[83]=_("div",{class:"controls-header"},[_("h3",{class:"mb-4 text-lg font-bold text-gray-800"}," 🎨 ابزارهای طراحی ")],-1)),_("div",oE,[_("div",aE,[_("div",lE,[S[68]||(S[68]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 📐 ابعاد شبکه ",-1)),_("button",{class:Ke(["pin-btn",{pinned:C.value==="dimensions"}]),title:C.value==="dimensions"?"Unpin Section":"Pin Section",onClick:S[15]||(S[15]=F=>y("dimensions"))},st((C.value==="dimensions","📌")),11,cE)]),_("div",uE,[_("label",dE,[S[69]||(S[69]=_("span",{class:"dimension-text"},"ستون ها:",-1)),Yt(_("input",{"onUpdate:modelValue":S[16]||(S[16]=F=>i.value=F),type:"number",min:"1",class:"dimension-input"},null,512),[[en,i.value,void 0,{number:!0}]])]),_("label",fE,[S[70]||(S[70]=_("span",{class:"dimension-text"},"ردیف ها:",-1)),Yt(_("input",{"onUpdate:modelValue":S[17]||(S[17]=F=>s.value=F),type:"number",min:"1",class:"dimension-input"},null,512),[[en,s.value,void 0,{number:!0}]])])]),_("div",hE,[S[73]||(S[73]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 📏 اندازه سلول ",-1)),_("div",pE,[_("label",mE,[S[71]||(S[71]=_("span",{class:"dimension-text"},"عرض:",-1)),Yt(_("input",{"onUpdate:modelValue":S[18]||(S[18]=F=>r.value=F),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[en,r.value,void 0,{number:!0}]])]),_("label",gE,[S[72]||(S[72]=_("span",{class:"dimension-text"},"ارتفاع:",-1)),Yt(_("input",{"onUpdate:modelValue":S[19]||(S[19]=F=>o.value=F),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[en,o.value,void 0,{number:!0}]])])])])]),_("div",vE,[_("div",_E,[S[74]||(S[74]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"🔄 جهت",-1)),_("button",{class:Ke(["pin-btn",{pinned:C.value==="direction"}]),title:C.value==="direction"?"Unpin Section":"Pin Section",onClick:S[20]||(S[20]=F=>y("direction"))},st((C.value==="direction","📌")),11,bE)]),_("div",xE,[_("button",{class:Ke(["direction-btn",{active:u.value}]),onClick:S[21]||(S[21]=F=>u.value=!u.value)},st(u.value?"عمودی":"افقی"),3)]),_("div",yE,[_("button",{class:Ke(["direction-btn",{active:d.value}]),onClick:S[22]||(S[22]=F=>d.value=!d.value)},st(d.value?"گرید عمودی":"گرید افقی"),3)])]),_("div",wE,[_("div",SE,[S[75]||(S[75]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🎨 انتخاب رنگ ",-1)),_("button",{class:Ke(["pin-btn",{pinned:C.value==="color"}]),title:C.value==="color"?"Unpin Section":"Pin Section",onClick:S[23]||(S[23]=F=>y("color"))},st((C.value==="color","📌")),11,ME)]),_("div",EE,[Yt(_("input",{"onUpdate:modelValue":S[24]||(S[24]=F=>a.value=F),type:"color",class:"color-picker"},null,512),[[en,a.value]]),_("span",TE,st(a.value),1)]),_("div",AE,[S[76]||(S[76]=_("h4",{class:"text-sm font-semibold text-gray-700"}," 🔄 رنگ‌های اخیر ",-1)),l.value.length>0?(Fe(),Ve("button",{key:0,class:"clear-colors-btn",title:"پاک کردن تمام رنگ‌ها",onClick:B}," 🗑️ پاک کردن ")):Ct("",!0)]),_("div",CE,[(Fe(!0),Ve(Ht,null,En(l.value,F=>(Fe(),Ve("div",{key:F,class:"color-swatch",style:Yn({backgroundColor:F}),title:F,onClick:pe=>a.value=F},[_("button",{class:"remove-color-btn",onClick:Uo(pe=>x(F),["stop"])}," × ",8,PE)],12,RE))),128))])]),_("div",DE,[_("div",LE,[S[77]||(S[77]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🎨 حالت طراحی ",-1)),_("button",{class:Ke(["pin-btn",{pinned:C.value==="mode"}]),title:C.value==="mode"?"Unpin Section":"Pin Section",onClick:S[25]||(S[25]=F=>y("mode"))},st((C.value==="mode","📌")),11,IE)]),_("div",UE,[_("button",{class:Ke(["mode-btn",{active:h.value==="color"}]),onClick:S[26]||(S[26]=F=>h.value="color")}," 🎨 رنگ ",2),_("button",{class:Ke(["mode-btn",{active:h.value==="image"}]),onClick:S[27]||(S[27]=F=>h.value="image")}," 🖼️ تصویر ",2)])]),h.value==="image"?(Fe(),Ve("div",NE,[_("div",OE,[S[78]||(S[78]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🖼️ انتخاب تصویر مهره ",-1)),_("button",{class:Ke(["pin-btn",{pinned:C.value==="image"}]),title:C.value==="image"?"Unpin Section":"Pin Section",onClick:S[28]||(S[28]=F=>y("image"))},st((C.value==="image","📌")),11,FE)]),_("div",kE,[_("div",BE,[(Fe(!0),Ve(Ht,null,En(m.value,F=>{var pe;return Fe(),Ve("div",{key:F.name,class:Ke(["image-item",{selected:((pe=g.value)==null?void 0:pe.url)===F.url}]),onClick:Ae=>de(F)},[_("img",{src:F.url,alt:F.displayName,class:"bead-image"},null,8,zE),_("span",VE,st(F.displayName),1)],10,HE)}),128))])]),v.value.length>0?(Fe(),Ve("div",GE,[_("div",{class:"recent-images-header"},[S[79]||(S[79]=_("h4",{class:"text-sm font-semibold text-gray-700"}," 🔄 تصاویر اخیر ",-1)),_("button",{class:"clear-images-btn",title:"پاک کردن تمام تصاویر",onClick:T}," 🗑️ پاک کردن ")]),_("div",WE,[(Fe(!0),Ve(Ht,null,En(v.value,F=>{var pe;return Fe(),Ve("div",{key:F.url,class:Ke(["recent-image-item",{selected:((pe=g.value)==null?void 0:pe.url)===F.url}]),onClick:Ae=>de(F)},[_("img",{src:F.url,alt:F.displayName,class:"recent-bead-image"},null,8,XE),_("button",{class:"remove-image-btn",onClick:Uo(Ae=>Pe(F),["stop"])}," × ",8,jE)],10,$E)}),128))])])):Ct("",!0)])):Ct("",!0),_("div",qE,[_("div",YE,[S[80]||(S[80]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🛠️ ابزارها ",-1)),_("button",{class:Ke(["pin-btn",{pinned:C.value==="tools"}]),title:C.value==="tools"?"Unpin Section":"Pin Section",onClick:S[29]||(S[29]=F=>y("tools"))},st((C.value==="tools","📌")),11,KE)]),_("div",ZE,[_("button",{class:Ke(["tool-btn primary",{active:ee.value==="paint"}]),onClick:S[30]||(S[30]=F=>oe("paint"))}," 🖌️ Paint ",2),_("button",{class:Ke(["tool-btn primary",{active:ee.value==="fill"}]),onClick:S[31]||(S[31]=F=>oe("fill"))}," 🪣 Fill ",2),_("button",{class:Ke(["tool-btn secondary",{active:ee.value==="select"}]),onClick:S[32]||(S[32]=F=>oe("select"))}," 📐 Select ",2),_("button",{class:"tool-btn secondary",onClick:ve}," 📋 Copy "),_("button",{class:"tool-btn secondary",onClick:De}," ✂️ Cut "),_("button",{class:"tool-btn secondary",onClick:Ue}," 📥 Paste "),_("button",{class:"tool-btn secondary",onClick:Ne}," 📍 Paste at Center "),_("button",{class:"tool-btn secondary",disabled:!me(),onClick:Te}," 🎯 Select Paste Position ",8,QE),W.value?(Fe(),Ve("button",{key:0,class:"tool-btn danger",onClick:z}," ❌ Cancel Paste ")):Ct("",!0),_("button",{class:"tool-btn secondary",onClick:_e}," 🗑️ Clear Selection "),_("button",{class:"tool-btn secondary",disabled:N.value.length===0,onClick:Ce}," 🔄 Mirror Selection ",8,JE),_("button",{class:"tool-btn secondary",disabled:N.value.length===0,onClick:He}," ↕️ Mirror Selection Vertical ",8,eT),_("button",{class:"tool-btn secondary",onClick:ye}," ↩️ Undo "),_("button",{class:"tool-btn secondary",onClick:H}," ↪️ Redo ")]),_("div",tT,[S[81]||(S[81]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🎨 پس‌زمینه ",-1)),_("div",nT,[_("button",{class:Ke(["mode-btn",{active:dt.value==="color"}]),onClick:S[33]||(S[33]=F=>dt.value="color")}," 🎨 رنگ ",2),_("button",{class:Ke(["mode-btn",{active:dt.value==="image"}]),onClick:S[34]||(S[34]=F=>dt.value="image")}," 🖼️ تصویر ",2)]),dt.value==="color"?(Fe(),Ve("div",iT,[Yt(_("input",{"onUpdate:modelValue":S[35]||(S[35]=F=>nt.value=F),type:"color",class:"color-picker",title:"انتخاب رنگ پس‌زمینه"},null,512),[[en,nt.value]]),_("button",{class:"tool-btn success",onClick:Ln}," 🎨 تغییر تمام مهره‌ها ")])):Ct("",!0),dt.value==="image"?(Fe(),Ve("div",sT,[_("div",rT,[_("div",oT,[(Fe(!0),Ve(Ht,null,En(m.value,F=>{var pe;return Fe(),Ve("div",{key:F.name,class:Ke(["background-image-item",{selected:((pe=ft.value)==null?void 0:pe.url)===F.url}]),onClick:Ae=>ft.value=F},[_("img",{src:F.url,alt:F.displayName,class:"background-bead-image"},null,8,lT),_("span",cT,st(F.displayName),1)],10,aT)}),128))])]),_("button",{class:"tool-btn success",disabled:!ft.value,onClick:Ln}," 🖼️ تغییر تمام مهره‌ها ",8,uT)])):Ct("",!0)])]),_("div",dT,[_("div",fT,[S[82]||(S[82]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 📤 خروجی ",-1)),_("button",{class:Ke(["pin-btn",{pinned:C.value==="export"}]),title:C.value==="export"?"Unpin Section":"Pin Section",onClick:S[36]||(S[36]=F=>y("export"))},st((C.value==="export","📌")),11,hT)]),_("div",{class:"save-load-buttons mb-3"},[_("button",{class:"export-btn success",onClick:k}," 💾 ذخیره گرید "),_("button",{class:"export-btn info",onClick:w}," 📂 بارگذاری اخرین ذخیره ")]),_("div",pT,[_("button",{class:"export-btn primary",onClick:S[37]||(S[37]=F=>$.$emit("update-grid",he()))}," 🚀 ارسال به 3D "),_("button",{class:"export-btn success",onClick:S[38]||(S[38]=()=>Ee())}," 📷 خروجی عکس "),_("button",{class:"export-btn info",onClick:S[39]||(S[39]=()=>ke())}," 🖼️ خروجی HD "),_("button",{class:"export-btn warning",onClick:be}," 📄 خروجی TXT ")])])])])])],2),_("div",mT,[S[99]||(S[99]=_("div",{class:"controls-header"},[_("h3",{class:"mb-4 text-lg font-bold text-gray-800"},"🎨 ابزارهای طراحی")],-1)),_("div",gT,[_("div",vT,[S[89]||(S[89]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 📐 ابعاد شبکه ",-1)),_("div",_T,[_("label",bT,[S[84]||(S[84]=_("span",{class:"dimension-text"},"ستون ها:",-1)),Yt(_("input",{"onUpdate:modelValue":S[40]||(S[40]=F=>i.value=F),type:"number",min:"1",class:"dimension-input"},null,512),[[en,i.value,void 0,{number:!0}]])]),_("label",xT,[S[85]||(S[85]=_("span",{class:"dimension-text"},"ردیف ها:",-1)),Yt(_("input",{"onUpdate:modelValue":S[41]||(S[41]=F=>s.value=F),type:"number",min:"1",class:"dimension-input"},null,512),[[en,s.value,void 0,{number:!0}]])])]),_("div",yT,[S[88]||(S[88]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 📏 اندازه سلول ",-1)),_("div",wT,[_("label",ST,[S[86]||(S[86]=_("span",{class:"dimension-text"},"عرض:",-1)),Yt(_("input",{"onUpdate:modelValue":S[42]||(S[42]=F=>r.value=F),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[en,r.value,void 0,{number:!0}]])]),_("label",MT,[S[87]||(S[87]=_("span",{class:"dimension-text"},"ارتفاع:",-1)),Yt(_("input",{"onUpdate:modelValue":S[43]||(S[43]=F=>o.value=F),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[en,o.value,void 0,{number:!0}]])])])])]),_("div",ET,[S[90]||(S[90]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"🔄 جهت",-1)),_("div",TT,[_("button",{class:Ke(["direction-btn",{active:u.value}]),onClick:S[44]||(S[44]=F=>u.value=!u.value)},st(u.value?"عمودی":"افقی"),3)]),_("div",AT,[_("button",{class:Ke(["direction-btn",{active:d.value}]),onClick:S[45]||(S[45]=F=>d.value=!d.value)},st(d.value?"گرید عمودی":"گرید افقی"),3)])]),_("div",CT,[S[92]||(S[92]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🎨 انتخاب رنگ ",-1)),_("div",RT,[Yt(_("input",{"onUpdate:modelValue":S[46]||(S[46]=F=>a.value=F),type:"color",class:"color-picker"},null,512),[[en,a.value]]),_("span",PT,st(a.value),1)]),_("div",DT,[S[91]||(S[91]=_("h4",{class:"text-sm font-semibold text-gray-700"},"🔄 رنگ‌های اخیر",-1)),l.value.length>0?(Fe(),Ve("button",{key:0,class:"clear-colors-btn",title:"پاک کردن تمام رنگ‌ها",onClick:B}," 🗑️ پاک کردن ")):Ct("",!0)]),_("div",LT,[(Fe(!0),Ve(Ht,null,En(l.value,F=>(Fe(),Ve("div",{key:F,class:"color-swatch",style:Yn({backgroundColor:F}),title:F,onClick:pe=>a.value=F},[_("button",{class:"remove-color-btn",onClick:Uo(pe=>x(F),["stop"])}," × ",8,UT)],12,IT))),128))])]),_("div",NT,[S[93]||(S[93]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🎨 حالت طراحی ",-1)),_("div",OT,[_("button",{class:Ke(["mode-btn",{active:h.value==="color"}]),onClick:S[47]||(S[47]=F=>h.value="color")}," 🎨 رنگ ",2),_("button",{class:Ke(["mode-btn",{active:h.value==="image"}]),onClick:S[48]||(S[48]=F=>h.value="image")}," 🖼️ تصویر ",2)])]),h.value==="image"?(Fe(),Ve("div",FT,[S[95]||(S[95]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🖼️ انتخاب تصویر مهره ",-1)),_("div",kT,[_("div",BT,[(Fe(!0),Ve(Ht,null,En(m.value,F=>{var pe;return Fe(),Ve("div",{key:F.name,class:Ke(["image-item",{selected:((pe=g.value)==null?void 0:pe.url)===F.url}]),onClick:Ae=>de(F)},[_("img",{src:F.url,alt:F.displayName,class:"bead-image"},null,8,zT),_("span",VT,st(F.displayName),1)],10,HT)}),128))])]),v.value.length>0?(Fe(),Ve("div",GT,[_("div",{class:"recent-images-header"},[S[94]||(S[94]=_("h4",{class:"text-sm font-semibold text-gray-700"}," 🔄 تصاویر اخیر ",-1)),_("button",{class:"clear-images-btn",title:"پاک کردن تمام تصاویر",onClick:T}," 🗑️ پاک کردن ")]),_("div",WT,[(Fe(!0),Ve(Ht,null,En(v.value,F=>{var pe;return Fe(),Ve("div",{key:F.url,class:Ke(["recent-image-item",{selected:((pe=g.value)==null?void 0:pe.url)===F.url}]),onClick:Ae=>de(F)},[_("img",{src:F.url,alt:F.displayName,class:"recent-bead-image"},null,8,XT),_("button",{class:"remove-image-btn",onClick:Uo(Ae=>Pe(F),["stop"])}," × ",8,jT)],10,$T)}),128))])])):Ct("",!0)])):Ct("",!0),_("div",qT,[S[97]||(S[97]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"🛠️ ابزارها",-1)),_("div",YT,[_("button",{class:Ke(["tool-btn primary",{active:ee.value==="paint"}]),onClick:S[49]||(S[49]=F=>oe("paint"))}," 🖌️ Paint ",2),_("button",{class:Ke(["tool-btn primary",{active:ee.value==="fill"}]),onClick:S[50]||(S[50]=F=>oe("fill"))}," 🪣 Fill ",2),_("button",{class:Ke(["tool-btn secondary",{active:ee.value==="select"}]),onClick:S[51]||(S[51]=F=>oe("select"))}," 📐 Select ",2),_("button",{class:"tool-btn secondary",onClick:ve}," 📋 Copy "),_("button",{class:"tool-btn secondary",onClick:De}," ✂️ Cut "),_("button",{class:"tool-btn secondary",onClick:Ue}," 📥 Paste "),_("button",{class:"tool-btn secondary",onClick:Ne}," 📍 Paste at Center "),_("button",{class:"tool-btn secondary",disabled:!me(),onClick:Te}," 🎯 Select Paste Position ",8,KT),W.value?(Fe(),Ve("button",{key:0,class:"tool-btn danger",onClick:z}," ❌ Cancel Paste ")):Ct("",!0),_("button",{class:"tool-btn secondary",onClick:_e}," 🗑️ Clear Selection "),_("button",{class:"tool-btn secondary",disabled:N.value.length===0,onClick:Ce}," 🔄 Mirror Selection ",8,ZT),_("button",{class:"tool-btn secondary",disabled:N.value.length===0,onClick:He}," ↕️ Mirror Selection Vertical ",8,QT),_("button",{class:"tool-btn secondary",onClick:ye}," ↩️ Undo "),_("button",{class:"tool-btn secondary",onClick:H}," ↪️ Redo ")]),_("div",JT,[S[96]||(S[96]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🎨 پس‌زمینه ",-1)),_("div",eA,[_("button",{class:Ke(["mode-btn",{active:dt.value==="color"}]),onClick:S[52]||(S[52]=F=>dt.value="color")}," 🎨 رنگ ",2),_("button",{class:Ke(["mode-btn",{active:dt.value==="image"}]),onClick:S[53]||(S[53]=F=>dt.value="image")}," 🖼️ تصویر ",2)]),dt.value==="color"?(Fe(),Ve("div",tA,[Yt(_("input",{"onUpdate:modelValue":S[54]||(S[54]=F=>nt.value=F),type:"color",class:"color-picker",title:"انتخاب رنگ پس‌زمینه"},null,512),[[en,nt.value]]),_("button",{class:"tool-btn success",onClick:Ln}," 🎨 تغییر تمام مهره‌ها ")])):Ct("",!0),dt.value==="image"?(Fe(),Ve("div",nA,[_("div",iA,[_("div",sA,[(Fe(!0),Ve(Ht,null,En(m.value,F=>{var pe;return Fe(),Ve("div",{key:F.name,class:Ke(["background-image-item",{selected:((pe=ft.value)==null?void 0:pe.url)===F.url}]),onClick:Ae=>ft.value=F},[_("img",{src:F.url,alt:F.displayName,class:"background-bead-image"},null,8,oA),_("span",aA,st(F.displayName),1)],10,rA)}),128))])]),_("button",{class:"tool-btn success",disabled:!ft.value,onClick:Ln}," 🖼️ تغییر تمام مهره‌ها ",8,lA)])):Ct("",!0)])]),_("div",cA,[S[98]||(S[98]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"📤 خروجی",-1)),_("div",{class:"save-load-buttons mb-3"},[_("button",{class:"export-btn success",onClick:k}," 💾 ذخیره گرید "),_("button",{class:"export-btn info",onClick:w}," 📂 بارگذاری اخرین ذخیره ")]),_("div",uA,[_("button",{class:"export-btn primary",onClick:S[55]||(S[55]=F=>$.$emit("update-grid",he()))}," 🚀 ارسال به 3D "),_("button",{class:"export-btn success",onClick:S[56]||(S[56]=()=>Ee())}," 📷 خروجی عکس "),_("button",{class:"export-btn info",onClick:S[57]||(S[57]=()=>ke())}," 🖼️ خروجی HD "),_("button",{class:"export-btn warning",onClick:be}," 📄 خروجی TXT ")])])])]),_("div",{class:Ke(["grid-container max-md:min-h-[calc(100vh_-_310px)] md:max-h-[calc(100vh_-_200px)]",{"!flex-row":u.value,"!flex-col-reverse":!u.value,"pinned-active":C.value}])},[_("div",dA,[_("div",fA,[_("label",hA,[S[100]||(S[100]=_("span",{class:"upload-text"},"📁 آپلود فایل txt grid",-1)),_("input",{type:"file",accept:".txt",class:"upload-input",onChange:ue},null,32)]),_("label",pA,[S[101]||(S[101]=_("span",{class:"upload-text"},"📁 آپلود تصویر",-1)),_("input",{type:"file",accept:"image/*",class:"upload-input",onChange:Ge},null,32)])]),f.value?(Fe(),Ve("div",mA,[_("img",{src:f.value,alt:"تصویر انتخاب شده",class:"preview-image"},null,8,gA)])):Ct("",!0)]),_("div",{class:Ke(["grid-wrapper",{"rotate-none":d.value,"z-10 h-fit! min-h-fit! w-fit! translate-x-[200%] translate-y-[10%] rotate-90":!d.value}])},[_("div",{class:"grid-item",style:Yn({gridTemplateColumns:`repeat(${i.value}, ${r.value}px)`,gridAutoRows:`${o.value}px`}),onMousedown:Je,onMouseup:P,onMouseleave:P,onMousemove:b,onTouchstart:G,onTouchmove:K,onTouchend:se,onTouchcancel:se},[(Fe(!0),Ve(Ht,null,En(R.value,(F,pe)=>(Fe(),Ve("div",{key:pe,class:Ke(["cell",{"!border-red-200":pe==Math.floor(i.value*s.value/2)}]),style:Yn({backgroundColor:F.startsWith("/miyuki-beads-designer/beads/")?"transparent":F,backgroundImage:F.startsWith("/miyuki-beads-designer/beads/")?`url(${F})`:"none",backgroundSize:"cover",backgroundPosition:"center",border:N.value.includes(pe)?"2px dashed #ff4757":"1px solid #ddd",width:`${r.value}px`,height:`${o.value}px`,minWidth:`${r.value}px`,minHeight:`${o.value}px`}),onClick:Ae=>Ie(pe)},null,14,vA))),128))],36)],2)],2)]))}},bA=Mo(_A,[["__scopeId","data-v-9a0afde8"]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uf="179",Jr={ROTATE:0,DOLLY:1,PAN:2},Wr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xA=0,Gh=1,yA=2,Cv=1,wA=2,ji=3,Os=0,zn=1,Ji=2,Is=0,eo=1,Wh=2,$h=3,Xh=4,SA=5,ir=100,MA=101,EA=102,TA=103,AA=104,CA=200,RA=201,PA=202,DA=203,ku=204,Bu=205,LA=206,IA=207,UA=208,NA=209,OA=210,FA=211,kA=212,BA=213,HA=214,Hu=0,zu=1,Vu=2,_o=3,Gu=4,Wu=5,$u=6,Xu=7,Rv=0,zA=1,VA=2,Us=0,GA=1,WA=2,$A=3,XA=4,jA=5,qA=6,YA=7,Pv=300,bo=301,xo=302,ju=303,qu=304,pc=306,Yu=1e3,or=1001,Ku=1002,_i=1003,KA=1004,Xa=1005,Pi=1006,Bc=1007,ar=1008,Fi=1009,Dv=1010,Lv=1011,ua=1012,df=1013,vr=1014,es=1015,La=1016,ff=1017,hf=1018,da=1020,Iv=35902,Uv=1021,Nv=1022,mi=1023,fa=1026,ha=1027,Ov=1028,pf=1029,Fv=1030,mf=1031,gf=1033,wl=33776,Sl=33777,Ml=33778,El=33779,Zu=35840,Qu=35841,Ju=35842,ed=35843,td=36196,nd=37492,id=37496,sd=37808,rd=37809,od=37810,ad=37811,ld=37812,cd=37813,ud=37814,dd=37815,fd=37816,hd=37817,pd=37818,md=37819,gd=37820,vd=37821,Tl=36492,_d=36494,bd=36495,kv=36283,xd=36284,yd=36285,wd=36286,ZA=3200,QA=3201,Bv=0,JA=1,ws="",gn="srgb",yo="srgb-linear",jl="linear",Lt="srgb",Tr=7680,jh=519,e1=512,t1=513,n1=514,Hv=515,i1=516,s1=517,r1=518,o1=519,qh=35044,Yh="300 es",Di=2e3,ql=2001;class Sr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Al=Math.PI/180,Sd=180/Math.PI;function Ia(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[t&255]+hn[t>>8&255]+hn[t>>16&255]+hn[t>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[n&63|128]+hn[n>>8&255]+"-"+hn[n>>16&255]+hn[n>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function gt(t,e,n){return Math.max(e,Math.min(n,t))}function a1(t,e){return(t%e+e)%e}function Hc(t,e,n){return(1-n)*t+n*e}function ko(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Nn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const l1={DEG2RAD:Al};class lt{constructor(e=0,n=0){lt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _r{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const f=r[o+0],h=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=h,e[n+2]=g,e[n+3]=v;return}if(d!==v||l!==f||c!==h||u!==g){let m=1-a;const p=l*f+c*h+u*g+d*v,C=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const U=Math.sqrt(E),I=Math.atan2(U,p*C);m=Math.sin(m*I)/U,a=Math.sin(a*I)/U}const y=a*C;if(l=l*m+f*y,c=c*m+h*y,u=u*m+g*y,d=d*m+v*y,m===1-a){const U=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=U,c*=U,u*=U,d*=U}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],h=r[o+2],g=r[o+3];return e[n]=a*g+u*d+l*h-c*f,e[n+1]=l*g+u*f+c*d-a*h,e[n+2]=c*g+u*h+a*f-l*d,e[n+3]=u*g-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),h=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"YZX":this._x=f*u*d+c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d-f*h*g;break;case"XZY":this._x=f*u*d-c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-n;return this._w=h*o+n*this._w,this._x=h*i+n*this._x,this._y=h*s+n*this._y,this._z=h*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,n=0,i=0){J.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Kh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Kh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),d=2*(r*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zc.copy(this).projectOnVector(e),this.sub(zc)}reflect(e){return this.sub(zc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zc=new J,Kh=new _r;class pt{constructor(e,n,i,s,r,o,a,l,c){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],v=s[0],m=s[3],p=s[6],C=s[1],E=s[4],y=s[7],U=s[2],I=s[5],R=s[8];return r[0]=o*v+a*C+l*U,r[3]=o*m+a*E+l*I,r[6]=o*p+a*y+l*R,r[1]=c*v+u*C+d*U,r[4]=c*m+u*E+d*I,r[7]=c*p+u*y+d*R,r[2]=f*v+h*C+g*U,r[5]=f*m+h*E+g*I,r[8]=f*p+h*y+g*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*r,h=c*r-o*l,g=n*d+i*f+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=f*v,e[4]=(u*n-s*l)*v,e[5]=(s*r-a*n)*v,e[6]=h*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*r)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Vc.makeScale(e,n)),this}rotate(e){return this.premultiply(Vc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Vc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vc=new pt;function zv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function pa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function c1(){const t=pa("canvas");return t.style.display="block",t}const Zh={};function to(t){t in Zh||(Zh[t]=!0,console.warn(t))}function u1(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const Qh=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jh=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function d1(){const t={enabled:!0,workingColorSpace:yo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Lt&&(s.r=ss(s.r),s.g=ss(s.g),s.b=ss(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Lt&&(s.r=no(s.r),s.g=no(s.g),s.b=no(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ws?jl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return to("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return to("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[yo]:{primaries:e,whitePoint:i,transfer:jl,toXYZ:Qh,fromXYZ:Jh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:e,whitePoint:i,transfer:Lt,toXYZ:Qh,fromXYZ:Jh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),t}const Mt=d1();function ss(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function no(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ar;class f1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ar===void 0&&(Ar=pa("canvas")),Ar.width=e.width,Ar.height=e.height;const s=Ar.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ar}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=pa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ss(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ss(n[i]/255)*255):n[i]=ss(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let h1=0;class vf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:h1++}),this.uuid=Ia(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Gc(s[o].image)):r.push(Gc(s[o]))}else r=Gc(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Gc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?f1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let p1=0;const Wc=new J;class Rn extends Sr{constructor(e=Rn.DEFAULT_IMAGE,n=Rn.DEFAULT_MAPPING,i=or,s=or,r=Pi,o=ar,a=mi,l=Fi,c=Rn.DEFAULT_ANISOTROPY,u=ws){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:p1++}),this.uuid=Ia(),this.name="",this.source=new vf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wc).x}get height(){return this.source.getSize(Wc).y}get depth(){return this.source.getSize(Wc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yu:e.x=e.x-Math.floor(e.x);break;case or:e.x=e.x<0?0:1;break;case Ku:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yu:e.y=e.y-Math.floor(e.y);break;case or:e.y=e.y<0?0:1;break;case Ku:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Pv;Rn.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,n=0,i=0,s=1){jt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,y=(h+1)/2,U=(p+1)/2,I=(u+f)/4,R=(d+v)/4,k=(g+m)/4;return E>y&&E>U?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=I/i,r=R/i):y>U?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=I/s,r=k/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=R/r,s=k/r),this.set(i,s,r,n),this}let C=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(C)<.001&&(C=1),this.x=(m-g)/C,this.y=(d-v)/C,this.z=(f-u)/C,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this.w=gt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this.w=gt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class m1 extends Sr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new jt(0,0,e,n),this.scissorTest=!1,this.viewport=new jt(0,0,e,n);const s={width:e,height:n,depth:i.depth},r=new Rn(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Pi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new vf(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class br extends m1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Vv extends Rn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=_i,this.minFilter=_i,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class g1 extends Rn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=_i,this.minFilter=_i,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ua{constructor(e=new J(1/0,1/0,1/0),n=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(li.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(li.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=li.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,li):li.fromBufferAttribute(r,o),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ja.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ja.copy(i.boundingBox)),ja.applyMatrix4(e.matrixWorld),this.union(ja)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),qa.subVectors(this.max,Bo),Cr.subVectors(e.a,Bo),Rr.subVectors(e.b,Bo),Pr.subVectors(e.c,Bo),cs.subVectors(Rr,Cr),us.subVectors(Pr,Rr),qs.subVectors(Cr,Pr);let n=[0,-cs.z,cs.y,0,-us.z,us.y,0,-qs.z,qs.y,cs.z,0,-cs.x,us.z,0,-us.x,qs.z,0,-qs.x,-cs.y,cs.x,0,-us.y,us.x,0,-qs.y,qs.x,0];return!$c(n,Cr,Rr,Pr,qa)||(n=[1,0,0,0,1,0,0,0,1],!$c(n,Cr,Rr,Pr,qa))?!1:(Ya.crossVectors(cs,us),n=[Ya.x,Ya.y,Ya.z],$c(n,Cr,Rr,Pr,qa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vi=[new J,new J,new J,new J,new J,new J,new J,new J],li=new J,ja=new Ua,Cr=new J,Rr=new J,Pr=new J,cs=new J,us=new J,qs=new J,Bo=new J,qa=new J,Ya=new J,Ys=new J;function $c(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){Ys.fromArray(t,r);const a=s.x*Math.abs(Ys.x)+s.y*Math.abs(Ys.y)+s.z*Math.abs(Ys.z),l=e.dot(Ys),c=n.dot(Ys),u=i.dot(Ys);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const v1=new Ua,Ho=new J,Xc=new J;class _f{constructor(e=new J,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):v1.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);const n=Ho.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Ho,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(Xc)),this.expandByPoint(Ho.copy(e.center).sub(Xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Gi=new J,jc=new J,Ka=new J,ds=new J,qc=new J,Za=new J,Yc=new J;class Gv{constructor(e=new J,n=new J(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Gi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,n),Gi.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){jc.copy(e).add(n).multiplyScalar(.5),Ka.copy(n).sub(e).normalize(),ds.copy(this.origin).sub(jc);const r=e.distanceTo(n)*.5,o=-this.direction.dot(Ka),a=ds.dot(this.direction),l=-ds.dot(Ka),c=ds.lengthSq(),u=Math.abs(1-o*o);let d,f,h,g;if(u>0)if(d=o*l-a,f=o*a-l,g=r*u,d>=0)if(f>=-g)if(f<=g){const v=1/u;d*=v,f*=v,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(jc).addScaledVector(Ka,f),h}intersectSphere(e,n){Gi.subVectors(e.center,this.origin);const i=Gi.dot(this.direction),s=Gi.dot(Gi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,n,i,s,r){qc.subVectors(n,e),Za.subVectors(i,e),Yc.crossVectors(qc,Za);let o=this.direction.dot(Yc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ds.subVectors(this.origin,e);const l=a*this.direction.dot(Za.crossVectors(ds,Za));if(l<0)return null;const c=a*this.direction.dot(qc.cross(ds));if(c<0||l+c>o)return null;const u=-a*ds.dot(Yc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(e,n,i,s,r,o,a,l,c,u,d,f,h,g,v,m){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,d,f,h,g,v,m)}set(e,n,i,s,r,o,a,l,c,u,d,f,h,g,v,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/Dr.setFromMatrixColumn(e,0).length(),r=1/Dr.setFromMatrixColumn(e,1).length(),o=1/Dr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,h=o*d,g=a*u,v=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=h+g*c,n[5]=f-v*c,n[9]=-a*l,n[2]=v-f*c,n[6]=g+h*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,g=c*u,v=c*d;n[0]=f+v*a,n[4]=g*a-h,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=h*a-g,n[6]=v+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,g=c*u,v=c*d;n[0]=f-v*a,n[4]=-o*d,n[8]=g+h*a,n[1]=h+g*a,n[5]=o*u,n[9]=v-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,h=o*d,g=a*u,v=a*d;n[0]=l*u,n[4]=g*c-h,n[8]=f*c+v,n[1]=l*d,n[5]=v*c+f,n[9]=h*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=v-f*d,n[8]=g*d+h,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*d+g,n[10]=f-v*d}else if(e.order==="XZY"){const f=o*l,h=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+v,n[5]=o*u,n[9]=h*d-g,n[2]=g*d-h,n[6]=a*u,n[10]=v*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_1,e,b1)}lookAt(e,n,i){const s=this.elements;return $n.subVectors(e,n),$n.lengthSq()===0&&($n.z=1),$n.normalize(),fs.crossVectors(i,$n),fs.lengthSq()===0&&(Math.abs(i.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),fs.crossVectors(i,$n)),fs.normalize(),Qa.crossVectors($n,fs),s[0]=fs.x,s[4]=Qa.x,s[8]=$n.x,s[1]=fs.y,s[5]=Qa.y,s[9]=$n.y,s[2]=fs.z,s[6]=Qa.z,s[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],v=i[6],m=i[10],p=i[14],C=i[3],E=i[7],y=i[11],U=i[15],I=s[0],R=s[4],k=s[8],w=s[12],M=s[1],L=s[5],N=s[9],O=s[13],D=s[2],V=s[6],W=s[10],ee=s[14],Y=s[3],xe=s[7],Me=s[11],Le=s[15];return r[0]=o*I+a*M+l*D+c*Y,r[4]=o*R+a*L+l*V+c*xe,r[8]=o*k+a*N+l*W+c*Me,r[12]=o*w+a*O+l*ee+c*Le,r[1]=u*I+d*M+f*D+h*Y,r[5]=u*R+d*L+f*V+h*xe,r[9]=u*k+d*N+f*W+h*Me,r[13]=u*w+d*O+f*ee+h*Le,r[2]=g*I+v*M+m*D+p*Y,r[6]=g*R+v*L+m*V+p*xe,r[10]=g*k+v*N+m*W+p*Me,r[14]=g*w+v*O+m*ee+p*Le,r[3]=C*I+E*M+y*D+U*Y,r[7]=C*R+E*L+y*V+U*xe,r[11]=C*k+E*N+y*W+U*Me,r[15]=C*w+E*O+y*ee+U*Le,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*h-i*l*h)+v*(+n*l*h-n*c*f+r*o*f-s*o*h+s*c*u-r*l*u)+m*(+n*c*d-n*a*h-r*o*d+i*o*h+r*a*u-i*c*u)+p*(-s*a*u-n*l*d+n*a*f+s*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],v=e[13],m=e[14],p=e[15],C=d*m*c-v*f*c+v*l*h-a*m*h-d*l*p+a*f*p,E=g*f*c-u*m*c-g*l*h+o*m*h+u*l*p-o*f*p,y=u*v*c-g*d*c+g*a*h-o*v*h-u*a*p+o*d*p,U=g*d*l-u*v*l-g*a*f+o*v*f+u*a*m-o*d*m,I=n*C+i*E+s*y+r*U;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/I;return e[0]=C*R,e[1]=(v*f*r-d*m*r-v*s*h+i*m*h+d*s*p-i*f*p)*R,e[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*p+i*l*p)*R,e[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*h-i*l*h)*R,e[4]=E*R,e[5]=(u*m*r-g*f*r+g*s*h-n*m*h-u*s*p+n*f*p)*R,e[6]=(g*l*r-o*m*r-g*s*c+n*m*c+o*s*p-n*l*p)*R,e[7]=(o*f*r-u*l*r+u*s*c-n*f*c-o*s*h+n*l*h)*R,e[8]=y*R,e[9]=(g*d*r-u*v*r-g*i*h+n*v*h+u*i*p-n*d*p)*R,e[10]=(o*v*r-g*a*r+g*i*c-n*v*c-o*i*p+n*a*p)*R,e[11]=(u*a*r-o*d*r-u*i*c+n*d*c+o*i*h-n*a*h)*R,e[12]=U*R,e[13]=(u*v*s-g*d*s+g*i*f-n*v*f-u*i*m+n*d*m)*R,e[14]=(g*a*s-o*v*s-g*i*l+n*v*l+o*i*m-n*a*m)*R,e[15]=(o*d*s-u*a*s+u*i*l-n*d*l-o*i*f+n*a*f)*R,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,d=a+a,f=r*c,h=r*u,g=r*d,v=o*u,m=o*d,p=a*d,C=l*c,E=l*u,y=l*d,U=i.x,I=i.y,R=i.z;return s[0]=(1-(v+p))*U,s[1]=(h+y)*U,s[2]=(g-E)*U,s[3]=0,s[4]=(h-y)*I,s[5]=(1-(f+p))*I,s[6]=(m+C)*I,s[7]=0,s[8]=(g+E)*R,s[9]=(m-C)*R,s[10]=(1-(f+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let r=Dr.set(s[0],s[1],s[2]).length();const o=Dr.set(s[4],s[5],s[6]).length(),a=Dr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ci.copy(this);const c=1/r,u=1/o,d=1/a;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=u,ci.elements[5]*=u,ci.elements[6]*=u,ci.elements[8]*=d,ci.elements[9]*=d,ci.elements[10]*=d,n.setFromRotationMatrix(ci),i.x=r,i.y=o,i.z=a,this}makePerspective(e,n,i,s,r,o,a=Di,l=!1){const c=this.elements,u=2*r/(n-e),d=2*r/(i-s),f=(n+e)/(n-e),h=(i+s)/(i-s);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===Di)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===ql)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=Di,l=!1){const c=this.elements,u=2/(n-e),d=2/(i-s),f=-(n+e)/(n-e),h=-(i+s)/(i-s);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===Di)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===ql)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Dr=new J,ci=new Zt,_1=new J(0,0,0),b1=new J(1,1,1),fs=new J,Qa=new J,$n=new J,ep=new Zt,tp=new _r;class ki{constructor(e=0,n=0,i=0,s=ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(n){case"XYZ":this._y=Math.asin(gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ep.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ep,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return tp.setFromEuler(this),this.setFromQuaternion(tp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ki.DEFAULT_ORDER="XYZ";class Wv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let x1=0;const np=new J,Lr=new _r,Wi=new Zt,Ja=new J,zo=new J,y1=new J,w1=new _r,ip=new J(1,0,0),sp=new J(0,1,0),rp=new J(0,0,1),op={type:"added"},S1={type:"removed"},Ir={type:"childadded",child:null},Kc={type:"childremoved",child:null};class bn extends Sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:x1++}),this.uuid=Ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new J,n=new ki,i=new _r,s=new J(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Zt},normalMatrix:{value:new pt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Lr.setFromAxisAngle(e,n),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(e,n){return Lr.setFromAxisAngle(e,n),this.quaternion.premultiply(Lr),this}rotateX(e){return this.rotateOnAxis(ip,e)}rotateY(e){return this.rotateOnAxis(sp,e)}rotateZ(e){return this.rotateOnAxis(rp,e)}translateOnAxis(e,n){return np.copy(e).applyQuaternion(this.quaternion),this.position.add(np.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ip,e)}translateY(e){return this.translateOnAxis(sp,e)}translateZ(e){return this.translateOnAxis(rp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ja.copy(e):Ja.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(zo,Ja,this.up):Wi.lookAt(Ja,zo,this.up),this.quaternion.setFromRotationMatrix(Wi),s&&(Wi.extractRotation(s.matrixWorld),Lr.setFromRotationMatrix(Wi),this.quaternion.premultiply(Lr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(op),Ir.child=e,this.dispatchEvent(Ir),Ir.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(S1),Kc.child=e,this.dispatchEvent(Kc),Kc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(op),Ir.child=e,this.dispatchEvent(Ir),Ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,y1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,w1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}bn.DEFAULT_UP=new J(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new J,$i=new J,Zc=new J,Xi=new J,Ur=new J,Nr=new J,ap=new J,Qc=new J,Jc=new J,eu=new J,tu=new jt,nu=new jt,iu=new jt;class pi{constructor(e=new J,n=new J,i=new J){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),ui.subVectors(e,n),s.cross(ui);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){ui.subVectors(s,n),$i.subVectors(i,n),Zc.subVectors(e,n);const o=ui.dot(ui),a=ui.dot($i),l=ui.dot(Zc),c=$i.dot($i),u=$i.dot(Zc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-h-g,g,h)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,Xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xi.x),l.addScaledVector(o,Xi.y),l.addScaledVector(a,Xi.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return tu.setScalar(0),nu.setScalar(0),iu.setScalar(0),tu.fromBufferAttribute(e,n),nu.fromBufferAttribute(e,i),iu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(tu,r.x),o.addScaledVector(nu,r.y),o.addScaledVector(iu,r.z),o}static isFrontFacing(e,n,i,s){return ui.subVectors(i,n),$i.subVectors(e,n),ui.cross($i).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),ui.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return pi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return pi.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;Ur.subVectors(s,i),Nr.subVectors(r,i),Qc.subVectors(e,i);const l=Ur.dot(Qc),c=Nr.dot(Qc);if(l<=0&&c<=0)return n.copy(i);Jc.subVectors(e,s);const u=Ur.dot(Jc),d=Nr.dot(Jc);if(u>=0&&d<=u)return n.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Ur,o);eu.subVectors(e,r);const h=Ur.dot(eu),g=Nr.dot(eu);if(g>=0&&h<=g)return n.copy(r);const v=h*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Nr,a);const m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return ap.subVectors(r,s),a=(d-u)/(d-u+(h-g)),n.copy(s).addScaledVector(ap,a);const p=1/(m+v+f);return o=v*p,a=f*p,n.copy(i).addScaledVector(Ur,o).addScaledVector(Nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $v={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},el={h:0,s:0,l:0};function su(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class yt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=Mt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Mt.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=Mt.workingColorSpace){if(e=a1(e,1),n=gt(n,0,1),i=gt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=su(o,r,e+1/3),this.g=su(o,r,e),this.b=su(o,r,e-1/3)}return Mt.colorSpaceToWorking(this,s),this}setStyle(e,n=gn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=gn){const i=$v[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}copyLinearToSRGB(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return Mt.workingToColorSpace(pn.copy(this),e),Math.round(gt(pn.r*255,0,255))*65536+Math.round(gt(pn.g*255,0,255))*256+Math.round(gt(pn.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Mt.workingColorSpace){Mt.workingToColorSpace(pn.copy(this),n);const i=pn.r,s=pn.g,r=pn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Mt.workingColorSpace){return Mt.workingToColorSpace(pn.copy(this),n),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=gn){Mt.workingToColorSpace(pn.copy(this),e);const n=pn.r,i=pn.g,s=pn.b;return e!==gn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(hs),this.setHSL(hs.h+e,hs.s+n,hs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(hs),e.getHSL(el);const i=Hc(hs.h,el.h,n),s=Hc(hs.s,el.s,n),r=Hc(hs.l,el.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new yt;yt.NAMES=$v;let M1=0;class Na extends Sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M1++}),this.uuid=Ia(),this.name="",this.type="Material",this.blending=eo,this.side=Os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ku,this.blendDst=Bu,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=_o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==eo&&(i.blending=this.blending),this.side!==Os&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ku&&(i.blendSrc=this.blendSrc),this.blendDst!==Bu&&(i.blendDst=this.blendDst),this.blendEquation!==ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_o&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Tr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Tr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xv extends Na{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=Rv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new J,tl=new lt;let E1=0;class Ii{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:E1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=qh,this.updateRanges=[],this.gpuType=es,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)tl.fromBufferAttribute(this,n),tl.applyMatrix3(e),this.setXY(n,tl.x,tl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.applyMatrix3(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.applyMatrix4(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.applyNormalMatrix(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.transformDirection(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ko(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Nn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ko(n,this.array)),n}setX(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ko(n,this.array)),n}setY(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ko(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ko(n,this.array)),n}setW(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Nn(n,this.array),i=Nn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=Nn(n,this.array),i=Nn(i,this.array),s=Nn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=Nn(n,this.array),i=Nn(i,this.array),s=Nn(s,this.array),r=Nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qh&&(e.usage=this.usage),e}}class jv extends Ii{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class qv extends Ii{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ui extends Ii{constructor(e,n,i){super(new Float32Array(e),n,i)}}let T1=0;const ii=new Zt,ru=new bn,Or=new J,Xn=new Ua,Vo=new Ua,on=new J;class zs extends Sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:T1++}),this.uuid=Ia(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zv(e)?qv:jv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new pt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,n,i){return ii.makeTranslation(e,n,i),this.applyMatrix4(ii),this}scale(e,n,i){return ii.makeScale(e,n,i),this.applyMatrix4(ii),this}lookAt(e){return ru.lookAt(e),ru.updateMatrix(),this.applyMatrix4(ru.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ui(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ua);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Xn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _f);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const i=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Vo.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Xn.min,Vo.min),Xn.expandByPoint(on),on.addVectors(Xn.max,Vo.max),Xn.expandByPoint(on)):(Xn.expandByPoint(Vo.min),Xn.expandByPoint(Vo.max))}Xn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)on.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(on));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)on.fromBufferAttribute(a,c),l&&(Or.fromBufferAttribute(e,c),on.add(Or)),s=Math.max(s,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ii(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let k=0;k<i.count;k++)a[k]=new J,l[k]=new J;const c=new J,u=new J,d=new J,f=new lt,h=new lt,g=new lt,v=new J,m=new J;function p(k,w,M){c.fromBufferAttribute(i,k),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,M),f.fromBufferAttribute(r,k),h.fromBufferAttribute(r,w),g.fromBufferAttribute(r,M),u.sub(c),d.sub(c),h.sub(f),g.sub(f);const L=1/(h.x*g.y-g.x*h.y);isFinite(L)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(L),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(L),a[k].add(v),a[w].add(v),a[M].add(v),l[k].add(m),l[w].add(m),l[M].add(m))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let k=0,w=C.length;k<w;++k){const M=C[k],L=M.start,N=M.count;for(let O=L,D=L+N;O<D;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const E=new J,y=new J,U=new J,I=new J;function R(k){U.fromBufferAttribute(s,k),I.copy(U);const w=a[k];E.copy(w),E.sub(U.multiplyScalar(U.dot(w))).normalize(),y.crossVectors(I,w);const L=y.dot(l[k])<0?-1:1;o.setXYZW(k,E.x,E.y,E.z,L)}for(let k=0,w=C.length;k<w;++k){const M=C[k],L=M.start,N=M.count;for(let O=L,D=L+N;O<D;O+=3)R(e.getX(O+0)),R(e.getX(O+1)),R(e.getX(O+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ii(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const s=new J,r=new J,o=new J,a=new J,l=new J,c=new J,u=new J,d=new J;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=n.count;f<h;f+=3)s.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)on.fromBufferAttribute(e,n),on.normalize(),e.setXYZ(n,on.x,on.y,on.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?h=l[v]*a.data.stride+a.offset:h=l[v]*u;for(let p=0;p<u;p++)f[g++]=c[h++]}return new Ii(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new zs,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lp=new Zt,Ks=new Gv,nl=new _f,cp=new J,il=new J,sl=new J,rl=new J,ou=new J,ol=new J,up=new J,al=new J;class gi extends bn{constructor(e=new zs,n=new Xv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ol.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(ou.fromBufferAttribute(d,e),o?ol.addScaledVector(ou,u):ol.addScaledVector(ou.sub(n),u))}n.add(ol)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),nl.copy(i.boundingSphere),nl.applyMatrix4(r),Ks.copy(e.ray).recast(e.near),!(nl.containsPoint(Ks.origin)===!1&&(Ks.intersectSphere(nl,cp)===null||Ks.origin.distanceToSquared(cp)>(e.far-e.near)**2))&&(lp.copy(r).invert(),Ks.copy(e.ray).applyMatrix4(lp),!(i.boundingBox!==null&&Ks.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ks)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],C=Math.max(m.start,h.start),E=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let y=C,U=E;y<U;y+=3){const I=a.getX(y),R=a.getX(y+1),k=a.getX(y+2);s=ll(this,p,e,i,c,u,d,I,R,k),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const C=a.getX(m),E=a.getX(m+1),y=a.getX(m+2);s=ll(this,o,e,i,c,u,d,C,E,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],C=Math.max(m.start,h.start),E=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let y=C,U=E;y<U;y+=3){const I=y,R=y+1,k=y+2;s=ll(this,p,e,i,c,u,d,I,R,k),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const C=m,E=m+1,y=m+2;s=ll(this,o,e,i,c,u,d,C,E,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function A1(t,e,n,i,s,r,o,a){let l;if(e.side===zn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Os,a),l===null)return null;al.copy(a),al.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(al);return c<n.near||c>n.far?null:{distance:c,point:al.clone(),object:t}}function ll(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,il),t.getVertexPosition(l,sl),t.getVertexPosition(c,rl);const u=A1(t,e,n,i,il,sl,rl,up);if(u){const d=new J;pi.getBarycoord(up,il,sl,rl,d),s&&(u.uv=pi.getInterpolatedAttribute(s,a,l,c,d,new lt)),r&&(u.uv1=pi.getInterpolatedAttribute(r,a,l,c,d,new lt)),o&&(u.normal=pi.getInterpolatedAttribute(o,a,l,c,d,new J),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new J,materialIndex:0};pi.getNormal(il,sl,rl,f.normal),u.face=f,u.barycoord=d}return u}class Oa extends zs{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,i,n,e,o,r,0),g("z","y","x",1,-1,i,n,-e,o,r,1),g("x","z","y",1,1,e,i,n,s,o,2),g("x","z","y",1,-1,e,i,-n,s,o,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ui(c,3)),this.setAttribute("normal",new Ui(u,3)),this.setAttribute("uv",new Ui(d,2));function g(v,m,p,C,E,y,U,I,R,k,w){const M=y/R,L=U/k,N=y/2,O=U/2,D=I/2,V=R+1,W=k+1;let ee=0,Y=0;const xe=new J;for(let Me=0;Me<W;Me++){const Le=Me*L-O;for(let We=0;We<V;We++){const _t=We*M-N;xe[v]=_t*C,xe[m]=Le*E,xe[p]=D,c.push(xe.x,xe.y,xe.z),xe[v]=0,xe[m]=0,xe[p]=I>0?1:-1,u.push(xe.x,xe.y,xe.z),d.push(We/R),d.push(1-Me/k),ee+=1}}for(let Me=0;Me<k;Me++)for(let Le=0;Le<R;Le++){const We=f+Le+V*Me,_t=f+Le+V*(Me+1),Qe=f+(Le+1)+V*(Me+1),ie=f+(Le+1)+V*Me;l.push(We,_t,ie),l.push(_t,Qe,ie),Y+=6}a.addGroup(h,Y,w),h+=Y,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function Sn(t){const e={};for(let n=0;n<t.length;n++){const i=wo(t[n]);for(const s in i)e[s]=i[s]}return e}function C1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Yv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const R1={clone:wo,merge:Sn};var P1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,D1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fs extends Na{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=P1,this.fragmentShader=D1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wo(e.uniforms),this.uniformsGroups=C1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Kv extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ps=new J,dp=new lt,fp=new lt;class qn extends Kv{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Sd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Al*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sd*2*Math.atan(Math.tan(Al*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ps.x,ps.y).multiplyScalar(-e/ps.z),ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ps.x,ps.y).multiplyScalar(-e/ps.z)}getViewSize(e,n){return this.getViewBounds(e,dp,fp),n.subVectors(fp,dp)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Al*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Fr=-90,kr=1;class L1 extends bn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qn(Fr,kr,e,n);s.layers=this.layers,this.add(s);const r=new qn(Fr,kr,e,n);r.layers=this.layers,this.add(r);const o=new qn(Fr,kr,e,n);o.layers=this.layers,this.add(o);const a=new qn(Fr,kr,e,n);a.layers=this.layers,this.add(a);const l=new qn(Fr,kr,e,n);l.layers=this.layers,this.add(l);const c=new qn(Fr,kr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===Di)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ql)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,o),e.setRenderTarget(i,2,s),e.render(n,a),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(n,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Zv extends Rn{constructor(e=[],n=bo,i,s,r,o,a,l,c,u){super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class I1 extends br{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Zv(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Oa(5,5,5),r=new Fs({name:"CubemapFromEquirect",uniforms:wo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zn,blending:Is});r.uniforms.tEquirect.value=n;const o=new gi(s,r),a=n.minFilter;return n.minFilter===ar&&(n.minFilter=Pi),new L1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}class cl extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const U1={type:"move"};class au{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;c.inputState.pinching&&f>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(U1)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new cl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Qv extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const lu=new J,N1=new J,O1=new pt;class xs{constructor(e=new J(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=lu.subVectors(i,n).cross(N1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(lu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||O1.getNormalMatrix(e),s=this.coplanarPoint(lu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zs=new _f,F1=new lt(.5,.5),ul=new J;class bf{constructor(e=new xs,n=new xs,i=new xs,s=new xs,r=new xs,o=new xs){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Di,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],f=r[6],h=r[7],g=r[8],v=r[9],m=r[10],p=r[11],C=r[12],E=r[13],y=r[14],U=r[15];if(s[0].setComponents(c-o,h-u,p-g,U-C).normalize(),s[1].setComponents(c+o,h+u,p+g,U+C).normalize(),s[2].setComponents(c+a,h+d,p+v,U+E).normalize(),s[3].setComponents(c-a,h-d,p-v,U-E).normalize(),i)s[4].setComponents(l,f,m,y).normalize(),s[5].setComponents(c-l,h-f,p-m,U-y).normalize();else if(s[4].setComponents(c-l,h-f,p-m,U-y).normalize(),n===Di)s[5].setComponents(c+l,h+f,p+m,U+y).normalize();else if(n===ql)s[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zs)}intersectsSprite(e){Zs.center.set(0,0,0);const n=F1.distanceTo(e.center);return Zs.radius=.7071067811865476+n,Zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zs)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(ul.x=s.normal.x>0?e.max.x:e.min.x,ul.y=s.normal.y>0?e.max.y:e.min.y,ul.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ul)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jv extends Rn{constructor(e,n,i=vr,s,r,o,a=_i,l=_i,c,u=fa,d=1){if(u!==fa&&u!==ha)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class mc extends zs{constructor(e=1,n=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],f=[],h=[];let g=0;const v=[],m=i/2;let p=0;C(),o===!1&&(e>0&&E(!0),n>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new Ui(d,3)),this.setAttribute("normal",new Ui(f,3)),this.setAttribute("uv",new Ui(h,2));function C(){const y=new J,U=new J;let I=0;const R=(n-e)/i;for(let k=0;k<=r;k++){const w=[],M=k/r,L=M*(n-e)+e;for(let N=0;N<=s;N++){const O=N/s,D=O*l+a,V=Math.sin(D),W=Math.cos(D);U.x=L*V,U.y=-M*i+m,U.z=L*W,d.push(U.x,U.y,U.z),y.set(V,R,W).normalize(),f.push(y.x,y.y,y.z),h.push(O,1-M),w.push(g++)}v.push(w)}for(let k=0;k<s;k++)for(let w=0;w<r;w++){const M=v[w][k],L=v[w+1][k],N=v[w+1][k+1],O=v[w][k+1];(e>0||w!==0)&&(u.push(M,L,O),I+=3),(n>0||w!==r-1)&&(u.push(L,N,O),I+=3)}c.addGroup(p,I,0),p+=I}function E(y){const U=g,I=new lt,R=new J;let k=0;const w=y===!0?e:n,M=y===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,m*M,0),f.push(0,M,0),h.push(.5,.5),g++;const L=g;for(let N=0;N<=s;N++){const D=N/s*l+a,V=Math.cos(D),W=Math.sin(D);R.x=w*W,R.y=m*M,R.z=w*V,d.push(R.x,R.y,R.z),f.push(0,M,0),I.x=V*.5+.5,I.y=W*.5*M+.5,h.push(I.x,I.y),g++}for(let N=0;N<s;N++){const O=U+N,D=L+N;y===!0?u.push(D,D+1,O):u.push(D+1,D,O),k+=3}c.addGroup(p,k,y===!0?1:2),p+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gc extends zs{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,f=n/l,h=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const C=p*f-o;for(let E=0;E<c;E++){const y=E*d-r;g.push(y,-C,0),v.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let C=0;C<a;C++){const E=C+c*p,y=C+c*(p+1),U=C+1+c*(p+1),I=C+1+c*p;h.push(E,y,I),h.push(y,U,I)}this.setIndex(h),this.setAttribute("position",new Ui(g,3)),this.setAttribute("normal",new Ui(v,3)),this.setAttribute("uv",new Ui(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gc(e.width,e.height,e.widthSegments,e.heightSegments)}}class k1 extends Na{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bv,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yl extends k1{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class B1 extends Na{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ZA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class H1 extends Na{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cu={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class z1{constructor(e,n,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const h=c[d],g=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const V1=new z1;class xf{constructor(e){this.manager=e!==void 0?e:V1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}xf.DEFAULT_MATERIAL_NAME="__DEFAULT";const Br=new WeakMap;class G1 extends xf{constructor(e){super(e)}load(e,n,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=cu.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){n&&n(o),r.manager.itemEnd(e)},0);else{let d=Br.get(o);d===void 0&&(d=[],Br.set(o,d)),d.push({onLoad:n,onError:s})}return o}const a=pa("img");function l(){u(),n&&n(this);const d=Br.get(this)||[];for(let f=0;f<d.length;f++){const h=d[f];h.onLoad&&h.onLoad(this)}Br.delete(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),cu.remove(`image:${e}`);const f=Br.get(this)||[];for(let h=0;h<f.length;h++){const g=f[h];g.onError&&g.onError(d)}Br.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),cu.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class e_ extends xf{constructor(e){super(e)}load(e,n,i,s){const r=new Rn,o=new G1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,n!==void 0&&n(r)},i,s),r}}class t_ extends bn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const uu=new Zt,hp=new J,pp=new J;class W1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=Fi,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bf,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;hp.setFromMatrixPosition(e.matrixWorld),n.position.copy(hp),pp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(pp),n.updateMatrixWorld(),uu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uu,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(uu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class n_ extends Kv{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class $1 extends W1{constructor(){super(new n_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Md extends t_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new $1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class i_ extends t_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class X1 extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class mp{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(gt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class j1 extends Sr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function gp(t,e,n,i){const s=q1(i);switch(n){case Uv:return t*e;case Ov:return t*e/s.components*s.byteLength;case pf:return t*e/s.components*s.byteLength;case Fv:return t*e*2/s.components*s.byteLength;case mf:return t*e*2/s.components*s.byteLength;case Nv:return t*e*3/s.components*s.byteLength;case mi:return t*e*4/s.components*s.byteLength;case gf:return t*e*4/s.components*s.byteLength;case wl:case Sl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ml:case El:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qu:case ed:return Math.max(t,16)*Math.max(e,8)/4;case Zu:case Ju:return Math.max(t,8)*Math.max(e,8)/2;case td:case nd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case id:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case rd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case od:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ad:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ld:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case cd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case ud:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case dd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case fd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case hd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case pd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case md:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case gd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case vd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Tl:case _d:case bd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case kv:case xd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case yd:case wd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function q1(t){switch(t){case Fi:case Dv:return{byteLength:1,components:1};case ua:case Lv:case La:return{byteLength:2,components:1};case ff:case hf:return{byteLength:2,components:4};case vr:case df:case es:return{byteLength:4,components:1};case Iv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function s_(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function Y1(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],v=d[h];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const v=d[h];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var K1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Z1=`#ifdef USE_ALPHAHASH
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
#endif`,Q1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,J1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nC=`#ifdef USE_AOMAP
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
#endif`,iC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sC=`#ifdef USE_BATCHING
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
#endif`,rC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cC=`#ifdef USE_IRIDESCENCE
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
#endif`,uC=`#ifdef USE_BUMPMAP
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
#endif`,dC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_C=`#if defined( USE_COLOR_ALPHA )
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
#endif`,bC=`#define PI 3.141592653589793
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
} // validated`,xC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yC=`vec3 transformedNormal = objectNormal;
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
#endif`,wC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,MC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,EC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TC="gl_FragColor = linearToOutputTexel( gl_FragColor );",AC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,CC=`#ifdef USE_ENVMAP
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
#endif`,RC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,PC=`#ifdef USE_ENVMAP
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
#endif`,DC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,LC=`#ifdef USE_ENVMAP
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
#endif`,IC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,NC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FC=`#ifdef USE_GRADIENTMAP
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
}`,kC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,BC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zC=`uniform bool receiveShadow;
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
#endif`,VC=`#ifdef USE_ENVMAP
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
#endif`,GC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$C=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jC=`PhysicalMaterial material;
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
#endif`,qC=`struct PhysicalMaterial {
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
}`,YC=`
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
#endif`,KC=`#if defined( RE_IndirectDiffuse )
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
#endif`,ZC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QC=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JC=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,n2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,i2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,s2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,r2=`#if defined( USE_POINTS_UV )
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
#endif`,o2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,c2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d2=`#ifdef USE_MORPHTARGETS
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
#endif`,f2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,p2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,m2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_2=`#ifdef USE_NORMALMAP
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
#endif`,b2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,w2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,E2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,U2=`float getShadowMask() {
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
}`,N2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O2=`#ifdef USE_SKINNING
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
#endif`,F2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k2=`#ifdef USE_SKINNING
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
#endif`,B2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,z2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,G2=`#ifdef USE_TRANSMISSION
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
#endif`,W2=`#ifdef USE_TRANSMISSION
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
#endif`,$2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Y2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K2=`uniform sampler2D t2D;
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
}`,Z2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,J2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tR=`#include <common>
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
}`,nR=`#if DEPTH_PACKING == 3200
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
}`,iR=`#define DISTANCE
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
}`,sR=`#define DISTANCE
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
}`,rR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aR=`uniform float scale;
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
}`,lR=`uniform vec3 diffuse;
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
}`,cR=`#include <common>
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
}`,uR=`uniform vec3 diffuse;
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
}`,dR=`#define LAMBERT
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
}`,fR=`#define LAMBERT
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
}`,hR=`#define MATCAP
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
}`,pR=`#define MATCAP
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
}`,mR=`#define NORMAL
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
}`,gR=`#define NORMAL
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
}`,vR=`#define PHONG
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
}`,_R=`#define PHONG
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
}`,bR=`#define STANDARD
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
}`,xR=`#define STANDARD
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
}`,yR=`#define TOON
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
}`,wR=`#define TOON
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
}`,SR=`uniform float size;
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
}`,MR=`uniform vec3 diffuse;
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
}`,ER=`#include <common>
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
}`,TR=`uniform vec3 color;
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
}`,AR=`uniform float rotation;
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
}`,CR=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:K1,alphahash_pars_fragment:Z1,alphamap_fragment:Q1,alphamap_pars_fragment:J1,alphatest_fragment:eC,alphatest_pars_fragment:tC,aomap_fragment:nC,aomap_pars_fragment:iC,batching_pars_vertex:sC,batching_vertex:rC,begin_vertex:oC,beginnormal_vertex:aC,bsdfs:lC,iridescence_fragment:cC,bumpmap_pars_fragment:uC,clipping_planes_fragment:dC,clipping_planes_pars_fragment:fC,clipping_planes_pars_vertex:hC,clipping_planes_vertex:pC,color_fragment:mC,color_pars_fragment:gC,color_pars_vertex:vC,color_vertex:_C,common:bC,cube_uv_reflection_fragment:xC,defaultnormal_vertex:yC,displacementmap_pars_vertex:wC,displacementmap_vertex:SC,emissivemap_fragment:MC,emissivemap_pars_fragment:EC,colorspace_fragment:TC,colorspace_pars_fragment:AC,envmap_fragment:CC,envmap_common_pars_fragment:RC,envmap_pars_fragment:PC,envmap_pars_vertex:DC,envmap_physical_pars_fragment:VC,envmap_vertex:LC,fog_vertex:IC,fog_pars_vertex:UC,fog_fragment:NC,fog_pars_fragment:OC,gradientmap_pars_fragment:FC,lightmap_pars_fragment:kC,lights_lambert_fragment:BC,lights_lambert_pars_fragment:HC,lights_pars_begin:zC,lights_toon_fragment:GC,lights_toon_pars_fragment:WC,lights_phong_fragment:$C,lights_phong_pars_fragment:XC,lights_physical_fragment:jC,lights_physical_pars_fragment:qC,lights_fragment_begin:YC,lights_fragment_maps:KC,lights_fragment_end:ZC,logdepthbuf_fragment:QC,logdepthbuf_pars_fragment:JC,logdepthbuf_pars_vertex:e2,logdepthbuf_vertex:t2,map_fragment:n2,map_pars_fragment:i2,map_particle_fragment:s2,map_particle_pars_fragment:r2,metalnessmap_fragment:o2,metalnessmap_pars_fragment:a2,morphinstance_vertex:l2,morphcolor_vertex:c2,morphnormal_vertex:u2,morphtarget_pars_vertex:d2,morphtarget_vertex:f2,normal_fragment_begin:h2,normal_fragment_maps:p2,normal_pars_fragment:m2,normal_pars_vertex:g2,normal_vertex:v2,normalmap_pars_fragment:_2,clearcoat_normal_fragment_begin:b2,clearcoat_normal_fragment_maps:x2,clearcoat_pars_fragment:y2,iridescence_pars_fragment:w2,opaque_fragment:S2,packing:M2,premultiplied_alpha_fragment:E2,project_vertex:T2,dithering_fragment:A2,dithering_pars_fragment:C2,roughnessmap_fragment:R2,roughnessmap_pars_fragment:P2,shadowmap_pars_fragment:D2,shadowmap_pars_vertex:L2,shadowmap_vertex:I2,shadowmask_pars_fragment:U2,skinbase_vertex:N2,skinning_pars_vertex:O2,skinning_vertex:F2,skinnormal_vertex:k2,specularmap_fragment:B2,specularmap_pars_fragment:H2,tonemapping_fragment:z2,tonemapping_pars_fragment:V2,transmission_fragment:G2,transmission_pars_fragment:W2,uv_pars_fragment:$2,uv_pars_vertex:X2,uv_vertex:j2,worldpos_vertex:q2,background_vert:Y2,background_frag:K2,backgroundCube_vert:Z2,backgroundCube_frag:Q2,cube_vert:J2,cube_frag:eR,depth_vert:tR,depth_frag:nR,distanceRGBA_vert:iR,distanceRGBA_frag:sR,equirect_vert:rR,equirect_frag:oR,linedashed_vert:aR,linedashed_frag:lR,meshbasic_vert:cR,meshbasic_frag:uR,meshlambert_vert:dR,meshlambert_frag:fR,meshmatcap_vert:hR,meshmatcap_frag:pR,meshnormal_vert:mR,meshnormal_frag:gR,meshphong_vert:vR,meshphong_frag:_R,meshphysical_vert:bR,meshphysical_frag:xR,meshtoon_vert:yR,meshtoon_frag:wR,points_vert:SR,points_frag:MR,shadow_vert:ER,shadow_frag:TR,sprite_vert:AR,sprite_frag:CR},Re={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Ri={basic:{uniforms:Sn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Sn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new yt(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Sn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Sn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Sn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new yt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Sn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Sn([Re.points,Re.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Sn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Sn([Re.common,Re.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Sn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Sn([Re.sprite,Re.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:Sn([Re.common,Re.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:Sn([Re.lights,Re.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Ri.physical={uniforms:Sn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const dl={r:0,b:0,g:0},Qs=new ki,RR=new Zt;function PR(t,e,n,i,s,r,o){const a=new yt(0);let l=r===!0?0:1,c,u,d=null,f=0,h=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?n:e).get(y)),y}function v(E){let y=!1;const U=g(E);U===null?p(a,l):U&&U.isColor&&(p(U,1),y=!0);const I=t.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(E,y){const U=g(y);U&&(U.isCubeTexture||U.mapping===pc)?(u===void 0&&(u=new gi(new Oa(1,1,1),new Fs({name:"BackgroundCubeMaterial",uniforms:wo(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,R,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Qs.copy(y.backgroundRotation),Qs.x*=-1,Qs.y*=-1,Qs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Qs.y*=-1,Qs.z*=-1),u.material.uniforms.envMap.value=U,u.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(RR.makeRotationFromEuler(Qs)),u.material.toneMapped=Mt.getTransfer(U.colorSpace)!==Lt,(d!==U||f!==U.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,d=U,f=U.version,h=t.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):U&&U.isTexture&&(c===void 0&&(c=new gi(new gc(2,2),new Fs({name:"BackgroundMaterial",uniforms:wo(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=U,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Mt.getTransfer(U.colorSpace)!==Lt,U.matrixAutoUpdate===!0&&U.updateMatrix(),c.material.uniforms.uvTransform.value.copy(U.matrix),(d!==U||f!==U.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,d=U,f=U.version,h=t.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,y){E.getRGB(dl,Yv(t)),i.buffers.color.setClear(dl.r,dl.g,dl.b,y,o)}function C(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:v,addToRenderList:m,dispose:C}}function DR(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(M,L,N,O,D){let V=!1;const W=d(O,N,L);r!==W&&(r=W,c(r.object)),V=h(M,O,N,D),V&&g(M,O,N,D),D!==null&&e.update(D,t.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,y(M,L,N,O),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function d(M,L,N){const O=N.wireframe===!0;let D=i[M.id];D===void 0&&(D={},i[M.id]=D);let V=D[L.id];V===void 0&&(V={},D[L.id]=V);let W=V[O];return W===void 0&&(W=f(l()),V[O]=W),W}function f(M){const L=[],N=[],O=[];for(let D=0;D<n;D++)L[D]=0,N[D]=0,O[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:O,object:M,attributes:{},index:null}}function h(M,L,N,O){const D=r.attributes,V=L.attributes;let W=0;const ee=N.getAttributes();for(const Y in ee)if(ee[Y].location>=0){const Me=D[Y];let Le=V[Y];if(Le===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(Le=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(Le=M.instanceColor)),Me===void 0||Me.attribute!==Le||Le&&Me.data!==Le.data)return!0;W++}return r.attributesNum!==W||r.index!==O}function g(M,L,N,O){const D={},V=L.attributes;let W=0;const ee=N.getAttributes();for(const Y in ee)if(ee[Y].location>=0){let Me=V[Y];Me===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(Me=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(Me=M.instanceColor));const Le={};Le.attribute=Me,Me&&Me.data&&(Le.data=Me.data),D[Y]=Le,W++}r.attributes=D,r.attributesNum=W,r.index=O}function v(){const M=r.newAttributes;for(let L=0,N=M.length;L<N;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){const N=r.newAttributes,O=r.enabledAttributes,D=r.attributeDivisors;N[M]=1,O[M]===0&&(t.enableVertexAttribArray(M),O[M]=1),D[M]!==L&&(t.vertexAttribDivisor(M,L),D[M]=L)}function C(){const M=r.newAttributes,L=r.enabledAttributes;for(let N=0,O=L.length;N<O;N++)L[N]!==M[N]&&(t.disableVertexAttribArray(N),L[N]=0)}function E(M,L,N,O,D,V,W){W===!0?t.vertexAttribIPointer(M,L,N,D,V):t.vertexAttribPointer(M,L,N,O,D,V)}function y(M,L,N,O){v();const D=O.attributes,V=N.getAttributes(),W=L.defaultAttributeValues;for(const ee in V){const Y=V[ee];if(Y.location>=0){let xe=D[ee];if(xe===void 0&&(ee==="instanceMatrix"&&M.instanceMatrix&&(xe=M.instanceMatrix),ee==="instanceColor"&&M.instanceColor&&(xe=M.instanceColor)),xe!==void 0){const Me=xe.normalized,Le=xe.itemSize,We=e.get(xe);if(We===void 0)continue;const _t=We.buffer,Qe=We.type,ie=We.bytesPerElement,ye=Qe===t.INT||Qe===t.UNSIGNED_INT||xe.gpuType===df;if(xe.isInterleavedBufferAttribute){const H=xe.data,ue=H.stride,oe=xe.offset;if(H.isInstancedInterleavedBuffer){for(let me=0;me<Y.locationSize;me++)p(Y.location+me,H.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let me=0;me<Y.locationSize;me++)m(Y.location+me);t.bindBuffer(t.ARRAY_BUFFER,_t);for(let me=0;me<Y.locationSize;me++)E(Y.location+me,Le/Y.locationSize,Qe,Me,ue*ie,(oe+Le/Y.locationSize*me)*ie,ye)}else{if(xe.isInstancedBufferAttribute){for(let H=0;H<Y.locationSize;H++)p(Y.location+H,xe.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let H=0;H<Y.locationSize;H++)m(Y.location+H);t.bindBuffer(t.ARRAY_BUFFER,_t);for(let H=0;H<Y.locationSize;H++)E(Y.location+H,Le/Y.locationSize,Qe,Me,Le*ie,Le/Y.locationSize*H*ie,ye)}}else if(W!==void 0){const Me=W[ee];if(Me!==void 0)switch(Me.length){case 2:t.vertexAttrib2fv(Y.location,Me);break;case 3:t.vertexAttrib3fv(Y.location,Me);break;case 4:t.vertexAttrib4fv(Y.location,Me);break;default:t.vertexAttrib1fv(Y.location,Me)}}}}C()}function U(){k();for(const M in i){const L=i[M];for(const N in L){const O=L[N];for(const D in O)u(O[D].object),delete O[D];delete L[N]}delete i[M]}}function I(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const N in L){const O=L[N];for(const D in O)u(O[D].object),delete O[D];delete L[N]}delete i[M.id]}function R(M){for(const L in i){const N=i[L];if(N[M.id]===void 0)continue;const O=N[M.id];for(const D in O)u(O[D].object),delete O[D];delete N[M.id]}}function k(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:k,resetDefaultState:w,dispose:U,releaseStatesOfGeometry:I,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:C}}function LR(t,e,n){let i;function s(c){i=c}function r(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];n.update(h,i,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*f[v];n.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function IR(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==mi&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const k=R===La&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Fi&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==es&&!k)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),C=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,I=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:C,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:U,maxSamples:I}}function UR(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new xs,a=new pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=t.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const C=r?0:i,E=C*4;let y=p.clippingState||null;l.value=y,y=u(g,f,E,h);for(let U=0;U!==E;++U)y[U]=n[U];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=h+v*4,C=f.matrixWorldInverse;a.getNormalMatrix(C),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,y=h;E!==v;++E,y+=4)o.copy(d[E]).applyMatrix4(C,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function NR(t){let e=new WeakMap;function n(o,a){return a===ju?o.mapping=bo:a===qu&&(o.mapping=xo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ju||a===qu)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new I1(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",s),n(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const $r=4,vp=[.125,.215,.35,.446,.526,.582],sr=20,du=new n_,_p=new yt;let fu=null,hu=0,pu=0,mu=!1;const tr=(1+Math.sqrt(5))/2,Hr=1/tr,bp=[new J(-tr,Hr,0),new J(tr,Hr,0),new J(-Hr,0,tr),new J(Hr,0,tr),new J(0,tr,-Hr),new J(0,tr,Hr),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],OR=new J;class xp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=OR}=r;fu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel(),mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fu,hu,pu),this._renderer.xr.enabled=mu,e.scissorTest=!1,fl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===bo||e.mapping===xo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel(),mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Pi,minFilter:Pi,generateMipmaps:!1,type:La,format:mi,colorSpace:yo,depthBuffer:!1},s=yp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yp(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FR(r)),this._blurMaterial=kR(r,e,n)}return s}_compileMaterial(e){const n=new gi(this._lodPlanes[0],e);this._renderer.compile(n,du)}_sceneToCubeUV(e,n,i,s,r){const l=new qn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(_p),d.toneMapping=Us,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const v=new Xv({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),m=new gi(new Oa,v);let p=!1;const C=e.background;C?C.isColor&&(v.color.copy(C),e.background=null,p=!0):(v.color.copy(_p),p=!0);for(let E=0;E<6;E++){const y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));const U=this._cubeSize;fl(s,y*U,E>2?U:0,U,U),d.setRenderTarget(s),p&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=C}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===bo||e.mapping===xo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wp());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new gi(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;fl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,du)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=bp[(s-r-1)%bp.length];this._blur(e,r-1,r,o,a)}n.autoClear=i}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new gi(this._lodPlanes[s],c),f=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*sr-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):sr;m>sr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${sr}`);const p=[];let C=0;for(let R=0;R<sr;++R){const k=R/v,w=Math.exp(-k*k/2);p.push(w),R===0?C+=w:R<m&&(C+=2*w)}for(let R=0;R<p.length;R++)p[R]=p[R]/C;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-i;const y=this._sizeLods[s],U=3*y*(s>E-$r?s-E+$r:0),I=4*(this._cubeSize-y);fl(n,U,I,3*y,2*y),l.setRenderTarget(n),l.render(d,du)}}function FR(t){const e=[],n=[],i=[];let s=t;const r=t-$r+1+vp.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);n.push(a);let l=1/a;o>t-$r?l=vp[o-t+$r-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,v=3,m=2,p=1,C=new Float32Array(v*g*h),E=new Float32Array(m*g*h),y=new Float32Array(p*g*h);for(let I=0;I<h;I++){const R=I%3*2/3-1,k=I>2?0:-1,w=[R,k,0,R+2/3,k,0,R+2/3,k+1,0,R,k,0,R+2/3,k+1,0,R,k+1,0];C.set(w,v*g*I),E.set(f,m*g*I);const M=[I,I,I,I,I,I];y.set(M,p*g*I)}const U=new zs;U.setAttribute("position",new Ii(C,v)),U.setAttribute("uv",new Ii(E,m)),U.setAttribute("faceIndex",new Ii(y,p)),e.push(U),s>$r&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function yp(t,e,n){const i=new br(t,e,n);return i.texture.mapping=pc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fl(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function kR(t,e,n){const i=new Float32Array(sr),s=new J(0,1,0);return new Fs({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yf(),fragmentShader:`

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
		`,blending:Is,depthTest:!1,depthWrite:!1})}function wp(){return new Fs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yf(),fragmentShader:`

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
		`,blending:Is,depthTest:!1,depthWrite:!1})}function Sp(){return new Fs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Is,depthTest:!1,depthWrite:!1})}function yf(){return`

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
	`}function BR(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ju||l===qu,u=l===bo||l===xo;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new xp(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&s(h)?(n===null&&(n=new xp(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function HR(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&to("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function zR(t,e,n,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const h=r.get(f);h&&(e.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],t.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,g=d.attributes.position;let v=0;if(h!==null){const C=h.array;v=h.version;for(let E=0,y=C.length;E<y;E+=3){const U=C[E+0],I=C[E+1],R=C[E+2];f.push(U,I,I,R,R,U)}}else if(g!==void 0){const C=g.array;v=g.version;for(let E=0,y=C.length/3-1;E<y;E+=3){const U=E+0,I=E+1,R=E+2;f.push(U,I,I,R,R,U)}}else return;const m=new(zv(f)?qv:jv)(f,1);m.version=v;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function VR(t,e,n){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){t.drawElements(i,h,r,f*o),n.update(h,i,1)}function c(f,h,g){g!==0&&(t.drawElementsInstanced(i,h,r,f*o,g),n.update(h,i,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];n.update(m,i,1)}function d(f,h,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,h[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,r,f,0,v,0,g);let p=0;for(let C=0;C<g;C++)p+=h[C]*v[C];n.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function GR(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function WR(t,e,n){const i=new WeakMap,s=new jt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let w=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();const h=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],C=a.morphAttributes.color||[];let E=0;h===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let y=a.attributes.position.count*E,U=1;y>e.maxTextureSize&&(U=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const I=new Float32Array(y*U*4*d),R=new Vv(I,y,U,d);R.type=es,R.needsUpdate=!0;const k=E*4;for(let M=0;M<d;M++){const L=m[M],N=p[M],O=C[M],D=y*U*4*M;for(let V=0;V<L.count;V++){const W=V*k;h===!0&&(s.fromBufferAttribute(L,V),I[D+W+0]=s.x,I[D+W+1]=s.y,I[D+W+2]=s.z,I[D+W+3]=0),g===!0&&(s.fromBufferAttribute(N,V),I[D+W+4]=s.x,I[D+W+5]=s.y,I[D+W+6]=s.z,I[D+W+7]=0),v===!0&&(s.fromBufferAttribute(O,V),I[D+W+8]=s.x,I[D+W+9]=s.y,I[D+W+10]=s.z,I[D+W+11]=O.itemSize===4?s.w:1)}}f={count:d,texture:R,size:new lt(y,U)},i.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let h=0;for(let v=0;v<c.length;v++)h+=c[v];const g=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:r}}function $R(t,e,n,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:o}}const r_=new Rn,Mp=new Jv(1,1),o_=new Vv,a_=new g1,l_=new Zv,Ep=[],Tp=[],Ap=new Float32Array(16),Cp=new Float32Array(9),Rp=new Float32Array(4);function Ro(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=Ep[s];if(r===void 0&&(r=new Float32Array(s),Ep[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function sn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function rn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function vc(t,e){let n=Tp[e];n===void 0&&(n=new Int32Array(e),Tp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function XR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function jR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(sn(n,e))return;t.uniform2fv(this.addr,e),rn(n,e)}}function qR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(sn(n,e))return;t.uniform3fv(this.addr,e),rn(n,e)}}function YR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(sn(n,e))return;t.uniform4fv(this.addr,e),rn(n,e)}}function KR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(sn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),rn(n,e)}else{if(sn(n,i))return;Rp.set(i),t.uniformMatrix2fv(this.addr,!1,Rp),rn(n,i)}}function ZR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(sn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),rn(n,e)}else{if(sn(n,i))return;Cp.set(i),t.uniformMatrix3fv(this.addr,!1,Cp),rn(n,i)}}function QR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(sn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),rn(n,e)}else{if(sn(n,i))return;Ap.set(i),t.uniformMatrix4fv(this.addr,!1,Ap),rn(n,i)}}function JR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function eP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(sn(n,e))return;t.uniform2iv(this.addr,e),rn(n,e)}}function tP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(sn(n,e))return;t.uniform3iv(this.addr,e),rn(n,e)}}function nP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(sn(n,e))return;t.uniform4iv(this.addr,e),rn(n,e)}}function iP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function sP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(sn(n,e))return;t.uniform2uiv(this.addr,e),rn(n,e)}}function rP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(sn(n,e))return;t.uniform3uiv(this.addr,e),rn(n,e)}}function oP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(sn(n,e))return;t.uniform4uiv(this.addr,e),rn(n,e)}}function aP(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(Mp.compareFunction=Hv,r=Mp):r=r_,n.setTexture2D(e||r,s)}function lP(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||a_,s)}function cP(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||l_,s)}function uP(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||o_,s)}function dP(t){switch(t){case 5126:return XR;case 35664:return jR;case 35665:return qR;case 35666:return YR;case 35674:return KR;case 35675:return ZR;case 35676:return QR;case 5124:case 35670:return JR;case 35667:case 35671:return eP;case 35668:case 35672:return tP;case 35669:case 35673:return nP;case 5125:return iP;case 36294:return sP;case 36295:return rP;case 36296:return oP;case 35678:case 36198:case 36298:case 36306:case 35682:return aP;case 35679:case 36299:case 36307:return lP;case 35680:case 36300:case 36308:case 36293:return cP;case 36289:case 36303:case 36311:case 36292:return uP}}function fP(t,e){t.uniform1fv(this.addr,e)}function hP(t,e){const n=Ro(e,this.size,2);t.uniform2fv(this.addr,n)}function pP(t,e){const n=Ro(e,this.size,3);t.uniform3fv(this.addr,n)}function mP(t,e){const n=Ro(e,this.size,4);t.uniform4fv(this.addr,n)}function gP(t,e){const n=Ro(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function vP(t,e){const n=Ro(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function _P(t,e){const n=Ro(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function bP(t,e){t.uniform1iv(this.addr,e)}function xP(t,e){t.uniform2iv(this.addr,e)}function yP(t,e){t.uniform3iv(this.addr,e)}function wP(t,e){t.uniform4iv(this.addr,e)}function SP(t,e){t.uniform1uiv(this.addr,e)}function MP(t,e){t.uniform2uiv(this.addr,e)}function EP(t,e){t.uniform3uiv(this.addr,e)}function TP(t,e){t.uniform4uiv(this.addr,e)}function AP(t,e,n){const i=this.cache,s=e.length,r=vc(n,s);sn(i,r)||(t.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)n.setTexture2D(e[o]||r_,r[o])}function CP(t,e,n){const i=this.cache,s=e.length,r=vc(n,s);sn(i,r)||(t.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||a_,r[o])}function RP(t,e,n){const i=this.cache,s=e.length,r=vc(n,s);sn(i,r)||(t.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||l_,r[o])}function PP(t,e,n){const i=this.cache,s=e.length,r=vc(n,s);sn(i,r)||(t.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||o_,r[o])}function DP(t){switch(t){case 5126:return fP;case 35664:return hP;case 35665:return pP;case 35666:return mP;case 35674:return gP;case 35675:return vP;case 35676:return _P;case 5124:case 35670:return bP;case 35667:case 35671:return xP;case 35668:case 35672:return yP;case 35669:case 35673:return wP;case 5125:return SP;case 36294:return MP;case 36295:return EP;case 36296:return TP;case 35678:case 36198:case 36298:case 36306:case 35682:return AP;case 35679:case 36299:case 36307:return CP;case 35680:case 36300:case 36308:case 36293:return RP;case 36289:case 36303:case 36311:case 36292:return PP}}class LP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=dP(n.type)}}class IP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=DP(n.type)}}class UP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const gu=/(\w+)(\])?(\[|\.)?/g;function Pp(t,e){t.seq.push(e),t.map[e.id]=e}function NP(t,e,n){const i=t.name,s=i.length;for(gu.lastIndex=0;;){const r=gu.exec(i),o=gu.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Pp(n,c===void 0?new LP(a,t,e):new IP(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new UP(a),Pp(n,d)),n=d}}}class Cl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(n,s),o=e.getUniformLocation(n,r.name);NP(r,o,this)}}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function Dp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const OP=37297;let FP=0;function kP(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Lp=new pt;function BP(t){Mt._getMatrix(Lp,Mt.workingColorSpace,t);const e=`mat3( ${Lp.elements.map(n=>n.toFixed(4))} )`;switch(Mt.getTransfer(t)){case jl:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Ip(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+kP(t.getShaderSource(e),a)}else return r}function HP(t,e){const n=BP(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function zP(t,e){let n;switch(e){case GA:n="Linear";break;case WA:n="Reinhard";break;case $A:n="Cineon";break;case XA:n="ACESFilmic";break;case qA:n="AgX";break;case YA:n="Neutral";break;case jA:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const hl=new J;function VP(){Mt.getLuminanceCoefficients(hl);const t=hl.x.toFixed(4),e=hl.y.toFixed(4),n=hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GP(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function WP(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function $P(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Wo(t){return t!==""}function Up(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Np(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const XP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ed(t){return t.replace(XP,qP)}const jP=new Map;function qP(t,e){let n=mt[e];if(n===void 0){const i=jP.get(e);if(i!==void 0)n=mt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ed(n)}const YP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Op(t){return t.replace(YP,KP)}function KP(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fp(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function ZP(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Cv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===wA?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ji&&(e="SHADOWMAP_TYPE_VSM"),e}function QP(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case bo:case xo:e="ENVMAP_TYPE_CUBE";break;case pc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function JP(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case xo:e="ENVMAP_MODE_REFRACTION";break}return e}function eD(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Rv:e="ENVMAP_BLENDING_MULTIPLY";break;case zA:e="ENVMAP_BLENDING_MIX";break;case VA:e="ENVMAP_BLENDING_ADD";break}return e}function tD(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function nD(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=ZP(n),c=QP(n),u=JP(n),d=eD(n),f=tD(n),h=GP(n),g=WP(r),v=s.createProgram();let m,p,C=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Wo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Wo).join(`
`),p.length>0&&(p+=`
`)):(m=[Fp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),p=[Fp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Us?"#define TONE_MAPPING":"",n.toneMapping!==Us?mt.tonemapping_pars_fragment:"",n.toneMapping!==Us?zP("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,HP("linearToOutputTexel",n.outputColorSpace),VP(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Wo).join(`
`)),o=Ed(o),o=Up(o,n),o=Np(o,n),a=Ed(a),a=Up(a,n),a=Np(a,n),o=Op(o),a=Op(a),n.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=C+m+o,y=C+p+a,U=Dp(s,s.VERTEX_SHADER,E),I=Dp(s,s.FRAGMENT_SHADER,y);s.attachShader(v,U),s.attachShader(v,I),n.index0AttributeName!==void 0?s.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(L){if(t.debug.checkShaderErrors){const N=s.getProgramInfoLog(v)||"",O=s.getShaderInfoLog(U)||"",D=s.getShaderInfoLog(I)||"",V=N.trim(),W=O.trim(),ee=D.trim();let Y=!0,xe=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,v,U,I);else{const Me=Ip(s,U,"vertex"),Le=Ip(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+Me+`
`+Le)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(W===""||ee==="")&&(xe=!1);xe&&(L.diagnostics={runnable:Y,programLog:V,vertexShader:{log:W,prefix:m},fragmentShader:{log:ee,prefix:p}})}s.deleteShader(U),s.deleteShader(I),k=new Cl(s,v),w=$P(s,v)}let k;this.getUniforms=function(){return k===void 0&&R(this),k};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,OP)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=FP++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=I,this}let iD=0;class sD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new rD(e),n.set(e,i)),i}}class rD{constructor(e){this.id=iD++,this.code=e,this.usedTimes=0}}function oD(t,e,n,i,s,r,o){const a=new Wv,l=new sD,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let h=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,M,L,N,O){const D=N.fog,V=O.geometry,W=w.isMeshStandardMaterial?N.environment:null,ee=(w.isMeshStandardMaterial?n:e).get(w.envMap||W),Y=ee&&ee.mapping===pc?ee.image.height:null,xe=g[w.type];w.precision!==null&&(h=s.getMaxPrecision(w.precision),h!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",h,"instead."));const Me=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Le=Me!==void 0?Me.length:0;let We=0;V.morphAttributes.position!==void 0&&(We=1),V.morphAttributes.normal!==void 0&&(We=2),V.morphAttributes.color!==void 0&&(We=3);let _t,Qe,ie,ye;if(xe){const ft=Ri[xe];_t=ft.vertexShader,Qe=ft.fragmentShader}else _t=w.vertexShader,Qe=w.fragmentShader,l.update(w),ie=l.getVertexShaderID(w),ye=l.getFragmentShaderID(w);const H=t.getRenderTarget(),ue=t.state.buffers.depth.getReversed(),oe=O.isInstancedMesh===!0,me=O.isBatchedMesh===!0,Je=!!w.map,P=!!w.matcap,b=!!ee,G=!!w.aoMap,K=!!w.lightMap,se=!!w.bumpMap,q=!!w.normalMap,ge=!!w.displacementMap,te=!!w.emissiveMap,ce=!!w.metalnessMap,de=!!w.roughnessMap,Pe=w.anisotropy>0,T=w.clearcoat>0,x=w.dispersion>0,B=w.iridescence>0,Z=w.sheen>0,le=w.transmission>0,Q=Pe&&!!w.anisotropyMap,Ie=T&&!!w.clearcoatMap,ve=T&&!!w.clearcoatNormalMap,De=T&&!!w.clearcoatRoughnessMap,Ue=B&&!!w.iridescenceMap,_e=B&&!!w.iridescenceThicknessMap,Ce=Z&&!!w.sheenColorMap,He=Z&&!!w.sheenRoughnessMap,Ne=!!w.specularMap,Te=!!w.specularColorMap,ut=!!w.specularIntensityMap,z=le&&!!w.transmissionMap,we=le&&!!w.thicknessMap,Ee=!!w.gradientMap,ke=!!w.alphaMap,be=w.alphaTest>0,he=!!w.alphaHash,Ge=!!w.extensions;let nt=Us;w.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(nt=t.toneMapping);const dt={shaderID:xe,shaderType:w.type,shaderName:w.name,vertexShader:_t,fragmentShader:Qe,defines:w.defines,customVertexShaderID:ie,customFragmentShaderID:ye,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:h,batching:me,batchingColor:me&&O._colorsTexture!==null,instancing:oe,instancingColor:oe&&O.instanceColor!==null,instancingMorph:oe&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:H===null?t.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:yo,alphaToCoverage:!!w.alphaToCoverage,map:Je,matcap:P,envMap:b,envMapMode:b&&ee.mapping,envMapCubeUVHeight:Y,aoMap:G,lightMap:K,bumpMap:se,normalMap:q,displacementMap:f&&ge,emissiveMap:te,normalMapObjectSpace:q&&w.normalMapType===JA,normalMapTangentSpace:q&&w.normalMapType===Bv,metalnessMap:ce,roughnessMap:de,anisotropy:Pe,anisotropyMap:Q,clearcoat:T,clearcoatMap:Ie,clearcoatNormalMap:ve,clearcoatRoughnessMap:De,dispersion:x,iridescence:B,iridescenceMap:Ue,iridescenceThicknessMap:_e,sheen:Z,sheenColorMap:Ce,sheenRoughnessMap:He,specularMap:Ne,specularColorMap:Te,specularIntensityMap:ut,transmission:le,transmissionMap:z,thicknessMap:we,gradientMap:Ee,opaque:w.transparent===!1&&w.blending===eo&&w.alphaToCoverage===!1,alphaMap:ke,alphaTest:be,alphaHash:he,combine:w.combine,mapUv:Je&&v(w.map.channel),aoMapUv:G&&v(w.aoMap.channel),lightMapUv:K&&v(w.lightMap.channel),bumpMapUv:se&&v(w.bumpMap.channel),normalMapUv:q&&v(w.normalMap.channel),displacementMapUv:ge&&v(w.displacementMap.channel),emissiveMapUv:te&&v(w.emissiveMap.channel),metalnessMapUv:ce&&v(w.metalnessMap.channel),roughnessMapUv:de&&v(w.roughnessMap.channel),anisotropyMapUv:Q&&v(w.anisotropyMap.channel),clearcoatMapUv:Ie&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:ve&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:He&&v(w.sheenRoughnessMap.channel),specularMapUv:Ne&&v(w.specularMap.channel),specularColorMapUv:Te&&v(w.specularColorMap.channel),specularIntensityMapUv:ut&&v(w.specularIntensityMap.channel),transmissionMapUv:z&&v(w.transmissionMap.channel),thicknessMapUv:we&&v(w.thicknessMap.channel),alphaMapUv:ke&&v(w.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(q||Pe),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(Je||ke),fog:!!D,useFog:w.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ue,skinning:O.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:We,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:nt,decodeVideoTexture:Je&&w.map.isVideoTexture===!0&&Mt.getTransfer(w.map.colorSpace)===Lt,decodeVideoTextureEmissive:te&&w.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(w.emissiveMap.colorSpace)===Lt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ji,flipSided:w.side===zn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ge&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&w.extensions.multiDraw===!0||me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function p(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)M.push(L),M.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(C(M,w),E(M,w),M.push(t.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function C(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function E(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){const M=g[w.type];let L;if(M){const N=Ri[M];L=R1.clone(N.uniforms)}else L=w.uniforms;return L}function U(w,M){let L;for(let N=0,O=u.length;N<O;N++){const D=u[N];if(D.cacheKey===M){L=D,++L.usedTimes;break}}return L===void 0&&(L=new nD(t,M,w,r),u.push(L)),L}function I(w){if(--w.usedTimes===0){const M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function R(w){l.remove(w)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:U,releaseProgram:I,releaseShaderCache:R,programs:u,dispose:k}}function aD(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function lD(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function kp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Bp(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(d,f,h,g,v,m){let p=t[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},t[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),e++,p}function a(d,f,h,g,v,m){const p=o(d,f,h,g,v,m);h.transmission>0?i.push(p):h.transparent===!0?s.push(p):n.push(p)}function l(d,f,h,g,v,m){const p=o(d,f,h,g,v,m);h.transmission>0?i.unshift(p):h.transparent===!0?s.unshift(p):n.unshift(p)}function c(d,f){n.length>1&&n.sort(d||lD),i.length>1&&i.sort(f||kp),s.length>1&&s.sort(f||kp)}function u(){for(let d=e,f=t.length;d<f;d++){const h=t[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function cD(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new Bp,t.set(i,[o])):s>=r.length?(o=new Bp,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function uD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new J,color:new yt};break;case"SpotLight":n={position:new J,direction:new J,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new J,color:new yt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new J,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":n={color:new yt,position:new J,halfWidth:new J,halfHeight:new J};break}return t[e.id]=n,n}}}function dD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let fD=0;function hD(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function pD(t){const e=new uD,n=dD(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new J);const s=new J,r=new Zt,o=new Zt;function a(c){let u=0,d=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let h=0,g=0,v=0,m=0,p=0,C=0,E=0,y=0,U=0,I=0,R=0;c.sort(hD);for(let w=0,M=c.length;w<M;w++){const L=c[w],N=L.color,O=L.intensity,D=L.distance,V=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=N.r*O,d+=N.g*O,f+=N.b*O;else if(L.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(L.sh.coefficients[W],O);R++}else if(L.isDirectionalLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ee=L.shadow,Y=n.get(L);Y.shadowIntensity=ee.intensity,Y.shadowBias=ee.bias,Y.shadowNormalBias=ee.normalBias,Y.shadowRadius=ee.radius,Y.shadowMapSize=ee.mapSize,i.directionalShadow[h]=Y,i.directionalShadowMap[h]=V,i.directionalShadowMatrix[h]=L.shadow.matrix,C++}i.directional[h]=W,h++}else if(L.isSpotLight){const W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(N).multiplyScalar(O),W.distance=D,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,i.spot[v]=W;const ee=L.shadow;if(L.map&&(i.spotLightMap[U]=L.map,U++,ee.updateMatrices(L),L.castShadow&&I++),i.spotLightMatrix[v]=ee.matrix,L.castShadow){const Y=n.get(L);Y.shadowIntensity=ee.intensity,Y.shadowBias=ee.bias,Y.shadowNormalBias=ee.normalBias,Y.shadowRadius=ee.radius,Y.shadowMapSize=ee.mapSize,i.spotShadow[v]=Y,i.spotShadowMap[v]=V,y++}v++}else if(L.isRectAreaLight){const W=e.get(L);W.color.copy(N).multiplyScalar(O),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=W,m++}else if(L.isPointLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const ee=L.shadow,Y=n.get(L);Y.shadowIntensity=ee.intensity,Y.shadowBias=ee.bias,Y.shadowNormalBias=ee.normalBias,Y.shadowRadius=ee.radius,Y.shadowMapSize=ee.mapSize,Y.shadowCameraNear=ee.camera.near,Y.shadowCameraFar=ee.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=L.shadow.matrix,E++}i.point[g]=W,g++}else if(L.isHemisphereLight){const W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(O),W.groundColor.copy(L.groundColor).multiplyScalar(O),i.hemi[p]=W,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const k=i.hash;(k.directionalLength!==h||k.pointLength!==g||k.spotLength!==v||k.rectAreaLength!==m||k.hemiLength!==p||k.numDirectionalShadows!==C||k.numPointShadows!==E||k.numSpotShadows!==y||k.numSpotMaps!==U||k.numLightProbes!==R)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=y+U-I,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=R,k.directionalLength=h,k.pointLength=g,k.spotLength=v,k.rectAreaLength=m,k.hemiLength=p,k.numDirectionalShadows=C,k.numPointShadows=E,k.numSpotShadows=y,k.numSpotMaps=U,k.numLightProbes=R,i.version=fD++)}function l(c,u){let d=0,f=0,h=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,C=c.length;p<C;p++){const E=c[p];if(E.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(E.isSpotLight){const y=i.spot[h];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(E.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Hp(t){const e=new pD(t),n=[],i=[];function s(u){c.camera=u,n.length=0,i.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function mD(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Hp(t),e.set(s,[a])):r>=o.length?(a=new Hp(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const gD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vD=`uniform sampler2D shadow_pass;
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
}`;function _D(t,e,n){let i=new bf;const s=new lt,r=new lt,o=new jt,a=new B1({depthPacking:QA}),l=new H1,c={},u=n.maxTextureSize,d={[Os]:zn,[zn]:Os,[Ji]:Ji},f=new Fs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:gD,fragmentShader:vD}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new zs;g.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new gi(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cv;let p=this.type;this.render=function(I,R,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const w=t.getRenderTarget(),M=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),N=t.state;N.setBlending(Is),N.buffers.depth.getReversed()?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=p!==ji&&this.type===ji,D=p===ji&&this.type!==ji;for(let V=0,W=I.length;V<W;V++){const ee=I[V],Y=ee.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const xe=Y.getFrameExtents();if(s.multiply(xe),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/xe.x),s.x=r.x*xe.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/xe.y),s.y=r.y*xe.y,Y.mapSize.y=r.y)),Y.map===null||O===!0||D===!0){const Le=this.type!==ji?{minFilter:_i,magFilter:_i}:{};Y.map!==null&&Y.map.dispose(),Y.map=new br(s.x,s.y,Le),Y.map.texture.name=ee.name+".shadowMap",Y.camera.updateProjectionMatrix()}t.setRenderTarget(Y.map),t.clear();const Me=Y.getViewportCount();for(let Le=0;Le<Me;Le++){const We=Y.getViewport(Le);o.set(r.x*We.x,r.y*We.y,r.x*We.z,r.y*We.w),N.viewport(o),Y.updateMatrices(ee,Le),i=Y.getFrustum(),y(R,k,Y.camera,ee,this.type)}Y.isPointLightShadow!==!0&&this.type===ji&&C(Y,k),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(w,M,L)};function C(I,R){const k=e.update(v);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,h.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new br(s.x,s.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,t.setRenderTarget(I.mapPass),t.clear(),t.renderBufferDirect(R,null,k,f,v,null),h.uniforms.shadow_pass.value=I.mapPass.texture,h.uniforms.resolution.value=I.mapSize,h.uniforms.radius.value=I.radius,t.setRenderTarget(I.map),t.clear(),t.renderBufferDirect(R,null,k,h,v,null)}function E(I,R,k,w){let M=null;const L=k.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(L!==void 0)M=L;else if(M=k.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const N=M.uuid,O=R.uuid;let D=c[N];D===void 0&&(D={},c[N]=D);let V=D[O];V===void 0&&(V=M.clone(),D[O]=V,R.addEventListener("dispose",U)),M=V}if(M.visible=R.visible,M.wireframe=R.wireframe,w===ji?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:d[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,k.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=t.properties.get(M);N.light=k}return M}function y(I,R,k,w,M){if(I.visible===!1)return;if(I.layers.test(R.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&M===ji)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,I.matrixWorld);const O=e.update(I),D=I.material;if(Array.isArray(D)){const V=O.groups;for(let W=0,ee=V.length;W<ee;W++){const Y=V[W],xe=D[Y.materialIndex];if(xe&&xe.visible){const Me=E(I,xe,w,M);I.onBeforeShadow(t,I,R,k,O,Me,Y),t.renderBufferDirect(k,null,O,Me,I,Y),I.onAfterShadow(t,I,R,k,O,Me,Y)}}}else if(D.visible){const V=E(I,D,w,M);I.onBeforeShadow(t,I,R,k,O,V,null),t.renderBufferDirect(k,null,O,V,I,null),I.onAfterShadow(t,I,R,k,O,V,null)}}const N=I.children;for(let O=0,D=N.length;O<D;O++)y(N[O],R,k,w,M)}function U(I){I.target.removeEventListener("dispose",U);for(const k in c){const w=c[k],M=I.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const bD={[Hu]:zu,[Vu]:$u,[Gu]:Xu,[_o]:Wu,[zu]:Hu,[$u]:Vu,[Xu]:Gu,[Wu]:_o};function xD(t,e){function n(){let z=!1;const we=new jt;let Ee=null;const ke=new jt(0,0,0,0);return{setMask:function(be){Ee!==be&&!z&&(t.colorMask(be,be,be,be),Ee=be)},setLocked:function(be){z=be},setClear:function(be,he,Ge,nt,dt){dt===!0&&(be*=nt,he*=nt,Ge*=nt),we.set(be,he,Ge,nt),ke.equals(we)===!1&&(t.clearColor(be,he,Ge,nt),ke.copy(we))},reset:function(){z=!1,Ee=null,ke.set(-1,0,0,0)}}}function i(){let z=!1,we=!1,Ee=null,ke=null,be=null;return{setReversed:function(he){if(we!==he){const Ge=e.get("EXT_clip_control");he?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),we=he;const nt=be;be=null,this.setClear(nt)}},getReversed:function(){return we},setTest:function(he){he?H(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(he){Ee!==he&&!z&&(t.depthMask(he),Ee=he)},setFunc:function(he){if(we&&(he=bD[he]),ke!==he){switch(he){case Hu:t.depthFunc(t.NEVER);break;case zu:t.depthFunc(t.ALWAYS);break;case Vu:t.depthFunc(t.LESS);break;case _o:t.depthFunc(t.LEQUAL);break;case Gu:t.depthFunc(t.EQUAL);break;case Wu:t.depthFunc(t.GEQUAL);break;case $u:t.depthFunc(t.GREATER);break;case Xu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ke=he}},setLocked:function(he){z=he},setClear:function(he){be!==he&&(we&&(he=1-he),t.clearDepth(he),be=he)},reset:function(){z=!1,Ee=null,ke=null,be=null,we=!1}}}function s(){let z=!1,we=null,Ee=null,ke=null,be=null,he=null,Ge=null,nt=null,dt=null;return{setTest:function(ft){z||(ft?H(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(ft){we!==ft&&!z&&(t.stencilMask(ft),we=ft)},setFunc:function(ft,Ln,$){(Ee!==ft||ke!==Ln||be!==$)&&(t.stencilFunc(ft,Ln,$),Ee=ft,ke=Ln,be=$)},setOp:function(ft,Ln,$){(he!==ft||Ge!==Ln||nt!==$)&&(t.stencilOp(ft,Ln,$),he=ft,Ge=Ln,nt=$)},setLocked:function(ft){z=ft},setClear:function(ft){dt!==ft&&(t.clearStencil(ft),dt=ft)},reset:function(){z=!1,we=null,Ee=null,ke=null,be=null,he=null,Ge=null,nt=null,dt=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],g=null,v=!1,m=null,p=null,C=null,E=null,y=null,U=null,I=null,R=new yt(0,0,0),k=0,w=!1,M=null,L=null,N=null,O=null,D=null;const V=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ee=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=ee>=1):Y.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=ee>=2);let xe=null,Me={};const Le=t.getParameter(t.SCISSOR_BOX),We=t.getParameter(t.VIEWPORT),_t=new jt().fromArray(Le),Qe=new jt().fromArray(We);function ie(z,we,Ee,ke){const be=new Uint8Array(4),he=t.createTexture();t.bindTexture(z,he),t.texParameteri(z,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(z,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ge=0;Ge<Ee;Ge++)z===t.TEXTURE_3D||z===t.TEXTURE_2D_ARRAY?t.texImage3D(we,0,t.RGBA,1,1,ke,0,t.RGBA,t.UNSIGNED_BYTE,be):t.texImage2D(we+Ge,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,be);return he}const ye={};ye[t.TEXTURE_2D]=ie(t.TEXTURE_2D,t.TEXTURE_2D,1),ye[t.TEXTURE_CUBE_MAP]=ie(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[t.TEXTURE_2D_ARRAY]=ie(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ye[t.TEXTURE_3D]=ie(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),H(t.DEPTH_TEST),o.setFunc(_o),se(!1),q(Gh),H(t.CULL_FACE),G(Is);function H(z){u[z]!==!0&&(t.enable(z),u[z]=!0)}function ue(z){u[z]!==!1&&(t.disable(z),u[z]=!1)}function oe(z,we){return d[z]!==we?(t.bindFramebuffer(z,we),d[z]=we,z===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=we),z===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=we),!0):!1}function me(z,we){let Ee=h,ke=!1;if(z){Ee=f.get(we),Ee===void 0&&(Ee=[],f.set(we,Ee));const be=z.textures;if(Ee.length!==be.length||Ee[0]!==t.COLOR_ATTACHMENT0){for(let he=0,Ge=be.length;he<Ge;he++)Ee[he]=t.COLOR_ATTACHMENT0+he;Ee.length=be.length,ke=!0}}else Ee[0]!==t.BACK&&(Ee[0]=t.BACK,ke=!0);ke&&t.drawBuffers(Ee)}function Je(z){return g!==z?(t.useProgram(z),g=z,!0):!1}const P={[ir]:t.FUNC_ADD,[MA]:t.FUNC_SUBTRACT,[EA]:t.FUNC_REVERSE_SUBTRACT};P[TA]=t.MIN,P[AA]=t.MAX;const b={[CA]:t.ZERO,[RA]:t.ONE,[PA]:t.SRC_COLOR,[ku]:t.SRC_ALPHA,[OA]:t.SRC_ALPHA_SATURATE,[UA]:t.DST_COLOR,[LA]:t.DST_ALPHA,[DA]:t.ONE_MINUS_SRC_COLOR,[Bu]:t.ONE_MINUS_SRC_ALPHA,[NA]:t.ONE_MINUS_DST_COLOR,[IA]:t.ONE_MINUS_DST_ALPHA,[FA]:t.CONSTANT_COLOR,[kA]:t.ONE_MINUS_CONSTANT_COLOR,[BA]:t.CONSTANT_ALPHA,[HA]:t.ONE_MINUS_CONSTANT_ALPHA};function G(z,we,Ee,ke,be,he,Ge,nt,dt,ft){if(z===Is){v===!0&&(ue(t.BLEND),v=!1);return}if(v===!1&&(H(t.BLEND),v=!0),z!==SA){if(z!==m||ft!==w){if((p!==ir||y!==ir)&&(t.blendEquation(t.FUNC_ADD),p=ir,y=ir),ft)switch(z){case eo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Wh:t.blendFunc(t.ONE,t.ONE);break;case $h:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Xh:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case eo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Wh:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case $h:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}C=null,E=null,U=null,I=null,R.set(0,0,0),k=0,m=z,w=ft}return}be=be||we,he=he||Ee,Ge=Ge||ke,(we!==p||be!==y)&&(t.blendEquationSeparate(P[we],P[be]),p=we,y=be),(Ee!==C||ke!==E||he!==U||Ge!==I)&&(t.blendFuncSeparate(b[Ee],b[ke],b[he],b[Ge]),C=Ee,E=ke,U=he,I=Ge),(nt.equals(R)===!1||dt!==k)&&(t.blendColor(nt.r,nt.g,nt.b,dt),R.copy(nt),k=dt),m=z,w=!1}function K(z,we){z.side===Ji?ue(t.CULL_FACE):H(t.CULL_FACE);let Ee=z.side===zn;we&&(Ee=!Ee),se(Ee),z.blending===eo&&z.transparent===!1?G(Is):G(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const ke=z.stencilWrite;a.setTest(ke),ke&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),te(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?H(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function se(z){M!==z&&(z?t.frontFace(t.CW):t.frontFace(t.CCW),M=z)}function q(z){z!==xA?(H(t.CULL_FACE),z!==L&&(z===Gh?t.cullFace(t.BACK):z===yA?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),L=z}function ge(z){z!==N&&(W&&t.lineWidth(z),N=z)}function te(z,we,Ee){z?(H(t.POLYGON_OFFSET_FILL),(O!==we||D!==Ee)&&(t.polygonOffset(we,Ee),O=we,D=Ee)):ue(t.POLYGON_OFFSET_FILL)}function ce(z){z?H(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function de(z){z===void 0&&(z=t.TEXTURE0+V-1),xe!==z&&(t.activeTexture(z),xe=z)}function Pe(z,we,Ee){Ee===void 0&&(xe===null?Ee=t.TEXTURE0+V-1:Ee=xe);let ke=Me[Ee];ke===void 0&&(ke={type:void 0,texture:void 0},Me[Ee]=ke),(ke.type!==z||ke.texture!==we)&&(xe!==Ee&&(t.activeTexture(Ee),xe=Ee),t.bindTexture(z,we||ye[z]),ke.type=z,ke.texture=we)}function T(){const z=Me[xe];z!==void 0&&z.type!==void 0&&(t.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function x(){try{t.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function B(){try{t.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Z(){try{t.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{t.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Q(){try{t.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ie(){try{t.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ve(){try{t.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function De(){try{t.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ue(){try{t.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _e(){try{t.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ce(z){_t.equals(z)===!1&&(t.scissor(z.x,z.y,z.z,z.w),_t.copy(z))}function He(z){Qe.equals(z)===!1&&(t.viewport(z.x,z.y,z.z,z.w),Qe.copy(z))}function Ne(z,we){let Ee=c.get(we);Ee===void 0&&(Ee=new WeakMap,c.set(we,Ee));let ke=Ee.get(z);ke===void 0&&(ke=t.getUniformBlockIndex(we,z.name),Ee.set(z,ke))}function Te(z,we){const ke=c.get(we).get(z);l.get(we)!==ke&&(t.uniformBlockBinding(we,ke,z.__bindingPointIndex),l.set(we,ke))}function ut(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},xe=null,Me={},d={},f=new WeakMap,h=[],g=null,v=!1,m=null,p=null,C=null,E=null,y=null,U=null,I=null,R=new yt(0,0,0),k=0,w=!1,M=null,L=null,N=null,O=null,D=null,_t.set(0,0,t.canvas.width,t.canvas.height),Qe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:H,disable:ue,bindFramebuffer:oe,drawBuffers:me,useProgram:Je,setBlending:G,setMaterial:K,setFlipSided:se,setCullFace:q,setLineWidth:ge,setPolygonOffset:te,setScissorTest:ce,activeTexture:de,bindTexture:Pe,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:B,texImage2D:Ue,texImage3D:_e,updateUBOMapping:Ne,uniformBlockBinding:Te,texStorage2D:ve,texStorage3D:De,texSubImage2D:Z,texSubImage3D:le,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ie,scissor:Ce,viewport:He,reset:ut}}function yD(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return h?new OffscreenCanvas(T,x):pa("canvas")}function v(T,x,B){let Z=1;const le=Pe(T);if((le.width>B||le.height>B)&&(Z=B/Math.max(le.width,le.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Q=Math.floor(Z*le.width),Ie=Math.floor(Z*le.height);d===void 0&&(d=g(Q,Ie));const ve=x?g(Q,Ie):d;return ve.width=Q,ve.height=Ie,ve.getContext("2d").drawImage(T,0,0,Q,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+Q+"x"+Ie+")."),ve}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){t.generateMipmap(T)}function C(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(T,x,B,Z,le=!1){if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Q=x;if(x===t.RED&&(B===t.FLOAT&&(Q=t.R32F),B===t.HALF_FLOAT&&(Q=t.R16F),B===t.UNSIGNED_BYTE&&(Q=t.R8)),x===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(Q=t.R8UI),B===t.UNSIGNED_SHORT&&(Q=t.R16UI),B===t.UNSIGNED_INT&&(Q=t.R32UI),B===t.BYTE&&(Q=t.R8I),B===t.SHORT&&(Q=t.R16I),B===t.INT&&(Q=t.R32I)),x===t.RG&&(B===t.FLOAT&&(Q=t.RG32F),B===t.HALF_FLOAT&&(Q=t.RG16F),B===t.UNSIGNED_BYTE&&(Q=t.RG8)),x===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(Q=t.RG8UI),B===t.UNSIGNED_SHORT&&(Q=t.RG16UI),B===t.UNSIGNED_INT&&(Q=t.RG32UI),B===t.BYTE&&(Q=t.RG8I),B===t.SHORT&&(Q=t.RG16I),B===t.INT&&(Q=t.RG32I)),x===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),B===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),B===t.UNSIGNED_INT&&(Q=t.RGB32UI),B===t.BYTE&&(Q=t.RGB8I),B===t.SHORT&&(Q=t.RGB16I),B===t.INT&&(Q=t.RGB32I)),x===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),B===t.UNSIGNED_INT&&(Q=t.RGBA32UI),B===t.BYTE&&(Q=t.RGBA8I),B===t.SHORT&&(Q=t.RGBA16I),B===t.INT&&(Q=t.RGBA32I)),x===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),x===t.RGBA){const Ie=le?jl:Mt.getTransfer(Z);B===t.FLOAT&&(Q=t.RGBA32F),B===t.HALF_FLOAT&&(Q=t.RGBA16F),B===t.UNSIGNED_BYTE&&(Q=Ie===Lt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function y(T,x){let B;return T?x===null||x===vr||x===da?B=t.DEPTH24_STENCIL8:x===es?B=t.DEPTH32F_STENCIL8:x===ua&&(B=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===vr||x===da?B=t.DEPTH_COMPONENT24:x===es?B=t.DEPTH_COMPONENT32F:x===ua&&(B=t.DEPTH_COMPONENT16),B}function U(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==_i&&T.minFilter!==Pi?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function I(T){const x=T.target;x.removeEventListener("dispose",I),k(x),x.isVideoTexture&&u.delete(x)}function R(T){const x=T.target;x.removeEventListener("dispose",R),M(x)}function k(T){const x=i.get(T);if(x.__webglInit===void 0)return;const B=T.source,Z=f.get(B);if(Z){const le=Z[x.__cacheKey];le.usedTimes--,le.usedTimes===0&&w(T),Object.keys(Z).length===0&&f.delete(B)}i.remove(T)}function w(T){const x=i.get(T);t.deleteTexture(x.__webglTexture);const B=T.source,Z=f.get(B);delete Z[x.__cacheKey],o.memory.textures--}function M(T){const x=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let le=0;le<x.__webglFramebuffer[Z].length;le++)t.deleteFramebuffer(x.__webglFramebuffer[Z][le]);else t.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)t.deleteFramebuffer(x.__webglFramebuffer[Z]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=T.textures;for(let Z=0,le=B.length;Z<le;Z++){const Q=i.get(B[Z]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(B[Z])}i.remove(T)}let L=0;function N(){L=0}function O(){const T=L;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),L+=1,T}function D(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function V(T,x){const B=i.get(T);if(T.isVideoTexture&&ce(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(B,T,x);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+x)}function W(T,x){const B=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){ye(B,T,x);return}n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+x)}function ee(T,x){const B=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){ye(B,T,x);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+x)}function Y(T,x){const B=i.get(T);if(T.version>0&&B.__version!==T.version){H(B,T,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+x)}const xe={[Yu]:t.REPEAT,[or]:t.CLAMP_TO_EDGE,[Ku]:t.MIRRORED_REPEAT},Me={[_i]:t.NEAREST,[KA]:t.NEAREST_MIPMAP_NEAREST,[Xa]:t.NEAREST_MIPMAP_LINEAR,[Pi]:t.LINEAR,[Bc]:t.LINEAR_MIPMAP_NEAREST,[ar]:t.LINEAR_MIPMAP_LINEAR},Le={[e1]:t.NEVER,[o1]:t.ALWAYS,[t1]:t.LESS,[Hv]:t.LEQUAL,[n1]:t.EQUAL,[r1]:t.GEQUAL,[i1]:t.GREATER,[s1]:t.NOTEQUAL};function We(T,x){if(x.type===es&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Pi||x.magFilter===Bc||x.magFilter===Xa||x.magFilter===ar||x.minFilter===Pi||x.minFilter===Bc||x.minFilter===Xa||x.minFilter===ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,xe[x.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,xe[x.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,xe[x.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,Me[x.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,Me[x.minFilter]),x.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,Le[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===_i||x.minFilter!==Xa&&x.minFilter!==ar||x.type===es&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function _t(T,x){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",I));const Z=x.source;let le=f.get(Z);le===void 0&&(le={},f.set(Z,le));const Q=D(x);if(Q!==T.__cacheKey){le[Q]===void 0&&(le[Q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),le[Q].usedTimes++;const Ie=le[T.__cacheKey];Ie!==void 0&&(le[T.__cacheKey].usedTimes--,Ie.usedTimes===0&&w(x)),T.__cacheKey=Q,T.__webglTexture=le[Q].texture}return B}function Qe(T,x,B){return Math.floor(Math.floor(T/B)/x)}function ie(T,x,B,Z){const Q=T.updateRanges;if(Q.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,B,Z,x.data);else{Q.sort((_e,Ce)=>_e.start-Ce.start);let Ie=0;for(let _e=1;_e<Q.length;_e++){const Ce=Q[Ie],He=Q[_e],Ne=Ce.start+Ce.count,Te=Qe(He.start,x.width,4),ut=Qe(Ce.start,x.width,4);He.start<=Ne+1&&Te===ut&&Qe(He.start+He.count-1,x.width,4)===Te?Ce.count=Math.max(Ce.count,He.start+He.count-Ce.start):(++Ie,Q[Ie]=He)}Q.length=Ie+1;const ve=t.getParameter(t.UNPACK_ROW_LENGTH),De=t.getParameter(t.UNPACK_SKIP_PIXELS),Ue=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let _e=0,Ce=Q.length;_e<Ce;_e++){const He=Q[_e],Ne=Math.floor(He.start/4),Te=Math.ceil(He.count/4),ut=Ne%x.width,z=Math.floor(Ne/x.width),we=Te,Ee=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ut),t.pixelStorei(t.UNPACK_SKIP_ROWS,z),n.texSubImage2D(t.TEXTURE_2D,0,ut,z,we,Ee,B,Z,x.data)}T.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ve),t.pixelStorei(t.UNPACK_SKIP_PIXELS,De),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ue)}}function ye(T,x,B){let Z=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=t.TEXTURE_3D);const le=_t(T,x),Q=x.source;n.bindTexture(Z,T.__webglTexture,t.TEXTURE0+B);const Ie=i.get(Q);if(Q.version!==Ie.__version||le===!0){n.activeTexture(t.TEXTURE0+B);const ve=Mt.getPrimaries(Mt.workingColorSpace),De=x.colorSpace===ws?null:Mt.getPrimaries(x.colorSpace),Ue=x.colorSpace===ws||ve===De?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let _e=v(x.image,!1,s.maxTextureSize);_e=de(x,_e);const Ce=r.convert(x.format,x.colorSpace),He=r.convert(x.type);let Ne=E(x.internalFormat,Ce,He,x.colorSpace,x.isVideoTexture);We(Z,x);let Te;const ut=x.mipmaps,z=x.isVideoTexture!==!0,we=Ie.__version===void 0||le===!0,Ee=Q.dataReady,ke=U(x,_e);if(x.isDepthTexture)Ne=y(x.format===ha,x.type),we&&(z?n.texStorage2D(t.TEXTURE_2D,1,Ne,_e.width,_e.height):n.texImage2D(t.TEXTURE_2D,0,Ne,_e.width,_e.height,0,Ce,He,null));else if(x.isDataTexture)if(ut.length>0){z&&we&&n.texStorage2D(t.TEXTURE_2D,ke,Ne,ut[0].width,ut[0].height);for(let be=0,he=ut.length;be<he;be++)Te=ut[be],z?Ee&&n.texSubImage2D(t.TEXTURE_2D,be,0,0,Te.width,Te.height,Ce,He,Te.data):n.texImage2D(t.TEXTURE_2D,be,Ne,Te.width,Te.height,0,Ce,He,Te.data);x.generateMipmaps=!1}else z?(we&&n.texStorage2D(t.TEXTURE_2D,ke,Ne,_e.width,_e.height),Ee&&ie(x,_e,Ce,He)):n.texImage2D(t.TEXTURE_2D,0,Ne,_e.width,_e.height,0,Ce,He,_e.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){z&&we&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ke,Ne,ut[0].width,ut[0].height,_e.depth);for(let be=0,he=ut.length;be<he;be++)if(Te=ut[be],x.format!==mi)if(Ce!==null)if(z){if(Ee)if(x.layerUpdates.size>0){const Ge=gp(Te.width,Te.height,x.format,x.type);for(const nt of x.layerUpdates){const dt=Te.data.subarray(nt*Ge/Te.data.BYTES_PER_ELEMENT,(nt+1)*Ge/Te.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,be,0,0,nt,Te.width,Te.height,1,Ce,dt)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,be,0,0,0,Te.width,Te.height,_e.depth,Ce,Te.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,be,Ne,Te.width,Te.height,_e.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?Ee&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,be,0,0,0,Te.width,Te.height,_e.depth,Ce,He,Te.data):n.texImage3D(t.TEXTURE_2D_ARRAY,be,Ne,Te.width,Te.height,_e.depth,0,Ce,He,Te.data)}else{z&&we&&n.texStorage2D(t.TEXTURE_2D,ke,Ne,ut[0].width,ut[0].height);for(let be=0,he=ut.length;be<he;be++)Te=ut[be],x.format!==mi?Ce!==null?z?Ee&&n.compressedTexSubImage2D(t.TEXTURE_2D,be,0,0,Te.width,Te.height,Ce,Te.data):n.compressedTexImage2D(t.TEXTURE_2D,be,Ne,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?Ee&&n.texSubImage2D(t.TEXTURE_2D,be,0,0,Te.width,Te.height,Ce,He,Te.data):n.texImage2D(t.TEXTURE_2D,be,Ne,Te.width,Te.height,0,Ce,He,Te.data)}else if(x.isDataArrayTexture)if(z){if(we&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ke,Ne,_e.width,_e.height,_e.depth),Ee)if(x.layerUpdates.size>0){const be=gp(_e.width,_e.height,x.format,x.type);for(const he of x.layerUpdates){const Ge=_e.data.subarray(he*be/_e.data.BYTES_PER_ELEMENT,(he+1)*be/_e.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,_e.width,_e.height,1,Ce,He,Ge)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ce,He,_e.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ne,_e.width,_e.height,_e.depth,0,Ce,He,_e.data);else if(x.isData3DTexture)z?(we&&n.texStorage3D(t.TEXTURE_3D,ke,Ne,_e.width,_e.height,_e.depth),Ee&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ce,He,_e.data)):n.texImage3D(t.TEXTURE_3D,0,Ne,_e.width,_e.height,_e.depth,0,Ce,He,_e.data);else if(x.isFramebufferTexture){if(we)if(z)n.texStorage2D(t.TEXTURE_2D,ke,Ne,_e.width,_e.height);else{let be=_e.width,he=_e.height;for(let Ge=0;Ge<ke;Ge++)n.texImage2D(t.TEXTURE_2D,Ge,Ne,be,he,0,Ce,He,null),be>>=1,he>>=1}}else if(ut.length>0){if(z&&we){const be=Pe(ut[0]);n.texStorage2D(t.TEXTURE_2D,ke,Ne,be.width,be.height)}for(let be=0,he=ut.length;be<he;be++)Te=ut[be],z?Ee&&n.texSubImage2D(t.TEXTURE_2D,be,0,0,Ce,He,Te):n.texImage2D(t.TEXTURE_2D,be,Ne,Ce,He,Te);x.generateMipmaps=!1}else if(z){if(we){const be=Pe(_e);n.texStorage2D(t.TEXTURE_2D,ke,Ne,be.width,be.height)}Ee&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ce,He,_e)}else n.texImage2D(t.TEXTURE_2D,0,Ne,Ce,He,_e);m(x)&&p(Z),Ie.__version=Q.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function H(T,x,B){if(x.image.length!==6)return;const Z=_t(T,x),le=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+B);const Q=i.get(le);if(le.version!==Q.__version||Z===!0){n.activeTexture(t.TEXTURE0+B);const Ie=Mt.getPrimaries(Mt.workingColorSpace),ve=x.colorSpace===ws?null:Mt.getPrimaries(x.colorSpace),De=x.colorSpace===ws||Ie===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const Ue=x.isCompressedTexture||x.image[0].isCompressedTexture,_e=x.image[0]&&x.image[0].isDataTexture,Ce=[];for(let he=0;he<6;he++)!Ue&&!_e?Ce[he]=v(x.image[he],!0,s.maxCubemapSize):Ce[he]=_e?x.image[he].image:x.image[he],Ce[he]=de(x,Ce[he]);const He=Ce[0],Ne=r.convert(x.format,x.colorSpace),Te=r.convert(x.type),ut=E(x.internalFormat,Ne,Te,x.colorSpace),z=x.isVideoTexture!==!0,we=Q.__version===void 0||Z===!0,Ee=le.dataReady;let ke=U(x,He);We(t.TEXTURE_CUBE_MAP,x);let be;if(Ue){z&&we&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ke,ut,He.width,He.height);for(let he=0;he<6;he++){be=Ce[he].mipmaps;for(let Ge=0;Ge<be.length;Ge++){const nt=be[Ge];x.format!==mi?Ne!==null?z?Ee&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ge,0,0,nt.width,nt.height,Ne,nt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ge,ut,nt.width,nt.height,0,nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ge,0,0,nt.width,nt.height,Ne,Te,nt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ge,ut,nt.width,nt.height,0,Ne,Te,nt.data)}}}else{if(be=x.mipmaps,z&&we){be.length>0&&ke++;const he=Pe(Ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ke,ut,he.width,he.height)}for(let he=0;he<6;he++)if(_e){z?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ce[he].width,Ce[he].height,Ne,Te,Ce[he].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ut,Ce[he].width,Ce[he].height,0,Ne,Te,Ce[he].data);for(let Ge=0;Ge<be.length;Ge++){const dt=be[Ge].image[he].image;z?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ge+1,0,0,dt.width,dt.height,Ne,Te,dt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ge+1,ut,dt.width,dt.height,0,Ne,Te,dt.data)}}else{z?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ne,Te,Ce[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ut,Ne,Te,Ce[he]);for(let Ge=0;Ge<be.length;Ge++){const nt=be[Ge];z?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ge+1,0,0,Ne,Te,nt.image[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ge+1,ut,Ne,Te,nt.image[he])}}}m(x)&&p(t.TEXTURE_CUBE_MAP),Q.__version=le.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ue(T,x,B,Z,le,Q){const Ie=r.convert(B.format,B.colorSpace),ve=r.convert(B.type),De=E(B.internalFormat,Ie,ve,B.colorSpace),Ue=i.get(x),_e=i.get(B);if(_e.__renderTarget=x,!Ue.__hasExternalTextures){const Ce=Math.max(1,x.width>>Q),He=Math.max(1,x.height>>Q);le===t.TEXTURE_3D||le===t.TEXTURE_2D_ARRAY?n.texImage3D(le,Q,De,Ce,He,x.depth,0,Ie,ve,null):n.texImage2D(le,Q,De,Ce,He,0,Ie,ve,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),te(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,le,_e.__webglTexture,0,ge(x)):(le===t.TEXTURE_2D||le>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,le,_e.__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function oe(T,x,B){if(t.bindRenderbuffer(t.RENDERBUFFER,T),x.depthBuffer){const Z=x.depthTexture,le=Z&&Z.isDepthTexture?Z.type:null,Q=y(x.stencilBuffer,le),Ie=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=ge(x);te(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ve,Q,x.width,x.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,Q,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,Q,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ie,t.RENDERBUFFER,T)}else{const Z=x.textures;for(let le=0;le<Z.length;le++){const Q=Z[le],Ie=r.convert(Q.format,Q.colorSpace),ve=r.convert(Q.type),De=E(Q.internalFormat,Ie,ve,Q.colorSpace),Ue=ge(x);B&&te(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,De,x.width,x.height):te(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ue,De,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,De,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function me(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(x.depthTexture);Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);const le=Z.__webglTexture,Q=ge(x);if(x.depthTexture.format===fa)te(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0);else if(x.depthTexture.format===ha)te(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Je(T){const x=i.get(T),B=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){const le=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",le)};Z.addEventListener("dispose",le),x.__depthDisposeCallback=le}x.__boundDepthTexture=Z}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const Z=T.texture.mipmaps;Z&&Z.length>0?me(x.__webglFramebuffer[0],T):me(x.__webglFramebuffer,T)}else if(B){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=t.createRenderbuffer(),oe(x.__webglDepthbuffer[Z],T,!1);else{const le=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,Q)}}else{const Z=T.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),oe(x.__webglDepthbuffer,T,!1);else{const le=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,Q)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function P(T,x,B){const Z=i.get(T);x!==void 0&&ue(Z.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Je(T)}function b(T){const x=T.texture,B=i.get(T),Z=i.get(x);T.addEventListener("dispose",R);const le=T.textures,Q=T.isWebGLCubeRenderTarget===!0,Ie=le.length>1;if(Ie||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=x.version,o.memory.textures++),Q){B.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[ve]=[];for(let De=0;De<x.mipmaps.length;De++)B.__webglFramebuffer[ve][De]=t.createFramebuffer()}else B.__webglFramebuffer[ve]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let ve=0;ve<x.mipmaps.length;ve++)B.__webglFramebuffer[ve]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(Ie)for(let ve=0,De=le.length;ve<De;ve++){const Ue=i.get(le[ve]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=t.createTexture(),o.memory.textures++)}if(T.samples>0&&te(T)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ve=0;ve<le.length;ve++){const De=le[ve];B.__webglColorRenderbuffer[ve]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[ve]);const Ue=r.convert(De.format,De.colorSpace),_e=r.convert(De.type),Ce=E(De.internalFormat,Ue,_e,De.colorSpace,T.isXRRenderTarget===!0),He=ge(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,He,Ce,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,B.__webglColorRenderbuffer[ve])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),oe(B.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),We(t.TEXTURE_CUBE_MAP,x);for(let ve=0;ve<6;ve++)if(x.mipmaps&&x.mipmaps.length>0)for(let De=0;De<x.mipmaps.length;De++)ue(B.__webglFramebuffer[ve][De],T,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,De);else ue(B.__webglFramebuffer[ve],T,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(x)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ie){for(let ve=0,De=le.length;ve<De;ve++){const Ue=le[ve],_e=i.get(Ue);let Ce=t.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Ce=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ce,_e.__webglTexture),We(Ce,Ue),ue(B.__webglFramebuffer,T,Ue,t.COLOR_ATTACHMENT0+ve,Ce,0),m(Ue)&&p(Ce)}n.unbindTexture()}else{let ve=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ve=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ve,Z.__webglTexture),We(ve,x),x.mipmaps&&x.mipmaps.length>0)for(let De=0;De<x.mipmaps.length;De++)ue(B.__webglFramebuffer[De],T,x,t.COLOR_ATTACHMENT0,ve,De);else ue(B.__webglFramebuffer,T,x,t.COLOR_ATTACHMENT0,ve,0);m(x)&&p(ve),n.unbindTexture()}T.depthBuffer&&Je(T)}function G(T){const x=T.textures;for(let B=0,Z=x.length;B<Z;B++){const le=x[B];if(m(le)){const Q=C(T),Ie=i.get(le).__webglTexture;n.bindTexture(Q,Ie),p(Q),n.unbindTexture()}}}const K=[],se=[];function q(T){if(T.samples>0){if(te(T)===!1){const x=T.textures,B=T.width,Z=T.height;let le=t.COLOR_BUFFER_BIT;const Q=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ie=i.get(T),ve=x.length>1;if(ve)for(let Ue=0;Ue<x.length;Ue++)n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const De=T.texture.mipmaps;De&&De.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ue=0;Ue<x.length;Ue++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(le|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(le|=t.STENCIL_BUFFER_BIT)),ve){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ue]);const _e=i.get(x[Ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,_e,0)}t.blitFramebuffer(0,0,B,Z,0,0,B,Z,le,t.NEAREST),l===!0&&(K.length=0,se.length=0,K.push(t.COLOR_ATTACHMENT0+Ue),T.depthBuffer&&T.resolveDepthBuffer===!1&&(K.push(Q),se.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,se)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,K))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ve)for(let Ue=0;Ue<x.length;Ue++){n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ue]);const _e=i.get(x[Ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,_e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function ge(T){return Math.min(s.maxSamples,T.samples)}function te(T){const x=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ce(T){const x=o.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function de(T,x){const B=T.colorSpace,Z=T.format,le=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==yo&&B!==ws&&(Mt.getTransfer(B)===Lt?(Z!==mi||le!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function Pe(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=V,this.setTexture2DArray=W,this.setTexture3D=ee,this.setTextureCube=Y,this.rebindTextures=P,this.setupRenderTarget=b,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=te}function wD(t,e){function n(i,s=ws){let r;const o=Mt.getTransfer(s);if(i===Fi)return t.UNSIGNED_BYTE;if(i===ff)return t.UNSIGNED_SHORT_4_4_4_4;if(i===hf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Iv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Dv)return t.BYTE;if(i===Lv)return t.SHORT;if(i===ua)return t.UNSIGNED_SHORT;if(i===df)return t.INT;if(i===vr)return t.UNSIGNED_INT;if(i===es)return t.FLOAT;if(i===La)return t.HALF_FLOAT;if(i===Uv)return t.ALPHA;if(i===Nv)return t.RGB;if(i===mi)return t.RGBA;if(i===fa)return t.DEPTH_COMPONENT;if(i===ha)return t.DEPTH_STENCIL;if(i===Ov)return t.RED;if(i===pf)return t.RED_INTEGER;if(i===Fv)return t.RG;if(i===mf)return t.RG_INTEGER;if(i===gf)return t.RGBA_INTEGER;if(i===wl||i===Sl||i===Ml||i===El)if(o===Lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===wl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Sl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ml)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===El)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===wl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Sl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ml)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===El)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zu||i===Qu||i===Ju||i===ed)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Zu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ju)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ed)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===td||i===nd||i===id)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===td||i===nd)return o===Lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===id)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===sd||i===rd||i===od||i===ad||i===ld||i===cd||i===ud||i===dd||i===fd||i===hd||i===pd||i===md||i===gd||i===vd)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===sd)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rd)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===od)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ad)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ld)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cd)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ud)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===dd)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fd)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hd)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pd)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===md)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gd)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vd)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Tl||i===_d||i===bd)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Tl)return o===Lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_d)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bd)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kv||i===xd||i===yd||i===wd)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Tl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===xd)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yd)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wd)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===da?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class c_ extends Rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const SD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MD=`
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

}`;class ED{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new c_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Fs({vertexShader:SD,fragmentShader:MD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new gi(new gc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TD extends Sr{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,g=null;const v=new ED,m={},p=n.getContextAttributes();let C=null,E=null;const y=[],U=[],I=new lt;let R=null;const k=new qn;k.viewport=new jt;const w=new qn;w.viewport=new jt;const M=[k,w],L=new X1;let N=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ye=y[ie];return ye===void 0&&(ye=new au,y[ie]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(ie){let ye=y[ie];return ye===void 0&&(ye=new au,y[ie]=ye),ye.getGripSpace()},this.getHand=function(ie){let ye=y[ie];return ye===void 0&&(ye=new au,y[ie]=ye),ye.getHandSpace()};function D(ie){const ye=U.indexOf(ie.inputSource);if(ye===-1)return;const H=y[ye];H!==void 0&&(H.update(ie.inputSource,ie.frame,c||o),H.dispatchEvent({type:ie.type,data:ie.inputSource}))}function V(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",W);for(let ie=0;ie<y.length;ie++){const ye=U[ie];ye!==null&&(U[ie]=null,y[ie].disconnect(ye))}N=null,O=null,v.reset();for(const ie in m)delete m[ie];e.setRenderTarget(C),h=null,f=null,d=null,s=null,E=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",V),s.addEventListener("inputsourceschange",W),p.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(s,n)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let H=null,ue=null,oe=null;p.depth&&(oe=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,H=p.stencil?ha:fa,ue=p.stencil?da:vr);const me={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:r};f=d.createProjectionLayer(me),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new br(f.textureWidth,f.textureHeight,{format:mi,type:Fi,depthTexture:new Jv(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const H={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,n,H),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),E=new br(h.framebufferWidth,h.framebufferHeight,{format:mi,type:Fi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Qe.setContext(s),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function W(ie){for(let ye=0;ye<ie.removed.length;ye++){const H=ie.removed[ye],ue=U.indexOf(H);ue>=0&&(U[ue]=null,y[ue].disconnect(H))}for(let ye=0;ye<ie.added.length;ye++){const H=ie.added[ye];let ue=U.indexOf(H);if(ue===-1){for(let me=0;me<y.length;me++)if(me>=U.length){U.push(H),ue=me;break}else if(U[me]===null){U[me]=H,ue=me;break}if(ue===-1)break}const oe=y[ue];oe&&oe.connect(H)}}const ee=new J,Y=new J;function xe(ie,ye,H){ee.setFromMatrixPosition(ye.matrixWorld),Y.setFromMatrixPosition(H.matrixWorld);const ue=ee.distanceTo(Y),oe=ye.projectionMatrix.elements,me=H.projectionMatrix.elements,Je=oe[14]/(oe[10]-1),P=oe[14]/(oe[10]+1),b=(oe[9]+1)/oe[5],G=(oe[9]-1)/oe[5],K=(oe[8]-1)/oe[0],se=(me[8]+1)/me[0],q=Je*K,ge=Je*se,te=ue/(-K+se),ce=te*-K;if(ye.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(ce),ie.translateZ(te),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),oe[10]===-1)ie.projectionMatrix.copy(ye.projectionMatrix),ie.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const de=Je+te,Pe=P+te,T=q-ce,x=ge+(ue-ce),B=b*P/Pe*de,Z=G*P/Pe*de;ie.projectionMatrix.makePerspective(T,x,B,Z,de,Pe),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function Me(ie,ye){ye===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ye.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let ye=ie.near,H=ie.far;v.texture!==null&&(v.depthNear>0&&(ye=v.depthNear),v.depthFar>0&&(H=v.depthFar)),L.near=w.near=k.near=ye,L.far=w.far=k.far=H,(N!==L.near||O!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),N=L.near,O=L.far),L.layers.mask=ie.layers.mask|6,k.layers.mask=L.layers.mask&3,w.layers.mask=L.layers.mask&5;const ue=ie.parent,oe=L.cameras;Me(L,ue);for(let me=0;me<oe.length;me++)Me(oe[me],ue);oe.length===2?xe(L,k,w):L.projectionMatrix.copy(k.projectionMatrix),Le(ie,L,ue)};function Le(ie,ye,H){H===null?ie.matrix.copy(ye.matrixWorld):(ie.matrix.copy(H.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ye.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ye.projectionMatrix),ie.projectionMatrixInverse.copy(ye.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Sd*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(ie){l=ie,f!==null&&(f.fixedFoveation=ie),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ie)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(L)},this.getCameraTexture=function(ie){return m[ie]};let We=null;function _t(ie,ye){if(u=ye.getViewerPose(c||o),g=ye,u!==null){const H=u.views;h!==null&&(e.setRenderTargetFramebuffer(E,h.framebuffer),e.setRenderTarget(E));let ue=!1;H.length!==L.cameras.length&&(L.cameras.length=0,ue=!0);for(let P=0;P<H.length;P++){const b=H[P];let G=null;if(h!==null)G=h.getViewport(b);else{const se=d.getViewSubImage(f,b);G=se.viewport,P===0&&(e.setRenderTargetTextures(E,se.colorTexture,se.depthStencilTexture),e.setRenderTarget(E))}let K=M[P];K===void 0&&(K=new qn,K.layers.enable(P),K.viewport=new jt,M[P]=K),K.matrix.fromArray(b.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(b.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(G.x,G.y,G.width,G.height),P===0&&(L.matrix.copy(K.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),ue===!0&&L.cameras.push(K)}const oe=s.enabledFeatures;if(oe&&oe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&d){const P=d.getDepthInformation(H[0]);P&&P.isValid&&P.texture&&v.init(P,s.renderState)}if(oe&&oe.includes("camera-access")&&(e.state.unbindTexture(),d))for(let P=0;P<H.length;P++){const b=H[P].camera;if(b){let G=m[b];G||(G=new c_,m[b]=G);const K=d.getCameraImage(b);G.sourceTexture=K}}}for(let H=0;H<y.length;H++){const ue=U[H],oe=y[H];ue!==null&&oe!==void 0&&oe.update(ue,ye,c||o)}We&&We(ie,ye),ye.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ye}),g=null}const Qe=new s_;Qe.setAnimationLoop(_t),this.setAnimationLoop=function(ie){We=ie},this.dispose=function(){}}}const Js=new ki,AD=new Zt;function CD(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Yv(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,C,E,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,C,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const C=e.get(p),E=C.envMap,y=C.envMapRotation;E&&(m.envMap.value=E,Js.copy(y),Js.x*=-1,Js.y*=-1,Js.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Js.y*=-1,Js.z*=-1),m.envMapRotation.value.setFromMatrix4(AD.makeRotationFromEuler(Js)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,C,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*C,m.scale.value=E*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,C){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const C=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function RD(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(C,E){const y=E.program;i.uniformBlockBinding(C,y)}function c(C,E){let y=s[C.id];y===void 0&&(g(C),y=u(C),s[C.id]=y,C.addEventListener("dispose",m));const U=E.program;i.updateUBOMapping(C,U);const I=e.render.frame;r[C.id]!==I&&(f(C),r[C.id]=I)}function u(C){const E=d();C.__bindingPointIndex=E;const y=t.createBuffer(),U=C.__size,I=C.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,U,I),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,y),y}function d(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(C){const E=s[C.id],y=C.uniforms,U=C.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let I=0,R=y.length;I<R;I++){const k=Array.isArray(y[I])?y[I]:[y[I]];for(let w=0,M=k.length;w<M;w++){const L=k[w];if(h(L,I,w,U)===!0){const N=L.__offset,O=Array.isArray(L.value)?L.value:[L.value];let D=0;for(let V=0;V<O.length;V++){const W=O[V],ee=v(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,N+D,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,D),D+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,N,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(C,E,y,U){const I=C.value,R=E+"_"+y;if(U[R]===void 0)return typeof I=="number"||typeof I=="boolean"?U[R]=I:U[R]=I.clone(),!0;{const k=U[R];if(typeof I=="number"||typeof I=="boolean"){if(k!==I)return U[R]=I,!0}else if(k.equals(I)===!1)return k.copy(I),!0}return!1}function g(C){const E=C.uniforms;let y=0;const U=16;for(let R=0,k=E.length;R<k;R++){const w=Array.isArray(E[R])?E[R]:[E[R]];for(let M=0,L=w.length;M<L;M++){const N=w[M],O=Array.isArray(N.value)?N.value:[N.value];for(let D=0,V=O.length;D<V;D++){const W=O[D],ee=v(W),Y=y%U,xe=Y%ee.boundary,Me=Y+xe;y+=xe,Me!==0&&U-Me<ee.storage&&(y+=U-Me),N.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=ee.storage}}}const I=y%U;return I>0&&(y+=U-I),C.__size=y,C.__cache={},this}function v(C){const E={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(E.boundary=4,E.storage=4):C.isVector2?(E.boundary=8,E.storage=8):C.isVector3||C.isColor?(E.boundary=16,E.storage=12):C.isVector4?(E.boundary=16,E.storage=16):C.isMatrix3?(E.boundary=48,E.storage=48):C.isMatrix4?(E.boundary=64,E.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),E}function m(C){const E=C.target;E.removeEventListener("dispose",m);const y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const C in s)t.deleteBuffer(s[C]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class u_{constructor(e={}){const{canvas:n=c1(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const C=[],E=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Us,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let U=!1;this._outputColorSpace=gn;let I=0,R=0,k=null,w=-1,M=null;const L=new jt,N=new jt;let O=null;const D=new yt(0);let V=0,W=n.width,ee=n.height,Y=1,xe=null,Me=null;const Le=new jt(0,0,W,ee),We=new jt(0,0,W,ee);let _t=!1;const Qe=new bf;let ie=!1,ye=!1;const H=new Zt,ue=new J,oe=new jt,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function P(){return k===null?Y:1}let b=i;function G(A,X){return n.getContext(A,X)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${uf}`),n.addEventListener("webglcontextlost",Ee,!1),n.addEventListener("webglcontextrestored",ke,!1),n.addEventListener("webglcontextcreationerror",be,!1),b===null){const X="webgl2";if(b=G(X,A),b===null)throw G(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let K,se,q,ge,te,ce,de,Pe,T,x,B,Z,le,Q,Ie,ve,De,Ue,_e,Ce,He,Ne,Te,ut;function z(){K=new HR(b),K.init(),Ne=new wD(b,K),se=new IR(b,K,e,Ne),q=new xD(b,K),se.reversedDepthBuffer&&f&&q.buffers.depth.setReversed(!0),ge=new GR(b),te=new aD,ce=new yD(b,K,q,te,se,Ne,ge),de=new NR(y),Pe=new BR(y),T=new Y1(b),Te=new DR(b,T),x=new zR(b,T,ge,Te),B=new $R(b,x,T,ge),_e=new WR(b,se,ce),ve=new UR(te),Z=new oD(y,de,Pe,K,se,Te,ve),le=new CD(y,te),Q=new cD,Ie=new mD(K),Ue=new PR(y,de,Pe,q,B,h,l),De=new _D(y,B,se),ut=new RD(b,ge,se,q),Ce=new LR(b,K,ge),He=new VR(b,K,ge),ge.programs=Z.programs,y.capabilities=se,y.extensions=K,y.properties=te,y.renderLists=Q,y.shadowMap=De,y.state=q,y.info=ge}z();const we=new TD(y,b);this.xr=we,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const A=K.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=K.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(W,ee,!1))},this.getSize=function(A){return A.set(W,ee)},this.setSize=function(A,X,ne=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,ee=X,n.width=Math.floor(A*Y),n.height=Math.floor(X*Y),ne===!0&&(n.style.width=A+"px",n.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(W*Y,ee*Y).floor()},this.setDrawingBufferSize=function(A,X,ne){W=A,ee=X,Y=ne,n.width=Math.floor(A*ne),n.height=Math.floor(X*ne),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(Le)},this.setViewport=function(A,X,ne,re){A.isVector4?Le.set(A.x,A.y,A.z,A.w):Le.set(A,X,ne,re),q.viewport(L.copy(Le).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(We)},this.setScissor=function(A,X,ne,re){A.isVector4?We.set(A.x,A.y,A.z,A.w):We.set(A,X,ne,re),q.scissor(N.copy(We).multiplyScalar(Y).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(A){q.setScissorTest(_t=A)},this.setOpaqueSort=function(A){xe=A},this.setTransparentSort=function(A){Me=A},this.getClearColor=function(A){return A.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,ne=!0){let re=0;if(A){let j=!1;if(k!==null){const Se=k.texture.format;j=Se===gf||Se===mf||Se===pf}if(j){const Se=k.texture.type,Oe=Se===Fi||Se===vr||Se===ua||Se===da||Se===ff||Se===hf,$e=Ue.getClearColor(),ze=Ue.getClearAlpha(),it=$e.r,rt=$e.g,qe=$e.b;Oe?(g[0]=it,g[1]=rt,g[2]=qe,g[3]=ze,b.clearBufferuiv(b.COLOR,0,g)):(v[0]=it,v[1]=rt,v[2]=qe,v[3]=ze,b.clearBufferiv(b.COLOR,0,v))}else re|=b.COLOR_BUFFER_BIT}X&&(re|=b.DEPTH_BUFFER_BIT),ne&&(re|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ee,!1),n.removeEventListener("webglcontextrestored",ke,!1),n.removeEventListener("webglcontextcreationerror",be,!1),Ue.dispose(),Q.dispose(),Ie.dispose(),te.dispose(),de.dispose(),Pe.dispose(),B.dispose(),Te.dispose(),ut.dispose(),Z.dispose(),we.dispose(),we.removeEventListener("sessionstart",$),we.removeEventListener("sessionend",S),F.stop()};function Ee(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const A=ge.autoReset,X=De.enabled,ne=De.autoUpdate,re=De.needsUpdate,j=De.type;z(),ge.autoReset=A,De.enabled=X,De.autoUpdate=ne,De.needsUpdate=re,De.type=j}function be(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function he(A){const X=A.target;X.removeEventListener("dispose",he),Ge(X)}function Ge(A){nt(A),te.remove(A)}function nt(A){const X=te.get(A).programs;X!==void 0&&(X.forEach(function(ne){Z.releaseProgram(ne)}),A.isShaderMaterial&&Z.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,ne,re,j,Se){X===null&&(X=me);const Oe=j.isMesh&&j.matrixWorld.determinant()<0,$e=Gt(A,X,ne,re,j);q.setMaterial(re,Oe);let ze=ne.index,it=1;if(re.wireframe===!0){if(ze=x.getWireframeAttribute(ne),ze===void 0)return;it=2}const rt=ne.drawRange,qe=ne.attributes.position;let xt=rt.start*it,Dt=(rt.start+rt.count)*it;Se!==null&&(xt=Math.max(xt,Se.start*it),Dt=Math.min(Dt,(Se.start+Se.count)*it)),ze!==null?(xt=Math.max(xt,0),Dt=Math.min(Dt,ze.count)):qe!=null&&(xt=Math.max(xt,0),Dt=Math.min(Dt,qe.count));const Wt=Dt-xt;if(Wt<0||Wt===1/0)return;Te.setup(j,re,$e,ne,ze);let Bt,Ut=Ce;if(ze!==null&&(Bt=T.get(ze),Ut=He,Ut.setIndex(Bt)),j.isMesh)re.wireframe===!0?(q.setLineWidth(re.wireframeLinewidth*P()),Ut.setMode(b.LINES)):Ut.setMode(b.TRIANGLES);else if(j.isLine){let et=re.linewidth;et===void 0&&(et=1),q.setLineWidth(et*P()),j.isLineSegments?Ut.setMode(b.LINES):j.isLineLoop?Ut.setMode(b.LINE_LOOP):Ut.setMode(b.LINE_STRIP)}else j.isPoints?Ut.setMode(b.POINTS):j.isSprite&&Ut.setMode(b.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)to("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ut.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))Ut.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const et=j._multiDrawStarts,zt=j._multiDrawCounts,wt=j._multiDrawCount,Gn=ze?T.get(ze).bytesPerElement:1,Mr=te.get(re).currentProgram.getUniforms();for(let Wn=0;Wn<wt;Wn++)Mr.setValue(b,"_gl_DrawID",Wn),Ut.render(et[Wn]/Gn,zt[Wn])}else if(j.isInstancedMesh)Ut.renderInstances(xt,Wt,j.count);else if(ne.isInstancedBufferGeometry){const et=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,zt=Math.min(ne.instanceCount,et);Ut.renderInstances(xt,Wt,zt)}else Ut.render(xt,Wt)};function dt(A,X,ne){A.transparent===!0&&A.side===Ji&&A.forceSinglePass===!1?(A.side=zn,A.needsUpdate=!0,at(A,X,ne),A.side=Os,A.needsUpdate=!0,at(A,X,ne),A.side=Ji):at(A,X,ne)}this.compile=function(A,X,ne=null){ne===null&&(ne=A),p=Ie.get(ne),p.init(X),E.push(p),ne.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),A!==ne&&A.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),p.setupLights();const re=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Se=j.material;if(Se)if(Array.isArray(Se))for(let Oe=0;Oe<Se.length;Oe++){const $e=Se[Oe];dt($e,ne,j),re.add($e)}else dt(Se,ne,j),re.add(Se)}),p=E.pop(),re},this.compileAsync=function(A,X,ne=null){const re=this.compile(A,X,ne);return new Promise(j=>{function Se(){if(re.forEach(function(Oe){te.get(Oe).currentProgram.isReady()&&re.delete(Oe)}),re.size===0){j(A);return}setTimeout(Se,10)}K.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let ft=null;function Ln(A){ft&&ft(A)}function $(){F.stop()}function S(){F.start()}const F=new s_;F.setAnimationLoop(Ln),typeof self<"u"&&F.setContext(self),this.setAnimationLoop=function(A){ft=A,we.setAnimationLoop(A),A===null?F.stop():F.start()},we.addEventListener("sessionstart",$),we.addEventListener("sessionend",S),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(X),X=we.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,X,k),p=Ie.get(A,E.length),p.init(X),E.push(p),H.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Qe.setFromProjectionMatrix(H,Di,X.reversedDepth),ye=this.localClippingEnabled,ie=ve.init(this.clippingPlanes,ye),m=Q.get(A,C.length),m.init(),C.push(m),we.enabled===!0&&we.isPresenting===!0){const Se=y.xr.getDepthSensingMesh();Se!==null&&pe(Se,X,-1/0,y.sortObjects)}pe(A,X,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(xe,Me),Je=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,Je&&Ue.addToRenderList(m,A),this.info.render.frame++,ie===!0&&ve.beginShadows();const ne=p.state.shadowsArray;De.render(ne,A,X),ie===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=m.opaque,j=m.transmissive;if(p.setupLights(),X.isArrayCamera){const Se=X.cameras;if(j.length>0)for(let Oe=0,$e=Se.length;Oe<$e;Oe++){const ze=Se[Oe];Be(re,j,A,ze)}Je&&Ue.render(A);for(let Oe=0,$e=Se.length;Oe<$e;Oe++){const ze=Se[Oe];Ae(m,A,ze,ze.viewport)}}else j.length>0&&Be(re,j,A,X),Je&&Ue.render(A),Ae(m,A,X);k!==null&&R===0&&(ce.updateMultisampleRenderTarget(k),ce.updateRenderTargetMipmap(k)),A.isScene===!0&&A.onAfterRender(y,A,X),Te.resetDefaultState(),w=-1,M=null,E.pop(),E.length>0?(p=E[E.length-1],ie===!0&&ve.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,C.pop(),C.length>0?m=C[C.length-1]:m=null};function pe(A,X,ne,re){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)ne=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Qe.intersectsSprite(A)){re&&oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(H);const Oe=B.update(A),$e=A.material;$e.visible&&m.push(A,Oe,$e,ne,oe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Qe.intersectsObject(A))){const Oe=B.update(A),$e=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),oe.copy(A.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),oe.copy(Oe.boundingSphere.center)),oe.applyMatrix4(A.matrixWorld).applyMatrix4(H)),Array.isArray($e)){const ze=Oe.groups;for(let it=0,rt=ze.length;it<rt;it++){const qe=ze[it],xt=$e[qe.materialIndex];xt&&xt.visible&&m.push(A,Oe,xt,ne,oe.z,qe)}}else $e.visible&&m.push(A,Oe,$e,ne,oe.z,null)}}const Se=A.children;for(let Oe=0,$e=Se.length;Oe<$e;Oe++)pe(Se[Oe],X,ne,re)}function Ae(A,X,ne,re){const j=A.opaque,Se=A.transmissive,Oe=A.transparent;p.setupLightsView(ne),ie===!0&&ve.setGlobalState(y.clippingPlanes,ne),re&&q.viewport(L.copy(re)),j.length>0&&je(j,X,ne),Se.length>0&&je(Se,X,ne),Oe.length>0&&je(Oe,X,ne),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function Be(A,X,ne,re){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[re.id]===void 0&&(p.state.transmissionRenderTarget[re.id]=new br(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?La:Fi,minFilter:ar,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const Se=p.state.transmissionRenderTarget[re.id],Oe=re.viewport||L;Se.setSize(Oe.z*y.transmissionResolutionScale,Oe.w*y.transmissionResolutionScale);const $e=y.getRenderTarget(),ze=y.getActiveCubeFace(),it=y.getActiveMipmapLevel();y.setRenderTarget(Se),y.getClearColor(D),V=y.getClearAlpha(),V<1&&y.setClearColor(16777215,.5),y.clear(),Je&&Ue.render(ne);const rt=y.toneMapping;y.toneMapping=Us;const qe=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),p.setupLightsView(re),ie===!0&&ve.setGlobalState(y.clippingPlanes,re),je(A,ne,re),ce.updateMultisampleRenderTarget(Se),ce.updateRenderTargetMipmap(Se),K.has("WEBGL_multisampled_render_to_texture")===!1){let xt=!1;for(let Dt=0,Wt=X.length;Dt<Wt;Dt++){const Bt=X[Dt],Ut=Bt.object,et=Bt.geometry,zt=Bt.material,wt=Bt.group;if(zt.side===Ji&&Ut.layers.test(re.layers)){const Gn=zt.side;zt.side=zn,zt.needsUpdate=!0,ot(Ut,ne,re,et,zt,wt),zt.side=Gn,zt.needsUpdate=!0,xt=!0}}xt===!0&&(ce.updateMultisampleRenderTarget(Se),ce.updateRenderTargetMipmap(Se))}y.setRenderTarget($e,ze,it),y.setClearColor(D,V),qe!==void 0&&(re.viewport=qe),y.toneMapping=rt}function je(A,X,ne){const re=X.isScene===!0?X.overrideMaterial:null;for(let j=0,Se=A.length;j<Se;j++){const Oe=A[j],$e=Oe.object,ze=Oe.geometry,it=Oe.group;let rt=Oe.material;rt.allowOverride===!0&&re!==null&&(rt=re),$e.layers.test(ne.layers)&&ot($e,X,ne,ze,rt,it)}}function ot(A,X,ne,re,j,Se){A.onBeforeRender(y,X,ne,re,j,Se),A.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(y,X,ne,re,A,Se),j.transparent===!0&&j.side===Ji&&j.forceSinglePass===!1?(j.side=zn,j.needsUpdate=!0,y.renderBufferDirect(ne,X,re,j,A,Se),j.side=Os,j.needsUpdate=!0,y.renderBufferDirect(ne,X,re,j,A,Se),j.side=Ji):y.renderBufferDirect(ne,X,re,j,A,Se),A.onAfterRender(y,X,ne,re,j,Se)}function at(A,X,ne){X.isScene!==!0&&(X=me);const re=te.get(A),j=p.state.lights,Se=p.state.shadowsArray,Oe=j.state.version,$e=Z.getParameters(A,j.state,Se,X,ne),ze=Z.getProgramCacheKey($e);let it=re.programs;re.environment=A.isMeshStandardMaterial?X.environment:null,re.fog=X.fog,re.envMap=(A.isMeshStandardMaterial?Pe:de).get(A.envMap||re.environment),re.envMapRotation=re.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,it===void 0&&(A.addEventListener("dispose",he),it=new Map,re.programs=it);let rt=it.get(ze);if(rt!==void 0){if(re.currentProgram===rt&&re.lightsStateVersion===Oe)return bt(A,$e),rt}else $e.uniforms=Z.getUniforms(A),A.onBeforeCompile($e,y),rt=Z.acquireProgram($e,ze),it.set(ze,rt),re.uniforms=$e.uniforms;const qe=re.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qe.clippingPlanes=ve.uniform),bt(A,$e),re.needsLights=os(A),re.lightsStateVersion=Oe,re.needsLights&&(qe.ambientLightColor.value=j.state.ambient,qe.lightProbe.value=j.state.probe,qe.directionalLights.value=j.state.directional,qe.directionalLightShadows.value=j.state.directionalShadow,qe.spotLights.value=j.state.spot,qe.spotLightShadows.value=j.state.spotShadow,qe.rectAreaLights.value=j.state.rectArea,qe.ltc_1.value=j.state.rectAreaLTC1,qe.ltc_2.value=j.state.rectAreaLTC2,qe.pointLights.value=j.state.point,qe.pointLightShadows.value=j.state.pointShadow,qe.hemisphereLights.value=j.state.hemi,qe.directionalShadowMap.value=j.state.directionalShadowMap,qe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,qe.spotShadowMap.value=j.state.spotShadowMap,qe.spotLightMatrix.value=j.state.spotLightMatrix,qe.spotLightMap.value=j.state.spotLightMap,qe.pointShadowMap.value=j.state.pointShadowMap,qe.pointShadowMatrix.value=j.state.pointShadowMatrix),re.currentProgram=rt,re.uniformsList=null,rt}function Xe(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Cl.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function bt(A,X){const ne=te.get(A);ne.outputColorSpace=X.outputColorSpace,ne.batching=X.batching,ne.batchingColor=X.batchingColor,ne.instancing=X.instancing,ne.instancingColor=X.instancingColor,ne.instancingMorph=X.instancingMorph,ne.skinning=X.skinning,ne.morphTargets=X.morphTargets,ne.morphNormals=X.morphNormals,ne.morphColors=X.morphColors,ne.morphTargetsCount=X.morphTargetsCount,ne.numClippingPlanes=X.numClippingPlanes,ne.numIntersection=X.numClipIntersection,ne.vertexAlphas=X.vertexAlphas,ne.vertexTangents=X.vertexTangents,ne.toneMapping=X.toneMapping}function Gt(A,X,ne,re,j){X.isScene!==!0&&(X=me),ce.resetTextureUnits();const Se=X.fog,Oe=re.isMeshStandardMaterial?X.environment:null,$e=k===null?y.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:yo,ze=(re.isMeshStandardMaterial?Pe:de).get(re.envMap||Oe),it=re.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,rt=!!ne.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),qe=!!ne.morphAttributes.position,xt=!!ne.morphAttributes.normal,Dt=!!ne.morphAttributes.color;let Wt=Us;re.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Wt=y.toneMapping);const Bt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Ut=Bt!==void 0?Bt.length:0,et=te.get(re),zt=p.state.lights;if(ie===!0&&(ye===!0||A!==M)){const yn=A===M&&re.id===w;ve.setState(re,A,yn)}let wt=!1;re.version===et.__version?(et.needsLights&&et.lightsStateVersion!==zt.state.version||et.outputColorSpace!==$e||j.isBatchedMesh&&et.batching===!1||!j.isBatchedMesh&&et.batching===!0||j.isBatchedMesh&&et.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&et.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&et.instancing===!1||!j.isInstancedMesh&&et.instancing===!0||j.isSkinnedMesh&&et.skinning===!1||!j.isSkinnedMesh&&et.skinning===!0||j.isInstancedMesh&&et.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&et.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&et.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&et.instancingMorph===!1&&j.morphTexture!==null||et.envMap!==ze||re.fog===!0&&et.fog!==Se||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==ve.numPlanes||et.numIntersection!==ve.numIntersection)||et.vertexAlphas!==it||et.vertexTangents!==rt||et.morphTargets!==qe||et.morphNormals!==xt||et.morphColors!==Dt||et.toneMapping!==Wt||et.morphTargetsCount!==Ut)&&(wt=!0):(wt=!0,et.__version=re.version);let Gn=et.currentProgram;wt===!0&&(Gn=at(re,X,j));let Mr=!1,Wn=!1,Po=!1;const Vt=Gn.getUniforms(),ei=et.uniforms;if(q.useProgram(Gn.program)&&(Mr=!0,Wn=!0,Po=!0),re.id!==w&&(w=re.id,Wn=!0),Mr||M!==A){q.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Vt.setValue(b,"projectionMatrix",A.projectionMatrix),Vt.setValue(b,"viewMatrix",A.matrixWorldInverse);const Un=Vt.map.cameraPosition;Un!==void 0&&Un.setValue(b,ue.setFromMatrixPosition(A.matrixWorld)),se.logarithmicDepthBuffer&&Vt.setValue(b,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Vt.setValue(b,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,Wn=!0,Po=!0)}if(j.isSkinnedMesh){Vt.setOptional(b,j,"bindMatrix"),Vt.setOptional(b,j,"bindMatrixInverse");const yn=j.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Vt.setValue(b,"boneTexture",yn.boneTexture,ce))}j.isBatchedMesh&&(Vt.setOptional(b,j,"batchingTexture"),Vt.setValue(b,"batchingTexture",j._matricesTexture,ce),Vt.setOptional(b,j,"batchingIdTexture"),Vt.setValue(b,"batchingIdTexture",j._indirectTexture,ce),Vt.setOptional(b,j,"batchingColorTexture"),j._colorsTexture!==null&&Vt.setValue(b,"batchingColorTexture",j._colorsTexture,ce));const ti=ne.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&_e.update(j,ne,Gn),(Wn||et.receiveShadow!==j.receiveShadow)&&(et.receiveShadow=j.receiveShadow,Vt.setValue(b,"receiveShadow",j.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(ei.envMap.value=ze,ei.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&X.environment!==null&&(ei.envMapIntensity.value=X.environmentIntensity),Wn&&(Vt.setValue(b,"toneMappingExposure",y.toneMappingExposure),et.needsLights&&In(ei,Po),Se&&re.fog===!0&&le.refreshFogUniforms(ei,Se),le.refreshMaterialUniforms(ei,re,Y,ee,p.state.transmissionRenderTarget[A.id]),Cl.upload(b,Xe(et),ei,ce)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Cl.upload(b,Xe(et),ei,ce),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Vt.setValue(b,"center",j.center),Vt.setValue(b,"modelViewMatrix",j.modelViewMatrix),Vt.setValue(b,"normalMatrix",j.normalMatrix),Vt.setValue(b,"modelMatrix",j.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const yn=re.uniformsGroups;for(let Un=0,bc=yn.length;Un<bc;Un++){const Vs=yn[Un];ut.update(Vs,Gn),ut.bind(Vs,Gn)}}return Gn}function In(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function os(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(A,X,ne){const re=te.get(A);re.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),te.get(A.texture).__webglTexture=X,te.get(A.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ne,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const ne=te.get(A);ne.__webglFramebuffer=X,ne.__useDefaultFramebuffer=X===void 0};const S_=b.createFramebuffer();this.setRenderTarget=function(A,X=0,ne=0){k=A,I=X,R=ne;let re=!0,j=null,Se=!1,Oe=!1;if(A){const ze=te.get(A);if(ze.__useDefaultFramebuffer!==void 0)q.bindFramebuffer(b.FRAMEBUFFER,null),re=!1;else if(ze.__webglFramebuffer===void 0)ce.setupRenderTarget(A);else if(ze.__hasExternalTextures)ce.rebindTextures(A,te.get(A.texture).__webglTexture,te.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const qe=A.depthTexture;if(ze.__boundDepthTexture!==qe){if(qe!==null&&te.has(qe)&&(A.width!==qe.image.width||A.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(A)}}const it=A.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Oe=!0);const rt=te.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(rt[X])?j=rt[X][ne]:j=rt[X],Se=!0):A.samples>0&&ce.useMultisampledRTT(A)===!1?j=te.get(A).__webglMultisampledFramebuffer:Array.isArray(rt)?j=rt[ne]:j=rt,L.copy(A.viewport),N.copy(A.scissor),O=A.scissorTest}else L.copy(Le).multiplyScalar(Y).floor(),N.copy(We).multiplyScalar(Y).floor(),O=_t;if(ne!==0&&(j=S_),q.bindFramebuffer(b.FRAMEBUFFER,j)&&re&&q.drawBuffers(A,j),q.viewport(L),q.scissor(N),q.setScissorTest(O),Se){const ze=te.get(A.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+X,ze.__webglTexture,ne)}else if(Oe){const ze=X;for(let it=0;it<A.textures.length;it++){const rt=te.get(A.textures[it]);b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0+it,rt.__webglTexture,ne,ze)}}else if(A!==null&&ne!==0){const ze=te.get(A.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,ze.__webglTexture,ne)}w=-1},this.readRenderTargetPixels=function(A,X,ne,re,j,Se,Oe,$e=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze){q.bindFramebuffer(b.FRAMEBUFFER,ze);try{const it=A.textures[$e],rt=it.format,qe=it.type;if(!se.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-re&&ne>=0&&ne<=A.height-j&&(A.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+$e),b.readPixels(X,ne,re,j,Ne.convert(rt),Ne.convert(qe),Se))}finally{const it=k!==null?te.get(k).__webglFramebuffer:null;q.bindFramebuffer(b.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(A,X,ne,re,j,Se,Oe,$e=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze)if(X>=0&&X<=A.width-re&&ne>=0&&ne<=A.height-j){q.bindFramebuffer(b.FRAMEBUFFER,ze);const it=A.textures[$e],rt=it.format,qe=it.type;if(!se.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xt=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,xt),b.bufferData(b.PIXEL_PACK_BUFFER,Se.byteLength,b.STREAM_READ),A.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+$e),b.readPixels(X,ne,re,j,Ne.convert(rt),Ne.convert(qe),0);const Dt=k!==null?te.get(k).__webglFramebuffer:null;q.bindFramebuffer(b.FRAMEBUFFER,Dt);const Wt=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await u1(b,Wt,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,xt),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,Se),b.deleteBuffer(xt),b.deleteSync(Wt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,ne=0){const re=Math.pow(2,-ne),j=Math.floor(A.image.width*re),Se=Math.floor(A.image.height*re),Oe=X!==null?X.x:0,$e=X!==null?X.y:0;ce.setTexture2D(A,0),b.copyTexSubImage2D(b.TEXTURE_2D,ne,0,0,Oe,$e,j,Se),q.unbindTexture()};const M_=b.createFramebuffer(),E_=b.createFramebuffer();this.copyTextureToTexture=function(A,X,ne=null,re=null,j=0,Se=null){Se===null&&(j!==0?(to("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=j,j=0):Se=0);let Oe,$e,ze,it,rt,qe,xt,Dt,Wt;const Bt=A.isCompressedTexture?A.mipmaps[Se]:A.image;if(ne!==null)Oe=ne.max.x-ne.min.x,$e=ne.max.y-ne.min.y,ze=ne.isBox3?ne.max.z-ne.min.z:1,it=ne.min.x,rt=ne.min.y,qe=ne.isBox3?ne.min.z:0;else{const ti=Math.pow(2,-j);Oe=Math.floor(Bt.width*ti),$e=Math.floor(Bt.height*ti),A.isDataArrayTexture?ze=Bt.depth:A.isData3DTexture?ze=Math.floor(Bt.depth*ti):ze=1,it=0,rt=0,qe=0}re!==null?(xt=re.x,Dt=re.y,Wt=re.z):(xt=0,Dt=0,Wt=0);const Ut=Ne.convert(X.format),et=Ne.convert(X.type);let zt;X.isData3DTexture?(ce.setTexture3D(X,0),zt=b.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ce.setTexture2DArray(X,0),zt=b.TEXTURE_2D_ARRAY):(ce.setTexture2D(X,0),zt=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,X.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,X.unpackAlignment);const wt=b.getParameter(b.UNPACK_ROW_LENGTH),Gn=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Mr=b.getParameter(b.UNPACK_SKIP_PIXELS),Wn=b.getParameter(b.UNPACK_SKIP_ROWS),Po=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,Bt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Bt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,it),b.pixelStorei(b.UNPACK_SKIP_ROWS,rt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,qe);const Vt=A.isDataArrayTexture||A.isData3DTexture,ei=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const ti=te.get(A),yn=te.get(X),Un=te.get(ti.__renderTarget),bc=te.get(yn.__renderTarget);q.bindFramebuffer(b.READ_FRAMEBUFFER,Un.__webglFramebuffer),q.bindFramebuffer(b.DRAW_FRAMEBUFFER,bc.__webglFramebuffer);for(let Vs=0;Vs<ze;Vs++)Vt&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,te.get(A).__webglTexture,j,qe+Vs),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,te.get(X).__webglTexture,Se,Wt+Vs)),b.blitFramebuffer(it,rt,Oe,$e,xt,Dt,Oe,$e,b.DEPTH_BUFFER_BIT,b.NEAREST);q.bindFramebuffer(b.READ_FRAMEBUFFER,null),q.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||te.has(A)){const ti=te.get(A),yn=te.get(X);q.bindFramebuffer(b.READ_FRAMEBUFFER,M_),q.bindFramebuffer(b.DRAW_FRAMEBUFFER,E_);for(let Un=0;Un<ze;Un++)Vt?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,ti.__webglTexture,j,qe+Un):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,ti.__webglTexture,j),ei?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,yn.__webglTexture,Se,Wt+Un):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,yn.__webglTexture,Se),j!==0?b.blitFramebuffer(it,rt,Oe,$e,xt,Dt,Oe,$e,b.COLOR_BUFFER_BIT,b.NEAREST):ei?b.copyTexSubImage3D(zt,Se,xt,Dt,Wt+Un,it,rt,Oe,$e):b.copyTexSubImage2D(zt,Se,xt,Dt,it,rt,Oe,$e);q.bindFramebuffer(b.READ_FRAMEBUFFER,null),q.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else ei?A.isDataTexture||A.isData3DTexture?b.texSubImage3D(zt,Se,xt,Dt,Wt,Oe,$e,ze,Ut,et,Bt.data):X.isCompressedArrayTexture?b.compressedTexSubImage3D(zt,Se,xt,Dt,Wt,Oe,$e,ze,Ut,Bt.data):b.texSubImage3D(zt,Se,xt,Dt,Wt,Oe,$e,ze,Ut,et,Bt):A.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,Se,xt,Dt,Oe,$e,Ut,et,Bt.data):A.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,Se,xt,Dt,Bt.width,Bt.height,Ut,Bt.data):b.texSubImage2D(b.TEXTURE_2D,Se,xt,Dt,Oe,$e,Ut,et,Bt);b.pixelStorei(b.UNPACK_ROW_LENGTH,wt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Gn),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Mr),b.pixelStorei(b.UNPACK_SKIP_ROWS,Wn),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Po),Se===0&&X.generateMipmaps&&b.generateMipmap(zt),q.unbindTexture()},this.copyTextureToTexture3D=function(A,X,ne=null,re=null,j=0){return to('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,X,ne,re,j)},this.initRenderTarget=function(A){te.get(A).__webglFramebuffer===void 0&&ce.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ce.setTextureCube(A,0):A.isData3DTexture?ce.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ce.setTexture2DArray(A,0):ce.setTexture2D(A,0),q.unbindTexture()},this.resetState=function(){I=0,R=0,k=null,q.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Mt._getUnpackColorSpace()}}const zp={type:"change"},wf={type:"start"},d_={type:"end"},pl=new Gv,Vp=new xs,PD=Math.cos(70*l1.DEG2RAD),nn=new J,On=2*Math.PI,It={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vu=1e-6;class f_ extends j1{constructor(e,n=null){super(e,n),this.state=It.NONE,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Jr.ROTATE,MIDDLE:Jr.DOLLY,RIGHT:Jr.PAN},this.touches={ONE:Wr.ROTATE,TWO:Wr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new _r,this._lastTargetPosition=new J,this._quat=new _r().setFromUnitVectors(e.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new mp,this._sphericalDelta=new mp,this._scale=1,this._panOffset=new J,this._rotateStart=new lt,this._rotateEnd=new lt,this._rotateDelta=new lt,this._panStart=new lt,this._panEnd=new lt,this._panDelta=new lt,this._dollyStart=new lt,this._dollyEnd=new lt,this._dollyDelta=new lt,this._dollyDirection=new J,this._mouse=new lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=LD.bind(this),this._onPointerDown=DD.bind(this),this._onPointerUp=ID.bind(this),this._onContextMenu=HD.bind(this),this._onMouseWheel=OD.bind(this),this._onKeyDown=FD.bind(this),this._onTouchStart=kD.bind(this),this._onTouchMove=BD.bind(this),this._onMouseDown=UD.bind(this),this._onMouseMove=ND.bind(this),this._interceptControlDown=zD.bind(this),this._interceptControlUp=VD.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(zp),this.update(),this.state=It.NONE}update(e=null){const n=this.object.position;nn.copy(n).sub(this.target),nn.applyQuaternion(this._quat),this._spherical.setFromVector3(nn),this.autoRotate&&this.state===It.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=On:i>Math.PI&&(i-=On),s<-Math.PI?s+=On:s>Math.PI&&(s-=On),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(nn.setFromSpherical(this._spherical),nn.applyQuaternion(this._quatInverse),n.copy(this.target).add(nn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=nn.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new J(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new J(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=nn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(pl.origin.copy(this.object.position),pl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(pl.direction))<PD?this.object.lookAt(this.target):(Vp.setFromNormalAndCoplanarPoint(this.object.up,this.target),pl.intersectPlane(Vp,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>vu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vu||this._lastTargetPosition.distanceToSquared(this.target)>vu?(this.dispatchEvent(zp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?On/60*this.autoRotateSpeed*e:On/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){nn.setFromMatrixColumn(n,0),nn.multiplyScalar(-e),this._panOffset.add(nn)}_panUp(e,n){this.screenSpacePanning===!0?nn.setFromMatrixColumn(n,1):(nn.setFromMatrixColumn(n,0),nn.crossVectors(this.object.up,nn)),nn.multiplyScalar(e),this._panOffset.add(nn)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;nn.copy(s).sub(this.target);let r=nn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=n-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(On*this._rotateDelta.x/n.clientHeight),this._rotateUp(On*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(On*this._rotateDelta.x/n.clientHeight),this._rotateUp(On*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new lt,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function DD(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function LD(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function ID(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(d_),this.state=It.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function UD(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Jr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=It.DOLLY;break;case Jr.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=It.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=It.ROTATE}break;case Jr.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=It.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=It.PAN}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(wf)}function ND(t){switch(this.state){case It.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case It.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case It.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function OD(t){this.enabled===!1||this.enableZoom===!1||this.state!==It.NONE||(t.preventDefault(),this.dispatchEvent(wf),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(d_))}function FD(t){this.enabled!==!1&&this._handleKeyDown(t)}function kD(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Wr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=It.TOUCH_ROTATE;break;case Wr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=It.TOUCH_PAN;break;default:this.state=It.NONE}break;case 2:switch(this.touches.TWO){case Wr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=It.TOUCH_DOLLY_PAN;break;case Wr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=It.TOUCH_DOLLY_ROTATE;break;default:this.state=It.NONE}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(wf)}function BD(t){switch(this._trackPointer(t),this.state){case It.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case It.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case It.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case It.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=It.NONE}}function HD(t){this.enabled!==!1&&t.preventDefault()}function zD(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function VD(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const GD={__name:"MiyukiBeads",props:{pattern:{type:Array,required:!0},rows:{type:Number,default:10},cols:{type:Number,default:50},textureRotation:{type:Number,default:90}},setup(t){const e=t,n=tt(null);let i,s,r,o,a=[];const l=new e_,c=new Map;function u(g){return typeof g=="string"&&g.startsWith("/miyuki-beads-designer/beads/")}function d(g,v=0){if(u(g)){const m=g;let p=c.get(m);p||(p=l.load(m,y=>{y.colorSpace=gn,r&&(y.anisotropy=r.capabilities.getMaxAnisotropy())}),p.colorSpace=gn,c.set(m,p));const C=p.clone();return C.rotation=v,new Yl({color:16777215,map:C,roughness:.1,metalness:.1,clearcoat:.5,clearcoatRoughness:.1})}return new Yl({color:g,roughness:.1,metalness:.1,clearcoat:.5,clearcoatRoughness:.1})}function f(){a.forEach(g=>{i.remove(g),g.material&&g.material.dispose()}),a=[]}function h(){const g=new mc(.7,.7,1.1,32),v=(e.cols-1)/2,m=(e.rows-1)/2;for(let p=0;p<e.rows;p++)for(let C=0;C<e.cols;C++){const E=p*e.cols+C,y=e.pattern[E]||"#ffffff",U=e.textureRotation*Math.PI/180,I=d(y,U),R=new gi(g,I);R.position.set((C-v)*1.2,-(p-m)*1.2,0),i.add(R),a.push(R)}}return Hs(()=>{i=new Qv,i.background=new yt(15790320),s=new qn(45,n.value.clientWidth/n.value.clientHeight,.1,1e3),s.position.set(50,-50,50),r=new u_({antialias:!0}),r.setPixelRatio(Math.min(window.devicePixelRatio||1,2));function g(){if(!n.value)return;const C=n.value.clientWidth,E=n.value.clientHeight;C===0||E===0||(s.aspect=C/E,s.updateProjectionMatrix(),r.setSize(C,E,!1))}g(),n.value.appendChild(r.domElement);const v=new ResizeObserver(()=>{g()});v.observe(n.value),r.__resizeObserver=v,o=new f_(s,r.domElement),i.add(new i_(16777215,.5));const m=new Md(16777215,3);m.position.set(10,10,10),i.add(m),h();function p(){requestAnimationFrame(p),o.update(),r.render(i,s)}p(),window.addEventListener("resize",g),r.__resizeHandler=g}),Bn(()=>[e.pattern,e.textureRotation],()=>{f(),h()},{deep:!0}),Ma(()=>{r&&r.__resizeHandler&&window.removeEventListener("resize",r.__resizeHandler),r&&r.__resizeObserver&&n.value&&r.__resizeObserver.disconnect(),o&&o.dispose(),r&&r.dispose(),f(),c.forEach(g=>g.dispose()),c.clear()}),(g,v)=>(Fe(),Ve("div",{ref_key:"container",ref:n,class:"bead-container"},null,512))}},WD={class:"bracelet-wrapper"},$D={class:"canvas-container"},XD={class:"toolbar"},jD={class:"controls-panel"},qD={class:"control-group"},YD={class:"slider-container"},KD={class:"slider-value"},ZD={class:"info-panel"},QD={class:"info-item"},JD={class:"info-value"},eL={class:"info-item"},tL={class:"info-value"},nL={__name:"BraceletPreview",props:{pattern:{type:Array,required:!0},rows:{type:Number,required:!0},cols:{type:Number,required:!0},width:{type:Number,default:900},height:{type:Number,default:600},textureRotation:{type:Number,default:90}},setup(t,{expose:e}){const n=t,i=tt(null);let s,r,o,a,l=[];const c=tt(n.textureRotation),u=new e_,d=new Map;function f(E){return typeof E=="string"&&E.startsWith("/miyuki-beads-designer/beads/")}function h(E,y=0){if(f(E)){const U=E;let I=d.get(U);I||(I=u.load(U,w=>{w.colorSpace=gn,o&&(w.anisotropy=o.capabilities.getMaxAnisotropy())}),I.colorSpace=gn,d.set(U,I));const R=I.clone();return R.rotation=y,new Yl({color:16777215,map:R,roughness:.25,metalness:.15,clearcoat:.4,clearcoatRoughness:.1})}return new Yl({color:E,roughness:.25,metalness:.15,clearcoat:.4,clearcoatRoughness:.1})}function g(){l.forEach(E=>{s.remove(E),E.material&&E.material.dispose()}),l=[]}function v(){if(!s)return;g();const E=20,y=Math.PI*1.55,U=-y/2,I=y/n.rows,R=E*I*.98,k=.95,w=1,M=new mc(k*.7,k*.7,R,16);for(let L=0;L<n.rows;L++)for(let N=0;N<n.cols;N++){let O="#ffffff";if(Array.isArray(n.pattern[0]))O=n.pattern[L]&&n.pattern[L][N]?n.pattern[L][N]:"#ffffff";else{const Le=L*n.cols+N;O=n.pattern[Le]||"#ffffff"}(!O||O==="#"||O.length<3)&&(O="#ffffff",console.warn("Invalid color detected:",O,"using default white"));const D=c.value*Math.PI/180,V=h(O,D),W=U+(L+.5)*I,ee=(n.cols/2-.5-N)*w,Y=E*Math.sin(W),xe=E*Math.cos(W),Me=new gi(M,V);Me.position.set(Y,ee,xe),Me.rotation.z=Math.PI/2,Me.rotation.y=W,s.add(Me),l.push(Me)}}function m(){s=new Qv,s.background=new yt(15987699),r=new qn(42,n.width/n.height,.1,2e3),r.position.set(0,3,95),r.lookAt(0,0,0),o=new u_({antialias:!0,preserveDrawingBuffer:!0}),o.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),o.setSize(n.width,n.height,!1),i.value.appendChild(o.domElement),s.add(new i_(16777215,.7));const E=new Md(16777215,1.1);E.position.set(8,10,12),s.add(E);const y=new Md(16777215,.6);y.position.set(-8,-3,8),s.add(y),a=new f_(r,o.domElement),a.enableDamping=!0,a.target.set(0,0,0);function U(){requestAnimationFrame(U),a.update(),o.render(s,r)}U()}function p(){o&&(a.update(),o.render(s,r))}function C(){p();const E=o.domElement.toDataURL("image/png"),y=document.createElement("a");y.href=E,y.download="bracelet.png",y.click()}return Hs(()=>{m(),v(),p()}),Bn(()=>[n.pattern,n.rows,n.cols,n.textureRotation],()=>{v(),p()},{deep:!0}),Bn(c,()=>{v(),p()}),Ma(()=>{a&&a.dispose(),o&&o.dispose(),g(),d.forEach(E=>E.dispose()),d.clear()}),e({downloadImage:C}),(E,y)=>(Fe(),Ve("div",WD,[y[6]||(y[6]=_("div",{class:"header"},[_("h2",{class:"title"},"پیش‌نمایش دستبند"),_("p",{class:"subtitle"},"نمایش سه‌بعدی طرح انتخاب شده")],-1)),_("div",$D,[_("div",{ref_key:"container",ref:i,class:"bracelet-canvas"},null,512),y[1]||(y[1]=hg('<div class="canvas-overlay" data-v-f2177ee3><div class="controls-hint" data-v-f2177ee3><div class="hint-item" data-v-f2177ee3><span class="hint-icon" data-v-f2177ee3>🖱️</span><span data-v-f2177ee3>برای چرخاندن کلیک و درگ کنید</span></div><div class="hint-item" data-v-f2177ee3><span class="hint-icon" data-v-f2177ee3>🔍</span><span data-v-f2177ee3>برای زوم اسکرول کنید</span></div></div></div>',1))]),_("div",XD,[_("button",{class:"btn btn-primary",onClick:C},y[2]||(y[2]=[_("span",{class:"btn-icon"},"📥",-1),_("span",null,"دانلود تصویر",-1)])),_("div",jD,[_("div",qD,[y[3]||(y[3]=_("label",{class:"control-label"},"چرخش عکس مهره‌ها:",-1)),_("div",YD,[Yt(_("input",{"onUpdate:modelValue":y[0]||(y[0]=U=>c.value=U),type:"range",min:"0",max:"360",step:"15",class:"rotation-slider"},null,512),[[en,c.value]]),_("span",KD,st(c.value)+"°",1)])])]),_("div",ZD,[_("div",QD,[y[4]||(y[4]=_("span",{class:"info-label"},"ابعاد:",-1)),_("span",JD,st(t.cols)+" × "+st(t.rows),1)]),_("div",eL,[y[5]||(y[5]=_("span",{class:"info-label"},"تعداد مهره:",-1)),_("span",tL,st(t.cols*t.rows),1)])])])]))}},iL=Mo(nL,[["__scopeId","data-v-f2177ee3"]]),sL={class:"working-page backdrop-filter-none"},rL={class:"mobile-top-bar"},oL=["aria-expanded"],aL={class:"mobile-step-badge"},lL={class:"controls-panel"},cL={class:"control-group"},uL={class:"start-controls"},dL={class:"control-label"},fL=["max"],hL={class:"control-label"},pL={class:"control-group desktop-controls"},mL={class:"navigation-controls"},gL=["disabled"],vL=["disabled"],_L={class:"control-group"},bL={class:"info-display"},xL={class:"info-item"},yL={class:"info-value"},wL={class:"info-item"},SL={class:"info-value"},ML={class:"info-item"},EL={class:"info-value"},TL={class:"control-group"},AL={class:"color-management"},CL={class:"color-list-management"},RL={class:"all-colors-list"},PL=["onUpdate:modelValue","placeholder","onInput"],DL={class:"color-count-badge"},LL={class:"color-code"},IL={class:"pattern-container"},UL={class:"pattern-header"},NL={class:"pattern-info"},OL={class:"instructions-panel"},FL={class:"row-instructions"},kL={class:"color-instructions"},BL={class:"color-list"},HL={class:"color-count"},zL={class:"pattern-instructions"},VL={class:"pattern-sequence"},GL=["title"],WL={class:"grid-wrapper"},$L=["title"],XL={class:"mobile-navigation-fixed"},jL=["disabled"],qL=["disabled"],YL={__name:"WorkingPage",props:{pattern:{type:Array,default:()=>[]},rows:{type:Number,default:16},cols:{type:Number,default:80}},setup(t){const e=t,n=tt(0),i=tt("forward"),s=tt(0),r=tt({}),o=tt(!1),a=()=>{if(!e.pattern||e.pattern.length===0){const D=["#ff6b6b","#4ecdc4","#45b7d1","#96ceb4","#feca57","#ff9ff3","#54a0ff","#5f27cd"],V=[];for(let W=0;W<e.rows;W++)for(let ee=0;ee<e.cols;ee++){const Y=D[Math.floor(Math.random()*D.length)];V.push({color:Y,row:W,col:ee})}return V}const O=[];for(let D=0;D<e.rows;D++)for(let V=0;V<e.cols;V++){const W=D*e.cols+V,ee=e.pattern[W]||"#ffffff";O.push({color:ee,row:D,col:V})}return O},l=tt(a()),c=tt(!0),u=an(()=>c.value?e.rows:e.cols),d=an(()=>u.value-1),f=an(()=>u.value),h=an(()=>{const O=i.value==="forward"?n.value+s.value:n.value-s.value;return Math.max(0,Math.min(u.value-1,O))}),g=an(()=>{const O=[];if(c.value)for(let D=0;D<e.cols;D++){const V=h.value*e.cols+D,W=e.pattern[V]||"#ffffff";O.includes(W)||O.push(W)}else for(let D=0;D<e.rows;D++){const V=D*e.cols+h.value,W=e.pattern[V]||"#ffffff";O.includes(W)||O.push(W)}return O}),v=an(()=>{const O=[];if(c.value)for(let D=0;D<e.cols;D++){const V=h.value*e.cols+D,W=e.pattern[V]||"#ffffff";O.push(W)}else for(let D=0;D<e.rows;D++){const V=D*e.cols+h.value,W=e.pattern[V]||"#ffffff";O.push(W)}return O}),m=an(()=>{const O=new Set;for(let D=0;D<e.pattern.length;D++)e.pattern[D]&&O.add(e.pattern[D]);return Array.from(O).sort()}),p=O=>{const D=Math.floor(O/e.cols),V=O%e.cols;return c.value?D===h.value:V===h.value},C=O=>{const D=Math.floor(O/e.cols),V=O%e.cols;return c.value?D==h.value:V==h.value},E=O=>{const D=Math.floor(O/e.cols),V=O%e.cols;return i.value==="forward"?c.value?D>h.value:V>h.value:c.value?D<h.value:V<h.value},y=O=>p(O)?1:C(O)?.4:.2,U=O=>{let D=0;if(c.value)for(let V=0;V<e.cols;V++){const W=h.value*e.cols+V;e.pattern[W]===O&&D++}else for(let V=0;V<e.rows;V++){const W=V*e.cols+h.value;e.pattern[W]===O&&D++}return D},I=O=>{let D=0;for(let V=0;V<e.pattern.length;V++)e.pattern[V]===O&&D++;return D},R=(O,D)=>{r.value[O]=D},k=O=>{const D=r.value[O];if(O.startsWith("/miyuki-beads-designer/beads/")){const V=O.split("/").pop().replace(".jpg","");return D?`${D} (${V})`:V}return D?`${D} (${O})`:O},w=()=>{s.value<f.value-1&&s.value++},M=()=>{s.value>0&&s.value--},L=()=>{s.value=0},N=O=>{switch(O.key){case"Enter":case" ":O.preventDefault(),w();break;case"ArrowLeft":O.preventDefault(),M();break;case"r":case"R":O.preventDefault(),L();break}};return Hs(()=>{try{const O=localStorage.getItem("gridEditor_isVertical");c.value=O!==null?JSON.parse(O):!0}catch(O){console.error("Failed to read gridEditor_isVertical from localStorage",O),c.value=!0}document.addEventListener("keydown",N)}),zd(()=>{document.removeEventListener("keydown",N)}),Bn(i,()=>{s.value=0}),Bn(n,()=>{s.value=0}),Bn(c,()=>{s.value=0,n.value>d.value&&(n.value=0)}),Bn(()=>e.pattern,()=>{l.value=a()},{deep:!0}),(O,D)=>(Fe(),Ve("div",sL,[_("div",rL,[_("button",{class:Ke(["mobile-hamburger-btn",{active:o.value}]),"aria-expanded":o.value,"aria-label":"نمایش تنظیمات و اطلاعات",onClick:D[0]||(D[0]=V=>o.value=!o.value)},D[3]||(D[3]=[_("span",{class:"hamburger-line"},null,-1),_("span",{class:"hamburger-line"},null,-1),_("span",{class:"hamburger-line"},null,-1)]),10,oL),D[4]||(D[4]=_("span",{class:"mobile-top-title"},"🧶 مراحل اجرا",-1)),_("span",aL,st(s.value+1)+"/"+st(f.value),1)]),_("div",{class:Ke(["collapsible-sections",{open:o.value}])},[D[16]||(D[16]=_("div",{class:"page-header"},[_("h1",{class:"page-title"},"🧶 مراحل اجرای دستبند میوکی"),_("p",{class:"page-subtitle"}," مراحل بافت دستبند را ردیف به ردیف (از بالا به پایین) مشاهده کنید ")],-1)),_("div",lL,[_("div",cL,[D[8]||(D[8]=_("h3",null,"🎯 تنظیمات شروع",-1)),_("div",uL,[_("label",dL,[D[5]||(D[5]=_("span",null,"شروع از ردیف:",-1)),Yt(_("input",{"onUpdate:modelValue":D[1]||(D[1]=V=>n.value=V),type:"number",min:"0",max:d.value,class:"control-input"},null,8,fL),[[en,n.value,void 0,{number:!0}]])]),_("label",hL,[D[7]||(D[7]=_("span",null,"جهت اجرا:",-1)),Yt(_("select",{"onUpdate:modelValue":D[2]||(D[2]=V=>i.value=V),class:"control-select"},D[6]||(D[6]=[_("option",{value:"forward"},"⬇️ از بالا به پایین",-1),_("option",{value:"backward"},"⬆️ از پایین به بالا",-1)]),512),[[qb,i.value]])])])]),_("div",pL,[D[9]||(D[9]=_("h3",null,"🎮 کنترل‌ها",-1)),_("div",mL,[_("button",{disabled:s.value<=0,class:"nav-btn prev-btn",onClick:M}," ⬅️ مرحله قبل ",8,gL),_("button",{disabled:s.value>=f.value-1,class:"nav-btn next-btn",onClick:w}," مرحله بعد ➡️ ",8,vL),_("button",{class:"nav-btn reset-btn",onClick:L}," 🔄 شروع مجدد ")])]),_("div",_L,[D[13]||(D[13]=_("h3",null,"📊 اطلاعات",-1)),_("div",bL,[_("div",xL,[D[10]||(D[10]=_("span",{class:"info-label"},"مرحله فعلی:",-1)),_("span",yL,st(s.value+1)+" از "+st(f.value),1)]),_("div",wL,[D[11]||(D[11]=_("span",{class:"info-label"},"ردیف فعلی:",-1)),_("span",SL,st(h.value+1)+" از "+st(u.value),1)]),_("div",ML,[D[12]||(D[12]=_("span",{class:"info-label"},"رنگ‌های مورد نیاز:",-1)),_("span",EL,st(g.value.length)+" رنگ",1)])])]),_("div",TL,[D[15]||(D[15]=_("h3",null,"🎨 مدیریت رنگ‌ها",-1)),_("div",AL,[_("div",CL,[D[14]||(D[14]=_("h4",null,"رنگ‌های استفاده شده در طرح:",-1)),_("div",RL,[(Fe(!0),Ve(Ht,null,En(m.value,(V,W)=>(Fe(),Ve("div",{key:V,class:"color-management-item"},[_("div",{class:"color-swatch-large",style:Yn({backgroundColor:V.startsWith("/miyuki-beads-designer/beads/")?"transparent":V,backgroundImage:V.startsWith("/miyuki-beads-designer/beads/")?`url(${V})`:"none",backgroundSize:"cover",backgroundPosition:"center"})},null,4),Yt(_("input",{"onUpdate:modelValue":ee=>r.value[V]=ee,type:"text",placeholder:`نام رنگ ${W+1}`,class:"color-name-input",onInput:ee=>R(V,ee.target.value)},null,40,PL),[[en,r.value[V]]]),_("span",DL,st(I(V))+" مهره",1),_("span",LL,st(V),1)]))),128))])])])])])],2),_("div",IL,[_("div",UL,[D[17]||(D[17]=_("h3",null,"🎨 الگوی دستبند",-1)),_("div",NL,[_("span",null,"ابعاد: "+st(t.rows)+" × "+st(t.cols),1)])]),_("div",OL,[_("h4",null,"📋 دستورالعمل ردیف "+st(h.value+1),1),_("div",FL,[_("div",kL,[D[18]||(D[18]=_("h5",null,"رنگ‌های مورد نیاز:",-1)),_("div",BL,[(Fe(!0),Ve(Ht,null,En(g.value,(V,W)=>(Fe(),Ve("div",{key:W,class:"color-item"},[_("div",{class:"color-swatch",style:Yn({backgroundColor:V.startsWith("/miyuki-beads-designer/beads/")?"transparent":V,backgroundImage:V.startsWith("/miyuki-beads-designer/beads/")?`url(${V})`:"none",backgroundSize:"cover",backgroundPosition:"center"})},null,4),_("span",HL,st(U(V)),1)]))),128))])]),_("div",zL,[D[19]||(D[19]=_("h5",null,"ترتیب رنگ‌ها:",-1)),_("div",VL,[(Fe(!0),Ve(Ht,null,En(v.value,(V,W)=>(Fe(),Ve("div",{key:W,class:"sequence-item",style:Yn({backgroundColor:V.startsWith("/miyuki-beads-designer/beads/")?"transparent":V,backgroundImage:V.startsWith("/miyuki-beads-designer/beads/")?`url(${V})`:"none",backgroundSize:"cover",backgroundPosition:"center"}),title:k(V)},null,12,GL))),128))])])])]),_("div",WL,[_("div",{class:"pattern-grid",style:Yn({gridTemplateColumns:`repeat(${t.cols}, 12px)`})},[(Fe(!0),Ve(Ht,null,En(l.value,(V,W)=>(Fe(),Ve("div",{key:W,class:Ke(["grid-cell",{"active-row":p(W),"completed-row":C(W),"upcoming-row":E(W)}]),style:Yn({backgroundColor:V.color.startsWith("/miyuki-beads-designer/beads/")?"transparent":V.color,backgroundImage:V.color.startsWith("/miyuki-beads-designer/beads/")?`url(${V.color})`:"none",backgroundSize:"cover",backgroundPosition:"center",opacity:y(W)}),title:`ردیف ${Math.floor(W/t.cols)+1}, ستون ${W%t.cols+1}: ${V.color}`},null,14,$L))),128))],4)])]),D[20]||(D[20]=hg('<div class="shortcuts-info" data-v-e9a5d94b><h4 data-v-e9a5d94b>⌨️ کلیدهای میانبر</h4><div class="shortcuts-list" data-v-e9a5d94b><div class="shortcut-item" data-v-e9a5d94b><kbd data-v-e9a5d94b>Enter</kbd> یا <kbd data-v-e9a5d94b>Space</kbd> - مرحله بعد </div><div class="shortcut-item" data-v-e9a5d94b><kbd data-v-e9a5d94b>←</kbd> - مرحله قبل</div><div class="shortcut-item" data-v-e9a5d94b><kbd data-v-e9a5d94b>R</kbd> - شروع مجدد</div></div></div>',1)),(Fe(),rr(g0,{to:"body"},[_("div",XL,[_("button",{disabled:s.value<=0,class:"mobile-nav-btn prev-btn",onClick:M}," ⬅️ قبلی ",8,jL),_("button",{class:"mobile-nav-btn reset-btn",onClick:L}," 🔄 شروع "),_("button",{disabled:s.value>=f.value-1,class:"mobile-nav-btn next-btn",onClick:w}," بعدی ➡️ ",8,qL)])]))]))}},KL=Mo(YL,[["__scopeId","data-v-e9a5d94b"]]),ZL={class:"home-container"},QL={class:"app-header max-md:hidden flex items-start justify-between mb-3!"},JL={class:"stats-section"},eI={class:"stat-item"},tI={class:"stat-number"},nI={class:"stat-item"},iI={class:"stat-number"},sI={class:"stat-item"},rI={class:"stat-number"},oI={class:"stat-item"},aI={class:"stat-number"},lI={class:"mobile-header-content"},cI={class:"mobile-stats"},uI={class:"mobile-stat-item"},dI={class:"mobile-stat-number"},fI={class:"mobile-stat-item"},hI={class:"mobile-stat-number"},pI={class:"mobile-stat-item"},mI={class:"mobile-stat-number"},gI={class:"mobile-stat-item"},vI={class:"mobile-stat-number"},_I={class:"content-container"},bI={__name:"HomeView",props:{isMobileHeaderOpen:{type:Boolean,default:!1}},emits:["close-mobile-header"],setup(t,{emit:e}){const n=t,i=e,s=tt(16),r=tt(80),o=tt(Array(16*80).fill("#ffffff")),a=tt(!0),l=tt(!1),c=tt(!1),u=tt(!1);function d(){a.value=!0,l.value=!1,c.value=!1,u.value=!1,i("close-mobile-header")}function f(){l.value=!0,a.value=!1,c.value=!1,u.value=!1,i("close-mobile-header")}function h(){c.value=!0,l.value=!1,a.value=!1,u.value=!1,i("close-mobile-header")}function g(){u.value=!0,a.value=!1,l.value=!1,c.value=!1,i("close-mobile-header")}function v(m){if(!Array.isArray(m)||m.length===0){o.value=[],s.value=0,r.value=0;return}s.value=m.length,r.value=Array.isArray(m[0])?m[0].length:0,o.value=m.flat()}return(m,p)=>(Fe(),Ve("div",ZL,[_("header",QL,[_("div",{class:"header-content"},[_("div",{class:"header-actions mt-3! flex items-center gap-2"},[_("button",{class:"theme-btn px-4! py-1! text-[14px]",onClick:d}," ویرایشگر شبکه "),_("button",{class:"theme-btn px-4! py-1! text-[14px]",onClick:f}," نمایش مهره‌ها "),_("button",{class:"theme-btn px-4! py-1! text-[14px]",onClick:h}," پیش‌نمایش دستبند "),_("button",{class:"theme-btn-primary px-4! py-1! text-[14px]",onClick:g}," مراحل اجرا ")])]),_("div",JL,[_("div",eI,[_("div",tI,st(s.value),1),p[0]||(p[0]=_("div",{class:"stat-label"},"ردیف",-1))]),_("div",nI,[_("div",iI,st(r.value),1),p[1]||(p[1]=_("div",{class:"stat-label"},"ستون",-1))]),_("div",sI,[_("div",rI,st(o.value.length),1),p[2]||(p[2]=_("div",{class:"stat-label"},"مهره",-1))]),_("div",oI,[_("div",aI,st((o.value.length/190).toFixed(2)),1),p[3]||(p[3]=_("div",{class:"stat-label"},"گرم",-1))])])]),_("div",{class:Ke(["mobile-header-panel md:hidden",{open:n.isMobileHeaderOpen}])},[_("div",lI,[_("div",{class:"mobile-actions"},[_("button",{class:"mobile-action-btn",onClick:d}," ویرایشگر شبکه "),_("button",{class:"mobile-action-btn",onClick:f}," نمایش مهره‌ها "),_("button",{class:"mobile-action-btn",onClick:h}," پیش‌نمایش دستبند "),_("button",{class:"mobile-action-btn mobile-action-btn-primary",onClick:g}," مراحل اجرا ")]),_("div",cI,[_("div",uI,[_("div",dI,st(s.value),1),p[4]||(p[4]=_("div",{class:"mobile-stat-label"},"ردیف",-1))]),_("div",fI,[_("div",hI,st(r.value),1),p[5]||(p[5]=_("div",{class:"mobile-stat-label"},"ستون",-1))]),_("div",pI,[_("div",mI,st(o.value.length),1),p[6]||(p[6]=_("div",{class:"mobile-stat-label"},"مهره",-1))]),_("div",gI,[_("div",vI,st((o.value.length/190).toFixed(2)),1),p[7]||(p[7]=_("div",{class:"mobile-stat-label"},"گرم",-1))])])])],2),_("div",_I,[a.value?(Fe(),rr(bA,{key:0,class:"content-component",onUpdateGrid:v})):Ct("",!0),l.value?(Fe(),rr(GD,{key:1,pattern:o.value,rows:s.value,cols:r.value,class:"content-component"},null,8,["pattern","rows","cols"])):Ct("",!0),c.value?(Fe(),rr(iL,{key:2,pattern:o.value,rows:s.value,cols:r.value,class:"content-component"},null,8,["pattern","rows","cols"])):Ct("",!0),u.value?(Fe(),rr(KL,{key:3,pattern:o.value,rows:s.value,cols:r.value,class:"content-component"},null,8,["pattern","rows","cols"])):Ct("",!0)])]))}},xI=Mo(bI,[["__scopeId","data-v-9a5d58e0"]]),yI=sy({history:Ux("/miyuki-beads-designer/"),routes:[{path:"/",name:"home",component:xI},{path:"/about",name:"about",component:()=>Oo(()=>import("./AboutView-Dhg8SGnu.js"),[])},{path:"/sweetalert-demo",name:"sweetalert-demo",component:()=>Oo(()=>import("./SweetAlertDemo-XNJGIcX_.js"),__vite__mapDeps([0,1]))},{path:"/weaving-grid",name:"weaving-grid",component:()=>Oo(()=>import("./WeavingGrid-CuTTYaBy.js"),__vite__mapDeps([2,3,4,5]))},{path:"/beadwork-pattern",name:"beadwork-pattern",component:()=>Oo(()=>import("./BeadworkPattern-fRqsdEPL.js"),[])},{path:"/peyote-grid",name:"peyote-grid",component:()=>Oo(()=>import("./PeyoteGrid-CHDMb5ta.js"),__vite__mapDeps([6,3,4,7]))}]});var _c=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Fa=typeof window>"u"||"Deno"in globalThis;function di(){}function wI(t,e){return typeof t=="function"?t(e):t}function SI(t){return typeof t=="number"&&t>=0&&t!==1/0}function MI(t,e){return Math.max(t+(e||0)-Date.now(),0)}function Gp(t,e){return typeof t=="function"?t(e):t}function EI(t,e){return typeof t=="function"?t(e):t}function Wp(t,e){const{type:n="all",exact:i,fetchStatus:s,predicate:r,queryKey:o,stale:a}=t;if(o){if(i){if(e.queryHash!==Sf(o,e.options))return!1}else if(!ga(e.queryKey,o))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||s&&s!==e.state.fetchStatus||r&&!r(e))}function $p(t,e){const{exact:n,status:i,predicate:s,mutationKey:r}=t;if(r){if(!e.options.mutationKey)return!1;if(n){if(ma(e.options.mutationKey)!==ma(r))return!1}else if(!ga(e.options.mutationKey,r))return!1}return!(i&&e.state.status!==i||s&&!s(e))}function Sf(t,e){return((e==null?void 0:e.queryKeyHashFn)||ma)(t)}function ma(t){return JSON.stringify(t,(e,n)=>Td(n)?Object.keys(n).sort().reduce((i,s)=>(i[s]=n[s],i),{}):n)}function ga(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?Object.keys(e).every(n=>ga(t[n],e[n])):!1}function h_(t,e){if(t===e)return t;const n=Xp(t)&&Xp(e);if(n||Td(t)&&Td(e)){const i=n?t:Object.keys(t),s=i.length,r=n?e:Object.keys(e),o=r.length,a=n?[]:{};let l=0;for(let c=0;c<o;c++){const u=n?c:r[c];(!n&&i.includes(u)||n)&&t[u]===void 0&&e[u]===void 0?(a[u]=void 0,l++):(a[u]=h_(t[u],e[u]),a[u]===t[u]&&t[u]!==void 0&&l++)}return s===o&&l===s?t:a}return e}function Xp(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function Td(t){if(!jp(t))return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(!jp(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function jp(t){return Object.prototype.toString.call(t)==="[object Object]"}function TI(t){return new Promise(e=>{setTimeout(e,t)})}function AI(t,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?h_(t,e):e}function CI(t,e,n=0){const i=[...t,e];return n&&i.length>n?i.slice(1):i}function RI(t,e,n=0){const i=[e,...t];return n&&i.length>n?i.slice(0,-1):i}var Mf=Symbol();function p_(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===Mf?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}var lr,Ss,io,Kp,PI=(Kp=class extends _c{constructor(){super();St(this,lr);St(this,Ss);St(this,io);ht(this,io,e=>{if(!Fa&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){fe(this,Ss)||this.setEventListener(fe(this,io))}onUnsubscribe(){var e;this.hasListeners()||((e=fe(this,Ss))==null||e.call(this),ht(this,Ss,void 0))}setEventListener(e){var n;ht(this,io,e),(n=fe(this,Ss))==null||n.call(this),ht(this,Ss,e(i=>{typeof i=="boolean"?this.setFocused(i):this.onFocus()}))}setFocused(e){fe(this,lr)!==e&&(ht(this,lr,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(n=>{n(e)})}isFocused(){var e;return typeof fe(this,lr)=="boolean"?fe(this,lr):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},lr=new WeakMap,Ss=new WeakMap,io=new WeakMap,Kp),m_=new PI,so,Ms,ro,Zp,DI=(Zp=class extends _c{constructor(){super();St(this,so,!0);St(this,Ms);St(this,ro);ht(this,ro,e=>{if(!Fa&&window.addEventListener){const n=()=>e(!0),i=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",i)}}})}onSubscribe(){fe(this,Ms)||this.setEventListener(fe(this,ro))}onUnsubscribe(){var e;this.hasListeners()||((e=fe(this,Ms))==null||e.call(this),ht(this,Ms,void 0))}setEventListener(e){var n;ht(this,ro,e),(n=fe(this,Ms))==null||n.call(this),ht(this,Ms,e(this.setOnline.bind(this)))}setOnline(e){fe(this,so)!==e&&(ht(this,so,e),this.listeners.forEach(i=>{i(e)}))}isOnline(){return fe(this,so)}},so=new WeakMap,Ms=new WeakMap,ro=new WeakMap,Zp),Kl=new DI;function LI(){let t,e;const n=new Promise((s,r)=>{t=s,e=r});n.status="pending",n.catch(()=>{});function i(s){Object.assign(n,s),delete n.resolve,delete n.reject}return n.resolve=s=>{i({status:"fulfilled",value:s}),t(s)},n.reject=s=>{i({status:"rejected",reason:s}),e(s)},n}function II(t){return Math.min(1e3*2**t,3e4)}function g_(t){return(t??"online")==="online"?Kl.isOnline():!0}var v_=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function _u(t){return t instanceof v_}function __(t){let e=!1,n=0,i=!1,s;const r=LI(),o=v=>{var m;i||(f(new v_(v)),(m=t.abort)==null||m.call(t))},a=()=>{e=!0},l=()=>{e=!1},c=()=>m_.isFocused()&&(t.networkMode==="always"||Kl.isOnline())&&t.canRun(),u=()=>g_(t.networkMode)&&t.canRun(),d=v=>{var m;i||(i=!0,(m=t.onSuccess)==null||m.call(t,v),s==null||s(),r.resolve(v))},f=v=>{var m;i||(i=!0,(m=t.onError)==null||m.call(t,v),s==null||s(),r.reject(v))},h=()=>new Promise(v=>{var m;s=p=>{(i||c())&&v(p)},(m=t.onPause)==null||m.call(t)}).then(()=>{var v;s=void 0,i||(v=t.onContinue)==null||v.call(t)}),g=()=>{if(i)return;let v;const m=n===0?t.initialPromise:void 0;try{v=m??t.fn()}catch(p){v=Promise.reject(p)}Promise.resolve(v).then(d).catch(p=>{var I;if(i)return;const C=t.retry??(Fa?0:3),E=t.retryDelay??II,y=typeof E=="function"?E(n,p):E,U=C===!0||typeof C=="number"&&n<C||typeof C=="function"&&C(n,p);if(e||!U){f(p);return}n++,(I=t.onFail)==null||I.call(t,n,p),TI(y).then(()=>c()?void 0:h()).then(()=>{e?f(p):g()})})};return{promise:r,cancel:o,continue:()=>(s==null||s(),r),cancelRetry:a,continueRetry:l,canStart:u,start:()=>(u()?g():h().then(g),r)}}var UI=t=>setTimeout(t,0);function NI(){let t=[],e=0,n=a=>{a()},i=a=>{a()},s=UI;const r=a=>{e?t.push(a):s(()=>{n(a)})},o=()=>{const a=t;t=[],a.length&&s(()=>{i(()=>{a.forEach(l=>{n(l)})})})};return{batch:a=>{let l;e++;try{l=a()}finally{e--,e||o()}return l},batchCalls:a=>(...l)=>{r(()=>{a(...l)})},schedule:r,setNotifyFunction:a=>{n=a},setBatchNotifyFunction:a=>{i=a},setScheduler:a=>{s=a}}}var Cn=NI(),cr,Qp,b_=(Qp=class{constructor(){St(this,cr)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),SI(this.gcTime)&&ht(this,cr,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(Fa?1/0:5*60*1e3))}clearGcTimeout(){fe(this,cr)&&(clearTimeout(fe(this,cr)),ht(this,cr,void 0))}},cr=new WeakMap,Qp),oo,ao,si,ur,mn,va,dr,fi,qi,Jp,OI=(Jp=class extends b_{constructor(e){super();St(this,fi);St(this,oo);St(this,ao);St(this,si);St(this,ur);St(this,mn);St(this,va);St(this,dr);ht(this,dr,!1),ht(this,va,e.defaultOptions),this.setOptions(e.options),this.observers=[],ht(this,ur,e.client),ht(this,si,fe(this,ur).getQueryCache()),this.queryKey=e.queryKey,this.queryHash=e.queryHash,ht(this,oo,kI(this.options)),this.state=e.state??fe(this,oo),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var e;return(e=fe(this,mn))==null?void 0:e.promise}setOptions(e){this.options={...fe(this,va),...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&fe(this,si).remove(this)}setData(e,n){const i=AI(this.state.data,e,this.options);return fn(this,fi,qi).call(this,{data:i,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),i}setState(e,n){fn(this,fi,qi).call(this,{type:"setState",state:e,setStateOptions:n})}cancel(e){var i,s;const n=(i=fe(this,mn))==null?void 0:i.promise;return(s=fe(this,mn))==null||s.cancel(e),n?n.then(di).catch(di):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(fe(this,oo))}isActive(){return this.observers.some(e=>EI(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Mf||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(e=0){return this.state.isInvalidated||this.state.data===void 0||!MI(this.state.dataUpdatedAt,e)}onFocus(){var n;const e=this.observers.find(i=>i.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(n=fe(this,mn))==null||n.continue()}onOnline(){var n;const e=this.observers.find(i=>i.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(n=fe(this,mn))==null||n.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),fe(this,si).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(fe(this,mn)&&(fe(this,dr)?fe(this,mn).cancel({revert:!0}):fe(this,mn).cancelRetry()),this.scheduleGc()),fe(this,si).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||fn(this,fi,qi).call(this,{type:"invalidate"})}fetch(e,n){var l,c,u;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(fe(this,mn))return fe(this,mn).continueRetry(),fe(this,mn).promise}if(e&&this.setOptions(e),!this.options.queryFn){const d=this.observers.find(f=>f.options.queryFn);d&&this.setOptions(d.options)}const i=new AbortController,s=d=>{Object.defineProperty(d,"signal",{enumerable:!0,get:()=>(ht(this,dr,!0),i.signal)})},r=()=>{const d=p_(this.options,n),f={client:fe(this,ur),queryKey:this.queryKey,meta:this.meta};return s(f),ht(this,dr,!1),this.options.persister?this.options.persister(d,f,this):d(f)},o={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:fe(this,ur),state:this.state,fetchFn:r};s(o),(l=this.options.behavior)==null||l.onFetch(o,this),ht(this,ao,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((c=o.fetchOptions)==null?void 0:c.meta))&&fn(this,fi,qi).call(this,{type:"fetch",meta:(u=o.fetchOptions)==null?void 0:u.meta});const a=d=>{var f,h,g,v;_u(d)&&d.silent||fn(this,fi,qi).call(this,{type:"error",error:d}),_u(d)||((h=(f=fe(this,si).config).onError)==null||h.call(f,d,this),(v=(g=fe(this,si).config).onSettled)==null||v.call(g,this.state.data,d,this)),this.scheduleGc()};return ht(this,mn,__({initialPromise:n==null?void 0:n.initialPromise,fn:o.fetchFn,abort:i.abort.bind(i),onSuccess:d=>{var f,h,g,v;if(d===void 0){a(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(d)}catch(m){a(m);return}(h=(f=fe(this,si).config).onSuccess)==null||h.call(f,d,this),(v=(g=fe(this,si).config).onSettled)==null||v.call(g,d,this.state.error,this),this.scheduleGc()},onError:a,onFail:(d,f)=>{fn(this,fi,qi).call(this,{type:"failed",failureCount:d,error:f})},onPause:()=>{fn(this,fi,qi).call(this,{type:"pause"})},onContinue:()=>{fn(this,fi,qi).call(this,{type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode,canRun:()=>!0})),fe(this,mn).start()}},oo=new WeakMap,ao=new WeakMap,si=new WeakMap,ur=new WeakMap,mn=new WeakMap,va=new WeakMap,dr=new WeakMap,fi=new WeakSet,qi=function(e){const n=i=>{switch(e.type){case"failed":return{...i,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...FI(i.data,this.options),fetchMeta:e.meta??null};case"success":return{...i,data:e.data,dataUpdateCount:i.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const s=e.error;return _u(s)&&s.revert&&fe(this,ao)?{...fe(this,ao),fetchStatus:"idle"}:{...i,error:s,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...e.state}}};this.state=n(this.state),Cn.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),fe(this,si).notify({query:this,type:"updated",action:e})})},Jp);function FI(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:g_(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function kI(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=e!==void 0,i=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var Ei,em,x_=(em=class extends _c{constructor(n={}){super();St(this,Ei);this.config=n,ht(this,Ei,new Map)}build(n,i,s){const r=i.queryKey,o=i.queryHash??Sf(r,i);let a=this.get(o);return a||(a=new OI({client:n,queryKey:r,queryHash:o,options:n.defaultQueryOptions(i),state:s,defaultOptions:n.getQueryDefaults(r)}),this.add(a)),a}add(n){fe(this,Ei).has(n.queryHash)||(fe(this,Ei).set(n.queryHash,n),this.notify({type:"added",query:n}))}remove(n){const i=fe(this,Ei).get(n.queryHash);i&&(n.destroy(),i===n&&fe(this,Ei).delete(n.queryHash),this.notify({type:"removed",query:n}))}clear(){Cn.batch(()=>{this.getAll().forEach(n=>{this.remove(n)})})}get(n){return fe(this,Ei).get(n)}getAll(){return[...fe(this,Ei).values()]}find(n){const i={exact:!0,...n};return this.getAll().find(s=>Wp(i,s))}findAll(n={}){const i=this.getAll();return Object.keys(n).length>0?i.filter(s=>Wp(n,s)):i}notify(n){Cn.batch(()=>{this.listeners.forEach(i=>{i(n)})})}onFocus(){Cn.batch(()=>{this.getAll().forEach(n=>{n.onFocus()})})}onOnline(){Cn.batch(()=>{this.getAll().forEach(n=>{n.onOnline()})})}},Ei=new WeakMap,em),Ti,Mn,fr,Ai,ms,tm,BI=(tm=class extends b_{constructor(e){super();St(this,Ai);St(this,Ti);St(this,Mn);St(this,fr);this.mutationId=e.mutationId,ht(this,Mn,e.mutationCache),ht(this,Ti,[]),this.state=e.state||HI(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){fe(this,Ti).includes(e)||(fe(this,Ti).push(e),this.clearGcTimeout(),fe(this,Mn).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){ht(this,Ti,fe(this,Ti).filter(n=>n!==e)),this.scheduleGc(),fe(this,Mn).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){fe(this,Ti).length||(this.state.status==="pending"?this.scheduleGc():fe(this,Mn).remove(this))}continue(){var e;return((e=fe(this,fr))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var r,o,a,l,c,u,d,f,h,g,v,m,p,C,E,y,U,I,R,k;const n=()=>{fn(this,Ai,ms).call(this,{type:"continue"})};ht(this,fr,__({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(w,M)=>{fn(this,Ai,ms).call(this,{type:"failed",failureCount:w,error:M})},onPause:()=>{fn(this,Ai,ms).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>fe(this,Mn).canRun(this)}));const i=this.state.status==="pending",s=!fe(this,fr).canStart();try{if(i)n();else{fn(this,Ai,ms).call(this,{type:"pending",variables:e,isPaused:s}),await((o=(r=fe(this,Mn).config).onMutate)==null?void 0:o.call(r,e,this));const M=await((l=(a=this.options).onMutate)==null?void 0:l.call(a,e));M!==this.state.context&&fn(this,Ai,ms).call(this,{type:"pending",context:M,variables:e,isPaused:s})}const w=await fe(this,fr).start();return await((u=(c=fe(this,Mn).config).onSuccess)==null?void 0:u.call(c,w,e,this.state.context,this)),await((f=(d=this.options).onSuccess)==null?void 0:f.call(d,w,e,this.state.context)),await((g=(h=fe(this,Mn).config).onSettled)==null?void 0:g.call(h,w,null,this.state.variables,this.state.context,this)),await((m=(v=this.options).onSettled)==null?void 0:m.call(v,w,null,e,this.state.context)),fn(this,Ai,ms).call(this,{type:"success",data:w}),w}catch(w){try{throw await((C=(p=fe(this,Mn).config).onError)==null?void 0:C.call(p,w,e,this.state.context,this)),await((y=(E=this.options).onError)==null?void 0:y.call(E,w,e,this.state.context)),await((I=(U=fe(this,Mn).config).onSettled)==null?void 0:I.call(U,void 0,w,this.state.variables,this.state.context,this)),await((k=(R=this.options).onSettled)==null?void 0:k.call(R,void 0,w,e,this.state.context)),w}finally{fn(this,Ai,ms).call(this,{type:"error",error:w})}}finally{fe(this,Mn).runNext(this)}}},Ti=new WeakMap,Mn=new WeakMap,fr=new WeakMap,Ai=new WeakSet,ms=function(e){const n=i=>{switch(e.type){case"failed":return{...i,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...i,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:e.error,failureCount:i.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=n(this.state),Cn.batch(()=>{fe(this,Ti).forEach(i=>{i.onMutationUpdate(e)}),fe(this,Mn).notify({mutation:this,type:"updated",action:e})})},tm);function HI(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Ki,hi,_a,nm,y_=(nm=class extends _c{constructor(n={}){super();St(this,Ki);St(this,hi);St(this,_a);this.config=n,ht(this,Ki,new Set),ht(this,hi,new Map),ht(this,_a,0)}build(n,i,s){const r=new BI({mutationCache:this,mutationId:++ka(this,_a)._,options:n.defaultMutationOptions(i),state:s});return this.add(r),r}add(n){fe(this,Ki).add(n);const i=ml(n);if(typeof i=="string"){const s=fe(this,hi).get(i);s?s.push(n):fe(this,hi).set(i,[n])}this.notify({type:"added",mutation:n})}remove(n){if(fe(this,Ki).delete(n)){const i=ml(n);if(typeof i=="string"){const s=fe(this,hi).get(i);if(s)if(s.length>1){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}else s[0]===n&&fe(this,hi).delete(i)}}this.notify({type:"removed",mutation:n})}canRun(n){const i=ml(n);if(typeof i=="string"){const s=fe(this,hi).get(i),r=s==null?void 0:s.find(o=>o.state.status==="pending");return!r||r===n}else return!0}runNext(n){var s;const i=ml(n);if(typeof i=="string"){const r=(s=fe(this,hi).get(i))==null?void 0:s.find(o=>o!==n&&o.state.isPaused);return(r==null?void 0:r.continue())??Promise.resolve()}else return Promise.resolve()}clear(){Cn.batch(()=>{fe(this,Ki).forEach(n=>{this.notify({type:"removed",mutation:n})}),fe(this,Ki).clear(),fe(this,hi).clear()})}getAll(){return Array.from(fe(this,Ki))}find(n){const i={exact:!0,...n};return this.getAll().find(s=>$p(i,s))}findAll(n={}){return this.getAll().filter(i=>$p(n,i))}notify(n){Cn.batch(()=>{this.listeners.forEach(i=>{i(n)})})}resumePausedMutations(){const n=this.getAll().filter(i=>i.state.isPaused);return Cn.batch(()=>Promise.all(n.map(i=>i.continue().catch(di))))}},Ki=new WeakMap,hi=new WeakMap,_a=new WeakMap,nm);function ml(t){var e;return(e=t.options.scope)==null?void 0:e.id}function qp(t){return{onFetch:(e,n)=>{var u,d,f,h,g;const i=e.options,s=(f=(d=(u=e.fetchOptions)==null?void 0:u.meta)==null?void 0:d.fetchMore)==null?void 0:f.direction,r=((h=e.state.data)==null?void 0:h.pages)||[],o=((g=e.state.data)==null?void 0:g.pageParams)||[];let a={pages:[],pageParams:[]},l=0;const c=async()=>{let v=!1;const m=E=>{Object.defineProperty(E,"signal",{enumerable:!0,get:()=>(e.signal.aborted?v=!0:e.signal.addEventListener("abort",()=>{v=!0}),e.signal)})},p=p_(e.options,e.fetchOptions),C=async(E,y,U)=>{if(v)return Promise.reject();if(y==null&&E.pages.length)return Promise.resolve(E);const I={client:e.client,queryKey:e.queryKey,pageParam:y,direction:U?"backward":"forward",meta:e.options.meta};m(I);const R=await p(I),{maxPages:k}=e.options,w=U?RI:CI;return{pages:w(E.pages,R,k),pageParams:w(E.pageParams,y,k)}};if(s&&r.length){const E=s==="backward",y=E?zI:Yp,U={pages:r,pageParams:o},I=y(i,U);a=await C(U,I,E)}else{const E=t??r.length;do{const y=l===0?o[0]??i.initialPageParam:Yp(i,a);if(l>0&&y==null)break;a=await C(a,y),l++}while(l<E)}return a};e.options.persister?e.fetchFn=()=>{var v,m;return(m=(v=e.options).persister)==null?void 0:m.call(v,c,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=c}}}function Yp(t,{pages:e,pageParams:n}){const i=e.length-1;return e.length>0?t.getNextPageParam(e[i],e,n[i],n):void 0}function zI(t,{pages:e,pageParams:n}){var i;return e.length>0?(i=t.getPreviousPageParam)==null?void 0:i.call(t,e[0],e,n[0],n):void 0}var Xt,Es,Ts,lo,co,As,uo,fo,im,VI=(im=class{constructor(e={}){St(this,Xt);St(this,Es);St(this,Ts);St(this,lo);St(this,co);St(this,As);St(this,uo);St(this,fo);ht(this,Xt,e.queryCache||new x_),ht(this,Es,e.mutationCache||new y_),ht(this,Ts,e.defaultOptions||{}),ht(this,lo,new Map),ht(this,co,new Map),ht(this,As,0)}mount(){ka(this,As)._++,fe(this,As)===1&&(ht(this,uo,m_.subscribe(async e=>{e&&(await this.resumePausedMutations(),fe(this,Xt).onFocus())})),ht(this,fo,Kl.subscribe(async e=>{e&&(await this.resumePausedMutations(),fe(this,Xt).onOnline())})))}unmount(){var e,n;ka(this,As)._--,fe(this,As)===0&&((e=fe(this,uo))==null||e.call(this),ht(this,uo,void 0),(n=fe(this,fo))==null||n.call(this),ht(this,fo,void 0))}isFetching(e){return fe(this,Xt).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return fe(this,Es).findAll({...e,status:"pending"}).length}getQueryData(e){var i;const n=this.defaultQueryOptions({queryKey:e});return(i=fe(this,Xt).get(n.queryHash))==null?void 0:i.state.data}ensureQueryData(e){const n=this.defaultQueryOptions(e),i=fe(this,Xt).build(this,n),s=i.state.data;return s===void 0?this.fetchQuery(e):(e.revalidateIfStale&&i.isStaleByTime(Gp(n.staleTime,i))&&this.prefetchQuery(n),Promise.resolve(s))}getQueriesData(e){return fe(this,Xt).findAll(e).map(({queryKey:n,state:i})=>{const s=i.data;return[n,s]})}setQueryData(e,n,i){const s=this.defaultQueryOptions({queryKey:e}),r=fe(this,Xt).get(s.queryHash),o=r==null?void 0:r.state.data,a=wI(n,o);if(a!==void 0)return fe(this,Xt).build(this,s).setData(a,{...i,manual:!0})}setQueriesData(e,n,i){return Cn.batch(()=>fe(this,Xt).findAll(e).map(({queryKey:s})=>[s,this.setQueryData(s,n,i)]))}getQueryState(e){var i;const n=this.defaultQueryOptions({queryKey:e});return(i=fe(this,Xt).get(n.queryHash))==null?void 0:i.state}removeQueries(e){const n=fe(this,Xt);Cn.batch(()=>{n.findAll(e).forEach(i=>{n.remove(i)})})}resetQueries(e,n){const i=fe(this,Xt);return Cn.batch(()=>(i.findAll(e).forEach(s=>{s.reset()}),this.refetchQueries({type:"active",...e},n)))}cancelQueries(e,n={}){const i={revert:!0,...n},s=Cn.batch(()=>fe(this,Xt).findAll(e).map(r=>r.cancel(i)));return Promise.all(s).then(di).catch(di)}invalidateQueries(e,n={}){return Cn.batch(()=>(fe(this,Xt).findAll(e).forEach(i=>{i.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},n)))}refetchQueries(e,n={}){const i={...n,cancelRefetch:n.cancelRefetch??!0},s=Cn.batch(()=>fe(this,Xt).findAll(e).filter(r=>!r.isDisabled()).map(r=>{let o=r.fetch(void 0,i);return i.throwOnError||(o=o.catch(di)),r.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(s).then(di)}fetchQuery(e){const n=this.defaultQueryOptions(e);n.retry===void 0&&(n.retry=!1);const i=fe(this,Xt).build(this,n);return i.isStaleByTime(Gp(n.staleTime,i))?i.fetch(n):Promise.resolve(i.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(di).catch(di)}fetchInfiniteQuery(e){return e.behavior=qp(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(di).catch(di)}ensureInfiniteQueryData(e){return e.behavior=qp(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return Kl.isOnline()?fe(this,Es).resumePausedMutations():Promise.resolve()}getQueryCache(){return fe(this,Xt)}getMutationCache(){return fe(this,Es)}getDefaultOptions(){return fe(this,Ts)}setDefaultOptions(e){ht(this,Ts,e)}setQueryDefaults(e,n){fe(this,lo).set(ma(e),{queryKey:e,defaultOptions:n})}getQueryDefaults(e){const n=[...fe(this,lo).values()],i={};return n.forEach(s=>{ga(e,s.queryKey)&&Object.assign(i,s.defaultOptions)}),i}setMutationDefaults(e,n){fe(this,co).set(ma(e),{mutationKey:e,defaultOptions:n})}getMutationDefaults(e){const n=[...fe(this,co).values()],i={};return n.forEach(s=>{ga(e,s.mutationKey)&&Object.assign(i,s.defaultOptions)}),i}defaultQueryOptions(e){if(e._defaulted)return e;const n={...fe(this,Ts).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return n.queryHash||(n.queryHash=Sf(n.queryKey,n)),n.refetchOnReconnect===void 0&&(n.refetchOnReconnect=n.networkMode!=="always"),n.throwOnError===void 0&&(n.throwOnError=!!n.suspense),!n.networkMode&&n.persister&&(n.networkMode="offlineFirst"),n.queryFn===Mf&&(n.enabled=!1),n}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...fe(this,Ts).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){fe(this,Xt).clear(),fe(this,Es).clear()}},Xt=new WeakMap,Es=new WeakMap,Ts=new WeakMap,lo=new WeakMap,co=new WeakMap,As=new WeakMap,uo=new WeakMap,fo=new WeakMap,im),GI="VUE_QUERY_CLIENT";function WI(t){const e=t?`:${t}`:"";return`${GI}${e}`}function Ad(t,e,n="",i=0){if(e){const s=e(t,n,i);if(s===void 0&&ln(t)||s!==void 0)return s}if(Array.isArray(t))return t.map((s,r)=>Ad(s,e,String(r),i+1));if(typeof t=="object"&&XI(t)){const s=Object.entries(t).map(([r,o])=>[r,Ad(o,e,r,i+1)]);return Object.fromEntries(s)}return t}function $I(t,e){return Ad(t,e)}function vt(t,e=!1){return $I(t,(n,i,s)=>{if(s===1&&i==="queryKey")return vt(n,!0);if(e&&jI(n))return vt(n(),e);if(ln(n))return vt(Ls(n),e)})}function XI(t){if(Object.prototype.toString.call(t)!=="[object Object]")return!1;const e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function jI(t){return typeof t=="function"}var qI=class extends x_{find(t){return super.find(vt(t))}findAll(t={}){return super.findAll(vt(t))}},YI=class extends y_{find(t){return super.find(vt(t))}findAll(t={}){return super.findAll(vt(t))}},KI=class extends VI{constructor(t={}){const e={defaultOptions:t.defaultOptions,queryCache:t.queryCache||new qI,mutationCache:t.mutationCache||new YI};super(e),this.isRestoring=tt(!1)}isFetching(t={}){return super.isFetching(vt(t))}isMutating(t={}){return super.isMutating(vt(t))}getQueryData(t){return super.getQueryData(vt(t))}ensureQueryData(t){return super.ensureQueryData(vt(t))}getQueriesData(t){return super.getQueriesData(vt(t))}setQueryData(t,e,n={}){return super.setQueryData(vt(t),e,vt(n))}setQueriesData(t,e,n={}){return super.setQueriesData(vt(t),e,vt(n))}getQueryState(t){return super.getQueryState(vt(t))}removeQueries(t={}){return super.removeQueries(vt(t))}resetQueries(t={},e={}){return super.resetQueries(vt(t),vt(e))}cancelQueries(t={},e={}){return super.cancelQueries(vt(t),vt(e))}invalidateQueries(t={},e={}){const n=vt(t),i=vt(e);if(super.invalidateQueries({...n,refetchType:"none"},i),n.refetchType==="none")return Promise.resolve();const s={...n,type:n.refetchType??n.type??"active"};return Sa().then(()=>super.refetchQueries(s,i))}refetchQueries(t={},e={}){return super.refetchQueries(vt(t),vt(e))}fetchQuery(t){return super.fetchQuery(vt(t))}prefetchQuery(t){return super.prefetchQuery(vt(t))}fetchInfiniteQuery(t){return super.fetchInfiniteQuery(vt(t))}prefetchInfiniteQuery(t){return super.prefetchInfiniteQuery(vt(t))}setDefaultOptions(t){super.setDefaultOptions(vt(t))}setQueryDefaults(t,e){super.setQueryDefaults(vt(t),vt(e))}getQueryDefaults(t){return super.getQueryDefaults(vt(t))}setMutationDefaults(t,e){super.setMutationDefaults(vt(t),vt(e))}getMutationDefaults(t){return super.getMutationDefaults(vt(t))}},ZI={install:(t,e={})=>{const n=WI(e.queryClientKey);let i;if("queryClient"in e&&e.queryClient)i=e.queryClient;else{const o="queryClientConfig"in e?e.queryClientConfig:void 0;i=new KI(o)}Fa||i.mount();let s=()=>{};if(e.clientPersister){i.isRestoring.value=!0;const[o,a]=e.clientPersister(i);s=o,a.then(()=>{var l;i.isRestoring.value=!1,(l=e.clientPersisterOnSuccess)==null||l.call(e,i)})}const r=()=>{i.unmount(),s()};if(t.onUnmount)t.onUnmount(r);else{const o=t.unmount;t.unmount=function(){r(),o()}}t.provide(n,i)}};const w_=Jb(yy),QI=ix();w_.use(QI).use(yI).use(ZI);w_.mount("#app");export{tU as A,eU as B,tn as C,GD as D,iL as E,Ht as F,an as G,rr as H,Cs as I,yt as J,u_ as K,i_ as L,Md as M,mc as N,f_ as O,qn as P,gi as Q,gn as R,Qv as S,e_ as T,Yl as U,hg as V,KL as W,zd as X,Sa as Y,Mo as _,_ as a,Ct as b,Ve as c,$t as d,nU as e,Fo as f,kc as g,sU as h,rU as i,oU as j,aU as k,iU as l,ya as m,Hs as n,Fe as o,Ma as p,Yt as q,tt as r,wi as s,st as t,En as u,en as v,Bn as w,Yn as x,Uo as y,Ke as z};
