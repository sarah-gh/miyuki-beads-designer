const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SweetAlertDemo-BTA_EWeX.js","assets/SweetAlertDemo-tn0RQdqM.css","assets/WeavingGrid-zUPyzm00.js","assets/PeyoteGridEditor-DqIpVGTI.js","assets/PeyoteGridEditor-a3NLjfbt.css","assets/WeavingGrid-CtNwMiec.css","assets/PeyoteGrid-C_KzC3qP.js","assets/PeyoteGrid-Cf_BLC9L.css"])))=>i.map(i=>d[i]);
var uf=t=>{throw TypeError(t)};var ac=(t,e,n)=>e.has(t)||uf("Cannot "+n);var fe=(t,e,n)=>(ac(t,e,"read from private field"),n?n.call(t):e.get(t)),St=(t,e,n)=>e.has(t)?uf("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),ht=(t,e,n,i)=>(ac(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n),un=(t,e,n)=>(ac(t,e,"access private method"),n);var Ca=(t,e,n,i)=>({set _(s){ht(t,e,s,n)},get _(){return fe(t,e,i)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function fd(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ot={},Or=[],Ri=()=>{},Jv=()=>!1,Bl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),hd=t=>t.startsWith("onUpdate:"),bn=Object.assign,pd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},e_=Object.prototype.hasOwnProperty,Rt=(t,e)=>e_.call(t,e),et=Array.isArray,Nr=t=>ca(t)==="[object Map]",ho=t=>ca(t)==="[object Set]",df=t=>ca(t)==="[object Date]",ut=t=>typeof t=="function",Zt=t=>typeof t=="string",Li=t=>typeof t=="symbol",Ft=t=>t!==null&&typeof t=="object",Np=t=>(Ft(t)||ut(t))&&ut(t.then)&&ut(t.catch),Fp=Object.prototype.toString,ca=t=>Fp.call(t),t_=t=>ca(t).slice(8,-1),kp=t=>ca(t)==="[object Object]",md=t=>Zt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fo=fd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Hl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},n_=/-(\w)/g,si=Hl(t=>t.replace(n_,(e,n)=>n?n.toUpperCase():"")),i_=/\B([A-Z])/g,cr=Hl(t=>t.replace(i_,"-$1").toLowerCase()),zl=Hl(t=>t.charAt(0).toUpperCase()+t.slice(1)),lc=Hl(t=>t?`on${zl(t)}`:""),Es=(t,e)=>!Object.is(t,e),sl=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Bp=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},vl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ff;const Vl=()=>ff||(ff=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function jn(t){if(et(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Zt(i)?a_(i):jn(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Zt(t)||Ft(t))return t}const s_=/;(?![^(]*\))/g,r_=/:([^]+)/,o_=/\/\*[^]*?\*\//g;function a_(t){const e={};return t.replace(o_,"").split(s_).forEach(n=>{if(n){const i=n.split(r_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ye(t){let e="";if(Zt(t))e=t;else if(et(t))for(let n=0;n<t.length;n++){const i=Ye(t[n]);i&&(e+=i+" ")}else if(Ft(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const l_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",c_=fd(l_);function Hp(t){return!!t||t===""}function u_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=ua(t[i],e[i]);return n}function ua(t,e){if(t===e)return!0;let n=df(t),i=df(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Li(t),i=Li(e),n||i)return t===e;if(n=et(t),i=et(e),n||i)return n&&i?u_(t,e):!1;if(n=Ft(t),i=Ft(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ua(t[o],e[o]))return!1}}return String(t)===String(e)}function gd(t,e){return t.findIndex(n=>ua(n,e))}const zp=t=>!!(t&&t.__v_isRef===!0),st=t=>Zt(t)?t:t==null?"":et(t)||Ft(t)&&(t.toString===Fp||!ut(t.toString))?zp(t)?st(t.value):JSON.stringify(t,Vp,2):String(t),Vp=(t,e)=>zp(e)?Vp(t,e.value):Nr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[cc(i,r)+" =>"]=s,n),{})}:ho(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>cc(n))}:Li(e)?cc(e):Ft(e)&&!et(e)&&!kp(e)?String(e):e,cc=(t,e="")=>{var n;return Li(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $n;class Gp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=$n,!e&&$n&&(this.index=($n.scopes||($n.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=$n;try{return $n=this,e()}finally{$n=n}}}on(){$n=this}off(){$n=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function d_(t){return new Gp(t)}function f_(){return $n}let Nt;const uc=new WeakSet;class Wp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,$n&&$n.active&&$n.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,uc.has(this)&&(uc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Xp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,hf(this),jp(this);const e=Nt,n=mi;Nt=this,mi=!0;try{return this.fn()}finally{qp(this),Nt=e,mi=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)bd(e);this.deps=this.depsTail=void 0,hf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?uc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){su(this)&&this.run()}get dirty(){return su(this)}}let $p=0,ko,Bo;function Xp(t,e=!1){if(t.flags|=8,e){t.next=Bo,Bo=t;return}t.next=ko,ko=t}function vd(){$p++}function _d(){if(--$p>0)return;if(Bo){let e=Bo;for(Bo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ko;){let e=ko;for(ko=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function jp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function qp(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),bd(i),h_(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function su(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Yp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Yp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Xo))return;t.globalVersion=Xo;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!su(t)){t.flags&=-3;return}const n=Nt,i=mi;Nt=t,mi=!0;try{jp(t);const s=t.fn(t._value);(e.version===0||Es(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Nt=n,mi=i,qp(t),t.flags&=-3}}function bd(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)bd(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function h_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let mi=!0;const Kp=[];function Ds(){Kp.push(mi),mi=!1}function Ls(){const t=Kp.pop();mi=t===void 0?!0:t}function hf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Nt;Nt=void 0;try{e()}finally{Nt=n}}}let Xo=0;class p_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class xd{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Nt||!mi||Nt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Nt)n=this.activeLink=new p_(Nt,this),Nt.deps?(n.prevDep=Nt.depsTail,Nt.depsTail.nextDep=n,Nt.depsTail=n):Nt.deps=Nt.depsTail=n,Zp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Nt.depsTail,n.nextDep=void 0,Nt.depsTail.nextDep=n,Nt.depsTail=n,Nt.deps===n&&(Nt.deps=i)}return n}trigger(e){this.version++,Xo++,this.notify(e)}notify(e){vd();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{_d()}}}function Zp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Zp(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ru=new WeakMap,tr=Symbol(""),ou=Symbol(""),jo=Symbol("");function mn(t,e,n){if(mi&&Nt){let i=ru.get(t);i||ru.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new xd),s.map=i,s.key=n),s.track()}}function qi(t,e,n,i,s,r){const o=ru.get(t);if(!o){Xo++;return}const a=l=>{l&&l.trigger()};if(vd(),e==="clear")o.forEach(a);else{const l=et(t),c=l&&md(n);if(l&&n==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===jo||!Li(f)&&f>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(jo)),e){case"add":l?c&&a(o.get("length")):(a(o.get(tr)),Nr(t)&&a(o.get(ou)));break;case"delete":l||(a(o.get(tr)),Nr(t)&&a(o.get(ou)));break;case"set":Nr(t)&&a(o.get(tr));break}}_d()}function pr(t){const e=Ct(t);return e===t?e:(mn(e,"iterate",jo),ii(t)?e:e.map(gn))}function Gl(t){return mn(t=Ct(t),"iterate",jo),t}const m_={__proto__:null,[Symbol.iterator](){return dc(this,Symbol.iterator,gn)},concat(...t){return pr(this).concat(...t.map(e=>et(e)?pr(e):e))},entries(){return dc(this,"entries",t=>(t[1]=gn(t[1]),t))},every(t,e){return Fi(this,"every",t,e,void 0,arguments)},filter(t,e){return Fi(this,"filter",t,e,n=>n.map(gn),arguments)},find(t,e){return Fi(this,"find",t,e,gn,arguments)},findIndex(t,e){return Fi(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Fi(this,"findLast",t,e,gn,arguments)},findLastIndex(t,e){return Fi(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Fi(this,"forEach",t,e,void 0,arguments)},includes(...t){return fc(this,"includes",t)},indexOf(...t){return fc(this,"indexOf",t)},join(t){return pr(this).join(t)},lastIndexOf(...t){return fc(this,"lastIndexOf",t)},map(t,e){return Fi(this,"map",t,e,void 0,arguments)},pop(){return yo(this,"pop")},push(...t){return yo(this,"push",t)},reduce(t,...e){return pf(this,"reduce",t,e)},reduceRight(t,...e){return pf(this,"reduceRight",t,e)},shift(){return yo(this,"shift")},some(t,e){return Fi(this,"some",t,e,void 0,arguments)},splice(...t){return yo(this,"splice",t)},toReversed(){return pr(this).toReversed()},toSorted(t){return pr(this).toSorted(t)},toSpliced(...t){return pr(this).toSpliced(...t)},unshift(...t){return yo(this,"unshift",t)},values(){return dc(this,"values",gn)}};function dc(t,e,n){const i=Gl(t),s=i[e]();return i!==t&&!ii(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=n(r.value)),r}),s}const g_=Array.prototype;function Fi(t,e,n,i,s,r){const o=Gl(t),a=o!==t&&!ii(t),l=o[e];if(l!==g_[e]){const d=l.apply(t,r);return a?gn(d):d}let c=n;o!==t&&(a?c=function(d,f){return n.call(this,gn(d),f,t)}:n.length>2&&(c=function(d,f){return n.call(this,d,f,t)}));const u=l.call(o,c,i);return a&&s?s(u):u}function pf(t,e,n,i){const s=Gl(t);let r=n;return s!==t&&(ii(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,gn(a),l,t)}),s[e](r,...i)}function fc(t,e,n){const i=Ct(t);mn(i,"iterate",jo);const s=i[e](...n);return(s===-1||s===!1)&&Sd(n[0])?(n[0]=Ct(n[0]),i[e](...n)):s}function yo(t,e,n=[]){Ds(),vd();const i=Ct(t)[e].apply(t,n);return _d(),Ls(),i}const v_=fd("__proto__,__v_isRef,__isVue"),Qp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Li));function __(t){Li(t)||(t=String(t));const e=Ct(this);return mn(e,"has",t),e.hasOwnProperty(t)}class Jp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?C_:im:r?nm:tm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=et(e);if(!s){let l;if(o&&(l=m_[n]))return l;if(n==="hasOwnProperty")return __}const a=Reflect.get(e,n,ln(e)?e:i);return(Li(n)?Qp.has(n):v_(n))||(s||mn(e,"get",n),r)?a:ln(a)?o&&md(n)?a:a.value:Ft(a)?s?rm(a):da(a):a}}class em extends Jp{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(!this._isShallow){const l=ir(r);if(!ii(i)&&!ir(i)&&(r=Ct(r),i=Ct(i)),!et(e)&&ln(r)&&!ln(i))return l?!1:(r.value=i,!0)}const o=et(e)&&md(n)?Number(n)<e.length:Rt(e,n),a=Reflect.set(e,n,i,ln(e)?e:s);return e===Ct(s)&&(o?Es(i,r)&&qi(e,"set",n,i):qi(e,"add",n,i)),a}deleteProperty(e,n){const i=Rt(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&qi(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!Li(n)||!Qp.has(n))&&mn(e,"has",n),i}ownKeys(e){return mn(e,"iterate",et(e)?"length":tr),Reflect.ownKeys(e)}}class b_ extends Jp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const x_=new em,y_=new b_,w_=new em(!0);const au=t=>t,Ra=t=>Reflect.getPrototypeOf(t);function S_(t,e,n){return function(...i){const s=this.__v_raw,r=Ct(s),o=Nr(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?au:e?lu:gn;return!e&&mn(r,"iterate",l?ou:tr),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function Pa(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function M_(t,e){const n={get(s){const r=this.__v_raw,o=Ct(r),a=Ct(s);t||(Es(s,a)&&mn(o,"get",s),mn(o,"get",a));const{has:l}=Ra(o),c=e?au:t?lu:gn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&mn(Ct(s),"iterate",tr),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=Ct(r),a=Ct(s);return t||(Es(s,a)&&mn(o,"has",s),mn(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=Ct(a),c=e?au:t?lu:gn;return!t&&mn(l,"iterate",tr),a.forEach((u,d)=>s.call(r,c(u),c(d),o))}};return bn(n,t?{add:Pa("add"),set:Pa("set"),delete:Pa("delete"),clear:Pa("clear")}:{add(s){!e&&!ii(s)&&!ir(s)&&(s=Ct(s));const r=Ct(this);return Ra(r).has.call(r,s)||(r.add(s),qi(r,"add",s,s)),this},set(s,r){!e&&!ii(r)&&!ir(r)&&(r=Ct(r));const o=Ct(this),{has:a,get:l}=Ra(o);let c=a.call(o,s);c||(s=Ct(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Es(r,u)&&qi(o,"set",s,r):qi(o,"add",s,r),this},delete(s){const r=Ct(this),{has:o,get:a}=Ra(r);let l=o.call(r,s);l||(s=Ct(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&qi(r,"delete",s,void 0),c},clear(){const s=Ct(this),r=s.size!==0,o=s.clear();return r&&qi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=S_(s,t,e)}),n}function yd(t,e){const n=M_(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(Rt(n,s)&&s in i?n:i,s,r)}const E_={get:yd(!1,!1)},T_={get:yd(!1,!0)},A_={get:yd(!0,!1)};const tm=new WeakMap,nm=new WeakMap,im=new WeakMap,C_=new WeakMap;function R_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function P_(t){return t.__v_skip||!Object.isExtensible(t)?0:R_(t_(t))}function da(t){return ir(t)?t:wd(t,!1,x_,E_,tm)}function sm(t){return wd(t,!1,w_,T_,nm)}function rm(t){return wd(t,!0,y_,A_,im)}function wd(t,e,n,i,s){if(!Ft(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=P_(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Fr(t){return ir(t)?Fr(t.__v_raw):!!(t&&t.__v_isReactive)}function ir(t){return!!(t&&t.__v_isReadonly)}function ii(t){return!!(t&&t.__v_isShallow)}function Sd(t){return t?!!t.__v_raw:!1}function Ct(t){const e=t&&t.__v_raw;return e?Ct(e):t}function om(t){return!Rt(t,"__v_skip")&&Object.isExtensible(t)&&Bp(t,"__v_skip",!0),t}const gn=t=>Ft(t)?da(t):t,lu=t=>Ft(t)?rm(t):t;function ln(t){return t?t.__v_isRef===!0:!1}function it(t){return am(t,!1)}function D_(t){return am(t,!0)}function am(t,e){return ln(t)?t:new L_(t,e)}class L_{constructor(e,n){this.dep=new xd,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ct(e),this._value=n?e:gn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||ii(e)||ir(e);e=i?e:Ct(e),Es(e,n)&&(this._rawValue=e,this._value=i?e:gn(e),this.dep.trigger())}}function Ts(t){return ln(t)?t.value:t}const I_={get:(t,e,n)=>e==="__v_raw"?t:Ts(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return ln(s)&&!ln(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function lm(t){return Fr(t)?t:new Proxy(t,I_)}class U_{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new xd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Xo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Nt!==this)return Xp(this,!0),!0}get value(){const e=this.dep.track();return Yp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function O_(t,e,n=!1){let i,s;return ut(t)?i=t:(i=t.get,s=t.set),new U_(i,s,n)}const Da={},_l=new WeakMap;let Ws;function N_(t,e=!1,n=Ws){if(n){let i=_l.get(n);i||_l.set(n,i=[]),i.push(t)}}function F_(t,e,n=Ot){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=y=>s?y:ii(y)||s===!1||s===0?Yi(y,1):Yi(y);let u,d,f,h,g=!1,b=!1;if(ln(t)?(d=()=>t.value,g=ii(t)):Fr(t)?(d=()=>c(t),g=!0):et(t)?(b=!0,g=t.some(y=>Fr(y)||ii(y)),d=()=>t.map(y=>{if(ln(y))return y.value;if(Fr(y))return c(y);if(ut(y))return l?l(y,2):y()})):ut(t)?e?d=l?()=>l(t,2):t:d=()=>{if(f){Ds();try{f()}finally{Ls()}}const y=Ws;Ws=u;try{return l?l(t,3,[h]):t(h)}finally{Ws=y}}:d=Ri,e&&s){const y=d,D=s===!0?1/0:s;d=()=>Yi(y(),D)}const m=f_(),p=()=>{u.stop(),m&&m.active&&pd(m.effects,u)};if(r&&e){const y=e;e=(...D)=>{y(...D),p()}}let C=b?new Array(t.length).fill(Da):Da;const E=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const D=u.run();if(s||g||(b?D.some((L,P)=>Es(L,C[P])):Es(D,C))){f&&f();const L=Ws;Ws=u;try{const P=[D,C===Da?void 0:b&&C[0]===Da?[]:C,h];l?l(e,3,P):e(...P),C=D}finally{Ws=L}}}else u.run()};return a&&a(E),u=new Wp(d),u.scheduler=o?()=>o(E,!1):E,h=y=>N_(y,!1,u),f=u.onStop=()=>{const y=_l.get(u);if(y){if(l)l(y,4);else for(const D of y)D();_l.delete(u)}},e?i?E(!0):C=u.run():o?o(E.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Yi(t,e=1/0,n){if(e<=0||!Ft(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ln(t))Yi(t.value,e,n);else if(et(t))for(let i=0;i<t.length;i++)Yi(t[i],e,n);else if(ho(t)||Nr(t))t.forEach(i=>{Yi(i,e,n)});else if(kp(t)){for(const i in t)Yi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Yi(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function fa(t,e,n,i){try{return i?t(...i):t()}catch(s){Wl(s,e,n)}}function Ii(t,e,n,i){if(ut(t)){const s=fa(t,e,n,i);return s&&Np(s)&&s.catch(r=>{Wl(r,e,n)}),s}if(et(t)){const s=[];for(let r=0;r<t.length;r++)s.push(Ii(t[r],e,n,i));return s}}function Wl(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ot;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}a=a.parent}if(r){Ds(),fa(r,null,10,[t,l,c]),Ls();return}}k_(t,n,s,i,o)}function k_(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const An=[];let xi=-1;const kr=[];let fs=null,Pr=0;const cm=Promise.resolve();let bl=null;function ha(t){const e=bl||cm;return t?e.then(this?t.bind(this):t):e}function B_(t){let e=xi+1,n=An.length;for(;e<n;){const i=e+n>>>1,s=An[i],r=qo(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function Md(t){if(!(t.flags&1)){const e=qo(t),n=An[An.length-1];!n||!(t.flags&2)&&e>=qo(n)?An.push(t):An.splice(B_(e),0,t),t.flags|=1,um()}}function um(){bl||(bl=cm.then(fm))}function H_(t){et(t)?kr.push(...t):fs&&t.id===-1?fs.splice(Pr+1,0,t):t.flags&1||(kr.push(t),t.flags|=1),um()}function mf(t,e,n=xi+1){for(;n<An.length;n++){const i=An[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;An.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function dm(t){if(kr.length){const e=[...new Set(kr)].sort((n,i)=>qo(n)-qo(i));if(kr.length=0,fs){fs.push(...e);return}for(fs=e,Pr=0;Pr<fs.length;Pr++){const n=fs[Pr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}fs=null,Pr=0}}const qo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function fm(t){try{for(xi=0;xi<An.length;xi++){const e=An[xi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),fa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;xi<An.length;xi++){const e=An[xi];e&&(e.flags&=-2)}xi=-1,An.length=0,dm(),bl=null,(An.length||kr.length)&&fm()}}let qn=null,hm=null;function xl(t){const e=qn;return qn=t,hm=t&&t.type.__scopeId||null,e}function Io(t,e=qn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Cf(-1);const r=xl(e);let o;try{o=t(...s)}finally{xl(r),i._d&&Cf(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function qt(t,e){if(qn===null)return t;const n=ql(qn),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Ot]=e[s];r&&(ut(r)&&(r={mounted:r,updated:r}),r.deep&&Yi(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Os(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Ds(),Ii(l,n,8,[t.el,a,t,e]),Ls())}}const pm=Symbol("_vte"),z_=t=>t.__isTeleport,Ho=t=>t&&(t.disabled||t.disabled===""),gf=t=>t&&(t.defer||t.defer===""),vf=t=>typeof SVGElement<"u"&&t instanceof SVGElement,_f=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,cu=(t,e)=>{const n=t&&t.to;return Zt(n)?e?e(n):null:n},mm={name:"Teleport",__isTeleport:!0,process(t,e,n,i,s,r,o,a,l,c){const{mc:u,pc:d,pbc:f,o:{insert:h,querySelector:g,createText:b,createComment:m}}=c,p=Ho(e.props);let{shapeFlag:C,children:E,dynamicChildren:y}=e;if(t==null){const D=e.el=b(""),L=e.anchor=b("");h(D,n,i),h(L,n,i);const P=(S,A)=>{C&16&&(s&&s.isCE&&(s.ce._teleportTarget=S),u(E,S,A,s,r,o,a,l))},k=()=>{const S=e.target=cu(e.props,g),A=gm(S,e,b,h);S&&(o!=="svg"&&vf(S)?o="svg":o!=="mathml"&&_f(S)&&(o="mathml"),p||(P(S,A),rl(e,!1)))};p&&(P(n,L),rl(e,!0)),gf(e.props)?Tn(()=>{k(),e.el.__isMounted=!0},r):k()}else{if(gf(e.props)&&!t.el.__isMounted){Tn(()=>{mm.process(t,e,n,i,s,r,o,a,l,c),delete t.el.__isMounted},r);return}e.el=t.el,e.targetStart=t.targetStart;const D=e.anchor=t.anchor,L=e.target=t.target,P=e.targetAnchor=t.targetAnchor,k=Ho(t.props),S=k?n:L,A=k?D:P;if(o==="svg"||vf(L)?o="svg":(o==="mathml"||_f(L))&&(o="mathml"),y?(f(t.dynamicChildren,y,S,s,r,o,a),Rd(t,e,!0)):l||d(t,e,S,A,s,r,o,a,!1),p)k?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):La(e,n,D,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const U=e.target=cu(e.props,g);U&&La(e,U,null,c,0)}else k&&La(e,L,P,c,1);rl(e,p)}},remove(t,e,n,{um:i,o:{remove:s}},r){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:d,props:f}=t;if(d&&(s(c),s(u)),r&&s(l),o&16){const h=r||!Ho(f);for(let g=0;g<a.length;g++){const b=a[g];i(b,e,n,h,!!b.dynamicChildren)}}},move:La,hydrate:V_};function La(t,e,n,{o:{insert:i},m:s},r=2){r===0&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,d=r===2;if(d&&i(o,e,n),(!d||Ho(u))&&l&16)for(let f=0;f<c.length;f++)s(c[f],e,n,2);d&&i(a,e,n)}function V_(t,e,n,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},d){const f=e.target=cu(e.props,l);if(f){const h=Ho(e.props),g=f._lpa||f.firstChild;if(e.shapeFlag&16)if(h)e.anchor=d(o(t),e,a(t),n,i,s,r),e.targetStart=g,e.targetAnchor=g&&o(g);else{e.anchor=o(t);let b=g;for(;b;){if(b&&b.nodeType===8){if(b.data==="teleport start anchor")e.targetStart=b;else if(b.data==="teleport anchor"){e.targetAnchor=b,f._lpa=e.targetAnchor&&o(e.targetAnchor);break}}b=o(b)}e.targetAnchor||gm(f,e,u,c),d(g&&o(g),e,f,n,i,s,r)}rl(e,h)}return e.anchor&&o(e.anchor)}const G_=mm;function rl(t,e){const n=t.ctx;if(n&&n.ut){let i,s;for(e?(i=t.el,s=t.anchor):(i=t.targetStart,s=t.targetAnchor);i&&i!==s;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function gm(t,e,n,i){const s=e.targetStart=n(""),r=e.targetAnchor=n("");return s[pm]=r,t&&(i(s,t),i(r,t)),r}function Ed(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ed(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function vm(t,e){return ut(t)?bn({name:t.name},e,{setup:t}):t}function _m(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function yl(t,e,n,i,s=!1){if(et(t)){t.forEach((g,b)=>yl(g,e&&(et(e)?e[b]:e),n,i,s));return}if(zo(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&yl(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?ql(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ot?a.refs={}:a.refs,d=a.setupState,f=Ct(d),h=d===Ot?()=>!1:g=>Rt(f,g);if(c!=null&&c!==l&&(Zt(c)?(u[c]=null,h(c)&&(d[c]=null)):ln(c)&&(c.value=null)),ut(l))fa(l,a,12,[o,u]);else{const g=Zt(l),b=ln(l);if(g||b){const m=()=>{if(t.f){const p=g?h(l)?d[l]:u[l]:l.value;s?et(p)&&pd(p,r):et(p)?p.includes(r)||p.push(r):g?(u[l]=[r],h(l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else g?(u[l]=o,h(l)&&(d[l]=o)):b&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Tn(m,n)):m()}}}Vl().requestIdleCallback;Vl().cancelIdleCallback;const zo=t=>!!t.type.__asyncLoader,bm=t=>t.type.__isKeepAlive;function W_(t,e){xm(t,"a",e)}function $_(t,e){xm(t,"da",e)}function xm(t,e,n=vn){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if($l(e,i,n),n){let s=n.parent;for(;s&&s.parent;)bm(s.parent.vnode)&&X_(i,e,n,s),s=s.parent}}function X_(t,e,n,i){const s=$l(e,t,i,!0);Ad(()=>{pd(i[e],s)},n)}function $l(t,e,n=vn,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Ds();const a=pa(n),l=Ii(e,n,t,o);return a(),Ls(),l});return i?s.unshift(r):s.push(r),r}}const ns=t=>(e,n=vn)=>{(!Ko||t==="sp")&&$l(t,(...i)=>e(...i),n)},j_=ns("bm"),po=ns("m"),q_=ns("bu"),Y_=ns("u"),Td=ns("bum"),Ad=ns("um"),K_=ns("sp"),Z_=ns("rtg"),Q_=ns("rtc");function J_(t,e=vn){$l("ec",t,e)}const e0="components";function t0(t,e){return i0(e0,t,!0,e)||t}const n0=Symbol.for("v-ndc");function i0(t,e,n=!0,i=!1){const s=qn||vn;if(s){const r=s.type;{const a=G0(r,!1);if(a&&(a===e||a===si(e)||a===zl(si(e))))return r}const o=bf(s[t]||r[t],e)||bf(s.appContext[t],e);return!o&&i?r:o}}function bf(t,e){return t&&(t[e]||t[si(e)]||t[zl(si(e))])}function En(t,e,n,i){let s;const r=n,o=et(t);if(o||Zt(t)){const a=o&&Fr(t);let l=!1;a&&(l=!ii(t),t=Gl(t)),s=new Array(t.length);for(let c=0,u=t.length;c<u;c++)s[c]=e(l?gn(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(Ft(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,r)}}else s=[];return s}const uu=t=>t?zm(t)?ql(t):uu(t.parent):null,Vo=bn(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>uu(t.parent),$root:t=>uu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>wm(t),$forceUpdate:t=>t.f||(t.f=()=>{Md(t.update)}),$nextTick:t=>t.n||(t.n=ha.bind(t.proxy)),$watch:t=>M0.bind(t)}),hc=(t,e)=>t!==Ot&&!t.__isScriptSetup&&Rt(t,e),s0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(hc(i,e))return o[e]=1,i[e];if(s!==Ot&&Rt(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&Rt(c,e))return o[e]=3,r[e];if(n!==Ot&&Rt(n,e))return o[e]=4,n[e];du&&(o[e]=0)}}const u=Vo[e];let d,f;if(u)return e==="$attrs"&&mn(t.attrs,"get",""),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Ot&&Rt(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,Rt(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return hc(s,e)?(s[e]=n,!0):i!==Ot&&Rt(i,e)?(i[e]=n,!0):Rt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==Ot&&Rt(t,o)||hc(e,o)||(a=r[0])&&Rt(a,o)||Rt(i,o)||Rt(Vo,o)||Rt(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Rt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function xf(t){return et(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let du=!0;function r0(t){const e=wm(t),n=t.proxy,i=t.ctx;du=!1,e.beforeCreate&&yf(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:g,activated:b,deactivated:m,beforeDestroy:p,beforeUnmount:C,destroyed:E,unmounted:y,render:D,renderTracked:L,renderTriggered:P,errorCaptured:k,serverPrefetch:S,expose:A,inheritAttrs:U,components:W,directives:O,filters:I}=e;if(c&&o0(c,i,null),o)for(const ee in o){const Y=o[ee];ut(Y)&&(i[ee]=Y.bind(n))}if(s){const ee=s.call(n,n);Ft(ee)&&(t.data=da(ee))}if(du=!0,r)for(const ee in r){const Y=r[ee],xe=ut(Y)?Y.bind(n,n):ut(Y.get)?Y.get.bind(n,n):Ri,Me=!ut(Y)&&ut(Y.set)?Y.set.bind(n):Ri,Le=an({get:xe,set:Me});Object.defineProperty(i,ee,{enumerable:!0,configurable:!0,get:()=>Le.value,set:Ge=>Le.value=Ge})}if(a)for(const ee in a)ym(a[ee],i,n,ee);if(l){const ee=ut(l)?l.call(n):l;Reflect.ownKeys(ee).forEach(Y=>{ol(Y,ee[Y])})}u&&yf(u,t,"c");function V(ee,Y){et(Y)?Y.forEach(xe=>ee(xe.bind(n))):Y&&ee(Y.bind(n))}if(V(j_,d),V(po,f),V(q_,h),V(Y_,g),V(W_,b),V($_,m),V(J_,k),V(Q_,L),V(Z_,P),V(Td,C),V(Ad,y),V(K_,S),et(A))if(A.length){const ee=t.exposed||(t.exposed={});A.forEach(Y=>{Object.defineProperty(ee,Y,{get:()=>n[Y],set:xe=>n[Y]=xe})})}else t.exposed||(t.exposed={});D&&t.render===Ri&&(t.render=D),U!=null&&(t.inheritAttrs=U),W&&(t.components=W),O&&(t.directives=O),S&&_m(t)}function o0(t,e,n=Ri){et(t)&&(t=fu(t));for(const i in t){const s=t[i];let r;Ft(s)?"default"in s?r=Qi(s.from||i,s.default,!0):r=Qi(s.from||i):r=Qi(s),ln(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function yf(t,e,n){Ii(et(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function ym(t,e,n,i){let s=i.includes(".")?Om(n,i):()=>n[i];if(Zt(t)){const r=e[t];ut(r)&&Fn(s,r)}else if(ut(t))Fn(s,t.bind(n));else if(Ft(t))if(et(t))t.forEach(r=>ym(r,e,n,i));else{const r=ut(t.handler)?t.handler.bind(n):e[t.handler];ut(r)&&Fn(s,r,t)}}function wm(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>wl(l,c,o,!0)),wl(l,e,o)),Ft(e)&&r.set(e,l),l}function wl(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&wl(t,r,n,!0),s&&s.forEach(o=>wl(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=a0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const a0={data:wf,props:Sf,emits:Sf,methods:Uo,computed:Uo,beforeCreate:wn,created:wn,beforeMount:wn,mounted:wn,beforeUpdate:wn,updated:wn,beforeDestroy:wn,beforeUnmount:wn,destroyed:wn,unmounted:wn,activated:wn,deactivated:wn,errorCaptured:wn,serverPrefetch:wn,components:Uo,directives:Uo,watch:c0,provide:wf,inject:l0};function wf(t,e){return e?t?function(){return bn(ut(t)?t.call(this,this):t,ut(e)?e.call(this,this):e)}:e:t}function l0(t,e){return Uo(fu(t),fu(e))}function fu(t){if(et(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function wn(t,e){return t?[...new Set([].concat(t,e))]:e}function Uo(t,e){return t?bn(Object.create(null),t,e):e}function Sf(t,e){return t?et(t)&&et(e)?[...new Set([...t,...e])]:bn(Object.create(null),xf(t),xf(e??{})):e}function c0(t,e){if(!t)return e;if(!e)return t;const n=bn(Object.create(null),t);for(const i in e)n[i]=wn(t[i],e[i]);return n}function Sm(){return{app:null,config:{isNativeTag:Jv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let u0=0;function d0(t,e){return function(i,s=null){ut(i)||(i=bn({},i)),s!=null&&!Ft(s)&&(s=null);const r=Sm(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:u0++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:$0,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&ut(u.install)?(o.add(u),u.install(c,...d)):ut(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||nn(i,s);return h.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),t(h,u,f),l=!0,c._container=u,u.__vue_app__=c,ql(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Ii(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=Br;Br=c;try{return u()}finally{Br=d}}};return c}}let Br=null;function ol(t,e){if(vn){let n=vn.provides;const i=vn.parent&&vn.parent.provides;i===n&&(n=vn.provides=Object.create(i)),n[t]=e}}function Qi(t,e,n=!1){const i=vn||qn;if(i||Br){const s=Br?Br._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ut(e)?e.call(i&&i.proxy):e}}const Mm={},Em=()=>Object.create(Mm),Tm=t=>Object.getPrototypeOf(t)===Mm;function f0(t,e,n,i=!1){const s={},r=Em();t.propsDefaults=Object.create(null),Am(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:sm(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function h0(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=Ct(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Xl(t.emitsOptions,f))continue;const h=e[f];if(l)if(Rt(r,f))h!==r[f]&&(r[f]=h,c=!0);else{const g=si(f);s[g]=hu(l,a,g,h,t,!1)}else h!==r[f]&&(r[f]=h,c=!0)}}}else{Am(t,e,s,r)&&(c=!0);let u;for(const d in a)(!e||!Rt(e,d)&&((u=cr(d))===d||!Rt(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=hu(l,a,d,void 0,t,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!Rt(e,d))&&(delete r[d],c=!0)}c&&qi(t.attrs,"set","")}function Am(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Fo(l))continue;const c=e[l];let u;s&&Rt(s,u=si(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Xl(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Ct(n),c=a||Ot;for(let u=0;u<r.length;u++){const d=r[u];n[d]=hu(s,l,d,c[d],t,!Rt(c,d))}}return o}function hu(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=Rt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ut(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=pa(s);i=c[n]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===cr(n))&&(i=!0))}return i}const p0=new WeakMap;function Cm(t,e,n=!1){const i=n?p0:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!ut(t)){const u=d=>{l=!0;const[f,h]=Cm(d,e,!0);bn(o,f),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Ft(t)&&i.set(t,Or),Or;if(et(r))for(let u=0;u<r.length;u++){const d=si(r[u]);Mf(d)&&(o[d]=Ot)}else if(r)for(const u in r){const d=si(u);if(Mf(d)){const f=r[u],h=o[d]=et(f)||ut(f)?{type:f}:bn({},f),g=h.type;let b=!1,m=!0;if(et(g))for(let p=0;p<g.length;++p){const C=g[p],E=ut(C)&&C.name;if(E==="Boolean"){b=!0;break}else E==="String"&&(m=!1)}else b=ut(g)&&g.name==="Boolean";h[0]=b,h[1]=m,(b||Rt(h,"default"))&&a.push(d)}}const c=[o,a];return Ft(t)&&i.set(t,c),c}function Mf(t){return t[0]!=="$"&&!Fo(t)}const Rm=t=>t[0]==="_"||t==="$stable",Cd=t=>et(t)?t.map(Ei):[Ei(t)],m0=(t,e,n)=>{if(e._n)return e;const i=Io((...s)=>Cd(e(...s)),n);return i._c=!1,i},Pm=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Rm(s))continue;const r=t[s];if(ut(r))e[s]=m0(s,r,i);else if(r!=null){const o=Cd(r);e[s]=()=>o}}},Dm=(t,e)=>{const n=Cd(e);t.slots.default=()=>n},Lm=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},g0=(t,e,n)=>{const i=t.slots=Em();if(t.vnode.shapeFlag&32){const s=e._;s?(Lm(i,e,n),n&&Bp(i,"_",s,!0)):Pm(e,i)}else e&&Dm(t,e)},v0=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Ot;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:Lm(s,e,n):(r=!e.$stable,Pm(e,s)),o=e}else e&&(Dm(t,e),o={default:1});if(r)for(const a in s)!Rm(a)&&o[a]==null&&delete s[a]},Tn=D0;function _0(t){return b0(t)}function b0(t,e){const n=Vl();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=Ri,insertStaticContent:g}=t,b=(R,v,z,K=null,se=null,q=null,ge=void 0,te=null,ce=!!v.dynamicChildren)=>{if(R===v)return;R&&!wo(R,v)&&(K=B(R),Ge(R,se,q,!0),R=null),v.patchFlag===-2&&(ce=!1,v.dynamicChildren=null);const{type:de,ref:Pe,shapeFlag:M}=v;switch(de){case jl:m(R,v,z,K);break;case sr:p(R,v,z,K);break;case al:R==null&&C(v,z,K,ge);break;case Ht:W(R,v,z,K,se,q,ge,te,ce);break;default:M&1?D(R,v,z,K,se,q,ge,te,ce):M&6?O(R,v,z,K,se,q,ge,te,ce):(M&64||M&128)&&de.process(R,v,z,K,se,q,ge,te,ce,me)}Pe!=null&&se&&yl(Pe,R&&R.ref,q,v||R,!v)},m=(R,v,z,K)=>{if(R==null)i(v.el=a(v.children),z,K);else{const se=v.el=R.el;v.children!==R.children&&c(se,v.children)}},p=(R,v,z,K)=>{R==null?i(v.el=l(v.children||""),z,K):v.el=R.el},C=(R,v,z,K)=>{[R.el,R.anchor]=g(R.children,v,z,K,R.el,R.anchor)},E=({el:R,anchor:v},z,K)=>{let se;for(;R&&R!==v;)se=f(R),i(R,z,K),R=se;i(v,z,K)},y=({el:R,anchor:v})=>{let z;for(;R&&R!==v;)z=f(R),s(R),R=z;s(v)},D=(R,v,z,K,se,q,ge,te,ce)=>{v.type==="svg"?ge="svg":v.type==="math"&&(ge="mathml"),R==null?L(v,z,K,se,q,ge,te,ce):S(R,v,se,q,ge,te,ce)},L=(R,v,z,K,se,q,ge,te)=>{let ce,de;const{props:Pe,shapeFlag:M,transition:x,dirs:F}=R;if(ce=R.el=o(R.type,q,Pe&&Pe.is,Pe),M&8?u(ce,R.children):M&16&&k(R.children,ce,null,K,se,pc(R,q),ge,te),F&&Os(R,null,K,"created"),P(ce,R,R.scopeId,ge,K),Pe){for(const le in Pe)le!=="value"&&!Fo(le)&&r(ce,le,null,Pe[le],q,K);"value"in Pe&&r(ce,"value",null,Pe.value,q),(de=Pe.onVnodeBeforeMount)&&_i(de,K,R)}F&&Os(R,null,K,"beforeMount");const Z=x0(se,x);Z&&x.beforeEnter(ce),i(ce,v,z),((de=Pe&&Pe.onVnodeMounted)||Z||F)&&Tn(()=>{de&&_i(de,K,R),Z&&x.enter(ce),F&&Os(R,null,K,"mounted")},se)},P=(R,v,z,K,se)=>{if(z&&h(R,z),K)for(let q=0;q<K.length;q++)h(R,K[q]);if(se){let q=se.subTree;if(v===q||Fm(q.type)&&(q.ssContent===v||q.ssFallback===v)){const ge=se.vnode;P(R,ge,ge.scopeId,ge.slotScopeIds,se.parent)}}},k=(R,v,z,K,se,q,ge,te,ce=0)=>{for(let de=ce;de<R.length;de++){const Pe=R[de]=te?hs(R[de]):Ei(R[de]);b(null,Pe,v,z,K,se,q,ge,te)}},S=(R,v,z,K,se,q,ge)=>{const te=v.el=R.el;let{patchFlag:ce,dynamicChildren:de,dirs:Pe}=v;ce|=R.patchFlag&16;const M=R.props||Ot,x=v.props||Ot;let F;if(z&&Ns(z,!1),(F=x.onVnodeBeforeUpdate)&&_i(F,z,v,R),Pe&&Os(v,R,z,"beforeUpdate"),z&&Ns(z,!0),(M.innerHTML&&x.innerHTML==null||M.textContent&&x.textContent==null)&&u(te,""),de?A(R.dynamicChildren,de,te,z,K,pc(v,se),q):ge||Y(R,v,te,null,z,K,pc(v,se),q,!1),ce>0){if(ce&16)U(te,M,x,z,se);else if(ce&2&&M.class!==x.class&&r(te,"class",null,x.class,se),ce&4&&r(te,"style",M.style,x.style,se),ce&8){const Z=v.dynamicProps;for(let le=0;le<Z.length;le++){const Q=Z[le],Ie=M[Q],ve=x[Q];(ve!==Ie||Q==="value")&&r(te,Q,Ie,ve,se,z)}}ce&1&&R.children!==v.children&&u(te,v.children)}else!ge&&de==null&&U(te,M,x,z,se);((F=x.onVnodeUpdated)||Pe)&&Tn(()=>{F&&_i(F,z,v,R),Pe&&Os(v,R,z,"updated")},K)},A=(R,v,z,K,se,q,ge)=>{for(let te=0;te<v.length;te++){const ce=R[te],de=v[te],Pe=ce.el&&(ce.type===Ht||!wo(ce,de)||ce.shapeFlag&70)?d(ce.el):z;b(ce,de,Pe,null,K,se,q,ge,!0)}},U=(R,v,z,K,se)=>{if(v!==z){if(v!==Ot)for(const q in v)!Fo(q)&&!(q in z)&&r(R,q,v[q],null,se,K);for(const q in z){if(Fo(q))continue;const ge=z[q],te=v[q];ge!==te&&q!=="value"&&r(R,q,te,ge,se,K)}"value"in z&&r(R,"value",v.value,z.value,se)}},W=(R,v,z,K,se,q,ge,te,ce)=>{const de=v.el=R?R.el:a(""),Pe=v.anchor=R?R.anchor:a("");let{patchFlag:M,dynamicChildren:x,slotScopeIds:F}=v;F&&(te=te?te.concat(F):F),R==null?(i(de,z,K),i(Pe,z,K),k(v.children||[],z,Pe,se,q,ge,te,ce)):M>0&&M&64&&x&&R.dynamicChildren?(A(R.dynamicChildren,x,z,se,q,ge,te),(v.key!=null||se&&v===se.subTree)&&Rd(R,v,!0)):Y(R,v,z,Pe,se,q,ge,te,ce)},O=(R,v,z,K,se,q,ge,te,ce)=>{v.slotScopeIds=te,R==null?v.shapeFlag&512?se.ctx.activate(v,z,K,ge,ce):I(v,z,K,se,q,ge,ce):G(R,v,ce)},I=(R,v,z,K,se,q,ge)=>{const te=R.component=k0(R,K,se);if(bm(R)&&(te.ctx.renderer=me),B0(te,!1,ge),te.asyncDep){if(se&&se.registerDep(te,V,ge),!R.el){const ce=te.subTree=nn(sr);p(null,ce,v,z)}}else V(te,R,v,z,se,q,ge)},G=(R,v,z)=>{const K=v.component=R.component;if(R0(R,v,z))if(K.asyncDep&&!K.asyncResolved){ee(K,v,z);return}else K.next=v,K.update();else v.el=R.el,K.vnode=v},V=(R,v,z,K,se,q,ge)=>{const te=()=>{if(R.isMounted){let{next:M,bu:x,u:F,parent:Z,vnode:le}=R;{const Ue=Im(R);if(Ue){M&&(M.el=le.el,ee(R,M,ge)),Ue.asyncDep.then(()=>{R.isUnmounted||te()});return}}let Q=M,Ie;Ns(R,!1),M?(M.el=le.el,ee(R,M,ge)):M=le,x&&sl(x),(Ie=M.props&&M.props.onVnodeBeforeUpdate)&&_i(Ie,Z,M,le),Ns(R,!0);const ve=Tf(R),De=R.subTree;R.subTree=ve,b(De,ve,d(De.el),B(De),R,se,q),M.el=ve.el,Q===null&&P0(R,ve.el),F&&Tn(F,se),(Ie=M.props&&M.props.onVnodeUpdated)&&Tn(()=>_i(Ie,Z,M,le),se)}else{let M;const{el:x,props:F}=v,{bm:Z,m:le,parent:Q,root:Ie,type:ve}=R,De=zo(v);Ns(R,!1),Z&&sl(Z),!De&&(M=F&&F.onVnodeBeforeMount)&&_i(M,Q,v),Ns(R,!0);{Ie.ce&&Ie.ce._injectChildStyle(ve);const Ue=R.subTree=Tf(R);b(null,Ue,z,K,R,se,q),v.el=Ue.el}if(le&&Tn(le,se),!De&&(M=F&&F.onVnodeMounted)){const Ue=v;Tn(()=>_i(M,Q,Ue),se)}(v.shapeFlag&256||Q&&zo(Q.vnode)&&Q.vnode.shapeFlag&256)&&R.a&&Tn(R.a,se),R.isMounted=!0,v=z=K=null}};R.scope.on();const ce=R.effect=new Wp(te);R.scope.off();const de=R.update=ce.run.bind(ce),Pe=R.job=ce.runIfDirty.bind(ce);Pe.i=R,Pe.id=R.uid,ce.scheduler=()=>Md(Pe),Ns(R,!0),de()},ee=(R,v,z)=>{v.component=R;const K=R.vnode.props;R.vnode=v,R.next=null,h0(R,v.props,K,z),v0(R,v.children,z),Ds(),mf(R),Ls()},Y=(R,v,z,K,se,q,ge,te,ce=!1)=>{const de=R&&R.children,Pe=R?R.shapeFlag:0,M=v.children,{patchFlag:x,shapeFlag:F}=v;if(x>0){if(x&128){Me(de,M,z,K,se,q,ge,te,ce);return}else if(x&256){xe(de,M,z,K,se,q,ge,te,ce);return}}F&8?(Pe&16&&ye(de,se,q),M!==de&&u(z,M)):Pe&16?F&16?Me(de,M,z,K,se,q,ge,te,ce):ye(de,se,q,!0):(Pe&8&&u(z,""),F&16&&k(M,z,K,se,q,ge,te,ce))},xe=(R,v,z,K,se,q,ge,te,ce)=>{R=R||Or,v=v||Or;const de=R.length,Pe=v.length,M=Math.min(de,Pe);let x;for(x=0;x<M;x++){const F=v[x]=ce?hs(v[x]):Ei(v[x]);b(R[x],F,z,null,se,q,ge,te,ce)}de>Pe?ye(R,se,q,!0,!1,M):k(v,z,K,se,q,ge,te,ce,M)},Me=(R,v,z,K,se,q,ge,te,ce)=>{let de=0;const Pe=v.length;let M=R.length-1,x=Pe-1;for(;de<=M&&de<=x;){const F=R[de],Z=v[de]=ce?hs(v[de]):Ei(v[de]);if(wo(F,Z))b(F,Z,z,null,se,q,ge,te,ce);else break;de++}for(;de<=M&&de<=x;){const F=R[M],Z=v[x]=ce?hs(v[x]):Ei(v[x]);if(wo(F,Z))b(F,Z,z,null,se,q,ge,te,ce);else break;M--,x--}if(de>M){if(de<=x){const F=x+1,Z=F<Pe?v[F].el:K;for(;de<=x;)b(null,v[de]=ce?hs(v[de]):Ei(v[de]),z,Z,se,q,ge,te,ce),de++}}else if(de>x)for(;de<=M;)Ge(R[de],se,q,!0),de++;else{const F=de,Z=de,le=new Map;for(de=Z;de<=x;de++){const Be=v[de]=ce?hs(v[de]):Ei(v[de]);Be.key!=null&&le.set(Be.key,de)}let Q,Ie=0;const ve=x-Z+1;let De=!1,Ue=0;const _e=new Array(ve);for(de=0;de<ve;de++)_e[de]=0;for(de=F;de<=M;de++){const Be=R[de];if(Ie>=ve){Ge(Be,se,q,!0);continue}let Oe;if(Be.key!=null)Oe=le.get(Be.key);else for(Q=Z;Q<=x;Q++)if(_e[Q-Z]===0&&wo(Be,v[Q])){Oe=Q;break}Oe===void 0?Ge(Be,se,q,!0):(_e[Oe-Z]=de+1,Oe>=Ue?Ue=Oe:De=!0,b(Be,v[Oe],z,null,se,q,ge,te,ce),Ie++)}const Ce=De?y0(_e):Or;for(Q=Ce.length-1,de=ve-1;de>=0;de--){const Be=Z+de,Oe=v[Be],Te=Be+1<Pe?v[Be+1].el:K;_e[de]===0?b(null,Oe,z,Te,se,q,ge,te,ce):De&&(Q<0||de!==Ce[Q]?Le(Oe,z,Te,2):Q--)}}},Le=(R,v,z,K,se=null)=>{const{el:q,type:ge,transition:te,children:ce,shapeFlag:de}=R;if(de&6){Le(R.component.subTree,v,z,K);return}if(de&128){R.suspense.move(v,z,K);return}if(de&64){ge.move(R,v,z,me);return}if(ge===Ht){i(q,v,z);for(let M=0;M<ce.length;M++)Le(ce[M],v,z,K);i(R.anchor,v,z);return}if(ge===al){E(R,v,z);return}if(K!==2&&de&1&&te)if(K===0)te.beforeEnter(q),i(q,v,z),Tn(()=>te.enter(q),se);else{const{leave:M,delayLeave:x,afterLeave:F}=te,Z=()=>i(q,v,z),le=()=>{M(q,()=>{Z(),F&&F()})};x?x(q,Z,le):le()}else i(q,v,z)},Ge=(R,v,z,K=!1,se=!1)=>{const{type:q,props:ge,ref:te,children:ce,dynamicChildren:de,shapeFlag:Pe,patchFlag:M,dirs:x,cacheIndex:F}=R;if(M===-2&&(se=!1),te!=null&&yl(te,null,z,R,!0),F!=null&&(v.renderCache[F]=void 0),Pe&256){v.ctx.deactivate(R);return}const Z=Pe&1&&x,le=!zo(R);let Q;if(le&&(Q=ge&&ge.onVnodeBeforeUnmount)&&_i(Q,v,R),Pe&6)ie(R.component,z,K);else{if(Pe&128){R.suspense.unmount(z,K);return}Z&&Os(R,null,v,"beforeUnmount"),Pe&64?R.type.remove(R,v,z,me,K):de&&!de.hasOnce&&(q!==Ht||M>0&&M&64)?ye(de,v,z,!1,!0):(q===Ht&&M&384||!se&&Pe&16)&&ye(ce,v,z),K&&_t(R)}(le&&(Q=ge&&ge.onVnodeUnmounted)||Z)&&Tn(()=>{Q&&_i(Q,v,R),Z&&Os(R,null,v,"unmounted")},z)},_t=R=>{const{type:v,el:z,anchor:K,transition:se}=R;if(v===Ht){Ze(z,K);return}if(v===al){y(R);return}const q=()=>{s(z),se&&!se.persisted&&se.afterLeave&&se.afterLeave()};if(R.shapeFlag&1&&se&&!se.persisted){const{leave:ge,delayLeave:te}=se,ce=()=>ge(z,q);te?te(R.el,q,ce):ce()}else q()},Ze=(R,v)=>{let z;for(;R!==v;)z=f(R),s(R),R=z;s(v)},ie=(R,v,z)=>{const{bum:K,scope:se,job:q,subTree:ge,um:te,m:ce,a:de}=R;Ef(ce),Ef(de),K&&sl(K),se.stop(),q&&(q.flags|=8,Ge(ge,R,v,z)),te&&Tn(te,v),Tn(()=>{R.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&R.asyncDep&&!R.asyncResolved&&R.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},ye=(R,v,z,K=!1,se=!1,q=0)=>{for(let ge=q;ge<R.length;ge++)Ge(R[ge],v,z,K,se)},B=R=>{if(R.shapeFlag&6)return B(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const v=f(R.anchor||R.el),z=v&&v[pm];return z?f(z):v};let ue=!1;const oe=(R,v,z)=>{R==null?v._vnode&&Ge(v._vnode,null,null,!0):b(v._vnode||null,R,v,null,null,null,z),v._vnode=R,ue||(ue=!0,mf(),dm(),ue=!1)},me={p:b,um:Ge,m:Le,r:_t,mt:I,mc:k,pc:Y,pbc:A,n:B,o:t};return{render:oe,hydrate:void 0,createApp:d0(oe)}}function pc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ns({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function x0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Rd(t,e,n=!1){const i=t.children,s=e.children;if(et(i)&&et(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=hs(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Rd(o,a)),a.type===jl&&(a.el=o.el)}}function y0(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Im(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Im(e)}function Ef(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const w0=Symbol.for("v-scx"),S0=()=>Qi(w0);function Fn(t,e,n){return Um(t,e,n)}function Um(t,e,n=Ot){const{immediate:i,deep:s,flush:r,once:o}=n,a=bn({},n),l=e&&i||!e&&r!=="post";let c;if(Ko){if(r==="sync"){const h=S0();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Ri,h.resume=Ri,h.pause=Ri,h}}const u=vn;a.call=(h,g,b)=>Ii(h,u,g,b);let d=!1;r==="post"?a.scheduler=h=>{Tn(h,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(h,g)=>{g?h():Md(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=F_(t,e,a);return Ko&&(c?c.push(f):l&&f()),f}function M0(t,e,n){const i=this.proxy,s=Zt(t)?t.includes(".")?Om(i,t):()=>i[t]:t.bind(i,i);let r;ut(e)?r=e:(r=e.handler,n=e);const o=pa(this),a=Um(s,r.bind(i),n);return o(),a}function Om(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const E0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${si(e)}Modifiers`]||t[`${cr(e)}Modifiers`];function T0(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Ot;let s=n;const r=e.startsWith("update:"),o=r&&E0(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>Zt(u)?u.trim():u)),o.number&&(s=n.map(vl)));let a,l=i[a=lc(e)]||i[a=lc(si(e))];!l&&r&&(l=i[a=lc(cr(e))]),l&&Ii(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ii(c,t,6,s)}}function Nm(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!ut(t)){const l=c=>{const u=Nm(c,e,!0);u&&(a=!0,bn(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Ft(t)&&i.set(t,null),null):(et(r)?r.forEach(l=>o[l]=null):bn(o,r),Ft(t)&&i.set(t,o),o)}function Xl(t,e){return!t||!Bl(e)?!1:(e=e.slice(2).replace(/Once$/,""),Rt(t,e[0].toLowerCase()+e.slice(1))||Rt(t,cr(e))||Rt(t,e))}function Tf(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:g,inheritAttrs:b}=t,m=xl(t);let p,C;try{if(n.shapeFlag&4){const y=s||i,D=y;p=Ei(c.call(D,y,u,d,h,f,g)),C=a}else{const y=e;p=Ei(y.length>1?y(d,{attrs:a,slots:o,emit:l}):y(d,null)),C=e.props?a:A0(a)}}catch(y){Go.length=0,Wl(y,t,1),p=nn(sr)}let E=p;if(C&&b!==!1){const y=Object.keys(C),{shapeFlag:D}=E;y.length&&D&7&&(r&&y.some(hd)&&(C=C0(C,r)),E=to(E,C,!1,!0))}return n.dirs&&(E=to(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&Ed(E,n.transition),p=E,xl(m),p}const A0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Bl(n))&&((e||(e={}))[n]=t[n]);return e},C0=(t,e)=>{const n={};for(const i in t)(!hd(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function R0(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Af(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==i[f]&&!Xl(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Af(i,o,c):!0:!!o;return!1}function Af(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Xl(n,r))return!0}return!1}function P0({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Fm=t=>t.__isSuspense;function D0(t,e){e&&e.pendingBranch?et(t)?e.effects.push(...t):e.effects.push(t):H_(t)}const Ht=Symbol.for("v-fgt"),jl=Symbol.for("v-txt"),sr=Symbol.for("v-cmt"),al=Symbol.for("v-stc"),Go=[];let Yn=null;function He(t=!1){Go.push(Yn=t?null:[])}function L0(){Go.pop(),Yn=Go[Go.length-1]||null}let Yo=1;function Cf(t,e=!1){Yo+=t,t<0&&Yn&&e&&(Yn.hasOnce=!0)}function km(t){return t.dynamicChildren=Yo>0?Yn||Or:null,L0(),Yo>0&&Yn&&Yn.push(t),t}function $e(t,e,n,i,s,r){return km(_(t,e,n,i,s,r,!0))}function Lr(t,e,n,i,s){return km(nn(t,e,n,i,s,!0))}function Sl(t){return t?t.__v_isVNode===!0:!1}function wo(t,e){return t.type===e.type&&t.key===e.key}const Bm=({key:t})=>t??null,ll=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Zt(t)||ln(t)||ut(t)?{i:qn,r:t,k:e,f:!!n}:t:null);function _(t,e=null,n=null,i=0,s=null,r=t===Ht?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Bm(e),ref:e&&ll(e),scopeId:hm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:qn};return a?(Pd(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Zt(n)?8:16),Yo>0&&!o&&Yn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Yn.push(l),l}const nn=I0;function I0(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===n0)&&(t=sr),Sl(t)){const a=to(t,e,!0);return n&&Pd(a,n),Yo>0&&!r&&Yn&&(a.shapeFlag&6?Yn[Yn.indexOf(t)]=a:Yn.push(a)),a.patchFlag=-2,a}if(W0(t)&&(t=t.__vccOpts),e){e=U0(e);let{class:a,style:l}=e;a&&!Zt(a)&&(e.class=Ye(a)),Ft(l)&&(Sd(l)&&!et(l)&&(l=bn({},l)),e.style=jn(l))}const o=Zt(t)?1:Fm(t)?128:z_(t)?64:Ft(t)?4:ut(t)?2:0;return _(t,e,n,i,s,o,r,!0)}function U0(t){return t?Sd(t)||Tm(t)?bn({},t):t:null}function to(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?O0(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Bm(c),ref:e&&e.ref?n&&r?et(r)?r.concat(ll(e)):[r,ll(e)]:ll(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ht?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&to(t.ssContent),ssFallback:t.ssFallback&&to(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Ed(u,l.clone(u)),u}function Oo(t=" ",e=0){return nn(jl,null,t,e)}function Hm(t,e){const n=nn(al,null,t);return n.staticCount=e,n}function Dt(t="",e=!1){return e?(He(),Lr(sr,null,t)):nn(sr,null,t)}function Ei(t){return t==null||typeof t=="boolean"?nn(sr):et(t)?nn(Ht,null,t.slice()):Sl(t)?hs(t):nn(jl,null,String(t))}function hs(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:to(t)}function Pd(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(et(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Pd(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Tm(e)?e._ctx=qn:s===3&&qn&&(qn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ut(e)?(e={default:e,_ctx:qn},n=32):(e=String(e),i&64?(n=16,e=[Oo(e)]):n=8);t.children=e,t.shapeFlag|=n}function O0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Ye([e.class,i.class]));else if(s==="style")e.style=jn([e.style,i.style]);else if(Bl(s)){const r=e[s],o=i[s];o&&r!==o&&!(et(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function _i(t,e,n,i=null){Ii(t,e,7,[n,i])}const N0=Sm();let F0=0;function k0(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||N0,r={uid:F0++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Gp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cm(i,s),emitsOptions:Nm(i,s),emit:null,emitted:null,propsDefaults:Ot,inheritAttrs:i.inheritAttrs,ctx:Ot,data:Ot,props:Ot,attrs:Ot,slots:Ot,refs:Ot,setupState:Ot,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=T0.bind(null,r),t.ce&&t.ce(r),r}let vn=null,Ml,pu;{const t=Vl(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Ml=e("__VUE_INSTANCE_SETTERS__",n=>vn=n),pu=e("__VUE_SSR_SETTERS__",n=>Ko=n)}const pa=t=>{const e=vn;return Ml(t),t.scope.on(),()=>{t.scope.off(),Ml(e)}},Rf=()=>{vn&&vn.scope.off(),Ml(null)};function zm(t){return t.vnode.shapeFlag&4}let Ko=!1;function B0(t,e=!1,n=!1){e&&pu(e);const{props:i,children:s}=t.vnode,r=zm(t);f0(t,i,r,e),g0(t,s,n);const o=r?H0(t,e):void 0;return e&&pu(!1),o}function H0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,s0);const{setup:i}=n;if(i){Ds();const s=t.setupContext=i.length>1?V0(t):null,r=pa(t),o=fa(i,t,0,[t.props,s]),a=Np(o);if(Ls(),r(),(a||t.sp)&&!zo(t)&&_m(t),a){if(o.then(Rf,Rf),e)return o.then(l=>{Pf(t,l)}).catch(l=>{Wl(l,t,0)});t.asyncDep=o}else Pf(t,o)}else Vm(t)}function Pf(t,e,n){ut(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ft(e)&&(t.setupState=lm(e)),Vm(t)}function Vm(t,e,n){const i=t.type;t.render||(t.render=i.render||Ri);{const s=pa(t);Ds();try{r0(t)}finally{Ls(),s()}}}const z0={get(t,e){return mn(t,"get",""),t[e]}};function V0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,z0),slots:t.slots,emit:t.emit,expose:e}}function ql(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(lm(om(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Vo)return Vo[n](t)},has(e,n){return n in e||n in Vo}})):t.proxy}function G0(t,e=!0){return ut(t)?t.displayName||t.name:t.name||e&&t.__name}function W0(t){return ut(t)&&"__vccOpts"in t}const an=(t,e)=>O_(t,e,Ko);function Gm(t,e,n){const i=arguments.length;return i===2?Ft(e)&&!et(e)?Sl(e)?nn(t,null,[e]):nn(t,e):nn(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Sl(n)&&(n=[n]),nn(t,e,n))}const $0="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let mu;const Df=typeof window<"u"&&window.trustedTypes;if(Df)try{mu=Df.createPolicy("vue",{createHTML:t=>t})}catch{}const Wm=mu?t=>mu.createHTML(t):t=>t,X0="http://www.w3.org/2000/svg",j0="http://www.w3.org/1998/Math/MathML",Xi=typeof document<"u"?document:null,Lf=Xi&&Xi.createElement("template"),q0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Xi.createElementNS(X0,t):e==="mathml"?Xi.createElementNS(j0,t):n?Xi.createElement(t,{is:n}):Xi.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Xi.createTextNode(t),createComment:t=>Xi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Xi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Lf.innerHTML=Wm(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Lf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Y0=Symbol("_vtc");function K0(t,e,n){const i=t[Y0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const El=Symbol("_vod"),$m=Symbol("_vsh"),lI={beforeMount(t,{value:e},{transition:n}){t[El]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):So(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),So(t,!0),i.enter(t)):i.leave(t,()=>{So(t,!1)}):So(t,e))},beforeUnmount(t,{value:e}){So(t,e)}};function So(t,e){t.style.display=e?t[El]:"none",t[$m]=!e}const Z0=Symbol(""),Q0=/(^|;)\s*display\s*:/;function J0(t,e,n){const i=t.style,s=Zt(n);let r=!1;if(n&&!s){if(e)if(Zt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&cl(i,a,"")}else for(const o in e)n[o]==null&&cl(i,o,"");for(const o in n)o==="display"&&(r=!0),cl(i,o,n[o])}else if(s){if(e!==n){const o=i[Z0];o&&(n+=";"+o),i.cssText=n,r=Q0.test(n)}}else e&&t.removeAttribute("style");El in t&&(t[El]=r?i.display:"",t[$m]&&(i.display="none"))}const If=/\s*!important$/;function cl(t,e,n){if(et(n))n.forEach(i=>cl(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=eb(t,e);If.test(n)?t.setProperty(cr(i),n.replace(If,""),"important"):t[i]=n}}const Uf=["Webkit","Moz","ms"],mc={};function eb(t,e){const n=mc[e];if(n)return n;let i=si(e);if(i!=="filter"&&i in t)return mc[e]=i;i=zl(i);for(let s=0;s<Uf.length;s++){const r=Uf[s]+i;if(r in t)return mc[e]=r}return e}const Of="http://www.w3.org/1999/xlink";function Nf(t,e,n,i,s,r=c_(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Of,e.slice(6,e.length)):t.setAttributeNS(Of,e,n):n==null||r&&!Hp(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Li(n)?String(n):n)}function Ff(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Wm(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Hp(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function gs(t,e,n,i){t.addEventListener(e,n,i)}function tb(t,e,n,i){t.removeEventListener(e,n,i)}const kf=Symbol("_vei");function nb(t,e,n,i,s=null){const r=t[kf]||(t[kf]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=ib(e);if(i){const c=r[e]=ob(i,s);gs(t,a,c,l)}else o&&(tb(t,a,o,l),r[e]=void 0)}}const Bf=/(?:Once|Passive|Capture)$/;function ib(t){let e;if(Bf.test(t)){e={};let i;for(;i=t.match(Bf);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):cr(t.slice(2)),e]}let gc=0;const sb=Promise.resolve(),rb=()=>gc||(sb.then(()=>gc=0),gc=Date.now());function ob(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Ii(ab(i,n.value),e,5,[i])};return n.value=t,n.attached=rb(),n}function ab(t,e){if(et(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Hf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,lb=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?K0(t,i,o):e==="style"?J0(t,n,i):Bl(e)?hd(e)||nb(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cb(t,e,i,o))?(Ff(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Nf(t,e,i,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Zt(i))?Ff(t,si(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Nf(t,e,i,o))};function cb(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Hf(e)&&ut(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Hf(e)&&Zt(n)?!1:e in t}const no=t=>{const e=t.props["onUpdate:modelValue"]||!1;return et(e)?n=>sl(e,n):e};function ub(t){t.target.composing=!0}function zf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ji=Symbol("_assign"),en={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[Ji]=no(s);const r=i||s.props&&s.props.type==="number";gs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=vl(a)),t[Ji](a)}),n&&gs(t,"change",()=>{t.value=t.value.trim()}),e||(gs(t,"compositionstart",ub),gs(t,"compositionend",zf),gs(t,"change",zf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[Ji]=no(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?vl(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===l)||(t.value=l))}},cI={deep:!0,created(t,e,n){t[Ji]=no(n),gs(t,"change",()=>{const i=t._modelValue,s=Zo(t),r=t.checked,o=t[Ji];if(et(i)){const a=gd(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(ho(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Xm(t,r))})},mounted:Vf,beforeUpdate(t,e,n){t[Ji]=no(n),Vf(t,e,n)}};function Vf(t,{value:e,oldValue:n},i){t._modelValue=e;let s;if(et(e))s=gd(e,i.props.value)>-1;else if(ho(e))s=e.has(i.props.value);else{if(e===n)return;s=ua(e,Xm(t,!0))}t.checked!==s&&(t.checked=s)}const db={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=ho(e);gs(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?vl(Zo(o)):Zo(o));t[Ji](t.multiple?s?new Set(r):r:r[0]),t._assigning=!0,ha(()=>{t._assigning=!1})}),t[Ji]=no(i)},mounted(t,{value:e}){Gf(t,e)},beforeUpdate(t,e,n){t[Ji]=no(n)},updated(t,{value:e}){t._assigning||Gf(t,e)}};function Gf(t,e){const n=t.multiple,i=et(e);if(!(n&&!i&&!ho(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],a=Zo(o);if(n)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=gd(e,a)>-1}else o.selected=e.has(a);else if(ua(Zo(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Zo(t){return"_value"in t?t._value:t.value}function Xm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const fb=["ctrl","shift","alt","meta"],hb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>fb.some(n=>t[`${n}Key`]&&!e.includes(n))},Mo=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=hb[e[o]];if(a&&a(s,e))return}return t(s,...r)})},pb=bn({patchProp:lb},q0);let Wf;function mb(){return Wf||(Wf=_0(pb))}const gb=(...t)=>{const e=mb().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=_b(i);if(!s)return;const r=e._component;!ut(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,vb(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function vb(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function _b(t){return Zt(t)?document.querySelector(t):t}/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const bb=Symbol();var $f;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})($f||($f={}));function xb(){const t=d_(!0),e=t.run(()=>it({}));let n=[],i=[];const s=om({install(r){s._a=r,r.provide(bb,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return this._a?n.push(r):i.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Dr=typeof document<"u";function jm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function yb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&jm(t.default)}const At=Object.assign;function vc(t,e){const n={};for(const i in e){const s=e[i];n[i]=vi(s)?s.map(t):t(s)}return n}const Wo=()=>{},vi=Array.isArray,qm=/#/g,wb=/&/g,Sb=/\//g,Mb=/=/g,Eb=/\?/g,Ym=/\+/g,Tb=/%5B/g,Ab=/%5D/g,Km=/%5E/g,Cb=/%60/g,Zm=/%7B/g,Rb=/%7C/g,Qm=/%7D/g,Pb=/%20/g;function Dd(t){return encodeURI(""+t).replace(Rb,"|").replace(Tb,"[").replace(Ab,"]")}function Db(t){return Dd(t).replace(Zm,"{").replace(Qm,"}").replace(Km,"^")}function gu(t){return Dd(t).replace(Ym,"%2B").replace(Pb,"+").replace(qm,"%23").replace(wb,"%26").replace(Cb,"`").replace(Zm,"{").replace(Qm,"}").replace(Km,"^")}function Lb(t){return gu(t).replace(Mb,"%3D")}function Ib(t){return Dd(t).replace(qm,"%23").replace(Eb,"%3F")}function Ub(t){return t==null?"":Ib(t).replace(Sb,"%2F")}function Qo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Ob=/\/$/,Nb=t=>t.replace(Ob,"");function _c(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Hb(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:Qo(o)}}function Fb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Xf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function kb(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&io(e.matched[i],n.matched[s])&&Jm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function io(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Jm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Bb(t[n],e[n]))return!1;return!0}function Bb(t,e){return vi(t)?jf(t,e):vi(e)?jf(e,t):t===e}function jf(t,e){return vi(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function Hb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const ss={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Jo;(function(t){t.pop="pop",t.push="push"})(Jo||(Jo={}));var $o;(function(t){t.back="back",t.forward="forward",t.unknown=""})($o||($o={}));function zb(t){if(!t)if(Dr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Nb(t)}const Vb=/^[^#]+#/;function Gb(t,e){return t.replace(Vb,"#")+e}function Wb(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Yl=()=>({left:window.scrollX,top:window.scrollY});function $b(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Wb(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function qf(t,e){return(history.state?history.state.position-e:-1)+t}const vu=new Map;function Xb(t,e){vu.set(t,e)}function jb(t){const e=vu.get(t);return vu.delete(t),e}let qb=()=>location.protocol+"//"+location.host;function eg(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Xf(l,"")}return Xf(n,t)+i+s}function Yb(t,e,n,i){let s=[],r=[],o=null;const a=({state:f})=>{const h=eg(t,location),g=n.value,b=e.value;let m=0;if(f){if(n.value=h,e.value=f,o&&o===g){o=null;return}m=b?f.position-b.position:0}else i(h);s.forEach(p=>{p(n.value,g,{delta:m,type:Jo.pop,direction:m?m>0?$o.forward:$o.back:$o.unknown})})};function l(){o=n.value}function c(f){s.push(f);const h=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return r.push(h),h}function u(){const{history:f}=window;f.state&&f.replaceState(At({},f.state,{scroll:Yl()}),"")}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function Yf(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Yl():null}}function Kb(t){const{history:e,location:n}=window,i={value:eg(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:qb()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(h){console.error(h),n[u?"replace":"assign"](f)}}function o(l,c){const u=At({},e.state,Yf(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=At({},s.value,e.state,{forward:l,scroll:Yl()});r(u.current,u,!0);const d=At({},Yf(i.value,l,null),{position:u.position+1},c);r(l,d,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Zb(t){t=zb(t);const e=Kb(t),n=Yb(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=At({location:"",base:t,go:i,createHref:Gb.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Qb(t){return typeof t=="string"||t&&typeof t=="object"}function tg(t){return typeof t=="string"||typeof t=="symbol"}const ng=Symbol("");var Kf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Kf||(Kf={}));function so(t,e){return At(new Error,{type:t,[ng]:!0},e)}function ki(t,e){return t instanceof Error&&ng in t&&(e==null||!!(t.type&e))}const Zf="[^/]+?",Jb={sensitive:!1,strict:!1,start:!0,end:!0},ex=/[.+*?^${}()[\]/\\]/g;function tx(t,e){const n=At({},Jb,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let d=0;d<c.length;d++){const f=c[d];let h=40+(n.sensitive?.25:0);if(f.type===0)d||(s+="/"),s+=f.value.replace(ex,"\\$&"),h+=40;else if(f.type===1){const{value:g,repeatable:b,optional:m,regexp:p}=f;r.push({name:g,repeatable:b,optional:m});const C=p||Zf;if(C!==Zf){h+=10;try{new RegExp(`(${C})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${g}" (${C}): `+y.message)}}let E=b?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;d||(E=m&&c.length<2?`(?:/${E})`:"/"+E),m&&(E+="?"),s+=E,h+=20,m&&(h+=-8),b&&(h+=-20),C===".*"&&(h+=-50)}u.push(h)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",g=r[f-1];d[g.name]=h&&g.repeatable?h.split("/"):h}return d}function l(c){let u="",d=!1;for(const f of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===0)u+=h.value;else if(h.type===1){const{value:g,repeatable:b,optional:m}=h,p=g in c?c[g]:"";if(vi(p)&&!b)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const C=vi(p)?p.join("/"):p;if(!C)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=C}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function nx(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ig(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=nx(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(Qf(i))return 1;if(Qf(s))return-1}return s.length-i.length}function Qf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ix={type:0,value:""},sx=/[a-zA-Z0-9_]/;function rx(t){if(!t)return[[]];if(t==="/")return[[ix]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):f();break;case 4:f(),n=i;break;case 1:l==="("?n=2:sx.test(l)?f():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),s}function ox(t,e,n){const i=tx(rx(t.path),n),s=At(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function ax(t,e){const n=[],i=new Map;e=nh({strict:!1,end:!0,sensitive:!1},e);function s(d){return i.get(d)}function r(d,f,h){const g=!h,b=eh(d);b.aliasOf=h&&h.record;const m=nh(e,d),p=[b];if("alias"in d){const y=typeof d.alias=="string"?[d.alias]:d.alias;for(const D of y)p.push(eh(At({},b,{components:h?h.record.components:b.components,path:D,aliasOf:h?h.record:b})))}let C,E;for(const y of p){const{path:D}=y;if(f&&D[0]!=="/"){const L=f.record.path,P=L[L.length-1]==="/"?"":"/";y.path=f.record.path+(D&&P+D)}if(C=ox(y,f,m),h?h.alias.push(C):(E=E||C,E!==C&&E.alias.push(C),g&&d.name&&!th(C)&&o(d.name)),sg(C)&&l(C),b.children){const L=b.children;for(let P=0;P<L.length;P++)r(L[P],C,h&&h.children[P])}h=h||C}return E?()=>{o(E)}:Wo}function o(d){if(tg(d)){const f=i.get(d);f&&(i.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const f=ux(d,n);n.splice(f,0,d),d.record.name&&!th(d)&&i.set(d.record.name,d)}function c(d,f){let h,g={},b,m;if("name"in d&&d.name){if(h=i.get(d.name),!h)throw so(1,{location:d});m=h.record.name,g=At(Jf(f.params,h.keys.filter(E=>!E.optional).concat(h.parent?h.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),d.params&&Jf(d.params,h.keys.map(E=>E.name))),b=h.stringify(g)}else if(d.path!=null)b=d.path,h=n.find(E=>E.re.test(b)),h&&(g=h.parse(b),m=h.record.name);else{if(h=f.name?i.get(f.name):n.find(E=>E.re.test(f.path)),!h)throw so(1,{location:d,currentLocation:f});m=h.record.name,g=At({},f.params,d.params),b=h.stringify(g)}const p=[];let C=h;for(;C;)p.unshift(C.record),C=C.parent;return{name:m,path:b,params:g,matched:p,meta:cx(p)}}t.forEach(d=>r(d));function u(){n.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Jf(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function eh(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:lx(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function lx(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function th(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function cx(t){return t.reduce((e,n)=>At(e,n.meta),{})}function nh(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function ux(t,e){let n=0,i=e.length;for(;n!==i;){const r=n+i>>1;ig(t,e[r])<0?i=r:n=r+1}const s=dx(t);return s&&(i=e.lastIndexOf(s,i-1)),i}function dx(t){let e=t;for(;e=e.parent;)if(sg(e)&&ig(t,e)===0)return e}function sg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function fx(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Ym," "),o=r.indexOf("="),a=Qo(o<0?r:r.slice(0,o)),l=o<0?null:Qo(r.slice(o+1));if(a in e){let c=e[a];vi(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function ih(t){let e="";for(let n in t){const i=t[n];if(n=Lb(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(vi(i)?i.map(r=>r&&gu(r)):[i&&gu(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function hx(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=vi(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const px=Symbol(""),sh=Symbol(""),Ld=Symbol(""),rg=Symbol(""),_u=Symbol("");function Eo(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ps(t,e,n,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(so(4,{from:n,to:e})):f instanceof Error?l(f):Qb(f)?l(so(2,{from:e,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=r(()=>t.call(i&&i.instances[s],e,n,c));let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(f=>l(f))})}function bc(t,e,n,i,s=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(jm(l)){const u=(l.__vccOpts||l)[e];u&&r.push(ps(u,n,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=yb(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const h=(d.__vccOpts||d)[e];return h&&ps(h,n,i,o,a,s)()}))}}return r}function rh(t){const e=Qi(Ld),n=Qi(rg),i=an(()=>{const l=Ts(t.to);return e.resolve(l)}),s=an(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(io.bind(null,u));if(f>-1)return f;const h=oh(l[c-2]);return c>1&&oh(u)===h&&d[d.length-1].path!==h?d.findIndex(io.bind(null,l[c-2])):f}),r=an(()=>s.value>-1&&bx(n.params,i.value.params)),o=an(()=>s.value>-1&&s.value===n.matched.length-1&&Jm(n.params,i.value.params));function a(l={}){if(_x(l)){const c=e[Ts(t.replace)?"replace":"push"](Ts(t.to)).catch(Wo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:an(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function mx(t){return t.length===1?t[0]:t}const gx=vm({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:rh,setup(t,{slots:e}){const n=da(rh(t)),{options:i}=Qi(Ld),s=an(()=>({[ah(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[ah(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&mx(e.default(n));return t.custom?r:Gm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),vx=gx;function _x(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function bx(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!vi(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function oh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ah=(t,e,n)=>t??e??n,xx=vm({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Qi(_u),s=an(()=>t.route||i.value),r=Qi(sh,0),o=an(()=>{let c=Ts(r);const{matched:u}=s.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=an(()=>s.value.matched[o.value]);ol(sh,an(()=>o.value+1)),ol(px,a),ol(_u,s);const l=it();return Fn(()=>[l.value,a.value,t.name],([c,u,d],[f,h,g])=>{u&&(u.instances[d]=c,h&&h!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!io(u,h)||!f)&&(u.enterCallbacks[d]||[]).forEach(b=>b(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,d=a.value,f=d&&d.components[u];if(!f)return lh(n.default,{Component:f,route:c});const h=d.props[u],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=Gm(f,At({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return lh(n.default,{Component:m,route:c})||m}}});function lh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const og=xx;function yx(t){const e=ax(t.routes,t),n=t.parseQuery||fx,i=t.stringifyQuery||ih,s=t.history,r=Eo(),o=Eo(),a=Eo(),l=D_(ss);let c=ss;Dr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=vc.bind(null,B=>""+B),d=vc.bind(null,Ub),f=vc.bind(null,Qo);function h(B,ue){let oe,me;return tg(B)?(oe=e.getRecordMatcher(B),me=ue):me=B,e.addRoute(me,oe)}function g(B){const ue=e.getRecordMatcher(B);ue&&e.removeRoute(ue)}function b(){return e.getRoutes().map(B=>B.record)}function m(B){return!!e.getRecordMatcher(B)}function p(B,ue){if(ue=At({},ue||l.value),typeof B=="string"){const z=_c(n,B,ue.path),K=e.resolve({path:z.path},ue),se=s.createHref(z.fullPath);return At(z,K,{params:f(K.params),hash:Qo(z.hash),redirectedFrom:void 0,href:se})}let oe;if(B.path!=null)oe=At({},B,{path:_c(n,B.path,ue.path).path});else{const z=At({},B.params);for(const K in z)z[K]==null&&delete z[K];oe=At({},B,{params:d(z)}),ue.params=d(ue.params)}const me=e.resolve(oe,ue),Qe=B.hash||"";me.params=u(f(me.params));const R=Fb(i,At({},B,{hash:Db(Qe),path:me.path})),v=s.createHref(R);return At({fullPath:R,hash:Qe,query:i===ih?hx(B.query):B.query||{}},me,{redirectedFrom:void 0,href:v})}function C(B){return typeof B=="string"?_c(n,B,l.value.path):At({},B)}function E(B,ue){if(c!==B)return so(8,{from:ue,to:B})}function y(B){return P(B)}function D(B){return y(At(C(B),{replace:!0}))}function L(B){const ue=B.matched[B.matched.length-1];if(ue&&ue.redirect){const{redirect:oe}=ue;let me=typeof oe=="function"?oe(B):oe;return typeof me=="string"&&(me=me.includes("?")||me.includes("#")?me=C(me):{path:me},me.params={}),At({query:B.query,hash:B.hash,params:me.path!=null?{}:B.params},me)}}function P(B,ue){const oe=c=p(B),me=l.value,Qe=B.state,R=B.force,v=B.replace===!0,z=L(oe);if(z)return P(At(C(z),{state:typeof z=="object"?At({},Qe,z.state):Qe,force:R,replace:v}),ue||oe);const K=oe;K.redirectedFrom=ue;let se;return!R&&kb(i,me,oe)&&(se=so(16,{to:K,from:me}),Le(me,me,!0,!1)),(se?Promise.resolve(se):A(K,me)).catch(q=>ki(q)?ki(q,2)?q:Me(q):Y(q,K,me)).then(q=>{if(q){if(ki(q,2))return P(At({replace:v},C(q.to),{state:typeof q.to=="object"?At({},Qe,q.to.state):Qe,force:R}),ue||K)}else q=W(K,me,!0,v,Qe);return U(K,me,q),q})}function k(B,ue){const oe=E(B,ue);return oe?Promise.reject(oe):Promise.resolve()}function S(B){const ue=Ze.values().next().value;return ue&&typeof ue.runWithContext=="function"?ue.runWithContext(B):B()}function A(B,ue){let oe;const[me,Qe,R]=wx(B,ue);oe=bc(me.reverse(),"beforeRouteLeave",B,ue);for(const z of me)z.leaveGuards.forEach(K=>{oe.push(ps(K,B,ue))});const v=k.bind(null,B,ue);return oe.push(v),ye(oe).then(()=>{oe=[];for(const z of r.list())oe.push(ps(z,B,ue));return oe.push(v),ye(oe)}).then(()=>{oe=bc(Qe,"beforeRouteUpdate",B,ue);for(const z of Qe)z.updateGuards.forEach(K=>{oe.push(ps(K,B,ue))});return oe.push(v),ye(oe)}).then(()=>{oe=[];for(const z of R)if(z.beforeEnter)if(vi(z.beforeEnter))for(const K of z.beforeEnter)oe.push(ps(K,B,ue));else oe.push(ps(z.beforeEnter,B,ue));return oe.push(v),ye(oe)}).then(()=>(B.matched.forEach(z=>z.enterCallbacks={}),oe=bc(R,"beforeRouteEnter",B,ue,S),oe.push(v),ye(oe))).then(()=>{oe=[];for(const z of o.list())oe.push(ps(z,B,ue));return oe.push(v),ye(oe)}).catch(z=>ki(z,8)?z:Promise.reject(z))}function U(B,ue,oe){a.list().forEach(me=>S(()=>me(B,ue,oe)))}function W(B,ue,oe,me,Qe){const R=E(B,ue);if(R)return R;const v=ue===ss,z=Dr?history.state:{};oe&&(me||v?s.replace(B.fullPath,At({scroll:v&&z&&z.scroll},Qe)):s.push(B.fullPath,Qe)),l.value=B,Le(B,ue,oe,v),Me()}let O;function I(){O||(O=s.listen((B,ue,oe)=>{if(!ie.listening)return;const me=p(B),Qe=L(me);if(Qe){P(At(Qe,{replace:!0,force:!0}),me).catch(Wo);return}c=me;const R=l.value;Dr&&Xb(qf(R.fullPath,oe.delta),Yl()),A(me,R).catch(v=>ki(v,12)?v:ki(v,2)?(P(At(C(v.to),{force:!0}),me).then(z=>{ki(z,20)&&!oe.delta&&oe.type===Jo.pop&&s.go(-1,!1)}).catch(Wo),Promise.reject()):(oe.delta&&s.go(-oe.delta,!1),Y(v,me,R))).then(v=>{v=v||W(me,R,!1),v&&(oe.delta&&!ki(v,8)?s.go(-oe.delta,!1):oe.type===Jo.pop&&ki(v,20)&&s.go(-1,!1)),U(me,R,v)}).catch(Wo)}))}let G=Eo(),V=Eo(),ee;function Y(B,ue,oe){Me(B);const me=V.list();return me.length?me.forEach(Qe=>Qe(B,ue,oe)):console.error(B),Promise.reject(B)}function xe(){return ee&&l.value!==ss?Promise.resolve():new Promise((B,ue)=>{G.add([B,ue])})}function Me(B){return ee||(ee=!B,I(),G.list().forEach(([ue,oe])=>B?oe(B):ue()),G.reset()),B}function Le(B,ue,oe,me){const{scrollBehavior:Qe}=t;if(!Dr||!Qe)return Promise.resolve();const R=!oe&&jb(qf(B.fullPath,0))||(me||!oe)&&history.state&&history.state.scroll||null;return ha().then(()=>Qe(B,ue,R)).then(v=>v&&$b(v)).catch(v=>Y(v,B,ue))}const Ge=B=>s.go(B);let _t;const Ze=new Set,ie={currentRoute:l,listening:!0,addRoute:h,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:b,resolve:p,options:t,push:y,replace:D,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:V.add,isReady:xe,install(B){const ue=this;B.component("RouterLink",vx),B.component("RouterView",og),B.config.globalProperties.$router=ue,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>Ts(l)}),Dr&&!_t&&l.value===ss&&(_t=!0,y(s.location).catch(Qe=>{}));const oe={};for(const Qe in ss)Object.defineProperty(oe,Qe,{get:()=>l.value[Qe],enumerable:!0});B.provide(Ld,ue),B.provide(rg,sm(oe)),B.provide(_u,l);const me=B.unmount;Ze.add(B),B.unmount=function(){Ze.delete(B),Ze.size<1&&(c=ss,O&&O(),O=null,l.value=ss,_t=!1,ee=!1),me()}}};function ye(B){return B.reduce((ue,oe)=>ue.then(()=>S(oe)),Promise.resolve())}return ie}function wx(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>io(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>io(c,l))||s.push(l))}return[n,i,s]}const ma=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},Sx={id:"app"},Mx={class:"app-header"},Ex={class:"header-content"},Tx={class:"header-actions max-md:text-[11px]"},Ax={class:"main-content"},Cx={__name:"App",setup(t){const e=it(!1),n=it(!1);function i(){n.value=!n.value}return po(()=>{localStorage.getItem("darkMode")==="true"&&(e.value=!0,document.body.classList.add("dark-mode"))}),(s,r)=>{const o=t0("RouterLink");return He(),$e("div",Sx,[_("header",Mx,[_("div",Ex,[r[6]||(r[6]=_("div",{class:"logo-section max-md:hidden"},[_("h1",{class:"app-title"},"Miyuki Beads Designer")],-1)),_("div",Tx,[nn(o,{to:"/"},{default:Io(()=>r[1]||(r[1]=[Oo("Flat Grid")])),_:1}),nn(o,{to:"/weaving-grid"},{default:Io(()=>r[2]||(r[2]=[Oo("Weaving Grid")])),_:1}),nn(o,{to:"/beadwork-pattern"},{default:Io(()=>r[3]||(r[3]=[Oo("Beadwork Pattern")])),_:1}),nn(o,{to:"/peyote-grid"},{default:Io(()=>r[4]||(r[4]=[Oo("Peyote Grid")])),_:1})]),_("button",{class:Ye(["mobile-toggle-btn md:hidden",{active:n.value}]),onClick:i},r[5]||(r[5]=[_("span",{class:"hamburger-line"},null,-1),_("span",{class:"hamburger-line"},null,-1),_("span",{class:"hamburger-line"},null,-1)]),2)])]),_("main",Ax,[nn(Ts(og),{"is-mobile-header-open":n.value,onCloseMobileHeader:r[0]||(r[0]=a=>n.value=!1)},null,8,["is-mobile-header-open"])])])}}},Rx=ma(Cx,[["__scopeId","data-v-8c6d5105"]]),Px="modulepreload",Dx=function(t){return"/miyuki-beads-designer/"+t},ch={},To=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){let o=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=o(n.map(c=>{if(c=Dx(c),c in ch)return;ch[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":Px,u||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((h,g)=>{f.addEventListener("load",h),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};/*!
* sweetalert2 v11.22.3
* Released under the MIT License.
*/function ag(t,e,n){if(typeof t=="function"?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}function Lx(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function uh(t,e){return t.get(ag(t,e))}function Ix(t,e,n){Lx(t,e),e.set(t,n)}function Ux(t,e,n){return t.set(ag(t,e),n),n}const Ox=100,Ke={},Nx=()=>{Ke.previousActiveElement instanceof HTMLElement?(Ke.previousActiveElement.focus(),Ke.previousActiveElement=null):document.body&&document.body.focus()},Fx=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,i=window.scrollY;Ke.restoreFocusTimeout=setTimeout(()=>{Nx(),e()},Ox),window.scrollTo(n,i)}),lg="swal2-",kx=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],ae=kx.reduce((t,e)=>(t[e]=lg+e,t),{}),Bx=["success","warning","info","question","error"],Tl=Bx.reduce((t,e)=>(t[e]=lg+e,t),{}),cg="SweetAlert2:",Id=t=>t.charAt(0).toUpperCase()+t.slice(1),Pn=t=>{console.warn(`${cg} ${typeof t=="object"?t.join(" "):t}`)},ur=t=>{console.error(`${cg} ${t}`)},dh=[],Hx=t=>{dh.includes(t)||(dh.push(t),Pn(t))},ug=(t,e=null)=>{Hx(`"${t}" is deprecated and will be removed in the next major release.${e?` Use "${e}" instead.`:""}`)},Kl=t=>typeof t=="function"?t():t,Ud=t=>t&&typeof t.toPromise=="function",ga=t=>Ud(t)?t.toPromise():Promise.resolve(t),Od=t=>t&&Promise.resolve(t)===t,Dn=()=>document.body.querySelector(`.${ae.container}`),va=t=>{const e=Dn();return e?e.querySelector(t):null},Zn=t=>va(`.${t}`),Et=()=>Zn(ae.popup),mo=()=>Zn(ae.icon),zx=()=>Zn(ae["icon-content"]),dg=()=>Zn(ae.title),Nd=()=>Zn(ae["html-container"]),fg=()=>Zn(ae.image),Fd=()=>Zn(ae["progress-steps"]),Zl=()=>Zn(ae["validation-message"]),Ui=()=>va(`.${ae.actions} .${ae.confirm}`),go=()=>va(`.${ae.actions} .${ae.cancel}`),dr=()=>va(`.${ae.actions} .${ae.deny}`),Vx=()=>Zn(ae["input-label"]),vo=()=>va(`.${ae.loader}`),_a=()=>Zn(ae.actions),hg=()=>Zn(ae.footer),Ql=()=>Zn(ae["timer-progress-bar"]),kd=()=>Zn(ae.close),Gx=`
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
`,Bd=()=>{const t=Et();if(!t)return[];const e=t.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),n=Array.from(e).sort((r,o)=>{const a=parseInt(r.getAttribute("tabindex")||"0"),l=parseInt(o.getAttribute("tabindex")||"0");return a>l?1:a<l?-1:0}),i=t.querySelectorAll(Gx),s=Array.from(i).filter(r=>r.getAttribute("tabindex")!=="-1");return[...new Set(n.concat(s))].filter(r=>kn(r))},Hd=()=>es(document.body,ae.shown)&&!es(document.body,ae["toast-shown"])&&!es(document.body,ae["no-backdrop"]),Jl=()=>{const t=Et();return t?es(t,ae.toast):!1},Wx=()=>{const t=Et();return t?t.hasAttribute("data-loading"):!1},Qn=(t,e)=>{if(t.textContent="",e){const i=new DOMParser().parseFromString(e,"text/html"),s=i.querySelector("head");s&&Array.from(s.childNodes).forEach(o=>{t.appendChild(o)});const r=i.querySelector("body");r&&Array.from(r.childNodes).forEach(o=>{o instanceof HTMLVideoElement||o instanceof HTMLAudioElement?t.appendChild(o.cloneNode(!0)):t.appendChild(o)})}},es=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let i=0;i<n.length;i++)if(!t.classList.contains(n[i]))return!1;return!0},$x=(t,e)=>{Array.from(t.classList).forEach(n=>{!Object.values(ae).includes(n)&&!Object.values(Tl).includes(n)&&!Object.values(e.showClass||{}).includes(n)&&t.classList.remove(n)})},Kn=(t,e,n)=>{if($x(t,e),!e.customClass)return;const i=e.customClass[n];if(i){if(typeof i!="string"&&!i.forEach){Pn(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof i}"`);return}Tt(t,i)}},ec=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${ae.popup} > .${ae[e]}`);case"checkbox":return t.querySelector(`.${ae.popup} > .${ae.checkbox} input`);case"radio":return t.querySelector(`.${ae.popup} > .${ae.radio} input:checked`)||t.querySelector(`.${ae.popup} > .${ae.radio} input:first-child`);case"range":return t.querySelector(`.${ae.popup} > .${ae.range} input`);default:return t.querySelector(`.${ae.popup} > .${ae.input}`)}},pg=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},mg=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(i=>{Array.isArray(t)?t.forEach(s=>{n?s.classList.add(i):s.classList.remove(i)}):n?t.classList.add(i):t.classList.remove(i)}))},Tt=(t,e)=>{mg(t,e,!0)},ri=(t,e)=>{mg(t,e,!1)},Ss=(t,e)=>{const n=Array.from(t.children);for(let i=0;i<n.length;i++){const s=n[i];if(s instanceof HTMLElement&&es(s,e))return s}},nr=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style.setProperty(e,typeof n=="number"?`${n}px`:n):t.style.removeProperty(e)},cn=(t,e="flex")=>{t&&(t.style.display=e)},xn=t=>{t&&(t.style.display="none")},zd=(t,e="block")=>{t&&new MutationObserver(()=>{ba(t,t.innerHTML,e)}).observe(t,{childList:!0,subtree:!0})},fh=(t,e,n,i)=>{const s=t.querySelector(e);s&&s.style.setProperty(n,i)},ba=(t,e,n="flex")=>{e?cn(t,n):xn(t)},kn=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),Xx=()=>!kn(Ui())&&!kn(dr())&&!kn(go()),bu=t=>t.scrollHeight>t.clientHeight,jx=(t,e)=>{let n=t;for(;n&&n!==e;){if(bu(n))return!0;n=n.parentElement}return!1},gg=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),i=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||i>0},Vd=(t,e=!1)=>{const n=Ql();n&&kn(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},qx=()=>{const t=Ql();if(!t)return;const e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),i=e/n*100;t.style.width=`${i}%`},Yx=()=>typeof window>"u"||typeof document>"u",Kx=`
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
`.replace(/(^|\n)\s*/g,""),Zx=()=>{const t=Dn();return t?(t.remove(),ri([document.documentElement,document.body],[ae["no-backdrop"],ae["toast-shown"],ae["has-column"]]),!0):!1},Fs=()=>{Ke.currentInstance.resetValidationMessage()},Qx=()=>{const t=Et(),e=Ss(t,ae.input),n=Ss(t,ae.file),i=t.querySelector(`.${ae.range} input`),s=t.querySelector(`.${ae.range} output`),r=Ss(t,ae.select),o=t.querySelector(`.${ae.checkbox} input`),a=Ss(t,ae.textarea);e.oninput=Fs,n.onchange=Fs,r.onchange=Fs,o.onchange=Fs,a.oninput=Fs,i.oninput=()=>{Fs(),s.value=i.value},i.onchange=()=>{Fs(),s.value=i.value}},Jx=t=>typeof t=="string"?document.querySelector(t):t,ey=t=>{const e=Et();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},ty=t=>{window.getComputedStyle(t).direction==="rtl"&&Tt(Dn(),ae.rtl)},ny=t=>{const e=Zx();if(Yx()){ur("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=ae.container,e&&Tt(n,ae["no-transition"]),Qn(n,Kx),n.dataset.swal2Theme=t.theme;const i=Jx(t.target);i.appendChild(n),t.topLayer&&(n.setAttribute("popover",""),n.showPopover()),ey(t),ty(i),Qx()},Gd=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?iy(t,e):t&&Qn(e,t)},iy=(t,e)=>{t.jquery?sy(e,t):Qn(e,t.toString())},sy=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},ry=(t,e)=>{const n=_a(),i=vo();!n||!i||(!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?xn(n):cn(n),Kn(n,e,"actions"),oy(n,i,e),Qn(i,e.loaderHtml||""),Kn(i,e,"loader"))};function oy(t,e,n){const i=Ui(),s=dr(),r=go();!i||!s||!r||(yc(i,"confirm",n),yc(s,"deny",n),yc(r,"cancel",n),ay(i,s,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,i),t.insertBefore(s,i)):(t.insertBefore(r,e),t.insertBefore(s,e),t.insertBefore(i,e))))}function ay(t,e,n,i){if(!i.buttonsStyling){ri([t,e,n],ae.styled);return}Tt([t,e,n],ae.styled),i.confirmButtonColor&&t.style.setProperty("--swal2-confirm-button-background-color",i.confirmButtonColor),i.denyButtonColor&&e.style.setProperty("--swal2-deny-button-background-color",i.denyButtonColor),i.cancelButtonColor&&n.style.setProperty("--swal2-cancel-button-background-color",i.cancelButtonColor),xc(t),xc(e),xc(n)}function xc(t){const e=window.getComputedStyle(t);if(e.getPropertyValue("--swal2-action-button-focus-box-shadow"))return;const n=e.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/,"rgba($1, $2, $3, 0.5)");t.style.setProperty("--swal2-action-button-focus-box-shadow",e.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/,` ${n}`))}function yc(t,e,n){const i=Id(e);ba(t,n[`show${i}Button`],"inline-block"),Qn(t,n[`${e}ButtonText`]||""),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]||""),t.className=ae[e],Kn(t,n,`${e}Button`)}const ly=(t,e)=>{const n=kd();n&&(Qn(n,e.closeButtonHtml||""),Kn(n,e,"closeButton"),ba(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel||""))},cy=(t,e)=>{const n=Dn();n&&(uy(n,e.backdrop),dy(n,e.position),fy(n,e.grow),Kn(n,e,"container"))};function uy(t,e){typeof e=="string"?t.style.background=e:e||Tt([document.documentElement,document.body],ae["no-backdrop"])}function dy(t,e){e&&(e in ae?Tt(t,ae[e]):(Pn('The "position" parameter is not valid, defaulting to "center"'),Tt(t,ae.center)))}function fy(t,e){e&&Tt(t,ae[`grow-${e}`])}var kt={innerParams:new WeakMap,domCache:new WeakMap};const hy=["input","file","range","select","radio","checkbox","textarea"],py=(t,e)=>{const n=Et();if(!n)return;const i=kt.innerParams.get(t),s=!i||e.input!==i.input;hy.forEach(r=>{const o=Ss(n,ae[r]);o&&(vy(r,e.inputAttributes),o.className=ae[r],s&&xn(o))}),e.input&&(s&&my(e),_y(e))},my=t=>{if(!t.input)return;if(!Yt[t.input]){ur(`Unexpected type of input! Expected ${Object.keys(Yt).join(" | ")}, got "${t.input}"`);return}const e=vg(t.input);if(!e)return;const n=Yt[t.input](e,t);cn(e),t.inputAutoFocus&&setTimeout(()=>{pg(n)})},gy=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["id","type","value","style"].includes(n)||t.removeAttribute(n)}},vy=(t,e)=>{const n=Et();if(!n)return;const i=ec(n,t);if(i){gy(i);for(const s in e)i.setAttribute(s,e[s])}},_y=t=>{if(!t.input)return;const e=vg(t.input);e&&Kn(e,t,"input")},Wd=(t,e)=>{!t.placeholder&&e.inputPlaceholder&&(t.placeholder=e.inputPlaceholder)},xa=(t,e,n)=>{if(n.inputLabel){const i=document.createElement("label"),s=ae["input-label"];i.setAttribute("for",t.id),i.className=s,typeof n.customClass=="object"&&Tt(i,n.customClass.inputLabel),i.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",i)}},vg=t=>{const e=Et();if(e)return Ss(e,ae[t]||ae.input)},Al=(t,e)=>{["string","number"].includes(typeof e)?t.value=`${e}`:Od(e)||Pn(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e}"`)},Yt={};Yt.text=Yt.email=Yt.password=Yt.number=Yt.tel=Yt.url=Yt.search=Yt.date=Yt["datetime-local"]=Yt.time=Yt.week=Yt.month=(t,e)=>(Al(t,e.inputValue),xa(t,t,e),Wd(t,e),t.type=e.input,t);Yt.file=(t,e)=>(xa(t,t,e),Wd(t,e),t);Yt.range=(t,e)=>{const n=t.querySelector("input"),i=t.querySelector("output");return Al(n,e.inputValue),n.type=e.input,Al(i,e.inputValue),xa(n,t,e),t};Yt.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");Qn(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return xa(t,t,e),t};Yt.radio=t=>(t.textContent="",t);Yt.checkbox=(t,e)=>{const n=ec(Et(),"checkbox");n.value="1",n.checked=!!e.inputValue;const i=t.querySelector("span");return Qn(i,e.inputPlaceholder||e.inputLabel),n};Yt.textarea=(t,e)=>{Al(t,e.inputValue),Wd(t,e),xa(t,t,e);const n=i=>parseInt(window.getComputedStyle(i).marginLeft)+parseInt(window.getComputedStyle(i).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const i=parseInt(window.getComputedStyle(Et()).width),s=()=>{if(!document.body.contains(t))return;const r=t.offsetWidth+n(t);r>i?Et().style.width=`${r}px`:nr(Et(),"width",e.width)};new MutationObserver(s).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const by=(t,e)=>{const n=Nd();n&&(zd(n),Kn(n,e,"htmlContainer"),e.html?(Gd(e.html,n),cn(n,"block")):e.text?(n.textContent=e.text,cn(n,"block")):xn(n),py(t,e))},xy=(t,e)=>{const n=hg();n&&(zd(n),ba(n,e.footer,"block"),e.footer&&Gd(e.footer,n),Kn(n,e,"footer"))},yy=(t,e)=>{const n=kt.innerParams.get(t),i=mo();if(!i)return;if(n&&e.icon===n.icon){ph(i,e),hh(i,e);return}if(!e.icon&&!e.iconHtml){xn(i);return}if(e.icon&&Object.keys(Tl).indexOf(e.icon)===-1){ur(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),xn(i);return}cn(i),ph(i,e),hh(i,e),Tt(i,e.showClass&&e.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",_g)},hh=(t,e)=>{for(const[n,i]of Object.entries(Tl))e.icon!==n&&ri(t,i);Tt(t,e.icon&&Tl[e.icon]),My(t,e),_g(),Kn(t,e,"icon")},_g=()=>{const t=Et();if(!t)return;const e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let i=0;i<n.length;i++)n[i].style.backgroundColor=e},wy=t=>`
  ${t.animation?'<div class="swal2-success-circular-line-left"></div>':""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${t.animation?'<div class="swal2-success-fix"></div>':""}
  ${t.animation?'<div class="swal2-success-circular-line-right"></div>':""}
`,Sy=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,ph=(t,e)=>{if(!e.icon&&!e.iconHtml)return;let n=t.innerHTML,i="";e.iconHtml?i=mh(e.iconHtml):e.icon==="success"?(i=wy(e),n=n.replace(/ style=".*?"/g,"")):e.icon==="error"?i=Sy:e.icon&&(i=mh({question:"?",warning:"!",info:"i"}[e.icon])),n.trim()!==i.trim()&&Qn(t,i)},My=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])fh(t,n,"background-color",e.iconColor);fh(t,".swal2-success-ring","border-color",e.iconColor)}},mh=t=>`<div class="${ae["icon-content"]}">${t}</div>`,Ey=(t,e)=>{const n=fg();if(n){if(!e.imageUrl){xn(n);return}cn(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt||""),nr(n,"width",e.imageWidth),nr(n,"height",e.imageHeight),n.className=ae.image,Kn(n,e,"image")}};let $d=!1,bg=0,xg=0,yg=0,wg=0;const Ty=t=>{t.addEventListener("mousedown",Cl),document.body.addEventListener("mousemove",Rl),t.addEventListener("mouseup",Pl),t.addEventListener("touchstart",Cl),document.body.addEventListener("touchmove",Rl),t.addEventListener("touchend",Pl)},Ay=t=>{t.removeEventListener("mousedown",Cl),document.body.removeEventListener("mousemove",Rl),t.removeEventListener("mouseup",Pl),t.removeEventListener("touchstart",Cl),document.body.removeEventListener("touchmove",Rl),t.removeEventListener("touchend",Pl)},Cl=t=>{const e=Et();if(t.target===e||mo().contains(t.target)){$d=!0;const n=Sg(t);bg=n.clientX,xg=n.clientY,yg=parseInt(e.style.insetInlineStart)||0,wg=parseInt(e.style.insetBlockStart)||0,Tt(e,"swal2-dragging")}},Rl=t=>{const e=Et();if($d){let{clientX:n,clientY:i}=Sg(t);e.style.insetInlineStart=`${yg+(n-bg)}px`,e.style.insetBlockStart=`${wg+(i-xg)}px`}},Pl=()=>{const t=Et();$d=!1,ri(t,"swal2-dragging")},Sg=t=>{let e=0,n=0;return t.type.startsWith("mouse")?(e=t.clientX,n=t.clientY):t.type.startsWith("touch")&&(e=t.touches[0].clientX,n=t.touches[0].clientY),{clientX:e,clientY:n}},Cy=(t,e)=>{const n=Dn(),i=Et();if(!(!n||!i)){if(e.toast){nr(n,"width",e.width),i.style.width="100%";const s=vo();s&&i.insertBefore(s,mo())}else nr(i,"width",e.width);nr(i,"padding",e.padding),e.color&&(i.style.color=e.color),e.background&&(i.style.background=e.background),xn(Zl()),Ry(i,e),e.draggable&&!e.toast?(Tt(i,ae.draggable),Ty(i)):(ri(i,ae.draggable),Ay(i))}},Ry=(t,e)=>{const n=e.showClass||{};t.className=`${ae.popup} ${kn(t)?n.popup:""}`,e.toast?(Tt([document.documentElement,document.body],ae["toast-shown"]),Tt(t,ae.toast)):Tt(t,ae.modal),Kn(t,e,"popup"),typeof e.customClass=="string"&&Tt(t,e.customClass),e.icon&&Tt(t,ae[`icon-${e.icon}`])},Py=(t,e)=>{const n=Fd();if(!n)return;const{progressSteps:i,currentProgressStep:s}=e;if(!i||i.length===0||s===void 0){xn(n);return}cn(n),n.textContent="",s>=i.length&&Pn("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),i.forEach((r,o)=>{const a=Dy(r);if(n.appendChild(a),o===s&&Tt(a,ae["active-progress-step"]),o!==i.length-1){const l=Ly(e);n.appendChild(l)}})},Dy=t=>{const e=document.createElement("li");return Tt(e,ae["progress-step"]),Qn(e,t),e},Ly=t=>{const e=document.createElement("li");return Tt(e,ae["progress-step-line"]),t.progressStepsDistance&&nr(e,"width",t.progressStepsDistance),e},Iy=(t,e)=>{const n=dg();n&&(zd(n),ba(n,e.title||e.titleText,"block"),e.title&&Gd(e.title,n),e.titleText&&(n.innerText=e.titleText),Kn(n,e,"title"))},Mg=(t,e)=>{Cy(t,e),cy(t,e),Py(t,e),yy(t,e),Ey(t,e),Iy(t,e),ly(t,e),by(t,e),ry(t,e),xy(t,e);const n=Et();typeof e.didRender=="function"&&n&&e.didRender(n),Ke.eventEmitter.emit("didRender",n)},Uy=()=>kn(Et()),Eg=()=>{var t;return(t=Ui())===null||t===void 0?void 0:t.click()},Oy=()=>{var t;return(t=dr())===null||t===void 0?void 0:t.click()},Ny=()=>{var t;return(t=go())===null||t===void 0?void 0:t.click()},_o=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Tg=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},Fy=(t,e,n)=>{Tg(t),e.toast||(t.keydownHandler=i=>By(e,i,n),t.keydownTarget=e.keydownListenerCapture?window:Et(),t.keydownListenerCapture=e.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)},xu=(t,e)=>{var n;const i=Bd();if(i.length){t=t+e,t===-2&&(t=i.length-1),t===i.length?t=0:t===-1&&(t=i.length-1),i[t].focus();return}(n=Et())===null||n===void 0||n.focus()},Ag=["ArrowRight","ArrowDown"],ky=["ArrowLeft","ArrowUp"],By=(t,e,n)=>{t&&(e.isComposing||e.keyCode===229||(t.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?Hy(e,t):e.key==="Tab"?zy(e):[...Ag,...ky].includes(e.key)?Vy(e.key):e.key==="Escape"&&Gy(e,t,n)))},Hy=(t,e)=>{if(!Kl(e.allowEnterKey))return;const n=ec(Et(),e.input);if(t.target&&n&&t.target instanceof HTMLElement&&t.target.outerHTML===n.outerHTML){if(["textarea","file"].includes(e.input))return;Eg(),t.preventDefault()}},zy=t=>{const e=t.target,n=Bd();let i=-1;for(let s=0;s<n.length;s++)if(e===n[s]){i=s;break}t.shiftKey?xu(i,-1):xu(i,1),t.stopPropagation(),t.preventDefault()},Vy=t=>{const e=_a(),n=Ui(),i=dr(),s=go();if(!e||!n||!i||!s)return;const r=[n,i,s];if(document.activeElement instanceof HTMLElement&&!r.includes(document.activeElement))return;const o=Ag.includes(t)?"nextElementSibling":"previousElementSibling";let a=document.activeElement;if(a){for(let l=0;l<e.children.length;l++){if(a=a[o],!a)return;if(a instanceof HTMLButtonElement&&kn(a))break}a instanceof HTMLButtonElement&&a.focus()}},Gy=(t,e,n)=>{t.preventDefault(),Kl(e.allowEscapeKey)&&n(_o.esc)};var ro={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const Wy=()=>{const t=Dn();Array.from(document.body.children).forEach(n=>{n.contains(t)||(n.hasAttribute("aria-hidden")&&n.setAttribute("data-previous-aria-hidden",n.getAttribute("aria-hidden")||""),n.setAttribute("aria-hidden","true"))})},Cg=()=>{Array.from(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||""),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},Rg=typeof window<"u"&&!!window.GestureEvent,$y=()=>{if(Rg&&!es(document.body,ae.iosfix)){const t=document.body.scrollTop;document.body.style.top=`${t*-1}px`,Tt(document.body,ae.iosfix),Xy()}},Xy=()=>{const t=Dn();if(!t)return;let e;t.ontouchstart=n=>{e=jy(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},jy=t=>{const e=t.target,n=Dn(),i=Nd();return!n||!i||qy(t)||Yy(t)?!1:e===n||!bu(n)&&e instanceof HTMLElement&&!jx(e,i)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(bu(i)&&i.contains(e))},qy=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",Yy=t=>t.touches&&t.touches.length>1,Ky=()=>{if(es(document.body,ae.iosfix)){const t=parseInt(document.body.style.top,10);ri(document.body,ae.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},Zy=()=>{const t=document.createElement("div");t.className=ae["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e};let Hr=null;const Qy=t=>{Hr===null&&(document.body.scrollHeight>window.innerHeight||t==="scroll")&&(Hr=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Hr+Zy()}px`)},Jy=()=>{Hr!==null&&(document.body.style.paddingRight=`${Hr}px`,Hr=null)};function Pg(t,e,n,i){Jl()?gh(t,i):(Fx(n).then(()=>gh(t,i)),Tg(Ke)),Rg?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),Hd()&&(Jy(),Ky(),Cg()),ew()}function ew(){ri([document.documentElement,document.body],[ae.shown,ae["height-auto"],ae["no-backdrop"],ae["toast-shown"]])}function Ms(t){t=nw(t);const e=ro.swalPromiseResolve.get(this),n=tw(this);this.isAwaitingPromise?t.isDismissed||(ya(this),e(t)):n&&e(t)}const tw=t=>{const e=Et();if(!e)return!1;const n=kt.innerParams.get(t);if(!n||es(e,n.hideClass.popup))return!1;ri(e,n.showClass.popup),Tt(e,n.hideClass.popup);const i=Dn();return ri(i,n.showClass.backdrop),Tt(i,n.hideClass.backdrop),iw(t,e,n),!0};function Dg(t){const e=ro.swalPromiseReject.get(this);ya(this),e&&e(t)}const ya=t=>{t.isAwaitingPromise&&(delete t.isAwaitingPromise,kt.innerParams.get(t)||t._destroy())},nw=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),iw=(t,e,n)=>{var i;const s=Dn(),r=gg(e);typeof n.willClose=="function"&&n.willClose(e),(i=Ke.eventEmitter)===null||i===void 0||i.emit("willClose",e),r?sw(t,e,s,n.returnFocus,n.didClose):Pg(t,s,n.returnFocus,n.didClose)},sw=(t,e,n,i,s)=>{Ke.swalCloseEventFinishedCallback=Pg.bind(null,t,n,i,s);const r=function(o){if(o.target===e){var a;(a=Ke.swalCloseEventFinishedCallback)===null||a===void 0||a.call(Ke),delete Ke.swalCloseEventFinishedCallback,e.removeEventListener("animationend",r),e.removeEventListener("transitionend",r)}};e.addEventListener("animationend",r),e.addEventListener("transitionend",r)},gh=(t,e)=>{setTimeout(()=>{var n;typeof e=="function"&&e.bind(t.params)(),(n=Ke.eventEmitter)===null||n===void 0||n.emit("didClose"),t._destroy&&t._destroy()})},oo=t=>{let e=Et();if(e||new Hn,e=Et(),!e)return;const n=vo();Jl()?xn(mo()):rw(e,t),cn(n),e.setAttribute("data-loading","true"),e.setAttribute("aria-busy","true"),e.focus()},rw=(t,e)=>{const n=_a(),i=vo();!n||!i||(!e&&kn(Ui())&&(e=Ui()),cn(n),e&&(xn(e),i.setAttribute("data-button-to-replace",e.className),n.insertBefore(i,e)),Tt([t,n],ae.loading))},ow=(t,e)=>{e.input==="select"||e.input==="radio"?dw(t,e):["text","email","number","tel","textarea"].some(n=>n===e.input)&&(Ud(e.inputValue)||Od(e.inputValue))&&(oo(Ui()),fw(t,e))},aw=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return lw(n);case"radio":return cw(n);case"file":return uw(n);default:return e.inputAutoTrim?n.value.trim():n.value}},lw=t=>t.checked?1:0,cw=t=>t.checked?t.value:null,uw=t=>t.files&&t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,dw=(t,e)=>{const n=Et();if(!n)return;const i=s=>{e.input==="select"?hw(n,Dl(s),e):e.input==="radio"&&pw(n,Dl(s),e)};Ud(e.inputOptions)||Od(e.inputOptions)?(oo(Ui()),ga(e.inputOptions).then(s=>{t.hideLoading(),i(s)})):typeof e.inputOptions=="object"?i(e.inputOptions):ur(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},fw=(t,e)=>{const n=t.getInput();n&&(xn(n),ga(e.inputValue).then(i=>{n.value=e.input==="number"?`${parseFloat(i)||0}`:`${i}`,cn(n),n.focus(),t.hideLoading()}).catch(i=>{ur(`Error in inputValue promise: ${i}`),n.value="",cn(n),n.focus(),t.hideLoading()}))};function hw(t,e,n){const i=Ss(t,ae.select);if(!i)return;const s=(r,o,a)=>{const l=document.createElement("option");l.value=a,Qn(l,o),l.selected=Lg(a,n.inputValue),r.appendChild(l)};e.forEach(r=>{const o=r[0],a=r[1];if(Array.isArray(a)){const l=document.createElement("optgroup");l.label=o,l.disabled=!1,i.appendChild(l),a.forEach(c=>s(l,c[1],c[0]))}else s(i,a,o)}),i.focus()}function pw(t,e,n){const i=Ss(t,ae.radio);if(!i)return;e.forEach(r=>{const o=r[0],a=r[1],l=document.createElement("input"),c=document.createElement("label");l.type="radio",l.name=ae.radio,l.value=o,Lg(o,n.inputValue)&&(l.checked=!0);const u=document.createElement("span");Qn(u,a),u.className=ae.label,c.appendChild(l),c.appendChild(u),i.appendChild(c)});const s=i.querySelectorAll("input");s.length&&s[0].focus()}const Dl=t=>{const e=[];return t instanceof Map?t.forEach((n,i)=>{let s=n;typeof s=="object"&&(s=Dl(s)),e.push([i,s])}):Object.keys(t).forEach(n=>{let i=t[n];typeof i=="object"&&(i=Dl(i)),e.push([n,i])}),e},Lg=(t,e)=>!!e&&e.toString()===t.toString(),mw=t=>{const e=kt.innerParams.get(t);t.disableButtons(),e.input?Ig(t,"confirm"):jd(t,!0)},gw=t=>{const e=kt.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?Ig(t,"deny"):Xd(t,!1)},vw=(t,e)=>{t.disableButtons(),e(_o.cancel)},Ig=(t,e)=>{const n=kt.innerParams.get(t);if(!n.input){ur(`The "input" parameter is needed to be set when using returnInputValueOn${Id(e)}`);return}const i=t.getInput(),s=aw(t,n);n.inputValidator?_w(t,s,e):i&&!i.checkValidity()?(t.enableButtons(),t.showValidationMessage(n.validationMessage||i.validationMessage)):e==="deny"?Xd(t,s):jd(t,s)},_w=(t,e,n)=>{const i=kt.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>ga(i.inputValidator(e,i.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):n==="deny"?Xd(t,e):jd(t,e)})},Xd=(t,e)=>{const n=kt.innerParams.get(t||void 0);n.showLoaderOnDeny&&oo(dr()),n.preDeny?(t.isAwaitingPromise=!0,Promise.resolve().then(()=>ga(n.preDeny(e,n.validationMessage))).then(s=>{s===!1?(t.hideLoading(),ya(t)):t.close({isDenied:!0,value:typeof s>"u"?e:s})}).catch(s=>Ug(t||void 0,s))):t.close({isDenied:!0,value:e})},vh=(t,e)=>{t.close({isConfirmed:!0,value:e})},Ug=(t,e)=>{t.rejectPromise(e)},jd=(t,e)=>{const n=kt.innerParams.get(t||void 0);n.showLoaderOnConfirm&&oo(),n.preConfirm?(t.resetValidationMessage(),t.isAwaitingPromise=!0,Promise.resolve().then(()=>ga(n.preConfirm(e,n.validationMessage))).then(s=>{kn(Zl())||s===!1?(t.hideLoading(),ya(t)):vh(t,typeof s>"u"?e:s)}).catch(s=>Ug(t||void 0,s))):vh(t,e)};function Ll(){const t=kt.innerParams.get(this);if(!t)return;const e=kt.domCache.get(this);xn(e.loader),Jl()?t.icon&&cn(mo()):bw(e),ri([e.popup,e.actions],ae.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const bw=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?cn(e[0],"inline-block"):Xx()&&xn(t.actions)};function Og(){const t=kt.innerParams.get(this),e=kt.domCache.get(this);return e?ec(e.popup,t.input):null}function Ng(t,e,n){const i=kt.domCache.get(t);e.forEach(s=>{i[s].disabled=n})}function Fg(t,e){const n=Et();if(!(!n||!t))if(t.type==="radio"){const i=n.querySelectorAll(`[name="${ae.radio}"]`);for(let s=0;s<i.length;s++)i[s].disabled=e}else t.disabled=e}function kg(){Ng(this,["confirmButton","denyButton","cancelButton"],!1)}function Bg(){Ng(this,["confirmButton","denyButton","cancelButton"],!0)}function Hg(){Fg(this.getInput(),!1)}function zg(){Fg(this.getInput(),!0)}function Vg(t){const e=kt.domCache.get(this),n=kt.innerParams.get(this);Qn(e.validationMessage,t),e.validationMessage.className=ae["validation-message"],n.customClass&&n.customClass.validationMessage&&Tt(e.validationMessage,n.customClass.validationMessage),cn(e.validationMessage);const i=this.getInput();i&&(i.setAttribute("aria-invalid","true"),i.setAttribute("aria-describedby",ae["validation-message"]),pg(i),Tt(i,ae.inputerror))}function Gg(){const t=kt.domCache.get(this);t.validationMessage&&xn(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),ri(e,ae.inputerror))}const zr={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0,topLayer:!1},xw=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],yw={allowEnterKey:void 0},ww=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Wg=t=>Object.prototype.hasOwnProperty.call(zr,t),$g=t=>xw.indexOf(t)!==-1,Xg=t=>yw[t],Sw=t=>{Wg(t)||Pn(`Unknown parameter "${t}"`)},Mw=t=>{ww.includes(t)&&Pn(`The parameter "${t}" is incompatible with toasts`)},Ew=t=>{const e=Xg(t);e&&ug(t,e)},jg=t=>{t.backdrop===!1&&t.allowOutsideClick&&Pn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),t.theme&&!["light","dark","auto","minimal","borderless","embed-iframe","bulma","bulma-light","bulma-dark"].includes(t.theme)&&Pn(`Invalid theme "${t.theme}"`);for(const e in t)Sw(e),t.toast&&Mw(e),Ew(e)};function qg(t){const e=Dn(),n=Et(),i=kt.innerParams.get(this);if(!n||es(n,i.hideClass.popup)){Pn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const s=Tw(t),r=Object.assign({},i,s);jg(r),e.dataset.swal2Theme=r.theme,Mg(this,r),kt.innerParams.set(this,r),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const Tw=t=>{const e={};return Object.keys(t).forEach(n=>{$g(n)?e[n]=t[n]:Pn(`Invalid parameter to update: ${n}`)}),e};function Yg(){const t=kt.domCache.get(this),e=kt.innerParams.get(this);if(!e){Kg(this);return}t.popup&&Ke.swalCloseEventFinishedCallback&&(Ke.swalCloseEventFinishedCallback(),delete Ke.swalCloseEventFinishedCallback),typeof e.didDestroy=="function"&&e.didDestroy(),Ke.eventEmitter.emit("didDestroy"),Aw(this)}const Aw=t=>{Kg(t),delete t.params,delete Ke.keydownHandler,delete Ke.keydownTarget,delete Ke.currentInstance},Kg=t=>{t.isAwaitingPromise?(wc(kt,t),t.isAwaitingPromise=!0):(wc(ro,t),wc(kt,t),delete t.isAwaitingPromise,delete t.disableButtons,delete t.enableButtons,delete t.getInput,delete t.disableInput,delete t.enableInput,delete t.hideLoading,delete t.disableLoading,delete t.showValidationMessage,delete t.resetValidationMessage,delete t.close,delete t.closePopup,delete t.closeModal,delete t.closeToast,delete t.rejectPromise,delete t.update,delete t._destroy)},wc=(t,e)=>{for(const n in t)t[n].delete(e)};var Cw=Object.freeze({__proto__:null,_destroy:Yg,close:Ms,closeModal:Ms,closePopup:Ms,closeToast:Ms,disableButtons:Bg,disableInput:zg,disableLoading:Ll,enableButtons:kg,enableInput:Hg,getInput:Og,handleAwaitingPromise:ya,hideLoading:Ll,rejectPromise:Dg,resetValidationMessage:Gg,showValidationMessage:Vg,update:qg});const Rw=(t,e,n)=>{t.toast?Pw(t,e,n):(Lw(e),Iw(e),Uw(t,e,n))},Pw=(t,e,n)=>{e.popup.onclick=()=>{t&&(Dw(t)||t.timer||t.input)||n(_o.close)}},Dw=t=>!!(t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton);let Il=!1;const Lw=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=()=>{},e.target===t.container&&(Il=!0)}}},Iw=t=>{t.container.onmousedown=e=>{e.target===t.container&&e.preventDefault(),t.popup.onmouseup=function(n){t.popup.onmouseup=()=>{},(n.target===t.popup||n.target instanceof HTMLElement&&t.popup.contains(n.target))&&(Il=!0)}}},Uw=(t,e,n)=>{e.container.onclick=i=>{if(Il){Il=!1;return}i.target===e.container&&Kl(t.allowOutsideClick)&&n(_o.backdrop)}},Ow=t=>typeof t=="object"&&t.jquery,_h=t=>t instanceof Element||Ow(t),Nw=t=>{const e={};return typeof t[0]=="object"&&!_h(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,i)=>{const s=t[i];typeof s=="string"||_h(s)?e[n]=s:s!==void 0&&ur(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof s}`)}),e};function Fw(...t){return new this(...t)}function kw(t){class e extends this{_main(i,s){return super._main(i,Object.assign({},t,s))}}return e}const Bw=()=>Ke.timeout&&Ke.timeout.getTimerLeft(),Zg=()=>{if(Ke.timeout)return qx(),Ke.timeout.stop()},Qg=()=>{if(Ke.timeout){const t=Ke.timeout.start();return Vd(t),t}},Hw=()=>{const t=Ke.timeout;return t&&(t.running?Zg():Qg())},zw=t=>{if(Ke.timeout){const e=Ke.timeout.increase(t);return Vd(e,!0),e}},Vw=()=>!!(Ke.timeout&&Ke.timeout.isRunning());let bh=!1;const yu={};function Gw(t="data-swal-template"){yu[t]=this,bh||(document.body.addEventListener("click",Ww),bh=!0)}const Ww=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in yu){const i=e.getAttribute(n);if(i){yu[n].fire({template:i});return}}};class $w{constructor(){this.events={}}_getHandlersByEventName(e){return typeof this.events[e]>"u"&&(this.events[e]=[]),this.events[e]}on(e,n){const i=this._getHandlersByEventName(e);i.includes(n)||i.push(n)}once(e,n){const i=(...s)=>{this.removeListener(e,i),n.apply(this,s)};this.on(e,i)}emit(e,...n){this._getHandlersByEventName(e).forEach(i=>{try{i.apply(this,n)}catch(s){console.error(s)}})}removeListener(e,n){const i=this._getHandlersByEventName(e),s=i.indexOf(n);s>-1&&i.splice(s,1)}removeAllListeners(e){this.events[e]!==void 0&&(this.events[e].length=0)}reset(){this.events={}}}Ke.eventEmitter=new $w;const Xw=(t,e)=>{Ke.eventEmitter.on(t,e)},jw=(t,e)=>{Ke.eventEmitter.once(t,e)},qw=(t,e)=>{if(!t){Ke.eventEmitter.reset();return}e?Ke.eventEmitter.removeListener(t,e):Ke.eventEmitter.removeAllListeners(t)};var Yw=Object.freeze({__proto__:null,argsToParams:Nw,bindClickHandler:Gw,clickCancel:Ny,clickConfirm:Eg,clickDeny:Oy,enableLoading:oo,fire:Fw,getActions:_a,getCancelButton:go,getCloseButton:kd,getConfirmButton:Ui,getContainer:Dn,getDenyButton:dr,getFocusableElements:Bd,getFooter:hg,getHtmlContainer:Nd,getIcon:mo,getIconContent:zx,getImage:fg,getInputLabel:Vx,getLoader:vo,getPopup:Et,getProgressSteps:Fd,getTimerLeft:Bw,getTimerProgressBar:Ql,getTitle:dg,getValidationMessage:Zl,increaseTimer:zw,isDeprecatedParameter:Xg,isLoading:Wx,isTimerRunning:Vw,isUpdatableParameter:$g,isValidParameter:Wg,isVisible:Uy,mixin:kw,off:qw,on:Xw,once:jw,resumeTimer:Qg,showLoading:oo,stopTimer:Zg,toggleTimer:Hw});class Kw{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Jg=["swal-title","swal-html","swal-footer"],Zw=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return rS(n),Object.assign(Qw(n),Jw(n),eS(n),tS(n),nS(n),iS(n),sS(n,Jg))},Qw=t=>{const e={};return Array.from(t.querySelectorAll("swal-param")).forEach(i=>{rr(i,["name","value"]);const s=i.getAttribute("name"),r=i.getAttribute("value");!s||!r||(typeof zr[s]=="boolean"?e[s]=r!=="false":typeof zr[s]=="object"?e[s]=JSON.parse(r):e[s]=r)}),e},Jw=t=>{const e={};return Array.from(t.querySelectorAll("swal-function-param")).forEach(i=>{const s=i.getAttribute("name"),r=i.getAttribute("value");!s||!r||(e[s]=new Function(`return ${r}`)())}),e},eS=t=>{const e={};return Array.from(t.querySelectorAll("swal-button")).forEach(i=>{rr(i,["type","color","aria-label"]);const s=i.getAttribute("type");!s||!["confirm","cancel","deny"].includes(s)||(e[`${s}ButtonText`]=i.innerHTML,e[`show${Id(s)}Button`]=!0,i.hasAttribute("color")&&(e[`${s}ButtonColor`]=i.getAttribute("color")),i.hasAttribute("aria-label")&&(e[`${s}ButtonAriaLabel`]=i.getAttribute("aria-label")))}),e},tS=t=>{const e={},n=t.querySelector("swal-image");return n&&(rr(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")||void 0),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")||void 0),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")||void 0),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt")||void 0)),e},nS=t=>{const e={},n=t.querySelector("swal-icon");return n&&(rr(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},iS=t=>{const e={},n=t.querySelector("swal-input");n&&(rr(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const i=Array.from(t.querySelectorAll("swal-input-option"));return i.length&&(e.inputOptions={},i.forEach(s=>{rr(s,["value"]);const r=s.getAttribute("value");if(!r)return;const o=s.innerHTML;e.inputOptions[r]=o})),e},sS=(t,e)=>{const n={};for(const i in e){const s=e[i],r=t.querySelector(s);r&&(rr(r,[]),n[s.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},rS=t=>{const e=Jg.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(t.children).forEach(n=>{const i=n.tagName.toLowerCase();e.includes(i)||Pn(`Unrecognized element <${i}>`)})},rr=(t,e)=>{Array.from(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&Pn([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},ev=10,oS=t=>{const e=Dn(),n=Et();typeof t.willOpen=="function"&&t.willOpen(n),Ke.eventEmitter.emit("willOpen",n);const s=window.getComputedStyle(document.body).overflowY;cS(e,n,t),setTimeout(()=>{aS(e,n)},ev),Hd()&&(lS(e,t.scrollbarPadding,s),Wy()),!Jl()&&!Ke.previousActiveElement&&(Ke.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),Ke.eventEmitter.emit("didOpen",n),ri(e,ae["no-transition"])},Ul=t=>{const e=Et();if(t.target!==e)return;const n=Dn();e.removeEventListener("animationend",Ul),e.removeEventListener("transitionend",Ul),n.style.overflowY="auto"},aS=(t,e)=>{gg(e)?(t.style.overflowY="hidden",e.addEventListener("animationend",Ul),e.addEventListener("transitionend",Ul)):t.style.overflowY="auto"},lS=(t,e,n)=>{$y(),e&&n!=="hidden"&&Qy(n),setTimeout(()=>{t.scrollTop=0})},cS=(t,e,n)=>{Tt(t,n.showClass.backdrop),n.animation?(e.style.setProperty("opacity","0","important"),cn(e,"grid"),setTimeout(()=>{Tt(e,n.showClass.popup),e.style.removeProperty("opacity")},ev)):cn(e,"grid"),Tt([document.documentElement,document.body],ae.shown),n.heightAuto&&n.backdrop&&!n.toast&&Tt([document.documentElement,document.body],ae["height-auto"])};var xh={email:(t,e)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function uS(t){t.inputValidator||(t.input==="email"&&(t.inputValidator=xh.email),t.input==="url"&&(t.inputValidator=xh.url))}function dS(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(Pn('Target parameter is not valid, defaulting to "body"'),t.target="body")}function fS(t){uS(t),t.showLoaderOnConfirm&&!t.preConfirm&&Pn(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),dS(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),ny(t)}let yi;var Ia=new WeakMap;class Qt{constructor(...e){if(Ix(this,Ia,void 0),typeof window>"u")return;yi=this;const n=Object.freeze(this.constructor.argsToParams(e));this.params=n,this.isAwaitingPromise=!1,Ux(Ia,this,this._main(yi.params))}_main(e,n={}){if(jg(Object.assign({},n,e)),Ke.currentInstance){const r=ro.swalPromiseResolve.get(Ke.currentInstance),{isAwaitingPromise:o}=Ke.currentInstance;Ke.currentInstance._destroy(),o||r({isDismissed:!0}),Hd()&&Cg()}Ke.currentInstance=yi;const i=pS(e,n);fS(i),Object.freeze(i),Ke.timeout&&(Ke.timeout.stop(),delete Ke.timeout),clearTimeout(Ke.restoreFocusTimeout);const s=mS(yi);return Mg(yi,i),kt.innerParams.set(yi,i),hS(yi,s,i)}then(e){return uh(Ia,this).then(e)}finally(e){return uh(Ia,this).finally(e)}}const hS=(t,e,n)=>new Promise((i,s)=>{const r=o=>{t.close({isDismissed:!0,dismiss:o})};ro.swalPromiseResolve.set(t,i),ro.swalPromiseReject.set(t,s),e.confirmButton.onclick=()=>{mw(t)},e.denyButton.onclick=()=>{gw(t)},e.cancelButton.onclick=()=>{vw(t,r)},e.closeButton.onclick=()=>{r(_o.close)},Rw(n,e,r),Fy(Ke,n,r),ow(t,n),oS(n),gS(Ke,n,r),vS(e,n),setTimeout(()=>{e.container.scrollTop=0})}),pS=(t,e)=>{const n=Zw(t),i=Object.assign({},zr,e,n,t);return i.showClass=Object.assign({},zr.showClass,i.showClass),i.hideClass=Object.assign({},zr.hideClass,i.hideClass),i.animation===!1&&(i.showClass={backdrop:"swal2-noanimation"},i.hideClass={}),i},mS=t=>{const e={popup:Et(),container:Dn(),actions:_a(),confirmButton:Ui(),denyButton:dr(),cancelButton:go(),loader:vo(),closeButton:kd(),validationMessage:Zl(),progressSteps:Fd()};return kt.domCache.set(t,e),e},gS=(t,e,n)=>{const i=Ql();xn(i),e.timer&&(t.timeout=new Kw(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(cn(i),Kn(i,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&Vd(e.timer)})))},vS=(t,e)=>{if(!e.toast){if(!Kl(e.allowEnterKey)){ug("allowEnterKey"),xS();return}_S(t)||bS(t,e)||xu(-1,1)}},_S=t=>{const e=Array.from(t.popup.querySelectorAll("[autofocus]"));for(const n of e)if(n instanceof HTMLElement&&kn(n))return n.focus(),!0;return!1},bS=(t,e)=>e.focusDeny&&kn(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&kn(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&kn(t.confirmButton)?(t.confirmButton.focus(),!0):!1,xS=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const t=new Date,e=localStorage.getItem("swal-initiation");e?(t.getTime()-Date.parse(e))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const n=document.createElement("audio");n.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",n.loop=!0,document.body.appendChild(n),setTimeout(()=>{n.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${t}`)}Qt.prototype.disableButtons=Bg;Qt.prototype.enableButtons=kg;Qt.prototype.getInput=Og;Qt.prototype.disableInput=zg;Qt.prototype.enableInput=Hg;Qt.prototype.hideLoading=Ll;Qt.prototype.disableLoading=Ll;Qt.prototype.showValidationMessage=Vg;Qt.prototype.resetValidationMessage=Gg;Qt.prototype.close=Ms;Qt.prototype.closePopup=Ms;Qt.prototype.closeModal=Ms;Qt.prototype.closeToast=Ms;Qt.prototype.rejectPromise=Dg;Qt.prototype.update=qg;Qt.prototype._destroy=Yg;Object.assign(Qt,Yw);Object.keys(Cw).forEach(t=>{Qt[t]=function(...e){return yi&&yi[t]?yi[t](...e):null}});Qt.DismissReason=_o;Qt.version="11.22.3";const Hn=Qt;Hn.default=Hn;typeof document<"u"&&function(t,e){var n=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=e);else try{n.innerHTML=e}catch{n.innerText=e}}(document,':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.1s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px $swal2-outline-color;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');const bi=(t="Success!",e="Operation completed successfully")=>Hn.fire({icon:"success",title:t,text:e,confirmButtonText:"OK",confirmButtonColor:"#10b981"}),$t=(t="Error!",e="Something went wrong")=>Hn.fire({icon:"error",title:t,text:e,confirmButtonText:"OK",confirmButtonColor:"#ef4444"}),uI=(t="Warning!",e="Please check your input")=>Hn.fire({icon:"warning",title:t,text:e,confirmButtonText:"OK",confirmButtonColor:"#f59e0b"}),Ao=(t="Info",e="Here is some information")=>Hn.fire({icon:"info",title:t,text:e,confirmButtonText:"OK",confirmButtonColor:"#3b82f6"}),Sc=(t="Are you sure?",e="This action cannot be undone")=>Hn.fire({title:t,text:e,icon:"question",showCancelButton:!0,confirmButtonColor:"#10b981",cancelButtonColor:"#6b7280",confirmButtonText:"بله، ادامه بده",cancelButtonText:"لغو"}),dI=t=>Hn.fire({confirmButtonColor:"#10b981",cancelButtonColor:"#6b7280",...t}),fI=(t="Enter value",e="Value",n="Type here...")=>Hn.fire({title:t,inputLabel:e,input:"text",inputPlaceholder:n,showCancelButton:!0,confirmButtonColor:"#10b981",cancelButtonColor:"#6b7280",confirmButtonText:"ثبت",cancelButtonText:"لغو",inputValidator:i=>{if(!i)return"You need to write something!"}}),hI=(t="Loading...")=>{Hn.fire({title:t,allowOutsideClick:!1,didOpen:()=>{Hn.showLoading()}})},pI=()=>{Hn.close()},mI=(t,e="success",n="top-end")=>{Hn.mixin({toast:!0,position:n,showConfirmButton:!1,timer:3e3,timerProgressBar:!0}).fire({icon:e,title:t})},yS={class:"editor-container overflow-auto"},wS={class:"mobile-control-bar"},SS={key:0,class:"pinned-section"},MS={class:"pinned-section-header"},ES={class:"pinned-section-title"},TS={class:"pinned-section-content"},AS={key:0,class:"pinned-dimensions"},CS={class:"dimension-inputs"},RS={class:"dimension-label"},PS={class:"dimension-label"},DS={class:"cell-size-section"},LS={class:"dimension-inputs"},IS={class:"dimension-label"},US={class:"dimension-label"},OS={key:1,class:"pinned-direction"},NS={class:"direction-toggle"},FS={class:"direction-toggle"},kS={key:2,class:"pinned-color"},BS={class:"color-picker-container"},HS={class:"color-value"},zS={class:"recent-colors-header"},VS={class:"recent-colors-grid"},GS=["title","onClick"],WS=["onClick"],$S={key:3,class:"pinned-mode"},XS={class:"mode-toggle"},jS={key:4,class:"pinned-image"},qS={class:"image-picker-container"},YS={class:"available-images-grid"},KS=["onClick"],ZS=["src","alt"],QS={class:"image-name"},JS={key:5,class:"pinned-tools"},eM={class:"tools-grid"},tM=["disabled"],nM=["disabled"],iM=["disabled"],sM={key:6,class:"pinned-export"},rM={class:"grid grid-cols-2 gap-2"},oM={class:"mobile-panel-content"},aM={class:"mobile-image-section"},lM={class:"upload-section grid grid-cols-2 gap-2"},cM={class:"upload-label"},uM={class:"upload-label"},dM={key:0,class:"image-preview"},fM=["src"],hM={class:"mobile-controls-content"},pM={class:"controls-content"},mM={class:"dimensions-section"},gM={class:"section-header"},vM=["title"],_M={class:"dimension-inputs"},bM={class:"dimension-label"},xM={class:"dimension-label"},yM={class:"cell-size-section !mt-4"},wM={class:"dimension-inputs"},SM={class:"dimension-label"},MM={class:"dimension-label"},EM={class:"direction-section"},TM={class:"section-header"},AM=["title"],CM={class:"direction-toggle"},RM={class:"direction-toggle"},PM={class:"color-section"},DM={class:"section-header"},LM=["title"],IM={class:"color-picker-container"},UM={class:"color-value"},OM={class:"recent-colors-header mt-3!"},NM={class:"recent-colors-grid"},FM=["title","onClick"],kM=["onClick"],BM={class:"mode-section"},HM={class:"section-header"},zM=["title"],VM={class:"mode-toggle"},GM={key:0,class:"mode-section"},WM={class:"section-header"},$M=["title"],XM={class:"image-picker-container"},jM={class:"available-images-grid"},qM=["onClick"],YM=["src","alt"],KM={class:"image-name"},ZM={key:0,class:"recent-images-section"},QM={class:"recent-images-grid"},JM=["onClick"],eE=["src","alt"],tE=["onClick"],nE={class:"tools-section"},iE={class:"section-header"},sE=["title"],rE={class:"tools-grid"},oE=["disabled"],aE=["disabled"],lE=["disabled"],cE={class:"background-color-section !mt-4"},uE={class:"background-mode-toggle"},dE={key:0,class:"background-color-controls"},fE={key:1,class:"background-image-controls"},hE={class:"background-image-picker"},pE={class:"background-images-grid"},mE=["onClick"],gE=["src","alt"],vE={class:"background-image-name"},_E=["disabled"],bE={class:"export-section"},xE={class:"section-header"},yE=["title"],wE={class:"grid grid-cols-2 gap-2"},SE={class:"controls-panel"},ME={class:"controls-content"},EE={class:"dimensions-section"},TE={class:"dimension-inputs"},AE={class:"dimension-label"},CE={class:"dimension-label"},RE={class:"cell-size-section !mt-4"},PE={class:"dimension-inputs"},DE={class:"dimension-label"},LE={class:"dimension-label"},IE={class:"direction-section"},UE={class:"direction-toggle"},OE={class:"direction-toggle"},NE={class:"color-section"},FE={class:"color-picker-container"},kE={class:"color-value"},BE={class:"recent-colors-header mt-3!"},HE={class:"recent-colors-grid"},zE=["title","onClick"],VE=["onClick"],GE={class:"mode-section"},WE={class:"mode-toggle"},$E={key:0,class:"image-section"},XE={class:"image-picker-container"},jE={class:"available-images-grid"},qE=["onClick"],YE=["src","alt"],KE={class:"image-name"},ZE={key:0,class:"recent-images-section"},QE={class:"recent-images-grid"},JE=["onClick"],eT=["src","alt"],tT=["onClick"],nT={class:"tools-section"},iT={class:"tools-grid"},sT=["disabled"],rT=["disabled"],oT=["disabled"],aT={class:"background-color-section !mt-4"},lT={class:"background-mode-toggle"},cT={key:0,class:"background-color-controls"},uT={key:1,class:"background-image-controls"},dT={class:"background-image-picker"},fT={class:"background-images-grid"},hT=["onClick"],pT=["src","alt"],mT={class:"background-image-name"},gT=["disabled"],vT={class:"export-section"},_T={class:"grid grid-cols-2 gap-2"},bT={class:"image-section max-h-[70%]"},xT={class:"upload-section grid grid-cols-2 gap-2"},yT={class:"upload-label"},wT={class:"upload-label"},ST={key:0,class:"image-preview"},MT=["src"],ET=["onClick"],TT={__name:"GridEditor",emits:["update-grid"],setup(t,{emit:e}){const n=e,i=it(16),s=it(80),r=it(15),o=it(17),a=it("#ff0000"),l=it([]),c=it(null),u=it(()=>{try{const $=localStorage.getItem("gridEditor_isVertical");return console.log("saved",$),$!==null?JSON.parse($):!0}catch{return!0}}),d=it(!0),f=it(null),h=it("color"),g=it(null),b=it([]),m=it([]),p=it(!1),C=it(null);function E(){p.value=!p.value}function y($){C.value===$?C.value=null:(C.value=$,p.value=!1)}function D(){C.value=null}function L($){return{dimensions:"📐 ابعاد شبکه",direction:"🔄 جهت",color:"🎨 انتخاب رنگ",mode:"🎨 حالت طراحی",image:"🖼️ انتخاب تصویر مهره",tools:"🛠️ ابزارها",export:"📤 خروجی"}[$]||$}const P=it([]);function k(){try{const $={grid:P.value,rows:i.value,cols:s.value,cellWidth:r.value,cellHeight:o.value,isVertical:u.value,isVerticalGrid:d.value,recentColors:l.value,recentImages:b.value,timestamp:new Date().toISOString()};localStorage.setItem("gridEditorData",JSON.stringify($)),c.value=$.timestamp,bi("ذخیره شد","گرید با موفقیت ذخیره شد")}catch($){$t("خطا در ذخیره","خطا در ذخیره گرید: "+$.message),console.error("Error saving grid:",$)}}function S(){try{const $=localStorage.getItem("gridEditorData");if($){const w=JSON.parse($);return w.grid&&Array.isArray(w.grid)&&w.rows&&w.cols&&w.grid.length===w.rows*w.cols?(i.value=w.rows,s.value=w.cols,P.value=[...w.grid],w.cellWidth&&typeof w.cellWidth=="number"&&(r.value=w.cellWidth),w.cellHeight&&typeof w.cellHeight=="number"&&(o.value=w.cellHeight),typeof w.isVertical=="boolean"&&(u.value=w.isVertical),typeof w.isVerticalGrid=="boolean"&&(d.value=w.isVerticalGrid),w.recentColors&&Array.isArray(w.recentColors)&&(l.value=[...w.recentColors]),w.recentImages&&Array.isArray(w.recentImages)&&(b.value=[...w.recentImages]),c.value=w.timestamp,Ze.stacks=[],Ze.index=-1,ie(),n("update-grid",he()),!0):(localStorage.removeItem("gridEditorData"),Ao("اطلاعات","داده‌های ذخیره شده نامعتبر بودند و حذف شدند"),!1)}return!1}catch($){return $t("خطا در بارگذاری","خطا در بارگذاری گرید: "+$.message),console.error("Error loading grid:",$),localStorage.removeItem("gridEditorData"),!1}}function A($){console.log("Key pressed:",$.key,"Ctrl:",$.ctrlKey),$.ctrlKey&&$.key==="z"&&($.preventDefault(),ye(),console.log("Undo triggered by Ctrl+Z"))}po(()=>{const $=S();if(u.value=localStorage.getItem("gridEditor_isVertical")!==null?JSON.parse(localStorage.getItem("gridEditor_isVertical")):!0,!$){const w=i.value*s.value;P.value=Array(w).fill("#ffffff"),ie()}U(),document.addEventListener("keydown",A)});function U(){const $=["310.jpg","1130.jpg","1135.jpg","2116.jpg","2131.jpg","2132.jpg","725.jpg","877.jpg","f111.jpg","f222.jpg","f333.jpg","f444.jpg","f555.jpg","f666.jpg","f777.jpg","f888.jpg","f999.jpg","f1010.jpg","f1111.jpg","f1212.jpg","f1313.jpg","f1414.jpg","f1515.jpg","Awhite.jpg","Turquoise.jpg","db0042.jpg","db0221.jpg","db0231.jpg","db0268.jpg","db0623.jpg","db0627.jpg","db0635.jpg","db0651.jpg","db0680.jpg","db0721.jpg","db0722.jpg","db0723.jpg","db0725.jpg","db0726.jpg","db0729.jpg","db0759.jpg","db0763.jpg","db0791.jpg","db0796.jpg","db0877.jpg","db1132.jpg","db1133.jpg","db1135.jpg","db1153.jpg","db1262.jpg","db1570.jpg","db1802.jpg","db1832.jpg","db1832-2.jpg","db2111.jpg","db2127.jpg","db2131.jpg","db2132.jpg","db2144.jpg","db2316.jpg","db2352.jpg","db2357.jpg","db310.jpg","db626.jpg","db732.jpg","db856.jpg"];m.value=$.map(w=>({name:w,url:`/miyuki-beads-designer/beads/${w}`,displayName:w.replace(".jpg","")}))}const W=it([]),O=it([]),I=it({width:0,height:0}),G=it({x:0,y:0}),V=it(!1),ee=it("paint");let Y=!1,xe=null,Me=!1,Le=!1,Ge=!1,_t=-1;const Ze=da({stacks:[],index:-1});function ie(){Ze.stacks=Ze.stacks.slice(0,Ze.index+1),Ze.stacks.push([...P.value]),Ze.index++}function ye(){Ze.index>0&&(Ze.index--,P.value=[...Ze.stacks[Ze.index]])}function B(){Ze.index<Ze.stacks.length-1&&(Ze.index++,P.value=[...Ze.stacks[Ze.index]])}ie();function ue($){const w=$.target.files[0];if(w){const N=new FileReader;N.onload=pe=>{try{const Ae=pe.target.result.trim(),ke=JSON.parse(Ae);if(ke.grid&&ke.rows&&ke.cols){const{grid:je,rows:ot,cols:at}=ke;Array.isArray(je)&&je.every(Xe=>typeof Xe=="string"&&(Xe.match(/^#[0-9A-Fa-f]{6}$/)||Xe.startsWith("/miyuki-beads-designer/beads/")))?je.length===ot*at?(i.value=ot,s.value=at,ke.cellWidth&&typeof ke.cellWidth=="number"&&(r.value=ke.cellWidth),ke.cellHeight&&typeof ke.cellHeight=="number"&&(o.value=ke.cellHeight),typeof ke.isVertical=="boolean"&&(u.value=ke.isVertical),typeof ke.isVerticalGrid=="boolean"&&(d.value=ke.isVerticalGrid),ha(()=>{P.value=[...je],ie(),bi("بارگذاری شد",`گرید ${ot}×${at} با موفقیت بارگذاری شد`)})):$t("خطا در ابعاد",`تعداد سلول‌ها (${je.length}) با ابعاد اعلام شده (${ot}×${at}) مطابقت ندارد`):$t("خطا در فرمت فایل","فایل باید شامل آرایه‌ای معتبر از رنگ‌ها یا تصاویر باشد")}else if(Array.isArray(ke)){const je=ke;je.every(ot=>typeof ot=="string"&&(ot.match(/^#[0-9A-Fa-f]{6}$/)||ot.startsWith("/miyuki-beads-designer/beads/")))?je.length===i.value*s.value?(P.value=[...je],ie(),bi("بارگذاری شد",`گرید با ابعاد فعلی (${i.value}×${s.value}) بارگذاری شد`)):$t("خطا در ابعاد",`تعداد سلول‌ها (${je.length}) با ابعاد فعلی (${i.value}×${s.value}) مطابقت ندارد. لطفاً ابعاد را تنظیم کنید یا از فایل با فرمت جدید استفاده کنید.`):$t("خطا در فرمت فایل","فایل باید شامل آرایه‌ای معتبر از رنگ‌ها یا تصاویر باشد")}else $t("خطا در فرمت فایل","فرمت فایل نامعتبر است. فایل باید شامل آرایه‌ای از رنگ‌ها/تصاویر یا آبجکتی با grid، rows و cols باشد.")}catch(Ae){$t("خطا در خواندن فایل","خطا در خواندن فایل: "+Ae.message),console.error("Error parsing text file:",Ae)}},N.readAsText(w)}}Fn([i,s],()=>{const $=i.value*s.value;P.value.length!==$&&(P.value=Array($).fill("#ffffff"),W.value=[],V.value=!1,ie())},{immediate:!0}),Fn(P,()=>{setTimeout(()=>{try{const $={grid:P.value,rows:i.value,cols:s.value,recentColors:l.value,recentImages:b.value,timestamp:new Date().toISOString()};localStorage.setItem("gridEditorData",JSON.stringify($)),c.value=$.timestamp}catch($){console.error("Error auto-saving grid:",$)}},1e3)},{deep:!0}),Fn(u,$=>{try{localStorage.setItem("gridEditor_isVertical",JSON.stringify($)),console.log("isVertical saved",$)}catch(w){console.error("Error saving isVertical to localStorage:",w)}},{immediate:!1});function oe($){ee.value=$,W.value=[],$!=="paste"&&(V.value=!1)}function me(){return O.value&&O.value.length>0&&I.value.width>0}function Qe($){Y=!0;const w=le($);ee.value==="paint"?q(w):ee.value==="fill"?Z(w,P.value[w],ge()):ee.value==="select"&&(xe=w,W.value=[w],Me=!0)}function R(){Y&&ie(),Y=!1,xe=null}function v($){if(!Y)return;const w=le($);ee.value==="paint"?q(w):ee.value==="select"&&Me&&(W.value=Q(xe,w))}function z($){$.preventDefault();const w=$.touches;if(Le=w.length>1,w.length===1){const N=w[0],pe=document.elementFromPoint(N.clientX,N.clientY);if(pe&&pe.classList.contains("cell")){const Ae=Array.from(pe.parentNode.children).indexOf(pe);_t=Ae,Ge=!0,ee.value==="paint"?q(Ae):ee.value==="fill"?(Z(Ae,P.value[Ae],ge()),ie()):ee.value==="select"&&(xe=Ae,W.value=[Ae],Me=!0)}}else Ge=!1}function K($){const w=$.touches;if(w.length===1&&Ge&&!Le){$.preventDefault();const N=w[0],pe=document.elementFromPoint(N.clientX,N.clientY);if(pe&&pe.classList.contains("cell")){const Ae=Array.from(pe.parentNode.children).indexOf(pe);Ae!==_t&&(_t=Ae,ee.value==="paint"?q(Ae):ee.value==="select"&&Me&&(W.value=Q(xe,Ae)))}}else w.length>1&&(Le=!0,Ge=!1)}function se(){Ge&&!Le&&ee.value==="paint"&&ie(),Ge=!1,Le=!1,_t=-1,xe=null,Me=!1}function q($){h.value==="color"?(P.value[$]=a.value,te(a.value)):h.value==="image"&&g.value&&(P.value[$]=g.value.url,ce(g.value))}function ge(){return h.value==="color"?a.value:h.value==="image"&&g.value?g.value.url:a.value}function te($){const w=l.value.indexOf($);w>-1&&l.value.splice(w,1),l.value.unshift($),l.value.length>10&&(l.value=l.value.slice(0,10))}function ce($){const w=b.value.findIndex(N=>N.url===$.url);w>-1&&b.value.splice(w,1),b.value.unshift($),b.value.length>10&&(b.value=b.value.slice(0,10))}function de($){g.value=$,ce($)}function Pe($){const w=b.value.findIndex(N=>N.url===$.url);w>-1&&b.value.splice(w,1)}async function M(){(await Sc("پاک کردن تصاویر","آیا می‌خواهید تمام تصاویر اخیر پاک شوند؟")).isConfirmed&&(b.value=[])}function x($){const w=l.value.indexOf($);w>-1&&l.value.splice(w,1)}async function F(){(await Sc("پاک کردن رنگ‌ها","آیا می‌خواهید تمام رنگ‌های اخیر پاک شوند؟")).isConfirmed&&(l.value=[])}function Z($,w,N){if(w===N)return;const pe=[$],Ae=new Set;for(;pe.length;){const ke=pe.pop();if(Ae.has(ke)||P.value[ke]!==w)continue;Ae.add(ke),P.value[ke]=N;const je=ke%i.value,ot=Math.floor(ke/i.value);if(je>0){const at=ke-1;!Ae.has(at)&&P.value[at]===w&&pe.push(at)}if(je<i.value-1){const at=ke+1;!Ae.has(at)&&P.value[at]===w&&pe.push(at)}if(ot>0){const at=ke-i.value;!Ae.has(at)&&P.value[at]===w&&pe.push(at)}if(ot<s.value-1){const at=ke+i.value;!Ae.has(at)&&P.value[at]===w&&pe.push(at)}}te(N)}function le($){const w=$.target;return Array.from(w.parentNode.children).indexOf(w)}function Q($,w){const N=$%i.value,pe=Math.floor($/i.value),Ae=w%i.value,ke=Math.floor(w/i.value),je=Math.min(N,Ae),ot=Math.max(N,Ae),at=Math.min(pe,ke),Xe=Math.max(pe,ke),bt=[];for(let Gt=at;Gt<=Xe;Gt++)for(let In=je;In<=ot;In++){const is=Gt*i.value+In;is>=0&&is<P.value.length&&bt.push(is)}return bt}function Ie($){if(ee.value==="paint")q($),ie();else if(ee.value==="fill")Z($,P.value[$],ge()),ie();else if(ee.value==="paste"&&V.value){const w=$%i.value,N=Math.floor($/i.value);G.value={x:w,y:N},ct()}}function ve(){if(W.value.length===0){$t("خطا","ابتدا یک ناحیه انتخاب کنید");return}const $=i.value,w=Math.min(...W.value.map(ot=>ot%$)),N=Math.max(...W.value.map(ot=>ot%$)),pe=Math.min(...W.value.map(ot=>Math.floor(ot/$))),Ae=Math.max(...W.value.map(ot=>Math.floor(ot/$))),ke=N-w+1,je=Ae-pe+1;I.value={width:ke,height:je},O.value=[];for(let ot=0;ot<je;ot++){const at=[];for(let Xe=0;Xe<ke;Xe++){const bt=(pe+ot)*$+(w+Xe);at.push(P.value[bt])}O.value.push(at)}}function De(){if(W.value.length===0){$t("خطا","ابتدا یک ناحیه انتخاب کنید");return}ve(),W.value.forEach($=>P.value[$]="#ffffff"),ie()}function Ue(){if(!me()){$t("خطا","هیچ چیزی برای چسباندن وجود ندارد");return}let $=0,w=0;if(W.value.length>0){const N=i.value;$=Math.min(...W.value.map(pe=>pe%N)),w=Math.min(...W.value.map(pe=>Math.floor(pe/N)))}else $=Math.floor((i.value-I.value.width)/2),w=Math.floor((s.value-I.value.height)/2);for(let N=0;N<I.value.height;N++)for(let pe=0;pe<I.value.width;pe++){const Ae=$+pe,ke=w+N;if(Ae>=0&&Ae<i.value&&ke>=0&&ke<s.value){const je=ke*i.value+Ae;O.value[N]&&O.value[N][pe]&&(P.value[je]=O.value[N][pe])}}ie()}function _e(){W.value=[],Me=!1}function Ce(){if(W.value.length===0){$t("خطا","ابتدا یک ناحیه انتخاب کنید");return}try{const $=i.value,w=Math.min(...W.value.map(Xe=>Xe%$)),N=Math.max(...W.value.map(Xe=>Xe%$)),pe=Math.min(...W.value.map(Xe=>Math.floor(Xe/$))),Ae=Math.max(...W.value.map(Xe=>Math.floor(Xe/$))),ke=N-w+1,je=Ae-pe+1,ot=[];for(let Xe=0;Xe<je;Xe++){const bt=[];for(let Gt=0;Gt<ke;Gt++){const In=(pe+Xe)*$+(w+Gt);W.value.includes(In)?bt.push(P.value[In]):bt.push("#ffffff")}ot.push(bt)}const at=ot.map(Xe=>Xe.reverse());for(let Xe=0;Xe<je;Xe++)for(let bt=0;bt<ke;bt++){const Gt=(pe+Xe)*$+(w+bt);W.value.includes(Gt)&&(P.value[Gt]=at[Xe][bt])}ie(),bi("آینه شد","طرح انتخاب شده با موفقیت آینه شد")}catch($){$t("خطا در آینه کردن","خطا در آینه کردن طرح: "+$.message),console.error("Error mirroring selection:",$)}}function Be(){if(W.value.length===0){$t("خطا","ابتدا یک ناحیه انتخاب کنید");return}try{const $=i.value,w=Math.min(...W.value.map(Xe=>Xe%$)),N=Math.max(...W.value.map(Xe=>Xe%$)),pe=Math.min(...W.value.map(Xe=>Math.floor(Xe/$))),Ae=Math.max(...W.value.map(Xe=>Math.floor(Xe/$))),ke=N-w+1,je=Ae-pe+1,ot=[];for(let Xe=0;Xe<je;Xe++){const bt=[];for(let Gt=0;Gt<ke;Gt++){const In=(pe+Xe)*$+(w+Gt);W.value.includes(In)?bt.push(P.value[In]):bt.push("#ffffff")}ot.push(bt)}const at=ot.reverse();for(let Xe=0;Xe<je;Xe++)for(let bt=0;bt<ke;bt++){const Gt=(pe+Xe)*$+(w+bt);W.value.includes(Gt)&&(P.value[Gt]=at[Xe][bt])}ie(),bi("آینه عمودی شد","طرح انتخاب شده با موفقیت به صورت عمودی آینه شد")}catch($){$t("خطا در آینه عمودی","خطا در آینه عمودی کردن طرح: "+$.message),console.error("Error vertical mirroring selection:",$)}}function Oe(){if(!me()){$t("خطا","هیچ چیزی برای چسباندن وجود ندارد");return}const $=Math.floor((i.value-I.value.width)/2),w=Math.floor((s.value-I.value.height)/2);for(let N=0;N<I.value.height;N++)for(let pe=0;pe<I.value.width;pe++){const Ae=$+pe,ke=w+N;if(Ae>=0&&Ae<i.value&&ke>=0&&ke<s.value){const je=ke*i.value+Ae;O.value[N]&&O.value[N][pe]&&(P.value[je]=O.value[N][pe])}}ie()}function Te(){if(!me()){$t("خطا","هیچ چیزی برای چسباندن وجود ندارد");return}V.value=!0,ee.value="paste",W.value=[],Ao("انتخاب موقعیت","حالا روی صفحه کلیک کنید تا موقعیت چسباندن را انتخاب کنید")}function ct(){if(!me()){$t("خطا","هیچ چیزی برای چسباندن وجود ندارد");return}for(let $=0;$<I.value.height;$++)for(let w=0;w<I.value.width;w++){const N=G.value.x+w,pe=G.value.y+$;if(N>=0&&N<i.value&&pe>=0&&pe<s.value){const Ae=pe*i.value+N;O.value[$]&&O.value[$][w]&&(P.value[Ae]=O.value[$][w])}}ie(),V.value=!1,ee.value="paint"}function H(){V.value=!1,ee.value="paint",Ao("لغو شد","حالت چسباندن لغو شد")}async function we($,w,N,pe,Ae,ke){if(ke.startsWith("/miyuki-beads-designer/beads/"))try{const je=new Image;je.crossOrigin="anonymous",await new Promise((ot,at)=>{je.onload=ot,je.onerror=at,je.src=ke}),$.drawImage(je,w,N,pe,Ae)}catch(je){console.warn("Failed to load image:",ke,je),$.fillStyle="#cccccc",$.fillRect(w,N,pe,Ae)}else $.fillStyle=ke,$.fillRect(w,N,pe,Ae)}async function Ee(){try{Ao("در حال پردازش...","لطفاً صبر کنید، در حال ایجاد عکس...");const $=document.createElement("canvas"),w=$.getContext("2d"),N=20,pe=i.value*r.value+N*2,Ae=s.value*o.value+N*2;$.width=pe,$.height=Ae,w.fillStyle="#ffffff",w.fillRect(0,0,pe,Ae);for(let ke=0;ke<s.value;ke++)for(let je=0;je<i.value;je++){const ot=ke*i.value+je,at=P.value[ot];if(at){const Xe=N+je*r.value,bt=N+ke*o.value;await we(w,Xe,bt,r.value,o.value,at),w.strokeStyle="#e0e0e0",w.lineWidth=.5,w.strokeRect(Xe,bt,r.value,o.value)}}w.fillStyle="#000000",w.font="16px Arial",w.textAlign="center",w.fillText(`Grid: ${i.value}×${s.value}`,pe/2,N/2+10),$.toBlob(ke=>{const je=URL.createObjectURL(ke),ot=document.createElement("a");ot.href=je,ot.download=`grid_${i.value}x${s.value}_${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.png`,document.body.appendChild(ot),ot.click(),document.body.removeChild(ot),URL.revokeObjectURL(je),bi("موفقیت","عکس با موفقیت دانلود شد!")},"image/png")}catch($){$t("خطا در خروجی","خطا در ایجاد عکس: "+$.message),console.error("Error exporting grid as image:",$)}}async function Fe(){try{Ao("در حال پردازش...","لطفاً صبر کنید، در حال ایجاد عکس HD...");const $=document.createElement("canvas"),w=$.getContext("2d"),N=r.value*2,pe=o.value*2,Ae=40,ke=i.value*N+Ae*2,je=s.value*pe+Ae*2;$.width=ke,$.height=je,w.fillStyle="#ffffff",w.fillRect(0,0,ke,je);for(let at=0;at<s.value;at++)for(let Xe=0;Xe<i.value;Xe++){const bt=at*i.value+Xe,Gt=P.value[bt];if(Gt){const In=Ae+Xe*N,is=Ae+at*pe;await we(w,In,is,N,pe,Gt),w.strokeStyle="#d0d0d0",w.lineWidth=1,w.strokeRect(In,is,N,pe)}}w.fillStyle="#000000",w.font="bold 24px Arial",w.textAlign="center",w.fillText(`Grid: ${i.value}×${s.value}`,ke/2,Ae/2+20),w.font="16px Arial",w.fillStyle="#666666";const ot=new Date().toLocaleString("fa-IR");w.fillText(ot,ke/2,je-Ae/2),$.toBlob(at=>{const Xe=URL.createObjectURL(at),bt=document.createElement("a");bt.href=Xe,bt.download=`grid_HD_${i.value}x${s.value}_${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.png`,document.body.appendChild(bt),bt.click(),document.body.removeChild(bt),URL.revokeObjectURL(Xe),bi("موفقیت","عکس HD با موفقیت دانلود شد!")},"image/png",1)}catch($){$t("خطا در خروجی","خطا در ایجاد عکس HD: "+$.message),console.error("Error exporting grid as high quality image:",$)}}function be(){try{const $={grid:P.value,rows:i.value,cols:s.value,cellWidth:r.value,cellHeight:o.value,isVertical:u.value,isVerticalGrid:d.value,timestamp:new Date().toISOString()},w=JSON.stringify($,null,2),N=new Blob([w],{type:"text/plain;charset=utf-8"}),pe=URL.createObjectURL(N),Ae=document.createElement("a");Ae.href=pe,Ae.download=`grid_${i.value}x${s.value}_${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.txt`,document.body.appendChild(Ae),Ae.click(),document.body.removeChild(Ae),URL.revokeObjectURL(pe),bi("موفقیت","فایل TXT با موفقیت دانلود شد!")}catch($){$t("خطا در خروجی","خطا در ایجاد فایل TXT: "+$.message),console.error("Error exporting grid as TXT:",$)}}function he(){const $=[];for(let w=0;w<s.value;w++){const N=[];for(let pe=0;pe<i.value;pe++)N.push(P.value[w*i.value+pe]);$.push(N)}return $}function Ve($){const w=$.target.files[0];f.value=URL.createObjectURL(w)}const tt=it("#ffffff"),dt=it("color"),ft=it(null);async function Ln(){let $,w;if(dt.value==="color")$=tt.value,w=`آیا می‌خواهید تمام مهره‌ها به رنگ ${$} تغییر یابند؟ این عملیات غیرقابل برگشت است.`;else if(dt.value==="image"&&ft.value)$=ft.value.url,w=`آیا می‌خواهید تمام مهره‌ها به تصویر ${ft.value.displayName} تغییر یابند؟ این عملیات غیرقابل برگشت است.`;else{$t("خطا","لطفاً یک رنگ یا تصویر انتخاب کنید");return}if((await Sc("تغییر تمام مهره‌ها",w)).isConfirmed){const pe=i.value*s.value;for(let Ae=0;Ae<pe;Ae++)P.value[Ae]=$;ie(),dt.value==="color"?(te($),bi("تغییر رنگ",`تمام مهره‌ها به رنگ ${$} تغییر یافتند`)):(ce(ft.value),bi("تغییر تصویر",`تمام مهره‌ها به تصویر ${ft.value.displayName} تغییر یافتند`))}}return($,w)=>(He(),$e("div",yS,[_("div",wS,[_("button",{class:Ye(["mobile-menu-btn",{active:p.value}]),onClick:E},w[58]||(w[58]=[_("span",{class:"menu-icon"},"☰",-1),_("span",{class:"menu-text"},"ابزارها",-1)]),2),w[59]||(w[59]=_("div",{class:"mobile-title"},"🎨 ویرایشگر شبکه",-1))]),C.value?(He(),$e("div",SS,[_("div",MS,[_("h4",ES,st(L(C.value)),1),_("button",{class:"unpin-btn",title:"Unpin Section",onClick:D}," ✕ ")]),_("div",TS,[C.value==="dimensions"?(He(),$e("div",AS,[_("div",CS,[_("label",RS,[w[60]||(w[60]=_("span",{class:"dimension-text"},"ستون ها:",-1)),qt(_("input",{"onUpdate:modelValue":w[0]||(w[0]=N=>i.value=N),type:"number",min:"1",class:"dimension-input"},null,512),[[en,i.value,void 0,{number:!0}]])]),_("label",PS,[w[61]||(w[61]=_("span",{class:"dimension-text"},"ردیف ها:",-1)),qt(_("input",{"onUpdate:modelValue":w[1]||(w[1]=N=>s.value=N),type:"number",min:"1",class:"dimension-input"},null,512),[[en,s.value,void 0,{number:!0}]])])]),_("div",DS,[w[64]||(w[64]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 📏 اندازه سلول ",-1)),_("div",LS,[_("label",IS,[w[62]||(w[62]=_("span",{class:"dimension-text"},"عرض:",-1)),qt(_("input",{"onUpdate:modelValue":w[2]||(w[2]=N=>r.value=N),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[en,r.value,void 0,{number:!0}]])]),_("label",US,[w[63]||(w[63]=_("span",{class:"dimension-text"},"ارتفاع:",-1)),qt(_("input",{"onUpdate:modelValue":w[3]||(w[3]=N=>o.value=N),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[en,o.value,void 0,{number:!0}]])])])])])):Dt("",!0),C.value==="direction"?(He(),$e("div",OS,[_("div",NS,[_("button",{class:Ye(["direction-btn",{active:u.value}]),onClick:w[4]||(w[4]=N=>u.value=!u.value)},st(u.value?"عمودی":"افقی"),3)]),_("div",FS,[_("button",{class:Ye(["direction-btn",{active:d.value}]),onClick:w[5]||(w[5]=N=>d.value=!d.value)},st(d.value?"گرید عمودی":"گرید افقی"),3)])])):Dt("",!0),C.value==="color"?(He(),$e("div",kS,[_("div",BS,[qt(_("input",{"onUpdate:modelValue":w[6]||(w[6]=N=>a.value=N),type:"color",class:"color-picker"},null,512),[[en,a.value]]),_("span",HS,st(a.value),1)]),_("div",zS,[w[65]||(w[65]=_("h4",{class:"text-sm font-semibold text-gray-700"},"🔄 رنگ‌های اخیر",-1)),l.value.length>0?(He(),$e("button",{key:0,class:"clear-colors-btn",title:"پاک کردن تمام رنگ‌ها",onClick:F}," 🗑️ پاک کردن ")):Dt("",!0)]),_("div",VS,[(He(!0),$e(Ht,null,En(l.value,N=>(He(),$e("div",{key:N,class:"color-swatch",style:jn({backgroundColor:N}),title:N,onClick:pe=>a.value=N},[_("button",{class:"remove-color-btn",onClick:Mo(pe=>x(N),["stop"])}," × ",8,WS)],12,GS))),128))])])):Dt("",!0),C.value==="mode"?(He(),$e("div",$S,[_("div",XS,[_("button",{class:Ye(["mode-btn",{active:h.value==="color"}]),onClick:w[7]||(w[7]=N=>h.value="color")}," 🎨 رنگ ",2),_("button",{class:Ye(["mode-btn",{active:h.value==="image"}]),onClick:w[8]||(w[8]=N=>h.value="image")}," 🖼️ تصویر ",2)])])):Dt("",!0),C.value==="image"?(He(),$e("div",jS,[_("div",qS,[_("div",YS,[(He(!0),$e(Ht,null,En(m.value,N=>{var pe;return He(),$e("div",{key:N.name,class:Ye(["image-item",{selected:((pe=g.value)==null?void 0:pe.url)===N.url}]),onClick:Ae=>de(N)},[_("img",{src:N.url,alt:N.displayName,class:"bead-image"},null,8,ZS),_("span",QS,st(N.displayName),1)],10,KS)}),128))])])])):Dt("",!0),C.value==="tools"?(He(),$e("div",JS,[_("div",eM,[_("button",{class:Ye(["tool-btn primary",{active:ee.value==="paint"}]),onClick:w[9]||(w[9]=N=>oe("paint"))}," 🖌️ Paint ",2),_("button",{class:Ye(["tool-btn primary",{active:ee.value==="fill"}]),onClick:w[10]||(w[10]=N=>oe("fill"))}," 🪣 Fill ",2),_("button",{class:Ye(["tool-btn secondary",{active:ee.value==="select"}]),onClick:w[11]||(w[11]=N=>oe("select"))}," 📐 Select ",2),_("button",{class:"tool-btn secondary",onClick:ve}," 📋 Copy "),_("button",{class:"tool-btn secondary",onClick:De}," ✂️ Cut "),_("button",{class:"tool-btn secondary",onClick:Ue}," 📥 Paste "),_("button",{class:"tool-btn secondary",onClick:Oe}," 📍 Paste at Center "),_("button",{class:"tool-btn secondary",disabled:!me(),onClick:Te}," 🎯 Select Paste Position ",8,tM),V.value?(He(),$e("button",{key:0,class:"tool-btn danger",onClick:H}," ❌ Cancel Paste ")):Dt("",!0),_("button",{class:"tool-btn secondary",onClick:_e}," 🗑️ Clear Selection "),_("button",{class:"tool-btn secondary",disabled:W.value.length===0,onClick:Ce}," 🔄 Mirror Selection ",8,nM),_("button",{class:"tool-btn secondary",disabled:W.value.length===0,onClick:Be}," ↕️ Mirror Selection Vertical ",8,iM),_("button",{class:"tool-btn secondary",onClick:ye}," ↩️ Undo "),_("button",{class:"tool-btn secondary",onClick:B}," ↪️ Redo ")])])):Dt("",!0),C.value==="export"?(He(),$e("div",sM,[_("div",{class:"save-load-buttons"},[_("button",{class:"export-btn success",onClick:k}," 💾 ذخیره گرید "),_("button",{class:"export-btn info",onClick:S}," 📂 بارگذاری اخرین ذخیره ")]),_("div",rM,[_("button",{class:"export-btn primary",onClick:w[12]||(w[12]=N=>$.$emit("update-grid",he()))}," 🚀 ارسال به 3D "),_("button",{class:"export-btn success",onClick:w[13]||(w[13]=()=>Ee())}," 📷 خروجی عکس "),_("button",{class:"export-btn info",onClick:w[14]||(w[14]=()=>Fe())}," 🖼️ خروجی HD "),_("button",{class:"export-btn warning",onClick:be}," 📄 خروجی TXT ")])])):Dt("",!0)])])):Dt("",!0),_("div",{class:Ye(["mobile-dropdown-panel",{open:p.value}])},[_("div",oM,[_("div",aM,[_("div",lM,[_("label",cM,[w[66]||(w[66]=_("span",{class:"upload-text"},"📁 آپلود فایل txt grid",-1)),_("input",{type:"file",accept:".txt",class:"upload-input",onChange:ue},null,32)]),_("label",uM,[w[67]||(w[67]=_("span",{class:"upload-text"},"📁 آپلود تصویر",-1)),_("input",{type:"file",accept:"image/*",class:"upload-input",onChange:Ve},null,32)])]),f.value?(He(),$e("div",dM,[_("img",{src:f.value,alt:"تصویر انتخاب شده",class:"preview-image"},null,8,fM)])):Dt("",!0)]),_("div",hM,[w[83]||(w[83]=_("div",{class:"controls-header"},[_("h3",{class:"mb-4 text-lg font-bold text-gray-800"}," 🎨 ابزارهای طراحی ")],-1)),_("div",pM,[_("div",mM,[_("div",gM,[w[68]||(w[68]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 📐 ابعاد شبکه ",-1)),_("button",{class:Ye(["pin-btn",{pinned:C.value==="dimensions"}]),title:C.value==="dimensions"?"Unpin Section":"Pin Section",onClick:w[15]||(w[15]=N=>y("dimensions"))},st((C.value==="dimensions","📌")),11,vM)]),_("div",_M,[_("label",bM,[w[69]||(w[69]=_("span",{class:"dimension-text"},"ستون ها:",-1)),qt(_("input",{"onUpdate:modelValue":w[16]||(w[16]=N=>i.value=N),type:"number",min:"1",class:"dimension-input"},null,512),[[en,i.value,void 0,{number:!0}]])]),_("label",xM,[w[70]||(w[70]=_("span",{class:"dimension-text"},"ردیف ها:",-1)),qt(_("input",{"onUpdate:modelValue":w[17]||(w[17]=N=>s.value=N),type:"number",min:"1",class:"dimension-input"},null,512),[[en,s.value,void 0,{number:!0}]])])]),_("div",yM,[w[73]||(w[73]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 📏 اندازه سلول ",-1)),_("div",wM,[_("label",SM,[w[71]||(w[71]=_("span",{class:"dimension-text"},"عرض:",-1)),qt(_("input",{"onUpdate:modelValue":w[18]||(w[18]=N=>r.value=N),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[en,r.value,void 0,{number:!0}]])]),_("label",MM,[w[72]||(w[72]=_("span",{class:"dimension-text"},"ارتفاع:",-1)),qt(_("input",{"onUpdate:modelValue":w[19]||(w[19]=N=>o.value=N),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[en,o.value,void 0,{number:!0}]])])])])]),_("div",EM,[_("div",TM,[w[74]||(w[74]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"🔄 جهت",-1)),_("button",{class:Ye(["pin-btn",{pinned:C.value==="direction"}]),title:C.value==="direction"?"Unpin Section":"Pin Section",onClick:w[20]||(w[20]=N=>y("direction"))},st((C.value==="direction","📌")),11,AM)]),_("div",CM,[_("button",{class:Ye(["direction-btn",{active:u.value}]),onClick:w[21]||(w[21]=N=>u.value=!u.value)},st(u.value?"عمودی":"افقی"),3)]),_("div",RM,[_("button",{class:Ye(["direction-btn",{active:d.value}]),onClick:w[22]||(w[22]=N=>d.value=!d.value)},st(d.value?"گرید عمودی":"گرید افقی"),3)])]),_("div",PM,[_("div",DM,[w[75]||(w[75]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🎨 انتخاب رنگ ",-1)),_("button",{class:Ye(["pin-btn",{pinned:C.value==="color"}]),title:C.value==="color"?"Unpin Section":"Pin Section",onClick:w[23]||(w[23]=N=>y("color"))},st((C.value==="color","📌")),11,LM)]),_("div",IM,[qt(_("input",{"onUpdate:modelValue":w[24]||(w[24]=N=>a.value=N),type:"color",class:"color-picker"},null,512),[[en,a.value]]),_("span",UM,st(a.value),1)]),_("div",OM,[w[76]||(w[76]=_("h4",{class:"text-sm font-semibold text-gray-700"}," 🔄 رنگ‌های اخیر ",-1)),l.value.length>0?(He(),$e("button",{key:0,class:"clear-colors-btn",title:"پاک کردن تمام رنگ‌ها",onClick:F}," 🗑️ پاک کردن ")):Dt("",!0)]),_("div",NM,[(He(!0),$e(Ht,null,En(l.value,N=>(He(),$e("div",{key:N,class:"color-swatch",style:jn({backgroundColor:N}),title:N,onClick:pe=>a.value=N},[_("button",{class:"remove-color-btn",onClick:Mo(pe=>x(N),["stop"])}," × ",8,kM)],12,FM))),128))])]),_("div",BM,[_("div",HM,[w[77]||(w[77]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🎨 حالت طراحی ",-1)),_("button",{class:Ye(["pin-btn",{pinned:C.value==="mode"}]),title:C.value==="mode"?"Unpin Section":"Pin Section",onClick:w[25]||(w[25]=N=>y("mode"))},st((C.value==="mode","📌")),11,zM)]),_("div",VM,[_("button",{class:Ye(["mode-btn",{active:h.value==="color"}]),onClick:w[26]||(w[26]=N=>h.value="color")}," 🎨 رنگ ",2),_("button",{class:Ye(["mode-btn",{active:h.value==="image"}]),onClick:w[27]||(w[27]=N=>h.value="image")}," 🖼️ تصویر ",2)])]),h.value==="image"?(He(),$e("div",GM,[_("div",WM,[w[78]||(w[78]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🖼️ انتخاب تصویر مهره ",-1)),_("button",{class:Ye(["pin-btn",{pinned:C.value==="image"}]),title:C.value==="image"?"Unpin Section":"Pin Section",onClick:w[28]||(w[28]=N=>y("image"))},st((C.value==="image","📌")),11,$M)]),_("div",XM,[_("div",jM,[(He(!0),$e(Ht,null,En(m.value,N=>{var pe;return He(),$e("div",{key:N.name,class:Ye(["image-item",{selected:((pe=g.value)==null?void 0:pe.url)===N.url}]),onClick:Ae=>de(N)},[_("img",{src:N.url,alt:N.displayName,class:"bead-image"},null,8,YM),_("span",KM,st(N.displayName),1)],10,qM)}),128))])]),b.value.length>0?(He(),$e("div",ZM,[_("div",{class:"recent-images-header"},[w[79]||(w[79]=_("h4",{class:"text-sm font-semibold text-gray-700"}," 🔄 تصاویر اخیر ",-1)),_("button",{class:"clear-images-btn",title:"پاک کردن تمام تصاویر",onClick:M}," 🗑️ پاک کردن ")]),_("div",QM,[(He(!0),$e(Ht,null,En(b.value,N=>{var pe;return He(),$e("div",{key:N.url,class:Ye(["recent-image-item",{selected:((pe=g.value)==null?void 0:pe.url)===N.url}]),onClick:Ae=>de(N)},[_("img",{src:N.url,alt:N.displayName,class:"recent-bead-image"},null,8,eE),_("button",{class:"remove-image-btn",onClick:Mo(Ae=>Pe(N),["stop"])}," × ",8,tE)],10,JM)}),128))])])):Dt("",!0)])):Dt("",!0),_("div",nE,[_("div",iE,[w[80]||(w[80]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🛠️ ابزارها ",-1)),_("button",{class:Ye(["pin-btn",{pinned:C.value==="tools"}]),title:C.value==="tools"?"Unpin Section":"Pin Section",onClick:w[29]||(w[29]=N=>y("tools"))},st((C.value==="tools","📌")),11,sE)]),_("div",rE,[_("button",{class:Ye(["tool-btn primary",{active:ee.value==="paint"}]),onClick:w[30]||(w[30]=N=>oe("paint"))}," 🖌️ Paint ",2),_("button",{class:Ye(["tool-btn primary",{active:ee.value==="fill"}]),onClick:w[31]||(w[31]=N=>oe("fill"))}," 🪣 Fill ",2),_("button",{class:Ye(["tool-btn secondary",{active:ee.value==="select"}]),onClick:w[32]||(w[32]=N=>oe("select"))}," 📐 Select ",2),_("button",{class:"tool-btn secondary",onClick:ve}," 📋 Copy "),_("button",{class:"tool-btn secondary",onClick:De}," ✂️ Cut "),_("button",{class:"tool-btn secondary",onClick:Ue}," 📥 Paste "),_("button",{class:"tool-btn secondary",onClick:Oe}," 📍 Paste at Center "),_("button",{class:"tool-btn secondary",disabled:!me(),onClick:Te}," 🎯 Select Paste Position ",8,oE),V.value?(He(),$e("button",{key:0,class:"tool-btn danger",onClick:H}," ❌ Cancel Paste ")):Dt("",!0),_("button",{class:"tool-btn secondary",onClick:_e}," 🗑️ Clear Selection "),_("button",{class:"tool-btn secondary",disabled:W.value.length===0,onClick:Ce}," 🔄 Mirror Selection ",8,aE),_("button",{class:"tool-btn secondary",disabled:W.value.length===0,onClick:Be}," ↕️ Mirror Selection Vertical ",8,lE),_("button",{class:"tool-btn secondary",onClick:ye}," ↩️ Undo "),_("button",{class:"tool-btn secondary",onClick:B}," ↪️ Redo ")]),_("div",cE,[w[81]||(w[81]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🎨 پس‌زمینه ",-1)),_("div",uE,[_("button",{class:Ye(["mode-btn",{active:dt.value==="color"}]),onClick:w[33]||(w[33]=N=>dt.value="color")}," 🎨 رنگ ",2),_("button",{class:Ye(["mode-btn",{active:dt.value==="image"}]),onClick:w[34]||(w[34]=N=>dt.value="image")}," 🖼️ تصویر ",2)]),dt.value==="color"?(He(),$e("div",dE,[qt(_("input",{"onUpdate:modelValue":w[35]||(w[35]=N=>tt.value=N),type:"color",class:"color-picker",title:"انتخاب رنگ پس‌زمینه"},null,512),[[en,tt.value]]),_("button",{class:"tool-btn success",onClick:Ln}," 🎨 تغییر تمام مهره‌ها ")])):Dt("",!0),dt.value==="image"?(He(),$e("div",fE,[_("div",hE,[_("div",pE,[(He(!0),$e(Ht,null,En(m.value,N=>{var pe;return He(),$e("div",{key:N.name,class:Ye(["background-image-item",{selected:((pe=ft.value)==null?void 0:pe.url)===N.url}]),onClick:Ae=>ft.value=N},[_("img",{src:N.url,alt:N.displayName,class:"background-bead-image"},null,8,gE),_("span",vE,st(N.displayName),1)],10,mE)}),128))])]),_("button",{class:"tool-btn success",disabled:!ft.value,onClick:Ln}," 🖼️ تغییر تمام مهره‌ها ",8,_E)])):Dt("",!0)])]),_("div",bE,[_("div",xE,[w[82]||(w[82]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 📤 خروجی ",-1)),_("button",{class:Ye(["pin-btn",{pinned:C.value==="export"}]),title:C.value==="export"?"Unpin Section":"Pin Section",onClick:w[36]||(w[36]=N=>y("export"))},st((C.value==="export","📌")),11,yE)]),_("div",{class:"save-load-buttons mb-3"},[_("button",{class:"export-btn success",onClick:k}," 💾 ذخیره گرید "),_("button",{class:"export-btn info",onClick:S}," 📂 بارگذاری اخرین ذخیره ")]),_("div",wE,[_("button",{class:"export-btn primary",onClick:w[37]||(w[37]=N=>$.$emit("update-grid",he()))}," 🚀 ارسال به 3D "),_("button",{class:"export-btn success",onClick:w[38]||(w[38]=()=>Ee())}," 📷 خروجی عکس "),_("button",{class:"export-btn info",onClick:w[39]||(w[39]=()=>Fe())}," 🖼️ خروجی HD "),_("button",{class:"export-btn warning",onClick:be}," 📄 خروجی TXT ")])])])])])],2),_("div",SE,[w[99]||(w[99]=_("div",{class:"controls-header"},[_("h3",{class:"mb-4 text-lg font-bold text-gray-800"},"🎨 ابزارهای طراحی")],-1)),_("div",ME,[_("div",EE,[w[89]||(w[89]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 📐 ابعاد شبکه ",-1)),_("div",TE,[_("label",AE,[w[84]||(w[84]=_("span",{class:"dimension-text"},"ستون ها:",-1)),qt(_("input",{"onUpdate:modelValue":w[40]||(w[40]=N=>i.value=N),type:"number",min:"1",class:"dimension-input"},null,512),[[en,i.value,void 0,{number:!0}]])]),_("label",CE,[w[85]||(w[85]=_("span",{class:"dimension-text"},"ردیف ها:",-1)),qt(_("input",{"onUpdate:modelValue":w[41]||(w[41]=N=>s.value=N),type:"number",min:"1",class:"dimension-input"},null,512),[[en,s.value,void 0,{number:!0}]])])]),_("div",RE,[w[88]||(w[88]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 📏 اندازه سلول ",-1)),_("div",PE,[_("label",DE,[w[86]||(w[86]=_("span",{class:"dimension-text"},"عرض:",-1)),qt(_("input",{"onUpdate:modelValue":w[42]||(w[42]=N=>r.value=N),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[en,r.value,void 0,{number:!0}]])]),_("label",LE,[w[87]||(w[87]=_("span",{class:"dimension-text"},"ارتفاع:",-1)),qt(_("input",{"onUpdate:modelValue":w[43]||(w[43]=N=>o.value=N),type:"number",min:"5",max:"50",class:"dimension-input"},null,512),[[en,o.value,void 0,{number:!0}]])])])])]),_("div",IE,[w[90]||(w[90]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"🔄 جهت",-1)),_("div",UE,[_("button",{class:Ye(["direction-btn",{active:u.value}]),onClick:w[44]||(w[44]=N=>u.value=!u.value)},st(u.value?"عمودی":"افقی"),3)]),_("div",OE,[_("button",{class:Ye(["direction-btn",{active:d.value}]),onClick:w[45]||(w[45]=N=>d.value=!d.value)},st(d.value?"گرید عمودی":"گرید افقی"),3)])]),_("div",NE,[w[92]||(w[92]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🎨 انتخاب رنگ ",-1)),_("div",FE,[qt(_("input",{"onUpdate:modelValue":w[46]||(w[46]=N=>a.value=N),type:"color",class:"color-picker"},null,512),[[en,a.value]]),_("span",kE,st(a.value),1)]),_("div",BE,[w[91]||(w[91]=_("h4",{class:"text-sm font-semibold text-gray-700"},"🔄 رنگ‌های اخیر",-1)),l.value.length>0?(He(),$e("button",{key:0,class:"clear-colors-btn",title:"پاک کردن تمام رنگ‌ها",onClick:F}," 🗑️ پاک کردن ")):Dt("",!0)]),_("div",HE,[(He(!0),$e(Ht,null,En(l.value,N=>(He(),$e("div",{key:N,class:"color-swatch",style:jn({backgroundColor:N}),title:N,onClick:pe=>a.value=N},[_("button",{class:"remove-color-btn",onClick:Mo(pe=>x(N),["stop"])}," × ",8,VE)],12,zE))),128))])]),_("div",GE,[w[93]||(w[93]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🎨 حالت طراحی ",-1)),_("div",WE,[_("button",{class:Ye(["mode-btn",{active:h.value==="color"}]),onClick:w[47]||(w[47]=N=>h.value="color")}," 🎨 رنگ ",2),_("button",{class:Ye(["mode-btn",{active:h.value==="image"}]),onClick:w[48]||(w[48]=N=>h.value="image")}," 🖼️ تصویر ",2)])]),h.value==="image"?(He(),$e("div",$E,[w[95]||(w[95]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🖼️ انتخاب تصویر مهره ",-1)),_("div",XE,[_("div",jE,[(He(!0),$e(Ht,null,En(m.value,N=>{var pe;return He(),$e("div",{key:N.name,class:Ye(["image-item",{selected:((pe=g.value)==null?void 0:pe.url)===N.url}]),onClick:Ae=>de(N)},[_("img",{src:N.url,alt:N.displayName,class:"bead-image"},null,8,YE),_("span",KE,st(N.displayName),1)],10,qE)}),128))])]),b.value.length>0?(He(),$e("div",ZE,[_("div",{class:"recent-images-header"},[w[94]||(w[94]=_("h4",{class:"text-sm font-semibold text-gray-700"}," 🔄 تصاویر اخیر ",-1)),_("button",{class:"clear-images-btn",title:"پاک کردن تمام تصاویر",onClick:M}," 🗑️ پاک کردن ")]),_("div",QE,[(He(!0),$e(Ht,null,En(b.value,N=>{var pe;return He(),$e("div",{key:N.url,class:Ye(["recent-image-item",{selected:((pe=g.value)==null?void 0:pe.url)===N.url}]),onClick:Ae=>de(N)},[_("img",{src:N.url,alt:N.displayName,class:"recent-bead-image"},null,8,eT),_("button",{class:"remove-image-btn",onClick:Mo(Ae=>Pe(N),["stop"])}," × ",8,tT)],10,JE)}),128))])])):Dt("",!0)])):Dt("",!0),_("div",nT,[w[97]||(w[97]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"🛠️ ابزارها",-1)),_("div",iT,[_("button",{class:Ye(["tool-btn primary",{active:ee.value==="paint"}]),onClick:w[49]||(w[49]=N=>oe("paint"))}," 🖌️ Paint ",2),_("button",{class:Ye(["tool-btn primary",{active:ee.value==="fill"}]),onClick:w[50]||(w[50]=N=>oe("fill"))}," 🪣 Fill ",2),_("button",{class:Ye(["tool-btn secondary",{active:ee.value==="select"}]),onClick:w[51]||(w[51]=N=>oe("select"))}," 📐 Select ",2),_("button",{class:"tool-btn secondary",onClick:ve}," 📋 Copy "),_("button",{class:"tool-btn secondary",onClick:De}," ✂️ Cut "),_("button",{class:"tool-btn secondary",onClick:Ue}," 📥 Paste "),_("button",{class:"tool-btn secondary",onClick:Oe}," 📍 Paste at Center "),_("button",{class:"tool-btn secondary",disabled:!me(),onClick:Te}," 🎯 Select Paste Position ",8,sT),V.value?(He(),$e("button",{key:0,class:"tool-btn danger",onClick:H}," ❌ Cancel Paste ")):Dt("",!0),_("button",{class:"tool-btn secondary",onClick:_e}," 🗑️ Clear Selection "),_("button",{class:"tool-btn secondary",disabled:W.value.length===0,onClick:Ce}," 🔄 Mirror Selection ",8,rT),_("button",{class:"tool-btn secondary",disabled:W.value.length===0,onClick:Be}," ↕️ Mirror Selection Vertical ",8,oT),_("button",{class:"tool-btn secondary",onClick:ye}," ↩️ Undo "),_("button",{class:"tool-btn secondary",onClick:B}," ↪️ Redo ")]),_("div",aT,[w[96]||(w[96]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"}," 🎨 پس‌زمینه ",-1)),_("div",lT,[_("button",{class:Ye(["mode-btn",{active:dt.value==="color"}]),onClick:w[52]||(w[52]=N=>dt.value="color")}," 🎨 رنگ ",2),_("button",{class:Ye(["mode-btn",{active:dt.value==="image"}]),onClick:w[53]||(w[53]=N=>dt.value="image")}," 🖼️ تصویر ",2)]),dt.value==="color"?(He(),$e("div",cT,[qt(_("input",{"onUpdate:modelValue":w[54]||(w[54]=N=>tt.value=N),type:"color",class:"color-picker",title:"انتخاب رنگ پس‌زمینه"},null,512),[[en,tt.value]]),_("button",{class:"tool-btn success",onClick:Ln}," 🎨 تغییر تمام مهره‌ها ")])):Dt("",!0),dt.value==="image"?(He(),$e("div",uT,[_("div",dT,[_("div",fT,[(He(!0),$e(Ht,null,En(m.value,N=>{var pe;return He(),$e("div",{key:N.name,class:Ye(["background-image-item",{selected:((pe=ft.value)==null?void 0:pe.url)===N.url}]),onClick:Ae=>ft.value=N},[_("img",{src:N.url,alt:N.displayName,class:"background-bead-image"},null,8,pT),_("span",mT,st(N.displayName),1)],10,hT)}),128))])]),_("button",{class:"tool-btn success",disabled:!ft.value,onClick:Ln}," 🖼️ تغییر تمام مهره‌ها ",8,gT)])):Dt("",!0)])]),_("div",vT,[w[98]||(w[98]=_("h4",{class:"mb-2 text-sm font-semibold text-gray-700"},"📤 خروجی",-1)),_("div",{class:"save-load-buttons mb-3"},[_("button",{class:"export-btn success",onClick:k}," 💾 ذخیره گرید "),_("button",{class:"export-btn info",onClick:S}," 📂 بارگذاری اخرین ذخیره ")]),_("div",_T,[_("button",{class:"export-btn primary",onClick:w[55]||(w[55]=N=>$.$emit("update-grid",he()))}," 🚀 ارسال به 3D "),_("button",{class:"export-btn success",onClick:w[56]||(w[56]=()=>Ee())}," 📷 خروجی عکس "),_("button",{class:"export-btn info",onClick:w[57]||(w[57]=()=>Fe())}," 🖼️ خروجی HD "),_("button",{class:"export-btn warning",onClick:be}," 📄 خروجی TXT ")])])])]),_("div",{class:Ye(["grid-container max-md:min-h-[calc(100vh_-_310px)] md:max-h-[calc(100vh_-_200px)]",{"!flex-row":u.value,"!flex-col-reverse":!u.value,"pinned-active":C.value}])},[_("div",bT,[_("div",xT,[_("label",yT,[w[100]||(w[100]=_("span",{class:"upload-text"},"📁 آپلود فایل txt grid",-1)),_("input",{type:"file",accept:".txt",class:"upload-input",onChange:ue},null,32)]),_("label",wT,[w[101]||(w[101]=_("span",{class:"upload-text"},"📁 آپلود تصویر",-1)),_("input",{type:"file",accept:"image/*",class:"upload-input",onChange:Ve},null,32)])]),f.value?(He(),$e("div",ST,[_("img",{src:f.value,alt:"تصویر انتخاب شده",class:"preview-image"},null,8,MT)])):Dt("",!0)]),_("div",{class:Ye(["grid-wrapper",{"rotate-none":d.value,"z-10 h-fit! min-h-fit! w-fit! translate-x-[200%] translate-y-[10%] rotate-90":!d.value}])},[_("div",{class:"grid-item",style:jn({gridTemplateColumns:`repeat(${i.value}, ${r.value}px)`,gridAutoRows:`${o.value}px`}),onMousedown:Qe,onMouseup:R,onMouseleave:R,onMousemove:v,onTouchstart:z,onTouchmove:K,onTouchend:se,onTouchcancel:se},[(He(!0),$e(Ht,null,En(P.value,(N,pe)=>(He(),$e("div",{key:pe,class:Ye(["cell",{"!border-red-200":pe==Math.floor(i.value*s.value/2)}]),style:jn({backgroundColor:N.startsWith("/miyuki-beads-designer/beads/")?"transparent":N,backgroundImage:N.startsWith("/miyuki-beads-designer/beads/")?`url(${N})`:"none",backgroundSize:"cover",backgroundPosition:"center",border:W.value.includes(pe)?"2px dashed #ff4757":"1px solid #ddd",width:`${r.value}px`,height:`${o.value}px`,minWidth:`${r.value}px`,minHeight:`${o.value}px`}),onClick:Ae=>Ie(pe)},null,14,ET))),128))],36)],2)],2)]))}},AT=ma(TT,[["__scopeId","data-v-9a0afde8"]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qd="179",Vr={ROTATE:0,DOLLY:1,PAN:2},Ir={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},CT=0,yh=1,RT=2,tv=1,PT=2,Wi=3,Rs=0,Bn=1,Ki=2,As=0,Gr=1,wh=2,Sh=3,Mh=4,DT=5,Xs=100,LT=101,IT=102,UT=103,OT=104,NT=200,FT=201,kT=202,BT=203,wu=204,Su=205,HT=206,zT=207,VT=208,GT=209,WT=210,$T=211,XT=212,jT=213,qT=214,Mu=0,Eu=1,Tu=2,ao=3,Au=4,Cu=5,Ru=6,Pu=7,nv=0,YT=1,KT=2,Cs=0,ZT=1,QT=2,JT=3,eA=4,tA=5,nA=6,iA=7,iv=300,lo=301,co=302,Du=303,Lu=304,tc=306,Iu=1e3,qs=1001,Uu=1002,gi=1003,sA=1004,Ua=1005,Ai=1006,Mc=1007,Ys=1008,Oi=1009,sv=1010,rv=1011,ea=1012,Yd=1013,or=1014,Zi=1015,wa=1016,Kd=1017,Zd=1018,ta=1020,ov=35902,av=1021,lv=1022,hi=1023,na=1026,ia=1027,cv=1028,Qd=1029,uv=1030,Jd=1031,ef=1033,ul=33776,dl=33777,fl=33778,hl=33779,Ou=35840,Nu=35841,Fu=35842,ku=35843,Bu=36196,Hu=37492,zu=37496,Vu=37808,Gu=37809,Wu=37810,$u=37811,Xu=37812,ju=37813,qu=37814,Yu=37815,Ku=37816,Zu=37817,Qu=37818,Ju=37819,ed=37820,td=37821,pl=36492,nd=36494,id=36495,dv=36283,sd=36284,rd=36285,od=36286,rA=3200,oA=3201,fv=0,aA=1,vs="",pn="srgb",uo="srgb-linear",Ol="linear",Lt="srgb",mr=7680,Eh=519,lA=512,cA=513,uA=514,hv=515,dA=516,fA=517,hA=518,pA=519,Th=35044,Ah="300 es",Ci=2e3,Nl=2001;class fr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ml=Math.PI/180,ad=180/Math.PI;function Sa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[t&255]+dn[t>>8&255]+dn[t>>16&255]+dn[t>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[n&63|128]+dn[n>>8&255]+"-"+dn[n>>16&255]+dn[n>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function gt(t,e,n){return Math.max(e,Math.min(n,t))}function mA(t,e){return(t%e+e)%e}function Ec(t,e,n){return(1-n)*t+n*e}function Co(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function On(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const gA={DEG2RAD:ml};class lt{constructor(e=0,n=0){lt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ar{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const f=r[o+0],h=r[o+1],g=r[o+2],b=r[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=h,e[n+2]=g,e[n+3]=b;return}if(d!==b||l!==f||c!==h||u!==g){let m=1-a;const p=l*f+c*h+u*g+d*b,C=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const D=Math.sqrt(E),L=Math.atan2(D,p*C);m=Math.sin(m*L)/D,a=Math.sin(a*L)/D}const y=a*C;if(l=l*m+f*y,c=c*m+h*y,u=u*m+g*y,d=d*m+b*y,m===1-a){const D=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=D,c*=D,u*=D,d*=D}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],h=r[o+2],g=r[o+3];return e[n]=a*g+u*d+l*h-c*f,e[n+1]=l*g+u*f+c*d-a*h,e[n+2]=c*g+u*h+a*f-l*d,e[n+3]=u*g-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),h=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"YZX":this._x=f*u*d+c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d-f*h*g;break;case"XZY":this._x=f*u*d-c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-n;return this._w=h*o+n*this._w,this._x=h*i+n*this._x,this._y=h*s+n*this._y,this._z=h*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,n=0,i=0){J.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ch.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ch.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),d=2*(r*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Tc.copy(this).projectOnVector(e),this.sub(Tc)}reflect(e){return this.sub(Tc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tc=new J,Ch=new ar;class pt{constructor(e,n,i,s,r,o,a,l,c){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],b=s[0],m=s[3],p=s[6],C=s[1],E=s[4],y=s[7],D=s[2],L=s[5],P=s[8];return r[0]=o*b+a*C+l*D,r[3]=o*m+a*E+l*L,r[6]=o*p+a*y+l*P,r[1]=c*b+u*C+d*D,r[4]=c*m+u*E+d*L,r[7]=c*p+u*y+d*P,r[2]=f*b+h*C+g*D,r[5]=f*m+h*E+g*L,r[8]=f*p+h*y+g*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*r,h=c*r-o*l,g=n*d+i*f+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return e[0]=d*b,e[1]=(s*c-u*i)*b,e[2]=(a*i-s*o)*b,e[3]=f*b,e[4]=(u*n-s*l)*b,e[5]=(s*r-a*n)*b,e[6]=h*b,e[7]=(i*l-c*n)*b,e[8]=(o*n-i*r)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Ac.makeScale(e,n)),this}rotate(e){return this.premultiply(Ac.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ac.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ac=new pt;function pv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function sa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function vA(){const t=sa("canvas");return t.style.display="block",t}const Rh={};function Wr(t){t in Rh||(Rh[t]=!0,console.warn(t))}function _A(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const Ph=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dh=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bA(){const t={enabled:!0,workingColorSpace:uo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Lt&&(s.r=ts(s.r),s.g=ts(s.g),s.b=ts(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Lt&&(s.r=$r(s.r),s.g=$r(s.g),s.b=$r(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vs?Ol:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Wr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Wr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[uo]:{primaries:e,whitePoint:i,transfer:Ol,toXYZ:Ph,fromXYZ:Dh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:e,whitePoint:i,transfer:Lt,toXYZ:Ph,fromXYZ:Dh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),t}const Mt=bA();function ts(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function $r(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let gr;class xA{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{gr===void 0&&(gr=sa("canvas")),gr.width=e.width,gr.height=e.height;const s=gr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=gr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=sa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ts(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ts(n[i]/255)*255):n[i]=ts(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yA=0;class tf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yA++}),this.uuid=Sa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Cc(s[o].image)):r.push(Cc(s[o]))}else r=Cc(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Cc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?xA.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wA=0;const Rc=new J;class Rn extends fr{constructor(e=Rn.DEFAULT_IMAGE,n=Rn.DEFAULT_MAPPING,i=qs,s=qs,r=Ai,o=Ys,a=hi,l=Oi,c=Rn.DEFAULT_ANISOTROPY,u=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wA++}),this.uuid=Sa(),this.name="",this.source=new tf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Rc).x}get height(){return this.source.getSize(Rc).y}get depth(){return this.source.getSize(Rc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==iv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Iu:e.x=e.x-Math.floor(e.x);break;case qs:e.x=e.x<0?0:1;break;case Uu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Iu:e.y=e.y-Math.floor(e.y);break;case qs:e.y=e.y<0?0:1;break;case Uu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=iv;Rn.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,n=0,i=0,s=1){jt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],g=l[9],b=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+b)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,y=(h+1)/2,D=(p+1)/2,L=(u+f)/4,P=(d+b)/4,k=(g+m)/4;return E>y&&E>D?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=L/i,r=P/i):y>D?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=L/s,r=k/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=P/r,s=k/r),this.set(i,s,r,n),this}let C=Math.sqrt((m-g)*(m-g)+(d-b)*(d-b)+(f-u)*(f-u));return Math.abs(C)<.001&&(C=1),this.x=(m-g)/C,this.y=(d-b)/C,this.z=(f-u)/C,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this.w=gt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this.w=gt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class SA extends fr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new jt(0,0,e,n),this.scissorTest=!1,this.viewport=new jt(0,0,e,n);const s={width:e,height:n,depth:i.depth},r=new Rn(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Ai,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new tf(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lr extends SA{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class mv extends Rn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=gi,this.minFilter=gi,this.wrapR=qs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class MA extends Rn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=gi,this.minFilter=gi,this.wrapR=qs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ma{constructor(e=new J(1/0,1/0,1/0),n=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(oi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(oi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=oi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,oi):oi.fromBufferAttribute(r,o),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oa.copy(i.boundingBox)),Oa.applyMatrix4(e.matrixWorld),this.union(Oa)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),Na.subVectors(this.max,Ro),vr.subVectors(e.a,Ro),_r.subVectors(e.b,Ro),br.subVectors(e.c,Ro),rs.subVectors(_r,vr),os.subVectors(br,_r),ks.subVectors(vr,br);let n=[0,-rs.z,rs.y,0,-os.z,os.y,0,-ks.z,ks.y,rs.z,0,-rs.x,os.z,0,-os.x,ks.z,0,-ks.x,-rs.y,rs.x,0,-os.y,os.x,0,-ks.y,ks.x,0];return!Pc(n,vr,_r,br,Na)||(n=[1,0,0,0,1,0,0,0,1],!Pc(n,vr,_r,br,Na))?!1:(Fa.crossVectors(rs,os),n=[Fa.x,Fa.y,Fa.z],Pc(n,vr,_r,br,Na))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Bi=[new J,new J,new J,new J,new J,new J,new J,new J],oi=new J,Oa=new Ma,vr=new J,_r=new J,br=new J,rs=new J,os=new J,ks=new J,Ro=new J,Na=new J,Fa=new J,Bs=new J;function Pc(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){Bs.fromArray(t,r);const a=s.x*Math.abs(Bs.x)+s.y*Math.abs(Bs.y)+s.z*Math.abs(Bs.z),l=e.dot(Bs),c=n.dot(Bs),u=i.dot(Bs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const EA=new Ma,Po=new J,Dc=new J;class nf{constructor(e=new J,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):EA.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const n=Po.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Po,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(Dc)),this.expandByPoint(Po.copy(e.center).sub(Dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Hi=new J,Lc=new J,ka=new J,as=new J,Ic=new J,Ba=new J,Uc=new J;class gv{constructor(e=new J,n=new J(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Hi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,n),Hi.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Lc.copy(e).add(n).multiplyScalar(.5),ka.copy(n).sub(e).normalize(),as.copy(this.origin).sub(Lc);const r=e.distanceTo(n)*.5,o=-this.direction.dot(ka),a=as.dot(this.direction),l=-as.dot(ka),c=as.lengthSq(),u=Math.abs(1-o*o);let d,f,h,g;if(u>0)if(d=o*l-a,f=o*a-l,g=r*u,d>=0)if(f>=-g)if(f<=g){const b=1/u;d*=b,f*=b,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Lc).addScaledVector(ka,f),h}intersectSphere(e,n){Hi.subVectors(e.center,this.origin);const i=Hi.dot(this.direction),s=Hi.dot(Hi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,n,i,s,r){Ic.subVectors(n,e),Ba.subVectors(i,e),Uc.crossVectors(Ic,Ba);let o=this.direction.dot(Uc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;as.subVectors(this.origin,e);const l=a*this.direction.dot(Ba.crossVectors(as,Ba));if(l<0)return null;const c=a*this.direction.dot(Ic.cross(as));if(c<0||l+c>o)return null;const u=-a*as.dot(Uc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(e,n,i,s,r,o,a,l,c,u,d,f,h,g,b,m){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,d,f,h,g,b,m)}set(e,n,i,s,r,o,a,l,c,u,d,f,h,g,b,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/xr.setFromMatrixColumn(e,0).length(),r=1/xr.setFromMatrixColumn(e,1).length(),o=1/xr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,h=o*d,g=a*u,b=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=h+g*c,n[5]=f-b*c,n[9]=-a*l,n[2]=b-f*c,n[6]=g+h*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,g=c*u,b=c*d;n[0]=f+b*a,n[4]=g*a-h,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=h*a-g,n[6]=b+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,g=c*u,b=c*d;n[0]=f-b*a,n[4]=-o*d,n[8]=g+h*a,n[1]=h+g*a,n[5]=o*u,n[9]=b-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,h=o*d,g=a*u,b=a*d;n[0]=l*u,n[4]=g*c-h,n[8]=f*c+b,n[1]=l*d,n[5]=b*c+f,n[9]=h*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*c,g=a*l,b=a*c;n[0]=l*u,n[4]=b-f*d,n[8]=g*d+h,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*d+g,n[10]=f-b*d}else if(e.order==="XZY"){const f=o*l,h=o*c,g=a*l,b=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+b,n[5]=o*u,n[9]=h*d-g,n[2]=g*d-h,n[6]=a*u,n[10]=b*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(TA,e,AA)}lookAt(e,n,i){const s=this.elements;return Gn.subVectors(e,n),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),ls.crossVectors(i,Gn),ls.lengthSq()===0&&(Math.abs(i.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),ls.crossVectors(i,Gn)),ls.normalize(),Ha.crossVectors(Gn,ls),s[0]=ls.x,s[4]=Ha.x,s[8]=Gn.x,s[1]=ls.y,s[5]=Ha.y,s[9]=Gn.y,s[2]=ls.z,s[6]=Ha.z,s[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],b=i[6],m=i[10],p=i[14],C=i[3],E=i[7],y=i[11],D=i[15],L=s[0],P=s[4],k=s[8],S=s[12],A=s[1],U=s[5],W=s[9],O=s[13],I=s[2],G=s[6],V=s[10],ee=s[14],Y=s[3],xe=s[7],Me=s[11],Le=s[15];return r[0]=o*L+a*A+l*I+c*Y,r[4]=o*P+a*U+l*G+c*xe,r[8]=o*k+a*W+l*V+c*Me,r[12]=o*S+a*O+l*ee+c*Le,r[1]=u*L+d*A+f*I+h*Y,r[5]=u*P+d*U+f*G+h*xe,r[9]=u*k+d*W+f*V+h*Me,r[13]=u*S+d*O+f*ee+h*Le,r[2]=g*L+b*A+m*I+p*Y,r[6]=g*P+b*U+m*G+p*xe,r[10]=g*k+b*W+m*V+p*Me,r[14]=g*S+b*O+m*ee+p*Le,r[3]=C*L+E*A+y*I+D*Y,r[7]=C*P+E*U+y*G+D*xe,r[11]=C*k+E*W+y*V+D*Me,r[15]=C*S+E*O+y*ee+D*Le,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],b=e[7],m=e[11],p=e[15];return g*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*h-i*l*h)+b*(+n*l*h-n*c*f+r*o*f-s*o*h+s*c*u-r*l*u)+m*(+n*c*d-n*a*h-r*o*d+i*o*h+r*a*u-i*c*u)+p*(-s*a*u-n*l*d+n*a*f+s*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],b=e[13],m=e[14],p=e[15],C=d*m*c-b*f*c+b*l*h-a*m*h-d*l*p+a*f*p,E=g*f*c-u*m*c-g*l*h+o*m*h+u*l*p-o*f*p,y=u*b*c-g*d*c+g*a*h-o*b*h-u*a*p+o*d*p,D=g*d*l-u*b*l-g*a*f+o*b*f+u*a*m-o*d*m,L=n*C+i*E+s*y+r*D;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return e[0]=C*P,e[1]=(b*f*r-d*m*r-b*s*h+i*m*h+d*s*p-i*f*p)*P,e[2]=(a*m*r-b*l*r+b*s*c-i*m*c-a*s*p+i*l*p)*P,e[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*h-i*l*h)*P,e[4]=E*P,e[5]=(u*m*r-g*f*r+g*s*h-n*m*h-u*s*p+n*f*p)*P,e[6]=(g*l*r-o*m*r-g*s*c+n*m*c+o*s*p-n*l*p)*P,e[7]=(o*f*r-u*l*r+u*s*c-n*f*c-o*s*h+n*l*h)*P,e[8]=y*P,e[9]=(g*d*r-u*b*r-g*i*h+n*b*h+u*i*p-n*d*p)*P,e[10]=(o*b*r-g*a*r+g*i*c-n*b*c-o*i*p+n*a*p)*P,e[11]=(u*a*r-o*d*r-u*i*c+n*d*c+o*i*h-n*a*h)*P,e[12]=D*P,e[13]=(u*b*s-g*d*s+g*i*f-n*b*f-u*i*m+n*d*m)*P,e[14]=(g*a*s-o*b*s-g*i*l+n*b*l+o*i*m-n*a*m)*P,e[15]=(o*d*s-u*a*s+u*i*l-n*d*l-o*i*f+n*a*f)*P,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,d=a+a,f=r*c,h=r*u,g=r*d,b=o*u,m=o*d,p=a*d,C=l*c,E=l*u,y=l*d,D=i.x,L=i.y,P=i.z;return s[0]=(1-(b+p))*D,s[1]=(h+y)*D,s[2]=(g-E)*D,s[3]=0,s[4]=(h-y)*L,s[5]=(1-(f+p))*L,s[6]=(m+C)*L,s[7]=0,s[8]=(g+E)*P,s[9]=(m-C)*P,s[10]=(1-(f+b))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let r=xr.set(s[0],s[1],s[2]).length();const o=xr.set(s[4],s[5],s[6]).length(),a=xr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ai.copy(this);const c=1/r,u=1/o,d=1/a;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=u,ai.elements[5]*=u,ai.elements[6]*=u,ai.elements[8]*=d,ai.elements[9]*=d,ai.elements[10]*=d,n.setFromRotationMatrix(ai),i.x=r,i.y=o,i.z=a,this}makePerspective(e,n,i,s,r,o,a=Ci,l=!1){const c=this.elements,u=2*r/(n-e),d=2*r/(i-s),f=(n+e)/(n-e),h=(i+s)/(i-s);let g,b;if(l)g=r/(o-r),b=o*r/(o-r);else if(a===Ci)g=-(o+r)/(o-r),b=-2*o*r/(o-r);else if(a===Nl)g=-o/(o-r),b=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=Ci,l=!1){const c=this.elements,u=2/(n-e),d=2/(i-s),f=-(n+e)/(n-e),h=-(i+s)/(i-s);let g,b;if(l)g=1/(o-r),b=o/(o-r);else if(a===Ci)g=-2/(o-r),b=-(o+r)/(o-r);else if(a===Nl)g=-1/(o-r),b=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const xr=new J,ai=new Kt,TA=new J(0,0,0),AA=new J(1,1,1),ls=new J,Ha=new J,Gn=new J,Lh=new Kt,Ih=new ar;class Ni{constructor(e=0,n=0,i=0,s=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(n){case"XYZ":this._y=Math.asin(gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Lh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ih.setFromEuler(this),this.setFromQuaternion(Ih,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class vv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let CA=0;const Uh=new J,yr=new ar,zi=new Kt,za=new J,Do=new J,RA=new J,PA=new ar,Oh=new J(1,0,0),Nh=new J(0,1,0),Fh=new J(0,0,1),kh={type:"added"},DA={type:"removed"},wr={type:"childadded",child:null},Oc={type:"childremoved",child:null};class _n extends fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CA++}),this.uuid=Sa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const e=new J,n=new Ni,i=new ar,s=new J(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Kt},normalMatrix:{value:new pt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return yr.setFromAxisAngle(e,n),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,n){return yr.setFromAxisAngle(e,n),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(Oh,e)}rotateY(e){return this.rotateOnAxis(Nh,e)}rotateZ(e){return this.rotateOnAxis(Fh,e)}translateOnAxis(e,n){return Uh.copy(e).applyQuaternion(this.quaternion),this.position.add(Uh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Oh,e)}translateY(e){return this.translateOnAxis(Nh,e)}translateZ(e){return this.translateOnAxis(Fh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?za.copy(e):za.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(Do,za,this.up):zi.lookAt(za,Do,this.up),this.quaternion.setFromRotationMatrix(zi),s&&(zi.extractRotation(s.matrixWorld),yr.setFromRotationMatrix(zi),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kh),wr.child=e,this.dispatchEvent(wr),wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(DA),Oc.child=e,this.dispatchEvent(Oc),Oc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kh),wr.child=e,this.dispatchEvent(wr),wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,e,RA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,PA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}_n.DEFAULT_UP=new J(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new J,Vi=new J,Nc=new J,Gi=new J,Sr=new J,Mr=new J,Bh=new J,Fc=new J,kc=new J,Bc=new J,Hc=new jt,zc=new jt,Vc=new jt;class fi{constructor(e=new J,n=new J,i=new J){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),li.subVectors(e,n),s.cross(li);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){li.subVectors(s,n),Vi.subVectors(i,n),Nc.subVectors(e,n);const o=li.dot(li),a=li.dot(Vi),l=li.dot(Nc),c=Vi.dot(Vi),u=Vi.dot(Nc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-h-g,g,h)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,Gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gi.x),l.addScaledVector(o,Gi.y),l.addScaledVector(a,Gi.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return Hc.setScalar(0),zc.setScalar(0),Vc.setScalar(0),Hc.fromBufferAttribute(e,n),zc.fromBufferAttribute(e,i),Vc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Hc,r.x),o.addScaledVector(zc,r.y),o.addScaledVector(Vc,r.z),o}static isFrontFacing(e,n,i,s){return li.subVectors(i,n),Vi.subVectors(e,n),li.cross(Vi).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),li.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return fi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return fi.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;Sr.subVectors(s,i),Mr.subVectors(r,i),Fc.subVectors(e,i);const l=Sr.dot(Fc),c=Mr.dot(Fc);if(l<=0&&c<=0)return n.copy(i);kc.subVectors(e,s);const u=Sr.dot(kc),d=Mr.dot(kc);if(u>=0&&d<=u)return n.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Sr,o);Bc.subVectors(e,r);const h=Sr.dot(Bc),g=Mr.dot(Bc);if(g>=0&&h<=g)return n.copy(r);const b=h*c-l*g;if(b<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Mr,a);const m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return Bh.subVectors(r,s),a=(d-u)/(d-u+(h-g)),n.copy(s).addScaledVector(Bh,a);const p=1/(m+b+f);return o=b*p,a=f*p,n.copy(i).addScaledVector(Sr,o).addScaledVector(Mr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _v={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},Va={h:0,s:0,l:0};function Gc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class yt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=Mt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Mt.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=Mt.workingColorSpace){if(e=mA(e,1),n=gt(n,0,1),i=gt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Gc(o,r,e+1/3),this.g=Gc(o,r,e),this.b=Gc(o,r,e-1/3)}return Mt.colorSpaceToWorking(this,s),this}setStyle(e,n=pn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=pn){const i=_v[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}copyLinearToSRGB(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return Mt.workingToColorSpace(fn.copy(this),e),Math.round(gt(fn.r*255,0,255))*65536+Math.round(gt(fn.g*255,0,255))*256+Math.round(gt(fn.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Mt.workingColorSpace){Mt.workingToColorSpace(fn.copy(this),n);const i=fn.r,s=fn.g,r=fn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Mt.workingColorSpace){return Mt.workingToColorSpace(fn.copy(this),n),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=pn){Mt.workingToColorSpace(fn.copy(this),e);const n=fn.r,i=fn.g,s=fn.b;return e!==pn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(cs),this.setHSL(cs.h+e,cs.s+n,cs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(cs),e.getHSL(Va);const i=Ec(cs.h,Va.h,n),s=Ec(cs.s,Va.s,n),r=Ec(cs.l,Va.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new yt;yt.NAMES=_v;let LA=0;class Ea extends fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:LA++}),this.uuid=Sa(),this.name="",this.type="Material",this.blending=Gr,this.side=Rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wu,this.blendDst=Su,this.blendEquation=Xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mr,this.stencilZFail=mr,this.stencilZPass=mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(i.blending=this.blending),this.side!==Rs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wu&&(i.blendSrc=this.blendSrc),this.blendDst!==Su&&(i.blendDst=this.blendDst),this.blendEquation!==Xs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ao&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==mr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==mr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bv extends Ea{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=nv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new J,Ga=new lt;let IA=0;class Pi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:IA++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Th,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ga.fromBufferAttribute(this,n),Ga.applyMatrix3(e),this.setXY(n,Ga.x,Ga.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.applyMatrix3(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.applyMatrix4(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.applyNormalMatrix(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.transformDirection(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Co(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=On(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Co(n,this.array)),n}setX(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Co(n,this.array)),n}setY(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Co(n,this.array)),n}setZ(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Co(n,this.array)),n}setW(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),i=On(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),i=On(i,this.array),s=On(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),i=On(i,this.array),s=On(s,this.array),r=On(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Th&&(e.usage=this.usage),e}}class xv extends Pi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class yv extends Pi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Di extends Pi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let UA=0;const ti=new Kt,Wc=new _n,Er=new J,Wn=new Ma,Lo=new Ma,on=new J;class Is extends fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UA++}),this.uuid=Sa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pv(e)?yv:xv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new pt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,n,i){return ti.makeTranslation(e,n,i),this.applyMatrix4(ti),this}scale(e,n,i){return ti.makeScale(e,n,i),this.applyMatrix4(ti),this}lookAt(e){return Wc.lookAt(e),Wc.updateMatrix(),this.applyMatrix4(Wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Di(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ma);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Wn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const i=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Lo.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Wn.min,Lo.min),Wn.expandByPoint(on),on.addVectors(Wn.max,Lo.max),Wn.expandByPoint(on)):(Wn.expandByPoint(Lo.min),Wn.expandByPoint(Lo.max))}Wn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)on.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(on));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)on.fromBufferAttribute(a,c),l&&(Er.fromBufferAttribute(e,c),on.add(Er)),s=Math.max(s,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let k=0;k<i.count;k++)a[k]=new J,l[k]=new J;const c=new J,u=new J,d=new J,f=new lt,h=new lt,g=new lt,b=new J,m=new J;function p(k,S,A){c.fromBufferAttribute(i,k),u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,A),f.fromBufferAttribute(r,k),h.fromBufferAttribute(r,S),g.fromBufferAttribute(r,A),u.sub(c),d.sub(c),h.sub(f),g.sub(f);const U=1/(h.x*g.y-g.x*h.y);isFinite(U)&&(b.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(U),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(U),a[k].add(b),a[S].add(b),a[A].add(b),l[k].add(m),l[S].add(m),l[A].add(m))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let k=0,S=C.length;k<S;++k){const A=C[k],U=A.start,W=A.count;for(let O=U,I=U+W;O<I;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const E=new J,y=new J,D=new J,L=new J;function P(k){D.fromBufferAttribute(s,k),L.copy(D);const S=a[k];E.copy(S),E.sub(D.multiplyScalar(D.dot(S))).normalize(),y.crossVectors(L,S);const U=y.dot(l[k])<0?-1:1;o.setXYZW(k,E.x,E.y,E.z,U)}for(let k=0,S=C.length;k<S;++k){const A=C[k],U=A.start,W=A.count;for(let O=U,I=U+W;O<I;O+=3)P(e.getX(O+0)),P(e.getX(O+1)),P(e.getX(O+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const s=new J,r=new J,o=new J,a=new J,l=new J,c=new J,u=new J,d=new J;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),b=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,b),o.fromBufferAttribute(n,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=n.count;f<h;f+=3)s.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)on.fromBufferAttribute(e,n),on.normalize(),e.setXYZ(n,on.x,on.y,on.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,g=0;for(let b=0,m=l.length;b<m;b++){a.isInterleavedBufferAttribute?h=l[b]*a.data.stride+a.offset:h=l[b]*u;for(let p=0;p<u;p++)f[g++]=c[h++]}return new Pi(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Is,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hh=new Kt,Hs=new gv,Wa=new nf,zh=new J,$a=new J,Xa=new J,ja=new J,$c=new J,qa=new J,Vh=new J,Ya=new J;class pi extends _n{constructor(e=new Is,n=new bv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){qa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&($c.fromBufferAttribute(d,e),o?qa.addScaledVector($c,u):qa.addScaledVector($c.sub(n),u))}n.add(qa)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wa.copy(i.boundingSphere),Wa.applyMatrix4(r),Hs.copy(e.ray).recast(e.near),!(Wa.containsPoint(Hs.origin)===!1&&(Hs.intersectSphere(Wa,zh)===null||Hs.origin.distanceToSquared(zh)>(e.far-e.near)**2))&&(Hh.copy(r).invert(),Hs.copy(e.ray).applyMatrix4(Hh),!(i.boundingBox!==null&&Hs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Hs)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,b=f.length;g<b;g++){const m=f[g],p=o[m.materialIndex],C=Math.max(m.start,h.start),E=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let y=C,D=E;y<D;y+=3){const L=a.getX(y),P=a.getX(y+1),k=a.getX(y+2);s=Ka(this,p,e,i,c,u,d,L,P,k),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,h.start),b=Math.min(a.count,h.start+h.count);for(let m=g,p=b;m<p;m+=3){const C=a.getX(m),E=a.getX(m+1),y=a.getX(m+2);s=Ka(this,o,e,i,c,u,d,C,E,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,b=f.length;g<b;g++){const m=f[g],p=o[m.materialIndex],C=Math.max(m.start,h.start),E=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let y=C,D=E;y<D;y+=3){const L=y,P=y+1,k=y+2;s=Ka(this,p,e,i,c,u,d,L,P,k),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,h.start),b=Math.min(l.count,h.start+h.count);for(let m=g,p=b;m<p;m+=3){const C=m,E=m+1,y=m+2;s=Ka(this,o,e,i,c,u,d,C,E,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function OA(t,e,n,i,s,r,o,a){let l;if(e.side===Bn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Rs,a),l===null)return null;Ya.copy(a),Ya.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ya);return c<n.near||c>n.far?null:{distance:c,point:Ya.clone(),object:t}}function Ka(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,$a),t.getVertexPosition(l,Xa),t.getVertexPosition(c,ja);const u=OA(t,e,n,i,$a,Xa,ja,Vh);if(u){const d=new J;fi.getBarycoord(Vh,$a,Xa,ja,d),s&&(u.uv=fi.getInterpolatedAttribute(s,a,l,c,d,new lt)),r&&(u.uv1=fi.getInterpolatedAttribute(r,a,l,c,d,new lt)),o&&(u.normal=fi.getInterpolatedAttribute(o,a,l,c,d,new J),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new J,materialIndex:0};fi.getNormal($a,Xa,ja,f.normal),u.face=f,u.barycoord=d}return u}class Ta extends Is{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,i,n,e,o,r,0),g("z","y","x",1,-1,i,n,-e,o,r,1),g("x","z","y",1,1,e,i,n,s,o,2),g("x","z","y",1,-1,e,i,-n,s,o,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Di(c,3)),this.setAttribute("normal",new Di(u,3)),this.setAttribute("uv",new Di(d,2));function g(b,m,p,C,E,y,D,L,P,k,S){const A=y/P,U=D/k,W=y/2,O=D/2,I=L/2,G=P+1,V=k+1;let ee=0,Y=0;const xe=new J;for(let Me=0;Me<V;Me++){const Le=Me*U-O;for(let Ge=0;Ge<G;Ge++){const _t=Ge*A-W;xe[b]=_t*C,xe[m]=Le*E,xe[p]=I,c.push(xe.x,xe.y,xe.z),xe[b]=0,xe[m]=0,xe[p]=L>0?1:-1,u.push(xe.x,xe.y,xe.z),d.push(Ge/P),d.push(1-Me/k),ee+=1}}for(let Me=0;Me<k;Me++)for(let Le=0;Le<P;Le++){const Ge=f+Le+G*Me,_t=f+Le+G*(Me+1),Ze=f+(Le+1)+G*(Me+1),ie=f+(Le+1)+G*Me;l.push(Ge,_t,ie),l.push(_t,Ze,ie),Y+=6}a.addGroup(h,Y,S),h+=Y,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function Sn(t){const e={};for(let n=0;n<t.length;n++){const i=fo(t[n]);for(const s in i)e[s]=i[s]}return e}function NA(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function wv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const FA={clone:fo,merge:Sn};var kA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ps extends Ea{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kA,this.fragmentShader=BA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.uniformsGroups=NA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Sv extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const us=new J,Gh=new lt,Wh=new lt;class Xn extends Sv{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ad*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ml*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ad*2*Math.atan(Math.tan(ml*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,n){return this.getViewBounds(e,Gh,Wh),n.subVectors(Wh,Gh)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ml*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Tr=-90,Ar=1;class HA extends _n{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Xn(Tr,Ar,e,n);s.layers=this.layers,this.add(s);const r=new Xn(Tr,Ar,e,n);r.layers=this.layers,this.add(r);const o=new Xn(Tr,Ar,e,n);o.layers=this.layers,this.add(o);const a=new Xn(Tr,Ar,e,n);a.layers=this.layers,this.add(a);const l=new Xn(Tr,Ar,e,n);l.layers=this.layers,this.add(l);const c=new Xn(Tr,Ar,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Nl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,o),e.setRenderTarget(i,2,s),e.render(n,a),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,s),e.render(n,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Mv extends Rn{constructor(e=[],n=lo,i,s,r,o,a,l,c,u){super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zA extends lr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Mv(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ta(5,5,5),r=new Ps({name:"CubemapFromEquirect",uniforms:fo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bn,blending:As});r.uniforms.tEquirect.value=n;const o=new pi(s,r),a=n.minFilter;return n.minFilter===Ys&&(n.minFilter=Ai),new HA(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}class Za extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VA={type:"move"};class Xc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Za,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Za,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Za,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const b of e.hand.values()){const m=n.getJointPose(b,i),p=this._getHandJoint(c,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;c.inputState.pinching&&f>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(VA)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Za;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Ev extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const jc=new J,GA=new J,WA=new pt;class ms{constructor(e=new J(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=jc.subVectors(i,n).cross(GA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(jc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||WA.getNormalMatrix(e),s=this.coplanarPoint(jc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zs=new nf,$A=new lt(.5,.5),Qa=new J;class sf{constructor(e=new ms,n=new ms,i=new ms,s=new ms,r=new ms,o=new ms){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ci,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],f=r[6],h=r[7],g=r[8],b=r[9],m=r[10],p=r[11],C=r[12],E=r[13],y=r[14],D=r[15];if(s[0].setComponents(c-o,h-u,p-g,D-C).normalize(),s[1].setComponents(c+o,h+u,p+g,D+C).normalize(),s[2].setComponents(c+a,h+d,p+b,D+E).normalize(),s[3].setComponents(c-a,h-d,p-b,D-E).normalize(),i)s[4].setComponents(l,f,m,y).normalize(),s[5].setComponents(c-l,h-f,p-m,D-y).normalize();else if(s[4].setComponents(c-l,h-f,p-m,D-y).normalize(),n===Ci)s[5].setComponents(c+l,h+f,p+m,D+y).normalize();else if(n===Nl)s[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(e){zs.center.set(0,0,0);const n=$A.distanceTo(e.center);return zs.radius=.7071067811865476+n,zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Qa.x=s.normal.x>0?e.max.x:e.min.x,Qa.y=s.normal.y>0?e.max.y:e.min.y,Qa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Qa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tv extends Rn{constructor(e,n,i=or,s,r,o,a=gi,l=gi,c,u=na,d=1){if(u!==na&&u!==ia)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class nc extends Is{constructor(e=1,n=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],f=[],h=[];let g=0;const b=[],m=i/2;let p=0;C(),o===!1&&(e>0&&E(!0),n>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new Di(d,3)),this.setAttribute("normal",new Di(f,3)),this.setAttribute("uv",new Di(h,2));function C(){const y=new J,D=new J;let L=0;const P=(n-e)/i;for(let k=0;k<=r;k++){const S=[],A=k/r,U=A*(n-e)+e;for(let W=0;W<=s;W++){const O=W/s,I=O*l+a,G=Math.sin(I),V=Math.cos(I);D.x=U*G,D.y=-A*i+m,D.z=U*V,d.push(D.x,D.y,D.z),y.set(G,P,V).normalize(),f.push(y.x,y.y,y.z),h.push(O,1-A),S.push(g++)}b.push(S)}for(let k=0;k<s;k++)for(let S=0;S<r;S++){const A=b[S][k],U=b[S+1][k],W=b[S+1][k+1],O=b[S][k+1];(e>0||S!==0)&&(u.push(A,U,O),L+=3),(n>0||S!==r-1)&&(u.push(U,W,O),L+=3)}c.addGroup(p,L,0),p+=L}function E(y){const D=g,L=new lt,P=new J;let k=0;const S=y===!0?e:n,A=y===!0?1:-1;for(let W=1;W<=s;W++)d.push(0,m*A,0),f.push(0,A,0),h.push(.5,.5),g++;const U=g;for(let W=0;W<=s;W++){const I=W/s*l+a,G=Math.cos(I),V=Math.sin(I);P.x=S*V,P.y=m*A,P.z=S*G,d.push(P.x,P.y,P.z),f.push(0,A,0),L.x=G*.5+.5,L.y=V*.5*A+.5,h.push(L.x,L.y),g++}for(let W=0;W<s;W++){const O=D+W,I=U+W;y===!0?u.push(I,I+1,O):u.push(I+1,I,O),k+=3}c.addGroup(p,k,y===!0?1:2),p+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ic extends Is{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,f=n/l,h=[],g=[],b=[],m=[];for(let p=0;p<u;p++){const C=p*f-o;for(let E=0;E<c;E++){const y=E*d-r;g.push(y,-C,0),b.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let C=0;C<a;C++){const E=C+c*p,y=C+c*(p+1),D=C+1+c*(p+1),L=C+1+c*p;h.push(E,y,L),h.push(y,D,L)}this.setIndex(h),this.setAttribute("position",new Di(g,3)),this.setAttribute("normal",new Di(b,3)),this.setAttribute("uv",new Di(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ic(e.width,e.height,e.widthSegments,e.heightSegments)}}class XA extends Ea{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fv,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fl extends XA{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class jA extends Ea{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qA extends Ea{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qc={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class YA{constructor(e,n,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const h=c[d],g=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const KA=new YA;class rf{constructor(e){this.manager=e!==void 0?e:KA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}rf.DEFAULT_MATERIAL_NAME="__DEFAULT";const Cr=new WeakMap;class ZA extends rf{constructor(e){super(e)}load(e,n,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=qc.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){n&&n(o),r.manager.itemEnd(e)},0);else{let d=Cr.get(o);d===void 0&&(d=[],Cr.set(o,d)),d.push({onLoad:n,onError:s})}return o}const a=sa("img");function l(){u(),n&&n(this);const d=Cr.get(this)||[];for(let f=0;f<d.length;f++){const h=d[f];h.onLoad&&h.onLoad(this)}Cr.delete(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),qc.remove(`image:${e}`);const f=Cr.get(this)||[];for(let h=0;h<f.length;h++){const g=f[h];g.onError&&g.onError(d)}Cr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),qc.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class Av extends rf{constructor(e){super(e)}load(e,n,i,s){const r=new Rn,o=new ZA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,n!==void 0&&n(r)},i,s),r}}class Cv extends _n{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Yc=new Kt,$h=new J,Xh=new J;class QA{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=Oi,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sf,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;$h.setFromMatrixPosition(e.matrixWorld),n.position.copy($h),Xh.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Xh),n.updateMatrixWorld(),Yc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yc,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Yc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Rv extends Sv{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class JA extends QA{constructor(){super(new Rv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ld extends Cv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new JA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Pv extends Cv{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class e1 extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class jh{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(gt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class t1 extends fr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function qh(t,e,n,i){const s=n1(i);switch(n){case av:return t*e;case cv:return t*e/s.components*s.byteLength;case Qd:return t*e/s.components*s.byteLength;case uv:return t*e*2/s.components*s.byteLength;case Jd:return t*e*2/s.components*s.byteLength;case lv:return t*e*3/s.components*s.byteLength;case hi:return t*e*4/s.components*s.byteLength;case ef:return t*e*4/s.components*s.byteLength;case ul:case dl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case fl:case hl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nu:case ku:return Math.max(t,16)*Math.max(e,8)/4;case Ou:case Fu:return Math.max(t,8)*Math.max(e,8)/2;case Bu:case Hu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case zu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Gu:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Wu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case $u:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Xu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ju:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case qu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Yu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ku:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Zu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Qu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ju:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ed:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case td:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case pl:case nd:case id:return Math.ceil(t/4)*Math.ceil(e/4)*16;case dv:case sd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case rd:case od:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function n1(t){switch(t){case Oi:case sv:return{byteLength:1,components:1};case ea:case rv:case wa:return{byteLength:2,components:1};case Kd:case Zd:return{byteLength:2,components:4};case or:case Yd:case Zi:return{byteLength:4,components:1};case ov:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Dv(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function i1(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],b=d[h];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++f,d[f]=b)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const b=d[h];t.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var s1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r1=`#ifdef USE_ALPHAHASH
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
#endif`,o1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,a1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,c1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u1=`#ifdef USE_AOMAP
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
#endif`,d1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,f1=`#ifdef USE_BATCHING
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
#endif`,h1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,p1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,m1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,g1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,v1=`#ifdef USE_IRIDESCENCE
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
#endif`,_1=`#ifdef USE_BUMPMAP
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
#endif`,b1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,x1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,y1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,M1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,E1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,T1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,A1=`#define PI 3.141592653589793
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
} // validated`,C1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,R1=`vec3 transformedNormal = objectNormal;
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
#endif`,P1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,D1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,I1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,U1="gl_FragColor = linearToOutputTexel( gl_FragColor );",O1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,N1=`#ifdef USE_ENVMAP
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
#endif`,F1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,k1=`#ifdef USE_ENVMAP
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
#endif`,B1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,H1=`#ifdef USE_ENVMAP
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
#endif`,z1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,V1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$1=`#ifdef USE_GRADIENTMAP
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
}`,X1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,q1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y1=`uniform bool receiveShadow;
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
#endif`,K1=`#ifdef USE_ENVMAP
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
#endif`,Z1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,J1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tC=`PhysicalMaterial material;
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
#endif`,nC=`struct PhysicalMaterial {
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
}`,iC=`
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
#endif`,sC=`#if defined( RE_IndirectDiffuse )
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
#endif`,rC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oC=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aC=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lC=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cC=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hC=`#if defined( USE_POINTS_UV )
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
#endif`,pC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_C=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bC=`#ifdef USE_MORPHTARGETS
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
#endif`,xC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,SC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TC=`#ifdef USE_NORMALMAP
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
#endif`,AC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,RC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,IC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,VC=`float getShadowMask() {
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
}`,GC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WC=`#ifdef USE_SKINNING
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
#endif`,$C=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,XC=`#ifdef USE_SKINNING
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
#endif`,jC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ZC=`#ifdef USE_TRANSMISSION
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
#endif`,QC=`#ifdef USE_TRANSMISSION
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
#endif`,JC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const i2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s2=`uniform sampler2D t2D;
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
}`,r2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,a2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c2=`#include <common>
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
}`,u2=`#if DEPTH_PACKING == 3200
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
}`,d2=`#define DISTANCE
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
}`,f2=`#define DISTANCE
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
}`,h2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m2=`uniform float scale;
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
}`,g2=`uniform vec3 diffuse;
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
}`,v2=`#include <common>
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
}`,_2=`uniform vec3 diffuse;
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
}`,b2=`#define LAMBERT
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
}`,x2=`#define LAMBERT
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
}`,y2=`#define MATCAP
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
}`,w2=`#define MATCAP
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
}`,S2=`#define NORMAL
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
}`,M2=`#define NORMAL
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
}`,E2=`#define PHONG
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
}`,T2=`#define PHONG
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
}`,A2=`#define STANDARD
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
}`,C2=`#define STANDARD
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
}`,R2=`#define TOON
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
}`,P2=`#define TOON
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
}`,D2=`uniform float size;
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
}`,L2=`uniform vec3 diffuse;
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
}`,I2=`#include <common>
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
}`,U2=`uniform vec3 color;
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
}`,O2=`uniform float rotation;
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
}`,N2=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:s1,alphahash_pars_fragment:r1,alphamap_fragment:o1,alphamap_pars_fragment:a1,alphatest_fragment:l1,alphatest_pars_fragment:c1,aomap_fragment:u1,aomap_pars_fragment:d1,batching_pars_vertex:f1,batching_vertex:h1,begin_vertex:p1,beginnormal_vertex:m1,bsdfs:g1,iridescence_fragment:v1,bumpmap_pars_fragment:_1,clipping_planes_fragment:b1,clipping_planes_pars_fragment:x1,clipping_planes_pars_vertex:y1,clipping_planes_vertex:w1,color_fragment:S1,color_pars_fragment:M1,color_pars_vertex:E1,color_vertex:T1,common:A1,cube_uv_reflection_fragment:C1,defaultnormal_vertex:R1,displacementmap_pars_vertex:P1,displacementmap_vertex:D1,emissivemap_fragment:L1,emissivemap_pars_fragment:I1,colorspace_fragment:U1,colorspace_pars_fragment:O1,envmap_fragment:N1,envmap_common_pars_fragment:F1,envmap_pars_fragment:k1,envmap_pars_vertex:B1,envmap_physical_pars_fragment:K1,envmap_vertex:H1,fog_vertex:z1,fog_pars_vertex:V1,fog_fragment:G1,fog_pars_fragment:W1,gradientmap_pars_fragment:$1,lightmap_pars_fragment:X1,lights_lambert_fragment:j1,lights_lambert_pars_fragment:q1,lights_pars_begin:Y1,lights_toon_fragment:Z1,lights_toon_pars_fragment:Q1,lights_phong_fragment:J1,lights_phong_pars_fragment:eC,lights_physical_fragment:tC,lights_physical_pars_fragment:nC,lights_fragment_begin:iC,lights_fragment_maps:sC,lights_fragment_end:rC,logdepthbuf_fragment:oC,logdepthbuf_pars_fragment:aC,logdepthbuf_pars_vertex:lC,logdepthbuf_vertex:cC,map_fragment:uC,map_pars_fragment:dC,map_particle_fragment:fC,map_particle_pars_fragment:hC,metalnessmap_fragment:pC,metalnessmap_pars_fragment:mC,morphinstance_vertex:gC,morphcolor_vertex:vC,morphnormal_vertex:_C,morphtarget_pars_vertex:bC,morphtarget_vertex:xC,normal_fragment_begin:yC,normal_fragment_maps:wC,normal_pars_fragment:SC,normal_pars_vertex:MC,normal_vertex:EC,normalmap_pars_fragment:TC,clearcoat_normal_fragment_begin:AC,clearcoat_normal_fragment_maps:CC,clearcoat_pars_fragment:RC,iridescence_pars_fragment:PC,opaque_fragment:DC,packing:LC,premultiplied_alpha_fragment:IC,project_vertex:UC,dithering_fragment:OC,dithering_pars_fragment:NC,roughnessmap_fragment:FC,roughnessmap_pars_fragment:kC,shadowmap_pars_fragment:BC,shadowmap_pars_vertex:HC,shadowmap_vertex:zC,shadowmask_pars_fragment:VC,skinbase_vertex:GC,skinning_pars_vertex:WC,skinning_vertex:$C,skinnormal_vertex:XC,specularmap_fragment:jC,specularmap_pars_fragment:qC,tonemapping_fragment:YC,tonemapping_pars_fragment:KC,transmission_fragment:ZC,transmission_pars_fragment:QC,uv_pars_fragment:JC,uv_pars_vertex:e2,uv_vertex:t2,worldpos_vertex:n2,background_vert:i2,background_frag:s2,backgroundCube_vert:r2,backgroundCube_frag:o2,cube_vert:a2,cube_frag:l2,depth_vert:c2,depth_frag:u2,distanceRGBA_vert:d2,distanceRGBA_frag:f2,equirect_vert:h2,equirect_frag:p2,linedashed_vert:m2,linedashed_frag:g2,meshbasic_vert:v2,meshbasic_frag:_2,meshlambert_vert:b2,meshlambert_frag:x2,meshmatcap_vert:y2,meshmatcap_frag:w2,meshnormal_vert:S2,meshnormal_frag:M2,meshphong_vert:E2,meshphong_frag:T2,meshphysical_vert:A2,meshphysical_frag:C2,meshtoon_vert:R2,meshtoon_frag:P2,points_vert:D2,points_frag:L2,shadow_vert:I2,shadow_frag:U2,sprite_vert:O2,sprite_frag:N2},Re={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Ti={basic:{uniforms:Sn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Sn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new yt(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Sn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Sn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Sn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new yt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Sn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Sn([Re.points,Re.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Sn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Sn([Re.common,Re.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Sn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Sn([Re.sprite,Re.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:Sn([Re.common,Re.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:Sn([Re.lights,Re.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Ti.physical={uniforms:Sn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Ja={r:0,b:0,g:0},Vs=new Ni,F2=new Kt;function k2(t,e,n,i,s,r,o){const a=new yt(0);let l=r===!0?0:1,c,u,d=null,f=0,h=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?n:e).get(y)),y}function b(E){let y=!1;const D=g(E);D===null?p(a,l):D&&D.isColor&&(p(D,1),y=!0);const L=t.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(E,y){const D=g(y);D&&(D.isCubeTexture||D.mapping===tc)?(u===void 0&&(u=new pi(new Ta(1,1,1),new Ps({name:"BackgroundCubeMaterial",uniforms:fo(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,P,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Vs.copy(y.backgroundRotation),Vs.x*=-1,Vs.y*=-1,Vs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Vs.y*=-1,Vs.z*=-1),u.material.uniforms.envMap.value=D,u.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(F2.makeRotationFromEuler(Vs)),u.material.toneMapped=Mt.getTransfer(D.colorSpace)!==Lt,(d!==D||f!==D.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,d=D,f=D.version,h=t.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new pi(new ic(2,2),new Ps({name:"BackgroundMaterial",uniforms:fo(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Mt.getTransfer(D.colorSpace)!==Lt,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(d!==D||f!==D.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,d=D,f=D.version,h=t.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,y){E.getRGB(Ja,wv(t)),i.buffers.color.setClear(Ja.r,Ja.g,Ja.b,y,o)}function C(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:b,addToRenderList:m,dispose:C}}function B2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(A,U,W,O,I){let G=!1;const V=d(O,W,U);r!==V&&(r=V,c(r.object)),G=h(A,O,W,I),G&&g(A,O,W,I),I!==null&&e.update(I,t.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,y(A,U,W,O),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return t.createVertexArray()}function c(A){return t.bindVertexArray(A)}function u(A){return t.deleteVertexArray(A)}function d(A,U,W){const O=W.wireframe===!0;let I=i[A.id];I===void 0&&(I={},i[A.id]=I);let G=I[U.id];G===void 0&&(G={},I[U.id]=G);let V=G[O];return V===void 0&&(V=f(l()),G[O]=V),V}function f(A){const U=[],W=[],O=[];for(let I=0;I<n;I++)U[I]=0,W[I]=0,O[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:W,attributeDivisors:O,object:A,attributes:{},index:null}}function h(A,U,W,O){const I=r.attributes,G=U.attributes;let V=0;const ee=W.getAttributes();for(const Y in ee)if(ee[Y].location>=0){const Me=I[Y];let Le=G[Y];if(Le===void 0&&(Y==="instanceMatrix"&&A.instanceMatrix&&(Le=A.instanceMatrix),Y==="instanceColor"&&A.instanceColor&&(Le=A.instanceColor)),Me===void 0||Me.attribute!==Le||Le&&Me.data!==Le.data)return!0;V++}return r.attributesNum!==V||r.index!==O}function g(A,U,W,O){const I={},G=U.attributes;let V=0;const ee=W.getAttributes();for(const Y in ee)if(ee[Y].location>=0){let Me=G[Y];Me===void 0&&(Y==="instanceMatrix"&&A.instanceMatrix&&(Me=A.instanceMatrix),Y==="instanceColor"&&A.instanceColor&&(Me=A.instanceColor));const Le={};Le.attribute=Me,Me&&Me.data&&(Le.data=Me.data),I[Y]=Le,V++}r.attributes=I,r.attributesNum=V,r.index=O}function b(){const A=r.newAttributes;for(let U=0,W=A.length;U<W;U++)A[U]=0}function m(A){p(A,0)}function p(A,U){const W=r.newAttributes,O=r.enabledAttributes,I=r.attributeDivisors;W[A]=1,O[A]===0&&(t.enableVertexAttribArray(A),O[A]=1),I[A]!==U&&(t.vertexAttribDivisor(A,U),I[A]=U)}function C(){const A=r.newAttributes,U=r.enabledAttributes;for(let W=0,O=U.length;W<O;W++)U[W]!==A[W]&&(t.disableVertexAttribArray(W),U[W]=0)}function E(A,U,W,O,I,G,V){V===!0?t.vertexAttribIPointer(A,U,W,I,G):t.vertexAttribPointer(A,U,W,O,I,G)}function y(A,U,W,O){b();const I=O.attributes,G=W.getAttributes(),V=U.defaultAttributeValues;for(const ee in G){const Y=G[ee];if(Y.location>=0){let xe=I[ee];if(xe===void 0&&(ee==="instanceMatrix"&&A.instanceMatrix&&(xe=A.instanceMatrix),ee==="instanceColor"&&A.instanceColor&&(xe=A.instanceColor)),xe!==void 0){const Me=xe.normalized,Le=xe.itemSize,Ge=e.get(xe);if(Ge===void 0)continue;const _t=Ge.buffer,Ze=Ge.type,ie=Ge.bytesPerElement,ye=Ze===t.INT||Ze===t.UNSIGNED_INT||xe.gpuType===Yd;if(xe.isInterleavedBufferAttribute){const B=xe.data,ue=B.stride,oe=xe.offset;if(B.isInstancedInterleavedBuffer){for(let me=0;me<Y.locationSize;me++)p(Y.location+me,B.meshPerAttribute);A.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let me=0;me<Y.locationSize;me++)m(Y.location+me);t.bindBuffer(t.ARRAY_BUFFER,_t);for(let me=0;me<Y.locationSize;me++)E(Y.location+me,Le/Y.locationSize,Ze,Me,ue*ie,(oe+Le/Y.locationSize*me)*ie,ye)}else{if(xe.isInstancedBufferAttribute){for(let B=0;B<Y.locationSize;B++)p(Y.location+B,xe.meshPerAttribute);A.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let B=0;B<Y.locationSize;B++)m(Y.location+B);t.bindBuffer(t.ARRAY_BUFFER,_t);for(let B=0;B<Y.locationSize;B++)E(Y.location+B,Le/Y.locationSize,Ze,Me,Le*ie,Le/Y.locationSize*B*ie,ye)}}else if(V!==void 0){const Me=V[ee];if(Me!==void 0)switch(Me.length){case 2:t.vertexAttrib2fv(Y.location,Me);break;case 3:t.vertexAttrib3fv(Y.location,Me);break;case 4:t.vertexAttrib4fv(Y.location,Me);break;default:t.vertexAttrib1fv(Y.location,Me)}}}}C()}function D(){k();for(const A in i){const U=i[A];for(const W in U){const O=U[W];for(const I in O)u(O[I].object),delete O[I];delete U[W]}delete i[A]}}function L(A){if(i[A.id]===void 0)return;const U=i[A.id];for(const W in U){const O=U[W];for(const I in O)u(O[I].object),delete O[I];delete U[W]}delete i[A.id]}function P(A){for(const U in i){const W=i[U];if(W[A.id]===void 0)continue;const O=W[A.id];for(const I in O)u(O[I].object),delete O[I];delete W[A.id]}}function k(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:k,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:L,releaseStatesOfProgram:P,initAttributes:b,enableAttribute:m,disableUnusedAttributes:C}}function H2(t,e,n){let i;function s(c){i=c}function r(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];n.update(h,i,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let g=0;for(let b=0;b<d;b++)g+=u[b]*f[b];n.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function z2(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==hi&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const k=P===wa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Oi&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Zi&&!k)}function l(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),C=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,L=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:C,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:D,maxSamples:L}}function V2(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new ms,a=new pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,b=d.clipIntersection,m=d.clipShadows,p=t.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const C=r?0:i,E=C*4;let y=p.clippingState||null;l.value=y,y=u(g,f,E,h);for(let D=0;D!==E;++D)y[D]=n[D];p.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){const b=d!==null?d.length:0;let m=null;if(b!==0){if(m=l.value,g!==!0||m===null){const p=h+b*4,C=f.matrixWorldInverse;a.getNormalMatrix(C),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,y=h;E!==b;++E,y+=4)o.copy(d[E]).applyMatrix4(C,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function G2(t){let e=new WeakMap;function n(o,a){return a===Du?o.mapping=lo:a===Lu&&(o.mapping=co),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Du||a===Lu)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zA(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",s),n(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Ur=4,Yh=[.125,.215,.35,.446,.526,.582],js=20,Kc=new Rv,Kh=new yt;let Zc=null,Qc=0,Jc=0,eu=!1;const $s=(1+Math.sqrt(5))/2,Rr=1/$s,Zh=[new J(-$s,Rr,0),new J($s,Rr,0),new J(-Rr,0,$s),new J(Rr,0,$s),new J(0,$s,-Rr),new J(0,$s,Rr),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],W2=new J;class Qh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=W2}=r;Zc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ep(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zc,Qc,Jc),this._renderer.xr.enabled=eu,e.scissorTest=!1,el(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===lo||e.mapping===co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ai,minFilter:Ai,generateMipmaps:!1,type:wa,format:hi,colorSpace:uo,depthBuffer:!1},s=Jh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jh(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$2(r)),this._blurMaterial=X2(r,e,n)}return s}_compileMaterial(e){const n=new pi(this._lodPlanes[0],e);this._renderer.compile(n,Kc)}_sceneToCubeUV(e,n,i,s,r){const l=new Xn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Kh),d.toneMapping=Cs,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const b=new bv({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),m=new pi(new Ta,b);let p=!1;const C=e.background;C?C.isColor&&(b.color.copy(C),e.background=null,p=!0):(b.color.copy(Kh),p=!0);for(let E=0;E<6;E++){const y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));const D=this._cubeSize;el(s,y*D,E>2?D:0,D,D),d.setRenderTarget(s),p&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=C}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===lo||e.mapping===co;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ep());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new pi(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;el(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Kc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Zh[(s-r-1)%Zh.length];this._blur(e,r-1,r,o,a)}n.autoClear=i}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new pi(this._lodPlanes[s],c),f=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*js-1),b=r/g,m=isFinite(r)?1+Math.floor(u*b):js;m>js&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${js}`);const p=[];let C=0;for(let P=0;P<js;++P){const k=P/b,S=Math.exp(-k*k/2);p.push(S),P===0?C+=S:P<m&&(C+=2*S)}for(let P=0;P<p.length;P++)p[P]=p[P]/C;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-i;const y=this._sizeLods[s],D=3*y*(s>E-Ur?s-E+Ur:0),L=4*(this._cubeSize-y);el(n,D,L,3*y,2*y),l.setRenderTarget(n),l.render(d,Kc)}}function $2(t){const e=[],n=[],i=[];let s=t;const r=t-Ur+1+Yh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);n.push(a);let l=1/a;o>t-Ur?l=Yh[o-t+Ur-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,b=3,m=2,p=1,C=new Float32Array(b*g*h),E=new Float32Array(m*g*h),y=new Float32Array(p*g*h);for(let L=0;L<h;L++){const P=L%3*2/3-1,k=L>2?0:-1,S=[P,k,0,P+2/3,k,0,P+2/3,k+1,0,P,k,0,P+2/3,k+1,0,P,k+1,0];C.set(S,b*g*L),E.set(f,m*g*L);const A=[L,L,L,L,L,L];y.set(A,p*g*L)}const D=new Is;D.setAttribute("position",new Pi(C,b)),D.setAttribute("uv",new Pi(E,m)),D.setAttribute("faceIndex",new Pi(y,p)),e.push(D),s>Ur&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Jh(t,e,n){const i=new lr(t,e,n);return i.texture.mapping=tc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function el(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function X2(t,e,n){const i=new Float32Array(js),s=new J(0,1,0);return new Ps({name:"SphericalGaussianBlur",defines:{n:js,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:of(),fragmentShader:`

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
		`,blending:As,depthTest:!1,depthWrite:!1})}function ep(){return new Ps({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:of(),fragmentShader:`

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
		`,blending:As,depthTest:!1,depthWrite:!1})}function tp(){return new Ps({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:As,depthTest:!1,depthWrite:!1})}function of(){return`

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
	`}function j2(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Du||l===Lu,u=l===lo||l===co;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Qh(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&s(h)?(n===null&&(n=new Qh(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function q2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&Wr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Y2(t,e,n,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const h=r.get(f);h&&(e.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],t.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,g=d.attributes.position;let b=0;if(h!==null){const C=h.array;b=h.version;for(let E=0,y=C.length;E<y;E+=3){const D=C[E+0],L=C[E+1],P=C[E+2];f.push(D,L,L,P,P,D)}}else if(g!==void 0){const C=g.array;b=g.version;for(let E=0,y=C.length/3-1;E<y;E+=3){const D=E+0,L=E+1,P=E+2;f.push(D,L,L,P,P,D)}}else return;const m=new(pv(f)?yv:xv)(f,1);m.version=b;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function K2(t,e,n){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){t.drawElements(i,h,r,f*o),n.update(h,i,1)}function c(f,h,g){g!==0&&(t.drawElementsInstanced(i,h,r,f*o,g),n.update(h,i,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];n.update(m,i,1)}function d(f,h,g,b){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,h[p],b[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,r,f,0,b,0,g);let p=0;for(let C=0;C<g;C++)p+=h[C]*b[C];n.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Z2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function Q2(t,e,n){const i=new WeakMap,s=new jt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let S=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const h=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],C=a.morphAttributes.color||[];let E=0;h===!0&&(E=1),g===!0&&(E=2),b===!0&&(E=3);let y=a.attributes.position.count*E,D=1;y>e.maxTextureSize&&(D=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const L=new Float32Array(y*D*4*d),P=new mv(L,y,D,d);P.type=Zi,P.needsUpdate=!0;const k=E*4;for(let A=0;A<d;A++){const U=m[A],W=p[A],O=C[A],I=y*D*4*A;for(let G=0;G<U.count;G++){const V=G*k;h===!0&&(s.fromBufferAttribute(U,G),L[I+V+0]=s.x,L[I+V+1]=s.y,L[I+V+2]=s.z,L[I+V+3]=0),g===!0&&(s.fromBufferAttribute(W,G),L[I+V+4]=s.x,L[I+V+5]=s.y,L[I+V+6]=s.z,L[I+V+7]=0),b===!0&&(s.fromBufferAttribute(O,G),L[I+V+8]=s.x,L[I+V+9]=s.y,L[I+V+10]=s.z,L[I+V+11]=O.itemSize===4?s.w:1)}}f={count:d,texture:P,size:new lt(y,D)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let h=0;for(let b=0;b<c.length;b++)h+=c[b];const g=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:r}}function J2(t,e,n,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:o}}const Lv=new Rn,np=new Tv(1,1),Iv=new mv,Uv=new MA,Ov=new Mv,ip=[],sp=[],rp=new Float32Array(16),op=new Float32Array(9),ap=new Float32Array(4);function bo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=ip[s];if(r===void 0&&(r=new Float32Array(s),ip[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function sn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function rn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function sc(t,e){let n=sp[e];n===void 0&&(n=new Int32Array(e),sp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function eR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function tR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(sn(n,e))return;t.uniform2fv(this.addr,e),rn(n,e)}}function nR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(sn(n,e))return;t.uniform3fv(this.addr,e),rn(n,e)}}function iR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(sn(n,e))return;t.uniform4fv(this.addr,e),rn(n,e)}}function sR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(sn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),rn(n,e)}else{if(sn(n,i))return;ap.set(i),t.uniformMatrix2fv(this.addr,!1,ap),rn(n,i)}}function rR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(sn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),rn(n,e)}else{if(sn(n,i))return;op.set(i),t.uniformMatrix3fv(this.addr,!1,op),rn(n,i)}}function oR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(sn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),rn(n,e)}else{if(sn(n,i))return;rp.set(i),t.uniformMatrix4fv(this.addr,!1,rp),rn(n,i)}}function aR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function lR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(sn(n,e))return;t.uniform2iv(this.addr,e),rn(n,e)}}function cR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(sn(n,e))return;t.uniform3iv(this.addr,e),rn(n,e)}}function uR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(sn(n,e))return;t.uniform4iv(this.addr,e),rn(n,e)}}function dR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function fR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(sn(n,e))return;t.uniform2uiv(this.addr,e),rn(n,e)}}function hR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(sn(n,e))return;t.uniform3uiv(this.addr,e),rn(n,e)}}function pR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(sn(n,e))return;t.uniform4uiv(this.addr,e),rn(n,e)}}function mR(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(np.compareFunction=hv,r=np):r=Lv,n.setTexture2D(e||r,s)}function gR(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||Uv,s)}function vR(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||Ov,s)}function _R(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||Iv,s)}function bR(t){switch(t){case 5126:return eR;case 35664:return tR;case 35665:return nR;case 35666:return iR;case 35674:return sR;case 35675:return rR;case 35676:return oR;case 5124:case 35670:return aR;case 35667:case 35671:return lR;case 35668:case 35672:return cR;case 35669:case 35673:return uR;case 5125:return dR;case 36294:return fR;case 36295:return hR;case 36296:return pR;case 35678:case 36198:case 36298:case 36306:case 35682:return mR;case 35679:case 36299:case 36307:return gR;case 35680:case 36300:case 36308:case 36293:return vR;case 36289:case 36303:case 36311:case 36292:return _R}}function xR(t,e){t.uniform1fv(this.addr,e)}function yR(t,e){const n=bo(e,this.size,2);t.uniform2fv(this.addr,n)}function wR(t,e){const n=bo(e,this.size,3);t.uniform3fv(this.addr,n)}function SR(t,e){const n=bo(e,this.size,4);t.uniform4fv(this.addr,n)}function MR(t,e){const n=bo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ER(t,e){const n=bo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function TR(t,e){const n=bo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function AR(t,e){t.uniform1iv(this.addr,e)}function CR(t,e){t.uniform2iv(this.addr,e)}function RR(t,e){t.uniform3iv(this.addr,e)}function PR(t,e){t.uniform4iv(this.addr,e)}function DR(t,e){t.uniform1uiv(this.addr,e)}function LR(t,e){t.uniform2uiv(this.addr,e)}function IR(t,e){t.uniform3uiv(this.addr,e)}function UR(t,e){t.uniform4uiv(this.addr,e)}function OR(t,e,n){const i=this.cache,s=e.length,r=sc(n,s);sn(i,r)||(t.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)n.setTexture2D(e[o]||Lv,r[o])}function NR(t,e,n){const i=this.cache,s=e.length,r=sc(n,s);sn(i,r)||(t.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||Uv,r[o])}function FR(t,e,n){const i=this.cache,s=e.length,r=sc(n,s);sn(i,r)||(t.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||Ov,r[o])}function kR(t,e,n){const i=this.cache,s=e.length,r=sc(n,s);sn(i,r)||(t.uniform1iv(this.addr,r),rn(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||Iv,r[o])}function BR(t){switch(t){case 5126:return xR;case 35664:return yR;case 35665:return wR;case 35666:return SR;case 35674:return MR;case 35675:return ER;case 35676:return TR;case 5124:case 35670:return AR;case 35667:case 35671:return CR;case 35668:case 35672:return RR;case 35669:case 35673:return PR;case 5125:return DR;case 36294:return LR;case 36295:return IR;case 36296:return UR;case 35678:case 36198:case 36298:case 36306:case 35682:return OR;case 35679:case 36299:case 36307:return NR;case 35680:case 36300:case 36308:case 36293:return FR;case 36289:case 36303:case 36311:case 36292:return kR}}class HR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=bR(n.type)}}class zR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=BR(n.type)}}class VR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const tu=/(\w+)(\])?(\[|\.)?/g;function lp(t,e){t.seq.push(e),t.map[e.id]=e}function GR(t,e,n){const i=t.name,s=i.length;for(tu.lastIndex=0;;){const r=tu.exec(i),o=tu.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){lp(n,c===void 0?new HR(a,t,e):new zR(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new VR(a),lp(n,d)),n=d}}}class gl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(n,s),o=e.getUniformLocation(n,r.name);GR(r,o,this)}}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function cp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const WR=37297;let $R=0;function XR(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const up=new pt;function jR(t){Mt._getMatrix(up,Mt.workingColorSpace,t);const e=`mat3( ${up.elements.map(n=>n.toFixed(4))} )`;switch(Mt.getTransfer(t)){case Ol:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function dp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+XR(t.getShaderSource(e),a)}else return r}function qR(t,e){const n=jR(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function YR(t,e){let n;switch(e){case ZT:n="Linear";break;case QT:n="Reinhard";break;case JT:n="Cineon";break;case eA:n="ACESFilmic";break;case nA:n="AgX";break;case iA:n="Neutral";break;case tA:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const tl=new J;function KR(){Mt.getLuminanceCoefficients(tl);const t=tl.x.toFixed(4),e=tl.y.toFixed(4),n=tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ZR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function QR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function JR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function No(t){return t!==""}function fp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eP=/^[ \t]*#include +<([\w\d./]+)>/gm;function cd(t){return t.replace(eP,nP)}const tP=new Map;function nP(t,e){let n=mt[e];if(n===void 0){const i=tP.get(e);if(i!==void 0)n=mt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cd(n)}const iP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pp(t){return t.replace(iP,sP)}function sP(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mp(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function rP(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===tv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===PT?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Wi&&(e="SHADOWMAP_TYPE_VSM"),e}function oP(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case lo:case co:e="ENVMAP_TYPE_CUBE";break;case tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function aP(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case co:e="ENVMAP_MODE_REFRACTION";break}return e}function lP(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case nv:e="ENVMAP_BLENDING_MULTIPLY";break;case YT:e="ENVMAP_BLENDING_MIX";break;case KT:e="ENVMAP_BLENDING_ADD";break}return e}function cP(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function uP(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=rP(n),c=oP(n),u=aP(n),d=lP(n),f=cP(n),h=ZR(n),g=QR(r),b=s.createProgram();let m,p,C=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(No).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(No).join(`
`),p.length>0&&(p+=`
`)):(m=[mp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),p=[mp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Cs?"#define TONE_MAPPING":"",n.toneMapping!==Cs?mt.tonemapping_pars_fragment:"",n.toneMapping!==Cs?YR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,qR("linearToOutputTexel",n.outputColorSpace),KR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(No).join(`
`)),o=cd(o),o=fp(o,n),o=hp(o,n),a=cd(a),a=fp(a,n),a=hp(a,n),o=pp(o),a=pp(a),n.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=C+m+o,y=C+p+a,D=cp(s,s.VERTEX_SHADER,E),L=cp(s,s.FRAGMENT_SHADER,y);s.attachShader(b,D),s.attachShader(b,L),n.index0AttributeName!==void 0?s.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function P(U){if(t.debug.checkShaderErrors){const W=s.getProgramInfoLog(b)||"",O=s.getShaderInfoLog(D)||"",I=s.getShaderInfoLog(L)||"",G=W.trim(),V=O.trim(),ee=I.trim();let Y=!0,xe=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,b,D,L);else{const Me=dp(s,D,"vertex"),Le=dp(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+G+`
`+Me+`
`+Le)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(V===""||ee==="")&&(xe=!1);xe&&(U.diagnostics={runnable:Y,programLog:G,vertexShader:{log:V,prefix:m},fragmentShader:{log:ee,prefix:p}})}s.deleteShader(D),s.deleteShader(L),k=new gl(s,b),S=JR(s,b)}let k;this.getUniforms=function(){return k===void 0&&P(this),k};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(b,WR)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$R++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=D,this.fragmentShader=L,this}let dP=0;class fP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new hP(e),n.set(e,i)),i}}class hP{constructor(e){this.id=dP++,this.code=e,this.usedTimes=0}}function pP(t,e,n,i,s,r,o){const a=new vv,l=new fP,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let h=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,A,U,W,O){const I=W.fog,G=O.geometry,V=S.isMeshStandardMaterial?W.environment:null,ee=(S.isMeshStandardMaterial?n:e).get(S.envMap||V),Y=ee&&ee.mapping===tc?ee.image.height:null,xe=g[S.type];S.precision!==null&&(h=s.getMaxPrecision(S.precision),h!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const Me=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Le=Me!==void 0?Me.length:0;let Ge=0;G.morphAttributes.position!==void 0&&(Ge=1),G.morphAttributes.normal!==void 0&&(Ge=2),G.morphAttributes.color!==void 0&&(Ge=3);let _t,Ze,ie,ye;if(xe){const ft=Ti[xe];_t=ft.vertexShader,Ze=ft.fragmentShader}else _t=S.vertexShader,Ze=S.fragmentShader,l.update(S),ie=l.getVertexShaderID(S),ye=l.getFragmentShaderID(S);const B=t.getRenderTarget(),ue=t.state.buffers.depth.getReversed(),oe=O.isInstancedMesh===!0,me=O.isBatchedMesh===!0,Qe=!!S.map,R=!!S.matcap,v=!!ee,z=!!S.aoMap,K=!!S.lightMap,se=!!S.bumpMap,q=!!S.normalMap,ge=!!S.displacementMap,te=!!S.emissiveMap,ce=!!S.metalnessMap,de=!!S.roughnessMap,Pe=S.anisotropy>0,M=S.clearcoat>0,x=S.dispersion>0,F=S.iridescence>0,Z=S.sheen>0,le=S.transmission>0,Q=Pe&&!!S.anisotropyMap,Ie=M&&!!S.clearcoatMap,ve=M&&!!S.clearcoatNormalMap,De=M&&!!S.clearcoatRoughnessMap,Ue=F&&!!S.iridescenceMap,_e=F&&!!S.iridescenceThicknessMap,Ce=Z&&!!S.sheenColorMap,Be=Z&&!!S.sheenRoughnessMap,Oe=!!S.specularMap,Te=!!S.specularColorMap,ct=!!S.specularIntensityMap,H=le&&!!S.transmissionMap,we=le&&!!S.thicknessMap,Ee=!!S.gradientMap,Fe=!!S.alphaMap,be=S.alphaTest>0,he=!!S.alphaHash,Ve=!!S.extensions;let tt=Cs;S.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(tt=t.toneMapping);const dt={shaderID:xe,shaderType:S.type,shaderName:S.name,vertexShader:_t,fragmentShader:Ze,defines:S.defines,customVertexShaderID:ie,customFragmentShaderID:ye,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:me,batchingColor:me&&O._colorsTexture!==null,instancing:oe,instancingColor:oe&&O.instanceColor!==null,instancingMorph:oe&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:B===null?t.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:uo,alphaToCoverage:!!S.alphaToCoverage,map:Qe,matcap:R,envMap:v,envMapMode:v&&ee.mapping,envMapCubeUVHeight:Y,aoMap:z,lightMap:K,bumpMap:se,normalMap:q,displacementMap:f&&ge,emissiveMap:te,normalMapObjectSpace:q&&S.normalMapType===aA,normalMapTangentSpace:q&&S.normalMapType===fv,metalnessMap:ce,roughnessMap:de,anisotropy:Pe,anisotropyMap:Q,clearcoat:M,clearcoatMap:Ie,clearcoatNormalMap:ve,clearcoatRoughnessMap:De,dispersion:x,iridescence:F,iridescenceMap:Ue,iridescenceThicknessMap:_e,sheen:Z,sheenColorMap:Ce,sheenRoughnessMap:Be,specularMap:Oe,specularColorMap:Te,specularIntensityMap:ct,transmission:le,transmissionMap:H,thicknessMap:we,gradientMap:Ee,opaque:S.transparent===!1&&S.blending===Gr&&S.alphaToCoverage===!1,alphaMap:Fe,alphaTest:be,alphaHash:he,combine:S.combine,mapUv:Qe&&b(S.map.channel),aoMapUv:z&&b(S.aoMap.channel),lightMapUv:K&&b(S.lightMap.channel),bumpMapUv:se&&b(S.bumpMap.channel),normalMapUv:q&&b(S.normalMap.channel),displacementMapUv:ge&&b(S.displacementMap.channel),emissiveMapUv:te&&b(S.emissiveMap.channel),metalnessMapUv:ce&&b(S.metalnessMap.channel),roughnessMapUv:de&&b(S.roughnessMap.channel),anisotropyMapUv:Q&&b(S.anisotropyMap.channel),clearcoatMapUv:Ie&&b(S.clearcoatMap.channel),clearcoatNormalMapUv:ve&&b(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&b(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&b(S.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&b(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&b(S.sheenColorMap.channel),sheenRoughnessMapUv:Be&&b(S.sheenRoughnessMap.channel),specularMapUv:Oe&&b(S.specularMap.channel),specularColorMapUv:Te&&b(S.specularColorMap.channel),specularIntensityMapUv:ct&&b(S.specularIntensityMap.channel),transmissionMapUv:H&&b(S.transmissionMap.channel),thicknessMapUv:we&&b(S.thicknessMap.channel),alphaMapUv:Fe&&b(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(q||Pe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!G.attributes.uv&&(Qe||Fe),fog:!!I,useFog:S.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ue,skinning:O.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:Ge,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:tt,decodeVideoTexture:Qe&&S.map.isVideoTexture===!0&&Mt.getTransfer(S.map.colorSpace)===Lt,decodeVideoTextureEmissive:te&&S.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(S.emissiveMap.colorSpace)===Lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ki,flipSided:S.side===Bn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ve&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&S.extensions.multiDraw===!0||me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function p(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const U in S.defines)A.push(U),A.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(C(A,S),E(A,S),A.push(t.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function C(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function E(S,A){a.disableAll(),A.supportsVertexTextures&&a.enable(0),A.instancing&&a.enable(1),A.instancingColor&&a.enable(2),A.instancingMorph&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),A.dispersion&&a.enable(20),A.batchingColor&&a.enable(21),A.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){const A=g[S.type];let U;if(A){const W=Ti[A];U=FA.clone(W.uniforms)}else U=S.uniforms;return U}function D(S,A){let U;for(let W=0,O=u.length;W<O;W++){const I=u[W];if(I.cacheKey===A){U=I,++U.usedTimes;break}}return U===void 0&&(U=new uP(t,A,S,r),u.push(U)),U}function L(S){if(--S.usedTimes===0){const A=u.indexOf(S);u[A]=u[u.length-1],u.pop(),S.destroy()}}function P(S){l.remove(S)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:D,releaseProgram:L,releaseShaderCache:P,programs:u,dispose:k}}function mP(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function gP(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function gp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function vp(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(d,f,h,g,b,m){let p=t[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:b,group:m},t[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=b,p.group=m),e++,p}function a(d,f,h,g,b,m){const p=o(d,f,h,g,b,m);h.transmission>0?i.push(p):h.transparent===!0?s.push(p):n.push(p)}function l(d,f,h,g,b,m){const p=o(d,f,h,g,b,m);h.transmission>0?i.unshift(p):h.transparent===!0?s.unshift(p):n.unshift(p)}function c(d,f){n.length>1&&n.sort(d||gP),i.length>1&&i.sort(f||gp),s.length>1&&s.sort(f||gp)}function u(){for(let d=e,f=t.length;d<f;d++){const h=t[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function vP(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new vp,t.set(i,[o])):s>=r.length?(o=new vp,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function _P(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new J,color:new yt};break;case"SpotLight":n={position:new J,direction:new J,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new J,color:new yt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new J,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":n={color:new yt,position:new J,halfWidth:new J,halfHeight:new J};break}return t[e.id]=n,n}}}function bP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let xP=0;function yP(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function wP(t){const e=new _P,n=bP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new J);const s=new J,r=new Kt,o=new Kt;function a(c){let u=0,d=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let h=0,g=0,b=0,m=0,p=0,C=0,E=0,y=0,D=0,L=0,P=0;c.sort(yP);for(let S=0,A=c.length;S<A;S++){const U=c[S],W=U.color,O=U.intensity,I=U.distance,G=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=W.r*O,d+=W.g*O,f+=W.b*O;else if(U.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(U.sh.coefficients[V],O);P++}else if(U.isDirectionalLight){const V=e.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const ee=U.shadow,Y=n.get(U);Y.shadowIntensity=ee.intensity,Y.shadowBias=ee.bias,Y.shadowNormalBias=ee.normalBias,Y.shadowRadius=ee.radius,Y.shadowMapSize=ee.mapSize,i.directionalShadow[h]=Y,i.directionalShadowMap[h]=G,i.directionalShadowMatrix[h]=U.shadow.matrix,C++}i.directional[h]=V,h++}else if(U.isSpotLight){const V=e.get(U);V.position.setFromMatrixPosition(U.matrixWorld),V.color.copy(W).multiplyScalar(O),V.distance=I,V.coneCos=Math.cos(U.angle),V.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),V.decay=U.decay,i.spot[b]=V;const ee=U.shadow;if(U.map&&(i.spotLightMap[D]=U.map,D++,ee.updateMatrices(U),U.castShadow&&L++),i.spotLightMatrix[b]=ee.matrix,U.castShadow){const Y=n.get(U);Y.shadowIntensity=ee.intensity,Y.shadowBias=ee.bias,Y.shadowNormalBias=ee.normalBias,Y.shadowRadius=ee.radius,Y.shadowMapSize=ee.mapSize,i.spotShadow[b]=Y,i.spotShadowMap[b]=G,y++}b++}else if(U.isRectAreaLight){const V=e.get(U);V.color.copy(W).multiplyScalar(O),V.halfWidth.set(U.width*.5,0,0),V.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=V,m++}else if(U.isPointLight){const V=e.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity),V.distance=U.distance,V.decay=U.decay,U.castShadow){const ee=U.shadow,Y=n.get(U);Y.shadowIntensity=ee.intensity,Y.shadowBias=ee.bias,Y.shadowNormalBias=ee.normalBias,Y.shadowRadius=ee.radius,Y.shadowMapSize=ee.mapSize,Y.shadowCameraNear=ee.camera.near,Y.shadowCameraFar=ee.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=G,i.pointShadowMatrix[g]=U.shadow.matrix,E++}i.point[g]=V,g++}else if(U.isHemisphereLight){const V=e.get(U);V.skyColor.copy(U.color).multiplyScalar(O),V.groundColor.copy(U.groundColor).multiplyScalar(O),i.hemi[p]=V,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const k=i.hash;(k.directionalLength!==h||k.pointLength!==g||k.spotLength!==b||k.rectAreaLength!==m||k.hemiLength!==p||k.numDirectionalShadows!==C||k.numPointShadows!==E||k.numSpotShadows!==y||k.numSpotMaps!==D||k.numLightProbes!==P)&&(i.directional.length=h,i.spot.length=b,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=y+D-L,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=P,k.directionalLength=h,k.pointLength=g,k.spotLength=b,k.rectAreaLength=m,k.hemiLength=p,k.numDirectionalShadows=C,k.numPointShadows=E,k.numSpotShadows=y,k.numSpotMaps=D,k.numLightProbes=P,i.version=xP++)}function l(c,u){let d=0,f=0,h=0,g=0,b=0;const m=u.matrixWorldInverse;for(let p=0,C=c.length;p<C;p++){const E=c[p];if(E.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(E.isSpotLight){const y=i.spot[h];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(E.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const y=i.hemi[b];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(m),b++}}}return{setup:a,setupView:l,state:i}}function _p(t){const e=new wP(t),n=[],i=[];function s(u){c.camera=u,n.length=0,i.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function SP(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new _p(t),e.set(s,[a])):r>=o.length?(a=new _p(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const MP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EP=`uniform sampler2D shadow_pass;
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
}`;function TP(t,e,n){let i=new sf;const s=new lt,r=new lt,o=new jt,a=new jA({depthPacking:oA}),l=new qA,c={},u=n.maxTextureSize,d={[Rs]:Bn,[Bn]:Rs,[Ki]:Ki},f=new Ps({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:MP,fragmentShader:EP}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new Is;g.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new pi(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tv;let p=this.type;this.render=function(L,P,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const S=t.getRenderTarget(),A=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),W=t.state;W.setBlending(As),W.buffers.depth.getReversed()?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const O=p!==Wi&&this.type===Wi,I=p===Wi&&this.type!==Wi;for(let G=0,V=L.length;G<V;G++){const ee=L[G],Y=ee.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const xe=Y.getFrameExtents();if(s.multiply(xe),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/xe.x),s.x=r.x*xe.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/xe.y),s.y=r.y*xe.y,Y.mapSize.y=r.y)),Y.map===null||O===!0||I===!0){const Le=this.type!==Wi?{minFilter:gi,magFilter:gi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new lr(s.x,s.y,Le),Y.map.texture.name=ee.name+".shadowMap",Y.camera.updateProjectionMatrix()}t.setRenderTarget(Y.map),t.clear();const Me=Y.getViewportCount();for(let Le=0;Le<Me;Le++){const Ge=Y.getViewport(Le);o.set(r.x*Ge.x,r.y*Ge.y,r.x*Ge.z,r.y*Ge.w),W.viewport(o),Y.updateMatrices(ee,Le),i=Y.getFrustum(),y(P,k,Y.camera,ee,this.type)}Y.isPointLightShadow!==!0&&this.type===Wi&&C(Y,k),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(S,A,U)};function C(L,P){const k=e.update(b);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,h.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new lr(s.x,s.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,t.setRenderTarget(L.mapPass),t.clear(),t.renderBufferDirect(P,null,k,f,b,null),h.uniforms.shadow_pass.value=L.mapPass.texture,h.uniforms.resolution.value=L.mapSize,h.uniforms.radius.value=L.radius,t.setRenderTarget(L.map),t.clear(),t.renderBufferDirect(P,null,k,h,b,null)}function E(L,P,k,S){let A=null;const U=k.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(U!==void 0)A=U;else if(A=k.isPointLight===!0?l:a,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const W=A.uuid,O=P.uuid;let I=c[W];I===void 0&&(I={},c[W]=I);let G=I[O];G===void 0&&(G=A.clone(),I[O]=G,P.addEventListener("dispose",D)),A=G}if(A.visible=P.visible,A.wireframe=P.wireframe,S===Wi?A.side=P.shadowSide!==null?P.shadowSide:P.side:A.side=P.shadowSide!==null?P.shadowSide:d[P.side],A.alphaMap=P.alphaMap,A.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,A.map=P.map,A.clipShadows=P.clipShadows,A.clippingPlanes=P.clippingPlanes,A.clipIntersection=P.clipIntersection,A.displacementMap=P.displacementMap,A.displacementScale=P.displacementScale,A.displacementBias=P.displacementBias,A.wireframeLinewidth=P.wireframeLinewidth,A.linewidth=P.linewidth,k.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const W=t.properties.get(A);W.light=k}return A}function y(L,P,k,S,A){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&A===Wi)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,L.matrixWorld);const O=e.update(L),I=L.material;if(Array.isArray(I)){const G=O.groups;for(let V=0,ee=G.length;V<ee;V++){const Y=G[V],xe=I[Y.materialIndex];if(xe&&xe.visible){const Me=E(L,xe,S,A);L.onBeforeShadow(t,L,P,k,O,Me,Y),t.renderBufferDirect(k,null,O,Me,L,Y),L.onAfterShadow(t,L,P,k,O,Me,Y)}}}else if(I.visible){const G=E(L,I,S,A);L.onBeforeShadow(t,L,P,k,O,G,null),t.renderBufferDirect(k,null,O,G,L,null),L.onAfterShadow(t,L,P,k,O,G,null)}}const W=L.children;for(let O=0,I=W.length;O<I;O++)y(W[O],P,k,S,A)}function D(L){L.target.removeEventListener("dispose",D);for(const k in c){const S=c[k],A=L.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}const AP={[Mu]:Eu,[Tu]:Ru,[Au]:Pu,[ao]:Cu,[Eu]:Mu,[Ru]:Tu,[Pu]:Au,[Cu]:ao};function CP(t,e){function n(){let H=!1;const we=new jt;let Ee=null;const Fe=new jt(0,0,0,0);return{setMask:function(be){Ee!==be&&!H&&(t.colorMask(be,be,be,be),Ee=be)},setLocked:function(be){H=be},setClear:function(be,he,Ve,tt,dt){dt===!0&&(be*=tt,he*=tt,Ve*=tt),we.set(be,he,Ve,tt),Fe.equals(we)===!1&&(t.clearColor(be,he,Ve,tt),Fe.copy(we))},reset:function(){H=!1,Ee=null,Fe.set(-1,0,0,0)}}}function i(){let H=!1,we=!1,Ee=null,Fe=null,be=null;return{setReversed:function(he){if(we!==he){const Ve=e.get("EXT_clip_control");he?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),we=he;const tt=be;be=null,this.setClear(tt)}},getReversed:function(){return we},setTest:function(he){he?B(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(he){Ee!==he&&!H&&(t.depthMask(he),Ee=he)},setFunc:function(he){if(we&&(he=AP[he]),Fe!==he){switch(he){case Mu:t.depthFunc(t.NEVER);break;case Eu:t.depthFunc(t.ALWAYS);break;case Tu:t.depthFunc(t.LESS);break;case ao:t.depthFunc(t.LEQUAL);break;case Au:t.depthFunc(t.EQUAL);break;case Cu:t.depthFunc(t.GEQUAL);break;case Ru:t.depthFunc(t.GREATER);break;case Pu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Fe=he}},setLocked:function(he){H=he},setClear:function(he){be!==he&&(we&&(he=1-he),t.clearDepth(he),be=he)},reset:function(){H=!1,Ee=null,Fe=null,be=null,we=!1}}}function s(){let H=!1,we=null,Ee=null,Fe=null,be=null,he=null,Ve=null,tt=null,dt=null;return{setTest:function(ft){H||(ft?B(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(ft){we!==ft&&!H&&(t.stencilMask(ft),we=ft)},setFunc:function(ft,Ln,$){(Ee!==ft||Fe!==Ln||be!==$)&&(t.stencilFunc(ft,Ln,$),Ee=ft,Fe=Ln,be=$)},setOp:function(ft,Ln,$){(he!==ft||Ve!==Ln||tt!==$)&&(t.stencilOp(ft,Ln,$),he=ft,Ve=Ln,tt=$)},setLocked:function(ft){H=ft},setClear:function(ft){dt!==ft&&(t.clearStencil(ft),dt=ft)},reset:function(){H=!1,we=null,Ee=null,Fe=null,be=null,he=null,Ve=null,tt=null,dt=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],g=null,b=!1,m=null,p=null,C=null,E=null,y=null,D=null,L=null,P=new yt(0,0,0),k=0,S=!1,A=null,U=null,W=null,O=null,I=null;const G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,ee=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(Y)[1]),V=ee>=1):Y.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),V=ee>=2);let xe=null,Me={};const Le=t.getParameter(t.SCISSOR_BOX),Ge=t.getParameter(t.VIEWPORT),_t=new jt().fromArray(Le),Ze=new jt().fromArray(Ge);function ie(H,we,Ee,Fe){const be=new Uint8Array(4),he=t.createTexture();t.bindTexture(H,he),t.texParameteri(H,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(H,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ve=0;Ve<Ee;Ve++)H===t.TEXTURE_3D||H===t.TEXTURE_2D_ARRAY?t.texImage3D(we,0,t.RGBA,1,1,Fe,0,t.RGBA,t.UNSIGNED_BYTE,be):t.texImage2D(we+Ve,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,be);return he}const ye={};ye[t.TEXTURE_2D]=ie(t.TEXTURE_2D,t.TEXTURE_2D,1),ye[t.TEXTURE_CUBE_MAP]=ie(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[t.TEXTURE_2D_ARRAY]=ie(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ye[t.TEXTURE_3D]=ie(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),B(t.DEPTH_TEST),o.setFunc(ao),se(!1),q(yh),B(t.CULL_FACE),z(As);function B(H){u[H]!==!0&&(t.enable(H),u[H]=!0)}function ue(H){u[H]!==!1&&(t.disable(H),u[H]=!1)}function oe(H,we){return d[H]!==we?(t.bindFramebuffer(H,we),d[H]=we,H===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=we),H===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=we),!0):!1}function me(H,we){let Ee=h,Fe=!1;if(H){Ee=f.get(we),Ee===void 0&&(Ee=[],f.set(we,Ee));const be=H.textures;if(Ee.length!==be.length||Ee[0]!==t.COLOR_ATTACHMENT0){for(let he=0,Ve=be.length;he<Ve;he++)Ee[he]=t.COLOR_ATTACHMENT0+he;Ee.length=be.length,Fe=!0}}else Ee[0]!==t.BACK&&(Ee[0]=t.BACK,Fe=!0);Fe&&t.drawBuffers(Ee)}function Qe(H){return g!==H?(t.useProgram(H),g=H,!0):!1}const R={[Xs]:t.FUNC_ADD,[LT]:t.FUNC_SUBTRACT,[IT]:t.FUNC_REVERSE_SUBTRACT};R[UT]=t.MIN,R[OT]=t.MAX;const v={[NT]:t.ZERO,[FT]:t.ONE,[kT]:t.SRC_COLOR,[wu]:t.SRC_ALPHA,[WT]:t.SRC_ALPHA_SATURATE,[VT]:t.DST_COLOR,[HT]:t.DST_ALPHA,[BT]:t.ONE_MINUS_SRC_COLOR,[Su]:t.ONE_MINUS_SRC_ALPHA,[GT]:t.ONE_MINUS_DST_COLOR,[zT]:t.ONE_MINUS_DST_ALPHA,[$T]:t.CONSTANT_COLOR,[XT]:t.ONE_MINUS_CONSTANT_COLOR,[jT]:t.CONSTANT_ALPHA,[qT]:t.ONE_MINUS_CONSTANT_ALPHA};function z(H,we,Ee,Fe,be,he,Ve,tt,dt,ft){if(H===As){b===!0&&(ue(t.BLEND),b=!1);return}if(b===!1&&(B(t.BLEND),b=!0),H!==DT){if(H!==m||ft!==S){if((p!==Xs||y!==Xs)&&(t.blendEquation(t.FUNC_ADD),p=Xs,y=Xs),ft)switch(H){case Gr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wh:t.blendFunc(t.ONE,t.ONE);break;case Sh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Mh:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Gr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wh:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Sh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}C=null,E=null,D=null,L=null,P.set(0,0,0),k=0,m=H,S=ft}return}be=be||we,he=he||Ee,Ve=Ve||Fe,(we!==p||be!==y)&&(t.blendEquationSeparate(R[we],R[be]),p=we,y=be),(Ee!==C||Fe!==E||he!==D||Ve!==L)&&(t.blendFuncSeparate(v[Ee],v[Fe],v[he],v[Ve]),C=Ee,E=Fe,D=he,L=Ve),(tt.equals(P)===!1||dt!==k)&&(t.blendColor(tt.r,tt.g,tt.b,dt),P.copy(tt),k=dt),m=H,S=!1}function K(H,we){H.side===Ki?ue(t.CULL_FACE):B(t.CULL_FACE);let Ee=H.side===Bn;we&&(Ee=!Ee),se(Ee),H.blending===Gr&&H.transparent===!1?z(As):z(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);const Fe=H.stencilWrite;a.setTest(Fe),Fe&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),te(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?B(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function se(H){A!==H&&(H?t.frontFace(t.CW):t.frontFace(t.CCW),A=H)}function q(H){H!==CT?(B(t.CULL_FACE),H!==U&&(H===yh?t.cullFace(t.BACK):H===RT?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),U=H}function ge(H){H!==W&&(V&&t.lineWidth(H),W=H)}function te(H,we,Ee){H?(B(t.POLYGON_OFFSET_FILL),(O!==we||I!==Ee)&&(t.polygonOffset(we,Ee),O=we,I=Ee)):ue(t.POLYGON_OFFSET_FILL)}function ce(H){H?B(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function de(H){H===void 0&&(H=t.TEXTURE0+G-1),xe!==H&&(t.activeTexture(H),xe=H)}function Pe(H,we,Ee){Ee===void 0&&(xe===null?Ee=t.TEXTURE0+G-1:Ee=xe);let Fe=Me[Ee];Fe===void 0&&(Fe={type:void 0,texture:void 0},Me[Ee]=Fe),(Fe.type!==H||Fe.texture!==we)&&(xe!==Ee&&(t.activeTexture(Ee),xe=Ee),t.bindTexture(H,we||ye[H]),Fe.type=H,Fe.texture=we)}function M(){const H=Me[xe];H!==void 0&&H.type!==void 0&&(t.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function x(){try{t.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function F(){try{t.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Z(){try{t.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function le(){try{t.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Q(){try{t.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ie(){try{t.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ve(){try{t.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function De(){try{t.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ue(){try{t.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _e(){try{t.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(H){_t.equals(H)===!1&&(t.scissor(H.x,H.y,H.z,H.w),_t.copy(H))}function Be(H){Ze.equals(H)===!1&&(t.viewport(H.x,H.y,H.z,H.w),Ze.copy(H))}function Oe(H,we){let Ee=c.get(we);Ee===void 0&&(Ee=new WeakMap,c.set(we,Ee));let Fe=Ee.get(H);Fe===void 0&&(Fe=t.getUniformBlockIndex(we,H.name),Ee.set(H,Fe))}function Te(H,we){const Fe=c.get(we).get(H);l.get(we)!==Fe&&(t.uniformBlockBinding(we,Fe,H.__bindingPointIndex),l.set(we,Fe))}function ct(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},xe=null,Me={},d={},f=new WeakMap,h=[],g=null,b=!1,m=null,p=null,C=null,E=null,y=null,D=null,L=null,P=new yt(0,0,0),k=0,S=!1,A=null,U=null,W=null,O=null,I=null,_t.set(0,0,t.canvas.width,t.canvas.height),Ze.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:B,disable:ue,bindFramebuffer:oe,drawBuffers:me,useProgram:Qe,setBlending:z,setMaterial:K,setFlipSided:se,setCullFace:q,setLineWidth:ge,setPolygonOffset:te,setScissorTest:ce,activeTexture:de,bindTexture:Pe,unbindTexture:M,compressedTexImage2D:x,compressedTexImage3D:F,texImage2D:Ue,texImage3D:_e,updateUBOMapping:Oe,uniformBlockBinding:Te,texStorage2D:ve,texStorage3D:De,texSubImage2D:Z,texSubImage3D:le,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ie,scissor:Ce,viewport:Be,reset:ct}}function RP(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,x){return h?new OffscreenCanvas(M,x):sa("canvas")}function b(M,x,F){let Z=1;const le=Pe(M);if((le.width>F||le.height>F)&&(Z=F/Math.max(le.width,le.height)),Z<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const Q=Math.floor(Z*le.width),Ie=Math.floor(Z*le.height);d===void 0&&(d=g(Q,Ie));const ve=x?g(Q,Ie):d;return ve.width=Q,ve.height=Ie,ve.getContext("2d").drawImage(M,0,0,Q,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+Q+"x"+Ie+")."),ve}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),M;return M}function m(M){return M.generateMipmaps}function p(M){t.generateMipmap(M)}function C(M){return M.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?t.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(M,x,F,Z,le=!1){if(M!==null){if(t[M]!==void 0)return t[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let Q=x;if(x===t.RED&&(F===t.FLOAT&&(Q=t.R32F),F===t.HALF_FLOAT&&(Q=t.R16F),F===t.UNSIGNED_BYTE&&(Q=t.R8)),x===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(Q=t.R8UI),F===t.UNSIGNED_SHORT&&(Q=t.R16UI),F===t.UNSIGNED_INT&&(Q=t.R32UI),F===t.BYTE&&(Q=t.R8I),F===t.SHORT&&(Q=t.R16I),F===t.INT&&(Q=t.R32I)),x===t.RG&&(F===t.FLOAT&&(Q=t.RG32F),F===t.HALF_FLOAT&&(Q=t.RG16F),F===t.UNSIGNED_BYTE&&(Q=t.RG8)),x===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(Q=t.RG8UI),F===t.UNSIGNED_SHORT&&(Q=t.RG16UI),F===t.UNSIGNED_INT&&(Q=t.RG32UI),F===t.BYTE&&(Q=t.RG8I),F===t.SHORT&&(Q=t.RG16I),F===t.INT&&(Q=t.RG32I)),x===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),F===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),F===t.UNSIGNED_INT&&(Q=t.RGB32UI),F===t.BYTE&&(Q=t.RGB8I),F===t.SHORT&&(Q=t.RGB16I),F===t.INT&&(Q=t.RGB32I)),x===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),F===t.UNSIGNED_INT&&(Q=t.RGBA32UI),F===t.BYTE&&(Q=t.RGBA8I),F===t.SHORT&&(Q=t.RGBA16I),F===t.INT&&(Q=t.RGBA32I)),x===t.RGB&&F===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),x===t.RGBA){const Ie=le?Ol:Mt.getTransfer(Z);F===t.FLOAT&&(Q=t.RGBA32F),F===t.HALF_FLOAT&&(Q=t.RGBA16F),F===t.UNSIGNED_BYTE&&(Q=Ie===Lt?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function y(M,x){let F;return M?x===null||x===or||x===ta?F=t.DEPTH24_STENCIL8:x===Zi?F=t.DEPTH32F_STENCIL8:x===ea&&(F=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===or||x===ta?F=t.DEPTH_COMPONENT24:x===Zi?F=t.DEPTH_COMPONENT32F:x===ea&&(F=t.DEPTH_COMPONENT16),F}function D(M,x){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==gi&&M.minFilter!==Ai?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function L(M){const x=M.target;x.removeEventListener("dispose",L),k(x),x.isVideoTexture&&u.delete(x)}function P(M){const x=M.target;x.removeEventListener("dispose",P),A(x)}function k(M){const x=i.get(M);if(x.__webglInit===void 0)return;const F=M.source,Z=f.get(F);if(Z){const le=Z[x.__cacheKey];le.usedTimes--,le.usedTimes===0&&S(M),Object.keys(Z).length===0&&f.delete(F)}i.remove(M)}function S(M){const x=i.get(M);t.deleteTexture(x.__webglTexture);const F=M.source,Z=f.get(F);delete Z[x.__cacheKey],o.memory.textures--}function A(M){const x=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let le=0;le<x.__webglFramebuffer[Z].length;le++)t.deleteFramebuffer(x.__webglFramebuffer[Z][le]);else t.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)t.deleteFramebuffer(x.__webglFramebuffer[Z]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=M.textures;for(let Z=0,le=F.length;Z<le;Z++){const Q=i.get(F[Z]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(F[Z])}i.remove(M)}let U=0;function W(){U=0}function O(){const M=U;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),U+=1,M}function I(M){const x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function G(M,x){const F=i.get(M);if(M.isVideoTexture&&ce(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&F.__version!==M.version){const Z=M.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(F,M,x);return}}else M.isExternalTexture&&(F.__webglTexture=M.sourceTexture?M.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+x)}function V(M,x){const F=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&F.__version!==M.version){ye(F,M,x);return}n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+x)}function ee(M,x){const F=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&F.__version!==M.version){ye(F,M,x);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+x)}function Y(M,x){const F=i.get(M);if(M.version>0&&F.__version!==M.version){B(F,M,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+x)}const xe={[Iu]:t.REPEAT,[qs]:t.CLAMP_TO_EDGE,[Uu]:t.MIRRORED_REPEAT},Me={[gi]:t.NEAREST,[sA]:t.NEAREST_MIPMAP_NEAREST,[Ua]:t.NEAREST_MIPMAP_LINEAR,[Ai]:t.LINEAR,[Mc]:t.LINEAR_MIPMAP_NEAREST,[Ys]:t.LINEAR_MIPMAP_LINEAR},Le={[lA]:t.NEVER,[pA]:t.ALWAYS,[cA]:t.LESS,[hv]:t.LEQUAL,[uA]:t.EQUAL,[hA]:t.GEQUAL,[dA]:t.GREATER,[fA]:t.NOTEQUAL};function Ge(M,x){if(x.type===Zi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ai||x.magFilter===Mc||x.magFilter===Ua||x.magFilter===Ys||x.minFilter===Ai||x.minFilter===Mc||x.minFilter===Ua||x.minFilter===Ys)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(M,t.TEXTURE_WRAP_S,xe[x.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,xe[x.wrapT]),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,xe[x.wrapR]),t.texParameteri(M,t.TEXTURE_MAG_FILTER,Me[x.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,Me[x.minFilter]),x.compareFunction&&(t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,Le[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===gi||x.minFilter!==Ua&&x.minFilter!==Ys||x.type===Zi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(M,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function _t(M,x){let F=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",L));const Z=x.source;let le=f.get(Z);le===void 0&&(le={},f.set(Z,le));const Q=I(x);if(Q!==M.__cacheKey){le[Q]===void 0&&(le[Q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,F=!0),le[Q].usedTimes++;const Ie=le[M.__cacheKey];Ie!==void 0&&(le[M.__cacheKey].usedTimes--,Ie.usedTimes===0&&S(x)),M.__cacheKey=Q,M.__webglTexture=le[Q].texture}return F}function Ze(M,x,F){return Math.floor(Math.floor(M/F)/x)}function ie(M,x,F,Z){const Q=M.updateRanges;if(Q.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,F,Z,x.data);else{Q.sort((_e,Ce)=>_e.start-Ce.start);let Ie=0;for(let _e=1;_e<Q.length;_e++){const Ce=Q[Ie],Be=Q[_e],Oe=Ce.start+Ce.count,Te=Ze(Be.start,x.width,4),ct=Ze(Ce.start,x.width,4);Be.start<=Oe+1&&Te===ct&&Ze(Be.start+Be.count-1,x.width,4)===Te?Ce.count=Math.max(Ce.count,Be.start+Be.count-Ce.start):(++Ie,Q[Ie]=Be)}Q.length=Ie+1;const ve=t.getParameter(t.UNPACK_ROW_LENGTH),De=t.getParameter(t.UNPACK_SKIP_PIXELS),Ue=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let _e=0,Ce=Q.length;_e<Ce;_e++){const Be=Q[_e],Oe=Math.floor(Be.start/4),Te=Math.ceil(Be.count/4),ct=Oe%x.width,H=Math.floor(Oe/x.width),we=Te,Ee=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ct),t.pixelStorei(t.UNPACK_SKIP_ROWS,H),n.texSubImage2D(t.TEXTURE_2D,0,ct,H,we,Ee,F,Z,x.data)}M.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ve),t.pixelStorei(t.UNPACK_SKIP_PIXELS,De),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ue)}}function ye(M,x,F){let Z=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=t.TEXTURE_3D);const le=_t(M,x),Q=x.source;n.bindTexture(Z,M.__webglTexture,t.TEXTURE0+F);const Ie=i.get(Q);if(Q.version!==Ie.__version||le===!0){n.activeTexture(t.TEXTURE0+F);const ve=Mt.getPrimaries(Mt.workingColorSpace),De=x.colorSpace===vs?null:Mt.getPrimaries(x.colorSpace),Ue=x.colorSpace===vs||ve===De?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let _e=b(x.image,!1,s.maxTextureSize);_e=de(x,_e);const Ce=r.convert(x.format,x.colorSpace),Be=r.convert(x.type);let Oe=E(x.internalFormat,Ce,Be,x.colorSpace,x.isVideoTexture);Ge(Z,x);let Te;const ct=x.mipmaps,H=x.isVideoTexture!==!0,we=Ie.__version===void 0||le===!0,Ee=Q.dataReady,Fe=D(x,_e);if(x.isDepthTexture)Oe=y(x.format===ia,x.type),we&&(H?n.texStorage2D(t.TEXTURE_2D,1,Oe,_e.width,_e.height):n.texImage2D(t.TEXTURE_2D,0,Oe,_e.width,_e.height,0,Ce,Be,null));else if(x.isDataTexture)if(ct.length>0){H&&we&&n.texStorage2D(t.TEXTURE_2D,Fe,Oe,ct[0].width,ct[0].height);for(let be=0,he=ct.length;be<he;be++)Te=ct[be],H?Ee&&n.texSubImage2D(t.TEXTURE_2D,be,0,0,Te.width,Te.height,Ce,Be,Te.data):n.texImage2D(t.TEXTURE_2D,be,Oe,Te.width,Te.height,0,Ce,Be,Te.data);x.generateMipmaps=!1}else H?(we&&n.texStorage2D(t.TEXTURE_2D,Fe,Oe,_e.width,_e.height),Ee&&ie(x,_e,Ce,Be)):n.texImage2D(t.TEXTURE_2D,0,Oe,_e.width,_e.height,0,Ce,Be,_e.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){H&&we&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Fe,Oe,ct[0].width,ct[0].height,_e.depth);for(let be=0,he=ct.length;be<he;be++)if(Te=ct[be],x.format!==hi)if(Ce!==null)if(H){if(Ee)if(x.layerUpdates.size>0){const Ve=qh(Te.width,Te.height,x.format,x.type);for(const tt of x.layerUpdates){const dt=Te.data.subarray(tt*Ve/Te.data.BYTES_PER_ELEMENT,(tt+1)*Ve/Te.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,be,0,0,tt,Te.width,Te.height,1,Ce,dt)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,be,0,0,0,Te.width,Te.height,_e.depth,Ce,Te.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,be,Oe,Te.width,Te.height,_e.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Ee&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,be,0,0,0,Te.width,Te.height,_e.depth,Ce,Be,Te.data):n.texImage3D(t.TEXTURE_2D_ARRAY,be,Oe,Te.width,Te.height,_e.depth,0,Ce,Be,Te.data)}else{H&&we&&n.texStorage2D(t.TEXTURE_2D,Fe,Oe,ct[0].width,ct[0].height);for(let be=0,he=ct.length;be<he;be++)Te=ct[be],x.format!==hi?Ce!==null?H?Ee&&n.compressedTexSubImage2D(t.TEXTURE_2D,be,0,0,Te.width,Te.height,Ce,Te.data):n.compressedTexImage2D(t.TEXTURE_2D,be,Oe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Ee&&n.texSubImage2D(t.TEXTURE_2D,be,0,0,Te.width,Te.height,Ce,Be,Te.data):n.texImage2D(t.TEXTURE_2D,be,Oe,Te.width,Te.height,0,Ce,Be,Te.data)}else if(x.isDataArrayTexture)if(H){if(we&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Fe,Oe,_e.width,_e.height,_e.depth),Ee)if(x.layerUpdates.size>0){const be=qh(_e.width,_e.height,x.format,x.type);for(const he of x.layerUpdates){const Ve=_e.data.subarray(he*be/_e.data.BYTES_PER_ELEMENT,(he+1)*be/_e.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,_e.width,_e.height,1,Ce,Be,Ve)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ce,Be,_e.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Oe,_e.width,_e.height,_e.depth,0,Ce,Be,_e.data);else if(x.isData3DTexture)H?(we&&n.texStorage3D(t.TEXTURE_3D,Fe,Oe,_e.width,_e.height,_e.depth),Ee&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ce,Be,_e.data)):n.texImage3D(t.TEXTURE_3D,0,Oe,_e.width,_e.height,_e.depth,0,Ce,Be,_e.data);else if(x.isFramebufferTexture){if(we)if(H)n.texStorage2D(t.TEXTURE_2D,Fe,Oe,_e.width,_e.height);else{let be=_e.width,he=_e.height;for(let Ve=0;Ve<Fe;Ve++)n.texImage2D(t.TEXTURE_2D,Ve,Oe,be,he,0,Ce,Be,null),be>>=1,he>>=1}}else if(ct.length>0){if(H&&we){const be=Pe(ct[0]);n.texStorage2D(t.TEXTURE_2D,Fe,Oe,be.width,be.height)}for(let be=0,he=ct.length;be<he;be++)Te=ct[be],H?Ee&&n.texSubImage2D(t.TEXTURE_2D,be,0,0,Ce,Be,Te):n.texImage2D(t.TEXTURE_2D,be,Oe,Ce,Be,Te);x.generateMipmaps=!1}else if(H){if(we){const be=Pe(_e);n.texStorage2D(t.TEXTURE_2D,Fe,Oe,be.width,be.height)}Ee&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ce,Be,_e)}else n.texImage2D(t.TEXTURE_2D,0,Oe,Ce,Be,_e);m(x)&&p(Z),Ie.__version=Q.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function B(M,x,F){if(x.image.length!==6)return;const Z=_t(M,x),le=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+F);const Q=i.get(le);if(le.version!==Q.__version||Z===!0){n.activeTexture(t.TEXTURE0+F);const Ie=Mt.getPrimaries(Mt.workingColorSpace),ve=x.colorSpace===vs?null:Mt.getPrimaries(x.colorSpace),De=x.colorSpace===vs||Ie===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const Ue=x.isCompressedTexture||x.image[0].isCompressedTexture,_e=x.image[0]&&x.image[0].isDataTexture,Ce=[];for(let he=0;he<6;he++)!Ue&&!_e?Ce[he]=b(x.image[he],!0,s.maxCubemapSize):Ce[he]=_e?x.image[he].image:x.image[he],Ce[he]=de(x,Ce[he]);const Be=Ce[0],Oe=r.convert(x.format,x.colorSpace),Te=r.convert(x.type),ct=E(x.internalFormat,Oe,Te,x.colorSpace),H=x.isVideoTexture!==!0,we=Q.__version===void 0||Z===!0,Ee=le.dataReady;let Fe=D(x,Be);Ge(t.TEXTURE_CUBE_MAP,x);let be;if(Ue){H&&we&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Fe,ct,Be.width,Be.height);for(let he=0;he<6;he++){be=Ce[he].mipmaps;for(let Ve=0;Ve<be.length;Ve++){const tt=be[Ve];x.format!==hi?Oe!==null?H?Ee&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ve,0,0,tt.width,tt.height,Oe,tt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ve,ct,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ve,0,0,tt.width,tt.height,Oe,Te,tt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ve,ct,tt.width,tt.height,0,Oe,Te,tt.data)}}}else{if(be=x.mipmaps,H&&we){be.length>0&&Fe++;const he=Pe(Ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Fe,ct,he.width,he.height)}for(let he=0;he<6;he++)if(_e){H?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ce[he].width,Ce[he].height,Oe,Te,Ce[he].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ct,Ce[he].width,Ce[he].height,0,Oe,Te,Ce[he].data);for(let Ve=0;Ve<be.length;Ve++){const dt=be[Ve].image[he].image;H?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ve+1,0,0,dt.width,dt.height,Oe,Te,dt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ve+1,ct,dt.width,dt.height,0,Oe,Te,dt.data)}}else{H?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Oe,Te,Ce[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ct,Oe,Te,Ce[he]);for(let Ve=0;Ve<be.length;Ve++){const tt=be[Ve];H?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ve+1,0,0,Oe,Te,tt.image[he]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ve+1,ct,Oe,Te,tt.image[he])}}}m(x)&&p(t.TEXTURE_CUBE_MAP),Q.__version=le.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function ue(M,x,F,Z,le,Q){const Ie=r.convert(F.format,F.colorSpace),ve=r.convert(F.type),De=E(F.internalFormat,Ie,ve,F.colorSpace),Ue=i.get(x),_e=i.get(F);if(_e.__renderTarget=x,!Ue.__hasExternalTextures){const Ce=Math.max(1,x.width>>Q),Be=Math.max(1,x.height>>Q);le===t.TEXTURE_3D||le===t.TEXTURE_2D_ARRAY?n.texImage3D(le,Q,De,Ce,Be,x.depth,0,Ie,ve,null):n.texImage2D(le,Q,De,Ce,Be,0,Ie,ve,null)}n.bindFramebuffer(t.FRAMEBUFFER,M),te(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,le,_e.__webglTexture,0,ge(x)):(le===t.TEXTURE_2D||le>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,le,_e.__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function oe(M,x,F){if(t.bindRenderbuffer(t.RENDERBUFFER,M),x.depthBuffer){const Z=x.depthTexture,le=Z&&Z.isDepthTexture?Z.type:null,Q=y(x.stencilBuffer,le),Ie=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=ge(x);te(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ve,Q,x.width,x.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,Q,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,Q,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ie,t.RENDERBUFFER,M)}else{const Z=x.textures;for(let le=0;le<Z.length;le++){const Q=Z[le],Ie=r.convert(Q.format,Q.colorSpace),ve=r.convert(Q.type),De=E(Q.internalFormat,Ie,ve,Q.colorSpace),Ue=ge(x);F&&te(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,De,x.width,x.height):te(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ue,De,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,De,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function me(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(x.depthTexture);Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G(x.depthTexture,0);const le=Z.__webglTexture,Q=ge(x);if(x.depthTexture.format===na)te(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0);else if(x.depthTexture.format===ia)te(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Qe(M){const x=i.get(M),F=M.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==M.depthTexture){const Z=M.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){const le=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",le)};Z.addEventListener("dispose",le),x.__depthDisposeCallback=le}x.__boundDepthTexture=Z}if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const Z=M.texture.mipmaps;Z&&Z.length>0?me(x.__webglFramebuffer[0],M):me(x.__webglFramebuffer,M)}else if(F){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=t.createRenderbuffer(),oe(x.__webglDepthbuffer[Z],M,!1);else{const le=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,Q)}}else{const Z=M.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),oe(x.__webglDepthbuffer,M,!1);else{const le=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,Q)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function R(M,x,F){const Z=i.get(M);x!==void 0&&ue(Z.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&Qe(M)}function v(M){const x=M.texture,F=i.get(M),Z=i.get(x);M.addEventListener("dispose",P);const le=M.textures,Q=M.isWebGLCubeRenderTarget===!0,Ie=le.length>1;if(Ie||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=x.version,o.memory.textures++),Q){F.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[ve]=[];for(let De=0;De<x.mipmaps.length;De++)F.__webglFramebuffer[ve][De]=t.createFramebuffer()}else F.__webglFramebuffer[ve]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let ve=0;ve<x.mipmaps.length;ve++)F.__webglFramebuffer[ve]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(Ie)for(let ve=0,De=le.length;ve<De;ve++){const Ue=i.get(le[ve]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=t.createTexture(),o.memory.textures++)}if(M.samples>0&&te(M)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ve=0;ve<le.length;ve++){const De=le[ve];F.__webglColorRenderbuffer[ve]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[ve]);const Ue=r.convert(De.format,De.colorSpace),_e=r.convert(De.type),Ce=E(De.internalFormat,Ue,_e,De.colorSpace,M.isXRRenderTarget===!0),Be=ge(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,Be,Ce,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,F.__webglColorRenderbuffer[ve])}t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),oe(F.__webglDepthRenderbuffer,M,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),Ge(t.TEXTURE_CUBE_MAP,x);for(let ve=0;ve<6;ve++)if(x.mipmaps&&x.mipmaps.length>0)for(let De=0;De<x.mipmaps.length;De++)ue(F.__webglFramebuffer[ve][De],M,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,De);else ue(F.__webglFramebuffer[ve],M,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(x)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ie){for(let ve=0,De=le.length;ve<De;ve++){const Ue=le[ve],_e=i.get(Ue);let Ce=t.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(Ce=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ce,_e.__webglTexture),Ge(Ce,Ue),ue(F.__webglFramebuffer,M,Ue,t.COLOR_ATTACHMENT0+ve,Ce,0),m(Ue)&&p(Ce)}n.unbindTexture()}else{let ve=t.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ve=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ve,Z.__webglTexture),Ge(ve,x),x.mipmaps&&x.mipmaps.length>0)for(let De=0;De<x.mipmaps.length;De++)ue(F.__webglFramebuffer[De],M,x,t.COLOR_ATTACHMENT0,ve,De);else ue(F.__webglFramebuffer,M,x,t.COLOR_ATTACHMENT0,ve,0);m(x)&&p(ve),n.unbindTexture()}M.depthBuffer&&Qe(M)}function z(M){const x=M.textures;for(let F=0,Z=x.length;F<Z;F++){const le=x[F];if(m(le)){const Q=C(M),Ie=i.get(le).__webglTexture;n.bindTexture(Q,Ie),p(Q),n.unbindTexture()}}}const K=[],se=[];function q(M){if(M.samples>0){if(te(M)===!1){const x=M.textures,F=M.width,Z=M.height;let le=t.COLOR_BUFFER_BIT;const Q=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ie=i.get(M),ve=x.length>1;if(ve)for(let Ue=0;Ue<x.length;Ue++)n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const De=M.texture.mipmaps;De&&De.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ue=0;Ue<x.length;Ue++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(le|=t.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(le|=t.STENCIL_BUFFER_BIT)),ve){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ue]);const _e=i.get(x[Ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,_e,0)}t.blitFramebuffer(0,0,F,Z,0,0,F,Z,le,t.NEAREST),l===!0&&(K.length=0,se.length=0,K.push(t.COLOR_ATTACHMENT0+Ue),M.depthBuffer&&M.resolveDepthBuffer===!1&&(K.push(Q),se.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,se)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,K))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ve)for(let Ue=0;Ue<x.length;Ue++){n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ue]);const _e=i.get(x[Ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,_e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const x=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function ge(M){return Math.min(s.maxSamples,M.samples)}function te(M){const x=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ce(M){const x=o.render.frame;u.get(M)!==x&&(u.set(M,x),M.update())}function de(M,x){const F=M.colorSpace,Z=M.format,le=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||F!==uo&&F!==vs&&(Mt.getTransfer(F)===Lt?(Z!==hi||le!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function Pe(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=W,this.setTexture2D=G,this.setTexture2DArray=V,this.setTexture3D=ee,this.setTextureCube=Y,this.rebindTextures=R,this.setupRenderTarget=v,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=te}function PP(t,e){function n(i,s=vs){let r;const o=Mt.getTransfer(s);if(i===Oi)return t.UNSIGNED_BYTE;if(i===Kd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Zd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ov)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===sv)return t.BYTE;if(i===rv)return t.SHORT;if(i===ea)return t.UNSIGNED_SHORT;if(i===Yd)return t.INT;if(i===or)return t.UNSIGNED_INT;if(i===Zi)return t.FLOAT;if(i===wa)return t.HALF_FLOAT;if(i===av)return t.ALPHA;if(i===lv)return t.RGB;if(i===hi)return t.RGBA;if(i===na)return t.DEPTH_COMPONENT;if(i===ia)return t.DEPTH_STENCIL;if(i===cv)return t.RED;if(i===Qd)return t.RED_INTEGER;if(i===uv)return t.RG;if(i===Jd)return t.RG_INTEGER;if(i===ef)return t.RGBA_INTEGER;if(i===ul||i===dl||i===fl||i===hl)if(o===Lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ul)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===dl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===hl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ul)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===dl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===hl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ou||i===Nu||i===Fu||i===ku)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ou)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ku)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bu||i===Hu||i===zu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Bu||i===Hu)return o===Lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===zu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Vu||i===Gu||i===Wu||i===$u||i===Xu||i===ju||i===qu||i===Yu||i===Ku||i===Zu||i===Qu||i===Ju||i===ed||i===td)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Vu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$u)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ju)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ku)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qu)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ju)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ed)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===td)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pl||i===nd||i===id)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===pl)return o===Lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nd)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===id)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dv||i===sd||i===rd||i===od)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===pl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===sd)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===rd)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===od)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ta?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Nv extends Rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const DP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LP=`
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

}`;class IP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Nv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ps({vertexShader:DP,fragmentShader:LP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new pi(new ic(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UP extends fr{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,g=null;const b=new IP,m={},p=n.getContextAttributes();let C=null,E=null;const y=[],D=[],L=new lt;let P=null;const k=new Xn;k.viewport=new jt;const S=new Xn;S.viewport=new jt;const A=[k,S],U=new e1;let W=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ye=y[ie];return ye===void 0&&(ye=new Xc,y[ie]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(ie){let ye=y[ie];return ye===void 0&&(ye=new Xc,y[ie]=ye),ye.getGripSpace()},this.getHand=function(ie){let ye=y[ie];return ye===void 0&&(ye=new Xc,y[ie]=ye),ye.getHandSpace()};function I(ie){const ye=D.indexOf(ie.inputSource);if(ye===-1)return;const B=y[ye];B!==void 0&&(B.update(ie.inputSource,ie.frame,c||o),B.dispatchEvent({type:ie.type,data:ie.inputSource}))}function G(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",V);for(let ie=0;ie<y.length;ie++){const ye=D[ie];ye!==null&&(D[ie]=null,y[ie].disconnect(ye))}W=null,O=null,b.reset();for(const ie in m)delete m[ie];e.setRenderTarget(C),h=null,f=null,d=null,s=null,E=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",G),s.addEventListener("inputsourceschange",V),p.xrCompatible!==!0&&await n.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(s,n)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let B=null,ue=null,oe=null;p.depth&&(oe=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,B=p.stencil?ia:na,ue=p.stencil?ta:or);const me={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:r};f=d.createProjectionLayer(me),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new lr(f.textureWidth,f.textureHeight,{format:hi,type:Oi,depthTexture:new Tv(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const B={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,n,B),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),E=new lr(h.framebufferWidth,h.framebufferHeight,{format:hi,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ze.setContext(s),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function V(ie){for(let ye=0;ye<ie.removed.length;ye++){const B=ie.removed[ye],ue=D.indexOf(B);ue>=0&&(D[ue]=null,y[ue].disconnect(B))}for(let ye=0;ye<ie.added.length;ye++){const B=ie.added[ye];let ue=D.indexOf(B);if(ue===-1){for(let me=0;me<y.length;me++)if(me>=D.length){D.push(B),ue=me;break}else if(D[me]===null){D[me]=B,ue=me;break}if(ue===-1)break}const oe=y[ue];oe&&oe.connect(B)}}const ee=new J,Y=new J;function xe(ie,ye,B){ee.setFromMatrixPosition(ye.matrixWorld),Y.setFromMatrixPosition(B.matrixWorld);const ue=ee.distanceTo(Y),oe=ye.projectionMatrix.elements,me=B.projectionMatrix.elements,Qe=oe[14]/(oe[10]-1),R=oe[14]/(oe[10]+1),v=(oe[9]+1)/oe[5],z=(oe[9]-1)/oe[5],K=(oe[8]-1)/oe[0],se=(me[8]+1)/me[0],q=Qe*K,ge=Qe*se,te=ue/(-K+se),ce=te*-K;if(ye.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(ce),ie.translateZ(te),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),oe[10]===-1)ie.projectionMatrix.copy(ye.projectionMatrix),ie.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const de=Qe+te,Pe=R+te,M=q-ce,x=ge+(ue-ce),F=v*R/Pe*de,Z=z*R/Pe*de;ie.projectionMatrix.makePerspective(M,x,F,Z,de,Pe),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function Me(ie,ye){ye===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ye.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let ye=ie.near,B=ie.far;b.texture!==null&&(b.depthNear>0&&(ye=b.depthNear),b.depthFar>0&&(B=b.depthFar)),U.near=S.near=k.near=ye,U.far=S.far=k.far=B,(W!==U.near||O!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),W=U.near,O=U.far),U.layers.mask=ie.layers.mask|6,k.layers.mask=U.layers.mask&3,S.layers.mask=U.layers.mask&5;const ue=ie.parent,oe=U.cameras;Me(U,ue);for(let me=0;me<oe.length;me++)Me(oe[me],ue);oe.length===2?xe(U,k,S):U.projectionMatrix.copy(k.projectionMatrix),Le(ie,U,ue)};function Le(ie,ye,B){B===null?ie.matrix.copy(ye.matrixWorld):(ie.matrix.copy(B.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ye.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ye.projectionMatrix),ie.projectionMatrixInverse.copy(ye.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=ad*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(ie){l=ie,f!==null&&(f.fixedFoveation=ie),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ie)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(U)},this.getCameraTexture=function(ie){return m[ie]};let Ge=null;function _t(ie,ye){if(u=ye.getViewerPose(c||o),g=ye,u!==null){const B=u.views;h!==null&&(e.setRenderTargetFramebuffer(E,h.framebuffer),e.setRenderTarget(E));let ue=!1;B.length!==U.cameras.length&&(U.cameras.length=0,ue=!0);for(let R=0;R<B.length;R++){const v=B[R];let z=null;if(h!==null)z=h.getViewport(v);else{const se=d.getViewSubImage(f,v);z=se.viewport,R===0&&(e.setRenderTargetTextures(E,se.colorTexture,se.depthStencilTexture),e.setRenderTarget(E))}let K=A[R];K===void 0&&(K=new Xn,K.layers.enable(R),K.viewport=new jt,A[R]=K),K.matrix.fromArray(v.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(v.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(z.x,z.y,z.width,z.height),R===0&&(U.matrix.copy(K.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),ue===!0&&U.cameras.push(K)}const oe=s.enabledFeatures;if(oe&&oe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&d){const R=d.getDepthInformation(B[0]);R&&R.isValid&&R.texture&&b.init(R,s.renderState)}if(oe&&oe.includes("camera-access")&&(e.state.unbindTexture(),d))for(let R=0;R<B.length;R++){const v=B[R].camera;if(v){let z=m[v];z||(z=new Nv,m[v]=z);const K=d.getCameraImage(v);z.sourceTexture=K}}}for(let B=0;B<y.length;B++){const ue=D[B],oe=y[B];ue!==null&&oe!==void 0&&oe.update(ue,ye,c||o)}Ge&&Ge(ie,ye),ye.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ye}),g=null}const Ze=new Dv;Ze.setAnimationLoop(_t),this.setAnimationLoop=function(ie){Ge=ie},this.dispose=function(){}}}const Gs=new Ni,OP=new Kt;function NP(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,wv(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,C,E,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),b(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,C,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Bn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Bn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const C=e.get(p),E=C.envMap,y=C.envMapRotation;E&&(m.envMap.value=E,Gs.copy(y),Gs.x*=-1,Gs.y*=-1,Gs.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Gs.y*=-1,Gs.z*=-1),m.envMapRotation.value.setFromMatrix4(OP.makeRotationFromEuler(Gs)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,C,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*C,m.scale.value=E*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,C){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Bn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){const C=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function FP(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(C,E){const y=E.program;i.uniformBlockBinding(C,y)}function c(C,E){let y=s[C.id];y===void 0&&(g(C),y=u(C),s[C.id]=y,C.addEventListener("dispose",m));const D=E.program;i.updateUBOMapping(C,D);const L=e.render.frame;r[C.id]!==L&&(f(C),r[C.id]=L)}function u(C){const E=d();C.__bindingPointIndex=E;const y=t.createBuffer(),D=C.__size,L=C.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,D,L),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,y),y}function d(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(C){const E=s[C.id],y=C.uniforms,D=C.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let L=0,P=y.length;L<P;L++){const k=Array.isArray(y[L])?y[L]:[y[L]];for(let S=0,A=k.length;S<A;S++){const U=k[S];if(h(U,L,S,D)===!0){const W=U.__offset,O=Array.isArray(U.value)?U.value:[U.value];let I=0;for(let G=0;G<O.length;G++){const V=O[G],ee=b(V);typeof V=="number"||typeof V=="boolean"?(U.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,W+I,U.__data)):V.isMatrix3?(U.__data[0]=V.elements[0],U.__data[1]=V.elements[1],U.__data[2]=V.elements[2],U.__data[3]=0,U.__data[4]=V.elements[3],U.__data[5]=V.elements[4],U.__data[6]=V.elements[5],U.__data[7]=0,U.__data[8]=V.elements[6],U.__data[9]=V.elements[7],U.__data[10]=V.elements[8],U.__data[11]=0):(V.toArray(U.__data,I),I+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,U.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(C,E,y,D){const L=C.value,P=E+"_"+y;if(D[P]===void 0)return typeof L=="number"||typeof L=="boolean"?D[P]=L:D[P]=L.clone(),!0;{const k=D[P];if(typeof L=="number"||typeof L=="boolean"){if(k!==L)return D[P]=L,!0}else if(k.equals(L)===!1)return k.copy(L),!0}return!1}function g(C){const E=C.uniforms;let y=0;const D=16;for(let P=0,k=E.length;P<k;P++){const S=Array.isArray(E[P])?E[P]:[E[P]];for(let A=0,U=S.length;A<U;A++){const W=S[A],O=Array.isArray(W.value)?W.value:[W.value];for(let I=0,G=O.length;I<G;I++){const V=O[I],ee=b(V),Y=y%D,xe=Y%ee.boundary,Me=Y+xe;y+=xe,Me!==0&&D-Me<ee.storage&&(y+=D-Me),W.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=ee.storage}}}const L=y%D;return L>0&&(y+=D-L),C.__size=y,C.__cache={},this}function b(C){const E={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(E.boundary=4,E.storage=4):C.isVector2?(E.boundary=8,E.storage=8):C.isVector3||C.isColor?(E.boundary=16,E.storage=12):C.isVector4?(E.boundary=16,E.storage=16):C.isMatrix3?(E.boundary=48,E.storage=48):C.isMatrix4?(E.boundary=64,E.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),E}function m(C){const E=C.target;E.removeEventListener("dispose",m);const y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const C in s)t.deleteBuffer(s[C]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Fv{constructor(e={}){const{canvas:n=vA(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),b=new Int32Array(4);let m=null,p=null;const C=[],E=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let D=!1;this._outputColorSpace=pn;let L=0,P=0,k=null,S=-1,A=null;const U=new jt,W=new jt;let O=null;const I=new yt(0);let G=0,V=n.width,ee=n.height,Y=1,xe=null,Me=null;const Le=new jt(0,0,V,ee),Ge=new jt(0,0,V,ee);let _t=!1;const Ze=new sf;let ie=!1,ye=!1;const B=new Kt,ue=new J,oe=new jt,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function R(){return k===null?Y:1}let v=i;function z(T,X){return n.getContext(T,X)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${qd}`),n.addEventListener("webglcontextlost",Ee,!1),n.addEventListener("webglcontextrestored",Fe,!1),n.addEventListener("webglcontextcreationerror",be,!1),v===null){const X="webgl2";if(v=z(X,T),v===null)throw z(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let K,se,q,ge,te,ce,de,Pe,M,x,F,Z,le,Q,Ie,ve,De,Ue,_e,Ce,Be,Oe,Te,ct;function H(){K=new q2(v),K.init(),Oe=new PP(v,K),se=new z2(v,K,e,Oe),q=new CP(v,K),se.reversedDepthBuffer&&f&&q.buffers.depth.setReversed(!0),ge=new Z2(v),te=new mP,ce=new RP(v,K,q,te,se,Oe,ge),de=new G2(y),Pe=new j2(y),M=new i1(v),Te=new B2(v,M),x=new Y2(v,M,ge,Te),F=new J2(v,x,M,ge),_e=new Q2(v,se,ce),ve=new V2(te),Z=new pP(y,de,Pe,K,se,Te,ve),le=new NP(y,te),Q=new vP,Ie=new SP(K),Ue=new k2(y,de,Pe,q,F,h,l),De=new TP(y,F,se),ct=new FP(v,ge,se,q),Ce=new H2(v,K,ge),Be=new K2(v,K,ge),ge.programs=Z.programs,y.capabilities=se,y.extensions=K,y.properties=te,y.renderLists=Q,y.shadowMap=De,y.state=q,y.info=ge}H();const we=new UP(y,v);this.xr=we,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const T=K.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=K.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(V,ee,!1))},this.getSize=function(T){return T.set(V,ee)},this.setSize=function(T,X,ne=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=T,ee=X,n.width=Math.floor(T*Y),n.height=Math.floor(X*Y),ne===!0&&(n.style.width=T+"px",n.style.height=X+"px"),this.setViewport(0,0,T,X)},this.getDrawingBufferSize=function(T){return T.set(V*Y,ee*Y).floor()},this.setDrawingBufferSize=function(T,X,ne){V=T,ee=X,Y=ne,n.width=Math.floor(T*ne),n.height=Math.floor(X*ne),this.setViewport(0,0,T,X)},this.getCurrentViewport=function(T){return T.copy(U)},this.getViewport=function(T){return T.copy(Le)},this.setViewport=function(T,X,ne,re){T.isVector4?Le.set(T.x,T.y,T.z,T.w):Le.set(T,X,ne,re),q.viewport(U.copy(Le).multiplyScalar(Y).round())},this.getScissor=function(T){return T.copy(Ge)},this.setScissor=function(T,X,ne,re){T.isVector4?Ge.set(T.x,T.y,T.z,T.w):Ge.set(T,X,ne,re),q.scissor(W.copy(Ge).multiplyScalar(Y).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(T){q.setScissorTest(_t=T)},this.setOpaqueSort=function(T){xe=T},this.setTransparentSort=function(T){Me=T},this.getClearColor=function(T){return T.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(T=!0,X=!0,ne=!0){let re=0;if(T){let j=!1;if(k!==null){const Se=k.texture.format;j=Se===ef||Se===Jd||Se===Qd}if(j){const Se=k.texture.type,Ne=Se===Oi||Se===or||Se===ea||Se===ta||Se===Kd||Se===Zd,We=Ue.getClearColor(),ze=Ue.getClearAlpha(),nt=We.r,rt=We.g,qe=We.b;Ne?(g[0]=nt,g[1]=rt,g[2]=qe,g[3]=ze,v.clearBufferuiv(v.COLOR,0,g)):(b[0]=nt,b[1]=rt,b[2]=qe,b[3]=ze,v.clearBufferiv(v.COLOR,0,b))}else re|=v.COLOR_BUFFER_BIT}X&&(re|=v.DEPTH_BUFFER_BIT),ne&&(re|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ee,!1),n.removeEventListener("webglcontextrestored",Fe,!1),n.removeEventListener("webglcontextcreationerror",be,!1),Ue.dispose(),Q.dispose(),Ie.dispose(),te.dispose(),de.dispose(),Pe.dispose(),F.dispose(),Te.dispose(),ct.dispose(),Z.dispose(),we.dispose(),we.removeEventListener("sessionstart",$),we.removeEventListener("sessionend",w),N.stop()};function Ee(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const T=ge.autoReset,X=De.enabled,ne=De.autoUpdate,re=De.needsUpdate,j=De.type;H(),ge.autoReset=T,De.enabled=X,De.autoUpdate=ne,De.needsUpdate=re,De.type=j}function be(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function he(T){const X=T.target;X.removeEventListener("dispose",he),Ve(X)}function Ve(T){tt(T),te.remove(T)}function tt(T){const X=te.get(T).programs;X!==void 0&&(X.forEach(function(ne){Z.releaseProgram(ne)}),T.isShaderMaterial&&Z.releaseShaderCache(T))}this.renderBufferDirect=function(T,X,ne,re,j,Se){X===null&&(X=me);const Ne=j.isMesh&&j.matrixWorld.determinant()<0,We=Gt(T,X,ne,re,j);q.setMaterial(re,Ne);let ze=ne.index,nt=1;if(re.wireframe===!0){if(ze=x.getWireframeAttribute(ne),ze===void 0)return;nt=2}const rt=ne.drawRange,qe=ne.attributes.position;let xt=rt.start*nt,Pt=(rt.start+rt.count)*nt;Se!==null&&(xt=Math.max(xt,Se.start*nt),Pt=Math.min(Pt,(Se.start+Se.count)*nt)),ze!==null?(xt=Math.max(xt,0),Pt=Math.min(Pt,ze.count)):qe!=null&&(xt=Math.max(xt,0),Pt=Math.min(Pt,qe.count));const Wt=Pt-xt;if(Wt<0||Wt===1/0)return;Te.setup(j,re,We,ne,ze);let Bt,Ut=Ce;if(ze!==null&&(Bt=M.get(ze),Ut=Be,Ut.setIndex(Bt)),j.isMesh)re.wireframe===!0?(q.setLineWidth(re.wireframeLinewidth*R()),Ut.setMode(v.LINES)):Ut.setMode(v.TRIANGLES);else if(j.isLine){let Je=re.linewidth;Je===void 0&&(Je=1),q.setLineWidth(Je*R()),j.isLineSegments?Ut.setMode(v.LINES):j.isLineLoop?Ut.setMode(v.LINE_LOOP):Ut.setMode(v.LINE_STRIP)}else j.isPoints?Ut.setMode(v.POINTS):j.isSprite&&Ut.setMode(v.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Wr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ut.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))Ut.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Je=j._multiDrawStarts,zt=j._multiDrawCounts,wt=j._multiDrawCount,zn=ze?M.get(ze).bytesPerElement:1,hr=te.get(re).currentProgram.getUniforms();for(let Vn=0;Vn<wt;Vn++)hr.setValue(v,"_gl_DrawID",Vn),Ut.render(Je[Vn]/zn,zt[Vn])}else if(j.isInstancedMesh)Ut.renderInstances(xt,Wt,j.count);else if(ne.isInstancedBufferGeometry){const Je=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,zt=Math.min(ne.instanceCount,Je);Ut.renderInstances(xt,Wt,zt)}else Ut.render(xt,Wt)};function dt(T,X,ne){T.transparent===!0&&T.side===Ki&&T.forceSinglePass===!1?(T.side=Bn,T.needsUpdate=!0,at(T,X,ne),T.side=Rs,T.needsUpdate=!0,at(T,X,ne),T.side=Ki):at(T,X,ne)}this.compile=function(T,X,ne=null){ne===null&&(ne=T),p=Ie.get(ne),p.init(X),E.push(p),ne.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),T!==ne&&T.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),p.setupLights();const re=new Set;return T.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Se=j.material;if(Se)if(Array.isArray(Se))for(let Ne=0;Ne<Se.length;Ne++){const We=Se[Ne];dt(We,ne,j),re.add(We)}else dt(Se,ne,j),re.add(Se)}),p=E.pop(),re},this.compileAsync=function(T,X,ne=null){const re=this.compile(T,X,ne);return new Promise(j=>{function Se(){if(re.forEach(function(Ne){te.get(Ne).currentProgram.isReady()&&re.delete(Ne)}),re.size===0){j(T);return}setTimeout(Se,10)}K.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let ft=null;function Ln(T){ft&&ft(T)}function $(){N.stop()}function w(){N.start()}const N=new Dv;N.setAnimationLoop(Ln),typeof self<"u"&&N.setContext(self),this.setAnimationLoop=function(T){ft=T,we.setAnimationLoop(T),T===null?N.stop():N.start()},we.addEventListener("sessionstart",$),we.addEventListener("sessionend",w),this.render=function(T,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(X),X=we.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,X,k),p=Ie.get(T,E.length),p.init(X),E.push(p),B.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Ze.setFromProjectionMatrix(B,Ci,X.reversedDepth),ye=this.localClippingEnabled,ie=ve.init(this.clippingPlanes,ye),m=Q.get(T,C.length),m.init(),C.push(m),we.enabled===!0&&we.isPresenting===!0){const Se=y.xr.getDepthSensingMesh();Se!==null&&pe(Se,X,-1/0,y.sortObjects)}pe(T,X,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(xe,Me),Qe=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,Qe&&Ue.addToRenderList(m,T),this.info.render.frame++,ie===!0&&ve.beginShadows();const ne=p.state.shadowsArray;De.render(ne,T,X),ie===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=m.opaque,j=m.transmissive;if(p.setupLights(),X.isArrayCamera){const Se=X.cameras;if(j.length>0)for(let Ne=0,We=Se.length;Ne<We;Ne++){const ze=Se[Ne];ke(re,j,T,ze)}Qe&&Ue.render(T);for(let Ne=0,We=Se.length;Ne<We;Ne++){const ze=Se[Ne];Ae(m,T,ze,ze.viewport)}}else j.length>0&&ke(re,j,T,X),Qe&&Ue.render(T),Ae(m,T,X);k!==null&&P===0&&(ce.updateMultisampleRenderTarget(k),ce.updateRenderTargetMipmap(k)),T.isScene===!0&&T.onAfterRender(y,T,X),Te.resetDefaultState(),S=-1,A=null,E.pop(),E.length>0?(p=E[E.length-1],ie===!0&&ve.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,C.pop(),C.length>0?m=C[C.length-1]:m=null};function pe(T,X,ne,re){if(T.visible===!1)return;if(T.layers.test(X.layers)){if(T.isGroup)ne=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(X);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ze.intersectsSprite(T)){re&&oe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(B);const Ne=F.update(T),We=T.material;We.visible&&m.push(T,Ne,We,ne,oe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ze.intersectsObject(T))){const Ne=F.update(T),We=T.material;if(re&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),oe.copy(T.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),oe.copy(Ne.boundingSphere.center)),oe.applyMatrix4(T.matrixWorld).applyMatrix4(B)),Array.isArray(We)){const ze=Ne.groups;for(let nt=0,rt=ze.length;nt<rt;nt++){const qe=ze[nt],xt=We[qe.materialIndex];xt&&xt.visible&&m.push(T,Ne,xt,ne,oe.z,qe)}}else We.visible&&m.push(T,Ne,We,ne,oe.z,null)}}const Se=T.children;for(let Ne=0,We=Se.length;Ne<We;Ne++)pe(Se[Ne],X,ne,re)}function Ae(T,X,ne,re){const j=T.opaque,Se=T.transmissive,Ne=T.transparent;p.setupLightsView(ne),ie===!0&&ve.setGlobalState(y.clippingPlanes,ne),re&&q.viewport(U.copy(re)),j.length>0&&je(j,X,ne),Se.length>0&&je(Se,X,ne),Ne.length>0&&je(Ne,X,ne),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function ke(T,X,ne,re){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[re.id]===void 0&&(p.state.transmissionRenderTarget[re.id]=new lr(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?wa:Oi,minFilter:Ys,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const Se=p.state.transmissionRenderTarget[re.id],Ne=re.viewport||U;Se.setSize(Ne.z*y.transmissionResolutionScale,Ne.w*y.transmissionResolutionScale);const We=y.getRenderTarget(),ze=y.getActiveCubeFace(),nt=y.getActiveMipmapLevel();y.setRenderTarget(Se),y.getClearColor(I),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear(),Qe&&Ue.render(ne);const rt=y.toneMapping;y.toneMapping=Cs;const qe=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),p.setupLightsView(re),ie===!0&&ve.setGlobalState(y.clippingPlanes,re),je(T,ne,re),ce.updateMultisampleRenderTarget(Se),ce.updateRenderTargetMipmap(Se),K.has("WEBGL_multisampled_render_to_texture")===!1){let xt=!1;for(let Pt=0,Wt=X.length;Pt<Wt;Pt++){const Bt=X[Pt],Ut=Bt.object,Je=Bt.geometry,zt=Bt.material,wt=Bt.group;if(zt.side===Ki&&Ut.layers.test(re.layers)){const zn=zt.side;zt.side=Bn,zt.needsUpdate=!0,ot(Ut,ne,re,Je,zt,wt),zt.side=zn,zt.needsUpdate=!0,xt=!0}}xt===!0&&(ce.updateMultisampleRenderTarget(Se),ce.updateRenderTargetMipmap(Se))}y.setRenderTarget(We,ze,nt),y.setClearColor(I,G),qe!==void 0&&(re.viewport=qe),y.toneMapping=rt}function je(T,X,ne){const re=X.isScene===!0?X.overrideMaterial:null;for(let j=0,Se=T.length;j<Se;j++){const Ne=T[j],We=Ne.object,ze=Ne.geometry,nt=Ne.group;let rt=Ne.material;rt.allowOverride===!0&&re!==null&&(rt=re),We.layers.test(ne.layers)&&ot(We,X,ne,ze,rt,nt)}}function ot(T,X,ne,re,j,Se){T.onBeforeRender(y,X,ne,re,j,Se),T.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),j.onBeforeRender(y,X,ne,re,T,Se),j.transparent===!0&&j.side===Ki&&j.forceSinglePass===!1?(j.side=Bn,j.needsUpdate=!0,y.renderBufferDirect(ne,X,re,j,T,Se),j.side=Rs,j.needsUpdate=!0,y.renderBufferDirect(ne,X,re,j,T,Se),j.side=Ki):y.renderBufferDirect(ne,X,re,j,T,Se),T.onAfterRender(y,X,ne,re,j,Se)}function at(T,X,ne){X.isScene!==!0&&(X=me);const re=te.get(T),j=p.state.lights,Se=p.state.shadowsArray,Ne=j.state.version,We=Z.getParameters(T,j.state,Se,X,ne),ze=Z.getProgramCacheKey(We);let nt=re.programs;re.environment=T.isMeshStandardMaterial?X.environment:null,re.fog=X.fog,re.envMap=(T.isMeshStandardMaterial?Pe:de).get(T.envMap||re.environment),re.envMapRotation=re.environment!==null&&T.envMap===null?X.environmentRotation:T.envMapRotation,nt===void 0&&(T.addEventListener("dispose",he),nt=new Map,re.programs=nt);let rt=nt.get(ze);if(rt!==void 0){if(re.currentProgram===rt&&re.lightsStateVersion===Ne)return bt(T,We),rt}else We.uniforms=Z.getUniforms(T),T.onBeforeCompile(We,y),rt=Z.acquireProgram(We,ze),nt.set(ze,rt),re.uniforms=We.uniforms;const qe=re.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(qe.clippingPlanes=ve.uniform),bt(T,We),re.needsLights=is(T),re.lightsStateVersion=Ne,re.needsLights&&(qe.ambientLightColor.value=j.state.ambient,qe.lightProbe.value=j.state.probe,qe.directionalLights.value=j.state.directional,qe.directionalLightShadows.value=j.state.directionalShadow,qe.spotLights.value=j.state.spot,qe.spotLightShadows.value=j.state.spotShadow,qe.rectAreaLights.value=j.state.rectArea,qe.ltc_1.value=j.state.rectAreaLTC1,qe.ltc_2.value=j.state.rectAreaLTC2,qe.pointLights.value=j.state.point,qe.pointLightShadows.value=j.state.pointShadow,qe.hemisphereLights.value=j.state.hemi,qe.directionalShadowMap.value=j.state.directionalShadowMap,qe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,qe.spotShadowMap.value=j.state.spotShadowMap,qe.spotLightMatrix.value=j.state.spotLightMatrix,qe.spotLightMap.value=j.state.spotLightMap,qe.pointShadowMap.value=j.state.pointShadowMap,qe.pointShadowMatrix.value=j.state.pointShadowMatrix),re.currentProgram=rt,re.uniformsList=null,rt}function Xe(T){if(T.uniformsList===null){const X=T.currentProgram.getUniforms();T.uniformsList=gl.seqWithValue(X.seq,T.uniforms)}return T.uniformsList}function bt(T,X){const ne=te.get(T);ne.outputColorSpace=X.outputColorSpace,ne.batching=X.batching,ne.batchingColor=X.batchingColor,ne.instancing=X.instancing,ne.instancingColor=X.instancingColor,ne.instancingMorph=X.instancingMorph,ne.skinning=X.skinning,ne.morphTargets=X.morphTargets,ne.morphNormals=X.morphNormals,ne.morphColors=X.morphColors,ne.morphTargetsCount=X.morphTargetsCount,ne.numClippingPlanes=X.numClippingPlanes,ne.numIntersection=X.numClipIntersection,ne.vertexAlphas=X.vertexAlphas,ne.vertexTangents=X.vertexTangents,ne.toneMapping=X.toneMapping}function Gt(T,X,ne,re,j){X.isScene!==!0&&(X=me),ce.resetTextureUnits();const Se=X.fog,Ne=re.isMeshStandardMaterial?X.environment:null,We=k===null?y.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:uo,ze=(re.isMeshStandardMaterial?Pe:de).get(re.envMap||Ne),nt=re.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,rt=!!ne.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),qe=!!ne.morphAttributes.position,xt=!!ne.morphAttributes.normal,Pt=!!ne.morphAttributes.color;let Wt=Cs;re.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Wt=y.toneMapping);const Bt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Ut=Bt!==void 0?Bt.length:0,Je=te.get(re),zt=p.state.lights;if(ie===!0&&(ye===!0||T!==A)){const yn=T===A&&re.id===S;ve.setState(re,T,yn)}let wt=!1;re.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==zt.state.version||Je.outputColorSpace!==We||j.isBatchedMesh&&Je.batching===!1||!j.isBatchedMesh&&Je.batching===!0||j.isBatchedMesh&&Je.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Je.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Je.instancing===!1||!j.isInstancedMesh&&Je.instancing===!0||j.isSkinnedMesh&&Je.skinning===!1||!j.isSkinnedMesh&&Je.skinning===!0||j.isInstancedMesh&&Je.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Je.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Je.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Je.instancingMorph===!1&&j.morphTexture!==null||Je.envMap!==ze||re.fog===!0&&Je.fog!==Se||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==ve.numPlanes||Je.numIntersection!==ve.numIntersection)||Je.vertexAlphas!==nt||Je.vertexTangents!==rt||Je.morphTargets!==qe||Je.morphNormals!==xt||Je.morphColors!==Pt||Je.toneMapping!==Wt||Je.morphTargetsCount!==Ut)&&(wt=!0):(wt=!0,Je.__version=re.version);let zn=Je.currentProgram;wt===!0&&(zn=at(re,X,j));let hr=!1,Vn=!1,xo=!1;const Vt=zn.getUniforms(),Jn=Je.uniforms;if(q.useProgram(zn.program)&&(hr=!0,Vn=!0,xo=!0),re.id!==S&&(S=re.id,Vn=!0),hr||A!==T){q.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Vt.setValue(v,"projectionMatrix",T.projectionMatrix),Vt.setValue(v,"viewMatrix",T.matrixWorldInverse);const Un=Vt.map.cameraPosition;Un!==void 0&&Un.setValue(v,ue.setFromMatrixPosition(T.matrixWorld)),se.logarithmicDepthBuffer&&Vt.setValue(v,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Vt.setValue(v,"isOrthographic",T.isOrthographicCamera===!0),A!==T&&(A=T,Vn=!0,xo=!0)}if(j.isSkinnedMesh){Vt.setOptional(v,j,"bindMatrix"),Vt.setOptional(v,j,"bindMatrixInverse");const yn=j.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Vt.setValue(v,"boneTexture",yn.boneTexture,ce))}j.isBatchedMesh&&(Vt.setOptional(v,j,"batchingTexture"),Vt.setValue(v,"batchingTexture",j._matricesTexture,ce),Vt.setOptional(v,j,"batchingIdTexture"),Vt.setValue(v,"batchingIdTexture",j._indirectTexture,ce),Vt.setOptional(v,j,"batchingColorTexture"),j._colorsTexture!==null&&Vt.setValue(v,"batchingColorTexture",j._colorsTexture,ce));const ei=ne.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&_e.update(j,ne,zn),(Vn||Je.receiveShadow!==j.receiveShadow)&&(Je.receiveShadow=j.receiveShadow,Vt.setValue(v,"receiveShadow",j.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Jn.envMap.value=ze,Jn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&X.environment!==null&&(Jn.envMapIntensity.value=X.environmentIntensity),Vn&&(Vt.setValue(v,"toneMappingExposure",y.toneMappingExposure),Je.needsLights&&In(Jn,xo),Se&&re.fog===!0&&le.refreshFogUniforms(Jn,Se),le.refreshMaterialUniforms(Jn,re,Y,ee,p.state.transmissionRenderTarget[T.id]),gl.upload(v,Xe(Je),Jn,ce)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(gl.upload(v,Xe(Je),Jn,ce),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Vt.setValue(v,"center",j.center),Vt.setValue(v,"modelViewMatrix",j.modelViewMatrix),Vt.setValue(v,"normalMatrix",j.normalMatrix),Vt.setValue(v,"modelMatrix",j.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const yn=re.uniformsGroups;for(let Un=0,oc=yn.length;Un<oc;Un++){const Us=yn[Un];ct.update(Us,zn),ct.bind(Us,zn)}}return zn}function In(T,X){T.ambientLightColor.needsUpdate=X,T.lightProbe.needsUpdate=X,T.directionalLights.needsUpdate=X,T.directionalLightShadows.needsUpdate=X,T.pointLights.needsUpdate=X,T.pointLightShadows.needsUpdate=X,T.spotLights.needsUpdate=X,T.spotLightShadows.needsUpdate=X,T.rectAreaLights.needsUpdate=X,T.hemisphereLights.needsUpdate=X}function is(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(T,X,ne){const re=te.get(T);re.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),te.get(T.texture).__webglTexture=X,te.get(T.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ne,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,X){const ne=te.get(T);ne.__webglFramebuffer=X,ne.__useDefaultFramebuffer=X===void 0};const Kv=v.createFramebuffer();this.setRenderTarget=function(T,X=0,ne=0){k=T,L=X,P=ne;let re=!0,j=null,Se=!1,Ne=!1;if(T){const ze=te.get(T);if(ze.__useDefaultFramebuffer!==void 0)q.bindFramebuffer(v.FRAMEBUFFER,null),re=!1;else if(ze.__webglFramebuffer===void 0)ce.setupRenderTarget(T);else if(ze.__hasExternalTextures)ce.rebindTextures(T,te.get(T.texture).__webglTexture,te.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const qe=T.depthTexture;if(ze.__boundDepthTexture!==qe){if(qe!==null&&te.has(qe)&&(T.width!==qe.image.width||T.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(T)}}const nt=T.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Ne=!0);const rt=te.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(rt[X])?j=rt[X][ne]:j=rt[X],Se=!0):T.samples>0&&ce.useMultisampledRTT(T)===!1?j=te.get(T).__webglMultisampledFramebuffer:Array.isArray(rt)?j=rt[ne]:j=rt,U.copy(T.viewport),W.copy(T.scissor),O=T.scissorTest}else U.copy(Le).multiplyScalar(Y).floor(),W.copy(Ge).multiplyScalar(Y).floor(),O=_t;if(ne!==0&&(j=Kv),q.bindFramebuffer(v.FRAMEBUFFER,j)&&re&&q.drawBuffers(T,j),q.viewport(U),q.scissor(W),q.setScissorTest(O),Se){const ze=te.get(T.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+X,ze.__webglTexture,ne)}else if(Ne){const ze=X;for(let nt=0;nt<T.textures.length;nt++){const rt=te.get(T.textures[nt]);v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0+nt,rt.__webglTexture,ne,ze)}}else if(T!==null&&ne!==0){const ze=te.get(T.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,ze.__webglTexture,ne)}S=-1},this.readRenderTargetPixels=function(T,X,ne,re,j,Se,Ne,We=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=te.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ne!==void 0&&(ze=ze[Ne]),ze){q.bindFramebuffer(v.FRAMEBUFFER,ze);try{const nt=T.textures[We],rt=nt.format,qe=nt.type;if(!se.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=T.width-re&&ne>=0&&ne<=T.height-j&&(T.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+We),v.readPixels(X,ne,re,j,Oe.convert(rt),Oe.convert(qe),Se))}finally{const nt=k!==null?te.get(k).__webglFramebuffer:null;q.bindFramebuffer(v.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(T,X,ne,re,j,Se,Ne,We=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=te.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ne!==void 0&&(ze=ze[Ne]),ze)if(X>=0&&X<=T.width-re&&ne>=0&&ne<=T.height-j){q.bindFramebuffer(v.FRAMEBUFFER,ze);const nt=T.textures[We],rt=nt.format,qe=nt.type;if(!se.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xt=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,xt),v.bufferData(v.PIXEL_PACK_BUFFER,Se.byteLength,v.STREAM_READ),T.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+We),v.readPixels(X,ne,re,j,Oe.convert(rt),Oe.convert(qe),0);const Pt=k!==null?te.get(k).__webglFramebuffer:null;q.bindFramebuffer(v.FRAMEBUFFER,Pt);const Wt=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await _A(v,Wt,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,xt),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,Se),v.deleteBuffer(xt),v.deleteSync(Wt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,X=null,ne=0){const re=Math.pow(2,-ne),j=Math.floor(T.image.width*re),Se=Math.floor(T.image.height*re),Ne=X!==null?X.x:0,We=X!==null?X.y:0;ce.setTexture2D(T,0),v.copyTexSubImage2D(v.TEXTURE_2D,ne,0,0,Ne,We,j,Se),q.unbindTexture()};const Zv=v.createFramebuffer(),Qv=v.createFramebuffer();this.copyTextureToTexture=function(T,X,ne=null,re=null,j=0,Se=null){Se===null&&(j!==0?(Wr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=j,j=0):Se=0);let Ne,We,ze,nt,rt,qe,xt,Pt,Wt;const Bt=T.isCompressedTexture?T.mipmaps[Se]:T.image;if(ne!==null)Ne=ne.max.x-ne.min.x,We=ne.max.y-ne.min.y,ze=ne.isBox3?ne.max.z-ne.min.z:1,nt=ne.min.x,rt=ne.min.y,qe=ne.isBox3?ne.min.z:0;else{const ei=Math.pow(2,-j);Ne=Math.floor(Bt.width*ei),We=Math.floor(Bt.height*ei),T.isDataArrayTexture?ze=Bt.depth:T.isData3DTexture?ze=Math.floor(Bt.depth*ei):ze=1,nt=0,rt=0,qe=0}re!==null?(xt=re.x,Pt=re.y,Wt=re.z):(xt=0,Pt=0,Wt=0);const Ut=Oe.convert(X.format),Je=Oe.convert(X.type);let zt;X.isData3DTexture?(ce.setTexture3D(X,0),zt=v.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ce.setTexture2DArray(X,0),zt=v.TEXTURE_2D_ARRAY):(ce.setTexture2D(X,0),zt=v.TEXTURE_2D),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,X.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,X.unpackAlignment);const wt=v.getParameter(v.UNPACK_ROW_LENGTH),zn=v.getParameter(v.UNPACK_IMAGE_HEIGHT),hr=v.getParameter(v.UNPACK_SKIP_PIXELS),Vn=v.getParameter(v.UNPACK_SKIP_ROWS),xo=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,Bt.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,Bt.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,nt),v.pixelStorei(v.UNPACK_SKIP_ROWS,rt),v.pixelStorei(v.UNPACK_SKIP_IMAGES,qe);const Vt=T.isDataArrayTexture||T.isData3DTexture,Jn=X.isDataArrayTexture||X.isData3DTexture;if(T.isDepthTexture){const ei=te.get(T),yn=te.get(X),Un=te.get(ei.__renderTarget),oc=te.get(yn.__renderTarget);q.bindFramebuffer(v.READ_FRAMEBUFFER,Un.__webglFramebuffer),q.bindFramebuffer(v.DRAW_FRAMEBUFFER,oc.__webglFramebuffer);for(let Us=0;Us<ze;Us++)Vt&&(v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,te.get(T).__webglTexture,j,qe+Us),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,te.get(X).__webglTexture,Se,Wt+Us)),v.blitFramebuffer(nt,rt,Ne,We,xt,Pt,Ne,We,v.DEPTH_BUFFER_BIT,v.NEAREST);q.bindFramebuffer(v.READ_FRAMEBUFFER,null),q.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(j!==0||T.isRenderTargetTexture||te.has(T)){const ei=te.get(T),yn=te.get(X);q.bindFramebuffer(v.READ_FRAMEBUFFER,Zv),q.bindFramebuffer(v.DRAW_FRAMEBUFFER,Qv);for(let Un=0;Un<ze;Un++)Vt?v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,ei.__webglTexture,j,qe+Un):v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,ei.__webglTexture,j),Jn?v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,yn.__webglTexture,Se,Wt+Un):v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,yn.__webglTexture,Se),j!==0?v.blitFramebuffer(nt,rt,Ne,We,xt,Pt,Ne,We,v.COLOR_BUFFER_BIT,v.NEAREST):Jn?v.copyTexSubImage3D(zt,Se,xt,Pt,Wt+Un,nt,rt,Ne,We):v.copyTexSubImage2D(zt,Se,xt,Pt,nt,rt,Ne,We);q.bindFramebuffer(v.READ_FRAMEBUFFER,null),q.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else Jn?T.isDataTexture||T.isData3DTexture?v.texSubImage3D(zt,Se,xt,Pt,Wt,Ne,We,ze,Ut,Je,Bt.data):X.isCompressedArrayTexture?v.compressedTexSubImage3D(zt,Se,xt,Pt,Wt,Ne,We,ze,Ut,Bt.data):v.texSubImage3D(zt,Se,xt,Pt,Wt,Ne,We,ze,Ut,Je,Bt):T.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,Se,xt,Pt,Ne,We,Ut,Je,Bt.data):T.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,Se,xt,Pt,Bt.width,Bt.height,Ut,Bt.data):v.texSubImage2D(v.TEXTURE_2D,Se,xt,Pt,Ne,We,Ut,Je,Bt);v.pixelStorei(v.UNPACK_ROW_LENGTH,wt),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,zn),v.pixelStorei(v.UNPACK_SKIP_PIXELS,hr),v.pixelStorei(v.UNPACK_SKIP_ROWS,Vn),v.pixelStorei(v.UNPACK_SKIP_IMAGES,xo),Se===0&&X.generateMipmaps&&v.generateMipmap(zt),q.unbindTexture()},this.copyTextureToTexture3D=function(T,X,ne=null,re=null,j=0){return Wr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,X,ne,re,j)},this.initRenderTarget=function(T){te.get(T).__webglFramebuffer===void 0&&ce.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ce.setTextureCube(T,0):T.isData3DTexture?ce.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ce.setTexture2DArray(T,0):ce.setTexture2D(T,0),q.unbindTexture()},this.resetState=function(){L=0,P=0,k=null,q.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Mt._getUnpackColorSpace()}}const bp={type:"change"},af={type:"start"},kv={type:"end"},nl=new gv,xp=new ms,kP=Math.cos(70*gA.DEG2RAD),tn=new J,Nn=2*Math.PI,It={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},nu=1e-6;class Bv extends t1{constructor(e,n=null){super(e,n),this.state=It.NONE,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vr.ROTATE,MIDDLE:Vr.DOLLY,RIGHT:Vr.PAN},this.touches={ONE:Ir.ROTATE,TWO:Ir.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new ar,this._lastTargetPosition=new J,this._quat=new ar().setFromUnitVectors(e.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new jh,this._sphericalDelta=new jh,this._scale=1,this._panOffset=new J,this._rotateStart=new lt,this._rotateEnd=new lt,this._rotateDelta=new lt,this._panStart=new lt,this._panEnd=new lt,this._panDelta=new lt,this._dollyStart=new lt,this._dollyEnd=new lt,this._dollyDelta=new lt,this._dollyDirection=new J,this._mouse=new lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=HP.bind(this),this._onPointerDown=BP.bind(this),this._onPointerUp=zP.bind(this),this._onContextMenu=qP.bind(this),this._onMouseWheel=WP.bind(this),this._onKeyDown=$P.bind(this),this._onTouchStart=XP.bind(this),this._onTouchMove=jP.bind(this),this._onMouseDown=VP.bind(this),this._onMouseMove=GP.bind(this),this._interceptControlDown=YP.bind(this),this._interceptControlUp=KP.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(bp),this.update(),this.state=It.NONE}update(e=null){const n=this.object.position;tn.copy(n).sub(this.target),tn.applyQuaternion(this._quat),this._spherical.setFromVector3(tn),this.autoRotate&&this.state===It.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Nn:i>Math.PI&&(i-=Nn),s<-Math.PI?s+=Nn:s>Math.PI&&(s-=Nn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(tn.setFromSpherical(this._spherical),tn.applyQuaternion(this._quatInverse),n.copy(this.target).add(tn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=tn.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new J(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new J(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=tn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(nl.origin.copy(this.object.position),nl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(nl.direction))<kP?this.object.lookAt(this.target):(xp.setFromNormalAndCoplanarPoint(this.object.up,this.target),nl.intersectPlane(xp,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>nu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>nu||this._lastTargetPosition.distanceToSquared(this.target)>nu?(this.dispatchEvent(bp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Nn/60*this.autoRotateSpeed*e:Nn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){tn.setFromMatrixColumn(n,0),tn.multiplyScalar(-e),this._panOffset.add(tn)}_panUp(e,n){this.screenSpacePanning===!0?tn.setFromMatrixColumn(n,1):(tn.setFromMatrixColumn(n,0),tn.crossVectors(this.object.up,tn)),tn.multiplyScalar(e),this._panOffset.add(tn)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;tn.copy(s).sub(this.target);let r=tn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=n-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Nn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Nn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Nn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Nn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new lt,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function BP(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function HP(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function zP(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(kv),this.state=It.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function VP(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Vr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=It.DOLLY;break;case Vr.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=It.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=It.ROTATE}break;case Vr.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=It.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=It.PAN}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(af)}function GP(t){switch(this.state){case It.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case It.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case It.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function WP(t){this.enabled===!1||this.enableZoom===!1||this.state!==It.NONE||(t.preventDefault(),this.dispatchEvent(af),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(kv))}function $P(t){this.enabled!==!1&&this._handleKeyDown(t)}function XP(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Ir.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=It.TOUCH_ROTATE;break;case Ir.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=It.TOUCH_PAN;break;default:this.state=It.NONE}break;case 2:switch(this.touches.TWO){case Ir.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=It.TOUCH_DOLLY_PAN;break;case Ir.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=It.TOUCH_DOLLY_ROTATE;break;default:this.state=It.NONE}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(af)}function jP(t){switch(this._trackPointer(t),this.state){case It.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case It.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case It.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case It.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=It.NONE}}function qP(t){this.enabled!==!1&&t.preventDefault()}function YP(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function KP(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ZP={__name:"MiyukiBeads",props:{pattern:{type:Array,required:!0},rows:{type:Number,default:10},cols:{type:Number,default:50},textureRotation:{type:Number,default:90}},setup(t){const e=t,n=it(null);let i,s,r,o,a=[];const l=new Av,c=new Map;function u(g){return typeof g=="string"&&g.startsWith("/miyuki-beads-designer/beads/")}function d(g,b=0){if(u(g)){const m=g;let p=c.get(m);p||(p=l.load(m,y=>{y.colorSpace=pn,r&&(y.anisotropy=r.capabilities.getMaxAnisotropy())}),p.colorSpace=pn,c.set(m,p));const C=p.clone();return C.rotation=b,new Fl({color:16777215,map:C,roughness:.1,metalness:.1,clearcoat:.5,clearcoatRoughness:.1})}return new Fl({color:g,roughness:.1,metalness:.1,clearcoat:.5,clearcoatRoughness:.1})}function f(){a.forEach(g=>{i.remove(g),g.material&&g.material.dispose()}),a=[]}function h(){const g=new nc(.7,.7,1.1,32),b=(e.cols-1)/2,m=(e.rows-1)/2;for(let p=0;p<e.rows;p++)for(let C=0;C<e.cols;C++){const E=p*e.cols+C,y=e.pattern[E]||"#ffffff",D=e.textureRotation*Math.PI/180,L=d(y,D),P=new pi(g,L);P.position.set((C-b)*1.2,-(p-m)*1.2,0),i.add(P),a.push(P)}}return po(()=>{i=new Ev,i.background=new yt(15790320),s=new Xn(45,n.value.clientWidth/n.value.clientHeight,.1,1e3),s.position.set(50,-50,50),r=new Fv({antialias:!0}),r.setPixelRatio(Math.min(window.devicePixelRatio||1,2));function g(){if(!n.value)return;const C=n.value.clientWidth,E=n.value.clientHeight;C===0||E===0||(s.aspect=C/E,s.updateProjectionMatrix(),r.setSize(C,E,!1))}g(),n.value.appendChild(r.domElement);const b=new ResizeObserver(()=>{g()});b.observe(n.value),r.__resizeObserver=b,o=new Bv(s,r.domElement),i.add(new Pv(16777215,.5));const m=new ld(16777215,3);m.position.set(10,10,10),i.add(m),h();function p(){requestAnimationFrame(p),o.update(),r.render(i,s)}p(),window.addEventListener("resize",g),r.__resizeHandler=g}),Fn(()=>[e.pattern,e.textureRotation],()=>{f(),h()},{deep:!0}),Td(()=>{r&&r.__resizeHandler&&window.removeEventListener("resize",r.__resizeHandler),r&&r.__resizeObserver&&n.value&&r.__resizeObserver.disconnect(),o&&o.dispose(),r&&r.dispose(),f(),c.forEach(g=>g.dispose()),c.clear()}),(g,b)=>(He(),$e("div",{ref_key:"container",ref:n,class:"bead-container"},null,512))}},QP={class:"bracelet-wrapper"},JP={class:"canvas-container"},eD={class:"toolbar"},tD={class:"controls-panel"},nD={class:"control-group"},iD={class:"slider-container"},sD={class:"slider-value"},rD={class:"info-panel"},oD={class:"info-item"},aD={class:"info-value"},lD={class:"info-item"},cD={class:"info-value"},uD={__name:"BraceletPreview",props:{pattern:{type:Array,required:!0},rows:{type:Number,required:!0},cols:{type:Number,required:!0},width:{type:Number,default:900},height:{type:Number,default:600},textureRotation:{type:Number,default:90}},setup(t,{expose:e}){const n=t,i=it(null);let s,r,o,a,l=[];const c=it(n.textureRotation),u=new Av,d=new Map;function f(E){return typeof E=="string"&&E.startsWith("/miyuki-beads-designer/beads/")}function h(E,y=0){if(f(E)){const D=E;let L=d.get(D);L||(L=u.load(D,S=>{S.colorSpace=pn,o&&(S.anisotropy=o.capabilities.getMaxAnisotropy())}),L.colorSpace=pn,d.set(D,L));const P=L.clone();return P.rotation=y,new Fl({color:16777215,map:P,roughness:.25,metalness:.15,clearcoat:.4,clearcoatRoughness:.1})}return new Fl({color:E,roughness:.25,metalness:.15,clearcoat:.4,clearcoatRoughness:.1})}function g(){l.forEach(E=>{s.remove(E),E.material&&E.material.dispose()}),l=[]}function b(){if(!s)return;g();const E=20,y=Math.PI*1.55,D=-y/2,L=y/n.rows,P=E*L*.98,k=.95,S=1,A=new nc(k*.7,k*.7,P,16);for(let U=0;U<n.rows;U++)for(let W=0;W<n.cols;W++){let O="#ffffff";if(Array.isArray(n.pattern[0]))O=n.pattern[U]&&n.pattern[U][W]?n.pattern[U][W]:"#ffffff";else{const Le=U*n.cols+W;O=n.pattern[Le]||"#ffffff"}(!O||O==="#"||O.length<3)&&(O="#ffffff",console.warn("Invalid color detected:",O,"using default white"));const I=c.value*Math.PI/180,G=h(O,I),V=D+(U+.5)*L,ee=(n.cols/2-.5-W)*S,Y=E*Math.sin(V),xe=E*Math.cos(V),Me=new pi(A,G);Me.position.set(Y,ee,xe),Me.rotation.z=Math.PI/2,Me.rotation.y=V,s.add(Me),l.push(Me)}}function m(){s=new Ev,s.background=new yt(15987699),r=new Xn(42,n.width/n.height,.1,2e3),r.position.set(0,3,95),r.lookAt(0,0,0),o=new Fv({antialias:!0,preserveDrawingBuffer:!0}),o.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),o.setSize(n.width,n.height,!1),i.value.appendChild(o.domElement),s.add(new Pv(16777215,.7));const E=new ld(16777215,1.1);E.position.set(8,10,12),s.add(E);const y=new ld(16777215,.6);y.position.set(-8,-3,8),s.add(y),a=new Bv(r,o.domElement),a.enableDamping=!0,a.target.set(0,0,0);function D(){requestAnimationFrame(D),a.update(),o.render(s,r)}D()}function p(){o&&(a.update(),o.render(s,r))}function C(){p();const E=o.domElement.toDataURL("image/png"),y=document.createElement("a");y.href=E,y.download="bracelet.png",y.click()}return po(()=>{m(),b(),p()}),Fn(()=>[n.pattern,n.rows,n.cols,n.textureRotation],()=>{b(),p()},{deep:!0}),Fn(c,()=>{b(),p()}),Td(()=>{a&&a.dispose(),o&&o.dispose(),g(),d.forEach(E=>E.dispose()),d.clear()}),e({downloadImage:C}),(E,y)=>(He(),$e("div",QP,[y[6]||(y[6]=_("div",{class:"header"},[_("h2",{class:"title"},"پیش‌نمایش دستبند"),_("p",{class:"subtitle"},"نمایش سه‌بعدی طرح انتخاب شده")],-1)),_("div",JP,[_("div",{ref_key:"container",ref:i,class:"bracelet-canvas"},null,512),y[1]||(y[1]=Hm('<div class="canvas-overlay" data-v-f2177ee3><div class="controls-hint" data-v-f2177ee3><div class="hint-item" data-v-f2177ee3><span class="hint-icon" data-v-f2177ee3>🖱️</span><span data-v-f2177ee3>برای چرخاندن کلیک و درگ کنید</span></div><div class="hint-item" data-v-f2177ee3><span class="hint-icon" data-v-f2177ee3>🔍</span><span data-v-f2177ee3>برای زوم اسکرول کنید</span></div></div></div>',1))]),_("div",eD,[_("button",{class:"btn btn-primary",onClick:C},y[2]||(y[2]=[_("span",{class:"btn-icon"},"📥",-1),_("span",null,"دانلود تصویر",-1)])),_("div",tD,[_("div",nD,[y[3]||(y[3]=_("label",{class:"control-label"},"چرخش عکس مهره‌ها:",-1)),_("div",iD,[qt(_("input",{"onUpdate:modelValue":y[0]||(y[0]=D=>c.value=D),type:"range",min:"0",max:"360",step:"15",class:"rotation-slider"},null,512),[[en,c.value]]),_("span",sD,st(c.value)+"°",1)])])]),_("div",rD,[_("div",oD,[y[4]||(y[4]=_("span",{class:"info-label"},"ابعاد:",-1)),_("span",aD,st(t.cols)+" × "+st(t.rows),1)]),_("div",lD,[y[5]||(y[5]=_("span",{class:"info-label"},"تعداد مهره:",-1)),_("span",cD,st(t.cols*t.rows),1)])])])]))}},dD=ma(uD,[["__scopeId","data-v-f2177ee3"]]),fD={class:"working-page backdrop-filter-none"},hD={class:"mobile-top-bar"},pD=["aria-expanded"],mD={class:"mobile-step-badge"},gD={class:"controls-panel"},vD={class:"control-group"},_D={class:"start-controls"},bD={class:"control-label"},xD=["max"],yD={class:"control-label"},wD={class:"control-group desktop-controls"},SD={class:"navigation-controls"},MD=["disabled"],ED=["disabled"],TD={class:"control-group"},AD={class:"info-display"},CD={class:"info-item"},RD={class:"info-value"},PD={class:"info-item"},DD={class:"info-value"},LD={class:"info-item"},ID={class:"info-value"},UD={class:"control-group"},OD={class:"color-management"},ND={class:"color-list-management"},FD={class:"all-colors-list"},kD=["onUpdate:modelValue","placeholder","onInput"],BD={class:"color-count-badge"},HD={class:"color-code"},zD={class:"pattern-container"},VD={class:"pattern-header"},GD={class:"pattern-info"},WD={class:"instructions-panel"},$D={class:"row-instructions"},XD={class:"color-instructions"},jD={class:"color-list"},qD={class:"color-count"},YD={class:"pattern-instructions"},KD={class:"pattern-sequence"},ZD=["title"],QD={class:"grid-wrapper"},JD=["title"],eL={class:"mobile-navigation-fixed"},tL=["disabled"],nL=["disabled"],iL={__name:"WorkingPage",props:{pattern:{type:Array,default:()=>[]},rows:{type:Number,default:16},cols:{type:Number,default:80}},setup(t){const e=t,n=it(0),i=it("forward"),s=it(0),r=it({}),o=it(!1),a=()=>{if(!e.pattern||e.pattern.length===0){const I=["#ff6b6b","#4ecdc4","#45b7d1","#96ceb4","#feca57","#ff9ff3","#54a0ff","#5f27cd"],G=[];for(let V=0;V<e.rows;V++)for(let ee=0;ee<e.cols;ee++){const Y=I[Math.floor(Math.random()*I.length)];G.push({color:Y,row:V,col:ee})}return G}const O=[];for(let I=0;I<e.rows;I++)for(let G=0;G<e.cols;G++){const V=I*e.cols+G,ee=e.pattern[V]||"#ffffff";O.push({color:ee,row:I,col:G})}return O},l=it(a()),c=it(!0),u=an(()=>c.value?e.rows:e.cols),d=an(()=>u.value-1),f=an(()=>u.value),h=an(()=>{const O=i.value==="forward"?n.value+s.value:n.value-s.value;return Math.max(0,Math.min(u.value-1,O))}),g=an(()=>{const O=[];if(c.value)for(let I=0;I<e.cols;I++){const G=h.value*e.cols+I,V=e.pattern[G]||"#ffffff";O.includes(V)||O.push(V)}else for(let I=0;I<e.rows;I++){const G=I*e.cols+h.value,V=e.pattern[G]||"#ffffff";O.includes(V)||O.push(V)}return O}),b=an(()=>{const O=[];if(c.value)for(let I=0;I<e.cols;I++){const G=h.value*e.cols+I,V=e.pattern[G]||"#ffffff";O.push(V)}else for(let I=0;I<e.rows;I++){const G=I*e.cols+h.value,V=e.pattern[G]||"#ffffff";O.push(V)}return O}),m=an(()=>{const O=new Set;for(let I=0;I<e.pattern.length;I++)e.pattern[I]&&O.add(e.pattern[I]);return Array.from(O).sort()}),p=O=>{const I=Math.floor(O/e.cols),G=O%e.cols;return c.value?I===h.value:G===h.value},C=O=>{const I=Math.floor(O/e.cols),G=O%e.cols;return c.value?I==h.value:G==h.value},E=O=>{const I=Math.floor(O/e.cols),G=O%e.cols;return i.value==="forward"?c.value?I>h.value:G>h.value:c.value?I<h.value:G<h.value},y=O=>p(O)?1:C(O)?.4:.2,D=O=>{let I=0;if(c.value)for(let G=0;G<e.cols;G++){const V=h.value*e.cols+G;e.pattern[V]===O&&I++}else for(let G=0;G<e.rows;G++){const V=G*e.cols+h.value;e.pattern[V]===O&&I++}return I},L=O=>{let I=0;for(let G=0;G<e.pattern.length;G++)e.pattern[G]===O&&I++;return I},P=(O,I)=>{r.value[O]=I},k=O=>{const I=r.value[O];if(O.startsWith("/miyuki-beads-designer/beads/")){const G=O.split("/").pop().replace(".jpg","");return I?`${I} (${G})`:G}return I?`${I} (${O})`:O},S=()=>{s.value<f.value-1&&s.value++},A=()=>{s.value>0&&s.value--},U=()=>{s.value=0},W=O=>{switch(O.key){case"Enter":case" ":O.preventDefault(),S();break;case"ArrowLeft":O.preventDefault(),A();break;case"r":case"R":O.preventDefault(),U();break}};return po(()=>{try{const O=localStorage.getItem("gridEditor_isVertical");c.value=O!==null?JSON.parse(O):!0}catch(O){console.error("Failed to read gridEditor_isVertical from localStorage",O),c.value=!0}document.addEventListener("keydown",W)}),Ad(()=>{document.removeEventListener("keydown",W)}),Fn(i,()=>{s.value=0}),Fn(n,()=>{s.value=0}),Fn(c,()=>{s.value=0,n.value>d.value&&(n.value=0)}),Fn(()=>e.pattern,()=>{l.value=a()},{deep:!0}),(O,I)=>(He(),$e("div",fD,[_("div",hD,[_("button",{class:Ye(["mobile-hamburger-btn",{active:o.value}]),"aria-expanded":o.value,"aria-label":"نمایش تنظیمات و اطلاعات",onClick:I[0]||(I[0]=G=>o.value=!o.value)},I[3]||(I[3]=[_("span",{class:"hamburger-line"},null,-1),_("span",{class:"hamburger-line"},null,-1),_("span",{class:"hamburger-line"},null,-1)]),10,pD),I[4]||(I[4]=_("span",{class:"mobile-top-title"},"🧶 مراحل اجرا",-1)),_("span",mD,st(s.value+1)+"/"+st(f.value),1)]),_("div",{class:Ye(["collapsible-sections",{open:o.value}])},[I[16]||(I[16]=_("div",{class:"page-header"},[_("h1",{class:"page-title"},"🧶 مراحل اجرای دستبند میوکی"),_("p",{class:"page-subtitle"}," مراحل بافت دستبند را ردیف به ردیف (از بالا به پایین) مشاهده کنید ")],-1)),_("div",gD,[_("div",vD,[I[8]||(I[8]=_("h3",null,"🎯 تنظیمات شروع",-1)),_("div",_D,[_("label",bD,[I[5]||(I[5]=_("span",null,"شروع از ردیف:",-1)),qt(_("input",{"onUpdate:modelValue":I[1]||(I[1]=G=>n.value=G),type:"number",min:"0",max:d.value,class:"control-input"},null,8,xD),[[en,n.value,void 0,{number:!0}]])]),_("label",yD,[I[7]||(I[7]=_("span",null,"جهت اجرا:",-1)),qt(_("select",{"onUpdate:modelValue":I[2]||(I[2]=G=>i.value=G),class:"control-select"},I[6]||(I[6]=[_("option",{value:"forward"},"⬇️ از بالا به پایین",-1),_("option",{value:"backward"},"⬆️ از پایین به بالا",-1)]),512),[[db,i.value]])])])]),_("div",wD,[I[9]||(I[9]=_("h3",null,"🎮 کنترل‌ها",-1)),_("div",SD,[_("button",{disabled:s.value<=0,class:"nav-btn prev-btn",onClick:A}," ⬅️ مرحله قبل ",8,MD),_("button",{disabled:s.value>=f.value-1,class:"nav-btn next-btn",onClick:S}," مرحله بعد ➡️ ",8,ED),_("button",{class:"nav-btn reset-btn",onClick:U}," 🔄 شروع مجدد ")])]),_("div",TD,[I[13]||(I[13]=_("h3",null,"📊 اطلاعات",-1)),_("div",AD,[_("div",CD,[I[10]||(I[10]=_("span",{class:"info-label"},"مرحله فعلی:",-1)),_("span",RD,st(s.value+1)+" از "+st(f.value),1)]),_("div",PD,[I[11]||(I[11]=_("span",{class:"info-label"},"ردیف فعلی:",-1)),_("span",DD,st(h.value+1)+" از "+st(u.value),1)]),_("div",LD,[I[12]||(I[12]=_("span",{class:"info-label"},"رنگ‌های مورد نیاز:",-1)),_("span",ID,st(g.value.length)+" رنگ",1)])])]),_("div",UD,[I[15]||(I[15]=_("h3",null,"🎨 مدیریت رنگ‌ها",-1)),_("div",OD,[_("div",ND,[I[14]||(I[14]=_("h4",null,"رنگ‌های استفاده شده در طرح:",-1)),_("div",FD,[(He(!0),$e(Ht,null,En(m.value,(G,V)=>(He(),$e("div",{key:G,class:"color-management-item"},[_("div",{class:"color-swatch-large",style:jn({backgroundColor:G.startsWith("/miyuki-beads-designer/beads/")?"transparent":G,backgroundImage:G.startsWith("/miyuki-beads-designer/beads/")?`url(${G})`:"none",backgroundSize:"cover",backgroundPosition:"center"})},null,4),qt(_("input",{"onUpdate:modelValue":ee=>r.value[G]=ee,type:"text",placeholder:`نام رنگ ${V+1}`,class:"color-name-input",onInput:ee=>P(G,ee.target.value)},null,40,kD),[[en,r.value[G]]]),_("span",BD,st(L(G))+" مهره",1),_("span",HD,st(G),1)]))),128))])])])])])],2),_("div",zD,[_("div",VD,[I[17]||(I[17]=_("h3",null,"🎨 الگوی دستبند",-1)),_("div",GD,[_("span",null,"ابعاد: "+st(t.rows)+" × "+st(t.cols),1)])]),_("div",WD,[_("h4",null,"📋 دستورالعمل ردیف "+st(h.value+1),1),_("div",$D,[_("div",XD,[I[18]||(I[18]=_("h5",null,"رنگ‌های مورد نیاز:",-1)),_("div",jD,[(He(!0),$e(Ht,null,En(g.value,(G,V)=>(He(),$e("div",{key:V,class:"color-item"},[_("div",{class:"color-swatch",style:jn({backgroundColor:G.startsWith("/miyuki-beads-designer/beads/")?"transparent":G,backgroundImage:G.startsWith("/miyuki-beads-designer/beads/")?`url(${G})`:"none",backgroundSize:"cover",backgroundPosition:"center"})},null,4),_("span",qD,st(D(G)),1)]))),128))])]),_("div",YD,[I[19]||(I[19]=_("h5",null,"ترتیب رنگ‌ها:",-1)),_("div",KD,[(He(!0),$e(Ht,null,En(b.value,(G,V)=>(He(),$e("div",{key:V,class:"sequence-item",style:jn({backgroundColor:G.startsWith("/miyuki-beads-designer/beads/")?"transparent":G,backgroundImage:G.startsWith("/miyuki-beads-designer/beads/")?`url(${G})`:"none",backgroundSize:"cover",backgroundPosition:"center"}),title:k(G)},null,12,ZD))),128))])])])]),_("div",QD,[_("div",{class:"pattern-grid",style:jn({gridTemplateColumns:`repeat(${t.cols}, 12px)`})},[(He(!0),$e(Ht,null,En(l.value,(G,V)=>(He(),$e("div",{key:V,class:Ye(["grid-cell",{"active-row":p(V),"completed-row":C(V),"upcoming-row":E(V)}]),style:jn({backgroundColor:G.color.startsWith("/miyuki-beads-designer/beads/")?"transparent":G.color,backgroundImage:G.color.startsWith("/miyuki-beads-designer/beads/")?`url(${G.color})`:"none",backgroundSize:"cover",backgroundPosition:"center",opacity:y(V)}),title:`ردیف ${Math.floor(V/t.cols)+1}, ستون ${V%t.cols+1}: ${G.color}`},null,14,JD))),128))],4)])]),I[20]||(I[20]=Hm('<div class="shortcuts-info" data-v-e9a5d94b><h4 data-v-e9a5d94b>⌨️ کلیدهای میانبر</h4><div class="shortcuts-list" data-v-e9a5d94b><div class="shortcut-item" data-v-e9a5d94b><kbd data-v-e9a5d94b>Enter</kbd> یا <kbd data-v-e9a5d94b>Space</kbd> - مرحله بعد </div><div class="shortcut-item" data-v-e9a5d94b><kbd data-v-e9a5d94b>←</kbd> - مرحله قبل</div><div class="shortcut-item" data-v-e9a5d94b><kbd data-v-e9a5d94b>R</kbd> - شروع مجدد</div></div></div>',1)),(He(),Lr(G_,{to:"body"},[_("div",eL,[_("button",{disabled:s.value<=0,class:"mobile-nav-btn prev-btn",onClick:A}," ⬅️ قبلی ",8,tL),_("button",{class:"mobile-nav-btn reset-btn",onClick:U}," 🔄 شروع "),_("button",{disabled:s.value>=f.value-1,class:"mobile-nav-btn next-btn",onClick:S}," بعدی ➡️ ",8,nL)])]))]))}},sL=ma(iL,[["__scopeId","data-v-e9a5d94b"]]),rL={class:"home-container"},oL={class:"app-header max-md:hidden flex items-start justify-between mb-3!"},aL={class:"stats-section"},lL={class:"stat-item"},cL={class:"stat-number"},uL={class:"stat-item"},dL={class:"stat-number"},fL={class:"stat-item"},hL={class:"stat-number"},pL={class:"stat-item"},mL={class:"stat-number"},gL={class:"mobile-header-content"},vL={class:"mobile-stats"},_L={class:"mobile-stat-item"},bL={class:"mobile-stat-number"},xL={class:"mobile-stat-item"},yL={class:"mobile-stat-number"},wL={class:"mobile-stat-item"},SL={class:"mobile-stat-number"},ML={class:"mobile-stat-item"},EL={class:"mobile-stat-number"},TL={class:"content-container"},AL={__name:"HomeView",props:{isMobileHeaderOpen:{type:Boolean,default:!1}},emits:["close-mobile-header"],setup(t,{emit:e}){const n=t,i=e,s=it(16),r=it(80),o=it(Array(16*80).fill("#ffffff")),a=it(!0),l=it(!1),c=it(!1),u=it(!1);function d(){a.value=!0,l.value=!1,c.value=!1,u.value=!1,i("close-mobile-header")}function f(){l.value=!0,a.value=!1,c.value=!1,u.value=!1,i("close-mobile-header")}function h(){c.value=!0,l.value=!1,a.value=!1,u.value=!1,i("close-mobile-header")}function g(){u.value=!0,a.value=!1,l.value=!1,c.value=!1,i("close-mobile-header")}function b(m){if(!Array.isArray(m)||m.length===0){o.value=[],s.value=0,r.value=0;return}s.value=m.length,r.value=Array.isArray(m[0])?m[0].length:0,o.value=m.flat()}return(m,p)=>(He(),$e("div",rL,[_("header",oL,[_("div",{class:"header-content"},[_("div",{class:"header-actions mt-3! flex items-center gap-2"},[_("button",{class:"theme-btn px-4! py-1! text-[14px]",onClick:d}," ویرایشگر شبکه "),_("button",{class:"theme-btn px-4! py-1! text-[14px]",onClick:f}," نمایش مهره‌ها "),_("button",{class:"theme-btn px-4! py-1! text-[14px]",onClick:h}," پیش‌نمایش دستبند "),_("button",{class:"theme-btn-primary px-4! py-1! text-[14px]",onClick:g}," مراحل اجرا ")])]),_("div",aL,[_("div",lL,[_("div",cL,st(s.value),1),p[0]||(p[0]=_("div",{class:"stat-label"},"ردیف",-1))]),_("div",uL,[_("div",dL,st(r.value),1),p[1]||(p[1]=_("div",{class:"stat-label"},"ستون",-1))]),_("div",fL,[_("div",hL,st(o.value.length),1),p[2]||(p[2]=_("div",{class:"stat-label"},"مهره",-1))]),_("div",pL,[_("div",mL,st((o.value.length/190).toFixed(2)),1),p[3]||(p[3]=_("div",{class:"stat-label"},"گرم",-1))])])]),_("div",{class:Ye(["mobile-header-panel md:hidden",{open:n.isMobileHeaderOpen}])},[_("div",gL,[_("div",{class:"mobile-actions"},[_("button",{class:"mobile-action-btn",onClick:d}," ویرایشگر شبکه "),_("button",{class:"mobile-action-btn",onClick:f}," نمایش مهره‌ها "),_("button",{class:"mobile-action-btn",onClick:h}," پیش‌نمایش دستبند "),_("button",{class:"mobile-action-btn mobile-action-btn-primary",onClick:g}," مراحل اجرا ")]),_("div",vL,[_("div",_L,[_("div",bL,st(s.value),1),p[4]||(p[4]=_("div",{class:"mobile-stat-label"},"ردیف",-1))]),_("div",xL,[_("div",yL,st(r.value),1),p[5]||(p[5]=_("div",{class:"mobile-stat-label"},"ستون",-1))]),_("div",wL,[_("div",SL,st(o.value.length),1),p[6]||(p[6]=_("div",{class:"mobile-stat-label"},"مهره",-1))]),_("div",ML,[_("div",EL,st((o.value.length/190).toFixed(2)),1),p[7]||(p[7]=_("div",{class:"mobile-stat-label"},"گرم",-1))])])])],2),_("div",TL,[a.value?(He(),Lr(AT,{key:0,class:"content-component",onUpdateGrid:b})):Dt("",!0),l.value?(He(),Lr(ZP,{key:1,pattern:o.value,rows:s.value,cols:r.value,class:"content-component"},null,8,["pattern","rows","cols"])):Dt("",!0),c.value?(He(),Lr(dD,{key:2,pattern:o.value,rows:s.value,cols:r.value,class:"content-component"},null,8,["pattern","rows","cols"])):Dt("",!0),u.value?(He(),Lr(sL,{key:3,pattern:o.value,rows:s.value,cols:r.value,class:"content-component"},null,8,["pattern","rows","cols"])):Dt("",!0)])]))}},CL=ma(AL,[["__scopeId","data-v-9a5d58e0"]]),RL=yx({history:Zb("/miyuki-beads-designer/"),routes:[{path:"/",name:"home",component:CL},{path:"/about",name:"about",component:()=>To(()=>import("./AboutView-DSIUOQVV.js"),[])},{path:"/sweetalert-demo",name:"sweetalert-demo",component:()=>To(()=>import("./SweetAlertDemo-BTA_EWeX.js"),__vite__mapDeps([0,1]))},{path:"/weaving-grid",name:"weaving-grid",component:()=>To(()=>import("./WeavingGrid-zUPyzm00.js"),__vite__mapDeps([2,3,4,5]))},{path:"/beadwork-pattern",name:"beadwork-pattern",component:()=>To(()=>import("./BeadworkPattern-SoTMwJzQ.js"),[])},{path:"/peyote-grid",name:"peyote-grid",component:()=>To(()=>import("./PeyoteGrid-C_KzC3qP.js"),__vite__mapDeps([6,3,4,7]))}]});var rc=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Aa=typeof window>"u"||"Deno"in globalThis;function ci(){}function PL(t,e){return typeof t=="function"?t(e):t}function DL(t){return typeof t=="number"&&t>=0&&t!==1/0}function LL(t,e){return Math.max(t+(e||0)-Date.now(),0)}function yp(t,e){return typeof t=="function"?t(e):t}function IL(t,e){return typeof t=="function"?t(e):t}function wp(t,e){const{type:n="all",exact:i,fetchStatus:s,predicate:r,queryKey:o,stale:a}=t;if(o){if(i){if(e.queryHash!==lf(o,e.options))return!1}else if(!oa(e.queryKey,o))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||s&&s!==e.state.fetchStatus||r&&!r(e))}function Sp(t,e){const{exact:n,status:i,predicate:s,mutationKey:r}=t;if(r){if(!e.options.mutationKey)return!1;if(n){if(ra(e.options.mutationKey)!==ra(r))return!1}else if(!oa(e.options.mutationKey,r))return!1}return!(i&&e.state.status!==i||s&&!s(e))}function lf(t,e){return((e==null?void 0:e.queryKeyHashFn)||ra)(t)}function ra(t){return JSON.stringify(t,(e,n)=>ud(n)?Object.keys(n).sort().reduce((i,s)=>(i[s]=n[s],i),{}):n)}function oa(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?Object.keys(e).every(n=>oa(t[n],e[n])):!1}function Hv(t,e){if(t===e)return t;const n=Mp(t)&&Mp(e);if(n||ud(t)&&ud(e)){const i=n?t:Object.keys(t),s=i.length,r=n?e:Object.keys(e),o=r.length,a=n?[]:{};let l=0;for(let c=0;c<o;c++){const u=n?c:r[c];(!n&&i.includes(u)||n)&&t[u]===void 0&&e[u]===void 0?(a[u]=void 0,l++):(a[u]=Hv(t[u],e[u]),a[u]===t[u]&&t[u]!==void 0&&l++)}return s===o&&l===s?t:a}return e}function Mp(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function ud(t){if(!Ep(t))return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(!Ep(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function Ep(t){return Object.prototype.toString.call(t)==="[object Object]"}function UL(t){return new Promise(e=>{setTimeout(e,t)})}function OL(t,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?Hv(t,e):e}function NL(t,e,n=0){const i=[...t,e];return n&&i.length>n?i.slice(1):i}function FL(t,e,n=0){const i=[e,...t];return n&&i.length>n?i.slice(0,-1):i}var cf=Symbol();function zv(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===cf?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}var Ks,_s,Xr,Cp,kL=(Cp=class extends rc{constructor(){super();St(this,Ks);St(this,_s);St(this,Xr);ht(this,Xr,e=>{if(!Aa&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){fe(this,_s)||this.setEventListener(fe(this,Xr))}onUnsubscribe(){var e;this.hasListeners()||((e=fe(this,_s))==null||e.call(this),ht(this,_s,void 0))}setEventListener(e){var n;ht(this,Xr,e),(n=fe(this,_s))==null||n.call(this),ht(this,_s,e(i=>{typeof i=="boolean"?this.setFocused(i):this.onFocus()}))}setFocused(e){fe(this,Ks)!==e&&(ht(this,Ks,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(n=>{n(e)})}isFocused(){var e;return typeof fe(this,Ks)=="boolean"?fe(this,Ks):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},Ks=new WeakMap,_s=new WeakMap,Xr=new WeakMap,Cp),Vv=new kL,jr,bs,qr,Rp,BL=(Rp=class extends rc{constructor(){super();St(this,jr,!0);St(this,bs);St(this,qr);ht(this,qr,e=>{if(!Aa&&window.addEventListener){const n=()=>e(!0),i=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",i)}}})}onSubscribe(){fe(this,bs)||this.setEventListener(fe(this,qr))}onUnsubscribe(){var e;this.hasListeners()||((e=fe(this,bs))==null||e.call(this),ht(this,bs,void 0))}setEventListener(e){var n;ht(this,qr,e),(n=fe(this,bs))==null||n.call(this),ht(this,bs,e(this.setOnline.bind(this)))}setOnline(e){fe(this,jr)!==e&&(ht(this,jr,e),this.listeners.forEach(i=>{i(e)}))}isOnline(){return fe(this,jr)}},jr=new WeakMap,bs=new WeakMap,qr=new WeakMap,Rp),kl=new BL;function HL(){let t,e;const n=new Promise((s,r)=>{t=s,e=r});n.status="pending",n.catch(()=>{});function i(s){Object.assign(n,s),delete n.resolve,delete n.reject}return n.resolve=s=>{i({status:"fulfilled",value:s}),t(s)},n.reject=s=>{i({status:"rejected",reason:s}),e(s)},n}function zL(t){return Math.min(1e3*2**t,3e4)}function Gv(t){return(t??"online")==="online"?kl.isOnline():!0}var Wv=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function iu(t){return t instanceof Wv}function $v(t){let e=!1,n=0,i=!1,s;const r=HL(),o=b=>{var m;i||(f(new Wv(b)),(m=t.abort)==null||m.call(t))},a=()=>{e=!0},l=()=>{e=!1},c=()=>Vv.isFocused()&&(t.networkMode==="always"||kl.isOnline())&&t.canRun(),u=()=>Gv(t.networkMode)&&t.canRun(),d=b=>{var m;i||(i=!0,(m=t.onSuccess)==null||m.call(t,b),s==null||s(),r.resolve(b))},f=b=>{var m;i||(i=!0,(m=t.onError)==null||m.call(t,b),s==null||s(),r.reject(b))},h=()=>new Promise(b=>{var m;s=p=>{(i||c())&&b(p)},(m=t.onPause)==null||m.call(t)}).then(()=>{var b;s=void 0,i||(b=t.onContinue)==null||b.call(t)}),g=()=>{if(i)return;let b;const m=n===0?t.initialPromise:void 0;try{b=m??t.fn()}catch(p){b=Promise.reject(p)}Promise.resolve(b).then(d).catch(p=>{var L;if(i)return;const C=t.retry??(Aa?0:3),E=t.retryDelay??zL,y=typeof E=="function"?E(n,p):E,D=C===!0||typeof C=="number"&&n<C||typeof C=="function"&&C(n,p);if(e||!D){f(p);return}n++,(L=t.onFail)==null||L.call(t,n,p),UL(y).then(()=>c()?void 0:h()).then(()=>{e?f(p):g()})})};return{promise:r,cancel:o,continue:()=>(s==null||s(),r),cancelRetry:a,continueRetry:l,canStart:u,start:()=>(u()?g():h().then(g),r)}}var VL=t=>setTimeout(t,0);function GL(){let t=[],e=0,n=a=>{a()},i=a=>{a()},s=VL;const r=a=>{e?t.push(a):s(()=>{n(a)})},o=()=>{const a=t;t=[],a.length&&s(()=>{i(()=>{a.forEach(l=>{n(l)})})})};return{batch:a=>{let l;e++;try{l=a()}finally{e--,e||o()}return l},batchCalls:a=>(...l)=>{r(()=>{a(...l)})},schedule:r,setNotifyFunction:a=>{n=a},setBatchNotifyFunction:a=>{i=a},setScheduler:a=>{s=a}}}var Cn=GL(),Zs,Pp,Xv=(Pp=class{constructor(){St(this,Zs)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),DL(this.gcTime)&&ht(this,Zs,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(Aa?1/0:5*60*1e3))}clearGcTimeout(){fe(this,Zs)&&(clearTimeout(fe(this,Zs)),ht(this,Zs,void 0))}},Zs=new WeakMap,Pp),Yr,Kr,ni,Qs,hn,aa,Js,ui,$i,Dp,WL=(Dp=class extends Xv{constructor(e){super();St(this,ui);St(this,Yr);St(this,Kr);St(this,ni);St(this,Qs);St(this,hn);St(this,aa);St(this,Js);ht(this,Js,!1),ht(this,aa,e.defaultOptions),this.setOptions(e.options),this.observers=[],ht(this,Qs,e.client),ht(this,ni,fe(this,Qs).getQueryCache()),this.queryKey=e.queryKey,this.queryHash=e.queryHash,ht(this,Yr,XL(this.options)),this.state=e.state??fe(this,Yr),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var e;return(e=fe(this,hn))==null?void 0:e.promise}setOptions(e){this.options={...fe(this,aa),...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&fe(this,ni).remove(this)}setData(e,n){const i=OL(this.state.data,e,this.options);return un(this,ui,$i).call(this,{data:i,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),i}setState(e,n){un(this,ui,$i).call(this,{type:"setState",state:e,setStateOptions:n})}cancel(e){var i,s;const n=(i=fe(this,hn))==null?void 0:i.promise;return(s=fe(this,hn))==null||s.cancel(e),n?n.then(ci).catch(ci):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(fe(this,Yr))}isActive(){return this.observers.some(e=>IL(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===cf||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(e=0){return this.state.isInvalidated||this.state.data===void 0||!LL(this.state.dataUpdatedAt,e)}onFocus(){var n;const e=this.observers.find(i=>i.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(n=fe(this,hn))==null||n.continue()}onOnline(){var n;const e=this.observers.find(i=>i.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(n=fe(this,hn))==null||n.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),fe(this,ni).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(fe(this,hn)&&(fe(this,Js)?fe(this,hn).cancel({revert:!0}):fe(this,hn).cancelRetry()),this.scheduleGc()),fe(this,ni).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||un(this,ui,$i).call(this,{type:"invalidate"})}fetch(e,n){var l,c,u;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(fe(this,hn))return fe(this,hn).continueRetry(),fe(this,hn).promise}if(e&&this.setOptions(e),!this.options.queryFn){const d=this.observers.find(f=>f.options.queryFn);d&&this.setOptions(d.options)}const i=new AbortController,s=d=>{Object.defineProperty(d,"signal",{enumerable:!0,get:()=>(ht(this,Js,!0),i.signal)})},r=()=>{const d=zv(this.options,n),f={client:fe(this,Qs),queryKey:this.queryKey,meta:this.meta};return s(f),ht(this,Js,!1),this.options.persister?this.options.persister(d,f,this):d(f)},o={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:fe(this,Qs),state:this.state,fetchFn:r};s(o),(l=this.options.behavior)==null||l.onFetch(o,this),ht(this,Kr,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((c=o.fetchOptions)==null?void 0:c.meta))&&un(this,ui,$i).call(this,{type:"fetch",meta:(u=o.fetchOptions)==null?void 0:u.meta});const a=d=>{var f,h,g,b;iu(d)&&d.silent||un(this,ui,$i).call(this,{type:"error",error:d}),iu(d)||((h=(f=fe(this,ni).config).onError)==null||h.call(f,d,this),(b=(g=fe(this,ni).config).onSettled)==null||b.call(g,this.state.data,d,this)),this.scheduleGc()};return ht(this,hn,$v({initialPromise:n==null?void 0:n.initialPromise,fn:o.fetchFn,abort:i.abort.bind(i),onSuccess:d=>{var f,h,g,b;if(d===void 0){a(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(d)}catch(m){a(m);return}(h=(f=fe(this,ni).config).onSuccess)==null||h.call(f,d,this),(b=(g=fe(this,ni).config).onSettled)==null||b.call(g,d,this.state.error,this),this.scheduleGc()},onError:a,onFail:(d,f)=>{un(this,ui,$i).call(this,{type:"failed",failureCount:d,error:f})},onPause:()=>{un(this,ui,$i).call(this,{type:"pause"})},onContinue:()=>{un(this,ui,$i).call(this,{type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode,canRun:()=>!0})),fe(this,hn).start()}},Yr=new WeakMap,Kr=new WeakMap,ni=new WeakMap,Qs=new WeakMap,hn=new WeakMap,aa=new WeakMap,Js=new WeakMap,ui=new WeakSet,$i=function(e){const n=i=>{switch(e.type){case"failed":return{...i,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...$L(i.data,this.options),fetchMeta:e.meta??null};case"success":return{...i,data:e.data,dataUpdateCount:i.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const s=e.error;return iu(s)&&s.revert&&fe(this,Kr)?{...fe(this,Kr),fetchStatus:"idle"}:{...i,error:s,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...e.state}}};this.state=n(this.state),Cn.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),fe(this,ni).notify({query:this,type:"updated",action:e})})},Dp);function $L(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Gv(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function XL(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=e!==void 0,i=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var wi,Lp,jv=(Lp=class extends rc{constructor(n={}){super();St(this,wi);this.config=n,ht(this,wi,new Map)}build(n,i,s){const r=i.queryKey,o=i.queryHash??lf(r,i);let a=this.get(o);return a||(a=new WL({client:n,queryKey:r,queryHash:o,options:n.defaultQueryOptions(i),state:s,defaultOptions:n.getQueryDefaults(r)}),this.add(a)),a}add(n){fe(this,wi).has(n.queryHash)||(fe(this,wi).set(n.queryHash,n),this.notify({type:"added",query:n}))}remove(n){const i=fe(this,wi).get(n.queryHash);i&&(n.destroy(),i===n&&fe(this,wi).delete(n.queryHash),this.notify({type:"removed",query:n}))}clear(){Cn.batch(()=>{this.getAll().forEach(n=>{this.remove(n)})})}get(n){return fe(this,wi).get(n)}getAll(){return[...fe(this,wi).values()]}find(n){const i={exact:!0,...n};return this.getAll().find(s=>wp(i,s))}findAll(n={}){const i=this.getAll();return Object.keys(n).length>0?i.filter(s=>wp(n,s)):i}notify(n){Cn.batch(()=>{this.listeners.forEach(i=>{i(n)})})}onFocus(){Cn.batch(()=>{this.getAll().forEach(n=>{n.onFocus()})})}onOnline(){Cn.batch(()=>{this.getAll().forEach(n=>{n.onOnline()})})}},wi=new WeakMap,Lp),Si,Mn,er,Mi,ds,Ip,jL=(Ip=class extends Xv{constructor(e){super();St(this,Mi);St(this,Si);St(this,Mn);St(this,er);this.mutationId=e.mutationId,ht(this,Mn,e.mutationCache),ht(this,Si,[]),this.state=e.state||qL(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){fe(this,Si).includes(e)||(fe(this,Si).push(e),this.clearGcTimeout(),fe(this,Mn).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){ht(this,Si,fe(this,Si).filter(n=>n!==e)),this.scheduleGc(),fe(this,Mn).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){fe(this,Si).length||(this.state.status==="pending"?this.scheduleGc():fe(this,Mn).remove(this))}continue(){var e;return((e=fe(this,er))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var r,o,a,l,c,u,d,f,h,g,b,m,p,C,E,y,D,L,P,k;const n=()=>{un(this,Mi,ds).call(this,{type:"continue"})};ht(this,er,$v({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(S,A)=>{un(this,Mi,ds).call(this,{type:"failed",failureCount:S,error:A})},onPause:()=>{un(this,Mi,ds).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>fe(this,Mn).canRun(this)}));const i=this.state.status==="pending",s=!fe(this,er).canStart();try{if(i)n();else{un(this,Mi,ds).call(this,{type:"pending",variables:e,isPaused:s}),await((o=(r=fe(this,Mn).config).onMutate)==null?void 0:o.call(r,e,this));const A=await((l=(a=this.options).onMutate)==null?void 0:l.call(a,e));A!==this.state.context&&un(this,Mi,ds).call(this,{type:"pending",context:A,variables:e,isPaused:s})}const S=await fe(this,er).start();return await((u=(c=fe(this,Mn).config).onSuccess)==null?void 0:u.call(c,S,e,this.state.context,this)),await((f=(d=this.options).onSuccess)==null?void 0:f.call(d,S,e,this.state.context)),await((g=(h=fe(this,Mn).config).onSettled)==null?void 0:g.call(h,S,null,this.state.variables,this.state.context,this)),await((m=(b=this.options).onSettled)==null?void 0:m.call(b,S,null,e,this.state.context)),un(this,Mi,ds).call(this,{type:"success",data:S}),S}catch(S){try{throw await((C=(p=fe(this,Mn).config).onError)==null?void 0:C.call(p,S,e,this.state.context,this)),await((y=(E=this.options).onError)==null?void 0:y.call(E,S,e,this.state.context)),await((L=(D=fe(this,Mn).config).onSettled)==null?void 0:L.call(D,void 0,S,this.state.variables,this.state.context,this)),await((k=(P=this.options).onSettled)==null?void 0:k.call(P,void 0,S,e,this.state.context)),S}finally{un(this,Mi,ds).call(this,{type:"error",error:S})}}finally{fe(this,Mn).runNext(this)}}},Si=new WeakMap,Mn=new WeakMap,er=new WeakMap,Mi=new WeakSet,ds=function(e){const n=i=>{switch(e.type){case"failed":return{...i,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...i,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:e.error,failureCount:i.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=n(this.state),Cn.batch(()=>{fe(this,Si).forEach(i=>{i.onMutationUpdate(e)}),fe(this,Mn).notify({mutation:this,type:"updated",action:e})})},Ip);function qL(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var ji,di,la,Up,qv=(Up=class extends rc{constructor(n={}){super();St(this,ji);St(this,di);St(this,la);this.config=n,ht(this,ji,new Set),ht(this,di,new Map),ht(this,la,0)}build(n,i,s){const r=new jL({mutationCache:this,mutationId:++Ca(this,la)._,options:n.defaultMutationOptions(i),state:s});return this.add(r),r}add(n){fe(this,ji).add(n);const i=il(n);if(typeof i=="string"){const s=fe(this,di).get(i);s?s.push(n):fe(this,di).set(i,[n])}this.notify({type:"added",mutation:n})}remove(n){if(fe(this,ji).delete(n)){const i=il(n);if(typeof i=="string"){const s=fe(this,di).get(i);if(s)if(s.length>1){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}else s[0]===n&&fe(this,di).delete(i)}}this.notify({type:"removed",mutation:n})}canRun(n){const i=il(n);if(typeof i=="string"){const s=fe(this,di).get(i),r=s==null?void 0:s.find(o=>o.state.status==="pending");return!r||r===n}else return!0}runNext(n){var s;const i=il(n);if(typeof i=="string"){const r=(s=fe(this,di).get(i))==null?void 0:s.find(o=>o!==n&&o.state.isPaused);return(r==null?void 0:r.continue())??Promise.resolve()}else return Promise.resolve()}clear(){Cn.batch(()=>{fe(this,ji).forEach(n=>{this.notify({type:"removed",mutation:n})}),fe(this,ji).clear(),fe(this,di).clear()})}getAll(){return Array.from(fe(this,ji))}find(n){const i={exact:!0,...n};return this.getAll().find(s=>Sp(i,s))}findAll(n={}){return this.getAll().filter(i=>Sp(n,i))}notify(n){Cn.batch(()=>{this.listeners.forEach(i=>{i(n)})})}resumePausedMutations(){const n=this.getAll().filter(i=>i.state.isPaused);return Cn.batch(()=>Promise.all(n.map(i=>i.continue().catch(ci))))}},ji=new WeakMap,di=new WeakMap,la=new WeakMap,Up);function il(t){var e;return(e=t.options.scope)==null?void 0:e.id}function Tp(t){return{onFetch:(e,n)=>{var u,d,f,h,g;const i=e.options,s=(f=(d=(u=e.fetchOptions)==null?void 0:u.meta)==null?void 0:d.fetchMore)==null?void 0:f.direction,r=((h=e.state.data)==null?void 0:h.pages)||[],o=((g=e.state.data)==null?void 0:g.pageParams)||[];let a={pages:[],pageParams:[]},l=0;const c=async()=>{let b=!1;const m=E=>{Object.defineProperty(E,"signal",{enumerable:!0,get:()=>(e.signal.aborted?b=!0:e.signal.addEventListener("abort",()=>{b=!0}),e.signal)})},p=zv(e.options,e.fetchOptions),C=async(E,y,D)=>{if(b)return Promise.reject();if(y==null&&E.pages.length)return Promise.resolve(E);const L={client:e.client,queryKey:e.queryKey,pageParam:y,direction:D?"backward":"forward",meta:e.options.meta};m(L);const P=await p(L),{maxPages:k}=e.options,S=D?FL:NL;return{pages:S(E.pages,P,k),pageParams:S(E.pageParams,y,k)}};if(s&&r.length){const E=s==="backward",y=E?YL:Ap,D={pages:r,pageParams:o},L=y(i,D);a=await C(D,L,E)}else{const E=t??r.length;do{const y=l===0?o[0]??i.initialPageParam:Ap(i,a);if(l>0&&y==null)break;a=await C(a,y),l++}while(l<E)}return a};e.options.persister?e.fetchFn=()=>{var b,m;return(m=(b=e.options).persister)==null?void 0:m.call(b,c,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=c}}}function Ap(t,{pages:e,pageParams:n}){const i=e.length-1;return e.length>0?t.getNextPageParam(e[i],e,n[i],n):void 0}function YL(t,{pages:e,pageParams:n}){var i;return e.length>0?(i=t.getPreviousPageParam)==null?void 0:i.call(t,e[0],e,n[0],n):void 0}var Xt,xs,ys,Zr,Qr,ws,Jr,eo,Op,KL=(Op=class{constructor(e={}){St(this,Xt);St(this,xs);St(this,ys);St(this,Zr);St(this,Qr);St(this,ws);St(this,Jr);St(this,eo);ht(this,Xt,e.queryCache||new jv),ht(this,xs,e.mutationCache||new qv),ht(this,ys,e.defaultOptions||{}),ht(this,Zr,new Map),ht(this,Qr,new Map),ht(this,ws,0)}mount(){Ca(this,ws)._++,fe(this,ws)===1&&(ht(this,Jr,Vv.subscribe(async e=>{e&&(await this.resumePausedMutations(),fe(this,Xt).onFocus())})),ht(this,eo,kl.subscribe(async e=>{e&&(await this.resumePausedMutations(),fe(this,Xt).onOnline())})))}unmount(){var e,n;Ca(this,ws)._--,fe(this,ws)===0&&((e=fe(this,Jr))==null||e.call(this),ht(this,Jr,void 0),(n=fe(this,eo))==null||n.call(this),ht(this,eo,void 0))}isFetching(e){return fe(this,Xt).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return fe(this,xs).findAll({...e,status:"pending"}).length}getQueryData(e){var i;const n=this.defaultQueryOptions({queryKey:e});return(i=fe(this,Xt).get(n.queryHash))==null?void 0:i.state.data}ensureQueryData(e){const n=this.defaultQueryOptions(e),i=fe(this,Xt).build(this,n),s=i.state.data;return s===void 0?this.fetchQuery(e):(e.revalidateIfStale&&i.isStaleByTime(yp(n.staleTime,i))&&this.prefetchQuery(n),Promise.resolve(s))}getQueriesData(e){return fe(this,Xt).findAll(e).map(({queryKey:n,state:i})=>{const s=i.data;return[n,s]})}setQueryData(e,n,i){const s=this.defaultQueryOptions({queryKey:e}),r=fe(this,Xt).get(s.queryHash),o=r==null?void 0:r.state.data,a=PL(n,o);if(a!==void 0)return fe(this,Xt).build(this,s).setData(a,{...i,manual:!0})}setQueriesData(e,n,i){return Cn.batch(()=>fe(this,Xt).findAll(e).map(({queryKey:s})=>[s,this.setQueryData(s,n,i)]))}getQueryState(e){var i;const n=this.defaultQueryOptions({queryKey:e});return(i=fe(this,Xt).get(n.queryHash))==null?void 0:i.state}removeQueries(e){const n=fe(this,Xt);Cn.batch(()=>{n.findAll(e).forEach(i=>{n.remove(i)})})}resetQueries(e,n){const i=fe(this,Xt);return Cn.batch(()=>(i.findAll(e).forEach(s=>{s.reset()}),this.refetchQueries({type:"active",...e},n)))}cancelQueries(e,n={}){const i={revert:!0,...n},s=Cn.batch(()=>fe(this,Xt).findAll(e).map(r=>r.cancel(i)));return Promise.all(s).then(ci).catch(ci)}invalidateQueries(e,n={}){return Cn.batch(()=>(fe(this,Xt).findAll(e).forEach(i=>{i.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},n)))}refetchQueries(e,n={}){const i={...n,cancelRefetch:n.cancelRefetch??!0},s=Cn.batch(()=>fe(this,Xt).findAll(e).filter(r=>!r.isDisabled()).map(r=>{let o=r.fetch(void 0,i);return i.throwOnError||(o=o.catch(ci)),r.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(s).then(ci)}fetchQuery(e){const n=this.defaultQueryOptions(e);n.retry===void 0&&(n.retry=!1);const i=fe(this,Xt).build(this,n);return i.isStaleByTime(yp(n.staleTime,i))?i.fetch(n):Promise.resolve(i.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(ci).catch(ci)}fetchInfiniteQuery(e){return e.behavior=Tp(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(ci).catch(ci)}ensureInfiniteQueryData(e){return e.behavior=Tp(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return kl.isOnline()?fe(this,xs).resumePausedMutations():Promise.resolve()}getQueryCache(){return fe(this,Xt)}getMutationCache(){return fe(this,xs)}getDefaultOptions(){return fe(this,ys)}setDefaultOptions(e){ht(this,ys,e)}setQueryDefaults(e,n){fe(this,Zr).set(ra(e),{queryKey:e,defaultOptions:n})}getQueryDefaults(e){const n=[...fe(this,Zr).values()],i={};return n.forEach(s=>{oa(e,s.queryKey)&&Object.assign(i,s.defaultOptions)}),i}setMutationDefaults(e,n){fe(this,Qr).set(ra(e),{mutationKey:e,defaultOptions:n})}getMutationDefaults(e){const n=[...fe(this,Qr).values()],i={};return n.forEach(s=>{oa(e,s.mutationKey)&&Object.assign(i,s.defaultOptions)}),i}defaultQueryOptions(e){if(e._defaulted)return e;const n={...fe(this,ys).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return n.queryHash||(n.queryHash=lf(n.queryKey,n)),n.refetchOnReconnect===void 0&&(n.refetchOnReconnect=n.networkMode!=="always"),n.throwOnError===void 0&&(n.throwOnError=!!n.suspense),!n.networkMode&&n.persister&&(n.networkMode="offlineFirst"),n.queryFn===cf&&(n.enabled=!1),n}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...fe(this,ys).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){fe(this,Xt).clear(),fe(this,xs).clear()}},Xt=new WeakMap,xs=new WeakMap,ys=new WeakMap,Zr=new WeakMap,Qr=new WeakMap,ws=new WeakMap,Jr=new WeakMap,eo=new WeakMap,Op),ZL="VUE_QUERY_CLIENT";function QL(t){const e=t?`:${t}`:"";return`${ZL}${e}`}function dd(t,e,n="",i=0){if(e){const s=e(t,n,i);if(s===void 0&&ln(t)||s!==void 0)return s}if(Array.isArray(t))return t.map((s,r)=>dd(s,e,String(r),i+1));if(typeof t=="object"&&eI(t)){const s=Object.entries(t).map(([r,o])=>[r,dd(o,e,r,i+1)]);return Object.fromEntries(s)}return t}function JL(t,e){return dd(t,e)}function vt(t,e=!1){return JL(t,(n,i,s)=>{if(s===1&&i==="queryKey")return vt(n,!0);if(e&&tI(n))return vt(n(),e);if(ln(n))return vt(Ts(n),e)})}function eI(t){if(Object.prototype.toString.call(t)!=="[object Object]")return!1;const e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function tI(t){return typeof t=="function"}var nI=class extends jv{find(t){return super.find(vt(t))}findAll(t={}){return super.findAll(vt(t))}},iI=class extends qv{find(t){return super.find(vt(t))}findAll(t={}){return super.findAll(vt(t))}},sI=class extends KL{constructor(t={}){const e={defaultOptions:t.defaultOptions,queryCache:t.queryCache||new nI,mutationCache:t.mutationCache||new iI};super(e),this.isRestoring=it(!1)}isFetching(t={}){return super.isFetching(vt(t))}isMutating(t={}){return super.isMutating(vt(t))}getQueryData(t){return super.getQueryData(vt(t))}ensureQueryData(t){return super.ensureQueryData(vt(t))}getQueriesData(t){return super.getQueriesData(vt(t))}setQueryData(t,e,n={}){return super.setQueryData(vt(t),e,vt(n))}setQueriesData(t,e,n={}){return super.setQueriesData(vt(t),e,vt(n))}getQueryState(t){return super.getQueryState(vt(t))}removeQueries(t={}){return super.removeQueries(vt(t))}resetQueries(t={},e={}){return super.resetQueries(vt(t),vt(e))}cancelQueries(t={},e={}){return super.cancelQueries(vt(t),vt(e))}invalidateQueries(t={},e={}){const n=vt(t),i=vt(e);if(super.invalidateQueries({...n,refetchType:"none"},i),n.refetchType==="none")return Promise.resolve();const s={...n,type:n.refetchType??n.type??"active"};return ha().then(()=>super.refetchQueries(s,i))}refetchQueries(t={},e={}){return super.refetchQueries(vt(t),vt(e))}fetchQuery(t){return super.fetchQuery(vt(t))}prefetchQuery(t){return super.prefetchQuery(vt(t))}fetchInfiniteQuery(t){return super.fetchInfiniteQuery(vt(t))}prefetchInfiniteQuery(t){return super.prefetchInfiniteQuery(vt(t))}setDefaultOptions(t){super.setDefaultOptions(vt(t))}setQueryDefaults(t,e){super.setQueryDefaults(vt(t),vt(e))}getQueryDefaults(t){return super.getQueryDefaults(vt(t))}setMutationDefaults(t,e){super.setMutationDefaults(vt(t),vt(e))}getMutationDefaults(t){return super.getMutationDefaults(vt(t))}},rI={install:(t,e={})=>{const n=QL(e.queryClientKey);let i;if("queryClient"in e&&e.queryClient)i=e.queryClient;else{const o="queryClientConfig"in e?e.queryClientConfig:void 0;i=new sI(o)}Aa||i.mount();let s=()=>{};if(e.clientPersister){i.isRestoring.value=!0;const[o,a]=e.clientPersister(i);s=o,a.then(()=>{var l;i.isRestoring.value=!1,(l=e.clientPersisterOnSuccess)==null||l.call(e,i)})}const r=()=>{i.unmount(),s()};if(t.onUnmount)t.onUnmount(r);else{const o=t.unmount;t.unmount=function(){r(),o()}}t.provide(n,i)}};const Yv=gb(Rx),oI=xb();Yv.use(oI).use(RL).use(rI);Yv.mount("#app");export{Mo as A,lI as B,nn as C,ZP as D,dD as E,Ht as F,an as G,Lr as H,Oo as I,yt as J,Fv as K,Pv as L,ld as M,nc as N,Bv as O,Xn as P,pi as Q,pn as R,Ev as S,Av as T,Fl as U,Hm as V,sL as W,Ad as X,ha as Y,ma as _,_ as a,Dt as b,$e as c,$t as d,uI as e,Ao as f,Sc as g,fI as h,hI as i,pI as j,mI as k,dI as l,da as m,po as n,He as o,Td as p,qt as q,it as r,bi as s,st as t,En as u,en as v,Fn as w,Ye as x,cI as y,jn as z};
