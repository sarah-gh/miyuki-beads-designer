const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SweetAlertDemo-tmT9qTlj.js","assets/SweetAlertDemo-tn0RQdqM.css","assets/WeavingGrid-D5eTevug.js","assets/PeyoteGridEditor-Bo_iLYD0.js","assets/PeyoteGridEditor-waqStsNt.css","assets/WeavingGrid-p5k6qFxd.css","assets/PeyoteGrid-CJ-sa8P5.js","assets/PeyoteGrid-DrYEbPCi.css"])))=>i.map(i=>d[i]);
var rf=t=>{throw TypeError(t)};var sc=(t,e,n)=>e.has(t)||rf("Cannot "+n);var fe=(t,e,n)=>(sc(t,e,"read from private field"),n?n.call(t):e.get(t)),St=(t,e,n)=>e.has(t)?rf("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),ht=(t,e,n,i)=>(sc(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n),un=(t,e,n)=>(sc(t,e,"access private method"),n);var Aa=(t,e,n,i)=>({set _(s){ht(t,e,s,n)},get _(){return fe(t,e,i)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ld(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ot={},Ur=[],Ri=()=>{},Gv=()=>!1,Nl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),cd=t=>t.startsWith("onUpdate:"),bn=Object.assign,ud=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Wv=Object.prototype.hasOwnProperty,Rt=(t,e)=>Wv.call(t,e),et=Array.isArray,Or=t=>la(t)==="[object Map]",fo=t=>la(t)==="[object Set]",of=t=>la(t)==="[object Date]",ut=t=>typeof t=="function",en=t=>typeof t=="string",Li=t=>typeof t=="symbol",Ft=t=>t!==null&&typeof t=="object",Cp=t=>(Ft(t)||ut(t))&&ut(t.then)&&ut(t.catch),Rp=Object.prototype.toString,la=t=>Rp.call(t),$v=t=>la(t).slice(8,-1),Pp=t=>la(t)==="[object Object]",dd=t=>en(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fo=ld(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Xv=/-(\w)/g,si=Fl(t=>t.replace(Xv,(e,n)=>n?n.toUpperCase():"")),jv=/\B([A-Z])/g,cr=Fl(t=>t.replace(jv,"-$1").toLowerCase()),kl=Fl(t=>t.charAt(0).toUpperCase()+t.slice(1)),rc=Fl(t=>t?`on${kl(t)}`:""),Es=(t,e)=>!Object.is(t,e),nl=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Dp=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},pl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let af;const Bl=()=>af||(af=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function jn(t){if(et(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=en(i)?Zv(i):jn(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(en(t)||Ft(t))return t}const qv=/;(?![^(]*\))/g,Yv=/:([^]+)/,Kv=/\/\*[^]*?\*\//g;function Zv(t){const e={};return t.replace(Kv,"").split(qv).forEach(n=>{if(n){const i=n.split(Yv);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Je(t){let e="";if(en(t))e=t;else if(et(t))for(let n=0;n<t.length;n++){const i=Je(t[n]);i&&(e+=i+" ")}else if(Ft(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Qv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jv=ld(Qv);function Lp(t){return!!t||t===""}function e_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=ca(t[i],e[i]);return n}function ca(t,e){if(t===e)return!0;let n=of(t),i=of(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Li(t),i=Li(e),n||i)return t===e;if(n=et(t),i=et(e),n||i)return n&&i?e_(t,e):!1;if(n=Ft(t),i=Ft(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ca(t[o],e[o]))return!1}}return String(t)===String(e)}function fd(t,e){return t.findIndex(n=>ca(n,e))}const Ip=t=>!!(t&&t.__v_isRef===!0),at=t=>en(t)?t:t==null?"":et(t)||Ft(t)&&(t.toString===Rp||!ut(t.toString))?Ip(t)?at(t.value):JSON.stringify(t,Up,2):String(t),Up=(t,e)=>Ip(e)?Up(t,e.value):Or(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[oc(i,r)+" =>"]=s,n),{})}:fo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>oc(n))}:Li(e)?oc(e):Ft(e)&&!et(e)&&!Pp(e)?String(e):e,oc=(t,e="")=>{var n;return Li(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $n;class Op{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=$n,!e&&$n&&(this.index=($n.scopes||($n.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=$n;try{return $n=this,e()}finally{$n=n}}}on(){$n=this}off(){$n=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function t_(t){return new Op(t)}function n_(){return $n}let Nt;const ac=new WeakSet;class Np{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,$n&&$n.active&&$n.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ac.has(this)&&(ac.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||kp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,lf(this),Bp(this);const e=Nt,n=mi;Nt=this,mi=!0;try{return this.fn()}finally{Hp(this),Nt=e,mi=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)md(e);this.deps=this.depsTail=void 0,lf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ac.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){tu(this)&&this.run()}get dirty(){return tu(this)}}let Fp=0,ko,Bo;function kp(t,e=!1){if(t.flags|=8,e){t.next=Bo,Bo=t;return}t.next=ko,ko=t}function hd(){Fp++}function pd(){if(--Fp>0)return;if(Bo){let e=Bo;for(Bo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ko;){let e=ko;for(ko=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Bp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Hp(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),md(i),i_(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function tu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(zp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function zp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===$o))return;t.globalVersion=$o;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!tu(t)){t.flags&=-3;return}const n=Nt,i=mi;Nt=t,mi=!0;try{Bp(t);const s=t.fn(t._value);(e.version===0||Es(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Nt=n,mi=i,Hp(t),t.flags&=-3}}function md(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)md(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function i_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let mi=!0;const Vp=[];function Ds(){Vp.push(mi),mi=!1}function Ls(){const t=Vp.pop();mi=t===void 0?!0:t}function lf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Nt;Nt=void 0;try{e()}finally{Nt=n}}}let $o=0;class s_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class gd{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Nt||!mi||Nt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Nt)n=this.activeLink=new s_(Nt,this),Nt.deps?(n.prevDep=Nt.depsTail,Nt.depsTail.nextDep=n,Nt.depsTail=n):Nt.deps=Nt.depsTail=n,Gp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Nt.depsTail,n.nextDep=void 0,Nt.depsTail.nextDep=n,Nt.depsTail=n,Nt.deps===n&&(Nt.deps=i)}return n}trigger(e){this.version++,$o++,this.notify(e)}notify(e){hd();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{pd()}}}function Gp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Gp(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const nu=new WeakMap,tr=Symbol(""),iu=Symbol(""),Xo=Symbol("");function mn(t,e,n){if(mi&&Nt){let i=nu.get(t);i||nu.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new gd),s.map=i,s.key=n),s.track()}}function qi(t,e,n,i,s,r){const o=nu.get(t);if(!o){$o++;return}const a=l=>{l&&l.trigger()};if(hd(),e==="clear")o.forEach(a);else{const l=et(t),c=l&&dd(n);if(l&&n==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===Xo||!Li(f)&&f>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Xo)),e){case"add":l?c&&a(o.get("length")):(a(o.get(tr)),Or(t)&&a(o.get(iu)));break;case"delete":l||(a(o.get(tr)),Or(t)&&a(o.get(iu)));break;case"set":Or(t)&&a(o.get(tr));break}}pd()}function pr(t){const e=Ct(t);return e===t?e:(mn(e,"iterate",Xo),ii(t)?e:e.map(gn))}function Hl(t){return mn(t=Ct(t),"iterate",Xo),t}const r_={__proto__:null,[Symbol.iterator](){return lc(this,Symbol.iterator,gn)},concat(...t){return pr(this).concat(...t.map(e=>et(e)?pr(e):e))},entries(){return lc(this,"entries",t=>(t[1]=gn(t[1]),t))},every(t,e){return Fi(this,"every",t,e,void 0,arguments)},filter(t,e){return Fi(this,"filter",t,e,n=>n.map(gn),arguments)},find(t,e){return Fi(this,"find",t,e,gn,arguments)},findIndex(t,e){return Fi(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Fi(this,"findLast",t,e,gn,arguments)},findLastIndex(t,e){return Fi(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Fi(this,"forEach",t,e,void 0,arguments)},includes(...t){return cc(this,"includes",t)},indexOf(...t){return cc(this,"indexOf",t)},join(t){return pr(this).join(t)},lastIndexOf(...t){return cc(this,"lastIndexOf",t)},map(t,e){return Fi(this,"map",t,e,void 0,arguments)},pop(){return xo(this,"pop")},push(...t){return xo(this,"push",t)},reduce(t,...e){return cf(this,"reduce",t,e)},reduceRight(t,...e){return cf(this,"reduceRight",t,e)},shift(){return xo(this,"shift")},some(t,e){return Fi(this,"some",t,e,void 0,arguments)},splice(...t){return xo(this,"splice",t)},toReversed(){return pr(this).toReversed()},toSorted(t){return pr(this).toSorted(t)},toSpliced(...t){return pr(this).toSpliced(...t)},unshift(...t){return xo(this,"unshift",t)},values(){return lc(this,"values",gn)}};function lc(t,e,n){const i=Hl(t),s=i[e]();return i!==t&&!ii(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=n(r.value)),r}),s}const o_=Array.prototype;function Fi(t,e,n,i,s,r){const o=Hl(t),a=o!==t&&!ii(t),l=o[e];if(l!==o_[e]){const d=l.apply(t,r);return a?gn(d):d}let c=n;o!==t&&(a?c=function(d,f){return n.call(this,gn(d),f,t)}:n.length>2&&(c=function(d,f){return n.call(this,d,f,t)}));const u=l.call(o,c,i);return a&&s?s(u):u}function cf(t,e,n,i){const s=Hl(t);let r=n;return s!==t&&(ii(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,gn(a),l,t)}),s[e](r,...i)}function cc(t,e,n){const i=Ct(t);mn(i,"iterate",Xo);const s=i[e](...n);return(s===-1||s===!1)&&bd(n[0])?(n[0]=Ct(n[0]),i[e](...n)):s}function xo(t,e,n=[]){Ds(),hd();const i=Ct(t)[e].apply(t,n);return pd(),Ls(),i}const a_=ld("__proto__,__v_isRef,__isVue"),Wp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Li));function l_(t){Li(t)||(t=String(t));const e=Ct(this);return mn(e,"has",t),e.hasOwnProperty(t)}class $p{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?__:Yp:r?qp:jp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=et(e);if(!s){let l;if(o&&(l=r_[n]))return l;if(n==="hasOwnProperty")return l_}const a=Reflect.get(e,n,ln(e)?e:i);return(Li(n)?Wp.has(n):a_(n))||(s||mn(e,"get",n),r)?a:ln(a)?o&&dd(n)?a:a.value:Ft(a)?s?Zp(a):ua(a):a}}class Xp extends $p{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(!this._isShallow){const l=ir(r);if(!ii(i)&&!ir(i)&&(r=Ct(r),i=Ct(i)),!et(e)&&ln(r)&&!ln(i))return l?!1:(r.value=i,!0)}const o=et(e)&&dd(n)?Number(n)<e.length:Rt(e,n),a=Reflect.set(e,n,i,ln(e)?e:s);return e===Ct(s)&&(o?Es(i,r)&&qi(e,"set",n,i):qi(e,"add",n,i)),a}deleteProperty(e,n){const i=Rt(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&qi(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!Li(n)||!Wp.has(n))&&mn(e,"has",n),i}ownKeys(e){return mn(e,"iterate",et(e)?"length":tr),Reflect.ownKeys(e)}}class c_ extends $p{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const u_=new Xp,d_=new c_,f_=new Xp(!0);const su=t=>t,Ca=t=>Reflect.getPrototypeOf(t);function h_(t,e,n){return function(...i){const s=this.__v_raw,r=Ct(s),o=Or(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?su:e?ru:gn;return!e&&mn(r,"iterate",l?iu:tr),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function Ra(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function p_(t,e){const n={get(s){const r=this.__v_raw,o=Ct(r),a=Ct(s);t||(Es(s,a)&&mn(o,"get",s),mn(o,"get",a));const{has:l}=Ca(o),c=e?su:t?ru:gn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&mn(Ct(s),"iterate",tr),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=Ct(r),a=Ct(s);return t||(Es(s,a)&&mn(o,"has",s),mn(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=Ct(a),c=e?su:t?ru:gn;return!t&&mn(l,"iterate",tr),a.forEach((u,d)=>s.call(r,c(u),c(d),o))}};return bn(n,t?{add:Ra("add"),set:Ra("set"),delete:Ra("delete"),clear:Ra("clear")}:{add(s){!e&&!ii(s)&&!ir(s)&&(s=Ct(s));const r=Ct(this);return Ca(r).has.call(r,s)||(r.add(s),qi(r,"add",s,s)),this},set(s,r){!e&&!ii(r)&&!ir(r)&&(r=Ct(r));const o=Ct(this),{has:a,get:l}=Ca(o);let c=a.call(o,s);c||(s=Ct(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Es(r,u)&&qi(o,"set",s,r):qi(o,"add",s,r),this},delete(s){const r=Ct(this),{has:o,get:a}=Ca(r);let l=o.call(r,s);l||(s=Ct(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&qi(r,"delete",s,void 0),c},clear(){const s=Ct(this),r=s.size!==0,o=s.clear();return r&&qi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=h_(s,t,e)}),n}function vd(t,e){const n=p_(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(Rt(n,s)&&s in i?n:i,s,r)}const m_={get:vd(!1,!1)},g_={get:vd(!1,!0)},v_={get:vd(!0,!1)};const jp=new WeakMap,qp=new WeakMap,Yp=new WeakMap,__=new WeakMap;function b_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function x_(t){return t.__v_skip||!Object.isExtensible(t)?0:b_($v(t))}function ua(t){return ir(t)?t:_d(t,!1,u_,m_,jp)}function Kp(t){return _d(t,!1,f_,g_,qp)}function Zp(t){return _d(t,!0,d_,v_,Yp)}function _d(t,e,n,i,s){if(!Ft(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=x_(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Nr(t){return ir(t)?Nr(t.__v_raw):!!(t&&t.__v_isReactive)}function ir(t){return!!(t&&t.__v_isReadonly)}function ii(t){return!!(t&&t.__v_isShallow)}function bd(t){return t?!!t.__v_raw:!1}function Ct(t){const e=t&&t.__v_raw;return e?Ct(e):t}function Qp(t){return!Rt(t,"__v_skip")&&Object.isExtensible(t)&&Dp(t,"__v_skip",!0),t}const gn=t=>Ft(t)?ua(t):t,ru=t=>Ft(t)?Zp(t):t;function ln(t){return t?t.__v_isRef===!0:!1}function st(t){return Jp(t,!1)}function y_(t){return Jp(t,!0)}function Jp(t,e){return ln(t)?t:new w_(t,e)}class w_{constructor(e,n){this.dep=new gd,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ct(e),this._value=n?e:gn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||ii(e)||ir(e);e=i?e:Ct(e),Es(e,n)&&(this._rawValue=e,this._value=i?e:gn(e),this.dep.trigger())}}function Ts(t){return ln(t)?t.value:t}const S_={get:(t,e,n)=>e==="__v_raw"?t:Ts(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return ln(s)&&!ln(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function em(t){return Nr(t)?t:new Proxy(t,S_)}class M_{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new gd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=$o-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Nt!==this)return kp(this,!0),!0}get value(){const e=this.dep.track();return zp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function E_(t,e,n=!1){let i,s;return ut(t)?i=t:(i=t.get,s=t.set),new M_(i,s,n)}const Pa={},ml=new WeakMap;let Ws;function T_(t,e=!1,n=Ws){if(n){let i=ml.get(n);i||ml.set(n,i=[]),i.push(t)}}function A_(t,e,n=Ot){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=y=>s?y:ii(y)||s===!1||s===0?Yi(y,1):Yi(y);let u,d,f,h,v=!1,_=!1;if(ln(t)?(d=()=>t.value,v=ii(t)):Nr(t)?(d=()=>c(t),v=!0):et(t)?(_=!0,v=t.some(y=>Nr(y)||ii(y)),d=()=>t.map(y=>{if(ln(y))return y.value;if(Nr(y))return c(y);if(ut(y))return l?l(y,2):y()})):ut(t)?e?d=l?()=>l(t,2):t:d=()=>{if(f){Ds();try{f()}finally{Ls()}}const y=Ws;Ws=u;try{return l?l(t,3,[h]):t(h)}finally{Ws=y}}:d=Ri,e&&s){const y=d,L=s===!0?1/0:s;d=()=>Yi(y(),L)}const m=n_(),p=()=>{u.stop(),m&&m.active&&ud(m.effects,u)};if(r&&e){const y=e;e=(...L)=>{y(...L),p()}}let A=_?new Array(t.length).fill(Pa):Pa;const M=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const L=u.run();if(s||v||(_?L.some((I,P)=>Es(I,A[P])):Es(L,A))){f&&f();const I=Ws;Ws=u;try{const P=[L,A===Pa?void 0:_&&A[0]===Pa?[]:A,h];l?l(e,3,P):e(...P),A=L}finally{Ws=I}}}else u.run()};return a&&a(M),u=new Np(d),u.scheduler=o?()=>o(M,!1):M,h=y=>T_(y,!1,u),f=u.onStop=()=>{const y=ml.get(u);if(y){if(l)l(y,4);else for(const L of y)L();ml.delete(u)}},e?i?M(!0):A=u.run():o?o(M.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Yi(t,e=1/0,n){if(e<=0||!Ft(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ln(t))Yi(t.value,e,n);else if(et(t))for(let i=0;i<t.length;i++)Yi(t[i],e,n);else if(fo(t)||Or(t))t.forEach(i=>{Yi(i,e,n)});else if(Pp(t)){for(const i in t)Yi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Yi(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function da(t,e,n,i){try{return i?t(...i):t()}catch(s){zl(s,e,n)}}function Ii(t,e,n,i){if(ut(t)){const s=da(t,e,n,i);return s&&Cp(s)&&s.catch(r=>{zl(r,e,n)}),s}if(et(t)){const s=[];for(let r=0;r<t.length;r++)s.push(Ii(t[r],e,n,i));return s}}function zl(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ot;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}a=a.parent}if(r){Ds(),da(r,null,10,[t,l,c]),Ls();return}}C_(t,n,s,i,o)}function C_(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const Tn=[];let xi=-1;const Fr=[];let fs=null,Pr=0;const tm=Promise.resolve();let gl=null;function fa(t){const e=gl||tm;return t?e.then(this?t.bind(this):t):e}function R_(t){let e=xi+1,n=Tn.length;for(;e<n;){const i=e+n>>>1,s=Tn[i],r=jo(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function xd(t){if(!(t.flags&1)){const e=jo(t),n=Tn[Tn.length-1];!n||!(t.flags&2)&&e>=jo(n)?Tn.push(t):Tn.splice(R_(e),0,t),t.flags|=1,nm()}}function nm(){gl||(gl=tm.then(sm))}function P_(t){et(t)?Fr.push(...t):fs&&t.id===-1?fs.splice(Pr+1,0,t):t.flags&1||(Fr.push(t),t.flags|=1),nm()}function uf(t,e,n=xi+1){for(;n<Tn.length;n++){const i=Tn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Tn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function im(t){if(Fr.length){const e=[...new Set(Fr)].sort((n,i)=>jo(n)-jo(i));if(Fr.length=0,fs){fs.push(...e);return}for(fs=e,Pr=0;Pr<fs.length;Pr++){const n=fs[Pr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}fs=null,Pr=0}}const jo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function sm(t){try{for(xi=0;xi<Tn.length;xi++){const e=Tn[xi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),da(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;xi<Tn.length;xi++){const e=Tn[xi];e&&(e.flags&=-2)}xi=-1,Tn.length=0,im(),gl=null,(Tn.length||Fr.length)&&sm()}}let qn=null,rm=null;function vl(t){const e=qn;return qn=t,rm=t&&t.type.__scopeId||null,e}function Lo(t,e=qn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&xf(-1);const r=vl(e);let o;try{o=t(...s)}finally{vl(r),i._d&&xf(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function qt(t,e){if(qn===null)return t;const n=$l(qn),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Ot]=e[s];r&&(ut(r)&&(r={mounted:r,updated:r}),r.deep&&Yi(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Os(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Ds(),Ii(l,n,8,[t.el,a,t,e]),Ls())}}const D_=Symbol("_vte"),L_=t=>t.__isTeleport;function yd(t,e){t.shapeFlag&6&&t.component?(t.transition=e,yd(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function om(t,e){return ut(t)?bn({name:t.name},e,{setup:t}):t}function am(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function _l(t,e,n,i,s=!1){if(et(t)){t.forEach((v,_)=>_l(v,e&&(et(e)?e[_]:e),n,i,s));return}if(Ho(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&_l(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?$l(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ot?a.refs={}:a.refs,d=a.setupState,f=Ct(d),h=d===Ot?()=>!1:v=>Rt(f,v);if(c!=null&&c!==l&&(en(c)?(u[c]=null,h(c)&&(d[c]=null)):ln(c)&&(c.value=null)),ut(l))da(l,a,12,[o,u]);else{const v=en(l),_=ln(l);if(v||_){const m=()=>{if(t.f){const p=v?h(l)?d[l]:u[l]:l.value;s?et(p)&&ud(p,r):et(p)?p.includes(r)||p.push(r):v?(u[l]=[r],h(l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else v?(u[l]=o,h(l)&&(d[l]=o)):_&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Wn(m,n)):m()}}}Bl().requestIdleCallback;Bl().cancelIdleCallback;const Ho=t=>!!t.type.__asyncLoader,lm=t=>t.type.__isKeepAlive;function I_(t,e){cm(t,"a",e)}function U_(t,e){cm(t,"da",e)}function cm(t,e,n=vn){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Vl(e,i,n),n){let s=n.parent;for(;s&&s.parent;)lm(s.parent.vnode)&&O_(i,e,n,s),s=s.parent}}function O_(t,e,n,i){const s=Vl(e,t,i,!0);Sd(()=>{ud(i[e],s)},n)}function Vl(t,e,n=vn,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Ds();const a=ha(n),l=Ii(e,n,t,o);return a(),Ls(),l});return i?s.unshift(r):s.push(r),r}}const ns=t=>(e,n=vn)=>{(!Yo||t==="sp")&&Vl(t,(...i)=>e(...i),n)},N_=ns("bm"),ho=ns("m"),F_=ns("bu"),k_=ns("u"),wd=ns("bum"),Sd=ns("um"),B_=ns("sp"),H_=ns("rtg"),z_=ns("rtc");function V_(t,e=vn){Vl("ec",t,e)}const G_="components";function W_(t,e){return X_(G_,t,!0,e)||t}const $_=Symbol.for("v-ndc");function X_(t,e,n=!0,i=!1){const s=qn||vn;if(s){const r=s.type;{const a=L0(r,!1);if(a&&(a===e||a===si(e)||a===kl(si(e))))return r}const o=df(s[t]||r[t],e)||df(s.appContext[t],e);return!o&&i?r:o}}function df(t,e){return t&&(t[e]||t[si(e)]||t[kl(si(e))])}function En(t,e,n,i){let s;const r=n,o=et(t);if(o||en(t)){const a=o&&Nr(t);let l=!1;a&&(l=!ii(t),t=Hl(t)),s=new Array(t.length);for(let c=0,u=t.length;c<u;c++)s[c]=e(l?gn(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(Ft(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,r)}}else s=[];return s}const ou=t=>t?Dm(t)?$l(t):ou(t.parent):null,zo=bn(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ou(t.parent),$root:t=>ou(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>dm(t),$forceUpdate:t=>t.f||(t.f=()=>{xd(t.update)}),$nextTick:t=>t.n||(t.n=fa.bind(t.proxy)),$watch:t=>h0.bind(t)}),uc=(t,e)=>t!==Ot&&!t.__isScriptSetup&&Rt(t,e),j_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(uc(i,e))return o[e]=1,i[e];if(s!==Ot&&Rt(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&Rt(c,e))return o[e]=3,r[e];if(n!==Ot&&Rt(n,e))return o[e]=4,n[e];au&&(o[e]=0)}}const u=zo[e];let d,f;if(u)return e==="$attrs"&&mn(t.attrs,"get",""),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Ot&&Rt(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,Rt(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return uc(s,e)?(s[e]=n,!0):i!==Ot&&Rt(i,e)?(i[e]=n,!0):Rt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==Ot&&Rt(t,o)||uc(e,o)||(a=r[0])&&Rt(a,o)||Rt(i,o)||Rt(zo,o)||Rt(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Rt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ff(t){return et(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let au=!0;function q_(t){const e=dm(t),n=t.proxy,i=t.ctx;au=!1,e.beforeCreate&&hf(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:v,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:A,destroyed:M,unmounted:y,render:L,renderTracked:I,renderTriggered:P,errorCaptured:H,serverPrefetch:T,expose:C,inheritAttrs:O,components:U,directives:D,filters:N}=e;if(c&&Y_(c,i,null),o)for(const ee in o){const q=o[ee];ut(q)&&(i[ee]=q.bind(n))}if(s){const ee=s.call(n,n);Ft(ee)&&(t.data=ua(ee))}if(au=!0,r)for(const ee in r){const q=r[ee],xe=ut(q)?q.bind(n,n):ut(q.get)?q.get.bind(n,n):Ri,Me=!ut(q)&&ut(q.set)?q.set.bind(n):Ri,Le=an({get:xe,set:Me});Object.defineProperty(i,ee,{enumerable:!0,configurable:!0,get:()=>Le.value,set:Ge=>Le.value=Ge})}if(a)for(const ee in a)um(a[ee],i,n,ee);if(l){const ee=ut(l)?l.call(n):l;Reflect.ownKeys(ee).forEach(q=>{il(q,ee[q])})}u&&hf(u,t,"c");function Y(ee,q){et(q)?q.forEach(xe=>ee(xe.bind(n))):q&&ee(q.bind(n))}if(Y(N_,d),Y(ho,f),Y(F_,h),Y(k_,v),Y(I_,_),Y(U_,m),Y(V_,H),Y(z_,I),Y(H_,P),Y(wd,A),Y(Sd,y),Y(B_,T),et(C))if(C.length){const ee=t.exposed||(t.exposed={});C.forEach(q=>{Object.defineProperty(ee,q,{get:()=>n[q],set:xe=>n[q]=xe})})}else t.exposed||(t.exposed={});L&&t.render===Ri&&(t.render=L),O!=null&&(t.inheritAttrs=O),U&&(t.components=U),D&&(t.directives=D),T&&am(t)}function Y_(t,e,n=Ri){et(t)&&(t=lu(t));for(const i in t){const s=t[i];let r;Ft(s)?"default"in s?r=Qi(s.from||i,s.default,!0):r=Qi(s.from||i):r=Qi(s),ln(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function hf(t,e,n){Ii(et(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function um(t,e,n,i){let s=i.includes(".")?Em(n,i):()=>n[i];if(en(t)){const r=e[t];ut(r)&&Nn(s,r)}else if(ut(t))Nn(s,t.bind(n));else if(Ft(t))if(et(t))t.forEach(r=>um(r,e,n,i));else{const r=ut(t.handler)?t.handler.bind(n):e[t.handler];ut(r)&&Nn(s,r,t)}}function dm(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>bl(l,c,o,!0)),bl(l,e,o)),Ft(e)&&r.set(e,l),l}function bl(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&bl(t,r,n,!0),s&&s.forEach(o=>bl(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=K_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const K_={data:pf,props:mf,emits:mf,methods:Io,computed:Io,beforeCreate:wn,created:wn,beforeMount:wn,mounted:wn,beforeUpdate:wn,updated:wn,beforeDestroy:wn,beforeUnmount:wn,destroyed:wn,unmounted:wn,activated:wn,deactivated:wn,errorCaptured:wn,serverPrefetch:wn,components:Io,directives:Io,watch:Q_,provide:pf,inject:Z_};function pf(t,e){return e?t?function(){return bn(ut(t)?t.call(this,this):t,ut(e)?e.call(this,this):e)}:e:t}function Z_(t,e){return Io(lu(t),lu(e))}function lu(t){if(et(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function wn(t,e){return t?[...new Set([].concat(t,e))]:e}function Io(t,e){return t?bn(Object.create(null),t,e):e}function mf(t,e){return t?et(t)&&et(e)?[...new Set([...t,...e])]:bn(Object.create(null),ff(t),ff(e??{})):e}function Q_(t,e){if(!t)return e;if(!e)return t;const n=bn(Object.create(null),t);for(const i in e)n[i]=wn(t[i],e[i]);return n}function fm(){return{app:null,config:{isNativeTag:Gv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let J_=0;function e0(t,e){return function(i,s=null){ut(i)||(i=bn({},i)),s!=null&&!Ft(s)&&(s=null);const r=fm(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:J_++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:U0,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&ut(u.install)?(o.add(u),u.install(c,...d)):ut(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||nn(i,s);return h.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),t(h,u,f),l=!0,c._container=u,u.__vue_app__=c,$l(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Ii(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=kr;kr=c;try{return u()}finally{kr=d}}};return c}}let kr=null;function il(t,e){if(vn){let n=vn.provides;const i=vn.parent&&vn.parent.provides;i===n&&(n=vn.provides=Object.create(i)),n[t]=e}}function Qi(t,e,n=!1){const i=vn||qn;if(i||kr){const s=kr?kr._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ut(e)?e.call(i&&i.proxy):e}}const hm={},pm=()=>Object.create(hm),mm=t=>Object.getPrototypeOf(t)===hm;function t0(t,e,n,i=!1){const s={},r=pm();t.propsDefaults=Object.create(null),gm(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Kp(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function n0(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=Ct(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Gl(t.emitsOptions,f))continue;const h=e[f];if(l)if(Rt(r,f))h!==r[f]&&(r[f]=h,c=!0);else{const v=si(f);s[v]=cu(l,a,v,h,t,!1)}else h!==r[f]&&(r[f]=h,c=!0)}}}else{gm(t,e,s,r)&&(c=!0);let u;for(const d in a)(!e||!Rt(e,d)&&((u=cr(d))===d||!Rt(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=cu(l,a,d,void 0,t,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!Rt(e,d))&&(delete r[d],c=!0)}c&&qi(t.attrs,"set","")}function gm(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Fo(l))continue;const c=e[l];let u;s&&Rt(s,u=si(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Gl(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Ct(n),c=a||Ot;for(let u=0;u<r.length;u++){const d=r[u];n[d]=cu(s,l,d,c[d],t,!Rt(c,d))}}return o}function cu(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=Rt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ut(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=ha(s);i=c[n]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===cr(n))&&(i=!0))}return i}const i0=new WeakMap;function vm(t,e,n=!1){const i=n?i0:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!ut(t)){const u=d=>{l=!0;const[f,h]=vm(d,e,!0);bn(o,f),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Ft(t)&&i.set(t,Ur),Ur;if(et(r))for(let u=0;u<r.length;u++){const d=si(r[u]);gf(d)&&(o[d]=Ot)}else if(r)for(const u in r){const d=si(u);if(gf(d)){const f=r[u],h=o[d]=et(f)||ut(f)?{type:f}:bn({},f),v=h.type;let _=!1,m=!0;if(et(v))for(let p=0;p<v.length;++p){const A=v[p],M=ut(A)&&A.name;if(M==="Boolean"){_=!0;break}else M==="String"&&(m=!1)}else _=ut(v)&&v.name==="Boolean";h[0]=_,h[1]=m,(_||Rt(h,"default"))&&a.push(d)}}const c=[o,a];return Ft(t)&&i.set(t,c),c}function gf(t){return t[0]!=="$"&&!Fo(t)}const _m=t=>t[0]==="_"||t==="$stable",Md=t=>et(t)?t.map(Ei):[Ei(t)],s0=(t,e,n)=>{if(e._n)return e;const i=Lo((...s)=>Md(e(...s)),n);return i._c=!1,i},bm=(t,e,n)=>{const i=t._ctx;for(const s in t){if(_m(s))continue;const r=t[s];if(ut(r))e[s]=s0(s,r,i);else if(r!=null){const o=Md(r);e[s]=()=>o}}},xm=(t,e)=>{const n=Md(e);t.slots.default=()=>n},ym=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},r0=(t,e,n)=>{const i=t.slots=pm();if(t.vnode.shapeFlag&32){const s=e._;s?(ym(i,e,n),n&&Dp(i,"_",s,!0)):bm(e,i)}else e&&xm(t,e)},o0=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Ot;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:ym(s,e,n):(r=!e.$stable,bm(e,s)),o=e}else e&&(xm(t,e),o={default:1});if(r)for(const a in s)!_m(a)&&o[a]==null&&delete s[a]},Wn=x0;function a0(t){return l0(t)}function l0(t,e){const n=Bl();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=Ri,insertStaticContent:v}=t,_=(R,g,V,j=null,se=null,X=null,ge=void 0,te=null,ce=!!g.dynamicChildren)=>{if(R===g)return;R&&!yo(R,g)&&(j=B(R),Ge(R,se,X,!0),R=null),g.patchFlag===-2&&(ce=!1,g.dynamicChildren=null);const{type:de,ref:Pe,shapeFlag:S}=g;switch(de){case Wl:m(R,g,V,j);break;case sr:p(R,g,V,j);break;case sl:R==null&&A(g,V,j,ge);break;case Ht:U(R,g,V,j,se,X,ge,te,ce);break;default:S&1?L(R,g,V,j,se,X,ge,te,ce):S&6?D(R,g,V,j,se,X,ge,te,ce):(S&64||S&128)&&de.process(R,g,V,j,se,X,ge,te,ce,me)}Pe!=null&&se&&_l(Pe,R&&R.ref,X,g||R,!g)},m=(R,g,V,j)=>{if(R==null)i(g.el=a(g.children),V,j);else{const se=g.el=R.el;g.children!==R.children&&c(se,g.children)}},p=(R,g,V,j)=>{R==null?i(g.el=l(g.children||""),V,j):g.el=R.el},A=(R,g,V,j)=>{[R.el,R.anchor]=v(R.children,g,V,j,R.el,R.anchor)},M=({el:R,anchor:g},V,j)=>{let se;for(;R&&R!==g;)se=f(R),i(R,V,j),R=se;i(g,V,j)},y=({el:R,anchor:g})=>{let V;for(;R&&R!==g;)V=f(R),s(R),R=V;s(g)},L=(R,g,V,j,se,X,ge,te,ce)=>{g.type==="svg"?ge="svg":g.type==="math"&&(ge="mathml"),R==null?I(g,V,j,se,X,ge,te,ce):T(R,g,se,X,ge,te,ce)},I=(R,g,V,j,se,X,ge,te)=>{let ce,de;const{props:Pe,shapeFlag:S,transition:x,dirs:k}=R;if(ce=R.el=o(R.type,X,Pe&&Pe.is,Pe),S&8?u(ce,R.children):S&16&&H(R.children,ce,null,j,se,dc(R,X),ge,te),k&&Os(R,null,j,"created"),P(ce,R,R.scopeId,ge,j),Pe){for(const le in Pe)le!=="value"&&!Fo(le)&&r(ce,le,null,Pe[le],X,j);"value"in Pe&&r(ce,"value",null,Pe.value,X),(de=Pe.onVnodeBeforeMount)&&_i(de,j,R)}k&&Os(R,null,j,"beforeMount");const K=c0(se,x);K&&x.beforeEnter(ce),i(ce,g,V),((de=Pe&&Pe.onVnodeMounted)||K||k)&&Wn(()=>{de&&_i(de,j,R),K&&x.enter(ce),k&&Os(R,null,j,"mounted")},se)},P=(R,g,V,j,se)=>{if(V&&h(R,V),j)for(let X=0;X<j.length;X++)h(R,j[X]);if(se){let X=se.subTree;if(g===X||Am(X.type)&&(X.ssContent===g||X.ssFallback===g)){const ge=se.vnode;P(R,ge,ge.scopeId,ge.slotScopeIds,se.parent)}}},H=(R,g,V,j,se,X,ge,te,ce=0)=>{for(let de=ce;de<R.length;de++){const Pe=R[de]=te?hs(R[de]):Ei(R[de]);_(null,Pe,g,V,j,se,X,ge,te)}},T=(R,g,V,j,se,X,ge)=>{const te=g.el=R.el;let{patchFlag:ce,dynamicChildren:de,dirs:Pe}=g;ce|=R.patchFlag&16;const S=R.props||Ot,x=g.props||Ot;let k;if(V&&Ns(V,!1),(k=x.onVnodeBeforeUpdate)&&_i(k,V,g,R),Pe&&Os(g,R,V,"beforeUpdate"),V&&Ns(V,!0),(S.innerHTML&&x.innerHTML==null||S.textContent&&x.textContent==null)&&u(te,""),de?C(R.dynamicChildren,de,te,V,j,dc(g,se),X):ge||q(R,g,te,null,V,j,dc(g,se),X,!1),ce>0){if(ce&16)O(te,S,x,V,se);else if(ce&2&&S.class!==x.class&&r(te,"class",null,x.class,se),ce&4&&r(te,"style",S.style,x.style,se),ce&8){const K=g.dynamicProps;for(let le=0;le<K.length;le++){const Z=K[le],Ie=S[Z],ve=x[Z];(ve!==Ie||Z==="value")&&r(te,Z,Ie,ve,se,V)}}ce&1&&R.children!==g.children&&u(te,g.children)}else!ge&&de==null&&O(te,S,x,V,se);((k=x.onVnodeUpdated)||Pe)&&Wn(()=>{k&&_i(k,V,g,R),Pe&&Os(g,R,V,"updated")},j)},C=(R,g,V,j,se,X,ge)=>{for(let te=0;te<g.length;te++){const ce=R[te],de=g[te],Pe=ce.el&&(ce.type===Ht||!yo(ce,de)||ce.shapeFlag&70)?d(ce.el):V;_(ce,de,Pe,null,j,se,X,ge,!0)}},O=(R,g,V,j,se)=>{if(g!==V){if(g!==Ot)for(const X in g)!Fo(X)&&!(X in V)&&r(R,X,g[X],null,se,j);for(const X in V){if(Fo(X))continue;const ge=V[X],te=g[X];ge!==te&&X!=="value"&&r(R,X,te,ge,se,j)}"value"in V&&r(R,"value",g.value,V.value,se)}},U=(R,g,V,j,se,X,ge,te,ce)=>{const de=g.el=R?R.el:a(""),Pe=g.anchor=R?R.anchor:a("");let{patchFlag:S,dynamicChildren:x,slotScopeIds:k}=g;k&&(te=te?te.concat(k):k),R==null?(i(de,V,j),i(Pe,V,j),H(g.children||[],V,Pe,se,X,ge,te,ce)):S>0&&S&64&&x&&R.dynamicChildren?(C(R.dynamicChildren,x,V,se,X,ge,te),(g.key!=null||se&&g===se.subTree)&&wm(R,g,!0)):q(R,g,V,Pe,se,X,ge,te,ce)},D=(R,g,V,j,se,X,ge,te,ce)=>{g.slotScopeIds=te,R==null?g.shapeFlag&512?se.ctx.activate(g,V,j,ge,ce):N(g,V,j,se,X,ge,ce):J(R,g,ce)},N=(R,g,V,j,se,X,ge)=>{const te=R.component=A0(R,j,se);if(lm(R)&&(te.ctx.renderer=me),C0(te,!1,ge),te.asyncDep){if(se&&se.registerDep(te,Y,ge),!R.el){const ce=te.subTree=nn(sr);p(null,ce,g,V)}}else Y(te,R,g,V,se,X,ge)},J=(R,g,V)=>{const j=g.component=R.component;if(_0(R,g,V))if(j.asyncDep&&!j.asyncResolved){ee(j,g,V);return}else j.next=g,j.update();else g.el=R.el,j.vnode=g},Y=(R,g,V,j,se,X,ge)=>{const te=()=>{if(R.isMounted){let{next:S,bu:x,u:k,parent:K,vnode:le}=R;{const Ue=Sm(R);if(Ue){S&&(S.el=le.el,ee(R,S,ge)),Ue.asyncDep.then(()=>{R.isUnmounted||te()});return}}let Z=S,Ie;Ns(R,!1),S?(S.el=le.el,ee(R,S,ge)):S=le,x&&nl(x),(Ie=S.props&&S.props.onVnodeBeforeUpdate)&&_i(Ie,K,S,le),Ns(R,!0);const ve=_f(R),De=R.subTree;R.subTree=ve,_(De,ve,d(De.el),B(De),R,se,X),S.el=ve.el,Z===null&&b0(R,ve.el),k&&Wn(k,se),(Ie=S.props&&S.props.onVnodeUpdated)&&Wn(()=>_i(Ie,K,S,le),se)}else{let S;const{el:x,props:k}=g,{bm:K,m:le,parent:Z,root:Ie,type:ve}=R,De=Ho(g);Ns(R,!1),K&&nl(K),!De&&(S=k&&k.onVnodeBeforeMount)&&_i(S,Z,g),Ns(R,!0);{Ie.ce&&Ie.ce._injectChildStyle(ve);const Ue=R.subTree=_f(R);_(null,Ue,V,j,R,se,X),g.el=Ue.el}if(le&&Wn(le,se),!De&&(S=k&&k.onVnodeMounted)){const Ue=g;Wn(()=>_i(S,Z,Ue),se)}(g.shapeFlag&256||Z&&Ho(Z.vnode)&&Z.vnode.shapeFlag&256)&&R.a&&Wn(R.a,se),R.isMounted=!0,g=V=j=null}};R.scope.on();const ce=R.effect=new Np(te);R.scope.off();const de=R.update=ce.run.bind(ce),Pe=R.job=ce.runIfDirty.bind(ce);Pe.i=R,Pe.id=R.uid,ce.scheduler=()=>xd(Pe),Ns(R,!0),de()},ee=(R,g,V)=>{g.component=R;const j=R.vnode.props;R.vnode=g,R.next=null,n0(R,g.props,j,V),o0(R,g.children,V),Ds(),uf(R),Ls()},q=(R,g,V,j,se,X,ge,te,ce=!1)=>{const de=R&&R.children,Pe=R?R.shapeFlag:0,S=g.children,{patchFlag:x,shapeFlag:k}=g;if(x>0){if(x&128){Me(de,S,V,j,se,X,ge,te,ce);return}else if(x&256){xe(de,S,V,j,se,X,ge,te,ce);return}}k&8?(Pe&16&&ye(de,se,X),S!==de&&u(V,S)):Pe&16?k&16?Me(de,S,V,j,se,X,ge,te,ce):ye(de,se,X,!0):(Pe&8&&u(V,""),k&16&&H(S,V,j,se,X,ge,te,ce))},xe=(R,g,V,j,se,X,ge,te,ce)=>{R=R||Ur,g=g||Ur;const de=R.length,Pe=g.length,S=Math.min(de,Pe);let x;for(x=0;x<S;x++){const k=g[x]=ce?hs(g[x]):Ei(g[x]);_(R[x],k,V,null,se,X,ge,te,ce)}de>Pe?ye(R,se,X,!0,!1,S):H(g,V,j,se,X,ge,te,ce,S)},Me=(R,g,V,j,se,X,ge,te,ce)=>{let de=0;const Pe=g.length;let S=R.length-1,x=Pe-1;for(;de<=S&&de<=x;){const k=R[de],K=g[de]=ce?hs(g[de]):Ei(g[de]);if(yo(k,K))_(k,K,V,null,se,X,ge,te,ce);else break;de++}for(;de<=S&&de<=x;){const k=R[S],K=g[x]=ce?hs(g[x]):Ei(g[x]);if(yo(k,K))_(k,K,V,null,se,X,ge,te,ce);else break;S--,x--}if(de>S){if(de<=x){const k=x+1,K=k<Pe?g[k].el:j;for(;de<=x;)_(null,g[de]=ce?hs(g[de]):Ei(g[de]),V,K,se,X,ge,te,ce),de++}}else if(de>x)for(;de<=S;)Ge(R[de],se,X,!0),de++;else{const k=de,K=de,le=new Map;for(de=K;de<=x;de++){const Be=g[de]=ce?hs(g[de]):Ei(g[de]);Be.key!=null&&le.set(Be.key,de)}let Z,Ie=0;const ve=x-K+1;let De=!1,Ue=0;const _e=new Array(ve);for(de=0;de<ve;de++)_e[de]=0;for(de=k;de<=S;de++){const Be=R[de];if(Ie>=ve){Ge(Be,se,X,!0);continue}let Oe;if(Be.key!=null)Oe=le.get(Be.key);else for(Z=K;Z<=x;Z++)if(_e[Z-K]===0&&yo(Be,g[Z])){Oe=Z;break}Oe===void 0?Ge(Be,se,X,!0):(_e[Oe-K]=de+1,Oe>=Ue?Ue=Oe:De=!0,_(Be,g[Oe],V,null,se,X,ge,te,ce),Ie++)}const Ce=De?u0(_e):Ur;for(Z=Ce.length-1,de=ve-1;de>=0;de--){const Be=K+de,Oe=g[Be],Te=Be+1<Pe?g[Be+1].el:j;_e[de]===0?_(null,Oe,V,Te,se,X,ge,te,ce):De&&(Z<0||de!==Ce[Z]?Le(Oe,V,Te,2):Z--)}}},Le=(R,g,V,j,se=null)=>{const{el:X,type:ge,transition:te,children:ce,shapeFlag:de}=R;if(de&6){Le(R.component.subTree,g,V,j);return}if(de&128){R.suspense.move(g,V,j);return}if(de&64){ge.move(R,g,V,me);return}if(ge===Ht){i(X,g,V);for(let S=0;S<ce.length;S++)Le(ce[S],g,V,j);i(R.anchor,g,V);return}if(ge===sl){M(R,g,V);return}if(j!==2&&de&1&&te)if(j===0)te.beforeEnter(X),i(X,g,V),Wn(()=>te.enter(X),se);else{const{leave:S,delayLeave:x,afterLeave:k}=te,K=()=>i(X,g,V),le=()=>{S(X,()=>{K(),k&&k()})};x?x(X,K,le):le()}else i(X,g,V)},Ge=(R,g,V,j=!1,se=!1)=>{const{type:X,props:ge,ref:te,children:ce,dynamicChildren:de,shapeFlag:Pe,patchFlag:S,dirs:x,cacheIndex:k}=R;if(S===-2&&(se=!1),te!=null&&_l(te,null,V,R,!0),k!=null&&(g.renderCache[k]=void 0),Pe&256){g.ctx.deactivate(R);return}const K=Pe&1&&x,le=!Ho(R);let Z;if(le&&(Z=ge&&ge.onVnodeBeforeUnmount)&&_i(Z,g,R),Pe&6)ie(R.component,V,j);else{if(Pe&128){R.suspense.unmount(V,j);return}K&&Os(R,null,g,"beforeUnmount"),Pe&64?R.type.remove(R,g,V,me,j):de&&!de.hasOnce&&(X!==Ht||S>0&&S&64)?ye(de,g,V,!1,!0):(X===Ht&&S&384||!se&&Pe&16)&&ye(ce,g,V),j&&_t(R)}(le&&(Z=ge&&ge.onVnodeUnmounted)||K)&&Wn(()=>{Z&&_i(Z,g,R),K&&Os(R,null,g,"unmounted")},V)},_t=R=>{const{type:g,el:V,anchor:j,transition:se}=R;if(g===Ht){Ke(V,j);return}if(g===sl){y(R);return}const X=()=>{s(V),se&&!se.persisted&&se.afterLeave&&se.afterLeave()};if(R.shapeFlag&1&&se&&!se.persisted){const{leave:ge,delayLeave:te}=se,ce=()=>ge(V,X);te?te(R.el,X,ce):ce()}else X()},Ke=(R,g)=>{let V;for(;R!==g;)V=f(R),s(R),R=V;s(g)},ie=(R,g,V)=>{const{bum:j,scope:se,job:X,subTree:ge,um:te,m:ce,a:de}=R;vf(ce),vf(de),j&&nl(j),se.stop(),X&&(X.flags|=8,Ge(ge,R,g,V)),te&&Wn(te,g),Wn(()=>{R.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&R.asyncDep&&!R.asyncResolved&&R.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},ye=(R,g,V,j=!1,se=!1,X=0)=>{for(let ge=X;ge<R.length;ge++)Ge(R[ge],g,V,j,se)},B=R=>{if(R.shapeFlag&6)return B(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const g=f(R.anchor||R.el),V=g&&g[D_];return V?f(V):g};let ue=!1;const oe=(R,g,V)=>{R==null?g._vnode&&Ge(g._vnode,null,null,!0):_(g._vnode||null,R,g,null,null,null,V),g._vnode=R,ue||(ue=!0,uf(),im(),ue=!1)},me={p:_,um:Ge,m:Le,r:_t,mt:N,mc:H,pc:q,pbc:C,n:B,o:t};return{render:oe,hydrate:void 0,createApp:e0(oe)}}function dc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ns({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function c0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function wm(t,e,n=!1){const i=t.children,s=e.children;if(et(i)&&et(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=hs(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&wm(o,a)),a.type===Wl&&(a.el=o.el)}}function u0(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Sm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Sm(e)}function vf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const d0=Symbol.for("v-scx"),f0=()=>Qi(d0);function Nn(t,e,n){return Mm(t,e,n)}function Mm(t,e,n=Ot){const{immediate:i,deep:s,flush:r,once:o}=n,a=bn({},n),l=e&&i||!e&&r!=="post";let c;if(Yo){if(r==="sync"){const h=f0();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Ri,h.resume=Ri,h.pause=Ri,h}}const u=vn;a.call=(h,v,_)=>Ii(h,u,v,_);let d=!1;r==="post"?a.scheduler=h=>{Wn(h,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(h,v)=>{v?h():xd(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=A_(t,e,a);return Yo&&(c?c.push(f):l&&f()),f}function h0(t,e,n){const i=this.proxy,s=en(t)?t.includes(".")?Em(i,t):()=>i[t]:t.bind(i,i);let r;ut(e)?r=e:(r=e.handler,n=e);const o=ha(this),a=Mm(s,r.bind(i),n);return o(),a}function Em(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const p0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${si(e)}Modifiers`]||t[`${cr(e)}Modifiers`];function m0(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Ot;let s=n;const r=e.startsWith("update:"),o=r&&p0(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>en(u)?u.trim():u)),o.number&&(s=n.map(pl)));let a,l=i[a=rc(e)]||i[a=rc(si(e))];!l&&r&&(l=i[a=rc(cr(e))]),l&&Ii(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ii(c,t,6,s)}}function Tm(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!ut(t)){const l=c=>{const u=Tm(c,e,!0);u&&(a=!0,bn(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Ft(t)&&i.set(t,null),null):(et(r)?r.forEach(l=>o[l]=null):bn(o,r),Ft(t)&&i.set(t,o),o)}function Gl(t,e){return!t||!Nl(e)?!1:(e=e.slice(2).replace(/Once$/,""),Rt(t,e[0].toLowerCase()+e.slice(1))||Rt(t,cr(e))||Rt(t,e))}function _f(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:v,inheritAttrs:_}=t,m=vl(t);let p,A;try{if(n.shapeFlag&4){const y=s||i,L=y;p=Ei(c.call(L,y,u,d,h,f,v)),A=a}else{const y=e;p=Ei(y.length>1?y(d,{attrs:a,slots:o,emit:l}):y(d,null)),A=e.props?a:g0(a)}}catch(y){Vo.length=0,zl(y,t,1),p=nn(sr)}let M=p;if(A&&_!==!1){const y=Object.keys(A),{shapeFlag:L}=M;y.length&&L&7&&(r&&y.some(cd)&&(A=v0(A,r)),M=eo(M,A,!1,!0))}return n.dirs&&(M=eo(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&yd(M,n.transition),p=M,vl(m),p}const g0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Nl(n))&&((e||(e={}))[n]=t[n]);return e},v0=(t,e)=>{const n={};for(const i in t)(!cd(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function _0(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?bf(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==i[f]&&!Gl(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?bf(i,o,c):!0:!!o;return!1}function bf(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Gl(n,r))return!0}return!1}function b0({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Am=t=>t.__isSuspense;function x0(t,e){e&&e.pendingBranch?et(t)?e.effects.push(...t):e.effects.push(t):P_(t)}const Ht=Symbol.for("v-fgt"),Wl=Symbol.for("v-txt"),sr=Symbol.for("v-cmt"),sl=Symbol.for("v-stc"),Vo=[];let Yn=null;function ze(t=!1){Vo.push(Yn=t?null:[])}function y0(){Vo.pop(),Yn=Vo[Vo.length-1]||null}let qo=1;function xf(t,e=!1){qo+=t,t<0&&Yn&&e&&(Yn.hasOnce=!0)}function Cm(t){return t.dynamicChildren=qo>0?Yn||Ur:null,y0(),qo>0&&Yn&&Yn.push(t),t}function $e(t,e,n,i,s,r){return Cm(b(t,e,n,i,s,r,!0))}function Uo(t,e,n,i,s){return Cm(nn(t,e,n,i,s,!0))}function xl(t){return t?t.__v_isVNode===!0:!1}function yo(t,e){return t.type===e.type&&t.key===e.key}const Rm=({key:t})=>t??null,rl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?en(t)||ln(t)||ut(t)?{i:qn,r:t,k:e,f:!!n}:t:null);function b(t,e=null,n=null,i=0,s=null,r=t===Ht?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Rm(e),ref:e&&rl(e),scopeId:rm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:qn};return a?(Ed(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=en(n)?8:16),qo>0&&!o&&Yn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Yn.push(l),l}const nn=w0;function w0(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===$_)&&(t=sr),xl(t)){const a=eo(t,e,!0);return n&&Ed(a,n),qo>0&&!r&&Yn&&(a.shapeFlag&6?Yn[Yn.indexOf(t)]=a:Yn.push(a)),a.patchFlag=-2,a}if(I0(t)&&(t=t.__vccOpts),e){e=S0(e);let{class:a,style:l}=e;a&&!en(a)&&(e.class=Je(a)),Ft(l)&&(bd(l)&&!et(l)&&(l=bn({},l)),e.style=jn(l))}const o=en(t)?1:Am(t)?128:L_(t)?64:Ft(t)?4:ut(t)?2:0;return b(t,e,n,i,s,o,r,!0)}function S0(t){return t?bd(t)||mm(t)?bn({},t):t:null}function eo(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?M0(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Rm(c),ref:e&&e.ref?n&&r?et(r)?r.concat(rl(e)):[r,rl(e)]:rl(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ht?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&eo(t.ssContent),ssFallback:t.ssFallback&&eo(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&yd(u,l.clone(u)),u}function Oo(t=" ",e=0){return nn(Wl,null,t,e)}function Pm(t,e){const n=nn(sl,null,t);return n.staticCount=e,n}function Dt(t="",e=!1){return e?(ze(),Uo(sr,null,t)):nn(sr,null,t)}function Ei(t){return t==null||typeof t=="boolean"?nn(sr):et(t)?nn(Ht,null,t.slice()):xl(t)?hs(t):nn(Wl,null,String(t))}function hs(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:eo(t)}function Ed(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(et(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Ed(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!mm(e)?e._ctx=qn:s===3&&qn&&(qn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ut(e)?(e={default:e,_ctx:qn},n=32):(e=String(e),i&64?(n=16,e=[Oo(e)]):n=8);t.children=e,t.shapeFlag|=n}function M0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Je([e.class,i.class]));else if(s==="style")e.style=jn([e.style,i.style]);else if(Nl(s)){const r=e[s],o=i[s];o&&r!==o&&!(et(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function _i(t,e,n,i=null){Ii(t,e,7,[n,i])}const E0=fm();let T0=0;function A0(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||E0,r={uid:T0++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Op(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vm(i,s),emitsOptions:Tm(i,s),emit:null,emitted:null,propsDefaults:Ot,inheritAttrs:i.inheritAttrs,ctx:Ot,data:Ot,props:Ot,attrs:Ot,slots:Ot,refs:Ot,setupState:Ot,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=m0.bind(null,r),t.ce&&t.ce(r),r}let vn=null,yl,uu;{const t=Bl(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};yl=e("__VUE_INSTANCE_SETTERS__",n=>vn=n),uu=e("__VUE_SSR_SETTERS__",n=>Yo=n)}const ha=t=>{const e=vn;return yl(t),t.scope.on(),()=>{t.scope.off(),yl(e)}},yf=()=>{vn&&vn.scope.off(),yl(null)};function Dm(t){return t.vnode.shapeFlag&4}let Yo=!1;function C0(t,e=!1,n=!1){e&&uu(e);const{props:i,children:s}=t.vnode,r=Dm(t);t0(t,i,r,e),r0(t,s,n);const o=r?R0(t,e):void 0;return e&&uu(!1),o}function R0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,j_);const{setup:i}=n;if(i){Ds();const s=t.setupContext=i.length>1?D0(t):null,r=ha(t),o=da(i,t,0,[t.props,s]),a=Cp(o);if(Ls(),r(),(a||t.sp)&&!Ho(t)&&am(t),a){if(o.then(yf,yf),e)return o.then(l=>{wf(t,l)}).catch(l=>{zl(l,t,0)});t.asyncDep=o}else wf(t,o)}else Lm(t)}function wf(t,e,n){ut(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ft(e)&&(t.setupState=em(e)),Lm(t)}function Lm(t,e,n){const i=t.type;t.render||(t.render=i.render||Ri);{const s=ha(t);Ds();try{q_(t)}finally{Ls(),s()}}}const P0={get(t,e){return mn(t,"get",""),t[e]}};function D0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,P0),slots:t.slots,emit:t.emit,expose:e}}function $l(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(em(Qp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in zo)return zo[n](t)},has(e,n){return n in e||n in zo}})):t.proxy}function L0(t,e=!0){return ut(t)?t.displayName||t.name:t.name||e&&t.__name}function I0(t){return ut(t)&&"__vccOpts"in t}const an=(t,e)=>E_(t,e,Yo);function Im(t,e,n){const i=arguments.length;return i===2?Ft(e)&&!et(e)?xl(e)?nn(t,null,[e]):nn(t,e):nn(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&xl(n)&&(n=[n]),nn(t,e,n))}const U0="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let du;const Sf=typeof window<"u"&&window.trustedTypes;if(Sf)try{du=Sf.createPolicy("vue",{createHTML:t=>t})}catch{}const Um=du?t=>du.createHTML(t):t=>t,O0="http://www.w3.org/2000/svg",N0="http://www.w3.org/1998/Math/MathML",Xi=typeof document<"u"?document:null,Mf=Xi&&Xi.createElement("template"),F0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Xi.createElementNS(O0,t):e==="mathml"?Xi.createElementNS(N0,t):n?Xi.createElement(t,{is:n}):Xi.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Xi.createTextNode(t),createComment:t=>Xi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Xi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Mf.innerHTML=Um(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Mf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},k0=Symbol("_vtc");function B0(t,e,n){const i=t[k0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const wl=Symbol("_vod"),Om=Symbol("_vsh"),$L={beforeMount(t,{value:e},{transition:n}){t[wl]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):wo(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),wo(t,!0),i.enter(t)):i.leave(t,()=>{wo(t,!1)}):wo(t,e))},beforeUnmount(t,{value:e}){wo(t,e)}};function wo(t,e){t.style.display=e?t[wl]:"none",t[Om]=!e}const H0=Symbol(""),z0=/(^|;)\s*display\s*:/;function V0(t,e,n){const i=t.style,s=en(n);let r=!1;if(n&&!s){if(e)if(en(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ol(i,a,"")}else for(const o in e)n[o]==null&&ol(i,o,"");for(const o in n)o==="display"&&(r=!0),ol(i,o,n[o])}else if(s){if(e!==n){const o=i[H0];o&&(n+=";"+o),i.cssText=n,r=z0.test(n)}}else e&&t.removeAttribute("style");wl in t&&(t[wl]=r?i.display:"",t[Om]&&(i.display="none"))}const Ef=/\s*!important$/;function ol(t,e,n){if(et(n))n.forEach(i=>ol(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=G0(t,e);Ef.test(n)?t.setProperty(cr(i),n.replace(Ef,""),"important"):t[i]=n}}const Tf=["Webkit","Moz","ms"],fc={};function G0(t,e){const n=fc[e];if(n)return n;let i=si(e);if(i!=="filter"&&i in t)return fc[e]=i;i=kl(i);for(let s=0;s<Tf.length;s++){const r=Tf[s]+i;if(r in t)return fc[e]=r}return e}const Af="http://www.w3.org/1999/xlink";function Cf(t,e,n,i,s,r=Jv(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Af,e.slice(6,e.length)):t.setAttributeNS(Af,e,n):n==null||r&&!Lp(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Li(n)?String(n):n)}function Rf(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Um(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Lp(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function gs(t,e,n,i){t.addEventListener(e,n,i)}function W0(t,e,n,i){t.removeEventListener(e,n,i)}const Pf=Symbol("_vei");function $0(t,e,n,i,s=null){const r=t[Pf]||(t[Pf]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=X0(e);if(i){const c=r[e]=Y0(i,s);gs(t,a,c,l)}else o&&(W0(t,a,o,l),r[e]=void 0)}}const Df=/(?:Once|Passive|Capture)$/;function X0(t){let e;if(Df.test(t)){e={};let i;for(;i=t.match(Df);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):cr(t.slice(2)),e]}let hc=0;const j0=Promise.resolve(),q0=()=>hc||(j0.then(()=>hc=0),hc=Date.now());function Y0(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Ii(K0(i,n.value),e,5,[i])};return n.value=t,n.attached=q0(),n}function K0(t,e){if(et(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Lf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Z0=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?B0(t,i,o):e==="style"?V0(t,n,i):Nl(e)?cd(e)||$0(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Q0(t,e,i,o))?(Rf(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Cf(t,e,i,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!en(i))?Rf(t,si(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Cf(t,e,i,o))};function Q0(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Lf(e)&&ut(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Lf(e)&&en(n)?!1:e in t}const to=t=>{const e=t.props["onUpdate:modelValue"]||!1;return et(e)?n=>nl(e,n):e};function J0(t){t.target.composing=!0}function If(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ji=Symbol("_assign"),Jt={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[Ji]=to(s);const r=i||s.props&&s.props.type==="number";gs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=pl(a)),t[Ji](a)}),n&&gs(t,"change",()=>{t.value=t.value.trim()}),e||(gs(t,"compositionstart",J0),gs(t,"compositionend",If),gs(t,"change",If))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[Ji]=to(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?pl(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===l)||(t.value=l))}},XL={deep:!0,created(t,e,n){t[Ji]=to(n),gs(t,"change",()=>{const i=t._modelValue,s=Ko(t),r=t.checked,o=t[Ji];if(et(i)){const a=fd(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(fo(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Nm(t,r))})},mounted:Uf,beforeUpdate(t,e,n){t[Ji]=to(n),Uf(t,e,n)}};function Uf(t,{value:e,oldValue:n},i){t._modelValue=e;let s;if(et(e))s=fd(e,i.props.value)>-1;else if(fo(e))s=e.has(i.props.value);else{if(e===n)return;s=ca(e,Nm(t,!0))}t.checked!==s&&(t.checked=s)}const eb={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=fo(e);gs(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?pl(Ko(o)):Ko(o));t[Ji](t.multiple?s?new Set(r):r:r[0]),t._assigning=!0,fa(()=>{t._assigning=!1})}),t[Ji]=to(i)},mounted(t,{value:e}){Of(t,e)},beforeUpdate(t,e,n){t[Ji]=to(n)},updated(t,{value:e}){t._assigning||Of(t,e)}};function Of(t,e){const n=t.multiple,i=et(e);if(!(n&&!i&&!fo(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],a=Ko(o);if(n)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=fd(e,a)>-1}else o.selected=e.has(a);else if(ca(Ko(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ko(t){return"_value"in t?t._value:t.value}function Nm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const tb=["ctrl","shift","alt","meta"],nb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>tb.some(n=>t[`${n}Key`]&&!e.includes(n))},So=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=nb[e[o]];if(a&&a(s,e))return}return t(s,...r)})},ib=bn({patchProp:Z0},F0);let Nf;function sb(){return Nf||(Nf=a0(ib))}const rb=(...t)=>{const e=sb().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=ab(i);if(!s)return;const r=e._component;!ut(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,ob(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function ob(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ab(t){return en(t)?document.querySelector(t):t}/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const lb=Symbol();var Ff;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ff||(Ff={}));function cb(){const t=t_(!0),e=t.run(()=>st({}));let n=[],i=[];const s=Qp({install(r){s._a=r,r.provide(lb,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return this._a?n.push(r):i.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Dr=typeof document<"u";function Fm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ub(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Fm(t.default)}const At=Object.assign;function pc(t,e){const n={};for(const i in e){const s=e[i];n[i]=vi(s)?s.map(t):t(s)}return n}const Go=()=>{},vi=Array.isArray,km=/#/g,db=/&/g,fb=/\//g,hb=/=/g,pb=/\?/g,Bm=/\+/g,mb=/%5B/g,gb=/%5D/g,Hm=/%5E/g,vb=/%60/g,zm=/%7B/g,_b=/%7C/g,Vm=/%7D/g,bb=/%20/g;function Td(t){return encodeURI(""+t).replace(_b,"|").replace(mb,"[").replace(gb,"]")}function xb(t){return Td(t).replace(zm,"{").replace(Vm,"}").replace(Hm,"^")}function fu(t){return Td(t).replace(Bm,"%2B").replace(bb,"+").replace(km,"%23").replace(db,"%26").replace(vb,"`").replace(zm,"{").replace(Vm,"}").replace(Hm,"^")}function yb(t){return fu(t).replace(hb,"%3D")}function wb(t){return Td(t).replace(km,"%23").replace(pb,"%3F")}function Sb(t){return t==null?"":wb(t).replace(fb,"%2F")}function Zo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Mb=/\/$/,Eb=t=>t.replace(Mb,"");function mc(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Rb(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:Zo(o)}}function Tb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function kf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Ab(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&no(e.matched[i],n.matched[s])&&Gm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function no(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Gm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Cb(t[n],e[n]))return!1;return!0}function Cb(t,e){return vi(t)?Bf(t,e):vi(e)?Bf(e,t):t===e}function Bf(t,e){return vi(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function Rb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const ss={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Qo;(function(t){t.pop="pop",t.push="push"})(Qo||(Qo={}));var Wo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Wo||(Wo={}));function Pb(t){if(!t)if(Dr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Eb(t)}const Db=/^[^#]+#/;function Lb(t,e){return t.replace(Db,"#")+e}function Ib(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Xl=()=>({left:window.scrollX,top:window.scrollY});function Ub(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Ib(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Hf(t,e){return(history.state?history.state.position-e:-1)+t}const hu=new Map;function Ob(t,e){hu.set(t,e)}function Nb(t){const e=hu.get(t);return hu.delete(t),e}let Fb=()=>location.protocol+"//"+location.host;function Wm(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),kf(l,"")}return kf(n,t)+i+s}function kb(t,e,n,i){let s=[],r=[],o=null;const a=({state:f})=>{const h=Wm(t,location),v=n.value,_=e.value;let m=0;if(f){if(n.value=h,e.value=f,o&&o===v){o=null;return}m=_?f.position-_.position:0}else i(h);s.forEach(p=>{p(n.value,v,{delta:m,type:Qo.pop,direction:m?m>0?Wo.forward:Wo.back:Wo.unknown})})};function l(){o=n.value}function c(f){s.push(f);const h=()=>{const v=s.indexOf(f);v>-1&&s.splice(v,1)};return r.push(h),h}function u(){const{history:f}=window;f.state&&f.replaceState(At({},f.state,{scroll:Xl()}),"")}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function zf(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Xl():null}}function Bb(t){const{history:e,location:n}=window,i={value:Wm(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:Fb()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(h){console.error(h),n[u?"replace":"assign"](f)}}function o(l,c){const u=At({},e.state,zf(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=At({},s.value,e.state,{forward:l,scroll:Xl()});r(u.current,u,!0);const d=At({},zf(i.value,l,null),{position:u.position+1},c);r(l,d,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Hb(t){t=Pb(t);const e=Bb(t),n=kb(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=At({location:"",base:t,go:i,createHref:Lb.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function zb(t){return typeof t=="string"||t&&typeof t=="object"}function $m(t){return typeof t=="string"||typeof t=="symbol"}const Xm=Symbol("");var Vf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Vf||(Vf={}));function io(t,e){return At(new Error,{type:t,[Xm]:!0},e)}function ki(t,e){return t instanceof Error&&Xm in t&&(e==null||!!(t.type&e))}const Gf="[^/]+?",Vb={sensitive:!1,strict:!1,start:!0,end:!0},Gb=/[.+*?^${}()[\]/\\]/g;function Wb(t,e){const n=At({},Vb,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let d=0;d<c.length;d++){const f=c[d];let h=40+(n.sensitive?.25:0);if(f.type===0)d||(s+="/"),s+=f.value.replace(Gb,"\\$&"),h+=40;else if(f.type===1){const{value:v,repeatable:_,optional:m,regexp:p}=f;r.push({name:v,repeatable:_,optional:m});const A=p||Gf;if(A!==Gf){h+=10;try{new RegExp(`(${A})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${v}" (${A}): `+y.message)}}let M=_?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;d||(M=m&&c.length<2?`(?:/${M})`:"/"+M),m&&(M+="?"),s+=M,h+=20,m&&(h+=-8),_&&(h+=-20),A===".*"&&(h+=-50)}u.push(h)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",v=r[f-1];d[v.name]=h&&v.repeatable?h.split("/"):h}return d}function l(c){let u="",d=!1;for(const f of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===0)u+=h.value;else if(h.type===1){const{value:v,repeatable:_,optional:m}=h,p=v in c?c[v]:"";if(vi(p)&&!_)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const A=vi(p)?p.join("/"):p;if(!A)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${v}"`);u+=A}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function $b(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function jm(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=$b(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(Wf(i))return 1;if(Wf(s))return-1}return s.length-i.length}function Wf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Xb={type:0,value:""},jb=/[a-zA-Z0-9_]/;function qb(t){if(!t)return[[]];if(t==="/")return[[Xb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):f();break;case 4:f(),n=i;break;case 1:l==="("?n=2:jb.test(l)?f():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),s}function Yb(t,e,n){const i=Wb(qb(t.path),n),s=At(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Kb(t,e){const n=[],i=new Map;e=qf({strict:!1,end:!0,sensitive:!1},e);function s(d){return i.get(d)}function r(d,f,h){const v=!h,_=Xf(d);_.aliasOf=h&&h.record;const m=qf(e,d),p=[_];if("alias"in d){const y=typeof d.alias=="string"?[d.alias]:d.alias;for(const L of y)p.push(Xf(At({},_,{components:h?h.record.components:_.components,path:L,aliasOf:h?h.record:_})))}let A,M;for(const y of p){const{path:L}=y;if(f&&L[0]!=="/"){const I=f.record.path,P=I[I.length-1]==="/"?"":"/";y.path=f.record.path+(L&&P+L)}if(A=Yb(y,f,m),h?h.alias.push(A):(M=M||A,M!==A&&M.alias.push(A),v&&d.name&&!jf(A)&&o(d.name)),qm(A)&&l(A),_.children){const I=_.children;for(let P=0;P<I.length;P++)r(I[P],A,h&&h.children[P])}h=h||A}return M?()=>{o(M)}:Go}function o(d){if($m(d)){const f=i.get(d);f&&(i.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const f=Jb(d,n);n.splice(f,0,d),d.record.name&&!jf(d)&&i.set(d.record.name,d)}function c(d,f){let h,v={},_,m;if("name"in d&&d.name){if(h=i.get(d.name),!h)throw io(1,{location:d});m=h.record.name,v=At($f(f.params,h.keys.filter(M=>!M.optional).concat(h.parent?h.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),d.params&&$f(d.params,h.keys.map(M=>M.name))),_=h.stringify(v)}else if(d.path!=null)_=d.path,h=n.find(M=>M.re.test(_)),h&&(v=h.parse(_),m=h.record.name);else{if(h=f.name?i.get(f.name):n.find(M=>M.re.test(f.path)),!h)throw io(1,{location:d,currentLocation:f});m=h.record.name,v=At({},f.params,d.params),_=h.stringify(v)}const p=[];let A=h;for(;A;)p.unshift(A.record),A=A.parent;return{name:m,path:_,params:v,matched:p,meta:Qb(p)}}t.forEach(d=>r(d));function u(){n.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function $f(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Xf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Zb(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Zb(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function jf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Qb(t){return t.reduce((e,n)=>At(e,n.meta),{})}function qf(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function Jb(t,e){let n=0,i=e.length;for(;n!==i;){const r=n+i>>1;jm(t,e[r])<0?i=r:n=r+1}const s=ex(t);return s&&(i=e.lastIndexOf(s,i-1)),i}function ex(t){let e=t;for(;e=e.parent;)if(qm(e)&&jm(t,e)===0)return e}function qm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function tx(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Bm," "),o=r.indexOf("="),a=Zo(o<0?r:r.slice(0,o)),l=o<0?null:Zo(r.slice(o+1));if(a in e){let c=e[a];vi(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Yf(t){let e="";for(let n in t){const i=t[n];if(n=yb(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(vi(i)?i.map(r=>r&&fu(r)):[i&&fu(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function nx(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=vi(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const ix=Symbol(""),Kf=Symbol(""),Ad=Symbol(""),Ym=Symbol(""),pu=Symbol("");function Mo(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ps(t,e,n,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(io(4,{from:n,to:e})):f instanceof Error?l(f):zb(f)?l(io(2,{from:e,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=r(()=>t.call(i&&i.instances[s],e,n,c));let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(f=>l(f))})}function gc(t,e,n,i,s=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Fm(l)){const u=(l.__vccOpts||l)[e];u&&r.push(ps(u,n,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=ub(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const h=(d.__vccOpts||d)[e];return h&&ps(h,n,i,o,a,s)()}))}}return r}function Zf(t){const e=Qi(Ad),n=Qi(Ym),i=an(()=>{const l=Ts(t.to);return e.resolve(l)}),s=an(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(no.bind(null,u));if(f>-1)return f;const h=Qf(l[c-2]);return c>1&&Qf(u)===h&&d[d.length-1].path!==h?d.findIndex(no.bind(null,l[c-2])):f}),r=an(()=>s.value>-1&&lx(n.params,i.value.params)),o=an(()=>s.value>-1&&s.value===n.matched.length-1&&Gm(n.params,i.value.params));function a(l={}){if(ax(l)){const c=e[Ts(t.replace)?"replace":"push"](Ts(t.to)).catch(Go);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:an(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function sx(t){return t.length===1?t[0]:t}const rx=om({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Zf,setup(t,{slots:e}){const n=ua(Zf(t)),{options:i}=Qi(Ad),s=an(()=>({[Jf(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Jf(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&sx(e.default(n));return t.custom?r:Im("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),ox=rx;function ax(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function lx(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!vi(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Qf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Jf=(t,e,n)=>t??e??n,cx=om({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Qi(pu),s=an(()=>t.route||i.value),r=Qi(Kf,0),o=an(()=>{let c=Ts(r);const{matched:u}=s.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=an(()=>s.value.matched[o.value]);il(Kf,an(()=>o.value+1)),il(ix,a),il(pu,s);const l=st();return Nn(()=>[l.value,a.value,t.name],([c,u,d],[f,h,v])=>{u&&(u.instances[d]=c,h&&h!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!no(u,h)||!f)&&(u.enterCallbacks[d]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,d=a.value,f=d&&d.components[u];if(!f)return eh(n.default,{Component:f,route:c});const h=d.props[u],v=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=Im(f,At({},v,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return eh(n.default,{Component:m,route:c})||m}}});function eh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Km=cx;function ux(t){const e=Kb(t.routes,t),n=t.parseQuery||tx,i=t.stringifyQuery||Yf,s=t.history,r=Mo(),o=Mo(),a=Mo(),l=y_(ss);let c=ss;Dr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=pc.bind(null,B=>""+B),d=pc.bind(null,Sb),f=pc.bind(null,Zo);function h(B,ue){let oe,me;return $m(B)?(oe=e.getRecordMatcher(B),me=ue):me=B,e.addRoute(me,oe)}function v(B){const ue=e.getRecordMatcher(B);ue&&e.removeRoute(ue)}function _(){return e.getRoutes().map(B=>B.record)}function m(B){return!!e.getRecordMatcher(B)}function p(B,ue){if(ue=At({},ue||l.value),typeof B=="string"){const V=mc(n,B,ue.path),j=e.resolve({path:V.path},ue),se=s.createHref(V.fullPath);return At(V,j,{params:f(j.params),hash:Zo(V.hash),redirectedFrom:void 0,href:se})}let oe;if(B.path!=null)oe=At({},B,{path:mc(n,B.path,ue.path).path});else{const V=At({},B.params);for(const j in V)V[j]==null&&delete V[j];oe=At({},B,{params:d(V)}),ue.params=d(ue.params)}const me=e.resolve(oe,ue),Ze=B.hash||"";me.params=u(f(me.params));const R=Tb(i,At({},B,{hash:xb(Ze),path:me.path})),g=s.createHref(R);return At({fullPath:R,hash:Ze,query:i===Yf?nx(B.query):B.query||{}},me,{redirectedFrom:void 0,href:g})}function A(B){return typeof B=="string"?mc(n,B,l.value.path):At({},B)}function M(B,ue){if(c!==B)return io(8,{from:ue,to:B})}function y(B){return P(B)}function L(B){return y(At(A(B),{replace:!0}))}function I(B){const ue=B.matched[B.matched.length-1];if(ue&&ue.redirect){const{redirect:oe}=ue;let me=typeof oe=="function"?oe(B):oe;return typeof me=="string"&&(me=me.includes("?")||me.includes("#")?me=A(me):{path:me},me.params={}),At({query:B.query,hash:B.hash,params:me.path!=null?{}:B.params},me)}}function P(B,ue){const oe=c=p(B),me=l.value,Ze=B.state,R=B.force,g=B.replace===!0,V=I(oe);if(V)return P(At(A(V),{state:typeof V=="object"?At({},Ze,V.state):Ze,force:R,replace:g}),ue||oe);const j=oe;j.redirectedFrom=ue;let se;return!R&&Ab(i,me,oe)&&(se=io(16,{to:j,from:me}),Le(me,me,!0,!1)),(se?Promise.resolve(se):C(j,me)).catch(X=>ki(X)?ki(X,2)?X:Me(X):q(X,j,me)).then(X=>{if(X){if(ki(X,2))return P(At({replace:g},A(X.to),{state:typeof X.to=="object"?At({},Ze,X.to.state):Ze,force:R}),ue||j)}else X=U(j,me,!0,g,Ze);return O(j,me,X),X})}function H(B,ue){const oe=M(B,ue);return oe?Promise.reject(oe):Promise.resolve()}function T(B){const ue=Ke.values().next().value;return ue&&typeof ue.runWithContext=="function"?ue.runWithContext(B):B()}function C(B,ue){let oe;const[me,Ze,R]=dx(B,ue);oe=gc(me.reverse(),"beforeRouteLeave",B,ue);for(const V of me)V.leaveGuards.forEach(j=>{oe.push(ps(j,B,ue))});const g=H.bind(null,B,ue);return oe.push(g),ye(oe).then(()=>{oe=[];for(const V of r.list())oe.push(ps(V,B,ue));return oe.push(g),ye(oe)}).then(()=>{oe=gc(Ze,"beforeRouteUpdate",B,ue);for(const V of Ze)V.updateGuards.forEach(j=>{oe.push(ps(j,B,ue))});return oe.push(g),ye(oe)}).then(()=>{oe=[];for(const V of R)if(V.beforeEnter)if(vi(V.beforeEnter))for(const j of V.beforeEnter)oe.push(ps(j,B,ue));else oe.push(ps(V.beforeEnter,B,ue));return oe.push(g),ye(oe)}).then(()=>(B.matched.forEach(V=>V.enterCallbacks={}),oe=gc(R,"beforeRouteEnter",B,ue,T),oe.push(g),ye(oe))).then(()=>{oe=[];for(const V of o.list())oe.push(ps(V,B,ue));return oe.push(g),ye(oe)}).catch(V=>ki(V,8)?V:Promise.reject(V))}function O(B,ue,oe){a.list().forEach(me=>T(()=>me(B,ue,oe)))}function U(B,ue,oe,me,Ze){const R=M(B,ue);if(R)return R;const g=ue===ss,V=Dr?history.state:{};oe&&(me||g?s.replace(B.fullPath,At({scroll:g&&V&&V.scroll},Ze)):s.push(B.fullPath,Ze)),l.value=B,Le(B,ue,oe,g),Me()}let D;function N(){D||(D=s.listen((B,ue,oe)=>{if(!ie.listening)return;const me=p(B),Ze=I(me);if(Ze){P(At(Ze,{replace:!0,force:!0}),me).catch(Go);return}c=me;const R=l.value;Dr&&Ob(Hf(R.fullPath,oe.delta),Xl()),C(me,R).catch(g=>ki(g,12)?g:ki(g,2)?(P(At(A(g.to),{force:!0}),me).then(V=>{ki(V,20)&&!oe.delta&&oe.type===Qo.pop&&s.go(-1,!1)}).catch(Go),Promise.reject()):(oe.delta&&s.go(-oe.delta,!1),q(g,me,R))).then(g=>{g=g||U(me,R,!1),g&&(oe.delta&&!ki(g,8)?s.go(-oe.delta,!1):oe.type===Qo.pop&&ki(g,20)&&s.go(-1,!1)),O(me,R,g)}).catch(Go)}))}let J=Mo(),Y=Mo(),ee;function q(B,ue,oe){Me(B);const me=Y.list();return me.length?me.forEach(Ze=>Ze(B,ue,oe)):console.error(B),Promise.reject(B)}function xe(){return ee&&l.value!==ss?Promise.resolve():new Promise((B,ue)=>{J.add([B,ue])})}function Me(B){return ee||(ee=!B,N(),J.list().forEach(([ue,oe])=>B?oe(B):ue()),J.reset()),B}function Le(B,ue,oe,me){const{scrollBehavior:Ze}=t;if(!Dr||!Ze)return Promise.resolve();const R=!oe&&Nb(Hf(B.fullPath,0))||(me||!oe)&&history.state&&history.state.scroll||null;return fa().then(()=>Ze(B,ue,R)).then(g=>g&&Ub(g)).catch(g=>q(g,B,ue))}const Ge=B=>s.go(B);let _t;const Ke=new Set,ie={currentRoute:l,listening:!0,addRoute:h,removeRoute:v,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:p,options:t,push:y,replace:L,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Y.add,isReady:xe,install(B){const ue=this;B.component("RouterLink",ox),B.component("RouterView",Km),B.config.globalProperties.$router=ue,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>Ts(l)}),Dr&&!_t&&l.value===ss&&(_t=!0,y(s.location).catch(Ze=>{}));const oe={};for(const Ze in ss)Object.defineProperty(oe,Ze,{get:()=>l.value[Ze],enumerable:!0});B.provide(Ad,ue),B.provide(Ym,Kp(oe)),B.provide(pu,l);const me=B.unmount;Ke.add(B),B.unmount=function(){Ke.delete(B),Ke.size<1&&(c=ss,D&&D(),D=null,l.value=ss,_t=!1,ee=!1),me()}}};function ye(B){return B.reduce((ue,oe)=>ue.then(()=>T(oe)),Promise.resolve())}return ie}function dx(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>no(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>no(c,l))||s.push(l))}return[n,i,s]}const pa=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},fx={id:"app"},hx={class:"app-header"},px={class:"header-content"},mx={class:"header-actions max-md:text-[11px]"},gx={class:"main-content"},vx={__name:"App",setup(t){const e=st(!1),n=st(!1);function i(){n.value=!n.value}return ho(()=>{localStorage.getItem("darkMode")==="true"&&(e.value=!0,document.body.classList.add("dark-mode"))}),(s,r)=>{const o=W_("RouterLink");return ze(),$e("div",fx,[b("header",hx,[b("div",px,[r[5]||(r[5]=b("div",{class:"logo-section max-md:hidden"},[b("h1",{class:"app-title"},"Miyuki Beads Designer")],-1)),b("div",mx,[nn(o,{to:"/"},{default:Lo(()=>r[0]||(r[0]=[Oo("Flat Grid")])),_:1}),nn(o,{to:"/weaving-grid"},{default:Lo(()=>r[1]||(r[1]=[Oo("Weaving Grid")])),_:1}),nn(o,{to:"/beadwork-pattern"},{default:Lo(()=>r[2]||(r[2]=[Oo("Beadwork Pattern")])),_:1}),nn(o,{to:"/peyote-grid"},{default:Lo(()=>r[3]||(r[3]=[Oo("Peyote Grid")])),_:1})]),b("button",{class:Je(["mobile-toggle-btn md:hidden",{active:n.value}]),onClick:i},r[4]||(r[4]=[b("span",{class:"hamburger-line"},null,-1),b("span",{class:"hamburger-line"},null,-1),b("span",{class:"hamburger-line"},null,-1)]),2)])]),b("main",gx,[nn(Ts(Km),{"is-mobile-header-open":n.value},null,8,["is-mobile-header-open"])])])}}},_x=pa(vx,[["__scopeId","data-v-f02a28cd"]]),bx="modulepreload",xx=function(t){return"/miyuki-beads-designer/"+t},th={},Eo=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){let o=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=o(n.map(c=>{if(c=xx(c),c in th)return;th[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":bx,u||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((h,v)=>{f.addEventListener("load",h),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};/*!
* sweetalert2 v11.22.3
* Released under the MIT License.
*/function Zm(t,e,n){if(typeof t=="function"?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}function yx(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function nh(t,e){return t.get(Zm(t,e))}function wx(t,e,n){yx(t,e),e.set(t,n)}function Sx(t,e,n){return t.set(Zm(t,e),n),n}const Mx=100,Ye={},Ex=()=>{Ye.previousActiveElement instanceof HTMLElement?(Ye.previousActiveElement.focus(),Ye.previousActiveElement=null):document.body&&document.body.focus()},Tx=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,i=window.scrollY;Ye.restoreFocusTimeout=setTimeout(()=>{Ex(),e()},Mx),window.scrollTo(n,i)}),Qm="swal2-",Ax=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],ae=Ax.reduce((t,e)=>(t[e]=Qm+e,t),{}),Cx=["success","warning","info","question","error"],Sl=Cx.reduce((t,e)=>(t[e]=Qm+e,t),{}),Jm="SweetAlert2:",Cd=t=>t.charAt(0).toUpperCase()+t.slice(1),Rn=t=>{console.warn(`${Jm} ${typeof t=="object"?t.join(" "):t}`)},ur=t=>{console.error(`${Jm} ${t}`)},ih=[],Rx=t=>{ih.includes(t)||(ih.push(t),Rn(t))},eg=(t,e=null)=>{Rx(`"${t}" is deprecated and will be removed in the next major release.${e?` Use "${e}" instead.`:""}`)},jl=t=>typeof t=="function"?t():t,Rd=t=>t&&typeof t.toPromise=="function",ma=t=>Rd(t)?t.toPromise():Promise.resolve(t),Pd=t=>t&&Promise.resolve(t)===t,Pn=()=>document.body.querySelector(`.${ae.container}`),ga=t=>{const e=Pn();return e?e.querySelector(t):null},Zn=t=>ga(`.${t}`),Et=()=>Zn(ae.popup),po=()=>Zn(ae.icon),Px=()=>Zn(ae["icon-content"]),tg=()=>Zn(ae.title),Dd=()=>Zn(ae["html-container"]),ng=()=>Zn(ae.image),Ld=()=>Zn(ae["progress-steps"]),ql=()=>Zn(ae["validation-message"]),Ui=()=>ga(`.${ae.actions} .${ae.confirm}`),mo=()=>ga(`.${ae.actions} .${ae.cancel}`),dr=()=>ga(`.${ae.actions} .${ae.deny}`),Dx=()=>Zn(ae["input-label"]),go=()=>ga(`.${ae.loader}`),va=()=>Zn(ae.actions),ig=()=>Zn(ae.footer),Yl=()=>Zn(ae["timer-progress-bar"]),Id=()=>Zn(ae.close),Lx=`
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
`,Ud=()=>{const t=Et();if(!t)return[];const e=t.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),n=Array.from(e).sort((r,o)=>{const a=parseInt(r.getAttribute("tabindex")||"0"),l=parseInt(o.getAttribute("tabindex")||"0");return a>l?1:a<l?-1:0}),i=t.querySelectorAll(Lx),s=Array.from(i).filter(r=>r.getAttribute("tabindex")!=="-1");return[...new Set(n.concat(s))].filter(r=>Fn(r))},Od=()=>es(document.body,ae.shown)&&!es(document.body,ae["toast-shown"])&&!es(document.body,ae["no-backdrop"]),Kl=()=>{const t=Et();return t?es(t,ae.toast):!1},Ix=()=>{const t=Et();return t?t.hasAttribute("data-loading"):!1},Qn=(t,e)=>{if(t.textContent="",e){const i=new DOMParser().parseFromString(e,"text/html"),s=i.querySelector("head");s&&Array.from(s.childNodes).forEach(o=>{t.appendChild(o)});const r=i.querySelector("body");r&&Array.from(r.childNodes).forEach(o=>{o instanceof HTMLVideoElement||o instanceof HTMLAudioElement?t.appendChild(o.cloneNode(!0)):t.appendChild(o)})}},es=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let i=0;i<n.length;i++)if(!t.classList.contains(n[i]))return!1;return!0},Ux=(t,e)=>{Array.from(t.classList).forEach(n=>{!Object.values(ae).includes(n)&&!Object.values(Sl).includes(n)&&!Object.values(e.showClass||{}).includes(n)&&t.classList.remove(n)})},Kn=(t,e,n)=>{if(Ux(t,e),!e.customClass)return;const i=e.customClass[n];if(i){if(typeof i!="string"&&!i.forEach){Rn(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof i}"`);return}Tt(t,i)}},Zl=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${ae.popup} > .${ae[e]}`);case"checkbox":return t.querySelector(`.${ae.popup} > .${ae.checkbox} input`);case"radio":return t.querySelector(`.${ae.popup} > .${ae.radio} input:checked`)||t.querySelector(`.${ae.popup} > .${ae.radio} input:first-child`);case"range":return t.querySelector(`.${ae.popup} > .${ae.range} input`);default:return t.querySelector(`.${ae.popup} > .${ae.input}`)}},sg=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},rg=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(i=>{Array.isArray(t)?t.forEach(s=>{n?s.classList.add(i):s.classList.remove(i)}):n?t.classList.add(i):t.classList.remove(i)}))},Tt=(t,e)=>{rg(t,e,!0)},ri=(t,e)=>{rg(t,e,!1)},Ss=(t,e)=>{const n=Array.from(t.children);for(let i=0;i<n.length;i++){const s=n[i];if(s instanceof HTMLElement&&es(s,e))return s}},nr=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style.setProperty(e,typeof n=="number"?`${n}px`:n):t.style.removeProperty(e)},cn=(t,e="flex")=>{t&&(t.style.display=e)},xn=t=>{t&&(t.style.display="none")},Nd=(t,e="block")=>{t&&new MutationObserver(()=>{_a(t,t.innerHTML,e)}).observe(t,{childList:!0,subtree:!0})},sh=(t,e,n,i)=>{const s=t.querySelector(e);s&&s.style.setProperty(n,i)},_a=(t,e,n="flex")=>{e?cn(t,n):xn(t)},Fn=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),Ox=()=>!Fn(Ui())&&!Fn(dr())&&!Fn(mo()),mu=t=>t.scrollHeight>t.clientHeight,Nx=(t,e)=>{let n=t;for(;n&&n!==e;){if(mu(n))return!0;n=n.parentElement}return!1},og=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),i=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||i>0},Fd=(t,e=!1)=>{const n=Yl();n&&Fn(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},Fx=()=>{const t=Yl();if(!t)return;const e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),i=e/n*100;t.style.width=`${i}%`},kx=()=>typeof window>"u"||typeof document>"u",Bx=`
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
`.replace(/(^|\n)\s*/g,""),Hx=()=>{const t=Pn();return t?(t.remove(),ri([document.documentElement,document.body],[ae["no-backdrop"],ae["toast-shown"],ae["has-column"]]),!0):!1},Fs=()=>{Ye.currentInstance.resetValidationMessage()},zx=()=>{const t=Et(),e=Ss(t,ae.input),n=Ss(t,ae.file),i=t.querySelector(`.${ae.range} input`),s=t.querySelector(`.${ae.range} output`),r=Ss(t,ae.select),o=t.querySelector(`.${ae.checkbox} input`),a=Ss(t,ae.textarea);e.oninput=Fs,n.onchange=Fs,r.onchange=Fs,o.onchange=Fs,a.oninput=Fs,i.oninput=()=>{Fs(),s.value=i.value},i.onchange=()=>{Fs(),s.value=i.value}},Vx=t=>typeof t=="string"?document.querySelector(t):t,Gx=t=>{const e=Et();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},Wx=t=>{window.getComputedStyle(t).direction==="rtl"&&Tt(Pn(),ae.rtl)},$x=t=>{const e=Hx();if(kx()){ur("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=ae.container,e&&Tt(n,ae["no-transition"]),Qn(n,Bx),n.dataset.swal2Theme=t.theme;const i=Vx(t.target);i.appendChild(n),t.topLayer&&(n.setAttribute("popover",""),n.showPopover()),Gx(t),Wx(i),zx()},kd=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?Xx(t,e):t&&Qn(e,t)},Xx=(t,e)=>{t.jquery?jx(e,t):Qn(e,t.toString())},jx=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},qx=(t,e)=>{const n=va(),i=go();!n||!i||(!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?xn(n):cn(n),Kn(n,e,"actions"),Yx(n,i,e),Qn(i,e.loaderHtml||""),Kn(i,e,"loader"))};function Yx(t,e,n){const i=Ui(),s=dr(),r=mo();!i||!s||!r||(_c(i,"confirm",n),_c(s,"deny",n),_c(r,"cancel",n),Kx(i,s,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,i),t.insertBefore(s,i)):(t.insertBefore(r,e),t.insertBefore(s,e),t.insertBefore(i,e))))}function Kx(t,e,n,i){if(!i.buttonsStyling){ri([t,e,n],ae.styled);return}Tt([t,e,n],ae.styled),i.confirmButtonColor&&t.style.setProperty("--swal2-confirm-button-background-color",i.confirmButtonColor),i.denyButtonColor&&e.style.setProperty("--swal2-deny-button-background-color",i.denyButtonColor),i.cancelButtonColor&&n.style.setProperty("--swal2-cancel-button-background-color",i.cancelButtonColor),vc(t),vc(e),vc(n)}function vc(t){const e=window.getComputedStyle(t);if(e.getPropertyValue("--swal2-action-button-focus-box-shadow"))return;const n=e.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/,"rgba($1, $2, $3, 0.5)");t.style.setProperty("--swal2-action-button-focus-box-shadow",e.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/,` ${n}`))}function _c(t,e,n){const i=Cd(e);_a(t,n[`show${i}Button`],"inline-block"),Qn(t,n[`${e}ButtonText`]||""),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]||""),t.className=ae[e],Kn(t,n,`${e}Button`)}const Zx=(t,e)=>{const n=Id();n&&(Qn(n,e.closeButtonHtml||""),Kn(n,e,"closeButton"),_a(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel||""))},Qx=(t,e)=>{const n=Pn();n&&(Jx(n,e.backdrop),ey(n,e.position),ty(n,e.grow),Kn(n,e,"container"))};function Jx(t,e){typeof e=="string"?t.style.background=e:e||Tt([document.documentElement,document.body],ae["no-backdrop"])}function ey(t,e){e&&(e in ae?Tt(t,ae[e]):(Rn('The "position" parameter is not valid, defaulting to "center"'),Tt(t,ae.center)))}function ty(t,e){e&&Tt(t,ae[`grow-${e}`])}var kt={innerParams:new WeakMap,domCache:new WeakMap};const ny=["input","file","range","select","radio","checkbox","textarea"],iy=(t,e)=>{const n=Et();if(!n)return;const i=kt.innerParams.get(t),s=!i||e.input!==i.input;ny.forEach(r=>{const o=Ss(n,ae[r]);o&&(oy(r,e.inputAttributes),o.className=ae[r],s&&xn(o))}),e.input&&(s&&sy(e),ay(e))},sy=t=>{if(!t.input)return;if(!Yt[t.input]){ur(`Unexpected type of input! Expected ${Object.keys(Yt).join(" | ")}, got "${t.input}"`);return}const e=ag(t.input);if(!e)return;const n=Yt[t.input](e,t);cn(e),t.inputAutoFocus&&setTimeout(()=>{sg(n)})},ry=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["id","type","value","style"].includes(n)||t.removeAttribute(n)}},oy=(t,e)=>{const n=Et();if(!n)return;const i=Zl(n,t);if(i){ry(i);for(const s in e)i.setAttribute(s,e[s])}},ay=t=>{if(!t.input)return;const e=ag(t.input);e&&Kn(e,t,"input")},Bd=(t,e)=>{!t.placeholder&&e.inputPlaceholder&&(t.placeholder=e.inputPlaceholder)},ba=(t,e,n)=>{if(n.inputLabel){const i=document.createElement("label"),s=ae["input-label"];i.setAttribute("for",t.id),i.className=s,typeof n.customClass=="object"&&Tt(i,n.customClass.inputLabel),i.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",i)}},ag=t=>{const e=Et();if(e)return Ss(e,ae[t]||ae.input)},Ml=(t,e)=>{["string","number"].includes(typeof e)?t.value=`${e}`:Pd(e)||Rn(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e}"`)},Yt={};Yt.text=Yt.email=Yt.password=Yt.number=Yt.tel=Yt.url=Yt.search=Yt.date=Yt["datetime-local"]=Yt.time=Yt.week=Yt.month=(t,e)=>(Ml(t,e.inputValue),ba(t,t,e),Bd(t,e),t.type=e.input,t);Yt.file=(t,e)=>(ba(t,t,e),Bd(t,e),t);Yt.range=(t,e)=>{const n=t.querySelector("input"),i=t.querySelector("output");return Ml(n,e.inputValue),n.type=e.input,Ml(i,e.inputValue),ba(n,t,e),t};Yt.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");Qn(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return ba(t,t,e),t};Yt.radio=t=>(t.textContent="",t);Yt.checkbox=(t,e)=>{const n=Zl(Et(),"checkbox");n.value="1",n.checked=!!e.inputValue;const i=t.querySelector("span");return Qn(i,e.inputPlaceholder||e.inputLabel),n};Yt.textarea=(t,e)=>{Ml(t,e.inputValue),Bd(t,e),ba(t,t,e);const n=i=>parseInt(window.getComputedStyle(i).marginLeft)+parseInt(window.getComputedStyle(i).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const i=parseInt(window.getComputedStyle(Et()).width),s=()=>{if(!document.body.contains(t))return;const r=t.offsetWidth+n(t);r>i?Et().style.width=`${r}px`:nr(Et(),"width",e.width)};new MutationObserver(s).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const ly=(t,e)=>{const n=Dd();n&&(Nd(n),Kn(n,e,"htmlContainer"),e.html?(kd(e.html,n),cn(n,"block")):e.text?(n.textContent=e.text,cn(n,"block")):xn(n),iy(t,e))},cy=(t,e)=>{const n=ig();n&&(Nd(n),_a(n,e.footer,"block"),e.footer&&kd(e.footer,n),Kn(n,e,"footer"))},uy=(t,e)=>{const n=kt.innerParams.get(t),i=po();if(!i)return;if(n&&e.icon===n.icon){oh(i,e),rh(i,e);return}if(!e.icon&&!e.iconHtml){xn(i);return}if(e.icon&&Object.keys(Sl).indexOf(e.icon)===-1){ur(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),xn(i);return}cn(i),oh(i,e),rh(i,e),Tt(i,e.showClass&&e.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",lg)},rh=(t,e)=>{for(const[n,i]of Object.entries(Sl))e.icon!==n&&ri(t,i);Tt(t,e.icon&&Sl[e.icon]),hy(t,e),lg(),Kn(t,e,"icon")},lg=()=>{const t=Et();if(!t)return;const e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let i=0;i<n.length;i++)n[i].style.backgroundColor=e},dy=t=>`
  ${t.animation?'<div class="swal2-success-circular-line-left"></div>':""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${t.animation?'<div class="swal2-success-fix"></div>':""}
  ${t.animation?'<div class="swal2-success-circular-line-right"></div>':""}
`,fy=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,oh=(t,e)=>{if(!e.icon&&!e.iconHtml)return;let n=t.innerHTML,i="";e.iconHtml?i=ah(e.iconHtml):e.icon==="success"?(i=dy(e),n=n.replace(/ style=".*?"/g,"")):e.icon==="error"?i=fy:e.icon&&(i=ah({question:"?",warning:"!",info:"i"}[e.icon])),n.trim()!==i.trim()&&Qn(t,i)},hy=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])sh(t,n,"background-color",e.iconColor);sh(t,".swal2-success-ring","border-color",e.iconColor)}},ah=t=>`<div class="${ae["icon-content"]}">${t}</div>`,py=(t,e)=>{const n=ng();if(n){if(!e.imageUrl){xn(n);return}cn(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt||""),nr(n,"width",e.imageWidth),nr(n,"height",e.imageHeight),n.className=ae.image,Kn(n,e,"image")}};let Hd=!1,cg=0,ug=0,dg=0,fg=0;const my=t=>{t.addEventListener("mousedown",El),document.body.addEventListener("mousemove",Tl),t.addEventListener("mouseup",Al),t.addEventListener("touchstart",El),document.body.addEventListener("touchmove",Tl),t.addEventListener("touchend",Al)},gy=t=>{t.removeEventListener("mousedown",El),document.body.removeEventListener("mousemove",Tl),t.removeEventListener("mouseup",Al),t.removeEventListener("touchstart",El),document.body.removeEventListener("touchmove",Tl),t.removeEventListener("touchend",Al)},El=t=>{const e=Et();if(t.target===e||po().contains(t.target)){Hd=!0;const n=hg(t);cg=n.clientX,ug=n.clientY,dg=parseInt(e.style.insetInlineStart)||0,fg=parseInt(e.style.insetBlockStart)||0,Tt(e,"swal2-dragging")}},Tl=t=>{const e=Et();if(Hd){let{clientX:n,clientY:i}=hg(t);e.style.insetInlineStart=`${dg+(n-cg)}px`,e.style.insetBlockStart=`${fg+(i-ug)}px`}},Al=()=>{const t=Et();Hd=!1,ri(t,"swal2-dragging")},hg=t=>{let e=0,n=0;return t.type.startsWith("mouse")?(e=t.clientX,n=t.clientY):t.type.startsWith("touch")&&(e=t.touches[0].clientX,n=t.touches[0].clientY),{clientX:e,clientY:n}},vy=(t,e)=>{const n=Pn(),i=Et();if(!(!n||!i)){if(e.toast){nr(n,"width",e.width),i.style.width="100%";const s=go();s&&i.insertBefore(s,po())}else nr(i,"width",e.width);nr(i,"padding",e.padding),e.color&&(i.style.color=e.color),e.background&&(i.style.background=e.background),xn(ql()),_y(i,e),e.draggable&&!e.toast?(Tt(i,ae.draggable),my(i)):(ri(i,ae.draggable),gy(i))}},_y=(t,e)=>{const n=e.showClass||{};t.className=`${ae.popup} ${Fn(t)?n.popup:""}`,e.toast?(Tt([document.documentElement,document.body],ae["toast-shown"]),Tt(t,ae.toast)):Tt(t,ae.modal),Kn(t,e,"popup"),typeof e.customClass=="string"&&Tt(t,e.customClass),e.icon&&Tt(t,ae[`icon-${e.icon}`])},by=(t,e)=>{const n=Ld();if(!n)return;const{progressSteps:i,currentProgressStep:s}=e;if(!i||i.length===0||s===void 0){xn(n);return}cn(n),n.textContent="",s>=i.length&&Rn("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),i.forEach((r,o)=>{const a=xy(r);if(n.appendChild(a),o===s&&Tt(a,ae["active-progress-step"]),o!==i.length-1){const l=yy(e);n.appendChild(l)}})},xy=t=>{const e=document.createElement("li");return Tt(e,ae["progress-step"]),Qn(e,t),e},yy=t=>{const e=document.createElement("li");return Tt(e,ae["progress-step-line"]),t.progressStepsDistance&&nr(e,"width",t.progressStepsDistance),e},wy=(t,e)=>{const n=tg();n&&(Nd(n),_a(n,e.title||e.titleText,"block"),e.title&&kd(e.title,n),e.titleText&&(n.innerText=e.titleText),Kn(n,e,"title"))},pg=(t,e)=>{vy(t,e),Qx(t,e),by(t,e),uy(t,e),py(t,e),wy(t,e),Zx(t,e),ly(t,e),qx(t,e),cy(t,e);const n=Et();typeof e.didRender=="function"&&n&&e.didRender(n),Ye.eventEmitter.emit("didRender",n)},Sy=()=>Fn(Et()),mg=()=>{var t;return(t=Ui())===null||t===void 0?void 0:t.click()},My=()=>{var t;return(t=dr())===null||t===void 0?void 0:t.click()},Ey=()=>{var t;return(t=mo())===null||t===void 0?void 0:t.click()},vo=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),gg=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},Ty=(t,e,n)=>{gg(t),e.toast||(t.keydownHandler=i=>Cy(e,i,n),t.keydownTarget=e.keydownListenerCapture?window:Et(),t.keydownListenerCapture=e.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)},gu=(t,e)=>{var n;const i=Ud();if(i.length){t=t+e,t===-2&&(t=i.length-1),t===i.length?t=0:t===-1&&(t=i.length-1),i[t].focus();return}(n=Et())===null||n===void 0||n.focus()},vg=["ArrowRight","ArrowDown"],Ay=["ArrowLeft","ArrowUp"],Cy=(t,e,n)=>{t&&(e.isComposing||e.keyCode===229||(t.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?Ry(e,t):e.key==="Tab"?Py(e):[...vg,...Ay].includes(e.key)?Dy(e.key):e.key==="Escape"&&Ly(e,t,n)))},Ry=(t,e)=>{if(!jl(e.allowEnterKey))return;const n=Zl(Et(),e.input);if(t.target&&n&&t.target instanceof HTMLElement&&t.target.outerHTML===n.outerHTML){if(["textarea","file"].includes(e.input))return;mg(),t.preventDefault()}},Py=t=>{const e=t.target,n=Ud();let i=-1;for(let s=0;s<n.length;s++)if(e===n[s]){i=s;break}t.shiftKey?gu(i,-1):gu(i,1),t.stopPropagation(),t.preventDefault()},Dy=t=>{const e=va(),n=Ui(),i=dr(),s=mo();if(!e||!n||!i||!s)return;const r=[n,i,s];if(document.activeElement instanceof HTMLElement&&!r.includes(document.activeElement))return;const o=vg.includes(t)?"nextElementSibling":"previousElementSibling";let a=document.activeElement;if(a){for(let l=0;l<e.children.length;l++){if(a=a[o],!a)return;if(a instanceof HTMLButtonElement&&Fn(a))break}a instanceof HTMLButtonElement&&a.focus()}},Ly=(t,e,n)=>{t.preventDefault(),jl(e.allowEscapeKey)&&n(vo.esc)};var so={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const Iy=()=>{const t=Pn();Array.from(document.body.children).forEach(n=>{n.contains(t)||(n.hasAttribute("aria-hidden")&&n.setAttribute("data-previous-aria-hidden",n.getAttribute("aria-hidden")||""),n.setAttribute("aria-hidden","true"))})},_g=()=>{Array.from(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||""),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},bg=typeof window<"u"&&!!window.GestureEvent,Uy=()=>{if(bg&&!es(document.body,ae.iosfix)){const t=document.body.scrollTop;document.body.style.top=`${t*-1}px`,Tt(document.body,ae.iosfix),Oy()}},Oy=()=>{const t=Pn();if(!t)return;let e;t.ontouchstart=n=>{e=Ny(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},Ny=t=>{const e=t.target,n=Pn(),i=Dd();return!n||!i||Fy(t)||ky(t)?!1:e===n||!mu(n)&&e instanceof HTMLElement&&!Nx(e,i)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(mu(i)&&i.contains(e))},Fy=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",ky=t=>t.touches&&t.touches.length>1,By=()=>{if(es(document.body,ae.iosfix)){const t=parseInt(document.body.style.top,10);ri(document.body,ae.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},Hy=()=>{const t=document.createElement("div");t.className=ae["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e};let Br=null;const zy=t=>{Br===null&&(document.body.scrollHeight>window.innerHeight||t==="scroll")&&(Br=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Br+Hy()}px`)},Vy=()=>{Br!==null&&(document.body.style.paddingRight=`${Br}px`,Br=null)};function xg(t,e,n,i){Kl()?lh(t,i):(Tx(n).then(()=>lh(t,i)),gg(Ye)),bg?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),Od()&&(Vy(),By(),_g()),Gy()}function Gy(){ri([document.documentElement,document.body],[ae.shown,ae["height-auto"],ae["no-backdrop"],ae["toast-shown"]])}function Ms(t){t=$y(t);const e=so.swalPromiseResolve.get(this),n=Wy(this);this.isAwaitingPromise?t.isDismissed||(xa(this),e(t)):n&&e(t)}const Wy=t=>{const e=Et();if(!e)return!1;const n=kt.innerParams.get(t);if(!n||es(e,n.hideClass.popup))return!1;ri(e,n.showClass.popup),Tt(e,n.hideClass.popup);const i=Pn();return ri(i,n.showClass.backdrop),Tt(i,n.hideClass.backdrop),Xy(t,e,n),!0};function yg(t){const e=so.swalPromiseReject.get(this);xa(this),e&&e(t)}const xa=t=>{t.isAwaitingPromise&&(delete t.isAwaitingPromise,kt.innerParams.get(t)||t._destroy())},$y=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),Xy=(t,e,n)=>{var i;const s=Pn(),r=og(e);typeof n.willClose=="function"&&n.willClose(e),(i=Ye.eventEmitter)===null||i===void 0||i.emit("willClose",e),r?jy(t,e,s,n.returnFocus,n.didClose):xg(t,s,n.returnFocus,n.didClose)},jy=(t,e,n,i,s)=>{Ye.swalCloseEventFinishedCallback=xg.bind(null,t,n,i,s);const r=function(o){if(o.target===e){var a;(a=Ye.swalCloseEventFinishedCallback)===null||a===void 0||a.call(Ye),delete Ye.swalCloseEventFinishedCallback,e.removeEventListener("animationend",r),e.removeEventListener("transitionend",r)}};e.addEventListener("animationend",r),e.addEventListener("transitionend",r)},lh=(t,e)=>{setTimeout(()=>{var n;typeof e=="function"&&e.bind(t.params)(),(n=Ye.eventEmitter)===null||n===void 0||n.emit("didClose"),t._destroy&&t._destroy()})},ro=t=>{let e=Et();if(e||new Bn,e=Et(),!e)return;const n=go();Kl()?xn(po()):qy(e,t),cn(n),e.setAttribute("data-loading","true"),e.setAttribute("aria-busy","true"),e.focus()},qy=(t,e)=>{const n=va(),i=go();!n||!i||(!e&&Fn(Ui())&&(e=Ui()),cn(n),e&&(xn(e),i.setAttribute("data-button-to-replace",e.className),n.insertBefore(i,e)),Tt([t,n],ae.loading))},Yy=(t,e)=>{e.input==="select"||e.input==="radio"?ew(t,e):["text","email","number","tel","textarea"].some(n=>n===e.input)&&(Rd(e.inputValue)||Pd(e.inputValue))&&(ro(Ui()),tw(t,e))},Ky=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return Zy(n);case"radio":return Qy(n);case"file":return Jy(n);default:return e.inputAutoTrim?n.value.trim():n.value}},Zy=t=>t.checked?1:0,Qy=t=>t.checked?t.value:null,Jy=t=>t.files&&t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,ew=(t,e)=>{const n=Et();if(!n)return;const i=s=>{e.input==="select"?nw(n,Cl(s),e):e.input==="radio"&&iw(n,Cl(s),e)};Rd(e.inputOptions)||Pd(e.inputOptions)?(ro(Ui()),ma(e.inputOptions).then(s=>{t.hideLoading(),i(s)})):typeof e.inputOptions=="object"?i(e.inputOptions):ur(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},tw=(t,e)=>{const n=t.getInput();n&&(xn(n),ma(e.inputValue).then(i=>{n.value=e.input==="number"?`${parseFloat(i)||0}`:`${i}`,cn(n),n.focus(),t.hideLoading()}).catch(i=>{ur(`Error in inputValue promise: ${i}`),n.value="",cn(n),n.focus(),t.hideLoading()}))};function nw(t,e,n){const i=Ss(t,ae.select);if(!i)return;const s=(r,o,a)=>{const l=document.createElement("option");l.value=a,Qn(l,o),l.selected=wg(a,n.inputValue),r.appendChild(l)};e.forEach(r=>{const o=r[0],a=r[1];if(Array.isArray(a)){const l=document.createElement("optgroup");l.label=o,l.disabled=!1,i.appendChild(l),a.forEach(c=>s(l,c[1],c[0]))}else s(i,a,o)}),i.focus()}function iw(t,e,n){const i=Ss(t,ae.radio);if(!i)return;e.forEach(r=>{const o=r[0],a=r[1],l=document.createElement("input"),c=document.createElement("label");l.type="radio",l.name=ae.radio,l.value=o,wg(o,n.inputValue)&&(l.checked=!0);const u=document.createElement("span");Qn(u,a),u.className=ae.label,c.appendChild(l),c.appendChild(u),i.appendChild(c)});const s=i.querySelectorAll("input");s.length&&s[0].focus()}const Cl=t=>{const e=[];return t instanceof Map?t.forEach((n,i)=>{let s=n;typeof s=="object"&&(s=Cl(s)),e.push([i,s])}):Object.keys(t).forEach(n=>{let i=t[n];typeof i=="object"&&(i=Cl(i)),e.push([n,i])}),e},wg=(t,e)=>!!e&&e.toString()===t.toString(),sw=t=>{const e=kt.innerParams.get(t);t.disableButtons(),e.input?Sg(t,"confirm"):Vd(t,!0)},rw=t=>{const e=kt.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?Sg(t,"deny"):zd(t,!1)},ow=(t,e)=>{t.disableButtons(),e(vo.cancel)},Sg=(t,e)=>{const n=kt.innerParams.get(t);if(!n.input){ur(`The "input" parameter is needed to be set when using returnInputValueOn${Cd(e)}`);return}const i=t.getInput(),s=Ky(t,n);n.inputValidator?aw(t,s,e):i&&!i.checkValidity()?(t.enableButtons(),t.showValidationMessage(n.validationMessage||i.validationMessage)):e==="deny"?zd(t,s):Vd(t,s)},aw=(t,e,n)=>{const i=kt.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>ma(i.inputValidator(e,i.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):n==="deny"?zd(t,e):Vd(t,e)})},zd=(t,e)=>{const n=kt.innerParams.get(t||void 0);n.showLoaderOnDeny&&ro(dr()),n.preDeny?(t.isAwaitingPromise=!0,Promise.resolve().then(()=>ma(n.preDeny(e,n.validationMessage))).then(s=>{s===!1?(t.hideLoading(),xa(t)):t.close({isDenied:!0,value:typeof s>"u"?e:s})}).catch(s=>Mg(t||void 0,s))):t.close({isDenied:!0,value:e})},ch=(t,e)=>{t.close({isConfirmed:!0,value:e})},Mg=(t,e)=>{t.rejectPromise(e)},Vd=(t,e)=>{const n=kt.innerParams.get(t||void 0);n.showLoaderOnConfirm&&ro(),n.preConfirm?(t.resetValidationMessage(),t.isAwaitingPromise=!0,Promise.resolve().then(()=>ma(n.preConfirm(e,n.validationMessage))).then(s=>{Fn(ql())||s===!1?(t.hideLoading(),xa(t)):ch(t,typeof s>"u"?e:s)}).catch(s=>Mg(t||void 0,s))):ch(t,e)};function Rl(){const t=kt.innerParams.get(this);if(!t)return;const e=kt.domCache.get(this);xn(e.loader),Kl()?t.icon&&cn(po()):lw(e),ri([e.popup,e.actions],ae.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const lw=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?cn(e[0],"inline-block"):Ox()&&xn(t.actions)};function Eg(){const t=kt.innerParams.get(this),e=kt.domCache.get(this);return e?Zl(e.popup,t.input):null}function Tg(t,e,n){const i=kt.domCache.get(t);e.forEach(s=>{i[s].disabled=n})}function Ag(t,e){const n=Et();if(!(!n||!t))if(t.type==="radio"){const i=n.querySelectorAll(`[name="${ae.radio}"]`);for(let s=0;s<i.length;s++)i[s].disabled=e}else t.disabled=e}function Cg(){Tg(this,["confirmButton","denyButton","cancelButton"],!1)}function Rg(){Tg(this,["confirmButton","denyButton","cancelButton"],!0)}function Pg(){Ag(this.getInput(),!1)}function Dg(){Ag(this.getInput(),!0)}function Lg(t){const e=kt.domCache.get(this),n=kt.innerParams.get(this);Qn(e.validationMessage,t),e.validationMessage.className=ae["validation-message"],n.customClass&&n.customClass.validationMessage&&Tt(e.validationMessage,n.customClass.validationMessage),cn(e.validationMessage);const i=this.getInput();i&&(i.setAttribute("aria-invalid","true"),i.setAttribute("aria-describedby",ae["validation-message"]),sg(i),Tt(i,ae.inputerror))}function Ig(){const t=kt.domCache.get(this);t.validationMessage&&xn(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),ri(e,ae.inputerror))}const Hr={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0,topLayer:!1},cw=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],uw={allowEnterKey:void 0},dw=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Ug=t=>Object.prototype.hasOwnProperty.call(Hr,t),Og=t=>cw.indexOf(t)!==-1,Ng=t=>uw[t],fw=t=>{Ug(t)||Rn(`Unknown parameter "${t}"`)},hw=t=>{dw.includes(t)&&Rn(`The parameter "${t}" is incompatible with toasts`)},pw=t=>{const e=Ng(t);e&&eg(t,e)},Fg=t=>{t.backdrop===!1&&t.allowOutsideClick&&Rn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),t.theme&&!["light","dark","auto","minimal","borderless","embed-iframe","bulma","bulma-light","bulma-dark"].includes(t.theme)&&Rn(`Invalid theme "${t.theme}"`);for(const e in t)fw(e),t.toast&&hw(e),pw(e)};function kg(t){const e=Pn(),n=Et(),i=kt.innerParams.get(this);if(!n||es(n,i.hideClass.popup)){Rn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const s=mw(t),r=Object.assign({},i,s);Fg(r),e.dataset.swal2Theme=r.theme,pg(this,r),kt.innerParams.set(this,r),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const mw=t=>{const e={};return Object.keys(t).forEach(n=>{Og(n)?e[n]=t[n]:Rn(`Invalid parameter to update: ${n}`)}),e};function Bg(){const t=kt.domCache.get(this),e=kt.innerParams.get(this);if(!e){Hg(this);return}t.popup&&Ye.swalCloseEventFinishedCallback&&(Ye.swalCloseEventFinishedCallback(),delete Ye.swalCloseEventFinishedCallback),typeof e.didDestroy=="function"&&e.didDestroy(),Ye.eventEmitter.emit("didDestroy"),gw(this)}const gw=t=>{Hg(t),delete t.params,delete Ye.keydownHandler,delete Ye.keydownTarget,delete Ye.currentInstance},Hg=t=>{t.isAwaitingPromise?(bc(kt,t),t.isAwaitingPromise=!0):(bc(so,t),bc(kt,t),delete t.isAwaitingPromise,delete t.disableButtons,delete t.enableButtons,delete t.getInput,delete t.disableInput,delete t.enableInput,delete t.hideLoading,delete t.disableLoading,delete t.showValidationMessage,delete t.resetValidationMessage,delete t.close,delete t.closePopup,delete t.closeModal,delete t.closeToast,delete t.rejectPromise,delete t.update,delete t._destroy)},bc=(t,e)=>{for(const n in t)t[n].delete(e)};var vw=Object.freeze({__proto__:null,_destroy:Bg,close:Ms,closeModal:Ms,closePopup:Ms,closeToast:Ms,disableButtons:Rg,disableInput:Dg,disableLoading:Rl,enableButtons:Cg,enableInput:Pg,getInput:Eg,handleAwaitingPromise:xa,hideLoading:Rl,rejectPromise:yg,resetValidationMessage:Ig,showValidationMessage:Lg,update:kg});const _w=(t,e,n)=>{t.toast?bw(t,e,n):(yw(e),ww(e),Sw(t,e,n))},bw=(t,e,n)=>{e.popup.onclick=()=>{t&&(xw(t)||t.timer||t.input)||n(vo.close)}},xw=t=>!!(t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton);let Pl=!1;const yw=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=()=>{},e.target===t.container&&(Pl=!0)}}},ww=t=>{t.container.onmousedown=e=>{e.target===t.container&&e.preventDefault(),t.popup.onmouseup=function(n){t.popup.onmouseup=()=>{},(n.target===t.popup||n.target instanceof HTMLElement&&t.popup.contains(n.target))&&(Pl=!0)}}},Sw=(t,e,n)=>{e.container.onclick=i=>{if(Pl){Pl=!1;return}i.target===e.container&&jl(t.allowOutsideClick)&&n(vo.backdrop)}},Mw=t=>typeof t=="object"&&t.jquery,uh=t=>t instanceof Element||Mw(t),Ew=t=>{const e={};return typeof t[0]=="object"&&!uh(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,i)=>{const s=t[i];typeof s=="string"||uh(s)?e[n]=s:s!==void 0&&ur(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof s}`)}),e};function Tw(...t){return new this(...t)}function Aw(t){class e extends this{_main(i,s){return super._main(i,Object.assign({},t,s))}}return e}const Cw=()=>Ye.timeout&&Ye.timeout.getTimerLeft(),zg=()=>{if(Ye.timeout)return Fx(),Ye.timeout.stop()},Vg=()=>{if(Ye.timeout){const t=Ye.timeout.start();return Fd(t),t}},Rw=()=>{const t=Ye.timeout;return t&&(t.running?zg():Vg())},Pw=t=>{if(Ye.timeout){const e=Ye.timeout.increase(t);return Fd(e,!0),e}},Dw=()=>!!(Ye.timeout&&Ye.timeout.isRunning());let dh=!1;const vu={};function Lw(t="data-swal-template"){vu[t]=this,dh||(document.body.addEventListener("click",Iw),dh=!0)}const Iw=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in vu){const i=e.getAttribute(n);if(i){vu[n].fire({template:i});return}}};class Uw{constructor(){this.events={}}_getHandlersByEventName(e){return typeof this.events[e]>"u"&&(this.events[e]=[]),this.events[e]}on(e,n){const i=this._getHandlersByEventName(e);i.includes(n)||i.push(n)}once(e,n){const i=(...s)=>{this.removeListener(e,i),n.apply(this,s)};this.on(e,i)}emit(e,...n){this._getHandlersByEventName(e).forEach(i=>{try{i.apply(this,n)}catch(s){console.error(s)}})}removeListener(e,n){const i=this._getHandlersByEventName(e),s=i.indexOf(n);s>-1&&i.splice(s,1)}removeAllListeners(e){this.events[e]!==void 0&&(this.events[e].length=0)}reset(){this.events={}}}Ye.eventEmitter=new Uw;const Ow=(t,e)=>{Ye.eventEmitter.on(t,e)},Nw=(t,e)=>{Ye.eventEmitter.once(t,e)},Fw=(t,e)=>{if(!t){Ye.eventEmitter.reset();return}e?Ye.eventEmitter.removeListener(t,e):Ye.eventEmitter.removeAllListeners(t)};var kw=Object.freeze({__proto__:null,argsToParams:Ew,bindClickHandler:Lw,clickCancel:Ey,clickConfirm:mg,clickDeny:My,enableLoading:ro,fire:Tw,getActions:va,getCancelButton:mo,getCloseButton:Id,getConfirmButton:Ui,getContainer:Pn,getDenyButton:dr,getFocusableElements:Ud,getFooter:ig,getHtmlContainer:Dd,getIcon:po,getIconContent:Px,getImage:ng,getInputLabel:Dx,getLoader:go,getPopup:Et,getProgressSteps:Ld,getTimerLeft:Cw,getTimerProgressBar:Yl,getTitle:tg,getValidationMessage:ql,increaseTimer:Pw,isDeprecatedParameter:Ng,isLoading:Ix,isTimerRunning:Dw,isUpdatableParameter:Og,isValidParameter:Ug,isVisible:Sy,mixin:Aw,off:Fw,on:Ow,once:Nw,resumeTimer:Vg,showLoading:ro,stopTimer:zg,toggleTimer:Rw});class Bw{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Gg=["swal-title","swal-html","swal-footer"],Hw=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return qw(n),Object.assign(zw(n),Vw(n),Gw(n),Ww(n),$w(n),Xw(n),jw(n,Gg))},zw=t=>{const e={};return Array.from(t.querySelectorAll("swal-param")).forEach(i=>{rr(i,["name","value"]);const s=i.getAttribute("name"),r=i.getAttribute("value");!s||!r||(typeof Hr[s]=="boolean"?e[s]=r!=="false":typeof Hr[s]=="object"?e[s]=JSON.parse(r):e[s]=r)}),e},Vw=t=>{const e={};return Array.from(t.querySelectorAll("swal-function-param")).forEach(i=>{const s=i.getAttribute("name"),r=i.getAttribute("value");!s||!r||(e[s]=new Function(`return ${r}`)())}),e},Gw=t=>{const e={};return Array.from(t.querySelectorAll("swal-button")).forEach(i=>{rr(i,["type","color","aria-label"]);const s=i.getAttribute("type");!s||!["confirm","cancel","deny"].includes(s)||(e[`${s}ButtonText`]=i.innerHTML,e[`show${Cd(s)}Button`]=!0,i.hasAttribute("color")&&(e[`${s}ButtonColor`]=i.getAttribute("color")),i.hasAttribute("aria-label")&&(e[`${s}ButtonAriaLabel`]=i.getAttribute("aria-label")))}),e},Ww=t=>{const e={},n=t.querySelector("swal-image");return n&&(rr(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")||void 0),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")||void 0),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")||void 0),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt")||void 0)),e},$w=t=>{const e={},n=t.querySelector("swal-icon");return n&&(rr(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},Xw=t=>{const e={},n=t.querySelector("swal-input");n&&(rr(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const i=Array.from(t.querySelectorAll("swal-input-option"));return i.length&&(e.inputOptions={},i.forEach(s=>{rr(s,["value"]);const r=s.getAttribute("value");if(!r)return;const o=s.innerHTML;e.inputOptions[r]=o})),e},jw=(t,e)=>{const n={};for(const i in e){const s=e[i],r=t.querySelector(s);r&&(rr(r,[]),n[s.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},qw=t=>{const e=Gg.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(t.children).forEach(n=>{const i=n.tagName.toLowerCase();e.includes(i)||Rn(`Unrecognized element <${i}>`)})},rr=(t,e)=>{Array.from(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&Rn([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},Wg=10,Yw=t=>{const e=Pn(),n=Et();typeof t.willOpen=="function"&&t.willOpen(n),Ye.eventEmitter.emit("willOpen",n);const s=window.getComputedStyle(document.body).overflowY;Qw(e,n,t),setTimeout(()=>{Kw(e,n)},Wg),Od()&&(Zw(e,t.scrollbarPadding,s),Iy()),!Kl()&&!Ye.previousActiveElement&&(Ye.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),Ye.eventEmitter.emit("didOpen",n),ri(e,ae["no-transition"])},Dl=t=>{const e=Et();if(t.target!==e)return;const n=Pn();e.removeEventListener("animationend",Dl),e.removeEventListener("transitionend",Dl),n.style.overflowY="auto"},Kw=(t,e)=>{og(e)?(t.style.overflowY="hidden",e.addEventListener("animationend",Dl),e.addEventListener("transitionend",Dl)):t.style.overflowY="auto"},Zw=(t,e,n)=>{Uy(),e&&n!=="hidden"&&zy(n),setTimeout(()=>{t.scrollTop=0})},Qw=(t,e,n)=>{Tt(t,n.showClass.backdrop),n.animation?(e.style.setProperty("opacity","0","important"),cn(e,"grid"),setTimeout(()=>{Tt(e,n.showClass.popup),e.style.removeProperty("opacity")},Wg)):cn(e,"grid"),Tt([document.documentElement,document.body],ae.shown),n.heightAuto&&n.backdrop&&!n.toast&&Tt([document.documentElement,document.body],ae["height-auto"])};var fh={email:(t,e)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function Jw(t){t.inputValidator||(t.input==="email"&&(t.inputValidator=fh.email),t.input==="url"&&(t.inputValidator=fh.url))}function eS(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(Rn('Target parameter is not valid, defaulting to "body"'),t.target="body")}function tS(t){Jw(t),t.showLoaderOnConfirm&&!t.preConfirm&&Rn(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),eS(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),$x(t)}let yi;var Da=new WeakMap;class Zt{constructor(...e){if(wx(this,Da,void 0),typeof window>"u")return;yi=this;const n=Object.freeze(this.constructor.argsToParams(e));this.params=n,this.isAwaitingPromise=!1,Sx(Da,this,this._main(yi.params))}_main(e,n={}){if(Fg(Object.assign({},n,e)),Ye.currentInstance){const r=so.swalPromiseResolve.get(Ye.currentInstance),{isAwaitingPromise:o}=Ye.currentInstance;Ye.currentInstance._destroy(),o||r({isDismissed:!0}),Od()&&_g()}Ye.currentInstance=yi;const i=iS(e,n);tS(i),Object.freeze(i),Ye.timeout&&(Ye.timeout.stop(),delete Ye.timeout),clearTimeout(Ye.restoreFocusTimeout);const s=sS(yi);return pg(yi,i),kt.innerParams.set(yi,i),nS(yi,s,i)}then(e){return nh(Da,this).then(e)}finally(e){return nh(Da,this).finally(e)}}const nS=(t,e,n)=>new Promise((i,s)=>{const r=o=>{t.close({isDismissed:!0,dismiss:o})};so.swalPromiseResolve.set(t,i),so.swalPromiseReject.set(t,s),e.confirmButton.onclick=()=>{sw(t)},e.denyButton.onclick=()=>{rw(t)},e.cancelButton.onclick=()=>{ow(t,r)},e.closeButton.onclick=()=>{r(vo.close)},_w(n,e,r),Ty(Ye,n,r),Yy(t,n),Yw(n),rS(Ye,n,r),oS(e,n),setTimeout(()=>{e.container.scrollTop=0})}),iS=(t,e)=>{const n=Hw(t),i=Object.assign({},Hr,e,n,t);return i.showClass=Object.assign({},Hr.showClass,i.showClass),i.hideClass=Object.assign({},Hr.hideClass,i.hideClass),i.animation===!1&&(i.showClass={backdrop:"swal2-noanimation"},i.hideClass={}),i},sS=t=>{const e={popup:Et(),container:Pn(),actions:va(),confirmButton:Ui(),denyButton:dr(),cancelButton:mo(),loader:go(),closeButton:Id(),validationMessage:ql(),progressSteps:Ld()};return kt.domCache.set(t,e),e},rS=(t,e,n)=>{const i=Yl();xn(i),e.timer&&(t.timeout=new Bw(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(cn(i),Kn(i,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&Fd(e.timer)})))},oS=(t,e)=>{if(!e.toast){if(!jl(e.allowEnterKey)){eg("allowEnterKey"),cS();return}aS(t)||lS(t,e)||gu(-1,1)}},aS=t=>{const e=Array.from(t.popup.querySelectorAll("[autofocus]"));for(const n of e)if(n instanceof HTMLElement&&Fn(n))return n.focus(),!0;return!1},lS=(t,e)=>e.focusDeny&&Fn(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&Fn(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&Fn(t.confirmButton)?(t.confirmButton.focus(),!0):!1,cS=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const t=new Date,e=localStorage.getItem("swal-initiation");e?(t.getTime()-Date.parse(e))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const n=document.createElement("audio");n.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",n.loop=!0,document.body.appendChild(n),setTimeout(()=>{n.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${t}`)}Zt.prototype.disableButtons=Rg;Zt.prototype.enableButtons=Cg;Zt.prototype.getInput=Eg;Zt.prototype.disableInput=Dg;Zt.prototype.enableInput=Pg;Zt.prototype.hideLoading=Rl;Zt.prototype.disableLoading=Rl;Zt.prototype.showValidationMessage=Lg;Zt.prototype.resetValidationMessage=Ig;Zt.prototype.close=Ms;Zt.prototype.closePopup=Ms;Zt.prototype.closeModal=Ms;Zt.prototype.closeToast=Ms;Zt.prototype.rejectPromise=yg;Zt.prototype.update=kg;Zt.prototype._destroy=Bg;Object.assign(Zt,kw);Object.keys(vw).forEach(t=>{Zt[t]=function(...e){return yi&&yi[t]?yi[t](...e):null}});Zt.DismissReason=vo;Zt.version="11.22.3";const Bn=Zt;Bn.default=Bn;typeof document<"u"&&function(t,e){var n=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=e);else try{n.innerHTML=e}catch{n.innerText=e}}(document,':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.1s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px $swal2-outline-color;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');const bi=(t="Success!",e="Operation completed successfully")=>Bn.fire({icon:"success",title:t,text:e,confirmButtonText:"OK",confirmButtonColor:"#10b981"}),$t=(t="Error!",e="Something went wrong")=>Bn.fire({icon:"error",title:t,text:e,confirmButtonText:"OK",confirmButtonColor:"#ef4444"}),jL=(t="Warning!",e="Please check your input")=>Bn.fire({icon:"warning",title:t,text:e,confirmButtonText:"OK",confirmButtonColor:"#f59e0b"}),To=(t="Info",e="Here is some information")=>Bn.fire({icon:"info",title:t,text:e,confirmButtonText:"OK",confirmButtonColor:"#3b82f6"}),xc=(t="Are you sure?",e="This action cannot be undone")=>Bn.fire({title:t,text:e,icon:"question",showCancelButton:!0,confirmButtonColor:"#10b981",cancelButtonColor:"#6b7280",confirmButtonText:"بله، ادامه بده",cancelButtonText:"لغو"}),qL=t=>Bn.fire({confirmButtonColor:"#10b981",cancelButtonColor:"#6b7280",...t}),YL=(t="Enter value",e="Value",n="Type here...")=>Bn.fire({title:t,inputLabel:e,input:"text",inputPlaceholder:n,showCancelButton:!0,confirmButtonColor:"#10b981",cancelButtonColor:"#6b7280",confirmButtonText:"ثبت",cancelButtonText:"لغو",inputValidator:i=>{if(!i)return"You need to write something!"}}),KL=(t="Loading...")=>{Bn.fire({title:t,allowOutsideClick:!1,didOpen:()=>{Bn.showLoading()}})},ZL=()=>{Bn.close()},QL=(t,e="success",n="top-end")=>{Bn.mixin({toast:!0,position:n,showConfirmButton:!1,timer:3e3,timerProgressBar:!0}).fire({icon:e,title:t})},uS={class:"editor-container overflow-auto"},dS={class:"mobile-control-bar"},fS={key:0,class:"pinned-section"},hS={class:"pinned-section-header"},pS={class:"pinned-section-title"},mS={class:"pinned-section-content"},gS={key:0,class:"pinned-dimensions"},vS={class:"dimension-inputs"},_S={class:"dimension-label"},bS={class:"dimension-label"},xS={class:"cell-size-section"},yS={class:"dimension-inputs"},wS={class:"dimension-label"},SS={class:"dimension-label"},MS={key:1,class:"pinned-direction"},ES={class:"direction-toggle"},TS={class:"direction-toggle"},AS={key:2,class:"pinned-color"},CS={class:"color-picker-container"},RS={class:"color-value"},PS={class:"recent-colors-header"},DS={class:"recent-colors-grid"},LS=["title","onClick"],IS=["onClick"],US={key:3,class:"pinned-mode"},OS={class:"mode-toggle"},NS={key:4,class:"pinned-image"},FS={class:"image-picker-container"},kS={class:"available-images-grid"},BS=["onClick"],HS=["src","alt"],zS={class:"image-name"},VS={key:5,class:"pinned-tools"},GS={class:"tools-grid"},WS=["disabled"],$S=["disabled"],XS=["disabled"],jS={key:6,class:"pinned-export"},qS={class:"grid grid-cols-2 gap-2"},YS={class:"mobile-panel-content"},KS={class:"mobile-image-section"},ZS={class:"upload-section grid grid-cols-2 gap-2"},QS={class:"upload-label"},JS={class:"upload-label"},eM={key:0,class:"image-preview"},tM=["src"],nM={class:"mobile-controls-content"},iM={class:"controls-content"},sM={class:"dimensions-section"},rM={class:"section-header"},oM=["title"],aM={class:"dimension-inputs"},lM={class:"dimension-label"},cM={class:"dimension-label"},uM={class:"cell-size-section !mt-4"},dM={class:"dimension-inputs"},fM={class:"dimension-label"},hM={class:"dimension-label"},pM={class:"direction-section"},mM={class:"section-header"},gM=["title"],vM={class:"direction-toggle"},_M={class:"direction-toggle"},bM={class:"color-section"},xM={class:"section-header"},yM=["title"],wM={class:"color-picker-container"},SM={class:"color-value"},MM={class:"recent-colors-header mt-3!"},EM={class:"recent-colors-grid"},TM=["title","onClick"],AM=["onClick"],CM={class:"mode-section"},RM={class:"section-header"},PM=["title"],DM={class:"mode-toggle"},LM={key:0,class:"mode-section"},IM={class:"section-header"},UM=["title"],OM={class:"image-picker-container"},NM={class:"available-images-grid"},FM=["onClick"],kM=["src","alt"],BM={class:"image-name"},HM={key:0,class:"recent-images-section"},zM={class:"recent-images-grid"},VM=["onClick"],GM=["src","alt"],WM=["onClick"],$M={class:"tools-section"},XM={class:"section-header"},jM=["title"],qM={class:"tools-grid"},YM=["disabled"],KM=["disabled"],ZM=["disabled"],QM={class:"background-color-section !mt-4"},JM={class:"background-mode-toggle"},eE={key:0,class:"background-color-controls"},tE={key:1,class:"background-image-controls"},nE={class:"background-image-picker"},iE={class:"background-images-grid"},sE=["onClick"],rE=["src","alt"],oE={class:"background-image-name"},aE=["disabled"],lE={class:"export-section"},cE={class:"section-header"},uE=["title"],dE={class:"grid grid-cols-2 gap-2"},fE={class:"controls-panel"},hE={class:"controls-content"},pE={class:"dimensions-section"},mE={class:"dimension-inputs"},gE={class:"dimension-label"},vE={class:"dimension-label"},_E={class:"cell-size-section !mt-4"},bE={class:"dimension-inputs"},xE={class:"dimension-label"},yE={class:"dimension-label"},wE={class:"direction-section"},SE={class:"direction-toggle"},ME={class:"direction-toggle"},EE={class:"color-section"},TE={class:"color-picker-container"},AE={class:"color-value"},CE={class:"recent-colors-header mt-3!"},RE={class:"recent-colors-grid"},PE=["title","onClick"],DE=["onClick"],LE={class:"mode-section"},IE={class:"mode-toggle"},UE={key:0,class:"image-section"},OE={class:"image-picker-container"},NE={class:"available-images-grid"},FE=["onClick"],kE=["src","alt"],BE={class:"image-name"},HE={key:0,class:"recent-images-section"},zE={class:"recent-images-grid"},VE=["onClick"],GE=["src","alt"],WE=["onClick"],$E={class:"tools-section"},XE={class:"tools-grid"},jE=["disabled"],qE=["disabled"],YE=["disabled"],KE={class:"background-color-section !mt-4"},ZE={class:"background-mode-toggle"},QE={key:0,class:"background-color-controls"},JE={key:1,class:"background-image-controls"},eT={class:"background-image-picker"},tT={class:"background-images-grid"},nT=["onClick"],iT=["src","alt"],sT={class:"background-image-name"},rT=["disabled"],oT={class:"export-section"},aT={class:"grid grid-cols-2 gap-2"},lT={class:"image-section max-h-[70%]"},cT={class:"upload-section grid grid-cols-2 gap-2"},uT={class:"upload-label"},dT={class:"upload-label"},fT={key:0,class:"image-preview"},hT=["src"],pT=["onClick"],mT={__name:"GridEditor",emits:["update-grid"],setup(t,{emit:e}){const n=e,i=st(16),s=st(80),r=st(15),o=st(17),a=st("#ff0000"),l=st([]),c=st(null),u=st(()=>{try{const G=localStorage.getItem("gridEditor_isVertical");return console.log("saved",G),G!==null?JSON.parse(G):!0}catch{return!0}}),d=st(!0),f=st(null),h=st("color"),v=st(null),_=st([]),m=st([]),p=st(!1),A=st(null);function M(){p.value=!p.value}function y(G){A.value===G?A.value=null:(A.value=G,p.value=!1)}function L(){A.value=null}function I(G){return{dimensions:"📐 ابعاد شبکه",direction:"🔄 جهت",color:"🎨 انتخاب رنگ",mode:"🎨 حالت طراحی",image:"🖼️ انتخاب تصویر مهره",tools:"🛠️ ابزارها",export:"📤 خروجی"}[G]||G}const P=st([]);function H(){try{const G={grid:P.value,rows:i.value,cols:s.value,cellWidth:r.value,cellHeight:o.value,isVertical:u.value,isVerticalGrid:d.value,recentColors:l.value,recentImages:_.value,timestamp:new Date().toISOString()};localStorage.setItem("gridEditorData",JSON.stringify(G)),c.value=G.timestamp,bi("ذخیره شد","گرید با موفقیت ذخیره شد")}catch(G){$t("خطا در ذخیره","خطا در ذخیره گرید: "+G.message),console.error("Error saving grid:",G)}}function T(){try{const G=localStorage.getItem("gridEditorData");if(G){const w=JSON.parse(G);return w.grid&&Array.isArray(w.grid)&&w.rows&&w.cols&&w.grid.length===w.rows*w.cols?(i.value=w.rows,s.value=w.cols,P.value=[...w.grid],w.cellWidth&&typeof w.cellWidth=="number"&&(r.value=w.cellWidth),w.cellHeight&&typeof w.cellHeight=="number"&&(o.value=w.cellHeight),typeof w.isVertical=="boolean"&&(u.value=w.isVertical),typeof w.isVerticalGrid=="boolean"&&(d.value=w.isVerticalGrid),w.recentColors&&Array.isArray(w.recentColors)&&(l.value=[...w.recentColors]),w.recentImages&&Array.isArray(w.recentImages)&&(_.value=[...w.recentImages]),c.value=w.timestamp,Ke.stacks=[],Ke.index=-1,ie(),n("update-grid",he()),!0):(localStorage.removeItem("gridEditorData"),To("اطلاعات","داده‌های ذخیره شده نامعتبر بودند و حذف شدند"),!1)}return!1}catch(G){return $t("خطا در بارگذاری","خطا در بارگذاری گرید: "+G.message),console.error("Error loading grid:",G),localStorage.removeItem("gridEditorData"),!1}}function C(G){console.log("Key pressed:",G.key,"Ctrl:",G.ctrlKey),G.ctrlKey&&G.key==="z"&&(G.preventDefault(),ye(),console.log("Undo triggered by Ctrl+Z"))}ho(()=>{const G=T();if(u.value=localStorage.getItem("gridEditor_isVertical")!==null?JSON.parse(localStorage.getItem("gridEditor_isVertical")):!0,!G){const w=i.value*s.value;P.value=Array(w).fill("#ffffff"),ie()}O(),document.addEventListener("keydown",C)});function O(){const G=["310.jpg","1130.jpg","1135.jpg","2116.jpg","2131.jpg","2132.jpg","725.jpg","877.jpg","f111.jpg","f222.jpg","f333.jpg","f444.jpg","f555.jpg","f666.jpg","f777.jpg","f888.jpg","f999.jpg","f1010.jpg","f1111.jpg","f1212.jpg","f1313.jpg","f1414.jpg","f1515.jpg","Awhite.jpg","Turquoise.jpg","db0042.jpg","db0221.jpg","db0231.jpg","db0268.jpg","db0623.jpg","db0627.jpg","db0635.jpg","db0651.jpg","db0680.jpg","db0721.jpg","db0722.jpg","db0723.jpg","db0725.jpg","db0726.jpg","db0729.jpg","db0759.jpg","db0763.jpg","db0791.jpg","db0796.jpg","db0877.jpg","db1132.jpg","db1133.jpg","db1135.jpg","db1153.jpg","db1262.jpg","db1570.jpg","db1802.jpg","db1832.jpg","db1832-2.jpg","db2111.jpg","db2127.jpg","db2131.jpg","db2132.jpg","db2144.jpg","db2316.jpg","db2352.jpg","db2357.jpg","db310.jpg","db626.jpg","db732.jpg","db856.jpg"];m.value=G.map(w=>({name:w,url:`/miyuki-beads-designer/beads/${w}`,displayName:w.replace(".jpg","")}))}const U=st([]),D=st([]),N=st({width:0,height:0}),J=st({x:0,y:0}),Y=st(!1),ee=st("paint");let q=!1,xe=null,Me=!1,Le=!1,Ge=!1,_t=-1;const Ke=ua({stacks:[],index:-1});function ie(){Ke.stacks=Ke.stacks.slice(0,Ke.index+1),Ke.stacks.push([...P.value]),Ke.index++}function ye(){Ke.index>0&&(Ke.index--,P.value=[...Ke.stacks[Ke.index]])}function B(){Ke.index<Ke.stacks.length-1&&(Ke.index++,P.value=[...Ke.stacks[Ke.index]])}ie();function ue(G){const w=G.target.files[0];if(w){const F=new FileReader;F.onload=pe=>{try{const Ae=pe.target.result.trim(),ke=JSON.parse(Ae);if(ke.grid&&ke.rows&&ke.cols){const{grid:je,rows:rt,cols:ot}=ke;Array.isArray(je)&&je.every(Xe=>typeof Xe=="string"&&(Xe.match(/^#[0-9A-Fa-f]{6}$/)||Xe.startsWith("/miyuki-beads-designer/beads/")))?je.length===rt*ot?(i.value=rt,s.value=ot,ke.cellWidth&&typeof ke.cellWidth=="number"&&(r.value=ke.cellWidth),ke.cellHeight&&typeof ke.cellHeight=="number"&&(o.value=ke.cellHeight),typeof ke.isVertical=="boolean"&&(u.value=ke.isVertical),typeof ke.isVerticalGrid=="boolean"&&(d.value=ke.isVerticalGrid),fa(()=>{P.value=[...je],ie(),bi("بارگذاری شد",`گرید ${rt}×${ot} با موفقیت بارگذاری شد`)})):$t("خطا در ابعاد",`تعداد سلول‌ها (${je.length}) با ابعاد اعلام شده (${rt}×${ot}) مطابقت ندارد`):$t("خطا در فرمت فایل","فایل باید شامل آرایه‌ای معتبر از رنگ‌ها یا تصاویر باشد")}else if(Array.isArray(ke)){const je=ke;je.every(rt=>typeof rt=="string"&&(rt.match(/^#[0-9A-Fa-f]{6}$/)||rt.startsWith("/miyuki-beads-designer/beads/")))?je.length===i.value*s.value?(P.value=[...je],ie(),bi("بارگذاری شد",`گرید با ابعاد فعلی (${i.value}×${s.value}) بارگذاری شد`)):$t("خطا در ابعاد",`تعداد سلول‌ها (${je.length}) با ابعاد فعلی (${i.value}×${s.value}) مطابقت ندارد. لطفاً ابعاد را تنظیم کنید یا از فایل با فرمت جدید استفاده کنید.`):$t("خطا در فرمت فایل","فایل باید شامل آرایه‌ای معتبر از رنگ‌ها یا تصاویر باشد")}else $t("خطا در فرمت فایل","فرمت فایل نامعتبر است. فایل باید شامل آرایه‌ای از رنگ‌ها/تصاویر یا آبجکتی با grid، rows و cols باشد.")}catch(Ae){$t("خطا در خواندن فایل","خطا در خواندن فایل: "+Ae.message),console.error("Error parsing text file:",Ae)}},F.readAsText(w)}}Nn([i,s],()=>{const G=i.value*s.value;P.value.length!==G&&(P.value=Array(G).fill("#ffffff"),U.value=[],Y.value=!1,ie())},{immediate:!0}),Nn(P,()=>{setTimeout(()=>{try{const G={grid:P.value,rows:i.value,cols:s.value,recentColors:l.value,recentImages:_.value,timestamp:new Date().toISOString()};localStorage.setItem("gridEditorData",JSON.stringify(G)),c.value=G.timestamp}catch(G){console.error("Error auto-saving grid:",G)}},1e3)},{deep:!0}),Nn(u,G=>{try{localStorage.setItem("gridEditor_isVertical",JSON.stringify(G)),console.log("isVertical saved",G)}catch(w){console.error("Error saving isVertical to localStorage:",w)}},{immediate:!1});function oe(G){ee.value=G,U.value=[],G!=="paste"&&(Y.value=!1)}function me(){return D.value&&D.value.length>0&&N.value.width>0}function Ze(G){q=!0;const w=le(G);ee.value==="paint"?X(w):ee.value==="fill"?K(w,P.value[w],ge()):ee.value==="select"&&(xe=w,U.value=[w],Me=!0)}function R(){q&&ie(),q=!1,xe=null}function g(G){if(!q)return;const w=le(G);ee.value==="paint"?X(w):ee.value==="select"&&Me&&(U.value=Z(xe,w))}function V(G){G.preventDefault();const w=G.touches;if(Le=w.length>1,w.length===1){const F=w[0],pe=document.elementFromPoint(F.clientX,F.clientY);if(pe&&pe.classList.contains("cell")){const Ae=Array.from(pe.parentNode.children).indexOf(pe);_t=Ae,Ge=!0,ee.value==="paint"?X(Ae):ee.value==="fill"?(K(Ae,P.value[Ae],ge()),ie()):ee.value==="select"&&(xe=Ae,U.value=[Ae],Me=!0)}}else Ge=!1}function j(G){const w=G.touches;if(w.length===1&&Ge&&!Le){G.preventDefault();const F=w[0],pe=document.elementFromPoint(F.clientX,F.clientY);if(pe&&pe.classList.contains("cell")){const Ae=Array.from(pe.parentNode.children).indexOf(pe);Ae!==_t&&(_t=Ae,ee.value==="paint"?X(Ae):ee.value==="select"&&Me&&(U.value=Z(xe,Ae)))}}else w.length>1&&(Le=!0,Ge=!1)}function se(){Ge&&!Le&&ee.value==="paint"&&ie(),Ge=!1,Le=!1,_t=-1,xe=null,Me=!1}function X(G){h.value==="color"?(P.value[G]=a.value,te(a.value)):h.value==="image"&&v.value&&(P.value[G]=v.value.url,ce(v.value))}function ge(){return h.value==="color"?a.value:h.value==="image"&&v.value?v.value.url:a.value}function te(G){const w=l.value.indexOf(G);w>-1&&l.value.splice(w,1),l.value.unshift(G),l.value.length>10&&(l.value=l.value.slice(0,10))}function ce(G){const w=_.value.findIndex(F=>F.url===G.url);w>-1&&_.value.splice(w,1),_.value.unshift(G),_.value.length>10&&(_.value=_.value.slice(0,10))}function de(G){v.value=G,ce(G)}function Pe(G){const w=_.value.findIndex(F=>F.url===G.url);w>-1&&_.value.splice(w,1)}async function S(){(await xc("پاک کردن تصاویر","آیا می‌خواهید تمام تصاویر اخیر پاک شوند؟")).isConfirmed&&(_.value=[])}function x(G){const w=l.value.indexOf(G);w>-1&&l.value.splice(w,1)}async function k(){(await xc("پاک کردن رنگ‌ها","آیا می‌خواهید تمام رنگ‌های اخیر پاک شوند؟")).isConfirmed&&(l.value=[])}function K(G,w,F){if(w===F)return;const pe=[G],Ae=new Set;for(;pe.length;){const ke=pe.pop();if(Ae.has(ke)||P.value[ke]!==w)continue;Ae.add(ke),P.value[ke]=F;const je=ke%i.value,rt=Math.floor(ke/i.value);if(je>0){const ot=ke-1;!Ae.has(ot)&&P.value[ot]===w&&pe.push(ot)}if(je<i.value-1){const ot=ke+1;!Ae.has(ot)&&P.value[ot]===w&&pe.push(ot)}if(rt>0){const ot=ke-i.value;!Ae.has(ot)&&P.value[ot]===w&&pe.push(ot)}if(rt<s.value-1){const ot=ke+i.value;!Ae.has(ot)&&P.value[ot]===w&&pe.push(ot)}}te(F)}function le(G){const w=G.target;return Array.from(w.parentNode.children).indexOf(w)}function Z(G,w){const F=G%i.value,pe=Math.floor(G/i.value),Ae=w%i.value,ke=Math.floor(w/i.value),je=Math.min(F,Ae),rt=Math.max(F,Ae),ot=Math.min(pe,ke),Xe=Math.max(pe,ke),bt=[];for(let Gt=ot;Gt<=Xe;Gt++)for(let Ln=je;Ln<=rt;Ln++){const is=Gt*i.value+Ln;is>=0&&is<P.value.length&&bt.push(is)}return bt}function Ie(G){if(ee.value==="paint")X(G),ie();else if(ee.value==="fill")K(G,P.value[G],ge()),ie();else if(ee.value==="paste"&&Y.value){const w=G%i.value,F=Math.floor(G/i.value);J.value={x:w,y:F},ct()}}function ve(){if(U.value.length===0){$t("خطا","ابتدا یک ناحیه انتخاب کنید");return}const G=i.value,w=Math.min(...U.value.map(rt=>rt%G)),F=Math.max(...U.value.map(rt=>rt%G)),pe=Math.min(...U.value.map(rt=>Math.floor(rt/G))),Ae=Math.max(...U.value.map(rt=>Math.floor(rt/G))),ke=F-w+1,je=Ae-pe+1;N.value={width:ke,height:je},D.value=[];for(let rt=0;rt<je;rt++){const ot=[];for(let Xe=0;Xe<ke;Xe++){const bt=(pe+rt)*G+(w+Xe);ot.push(P.value[bt])}D.value.push(ot)}}function De(){if(U.value.length===0){$t("خطا","ابتدا یک ناحیه انتخاب کنید");return}ve(),U.value.forEach(G=>P.value[G]="#ffffff"),ie()}function Ue(){if(!me()){$t("خطا","هیچ چیزی برای چسباندن وجود ندارد");return}let G=0,w=0;if(U.value.length>0){const F=i.value;G=Math.min(...U.value.map(pe=>pe%F)),w=Math.min(...U.value.map(pe=>Math.floor(pe/F)))}else G=Math.floor((i.value-N.value.width)/2),w=Math.floor((s.value-N.value.height)/2);for(let F=0;F<N.value.height;F++)for(let pe=0;pe<N.value.width;pe++){const Ae=G+pe,ke=w+F;if(Ae>=0&&Ae<i.value&&ke>=0&&ke<s.value){const je=ke*i.value+Ae;D.value[F]&&D.value[F][pe]&&(P.value[je]=D.value[F][pe])}}ie()}function _e(){U.value=[],Me=!1}function Ce(){if(U.value.length===0){$t("خطا","ابتدا یک ناحیه انتخاب کنید");return}try{const G=i.value,w=Math.min(...U.value.map(Xe=>Xe%G)),F=Math.max(...U.value.map(Xe=>Xe%G)),pe=Math.min(...U.value.map(Xe=>Math.floor(Xe/G))),Ae=Math.max(...U.value.map(Xe=>Math.floor(Xe/G))),ke=F-w+1,je=Ae-pe+1,rt=[];for(let Xe=0;Xe<je;Xe++){const bt=[];for(let Gt=0;Gt<ke;Gt++){const Ln=(pe+Xe)*G+(w+Gt);U.value.includes(Ln)?bt.push(P.value[Ln]):bt.push("#ffffff")}rt.push(bt)}const ot=rt.map(Xe=>Xe.reverse());for(let Xe=0;Xe<je;Xe++)for(let bt=0;bt<ke;bt++){const Gt=(pe+Xe)*G+(w+bt);U.value.includes(Gt)&&(P.value[Gt]=ot[Xe][bt])}ie(),bi("آینه شد","طرح انتخاب شده با موفقیت آینه شد")}catch(G){$t("خطا در آینه کردن","خطا در آینه کردن طرح: "+G.message),console.error("Error mirroring selection:",G)}}function Be(){if(U.value.length===0){$t("خطا","ابتدا یک ناحیه انتخاب کنید");return}try{const G=i.value,w=Math.min(...U.value.map(Xe=>Xe%G)),F=Math.max(...U.value.map(Xe=>Xe%G)),pe=Math.min(...U.value.map(Xe=>Math.floor(Xe/G))),Ae=Math.max(...U.value.map(Xe=>Math.floor(Xe/G))),ke=F-w+1,je=Ae-pe+1,rt=[];for(let Xe=0;Xe<je;Xe++){const bt=[];for(let Gt=0;Gt<ke;Gt++){const Ln=(pe+Xe)*G+(w+Gt);U.value.includes(Ln)?bt.push(P.value[Ln]):bt.push("#ffffff")}rt.push(bt)}const ot=rt.reverse();for(let Xe=0;Xe<je;Xe++)for(let bt=0;bt<ke;bt++){const Gt=(pe+Xe)*G+(w+bt);U.value.includes(Gt)&&(P.value[Gt]=ot[Xe][bt])}ie(),bi("آینه عمودی شد","طرح انتخاب شده با موفقیت به صورت عمودی آینه شد")}catch(G){$t("خطا در آینه عمودی","خطا در آینه عمودی کردن طرح: "+G.message),console.error("Error vertical mirroring selection:",G)}}function Oe(){if(!me()){$t("خطا","هیچ چیزی برای چسباندن وجود ندارد");return}const G=Math.floor((i.value-N.value.width)/2),w=Math.floor((s.value-N.value.height)/2);for(let F=0;F<N.value.height;F++)for(let pe=0;pe<N.value.width;pe++){const Ae=G+pe,ke=w+F;if(Ae>=0&&Ae<i.value&&ke>=0&&ke<s.value){const je=ke*i.value+Ae;D.value[F]&&D.value[F][pe]&&(P.value[je]=D.value[F][pe])}}ie()}function Te(){if(!me()){$t("خطا","هیچ چیزی برای چسباندن وجود ندارد");return}Y.value=!0,ee.value="paste",U.value=[],To("انتخاب موقعیت","حالا روی صفحه کلیک کنید تا موقعیت چسباندن را انتخاب کنید")}function ct(){if(!me()){$t("خطا","هیچ چیزی برای چسباندن وجود ندارد");return}for(let G=0;G<N.value.height;G++)for(let w=0;w<N.value.width;w++){const F=J.value.x+w,pe=J.value.y+G;if(F>=0&&F<i.value&&pe>=0&&pe<s.value){const Ae=pe*i.value+F;D.value[G]&&D.value[G][w]&&(P.value[Ae]=D.value[G][w])}}ie(),Y.value=!1,ee.value="paint"}function z(){Y.value=!1,ee.value="paint",To("لغو شد","حالت چسباندن لغو شد")}async function we(G,w,F,pe,Ae,ke){if(ke.startsWith("/miyuki-beads-designer/beads/"))try{const je=new Image;je.crossOrigin="anonymous",await new Promise((rt,ot)=>{je.onload=rt,je.onerror=ot,je.src=ke}),G.drawImage(je,w,F,pe,Ae)}catch(je){console.warn("Failed to load image:",ke,je),G.fillStyle="#cccccc",G.fillRect(w,F,pe,Ae)}else G.fillStyle=ke,G.fillRect(w,F,pe,Ae)}async function Ee(){try{To("در حال پردازش...","لطفاً صبر کنید، در حال ایجاد عکس...");const G=document.createElement("canvas"),w=G.getContext("2d"),F=20,pe=i.value*r.value+F*2,Ae=s.value*o.value+F*2;G.width=pe,G.height=Ae,w.fillStyle="#ffffff",w.fillRect(0,0,pe,Ae);for(let ke=0;ke<s.value;ke++)for(let je=0;je<i.value;je++){const rt=ke*i.value+je,ot=P.value[rt];if(ot){const Xe=F+je*r.value,bt=F+ke*o.value;await we(w,Xe,bt,r.value,o.value,ot),w.strokeStyle="#e0e0e0",w.lineWidth=.5,w.strokeRect(Xe,bt,r.value,o.value)}}w.fillStyle="#000000",w.font="16px Arial",w.textAlign="center",w.fillText(`Grid: ${i.value}×${s.value}`,pe/2,F/2+10),G.toBlob(ke=>{const je=URL.createObjectURL(ke),rt=document.createElement("a");rt.href=je,rt.download=`grid_${i.value}x${s.value}_${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.png`,document.body.appendChild(rt),rt.click(),document.body.removeChild(rt),URL.revokeObjectURL(je),bi("موفقیت","عکس با موفقیت دانلود شد!")},"image/png")}catch(G){$t("خطا در خروجی","خطا در ایجاد عکس: "+G.message),console.error("Error exporting grid as image:",G)}}async function Fe(){try{To("در حال پردازش...","لطفاً صبر کنید، در حال ایجاد عکس HD...");const G=document.createElement("canvas"),w=G.getContext("2d"),F=r.value*2,pe=o.value*2,Ae=40,ke=i.value*F+Ae*2,je=s.value*pe+Ae*2;G.width=ke,G.height=je,w.fillStyle="#ffffff",w.fillRect(0,0,ke,je);for(let ot=0;ot<s.value;ot++)for(let Xe=0;Xe<i.value;Xe++){const bt=ot*i.value+Xe,Gt=P.value[bt];if(Gt){const Ln=Ae+Xe*F,is=Ae+ot*pe;await we(w,Ln,is,F,pe,Gt),w.strokeStyle="#d0d0d0",w.lineWidth=1,w.strokeRect(Ln,is,F,pe)}}w.fillStyle="#000000",w.font="bold 24px Arial",w.textAlign="center",w.fillText(`Grid: ${i.value}×${s.value}`,ke/2,Ae/2+20),w.font="16px Arial",w.fillStyle="#666666";const rt=new Date().toLocaleString("fa-IR");w.fillText(rt,ke/2,je-Ae/2),G.toBlob(ot=>{const Xe=URL.createObjectURL(ot),bt=document.createElement("a");bt.href=Xe,bt.download=`grid_HD_${i.value}x${s.value}_${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.png`,document.body.appendChild(bt),bt.click(),document.body.removeChild(bt),URL.revokeObjectURL(Xe),bi("موفقیت","عکس HD با موفقیت دانلود شد!")},"image/png",1)}catch(G){$t("خطا در خروجی","خطا در ایجاد عکس HD: "+G.message),console.error("Error exporting grid as high quality image:",G)}}function be(){try{const G={grid:P.value,rows:i.value,cols:s.value,cellWidth:r.value,cellHeight:o.value,isVertical:u.value,isVerticalGrid:d.value,timestamp:new Date().toISOString()},w=JSON.stringify(G,null,2),F=new Blob([w],{type:"text/plain;charset=utf-8"}),pe=URL.createObjectURL(F),Ae=document.createElement("a");Ae.href=pe,Ae.download=`grid_${i.value}x${s.value}_${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.txt`,document.body.appendChild(Ae),Ae.click(),document.body.removeChild(Ae),URL.revokeObjectURL(pe),bi("موفقیت","فایل TXT با موفقیت دانلود شد!")}catch(G){$t("خطا در خروجی","خطا در ایجاد فایل TXT: "+G.message),console.error("Error exporting grid as TXT:",G)}}function he(){const G=[];for(let w=0;w<s.value;w++){const F=[];for(let pe=0;pe<i.value;pe++)F.push(P.value[w*i.value+pe]);G.push(F)}return G}function Ve(G){const w=G.target.files[0];f.value=URL.createObjectURL(w)}const tt=st("#ffffff"),dt=st("color"),ft=st(null);async function Dn(){let G,w;if(dt.value==="color")G=tt.value,w=`آیا می‌خواهید تمام مهره‌ها به رنگ ${G} تغییر یابند؟ این عملیات غیرقابل برگشت است.`;else if(dt.value==="image"&&ft.value)G=ft.value.url,w=`آیا می‌خواهید تمام مهره‌ها به تصویر ${ft.value.displayName} تغییر یابند؟ این عملیات غیرقابل برگشت است.`;else{$t("خطا","لطفاً یک رنگ یا تصویر انتخاب کنید");return}if((await xc("تغییر تمام مهره‌ها",w)).isConfirmed){const pe=i.value*s.value;for(let Ae=0;Ae<pe;Ae++)P.value[Ae]=G;ie(),dt.value==="color"?(te(G),bi("تغییر رنگ",`تمام مهره‌ها به رنگ ${G} تغییر یافتند`)):(ce(ft.value),bi("تغییر تصویر",`تمام مهره‌ها به تصویر ${ft.value.displayName} تغییر یافتند`))}}return(G,w)=>(ze(),$e("div",uS,[b("div",dS,[b("button",{class:Je(["mobile-menu-btn",{active:p.value}]),onClick:M},w[58]||(w[58]=[b("span",{class:"menu-icon"},"☰",-1),b("span",{class:"menu-text"},"ابزارها",-1)]),2),w[59]||(w[59]=b("div",{class:"mobile-title"},"🎨 ویرایشگر شبکه",-1))]),A.value?(ze(),$e("div",fS,[b("div",hS,[b("h4",pS,at(I(A.value)),1),b("button",{class:"unpin-btn",title:"Unpin Section",onClick:L}," ✕ ")]),b("div",mS,[A.value==="dimensions"?(ze(),$e("div",gS,[b("div",vS,[b("label",_S,[w[60]||(w[60]=b("span",{class:"dimension-text"},"ستون ها:",-1)),qt(b("input",{"onUpdate:modelValue":w[0]||(w[0]=F=>i.value=F),type:"number",min:"1",class:"dimension-input"},null,512),[[Jt,i.value,void 0,{number:!0}]])]),b("label",bS,[w[61]||(w[61]=b("span",{class:"dimension-text"},"ردیف ها:",-1)),qt(b("input",{"onUpdate:modelValue":w[1]||(w[1]=F=>s.value=F),type:"number",min:"1",class:"dimension-input"},null,512),[[Jt,s.value,void 0,{number:!0}]])])]),b("div",xS,[w[64]||(w[64]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 📏 اندازه سلول ",-1)),b("div",yS,[b("label",wS,[w[62]||(w[62]=b("span",{class:"dimension-text"},"عرض:",-1)),qt(b("input",{"onUpdate:modelValue":w[2]||(w[2]=F=>r.value=F),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[Jt,r.value,void 0,{number:!0}]])]),b("label",SS,[w[63]||(w[63]=b("span",{class:"dimension-text"},"ارتفاع:",-1)),qt(b("input",{"onUpdate:modelValue":w[3]||(w[3]=F=>o.value=F),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[Jt,o.value,void 0,{number:!0}]])])])])])):Dt("",!0),A.value==="direction"?(ze(),$e("div",MS,[b("div",ES,[b("button",{class:Je(["direction-btn",{active:u.value}]),onClick:w[4]||(w[4]=F=>u.value=!u.value)},at(u.value?"عمودی":"افقی"),3)]),b("div",TS,[b("button",{class:Je(["direction-btn",{active:d.value}]),onClick:w[5]||(w[5]=F=>d.value=!d.value)},at(d.value?"گرید عمودی":"گرید افقی"),3)])])):Dt("",!0),A.value==="color"?(ze(),$e("div",AS,[b("div",CS,[qt(b("input",{"onUpdate:modelValue":w[6]||(w[6]=F=>a.value=F),type:"color",class:"color-picker"},null,512),[[Jt,a.value]]),b("span",RS,at(a.value),1)]),b("div",PS,[w[65]||(w[65]=b("h4",{class:"text-sm font-semibold text-gray-700"},"🔄 رنگ‌های اخیر",-1)),l.value.length>0?(ze(),$e("button",{key:0,class:"clear-colors-btn",title:"پاک کردن تمام رنگ‌ها",onClick:k}," 🗑️ پاک کردن ")):Dt("",!0)]),b("div",DS,[(ze(!0),$e(Ht,null,En(l.value,F=>(ze(),$e("div",{key:F,class:"color-swatch",style:jn({backgroundColor:F}),title:F,onClick:pe=>a.value=F},[b("button",{class:"remove-color-btn",onClick:So(pe=>x(F),["stop"])}," × ",8,IS)],12,LS))),128))])])):Dt("",!0),A.value==="mode"?(ze(),$e("div",US,[b("div",OS,[b("button",{class:Je(["mode-btn",{active:h.value==="color"}]),onClick:w[7]||(w[7]=F=>h.value="color")}," 🎨 رنگ ",2),b("button",{class:Je(["mode-btn",{active:h.value==="image"}]),onClick:w[8]||(w[8]=F=>h.value="image")}," 🖼️ تصویر ",2)])])):Dt("",!0),A.value==="image"?(ze(),$e("div",NS,[b("div",FS,[b("div",kS,[(ze(!0),$e(Ht,null,En(m.value,F=>{var pe;return ze(),$e("div",{key:F.name,class:Je(["image-item",{selected:((pe=v.value)==null?void 0:pe.url)===F.url}]),onClick:Ae=>de(F)},[b("img",{src:F.url,alt:F.displayName,class:"bead-image"},null,8,HS),b("span",zS,at(F.displayName),1)],10,BS)}),128))])])])):Dt("",!0),A.value==="tools"?(ze(),$e("div",VS,[b("div",GS,[b("button",{class:Je(["tool-btn primary",{active:ee.value==="paint"}]),onClick:w[9]||(w[9]=F=>oe("paint"))}," 🖌️ Paint ",2),b("button",{class:Je(["tool-btn primary",{active:ee.value==="fill"}]),onClick:w[10]||(w[10]=F=>oe("fill"))}," 🪣 Fill ",2),b("button",{class:Je(["tool-btn secondary",{active:ee.value==="select"}]),onClick:w[11]||(w[11]=F=>oe("select"))}," 📐 Select ",2),b("button",{class:"tool-btn secondary",onClick:ve}," 📋 Copy "),b("button",{class:"tool-btn secondary",onClick:De}," ✂️ Cut "),b("button",{class:"tool-btn secondary",onClick:Ue}," 📥 Paste "),b("button",{class:"tool-btn secondary",onClick:Oe}," 📍 Paste at Center "),b("button",{class:"tool-btn secondary",disabled:!me(),onClick:Te}," 🎯 Select Paste Position ",8,WS),Y.value?(ze(),$e("button",{key:0,class:"tool-btn danger",onClick:z}," ❌ Cancel Paste ")):Dt("",!0),b("button",{class:"tool-btn secondary",onClick:_e}," 🗑️ Clear Selection "),b("button",{class:"tool-btn secondary",disabled:U.value.length===0,onClick:Ce}," 🔄 Mirror Selection ",8,$S),b("button",{class:"tool-btn secondary",disabled:U.value.length===0,onClick:Be}," ↕️ Mirror Selection Vertical ",8,XS),b("button",{class:"tool-btn secondary",onClick:ye}," ↩️ Undo "),b("button",{class:"tool-btn secondary",onClick:B}," ↪️ Redo ")])])):Dt("",!0),A.value==="export"?(ze(),$e("div",jS,[b("div",{class:"save-load-buttons"},[b("button",{class:"export-btn success",onClick:H}," 💾 ذخیره گرید "),b("button",{class:"export-btn info",onClick:T}," 📂 بارگذاری اخرین ذخیره ")]),b("div",qS,[b("button",{class:"export-btn primary",onClick:w[12]||(w[12]=F=>G.$emit("update-grid",he()))}," 🚀 ارسال به 3D "),b("button",{class:"export-btn success",onClick:w[13]||(w[13]=()=>Ee())}," 📷 خروجی عکس "),b("button",{class:"export-btn info",onClick:w[14]||(w[14]=()=>Fe())}," 🖼️ خروجی HD "),b("button",{class:"export-btn warning",onClick:be}," 📄 خروجی TXT ")])])):Dt("",!0)])])):Dt("",!0),b("div",{class:Je(["mobile-dropdown-panel",{open:p.value}])},[b("div",YS,[b("div",KS,[b("div",ZS,[b("label",QS,[w[66]||(w[66]=b("span",{class:"upload-text"},"📁 آپلود فایل txt grid",-1)),b("input",{type:"file",accept:".txt",class:"upload-input",onChange:ue},null,32)]),b("label",JS,[w[67]||(w[67]=b("span",{class:"upload-text"},"📁 آپلود تصویر",-1)),b("input",{type:"file",accept:"image/*",class:"upload-input",onChange:Ve},null,32)])]),f.value?(ze(),$e("div",eM,[b("img",{src:f.value,alt:"تصویر انتخاب شده",class:"preview-image"},null,8,tM)])):Dt("",!0)]),b("div",nM,[w[83]||(w[83]=b("div",{class:"controls-header"},[b("h3",{class:"mb-4 text-lg font-bold text-gray-800"}," 🎨 ابزارهای طراحی ")],-1)),b("div",iM,[b("div",sM,[b("div",rM,[w[68]||(w[68]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 📐 ابعاد شبکه ",-1)),b("button",{class:Je(["pin-btn",{pinned:A.value==="dimensions"}]),title:A.value==="dimensions"?"Unpin Section":"Pin Section",onClick:w[15]||(w[15]=F=>y("dimensions"))},at((A.value==="dimensions","📌")),11,oM)]),b("div",aM,[b("label",lM,[w[69]||(w[69]=b("span",{class:"dimension-text"},"ستون ها:",-1)),qt(b("input",{"onUpdate:modelValue":w[16]||(w[16]=F=>i.value=F),type:"number",min:"1",class:"dimension-input"},null,512),[[Jt,i.value,void 0,{number:!0}]])]),b("label",cM,[w[70]||(w[70]=b("span",{class:"dimension-text"},"ردیف ها:",-1)),qt(b("input",{"onUpdate:modelValue":w[17]||(w[17]=F=>s.value=F),type:"number",min:"1",class:"dimension-input"},null,512),[[Jt,s.value,void 0,{number:!0}]])])]),b("div",uM,[w[73]||(w[73]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 📏 اندازه سلول ",-1)),b("div",dM,[b("label",fM,[w[71]||(w[71]=b("span",{class:"dimension-text"},"عرض:",-1)),qt(b("input",{"onUpdate:modelValue":w[18]||(w[18]=F=>r.value=F),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[Jt,r.value,void 0,{number:!0}]])]),b("label",hM,[w[72]||(w[72]=b("span",{class:"dimension-text"},"ارتفاع:",-1)),qt(b("input",{"onUpdate:modelValue":w[19]||(w[19]=F=>o.value=F),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[Jt,o.value,void 0,{number:!0}]])])])])]),b("div",pM,[b("div",mM,[w[74]||(w[74]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"🔄 جهت",-1)),b("button",{class:Je(["pin-btn",{pinned:A.value==="direction"}]),title:A.value==="direction"?"Unpin Section":"Pin Section",onClick:w[20]||(w[20]=F=>y("direction"))},at((A.value==="direction","📌")),11,gM)]),b("div",vM,[b("button",{class:Je(["direction-btn",{active:u.value}]),onClick:w[21]||(w[21]=F=>u.value=!u.value)},at(u.value?"عمودی":"افقی"),3)]),b("div",_M,[b("button",{class:Je(["direction-btn",{active:d.value}]),onClick:w[22]||(w[22]=F=>d.value=!d.value)},at(d.value?"گرید عمودی":"گرید افقی"),3)])]),b("div",bM,[b("div",xM,[w[75]||(w[75]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🎨 انتخاب رنگ ",-1)),b("button",{class:Je(["pin-btn",{pinned:A.value==="color"}]),title:A.value==="color"?"Unpin Section":"Pin Section",onClick:w[23]||(w[23]=F=>y("color"))},at((A.value==="color","📌")),11,yM)]),b("div",wM,[qt(b("input",{"onUpdate:modelValue":w[24]||(w[24]=F=>a.value=F),type:"color",class:"color-picker"},null,512),[[Jt,a.value]]),b("span",SM,at(a.value),1)]),b("div",MM,[w[76]||(w[76]=b("h4",{class:"text-sm font-semibold text-gray-700"}," 🔄 رنگ‌های اخیر ",-1)),l.value.length>0?(ze(),$e("button",{key:0,class:"clear-colors-btn",title:"پاک کردن تمام رنگ‌ها",onClick:k}," 🗑️ پاک کردن ")):Dt("",!0)]),b("div",EM,[(ze(!0),$e(Ht,null,En(l.value,F=>(ze(),$e("div",{key:F,class:"color-swatch",style:jn({backgroundColor:F}),title:F,onClick:pe=>a.value=F},[b("button",{class:"remove-color-btn",onClick:So(pe=>x(F),["stop"])}," × ",8,AM)],12,TM))),128))])]),b("div",CM,[b("div",RM,[w[77]||(w[77]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🎨 حالت طراحی ",-1)),b("button",{class:Je(["pin-btn",{pinned:A.value==="mode"}]),title:A.value==="mode"?"Unpin Section":"Pin Section",onClick:w[25]||(w[25]=F=>y("mode"))},at((A.value==="mode","📌")),11,PM)]),b("div",DM,[b("button",{class:Je(["mode-btn",{active:h.value==="color"}]),onClick:w[26]||(w[26]=F=>h.value="color")}," 🎨 رنگ ",2),b("button",{class:Je(["mode-btn",{active:h.value==="image"}]),onClick:w[27]||(w[27]=F=>h.value="image")}," 🖼️ تصویر ",2)])]),h.value==="image"?(ze(),$e("div",LM,[b("div",IM,[w[78]||(w[78]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🖼️ انتخاب تصویر مهره ",-1)),b("button",{class:Je(["pin-btn",{pinned:A.value==="image"}]),title:A.value==="image"?"Unpin Section":"Pin Section",onClick:w[28]||(w[28]=F=>y("image"))},at((A.value==="image","📌")),11,UM)]),b("div",OM,[b("div",NM,[(ze(!0),$e(Ht,null,En(m.value,F=>{var pe;return ze(),$e("div",{key:F.name,class:Je(["image-item",{selected:((pe=v.value)==null?void 0:pe.url)===F.url}]),onClick:Ae=>de(F)},[b("img",{src:F.url,alt:F.displayName,class:"bead-image"},null,8,kM),b("span",BM,at(F.displayName),1)],10,FM)}),128))])]),_.value.length>0?(ze(),$e("div",HM,[b("div",{class:"recent-images-header"},[w[79]||(w[79]=b("h4",{class:"text-sm font-semibold text-gray-700"}," 🔄 تصاویر اخیر ",-1)),b("button",{class:"clear-images-btn",title:"پاک کردن تمام تصاویر",onClick:S}," 🗑️ پاک کردن ")]),b("div",zM,[(ze(!0),$e(Ht,null,En(_.value,F=>{var pe;return ze(),$e("div",{key:F.url,class:Je(["recent-image-item",{selected:((pe=v.value)==null?void 0:pe.url)===F.url}]),onClick:Ae=>de(F)},[b("img",{src:F.url,alt:F.displayName,class:"recent-bead-image"},null,8,GM),b("button",{class:"remove-image-btn",onClick:So(Ae=>Pe(F),["stop"])}," × ",8,WM)],10,VM)}),128))])])):Dt("",!0)])):Dt("",!0),b("div",$M,[b("div",XM,[w[80]||(w[80]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🛠️ ابزارها ",-1)),b("button",{class:Je(["pin-btn",{pinned:A.value==="tools"}]),title:A.value==="tools"?"Unpin Section":"Pin Section",onClick:w[29]||(w[29]=F=>y("tools"))},at((A.value==="tools","📌")),11,jM)]),b("div",qM,[b("button",{class:Je(["tool-btn primary",{active:ee.value==="paint"}]),onClick:w[30]||(w[30]=F=>oe("paint"))}," 🖌️ Paint ",2),b("button",{class:Je(["tool-btn primary",{active:ee.value==="fill"}]),onClick:w[31]||(w[31]=F=>oe("fill"))}," 🪣 Fill ",2),b("button",{class:Je(["tool-btn secondary",{active:ee.value==="select"}]),onClick:w[32]||(w[32]=F=>oe("select"))}," 📐 Select ",2),b("button",{class:"tool-btn secondary",onClick:ve}," 📋 Copy "),b("button",{class:"tool-btn secondary",onClick:De}," ✂️ Cut "),b("button",{class:"tool-btn secondary",onClick:Ue}," 📥 Paste "),b("button",{class:"tool-btn secondary",onClick:Oe}," 📍 Paste at Center "),b("button",{class:"tool-btn secondary",disabled:!me(),onClick:Te}," 🎯 Select Paste Position ",8,YM),Y.value?(ze(),$e("button",{key:0,class:"tool-btn danger",onClick:z}," ❌ Cancel Paste ")):Dt("",!0),b("button",{class:"tool-btn secondary",onClick:_e}," 🗑️ Clear Selection "),b("button",{class:"tool-btn secondary",disabled:U.value.length===0,onClick:Ce}," 🔄 Mirror Selection ",8,KM),b("button",{class:"tool-btn secondary",disabled:U.value.length===0,onClick:Be}," ↕️ Mirror Selection Vertical ",8,ZM),b("button",{class:"tool-btn secondary",onClick:ye}," ↩️ Undo "),b("button",{class:"tool-btn secondary",onClick:B}," ↪️ Redo ")]),b("div",QM,[w[81]||(w[81]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🎨 پس‌زمینه ",-1)),b("div",JM,[b("button",{class:Je(["mode-btn",{active:dt.value==="color"}]),onClick:w[33]||(w[33]=F=>dt.value="color")}," 🎨 رنگ ",2),b("button",{class:Je(["mode-btn",{active:dt.value==="image"}]),onClick:w[34]||(w[34]=F=>dt.value="image")}," 🖼️ تصویر ",2)]),dt.value==="color"?(ze(),$e("div",eE,[qt(b("input",{"onUpdate:modelValue":w[35]||(w[35]=F=>tt.value=F),type:"color",class:"color-picker",title:"انتخاب رنگ پس‌زمینه"},null,512),[[Jt,tt.value]]),b("button",{class:"tool-btn success",onClick:Dn}," 🎨 تغییر تمام مهره‌ها ")])):Dt("",!0),dt.value==="image"?(ze(),$e("div",tE,[b("div",nE,[b("div",iE,[(ze(!0),$e(Ht,null,En(m.value,F=>{var pe;return ze(),$e("div",{key:F.name,class:Je(["background-image-item",{selected:((pe=ft.value)==null?void 0:pe.url)===F.url}]),onClick:Ae=>ft.value=F},[b("img",{src:F.url,alt:F.displayName,class:"background-bead-image"},null,8,rE),b("span",oE,at(F.displayName),1)],10,sE)}),128))])]),b("button",{class:"tool-btn success",disabled:!ft.value,onClick:Dn}," 🖼️ تغییر تمام مهره‌ها ",8,aE)])):Dt("",!0)])]),b("div",lE,[b("div",cE,[w[82]||(w[82]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 📤 خروجی ",-1)),b("button",{class:Je(["pin-btn",{pinned:A.value==="export"}]),title:A.value==="export"?"Unpin Section":"Pin Section",onClick:w[36]||(w[36]=F=>y("export"))},at((A.value==="export","📌")),11,uE)]),b("div",{class:"save-load-buttons mb-3"},[b("button",{class:"export-btn success",onClick:H}," 💾 ذخیره گرید "),b("button",{class:"export-btn info",onClick:T}," 📂 بارگذاری اخرین ذخیره ")]),b("div",dE,[b("button",{class:"export-btn primary",onClick:w[37]||(w[37]=F=>G.$emit("update-grid",he()))}," 🚀 ارسال به 3D "),b("button",{class:"export-btn success",onClick:w[38]||(w[38]=()=>Ee())}," 📷 خروجی عکس "),b("button",{class:"export-btn info",onClick:w[39]||(w[39]=()=>Fe())}," 🖼️ خروجی HD "),b("button",{class:"export-btn warning",onClick:be}," 📄 خروجی TXT ")])])])])])],2),b("div",fE,[w[99]||(w[99]=b("div",{class:"controls-header"},[b("h3",{class:"mb-4 text-lg font-bold text-gray-800"},"🎨 ابزارهای طراحی")],-1)),b("div",hE,[b("div",pE,[w[89]||(w[89]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 📐 ابعاد شبکه ",-1)),b("div",mE,[b("label",gE,[w[84]||(w[84]=b("span",{class:"dimension-text"},"ستون ها:",-1)),qt(b("input",{"onUpdate:modelValue":w[40]||(w[40]=F=>i.value=F),type:"number",min:"1",class:"dimension-input"},null,512),[[Jt,i.value,void 0,{number:!0}]])]),b("label",vE,[w[85]||(w[85]=b("span",{class:"dimension-text"},"ردیف ها:",-1)),qt(b("input",{"onUpdate:modelValue":w[41]||(w[41]=F=>s.value=F),type:"number",min:"1",class:"dimension-input"},null,512),[[Jt,s.value,void 0,{number:!0}]])])]),b("div",_E,[w[88]||(w[88]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 📏 اندازه سلول ",-1)),b("div",bE,[b("label",xE,[w[86]||(w[86]=b("span",{class:"dimension-text"},"عرض:",-1)),qt(b("input",{"onUpdate:modelValue":w[42]||(w[42]=F=>r.value=F),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[Jt,r.value,void 0,{number:!0}]])]),b("label",yE,[w[87]||(w[87]=b("span",{class:"dimension-text"},"ارتفاع:",-1)),qt(b("input",{"onUpdate:modelValue":w[43]||(w[43]=F=>o.value=F),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[Jt,o.value,void 0,{number:!0}]])])])])]),b("div",wE,[w[90]||(w[90]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"🔄 جهت",-1)),b("div",SE,[b("button",{class:Je(["direction-btn",{active:u.value}]),onClick:w[44]||(w[44]=F=>u.value=!u.value)},at(u.value?"عمودی":"افقی"),3)]),b("div",ME,[b("button",{class:Je(["direction-btn",{active:d.value}]),onClick:w[45]||(w[45]=F=>d.value=!d.value)},at(d.value?"گرید عمودی":"گرید افقی"),3)])]),b("div",EE,[w[92]||(w[92]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🎨 انتخاب رنگ ",-1)),b("div",TE,[qt(b("input",{"onUpdate:modelValue":w[46]||(w[46]=F=>a.value=F),type:"color",class:"color-picker"},null,512),[[Jt,a.value]]),b("span",AE,at(a.value),1)]),b("div",CE,[w[91]||(w[91]=b("h4",{class:"text-sm font-semibold text-gray-700"},"🔄 رنگ‌های اخیر",-1)),l.value.length>0?(ze(),$e("button",{key:0,class:"clear-colors-btn",title:"پاک کردن تمام رنگ‌ها",onClick:k}," 🗑️ پاک کردن ")):Dt("",!0)]),b("div",RE,[(ze(!0),$e(Ht,null,En(l.value,F=>(ze(),$e("div",{key:F,class:"color-swatch",style:jn({backgroundColor:F}),title:F,onClick:pe=>a.value=F},[b("button",{class:"remove-color-btn",onClick:So(pe=>x(F),["stop"])}," × ",8,DE)],12,PE))),128))])]),b("div",LE,[w[93]||(w[93]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🎨 حالت طراحی ",-1)),b("div",IE,[b("button",{class:Je(["mode-btn",{active:h.value==="color"}]),onClick:w[47]||(w[47]=F=>h.value="color")}," 🎨 رنگ ",2),b("button",{class:Je(["mode-btn",{active:h.value==="image"}]),onClick:w[48]||(w[48]=F=>h.value="image")}," 🖼️ تصویر ",2)])]),h.value==="image"?(ze(),$e("div",UE,[w[95]||(w[95]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🖼️ انتخاب تصویر مهره ",-1)),b("div",OE,[b("div",NE,[(ze(!0),$e(Ht,null,En(m.value,F=>{var pe;return ze(),$e("div",{key:F.name,class:Je(["image-item",{selected:((pe=v.value)==null?void 0:pe.url)===F.url}]),onClick:Ae=>de(F)},[b("img",{src:F.url,alt:F.displayName,class:"bead-image"},null,8,kE),b("span",BE,at(F.displayName),1)],10,FE)}),128))])]),_.value.length>0?(ze(),$e("div",HE,[b("div",{class:"recent-images-header"},[w[94]||(w[94]=b("h4",{class:"text-sm font-semibold text-gray-700"}," 🔄 تصاویر اخیر ",-1)),b("button",{class:"clear-images-btn",title:"پاک کردن تمام تصاویر",onClick:S}," 🗑️ پاک کردن ")]),b("div",zE,[(ze(!0),$e(Ht,null,En(_.value,F=>{var pe;return ze(),$e("div",{key:F.url,class:Je(["recent-image-item",{selected:((pe=v.value)==null?void 0:pe.url)===F.url}]),onClick:Ae=>de(F)},[b("img",{src:F.url,alt:F.displayName,class:"recent-bead-image"},null,8,GE),b("button",{class:"remove-image-btn",onClick:So(Ae=>Pe(F),["stop"])}," × ",8,WE)],10,VE)}),128))])])):Dt("",!0)])):Dt("",!0),b("div",$E,[w[97]||(w[97]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"🛠️ ابزارها",-1)),b("div",XE,[b("button",{class:Je(["tool-btn primary",{active:ee.value==="paint"}]),onClick:w[49]||(w[49]=F=>oe("paint"))}," 🖌️ Paint ",2),b("button",{class:Je(["tool-btn primary",{active:ee.value==="fill"}]),onClick:w[50]||(w[50]=F=>oe("fill"))}," 🪣 Fill ",2),b("button",{class:Je(["tool-btn secondary",{active:ee.value==="select"}]),onClick:w[51]||(w[51]=F=>oe("select"))}," 📐 Select ",2),b("button",{class:"tool-btn secondary",onClick:ve}," 📋 Copy "),b("button",{class:"tool-btn secondary",onClick:De}," ✂️ Cut "),b("button",{class:"tool-btn secondary",onClick:Ue}," 📥 Paste "),b("button",{class:"tool-btn secondary",onClick:Oe}," 📍 Paste at Center "),b("button",{class:"tool-btn secondary",disabled:!me(),onClick:Te}," 🎯 Select Paste Position ",8,jE),Y.value?(ze(),$e("button",{key:0,class:"tool-btn danger",onClick:z}," ❌ Cancel Paste ")):Dt("",!0),b("button",{class:"tool-btn secondary",onClick:_e}," 🗑️ Clear Selection "),b("button",{class:"tool-btn secondary",disabled:U.value.length===0,onClick:Ce}," 🔄 Mirror Selection ",8,qE),b("button",{class:"tool-btn secondary",disabled:U.value.length===0,onClick:Be}," ↕️ Mirror Selection Vertical ",8,YE),b("button",{class:"tool-btn secondary",onClick:ye}," ↩️ Undo "),b("button",{class:"tool-btn secondary",onClick:B}," ↪️ Redo ")]),b("div",KE,[w[96]||(w[96]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🎨 پس‌زمینه ",-1)),b("div",ZE,[b("button",{class:Je(["mode-btn",{active:dt.value==="color"}]),onClick:w[52]||(w[52]=F=>dt.value="color")}," 🎨 رنگ ",2),b("button",{class:Je(["mode-btn",{active:dt.value==="image"}]),onClick:w[53]||(w[53]=F=>dt.value="image")}," 🖼️ تصویر ",2)]),dt.value==="color"?(ze(),$e("div",QE,[qt(b("input",{"onUpdate:modelValue":w[54]||(w[54]=F=>tt.value=F),type:"color",class:"color-picker",title:"انتخاب رنگ پس‌زمینه"},null,512),[[Jt,tt.value]]),b("button",{class:"tool-btn success",onClick:Dn}," 🎨 تغییر تمام مهره‌ها ")])):Dt("",!0),dt.value==="image"?(ze(),$e("div",JE,[b("div",eT,[b("div",tT,[(ze(!0),$e(Ht,null,En(m.value,F=>{var pe;return ze(),$e("div",{key:F.name,class:Je(["background-image-item",{selected:((pe=ft.value)==null?void 0:pe.url)===F.url}]),onClick:Ae=>ft.value=F},[b("img",{src:F.url,alt:F.displayName,class:"background-bead-image"},null,8,iT),b("span",sT,at(F.displayName),1)],10,nT)}),128))])]),b("button",{class:"tool-btn success",disabled:!ft.value,onClick:Dn}," 🖼️ تغییر تمام مهره‌ها ",8,rT)])):Dt("",!0)])]),b("div",oT,[w[98]||(w[98]=b("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"📤 خروجی",-1)),b("div",{class:"save-load-buttons mb-3"},[b("button",{class:"export-btn success",onClick:H}," 💾 ذخیره گرید "),b("button",{class:"export-btn info",onClick:T}," 📂 بارگذاری اخرین ذخیره ")]),b("div",aT,[b("button",{class:"export-btn primary",onClick:w[55]||(w[55]=F=>G.$emit("update-grid",he()))}," 🚀 ارسال به 3D "),b("button",{class:"export-btn success",onClick:w[56]||(w[56]=()=>Ee())}," 📷 خروجی عکس "),b("button",{class:"export-btn info",onClick:w[57]||(w[57]=()=>Fe())}," 🖼️ خروجی HD "),b("button",{class:"export-btn warning",onClick:be}," 📄 خروجی TXT ")])])])]),b("div",{class:Je(["grid-container max-md:min-h-[calc(100vh_-_310px)] md:max-h-[calc(100vh_-_200px)]",{"!flex-row":u.value,"!flex-col-reverse":!u.value,"pinned-active":A.value}])},[b("div",lT,[b("div",cT,[b("label",uT,[w[100]||(w[100]=b("span",{class:"upload-text"},"📁 آپلود فایل txt grid",-1)),b("input",{type:"file",accept:".txt",class:"upload-input",onChange:ue},null,32)]),b("label",dT,[w[101]||(w[101]=b("span",{class:"upload-text"},"📁 آپلود تصویر",-1)),b("input",{type:"file",accept:"image/*",class:"upload-input",onChange:Ve},null,32)])]),f.value?(ze(),$e("div",fT,[b("img",{src:f.value,alt:"تصویر انتخاب شده",class:"preview-image"},null,8,hT)])):Dt("",!0)]),b("div",{class:Je(["grid-wrapper",{"rotate-none":d.value,"z-10 h-fit! min-h-fit! w-fit! translate-x-[200%] translate-y-[10%] rotate-90":!d.value}])},[b("div",{class:"grid-item",style:jn({gridTemplateColumns:`repeat(${i.value}, ${r.value}px)`,gridAutoRows:`${o.value}px`}),onMousedown:Ze,onMouseup:R,onMouseleave:R,onMousemove:g,onTouchstart:V,onTouchmove:j,onTouchend:se,onTouchcancel:se},[(ze(!0),$e(Ht,null,En(P.value,(F,pe)=>(ze(),$e("div",{key:pe,class:Je(["cell",{"!border-red-200":pe==Math.floor(i.value*s.value/2)}]),style:jn({backgroundColor:F.startsWith("/miyuki-beads-designer/beads/")?"transparent":F,backgroundImage:F.startsWith("/miyuki-beads-designer/beads/")?`url(${F})`:"none",backgroundSize:"cover",backgroundPosition:"center",border:U.value.includes(pe)?"2px dashed #ff4757":"1px solid #ddd",width:`${r.value}px`,height:`${o.value}px`,minWidth:`${r.value}px`,minHeight:`${o.value}px`}),onClick:Ae=>Ie(pe)},null,14,pT))),128))],36)],2)],2)]))}},gT=pa(mT,[["__scopeId","data-v-28e95349"]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gd="179",zr={ROTATE:0,DOLLY:1,PAN:2},Lr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vT=0,hh=1,_T=2,$g=1,bT=2,Wi=3,Rs=0,kn=1,Ki=2,As=0,Vr=1,ph=2,mh=3,gh=4,xT=5,Xs=100,yT=101,wT=102,ST=103,MT=104,ET=200,TT=201,AT=202,CT=203,_u=204,bu=205,RT=206,PT=207,DT=208,LT=209,IT=210,UT=211,OT=212,NT=213,FT=214,xu=0,yu=1,wu=2,oo=3,Su=4,Mu=5,Eu=6,Tu=7,Xg=0,kT=1,BT=2,Cs=0,HT=1,zT=2,VT=3,GT=4,WT=5,$T=6,XT=7,jg=300,ao=301,lo=302,Au=303,Cu=304,Ql=306,Ru=1e3,qs=1001,Pu=1002,gi=1003,jT=1004,La=1005,Ai=1006,yc=1007,Ys=1008,Oi=1009,qg=1010,Yg=1011,Jo=1012,Wd=1013,or=1014,Zi=1015,ya=1016,$d=1017,Xd=1018,ea=1020,Kg=35902,Zg=1021,Qg=1022,hi=1023,ta=1026,na=1027,Jg=1028,jd=1029,ev=1030,qd=1031,Yd=1033,al=33776,ll=33777,cl=33778,ul=33779,Du=35840,Lu=35841,Iu=35842,Uu=35843,Ou=36196,Nu=37492,Fu=37496,ku=37808,Bu=37809,Hu=37810,zu=37811,Vu=37812,Gu=37813,Wu=37814,$u=37815,Xu=37816,ju=37817,qu=37818,Yu=37819,Ku=37820,Zu=37821,dl=36492,Qu=36494,Ju=36495,tv=36283,ed=36284,td=36285,nd=36286,qT=3200,YT=3201,nv=0,KT=1,vs="",pn="srgb",co="srgb-linear",Ll="linear",Lt="srgb",mr=7680,vh=519,ZT=512,QT=513,JT=514,iv=515,eA=516,tA=517,nA=518,iA=519,_h=35044,bh="300 es",Ci=2e3,Il=2001;class fr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fl=Math.PI/180,id=180/Math.PI;function wa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[t&255]+dn[t>>8&255]+dn[t>>16&255]+dn[t>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[n&63|128]+dn[n>>8&255]+"-"+dn[n>>16&255]+dn[n>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function gt(t,e,n){return Math.max(e,Math.min(n,t))}function sA(t,e){return(t%e+e)%e}function wc(t,e,n){return(1-n)*t+n*e}function Ao(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Un(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const rA={DEG2RAD:fl};class lt{constructor(e=0,n=0){lt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ar{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const f=r[o+0],h=r[o+1],v=r[o+2],_=r[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=h,e[n+2]=v,e[n+3]=_;return}if(d!==_||l!==f||c!==h||u!==v){let m=1-a;const p=l*f+c*h+u*v+d*_,A=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const L=Math.sqrt(M),I=Math.atan2(L,p*A);m=Math.sin(m*I)/L,a=Math.sin(a*I)/L}const y=a*A;if(l=l*m+f*y,c=c*m+h*y,u=u*m+v*y,d=d*m+_*y,m===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=L,c*=L,u*=L,d*=L}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],h=r[o+2],v=r[o+3];return e[n]=a*v+u*d+l*h-c*f,e[n+1]=l*v+u*f+c*d-a*h,e[n+2]=c*v+u*h+a*f-l*d,e[n+3]=u*v-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),h=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*h*v,this._y=c*h*d-f*u*v,this._z=c*u*v+f*h*d,this._w=c*u*d-f*h*v;break;case"YXZ":this._x=f*u*d+c*h*v,this._y=c*h*d-f*u*v,this._z=c*u*v-f*h*d,this._w=c*u*d+f*h*v;break;case"ZXY":this._x=f*u*d-c*h*v,this._y=c*h*d+f*u*v,this._z=c*u*v+f*h*d,this._w=c*u*d-f*h*v;break;case"ZYX":this._x=f*u*d-c*h*v,this._y=c*h*d+f*u*v,this._z=c*u*v-f*h*d,this._w=c*u*d+f*h*v;break;case"YZX":this._x=f*u*d+c*h*v,this._y=c*h*d+f*u*v,this._z=c*u*v-f*h*d,this._w=c*u*d-f*h*v;break;case"XZY":this._x=f*u*d-c*h*v,this._y=c*h*d-f*u*v,this._z=c*u*v+f*h*d,this._w=c*u*d+f*h*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-n;return this._w=h*o+n*this._w,this._x=h*i+n*this._x,this._y=h*s+n*this._y,this._z=h*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,n=0,i=0){Q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(xh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(xh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),d=2*(r*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sc.copy(this).projectOnVector(e),this.sub(Sc)}reflect(e){return this.sub(Sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sc=new Q,xh=new ar;class pt{constructor(e,n,i,s,r,o,a,l,c){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],v=i[8],_=s[0],m=s[3],p=s[6],A=s[1],M=s[4],y=s[7],L=s[2],I=s[5],P=s[8];return r[0]=o*_+a*A+l*L,r[3]=o*m+a*M+l*I,r[6]=o*p+a*y+l*P,r[1]=c*_+u*A+d*L,r[4]=c*m+u*M+d*I,r[7]=c*p+u*y+d*P,r[2]=f*_+h*A+v*L,r[5]=f*m+h*M+v*I,r[8]=f*p+h*y+v*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*r,h=c*r-o*l,v=n*d+i*f+s*h;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=d*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=f*_,e[4]=(u*n-s*l)*_,e[5]=(s*r-a*n)*_,e[6]=h*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*r)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Mc.makeScale(e,n)),this}rotate(e){return this.premultiply(Mc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Mc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mc=new pt;function sv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ia(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function oA(){const t=ia("canvas");return t.style.display="block",t}const yh={};function Gr(t){t in yh||(yh[t]=!0,console.warn(t))}function aA(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const wh=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sh=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lA(){const t={enabled:!0,workingColorSpace:co,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Lt&&(s.r=ts(s.r),s.g=ts(s.g),s.b=ts(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Lt&&(s.r=Wr(s.r),s.g=Wr(s.g),s.b=Wr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vs?Ll:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Gr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Gr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[co]:{primaries:e,whitePoint:i,transfer:Ll,toXYZ:wh,fromXYZ:Sh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:e,whitePoint:i,transfer:Lt,toXYZ:wh,fromXYZ:Sh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),t}const Mt=lA();function ts(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Wr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let gr;class cA{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{gr===void 0&&(gr=ia("canvas")),gr.width=e.width,gr.height=e.height;const s=gr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=gr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ia("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ts(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ts(n[i]/255)*255):n[i]=ts(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uA=0;class Kd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uA++}),this.uuid=wa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ec(s[o].image)):r.push(Ec(s[o]))}else r=Ec(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Ec(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?cA.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dA=0;const Tc=new Q;class Cn extends fr{constructor(e=Cn.DEFAULT_IMAGE,n=Cn.DEFAULT_MAPPING,i=qs,s=qs,r=Ai,o=Ys,a=hi,l=Oi,c=Cn.DEFAULT_ANISOTROPY,u=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dA++}),this.uuid=wa(),this.name="",this.source=new Kd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Tc).x}get height(){return this.source.getSize(Tc).y}get depth(){return this.source.getSize(Tc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ru:e.x=e.x-Math.floor(e.x);break;case qs:e.x=e.x<0?0:1;break;case Pu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ru:e.y=e.y-Math.floor(e.y);break;case qs:e.y=e.y<0?0:1;break;case Pu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=jg;Cn.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,n=0,i=0,s=1){jt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],v=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(v+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(c+1)/2,y=(h+1)/2,L=(p+1)/2,I=(u+f)/4,P=(d+_)/4,H=(v+m)/4;return M>y&&M>L?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=I/i,r=P/i):y>L?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=I/s,r=H/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=P/r,s=H/r),this.set(i,s,r,n),this}let A=Math.sqrt((m-v)*(m-v)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(m-v)/A,this.y=(d-_)/A,this.z=(f-u)/A,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this.w=gt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this.w=gt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fA extends fr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new jt(0,0,e,n),this.scissorTest=!1,this.viewport=new jt(0,0,e,n);const s={width:e,height:n,depth:i.depth},r=new Cn(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Ai,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new Kd(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lr extends fA{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class rv extends Cn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=gi,this.minFilter=gi,this.wrapR=qs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hA extends Cn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=gi,this.minFilter=gi,this.wrapR=qs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sa{constructor(e=new Q(1/0,1/0,1/0),n=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(oi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(oi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=oi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,oi):oi.fromBufferAttribute(r,o),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ia.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ia.copy(i.boundingBox)),Ia.applyMatrix4(e.matrixWorld),this.union(Ia)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),Ua.subVectors(this.max,Co),vr.subVectors(e.a,Co),_r.subVectors(e.b,Co),br.subVectors(e.c,Co),rs.subVectors(_r,vr),os.subVectors(br,_r),ks.subVectors(vr,br);let n=[0,-rs.z,rs.y,0,-os.z,os.y,0,-ks.z,ks.y,rs.z,0,-rs.x,os.z,0,-os.x,ks.z,0,-ks.x,-rs.y,rs.x,0,-os.y,os.x,0,-ks.y,ks.x,0];return!Ac(n,vr,_r,br,Ua)||(n=[1,0,0,0,1,0,0,0,1],!Ac(n,vr,_r,br,Ua))?!1:(Oa.crossVectors(rs,os),n=[Oa.x,Oa.y,Oa.z],Ac(n,vr,_r,br,Ua))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Bi=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],oi=new Q,Ia=new Sa,vr=new Q,_r=new Q,br=new Q,rs=new Q,os=new Q,ks=new Q,Co=new Q,Ua=new Q,Oa=new Q,Bs=new Q;function Ac(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){Bs.fromArray(t,r);const a=s.x*Math.abs(Bs.x)+s.y*Math.abs(Bs.y)+s.z*Math.abs(Bs.z),l=e.dot(Bs),c=n.dot(Bs),u=i.dot(Bs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const pA=new Sa,Ro=new Q,Cc=new Q;class Zd{constructor(e=new Q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):pA.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const n=Ro.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Ro,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(Cc)),this.expandByPoint(Ro.copy(e.center).sub(Cc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Hi=new Q,Rc=new Q,Na=new Q,as=new Q,Pc=new Q,Fa=new Q,Dc=new Q;class ov{constructor(e=new Q,n=new Q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Hi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,n),Hi.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Rc.copy(e).add(n).multiplyScalar(.5),Na.copy(n).sub(e).normalize(),as.copy(this.origin).sub(Rc);const r=e.distanceTo(n)*.5,o=-this.direction.dot(Na),a=as.dot(this.direction),l=-as.dot(Na),c=as.lengthSq(),u=Math.abs(1-o*o);let d,f,h,v;if(u>0)if(d=o*l-a,f=o*a-l,v=r*u,d>=0)if(f>=-v)if(f<=v){const _=1/u;d*=_,f*=_,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Rc).addScaledVector(Na,f),h}intersectSphere(e,n){Hi.subVectors(e.center,this.origin);const i=Hi.dot(this.direction),s=Hi.dot(Hi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,n,i,s,r){Pc.subVectors(n,e),Fa.subVectors(i,e),Dc.crossVectors(Pc,Fa);let o=this.direction.dot(Dc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;as.subVectors(this.origin,e);const l=a*this.direction.dot(Fa.crossVectors(as,Fa));if(l<0)return null;const c=a*this.direction.dot(Pc.cross(as));if(c<0||l+c>o)return null;const u=-a*as.dot(Dc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(e,n,i,s,r,o,a,l,c,u,d,f,h,v,_,m){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,d,f,h,v,_,m)}set(e,n,i,s,r,o,a,l,c,u,d,f,h,v,_,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=v,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/xr.setFromMatrixColumn(e,0).length(),r=1/xr.setFromMatrixColumn(e,1).length(),o=1/xr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,h=o*d,v=a*u,_=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=h+v*c,n[5]=f-_*c,n[9]=-a*l,n[2]=_-f*c,n[6]=v+h*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,v=c*u,_=c*d;n[0]=f+_*a,n[4]=v*a-h,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=h*a-v,n[6]=_+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,v=c*u,_=c*d;n[0]=f-_*a,n[4]=-o*d,n[8]=v+h*a,n[1]=h+v*a,n[5]=o*u,n[9]=_-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,h=o*d,v=a*u,_=a*d;n[0]=l*u,n[4]=v*c-h,n[8]=f*c+_,n[1]=l*d,n[5]=_*c+f,n[9]=h*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*c,v=a*l,_=a*c;n[0]=l*u,n[4]=_-f*d,n[8]=v*d+h,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*d+v,n[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,h=o*c,v=a*l,_=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+_,n[5]=o*u,n[9]=h*d-v,n[2]=v*d-h,n[6]=a*u,n[10]=_*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mA,e,gA)}lookAt(e,n,i){const s=this.elements;return Vn.subVectors(e,n),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),ls.crossVectors(i,Vn),ls.lengthSq()===0&&(Math.abs(i.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),ls.crossVectors(i,Vn)),ls.normalize(),ka.crossVectors(Vn,ls),s[0]=ls.x,s[4]=ka.x,s[8]=Vn.x,s[1]=ls.y,s[5]=ka.y,s[9]=Vn.y,s[2]=ls.z,s[6]=ka.z,s[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],v=i[2],_=i[6],m=i[10],p=i[14],A=i[3],M=i[7],y=i[11],L=i[15],I=s[0],P=s[4],H=s[8],T=s[12],C=s[1],O=s[5],U=s[9],D=s[13],N=s[2],J=s[6],Y=s[10],ee=s[14],q=s[3],xe=s[7],Me=s[11],Le=s[15];return r[0]=o*I+a*C+l*N+c*q,r[4]=o*P+a*O+l*J+c*xe,r[8]=o*H+a*U+l*Y+c*Me,r[12]=o*T+a*D+l*ee+c*Le,r[1]=u*I+d*C+f*N+h*q,r[5]=u*P+d*O+f*J+h*xe,r[9]=u*H+d*U+f*Y+h*Me,r[13]=u*T+d*D+f*ee+h*Le,r[2]=v*I+_*C+m*N+p*q,r[6]=v*P+_*O+m*J+p*xe,r[10]=v*H+_*U+m*Y+p*Me,r[14]=v*T+_*D+m*ee+p*Le,r[3]=A*I+M*C+y*N+L*q,r[7]=A*P+M*O+y*J+L*xe,r[11]=A*H+M*U+y*Y+L*Me,r[15]=A*T+M*D+y*ee+L*Le,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],v=e[3],_=e[7],m=e[11],p=e[15];return v*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*h-i*l*h)+_*(+n*l*h-n*c*f+r*o*f-s*o*h+s*c*u-r*l*u)+m*(+n*c*d-n*a*h-r*o*d+i*o*h+r*a*u-i*c*u)+p*(-s*a*u-n*l*d+n*a*f+s*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],v=e[12],_=e[13],m=e[14],p=e[15],A=d*m*c-_*f*c+_*l*h-a*m*h-d*l*p+a*f*p,M=v*f*c-u*m*c-v*l*h+o*m*h+u*l*p-o*f*p,y=u*_*c-v*d*c+v*a*h-o*_*h-u*a*p+o*d*p,L=v*d*l-u*_*l-v*a*f+o*_*f+u*a*m-o*d*m,I=n*A+i*M+s*y+r*L;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return e[0]=A*P,e[1]=(_*f*r-d*m*r-_*s*h+i*m*h+d*s*p-i*f*p)*P,e[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*P,e[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*h-i*l*h)*P,e[4]=M*P,e[5]=(u*m*r-v*f*r+v*s*h-n*m*h-u*s*p+n*f*p)*P,e[6]=(v*l*r-o*m*r-v*s*c+n*m*c+o*s*p-n*l*p)*P,e[7]=(o*f*r-u*l*r+u*s*c-n*f*c-o*s*h+n*l*h)*P,e[8]=y*P,e[9]=(v*d*r-u*_*r-v*i*h+n*_*h+u*i*p-n*d*p)*P,e[10]=(o*_*r-v*a*r+v*i*c-n*_*c-o*i*p+n*a*p)*P,e[11]=(u*a*r-o*d*r-u*i*c+n*d*c+o*i*h-n*a*h)*P,e[12]=L*P,e[13]=(u*_*s-v*d*s+v*i*f-n*_*f-u*i*m+n*d*m)*P,e[14]=(v*a*s-o*_*s-v*i*l+n*_*l+o*i*m-n*a*m)*P,e[15]=(o*d*s-u*a*s+u*i*l-n*d*l-o*i*f+n*a*f)*P,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,d=a+a,f=r*c,h=r*u,v=r*d,_=o*u,m=o*d,p=a*d,A=l*c,M=l*u,y=l*d,L=i.x,I=i.y,P=i.z;return s[0]=(1-(_+p))*L,s[1]=(h+y)*L,s[2]=(v-M)*L,s[3]=0,s[4]=(h-y)*I,s[5]=(1-(f+p))*I,s[6]=(m+A)*I,s[7]=0,s[8]=(v+M)*P,s[9]=(m-A)*P,s[10]=(1-(f+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let r=xr.set(s[0],s[1],s[2]).length();const o=xr.set(s[4],s[5],s[6]).length(),a=xr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ai.copy(this);const c=1/r,u=1/o,d=1/a;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=u,ai.elements[5]*=u,ai.elements[6]*=u,ai.elements[8]*=d,ai.elements[9]*=d,ai.elements[10]*=d,n.setFromRotationMatrix(ai),i.x=r,i.y=o,i.z=a,this}makePerspective(e,n,i,s,r,o,a=Ci,l=!1){const c=this.elements,u=2*r/(n-e),d=2*r/(i-s),f=(n+e)/(n-e),h=(i+s)/(i-s);let v,_;if(l)v=r/(o-r),_=o*r/(o-r);else if(a===Ci)v=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Il)v=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=Ci,l=!1){const c=this.elements,u=2/(n-e),d=2/(i-s),f=-(n+e)/(n-e),h=-(i+s)/(i-s);let v,_;if(l)v=1/(o-r),_=o/(o-r);else if(a===Ci)v=-2/(o-r),_=-(o+r)/(o-r);else if(a===Il)v=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const xr=new Q,ai=new Kt,mA=new Q(0,0,0),gA=new Q(1,1,1),ls=new Q,ka=new Q,Vn=new Q,Mh=new Kt,Eh=new ar;class Ni{constructor(e=0,n=0,i=0,s=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(n){case"XYZ":this._y=Math.asin(gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Mh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Eh.setFromEuler(this),this.setFromQuaternion(Eh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class av{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vA=0;const Th=new Q,yr=new ar,zi=new Kt,Ba=new Q,Po=new Q,_A=new Q,bA=new ar,Ah=new Q(1,0,0),Ch=new Q(0,1,0),Rh=new Q(0,0,1),Ph={type:"added"},xA={type:"removed"},wr={type:"childadded",child:null},Lc={type:"childremoved",child:null};class _n extends fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vA++}),this.uuid=wa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const e=new Q,n=new Ni,i=new ar,s=new Q(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Kt},normalMatrix:{value:new pt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new av,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return yr.setFromAxisAngle(e,n),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,n){return yr.setFromAxisAngle(e,n),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(Ah,e)}rotateY(e){return this.rotateOnAxis(Ch,e)}rotateZ(e){return this.rotateOnAxis(Rh,e)}translateOnAxis(e,n){return Th.copy(e).applyQuaternion(this.quaternion),this.position.add(Th.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ah,e)}translateY(e){return this.translateOnAxis(Ch,e)}translateZ(e){return this.translateOnAxis(Rh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ba.copy(e):Ba.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(Po,Ba,this.up):zi.lookAt(Ba,Po,this.up),this.quaternion.setFromRotationMatrix(zi),s&&(zi.extractRotation(s.matrixWorld),yr.setFromRotationMatrix(zi),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ph),wr.child=e,this.dispatchEvent(wr),wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(xA),Lc.child=e,this.dispatchEvent(Lc),Lc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ph),wr.child=e,this.dispatchEvent(wr),wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,e,_A),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,bA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}_n.DEFAULT_UP=new Q(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new Q,Vi=new Q,Ic=new Q,Gi=new Q,Sr=new Q,Mr=new Q,Dh=new Q,Uc=new Q,Oc=new Q,Nc=new Q,Fc=new jt,kc=new jt,Bc=new jt;class fi{constructor(e=new Q,n=new Q,i=new Q){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),li.subVectors(e,n),s.cross(li);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){li.subVectors(s,n),Vi.subVectors(i,n),Ic.subVectors(e,n);const o=li.dot(li),a=li.dot(Vi),l=li.dot(Ic),c=Vi.dot(Vi),u=Vi.dot(Ic),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,v=(o*u-a*l)*f;return r.set(1-h-v,v,h)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,Gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gi.x),l.addScaledVector(o,Gi.y),l.addScaledVector(a,Gi.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return Fc.setScalar(0),kc.setScalar(0),Bc.setScalar(0),Fc.fromBufferAttribute(e,n),kc.fromBufferAttribute(e,i),Bc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Fc,r.x),o.addScaledVector(kc,r.y),o.addScaledVector(Bc,r.z),o}static isFrontFacing(e,n,i,s){return li.subVectors(i,n),Vi.subVectors(e,n),li.cross(Vi).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),li.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return fi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return fi.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;Sr.subVectors(s,i),Mr.subVectors(r,i),Uc.subVectors(e,i);const l=Sr.dot(Uc),c=Mr.dot(Uc);if(l<=0&&c<=0)return n.copy(i);Oc.subVectors(e,s);const u=Sr.dot(Oc),d=Mr.dot(Oc);if(u>=0&&d<=u)return n.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Sr,o);Nc.subVectors(e,r);const h=Sr.dot(Nc),v=Mr.dot(Nc);if(v>=0&&h<=v)return n.copy(r);const _=h*c-l*v;if(_<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(Mr,a);const m=u*v-h*d;if(m<=0&&d-u>=0&&h-v>=0)return Dh.subVectors(r,s),a=(d-u)/(d-u+(h-v)),n.copy(s).addScaledVector(Dh,a);const p=1/(m+_+f);return o=_*p,a=f*p,n.copy(i).addScaledVector(Sr,o).addScaledVector(Mr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},Ha={h:0,s:0,l:0};function Hc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class yt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=Mt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Mt.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=Mt.workingColorSpace){if(e=sA(e,1),n=gt(n,0,1),i=gt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Hc(o,r,e+1/3),this.g=Hc(o,r,e),this.b=Hc(o,r,e-1/3)}return Mt.colorSpaceToWorking(this,s),this}setStyle(e,n=pn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=pn){const i=lv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}copyLinearToSRGB(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return Mt.workingToColorSpace(fn.copy(this),e),Math.round(gt(fn.r*255,0,255))*65536+Math.round(gt(fn.g*255,0,255))*256+Math.round(gt(fn.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Mt.workingColorSpace){Mt.workingToColorSpace(fn.copy(this),n);const i=fn.r,s=fn.g,r=fn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Mt.workingColorSpace){return Mt.workingToColorSpace(fn.copy(this),n),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=pn){Mt.workingToColorSpace(fn.copy(this),e);const n=fn.r,i=fn.g,s=fn.b;return e!==pn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(cs),this.setHSL(cs.h+e,cs.s+n,cs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(cs),e.getHSL(Ha);const i=wc(cs.h,Ha.h,n),s=wc(cs.s,Ha.s,n),r=wc(cs.l,Ha.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new yt;yt.NAMES=lv;let yA=0;class Ma extends fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yA++}),this.uuid=wa(),this.name="",this.type="Material",this.blending=Vr,this.side=Rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_u,this.blendDst=bu,this.blendEquation=Xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mr,this.stencilZFail=mr,this.stencilZPass=mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(i.blending=this.blending),this.side!==Rs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_u&&(i.blendSrc=this.blendSrc),this.blendDst!==bu&&(i.blendDst=this.blendDst),this.blendEquation!==Xs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==oo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==mr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==mr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cv extends Ma{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Xg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new Q,za=new lt;let wA=0;class Pi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wA++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=_h,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)za.fromBufferAttribute(this,n),za.applyMatrix3(e),this.setXY(n,za.x,za.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix3(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix4(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyNormalMatrix(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.transformDirection(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ao(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Un(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ao(n,this.array)),n}setX(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ao(n,this.array)),n}setY(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ao(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ao(n,this.array)),n}setW(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),i=Un(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),i=Un(i,this.array),s=Un(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),i=Un(i,this.array),s=Un(s,this.array),r=Un(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_h&&(e.usage=this.usage),e}}class uv extends Pi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class dv extends Pi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Di extends Pi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let SA=0;const ti=new Kt,zc=new _n,Er=new Q,Gn=new Sa,Do=new Sa,on=new Q;class Is extends fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SA++}),this.uuid=wa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sv(e)?dv:uv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new pt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,n,i){return ti.makeTranslation(e,n,i),this.applyMatrix4(ti),this}scale(e,n,i){return ti.makeScale(e,n,i),this.applyMatrix4(ti),this}lookAt(e){return zc.lookAt(e),zc.updateMatrix(),this.applyMatrix4(zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Di(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Gn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const i=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Do.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Gn.min,Do.min),Gn.expandByPoint(on),on.addVectors(Gn.max,Do.max),Gn.expandByPoint(on)):(Gn.expandByPoint(Do.min),Gn.expandByPoint(Do.max))}Gn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)on.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(on));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)on.fromBufferAttribute(a,c),l&&(Er.fromBufferAttribute(e,c),on.add(Er)),s=Math.max(s,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let H=0;H<i.count;H++)a[H]=new Q,l[H]=new Q;const c=new Q,u=new Q,d=new Q,f=new lt,h=new lt,v=new lt,_=new Q,m=new Q;function p(H,T,C){c.fromBufferAttribute(i,H),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,C),f.fromBufferAttribute(r,H),h.fromBufferAttribute(r,T),v.fromBufferAttribute(r,C),u.sub(c),d.sub(c),h.sub(f),v.sub(f);const O=1/(h.x*v.y-v.x*h.y);isFinite(O)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(d,-h.y).multiplyScalar(O),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-v.x).multiplyScalar(O),a[H].add(_),a[T].add(_),a[C].add(_),l[H].add(m),l[T].add(m),l[C].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let H=0,T=A.length;H<T;++H){const C=A[H],O=C.start,U=C.count;for(let D=O,N=O+U;D<N;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const M=new Q,y=new Q,L=new Q,I=new Q;function P(H){L.fromBufferAttribute(s,H),I.copy(L);const T=a[H];M.copy(T),M.sub(L.multiplyScalar(L.dot(T))).normalize(),y.crossVectors(I,T);const O=y.dot(l[H])<0?-1:1;o.setXYZW(H,M.x,M.y,M.z,O)}for(let H=0,T=A.length;H<T;++H){const C=A[H],O=C.start,U=C.count;for(let D=O,N=O+U;D<N;D+=3)P(e.getX(D+0)),P(e.getX(D+1)),P(e.getX(D+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const s=new Q,r=new Q,o=new Q,a=new Q,l=new Q,c=new Q,u=new Q,d=new Q;if(e)for(let f=0,h=e.count;f<h;f+=3){const v=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(n,v),r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=n.count;f<h;f+=3)s.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)on.fromBufferAttribute(e,n),on.normalize(),e.setXYZ(n,on.x,on.y,on.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,v=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let p=0;p<u;p++)f[v++]=c[h++]}return new Pi(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Is,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lh=new Kt,Hs=new ov,Va=new Zd,Ih=new Q,Ga=new Q,Wa=new Q,$a=new Q,Vc=new Q,Xa=new Q,Uh=new Q,ja=new Q;class pi extends _n{constructor(e=new Is,n=new cv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Xa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Vc.fromBufferAttribute(d,e),o?Xa.addScaledVector(Vc,u):Xa.addScaledVector(Vc.sub(n),u))}n.add(Xa)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(r),Hs.copy(e.ray).recast(e.near),!(Va.containsPoint(Hs.origin)===!1&&(Hs.intersectSphere(Va,Ih)===null||Hs.origin.distanceToSquared(Ih)>(e.far-e.near)**2))&&(Lh.copy(r).invert(),Hs.copy(e.ray).applyMatrix4(Lh),!(i.boundingBox!==null&&Hs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Hs)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){const m=f[v],p=o[m.materialIndex],A=Math.max(m.start,h.start),M=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let y=A,L=M;y<L;y+=3){const I=a.getX(y),P=a.getX(y+1),H=a.getX(y+2);s=qa(this,p,e,i,c,u,d,I,P,H),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const v=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let m=v,p=_;m<p;m+=3){const A=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);s=qa(this,o,e,i,c,u,d,A,M,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){const m=f[v],p=o[m.materialIndex],A=Math.max(m.start,h.start),M=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let y=A,L=M;y<L;y+=3){const I=y,P=y+1,H=y+2;s=qa(this,p,e,i,c,u,d,I,P,H),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const v=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=v,p=_;m<p;m+=3){const A=m,M=m+1,y=m+2;s=qa(this,o,e,i,c,u,d,A,M,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function MA(t,e,n,i,s,r,o,a){let l;if(e.side===kn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Rs,a),l===null)return null;ja.copy(a),ja.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ja);return c<n.near||c>n.far?null:{distance:c,point:ja.clone(),object:t}}function qa(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,Ga),t.getVertexPosition(l,Wa),t.getVertexPosition(c,$a);const u=MA(t,e,n,i,Ga,Wa,$a,Uh);if(u){const d=new Q;fi.getBarycoord(Uh,Ga,Wa,$a,d),s&&(u.uv=fi.getInterpolatedAttribute(s,a,l,c,d,new lt)),r&&(u.uv1=fi.getInterpolatedAttribute(r,a,l,c,d,new lt)),o&&(u.normal=fi.getInterpolatedAttribute(o,a,l,c,d,new Q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new Q,materialIndex:0};fi.getNormal(Ga,Wa,$a,f.normal),u.face=f,u.barycoord=d}return u}class Ea extends Is{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;v("z","y","x",-1,-1,i,n,e,o,r,0),v("z","y","x",1,-1,i,n,-e,o,r,1),v("x","z","y",1,1,e,i,n,s,o,2),v("x","z","y",1,-1,e,i,-n,s,o,3),v("x","y","z",1,-1,e,n,i,s,r,4),v("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Di(c,3)),this.setAttribute("normal",new Di(u,3)),this.setAttribute("uv",new Di(d,2));function v(_,m,p,A,M,y,L,I,P,H,T){const C=y/P,O=L/H,U=y/2,D=L/2,N=I/2,J=P+1,Y=H+1;let ee=0,q=0;const xe=new Q;for(let Me=0;Me<Y;Me++){const Le=Me*O-D;for(let Ge=0;Ge<J;Ge++){const _t=Ge*C-U;xe[_]=_t*A,xe[m]=Le*M,xe[p]=N,c.push(xe.x,xe.y,xe.z),xe[_]=0,xe[m]=0,xe[p]=I>0?1:-1,u.push(xe.x,xe.y,xe.z),d.push(Ge/P),d.push(1-Me/H),ee+=1}}for(let Me=0;Me<H;Me++)for(let Le=0;Le<P;Le++){const Ge=f+Le+J*Me,_t=f+Le+J*(Me+1),Ke=f+(Le+1)+J*(Me+1),ie=f+(Le+1)+J*Me;l.push(Ge,_t,ie),l.push(_t,Ke,ie),q+=6}a.addGroup(h,q,T),h+=q,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ea(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function uo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function Sn(t){const e={};for(let n=0;n<t.length;n++){const i=uo(t[n]);for(const s in i)e[s]=i[s]}return e}function EA(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function fv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const TA={clone:uo,merge:Sn};var AA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ps extends Ma{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AA,this.fragmentShader=CA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=uo(e.uniforms),this.uniformsGroups=EA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class hv extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const us=new Q,Oh=new lt,Nh=new lt;class Xn extends hv{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=id*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return id*2*Math.atan(Math.tan(fl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,n){return this.getViewBounds(e,Oh,Nh),n.subVectors(Nh,Oh)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(fl*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Tr=-90,Ar=1;class RA extends _n{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Xn(Tr,Ar,e,n);s.layers=this.layers,this.add(s);const r=new Xn(Tr,Ar,e,n);r.layers=this.layers,this.add(r);const o=new Xn(Tr,Ar,e,n);o.layers=this.layers,this.add(o);const a=new Xn(Tr,Ar,e,n);a.layers=this.layers,this.add(a);const l=new Xn(Tr,Ar,e,n);l.layers=this.layers,this.add(l);const c=new Xn(Tr,Ar,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Il)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,o),e.setRenderTarget(i,2,s),e.render(n,a),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(n,u),e.setRenderTarget(d,f,h),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class pv extends Cn{constructor(e=[],n=ao,i,s,r,o,a,l,c,u){super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class PA extends lr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new pv(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ea(5,5,5),r=new Ps({name:"CubemapFromEquirect",uniforms:uo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kn,blending:As});r.uniforms.tEquirect.value=n;const o=new pi(s,r),a=n.minFilter;return n.minFilter===Ys&&(n.minFilter=Ai),new RA(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}class Ya extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DA={type:"move"};class Gc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ya,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ya,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ya,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,v=.005;c.inputState.pinching&&f>h+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(DA)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ya;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class mv extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Wc=new Q,LA=new Q,IA=new pt;class ms{constructor(e=new Q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=Wc.subVectors(i,n).cross(LA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Wc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||IA.getNormalMatrix(e),s=this.coplanarPoint(Wc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zs=new Zd,UA=new lt(.5,.5),Ka=new Q;class Qd{constructor(e=new ms,n=new ms,i=new ms,s=new ms,r=new ms,o=new ms){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ci,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],f=r[6],h=r[7],v=r[8],_=r[9],m=r[10],p=r[11],A=r[12],M=r[13],y=r[14],L=r[15];if(s[0].setComponents(c-o,h-u,p-v,L-A).normalize(),s[1].setComponents(c+o,h+u,p+v,L+A).normalize(),s[2].setComponents(c+a,h+d,p+_,L+M).normalize(),s[3].setComponents(c-a,h-d,p-_,L-M).normalize(),i)s[4].setComponents(l,f,m,y).normalize(),s[5].setComponents(c-l,h-f,p-m,L-y).normalize();else if(s[4].setComponents(c-l,h-f,p-m,L-y).normalize(),n===Ci)s[5].setComponents(c+l,h+f,p+m,L+y).normalize();else if(n===Il)s[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(e){zs.center.set(0,0,0);const n=UA.distanceTo(e.center);return zs.radius=.7071067811865476+n,zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Ka.x=s.normal.x>0?e.max.x:e.min.x,Ka.y=s.normal.y>0?e.max.y:e.min.y,Ka.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gv extends Cn{constructor(e,n,i=or,s,r,o,a=gi,l=gi,c,u=ta,d=1){if(u!==ta&&u!==na)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Jl extends Is{constructor(e=1,n=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],f=[],h=[];let v=0;const _=[],m=i/2;let p=0;A(),o===!1&&(e>0&&M(!0),n>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Di(d,3)),this.setAttribute("normal",new Di(f,3)),this.setAttribute("uv",new Di(h,2));function A(){const y=new Q,L=new Q;let I=0;const P=(n-e)/i;for(let H=0;H<=r;H++){const T=[],C=H/r,O=C*(n-e)+e;for(let U=0;U<=s;U++){const D=U/s,N=D*l+a,J=Math.sin(N),Y=Math.cos(N);L.x=O*J,L.y=-C*i+m,L.z=O*Y,d.push(L.x,L.y,L.z),y.set(J,P,Y).normalize(),f.push(y.x,y.y,y.z),h.push(D,1-C),T.push(v++)}_.push(T)}for(let H=0;H<s;H++)for(let T=0;T<r;T++){const C=_[T][H],O=_[T+1][H],U=_[T+1][H+1],D=_[T][H+1];(e>0||T!==0)&&(u.push(C,O,D),I+=3),(n>0||T!==r-1)&&(u.push(O,U,D),I+=3)}c.addGroup(p,I,0),p+=I}function M(y){const L=v,I=new lt,P=new Q;let H=0;const T=y===!0?e:n,C=y===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,m*C,0),f.push(0,C,0),h.push(.5,.5),v++;const O=v;for(let U=0;U<=s;U++){const N=U/s*l+a,J=Math.cos(N),Y=Math.sin(N);P.x=T*Y,P.y=m*C,P.z=T*J,d.push(P.x,P.y,P.z),f.push(0,C,0),I.x=J*.5+.5,I.y=Y*.5*C+.5,h.push(I.x,I.y),v++}for(let U=0;U<s;U++){const D=L+U,N=O+U;y===!0?u.push(N,N+1,D):u.push(N+1,N,D),H+=3}c.addGroup(p,H,y===!0?1:2),p+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ec extends Is{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,f=n/l,h=[],v=[],_=[],m=[];for(let p=0;p<u;p++){const A=p*f-o;for(let M=0;M<c;M++){const y=M*d-r;v.push(y,-A,0),_.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){const M=A+c*p,y=A+c*(p+1),L=A+1+c*(p+1),I=A+1+c*p;h.push(M,y,I),h.push(y,L,I)}this.setIndex(h),this.setAttribute("position",new Di(v,3)),this.setAttribute("normal",new Di(_,3)),this.setAttribute("uv",new Di(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ec(e.width,e.height,e.widthSegments,e.heightSegments)}}class OA extends Ma{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nv,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ul extends OA{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class NA extends Ma{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class FA extends Ma{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $c={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class kA{constructor(e,n,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const h=c[d],v=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const BA=new kA;class Jd{constructor(e){this.manager=e!==void 0?e:BA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Jd.DEFAULT_MATERIAL_NAME="__DEFAULT";const Cr=new WeakMap;class HA extends Jd{constructor(e){super(e)}load(e,n,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=$c.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){n&&n(o),r.manager.itemEnd(e)},0);else{let d=Cr.get(o);d===void 0&&(d=[],Cr.set(o,d)),d.push({onLoad:n,onError:s})}return o}const a=ia("img");function l(){u(),n&&n(this);const d=Cr.get(this)||[];for(let f=0;f<d.length;f++){const h=d[f];h.onLoad&&h.onLoad(this)}Cr.delete(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),$c.remove(`image:${e}`);const f=Cr.get(this)||[];for(let h=0;h<f.length;h++){const v=f[h];v.onError&&v.onError(d)}Cr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),$c.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class vv extends Jd{constructor(e){super(e)}load(e,n,i,s){const r=new Cn,o=new HA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,n!==void 0&&n(r)},i,s),r}}class _v extends _n{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Xc=new Kt,Fh=new Q,kh=new Q;class zA{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=Oi,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qd,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Fh.setFromMatrixPosition(e.matrixWorld),n.position.copy(Fh),kh.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(kh),n.updateMatrixWorld(),Xc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xc,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class bv extends hv{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class VA extends zA{constructor(){super(new bv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sd extends _v{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new VA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class xv extends _v{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class GA extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Bh{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(gt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class WA extends fr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Hh(t,e,n,i){const s=$A(i);switch(n){case Zg:return t*e;case Jg:return t*e/s.components*s.byteLength;case jd:return t*e/s.components*s.byteLength;case ev:return t*e*2/s.components*s.byteLength;case qd:return t*e*2/s.components*s.byteLength;case Qg:return t*e*3/s.components*s.byteLength;case hi:return t*e*4/s.components*s.byteLength;case Yd:return t*e*4/s.components*s.byteLength;case al:case ll:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case cl:case ul:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Lu:case Uu:return Math.max(t,16)*Math.max(e,8)/4;case Du:case Iu:return Math.max(t,8)*Math.max(e,8)/2;case Ou:case Nu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Fu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ku:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Bu:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Hu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case zu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Vu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Gu:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Wu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case $u:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Xu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ju:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case qu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Yu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ku:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Zu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case dl:case Qu:case Ju:return Math.ceil(t/4)*Math.ceil(e/4)*16;case tv:case ed:return Math.ceil(t/4)*Math.ceil(e/4)*8;case td:case nd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function $A(t){switch(t){case Oi:case qg:return{byteLength:1,components:1};case Jo:case Yg:case ya:return{byteLength:2,components:1};case $d:case Xd:return{byteLength:2,components:4};case or:case Wd:case Zi:return{byteLength:4,components:1};case Kg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yv(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function XA(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((h,v)=>h.start-v.start);let f=0;for(let h=1;h<d.length;h++){const v=d[f],_=d[h];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++f,d[f]=_)}d.length=f+1;for(let h=0,v=d.length;h<v;h++){const _=d[h];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var jA=`#ifdef USE_ALPHAHASH
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
}`,mt={alphahash_fragment:jA,alphahash_pars_fragment:qA,alphamap_fragment:YA,alphamap_pars_fragment:KA,alphatest_fragment:ZA,alphatest_pars_fragment:QA,aomap_fragment:JA,aomap_pars_fragment:e1,batching_pars_vertex:t1,batching_vertex:n1,begin_vertex:i1,beginnormal_vertex:s1,bsdfs:r1,iridescence_fragment:o1,bumpmap_pars_fragment:a1,clipping_planes_fragment:l1,clipping_planes_pars_fragment:c1,clipping_planes_pars_vertex:u1,clipping_planes_vertex:d1,color_fragment:f1,color_pars_fragment:h1,color_pars_vertex:p1,color_vertex:m1,common:g1,cube_uv_reflection_fragment:v1,defaultnormal_vertex:_1,displacementmap_pars_vertex:b1,displacementmap_vertex:x1,emissivemap_fragment:y1,emissivemap_pars_fragment:w1,colorspace_fragment:S1,colorspace_pars_fragment:M1,envmap_fragment:E1,envmap_common_pars_fragment:T1,envmap_pars_fragment:A1,envmap_pars_vertex:C1,envmap_physical_pars_fragment:B1,envmap_vertex:R1,fog_vertex:P1,fog_pars_vertex:D1,fog_fragment:L1,fog_pars_fragment:I1,gradientmap_pars_fragment:U1,lightmap_pars_fragment:O1,lights_lambert_fragment:N1,lights_lambert_pars_fragment:F1,lights_pars_begin:k1,lights_toon_fragment:H1,lights_toon_pars_fragment:z1,lights_phong_fragment:V1,lights_phong_pars_fragment:G1,lights_physical_fragment:W1,lights_physical_pars_fragment:$1,lights_fragment_begin:X1,lights_fragment_maps:j1,lights_fragment_end:q1,logdepthbuf_fragment:Y1,logdepthbuf_pars_fragment:K1,logdepthbuf_pars_vertex:Z1,logdepthbuf_vertex:Q1,map_fragment:J1,map_pars_fragment:eC,map_particle_fragment:tC,map_particle_pars_fragment:nC,metalnessmap_fragment:iC,metalnessmap_pars_fragment:sC,morphinstance_vertex:rC,morphcolor_vertex:oC,morphnormal_vertex:aC,morphtarget_pars_vertex:lC,morphtarget_vertex:cC,normal_fragment_begin:uC,normal_fragment_maps:dC,normal_pars_fragment:fC,normal_pars_vertex:hC,normal_vertex:pC,normalmap_pars_fragment:mC,clearcoat_normal_fragment_begin:gC,clearcoat_normal_fragment_maps:vC,clearcoat_pars_fragment:_C,iridescence_pars_fragment:bC,opaque_fragment:xC,packing:yC,premultiplied_alpha_fragment:wC,project_vertex:SC,dithering_fragment:MC,dithering_pars_fragment:EC,roughnessmap_fragment:TC,roughnessmap_pars_fragment:AC,shadowmap_pars_fragment:CC,shadowmap_pars_vertex:RC,shadowmap_vertex:PC,shadowmask_pars_fragment:DC,skinbase_vertex:LC,skinning_pars_vertex:IC,skinning_vertex:UC,skinnormal_vertex:OC,specularmap_fragment:NC,specularmap_pars_fragment:FC,tonemapping_fragment:kC,tonemapping_pars_fragment:BC,transmission_fragment:HC,transmission_pars_fragment:zC,uv_pars_fragment:VC,uv_pars_vertex:GC,uv_vertex:WC,worldpos_vertex:$C,background_vert:XC,background_frag:jC,backgroundCube_vert:qC,backgroundCube_frag:YC,cube_vert:KC,cube_frag:ZC,depth_vert:QC,depth_frag:JC,distanceRGBA_vert:e2,distanceRGBA_frag:t2,equirect_vert:n2,equirect_frag:i2,linedashed_vert:s2,linedashed_frag:r2,meshbasic_vert:o2,meshbasic_frag:a2,meshlambert_vert:l2,meshlambert_frag:c2,meshmatcap_vert:u2,meshmatcap_frag:d2,meshnormal_vert:f2,meshnormal_frag:h2,meshphong_vert:p2,meshphong_frag:m2,meshphysical_vert:g2,meshphysical_frag:v2,meshtoon_vert:_2,meshtoon_frag:b2,points_vert:x2,points_frag:y2,shadow_vert:w2,shadow_frag:S2,sprite_vert:M2,sprite_frag:E2},Re={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Ti={basic:{uniforms:Sn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Sn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new yt(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Sn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Sn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Sn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new yt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Sn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Sn([Re.points,Re.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Sn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Sn([Re.common,Re.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Sn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Sn([Re.sprite,Re.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:Sn([Re.common,Re.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:Sn([Re.lights,Re.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Ti.physical={uniforms:Sn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Za={r:0,b:0,g:0},Vs=new Ni,T2=new Kt;function A2(t,e,n,i,s,r,o){const a=new yt(0);let l=r===!0?0:1,c,u,d=null,f=0,h=null;function v(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?n:e).get(y)),y}function _(M){let y=!1;const L=v(M);L===null?p(a,l):L&&L.isColor&&(p(L,1),y=!0);const I=t.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(M,y){const L=v(y);L&&(L.isCubeTexture||L.mapping===Ql)?(u===void 0&&(u=new pi(new Ea(1,1,1),new Ps({name:"BackgroundCubeMaterial",uniforms:uo(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,P,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Vs.copy(y.backgroundRotation),Vs.x*=-1,Vs.y*=-1,Vs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Vs.y*=-1,Vs.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(T2.makeRotationFromEuler(Vs)),u.material.toneMapped=Mt.getTransfer(L.colorSpace)!==Lt,(d!==L||f!==L.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,d=L,f=L.version,h=t.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new pi(new ec(2,2),new Ps({name:"BackgroundMaterial",uniforms:uo(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Mt.getTransfer(L.colorSpace)!==Lt,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(d!==L||f!==L.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,d=L,f=L.version,h=t.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,y){M.getRGB(Za,fv(t)),i.buffers.color.setClear(Za.r,Za.g,Za.b,y,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:_,addToRenderList:m,dispose:A}}function C2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(C,O,U,D,N){let J=!1;const Y=d(D,U,O);r!==Y&&(r=Y,c(r.object)),J=h(C,D,U,N),J&&v(C,D,U,N),N!==null&&e.update(N,t.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,y(C,O,U,D),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return t.createVertexArray()}function c(C){return t.bindVertexArray(C)}function u(C){return t.deleteVertexArray(C)}function d(C,O,U){const D=U.wireframe===!0;let N=i[C.id];N===void 0&&(N={},i[C.id]=N);let J=N[O.id];J===void 0&&(J={},N[O.id]=J);let Y=J[D];return Y===void 0&&(Y=f(l()),J[D]=Y),Y}function f(C){const O=[],U=[],D=[];for(let N=0;N<n;N++)O[N]=0,U[N]=0,D[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:U,attributeDivisors:D,object:C,attributes:{},index:null}}function h(C,O,U,D){const N=r.attributes,J=O.attributes;let Y=0;const ee=U.getAttributes();for(const q in ee)if(ee[q].location>=0){const Me=N[q];let Le=J[q];if(Le===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(Le=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(Le=C.instanceColor)),Me===void 0||Me.attribute!==Le||Le&&Me.data!==Le.data)return!0;Y++}return r.attributesNum!==Y||r.index!==D}function v(C,O,U,D){const N={},J=O.attributes;let Y=0;const ee=U.getAttributes();for(const q in ee)if(ee[q].location>=0){let Me=J[q];Me===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(Me=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(Me=C.instanceColor));const Le={};Le.attribute=Me,Me&&Me.data&&(Le.data=Me.data),N[q]=Le,Y++}r.attributes=N,r.attributesNum=Y,r.index=D}function _(){const C=r.newAttributes;for(let O=0,U=C.length;O<U;O++)C[O]=0}function m(C){p(C,0)}function p(C,O){const U=r.newAttributes,D=r.enabledAttributes,N=r.attributeDivisors;U[C]=1,D[C]===0&&(t.enableVertexAttribArray(C),D[C]=1),N[C]!==O&&(t.vertexAttribDivisor(C,O),N[C]=O)}function A(){const C=r.newAttributes,O=r.enabledAttributes;for(let U=0,D=O.length;U<D;U++)O[U]!==C[U]&&(t.disableVertexAttribArray(U),O[U]=0)}function M(C,O,U,D,N,J,Y){Y===!0?t.vertexAttribIPointer(C,O,U,N,J):t.vertexAttribPointer(C,O,U,D,N,J)}function y(C,O,U,D){_();const N=D.attributes,J=U.getAttributes(),Y=O.defaultAttributeValues;for(const ee in J){const q=J[ee];if(q.location>=0){let xe=N[ee];if(xe===void 0&&(ee==="instanceMatrix"&&C.instanceMatrix&&(xe=C.instanceMatrix),ee==="instanceColor"&&C.instanceColor&&(xe=C.instanceColor)),xe!==void 0){const Me=xe.normalized,Le=xe.itemSize,Ge=e.get(xe);if(Ge===void 0)continue;const _t=Ge.buffer,Ke=Ge.type,ie=Ge.bytesPerElement,ye=Ke===t.INT||Ke===t.UNSIGNED_INT||xe.gpuType===Wd;if(xe.isInterleavedBufferAttribute){const B=xe.data,ue=B.stride,oe=xe.offset;if(B.isInstancedInterleavedBuffer){for(let me=0;me<q.locationSize;me++)p(q.location+me,B.meshPerAttribute);C.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let me=0;me<q.locationSize;me++)m(q.location+me);t.bindBuffer(t.ARRAY_BUFFER,_t);for(let me=0;me<q.locationSize;me++)M(q.location+me,Le/q.locationSize,Ke,Me,ue*ie,(oe+Le/q.locationSize*me)*ie,ye)}else{if(xe.isInstancedBufferAttribute){for(let B=0;B<q.locationSize;B++)p(q.location+B,xe.meshPerAttribute);C.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let B=0;B<q.locationSize;B++)m(q.location+B);t.bindBuffer(t.ARRAY_BUFFER,_t);for(let B=0;B<q.locationSize;B++)M(q.location+B,Le/q.locationSize,Ke,Me,Le*ie,Le/q.locationSize*B*ie,ye)}}else if(Y!==void 0){const Me=Y[ee];if(Me!==void 0)switch(Me.length){case 2:t.vertexAttrib2fv(q.location,Me);break;case 3:t.vertexAttrib3fv(q.location,Me);break;case 4:t.vertexAttrib4fv(q.location,Me);break;default:t.vertexAttrib1fv(q.location,Me)}}}}A()}function L(){H();for(const C in i){const O=i[C];for(const U in O){const D=O[U];for(const N in D)u(D[N].object),delete D[N];delete O[U]}delete i[C]}}function I(C){if(i[C.id]===void 0)return;const O=i[C.id];for(const U in O){const D=O[U];for(const N in D)u(D[N].object),delete D[N];delete O[U]}delete i[C.id]}function P(C){for(const O in i){const U=i[O];if(U[C.id]===void 0)continue;const D=U[C.id];for(const N in D)u(D[N].object),delete D[N];delete U[C.id]}}function H(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:H,resetDefaultState:T,dispose:L,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:A}}function R2(t,e,n){let i;function s(c){i=c}function r(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let v=0;v<d;v++)h+=u[v];n.update(h,i,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let v=0;v<c.length;v++)o(c[v],u[v],f[v]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let v=0;for(let _=0;_<d;_++)v+=u[_]*f[_];n.update(v,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function P2(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==hi&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const H=P===ya&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Oi&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Zi&&!H)}function l(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),A=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,I=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:L,maxSamples:I}}function D2(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new ms,a=new pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,h){const v=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=t.get(d);if(!s||v===null||v.length===0||r&&!m)r?u(null):c();else{const A=r?0:i,M=A*4;let y=p.clippingState||null;l.value=y,y=u(v,f,M,h);for(let L=0;L!==M;++L)y[L]=n[L];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,v){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,v!==!0||m===null){const p=h+_*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,y=h;M!==_;++M,y+=4)o.copy(d[M]).applyMatrix4(A,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function L2(t){let e=new WeakMap;function n(o,a){return a===Au?o.mapping=ao:a===Cu&&(o.mapping=lo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Au||a===Cu)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new PA(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",s),n(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Ir=4,zh=[.125,.215,.35,.446,.526,.582],js=20,jc=new bv,Vh=new yt;let qc=null,Yc=0,Kc=0,Zc=!1;const $s=(1+Math.sqrt(5))/2,Rr=1/$s,Gh=[new Q(-$s,Rr,0),new Q($s,Rr,0),new Q(-Rr,0,$s),new Q(Rr,0,$s),new Q(0,$s,-Rr),new Q(0,$s,Rr),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)],I2=new Q;class Wh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=I2}=r;qc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),Zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qc,Yc,Kc),this._renderer.xr.enabled=Zc,e.scissorTest=!1,Qa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ao||e.mapping===lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),Kc=this._renderer.getActiveMipmapLevel(),Zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ai,minFilter:Ai,generateMipmaps:!1,type:ya,format:hi,colorSpace:co,depthBuffer:!1},s=$h(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$h(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=U2(r)),this._blurMaterial=O2(r,e,n)}return s}_compileMaterial(e){const n=new pi(this._lodPlanes[0],e);this._renderer.compile(n,jc)}_sceneToCubeUV(e,n,i,s,r){const l=new Xn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Vh),d.toneMapping=Cs,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const _=new cv({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),m=new pi(new Ea,_);let p=!1;const A=e.background;A?A.isColor&&(_.color.copy(A),e.background=null,p=!0):(_.color.copy(Vh),p=!0);for(let M=0;M<6;M++){const y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[M],r.y,r.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[M]));const L=this._cubeSize;Qa(s,y*L,M>2?L:0,L,L),d.setRenderTarget(s),p&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=A}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===ao||e.mapping===lo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new pi(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Qa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,jc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Gh[(s-r-1)%Gh.length];this._blur(e,r-1,r,o,a)}n.autoClear=i}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new pi(this._lodPlanes[s],c),f=c.uniforms,h=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*js-1),_=r/v,m=isFinite(r)?1+Math.floor(u*_):js;m>js&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${js}`);const p=[];let A=0;for(let P=0;P<js;++P){const H=P/_,T=Math.exp(-H*H/2);p.push(T),P===0?A+=T:P<m&&(A+=2*T)}for(let P=0;P<p.length;P++)p[P]=p[P]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=v,f.mipInt.value=M-i;const y=this._sizeLods[s],L=3*y*(s>M-Ir?s-M+Ir:0),I=4*(this._cubeSize-y);Qa(n,L,I,3*y,2*y),l.setRenderTarget(n),l.render(d,jc)}}function U2(t){const e=[],n=[],i=[];let s=t;const r=t-Ir+1+zh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);n.push(a);let l=1/a;o>t-Ir?l=zh[o-t+Ir-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,v=6,_=3,m=2,p=1,A=new Float32Array(_*v*h),M=new Float32Array(m*v*h),y=new Float32Array(p*v*h);for(let I=0;I<h;I++){const P=I%3*2/3-1,H=I>2?0:-1,T=[P,H,0,P+2/3,H,0,P+2/3,H+1,0,P,H,0,P+2/3,H+1,0,P,H+1,0];A.set(T,_*v*I),M.set(f,m*v*I);const C=[I,I,I,I,I,I];y.set(C,p*v*I)}const L=new Is;L.setAttribute("position",new Pi(A,_)),L.setAttribute("uv",new Pi(M,m)),L.setAttribute("faceIndex",new Pi(y,p)),e.push(L),s>Ir&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function $h(t,e,n){const i=new lr(t,e,n);return i.texture.mapping=Ql,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qa(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function O2(t,e,n){const i=new Float32Array(js),s=new Q(0,1,0);return new Ps({name:"SphericalGaussianBlur",defines:{n:js,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ef(),fragmentShader:`

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
	`}function N2(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Au||l===Cu,u=l===ao||l===lo;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Wh(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&s(h)?(n===null&&(n=new Wh(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function F2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&Gr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function k2(t,e,n,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",o),delete s[f.id];const h=r.get(f);h&&(e.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],t.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,v=d.attributes.position;let _=0;if(h!==null){const A=h.array;_=h.version;for(let M=0,y=A.length;M<y;M+=3){const L=A[M+0],I=A[M+1],P=A[M+2];f.push(L,I,I,P,P,L)}}else if(v!==void 0){const A=v.array;_=v.version;for(let M=0,y=A.length/3-1;M<y;M+=3){const L=M+0,I=M+1,P=M+2;f.push(L,I,I,P,P,L)}}else return;const m=new(sv(f)?dv:uv)(f,1);m.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function B2(t,e,n){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){t.drawElements(i,h,r,f*o),n.update(h,i,1)}function c(f,h,v){v!==0&&(t.drawElementsInstanced(i,h,r,f*o,v),n.update(h,i,v))}function u(f,h,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,v);let m=0;for(let p=0;p<v;p++)m+=h[p];n.update(m,i,1)}function d(f,h,v,_){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,r,f,0,_,0,v);let p=0;for(let A=0;A<v;A++)p+=h[A]*_[A];n.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function H2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function z2(t,e,n){const i=new WeakMap,s=new jt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let T=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();const h=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let M=0;h===!0&&(M=1),v===!0&&(M=2),_===!0&&(M=3);let y=a.attributes.position.count*M,L=1;y>e.maxTextureSize&&(L=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const I=new Float32Array(y*L*4*d),P=new rv(I,y,L,d);P.type=Zi,P.needsUpdate=!0;const H=M*4;for(let C=0;C<d;C++){const O=m[C],U=p[C],D=A[C],N=y*L*4*C;for(let J=0;J<O.count;J++){const Y=J*H;h===!0&&(s.fromBufferAttribute(O,J),I[N+Y+0]=s.x,I[N+Y+1]=s.y,I[N+Y+2]=s.z,I[N+Y+3]=0),v===!0&&(s.fromBufferAttribute(U,J),I[N+Y+4]=s.x,I[N+Y+5]=s.y,I[N+Y+6]=s.z,I[N+Y+7]=0),_===!0&&(s.fromBufferAttribute(D,J),I[N+Y+8]=s.x,I[N+Y+9]=s.y,I[N+Y+10]=s.z,I[N+Y+11]=D.itemSize===4?s.w:1)}}f={count:d,texture:P,size:new lt(y,L)},i.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let h=0;for(let _=0;_<c.length;_++)h+=c[_];const v=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:r}}function V2(t,e,n,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:o}}const wv=new Cn,qh=new gv(1,1),Sv=new rv,Mv=new hA,Ev=new pv,Yh=[],Kh=[],Zh=new Float32Array(16),Qh=new Float32Array(9),Jh=new Float32Array(4);function _o(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=Yh[s];if(r===void 0&&(r=new Float32Array(s),Yh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function sn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function rn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function tc(t,e){let n=Kh[e];n===void 0&&(n=new Int32Array(e),Kh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function G2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function W2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(sn(n,e))return;t.uniform2fv(this.addr,e),rn(n,e)}}function $2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(sn(n,e))return;t.uniform3fv(this.addr,e),rn(n,e)}}function X2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(sn(n,e))return;t.uniform4fv(this.addr,e),rn(n,e)}}function j2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(sn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),rn(n,e)}else{if(sn(n,i))return;Jh.set(i),t.uniformMatrix2fv(this.addr,!1,Jh),rn(n,i)}}function q2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(sn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),rn(n,e)}else{if(sn(n,i))return;Qh.set(i),t.uniformMatrix3fv(this.addr,!1,Qh),rn(n,i)}}function Y2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(sn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),rn(n,e)}else{if(sn(n,i))return;Zh.set(i),t.uniformMatrix4fv(this.addr,!1,Zh),rn(n,i)}}function K2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Z2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(sn(n,e))return;t.uniform2iv(this.addr,e),rn(n,e)}}function Q2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(sn(n,e))return;t.uniform3iv(this.addr,e),rn(n,e)}}function J2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(sn(n,e))return;t.uniform4iv(this.addr,e),rn(n,e)}}function eR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function tR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(sn(n,e))return;t.uniform2uiv(this.addr,e),rn(n,e)}}function nR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(sn(n,e))return;t.uniform3uiv(this.addr,e),rn(n,e)}}function iR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(sn(n,e))return;t.uniform4uiv(this.addr,e),rn(n,e)}}function sR(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(qh.compareFunction=iv,r=qh):r=wv,n.setTexture2D(e||r,s)}function rR(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||Mv,s)}function oR(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||Ev,s)}function aR(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||Sv,s)}function lR(t){switch(t){case 5126:return G2;case 35664:return W2;case 35665:return $2;case 35666:return X2;case 35674:return j2;case 35675:return q2;case 35676:return Y2;case 5124:case 35670:return K2;case 35667:case 35671:return Z2;case 35668:case 35672:return Q2;case 35669:case 35673:return J2;case 5125:return eR;case 36294:return tR;case 36295:return nR;case 36296:return iR;case 35678:case 36198:case 36298:case 36306:case 35682:return sR;case 35679:case 36299:case 36307:return rR;case 35680:case 36300:case 36308:case 36293:return oR;case 36289:case 36303:case 36311:case 36292:return aR}}function cR(t,e){t.uniform1fv(this.addr,e)}function uR(t,e){const n=_o(e,this.size,2);t.uniform2fv(this.addr,n)}function dR(t,e){const n=_o(e,this.size,3);t.uniform3fv(this.addr,n)}function fR(t,e){const n=_o(e,this.size,4);t.uniform4fv(this.addr,n)}function hR(t,e){const n=_o(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function pR(t,e){const n=_o(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function mR(t,e){const n=_o(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function gR(t,e){t.uniform1iv(this.addr,e)}function vR(t,e){t.uniform2iv(this.addr,e)}function _R(t,e){t.uniform3iv(this.addr,e)}function bR(t,e){t.uniform4iv(this.addr,e)}function xR(t,e){t.uniform1uiv(this.addr,e)}function yR(t,e){t.uniform2uiv(this.addr,e)}function wR(t,e){t.uniform3uiv(this.addr,e)}function SR(t,e){t.uniform4uiv(this.addr,e)}function MR(t,e,n){const i=this.cache,s=e.length,r=tc(n,s);sn(i,r)||(t.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)n.setTexture2D(e[o]||wv,r[o])}function ER(t,e,n){const i=this.cache,s=e.length,r=tc(n,s);sn(i,r)||(t.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||Mv,r[o])}function TR(t,e,n){const i=this.cache,s=e.length,r=tc(n,s);sn(i,r)||(t.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||Ev,r[o])}function AR(t,e,n){const i=this.cache,s=e.length,r=tc(n,s);sn(i,r)||(t.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||Sv,r[o])}function CR(t){switch(t){case 5126:return cR;case 35664:return uR;case 35665:return dR;case 35666:return fR;case 35674:return hR;case 35675:return pR;case 35676:return mR;case 5124:case 35670:return gR;case 35667:case 35671:return vR;case 35668:case 35672:return _R;case 35669:case 35673:return bR;case 5125:return xR;case 36294:return yR;case 36295:return wR;case 36296:return SR;case 35678:case 36198:case 36298:case 36306:case 35682:return MR;case 35679:case 36299:case 36307:return ER;case 35680:case 36300:case 36308:case 36293:return TR;case 36289:case 36303:case 36311:case 36292:return AR}}class RR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=lR(n.type)}}class PR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=CR(n.type)}}class DR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const Qc=/(\w+)(\])?(\[|\.)?/g;function ep(t,e){t.seq.push(e),t.map[e.id]=e}function LR(t,e,n){const i=t.name,s=i.length;for(Qc.lastIndex=0;;){const r=Qc.exec(i),o=Qc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ep(n,c===void 0?new RR(a,t,e):new PR(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new DR(a),ep(n,d)),n=d}}}class hl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(n,s),o=e.getUniformLocation(n,r.name);LR(r,o,this)}}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function tp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const IR=37297;let UR=0;function OR(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const np=new pt;function NR(t){Mt._getMatrix(np,Mt.workingColorSpace,t);const e=`mat3( ${np.elements.map(n=>n.toFixed(4))} )`;switch(Mt.getTransfer(t)){case Ll:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function ip(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+OR(t.getShaderSource(e),a)}else return r}function FR(t,e){const n=NR(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function kR(t,e){let n;switch(e){case HT:n="Linear";break;case zT:n="Reinhard";break;case VT:n="Cineon";break;case GT:n="ACESFilmic";break;case $T:n="AgX";break;case XT:n="Neutral";break;case WT:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ja=new Q;function BR(){Mt.getLuminanceCoefficients(Ja);const t=Ja.x.toFixed(4),e=Ja.y.toFixed(4),n=Ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
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
#define LOW_PRECISION`),e}function qR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===$g?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===bT?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Wi&&(e="SHADOWMAP_TYPE_VSM"),e}function YR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ao:case lo:e="ENVMAP_TYPE_CUBE";break;case Ql:e="ENVMAP_TYPE_CUBE_UV";break}return e}function KR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case lo:e="ENVMAP_MODE_REFRACTION";break}return e}function ZR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Xg:e="ENVMAP_BLENDING_MULTIPLY";break;case kT:e="ENVMAP_BLENDING_MIX";break;case BT:e="ENVMAP_BLENDING_ADD";break}return e}function QR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function JR(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=qR(n),c=YR(n),u=KR(n),d=ZR(n),f=QR(n),h=HR(n),v=zR(r),_=s.createProgram();let m,p,A=n.glslVersion?"#version "+n.glslVersion+`
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
`+p);const M=A+m+o,y=A+p+a,L=tp(s,s.VERTEX_SHADER,M),I=tp(s,s.FRAGMENT_SHADER,y);s.attachShader(_,L),s.attachShader(_,I),n.index0AttributeName!==void 0?s.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(O){if(t.debug.checkShaderErrors){const U=s.getProgramInfoLog(_)||"",D=s.getShaderInfoLog(L)||"",N=s.getShaderInfoLog(I)||"",J=U.trim(),Y=D.trim(),ee=N.trim();let q=!0,xe=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,_,L,I);else{const Me=ip(s,L,"vertex"),Le=ip(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+J+`
`+Me+`
`+Le)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(Y===""||ee==="")&&(xe=!1);xe&&(O.diagnostics={runnable:q,programLog:J,vertexShader:{log:Y,prefix:m},fragmentShader:{log:ee,prefix:p}})}s.deleteShader(L),s.deleteShader(I),H=new hl(s,_),T=VR(s,_)}let H;this.getUniforms=function(){return H===void 0&&P(this),H};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(_,IR)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=UR++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=I,this}let eP=0;class tP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new nP(e),n.set(e,i)),i}}class nP{constructor(e){this.id=eP++,this.code=e,this.usedTimes=0}}function iP(t,e,n,i,s,r,o){const a=new av,l=new tP,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let h=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,C,O,U,D){const N=U.fog,J=D.geometry,Y=T.isMeshStandardMaterial?U.environment:null,ee=(T.isMeshStandardMaterial?n:e).get(T.envMap||Y),q=ee&&ee.mapping===Ql?ee.image.height:null,xe=v[T.type];T.precision!==null&&(h=s.getMaxPrecision(T.precision),h!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",h,"instead."));const Me=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Le=Me!==void 0?Me.length:0;let Ge=0;J.morphAttributes.position!==void 0&&(Ge=1),J.morphAttributes.normal!==void 0&&(Ge=2),J.morphAttributes.color!==void 0&&(Ge=3);let _t,Ke,ie,ye;if(xe){const ft=Ti[xe];_t=ft.vertexShader,Ke=ft.fragmentShader}else _t=T.vertexShader,Ke=T.fragmentShader,l.update(T),ie=l.getVertexShaderID(T),ye=l.getFragmentShaderID(T);const B=t.getRenderTarget(),ue=t.state.buffers.depth.getReversed(),oe=D.isInstancedMesh===!0,me=D.isBatchedMesh===!0,Ze=!!T.map,R=!!T.matcap,g=!!ee,V=!!T.aoMap,j=!!T.lightMap,se=!!T.bumpMap,X=!!T.normalMap,ge=!!T.displacementMap,te=!!T.emissiveMap,ce=!!T.metalnessMap,de=!!T.roughnessMap,Pe=T.anisotropy>0,S=T.clearcoat>0,x=T.dispersion>0,k=T.iridescence>0,K=T.sheen>0,le=T.transmission>0,Z=Pe&&!!T.anisotropyMap,Ie=S&&!!T.clearcoatMap,ve=S&&!!T.clearcoatNormalMap,De=S&&!!T.clearcoatRoughnessMap,Ue=k&&!!T.iridescenceMap,_e=k&&!!T.iridescenceThicknessMap,Ce=K&&!!T.sheenColorMap,Be=K&&!!T.sheenRoughnessMap,Oe=!!T.specularMap,Te=!!T.specularColorMap,ct=!!T.specularIntensityMap,z=le&&!!T.transmissionMap,we=le&&!!T.thicknessMap,Ee=!!T.gradientMap,Fe=!!T.alphaMap,be=T.alphaTest>0,he=!!T.alphaHash,Ve=!!T.extensions;let tt=Cs;T.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(tt=t.toneMapping);const dt={shaderID:xe,shaderType:T.type,shaderName:T.name,vertexShader:_t,fragmentShader:Ke,defines:T.defines,customVertexShaderID:ie,customFragmentShaderID:ye,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:h,batching:me,batchingColor:me&&D._colorsTexture!==null,instancing:oe,instancingColor:oe&&D.instanceColor!==null,instancingMorph:oe&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:B===null?t.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:co,alphaToCoverage:!!T.alphaToCoverage,map:Ze,matcap:R,envMap:g,envMapMode:g&&ee.mapping,envMapCubeUVHeight:q,aoMap:V,lightMap:j,bumpMap:se,normalMap:X,displacementMap:f&&ge,emissiveMap:te,normalMapObjectSpace:X&&T.normalMapType===KT,normalMapTangentSpace:X&&T.normalMapType===nv,metalnessMap:ce,roughnessMap:de,anisotropy:Pe,anisotropyMap:Z,clearcoat:S,clearcoatMap:Ie,clearcoatNormalMap:ve,clearcoatRoughnessMap:De,dispersion:x,iridescence:k,iridescenceMap:Ue,iridescenceThicknessMap:_e,sheen:K,sheenColorMap:Ce,sheenRoughnessMap:Be,specularMap:Oe,specularColorMap:Te,specularIntensityMap:ct,transmission:le,transmissionMap:z,thicknessMap:we,gradientMap:Ee,opaque:T.transparent===!1&&T.blending===Vr&&T.alphaToCoverage===!1,alphaMap:Fe,alphaTest:be,alphaHash:he,combine:T.combine,mapUv:Ze&&_(T.map.channel),aoMapUv:V&&_(T.aoMap.channel),lightMapUv:j&&_(T.lightMap.channel),bumpMapUv:se&&_(T.bumpMap.channel),normalMapUv:X&&_(T.normalMap.channel),displacementMapUv:ge&&_(T.displacementMap.channel),emissiveMapUv:te&&_(T.emissiveMap.channel),metalnessMapUv:ce&&_(T.metalnessMap.channel),roughnessMapUv:de&&_(T.roughnessMap.channel),anisotropyMapUv:Z&&_(T.anisotropyMap.channel),clearcoatMapUv:Ie&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:ve&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Be&&_(T.sheenRoughnessMap.channel),specularMapUv:Oe&&_(T.specularMap.channel),specularColorMapUv:Te&&_(T.specularColorMap.channel),specularIntensityMapUv:ct&&_(T.specularIntensityMap.channel),transmissionMapUv:z&&_(T.transmissionMap.channel),thicknessMapUv:we&&_(T.thicknessMap.channel),alphaMapUv:Fe&&_(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(X||Pe),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!J.attributes.uv&&(Ze||Fe),fog:!!N,useFog:T.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ue,skinning:D.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:Ge,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&O.length>0,shadowMapType:t.shadowMap.type,toneMapping:tt,decodeVideoTexture:Ze&&T.map.isVideoTexture===!0&&Mt.getTransfer(T.map.colorSpace)===Lt,decodeVideoTextureEmissive:te&&T.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(T.emissiveMap.colorSpace)===Lt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ki,flipSided:T.side===kn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ve&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&T.extensions.multiDraw===!0||me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function p(T){const C=[];if(T.shaderID?C.push(T.shaderID):(C.push(T.customVertexShaderID),C.push(T.customFragmentShaderID)),T.defines!==void 0)for(const O in T.defines)C.push(O),C.push(T.defines[O]);return T.isRawShaderMaterial===!1&&(A(C,T),M(C,T),C.push(t.outputColorSpace)),C.push(T.customProgramCacheKey),C.join()}function A(T,C){T.push(C.precision),T.push(C.outputColorSpace),T.push(C.envMapMode),T.push(C.envMapCubeUVHeight),T.push(C.mapUv),T.push(C.alphaMapUv),T.push(C.lightMapUv),T.push(C.aoMapUv),T.push(C.bumpMapUv),T.push(C.normalMapUv),T.push(C.displacementMapUv),T.push(C.emissiveMapUv),T.push(C.metalnessMapUv),T.push(C.roughnessMapUv),T.push(C.anisotropyMapUv),T.push(C.clearcoatMapUv),T.push(C.clearcoatNormalMapUv),T.push(C.clearcoatRoughnessMapUv),T.push(C.iridescenceMapUv),T.push(C.iridescenceThicknessMapUv),T.push(C.sheenColorMapUv),T.push(C.sheenRoughnessMapUv),T.push(C.specularMapUv),T.push(C.specularColorMapUv),T.push(C.specularIntensityMapUv),T.push(C.transmissionMapUv),T.push(C.thicknessMapUv),T.push(C.combine),T.push(C.fogExp2),T.push(C.sizeAttenuation),T.push(C.morphTargetsCount),T.push(C.morphAttributeCount),T.push(C.numDirLights),T.push(C.numPointLights),T.push(C.numSpotLights),T.push(C.numSpotLightMaps),T.push(C.numHemiLights),T.push(C.numRectAreaLights),T.push(C.numDirLightShadows),T.push(C.numPointLightShadows),T.push(C.numSpotLightShadows),T.push(C.numSpotLightShadowsWithMaps),T.push(C.numLightProbes),T.push(C.shadowMapType),T.push(C.toneMapping),T.push(C.numClippingPlanes),T.push(C.numClipIntersection),T.push(C.depthPacking)}function M(T,C){a.disableAll(),C.supportsVertexTextures&&a.enable(0),C.instancing&&a.enable(1),C.instancingColor&&a.enable(2),C.instancingMorph&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),C.dispersion&&a.enable(20),C.batchingColor&&a.enable(21),C.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),T.push(a.mask)}function y(T){const C=v[T.type];let O;if(C){const U=Ti[C];O=TA.clone(U.uniforms)}else O=T.uniforms;return O}function L(T,C){let O;for(let U=0,D=u.length;U<D;U++){const N=u[U];if(N.cacheKey===C){O=N,++O.usedTimes;break}}return O===void 0&&(O=new JR(t,C,T,r),u.push(O)),O}function I(T){if(--T.usedTimes===0){const C=u.indexOf(T);u[C]=u[u.length-1],u.pop(),T.destroy()}}function P(T){l.remove(T)}function H(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:L,releaseProgram:I,releaseShaderCache:P,programs:u,dispose:H}}function sP(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function rP(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function lp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function cp(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(d,f,h,v,_,m){let p=t[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:v,renderOrder:d.renderOrder,z:_,group:m},t[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function a(d,f,h,v,_,m){const p=o(d,f,h,v,_,m);h.transmission>0?i.push(p):h.transparent===!0?s.push(p):n.push(p)}function l(d,f,h,v,_,m){const p=o(d,f,h,v,_,m);h.transmission>0?i.unshift(p):h.transparent===!0?s.unshift(p):n.unshift(p)}function c(d,f){n.length>1&&n.sort(d||rP),i.length>1&&i.sort(f||lp),s.length>1&&s.sort(f||lp)}function u(){for(let d=e,f=t.length;d<f;d++){const h=t[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function oP(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new cp,t.set(i,[o])):s>=r.length?(o=new cp,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function aP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Q,color:new yt};break;case"SpotLight":n={position:new Q,direction:new Q,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Q,color:new yt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Q,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":n={color:new yt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return t[e.id]=n,n}}}function lP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let cP=0;function uP(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function dP(t){const e=new aP,n=lP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Q);const s=new Q,r=new Kt,o=new Kt;function a(c){let u=0,d=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let h=0,v=0,_=0,m=0,p=0,A=0,M=0,y=0,L=0,I=0,P=0;c.sort(uP);for(let T=0,C=c.length;T<C;T++){const O=c[T],U=O.color,D=O.intensity,N=O.distance,J=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)u+=U.r*D,d+=U.g*D,f+=U.b*D;else if(O.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(O.sh.coefficients[Y],D);P++}else if(O.isDirectionalLight){const Y=e.get(O);if(Y.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const ee=O.shadow,q=n.get(O);q.shadowIntensity=ee.intensity,q.shadowBias=ee.bias,q.shadowNormalBias=ee.normalBias,q.shadowRadius=ee.radius,q.shadowMapSize=ee.mapSize,i.directionalShadow[h]=q,i.directionalShadowMap[h]=J,i.directionalShadowMatrix[h]=O.shadow.matrix,A++}i.directional[h]=Y,h++}else if(O.isSpotLight){const Y=e.get(O);Y.position.setFromMatrixPosition(O.matrixWorld),Y.color.copy(U).multiplyScalar(D),Y.distance=N,Y.coneCos=Math.cos(O.angle),Y.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Y.decay=O.decay,i.spot[_]=Y;const ee=O.shadow;if(O.map&&(i.spotLightMap[L]=O.map,L++,ee.updateMatrices(O),O.castShadow&&I++),i.spotLightMatrix[_]=ee.matrix,O.castShadow){const q=n.get(O);q.shadowIntensity=ee.intensity,q.shadowBias=ee.bias,q.shadowNormalBias=ee.normalBias,q.shadowRadius=ee.radius,q.shadowMapSize=ee.mapSize,i.spotShadow[_]=q,i.spotShadowMap[_]=J,y++}_++}else if(O.isRectAreaLight){const Y=e.get(O);Y.color.copy(U).multiplyScalar(D),Y.halfWidth.set(O.width*.5,0,0),Y.halfHeight.set(0,O.height*.5,0),i.rectArea[m]=Y,m++}else if(O.isPointLight){const Y=e.get(O);if(Y.color.copy(O.color).multiplyScalar(O.intensity),Y.distance=O.distance,Y.decay=O.decay,O.castShadow){const ee=O.shadow,q=n.get(O);q.shadowIntensity=ee.intensity,q.shadowBias=ee.bias,q.shadowNormalBias=ee.normalBias,q.shadowRadius=ee.radius,q.shadowMapSize=ee.mapSize,q.shadowCameraNear=ee.camera.near,q.shadowCameraFar=ee.camera.far,i.pointShadow[v]=q,i.pointShadowMap[v]=J,i.pointShadowMatrix[v]=O.shadow.matrix,M++}i.point[v]=Y,v++}else if(O.isHemisphereLight){const Y=e.get(O);Y.skyColor.copy(O.color).multiplyScalar(D),Y.groundColor.copy(O.groundColor).multiplyScalar(D),i.hemi[p]=Y,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const H=i.hash;(H.directionalLength!==h||H.pointLength!==v||H.spotLength!==_||H.rectAreaLength!==m||H.hemiLength!==p||H.numDirectionalShadows!==A||H.numPointShadows!==M||H.numSpotShadows!==y||H.numSpotMaps!==L||H.numLightProbes!==P)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=m,i.point.length=v,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=y+L-I,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=P,H.directionalLength=h,H.pointLength=v,H.spotLength=_,H.rectAreaLength=m,H.hemiLength=p,H.numDirectionalShadows=A,H.numPointShadows=M,H.numSpotShadows=y,H.numSpotMaps=L,H.numLightProbes=P,i.version=cP++)}function l(c,u){let d=0,f=0,h=0,v=0,_=0;const m=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const M=c[p];if(M.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(M.isSpotLight){const y=i.spot[h];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(M.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function up(t){const e=new dP(t),n=[],i=[];function s(u){c.camera=u,n.length=0,i.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function fP(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new up(t),e.set(s,[a])):r>=o.length?(a=new up(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const hP=`void main() {
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
}`;function mP(t,e,n){let i=new Qd;const s=new lt,r=new lt,o=new jt,a=new NA({depthPacking:YT}),l=new FA,c={},u=n.maxTextureSize,d={[Rs]:kn,[kn]:Rs,[Ki]:Ki},f=new Ps({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:hP,fragmentShader:pP}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const v=new Is;v.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new pi(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$g;let p=this.type;this.render=function(I,P,H){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const T=t.getRenderTarget(),C=t.getActiveCubeFace(),O=t.getActiveMipmapLevel(),U=t.state;U.setBlending(As),U.buffers.depth.getReversed()?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const D=p!==Wi&&this.type===Wi,N=p===Wi&&this.type!==Wi;for(let J=0,Y=I.length;J<Y;J++){const ee=I[J],q=ee.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const xe=q.getFrameExtents();if(s.multiply(xe),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/xe.x),s.x=r.x*xe.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/xe.y),s.y=r.y*xe.y,q.mapSize.y=r.y)),q.map===null||D===!0||N===!0){const Le=this.type!==Wi?{minFilter:gi,magFilter:gi}:{};q.map!==null&&q.map.dispose(),q.map=new lr(s.x,s.y,Le),q.map.texture.name=ee.name+".shadowMap",q.camera.updateProjectionMatrix()}t.setRenderTarget(q.map),t.clear();const Me=q.getViewportCount();for(let Le=0;Le<Me;Le++){const Ge=q.getViewport(Le);o.set(r.x*Ge.x,r.y*Ge.y,r.x*Ge.z,r.y*Ge.w),U.viewport(o),q.updateMatrices(ee,Le),i=q.getFrustum(),y(P,H,q.camera,ee,this.type)}q.isPointLightShadow!==!0&&this.type===Wi&&A(q,H),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(T,C,O)};function A(I,P){const H=e.update(_);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,h.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new lr(s.x,s.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,t.setRenderTarget(I.mapPass),t.clear(),t.renderBufferDirect(P,null,H,f,_,null),h.uniforms.shadow_pass.value=I.mapPass.texture,h.uniforms.resolution.value=I.mapSize,h.uniforms.radius.value=I.radius,t.setRenderTarget(I.map),t.clear(),t.renderBufferDirect(P,null,H,h,_,null)}function M(I,P,H,T){let C=null;const O=H.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(O!==void 0)C=O;else if(C=H.isPointLight===!0?l:a,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const U=C.uuid,D=P.uuid;let N=c[U];N===void 0&&(N={},c[U]=N);let J=N[D];J===void 0&&(J=C.clone(),N[D]=J,P.addEventListener("dispose",L)),C=J}if(C.visible=P.visible,C.wireframe=P.wireframe,T===Wi?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:d[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,H.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const U=t.properties.get(C);U.light=H}return C}function y(I,P,H,T,C){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&C===Wi)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,I.matrixWorld);const D=e.update(I),N=I.material;if(Array.isArray(N)){const J=D.groups;for(let Y=0,ee=J.length;Y<ee;Y++){const q=J[Y],xe=N[q.materialIndex];if(xe&&xe.visible){const Me=M(I,xe,T,C);I.onBeforeShadow(t,I,P,H,D,Me,q),t.renderBufferDirect(H,null,D,Me,I,q),I.onAfterShadow(t,I,P,H,D,Me,q)}}}else if(N.visible){const J=M(I,N,T,C);I.onBeforeShadow(t,I,P,H,D,J,null),t.renderBufferDirect(H,null,D,J,I,null),I.onAfterShadow(t,I,P,H,D,J,null)}}const U=I.children;for(let D=0,N=U.length;D<N;D++)y(U[D],P,H,T,C)}function L(I){I.target.removeEventListener("dispose",L);for(const H in c){const T=c[H],C=I.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}const gP={[xu]:yu,[wu]:Eu,[Su]:Tu,[oo]:Mu,[yu]:xu,[Eu]:wu,[Tu]:Su,[Mu]:oo};function vP(t,e){function n(){let z=!1;const we=new jt;let Ee=null;const Fe=new jt(0,0,0,0);return{setMask:function(be){Ee!==be&&!z&&(t.colorMask(be,be,be,be),Ee=be)},setLocked:function(be){z=be},setClear:function(be,he,Ve,tt,dt){dt===!0&&(be*=tt,he*=tt,Ve*=tt),we.set(be,he,Ve,tt),Fe.equals(we)===!1&&(t.clearColor(be,he,Ve,tt),Fe.copy(we))},reset:function(){z=!1,Ee=null,Fe.set(-1,0,0,0)}}}function i(){let z=!1,we=!1,Ee=null,Fe=null,be=null;return{setReversed:function(he){if(we!==he){const Ve=e.get("EXT_clip_control");he?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),we=he;const tt=be;be=null,this.setClear(tt)}},getReversed:function(){return we},setTest:function(he){he?B(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(he){Ee!==he&&!z&&(t.depthMask(he),Ee=he)},setFunc:function(he){if(we&&(he=gP[he]),Fe!==he){switch(he){case xu:t.depthFunc(t.NEVER);break;case yu:t.depthFunc(t.ALWAYS);break;case wu:t.depthFunc(t.LESS);break;case oo:t.depthFunc(t.LEQUAL);break;case Su:t.depthFunc(t.EQUAL);break;case Mu:t.depthFunc(t.GEQUAL);break;case Eu:t.depthFunc(t.GREATER);break;case Tu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Fe=he}},setLocked:function(he){z=he},setClear:function(he){be!==he&&(we&&(he=1-he),t.clearDepth(he),be=he)},reset:function(){z=!1,Ee=null,Fe=null,be=null,we=!1}}}function s(){let z=!1,we=null,Ee=null,Fe=null,be=null,he=null,Ve=null,tt=null,dt=null;return{setTest:function(ft){z||(ft?B(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(ft){we!==ft&&!z&&(t.stencilMask(ft),we=ft)},setFunc:function(ft,Dn,G){(Ee!==ft||Fe!==Dn||be!==G)&&(t.stencilFunc(ft,Dn,G),Ee=ft,Fe=Dn,be=G)},setOp:function(ft,Dn,G){(he!==ft||Ve!==Dn||tt!==G)&&(t.stencilOp(ft,Dn,G),he=ft,Ve=Dn,tt=G)},setLocked:function(ft){z=ft},setClear:function(ft){dt!==ft&&(t.clearStencil(ft),dt=ft)},reset:function(){z=!1,we=null,Ee=null,Fe=null,be=null,he=null,Ve=null,tt=null,dt=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],v=null,_=!1,m=null,p=null,A=null,M=null,y=null,L=null,I=null,P=new yt(0,0,0),H=0,T=!1,C=null,O=null,U=null,D=null,N=null;const J=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,ee=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=ee>=1):q.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=ee>=2);let xe=null,Me={};const Le=t.getParameter(t.SCISSOR_BOX),Ge=t.getParameter(t.VIEWPORT),_t=new jt().fromArray(Le),Ke=new jt().fromArray(Ge);function ie(z,we,Ee,Fe){const be=new Uint8Array(4),he=t.createTexture();t.bindTexture(z,he),t.texParameteri(z,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(z,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ve=0;Ve<Ee;Ve++)z===t.TEXTURE_3D||z===t.TEXTURE_2D_ARRAY?t.texImage3D(we,0,t.RGBA,1,1,Fe,0,t.RGBA,t.UNSIGNED_BYTE,be):t.texImage2D(we+Ve,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,be);return he}const ye={};ye[t.TEXTURE_2D]=ie(t.TEXTURE_2D,t.TEXTURE_2D,1),ye[t.TEXTURE_CUBE_MAP]=ie(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[t.TEXTURE_2D_ARRAY]=ie(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ye[t.TEXTURE_3D]=ie(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),B(t.DEPTH_TEST),o.setFunc(oo),se(!1),X(hh),B(t.CULL_FACE),V(As);function B(z){u[z]!==!0&&(t.enable(z),u[z]=!0)}function ue(z){u[z]!==!1&&(t.disable(z),u[z]=!1)}function oe(z,we){return d[z]!==we?(t.bindFramebuffer(z,we),d[z]=we,z===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=we),z===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=we),!0):!1}function me(z,we){let Ee=h,Fe=!1;if(z){Ee=f.get(we),Ee===void 0&&(Ee=[],f.set(we,Ee));const be=z.textures;if(Ee.length!==be.length||Ee[0]!==t.COLOR_ATTACHMENT0){for(let he=0,Ve=be.length;he<Ve;he++)Ee[he]=t.COLOR_ATTACHMENT0+he;Ee.length=be.length,Fe=!0}}else Ee[0]!==t.BACK&&(Ee[0]=t.BACK,Fe=!0);Fe&&t.drawBuffers(Ee)}function Ze(z){return v!==z?(t.useProgram(z),v=z,!0):!1}const R={[Xs]:t.FUNC_ADD,[yT]:t.FUNC_SUBTRACT,[wT]:t.FUNC_REVERSE_SUBTRACT};R[ST]=t.MIN,R[MT]=t.MAX;const g={[ET]:t.ZERO,[TT]:t.ONE,[AT]:t.SRC_COLOR,[_u]:t.SRC_ALPHA,[IT]:t.SRC_ALPHA_SATURATE,[DT]:t.DST_COLOR,[RT]:t.DST_ALPHA,[CT]:t.ONE_MINUS_SRC_COLOR,[bu]:t.ONE_MINUS_SRC_ALPHA,[LT]:t.ONE_MINUS_DST_COLOR,[PT]:t.ONE_MINUS_DST_ALPHA,[UT]:t.CONSTANT_COLOR,[OT]:t.ONE_MINUS_CONSTANT_COLOR,[NT]:t.CONSTANT_ALPHA,[FT]:t.ONE_MINUS_CONSTANT_ALPHA};function V(z,we,Ee,Fe,be,he,Ve,tt,dt,ft){if(z===As){_===!0&&(ue(t.BLEND),_=!1);return}if(_===!1&&(B(t.BLEND),_=!0),z!==xT){if(z!==m||ft!==T){if((p!==Xs||y!==Xs)&&(t.blendEquation(t.FUNC_ADD),p=Xs,y=Xs),ft)switch(z){case Vr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ph:t.blendFunc(t.ONE,t.ONE);break;case mh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case gh:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Vr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ph:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case mh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}A=null,M=null,L=null,I=null,P.set(0,0,0),H=0,m=z,T=ft}return}be=be||we,he=he||Ee,Ve=Ve||Fe,(we!==p||be!==y)&&(t.blendEquationSeparate(R[we],R[be]),p=we,y=be),(Ee!==A||Fe!==M||he!==L||Ve!==I)&&(t.blendFuncSeparate(g[Ee],g[Fe],g[he],g[Ve]),A=Ee,M=Fe,L=he,I=Ve),(tt.equals(P)===!1||dt!==H)&&(t.blendColor(tt.r,tt.g,tt.b,dt),P.copy(tt),H=dt),m=z,T=!1}function j(z,we){z.side===Ki?ue(t.CULL_FACE):B(t.CULL_FACE);let Ee=z.side===kn;we&&(Ee=!Ee),se(Ee),z.blending===Vr&&z.transparent===!1?V(As):V(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const Fe=z.stencilWrite;a.setTest(Fe),Fe&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),te(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?B(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function se(z){C!==z&&(z?t.frontFace(t.CW):t.frontFace(t.CCW),C=z)}function X(z){z!==vT?(B(t.CULL_FACE),z!==O&&(z===hh?t.cullFace(t.BACK):z===_T?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),O=z}function ge(z){z!==U&&(Y&&t.lineWidth(z),U=z)}function te(z,we,Ee){z?(B(t.POLYGON_OFFSET_FILL),(D!==we||N!==Ee)&&(t.polygonOffset(we,Ee),D=we,N=Ee)):ue(t.POLYGON_OFFSET_FILL)}function ce(z){z?B(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function de(z){z===void 0&&(z=t.TEXTURE0+J-1),xe!==z&&(t.activeTexture(z),xe=z)}function Pe(z,we,Ee){Ee===void 0&&(xe===null?Ee=t.TEXTURE0+J-1:Ee=xe);let Fe=Me[Ee];Fe===void 0&&(Fe={type:void 0,texture:void 0},Me[Ee]=Fe),(Fe.type!==z||Fe.texture!==we)&&(xe!==Ee&&(t.activeTexture(Ee),xe=Ee),t.bindTexture(z,we||ye[z]),Fe.type=z,Fe.texture=we)}function S(){const z=Me[xe];z!==void 0&&z.type!==void 0&&(t.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function x(){try{t.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function k(){try{t.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function K(){try{t.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{t.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Z(){try{t.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ie(){try{t.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ve(){try{t.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function De(){try{t.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ue(){try{t.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _e(){try{t.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ce(z){_t.equals(z)===!1&&(t.scissor(z.x,z.y,z.z,z.w),_t.copy(z))}function Be(z){Ke.equals(z)===!1&&(t.viewport(z.x,z.y,z.z,z.w),Ke.copy(z))}function Oe(z,we){let Ee=c.get(we);Ee===void 0&&(Ee=new WeakMap,c.set(we,Ee));let Fe=Ee.get(z);Fe===void 0&&(Fe=t.getUniformBlockIndex(we,z.name),Ee.set(z,Fe))}function Te(z,we){const Fe=c.get(we).get(z);l.get(we)!==Fe&&(t.uniformBlockBinding(we,Fe,z.__bindingPointIndex),l.set(we,Fe))}function ct(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},xe=null,Me={},d={},f=new WeakMap,h=[],v=null,_=!1,m=null,p=null,A=null,M=null,y=null,L=null,I=null,P=new yt(0,0,0),H=0,T=!1,C=null,O=null,U=null,D=null,N=null,_t.set(0,0,t.canvas.width,t.canvas.height),Ke.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:B,disable:ue,bindFramebuffer:oe,drawBuffers:me,useProgram:Ze,setBlending:V,setMaterial:j,setFlipSided:se,setCullFace:X,setLineWidth:ge,setPolygonOffset:te,setScissorTest:ce,activeTexture:de,bindTexture:Pe,unbindTexture:S,compressedTexImage2D:x,compressedTexImage3D:k,texImage2D:Ue,texImage3D:_e,updateUBOMapping:Oe,uniformBlockBinding:Te,texStorage2D:ve,texStorage3D:De,texSubImage2D:K,texSubImage3D:le,compressedTexSubImage2D:Z,compressedTexSubImage3D:Ie,scissor:Ce,viewport:Be,reset:ct}}function _P(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(S,x){return h?new OffscreenCanvas(S,x):ia("canvas")}function _(S,x,k){let K=1;const le=Pe(S);if((le.width>k||le.height>k)&&(K=k/Math.max(le.width,le.height)),K<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const Z=Math.floor(K*le.width),Ie=Math.floor(K*le.height);d===void 0&&(d=v(Z,Ie));const ve=x?v(Z,Ie):d;return ve.width=Z,ve.height=Ie,ve.getContext("2d").drawImage(S,0,0,Z,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+Z+"x"+Ie+")."),ve}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),S;return S}function m(S){return S.generateMipmaps}function p(S){t.generateMipmap(S)}function A(S){return S.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?t.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(S,x,k,K,le=!1){if(S!==null){if(t[S]!==void 0)return t[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let Z=x;if(x===t.RED&&(k===t.FLOAT&&(Z=t.R32F),k===t.HALF_FLOAT&&(Z=t.R16F),k===t.UNSIGNED_BYTE&&(Z=t.R8)),x===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(Z=t.R8UI),k===t.UNSIGNED_SHORT&&(Z=t.R16UI),k===t.UNSIGNED_INT&&(Z=t.R32UI),k===t.BYTE&&(Z=t.R8I),k===t.SHORT&&(Z=t.R16I),k===t.INT&&(Z=t.R32I)),x===t.RG&&(k===t.FLOAT&&(Z=t.RG32F),k===t.HALF_FLOAT&&(Z=t.RG16F),k===t.UNSIGNED_BYTE&&(Z=t.RG8)),x===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(Z=t.RG8UI),k===t.UNSIGNED_SHORT&&(Z=t.RG16UI),k===t.UNSIGNED_INT&&(Z=t.RG32UI),k===t.BYTE&&(Z=t.RG8I),k===t.SHORT&&(Z=t.RG16I),k===t.INT&&(Z=t.RG32I)),x===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),k===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),k===t.UNSIGNED_INT&&(Z=t.RGB32UI),k===t.BYTE&&(Z=t.RGB8I),k===t.SHORT&&(Z=t.RGB16I),k===t.INT&&(Z=t.RGB32I)),x===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),k===t.UNSIGNED_INT&&(Z=t.RGBA32UI),k===t.BYTE&&(Z=t.RGBA8I),k===t.SHORT&&(Z=t.RGBA16I),k===t.INT&&(Z=t.RGBA32I)),x===t.RGB&&k===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),x===t.RGBA){const Ie=le?Ll:Mt.getTransfer(K);k===t.FLOAT&&(Z=t.RGBA32F),k===t.HALF_FLOAT&&(Z=t.RGBA16F),k===t.UNSIGNED_BYTE&&(Z=Ie===Lt?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function y(S,x){let k;return S?x===null||x===or||x===ea?k=t.DEPTH24_STENCIL8:x===Zi?k=t.DEPTH32F_STENCIL8:x===Jo&&(k=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===or||x===ea?k=t.DEPTH_COMPONENT24:x===Zi?k=t.DEPTH_COMPONENT32F:x===Jo&&(k=t.DEPTH_COMPONENT16),k}function L(S,x){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==gi&&S.minFilter!==Ai?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function I(S){const x=S.target;x.removeEventListener("dispose",I),H(x),x.isVideoTexture&&u.delete(x)}function P(S){const x=S.target;x.removeEventListener("dispose",P),C(x)}function H(S){const x=i.get(S);if(x.__webglInit===void 0)return;const k=S.source,K=f.get(k);if(K){const le=K[x.__cacheKey];le.usedTimes--,le.usedTimes===0&&T(S),Object.keys(K).length===0&&f.delete(k)}i.remove(S)}function T(S){const x=i.get(S);t.deleteTexture(x.__webglTexture);const k=S.source,K=f.get(k);delete K[x.__cacheKey],o.memory.textures--}function C(S){const x=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let le=0;le<x.__webglFramebuffer[K].length;le++)t.deleteFramebuffer(x.__webglFramebuffer[K][le]);else t.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)t.deleteFramebuffer(x.__webglFramebuffer[K]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const k=S.textures;for(let K=0,le=k.length;K<le;K++){const Z=i.get(k[K]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(k[K])}i.remove(S)}let O=0;function U(){O=0}function D(){const S=O;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),O+=1,S}function N(S){const x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function J(S,x){const k=i.get(S);if(S.isVideoTexture&&ce(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&k.__version!==S.version){const K=S.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(k,S,x);return}}else S.isExternalTexture&&(k.__webglTexture=S.sourceTexture?S.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+x)}function Y(S,x){const k=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&k.__version!==S.version){ye(k,S,x);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+x)}function ee(S,x){const k=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&k.__version!==S.version){ye(k,S,x);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+x)}function q(S,x){const k=i.get(S);if(S.version>0&&k.__version!==S.version){B(k,S,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+x)}const xe={[Ru]:t.REPEAT,[qs]:t.CLAMP_TO_EDGE,[Pu]:t.MIRRORED_REPEAT},Me={[gi]:t.NEAREST,[jT]:t.NEAREST_MIPMAP_NEAREST,[La]:t.NEAREST_MIPMAP_LINEAR,[Ai]:t.LINEAR,[yc]:t.LINEAR_MIPMAP_NEAREST,[Ys]:t.LINEAR_MIPMAP_LINEAR},Le={[ZT]:t.NEVER,[iA]:t.ALWAYS,[QT]:t.LESS,[iv]:t.LEQUAL,[JT]:t.EQUAL,[nA]:t.GEQUAL,[eA]:t.GREATER,[tA]:t.NOTEQUAL};function Ge(S,x){if(x.type===Zi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ai||x.magFilter===yc||x.magFilter===La||x.magFilter===Ys||x.minFilter===Ai||x.minFilter===yc||x.minFilter===La||x.minFilter===Ys)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(S,t.TEXTURE_WRAP_S,xe[x.wrapS]),t.texParameteri(S,t.TEXTURE_WRAP_T,xe[x.wrapT]),(S===t.TEXTURE_3D||S===t.TEXTURE_2D_ARRAY)&&t.texParameteri(S,t.TEXTURE_WRAP_R,xe[x.wrapR]),t.texParameteri(S,t.TEXTURE_MAG_FILTER,Me[x.magFilter]),t.texParameteri(S,t.TEXTURE_MIN_FILTER,Me[x.minFilter]),x.compareFunction&&(t.texParameteri(S,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(S,t.TEXTURE_COMPARE_FUNC,Le[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===gi||x.minFilter!==La&&x.minFilter!==Ys||x.type===Zi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(S,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function _t(S,x){let k=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",I));const K=x.source;let le=f.get(K);le===void 0&&(le={},f.set(K,le));const Z=N(x);if(Z!==S.__cacheKey){le[Z]===void 0&&(le[Z]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),le[Z].usedTimes++;const Ie=le[S.__cacheKey];Ie!==void 0&&(le[S.__cacheKey].usedTimes--,Ie.usedTimes===0&&T(x)),S.__cacheKey=Z,S.__webglTexture=le[Z].texture}return k}function Ke(S,x,k){return Math.floor(Math.floor(S/k)/x)}function ie(S,x,k,K){const Z=S.updateRanges;if(Z.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,k,K,x.data);else{Z.sort((_e,Ce)=>_e.start-Ce.start);let Ie=0;for(let _e=1;_e<Z.length;_e++){const Ce=Z[Ie],Be=Z[_e],Oe=Ce.start+Ce.count,Te=Ke(Be.start,x.width,4),ct=Ke(Ce.start,x.width,4);Be.start<=Oe+1&&Te===ct&&Ke(Be.start+Be.count-1,x.width,4)===Te?Ce.count=Math.max(Ce.count,Be.start+Be.count-Ce.start):(++Ie,Z[Ie]=Be)}Z.length=Ie+1;const ve=t.getParameter(t.UNPACK_ROW_LENGTH),De=t.getParameter(t.UNPACK_SKIP_PIXELS),Ue=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let _e=0,Ce=Z.length;_e<Ce;_e++){const Be=Z[_e],Oe=Math.floor(Be.start/4),Te=Math.ceil(Be.count/4),ct=Oe%x.width,z=Math.floor(Oe/x.width),we=Te,Ee=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ct),t.pixelStorei(t.UNPACK_SKIP_ROWS,z),n.texSubImage2D(t.TEXTURE_2D,0,ct,z,we,Ee,k,K,x.data)}S.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ve),t.pixelStorei(t.UNPACK_SKIP_PIXELS,De),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ue)}}function ye(S,x,k){let K=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=t.TEXTURE_3D);const le=_t(S,x),Z=x.source;n.bindTexture(K,S.__webglTexture,t.TEXTURE0+k);const Ie=i.get(Z);if(Z.version!==Ie.__version||le===!0){n.activeTexture(t.TEXTURE0+k);const ve=Mt.getPrimaries(Mt.workingColorSpace),De=x.colorSpace===vs?null:Mt.getPrimaries(x.colorSpace),Ue=x.colorSpace===vs||ve===De?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let _e=_(x.image,!1,s.maxTextureSize);_e=de(x,_e);const Ce=r.convert(x.format,x.colorSpace),Be=r.convert(x.type);let Oe=M(x.internalFormat,Ce,Be,x.colorSpace,x.isVideoTexture);Ge(K,x);let Te;const ct=x.mipmaps,z=x.isVideoTexture!==!0,we=Ie.__version===void 0||le===!0,Ee=Z.dataReady,Fe=L(x,_e);if(x.isDepthTexture)Oe=y(x.format===na,x.type),we&&(z?n.texStorage2D(t.TEXTURE_2D,1,Oe,_e.width,_e.height):n.texImage2D(t.TEXTURE_2D,0,Oe,_e.width,_e.height,0,Ce,Be,null));else if(x.isDataTexture)if(ct.length>0){z&&we&&n.texStorage2D(t.TEXTURE_2D,Fe,Oe,ct[0].width,ct[0].height);for(let be=0,he=ct.length;be<he;be++)Te=ct[be],z?Ee&&n.texSubImage2D(t.TEXTURE_2D,be,0,0,Te.width,Te.height,Ce,Be,Te.data):n.texImage2D(t.TEXTURE_2D,be,Oe,Te.width,Te.height,0,Ce,Be,Te.data);x.generateMipmaps=!1}else z?(we&&n.texStorage2D(t.TEXTURE_2D,Fe,Oe,_e.width,_e.height),Ee&&ie(x,_e,Ce,Be)):n.texImage2D(t.TEXTURE_2D,0,Oe,_e.width,_e.height,0,Ce,Be,_e.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){z&&we&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Fe,Oe,ct[0].width,ct[0].height,_e.depth);for(let be=0,he=ct.length;be<he;be++)if(Te=ct[be],x.format!==hi)if(Ce!==null)if(z){if(Ee)if(x.layerUpdates.size>0){const Ve=Hh(Te.width,Te.height,x.format,x.type);for(const tt of x.layerUpdates){const dt=Te.data.subarray(tt*Ve/Te.data.BYTES_PER_ELEMENT,(tt+1)*Ve/Te.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,be,0,0,tt,Te.width,Te.height,1,Ce,dt)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,be,0,0,0,Te.width,Te.height,_e.depth,Ce,Te.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,be,Oe,Te.width,Te.height,_e.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?Ee&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,be,0,0,0,Te.width,Te.height,_e.depth,Ce,Be,Te.data):n.texImage3D(t.TEXTURE_2D_ARRAY,be,Oe,Te.width,Te.height,_e.depth,0,Ce,Be,Te.data)}else{z&&we&&n.texStorage2D(t.TEXTURE_2D,Fe,Oe,ct[0].width,ct[0].height);for(let be=0,he=ct.length;be<he;be++)Te=ct[be],x.format!==hi?Ce!==null?z?Ee&&n.compressedTexSubImage2D(t.TEXTURE_2D,be,0,0,Te.width,Te.height,Ce,Te.data):n.compressedTexImage2D(t.TEXTURE_2D,be,Oe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?Ee&&n.texSubImage2D(t.TEXTURE_2D,be,0,0,Te.width,Te.height,Ce,Be,Te.data):n.texImage2D(t.TEXTURE_2D,be,Oe,Te.width,Te.height,0,Ce,Be,Te.data)}else if(x.isDataArrayTexture)if(z){if(we&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Fe,Oe,_e.width,_e.height,_e.depth),Ee)if(x.layerUpdates.size>0){const be=Hh(_e.width,_e.height,x.format,x.type);for(const he of x.layerUpdates){const Ve=_e.data.subarray(he*be/_e.data.BYTES_PER_ELEMENT,(he+1)*be/_e.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,_e.width,_e.height,1,Ce,Be,Ve)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ce,Be,_e.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Oe,_e.width,_e.height,_e.depth,0,Ce,Be,_e.data);else if(x.isData3DTexture)z?(we&&n.texStorage3D(t.TEXTURE_3D,Fe,Oe,_e.width,_e.height,_e.depth),Ee&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ce,Be,_e.data)):n.texImage3D(t.TEXTURE_3D,0,Oe,_e.width,_e.height,_e.depth,0,Ce,Be,_e.data);else if(x.isFramebufferTexture){if(we)if(z)n.texStorage2D(t.TEXTURE_2D,Fe,Oe,_e.width,_e.height);else{let be=_e.width,he=_e.height;for(let Ve=0;Ve<Fe;Ve++)n.texImage2D(t.TEXTURE_2D,Ve,Oe,be,he,0,Ce,Be,null),be>>=1,he>>=1}}else if(ct.length>0){if(z&&we){const be=Pe(ct[0]);n.texStorage2D(t.TEXTURE_2D,Fe,Oe,be.width,be.height)}for(let be=0,he=ct.length;be<he;be++)Te=ct[be],z?Ee&&n.texSubImage2D(t.TEXTURE_2D,be,0,0,Ce,Be,Te):n.texImage2D(t.TEXTURE_2D,be,Oe,Ce,Be,Te);x.generateMipmaps=!1}else if(z){if(we){const be=Pe(_e);n.texStorage2D(t.TEXTURE_2D,Fe,Oe,be.width,be.height)}Ee&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ce,Be,_e)}else n.texImage2D(t.TEXTURE_2D,0,Oe,Ce,Be,_e);m(x)&&p(K),Ie.__version=Z.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function B(S,x,k){if(x.image.length!==6)return;const K=_t(S,x),le=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,S.__webglTexture,t.TEXTURE0+k);const Z=i.get(le);if(le.version!==Z.__version||K===!0){n.activeTexture(t.TEXTURE0+k);const Ie=Mt.getPrimaries(Mt.workingColorSpace),ve=x.colorSpace===vs?null:Mt.getPrimaries(x.colorSpace),De=x.colorSpace===vs||Ie===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const Ue=x.isCompressedTexture||x.image[0].isCompressedTexture,_e=x.image[0]&&x.image[0].isDataTexture,Ce=[];for(let he=0;he<6;he++)!Ue&&!_e?Ce[he]=_(x.image[he],!0,s.maxCubemapSize):Ce[he]=_e?x.image[he].image:x.image[he],Ce[he]=de(x,Ce[he]);const Be=Ce[0],Oe=r.convert(x.format,x.colorSpace),Te=r.convert(x.type),ct=M(x.internalFormat,Oe,Te,x.colorSpace),z=x.isVideoTexture!==!0,we=Z.__version===void 0||K===!0,Ee=le.dataReady;let Fe=L(x,Be);Ge(t.TEXTURE_CUBE_MAP,x);let be;if(Ue){z&&we&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Fe,ct,Be.width,Be.height);for(let he=0;he<6;he++){be=Ce[he].mipmaps;for(let Ve=0;Ve<be.length;Ve++){const tt=be[Ve];x.format!==hi?Oe!==null?z?Ee&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ve,0,0,tt.width,tt.height,Oe,tt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ve,ct,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ve,0,0,tt.width,tt.height,Oe,Te,tt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ve,ct,tt.width,tt.height,0,Oe,Te,tt.data)}}}else{if(be=x.mipmaps,z&&we){be.length>0&&Fe++;const he=Pe(Ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Fe,ct,he.width,he.height)}for(let he=0;he<6;he++)if(_e){z?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ce[he].width,Ce[he].height,Oe,Te,Ce[he].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ct,Ce[he].width,Ce[he].height,0,Oe,Te,Ce[he].data);for(let Ve=0;Ve<be.length;Ve++){const dt=be[Ve].image[he].image;z?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ve+1,0,0,dt.width,dt.height,Oe,Te,dt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ve+1,ct,dt.width,dt.height,0,Oe,Te,dt.data)}}else{z?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Oe,Te,Ce[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ct,Oe,Te,Ce[he]);for(let Ve=0;Ve<be.length;Ve++){const tt=be[Ve];z?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ve+1,0,0,Oe,Te,tt.image[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ve+1,ct,Oe,Te,tt.image[he])}}}m(x)&&p(t.TEXTURE_CUBE_MAP),Z.__version=le.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function ue(S,x,k,K,le,Z){const Ie=r.convert(k.format,k.colorSpace),ve=r.convert(k.type),De=M(k.internalFormat,Ie,ve,k.colorSpace),Ue=i.get(x),_e=i.get(k);if(_e.__renderTarget=x,!Ue.__hasExternalTextures){const Ce=Math.max(1,x.width>>Z),Be=Math.max(1,x.height>>Z);le===t.TEXTURE_3D||le===t.TEXTURE_2D_ARRAY?n.texImage3D(le,Z,De,Ce,Be,x.depth,0,Ie,ve,null):n.texImage2D(le,Z,De,Ce,Be,0,Ie,ve,null)}n.bindFramebuffer(t.FRAMEBUFFER,S),te(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,le,_e.__webglTexture,0,ge(x)):(le===t.TEXTURE_2D||le>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,le,_e.__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function oe(S,x,k){if(t.bindRenderbuffer(t.RENDERBUFFER,S),x.depthBuffer){const K=x.depthTexture,le=K&&K.isDepthTexture?K.type:null,Z=y(x.stencilBuffer,le),Ie=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=ge(x);te(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ve,Z,x.width,x.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,Z,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,Z,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ie,t.RENDERBUFFER,S)}else{const K=x.textures;for(let le=0;le<K.length;le++){const Z=K[le],Ie=r.convert(Z.format,Z.colorSpace),ve=r.convert(Z.type),De=M(Z.internalFormat,Ie,ve,Z.colorSpace),Ue=ge(x);k&&te(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,De,x.width,x.height):te(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ue,De,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,De,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function me(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(x.depthTexture);K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),J(x.depthTexture,0);const le=K.__webglTexture,Z=ge(x);if(x.depthTexture.format===ta)te(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0);else if(x.depthTexture.format===na)te(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Ze(S){const x=i.get(S),k=S.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==S.depthTexture){const K=S.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const le=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",le)};K.addEventListener("dispose",le),x.__depthDisposeCallback=le}x.__boundDepthTexture=K}if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const K=S.texture.mipmaps;K&&K.length>0?me(x.__webglFramebuffer[0],S):me(x.__webglFramebuffer,S)}else if(k){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=t.createRenderbuffer(),oe(x.__webglDepthbuffer[K],S,!1);else{const le=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,Z)}}else{const K=S.texture.mipmaps;if(K&&K.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),oe(x.__webglDepthbuffer,S,!1);else{const le=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,Z)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function R(S,x,k){const K=i.get(S);x!==void 0&&ue(K.__webglFramebuffer,S,S.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&Ze(S)}function g(S){const x=S.texture,k=i.get(S),K=i.get(x);S.addEventListener("dispose",P);const le=S.textures,Z=S.isWebGLCubeRenderTarget===!0,Ie=le.length>1;if(Ie||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=x.version,o.memory.textures++),Z){k.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[ve]=[];for(let De=0;De<x.mipmaps.length;De++)k.__webglFramebuffer[ve][De]=t.createFramebuffer()}else k.__webglFramebuffer[ve]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let ve=0;ve<x.mipmaps.length;ve++)k.__webglFramebuffer[ve]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(Ie)for(let ve=0,De=le.length;ve<De;ve++){const Ue=i.get(le[ve]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=t.createTexture(),o.memory.textures++)}if(S.samples>0&&te(S)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ve=0;ve<le.length;ve++){const De=le[ve];k.__webglColorRenderbuffer[ve]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[ve]);const Ue=r.convert(De.format,De.colorSpace),_e=r.convert(De.type),Ce=M(De.internalFormat,Ue,_e,De.colorSpace,S.isXRRenderTarget===!0),Be=ge(S);t.renderbufferStorageMultisample(t.RENDERBUFFER,Be,Ce,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,k.__webglColorRenderbuffer[ve])}t.bindRenderbuffer(t.RENDERBUFFER,null),S.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),oe(k.__webglDepthRenderbuffer,S,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),Ge(t.TEXTURE_CUBE_MAP,x);for(let ve=0;ve<6;ve++)if(x.mipmaps&&x.mipmaps.length>0)for(let De=0;De<x.mipmaps.length;De++)ue(k.__webglFramebuffer[ve][De],S,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,De);else ue(k.__webglFramebuffer[ve],S,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(x)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ie){for(let ve=0,De=le.length;ve<De;ve++){const Ue=le[ve],_e=i.get(Ue);let Ce=t.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(Ce=S.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ce,_e.__webglTexture),Ge(Ce,Ue),ue(k.__webglFramebuffer,S,Ue,t.COLOR_ATTACHMENT0+ve,Ce,0),m(Ue)&&p(Ce)}n.unbindTexture()}else{let ve=t.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ve=S.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ve,K.__webglTexture),Ge(ve,x),x.mipmaps&&x.mipmaps.length>0)for(let De=0;De<x.mipmaps.length;De++)ue(k.__webglFramebuffer[De],S,x,t.COLOR_ATTACHMENT0,ve,De);else ue(k.__webglFramebuffer,S,x,t.COLOR_ATTACHMENT0,ve,0);m(x)&&p(ve),n.unbindTexture()}S.depthBuffer&&Ze(S)}function V(S){const x=S.textures;for(let k=0,K=x.length;k<K;k++){const le=x[k];if(m(le)){const Z=A(S),Ie=i.get(le).__webglTexture;n.bindTexture(Z,Ie),p(Z),n.unbindTexture()}}}const j=[],se=[];function X(S){if(S.samples>0){if(te(S)===!1){const x=S.textures,k=S.width,K=S.height;let le=t.COLOR_BUFFER_BIT;const Z=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ie=i.get(S),ve=x.length>1;if(ve)for(let Ue=0;Ue<x.length;Ue++)n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const De=S.texture.mipmaps;De&&De.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ue=0;Ue<x.length;Ue++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(le|=t.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(le|=t.STENCIL_BUFFER_BIT)),ve){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ue]);const _e=i.get(x[Ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,_e,0)}t.blitFramebuffer(0,0,k,K,0,0,k,K,le,t.NEAREST),l===!0&&(j.length=0,se.length=0,j.push(t.COLOR_ATTACHMENT0+Ue),S.depthBuffer&&S.resolveDepthBuffer===!1&&(j.push(Z),se.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,se)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,j))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ve)for(let Ue=0;Ue<x.length;Ue++){n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ue]);const _e=i.get(x[Ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,_e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const x=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function ge(S){return Math.min(s.maxSamples,S.samples)}function te(S){const x=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ce(S){const x=o.render.frame;u.get(S)!==x&&(u.set(S,x),S.update())}function de(S,x){const k=S.colorSpace,K=S.format,le=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||k!==co&&k!==vs&&(Mt.getTransfer(k)===Lt?(K!==hi||le!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),x}function Pe(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=U,this.setTexture2D=J,this.setTexture2DArray=Y,this.setTexture3D=ee,this.setTextureCube=q,this.rebindTextures=R,this.setupRenderTarget=g,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=te}function bP(t,e){function n(i,s=vs){let r;const o=Mt.getTransfer(s);if(i===Oi)return t.UNSIGNED_BYTE;if(i===$d)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Xd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Kg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===qg)return t.BYTE;if(i===Yg)return t.SHORT;if(i===Jo)return t.UNSIGNED_SHORT;if(i===Wd)return t.INT;if(i===or)return t.UNSIGNED_INT;if(i===Zi)return t.FLOAT;if(i===ya)return t.HALF_FLOAT;if(i===Zg)return t.ALPHA;if(i===Qg)return t.RGB;if(i===hi)return t.RGBA;if(i===ta)return t.DEPTH_COMPONENT;if(i===na)return t.DEPTH_STENCIL;if(i===Jg)return t.RED;if(i===jd)return t.RED_INTEGER;if(i===ev)return t.RG;if(i===qd)return t.RG_INTEGER;if(i===Yd)return t.RGBA_INTEGER;if(i===al||i===ll||i===cl||i===ul)if(o===Lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===al)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ll)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===cl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ul)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===al)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ll)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===cl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ul)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Du||i===Lu||i===Iu||i===Uu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Du)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Lu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Iu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Uu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ou||i===Nu||i===Fu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ou||i===Nu)return o===Lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Fu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ku||i===Bu||i===Hu||i===zu||i===Vu||i===Gu||i===Wu||i===$u||i===Xu||i===ju||i===qu||i===Yu||i===Ku||i===Zu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ku)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Hu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$u)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ju)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ku)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dl||i===Qu||i===Ju)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===dl)return o===Lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ju)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tv||i===ed||i===td||i===nd)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===dl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ed)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===td)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nd)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ea?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Tv extends Cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const xP=`
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

}`;class wP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Tv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ps({vertexShader:xP,fragmentShader:yP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new pi(new ec(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SP extends fr{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,v=null;const _=new wP,m={},p=n.getContextAttributes();let A=null,M=null;const y=[],L=[],I=new lt;let P=null;const H=new Xn;H.viewport=new jt;const T=new Xn;T.viewport=new jt;const C=[H,T],O=new GA;let U=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ye=y[ie];return ye===void 0&&(ye=new Gc,y[ie]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(ie){let ye=y[ie];return ye===void 0&&(ye=new Gc,y[ie]=ye),ye.getGripSpace()},this.getHand=function(ie){let ye=y[ie];return ye===void 0&&(ye=new Gc,y[ie]=ye),ye.getHandSpace()};function N(ie){const ye=L.indexOf(ie.inputSource);if(ye===-1)return;const B=y[ye];B!==void 0&&(B.update(ie.inputSource,ie.frame,c||o),B.dispatchEvent({type:ie.type,data:ie.inputSource}))}function J(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",Y);for(let ie=0;ie<y.length;ie++){const ye=L[ie];ye!==null&&(L[ie]=null,y[ie].disconnect(ye))}U=null,D=null,_.reset();for(const ie in m)delete m[ie];e.setRenderTarget(A),h=null,f=null,d=null,s=null,M=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",J),s.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await n.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(s,n)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let B=null,ue=null,oe=null;p.depth&&(oe=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,B=p.stencil?na:ta,ue=p.stencil?ea:or);const me={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:r};f=d.createProjectionLayer(me),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new lr(f.textureWidth,f.textureHeight,{format:hi,type:Oi,depthTexture:new gv(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const B={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,n,B),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new lr(h.framebufferWidth,h.framebufferHeight,{format:hi,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ke.setContext(s),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(ie){for(let ye=0;ye<ie.removed.length;ye++){const B=ie.removed[ye],ue=L.indexOf(B);ue>=0&&(L[ue]=null,y[ue].disconnect(B))}for(let ye=0;ye<ie.added.length;ye++){const B=ie.added[ye];let ue=L.indexOf(B);if(ue===-1){for(let me=0;me<y.length;me++)if(me>=L.length){L.push(B),ue=me;break}else if(L[me]===null){L[me]=B,ue=me;break}if(ue===-1)break}const oe=y[ue];oe&&oe.connect(B)}}const ee=new Q,q=new Q;function xe(ie,ye,B){ee.setFromMatrixPosition(ye.matrixWorld),q.setFromMatrixPosition(B.matrixWorld);const ue=ee.distanceTo(q),oe=ye.projectionMatrix.elements,me=B.projectionMatrix.elements,Ze=oe[14]/(oe[10]-1),R=oe[14]/(oe[10]+1),g=(oe[9]+1)/oe[5],V=(oe[9]-1)/oe[5],j=(oe[8]-1)/oe[0],se=(me[8]+1)/me[0],X=Ze*j,ge=Ze*se,te=ue/(-j+se),ce=te*-j;if(ye.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(ce),ie.translateZ(te),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),oe[10]===-1)ie.projectionMatrix.copy(ye.projectionMatrix),ie.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const de=Ze+te,Pe=R+te,S=X-ce,x=ge+(ue-ce),k=g*R/Pe*de,K=V*R/Pe*de;ie.projectionMatrix.makePerspective(S,x,k,K,de,Pe),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function Me(ie,ye){ye===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ye.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let ye=ie.near,B=ie.far;_.texture!==null&&(_.depthNear>0&&(ye=_.depthNear),_.depthFar>0&&(B=_.depthFar)),O.near=T.near=H.near=ye,O.far=T.far=H.far=B,(U!==O.near||D!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),U=O.near,D=O.far),O.layers.mask=ie.layers.mask|6,H.layers.mask=O.layers.mask&3,T.layers.mask=O.layers.mask&5;const ue=ie.parent,oe=O.cameras;Me(O,ue);for(let me=0;me<oe.length;me++)Me(oe[me],ue);oe.length===2?xe(O,H,T):O.projectionMatrix.copy(H.projectionMatrix),Le(ie,O,ue)};function Le(ie,ye,B){B===null?ie.matrix.copy(ye.matrixWorld):(ie.matrix.copy(B.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ye.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ye.projectionMatrix),ie.projectionMatrixInverse.copy(ye.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=id*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(ie){l=ie,f!==null&&(f.fixedFoveation=ie),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ie)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(O)},this.getCameraTexture=function(ie){return m[ie]};let Ge=null;function _t(ie,ye){if(u=ye.getViewerPose(c||o),v=ye,u!==null){const B=u.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let ue=!1;B.length!==O.cameras.length&&(O.cameras.length=0,ue=!0);for(let R=0;R<B.length;R++){const g=B[R];let V=null;if(h!==null)V=h.getViewport(g);else{const se=d.getViewSubImage(f,g);V=se.viewport,R===0&&(e.setRenderTargetTextures(M,se.colorTexture,se.depthStencilTexture),e.setRenderTarget(M))}let j=C[R];j===void 0&&(j=new Xn,j.layers.enable(R),j.viewport=new jt,C[R]=j),j.matrix.fromArray(g.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(g.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(V.x,V.y,V.width,V.height),R===0&&(O.matrix.copy(j.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),ue===!0&&O.cameras.push(j)}const oe=s.enabledFeatures;if(oe&&oe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&d){const R=d.getDepthInformation(B[0]);R&&R.isValid&&R.texture&&_.init(R,s.renderState)}if(oe&&oe.includes("camera-access")&&(e.state.unbindTexture(),d))for(let R=0;R<B.length;R++){const g=B[R].camera;if(g){let V=m[g];V||(V=new Tv,m[g]=V);const j=d.getCameraImage(g);V.sourceTexture=j}}}for(let B=0;B<y.length;B++){const ue=L[B],oe=y[B];ue!==null&&oe!==void 0&&oe.update(ue,ye,c||o)}Ge&&Ge(ie,ye),ye.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ye}),v=null}const Ke=new yv;Ke.setAnimationLoop(_t),this.setAnimationLoop=function(ie){Ge=ie},this.dispose=function(){}}}const Gs=new Ni,MP=new Kt;function EP(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,fv(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,A,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,A,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===kn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===kn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),M=A.envMap,y=A.envMapRotation;M&&(m.envMap.value=M,Gs.copy(y),Gs.x*=-1,Gs.y*=-1,Gs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Gs.y*=-1,Gs.z*=-1),m.envMapRotation.value.setFromMatrix4(MP.makeRotationFromEuler(Gs)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=M*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function TP(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,M){const y=M.program;i.uniformBlockBinding(A,y)}function c(A,M){let y=s[A.id];y===void 0&&(v(A),y=u(A),s[A.id]=y,A.addEventListener("dispose",m));const L=M.program;i.updateUBOMapping(A,L);const I=e.render.frame;r[A.id]!==I&&(f(A),r[A.id]=I)}function u(A){const M=d();A.__bindingPointIndex=M;const y=t.createBuffer(),L=A.__size,I=A.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,L,I),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,y),y}function d(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const M=s[A.id],y=A.uniforms,L=A.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let I=0,P=y.length;I<P;I++){const H=Array.isArray(y[I])?y[I]:[y[I]];for(let T=0,C=H.length;T<C;T++){const O=H[T];if(h(O,I,T,L)===!0){const U=O.__offset,D=Array.isArray(O.value)?O.value:[O.value];let N=0;for(let J=0;J<D.length;J++){const Y=D[J],ee=_(Y);typeof Y=="number"||typeof Y=="boolean"?(O.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,U+N,O.__data)):Y.isMatrix3?(O.__data[0]=Y.elements[0],O.__data[1]=Y.elements[1],O.__data[2]=Y.elements[2],O.__data[3]=0,O.__data[4]=Y.elements[3],O.__data[5]=Y.elements[4],O.__data[6]=Y.elements[5],O.__data[7]=0,O.__data[8]=Y.elements[6],O.__data[9]=Y.elements[7],O.__data[10]=Y.elements[8],O.__data[11]=0):(Y.toArray(O.__data,N),N+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,U,O.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(A,M,y,L){const I=A.value,P=M+"_"+y;if(L[P]===void 0)return typeof I=="number"||typeof I=="boolean"?L[P]=I:L[P]=I.clone(),!0;{const H=L[P];if(typeof I=="number"||typeof I=="boolean"){if(H!==I)return L[P]=I,!0}else if(H.equals(I)===!1)return H.copy(I),!0}return!1}function v(A){const M=A.uniforms;let y=0;const L=16;for(let P=0,H=M.length;P<H;P++){const T=Array.isArray(M[P])?M[P]:[M[P]];for(let C=0,O=T.length;C<O;C++){const U=T[C],D=Array.isArray(U.value)?U.value:[U.value];for(let N=0,J=D.length;N<J;N++){const Y=D[N],ee=_(Y),q=y%L,xe=q%ee.boundary,Me=q+xe;y+=xe,Me!==0&&L-Me<ee.storage&&(y+=L-Me),U.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=ee.storage}}}const I=y%L;return I>0&&(y+=L-I),A.__size=y,A.__cache={},this}function _(A){const M={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(M.boundary=4,M.storage=4):A.isVector2?(M.boundary=8,M.storage=8):A.isVector3||A.isColor?(M.boundary=16,M.storage=12):A.isVector4?(M.boundary=16,M.storage=16):A.isMatrix3?(M.boundary=48,M.storage=48):A.isMatrix4?(M.boundary=64,M.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),M}function m(A){const M=A.target;M.removeEventListener("dispose",m);const y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const A in s)t.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Av{constructor(e={}){const{canvas:n=oA(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const v=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const A=[],M=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let L=!1;this._outputColorSpace=pn;let I=0,P=0,H=null,T=-1,C=null;const O=new jt,U=new jt;let D=null;const N=new yt(0);let J=0,Y=n.width,ee=n.height,q=1,xe=null,Me=null;const Le=new jt(0,0,Y,ee),Ge=new jt(0,0,Y,ee);let _t=!1;const Ke=new Qd;let ie=!1,ye=!1;const B=new Kt,ue=new Q,oe=new jt,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function R(){return H===null?q:1}let g=i;function V(E,W){return n.getContext(E,W)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Gd}`),n.addEventListener("webglcontextlost",Ee,!1),n.addEventListener("webglcontextrestored",Fe,!1),n.addEventListener("webglcontextcreationerror",be,!1),g===null){const W="webgl2";if(g=V(W,E),g===null)throw V(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let j,se,X,ge,te,ce,de,Pe,S,x,k,K,le,Z,Ie,ve,De,Ue,_e,Ce,Be,Oe,Te,ct;function z(){j=new F2(g),j.init(),Oe=new bP(g,j),se=new P2(g,j,e,Oe),X=new vP(g,j),se.reversedDepthBuffer&&f&&X.buffers.depth.setReversed(!0),ge=new H2(g),te=new sP,ce=new _P(g,j,X,te,se,Oe,ge),de=new L2(y),Pe=new N2(y),S=new XA(g),Te=new C2(g,S),x=new k2(g,S,ge,Te),k=new V2(g,x,S,ge),_e=new z2(g,se,ce),ve=new D2(te),K=new iP(y,de,Pe,j,se,Te,ve),le=new EP(y,te),Z=new oP,Ie=new fP(j),Ue=new A2(y,de,Pe,X,k,h,l),De=new mP(y,k,se),ct=new TP(g,ge,se,X),Ce=new R2(g,j,ge),Be=new B2(g,j,ge),ge.programs=K.programs,y.capabilities=se,y.extensions=j,y.properties=te,y.renderLists=Z,y.shadowMap=De,y.state=X,y.info=ge}z();const we=new SP(y,g);this.xr=we,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const E=j.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=j.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(Y,ee,!1))},this.getSize=function(E){return E.set(Y,ee)},this.setSize=function(E,W,ne=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=E,ee=W,n.width=Math.floor(E*q),n.height=Math.floor(W*q),ne===!0&&(n.style.width=E+"px",n.style.height=W+"px"),this.setViewport(0,0,E,W)},this.getDrawingBufferSize=function(E){return E.set(Y*q,ee*q).floor()},this.setDrawingBufferSize=function(E,W,ne){Y=E,ee=W,q=ne,n.width=Math.floor(E*ne),n.height=Math.floor(W*ne),this.setViewport(0,0,E,W)},this.getCurrentViewport=function(E){return E.copy(O)},this.getViewport=function(E){return E.copy(Le)},this.setViewport=function(E,W,ne,re){E.isVector4?Le.set(E.x,E.y,E.z,E.w):Le.set(E,W,ne,re),X.viewport(O.copy(Le).multiplyScalar(q).round())},this.getScissor=function(E){return E.copy(Ge)},this.setScissor=function(E,W,ne,re){E.isVector4?Ge.set(E.x,E.y,E.z,E.w):Ge.set(E,W,ne,re),X.scissor(U.copy(Ge).multiplyScalar(q).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(E){X.setScissorTest(_t=E)},this.setOpaqueSort=function(E){xe=E},this.setTransparentSort=function(E){Me=E},this.getClearColor=function(E){return E.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(E=!0,W=!0,ne=!0){let re=0;if(E){let $=!1;if(H!==null){const Se=H.texture.format;$=Se===Yd||Se===qd||Se===jd}if($){const Se=H.texture.type,Ne=Se===Oi||Se===or||Se===Jo||Se===ea||Se===$d||Se===Xd,We=Ue.getClearColor(),He=Ue.getClearAlpha(),nt=We.r,it=We.g,qe=We.b;Ne?(v[0]=nt,v[1]=it,v[2]=qe,v[3]=He,g.clearBufferuiv(g.COLOR,0,v)):(_[0]=nt,_[1]=it,_[2]=qe,_[3]=He,g.clearBufferiv(g.COLOR,0,_))}else re|=g.COLOR_BUFFER_BIT}W&&(re|=g.DEPTH_BUFFER_BIT),ne&&(re|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ee,!1),n.removeEventListener("webglcontextrestored",Fe,!1),n.removeEventListener("webglcontextcreationerror",be,!1),Ue.dispose(),Z.dispose(),Ie.dispose(),te.dispose(),de.dispose(),Pe.dispose(),k.dispose(),Te.dispose(),ct.dispose(),K.dispose(),we.dispose(),we.removeEventListener("sessionstart",G),we.removeEventListener("sessionend",w),F.stop()};function Ee(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const E=ge.autoReset,W=De.enabled,ne=De.autoUpdate,re=De.needsUpdate,$=De.type;z(),ge.autoReset=E,De.enabled=W,De.autoUpdate=ne,De.needsUpdate=re,De.type=$}function be(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function he(E){const W=E.target;W.removeEventListener("dispose",he),Ve(W)}function Ve(E){tt(E),te.remove(E)}function tt(E){const W=te.get(E).programs;W!==void 0&&(W.forEach(function(ne){K.releaseProgram(ne)}),E.isShaderMaterial&&K.releaseShaderCache(E))}this.renderBufferDirect=function(E,W,ne,re,$,Se){W===null&&(W=me);const Ne=$.isMesh&&$.matrixWorld.determinant()<0,We=Gt(E,W,ne,re,$);X.setMaterial(re,Ne);let He=ne.index,nt=1;if(re.wireframe===!0){if(He=x.getWireframeAttribute(ne),He===void 0)return;nt=2}const it=ne.drawRange,qe=ne.attributes.position;let xt=it.start*nt,Pt=(it.start+it.count)*nt;Se!==null&&(xt=Math.max(xt,Se.start*nt),Pt=Math.min(Pt,(Se.start+Se.count)*nt)),He!==null?(xt=Math.max(xt,0),Pt=Math.min(Pt,He.count)):qe!=null&&(xt=Math.max(xt,0),Pt=Math.min(Pt,qe.count));const Wt=Pt-xt;if(Wt<0||Wt===1/0)return;Te.setup($,re,We,ne,He);let Bt,Ut=Ce;if(He!==null&&(Bt=S.get(He),Ut=Be,Ut.setIndex(Bt)),$.isMesh)re.wireframe===!0?(X.setLineWidth(re.wireframeLinewidth*R()),Ut.setMode(g.LINES)):Ut.setMode(g.TRIANGLES);else if($.isLine){let Qe=re.linewidth;Qe===void 0&&(Qe=1),X.setLineWidth(Qe*R()),$.isLineSegments?Ut.setMode(g.LINES):$.isLineLoop?Ut.setMode(g.LINE_LOOP):Ut.setMode(g.LINE_STRIP)}else $.isPoints?Ut.setMode(g.POINTS):$.isSprite&&Ut.setMode(g.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Gr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ut.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))Ut.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Qe=$._multiDrawStarts,zt=$._multiDrawCounts,wt=$._multiDrawCount,Hn=He?S.get(He).bytesPerElement:1,hr=te.get(re).currentProgram.getUniforms();for(let zn=0;zn<wt;zn++)hr.setValue(g,"_gl_DrawID",zn),Ut.render(Qe[zn]/Hn,zt[zn])}else if($.isInstancedMesh)Ut.renderInstances(xt,Wt,$.count);else if(ne.isInstancedBufferGeometry){const Qe=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,zt=Math.min(ne.instanceCount,Qe);Ut.renderInstances(xt,Wt,zt)}else Ut.render(xt,Wt)};function dt(E,W,ne){E.transparent===!0&&E.side===Ki&&E.forceSinglePass===!1?(E.side=kn,E.needsUpdate=!0,ot(E,W,ne),E.side=Rs,E.needsUpdate=!0,ot(E,W,ne),E.side=Ki):ot(E,W,ne)}this.compile=function(E,W,ne=null){ne===null&&(ne=E),p=Ie.get(ne),p.init(W),M.push(p),ne.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),E!==ne&&E.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights();const re=new Set;return E.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Se=$.material;if(Se)if(Array.isArray(Se))for(let Ne=0;Ne<Se.length;Ne++){const We=Se[Ne];dt(We,ne,$),re.add(We)}else dt(Se,ne,$),re.add(Se)}),p=M.pop(),re},this.compileAsync=function(E,W,ne=null){const re=this.compile(E,W,ne);return new Promise($=>{function Se(){if(re.forEach(function(Ne){te.get(Ne).currentProgram.isReady()&&re.delete(Ne)}),re.size===0){$(E);return}setTimeout(Se,10)}j.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let ft=null;function Dn(E){ft&&ft(E)}function G(){F.stop()}function w(){F.start()}const F=new yv;F.setAnimationLoop(Dn),typeof self<"u"&&F.setContext(self),this.setAnimationLoop=function(E){ft=E,we.setAnimationLoop(E),E===null?F.stop():F.start()},we.addEventListener("sessionstart",G),we.addEventListener("sessionend",w),this.render=function(E,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(W),W=we.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,W,H),p=Ie.get(E,M.length),p.init(W),M.push(p),B.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Ke.setFromProjectionMatrix(B,Ci,W.reversedDepth),ye=this.localClippingEnabled,ie=ve.init(this.clippingPlanes,ye),m=Z.get(E,A.length),m.init(),A.push(m),we.enabled===!0&&we.isPresenting===!0){const Se=y.xr.getDepthSensingMesh();Se!==null&&pe(Se,W,-1/0,y.sortObjects)}pe(E,W,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(xe,Me),Ze=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,Ze&&Ue.addToRenderList(m,E),this.info.render.frame++,ie===!0&&ve.beginShadows();const ne=p.state.shadowsArray;De.render(ne,E,W),ie===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=m.opaque,$=m.transmissive;if(p.setupLights(),W.isArrayCamera){const Se=W.cameras;if($.length>0)for(let Ne=0,We=Se.length;Ne<We;Ne++){const He=Se[Ne];ke(re,$,E,He)}Ze&&Ue.render(E);for(let Ne=0,We=Se.length;Ne<We;Ne++){const He=Se[Ne];Ae(m,E,He,He.viewport)}}else $.length>0&&ke(re,$,E,W),Ze&&Ue.render(E),Ae(m,E,W);H!==null&&P===0&&(ce.updateMultisampleRenderTarget(H),ce.updateRenderTargetMipmap(H)),E.isScene===!0&&E.onAfterRender(y,E,W),Te.resetDefaultState(),T=-1,C=null,M.pop(),M.length>0?(p=M[M.length-1],ie===!0&&ve.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function pe(E,W,ne,re){if(E.visible===!1)return;if(E.layers.test(W.layers)){if(E.isGroup)ne=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(W);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ke.intersectsSprite(E)){re&&oe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(B);const Ne=k.update(E),We=E.material;We.visible&&m.push(E,Ne,We,ne,oe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ke.intersectsObject(E))){const Ne=k.update(E),We=E.material;if(re&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),oe.copy(E.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),oe.copy(Ne.boundingSphere.center)),oe.applyMatrix4(E.matrixWorld).applyMatrix4(B)),Array.isArray(We)){const He=Ne.groups;for(let nt=0,it=He.length;nt<it;nt++){const qe=He[nt],xt=We[qe.materialIndex];xt&&xt.visible&&m.push(E,Ne,xt,ne,oe.z,qe)}}else We.visible&&m.push(E,Ne,We,ne,oe.z,null)}}const Se=E.children;for(let Ne=0,We=Se.length;Ne<We;Ne++)pe(Se[Ne],W,ne,re)}function Ae(E,W,ne,re){const $=E.opaque,Se=E.transmissive,Ne=E.transparent;p.setupLightsView(ne),ie===!0&&ve.setGlobalState(y.clippingPlanes,ne),re&&X.viewport(O.copy(re)),$.length>0&&je($,W,ne),Se.length>0&&je(Se,W,ne),Ne.length>0&&je(Ne,W,ne),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function ke(E,W,ne,re){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[re.id]===void 0&&(p.state.transmissionRenderTarget[re.id]=new lr(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?ya:Oi,minFilter:Ys,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const Se=p.state.transmissionRenderTarget[re.id],Ne=re.viewport||O;Se.setSize(Ne.z*y.transmissionResolutionScale,Ne.w*y.transmissionResolutionScale);const We=y.getRenderTarget(),He=y.getActiveCubeFace(),nt=y.getActiveMipmapLevel();y.setRenderTarget(Se),y.getClearColor(N),J=y.getClearAlpha(),J<1&&y.setClearColor(16777215,.5),y.clear(),Ze&&Ue.render(ne);const it=y.toneMapping;y.toneMapping=Cs;const qe=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),p.setupLightsView(re),ie===!0&&ve.setGlobalState(y.clippingPlanes,re),je(E,ne,re),ce.updateMultisampleRenderTarget(Se),ce.updateRenderTargetMipmap(Se),j.has("WEBGL_multisampled_render_to_texture")===!1){let xt=!1;for(let Pt=0,Wt=W.length;Pt<Wt;Pt++){const Bt=W[Pt],Ut=Bt.object,Qe=Bt.geometry,zt=Bt.material,wt=Bt.group;if(zt.side===Ki&&Ut.layers.test(re.layers)){const Hn=zt.side;zt.side=kn,zt.needsUpdate=!0,rt(Ut,ne,re,Qe,zt,wt),zt.side=Hn,zt.needsUpdate=!0,xt=!0}}xt===!0&&(ce.updateMultisampleRenderTarget(Se),ce.updateRenderTargetMipmap(Se))}y.setRenderTarget(We,He,nt),y.setClearColor(N,J),qe!==void 0&&(re.viewport=qe),y.toneMapping=it}function je(E,W,ne){const re=W.isScene===!0?W.overrideMaterial:null;for(let $=0,Se=E.length;$<Se;$++){const Ne=E[$],We=Ne.object,He=Ne.geometry,nt=Ne.group;let it=Ne.material;it.allowOverride===!0&&re!==null&&(it=re),We.layers.test(ne.layers)&&rt(We,W,ne,He,it,nt)}}function rt(E,W,ne,re,$,Se){E.onBeforeRender(y,W,ne,re,$,Se),E.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),$.onBeforeRender(y,W,ne,re,E,Se),$.transparent===!0&&$.side===Ki&&$.forceSinglePass===!1?($.side=kn,$.needsUpdate=!0,y.renderBufferDirect(ne,W,re,$,E,Se),$.side=Rs,$.needsUpdate=!0,y.renderBufferDirect(ne,W,re,$,E,Se),$.side=Ki):y.renderBufferDirect(ne,W,re,$,E,Se),E.onAfterRender(y,W,ne,re,$,Se)}function ot(E,W,ne){W.isScene!==!0&&(W=me);const re=te.get(E),$=p.state.lights,Se=p.state.shadowsArray,Ne=$.state.version,We=K.getParameters(E,$.state,Se,W,ne),He=K.getProgramCacheKey(We);let nt=re.programs;re.environment=E.isMeshStandardMaterial?W.environment:null,re.fog=W.fog,re.envMap=(E.isMeshStandardMaterial?Pe:de).get(E.envMap||re.environment),re.envMapRotation=re.environment!==null&&E.envMap===null?W.environmentRotation:E.envMapRotation,nt===void 0&&(E.addEventListener("dispose",he),nt=new Map,re.programs=nt);let it=nt.get(He);if(it!==void 0){if(re.currentProgram===it&&re.lightsStateVersion===Ne)return bt(E,We),it}else We.uniforms=K.getUniforms(E),E.onBeforeCompile(We,y),it=K.acquireProgram(We,He),nt.set(He,it),re.uniforms=We.uniforms;const qe=re.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(qe.clippingPlanes=ve.uniform),bt(E,We),re.needsLights=is(E),re.lightsStateVersion=Ne,re.needsLights&&(qe.ambientLightColor.value=$.state.ambient,qe.lightProbe.value=$.state.probe,qe.directionalLights.value=$.state.directional,qe.directionalLightShadows.value=$.state.directionalShadow,qe.spotLights.value=$.state.spot,qe.spotLightShadows.value=$.state.spotShadow,qe.rectAreaLights.value=$.state.rectArea,qe.ltc_1.value=$.state.rectAreaLTC1,qe.ltc_2.value=$.state.rectAreaLTC2,qe.pointLights.value=$.state.point,qe.pointLightShadows.value=$.state.pointShadow,qe.hemisphereLights.value=$.state.hemi,qe.directionalShadowMap.value=$.state.directionalShadowMap,qe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,qe.spotShadowMap.value=$.state.spotShadowMap,qe.spotLightMatrix.value=$.state.spotLightMatrix,qe.spotLightMap.value=$.state.spotLightMap,qe.pointShadowMap.value=$.state.pointShadowMap,qe.pointShadowMatrix.value=$.state.pointShadowMatrix),re.currentProgram=it,re.uniformsList=null,it}function Xe(E){if(E.uniformsList===null){const W=E.currentProgram.getUniforms();E.uniformsList=hl.seqWithValue(W.seq,E.uniforms)}return E.uniformsList}function bt(E,W){const ne=te.get(E);ne.outputColorSpace=W.outputColorSpace,ne.batching=W.batching,ne.batchingColor=W.batchingColor,ne.instancing=W.instancing,ne.instancingColor=W.instancingColor,ne.instancingMorph=W.instancingMorph,ne.skinning=W.skinning,ne.morphTargets=W.morphTargets,ne.morphNormals=W.morphNormals,ne.morphColors=W.morphColors,ne.morphTargetsCount=W.morphTargetsCount,ne.numClippingPlanes=W.numClippingPlanes,ne.numIntersection=W.numClipIntersection,ne.vertexAlphas=W.vertexAlphas,ne.vertexTangents=W.vertexTangents,ne.toneMapping=W.toneMapping}function Gt(E,W,ne,re,$){W.isScene!==!0&&(W=me),ce.resetTextureUnits();const Se=W.fog,Ne=re.isMeshStandardMaterial?W.environment:null,We=H===null?y.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:co,He=(re.isMeshStandardMaterial?Pe:de).get(re.envMap||Ne),nt=re.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,it=!!ne.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),qe=!!ne.morphAttributes.position,xt=!!ne.morphAttributes.normal,Pt=!!ne.morphAttributes.color;let Wt=Cs;re.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Wt=y.toneMapping);const Bt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Ut=Bt!==void 0?Bt.length:0,Qe=te.get(re),zt=p.state.lights;if(ie===!0&&(ye===!0||E!==C)){const yn=E===C&&re.id===T;ve.setState(re,E,yn)}let wt=!1;re.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==zt.state.version||Qe.outputColorSpace!==We||$.isBatchedMesh&&Qe.batching===!1||!$.isBatchedMesh&&Qe.batching===!0||$.isBatchedMesh&&Qe.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Qe.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Qe.instancing===!1||!$.isInstancedMesh&&Qe.instancing===!0||$.isSkinnedMesh&&Qe.skinning===!1||!$.isSkinnedMesh&&Qe.skinning===!0||$.isInstancedMesh&&Qe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Qe.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Qe.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Qe.instancingMorph===!1&&$.morphTexture!==null||Qe.envMap!==He||re.fog===!0&&Qe.fog!==Se||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==ve.numPlanes||Qe.numIntersection!==ve.numIntersection)||Qe.vertexAlphas!==nt||Qe.vertexTangents!==it||Qe.morphTargets!==qe||Qe.morphNormals!==xt||Qe.morphColors!==Pt||Qe.toneMapping!==Wt||Qe.morphTargetsCount!==Ut)&&(wt=!0):(wt=!0,Qe.__version=re.version);let Hn=Qe.currentProgram;wt===!0&&(Hn=ot(re,W,$));let hr=!1,zn=!1,bo=!1;const Vt=Hn.getUniforms(),Jn=Qe.uniforms;if(X.useProgram(Hn.program)&&(hr=!0,zn=!0,bo=!0),re.id!==T&&(T=re.id,zn=!0),hr||C!==E){X.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Vt.setValue(g,"projectionMatrix",E.projectionMatrix),Vt.setValue(g,"viewMatrix",E.matrixWorldInverse);const In=Vt.map.cameraPosition;In!==void 0&&In.setValue(g,ue.setFromMatrixPosition(E.matrixWorld)),se.logarithmicDepthBuffer&&Vt.setValue(g,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Vt.setValue(g,"isOrthographic",E.isOrthographicCamera===!0),C!==E&&(C=E,zn=!0,bo=!0)}if($.isSkinnedMesh){Vt.setOptional(g,$,"bindMatrix"),Vt.setOptional(g,$,"bindMatrixInverse");const yn=$.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Vt.setValue(g,"boneTexture",yn.boneTexture,ce))}$.isBatchedMesh&&(Vt.setOptional(g,$,"batchingTexture"),Vt.setValue(g,"batchingTexture",$._matricesTexture,ce),Vt.setOptional(g,$,"batchingIdTexture"),Vt.setValue(g,"batchingIdTexture",$._indirectTexture,ce),Vt.setOptional(g,$,"batchingColorTexture"),$._colorsTexture!==null&&Vt.setValue(g,"batchingColorTexture",$._colorsTexture,ce));const ei=ne.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&_e.update($,ne,Hn),(zn||Qe.receiveShadow!==$.receiveShadow)&&(Qe.receiveShadow=$.receiveShadow,Vt.setValue(g,"receiveShadow",$.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Jn.envMap.value=He,Jn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&W.environment!==null&&(Jn.envMapIntensity.value=W.environmentIntensity),zn&&(Vt.setValue(g,"toneMappingExposure",y.toneMappingExposure),Qe.needsLights&&Ln(Jn,bo),Se&&re.fog===!0&&le.refreshFogUniforms(Jn,Se),le.refreshMaterialUniforms(Jn,re,q,ee,p.state.transmissionRenderTarget[E.id]),hl.upload(g,Xe(Qe),Jn,ce)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(hl.upload(g,Xe(Qe),Jn,ce),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Vt.setValue(g,"center",$.center),Vt.setValue(g,"modelViewMatrix",$.modelViewMatrix),Vt.setValue(g,"normalMatrix",$.normalMatrix),Vt.setValue(g,"modelMatrix",$.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const yn=re.uniformsGroups;for(let In=0,ic=yn.length;In<ic;In++){const Us=yn[In];ct.update(Us,Hn),ct.bind(Us,Hn)}}return Hn}function Ln(E,W){E.ambientLightColor.needsUpdate=W,E.lightProbe.needsUpdate=W,E.directionalLights.needsUpdate=W,E.directionalLightShadows.needsUpdate=W,E.pointLights.needsUpdate=W,E.pointLightShadows.needsUpdate=W,E.spotLights.needsUpdate=W,E.spotLightShadows.needsUpdate=W,E.rectAreaLights.needsUpdate=W,E.hemisphereLights.needsUpdate=W}function is(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(E,W,ne){const re=te.get(E);re.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),te.get(E.texture).__webglTexture=W,te.get(E.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ne,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,W){const ne=te.get(E);ne.__webglFramebuffer=W,ne.__useDefaultFramebuffer=W===void 0};const Hv=g.createFramebuffer();this.setRenderTarget=function(E,W=0,ne=0){H=E,I=W,P=ne;let re=!0,$=null,Se=!1,Ne=!1;if(E){const He=te.get(E);if(He.__useDefaultFramebuffer!==void 0)X.bindFramebuffer(g.FRAMEBUFFER,null),re=!1;else if(He.__webglFramebuffer===void 0)ce.setupRenderTarget(E);else if(He.__hasExternalTextures)ce.rebindTextures(E,te.get(E.texture).__webglTexture,te.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const qe=E.depthTexture;if(He.__boundDepthTexture!==qe){if(qe!==null&&te.has(qe)&&(E.width!==qe.image.width||E.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(E)}}const nt=E.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Ne=!0);const it=te.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(it[W])?$=it[W][ne]:$=it[W],Se=!0):E.samples>0&&ce.useMultisampledRTT(E)===!1?$=te.get(E).__webglMultisampledFramebuffer:Array.isArray(it)?$=it[ne]:$=it,O.copy(E.viewport),U.copy(E.scissor),D=E.scissorTest}else O.copy(Le).multiplyScalar(q).floor(),U.copy(Ge).multiplyScalar(q).floor(),D=_t;if(ne!==0&&($=Hv),X.bindFramebuffer(g.FRAMEBUFFER,$)&&re&&X.drawBuffers(E,$),X.viewport(O),X.scissor(U),X.setScissorTest(D),Se){const He=te.get(E.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+W,He.__webglTexture,ne)}else if(Ne){const He=W;for(let nt=0;nt<E.textures.length;nt++){const it=te.get(E.textures[nt]);g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0+nt,it.__webglTexture,ne,He)}}else if(E!==null&&ne!==0){const He=te.get(E.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,He.__webglTexture,ne)}T=-1},this.readRenderTargetPixels=function(E,W,ne,re,$,Se,Ne,We=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ne!==void 0&&(He=He[Ne]),He){X.bindFramebuffer(g.FRAMEBUFFER,He);try{const nt=E.textures[We],it=nt.format,qe=nt.type;if(!se.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=E.width-re&&ne>=0&&ne<=E.height-$&&(E.textures.length>1&&g.readBuffer(g.COLOR_ATTACHMENT0+We),g.readPixels(W,ne,re,$,Oe.convert(it),Oe.convert(qe),Se))}finally{const nt=H!==null?te.get(H).__webglFramebuffer:null;X.bindFramebuffer(g.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(E,W,ne,re,$,Se,Ne,We=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ne!==void 0&&(He=He[Ne]),He)if(W>=0&&W<=E.width-re&&ne>=0&&ne<=E.height-$){X.bindFramebuffer(g.FRAMEBUFFER,He);const nt=E.textures[We],it=nt.format,qe=nt.type;if(!se.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xt=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,xt),g.bufferData(g.PIXEL_PACK_BUFFER,Se.byteLength,g.STREAM_READ),E.textures.length>1&&g.readBuffer(g.COLOR_ATTACHMENT0+We),g.readPixels(W,ne,re,$,Oe.convert(it),Oe.convert(qe),0);const Pt=H!==null?te.get(H).__webglFramebuffer:null;X.bindFramebuffer(g.FRAMEBUFFER,Pt);const Wt=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await aA(g,Wt,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,xt),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,Se),g.deleteBuffer(xt),g.deleteSync(Wt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,W=null,ne=0){const re=Math.pow(2,-ne),$=Math.floor(E.image.width*re),Se=Math.floor(E.image.height*re),Ne=W!==null?W.x:0,We=W!==null?W.y:0;ce.setTexture2D(E,0),g.copyTexSubImage2D(g.TEXTURE_2D,ne,0,0,Ne,We,$,Se),X.unbindTexture()};const zv=g.createFramebuffer(),Vv=g.createFramebuffer();this.copyTextureToTexture=function(E,W,ne=null,re=null,$=0,Se=null){Se===null&&($!==0?(Gr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=$,$=0):Se=0);let Ne,We,He,nt,it,qe,xt,Pt,Wt;const Bt=E.isCompressedTexture?E.mipmaps[Se]:E.image;if(ne!==null)Ne=ne.max.x-ne.min.x,We=ne.max.y-ne.min.y,He=ne.isBox3?ne.max.z-ne.min.z:1,nt=ne.min.x,it=ne.min.y,qe=ne.isBox3?ne.min.z:0;else{const ei=Math.pow(2,-$);Ne=Math.floor(Bt.width*ei),We=Math.floor(Bt.height*ei),E.isDataArrayTexture?He=Bt.depth:E.isData3DTexture?He=Math.floor(Bt.depth*ei):He=1,nt=0,it=0,qe=0}re!==null?(xt=re.x,Pt=re.y,Wt=re.z):(xt=0,Pt=0,Wt=0);const Ut=Oe.convert(W.format),Qe=Oe.convert(W.type);let zt;W.isData3DTexture?(ce.setTexture3D(W,0),zt=g.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ce.setTexture2DArray(W,0),zt=g.TEXTURE_2D_ARRAY):(ce.setTexture2D(W,0),zt=g.TEXTURE_2D),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,W.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,W.unpackAlignment);const wt=g.getParameter(g.UNPACK_ROW_LENGTH),Hn=g.getParameter(g.UNPACK_IMAGE_HEIGHT),hr=g.getParameter(g.UNPACK_SKIP_PIXELS),zn=g.getParameter(g.UNPACK_SKIP_ROWS),bo=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,Bt.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Bt.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,nt),g.pixelStorei(g.UNPACK_SKIP_ROWS,it),g.pixelStorei(g.UNPACK_SKIP_IMAGES,qe);const Vt=E.isDataArrayTexture||E.isData3DTexture,Jn=W.isDataArrayTexture||W.isData3DTexture;if(E.isDepthTexture){const ei=te.get(E),yn=te.get(W),In=te.get(ei.__renderTarget),ic=te.get(yn.__renderTarget);X.bindFramebuffer(g.READ_FRAMEBUFFER,In.__webglFramebuffer),X.bindFramebuffer(g.DRAW_FRAMEBUFFER,ic.__webglFramebuffer);for(let Us=0;Us<He;Us++)Vt&&(g.framebufferTextureLayer(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,te.get(E).__webglTexture,$,qe+Us),g.framebufferTextureLayer(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,te.get(W).__webglTexture,Se,Wt+Us)),g.blitFramebuffer(nt,it,Ne,We,xt,Pt,Ne,We,g.DEPTH_BUFFER_BIT,g.NEAREST);X.bindFramebuffer(g.READ_FRAMEBUFFER,null),X.bindFramebuffer(g.DRAW_FRAMEBUFFER,null)}else if($!==0||E.isRenderTargetTexture||te.has(E)){const ei=te.get(E),yn=te.get(W);X.bindFramebuffer(g.READ_FRAMEBUFFER,zv),X.bindFramebuffer(g.DRAW_FRAMEBUFFER,Vv);for(let In=0;In<He;In++)Vt?g.framebufferTextureLayer(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,ei.__webglTexture,$,qe+In):g.framebufferTexture2D(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,ei.__webglTexture,$),Jn?g.framebufferTextureLayer(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,yn.__webglTexture,Se,Wt+In):g.framebufferTexture2D(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,yn.__webglTexture,Se),$!==0?g.blitFramebuffer(nt,it,Ne,We,xt,Pt,Ne,We,g.COLOR_BUFFER_BIT,g.NEAREST):Jn?g.copyTexSubImage3D(zt,Se,xt,Pt,Wt+In,nt,it,Ne,We):g.copyTexSubImage2D(zt,Se,xt,Pt,nt,it,Ne,We);X.bindFramebuffer(g.READ_FRAMEBUFFER,null),X.bindFramebuffer(g.DRAW_FRAMEBUFFER,null)}else Jn?E.isDataTexture||E.isData3DTexture?g.texSubImage3D(zt,Se,xt,Pt,Wt,Ne,We,He,Ut,Qe,Bt.data):W.isCompressedArrayTexture?g.compressedTexSubImage3D(zt,Se,xt,Pt,Wt,Ne,We,He,Ut,Bt.data):g.texSubImage3D(zt,Se,xt,Pt,Wt,Ne,We,He,Ut,Qe,Bt):E.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,Se,xt,Pt,Ne,We,Ut,Qe,Bt.data):E.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,Se,xt,Pt,Bt.width,Bt.height,Ut,Bt.data):g.texSubImage2D(g.TEXTURE_2D,Se,xt,Pt,Ne,We,Ut,Qe,Bt);g.pixelStorei(g.UNPACK_ROW_LENGTH,wt),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Hn),g.pixelStorei(g.UNPACK_SKIP_PIXELS,hr),g.pixelStorei(g.UNPACK_SKIP_ROWS,zn),g.pixelStorei(g.UNPACK_SKIP_IMAGES,bo),Se===0&&W.generateMipmaps&&g.generateMipmap(zt),X.unbindTexture()},this.copyTextureToTexture3D=function(E,W,ne=null,re=null,$=0){return Gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,W,ne,re,$)},this.initRenderTarget=function(E){te.get(E).__webglFramebuffer===void 0&&ce.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ce.setTextureCube(E,0):E.isData3DTexture?ce.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ce.setTexture2DArray(E,0):ce.setTexture2D(E,0),X.unbindTexture()},this.resetState=function(){I=0,P=0,H=null,X.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Mt._getUnpackColorSpace()}}const dp={type:"change"},tf={type:"start"},Cv={type:"end"},el=new ov,fp=new ms,AP=Math.cos(70*rA.DEG2RAD),tn=new Q,On=2*Math.PI,It={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Jc=1e-6;class Rv extends WA{constructor(e,n=null){super(e,n),this.state=It.NONE,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zr.ROTATE,MIDDLE:zr.DOLLY,RIGHT:zr.PAN},this.touches={ONE:Lr.ROTATE,TWO:Lr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Q,this._lastQuaternion=new ar,this._lastTargetPosition=new Q,this._quat=new ar().setFromUnitVectors(e.up,new Q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Bh,this._sphericalDelta=new Bh,this._scale=1,this._panOffset=new Q,this._rotateStart=new lt,this._rotateEnd=new lt,this._rotateDelta=new lt,this._panStart=new lt,this._panEnd=new lt,this._panDelta=new lt,this._dollyStart=new lt,this._dollyEnd=new lt,this._dollyDelta=new lt,this._dollyDirection=new Q,this._mouse=new lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=RP.bind(this),this._onPointerDown=CP.bind(this),this._onPointerUp=PP.bind(this),this._onContextMenu=FP.bind(this),this._onMouseWheel=IP.bind(this),this._onKeyDown=UP.bind(this),this._onTouchStart=OP.bind(this),this._onTouchMove=NP.bind(this),this._onMouseDown=DP.bind(this),this._onMouseMove=LP.bind(this),this._interceptControlDown=kP.bind(this),this._interceptControlUp=BP.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(dp),this.update(),this.state=It.NONE}update(e=null){const n=this.object.position;tn.copy(n).sub(this.target),tn.applyQuaternion(this._quat),this._spherical.setFromVector3(tn),this.autoRotate&&this.state===It.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=On:i>Math.PI&&(i-=On),s<-Math.PI?s+=On:s>Math.PI&&(s-=On),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(tn.setFromSpherical(this._spherical),tn.applyQuaternion(this._quatInverse),n.copy(this.target).add(tn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=tn.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new Q(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new Q(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=tn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(el.origin.copy(this.object.position),el.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(el.direction))<AP?this.object.lookAt(this.target):(fp.setFromNormalAndCoplanarPoint(this.object.up,this.target),el.intersectPlane(fp,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Jc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Jc||this._lastTargetPosition.distanceToSquared(this.target)>Jc?(this.dispatchEvent(dp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?On/60*this.autoRotateSpeed*e:On/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){tn.setFromMatrixColumn(n,0),tn.multiplyScalar(-e),this._panOffset.add(tn)}_panUp(e,n){this.screenSpacePanning===!0?tn.setFromMatrixColumn(n,1):(tn.setFromMatrixColumn(n,0),tn.crossVectors(this.object.up,tn)),tn.multiplyScalar(e),this._panOffset.add(tn)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;tn.copy(s).sub(this.target);let r=tn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=n-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(On*this._rotateDelta.x/n.clientHeight),this._rotateUp(On*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-On*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(On*this._rotateDelta.x/n.clientHeight),this._rotateUp(On*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new lt,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function CP(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function RP(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function PP(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Cv),this.state=It.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function DP(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case zr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=It.DOLLY;break;case zr.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=It.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=It.ROTATE}break;case zr.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=It.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=It.PAN}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(tf)}function LP(t){switch(this.state){case It.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case It.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case It.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function IP(t){this.enabled===!1||this.enableZoom===!1||this.state!==It.NONE||(t.preventDefault(),this.dispatchEvent(tf),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Cv))}function UP(t){this.enabled!==!1&&this._handleKeyDown(t)}function OP(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Lr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=It.TOUCH_ROTATE;break;case Lr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=It.TOUCH_PAN;break;default:this.state=It.NONE}break;case 2:switch(this.touches.TWO){case Lr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=It.TOUCH_DOLLY_PAN;break;case Lr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=It.TOUCH_DOLLY_ROTATE;break;default:this.state=It.NONE}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(tf)}function NP(t){switch(this._trackPointer(t),this.state){case It.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case It.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case It.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case It.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=It.NONE}}function FP(t){this.enabled!==!1&&t.preventDefault()}function kP(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function BP(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const HP={__name:"MiyukiBeads",props:{pattern:{type:Array,required:!0},rows:{type:Number,default:10},cols:{type:Number,default:50},textureRotation:{type:Number,default:90}},setup(t){const e=t,n=st(null);let i,s,r,o,a=[];const l=new vv,c=new Map;function u(v){return typeof v=="string"&&v.startsWith("/miyuki-beads-designer/beads/")}function d(v,_=0){if(u(v)){const m=v;let p=c.get(m);p||(p=l.load(m,y=>{y.colorSpace=pn,r&&(y.anisotropy=r.capabilities.getMaxAnisotropy())}),p.colorSpace=pn,c.set(m,p));const A=p.clone();return A.rotation=_,new Ul({color:16777215,map:A,roughness:.1,metalness:.1,clearcoat:.5,clearcoatRoughness:.1})}return new Ul({color:v,roughness:.1,metalness:.1,clearcoat:.5,clearcoatRoughness:.1})}function f(){a.forEach(v=>{i.remove(v),v.material&&v.material.dispose()}),a=[]}function h(){const v=new Jl(.7,.7,1.1,32),_=(e.cols-1)/2,m=(e.rows-1)/2;for(let p=0;p<e.rows;p++)for(let A=0;A<e.cols;A++){const M=p*e.cols+A,y=e.pattern[M]||"#ffffff",L=e.textureRotation*Math.PI/180,I=d(y,L),P=new pi(v,I);P.position.set((A-_)*1.2,-(p-m)*1.2,0),i.add(P),a.push(P)}}return ho(()=>{i=new mv,i.background=new yt(15790320),s=new Xn(45,n.value.clientWidth/n.value.clientHeight,.1,1e3),s.position.set(50,-50,50),r=new Av({antialias:!0}),r.setPixelRatio(Math.min(window.devicePixelRatio||1,2));function v(){if(!n.value)return;const A=n.value.clientWidth,M=n.value.clientHeight;A===0||M===0||(s.aspect=A/M,s.updateProjectionMatrix(),r.setSize(A,M,!1))}v(),n.value.appendChild(r.domElement);const _=new ResizeObserver(()=>{v()});_.observe(n.value),r.__resizeObserver=_,o=new Rv(s,r.domElement),i.add(new xv(16777215,.5));const m=new sd(16777215,3);m.position.set(10,10,10),i.add(m),h();function p(){requestAnimationFrame(p),o.update(),r.render(i,s)}p(),window.addEventListener("resize",v),r.__resizeHandler=v}),Nn(()=>[e.pattern,e.textureRotation],()=>{f(),h()},{deep:!0}),wd(()=>{r&&r.__resizeHandler&&window.removeEventListener("resize",r.__resizeHandler),r&&r.__resizeObserver&&n.value&&r.__resizeObserver.disconnect(),o&&o.dispose(),r&&r.dispose(),f(),c.forEach(v=>v.dispose()),c.clear()}),(v,_)=>(ze(),$e("div",{ref_key:"container",ref:n,class:"bead-container"},null,512))}},zP={class:"bracelet-wrapper"},VP={class:"canvas-container"},GP={class:"toolbar"},WP={class:"controls-panel"},$P={class:"control-group"},XP={class:"slider-container"},jP={class:"slider-value"},qP={class:"info-panel"},YP={class:"info-item"},KP={class:"info-value"},ZP={class:"info-item"},QP={class:"info-value"},JP={__name:"BraceletPreview",props:{pattern:{type:Array,required:!0},rows:{type:Number,required:!0},cols:{type:Number,required:!0},width:{type:Number,default:900},height:{type:Number,default:600},textureRotation:{type:Number,default:90}},setup(t,{expose:e}){const n=t,i=st(null);let s,r,o,a,l=[];const c=st(n.textureRotation),u=new vv,d=new Map;function f(M){return typeof M=="string"&&M.startsWith("/miyuki-beads-designer/beads/")}function h(M,y=0){if(f(M)){const L=M;let I=d.get(L);I||(I=u.load(L,T=>{T.colorSpace=pn,o&&(T.anisotropy=o.capabilities.getMaxAnisotropy())}),I.colorSpace=pn,d.set(L,I));const P=I.clone();return P.rotation=y,new Ul({color:16777215,map:P,roughness:.25,metalness:.15,clearcoat:.4,clearcoatRoughness:.1})}return new Ul({color:M,roughness:.25,metalness:.15,clearcoat:.4,clearcoatRoughness:.1})}function v(){l.forEach(M=>{s.remove(M),M.material&&M.material.dispose()}),l=[]}function _(){if(!s)return;v();const M=20,y=Math.PI*1.55,L=-y/2,I=y/n.rows,P=M*I*.98,H=.95,T=1,C=new Jl(H*.7,H*.7,P,16);for(let O=0;O<n.rows;O++)for(let U=0;U<n.cols;U++){let D="#ffffff";if(Array.isArray(n.pattern[0]))D=n.pattern[O]&&n.pattern[O][U]?n.pattern[O][U]:"#ffffff";else{const Le=O*n.cols+U;D=n.pattern[Le]||"#ffffff"}(!D||D==="#"||D.length<3)&&(D="#ffffff",console.warn("Invalid color detected:",D,"using default white"));const N=c.value*Math.PI/180,J=h(D,N),Y=L+(O+.5)*I,ee=(n.cols/2-.5-U)*T,q=M*Math.sin(Y),xe=M*Math.cos(Y),Me=new pi(C,J);Me.position.set(q,ee,xe),Me.rotation.z=Math.PI/2,Me.rotation.y=Y,s.add(Me),l.push(Me)}}function m(){s=new mv,s.background=new yt(15987699),r=new Xn(42,n.width/n.height,.1,2e3),r.position.set(0,3,95),r.lookAt(0,0,0),o=new Av({antialias:!0,preserveDrawingBuffer:!0}),o.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),o.setSize(n.width,n.height,!1),i.value.appendChild(o.domElement),s.add(new xv(16777215,.7));const M=new sd(16777215,1.1);M.position.set(8,10,12),s.add(M);const y=new sd(16777215,.6);y.position.set(-8,-3,8),s.add(y),a=new Rv(r,o.domElement),a.enableDamping=!0,a.target.set(0,0,0);function L(){requestAnimationFrame(L),a.update(),o.render(s,r)}L()}function p(){o&&(a.update(),o.render(s,r))}function A(){p();const M=o.domElement.toDataURL("image/png"),y=document.createElement("a");y.href=M,y.download="bracelet.png",y.click()}return ho(()=>{m(),_(),p()}),Nn(()=>[n.pattern,n.rows,n.cols,n.textureRotation],()=>{_(),p()},{deep:!0}),Nn(c,()=>{_(),p()}),wd(()=>{a&&a.dispose(),o&&o.dispose(),v(),d.forEach(M=>M.dispose()),d.clear()}),e({downloadImage:A}),(M,y)=>(ze(),$e("div",zP,[y[6]||(y[6]=b("div",{class:"header"},[b("h2",{class:"title"},"پیش‌نمایش دستبند"),b("p",{class:"subtitle"},"نمایش سه‌بعدی طرح انتخاب شده")],-1)),b("div",VP,[b("div",{ref_key:"container",ref:i,class:"bracelet-canvas"},null,512),y[1]||(y[1]=Pm('<div class="canvas-overlay" data-v-ad56446e><div class="controls-hint" data-v-ad56446e><div class="hint-item" data-v-ad56446e><span class="hint-icon" data-v-ad56446e>🖱️</span><span data-v-ad56446e>برای چرخاندن کلیک و درگ کنید</span></div><div class="hint-item" data-v-ad56446e><span class="hint-icon" data-v-ad56446e>🔍</span><span data-v-ad56446e>برای زوم اسکرول کنید</span></div></div></div>',1))]),b("div",GP,[b("button",{class:"btn btn-primary",onClick:A},y[2]||(y[2]=[b("span",{class:"btn-icon"},"📥",-1),b("span",null,"دانلود تصویر",-1)])),b("div",WP,[b("div",$P,[y[3]||(y[3]=b("label",{class:"control-label"},"چرخش عکس مهره‌ها:",-1)),b("div",XP,[qt(b("input",{"onUpdate:modelValue":y[0]||(y[0]=L=>c.value=L),type:"range",min:"0",max:"360",step:"15",class:"rotation-slider"},null,512),[[Jt,c.value]]),b("span",jP,at(c.value)+"°",1)])])]),b("div",qP,[b("div",YP,[y[4]||(y[4]=b("span",{class:"info-label"},"ابعاد:",-1)),b("span",KP,at(t.cols)+" × "+at(t.rows),1)]),b("div",ZP,[y[5]||(y[5]=b("span",{class:"info-label"},"تعداد مهره:",-1)),b("span",QP,at(t.cols*t.rows),1)])])])]))}},eD=pa(JP,[["__scopeId","data-v-ad56446e"]]),tD={class:"working-page"},nD={class:"controls-panel"},iD={class:"control-group"},sD={class:"start-controls"},rD={class:"control-label"},oD=["max"],aD={class:"control-label"},lD={class:"control-group"},cD={class:"navigation-controls"},uD=["disabled"],dD=["disabled"],fD={class:"control-group"},hD={class:"info-display"},pD={class:"info-item"},mD={class:"info-value"},gD={class:"info-item"},vD={class:"info-value"},_D={class:"info-item"},bD={class:"info-value"},xD={class:"control-group"},yD={class:"color-management"},wD={class:"color-list-management"},SD={class:"all-colors-list"},MD=["onUpdate:modelValue","placeholder","onInput"],ED={class:"color-count-badge"},TD={class:"color-code"},AD={class:"pattern-container"},CD={class:"pattern-header"},RD={class:"pattern-info"},PD={class:"instructions-panel"},DD={class:"row-instructions"},LD={class:"color-instructions"},ID={class:"color-list"},UD={class:"color-count"},OD={class:"pattern-instructions"},ND={class:"pattern-sequence"},FD=["title"],kD={class:"grid-wrapper"},BD=["title"],HD={__name:"WorkingPage",props:{pattern:{type:Array,default:()=>[]},rows:{type:Number,default:16},cols:{type:Number,default:80}},setup(t){const e=t,n=st(0),i=st("forward"),s=st(0),r=st({}),o=()=>{if(!e.pattern||e.pattern.length===0){const D=["#ff6b6b","#4ecdc4","#45b7d1","#96ceb4","#feca57","#ff9ff3","#54a0ff","#5f27cd"],N=[];for(let J=0;J<e.rows;J++)for(let Y=0;Y<e.cols;Y++){const ee=D[Math.floor(Math.random()*D.length)];N.push({color:ee,row:J,col:Y})}return N}const U=[];for(let D=0;D<e.rows;D++)for(let N=0;N<e.cols;N++){const J=D*e.cols+N,Y=e.pattern[J]||"#ffffff";U.push({color:Y,row:D,col:N})}return U},a=st(o()),l=st(!0),c=an(()=>l.value?e.rows:e.cols),u=an(()=>c.value-1),d=an(()=>c.value),f=an(()=>{const U=i.value==="forward"?n.value+s.value:n.value-s.value;return Math.max(0,Math.min(c.value-1,U))}),h=an(()=>{const U=[];if(l.value)for(let D=0;D<e.cols;D++){const N=f.value*e.cols+D,J=e.pattern[N]||"#ffffff";U.includes(J)||U.push(J)}else for(let D=0;D<e.rows;D++){const N=D*e.cols+f.value,J=e.pattern[N]||"#ffffff";U.includes(J)||U.push(J)}return U}),v=an(()=>{const U=[];if(l.value)for(let D=0;D<e.cols;D++){const N=f.value*e.cols+D,J=e.pattern[N]||"#ffffff";U.push(J)}else for(let D=0;D<e.rows;D++){const N=D*e.cols+f.value,J=e.pattern[N]||"#ffffff";U.push(J)}return U}),_=an(()=>{const U=new Set;for(let D=0;D<e.pattern.length;D++)e.pattern[D]&&U.add(e.pattern[D]);return Array.from(U).sort()}),m=U=>{const D=Math.floor(U/e.cols),N=U%e.cols;return l.value?D===f.value:N===f.value},p=U=>{const D=Math.floor(U/e.cols),N=U%e.cols;return l.value?D==f.value:N==f.value},A=U=>{const D=Math.floor(U/e.cols),N=U%e.cols;return i.value==="forward"?l.value?D>f.value:N>f.value:l.value?D<f.value:N<f.value},M=U=>m(U)?1:p(U)?.4:.2,y=U=>{let D=0;if(l.value)for(let N=0;N<e.cols;N++){const J=f.value*e.cols+N;e.pattern[J]===U&&D++}else for(let N=0;N<e.rows;N++){const J=N*e.cols+f.value;e.pattern[J]===U&&D++}return D},L=U=>{let D=0;for(let N=0;N<e.pattern.length;N++)e.pattern[N]===U&&D++;return D},I=(U,D)=>{r.value[U]=D},P=U=>{const D=r.value[U];if(U.startsWith("/miyuki-beads-designer/beads/")){const N=U.split("/").pop().replace(".jpg","");return D?`${D} (${N})`:N}return D?`${D} (${U})`:U},H=()=>{s.value<d.value-1&&s.value++},T=()=>{s.value>0&&s.value--},C=()=>{s.value=0},O=U=>{switch(U.key){case"Enter":case" ":U.preventDefault(),H();break;case"ArrowLeft":U.preventDefault(),T();break;case"r":case"R":U.preventDefault(),C();break}};return ho(()=>{try{const U=localStorage.getItem("gridEditor_isVertical");l.value=U!==null?JSON.parse(U):!0}catch(U){console.error("Failed to read gridEditor_isVertical from localStorage",U),l.value=!0}document.addEventListener("keydown",O)}),Sd(()=>{document.removeEventListener("keydown",O)}),Nn(i,()=>{s.value=0}),Nn(n,()=>{s.value=0}),Nn(l,()=>{s.value=0,n.value>u.value&&(n.value=0)}),Nn(()=>e.pattern,()=>{a.value=o()},{deep:!0}),(U,D)=>(ze(),$e("div",tD,[D[16]||(D[16]=b("div",{class:"page-header"},[b("h1",{class:"page-title"},"🧶 مراحل اجرای دستبند میوکی"),b("p",{class:"page-subtitle"}," مراحل بافت دستبند را ردیف به ردیف (از بالا به پایین) مشاهده کنید ")],-1)),b("div",nD,[b("div",iD,[D[5]||(D[5]=b("h3",null,"🎯 تنظیمات شروع",-1)),b("div",sD,[b("label",rD,[D[2]||(D[2]=b("span",null,"شروع از ردیف:",-1)),qt(b("input",{"onUpdate:modelValue":D[0]||(D[0]=N=>n.value=N),type:"number",min:"0",max:u.value,class:"control-input"},null,8,oD),[[Jt,n.value,void 0,{number:!0}]])]),b("label",aD,[D[4]||(D[4]=b("span",null,"جهت اجرا:",-1)),qt(b("select",{"onUpdate:modelValue":D[1]||(D[1]=N=>i.value=N),class:"control-select"},D[3]||(D[3]=[b("option",{value:"forward"},"⬇️ از بالا به پایین",-1),b("option",{value:"backward"},"⬆️ از پایین به بالا",-1)]),512),[[eb,i.value]])])])]),b("div",lD,[D[6]||(D[6]=b("h3",null,"🎮 کنترل‌ها",-1)),b("div",cD,[b("button",{disabled:s.value<=0,class:"nav-btn prev-btn",onClick:T}," ⬅️ مرحله قبل ",8,uD),b("button",{disabled:s.value>=d.value-1,class:"nav-btn next-btn",onClick:H}," مرحله بعد ➡️ ",8,dD),b("button",{class:"nav-btn reset-btn",onClick:C}," 🔄 شروع مجدد ")])]),b("div",fD,[D[10]||(D[10]=b("h3",null,"📊 اطلاعات",-1)),b("div",hD,[b("div",pD,[D[7]||(D[7]=b("span",{class:"info-label"},"مرحله فعلی:",-1)),b("span",mD,at(s.value+1)+" از "+at(d.value),1)]),b("div",gD,[D[8]||(D[8]=b("span",{class:"info-label"},"ردیف فعلی:",-1)),b("span",vD,at(f.value+1)+" از "+at(c.value),1)]),b("div",_D,[D[9]||(D[9]=b("span",{class:"info-label"},"رنگ‌های مورد نیاز:",-1)),b("span",bD,at(h.value.length)+" رنگ",1)])])]),b("div",xD,[D[12]||(D[12]=b("h3",null,"🎨 مدیریت رنگ‌ها",-1)),b("div",yD,[b("div",wD,[D[11]||(D[11]=b("h4",null,"رنگ‌های استفاده شده در طرح:",-1)),b("div",SD,[(ze(!0),$e(Ht,null,En(_.value,(N,J)=>(ze(),$e("div",{key:N,class:"color-management-item"},[b("div",{class:"color-swatch-large",style:jn({backgroundColor:N.startsWith("/miyuki-beads-designer/beads/")?"transparent":N,backgroundImage:N.startsWith("/miyuki-beads-designer/beads/")?`url(${N})`:"none",backgroundSize:"cover",backgroundPosition:"center"})},null,4),qt(b("input",{"onUpdate:modelValue":Y=>r.value[N]=Y,type:"text",placeholder:`نام رنگ ${J+1}`,class:"color-name-input",onInput:Y=>I(N,Y.target.value)},null,40,MD),[[Jt,r.value[N]]]),b("span",ED,at(L(N))+" مهره",1),b("span",TD,at(N),1)]))),128))])])])])]),b("div",AD,[b("div",CD,[D[13]||(D[13]=b("h3",null,"🎨 الگوی دستبند",-1)),b("div",RD,[b("span",null,"ابعاد: "+at(t.rows)+" × "+at(t.cols),1)])]),b("div",PD,[b("h4",null,"📋 دستورالعمل ردیف "+at(f.value+1),1),b("div",DD,[b("div",LD,[D[14]||(D[14]=b("h5",null,"رنگ‌های مورد نیاز:",-1)),b("div",ID,[(ze(!0),$e(Ht,null,En(h.value,(N,J)=>(ze(),$e("div",{key:J,class:"color-item"},[b("div",{class:"color-swatch",style:jn({backgroundColor:N.startsWith("/miyuki-beads-designer/beads/")?"transparent":N,backgroundImage:N.startsWith("/miyuki-beads-designer/beads/")?`url(${N})`:"none",backgroundSize:"cover",backgroundPosition:"center"})},null,4),b("span",UD,at(y(N)),1)]))),128))])]),b("div",OD,[D[15]||(D[15]=b("h5",null,"ترتیب رنگ‌ها:",-1)),b("div",ND,[(ze(!0),$e(Ht,null,En(v.value,(N,J)=>(ze(),$e("div",{key:J,class:"sequence-item",style:jn({backgroundColor:N.startsWith("/miyuki-beads-designer/beads/")?"transparent":N,backgroundImage:N.startsWith("/miyuki-beads-designer/beads/")?`url(${N})`:"none",backgroundSize:"cover",backgroundPosition:"center"}),title:P(N)},null,12,FD))),128))])])])]),b("div",kD,[b("div",{class:"pattern-grid",style:jn({gridTemplateColumns:`repeat(${t.cols}, 12px)`})},[(ze(!0),$e(Ht,null,En(a.value,(N,J)=>(ze(),$e("div",{key:J,class:Je(["grid-cell",{"active-row":m(J),"completed-row":p(J),"upcoming-row":A(J)}]),style:jn({backgroundColor:N.color.startsWith("/miyuki-beads-designer/beads/")?"transparent":N.color,backgroundImage:N.color.startsWith("/miyuki-beads-designer/beads/")?`url(${N.color})`:"none",backgroundSize:"cover",backgroundPosition:"center",opacity:M(J)}),title:`ردیف ${Math.floor(J/t.cols)+1}, ستون ${J%t.cols+1}: ${N.color}`},null,14,BD))),128))],4)])]),D[17]||(D[17]=Pm('<div class="shortcuts-info" data-v-5535f2e5><h4 data-v-5535f2e5>⌨️ کلیدهای میانبر</h4><div class="shortcuts-list" data-v-5535f2e5><div class="shortcut-item" data-v-5535f2e5><kbd data-v-5535f2e5>Enter</kbd> یا <kbd data-v-5535f2e5>Space</kbd> - مرحله بعد </div><div class="shortcut-item" data-v-5535f2e5><kbd data-v-5535f2e5>←</kbd> - مرحله قبل</div><div class="shortcut-item" data-v-5535f2e5><kbd data-v-5535f2e5>R</kbd> - شروع مجدد</div></div></div>',1))]))}},zD=pa(HD,[["__scopeId","data-v-5535f2e5"]]),VD={class:"home-container"},GD={class:"app-header max-md:hidden flex items-start justify-between mb-3!"},WD={class:"stats-section"},$D={class:"stat-item"},XD={class:"stat-number"},jD={class:"stat-item"},qD={class:"stat-number"},YD={class:"stat-item"},KD={class:"stat-number"},ZD={class:"stat-item"},QD={class:"stat-number"},JD={class:"mobile-header-content"},eL={class:"mobile-stats"},tL={class:"mobile-stat-item"},nL={class:"mobile-stat-number"},iL={class:"mobile-stat-item"},sL={class:"mobile-stat-number"},rL={class:"mobile-stat-item"},oL={class:"mobile-stat-number"},aL={class:"mobile-stat-item"},lL={class:"mobile-stat-number"},cL={class:"content-container"},uL={__name:"HomeView",props:{isMobileHeaderOpen:{type:Boolean,default:!1}},setup(t){const e=t,n=st(16),i=st(80),s=st(Array(16*80).fill("#ffffff")),r=st(!0),o=st(!1),a=st(!1),l=st(!1);function c(){r.value=!0,o.value=!1,a.value=!1,l.value=!1}function u(){o.value=!0,r.value=!1,a.value=!1,l.value=!1}function d(){a.value=!0,o.value=!1,r.value=!1,l.value=!1}function f(){l.value=!0,r.value=!1,o.value=!1,a.value=!1}function h(v){if(!Array.isArray(v)||v.length===0){s.value=[],n.value=0,i.value=0;return}n.value=v.length,i.value=Array.isArray(v[0])?v[0].length:0,s.value=v.flat()}return(v,_)=>(ze(),$e("div",VD,[b("header",GD,[b("div",{class:"header-content"},[b("div",{class:"header-actions mt-3! flex items-center gap-2"},[b("button",{class:"rounded-md bg-cyan-950 px-4! py-1! text-[14px] text-white",onClick:c}," ویرایشگر شبکه "),b("button",{class:"rounded-md bg-blue-900 px-4! py-1! text-[14px] text-white",onClick:u}," نمایش مهره‌ها "),b("button",{class:"rounded-md bg-emerald-900 px-4! py-1! text-[14px] text-white",onClick:d}," پیش‌نمایش دستبند "),b("button",{class:"rounded-md bg-emerald-900 px-4! py-1! text-[14px] text-white",onClick:f}," مراحل اجرا ")])]),b("div",WD,[b("div",$D,[b("div",XD,at(n.value),1),_[0]||(_[0]=b("div",{class:"stat-label"},"ردیف",-1))]),b("div",jD,[b("div",qD,at(i.value),1),_[1]||(_[1]=b("div",{class:"stat-label"},"ستون",-1))]),b("div",YD,[b("div",KD,at(s.value.length),1),_[2]||(_[2]=b("div",{class:"stat-label"},"مهره",-1))]),b("div",ZD,[b("div",QD,at((s.value.length/190).toFixed(2)),1),_[3]||(_[3]=b("div",{class:"stat-label"},"گرم",-1))])])]),b("div",{class:Je(["mobile-header-panel md:hidden",{open:e.isMobileHeaderOpen}])},[b("div",JD,[b("div",{class:"mobile-actions"},[b("button",{class:"mobile-action-btn bg-cyan-950",onClick:c}," ویرایشگر شبکه "),b("button",{class:"mobile-action-btn bg-blue-900",onClick:u}," نمایش مهره‌ها "),b("button",{class:"mobile-action-btn bg-emerald-900",onClick:d}," پیش‌نمایش دستبند "),b("button",{class:"mobile-action-btn bg-emerald-900",onClick:f}," مراحل اجرا ")]),b("div",eL,[b("div",tL,[b("div",nL,at(n.value),1),_[4]||(_[4]=b("div",{class:"mobile-stat-label"},"ردیف",-1))]),b("div",iL,[b("div",sL,at(i.value),1),_[5]||(_[5]=b("div",{class:"mobile-stat-label"},"ستون",-1))]),b("div",rL,[b("div",oL,at(s.value.length),1),_[6]||(_[6]=b("div",{class:"mobile-stat-label"},"مهره",-1))]),b("div",aL,[b("div",lL,at((s.value.length/190).toFixed(2)),1),_[7]||(_[7]=b("div",{class:"mobile-stat-label"},"گرم",-1))])])])],2),b("div",cL,[r.value?(ze(),Uo(gT,{key:0,class:"content-component",onUpdateGrid:h})):Dt("",!0),o.value?(ze(),Uo(HP,{key:1,pattern:s.value,rows:n.value,cols:i.value,class:"content-component"},null,8,["pattern","rows","cols"])):Dt("",!0),a.value?(ze(),Uo(eD,{key:2,pattern:s.value,rows:n.value,cols:i.value,class:"content-component"},null,8,["pattern","rows","cols"])):Dt("",!0),l.value?(ze(),Uo(zD,{key:3,pattern:s.value,rows:n.value,cols:i.value,class:"content-component"},null,8,["pattern","rows","cols"])):Dt("",!0)])]))}},dL=pa(uL,[["__scopeId","data-v-3694130d"]]),fL=ux({history:Hb("/miyuki-beads-designer/"),routes:[{path:"/",name:"home",component:dL},{path:"/about",name:"about",component:()=>Eo(()=>import("./AboutView-D4ioCiet.js"),[])},{path:"/sweetalert-demo",name:"sweetalert-demo",component:()=>Eo(()=>import("./SweetAlertDemo-tmT9qTlj.js"),__vite__mapDeps([0,1]))},{path:"/weaving-grid",name:"weaving-grid",component:()=>Eo(()=>import("./WeavingGrid-D5eTevug.js"),__vite__mapDeps([2,3,4,5]))},{path:"/beadwork-pattern",name:"beadwork-pattern",component:()=>Eo(()=>import("./BeadworkPattern-D4Fe9xvY.js"),[])},{path:"/peyote-grid",name:"peyote-grid",component:()=>Eo(()=>import("./PeyoteGrid-CJ-sa8P5.js"),__vite__mapDeps([6,3,4,7]))}]});var nc=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Ta=typeof window>"u"||"Deno"in globalThis;function ci(){}function hL(t,e){return typeof t=="function"?t(e):t}function pL(t){return typeof t=="number"&&t>=0&&t!==1/0}function mL(t,e){return Math.max(t+(e||0)-Date.now(),0)}function hp(t,e){return typeof t=="function"?t(e):t}function gL(t,e){return typeof t=="function"?t(e):t}function pp(t,e){const{type:n="all",exact:i,fetchStatus:s,predicate:r,queryKey:o,stale:a}=t;if(o){if(i){if(e.queryHash!==nf(o,e.options))return!1}else if(!ra(e.queryKey,o))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||s&&s!==e.state.fetchStatus||r&&!r(e))}function mp(t,e){const{exact:n,status:i,predicate:s,mutationKey:r}=t;if(r){if(!e.options.mutationKey)return!1;if(n){if(sa(e.options.mutationKey)!==sa(r))return!1}else if(!ra(e.options.mutationKey,r))return!1}return!(i&&e.state.status!==i||s&&!s(e))}function nf(t,e){return((e==null?void 0:e.queryKeyHashFn)||sa)(t)}function sa(t){return JSON.stringify(t,(e,n)=>od(n)?Object.keys(n).sort().reduce((i,s)=>(i[s]=n[s],i),{}):n)}function ra(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?Object.keys(e).every(n=>ra(t[n],e[n])):!1}function Pv(t,e){if(t===e)return t;const n=gp(t)&&gp(e);if(n||od(t)&&od(e)){const i=n?t:Object.keys(t),s=i.length,r=n?e:Object.keys(e),o=r.length,a=n?[]:{};let l=0;for(let c=0;c<o;c++){const u=n?c:r[c];(!n&&i.includes(u)||n)&&t[u]===void 0&&e[u]===void 0?(a[u]=void 0,l++):(a[u]=Pv(t[u],e[u]),a[u]===t[u]&&t[u]!==void 0&&l++)}return s===o&&l===s?t:a}return e}function gp(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function od(t){if(!vp(t))return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(!vp(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function vp(t){return Object.prototype.toString.call(t)==="[object Object]"}function vL(t){return new Promise(e=>{setTimeout(e,t)})}function _L(t,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?Pv(t,e):e}function bL(t,e,n=0){const i=[...t,e];return n&&i.length>n?i.slice(1):i}function xL(t,e,n=0){const i=[e,...t];return n&&i.length>n?i.slice(0,-1):i}var sf=Symbol();function Dv(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===sf?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}var Ks,_s,$r,xp,yL=(xp=class extends nc{constructor(){super();St(this,Ks);St(this,_s);St(this,$r);ht(this,$r,e=>{if(!Ta&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){fe(this,_s)||this.setEventListener(fe(this,$r))}onUnsubscribe(){var e;this.hasListeners()||((e=fe(this,_s))==null||e.call(this),ht(this,_s,void 0))}setEventListener(e){var n;ht(this,$r,e),(n=fe(this,_s))==null||n.call(this),ht(this,_s,e(i=>{typeof i=="boolean"?this.setFocused(i):this.onFocus()}))}setFocused(e){fe(this,Ks)!==e&&(ht(this,Ks,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(n=>{n(e)})}isFocused(){var e;return typeof fe(this,Ks)=="boolean"?fe(this,Ks):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},Ks=new WeakMap,_s=new WeakMap,$r=new WeakMap,xp),Lv=new yL,Xr,bs,jr,yp,wL=(yp=class extends nc{constructor(){super();St(this,Xr,!0);St(this,bs);St(this,jr);ht(this,jr,e=>{if(!Ta&&window.addEventListener){const n=()=>e(!0),i=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",i)}}})}onSubscribe(){fe(this,bs)||this.setEventListener(fe(this,jr))}onUnsubscribe(){var e;this.hasListeners()||((e=fe(this,bs))==null||e.call(this),ht(this,bs,void 0))}setEventListener(e){var n;ht(this,jr,e),(n=fe(this,bs))==null||n.call(this),ht(this,bs,e(this.setOnline.bind(this)))}setOnline(e){fe(this,Xr)!==e&&(ht(this,Xr,e),this.listeners.forEach(i=>{i(e)}))}isOnline(){return fe(this,Xr)}},Xr=new WeakMap,bs=new WeakMap,jr=new WeakMap,yp),Ol=new wL;function SL(){let t,e;const n=new Promise((s,r)=>{t=s,e=r});n.status="pending",n.catch(()=>{});function i(s){Object.assign(n,s),delete n.resolve,delete n.reject}return n.resolve=s=>{i({status:"fulfilled",value:s}),t(s)},n.reject=s=>{i({status:"rejected",reason:s}),e(s)},n}function ML(t){return Math.min(1e3*2**t,3e4)}function Iv(t){return(t??"online")==="online"?Ol.isOnline():!0}var Uv=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function eu(t){return t instanceof Uv}function Ov(t){let e=!1,n=0,i=!1,s;const r=SL(),o=_=>{var m;i||(f(new Uv(_)),(m=t.abort)==null||m.call(t))},a=()=>{e=!0},l=()=>{e=!1},c=()=>Lv.isFocused()&&(t.networkMode==="always"||Ol.isOnline())&&t.canRun(),u=()=>Iv(t.networkMode)&&t.canRun(),d=_=>{var m;i||(i=!0,(m=t.onSuccess)==null||m.call(t,_),s==null||s(),r.resolve(_))},f=_=>{var m;i||(i=!0,(m=t.onError)==null||m.call(t,_),s==null||s(),r.reject(_))},h=()=>new Promise(_=>{var m;s=p=>{(i||c())&&_(p)},(m=t.onPause)==null||m.call(t)}).then(()=>{var _;s=void 0,i||(_=t.onContinue)==null||_.call(t)}),v=()=>{if(i)return;let _;const m=n===0?t.initialPromise:void 0;try{_=m??t.fn()}catch(p){_=Promise.reject(p)}Promise.resolve(_).then(d).catch(p=>{var I;if(i)return;const A=t.retry??(Ta?0:3),M=t.retryDelay??ML,y=typeof M=="function"?M(n,p):M,L=A===!0||typeof A=="number"&&n<A||typeof A=="function"&&A(n,p);if(e||!L){f(p);return}n++,(I=t.onFail)==null||I.call(t,n,p),vL(y).then(()=>c()?void 0:h()).then(()=>{e?f(p):v()})})};return{promise:r,cancel:o,continue:()=>(s==null||s(),r),cancelRetry:a,continueRetry:l,canStart:u,start:()=>(u()?v():h().then(v),r)}}var EL=t=>setTimeout(t,0);function TL(){let t=[],e=0,n=a=>{a()},i=a=>{a()},s=EL;const r=a=>{e?t.push(a):s(()=>{n(a)})},o=()=>{const a=t;t=[],a.length&&s(()=>{i(()=>{a.forEach(l=>{n(l)})})})};return{batch:a=>{let l;e++;try{l=a()}finally{e--,e||o()}return l},batchCalls:a=>(...l)=>{r(()=>{a(...l)})},schedule:r,setNotifyFunction:a=>{n=a},setBatchNotifyFunction:a=>{i=a},setScheduler:a=>{s=a}}}var An=TL(),Zs,wp,Nv=(wp=class{constructor(){St(this,Zs)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),pL(this.gcTime)&&ht(this,Zs,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(Ta?1/0:5*60*1e3))}clearGcTimeout(){fe(this,Zs)&&(clearTimeout(fe(this,Zs)),ht(this,Zs,void 0))}},Zs=new WeakMap,wp),qr,Yr,ni,Qs,hn,oa,Js,ui,$i,Sp,AL=(Sp=class extends Nv{constructor(e){super();St(this,ui);St(this,qr);St(this,Yr);St(this,ni);St(this,Qs);St(this,hn);St(this,oa);St(this,Js);ht(this,Js,!1),ht(this,oa,e.defaultOptions),this.setOptions(e.options),this.observers=[],ht(this,Qs,e.client),ht(this,ni,fe(this,Qs).getQueryCache()),this.queryKey=e.queryKey,this.queryHash=e.queryHash,ht(this,qr,RL(this.options)),this.state=e.state??fe(this,qr),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var e;return(e=fe(this,hn))==null?void 0:e.promise}setOptions(e){this.options={...fe(this,oa),...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&fe(this,ni).remove(this)}setData(e,n){const i=_L(this.state.data,e,this.options);return un(this,ui,$i).call(this,{data:i,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),i}setState(e,n){un(this,ui,$i).call(this,{type:"setState",state:e,setStateOptions:n})}cancel(e){var i,s;const n=(i=fe(this,hn))==null?void 0:i.promise;return(s=fe(this,hn))==null||s.cancel(e),n?n.then(ci).catch(ci):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(fe(this,qr))}isActive(){return this.observers.some(e=>gL(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===sf||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(e=0){return this.state.isInvalidated||this.state.data===void 0||!mL(this.state.dataUpdatedAt,e)}onFocus(){var n;const e=this.observers.find(i=>i.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(n=fe(this,hn))==null||n.continue()}onOnline(){var n;const e=this.observers.find(i=>i.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(n=fe(this,hn))==null||n.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),fe(this,ni).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(fe(this,hn)&&(fe(this,Js)?fe(this,hn).cancel({revert:!0}):fe(this,hn).cancelRetry()),this.scheduleGc()),fe(this,ni).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||un(this,ui,$i).call(this,{type:"invalidate"})}fetch(e,n){var l,c,u;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(fe(this,hn))return fe(this,hn).continueRetry(),fe(this,hn).promise}if(e&&this.setOptions(e),!this.options.queryFn){const d=this.observers.find(f=>f.options.queryFn);d&&this.setOptions(d.options)}const i=new AbortController,s=d=>{Object.defineProperty(d,"signal",{enumerable:!0,get:()=>(ht(this,Js,!0),i.signal)})},r=()=>{const d=Dv(this.options,n),f={client:fe(this,Qs),queryKey:this.queryKey,meta:this.meta};return s(f),ht(this,Js,!1),this.options.persister?this.options.persister(d,f,this):d(f)},o={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:fe(this,Qs),state:this.state,fetchFn:r};s(o),(l=this.options.behavior)==null||l.onFetch(o,this),ht(this,Yr,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((c=o.fetchOptions)==null?void 0:c.meta))&&un(this,ui,$i).call(this,{type:"fetch",meta:(u=o.fetchOptions)==null?void 0:u.meta});const a=d=>{var f,h,v,_;eu(d)&&d.silent||un(this,ui,$i).call(this,{type:"error",error:d}),eu(d)||((h=(f=fe(this,ni).config).onError)==null||h.call(f,d,this),(_=(v=fe(this,ni).config).onSettled)==null||_.call(v,this.state.data,d,this)),this.scheduleGc()};return ht(this,hn,Ov({initialPromise:n==null?void 0:n.initialPromise,fn:o.fetchFn,abort:i.abort.bind(i),onSuccess:d=>{var f,h,v,_;if(d===void 0){a(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(d)}catch(m){a(m);return}(h=(f=fe(this,ni).config).onSuccess)==null||h.call(f,d,this),(_=(v=fe(this,ni).config).onSettled)==null||_.call(v,d,this.state.error,this),this.scheduleGc()},onError:a,onFail:(d,f)=>{un(this,ui,$i).call(this,{type:"failed",failureCount:d,error:f})},onPause:()=>{un(this,ui,$i).call(this,{type:"pause"})},onContinue:()=>{un(this,ui,$i).call(this,{type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode,canRun:()=>!0})),fe(this,hn).start()}},qr=new WeakMap,Yr=new WeakMap,ni=new WeakMap,Qs=new WeakMap,hn=new WeakMap,oa=new WeakMap,Js=new WeakMap,ui=new WeakSet,$i=function(e){const n=i=>{switch(e.type){case"failed":return{...i,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...CL(i.data,this.options),fetchMeta:e.meta??null};case"success":return{...i,data:e.data,dataUpdateCount:i.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const s=e.error;return eu(s)&&s.revert&&fe(this,Yr)?{...fe(this,Yr),fetchStatus:"idle"}:{...i,error:s,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...e.state}}};this.state=n(this.state),An.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),fe(this,ni).notify({query:this,type:"updated",action:e})})},Sp);function CL(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Iv(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function RL(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=e!==void 0,i=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var wi,Mp,Fv=(Mp=class extends nc{constructor(n={}){super();St(this,wi);this.config=n,ht(this,wi,new Map)}build(n,i,s){const r=i.queryKey,o=i.queryHash??nf(r,i);let a=this.get(o);return a||(a=new AL({client:n,queryKey:r,queryHash:o,options:n.defaultQueryOptions(i),state:s,defaultOptions:n.getQueryDefaults(r)}),this.add(a)),a}add(n){fe(this,wi).has(n.queryHash)||(fe(this,wi).set(n.queryHash,n),this.notify({type:"added",query:n}))}remove(n){const i=fe(this,wi).get(n.queryHash);i&&(n.destroy(),i===n&&fe(this,wi).delete(n.queryHash),this.notify({type:"removed",query:n}))}clear(){An.batch(()=>{this.getAll().forEach(n=>{this.remove(n)})})}get(n){return fe(this,wi).get(n)}getAll(){return[...fe(this,wi).values()]}find(n){const i={exact:!0,...n};return this.getAll().find(s=>pp(i,s))}findAll(n={}){const i=this.getAll();return Object.keys(n).length>0?i.filter(s=>pp(n,s)):i}notify(n){An.batch(()=>{this.listeners.forEach(i=>{i(n)})})}onFocus(){An.batch(()=>{this.getAll().forEach(n=>{n.onFocus()})})}onOnline(){An.batch(()=>{this.getAll().forEach(n=>{n.onOnline()})})}},wi=new WeakMap,Mp),Si,Mn,er,Mi,ds,Ep,PL=(Ep=class extends Nv{constructor(e){super();St(this,Mi);St(this,Si);St(this,Mn);St(this,er);this.mutationId=e.mutationId,ht(this,Mn,e.mutationCache),ht(this,Si,[]),this.state=e.state||DL(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){fe(this,Si).includes(e)||(fe(this,Si).push(e),this.clearGcTimeout(),fe(this,Mn).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){ht(this,Si,fe(this,Si).filter(n=>n!==e)),this.scheduleGc(),fe(this,Mn).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){fe(this,Si).length||(this.state.status==="pending"?this.scheduleGc():fe(this,Mn).remove(this))}continue(){var e;return((e=fe(this,er))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var r,o,a,l,c,u,d,f,h,v,_,m,p,A,M,y,L,I,P,H;const n=()=>{un(this,Mi,ds).call(this,{type:"continue"})};ht(this,er,Ov({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(T,C)=>{un(this,Mi,ds).call(this,{type:"failed",failureCount:T,error:C})},onPause:()=>{un(this,Mi,ds).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>fe(this,Mn).canRun(this)}));const i=this.state.status==="pending",s=!fe(this,er).canStart();try{if(i)n();else{un(this,Mi,ds).call(this,{type:"pending",variables:e,isPaused:s}),await((o=(r=fe(this,Mn).config).onMutate)==null?void 0:o.call(r,e,this));const C=await((l=(a=this.options).onMutate)==null?void 0:l.call(a,e));C!==this.state.context&&un(this,Mi,ds).call(this,{type:"pending",context:C,variables:e,isPaused:s})}const T=await fe(this,er).start();return await((u=(c=fe(this,Mn).config).onSuccess)==null?void 0:u.call(c,T,e,this.state.context,this)),await((f=(d=this.options).onSuccess)==null?void 0:f.call(d,T,e,this.state.context)),await((v=(h=fe(this,Mn).config).onSettled)==null?void 0:v.call(h,T,null,this.state.variables,this.state.context,this)),await((m=(_=this.options).onSettled)==null?void 0:m.call(_,T,null,e,this.state.context)),un(this,Mi,ds).call(this,{type:"success",data:T}),T}catch(T){try{throw await((A=(p=fe(this,Mn).config).onError)==null?void 0:A.call(p,T,e,this.state.context,this)),await((y=(M=this.options).onError)==null?void 0:y.call(M,T,e,this.state.context)),await((I=(L=fe(this,Mn).config).onSettled)==null?void 0:I.call(L,void 0,T,this.state.variables,this.state.context,this)),await((H=(P=this.options).onSettled)==null?void 0:H.call(P,void 0,T,e,this.state.context)),T}finally{un(this,Mi,ds).call(this,{type:"error",error:T})}}finally{fe(this,Mn).runNext(this)}}},Si=new WeakMap,Mn=new WeakMap,er=new WeakMap,Mi=new WeakSet,ds=function(e){const n=i=>{switch(e.type){case"failed":return{...i,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...i,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:e.error,failureCount:i.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=n(this.state),An.batch(()=>{fe(this,Si).forEach(i=>{i.onMutationUpdate(e)}),fe(this,Mn).notify({mutation:this,type:"updated",action:e})})},Ep);function DL(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var ji,di,aa,Tp,kv=(Tp=class extends nc{constructor(n={}){super();St(this,ji);St(this,di);St(this,aa);this.config=n,ht(this,ji,new Set),ht(this,di,new Map),ht(this,aa,0)}build(n,i,s){const r=new PL({mutationCache:this,mutationId:++Aa(this,aa)._,options:n.defaultMutationOptions(i),state:s});return this.add(r),r}add(n){fe(this,ji).add(n);const i=tl(n);if(typeof i=="string"){const s=fe(this,di).get(i);s?s.push(n):fe(this,di).set(i,[n])}this.notify({type:"added",mutation:n})}remove(n){if(fe(this,ji).delete(n)){const i=tl(n);if(typeof i=="string"){const s=fe(this,di).get(i);if(s)if(s.length>1){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}else s[0]===n&&fe(this,di).delete(i)}}this.notify({type:"removed",mutation:n})}canRun(n){const i=tl(n);if(typeof i=="string"){const s=fe(this,di).get(i),r=s==null?void 0:s.find(o=>o.state.status==="pending");return!r||r===n}else return!0}runNext(n){var s;const i=tl(n);if(typeof i=="string"){const r=(s=fe(this,di).get(i))==null?void 0:s.find(o=>o!==n&&o.state.isPaused);return(r==null?void 0:r.continue())??Promise.resolve()}else return Promise.resolve()}clear(){An.batch(()=>{fe(this,ji).forEach(n=>{this.notify({type:"removed",mutation:n})}),fe(this,ji).clear(),fe(this,di).clear()})}getAll(){return Array.from(fe(this,ji))}find(n){const i={exact:!0,...n};return this.getAll().find(s=>mp(i,s))}findAll(n={}){return this.getAll().filter(i=>mp(n,i))}notify(n){An.batch(()=>{this.listeners.forEach(i=>{i(n)})})}resumePausedMutations(){const n=this.getAll().filter(i=>i.state.isPaused);return An.batch(()=>Promise.all(n.map(i=>i.continue().catch(ci))))}},ji=new WeakMap,di=new WeakMap,aa=new WeakMap,Tp);function tl(t){var e;return(e=t.options.scope)==null?void 0:e.id}function _p(t){return{onFetch:(e,n)=>{var u,d,f,h,v;const i=e.options,s=(f=(d=(u=e.fetchOptions)==null?void 0:u.meta)==null?void 0:d.fetchMore)==null?void 0:f.direction,r=((h=e.state.data)==null?void 0:h.pages)||[],o=((v=e.state.data)==null?void 0:v.pageParams)||[];let a={pages:[],pageParams:[]},l=0;const c=async()=>{let _=!1;const m=M=>{Object.defineProperty(M,"signal",{enumerable:!0,get:()=>(e.signal.aborted?_=!0:e.signal.addEventListener("abort",()=>{_=!0}),e.signal)})},p=Dv(e.options,e.fetchOptions),A=async(M,y,L)=>{if(_)return Promise.reject();if(y==null&&M.pages.length)return Promise.resolve(M);const I={client:e.client,queryKey:e.queryKey,pageParam:y,direction:L?"backward":"forward",meta:e.options.meta};m(I);const P=await p(I),{maxPages:H}=e.options,T=L?xL:bL;return{pages:T(M.pages,P,H),pageParams:T(M.pageParams,y,H)}};if(s&&r.length){const M=s==="backward",y=M?LL:bp,L={pages:r,pageParams:o},I=y(i,L);a=await A(L,I,M)}else{const M=t??r.length;do{const y=l===0?o[0]??i.initialPageParam:bp(i,a);if(l>0&&y==null)break;a=await A(a,y),l++}while(l<M)}return a};e.options.persister?e.fetchFn=()=>{var _,m;return(m=(_=e.options).persister)==null?void 0:m.call(_,c,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=c}}}function bp(t,{pages:e,pageParams:n}){const i=e.length-1;return e.length>0?t.getNextPageParam(e[i],e,n[i],n):void 0}function LL(t,{pages:e,pageParams:n}){var i;return e.length>0?(i=t.getPreviousPageParam)==null?void 0:i.call(t,e[0],e,n[0],n):void 0}var Xt,xs,ys,Kr,Zr,ws,Qr,Jr,Ap,IL=(Ap=class{constructor(e={}){St(this,Xt);St(this,xs);St(this,ys);St(this,Kr);St(this,Zr);St(this,ws);St(this,Qr);St(this,Jr);ht(this,Xt,e.queryCache||new Fv),ht(this,xs,e.mutationCache||new kv),ht(this,ys,e.defaultOptions||{}),ht(this,Kr,new Map),ht(this,Zr,new Map),ht(this,ws,0)}mount(){Aa(this,ws)._++,fe(this,ws)===1&&(ht(this,Qr,Lv.subscribe(async e=>{e&&(await this.resumePausedMutations(),fe(this,Xt).onFocus())})),ht(this,Jr,Ol.subscribe(async e=>{e&&(await this.resumePausedMutations(),fe(this,Xt).onOnline())})))}unmount(){var e,n;Aa(this,ws)._--,fe(this,ws)===0&&((e=fe(this,Qr))==null||e.call(this),ht(this,Qr,void 0),(n=fe(this,Jr))==null||n.call(this),ht(this,Jr,void 0))}isFetching(e){return fe(this,Xt).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return fe(this,xs).findAll({...e,status:"pending"}).length}getQueryData(e){var i;const n=this.defaultQueryOptions({queryKey:e});return(i=fe(this,Xt).get(n.queryHash))==null?void 0:i.state.data}ensureQueryData(e){const n=this.defaultQueryOptions(e),i=fe(this,Xt).build(this,n),s=i.state.data;return s===void 0?this.fetchQuery(e):(e.revalidateIfStale&&i.isStaleByTime(hp(n.staleTime,i))&&this.prefetchQuery(n),Promise.resolve(s))}getQueriesData(e){return fe(this,Xt).findAll(e).map(({queryKey:n,state:i})=>{const s=i.data;return[n,s]})}setQueryData(e,n,i){const s=this.defaultQueryOptions({queryKey:e}),r=fe(this,Xt).get(s.queryHash),o=r==null?void 0:r.state.data,a=hL(n,o);if(a!==void 0)return fe(this,Xt).build(this,s).setData(a,{...i,manual:!0})}setQueriesData(e,n,i){return An.batch(()=>fe(this,Xt).findAll(e).map(({queryKey:s})=>[s,this.setQueryData(s,n,i)]))}getQueryState(e){var i;const n=this.defaultQueryOptions({queryKey:e});return(i=fe(this,Xt).get(n.queryHash))==null?void 0:i.state}removeQueries(e){const n=fe(this,Xt);An.batch(()=>{n.findAll(e).forEach(i=>{n.remove(i)})})}resetQueries(e,n){const i=fe(this,Xt);return An.batch(()=>(i.findAll(e).forEach(s=>{s.reset()}),this.refetchQueries({type:"active",...e},n)))}cancelQueries(e,n={}){const i={revert:!0,...n},s=An.batch(()=>fe(this,Xt).findAll(e).map(r=>r.cancel(i)));return Promise.all(s).then(ci).catch(ci)}invalidateQueries(e,n={}){return An.batch(()=>(fe(this,Xt).findAll(e).forEach(i=>{i.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},n)))}refetchQueries(e,n={}){const i={...n,cancelRefetch:n.cancelRefetch??!0},s=An.batch(()=>fe(this,Xt).findAll(e).filter(r=>!r.isDisabled()).map(r=>{let o=r.fetch(void 0,i);return i.throwOnError||(o=o.catch(ci)),r.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(s).then(ci)}fetchQuery(e){const n=this.defaultQueryOptions(e);n.retry===void 0&&(n.retry=!1);const i=fe(this,Xt).build(this,n);return i.isStaleByTime(hp(n.staleTime,i))?i.fetch(n):Promise.resolve(i.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(ci).catch(ci)}fetchInfiniteQuery(e){return e.behavior=_p(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(ci).catch(ci)}ensureInfiniteQueryData(e){return e.behavior=_p(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return Ol.isOnline()?fe(this,xs).resumePausedMutations():Promise.resolve()}getQueryCache(){return fe(this,Xt)}getMutationCache(){return fe(this,xs)}getDefaultOptions(){return fe(this,ys)}setDefaultOptions(e){ht(this,ys,e)}setQueryDefaults(e,n){fe(this,Kr).set(sa(e),{queryKey:e,defaultOptions:n})}getQueryDefaults(e){const n=[...fe(this,Kr).values()],i={};return n.forEach(s=>{ra(e,s.queryKey)&&Object.assign(i,s.defaultOptions)}),i}setMutationDefaults(e,n){fe(this,Zr).set(sa(e),{mutationKey:e,defaultOptions:n})}getMutationDefaults(e){const n=[...fe(this,Zr).values()],i={};return n.forEach(s=>{ra(e,s.mutationKey)&&Object.assign(i,s.defaultOptions)}),i}defaultQueryOptions(e){if(e._defaulted)return e;const n={...fe(this,ys).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return n.queryHash||(n.queryHash=nf(n.queryKey,n)),n.refetchOnReconnect===void 0&&(n.refetchOnReconnect=n.networkMode!=="always"),n.throwOnError===void 0&&(n.throwOnError=!!n.suspense),!n.networkMode&&n.persister&&(n.networkMode="offlineFirst"),n.queryFn===sf&&(n.enabled=!1),n}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...fe(this,ys).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){fe(this,Xt).clear(),fe(this,xs).clear()}},Xt=new WeakMap,xs=new WeakMap,ys=new WeakMap,Kr=new WeakMap,Zr=new WeakMap,ws=new WeakMap,Qr=new WeakMap,Jr=new WeakMap,Ap),UL="VUE_QUERY_CLIENT";function OL(t){const e=t?`:${t}`:"";return`${UL}${e}`}function ad(t,e,n="",i=0){if(e){const s=e(t,n,i);if(s===void 0&&ln(t)||s!==void 0)return s}if(Array.isArray(t))return t.map((s,r)=>ad(s,e,String(r),i+1));if(typeof t=="object"&&FL(t)){const s=Object.entries(t).map(([r,o])=>[r,ad(o,e,r,i+1)]);return Object.fromEntries(s)}return t}function NL(t,e){return ad(t,e)}function vt(t,e=!1){return NL(t,(n,i,s)=>{if(s===1&&i==="queryKey")return vt(n,!0);if(e&&kL(n))return vt(n(),e);if(ln(n))return vt(Ts(n),e)})}function FL(t){if(Object.prototype.toString.call(t)!=="[object Object]")return!1;const e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function kL(t){return typeof t=="function"}var BL=class extends Fv{find(t){return super.find(vt(t))}findAll(t={}){return super.findAll(vt(t))}},HL=class extends kv{find(t){return super.find(vt(t))}findAll(t={}){return super.findAll(vt(t))}},zL=class extends IL{constructor(t={}){const e={defaultOptions:t.defaultOptions,queryCache:t.queryCache||new BL,mutationCache:t.mutationCache||new HL};super(e),this.isRestoring=st(!1)}isFetching(t={}){return super.isFetching(vt(t))}isMutating(t={}){return super.isMutating(vt(t))}getQueryData(t){return super.getQueryData(vt(t))}ensureQueryData(t){return super.ensureQueryData(vt(t))}getQueriesData(t){return super.getQueriesData(vt(t))}setQueryData(t,e,n={}){return super.setQueryData(vt(t),e,vt(n))}setQueriesData(t,e,n={}){return super.setQueriesData(vt(t),e,vt(n))}getQueryState(t){return super.getQueryState(vt(t))}removeQueries(t={}){return super.removeQueries(vt(t))}resetQueries(t={},e={}){return super.resetQueries(vt(t),vt(e))}cancelQueries(t={},e={}){return super.cancelQueries(vt(t),vt(e))}invalidateQueries(t={},e={}){const n=vt(t),i=vt(e);if(super.invalidateQueries({...n,refetchType:"none"},i),n.refetchType==="none")return Promise.resolve();const s={...n,type:n.refetchType??n.type??"active"};return fa().then(()=>super.refetchQueries(s,i))}refetchQueries(t={},e={}){return super.refetchQueries(vt(t),vt(e))}fetchQuery(t){return super.fetchQuery(vt(t))}prefetchQuery(t){return super.prefetchQuery(vt(t))}fetchInfiniteQuery(t){return super.fetchInfiniteQuery(vt(t))}prefetchInfiniteQuery(t){return super.prefetchInfiniteQuery(vt(t))}setDefaultOptions(t){super.setDefaultOptions(vt(t))}setQueryDefaults(t,e){super.setQueryDefaults(vt(t),vt(e))}getQueryDefaults(t){return super.getQueryDefaults(vt(t))}setMutationDefaults(t,e){super.setMutationDefaults(vt(t),vt(e))}getMutationDefaults(t){return super.getMutationDefaults(vt(t))}},VL={install:(t,e={})=>{const n=OL(e.queryClientKey);let i;if("queryClient"in e&&e.queryClient)i=e.queryClient;else{const o="queryClientConfig"in e?e.queryClientConfig:void 0;i=new zL(o)}Ta||i.mount();let s=()=>{};if(e.clientPersister){i.isRestoring.value=!0;const[o,a]=e.clientPersister(i);s=o,a.then(()=>{var l;i.isRestoring.value=!1,(l=e.clientPersisterOnSuccess)==null||l.call(e,i)})}const r=()=>{i.unmount(),s()};if(t.onUnmount)t.onUnmount(r);else{const o=t.unmount;t.unmount=function(){r(),o()}}t.provide(n,i)}};const Bv=rb(_x),GL=cb();Bv.use(GL).use(fL).use(VL);Bv.mount("#app");export{So as A,$L as B,nn as C,HP as D,eD as E,Ht as F,an as G,Uo as H,Oo as I,yt as J,Av as K,xv as L,sd as M,Jl as N,Rv as O,Xn as P,pi as Q,pn as R,mv as S,vv as T,Ul as U,Pm as V,zD as W,Sd as X,fa as Y,pa as _,b as a,Dt as b,$e as c,$t as d,jL as e,To as f,xc as g,YL as h,KL as i,ZL as j,QL as k,qL as l,ua as m,ho as n,ze as o,wd as p,qt as q,st as r,bi as s,at as t,En as u,Jt as v,Nn as w,Je as x,XL as y,jn as z};
