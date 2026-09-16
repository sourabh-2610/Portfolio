(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function B_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Zf={exports:{}},wa={},Qf={exports:{}},wt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hg;function VS(){if(hg)return wt;hg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function g(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,R={};function M(N,se,ye){this.props=N,this.context=se,this.refs=R,this.updater=ye||S}M.prototype.isReactComponent={},M.prototype.setState=function(N,se){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,se,"setState")},M.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function y(){}y.prototype=M.prototype;function P(N,se,ye){this.props=N,this.context=se,this.refs=R,this.updater=ye||S}var O=P.prototype=new y;O.constructor=P,T(O,M.prototype),O.isPureReactComponent=!0;var C=Array.isArray,b=Object.prototype.hasOwnProperty,D={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function x(N,se,ye){var je,We={},qe=null,oe=null;if(se!=null)for(je in se.ref!==void 0&&(oe=se.ref),se.key!==void 0&&(qe=""+se.key),se)b.call(se,je)&&!U.hasOwnProperty(je)&&(We[je]=se[je]);var ce=arguments.length-2;if(ce===1)We.children=ye;else if(1<ce){for(var we=Array(ce),Ge=0;Ge<ce;Ge++)we[Ge]=arguments[Ge+2];We.children=we}if(N&&N.defaultProps)for(je in ce=N.defaultProps,ce)We[je]===void 0&&(We[je]=ce[je]);return{$$typeof:n,type:N,key:qe,ref:oe,props:We,_owner:D.current}}function L(N,se){return{$$typeof:n,type:N.type,key:se,ref:N.ref,props:N.props,_owner:N._owner}}function B(N){return typeof N=="object"&&N!==null&&N.$$typeof===n}function V(N){var se={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ye){return se[ye]})}var ee=/\/+/g;function Z(N,se){return typeof N=="object"&&N!==null&&N.key!=null?V(""+N.key):se.toString(36)}function H(N,se,ye,je,We){var qe=typeof N;(qe==="undefined"||qe==="boolean")&&(N=null);var oe=!1;if(N===null)oe=!0;else switch(qe){case"string":case"number":oe=!0;break;case"object":switch(N.$$typeof){case n:case e:oe=!0}}if(oe)return oe=N,We=We(oe),N=je===""?"."+Z(oe,0):je,C(We)?(ye="",N!=null&&(ye=N.replace(ee,"$&/")+"/"),H(We,se,ye,"",function(Ge){return Ge})):We!=null&&(B(We)&&(We=L(We,ye+(!We.key||oe&&oe.key===We.key?"":(""+We.key).replace(ee,"$&/")+"/")+N)),se.push(We)),1;if(oe=0,je=je===""?".":je+":",C(N))for(var ce=0;ce<N.length;ce++){qe=N[ce];var we=je+Z(qe,ce);oe+=H(qe,se,ye,we,We)}else if(we=g(N),typeof we=="function")for(N=we.call(N),ce=0;!(qe=N.next()).done;)qe=qe.value,we=je+Z(qe,ce++),oe+=H(qe,se,ye,we,We);else if(qe==="object")throw se=String(N),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return oe}function te(N,se,ye){if(N==null)return N;var je=[],We=0;return H(N,je,"","",function(qe){return se.call(ye,qe,We++)}),je}function me(N){if(N._status===-1){var se=N._result;se=se(),se.then(function(ye){(N._status===0||N._status===-1)&&(N._status=1,N._result=ye)},function(ye){(N._status===0||N._status===-1)&&(N._status=2,N._result=ye)}),N._status===-1&&(N._status=0,N._result=se)}if(N._status===1)return N._result.default;throw N._result}var j={current:null},K={transition:null},W={ReactCurrentDispatcher:j,ReactCurrentBatchConfig:K,ReactCurrentOwner:D};function $(){throw Error("act(...) is not supported in production builds of React.")}return wt.Children={map:te,forEach:function(N,se,ye){te(N,function(){se.apply(this,arguments)},ye)},count:function(N){var se=0;return te(N,function(){se++}),se},toArray:function(N){return te(N,function(se){return se})||[]},only:function(N){if(!B(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},wt.Component=M,wt.Fragment=t,wt.Profiler=o,wt.PureComponent=P,wt.StrictMode=r,wt.Suspense=d,wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W,wt.act=$,wt.cloneElement=function(N,se,ye){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var je=T({},N.props),We=N.key,qe=N.ref,oe=N._owner;if(se!=null){if(se.ref!==void 0&&(qe=se.ref,oe=D.current),se.key!==void 0&&(We=""+se.key),N.type&&N.type.defaultProps)var ce=N.type.defaultProps;for(we in se)b.call(se,we)&&!U.hasOwnProperty(we)&&(je[we]=se[we]===void 0&&ce!==void 0?ce[we]:se[we])}var we=arguments.length-2;if(we===1)je.children=ye;else if(1<we){ce=Array(we);for(var Ge=0;Ge<we;Ge++)ce[Ge]=arguments[Ge+2];je.children=ce}return{$$typeof:n,type:N.type,key:We,ref:qe,props:je,_owner:oe}},wt.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},wt.createElement=x,wt.createFactory=function(N){var se=x.bind(null,N);return se.type=N,se},wt.createRef=function(){return{current:null}},wt.forwardRef=function(N){return{$$typeof:f,render:N}},wt.isValidElement=B,wt.lazy=function(N){return{$$typeof:m,_payload:{_status:-1,_result:N},_init:me}},wt.memo=function(N,se){return{$$typeof:h,type:N,compare:se===void 0?null:se}},wt.startTransition=function(N){var se=K.transition;K.transition={};try{N()}finally{K.transition=se}},wt.unstable_act=$,wt.useCallback=function(N,se){return j.current.useCallback(N,se)},wt.useContext=function(N){return j.current.useContext(N)},wt.useDebugValue=function(){},wt.useDeferredValue=function(N){return j.current.useDeferredValue(N)},wt.useEffect=function(N,se){return j.current.useEffect(N,se)},wt.useId=function(){return j.current.useId()},wt.useImperativeHandle=function(N,se,ye){return j.current.useImperativeHandle(N,se,ye)},wt.useInsertionEffect=function(N,se){return j.current.useInsertionEffect(N,se)},wt.useLayoutEffect=function(N,se){return j.current.useLayoutEffect(N,se)},wt.useMemo=function(N,se){return j.current.useMemo(N,se)},wt.useReducer=function(N,se,ye){return j.current.useReducer(N,se,ye)},wt.useRef=function(N){return j.current.useRef(N)},wt.useState=function(N){return j.current.useState(N)},wt.useSyncExternalStore=function(N,se,ye){return j.current.useSyncExternalStore(N,se,ye)},wt.useTransition=function(){return j.current.useTransition()},wt.version="18.3.1",wt}var pg;function Jh(){return pg||(pg=1,Qf.exports=VS()),Qf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mg;function HS(){if(mg)return wa;mg=1;var n=Jh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,d,h){var m,v={},g=null,S=null;h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(S=d.ref);for(m in d)r.call(d,m)&&!l.hasOwnProperty(m)&&(v[m]=d[m]);if(f&&f.defaultProps)for(m in d=f.defaultProps,d)v[m]===void 0&&(v[m]=d[m]);return{$$typeof:e,type:f,key:g,ref:S,props:v,_owner:o.current}}return wa.Fragment=t,wa.jsx=u,wa.jsxs=u,wa}var gg;function GS(){return gg||(gg=1,Zf.exports=HS()),Zf.exports}var re=GS(),Oe=Jh();const fs=B_(Oe);var lu={},Jf={exports:{}},ri={},ed={exports:{}},td={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vg;function WS(){return vg||(vg=1,(function(n){function e(K,W){var $=K.length;K.push(W);e:for(;0<$;){var N=$-1>>>1,se=K[N];if(0<o(se,W))K[N]=W,K[$]=se,$=N;else break e}}function t(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var W=K[0],$=K.pop();if($!==W){K[0]=$;e:for(var N=0,se=K.length,ye=se>>>1;N<ye;){var je=2*(N+1)-1,We=K[je],qe=je+1,oe=K[qe];if(0>o(We,$))qe<se&&0>o(oe,We)?(K[N]=oe,K[qe]=$,N=qe):(K[N]=We,K[je]=$,N=je);else if(qe<se&&0>o(oe,$))K[N]=oe,K[qe]=$,N=qe;else break e}}return W}function o(K,W){var $=K.sortIndex-W.sortIndex;return $!==0?$:K.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();n.unstable_now=function(){return u.now()-f}}var d=[],h=[],m=1,v=null,g=3,S=!1,T=!1,R=!1,M=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function O(K){for(var W=t(h);W!==null;){if(W.callback===null)r(h);else if(W.startTime<=K)r(h),W.sortIndex=W.expirationTime,e(d,W);else break;W=t(h)}}function C(K){if(R=!1,O(K),!T)if(t(d)!==null)T=!0,me(b);else{var W=t(h);W!==null&&j(C,W.startTime-K)}}function b(K,W){T=!1,R&&(R=!1,y(x),x=-1),S=!0;var $=g;try{for(O(W),v=t(d);v!==null&&(!(v.expirationTime>W)||K&&!V());){var N=v.callback;if(typeof N=="function"){v.callback=null,g=v.priorityLevel;var se=N(v.expirationTime<=W);W=n.unstable_now(),typeof se=="function"?v.callback=se:v===t(d)&&r(d),O(W)}else r(d);v=t(d)}if(v!==null)var ye=!0;else{var je=t(h);je!==null&&j(C,je.startTime-W),ye=!1}return ye}finally{v=null,g=$,S=!1}}var D=!1,U=null,x=-1,L=5,B=-1;function V(){return!(n.unstable_now()-B<L)}function ee(){if(U!==null){var K=n.unstable_now();B=K;var W=!0;try{W=U(!0,K)}finally{W?Z():(D=!1,U=null)}}else D=!1}var Z;if(typeof P=="function")Z=function(){P(ee)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,te=H.port2;H.port1.onmessage=ee,Z=function(){te.postMessage(null)}}else Z=function(){M(ee,0)};function me(K){U=K,D||(D=!0,Z())}function j(K,W){x=M(function(){K(n.unstable_now())},W)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(K){K.callback=null},n.unstable_continueExecution=function(){T||S||(T=!0,me(b))},n.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<K?Math.floor(1e3/K):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(K){switch(g){case 1:case 2:case 3:var W=3;break;default:W=g}var $=g;g=W;try{return K()}finally{g=$}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(K,W){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var $=g;g=K;try{return W()}finally{g=$}},n.unstable_scheduleCallback=function(K,W,$){var N=n.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?N+$:N):$=N,K){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=$+se,K={id:m++,callback:W,priorityLevel:K,startTime:$,expirationTime:se,sortIndex:-1},$>N?(K.sortIndex=$,e(h,K),t(d)===null&&K===t(h)&&(R?(y(x),x=-1):R=!0,j(C,$-N))):(K.sortIndex=se,e(d,K),T||S||(T=!0,me(b))),K},n.unstable_shouldYield=V,n.unstable_wrapCallback=function(K){var W=g;return function(){var $=g;g=W;try{return K.apply(this,arguments)}finally{g=$}}}})(td)),td}var _g;function XS(){return _g||(_g=1,ed.exports=WS()),ed.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xg;function YS(){if(xg)return ri;xg=1;var n=Jh(),e=XS();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},v={};function g(i){return d.call(v,i)?!0:d.call(m,i)?!1:h.test(i)?v[i]=!0:(m[i]=!0,!1)}function S(i,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function T(i,s,a,c){if(s===null||typeof s>"u"||S(i,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function R(i,s,a,c,p,_,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=i,this.type=s,this.sanitizeURL=_,this.removeEmptyString=w}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){M[i]=new R(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];M[s]=new R(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){M[i]=new R(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){M[i]=new R(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){M[i]=new R(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){M[i]=new R(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){M[i]=new R(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){M[i]=new R(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){M[i]=new R(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function P(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(y,P);M[s]=new R(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(y,P);M[s]=new R(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(y,P);M[s]=new R(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){M[i]=new R(i,1,!1,i.toLowerCase(),null,!1,!1)}),M.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){M[i]=new R(i,1,!1,i.toLowerCase(),null,!0,!0)});function O(i,s,a,c){var p=M.hasOwnProperty(s)?M[s]:null;(p!==null?p.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(T(s,a,p,c)&&(a=null),c||p===null?g(s)&&(a===null?i.removeAttribute(s):i.setAttribute(s,""+a)):p.mustUseProperty?i[p.propertyName]=a===null?p.type===3?!1:"":a:(s=p.attributeName,c=p.attributeNamespace,a===null?i.removeAttribute(s):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,c?i.setAttributeNS(c,s,a):i.setAttribute(s,a))))}var C=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,b=Symbol.for("react.element"),D=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),V=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),me=Symbol.for("react.lazy"),j=Symbol.for("react.offscreen"),K=Symbol.iterator;function W(i){return i===null||typeof i!="object"?null:(i=K&&i[K]||i["@@iterator"],typeof i=="function"?i:null)}var $=Object.assign,N;function se(i){if(N===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);N=s&&s[1]||""}return`
`+N+i}var ye=!1;function je(i,s){if(!i||ye)return"";ye=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(he){var c=he}Reflect.construct(i,[],s)}else{try{s.call()}catch(he){c=he}i.call(s.prototype)}else{try{throw Error()}catch(he){c=he}i()}}catch(he){if(he&&c&&typeof he.stack=="string"){for(var p=he.stack.split(`
`),_=c.stack.split(`
`),w=p.length-1,F=_.length-1;1<=w&&0<=F&&p[w]!==_[F];)F--;for(;1<=w&&0<=F;w--,F--)if(p[w]!==_[F]){if(w!==1||F!==1)do if(w--,F--,0>F||p[w]!==_[F]){var z=`
`+p[w].replace(" at new "," at ");return i.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",i.displayName)),z}while(1<=w&&0<=F);break}}}finally{ye=!1,Error.prepareStackTrace=a}return(i=i?i.displayName||i.name:"")?se(i):""}function We(i){switch(i.tag){case 5:return se(i.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return i=je(i.type,!1),i;case 11:return i=je(i.type.render,!1),i;case 1:return i=je(i.type,!0),i;default:return""}}function qe(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case U:return"Fragment";case D:return"Portal";case L:return"Profiler";case x:return"StrictMode";case Z:return"Suspense";case H:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case V:return(i.displayName||"Context")+".Consumer";case B:return(i._context.displayName||"Context")+".Provider";case ee:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case te:return s=i.displayName||null,s!==null?s:qe(i.type)||"Memo";case me:s=i._payload,i=i._init;try{return qe(i(s))}catch{}}return null}function oe(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qe(s);case 8:return s===x?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function ce(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function we(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ge(i){var s=we(i)?"checked":"value",a=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),c=""+i[s];if(!i.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,_=a.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return p.call(this)},set:function(w){c=""+w,_.call(this,w)}}),Object.defineProperty(i,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Ce(i){i._valueTracker||(i._valueTracker=Ge(i))}function ze(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return i&&(c=we(i)?i.checked?"true":"false":i.value),i=c,i!==a?(s.setValue(i),!0):!1}function qt(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function mt(i,s){var a=s.checked;return $({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??i._wrapperState.initialChecked})}function vt(i,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=ce(s.value!=null?s.value:a),i._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function kt(i,s){s=s.checked,s!=null&&O(i,"checked",s,!1)}function _t(i,s){kt(i,s);var a=ce(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&i.value===""||i.value!=a)&&(i.value=""+a):i.value!==""+a&&(i.value=""+a);else if(c==="submit"||c==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Ut(i,s.type,a):s.hasOwnProperty("defaultValue")&&Ut(i,s.type,ce(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Ct(i,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,a||s===i.value||(i.value=s),i.defaultValue=s}a=i.name,a!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,a!==""&&(i.name=a)}function Ut(i,s,a){(s!=="number"||qt(i.ownerDocument)!==i)&&(a==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+a&&(i.defaultValue=""+a))}var tn=Array.isArray;function Ft(i,s,a,c){if(i=i.options,s){s={};for(var p=0;p<a.length;p++)s["$"+a[p]]=!0;for(a=0;a<i.length;a++)p=s.hasOwnProperty("$"+i[a].value),i[a].selected!==p&&(i[a].selected=p),p&&c&&(i[a].defaultSelected=!0)}else{for(a=""+ce(a),s=null,p=0;p<i.length;p++){if(i[p].value===a){i[p].selected=!0,c&&(i[p].defaultSelected=!0);return}s!==null||i[p].disabled||(s=i[p])}s!==null&&(s.selected=!0)}}function Gt(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return $({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function Y(i,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(tn(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}i._wrapperState={initialValue:ce(a)}}function nn(i,s){var a=ce(s.value),c=ce(s.defaultValue);a!=null&&(a=""+a,a!==i.value&&(i.value=a),s.defaultValue==null&&i.defaultValue!==a&&(i.defaultValue=a)),c!=null&&(i.defaultValue=""+c)}function At(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function I(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?I(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Q,ae=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,p){MSApp.execUnsafeLocalFunction(function(){return i(s,a,c,p)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(Q=Q||document.createElement("div"),Q.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Q.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function pe(i,s){if(s){var a=i.firstChild;if(a&&a===i.lastChild&&a.nodeType===3){a.nodeValue=s;return}}i.textContent=s}var Ae={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pe=["Webkit","ms","Moz","O"];Object.keys(Ae).forEach(function(i){Pe.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Ae[s]=Ae[i]})});function ge(i,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Ae.hasOwnProperty(i)&&Ae[i]?(""+s).trim():s+"px"}function xe(i,s){i=i.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,p=ge(a,s[a],c);a==="float"&&(a="cssFloat"),c?i.setProperty(a,p):i[a]=p}}var Ie=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function et(i,s){if(s){if(Ie[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Ue(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var De=null;function tt(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var ot=null,ct=null,G=null;function Le(i){if(i=ca(i)){if(typeof ot!="function")throw Error(t(280));var s=i.stateNode;s&&(s=El(s),ot(i.stateNode,i.type,s))}}function _e(i){ct?G?G.push(i):G=[i]:ct=i}function Ne(){if(ct){var i=ct,s=G;if(G=ct=null,Le(i),s)for(i=0;i<s.length;i++)Le(s[i])}}function Be(i,s){return i(s)}function Se(){}var nt=!1;function Ze(i,s,a){if(nt)return i(s,a);nt=!0;try{return Be(i,s,a)}finally{nt=!1,(ct!==null||G!==null)&&(Se(),Ne())}}function Ot(i,s){var a=i.stateNode;if(a===null)return null;var c=El(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var bt=!1;if(f)try{var cn={};Object.defineProperty(cn,"passive",{get:function(){bt=!0}}),window.addEventListener("test",cn,cn),window.removeEventListener("test",cn,cn)}catch{bt=!1}function Qn(i,s,a,c,p,_,w,F,z){var he=Array.prototype.slice.call(arguments,3);try{s.apply(a,he)}catch(Ee){this.onError(Ee)}}var dr=!1,hr=null,An=!1,pr=null,js={onError:function(i){dr=!0,hr=i}};function ms(i,s,a,c,p,_,w,F,z){dr=!1,hr=null,Qn.apply(js,arguments)}function gs(i,s,a,c,p,_,w,F,z){if(ms.apply(this,arguments),dr){if(dr){var he=hr;dr=!1,hr=null}else throw Error(t(198));An||(An=!0,pr=he)}}function Rn(i){var s=i,a=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(a=s.return),i=s.return;while(i)}return s.tag===3?a:null}function mr(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Ki(i){if(Rn(i)!==i)throw Error(t(188))}function k(i){var s=i.alternate;if(!s){if(s=Rn(i),s===null)throw Error(t(188));return s!==i?null:i}for(var a=i,c=s;;){var p=a.return;if(p===null)break;var _=p.alternate;if(_===null){if(c=p.return,c!==null){a=c;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===a)return Ki(p),i;if(_===c)return Ki(p),s;_=_.sibling}throw Error(t(188))}if(a.return!==c.return)a=p,c=_;else{for(var w=!1,F=p.child;F;){if(F===a){w=!0,a=p,c=_;break}if(F===c){w=!0,c=p,a=_;break}F=F.sibling}if(!w){for(F=_.child;F;){if(F===a){w=!0,a=_,c=p;break}if(F===c){w=!0,c=_,a=p;break}F=F.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?i:s}function de(i){return i=k(i),i!==null?ve(i):null}function ve(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=ve(i);if(s!==null)return s;i=i.sibling}return null}var be=e.unstable_scheduleCallback,at=e.unstable_cancelCallback,Pt=e.unstable_shouldYield,Tt=e.unstable_requestPaint,yt=e.unstable_now,on=e.unstable_getCurrentPriorityLevel,Fn=e.unstable_ImmediatePriority,li=e.unstable_UserBlockingPriority,A=e.unstable_NormalPriority,X=e.unstable_LowPriority,fe=e.unstable_IdlePriority,ne=null,J=null;function Ve(i){if(J&&typeof J.onCommitFiberRoot=="function")try{J.onCommitFiberRoot(ne,i,void 0,(i.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:rt,ke=Math.log,Qe=Math.LN2;function rt(i){return i>>>=0,i===0?32:31-(ke(i)/Qe|0)|0}var gt=64,St=4194304;function Ke(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Dt(i,s){var a=i.pendingLanes;if(a===0)return 0;var c=0,p=i.suspendedLanes,_=i.pingedLanes,w=a&268435455;if(w!==0){var F=w&~p;F!==0?c=Ke(F):(_&=w,_!==0&&(c=Ke(_)))}else w=a&~p,w!==0?c=Ke(w):_!==0&&(c=Ke(_));if(c===0)return 0;if(s!==0&&s!==c&&(s&p)===0&&(p=c&-c,_=s&-s,p>=_||p===16&&(_&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=c;0<s;)a=31-Fe(s),p=1<<a,c|=i[a],s&=~p;return c}function fn(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kt(i,s){for(var a=i.suspendedLanes,c=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var w=31-Fe(_),F=1<<w,z=p[w];z===-1?((F&a)===0||(F&c)!==0)&&(p[w]=fn(F,s)):z<=s&&(i.expiredLanes|=F),_&=~F}}function Wt(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Sn(){var i=gt;return gt<<=1,(gt&4194240)===0&&(gt=64),i}function Xe(i){for(var s=[],a=0;31>a;a++)s.push(i);return s}function mn(i,s,a){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-Fe(s),i[s]=a}function Lt(i,s){var a=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var c=i.eventTimes;for(i=i.expirationTimes;0<a;){var p=31-Fe(a),_=1<<p;s[p]=0,c[p]=-1,i[p]=-1,a&=~_}}function On(i,s){var a=i.entangledLanes|=s;for(i=i.entanglements;a;){var c=31-Fe(a),p=1<<c;p&s|i[c]&s&&(i[c]|=s),a&=~p}}var Mt=0;function Li(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var gr,zt,rn,Ni,Yt,_i=!1,Ii=[],Ui=null,Br=null,kr=null,qo=new Map,Ko=new Map,zr=[],uy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $p(i,s){switch(i){case"focusin":case"focusout":Ui=null;break;case"dragenter":case"dragleave":Br=null;break;case"mouseover":case"mouseout":kr=null;break;case"pointerover":case"pointerout":qo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(s.pointerId)}}function $o(i,s,a,c,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:_,targetContainers:[p]},s!==null&&(s=ca(s),s!==null&&zt(s)),i):(i.eventSystemFlags|=c,s=i.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),i)}function cy(i,s,a,c,p){switch(s){case"focusin":return Ui=$o(Ui,i,s,a,c,p),!0;case"dragenter":return Br=$o(Br,i,s,a,c,p),!0;case"mouseover":return kr=$o(kr,i,s,a,c,p),!0;case"pointerover":var _=p.pointerId;return qo.set(_,$o(qo.get(_)||null,i,s,a,c,p)),!0;case"gotpointercapture":return _=p.pointerId,Ko.set(_,$o(Ko.get(_)||null,i,s,a,c,p)),!0}return!1}function Zp(i){var s=vs(i.target);if(s!==null){var a=Rn(s);if(a!==null){if(s=a.tag,s===13){if(s=mr(a),s!==null){i.blockedOn=s,Yt(i.priority,function(){rn(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){i.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}i.blockedOn=null}function ul(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var a=Ec(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(a===null){a=i.nativeEvent;var c=new a.constructor(a.type,a);De=c,a.target.dispatchEvent(c),De=null}else return s=ca(a),s!==null&&zt(s),i.blockedOn=a,!1;s.shift()}return!0}function Qp(i,s,a){ul(i)&&a.delete(s)}function fy(){_i=!1,Ui!==null&&ul(Ui)&&(Ui=null),Br!==null&&ul(Br)&&(Br=null),kr!==null&&ul(kr)&&(kr=null),qo.forEach(Qp),Ko.forEach(Qp)}function Zo(i,s){i.blockedOn===s&&(i.blockedOn=null,_i||(_i=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,fy)))}function Qo(i){function s(p){return Zo(p,i)}if(0<Ii.length){Zo(Ii[0],i);for(var a=1;a<Ii.length;a++){var c=Ii[a];c.blockedOn===i&&(c.blockedOn=null)}}for(Ui!==null&&Zo(Ui,i),Br!==null&&Zo(Br,i),kr!==null&&Zo(kr,i),qo.forEach(s),Ko.forEach(s),a=0;a<zr.length;a++)c=zr[a],c.blockedOn===i&&(c.blockedOn=null);for(;0<zr.length&&(a=zr[0],a.blockedOn===null);)Zp(a),a.blockedOn===null&&zr.shift()}var qs=C.ReactCurrentBatchConfig,cl=!0;function dy(i,s,a,c){var p=Mt,_=qs.transition;qs.transition=null;try{Mt=1,Mc(i,s,a,c)}finally{Mt=p,qs.transition=_}}function hy(i,s,a,c){var p=Mt,_=qs.transition;qs.transition=null;try{Mt=4,Mc(i,s,a,c)}finally{Mt=p,qs.transition=_}}function Mc(i,s,a,c){if(cl){var p=Ec(i,s,a,c);if(p===null)zc(i,s,c,fl,a),$p(i,c);else if(cy(p,i,s,a,c))c.stopPropagation();else if($p(i,c),s&4&&-1<uy.indexOf(i)){for(;p!==null;){var _=ca(p);if(_!==null&&gr(_),_=Ec(i,s,a,c),_===null&&zc(i,s,c,fl,a),_===p)break;p=_}p!==null&&c.stopPropagation()}else zc(i,s,c,null,a)}}var fl=null;function Ec(i,s,a,c){if(fl=null,i=tt(c),i=vs(i),i!==null)if(s=Rn(i),s===null)i=null;else if(a=s.tag,a===13){if(i=mr(s),i!==null)return i;i=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return fl=i,null}function Jp(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(on()){case Fn:return 1;case li:return 4;case A:case X:return 16;case fe:return 536870912;default:return 16}default:return 16}}var Vr=null,Tc=null,dl=null;function em(){if(dl)return dl;var i,s=Tc,a=s.length,c,p="value"in Vr?Vr.value:Vr.textContent,_=p.length;for(i=0;i<a&&s[i]===p[i];i++);var w=a-i;for(c=1;c<=w&&s[a-c]===p[_-c];c++);return dl=p.slice(i,1<c?1-c:void 0)}function hl(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function pl(){return!0}function tm(){return!1}function ui(i){function s(a,c,p,_,w){this._reactName=a,this._targetInst=p,this.type=c,this.nativeEvent=_,this.target=w,this.currentTarget=null;for(var F in i)i.hasOwnProperty(F)&&(a=i[F],this[F]=a?a(_):_[F]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?pl:tm,this.isPropagationStopped=tm,this}return $(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),s}var Ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wc=ui(Ks),Jo=$({},Ks,{view:0,detail:0}),py=ui(Jo),Ac,Rc,ea,ml=$({},Jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bc,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==ea&&(ea&&i.type==="mousemove"?(Ac=i.screenX-ea.screenX,Rc=i.screenY-ea.screenY):Rc=Ac=0,ea=i),Ac)},movementY:function(i){return"movementY"in i?i.movementY:Rc}}),nm=ui(ml),my=$({},ml,{dataTransfer:0}),gy=ui(my),vy=$({},Jo,{relatedTarget:0}),Cc=ui(vy),_y=$({},Ks,{animationName:0,elapsedTime:0,pseudoElement:0}),xy=ui(_y),yy=$({},Ks,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Sy=ui(yy),My=$({},Ks,{data:0}),im=ui(My),Ey={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ty={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ay(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=wy[i])?!!s[i]:!1}function bc(){return Ay}var Ry=$({},Jo,{key:function(i){if(i.key){var s=Ey[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=hl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Ty[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bc,charCode:function(i){return i.type==="keypress"?hl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?hl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),Cy=ui(Ry),by=$({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rm=ui(by),Py=$({},Jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bc}),Dy=ui(Py),Ly=$({},Ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ny=ui(Ly),Iy=$({},ml,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Uy=ui(Iy),Fy=[9,13,27,32],Pc=f&&"CompositionEvent"in window,ta=null;f&&"documentMode"in document&&(ta=document.documentMode);var Oy=f&&"TextEvent"in window&&!ta,sm=f&&(!Pc||ta&&8<ta&&11>=ta),om=" ",am=!1;function lm(i,s){switch(i){case"keyup":return Fy.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function um(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var $s=!1;function By(i,s){switch(i){case"compositionend":return um(s);case"keypress":return s.which!==32?null:(am=!0,om);case"textInput":return i=s.data,i===om&&am?null:i;default:return null}}function ky(i,s){if($s)return i==="compositionend"||!Pc&&lm(i,s)?(i=em(),dl=Tc=Vr=null,$s=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return sm&&s.locale!=="ko"?null:s.data;default:return null}}var zy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cm(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!zy[i.type]:s==="textarea"}function fm(i,s,a,c){_e(c),s=yl(s,"onChange"),0<s.length&&(a=new wc("onChange","change",null,a,c),i.push({event:a,listeners:s}))}var na=null,ia=null;function Vy(i){bm(i,0)}function gl(i){var s=to(i);if(ze(s))return i}function Hy(i,s){if(i==="change")return s}var dm=!1;if(f){var Dc;if(f){var Lc="oninput"in document;if(!Lc){var hm=document.createElement("div");hm.setAttribute("oninput","return;"),Lc=typeof hm.oninput=="function"}Dc=Lc}else Dc=!1;dm=Dc&&(!document.documentMode||9<document.documentMode)}function pm(){na&&(na.detachEvent("onpropertychange",mm),ia=na=null)}function mm(i){if(i.propertyName==="value"&&gl(ia)){var s=[];fm(s,ia,i,tt(i)),Ze(Vy,s)}}function Gy(i,s,a){i==="focusin"?(pm(),na=s,ia=a,na.attachEvent("onpropertychange",mm)):i==="focusout"&&pm()}function Wy(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return gl(ia)}function Xy(i,s){if(i==="click")return gl(s)}function Yy(i,s){if(i==="input"||i==="change")return gl(s)}function jy(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Fi=typeof Object.is=="function"?Object.is:jy;function ra(i,s){if(Fi(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var a=Object.keys(i),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var p=a[c];if(!d.call(s,p)||!Fi(i[p],s[p]))return!1}return!0}function gm(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function vm(i,s){var a=gm(i);i=0;for(var c;a;){if(a.nodeType===3){if(c=i+a.textContent.length,i<=s&&c>=s)return{node:a,offset:s-i};i=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=gm(a)}}function _m(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?_m(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function xm(){for(var i=window,s=qt();s instanceof i.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)i=s.contentWindow;else break;s=qt(i.document)}return s}function Nc(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function qy(i){var s=xm(),a=i.focusedElem,c=i.selectionRange;if(s!==a&&a&&a.ownerDocument&&_m(a.ownerDocument.documentElement,a)){if(c!==null&&Nc(a)){if(s=c.start,i=c.end,i===void 0&&(i=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(i,a.value.length);else if(i=(s=a.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var p=a.textContent.length,_=Math.min(c.start,p);c=c.end===void 0?_:Math.min(c.end,p),!i.extend&&_>c&&(p=c,c=_,_=p),p=vm(a,_);var w=vm(a,c);p&&w&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==w.node||i.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),i.removeAllRanges(),_>c?(i.addRange(s),i.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),i.addRange(s)))}}for(s=[],i=a;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)i=s[a],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var Ky=f&&"documentMode"in document&&11>=document.documentMode,Zs=null,Ic=null,sa=null,Uc=!1;function ym(i,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Uc||Zs==null||Zs!==qt(c)||(c=Zs,"selectionStart"in c&&Nc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),sa&&ra(sa,c)||(sa=c,c=yl(Ic,"onSelect"),0<c.length&&(s=new wc("onSelect","select",null,s,a),i.push({event:s,listeners:c}),s.target=Zs)))}function vl(i,s){var a={};return a[i.toLowerCase()]=s.toLowerCase(),a["Webkit"+i]="webkit"+s,a["Moz"+i]="moz"+s,a}var Qs={animationend:vl("Animation","AnimationEnd"),animationiteration:vl("Animation","AnimationIteration"),animationstart:vl("Animation","AnimationStart"),transitionend:vl("Transition","TransitionEnd")},Fc={},Sm={};f&&(Sm=document.createElement("div").style,"AnimationEvent"in window||(delete Qs.animationend.animation,delete Qs.animationiteration.animation,delete Qs.animationstart.animation),"TransitionEvent"in window||delete Qs.transitionend.transition);function _l(i){if(Fc[i])return Fc[i];if(!Qs[i])return i;var s=Qs[i],a;for(a in s)if(s.hasOwnProperty(a)&&a in Sm)return Fc[i]=s[a];return i}var Mm=_l("animationend"),Em=_l("animationiteration"),Tm=_l("animationstart"),wm=_l("transitionend"),Am=new Map,Rm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hr(i,s){Am.set(i,s),l(s,[i])}for(var Oc=0;Oc<Rm.length;Oc++){var Bc=Rm[Oc],$y=Bc.toLowerCase(),Zy=Bc[0].toUpperCase()+Bc.slice(1);Hr($y,"on"+Zy)}Hr(Mm,"onAnimationEnd"),Hr(Em,"onAnimationIteration"),Hr(Tm,"onAnimationStart"),Hr("dblclick","onDoubleClick"),Hr("focusin","onFocus"),Hr("focusout","onBlur"),Hr(wm,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qy=new Set("cancel close invalid load scroll toggle".split(" ").concat(oa));function Cm(i,s,a){var c=i.type||"unknown-event";i.currentTarget=a,gs(c,s,void 0,i),i.currentTarget=null}function bm(i,s){s=(s&4)!==0;for(var a=0;a<i.length;a++){var c=i[a],p=c.event;c=c.listeners;e:{var _=void 0;if(s)for(var w=c.length-1;0<=w;w--){var F=c[w],z=F.instance,he=F.currentTarget;if(F=F.listener,z!==_&&p.isPropagationStopped())break e;Cm(p,F,he),_=z}else for(w=0;w<c.length;w++){if(F=c[w],z=F.instance,he=F.currentTarget,F=F.listener,z!==_&&p.isPropagationStopped())break e;Cm(p,F,he),_=z}}}if(An)throw i=pr,An=!1,pr=null,i}function Zt(i,s){var a=s[Yc];a===void 0&&(a=s[Yc]=new Set);var c=i+"__bubble";a.has(c)||(Pm(s,i,2,!1),a.add(c))}function kc(i,s,a){var c=0;s&&(c|=4),Pm(a,i,c,s)}var xl="_reactListening"+Math.random().toString(36).slice(2);function aa(i){if(!i[xl]){i[xl]=!0,r.forEach(function(a){a!=="selectionchange"&&(Qy.has(a)||kc(a,!1,i),kc(a,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[xl]||(s[xl]=!0,kc("selectionchange",!1,s))}}function Pm(i,s,a,c){switch(Jp(s)){case 1:var p=dy;break;case 4:p=hy;break;default:p=Mc}a=p.bind(null,s,a,i),p=void 0,!bt||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),c?p!==void 0?i.addEventListener(s,a,{capture:!0,passive:p}):i.addEventListener(s,a,!0):p!==void 0?i.addEventListener(s,a,{passive:p}):i.addEventListener(s,a,!1)}function zc(i,s,a,c,p){var _=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var F=c.stateNode.containerInfo;if(F===p||F.nodeType===8&&F.parentNode===p)break;if(w===4)for(w=c.return;w!==null;){var z=w.tag;if((z===3||z===4)&&(z=w.stateNode.containerInfo,z===p||z.nodeType===8&&z.parentNode===p))return;w=w.return}for(;F!==null;){if(w=vs(F),w===null)return;if(z=w.tag,z===5||z===6){c=_=w;continue e}F=F.parentNode}}c=c.return}Ze(function(){var he=_,Ee=tt(a),Te=[];e:{var Me=Am.get(i);if(Me!==void 0){var Ye=wc,Je=i;switch(i){case"keypress":if(hl(a)===0)break e;case"keydown":case"keyup":Ye=Cy;break;case"focusin":Je="focus",Ye=Cc;break;case"focusout":Je="blur",Ye=Cc;break;case"beforeblur":case"afterblur":Ye=Cc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ye=nm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ye=gy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ye=Dy;break;case Mm:case Em:case Tm:Ye=xy;break;case wm:Ye=Ny;break;case"scroll":Ye=py;break;case"wheel":Ye=Uy;break;case"copy":case"cut":case"paste":Ye=Sy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ye=rm}var it=(s&4)!==0,gn=!it&&i==="scroll",ie=it?Me!==null?Me+"Capture":null:Me;it=[];for(var q=he,le;q!==null;){le=q;var Re=le.stateNode;if(le.tag===5&&Re!==null&&(le=Re,ie!==null&&(Re=Ot(q,ie),Re!=null&&it.push(la(q,Re,le)))),gn)break;q=q.return}0<it.length&&(Me=new Ye(Me,Je,null,a,Ee),Te.push({event:Me,listeners:it}))}}if((s&7)===0){e:{if(Me=i==="mouseover"||i==="pointerover",Ye=i==="mouseout"||i==="pointerout",Me&&a!==De&&(Je=a.relatedTarget||a.fromElement)&&(vs(Je)||Je[vr]))break e;if((Ye||Me)&&(Me=Ee.window===Ee?Ee:(Me=Ee.ownerDocument)?Me.defaultView||Me.parentWindow:window,Ye?(Je=a.relatedTarget||a.toElement,Ye=he,Je=Je?vs(Je):null,Je!==null&&(gn=Rn(Je),Je!==gn||Je.tag!==5&&Je.tag!==6)&&(Je=null)):(Ye=null,Je=he),Ye!==Je)){if(it=nm,Re="onMouseLeave",ie="onMouseEnter",q="mouse",(i==="pointerout"||i==="pointerover")&&(it=rm,Re="onPointerLeave",ie="onPointerEnter",q="pointer"),gn=Ye==null?Me:to(Ye),le=Je==null?Me:to(Je),Me=new it(Re,q+"leave",Ye,a,Ee),Me.target=gn,Me.relatedTarget=le,Re=null,vs(Ee)===he&&(it=new it(ie,q+"enter",Je,a,Ee),it.target=le,it.relatedTarget=gn,Re=it),gn=Re,Ye&&Je)t:{for(it=Ye,ie=Je,q=0,le=it;le;le=Js(le))q++;for(le=0,Re=ie;Re;Re=Js(Re))le++;for(;0<q-le;)it=Js(it),q--;for(;0<le-q;)ie=Js(ie),le--;for(;q--;){if(it===ie||ie!==null&&it===ie.alternate)break t;it=Js(it),ie=Js(ie)}it=null}else it=null;Ye!==null&&Dm(Te,Me,Ye,it,!1),Je!==null&&gn!==null&&Dm(Te,gn,Je,it,!0)}}e:{if(Me=he?to(he):window,Ye=Me.nodeName&&Me.nodeName.toLowerCase(),Ye==="select"||Ye==="input"&&Me.type==="file")var st=Hy;else if(cm(Me))if(dm)st=Yy;else{st=Wy;var lt=Gy}else(Ye=Me.nodeName)&&Ye.toLowerCase()==="input"&&(Me.type==="checkbox"||Me.type==="radio")&&(st=Xy);if(st&&(st=st(i,he))){fm(Te,st,a,Ee);break e}lt&&lt(i,Me,he),i==="focusout"&&(lt=Me._wrapperState)&&lt.controlled&&Me.type==="number"&&Ut(Me,"number",Me.value)}switch(lt=he?to(he):window,i){case"focusin":(cm(lt)||lt.contentEditable==="true")&&(Zs=lt,Ic=he,sa=null);break;case"focusout":sa=Ic=Zs=null;break;case"mousedown":Uc=!0;break;case"contextmenu":case"mouseup":case"dragend":Uc=!1,ym(Te,a,Ee);break;case"selectionchange":if(Ky)break;case"keydown":case"keyup":ym(Te,a,Ee)}var ut;if(Pc)e:{switch(i){case"compositionstart":var ht="onCompositionStart";break e;case"compositionend":ht="onCompositionEnd";break e;case"compositionupdate":ht="onCompositionUpdate";break e}ht=void 0}else $s?lm(i,a)&&(ht="onCompositionEnd"):i==="keydown"&&a.keyCode===229&&(ht="onCompositionStart");ht&&(sm&&a.locale!=="ko"&&($s||ht!=="onCompositionStart"?ht==="onCompositionEnd"&&$s&&(ut=em()):(Vr=Ee,Tc="value"in Vr?Vr.value:Vr.textContent,$s=!0)),lt=yl(he,ht),0<lt.length&&(ht=new im(ht,i,null,a,Ee),Te.push({event:ht,listeners:lt}),ut?ht.data=ut:(ut=um(a),ut!==null&&(ht.data=ut)))),(ut=Oy?By(i,a):ky(i,a))&&(he=yl(he,"onBeforeInput"),0<he.length&&(Ee=new im("onBeforeInput","beforeinput",null,a,Ee),Te.push({event:Ee,listeners:he}),Ee.data=ut))}bm(Te,s)})}function la(i,s,a){return{instance:i,listener:s,currentTarget:a}}function yl(i,s){for(var a=s+"Capture",c=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=Ot(i,a),_!=null&&c.unshift(la(i,_,p)),_=Ot(i,s),_!=null&&c.push(la(i,_,p))),i=i.return}return c}function Js(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Dm(i,s,a,c,p){for(var _=s._reactName,w=[];a!==null&&a!==c;){var F=a,z=F.alternate,he=F.stateNode;if(z!==null&&z===c)break;F.tag===5&&he!==null&&(F=he,p?(z=Ot(a,_),z!=null&&w.unshift(la(a,z,F))):p||(z=Ot(a,_),z!=null&&w.push(la(a,z,F)))),a=a.return}w.length!==0&&i.push({event:s,listeners:w})}var Jy=/\r\n?/g,eS=/\u0000|\uFFFD/g;function Lm(i){return(typeof i=="string"?i:""+i).replace(Jy,`
`).replace(eS,"")}function Sl(i,s,a){if(s=Lm(s),Lm(i)!==s&&a)throw Error(t(425))}function Ml(){}var Vc=null,Hc=null;function Gc(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Wc=typeof setTimeout=="function"?setTimeout:void 0,tS=typeof clearTimeout=="function"?clearTimeout:void 0,Nm=typeof Promise=="function"?Promise:void 0,nS=typeof queueMicrotask=="function"?queueMicrotask:typeof Nm<"u"?function(i){return Nm.resolve(null).then(i).catch(iS)}:Wc;function iS(i){setTimeout(function(){throw i})}function Xc(i,s){var a=s,c=0;do{var p=a.nextSibling;if(i.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(c===0){i.removeChild(p),Qo(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=p}while(a);Qo(s)}function Gr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function Im(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return i;s--}else a==="/$"&&s++}i=i.previousSibling}return null}var eo=Math.random().toString(36).slice(2),$i="__reactFiber$"+eo,ua="__reactProps$"+eo,vr="__reactContainer$"+eo,Yc="__reactEvents$"+eo,rS="__reactListeners$"+eo,sS="__reactHandles$"+eo;function vs(i){var s=i[$i];if(s)return s;for(var a=i.parentNode;a;){if(s=a[vr]||a[$i]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(i=Im(i);i!==null;){if(a=i[$i])return a;i=Im(i)}return s}i=a,a=i.parentNode}return null}function ca(i){return i=i[$i]||i[vr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function to(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function El(i){return i[ua]||null}var jc=[],no=-1;function Wr(i){return{current:i}}function Qt(i){0>no||(i.current=jc[no],jc[no]=null,no--)}function $t(i,s){no++,jc[no]=i.current,i.current=s}var Xr={},Bn=Wr(Xr),Jn=Wr(!1),_s=Xr;function io(i,s){var a=i.type.contextTypes;if(!a)return Xr;var c=i.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in a)p[_]=s[_];return c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=p),p}function ei(i){return i=i.childContextTypes,i!=null}function Tl(){Qt(Jn),Qt(Bn)}function Um(i,s,a){if(Bn.current!==Xr)throw Error(t(168));$t(Bn,s),$t(Jn,a)}function Fm(i,s,a){var c=i.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var p in c)if(!(p in s))throw Error(t(108,oe(i)||"Unknown",p));return $({},a,c)}function wl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Xr,_s=Bn.current,$t(Bn,i),$t(Jn,Jn.current),!0}function Om(i,s,a){var c=i.stateNode;if(!c)throw Error(t(169));a?(i=Fm(i,s,_s),c.__reactInternalMemoizedMergedChildContext=i,Qt(Jn),Qt(Bn),$t(Bn,i)):Qt(Jn),$t(Jn,a)}var _r=null,Al=!1,qc=!1;function Bm(i){_r===null?_r=[i]:_r.push(i)}function oS(i){Al=!0,Bm(i)}function Yr(){if(!qc&&_r!==null){qc=!0;var i=0,s=Mt;try{var a=_r;for(Mt=1;i<a.length;i++){var c=a[i];do c=c(!0);while(c!==null)}_r=null,Al=!1}catch(p){throw _r!==null&&(_r=_r.slice(i+1)),be(Fn,Yr),p}finally{Mt=s,qc=!1}}return null}var ro=[],so=0,Rl=null,Cl=0,xi=[],yi=0,xs=null,xr=1,yr="";function ys(i,s){ro[so++]=Cl,ro[so++]=Rl,Rl=i,Cl=s}function km(i,s,a){xi[yi++]=xr,xi[yi++]=yr,xi[yi++]=xs,xs=i;var c=xr;i=yr;var p=32-Fe(c)-1;c&=~(1<<p),a+=1;var _=32-Fe(s)+p;if(30<_){var w=p-p%5;_=(c&(1<<w)-1).toString(32),c>>=w,p-=w,xr=1<<32-Fe(s)+p|a<<p|c,yr=_+i}else xr=1<<_|a<<p|c,yr=i}function Kc(i){i.return!==null&&(ys(i,1),km(i,1,0))}function $c(i){for(;i===Rl;)Rl=ro[--so],ro[so]=null,Cl=ro[--so],ro[so]=null;for(;i===xs;)xs=xi[--yi],xi[yi]=null,yr=xi[--yi],xi[yi]=null,xr=xi[--yi],xi[yi]=null}var ci=null,fi=null,sn=!1,Oi=null;function zm(i,s){var a=Ti(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=i,s=i.deletions,s===null?(i.deletions=[a],i.flags|=16):s.push(a)}function Vm(i,s){switch(i.tag){case 5:var a=i.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,ci=i,fi=Gr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,ci=i,fi=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=xs!==null?{id:xr,overflow:yr}:null,i.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Ti(18,null,null,0),a.stateNode=s,a.return=i,i.child=a,ci=i,fi=null,!0):!1;default:return!1}}function Zc(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Qc(i){if(sn){var s=fi;if(s){var a=s;if(!Vm(i,s)){if(Zc(i))throw Error(t(418));s=Gr(a.nextSibling);var c=ci;s&&Vm(i,s)?zm(c,a):(i.flags=i.flags&-4097|2,sn=!1,ci=i)}}else{if(Zc(i))throw Error(t(418));i.flags=i.flags&-4097|2,sn=!1,ci=i}}}function Hm(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;ci=i}function bl(i){if(i!==ci)return!1;if(!sn)return Hm(i),sn=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Gc(i.type,i.memoizedProps)),s&&(s=fi)){if(Zc(i))throw Gm(),Error(t(418));for(;s;)zm(i,s),s=Gr(s.nextSibling)}if(Hm(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="/$"){if(s===0){fi=Gr(i.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}i=i.nextSibling}fi=null}}else fi=ci?Gr(i.stateNode.nextSibling):null;return!0}function Gm(){for(var i=fi;i;)i=Gr(i.nextSibling)}function oo(){fi=ci=null,sn=!1}function Jc(i){Oi===null?Oi=[i]:Oi.push(i)}var aS=C.ReactCurrentBatchConfig;function fa(i,s,a){if(i=a.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,i));var p=c,_=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(w){var F=p.refs;w===null?delete F[_]:F[_]=w},s._stringRef=_,s)}if(typeof i!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,i))}return i}function Pl(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Wm(i){var s=i._init;return s(i._payload)}function Xm(i){function s(ie,q){if(i){var le=ie.deletions;le===null?(ie.deletions=[q],ie.flags|=16):le.push(q)}}function a(ie,q){if(!i)return null;for(;q!==null;)s(ie,q),q=q.sibling;return null}function c(ie,q){for(ie=new Map;q!==null;)q.key!==null?ie.set(q.key,q):ie.set(q.index,q),q=q.sibling;return ie}function p(ie,q){return ie=es(ie,q),ie.index=0,ie.sibling=null,ie}function _(ie,q,le){return ie.index=le,i?(le=ie.alternate,le!==null?(le=le.index,le<q?(ie.flags|=2,q):le):(ie.flags|=2,q)):(ie.flags|=1048576,q)}function w(ie){return i&&ie.alternate===null&&(ie.flags|=2),ie}function F(ie,q,le,Re){return q===null||q.tag!==6?(q=Xf(le,ie.mode,Re),q.return=ie,q):(q=p(q,le),q.return=ie,q)}function z(ie,q,le,Re){var st=le.type;return st===U?Ee(ie,q,le.props.children,Re,le.key):q!==null&&(q.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===me&&Wm(st)===q.type)?(Re=p(q,le.props),Re.ref=fa(ie,q,le),Re.return=ie,Re):(Re=eu(le.type,le.key,le.props,null,ie.mode,Re),Re.ref=fa(ie,q,le),Re.return=ie,Re)}function he(ie,q,le,Re){return q===null||q.tag!==4||q.stateNode.containerInfo!==le.containerInfo||q.stateNode.implementation!==le.implementation?(q=Yf(le,ie.mode,Re),q.return=ie,q):(q=p(q,le.children||[]),q.return=ie,q)}function Ee(ie,q,le,Re,st){return q===null||q.tag!==7?(q=Cs(le,ie.mode,Re,st),q.return=ie,q):(q=p(q,le),q.return=ie,q)}function Te(ie,q,le){if(typeof q=="string"&&q!==""||typeof q=="number")return q=Xf(""+q,ie.mode,le),q.return=ie,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case b:return le=eu(q.type,q.key,q.props,null,ie.mode,le),le.ref=fa(ie,null,q),le.return=ie,le;case D:return q=Yf(q,ie.mode,le),q.return=ie,q;case me:var Re=q._init;return Te(ie,Re(q._payload),le)}if(tn(q)||W(q))return q=Cs(q,ie.mode,le,null),q.return=ie,q;Pl(ie,q)}return null}function Me(ie,q,le,Re){var st=q!==null?q.key:null;if(typeof le=="string"&&le!==""||typeof le=="number")return st!==null?null:F(ie,q,""+le,Re);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case b:return le.key===st?z(ie,q,le,Re):null;case D:return le.key===st?he(ie,q,le,Re):null;case me:return st=le._init,Me(ie,q,st(le._payload),Re)}if(tn(le)||W(le))return st!==null?null:Ee(ie,q,le,Re,null);Pl(ie,le)}return null}function Ye(ie,q,le,Re,st){if(typeof Re=="string"&&Re!==""||typeof Re=="number")return ie=ie.get(le)||null,F(q,ie,""+Re,st);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case b:return ie=ie.get(Re.key===null?le:Re.key)||null,z(q,ie,Re,st);case D:return ie=ie.get(Re.key===null?le:Re.key)||null,he(q,ie,Re,st);case me:var lt=Re._init;return Ye(ie,q,le,lt(Re._payload),st)}if(tn(Re)||W(Re))return ie=ie.get(le)||null,Ee(q,ie,Re,st,null);Pl(q,Re)}return null}function Je(ie,q,le,Re){for(var st=null,lt=null,ut=q,ht=q=0,Pn=null;ut!==null&&ht<le.length;ht++){ut.index>ht?(Pn=ut,ut=null):Pn=ut.sibling;var Vt=Me(ie,ut,le[ht],Re);if(Vt===null){ut===null&&(ut=Pn);break}i&&ut&&Vt.alternate===null&&s(ie,ut),q=_(Vt,q,ht),lt===null?st=Vt:lt.sibling=Vt,lt=Vt,ut=Pn}if(ht===le.length)return a(ie,ut),sn&&ys(ie,ht),st;if(ut===null){for(;ht<le.length;ht++)ut=Te(ie,le[ht],Re),ut!==null&&(q=_(ut,q,ht),lt===null?st=ut:lt.sibling=ut,lt=ut);return sn&&ys(ie,ht),st}for(ut=c(ie,ut);ht<le.length;ht++)Pn=Ye(ut,ie,ht,le[ht],Re),Pn!==null&&(i&&Pn.alternate!==null&&ut.delete(Pn.key===null?ht:Pn.key),q=_(Pn,q,ht),lt===null?st=Pn:lt.sibling=Pn,lt=Pn);return i&&ut.forEach(function(ts){return s(ie,ts)}),sn&&ys(ie,ht),st}function it(ie,q,le,Re){var st=W(le);if(typeof st!="function")throw Error(t(150));if(le=st.call(le),le==null)throw Error(t(151));for(var lt=st=null,ut=q,ht=q=0,Pn=null,Vt=le.next();ut!==null&&!Vt.done;ht++,Vt=le.next()){ut.index>ht?(Pn=ut,ut=null):Pn=ut.sibling;var ts=Me(ie,ut,Vt.value,Re);if(ts===null){ut===null&&(ut=Pn);break}i&&ut&&ts.alternate===null&&s(ie,ut),q=_(ts,q,ht),lt===null?st=ts:lt.sibling=ts,lt=ts,ut=Pn}if(Vt.done)return a(ie,ut),sn&&ys(ie,ht),st;if(ut===null){for(;!Vt.done;ht++,Vt=le.next())Vt=Te(ie,Vt.value,Re),Vt!==null&&(q=_(Vt,q,ht),lt===null?st=Vt:lt.sibling=Vt,lt=Vt);return sn&&ys(ie,ht),st}for(ut=c(ie,ut);!Vt.done;ht++,Vt=le.next())Vt=Ye(ut,ie,ht,Vt.value,Re),Vt!==null&&(i&&Vt.alternate!==null&&ut.delete(Vt.key===null?ht:Vt.key),q=_(Vt,q,ht),lt===null?st=Vt:lt.sibling=Vt,lt=Vt);return i&&ut.forEach(function(zS){return s(ie,zS)}),sn&&ys(ie,ht),st}function gn(ie,q,le,Re){if(typeof le=="object"&&le!==null&&le.type===U&&le.key===null&&(le=le.props.children),typeof le=="object"&&le!==null){switch(le.$$typeof){case b:e:{for(var st=le.key,lt=q;lt!==null;){if(lt.key===st){if(st=le.type,st===U){if(lt.tag===7){a(ie,lt.sibling),q=p(lt,le.props.children),q.return=ie,ie=q;break e}}else if(lt.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===me&&Wm(st)===lt.type){a(ie,lt.sibling),q=p(lt,le.props),q.ref=fa(ie,lt,le),q.return=ie,ie=q;break e}a(ie,lt);break}else s(ie,lt);lt=lt.sibling}le.type===U?(q=Cs(le.props.children,ie.mode,Re,le.key),q.return=ie,ie=q):(Re=eu(le.type,le.key,le.props,null,ie.mode,Re),Re.ref=fa(ie,q,le),Re.return=ie,ie=Re)}return w(ie);case D:e:{for(lt=le.key;q!==null;){if(q.key===lt)if(q.tag===4&&q.stateNode.containerInfo===le.containerInfo&&q.stateNode.implementation===le.implementation){a(ie,q.sibling),q=p(q,le.children||[]),q.return=ie,ie=q;break e}else{a(ie,q);break}else s(ie,q);q=q.sibling}q=Yf(le,ie.mode,Re),q.return=ie,ie=q}return w(ie);case me:return lt=le._init,gn(ie,q,lt(le._payload),Re)}if(tn(le))return Je(ie,q,le,Re);if(W(le))return it(ie,q,le,Re);Pl(ie,le)}return typeof le=="string"&&le!==""||typeof le=="number"?(le=""+le,q!==null&&q.tag===6?(a(ie,q.sibling),q=p(q,le),q.return=ie,ie=q):(a(ie,q),q=Xf(le,ie.mode,Re),q.return=ie,ie=q),w(ie)):a(ie,q)}return gn}var ao=Xm(!0),Ym=Xm(!1),Dl=Wr(null),Ll=null,lo=null,ef=null;function tf(){ef=lo=Ll=null}function nf(i){var s=Dl.current;Qt(Dl),i._currentValue=s}function rf(i,s,a){for(;i!==null;){var c=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),i===a)break;i=i.return}}function uo(i,s){Ll=i,ef=lo=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(ti=!0),i.firstContext=null)}function Si(i){var s=i._currentValue;if(ef!==i)if(i={context:i,memoizedValue:s,next:null},lo===null){if(Ll===null)throw Error(t(308));lo=i,Ll.dependencies={lanes:0,firstContext:i}}else lo=lo.next=i;return s}var Ss=null;function sf(i){Ss===null?Ss=[i]:Ss.push(i)}function jm(i,s,a,c){var p=s.interleaved;return p===null?(a.next=a,sf(s)):(a.next=p.next,p.next=a),s.interleaved=a,Sr(i,c)}function Sr(i,s){i.lanes|=s;var a=i.alternate;for(a!==null&&(a.lanes|=s),a=i,i=i.return;i!==null;)i.childLanes|=s,a=i.alternate,a!==null&&(a.childLanes|=s),a=i,i=i.return;return a.tag===3?a.stateNode:null}var jr=!1;function of(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qm(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Mr(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function qr(i,s,a){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(Bt&2)!==0){var p=c.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),c.pending=s,Sr(i,a)}return p=c.interleaved,p===null?(s.next=s,sf(c)):(s.next=p.next,p.next=s),c.interleaved=s,Sr(i,a)}function Nl(i,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=i.pendingLanes,a|=c,s.lanes=a,On(i,a)}}function Km(i,s){var a=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var p=null,_=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};_===null?p=_=w:_=_.next=w,a=a.next}while(a!==null);_===null?p=_=s:_=_.next=s}else p=_=s;a={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:c.shared,effects:c.effects},i.updateQueue=a;return}i=a.lastBaseUpdate,i===null?a.firstBaseUpdate=s:i.next=s,a.lastBaseUpdate=s}function Il(i,s,a,c){var p=i.updateQueue;jr=!1;var _=p.firstBaseUpdate,w=p.lastBaseUpdate,F=p.shared.pending;if(F!==null){p.shared.pending=null;var z=F,he=z.next;z.next=null,w===null?_=he:w.next=he,w=z;var Ee=i.alternate;Ee!==null&&(Ee=Ee.updateQueue,F=Ee.lastBaseUpdate,F!==w&&(F===null?Ee.firstBaseUpdate=he:F.next=he,Ee.lastBaseUpdate=z))}if(_!==null){var Te=p.baseState;w=0,Ee=he=z=null,F=_;do{var Me=F.lane,Ye=F.eventTime;if((c&Me)===Me){Ee!==null&&(Ee=Ee.next={eventTime:Ye,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var Je=i,it=F;switch(Me=s,Ye=a,it.tag){case 1:if(Je=it.payload,typeof Je=="function"){Te=Je.call(Ye,Te,Me);break e}Te=Je;break e;case 3:Je.flags=Je.flags&-65537|128;case 0:if(Je=it.payload,Me=typeof Je=="function"?Je.call(Ye,Te,Me):Je,Me==null)break e;Te=$({},Te,Me);break e;case 2:jr=!0}}F.callback!==null&&F.lane!==0&&(i.flags|=64,Me=p.effects,Me===null?p.effects=[F]:Me.push(F))}else Ye={eventTime:Ye,lane:Me,tag:F.tag,payload:F.payload,callback:F.callback,next:null},Ee===null?(he=Ee=Ye,z=Te):Ee=Ee.next=Ye,w|=Me;if(F=F.next,F===null){if(F=p.shared.pending,F===null)break;Me=F,F=Me.next,Me.next=null,p.lastBaseUpdate=Me,p.shared.pending=null}}while(!0);if(Ee===null&&(z=Te),p.baseState=z,p.firstBaseUpdate=he,p.lastBaseUpdate=Ee,s=p.shared.interleaved,s!==null){p=s;do w|=p.lane,p=p.next;while(p!==s)}else _===null&&(p.shared.lanes=0);Ts|=w,i.lanes=w,i.memoizedState=Te}}function $m(i,s,a){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var c=i[s],p=c.callback;if(p!==null){if(c.callback=null,c=a,typeof p!="function")throw Error(t(191,p));p.call(c)}}}var da={},Zi=Wr(da),ha=Wr(da),pa=Wr(da);function Ms(i){if(i===da)throw Error(t(174));return i}function af(i,s){switch($t(pa,s),$t(ha,i),$t(Zi,da),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:E(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=E(s,i)}Qt(Zi),$t(Zi,s)}function co(){Qt(Zi),Qt(ha),Qt(pa)}function Zm(i){Ms(pa.current);var s=Ms(Zi.current),a=E(s,i.type);s!==a&&($t(ha,i),$t(Zi,a))}function lf(i){ha.current===i&&(Qt(Zi),Qt(ha))}var an=Wr(0);function Ul(i){for(var s=i;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var uf=[];function cf(){for(var i=0;i<uf.length;i++)uf[i]._workInProgressVersionPrimary=null;uf.length=0}var Fl=C.ReactCurrentDispatcher,ff=C.ReactCurrentBatchConfig,Es=0,ln=null,Mn=null,Cn=null,Ol=!1,ma=!1,ga=0,lS=0;function kn(){throw Error(t(321))}function df(i,s){if(s===null)return!1;for(var a=0;a<s.length&&a<i.length;a++)if(!Fi(i[a],s[a]))return!1;return!0}function hf(i,s,a,c,p,_){if(Es=_,ln=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Fl.current=i===null||i.memoizedState===null?dS:hS,i=a(c,p),ma){_=0;do{if(ma=!1,ga=0,25<=_)throw Error(t(301));_+=1,Cn=Mn=null,s.updateQueue=null,Fl.current=pS,i=a(c,p)}while(ma)}if(Fl.current=zl,s=Mn!==null&&Mn.next!==null,Es=0,Cn=Mn=ln=null,Ol=!1,s)throw Error(t(300));return i}function pf(){var i=ga!==0;return ga=0,i}function Qi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cn===null?ln.memoizedState=Cn=i:Cn=Cn.next=i,Cn}function Mi(){if(Mn===null){var i=ln.alternate;i=i!==null?i.memoizedState:null}else i=Mn.next;var s=Cn===null?ln.memoizedState:Cn.next;if(s!==null)Cn=s,Mn=i;else{if(i===null)throw Error(t(310));Mn=i,i={memoizedState:Mn.memoizedState,baseState:Mn.baseState,baseQueue:Mn.baseQueue,queue:Mn.queue,next:null},Cn===null?ln.memoizedState=Cn=i:Cn=Cn.next=i}return Cn}function va(i,s){return typeof s=="function"?s(i):s}function mf(i){var s=Mi(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var c=Mn,p=c.baseQueue,_=a.pending;if(_!==null){if(p!==null){var w=p.next;p.next=_.next,_.next=w}c.baseQueue=p=_,a.pending=null}if(p!==null){_=p.next,c=c.baseState;var F=w=null,z=null,he=_;do{var Ee=he.lane;if((Es&Ee)===Ee)z!==null&&(z=z.next={lane:0,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null}),c=he.hasEagerState?he.eagerState:i(c,he.action);else{var Te={lane:Ee,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null};z===null?(F=z=Te,w=c):z=z.next=Te,ln.lanes|=Ee,Ts|=Ee}he=he.next}while(he!==null&&he!==_);z===null?w=c:z.next=F,Fi(c,s.memoizedState)||(ti=!0),s.memoizedState=c,s.baseState=w,s.baseQueue=z,a.lastRenderedState=c}if(i=a.interleaved,i!==null){p=i;do _=p.lane,ln.lanes|=_,Ts|=_,p=p.next;while(p!==i)}else p===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function gf(i){var s=Mi(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var c=a.dispatch,p=a.pending,_=s.memoizedState;if(p!==null){a.pending=null;var w=p=p.next;do _=i(_,w.action),w=w.next;while(w!==p);Fi(_,s.memoizedState)||(ti=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),a.lastRenderedState=_}return[_,c]}function Qm(){}function Jm(i,s){var a=ln,c=Mi(),p=s(),_=!Fi(c.memoizedState,p);if(_&&(c.memoizedState=p,ti=!0),c=c.queue,vf(n0.bind(null,a,c,i),[i]),c.getSnapshot!==s||_||Cn!==null&&Cn.memoizedState.tag&1){if(a.flags|=2048,_a(9,t0.bind(null,a,c,p,s),void 0,null),bn===null)throw Error(t(349));(Es&30)!==0||e0(a,s,p)}return p}function e0(i,s,a){i.flags|=16384,i={getSnapshot:s,value:a},s=ln.updateQueue,s===null?(s={lastEffect:null,stores:null},ln.updateQueue=s,s.stores=[i]):(a=s.stores,a===null?s.stores=[i]:a.push(i))}function t0(i,s,a,c){s.value=a,s.getSnapshot=c,i0(s)&&r0(i)}function n0(i,s,a){return a(function(){i0(s)&&r0(i)})}function i0(i){var s=i.getSnapshot;i=i.value;try{var a=s();return!Fi(i,a)}catch{return!0}}function r0(i){var s=Sr(i,1);s!==null&&Vi(s,i,1,-1)}function s0(i){var s=Qi();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:i},s.queue=i,i=i.dispatch=fS.bind(null,ln,i),[s.memoizedState,i]}function _a(i,s,a,c){return i={tag:i,create:s,destroy:a,deps:c,next:null},s=ln.updateQueue,s===null?(s={lastEffect:null,stores:null},ln.updateQueue=s,s.lastEffect=i.next=i):(a=s.lastEffect,a===null?s.lastEffect=i.next=i:(c=a.next,a.next=i,i.next=c,s.lastEffect=i)),i}function o0(){return Mi().memoizedState}function Bl(i,s,a,c){var p=Qi();ln.flags|=i,p.memoizedState=_a(1|s,a,void 0,c===void 0?null:c)}function kl(i,s,a,c){var p=Mi();c=c===void 0?null:c;var _=void 0;if(Mn!==null){var w=Mn.memoizedState;if(_=w.destroy,c!==null&&df(c,w.deps)){p.memoizedState=_a(s,a,_,c);return}}ln.flags|=i,p.memoizedState=_a(1|s,a,_,c)}function a0(i,s){return Bl(8390656,8,i,s)}function vf(i,s){return kl(2048,8,i,s)}function l0(i,s){return kl(4,2,i,s)}function u0(i,s){return kl(4,4,i,s)}function c0(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function f0(i,s,a){return a=a!=null?a.concat([i]):null,kl(4,4,c0.bind(null,s,i),a)}function _f(){}function d0(i,s){var a=Mi();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&df(s,c[1])?c[0]:(a.memoizedState=[i,s],i)}function h0(i,s){var a=Mi();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&df(s,c[1])?c[0]:(i=i(),a.memoizedState=[i,s],i)}function p0(i,s,a){return(Es&21)===0?(i.baseState&&(i.baseState=!1,ti=!0),i.memoizedState=a):(Fi(a,s)||(a=Sn(),ln.lanes|=a,Ts|=a,i.baseState=!0),s)}function uS(i,s){var a=Mt;Mt=a!==0&&4>a?a:4,i(!0);var c=ff.transition;ff.transition={};try{i(!1),s()}finally{Mt=a,ff.transition=c}}function m0(){return Mi().memoizedState}function cS(i,s,a){var c=Qr(i);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},g0(i))v0(s,a);else if(a=jm(i,s,a,c),a!==null){var p=qn();Vi(a,i,c,p),_0(a,s,c)}}function fS(i,s,a){var c=Qr(i),p={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(g0(i))v0(s,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var w=s.lastRenderedState,F=_(w,a);if(p.hasEagerState=!0,p.eagerState=F,Fi(F,w)){var z=s.interleaved;z===null?(p.next=p,sf(s)):(p.next=z.next,z.next=p),s.interleaved=p;return}}catch{}finally{}a=jm(i,s,p,c),a!==null&&(p=qn(),Vi(a,i,c,p),_0(a,s,c))}}function g0(i){var s=i.alternate;return i===ln||s!==null&&s===ln}function v0(i,s){ma=Ol=!0;var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}function _0(i,s,a){if((a&4194240)!==0){var c=s.lanes;c&=i.pendingLanes,a|=c,s.lanes=a,On(i,a)}}var zl={readContext:Si,useCallback:kn,useContext:kn,useEffect:kn,useImperativeHandle:kn,useInsertionEffect:kn,useLayoutEffect:kn,useMemo:kn,useReducer:kn,useRef:kn,useState:kn,useDebugValue:kn,useDeferredValue:kn,useTransition:kn,useMutableSource:kn,useSyncExternalStore:kn,useId:kn,unstable_isNewReconciler:!1},dS={readContext:Si,useCallback:function(i,s){return Qi().memoizedState=[i,s===void 0?null:s],i},useContext:Si,useEffect:a0,useImperativeHandle:function(i,s,a){return a=a!=null?a.concat([i]):null,Bl(4194308,4,c0.bind(null,s,i),a)},useLayoutEffect:function(i,s){return Bl(4194308,4,i,s)},useInsertionEffect:function(i,s){return Bl(4,2,i,s)},useMemo:function(i,s){var a=Qi();return s=s===void 0?null:s,i=i(),a.memoizedState=[i,s],i},useReducer:function(i,s,a){var c=Qi();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},c.queue=i,i=i.dispatch=cS.bind(null,ln,i),[c.memoizedState,i]},useRef:function(i){var s=Qi();return i={current:i},s.memoizedState=i},useState:s0,useDebugValue:_f,useDeferredValue:function(i){return Qi().memoizedState=i},useTransition:function(){var i=s0(!1),s=i[0];return i=uS.bind(null,i[1]),Qi().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,a){var c=ln,p=Qi();if(sn){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),bn===null)throw Error(t(349));(Es&30)!==0||e0(c,s,a)}p.memoizedState=a;var _={value:a,getSnapshot:s};return p.queue=_,a0(n0.bind(null,c,_,i),[i]),c.flags|=2048,_a(9,t0.bind(null,c,_,a,s),void 0,null),a},useId:function(){var i=Qi(),s=bn.identifierPrefix;if(sn){var a=yr,c=xr;a=(c&~(1<<32-Fe(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=ga++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=lS++,s=":"+s+"r"+a.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},hS={readContext:Si,useCallback:d0,useContext:Si,useEffect:vf,useImperativeHandle:f0,useInsertionEffect:l0,useLayoutEffect:u0,useMemo:h0,useReducer:mf,useRef:o0,useState:function(){return mf(va)},useDebugValue:_f,useDeferredValue:function(i){var s=Mi();return p0(s,Mn.memoizedState,i)},useTransition:function(){var i=mf(va)[0],s=Mi().memoizedState;return[i,s]},useMutableSource:Qm,useSyncExternalStore:Jm,useId:m0,unstable_isNewReconciler:!1},pS={readContext:Si,useCallback:d0,useContext:Si,useEffect:vf,useImperativeHandle:f0,useInsertionEffect:l0,useLayoutEffect:u0,useMemo:h0,useReducer:gf,useRef:o0,useState:function(){return gf(va)},useDebugValue:_f,useDeferredValue:function(i){var s=Mi();return Mn===null?s.memoizedState=i:p0(s,Mn.memoizedState,i)},useTransition:function(){var i=gf(va)[0],s=Mi().memoizedState;return[i,s]},useMutableSource:Qm,useSyncExternalStore:Jm,useId:m0,unstable_isNewReconciler:!1};function Bi(i,s){if(i&&i.defaultProps){s=$({},s),i=i.defaultProps;for(var a in i)s[a]===void 0&&(s[a]=i[a]);return s}return s}function xf(i,s,a,c){s=i.memoizedState,a=a(c,s),a=a==null?s:$({},s,a),i.memoizedState=a,i.lanes===0&&(i.updateQueue.baseState=a)}var Vl={isMounted:function(i){return(i=i._reactInternals)?Rn(i)===i:!1},enqueueSetState:function(i,s,a){i=i._reactInternals;var c=qn(),p=Qr(i),_=Mr(c,p);_.payload=s,a!=null&&(_.callback=a),s=qr(i,_,p),s!==null&&(Vi(s,i,p,c),Nl(s,i,p))},enqueueReplaceState:function(i,s,a){i=i._reactInternals;var c=qn(),p=Qr(i),_=Mr(c,p);_.tag=1,_.payload=s,a!=null&&(_.callback=a),s=qr(i,_,p),s!==null&&(Vi(s,i,p,c),Nl(s,i,p))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var a=qn(),c=Qr(i),p=Mr(a,c);p.tag=2,s!=null&&(p.callback=s),s=qr(i,p,c),s!==null&&(Vi(s,i,c,a),Nl(s,i,c))}};function x0(i,s,a,c,p,_,w){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,_,w):s.prototype&&s.prototype.isPureReactComponent?!ra(a,c)||!ra(p,_):!0}function y0(i,s,a){var c=!1,p=Xr,_=s.contextType;return typeof _=="object"&&_!==null?_=Si(_):(p=ei(s)?_s:Bn.current,c=s.contextTypes,_=(c=c!=null)?io(i,p):Xr),s=new s(a,_),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Vl,i.stateNode=s,s._reactInternals=i,c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),s}function S0(i,s,a,c){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==i&&Vl.enqueueReplaceState(s,s.state,null)}function yf(i,s,a,c){var p=i.stateNode;p.props=a,p.state=i.memoizedState,p.refs={},of(i);var _=s.contextType;typeof _=="object"&&_!==null?p.context=Si(_):(_=ei(s)?_s:Bn.current,p.context=io(i,_)),p.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(xf(i,s,_,a),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&Vl.enqueueReplaceState(p,p.state,null),Il(i,a,p,c),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function fo(i,s){try{var a="",c=s;do a+=We(c),c=c.return;while(c);var p=a}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:s,stack:p,digest:null}}function Sf(i,s,a){return{value:i,source:null,stack:a??null,digest:s??null}}function Mf(i,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var mS=typeof WeakMap=="function"?WeakMap:Map;function M0(i,s,a){a=Mr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){ql||(ql=!0,Of=c),Mf(i,s)},a}function E0(i,s,a){a=Mr(-1,a),a.tag=3;var c=i.type.getDerivedStateFromError;if(typeof c=="function"){var p=s.value;a.payload=function(){return c(p)},a.callback=function(){Mf(i,s)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(a.callback=function(){Mf(i,s),typeof c!="function"&&($r===null?$r=new Set([this]):$r.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),a}function T0(i,s,a){var c=i.pingCache;if(c===null){c=i.pingCache=new mS;var p=new Set;c.set(s,p)}else p=c.get(s),p===void 0&&(p=new Set,c.set(s,p));p.has(a)||(p.add(a),i=bS.bind(null,i,s,a),s.then(i,i))}function w0(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function A0(i,s,a,c,p){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Mr(-1,1),s.tag=2,qr(a,s,1))),a.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var gS=C.ReactCurrentOwner,ti=!1;function jn(i,s,a,c){s.child=i===null?Ym(s,null,a,c):ao(s,i.child,a,c)}function R0(i,s,a,c,p){a=a.render;var _=s.ref;return uo(s,p),c=hf(i,s,a,c,_,p),a=pf(),i!==null&&!ti?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,Er(i,s,p)):(sn&&a&&Kc(s),s.flags|=1,jn(i,s,c,p),s.child)}function C0(i,s,a,c,p){if(i===null){var _=a.type;return typeof _=="function"&&!Wf(_)&&_.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=_,b0(i,s,_,c,p)):(i=eu(a.type,null,c,s,s.mode,p),i.ref=s.ref,i.return=s,s.child=i)}if(_=i.child,(i.lanes&p)===0){var w=_.memoizedProps;if(a=a.compare,a=a!==null?a:ra,a(w,c)&&i.ref===s.ref)return Er(i,s,p)}return s.flags|=1,i=es(_,c),i.ref=s.ref,i.return=s,s.child=i}function b0(i,s,a,c,p){if(i!==null){var _=i.memoizedProps;if(ra(_,c)&&i.ref===s.ref)if(ti=!1,s.pendingProps=c=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(ti=!0);else return s.lanes=i.lanes,Er(i,s,p)}return Ef(i,s,a,c,p)}function P0(i,s,a){var c=s.pendingProps,p=c.children,_=i!==null?i.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},$t(po,di),di|=a;else{if((a&1073741824)===0)return i=_!==null?_.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,$t(po,di),di|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=_!==null?_.baseLanes:a,$t(po,di),di|=c}else _!==null?(c=_.baseLanes|a,s.memoizedState=null):c=a,$t(po,di),di|=c;return jn(i,s,p,a),s.child}function D0(i,s){var a=s.ref;(i===null&&a!==null||i!==null&&i.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Ef(i,s,a,c,p){var _=ei(a)?_s:Bn.current;return _=io(s,_),uo(s,p),a=hf(i,s,a,c,_,p),c=pf(),i!==null&&!ti?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,Er(i,s,p)):(sn&&c&&Kc(s),s.flags|=1,jn(i,s,a,p),s.child)}function L0(i,s,a,c,p){if(ei(a)){var _=!0;wl(s)}else _=!1;if(uo(s,p),s.stateNode===null)Gl(i,s),y0(s,a,c),yf(s,a,c,p),c=!0;else if(i===null){var w=s.stateNode,F=s.memoizedProps;w.props=F;var z=w.context,he=a.contextType;typeof he=="object"&&he!==null?he=Si(he):(he=ei(a)?_s:Bn.current,he=io(s,he));var Ee=a.getDerivedStateFromProps,Te=typeof Ee=="function"||typeof w.getSnapshotBeforeUpdate=="function";Te||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(F!==c||z!==he)&&S0(s,w,c,he),jr=!1;var Me=s.memoizedState;w.state=Me,Il(s,c,w,p),z=s.memoizedState,F!==c||Me!==z||Jn.current||jr?(typeof Ee=="function"&&(xf(s,a,Ee,c),z=s.memoizedState),(F=jr||x0(s,a,F,c,Me,z,he))?(Te||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=z),w.props=c,w.state=z,w.context=he,c=F):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{w=s.stateNode,qm(i,s),F=s.memoizedProps,he=s.type===s.elementType?F:Bi(s.type,F),w.props=he,Te=s.pendingProps,Me=w.context,z=a.contextType,typeof z=="object"&&z!==null?z=Si(z):(z=ei(a)?_s:Bn.current,z=io(s,z));var Ye=a.getDerivedStateFromProps;(Ee=typeof Ye=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(F!==Te||Me!==z)&&S0(s,w,c,z),jr=!1,Me=s.memoizedState,w.state=Me,Il(s,c,w,p);var Je=s.memoizedState;F!==Te||Me!==Je||Jn.current||jr?(typeof Ye=="function"&&(xf(s,a,Ye,c),Je=s.memoizedState),(he=jr||x0(s,a,he,c,Me,Je,z)||!1)?(Ee||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,Je,z),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,Je,z)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||F===i.memoizedProps&&Me===i.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||F===i.memoizedProps&&Me===i.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=Je),w.props=c,w.state=Je,w.context=z,c=he):(typeof w.componentDidUpdate!="function"||F===i.memoizedProps&&Me===i.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||F===i.memoizedProps&&Me===i.memoizedState||(s.flags|=1024),c=!1)}return Tf(i,s,a,c,_,p)}function Tf(i,s,a,c,p,_){D0(i,s);var w=(s.flags&128)!==0;if(!c&&!w)return p&&Om(s,a,!1),Er(i,s,_);c=s.stateNode,gS.current=s;var F=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,i!==null&&w?(s.child=ao(s,i.child,null,_),s.child=ao(s,null,F,_)):jn(i,s,F,_),s.memoizedState=c.state,p&&Om(s,a,!0),s.child}function N0(i){var s=i.stateNode;s.pendingContext?Um(i,s.pendingContext,s.pendingContext!==s.context):s.context&&Um(i,s.context,!1),af(i,s.containerInfo)}function I0(i,s,a,c,p){return oo(),Jc(p),s.flags|=256,jn(i,s,a,c),s.child}var wf={dehydrated:null,treeContext:null,retryLane:0};function Af(i){return{baseLanes:i,cachePool:null,transitions:null}}function U0(i,s,a){var c=s.pendingProps,p=an.current,_=!1,w=(s.flags&128)!==0,F;if((F=w)||(F=i!==null&&i.memoizedState===null?!1:(p&2)!==0),F?(_=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),$t(an,p&1),i===null)return Qc(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=c.children,i=c.fallback,_?(c=s.mode,_=s.child,w={mode:"hidden",children:w},(c&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=w):_=tu(w,c,0,null),i=Cs(i,c,a,null),_.return=s,i.return=s,_.sibling=i,s.child=_,s.child.memoizedState=Af(a),s.memoizedState=wf,i):Rf(s,w));if(p=i.memoizedState,p!==null&&(F=p.dehydrated,F!==null))return vS(i,s,w,c,F,p,a);if(_){_=c.fallback,w=s.mode,p=i.child,F=p.sibling;var z={mode:"hidden",children:c.children};return(w&1)===0&&s.child!==p?(c=s.child,c.childLanes=0,c.pendingProps=z,s.deletions=null):(c=es(p,z),c.subtreeFlags=p.subtreeFlags&14680064),F!==null?_=es(F,_):(_=Cs(_,w,a,null),_.flags|=2),_.return=s,c.return=s,c.sibling=_,s.child=c,c=_,_=s.child,w=i.child.memoizedState,w=w===null?Af(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},_.memoizedState=w,_.childLanes=i.childLanes&~a,s.memoizedState=wf,c}return _=i.child,i=_.sibling,c=es(_,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,i!==null&&(a=s.deletions,a===null?(s.deletions=[i],s.flags|=16):a.push(i)),s.child=c,s.memoizedState=null,c}function Rf(i,s){return s=tu({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Hl(i,s,a,c){return c!==null&&Jc(c),ao(s,i.child,null,a),i=Rf(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function vS(i,s,a,c,p,_,w){if(a)return s.flags&256?(s.flags&=-257,c=Sf(Error(t(422))),Hl(i,s,w,c)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(_=c.fallback,p=s.mode,c=tu({mode:"visible",children:c.children},p,0,null),_=Cs(_,p,w,null),_.flags|=2,c.return=s,_.return=s,c.sibling=_,s.child=c,(s.mode&1)!==0&&ao(s,i.child,null,w),s.child.memoizedState=Af(w),s.memoizedState=wf,_);if((s.mode&1)===0)return Hl(i,s,w,null);if(p.data==="$!"){if(c=p.nextSibling&&p.nextSibling.dataset,c)var F=c.dgst;return c=F,_=Error(t(419)),c=Sf(_,c,void 0),Hl(i,s,w,c)}if(F=(w&i.childLanes)!==0,ti||F){if(c=bn,c!==null){switch(w&-w){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(c.suspendedLanes|w))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,Sr(i,p),Vi(c,i,p,-1))}return Gf(),c=Sf(Error(t(421))),Hl(i,s,w,c)}return p.data==="$?"?(s.flags|=128,s.child=i.child,s=PS.bind(null,i),p._reactRetry=s,null):(i=_.treeContext,fi=Gr(p.nextSibling),ci=s,sn=!0,Oi=null,i!==null&&(xi[yi++]=xr,xi[yi++]=yr,xi[yi++]=xs,xr=i.id,yr=i.overflow,xs=s),s=Rf(s,c.children),s.flags|=4096,s)}function F0(i,s,a){i.lanes|=s;var c=i.alternate;c!==null&&(c.lanes|=s),rf(i.return,s,a)}function Cf(i,s,a,c,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:p}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=c,_.tail=a,_.tailMode=p)}function O0(i,s,a){var c=s.pendingProps,p=c.revealOrder,_=c.tail;if(jn(i,s,c.children,a),c=an.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&F0(i,a,s);else if(i.tag===19)F0(i,a,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}if($t(an,c),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(a=s.child,p=null;a!==null;)i=a.alternate,i!==null&&Ul(i)===null&&(p=a),a=a.sibling;a=p,a===null?(p=s.child,s.child=null):(p=a.sibling,a.sibling=null),Cf(s,!1,p,a,_);break;case"backwards":for(a=null,p=s.child,s.child=null;p!==null;){if(i=p.alternate,i!==null&&Ul(i)===null){s.child=p;break}i=p.sibling,p.sibling=a,a=p,p=i}Cf(s,!0,a,null,_);break;case"together":Cf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Gl(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function Er(i,s,a){if(i!==null&&(s.dependencies=i.dependencies),Ts|=s.lanes,(a&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,a=es(i,i.pendingProps),s.child=a,a.return=s;i.sibling!==null;)i=i.sibling,a=a.sibling=es(i,i.pendingProps),a.return=s;a.sibling=null}return s.child}function _S(i,s,a){switch(s.tag){case 3:N0(s),oo();break;case 5:Zm(s);break;case 1:ei(s.type)&&wl(s);break;case 4:af(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,p=s.memoizedProps.value;$t(Dl,c._currentValue),c._currentValue=p;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?($t(an,an.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?U0(i,s,a):($t(an,an.current&1),i=Er(i,s,a),i!==null?i.sibling:null);$t(an,an.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(i.flags&128)!==0){if(c)return O0(i,s,a);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),$t(an,an.current),c)break;return null;case 22:case 23:return s.lanes=0,P0(i,s,a)}return Er(i,s,a)}var B0,bf,k0,z0;B0=function(i,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)i.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},bf=function(){},k0=function(i,s,a,c){var p=i.memoizedProps;if(p!==c){i=s.stateNode,Ms(Zi.current);var _=null;switch(a){case"input":p=mt(i,p),c=mt(i,c),_=[];break;case"select":p=$({},p,{value:void 0}),c=$({},c,{value:void 0}),_=[];break;case"textarea":p=Gt(i,p),c=Gt(i,c),_=[];break;default:typeof p.onClick!="function"&&typeof c.onClick=="function"&&(i.onclick=Ml)}et(a,c);var w;a=null;for(he in p)if(!c.hasOwnProperty(he)&&p.hasOwnProperty(he)&&p[he]!=null)if(he==="style"){var F=p[he];for(w in F)F.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else he!=="dangerouslySetInnerHTML"&&he!=="children"&&he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&he!=="autoFocus"&&(o.hasOwnProperty(he)?_||(_=[]):(_=_||[]).push(he,null));for(he in c){var z=c[he];if(F=p!=null?p[he]:void 0,c.hasOwnProperty(he)&&z!==F&&(z!=null||F!=null))if(he==="style")if(F){for(w in F)!F.hasOwnProperty(w)||z&&z.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in z)z.hasOwnProperty(w)&&F[w]!==z[w]&&(a||(a={}),a[w]=z[w])}else a||(_||(_=[]),_.push(he,a)),a=z;else he==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,F=F?F.__html:void 0,z!=null&&F!==z&&(_=_||[]).push(he,z)):he==="children"?typeof z!="string"&&typeof z!="number"||(_=_||[]).push(he,""+z):he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&(o.hasOwnProperty(he)?(z!=null&&he==="onScroll"&&Zt("scroll",i),_||F===z||(_=[])):(_=_||[]).push(he,z))}a&&(_=_||[]).push("style",a);var he=_;(s.updateQueue=he)&&(s.flags|=4)}},z0=function(i,s,a,c){a!==c&&(s.flags|=4)};function xa(i,s){if(!sn)switch(i.tailMode){case"hidden":s=i.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?i.tail=null:a.sibling=null;break;case"collapsed":a=i.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function zn(i){var s=i.alternate!==null&&i.alternate.child===i.child,a=0,c=0;if(s)for(var p=i.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags&14680064,c|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=c,i.childLanes=a,s}function xS(i,s,a){var c=s.pendingProps;switch($c(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zn(s),null;case 1:return ei(s.type)&&Tl(),zn(s),null;case 3:return c=s.stateNode,co(),Qt(Jn),Qt(Bn),cf(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(i===null||i.child===null)&&(bl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Oi!==null&&(zf(Oi),Oi=null))),bf(i,s),zn(s),null;case 5:lf(s);var p=Ms(pa.current);if(a=s.type,i!==null&&s.stateNode!=null)k0(i,s,a,c,p),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return zn(s),null}if(i=Ms(Zi.current),bl(s)){c=s.stateNode,a=s.type;var _=s.memoizedProps;switch(c[$i]=s,c[ua]=_,i=(s.mode&1)!==0,a){case"dialog":Zt("cancel",c),Zt("close",c);break;case"iframe":case"object":case"embed":Zt("load",c);break;case"video":case"audio":for(p=0;p<oa.length;p++)Zt(oa[p],c);break;case"source":Zt("error",c);break;case"img":case"image":case"link":Zt("error",c),Zt("load",c);break;case"details":Zt("toggle",c);break;case"input":vt(c,_),Zt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!_.multiple},Zt("invalid",c);break;case"textarea":Y(c,_),Zt("invalid",c)}et(a,_),p=null;for(var w in _)if(_.hasOwnProperty(w)){var F=_[w];w==="children"?typeof F=="string"?c.textContent!==F&&(_.suppressHydrationWarning!==!0&&Sl(c.textContent,F,i),p=["children",F]):typeof F=="number"&&c.textContent!==""+F&&(_.suppressHydrationWarning!==!0&&Sl(c.textContent,F,i),p=["children",""+F]):o.hasOwnProperty(w)&&F!=null&&w==="onScroll"&&Zt("scroll",c)}switch(a){case"input":Ce(c),Ct(c,_,!0);break;case"textarea":Ce(c),At(c);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(c.onclick=Ml)}c=p,s.updateQueue=c,c!==null&&(s.flags|=4)}else{w=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=I(a)),i==="http://www.w3.org/1999/xhtml"?a==="script"?(i=w.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof c.is=="string"?i=w.createElement(a,{is:c.is}):(i=w.createElement(a),a==="select"&&(w=i,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):i=w.createElementNS(i,a),i[$i]=s,i[ua]=c,B0(i,s,!1,!1),s.stateNode=i;e:{switch(w=Ue(a,c),a){case"dialog":Zt("cancel",i),Zt("close",i),p=c;break;case"iframe":case"object":case"embed":Zt("load",i),p=c;break;case"video":case"audio":for(p=0;p<oa.length;p++)Zt(oa[p],i);p=c;break;case"source":Zt("error",i),p=c;break;case"img":case"image":case"link":Zt("error",i),Zt("load",i),p=c;break;case"details":Zt("toggle",i),p=c;break;case"input":vt(i,c),p=mt(i,c),Zt("invalid",i);break;case"option":p=c;break;case"select":i._wrapperState={wasMultiple:!!c.multiple},p=$({},c,{value:void 0}),Zt("invalid",i);break;case"textarea":Y(i,c),p=Gt(i,c),Zt("invalid",i);break;default:p=c}et(a,p),F=p;for(_ in F)if(F.hasOwnProperty(_)){var z=F[_];_==="style"?xe(i,z):_==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&ae(i,z)):_==="children"?typeof z=="string"?(a!=="textarea"||z!=="")&&pe(i,z):typeof z=="number"&&pe(i,""+z):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?z!=null&&_==="onScroll"&&Zt("scroll",i):z!=null&&O(i,_,z,w))}switch(a){case"input":Ce(i),Ct(i,c,!1);break;case"textarea":Ce(i),At(i);break;case"option":c.value!=null&&i.setAttribute("value",""+ce(c.value));break;case"select":i.multiple=!!c.multiple,_=c.value,_!=null?Ft(i,!!c.multiple,_,!1):c.defaultValue!=null&&Ft(i,!!c.multiple,c.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=Ml)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return zn(s),null;case 6:if(i&&s.stateNode!=null)z0(i,s,i.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=Ms(pa.current),Ms(Zi.current),bl(s)){if(c=s.stateNode,a=s.memoizedProps,c[$i]=s,(_=c.nodeValue!==a)&&(i=ci,i!==null))switch(i.tag){case 3:Sl(c.nodeValue,a,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Sl(c.nodeValue,a,(i.mode&1)!==0)}_&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[$i]=s,s.stateNode=c}return zn(s),null;case 13:if(Qt(an),c=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(sn&&fi!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Gm(),oo(),s.flags|=98560,_=!1;else if(_=bl(s),c!==null&&c.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[$i]=s}else oo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;zn(s),_=!1}else Oi!==null&&(zf(Oi),Oi=null),_=!0;if(!_)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(i!==null&&i.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(an.current&1)!==0?En===0&&(En=3):Gf())),s.updateQueue!==null&&(s.flags|=4),zn(s),null);case 4:return co(),bf(i,s),i===null&&aa(s.stateNode.containerInfo),zn(s),null;case 10:return nf(s.type._context),zn(s),null;case 17:return ei(s.type)&&Tl(),zn(s),null;case 19:if(Qt(an),_=s.memoizedState,_===null)return zn(s),null;if(c=(s.flags&128)!==0,w=_.rendering,w===null)if(c)xa(_,!1);else{if(En!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(w=Ul(i),w!==null){for(s.flags|=128,xa(_,!1),c=w.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)_=a,i=c,_.flags&=14680066,w=_.alternate,w===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=w.childLanes,_.lanes=w.lanes,_.child=w.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=w.memoizedProps,_.memoizedState=w.memoizedState,_.updateQueue=w.updateQueue,_.type=w.type,i=w.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),a=a.sibling;return $t(an,an.current&1|2),s.child}i=i.sibling}_.tail!==null&&yt()>mo&&(s.flags|=128,c=!0,xa(_,!1),s.lanes=4194304)}else{if(!c)if(i=Ul(w),i!==null){if(s.flags|=128,c=!0,a=i.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),xa(_,!0),_.tail===null&&_.tailMode==="hidden"&&!w.alternate&&!sn)return zn(s),null}else 2*yt()-_.renderingStartTime>mo&&a!==1073741824&&(s.flags|=128,c=!0,xa(_,!1),s.lanes=4194304);_.isBackwards?(w.sibling=s.child,s.child=w):(a=_.last,a!==null?a.sibling=w:s.child=w,_.last=w)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=yt(),s.sibling=null,a=an.current,$t(an,c?a&1|2:a&1),s):(zn(s),null);case 22:case 23:return Hf(),c=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(di&1073741824)!==0&&(zn(s),s.subtreeFlags&6&&(s.flags|=8192)):zn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function yS(i,s){switch($c(s),s.tag){case 1:return ei(s.type)&&Tl(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return co(),Qt(Jn),Qt(Bn),cf(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return lf(s),null;case 13:if(Qt(an),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));oo()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Qt(an),null;case 4:return co(),null;case 10:return nf(s.type._context),null;case 22:case 23:return Hf(),null;case 24:return null;default:return null}}var Wl=!1,Vn=!1,SS=typeof WeakSet=="function"?WeakSet:Set,$e=null;function ho(i,s){var a=i.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){dn(i,s,c)}else a.current=null}function Pf(i,s,a){try{a()}catch(c){dn(i,s,c)}}var V0=!1;function MS(i,s){if(Vc=cl,i=xm(),Nc(i)){if("selectionStart"in i)var a={start:i.selectionStart,end:i.selectionEnd};else e:{a=(a=i.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var p=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{a.nodeType,_.nodeType}catch{a=null;break e}var w=0,F=-1,z=-1,he=0,Ee=0,Te=i,Me=null;t:for(;;){for(var Ye;Te!==a||p!==0&&Te.nodeType!==3||(F=w+p),Te!==_||c!==0&&Te.nodeType!==3||(z=w+c),Te.nodeType===3&&(w+=Te.nodeValue.length),(Ye=Te.firstChild)!==null;)Me=Te,Te=Ye;for(;;){if(Te===i)break t;if(Me===a&&++he===p&&(F=w),Me===_&&++Ee===c&&(z=w),(Ye=Te.nextSibling)!==null)break;Te=Me,Me=Te.parentNode}Te=Ye}a=F===-1||z===-1?null:{start:F,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Hc={focusedElem:i,selectionRange:a},cl=!1,$e=s;$e!==null;)if(s=$e,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,$e=i;else for(;$e!==null;){s=$e;try{var Je=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Je!==null){var it=Je.memoizedProps,gn=Je.memoizedState,ie=s.stateNode,q=ie.getSnapshotBeforeUpdate(s.elementType===s.type?it:Bi(s.type,it),gn);ie.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var le=s.stateNode.containerInfo;le.nodeType===1?le.textContent="":le.nodeType===9&&le.documentElement&&le.removeChild(le.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Re){dn(s,s.return,Re)}if(i=s.sibling,i!==null){i.return=s.return,$e=i;break}$e=s.return}return Je=V0,V0=!1,Je}function ya(i,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var p=c=c.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&Pf(s,a,_)}p=p.next}while(p!==c)}}function Xl(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&i)===i){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function Df(i){var s=i.ref;if(s!==null){var a=i.stateNode;switch(i.tag){case 5:i=a;break;default:i=a}typeof s=="function"?s(i):s.current=i}}function H0(i){var s=i.alternate;s!==null&&(i.alternate=null,H0(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[$i],delete s[ua],delete s[Yc],delete s[rS],delete s[sS])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function G0(i){return i.tag===5||i.tag===3||i.tag===4}function W0(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||G0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Lf(i,s,a){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(i,s):a.insertBefore(i,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(i,a)):(s=a,s.appendChild(i)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Ml));else if(c!==4&&(i=i.child,i!==null))for(Lf(i,s,a),i=i.sibling;i!==null;)Lf(i,s,a),i=i.sibling}function Nf(i,s,a){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?a.insertBefore(i,s):a.appendChild(i);else if(c!==4&&(i=i.child,i!==null))for(Nf(i,s,a),i=i.sibling;i!==null;)Nf(i,s,a),i=i.sibling}var Ln=null,ki=!1;function Kr(i,s,a){for(a=a.child;a!==null;)X0(i,s,a),a=a.sibling}function X0(i,s,a){if(J&&typeof J.onCommitFiberUnmount=="function")try{J.onCommitFiberUnmount(ne,a)}catch{}switch(a.tag){case 5:Vn||ho(a,s);case 6:var c=Ln,p=ki;Ln=null,Kr(i,s,a),Ln=c,ki=p,Ln!==null&&(ki?(i=Ln,a=a.stateNode,i.nodeType===8?i.parentNode.removeChild(a):i.removeChild(a)):Ln.removeChild(a.stateNode));break;case 18:Ln!==null&&(ki?(i=Ln,a=a.stateNode,i.nodeType===8?Xc(i.parentNode,a):i.nodeType===1&&Xc(i,a),Qo(i)):Xc(Ln,a.stateNode));break;case 4:c=Ln,p=ki,Ln=a.stateNode.containerInfo,ki=!0,Kr(i,s,a),Ln=c,ki=p;break;case 0:case 11:case 14:case 15:if(!Vn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){p=c=c.next;do{var _=p,w=_.destroy;_=_.tag,w!==void 0&&((_&2)!==0||(_&4)!==0)&&Pf(a,s,w),p=p.next}while(p!==c)}Kr(i,s,a);break;case 1:if(!Vn&&(ho(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(F){dn(a,s,F)}Kr(i,s,a);break;case 21:Kr(i,s,a);break;case 22:a.mode&1?(Vn=(c=Vn)||a.memoizedState!==null,Kr(i,s,a),Vn=c):Kr(i,s,a);break;default:Kr(i,s,a)}}function Y0(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var a=i.stateNode;a===null&&(a=i.stateNode=new SS),s.forEach(function(c){var p=DS.bind(null,i,c);a.has(c)||(a.add(c),c.then(p,p))})}}function zi(i,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var p=a[c];try{var _=i,w=s,F=w;e:for(;F!==null;){switch(F.tag){case 5:Ln=F.stateNode,ki=!1;break e;case 3:Ln=F.stateNode.containerInfo,ki=!0;break e;case 4:Ln=F.stateNode.containerInfo,ki=!0;break e}F=F.return}if(Ln===null)throw Error(t(160));X0(_,w,p),Ln=null,ki=!1;var z=p.alternate;z!==null&&(z.return=null),p.return=null}catch(he){dn(p,s,he)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)j0(s,i),s=s.sibling}function j0(i,s){var a=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(zi(s,i),Ji(i),c&4){try{ya(3,i,i.return),Xl(3,i)}catch(it){dn(i,i.return,it)}try{ya(5,i,i.return)}catch(it){dn(i,i.return,it)}}break;case 1:zi(s,i),Ji(i),c&512&&a!==null&&ho(a,a.return);break;case 5:if(zi(s,i),Ji(i),c&512&&a!==null&&ho(a,a.return),i.flags&32){var p=i.stateNode;try{pe(p,"")}catch(it){dn(i,i.return,it)}}if(c&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,w=a!==null?a.memoizedProps:_,F=i.type,z=i.updateQueue;if(i.updateQueue=null,z!==null)try{F==="input"&&_.type==="radio"&&_.name!=null&&kt(p,_),Ue(F,w);var he=Ue(F,_);for(w=0;w<z.length;w+=2){var Ee=z[w],Te=z[w+1];Ee==="style"?xe(p,Te):Ee==="dangerouslySetInnerHTML"?ae(p,Te):Ee==="children"?pe(p,Te):O(p,Ee,Te,he)}switch(F){case"input":_t(p,_);break;case"textarea":nn(p,_);break;case"select":var Me=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var Ye=_.value;Ye!=null?Ft(p,!!_.multiple,Ye,!1):Me!==!!_.multiple&&(_.defaultValue!=null?Ft(p,!!_.multiple,_.defaultValue,!0):Ft(p,!!_.multiple,_.multiple?[]:"",!1))}p[ua]=_}catch(it){dn(i,i.return,it)}}break;case 6:if(zi(s,i),Ji(i),c&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(it){dn(i,i.return,it)}}break;case 3:if(zi(s,i),Ji(i),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Qo(s.containerInfo)}catch(it){dn(i,i.return,it)}break;case 4:zi(s,i),Ji(i);break;case 13:zi(s,i),Ji(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Ff=yt())),c&4&&Y0(i);break;case 22:if(Ee=a!==null&&a.memoizedState!==null,i.mode&1?(Vn=(he=Vn)||Ee,zi(s,i),Vn=he):zi(s,i),Ji(i),c&8192){if(he=i.memoizedState!==null,(i.stateNode.isHidden=he)&&!Ee&&(i.mode&1)!==0)for($e=i,Ee=i.child;Ee!==null;){for(Te=$e=Ee;$e!==null;){switch(Me=$e,Ye=Me.child,Me.tag){case 0:case 11:case 14:case 15:ya(4,Me,Me.return);break;case 1:ho(Me,Me.return);var Je=Me.stateNode;if(typeof Je.componentWillUnmount=="function"){c=Me,a=Me.return;try{s=c,Je.props=s.memoizedProps,Je.state=s.memoizedState,Je.componentWillUnmount()}catch(it){dn(c,a,it)}}break;case 5:ho(Me,Me.return);break;case 22:if(Me.memoizedState!==null){$0(Te);continue}}Ye!==null?(Ye.return=Me,$e=Ye):$0(Te)}Ee=Ee.sibling}e:for(Ee=null,Te=i;;){if(Te.tag===5){if(Ee===null){Ee=Te;try{p=Te.stateNode,he?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(F=Te.stateNode,z=Te.memoizedProps.style,w=z!=null&&z.hasOwnProperty("display")?z.display:null,F.style.display=ge("display",w))}catch(it){dn(i,i.return,it)}}}else if(Te.tag===6){if(Ee===null)try{Te.stateNode.nodeValue=he?"":Te.memoizedProps}catch(it){dn(i,i.return,it)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===i)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===i)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===i)break e;Ee===Te&&(Ee=null),Te=Te.return}Ee===Te&&(Ee=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:zi(s,i),Ji(i),c&4&&Y0(i);break;case 21:break;default:zi(s,i),Ji(i)}}function Ji(i){var s=i.flags;if(s&2){try{e:{for(var a=i.return;a!==null;){if(G0(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var p=c.stateNode;c.flags&32&&(pe(p,""),c.flags&=-33);var _=W0(i);Nf(i,_,p);break;case 3:case 4:var w=c.stateNode.containerInfo,F=W0(i);Lf(i,F,w);break;default:throw Error(t(161))}}catch(z){dn(i,i.return,z)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function ES(i,s,a){$e=i,q0(i)}function q0(i,s,a){for(var c=(i.mode&1)!==0;$e!==null;){var p=$e,_=p.child;if(p.tag===22&&c){var w=p.memoizedState!==null||Wl;if(!w){var F=p.alternate,z=F!==null&&F.memoizedState!==null||Vn;F=Wl;var he=Vn;if(Wl=w,(Vn=z)&&!he)for($e=p;$e!==null;)w=$e,z=w.child,w.tag===22&&w.memoizedState!==null?Z0(p):z!==null?(z.return=w,$e=z):Z0(p);for(;_!==null;)$e=_,q0(_),_=_.sibling;$e=p,Wl=F,Vn=he}K0(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,$e=_):K0(i)}}function K0(i){for(;$e!==null;){var s=$e;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Vn||Xl(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Vn)if(a===null)c.componentDidMount();else{var p=s.elementType===s.type?a.memoizedProps:Bi(s.type,a.memoizedProps);c.componentDidUpdate(p,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&$m(s,_,c);break;case 3:var w=s.updateQueue;if(w!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}$m(s,w,a)}break;case 5:var F=s.stateNode;if(a===null&&s.flags&4){a=F;var z=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&a.focus();break;case"img":z.src&&(a.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var he=s.alternate;if(he!==null){var Ee=he.memoizedState;if(Ee!==null){var Te=Ee.dehydrated;Te!==null&&Qo(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Vn||s.flags&512&&Df(s)}catch(Me){dn(s,s.return,Me)}}if(s===i){$e=null;break}if(a=s.sibling,a!==null){a.return=s.return,$e=a;break}$e=s.return}}function $0(i){for(;$e!==null;){var s=$e;if(s===i){$e=null;break}var a=s.sibling;if(a!==null){a.return=s.return,$e=a;break}$e=s.return}}function Z0(i){for(;$e!==null;){var s=$e;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Xl(4,s)}catch(z){dn(s,a,z)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var p=s.return;try{c.componentDidMount()}catch(z){dn(s,p,z)}}var _=s.return;try{Df(s)}catch(z){dn(s,_,z)}break;case 5:var w=s.return;try{Df(s)}catch(z){dn(s,w,z)}}}catch(z){dn(s,s.return,z)}if(s===i){$e=null;break}var F=s.sibling;if(F!==null){F.return=s.return,$e=F;break}$e=s.return}}var TS=Math.ceil,Yl=C.ReactCurrentDispatcher,If=C.ReactCurrentOwner,Ei=C.ReactCurrentBatchConfig,Bt=0,bn=null,xn=null,Nn=0,di=0,po=Wr(0),En=0,Sa=null,Ts=0,jl=0,Uf=0,Ma=null,ni=null,Ff=0,mo=1/0,Tr=null,ql=!1,Of=null,$r=null,Kl=!1,Zr=null,$l=0,Ea=0,Bf=null,Zl=-1,Ql=0;function qn(){return(Bt&6)!==0?yt():Zl!==-1?Zl:Zl=yt()}function Qr(i){return(i.mode&1)===0?1:(Bt&2)!==0&&Nn!==0?Nn&-Nn:aS.transition!==null?(Ql===0&&(Ql=Sn()),Ql):(i=Mt,i!==0||(i=window.event,i=i===void 0?16:Jp(i.type)),i)}function Vi(i,s,a,c){if(50<Ea)throw Ea=0,Bf=null,Error(t(185));mn(i,a,c),((Bt&2)===0||i!==bn)&&(i===bn&&((Bt&2)===0&&(jl|=a),En===4&&Jr(i,Nn)),ii(i,c),a===1&&Bt===0&&(s.mode&1)===0&&(mo=yt()+500,Al&&Yr()))}function ii(i,s){var a=i.callbackNode;Kt(i,s);var c=Dt(i,i===bn?Nn:0);if(c===0)a!==null&&at(a),i.callbackNode=null,i.callbackPriority=0;else if(s=c&-c,i.callbackPriority!==s){if(a!=null&&at(a),s===1)i.tag===0?oS(J0.bind(null,i)):Bm(J0.bind(null,i)),nS(function(){(Bt&6)===0&&Yr()}),a=null;else{switch(Li(c)){case 1:a=Fn;break;case 4:a=li;break;case 16:a=A;break;case 536870912:a=fe;break;default:a=A}a=ag(a,Q0.bind(null,i))}i.callbackPriority=s,i.callbackNode=a}}function Q0(i,s){if(Zl=-1,Ql=0,(Bt&6)!==0)throw Error(t(327));var a=i.callbackNode;if(go()&&i.callbackNode!==a)return null;var c=Dt(i,i===bn?Nn:0);if(c===0)return null;if((c&30)!==0||(c&i.expiredLanes)!==0||s)s=Jl(i,c);else{s=c;var p=Bt;Bt|=2;var _=tg();(bn!==i||Nn!==s)&&(Tr=null,mo=yt()+500,As(i,s));do try{RS();break}catch(F){eg(i,F)}while(!0);tf(),Yl.current=_,Bt=p,xn!==null?s=0:(bn=null,Nn=0,s=En)}if(s!==0){if(s===2&&(p=Wt(i),p!==0&&(c=p,s=kf(i,p))),s===1)throw a=Sa,As(i,0),Jr(i,c),ii(i,yt()),a;if(s===6)Jr(i,c);else{if(p=i.current.alternate,(c&30)===0&&!wS(p)&&(s=Jl(i,c),s===2&&(_=Wt(i),_!==0&&(c=_,s=kf(i,_))),s===1))throw a=Sa,As(i,0),Jr(i,c),ii(i,yt()),a;switch(i.finishedWork=p,i.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:Rs(i,ni,Tr);break;case 3:if(Jr(i,c),(c&130023424)===c&&(s=Ff+500-yt(),10<s)){if(Dt(i,0)!==0)break;if(p=i.suspendedLanes,(p&c)!==c){qn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Wc(Rs.bind(null,i,ni,Tr),s);break}Rs(i,ni,Tr);break;case 4:if(Jr(i,c),(c&4194240)===c)break;for(s=i.eventTimes,p=-1;0<c;){var w=31-Fe(c);_=1<<w,w=s[w],w>p&&(p=w),c&=~_}if(c=p,c=yt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*TS(c/1960))-c,10<c){i.timeoutHandle=Wc(Rs.bind(null,i,ni,Tr),c);break}Rs(i,ni,Tr);break;case 5:Rs(i,ni,Tr);break;default:throw Error(t(329))}}}return ii(i,yt()),i.callbackNode===a?Q0.bind(null,i):null}function kf(i,s){var a=Ma;return i.current.memoizedState.isDehydrated&&(As(i,s).flags|=256),i=Jl(i,s),i!==2&&(s=ni,ni=a,s!==null&&zf(s)),i}function zf(i){ni===null?ni=i:ni.push.apply(ni,i)}function wS(i){for(var s=i;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var p=a[c],_=p.getSnapshot;p=p.value;try{if(!Fi(_(),p))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Jr(i,s){for(s&=~Uf,s&=~jl,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var a=31-Fe(s),c=1<<a;i[a]=-1,s&=~c}}function J0(i){if((Bt&6)!==0)throw Error(t(327));go();var s=Dt(i,0);if((s&1)===0)return ii(i,yt()),null;var a=Jl(i,s);if(i.tag!==0&&a===2){var c=Wt(i);c!==0&&(s=c,a=kf(i,c))}if(a===1)throw a=Sa,As(i,0),Jr(i,s),ii(i,yt()),a;if(a===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,Rs(i,ni,Tr),ii(i,yt()),null}function Vf(i,s){var a=Bt;Bt|=1;try{return i(s)}finally{Bt=a,Bt===0&&(mo=yt()+500,Al&&Yr())}}function ws(i){Zr!==null&&Zr.tag===0&&(Bt&6)===0&&go();var s=Bt;Bt|=1;var a=Ei.transition,c=Mt;try{if(Ei.transition=null,Mt=1,i)return i()}finally{Mt=c,Ei.transition=a,Bt=s,(Bt&6)===0&&Yr()}}function Hf(){di=po.current,Qt(po)}function As(i,s){i.finishedWork=null,i.finishedLanes=0;var a=i.timeoutHandle;if(a!==-1&&(i.timeoutHandle=-1,tS(a)),xn!==null)for(a=xn.return;a!==null;){var c=a;switch($c(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Tl();break;case 3:co(),Qt(Jn),Qt(Bn),cf();break;case 5:lf(c);break;case 4:co();break;case 13:Qt(an);break;case 19:Qt(an);break;case 10:nf(c.type._context);break;case 22:case 23:Hf()}a=a.return}if(bn=i,xn=i=es(i.current,null),Nn=di=s,En=0,Sa=null,Uf=jl=Ts=0,ni=Ma=null,Ss!==null){for(s=0;s<Ss.length;s++)if(a=Ss[s],c=a.interleaved,c!==null){a.interleaved=null;var p=c.next,_=a.pending;if(_!==null){var w=_.next;_.next=p,c.next=w}a.pending=c}Ss=null}return i}function eg(i,s){do{var a=xn;try{if(tf(),Fl.current=zl,Ol){for(var c=ln.memoizedState;c!==null;){var p=c.queue;p!==null&&(p.pending=null),c=c.next}Ol=!1}if(Es=0,Cn=Mn=ln=null,ma=!1,ga=0,If.current=null,a===null||a.return===null){En=1,Sa=s,xn=null;break}e:{var _=i,w=a.return,F=a,z=s;if(s=Nn,F.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var he=z,Ee=F,Te=Ee.tag;if((Ee.mode&1)===0&&(Te===0||Te===11||Te===15)){var Me=Ee.alternate;Me?(Ee.updateQueue=Me.updateQueue,Ee.memoizedState=Me.memoizedState,Ee.lanes=Me.lanes):(Ee.updateQueue=null,Ee.memoizedState=null)}var Ye=w0(w);if(Ye!==null){Ye.flags&=-257,A0(Ye,w,F,_,s),Ye.mode&1&&T0(_,he,s),s=Ye,z=he;var Je=s.updateQueue;if(Je===null){var it=new Set;it.add(z),s.updateQueue=it}else Je.add(z);break e}else{if((s&1)===0){T0(_,he,s),Gf();break e}z=Error(t(426))}}else if(sn&&F.mode&1){var gn=w0(w);if(gn!==null){(gn.flags&65536)===0&&(gn.flags|=256),A0(gn,w,F,_,s),Jc(fo(z,F));break e}}_=z=fo(z,F),En!==4&&(En=2),Ma===null?Ma=[_]:Ma.push(_),_=w;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var ie=M0(_,z,s);Km(_,ie);break e;case 1:F=z;var q=_.type,le=_.stateNode;if((_.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||le!==null&&typeof le.componentDidCatch=="function"&&($r===null||!$r.has(le)))){_.flags|=65536,s&=-s,_.lanes|=s;var Re=E0(_,F,s);Km(_,Re);break e}}_=_.return}while(_!==null)}ig(a)}catch(st){s=st,xn===a&&a!==null&&(xn=a=a.return);continue}break}while(!0)}function tg(){var i=Yl.current;return Yl.current=zl,i===null?zl:i}function Gf(){(En===0||En===3||En===2)&&(En=4),bn===null||(Ts&268435455)===0&&(jl&268435455)===0||Jr(bn,Nn)}function Jl(i,s){var a=Bt;Bt|=2;var c=tg();(bn!==i||Nn!==s)&&(Tr=null,As(i,s));do try{AS();break}catch(p){eg(i,p)}while(!0);if(tf(),Bt=a,Yl.current=c,xn!==null)throw Error(t(261));return bn=null,Nn=0,En}function AS(){for(;xn!==null;)ng(xn)}function RS(){for(;xn!==null&&!Pt();)ng(xn)}function ng(i){var s=og(i.alternate,i,di);i.memoizedProps=i.pendingProps,s===null?ig(i):xn=s,If.current=null}function ig(i){var s=i;do{var a=s.alternate;if(i=s.return,(s.flags&32768)===0){if(a=xS(a,s,di),a!==null){xn=a;return}}else{if(a=yS(a,s),a!==null){a.flags&=32767,xn=a;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{En=6,xn=null;return}}if(s=s.sibling,s!==null){xn=s;return}xn=s=i}while(s!==null);En===0&&(En=5)}function Rs(i,s,a){var c=Mt,p=Ei.transition;try{Ei.transition=null,Mt=1,CS(i,s,a,c)}finally{Ei.transition=p,Mt=c}return null}function CS(i,s,a,c){do go();while(Zr!==null);if((Bt&6)!==0)throw Error(t(327));a=i.finishedWork;var p=i.finishedLanes;if(a===null)return null;if(i.finishedWork=null,i.finishedLanes=0,a===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=a.lanes|a.childLanes;if(Lt(i,_),i===bn&&(xn=bn=null,Nn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Kl||(Kl=!0,ag(A,function(){return go(),null})),_=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||_){_=Ei.transition,Ei.transition=null;var w=Mt;Mt=1;var F=Bt;Bt|=4,If.current=null,MS(i,a),j0(a,i),qy(Hc),cl=!!Vc,Hc=Vc=null,i.current=a,ES(a),Tt(),Bt=F,Mt=w,Ei.transition=_}else i.current=a;if(Kl&&(Kl=!1,Zr=i,$l=p),_=i.pendingLanes,_===0&&($r=null),Ve(a.stateNode),ii(i,yt()),s!==null)for(c=i.onRecoverableError,a=0;a<s.length;a++)p=s[a],c(p.value,{componentStack:p.stack,digest:p.digest});if(ql)throw ql=!1,i=Of,Of=null,i;return($l&1)!==0&&i.tag!==0&&go(),_=i.pendingLanes,(_&1)!==0?i===Bf?Ea++:(Ea=0,Bf=i):Ea=0,Yr(),null}function go(){if(Zr!==null){var i=Li($l),s=Ei.transition,a=Mt;try{if(Ei.transition=null,Mt=16>i?16:i,Zr===null)var c=!1;else{if(i=Zr,Zr=null,$l=0,(Bt&6)!==0)throw Error(t(331));var p=Bt;for(Bt|=4,$e=i.current;$e!==null;){var _=$e,w=_.child;if(($e.flags&16)!==0){var F=_.deletions;if(F!==null){for(var z=0;z<F.length;z++){var he=F[z];for($e=he;$e!==null;){var Ee=$e;switch(Ee.tag){case 0:case 11:case 15:ya(8,Ee,_)}var Te=Ee.child;if(Te!==null)Te.return=Ee,$e=Te;else for(;$e!==null;){Ee=$e;var Me=Ee.sibling,Ye=Ee.return;if(H0(Ee),Ee===he){$e=null;break}if(Me!==null){Me.return=Ye,$e=Me;break}$e=Ye}}}var Je=_.alternate;if(Je!==null){var it=Je.child;if(it!==null){Je.child=null;do{var gn=it.sibling;it.sibling=null,it=gn}while(it!==null)}}$e=_}}if((_.subtreeFlags&2064)!==0&&w!==null)w.return=_,$e=w;else e:for(;$e!==null;){if(_=$e,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:ya(9,_,_.return)}var ie=_.sibling;if(ie!==null){ie.return=_.return,$e=ie;break e}$e=_.return}}var q=i.current;for($e=q;$e!==null;){w=$e;var le=w.child;if((w.subtreeFlags&2064)!==0&&le!==null)le.return=w,$e=le;else e:for(w=q;$e!==null;){if(F=$e,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:Xl(9,F)}}catch(st){dn(F,F.return,st)}if(F===w){$e=null;break e}var Re=F.sibling;if(Re!==null){Re.return=F.return,$e=Re;break e}$e=F.return}}if(Bt=p,Yr(),J&&typeof J.onPostCommitFiberRoot=="function")try{J.onPostCommitFiberRoot(ne,i)}catch{}c=!0}return c}finally{Mt=a,Ei.transition=s}}return!1}function rg(i,s,a){s=fo(a,s),s=M0(i,s,1),i=qr(i,s,1),s=qn(),i!==null&&(mn(i,1,s),ii(i,s))}function dn(i,s,a){if(i.tag===3)rg(i,i,a);else for(;s!==null;){if(s.tag===3){rg(s,i,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&($r===null||!$r.has(c))){i=fo(a,i),i=E0(s,i,1),s=qr(s,i,1),i=qn(),s!==null&&(mn(s,1,i),ii(s,i));break}}s=s.return}}function bS(i,s,a){var c=i.pingCache;c!==null&&c.delete(s),s=qn(),i.pingedLanes|=i.suspendedLanes&a,bn===i&&(Nn&a)===a&&(En===4||En===3&&(Nn&130023424)===Nn&&500>yt()-Ff?As(i,0):Uf|=a),ii(i,s)}function sg(i,s){s===0&&((i.mode&1)===0?s=1:(s=St,St<<=1,(St&130023424)===0&&(St=4194304)));var a=qn();i=Sr(i,s),i!==null&&(mn(i,s,a),ii(i,a))}function PS(i){var s=i.memoizedState,a=0;s!==null&&(a=s.retryLane),sg(i,a)}function DS(i,s){var a=0;switch(i.tag){case 13:var c=i.stateNode,p=i.memoizedState;p!==null&&(a=p.retryLane);break;case 19:c=i.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),sg(i,a)}var og;og=function(i,s,a){if(i!==null)if(i.memoizedProps!==s.pendingProps||Jn.current)ti=!0;else{if((i.lanes&a)===0&&(s.flags&128)===0)return ti=!1,_S(i,s,a);ti=(i.flags&131072)!==0}else ti=!1,sn&&(s.flags&1048576)!==0&&km(s,Cl,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;Gl(i,s),i=s.pendingProps;var p=io(s,Bn.current);uo(s,a),p=hf(null,s,c,i,p,a);var _=pf();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,ei(c)?(_=!0,wl(s)):_=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,of(s),p.updater=Vl,s.stateNode=p,p._reactInternals=s,yf(s,c,i,a),s=Tf(null,s,c,!0,_,a)):(s.tag=0,sn&&_&&Kc(s),jn(null,s,p,a),s=s.child),s;case 16:c=s.elementType;e:{switch(Gl(i,s),i=s.pendingProps,p=c._init,c=p(c._payload),s.type=c,p=s.tag=NS(c),i=Bi(c,i),p){case 0:s=Ef(null,s,c,i,a);break e;case 1:s=L0(null,s,c,i,a);break e;case 11:s=R0(null,s,c,i,a);break e;case 14:s=C0(null,s,c,Bi(c.type,i),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:Bi(c,p),Ef(i,s,c,p,a);case 1:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:Bi(c,p),L0(i,s,c,p,a);case 3:e:{if(N0(s),i===null)throw Error(t(387));c=s.pendingProps,_=s.memoizedState,p=_.element,qm(i,s),Il(s,c,null,a);var w=s.memoizedState;if(c=w.element,_.isDehydrated)if(_={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){p=fo(Error(t(423)),s),s=I0(i,s,c,a,p);break e}else if(c!==p){p=fo(Error(t(424)),s),s=I0(i,s,c,a,p);break e}else for(fi=Gr(s.stateNode.containerInfo.firstChild),ci=s,sn=!0,Oi=null,a=Ym(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(oo(),c===p){s=Er(i,s,a);break e}jn(i,s,c,a)}s=s.child}return s;case 5:return Zm(s),i===null&&Qc(s),c=s.type,p=s.pendingProps,_=i!==null?i.memoizedProps:null,w=p.children,Gc(c,p)?w=null:_!==null&&Gc(c,_)&&(s.flags|=32),D0(i,s),jn(i,s,w,a),s.child;case 6:return i===null&&Qc(s),null;case 13:return U0(i,s,a);case 4:return af(s,s.stateNode.containerInfo),c=s.pendingProps,i===null?s.child=ao(s,null,c,a):jn(i,s,c,a),s.child;case 11:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:Bi(c,p),R0(i,s,c,p,a);case 7:return jn(i,s,s.pendingProps,a),s.child;case 8:return jn(i,s,s.pendingProps.children,a),s.child;case 12:return jn(i,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,p=s.pendingProps,_=s.memoizedProps,w=p.value,$t(Dl,c._currentValue),c._currentValue=w,_!==null)if(Fi(_.value,w)){if(_.children===p.children&&!Jn.current){s=Er(i,s,a);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var F=_.dependencies;if(F!==null){w=_.child;for(var z=F.firstContext;z!==null;){if(z.context===c){if(_.tag===1){z=Mr(-1,a&-a),z.tag=2;var he=_.updateQueue;if(he!==null){he=he.shared;var Ee=he.pending;Ee===null?z.next=z:(z.next=Ee.next,Ee.next=z),he.pending=z}}_.lanes|=a,z=_.alternate,z!==null&&(z.lanes|=a),rf(_.return,a,s),F.lanes|=a;break}z=z.next}}else if(_.tag===10)w=_.type===s.type?null:_.child;else if(_.tag===18){if(w=_.return,w===null)throw Error(t(341));w.lanes|=a,F=w.alternate,F!==null&&(F.lanes|=a),rf(w,a,s),w=_.sibling}else w=_.child;if(w!==null)w.return=_;else for(w=_;w!==null;){if(w===s){w=null;break}if(_=w.sibling,_!==null){_.return=w.return,w=_;break}w=w.return}_=w}jn(i,s,p.children,a),s=s.child}return s;case 9:return p=s.type,c=s.pendingProps.children,uo(s,a),p=Si(p),c=c(p),s.flags|=1,jn(i,s,c,a),s.child;case 14:return c=s.type,p=Bi(c,s.pendingProps),p=Bi(c.type,p),C0(i,s,c,p,a);case 15:return b0(i,s,s.type,s.pendingProps,a);case 17:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:Bi(c,p),Gl(i,s),s.tag=1,ei(c)?(i=!0,wl(s)):i=!1,uo(s,a),y0(s,c,p),yf(s,c,p,a),Tf(null,s,c,!0,i,a);case 19:return O0(i,s,a);case 22:return P0(i,s,a)}throw Error(t(156,s.tag))};function ag(i,s){return be(i,s)}function LS(i,s,a,c){this.tag=i,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ti(i,s,a,c){return new LS(i,s,a,c)}function Wf(i){return i=i.prototype,!(!i||!i.isReactComponent)}function NS(i){if(typeof i=="function")return Wf(i)?1:0;if(i!=null){if(i=i.$$typeof,i===ee)return 11;if(i===te)return 14}return 2}function es(i,s){var a=i.alternate;return a===null?(a=Ti(i.tag,s,i.key,i.mode),a.elementType=i.elementType,a.type=i.type,a.stateNode=i.stateNode,a.alternate=i,i.alternate=a):(a.pendingProps=s,a.type=i.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=i.flags&14680064,a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,s=i.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=i.sibling,a.index=i.index,a.ref=i.ref,a}function eu(i,s,a,c,p,_){var w=2;if(c=i,typeof i=="function")Wf(i)&&(w=1);else if(typeof i=="string")w=5;else e:switch(i){case U:return Cs(a.children,p,_,s);case x:w=8,p|=8;break;case L:return i=Ti(12,a,s,p|2),i.elementType=L,i.lanes=_,i;case Z:return i=Ti(13,a,s,p),i.elementType=Z,i.lanes=_,i;case H:return i=Ti(19,a,s,p),i.elementType=H,i.lanes=_,i;case j:return tu(a,p,_,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case B:w=10;break e;case V:w=9;break e;case ee:w=11;break e;case te:w=14;break e;case me:w=16,c=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=Ti(w,a,s,p),s.elementType=i,s.type=c,s.lanes=_,s}function Cs(i,s,a,c){return i=Ti(7,i,c,s),i.lanes=a,i}function tu(i,s,a,c){return i=Ti(22,i,c,s),i.elementType=j,i.lanes=a,i.stateNode={isHidden:!1},i}function Xf(i,s,a){return i=Ti(6,i,null,s),i.lanes=a,i}function Yf(i,s,a){return s=Ti(4,i.children!==null?i.children:[],i.key,s),s.lanes=a,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function IS(i,s,a,c,p){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xe(0),this.expirationTimes=Xe(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xe(0),this.identifierPrefix=c,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function jf(i,s,a,c,p,_,w,F,z){return i=new IS(i,s,a,F,z),s===1?(s=1,_===!0&&(s|=8)):s=0,_=Ti(3,null,null,s),i.current=_,_.stateNode=i,_.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},of(_),i}function US(i,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:c==null?null:""+c,children:i,containerInfo:s,implementation:a}}function lg(i){if(!i)return Xr;i=i._reactInternals;e:{if(Rn(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(ei(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var a=i.type;if(ei(a))return Fm(i,a,s)}return s}function ug(i,s,a,c,p,_,w,F,z){return i=jf(a,c,!0,i,p,_,w,F,z),i.context=lg(null),a=i.current,c=qn(),p=Qr(a),_=Mr(c,p),_.callback=s??null,qr(a,_,p),i.current.lanes=p,mn(i,p,c),ii(i,c),i}function nu(i,s,a,c){var p=s.current,_=qn(),w=Qr(p);return a=lg(a),s.context===null?s.context=a:s.pendingContext=a,s=Mr(_,w),s.payload={element:i},c=c===void 0?null:c,c!==null&&(s.callback=c),i=qr(p,s,w),i!==null&&(Vi(i,p,w,_),Nl(i,p,w)),w}function iu(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function cg(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var a=i.retryLane;i.retryLane=a!==0&&a<s?a:s}}function qf(i,s){cg(i,s),(i=i.alternate)&&cg(i,s)}function FS(){return null}var fg=typeof reportError=="function"?reportError:function(i){console.error(i)};function Kf(i){this._internalRoot=i}ru.prototype.render=Kf.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));nu(i,s,null,null)},ru.prototype.unmount=Kf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;ws(function(){nu(null,i,null,null)}),s[vr]=null}};function ru(i){this._internalRoot=i}ru.prototype.unstable_scheduleHydration=function(i){if(i){var s=Ni();i={blockedOn:null,target:i,priority:s};for(var a=0;a<zr.length&&s!==0&&s<zr[a].priority;a++);zr.splice(a,0,i),a===0&&Zp(i)}};function $f(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function su(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function dg(){}function OS(i,s,a,c,p){if(p){if(typeof c=="function"){var _=c;c=function(){var he=iu(w);_.call(he)}}var w=ug(s,c,i,0,null,!1,!1,"",dg);return i._reactRootContainer=w,i[vr]=w.current,aa(i.nodeType===8?i.parentNode:i),ws(),w}for(;p=i.lastChild;)i.removeChild(p);if(typeof c=="function"){var F=c;c=function(){var he=iu(z);F.call(he)}}var z=jf(i,0,!1,null,null,!1,!1,"",dg);return i._reactRootContainer=z,i[vr]=z.current,aa(i.nodeType===8?i.parentNode:i),ws(function(){nu(s,z,a,c)}),z}function ou(i,s,a,c,p){var _=a._reactRootContainer;if(_){var w=_;if(typeof p=="function"){var F=p;p=function(){var z=iu(w);F.call(z)}}nu(s,w,i,p)}else w=OS(a,s,i,p,c);return iu(w)}gr=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var a=Ke(s.pendingLanes);a!==0&&(On(s,a|1),ii(s,yt()),(Bt&6)===0&&(mo=yt()+500,Yr()))}break;case 13:ws(function(){var c=Sr(i,1);if(c!==null){var p=qn();Vi(c,i,1,p)}}),qf(i,1)}},zt=function(i){if(i.tag===13){var s=Sr(i,134217728);if(s!==null){var a=qn();Vi(s,i,134217728,a)}qf(i,134217728)}},rn=function(i){if(i.tag===13){var s=Qr(i),a=Sr(i,s);if(a!==null){var c=qn();Vi(a,i,s,c)}qf(i,s)}},Ni=function(){return Mt},Yt=function(i,s){var a=Mt;try{return Mt=i,s()}finally{Mt=a}},ot=function(i,s,a){switch(s){case"input":if(_t(i,a),s=a.name,a.type==="radio"&&s!=null){for(a=i;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==i&&c.form===i.form){var p=El(c);if(!p)throw Error(t(90));ze(c),_t(c,p)}}}break;case"textarea":nn(i,a);break;case"select":s=a.value,s!=null&&Ft(i,!!a.multiple,s,!1)}},Be=Vf,Se=ws;var BS={usingClientEntryPoint:!1,Events:[ca,to,El,_e,Ne,Vf]},Ta={findFiberByHostInstance:vs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kS={bundleType:Ta.bundleType,version:Ta.version,rendererPackageName:Ta.rendererPackageName,rendererConfig:Ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=de(i),i===null?null:i.stateNode},findFiberByHostInstance:Ta.findFiberByHostInstance||FS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var au=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!au.isDisabled&&au.supportsFiber)try{ne=au.inject(kS),J=au}catch{}}return ri.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BS,ri.createPortal=function(i,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$f(s))throw Error(t(200));return US(i,s,null,a)},ri.createRoot=function(i,s){if(!$f(i))throw Error(t(299));var a=!1,c="",p=fg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=jf(i,1,!1,null,null,a,!1,c,p),i[vr]=s.current,aa(i.nodeType===8?i.parentNode:i),new Kf(s)},ri.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=de(s),i=i===null?null:i.stateNode,i},ri.flushSync=function(i){return ws(i)},ri.hydrate=function(i,s,a){if(!su(s))throw Error(t(200));return ou(null,i,s,!0,a)},ri.hydrateRoot=function(i,s,a){if(!$f(i))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,p=!1,_="",w=fg;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(_=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),s=ug(s,null,i,1,a??null,p,!1,_,w),i[vr]=s.current,aa(i),c)for(i=0;i<c.length;i++)a=c[i],p=a._getVersion,p=p(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,p]:s.mutableSourceEagerHydrationData.push(a,p);return new ru(s)},ri.render=function(i,s,a){if(!su(s))throw Error(t(200));return ou(null,i,s,!1,a)},ri.unmountComponentAtNode=function(i){if(!su(i))throw Error(t(40));return i._reactRootContainer?(ws(function(){ou(null,null,i,!1,function(){i._reactRootContainer=null,i[vr]=null})}),!0):!1},ri.unstable_batchedUpdates=Vf,ri.unstable_renderSubtreeIntoContainer=function(i,s,a,c){if(!su(a))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return ou(i,s,a,!1,c)},ri.version="18.3.1-next-f1338f8080-20240426",ri}var yg;function jS(){if(yg)return Jf.exports;yg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Jf.exports=YS(),Jf.exports}var Sg;function qS(){if(Sg)return lu;Sg=1;var n=jS();return lu.createRoot=n.createRoot,lu.hydrateRoot=n.hydrateRoot,lu}var KS=qS();const $S=B_(KS),k_=Oe.createContext(null);function ZS(){return typeof window>"u"?"dark":document.documentElement.getAttribute("data-theme")||"dark"}function QS({children:n}){const[e,t]=Oe.useState(ZS);Oe.useEffect(()=>{document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e)},[e]);const r=()=>t(o=>o==="dark"?"light":"dark");return re.jsx(k_.Provider,{value:{theme:e,toggleTheme:r,setTheme:t},children:n})}function z_(){const n=Oe.useContext(k_);if(!n)throw new Error("useTheme must be used within ThemeProvider");return n}const ep=Oe.createContext({});function tp(n){const e=Oe.useRef(null);return e.current===null&&(e.current=n()),e.current}const fc=Oe.createContext(null),np=Oe.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class JS extends Oe.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function eM({children:n,isPresent:e}){const t=Oe.useId(),r=Oe.useRef(null),o=Oe.useRef({width:0,height:0,top:0,left:0}),{nonce:l}=Oe.useContext(np);return Oe.useInsertionEffect(()=>{const{width:u,height:f,top:d,left:h}=o.current;if(e||!r.current||!u||!f)return;r.current.dataset.motionPopId=t;const m=document.createElement("style");return l&&(m.nonce=l),document.head.appendChild(m),m.sheet&&m.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${f}px !important;
            top: ${d}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(m)}},[e]),re.jsx(JS,{isPresent:e,childRef:r,sizeRef:o,children:Oe.cloneElement(n,{ref:r})})}const tM=({children:n,initial:e,isPresent:t,onExitComplete:r,custom:o,presenceAffectsLayout:l,mode:u})=>{const f=tp(nM),d=Oe.useId(),h=Oe.useCallback(v=>{f.set(v,!0);for(const g of f.values())if(!g)return;r&&r()},[f,r]),m=Oe.useMemo(()=>({id:d,initial:e,isPresent:t,custom:o,onExitComplete:h,register:v=>(f.set(v,!1),()=>f.delete(v))}),l?[Math.random(),h]:[t,h]);return Oe.useMemo(()=>{f.forEach((v,g)=>f.set(g,!1))},[t]),Oe.useEffect(()=>{!t&&!f.size&&r&&r()},[t]),u==="popLayout"&&(n=re.jsx(eM,{isPresent:t,children:n})),re.jsx(fc.Provider,{value:m,children:n})};function nM(){return new Map}function V_(n=!0){const e=Oe.useContext(fc);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,l=Oe.useId();Oe.useEffect(()=>{n&&o(l)},[n]);const u=Oe.useCallback(()=>n&&r&&r(l),[l,r,n]);return!t&&r?[!1,u]:[!0]}const uu=n=>n.key||"";function Mg(n){const e=[];return Oe.Children.forEach(n,t=>{Oe.isValidElement(t)&&e.push(t)}),e}const ip=typeof window<"u",H_=ip?Oe.useLayoutEffect:Oe.useEffect,Eg=({children:n,custom:e,initial:t=!0,onExitComplete:r,presenceAffectsLayout:o=!0,mode:l="sync",propagate:u=!1})=>{const[f,d]=V_(u),h=Oe.useMemo(()=>Mg(n),[n]),m=u&&!f?[]:h.map(uu),v=Oe.useRef(!0),g=Oe.useRef(h),S=tp(()=>new Map),[T,R]=Oe.useState(h),[M,y]=Oe.useState(h);H_(()=>{v.current=!1,g.current=h;for(let C=0;C<M.length;C++){const b=uu(M[C]);m.includes(b)?S.delete(b):S.get(b)!==!0&&S.set(b,!1)}},[M,m.length,m.join("-")]);const P=[];if(h!==T){let C=[...h];for(let b=0;b<M.length;b++){const D=M[b],U=uu(D);m.includes(U)||(C.splice(b,0,D),P.push(D))}l==="wait"&&P.length&&(C=P),y(Mg(C)),R(h);return}const{forceRender:O}=Oe.useContext(ep);return re.jsx(re.Fragment,{children:M.map(C=>{const b=uu(C),D=u&&!f?!1:h===M||m.includes(b),U=()=>{if(S.has(b))S.set(b,!0);else return;let x=!0;S.forEach(L=>{L||(x=!1)}),x&&(O==null||O(),y(g.current),u&&(d==null||d()),r&&r())};return re.jsx(tM,{isPresent:D,initial:!v.current||t?void 0:!1,custom:D?void 0:e,presenceAffectsLayout:o,mode:l,onExitComplete:D?void 0:U,children:C},b)})})},mi=n=>n;let G_=mi;function rp(n){let e;return()=>(e===void 0&&(e=n()),e)}const ko=(n,e,t)=>{const r=e-n;return r===0?1:(t-n)/r},Dr=n=>n*1e3,Lr=n=>n/1e3,iM={useManualTiming:!1};function rM(n){let e=new Set,t=new Set,r=!1,o=!1;const l=new WeakSet;let u={delta:0,timestamp:0,isProcessing:!1};function f(h){l.has(h)&&(d.schedule(h),n()),h(u)}const d={schedule:(h,m=!1,v=!1)=>{const S=v&&r?e:t;return m&&l.add(h),S.has(h)||S.add(h),h},cancel:h=>{t.delete(h),l.delete(h)},process:h=>{if(u=h,r){o=!0;return}r=!0,[e,t]=[t,e],e.forEach(f),e.clear(),r=!1,o&&(o=!1,d.process(h))}};return d}const cu=["read","resolveKeyframes","update","preRender","render","postRender"],sM=40;function W_(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>t=!0,u=cu.reduce((y,P)=>(y[P]=rM(l),y),{}),{read:f,resolveKeyframes:d,update:h,preRender:m,render:v,postRender:g}=u,S=()=>{const y=performance.now();t=!1,o.delta=r?1e3/60:Math.max(Math.min(y-o.timestamp,sM),1),o.timestamp=y,o.isProcessing=!0,f.process(o),d.process(o),h.process(o),m.process(o),v.process(o),g.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(S))},T=()=>{t=!0,r=!0,o.isProcessing||n(S)};return{schedule:cu.reduce((y,P)=>{const O=u[P];return y[P]=(C,b=!1,D=!1)=>(t||T(),O.schedule(C,b,D)),y},{}),cancel:y=>{for(let P=0;P<cu.length;P++)u[cu[P]].cancel(y)},state:o,steps:u}}const{schedule:Jt,cancel:ds,state:In,steps:nd}=W_(typeof requestAnimationFrame<"u"?requestAnimationFrame:mi,!0),X_=Oe.createContext({strict:!1}),Tg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},zo={};for(const n in Tg)zo[n]={isEnabled:e=>Tg[n].some(t=>!!e[t])};function oM(n){for(const e in n)zo[e]={...zo[e],...n[e]}}const aM=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Ku(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||aM.has(n)}let Y_=n=>!Ku(n);function lM(n){n&&(Y_=e=>e.startsWith("on")?!Ku(e):n(e))}try{lM(require("@emotion/is-prop-valid").default)}catch{}function uM(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||(Y_(o)||t===!0&&Ku(o)||!e&&!Ku(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}function cM(n){if(typeof Proxy>"u")return n;const e=new Map,t=(...r)=>n(...r);return new Proxy(t,{get:(r,o)=>o==="create"?n:(e.has(o)||e.set(o,n(o)),e.get(o))})}const dc=Oe.createContext({});function Xa(n){return typeof n=="string"||Array.isArray(n)}function hc(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const sp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],op=["initial",...sp];function pc(n){return hc(n.animate)||op.some(e=>Xa(n[e]))}function j_(n){return!!(pc(n)||n.variants)}function fM(n,e){if(pc(n)){const{initial:t,animate:r}=n;return{initial:t===!1||Xa(t)?t:void 0,animate:Xa(r)?r:void 0}}return n.inherit!==!1?e:{}}function dM(n){const{initial:e,animate:t}=fM(n,Oe.useContext(dc));return Oe.useMemo(()=>({initial:e,animate:t}),[wg(e),wg(t)])}function wg(n){return Array.isArray(n)?n.join(" "):n}const hM=Symbol.for("motionComponentSymbol");function Do(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function pM(n,e,t){return Oe.useCallback(r=>{r&&n.onMount&&n.onMount(r),e&&(r?e.mount(r):e.unmount()),t&&(typeof t=="function"?t(r):Do(t)&&(t.current=r))},[e])}const ap=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),mM="framerAppearId",q_="data-"+ap(mM),{schedule:lp}=W_(queueMicrotask,!1),K_=Oe.createContext({});function gM(n,e,t,r,o){var l,u;const{visualElement:f}=Oe.useContext(dc),d=Oe.useContext(X_),h=Oe.useContext(fc),m=Oe.useContext(np).reducedMotion,v=Oe.useRef(null);r=r||d.renderer,!v.current&&r&&(v.current=r(n,{visualState:e,parent:f,props:t,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:m}));const g=v.current,S=Oe.useContext(K_);g&&!g.projection&&o&&(g.type==="html"||g.type==="svg")&&vM(v.current,t,o,S);const T=Oe.useRef(!1);Oe.useInsertionEffect(()=>{g&&T.current&&g.update(t,h)});const R=t[q_],M=Oe.useRef(!!R&&!(!((l=window.MotionHandoffIsComplete)===null||l===void 0)&&l.call(window,R))&&((u=window.MotionHasOptimisedAnimation)===null||u===void 0?void 0:u.call(window,R)));return H_(()=>{g&&(T.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),lp.render(g.render),M.current&&g.animationState&&g.animationState.animateChanges())}),Oe.useEffect(()=>{g&&(!M.current&&g.animationState&&g.animationState.animateChanges(),M.current&&(queueMicrotask(()=>{var y;(y=window.MotionHandoffMarkAsComplete)===null||y===void 0||y.call(window,R)}),M.current=!1))}),g}function vM(n,e,t,r){const{layoutId:o,layout:l,drag:u,dragConstraints:f,layoutScroll:d,layoutRoot:h}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:$_(n.parent)),n.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!u||f&&Do(f),visualElement:n,animationType:typeof l=="string"?l:"both",initialPromotionConfig:r,layoutScroll:d,layoutRoot:h})}function $_(n){if(n)return n.options.allowProjection!==!1?n.projection:$_(n.parent)}function _M({preloadedFeatures:n,createVisualElement:e,useRender:t,useVisualState:r,Component:o}){var l,u;n&&oM(n);function f(h,m){let v;const g={...Oe.useContext(np),...h,layoutId:xM(h)},{isStatic:S}=g,T=dM(h),R=r(h,S);if(!S&&ip){yM();const M=SM(g);v=M.MeasureLayout,T.visualElement=gM(o,R,g,e,M.ProjectionNode)}return re.jsxs(dc.Provider,{value:T,children:[v&&T.visualElement?re.jsx(v,{visualElement:T.visualElement,...g}):null,t(o,h,pM(R,T.visualElement,m),R,S,T.visualElement)]})}f.displayName=`motion.${typeof o=="string"?o:`create(${(u=(l=o.displayName)!==null&&l!==void 0?l:o.name)!==null&&u!==void 0?u:""})`}`;const d=Oe.forwardRef(f);return d[hM]=o,d}function xM({layoutId:n}){const e=Oe.useContext(ep).id;return e&&n!==void 0?e+"-"+n:n}function yM(n,e){Oe.useContext(X_).strict}function SM(n){const{drag:e,layout:t}=zo;if(!e&&!t)return{};const r={...e,...t};return{MeasureLayout:e!=null&&e.isEnabled(n)||t!=null&&t.isEnabled(n)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const MM=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function up(n){return typeof n!="string"||n.includes("-")?!1:!!(MM.indexOf(n)>-1||/[A-Z]/u.test(n))}function Ag(n){const e=[{},{}];return n==null||n.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function cp(n,e,t,r){if(typeof e=="function"){const[o,l]=Ag(r);e=e(t!==void 0?t:n.custom,o,l)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,l]=Ag(r);e=e(t!==void 0?t:n.custom,o,l)}return e}const qd=n=>Array.isArray(n),EM=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),TM=n=>qd(n)?n[n.length-1]||0:n,Xn=n=>!!(n&&n.getVelocity);function ku(n){const e=Xn(n)?n.get():n;return EM(e)?e.toValue():e}function wM({scrapeMotionValuesFromProps:n,createRenderState:e,onUpdate:t},r,o,l){const u={latestValues:AM(r,o,l,n),renderState:e()};return t&&(u.onMount=f=>t({props:r,current:f,...u}),u.onUpdate=f=>t(f)),u}const Z_=n=>(e,t)=>{const r=Oe.useContext(dc),o=Oe.useContext(fc),l=()=>wM(n,e,r,o);return t?l():tp(l)};function AM(n,e,t,r){const o={},l=r(n,{});for(const g in l)o[g]=ku(l[g]);let{initial:u,animate:f}=n;const d=pc(n),h=j_(n);e&&h&&!d&&n.inherit!==!1&&(u===void 0&&(u=e.initial),f===void 0&&(f=e.animate));let m=t?t.initial===!1:!1;m=m||u===!1;const v=m?f:u;if(v&&typeof v!="boolean"&&!hc(v)){const g=Array.isArray(v)?v:[v];for(let S=0;S<g.length;S++){const T=cp(n,g[S]);if(T){const{transitionEnd:R,transition:M,...y}=T;for(const P in y){let O=y[P];if(Array.isArray(O)){const C=m?O.length-1:0;O=O[C]}O!==null&&(o[P]=O)}for(const P in R)o[P]=R[P]}}}return o}const Wo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Xs=new Set(Wo),Q_=n=>e=>typeof e=="string"&&e.startsWith(n),J_=Q_("--"),RM=Q_("var(--"),fp=n=>RM(n)?CM.test(n.split("/*")[0].trim()):!1,CM=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,e1=(n,e)=>e&&typeof n=="number"?e.transform(n):n,Fr=(n,e,t)=>t>e?e:t<n?n:t,Xo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Ya={...Xo,transform:n=>Fr(0,1,n)},fu={...Xo,default:1},el=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),ls=el("deg"),or=el("%"),ft=el("px"),bM=el("vh"),PM=el("vw"),Rg={...or,parse:n=>or.parse(n)/100,transform:n=>or.transform(n*100)},DM={borderWidth:ft,borderTopWidth:ft,borderRightWidth:ft,borderBottomWidth:ft,borderLeftWidth:ft,borderRadius:ft,radius:ft,borderTopLeftRadius:ft,borderTopRightRadius:ft,borderBottomRightRadius:ft,borderBottomLeftRadius:ft,width:ft,maxWidth:ft,height:ft,maxHeight:ft,top:ft,right:ft,bottom:ft,left:ft,padding:ft,paddingTop:ft,paddingRight:ft,paddingBottom:ft,paddingLeft:ft,margin:ft,marginTop:ft,marginRight:ft,marginBottom:ft,marginLeft:ft,backgroundPositionX:ft,backgroundPositionY:ft},LM={rotate:ls,rotateX:ls,rotateY:ls,rotateZ:ls,scale:fu,scaleX:fu,scaleY:fu,scaleZ:fu,skew:ls,skewX:ls,skewY:ls,distance:ft,translateX:ft,translateY:ft,translateZ:ft,x:ft,y:ft,z:ft,perspective:ft,transformPerspective:ft,opacity:Ya,originX:Rg,originY:Rg,originZ:ft},Cg={...Xo,transform:Math.round},dp={...DM,...LM,zIndex:Cg,size:ft,fillOpacity:Ya,strokeOpacity:Ya,numOctaves:Cg},NM={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},IM=Wo.length;function UM(n,e,t){let r="",o=!0;for(let l=0;l<IM;l++){const u=Wo[l],f=n[u];if(f===void 0)continue;let d=!0;if(typeof f=="number"?d=f===(u.startsWith("scale")?1:0):d=parseFloat(f)===0,!d||t){const h=e1(f,dp[u]);if(!d){o=!1;const m=NM[u]||u;r+=`${m}(${h}) `}t&&(e[u]=h)}}return r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function hp(n,e,t){const{style:r,vars:o,transformOrigin:l}=n;let u=!1,f=!1;for(const d in e){const h=e[d];if(Xs.has(d)){u=!0;continue}else if(J_(d)){o[d]=h;continue}else{const m=e1(h,dp[d]);d.startsWith("origin")?(f=!0,l[d]=m):r[d]=m}}if(e.transform||(u||t?r.transform=UM(e,n.transform,t):r.transform&&(r.transform="none")),f){const{originX:d="50%",originY:h="50%",originZ:m=0}=l;r.transformOrigin=`${d} ${h} ${m}`}}const FM={offset:"stroke-dashoffset",array:"stroke-dasharray"},OM={offset:"strokeDashoffset",array:"strokeDasharray"};function BM(n,e,t=1,r=0,o=!0){n.pathLength=1;const l=o?FM:OM;n[l.offset]=ft.transform(-r);const u=ft.transform(e),f=ft.transform(t);n[l.array]=`${u} ${f}`}function bg(n,e,t){return typeof n=="string"?n:ft.transform(e+t*n)}function kM(n,e,t){const r=bg(e,n.x,n.width),o=bg(t,n.y,n.height);return`${r} ${o}`}function pp(n,{attrX:e,attrY:t,attrScale:r,originX:o,originY:l,pathLength:u,pathSpacing:f=1,pathOffset:d=0,...h},m,v){if(hp(n,h,v),m){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:g,style:S,dimensions:T}=n;g.transform&&(T&&(S.transform=g.transform),delete g.transform),T&&(o!==void 0||l!==void 0||S.transform)&&(S.transformOrigin=kM(T,o!==void 0?o:.5,l!==void 0?l:.5)),e!==void 0&&(g.x=e),t!==void 0&&(g.y=t),r!==void 0&&(g.scale=r),u!==void 0&&BM(g,u,f,d,!1)}const mp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),t1=()=>({...mp(),attrs:{}}),gp=n=>typeof n=="string"&&n.toLowerCase()==="svg";function n1(n,{style:e,vars:t},r,o){Object.assign(n.style,e,o&&o.getProjectionStyles(r));for(const l in t)n.style.setProperty(l,t[l])}const i1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function r1(n,e,t,r){n1(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(i1.has(o)?o:ap(o),e.attrs[o])}const $u={};function zM(n){Object.assign($u,n)}function s1(n,{layout:e,layoutId:t}){return Xs.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!$u[n]||n==="opacity")}function vp(n,e,t){var r;const{style:o}=n,l={};for(const u in o)(Xn(o[u])||e.style&&Xn(e.style[u])||s1(u,n)||((r=t==null?void 0:t.getValue(u))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(l[u]=o[u]);return l}function o1(n,e,t){const r=vp(n,e,t);for(const o in n)if(Xn(n[o])||Xn(e[o])){const l=Wo.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[l]=n[o]}return r}function VM(n,e){try{e.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const Pg=["x","y","width","height","cx","cy","r"],HM={useVisualState:Z_({scrapeMotionValuesFromProps:o1,createRenderState:t1,onUpdate:({props:n,prevProps:e,current:t,renderState:r,latestValues:o})=>{if(!t)return;let l=!!n.drag;if(!l){for(const f in o)if(Xs.has(f)){l=!0;break}}if(!l)return;let u=!e;if(e)for(let f=0;f<Pg.length;f++){const d=Pg[f];n[d]!==e[d]&&(u=!0)}u&&Jt.read(()=>{VM(t,r),Jt.render(()=>{pp(r,o,gp(t.tagName),n.transformTemplate),r1(t,r)})})}})},GM={useVisualState:Z_({scrapeMotionValuesFromProps:vp,createRenderState:mp})};function a1(n,e,t){for(const r in e)!Xn(e[r])&&!s1(r,t)&&(n[r]=e[r])}function WM({transformTemplate:n},e){return Oe.useMemo(()=>{const t=mp();return hp(t,e,n),Object.assign({},t.vars,t.style)},[e])}function XM(n,e){const t=n.style||{},r={};return a1(r,t,n),Object.assign(r,WM(n,e)),r}function YM(n,e){const t={},r=XM(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}function jM(n,e,t,r){const o=Oe.useMemo(()=>{const l=t1();return pp(l,e,gp(r),n.transformTemplate),{...l.attrs,style:{...l.style}}},[e]);if(n.style){const l={};a1(l,n.style,n),o.style={...l,...o.style}}return o}function qM(n=!1){return(t,r,o,{latestValues:l},u)=>{const d=(up(t)?jM:YM)(r,l,u,t),h=uM(r,typeof t=="string",n),m=t!==Oe.Fragment?{...h,...d,ref:o}:{},{children:v}=r,g=Oe.useMemo(()=>Xn(v)?v.get():v,[v]);return Oe.createElement(t,{...m,children:g})}}function KM(n,e){return function(r,{forwardMotionProps:o}={forwardMotionProps:!1}){const u={...up(r)?HM:GM,preloadedFeatures:n,useRender:qM(o),createVisualElement:e,Component:r};return _M(u)}}function l1(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}function mc(n,e,t){const r=n.getProps();return cp(r,e,t!==void 0?t:r.custom,n)}const $M=rp(()=>window.ScrollTimeline!==void 0);class ZM{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let r=0;r<this.animations.length;r++)this.animations[r][e]=t}attachTimeline(e,t){const r=this.animations.map(o=>{if($M()&&o.attachTimeline)return o.attachTimeline(e);if(typeof t=="function")return t(o)});return()=>{r.forEach((o,l)=>{o&&o(),this.animations[l].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class QM extends ZM{then(e,t){return Promise.all(this.animations).then(e).catch(t)}}function _p(n,e){return n?n[e]||n.default||n:void 0}const Kd=2e4;function u1(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<Kd;)e+=t,r=n.next(e);return e>=Kd?1/0:e}function xp(n){return typeof n=="function"}function Dg(n,e){n.timeline=e,n.onfinish=null}const yp=n=>Array.isArray(n)&&typeof n[0]=="number",JM={linearEasing:void 0};function eE(n,e){const t=rp(n);return()=>{var r;return(r=JM[e])!==null&&r!==void 0?r:t()}}const Zu=eE(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),c1=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let l=0;l<o;l++)r+=n(ko(0,o-1,l))+", ";return`linear(${r.substring(0,r.length-2)})`};function f1(n){return!!(typeof n=="function"&&Zu()||!n||typeof n=="string"&&(n in $d||Zu())||yp(n)||Array.isArray(n)&&n.every(f1))}const Ia=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,$d={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ia([0,.65,.55,1]),circOut:Ia([.55,0,1,.45]),backIn:Ia([.31,.01,.66,-.59]),backOut:Ia([.33,1.53,.69,.99])};function d1(n,e){if(n)return typeof n=="function"&&Zu()?c1(n,e):yp(n)?Ia(n):Array.isArray(n)?n.map(t=>d1(t,e)||$d.easeOut):$d[n]}const Xi={x:!1,y:!1};function h1(){return Xi.x||Xi.y}function tE(n,e,t){var r;if(n instanceof Element)return[n];if(typeof n=="string"){let o=document;const l=(r=void 0)!==null&&r!==void 0?r:o.querySelectorAll(n);return l?Array.from(l):[]}return Array.from(n)}function p1(n,e){const t=tE(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function Lg(n){return e=>{e.pointerType==="touch"||h1()||n(e)}}function nE(n,e,t={}){const[r,o,l]=p1(n,t),u=Lg(f=>{const{target:d}=f,h=e(f);if(typeof h!="function"||!d)return;const m=Lg(v=>{h(v),d.removeEventListener("pointerleave",m)});d.addEventListener("pointerleave",m,o)});return r.forEach(f=>{f.addEventListener("pointerenter",u,o)}),l}const m1=(n,e)=>e?n===e?!0:m1(n,e.parentElement):!1,Sp=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,iE=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function rE(n){return iE.has(n.tagName)||n.tabIndex!==-1}const Ua=new WeakSet;function Ng(n){return e=>{e.key==="Enter"&&n(e)}}function id(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const sE=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=Ng(()=>{if(Ua.has(t))return;id(t,"down");const o=Ng(()=>{id(t,"up")}),l=()=>id(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",l,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function Ig(n){return Sp(n)&&!h1()}function oE(n,e,t={}){const[r,o,l]=p1(n,t),u=f=>{const d=f.currentTarget;if(!Ig(f)||Ua.has(d))return;Ua.add(d);const h=e(f),m=(S,T)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",g),!(!Ig(S)||!Ua.has(d))&&(Ua.delete(d),typeof h=="function"&&h(S,{success:T}))},v=S=>{m(S,t.useGlobalTarget||m1(d,S.target))},g=S=>{m(S,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",g,o)};return r.forEach(f=>{!rE(f)&&f.getAttribute("tabindex")===null&&(f.tabIndex=0),(t.useGlobalTarget?window:f).addEventListener("pointerdown",u,o),f.addEventListener("focus",h=>sE(h,o),o)}),l}function aE(n){return n==="x"||n==="y"?Xi[n]?null:(Xi[n]=!0,()=>{Xi[n]=!1}):Xi.x||Xi.y?null:(Xi.x=Xi.y=!0,()=>{Xi.x=Xi.y=!1})}const g1=new Set(["width","height","top","left","right","bottom",...Wo]);let zu;function lE(){zu=void 0}const ar={now:()=>(zu===void 0&&ar.set(In.isProcessing||iM.useManualTiming?In.timestamp:performance.now()),zu),set:n=>{zu=n,queueMicrotask(lE)}};function Mp(n,e){n.indexOf(e)===-1&&n.push(e)}function Ep(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}class Tp{constructor(){this.subscriptions=[]}add(e){return Mp(this.subscriptions,e),()=>Ep(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let l=0;l<o;l++){const u=this.subscriptions[l];u&&u(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function v1(n,e){return e?n*(1e3/e):0}const Ug=30,uE=n=>!isNaN(parseFloat(n));class cE{constructor(e,t={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,o=!0)=>{const l=ar.now();this.updatedAt!==l&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=ar.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=uE(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Tp);const r=this.events[e].add(t);return e==="change"?()=>{r(),Jt.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=ar.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Ug)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,Ug);return v1(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ja(n,e){return new cE(n,e)}function fE(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,ja(t))}function dE(n,e){const t=mc(n,e);let{transitionEnd:r={},transition:o={},...l}=t||{};l={...l,...r};for(const u in l){const f=TM(l[u]);fE(n,u,f)}}function hE(n){return!!(Xn(n)&&n.add)}function Zd(n,e){const t=n.getValue("willChange");if(hE(t))return t.add(e)}function _1(n){return n.props[q_]}const x1=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,pE=1e-7,mE=12;function gE(n,e,t,r,o){let l,u,f=0;do u=e+(t-e)/2,l=x1(u,r,o)-n,l>0?t=u:e=u;while(Math.abs(l)>pE&&++f<mE);return u}function tl(n,e,t,r){if(n===e&&t===r)return mi;const o=l=>gE(l,0,1,n,t);return l=>l===0||l===1?l:x1(o(l),e,r)}const y1=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,S1=n=>e=>1-n(1-e),M1=tl(.33,1.53,.69,.99),wp=S1(M1),E1=y1(wp),T1=n=>(n*=2)<1?.5*wp(n):.5*(2-Math.pow(2,-10*(n-1))),Ap=n=>1-Math.sin(Math.acos(n)),w1=S1(Ap),A1=y1(Ap),R1=n=>/^0[^.\s]+$/u.test(n);function vE(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||R1(n):!0}const ka=n=>Math.round(n*1e5)/1e5,Rp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function _E(n){return n==null}const xE=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Cp=(n,e)=>t=>!!(typeof t=="string"&&xE.test(t)&&t.startsWith(n)||e&&!_E(t)&&Object.prototype.hasOwnProperty.call(t,e)),C1=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,l,u,f]=r.match(Rp);return{[n]:parseFloat(o),[e]:parseFloat(l),[t]:parseFloat(u),alpha:f!==void 0?parseFloat(f):1}},yE=n=>Fr(0,255,n),rd={...Xo,transform:n=>Math.round(yE(n))},Os={test:Cp("rgb","red"),parse:C1("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+rd.transform(n)+", "+rd.transform(e)+", "+rd.transform(t)+", "+ka(Ya.transform(r))+")"};function SE(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Qd={test:Cp("#"),parse:SE,transform:Os.transform},Lo={test:Cp("hsl","hue"),parse:C1("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+or.transform(ka(e))+", "+or.transform(ka(t))+", "+ka(Ya.transform(r))+")"},Wn={test:n=>Os.test(n)||Qd.test(n)||Lo.test(n),parse:n=>Os.test(n)?Os.parse(n):Lo.test(n)?Lo.parse(n):Qd.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Os.transform(n):Lo.transform(n)},ME=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function EE(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(Rp))===null||e===void 0?void 0:e.length)||0)+(((t=n.match(ME))===null||t===void 0?void 0:t.length)||0)>0}const b1="number",P1="color",TE="var",wE="var(",Fg="${}",AE=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function qa(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let l=0;const f=e.replace(AE,d=>(Wn.test(d)?(r.color.push(l),o.push(P1),t.push(Wn.parse(d))):d.startsWith(wE)?(r.var.push(l),o.push(TE),t.push(d)):(r.number.push(l),o.push(b1),t.push(parseFloat(d))),++l,Fg)).split(Fg);return{values:t,split:f,indexes:r,types:o}}function D1(n){return qa(n).values}function L1(n){const{split:e,types:t}=qa(n),r=e.length;return o=>{let l="";for(let u=0;u<r;u++)if(l+=e[u],o[u]!==void 0){const f=t[u];f===b1?l+=ka(o[u]):f===P1?l+=Wn.transform(o[u]):l+=o[u]}return l}}const RE=n=>typeof n=="number"?0:n;function CE(n){const e=D1(n);return L1(n)(e.map(RE))}const hs={test:EE,parse:D1,createTransformer:L1,getAnimatableNone:CE},bE=new Set(["brightness","contrast","saturate","opacity"]);function PE(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(Rp)||[];if(!r)return n;const o=t.replace(r,"");let l=bE.has(e)?1:0;return r!==t&&(l*=100),e+"("+l+o+")"}const DE=/\b([a-z-]*)\(.*?\)/gu,Jd={...hs,getAnimatableNone:n=>{const e=n.match(DE);return e?e.map(PE).join(" "):n}},LE={...dp,color:Wn,backgroundColor:Wn,outlineColor:Wn,fill:Wn,stroke:Wn,borderColor:Wn,borderTopColor:Wn,borderRightColor:Wn,borderBottomColor:Wn,borderLeftColor:Wn,filter:Jd,WebkitFilter:Jd},bp=n=>LE[n];function N1(n,e){let t=bp(n);return t!==Jd&&(t=hs),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const NE=new Set(["auto","none","0"]);function IE(n,e,t){let r=0,o;for(;r<n.length&&!o;){const l=n[r];typeof l=="string"&&!NE.has(l)&&qa(l).values.length&&(o=n[r]),r++}if(o&&t)for(const l of e)n[l]=N1(t,o)}const Og=n=>n===Xo||n===ft,Bg=(n,e)=>parseFloat(n.split(", ")[e]),kg=(n,e)=>(t,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/u);if(o)return Bg(o[1],e);{const l=r.match(/^matrix\((.+)\)$/u);return l?Bg(l[1],n):0}},UE=new Set(["x","y","z"]),FE=Wo.filter(n=>!UE.has(n));function OE(n){const e=[];return FE.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const Vo={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:kg(4,13),y:kg(5,14)};Vo.translateX=Vo.x;Vo.translateY=Vo.y;const zs=new Set;let eh=!1,th=!1;function I1(){if(th){const n=Array.from(zs).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=OE(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([l,u])=>{var f;(f=r.getValue(l))===null||f===void 0||f.set(u)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}th=!1,eh=!1,zs.forEach(n=>n.complete()),zs.clear()}function U1(){zs.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(th=!0)})}function BE(){U1(),I1()}class Pp{constructor(e,t,r,o,l,u=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=l,this.isAsync=u}scheduleResolve(){this.isScheduled=!0,this.isAsync?(zs.add(this),eh||(eh=!0,Jt.read(U1),Jt.resolveKeyframes(I1))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;for(let l=0;l<e.length;l++)if(e[l]===null)if(l===0){const u=o==null?void 0:o.get(),f=e[e.length-1];if(u!==void 0)e[0]=u;else if(r&&t){const d=r.readValue(t,f);d!=null&&(e[0]=d)}e[0]===void 0&&(e[0]=f),o&&u===void 0&&o.set(e[0])}else e[l]=e[l-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),zs.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,zs.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const F1=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),kE=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function zE(n){const e=kE.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function O1(n,e,t=1){const[r,o]=zE(n);if(!r)return;const l=window.getComputedStyle(e).getPropertyValue(r);if(l){const u=l.trim();return F1(u)?parseFloat(u):u}return fp(o)?O1(o,e,t+1):o}const B1=n=>e=>e.test(n),VE={test:n=>n==="auto",parse:n=>n},k1=[Xo,ft,or,ls,PM,bM,VE],zg=n=>k1.find(B1(n));class z1 extends Pp{constructor(e,t,r,o,l){super(e,t,r,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let h=e[d];if(typeof h=="string"&&(h=h.trim(),fp(h))){const m=O1(h,t.current);m!==void 0&&(e[d]=m),d===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!g1.has(r)||e.length!==2)return;const[o,l]=e,u=zg(o),f=zg(l);if(u!==f)if(Og(u)&&Og(f))for(let d=0;d<e.length;d++){const h=e[d];typeof h=="string"&&(e[d]=parseFloat(h))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)vE(e[o])&&r.push(o);r.length&&IE(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Vo[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var e;const{element:t,name:r,unresolvedKeyframes:o}=this;if(!t||!t.current)return;const l=t.getValue(r);l&&l.jump(this.measuredOrigin,!1);const u=o.length-1,f=o[u];o[u]=Vo[r](t.measureViewportBox(),window.getComputedStyle(t.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([d,h])=>{t.getValue(d).set(h)}),this.resolveNoneKeyframes()}}const Vg=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(hs.test(n)||n==="0")&&!n.startsWith("url("));function HE(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function GE(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const l=n[n.length-1],u=Vg(o,e),f=Vg(l,e);return!u||!f?!1:HE(n)||(t==="spring"||xp(t))&&r}const WE=n=>n!==null;function gc(n,{repeat:e,repeatType:t="loop"},r){const o=n.filter(WE),l=e&&t!=="loop"&&e%2===1?0:o.length-1;return!l||r===void 0?o[l]:r}const XE=40;class V1{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:u="loop",...f}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=ar.now(),this.options={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:l,repeatType:u,...f},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>XE?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&BE(),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=ar.now(),this.hasAttemptedResolve=!0;const{name:r,type:o,velocity:l,delay:u,onComplete:f,onUpdate:d,isGenerator:h}=this.options;if(!h&&!GE(e,r,o,l))if(u)this.options.duration=0;else{d&&d(gc(e,this.options,t)),f&&f(),this.resolveFinishedPromise();return}const m=this.initPlayback(e,t);m!==!1&&(this._resolved={keyframes:e,finalKeyframe:t,...m},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const un=(n,e,t)=>n+(e-n)*t;function sd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function YE({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,l=0,u=0;if(!e)o=l=u=t;else{const f=t<.5?t*(1+e):t+e-t*e,d=2*t-f;o=sd(d,f,n+1/3),l=sd(d,f,n),u=sd(d,f,n-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:r}}function Qu(n,e){return t=>t>0?e:n}const od=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},jE=[Qd,Os,Lo],qE=n=>jE.find(e=>e.test(n));function Hg(n){const e=qE(n);if(!e)return!1;let t=e.parse(n);return e===Lo&&(t=YE(t)),t}const Gg=(n,e)=>{const t=Hg(n),r=Hg(e);if(!t||!r)return Qu(n,e);const o={...t};return l=>(o.red=od(t.red,r.red,l),o.green=od(t.green,r.green,l),o.blue=od(t.blue,r.blue,l),o.alpha=un(t.alpha,r.alpha,l),Os.transform(o))},KE=(n,e)=>t=>e(n(t)),nl=(...n)=>n.reduce(KE),nh=new Set(["none","hidden"]);function $E(n,e){return nh.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function ZE(n,e){return t=>un(n,e,t)}function Dp(n){return typeof n=="number"?ZE:typeof n=="string"?fp(n)?Qu:Wn.test(n)?Gg:e2:Array.isArray(n)?H1:typeof n=="object"?Wn.test(n)?Gg:QE:Qu}function H1(n,e){const t=[...n],r=t.length,o=n.map((l,u)=>Dp(l)(l,e[u]));return l=>{for(let u=0;u<r;u++)t[u]=o[u](l);return t}}function QE(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=Dp(n[o])(n[o],e[o]));return o=>{for(const l in r)t[l]=r[l](o);return t}}function JE(n,e){var t;const r=[],o={color:0,var:0,number:0};for(let l=0;l<e.values.length;l++){const u=e.types[l],f=n.indexes[u][o[u]],d=(t=n.values[f])!==null&&t!==void 0?t:0;r[l]=d,o[u]++}return r}const e2=(n,e)=>{const t=hs.createTransformer(e),r=qa(n),o=qa(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?nh.has(n)&&!o.values.length||nh.has(e)&&!r.values.length?$E(n,e):nl(H1(JE(r,o),o.values),t):Qu(n,e)};function G1(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?un(n,e,t):Dp(n)(n,e)}const t2=5;function W1(n,e,t){const r=Math.max(e-t2,0);return v1(t-n(r),e-r)}const hn={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},ad=.001;function n2({duration:n=hn.duration,bounce:e=hn.bounce,velocity:t=hn.velocity,mass:r=hn.mass}){let o,l,u=1-e;u=Fr(hn.minDamping,hn.maxDamping,u),n=Fr(hn.minDuration,hn.maxDuration,Lr(n)),u<1?(o=h=>{const m=h*u,v=m*n,g=m-t,S=ih(h,u),T=Math.exp(-v);return ad-g/S*T},l=h=>{const v=h*u*n,g=v*t+t,S=Math.pow(u,2)*Math.pow(h,2)*n,T=Math.exp(-v),R=ih(Math.pow(h,2),u);return(-o(h)+ad>0?-1:1)*((g-S)*T)/R}):(o=h=>{const m=Math.exp(-h*n),v=(h-t)*n+1;return-ad+m*v},l=h=>{const m=Math.exp(-h*n),v=(t-h)*(n*n);return m*v});const f=5/n,d=r2(o,l,f);if(n=Dr(n),isNaN(d))return{stiffness:hn.stiffness,damping:hn.damping,duration:n};{const h=Math.pow(d,2)*r;return{stiffness:h,damping:u*2*Math.sqrt(r*h),duration:n}}}const i2=12;function r2(n,e,t){let r=t;for(let o=1;o<i2;o++)r=r-n(r)/e(r);return r}function ih(n,e){return n*Math.sqrt(1-e*e)}const s2=["duration","bounce"],o2=["stiffness","damping","mass"];function Wg(n,e){return e.some(t=>n[t]!==void 0)}function a2(n){let e={velocity:hn.velocity,stiffness:hn.stiffness,damping:hn.damping,mass:hn.mass,isResolvedFromDuration:!1,...n};if(!Wg(n,o2)&&Wg(n,s2))if(n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,l=2*Fr(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:hn.mass,stiffness:o,damping:l}}else{const t=n2(n);e={...e,...t,mass:hn.mass},e.isResolvedFromDuration=!0}return e}function X1(n=hn.visualDuration,e=hn.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const l=t.keyframes[0],u=t.keyframes[t.keyframes.length-1],f={done:!1,value:l},{stiffness:d,damping:h,mass:m,duration:v,velocity:g,isResolvedFromDuration:S}=a2({...t,velocity:-Lr(t.velocity||0)}),T=g||0,R=h/(2*Math.sqrt(d*m)),M=u-l,y=Lr(Math.sqrt(d/m)),P=Math.abs(M)<5;r||(r=P?hn.restSpeed.granular:hn.restSpeed.default),o||(o=P?hn.restDelta.granular:hn.restDelta.default);let O;if(R<1){const b=ih(y,R);O=D=>{const U=Math.exp(-R*y*D);return u-U*((T+R*y*M)/b*Math.sin(b*D)+M*Math.cos(b*D))}}else if(R===1)O=b=>u-Math.exp(-y*b)*(M+(T+y*M)*b);else{const b=y*Math.sqrt(R*R-1);O=D=>{const U=Math.exp(-R*y*D),x=Math.min(b*D,300);return u-U*((T+R*y*M)*Math.sinh(x)+b*M*Math.cosh(x))/b}}const C={calculatedDuration:S&&v||null,next:b=>{const D=O(b);if(S)f.done=b>=v;else{let U=0;R<1&&(U=b===0?Dr(T):W1(O,b,D));const x=Math.abs(U)<=r,L=Math.abs(u-D)<=o;f.done=x&&L}return f.value=f.done?u:D,f},toString:()=>{const b=Math.min(u1(C),Kd),D=c1(U=>C.next(b*U).value,b,30);return b+"ms "+D}};return C}function Xg({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:u,min:f,max:d,restDelta:h=.5,restSpeed:m}){const v=n[0],g={done:!1,value:v},S=x=>f!==void 0&&x<f||d!==void 0&&x>d,T=x=>f===void 0?d:d===void 0||Math.abs(f-x)<Math.abs(d-x)?f:d;let R=t*e;const M=v+R,y=u===void 0?M:u(M);y!==M&&(R=y-v);const P=x=>-R*Math.exp(-x/r),O=x=>y+P(x),C=x=>{const L=P(x),B=O(x);g.done=Math.abs(L)<=h,g.value=g.done?y:B};let b,D;const U=x=>{S(g.value)&&(b=x,D=X1({keyframes:[g.value,T(g.value)],velocity:W1(O,x,g.value),damping:o,stiffness:l,restDelta:h,restSpeed:m}))};return U(0),{calculatedDuration:null,next:x=>{let L=!1;return!D&&b===void 0&&(L=!0,C(x),U(x)),b!==void 0&&x>=b?D.next(x-b):(!L&&C(x),g)}}}const l2=tl(.42,0,1,1),u2=tl(0,0,.58,1),Y1=tl(.42,0,.58,1),c2=n=>Array.isArray(n)&&typeof n[0]!="number",f2={linear:mi,easeIn:l2,easeInOut:Y1,easeOut:u2,circIn:Ap,circInOut:A1,circOut:w1,backIn:wp,backInOut:E1,backOut:M1,anticipate:T1},Yg=n=>{if(yp(n)){G_(n.length===4);const[e,t,r,o]=n;return tl(e,t,r,o)}else if(typeof n=="string")return f2[n];return n};function d2(n,e,t){const r=[],o=t||G1,l=n.length-1;for(let u=0;u<l;u++){let f=o(n[u],n[u+1]);if(e){const d=Array.isArray(e)?e[u]||mi:e;f=nl(d,f)}r.push(f)}return r}function h2(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const l=n.length;if(G_(l===e.length),l===1)return()=>e[0];if(l===2&&e[0]===e[1])return()=>e[1];const u=n[0]===n[1];n[0]>n[l-1]&&(n=[...n].reverse(),e=[...e].reverse());const f=d2(e,r,o),d=f.length,h=m=>{if(u&&m<n[0])return e[0];let v=0;if(d>1)for(;v<n.length-2&&!(m<n[v+1]);v++);const g=ko(n[v],n[v+1],m);return f[v](g)};return t?m=>h(Fr(n[0],n[l-1],m)):h}function p2(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=ko(0,e,r);n.push(un(t,1,o))}}function m2(n){const e=[0];return p2(e,n.length-1),e}function g2(n,e){return n.map(t=>t*e)}function v2(n,e){return n.map(()=>e||Y1).splice(0,n.length-1)}function Ju({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=c2(r)?r.map(Yg):Yg(r),l={done:!1,value:e[0]},u=g2(t&&t.length===e.length?t:m2(e),n),f=h2(u,e,{ease:Array.isArray(o)?o:v2(e,o)});return{calculatedDuration:n,next:d=>(l.value=f(d),l.done=d>=n,l)}}const _2=n=>{const e=({timestamp:t})=>n(t);return{start:()=>Jt.update(e,!0),stop:()=>ds(e),now:()=>In.isProcessing?In.timestamp:ar.now()}},x2={decay:Xg,inertia:Xg,tween:Ju,keyframes:Ju,spring:X1},y2=n=>n/100;class Lp extends V1{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:d}=this.options;d&&d()};const{name:t,motionValue:r,element:o,keyframes:l}=this.options,u=(o==null?void 0:o.KeyframeResolver)||Pp,f=(d,h)=>this.onKeyframesResolved(d,h);this.resolver=new u(l,f,t,r,o),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:r=0,repeatDelay:o=0,repeatType:l,velocity:u=0}=this.options,f=xp(t)?t:x2[t]||Ju;let d,h;f!==Ju&&typeof e[0]!="number"&&(d=nl(y2,G1(e[0],e[1])),e=[0,100]);const m=f({...this.options,keyframes:e});l==="mirror"&&(h=f({...this.options,keyframes:[...e].reverse(),velocity:-u})),m.calculatedDuration===null&&(m.calculatedDuration=u1(m));const{calculatedDuration:v}=m,g=v+o,S=g*(r+1)-o;return{generator:m,mirroredGenerator:h,mapPercentToKeyframes:d,calculatedDuration:v,resolvedDuration:g,totalDuration:S}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,t=!1){const{resolved:r}=this;if(!r){const{keyframes:x}=this.options;return{done:!0,value:x[x.length-1]}}const{finalKeyframe:o,generator:l,mirroredGenerator:u,mapPercentToKeyframes:f,keyframes:d,calculatedDuration:h,totalDuration:m,resolvedDuration:v}=r;if(this.startTime===null)return l.next(0);const{delay:g,repeat:S,repeatType:T,repeatDelay:R,onUpdate:M}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-m/this.speed,this.startTime)),t?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const y=this.currentTime-g*(this.speed>=0?1:-1),P=this.speed>=0?y<0:y>m;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=m);let O=this.currentTime,C=l;if(S){const x=Math.min(this.currentTime,m)/v;let L=Math.floor(x),B=x%1;!B&&x>=1&&(B=1),B===1&&L--,L=Math.min(L,S+1),!!(L%2)&&(T==="reverse"?(B=1-B,R&&(B-=R/v)):T==="mirror"&&(C=u)),O=Fr(0,1,B)*v}const b=P?{done:!1,value:d[0]}:C.next(O);f&&(b.value=f(b.value));let{done:D}=b;!P&&h!==null&&(D=this.speed>=0?this.currentTime>=m:this.currentTime<=0);const U=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&D);return U&&o!==void 0&&(b.value=gc(d,this.options,o)),M&&M(b.value),U&&this.finish(),b}get duration(){const{resolved:e}=this;return e?Lr(e.calculatedDuration):0}get time(){return Lr(this.currentTime)}set time(e){e=Dr(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=Lr(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=_2,onPlay:t,startTime:r}=this.options;this.driver||(this.driver=e(l=>this.tick(l))),t&&t();const o=this.driver.now();this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=o):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const S2=new Set(["opacity","clipPath","filter","transform"]);function M2(n,e,t,{delay:r=0,duration:o=300,repeat:l=0,repeatType:u="loop",ease:f="easeInOut",times:d}={}){const h={[e]:t};d&&(h.offset=d);const m=d1(f,o);return Array.isArray(m)&&(h.easing=m),n.animate(h,{delay:r,duration:o,easing:Array.isArray(m)?"linear":m,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"})}const E2=rp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),ec=10,T2=2e4;function w2(n){return xp(n.type)||n.type==="spring"||!f1(n.ease)}function A2(n,e){const t=new Lp({...e,keyframes:n,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:n[0]};const o=[];let l=0;for(;!r.done&&l<T2;)r=t.sample(l),o.push(r.value),l+=ec;return{times:void 0,keyframes:o,duration:l-ec,ease:"linear"}}const j1={anticipate:T1,backInOut:E1,circInOut:A1};function R2(n){return n in j1}class jg extends V1{constructor(e){super(e);const{name:t,motionValue:r,element:o,keyframes:l}=this.options;this.resolver=new z1(l,(u,f)=>this.onKeyframesResolved(u,f),t,r,o),this.resolver.scheduleResolve()}initPlayback(e,t){let{duration:r=300,times:o,ease:l,type:u,motionValue:f,name:d,startTime:h}=this.options;if(!f.owner||!f.owner.current)return!1;if(typeof l=="string"&&Zu()&&R2(l)&&(l=j1[l]),w2(this.options)){const{onComplete:v,onUpdate:g,motionValue:S,element:T,...R}=this.options,M=A2(e,R);e=M.keyframes,e.length===1&&(e[1]=e[0]),r=M.duration,o=M.times,l=M.ease,u="keyframes"}const m=M2(f.owner.current,d,e,{...this.options,duration:r,times:o,ease:l});return m.startTime=h??this.calcStartTime(),this.pendingTimeline?(Dg(m,this.pendingTimeline),this.pendingTimeline=void 0):m.onfinish=()=>{const{onComplete:v}=this.options;f.set(gc(e,this.options,t)),v&&v(),this.cancel(),this.resolveFinishedPromise()},{animation:m,duration:r,times:o,type:u,ease:l,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return Lr(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return Lr(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.currentTime=Dr(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:t}=this;if(!t)return mi;const{animation:r}=t;Dg(r,e)}return mi}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.playState==="finished"&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:r,duration:o,type:l,ease:u,times:f}=e;if(t.playState==="idle"||t.playState==="finished")return;if(this.time){const{motionValue:h,onUpdate:m,onComplete:v,element:g,...S}=this.options,T=new Lp({...S,keyframes:r,duration:o,type:l,ease:u,times:f,isGenerator:!0}),R=Dr(this.time);h.setWithVelocity(T.sample(R-ec).value,T.sample(R).value,ec)}const{onStop:d}=this.options;d&&d(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:r,repeatDelay:o,repeatType:l,damping:u,type:f}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:h}=t.owner.getProps();return E2()&&r&&S2.has(r)&&!d&&!h&&!o&&l!=="mirror"&&u!==0&&f!=="inertia"}}const C2={type:"spring",stiffness:500,damping:25,restSpeed:10},b2=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),P2={type:"keyframes",duration:.8},D2={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},L2=(n,{keyframes:e})=>e.length>2?P2:Xs.has(n)?n.startsWith("scale")?b2(e[1]):C2:D2;function N2({when:n,delay:e,delayChildren:t,staggerChildren:r,staggerDirection:o,repeat:l,repeatType:u,repeatDelay:f,from:d,elapsed:h,...m}){return!!Object.keys(m).length}const Np=(n,e,t,r={},o,l)=>u=>{const f=_p(r,n)||{},d=f.delay||r.delay||0;let{elapsed:h=0}=r;h=h-Dr(d);let m={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...f,delay:-h,onUpdate:g=>{e.set(g),f.onUpdate&&f.onUpdate(g)},onComplete:()=>{u(),f.onComplete&&f.onComplete()},name:n,motionValue:e,element:l?void 0:o};N2(f)||(m={...m,...L2(n,m)}),m.duration&&(m.duration=Dr(m.duration)),m.repeatDelay&&(m.repeatDelay=Dr(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let v=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(m.duration=0,m.delay===0&&(v=!0)),v&&!l&&e.get()!==void 0){const g=gc(m.keyframes,f);if(g!==void 0)return Jt.update(()=>{m.onUpdate(g),m.onComplete()}),new QM([])}return!l&&jg.supports(m)?new jg(m):new Lp(m)};function I2({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function q1(n,e,{delay:t=0,transitionOverride:r,type:o}={}){var l;let{transition:u=n.getDefaultTransition(),transitionEnd:f,...d}=e;r&&(u=r);const h=[],m=o&&n.animationState&&n.animationState.getState()[o];for(const v in d){const g=n.getValue(v,(l=n.latestValues[v])!==null&&l!==void 0?l:null),S=d[v];if(S===void 0||m&&I2(m,v))continue;const T={delay:t,..._p(u||{},v)};let R=!1;if(window.MotionHandoffAnimation){const y=_1(n);if(y){const P=window.MotionHandoffAnimation(y,v,Jt);P!==null&&(T.startTime=P,R=!0)}}Zd(n,v),g.start(Np(v,g,S,n.shouldReduceMotion&&g1.has(v)?{type:!1}:T,n,R));const M=g.animation;M&&h.push(M)}return f&&Promise.all(h).then(()=>{Jt.update(()=>{f&&dE(n,f)})}),h}function rh(n,e,t={}){var r;const o=mc(n,e,t.type==="exit"?(r=n.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:l=n.getDefaultTransition()||{}}=o||{};t.transitionOverride&&(l=t.transitionOverride);const u=o?()=>Promise.all(q1(n,o,t)):()=>Promise.resolve(),f=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:m=0,staggerChildren:v,staggerDirection:g}=l;return U2(n,e,m+h,v,g,t)}:()=>Promise.resolve(),{when:d}=l;if(d){const[h,m]=d==="beforeChildren"?[u,f]:[f,u];return h().then(()=>m())}else return Promise.all([u(),f(t.delay)])}function U2(n,e,t=0,r=0,o=1,l){const u=[],f=(n.variantChildren.size-1)*r,d=o===1?(h=0)=>h*r:(h=0)=>f-h*r;return Array.from(n.variantChildren).sort(F2).forEach((h,m)=>{h.notify("AnimationStart",e),u.push(rh(h,e,{...l,delay:t+d(m)}).then(()=>h.notify("AnimationComplete",e)))}),Promise.all(u)}function F2(n,e){return n.sortNodePosition(e)}function O2(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(l=>rh(n,l,t));r=Promise.all(o)}else if(typeof e=="string")r=rh(n,e,t);else{const o=typeof e=="function"?mc(n,e,t.custom):e;r=Promise.all(q1(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}const B2=op.length;function K1(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?K1(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<B2;t++){const r=op[t],o=n.props[r];(Xa(o)||o===!1)&&(e[r]=o)}return e}const k2=[...sp].reverse(),z2=sp.length;function V2(n){return e=>Promise.all(e.map(({animation:t,options:r})=>O2(n,t,r)))}function H2(n){let e=V2(n),t=qg(),r=!0;const o=d=>(h,m)=>{var v;const g=mc(n,m,d==="exit"?(v=n.presenceContext)===null||v===void 0?void 0:v.custom:void 0);if(g){const{transition:S,transitionEnd:T,...R}=g;h={...h,...R,...T}}return h};function l(d){e=d(n)}function u(d){const{props:h}=n,m=K1(n.parent)||{},v=[],g=new Set;let S={},T=1/0;for(let M=0;M<z2;M++){const y=k2[M],P=t[y],O=h[y]!==void 0?h[y]:m[y],C=Xa(O),b=y===d?P.isActive:null;b===!1&&(T=M);let D=O===m[y]&&O!==h[y]&&C;if(D&&r&&n.manuallyAnimateOnMount&&(D=!1),P.protectedKeys={...S},!P.isActive&&b===null||!O&&!P.prevProp||hc(O)||typeof O=="boolean")continue;const U=G2(P.prevProp,O);let x=U||y===d&&P.isActive&&!D&&C||M>T&&C,L=!1;const B=Array.isArray(O)?O:[O];let V=B.reduce(o(y),{});b===!1&&(V={});const{prevResolvedValues:ee={}}=P,Z={...ee,...V},H=j=>{x=!0,g.has(j)&&(L=!0,g.delete(j)),P.needsAnimating[j]=!0;const K=n.getValue(j);K&&(K.liveStyle=!1)};for(const j in Z){const K=V[j],W=ee[j];if(S.hasOwnProperty(j))continue;let $=!1;qd(K)&&qd(W)?$=!l1(K,W):$=K!==W,$?K!=null?H(j):g.add(j):K!==void 0&&g.has(j)?H(j):P.protectedKeys[j]=!0}P.prevProp=O,P.prevResolvedValues=V,P.isActive&&(S={...S,...V}),r&&n.blockInitialAnimation&&(x=!1),x&&(!(D&&U)||L)&&v.push(...B.map(j=>({animation:j,options:{type:y}})))}if(g.size){const M={};g.forEach(y=>{const P=n.getBaseTarget(y),O=n.getValue(y);O&&(O.liveStyle=!0),M[y]=P??null}),v.push({animation:M})}let R=!!v.length;return r&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(R=!1),r=!1,R?e(v):Promise.resolve()}function f(d,h){var m;if(t[d].isActive===h)return Promise.resolve();(m=n.variantChildren)===null||m===void 0||m.forEach(g=>{var S;return(S=g.animationState)===null||S===void 0?void 0:S.setActive(d,h)}),t[d].isActive=h;const v=u(d);for(const g in t)t[g].protectedKeys={};return v}return{animateChanges:u,setActive:f,setAnimateFunction:l,getState:()=>t,reset:()=>{t=qg(),r=!0}}}function G2(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!l1(e,n):!1}function bs(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function qg(){return{animate:bs(!0),whileInView:bs(),whileHover:bs(),whileTap:bs(),whileDrag:bs(),whileFocus:bs(),exit:bs()}}class ps{constructor(e){this.isMounted=!1,this.node=e}update(){}}class W2 extends ps{constructor(e){super(e),e.animationState||(e.animationState=H2(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();hc(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let X2=0;class Y2 extends ps{constructor(){super(...arguments),this.id=X2++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const j2={animation:{Feature:W2},exit:{Feature:Y2}};function Ka(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}function il(n){return{point:{x:n.pageX,y:n.pageY}}}const q2=n=>e=>Sp(e)&&n(e,il(e));function za(n,e,t,r){return Ka(n,e,q2(t),r)}const Kg=(n,e)=>Math.abs(n-e);function K2(n,e){const t=Kg(n.x,e.x),r=Kg(n.y,e.y);return Math.sqrt(t**2+r**2)}class $1{constructor(e,t,{transformPagePoint:r,contextWindow:o,dragSnapToOrigin:l=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=ud(this.lastMoveEventInfo,this.history),g=this.startEvent!==null,S=K2(v.offset,{x:0,y:0})>=3;if(!g&&!S)return;const{point:T}=v,{timestamp:R}=In;this.history.push({...T,timestamp:R});const{onStart:M,onMove:y}=this.handlers;g||(M&&M(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,v)},this.handlePointerMove=(v,g)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=ld(g,this.transformPagePoint),Jt.update(this.updatePoint,!0)},this.handlePointerUp=(v,g)=>{this.end();const{onEnd:S,onSessionEnd:T,resumeAnimation:R}=this.handlers;if(this.dragSnapToOrigin&&R&&R(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const M=ud(v.type==="pointercancel"?this.lastMoveEventInfo:ld(g,this.transformPagePoint),this.history);this.startEvent&&S&&S(v,M),T&&T(v,M)},!Sp(e))return;this.dragSnapToOrigin=l,this.handlers=t,this.transformPagePoint=r,this.contextWindow=o||window;const u=il(e),f=ld(u,this.transformPagePoint),{point:d}=f,{timestamp:h}=In;this.history=[{...d,timestamp:h}];const{onSessionStart:m}=t;m&&m(e,ud(f,this.history)),this.removeListeners=nl(za(this.contextWindow,"pointermove",this.handlePointerMove),za(this.contextWindow,"pointerup",this.handlePointerUp),za(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),ds(this.updatePoint)}}function ld(n,e){return e?{point:e(n.point)}:n}function $g(n,e){return{x:n.x-e.x,y:n.y-e.y}}function ud({point:n},e){return{point:n,delta:$g(n,Z1(e)),offset:$g(n,$2(e)),velocity:Z2(e,.1)}}function $2(n){return n[0]}function Z1(n){return n[n.length-1]}function Z2(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=Z1(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>Dr(e)));)t--;if(!r)return{x:0,y:0};const l=Lr(o.timestamp-r.timestamp);if(l===0)return{x:0,y:0};const u={x:(o.x-r.x)/l,y:(o.y-r.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}const Q1=1e-4,Q2=1-Q1,J2=1+Q1,J1=.01,eT=0-J1,tT=0+J1;function vi(n){return n.max-n.min}function nT(n,e,t){return Math.abs(n-e)<=t}function Zg(n,e,t,r=.5){n.origin=r,n.originPoint=un(e.min,e.max,n.origin),n.scale=vi(t)/vi(e),n.translate=un(t.min,t.max,n.origin)-n.originPoint,(n.scale>=Q2&&n.scale<=J2||isNaN(n.scale))&&(n.scale=1),(n.translate>=eT&&n.translate<=tT||isNaN(n.translate))&&(n.translate=0)}function Va(n,e,t,r){Zg(n.x,e.x,t.x,r?r.originX:void 0),Zg(n.y,e.y,t.y,r?r.originY:void 0)}function Qg(n,e,t){n.min=t.min+e.min,n.max=n.min+vi(e)}function iT(n,e,t){Qg(n.x,e.x,t.x),Qg(n.y,e.y,t.y)}function Jg(n,e,t){n.min=e.min-t.min,n.max=n.min+vi(e)}function Ha(n,e,t){Jg(n.x,e.x,t.x),Jg(n.y,e.y,t.y)}function rT(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?un(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?un(t,n,r.max):Math.min(n,t)),n}function ev(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function sT(n,{top:e,left:t,bottom:r,right:o}){return{x:ev(n.x,t,o),y:ev(n.y,e,r)}}function tv(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function oT(n,e){return{x:tv(n.x,e.x),y:tv(n.y,e.y)}}function aT(n,e){let t=.5;const r=vi(n),o=vi(e);return o>r?t=ko(e.min,e.max-r,n.min):r>o&&(t=ko(n.min,n.max-o,e.min)),Fr(0,1,t)}function lT(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const sh=.35;function uT(n=sh){return n===!1?n=0:n===!0&&(n=sh),{x:nv(n,"left","right"),y:nv(n,"top","bottom")}}function nv(n,e,t){return{min:iv(n,e),max:iv(n,t)}}function iv(n,e){return typeof n=="number"?n:n[e]||0}const rv=()=>({translate:0,scale:1,origin:0,originPoint:0}),No=()=>({x:rv(),y:rv()}),sv=()=>({min:0,max:0}),vn=()=>({x:sv(),y:sv()});function Ri(n){return[n("x"),n("y")]}function ex({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function cT({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function fT(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function cd(n){return n===void 0||n===1}function oh({scale:n,scaleX:e,scaleY:t}){return!cd(n)||!cd(e)||!cd(t)}function Us(n){return oh(n)||tx(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function tx(n){return ov(n.x)||ov(n.y)}function ov(n){return n&&n!=="0%"}function tc(n,e,t){const r=n-t,o=e*r;return t+o}function av(n,e,t,r,o){return o!==void 0&&(n=tc(n,o,r)),tc(n,t,r)+e}function ah(n,e=0,t=1,r,o){n.min=av(n.min,e,t,r,o),n.max=av(n.max,e,t,r,o)}function nx(n,{x:e,y:t}){ah(n.x,e.translate,e.scale,e.originPoint),ah(n.y,t.translate,t.scale,t.originPoint)}const lv=.999999999999,uv=1.0000000000001;function dT(n,e,t,r=!1){const o=t.length;if(!o)return;e.x=e.y=1;let l,u;for(let f=0;f<o;f++){l=t[f],u=l.projectionDelta;const{visualElement:d}=l.options;d&&d.props.style&&d.props.style.display==="contents"||(r&&l.options.layoutScroll&&l.scroll&&l!==l.root&&Uo(n,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(e.x*=u.x.scale,e.y*=u.y.scale,nx(n,u)),r&&Us(l.latestValues)&&Uo(n,l.latestValues))}e.x<uv&&e.x>lv&&(e.x=1),e.y<uv&&e.y>lv&&(e.y=1)}function Io(n,e){n.min=n.min+e,n.max=n.max+e}function cv(n,e,t,r,o=.5){const l=un(n.min,n.max,o);ah(n,e,t,l,r)}function Uo(n,e){cv(n.x,e.x,e.scaleX,e.scale,e.originX),cv(n.y,e.y,e.scaleY,e.scale,e.originY)}function ix(n,e){return ex(fT(n.getBoundingClientRect(),e))}function hT(n,e,t){const r=ix(n,t),{scroll:o}=e;return o&&(Io(r.x,o.offset.x),Io(r.y,o.offset.y)),r}const rx=({current:n})=>n?n.ownerDocument.defaultView:null,pT=new WeakMap;class mT{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=vn(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=m=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(il(m).point)},l=(m,v)=>{const{drag:g,dragPropagation:S,onDragStart:T}=this.getProps();if(g&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=aE(g),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ri(M=>{let y=this.getAxisMotionValue(M).get()||0;if(or.test(y)){const{projection:P}=this.visualElement;if(P&&P.layout){const O=P.layout.layoutBox[M];O&&(y=vi(O)*(parseFloat(y)/100))}}this.originPoint[M]=y}),T&&Jt.postRender(()=>T(m,v)),Zd(this.visualElement,"transform");const{animationState:R}=this.visualElement;R&&R.setActive("whileDrag",!0)},u=(m,v)=>{const{dragPropagation:g,dragDirectionLock:S,onDirectionLock:T,onDrag:R}=this.getProps();if(!g&&!this.openDragLock)return;const{offset:M}=v;if(S&&this.currentDirection===null){this.currentDirection=gT(M),this.currentDirection!==null&&T&&T(this.currentDirection);return}this.updateAxis("x",v.point,M),this.updateAxis("y",v.point,M),this.visualElement.render(),R&&R(m,v)},f=(m,v)=>this.stop(m,v),d=()=>Ri(m=>{var v;return this.getAnimationState(m)==="paused"&&((v=this.getAxisMotionValue(m).animation)===null||v===void 0?void 0:v.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new $1(e,{onSessionStart:o,onStart:l,onMove:u,onSessionEnd:f,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:rx(this.visualElement)})}stop(e,t){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=t;this.startAnimation(o);const{onDragEnd:l}=this.getProps();l&&Jt.postRender(()=>l(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!du(e,o,this.currentDirection))return;const l=this.getAxisMotionValue(e);let u=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(u=rT(u,this.constraints[e],this.elastic[e])),l.set(u)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,l=this.constraints;t&&Do(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&o?this.constraints=sT(o.layoutBox,t):this.constraints=!1,this.elastic=uT(r),l!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&Ri(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=lT(o.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Do(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=hT(r,o.root,this.visualElement.getTransformPagePoint());let u=oT(o.layout.layoutBox,l);if(t){const f=t(cT(u));this.hasMutatedConstraints=!!f,f&&(u=ex(f))}return u}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:f}=this.getProps(),d=this.constraints||{},h=Ri(m=>{if(!du(m,t,this.currentDirection))return;let v=d&&d[m]||{};u&&(v={min:0,max:0});const g=o?200:1e6,S=o?40:1e7,T={type:"inertia",velocity:r?e[m]:0,bounceStiffness:g,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...l,...v};return this.startAxisValueAnimation(m,T)});return Promise.all(h).then(f)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return Zd(this.visualElement,e),r.start(Np(e,r,0,t,this.visualElement,!1))}stopAnimation(){Ri(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Ri(e=>{var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.pause()})}getAnimationState(e){var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[t];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){Ri(t=>{const{drag:r}=this.getProps();if(!du(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(t);if(o&&o.layout){const{min:u,max:f}=o.layout.layoutBox[t];l.set(e[t]-un(u,f,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!Do(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};Ri(u=>{const f=this.getAxisMotionValue(u);if(f&&this.constraints!==!1){const d=f.get();o[u]=aT({min:d,max:d},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Ri(u=>{if(!du(u,e,null))return;const f=this.getAxisMotionValue(u),{min:d,max:h}=this.constraints[u];f.set(un(d,h,o[u]))})}addListeners(){if(!this.visualElement.current)return;pT.set(this.visualElement,this);const e=this.visualElement.current,t=za(e,"pointerdown",d=>{const{drag:h,dragListener:m=!0}=this.getProps();h&&m&&this.start(d)}),r=()=>{const{dragConstraints:d}=this.getProps();Do(d)&&d.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Jt.read(r);const u=Ka(window,"resize",()=>this.scalePositionWithinConstraints()),f=o.addEventListener("didUpdate",(({delta:d,hasLayoutChanged:h})=>{this.isDragging&&h&&(Ri(m=>{const v=this.getAxisMotionValue(m);v&&(this.originPoint[m]+=d[m].translate,v.set(v.get()+d[m].translate))}),this.visualElement.render())}));return()=>{u(),t(),l(),f&&f()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:u=sh,dragMomentum:f=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:l,dragElastic:u,dragMomentum:f}}}function du(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function gT(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class vT extends ps{constructor(e){super(e),this.removeGroupControls=mi,this.removeListeners=mi,this.controls=new mT(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||mi}unmount(){this.removeGroupControls(),this.removeListeners()}}const fv=n=>(e,t)=>{n&&Jt.postRender(()=>n(e,t))};class _T extends ps{constructor(){super(...arguments),this.removePointerDownListener=mi}onPointerDown(e){this.session=new $1(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:rx(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:fv(e),onStart:fv(t),onMove:r,onEnd:(l,u)=>{delete this.session,o&&Jt.postRender(()=>o(l,u))}}}mount(){this.removePointerDownListener=za(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Vu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function dv(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const Aa={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(ft.test(n))n=parseFloat(n);else return n;const t=dv(n,e.target.x),r=dv(n,e.target.y);return`${t}% ${r}%`}},xT={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=hs.parse(n);if(o.length>5)return r;const l=hs.createTransformer(n),u=typeof o[0]!="number"?1:0,f=t.x.scale*e.x,d=t.y.scale*e.y;o[0+u]/=f,o[1+u]/=d;const h=un(f,d,.5);return typeof o[2+u]=="number"&&(o[2+u]/=h),typeof o[3+u]=="number"&&(o[3+u]/=h),l(o)}};class yT extends Oe.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:l}=e;zM(ST),l&&(t.group&&t.group.add(l),r&&r.register&&o&&r.register(l),l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),Vu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:l}=this.props,u=r.projection;return u&&(u.isPresent=l,o||e.layoutDependency!==t||t===void 0?u.willUpdate():this.safeToRemove(),e.isPresent!==l&&(l?u.promote():u.relegate()||Jt.postRender(()=>{const f=u.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),lp.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function sx(n){const[e,t]=V_(),r=Oe.useContext(ep);return re.jsx(yT,{...n,layoutGroup:r,switchLayoutGroup:Oe.useContext(K_),isPresent:e,safeToRemove:t})}const ST={borderRadius:{...Aa,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Aa,borderTopRightRadius:Aa,borderBottomLeftRadius:Aa,borderBottomRightRadius:Aa,boxShadow:xT};function MT(n,e,t){const r=Xn(n)?n:ja(n);return r.start(Np("",r,e,t)),r.animation}function ET(n){return n instanceof SVGElement&&n.tagName!=="svg"}const TT=(n,e)=>n.depth-e.depth;class wT{constructor(){this.children=[],this.isDirty=!1}add(e){Mp(this.children,e),this.isDirty=!0}remove(e){Ep(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(TT),this.isDirty=!1,this.children.forEach(e)}}function AT(n,e){const t=ar.now(),r=({timestamp:o})=>{const l=o-t;l>=e&&(ds(r),n(l-e))};return Jt.read(r,!0),()=>ds(r)}const ox=["TopLeft","TopRight","BottomLeft","BottomRight"],RT=ox.length,hv=n=>typeof n=="string"?parseFloat(n):n,pv=n=>typeof n=="number"||ft.test(n);function CT(n,e,t,r,o,l){o?(n.opacity=un(0,t.opacity!==void 0?t.opacity:1,bT(r)),n.opacityExit=un(e.opacity!==void 0?e.opacity:1,0,PT(r))):l&&(n.opacity=un(e.opacity!==void 0?e.opacity:1,t.opacity!==void 0?t.opacity:1,r));for(let u=0;u<RT;u++){const f=`border${ox[u]}Radius`;let d=mv(e,f),h=mv(t,f);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||pv(d)===pv(h)?(n[f]=Math.max(un(hv(d),hv(h),r),0),(or.test(h)||or.test(d))&&(n[f]+="%")):n[f]=h}(e.rotate||t.rotate)&&(n.rotate=un(e.rotate||0,t.rotate||0,r))}function mv(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const bT=ax(0,.5,w1),PT=ax(.5,.95,mi);function ax(n,e,t){return r=>r<n?0:r>e?1:t(ko(n,e,r))}function gv(n,e){n.min=e.min,n.max=e.max}function wi(n,e){gv(n.x,e.x),gv(n.y,e.y)}function vv(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function _v(n,e,t,r,o){return n-=e,n=tc(n,1/t,r),o!==void 0&&(n=tc(n,1/o,r)),n}function DT(n,e=0,t=1,r=.5,o,l=n,u=n){if(or.test(e)&&(e=parseFloat(e),e=un(u.min,u.max,e/100)-u.min),typeof e!="number")return;let f=un(l.min,l.max,r);n===l&&(f-=e),n.min=_v(n.min,e,t,f,o),n.max=_v(n.max,e,t,f,o)}function xv(n,e,[t,r,o],l,u){DT(n,e[t],e[r],e[o],e.scale,l,u)}const LT=["x","scaleX","originX"],NT=["y","scaleY","originY"];function yv(n,e,t,r){xv(n.x,e,LT,t?t.x:void 0,r?r.x:void 0),xv(n.y,e,NT,t?t.y:void 0,r?r.y:void 0)}function Sv(n){return n.translate===0&&n.scale===1}function lx(n){return Sv(n.x)&&Sv(n.y)}function Mv(n,e){return n.min===e.min&&n.max===e.max}function IT(n,e){return Mv(n.x,e.x)&&Mv(n.y,e.y)}function Ev(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function ux(n,e){return Ev(n.x,e.x)&&Ev(n.y,e.y)}function Tv(n){return vi(n.x)/vi(n.y)}function wv(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class UT{constructor(){this.members=[]}add(e){Mp(this.members,e),e.scheduleRender()}remove(e){if(Ep(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(o=>e===o);if(t===0)return!1;let r;for(let o=t;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){r=l;break}}return r?(this.promote(r),!0):!1}promote(e,t){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function FT(n,e,t){let r="";const o=n.x.translate/e.x,l=n.y.translate/e.y,u=(t==null?void 0:t.z)||0;if((o||l||u)&&(r=`translate3d(${o}px, ${l}px, ${u}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:m,rotateX:v,rotateY:g,skewX:S,skewY:T}=t;h&&(r=`perspective(${h}px) ${r}`),m&&(r+=`rotate(${m}deg) `),v&&(r+=`rotateX(${v}deg) `),g&&(r+=`rotateY(${g}deg) `),S&&(r+=`skewX(${S}deg) `),T&&(r+=`skewY(${T}deg) `)}const f=n.x.scale*e.x,d=n.y.scale*e.y;return(f!==1||d!==1)&&(r+=`scale(${f}, ${d})`),r||"none"}const Fs={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Fa=typeof window<"u"&&window.MotionDebug!==void 0,fd=["","X","Y","Z"],OT={visibility:"hidden"},Av=1e3;let BT=0;function dd(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function cx(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=_1(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:l}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",Jt,!(o||l))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&cx(r)}function fx({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(u={},f=e==null?void 0:e()){this.id=BT++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Fa&&(Fs.totalNodes=Fs.resolvedTargetDeltas=Fs.recalculatedProjection=0),this.nodes.forEach(VT),this.nodes.forEach(YT),this.nodes.forEach(jT),this.nodes.forEach(HT),Fa&&window.MotionDebug.record(Fs)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new wT)}addEventListener(u,f){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new Tp),this.eventHandlers.get(u).add(f)}notifyListeners(u,...f){const d=this.eventHandlers.get(u);d&&d.notify(...f)}hasListeners(u){return this.eventHandlers.has(u)}mount(u,f=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=ET(u),this.instance=u;const{layoutId:d,layout:h,visualElement:m}=this.options;if(m&&!m.current&&m.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),f&&(h||d)&&(this.isLayoutDirty=!0),n){let v;const g=()=>this.root.updateBlockedByResize=!1;n(u,()=>{this.root.updateBlockedByResize=!0,v&&v(),v=AT(g,250),Vu.hasAnimatedSinceResize&&(Vu.hasAnimatedSinceResize=!1,this.nodes.forEach(Cv))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&m&&(d||h)&&this.addEventListener("didUpdate",({delta:v,hasLayoutChanged:g,hasRelativeTargetChanged:S,layout:T})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const R=this.options.transition||m.getDefaultTransition()||QT,{onLayoutAnimationStart:M,onLayoutAnimationComplete:y}=m.getProps(),P=!this.targetLayout||!ux(this.targetLayout,T)||S,O=!g&&S;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||O||g&&(P||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(v,O);const C={..._p(R,"layout"),onPlay:M,onComplete:y};(m.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C)}else g||Cv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=T})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,ds(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(qT),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&cx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const v=this.path[m];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:f,layout:d}=this.options;if(f===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Rv);return}this.isUpdating||this.nodes.forEach(WT),this.isUpdating=!1,this.nodes.forEach(XT),this.nodes.forEach(kT),this.nodes.forEach(zT),this.clearAllSnapshots();const f=ar.now();In.delta=Fr(0,1e3/60,f-In.timestamp),In.timestamp=f,In.isProcessing=!0,nd.update.process(In),nd.preRender.process(In),nd.render.process(In),In.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,lp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(GT),this.sharedNodes.forEach(KT)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Jt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Jt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=vn(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(f=!1),f){const d=r(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!lx(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,m=h!==this.prevTransformTemplateValue;u&&(f||Us(this.latestValues)||m)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const f=this.measurePageBox();let d=this.removeElementScroll(f);return u&&(d=this.removeTransform(d)),JT(d),{animationId:this.root.animationId,measuredBox:f,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:f}=this.options;if(!f)return vn();const d=f.measureViewportBox();if(!(((u=this.scroll)===null||u===void 0?void 0:u.wasRoot)||this.path.some(e3))){const{scroll:m}=this.root;m&&(Io(d.x,m.offset.x),Io(d.y,m.offset.y))}return d}removeElementScroll(u){var f;const d=vn();if(wi(d,u),!((f=this.scroll)===null||f===void 0)&&f.wasRoot)return d;for(let h=0;h<this.path.length;h++){const m=this.path[h],{scroll:v,options:g}=m;m!==this.root&&v&&g.layoutScroll&&(v.wasRoot&&wi(d,u),Io(d.x,v.offset.x),Io(d.y,v.offset.y))}return d}applyTransform(u,f=!1){const d=vn();wi(d,u);for(let h=0;h<this.path.length;h++){const m=this.path[h];!f&&m.options.layoutScroll&&m.scroll&&m!==m.root&&Uo(d,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),Us(m.latestValues)&&Uo(d,m.latestValues)}return Us(this.latestValues)&&Uo(d,this.latestValues),d}removeTransform(u){const f=vn();wi(f,u);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!h.instance||!Us(h.latestValues))continue;oh(h.latestValues)&&h.updateSnapshot();const m=vn(),v=h.measurePageBox();wi(m,v),yv(f,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,m)}return Us(this.latestValues)&&yv(f,this.latestValues),f}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==In.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var f;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==d;if(!(u||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((f=this.parent)===null||f===void 0)&&f.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:v,layoutId:g}=this.options;if(!(!this.layout||!(v||g))){if(this.resolvedRelativeTargetAt=In.timestamp,!this.targetDelta&&!this.relativeTarget){const S=this.getClosestProjectingParent();S&&S.layout&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=vn(),this.relativeTargetOrigin=vn(),Ha(this.relativeTargetOrigin,this.layout.layoutBox,S.layout.layoutBox),wi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=vn(),this.targetWithTransforms=vn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),iT(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):wi(this.target,this.layout.layoutBox),nx(this.target,this.targetDelta)):wi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const S=this.getClosestProjectingParent();S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=vn(),this.relativeTargetOrigin=vn(),Ha(this.relativeTargetOrigin,this.target,S.target),wi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Fa&&Fs.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||oh(this.parent.latestValues)||tx(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var u;const f=this.getLead(),d=!!this.resumingFrom||this!==f;let h=!0;if((this.isProjectionDirty||!((u=this.parent)===null||u===void 0)&&u.isProjectionDirty)&&(h=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===In.timestamp&&(h=!1),h)return;const{layout:m,layoutId:v}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||v))return;wi(this.layoutCorrected,this.layout.layoutBox);const g=this.treeScale.x,S=this.treeScale.y;dT(this.layoutCorrected,this.treeScale,this.path,d),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=vn());const{target:T}=f;if(!T){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(vv(this.prevProjectionDelta.x,this.projectionDelta.x),vv(this.prevProjectionDelta.y,this.projectionDelta.y)),Va(this.projectionDelta,this.layoutCorrected,T,this.latestValues),(this.treeScale.x!==g||this.treeScale.y!==S||!wv(this.projectionDelta.x,this.prevProjectionDelta.x)||!wv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",T)),Fa&&Fs.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var f;if((f=this.options.visualElement)===null||f===void 0||f.scheduleRender(),u){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=No(),this.projectionDelta=No(),this.projectionDeltaWithTransform=No()}setAnimationOrigin(u,f=!1){const d=this.snapshot,h=d?d.latestValues:{},m={...this.latestValues},v=No();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const g=vn(),S=d?d.source:void 0,T=this.layout?this.layout.source:void 0,R=S!==T,M=this.getStack(),y=!M||M.members.length<=1,P=!!(R&&!y&&this.options.crossfade===!0&&!this.path.some(ZT));this.animationProgress=0;let O;this.mixTargetDelta=C=>{const b=C/1e3;bv(v.x,u.x,b),bv(v.y,u.y,b),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ha(g,this.layout.layoutBox,this.relativeParent.layout.layoutBox),$T(this.relativeTarget,this.relativeTargetOrigin,g,b),O&&IT(this.relativeTarget,O)&&(this.isProjectionDirty=!1),O||(O=vn()),wi(O,this.relativeTarget)),R&&(this.animationValues=m,CT(m,h,this.latestValues,b,P,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=b},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(ds(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Jt.update(()=>{Vu.hasAnimatedSinceResize=!0,this.currentAnimation=MT(0,Av,{...u,onUpdate:f=>{this.mixTargetDelta(f),u.onUpdate&&u.onUpdate(f)},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Av),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:f,target:d,layout:h,latestValues:m}=u;if(!(!f||!d||!h)){if(this!==u&&this.layout&&h&&dx(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||vn();const v=vi(this.layout.layoutBox.x);d.x.min=u.target.x.min,d.x.max=d.x.min+v;const g=vi(this.layout.layoutBox.y);d.y.min=u.target.y.min,d.y.max=d.y.min+g}wi(f,d),Uo(f,m),Va(this.projectionDeltaWithTransform,this.layoutCorrected,f,m)}}registerSharedNode(u,f){this.sharedNodes.has(u)||this.sharedNodes.set(u,new UT),this.sharedNodes.get(u).add(f);const h=f.options.initialPromotionConfig;f.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(f):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var u;const{layoutId:f}=this.options;return f?((u=this.getStack())===null||u===void 0?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:f}=this.options;return f?(u=this.getStack())===null||u===void 0?void 0:u.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:f,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),u&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let f=!1;const{latestValues:d}=u;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(f=!0),!f)return;const h={};d.z&&dd("z",u,h,this.animationValues);for(let m=0;m<fd.length;m++)dd(`rotate${fd[m]}`,u,h,this.animationValues),dd(`skew${fd[m]}`,u,h,this.animationValues);u.render();for(const m in h)u.setStaticValue(m,h[m]),this.animationValues&&(this.animationValues[m]=h[m]);u.scheduleRender()}getProjectionStyles(u){var f,d;if(!this.instance||this.isSVG)return;if(!this.isVisible)return OT;const h={visibility:""},m=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=ku(u==null?void 0:u.pointerEvents)||"",h.transform=m?m(this.latestValues,""):"none",h;const v=this.getLead();if(!this.projectionDelta||!this.layout||!v.target){const R={};return this.options.layoutId&&(R.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,R.pointerEvents=ku(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!Us(this.latestValues)&&(R.transform=m?m({},""):"none",this.hasProjected=!1),R}const g=v.animationValues||v.latestValues;this.applyTransformsToTarget(),h.transform=FT(this.projectionDeltaWithTransform,this.treeScale,g),m&&(h.transform=m(g,h.transform));const{x:S,y:T}=this.projectionDelta;h.transformOrigin=`${S.origin*100}% ${T.origin*100}% 0`,v.animationValues?h.opacity=v===this?(d=(f=g.opacity)!==null&&f!==void 0?f:this.latestValues.opacity)!==null&&d!==void 0?d:1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:h.opacity=v===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const R in $u){if(g[R]===void 0)continue;const{correct:M,applyTo:y}=$u[R],P=h.transform==="none"?g[R]:M(g[R],v);if(y){const O=y.length;for(let C=0;C<O;C++)h[y[C]]=P}else h[R]=P}return this.options.layoutId&&(h.pointerEvents=v===this?ku(u==null?void 0:u.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var f;return(f=u.currentAnimation)===null||f===void 0?void 0:f.stop()}),this.root.nodes.forEach(Rv),this.root.sharedNodes.clear()}}}function kT(n){n.updateLayout()}function zT(n){var e;const t=((e=n.resumeFrom)===null||e===void 0?void 0:e.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=n.layout,{animationType:l}=n.options,u=t.source!==n.layout.source;l==="size"?Ri(v=>{const g=u?t.measuredBox[v]:t.layoutBox[v],S=vi(g);g.min=r[v].min,g.max=g.min+S}):dx(l,t.layoutBox,r)&&Ri(v=>{const g=u?t.measuredBox[v]:t.layoutBox[v],S=vi(r[v]);g.max=g.min+S,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[v].max=n.relativeTarget[v].min+S)});const f=No();Va(f,r,t.layoutBox);const d=No();u?Va(d,n.applyTransform(o,!0),t.measuredBox):Va(d,r,t.layoutBox);const h=!lx(f);let m=!1;if(!n.resumeFrom){const v=n.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:g,layout:S}=v;if(g&&S){const T=vn();Ha(T,t.layoutBox,g.layoutBox);const R=vn();Ha(R,r,S.layoutBox),ux(T,R)||(m=!0),v.options.layoutRoot&&(n.relativeTarget=R,n.relativeTargetOrigin=T,n.relativeParent=v)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:d,layoutDelta:f,hasLayoutChanged:h,hasRelativeTargetChanged:m})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function VT(n){Fa&&Fs.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function HT(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function GT(n){n.clearSnapshot()}function Rv(n){n.clearMeasurements()}function WT(n){n.isLayoutDirty=!1}function XT(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function Cv(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function YT(n){n.resolveTargetDelta()}function jT(n){n.calcProjection()}function qT(n){n.resetSkewAndRotation()}function KT(n){n.removeLeadSnapshot()}function bv(n,e,t){n.translate=un(e.translate,0,t),n.scale=un(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function Pv(n,e,t,r){n.min=un(e.min,t.min,r),n.max=un(e.max,t.max,r)}function $T(n,e,t,r){Pv(n.x,e.x,t.x,r),Pv(n.y,e.y,t.y,r)}function ZT(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const QT={duration:.45,ease:[.4,0,.1,1]},Dv=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Lv=Dv("applewebkit/")&&!Dv("chrome/")?Math.round:mi;function Nv(n){n.min=Lv(n.min),n.max=Lv(n.max)}function JT(n){Nv(n.x),Nv(n.y)}function dx(n,e,t){return n==="position"||n==="preserve-aspect"&&!nT(Tv(e),Tv(t),.2)}function e3(n){var e;return n!==n.root&&((e=n.scroll)===null||e===void 0?void 0:e.wasRoot)}const t3=fx({attachResizeListener:(n,e)=>Ka(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),hd={current:void 0},hx=fx({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!hd.current){const n=new t3({});n.mount(window),n.setOptions({layoutScroll:!0}),hd.current=n}return hd.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),n3={pan:{Feature:_T},drag:{Feature:vT,ProjectionNode:hx,MeasureLayout:sx}};function Iv(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,l=r[o];l&&Jt.postRender(()=>l(e,il(e)))}class i3 extends ps{mount(){const{current:e}=this.node;e&&(this.unmount=nE(e,t=>(Iv(this.node,t,"Start"),r=>Iv(this.node,r,"End"))))}unmount(){}}class r3 extends ps{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=nl(Ka(this.node.current,"focus",()=>this.onFocus()),Ka(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Uv(n,e,t){const{props:r}=n;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),l=r[o];l&&Jt.postRender(()=>l(e,il(e)))}class s3 extends ps{mount(){const{current:e}=this.node;e&&(this.unmount=oE(e,t=>(Uv(this.node,t,"Start"),(r,{success:o})=>Uv(this.node,r,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const lh=new WeakMap,pd=new WeakMap,o3=n=>{const e=lh.get(n.target);e&&e(n)},a3=n=>{n.forEach(o3)};function l3({root:n,...e}){const t=n||document;pd.has(t)||pd.set(t,{});const r=pd.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(a3,{root:n,...e})),r[o]}function u3(n,e,t){const r=l3(e);return lh.set(n,t),r.observe(n),()=>{lh.delete(n),r.unobserve(n)}}const c3={some:0,all:1};class f3 extends ps{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:l}=e,u={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:c3[o]},f=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,l&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:m,onViewportLeave:v}=this.node.getProps(),g=h?m:v;g&&g(d)};return u3(this.node.current,u,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(d3(e,t))&&this.startObserver()}unmount(){}}function d3({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const h3={inView:{Feature:f3},tap:{Feature:s3},focus:{Feature:r3},hover:{Feature:i3}},p3={layout:{ProjectionNode:hx,MeasureLayout:sx}},uh={current:null},px={current:!1};function m3(){if(px.current=!0,!!ip)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>uh.current=n.matches;n.addListener(e),e()}else uh.current=!1}const g3=[...k1,Wn,hs],v3=n=>g3.find(B1(n)),Fv=new WeakMap;function _3(n,e,t){for(const r in e){const o=e[r],l=t[r];if(Xn(o))n.addValue(r,o);else if(Xn(l))n.addValue(r,ja(o,{owner:n}));else if(l!==o)if(n.hasValue(r)){const u=n.getValue(r);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=n.getStaticValue(r);n.addValue(r,ja(u!==void 0?u:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const Ov=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class x3{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:l,visualState:u},f={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Pp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=ar.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,Jt.render(this.render,!1,!0))};const{latestValues:d,renderState:h,onUpdate:m}=u;this.onUpdate=m,this.latestValues=d,this.baseTarget={...d},this.initialValues=t.initial?{...d}:{},this.renderState=h,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=f,this.blockInitialAnimation=!!l,this.isControllingVariants=pc(t),this.isVariantNode=j_(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...g}=this.scrapeMotionValuesFromProps(t,{},this);for(const S in g){const T=g[S];d[S]!==void 0&&Xn(T)&&T.set(d[S],!1)}}mount(e){this.current=e,Fv.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,r)=>this.bindToMotionValue(r,t)),px.current||m3(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:uh.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Fv.delete(this.current),this.projection&&this.projection.unmount(),ds(this.notifyUpdate),ds(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=Xs.has(e),o=t.on("change",f=>{this.latestValues[e]=f,this.props.onUpdate&&Jt.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),l=t.on("renderRequest",this.scheduleRender);let u;window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),l(),u&&u(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in zo){const t=zo[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const l=this.features[e];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):vn()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<Ov.length;r++){const o=Ov[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,u=e[l];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=_3(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=ja(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){var r;let o=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(r=this.getBaseTargetFromProps(this.props,e))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,e,this.options);return o!=null&&(typeof o=="string"&&(F1(o)||R1(o))?o=parseFloat(o):!v3(o)&&hs.test(t)&&(o=N1(e,t)),this.setBaseTarget(e,Xn(o)?o.get():o)),Xn(o)?o.get():o}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:r}=this.props;let o;if(typeof r=="string"||typeof r=="object"){const u=cp(this.props,r,(t=this.presenceContext)===null||t===void 0?void 0:t.custom);u&&(o=u[e])}if(r&&o!==void 0)return o;const l=this.getBaseTargetFromProps(this.props,e);return l!==void 0&&!Xn(l)?l:this.initialValues[e]!==void 0&&o===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Tp),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class mx extends x3{constructor(){super(...arguments),this.KeyframeResolver=z1}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Xn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function y3(n){return window.getComputedStyle(n)}class S3 extends mx{constructor(){super(...arguments),this.type="html",this.renderInstance=n1}readValueFromInstance(e,t){if(Xs.has(t)){const r=bp(t);return r&&r.default||0}else{const r=y3(e),o=(J_(t)?r.getPropertyValue(t):r[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return ix(e,t)}build(e,t,r){hp(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return vp(e,t,r)}}class M3 extends mx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=vn}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Xs.has(t)){const r=bp(t);return r&&r.default||0}return t=i1.has(t)?t:ap(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return o1(e,t,r)}build(e,t,r){pp(e,t,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,r,o){r1(e,t,r,o)}mount(e){this.isSVGTag=gp(e.tagName),super.mount(e)}}const E3=(n,e)=>up(n)?new M3(e):new S3(e,{allowProjection:n!==Oe.Fragment}),T3=KM({...j2,...h3,...n3,...p3},E3),dt=cM(T3);var gx={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Bv=fs.createContext&&fs.createContext(gx),w3=["attr","size","title"];function A3(n,e){if(n==null)return{};var t,r,o=R3(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)===-1&&{}.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function R3(n,e){if(n==null)return{};var t={};for(var r in n)if({}.hasOwnProperty.call(n,r)){if(e.indexOf(r)!==-1)continue;t[r]=n[r]}return t}function nc(){return nc=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},nc.apply(null,arguments)}function kv(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function ic(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?kv(Object(t),!0).forEach(function(r){C3(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):kv(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function C3(n,e,t){return(e=b3(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function b3(n){var e=P3(n,"string");return typeof e=="symbol"?e:e+""}function P3(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function vx(n){return n&&n.map((e,t)=>fs.createElement(e.tag,ic({key:t},e.attr),vx(e.child)))}function en(n){return e=>fs.createElement(D3,nc({attr:ic({},n.attr)},e),vx(n.child))}function D3(n){var e=t=>{var{attr:r,size:o,title:l}=n,u=A3(n,w3),f=o||t.size||"1em",d;return t.className&&(d=t.className),n.className&&(d=(d?d+" ":"")+n.className),fs.createElement("svg",nc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,u,{className:d,style:ic(ic({color:n.color||t.color},t.style),n.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),l&&fs.createElement("title",null,l),n.children)};return Bv!==void 0?fs.createElement(Bv.Consumer,null,t=>e(t)):e(gx)}function L3(n){return en({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"},child:[]}]})(n)}function N3(n){return en({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"},child:[]}]})(n)}function I3(n){return en({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"},child:[]}]})(n)}function U3(n){return en({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"},child:[]},{tag:"path",attr:{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"},child:[]}]})(n)}function F3(n){return en({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",clipRule:"evenodd"},child:[]}]})(n)}function O3(n){return en({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"},child:[]}]})(n)}function B3(n){return en({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"},child:[]},{tag:"path",attr:{d:"M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"},child:[]}]})(n)}function k3(n){return en({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"},child:[]}]})(n)}function z3(n){return en({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"},child:[]}]})(n)}function V3(n){return en({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z",clipRule:"evenodd"},child:[]}]})(n)}function _x(n){return en({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"},child:[]}]})(n)}function H3(n){return en({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"},child:[]},{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"},child:[]}]})(n)}function zv({className:n=""}){const{theme:e,toggleTheme:t}=z_(),r=e==="dark";return re.jsx(dt.button,{type:"button",className:`theme-toggle ${n}`,onClick:t,"aria-label":r?"Switch to light mode":"Switch to dark mode",whileHover:{scale:1.08},whileTap:{scale:.92},children:re.jsx(dt.span,{className:"theme-toggle__icon",initial:{rotate:-90,opacity:0,scale:.5},animate:{rotate:0,opacity:1,scale:1},exit:{rotate:90,opacity:0,scale:.5},transition:{duration:.35,ease:[.22,1,.36,1]},children:r?re.jsx(N3,{}):re.jsx(I3,{})},e)})}const md=[{href:"#home",label:"Home",Icon:O3},{href:"#about",label:"About",Icon:L3},{href:"#skills",label:"Skills",Icon:F3},{href:"#projects",label:"Projects",Icon:k3},{href:"#contact",label:"Contact",Icon:U3}];function G3(){const[n,e]=Oe.useState(!1),[t,r]=Oe.useState("home");Oe.useEffect(()=>{const l=()=>e(window.scrollY>50);return window.addEventListener("scroll",l,{passive:!0}),()=>window.removeEventListener("scroll",l)},[]),Oe.useEffect(()=>{const l=new IntersectionObserver(u=>u.forEach(f=>f.isIntersecting&&r(f.target.id)),{rootMargin:"-40% 0px -55% 0px"});return md.forEach(({href:u})=>{const f=document.getElementById(u.slice(1));f&&l.observe(f)}),()=>l.disconnect()},[]);const o=l=>{var u;return(u=document.querySelector(l))==null?void 0:u.scrollIntoView({behavior:"smooth"})};return re.jsxs(re.Fragment,{children:[re.jsx(dt.header,{className:`navbar ${n?"navbar--scrolled":""}`,initial:{y:-100,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8,ease:[.22,1,.36,1]},children:re.jsxs("nav",{className:"navbar__inner container",children:[re.jsxs(dt.a,{href:"#home",className:"navbar__logo",onClick:l=>{l.preventDefault(),o("#home")},whileHover:{scale:1.05},whileTap:{scale:.95},children:["SD",re.jsx("span",{className:"navbar__logo-dot",children:"."})]}),re.jsx("ul",{className:"navbar__links",role:"list",children:md.map((l,u)=>{const f=l.href.slice(1),d=t===f;return re.jsx(dt.li,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:.1*u+.3,duration:.5},children:re.jsxs("button",{className:`nav-btn ${d?"is-active":""}`,onClick:()=>o(l.href),children:[re.jsx(dt.span,{className:"nav-btn__bg",animate:{opacity:d?1:0},transition:{duration:.25}}),re.jsx(dt.span,{className:"nav-btn__bar",animate:{opacity:d?1:0,scaleX:d?1:.3},transition:{type:"spring",stiffness:400,damping:28}}),re.jsx(dt.span,{className:"nav-btn__cone",animate:{opacity:d?1:0},transition:{duration:.28}}),re.jsx(dt.span,{className:"nav-btn__icon",animate:d?{y:-2,scale:1.15}:{y:0,scale:1},transition:{type:"spring",stiffness:440,damping:26},children:re.jsx(l.Icon,{})}),re.jsx("span",{className:"nav-btn__label",children:l.label})]})},l.href)})}),re.jsxs("div",{className:"navbar__actions",children:[re.jsx(zv,{}),re.jsx(dt.a,{href:"#contact",className:"btn btn--primary navbar__cta",onClick:l=>{l.preventDefault(),o("#contact")},whileHover:{scale:1.04,boxShadow:"0 8px 30px rgba(99,102,241,0.4)"},whileTap:{scale:.97},children:"Let's Talk"})]}),re.jsx("div",{className:"navbar__mobile-actions",children:re.jsx(zv,{})})]})}),re.jsx(dt.nav,{className:"bottom-nav","aria-label":"Mobile navigation",initial:{y:100,opacity:0},animate:{y:0,opacity:1},transition:{duration:.7,delay:.4,ease:[.22,1,.36,1]},children:md.map(l=>{const u=l.href.slice(1),f=t===u;return re.jsxs("button",{className:`nav-btn bottom-nav__btn ${f?"is-active":""}`,onClick:()=>o(l.href),children:[re.jsx(dt.span,{className:"nav-btn__bg",animate:{opacity:f?1:0},transition:{duration:.25}}),re.jsx(dt.span,{className:"nav-btn__bar",animate:{opacity:f?1:0,scaleX:f?1:.3},transition:{type:"spring",stiffness:400,damping:28}}),re.jsx(dt.span,{className:"nav-btn__cone",animate:{opacity:f?1:0},transition:{duration:.28}}),re.jsx(dt.span,{className:"nav-btn__icon",animate:f?{y:-2,scale:1.15}:{y:0,scale:1},transition:{type:"spring",stiffness:440,damping:26},children:re.jsx(l.Icon,{})}),re.jsx("span",{className:"nav-btn__label",children:l.label})]},l.href)})})]})}function xx(n){return en({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(n)}function Ip(n){return en({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(n)}function W3(){return re.jsxs("section",{id:"home",className:"hero",children:[re.jsxs("div",{className:"hero__bg",children:[re.jsx(dt.div,{className:"hero__orb hero__orb--1",animate:{x:[0,30,0],y:[0,-20,0]},transition:{duration:8,repeat:1/0,ease:"easeInOut"}}),re.jsx(dt.div,{className:"hero__orb hero__orb--2",animate:{x:[0,-25,0],y:[0,25,0]},transition:{duration:10,repeat:1/0,ease:"easeInOut"}}),re.jsx("div",{className:"hero__grid"})]}),re.jsxs("div",{className:"container hero__content",children:[re.jsx(dt.p,{className:"hero__greeting",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:"Hello, I'm"}),re.jsxs(dt.h1,{className:"hero__name",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.35,ease:[.22,1,.36,1]},children:["Sourabh",re.jsx("br",{}),re.jsx("span",{className:"hero__name-accent",children:"Dhulrao"})]}),re.jsx(dt.p,{className:"hero__tagline",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.55},children:"An AI Developer who Build things that people remember, not just websites."}),re.jsxs(dt.div,{className:"hero__actions",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.75},children:[re.jsx(dt.a,{href:"#projects",className:"btn btn--primary",onClick:n=>{var e;n.preventDefault(),(e=document.querySelector("#projects"))==null||e.scrollIntoView({behavior:"smooth"})},whileHover:{scale:1.05,boxShadow:"0 8px 30px rgba(99, 102, 241, 0.45)"},whileTap:{scale:.97},children:"View My Work"}),re.jsxs(dt.a,{href:"#contact",className:"btn btn--outline",onClick:n=>{var e;n.preventDefault(),(e=document.querySelector("#contact"))==null||e.scrollIntoView({behavior:"smooth"})},whileHover:{scale:1.05,borderColor:"var(--accent)"},whileTap:{scale:.97},children:[re.jsx(_x,{})," Get In Touch"]})]}),re.jsx(dt.div,{className:"hero__socials",initial:{opacity:0},animate:{opacity:1},transition:{duration:.6,delay:1},children:[{icon:Ip,href:"https://github.com",label:"GitHub"},{icon:xx,href:"https://linkedin.com",label:"LinkedIn"}].map(({icon:n,href:e,label:t},r)=>re.jsx(dt.a,{href:e,target:"_blank",rel:"noopener noreferrer","aria-label":t,initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{delay:1.1+r*.1},whileHover:{y:-4,color:"var(--accent)"},children:re.jsx(n,{})},t))})]}),re.jsx(dt.a,{href:"#about",className:"hero__scroll",onClick:n=>{var e;n.preventDefault(),(e=document.querySelector("#about"))==null||e.scrollIntoView({behavior:"smooth"})},initial:{opacity:0},animate:{opacity:1},transition:{delay:1.4},children:re.jsx(dt.span,{animate:{y:[0,8,0]},transition:{duration:1.5,repeat:1/0,ease:"easeInOut"},children:re.jsx(V3,{})})})]})}const yx={hidden:{opacity:0,y:40},visible:(n=0)=>({opacity:1,y:0,transition:{duration:.7,delay:n,ease:[.22,1,.36,1]}})},Sx={hidden:{opacity:0,x:-60},visible:(n=0)=>({opacity:1,x:0,transition:{duration:.7,delay:n,ease:[.22,1,.36,1]}})},Mx={hidden:{opacity:0,x:60},visible:(n=0)=>({opacity:1,x:0,transition:{duration:.7,delay:n,ease:[.22,1,.36,1]}})},X3={hidden:{opacity:0,scale:.85},visible:(n=0)=>({opacity:1,scale:1,transition:{duration:.6,delay:n,ease:[.22,1,.36,1]}})},Y3={hidden:{},visible:{transition:{staggerChildren:.12,delayChildren:.1}}};function Hu({children:n,variant:e=yx,delay:t=0,className:r=""}){return re.jsx(dt.div,{className:r,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-80px"},custom:t,variants:e,children:n})}function vc({label:n,title:e,description:t}){return re.jsxs(Hu,{className:"section-heading",children:[re.jsx("span",{className:"section-label",children:n}),re.jsx("h2",{className:"section-title",children:e}),t&&re.jsx("p",{className:"section-desc",children:t})]})}const j3=[{value:"3+",label:"Years Experience"},{value:"20+",label:"Projects Completed"},{value:"15+",label:"Technologies"}];function q3(){return re.jsx("section",{id:"about",className:"section about",children:re.jsxs("div",{className:"container about__grid",children:[re.jsxs(dt.div,{className:"about__visual",initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-80px"},variants:Sx,children:[re.jsxs("div",{className:"about__image-wrapper",children:[re.jsx("div",{className:"about__image",children:re.jsx("span",{className:"about__initials",children:"SD"})}),re.jsx(dt.div,{className:"about__image-ring",animate:{rotate:360},transition:{duration:20,repeat:1/0,ease:"linear"}})]}),re.jsx("div",{className:"about__stats",children:j3.map((n,e)=>re.jsxs(dt.div,{className:"about__stat",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2+e*.1,duration:.5},whileHover:{y:-4,transition:{duration:.2}},children:[re.jsx("span",{className:"about__stat-value",children:n.value}),re.jsx("span",{className:"about__stat-label",children:n.label})]},n.label))})]}),re.jsxs(dt.div,{className:"about__text",initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-80px"},variants:Mx,children:[re.jsx(vc,{label:"About Me",title:"Passionate about building things that matter"}),re.jsx(Hu,{delay:.1,children:re.jsxs("p",{children:["I'm ",re.jsx("strong",{children:"Sourabh Dhulrao"}),", a developer who loves turning ideas into polished, performant web applications. I focus on writing maintainable code, creating intuitive user interfaces, and delivering solutions that make a real impact."]})}),re.jsx(Hu,{delay:.2,children:re.jsx("p",{children:"When I'm not coding, you'll find me exploring new technologies, contributing to open source, or refining my craft one project at a time. I believe great software is a blend of technical excellence and human-centered design."})}),re.jsx(Hu,{delay:.3,children:re.jsx(dt.a,{href:"#contact",className:"btn btn--primary",onClick:n=>{var e;n.preventDefault(),(e=document.querySelector("#contact"))==null||e.scrollIntoView({behavior:"smooth"})},whileHover:{scale:1.04},whileTap:{scale:.97},children:"Download Resume"})})]})]})})}function K3(n){return en({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"},child:[]}]})(n)}function $3(n){return en({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"},child:[]}]})(n)}function Z3(n){return en({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"},child:[]}]})(n)}function Q3(n){return en({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"},child:[]}]})(n)}function J3(n){return en({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"},child:[]}]})(n)}function ew(n){return en({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"},child:[]}]})(n)}function tw(n){return en({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"},child:[]}]})(n)}function nw(n){return en({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"},child:[]}]})(n)}function iw(n){return en({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"},child:[]}]})(n)}function rw(n){return en({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"},child:[]}]})(n)}function sw(n){return en({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"},child:[]}]})(n)}const ow=[{name:"React",icon:Z3,color:"#61DAFB"},{name:"JavaScript",icon:iw,color:"#F7DF1E"},{name:"TypeScript",icon:K3,color:"#3178C6"},{name:"Node.js",icon:ew,color:"#339933"},{name:"Python",icon:Q3,color:"#3776AB"},{name:"MongoDB",icon:nw,color:"#47A248"},{name:"PostgreSQL",icon:J3,color:"#4169E1"},{name:"Git",icon:rw,color:"#F05032"},{name:"Docker",icon:sw,color:"#2496ED"},{name:"Tailwind",icon:$3,color:"#06B6D4"},{name:"Next.js",icon:tw,color:"#ffffff"}];function aw(){const{theme:n}=z_();return re.jsx("section",{id:"skills",className:"section skills",children:re.jsxs("div",{className:"container",children:[re.jsx(vc,{label:"Skills",title:"Technologies I work with",description:"A toolkit built through hands-on projects and continuous learning."}),re.jsx(dt.div,{className:"skills__grid",variants:Y3,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-60px"},children:ow.map((e,t)=>re.jsxs(dt.div,{className:"skill-card",variants:X3,custom:t*.05,whileHover:{y:-8},transition:{duration:.3},children:[re.jsx(e.icon,{style:{color:e.name==="Next.js"?n==="dark"?"#ffffff":"#000000":e.color},className:"skill-card__icon"}),re.jsx("span",{className:"skill-card__name",children:e.name})]},e.name))})]})})}const lw=[{id:1,title:"E-Commerce Platform",description:"A full-stack online store with cart, payments, and admin dashboard. Built for performance and scalability with real-time inventory tracking.",tags:["React","Node.js","MongoDB","Stripe"],accent:"#f59e0b",size:"large",year:"2024",category:"Full-Stack",live:"#",github:"#"},{id:2,title:"Task Management App",description:"Real-time collaborative task board with drag-and-drop, notifications, and team workspaces.",tags:["Next.js","TypeScript","PostgreSQL","Socket.io"],accent:"#e11d48",size:"medium",year:"2024",category:"SaaS",live:"#",github:"#"},{id:3,title:"Weather Dashboard",description:"Beautiful weather app with location search, 7-day forecasts, and animated data visualizations.",tags:["React","OpenWeather API","Chart.js"],accent:"#06b6d4",size:"medium",year:"2023",category:"Data Viz",live:"#",github:"#"},{id:4,title:"Portfolio CMS",description:"Headless CMS for developers to manage portfolio content with a clean admin interface.",tags:["Python","Django","React","Docker"],accent:"#10b981",size:"medium",year:"2023",category:"Dev Tools",live:"#",github:"#"},{id:5,title:"AI Chat Bot",description:"Intelligent conversational AI assistant powered by LLMs with context memory, multi-turn dialogue, and a sleek real-time UI.",tags:["Python","FastAPI","LangChain","React"],accent:"#a855f7",size:"medium",year:"2024",category:"AI / ML",live:"#",github:"#"}];function uw({project:n,index:e}){const[t,r]=Oe.useState(!1);return re.jsxs(dt.article,{className:`pj-card pj-card--${n.size}`,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-80px"},custom:e*.08,variants:yx,onHoverStart:()=>r(!0),onHoverEnd:()=>r(!1),style:{"--accent":n.accent},children:[re.jsx(dt.div,{className:"pj-card__bar",animate:{scaleX:t?1:.28,opacity:t?1:.5},transition:{duration:.35,ease:[.22,1,.36,1]}}),re.jsx("span",{className:"pj-card__index",children:String(e+1).padStart(2,"0")}),re.jsx("div",{className:"pj-card__category",children:n.category}),re.jsxs("div",{className:"pj-card__body",children:[re.jsx("h3",{className:"pj-card__title",children:n.title}),re.jsx("p",{className:"pj-card__desc",children:n.description}),re.jsx("div",{className:"pj-card__tags",children:n.tags.map(o=>re.jsx("span",{className:"pj-card__tag",children:o},o))})]}),re.jsxs("div",{className:"pj-card__footer",children:[re.jsx("span",{className:"pj-card__year",children:n.year}),re.jsxs("div",{className:"pj-card__links",children:[re.jsx(dt.a,{href:n.github,"aria-label":"GitHub",className:"pj-link",whileHover:{scale:1.12},whileTap:{scale:.9},children:re.jsx(Ip,{})}),re.jsx(dt.a,{href:n.live,"aria-label":"Live demo",className:"pj-link pj-link--accent",whileHover:{scale:1.12},whileTap:{scale:.9},children:re.jsx(B3,{})})]})]}),re.jsx(Eg,{children:t&&re.jsx(dt.div,{className:"pj-card__glow",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3}})}),re.jsx(Eg,{children:t&&re.jsxs(dt.div,{className:"pj-card__reveal",initial:{opacity:0,y:12},animate:{opacity:1,y:0},exit:{opacity:0,y:8},transition:{duration:.25},children:["View Project ",re.jsx(z3,{})]})})]})}function cw(){return re.jsx("section",{id:"projects",className:"section projects",children:re.jsxs("div",{className:"container",children:[re.jsx(vc,{label:"Projects",title:"Selected work",description:"A curated set of projects that reflect my craft."}),re.jsx("div",{className:"pj-grid",children:lw.map((n,e)=>re.jsx(uw,{project:n,index:e},n.id))})]})})}function fw(){const[n,e]=Oe.useState({name:"",email:"",message:""}),[t,r]=Oe.useState(!1),o=l=>{l.preventDefault(),r(!0),setTimeout(()=>{r(!1),e({name:"",email:"",message:""})},3e3)};return re.jsx("section",{id:"contact",className:"section contact",children:re.jsxs("div",{className:"container contact__grid",children:[re.jsxs(dt.div,{className:"contact__info",initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-80px"},variants:Sx,children:[re.jsx(vc,{label:"Contact",title:"Let's work together",description:"Have a project in mind or just want to say hello? I'd love to hear from you."}),re.jsxs("div",{className:"contact__details",children:[re.jsxs(dt.a,{href:"mailto:sourabh.dhulrao@email.com",className:"contact__detail",whileHover:{x:6},children:[re.jsx(_x,{}),re.jsx("span",{children:"sourabh.dhulrao@email.com"})]}),re.jsxs("div",{className:"contact__detail",children:[re.jsx(H3,{}),re.jsx("span",{children:"India"})]})]}),re.jsx("div",{className:"contact__socials",children:[{icon:Ip,href:"https://github.com",label:"GitHub"},{icon:xx,href:"https://linkedin.com",label:"LinkedIn"}].map(({icon:l,href:u,label:f})=>re.jsx(dt.a,{href:u,target:"_blank",rel:"noopener noreferrer","aria-label":f,whileHover:{y:-4,color:"var(--accent)"},children:re.jsx(l,{})},f))})]}),re.jsxs(dt.form,{className:"contact__form",onSubmit:o,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-80px"},variants:Mx,children:[["name","email","message"].map((l,u)=>re.jsxs(dt.div,{className:`form-group ${l==="message"?"form-group--full":""}`,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.1*u,duration:.5},children:[re.jsx("label",{htmlFor:l,children:l.charAt(0).toUpperCase()+l.slice(1)}),l==="message"?re.jsx("textarea",{id:l,rows:5,value:n.message,onChange:f=>e({...n,message:f.target.value}),required:!0,placeholder:"Tell me about your project..."}):re.jsx("input",{id:l,type:l==="email"?"email":"text",value:n[l],onChange:f=>e({...n,[l]:f.target.value}),required:!0,placeholder:l==="name"?"Your name":"your@email.com"})]},l)),re.jsx(dt.button,{type:"submit",className:"btn btn--primary btn--full",whileHover:{scale:1.02,boxShadow:"0 8px 30px rgba(99, 102, 241, 0.4)"},whileTap:{scale:.98},children:t?"Message Sent!":"Send Message"})]})]})})}function dw(){const n=new Date().getFullYear();return re.jsx(dt.footer,{className:"footer",initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.6},children:re.jsxs("div",{className:"container footer__inner",children:[re.jsxs("p",{children:["Designed & Built by ",re.jsx("strong",{children:"Sourabh Dhulrao"})]}),re.jsxs("p",{className:"footer__copy",children:["© ",n," All rights reserved."]})]})})}function hw({SIM_RESOLUTION:n=128,DYE_RESOLUTION:e=1440,CAPTURE_RESOLUTION:t=512,DENSITY_DISSIPATION:r=3.5,VELOCITY_DISSIPATION:o=2,PRESSURE:l=.1,PRESSURE_ITERATIONS:u=20,CURL:f=3,SPLAT_RADIUS:d=.2,SPLAT_FORCE:h=6e3,SHADING:m=!0,COLOR_UPDATE_SPEED:v=10,BACK_COLOR:g={r:.5,g:0,b:0},TRANSPARENT:S=!0,RAINBOW_MODE:T=!0,COLOR:R="#ff0000"}){const M=Oe.useRef(null),y=Oe.useRef(null);return Oe.useEffect(()=>{const P=M.current;if(!P)return;let O=!0;function C(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[0,0,0]}const b=window.matchMedia("(pointer: coarse)").matches||window.innerWidth<=768;let D={SIM_RESOLUTION:b?Math.min(n,96):n,DYE_RESOLUTION:b?Math.min(e,512):e,DENSITY_DISSIPATION:r,VELOCITY_DISSIPATION:o,PRESSURE:l,PRESSURE_ITERATIONS:b?Math.min(u,14):u,CURL:f,SPLAT_RADIUS:d,SPLAT_FORCE:h,SHADING:m,COLOR_UPDATE_SPEED:v,RAINBOW_MODE:T,COLOR:R},U=[new C];const{gl:x,ext:L}=B(P);L.supportLinearFiltering||(D.DYE_RESOLUTION=256,D.SHADING=!1);function B(k){const de={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let ve=k.getContext("webgl2",de);const be=!!ve;be||(ve=k.getContext("webgl",de)||k.getContext("experimental-webgl",de));let at,Pt;be?(ve.getExtension("EXT_color_buffer_float"),Pt=ve.getExtension("OES_texture_float_linear")):(at=ve.getExtension("OES_texture_half_float"),Pt=ve.getExtension("OES_texture_half_float_linear")),ve.clearColor(0,0,0,1);const Tt=be?ve.HALF_FLOAT:at&&at.HALF_FLOAT_OES;let yt,on,Fn;return be?(yt=V(ve,ve.RGBA16F,ve.RGBA,Tt),on=V(ve,ve.RG16F,ve.RG,Tt),Fn=V(ve,ve.R16F,ve.RED,Tt)):(yt=V(ve,ve.RGBA,ve.RGBA,Tt),on=V(ve,ve.RGBA,ve.RGBA,Tt),Fn=V(ve,ve.RGBA,ve.RGBA,Tt)),{gl:ve,ext:{formatRGBA:yt,formatRG:on,formatR:Fn,halfFloatTexType:Tt,supportLinearFiltering:Pt}}}function V(k,de,ve,be){if(!ee(k,de,ve,be))switch(de){case k.R16F:return V(k,k.RG16F,k.RG,be);case k.RG16F:return V(k,k.RGBA16F,k.RGBA,be);default:return null}return{internalFormat:de,format:ve}}function ee(k,de,ve,be){const at=k.createTexture();k.bindTexture(k.TEXTURE_2D,at),k.texParameteri(k.TEXTURE_2D,k.TEXTURE_MIN_FILTER,k.NEAREST),k.texParameteri(k.TEXTURE_2D,k.TEXTURE_MAG_FILTER,k.NEAREST),k.texParameteri(k.TEXTURE_2D,k.TEXTURE_WRAP_S,k.CLAMP_TO_EDGE),k.texParameteri(k.TEXTURE_2D,k.TEXTURE_WRAP_T,k.CLAMP_TO_EDGE),k.texImage2D(k.TEXTURE_2D,0,de,4,4,0,ve,be,null);const Pt=k.createFramebuffer();return k.bindFramebuffer(k.FRAMEBUFFER,Pt),k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,at,0),k.checkFramebufferStatus(k.FRAMEBUFFER)===k.FRAMEBUFFER_COMPLETE}class Z{constructor(de,ve){this.vertexShader=de,this.fragmentShaderSource=ve,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(de){let ve=0;for(let at=0;at<de.length;at++)ve+=pr(de[at]);let be=this.programs[ve];if(be==null){let at=j(x.FRAGMENT_SHADER,this.fragmentShaderSource,de);be=te(this.vertexShader,at),this.programs[ve]=be}be!==this.activeProgram&&(this.uniforms=me(be),this.activeProgram=be)}bind(){x.useProgram(this.activeProgram)}}class H{constructor(de,ve){this.uniforms={},this.program=te(de,ve),this.uniforms=me(this.program)}bind(){x.useProgram(this.program)}}function te(k,de){let ve=x.createProgram();return x.attachShader(ve,k),x.attachShader(ve,de),x.linkProgram(ve),x.getProgramParameter(ve,x.LINK_STATUS)||console.trace(x.getProgramInfoLog(ve)),ve}function me(k){let de=[],ve=x.getProgramParameter(k,x.ACTIVE_UNIFORMS);for(let be=0;be<ve;be++){let at=x.getActiveUniform(k,be).name;de[at]=x.getUniformLocation(k,at)}return de}function j(k,de,ve){de=K(de,ve);const be=x.createShader(k);return x.shaderSource(be,de),x.compileShader(be),x.getShaderParameter(be,x.COMPILE_STATUS)||console.trace(x.getShaderInfoLog(be)),be}function K(k,de){if(!de)return k;let ve="";return de.forEach(be=>{ve+="#define "+be+`
`}),ve+k}const W=j(x.VERTEX_SHADER,`
        precision highp float;
        attribute vec2 aPosition;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform vec2 texelSize;

        void main () {
            vUv = aPosition * 0.5 + 0.5;
            vL = vUv - vec2(texelSize.x, 0.0);
            vR = vUv + vec2(texelSize.x, 0.0);
            vT = vUv + vec2(0.0, texelSize.y);
            vB = vUv - vec2(0.0, texelSize.y);
            gl_Position = vec4(aPosition, 0.0, 1.0);
        }
      `),$=j(x.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;

        void main () {
            gl_FragColor = texture2D(uTexture, vUv);
        }
      `),N=j(x.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;
        uniform float value;

        void main () {
            gl_FragColor = value * texture2D(uTexture, vUv);
        }
      `),se=`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uTexture;
      uniform sampler2D uDithering;
      uniform vec2 ditherScale;
      uniform vec2 texelSize;

      vec3 linearToGamma (vec3 color) {
          color = max(color, vec3(0));
          return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
      }

      void main () {
          vec3 c = texture2D(uTexture, vUv).rgb;
          #ifdef SHADING
              vec3 lc = texture2D(uTexture, vL).rgb;
              vec3 rc = texture2D(uTexture, vR).rgb;
              vec3 tc = texture2D(uTexture, vT).rgb;
              vec3 bc = texture2D(uTexture, vB).rgb;

              float dx = length(rc) - length(lc);
              float dy = length(tc) - length(bc);

              vec3 n = normalize(vec3(dx, dy, length(texelSize)));
              vec3 l = vec3(0.0, 0.0, 1.0);

              float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
              c *= diffuse;
          #endif

          float a = max(c.r, max(c.g, c.b));
          gl_FragColor = vec4(c, a);
      }
    `,ye=j(x.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        uniform sampler2D uTarget;
        uniform float aspectRatio;
        uniform vec3 color;
        uniform vec2 point;
        uniform float radius;

        void main () {
            vec2 p = vUv - point.xy;
            p.x *= aspectRatio;
            vec3 splat = exp(-dot(p, p) / radius) * color;
            vec3 base = texture2D(uTarget, vUv).xyz;
            gl_FragColor = vec4(base + splat, 1.0);
        }
      `),je=j(x.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        uniform sampler2D uVelocity;
        uniform sampler2D uSource;
        uniform vec2 texelSize;
        uniform vec2 dyeTexelSize;
        uniform float dt;
        uniform float dissipation;

        vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
            vec2 st = uv / tsize - 0.5;
            vec2 iuv = floor(st);
            vec2 fuv = fract(st);

            vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
            vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
            vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
            vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

            return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
        }

        void main () {
            #ifdef MANUAL_FILTERING
                vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
                vec4 result = bilerp(uSource, coord, dyeTexelSize);
            #else
                vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
                vec4 result = texture2D(uSource, coord);
            #endif
            float decay = 1.0 + dissipation * dt;
            gl_FragColor = result / decay;
        }
      `,L.supportLinearFiltering?null:["MANUAL_FILTERING"]),We=j(x.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uVelocity, vL).x;
            float R = texture2D(uVelocity, vR).x;
            float T = texture2D(uVelocity, vT).y;
            float B = texture2D(uVelocity, vB).y;

            vec2 C = texture2D(uVelocity, vUv).xy;
            if (vL.x < 0.0) { L = -C.x; }
            if (vR.x > 1.0) { R = -C.x; }
            if (vT.y > 1.0) { T = -C.y; }
            if (vB.y < 0.0) { B = -C.y; }

            float div = 0.5 * (R - L + T - B);
            gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
        }
      `),qe=j(x.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uVelocity, vL).y;
            float R = texture2D(uVelocity, vR).y;
            float T = texture2D(uVelocity, vT).x;
            float B = texture2D(uVelocity, vB).x;
            float vorticity = R - L - T + B;
            gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
        }
      `),oe=j(x.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uVelocity;
        uniform sampler2D uCurl;
        uniform float curl;
        uniform float dt;

        void main () {
            float L = texture2D(uCurl, vL).x;
            float R = texture2D(uCurl, vR).x;
            float T = texture2D(uCurl, vT).x;
            float B = texture2D(uCurl, vB).x;
            float C = texture2D(uCurl, vUv).x;

            vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
            force /= length(force) + 0.0001;
            force *= curl * C;
            force.y *= -1.0;

            vec2 velocity = texture2D(uVelocity, vUv).xy;
            velocity += force * dt;
            velocity = min(max(velocity, -1000.0), 1000.0);
            gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
      `),ce=j(x.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uDivergence;

        void main () {
            float L = texture2D(uPressure, vL).x;
            float R = texture2D(uPressure, vR).x;
            float T = texture2D(uPressure, vT).x;
            float B = texture2D(uPressure, vB).x;
            float C = texture2D(uPressure, vUv).x;
            float divergence = texture2D(uDivergence, vUv).x;
            float pressure = (L + R + B + T - divergence) * 0.25;
            gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
        }
      `),we=j(x.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uPressure, vL).x;
            float R = texture2D(uPressure, vR).x;
            float T = texture2D(uPressure, vT).x;
            float B = texture2D(uPressure, vB).x;
            vec2 velocity = texture2D(uVelocity, vUv).xy;
            velocity.xy -= vec2(R - L, T - B);
            gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
      `),Ge=(x.bindBuffer(x.ARRAY_BUFFER,x.createBuffer()),x.bufferData(x.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),x.STATIC_DRAW),x.bindBuffer(x.ELEMENT_ARRAY_BUFFER,x.createBuffer()),x.bufferData(x.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),x.STATIC_DRAW),x.vertexAttribPointer(0,2,x.FLOAT,!1,0,0),x.enableVertexAttribArray(0),(k,de=!1)=>{k==null?(x.viewport(0,0,x.drawingBufferWidth,x.drawingBufferHeight),x.bindFramebuffer(x.FRAMEBUFFER,null)):(x.viewport(0,0,k.width,k.height),x.bindFramebuffer(x.FRAMEBUFFER,k.fbo)),de&&(x.clearColor(0,0,0,1),x.clear(x.COLOR_BUFFER_BIT)),x.drawElements(x.TRIANGLES,6,x.UNSIGNED_SHORT,0)});let Ce,ze,qt,mt,vt;const kt=new H(W,$),_t=new H(W,N),Ct=new H(W,ye),Ut=new H(W,je),tn=new H(W,We),Ft=new H(W,qe),Gt=new H(W,oe),Y=new H(W,ce),nn=new H(W,we),At=new Z(W,se);function I(){let k=hr(D.SIM_RESOLUTION),de=hr(D.DYE_RESOLUTION);const ve=L.halfFloatTexType,be=L.formatRGBA,at=L.formatRG,Pt=L.formatR,Tt=L.supportLinearFiltering?x.LINEAR:x.NEAREST;x.disable(x.BLEND),Ce?Ce=pe(Ce,de.width,de.height,be.internalFormat,be.format,ve,Tt):Ce=Q(de.width,de.height,be.internalFormat,be.format,ve,Tt),ze?ze=pe(ze,k.width,k.height,at.internalFormat,at.format,ve,Tt):ze=Q(k.width,k.height,at.internalFormat,at.format,ve,Tt),qt=E(k.width,k.height,Pt.internalFormat,Pt.format,ve,x.NEAREST),mt=E(k.width,k.height,Pt.internalFormat,Pt.format,ve,x.NEAREST),vt=Q(k.width,k.height,Pt.internalFormat,Pt.format,ve,x.NEAREST)}function E(k,de,ve,be,at,Pt){x.activeTexture(x.TEXTURE0);let Tt=x.createTexture();x.bindTexture(x.TEXTURE_2D,Tt),x.texParameteri(x.TEXTURE_2D,x.TEXTURE_MIN_FILTER,Pt),x.texParameteri(x.TEXTURE_2D,x.TEXTURE_MAG_FILTER,Pt),x.texParameteri(x.TEXTURE_2D,x.TEXTURE_WRAP_S,x.CLAMP_TO_EDGE),x.texParameteri(x.TEXTURE_2D,x.TEXTURE_WRAP_T,x.CLAMP_TO_EDGE),x.texImage2D(x.TEXTURE_2D,0,ve,k,de,0,be,at,null);let yt=x.createFramebuffer();x.bindFramebuffer(x.FRAMEBUFFER,yt),x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Tt,0),x.viewport(0,0,k,de),x.clear(x.COLOR_BUFFER_BIT);let on=1/k,Fn=1/de;return{texture:Tt,fbo:yt,width:k,height:de,texelSizeX:on,texelSizeY:Fn,attach(li){return x.activeTexture(x.TEXTURE0+li),x.bindTexture(x.TEXTURE_2D,Tt),li}}}function Q(k,de,ve,be,at,Pt){let Tt=E(k,de,ve,be,at,Pt),yt=E(k,de,ve,be,at,Pt);return{width:k,height:de,texelSizeX:Tt.texelSizeX,texelSizeY:Tt.texelSizeY,get read(){return Tt},set read(on){Tt=on},get write(){return yt},set write(on){yt=on},swap(){let on=Tt;Tt=yt,yt=on}}}function ae(k,de,ve,be,at,Pt,Tt){let yt=E(de,ve,be,at,Pt,Tt);return kt.bind(),x.uniform1i(kt.uniforms.uTexture,k.attach(0)),Ge(yt),yt}function pe(k,de,ve,be,at,Pt,Tt){return k.width===de&&k.height===ve||(k.read=ae(k.read,de,ve,be,at,Pt,Tt),k.write=E(de,ve,be,at,Pt,Tt),k.width=de,k.height=ve,k.texelSizeX=1/de,k.texelSizeY=1/ve),k}function Ae(){let k=[];D.SHADING&&k.push("SHADING"),At.setKeywords(k)}Ae(),I();let Pe=Date.now(),ge=0;function xe(){if(!O)return;const k=Ie();et()&&I(),Ue(k),De(),tt(k),ot(null),y.current=requestAnimationFrame(xe)}function Ie(){let k=Date.now(),de=(k-Pe)/1e3;return de=Math.min(de,.016666),Pe=k,de}function et(){let k=An(P.clientWidth),de=An(P.clientHeight);return P.width!==k||P.height!==de?(P.width=k,P.height=de,!0):!1}function Ue(k){ge+=k*D.COLOR_UPDATE_SPEED,ge>=1&&(ge=dr(ge,0,1),U.forEach(de=>{de.color=cn()}))}function De(){U.forEach(k=>{k.moved&&(k.moved=!1,G(k))})}function tt(k){x.disable(x.BLEND),Ft.bind(),x.uniform2f(Ft.uniforms.texelSize,ze.texelSizeX,ze.texelSizeY),x.uniform1i(Ft.uniforms.uVelocity,ze.read.attach(0)),Ge(mt),Gt.bind(),x.uniform2f(Gt.uniforms.texelSize,ze.texelSizeX,ze.texelSizeY),x.uniform1i(Gt.uniforms.uVelocity,ze.read.attach(0)),x.uniform1i(Gt.uniforms.uCurl,mt.attach(1)),x.uniform1f(Gt.uniforms.curl,D.CURL),x.uniform1f(Gt.uniforms.dt,k),Ge(ze.write),ze.swap(),tn.bind(),x.uniform2f(tn.uniforms.texelSize,ze.texelSizeX,ze.texelSizeY),x.uniform1i(tn.uniforms.uVelocity,ze.read.attach(0)),Ge(qt),_t.bind(),x.uniform1i(_t.uniforms.uTexture,vt.read.attach(0)),x.uniform1f(_t.uniforms.value,D.PRESSURE),Ge(vt.write),vt.swap(),Y.bind(),x.uniform2f(Y.uniforms.texelSize,ze.texelSizeX,ze.texelSizeY),x.uniform1i(Y.uniforms.uDivergence,qt.attach(0));for(let ve=0;ve<D.PRESSURE_ITERATIONS;ve++)x.uniform1i(Y.uniforms.uPressure,vt.read.attach(1)),Ge(vt.write),vt.swap();nn.bind(),x.uniform2f(nn.uniforms.texelSize,ze.texelSizeX,ze.texelSizeY),x.uniform1i(nn.uniforms.uPressure,vt.read.attach(0)),x.uniform1i(nn.uniforms.uVelocity,ze.read.attach(1)),Ge(ze.write),ze.swap(),Ut.bind(),x.uniform2f(Ut.uniforms.texelSize,ze.texelSizeX,ze.texelSizeY),L.supportLinearFiltering||x.uniform2f(Ut.uniforms.dyeTexelSize,ze.texelSizeX,ze.texelSizeY);let de=ze.read.attach(0);x.uniform1i(Ut.uniforms.uVelocity,de),x.uniform1i(Ut.uniforms.uSource,de),x.uniform1f(Ut.uniforms.dt,k),x.uniform1f(Ut.uniforms.dissipation,D.VELOCITY_DISSIPATION),Ge(ze.write),ze.swap(),L.supportLinearFiltering||x.uniform2f(Ut.uniforms.dyeTexelSize,Ce.texelSizeX,Ce.texelSizeY),x.uniform1i(Ut.uniforms.uVelocity,ze.read.attach(0)),x.uniform1i(Ut.uniforms.uSource,Ce.read.attach(1)),x.uniform1f(Ut.uniforms.dissipation,D.DENSITY_DISSIPATION),Ge(Ce.write),Ce.swap()}function ot(k){x.blendFunc(x.ONE,x.ONE_MINUS_SRC_ALPHA),x.enable(x.BLEND),ct(k)}function ct(k){let de=x.drawingBufferWidth,ve=x.drawingBufferHeight;At.bind(),D.SHADING&&x.uniform2f(At.uniforms.texelSize,1/de,1/ve),x.uniform1i(At.uniforms.uTexture,Ce.read.attach(0)),Ge(k)}function G(k){let de=k.deltaX*D.SPLAT_FORCE,ve=k.deltaY*D.SPLAT_FORCE;_e(k.texcoordX,k.texcoordY,de,ve,k.color)}function Le(k){const de=cn();de.r*=10,de.g*=10,de.b*=10;let ve=10*(Math.random()-.5),be=30*(Math.random()-.5);_e(k.texcoordX,k.texcoordY,ve,be,de)}function _e(k,de,ve,be,at){Ct.bind(),x.uniform1i(Ct.uniforms.uTarget,ze.read.attach(0)),x.uniform1f(Ct.uniforms.aspectRatio,P.width/P.height),x.uniform2f(Ct.uniforms.point,k,de),x.uniform3f(Ct.uniforms.color,ve,be,0),x.uniform1f(Ct.uniforms.radius,Ne(D.SPLAT_RADIUS/100)),Ge(ze.write),ze.swap(),x.uniform1i(Ct.uniforms.uTarget,Ce.read.attach(0)),x.uniform3f(Ct.uniforms.color,at.r,at.g,at.b),Ge(Ce.write),Ce.swap()}function Ne(k){let de=P.width/P.height;return de>1&&(k*=de),k}function Be(k,de,ve,be){k.id=de,k.down=!0,k.moved=!1,k.texcoordX=ve/P.width,k.texcoordY=1-be/P.height,k.prevTexcoordX=k.texcoordX,k.prevTexcoordY=k.texcoordY,k.deltaX=0,k.deltaY=0,k.color=cn()}function Se(k,de,ve,be){k.prevTexcoordX=k.texcoordX,k.prevTexcoordY=k.texcoordY,k.texcoordX=de/P.width,k.texcoordY=1-ve/P.height,k.deltaX=Ze(k.texcoordX-k.prevTexcoordX),k.deltaY=Ot(k.texcoordY-k.prevTexcoordY),k.moved=Math.abs(k.deltaX)>0||Math.abs(k.deltaY)>0,k.color=be}function nt(k){k.down=!1}function Ze(k){let de=P.width/P.height;return de<1&&(k*=de),k}function Ot(k){let de=P.width/P.height;return de>1&&(k/=de),k}function bt(k){let de=k.replace("#","");de.length===3&&(de=de[0]+de[0]+de[1]+de[1]+de[2]+de[2]);const ve=parseInt(de.slice(0,2),16)/255,be=parseInt(de.slice(2,4),16)/255,at=parseInt(de.slice(4,6),16)/255;return{r:ve*.15,g:be*.15,b:at*.15}}function cn(){if(!D.RAINBOW_MODE)return bt(D.COLOR);let k=Qn(Math.random(),1,1);return k.r*=.15,k.g*=.15,k.b*=.15,k}function Qn(k,de,ve){let be,at,Pt,Tt,yt,on,Fn,li;switch(Tt=Math.floor(k*6),yt=k*6-Tt,on=ve*(1-de),Fn=ve*(1-yt*de),li=ve*(1-(1-yt)*de),Tt%6){case 0:be=ve,at=li,Pt=on;break;case 1:be=Fn,at=ve,Pt=on;break;case 2:be=on,at=ve,Pt=li;break;case 3:be=on,at=Fn,Pt=ve;break;case 4:be=li,at=on,Pt=ve;break;case 5:be=ve,at=on,Pt=Fn;break}return{r:be,g:at,b:Pt}}function dr(k,de,ve){const be=ve-de;return(k-de)%be+de}function hr(k){let de=x.drawingBufferWidth/x.drawingBufferHeight;de<1&&(de=1/de);const ve=Math.round(k),be=Math.round(k*de);return x.drawingBufferWidth>x.drawingBufferHeight?{width:be,height:ve}:{width:ve,height:be}}function An(k){const de=b?Math.min(window.devicePixelRatio||1,2):window.devicePixelRatio||1;return Math.floor(k*de)}function pr(k){if(k.length===0)return 0;let de=0;for(let ve=0;ve<k.length;ve++)de=(de<<5)-de+k.charCodeAt(ve),de|=0;return de}function js(k){let de=U[0],ve=An(k.clientX),be=An(k.clientY);Be(de,-1,ve,be),Le(de)}let ms=!1;function gs(k){let de=U[0],ve=An(k.clientX),be=An(k.clientY);if(ms)Se(de,ve,be,de.color);else{let at=cn();Se(de,ve,be,at),ms=!0}}function Rn(k){const de=k.touches[0];if(!de)return;let ve=U[0],be=An(de.clientX),at=An(de.clientY);Be(ve,de.identifier,be,at),Le(ve)}function mr(k){const de=k.touches[0];if(!de)return;let ve=U[0],be=An(de.clientX),at=An(de.clientY);Se(ve,be,at,ve.color)}function Ki(){nt(U[0])}return window.addEventListener("mousedown",js),window.addEventListener("mousemove",gs),window.addEventListener("touchstart",Rn,{passive:!0}),window.addEventListener("touchmove",mr,{passive:!0}),window.addEventListener("touchend",Ki,{passive:!0}),window.addEventListener("touchcancel",Ki,{passive:!0}),xe(),()=>{O=!1,y.current&&(cancelAnimationFrame(y.current),y.current=null),window.removeEventListener("mousedown",js),window.removeEventListener("mousemove",gs),window.removeEventListener("touchstart",Rn),window.removeEventListener("touchmove",mr),window.removeEventListener("touchend",Ki),window.removeEventListener("touchcancel",Ki)}},[]),re.jsx("div",{style:{position:"fixed",top:0,left:0,zIndex:50,pointerEvents:"none",width:"100dvw",height:"100dvh",maxWidth:"100%",overflow:"hidden"},children:re.jsx("canvas",{ref:M,id:"fluid",style:{width:"100%",height:"100%",display:"block"}})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Up="186",pw=0,Vv=1,mw=2,Gu=1,gw=2,Oa=3,Vs=0,oi=1,ir=2,Nr=0,Ga=1,Wa=2,Hv=3,Gv=4,vw=5,Po=100,_w=101,xw=102,yw=103,Sw=104,Mw=200,Ew=201,Tw=202,ww=203,Ex=204,Tx=205,Aw=206,Rw=207,Cw=208,bw=209,Pw=210,Dw=211,Lw=212,Nw=213,Iw=214,ch=0,fh=1,dh=2,$a=3,hh=4,ph=5,mh=6,gh=7,wx=0,Uw=1,Fw=2,lr=0,Ax=1,Rx=2,Cx=3,bx=4,Px=5,Dx=6,Lx=7,Nx=300,Hs=301,Ho=302,gd=303,vd=304,_c=306,vh=1e3,Pr=1001,_h=1002,Un=1003,Ow=1004,hu=1005,Yn=1006,_d=1007,Bs=1008,Pi=1009,Ix=1010,Ux=1011,Za=1012,Fp=1013,ur=1014,rr=1015,cr=1016,Op=1017,Bp=1018,Qa=1020,Fx=35902,Ox=35899,Bx=1021,kx=1022,ji=1023,Or=1026,ks=1027,zx=1028,kp=1029,Gs=1030,zp=1031,Vp=1033,Wu=33776,Xu=33777,Yu=33778,ju=33779,xh=35840,yh=35841,Sh=35842,Mh=35843,Eh=36196,Th=37492,wh=37496,Ah=37488,Rh=37489,rc=37490,Ch=37491,bh=37808,Ph=37809,Dh=37810,Lh=37811,Nh=37812,Ih=37813,Uh=37814,Fh=37815,Oh=37816,Bh=37817,kh=37818,zh=37819,Vh=37820,Hh=37821,Gh=36492,Wh=36494,Xh=36495,Yh=36283,jh=36284,sc=36285,qh=36286,Bw=3200,Wv=0,kw=1,cs="",Ci="srgb",oc="srgb-linear",ac="linear",jt="srgb",xd=7680,zw=519,Vw=512,Hw=513,Gw=514,Hp=515,Ww=516,Xw=517,Gp=518,Yw=519,jw=35044,Xv="300 es",sr=2e3,lc=2001;function qw(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function uc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Kw(){const n=uc("canvas");return n.style.display="block",n}const Yv={};function jv(...n){const e="THREE."+n.shift();console.log(e,...n)}function Vx(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function pt(...n){n=Vx(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ht(...n){n=Vx(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Oo(...n){const e=n.join(" ");e in Yv||(Yv[e]=!0,pt(...n))}function $w(n,e,t){return new Promise(function(r,o){function l(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const Zw={[ch]:fh,[dh]:mh,[hh]:gh,[$a]:ph,[fh]:ch,[mh]:dh,[gh]:hh,[ph]:$a};class Ys{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yd=Math.PI/180,Kh=180/Math.PI;function rl(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Hn[n&255]+Hn[n>>8&255]+Hn[n>>16&255]+Hn[n>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[t&63|128]+Hn[t>>8&255]+"-"+Hn[t>>16&255]+Hn[t>>24&255]+Hn[r&255]+Hn[r>>8&255]+Hn[r>>16&255]+Hn[r>>24&255]).toLowerCase()}function It(n,e,t){return Math.max(e,Math.min(t,n))}function Qw(n,e){return(n%e+e)%e}function Sd(n,e,t){return(1-t)*n+t*e}function Ra(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function si(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Xp=class Xp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(It(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(It(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Xp.prototype.isVector2=!0;let Xt=Xp;class Yo{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let d=r[o+0],h=r[o+1],m=r[o+2],v=r[o+3],g=l[u+0],S=l[u+1],T=l[u+2],R=l[u+3];if(v!==R||d!==g||h!==S||m!==T){let M=d*g+h*S+m*T+v*R;M<0&&(g=-g,S=-S,T=-T,R=-R,M=-M);let y=1-f;if(M<.9995){const P=Math.acos(M),O=Math.sin(P);y=Math.sin(y*P)/O,f=Math.sin(f*P)/O,d=d*y+g*f,h=h*y+S*f,m=m*y+T*f,v=v*y+R*f}else{d=d*y+g*f,h=h*y+S*f,m=m*y+T*f,v=v*y+R*f;const P=1/Math.sqrt(d*d+h*h+m*m+v*v);d*=P,h*=P,m*=P,v*=P}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],d=r[o+1],h=r[o+2],m=r[o+3],v=l[u],g=l[u+1],S=l[u+2],T=l[u+3];return e[t]=f*T+m*v+d*S-h*g,e[t+1]=d*T+m*g+h*v-f*S,e[t+2]=h*T+m*S+f*g-d*v,e[t+3]=m*T-f*v-d*g-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,d=Math.sin,h=f(r/2),m=f(o/2),v=f(l/2),g=d(r/2),S=d(o/2),T=d(l/2);switch(u){case"XYZ":this._x=g*m*v+h*S*T,this._y=h*S*v-g*m*T,this._z=h*m*T+g*S*v,this._w=h*m*v-g*S*T;break;case"YXZ":this._x=g*m*v+h*S*T,this._y=h*S*v-g*m*T,this._z=h*m*T-g*S*v,this._w=h*m*v+g*S*T;break;case"ZXY":this._x=g*m*v-h*S*T,this._y=h*S*v+g*m*T,this._z=h*m*T+g*S*v,this._w=h*m*v-g*S*T;break;case"ZYX":this._x=g*m*v-h*S*T,this._y=h*S*v+g*m*T,this._z=h*m*T-g*S*v,this._w=h*m*v+g*S*T;break;case"YZX":this._x=g*m*v+h*S*T,this._y=h*S*v+g*m*T,this._z=h*m*T-g*S*v,this._w=h*m*v-g*S*T;break;case"XZY":this._x=g*m*v-h*S*T,this._y=h*S*v-g*m*T,this._z=h*m*T+g*S*v,this._w=h*m*v+g*S*T;break;default:pt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],d=t[9],h=t[2],m=t[6],v=t[10],g=r+f+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(m-d)*S,this._y=(l-h)*S,this._z=(u-o)*S}else if(r>f&&r>v){const S=2*Math.sqrt(1+r-f-v);this._w=(m-d)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+h)/S}else if(f>v){const S=2*Math.sqrt(1+f-r-v);this._w=(l-h)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(d+m)/S}else{const S=2*Math.sqrt(1+v-r-f);this._w=(u-o)/S,this._x=(l+h)/S,this._y=(d+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,d=t._y,h=t._z,m=t._w;return this._x=r*m+u*f+o*h-l*d,this._y=o*m+u*d+l*f-r*h,this._z=l*m+u*h+r*d-o*f,this._w=u*m-r*f-o*d-l*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let d=1-t;if(f<.9995){const h=Math.acos(f),m=Math.sin(h);d=Math.sin(d*h)/m,t=Math.sin(t*h)/m,this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+u*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Yp=class Yp{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,d=e.w,h=2*(u*o-f*r),m=2*(f*t-l*o),v=2*(l*r-u*t);return this.x=t+d*h+u*v-f*m,this.y=r+d*m+f*h-l*v,this.z=o+d*v+l*m-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this.z=It(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this.z=It(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(It(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,d=t.z;return this.x=o*d-l*f,this.y=l*u-r*d,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Md.copy(this).projectOnVector(e),this.sub(Md)}reflect(e){return this.sub(Md.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(It(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yp.prototype.isVector3=!0;let ue=Yp;const Md=new ue,qv=new Yo,jp=class jp{constructor(e,t,r,o,l,u,f,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,d,h)}set(e,t,r,o,l,u,f,d,h){const m=this.elements;return m[0]=e,m[1]=o,m[2]=f,m[3]=t,m[4]=l,m[5]=d,m[6]=r,m[7]=u,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],d=r[6],h=r[1],m=r[4],v=r[7],g=r[2],S=r[5],T=r[8],R=o[0],M=o[3],y=o[6],P=o[1],O=o[4],C=o[7],b=o[2],D=o[5],U=o[8];return l[0]=u*R+f*P+d*b,l[3]=u*M+f*O+d*D,l[6]=u*y+f*C+d*U,l[1]=h*R+m*P+v*b,l[4]=h*M+m*O+v*D,l[7]=h*y+m*C+v*U,l[2]=g*R+S*P+T*b,l[5]=g*M+S*O+T*D,l[8]=g*y+S*C+T*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8];return t*u*m-t*f*h-r*l*m+r*f*d+o*l*h-o*u*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8],v=m*u-f*h,g=f*d-m*l,S=h*l-u*d,T=t*v+r*g+o*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=v*R,e[1]=(o*h-m*r)*R,e[2]=(f*r-o*u)*R,e[3]=g*R,e[4]=(m*t-o*d)*R,e[5]=(o*l-f*t)*R,e[6]=S*R,e[7]=(r*d-h*t)*R,e[8]=(u*t-r*l)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const d=Math.cos(l),h=Math.sin(l);return this.set(r*d,r*h,-r*(d*u+h*f)+u+e,-o*h,o*d,-o*(-h*u+d*f)+f+t,0,0,1),this}scale(e,t){return Oo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ed.makeScale(e,t)),this}rotate(e){return Oo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ed.makeRotation(-e)),this}translate(e,t){return Oo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ed.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};jp.prototype.isMatrix3=!0;let xt=jp;const Ed=new xt,Kv=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$v=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jw(){const n={enabled:!0,workingColorSpace:oc,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===jt&&(o.r=Ir(o.r),o.g=Ir(o.g),o.b=Ir(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===jt&&(o.r=Bo(o.r),o.g=Bo(o.g),o.b=Bo(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===cs?ac:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Oo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Oo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[oc]:{primaries:e,whitePoint:r,transfer:ac,toXYZ:Kv,fromXYZ:$v,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ci},outputColorSpaceConfig:{drawingBufferColorSpace:Ci}},[Ci]:{primaries:e,whitePoint:r,transfer:jt,toXYZ:Kv,fromXYZ:$v,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ci}}}),n}const Nt=Jw();function Ir(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let vo;class eA{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{vo===void 0&&(vo=uc("canvas")),vo.width=e.width,vo.height=e.height;const o=vo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=vo}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=uc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Ir(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Ir(t[r]/255)*255):t[r]=Ir(t[r]);return{data:t,width:e.width,height:e.height}}else return pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tA=0;class Wp{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:tA++}),this.uuid=rl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(Td(o[u].image)):l.push(Td(o[u]))}else l=Td(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Td(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?eA.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(pt("Texture: Unable to serialize Texture."),{})}let nA=0;const wd=new ue;class Zn extends Ys{constructor(e=Zn.DEFAULT_IMAGE,t=Zn.DEFAULT_MAPPING,r=Pr,o=Pr,l=Yn,u=Bs,f=ji,d=Pi,h=Zn.DEFAULT_ANISOTROPY,m=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nA++}),this.uuid=rl(),this.name="",this.source=new Wp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(wd).x}get height(){return this.source.getSize(wd).y}get depth(){return this.source.getSize(wd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){pt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){pt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vh:e.x=e.x-Math.floor(e.x);break;case Pr:e.x=e.x<0?0:1;break;case _h:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vh:e.y=e.y-Math.floor(e.y);break;case Pr:e.y=e.y<0?0:1;break;case _h:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=Nx;Zn.DEFAULT_ANISOTROPY=1;const qp=class qp{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,h=d[0],m=d[4],v=d[8],g=d[1],S=d[5],T=d[9],R=d[2],M=d[6],y=d[10];if(Math.abs(m-g)<.01&&Math.abs(v-R)<.01&&Math.abs(T-M)<.01){if(Math.abs(m+g)<.1&&Math.abs(v+R)<.1&&Math.abs(T+M)<.1&&Math.abs(h+S+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const O=(h+1)/2,C=(S+1)/2,b=(y+1)/2,D=(m+g)/4,U=(v+R)/4,x=(T+M)/4;return O>C&&O>b?O<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(O),o=D/r,l=U/r):C>b?C<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),r=D/o,l=x/o):b<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(b),r=U/l,o=x/l),this.set(r,o,l,t),this}let P=Math.sqrt((M-T)*(M-T)+(v-R)*(v-R)+(g-m)*(g-m));return Math.abs(P)<.001&&(P=1),this.x=(M-T)/P,this.y=(v-R)/P,this.z=(g-m)/P,this.w=Math.acos((h+S+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this.z=It(this.z,e.z,t.z),this.w=It(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this.z=It(this.z,e,t),this.w=It(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(It(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};qp.prototype.isVector4=!0;let pn=qp;class iA extends Ys{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new pn(0,0,e,t),this.scissorTest=!1,this.viewport=new pn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new Zn(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Wp(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends iA{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Hx extends Zn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Un,this.minFilter=Un,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rA extends Zn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Un,this.minFilter=Un,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const cc=class cc{constructor(e,t,r,o,l,u,f,d,h,m,v,g,S,T,R,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,d,h,m,v,g,S,T,R,M)}set(e,t,r,o,l,u,f,d,h,m,v,g,S,T,R,M){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=l,y[5]=u,y[9]=f,y[13]=d,y[2]=h,y[6]=m,y[10]=v,y[14]=g,y[3]=S,y[7]=T,y[11]=R,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/_o.setFromMatrixColumn(e,0).length(),l=1/_o.setFromMatrixColumn(e,1).length(),u=1/_o.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),d=Math.cos(o),h=Math.sin(o),m=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const g=u*m,S=u*v,T=f*m,R=f*v;t[0]=d*m,t[4]=-d*v,t[8]=h,t[1]=S+T*h,t[5]=g-R*h,t[9]=-f*d,t[2]=R-g*h,t[6]=T+S*h,t[10]=u*d}else if(e.order==="YXZ"){const g=d*m,S=d*v,T=h*m,R=h*v;t[0]=g+R*f,t[4]=T*f-S,t[8]=u*h,t[1]=u*v,t[5]=u*m,t[9]=-f,t[2]=S*f-T,t[6]=R+g*f,t[10]=u*d}else if(e.order==="ZXY"){const g=d*m,S=d*v,T=h*m,R=h*v;t[0]=g-R*f,t[4]=-u*v,t[8]=T+S*f,t[1]=S+T*f,t[5]=u*m,t[9]=R-g*f,t[2]=-u*h,t[6]=f,t[10]=u*d}else if(e.order==="ZYX"){const g=u*m,S=u*v,T=f*m,R=f*v;t[0]=d*m,t[4]=T*h-S,t[8]=g*h+R,t[1]=d*v,t[5]=R*h+g,t[9]=S*h-T,t[2]=-h,t[6]=f*d,t[10]=u*d}else if(e.order==="YZX"){const g=u*d,S=u*h,T=f*d,R=f*h;t[0]=d*m,t[4]=R-g*v,t[8]=T*v+S,t[1]=v,t[5]=u*m,t[9]=-f*m,t[2]=-h*m,t[6]=S*v+T,t[10]=g-R*v}else if(e.order==="XZY"){const g=u*d,S=u*h,T=f*d,R=f*h;t[0]=d*m,t[4]=-v,t[8]=h*m,t[1]=g*v+R,t[5]=u*m,t[9]=S*v-T,t[2]=T*v-S,t[6]=f*m,t[10]=R*v+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sA,e,oA)}lookAt(e,t,r){const o=this.elements;return hi.subVectors(e,t),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),ns.crossVectors(r,hi),ns.lengthSq()===0&&(Math.abs(r.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),ns.crossVectors(r,hi)),ns.normalize(),pu.crossVectors(hi,ns),o[0]=ns.x,o[4]=pu.x,o[8]=hi.x,o[1]=ns.y,o[5]=pu.y,o[9]=hi.y,o[2]=ns.z,o[6]=pu.z,o[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],d=r[8],h=r[12],m=r[1],v=r[5],g=r[9],S=r[13],T=r[2],R=r[6],M=r[10],y=r[14],P=r[3],O=r[7],C=r[11],b=r[15],D=o[0],U=o[4],x=o[8],L=o[12],B=o[1],V=o[5],ee=o[9],Z=o[13],H=o[2],te=o[6],me=o[10],j=o[14],K=o[3],W=o[7],$=o[11],N=o[15];return l[0]=u*D+f*B+d*H+h*K,l[4]=u*U+f*V+d*te+h*W,l[8]=u*x+f*ee+d*me+h*$,l[12]=u*L+f*Z+d*j+h*N,l[1]=m*D+v*B+g*H+S*K,l[5]=m*U+v*V+g*te+S*W,l[9]=m*x+v*ee+g*me+S*$,l[13]=m*L+v*Z+g*j+S*N,l[2]=T*D+R*B+M*H+y*K,l[6]=T*U+R*V+M*te+y*W,l[10]=T*x+R*ee+M*me+y*$,l[14]=T*L+R*Z+M*j+y*N,l[3]=P*D+O*B+C*H+b*K,l[7]=P*U+O*V+C*te+b*W,l[11]=P*x+O*ee+C*me+b*$,l[15]=P*L+O*Z+C*j+b*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],d=e[9],h=e[13],m=e[2],v=e[6],g=e[10],S=e[14],T=e[3],R=e[7],M=e[11],y=e[15],P=d*S-h*g,O=f*S-h*v,C=f*g-d*v,b=u*S-h*m,D=u*g-d*m,U=u*v-f*m;return t*(R*P-M*O+y*C)-r*(T*P-M*b+y*D)+o*(T*O-R*b+y*U)-l*(T*C-R*D+M*U)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],u=e[5],f=e[9],d=e[2],h=e[6],m=e[10];return t*(u*m-f*h)-r*(l*m-f*d)+o*(l*h-u*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8],v=e[9],g=e[10],S=e[11],T=e[12],R=e[13],M=e[14],y=e[15],P=t*f-r*u,O=t*d-o*u,C=t*h-l*u,b=r*d-o*f,D=r*h-l*f,U=o*h-l*d,x=m*R-v*T,L=m*M-g*T,B=m*y-S*T,V=v*M-g*R,ee=v*y-S*R,Z=g*y-S*M,H=P*Z-O*ee+C*V+b*B-D*L+U*x;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const te=1/H;return e[0]=(f*Z-d*ee+h*V)*te,e[1]=(o*ee-r*Z-l*V)*te,e[2]=(R*U-M*D+y*b)*te,e[3]=(g*D-v*U-S*b)*te,e[4]=(d*B-u*Z-h*L)*te,e[5]=(t*Z-o*B+l*L)*te,e[6]=(M*C-T*U-y*O)*te,e[7]=(m*U-g*C+S*O)*te,e[8]=(u*ee-f*B+h*x)*te,e[9]=(r*B-t*ee-l*x)*te,e[10]=(T*D-R*C+y*P)*te,e[11]=(v*C-m*D-S*P)*te,e[12]=(f*L-u*V-d*x)*te,e[13]=(t*V-r*L+o*x)*te,e[14]=(R*O-T*b-M*P)*te,e[15]=(m*b-v*O+g*P)*te,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,d=e.z,h=l*u,m=l*f;return this.set(h*u+r,h*f-o*d,h*d+o*f,0,h*f+o*d,m*f+r,m*d-o*u,0,h*d-o*f,m*d+o*u,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,d=t._w,h=l+l,m=u+u,v=f+f,g=l*h,S=l*m,T=l*v,R=u*m,M=u*v,y=f*v,P=d*h,O=d*m,C=d*v,b=r.x,D=r.y,U=r.z;return o[0]=(1-(R+y))*b,o[1]=(S+C)*b,o[2]=(T-O)*b,o[3]=0,o[4]=(S-C)*D,o[5]=(1-(g+y))*D,o[6]=(M+P)*D,o[7]=0,o[8]=(T+O)*U,o[9]=(M-P)*U,o[10]=(1-(g+R))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=_o.set(o[0],o[1],o[2]).length();const f=_o.set(o[4],o[5],o[6]).length(),d=_o.set(o[8],o[9],o[10]).length();l<0&&(u=-u),Hi.copy(this);const h=1/u,m=1/f,v=1/d;return Hi.elements[0]*=h,Hi.elements[1]*=h,Hi.elements[2]*=h,Hi.elements[4]*=m,Hi.elements[5]*=m,Hi.elements[6]*=m,Hi.elements[8]*=v,Hi.elements[9]*=v,Hi.elements[10]*=v,t.setFromRotationMatrix(Hi),r.x=u,r.y=f,r.z=d,this}makePerspective(e,t,r,o,l,u,f=sr,d=!1){const h=this.elements,m=2*l/(t-e),v=2*l/(r-o),g=(t+e)/(t-e),S=(r+o)/(r-o);let T,R;if(d)T=l/(u-l),R=u*l/(u-l);else if(f===sr)T=-(u+l)/(u-l),R=-2*u*l/(u-l);else if(f===lc)T=-u/(u-l),R=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=v,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=T,h[14]=R,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=sr,d=!1){const h=this.elements,m=2/(t-e),v=2/(r-o),g=-(t+e)/(t-e),S=-(r+o)/(r-o);let T,R;if(d)T=1/(u-l),R=u/(u-l);else if(f===sr)T=-2/(u-l),R=-(u+l)/(u-l);else if(f===lc)T=-1/(u-l),R=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=v,h[9]=0,h[13]=S,h[2]=0,h[6]=0,h[10]=T,h[14]=R,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};cc.prototype.isMatrix4=!0;let _n=cc;const _o=new ue,Hi=new _n,sA=new ue(0,0,0),oA=new ue(1,1,1),ns=new ue,pu=new ue,hi=new ue,Zv=new _n,Qv=new Yo;class Ws{constructor(e=0,t=0,r=0,o=Ws.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],d=o[1],h=o[5],m=o[9],v=o[2],g=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(It(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-It(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(It(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-It(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(It(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Zv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zv,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qv.setFromEuler(this),this.setFromQuaternion(Qv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ws.DEFAULT_ORDER="XYZ";class Gx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let aA=0;const Jv=new ue,xo=new Yo,wr=new _n,mu=new ue,Ca=new ue,lA=new ue,uA=new Yo,e_=new ue(1,0,0),t_=new ue(0,1,0),n_=new ue(0,0,1),i_={type:"added"},cA={type:"removed"},yo={type:"childadded",child:null},Ad={type:"childremoved",child:null};class ai extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:aA++}),this.uuid=rl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ai.DEFAULT_UP.clone();const e=new ue,t=new Ws,r=new Yo,o=new ue(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new _n},normalMatrix:{value:new xt}}),this.matrix=new _n,this.matrixWorld=new _n,this.matrixAutoUpdate=ai.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xo.setFromAxisAngle(e,t),this.quaternion.multiply(xo),this}rotateOnWorldAxis(e,t){return xo.setFromAxisAngle(e,t),this.quaternion.premultiply(xo),this}rotateX(e){return this.rotateOnAxis(e_,e)}rotateY(e){return this.rotateOnAxis(t_,e)}rotateZ(e){return this.rotateOnAxis(n_,e)}translateOnAxis(e,t){return Jv.copy(e).applyQuaternion(this.quaternion),this.position.add(Jv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(e_,e)}translateY(e){return this.translateOnAxis(t_,e)}translateZ(e){return this.translateOnAxis(n_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?mu.copy(e):mu.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wr.lookAt(Ca,mu,this.up):wr.lookAt(mu,Ca,this.up),this.quaternion.setFromRotationMatrix(wr),o&&(wr.extractRotation(o.matrixWorld),xo.setFromRotationMatrix(wr),this.quaternion.premultiply(xo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(i_),yo.child=e,this.dispatchEvent(yo),yo.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cA),Ad.child=e,this.dispatchEvent(Ad),Ad.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wr.multiply(e.parent.matrixWorld)),e.applyMatrix4(wr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(i_),yo.child=e,this.dispatchEvent(yo),yo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,e,lA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,uA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const v=d[h];l(e.shapes,v)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(l(e.materials,this.material[d]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(l(e.animations,d))}}if(t){const f=u(e.geometries),d=u(e.materials),h=u(e.textures),m=u(e.images),v=u(e.shapes),g=u(e.skeletons),S=u(e.animations),T=u(e.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),m.length>0&&(r.images=m),v.length>0&&(r.shapes=v),g.length>0&&(r.skeletons=g),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=o,r;function u(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ai.DEFAULT_UP=new ue(0,1,0);ai.DEFAULT_MATRIX_AUTO_UPDATE=!0;ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class gu extends ai{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fA={type:"move"};class Rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ue,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ue),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ue,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ue,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const R of e.hand.values()){const M=t.getJointPose(R,r),y=this._getHandJoint(h,R);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const m=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],g=m.position.distanceTo(v.position),S=.02,T=.005;h.inputState.pinching&&g>S+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=S-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(fA)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new gu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Wx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},vu={h:0,s:0,l:0};function Cd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Rt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Nt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Nt.workingColorSpace){if(e=Qw(e,1),t=It(t,0,1),r=It(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Cd(u,l,e+1/3),this.g=Cd(u,l,e),this.b=Cd(u,l,e-1/3)}return Nt.colorSpaceToWorking(this,o),this}setStyle(e,t=Ci){function r(l){l!==void 0&&parseFloat(l)<1&&pt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:pt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);pt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ci){const r=Wx[e.toLowerCase()];return r!==void 0?this.setHex(r,t):pt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}copyLinearToSRGB(e){return this.r=Bo(e.r),this.g=Bo(e.g),this.b=Bo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ci){return Nt.workingToColorSpace(Gn.copy(this),e),Math.round(It(Gn.r*255,0,255))*65536+Math.round(It(Gn.g*255,0,255))*256+Math.round(It(Gn.b*255,0,255))}getHexString(e=Ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.workingToColorSpace(Gn.copy(this),t);const r=Gn.r,o=Gn.g,l=Gn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let d,h;const m=(f+u)/2;if(f===u)d=0,h=0;else{const v=u-f;switch(h=m<=.5?v/(u+f):v/(2-u-f),u){case r:d=(o-l)/v+(o<l?6:0);break;case o:d=(l-r)/v+2;break;case l:d=(r-o)/v+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=Nt.workingColorSpace){return Nt.workingToColorSpace(Gn.copy(this),t),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=Ci){Nt.workingToColorSpace(Gn.copy(this),e);const t=Gn.r,r=Gn.g,o=Gn.b;return e!==Ci?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(is),this.setHSL(is.h+e,is.s+t,is.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(is),e.getHSL(vu);const r=Sd(is.h,vu.h,t),o=Sd(is.s,vu.s,t),l=Sd(is.l,vu.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new Rt;Rt.NAMES=Wx;class dA extends ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ws,this.environmentIntensity=1,this.environmentRotation=new Ws,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Gi=new ue,Ar=new ue,bd=new ue,Rr=new ue,So=new ue,Mo=new ue,r_=new ue,Pd=new ue,Dd=new ue,Ld=new ue,Nd=new pn,Id=new pn,Ud=new pn;class Yi{constructor(e=new ue,t=new ue,r=new ue){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Gi.subVectors(e,t),o.cross(Gi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Gi.subVectors(o,t),Ar.subVectors(r,t),bd.subVectors(e,t);const u=Gi.dot(Gi),f=Gi.dot(Ar),d=Gi.dot(bd),h=Ar.dot(Ar),m=Ar.dot(bd),v=u*h-f*f;if(v===0)return l.set(0,0,0),null;const g=1/v,S=(h*d-f*m)*g,T=(u*m-f*d)*g;return l.set(1-S-T,T,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Rr)===null?!1:Rr.x>=0&&Rr.y>=0&&Rr.x+Rr.y<=1}static getInterpolation(e,t,r,o,l,u,f,d){return this.getBarycoord(e,t,r,o,Rr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Rr.x),d.addScaledVector(u,Rr.y),d.addScaledVector(f,Rr.z),d)}static getInterpolatedAttribute(e,t,r,o,l,u){return Nd.setScalar(0),Id.setScalar(0),Ud.setScalar(0),Nd.fromBufferAttribute(e,t),Id.fromBufferAttribute(e,r),Ud.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Nd,l.x),u.addScaledVector(Id,l.y),u.addScaledVector(Ud,l.z),u}static isFrontFacing(e,t,r,o){return Gi.subVectors(r,t),Ar.subVectors(e,t),Gi.cross(Ar).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gi.subVectors(this.c,this.b),Ar.subVectors(this.a,this.b),Gi.cross(Ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Yi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;So.subVectors(o,r),Mo.subVectors(l,r),Pd.subVectors(e,r);const d=So.dot(Pd),h=Mo.dot(Pd);if(d<=0&&h<=0)return t.copy(r);Dd.subVectors(e,o);const m=So.dot(Dd),v=Mo.dot(Dd);if(m>=0&&v<=m)return t.copy(o);const g=d*v-m*h;if(g<=0&&d>=0&&m<=0)return u=d/(d-m),t.copy(r).addScaledVector(So,u);Ld.subVectors(e,l);const S=So.dot(Ld),T=Mo.dot(Ld);if(T>=0&&S<=T)return t.copy(l);const R=S*h-d*T;if(R<=0&&h>=0&&T<=0)return f=h/(h-T),t.copy(r).addScaledVector(Mo,f);const M=m*T-S*v;if(M<=0&&v-m>=0&&S-T>=0)return r_.subVectors(l,o),f=(v-m)/(v-m+(S-T)),t.copy(o).addScaledVector(r_,f);const y=1/(M+R+g);return u=R*y,f=g*y,t.copy(r).addScaledVector(So,u).addScaledVector(Mo,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class sl{constructor(e=new ue(1/0,1/0,1/0),t=new ue(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Wi):Wi.fromBufferAttribute(l,u),Wi.applyMatrix4(e.matrixWorld),this.expandByPoint(Wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_u.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),_u.copy(r.boundingBox)),_u.applyMatrix4(e.matrixWorld),this.union(_u)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wi),Wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ba),xu.subVectors(this.max,ba),Eo.subVectors(e.a,ba),To.subVectors(e.b,ba),wo.subVectors(e.c,ba),rs.subVectors(To,Eo),ss.subVectors(wo,To),Ps.subVectors(Eo,wo);let t=[0,-rs.z,rs.y,0,-ss.z,ss.y,0,-Ps.z,Ps.y,rs.z,0,-rs.x,ss.z,0,-ss.x,Ps.z,0,-Ps.x,-rs.y,rs.x,0,-ss.y,ss.x,0,-Ps.y,Ps.x,0];return!Fd(t,Eo,To,wo,xu)||(t=[1,0,0,0,1,0,0,0,1],!Fd(t,Eo,To,wo,xu))?!1:(yu.crossVectors(rs,ss),t=[yu.x,yu.y,yu.z],Fd(t,Eo,To,wo,xu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Cr=[new ue,new ue,new ue,new ue,new ue,new ue,new ue,new ue],Wi=new ue,_u=new sl,Eo=new ue,To=new ue,wo=new ue,rs=new ue,ss=new ue,Ps=new ue,ba=new ue,xu=new ue,yu=new ue,Ds=new ue;function Fd(n,e,t,r,o){for(let l=0,u=n.length-3;l<=u;l+=3){Ds.fromArray(n,l);const f=o.x*Math.abs(Ds.x)+o.y*Math.abs(Ds.y)+o.z*Math.abs(Ds.z),d=e.dot(Ds),h=t.dot(Ds),m=r.dot(Ds);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>f)return!1}return!0}const yn=new ue,Su=new Xt;let hA=0;class $n extends Ys{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hA++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=jw,this.updateRanges=[],this.gpuType=rr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Su.fromBufferAttribute(this,t),Su.applyMatrix3(e),this.setXY(t,Su.x,Su.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix3(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ra(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=si(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ra(t,this.array)),t}setX(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ra(t,this.array)),t}setY(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ra(t,this.array)),t}setZ(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ra(t,this.array)),t}setW(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),r=si(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),r=si(r,this.array),o=si(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),r=si(r,this.array),o=si(o,this.array),l=si(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Xx extends $n{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Yx extends $n{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Ur extends $n{constructor(e,t,r){super(new Float32Array(e),t,r)}}const pA=new sl,Pa=new ue,Od=new ue;class xc{constructor(e=new ue,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):pA.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pa.subVectors(e,this.center);const t=Pa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Pa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Od.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pa.copy(e.center).add(Od)),this.expandByPoint(Pa.copy(e.center).sub(Od))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let mA=0;const Ai=new _n,Bd=new ai,Ao=new ue,pi=new sl,Da=new sl,Dn=new ue;class Di extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mA++}),this.uuid=rl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qw(e)?Yx:Xx)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new xt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ai.makeRotationFromQuaternion(e),this.applyMatrix4(Ai),this}rotateX(e){return Ai.makeRotationX(e),this.applyMatrix4(Ai),this}rotateY(e){return Ai.makeRotationY(e),this.applyMatrix4(Ai),this}rotateZ(e){return Ai.makeRotationZ(e),this.applyMatrix4(Ai),this}translate(e,t,r){return Ai.makeTranslation(e,t,r),this.applyMatrix4(Ai),this}scale(e,t,r){return Ai.makeScale(e,t,r),this.applyMatrix4(Ai),this}lookAt(e){return Bd.lookAt(e),Bd.updateMatrix(),this.applyMatrix4(Bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ao).negate(),this.translate(Ao.x,Ao.y,Ao.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ur(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ue(-1/0,-1/0,-1/0),new ue(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];pi.setFromBufferAttribute(l),this.morphTargetsRelative?(Dn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(Dn),Dn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(Dn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ue,1/0);return}if(e){const r=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];Da.setFromBufferAttribute(f),this.morphTargetsRelative?(Dn.addVectors(pi.min,Da.min),pi.expandByPoint(Dn),Dn.addVectors(pi.max,Da.max),pi.expandByPoint(Dn)):(pi.expandByPoint(Da.min),pi.expandByPoint(Da.max))}pi.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)Dn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Dn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],d=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)Dn.fromBufferAttribute(f,h),d&&(Ao.fromBufferAttribute(e,h),Dn.add(Ao)),o=Math.max(o,r.distanceToSquared(Dn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new $n(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const f=[],d=[];for(let x=0;x<r.count;x++)f[x]=new ue,d[x]=new ue;const h=new ue,m=new ue,v=new ue,g=new Xt,S=new Xt,T=new Xt,R=new ue,M=new ue;function y(x,L,B){h.fromBufferAttribute(r,x),m.fromBufferAttribute(r,L),v.fromBufferAttribute(r,B),g.fromBufferAttribute(l,x),S.fromBufferAttribute(l,L),T.fromBufferAttribute(l,B),m.sub(h),v.sub(h),S.sub(g),T.sub(g);const V=1/(S.x*T.y-T.x*S.y);isFinite(V)&&(R.copy(m).multiplyScalar(T.y).addScaledVector(v,-S.y).multiplyScalar(V),M.copy(v).multiplyScalar(S.x).addScaledVector(m,-T.x).multiplyScalar(V),f[x].add(R),f[L].add(R),f[B].add(R),d[x].add(M),d[L].add(M),d[B].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let x=0,L=P.length;x<L;++x){const B=P[x],V=B.start,ee=B.count;for(let Z=V,H=V+ee;Z<H;Z+=3)y(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const O=new ue,C=new ue,b=new ue,D=new ue;function U(x){b.fromBufferAttribute(o,x),D.copy(b);const L=f[x];O.copy(L),O.sub(b.multiplyScalar(b.dot(L))).normalize(),C.crossVectors(D,L);const V=C.dot(d[x])<0?-1:1;u.setXYZW(x,O.x,O.y,O.z,V)}for(let x=0,L=P.length;x<L;++x){const B=P[x],V=B.start,ee=B.count;for(let Z=V,H=V+ee;Z<H;Z+=3)U(e.getX(Z+0)),U(e.getX(Z+1)),U(e.getX(Z+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new $n(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,S=r.count;g<S;g++)r.setXYZ(g,0,0,0);const o=new ue,l=new ue,u=new ue,f=new ue,d=new ue,h=new ue,m=new ue,v=new ue;if(e)for(let g=0,S=e.count;g<S;g+=3){const T=e.getX(g+0),R=e.getX(g+1),M=e.getX(g+2);o.fromBufferAttribute(t,T),l.fromBufferAttribute(t,R),u.fromBufferAttribute(t,M),m.subVectors(u,l),v.subVectors(o,l),m.cross(v),f.fromBufferAttribute(r,T),d.fromBufferAttribute(r,R),h.fromBufferAttribute(r,M),f.add(m),d.add(m),h.add(m),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(R,d.x,d.y,d.z),r.setXYZ(M,h.x,h.y,h.z)}else for(let g=0,S=t.count;g<S;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),m.subVectors(u,l),v.subVectors(o,l),m.cross(v),r.setXYZ(g+0,m.x,m.y,m.z),r.setXYZ(g+1,m.x,m.y,m.z),r.setXYZ(g+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Dn.fromBufferAttribute(e,t),Dn.normalize(),e.setXYZ(t,Dn.x,Dn.y,Dn.z)}toNonIndexed(){function e(f,d){const h=f.array,m=f.itemSize,v=f.normalized,g=new h.constructor(d.length*m);let S=0,T=0;for(let R=0,M=d.length;R<M;R++){f.isInterleavedBufferAttribute?S=d[R]*f.data.stride+f.offset:S=d[R]*m;for(let y=0;y<m;y++)g[T++]=h[S++]}return new $n(g,m,v)}if(this.index===null)return pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Di,r=this.index.array,o=this.attributes;for(const f in o){const d=o[f],h=e(d,r);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const d=[],h=l[f];for(let m=0,v=h.length;m<v;m++){const g=h[m],S=e(g,r);d.push(S)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const h=u[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let v=0,g=h.length;v<g;v++){const S=h[v];m.push(S.toJSON(e.data))}m.length>0&&(o[d]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const m=o[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],v=l[h];for(let g=0,S=v.length;g<S;g++)m.push(v[g].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,m=u.length;h<m;h++){const v=u[h];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kd=new ue,gA=new ue,vA=new xt;class us{constructor(e=new ue(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=kd.subVectors(r,t).cross(gA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(kd),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||vA.getNormalMatrix(e),o=this.coplanarPoint(kd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let _A=0;class ol extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_A++}),this.uuid=rl(),this.name="",this.type="Material",this.blending=Ga,this.side=Vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ex,this.blendDst=Tx,this.blendEquation=Po,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=$a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zw,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xd,this.stencilZFail=xd,this.stencilZPass=xd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){pt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){pt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const d=l[f];delete d.metadata,u.push(d)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Rt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new us().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Xt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const br=new ue,zd=new ue,Mu=new ue,Eu=new ue;class jx{constructor(e=new ue,t=new ue(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,br)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=br.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(br.copy(this.origin).addScaledVector(this.direction,t),br.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){zd.copy(e).add(t).multiplyScalar(.5),Mu.copy(t).sub(e).normalize(),Eu.copy(this.origin).sub(zd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Mu),f=Eu.dot(this.direction),d=-Eu.dot(Mu),h=Eu.lengthSq(),m=Math.abs(1-u*u);let v,g,S,T;if(m>0)if(v=u*d-f,g=u*f-d,T=l*m,v>=0)if(g>=-T)if(g<=T){const R=1/m;v*=R,g*=R,S=v*(v+u*g+2*f)+g*(u*v+g+2*d)+h}else g=l,v=Math.max(0,-(u*g+f)),S=-v*v+g*(g+2*d)+h;else g=-l,v=Math.max(0,-(u*g+f)),S=-v*v+g*(g+2*d)+h;else g<=-T?(v=Math.max(0,-(-u*l+f)),g=v>0?-l:Math.min(Math.max(-l,-d),l),S=-v*v+g*(g+2*d)+h):g<=T?(v=0,g=Math.min(Math.max(-l,-d),l),S=g*(g+2*d)+h):(v=Math.max(0,-(u*l+f)),g=v>0?l:Math.min(Math.max(-l,-d),l),S=-v*v+g*(g+2*d)+h);else g=u>0?-l:l,v=Math.max(0,-(u*g+f)),S=-v*v+g*(g+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(zd).addScaledVector(Mu,g),S}intersectSphere(e,t){if(e.radius<0)return null;br.subVectors(e.center,this.origin);const r=br.dot(this.direction),o=br.dot(br)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,d=r+u;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,d;const h=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,o=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,o=(e.min.x-g.x)*h),m>=0?(l=(e.min.y-g.y)*m,u=(e.max.y-g.y)*m):(l=(e.max.y-g.y)*m,u=(e.min.y-g.y)*m),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),v>=0?(f=(e.min.z-g.z)*v,d=(e.max.z-g.z)*v):(f=(e.max.z-g.z)*v,d=(e.min.z-g.z)*v),r>d||f>o)||((f>r||r!==r)&&(r=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,br)!==null}intersectTriangle(e,t,r,o,l){const u=this.origin,f=this.direction,d=f.x,h=f.y,m=f.z,v=e.x-u.x,g=e.y-u.y,S=e.z-u.z,T=t.x-u.x,R=t.y-u.y,M=t.z-u.z,y=r.x-u.x,P=r.y-u.y,O=r.z-u.z,C=Math.abs(d),b=Math.abs(h),D=Math.abs(m);let U,x,L,B,V,ee,Z,H,te,me,j,K;if(C>=b&&C>=D?(L=d,ee=v,te=T,K=y,d>=0?(U=h,x=m,B=g,V=S,Z=R,H=M,me=P,j=O):(U=m,x=h,B=S,V=g,Z=M,H=R,me=O,j=P)):b>=D?(L=h,ee=g,te=R,K=P,h>=0?(U=m,x=d,B=S,V=v,Z=M,H=T,me=O,j=y):(U=d,x=m,B=v,V=S,Z=T,H=M,me=y,j=O)):(L=m,ee=S,te=M,K=O,m>=0?(U=d,x=h,B=v,V=g,Z=T,H=R,me=y,j=P):(U=h,x=d,B=g,V=v,Z=R,H=T,me=P,j=y)),L===0)return null;const W=U/L,$=x/L,N=1/L,se=B-W*ee,ye=V-$*ee,je=Z-W*te,We=H-$*te,qe=me-W*K,oe=j-$*K,ce=qe*We-oe*je,we=se*oe-ye*qe,Ge=je*ye-We*se;if(o){if(ce<0||we<0||Ge<0)return null}else if((ce<0||we<0||Ge<0)&&(ce>0||we>0||Ge>0))return null;const Ce=ce+we+Ge;if(Ce===0)return null;const ze=N*(ce*ee+we*te+Ge*K);return(Ce>0?ze<0:ze>0)?null:this.at(ze/Ce,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qx extends ol{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ws,this.combine=wx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const s_=new _n,Ls=new jx,Tu=new xc,o_=new ue,wu=new ue,Au=new ue,Ru=new ue,Vd=new ue,Cu=new ue,a_=new ue,bu=new ue;class fr extends ai{constructor(e=new Di,t=new qx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Cu.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const m=f[d],v=l[d];m!==0&&(Vd.fromBufferAttribute(v,e),u?Cu.addScaledVector(Vd,m):Cu.addScaledVector(Vd.sub(t),m))}t.add(Cu)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Tu.copy(r.boundingSphere),Tu.applyMatrix4(l),Ls.copy(e.ray).recast(e.near),!(Tu.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Tu,o_)===null||Ls.origin.distanceToSquared(o_)>(e.far-e.near)**2))&&(s_.copy(l).invert(),Ls.copy(e.ray).applyMatrix4(s_),!(r.boundingBox!==null&&Ls.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Ls)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,d=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,v=l.attributes.normal,g=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let T=0,R=g.length;T<R;T++){const M=g[T],y=u[M.materialIndex],P=Math.max(M.start,S.start),O=Math.min(f.count,Math.min(M.start+M.count,S.start+S.count));for(let C=P,b=O;C<b;C+=3){const D=f.getX(C),U=f.getX(C+1),x=f.getX(C+2);o=Pu(this,y,e,r,h,m,v,D,U,x),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=M.materialIndex,t.push(o))}}else{const T=Math.max(0,S.start),R=Math.min(f.count,S.start+S.count);for(let M=T,y=R;M<y;M+=3){const P=f.getX(M),O=f.getX(M+1),C=f.getX(M+2);o=Pu(this,u,e,r,h,m,v,P,O,C),o&&(o.faceIndex=Math.floor(M/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let T=0,R=g.length;T<R;T++){const M=g[T],y=u[M.materialIndex],P=Math.max(M.start,S.start),O=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let C=P,b=O;C<b;C+=3){const D=C,U=C+1,x=C+2;o=Pu(this,y,e,r,h,m,v,D,U,x),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=M.materialIndex,t.push(o))}}else{const T=Math.max(0,S.start),R=Math.min(d.count,S.start+S.count);for(let M=T,y=R;M<y;M+=3){const P=M,O=M+1,C=M+2;o=Pu(this,u,e,r,h,m,v,P,O,C),o&&(o.faceIndex=Math.floor(M/3),t.push(o))}}}}function xA(n,e,t,r,o,l,u,f){let d;if(e.side===oi?d=r.intersectTriangle(u,l,o,!0,f):d=r.intersectTriangle(o,l,u,e.side===Vs,f),d===null)return null;bu.copy(f),bu.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(bu);return h<t.near||h>t.far?null:{distance:h,point:bu.clone(),object:n}}function Pu(n,e,t,r,o,l,u,f,d,h){n.getVertexPosition(f,wu),n.getVertexPosition(d,Au),n.getVertexPosition(h,Ru);const m=xA(n,e,t,r,wu,Au,Ru,a_);if(m){const v=new ue;Yi.getBarycoord(a_,wu,Au,Ru,v),o&&(m.uv=Yi.getInterpolatedAttribute(o,f,d,h,v,new Xt)),l&&(m.uv1=Yi.getInterpolatedAttribute(l,f,d,h,v,new Xt)),u&&(m.normal=Yi.getInterpolatedAttribute(u,f,d,h,v,new ue),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const g={a:f,b:d,c:h,normal:new ue,materialIndex:0};Yi.getNormal(wu,Au,Ru,g.normal),m.face=g,m.barycoord=v}return m}class yA extends Zn{constructor(e=null,t=1,r=1,o,l,u,f,d,h=Un,m=Un,v,g){super(null,u,f,d,h,m,o,l,v,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ns=new xc,SA=new Xt(.5,.5),Du=new ue;class Kx{constructor(e=new us,t=new us,r=new us,o=new us,l=new us,u=new us){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=sr,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],d=l[2],h=l[3],m=l[4],v=l[5],g=l[6],S=l[7],T=l[8],R=l[9],M=l[10],y=l[11],P=l[12],O=l[13],C=l[14],b=l[15];if(o[0].setComponents(h-u,S-m,y-T,b-P).normalize(),o[1].setComponents(h+u,S+m,y+T,b+P).normalize(),o[2].setComponents(h+f,S+v,y+R,b+O).normalize(),o[3].setComponents(h-f,S-v,y-R,b-O).normalize(),r)o[4].setComponents(d,g,M,C).normalize(),o[5].setComponents(h-d,S-g,y-M,b-C).normalize();else if(o[4].setComponents(h-d,S-g,y-M,b-C).normalize(),t===sr)o[5].setComponents(h+d,S+g,y+M,b+C).normalize();else if(t===lc)o[5].setComponents(d,g,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(e){Ns.center.set(0,0,0);const t=SA.distanceTo(e.center);return Ns.radius=.7071067811865476+t,Ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Du.x=o.normal.x>0?e.max.x:e.min.x,Du.y=o.normal.y>0?e.max.y:e.min.y,Du.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Du)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class MA extends ol{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const l_=new _n,$h=new jx,Lu=new xc,Nu=new ue;class u_ extends ai{constructor(e=new Di,t=new MA){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Lu.copy(r.boundingSphere),Lu.applyMatrix4(o),Lu.radius+=l,e.ray.intersectsSphere(Lu)===!1)return;l_.copy(o).invert(),$h.copy(e.ray).applyMatrix4(l_);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=r.index,v=r.attributes.position;if(h!==null){const g=Math.max(0,u.start),S=Math.min(h.count,u.start+u.count);for(let T=g,R=S;T<R;T++){const M=h.getX(T);Nu.fromBufferAttribute(v,M),c_(Nu,M,d,o,e,t,this)}}else{const g=Math.max(0,u.start),S=Math.min(v.count,u.start+u.count);for(let T=g,R=S;T<R;T++)Nu.fromBufferAttribute(v,T),c_(Nu,T,d,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function c_(n,e,t,r,o,l,u){const f=$h.distanceSqToPoint(n);if(f<t){const d=new ue;$h.closestPointToPoint(n,d),d.applyMatrix4(r);const h=o.ray.origin.distanceTo(d);if(h<o.near||h>o.far)return;l.push({distance:h,distanceToRay:Math.sqrt(f),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class $x extends Zn{constructor(e=[],t=Hs,r,o,l,u,f,d,h,m){super(e,t,r,o,l,u,f,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ja extends Zn{constructor(e,t,r=ur,o,l,u,f=Un,d=Un,h,m=Or,v=1){if(m!==Or&&m!==ks)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:v};super(g,o,l,u,f,d,m,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class EA extends Ja{constructor(e,t=ur,r=Hs,o,l,u=Un,f=Un,d,h=Or){const m={width:e,height:e,depth:1},v=[m,m,m,m,m,m];super(e,e,t,r,o,l,u,f,d,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Zx extends Zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class al extends Di{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const d=[],h=[],m=[],v=[];let g=0,S=0;T("z","y","x",-1,-1,r,t,e,u,l,0),T("z","y","x",1,-1,r,t,-e,u,l,1),T("x","z","y",1,1,e,r,t,o,u,2),T("x","z","y",1,-1,e,r,-t,o,u,3),T("x","y","z",1,-1,e,t,r,o,l,4),T("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new Ur(h,3)),this.setAttribute("normal",new Ur(m,3)),this.setAttribute("uv",new Ur(v,2));function T(R,M,y,P,O,C,b,D,U,x,L){const B=C/U,V=b/x,ee=C/2,Z=b/2,H=D/2,te=U+1,me=x+1;let j=0,K=0;const W=new ue;for(let $=0;$<me;$++){const N=$*V-Z;for(let se=0;se<te;se++){const ye=se*B-ee;W[R]=ye*P,W[M]=N*O,W[y]=H,h.push(W.x,W.y,W.z),W[R]=0,W[M]=0,W[y]=D>0?1:-1,m.push(W.x,W.y,W.z),v.push(se/U),v.push(1-$/x),j+=1}}for(let $=0;$<x;$++)for(let N=0;N<U;N++){const se=g+N+te*$,ye=g+N+te*($+1),je=g+(N+1)+te*($+1),We=g+(N+1)+te*$;d.push(se,ye,We),d.push(ye,je,We),K+=6}f.addGroup(S,K,L),S+=K,g+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ll extends Di{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),d=Math.floor(o),h=f+1,m=d+1,v=e/f,g=t/d,S=[],T=[],R=[],M=[];for(let y=0;y<m;y++){const P=y*g-u;for(let O=0;O<h;O++){const C=O*v-l;T.push(C,-P,0),R.push(0,0,1),M.push(O/f),M.push(1-y/d)}}for(let y=0;y<d;y++)for(let P=0;P<f;P++){const O=P+h*y,C=P+h*(y+1),b=P+1+h*(y+1),D=P+1+h*y;S.push(O,C,D),S.push(C,b,D)}this.setIndex(S),this.setAttribute("position",new Ur(T,3)),this.setAttribute("normal",new Ur(R,3)),this.setAttribute("uv",new Ur(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.width,e.height,e.widthSegments,e.heightSegments)}}function Go(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];if(f_(o))o.isRenderTargetTexture?(pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(f_(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Kn(n){const e={};for(let t=0;t<n.length;t++){const r=Go(n[t]);for(const o in r)e[o]=r[o]}return e}function f_(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function TA(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Qx(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Nt.workingColorSpace}const wA={clone:Go,merge:Kn};var AA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends ol{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AA,this.fragmentShader=RA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Go(e.uniforms),this.uniformsGroups=TA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new Rt().setHex(o.value);break;case"v2":this.uniforms[r].value=new Xt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ue().fromArray(o.value);break;case"v4":this.uniforms[r].value=new pn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new xt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new _n().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class CA extends gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bA extends ol{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class PA extends ol{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Iu=new ue,Uu=new Yo,er=new ue;class Jx extends ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _n,this.projectionMatrix=new _n,this.projectionMatrixInverse=new _n,this.coordinateSystem=sr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Iu,Uu,er),er.x===1&&er.y===1&&er.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Iu,Uu,er.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Iu,Uu,er),er.x===1&&er.y===1&&er.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Iu,Uu,er.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const os=new ue,d_=new Xt,h_=new Xt;class bi extends Jx{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Kh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kh*2*Math.atan(Math.tan(yd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,t){return this.getViewBounds(e,d_,h_),t.subVectors(h_,d_)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yd*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;l+=u.offsetX*o/d,t-=u.offsetY*r/h,o*=u.width/d,r*=u.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ey extends Jx{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ro=-90,Co=1;class DA extends ai{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new bi(Ro,Co,e,t);o.layers=this.layers,this.add(o);const l=new bi(Ro,Co,e,t);l.layers=this.layers,this.add(l);const u=new bi(Ro,Co,e,t);u.layers=this.layers,this.add(u);const f=new bi(Ro,Co,e,t);f.layers=this.layers,this.add(f);const d=new bi(Ro,Co,e,t);d.layers=this.layers,this.add(d);const h=new bi(Ro,Co,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,d]=t;for(const h of t)this.remove(h);if(e===sr)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===lc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,d,h,m]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,4,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(v,g,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class LA extends bi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Kp=class Kp{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};Kp.prototype.isMatrix2=!0;let p_=Kp;function m_(n,e,t,r){const o=NA(r);switch(t){case Bx:return n*e;case zx:return n*e/o.components*o.byteLength;case kp:return n*e/o.components*o.byteLength;case Gs:return n*e*2/o.components*o.byteLength;case zp:return n*e*2/o.components*o.byteLength;case kx:return n*e*3/o.components*o.byteLength;case ji:return n*e*4/o.components*o.byteLength;case Vp:return n*e*4/o.components*o.byteLength;case Wu:case Xu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Yu:case ju:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yh:case Mh:return Math.max(n,16)*Math.max(e,8)/4;case xh:case Sh:return Math.max(n,8)*Math.max(e,8)/2;case Eh:case Th:case Ah:case Rh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wh:case rc:case Ch:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Dh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Oh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case kh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case zh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Vh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Hh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Gh:case Wh:case Xh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Yh:case jh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case sc:case qh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function NA(n){switch(n){case Pi:case Ix:return{byteLength:1,components:1};case Za:case Ux:case cr:return{byteLength:2,components:1};case Op:case Bp:return{byteLength:2,components:4};case ur:case Fp:case rr:return{byteLength:4,components:1};case Fx:case Ox:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Up}}));typeof window<"u"&&(window.__THREE__?pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Up);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ty(){let n=null,e=!1,t=null,r=null;function o(l,u){r=n.requestAnimationFrame(o),t(l,u)}return{start:function(){e!==!0&&t!==null&&n!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){n=l}}}function IA(n){const e=new WeakMap;function t(f,d){const h=f.array,m=f.usage,v=h.byteLength,g=n.createBuffer();n.bindBuffer(d,g),n.bufferData(d,h,m),f.onUploadCallback();let S;if(h instanceof Float32Array)S=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)S=n.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?S=n.HALF_FLOAT:S=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=n.SHORT;else if(h instanceof Uint32Array)S=n.UNSIGNED_INT;else if(h instanceof Int32Array)S=n.INT;else if(h instanceof Int8Array)S=n.BYTE;else if(h instanceof Uint8Array)S=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,d,h){const m=d.array,v=d.updateRanges;if(n.bindBuffer(h,f),v.length===0)n.bufferSubData(h,0,m);else{v.sort((S,T)=>S.start-T.start);let g=0;for(let S=1;S<v.length;S++){const T=v[g],R=v[S];R.start<=T.start+T.count+1?T.count=Math.max(T.count,R.start+R.count-T.start):(++g,v[g]=R)}v.length=g+1;for(let S=0,T=v.length;S<T;S++){const R=v[S];n.bufferSubData(h,R.start*m.BYTES_PER_ELEMENT,m,R.start,R.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(n.deleteBuffer(d.buffer),e.delete(f))}function u(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,d),h.version=f.version}}return{get:o,remove:l,update:u}}var UA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FA=`#ifdef USE_ALPHAHASH
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
#endif`,OA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,BA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VA=`#ifdef USE_AOMAP
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
#endif`,HA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,GA=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,WA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,XA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,YA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qA=`#ifdef USE_IRIDESCENCE
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
#endif`,KA=`#ifdef USE_BUMPMAP
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
#endif`,$A=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ZA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,QA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,JA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,tR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,nR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,iR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,rR=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,sR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,oR=`vec3 transformedNormal = objectNormal;
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
#endif`,aR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fR="gl_FragColor = linearToOutputTexel( gl_FragColor );",dR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,pR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mR=`#ifdef USE_ENVMAP
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
#endif`,gR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_R=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,SR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MR=`#ifdef USE_GRADIENTMAP
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
}`,ER=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AR=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,RR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,CR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,LR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,NR=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,IR=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,UR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,FR=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,OR=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,BR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,HR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,GR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,XR=`#if defined( USE_POINTS_UV )
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
#endif`,YR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,KR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$R=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZR=`#ifdef USE_MORPHTARGETS
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
#endif`,QR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,eC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,rC=`#ifdef USE_NORMALMAP
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
#endif`,sC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,fC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,_C=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,xC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,yC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,SC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,MC=`#ifdef USE_SKINNING
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
#endif`,EC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TC=`#ifdef USE_SKINNING
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
#endif`,wC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,AC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bC=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,PC=`#ifdef USE_TRANSMISSION
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
#endif`,DC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const UC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FC=`uniform sampler2D t2D;
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
}`,OC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VC=`#include <common>
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
}`,HC=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
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
}`,GC=`#define DISTANCE
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
}`,WC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,XC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jC=`uniform float scale;
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
}`,qC=`uniform vec3 diffuse;
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
}`,KC=`#include <common>
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
}`,$C=`uniform vec3 diffuse;
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
}`,ZC=`#define LAMBERT
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
}`,QC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,JC=`#define MATCAP
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
}`,eb=`#define MATCAP
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
}`,tb=`#define NORMAL
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
}`,nb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ib=`#define PHONG
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
}`,rb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,sb=`#define STANDARD
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
}`,ob=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,ab=`#define TOON
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
}`,lb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,ub=`uniform float size;
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
}`,cb=`uniform vec3 diffuse;
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
}`,fb=`#include <common>
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
}`,db=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,hb=`uniform float rotation;
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
}`,pb=`uniform vec3 diffuse;
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
}`,Et={alphahash_fragment:UA,alphahash_pars_fragment:FA,alphamap_fragment:OA,alphamap_pars_fragment:BA,alphatest_fragment:kA,alphatest_pars_fragment:zA,aomap_fragment:VA,aomap_pars_fragment:HA,batching_pars_vertex:GA,batching_vertex:WA,begin_vertex:XA,beginnormal_vertex:YA,bsdfs:jA,iridescence_fragment:qA,bumpmap_pars_fragment:KA,clipping_planes_fragment:$A,clipping_planes_pars_fragment:ZA,clipping_planes_pars_vertex:QA,clipping_planes_vertex:JA,color_fragment:eR,color_pars_fragment:tR,color_pars_vertex:nR,color_vertex:iR,common:rR,cube_uv_reflection_fragment:sR,defaultnormal_vertex:oR,displacementmap_pars_vertex:aR,displacementmap_vertex:lR,emissivemap_fragment:uR,emissivemap_pars_fragment:cR,colorspace_fragment:fR,colorspace_pars_fragment:dR,envmap_fragment:hR,envmap_common_pars_fragment:pR,envmap_pars_fragment:mR,envmap_pars_vertex:gR,envmap_physical_pars_fragment:RR,envmap_vertex:vR,fog_vertex:_R,fog_pars_vertex:xR,fog_fragment:yR,fog_pars_fragment:SR,gradientmap_pars_fragment:MR,lightmap_pars_fragment:ER,lights_lambert_fragment:TR,lights_lambert_pars_fragment:wR,lights_pars_begin:AR,lights_toon_fragment:CR,lights_toon_pars_fragment:bR,lights_phong_fragment:PR,lights_phong_pars_fragment:DR,lights_physical_fragment:LR,lights_physical_pars_fragment:NR,lights_fragment_begin:IR,lights_fragment_maps:UR,lights_fragment_end:FR,lightprobes_pars_fragment:OR,logdepthbuf_fragment:BR,logdepthbuf_pars_fragment:kR,logdepthbuf_pars_vertex:zR,logdepthbuf_vertex:VR,map_fragment:HR,map_pars_fragment:GR,map_particle_fragment:WR,map_particle_pars_fragment:XR,metalnessmap_fragment:YR,metalnessmap_pars_fragment:jR,morphinstance_vertex:qR,morphcolor_vertex:KR,morphnormal_vertex:$R,morphtarget_pars_vertex:ZR,morphtarget_vertex:QR,normal_fragment_begin:JR,normal_fragment_maps:eC,normal_pars_fragment:tC,normal_pars_vertex:nC,normal_vertex:iC,normalmap_pars_fragment:rC,clearcoat_normal_fragment_begin:sC,clearcoat_normal_fragment_maps:oC,clearcoat_pars_fragment:aC,iridescence_pars_fragment:lC,opaque_fragment:uC,packing:cC,premultiplied_alpha_fragment:fC,project_vertex:dC,dithering_fragment:hC,dithering_pars_fragment:pC,roughnessmap_fragment:mC,roughnessmap_pars_fragment:gC,shadowmap_pars_fragment:vC,shadowmap_pars_vertex:_C,shadowmap_vertex:xC,shadowmask_pars_fragment:yC,skinbase_vertex:SC,skinning_pars_vertex:MC,skinning_vertex:EC,skinnormal_vertex:TC,specularmap_fragment:wC,specularmap_pars_fragment:AC,tonemapping_fragment:RC,tonemapping_pars_fragment:CC,transmission_fragment:bC,transmission_pars_fragment:PC,uv_pars_fragment:DC,uv_pars_vertex:LC,uv_vertex:NC,worldpos_vertex:IC,background_vert:UC,background_frag:FC,backgroundCube_vert:OC,backgroundCube_frag:BC,cube_vert:kC,cube_frag:zC,depth_vert:VC,depth_frag:HC,distance_vert:GC,distance_frag:WC,equirect_vert:XC,equirect_frag:YC,linedashed_vert:jC,linedashed_frag:qC,meshbasic_vert:KC,meshbasic_frag:$C,meshlambert_vert:ZC,meshlambert_frag:QC,meshmatcap_vert:JC,meshmatcap_frag:eb,meshnormal_vert:tb,meshnormal_frag:nb,meshphong_vert:ib,meshphong_frag:rb,meshphysical_vert:sb,meshphysical_frag:ob,meshtoon_vert:ab,meshtoon_frag:lb,points_vert:ub,points_frag:cb,shadow_vert:fb,shadow_frag:db,sprite_vert:hb,sprite_frag:pb},He={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ue},probesMax:{value:new ue},probesResolution:{value:new ue}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},nr={basic:{uniforms:Kn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:Kn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:Kn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:Kn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:Kn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:Kn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:Kn([He.points,He.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:Kn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:Kn([He.common,He.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:Kn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:Kn([He.sprite,He.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distance:{uniforms:Kn([He.common,He.displacementmap,{referencePosition:{value:new ue},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distance_vert,fragmentShader:Et.distance_frag},shadow:{uniforms:Kn([He.lights,He.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};nr.physical={uniforms:Kn([nr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};const Fu={r:0,b:0,g:0},mb=new _n,ny=new xt;ny.set(-1,0,0,0,1,0,0,0,1);function gb(n,e,t,r,o,l){const u=new Rt(0);let f=o===!0?0:1,d,h,m=null,v=0,g=null;function S(P){let O=P.isScene===!0?P.background:null;if(O&&O.isTexture){const C=P.backgroundBlurriness>0;O=e.get(O,C)}return O}function T(P){let O=!1;const C=S(P);C===null?M(u,f):C&&C.isColor&&(M(C,1),O=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,l):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(n.autoClear||O)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function R(P,O){const C=S(O);C&&(C.isCubeTexture||C.mapping===_c)?(h===void 0&&(h=new fr(new al(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Go(nr.backgroundCube.uniforms),vertexShader:nr.backgroundCube.vertexShader,fragmentShader:nr.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,D,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=C,h.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(mb.makeRotationFromEuler(O.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(ny),h.material.toneMapped=Nt.getTransfer(C.colorSpace)!==jt,(m!==C||v!==C.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,m=C,v=C.version,g=n.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(d===void 0&&(d=new fr(new ll(2,2),new gi({name:"BackgroundMaterial",uniforms:Go(nr.background.uniforms),vertexShader:nr.background.vertexShader,fragmentShader:nr.background.fragmentShader,side:Vs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=C,d.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,d.material.toneMapped=Nt.getTransfer(C.colorSpace)!==jt,C.matrixAutoUpdate===!0&&C.updateMatrix(),d.material.uniforms.uvTransform.value.copy(C.matrix),(m!==C||v!==C.version||g!==n.toneMapping)&&(d.material.needsUpdate=!0,m=C,v=C.version,g=n.toneMapping),d.layers.enableAll(),P.unshift(d,d.geometry,d.material,0,0,null))}function M(P,O){P.getRGB(Fu,Qx(n)),t.buffers.color.setClear(Fu.r,Fu.g,Fu.b,O,l)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(P,O=1){u.set(P),f=O,M(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(P){f=P,M(u,f)},render:T,addToRenderList:R,dispose:y}}function vb(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,u=!1;function f(V,ee,Z,H,te){let me=!1;const j=v(V,H,Z,ee);l!==j&&(l=j,h(l.object)),me=S(V,H,Z,te),me&&T(V,H,Z,te),te!==null&&e.update(te,n.ELEMENT_ARRAY_BUFFER),(me||u)&&(u=!1,C(V,ee,Z,H),te!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function d(){return n.createVertexArray()}function h(V){return n.bindVertexArray(V)}function m(V){return n.deleteVertexArray(V)}function v(V,ee,Z,H){const te=H.wireframe===!0;let me=r[ee.id];me===void 0&&(me={},r[ee.id]=me);const j=V.isInstancedMesh===!0?V.id:0;let K=me[j];K===void 0&&(K={},me[j]=K);let W=K[Z.id];W===void 0&&(W={},K[Z.id]=W);let $=W[te];return $===void 0&&($=g(d()),W[te]=$),$}function g(V){const ee=[],Z=[],H=[];for(let te=0;te<t;te++)ee[te]=0,Z[te]=0,H[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:Z,attributeDivisors:H,object:V,attributes:{},index:null}}function S(V,ee,Z,H){const te=l.attributes,me=ee.attributes;let j=0;const K=Z.getAttributes();for(const W in K)if(K[W].location>=0){const N=te[W];let se=me[W];if(se===void 0&&(W==="instanceMatrix"&&V.instanceMatrix&&(se=V.instanceMatrix),W==="instanceColor"&&V.instanceColor&&(se=V.instanceColor)),N===void 0||N.attribute!==se||se&&N.data!==se.data)return!0;j++}return l.attributesNum!==j||l.index!==H}function T(V,ee,Z,H){const te={},me=ee.attributes;let j=0;const K=Z.getAttributes();for(const W in K)if(K[W].location>=0){let N=me[W];N===void 0&&(W==="instanceMatrix"&&V.instanceMatrix&&(N=V.instanceMatrix),W==="instanceColor"&&V.instanceColor&&(N=V.instanceColor));const se={};se.attribute=N,N&&N.data&&(se.data=N.data),te[W]=se,j++}l.attributes=te,l.attributesNum=j,l.index=H}function R(){const V=l.newAttributes;for(let ee=0,Z=V.length;ee<Z;ee++)V[ee]=0}function M(V){y(V,0)}function y(V,ee){const Z=l.newAttributes,H=l.enabledAttributes,te=l.attributeDivisors;Z[V]=1,H[V]===0&&(n.enableVertexAttribArray(V),H[V]=1),te[V]!==ee&&(n.vertexAttribDivisor(V,ee),te[V]=ee)}function P(){const V=l.newAttributes,ee=l.enabledAttributes;for(let Z=0,H=ee.length;Z<H;Z++)ee[Z]!==V[Z]&&(n.disableVertexAttribArray(Z),ee[Z]=0)}function O(V,ee,Z,H,te,me,j){j===!0?n.vertexAttribIPointer(V,ee,Z,te,me):n.vertexAttribPointer(V,ee,Z,H,te,me)}function C(V,ee,Z,H){R();const te=H.attributes,me=Z.getAttributes(),j=ee.defaultAttributeValues;for(const K in me){const W=me[K];if(W.location>=0){let $=te[K];if($===void 0&&(K==="instanceMatrix"&&V.instanceMatrix&&($=V.instanceMatrix),K==="instanceColor"&&V.instanceColor&&($=V.instanceColor)),$!==void 0){const N=$.normalized,se=$.itemSize,ye=e.get($);if(ye===void 0)continue;const je=ye.buffer,We=ye.type,qe=ye.bytesPerElement,oe=We===n.INT||We===n.UNSIGNED_INT||$.gpuType===Fp;if($.isInterleavedBufferAttribute){const ce=$.data,we=ce.stride,Ge=$.offset;if(ce.isInstancedInterleavedBuffer){for(let Ce=0;Ce<W.locationSize;Ce++)y(W.location+Ce,ce.meshPerAttribute);V.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ce=0;Ce<W.locationSize;Ce++)M(W.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,je);for(let Ce=0;Ce<W.locationSize;Ce++)O(W.location+Ce,se/W.locationSize,We,N,we*qe,(Ge+se/W.locationSize*Ce)*qe,oe)}else{if($.isInstancedBufferAttribute){for(let ce=0;ce<W.locationSize;ce++)y(W.location+ce,$.meshPerAttribute);V.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ce=0;ce<W.locationSize;ce++)M(W.location+ce);n.bindBuffer(n.ARRAY_BUFFER,je);for(let ce=0;ce<W.locationSize;ce++)O(W.location+ce,se/W.locationSize,We,N,se*qe,se/W.locationSize*ce*qe,oe)}}else if(j!==void 0){const N=j[K];if(N!==void 0)switch(N.length){case 2:n.vertexAttrib2fv(W.location,N);break;case 3:n.vertexAttrib3fv(W.location,N);break;case 4:n.vertexAttrib4fv(W.location,N);break;default:n.vertexAttrib1fv(W.location,N)}}}}P()}function b(){L();for(const V in r){const ee=r[V];for(const Z in ee){const H=ee[Z];for(const te in H){const me=H[te];for(const j in me)m(me[j].object),delete me[j];delete H[te]}}delete r[V]}}function D(V){if(r[V.id]===void 0)return;const ee=r[V.id];for(const Z in ee){const H=ee[Z];for(const te in H){const me=H[te];for(const j in me)m(me[j].object),delete me[j];delete H[te]}}delete r[V.id]}function U(V){for(const ee in r){const Z=r[ee];for(const H in Z){const te=Z[H];if(te[V.id]===void 0)continue;const me=te[V.id];for(const j in me)m(me[j].object),delete me[j];delete te[V.id]}}}function x(V){for(const ee in r){const Z=r[ee],H=V.isInstancedMesh===!0?V.id:0,te=Z[H];if(te!==void 0){for(const me in te){const j=te[me];for(const K in j)m(j[K].object),delete j[K];delete te[me]}delete Z[H],Object.keys(Z).length===0&&delete r[ee]}}}function L(){B(),u=!0,l!==o&&(l=o,h(l.object))}function B(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:L,resetDefaultState:B,dispose:b,releaseStatesOfGeometry:D,releaseStatesOfObject:x,releaseStatesOfProgram:U,initAttributes:R,enableAttribute:M,disableUnusedAttributes:P}}function _b(n,e,t){let r;function o(d){r=d}function l(d,h){n.drawArrays(r,d,h),t.update(h,r,1)}function u(d,h,m){m!==0&&(n.drawArraysInstanced(r,d,h,m),t.update(h,r,m))}function f(d,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,h,0,m);let g=0;for(let S=0;S<m;S++)g+=h[S];t.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function xb(n,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(U){return!(U!==ji&&r.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(U){const x=U===cr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Pi&&U!==rr&&!x&&r.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function d(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(pt("WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const v=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=n.getParameter(n.MAX_TEXTURE_SIZE),M=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),P=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),O=n.getParameter(n.MAX_VARYING_VECTORS),C=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),D=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:T,maxTextureSize:R,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:P,maxVaryings:O,maxFragmentUniforms:C,maxSamples:b,samples:D}}function yb(n){const e=this;let t=null,r=0,o=!1,l=!1;const u=new us,f=new xt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||r!==0||o;return o=g,r=v.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,g){t=m(v,g,0)},this.setState=function(v,g,S){const T=v.clippingPlanes,R=v.clipIntersection,M=v.clipShadows,y=n.get(v);if(!o||T===null||T.length===0||l&&!M)l?m(null):h();else{const P=l?0:r,O=P*4;let C=y.clippingState||null;d.value=C,C=m(T,g,O,S);for(let b=0;b!==O;++b)C[b]=t[b];y.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=P}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(v,g,S,T){const R=v!==null?v.length:0;let M=null;if(R!==0){if(M=d.value,T!==!0||M===null){const y=S+R*4,P=g.matrixWorldInverse;f.getNormalMatrix(P),(M===null||M.length<y)&&(M=new Float32Array(y));for(let O=0,C=S;O!==R;++O,C+=4)u.copy(v[O]).applyMatrix4(P,f),u.normal.toArray(M,C),M[C+3]=u.constant}d.value=M,d.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,M}}const Fo=4,Sb=6,Mb=20,Eb=256,La=new ey,g_=new Rt;let Hd=null,Gd=0,Wd=0,Xd=!1;const Tb=new ue,Is=new ue;class v_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=Tb}=l;Hd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),Xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=y_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=x_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hd,Gd,Wd),this._renderer.xr.enabled=Xd,e.scissorTest=!1,bo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hs||e.mapping===Ho?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),Xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:cr,format:ji,colorSpace:oc,depthBuffer:!1},o=__(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=__(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=wb(l)),this._blurMaterial=Rb(l,e,t),this._ggxMaterial=Ab(l,e,t)}return o}_compileMaterial(e){const t=new fr(new Di,e);this._renderer.compile(t,La)}_sceneToCubeUV(e,t,r,o,l){const d=new bi(90,1,t,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor(g_),v.toneMapping=lr,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fr(new al,new qx({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,M=R.material;let y=!1;const P=e.background;P?P.isColor&&(M.color.copy(P),e.background=null,y=!0):(M.color.copy(g_),y=!0);for(let O=0;O<6;O++){const C=O%3;C===0?(d.up.set(0,h[O],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+m[O],l.y,l.z)):C===1?(d.up.set(0,0,h[O]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+m[O],l.z)):(d.up.set(0,h[O],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+m[O]));const b=this._cubeSize;bo(o,C*b,O>2?b:0,b,b),v.setRenderTarget(o),y&&v.render(R,d),v.render(e,d)}v.toneMapping=S,v.autoClear=g,e.background=P}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Hs||e.mapping===Ho;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=y_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=x_());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;bo(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(u,La)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const d=u.uniforms,h=r/(this._lodMeshes.length-1),m=t/(this._lodMeshes.length-1),v=Math.sqrt(h*h-m*m),g=h*1.25,S=v*g,{_lodMax:T}=this,R=this._sizeLods[r],M=3*R*(r>T-Fo?r-T+Fo:0),y=4*(this._cubeSize-R);d.envMap.value=e.texture,d.roughness.value=S,d.mipInt.value=T-t,bo(l,M,y,3*R,2*R),o.setRenderTarget(l),o.render(f,La),d.envMap.value=l.texture,d.roughness.value=0,d.mipInt.value=T-r,bo(e,M,y,3*R,2*R),o.setRenderTarget(e),o.render(f,La)}_blur(e,t,r,o){const l=this._pingPongRenderTarget,u=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,l,t,r,u),this._blurPass(l,e,r,r,u)}_blurPass(e,t,r,o,l){const u=this._renderer,f=this._blurMaterial,d=this._lodMeshes[o];d.material=f;const h=f.uniforms;h.envMap.value=e.texture,h.sigma.value=l,h.mipInt.value=this._lodMax-r;const m=this._sizeLods[o],v=3*m*(o>this._lodMax-Fo?o-this._lodMax+Fo:0),g=4*(this._cubeSize-m);bo(t,v,g,3*m,2*m),u.setRenderTarget(t),u.render(d,La)}}function wb(n){const e=[],t=[];let r=n;const o=n-Fo+1+Sb;for(let l=0;l<o;l++){const u=Math.pow(2,r);e.push(u);const f=1/(u-2),d=-f,h=1+f,m=[d,d,h,d,h,h,d,d,h,h,d,h],v=6,g=6,S=3,T=new Float32Array(S*g*v),R=new Float32Array(S*g*v);for(let y=0;y<v;y++){const P=y%3*2/3-1,O=y>2?0:-1,C=[P,O,0,P+2/3,O,0,P+2/3,O+1,0,P,O,0,P+2/3,O+1,0,P,O+1,0];T.set(C,S*g*y);for(let b=0;b<g;b++){const D=m[b*2]*2-1,U=m[b*2+1]*2-1;y===0?Is.set(1,U,D):y===1?Is.set(-D,1,-U):y===2?Is.set(-D,U,1):y===3?Is.set(-1,U,-D):y===4?Is.set(-D,-1,U):Is.set(D,U,-1),Is.toArray(R,(y*g+b)*S)}}const M=new Di;M.setAttribute("position",new $n(T,S)),M.setAttribute("outputDirection",new $n(R,S)),t.push(new fr(M,null)),r>Fo&&r--}return{lodMeshes:t,sizeLods:e}}function __(n,e,t){const r=new qi(n,e,t);return r.texture.mapping=_c,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function bo(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function Ab(n,e,t){return new gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Eb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function Rb(n,e,t){return new gi({name:"SphericalGaussianBlur",defines:{SAMPLES:Mb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:yc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function x_(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

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
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function y_(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function yc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class iy extends qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new $x(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new al(5,5,5),l=new gi({name:"CubemapFromEquirect",uniforms:Go(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:oi,blending:Nr});l.uniforms.tEquirect.value=t;const u=new fr(o,l),f=t.minFilter;return t.minFilter===Bs&&(t.minFilter=Yn),new DA(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function Cb(n){let e=new WeakMap,t=new WeakMap,r=null;function o(g,S=!1){return g==null?null:S?u(g):l(g)}function l(g){if(g&&g.isTexture){const S=g.mapping;if(S===gd||S===vd)if(e.has(g)){const T=e.get(g).texture;return f(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const R=new iy(T.height);return R.fromEquirectangularTexture(n,g),e.set(g,R),g.addEventListener("dispose",h),f(R.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const S=g.mapping,T=S===gd||S===vd,R=S===Hs||S===Ho;if(T||R){let M=t.get(g);const y=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return r===null&&(r=new v_(n)),M=T?r.fromEquirectangular(g,M):r.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,t.set(g,M),M.texture;if(M!==void 0)return M.texture;{const P=g.image;return T&&P&&P.height>0||R&&P&&d(P)?(r===null&&(r=new v_(n)),M=T?r.fromEquirectangular(g):r.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,t.set(g,M),g.addEventListener("dispose",m),M.texture):null}}}return g}function f(g,S){return S===gd?g.mapping=Hs:S===vd&&(g.mapping=Ho),g}function d(g){let S=0;const T=6;for(let R=0;R<T;R++)g[R]!==void 0&&S++;return S===T}function h(g){const S=g.target;S.removeEventListener("dispose",h);const T=e.get(S);T!==void 0&&(e.delete(S),T.dispose())}function m(g){const S=g.target;S.removeEventListener("dispose",m);const T=t.get(S);T!==void 0&&(t.delete(S),T.dispose())}function v(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function bb(n){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=n.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Oo("WebGLRenderer: "+r+" extension not supported."),o}}}function Pb(n,e,t,r){const o={},l=new WeakMap;function u(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",u),delete o[g.id];const S=l.get(g);S&&(e.remove(S),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(v,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,t.memory.geometries++),g}function d(v){const g=v.attributes;for(const S in g)e.update(g[S],n.ARRAY_BUFFER)}function h(v){const g=[],S=v.index,T=v.attributes.position;let R=0;if(T===void 0)return;if(S!==null){const P=S.array;R=S.version;for(let O=0,C=P.length;O<C;O+=3){const b=P[O+0],D=P[O+1],U=P[O+2];g.push(b,D,D,U,U,b)}}else{const P=T.array;R=T.version;for(let O=0,C=P.length/3-1;O<C;O+=3){const b=O+0,D=O+1,U=O+2;g.push(b,D,D,U,U,b)}}const M=new(T.count>=65535?Yx:Xx)(g,1);M.version=R;const y=l.get(v);y&&e.remove(y),l.set(v,M)}function m(v){const g=l.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&h(v)}else h(v);return l.get(v)}return{get:f,update:d,getWireframeAttribute:m}}function Db(n,e,t){let r;function o(v){r=v}let l,u;function f(v){l=v.type,u=v.bytesPerElement}function d(v,g){n.drawElements(r,g,l,v*u),t.update(g,r,1)}function h(v,g,S){S!==0&&(n.drawElementsInstanced(r,g,l,v*u,S),t.update(g,r,S))}function m(v,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,v,0,S);let R=0;for(let M=0;M<S;M++)R+=g[M];t.update(R,r,1)}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=m}function Lb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case n.TRIANGLES:t.triangles+=f*(l/3);break;case n.LINES:t.lines+=f*(l/2);break;case n.LINE_STRIP:t.lines+=f*(l-1);break;case n.LINE_LOOP:t.lines+=f*l;break;case n.POINTS:t.points+=f*l;break;default:Ht("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function Nb(n,e,t){const r=new WeakMap,o=new pn;function l(u,f,d){const h=u.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=m!==void 0?m.length:0;let g=r.get(f);if(g===void 0||g.count!==v){let B=function(){x.dispose(),r.delete(f),f.removeEventListener("dispose",B)};var S=B;g!==void 0&&g.texture.dispose();const T=f.morphAttributes.position!==void 0,R=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],P=f.morphAttributes.normal||[],O=f.morphAttributes.color||[];let C=0;T===!0&&(C=1),R===!0&&(C=2),M===!0&&(C=3);let b=f.attributes.position.count*C,D=1;b>e.maxTextureSize&&(D=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const U=new Float32Array(b*D*4*v),x=new Hx(U,b,D,v);x.type=rr,x.needsUpdate=!0;const L=C*4;for(let V=0;V<v;V++){const ee=y[V],Z=P[V],H=O[V],te=b*D*4*V;for(let me=0;me<ee.count;me++){const j=me*L;T===!0&&(o.fromBufferAttribute(ee,me),U[te+j+0]=o.x,U[te+j+1]=o.y,U[te+j+2]=o.z,U[te+j+3]=0),R===!0&&(o.fromBufferAttribute(Z,me),U[te+j+4]=o.x,U[te+j+5]=o.y,U[te+j+6]=o.z,U[te+j+7]=0),M===!0&&(o.fromBufferAttribute(H,me),U[te+j+8]=o.x,U[te+j+9]=o.y,U[te+j+10]=o.z,U[te+j+11]=H.itemSize===4?o.w:1)}}g={count:v,texture:x,size:new Xt(b,D)},r.set(f,g),f.addEventListener("dispose",B)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let T=0;for(let M=0;M<h.length;M++)T+=h[M];const R=f.morphTargetsRelative?1:1-T;d.getUniforms().setValue(n,"morphTargetBaseInfluence",R),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}return{update:l}}function Ib(n,e,t,r,o){let l=new WeakMap;function u(h){const m=o.render.frame,v=h.geometry,g=e.get(h,v);if(l.get(g)!==m&&(e.update(g),l.set(g,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),l.get(h)!==m&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),l.set(h,m))),h.isSkinnedMesh){const S=h.skeleton;l.get(S)!==m&&(S.update(),l.set(S,m))}return g}function f(){l=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),r.releaseStatesOfObject(m),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:u,dispose:f}}const Ub={[Ax]:"LINEAR_TONE_MAPPING",[Rx]:"REINHARD_TONE_MAPPING",[Cx]:"CINEON_TONE_MAPPING",[bx]:"ACES_FILMIC_TONE_MAPPING",[Dx]:"AGX_TONE_MAPPING",[Lx]:"NEUTRAL_TONE_MAPPING",[Px]:"CUSTOM_TONE_MAPPING"};function Fb(n,e,t,r,o,l){const u=new qi(e,t,{type:n,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,d=null;const h=new Di;h.setAttribute("position",new Ur([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ur([0,2,0,0,2,0],2));const m=new CA({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new fr(h,m),g=new ey(-1,1,1,-1,0,1);let S=null,T=null,R=!1,M,y=null,P=[],O=!1;this.setSize=function(C,b){u.setSize(C,b),f!==null&&f.setSize(C,b),d!==null&&d.setSize(C,b);for(let D=0;D<P.length;D++){const U=P[D];U.setSize&&U.setSize(C,b)}},this.setEffects=function(C){P=C,O=P.length>0&&P[0].isRenderPass===!0;const b=u.width,D=u.height;P.length>0&&f===null&&(f=new qi(b,D,{type:cr,depthBuffer:!1,stencilBuffer:!1}),d=new qi(b,D,{type:cr,depthBuffer:!1,stencilBuffer:!1}));for(let U=0;U<P.length;U++){const x=P[U];x.setSize&&x.setSize(b,D)}},this.begin=function(C,b){if(R||C.toneMapping===lr&&P.length===0)return!1;if(y=b,b!==null){const D=b.width,U=b.height;(u.width!==D||u.height!==U)&&this.setSize(D,U)}return O===!1&&C.setRenderTarget(u),M=C.toneMapping,C.toneMapping=lr,!0},this.hasRenderPass=function(){return O},this.end=function(C,b){C.toneMapping=M,R=!0;let D=u,U=f;for(let x=0;x<P.length;x++){const L=P[x];L.enabled!==!1&&(L.render(C,U,D,b),L.needsSwap!==!1&&(D=U,U=U===f?d:f))}if(S!==C.outputColorSpace||T!==C.toneMapping){S=C.outputColorSpace,T=C.toneMapping,m.defines={},Nt.getTransfer(S)===jt&&(m.defines.SRGB_TRANSFER="");const x=Ub[T];x&&(m.defines[x]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,C.setRenderTarget(y),C.render(v,g),y=null,R=!1},this.isCompositing=function(){return R},this.dispose=function(){u.dispose(),f!==null&&f.dispose(),d!==null&&d.dispose(),h.dispose(),m.dispose()}}const ry=new Zn,Zh=new Ja(1,1),sy=new Hx,oy=new rA,ay=new $x,S_=[],M_=[],E_=new Float32Array(16),T_=new Float32Array(9),w_=new Float32Array(4);function jo(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let l=S_[o];if(l===void 0&&(l=new Float32Array(o),S_[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,n[u].toArray(l,f)}return l}function Tn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function wn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function Sc(n,e){let t=M_[e];t===void 0&&(t=new Int32Array(e),M_[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function Ob(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Bb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;n.uniform2fv(this.addr,e),wn(t,e)}}function kb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tn(t,e))return;n.uniform3fv(this.addr,e),wn(t,e)}}function zb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;n.uniform4fv(this.addr,e),wn(t,e)}}function Vb(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Tn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wn(t,e)}else{if(Tn(t,r))return;w_.set(r),n.uniformMatrix2fv(this.addr,!1,w_),wn(t,r)}}function Hb(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Tn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wn(t,e)}else{if(Tn(t,r))return;T_.set(r),n.uniformMatrix3fv(this.addr,!1,T_),wn(t,r)}}function Gb(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Tn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wn(t,e)}else{if(Tn(t,r))return;E_.set(r),n.uniformMatrix4fv(this.addr,!1,E_),wn(t,r)}}function Wb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Xb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;n.uniform2iv(this.addr,e),wn(t,e)}}function Yb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;n.uniform3iv(this.addr,e),wn(t,e)}}function jb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;n.uniform4iv(this.addr,e),wn(t,e)}}function qb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Kb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;n.uniform2uiv(this.addr,e),wn(t,e)}}function $b(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;n.uniform3uiv(this.addr,e),wn(t,e)}}function Zb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;n.uniform4uiv(this.addr,e),wn(t,e)}}function Qb(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let l;this.type===n.SAMPLER_2D_SHADOW?(Zh.compareFunction=t.isReversedDepthBuffer()?Gp:Hp,l=Zh):l=ry,t.setTexture2D(e||l,o)}function Jb(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||oy,o)}function eP(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||ay,o)}function tP(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||sy,o)}function nP(n){switch(n){case 5126:return Ob;case 35664:return Bb;case 35665:return kb;case 35666:return zb;case 35674:return Vb;case 35675:return Hb;case 35676:return Gb;case 5124:case 35670:return Wb;case 35667:case 35671:return Xb;case 35668:case 35672:return Yb;case 35669:case 35673:return jb;case 5125:return qb;case 36294:return Kb;case 36295:return $b;case 36296:return Zb;case 35678:case 36198:case 36298:case 36306:case 35682:return Qb;case 35679:case 36299:case 36307:return Jb;case 35680:case 36300:case 36308:case 36293:return eP;case 36289:case 36303:case 36311:case 36292:return tP}}function iP(n,e){n.uniform1fv(this.addr,e)}function rP(n,e){const t=jo(e,this.size,2);n.uniform2fv(this.addr,t)}function sP(n,e){const t=jo(e,this.size,3);n.uniform3fv(this.addr,t)}function oP(n,e){const t=jo(e,this.size,4);n.uniform4fv(this.addr,t)}function aP(n,e){const t=jo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function lP(n,e){const t=jo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function uP(n,e){const t=jo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function cP(n,e){n.uniform1iv(this.addr,e)}function fP(n,e){n.uniform2iv(this.addr,e)}function dP(n,e){n.uniform3iv(this.addr,e)}function hP(n,e){n.uniform4iv(this.addr,e)}function pP(n,e){n.uniform1uiv(this.addr,e)}function mP(n,e){n.uniform2uiv(this.addr,e)}function gP(n,e){n.uniform3uiv(this.addr,e)}function vP(n,e){n.uniform4uiv(this.addr,e)}function _P(n,e,t){const r=this.cache,o=e.length,l=Sc(t,o);Tn(r,l)||(n.uniform1iv(this.addr,l),wn(r,l));let u;this.type===n.SAMPLER_2D_SHADOW?u=Zh:u=ry;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function xP(n,e,t){const r=this.cache,o=e.length,l=Sc(t,o);Tn(r,l)||(n.uniform1iv(this.addr,l),wn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||oy,l[u])}function yP(n,e,t){const r=this.cache,o=e.length,l=Sc(t,o);Tn(r,l)||(n.uniform1iv(this.addr,l),wn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||ay,l[u])}function SP(n,e,t){const r=this.cache,o=e.length,l=Sc(t,o);Tn(r,l)||(n.uniform1iv(this.addr,l),wn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||sy,l[u])}function MP(n){switch(n){case 5126:return iP;case 35664:return rP;case 35665:return sP;case 35666:return oP;case 35674:return aP;case 35675:return lP;case 35676:return uP;case 5124:case 35670:return cP;case 35667:case 35671:return fP;case 35668:case 35672:return dP;case 35669:case 35673:return hP;case 5125:return pP;case 36294:return mP;case 36295:return gP;case 36296:return vP;case 35678:case 36198:case 36298:case 36306:case 35682:return _P;case 35679:case 36299:case 36307:return xP;case 35680:case 36300:case 36308:case 36293:return yP;case 36289:case 36303:case 36311:case 36292:return SP}}class EP{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=nP(t.type)}}class TP{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=MP(t.type)}}class wP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Yd=/(\w+)(\])?(\[|\.)?/g;function A_(n,e){n.seq.push(e),n.map[e.id]=e}function AP(n,e,t){const r=n.name,o=r.length;for(Yd.lastIndex=0;;){const l=Yd.exec(r),u=Yd.lastIndex;let f=l[1];const d=l[2]==="]",h=l[3];if(d&&(f=f|0),h===void 0||h==="["&&u+2===o){A_(t,h===void 0?new EP(f,n,e):new TP(f,n,e));break}else{let v=t.map[f];v===void 0&&(v=new wP(f),A_(t,v)),t=v}}}class qu{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),d=e.getUniformLocation(t,f.name);AP(f,d,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],d=r[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function R_(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const RP=37297;let CP=0;function bP(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const C_=new xt;function PP(n){Nt._getMatrix(C_,Nt.workingColorSpace,n);const e=`mat3( ${C_.elements.map(t=>t.toFixed(4))} )`;switch(Nt.getTransfer(n)){case ac:return[e,"LinearTransferOETF"];case jt:return[e,"sRGBTransferOETF"];default:return pt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function b_(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),l=(n.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+bP(n.getShaderSource(e),f)}else return l}function DP(n,e){const t=PP(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const LP={[Ax]:"Linear",[Rx]:"Reinhard",[Cx]:"Cineon",[bx]:"ACESFilmic",[Dx]:"AgX",[Lx]:"Neutral",[Px]:"Custom"};function NP(n,e){const t=LP[e];return t===void 0?(pt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ou=new ue;function IP(){Nt.getLuminanceCoefficients(Ou);const n=Ou.x.toFixed(4),e=Ou.y.toFixed(4),t=Ou.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function UP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ba).join(`
`)}function FP(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function OP(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=n.getActiveAttrib(e,o),u=l.name;let f=1;l.type===n.FLOAT_MAT2&&(f=2),l.type===n.FLOAT_MAT3&&(f=3),l.type===n.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:n.getAttribLocation(e,u),locationSize:f}}return t}function Ba(n){return n!==""}function P_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function D_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qh(n){return n.replace(BP,zP)}const kP=new Map;function zP(n,e){let t=Et[e];if(t===void 0){const r=kP.get(e);if(r!==void 0)t=Et[r],pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Qh(t)}const VP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function L_(n){return n.replace(VP,HP)}function HP(n,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function N_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const GP={[Gu]:"SHADOWMAP_TYPE_PCF",[Oa]:"SHADOWMAP_TYPE_VSM"};function WP(n){return GP[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const XP={[Hs]:"ENVMAP_TYPE_CUBE",[Ho]:"ENVMAP_TYPE_CUBE",[_c]:"ENVMAP_TYPE_CUBE_UV"};function YP(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":XP[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const jP={[Ho]:"ENVMAP_MODE_REFRACTION"};function qP(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":jP[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const KP={[wx]:"ENVMAP_BLENDING_MULTIPLY",[Uw]:"ENVMAP_BLENDING_MIX",[Fw]:"ENVMAP_BLENDING_ADD"};function $P(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":KP[n.combine]||"ENVMAP_BLENDING_NONE"}function ZP(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function QP(n,e,t,r){const o=n.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const d=WP(t),h=YP(t),m=qP(t),v=$P(t),g=ZP(t),S=UP(t),T=FP(l),R=o.createProgram();let M,y,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Ba).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Ba).join(`
`),y.length>0&&(y+=`
`)):(M=[N_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ba).join(`
`),y=[N_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==lr?"#define TONE_MAPPING":"",t.toneMapping!==lr?Et.tonemapping_pars_fragment:"",t.toneMapping!==lr?NP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,DP("linearToOutputTexel",t.outputColorSpace),IP(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ba).join(`
`)),u=Qh(u),u=P_(u,t),u=D_(u,t),f=Qh(f),f=P_(f,t),f=D_(f,t),u=L_(u),f=L_(f),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",t.glslVersion===Xv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const O=P+M+u,C=P+y+f,b=R_(o,o.VERTEX_SHADER,O),D=R_(o,o.FRAGMENT_SHADER,C);o.attachShader(R,b),o.attachShader(R,D),t.index0AttributeName!==void 0?o.bindAttribLocation(R,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function U(V){if(n.debug.checkShaderErrors){const ee=o.getProgramInfoLog(R)||"",Z=o.getShaderInfoLog(b)||"",H=o.getShaderInfoLog(D)||"",te=ee.trim(),me=Z.trim(),j=H.trim();let K=!0,W=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,R,b,D);else{const $=b_(o,b,"vertex"),N=b_(o,D,"fragment");Ht("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+te+`
`+$+`
`+N)}else te!==""?pt("WebGLProgram: Program Info Log:",te):(me===""||j==="")&&(W=!1);W&&(V.diagnostics={runnable:K,programLog:te,vertexShader:{log:me,prefix:M},fragmentShader:{log:j,prefix:y}})}o.deleteShader(b),o.deleteShader(D),x=new qu(o,R),L=OP(o,R)}let x;this.getUniforms=function(){return x===void 0&&U(this),x};let L;this.getAttributes=function(){return L===void 0&&U(this),L};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=o.getProgramParameter(R,RP)),B},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=CP++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=b,this.fragmentShader=D,this}let JP=0;class eD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new tD(e),t.set(e,r)),r}}class tD{constructor(e){this.id=JP++,this.code=e,this.usedTimes=0}}function nD(n){return n===Gs||n===rc||n===sc}function iD(n,e,t,r,o,l){const u=new Gx,f=new eD,d=new Set,h=[],m=new Map,v=r.logarithmicDepthBuffer;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(x){return d.add(x),x===0?"uv":`uv${x}`}function R(x,L,B,V,ee,Z){const H=V.fog,te=ee.geometry,me=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?V.environment:null,j=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,K=e.get(x.envMap||me,j),W=K&&K.mapping===_c?K.image.height:null,$=S[x.type];x.precision!==null&&(g=r.getMaxPrecision(x.precision),g!==x.precision&&pt("WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const N=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,se=N!==void 0?N.length:0;let ye=0;te.morphAttributes.position!==void 0&&(ye=1),te.morphAttributes.normal!==void 0&&(ye=2),te.morphAttributes.color!==void 0&&(ye=3);let je,We,qe,oe;if($){const Ot=nr[$];je=Ot.vertexShader,We=Ot.fragmentShader}else{je=x.vertexShader,We=x.fragmentShader;const Ot=f.getVertexShaderStage(x),bt=f.getFragmentShaderStage(x);f.update(x,Ot,bt),qe=Ot.id,oe=bt.id}const ce=n.getRenderTarget(),we=n.state.buffers.depth.getReversed(),Ge=ee.isInstancedMesh===!0,Ce=ee.isBatchedMesh===!0,ze=!!x.map,qt=!!x.matcap,mt=!!K,vt=!!x.aoMap,kt=!!x.lightMap,_t=!!x.bumpMap&&x.wireframe===!1,Ct=!!x.normalMap,Ut=!!x.displacementMap,tn=!!x.emissiveMap,Ft=!!x.metalnessMap,Gt=!!x.roughnessMap,Y=x.anisotropy>0,nn=x.clearcoat>0,At=x.dispersion>0,I=x.retroreflectivity>0,E=x.iridescence>0,Q=x.sheen>0,ae=x.transmission>0,pe=Y&&!!x.anisotropyMap,Ae=nn&&!!x.clearcoatMap,Pe=nn&&!!x.clearcoatNormalMap,ge=nn&&!!x.clearcoatRoughnessMap,xe=E&&!!x.iridescenceMap,Ie=E&&!!x.iridescenceThicknessMap,et=Q&&!!x.sheenColorMap,Ue=Q&&!!x.sheenRoughnessMap,De=!!x.specularMap,tt=!!x.specularColorMap,ot=!!x.specularIntensityMap,ct=ae&&!!x.transmissionMap,G=ae&&!!x.thicknessMap,Le=!!x.gradientMap,_e=!!x.alphaMap,Ne=x.alphaTest>0,Be=!!x.alphaHash,Se=!!x.extensions;let nt=lr;x.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(nt=n.toneMapping);const Ze={shaderID:$,shaderType:x.type,shaderName:x.name,vertexShader:je,fragmentShader:We,defines:x.defines,customVertexShaderID:qe,customFragmentShaderID:oe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Ce,batchingColor:Ce&&ee._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&ee.instanceColor!==null,instancingMorph:Ge&&ee.morphTexture!==null,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Nt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ze,matcap:qt,envMap:mt,envMapMode:mt&&K.mapping,envMapCubeUVHeight:W,aoMap:vt,lightMap:kt,bumpMap:_t,normalMap:Ct,displacementMap:Ut,emissiveMap:tn,normalMapObjectSpace:Ct&&x.normalMapType===kw,normalMapTangentSpace:Ct&&x.normalMapType===Wv,packedNormalMap:Ct&&x.normalMapType===Wv&&nD(x.normalMap.format),metalnessMap:Ft,roughnessMap:Gt,anisotropy:Y,anisotropyMap:pe,clearcoat:nn,clearcoatMap:Ae,clearcoatNormalMap:Pe,clearcoatRoughnessMap:ge,dispersion:At,retroreflection:I,iridescence:E,iridescenceMap:xe,iridescenceThicknessMap:Ie,sheen:Q,sheenColorMap:et,sheenRoughnessMap:Ue,specularMap:De,specularColorMap:tt,specularIntensityMap:ot,transmission:ae,transmissionMap:ct,thicknessMap:G,gradientMap:Le,opaque:x.transparent===!1&&x.blending===Ga&&x.alphaToCoverage===!1,alphaMap:_e,alphaTest:Ne,alphaHash:Be,combine:x.combine,mapUv:ze&&T(x.map.channel),aoMapUv:vt&&T(x.aoMap.channel),lightMapUv:kt&&T(x.lightMap.channel),bumpMapUv:_t&&T(x.bumpMap.channel),normalMapUv:Ct&&T(x.normalMap.channel),displacementMapUv:Ut&&T(x.displacementMap.channel),emissiveMapUv:tn&&T(x.emissiveMap.channel),metalnessMapUv:Ft&&T(x.metalnessMap.channel),roughnessMapUv:Gt&&T(x.roughnessMap.channel),anisotropyMapUv:pe&&T(x.anisotropyMap.channel),clearcoatMapUv:Ae&&T(x.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&T(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&T(x.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&T(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&T(x.iridescenceThicknessMap.channel),sheenColorMapUv:et&&T(x.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&T(x.sheenRoughnessMap.channel),specularMapUv:De&&T(x.specularMap.channel),specularColorMapUv:tt&&T(x.specularColorMap.channel),specularIntensityMapUv:ot&&T(x.specularIntensityMap.channel),transmissionMapUv:ct&&T(x.transmissionMap.channel),thicknessMapUv:G&&T(x.thicknessMap.channel),alphaMapUv:_e&&T(x.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Ct||Y),vertexNormals:!!te.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!te.attributes.uv&&(ze||_e),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||te.attributes.normal===void 0&&Ct===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:we,skinning:ee.isSkinnedMesh===!0,hasPositionAttribute:te.attributes.position!==void 0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ye,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:Z.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:nt,decodeVideoTexture:ze&&x.map.isVideoTexture===!0&&Nt.getTransfer(x.map.colorSpace)===jt,decodeVideoTextureEmissive:tn&&x.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(x.emissiveMap.colorSpace)===jt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ir,flipSided:x.side===oi,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Se&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&x.extensions.multiDraw===!0||Ce)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ze.vertexUv1s=d.has(1),Ze.vertexUv2s=d.has(2),Ze.vertexUv3s=d.has(3),d.clear(),Ze}function M(x){const L=[];if(x.shaderID?L.push(x.shaderID):(L.push(x.customVertexShaderID),L.push(x.customFragmentShaderID)),x.defines!==void 0)for(const B in x.defines)L.push(B),L.push(x.defines[B]);return x.isRawShaderMaterial===!1&&(y(L,x),P(L,x),L.push(n.outputColorSpace)),L.push(x.customProgramCacheKey),L.join()}function y(x,L){x.push(L.precision),x.push(L.outputColorSpace),x.push(L.envMapMode),x.push(L.envMapCubeUVHeight),x.push(L.mapUv),x.push(L.alphaMapUv),x.push(L.lightMapUv),x.push(L.aoMapUv),x.push(L.bumpMapUv),x.push(L.normalMapUv),x.push(L.displacementMapUv),x.push(L.emissiveMapUv),x.push(L.metalnessMapUv),x.push(L.roughnessMapUv),x.push(L.anisotropyMapUv),x.push(L.clearcoatMapUv),x.push(L.clearcoatNormalMapUv),x.push(L.clearcoatRoughnessMapUv),x.push(L.iridescenceMapUv),x.push(L.iridescenceThicknessMapUv),x.push(L.sheenColorMapUv),x.push(L.sheenRoughnessMapUv),x.push(L.specularMapUv),x.push(L.specularColorMapUv),x.push(L.specularIntensityMapUv),x.push(L.transmissionMapUv),x.push(L.thicknessMapUv),x.push(L.combine),x.push(L.fogExp2),x.push(L.sizeAttenuation),x.push(L.morphTargetsCount),x.push(L.morphAttributeCount),x.push(L.numSunLights),x.push(L.numDirLights),x.push(L.numPointLights),x.push(L.numSpotLights),x.push(L.numSpotLightMaps),x.push(L.numHemiLights),x.push(L.numRectAreaLights),x.push(L.numSunLightShadows),x.push(L.numDirLightShadows),x.push(L.numPointLightShadows),x.push(L.numSpotLightShadows),x.push(L.numSpotLightShadowsWithMaps),x.push(L.numLightProbes),x.push(L.shadowMapType),x.push(L.toneMapping),x.push(L.numClippingPlanes),x.push(L.numClipIntersection),x.push(L.depthPacking)}function P(x,L){u.disableAll(),L.instancing&&u.enable(0),L.instancingColor&&u.enable(1),L.instancingMorph&&u.enable(2),L.matcap&&u.enable(3),L.envMap&&u.enable(4),L.normalMapObjectSpace&&u.enable(5),L.normalMapTangentSpace&&u.enable(6),L.clearcoat&&u.enable(7),L.iridescence&&u.enable(8),L.alphaTest&&u.enable(9),L.vertexColors&&u.enable(10),L.vertexAlphas&&u.enable(11),L.vertexUv1s&&u.enable(12),L.vertexUv2s&&u.enable(13),L.vertexUv3s&&u.enable(14),L.vertexTangents&&u.enable(15),L.anisotropy&&u.enable(16),L.alphaHash&&u.enable(17),L.batching&&u.enable(18),L.dispersion&&u.enable(19),L.retroreflection&&u.enable(24),L.batchingColor&&u.enable(20),L.gradientMap&&u.enable(21),L.packedNormalMap&&u.enable(22),L.vertexNormals&&u.enable(23),x.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.reversedDepthBuffer&&u.enable(4),L.skinning&&u.enable(5),L.morphTargets&&u.enable(6),L.morphNormals&&u.enable(7),L.morphColors&&u.enable(8),L.premultipliedAlpha&&u.enable(9),L.shadowMapEnabled&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),L.decodeVideoTextureEmissive&&u.enable(20),L.alphaToCoverage&&u.enable(21),L.numLightProbeGrids>0&&u.enable(22),L.hasPositionAttribute&&u.enable(23),x.push(u.mask)}function O(x){const L=S[x.type];let B;if(L){const V=nr[L];B=wA.clone(V.uniforms)}else B=x.uniforms;return B}function C(x,L){let B=m.get(L);return B!==void 0?++B.usedTimes:(B=new QP(n,L,x,o),h.push(B),m.set(L,B)),B}function b(x){if(--x.usedTimes===0){const L=h.indexOf(x);h[L]=h[h.length-1],h.pop(),m.delete(x.cacheKey),x.destroy()}}function D(x){f.remove(x)}function U(){f.dispose()}return{getParameters:R,getProgramCacheKey:M,getUniforms:O,acquireProgram:C,releaseProgram:b,releaseShaderCache:D,programs:h,dispose:U}}function rD(){let n=new WeakMap;function e(u){return n.has(u)}function t(u){let f=n.get(u);return f===void 0&&(f={},n.set(u,f)),f}function r(u){n.delete(u)}function o(u,f,d){n.get(u)[f]=d}function l(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function sD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function I_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function U_(){const n=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function f(g,S,T,R,M,y){let P=n[e];return P===void 0?(P={id:g.id,object:g,geometry:S,material:T,materialVariant:u(g),groupOrder:R,renderOrder:g.renderOrder,z:M,group:y},n[e]=P):(P.id=g.id,P.object=g,P.geometry=S,P.material=T,P.materialVariant=u(g),P.groupOrder=R,P.renderOrder=g.renderOrder,P.z=M,P.group=y),e++,P}function d(g,S,T,R,M,y,P){P.reversedDepth===!0&&(M=-M);const O=f(g,S,T,R,M,y);T.transmission>0?r.push(O):T.transparent===!0?o.push(O):t.push(O)}function h(g,S,T,R,M,y){const P=f(g,S,T,R,M,y);T.transmission>0?r.unshift(P):T.transparent===!0?o.unshift(P):t.unshift(P)}function m(g,S){t.length>1&&t.sort(g||sD),r.length>1&&r.sort(S||I_),o.length>1&&o.sort(S||I_)}function v(){for(let g=e,S=n.length;g<S;g++){const T=n[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:h,finish:v,sort:m}}function oD(){let n=new WeakMap;function e(r,o){const l=n.get(r);let u;return l===void 0?(u=new U_,n.set(r,[u])):o>=l.length?(u=new U_,l.push(u)):u=l[o],u}function t(){n=new WeakMap}return{get:e,dispose:t}}function aD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ue,color:new Rt};break;case"SpotLight":t={position:new ue,direction:new ue,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ue,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ue,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":t={color:new Rt,position:new ue,halfWidth:new ue,halfHeight:new ue};break}return n[e.id]=t,t}}}function lD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let uD=0;function cD(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function fD(n){const e=new aD,t=lD(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ue);const o=new ue,l=new _n,u=new _n;function f(h){let m=0,v=0,g=0;for(let ee=0;ee<9;ee++)r.probe[ee].set(0,0,0);let S=0,T=0,R=0,M=0,y=0,P=0,O=0,C=0,b=0,D=0,U=0,x=0,L=0,B=0;h.sort(cD);for(let ee=0,Z=h.length;ee<Z;ee++){const H=h[ee],te=H.color,me=H.intensity,j=H.distance;let K=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Gs?K=H.shadow.map.texture:K=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)m+=te.r*me,v+=te.g*me,g+=te.b*me;else if(H.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(H.sh.coefficients[W],me);B++}else if(H.isSunLight){const W=e.get(H);if(W.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const $=H.shadow,N=t.get(H);N.shadowIntensity=$.intensity,N.shadowBias=$.bias,N.shadowNormalBias=$.normalBias,N.shadowRadius=$.radius,N.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),r.sunShadow[T]=N,r.sunShadowMap[T]=K;const se=$.getViewportCount();for(let ye=0;ye<se;ye++)r.sunShadowMatrix[R+ye]=$.getMatrix(ye),r.sunShadowCascade[R+ye]=$._cascadeData[ye];R+=se,T++}r.sun[S]=W,S++}else if(H.isDirectionalLight){const W=e.get(H);if(W.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const $=H.shadow,N=t.get(H);N.shadowIntensity=$.intensity,N.shadowBias=$.bias,N.shadowNormalBias=$.normalBias,N.shadowRadius=$.radius,N.shadowMapSize=$.mapSize,r.directionalShadow[M]=N,r.directionalShadowMap[M]=K,r.directionalShadowMatrix[M]=H.shadow.matrix,b++}r.directional[M]=W,M++}else if(H.isSpotLight){const W=e.get(H);W.position.setFromMatrixPosition(H.matrixWorld),W.color.copy(te).multiplyScalar(me),W.distance=j,W.coneCos=Math.cos(H.angle),W.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),W.decay=H.decay,r.spot[P]=W;const $=H.shadow;if(H.map&&(r.spotLightMap[x]=H.map,x++,$.updateMatrices(H),H.castShadow&&L++),r.spotLightMatrix[P]=$.matrix,H.castShadow){const N=t.get(H);N.shadowIntensity=$.intensity,N.shadowBias=$.bias,N.shadowNormalBias=$.normalBias,N.shadowRadius=$.radius,N.shadowMapSize=$.mapSize,r.spotShadow[P]=N,r.spotShadowMap[P]=K,U++}P++}else if(H.isRectAreaLight){const W=e.get(H);W.color.copy(te).multiplyScalar(me),W.halfWidth.set(H.width*.5,0,0),W.halfHeight.set(0,H.height*.5,0),r.rectArea[O]=W,O++}else if(H.isPointLight){const W=e.get(H);if(W.color.copy(H.color).multiplyScalar(H.intensity),W.distance=H.distance,W.decay=H.decay,H.castShadow){const $=H.shadow,N=t.get(H);N.shadowIntensity=$.intensity,N.shadowBias=$.bias,N.shadowNormalBias=$.normalBias,N.shadowRadius=$.radius,N.shadowMapSize=$.mapSize,N.shadowCameraNear=$.camera.near,N.shadowCameraFar=$.camera.far,r.pointShadow[y]=N,r.pointShadowMap[y]=K,r.pointShadowMatrix[y]=H.shadow.matrix,D++}r.point[y]=W,y++}else if(H.isHemisphereLight){const W=e.get(H);W.skyColor.copy(H.color).multiplyScalar(me),W.groundColor.copy(H.groundColor).multiplyScalar(me),r.hemi[C]=W,C++}}O>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=He.LTC_FLOAT_1,r.rectAreaLTC2=He.LTC_FLOAT_2):(r.rectAreaLTC1=He.LTC_HALF_1,r.rectAreaLTC2=He.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=v,r.ambient[2]=g;const V=r.hash;(V.sunLength!==S||V.directionalLength!==M||V.pointLength!==y||V.spotLength!==P||V.rectAreaLength!==O||V.hemiLength!==C||V.numSunShadows!==T||V.numDirectionalShadows!==b||V.numPointShadows!==D||V.numSpotShadows!==U||V.numSpotMaps!==x||V.numLightProbes!==B)&&(r.sun.length=S,r.directional.length=M,r.spot.length=P,r.rectArea.length=O,r.point.length=y,r.hemi.length=C,r.sunShadow.length=T,r.sunShadowMap.length=T,r.sunShadowMatrix.length=R,r.sunShadowCascade.length=R,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.directionalShadowMatrix.length=b,r.pointShadow.length=D,r.pointShadowMap.length=D,r.pointShadowMatrix.length=D,r.spotShadow.length=U,r.spotShadowMap.length=U,r.spotLightMatrix.length=U+x-L,r.spotLightMap.length=x,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=B,V.sunLength=S,V.directionalLength=M,V.pointLength=y,V.spotLength=P,V.rectAreaLength=O,V.hemiLength=C,V.numSunShadows=T,V.numDirectionalShadows=b,V.numPointShadows=D,V.numSpotShadows=U,V.numSpotMaps=x,V.numLightProbes=B,r.version=uD++)}function d(h,m){let v=0,g=0,S=0,T=0,R=0,M=0;const y=m.matrixWorldInverse;for(let P=0,O=h.length;P<O;P++){const C=h[P];if(C.isSunLight){const b=r.sun[v];b.direction.setFromMatrixPosition(C.matrixWorld),b.direction.transformDirection(y),v++}else if(C.isDirectionalLight){const b=r.directional[g];b.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(y),g++}else if(C.isSpotLight){const b=r.spot[T];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(y),b.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(y),T++}else if(C.isRectAreaLight){const b=r.rectArea[R];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(y),u.identity(),l.copy(C.matrixWorld),l.premultiply(y),u.extractRotation(l),b.halfWidth.set(C.width*.5,0,0),b.halfHeight.set(0,C.height*.5,0),b.halfWidth.applyMatrix4(u),b.halfHeight.applyMatrix4(u),R++}else if(C.isPointLight){const b=r.point[S];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(y),S++}else if(C.isHemisphereLight){const b=r.hemi[M];b.direction.setFromMatrixPosition(C.matrixWorld),b.direction.transformDirection(y),M++}}}return{setup:f,setupView:d,state:r}}function F_(n){const e=new fD(n),t=[],r=[],o=[];function l(g){v.camera=g,t.length=0,r.length=0,o.length=0}function u(g){t.push(g)}function f(g){r.push(g)}function d(g){o.push(g)}function h(){e.setup(t)}function m(g){e.setupView(t,g)}const v={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:v,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:f,pushLightProbeGrid:d}}function dD(n){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new F_(n),e.set(o,[f])):l>=u.length?(f=new F_(n),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const hD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,mD=[new ue(1,0,0),new ue(-1,0,0),new ue(0,1,0),new ue(0,-1,0),new ue(0,0,1),new ue(0,0,-1)],gD=[new ue(0,-1,0),new ue(0,-1,0),new ue(0,0,1),new ue(0,0,-1),new ue(0,-1,0),new ue(0,-1,0)],O_=new _n,Na=new ue,jd=new ue;function vD(n,e,t){let r=new Kx;const o=new Xt,l=new Xt,u=new pn,f=new bA,d=new PA,h={},m=t.maxTextureSize,v={[Vs]:oi,[oi]:Vs,[ir]:ir},g=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:hD,fragmentShader:pD}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const T=new Di;T.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new fr(T,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gu;let y=this.type;this.render=function(D,U,x){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||D.length===0)return;this.type===gw&&(pt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gu);const L=n.getRenderTarget(),B=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),ee=n.state;ee.setBlending(Nr),ee.buffers.depth.getReversed()===!0?ee.buffers.color.setClear(0,0,0,0):ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const Z=y!==this.type;Z&&U.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(te=>te.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,te=D.length;H<te;H++){const me=D[H],j=me.shadow;if(j===void 0){pt("WebGLShadowMap:",me,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;o.copy(j.mapSize);const K=j.getFrameExtents();o.multiply(K),l.copy(j.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/K.x),o.x=l.x*K.x,j.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/K.y),o.y=l.y*K.y,j.mapSize.y=l.y));const W=n.state.buffers.depth.getReversed();if(j.camera._reversedDepth=W,j.map===null||Z===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Oa){if(me.isPointLight){pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new qi(o.x,o.y,{format:Gs,type:cr,minFilter:Yn,magFilter:Yn,generateMipmaps:!1}),j.map.texture.name=me.name+".shadowMap",j.map.depthTexture=new Ja(o.x,o.y,rr),j.map.depthTexture.name=me.name+".shadowMapDepth",j.map.depthTexture.format=Or,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Un,j.map.depthTexture.magFilter=Un}else me.isPointLight?(j.map=new iy(o.x),j.map.depthTexture=new EA(o.x,ur)):(j.map=new qi(o.x,o.y),j.map.depthTexture=new Ja(o.x,o.y,ur)),j.map.depthTexture.name=me.name+".shadowMap",j.map.depthTexture.format=Or,this.type===Gu?(j.map.depthTexture.compareFunction=W?Gp:Hp,j.map.depthTexture.minFilter=Yn,j.map.depthTexture.magFilter=Yn):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Un,j.map.depthTexture.magFilter=Un);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==o.x||j.map.height!==o.y)&&j.map.setSize(o.x,o.y);const $=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();me.isPointLight!==!0&&j.updateMatrices(me,x);for(let N=0;N<$;N++){const se=j.getCamera(N);if(me.isPointLight){const ye=j.camera,je=j.matrix,We=me.distance||ye.far;We!==ye.far&&(ye.far=We,ye.updateProjectionMatrix()),Na.setFromMatrixPosition(me.matrixWorld),ye.position.copy(Na),jd.copy(ye.position),jd.add(mD[N]),ye.up.copy(gD[N]),ye.lookAt(jd),ye.updateMatrixWorld(),je.makeTranslation(-Na.x,-Na.y,-Na.z),O_.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),j._frustum.setFromProjectionMatrix(O_,ye.coordinateSystem,ye.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)n.setRenderTarget(j.map,N),n.clear();else{N===0&&(n.setRenderTarget(j.map),n.clear());const ye=j.getViewport(N);u.set(l.x*ye.x,l.y*ye.y,l.x*ye.z,l.y*ye.w),ee.viewport(u)}r=j.getFrustum(N),C(U,x,se,me,this.type)}j.isPointLightShadow!==!0&&this.type===Oa&&P(j,x),j.needsUpdate=!1}y=this.type,M.needsUpdate=!1,n.setRenderTarget(L,B,V)};function P(D,U){const x=e.update(R);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,S.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),D.mapPass===null?D.mapPass=new qi(o.x,o.y,{format:Gs,type:cr}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),g.uniforms.shadow_pass.value=D.map.depthTexture,g.uniforms.resolution.value.set(D.map.width,D.map.height),g.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(U,null,x,g,R,null),S.uniforms.shadow_pass.value=D.mapPass.texture,S.uniforms.resolution.value.set(D.map.width,D.map.height),S.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(U,null,x,S,R,null)}function O(D,U,x,L){let B=null;const V=x.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(V!==void 0)B=V;else if(B=x.isPointLight===!0?d:f,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const ee=B.uuid,Z=U.uuid;let H=h[ee];H===void 0&&(H={},h[ee]=H);let te=H[Z];te===void 0&&(te=B.clone(),H[Z]=te,U.addEventListener("dispose",b)),B=te}if(B.visible=U.visible,B.wireframe=U.wireframe,L===Oa?B.side=U.shadowSide!==null?U.shadowSide:U.side:B.side=U.shadowSide!==null?U.shadowSide:v[U.side],B.alphaMap=U.alphaMap,B.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,B.map=U.map,B.clipShadows=U.clipShadows,B.clippingPlanes=U.clippingPlanes,B.clipIntersection=U.clipIntersection,B.displacementMap=U.displacementMap,B.displacementScale=U.displacementScale,B.displacementBias=U.displacementBias,B.wireframeLinewidth=U.wireframeLinewidth,B.linewidth=U.linewidth,x.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const ee=n.properties.get(B);ee.light=x}return B}function C(D,U,x,L,B){if(D.visible===!1)return;if(D.layers.test(U.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&B===Oa)&&(!D.frustumCulled||D.intersectsFrustum(r))){D.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,D.matrixWorld);const Z=e.update(D),H=D.material;if(Array.isArray(H)){const te=Z.groups;for(let me=0,j=te.length;me<j;me++){const K=te[me],W=H[K.materialIndex];if(W&&W.visible){const $=O(D,W,L,B);D.onBeforeShadow(n,D,U,x,Z,$,K),n.renderBufferDirect(x,null,Z,$,D,K),D.onAfterShadow(n,D,U,x,Z,$,K)}}}else if(H.visible){const te=O(D,H,L,B);D.onBeforeShadow(n,D,U,x,Z,te,null),n.renderBufferDirect(x,null,Z,te,D,null),D.onAfterShadow(n,D,U,x,Z,te,null)}}const ee=D.children;for(let Z=0,H=ee.length;Z<H;Z++)C(ee[Z],U,x,L,B)}function b(D){D.target.removeEventListener("dispose",b);for(const x in h){const L=h[x],B=D.target.uuid;B in L&&(L[B].dispose(),delete L[B])}}}function _D(n,e){function t(){let G=!1;const Le=new pn;let _e=null;const Ne=new pn(0,0,0,0);return{setMask:function(Be){_e!==Be&&!G&&(n.colorMask(Be,Be,Be,Be),_e=Be)},setLocked:function(Be){G=Be},setClear:function(Be,Se,nt,Ze,Ot){Ot===!0&&(Be*=Ze,Se*=Ze,nt*=Ze),Le.set(Be,Se,nt,Ze),Ne.equals(Le)===!1&&(n.clearColor(Be,Se,nt,Ze),Ne.copy(Le))},reset:function(){G=!1,_e=null,Ne.set(-1,0,0,0)}}}function r(){let G=!1,Le=!1,_e=null,Ne=null,Be=null;return{setReversed:function(Se){if(Le!==Se){const nt=e.get("EXT_clip_control");Se?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT),Le=Se;const Ze=Be;Be=null,this.setClear(Ze)}},getReversed:function(){return Le},setTest:function(Se){Se?ce(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(Se){_e!==Se&&!G&&(n.depthMask(Se),_e=Se)},setFunc:function(Se){if(Le&&(Se=Zw[Se]),Ne!==Se){switch(Se){case ch:n.depthFunc(n.NEVER);break;case fh:n.depthFunc(n.ALWAYS);break;case dh:n.depthFunc(n.LESS);break;case $a:n.depthFunc(n.LEQUAL);break;case hh:n.depthFunc(n.EQUAL);break;case ph:n.depthFunc(n.GEQUAL);break;case mh:n.depthFunc(n.GREATER);break;case gh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ne=Se}},setLocked:function(Se){G=Se},setClear:function(Se){Be!==Se&&(Be=Se,Le&&(Se=1-Se),n.clearDepth(Se))},reset:function(){G=!1,_e=null,Ne=null,Be=null,Le=!1}}}function o(){let G=!1,Le=null,_e=null,Ne=null,Be=null,Se=null,nt=null,Ze=null,Ot=null;return{setTest:function(bt){G||(bt?ce(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(bt){Le!==bt&&!G&&(n.stencilMask(bt),Le=bt)},setFunc:function(bt,cn,Qn){(_e!==bt||Ne!==cn||Be!==Qn)&&(n.stencilFunc(bt,cn,Qn),_e=bt,Ne=cn,Be=Qn)},setOp:function(bt,cn,Qn){(Se!==bt||nt!==cn||Ze!==Qn)&&(n.stencilOp(bt,cn,Qn),Se=bt,nt=cn,Ze=Qn)},setLocked:function(bt){G=bt},setClear:function(bt){Ot!==bt&&(n.clearStencil(bt),Ot=bt)},reset:function(){G=!1,Le=null,_e=null,Ne=null,Be=null,Se=null,nt=null,Ze=null,Ot=null}}}const l=new t,u=new r,f=new o,d=new WeakMap,h=new WeakMap;let m={},v={},g={},S=new WeakMap,T=[],R=null,M=!1,y=null,P=null,O=null,C=null,b=null,D=null,U=null,x=new Rt(0,0,0),L=0,B=!1,V=null,ee=null,Z=null,H=null,te=null;const me=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,K=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(W)[1]),j=K>=1):W.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),j=K>=2);let $=null,N={};const se=n.getParameter(n.SCISSOR_BOX),ye=n.getParameter(n.VIEWPORT),je=new pn().fromArray(se),We=new pn().fromArray(ye);function qe(G,Le,_e,Ne){const Be=new Uint8Array(4),Se=n.createTexture();n.bindTexture(G,Se),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let nt=0;nt<_e;nt++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Le,0,n.RGBA,1,1,Ne,0,n.RGBA,n.UNSIGNED_BYTE,Be):n.texImage2D(Le+nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Be);return Se}const oe={};oe[n.TEXTURE_2D]=qe(n.TEXTURE_2D,n.TEXTURE_2D,1),oe[n.TEXTURE_CUBE_MAP]=qe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[n.TEXTURE_2D_ARRAY]=qe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),oe[n.TEXTURE_3D]=qe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ce(n.DEPTH_TEST),u.setFunc($a),_t(!1),Ct(Vv),ce(n.CULL_FACE),vt(Nr);function ce(G){m[G]!==!0&&(n.enable(G),m[G]=!0)}function we(G){m[G]!==!1&&(n.disable(G),m[G]=!1)}function Ge(G,Le){return g[G]!==Le?(n.bindFramebuffer(G,Le),g[G]=Le,G===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=Le),G===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ce(G,Le){let _e=T,Ne=!1;if(G){_e=S.get(Le),_e===void 0&&(_e=[],S.set(Le,_e));const Be=G.textures;if(_e.length!==Be.length||_e[0]!==n.COLOR_ATTACHMENT0){for(let Se=0,nt=Be.length;Se<nt;Se++)_e[Se]=n.COLOR_ATTACHMENT0+Se;_e.length=Be.length,Ne=!0}}else _e[0]!==n.BACK&&(_e[0]=n.BACK,Ne=!0);Ne&&n.drawBuffers(_e)}function ze(G){return R!==G?(n.useProgram(G),R=G,!0):!1}const qt={[Po]:n.FUNC_ADD,[_w]:n.FUNC_SUBTRACT,[xw]:n.FUNC_REVERSE_SUBTRACT};qt[yw]=n.MIN,qt[Sw]=n.MAX;const mt={[Mw]:n.ZERO,[Ew]:n.ONE,[Tw]:n.SRC_COLOR,[Ex]:n.SRC_ALPHA,[Pw]:n.SRC_ALPHA_SATURATE,[Cw]:n.DST_COLOR,[Aw]:n.DST_ALPHA,[ww]:n.ONE_MINUS_SRC_COLOR,[Tx]:n.ONE_MINUS_SRC_ALPHA,[bw]:n.ONE_MINUS_DST_COLOR,[Rw]:n.ONE_MINUS_DST_ALPHA,[Dw]:n.CONSTANT_COLOR,[Lw]:n.ONE_MINUS_CONSTANT_COLOR,[Nw]:n.CONSTANT_ALPHA,[Iw]:n.ONE_MINUS_CONSTANT_ALPHA};function vt(G,Le,_e,Ne,Be,Se,nt,Ze,Ot,bt){if(G===Nr){M===!0&&(we(n.BLEND),M=!1);return}if(M===!1&&(ce(n.BLEND),M=!0),G!==vw){if(G!==y||bt!==B){if((P!==Po||b!==Po)&&(n.blendEquation(n.FUNC_ADD),P=Po,b=Po),bt)switch(G){case Ga:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wa:n.blendFunc(n.ONE,n.ONE);break;case Hv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gv:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ht("WebGLState: Invalid blending: ",G);break}else switch(G){case Ga:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Hv:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gv:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",G);break}O=null,C=null,D=null,U=null,x.set(0,0,0),L=0,y=G,B=bt}return}Be=Be||Le,Se=Se||_e,nt=nt||Ne,(Le!==P||Be!==b)&&(n.blendEquationSeparate(qt[Le],qt[Be]),P=Le,b=Be),(_e!==O||Ne!==C||Se!==D||nt!==U)&&(n.blendFuncSeparate(mt[_e],mt[Ne],mt[Se],mt[nt]),O=_e,C=Ne,D=Se,U=nt),(Ze.equals(x)===!1||Ot!==L)&&(n.blendColor(Ze.r,Ze.g,Ze.b,Ot),x.copy(Ze),L=Ot),y=G,B=!1}function kt(G,Le){G.side===ir?we(n.CULL_FACE):ce(n.CULL_FACE);let _e=G.side===oi;Le&&(_e=!_e),_t(_e),G.blending===Ga&&G.transparent===!1?vt(Nr):vt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),l.setMask(G.colorWrite);const Ne=G.stencilWrite;f.setTest(Ne),Ne&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),tn(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function _t(G){V!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),V=G)}function Ct(G){G!==pw?(ce(n.CULL_FACE),G!==ee&&(G===Vv?n.cullFace(n.BACK):G===mw?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),ee=G}function Ut(G){G!==Z&&(j&&n.lineWidth(G),Z=G)}function tn(G,Le,_e){G?(ce(n.POLYGON_OFFSET_FILL),(H!==Le||te!==_e)&&(H=Le,te=_e,u.getReversed()&&(Le=-Le),n.polygonOffset(Le,_e))):we(n.POLYGON_OFFSET_FILL)}function Ft(G){G?ce(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function Gt(G){G===void 0&&(G=n.TEXTURE0+me-1),$!==G&&(n.activeTexture(G),$=G)}function Y(G,Le,_e){_e===void 0&&($===null?_e=n.TEXTURE0+me-1:_e=$);let Ne=N[_e];Ne===void 0&&(Ne={type:void 0,texture:void 0},N[_e]=Ne),(Ne.type!==G||Ne.texture!==Le)&&($!==_e&&(n.activeTexture(_e),$=_e),n.bindTexture(G,Le||oe[G]),Ne.type=G,Ne.texture=Le)}function nn(){const G=N[$];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function At(){try{n.compressedTexImage2D(...arguments)}catch(G){Ht("WebGLState:",G)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(G){Ht("WebGLState:",G)}}function E(){try{n.texSubImage2D(...arguments)}catch(G){Ht("WebGLState:",G)}}function Q(){try{n.texSubImage3D(...arguments)}catch(G){Ht("WebGLState:",G)}}function ae(){try{n.compressedTexSubImage2D(...arguments)}catch(G){Ht("WebGLState:",G)}}function pe(){try{n.compressedTexSubImage3D(...arguments)}catch(G){Ht("WebGLState:",G)}}function Ae(){try{n.texStorage2D(...arguments)}catch(G){Ht("WebGLState:",G)}}function Pe(){try{n.texStorage3D(...arguments)}catch(G){Ht("WebGLState:",G)}}function ge(){try{n.texImage2D(...arguments)}catch(G){Ht("WebGLState:",G)}}function xe(){try{n.texImage3D(...arguments)}catch(G){Ht("WebGLState:",G)}}function Ie(G){return v[G]!==void 0?v[G]:n.getParameter(G)}function et(G,Le){v[G]!==Le&&(n.pixelStorei(G,Le),v[G]=Le)}function Ue(G){je.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),je.copy(G))}function De(G){We.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),We.copy(G))}function tt(G,Le){let _e=h.get(Le);_e===void 0&&(_e=new WeakMap,h.set(Le,_e));let Ne=_e.get(G);Ne===void 0&&(Ne=n.getUniformBlockIndex(Le,G.name),_e.set(G,Ne))}function ot(G,Le){const Ne=h.get(Le).get(G);d.get(Le)!==Ne&&(n.uniformBlockBinding(Le,Ne,G.__bindingPointIndex),d.set(Le,Ne))}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),u.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),m={},v={},$=null,N={},g={},S=new WeakMap,T=[],R=null,M=!1,y=null,P=null,O=null,C=null,b=null,D=null,U=null,x=new Rt(0,0,0),L=0,B=!1,V=null,ee=null,Z=null,H=null,te=null,je.set(0,0,n.canvas.width,n.canvas.height),We.set(0,0,n.canvas.width,n.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:ce,disable:we,bindFramebuffer:Ge,drawBuffers:Ce,useProgram:ze,setBlending:vt,setMaterial:kt,setFlipSided:_t,setCullFace:Ct,setLineWidth:Ut,setPolygonOffset:tn,setScissorTest:Ft,activeTexture:Gt,bindTexture:Y,unbindTexture:nn,compressedTexImage2D:At,compressedTexImage3D:I,texImage2D:ge,texImage3D:xe,pixelStorei:et,getParameter:Ie,updateUBOMapping:tt,uniformBlockBinding:ot,texStorage2D:Ae,texStorage3D:Pe,texSubImage2D:E,texSubImage3D:Q,compressedTexSubImage2D:ae,compressedTexSubImage3D:pe,scissor:Ue,viewport:De,reset:ct}}function xD(n,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Xt,m=new WeakMap,v=new Set;let g;const S=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(I,E){return T?new OffscreenCanvas(I,E):uc("canvas")}function M(I,E,Q){let ae=1;const pe=At(I);if((pe.width>Q||pe.height>Q)&&(ae=Q/Math.max(pe.width,pe.height)),ae<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Ae=Math.floor(ae*pe.width),Pe=Math.floor(ae*pe.height);g===void 0&&(g=R(Ae,Pe));const ge=E?R(Ae,Pe):g;return ge.width=Ae,ge.height=Pe,ge.getContext("2d").drawImage(I,0,0,Ae,Pe),pt("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+Ae+"x"+Pe+")."),ge}else return"data"in I&&pt("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),I;return I}function y(I){return I.generateMipmaps}function P(I){n.generateMipmap(I)}function O(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function C(I,E,Q,ae,pe,Ae=!1){if(I!==null){if(n[I]!==void 0)return n[I];pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Pe;ae&&(Pe=e.get("EXT_texture_norm16"),Pe||pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=E;if(E===n.RED&&(Q===n.FLOAT&&(ge=n.R32F),Q===n.HALF_FLOAT&&(ge=n.R16F),Q===n.UNSIGNED_BYTE&&(ge=n.R8),Q===n.UNSIGNED_SHORT&&Pe&&(ge=Pe.R16_EXT),Q===n.SHORT&&Pe&&(ge=Pe.R16_SNORM_EXT)),E===n.RED_INTEGER&&(Q===n.UNSIGNED_BYTE&&(ge=n.R8UI),Q===n.UNSIGNED_SHORT&&(ge=n.R16UI),Q===n.UNSIGNED_INT&&(ge=n.R32UI),Q===n.BYTE&&(ge=n.R8I),Q===n.SHORT&&(ge=n.R16I),Q===n.INT&&(ge=n.R32I)),E===n.RG&&(Q===n.FLOAT&&(ge=n.RG32F),Q===n.HALF_FLOAT&&(ge=n.RG16F),Q===n.UNSIGNED_BYTE&&(ge=n.RG8),Q===n.UNSIGNED_SHORT&&Pe&&(ge=Pe.RG16_EXT),Q===n.SHORT&&Pe&&(ge=Pe.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(Q===n.UNSIGNED_BYTE&&(ge=n.RG8UI),Q===n.UNSIGNED_SHORT&&(ge=n.RG16UI),Q===n.UNSIGNED_INT&&(ge=n.RG32UI),Q===n.BYTE&&(ge=n.RG8I),Q===n.SHORT&&(ge=n.RG16I),Q===n.INT&&(ge=n.RG32I)),E===n.RGB_INTEGER&&(Q===n.UNSIGNED_BYTE&&(ge=n.RGB8UI),Q===n.UNSIGNED_SHORT&&(ge=n.RGB16UI),Q===n.UNSIGNED_INT&&(ge=n.RGB32UI),Q===n.BYTE&&(ge=n.RGB8I),Q===n.SHORT&&(ge=n.RGB16I),Q===n.INT&&(ge=n.RGB32I)),E===n.RGBA_INTEGER&&(Q===n.UNSIGNED_BYTE&&(ge=n.RGBA8UI),Q===n.UNSIGNED_SHORT&&(ge=n.RGBA16UI),Q===n.UNSIGNED_INT&&(ge=n.RGBA32UI),Q===n.BYTE&&(ge=n.RGBA8I),Q===n.SHORT&&(ge=n.RGBA16I),Q===n.INT&&(ge=n.RGBA32I)),E===n.RGB&&(Q===n.UNSIGNED_SHORT&&Pe&&(ge=Pe.RGB16_EXT),Q===n.SHORT&&Pe&&(ge=Pe.RGB16_SNORM_EXT),Q===n.UNSIGNED_INT_5_9_9_9_REV&&(ge=n.RGB9_E5),Q===n.UNSIGNED_INT_10F_11F_11F_REV&&(ge=n.R11F_G11F_B10F)),E===n.RGBA){const xe=Ae?ac:Nt.getTransfer(pe);Q===n.FLOAT&&(ge=n.RGBA32F),Q===n.HALF_FLOAT&&(ge=n.RGBA16F),Q===n.UNSIGNED_BYTE&&(ge=xe===jt?n.SRGB8_ALPHA8:n.RGBA8),Q===n.UNSIGNED_SHORT&&Pe&&(ge=Pe.RGBA16_EXT),Q===n.SHORT&&Pe&&(ge=Pe.RGBA16_SNORM_EXT),Q===n.UNSIGNED_SHORT_4_4_4_4&&(ge=n.RGBA4),Q===n.UNSIGNED_SHORT_5_5_5_1&&(ge=n.RGB5_A1)}return(ge===n.R16F||ge===n.R32F||ge===n.RG16F||ge===n.RG32F||ge===n.RGBA16F||ge===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function b(I,E){let Q;return I?E===null||E===ur||E===Qa?Q=n.DEPTH24_STENCIL8:E===rr?Q=n.DEPTH32F_STENCIL8:E===Za&&(Q=n.DEPTH24_STENCIL8,pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ur||E===Qa?Q=n.DEPTH_COMPONENT24:E===rr?Q=n.DEPTH_COMPONENT32F:E===Za&&(Q=n.DEPTH_COMPONENT16),Q}function D(I,E){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==Un&&I.minFilter!==Yn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function U(I){const E=I.target;E.removeEventListener("dispose",U),L(E),E.isVideoTexture&&m.delete(E),E.isHTMLTexture&&v.delete(E)}function x(I){const E=I.target;E.removeEventListener("dispose",x),V(E)}function L(I){const E=r.get(I);if(E.__webglInit===void 0)return;const Q=I.source,ae=S.get(Q);if(ae){const pe=ae[E.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&B(I),Object.keys(ae).length===0&&S.delete(Q)}r.remove(I)}function B(I){const E=r.get(I);n.deleteTexture(E.__webglTexture);const Q=I.source,ae=S.get(Q);delete ae[E.__cacheKey],u.memory.textures--}function V(I){const E=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(E.__webglFramebuffer[ae]))for(let pe=0;pe<E.__webglFramebuffer[ae].length;pe++)n.deleteFramebuffer(E.__webglFramebuffer[ae][pe]);else n.deleteFramebuffer(E.__webglFramebuffer[ae]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[ae])}else{if(Array.isArray(E.__webglFramebuffer))for(let ae=0;ae<E.__webglFramebuffer.length;ae++)n.deleteFramebuffer(E.__webglFramebuffer[ae]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ae=0;ae<E.__webglColorRenderbuffer.length;ae++)E.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[ae]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=I.textures;for(let ae=0,pe=Q.length;ae<pe;ae++){const Ae=r.get(Q[ae]);Ae.__webglTexture&&(n.deleteTexture(Ae.__webglTexture),u.memory.textures--),r.remove(Q[ae])}r.remove(I)}let ee=0;function Z(){ee=0}function H(){return ee}function te(I){ee=I}function me(){const I=ee;return I>=o.maxTextures&&pt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+o.maxTextures),ee+=1,I}function j(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function K(I,E){const Q=r.get(I);if(I.isVideoTexture&&Y(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Q.__version!==I.version){const ae=I.image;if(ae===null)pt("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)pt("WebGLRenderer: Texture marked for update but image is incomplete");else{we(Q,I,E);return}}else I.isExternalTexture&&(Q.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture,n.TEXTURE0+E)}function W(I,E){const Q=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){we(Q,I,E);return}else I.isExternalTexture&&(Q.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Q.__webglTexture,n.TEXTURE0+E)}function $(I,E){const Q=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){we(Q,I,E);return}t.bindTexture(n.TEXTURE_3D,Q.__webglTexture,n.TEXTURE0+E)}function N(I,E){const Q=r.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&Q.__version!==I.version){Ge(Q,I,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture,n.TEXTURE0+E)}const se={[vh]:n.REPEAT,[Pr]:n.CLAMP_TO_EDGE,[_h]:n.MIRRORED_REPEAT},ye={[Un]:n.NEAREST,[Ow]:n.NEAREST_MIPMAP_NEAREST,[hu]:n.NEAREST_MIPMAP_LINEAR,[Yn]:n.LINEAR,[_d]:n.LINEAR_MIPMAP_NEAREST,[Bs]:n.LINEAR_MIPMAP_LINEAR},je={[Vw]:n.NEVER,[Yw]:n.ALWAYS,[Hw]:n.LESS,[Hp]:n.LEQUAL,[Gw]:n.EQUAL,[Gp]:n.GEQUAL,[Ww]:n.GREATER,[Xw]:n.NOTEQUAL};function We(I,E){if(E.type===rr&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Yn||E.magFilter===_d||E.magFilter===hu||E.magFilter===Bs||E.minFilter===Yn||E.minFilter===_d||E.minFilter===hu||E.minFilter===Bs)&&pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,se[E.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,se[E.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,se[E.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,ye[E.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,ye[E.minFilter]),E.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,je[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Un||E.minFilter!==hu&&E.minFilter!==Bs||E.type===rr&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function qe(I,E){let Q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",U));const ae=E.source;let pe=S.get(ae);pe===void 0&&(pe={},S.set(ae,pe));const Ae=j(E);if(Ae!==I.__cacheKey){pe[Ae]===void 0&&(pe[Ae]={texture:n.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),pe[Ae].usedTimes++;const Pe=pe[I.__cacheKey];Pe!==void 0&&(pe[I.__cacheKey].usedTimes--,Pe.usedTimes===0&&B(E)),I.__cacheKey=Ae,I.__webglTexture=pe[Ae].texture}return Q}function oe(I,E,Q){return Math.floor(Math.floor(I/Q)/E)}function ce(I,E,Q,ae){const Ae=I.updateRanges;if(Ae.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,Q,ae,E.data);else{Ae.sort((et,Ue)=>et.start-Ue.start);let Pe=0;for(let et=1;et<Ae.length;et++){const Ue=Ae[Pe],De=Ae[et],tt=Ue.start+Ue.count,ot=oe(De.start,E.width,4),ct=oe(Ue.start,E.width,4);De.start<=tt+1&&ot===ct&&oe(De.start+De.count-1,E.width,4)===ot?Ue.count=Math.max(Ue.count,De.start+De.count-Ue.start):(++Pe,Ae[Pe]=De)}Ae.length=Pe+1;const ge=t.getParameter(n.UNPACK_ROW_LENGTH),xe=t.getParameter(n.UNPACK_SKIP_PIXELS),Ie=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let et=0,Ue=Ae.length;et<Ue;et++){const De=Ae[et],tt=Math.floor(De.start/4),ot=Math.ceil(De.count/4),ct=tt%E.width,G=Math.floor(tt/E.width),Le=ot,_e=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ct),t.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,ct,G,Le,_e,Q,ae,E.data)}I.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ge),t.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ie)}}function we(I,E,Q){let ae=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ae=n.TEXTURE_3D);const pe=qe(I,E),Ae=E.source;t.bindTexture(ae,I.__webglTexture,n.TEXTURE0+Q);const Pe=r.get(Ae);if(Ae.version!==Pe.__version||pe===!0){if(t.activeTexture(n.TEXTURE0+Q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const _e=Nt.getPrimaries(Nt.workingColorSpace),Ne=E.colorSpace===cs?null:Nt.getPrimaries(E.colorSpace),Be=E.colorSpace===cs||_e===Ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let xe=M(E.image,!1,o.maxTextureSize);xe=nn(E,xe);const Ie=l.convert(E.format,E.colorSpace),et=l.convert(E.type);let Ue=C(E.internalFormat,Ie,et,E.normalized,E.colorSpace,E.isVideoTexture);We(ae,E);let De;const tt=E.mipmaps,ot=E.isVideoTexture!==!0,ct=Pe.__version===void 0||pe===!0,G=Ae.dataReady,Le=D(E,xe);if(E.isDepthTexture)Ue=b(E.format===ks,E.type),ct&&(ot?t.texStorage2D(n.TEXTURE_2D,1,Ue,xe.width,xe.height):t.texImage2D(n.TEXTURE_2D,0,Ue,xe.width,xe.height,0,Ie,et,null));else if(E.isDataTexture)if(tt.length>0){ot&&ct&&t.texStorage2D(n.TEXTURE_2D,Le,Ue,tt[0].width,tt[0].height);for(let _e=0,Ne=tt.length;_e<Ne;_e++)De=tt[_e],ot?G&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,De.width,De.height,Ie,et,De.data):t.texImage2D(n.TEXTURE_2D,_e,Ue,De.width,De.height,0,Ie,et,De.data);E.generateMipmaps=!1}else ot?(ct&&t.texStorage2D(n.TEXTURE_2D,Le,Ue,xe.width,xe.height),G&&ce(E,xe,Ie,et)):t.texImage2D(n.TEXTURE_2D,0,Ue,xe.width,xe.height,0,Ie,et,xe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ot&&ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ue,tt[0].width,tt[0].height,xe.depth);for(let _e=0,Ne=tt.length;_e<Ne;_e++)if(De=tt[_e],E.format!==ji)if(Ie!==null)if(ot){if(G)if(E.layerUpdates.size>0){const Be=m_(De.width,De.height,E.format,E.type);for(const Se of E.layerUpdates){const nt=De.data.subarray(Se*Be/De.data.BYTES_PER_ELEMENT,(Se+1)*Be/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,Se,De.width,De.height,1,Ie,nt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,De.width,De.height,xe.depth,Ie,De.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_e,Ue,De.width,De.height,xe.depth,0,De.data,0,0);else pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,De.width,De.height,xe.depth,Ie,et,De.data):t.texImage3D(n.TEXTURE_2D_ARRAY,_e,Ue,De.width,De.height,xe.depth,0,Ie,et,De.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{ot&&ct&&t.texStorage2D(n.TEXTURE_2D,Le,Ue,tt[0].width,tt[0].height);for(let _e=0,Ne=tt.length;_e<Ne;_e++)De=tt[_e],E.format!==ji?Ie!==null?ot?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,_e,0,0,De.width,De.height,Ie,De.data):t.compressedTexImage2D(n.TEXTURE_2D,_e,Ue,De.width,De.height,0,De.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?G&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,De.width,De.height,Ie,et,De.data):t.texImage2D(n.TEXTURE_2D,_e,Ue,De.width,De.height,0,Ie,et,De.data)}else if(E.isDataArrayTexture)if(ot){if(ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ue,xe.width,xe.height,xe.depth),G)if(E.layerUpdates.size>0){const _e=m_(xe.width,xe.height,E.format,E.type);for(const Ne of E.layerUpdates){const Be=xe.data.subarray(Ne*_e/xe.data.BYTES_PER_ELEMENT,(Ne+1)*_e/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ne,xe.width,xe.height,1,Ie,et,Be)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ie,et,xe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,xe.width,xe.height,xe.depth,0,Ie,et,xe.data);else if(E.isData3DTexture)ot?(ct&&t.texStorage3D(n.TEXTURE_3D,Le,Ue,xe.width,xe.height,xe.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ie,et,xe.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,xe.width,xe.height,xe.depth,0,Ie,et,xe.data);else if(E.isFramebufferTexture){if(ct)if(ot)t.texStorage2D(n.TEXTURE_2D,Le,Ue,xe.width,xe.height);else{let _e=xe.width,Ne=xe.height;for(let Be=0;Be<Le;Be++)t.texImage2D(n.TEXTURE_2D,Be,Ue,_e,Ne,0,Ie,et,null),_e>>=1,Ne>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){const _e=n.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),xe.parentNode!==_e){_e.appendChild(xe),v.add(E),_e.onpaint=Ne=>{const Be=Ne.changedElements;for(const Se of v)Be.includes(Se.image)&&(Se.needsUpdate=!0)},_e.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,xe);else{const Be=n.RGBA,Se=n.RGBA,nt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Be,Se,nt,xe)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(tt.length>0){if(ot&&ct){const _e=At(tt[0]);t.texStorage2D(n.TEXTURE_2D,Le,Ue,_e.width,_e.height)}for(let _e=0,Ne=tt.length;_e<Ne;_e++)De=tt[_e],ot?G&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Ie,et,De):t.texImage2D(n.TEXTURE_2D,_e,Ue,Ie,et,De);E.generateMipmaps=!1}else if(ot){if(ct){const _e=At(xe);t.texStorage2D(n.TEXTURE_2D,Le,Ue,_e.width,_e.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ie,et,xe)}else t.texImage2D(n.TEXTURE_2D,0,Ue,Ie,et,xe);y(E)&&P(ae),Pe.__version=Ae.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function Ge(I,E,Q){if(E.image.length!==6)return;const ae=qe(I,E),pe=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+Q);const Ae=r.get(pe);if(pe.version!==Ae.__version||ae===!0){t.activeTexture(n.TEXTURE0+Q);const Pe=Nt.getPrimaries(Nt.workingColorSpace),ge=E.colorSpace===cs?null:Nt.getPrimaries(E.colorSpace),xe=E.colorSpace===cs||Pe===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ie=E.isCompressedTexture||E.image[0].isCompressedTexture,et=E.image[0]&&E.image[0].isDataTexture,Ue=[];for(let Se=0;Se<6;Se++)!Ie&&!et?Ue[Se]=M(E.image[Se],!0,o.maxCubemapSize):Ue[Se]=et?E.image[Se].image:E.image[Se],Ue[Se]=nn(E,Ue[Se]);const De=Ue[0],tt=l.convert(E.format,E.colorSpace),ot=l.convert(E.type),ct=C(E.internalFormat,tt,ot,E.normalized,E.colorSpace),G=E.isVideoTexture!==!0,Le=Ae.__version===void 0||ae===!0,_e=pe.dataReady;let Ne=D(E,De);We(n.TEXTURE_CUBE_MAP,E);let Be;if(Ie){G&&Le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,ct,De.width,De.height);for(let Se=0;Se<6;Se++){Be=Ue[Se].mipmaps;for(let nt=0;nt<Be.length;nt++){const Ze=Be[nt];E.format!==ji?tt!==null?G?_e&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,nt,0,0,Ze.width,Ze.height,tt,Ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,nt,ct,Ze.width,Ze.height,0,Ze.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,nt,0,0,Ze.width,Ze.height,tt,ot,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,nt,ct,Ze.width,Ze.height,0,tt,ot,Ze.data)}}}else{if(Be=E.mipmaps,G&&Le){Be.length>0&&Ne++;const Se=At(Ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,ct,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(et){G?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ue[Se].width,Ue[Se].height,tt,ot,Ue[Se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ct,Ue[Se].width,Ue[Se].height,0,tt,ot,Ue[Se].data);for(let nt=0;nt<Be.length;nt++){const Ot=Be[nt].image[Se].image;G?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,nt+1,0,0,Ot.width,Ot.height,tt,ot,Ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,nt+1,ct,Ot.width,Ot.height,0,tt,ot,Ot.data)}}else{G?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,tt,ot,Ue[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ct,tt,ot,Ue[Se]);for(let nt=0;nt<Be.length;nt++){const Ze=Be[nt];G?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,nt+1,0,0,tt,ot,Ze.image[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,nt+1,ct,tt,ot,Ze.image[Se])}}}y(E)&&P(n.TEXTURE_CUBE_MAP),Ae.__version=pe.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function Ce(I,E,Q,ae,pe,Ae){const Pe=l.convert(Q.format,Q.colorSpace),ge=l.convert(Q.type),xe=C(Q.internalFormat,Pe,ge,Q.normalized,Q.colorSpace),Ie=r.get(E),et=r.get(Q);if(et.__renderTarget=E,!Ie.__hasExternalTextures){const Ue=Math.max(1,E.width>>Ae),De=Math.max(1,E.height>>Ae);pe===n.TEXTURE_3D||pe===n.TEXTURE_2D_ARRAY?t.texImage3D(pe,Ae,xe,Ue,De,E.depth,0,Pe,ge,null):t.texImage2D(pe,Ae,xe,Ue,De,0,Pe,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),Gt(E)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,pe,et.__webglTexture,0,Ft(E)):(pe===n.TEXTURE_2D||pe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,pe,et.__webglTexture,Ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(I,E,Q){if(n.bindRenderbuffer(n.RENDERBUFFER,I),E.depthBuffer){const ae=E.depthTexture,pe=ae&&ae.isDepthTexture?ae.type:null,Ae=b(E.stencilBuffer,pe),Pe=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Gt(E)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ft(E),Ae,E.width,E.height):Q?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ft(E),Ae,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pe,n.RENDERBUFFER,I)}else{const ae=E.textures;for(let pe=0;pe<ae.length;pe++){const Ae=ae[pe],Pe=l.convert(Ae.format,Ae.colorSpace),ge=l.convert(Ae.type),xe=C(Ae.internalFormat,Pe,ge,Ae.normalized,Ae.colorSpace);Gt(E)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ft(E),xe,E.width,E.height):Q?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ft(E),xe,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,xe,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function qt(I,E,Q){const ae=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pe=r.get(E.depthTexture);if(pe.__renderTarget=E,(!pe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ae){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,E.depthTexture.addEventListener("dispose",U)),pe.__webglTexture===void 0){pe.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,pe.__webglTexture),We(n.TEXTURE_CUBE_MAP,E.depthTexture);const Ie=l.convert(E.depthTexture.format),et=l.convert(E.depthTexture.type);let Ue;E.depthTexture.format===Or?Ue=n.DEPTH_COMPONENT24:E.depthTexture.format===ks&&(Ue=n.DEPTH24_STENCIL8);for(let De=0;De<6;De++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Ue,E.width,E.height,0,Ie,et,null)}}else K(E.depthTexture,0);const Ae=pe.__webglTexture,Pe=Ft(E),ge=ae?n.TEXTURE_CUBE_MAP_POSITIVE_X+Q:n.TEXTURE_2D,xe=E.depthTexture.format===ks?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===Or)Gt(E)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,ge,Ae,0,Pe):n.framebufferTexture2D(n.FRAMEBUFFER,xe,ge,Ae,0);else if(E.depthTexture.format===ks)Gt(E)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,ge,Ae,0,Pe):n.framebufferTexture2D(n.FRAMEBUFFER,xe,ge,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function mt(I){const E=r.get(I),Q=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const ae=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ae){const pe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ae.removeEventListener("dispose",pe)};ae.addEventListener("dispose",pe),E.__depthDisposeCallback=pe}E.__boundDepthTexture=ae}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(Q)for(let ae=0;ae<6;ae++)qt(E.__webglFramebuffer[ae],I,ae);else{const ae=I.texture.mipmaps;ae&&ae.length>0?qt(E.__webglFramebuffer[0],I,0):qt(E.__webglFramebuffer,I,0)}else if(Q){E.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[ae]),E.__webglDepthbuffer[ae]===void 0)E.__webglDepthbuffer[ae]=n.createRenderbuffer(),ze(E.__webglDepthbuffer[ae],I,!1);else{const pe=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=E.__webglDepthbuffer[ae];n.bindRenderbuffer(n.RENDERBUFFER,Ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,Ae)}}else{const ae=I.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),ze(E.__webglDepthbuffer,I,!1);else{const pe=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,Ae)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(I,E,Q){const ae=r.get(I);E!==void 0&&Ce(ae.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Q!==void 0&&mt(I)}function kt(I){const E=I.texture,Q=r.get(I),ae=r.get(E);I.addEventListener("dispose",x);const pe=I.textures,Ae=I.isWebGLCubeRenderTarget===!0,Pe=pe.length>1;if(Pe||(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=E.version,u.memory.textures++),Ae){Q.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[ge]=[];for(let xe=0;xe<E.mipmaps.length;xe++)Q.__webglFramebuffer[ge][xe]=n.createFramebuffer()}else Q.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ge=0;ge<E.mipmaps.length;ge++)Q.__webglFramebuffer[ge]=n.createFramebuffer()}else Q.__webglFramebuffer=n.createFramebuffer();if(Pe)for(let ge=0,xe=pe.length;ge<xe;ge++){const Ie=r.get(pe[ge]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),u.memory.textures++)}if(I.samples>0&&Gt(I)===!1){Q.__webglMultisampledFramebuffer=n.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ge=0;ge<pe.length;ge++){const xe=pe[ge];Q.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Q.__webglColorRenderbuffer[ge]);const Ie=l.convert(xe.format,xe.colorSpace),et=l.convert(xe.type),Ue=C(xe.internalFormat,Ie,et,xe.normalized,xe.colorSpace,I.isXRRenderTarget===!0),De=Ft(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Ue,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,Q.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(Q.__webglDepthRenderbuffer=n.createRenderbuffer(),ze(Q.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ae){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),We(n.TEXTURE_CUBE_MAP,E);for(let ge=0;ge<6;ge++)if(E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)Ce(Q.__webglFramebuffer[ge][xe],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,xe);else Ce(Q.__webglFramebuffer[ge],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);y(E)&&P(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ge=0,xe=pe.length;ge<xe;ge++){const Ie=pe[ge],et=r.get(Ie);let Ue=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ue=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ue,et.__webglTexture),We(Ue,Ie),Ce(Q.__webglFramebuffer,I,Ie,n.COLOR_ATTACHMENT0+ge,Ue,0),y(Ie)&&P(Ue)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ge=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,ae.__webglTexture),We(ge,E),E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)Ce(Q.__webglFramebuffer[xe],I,E,n.COLOR_ATTACHMENT0,ge,xe);else Ce(Q.__webglFramebuffer,I,E,n.COLOR_ATTACHMENT0,ge,0);y(E)&&P(ge),t.unbindTexture()}I.depthBuffer&&mt(I)}function _t(I){const E=I.textures;for(let Q=0,ae=E.length;Q<ae;Q++){const pe=E[Q];if(y(pe)){const Ae=O(I),Pe=r.get(pe).__webglTexture;t.bindTexture(Ae,Pe),P(Ae),t.unbindTexture()}}}const Ct=[],Ut=[];function tn(I){if(I.samples>0){if(Gt(I)===!1){const E=I.textures,Q=I.width,ae=I.height;let pe=n.COLOR_BUFFER_BIT;const Ae=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=r.get(I),ge=E.length>1;if(ge)for(let Ie=0;Ie<E.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const xe=I.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ie=0;Ie<E.length;Ie++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(pe|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(pe|=n.STENCIL_BUFFER_BIT)),ge){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ie]);const et=r.get(E[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,et,0)}n.blitFramebuffer(0,0,Q,ae,0,0,Q,ae,pe,n.NEAREST),d===!0&&(Ct.length=0,Ut.length=0,Ct.push(n.COLOR_ATTACHMENT0+Ie),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(Ct.push(Ae),Ut.push(Ae),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ut)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ct))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let Ie=0;Ie<E.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ie]);const et=r.get(E[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,et,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&d){const E=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Ft(I){return Math.min(o.maxSamples,I.samples)}function Gt(I){const E=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Y(I){const E=u.render.frame;m.get(I)!==E&&(m.set(I,E),I.update())}function nn(I,E){const Q=I.colorSpace,ae=I.format,pe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Q!==oc&&Q!==cs&&(Nt.getTransfer(Q)===jt?(ae!==ji||pe!==Pi)&&pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",Q)),E}function At(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=me,this.resetTextureUnits=Z,this.getTextureUnits=H,this.setTextureUnits=te,this.setTexture2D=K,this.setTexture2DArray=W,this.setTexture3D=$,this.setTextureCube=N,this.rebindTextures=vt,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function yD(n,e){function t(r,o=cs){let l;const u=Nt.getTransfer(o);if(r===Pi)return n.UNSIGNED_BYTE;if(r===Op)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Bp)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Fx)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===Ox)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===Ix)return n.BYTE;if(r===Ux)return n.SHORT;if(r===Za)return n.UNSIGNED_SHORT;if(r===Fp)return n.INT;if(r===ur)return n.UNSIGNED_INT;if(r===rr)return n.FLOAT;if(r===cr)return n.HALF_FLOAT;if(r===Bx)return n.ALPHA;if(r===kx)return n.RGB;if(r===ji)return n.RGBA;if(r===Or)return n.DEPTH_COMPONENT;if(r===ks)return n.DEPTH_STENCIL;if(r===zx)return n.RED;if(r===kp)return n.RED_INTEGER;if(r===Gs)return n.RG;if(r===zp)return n.RG_INTEGER;if(r===Vp)return n.RGBA_INTEGER;if(r===Wu||r===Xu||r===Yu||r===ju)if(u===jt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Wu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Xu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Yu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ju)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Wu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Xu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Yu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ju)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xh||r===yh||r===Sh||r===Mh)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===xh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===yh)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Sh)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Mh)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Eh||r===Th||r===wh||r===Ah||r===Rh||r===rc||r===Ch)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Eh||r===Th)return u===jt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===wh)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Ah)return l.COMPRESSED_R11_EAC;if(r===Rh)return l.COMPRESSED_SIGNED_R11_EAC;if(r===rc)return l.COMPRESSED_RG11_EAC;if(r===Ch)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===bh||r===Ph||r===Dh||r===Lh||r===Nh||r===Ih||r===Uh||r===Fh||r===Oh||r===Bh||r===kh||r===zh||r===Vh||r===Hh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===bh)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ph)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Dh)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Lh)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Nh)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ih)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Uh)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Fh)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Oh)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Bh)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===kh)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===zh)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vh)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Hh)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Gh||r===Wh||r===Xh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Gh)return u===jt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Yh||r===jh||r===sc||r===qh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Yh)return l.COMPRESSED_RED_RGTC1_EXT;if(r===jh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===sc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===qh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qa?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const SD=`
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

}`;class ED{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Zx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new gi({vertexShader:SD,fragmentShader:MD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fr(new ll(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TD extends Ys{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",d=1,h=null,m=null,v=null,g=null,S=null,T=null;const R=typeof XRWebGLBinding<"u",M=new ED,y={},P=t.getContextAttributes();let O=null,C=null;const b=[],D=[],U=new Xt;let x=null,L=null;const B=new bi;B.viewport=new pn;const V=new bi;V.viewport=new pn;const ee=[B,V],Z=new LA;let H=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let ce=b[oe];return ce===void 0&&(ce=new Rd,b[oe]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(oe){let ce=b[oe];return ce===void 0&&(ce=new Rd,b[oe]=ce),ce.getGripSpace()},this.getHand=function(oe){let ce=b[oe];return ce===void 0&&(ce=new Rd,b[oe]=ce),ce.getHandSpace()};function me(oe){const ce=D.indexOf(oe.inputSource);if(ce===-1)return;const we=b[ce];we!==void 0&&(we.update(oe.inputSource,oe.frame,h||u),we.dispatchEvent({type:oe.type,data:oe.inputSource}))}function j(){o.removeEventListener("select",me),o.removeEventListener("selectstart",me),o.removeEventListener("selectend",me),o.removeEventListener("squeeze",me),o.removeEventListener("squeezestart",me),o.removeEventListener("squeezeend",me),o.removeEventListener("end",j),o.removeEventListener("inputsourceschange",K);for(let oe=0;oe<b.length;oe++){const ce=D[oe];ce!==null&&(D[oe]=null,b[oe].disconnect(ce))}H=null,te=null,M.reset();for(const oe in y)delete y[oe];if(e.setRenderTarget(O),S=null,g=null,v=null,o=null,C=null,qe.stop(),r.isPresenting=!1,e.setPixelRatio(x),e.setSize(U.width,U.height,!1),L!==null){const oe=L.camera;oe.fov=L.fov,oe.zoom=L.zoom,oe.updateProjectionMatrix(),L=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){l=oe,r.isPresenting===!0&&pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){f=oe,r.isPresenting===!0&&pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(oe){h=oe},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v===null&&R&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(oe){if(o=oe,o!==null){if(O=e.getRenderTarget(),o.addEventListener("select",me),o.addEventListener("selectstart",me),o.addEventListener("selectend",me),o.addEventListener("squeeze",me),o.addEventListener("squeezestart",me),o.addEventListener("squeezeend",me),o.addEventListener("end",j),o.addEventListener("inputsourceschange",K),P.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(U),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Ge=null,Ce=null;P.depth&&(Ce=P.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=P.stencil?ks:Or,Ge=P.stencil?Qa:ur);const ze={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:l};v=this.getBinding(),g=v.createProjectionLayer(ze),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),C=new qi(g.textureWidth,g.textureHeight,{format:ji,type:Pi,depthTexture:new Ja(g.textureWidth,g.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const we={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,we),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),C=new qi(S.framebufferWidth,S.framebufferHeight,{format:ji,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1,storeMultisampledDepthBuffer:S.ignoreDepthValues===!1,storeMultisampledStencilBuffer:S.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await o.requestReferenceSpace(f),qe.setContext(o),qe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function K(oe){for(let ce=0;ce<oe.removed.length;ce++){const we=oe.removed[ce],Ge=D.indexOf(we);Ge>=0&&(D[Ge]=null,b[Ge].disconnect(we))}for(let ce=0;ce<oe.added.length;ce++){const we=oe.added[ce];let Ge=D.indexOf(we);if(Ge===-1){for(let ze=0;ze<b.length;ze++)if(ze>=D.length){D.push(we),Ge=ze;break}else if(D[ze]===null){D[ze]=we,Ge=ze;break}if(Ge===-1)break}const Ce=b[Ge];Ce&&Ce.connect(we)}}const W=new ue,$=new ue;function N(oe,ce,we){W.setFromMatrixPosition(ce.matrixWorld),$.setFromMatrixPosition(we.matrixWorld);const Ge=W.distanceTo($),Ce=ce.projectionMatrix.elements,ze=we.projectionMatrix.elements,qt=Ce[14]/(Ce[10]-1),mt=Ce[14]/(Ce[10]+1),vt=(Ce[9]+1)/Ce[5],kt=(Ce[9]-1)/Ce[5],_t=(Ce[8]-1)/Ce[0],Ct=(ze[8]+1)/ze[0],Ut=qt*_t,tn=qt*Ct,Ft=Ge/(-_t+Ct),Gt=Ft*-_t;if(ce.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Gt),oe.translateZ(Ft),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),Ce[10]===-1)oe.projectionMatrix.copy(ce.projectionMatrix),oe.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const Y=qt+Ft,nn=mt+Ft,At=Ut-Gt,I=tn+(Ge-Gt),E=vt*mt/nn*Y,Q=kt*mt/nn*Y;oe.projectionMatrix.makePerspective(At,I,E,Q,Y,nn),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function se(oe,ce){ce===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(ce.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(o===null)return;let ce=oe.near,we=oe.far;M.texture!==null&&(M.depthNear>0&&(ce=M.depthNear),M.depthFar>0&&(we=M.depthFar)),Z.near=V.near=B.near=ce,Z.far=V.far=B.far=we,(H!==Z.near||te!==Z.far)&&(o.updateRenderState({depthNear:Z.near,depthFar:Z.far}),H=Z.near,te=Z.far),Z.layers.mask=oe.layers.mask|6,B.layers.mask=Z.layers.mask&-5,V.layers.mask=Z.layers.mask&-3;const Ge=oe.parent,Ce=Z.cameras;se(Z,Ge);for(let ze=0;ze<Ce.length;ze++)se(Ce[ze],Ge);Ce.length===2?N(Z,B,V):Z.projectionMatrix.copy(B.projectionMatrix),L===null&&oe.isPerspectiveCamera&&(L={camera:oe,fov:oe.fov,zoom:oe.zoom}),ye(oe,Z,Ge)};function ye(oe,ce,we){we===null?oe.matrix.copy(ce.matrixWorld):(oe.matrix.copy(we.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(ce.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(ce.projectionMatrix),oe.projectionMatrixInverse.copy(ce.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Kh*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(g===null&&S===null))return d},this.setFoveation=function(oe){d=oe,g!==null&&(g.fixedFoveation=oe),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=oe)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Z)},this.getCameraTexture=function(oe){return y[oe]};let je=null;function We(oe,ce){if(m=ce.getViewerPose(h||u),T=ce,m!==null){const we=m.views;S!==null&&(e.setRenderTargetFramebuffer(C,S.framebuffer),e.setRenderTarget(C));let Ge=!1;we.length!==Z.cameras.length&&(Z.cameras.length=0,Ge=!0);for(let mt=0;mt<we.length;mt++){const vt=we[mt];let kt=null;if(S!==null)kt=S.getViewport(vt);else{const Ct=v.getViewSubImage(g,vt);kt=Ct.viewport,mt===0&&(e.setRenderTargetTextures(C,Ct.colorTexture,Ct.depthStencilTexture),e.setRenderTarget(C))}let _t=ee[mt];_t===void 0&&(_t=new bi,_t.layers.enable(mt),_t.viewport=new pn,ee[mt]=_t),_t.matrix.fromArray(vt.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(vt.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(kt.x,kt.y,kt.width,kt.height),mt===0&&(Z.matrix.copy(_t.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Ge===!0&&Z.cameras.push(_t)}const Ce=o.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){v=r.getBinding();const mt=v.getDepthInformation(we[0]);mt&&mt.isValid&&mt.texture&&M.init(mt,o.renderState)}if(Ce&&Ce.includes("camera-access")&&R){e.state.unbindTexture(),v=r.getBinding();for(let mt=0;mt<we.length;mt++){const vt=we[mt].camera;if(vt){let kt=y[vt];kt||(kt=new Zx,y[vt]=kt);const _t=v.getCameraImage(vt);kt.sourceTexture=_t}}}}for(let we=0;we<b.length;we++){const Ge=D[we],Ce=b[we];Ge!==null&&Ce!==void 0&&Ce.update(Ge,ce,h||u)}je&&je(oe,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),T=null}const qe=new ty;qe.setAnimationLoop(We),this.setAnimationLoop=function(oe){je=oe},this.dispose=function(){}}}const wD=new _n,ly=new xt;ly.set(-1,0,0,0,1,0,0,0,1);function AD(n,e){function t(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function r(M,y){y.color.getRGB(M.fogColor.value,Qx(n)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function o(M,y,P,O,C){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?l(M,y):y.isMeshLambertMaterial?(l(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(l(M,y),v(M,y)):y.isMeshPhongMaterial?(l(M,y),m(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(l(M,y),g(M,y),y.isMeshPhysicalMaterial&&S(M,y,C)):y.isMeshMatcapMaterial?(l(M,y),T(M,y)):y.isMeshDepthMaterial?l(M,y):y.isMeshDistanceMaterial?(l(M,y),R(M,y)):y.isMeshNormalMaterial?l(M,y):y.isLineBasicMaterial?(u(M,y),y.isLineDashedMaterial&&f(M,y)):y.isPointsMaterial?d(M,y,P,O):y.isSpriteMaterial?h(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,t(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,t(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,t(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===oi&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,t(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===oi&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,t(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,t(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const P=e.get(y),O=P.envMap,C=P.envMapRotation;O&&(M.envMap.value=O,M.envMapRotation.value.setFromMatrix4(wD.makeRotationFromEuler(C)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(ly),M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,M.aoMapTransform))}function u(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,t(y.map,M.mapTransform))}function f(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function d(M,y,P,O){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*P,M.scale.value=O*.5,y.map&&(M.map.value=y.map,t(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,t(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function h(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,t(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,t(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function m(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function v(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function g(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function S(M,y,P){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===oi&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.retroreflectivity>0&&(M.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,y){y.matcap&&(M.matcap.value=y.matcap)}function R(M,y){const P=e.get(y).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function RD(n,e,t,r){let o={},l={},u=[];const f=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(C,b){const D=b.program;r.uniformBlockBinding(C,D)}function h(C,b){let D=o[C.id];D===void 0&&(M(C),D=m(C),o[C.id]=D,C.addEventListener("dispose",P));const U=b.program;r.updateUBOMapping(C,U);const x=e.render.frame;l[C.id]!==x&&(g(C),l[C.id]=x)}function m(C){const b=v();C.__bindingPointIndex=b;const D=n.createBuffer(),U=C.__size,x=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,D),n.bufferData(n.UNIFORM_BUFFER,U,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,D),D}function v(){for(let C=0;C<f;C++)if(u.indexOf(C)===-1)return u.push(C),C;return Ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const b=o[C.id],D=C.uniforms,U=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let x=0,L=D.length;x<L;x++){const B=D[x];if(Array.isArray(B))for(let V=0,ee=B.length;V<ee;V++)S(B[V],x,V,U);else S(B,x,0,U)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function S(C,b,D,U){if(R(C,b,D,U)===!0){const x=C.__offset,L=C.value;if(Array.isArray(L)){let B=0;for(let V=0;V<L.length;V++){const ee=L[V],Z=y(ee);T(ee,C.__data,B),typeof ee!="number"&&typeof ee!="boolean"&&!ee.isMatrix3&&!ArrayBuffer.isView(ee)&&(B+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(L,C.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,C.__data)}}function T(C,b,D){typeof C=="number"||typeof C=="boolean"?b[0]=C:C.isMatrix3?(b[0]=C.elements[0],b[1]=C.elements[1],b[2]=C.elements[2],b[3]=0,b[4]=C.elements[3],b[5]=C.elements[4],b[6]=C.elements[5],b[7]=0,b[8]=C.elements[6],b[9]=C.elements[7],b[10]=C.elements[8],b[11]=0):ArrayBuffer.isView(C)?b.set(new C.constructor(C.buffer,C.byteOffset,b.length)):C.toArray(b,D)}function R(C,b,D,U){const x=C.value,L=b+"_"+D;if(U[L]===void 0)return typeof x=="number"||typeof x=="boolean"?U[L]=x:ArrayBuffer.isView(x)?U[L]=x.slice():U[L]=x.clone(),!0;{const B=U[L];if(typeof x=="number"||typeof x=="boolean"){if(B!==x)return U[L]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(B.equals(x)===!1)return B.copy(x),!0}}return!1}function M(C){const b=C.uniforms;let D=0;const U=16;for(let L=0,B=b.length;L<B;L++){const V=Array.isArray(b[L])?b[L]:[b[L]];for(let ee=0,Z=V.length;ee<Z;ee++){const H=V[ee],te=Array.isArray(H.value)?H.value:[H.value];for(let me=0,j=te.length;me<j;me++){const K=te[me],W=y(K),$=D%U,N=$%W.boundary,se=$+N;D+=N,se!==0&&U-se<W.storage&&(D+=U-se),H.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=D,D+=W.storage}}}const x=D%U;return x>0&&(D+=U-x),C.__size=D,C.__cache={},this}function y(C){const b={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(b.boundary=4,b.storage=4):C.isVector2?(b.boundary=8,b.storage=8):C.isVector3||C.isColor?(b.boundary=16,b.storage=12):C.isVector4?(b.boundary=16,b.storage=16):C.isMatrix3?(b.boundary=48,b.storage=48):C.isMatrix4?(b.boundary=64,b.storage=64):C.isTexture?pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(b.boundary=16,b.storage=C.byteLength):pt("WebGLRenderer: Unsupported uniform value type.",C),b}function P(C){const b=C.target;b.removeEventListener("dispose",P);const D=u.indexOf(b.__bindingPointIndex);u.splice(D,1),n.deleteBuffer(o[b.id]),delete o[b.id],delete l[b.id]}function O(){for(const C in o)n.deleteBuffer(o[C]);u=[],o={},l={}}return{bind:d,update:h,dispose:O}}const CD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let tr=null;function bD(){return tr===null&&(tr=new yA(CD,16,16,Gs,cr),tr.name="DFG_LUT",tr.minFilter=Yn,tr.magFilter=Yn,tr.wrapS=Pr,tr.wrapT=Pr,tr.generateMipmaps=!1,tr.needsUpdate=!0),tr}class PD{constructor(e={}){const{canvas:t=Kw(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:S=Pi}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=u;const R=S,M=new Set([Vp,zp,kp]),y=new Set([Pi,ur,Za,Qa,Op,Bp]),P=new Uint32Array(4),O=new Int32Array(4),C=new ue;let b=null,D=null;const U=[],x=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=lr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let V=!1,ee=null,Z=null,H=null,te=null;this._outputColorSpace=Ci;let me=0,j=0,K=null,W=-1,$=null;const N=new pn,se=new pn;let ye=null;const je=new Rt(0);let We=0,qe=t.width,oe=t.height,ce=1,we=null,Ge=null;const Ce=new pn(0,0,qe,oe),ze=new pn(0,0,qe,oe);let qt=!1;const mt=new Kx;let vt=!1,kt=!1;const _t=new _n,Ct=new ue,Ut=new pn,tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function Gt(){return K===null?ce:1}let Y=r;function nn(A,X){return t.getContext(A,X)}let At,I,E,Q,ae,pe,Ae,Pe,ge,xe,Ie,et,Ue,De,tt,ot,ct,G,Le,_e,Ne,Be,Se;try{const A={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Up}`),t.addEventListener("webglcontextlost",Ot,!1),t.addEventListener("webglcontextrestored",bt,!1),t.addEventListener("webglcontextcreationerror",cn,!1),Y===null){const X="webgl2";if(Y=nn(X,A),Y===null)throw nn(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(A){throw t.removeEventListener("webglcontextlost",Ot,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",cn,!1),Ht("WebGLRenderer: "+A.message),A}function nt(){At=new bb(Y),At.init(),Ne=new yD(Y,At),I=new xb(Y,At,e,Ne),E=new _D(Y,At),I.reversedDepthBuffer&&g&&E.buffers.depth.setReversed(!0),Z=Y.createFramebuffer(),H=Y.createFramebuffer(),te=Y.createFramebuffer(),Q=new Lb(Y),ae=new rD,pe=new xD(Y,At,E,ae,I,Ne,Q),Ae=new Cb(B),Pe=new IA(Y),Be=new vb(Y,Pe),ge=new Pb(Y,Pe,Q,Be),xe=new Ib(Y,ge,Pe,Be,Q),G=new Nb(Y,I,pe),tt=new yb(ae),Ie=new iD(B,Ae,At,I,Be,tt),et=new AD(B,ae),Ue=new oD,De=new dD(At),ct=new gb(B,Ae,E,xe,T,d),ot=new vD(B,xe,I),Se=new RD(Y,Q,I,E),Le=new _b(Y,At,Q),_e=new Db(Y,At,Q),Q.programs=Ie.programs,B.capabilities=I,B.extensions=At,B.properties=ae,B.renderLists=Ue,B.shadowMap=ot,B.state=E,B.info=Q}R!==Pi&&(L=new Fb(R,t.width,t.height,f,o,l));const Ze=new TD(B,Y);this.xr=Ze,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const A=At.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=At.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(A){A!==void 0&&(ce=A,this.setSize(qe,oe,!1))},this.getSize=function(A){return A.set(qe,oe)},this.setSize=function(A,X,fe=!0){if(Ze.isPresenting){pt("WebGLRenderer: Can't change size while VR device is presenting.");return}qe=A,oe=X,t.width=Math.floor(A*ce),t.height=Math.floor(X*ce),fe===!0&&(t.style.width=A+"px",t.style.height=X+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(qe*ce,oe*ce).floor()},this.setDrawingBufferSize=function(A,X,fe){qe=A,oe=X,ce=fe,t.width=Math.floor(A*fe),t.height=Math.floor(X*fe),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(R===Pi){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){pt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(Ce)},this.setViewport=function(A,X,fe,ne){A.isVector4?Ce.set(A.x,A.y,A.z,A.w):Ce.set(A,X,fe,ne),E.viewport(N.copy(Ce).multiplyScalar(ce).round())},this.getScissor=function(A){return A.copy(ze)},this.setScissor=function(A,X,fe,ne){A.isVector4?ze.set(A.x,A.y,A.z,A.w):ze.set(A,X,fe,ne),E.scissor(se.copy(ze).multiplyScalar(ce).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(A){E.setScissorTest(qt=A)},this.setOpaqueSort=function(A){we=A},this.setTransparentSort=function(A){Ge=A},this.getClearColor=function(A){return A.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor(...arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,fe=!0){let ne=0;if(A){let J=!1;if(K!==null){const Ve=K.texture.format;J=M.has(Ve)}if(J){const Ve=K.texture.type,Fe=y.has(Ve),ke=ct.getClearColor(),Qe=ct.getClearAlpha(),rt=ke.r,gt=ke.g,St=ke.b;Fe?(P[0]=rt,P[1]=gt,P[2]=St,P[3]=Qe,Y.clearBufferuiv(Y.COLOR,0,P)):(O[0]=rt,O[1]=gt,O[2]=St,O[3]=Qe,Y.clearBufferiv(Y.COLOR,0,O))}else ne|=Y.COLOR_BUFFER_BIT}X&&(ne|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(ne|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&Y.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),ee=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Ot,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",cn,!1),ct.dispose(),Ue.dispose(),De.dispose(),ae.dispose(),Ae.dispose(),xe.dispose(),Be.dispose(),Se.dispose(),Ie.dispose(),Ze.dispose(),Ze.removeEventListener("sessionstart",ms),Ze.removeEventListener("sessionend",gs),Rn.stop()};function Ot(A){A.preventDefault(),jv("WebGLRenderer: Context Lost."),V=!0}function bt(){jv("WebGLRenderer: Context Restored."),V=!1;const A=Q.autoReset,X=ot.enabled,fe=ot.autoUpdate,ne=ot.needsUpdate,J=ot.type;nt(),Q.autoReset=A,ot.enabled=X,ot.autoUpdate=fe,ot.needsUpdate=ne,ot.type=J}function cn(A){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Qn(A){const X=A.target;X.removeEventListener("dispose",Qn),dr(X)}function dr(A){hr(A),ae.remove(A)}function hr(A){const X=ae.get(A).programs;X!==void 0&&(X.forEach(function(fe){Ie.releaseProgram(fe)}),A.isShaderMaterial&&Ie.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,fe,ne,J,Ve){X===null&&(X=tn);const Fe=J.isMesh&&J.matrixWorld.determinantAffine()<0,ke=yt(A,X,fe,ne,J);E.setMaterial(ne,Fe);let Qe=fe.index,rt=1;if(ne.wireframe===!0){if(Qe=ge.getWireframeAttribute(fe),Qe===void 0)return;rt=2}const gt=fe.drawRange,St=fe.attributes.position;let Ke=gt.start*rt,Dt=(gt.start+gt.count)*rt;Ve!==null&&(Ke=Math.max(Ke,Ve.start*rt),Dt=Math.min(Dt,(Ve.start+Ve.count)*rt)),Qe!==null?(Ke=Math.max(Ke,0),Dt=Math.min(Dt,Qe.count)):St!=null&&(Ke=Math.max(Ke,0),Dt=Math.min(Dt,St.count));const fn=Dt-Ke;if(fn<0||fn===1/0)return;Be.setup(J,ne,ke,fe,Qe);let Kt,Wt=Le;if(Qe!==null&&(Kt=Pe.get(Qe),Wt=_e,Wt.setIndex(Kt)),J.isMesh)ne.wireframe===!0?(E.setLineWidth(ne.wireframeLinewidth*Gt()),Wt.setMode(Y.LINES)):Wt.setMode(Y.TRIANGLES);else if(J.isLine){let Sn=ne.linewidth;Sn===void 0&&(Sn=1),E.setLineWidth(Sn*Gt()),J.isLineSegments?Wt.setMode(Y.LINES):J.isLineLoop?Wt.setMode(Y.LINE_LOOP):Wt.setMode(Y.LINE_STRIP)}else J.isPoints?Wt.setMode(Y.POINTS):J.isSprite&&Wt.setMode(Y.TRIANGLES);if(J.isBatchedMesh)if(At.get("WEBGL_multi_draw"))Wt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Sn=J._multiDrawStarts,Xe=J._multiDrawCounts,mn=J._multiDrawCount,Lt=Qe?Pe.get(Qe).bytesPerElement:1,On=ae.get(ne).currentProgram.getUniforms();for(let Mt=0;Mt<mn;Mt++)On.setValue(Y,"_gl_DrawID",Mt),Wt.render(Sn[Mt]/Lt,Xe[Mt])}else if(J.isInstancedMesh)Wt.renderInstances(Ke,fn,J.count);else if(fe.isInstancedBufferGeometry){const Sn=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Xe=Math.min(fe.instanceCount,Sn);Wt.renderInstances(Ke,fn,Xe)}else Wt.render(Ke,fn)};function An(A,X,fe,ne){ee!==null&&A.isNodeMaterial&&ee.setObject(ne,A),vt===!0&&tt.setState(A,fe,!1),A.transparent===!0&&A.side===ir&&A.forceSinglePass===!1?(A.side=oi,A.needsUpdate=!0,be(A,X,ne),A.side=Vs,A.needsUpdate=!0,be(A,X,ne),A.side=ir):be(A,X,ne)}this.compile=function(A,X,fe=null){fe===null&&(fe=A),ee!==null&&ee.renderStart(A,X,fe),D=De.get(fe),D.init(X),x.push(D),fe.traverseVisible(function(J){J.isLight&&J.layers.test(X.layers)&&(D.pushLight(J),J.castShadow&&D.pushShadow(J))}),A!==fe&&A.traverseVisible(function(J){J.isLight&&J.layers.test(X.layers)&&(D.pushLight(J),J.castShadow&&D.pushShadow(J))}),D.setupLights(),ee!==null&&ee.updateLights(D.state.lightsArray),kt=this.localClippingEnabled,vt=tt.init(this.clippingPlanes,kt),vt===!0&&tt.setGlobalState(this.clippingPlanes,X),ee!==null&&ot.render(D.state.shadowsArray,fe,X);const ne=new Set;return A.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ve=J.material;if(Ve)if(Array.isArray(Ve))for(let Fe=0;Fe<Ve.length;Fe++){const ke=Ve[Fe];An(ke,fe,X,J),ne.add(ke)}else An(Ve,fe,X,J),ne.add(Ve)}),D=x.pop(),ee!==null&&ee.renderEnd(),ne},this.compileAsync=function(A,X,fe=null){const ne=this.compile(A,X,fe);return new Promise(J=>{function Ve(){if(ne.forEach(function(Fe){const Qe=ae.get(Fe).currentProgram;(Qe===void 0||Qe.isReady())&&ne.delete(Fe)}),ne.size===0){J(A);return}setTimeout(Ve,10)}At.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let pr=null;function js(A){pr&&pr(A)}function ms(){Rn.stop()}function gs(){Rn.start()}const Rn=new ty;Rn.setAnimationLoop(js),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(A){pr=A,Ze.setAnimationLoop(A),A===null?Rn.stop():Rn.start()},Ze.addEventListener("sessionstart",ms),Ze.addEventListener("sessionend",gs),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;ee!==null&&ee.renderStart(A,X);const fe=Ze.enabled===!0&&Ze.isPresenting===!0,ne=L!==null&&(K===null||fe)&&L.begin(B,K);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera(X),X=Ze.getCamera()),A.isScene===!0&&A.onBeforeRender(B,A,X,K),D=De.get(A,x.length),D.init(X),D.state.textureUnits=pe.getTextureUnits(),x.push(D),_t.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),mt.setFromProjectionMatrix(_t,sr,X.reversedDepth),kt=this.localClippingEnabled,vt=tt.init(this.clippingPlanes,kt),b=Ue.get(A,U.length),b.init(),U.push(b),Ze.enabled===!0&&Ze.isPresenting===!0){const Fe=B.xr.getDepthSensingMesh();Fe!==null&&mr(Fe,X,-1/0,B.sortObjects)}mr(A,X,0,B.sortObjects),b.finish(),ee!==null&&ee.updateLights(D.state.lightsArray),B.sortObjects===!0&&b.sort(we,Ge),Ft=Ze.enabled===!1||Ze.isPresenting===!1||Ze.hasDepthSensing()===!1,Ft&&ct.addToRenderList(b,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),vt===!0&&tt.beginShadows();const J=D.state.shadowsArray;if(ot.render(J,A,X),vt===!0&&tt.endShadows(),(ne&&L.hasRenderPass())===!1){const Fe=b.opaque,ke=b.transmissive;if(D.setupLights(),X.isArrayCamera){const Qe=X.cameras;if(ke.length>0)for(let rt=0,gt=Qe.length;rt<gt;rt++){const St=Qe[rt];k(Fe,ke,A,St)}Ft&&ct.render(A);for(let rt=0,gt=Qe.length;rt<gt;rt++){const St=Qe[rt];Ki(b,A,St,St.viewport)}}else ke.length>0&&k(Fe,ke,A,X),Ft&&ct.render(A),Ki(b,A,X)}K!==null&&j===0&&(pe.updateMultisampleRenderTarget(K),pe.updateRenderTargetMipmap(K)),ne&&L.end(B),A.isScene===!0&&A.onAfterRender(B,A,X),Be.resetDefaultState(),W=-1,$=null,x.pop(),x.length>0?(D=x[x.length-1],pe.setTextureUnits(D.state.textureUnits),vt===!0&&tt.setGlobalState(B.clippingPlanes,D.state.camera)):D=null,U.pop(),U.length>0?b=U[U.length-1]:b=null,ee!==null&&ee.renderEnd()};function mr(A,X,fe,ne){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)fe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLightProbeGrid)D.pushLightProbeGrid(A);else if(A.isLight)D.pushLight(A),A.castShadow&&D.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(mt)){ne&&Ut.setFromMatrixPosition(A.matrixWorld).applyMatrix4(_t);const Fe=xe.update(A),ke=A.material;ke.visible&&b.push(A,Fe,ke,fe,Ut.z,null,X)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(mt))){const Fe=xe.update(A),ke=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ut.copy(A.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Ut.copy(Fe.boundingSphere.center)),Ut.applyMatrix4(A.matrixWorld).applyMatrix4(_t)),Array.isArray(ke)){const Qe=Fe.groups;for(let rt=0,gt=Qe.length;rt<gt;rt++){const St=Qe[rt],Ke=ke[St.materialIndex];Ke&&Ke.visible&&b.push(A,Fe,Ke,fe,Ut.z,St,X)}}else ke.visible&&b.push(A,Fe,ke,fe,Ut.z,null,X)}}const Ve=A.children;for(let Fe=0,ke=Ve.length;Fe<ke;Fe++)mr(Ve[Fe],X,fe,ne)}function Ki(A,X,fe,ne){const{opaque:J,transmissive:Ve,transparent:Fe}=A;D.setupLightsView(fe),vt===!0&&tt.setGlobalState(B.clippingPlanes,fe),ne&&E.viewport(N.copy(ne)),J.length>0&&de(J,X,fe),Ve.length>0&&de(Ve,X,fe),Fe.length>0&&de(Fe,X,fe),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function k(A,X,fe,ne){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[ne.id]===void 0){const Ke=At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[ne.id]=new qi(1,1,{generateMipmaps:!0,type:Ke?cr:Pi,minFilter:Bs,samples:Math.max(4,I.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Nt.workingColorSpace})}const Ve=D.state.transmissionRenderTarget[ne.id],Fe=ne.viewport||N;Ve.setSize(Fe.z*B.transmissionResolutionScale,Fe.w*B.transmissionResolutionScale);const ke=B.getRenderTarget(),Qe=B.getActiveCubeFace(),rt=B.getActiveMipmapLevel();B.setRenderTarget(Ve),B.getClearColor(je),We=B.getClearAlpha(),We<1&&B.setClearColor(16777215,.5),B.clear(),Ft&&ct.render(fe);const gt=B.toneMapping;B.toneMapping=lr;const St=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),D.setupLightsView(ne),vt===!0&&tt.setGlobalState(B.clippingPlanes,ne),de(A,fe,ne),pe.updateMultisampleRenderTarget(Ve),pe.updateRenderTargetMipmap(Ve),At.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Dt=0,fn=X.length;Dt<fn;Dt++){const Kt=X[Dt],{object:Wt,geometry:Sn,material:Xe,group:mn}=Kt;if(Xe.side===ir&&Wt.layers.test(ne.layers)){const Lt=Xe.side;Xe.side=oi,Xe.needsUpdate=!0,ve(Wt,fe,ne,Sn,Xe,mn),Xe.side=Lt,Xe.needsUpdate=!0,Ke=!0}}Ke===!0&&(pe.updateMultisampleRenderTarget(Ve),pe.updateRenderTargetMipmap(Ve))}B.setRenderTarget(ke,Qe,rt),B.setClearColor(je,We),St!==void 0&&(ne.viewport=St),B.toneMapping=gt}function de(A,X,fe){const ne=X.isScene===!0?X.overrideMaterial:null;for(let J=0,Ve=A.length;J<Ve;J++){const Fe=A[J],{object:ke,geometry:Qe,group:rt}=Fe;let gt=Fe.material;gt.allowOverride===!0&&ne!==null&&(gt=ne),ke.layers.test(fe.layers)&&ve(ke,X,fe,Qe,gt,rt)}}function ve(A,X,fe,ne,J,Ve){ee!==null&&J.isNodeMaterial&&ee.setObject(A,J),A.onBeforeRender(B,X,fe,ne,J,Ve),A.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(B,X,fe,ne,A,Ve),J.transparent===!0&&J.side===ir&&J.forceSinglePass===!1?(J.side=oi,J.needsUpdate=!0,B.renderBufferDirect(fe,X,ne,J,A,Ve),J.side=Vs,J.needsUpdate=!0,B.renderBufferDirect(fe,X,ne,J,A,Ve),J.side=ir):B.renderBufferDirect(fe,X,ne,J,A,Ve),A.onAfterRender(B,X,fe,ne,J,Ve)}function be(A,X,fe){X.isScene!==!0&&(X=tn);const ne=ae.get(A),J=D.state.lights,Ve=D.state.shadowsArray,Fe=J.state.version,ke=Ie.getParameters(A,J.state,Ve,X,fe,D.state.lightProbeGridArray),Qe=Ie.getProgramCacheKey(ke);let rt=ne.programs;ne.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,ne.fog=X.fog;const gt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ne.envMap=Ae.get(A.envMap||ne.environment,gt),ne.envMapRotation=ne.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,rt===void 0&&(A.addEventListener("dispose",Qn),rt=new Map,ne.programs=rt);let St=rt.get(Qe);if(St!==void 0){if(ne.currentProgram===St&&ne.lightsStateVersion===Fe)return Pt(A,ke),St}else ke.uniforms=Ie.getUniforms(A),ee!==null&&A.isNodeMaterial&&ee.build(A,fe,ke),A.onBeforeCompile(ke,B),St=Ie.acquireProgram(ke,Qe),rt.set(Qe,St),ne.uniforms=ke.uniforms;const Ke=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ke.clippingPlanes=tt.uniform),Pt(A,ke),ne.needsLights=Fn(A),ne.lightsStateVersion=Fe,ne.needsLights&&(Ke.ambientLightColor.value=J.state.ambient,Ke.lightProbe.value=J.state.probe,Ke.sunLights.value=J.state.sun,Ke.sunLightShadows.value=J.state.sunShadow,Ke.directionalLights.value=J.state.directional,Ke.directionalLightShadows.value=J.state.directionalShadow,Ke.spotLights.value=J.state.spot,Ke.spotLightShadows.value=J.state.spotShadow,Ke.rectAreaLights.value=J.state.rectArea,Ke.ltc_1.value=J.state.rectAreaLTC1,Ke.ltc_2.value=J.state.rectAreaLTC2,Ke.pointLights.value=J.state.point,Ke.pointLightShadows.value=J.state.pointShadow,Ke.hemisphereLights.value=J.state.hemi,Ke.sunShadowMatrix.value=J.state.sunShadowMatrix,Ke.sunShadowCascade.value=J.state.sunShadowCascade,Ke.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ke.spotLightMatrix.value=J.state.spotLightMatrix,Ke.spotLightMap.value=J.state.spotLightMap,Ke.pointShadowMatrix.value=J.state.pointShadowMatrix),ne.lightProbeGrid=D.state.lightProbeGridArray.length>0,ne.currentProgram=St,ne.uniformsList=null,St}function at(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=qu.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Pt(A,X){const fe=ae.get(A);fe.outputColorSpace=X.outputColorSpace,fe.batching=X.batching,fe.batchingColor=X.batchingColor,fe.instancing=X.instancing,fe.instancingColor=X.instancingColor,fe.instancingMorph=X.instancingMorph,fe.skinning=X.skinning,fe.morphTargets=X.morphTargets,fe.morphNormals=X.morphNormals,fe.morphColors=X.morphColors,fe.morphTargetsCount=X.morphTargetsCount,fe.numClippingPlanes=X.numClippingPlanes,fe.numIntersection=X.numClipIntersection,fe.vertexAlphas=X.vertexAlphas,fe.vertexTangents=X.vertexTangents,fe.toneMapping=X.toneMapping}function Tt(A,X){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(X.matrixWorld);for(let fe=0,ne=A.length;fe<ne;fe++){const J=A[fe];if(J.texture!==null&&J.boundingBox.containsPoint(C))return J}return null}function yt(A,X,fe,ne,J){X.isScene!==!0&&(X=tn),pe.resetTextureUnits();const Ve=X.fog,Fe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?X.environment:null,ke=K===null?B.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Nt.workingColorSpace,Qe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,rt=Ae.get(ne.envMap||Fe,Qe),gt=ne.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,St=!!fe.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ke=!!fe.morphAttributes.position,Dt=!!fe.morphAttributes.normal,fn=!!fe.morphAttributes.color;let Kt=lr;ne.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Kt=B.toneMapping);const Wt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,Sn=Wt!==void 0?Wt.length:0,Xe=ae.get(ne),mn=D.state.lights;if(vt===!0&&(kt===!0||A!==$)){const Yt=A===$&&ne.id===W;tt.setState(ne,A,Yt)}let Lt=!1;ne.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==mn.state.version||Xe.outputColorSpace!==ke||J.isBatchedMesh&&Xe.batching===!1||!J.isBatchedMesh&&Xe.batching===!0||J.isBatchedMesh&&Xe.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Xe.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Xe.instancing===!1||!J.isInstancedMesh&&Xe.instancing===!0||J.isSkinnedMesh&&Xe.skinning===!1||!J.isSkinnedMesh&&Xe.skinning===!0||J.isInstancedMesh&&Xe.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Xe.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Xe.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Xe.instancingMorph===!1&&J.morphTexture!==null||Xe.envMap!==rt||ne.fog===!0&&Xe.fog!==Ve||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==tt.numPlanes||Xe.numIntersection!==tt.numIntersection)||Xe.vertexAlphas!==gt||Xe.vertexTangents!==St||Xe.morphTargets!==Ke||Xe.morphNormals!==Dt||Xe.morphColors!==fn||Xe.toneMapping!==Kt||Xe.morphTargetsCount!==Sn||!!Xe.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(Lt=!0):(Lt=!0,Xe.__version=ne.version);let On=Xe.currentProgram;Lt===!0&&(On=be(ne,X,J),ee&&ne.isNodeMaterial&&ee.onUpdateProgram(ne,On,Xe));let Mt=!1,Li=!1,gr=!1;const zt=On.getUniforms(),rn=Xe.uniforms;if(E.useProgram(On.program)&&(Mt=!0,Li=!0,gr=!0),ne.id!==W&&(W=ne.id,Li=!0),Xe.needsLights){const Yt=Tt(D.state.lightProbeGridArray,J);Xe.lightProbeGrid!==Yt&&(Xe.lightProbeGrid=Yt,Li=!0)}if(Mt||$!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),zt.setValue(Y,"projectionMatrix",A.projectionMatrix),zt.setValue(Y,"viewMatrix",A.matrixWorldInverse);const _i=zt.map.cameraPosition;_i!==void 0&&_i.setValue(Y,Ct.setFromMatrixPosition(A.matrixWorld)),I.logarithmicDepthBuffer&&zt.setValue(Y,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&zt.setValue(Y,"isOrthographic",A.isOrthographicCamera===!0),$!==A&&($=A,Li=!0,gr=!0)}if(Xe.needsLights&&(mn.state.sunShadowMap.length>0&&zt.setValue(Y,"sunShadowMap",mn.state.sunShadowMap,pe),mn.state.directionalShadowMap.length>0&&zt.setValue(Y,"directionalShadowMap",mn.state.directionalShadowMap,pe),mn.state.spotShadowMap.length>0&&zt.setValue(Y,"spotShadowMap",mn.state.spotShadowMap,pe),mn.state.pointShadowMap.length>0&&zt.setValue(Y,"pointShadowMap",mn.state.pointShadowMap,pe)),J.isSkinnedMesh){zt.setOptional(Y,J,"bindMatrix"),zt.setOptional(Y,J,"bindMatrixInverse");const Yt=J.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),zt.setValue(Y,"boneTexture",Yt.boneTexture,pe))}J.isBatchedMesh&&(zt.setOptional(Y,J,"batchingTexture"),zt.setValue(Y,"batchingTexture",J._matricesTexture,pe),zt.setOptional(Y,J,"batchingIdTexture"),zt.setValue(Y,"batchingIdTexture",J._indirectTexture,pe),zt.setOptional(Y,J,"batchingColorTexture"),J._colorsTexture!==null&&zt.setValue(Y,"batchingColorTexture",J._colorsTexture,pe));const Ni=fe.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&G.update(J,fe,On),(Li||Xe.receiveShadow!==J.receiveShadow)&&(Xe.receiveShadow=J.receiveShadow,zt.setValue(Y,"receiveShadow",J.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&X.environment!==null&&(rn.envMapIntensity.value=X.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=bD()),Li){if(zt.setValue(Y,"toneMappingExposure",B.toneMappingExposure),Xe.needsLights&&on(rn,gr),Ve&&ne.fog===!0&&et.refreshFogUniforms(rn,Ve),et.refreshMaterialUniforms(rn,ne,ce,oe,D.state.transmissionRenderTarget[A.id]),Xe.needsLights&&Xe.lightProbeGrid){const Yt=Xe.lightProbeGrid;rn.probesSH.value=Yt.texture,rn.probesMin.value.copy(Yt.boundingBox.min),rn.probesMax.value.copy(Yt.boundingBox.max),rn.probesResolution.value.copy(Yt.resolution)}qu.upload(Y,at(Xe),rn,pe)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(qu.upload(Y,at(Xe),rn,pe),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&zt.setValue(Y,"center",J.center),zt.setValue(Y,"modelViewMatrix",J.modelViewMatrix),zt.setValue(Y,"normalMatrix",J.normalMatrix),zt.setValue(Y,"modelMatrix",J.matrixWorld),ne.uniformsGroups!==void 0){const Yt=ne.uniformsGroups;for(let _i=0,Ii=Yt.length;_i<Ii;_i++){const Ui=Yt[_i];Se.update(Ui,On),Se.bind(Ui,On)}}return On}function on(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.sunLights.needsUpdate=X,A.sunLightShadows.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function Fn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return me},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(A,X,fe){const ne=ae.get(A);ne.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),ae.get(A.texture).__webglTexture=X,ae.get(A.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:fe,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const fe=ae.get(A);fe.__webglFramebuffer=X,fe.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,fe=0){K=A,me=X,j=fe;let ne=null,J=!1,Ve=!1;if(A){const ke=ae.get(A);if(ke.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Y.FRAMEBUFFER,ke.__webglFramebuffer),N.copy(A.viewport),se.copy(A.scissor),ye=A.scissorTest,E.viewport(N),E.scissor(se),E.setScissorTest(ye),W=-1;return}else if(ke.__webglFramebuffer===void 0)pe.setupRenderTarget(A);else if(ke.__hasExternalTextures)pe.rebindTextures(A,ae.get(A.texture).__webglTexture,ae.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const gt=A.depthTexture;if(ke.__boundDepthTexture!==gt){if(gt!==null&&ae.has(gt)&&(A.width!==gt.image.width||A.height!==gt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(A)}}const Qe=A.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Ve=!0);const rt=ae.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(rt[X])?ne=rt[X][fe]:ne=rt[X],J=!0):A.samples>0&&pe.useMultisampledRTT(A)===!1?ne=ae.get(A).__webglMultisampledFramebuffer:Array.isArray(rt)?ne=rt[fe]:ne=rt,N.copy(A.viewport),se.copy(A.scissor),ye=A.scissorTest}else N.copy(Ce).multiplyScalar(ce).floor(),se.copy(ze).multiplyScalar(ce).floor(),ye=qt;if(fe!==0&&(ne=Z),E.bindFramebuffer(Y.FRAMEBUFFER,ne)&&E.drawBuffers(A,ne),E.viewport(N),E.scissor(se),E.setScissorTest(ye),J){const ke=ae.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+X,ke.__webglTexture,fe)}else if(Ve){const ke=X;for(let Qe=0;Qe<A.textures.length;Qe++){const rt=ae.get(A.textures[Qe]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Qe,rt.__webglTexture,fe,ke)}}else if(A!==null&&fe!==0){const ke=ae.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,ke.__webglTexture,fe)}W=-1};function li(A){const X=ae.get(A);return(X.__readFormat!==A.format||X.__readType!==A.type)&&(X.__readFormat=A.format,X.__readType=A.type,X.__formatReadable=I.textureFormatReadable(A.format),X.__typeReadable=I.textureTypeReadable(A.type)),X}this.readRenderTargetPixels=function(A,X,fe,ne,J,Ve,Fe,ke=0){if(!(A&&A.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Fe!==void 0&&(Qe=Qe[Fe]),Qe){E.bindFramebuffer(Y.FRAMEBUFFER,Qe);try{const rt=A.textures[ke],gt=rt.format,St=rt.type;A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+ke);const Ke=li(rt);if(Ke.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ke.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-ne&&fe>=0&&fe<=A.height-J&&Y.readPixels(X,fe,ne,J,Ne.convert(gt),Ne.convert(St),Ve)}finally{const rt=K!==null?ae.get(K).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(A,X,fe,ne,J,Ve,Fe,ke=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Fe!==void 0&&(Qe=Qe[Fe]),Qe)if(X>=0&&X<=A.width-ne&&fe>=0&&fe<=A.height-J){E.bindFramebuffer(Y.FRAMEBUFFER,Qe);const rt=A.textures[ke],gt=rt.format,St=rt.type;A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+ke);const Ke=li(rt);if(Ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Dt=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Dt),Y.bufferData(Y.PIXEL_PACK_BUFFER,Ve.byteLength,Y.STREAM_READ),Y.readPixels(X,fe,ne,J,Ne.convert(gt),Ne.convert(St),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);const fn=K!==null?ae.get(K).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,fn);const Kt=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await $w(Y,Kt,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Dt),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Ve),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(Dt),Y.deleteSync(Kt),Ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,fe=0){const ne=Math.pow(2,-fe),J=Math.floor(A.image.width*ne),Ve=Math.floor(A.image.height*ne),Fe=X!==null?X.x:0,ke=X!==null?X.y:0;pe.setTexture2D(A,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,fe,0,0,Fe,ke,J,Ve),E.unbindTexture()},this.copyTextureToTexture=function(A,X,fe=null,ne=null,J=0,Ve=0){let Fe,ke,Qe,rt,gt,St,Ke,Dt,fn;const Kt=A.isCompressedTexture?A.mipmaps[Ve]:A.image;if(fe!==null)Fe=fe.max.x-fe.min.x,ke=fe.max.y-fe.min.y,Qe=fe.isBox3?fe.max.z-fe.min.z:1,rt=fe.min.x,gt=fe.min.y,St=fe.isBox3?fe.min.z:0;else{const rn=Math.pow(2,-J);Fe=Math.floor(Kt.width*rn),ke=Math.floor(Kt.height*rn),A.isDataArrayTexture?Qe=Kt.depth:A.isData3DTexture?Qe=Math.floor(Kt.depth*rn):Qe=1,rt=0,gt=0,St=0}ne!==null?(Ke=ne.x,Dt=ne.y,fn=ne.z):(Ke=0,Dt=0,fn=0);const Wt=Ne.convert(X.format),Sn=Ne.convert(X.type);let Xe;X.isData3DTexture?(pe.setTexture3D(X,0),Xe=Y.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(pe.setTexture2DArray(X,0),Xe=Y.TEXTURE_2D_ARRAY):(pe.setTexture2D(X,0),Xe=Y.TEXTURE_2D),E.activeTexture(Y.TEXTURE0),E.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,X.flipY),E.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),E.pixelStorei(Y.UNPACK_ALIGNMENT,X.unpackAlignment);const mn=E.getParameter(Y.UNPACK_ROW_LENGTH),Lt=E.getParameter(Y.UNPACK_IMAGE_HEIGHT),On=E.getParameter(Y.UNPACK_SKIP_PIXELS),Mt=E.getParameter(Y.UNPACK_SKIP_ROWS),Li=E.getParameter(Y.UNPACK_SKIP_IMAGES);E.pixelStorei(Y.UNPACK_ROW_LENGTH,Kt.width),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Kt.height),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,rt),E.pixelStorei(Y.UNPACK_SKIP_ROWS,gt),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,St);const gr=A.isDataArrayTexture||A.isData3DTexture,zt=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const rn=ae.get(A),Ni=ae.get(X),Yt=ae.get(rn.__renderTarget),_i=ae.get(Ni.__renderTarget);E.bindFramebuffer(Y.READ_FRAMEBUFFER,Yt.__webglFramebuffer),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let Ii=0;Ii<Qe;Ii++)gr&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ae.get(A).__webglTexture,J,St+Ii),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ae.get(X).__webglTexture,Ve,fn+Ii)),Y.blitFramebuffer(rt,gt,Fe,ke,Ke,Dt,Fe,ke,Y.DEPTH_BUFFER_BIT,Y.NEAREST);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(J!==0||A.isRenderTargetTexture||ae.has(A)){const rn=ae.get(A),Ni=ae.get(X);E.bindFramebuffer(Y.READ_FRAMEBUFFER,H),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,te);for(let Yt=0;Yt<Qe;Yt++)gr?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,rn.__webglTexture,J,St+Yt):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,rn.__webglTexture,J),zt?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ni.__webglTexture,Ve,fn+Yt):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ni.__webglTexture,Ve),J!==0?Y.blitFramebuffer(rt,gt,Fe,ke,Ke,Dt,Fe,ke,Y.COLOR_BUFFER_BIT,Y.NEAREST):zt?Y.copyTexSubImage3D(Xe,Ve,Ke,Dt,fn+Yt,rt,gt,Fe,ke):Y.copyTexSubImage2D(Xe,Ve,Ke,Dt,rt,gt,Fe,ke);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else zt?A.isDataTexture||A.isData3DTexture?Y.texSubImage3D(Xe,Ve,Ke,Dt,fn,Fe,ke,Qe,Wt,Sn,Kt.data):X.isCompressedArrayTexture?Y.compressedTexSubImage3D(Xe,Ve,Ke,Dt,fn,Fe,ke,Qe,Wt,Kt.data):Y.texSubImage3D(Xe,Ve,Ke,Dt,fn,Fe,ke,Qe,Wt,Sn,Kt):A.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Ve,Ke,Dt,Fe,ke,Wt,Sn,Kt.data):A.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Ve,Ke,Dt,Kt.width,Kt.height,Wt,Kt.data):Y.texSubImage2D(Y.TEXTURE_2D,Ve,Ke,Dt,Fe,ke,Wt,Sn,Kt);E.pixelStorei(Y.UNPACK_ROW_LENGTH,mn),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Lt),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,On),E.pixelStorei(Y.UNPACK_SKIP_ROWS,Mt),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,Li),Ve===0&&X.generateMipmaps&&Y.generateMipmap(Xe),E.unbindTexture()},this.initRenderTarget=function(A){ae.get(A).__webglFramebuffer===void 0&&pe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?pe.setTextureCube(A,0):A.isData3DTexture?pe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?pe.setTexture2DArray(A,0):pe.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){me=0,j=0,K=null,E.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Nt._getUnpackColorSpace()}}const as=3e3,Bu=800;function DD(n,e=2.5){const t=new Float32Array(n*3);for(let r=0;r<n;r++){const o=Math.floor(Math.random()*6);let l=(Math.random()-.5)*e,u=(Math.random()-.5)*e,f=(Math.random()-.5)*e;switch(o){case 0:l=e/2;break;case 1:l=-e/2;break;case 2:u=e/2;break;case 3:u=-e/2;break;case 4:f=e/2;break;case 5:f=-e/2;break}t[r*3]=l,t[r*3+1]=u,t[r*3+2]=f}return t}function LD(n,e=2){const t=new Float32Array(n*3);for(let r=0;r<n;r++){const o=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1);t[r*3]=e*Math.sin(l)*Math.cos(o),t[r*3+1]=e*Math.sin(l)*Math.sin(o),t[r*3+2]=e*Math.cos(l)}return t}function ND(n,e=2,t=.7){const r=new Float32Array(n*3);for(let o=0;o<n;o++){const l=Math.random()*Math.PI*2,u=Math.random()*Math.PI*2;r[o*3]=(e+t*Math.cos(u))*Math.cos(l),r[o*3+1]=(e+t*Math.cos(u))*Math.sin(l),r[o*3+2]=t*Math.sin(u)}return r}function ID(n,e=1.5,t=5,r=4){const o=new Float32Array(n*3);for(let l=0;l<n;l++){const u=l/n,f=u*Math.PI*2*r,d=Math.random()>.5?1:-1,h=.15;o[l*3]=(e+(Math.random()-.5)*h)*Math.cos(f+(d>0?0:Math.PI)),o[l*3+1]=(u-.5)*t+(Math.random()-.5)*h,o[l*3+2]=(e+(Math.random()-.5)*h)*Math.sin(f+(d>0?0:Math.PI))}return o}const UD=`
  attribute float aSize;
  attribute vec3 aColor;
  varying vec3 vColor;
  varying float vAlpha;
  uniform float uTime;
  uniform float uPixelRatio;
  void main() {
    vColor = aColor;
    vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
    float dist = length(mvPos.xyz);
    vAlpha = smoothstep(12.0, 2.0, dist);
    gl_Position = projectionMatrix * mvPos;
    gl_PointSize = aSize * uPixelRatio * (80.0 / -mvPos.z);
    gl_PointSize = max(gl_PointSize, 1.0);
  }
`,FD=`
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    if (d > 0.5) discard;
    float glow = exp(-d * 6.0);
    float core = smoothstep(0.5, 0.05, d);
    float alpha = (core * 0.9 + glow * 0.6) * vAlpha;
    vec3 col = vColor * (1.0 + glow * 0.8);
    gl_FragColor = vec4(col, alpha);
  }
`,OD=`
  attribute float aSize;
  attribute float aFlicker;
  uniform float uTime;
  varying float vAlpha;
  void main() {
    float flicker = 0.5 + 0.5 * sin(uTime * 2.0 + aFlicker * 6.28);
    vAlpha = 0.3 + 0.7 * flicker;
    vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPos;
    gl_PointSize = aSize * (200.0 / -mvPos.z);
    gl_PointSize = max(gl_PointSize, 0.5);
  }
`,BD=`
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    if (d > 0.5) discard;
    float alpha = smoothstep(0.5, 0.0, d) * vAlpha;
    gl_FragColor = vec4(0.75, 0.82, 0.95, alpha * 0.6);
  }
`,kD=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,zD=`
  varying vec2 vUv;
  uniform float uTime;
  uniform vec3 uColor;
  void main() {
    vec2 center = vec2(0.5);
    float dist = length(vUv - center) * 2.0;
    float ripple = 0.0;
    for (int i = 0; i < 5; i++) {
      float fi = float(i);
      float wave = sin(dist * 12.0 - uTime * (0.5 + fi * 0.15) + fi * 1.2);
      float ring = smoothstep(0.02, 0.0, abs(wave) - 0.92);
      ripple += ring * (1.0 - smoothstep(0.0, 1.0, dist)) * (0.5 - fi * 0.08);
    }
    gl_FragColor = vec4(uColor, ripple * (1.0 - smoothstep(0.6, 1.0, dist)) * 0.35);
  }
`;function VD(){const n=Oe.useRef(null);return Oe.useEffect(()=>{const e=n.current;if(!e)return;const t=new dA,r=new bi(60,window.innerWidth/window.innerHeight,.1,100);r.position.z=6;const o=new PD({alpha:!0,antialias:!0});o.setSize(window.innerWidth,window.innerHeight),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(o.domElement);const l=[DD(as),LD(as),ND(as),ID(as)],u=[new Rt("#00e5ff"),new Rt("#2979ff"),new Rt("#7c4dff"),new Rt("#448aff"),new Rt("#00b8d4")],f=new Float32Array(as*3),d=new Float32Array(as);for(let Z=0;Z<as;Z++){const H=u[Math.floor(Math.random()*u.length)];f[Z*3]=H.r,f[Z*3+1]=H.g,f[Z*3+2]=H.b,d[Z]=.015+Math.random()*.04}const h=new Di;h.setAttribute("position",new $n(new Float32Array(l[0]),3)),h.setAttribute("aColor",new $n(f,3)),h.setAttribute("aSize",new $n(d,1));const m=new gi({vertexShader:UD,fragmentShader:FD,uniforms:{uTime:{value:0},uPixelRatio:{value:o.getPixelRatio()}},transparent:!0,depthWrite:!1,blending:Wa}),v=new u_(h,m);t.add(v);const g=new Float32Array(Bu*3),S=new Float32Array(Bu),T=new Float32Array(Bu);for(let Z=0;Z<Bu;Z++)g[Z*3]=(Math.random()-.5)*40,g[Z*3+1]=(Math.random()-.5)*40,g[Z*3+2]=-5-Math.random()*30,S[Z]=.3+Math.random()*1.5,T[Z]=Math.random();const R=new Di;R.setAttribute("position",new $n(g,3)),R.setAttribute("aSize",new $n(S,1)),R.setAttribute("aFlicker",new $n(T,1));const M=new gi({vertexShader:OD,fragmentShader:BD,uniforms:{uTime:{value:0}},transparent:!0,depthWrite:!1,blending:Wa}),y=new u_(R,M);t.add(y);const P=new ll(8,4),O=new gi({vertexShader:kD,fragmentShader:zD,uniforms:{uTime:{value:0},uColor:{value:new Rt("#2979ff")}},transparent:!0,depthWrite:!1,blending:Wa,side:ir}),C=new fr(P,O);C.position.y=-2.8,C.rotation.x=-Math.PI/2.5,t.add(C);const b={x:0,y:0,tx:0,ty:0},D=Z=>{b.tx=(Z.clientX/window.innerWidth-.5)*2,b.ty=(Z.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",D);let U=0;const x=()=>{const Z=document.documentElement.scrollHeight-window.innerHeight;U=Z>0?window.scrollY/Z:0};window.addEventListener("scroll",x,{passive:!0});const L=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",L);let B=0;const V=new Float32Array(l[0]);function ee(){requestAnimationFrame(ee),B+=.008,b.x+=(b.tx-b.x)*.05,b.y+=(b.ty-b.y)*.05;const Z=l.length,H=U*(Z-1),te=Math.min(Math.floor(H),Z-2),me=te+1,j=H-te,K=j*j*(3-2*j),W=l[te],$=l[me],N=h.attributes.position;for(let se=0;se<as;se++){const ye=se*3,je=W[ye]+($[ye]-W[ye])*K,We=W[ye+1]+($[ye+1]-W[ye+1])*K,qe=W[ye+2]+($[ye+2]-W[ye+2])*K,oe=je-b.x*2,ce=We+b.y*2,we=Math.sqrt(oe*oe+ce*ce),Ge=Math.max(0,1-we/1.5)*.3;V[ye]+=(je+oe*Ge-V[ye])*.08,V[ye+1]+=(We+ce*Ge-V[ye+1])*.08,V[ye+2]+=(qe-V[ye+2])*.08,N.array[ye]=V[ye],N.array[ye+1]=V[ye+1],N.array[ye+2]=V[ye+2]}N.needsUpdate=!0,v.rotation.y=B*.15+b.x*.3,v.rotation.x=Math.sin(B*.1)*.1+b.y*.15,y.position.x=b.x*.5,y.position.y=-b.y*.5,m.uniforms.uTime.value=B,M.uniforms.uTime.value=B,O.uniforms.uTime.value=B,o.render(t,r)}return ee(),()=>{window.removeEventListener("mousemove",D),window.removeEventListener("scroll",x),window.removeEventListener("resize",L),h.dispose(),m.dispose(),R.dispose(),M.dispose(),P.dispose(),O.dispose(),o.dispose(),o.domElement.parentElement&&o.domElement.parentElement.removeChild(o.domElement)}},[]),re.jsx("div",{ref:n,"aria-hidden":"true",style:{position:"fixed",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:-1,opacity:.65}})}function HD(){return re.jsxs(QS,{children:[re.jsx(VD,{}),re.jsx(hw,{RAINBOW_MODE:!1,COLOR:"#8b5cf6",SIM_RESOLUTION:128,DYE_RESOLUTION:1440,DENSITY_DISSIPATION:3.5,VELOCITY_DISSIPATION:2,PRESSURE:.1,CURL:3,SPLAT_RADIUS:.2,SPLAT_FORCE:6e3,SHADING:!0,TRANSPARENT:!0}),re.jsx(G3,{}),re.jsxs("main",{children:[re.jsx(W3,{}),re.jsx(q3,{}),re.jsx(aw,{}),re.jsx(cw,{}),re.jsx(fw,{})]}),re.jsx(dw,{})]})}$S.createRoot(document.getElementById("root")).render(re.jsx(fs.StrictMode,{children:re.jsx(HD,{})}));
