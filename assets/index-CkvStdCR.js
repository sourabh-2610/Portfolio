(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function K1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ed={exports:{}},wa={},td={exports:{}},bt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg;function ZS(){if(Mg)return bt;Mg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function g(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,A={};function S(N,re,we){this.props=N,this.context=re,this.refs=A,this.updater=we||y}S.prototype.isReactComponent={},S.prototype.setState=function(N,re){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,re,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function x(){}x.prototype=S.prototype;function D(N,re,we){this.props=N,this.context=re,this.refs=A,this.updater=we||y}var I=D.prototype=new x;I.constructor=D,M(I,S.prototype),I.isPureReactComponent=!0;var b=Array.isArray,P=Object.prototype.hasOwnProperty,L={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function T(N,re,we){var qe,We={},Ke=null,oe=null;if(re!=null)for(qe in re.ref!==void 0&&(oe=re.ref),re.key!==void 0&&(Ke=""+re.key),re)P.call(re,qe)&&!F.hasOwnProperty(qe)&&(We[qe]=re[qe]);var fe=arguments.length-2;if(fe===1)We.children=we;else if(1<fe){for(var Re=Array(fe),ye=0;ye<fe;ye++)Re[ye]=arguments[ye+2];We.children=Re}if(N&&N.defaultProps)for(qe in fe=N.defaultProps,fe)We[qe]===void 0&&(We[qe]=fe[qe]);return{$$typeof:n,type:N,key:Ke,ref:oe,props:We,_owner:L.current}}function w(N,re){return{$$typeof:n,type:N.type,key:re,ref:N.ref,props:N.props,_owner:N._owner}}function B(N){return typeof N=="object"&&N!==null&&N.$$typeof===n}function Y(N){var re={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(we){return re[we]})}var J=/\/+/g;function se(N,re){return typeof N=="object"&&N!==null&&N.key!=null?Y(""+N.key):re.toString(36)}function q(N,re,we,qe,We){var Ke=typeof N;(Ke==="undefined"||Ke==="boolean")&&(N=null);var oe=!1;if(N===null)oe=!0;else switch(Ke){case"string":case"number":oe=!0;break;case"object":switch(N.$$typeof){case n:case e:oe=!0}}if(oe)return oe=N,We=We(oe),N=qe===""?"."+se(oe,0):qe,b(We)?(we="",N!=null&&(we=N.replace(J,"$&/")+"/"),q(We,re,we,"",function(ye){return ye})):We!=null&&(B(We)&&(We=w(We,we+(!We.key||oe&&oe.key===We.key?"":(""+We.key).replace(J,"$&/")+"/")+N)),re.push(We)),1;if(oe=0,qe=qe===""?".":qe+":",b(N))for(var fe=0;fe<N.length;fe++){Ke=N[fe];var Re=qe+se(Ke,fe);oe+=q(Ke,re,we,Re,We)}else if(Re=g(N),typeof Re=="function")for(N=Re.call(N),fe=0;!(Ke=N.next()).done;)Ke=Ke.value,Re=qe+se(Ke,fe++),oe+=q(Ke,re,we,Re,We);else if(Ke==="object")throw re=String(N),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return oe}function ee(N,re,we){if(N==null)return N;var qe=[],We=0;return q(N,qe,"","",function(Ke){return re.call(we,Ke,We++)}),qe}function me(N){if(N._status===-1){var re=N._result;re=re(),re.then(function(we){(N._status===0||N._status===-1)&&(N._status=1,N._result=we)},function(we){(N._status===0||N._status===-1)&&(N._status=2,N._result=we)}),N._status===-1&&(N._status=0,N._result=re)}if(N._status===1)return N._result.default;throw N._result}var $={current:null},H={transition:null},Z={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:H,ReactCurrentOwner:L};function X(){throw Error("act(...) is not supported in production builds of React.")}return bt.Children={map:ee,forEach:function(N,re,we){ee(N,function(){re.apply(this,arguments)},we)},count:function(N){var re=0;return ee(N,function(){re++}),re},toArray:function(N){return ee(N,function(re){return re})||[]},only:function(N){if(!B(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},bt.Component=S,bt.Fragment=t,bt.Profiler=o,bt.PureComponent=D,bt.StrictMode=r,bt.Suspense=d,bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,bt.act=X,bt.cloneElement=function(N,re,we){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var qe=M({},N.props),We=N.key,Ke=N.ref,oe=N._owner;if(re!=null){if(re.ref!==void 0&&(Ke=re.ref,oe=L.current),re.key!==void 0&&(We=""+re.key),N.type&&N.type.defaultProps)var fe=N.type.defaultProps;for(Re in re)P.call(re,Re)&&!F.hasOwnProperty(Re)&&(qe[Re]=re[Re]===void 0&&fe!==void 0?fe[Re]:re[Re])}var Re=arguments.length-2;if(Re===1)qe.children=we;else if(1<Re){fe=Array(Re);for(var ye=0;ye<Re;ye++)fe[ye]=arguments[ye+2];qe.children=fe}return{$$typeof:n,type:N.type,key:We,ref:Ke,props:qe,_owner:oe}},bt.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:a,_context:N},N.Consumer=N},bt.createElement=T,bt.createFactory=function(N){var re=T.bind(null,N);return re.type=N,re},bt.createRef=function(){return{current:null}},bt.forwardRef=function(N){return{$$typeof:u,render:N}},bt.isValidElement=B,bt.lazy=function(N){return{$$typeof:m,_payload:{_status:-1,_result:N},_init:me}},bt.memo=function(N,re){return{$$typeof:h,type:N,compare:re===void 0?null:re}},bt.startTransition=function(N){var re=H.transition;H.transition={};try{N()}finally{H.transition=re}},bt.unstable_act=X,bt.useCallback=function(N,re){return $.current.useCallback(N,re)},bt.useContext=function(N){return $.current.useContext(N)},bt.useDebugValue=function(){},bt.useDeferredValue=function(N){return $.current.useDeferredValue(N)},bt.useEffect=function(N,re){return $.current.useEffect(N,re)},bt.useId=function(){return $.current.useId()},bt.useImperativeHandle=function(N,re,we){return $.current.useImperativeHandle(N,re,we)},bt.useInsertionEffect=function(N,re){return $.current.useInsertionEffect(N,re)},bt.useLayoutEffect=function(N,re){return $.current.useLayoutEffect(N,re)},bt.useMemo=function(N,re){return $.current.useMemo(N,re)},bt.useReducer=function(N,re,we){return $.current.useReducer(N,re,we)},bt.useRef=function(N){return $.current.useRef(N)},bt.useState=function(N){return $.current.useState(N)},bt.useSyncExternalStore=function(N,re,we){return $.current.useSyncExternalStore(N,re,we)},bt.useTransition=function(){return $.current.useTransition()},bt.version="18.3.1",bt}var Eg;function op(){return Eg||(Eg=1,td.exports=ZS()),td.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tg;function QS(){if(Tg)return wa;Tg=1;var n=op(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,d,h){var m,v={},g=null,y=null;h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(y=d.ref);for(m in d)r.call(d,m)&&!a.hasOwnProperty(m)&&(v[m]=d[m]);if(u&&u.defaultProps)for(m in d=u.defaultProps,d)v[m]===void 0&&(v[m]=d[m]);return{$$typeof:e,type:u,key:g,ref:y,props:v,_owner:o.current}}return wa.Fragment=t,wa.jsx=c,wa.jsxs=c,wa}var wg;function JS(){return wg||(wg=1,ed.exports=QS()),ed.exports}var K=JS(),Pe=op();const us=K1(Pe);var cc={},nd={exports:{}},ri={},id={exports:{}},rd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag;function e2(){return Ag||(Ag=1,(function(n){function e(H,Z){var X=H.length;H.push(Z);e:for(;0<X;){var N=X-1>>>1,re=H[N];if(0<o(re,Z))H[N]=Z,H[X]=re,X=N;else break e}}function t(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var Z=H[0],X=H.pop();if(X!==Z){H[0]=X;e:for(var N=0,re=H.length,we=re>>>1;N<we;){var qe=2*(N+1)-1,We=H[qe],Ke=qe+1,oe=H[Ke];if(0>o(We,X))Ke<re&&0>o(oe,We)?(H[N]=oe,H[Ke]=X,N=Ke):(H[N]=We,H[qe]=X,N=qe);else if(Ke<re&&0>o(oe,X))H[N]=oe,H[Ke]=X,N=Ke;else break e}}return Z}function o(H,Z){var X=H.sortIndex-Z.sortIndex;return X!==0?X:H.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();n.unstable_now=function(){return c.now()-u}}var d=[],h=[],m=1,v=null,g=3,y=!1,M=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(H){for(var Z=t(h);Z!==null;){if(Z.callback===null)r(h);else if(Z.startTime<=H)r(h),Z.sortIndex=Z.expirationTime,e(d,Z);else break;Z=t(h)}}function b(H){if(A=!1,I(H),!M)if(t(d)!==null)M=!0,me(P);else{var Z=t(h);Z!==null&&$(b,Z.startTime-H)}}function P(H,Z){M=!1,A&&(A=!1,x(T),T=-1),y=!0;var X=g;try{for(I(Z),v=t(d);v!==null&&(!(v.expirationTime>Z)||H&&!Y());){var N=v.callback;if(typeof N=="function"){v.callback=null,g=v.priorityLevel;var re=N(v.expirationTime<=Z);Z=n.unstable_now(),typeof re=="function"?v.callback=re:v===t(d)&&r(d),I(Z)}else r(d);v=t(d)}if(v!==null)var we=!0;else{var qe=t(h);qe!==null&&$(b,qe.startTime-Z),we=!1}return we}finally{v=null,g=X,y=!1}}var L=!1,F=null,T=-1,w=5,B=-1;function Y(){return!(n.unstable_now()-B<w)}function J(){if(F!==null){var H=n.unstable_now();B=H;var Z=!0;try{Z=F(!0,H)}finally{Z?se():(L=!1,F=null)}}else L=!1}var se;if(typeof D=="function")se=function(){D(J)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,ee=q.port2;q.port1.onmessage=J,se=function(){ee.postMessage(null)}}else se=function(){S(J,0)};function me(H){F=H,L||(L=!0,se())}function $(H,Z){T=S(function(){H(n.unstable_now())},Z)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(H){H.callback=null},n.unstable_continueExecution=function(){M||y||(M=!0,me(P))},n.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<H?Math.floor(1e3/H):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(H){switch(g){case 1:case 2:case 3:var Z=3;break;default:Z=g}var X=g;g=Z;try{return H()}finally{g=X}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(H,Z){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var X=g;g=H;try{return Z()}finally{g=X}},n.unstable_scheduleCallback=function(H,Z,X){var N=n.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?N+X:N):X=N,H){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=X+re,H={id:m++,callback:Z,priorityLevel:H,startTime:X,expirationTime:re,sortIndex:-1},X>N?(H.sortIndex=X,e(h,H),t(d)===null&&H===t(h)&&(A?(x(T),T=-1):A=!0,$(b,X-N))):(H.sortIndex=re,e(d,H),M||y||(M=!0,me(P))),H},n.unstable_shouldYield=Y,n.unstable_wrapCallback=function(H){var Z=g;return function(){var X=g;g=Z;try{return H.apply(this,arguments)}finally{g=X}}}})(rd)),rd}var Rg;function t2(){return Rg||(Rg=1,id.exports=e2()),id.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cg;function n2(){if(Cg)return ri;Cg=1;var n=op(),e=t2();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(i,s){c(i,s),c(i+"Capture",s)}function c(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},v={};function g(i){return d.call(v,i)?!0:d.call(m,i)?!1:h.test(i)?v[i]=!0:(m[i]=!0,!1)}function y(i,s,l,f){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,l,f){if(s===null||typeof s>"u"||y(i,s,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function A(i,s,l,f,p,_,R){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=_,this.removeEmptyString=R}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){S[i]=new A(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];S[s]=new A(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){S[i]=new A(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){S[i]=new A(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){S[i]=new A(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){S[i]=new A(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){S[i]=new A(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){S[i]=new A(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){S[i]=new A(i,5,!1,i.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function D(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(x,D);S[s]=new A(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(x,D);S[s]=new A(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(x,D);S[s]=new A(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){S[i]=new A(i,1,!1,i.toLowerCase(),null,!1,!1)}),S.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){S[i]=new A(i,1,!1,i.toLowerCase(),null,!0,!0)});function I(i,s,l,f){var p=S.hasOwnProperty(s)?S[s]:null;(p!==null?p.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,l,p,f)&&(l=null),f||p===null?g(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(s=p.attributeName,f=p.attributeNamespace,l===null?i.removeAttribute(s):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,f?i.setAttributeNS(f,s,l):i.setAttribute(s,l))))}var b=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),L=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),Y=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),me=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),H=Symbol.iterator;function Z(i){return i===null||typeof i!="object"?null:(i=H&&i[H]||i["@@iterator"],typeof i=="function"?i:null)}var X=Object.assign,N;function re(i){if(N===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);N=s&&s[1]||""}return`
`+N+i}var we=!1;function qe(i,s){if(!i||we)return"";we=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(de){var f=de}Reflect.construct(i,[],s)}else{try{s.call()}catch(de){f=de}i.call(s.prototype)}else{try{throw Error()}catch(de){f=de}i()}}catch(de){if(de&&f&&typeof de.stack=="string"){for(var p=de.stack.split(`
`),_=f.stack.split(`
`),R=p.length-1,O=_.length-1;1<=R&&0<=O&&p[R]!==_[O];)O--;for(;1<=R&&0<=O;R--,O--)if(p[R]!==_[O]){if(R!==1||O!==1)do if(R--,O--,0>O||p[R]!==_[O]){var z=`
`+p[R].replace(" at new "," at ");return i.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",i.displayName)),z}while(1<=R&&0<=O);break}}}finally{we=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?re(i):""}function We(i){switch(i.tag){case 5:return re(i.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return i=qe(i.type,!1),i;case 11:return i=qe(i.type.render,!1),i;case 1:return i=qe(i.type,!0),i;default:return""}}function Ke(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case F:return"Fragment";case L:return"Portal";case w:return"Profiler";case T:return"StrictMode";case se:return"Suspense";case q:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case Y:return(i.displayName||"Context")+".Consumer";case B:return(i._context.displayName||"Context")+".Provider";case J:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case ee:return s=i.displayName||null,s!==null?s:Ke(i.type)||"Memo";case me:s=i._payload,i=i._init;try{return Ke(i(s))}catch{}}return null}function oe(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ke(s);case 8:return s===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function fe(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Re(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ye(i){var s=Re(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),f=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return p.call(this)},set:function(R){f=""+R,_.call(this,R)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(R){f=""+R},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Me(i){i._valueTracker||(i._valueTracker=ye(i))}function De(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),f="";return i&&(f=Re(i)?i.checked?"true":"false":i.value),i=f,i!==l?(s.setValue(i),!0):!1}function Xe(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function dt(i,s){var l=s.checked;return X({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function xt(i,s){var l=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;l=fe(s.value!=null?s.value:l),i._wrapperState={initialChecked:f,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function yt(i,s){s=s.checked,s!=null&&I(i,"checked",s,!1)}function ut(i,s){yt(i,s);var l=fe(s.value),f=s.type;if(l!=null)f==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Dt(i,s.type,l):s.hasOwnProperty("defaultValue")&&Dt(i,s.type,fe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function ft(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Dt(i,s,l){(s!=="number"||Xe(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Lt=Array.isArray;function Ct(i,s,l,f){if(i=i.options,s){s={};for(var p=0;p<l.length;p++)s["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=s.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&f&&(i[l].defaultSelected=!0)}else{for(l=""+fe(l),s=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,f&&(i[p].defaultSelected=!0);return}s!==null||i[p].disabled||(s=i[p])}s!==null&&(s.selected=!0)}}function Vt(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return X({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function V(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(Lt(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:fe(l)}}function $t(i,s){var l=fe(s.value),f=fe(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),f!=null&&(i.defaultValue=""+f)}function wt(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function U(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?U(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Q,ae=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,f,p){MSApp.execUnsafeLocalFunction(function(){return i(s,l,f,p)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(Q=Q||document.createElement("div"),Q.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Q.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function pe(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var Ce={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ie=["Webkit","ms","Moz","O"];Object.keys(Ce).forEach(function(i){Ie.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Ce[s]=Ce[i]})});function ge(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Ce.hasOwnProperty(i)&&Ce[i]?(""+s).trim():s+"px"}function xe(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var f=l.indexOf("--")===0,p=ge(l,s[l],f);l==="float"&&(l="cssFloat"),f?i.setProperty(l,p):i[l]=p}}var Ue=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nt(i,s){if(s){if(Ue[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Be(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Le=null;function it(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var lt=null,mt=null,G=null;function Fe(i){if(i=ua(i)){if(typeof lt!="function")throw Error(t(280));var s=i.stateNode;s&&(s=Tl(s),lt(i.stateNode,i.type,s))}}function _e(i){mt?G?G.push(i):G=[i]:mt=i}function Ne(){if(mt){var i=mt,s=G;if(G=mt=null,Fe(i),s)for(i=0;i<s.length;i++)Fe(s[i])}}function ze(i,s){return i(s)}function Se(){}var Je=!1;function Qe(i,s,l){if(Je)return i(s,l);Je=!0;try{return ze(i,s,l)}finally{Je=!1,(mt!==null||G!==null)&&(Se(),Ne())}}function kt(i,s){var l=i.stateNode;if(l===null)return null;var f=Tl(l);if(f===null)return null;l=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Nt=!1;if(u)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){Nt=!0}}),window.addEventListener("test",yn,yn),window.removeEventListener("test",yn,yn)}catch{Nt=!1}function Ln(i,s,l,f,p,_,R,O,z){var de=Array.prototype.slice.call(arguments,3);try{s.apply(l,de)}catch(Te){this.onError(Te)}}var ur=!1,Fr=null,Yi=!1,An=null,Yo={onError:function(i){ur=!0,Fr=i}};function ps(i,s,l,f,p,_,R,O,z){ur=!1,Fr=null,Ln.apply(Yo,arguments)}function ms(i,s,l,f,p,_,R,O,z){if(ps.apply(this,arguments),ur){if(ur){var de=Fr;ur=!1,Fr=null}else throw Error(t(198));Yi||(Yi=!0,An=de)}}function Rn(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function fr(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Or(i){if(Rn(i)!==i)throw Error(t(188))}function dr(i){var s=i.alternate;if(!s){if(s=Rn(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,f=s;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(f=p.return,f!==null){l=f;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return Or(p),i;if(_===f)return Or(p),s;_=_.sibling}throw Error(t(188))}if(l.return!==f.return)l=p,f=_;else{for(var R=!1,O=p.child;O;){if(O===l){R=!0,l=p,f=_;break}if(O===f){R=!0,f=p,l=_;break}O=O.sibling}if(!R){for(O=_.child;O;){if(O===l){R=!0,l=_,f=p;break}if(O===f){R=!0,f=_,l=p;break}O=O.sibling}if(!R)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function k(i){return i=dr(i),i!==null?he(i):null}function he(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=he(i);if(s!==null)return s;i=i.sibling}return null}var ve=e.unstable_scheduleCallback,Oe=e.unstable_cancelCallback,ct=e.unstable_shouldYield,It=e.unstable_requestPaint,at=e.unstable_now,cn=e.unstable_getCurrentPriorityLevel,Jt=e.unstable_ImmediatePriority,On=e.unstable_UserBlockingPriority,C=e.unstable_NormalPriority,W=e.unstable_LowPriority,ue=e.unstable_IdlePriority,ne=null,te=null;function He(i){if(te&&typeof te.onCommitFiberRoot=="function")try{te.onCommitFiberRoot(ne,i,void 0,(i.current.flags&128)===128)}catch{}}var ke=Math.clz32?Math.clz32:st,Ve=Math.log,et=Math.LN2;function st(i){return i>>>=0,i===0?32:31-(Ve(i)/et|0)|0}var Mt=64,Tt=4194304;function $e(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Ut(i,s){var l=i.pendingLanes;if(l===0)return 0;var f=0,p=i.suspendedLanes,_=i.pingedLanes,R=l&268435455;if(R!==0){var O=R&~p;O!==0?f=$e(O):(_&=R,_!==0&&(f=$e(_)))}else R=l&~p,R!==0?f=$e(R):_!==0&&(f=$e(_));if(f===0)return 0;if(s!==0&&s!==f&&(s&p)===0&&(p=f&-f,_=s&-s,p>=_||p===16&&(_&4194240)!==0))return s;if((f&4)!==0&&(f|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=f;0<s;)l=31-ke(s),p=1<<l,f|=i[l],s&=~p;return f}function un(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zt(i,s){for(var l=i.suspendedLanes,f=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var R=31-ke(_),O=1<<R,z=p[R];z===-1?((O&l)===0||(O&f)!==0)&&(p[R]=un(O,s)):z<=s&&(i.expiredLanes|=O),_&=~O}}function Xt(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Sn(){var i=Mt;return Mt<<=1,(Mt&4194240)===0&&(Mt=64),i}function je(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function mn(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-ke(s),i[s]=l}function Ft(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-ke(l),_=1<<p;s[p]=0,f[p]=-1,i[p]=-1,l&=~_}}function Bn(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var f=31-ke(l),p=1<<f;p&s|i[f]&s&&(i[f]|=s),l&=~p}}var At=0;function Pi(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var hr,Ht,rn,Di,qt,vi=!1,Li=[],Ni=null,Br=null,kr=null,qo=new Map,Ko=new Map,zr=[],xy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sm(i,s){switch(i){case"focusin":case"focusout":Ni=null;break;case"dragenter":case"dragleave":Br=null;break;case"mouseover":case"mouseout":kr=null;break;case"pointerover":case"pointerout":qo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(s.pointerId)}}function $o(i,s,l,f,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:s,domEventName:l,eventSystemFlags:f,nativeEvent:_,targetContainers:[p]},s!==null&&(s=ua(s),s!==null&&Ht(s)),i):(i.eventSystemFlags|=f,s=i.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),i)}function yy(i,s,l,f,p){switch(s){case"focusin":return Ni=$o(Ni,i,s,l,f,p),!0;case"dragenter":return Br=$o(Br,i,s,l,f,p),!0;case"mouseover":return kr=$o(kr,i,s,l,f,p),!0;case"pointerover":var _=p.pointerId;return qo.set(_,$o(qo.get(_)||null,i,s,l,f,p)),!0;case"gotpointercapture":return _=p.pointerId,Ko.set(_,$o(Ko.get(_)||null,i,s,l,f,p)),!0}return!1}function om(i){var s=gs(i.target);if(s!==null){var l=Rn(s);if(l!==null){if(s=l.tag,s===13){if(s=fr(l),s!==null){i.blockedOn=s,qt(i.priority,function(){rn(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function ul(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=Au(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var f=new l.constructor(l.type,l);Le=f,l.target.dispatchEvent(f),Le=null}else return s=ua(l),s!==null&&Ht(s),i.blockedOn=l,!1;s.shift()}return!0}function am(i,s,l){ul(i)&&l.delete(s)}function Sy(){vi=!1,Ni!==null&&ul(Ni)&&(Ni=null),Br!==null&&ul(Br)&&(Br=null),kr!==null&&ul(kr)&&(kr=null),qo.forEach(am),Ko.forEach(am)}function Zo(i,s){i.blockedOn===s&&(i.blockedOn=null,vi||(vi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Sy)))}function Qo(i){function s(p){return Zo(p,i)}if(0<Li.length){Zo(Li[0],i);for(var l=1;l<Li.length;l++){var f=Li[l];f.blockedOn===i&&(f.blockedOn=null)}}for(Ni!==null&&Zo(Ni,i),Br!==null&&Zo(Br,i),kr!==null&&Zo(kr,i),qo.forEach(s),Ko.forEach(s),l=0;l<zr.length;l++)f=zr[l],f.blockedOn===i&&(f.blockedOn=null);for(;0<zr.length&&(l=zr[0],l.blockedOn===null);)om(l),l.blockedOn===null&&zr.shift()}var js=b.ReactCurrentBatchConfig,fl=!0;function My(i,s,l,f){var p=At,_=js.transition;js.transition=null;try{At=1,wu(i,s,l,f)}finally{At=p,js.transition=_}}function Ey(i,s,l,f){var p=At,_=js.transition;js.transition=null;try{At=4,wu(i,s,l,f)}finally{At=p,js.transition=_}}function wu(i,s,l,f){if(fl){var p=Au(i,s,l,f);if(p===null)Gu(i,s,f,dl,l),sm(i,f);else if(yy(p,i,s,l,f))f.stopPropagation();else if(sm(i,f),s&4&&-1<xy.indexOf(i)){for(;p!==null;){var _=ua(p);if(_!==null&&hr(_),_=Au(i,s,l,f),_===null&&Gu(i,s,f,dl,l),_===p)break;p=_}p!==null&&f.stopPropagation()}else Gu(i,s,f,null,l)}}var dl=null;function Au(i,s,l,f){if(dl=null,i=it(f),i=gs(i),i!==null)if(s=Rn(i),s===null)i=null;else if(l=s.tag,l===13){if(i=fr(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return dl=i,null}function lm(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cn()){case Jt:return 1;case On:return 4;case C:case W:return 16;case ue:return 536870912;default:return 16}default:return 16}}var Vr=null,Ru=null,hl=null;function cm(){if(hl)return hl;var i,s=Ru,l=s.length,f,p="value"in Vr?Vr.value:Vr.textContent,_=p.length;for(i=0;i<l&&s[i]===p[i];i++);var R=l-i;for(f=1;f<=R&&s[l-f]===p[_-f];f++);return hl=p.slice(i,1<f?1-f:void 0)}function pl(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function ml(){return!0}function um(){return!1}function ci(i){function s(l,f,p,_,R){this._reactName=l,this._targetInst=p,this.type=f,this.nativeEvent=_,this.target=R,this.currentTarget=null;for(var O in i)i.hasOwnProperty(O)&&(l=i[O],this[O]=l?l(_):_[O]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?ml:um,this.isPropagationStopped=um,this}return X(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),s}var Ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cu=ci(Ys),Jo=X({},Ys,{view:0,detail:0}),Ty=ci(Jo),bu,Pu,ea,gl=X({},Jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lu,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==ea&&(ea&&i.type==="mousemove"?(bu=i.screenX-ea.screenX,Pu=i.screenY-ea.screenY):Pu=bu=0,ea=i),bu)},movementY:function(i){return"movementY"in i?i.movementY:Pu}}),fm=ci(gl),wy=X({},gl,{dataTransfer:0}),Ay=ci(wy),Ry=X({},Jo,{relatedTarget:0}),Du=ci(Ry),Cy=X({},Ys,{animationName:0,elapsedTime:0,pseudoElement:0}),by=ci(Cy),Py=X({},Ys,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Dy=ci(Py),Ly=X({},Ys,{data:0}),dm=ci(Ly),Ny={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Iy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fy(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=Uy[i])?!!s[i]:!1}function Lu(){return Fy}var Oy=X({},Jo,{key:function(i){if(i.key){var s=Ny[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=pl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Iy[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lu,charCode:function(i){return i.type==="keypress"?pl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?pl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),By=ci(Oy),ky=X({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hm=ci(ky),zy=X({},Jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lu}),Vy=ci(zy),Hy=X({},Ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gy=ci(Hy),Wy=X({},gl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Xy=ci(Wy),jy=[9,13,27,32],Nu=u&&"CompositionEvent"in window,ta=null;u&&"documentMode"in document&&(ta=document.documentMode);var Yy=u&&"TextEvent"in window&&!ta,pm=u&&(!Nu||ta&&8<ta&&11>=ta),mm=" ",gm=!1;function vm(i,s){switch(i){case"keyup":return jy.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _m(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var qs=!1;function qy(i,s){switch(i){case"compositionend":return _m(s);case"keypress":return s.which!==32?null:(gm=!0,mm);case"textInput":return i=s.data,i===mm&&gm?null:i;default:return null}}function Ky(i,s){if(qs)return i==="compositionend"||!Nu&&vm(i,s)?(i=cm(),hl=Ru=Vr=null,qs=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return pm&&s.locale!=="ko"?null:s.data;default:return null}}var $y={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xm(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!$y[i.type]:s==="textarea"}function ym(i,s,l,f){_e(f),s=Sl(s,"onChange"),0<s.length&&(l=new Cu("onChange","change",null,l,f),i.push({event:l,listeners:s}))}var na=null,ia=null;function Zy(i){Bm(i,0)}function vl(i){var s=Js(i);if(De(s))return i}function Qy(i,s){if(i==="change")return s}var Sm=!1;if(u){var Iu;if(u){var Uu="oninput"in document;if(!Uu){var Mm=document.createElement("div");Mm.setAttribute("oninput","return;"),Uu=typeof Mm.oninput=="function"}Iu=Uu}else Iu=!1;Sm=Iu&&(!document.documentMode||9<document.documentMode)}function Em(){na&&(na.detachEvent("onpropertychange",Tm),ia=na=null)}function Tm(i){if(i.propertyName==="value"&&vl(ia)){var s=[];ym(s,ia,i,it(i)),Qe(Zy,s)}}function Jy(i,s,l){i==="focusin"?(Em(),na=s,ia=l,na.attachEvent("onpropertychange",Tm)):i==="focusout"&&Em()}function eS(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return vl(ia)}function tS(i,s){if(i==="click")return vl(s)}function nS(i,s){if(i==="input"||i==="change")return vl(s)}function iS(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Ii=typeof Object.is=="function"?Object.is:iS;function ra(i,s){if(Ii(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),f=Object.keys(s);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var p=l[f];if(!d.call(s,p)||!Ii(i[p],s[p]))return!1}return!0}function wm(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Am(i,s){var l=wm(i);i=0;for(var f;l;){if(l.nodeType===3){if(f=i+l.textContent.length,i<=s&&f>=s)return{node:l,offset:s-i};i=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=wm(l)}}function Rm(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?Rm(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function Cm(){for(var i=window,s=Xe();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=Xe(i.document)}return s}function Fu(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function rS(i){var s=Cm(),l=i.focusedElem,f=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&Rm(l.ownerDocument.documentElement,l)){if(f!==null&&Fu(l)){if(s=f.start,i=f.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,_=Math.min(f.start,p);f=f.end===void 0?_:Math.min(f.end,p),!i.extend&&_>f&&(p=f,f=_,_=p),p=Am(l,_);var R=Am(l,f);p&&R&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==R.node||i.focusOffset!==R.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),i.removeAllRanges(),_>f?(i.addRange(s),i.extend(R.node,R.offset)):(s.setEnd(R.node,R.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var sS=u&&"documentMode"in document&&11>=document.documentMode,Ks=null,Ou=null,sa=null,Bu=!1;function bm(i,s,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Bu||Ks==null||Ks!==Xe(f)||(f=Ks,"selectionStart"in f&&Fu(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),sa&&ra(sa,f)||(sa=f,f=Sl(Ou,"onSelect"),0<f.length&&(s=new Cu("onSelect","select",null,s,l),i.push({event:s,listeners:f}),s.target=Ks)))}function _l(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var $s={animationend:_l("Animation","AnimationEnd"),animationiteration:_l("Animation","AnimationIteration"),animationstart:_l("Animation","AnimationStart"),transitionend:_l("Transition","TransitionEnd")},ku={},Pm={};u&&(Pm=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function xl(i){if(ku[i])return ku[i];if(!$s[i])return i;var s=$s[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in Pm)return ku[i]=s[l];return i}var Dm=xl("animationend"),Lm=xl("animationiteration"),Nm=xl("animationstart"),Im=xl("transitionend"),Um=new Map,Fm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hr(i,s){Um.set(i,s),a(s,[i])}for(var zu=0;zu<Fm.length;zu++){var Vu=Fm[zu],oS=Vu.toLowerCase(),aS=Vu[0].toUpperCase()+Vu.slice(1);Hr(oS,"on"+aS)}Hr(Dm,"onAnimationEnd"),Hr(Lm,"onAnimationIteration"),Hr(Nm,"onAnimationStart"),Hr("dblclick","onDoubleClick"),Hr("focusin","onFocus"),Hr("focusout","onBlur"),Hr(Im,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lS=new Set("cancel close invalid load scroll toggle".split(" ").concat(oa));function Om(i,s,l){var f=i.type||"unknown-event";i.currentTarget=l,ms(f,s,void 0,i),i.currentTarget=null}function Bm(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var f=i[l],p=f.event;f=f.listeners;e:{var _=void 0;if(s)for(var R=f.length-1;0<=R;R--){var O=f[R],z=O.instance,de=O.currentTarget;if(O=O.listener,z!==_&&p.isPropagationStopped())break e;Om(p,O,de),_=z}else for(R=0;R<f.length;R++){if(O=f[R],z=O.instance,de=O.currentTarget,O=O.listener,z!==_&&p.isPropagationStopped())break e;Om(p,O,de),_=z}}}if(Yi)throw i=An,Yi=!1,An=null,i}function en(i,s){var l=s[Ku];l===void 0&&(l=s[Ku]=new Set);var f=i+"__bubble";l.has(f)||(km(s,i,2,!1),l.add(f))}function Hu(i,s,l){var f=0;s&&(f|=4),km(l,i,f,s)}var yl="_reactListening"+Math.random().toString(36).slice(2);function aa(i){if(!i[yl]){i[yl]=!0,r.forEach(function(l){l!=="selectionchange"&&(lS.has(l)||Hu(l,!1,i),Hu(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[yl]||(s[yl]=!0,Hu("selectionchange",!1,s))}}function km(i,s,l,f){switch(lm(s)){case 1:var p=My;break;case 4:p=Ey;break;default:p=wu}l=p.bind(null,s,l,i),p=void 0,!Nt||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),f?p!==void 0?i.addEventListener(s,l,{capture:!0,passive:p}):i.addEventListener(s,l,!0):p!==void 0?i.addEventListener(s,l,{passive:p}):i.addEventListener(s,l,!1)}function Gu(i,s,l,f,p){var _=f;if((s&1)===0&&(s&2)===0&&f!==null)e:for(;;){if(f===null)return;var R=f.tag;if(R===3||R===4){var O=f.stateNode.containerInfo;if(O===p||O.nodeType===8&&O.parentNode===p)break;if(R===4)for(R=f.return;R!==null;){var z=R.tag;if((z===3||z===4)&&(z=R.stateNode.containerInfo,z===p||z.nodeType===8&&z.parentNode===p))return;R=R.return}for(;O!==null;){if(R=gs(O),R===null)return;if(z=R.tag,z===5||z===6){f=_=R;continue e}O=O.parentNode}}f=f.return}Qe(function(){var de=_,Te=it(l),Ae=[];e:{var Ee=Um.get(i);if(Ee!==void 0){var Ye=Cu,tt=i;switch(i){case"keypress":if(pl(l)===0)break e;case"keydown":case"keyup":Ye=By;break;case"focusin":tt="focus",Ye=Du;break;case"focusout":tt="blur",Ye=Du;break;case"beforeblur":case"afterblur":Ye=Du;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ye=fm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ye=Ay;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ye=Vy;break;case Dm:case Lm:case Nm:Ye=by;break;case Im:Ye=Gy;break;case"scroll":Ye=Ty;break;case"wheel":Ye=Xy;break;case"copy":case"cut":case"paste":Ye=Dy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ye=hm}var rt=(s&4)!==0,gn=!rt&&i==="scroll",ie=rt?Ee!==null?Ee+"Capture":null:Ee;rt=[];for(var j=de,le;j!==null;){le=j;var be=le.stateNode;if(le.tag===5&&be!==null&&(le=be,ie!==null&&(be=kt(j,ie),be!=null&&rt.push(la(j,be,le)))),gn)break;j=j.return}0<rt.length&&(Ee=new Ye(Ee,tt,null,l,Te),Ae.push({event:Ee,listeners:rt}))}}if((s&7)===0){e:{if(Ee=i==="mouseover"||i==="pointerover",Ye=i==="mouseout"||i==="pointerout",Ee&&l!==Le&&(tt=l.relatedTarget||l.fromElement)&&(gs(tt)||tt[pr]))break e;if((Ye||Ee)&&(Ee=Te.window===Te?Te:(Ee=Te.ownerDocument)?Ee.defaultView||Ee.parentWindow:window,Ye?(tt=l.relatedTarget||l.toElement,Ye=de,tt=tt?gs(tt):null,tt!==null&&(gn=Rn(tt),tt!==gn||tt.tag!==5&&tt.tag!==6)&&(tt=null)):(Ye=null,tt=de),Ye!==tt)){if(rt=fm,be="onMouseLeave",ie="onMouseEnter",j="mouse",(i==="pointerout"||i==="pointerover")&&(rt=hm,be="onPointerLeave",ie="onPointerEnter",j="pointer"),gn=Ye==null?Ee:Js(Ye),le=tt==null?Ee:Js(tt),Ee=new rt(be,j+"leave",Ye,l,Te),Ee.target=gn,Ee.relatedTarget=le,be=null,gs(Te)===de&&(rt=new rt(ie,j+"enter",tt,l,Te),rt.target=le,rt.relatedTarget=gn,be=rt),gn=be,Ye&&tt)t:{for(rt=Ye,ie=tt,j=0,le=rt;le;le=Zs(le))j++;for(le=0,be=ie;be;be=Zs(be))le++;for(;0<j-le;)rt=Zs(rt),j--;for(;0<le-j;)ie=Zs(ie),le--;for(;j--;){if(rt===ie||ie!==null&&rt===ie.alternate)break t;rt=Zs(rt),ie=Zs(ie)}rt=null}else rt=null;Ye!==null&&zm(Ae,Ee,Ye,rt,!1),tt!==null&&gn!==null&&zm(Ae,gn,tt,rt,!0)}}e:{if(Ee=de?Js(de):window,Ye=Ee.nodeName&&Ee.nodeName.toLowerCase(),Ye==="select"||Ye==="input"&&Ee.type==="file")var ot=Qy;else if(xm(Ee))if(Sm)ot=nS;else{ot=eS;var ht=Jy}else(Ye=Ee.nodeName)&&Ye.toLowerCase()==="input"&&(Ee.type==="checkbox"||Ee.type==="radio")&&(ot=tS);if(ot&&(ot=ot(i,de))){ym(Ae,ot,l,Te);break e}ht&&ht(i,Ee,de),i==="focusout"&&(ht=Ee._wrapperState)&&ht.controlled&&Ee.type==="number"&&Dt(Ee,"number",Ee.value)}switch(ht=de?Js(de):window,i){case"focusin":(xm(ht)||ht.contentEditable==="true")&&(Ks=ht,Ou=de,sa=null);break;case"focusout":sa=Ou=Ks=null;break;case"mousedown":Bu=!0;break;case"contextmenu":case"mouseup":case"dragend":Bu=!1,bm(Ae,l,Te);break;case"selectionchange":if(sS)break;case"keydown":case"keyup":bm(Ae,l,Te)}var pt;if(Nu)e:{switch(i){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else qs?vm(i,l)&&(St="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(St="onCompositionStart");St&&(pm&&l.locale!=="ko"&&(qs||St!=="onCompositionStart"?St==="onCompositionEnd"&&qs&&(pt=cm()):(Vr=Te,Ru="value"in Vr?Vr.value:Vr.textContent,qs=!0)),ht=Sl(de,St),0<ht.length&&(St=new dm(St,i,null,l,Te),Ae.push({event:St,listeners:ht}),pt?St.data=pt:(pt=_m(l),pt!==null&&(St.data=pt)))),(pt=Yy?qy(i,l):Ky(i,l))&&(de=Sl(de,"onBeforeInput"),0<de.length&&(Te=new dm("onBeforeInput","beforeinput",null,l,Te),Ae.push({event:Te,listeners:de}),Te.data=pt))}Bm(Ae,s)})}function la(i,s,l){return{instance:i,listener:s,currentTarget:l}}function Sl(i,s){for(var l=s+"Capture",f=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=kt(i,l),_!=null&&f.unshift(la(i,_,p)),_=kt(i,s),_!=null&&f.push(la(i,_,p))),i=i.return}return f}function Zs(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function zm(i,s,l,f,p){for(var _=s._reactName,R=[];l!==null&&l!==f;){var O=l,z=O.alternate,de=O.stateNode;if(z!==null&&z===f)break;O.tag===5&&de!==null&&(O=de,p?(z=kt(l,_),z!=null&&R.unshift(la(l,z,O))):p||(z=kt(l,_),z!=null&&R.push(la(l,z,O)))),l=l.return}R.length!==0&&i.push({event:s,listeners:R})}var cS=/\r\n?/g,uS=/\u0000|\uFFFD/g;function Vm(i){return(typeof i=="string"?i:""+i).replace(cS,`
`).replace(uS,"")}function Ml(i,s,l){if(s=Vm(s),Vm(i)!==s&&l)throw Error(t(425))}function El(){}var Wu=null,Xu=null;function ju(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Yu=typeof setTimeout=="function"?setTimeout:void 0,fS=typeof clearTimeout=="function"?clearTimeout:void 0,Hm=typeof Promise=="function"?Promise:void 0,dS=typeof queueMicrotask=="function"?queueMicrotask:typeof Hm<"u"?function(i){return Hm.resolve(null).then(i).catch(hS)}:Yu;function hS(i){setTimeout(function(){throw i})}function qu(i,s){var l=s,f=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(f===0){i.removeChild(p),Qo(s);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=p}while(l);Qo(s)}function Gr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function Gm(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),qi="__reactFiber$"+Qs,ca="__reactProps$"+Qs,pr="__reactContainer$"+Qs,Ku="__reactEvents$"+Qs,pS="__reactListeners$"+Qs,mS="__reactHandles$"+Qs;function gs(i){var s=i[qi];if(s)return s;for(var l=i.parentNode;l;){if(s=l[pr]||l[qi]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=Gm(i);i!==null;){if(l=i[qi])return l;i=Gm(i)}return s}i=l,l=i.parentNode}return null}function ua(i){return i=i[qi]||i[pr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Js(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Tl(i){return i[ca]||null}var $u=[],eo=-1;function Wr(i){return{current:i}}function tn(i){0>eo||(i.current=$u[eo],$u[eo]=null,eo--)}function Qt(i,s){eo++,$u[eo]=i.current,i.current=s}var Xr={},kn=Wr(Xr),Jn=Wr(!1),vs=Xr;function to(i,s){var l=i.type.contextTypes;if(!l)return Xr;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=s[_];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=p),p}function ei(i){return i=i.childContextTypes,i!=null}function wl(){tn(Jn),tn(kn)}function Wm(i,s,l){if(kn.current!==Xr)throw Error(t(168));Qt(kn,s),Qt(Jn,l)}function Xm(i,s,l){var f=i.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var p in f)if(!(p in s))throw Error(t(108,oe(i)||"Unknown",p));return X({},l,f)}function Al(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Xr,vs=kn.current,Qt(kn,i),Qt(Jn,Jn.current),!0}function jm(i,s,l){var f=i.stateNode;if(!f)throw Error(t(169));l?(i=Xm(i,s,vs),f.__reactInternalMemoizedMergedChildContext=i,tn(Jn),tn(kn),Qt(kn,i)):tn(Jn),Qt(Jn,l)}var mr=null,Rl=!1,Zu=!1;function Ym(i){mr===null?mr=[i]:mr.push(i)}function gS(i){Rl=!0,Ym(i)}function jr(){if(!Zu&&mr!==null){Zu=!0;var i=0,s=At;try{var l=mr;for(At=1;i<l.length;i++){var f=l[i];do f=f(!0);while(f!==null)}mr=null,Rl=!1}catch(p){throw mr!==null&&(mr=mr.slice(i+1)),ve(Jt,jr),p}finally{At=s,Zu=!1}}return null}var no=[],io=0,Cl=null,bl=0,_i=[],xi=0,_s=null,gr=1,vr="";function xs(i,s){no[io++]=bl,no[io++]=Cl,Cl=i,bl=s}function qm(i,s,l){_i[xi++]=gr,_i[xi++]=vr,_i[xi++]=_s,_s=i;var f=gr;i=vr;var p=32-ke(f)-1;f&=~(1<<p),l+=1;var _=32-ke(s)+p;if(30<_){var R=p-p%5;_=(f&(1<<R)-1).toString(32),f>>=R,p-=R,gr=1<<32-ke(s)+p|l<<p|f,vr=_+i}else gr=1<<_|l<<p|f,vr=i}function Qu(i){i.return!==null&&(xs(i,1),qm(i,1,0))}function Ju(i){for(;i===Cl;)Cl=no[--io],no[io]=null,bl=no[--io],no[io]=null;for(;i===_s;)_s=_i[--xi],_i[xi]=null,vr=_i[--xi],_i[xi]=null,gr=_i[--xi],_i[xi]=null}var ui=null,fi=null,sn=!1,Ui=null;function Km(i,s){var l=Ei(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function $m(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,ui=i,fi=Gr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,ui=i,fi=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=_s!==null?{id:gr,overflow:vr}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=Ei(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,ui=i,fi=null,!0):!1;default:return!1}}function ef(i){return(i.mode&1)!==0&&(i.flags&128)===0}function tf(i){if(sn){var s=fi;if(s){var l=s;if(!$m(i,s)){if(ef(i))throw Error(t(418));s=Gr(l.nextSibling);var f=ui;s&&$m(i,s)?Km(f,l):(i.flags=i.flags&-4097|2,sn=!1,ui=i)}}else{if(ef(i))throw Error(t(418));i.flags=i.flags&-4097|2,sn=!1,ui=i}}}function Zm(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;ui=i}function Pl(i){if(i!==ui)return!1;if(!sn)return Zm(i),sn=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!ju(i.type,i.memoizedProps)),s&&(s=fi)){if(ef(i))throw Qm(),Error(t(418));for(;s;)Km(i,s),s=Gr(s.nextSibling)}if(Zm(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){fi=Gr(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}fi=null}}else fi=ui?Gr(i.stateNode.nextSibling):null;return!0}function Qm(){for(var i=fi;i;)i=Gr(i.nextSibling)}function ro(){fi=ui=null,sn=!1}function nf(i){Ui===null?Ui=[i]:Ui.push(i)}var vS=b.ReactCurrentBatchConfig;function fa(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,i));var p=f,_=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(R){var O=p.refs;R===null?delete O[_]:O[_]=R},s._stringRef=_,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Dl(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Jm(i){var s=i._init;return s(i._payload)}function e0(i){function s(ie,j){if(i){var le=ie.deletions;le===null?(ie.deletions=[j],ie.flags|=16):le.push(j)}}function l(ie,j){if(!i)return null;for(;j!==null;)s(ie,j),j=j.sibling;return null}function f(ie,j){for(ie=new Map;j!==null;)j.key!==null?ie.set(j.key,j):ie.set(j.index,j),j=j.sibling;return ie}function p(ie,j){return ie=es(ie,j),ie.index=0,ie.sibling=null,ie}function _(ie,j,le){return ie.index=le,i?(le=ie.alternate,le!==null?(le=le.index,le<j?(ie.flags|=2,j):le):(ie.flags|=2,j)):(ie.flags|=1048576,j)}function R(ie){return i&&ie.alternate===null&&(ie.flags|=2),ie}function O(ie,j,le,be){return j===null||j.tag!==6?(j=qf(le,ie.mode,be),j.return=ie,j):(j=p(j,le),j.return=ie,j)}function z(ie,j,le,be){var ot=le.type;return ot===F?Te(ie,j,le.props.children,be,le.key):j!==null&&(j.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===me&&Jm(ot)===j.type)?(be=p(j,le.props),be.ref=fa(ie,j,le),be.return=ie,be):(be=tc(le.type,le.key,le.props,null,ie.mode,be),be.ref=fa(ie,j,le),be.return=ie,be)}function de(ie,j,le,be){return j===null||j.tag!==4||j.stateNode.containerInfo!==le.containerInfo||j.stateNode.implementation!==le.implementation?(j=Kf(le,ie.mode,be),j.return=ie,j):(j=p(j,le.children||[]),j.return=ie,j)}function Te(ie,j,le,be,ot){return j===null||j.tag!==7?(j=Rs(le,ie.mode,be,ot),j.return=ie,j):(j=p(j,le),j.return=ie,j)}function Ae(ie,j,le){if(typeof j=="string"&&j!==""||typeof j=="number")return j=qf(""+j,ie.mode,le),j.return=ie,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case P:return le=tc(j.type,j.key,j.props,null,ie.mode,le),le.ref=fa(ie,null,j),le.return=ie,le;case L:return j=Kf(j,ie.mode,le),j.return=ie,j;case me:var be=j._init;return Ae(ie,be(j._payload),le)}if(Lt(j)||Z(j))return j=Rs(j,ie.mode,le,null),j.return=ie,j;Dl(ie,j)}return null}function Ee(ie,j,le,be){var ot=j!==null?j.key:null;if(typeof le=="string"&&le!==""||typeof le=="number")return ot!==null?null:O(ie,j,""+le,be);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case P:return le.key===ot?z(ie,j,le,be):null;case L:return le.key===ot?de(ie,j,le,be):null;case me:return ot=le._init,Ee(ie,j,ot(le._payload),be)}if(Lt(le)||Z(le))return ot!==null?null:Te(ie,j,le,be,null);Dl(ie,le)}return null}function Ye(ie,j,le,be,ot){if(typeof be=="string"&&be!==""||typeof be=="number")return ie=ie.get(le)||null,O(j,ie,""+be,ot);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case P:return ie=ie.get(be.key===null?le:be.key)||null,z(j,ie,be,ot);case L:return ie=ie.get(be.key===null?le:be.key)||null,de(j,ie,be,ot);case me:var ht=be._init;return Ye(ie,j,le,ht(be._payload),ot)}if(Lt(be)||Z(be))return ie=ie.get(le)||null,Te(j,ie,be,ot,null);Dl(j,be)}return null}function tt(ie,j,le,be){for(var ot=null,ht=null,pt=j,St=j=0,Pn=null;pt!==null&&St<le.length;St++){pt.index>St?(Pn=pt,pt=null):Pn=pt.sibling;var Gt=Ee(ie,pt,le[St],be);if(Gt===null){pt===null&&(pt=Pn);break}i&&pt&&Gt.alternate===null&&s(ie,pt),j=_(Gt,j,St),ht===null?ot=Gt:ht.sibling=Gt,ht=Gt,pt=Pn}if(St===le.length)return l(ie,pt),sn&&xs(ie,St),ot;if(pt===null){for(;St<le.length;St++)pt=Ae(ie,le[St],be),pt!==null&&(j=_(pt,j,St),ht===null?ot=pt:ht.sibling=pt,ht=pt);return sn&&xs(ie,St),ot}for(pt=f(ie,pt);St<le.length;St++)Pn=Ye(pt,ie,St,le[St],be),Pn!==null&&(i&&Pn.alternate!==null&&pt.delete(Pn.key===null?St:Pn.key),j=_(Pn,j,St),ht===null?ot=Pn:ht.sibling=Pn,ht=Pn);return i&&pt.forEach(function(ts){return s(ie,ts)}),sn&&xs(ie,St),ot}function rt(ie,j,le,be){var ot=Z(le);if(typeof ot!="function")throw Error(t(150));if(le=ot.call(le),le==null)throw Error(t(151));for(var ht=ot=null,pt=j,St=j=0,Pn=null,Gt=le.next();pt!==null&&!Gt.done;St++,Gt=le.next()){pt.index>St?(Pn=pt,pt=null):Pn=pt.sibling;var ts=Ee(ie,pt,Gt.value,be);if(ts===null){pt===null&&(pt=Pn);break}i&&pt&&ts.alternate===null&&s(ie,pt),j=_(ts,j,St),ht===null?ot=ts:ht.sibling=ts,ht=ts,pt=Pn}if(Gt.done)return l(ie,pt),sn&&xs(ie,St),ot;if(pt===null){for(;!Gt.done;St++,Gt=le.next())Gt=Ae(ie,Gt.value,be),Gt!==null&&(j=_(Gt,j,St),ht===null?ot=Gt:ht.sibling=Gt,ht=Gt);return sn&&xs(ie,St),ot}for(pt=f(ie,pt);!Gt.done;St++,Gt=le.next())Gt=Ye(pt,ie,St,Gt.value,be),Gt!==null&&(i&&Gt.alternate!==null&&pt.delete(Gt.key===null?St:Gt.key),j=_(Gt,j,St),ht===null?ot=Gt:ht.sibling=Gt,ht=Gt);return i&&pt.forEach(function($S){return s(ie,$S)}),sn&&xs(ie,St),ot}function gn(ie,j,le,be){if(typeof le=="object"&&le!==null&&le.type===F&&le.key===null&&(le=le.props.children),typeof le=="object"&&le!==null){switch(le.$$typeof){case P:e:{for(var ot=le.key,ht=j;ht!==null;){if(ht.key===ot){if(ot=le.type,ot===F){if(ht.tag===7){l(ie,ht.sibling),j=p(ht,le.props.children),j.return=ie,ie=j;break e}}else if(ht.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===me&&Jm(ot)===ht.type){l(ie,ht.sibling),j=p(ht,le.props),j.ref=fa(ie,ht,le),j.return=ie,ie=j;break e}l(ie,ht);break}else s(ie,ht);ht=ht.sibling}le.type===F?(j=Rs(le.props.children,ie.mode,be,le.key),j.return=ie,ie=j):(be=tc(le.type,le.key,le.props,null,ie.mode,be),be.ref=fa(ie,j,le),be.return=ie,ie=be)}return R(ie);case L:e:{for(ht=le.key;j!==null;){if(j.key===ht)if(j.tag===4&&j.stateNode.containerInfo===le.containerInfo&&j.stateNode.implementation===le.implementation){l(ie,j.sibling),j=p(j,le.children||[]),j.return=ie,ie=j;break e}else{l(ie,j);break}else s(ie,j);j=j.sibling}j=Kf(le,ie.mode,be),j.return=ie,ie=j}return R(ie);case me:return ht=le._init,gn(ie,j,ht(le._payload),be)}if(Lt(le))return tt(ie,j,le,be);if(Z(le))return rt(ie,j,le,be);Dl(ie,le)}return typeof le=="string"&&le!==""||typeof le=="number"?(le=""+le,j!==null&&j.tag===6?(l(ie,j.sibling),j=p(j,le),j.return=ie,ie=j):(l(ie,j),j=qf(le,ie.mode,be),j.return=ie,ie=j),R(ie)):l(ie,j)}return gn}var so=e0(!0),t0=e0(!1),Ll=Wr(null),Nl=null,oo=null,rf=null;function sf(){rf=oo=Nl=null}function of(i){var s=Ll.current;tn(Ll),i._currentValue=s}function af(i,s,l){for(;i!==null;){var f=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),i===l)break;i=i.return}}function ao(i,s){Nl=i,rf=oo=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(ti=!0),i.firstContext=null)}function yi(i){var s=i._currentValue;if(rf!==i)if(i={context:i,memoizedValue:s,next:null},oo===null){if(Nl===null)throw Error(t(308));oo=i,Nl.dependencies={lanes:0,firstContext:i}}else oo=oo.next=i;return s}var ys=null;function lf(i){ys===null?ys=[i]:ys.push(i)}function n0(i,s,l,f){var p=s.interleaved;return p===null?(l.next=l,lf(s)):(l.next=p.next,p.next=l),s.interleaved=l,_r(i,f)}function _r(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Yr=!1;function cf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function i0(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function xr(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function qr(i,s,l){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,(zt&2)!==0){var p=f.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),f.pending=s,_r(i,l)}return p=f.interleaved,p===null?(s.next=s,lf(f)):(s.next=p.next,p.next=s),f.interleaved=s,_r(i,l)}function Il(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var f=s.lanes;f&=i.pendingLanes,l|=f,s.lanes=l,Bn(i,l)}}function r0(i,s){var l=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var R={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=R:_=_.next=R,l=l.next}while(l!==null);_===null?p=_=s:_=_.next=s}else p=_=s;l={baseState:f.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:f.shared,effects:f.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function Ul(i,s,l,f){var p=i.updateQueue;Yr=!1;var _=p.firstBaseUpdate,R=p.lastBaseUpdate,O=p.shared.pending;if(O!==null){p.shared.pending=null;var z=O,de=z.next;z.next=null,R===null?_=de:R.next=de,R=z;var Te=i.alternate;Te!==null&&(Te=Te.updateQueue,O=Te.lastBaseUpdate,O!==R&&(O===null?Te.firstBaseUpdate=de:O.next=de,Te.lastBaseUpdate=z))}if(_!==null){var Ae=p.baseState;R=0,Te=de=z=null,O=_;do{var Ee=O.lane,Ye=O.eventTime;if((f&Ee)===Ee){Te!==null&&(Te=Te.next={eventTime:Ye,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var tt=i,rt=O;switch(Ee=s,Ye=l,rt.tag){case 1:if(tt=rt.payload,typeof tt=="function"){Ae=tt.call(Ye,Ae,Ee);break e}Ae=tt;break e;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=rt.payload,Ee=typeof tt=="function"?tt.call(Ye,Ae,Ee):tt,Ee==null)break e;Ae=X({},Ae,Ee);break e;case 2:Yr=!0}}O.callback!==null&&O.lane!==0&&(i.flags|=64,Ee=p.effects,Ee===null?p.effects=[O]:Ee.push(O))}else Ye={eventTime:Ye,lane:Ee,tag:O.tag,payload:O.payload,callback:O.callback,next:null},Te===null?(de=Te=Ye,z=Ae):Te=Te.next=Ye,R|=Ee;if(O=O.next,O===null){if(O=p.shared.pending,O===null)break;Ee=O,O=Ee.next,Ee.next=null,p.lastBaseUpdate=Ee,p.shared.pending=null}}while(!0);if(Te===null&&(z=Ae),p.baseState=z,p.firstBaseUpdate=de,p.lastBaseUpdate=Te,s=p.shared.interleaved,s!==null){p=s;do R|=p.lane,p=p.next;while(p!==s)}else _===null&&(p.shared.lanes=0);Es|=R,i.lanes=R,i.memoizedState=Ae}}function s0(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var f=i[s],p=f.callback;if(p!==null){if(f.callback=null,f=l,typeof p!="function")throw Error(t(191,p));p.call(f)}}}var da={},Ki=Wr(da),ha=Wr(da),pa=Wr(da);function Ss(i){if(i===da)throw Error(t(174));return i}function uf(i,s){switch(Qt(pa,s),Qt(ha,i),Qt(Ki,da),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:E(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=E(s,i)}tn(Ki),Qt(Ki,s)}function lo(){tn(Ki),tn(ha),tn(pa)}function o0(i){Ss(pa.current);var s=Ss(Ki.current),l=E(s,i.type);s!==l&&(Qt(ha,i),Qt(Ki,l))}function ff(i){ha.current===i&&(tn(Ki),tn(ha))}var on=Wr(0);function Fl(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var df=[];function hf(){for(var i=0;i<df.length;i++)df[i]._workInProgressVersionPrimary=null;df.length=0}var Ol=b.ReactCurrentDispatcher,pf=b.ReactCurrentBatchConfig,Ms=0,an=null,Mn=null,Cn=null,Bl=!1,ma=!1,ga=0,_S=0;function zn(){throw Error(t(321))}function mf(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!Ii(i[l],s[l]))return!1;return!0}function gf(i,s,l,f,p,_){if(Ms=_,an=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Ol.current=i===null||i.memoizedState===null?MS:ES,i=l(f,p),ma){_=0;do{if(ma=!1,ga=0,25<=_)throw Error(t(301));_+=1,Cn=Mn=null,s.updateQueue=null,Ol.current=TS,i=l(f,p)}while(ma)}if(Ol.current=Vl,s=Mn!==null&&Mn.next!==null,Ms=0,Cn=Mn=an=null,Bl=!1,s)throw Error(t(300));return i}function vf(){var i=ga!==0;return ga=0,i}function $i(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cn===null?an.memoizedState=Cn=i:Cn=Cn.next=i,Cn}function Si(){if(Mn===null){var i=an.alternate;i=i!==null?i.memoizedState:null}else i=Mn.next;var s=Cn===null?an.memoizedState:Cn.next;if(s!==null)Cn=s,Mn=i;else{if(i===null)throw Error(t(310));Mn=i,i={memoizedState:Mn.memoizedState,baseState:Mn.baseState,baseQueue:Mn.baseQueue,queue:Mn.queue,next:null},Cn===null?an.memoizedState=Cn=i:Cn=Cn.next=i}return Cn}function va(i,s){return typeof s=="function"?s(i):s}function _f(i){var s=Si(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=Mn,p=f.baseQueue,_=l.pending;if(_!==null){if(p!==null){var R=p.next;p.next=_.next,_.next=R}f.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,f=f.baseState;var O=R=null,z=null,de=_;do{var Te=de.lane;if((Ms&Te)===Te)z!==null&&(z=z.next={lane:0,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),f=de.hasEagerState?de.eagerState:i(f,de.action);else{var Ae={lane:Te,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null};z===null?(O=z=Ae,R=f):z=z.next=Ae,an.lanes|=Te,Es|=Te}de=de.next}while(de!==null&&de!==_);z===null?R=f:z.next=O,Ii(f,s.memoizedState)||(ti=!0),s.memoizedState=f,s.baseState=R,s.baseQueue=z,l.lastRenderedState=f}if(i=l.interleaved,i!==null){p=i;do _=p.lane,an.lanes|=_,Es|=_,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function xf(i){var s=Si(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=l.dispatch,p=l.pending,_=s.memoizedState;if(p!==null){l.pending=null;var R=p=p.next;do _=i(_,R.action),R=R.next;while(R!==p);Ii(_,s.memoizedState)||(ti=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),l.lastRenderedState=_}return[_,f]}function a0(){}function l0(i,s){var l=an,f=Si(),p=s(),_=!Ii(f.memoizedState,p);if(_&&(f.memoizedState=p,ti=!0),f=f.queue,yf(f0.bind(null,l,f,i),[i]),f.getSnapshot!==s||_||Cn!==null&&Cn.memoizedState.tag&1){if(l.flags|=2048,_a(9,u0.bind(null,l,f,p,s),void 0,null),bn===null)throw Error(t(349));(Ms&30)!==0||c0(l,s,p)}return p}function c0(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=an.updateQueue,s===null?(s={lastEffect:null,stores:null},an.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function u0(i,s,l,f){s.value=l,s.getSnapshot=f,d0(s)&&h0(i)}function f0(i,s,l){return l(function(){d0(s)&&h0(i)})}function d0(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!Ii(i,l)}catch{return!0}}function h0(i){var s=_r(i,1);s!==null&&ki(s,i,1,-1)}function p0(i){var s=$i();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:i},s.queue=i,i=i.dispatch=SS.bind(null,an,i),[s.memoizedState,i]}function _a(i,s,l,f){return i={tag:i,create:s,destroy:l,deps:f,next:null},s=an.updateQueue,s===null?(s={lastEffect:null,stores:null},an.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(f=l.next,l.next=i,i.next=f,s.lastEffect=i)),i}function m0(){return Si().memoizedState}function kl(i,s,l,f){var p=$i();an.flags|=i,p.memoizedState=_a(1|s,l,void 0,f===void 0?null:f)}function zl(i,s,l,f){var p=Si();f=f===void 0?null:f;var _=void 0;if(Mn!==null){var R=Mn.memoizedState;if(_=R.destroy,f!==null&&mf(f,R.deps)){p.memoizedState=_a(s,l,_,f);return}}an.flags|=i,p.memoizedState=_a(1|s,l,_,f)}function g0(i,s){return kl(8390656,8,i,s)}function yf(i,s){return zl(2048,8,i,s)}function v0(i,s){return zl(4,2,i,s)}function _0(i,s){return zl(4,4,i,s)}function x0(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function y0(i,s,l){return l=l!=null?l.concat([i]):null,zl(4,4,x0.bind(null,s,i),l)}function Sf(){}function S0(i,s){var l=Si();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&mf(s,f[1])?f[0]:(l.memoizedState=[i,s],i)}function M0(i,s){var l=Si();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&mf(s,f[1])?f[0]:(i=i(),l.memoizedState=[i,s],i)}function E0(i,s,l){return(Ms&21)===0?(i.baseState&&(i.baseState=!1,ti=!0),i.memoizedState=l):(Ii(l,s)||(l=Sn(),an.lanes|=l,Es|=l,i.baseState=!0),s)}function xS(i,s){var l=At;At=l!==0&&4>l?l:4,i(!0);var f=pf.transition;pf.transition={};try{i(!1),s()}finally{At=l,pf.transition=f}}function T0(){return Si().memoizedState}function yS(i,s,l){var f=Qr(i);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},w0(i))A0(s,l);else if(l=n0(i,s,l,f),l!==null){var p=$n();ki(l,i,f,p),R0(l,s,f)}}function SS(i,s,l){var f=Qr(i),p={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(w0(i))A0(s,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var R=s.lastRenderedState,O=_(R,l);if(p.hasEagerState=!0,p.eagerState=O,Ii(O,R)){var z=s.interleaved;z===null?(p.next=p,lf(s)):(p.next=z.next,z.next=p),s.interleaved=p;return}}catch{}finally{}l=n0(i,s,p,f),l!==null&&(p=$n(),ki(l,i,f,p),R0(l,s,f))}}function w0(i){var s=i.alternate;return i===an||s!==null&&s===an}function A0(i,s){ma=Bl=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function R0(i,s,l){if((l&4194240)!==0){var f=s.lanes;f&=i.pendingLanes,l|=f,s.lanes=l,Bn(i,l)}}var Vl={readContext:yi,useCallback:zn,useContext:zn,useEffect:zn,useImperativeHandle:zn,useInsertionEffect:zn,useLayoutEffect:zn,useMemo:zn,useReducer:zn,useRef:zn,useState:zn,useDebugValue:zn,useDeferredValue:zn,useTransition:zn,useMutableSource:zn,useSyncExternalStore:zn,useId:zn,unstable_isNewReconciler:!1},MS={readContext:yi,useCallback:function(i,s){return $i().memoizedState=[i,s===void 0?null:s],i},useContext:yi,useEffect:g0,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,kl(4194308,4,x0.bind(null,s,i),l)},useLayoutEffect:function(i,s){return kl(4194308,4,i,s)},useInsertionEffect:function(i,s){return kl(4,2,i,s)},useMemo:function(i,s){var l=$i();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var f=$i();return s=l!==void 0?l(s):s,f.memoizedState=f.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},f.queue=i,i=i.dispatch=yS.bind(null,an,i),[f.memoizedState,i]},useRef:function(i){var s=$i();return i={current:i},s.memoizedState=i},useState:p0,useDebugValue:Sf,useDeferredValue:function(i){return $i().memoizedState=i},useTransition:function(){var i=p0(!1),s=i[0];return i=xS.bind(null,i[1]),$i().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var f=an,p=$i();if(sn){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),bn===null)throw Error(t(349));(Ms&30)!==0||c0(f,s,l)}p.memoizedState=l;var _={value:l,getSnapshot:s};return p.queue=_,g0(f0.bind(null,f,_,i),[i]),f.flags|=2048,_a(9,u0.bind(null,f,_,l,s),void 0,null),l},useId:function(){var i=$i(),s=bn.identifierPrefix;if(sn){var l=vr,f=gr;l=(f&~(1<<32-ke(f)-1)).toString(32)+l,s=":"+s+"R"+l,l=ga++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=_S++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},ES={readContext:yi,useCallback:S0,useContext:yi,useEffect:yf,useImperativeHandle:y0,useInsertionEffect:v0,useLayoutEffect:_0,useMemo:M0,useReducer:_f,useRef:m0,useState:function(){return _f(va)},useDebugValue:Sf,useDeferredValue:function(i){var s=Si();return E0(s,Mn.memoizedState,i)},useTransition:function(){var i=_f(va)[0],s=Si().memoizedState;return[i,s]},useMutableSource:a0,useSyncExternalStore:l0,useId:T0,unstable_isNewReconciler:!1},TS={readContext:yi,useCallback:S0,useContext:yi,useEffect:yf,useImperativeHandle:y0,useInsertionEffect:v0,useLayoutEffect:_0,useMemo:M0,useReducer:xf,useRef:m0,useState:function(){return xf(va)},useDebugValue:Sf,useDeferredValue:function(i){var s=Si();return Mn===null?s.memoizedState=i:E0(s,Mn.memoizedState,i)},useTransition:function(){var i=xf(va)[0],s=Si().memoizedState;return[i,s]},useMutableSource:a0,useSyncExternalStore:l0,useId:T0,unstable_isNewReconciler:!1};function Fi(i,s){if(i&&i.defaultProps){s=X({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function Mf(i,s,l,f){s=i.memoizedState,l=l(f,s),l=l==null?s:X({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Hl={isMounted:function(i){return(i=i._reactInternals)?Rn(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var f=$n(),p=Qr(i),_=xr(f,p);_.payload=s,l!=null&&(_.callback=l),s=qr(i,_,p),s!==null&&(ki(s,i,p,f),Il(s,i,p))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var f=$n(),p=Qr(i),_=xr(f,p);_.tag=1,_.payload=s,l!=null&&(_.callback=l),s=qr(i,_,p),s!==null&&(ki(s,i,p,f),Il(s,i,p))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=$n(),f=Qr(i),p=xr(l,f);p.tag=2,s!=null&&(p.callback=s),s=qr(i,p,f),s!==null&&(ki(s,i,f,l),Il(s,i,f))}};function C0(i,s,l,f,p,_,R){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,_,R):s.prototype&&s.prototype.isPureReactComponent?!ra(l,f)||!ra(p,_):!0}function b0(i,s,l){var f=!1,p=Xr,_=s.contextType;return typeof _=="object"&&_!==null?_=yi(_):(p=ei(s)?vs:kn.current,f=s.contextTypes,_=(f=f!=null)?to(i,p):Xr),s=new s(l,_),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Hl,i.stateNode=s,s._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),s}function P0(i,s,l,f){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,f),s.state!==i&&Hl.enqueueReplaceState(s,s.state,null)}function Ef(i,s,l,f){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},cf(i);var _=s.contextType;typeof _=="object"&&_!==null?p.context=yi(_):(_=ei(s)?vs:kn.current,p.context=to(i,_)),p.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(Mf(i,s,_,l),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&Hl.enqueueReplaceState(p,p.state,null),Ul(i,l,p,f),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function co(i,s){try{var l="",f=s;do l+=We(f),f=f.return;while(f);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:s,stack:p,digest:null}}function Tf(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function wf(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var wS=typeof WeakMap=="function"?WeakMap:Map;function D0(i,s,l){l=xr(-1,l),l.tag=3,l.payload={element:null};var f=s.value;return l.callback=function(){Kl||(Kl=!0,zf=f),wf(i,s)},l}function L0(i,s,l){l=xr(-1,l),l.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var p=s.value;l.payload=function(){return f(p)},l.callback=function(){wf(i,s)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){wf(i,s),typeof f!="function"&&($r===null?$r=new Set([this]):$r.add(this));var R=s.stack;this.componentDidCatch(s.value,{componentStack:R!==null?R:""})}),l}function N0(i,s,l){var f=i.pingCache;if(f===null){f=i.pingCache=new wS;var p=new Set;f.set(s,p)}else p=f.get(s),p===void 0&&(p=new Set,f.set(s,p));p.has(l)||(p.add(l),i=kS.bind(null,i,s,l),s.then(i,i))}function I0(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function U0(i,s,l,f,p){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=xr(-1,1),s.tag=2,qr(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var AS=b.ReactCurrentOwner,ti=!1;function Kn(i,s,l,f){s.child=i===null?t0(s,null,l,f):so(s,i.child,l,f)}function F0(i,s,l,f,p){l=l.render;var _=s.ref;return ao(s,p),f=gf(i,s,l,f,_,p),l=vf(),i!==null&&!ti?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,yr(i,s,p)):(sn&&l&&Qu(s),s.flags|=1,Kn(i,s,f,p),s.child)}function O0(i,s,l,f,p){if(i===null){var _=l.type;return typeof _=="function"&&!Yf(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=_,B0(i,s,_,f,p)):(i=tc(l.type,null,f,s,s.mode,p),i.ref=s.ref,i.return=s,s.child=i)}if(_=i.child,(i.lanes&p)===0){var R=_.memoizedProps;if(l=l.compare,l=l!==null?l:ra,l(R,f)&&i.ref===s.ref)return yr(i,s,p)}return s.flags|=1,i=es(_,f),i.ref=s.ref,i.return=s,s.child=i}function B0(i,s,l,f,p){if(i!==null){var _=i.memoizedProps;if(ra(_,f)&&i.ref===s.ref)if(ti=!1,s.pendingProps=f=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(ti=!0);else return s.lanes=i.lanes,yr(i,s,p)}return Af(i,s,l,f,p)}function k0(i,s,l){var f=s.pendingProps,p=f.children,_=i!==null?i.memoizedState:null;if(f.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qt(fo,di),di|=l;else{if((l&1073741824)===0)return i=_!==null?_.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Qt(fo,di),di|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=_!==null?_.baseLanes:l,Qt(fo,di),di|=f}else _!==null?(f=_.baseLanes|l,s.memoizedState=null):f=l,Qt(fo,di),di|=f;return Kn(i,s,p,l),s.child}function z0(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Af(i,s,l,f,p){var _=ei(l)?vs:kn.current;return _=to(s,_),ao(s,p),l=gf(i,s,l,f,_,p),f=vf(),i!==null&&!ti?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,yr(i,s,p)):(sn&&f&&Qu(s),s.flags|=1,Kn(i,s,l,p),s.child)}function V0(i,s,l,f,p){if(ei(l)){var _=!0;Al(s)}else _=!1;if(ao(s,p),s.stateNode===null)Wl(i,s),b0(s,l,f),Ef(s,l,f,p),f=!0;else if(i===null){var R=s.stateNode,O=s.memoizedProps;R.props=O;var z=R.context,de=l.contextType;typeof de=="object"&&de!==null?de=yi(de):(de=ei(l)?vs:kn.current,de=to(s,de));var Te=l.getDerivedStateFromProps,Ae=typeof Te=="function"||typeof R.getSnapshotBeforeUpdate=="function";Ae||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(O!==f||z!==de)&&P0(s,R,f,de),Yr=!1;var Ee=s.memoizedState;R.state=Ee,Ul(s,f,R,p),z=s.memoizedState,O!==f||Ee!==z||Jn.current||Yr?(typeof Te=="function"&&(Mf(s,l,Te,f),z=s.memoizedState),(O=Yr||C0(s,l,O,f,Ee,z,de))?(Ae||typeof R.UNSAFE_componentWillMount!="function"&&typeof R.componentWillMount!="function"||(typeof R.componentWillMount=="function"&&R.componentWillMount(),typeof R.UNSAFE_componentWillMount=="function"&&R.UNSAFE_componentWillMount()),typeof R.componentDidMount=="function"&&(s.flags|=4194308)):(typeof R.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=z),R.props=f,R.state=z,R.context=de,f=O):(typeof R.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{R=s.stateNode,i0(i,s),O=s.memoizedProps,de=s.type===s.elementType?O:Fi(s.type,O),R.props=de,Ae=s.pendingProps,Ee=R.context,z=l.contextType,typeof z=="object"&&z!==null?z=yi(z):(z=ei(l)?vs:kn.current,z=to(s,z));var Ye=l.getDerivedStateFromProps;(Te=typeof Ye=="function"||typeof R.getSnapshotBeforeUpdate=="function")||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(O!==Ae||Ee!==z)&&P0(s,R,f,z),Yr=!1,Ee=s.memoizedState,R.state=Ee,Ul(s,f,R,p);var tt=s.memoizedState;O!==Ae||Ee!==tt||Jn.current||Yr?(typeof Ye=="function"&&(Mf(s,l,Ye,f),tt=s.memoizedState),(de=Yr||C0(s,l,de,f,Ee,tt,z)||!1)?(Te||typeof R.UNSAFE_componentWillUpdate!="function"&&typeof R.componentWillUpdate!="function"||(typeof R.componentWillUpdate=="function"&&R.componentWillUpdate(f,tt,z),typeof R.UNSAFE_componentWillUpdate=="function"&&R.UNSAFE_componentWillUpdate(f,tt,z)),typeof R.componentDidUpdate=="function"&&(s.flags|=4),typeof R.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof R.componentDidUpdate!="function"||O===i.memoizedProps&&Ee===i.memoizedState||(s.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||O===i.memoizedProps&&Ee===i.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=tt),R.props=f,R.state=tt,R.context=z,f=de):(typeof R.componentDidUpdate!="function"||O===i.memoizedProps&&Ee===i.memoizedState||(s.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||O===i.memoizedProps&&Ee===i.memoizedState||(s.flags|=1024),f=!1)}return Rf(i,s,l,f,_,p)}function Rf(i,s,l,f,p,_){z0(i,s);var R=(s.flags&128)!==0;if(!f&&!R)return p&&jm(s,l,!1),yr(i,s,_);f=s.stateNode,AS.current=s;var O=R&&typeof l.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,i!==null&&R?(s.child=so(s,i.child,null,_),s.child=so(s,null,O,_)):Kn(i,s,O,_),s.memoizedState=f.state,p&&jm(s,l,!0),s.child}function H0(i){var s=i.stateNode;s.pendingContext?Wm(i,s.pendingContext,s.pendingContext!==s.context):s.context&&Wm(i,s.context,!1),uf(i,s.containerInfo)}function G0(i,s,l,f,p){return ro(),nf(p),s.flags|=256,Kn(i,s,l,f),s.child}var Cf={dehydrated:null,treeContext:null,retryLane:0};function bf(i){return{baseLanes:i,cachePool:null,transitions:null}}function W0(i,s,l){var f=s.pendingProps,p=on.current,_=!1,R=(s.flags&128)!==0,O;if((O=R)||(O=i!==null&&i.memoizedState===null?!1:(p&2)!==0),O?(_=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Qt(on,p&1),i===null)return tf(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(R=f.children,i=f.fallback,_?(f=s.mode,_=s.child,R={mode:"hidden",children:R},(f&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=R):_=nc(R,f,0,null),i=Rs(i,f,l,null),_.return=s,i.return=s,_.sibling=i,s.child=_,s.child.memoizedState=bf(l),s.memoizedState=Cf,i):Pf(s,R));if(p=i.memoizedState,p!==null&&(O=p.dehydrated,O!==null))return RS(i,s,R,f,O,p,l);if(_){_=f.fallback,R=s.mode,p=i.child,O=p.sibling;var z={mode:"hidden",children:f.children};return(R&1)===0&&s.child!==p?(f=s.child,f.childLanes=0,f.pendingProps=z,s.deletions=null):(f=es(p,z),f.subtreeFlags=p.subtreeFlags&14680064),O!==null?_=es(O,_):(_=Rs(_,R,l,null),_.flags|=2),_.return=s,f.return=s,f.sibling=_,s.child=f,f=_,_=s.child,R=i.child.memoizedState,R=R===null?bf(l):{baseLanes:R.baseLanes|l,cachePool:null,transitions:R.transitions},_.memoizedState=R,_.childLanes=i.childLanes&~l,s.memoizedState=Cf,f}return _=i.child,i=_.sibling,f=es(_,{mode:"visible",children:f.children}),(s.mode&1)===0&&(f.lanes=l),f.return=s,f.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=f,s.memoizedState=null,f}function Pf(i,s){return s=nc({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Gl(i,s,l,f){return f!==null&&nf(f),so(s,i.child,null,l),i=Pf(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function RS(i,s,l,f,p,_,R){if(l)return s.flags&256?(s.flags&=-257,f=Tf(Error(t(422))),Gl(i,s,R,f)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(_=f.fallback,p=s.mode,f=nc({mode:"visible",children:f.children},p,0,null),_=Rs(_,p,R,null),_.flags|=2,f.return=s,_.return=s,f.sibling=_,s.child=f,(s.mode&1)!==0&&so(s,i.child,null,R),s.child.memoizedState=bf(R),s.memoizedState=Cf,_);if((s.mode&1)===0)return Gl(i,s,R,null);if(p.data==="$!"){if(f=p.nextSibling&&p.nextSibling.dataset,f)var O=f.dgst;return f=O,_=Error(t(419)),f=Tf(_,f,void 0),Gl(i,s,R,f)}if(O=(R&i.childLanes)!==0,ti||O){if(f=bn,f!==null){switch(R&-R){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(f.suspendedLanes|R))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,_r(i,p),ki(f,i,p,-1))}return jf(),f=Tf(Error(t(421))),Gl(i,s,R,f)}return p.data==="$?"?(s.flags|=128,s.child=i.child,s=zS.bind(null,i),p._reactRetry=s,null):(i=_.treeContext,fi=Gr(p.nextSibling),ui=s,sn=!0,Ui=null,i!==null&&(_i[xi++]=gr,_i[xi++]=vr,_i[xi++]=_s,gr=i.id,vr=i.overflow,_s=s),s=Pf(s,f.children),s.flags|=4096,s)}function X0(i,s,l){i.lanes|=s;var f=i.alternate;f!==null&&(f.lanes|=s),af(i.return,s,l)}function Df(i,s,l,f,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:p}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=f,_.tail=l,_.tailMode=p)}function j0(i,s,l){var f=s.pendingProps,p=f.revealOrder,_=f.tail;if(Kn(i,s,f.children,l),f=on.current,(f&2)!==0)f=f&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&X0(i,l,s);else if(i.tag===19)X0(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(Qt(on,f),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(l=s.child,p=null;l!==null;)i=l.alternate,i!==null&&Fl(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=s.child,s.child=null):(p=l.sibling,l.sibling=null),Df(s,!1,p,l,_);break;case"backwards":for(l=null,p=s.child,s.child=null;p!==null;){if(i=p.alternate,i!==null&&Fl(i)===null){s.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}Df(s,!0,l,null,_);break;case"together":Df(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Wl(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function yr(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),Es|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=es(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=es(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function CS(i,s,l){switch(s.tag){case 3:H0(s),ro();break;case 5:o0(s);break;case 1:ei(s.type)&&Al(s);break;case 4:uf(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,p=s.memoizedProps.value;Qt(Ll,f._currentValue),f._currentValue=p;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(Qt(on,on.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?W0(i,s,l):(Qt(on,on.current&1),i=yr(i,s,l),i!==null?i.sibling:null);Qt(on,on.current&1);break;case 19:if(f=(l&s.childLanes)!==0,(i.flags&128)!==0){if(f)return j0(i,s,l);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Qt(on,on.current),f)break;return null;case 22:case 23:return s.lanes=0,k0(i,s,l)}return yr(i,s,l)}var Y0,Lf,q0,K0;Y0=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Lf=function(){},q0=function(i,s,l,f){var p=i.memoizedProps;if(p!==f){i=s.stateNode,Ss(Ki.current);var _=null;switch(l){case"input":p=dt(i,p),f=dt(i,f),_=[];break;case"select":p=X({},p,{value:void 0}),f=X({},f,{value:void 0}),_=[];break;case"textarea":p=Vt(i,p),f=Vt(i,f),_=[];break;default:typeof p.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=El)}nt(l,f);var R;l=null;for(de in p)if(!f.hasOwnProperty(de)&&p.hasOwnProperty(de)&&p[de]!=null)if(de==="style"){var O=p[de];for(R in O)O.hasOwnProperty(R)&&(l||(l={}),l[R]="")}else de!=="dangerouslySetInnerHTML"&&de!=="children"&&de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&de!=="autoFocus"&&(o.hasOwnProperty(de)?_||(_=[]):(_=_||[]).push(de,null));for(de in f){var z=f[de];if(O=p!=null?p[de]:void 0,f.hasOwnProperty(de)&&z!==O&&(z!=null||O!=null))if(de==="style")if(O){for(R in O)!O.hasOwnProperty(R)||z&&z.hasOwnProperty(R)||(l||(l={}),l[R]="");for(R in z)z.hasOwnProperty(R)&&O[R]!==z[R]&&(l||(l={}),l[R]=z[R])}else l||(_||(_=[]),_.push(de,l)),l=z;else de==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,O=O?O.__html:void 0,z!=null&&O!==z&&(_=_||[]).push(de,z)):de==="children"?typeof z!="string"&&typeof z!="number"||(_=_||[]).push(de,""+z):de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&(o.hasOwnProperty(de)?(z!=null&&de==="onScroll"&&en("scroll",i),_||O===z||(_=[])):(_=_||[]).push(de,z))}l&&(_=_||[]).push("style",l);var de=_;(s.updateQueue=de)&&(s.flags|=4)}},K0=function(i,s,l,f){l!==f&&(s.flags|=4)};function xa(i,s){if(!sn)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function Vn(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,f=0;if(s)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,f|=p.subtreeFlags&14680064,f|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,f|=p.subtreeFlags,f|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=f,i.childLanes=l,s}function bS(i,s,l){var f=s.pendingProps;switch(Ju(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vn(s),null;case 1:return ei(s.type)&&wl(),Vn(s),null;case 3:return f=s.stateNode,lo(),tn(Jn),tn(kn),hf(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(Pl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Ui!==null&&(Gf(Ui),Ui=null))),Lf(i,s),Vn(s),null;case 5:ff(s);var p=Ss(pa.current);if(l=s.type,i!==null&&s.stateNode!=null)q0(i,s,l,f,p),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return Vn(s),null}if(i=Ss(Ki.current),Pl(s)){f=s.stateNode,l=s.type;var _=s.memoizedProps;switch(f[qi]=s,f[ca]=_,i=(s.mode&1)!==0,l){case"dialog":en("cancel",f),en("close",f);break;case"iframe":case"object":case"embed":en("load",f);break;case"video":case"audio":for(p=0;p<oa.length;p++)en(oa[p],f);break;case"source":en("error",f);break;case"img":case"image":case"link":en("error",f),en("load",f);break;case"details":en("toggle",f);break;case"input":xt(f,_),en("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!_.multiple},en("invalid",f);break;case"textarea":V(f,_),en("invalid",f)}nt(l,_),p=null;for(var R in _)if(_.hasOwnProperty(R)){var O=_[R];R==="children"?typeof O=="string"?f.textContent!==O&&(_.suppressHydrationWarning!==!0&&Ml(f.textContent,O,i),p=["children",O]):typeof O=="number"&&f.textContent!==""+O&&(_.suppressHydrationWarning!==!0&&Ml(f.textContent,O,i),p=["children",""+O]):o.hasOwnProperty(R)&&O!=null&&R==="onScroll"&&en("scroll",f)}switch(l){case"input":Me(f),ft(f,_,!0);break;case"textarea":Me(f),wt(f);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(f.onclick=El)}f=p,s.updateQueue=f,f!==null&&(s.flags|=4)}else{R=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=U(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=R.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=R.createElement(l,{is:f.is}):(i=R.createElement(l),l==="select"&&(R=i,f.multiple?R.multiple=!0:f.size&&(R.size=f.size))):i=R.createElementNS(i,l),i[qi]=s,i[ca]=f,Y0(i,s,!1,!1),s.stateNode=i;e:{switch(R=Be(l,f),l){case"dialog":en("cancel",i),en("close",i),p=f;break;case"iframe":case"object":case"embed":en("load",i),p=f;break;case"video":case"audio":for(p=0;p<oa.length;p++)en(oa[p],i);p=f;break;case"source":en("error",i),p=f;break;case"img":case"image":case"link":en("error",i),en("load",i),p=f;break;case"details":en("toggle",i),p=f;break;case"input":xt(i,f),p=dt(i,f),en("invalid",i);break;case"option":p=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},p=X({},f,{value:void 0}),en("invalid",i);break;case"textarea":V(i,f),p=Vt(i,f),en("invalid",i);break;default:p=f}nt(l,p),O=p;for(_ in O)if(O.hasOwnProperty(_)){var z=O[_];_==="style"?xe(i,z):_==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&ae(i,z)):_==="children"?typeof z=="string"?(l!=="textarea"||z!=="")&&pe(i,z):typeof z=="number"&&pe(i,""+z):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?z!=null&&_==="onScroll"&&en("scroll",i):z!=null&&I(i,_,z,R))}switch(l){case"input":Me(i),ft(i,f,!1);break;case"textarea":Me(i),wt(i);break;case"option":f.value!=null&&i.setAttribute("value",""+fe(f.value));break;case"select":i.multiple=!!f.multiple,_=f.value,_!=null?Ct(i,!!f.multiple,_,!1):f.defaultValue!=null&&Ct(i,!!f.multiple,f.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=El)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Vn(s),null;case 6:if(i&&s.stateNode!=null)K0(i,s,i.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(l=Ss(pa.current),Ss(Ki.current),Pl(s)){if(f=s.stateNode,l=s.memoizedProps,f[qi]=s,(_=f.nodeValue!==l)&&(i=ui,i!==null))switch(i.tag){case 3:Ml(f.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Ml(f.nodeValue,l,(i.mode&1)!==0)}_&&(s.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[qi]=s,s.stateNode=f}return Vn(s),null;case 13:if(tn(on),f=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(sn&&fi!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Qm(),ro(),s.flags|=98560,_=!1;else if(_=Pl(s),f!==null&&f.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[qi]=s}else ro(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Vn(s),_=!1}else Ui!==null&&(Gf(Ui),Ui=null),_=!0;if(!_)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(on.current&1)!==0?En===0&&(En=3):jf())),s.updateQueue!==null&&(s.flags|=4),Vn(s),null);case 4:return lo(),Lf(i,s),i===null&&aa(s.stateNode.containerInfo),Vn(s),null;case 10:return of(s.type._context),Vn(s),null;case 17:return ei(s.type)&&wl(),Vn(s),null;case 19:if(tn(on),_=s.memoizedState,_===null)return Vn(s),null;if(f=(s.flags&128)!==0,R=_.rendering,R===null)if(f)xa(_,!1);else{if(En!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(R=Fl(i),R!==null){for(s.flags|=128,xa(_,!1),f=R.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=l,l=s.child;l!==null;)_=l,i=f,_.flags&=14680066,R=_.alternate,R===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=R.childLanes,_.lanes=R.lanes,_.child=R.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=R.memoizedProps,_.memoizedState=R.memoizedState,_.updateQueue=R.updateQueue,_.type=R.type,i=R.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Qt(on,on.current&1|2),s.child}i=i.sibling}_.tail!==null&&at()>ho&&(s.flags|=128,f=!0,xa(_,!1),s.lanes=4194304)}else{if(!f)if(i=Fl(R),i!==null){if(s.flags|=128,f=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),xa(_,!0),_.tail===null&&_.tailMode==="hidden"&&!R.alternate&&!sn)return Vn(s),null}else 2*at()-_.renderingStartTime>ho&&l!==1073741824&&(s.flags|=128,f=!0,xa(_,!1),s.lanes=4194304);_.isBackwards?(R.sibling=s.child,s.child=R):(l=_.last,l!==null?l.sibling=R:s.child=R,_.last=R)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=at(),s.sibling=null,l=on.current,Qt(on,f?l&1|2:l&1),s):(Vn(s),null);case 22:case 23:return Xf(),f=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(s.flags|=8192),f&&(s.mode&1)!==0?(di&1073741824)!==0&&(Vn(s),s.subtreeFlags&6&&(s.flags|=8192)):Vn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function PS(i,s){switch(Ju(s),s.tag){case 1:return ei(s.type)&&wl(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return lo(),tn(Jn),tn(kn),hf(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return ff(s),null;case 13:if(tn(on),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));ro()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return tn(on),null;case 4:return lo(),null;case 10:return of(s.type._context),null;case 22:case 23:return Xf(),null;case 24:return null;default:return null}}var Xl=!1,Hn=!1,DS=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function uo(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){fn(i,s,f)}else l.current=null}function Nf(i,s,l){try{l()}catch(f){fn(i,s,f)}}var $0=!1;function LS(i,s){if(Wu=fl,i=Cm(),Fu(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var p=f.anchorOffset,_=f.focusNode;f=f.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var R=0,O=-1,z=-1,de=0,Te=0,Ae=i,Ee=null;t:for(;;){for(var Ye;Ae!==l||p!==0&&Ae.nodeType!==3||(O=R+p),Ae!==_||f!==0&&Ae.nodeType!==3||(z=R+f),Ae.nodeType===3&&(R+=Ae.nodeValue.length),(Ye=Ae.firstChild)!==null;)Ee=Ae,Ae=Ye;for(;;){if(Ae===i)break t;if(Ee===l&&++de===p&&(O=R),Ee===_&&++Te===f&&(z=R),(Ye=Ae.nextSibling)!==null)break;Ae=Ee,Ee=Ae.parentNode}Ae=Ye}l=O===-1||z===-1?null:{start:O,end:z}}else l=null}l=l||{start:0,end:0}}else l=null;for(Xu={focusedElem:i,selectionRange:l},fl=!1,Ze=s;Ze!==null;)if(s=Ze,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,Ze=i;else for(;Ze!==null;){s=Ze;try{var tt=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(tt!==null){var rt=tt.memoizedProps,gn=tt.memoizedState,ie=s.stateNode,j=ie.getSnapshotBeforeUpdate(s.elementType===s.type?rt:Fi(s.type,rt),gn);ie.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var le=s.stateNode.containerInfo;le.nodeType===1?le.textContent="":le.nodeType===9&&le.documentElement&&le.removeChild(le.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(be){fn(s,s.return,be)}if(i=s.sibling,i!==null){i.return=s.return,Ze=i;break}Ze=s.return}return tt=$0,$0=!1,tt}function ya(i,s,l){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var p=f=f.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&Nf(s,l,_)}p=p.next}while(p!==f)}}function jl(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var f=l.create;l.destroy=f()}l=l.next}while(l!==s)}}function If(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function Z0(i){var s=i.alternate;s!==null&&(i.alternate=null,Z0(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[qi],delete s[ca],delete s[Ku],delete s[pS],delete s[mS])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Q0(i){return i.tag===5||i.tag===3||i.tag===4}function J0(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Q0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Uf(i,s,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=El));else if(f!==4&&(i=i.child,i!==null))for(Uf(i,s,l),i=i.sibling;i!==null;)Uf(i,s,l),i=i.sibling}function Ff(i,s,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(Ff(i,s,l),i=i.sibling;i!==null;)Ff(i,s,l),i=i.sibling}var Nn=null,Oi=!1;function Kr(i,s,l){for(l=l.child;l!==null;)eg(i,s,l),l=l.sibling}function eg(i,s,l){if(te&&typeof te.onCommitFiberUnmount=="function")try{te.onCommitFiberUnmount(ne,l)}catch{}switch(l.tag){case 5:Hn||uo(l,s);case 6:var f=Nn,p=Oi;Nn=null,Kr(i,s,l),Nn=f,Oi=p,Nn!==null&&(Oi?(i=Nn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Nn.removeChild(l.stateNode));break;case 18:Nn!==null&&(Oi?(i=Nn,l=l.stateNode,i.nodeType===8?qu(i.parentNode,l):i.nodeType===1&&qu(i,l),Qo(i)):qu(Nn,l.stateNode));break;case 4:f=Nn,p=Oi,Nn=l.stateNode.containerInfo,Oi=!0,Kr(i,s,l),Nn=f,Oi=p;break;case 0:case 11:case 14:case 15:if(!Hn&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){p=f=f.next;do{var _=p,R=_.destroy;_=_.tag,R!==void 0&&((_&2)!==0||(_&4)!==0)&&Nf(l,s,R),p=p.next}while(p!==f)}Kr(i,s,l);break;case 1:if(!Hn&&(uo(l,s),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(O){fn(l,s,O)}Kr(i,s,l);break;case 21:Kr(i,s,l);break;case 22:l.mode&1?(Hn=(f=Hn)||l.memoizedState!==null,Kr(i,s,l),Hn=f):Kr(i,s,l);break;default:Kr(i,s,l)}}function tg(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new DS),s.forEach(function(f){var p=VS.bind(null,i,f);l.has(f)||(l.add(f),f.then(p,p))})}}function Bi(i,s){var l=s.deletions;if(l!==null)for(var f=0;f<l.length;f++){var p=l[f];try{var _=i,R=s,O=R;e:for(;O!==null;){switch(O.tag){case 5:Nn=O.stateNode,Oi=!1;break e;case 3:Nn=O.stateNode.containerInfo,Oi=!0;break e;case 4:Nn=O.stateNode.containerInfo,Oi=!0;break e}O=O.return}if(Nn===null)throw Error(t(160));eg(_,R,p),Nn=null,Oi=!1;var z=p.alternate;z!==null&&(z.return=null),p.return=null}catch(de){fn(p,s,de)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)ng(s,i),s=s.sibling}function ng(i,s){var l=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Bi(s,i),Zi(i),f&4){try{ya(3,i,i.return),jl(3,i)}catch(rt){fn(i,i.return,rt)}try{ya(5,i,i.return)}catch(rt){fn(i,i.return,rt)}}break;case 1:Bi(s,i),Zi(i),f&512&&l!==null&&uo(l,l.return);break;case 5:if(Bi(s,i),Zi(i),f&512&&l!==null&&uo(l,l.return),i.flags&32){var p=i.stateNode;try{pe(p,"")}catch(rt){fn(i,i.return,rt)}}if(f&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,R=l!==null?l.memoizedProps:_,O=i.type,z=i.updateQueue;if(i.updateQueue=null,z!==null)try{O==="input"&&_.type==="radio"&&_.name!=null&&yt(p,_),Be(O,R);var de=Be(O,_);for(R=0;R<z.length;R+=2){var Te=z[R],Ae=z[R+1];Te==="style"?xe(p,Ae):Te==="dangerouslySetInnerHTML"?ae(p,Ae):Te==="children"?pe(p,Ae):I(p,Te,Ae,de)}switch(O){case"input":ut(p,_);break;case"textarea":$t(p,_);break;case"select":var Ee=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var Ye=_.value;Ye!=null?Ct(p,!!_.multiple,Ye,!1):Ee!==!!_.multiple&&(_.defaultValue!=null?Ct(p,!!_.multiple,_.defaultValue,!0):Ct(p,!!_.multiple,_.multiple?[]:"",!1))}p[ca]=_}catch(rt){fn(i,i.return,rt)}}break;case 6:if(Bi(s,i),Zi(i),f&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(rt){fn(i,i.return,rt)}}break;case 3:if(Bi(s,i),Zi(i),f&4&&l!==null&&l.memoizedState.isDehydrated)try{Qo(s.containerInfo)}catch(rt){fn(i,i.return,rt)}break;case 4:Bi(s,i),Zi(i);break;case 13:Bi(s,i),Zi(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(kf=at())),f&4&&tg(i);break;case 22:if(Te=l!==null&&l.memoizedState!==null,i.mode&1?(Hn=(de=Hn)||Te,Bi(s,i),Hn=de):Bi(s,i),Zi(i),f&8192){if(de=i.memoizedState!==null,(i.stateNode.isHidden=de)&&!Te&&(i.mode&1)!==0)for(Ze=i,Te=i.child;Te!==null;){for(Ae=Ze=Te;Ze!==null;){switch(Ee=Ze,Ye=Ee.child,Ee.tag){case 0:case 11:case 14:case 15:ya(4,Ee,Ee.return);break;case 1:uo(Ee,Ee.return);var tt=Ee.stateNode;if(typeof tt.componentWillUnmount=="function"){f=Ee,l=Ee.return;try{s=f,tt.props=s.memoizedProps,tt.state=s.memoizedState,tt.componentWillUnmount()}catch(rt){fn(f,l,rt)}}break;case 5:uo(Ee,Ee.return);break;case 22:if(Ee.memoizedState!==null){sg(Ae);continue}}Ye!==null?(Ye.return=Ee,Ze=Ye):sg(Ae)}Te=Te.sibling}e:for(Te=null,Ae=i;;){if(Ae.tag===5){if(Te===null){Te=Ae;try{p=Ae.stateNode,de?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(O=Ae.stateNode,z=Ae.memoizedProps.style,R=z!=null&&z.hasOwnProperty("display")?z.display:null,O.style.display=ge("display",R))}catch(rt){fn(i,i.return,rt)}}}else if(Ae.tag===6){if(Te===null)try{Ae.stateNode.nodeValue=de?"":Ae.memoizedProps}catch(rt){fn(i,i.return,rt)}}else if((Ae.tag!==22&&Ae.tag!==23||Ae.memoizedState===null||Ae===i)&&Ae.child!==null){Ae.child.return=Ae,Ae=Ae.child;continue}if(Ae===i)break e;for(;Ae.sibling===null;){if(Ae.return===null||Ae.return===i)break e;Te===Ae&&(Te=null),Ae=Ae.return}Te===Ae&&(Te=null),Ae.sibling.return=Ae.return,Ae=Ae.sibling}}break;case 19:Bi(s,i),Zi(i),f&4&&tg(i);break;case 21:break;default:Bi(s,i),Zi(i)}}function Zi(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(Q0(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var p=f.stateNode;f.flags&32&&(pe(p,""),f.flags&=-33);var _=J0(i);Ff(i,_,p);break;case 3:case 4:var R=f.stateNode.containerInfo,O=J0(i);Uf(i,O,R);break;default:throw Error(t(161))}}catch(z){fn(i,i.return,z)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function NS(i,s,l){Ze=i,ig(i)}function ig(i,s,l){for(var f=(i.mode&1)!==0;Ze!==null;){var p=Ze,_=p.child;if(p.tag===22&&f){var R=p.memoizedState!==null||Xl;if(!R){var O=p.alternate,z=O!==null&&O.memoizedState!==null||Hn;O=Xl;var de=Hn;if(Xl=R,(Hn=z)&&!de)for(Ze=p;Ze!==null;)R=Ze,z=R.child,R.tag===22&&R.memoizedState!==null?og(p):z!==null?(z.return=R,Ze=z):og(p);for(;_!==null;)Ze=_,ig(_),_=_.sibling;Ze=p,Xl=O,Hn=de}rg(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,Ze=_):rg(i)}}function rg(i){for(;Ze!==null;){var s=Ze;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Hn||jl(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!Hn)if(l===null)f.componentDidMount();else{var p=s.elementType===s.type?l.memoizedProps:Fi(s.type,l.memoizedProps);f.componentDidUpdate(p,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&s0(s,_,f);break;case 3:var R=s.updateQueue;if(R!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}s0(s,R,l)}break;case 5:var O=s.stateNode;if(l===null&&s.flags&4){l=O;var z=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&l.focus();break;case"img":z.src&&(l.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var de=s.alternate;if(de!==null){var Te=de.memoizedState;if(Te!==null){var Ae=Te.dehydrated;Ae!==null&&Qo(Ae)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Hn||s.flags&512&&If(s)}catch(Ee){fn(s,s.return,Ee)}}if(s===i){Ze=null;break}if(l=s.sibling,l!==null){l.return=s.return,Ze=l;break}Ze=s.return}}function sg(i){for(;Ze!==null;){var s=Ze;if(s===i){Ze=null;break}var l=s.sibling;if(l!==null){l.return=s.return,Ze=l;break}Ze=s.return}}function og(i){for(;Ze!==null;){var s=Ze;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{jl(4,s)}catch(z){fn(s,l,z)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var p=s.return;try{f.componentDidMount()}catch(z){fn(s,p,z)}}var _=s.return;try{If(s)}catch(z){fn(s,_,z)}break;case 5:var R=s.return;try{If(s)}catch(z){fn(s,R,z)}}}catch(z){fn(s,s.return,z)}if(s===i){Ze=null;break}var O=s.sibling;if(O!==null){O.return=s.return,Ze=O;break}Ze=s.return}}var IS=Math.ceil,Yl=b.ReactCurrentDispatcher,Of=b.ReactCurrentOwner,Mi=b.ReactCurrentBatchConfig,zt=0,bn=null,_n=null,In=0,di=0,fo=Wr(0),En=0,Sa=null,Es=0,ql=0,Bf=0,Ma=null,ni=null,kf=0,ho=1/0,Sr=null,Kl=!1,zf=null,$r=null,$l=!1,Zr=null,Zl=0,Ea=0,Vf=null,Ql=-1,Jl=0;function $n(){return(zt&6)!==0?at():Ql!==-1?Ql:Ql=at()}function Qr(i){return(i.mode&1)===0?1:(zt&2)!==0&&In!==0?In&-In:vS.transition!==null?(Jl===0&&(Jl=Sn()),Jl):(i=At,i!==0||(i=window.event,i=i===void 0?16:lm(i.type)),i)}function ki(i,s,l,f){if(50<Ea)throw Ea=0,Vf=null,Error(t(185));mn(i,l,f),((zt&2)===0||i!==bn)&&(i===bn&&((zt&2)===0&&(ql|=l),En===4&&Jr(i,In)),ii(i,f),l===1&&zt===0&&(s.mode&1)===0&&(ho=at()+500,Rl&&jr()))}function ii(i,s){var l=i.callbackNode;Zt(i,s);var f=Ut(i,i===bn?In:0);if(f===0)l!==null&&Oe(l),i.callbackNode=null,i.callbackPriority=0;else if(s=f&-f,i.callbackPriority!==s){if(l!=null&&Oe(l),s===1)i.tag===0?gS(lg.bind(null,i)):Ym(lg.bind(null,i)),dS(function(){(zt&6)===0&&jr()}),l=null;else{switch(Pi(f)){case 1:l=Jt;break;case 4:l=On;break;case 16:l=C;break;case 536870912:l=ue;break;default:l=C}l=gg(l,ag.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function ag(i,s){if(Ql=-1,Jl=0,(zt&6)!==0)throw Error(t(327));var l=i.callbackNode;if(po()&&i.callbackNode!==l)return null;var f=Ut(i,i===bn?In:0);if(f===0)return null;if((f&30)!==0||(f&i.expiredLanes)!==0||s)s=ec(i,f);else{s=f;var p=zt;zt|=2;var _=ug();(bn!==i||In!==s)&&(Sr=null,ho=at()+500,ws(i,s));do try{OS();break}catch(O){cg(i,O)}while(!0);sf(),Yl.current=_,zt=p,_n!==null?s=0:(bn=null,In=0,s=En)}if(s!==0){if(s===2&&(p=Xt(i),p!==0&&(f=p,s=Hf(i,p))),s===1)throw l=Sa,ws(i,0),Jr(i,f),ii(i,at()),l;if(s===6)Jr(i,f);else{if(p=i.current.alternate,(f&30)===0&&!US(p)&&(s=ec(i,f),s===2&&(_=Xt(i),_!==0&&(f=_,s=Hf(i,_))),s===1))throw l=Sa,ws(i,0),Jr(i,f),ii(i,at()),l;switch(i.finishedWork=p,i.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:As(i,ni,Sr);break;case 3:if(Jr(i,f),(f&130023424)===f&&(s=kf+500-at(),10<s)){if(Ut(i,0)!==0)break;if(p=i.suspendedLanes,(p&f)!==f){$n(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Yu(As.bind(null,i,ni,Sr),s);break}As(i,ni,Sr);break;case 4:if(Jr(i,f),(f&4194240)===f)break;for(s=i.eventTimes,p=-1;0<f;){var R=31-ke(f);_=1<<R,R=s[R],R>p&&(p=R),f&=~_}if(f=p,f=at()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*IS(f/1960))-f,10<f){i.timeoutHandle=Yu(As.bind(null,i,ni,Sr),f);break}As(i,ni,Sr);break;case 5:As(i,ni,Sr);break;default:throw Error(t(329))}}}return ii(i,at()),i.callbackNode===l?ag.bind(null,i):null}function Hf(i,s){var l=Ma;return i.current.memoizedState.isDehydrated&&(ws(i,s).flags|=256),i=ec(i,s),i!==2&&(s=ni,ni=l,s!==null&&Gf(s)),i}function Gf(i){ni===null?ni=i:ni.push.apply(ni,i)}function US(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var p=l[f],_=p.getSnapshot;p=p.value;try{if(!Ii(_(),p))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Jr(i,s){for(s&=~Bf,s&=~ql,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-ke(s),f=1<<l;i[l]=-1,s&=~f}}function lg(i){if((zt&6)!==0)throw Error(t(327));po();var s=Ut(i,0);if((s&1)===0)return ii(i,at()),null;var l=ec(i,s);if(i.tag!==0&&l===2){var f=Xt(i);f!==0&&(s=f,l=Hf(i,f))}if(l===1)throw l=Sa,ws(i,0),Jr(i,s),ii(i,at()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,As(i,ni,Sr),ii(i,at()),null}function Wf(i,s){var l=zt;zt|=1;try{return i(s)}finally{zt=l,zt===0&&(ho=at()+500,Rl&&jr())}}function Ts(i){Zr!==null&&Zr.tag===0&&(zt&6)===0&&po();var s=zt;zt|=1;var l=Mi.transition,f=At;try{if(Mi.transition=null,At=1,i)return i()}finally{At=f,Mi.transition=l,zt=s,(zt&6)===0&&jr()}}function Xf(){di=fo.current,tn(fo)}function ws(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,fS(l)),_n!==null)for(l=_n.return;l!==null;){var f=l;switch(Ju(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&wl();break;case 3:lo(),tn(Jn),tn(kn),hf();break;case 5:ff(f);break;case 4:lo();break;case 13:tn(on);break;case 19:tn(on);break;case 10:of(f.type._context);break;case 22:case 23:Xf()}l=l.return}if(bn=i,_n=i=es(i.current,null),In=di=s,En=0,Sa=null,Bf=ql=Es=0,ni=Ma=null,ys!==null){for(s=0;s<ys.length;s++)if(l=ys[s],f=l.interleaved,f!==null){l.interleaved=null;var p=f.next,_=l.pending;if(_!==null){var R=_.next;_.next=p,f.next=R}l.pending=f}ys=null}return i}function cg(i,s){do{var l=_n;try{if(sf(),Ol.current=Vl,Bl){for(var f=an.memoizedState;f!==null;){var p=f.queue;p!==null&&(p.pending=null),f=f.next}Bl=!1}if(Ms=0,Cn=Mn=an=null,ma=!1,ga=0,Of.current=null,l===null||l.return===null){En=1,Sa=s,_n=null;break}e:{var _=i,R=l.return,O=l,z=s;if(s=In,O.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var de=z,Te=O,Ae=Te.tag;if((Te.mode&1)===0&&(Ae===0||Ae===11||Ae===15)){var Ee=Te.alternate;Ee?(Te.updateQueue=Ee.updateQueue,Te.memoizedState=Ee.memoizedState,Te.lanes=Ee.lanes):(Te.updateQueue=null,Te.memoizedState=null)}var Ye=I0(R);if(Ye!==null){Ye.flags&=-257,U0(Ye,R,O,_,s),Ye.mode&1&&N0(_,de,s),s=Ye,z=de;var tt=s.updateQueue;if(tt===null){var rt=new Set;rt.add(z),s.updateQueue=rt}else tt.add(z);break e}else{if((s&1)===0){N0(_,de,s),jf();break e}z=Error(t(426))}}else if(sn&&O.mode&1){var gn=I0(R);if(gn!==null){(gn.flags&65536)===0&&(gn.flags|=256),U0(gn,R,O,_,s),nf(co(z,O));break e}}_=z=co(z,O),En!==4&&(En=2),Ma===null?Ma=[_]:Ma.push(_),_=R;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var ie=D0(_,z,s);r0(_,ie);break e;case 1:O=z;var j=_.type,le=_.stateNode;if((_.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||le!==null&&typeof le.componentDidCatch=="function"&&($r===null||!$r.has(le)))){_.flags|=65536,s&=-s,_.lanes|=s;var be=L0(_,O,s);r0(_,be);break e}}_=_.return}while(_!==null)}dg(l)}catch(ot){s=ot,_n===l&&l!==null&&(_n=l=l.return);continue}break}while(!0)}function ug(){var i=Yl.current;return Yl.current=Vl,i===null?Vl:i}function jf(){(En===0||En===3||En===2)&&(En=4),bn===null||(Es&268435455)===0&&(ql&268435455)===0||Jr(bn,In)}function ec(i,s){var l=zt;zt|=2;var f=ug();(bn!==i||In!==s)&&(Sr=null,ws(i,s));do try{FS();break}catch(p){cg(i,p)}while(!0);if(sf(),zt=l,Yl.current=f,_n!==null)throw Error(t(261));return bn=null,In=0,En}function FS(){for(;_n!==null;)fg(_n)}function OS(){for(;_n!==null&&!ct();)fg(_n)}function fg(i){var s=mg(i.alternate,i,di);i.memoizedProps=i.pendingProps,s===null?dg(i):_n=s,Of.current=null}function dg(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=bS(l,s,di),l!==null){_n=l;return}}else{if(l=PS(l,s),l!==null){l.flags&=32767,_n=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{En=6,_n=null;return}}if(s=s.sibling,s!==null){_n=s;return}_n=s=i}while(s!==null);En===0&&(En=5)}function As(i,s,l){var f=At,p=Mi.transition;try{Mi.transition=null,At=1,BS(i,s,l,f)}finally{Mi.transition=p,At=f}return null}function BS(i,s,l,f){do po();while(Zr!==null);if((zt&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(Ft(i,_),i===bn&&(_n=bn=null,In=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||$l||($l=!0,gg(C,function(){return po(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=Mi.transition,Mi.transition=null;var R=At;At=1;var O=zt;zt|=4,Of.current=null,LS(i,l),ng(l,i),rS(Xu),fl=!!Wu,Xu=Wu=null,i.current=l,NS(l),It(),zt=O,At=R,Mi.transition=_}else i.current=l;if($l&&($l=!1,Zr=i,Zl=p),_=i.pendingLanes,_===0&&($r=null),He(l.stateNode),ii(i,at()),s!==null)for(f=i.onRecoverableError,l=0;l<s.length;l++)p=s[l],f(p.value,{componentStack:p.stack,digest:p.digest});if(Kl)throw Kl=!1,i=zf,zf=null,i;return(Zl&1)!==0&&i.tag!==0&&po(),_=i.pendingLanes,(_&1)!==0?i===Vf?Ea++:(Ea=0,Vf=i):Ea=0,jr(),null}function po(){if(Zr!==null){var i=Pi(Zl),s=Mi.transition,l=At;try{if(Mi.transition=null,At=16>i?16:i,Zr===null)var f=!1;else{if(i=Zr,Zr=null,Zl=0,(zt&6)!==0)throw Error(t(331));var p=zt;for(zt|=4,Ze=i.current;Ze!==null;){var _=Ze,R=_.child;if((Ze.flags&16)!==0){var O=_.deletions;if(O!==null){for(var z=0;z<O.length;z++){var de=O[z];for(Ze=de;Ze!==null;){var Te=Ze;switch(Te.tag){case 0:case 11:case 15:ya(8,Te,_)}var Ae=Te.child;if(Ae!==null)Ae.return=Te,Ze=Ae;else for(;Ze!==null;){Te=Ze;var Ee=Te.sibling,Ye=Te.return;if(Z0(Te),Te===de){Ze=null;break}if(Ee!==null){Ee.return=Ye,Ze=Ee;break}Ze=Ye}}}var tt=_.alternate;if(tt!==null){var rt=tt.child;if(rt!==null){tt.child=null;do{var gn=rt.sibling;rt.sibling=null,rt=gn}while(rt!==null)}}Ze=_}}if((_.subtreeFlags&2064)!==0&&R!==null)R.return=_,Ze=R;else e:for(;Ze!==null;){if(_=Ze,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:ya(9,_,_.return)}var ie=_.sibling;if(ie!==null){ie.return=_.return,Ze=ie;break e}Ze=_.return}}var j=i.current;for(Ze=j;Ze!==null;){R=Ze;var le=R.child;if((R.subtreeFlags&2064)!==0&&le!==null)le.return=R,Ze=le;else e:for(R=j;Ze!==null;){if(O=Ze,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:jl(9,O)}}catch(ot){fn(O,O.return,ot)}if(O===R){Ze=null;break e}var be=O.sibling;if(be!==null){be.return=O.return,Ze=be;break e}Ze=O.return}}if(zt=p,jr(),te&&typeof te.onPostCommitFiberRoot=="function")try{te.onPostCommitFiberRoot(ne,i)}catch{}f=!0}return f}finally{At=l,Mi.transition=s}}return!1}function hg(i,s,l){s=co(l,s),s=D0(i,s,1),i=qr(i,s,1),s=$n(),i!==null&&(mn(i,1,s),ii(i,s))}function fn(i,s,l){if(i.tag===3)hg(i,i,l);else for(;s!==null;){if(s.tag===3){hg(s,i,l);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&($r===null||!$r.has(f))){i=co(l,i),i=L0(s,i,1),s=qr(s,i,1),i=$n(),s!==null&&(mn(s,1,i),ii(s,i));break}}s=s.return}}function kS(i,s,l){var f=i.pingCache;f!==null&&f.delete(s),s=$n(),i.pingedLanes|=i.suspendedLanes&l,bn===i&&(In&l)===l&&(En===4||En===3&&(In&130023424)===In&&500>at()-kf?ws(i,0):Bf|=l),ii(i,s)}function pg(i,s){s===0&&((i.mode&1)===0?s=1:(s=Tt,Tt<<=1,(Tt&130023424)===0&&(Tt=4194304)));var l=$n();i=_r(i,s),i!==null&&(mn(i,s,l),ii(i,l))}function zS(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),pg(i,l)}function VS(i,s){var l=0;switch(i.tag){case 13:var f=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),pg(i,l)}var mg;mg=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||Jn.current)ti=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return ti=!1,CS(i,s,l);ti=(i.flags&131072)!==0}else ti=!1,sn&&(s.flags&1048576)!==0&&qm(s,bl,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;Wl(i,s),i=s.pendingProps;var p=to(s,kn.current);ao(s,l),p=gf(null,s,f,i,p,l);var _=vf();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,ei(f)?(_=!0,Al(s)):_=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,cf(s),p.updater=Hl,s.stateNode=p,p._reactInternals=s,Ef(s,f,i,l),s=Rf(null,s,f,!0,_,l)):(s.tag=0,sn&&_&&Qu(s),Kn(null,s,p,l),s=s.child),s;case 16:f=s.elementType;e:{switch(Wl(i,s),i=s.pendingProps,p=f._init,f=p(f._payload),s.type=f,p=s.tag=GS(f),i=Fi(f,i),p){case 0:s=Af(null,s,f,i,l);break e;case 1:s=V0(null,s,f,i,l);break e;case 11:s=F0(null,s,f,i,l);break e;case 14:s=O0(null,s,f,Fi(f.type,i),l);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,p=s.pendingProps,p=s.elementType===f?p:Fi(f,p),Af(i,s,f,p,l);case 1:return f=s.type,p=s.pendingProps,p=s.elementType===f?p:Fi(f,p),V0(i,s,f,p,l);case 3:e:{if(H0(s),i===null)throw Error(t(387));f=s.pendingProps,_=s.memoizedState,p=_.element,i0(i,s),Ul(s,f,null,l);var R=s.memoizedState;if(f=R.element,_.isDehydrated)if(_={element:f,isDehydrated:!1,cache:R.cache,pendingSuspenseBoundaries:R.pendingSuspenseBoundaries,transitions:R.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){p=co(Error(t(423)),s),s=G0(i,s,f,l,p);break e}else if(f!==p){p=co(Error(t(424)),s),s=G0(i,s,f,l,p);break e}else for(fi=Gr(s.stateNode.containerInfo.firstChild),ui=s,sn=!0,Ui=null,l=t0(s,null,f,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ro(),f===p){s=yr(i,s,l);break e}Kn(i,s,f,l)}s=s.child}return s;case 5:return o0(s),i===null&&tf(s),f=s.type,p=s.pendingProps,_=i!==null?i.memoizedProps:null,R=p.children,ju(f,p)?R=null:_!==null&&ju(f,_)&&(s.flags|=32),z0(i,s),Kn(i,s,R,l),s.child;case 6:return i===null&&tf(s),null;case 13:return W0(i,s,l);case 4:return uf(s,s.stateNode.containerInfo),f=s.pendingProps,i===null?s.child=so(s,null,f,l):Kn(i,s,f,l),s.child;case 11:return f=s.type,p=s.pendingProps,p=s.elementType===f?p:Fi(f,p),F0(i,s,f,p,l);case 7:return Kn(i,s,s.pendingProps,l),s.child;case 8:return Kn(i,s,s.pendingProps.children,l),s.child;case 12:return Kn(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(f=s.type._context,p=s.pendingProps,_=s.memoizedProps,R=p.value,Qt(Ll,f._currentValue),f._currentValue=R,_!==null)if(Ii(_.value,R)){if(_.children===p.children&&!Jn.current){s=yr(i,s,l);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var O=_.dependencies;if(O!==null){R=_.child;for(var z=O.firstContext;z!==null;){if(z.context===f){if(_.tag===1){z=xr(-1,l&-l),z.tag=2;var de=_.updateQueue;if(de!==null){de=de.shared;var Te=de.pending;Te===null?z.next=z:(z.next=Te.next,Te.next=z),de.pending=z}}_.lanes|=l,z=_.alternate,z!==null&&(z.lanes|=l),af(_.return,l,s),O.lanes|=l;break}z=z.next}}else if(_.tag===10)R=_.type===s.type?null:_.child;else if(_.tag===18){if(R=_.return,R===null)throw Error(t(341));R.lanes|=l,O=R.alternate,O!==null&&(O.lanes|=l),af(R,l,s),R=_.sibling}else R=_.child;if(R!==null)R.return=_;else for(R=_;R!==null;){if(R===s){R=null;break}if(_=R.sibling,_!==null){_.return=R.return,R=_;break}R=R.return}_=R}Kn(i,s,p.children,l),s=s.child}return s;case 9:return p=s.type,f=s.pendingProps.children,ao(s,l),p=yi(p),f=f(p),s.flags|=1,Kn(i,s,f,l),s.child;case 14:return f=s.type,p=Fi(f,s.pendingProps),p=Fi(f.type,p),O0(i,s,f,p,l);case 15:return B0(i,s,s.type,s.pendingProps,l);case 17:return f=s.type,p=s.pendingProps,p=s.elementType===f?p:Fi(f,p),Wl(i,s),s.tag=1,ei(f)?(i=!0,Al(s)):i=!1,ao(s,l),b0(s,f,p),Ef(s,f,p,l),Rf(null,s,f,!0,i,l);case 19:return j0(i,s,l);case 22:return k0(i,s,l)}throw Error(t(156,s.tag))};function gg(i,s){return ve(i,s)}function HS(i,s,l,f){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ei(i,s,l,f){return new HS(i,s,l,f)}function Yf(i){return i=i.prototype,!(!i||!i.isReactComponent)}function GS(i){if(typeof i=="function")return Yf(i)?1:0;if(i!=null){if(i=i.$$typeof,i===J)return 11;if(i===ee)return 14}return 2}function es(i,s){var l=i.alternate;return l===null?(l=Ei(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function tc(i,s,l,f,p,_){var R=2;if(f=i,typeof i=="function")Yf(i)&&(R=1);else if(typeof i=="string")R=5;else e:switch(i){case F:return Rs(l.children,p,_,s);case T:R=8,p|=8;break;case w:return i=Ei(12,l,s,p|2),i.elementType=w,i.lanes=_,i;case se:return i=Ei(13,l,s,p),i.elementType=se,i.lanes=_,i;case q:return i=Ei(19,l,s,p),i.elementType=q,i.lanes=_,i;case $:return nc(l,p,_,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case B:R=10;break e;case Y:R=9;break e;case J:R=11;break e;case ee:R=14;break e;case me:R=16,f=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=Ei(R,l,s,p),s.elementType=i,s.type=f,s.lanes=_,s}function Rs(i,s,l,f){return i=Ei(7,i,f,s),i.lanes=l,i}function nc(i,s,l,f){return i=Ei(22,i,f,s),i.elementType=$,i.lanes=l,i.stateNode={isHidden:!1},i}function qf(i,s,l){return i=Ei(6,i,null,s),i.lanes=l,i}function Kf(i,s,l){return s=Ei(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function WS(i,s,l,f,p){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=je(0),this.expirationTimes=je(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=je(0),this.identifierPrefix=f,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function $f(i,s,l,f,p,_,R,O,z){return i=new WS(i,s,l,O,z),s===1?(s=1,_===!0&&(s|=8)):s=0,_=Ei(3,null,null,s),i.current=_,_.stateNode=i,_.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},cf(_),i}function XS(i,s,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:f==null?null:""+f,children:i,containerInfo:s,implementation:l}}function vg(i){if(!i)return Xr;i=i._reactInternals;e:{if(Rn(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(ei(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(ei(l))return Xm(i,l,s)}return s}function _g(i,s,l,f,p,_,R,O,z){return i=$f(l,f,!0,i,p,_,R,O,z),i.context=vg(null),l=i.current,f=$n(),p=Qr(l),_=xr(f,p),_.callback=s??null,qr(l,_,p),i.current.lanes=p,mn(i,p,f),ii(i,f),i}function ic(i,s,l,f){var p=s.current,_=$n(),R=Qr(p);return l=vg(l),s.context===null?s.context=l:s.pendingContext=l,s=xr(_,R),s.payload={element:i},f=f===void 0?null:f,f!==null&&(s.callback=f),i=qr(p,s,R),i!==null&&(ki(i,p,R,_),Il(i,p,R)),R}function rc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function xg(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function Zf(i,s){xg(i,s),(i=i.alternate)&&xg(i,s)}function jS(){return null}var yg=typeof reportError=="function"?reportError:function(i){console.error(i)};function Qf(i){this._internalRoot=i}sc.prototype.render=Qf.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));ic(i,s,null,null)},sc.prototype.unmount=Qf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;Ts(function(){ic(null,i,null,null)}),s[pr]=null}};function sc(i){this._internalRoot=i}sc.prototype.unstable_scheduleHydration=function(i){if(i){var s=Di();i={blockedOn:null,target:i,priority:s};for(var l=0;l<zr.length&&s!==0&&s<zr[l].priority;l++);zr.splice(l,0,i),l===0&&om(i)}};function Jf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function oc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Sg(){}function YS(i,s,l,f,p){if(p){if(typeof f=="function"){var _=f;f=function(){var de=rc(R);_.call(de)}}var R=_g(s,f,i,0,null,!1,!1,"",Sg);return i._reactRootContainer=R,i[pr]=R.current,aa(i.nodeType===8?i.parentNode:i),Ts(),R}for(;p=i.lastChild;)i.removeChild(p);if(typeof f=="function"){var O=f;f=function(){var de=rc(z);O.call(de)}}var z=$f(i,0,!1,null,null,!1,!1,"",Sg);return i._reactRootContainer=z,i[pr]=z.current,aa(i.nodeType===8?i.parentNode:i),Ts(function(){ic(s,z,l,f)}),z}function ac(i,s,l,f,p){var _=l._reactRootContainer;if(_){var R=_;if(typeof p=="function"){var O=p;p=function(){var z=rc(R);O.call(z)}}ic(s,R,i,p)}else R=YS(l,s,i,p,f);return rc(R)}hr=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=$e(s.pendingLanes);l!==0&&(Bn(s,l|1),ii(s,at()),(zt&6)===0&&(ho=at()+500,jr()))}break;case 13:Ts(function(){var f=_r(i,1);if(f!==null){var p=$n();ki(f,i,1,p)}}),Zf(i,1)}},Ht=function(i){if(i.tag===13){var s=_r(i,134217728);if(s!==null){var l=$n();ki(s,i,134217728,l)}Zf(i,134217728)}},rn=function(i){if(i.tag===13){var s=Qr(i),l=_r(i,s);if(l!==null){var f=$n();ki(l,i,s,f)}Zf(i,s)}},Di=function(){return At},qt=function(i,s){var l=At;try{return At=i,s()}finally{At=l}},lt=function(i,s,l){switch(s){case"input":if(ut(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var f=l[s];if(f!==i&&f.form===i.form){var p=Tl(f);if(!p)throw Error(t(90));De(f),ut(f,p)}}}break;case"textarea":$t(i,l);break;case"select":s=l.value,s!=null&&Ct(i,!!l.multiple,s,!1)}},ze=Wf,Se=Ts;var qS={usingClientEntryPoint:!1,Events:[ua,Js,Tl,_e,Ne,Wf]},Ta={findFiberByHostInstance:gs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},KS={bundleType:Ta.bundleType,version:Ta.version,rendererPackageName:Ta.rendererPackageName,rendererConfig:Ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=k(i),i===null?null:i.stateNode},findFiberByHostInstance:Ta.findFiberByHostInstance||jS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lc.isDisabled&&lc.supportsFiber)try{ne=lc.inject(KS),te=lc}catch{}}return ri.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qS,ri.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jf(s))throw Error(t(200));return XS(i,s,null,l)},ri.createRoot=function(i,s){if(!Jf(i))throw Error(t(299));var l=!1,f="",p=yg;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=$f(i,1,!1,null,null,l,!1,f,p),i[pr]=s.current,aa(i.nodeType===8?i.parentNode:i),new Qf(s)},ri.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=k(s),i=i===null?null:i.stateNode,i},ri.flushSync=function(i){return Ts(i)},ri.hydrate=function(i,s,l){if(!oc(s))throw Error(t(200));return ac(null,i,s,!0,l)},ri.hydrateRoot=function(i,s,l){if(!Jf(i))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,p=!1,_="",R=yg;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(R=l.onRecoverableError)),s=_g(s,null,i,1,l??null,p,!1,_,R),i[pr]=s.current,aa(i),f)for(i=0;i<f.length;i++)l=f[i],p=l._getVersion,p=p(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,p]:s.mutableSourceEagerHydrationData.push(l,p);return new sc(s)},ri.render=function(i,s,l){if(!oc(s))throw Error(t(200));return ac(null,i,s,!1,l)},ri.unmountComponentAtNode=function(i){if(!oc(i))throw Error(t(40));return i._reactRootContainer?(Ts(function(){ac(null,null,i,!1,function(){i._reactRootContainer=null,i[pr]=null})}),!0):!1},ri.unstable_batchedUpdates=Wf,ri.unstable_renderSubtreeIntoContainer=function(i,s,l,f){if(!oc(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return ac(i,s,l,!1,f)},ri.version="18.3.1-next-f1338f8080-20240426",ri}var bg;function i2(){if(bg)return nd.exports;bg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),nd.exports=n2(),nd.exports}var Pg;function r2(){if(Pg)return cc;Pg=1;var n=i2();return cc.createRoot=n.createRoot,cc.hydrateRoot=n.hydrateRoot,cc}var s2=r2();const o2=K1(s2),$1=Pe.createContext(null);function a2({children:n}){Pe.useEffect(()=>{document.documentElement.setAttribute("data-theme","dark"),localStorage.setItem("theme","dark")},[]);const e=()=>{};return K.jsx($1.Provider,{value:{theme:"dark",toggleTheme:e,setTheme:()=>{}},children:n})}function l2(){const n=Pe.useContext($1);if(!n)throw new Error("useTheme must be used within ThemeProvider");return n}const ap=Pe.createContext({});function lp(n){const e=Pe.useRef(null);return e.current===null&&(e.current=n()),e.current}const pu=Pe.createContext(null),cp=Pe.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class c2 extends Pe.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function u2({children:n,isPresent:e}){const t=Pe.useId(),r=Pe.useRef(null),o=Pe.useRef({width:0,height:0,top:0,left:0}),{nonce:a}=Pe.useContext(cp);return Pe.useInsertionEffect(()=>{const{width:c,height:u,top:d,left:h}=o.current;if(e||!r.current||!c||!u)return;r.current.dataset.motionPopId=t;const m=document.createElement("style");return a&&(m.nonce=a),document.head.appendChild(m),m.sheet&&m.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${u}px !important;
            top: ${d}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(m)}},[e]),K.jsx(c2,{isPresent:e,childRef:r,sizeRef:o,children:Pe.cloneElement(n,{ref:r})})}const f2=({children:n,initial:e,isPresent:t,onExitComplete:r,custom:o,presenceAffectsLayout:a,mode:c})=>{const u=lp(d2),d=Pe.useId(),h=Pe.useCallback(v=>{u.set(v,!0);for(const g of u.values())if(!g)return;r&&r()},[u,r]),m=Pe.useMemo(()=>({id:d,initial:e,isPresent:t,custom:o,onExitComplete:h,register:v=>(u.set(v,!1),()=>u.delete(v))}),a?[Math.random(),h]:[t,h]);return Pe.useMemo(()=>{u.forEach((v,g)=>u.set(g,!1))},[t]),Pe.useEffect(()=>{!t&&!u.size&&r&&r()},[t]),c==="popLayout"&&(n=K.jsx(u2,{isPresent:t,children:n})),K.jsx(pu.Provider,{value:m,children:n})};function d2(){return new Map}function Z1(n=!0){const e=Pe.useContext(pu);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,a=Pe.useId();Pe.useEffect(()=>{n&&o(a)},[n]);const c=Pe.useCallback(()=>n&&r&&r(a),[a,r,n]);return!t&&r?[!1,c]:[!0]}const uc=n=>n.key||"";function Dg(n){const e=[];return Pe.Children.forEach(n,t=>{Pe.isValidElement(t)&&e.push(t)}),e}const up=typeof window<"u",Q1=up?Pe.useLayoutEffect:Pe.useEffect,Jd=({children:n,custom:e,initial:t=!0,onExitComplete:r,presenceAffectsLayout:o=!0,mode:a="sync",propagate:c=!1})=>{const[u,d]=Z1(c),h=Pe.useMemo(()=>Dg(n),[n]),m=c&&!u?[]:h.map(uc),v=Pe.useRef(!0),g=Pe.useRef(h),y=lp(()=>new Map),[M,A]=Pe.useState(h),[S,x]=Pe.useState(h);Q1(()=>{v.current=!1,g.current=h;for(let b=0;b<S.length;b++){const P=uc(S[b]);m.includes(P)?y.delete(P):y.get(P)!==!0&&y.set(P,!1)}},[S,m.length,m.join("-")]);const D=[];if(h!==M){let b=[...h];for(let P=0;P<S.length;P++){const L=S[P],F=uc(L);m.includes(F)||(b.splice(P,0,L),D.push(L))}a==="wait"&&D.length&&(b=D),x(Dg(b)),A(h);return}const{forceRender:I}=Pe.useContext(ap);return K.jsx(K.Fragment,{children:S.map(b=>{const P=uc(b),L=c&&!u?!1:h===S||m.includes(P),F=()=>{if(y.has(P))y.set(P,!0);else return;let T=!0;y.forEach(w=>{w||(T=!1)}),T&&(I==null||I(),x(g.current),c&&(d==null||d()),r&&r())};return K.jsx(f2,{isPresent:L,initial:!v.current||t?void 0:!1,custom:L?void 0:e,presenceAffectsLayout:o,mode:a,onExitComplete:L?void 0:F,children:b},P)})})},mi=n=>n;let J1=mi;function fp(n){let e;return()=>(e===void 0&&(e=n()),e)}const Oo=(n,e,t)=>{const r=e-n;return r===0?1:(t-n)/r},br=n=>n*1e3,Pr=n=>n/1e3,h2={useManualTiming:!1};function p2(n){let e=new Set,t=new Set,r=!1,o=!1;const a=new WeakSet;let c={delta:0,timestamp:0,isProcessing:!1};function u(h){a.has(h)&&(d.schedule(h),n()),h(c)}const d={schedule:(h,m=!1,v=!1)=>{const y=v&&r?e:t;return m&&a.add(h),y.has(h)||y.add(h),h},cancel:h=>{t.delete(h),a.delete(h)},process:h=>{if(c=h,r){o=!0;return}r=!0,[e,t]=[t,e],e.forEach(u),e.clear(),r=!1,o&&(o=!1,d.process(h))}};return d}const fc=["read","resolveKeyframes","update","preRender","render","postRender"],m2=40;function e_(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},a=()=>t=!0,c=fc.reduce((x,D)=>(x[D]=p2(a),x),{}),{read:u,resolveKeyframes:d,update:h,preRender:m,render:v,postRender:g}=c,y=()=>{const x=performance.now();t=!1,o.delta=r?1e3/60:Math.max(Math.min(x-o.timestamp,m2),1),o.timestamp=x,o.isProcessing=!0,u.process(o),d.process(o),h.process(o),m.process(o),v.process(o),g.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(y))},M=()=>{t=!0,r=!0,o.isProcessing||n(y)};return{schedule:fc.reduce((x,D)=>{const I=c[D];return x[D]=(b,P=!1,L=!1)=>(t||M(),I.schedule(b,P,L)),x},{}),cancel:x=>{for(let D=0;D<fc.length;D++)c[fc[D]].cancel(x)},state:o,steps:c}}const{schedule:nn,cancel:fs,state:Un,steps:sd}=e_(typeof requestAnimationFrame<"u"?requestAnimationFrame:mi,!0),t_=Pe.createContext({strict:!1}),Lg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Bo={};for(const n in Lg)Bo[n]={isEnabled:e=>Lg[n].some(t=>!!e[t])};function g2(n){for(const e in n)Bo[e]={...Bo[e],...n[e]}}const v2=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function $c(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||v2.has(n)}let n_=n=>!$c(n);function _2(n){n&&(n_=e=>e.startsWith("on")?!$c(e):n(e))}try{_2(require("@emotion/is-prop-valid").default)}catch{}function x2(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||(n_(o)||t===!0&&$c(o)||!e&&!$c(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}function y2(n){if(typeof Proxy>"u")return n;const e=new Map,t=(...r)=>n(...r);return new Proxy(t,{get:(r,o)=>o==="create"?n:(e.has(o)||e.set(o,n(o)),e.get(o))})}const mu=Pe.createContext({});function Ya(n){return typeof n=="string"||Array.isArray(n)}function gu(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const dp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],hp=["initial",...dp];function vu(n){return gu(n.animate)||hp.some(e=>Ya(n[e]))}function i_(n){return!!(vu(n)||n.variants)}function S2(n,e){if(vu(n)){const{initial:t,animate:r}=n;return{initial:t===!1||Ya(t)?t:void 0,animate:Ya(r)?r:void 0}}return n.inherit!==!1?e:{}}function M2(n){const{initial:e,animate:t}=S2(n,Pe.useContext(mu));return Pe.useMemo(()=>({initial:e,animate:t}),[Ng(e),Ng(t)])}function Ng(n){return Array.isArray(n)?n.join(" "):n}const E2=Symbol.for("motionComponentSymbol");function bo(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function T2(n,e,t){return Pe.useCallback(r=>{r&&n.onMount&&n.onMount(r),e&&(r?e.mount(r):e.unmount()),t&&(typeof t=="function"?t(r):bo(t)&&(t.current=r))},[e])}const pp=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),w2="framerAppearId",r_="data-"+pp(w2),{schedule:mp}=e_(queueMicrotask,!1),s_=Pe.createContext({});function A2(n,e,t,r,o){var a,c;const{visualElement:u}=Pe.useContext(mu),d=Pe.useContext(t_),h=Pe.useContext(pu),m=Pe.useContext(cp).reducedMotion,v=Pe.useRef(null);r=r||d.renderer,!v.current&&r&&(v.current=r(n,{visualState:e,parent:u,props:t,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:m}));const g=v.current,y=Pe.useContext(s_);g&&!g.projection&&o&&(g.type==="html"||g.type==="svg")&&R2(v.current,t,o,y);const M=Pe.useRef(!1);Pe.useInsertionEffect(()=>{g&&M.current&&g.update(t,h)});const A=t[r_],S=Pe.useRef(!!A&&!(!((a=window.MotionHandoffIsComplete)===null||a===void 0)&&a.call(window,A))&&((c=window.MotionHasOptimisedAnimation)===null||c===void 0?void 0:c.call(window,A)));return Q1(()=>{g&&(M.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),mp.render(g.render),S.current&&g.animationState&&g.animationState.animateChanges())}),Pe.useEffect(()=>{g&&(!S.current&&g.animationState&&g.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var x;(x=window.MotionHandoffMarkAsComplete)===null||x===void 0||x.call(window,A)}),S.current=!1))}),g}function R2(n,e,t,r){const{layoutId:o,layout:a,drag:c,dragConstraints:u,layoutScroll:d,layoutRoot:h}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:o_(n.parent)),n.projection.setOptions({layoutId:o,layout:a,alwaysMeasureLayout:!!c||u&&bo(u),visualElement:n,animationType:typeof a=="string"?a:"both",initialPromotionConfig:r,layoutScroll:d,layoutRoot:h})}function o_(n){if(n)return n.options.allowProjection!==!1?n.projection:o_(n.parent)}function C2({preloadedFeatures:n,createVisualElement:e,useRender:t,useVisualState:r,Component:o}){var a,c;n&&g2(n);function u(h,m){let v;const g={...Pe.useContext(cp),...h,layoutId:b2(h)},{isStatic:y}=g,M=M2(h),A=r(h,y);if(!y&&up){P2();const S=D2(g);v=S.MeasureLayout,M.visualElement=A2(o,A,g,e,S.ProjectionNode)}return K.jsxs(mu.Provider,{value:M,children:[v&&M.visualElement?K.jsx(v,{visualElement:M.visualElement,...g}):null,t(o,h,T2(A,M.visualElement,m),A,y,M.visualElement)]})}u.displayName=`motion.${typeof o=="string"?o:`create(${(c=(a=o.displayName)!==null&&a!==void 0?a:o.name)!==null&&c!==void 0?c:""})`}`;const d=Pe.forwardRef(u);return d[E2]=o,d}function b2({layoutId:n}){const e=Pe.useContext(ap).id;return e&&n!==void 0?e+"-"+n:n}function P2(n,e){Pe.useContext(t_).strict}function D2(n){const{drag:e,layout:t}=Bo;if(!e&&!t)return{};const r={...e,...t};return{MeasureLayout:e!=null&&e.isEnabled(n)||t!=null&&t.isEnabled(n)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const L2=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function gp(n){return typeof n!="string"||n.includes("-")?!1:!!(L2.indexOf(n)>-1||/[A-Z]/u.test(n))}function Ig(n){const e=[{},{}];return n==null||n.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function vp(n,e,t,r){if(typeof e=="function"){const[o,a]=Ig(r);e=e(t!==void 0?t:n.custom,o,a)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,a]=Ig(r);e=e(t!==void 0?t:n.custom,o,a)}return e}const eh=n=>Array.isArray(n),N2=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),I2=n=>eh(n)?n[n.length-1]||0:n,jn=n=>!!(n&&n.getVelocity);function zc(n){const e=jn(n)?n.get():n;return N2(e)?e.toValue():e}function U2({scrapeMotionValuesFromProps:n,createRenderState:e,onUpdate:t},r,o,a){const c={latestValues:F2(r,o,a,n),renderState:e()};return t&&(c.onMount=u=>t({props:r,current:u,...c}),c.onUpdate=u=>t(u)),c}const a_=n=>(e,t)=>{const r=Pe.useContext(mu),o=Pe.useContext(pu),a=()=>U2(n,e,r,o);return t?a():lp(a)};function F2(n,e,t,r){const o={},a=r(n,{});for(const g in a)o[g]=zc(a[g]);let{initial:c,animate:u}=n;const d=vu(n),h=i_(n);e&&h&&!d&&n.inherit!==!1&&(c===void 0&&(c=e.initial),u===void 0&&(u=e.animate));let m=t?t.initial===!1:!1;m=m||c===!1;const v=m?u:c;if(v&&typeof v!="boolean"&&!gu(v)){const g=Array.isArray(v)?v:[v];for(let y=0;y<g.length;y++){const M=vp(n,g[y]);if(M){const{transitionEnd:A,transition:S,...x}=M;for(const D in x){let I=x[D];if(Array.isArray(I)){const b=m?I.length-1:0;I=I[b]}I!==null&&(o[D]=I)}for(const D in A)o[D]=A[D]}}}return o}const Ho=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ws=new Set(Ho),l_=n=>e=>typeof e=="string"&&e.startsWith(n),c_=l_("--"),O2=l_("var(--"),_p=n=>O2(n)?B2.test(n.split("/*")[0].trim()):!1,B2=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,u_=(n,e)=>e&&typeof n=="number"?e.transform(n):n,Nr=(n,e,t)=>t>e?e:t<n?n:t,Go={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},qa={...Go,transform:n=>Nr(0,1,n)},dc={...Go,default:1},nl=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),as=nl("deg"),ir=nl("%"),gt=nl("px"),k2=nl("vh"),z2=nl("vw"),Ug={...ir,parse:n=>ir.parse(n)/100,transform:n=>ir.transform(n*100)},V2={borderWidth:gt,borderTopWidth:gt,borderRightWidth:gt,borderBottomWidth:gt,borderLeftWidth:gt,borderRadius:gt,radius:gt,borderTopLeftRadius:gt,borderTopRightRadius:gt,borderBottomRightRadius:gt,borderBottomLeftRadius:gt,width:gt,maxWidth:gt,height:gt,maxHeight:gt,top:gt,right:gt,bottom:gt,left:gt,padding:gt,paddingTop:gt,paddingRight:gt,paddingBottom:gt,paddingLeft:gt,margin:gt,marginTop:gt,marginRight:gt,marginBottom:gt,marginLeft:gt,backgroundPositionX:gt,backgroundPositionY:gt},H2={rotate:as,rotateX:as,rotateY:as,rotateZ:as,scale:dc,scaleX:dc,scaleY:dc,scaleZ:dc,skew:as,skewX:as,skewY:as,distance:gt,translateX:gt,translateY:gt,translateZ:gt,x:gt,y:gt,z:gt,perspective:gt,transformPerspective:gt,opacity:qa,originX:Ug,originY:Ug,originZ:gt},Fg={...Go,transform:Math.round},xp={...V2,...H2,zIndex:Fg,size:gt,fillOpacity:qa,strokeOpacity:qa,numOctaves:Fg},G2={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},W2=Ho.length;function X2(n,e,t){let r="",o=!0;for(let a=0;a<W2;a++){const c=Ho[a],u=n[c];if(u===void 0)continue;let d=!0;if(typeof u=="number"?d=u===(c.startsWith("scale")?1:0):d=parseFloat(u)===0,!d||t){const h=u_(u,xp[c]);if(!d){o=!1;const m=G2[c]||c;r+=`${m}(${h}) `}t&&(e[c]=h)}}return r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function yp(n,e,t){const{style:r,vars:o,transformOrigin:a}=n;let c=!1,u=!1;for(const d in e){const h=e[d];if(Ws.has(d)){c=!0;continue}else if(c_(d)){o[d]=h;continue}else{const m=u_(h,xp[d]);d.startsWith("origin")?(u=!0,a[d]=m):r[d]=m}}if(e.transform||(c||t?r.transform=X2(e,n.transform,t):r.transform&&(r.transform="none")),u){const{originX:d="50%",originY:h="50%",originZ:m=0}=a;r.transformOrigin=`${d} ${h} ${m}`}}const j2={offset:"stroke-dashoffset",array:"stroke-dasharray"},Y2={offset:"strokeDashoffset",array:"strokeDasharray"};function q2(n,e,t=1,r=0,o=!0){n.pathLength=1;const a=o?j2:Y2;n[a.offset]=gt.transform(-r);const c=gt.transform(e),u=gt.transform(t);n[a.array]=`${c} ${u}`}function Og(n,e,t){return typeof n=="string"?n:gt.transform(e+t*n)}function K2(n,e,t){const r=Og(e,n.x,n.width),o=Og(t,n.y,n.height);return`${r} ${o}`}function Sp(n,{attrX:e,attrY:t,attrScale:r,originX:o,originY:a,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...h},m,v){if(yp(n,h,v),m){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:g,style:y,dimensions:M}=n;g.transform&&(M&&(y.transform=g.transform),delete g.transform),M&&(o!==void 0||a!==void 0||y.transform)&&(y.transformOrigin=K2(M,o!==void 0?o:.5,a!==void 0?a:.5)),e!==void 0&&(g.x=e),t!==void 0&&(g.y=t),r!==void 0&&(g.scale=r),c!==void 0&&q2(g,c,u,d,!1)}const Mp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),f_=()=>({...Mp(),attrs:{}}),Ep=n=>typeof n=="string"&&n.toLowerCase()==="svg";function d_(n,{style:e,vars:t},r,o){Object.assign(n.style,e,o&&o.getProjectionStyles(r));for(const a in t)n.style.setProperty(a,t[a])}const h_=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function p_(n,e,t,r){d_(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(h_.has(o)?o:pp(o),e.attrs[o])}const Zc={};function $2(n){Object.assign(Zc,n)}function m_(n,{layout:e,layoutId:t}){return Ws.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!Zc[n]||n==="opacity")}function Tp(n,e,t){var r;const{style:o}=n,a={};for(const c in o)(jn(o[c])||e.style&&jn(e.style[c])||m_(c,n)||((r=t==null?void 0:t.getValue(c))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(a[c]=o[c]);return a}function g_(n,e,t){const r=Tp(n,e,t);for(const o in n)if(jn(n[o])||jn(e[o])){const a=Ho.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[a]=n[o]}return r}function Z2(n,e){try{e.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const Bg=["x","y","width","height","cx","cy","r"],Q2={useVisualState:a_({scrapeMotionValuesFromProps:g_,createRenderState:f_,onUpdate:({props:n,prevProps:e,current:t,renderState:r,latestValues:o})=>{if(!t)return;let a=!!n.drag;if(!a){for(const u in o)if(Ws.has(u)){a=!0;break}}if(!a)return;let c=!e;if(e)for(let u=0;u<Bg.length;u++){const d=Bg[u];n[d]!==e[d]&&(c=!0)}c&&nn.read(()=>{Z2(t,r),nn.render(()=>{Sp(r,o,Ep(t.tagName),n.transformTemplate),p_(t,r)})})}})},J2={useVisualState:a_({scrapeMotionValuesFromProps:Tp,createRenderState:Mp})};function v_(n,e,t){for(const r in e)!jn(e[r])&&!m_(r,t)&&(n[r]=e[r])}function eM({transformTemplate:n},e){return Pe.useMemo(()=>{const t=Mp();return yp(t,e,n),Object.assign({},t.vars,t.style)},[e])}function tM(n,e){const t=n.style||{},r={};return v_(r,t,n),Object.assign(r,eM(n,e)),r}function nM(n,e){const t={},r=tM(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}function iM(n,e,t,r){const o=Pe.useMemo(()=>{const a=f_();return Sp(a,e,Ep(r),n.transformTemplate),{...a.attrs,style:{...a.style}}},[e]);if(n.style){const a={};v_(a,n.style,n),o.style={...a,...o.style}}return o}function rM(n=!1){return(t,r,o,{latestValues:a},c)=>{const d=(gp(t)?iM:nM)(r,a,c,t),h=x2(r,typeof t=="string",n),m=t!==Pe.Fragment?{...h,...d,ref:o}:{},{children:v}=r,g=Pe.useMemo(()=>jn(v)?v.get():v,[v]);return Pe.createElement(t,{...m,children:g})}}function sM(n,e){return function(r,{forwardMotionProps:o}={forwardMotionProps:!1}){const c={...gp(r)?Q2:J2,preloadedFeatures:n,useRender:rM(o),createVisualElement:e,Component:r};return C2(c)}}function __(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}function _u(n,e,t){const r=n.getProps();return vp(r,e,t!==void 0?t:r.custom,n)}const oM=fp(()=>window.ScrollTimeline!==void 0);class aM{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let r=0;r<this.animations.length;r++)this.animations[r][e]=t}attachTimeline(e,t){const r=this.animations.map(o=>{if(oM()&&o.attachTimeline)return o.attachTimeline(e);if(typeof t=="function")return t(o)});return()=>{r.forEach((o,a)=>{o&&o(),this.animations[a].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class lM extends aM{then(e,t){return Promise.all(this.animations).then(e).catch(t)}}function wp(n,e){return n?n[e]||n.default||n:void 0}const th=2e4;function x_(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<th;)e+=t,r=n.next(e);return e>=th?1/0:e}function Ap(n){return typeof n=="function"}function kg(n,e){n.timeline=e,n.onfinish=null}const Rp=n=>Array.isArray(n)&&typeof n[0]=="number",cM={linearEasing:void 0};function uM(n,e){const t=fp(n);return()=>{var r;return(r=cM[e])!==null&&r!==void 0?r:t()}}const Qc=uM(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),y_=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let a=0;a<o;a++)r+=n(Oo(0,o-1,a))+", ";return`linear(${r.substring(0,r.length-2)})`};function S_(n){return!!(typeof n=="function"&&Qc()||!n||typeof n=="string"&&(n in nh||Qc())||Rp(n)||Array.isArray(n)&&n.every(S_))}const Ua=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,nh={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ua([0,.65,.55,1]),circOut:Ua([.55,0,1,.45]),backIn:Ua([.31,.01,.66,-.59]),backOut:Ua([.33,1.53,.69,.99])};function M_(n,e){if(n)return typeof n=="function"&&Qc()?y_(n,e):Rp(n)?Ua(n):Array.isArray(n)?n.map(t=>M_(t,e)||nh.easeOut):nh[n]}const Gi={x:!1,y:!1};function E_(){return Gi.x||Gi.y}function fM(n,e,t){var r;if(n instanceof Element)return[n];if(typeof n=="string"){let o=document;const a=(r=void 0)!==null&&r!==void 0?r:o.querySelectorAll(n);return a?Array.from(a):[]}return Array.from(n)}function T_(n,e){const t=fM(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function zg(n){return e=>{e.pointerType==="touch"||E_()||n(e)}}function dM(n,e,t={}){const[r,o,a]=T_(n,t),c=zg(u=>{const{target:d}=u,h=e(u);if(typeof h!="function"||!d)return;const m=zg(v=>{h(v),d.removeEventListener("pointerleave",m)});d.addEventListener("pointerleave",m,o)});return r.forEach(u=>{u.addEventListener("pointerenter",c,o)}),a}const w_=(n,e)=>e?n===e?!0:w_(n,e.parentElement):!1,Cp=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,hM=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function pM(n){return hM.has(n.tagName)||n.tabIndex!==-1}const Fa=new WeakSet;function Vg(n){return e=>{e.key==="Enter"&&n(e)}}function od(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const mM=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=Vg(()=>{if(Fa.has(t))return;od(t,"down");const o=Vg(()=>{od(t,"up")}),a=()=>od(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",a,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function Hg(n){return Cp(n)&&!E_()}function gM(n,e,t={}){const[r,o,a]=T_(n,t),c=u=>{const d=u.currentTarget;if(!Hg(u)||Fa.has(d))return;Fa.add(d);const h=e(u),m=(y,M)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",g),!(!Hg(y)||!Fa.has(d))&&(Fa.delete(d),typeof h=="function"&&h(y,{success:M}))},v=y=>{m(y,t.useGlobalTarget||w_(d,y.target))},g=y=>{m(y,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",g,o)};return r.forEach(u=>{!pM(u)&&u.getAttribute("tabindex")===null&&(u.tabIndex=0),(t.useGlobalTarget?window:u).addEventListener("pointerdown",c,o),u.addEventListener("focus",h=>mM(h,o),o)}),a}function vM(n){return n==="x"||n==="y"?Gi[n]?null:(Gi[n]=!0,()=>{Gi[n]=!1}):Gi.x||Gi.y?null:(Gi.x=Gi.y=!0,()=>{Gi.x=Gi.y=!1})}const A_=new Set(["width","height","top","left","right","bottom",...Ho]);let Vc;function _M(){Vc=void 0}const rr={now:()=>(Vc===void 0&&rr.set(Un.isProcessing||h2.useManualTiming?Un.timestamp:performance.now()),Vc),set:n=>{Vc=n,queueMicrotask(_M)}};function bp(n,e){n.indexOf(e)===-1&&n.push(e)}function Pp(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}class Dp{constructor(){this.subscriptions=[]}add(e){return bp(this.subscriptions,e),()=>Pp(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let a=0;a<o;a++){const c=this.subscriptions[a];c&&c(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function R_(n,e){return e?n*(1e3/e):0}const Gg=30,xM=n=>!isNaN(parseFloat(n));class yM{constructor(e,t={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,o=!0)=>{const a=rr.now();this.updatedAt!==a&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=rr.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=xM(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Dp);const r=this.events[e].add(t);return e==="change"?()=>{r(),nn.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=rr.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Gg)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,Gg);return R_(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ka(n,e){return new yM(n,e)}function SM(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Ka(t))}function MM(n,e){const t=_u(n,e);let{transitionEnd:r={},transition:o={},...a}=t||{};a={...a,...r};for(const c in a){const u=I2(a[c]);SM(n,c,u)}}function EM(n){return!!(jn(n)&&n.add)}function ih(n,e){const t=n.getValue("willChange");if(EM(t))return t.add(e)}function C_(n){return n.props[r_]}const b_=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,TM=1e-7,wM=12;function AM(n,e,t,r,o){let a,c,u=0;do c=e+(t-e)/2,a=b_(c,r,o)-n,a>0?t=c:e=c;while(Math.abs(a)>TM&&++u<wM);return c}function il(n,e,t,r){if(n===e&&t===r)return mi;const o=a=>AM(a,0,1,n,t);return a=>a===0||a===1?a:b_(o(a),e,r)}const P_=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,D_=n=>e=>1-n(1-e),L_=il(.33,1.53,.69,.99),Lp=D_(L_),N_=P_(Lp),I_=n=>(n*=2)<1?.5*Lp(n):.5*(2-Math.pow(2,-10*(n-1))),Np=n=>1-Math.sin(Math.acos(n)),U_=D_(Np),F_=P_(Np),O_=n=>/^0[^.\s]+$/u.test(n);function RM(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||O_(n):!0}const Va=n=>Math.round(n*1e5)/1e5,Ip=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function CM(n){return n==null}const bM=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Up=(n,e)=>t=>!!(typeof t=="string"&&bM.test(t)&&t.startsWith(n)||e&&!CM(t)&&Object.prototype.hasOwnProperty.call(t,e)),B_=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,a,c,u]=r.match(Ip);return{[n]:parseFloat(o),[e]:parseFloat(a),[t]:parseFloat(c),alpha:u!==void 0?parseFloat(u):1}},PM=n=>Nr(0,255,n),ad={...Go,transform:n=>Math.round(PM(n))},Fs={test:Up("rgb","red"),parse:B_("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+ad.transform(n)+", "+ad.transform(e)+", "+ad.transform(t)+", "+Va(qa.transform(r))+")"};function DM(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const rh={test:Up("#"),parse:DM,transform:Fs.transform},Po={test:Up("hsl","hue"),parse:B_("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+ir.transform(Va(e))+", "+ir.transform(Va(t))+", "+Va(qa.transform(r))+")"},Xn={test:n=>Fs.test(n)||rh.test(n)||Po.test(n),parse:n=>Fs.test(n)?Fs.parse(n):Po.test(n)?Po.parse(n):rh.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Fs.transform(n):Po.transform(n)},LM=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function NM(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(Ip))===null||e===void 0?void 0:e.length)||0)+(((t=n.match(LM))===null||t===void 0?void 0:t.length)||0)>0}const k_="number",z_="color",IM="var",UM="var(",Wg="${}",FM=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function $a(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let a=0;const u=e.replace(FM,d=>(Xn.test(d)?(r.color.push(a),o.push(z_),t.push(Xn.parse(d))):d.startsWith(UM)?(r.var.push(a),o.push(IM),t.push(d)):(r.number.push(a),o.push(k_),t.push(parseFloat(d))),++a,Wg)).split(Wg);return{values:t,split:u,indexes:r,types:o}}function V_(n){return $a(n).values}function H_(n){const{split:e,types:t}=$a(n),r=e.length;return o=>{let a="";for(let c=0;c<r;c++)if(a+=e[c],o[c]!==void 0){const u=t[c];u===k_?a+=Va(o[c]):u===z_?a+=Xn.transform(o[c]):a+=o[c]}return a}}const OM=n=>typeof n=="number"?0:n;function BM(n){const e=V_(n);return H_(n)(e.map(OM))}const ds={test:NM,parse:V_,createTransformer:H_,getAnimatableNone:BM},kM=new Set(["brightness","contrast","saturate","opacity"]);function zM(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(Ip)||[];if(!r)return n;const o=t.replace(r,"");let a=kM.has(e)?1:0;return r!==t&&(a*=100),e+"("+a+o+")"}const VM=/\b([a-z-]*)\(.*?\)/gu,sh={...ds,getAnimatableNone:n=>{const e=n.match(VM);return e?e.map(zM).join(" "):n}},HM={...xp,color:Xn,backgroundColor:Xn,outlineColor:Xn,fill:Xn,stroke:Xn,borderColor:Xn,borderTopColor:Xn,borderRightColor:Xn,borderBottomColor:Xn,borderLeftColor:Xn,filter:sh,WebkitFilter:sh},Fp=n=>HM[n];function G_(n,e){let t=Fp(n);return t!==sh&&(t=ds),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const GM=new Set(["auto","none","0"]);function WM(n,e,t){let r=0,o;for(;r<n.length&&!o;){const a=n[r];typeof a=="string"&&!GM.has(a)&&$a(a).values.length&&(o=n[r]),r++}if(o&&t)for(const a of e)n[a]=G_(t,o)}const Xg=n=>n===Go||n===gt,jg=(n,e)=>parseFloat(n.split(", ")[e]),Yg=(n,e)=>(t,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/u);if(o)return jg(o[1],e);{const a=r.match(/^matrix\((.+)\)$/u);return a?jg(a[1],n):0}},XM=new Set(["x","y","z"]),jM=Ho.filter(n=>!XM.has(n));function YM(n){const e=[];return jM.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const ko={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:Yg(4,13),y:Yg(5,14)};ko.translateX=ko.x;ko.translateY=ko.y;const ks=new Set;let oh=!1,ah=!1;function W_(){if(ah){const n=Array.from(ks).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=YM(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([a,c])=>{var u;(u=r.getValue(a))===null||u===void 0||u.set(c)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}ah=!1,oh=!1,ks.forEach(n=>n.complete()),ks.clear()}function X_(){ks.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(ah=!0)})}function qM(){X_(),W_()}class Op{constructor(e,t,r,o,a,c=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=a,this.isAsync=c}scheduleResolve(){this.isScheduled=!0,this.isAsync?(ks.add(this),oh||(oh=!0,nn.read(X_),nn.resolveKeyframes(W_))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;for(let a=0;a<e.length;a++)if(e[a]===null)if(a===0){const c=o==null?void 0:o.get(),u=e[e.length-1];if(c!==void 0)e[0]=c;else if(r&&t){const d=r.readValue(t,u);d!=null&&(e[0]=d)}e[0]===void 0&&(e[0]=u),o&&c===void 0&&o.set(e[0])}else e[a]=e[a-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),ks.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,ks.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const j_=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),KM=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function $M(n){const e=KM.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function Y_(n,e,t=1){const[r,o]=$M(n);if(!r)return;const a=window.getComputedStyle(e).getPropertyValue(r);if(a){const c=a.trim();return j_(c)?parseFloat(c):c}return _p(o)?Y_(o,e,t+1):o}const q_=n=>e=>e.test(n),ZM={test:n=>n==="auto",parse:n=>n},K_=[Go,gt,ir,as,z2,k2,ZM],qg=n=>K_.find(q_(n));class $_ extends Op{constructor(e,t,r,o,a){super(e,t,r,o,a,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let h=e[d];if(typeof h=="string"&&(h=h.trim(),_p(h))){const m=Y_(h,t.current);m!==void 0&&(e[d]=m),d===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!A_.has(r)||e.length!==2)return;const[o,a]=e,c=qg(o),u=qg(a);if(c!==u)if(Xg(c)&&Xg(u))for(let d=0;d<e.length;d++){const h=e[d];typeof h=="string"&&(e[d]=parseFloat(h))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)RM(e[o])&&r.push(o);r.length&&WM(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ko[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var e;const{element:t,name:r,unresolvedKeyframes:o}=this;if(!t||!t.current)return;const a=t.getValue(r);a&&a.jump(this.measuredOrigin,!1);const c=o.length-1,u=o[c];o[c]=ko[r](t.measureViewportBox(),window.getComputedStyle(t.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([d,h])=>{t.getValue(d).set(h)}),this.resolveNoneKeyframes()}}const Kg=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(ds.test(n)||n==="0")&&!n.startsWith("url("));function QM(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function JM(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const a=n[n.length-1],c=Kg(o,e),u=Kg(a,e);return!c||!u?!1:QM(n)||(t==="spring"||Ap(t))&&r}const eE=n=>n!==null;function xu(n,{repeat:e,repeatType:t="loop"},r){const o=n.filter(eE),a=e&&t!=="loop"&&e%2===1?0:o.length-1;return!a||r===void 0?o[a]:r}const tE=40;class Z_{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:a=0,repeatType:c="loop",...u}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=rr.now(),this.options={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:a,repeatType:c,...u},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>tE?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&qM(),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=rr.now(),this.hasAttemptedResolve=!0;const{name:r,type:o,velocity:a,delay:c,onComplete:u,onUpdate:d,isGenerator:h}=this.options;if(!h&&!JM(e,r,o,a))if(c)this.options.duration=0;else{d&&d(xu(e,this.options,t)),u&&u(),this.resolveFinishedPromise();return}const m=this.initPlayback(e,t);m!==!1&&(this._resolved={keyframes:e,finalKeyframe:t,...m},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const ln=(n,e,t)=>n+(e-n)*t;function ld(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function nE({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,a=0,c=0;if(!e)o=a=c=t;else{const u=t<.5?t*(1+e):t+e-t*e,d=2*t-u;o=ld(d,u,n+1/3),a=ld(d,u,n),c=ld(d,u,n-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(c*255),alpha:r}}function Jc(n,e){return t=>t>0?e:n}const cd=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},iE=[rh,Fs,Po],rE=n=>iE.find(e=>e.test(n));function $g(n){const e=rE(n);if(!e)return!1;let t=e.parse(n);return e===Po&&(t=nE(t)),t}const Zg=(n,e)=>{const t=$g(n),r=$g(e);if(!t||!r)return Jc(n,e);const o={...t};return a=>(o.red=cd(t.red,r.red,a),o.green=cd(t.green,r.green,a),o.blue=cd(t.blue,r.blue,a),o.alpha=ln(t.alpha,r.alpha,a),Fs.transform(o))},sE=(n,e)=>t=>e(n(t)),rl=(...n)=>n.reduce(sE),lh=new Set(["none","hidden"]);function oE(n,e){return lh.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function aE(n,e){return t=>ln(n,e,t)}function Bp(n){return typeof n=="number"?aE:typeof n=="string"?_p(n)?Jc:Xn.test(n)?Zg:uE:Array.isArray(n)?Q_:typeof n=="object"?Xn.test(n)?Zg:lE:Jc}function Q_(n,e){const t=[...n],r=t.length,o=n.map((a,c)=>Bp(a)(a,e[c]));return a=>{for(let c=0;c<r;c++)t[c]=o[c](a);return t}}function lE(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=Bp(n[o])(n[o],e[o]));return o=>{for(const a in r)t[a]=r[a](o);return t}}function cE(n,e){var t;const r=[],o={color:0,var:0,number:0};for(let a=0;a<e.values.length;a++){const c=e.types[a],u=n.indexes[c][o[c]],d=(t=n.values[u])!==null&&t!==void 0?t:0;r[a]=d,o[c]++}return r}const uE=(n,e)=>{const t=ds.createTransformer(e),r=$a(n),o=$a(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?lh.has(n)&&!o.values.length||lh.has(e)&&!r.values.length?oE(n,e):rl(Q_(cE(r,o),o.values),t):Jc(n,e)};function J_(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?ln(n,e,t):Bp(n)(n,e)}const fE=5;function ex(n,e,t){const r=Math.max(e-fE,0);return R_(t-n(r),e-r)}const dn={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},ud=.001;function dE({duration:n=dn.duration,bounce:e=dn.bounce,velocity:t=dn.velocity,mass:r=dn.mass}){let o,a,c=1-e;c=Nr(dn.minDamping,dn.maxDamping,c),n=Nr(dn.minDuration,dn.maxDuration,Pr(n)),c<1?(o=h=>{const m=h*c,v=m*n,g=m-t,y=ch(h,c),M=Math.exp(-v);return ud-g/y*M},a=h=>{const v=h*c*n,g=v*t+t,y=Math.pow(c,2)*Math.pow(h,2)*n,M=Math.exp(-v),A=ch(Math.pow(h,2),c);return(-o(h)+ud>0?-1:1)*((g-y)*M)/A}):(o=h=>{const m=Math.exp(-h*n),v=(h-t)*n+1;return-ud+m*v},a=h=>{const m=Math.exp(-h*n),v=(t-h)*(n*n);return m*v});const u=5/n,d=pE(o,a,u);if(n=br(n),isNaN(d))return{stiffness:dn.stiffness,damping:dn.damping,duration:n};{const h=Math.pow(d,2)*r;return{stiffness:h,damping:c*2*Math.sqrt(r*h),duration:n}}}const hE=12;function pE(n,e,t){let r=t;for(let o=1;o<hE;o++)r=r-n(r)/e(r);return r}function ch(n,e){return n*Math.sqrt(1-e*e)}const mE=["duration","bounce"],gE=["stiffness","damping","mass"];function Qg(n,e){return e.some(t=>n[t]!==void 0)}function vE(n){let e={velocity:dn.velocity,stiffness:dn.stiffness,damping:dn.damping,mass:dn.mass,isResolvedFromDuration:!1,...n};if(!Qg(n,gE)&&Qg(n,mE))if(n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,a=2*Nr(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:dn.mass,stiffness:o,damping:a}}else{const t=dE(n);e={...e,...t,mass:dn.mass},e.isResolvedFromDuration=!0}return e}function tx(n=dn.visualDuration,e=dn.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const a=t.keyframes[0],c=t.keyframes[t.keyframes.length-1],u={done:!1,value:a},{stiffness:d,damping:h,mass:m,duration:v,velocity:g,isResolvedFromDuration:y}=vE({...t,velocity:-Pr(t.velocity||0)}),M=g||0,A=h/(2*Math.sqrt(d*m)),S=c-a,x=Pr(Math.sqrt(d/m)),D=Math.abs(S)<5;r||(r=D?dn.restSpeed.granular:dn.restSpeed.default),o||(o=D?dn.restDelta.granular:dn.restDelta.default);let I;if(A<1){const P=ch(x,A);I=L=>{const F=Math.exp(-A*x*L);return c-F*((M+A*x*S)/P*Math.sin(P*L)+S*Math.cos(P*L))}}else if(A===1)I=P=>c-Math.exp(-x*P)*(S+(M+x*S)*P);else{const P=x*Math.sqrt(A*A-1);I=L=>{const F=Math.exp(-A*x*L),T=Math.min(P*L,300);return c-F*((M+A*x*S)*Math.sinh(T)+P*S*Math.cosh(T))/P}}const b={calculatedDuration:y&&v||null,next:P=>{const L=I(P);if(y)u.done=P>=v;else{let F=0;A<1&&(F=P===0?br(M):ex(I,P,L));const T=Math.abs(F)<=r,w=Math.abs(c-L)<=o;u.done=T&&w}return u.value=u.done?c:L,u},toString:()=>{const P=Math.min(x_(b),th),L=y_(F=>b.next(P*F).value,P,30);return P+"ms "+L}};return b}function Jg({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:c,min:u,max:d,restDelta:h=.5,restSpeed:m}){const v=n[0],g={done:!1,value:v},y=T=>u!==void 0&&T<u||d!==void 0&&T>d,M=T=>u===void 0?d:d===void 0||Math.abs(u-T)<Math.abs(d-T)?u:d;let A=t*e;const S=v+A,x=c===void 0?S:c(S);x!==S&&(A=x-v);const D=T=>-A*Math.exp(-T/r),I=T=>x+D(T),b=T=>{const w=D(T),B=I(T);g.done=Math.abs(w)<=h,g.value=g.done?x:B};let P,L;const F=T=>{y(g.value)&&(P=T,L=tx({keyframes:[g.value,M(g.value)],velocity:ex(I,T,g.value),damping:o,stiffness:a,restDelta:h,restSpeed:m}))};return F(0),{calculatedDuration:null,next:T=>{let w=!1;return!L&&P===void 0&&(w=!0,b(T),F(T)),P!==void 0&&T>=P?L.next(T-P):(!w&&b(T),g)}}}const _E=il(.42,0,1,1),xE=il(0,0,.58,1),nx=il(.42,0,.58,1),yE=n=>Array.isArray(n)&&typeof n[0]!="number",SE={linear:mi,easeIn:_E,easeInOut:nx,easeOut:xE,circIn:Np,circInOut:F_,circOut:U_,backIn:Lp,backInOut:N_,backOut:L_,anticipate:I_},ev=n=>{if(Rp(n)){J1(n.length===4);const[e,t,r,o]=n;return il(e,t,r,o)}else if(typeof n=="string")return SE[n];return n};function ME(n,e,t){const r=[],o=t||J_,a=n.length-1;for(let c=0;c<a;c++){let u=o(n[c],n[c+1]);if(e){const d=Array.isArray(e)?e[c]||mi:e;u=rl(d,u)}r.push(u)}return r}function EE(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const a=n.length;if(J1(a===e.length),a===1)return()=>e[0];if(a===2&&e[0]===e[1])return()=>e[1];const c=n[0]===n[1];n[0]>n[a-1]&&(n=[...n].reverse(),e=[...e].reverse());const u=ME(e,r,o),d=u.length,h=m=>{if(c&&m<n[0])return e[0];let v=0;if(d>1)for(;v<n.length-2&&!(m<n[v+1]);v++);const g=Oo(n[v],n[v+1],m);return u[v](g)};return t?m=>h(Nr(n[0],n[a-1],m)):h}function TE(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=Oo(0,e,r);n.push(ln(t,1,o))}}function wE(n){const e=[0];return TE(e,n.length-1),e}function AE(n,e){return n.map(t=>t*e)}function RE(n,e){return n.map(()=>e||nx).splice(0,n.length-1)}function eu({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=yE(r)?r.map(ev):ev(r),a={done:!1,value:e[0]},c=AE(t&&t.length===e.length?t:wE(e),n),u=EE(c,e,{ease:Array.isArray(o)?o:RE(e,o)});return{calculatedDuration:n,next:d=>(a.value=u(d),a.done=d>=n,a)}}const CE=n=>{const e=({timestamp:t})=>n(t);return{start:()=>nn.update(e,!0),stop:()=>fs(e),now:()=>Un.isProcessing?Un.timestamp:rr.now()}},bE={decay:Jg,inertia:Jg,tween:eu,keyframes:eu,spring:tx},PE=n=>n/100;class kp extends Z_{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:d}=this.options;d&&d()};const{name:t,motionValue:r,element:o,keyframes:a}=this.options,c=(o==null?void 0:o.KeyframeResolver)||Op,u=(d,h)=>this.onKeyframesResolved(d,h);this.resolver=new c(a,u,t,r,o),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:r=0,repeatDelay:o=0,repeatType:a,velocity:c=0}=this.options,u=Ap(t)?t:bE[t]||eu;let d,h;u!==eu&&typeof e[0]!="number"&&(d=rl(PE,J_(e[0],e[1])),e=[0,100]);const m=u({...this.options,keyframes:e});a==="mirror"&&(h=u({...this.options,keyframes:[...e].reverse(),velocity:-c})),m.calculatedDuration===null&&(m.calculatedDuration=x_(m));const{calculatedDuration:v}=m,g=v+o,y=g*(r+1)-o;return{generator:m,mirroredGenerator:h,mapPercentToKeyframes:d,calculatedDuration:v,resolvedDuration:g,totalDuration:y}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,t=!1){const{resolved:r}=this;if(!r){const{keyframes:T}=this.options;return{done:!0,value:T[T.length-1]}}const{finalKeyframe:o,generator:a,mirroredGenerator:c,mapPercentToKeyframes:u,keyframes:d,calculatedDuration:h,totalDuration:m,resolvedDuration:v}=r;if(this.startTime===null)return a.next(0);const{delay:g,repeat:y,repeatType:M,repeatDelay:A,onUpdate:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-m/this.speed,this.startTime)),t?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const x=this.currentTime-g*(this.speed>=0?1:-1),D=this.speed>=0?x<0:x>m;this.currentTime=Math.max(x,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=m);let I=this.currentTime,b=a;if(y){const T=Math.min(this.currentTime,m)/v;let w=Math.floor(T),B=T%1;!B&&T>=1&&(B=1),B===1&&w--,w=Math.min(w,y+1),!!(w%2)&&(M==="reverse"?(B=1-B,A&&(B-=A/v)):M==="mirror"&&(b=c)),I=Nr(0,1,B)*v}const P=D?{done:!1,value:d[0]}:b.next(I);u&&(P.value=u(P.value));let{done:L}=P;!D&&h!==null&&(L=this.speed>=0?this.currentTime>=m:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&L);return F&&o!==void 0&&(P.value=xu(d,this.options,o)),S&&S(P.value),F&&this.finish(),P}get duration(){const{resolved:e}=this;return e?Pr(e.calculatedDuration):0}get time(){return Pr(this.currentTime)}set time(e){e=br(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=Pr(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=CE,onPlay:t,startTime:r}=this.options;this.driver||(this.driver=e(a=>this.tick(a))),t&&t();const o=this.driver.now();this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=o):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const DE=new Set(["opacity","clipPath","filter","transform"]);function LE(n,e,t,{delay:r=0,duration:o=300,repeat:a=0,repeatType:c="loop",ease:u="easeInOut",times:d}={}){const h={[e]:t};d&&(h.offset=d);const m=M_(u,o);return Array.isArray(m)&&(h.easing=m),n.animate(h,{delay:r,duration:o,easing:Array.isArray(m)?"linear":m,fill:"both",iterations:a+1,direction:c==="reverse"?"alternate":"normal"})}const NE=fp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),tu=10,IE=2e4;function UE(n){return Ap(n.type)||n.type==="spring"||!S_(n.ease)}function FE(n,e){const t=new kp({...e,keyframes:n,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:n[0]};const o=[];let a=0;for(;!r.done&&a<IE;)r=t.sample(a),o.push(r.value),a+=tu;return{times:void 0,keyframes:o,duration:a-tu,ease:"linear"}}const ix={anticipate:I_,backInOut:N_,circInOut:F_};function OE(n){return n in ix}class tv extends Z_{constructor(e){super(e);const{name:t,motionValue:r,element:o,keyframes:a}=this.options;this.resolver=new $_(a,(c,u)=>this.onKeyframesResolved(c,u),t,r,o),this.resolver.scheduleResolve()}initPlayback(e,t){let{duration:r=300,times:o,ease:a,type:c,motionValue:u,name:d,startTime:h}=this.options;if(!u.owner||!u.owner.current)return!1;if(typeof a=="string"&&Qc()&&OE(a)&&(a=ix[a]),UE(this.options)){const{onComplete:v,onUpdate:g,motionValue:y,element:M,...A}=this.options,S=FE(e,A);e=S.keyframes,e.length===1&&(e[1]=e[0]),r=S.duration,o=S.times,a=S.ease,c="keyframes"}const m=LE(u.owner.current,d,e,{...this.options,duration:r,times:o,ease:a});return m.startTime=h??this.calcStartTime(),this.pendingTimeline?(kg(m,this.pendingTimeline),this.pendingTimeline=void 0):m.onfinish=()=>{const{onComplete:v}=this.options;u.set(xu(e,this.options,t)),v&&v(),this.cancel(),this.resolveFinishedPromise()},{animation:m,duration:r,times:o,type:c,ease:a,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return Pr(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return Pr(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.currentTime=br(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:t}=this;if(!t)return mi;const{animation:r}=t;kg(r,e)}return mi}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.playState==="finished"&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:r,duration:o,type:a,ease:c,times:u}=e;if(t.playState==="idle"||t.playState==="finished")return;if(this.time){const{motionValue:h,onUpdate:m,onComplete:v,element:g,...y}=this.options,M=new kp({...y,keyframes:r,duration:o,type:a,ease:c,times:u,isGenerator:!0}),A=br(this.time);h.setWithVelocity(M.sample(A-tu).value,M.sample(A).value,tu)}const{onStop:d}=this.options;d&&d(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:r,repeatDelay:o,repeatType:a,damping:c,type:u}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:h}=t.owner.getProps();return NE()&&r&&DE.has(r)&&!d&&!h&&!o&&a!=="mirror"&&c!==0&&u!=="inertia"}}const BE={type:"spring",stiffness:500,damping:25,restSpeed:10},kE=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),zE={type:"keyframes",duration:.8},VE={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},HE=(n,{keyframes:e})=>e.length>2?zE:Ws.has(n)?n.startsWith("scale")?kE(e[1]):BE:VE;function GE({when:n,delay:e,delayChildren:t,staggerChildren:r,staggerDirection:o,repeat:a,repeatType:c,repeatDelay:u,from:d,elapsed:h,...m}){return!!Object.keys(m).length}const zp=(n,e,t,r={},o,a)=>c=>{const u=wp(r,n)||{},d=u.delay||r.delay||0;let{elapsed:h=0}=r;h=h-br(d);let m={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...u,delay:-h,onUpdate:g=>{e.set(g),u.onUpdate&&u.onUpdate(g)},onComplete:()=>{c(),u.onComplete&&u.onComplete()},name:n,motionValue:e,element:a?void 0:o};GE(u)||(m={...m,...HE(n,m)}),m.duration&&(m.duration=br(m.duration)),m.repeatDelay&&(m.repeatDelay=br(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let v=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(m.duration=0,m.delay===0&&(v=!0)),v&&!a&&e.get()!==void 0){const g=xu(m.keyframes,u);if(g!==void 0)return nn.update(()=>{m.onUpdate(g),m.onComplete()}),new lM([])}return!a&&tv.supports(m)?new tv(m):new kp(m)};function WE({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function rx(n,e,{delay:t=0,transitionOverride:r,type:o}={}){var a;let{transition:c=n.getDefaultTransition(),transitionEnd:u,...d}=e;r&&(c=r);const h=[],m=o&&n.animationState&&n.animationState.getState()[o];for(const v in d){const g=n.getValue(v,(a=n.latestValues[v])!==null&&a!==void 0?a:null),y=d[v];if(y===void 0||m&&WE(m,v))continue;const M={delay:t,...wp(c||{},v)};let A=!1;if(window.MotionHandoffAnimation){const x=C_(n);if(x){const D=window.MotionHandoffAnimation(x,v,nn);D!==null&&(M.startTime=D,A=!0)}}ih(n,v),g.start(zp(v,g,y,n.shouldReduceMotion&&A_.has(v)?{type:!1}:M,n,A));const S=g.animation;S&&h.push(S)}return u&&Promise.all(h).then(()=>{nn.update(()=>{u&&MM(n,u)})}),h}function uh(n,e,t={}){var r;const o=_u(n,e,t.type==="exit"?(r=n.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:a=n.getDefaultTransition()||{}}=o||{};t.transitionOverride&&(a=t.transitionOverride);const c=o?()=>Promise.all(rx(n,o,t)):()=>Promise.resolve(),u=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:m=0,staggerChildren:v,staggerDirection:g}=a;return XE(n,e,m+h,v,g,t)}:()=>Promise.resolve(),{when:d}=a;if(d){const[h,m]=d==="beforeChildren"?[c,u]:[u,c];return h().then(()=>m())}else return Promise.all([c(),u(t.delay)])}function XE(n,e,t=0,r=0,o=1,a){const c=[],u=(n.variantChildren.size-1)*r,d=o===1?(h=0)=>h*r:(h=0)=>u-h*r;return Array.from(n.variantChildren).sort(jE).forEach((h,m)=>{h.notify("AnimationStart",e),c.push(uh(h,e,{...a,delay:t+d(m)}).then(()=>h.notify("AnimationComplete",e)))}),Promise.all(c)}function jE(n,e){return n.sortNodePosition(e)}function YE(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(a=>uh(n,a,t));r=Promise.all(o)}else if(typeof e=="string")r=uh(n,e,t);else{const o=typeof e=="function"?_u(n,e,t.custom):e;r=Promise.all(rx(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}const qE=hp.length;function sx(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?sx(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<qE;t++){const r=hp[t],o=n.props[r];(Ya(o)||o===!1)&&(e[r]=o)}return e}const KE=[...dp].reverse(),$E=dp.length;function ZE(n){return e=>Promise.all(e.map(({animation:t,options:r})=>YE(n,t,r)))}function QE(n){let e=ZE(n),t=nv(),r=!0;const o=d=>(h,m)=>{var v;const g=_u(n,m,d==="exit"?(v=n.presenceContext)===null||v===void 0?void 0:v.custom:void 0);if(g){const{transition:y,transitionEnd:M,...A}=g;h={...h,...A,...M}}return h};function a(d){e=d(n)}function c(d){const{props:h}=n,m=sx(n.parent)||{},v=[],g=new Set;let y={},M=1/0;for(let S=0;S<$E;S++){const x=KE[S],D=t[x],I=h[x]!==void 0?h[x]:m[x],b=Ya(I),P=x===d?D.isActive:null;P===!1&&(M=S);let L=I===m[x]&&I!==h[x]&&b;if(L&&r&&n.manuallyAnimateOnMount&&(L=!1),D.protectedKeys={...y},!D.isActive&&P===null||!I&&!D.prevProp||gu(I)||typeof I=="boolean")continue;const F=JE(D.prevProp,I);let T=F||x===d&&D.isActive&&!L&&b||S>M&&b,w=!1;const B=Array.isArray(I)?I:[I];let Y=B.reduce(o(x),{});P===!1&&(Y={});const{prevResolvedValues:J={}}=D,se={...J,...Y},q=$=>{T=!0,g.has($)&&(w=!0,g.delete($)),D.needsAnimating[$]=!0;const H=n.getValue($);H&&(H.liveStyle=!1)};for(const $ in se){const H=Y[$],Z=J[$];if(y.hasOwnProperty($))continue;let X=!1;eh(H)&&eh(Z)?X=!__(H,Z):X=H!==Z,X?H!=null?q($):g.add($):H!==void 0&&g.has($)?q($):D.protectedKeys[$]=!0}D.prevProp=I,D.prevResolvedValues=Y,D.isActive&&(y={...y,...Y}),r&&n.blockInitialAnimation&&(T=!1),T&&(!(L&&F)||w)&&v.push(...B.map($=>({animation:$,options:{type:x}})))}if(g.size){const S={};g.forEach(x=>{const D=n.getBaseTarget(x),I=n.getValue(x);I&&(I.liveStyle=!0),S[x]=D??null}),v.push({animation:S})}let A=!!v.length;return r&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(A=!1),r=!1,A?e(v):Promise.resolve()}function u(d,h){var m;if(t[d].isActive===h)return Promise.resolve();(m=n.variantChildren)===null||m===void 0||m.forEach(g=>{var y;return(y=g.animationState)===null||y===void 0?void 0:y.setActive(d,h)}),t[d].isActive=h;const v=c(d);for(const g in t)t[g].protectedKeys={};return v}return{animateChanges:c,setActive:u,setAnimateFunction:a,getState:()=>t,reset:()=>{t=nv(),r=!0}}}function JE(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!__(e,n):!1}function Cs(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function nv(){return{animate:Cs(!0),whileInView:Cs(),whileHover:Cs(),whileTap:Cs(),whileDrag:Cs(),whileFocus:Cs(),exit:Cs()}}class hs{constructor(e){this.isMounted=!1,this.node=e}update(){}}class e3 extends hs{constructor(e){super(e),e.animationState||(e.animationState=QE(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();gu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let t3=0;class n3 extends hs{constructor(){super(...arguments),this.id=t3++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const i3={animation:{Feature:e3},exit:{Feature:n3}};function Za(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}function sl(n){return{point:{x:n.pageX,y:n.pageY}}}const r3=n=>e=>Cp(e)&&n(e,sl(e));function Ha(n,e,t,r){return Za(n,e,r3(t),r)}const iv=(n,e)=>Math.abs(n-e);function s3(n,e){const t=iv(n.x,e.x),r=iv(n.y,e.y);return Math.sqrt(t**2+r**2)}class ox{constructor(e,t,{transformPagePoint:r,contextWindow:o,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=dd(this.lastMoveEventInfo,this.history),g=this.startEvent!==null,y=s3(v.offset,{x:0,y:0})>=3;if(!g&&!y)return;const{point:M}=v,{timestamp:A}=Un;this.history.push({...M,timestamp:A});const{onStart:S,onMove:x}=this.handlers;g||(S&&S(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),x&&x(this.lastMoveEvent,v)},this.handlePointerMove=(v,g)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=fd(g,this.transformPagePoint),nn.update(this.updatePoint,!0)},this.handlePointerUp=(v,g)=>{this.end();const{onEnd:y,onSessionEnd:M,resumeAnimation:A}=this.handlers;if(this.dragSnapToOrigin&&A&&A(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=dd(v.type==="pointercancel"?this.lastMoveEventInfo:fd(g,this.transformPagePoint),this.history);this.startEvent&&y&&y(v,S),M&&M(v,S)},!Cp(e))return;this.dragSnapToOrigin=a,this.handlers=t,this.transformPagePoint=r,this.contextWindow=o||window;const c=sl(e),u=fd(c,this.transformPagePoint),{point:d}=u,{timestamp:h}=Un;this.history=[{...d,timestamp:h}];const{onSessionStart:m}=t;m&&m(e,dd(u,this.history)),this.removeListeners=rl(Ha(this.contextWindow,"pointermove",this.handlePointerMove),Ha(this.contextWindow,"pointerup",this.handlePointerUp),Ha(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),fs(this.updatePoint)}}function fd(n,e){return e?{point:e(n.point)}:n}function rv(n,e){return{x:n.x-e.x,y:n.y-e.y}}function dd({point:n},e){return{point:n,delta:rv(n,ax(e)),offset:rv(n,o3(e)),velocity:a3(e,.1)}}function o3(n){return n[0]}function ax(n){return n[n.length-1]}function a3(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=ax(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>br(e)));)t--;if(!r)return{x:0,y:0};const a=Pr(o.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const c={x:(o.x-r.x)/a,y:(o.y-r.y)/a};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}const lx=1e-4,l3=1-lx,c3=1+lx,cx=.01,u3=0-cx,f3=0+cx;function gi(n){return n.max-n.min}function d3(n,e,t){return Math.abs(n-e)<=t}function sv(n,e,t,r=.5){n.origin=r,n.originPoint=ln(e.min,e.max,n.origin),n.scale=gi(t)/gi(e),n.translate=ln(t.min,t.max,n.origin)-n.originPoint,(n.scale>=l3&&n.scale<=c3||isNaN(n.scale))&&(n.scale=1),(n.translate>=u3&&n.translate<=f3||isNaN(n.translate))&&(n.translate=0)}function Ga(n,e,t,r){sv(n.x,e.x,t.x,r?r.originX:void 0),sv(n.y,e.y,t.y,r?r.originY:void 0)}function ov(n,e,t){n.min=t.min+e.min,n.max=n.min+gi(e)}function h3(n,e,t){ov(n.x,e.x,t.x),ov(n.y,e.y,t.y)}function av(n,e,t){n.min=e.min-t.min,n.max=n.min+gi(e)}function Wa(n,e,t){av(n.x,e.x,t.x),av(n.y,e.y,t.y)}function p3(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?ln(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?ln(t,n,r.max):Math.min(n,t)),n}function lv(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function m3(n,{top:e,left:t,bottom:r,right:o}){return{x:lv(n.x,t,o),y:lv(n.y,e,r)}}function cv(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function g3(n,e){return{x:cv(n.x,e.x),y:cv(n.y,e.y)}}function v3(n,e){let t=.5;const r=gi(n),o=gi(e);return o>r?t=Oo(e.min,e.max-r,n.min):r>o&&(t=Oo(n.min,n.max-o,e.min)),Nr(0,1,t)}function _3(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const fh=.35;function x3(n=fh){return n===!1?n=0:n===!0&&(n=fh),{x:uv(n,"left","right"),y:uv(n,"top","bottom")}}function uv(n,e,t){return{min:fv(n,e),max:fv(n,t)}}function fv(n,e){return typeof n=="number"?n:n[e]||0}const dv=()=>({translate:0,scale:1,origin:0,originPoint:0}),Do=()=>({x:dv(),y:dv()}),hv=()=>({min:0,max:0}),vn=()=>({x:hv(),y:hv()});function Ai(n){return[n("x"),n("y")]}function ux({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function y3({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function S3(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function hd(n){return n===void 0||n===1}function dh({scale:n,scaleX:e,scaleY:t}){return!hd(n)||!hd(e)||!hd(t)}function Is(n){return dh(n)||fx(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function fx(n){return pv(n.x)||pv(n.y)}function pv(n){return n&&n!=="0%"}function nu(n,e,t){const r=n-t,o=e*r;return t+o}function mv(n,e,t,r,o){return o!==void 0&&(n=nu(n,o,r)),nu(n,t,r)+e}function hh(n,e=0,t=1,r,o){n.min=mv(n.min,e,t,r,o),n.max=mv(n.max,e,t,r,o)}function dx(n,{x:e,y:t}){hh(n.x,e.translate,e.scale,e.originPoint),hh(n.y,t.translate,t.scale,t.originPoint)}const gv=.999999999999,vv=1.0000000000001;function M3(n,e,t,r=!1){const o=t.length;if(!o)return;e.x=e.y=1;let a,c;for(let u=0;u<o;u++){a=t[u],c=a.projectionDelta;const{visualElement:d}=a.options;d&&d.props.style&&d.props.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&No(n,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),c&&(e.x*=c.x.scale,e.y*=c.y.scale,dx(n,c)),r&&Is(a.latestValues)&&No(n,a.latestValues))}e.x<vv&&e.x>gv&&(e.x=1),e.y<vv&&e.y>gv&&(e.y=1)}function Lo(n,e){n.min=n.min+e,n.max=n.max+e}function _v(n,e,t,r,o=.5){const a=ln(n.min,n.max,o);hh(n,e,t,a,r)}function No(n,e){_v(n.x,e.x,e.scaleX,e.scale,e.originX),_v(n.y,e.y,e.scaleY,e.scale,e.originY)}function hx(n,e){return ux(S3(n.getBoundingClientRect(),e))}function E3(n,e,t){const r=hx(n,t),{scroll:o}=e;return o&&(Lo(r.x,o.offset.x),Lo(r.y,o.offset.y)),r}const px=({current:n})=>n?n.ownerDocument.defaultView:null,T3=new WeakMap;class w3{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=vn(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=m=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(sl(m).point)},a=(m,v)=>{const{drag:g,dragPropagation:y,onDragStart:M}=this.getProps();if(g&&!y&&(this.openDragLock&&this.openDragLock(),this.openDragLock=vM(g),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ai(S=>{let x=this.getAxisMotionValue(S).get()||0;if(ir.test(x)){const{projection:D}=this.visualElement;if(D&&D.layout){const I=D.layout.layoutBox[S];I&&(x=gi(I)*(parseFloat(x)/100))}}this.originPoint[S]=x}),M&&nn.postRender(()=>M(m,v)),ih(this.visualElement,"transform");const{animationState:A}=this.visualElement;A&&A.setActive("whileDrag",!0)},c=(m,v)=>{const{dragPropagation:g,dragDirectionLock:y,onDirectionLock:M,onDrag:A}=this.getProps();if(!g&&!this.openDragLock)return;const{offset:S}=v;if(y&&this.currentDirection===null){this.currentDirection=A3(S),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",v.point,S),this.updateAxis("y",v.point,S),this.visualElement.render(),A&&A(m,v)},u=(m,v)=>this.stop(m,v),d=()=>Ai(m=>{var v;return this.getAnimationState(m)==="paused"&&((v=this.getAxisMotionValue(m).animation)===null||v===void 0?void 0:v.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new ox(e,{onSessionStart:o,onStart:a,onMove:c,onSessionEnd:u,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:px(this.visualElement)})}stop(e,t){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=t;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&nn.postRender(()=>a(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!hc(e,o,this.currentDirection))return;const a=this.getAxisMotionValue(e);let c=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(c=p3(c,this.constraints[e],this.elastic[e])),a.set(c)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,a=this.constraints;t&&bo(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&o?this.constraints=m3(o.layoutBox,t):this.constraints=!1,this.elastic=x3(r),a!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&Ai(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=_3(o.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!bo(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const a=E3(r,o.root,this.visualElement.getTransformPagePoint());let c=g3(o.layout.layoutBox,a);if(t){const u=t(y3(c));this.hasMutatedConstraints=!!u,u&&(c=ux(u))}return c}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:a,dragSnapToOrigin:c,onDragTransitionEnd:u}=this.getProps(),d=this.constraints||{},h=Ai(m=>{if(!hc(m,t,this.currentDirection))return;let v=d&&d[m]||{};c&&(v={min:0,max:0});const g=o?200:1e6,y=o?40:1e7,M={type:"inertia",velocity:r?e[m]:0,bounceStiffness:g,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...a,...v};return this.startAxisValueAnimation(m,M)});return Promise.all(h).then(u)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return ih(this.visualElement,e),r.start(zp(e,r,0,t,this.visualElement,!1))}stopAnimation(){Ai(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Ai(e=>{var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.pause()})}getAnimationState(e){var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[t];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){Ai(t=>{const{drag:r}=this.getProps();if(!hc(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(t);if(o&&o.layout){const{min:c,max:u}=o.layout.layoutBox[t];a.set(e[t]-ln(c,u,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!bo(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};Ai(c=>{const u=this.getAxisMotionValue(c);if(u&&this.constraints!==!1){const d=u.get();o[c]=v3({min:d,max:d},this.constraints[c])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Ai(c=>{if(!hc(c,e,null))return;const u=this.getAxisMotionValue(c),{min:d,max:h}=this.constraints[c];u.set(ln(d,h,o[c]))})}addListeners(){if(!this.visualElement.current)return;T3.set(this.visualElement,this);const e=this.visualElement.current,t=Ha(e,"pointerdown",d=>{const{drag:h,dragListener:m=!0}=this.getProps();h&&m&&this.start(d)}),r=()=>{const{dragConstraints:d}=this.getProps();bo(d)&&d.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,a=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),nn.read(r);const c=Za(window,"resize",()=>this.scalePositionWithinConstraints()),u=o.addEventListener("didUpdate",(({delta:d,hasLayoutChanged:h})=>{this.isDragging&&h&&(Ai(m=>{const v=this.getAxisMotionValue(m);v&&(this.originPoint[m]+=d[m].translate,v.set(v.get()+d[m].translate))}),this.visualElement.render())}));return()=>{c(),t(),a(),u&&u()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:c=fh,dragMomentum:u=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:a,dragElastic:c,dragMomentum:u}}}function hc(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function A3(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class R3 extends hs{constructor(e){super(e),this.removeGroupControls=mi,this.removeListeners=mi,this.controls=new w3(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||mi}unmount(){this.removeGroupControls(),this.removeListeners()}}const xv=n=>(e,t)=>{n&&nn.postRender(()=>n(e,t))};class C3 extends hs{constructor(){super(...arguments),this.removePointerDownListener=mi}onPointerDown(e){this.session=new ox(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:px(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:xv(e),onStart:xv(t),onMove:r,onEnd:(a,c)=>{delete this.session,o&&nn.postRender(()=>o(a,c))}}}mount(){this.removePointerDownListener=Ha(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Hc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function yv(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const Aa={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(gt.test(n))n=parseFloat(n);else return n;const t=yv(n,e.target.x),r=yv(n,e.target.y);return`${t}% ${r}%`}},b3={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=ds.parse(n);if(o.length>5)return r;const a=ds.createTransformer(n),c=typeof o[0]!="number"?1:0,u=t.x.scale*e.x,d=t.y.scale*e.y;o[0+c]/=u,o[1+c]/=d;const h=ln(u,d,.5);return typeof o[2+c]=="number"&&(o[2+c]/=h),typeof o[3+c]=="number"&&(o[3+c]/=h),a(o)}};class P3 extends Pe.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:a}=e;$2(D3),a&&(t.group&&t.group.add(a),r&&r.register&&o&&r.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),Hc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:a}=this.props,c=r.projection;return c&&(c.isPresent=a,o||e.layoutDependency!==t||t===void 0?c.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?c.promote():c.relegate()||nn.postRender(()=>{const u=c.getStack();(!u||!u.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),mp.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function mx(n){const[e,t]=Z1(),r=Pe.useContext(ap);return K.jsx(P3,{...n,layoutGroup:r,switchLayoutGroup:Pe.useContext(s_),isPresent:e,safeToRemove:t})}const D3={borderRadius:{...Aa,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Aa,borderTopRightRadius:Aa,borderBottomLeftRadius:Aa,borderBottomRightRadius:Aa,boxShadow:b3};function L3(n,e,t){const r=jn(n)?n:Ka(n);return r.start(zp("",r,e,t)),r.animation}function N3(n){return n instanceof SVGElement&&n.tagName!=="svg"}const I3=(n,e)=>n.depth-e.depth;class U3{constructor(){this.children=[],this.isDirty=!1}add(e){bp(this.children,e),this.isDirty=!0}remove(e){Pp(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(I3),this.isDirty=!1,this.children.forEach(e)}}function F3(n,e){const t=rr.now(),r=({timestamp:o})=>{const a=o-t;a>=e&&(fs(r),n(a-e))};return nn.read(r,!0),()=>fs(r)}const gx=["TopLeft","TopRight","BottomLeft","BottomRight"],O3=gx.length,Sv=n=>typeof n=="string"?parseFloat(n):n,Mv=n=>typeof n=="number"||gt.test(n);function B3(n,e,t,r,o,a){o?(n.opacity=ln(0,t.opacity!==void 0?t.opacity:1,k3(r)),n.opacityExit=ln(e.opacity!==void 0?e.opacity:1,0,z3(r))):a&&(n.opacity=ln(e.opacity!==void 0?e.opacity:1,t.opacity!==void 0?t.opacity:1,r));for(let c=0;c<O3;c++){const u=`border${gx[c]}Radius`;let d=Ev(e,u),h=Ev(t,u);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||Mv(d)===Mv(h)?(n[u]=Math.max(ln(Sv(d),Sv(h),r),0),(ir.test(h)||ir.test(d))&&(n[u]+="%")):n[u]=h}(e.rotate||t.rotate)&&(n.rotate=ln(e.rotate||0,t.rotate||0,r))}function Ev(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const k3=vx(0,.5,U_),z3=vx(.5,.95,mi);function vx(n,e,t){return r=>r<n?0:r>e?1:t(Oo(n,e,r))}function Tv(n,e){n.min=e.min,n.max=e.max}function Ti(n,e){Tv(n.x,e.x),Tv(n.y,e.y)}function wv(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function Av(n,e,t,r,o){return n-=e,n=nu(n,1/t,r),o!==void 0&&(n=nu(n,1/o,r)),n}function V3(n,e=0,t=1,r=.5,o,a=n,c=n){if(ir.test(e)&&(e=parseFloat(e),e=ln(c.min,c.max,e/100)-c.min),typeof e!="number")return;let u=ln(a.min,a.max,r);n===a&&(u-=e),n.min=Av(n.min,e,t,u,o),n.max=Av(n.max,e,t,u,o)}function Rv(n,e,[t,r,o],a,c){V3(n,e[t],e[r],e[o],e.scale,a,c)}const H3=["x","scaleX","originX"],G3=["y","scaleY","originY"];function Cv(n,e,t,r){Rv(n.x,e,H3,t?t.x:void 0,r?r.x:void 0),Rv(n.y,e,G3,t?t.y:void 0,r?r.y:void 0)}function bv(n){return n.translate===0&&n.scale===1}function _x(n){return bv(n.x)&&bv(n.y)}function Pv(n,e){return n.min===e.min&&n.max===e.max}function W3(n,e){return Pv(n.x,e.x)&&Pv(n.y,e.y)}function Dv(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function xx(n,e){return Dv(n.x,e.x)&&Dv(n.y,e.y)}function Lv(n){return gi(n.x)/gi(n.y)}function Nv(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class X3{constructor(){this.members=[]}add(e){bp(this.members,e),e.scheduleRender()}remove(e){if(Pp(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(o=>e===o);if(t===0)return!1;let r;for(let o=t;o>=0;o--){const a=this.members[o];if(a.isPresent!==!1){r=a;break}}return r?(this.promote(r),!0):!1}promote(e,t){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function j3(n,e,t){let r="";const o=n.x.translate/e.x,a=n.y.translate/e.y,c=(t==null?void 0:t.z)||0;if((o||a||c)&&(r=`translate3d(${o}px, ${a}px, ${c}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:m,rotateX:v,rotateY:g,skewX:y,skewY:M}=t;h&&(r=`perspective(${h}px) ${r}`),m&&(r+=`rotate(${m}deg) `),v&&(r+=`rotateX(${v}deg) `),g&&(r+=`rotateY(${g}deg) `),y&&(r+=`skewX(${y}deg) `),M&&(r+=`skewY(${M}deg) `)}const u=n.x.scale*e.x,d=n.y.scale*e.y;return(u!==1||d!==1)&&(r+=`scale(${u}, ${d})`),r||"none"}const Us={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Oa=typeof window<"u"&&window.MotionDebug!==void 0,pd=["","X","Y","Z"],Y3={visibility:"hidden"},Iv=1e3;let q3=0;function md(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function yx(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=C_(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:a}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",nn,!(o||a))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&yx(r)}function Sx({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(c={},u=e==null?void 0:e()){this.id=q3++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Oa&&(Us.totalNodes=Us.resolvedTargetDeltas=Us.recalculatedProjection=0),this.nodes.forEach(Z3),this.nodes.forEach(nT),this.nodes.forEach(iT),this.nodes.forEach(Q3),Oa&&window.MotionDebug.record(Us)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=u?u.root||u:this,this.path=u?[...u.path,u]:[],this.parent=u,this.depth=u?u.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new U3)}addEventListener(c,u){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new Dp),this.eventHandlers.get(c).add(u)}notifyListeners(c,...u){const d=this.eventHandlers.get(c);d&&d.notify(...u)}hasListeners(c){return this.eventHandlers.has(c)}mount(c,u=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=N3(c),this.instance=c;const{layoutId:d,layout:h,visualElement:m}=this.options;if(m&&!m.current&&m.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),u&&(h||d)&&(this.isLayoutDirty=!0),n){let v;const g=()=>this.root.updateBlockedByResize=!1;n(c,()=>{this.root.updateBlockedByResize=!0,v&&v(),v=F3(g,250),Hc.hasAnimatedSinceResize&&(Hc.hasAnimatedSinceResize=!1,this.nodes.forEach(Fv))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&m&&(d||h)&&this.addEventListener("didUpdate",({delta:v,hasLayoutChanged:g,hasRelativeTargetChanged:y,layout:M})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const A=this.options.transition||m.getDefaultTransition()||lT,{onLayoutAnimationStart:S,onLayoutAnimationComplete:x}=m.getProps(),D=!this.targetLayout||!xx(this.targetLayout,M)||y,I=!g&&y;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||I||g&&(D||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(v,I);const b={...wp(A,"layout"),onPlay:S,onComplete:x};(m.shouldReduceMotion||this.options.layoutRoot)&&(b.delay=0,b.type=!1),this.startAnimation(b)}else g||Fv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=M})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,fs(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(rT),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&yx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const v=this.path[m];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:u,layout:d}=this.options;if(u===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Uv);return}this.isUpdating||this.nodes.forEach(eT),this.isUpdating=!1,this.nodes.forEach(tT),this.nodes.forEach(K3),this.nodes.forEach($3),this.clearAllSnapshots();const u=rr.now();Un.delta=Nr(0,1e3/60,u-Un.timestamp),Un.timestamp=u,Un.isProcessing=!0,sd.update.process(Un),sd.preRender.process(Un),sd.render.process(Un),Un.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,mp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(J3),this.sharedNodes.forEach(sT)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,nn.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){nn.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutCorrected=vn(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:u}=this.options;u&&u.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let u=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(u=!1),u){const d=r(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,u=this.projectionDelta&&!_x(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,m=h!==this.prevTransformTemplateValue;c&&(u||Is(this.latestValues)||m)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const u=this.measurePageBox();let d=this.removeElementScroll(u);return c&&(d=this.removeTransform(d)),cT(d),{animationId:this.root.animationId,measuredBox:u,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:u}=this.options;if(!u)return vn();const d=u.measureViewportBox();if(!(((c=this.scroll)===null||c===void 0?void 0:c.wasRoot)||this.path.some(uT))){const{scroll:m}=this.root;m&&(Lo(d.x,m.offset.x),Lo(d.y,m.offset.y))}return d}removeElementScroll(c){var u;const d=vn();if(Ti(d,c),!((u=this.scroll)===null||u===void 0)&&u.wasRoot)return d;for(let h=0;h<this.path.length;h++){const m=this.path[h],{scroll:v,options:g}=m;m!==this.root&&v&&g.layoutScroll&&(v.wasRoot&&Ti(d,c),Lo(d.x,v.offset.x),Lo(d.y,v.offset.y))}return d}applyTransform(c,u=!1){const d=vn();Ti(d,c);for(let h=0;h<this.path.length;h++){const m=this.path[h];!u&&m.options.layoutScroll&&m.scroll&&m!==m.root&&No(d,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),Is(m.latestValues)&&No(d,m.latestValues)}return Is(this.latestValues)&&No(d,this.latestValues),d}removeTransform(c){const u=vn();Ti(u,c);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!h.instance||!Is(h.latestValues))continue;dh(h.latestValues)&&h.updateSnapshot();const m=vn(),v=h.measurePageBox();Ti(m,v),Cv(u,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,m)}return Is(this.latestValues)&&Cv(u,this.latestValues),u}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Un.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var u;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==d;if(!(c||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((u=this.parent)===null||u===void 0)&&u.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:v,layoutId:g}=this.options;if(!(!this.layout||!(v||g))){if(this.resolvedRelativeTargetAt=Un.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=vn(),this.relativeTargetOrigin=vn(),Wa(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),Ti(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=vn(),this.targetWithTransforms=vn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),h3(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ti(this.target,this.layout.layoutBox),dx(this.target,this.targetDelta)):Ti(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=vn(),this.relativeTargetOrigin=vn(),Wa(this.relativeTargetOrigin,this.target,y.target),Ti(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Oa&&Us.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||dh(this.parent.latestValues)||fx(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var c;const u=this.getLead(),d=!!this.resumingFrom||this!==u;let h=!0;if((this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty)&&(h=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===Un.timestamp&&(h=!1),h)return;const{layout:m,layoutId:v}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||v))return;Ti(this.layoutCorrected,this.layout.layoutBox);const g=this.treeScale.x,y=this.treeScale.y;M3(this.layoutCorrected,this.treeScale,this.path,d),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=vn());const{target:M}=u;if(!M){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(wv(this.prevProjectionDelta.x,this.projectionDelta.x),wv(this.prevProjectionDelta.y,this.projectionDelta.y)),Ga(this.projectionDelta,this.layoutCorrected,M,this.latestValues),(this.treeScale.x!==g||this.treeScale.y!==y||!Nv(this.projectionDelta.x,this.prevProjectionDelta.x)||!Nv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",M)),Oa&&Us.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var u;if((u=this.options.visualElement)===null||u===void 0||u.scheduleRender(),c){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Do(),this.projectionDelta=Do(),this.projectionDeltaWithTransform=Do()}setAnimationOrigin(c,u=!1){const d=this.snapshot,h=d?d.latestValues:{},m={...this.latestValues},v=Do();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!u;const g=vn(),y=d?d.source:void 0,M=this.layout?this.layout.source:void 0,A=y!==M,S=this.getStack(),x=!S||S.members.length<=1,D=!!(A&&!x&&this.options.crossfade===!0&&!this.path.some(aT));this.animationProgress=0;let I;this.mixTargetDelta=b=>{const P=b/1e3;Ov(v.x,c.x,P),Ov(v.y,c.y,P),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Wa(g,this.layout.layoutBox,this.relativeParent.layout.layoutBox),oT(this.relativeTarget,this.relativeTargetOrigin,g,P),I&&W3(this.relativeTarget,I)&&(this.isProjectionDirty=!1),I||(I=vn()),Ti(I,this.relativeTarget)),A&&(this.animationValues=m,B3(m,h,this.latestValues,P,D,x)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(fs(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=nn.update(()=>{Hc.hasAnimatedSinceResize=!0,this.currentAnimation=L3(0,Iv,{...c,onUpdate:u=>{this.mixTargetDelta(u),c.onUpdate&&c.onUpdate(u)},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Iv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:u,target:d,layout:h,latestValues:m}=c;if(!(!u||!d||!h)){if(this!==c&&this.layout&&h&&Mx(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||vn();const v=gi(this.layout.layoutBox.x);d.x.min=c.target.x.min,d.x.max=d.x.min+v;const g=gi(this.layout.layoutBox.y);d.y.min=c.target.y.min,d.y.max=d.y.min+g}Ti(u,d),No(u,m),Ga(this.projectionDeltaWithTransform,this.layoutCorrected,u,m)}}registerSharedNode(c,u){this.sharedNodes.has(c)||this.sharedNodes.set(c,new X3),this.sharedNodes.get(c).add(u);const h=u.options.initialPromotionConfig;u.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(u):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var c;const{layoutId:u}=this.options;return u?((c=this.getStack())===null||c===void 0?void 0:c.lead)||this:this}getPrevLead(){var c;const{layoutId:u}=this.options;return u?(c=this.getStack())===null||c===void 0?void 0:c.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:u,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),c&&(this.projectionDelta=void 0,this.needsReset=!0),u&&this.setOptions({transition:u})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let u=!1;const{latestValues:d}=c;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(u=!0),!u)return;const h={};d.z&&md("z",c,h,this.animationValues);for(let m=0;m<pd.length;m++)md(`rotate${pd[m]}`,c,h,this.animationValues),md(`skew${pd[m]}`,c,h,this.animationValues);c.render();for(const m in h)c.setStaticValue(m,h[m]),this.animationValues&&(this.animationValues[m]=h[m]);c.scheduleRender()}getProjectionStyles(c){var u,d;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Y3;const h={visibility:""},m=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=zc(c==null?void 0:c.pointerEvents)||"",h.transform=m?m(this.latestValues,""):"none",h;const v=this.getLead();if(!this.projectionDelta||!this.layout||!v.target){const A={};return this.options.layoutId&&(A.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,A.pointerEvents=zc(c==null?void 0:c.pointerEvents)||""),this.hasProjected&&!Is(this.latestValues)&&(A.transform=m?m({},""):"none",this.hasProjected=!1),A}const g=v.animationValues||v.latestValues;this.applyTransformsToTarget(),h.transform=j3(this.projectionDeltaWithTransform,this.treeScale,g),m&&(h.transform=m(g,h.transform));const{x:y,y:M}=this.projectionDelta;h.transformOrigin=`${y.origin*100}% ${M.origin*100}% 0`,v.animationValues?h.opacity=v===this?(d=(u=g.opacity)!==null&&u!==void 0?u:this.latestValues.opacity)!==null&&d!==void 0?d:1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:h.opacity=v===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const A in Zc){if(g[A]===void 0)continue;const{correct:S,applyTo:x}=Zc[A],D=h.transform==="none"?g[A]:S(g[A],v);if(x){const I=x.length;for(let b=0;b<I;b++)h[x[b]]=D}else h[A]=D}return this.options.layoutId&&(h.pointerEvents=v===this?zc(c==null?void 0:c.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var u;return(u=c.currentAnimation)===null||u===void 0?void 0:u.stop()}),this.root.nodes.forEach(Uv),this.root.sharedNodes.clear()}}}function K3(n){n.updateLayout()}function $3(n){var e;const t=((e=n.resumeFrom)===null||e===void 0?void 0:e.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=n.layout,{animationType:a}=n.options,c=t.source!==n.layout.source;a==="size"?Ai(v=>{const g=c?t.measuredBox[v]:t.layoutBox[v],y=gi(g);g.min=r[v].min,g.max=g.min+y}):Mx(a,t.layoutBox,r)&&Ai(v=>{const g=c?t.measuredBox[v]:t.layoutBox[v],y=gi(r[v]);g.max=g.min+y,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[v].max=n.relativeTarget[v].min+y)});const u=Do();Ga(u,r,t.layoutBox);const d=Do();c?Ga(d,n.applyTransform(o,!0),t.measuredBox):Ga(d,r,t.layoutBox);const h=!_x(u);let m=!1;if(!n.resumeFrom){const v=n.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:g,layout:y}=v;if(g&&y){const M=vn();Wa(M,t.layoutBox,g.layoutBox);const A=vn();Wa(A,r,y.layoutBox),xx(M,A)||(m=!0),v.options.layoutRoot&&(n.relativeTarget=A,n.relativeTargetOrigin=M,n.relativeParent=v)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:d,layoutDelta:u,hasLayoutChanged:h,hasRelativeTargetChanged:m})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function Z3(n){Oa&&Us.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function Q3(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function J3(n){n.clearSnapshot()}function Uv(n){n.clearMeasurements()}function eT(n){n.isLayoutDirty=!1}function tT(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function Fv(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function nT(n){n.resolveTargetDelta()}function iT(n){n.calcProjection()}function rT(n){n.resetSkewAndRotation()}function sT(n){n.removeLeadSnapshot()}function Ov(n,e,t){n.translate=ln(e.translate,0,t),n.scale=ln(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function Bv(n,e,t,r){n.min=ln(e.min,t.min,r),n.max=ln(e.max,t.max,r)}function oT(n,e,t,r){Bv(n.x,e.x,t.x,r),Bv(n.y,e.y,t.y,r)}function aT(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const lT={duration:.45,ease:[.4,0,.1,1]},kv=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),zv=kv("applewebkit/")&&!kv("chrome/")?Math.round:mi;function Vv(n){n.min=zv(n.min),n.max=zv(n.max)}function cT(n){Vv(n.x),Vv(n.y)}function Mx(n,e,t){return n==="position"||n==="preserve-aspect"&&!d3(Lv(e),Lv(t),.2)}function uT(n){var e;return n!==n.root&&((e=n.scroll)===null||e===void 0?void 0:e.wasRoot)}const fT=Sx({attachResizeListener:(n,e)=>Za(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),gd={current:void 0},Ex=Sx({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!gd.current){const n=new fT({});n.mount(window),n.setOptions({layoutScroll:!0}),gd.current=n}return gd.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),dT={pan:{Feature:C3},drag:{Feature:R3,ProjectionNode:Ex,MeasureLayout:mx}};function Hv(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,a=r[o];a&&nn.postRender(()=>a(e,sl(e)))}class hT extends hs{mount(){const{current:e}=this.node;e&&(this.unmount=dM(e,t=>(Hv(this.node,t,"Start"),r=>Hv(this.node,r,"End"))))}unmount(){}}class pT extends hs{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=rl(Za(this.node.current,"focus",()=>this.onFocus()),Za(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Gv(n,e,t){const{props:r}=n;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),a=r[o];a&&nn.postRender(()=>a(e,sl(e)))}class mT extends hs{mount(){const{current:e}=this.node;e&&(this.unmount=gM(e,t=>(Gv(this.node,t,"Start"),(r,{success:o})=>Gv(this.node,r,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const ph=new WeakMap,vd=new WeakMap,gT=n=>{const e=ph.get(n.target);e&&e(n)},vT=n=>{n.forEach(gT)};function _T({root:n,...e}){const t=n||document;vd.has(t)||vd.set(t,{});const r=vd.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(vT,{root:n,...e})),r[o]}function xT(n,e,t){const r=_T(e);return ph.set(n,t),r.observe(n),()=>{ph.delete(n),r.unobserve(n)}}const yT={some:0,all:1};class ST extends hs{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:a}=e,c={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:yT[o]},u=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,a&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:m,onViewportLeave:v}=this.node.getProps(),g=h?m:v;g&&g(d)};return xT(this.node.current,c,u)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(MT(e,t))&&this.startObserver()}unmount(){}}function MT({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const ET={inView:{Feature:ST},tap:{Feature:mT},focus:{Feature:pT},hover:{Feature:hT}},TT={layout:{ProjectionNode:Ex,MeasureLayout:mx}},mh={current:null},Tx={current:!1};function wT(){if(Tx.current=!0,!!up)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>mh.current=n.matches;n.addListener(e),e()}else mh.current=!1}const AT=[...K_,Xn,ds],RT=n=>AT.find(q_(n)),Wv=new WeakMap;function CT(n,e,t){for(const r in e){const o=e[r],a=t[r];if(jn(o))n.addValue(r,o);else if(jn(a))n.addValue(r,Ka(o,{owner:n}));else if(a!==o)if(n.hasValue(r)){const c=n.getValue(r);c.liveStyle===!0?c.jump(o):c.hasAnimated||c.set(o)}else{const c=n.getStaticValue(r);n.addValue(r,Ka(c!==void 0?c:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const Xv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class bT{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:a,visualState:c},u={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Op,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=rr.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,nn.render(this.render,!1,!0))};const{latestValues:d,renderState:h,onUpdate:m}=c;this.onUpdate=m,this.latestValues=d,this.baseTarget={...d},this.initialValues=t.initial?{...d}:{},this.renderState=h,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=u,this.blockInitialAnimation=!!a,this.isControllingVariants=vu(t),this.isVariantNode=i_(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...g}=this.scrapeMotionValuesFromProps(t,{},this);for(const y in g){const M=g[y];d[y]!==void 0&&jn(M)&&M.set(d[y],!1)}}mount(e){this.current=e,Wv.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,r)=>this.bindToMotionValue(r,t)),Tx.current||wT(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:mh.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Wv.delete(this.current),this.projection&&this.projection.unmount(),fs(this.notifyUpdate),fs(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=Ws.has(e),o=t.on("change",u=>{this.latestValues[e]=u,this.props.onUpdate&&nn.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),a=t.on("renderRequest",this.scheduleRender);let c;window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),a(),c&&c(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Bo){const t=Bo[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const a=this.features[e];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):vn()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<Xv.length;r++){const o=Xv[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const a="on"+o,c=e[a];c&&(this.propEventSubscriptions[o]=this.on(o,c))}this.prevMotionValues=CT(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=Ka(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){var r;let o=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(r=this.getBaseTargetFromProps(this.props,e))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,e,this.options);return o!=null&&(typeof o=="string"&&(j_(o)||O_(o))?o=parseFloat(o):!RT(o)&&ds.test(t)&&(o=G_(e,t)),this.setBaseTarget(e,jn(o)?o.get():o)),jn(o)?o.get():o}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:r}=this.props;let o;if(typeof r=="string"||typeof r=="object"){const c=vp(this.props,r,(t=this.presenceContext)===null||t===void 0?void 0:t.custom);c&&(o=c[e])}if(r&&o!==void 0)return o;const a=this.getBaseTargetFromProps(this.props,e);return a!==void 0&&!jn(a)?a:this.initialValues[e]!==void 0&&o===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Dp),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class wx extends bT{constructor(){super(...arguments),this.KeyframeResolver=$_}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;jn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function PT(n){return window.getComputedStyle(n)}class DT extends wx{constructor(){super(...arguments),this.type="html",this.renderInstance=d_}readValueFromInstance(e,t){if(Ws.has(t)){const r=Fp(t);return r&&r.default||0}else{const r=PT(e),o=(c_(t)?r.getPropertyValue(t):r[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return hx(e,t)}build(e,t,r){yp(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return Tp(e,t,r)}}class LT extends wx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=vn}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Ws.has(t)){const r=Fp(t);return r&&r.default||0}return t=h_.has(t)?t:pp(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return g_(e,t,r)}build(e,t,r){Sp(e,t,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,r,o){p_(e,t,r,o)}mount(e){this.isSVGTag=Ep(e.tagName),super.mount(e)}}const NT=(n,e)=>gp(n)?new LT(e):new DT(e,{allowProjection:n!==Pe.Fragment}),IT=sM({...i3,...ET,...dT,...TT},NT),vt=y2(IT);var Ax={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},jv=us.createContext&&us.createContext(Ax),UT=["attr","size","title"];function FT(n,e){if(n==null)return{};var t,r,o=OT(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)===-1&&{}.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function OT(n,e){if(n==null)return{};var t={};for(var r in n)if({}.hasOwnProperty.call(n,r)){if(e.indexOf(r)!==-1)continue;t[r]=n[r]}return t}function iu(){return iu=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},iu.apply(null,arguments)}function Yv(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function ru(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Yv(Object(t),!0).forEach(function(r){BT(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Yv(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function BT(n,e,t){return(e=kT(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function kT(n){var e=zT(n,"string");return typeof e=="symbol"?e:e+""}function zT(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Rx(n){return n&&n.map((e,t)=>us.createElement(e.tag,ru({key:t},e.attr),Rx(e.child)))}function Yt(n){return e=>us.createElement(VT,iu({attr:ru({},n.attr)},e),Rx(n.child))}function VT(n){var e=t=>{var{attr:r,size:o,title:a}=n,c=FT(n,UT),u=o||t.size||"1em",d;return t.className&&(d=t.className),n.className&&(d=(d?d+" ":"")+n.className),us.createElement("svg",iu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,c,{className:d,style:ru(ru({color:n.color||t.color},t.style),n.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),a&&us.createElement("title",null,a),n.children)};return jv!==void 0?us.createElement(jv.Consumer,null,t=>e(t)):e(Ax)}function HT(n){return Yt({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"},child:[]}]})(n)}function GT(n){return Yt({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"},child:[]},{tag:"path",attr:{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"},child:[]}]})(n)}function WT(n){return Yt({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",clipRule:"evenodd"},child:[]}]})(n)}function XT(n){return Yt({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"},child:[]}]})(n)}function jT(n){return Yt({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"},child:[]},{tag:"path",attr:{d:"M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"},child:[]}]})(n)}function YT(n){return Yt({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"},child:[]}]})(n)}function qT(n){return Yt({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"},child:[]}]})(n)}function KT(n){return Yt({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z",clipRule:"evenodd"},child:[]}]})(n)}function Cx(n){return Yt({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"},child:[]}]})(n)}function $T(n){return Yt({attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"},child:[]},{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"},child:[]}]})(n)}const _d=[{href:"#home",label:"Home",Icon:XT},{href:"#about",label:"About",Icon:HT},{href:"#skills",label:"Skills",Icon:WT},{href:"#projects",label:"Projects",Icon:YT},{href:"#contact",label:"Contact",Icon:GT}];function ZT(){const[n,e]=Pe.useState(!1),[t,r]=Pe.useState("home");Pe.useEffect(()=>{const a=()=>e(window.scrollY>50);return window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[]),Pe.useEffect(()=>{const a=new IntersectionObserver(c=>c.forEach(u=>u.isIntersecting&&r(u.target.id)),{rootMargin:"-40% 0px -55% 0px"});return _d.forEach(({href:c})=>{const u=document.getElementById(c.slice(1));u&&a.observe(u)}),()=>a.disconnect()},[]);const o=a=>{var c;return(c=document.querySelector(a))==null?void 0:c.scrollIntoView({behavior:"smooth"})};return K.jsxs(K.Fragment,{children:[K.jsx(vt.header,{className:`navbar ${n?"navbar--scrolled":""}`,initial:{y:-100,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8,ease:[.22,1,.36,1]},children:K.jsxs("nav",{className:"navbar__inner container",children:[K.jsxs(vt.a,{href:"#home",className:"navbar__logo",onClick:a=>{a.preventDefault(),o("#home")},whileHover:{scale:1.05},whileTap:{scale:.95},children:["SD",K.jsx("span",{className:"navbar__logo-dot",children:"."})]}),K.jsx("ul",{className:"navbar__links",role:"list",children:_d.map((a,c)=>{const u=a.href.slice(1),d=t===u;return K.jsx(vt.li,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:.1*c+.3,duration:.5},children:K.jsxs("button",{className:`nav-btn ${d?"is-active":""}`,onClick:()=>o(a.href),children:[K.jsx(vt.span,{className:"nav-btn__bg",animate:{opacity:d?1:0},transition:{duration:.25}}),K.jsx(vt.span,{className:"nav-btn__bar",animate:{opacity:d?1:0,scaleX:d?1:.3},transition:{type:"spring",stiffness:400,damping:28}}),K.jsx(vt.span,{className:"nav-btn__cone",animate:{opacity:d?1:0},transition:{duration:.28}}),K.jsx(vt.span,{className:"nav-btn__icon",animate:d?{y:-2,scale:1.15}:{y:0,scale:1},transition:{type:"spring",stiffness:440,damping:26},children:K.jsx(a.Icon,{})}),K.jsx("span",{className:"nav-btn__label",children:a.label})]})},a.href)})}),K.jsx("div",{className:"navbar__actions",children:K.jsx(vt.a,{href:"#contact",className:"btn btn--primary navbar__cta",onClick:a=>{a.preventDefault(),o("#contact")},whileHover:{scale:1.04,boxShadow:"0 8px 30px rgba(99,102,241,0.4)"},whileTap:{scale:.97},children:"Let's Talk"})})]})}),K.jsx(vt.nav,{className:"bottom-nav","aria-label":"Mobile navigation",initial:{y:100,opacity:0},animate:{y:0,opacity:1},transition:{duration:.7,delay:.4,ease:[.22,1,.36,1]},children:_d.map(a=>{const c=a.href.slice(1),u=t===c;return K.jsxs("button",{className:`nav-btn bottom-nav__btn ${u?"is-active":""}`,onClick:()=>o(a.href),children:[K.jsx(vt.span,{className:"nav-btn__bg",animate:{opacity:u?1:0},transition:{duration:.25}}),K.jsx(vt.span,{className:"nav-btn__bar",animate:{opacity:u?1:0,scaleX:u?1:.3},transition:{type:"spring",stiffness:400,damping:28}}),K.jsx(vt.span,{className:"nav-btn__cone",animate:{opacity:u?1:0},transition:{duration:.28}}),K.jsx(vt.span,{className:"nav-btn__icon",animate:u?{y:-2,scale:1.15}:{y:0,scale:1},transition:{type:"spring",stiffness:440,damping:26},children:K.jsx(a.Icon,{})}),K.jsx("span",{className:"nav-btn__label",children:a.label})]},a.href)})})]})}function bx(n){return Yt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(n)}function Vp(n){return Yt({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(n)}function QT(n){return Yt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"},child:[]}]})(n)}function JT(n){return Yt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"},child:[]}]})(n)}function ew(n){return Yt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z"},child:[]}]})(n)}function tw(n){return Yt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(n)}function nw(n){return Yt({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"},child:[]}]})(n)}function iw(){return K.jsxs("section",{id:"home",className:"hero",children:[K.jsxs("div",{className:"hero__bg",children:[K.jsx(vt.div,{className:"hero__orb hero__orb--1",animate:{x:[0,30,0],y:[0,-20,0]},transition:{duration:8,repeat:1/0,ease:"easeInOut"}}),K.jsx(vt.div,{className:"hero__orb hero__orb--2",animate:{x:[0,-25,0],y:[0,25,0]},transition:{duration:10,repeat:1/0,ease:"easeInOut"}}),K.jsx("div",{className:"hero__grid"})]}),K.jsxs("div",{className:"container hero__container",children:[K.jsxs("div",{className:"hero__content",children:[K.jsx(vt.div,{className:"hero__greeting-wrapper",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:K.jsx("span",{className:"hero__greeting",children:"Hello, I'm"})}),K.jsxs(vt.h1,{className:"hero__name",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.35,ease:[.22,1,.36,1]},children:[K.jsx(vt.span,{className:"hero__name-word hero__name-first",whileHover:{y:-6,scale:1.02,textShadow:"0 0 50px rgba(103, 232, 249, 0.8), 0 0 90px rgba(56, 189, 248, 0.5)",transition:{type:"spring",stiffness:400,damping:20}},children:"Sourabh"})," ",K.jsx(vt.span,{className:"hero__name-word hero__name-accent",whileHover:{y:-6,scale:1.03,filter:"drop-shadow(0 0 45px rgba(0, 240, 255, 1)) drop-shadow(0 0 80px rgba(56, 189, 248, 0.8))",transition:{type:"spring",stiffness:400,damping:20}},children:"Dhulrao"})]}),K.jsx(vt.p,{className:"hero__tagline",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.55},children:"An AI Developer who Build things that people remember, not just websites."}),K.jsxs(vt.div,{className:"hero__actions",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.75},children:[K.jsx(vt.a,{href:"#projects",className:"btn btn--primary",onClick:n=>{var e;n.preventDefault(),(e=document.querySelector("#projects"))==null||e.scrollIntoView({behavior:"smooth"})},whileHover:{scale:1.05,boxShadow:"0 8px 30px rgba(99, 102, 241, 0.45)"},whileTap:{scale:.97},children:"View My Work"}),K.jsxs(vt.a,{href:"#contact",className:"btn btn--outline",onClick:n=>{var e;n.preventDefault(),(e=document.querySelector("#contact"))==null||e.scrollIntoView({behavior:"smooth"})},whileHover:{scale:1.05,borderColor:"var(--accent)"},whileTap:{scale:.97},children:[K.jsx(Cx,{})," Get In Touch"]})]}),K.jsx(vt.div,{className:"hero__socials",initial:{opacity:0},animate:{opacity:1},transition:{duration:.6,delay:1},children:[{icon:Vp,href:"https://github.com",label:"GitHub"},{icon:bx,href:"https://linkedin.com",label:"LinkedIn"}].map(({icon:n,href:e,label:t},r)=>K.jsx(vt.a,{href:e,target:"_blank",rel:"noopener noreferrer","aria-label":t,initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{delay:1.1+r*.1},whileHover:{y:-4,color:"var(--accent)"},children:K.jsx(n,{})},t))})]}),K.jsx("div",{className:"hero__stage","aria-hidden":"true"})]}),K.jsx(vt.a,{href:"#about",className:"hero__scroll",onClick:n=>{var e;n.preventDefault(),(e=document.querySelector("#about"))==null||e.scrollIntoView({behavior:"smooth"})},initial:{opacity:0},animate:{opacity:1},transition:{delay:1.4},children:K.jsx(vt.span,{animate:{y:[0,8,0]},transition:{duration:1.5,repeat:1/0,ease:"easeInOut"},children:K.jsx(KT,{})})})]})}const Px={hidden:{opacity:0,y:40},visible:(n=0)=>({opacity:1,y:0,transition:{duration:.7,delay:n,ease:[.22,1,.36,1]}})},Dx={hidden:{opacity:0,x:-60},visible:(n=0)=>({opacity:1,x:0,transition:{duration:.7,delay:n,ease:[.22,1,.36,1]}})},Lx={hidden:{opacity:0,x:60},visible:(n=0)=>({opacity:1,x:0,transition:{duration:.7,delay:n,ease:[.22,1,.36,1]}})};function Gc({children:n,variant:e=Px,delay:t=0,className:r=""}){return K.jsx(vt.div,{className:r,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-80px"},custom:t,variants:e,children:n})}function yu({label:n,title:e,description:t}){return K.jsxs(Gc,{className:"section-heading",children:[K.jsx("span",{className:"section-label",children:n}),K.jsx("h2",{className:"section-title",children:e}),t&&K.jsx("p",{className:"section-desc",children:t})]})}const rw="/Portfolio/assets/sourabh-CZjpEgx1.png",sw=[{value:"3+",label:"Years Experience"},{value:"20+",label:"Projects Completed"},{value:"15+",label:"Technologies"}];function ow(){return K.jsx("section",{id:"about",className:"section about",children:K.jsxs("div",{className:"container about__grid",children:[K.jsxs(vt.div,{className:"about__visual",initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-80px"},variants:Dx,children:[K.jsxs("div",{className:"about__photo-stack",children:[K.jsx(vt.div,{className:"about__photo-ring",animate:{rotate:360},transition:{duration:20,repeat:1/0,ease:"linear"}}),K.jsx("div",{className:"about__photo-card-back about__photo-card-back--left"}),K.jsx("div",{className:"about__photo-card-back about__photo-card-back--right"}),K.jsxs("div",{className:"about__photo-card",children:[K.jsx("img",{src:rw,alt:"Sourabh Dhulrao",className:"about__photo-img"}),K.jsx("div",{className:"about__photo-sweep"}),K.jsx("span",{className:"about__photo-hint",children:"Hover to reveal"})]})]}),K.jsx("div",{className:"about__stats",children:sw.map((n,e)=>K.jsxs(vt.div,{className:"about__stat",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2+e*.1,duration:.5},whileHover:{y:-4,transition:{duration:.2}},children:[K.jsx("span",{className:"about__stat-value",children:n.value}),K.jsx("span",{className:"about__stat-label",children:n.label})]},n.label))})]}),K.jsxs(vt.div,{className:"about__text",initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-80px"},variants:Lx,children:[K.jsx(yu,{label:"About Me",title:"Passionate about building things that matter"}),K.jsx(Gc,{delay:.1,children:K.jsxs("p",{children:["I'm ",K.jsx("strong",{children:"Sourabh Dhulrao"}),", a developer who loves turning ideas into polished, performant web applications. I focus on writing maintainable code, creating intuitive user interfaces, and delivering solutions that make a real impact."]})}),K.jsx(Gc,{delay:.2,children:K.jsx("p",{children:"When I'm not coding, you'll find me exploring new technologies, contributing to open source, or refining my craft one project at a time. I believe great software is a blend of technical excellence and human-centered design."})}),K.jsx(Gc,{delay:.3,children:K.jsx(vt.a,{href:"#contact",className:"btn btn--primary",onClick:n=>{var e;n.preventDefault(),(e=document.querySelector("#contact"))==null||e.scrollIntoView({behavior:"smooth"})},whileHover:{scale:1.04},whileTap:{scale:.97},children:"Download Resume"})})]})]})})}function aw(n){return Yt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"},child:[]}]})(n)}function lw(n){return Yt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M.38 0a.268.268 0 0 0-.256.332l2.894 11.716a.268.268 0 0 0 .01.04l2.89 11.708a.268.268 0 0 0 .447.128L23.802 7.15a.268.268 0 0 0-.112-.45l-5.784-1.667a.268.268 0 0 0-.123-.035L6.38 1.715a.268.268 0 0 0-.144-.04L.456.01A.268.268 0 0 0 .38 0zm.374.654L5.71 2.08 1.99 5.664zM6.61 2.34l4.864 1.4-3.65 3.515zm-.522.12l1.217 4.926-4.877-1.4zm6.28 1.538l4.878 1.404-3.662 3.53zm-.52.13l1.208 4.9-4.853-1.392zm6.3 1.534l4.947 1.424-3.715 3.574zm-.524.12l1.215 4.926-4.876-1.398zm-15.432.696l4.964 1.424-3.726 3.586zM8.047 8.15l4.877 1.4-3.66 3.527zm-.518.137l1.236 5.017-4.963-1.432zm6.274 1.535l4.965 1.425-3.73 3.586zm-.52.127l1.235 5.012-4.958-1.43zm-9.63 2.438l4.873 1.406-3.656 3.523zm5.854 1.687l4.863 1.403-3.648 3.51zm-.54.04l1.214 4.927-4.875-1.4zm-3.896 4.02l5.037 1.442-3.782 3.638z"},child:[]}]})(n)}function cw(n){return Yt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"},child:[]}]})(n)}function uw(n){return Yt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"},child:[]}]})(n)}function fw(n){return Yt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"},child:[]}]})(n)}function dw(n){return Yt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"},child:[]}]})(n)}function hw(n){return Yt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"},child:[]}]})(n)}function pw(n){return Yt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"},child:[]}]})(n)}function mw(n){return Yt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"},child:[]}]})(n)}function gw(n){return Yt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"},child:[]}]})(n)}function vw(n){return Yt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"},child:[]}]})(n)}function _w(n){return Yt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 .0387C5.3729.0384.0003 5.3931 0 11.9988c-.001 6.6066 5.372 11.9628 12 11.9625 6.628.0003 12.001-5.3559 12-11.9625-.0003-6.6057-5.3729-11.9604-12-11.96m-.829 5.4153h7.55l-7.5805 5.3284h5.1828L5.279 18.5436q2.9466-6.5444 5.892-13.0896"},child:[]}]})(n)}function xw(n){return Yt({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"},child:[]}]})(n)}const yw=[{id:"all",label:"All Stacks",icon:ew},{id:"ai",label:"AI & ML",icon:nw},{id:"frontend",label:"Frontend & 3D",icon:tw},{id:"backend",label:"Backend & Data",icon:JT},{id:"devops",label:"DevOps & Tools",icon:QT}],Sw=[{name:"Python",icon:fw,color:"#3776AB",category:"ai",desc:"LangChain, LLMs & Automation"},{name:"FastAPI",icon:_w,color:"#009688",category:"ai",desc:"Asynchronous Streaming APIs"},{name:"React",icon:uw,color:"#61DAFB",category:"frontend",desc:"Hooks, State & Modern UI"},{name:"Next.js",icon:pw,color:"#ffffff",category:"frontend",desc:"SSR, App Router & Optimization"},{name:"TypeScript",icon:aw,color:"#3178C6",category:"frontend",desc:"Type-Safe Architecture"},{name:"JavaScript",icon:gw,color:"#F7DF1E",category:"frontend",desc:"ES6+, Async & DOM"},{name:"Three.js",icon:lw,color:"#00F0FF",category:"frontend",desc:"3D WebGL Shaders & Canvas"},{name:"Node.js",icon:hw,color:"#339933",category:"backend",desc:"Express & Event-Driven APIs"},{name:"PostgreSQL",icon:dw,color:"#4169E1",category:"backend",desc:"Relational Schemas & SQL"},{name:"MongoDB",icon:mw,color:"#47A248",category:"backend",desc:"Document Models & Aggregations"},{name:"Docker",icon:xw,color:"#2496ED",category:"devops",desc:"Containerization & Compose"},{name:"Git",icon:vw,color:"#F05032",category:"devops",desc:"Version Control & Workflows"},{name:"Tailwind",icon:cw,color:"#06B6D4",category:"frontend",desc:"Responsive Design Systems"}];function Mw(){const[n,e]=Pe.useState("all"),{theme:t}=l2(),r=Sw.filter(o=>n==="all"?!0:o.category===n);return K.jsx("section",{id:"skills",className:"section skills",children:K.jsxs("div",{className:"container",children:[K.jsx(yu,{label:"Toolkit & Expertise",title:"Technologies I Engineer With",description:"A production-tested stack spanning intelligent AI models, resilient backends, and fluid frontends."}),K.jsx("div",{className:"skills-filter-bar",children:yw.map(o=>{const a=o.icon,c=n===o.id;return K.jsxs("button",{type:"button",className:`skill-filter-btn ${c?"is-active":""}`,onClick:()=>e(o.id),children:[K.jsx(a,{className:"skill-filter-icon"}),K.jsx("span",{children:o.label}),c&&K.jsx(vt.div,{className:"skill-filter-glow",layoutId:"activeFilterGlow",transition:{type:"spring",stiffness:380,damping:30}})]},o.id)})}),K.jsx(vt.div,{className:"skills__grid",layout:!0,children:K.jsx(Jd,{mode:"popLayout",children:r.map(o=>K.jsxs(vt.div,{className:"skill-card skill-card--enhanced",layout:!0,initial:{opacity:0,scale:.85},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.85},transition:{duration:.25},whileHover:{y:-6,transition:{duration:.2}},children:[K.jsx("div",{className:"skill-card__icon-wrap",children:K.jsx(o.icon,{style:{color:o.name==="Next.js"?t==="dark"?"#ffffff":"#000000":o.color},className:"skill-card__icon"})}),K.jsxs("div",{className:"skill-card__info",children:[K.jsx("span",{className:"skill-card__name",children:o.name}),K.jsx("span",{className:"skill-card__desc",children:o.desc})]})]},o.name))})})]})})}const Ew=[{id:1,title:"E-Commerce Platform",description:"A full-stack online store with cart, payments, and admin dashboard. Built for performance and scalability with real-time inventory tracking.",tags:["React","Node.js","MongoDB","Stripe"],accent:"#f59e0b",size:"large",year:"2024",category:"Full-Stack",live:"#",github:"#"},{id:2,title:"Task Management App",description:"Real-time collaborative task board with drag-and-drop, notifications, and team workspaces.",tags:["Next.js","TypeScript","PostgreSQL","Socket.io"],accent:"#e11d48",size:"medium",year:"2024",category:"SaaS",live:"#",github:"#"},{id:3,title:"Weather Dashboard",description:"Beautiful weather app with location search, 7-day forecasts, and animated data visualizations.",tags:["React","OpenWeather API","Chart.js"],accent:"#06b6d4",size:"medium",year:"2023",category:"Data Viz",live:"#",github:"#"},{id:4,title:"Portfolio CMS",description:"Headless CMS for developers to manage portfolio content with a clean admin interface.",tags:["Python","Django","React","Docker"],accent:"#10b981",size:"medium",year:"2023",category:"Dev Tools",live:"#",github:"#"},{id:5,title:"AI Chat Bot",description:"Intelligent conversational AI assistant powered by LLMs with context memory, multi-turn dialogue, and a sleek real-time UI.",tags:["Python","FastAPI","LangChain","React"],accent:"#a855f7",size:"medium",year:"2024",category:"AI / ML",live:"#",github:"#"}];function Tw({project:n,index:e}){const[t,r]=Pe.useState(!1);return K.jsxs(vt.article,{className:`pj-card pj-card--${n.size}`,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-80px"},custom:e*.08,variants:Px,onHoverStart:()=>r(!0),onHoverEnd:()=>r(!1),style:{"--accent":n.accent},children:[K.jsx(vt.div,{className:"pj-card__bar",animate:{scaleX:t?1:.28,opacity:t?1:.5},transition:{duration:.35,ease:[.22,1,.36,1]}}),K.jsx("span",{className:"pj-card__index",children:String(e+1).padStart(2,"0")}),K.jsx("div",{className:"pj-card__category",children:n.category}),K.jsxs("div",{className:"pj-card__body",children:[K.jsx("h3",{className:"pj-card__title",children:n.title}),K.jsx("p",{className:"pj-card__desc",children:n.description}),K.jsx("div",{className:"pj-card__tags",children:n.tags.map(o=>K.jsx("span",{className:"pj-card__tag",children:o},o))})]}),K.jsxs("div",{className:"pj-card__footer",children:[K.jsx("span",{className:"pj-card__year",children:n.year}),K.jsxs("div",{className:"pj-card__links",children:[K.jsx(vt.a,{href:n.github,"aria-label":"GitHub",className:"pj-link",whileHover:{scale:1.12},whileTap:{scale:.9},children:K.jsx(Vp,{})}),K.jsx(vt.a,{href:n.live,"aria-label":"Live demo",className:"pj-link pj-link--accent",whileHover:{scale:1.12},whileTap:{scale:.9},children:K.jsx(jT,{})})]})]}),K.jsx(Jd,{children:t&&K.jsx(vt.div,{className:"pj-card__glow",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3}})}),K.jsx(Jd,{children:t&&K.jsxs(vt.div,{className:"pj-card__reveal",initial:{opacity:0,y:12},animate:{opacity:1,y:0},exit:{opacity:0,y:8},transition:{duration:.25},children:["View Project ",K.jsx(qT,{})]})})]})}function ww(){return K.jsx("section",{id:"projects",className:"section projects",children:K.jsxs("div",{className:"container",children:[K.jsx(yu,{label:"Projects",title:"Selected work",description:"A curated set of projects that reflect my craft."}),K.jsx("div",{className:"pj-grid",children:Ew.map((n,e)=>K.jsx(Tw,{project:n,index:e},n.id))})]})})}function Aw(){const[n,e]=Pe.useState({name:"",email:"",message:""}),[t,r]=Pe.useState(!1),o=a=>{a.preventDefault(),r(!0),setTimeout(()=>{r(!1),e({name:"",email:"",message:""})},3e3)};return K.jsx("section",{id:"contact",className:"section contact",children:K.jsxs("div",{className:"container contact__grid",children:[K.jsxs(vt.div,{className:"contact__info",initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-80px"},variants:Dx,children:[K.jsx(yu,{label:"Contact",title:"Let's work together",description:"Have a project in mind or just want to say hello? I'd love to hear from you."}),K.jsxs("div",{className:"contact__details",children:[K.jsxs(vt.a,{href:"mailto:sourabh.dhulrao@email.com",className:"contact__detail",whileHover:{x:6},children:[K.jsx(Cx,{}),K.jsx("span",{children:"sourabh.dhulrao@email.com"})]}),K.jsxs("div",{className:"contact__detail",children:[K.jsx($T,{}),K.jsx("span",{children:"India"})]})]}),K.jsx("div",{className:"contact__socials",children:[{icon:Vp,href:"https://github.com",label:"GitHub"},{icon:bx,href:"https://linkedin.com",label:"LinkedIn"}].map(({icon:a,href:c,label:u})=>K.jsx(vt.a,{href:c,target:"_blank",rel:"noopener noreferrer","aria-label":u,whileHover:{y:-4,color:"var(--accent)"},children:K.jsx(a,{})},u))})]}),K.jsxs(vt.form,{className:"contact__form",onSubmit:o,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-80px"},variants:Lx,children:[["name","email","message"].map((a,c)=>K.jsxs(vt.div,{className:`form-group ${a==="message"?"form-group--full":""}`,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.1*c,duration:.5},children:[K.jsx("label",{htmlFor:a,children:a.charAt(0).toUpperCase()+a.slice(1)}),a==="message"?K.jsx("textarea",{id:a,rows:5,value:n.message,onChange:u=>e({...n,message:u.target.value}),required:!0,placeholder:"Tell me about your project..."}):K.jsx("input",{id:a,type:a==="email"?"email":"text",value:n[a],onChange:u=>e({...n,[a]:u.target.value}),required:!0,placeholder:a==="name"?"Your name":"your@email.com"})]},a)),K.jsx(vt.button,{type:"submit",className:"btn btn--primary btn--full",whileHover:{scale:1.02,boxShadow:"0 8px 30px rgba(99, 102, 241, 0.4)"},whileTap:{scale:.98},children:t?"Message Sent!":"Send Message"})]})]})})}function Rw(){const n=new Date().getFullYear();return K.jsx(vt.footer,{className:"footer",initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.6},children:K.jsxs("div",{className:"container footer__inner",children:[K.jsxs("p",{children:["Designed & Built by ",K.jsx("strong",{children:"Sourabh Dhulrao"})]}),K.jsxs("p",{className:"footer__copy",children:["© ",n," All rights reserved."]})]})})}function Cw({SIM_RESOLUTION:n=128,DYE_RESOLUTION:e=1440,CAPTURE_RESOLUTION:t=512,DENSITY_DISSIPATION:r=3.5,VELOCITY_DISSIPATION:o=2,PRESSURE:a=.1,PRESSURE_ITERATIONS:c=20,CURL:u=3,SPLAT_RADIUS:d=.2,SPLAT_FORCE:h=6e3,SHADING:m=!0,COLOR_UPDATE_SPEED:v=10,BACK_COLOR:g={r:.5,g:0,b:0},TRANSPARENT:y=!0,RAINBOW_MODE:M=!0,COLOR:A="#ff0000",OPACITY:S=.35}){const x=Pe.useRef(null),D=Pe.useRef(null);return Pe.useEffect(()=>{const I=x.current;if(!I)return;let b=!0;function P(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[0,0,0]}const L=window.matchMedia("(pointer: coarse)").matches||window.innerWidth<=768;let F={SIM_RESOLUTION:L?Math.min(n,96):n,DYE_RESOLUTION:L?Math.min(e,512):e,DENSITY_DISSIPATION:r,VELOCITY_DISSIPATION:o,PRESSURE:a,PRESSURE_ITERATIONS:L?Math.min(c,14):c,CURL:u,SPLAT_RADIUS:d,SPLAT_FORCE:h,SHADING:m,COLOR_UPDATE_SPEED:v,RAINBOW_MODE:M,COLOR:A},T=[new P];const{gl:w,ext:B}=Y(I);B.supportLinearFiltering||(F.DYE_RESOLUTION=256,F.SHADING=!1);function Y(k){const he={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let ve=k.getContext("webgl2",he);const Oe=!!ve;Oe||(ve=k.getContext("webgl",he)||k.getContext("experimental-webgl",he));let ct,It;Oe?(ve.getExtension("EXT_color_buffer_float"),It=ve.getExtension("OES_texture_float_linear")):(ct=ve.getExtension("OES_texture_half_float"),It=ve.getExtension("OES_texture_half_float_linear")),ve.clearColor(0,0,0,1);const at=Oe?ve.HALF_FLOAT:ct&&ct.HALF_FLOAT_OES;let cn,Jt,On;return Oe?(cn=J(ve,ve.RGBA16F,ve.RGBA,at),Jt=J(ve,ve.RG16F,ve.RG,at),On=J(ve,ve.R16F,ve.RED,at)):(cn=J(ve,ve.RGBA,ve.RGBA,at),Jt=J(ve,ve.RGBA,ve.RGBA,at),On=J(ve,ve.RGBA,ve.RGBA,at)),{gl:ve,ext:{formatRGBA:cn,formatRG:Jt,formatR:On,halfFloatTexType:at,supportLinearFiltering:It}}}function J(k,he,ve,Oe){if(!se(k,he,ve,Oe))switch(he){case k.R16F:return J(k,k.RG16F,k.RG,Oe);case k.RG16F:return J(k,k.RGBA16F,k.RGBA,Oe);default:return null}return{internalFormat:he,format:ve}}function se(k,he,ve,Oe){const ct=k.createTexture();k.bindTexture(k.TEXTURE_2D,ct),k.texParameteri(k.TEXTURE_2D,k.TEXTURE_MIN_FILTER,k.NEAREST),k.texParameteri(k.TEXTURE_2D,k.TEXTURE_MAG_FILTER,k.NEAREST),k.texParameteri(k.TEXTURE_2D,k.TEXTURE_WRAP_S,k.CLAMP_TO_EDGE),k.texParameteri(k.TEXTURE_2D,k.TEXTURE_WRAP_T,k.CLAMP_TO_EDGE),k.texImage2D(k.TEXTURE_2D,0,he,4,4,0,ve,Oe,null);const It=k.createFramebuffer();return k.bindFramebuffer(k.FRAMEBUFFER,It),k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ct,0),k.checkFramebufferStatus(k.FRAMEBUFFER)===k.FRAMEBUFFER_COMPLETE}class q{constructor(he,ve){this.vertexShader=he,this.fragmentShaderSource=ve,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(he){let ve=0;for(let ct=0;ct<he.length;ct++)ve+=Yo(he[ct]);let Oe=this.programs[ve];if(Oe==null){let ct=H(w.FRAGMENT_SHADER,this.fragmentShaderSource,he);Oe=me(this.vertexShader,ct),this.programs[ve]=Oe}Oe!==this.activeProgram&&(this.uniforms=$(Oe),this.activeProgram=Oe)}bind(){w.useProgram(this.activeProgram)}}class ee{constructor(he,ve){this.uniforms={},this.program=me(he,ve),this.uniforms=$(this.program)}bind(){w.useProgram(this.program)}}function me(k,he){let ve=w.createProgram();return w.attachShader(ve,k),w.attachShader(ve,he),w.linkProgram(ve),w.getProgramParameter(ve,w.LINK_STATUS)||console.trace(w.getProgramInfoLog(ve)),ve}function $(k){let he=[],ve=w.getProgramParameter(k,w.ACTIVE_UNIFORMS);for(let Oe=0;Oe<ve;Oe++){let ct=w.getActiveUniform(k,Oe).name;he[ct]=w.getUniformLocation(k,ct)}return he}function H(k,he,ve){he=Z(he,ve);const Oe=w.createShader(k);return w.shaderSource(Oe,he),w.compileShader(Oe),w.getShaderParameter(Oe,w.COMPILE_STATUS)||console.trace(w.getShaderInfoLog(Oe)),Oe}function Z(k,he){if(!he)return k;let ve="";return he.forEach(Oe=>{ve+="#define "+Oe+`
`}),ve+k}const X=H(w.VERTEX_SHADER,`
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
      `),N=H(w.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;

        void main () {
            gl_FragColor = texture2D(uTexture, vUv);
        }
      `),re=H(w.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;
        uniform float value;

        void main () {
            gl_FragColor = value * texture2D(uTexture, vUv);
        }
      `),we=`
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
    `,qe=H(w.FRAGMENT_SHADER,`
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
      `),We=H(w.FRAGMENT_SHADER,`
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
      `,B.supportLinearFiltering?null:["MANUAL_FILTERING"]),Ke=H(w.FRAGMENT_SHADER,`
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
      `),oe=H(w.FRAGMENT_SHADER,`
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
      `),fe=H(w.FRAGMENT_SHADER,`
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
      `),Re=H(w.FRAGMENT_SHADER,`
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
      `),ye=H(w.FRAGMENT_SHADER,`
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
      `),Me=(w.bindBuffer(w.ARRAY_BUFFER,w.createBuffer()),w.bufferData(w.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),w.STATIC_DRAW),w.bindBuffer(w.ELEMENT_ARRAY_BUFFER,w.createBuffer()),w.bufferData(w.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),w.STATIC_DRAW),w.vertexAttribPointer(0,2,w.FLOAT,!1,0,0),w.enableVertexAttribArray(0),(k,he=!1)=>{k==null?(w.viewport(0,0,w.drawingBufferWidth,w.drawingBufferHeight),w.bindFramebuffer(w.FRAMEBUFFER,null)):(w.viewport(0,0,k.width,k.height),w.bindFramebuffer(w.FRAMEBUFFER,k.fbo)),he&&(w.clearColor(0,0,0,1),w.clear(w.COLOR_BUFFER_BIT)),w.drawElements(w.TRIANGLES,6,w.UNSIGNED_SHORT,0)});let De,Xe,dt,xt,yt;const ut=new ee(X,N),ft=new ee(X,re),Dt=new ee(X,qe),Lt=new ee(X,We),Ct=new ee(X,Ke),Vt=new ee(X,oe),V=new ee(X,fe),$t=new ee(X,Re),wt=new ee(X,ye),U=new q(X,we);function E(){let k=Yi(F.SIM_RESOLUTION),he=Yi(F.DYE_RESOLUTION);const ve=B.halfFloatTexType,Oe=B.formatRGBA,ct=B.formatRG,It=B.formatR,at=B.supportLinearFiltering?w.LINEAR:w.NEAREST;w.disable(w.BLEND),De?De=Ce(De,he.width,he.height,Oe.internalFormat,Oe.format,ve,at):De=ae(he.width,he.height,Oe.internalFormat,Oe.format,ve,at),Xe?Xe=Ce(Xe,k.width,k.height,ct.internalFormat,ct.format,ve,at):Xe=ae(k.width,k.height,ct.internalFormat,ct.format,ve,at),dt=Q(k.width,k.height,It.internalFormat,It.format,ve,w.NEAREST),xt=Q(k.width,k.height,It.internalFormat,It.format,ve,w.NEAREST),yt=ae(k.width,k.height,It.internalFormat,It.format,ve,w.NEAREST)}function Q(k,he,ve,Oe,ct,It){w.activeTexture(w.TEXTURE0);let at=w.createTexture();w.bindTexture(w.TEXTURE_2D,at),w.texParameteri(w.TEXTURE_2D,w.TEXTURE_MIN_FILTER,It),w.texParameteri(w.TEXTURE_2D,w.TEXTURE_MAG_FILTER,It),w.texParameteri(w.TEXTURE_2D,w.TEXTURE_WRAP_S,w.CLAMP_TO_EDGE),w.texParameteri(w.TEXTURE_2D,w.TEXTURE_WRAP_T,w.CLAMP_TO_EDGE),w.texImage2D(w.TEXTURE_2D,0,ve,k,he,0,Oe,ct,null);let cn=w.createFramebuffer();w.bindFramebuffer(w.FRAMEBUFFER,cn),w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,at,0),w.viewport(0,0,k,he),w.clear(w.COLOR_BUFFER_BIT);let Jt=1/k,On=1/he;return{texture:at,fbo:cn,width:k,height:he,texelSizeX:Jt,texelSizeY:On,attach(C){return w.activeTexture(w.TEXTURE0+C),w.bindTexture(w.TEXTURE_2D,at),C}}}function ae(k,he,ve,Oe,ct,It){let at=Q(k,he,ve,Oe,ct,It),cn=Q(k,he,ve,Oe,ct,It);return{width:k,height:he,texelSizeX:at.texelSizeX,texelSizeY:at.texelSizeY,get read(){return at},set read(Jt){at=Jt},get write(){return cn},set write(Jt){cn=Jt},swap(){let Jt=at;at=cn,cn=Jt}}}function pe(k,he,ve,Oe,ct,It,at){let cn=Q(he,ve,Oe,ct,It,at);return ut.bind(),w.uniform1i(ut.uniforms.uTexture,k.attach(0)),Me(cn),cn}function Ce(k,he,ve,Oe,ct,It,at){return k.width===he&&k.height===ve||(k.read=pe(k.read,he,ve,Oe,ct,It,at),k.write=Q(he,ve,Oe,ct,It,at),k.width=he,k.height=ve,k.texelSizeX=1/he,k.texelSizeY=1/ve),k}function Ie(){let k=[];F.SHADING&&k.push("SHADING"),U.setKeywords(k)}Ie(),E();let ge=Date.now(),xe=0;function Ue(){if(!b)return;const k=nt();Be()&&E(),Le(k),it(),lt(k),mt(null),D.current=requestAnimationFrame(Ue)}function nt(){let k=Date.now(),he=(k-ge)/1e3;return he=Math.min(he,.016666),ge=k,he}function Be(){let k=An(I.clientWidth),he=An(I.clientHeight);return I.width!==k||I.height!==he?(I.width=k,I.height=he,!0):!1}function Le(k){xe+=k*F.COLOR_UPDATE_SPEED,xe>=1&&(xe=Fr(xe,0,1),T.forEach(he=>{he.color=Ln()}))}function it(){T.forEach(k=>{k.moved&&(k.moved=!1,Fe(k))})}function lt(k){w.disable(w.BLEND),Vt.bind(),w.uniform2f(Vt.uniforms.texelSize,Xe.texelSizeX,Xe.texelSizeY),w.uniform1i(Vt.uniforms.uVelocity,Xe.read.attach(0)),Me(xt),V.bind(),w.uniform2f(V.uniforms.texelSize,Xe.texelSizeX,Xe.texelSizeY),w.uniform1i(V.uniforms.uVelocity,Xe.read.attach(0)),w.uniform1i(V.uniforms.uCurl,xt.attach(1)),w.uniform1f(V.uniforms.curl,F.CURL),w.uniform1f(V.uniforms.dt,k),Me(Xe.write),Xe.swap(),Ct.bind(),w.uniform2f(Ct.uniforms.texelSize,Xe.texelSizeX,Xe.texelSizeY),w.uniform1i(Ct.uniforms.uVelocity,Xe.read.attach(0)),Me(dt),ft.bind(),w.uniform1i(ft.uniforms.uTexture,yt.read.attach(0)),w.uniform1f(ft.uniforms.value,F.PRESSURE),Me(yt.write),yt.swap(),$t.bind(),w.uniform2f($t.uniforms.texelSize,Xe.texelSizeX,Xe.texelSizeY),w.uniform1i($t.uniforms.uDivergence,dt.attach(0));for(let ve=0;ve<F.PRESSURE_ITERATIONS;ve++)w.uniform1i($t.uniforms.uPressure,yt.read.attach(1)),Me(yt.write),yt.swap();wt.bind(),w.uniform2f(wt.uniforms.texelSize,Xe.texelSizeX,Xe.texelSizeY),w.uniform1i(wt.uniforms.uPressure,yt.read.attach(0)),w.uniform1i(wt.uniforms.uVelocity,Xe.read.attach(1)),Me(Xe.write),Xe.swap(),Lt.bind(),w.uniform2f(Lt.uniforms.texelSize,Xe.texelSizeX,Xe.texelSizeY),B.supportLinearFiltering||w.uniform2f(Lt.uniforms.dyeTexelSize,Xe.texelSizeX,Xe.texelSizeY);let he=Xe.read.attach(0);w.uniform1i(Lt.uniforms.uVelocity,he),w.uniform1i(Lt.uniforms.uSource,he),w.uniform1f(Lt.uniforms.dt,k),w.uniform1f(Lt.uniforms.dissipation,F.VELOCITY_DISSIPATION),Me(Xe.write),Xe.swap(),B.supportLinearFiltering||w.uniform2f(Lt.uniforms.dyeTexelSize,De.texelSizeX,De.texelSizeY),w.uniform1i(Lt.uniforms.uVelocity,Xe.read.attach(0)),w.uniform1i(Lt.uniforms.uSource,De.read.attach(1)),w.uniform1f(Lt.uniforms.dissipation,F.DENSITY_DISSIPATION),Me(De.write),De.swap()}function mt(k){w.blendFunc(w.ONE,w.ONE_MINUS_SRC_ALPHA),w.enable(w.BLEND),G(k)}function G(k){let he=w.drawingBufferWidth,ve=w.drawingBufferHeight;U.bind(),F.SHADING&&w.uniform2f(U.uniforms.texelSize,1/he,1/ve),w.uniform1i(U.uniforms.uTexture,De.read.attach(0)),Me(k)}function Fe(k){let he=k.deltaX*F.SPLAT_FORCE,ve=k.deltaY*F.SPLAT_FORCE;Ne(k.texcoordX,k.texcoordY,he,ve,k.color)}function _e(k){const he=Ln();he.r*=10,he.g*=10,he.b*=10;let ve=10*(Math.random()-.5),Oe=30*(Math.random()-.5);Ne(k.texcoordX,k.texcoordY,ve,Oe,he)}function Ne(k,he,ve,Oe,ct){Dt.bind(),w.uniform1i(Dt.uniforms.uTarget,Xe.read.attach(0)),w.uniform1f(Dt.uniforms.aspectRatio,I.width/I.height),w.uniform2f(Dt.uniforms.point,k,he),w.uniform3f(Dt.uniforms.color,ve,Oe,0),w.uniform1f(Dt.uniforms.radius,ze(F.SPLAT_RADIUS/100)),Me(Xe.write),Xe.swap(),w.uniform1i(Dt.uniforms.uTarget,De.read.attach(0)),w.uniform3f(Dt.uniforms.color,ct.r,ct.g,ct.b),Me(De.write),De.swap()}function ze(k){let he=I.width/I.height;return he>1&&(k*=he),k}function Se(k,he,ve,Oe){k.id=he,k.down=!0,k.moved=!1,k.texcoordX=ve/I.width,k.texcoordY=1-Oe/I.height,k.prevTexcoordX=k.texcoordX,k.prevTexcoordY=k.texcoordY,k.deltaX=0,k.deltaY=0,k.color=Ln()}function Je(k,he,ve,Oe){k.prevTexcoordX=k.texcoordX,k.prevTexcoordY=k.texcoordY,k.texcoordX=he/I.width,k.texcoordY=1-ve/I.height,k.deltaX=kt(k.texcoordX-k.prevTexcoordX),k.deltaY=Nt(k.texcoordY-k.prevTexcoordY),k.moved=Math.abs(k.deltaX)>0||Math.abs(k.deltaY)>0,k.color=Oe}function Qe(k){k.down=!1}function kt(k){let he=I.width/I.height;return he<1&&(k*=he),k}function Nt(k){let he=I.width/I.height;return he>1&&(k/=he),k}function yn(k){let he=k.replace("#","");he.length===3&&(he=he[0]+he[0]+he[1]+he[1]+he[2]+he[2]);const ve=parseInt(he.slice(0,2),16)/255,Oe=parseInt(he.slice(2,4),16)/255,ct=parseInt(he.slice(4,6),16)/255;return{r:ve*.15,g:Oe*.15,b:ct*.15}}function Ln(){if(!F.RAINBOW_MODE)return yn(F.COLOR);let k=ur(Math.random(),1,1);return k.r*=.15,k.g*=.15,k.b*=.15,k}function ur(k,he,ve){let Oe,ct,It,at,cn,Jt,On,C;switch(at=Math.floor(k*6),cn=k*6-at,Jt=ve*(1-he),On=ve*(1-cn*he),C=ve*(1-(1-cn)*he),at%6){case 0:Oe=ve,ct=C,It=Jt;break;case 1:Oe=On,ct=ve,It=Jt;break;case 2:Oe=Jt,ct=ve,It=C;break;case 3:Oe=Jt,ct=On,It=ve;break;case 4:Oe=C,ct=Jt,It=ve;break;case 5:Oe=ve,ct=Jt,It=On;break}return{r:Oe,g:ct,b:It}}function Fr(k,he,ve){const Oe=ve-he;return(k-he)%Oe+he}function Yi(k){let he=w.drawingBufferWidth/w.drawingBufferHeight;he<1&&(he=1/he);const ve=Math.round(k),Oe=Math.round(k*he);return w.drawingBufferWidth>w.drawingBufferHeight?{width:Oe,height:ve}:{width:ve,height:Oe}}function An(k){const he=L?Math.min(window.devicePixelRatio||1,2):window.devicePixelRatio||1;return Math.floor(k*he)}function Yo(k){if(k.length===0)return 0;let he=0;for(let ve=0;ve<k.length;ve++)he=(he<<5)-he+k.charCodeAt(ve),he|=0;return he}function ps(k){let he=T[0],ve=An(k.clientX),Oe=An(k.clientY);Se(he,-1,ve,Oe),_e(he)}let ms=!1;function Rn(k){let he=T[0],ve=An(k.clientX),Oe=An(k.clientY);if(ms)Je(he,ve,Oe,he.color);else{let ct=Ln();Je(he,ve,Oe,ct),ms=!0}}function fr(k){const he=k.touches[0];if(!he)return;let ve=T[0],Oe=An(he.clientX),ct=An(he.clientY);Se(ve,he.identifier,Oe,ct),_e(ve)}function Or(k){const he=k.touches[0];if(!he)return;let ve=T[0],Oe=An(he.clientX),ct=An(he.clientY);Je(ve,Oe,ct,ve.color)}function dr(){Qe(T[0])}return window.addEventListener("mousedown",ps),window.addEventListener("mousemove",Rn),window.addEventListener("touchstart",fr,{passive:!0}),window.addEventListener("touchmove",Or,{passive:!0}),window.addEventListener("touchend",dr,{passive:!0}),window.addEventListener("touchcancel",dr,{passive:!0}),Ue(),()=>{b=!1,D.current&&(cancelAnimationFrame(D.current),D.current=null),window.removeEventListener("mousedown",ps),window.removeEventListener("mousemove",Rn),window.removeEventListener("touchstart",fr),window.removeEventListener("touchmove",Or),window.removeEventListener("touchend",dr),window.removeEventListener("touchcancel",dr)}},[]),K.jsx("div",{style:{position:"fixed",top:0,left:0,zIndex:50,pointerEvents:"none",width:"100dvw",height:"100dvh",maxWidth:"100%",overflow:"hidden",opacity:S},children:K.jsx("canvas",{ref:x,id:"fluid",style:{width:"100%",height:"100%",display:"block"}})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hp="186",bw=0,qv=1,Pw=2,Wc=1,Dw=2,Ba=3,zs=0,ai=1,Rr=2,Dr=0,Xa=1,ja=2,Kv=3,$v=4,Lw=5,Co=100,Nw=101,Iw=102,Uw=103,Fw=104,Ow=200,Bw=201,kw=202,zw=203,Nx=204,Ix=205,Vw=206,Hw=207,Gw=208,Ww=209,Xw=210,jw=211,Yw=212,qw=213,Kw=214,gh=0,vh=1,_h=2,Qa=3,xh=4,yh=5,Sh=6,Mh=7,Ux=0,$w=1,Zw=2,sr=0,Fx=1,Ox=2,Bx=3,kx=4,zx=5,Vx=6,Hx=7,Gx=300,Vs=301,zo=302,xd=303,yd=304,Su=306,Eh=1e3,Cr=1001,Th=1002,Fn=1003,Qw=1004,pc=1005,Yn=1006,Sd=1007,Os=1008,bi=1009,Wx=1010,Xx=1011,Ja=1012,Gp=1013,ar=1014,tr=1015,lr=1016,Wp=1017,Xp=1018,el=1020,jx=35902,Yx=35899,qx=1021,Kx=1022,Xi=1023,Ir=1026,Bs=1027,$x=1028,jp=1029,Hs=1030,Yp=1031,qp=1033,Xc=33776,jc=33777,Yc=33778,qc=33779,wh=35840,Ah=35841,Rh=35842,Ch=35843,bh=36196,Ph=37492,Dh=37496,Lh=37488,Nh=37489,su=37490,Ih=37491,Uh=37808,Fh=37809,Oh=37810,Bh=37811,kh=37812,zh=37813,Vh=37814,Hh=37815,Gh=37816,Wh=37817,Xh=37818,jh=37819,Yh=37820,qh=37821,Kh=36492,$h=36494,Zh=36495,Qh=36283,Jh=36284,ou=36285,ep=36286,Jw=3200,Zv=0,eA=1,cs="",Ri="srgb",au="srgb-linear",lu="linear",Kt="srgb",Md=7680,tA=519,nA=512,iA=513,rA=514,Kp=515,sA=516,oA=517,$p=518,aA=519,lA=35044,Qv="300 es",nr=2e3,cu=2001;function cA(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function uu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function uA(){const n=uu("canvas");return n.style.display="block",n}const Jv={};function e1(...n){const e="THREE."+n.shift();console.log(e,...n)}function Zx(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function _t(...n){n=Zx(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Wt(...n){n=Zx(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Uo(...n){const e=n.join(" ");e in Jv||(Jv[e]=!0,_t(...n))}function fA(n,e,t){return new Promise(function(r,o){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:r()}}setTimeout(a,t)})}const dA={[gh]:vh,[_h]:Sh,[xh]:Mh,[Qa]:yh,[vh]:gh,[Sh]:_h,[Mh]:xh,[yh]:Qa};class Xs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ed=Math.PI/180,tp=180/Math.PI;function ol(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Gn[n&255]+Gn[n>>8&255]+Gn[n>>16&255]+Gn[n>>24&255]+"-"+Gn[e&255]+Gn[e>>8&255]+"-"+Gn[e>>16&15|64]+Gn[e>>24&255]+"-"+Gn[t&63|128]+Gn[t>>8&255]+"-"+Gn[t>>16&255]+Gn[t>>24&255]+Gn[r&255]+Gn[r>>8&255]+Gn[r>>16&255]+Gn[r>>24&255]).toLowerCase()}function Bt(n,e,t){return Math.max(e,Math.min(t,n))}function hA(n,e){return(n%e+e)%e}function Td(n,e,t){return(1-t)*n+t*e}function Ra(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function si(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const em=class em{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Bt(this.x,e.x,t.x),this.y=Bt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Bt(this.x,e,t),this.y=Bt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Bt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*r-c*o+e.x,this.y=a*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};em.prototype.isVector2=!0;let jt=em;class Wo{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,a,c,u){let d=r[o+0],h=r[o+1],m=r[o+2],v=r[o+3],g=a[c+0],y=a[c+1],M=a[c+2],A=a[c+3];if(v!==A||d!==g||h!==y||m!==M){let S=d*g+h*y+m*M+v*A;S<0&&(g=-g,y=-y,M=-M,A=-A,S=-S);let x=1-u;if(S<.9995){const D=Math.acos(S),I=Math.sin(D);x=Math.sin(x*D)/I,u=Math.sin(u*D)/I,d=d*x+g*u,h=h*x+y*u,m=m*x+M*u,v=v*x+A*u}else{d=d*x+g*u,h=h*x+y*u,m=m*x+M*u,v=v*x+A*u;const D=1/Math.sqrt(d*d+h*h+m*m+v*v);d*=D,h*=D,m*=D,v*=D}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,a,c){const u=r[o],d=r[o+1],h=r[o+2],m=r[o+3],v=a[c],g=a[c+1],y=a[c+2],M=a[c+3];return e[t]=u*M+m*v+d*y-h*g,e[t+1]=d*M+m*g+h*v-u*y,e[t+2]=h*M+m*y+u*g-d*v,e[t+3]=m*M-u*v-d*g-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,a=e._z,c=e._order,u=Math.cos,d=Math.sin,h=u(r/2),m=u(o/2),v=u(a/2),g=d(r/2),y=d(o/2),M=d(a/2);switch(c){case"XYZ":this._x=g*m*v+h*y*M,this._y=h*y*v-g*m*M,this._z=h*m*M+g*y*v,this._w=h*m*v-g*y*M;break;case"YXZ":this._x=g*m*v+h*y*M,this._y=h*y*v-g*m*M,this._z=h*m*M-g*y*v,this._w=h*m*v+g*y*M;break;case"ZXY":this._x=g*m*v-h*y*M,this._y=h*y*v+g*m*M,this._z=h*m*M+g*y*v,this._w=h*m*v-g*y*M;break;case"ZYX":this._x=g*m*v-h*y*M,this._y=h*y*v+g*m*M,this._z=h*m*M-g*y*v,this._w=h*m*v+g*y*M;break;case"YZX":this._x=g*m*v+h*y*M,this._y=h*y*v+g*m*M,this._z=h*m*M-g*y*v,this._w=h*m*v-g*y*M;break;case"XZY":this._x=g*m*v-h*y*M,this._y=h*y*v-g*m*M,this._z=h*m*M+g*y*v,this._w=h*m*v+g*y*M;break;default:_t("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],a=t[8],c=t[1],u=t[5],d=t[9],h=t[2],m=t[6],v=t[10],g=r+u+v;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(m-d)*y,this._y=(a-h)*y,this._z=(c-o)*y}else if(r>u&&r>v){const y=2*Math.sqrt(1+r-u-v);this._w=(m-d)/y,this._x=.25*y,this._y=(o+c)/y,this._z=(a+h)/y}else if(u>v){const y=2*Math.sqrt(1+u-r-v);this._w=(a-h)/y,this._x=(o+c)/y,this._y=.25*y,this._z=(d+m)/y}else{const y=2*Math.sqrt(1+v-r-u);this._w=(c-o)/y,this._x=(a+h)/y,this._y=(d+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,a=e._z,c=e._w,u=t._x,d=t._y,h=t._z,m=t._w;return this._x=r*m+c*u+o*h-a*d,this._y=o*m+c*d+a*u-r*h,this._z=a*m+c*h+r*d-o*u,this._w=c*m-r*u-o*d-a*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,a=e._z,c=e._w,u=this.dot(e);u<0&&(r=-r,o=-o,a=-a,c=-c,u=-u);let d=1-t;if(u<.9995){const h=Math.acos(u),m=Math.sin(h);d=Math.sin(d*h)/m,t=Math.sin(t*h)/m,this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+a*t,this._w=this._w*d+c*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+a*t,this._w=this._w*d+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const tm=class tm{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(t1.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(t1.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*o,this.y=a[1]*t+a[4]*r+a[7]*o,this.z=a[2]*t+a[5]*r+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*r+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*r+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*r+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,a=e.x,c=e.y,u=e.z,d=e.w,h=2*(c*o-u*r),m=2*(u*t-a*o),v=2*(a*r-c*t);return this.x=t+d*h+c*v-u*m,this.y=r+d*m+u*h-a*v,this.z=o+d*v+a*m-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*o,this.y=a[1]*t+a[5]*r+a[9]*o,this.z=a[2]*t+a[6]*r+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Bt(this.x,e.x,t.x),this.y=Bt(this.y,e.y,t.y),this.z=Bt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Bt(this.x,e,t),this.y=Bt(this.y,e,t),this.z=Bt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Bt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,a=e.z,c=t.x,u=t.y,d=t.z;return this.x=o*d-a*u,this.y=a*c-r*d,this.z=r*u-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return wd.copy(this).projectOnVector(e),this.sub(wd)}reflect(e){return this.sub(wd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};tm.prototype.isVector3=!0;let ce=tm;const wd=new ce,t1=new Wo,nm=class nm{constructor(e,t,r,o,a,c,u,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,u,d,h)}set(e,t,r,o,a,c,u,d,h){const m=this.elements;return m[0]=e,m[1]=o,m[2]=u,m[3]=t,m[4]=a,m[5]=d,m[6]=r,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],u=r[3],d=r[6],h=r[1],m=r[4],v=r[7],g=r[2],y=r[5],M=r[8],A=o[0],S=o[3],x=o[6],D=o[1],I=o[4],b=o[7],P=o[2],L=o[5],F=o[8];return a[0]=c*A+u*D+d*P,a[3]=c*S+u*I+d*L,a[6]=c*x+u*b+d*F,a[1]=h*A+m*D+v*P,a[4]=h*S+m*I+v*L,a[7]=h*x+m*b+v*F,a[2]=g*A+y*D+M*P,a[5]=g*S+y*I+M*L,a[8]=g*x+y*b+M*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],m=e[8];return t*c*m-t*u*h-r*a*m+r*u*d+o*a*h-o*c*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],m=e[8],v=m*c-u*h,g=u*d-m*a,y=h*a-c*d,M=t*v+r*g+o*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=v*A,e[1]=(o*h-m*r)*A,e[2]=(u*r-o*c)*A,e[3]=g*A,e[4]=(m*t-o*d)*A,e[5]=(o*a-u*t)*A,e[6]=y*A,e[7]=(r*d-h*t)*A,e[8]=(c*t-r*a)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,a,c,u){const d=Math.cos(a),h=Math.sin(a);return this.set(r*d,r*h,-r*(d*c+h*u)+c+e,-o*h,o*d,-o*(-h*c+d*u)+u+t,0,0,1),this}scale(e,t){return Uo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ad.makeScale(e,t)),this}rotate(e){return Uo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ad.makeRotation(-e)),this}translate(e,t){return Uo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ad.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};nm.prototype.isMatrix3=!0;let Et=nm;const Ad=new Et,n1=new Et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),i1=new Et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pA(){const n={enabled:!0,workingColorSpace:au,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Kt&&(o.r=Lr(o.r),o.g=Lr(o.g),o.b=Lr(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Kt&&(o.r=Fo(o.r),o.g=Fo(o.g),o.b=Fo(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===cs?lu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return Uo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return Uo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[au]:{primaries:e,whitePoint:r,transfer:lu,toXYZ:n1,fromXYZ:i1,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ri},outputColorSpaceConfig:{drawingBufferColorSpace:Ri}},[Ri]:{primaries:e,whitePoint:r,transfer:Kt,toXYZ:n1,fromXYZ:i1,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ri}}}),n}const Ot=pA();function Lr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let mo;class mA{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{mo===void 0&&(mo=uu("canvas")),mo.width=e.width,mo.height=e.height;const o=mo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=mo}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=uu("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=Lr(a[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Lr(t[r]/255)*255):t[r]=Lr(t[r]);return{data:t,width:e.width,height:e.height}}else return _t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gA=0;class Zp{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gA++}),this.uuid=ol(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,u=o.length;c<u;c++)o[c].isDataTexture?a.push(Rd(o[c].image)):a.push(Rd(o[c]))}else a=Rd(o);r.url=a}return t||(e.images[this.uuid]=r),r}}function Rd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?mA.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(_t("Texture: Unable to serialize Texture."),{})}let vA=0;const Cd=new ce;class qn extends Xs{constructor(e=qn.DEFAULT_IMAGE,t=qn.DEFAULT_MAPPING,r=Cr,o=Cr,a=Yn,c=Os,u=Xi,d=bi,h=qn.DEFAULT_ANISOTROPY,m=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vA++}),this.uuid=ol(),this.name="",this.source=new Zp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=d,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Cd).x}get height(){return this.source.getSize(Cd).y}get depth(){return this.source.getSize(Cd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){_t(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){_t(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Eh:e.x=e.x-Math.floor(e.x);break;case Cr:e.x=e.x<0?0:1;break;case Th:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Eh:e.y=e.y-Math.floor(e.y);break;case Cr:e.y=e.y<0?0:1;break;case Th:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=Gx;qn.DEFAULT_ANISOTROPY=1;const im=class im{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,a;const d=e.elements,h=d[0],m=d[4],v=d[8],g=d[1],y=d[5],M=d[9],A=d[2],S=d[6],x=d[10];if(Math.abs(m-g)<.01&&Math.abs(v-A)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+g)<.1&&Math.abs(v+A)<.1&&Math.abs(M+S)<.1&&Math.abs(h+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(h+1)/2,b=(y+1)/2,P=(x+1)/2,L=(m+g)/4,F=(v+A)/4,T=(M+S)/4;return I>b&&I>P?I<.01?(r=0,o=.707106781,a=.707106781):(r=Math.sqrt(I),o=L/r,a=F/r):b>P?b<.01?(r=.707106781,o=0,a=.707106781):(o=Math.sqrt(b),r=L/o,a=T/o):P<.01?(r=.707106781,o=.707106781,a=0):(a=Math.sqrt(P),r=F/a,o=T/a),this.set(r,o,a,t),this}let D=Math.sqrt((S-M)*(S-M)+(v-A)*(v-A)+(g-m)*(g-m));return Math.abs(D)<.001&&(D=1),this.x=(S-M)/D,this.y=(v-A)/D,this.z=(g-m)/D,this.w=Math.acos((h+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Bt(this.x,e.x,t.x),this.y=Bt(this.y,e.y,t.y),this.z=Bt(this.z,e.z,t.z),this.w=Bt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Bt(this.x,e,t),this.y=Bt(this.y,e,t),this.z=Bt(this.z,e,t),this.w=Bt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Bt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};im.prototype.isVector4=!0;let hn=im;class _A extends Xs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new hn(0,0,e,t),this.scissorTest=!1,this.viewport=new hn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},a=new qn(o),c=r.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Zp(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends _A{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Qx extends qn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xA extends qn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const hu=class hu{constructor(e,t,r,o,a,c,u,d,h,m,v,g,y,M,A,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,u,d,h,m,v,g,y,M,A,S)}set(e,t,r,o,a,c,u,d,h,m,v,g,y,M,A,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=o,x[1]=a,x[5]=c,x[9]=u,x[13]=d,x[2]=h,x[6]=m,x[10]=v,x[14]=g,x[3]=y,x[7]=M,x[11]=A,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hu().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/go.setFromMatrixColumn(e,0).length(),a=1/go.setFromMatrixColumn(e,1).length(),c=1/go.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,a=e.z,c=Math.cos(r),u=Math.sin(r),d=Math.cos(o),h=Math.sin(o),m=Math.cos(a),v=Math.sin(a);if(e.order==="XYZ"){const g=c*m,y=c*v,M=u*m,A=u*v;t[0]=d*m,t[4]=-d*v,t[8]=h,t[1]=y+M*h,t[5]=g-A*h,t[9]=-u*d,t[2]=A-g*h,t[6]=M+y*h,t[10]=c*d}else if(e.order==="YXZ"){const g=d*m,y=d*v,M=h*m,A=h*v;t[0]=g+A*u,t[4]=M*u-y,t[8]=c*h,t[1]=c*v,t[5]=c*m,t[9]=-u,t[2]=y*u-M,t[6]=A+g*u,t[10]=c*d}else if(e.order==="ZXY"){const g=d*m,y=d*v,M=h*m,A=h*v;t[0]=g-A*u,t[4]=-c*v,t[8]=M+y*u,t[1]=y+M*u,t[5]=c*m,t[9]=A-g*u,t[2]=-c*h,t[6]=u,t[10]=c*d}else if(e.order==="ZYX"){const g=c*m,y=c*v,M=u*m,A=u*v;t[0]=d*m,t[4]=M*h-y,t[8]=g*h+A,t[1]=d*v,t[5]=A*h+g,t[9]=y*h-M,t[2]=-h,t[6]=u*d,t[10]=c*d}else if(e.order==="YZX"){const g=c*d,y=c*h,M=u*d,A=u*h;t[0]=d*m,t[4]=A-g*v,t[8]=M*v+y,t[1]=v,t[5]=c*m,t[9]=-u*m,t[2]=-h*m,t[6]=y*v+M,t[10]=g-A*v}else if(e.order==="XZY"){const g=c*d,y=c*h,M=u*d,A=u*h;t[0]=d*m,t[4]=-v,t[8]=h*m,t[1]=g*v+A,t[5]=c*m,t[9]=y*v-M,t[2]=M*v-y,t[6]=u*m,t[10]=A*v+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yA,e,SA)}lookAt(e,t,r){const o=this.elements;return hi.subVectors(e,t),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),ns.crossVectors(r,hi),ns.lengthSq()===0&&(Math.abs(r.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),ns.crossVectors(r,hi)),ns.normalize(),mc.crossVectors(hi,ns),o[0]=ns.x,o[4]=mc.x,o[8]=hi.x,o[1]=ns.y,o[5]=mc.y,o[9]=hi.y,o[2]=ns.z,o[6]=mc.z,o[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],u=r[4],d=r[8],h=r[12],m=r[1],v=r[5],g=r[9],y=r[13],M=r[2],A=r[6],S=r[10],x=r[14],D=r[3],I=r[7],b=r[11],P=r[15],L=o[0],F=o[4],T=o[8],w=o[12],B=o[1],Y=o[5],J=o[9],se=o[13],q=o[2],ee=o[6],me=o[10],$=o[14],H=o[3],Z=o[7],X=o[11],N=o[15];return a[0]=c*L+u*B+d*q+h*H,a[4]=c*F+u*Y+d*ee+h*Z,a[8]=c*T+u*J+d*me+h*X,a[12]=c*w+u*se+d*$+h*N,a[1]=m*L+v*B+g*q+y*H,a[5]=m*F+v*Y+g*ee+y*Z,a[9]=m*T+v*J+g*me+y*X,a[13]=m*w+v*se+g*$+y*N,a[2]=M*L+A*B+S*q+x*H,a[6]=M*F+A*Y+S*ee+x*Z,a[10]=M*T+A*J+S*me+x*X,a[14]=M*w+A*se+S*$+x*N,a[3]=D*L+I*B+b*q+P*H,a[7]=D*F+I*Y+b*ee+P*Z,a[11]=D*T+I*J+b*me+P*X,a[15]=D*w+I*se+b*$+P*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],a=e[12],c=e[1],u=e[5],d=e[9],h=e[13],m=e[2],v=e[6],g=e[10],y=e[14],M=e[3],A=e[7],S=e[11],x=e[15],D=d*y-h*g,I=u*y-h*v,b=u*g-d*v,P=c*y-h*m,L=c*g-d*m,F=c*v-u*m;return t*(A*D-S*I+x*b)-r*(M*D-S*P+x*L)+o*(M*I-A*P+x*F)-a*(M*b-A*L+S*F)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],a=e[1],c=e[5],u=e[9],d=e[2],h=e[6],m=e[10];return t*(c*m-u*h)-r*(a*m-u*d)+o*(a*h-c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],m=e[8],v=e[9],g=e[10],y=e[11],M=e[12],A=e[13],S=e[14],x=e[15],D=t*u-r*c,I=t*d-o*c,b=t*h-a*c,P=r*d-o*u,L=r*h-a*u,F=o*h-a*d,T=m*A-v*M,w=m*S-g*M,B=m*x-y*M,Y=v*S-g*A,J=v*x-y*A,se=g*x-y*S,q=D*se-I*J+b*Y+P*B-L*w+F*T;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/q;return e[0]=(u*se-d*J+h*Y)*ee,e[1]=(o*J-r*se-a*Y)*ee,e[2]=(A*F-S*L+x*P)*ee,e[3]=(g*L-v*F-y*P)*ee,e[4]=(d*B-c*se-h*w)*ee,e[5]=(t*se-o*B+a*w)*ee,e[6]=(S*b-M*F-x*I)*ee,e[7]=(m*F-g*b+y*I)*ee,e[8]=(c*J-u*B+h*T)*ee,e[9]=(r*B-t*J-a*T)*ee,e[10]=(M*L-A*b+x*D)*ee,e[11]=(v*b-m*L-y*D)*ee,e[12]=(u*w-c*Y-d*T)*ee,e[13]=(t*Y-r*w+o*T)*ee,e[14]=(A*I-M*P-S*D)*ee,e[15]=(m*P-v*I+g*D)*ee,this}scale(e){const t=this.elements,r=e.x,o=e.y,a=e.z;return t[0]*=r,t[4]*=o,t[8]*=a,t[1]*=r,t[5]*=o,t[9]*=a,t[2]*=r,t[6]*=o,t[10]*=a,t[3]*=r,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),a=1-r,c=e.x,u=e.y,d=e.z,h=a*c,m=a*u;return this.set(h*c+r,h*u-o*d,h*d+o*u,0,h*u+o*d,m*u+r,m*d-o*c,0,h*d-o*u,m*d+o*c,a*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,a,c){return this.set(1,r,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,a=t._x,c=t._y,u=t._z,d=t._w,h=a+a,m=c+c,v=u+u,g=a*h,y=a*m,M=a*v,A=c*m,S=c*v,x=u*v,D=d*h,I=d*m,b=d*v,P=r.x,L=r.y,F=r.z;return o[0]=(1-(A+x))*P,o[1]=(y+b)*P,o[2]=(M-I)*P,o[3]=0,o[4]=(y-b)*L,o[5]=(1-(g+x))*L,o[6]=(S+D)*L,o[7]=0,o[8]=(M+I)*F,o[9]=(S-D)*F,o[10]=(1-(g+A))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const a=this.determinantAffine();if(a===0)return r.set(1,1,1),t.identity(),this;let c=go.set(o[0],o[1],o[2]).length();const u=go.set(o[4],o[5],o[6]).length(),d=go.set(o[8],o[9],o[10]).length();a<0&&(c=-c),zi.copy(this);const h=1/c,m=1/u,v=1/d;return zi.elements[0]*=h,zi.elements[1]*=h,zi.elements[2]*=h,zi.elements[4]*=m,zi.elements[5]*=m,zi.elements[6]*=m,zi.elements[8]*=v,zi.elements[9]*=v,zi.elements[10]*=v,t.setFromRotationMatrix(zi),r.x=c,r.y=u,r.z=d,this}makePerspective(e,t,r,o,a,c,u=nr,d=!1){const h=this.elements,m=2*a/(t-e),v=2*a/(r-o),g=(t+e)/(t-e),y=(r+o)/(r-o);let M,A;if(d)M=a/(c-a),A=c*a/(c-a);else if(u===nr)M=-(c+a)/(c-a),A=-2*c*a/(c-a);else if(u===cu)M=-c/(c-a),A=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=m,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=v,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=A,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,a,c,u=nr,d=!1){const h=this.elements,m=2/(t-e),v=2/(r-o),g=-(t+e)/(t-e),y=-(r+o)/(r-o);let M,A;if(d)M=1/(c-a),A=c/(c-a);else if(u===nr)M=-2/(c-a),A=-(c+a)/(c-a);else if(u===cu)M=-1/(c-a),A=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=m,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=v,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=M,h[14]=A,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};hu.prototype.isMatrix4=!0;let pn=hu;const go=new ce,zi=new pn,yA=new ce(0,0,0),SA=new ce(1,1,1),ns=new ce,mc=new ce,hi=new ce,r1=new pn,s1=new Wo;class Gs{constructor(e=0,t=0,r=0,o=Gs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,a=o[0],c=o[4],u=o[8],d=o[1],h=o[5],m=o[9],v=o[2],g=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(Bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-v,a),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-Bt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-v,a)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-Bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-m,y),this._y=0);break;default:_t("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return r1.makeRotationFromQuaternion(e),this.setFromRotationMatrix(r1,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return s1.setFromEuler(this),this.setFromQuaternion(s1,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gs.DEFAULT_ORDER="XYZ";class Jx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let MA=0;const o1=new ce,vo=new Wo,Mr=new pn,gc=new ce,Ca=new ce,EA=new ce,TA=new Wo,a1=new ce(1,0,0),l1=new ce(0,1,0),c1=new ce(0,0,1),u1={type:"added"},wA={type:"removed"},_o={type:"childadded",child:null},bd={type:"childremoved",child:null};class Qn extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:MA++}),this.uuid=ol(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qn.DEFAULT_UP.clone();const e=new ce,t=new Gs,r=new Wo,o=new ce(1,1,1);function a(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new pn},normalMatrix:{value:new Et}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=Qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vo.setFromAxisAngle(e,t),this.quaternion.multiply(vo),this}rotateOnWorldAxis(e,t){return vo.setFromAxisAngle(e,t),this.quaternion.premultiply(vo),this}rotateX(e){return this.rotateOnAxis(a1,e)}rotateY(e){return this.rotateOnAxis(l1,e)}rotateZ(e){return this.rotateOnAxis(c1,e)}translateOnAxis(e,t){return o1.copy(e).applyQuaternion(this.quaternion),this.position.add(o1.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(a1,e)}translateY(e){return this.translateOnAxis(l1,e)}translateZ(e){return this.translateOnAxis(c1,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?gc.copy(e):gc.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mr.lookAt(Ca,gc,this.up):Mr.lookAt(gc,Ca,this.up),this.quaternion.setFromRotationMatrix(Mr),o&&(Mr.extractRotation(o.matrixWorld),vo.setFromRotationMatrix(Mr),this.quaternion.premultiply(vo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(u1),_o.child=e,this.dispatchEvent(_o),_o.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wA),bd.child=e,this.dispatchEvent(bd),bd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(u1),_o.child=e,this.dispatchEvent(_o),_o.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,e,EA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,TA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*r-a[8]*o,a[13]+=r-a[1]*t-a[5]*r-a[9]*o,a[14]+=o-a[2]*t-a[6]*r-a[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(u=>({...u})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const v=d[h];a(e.shapes,v)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,h=this.material.length;d<h;d++)u.push(a(e.materials,this.material[d]));o.material=u}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];o.animations.push(a(e.animations,d))}}if(t){const u=c(e.geometries),d=c(e.materials),h=c(e.textures),m=c(e.images),v=c(e.shapes),g=c(e.skeletons),y=c(e.animations),M=c(e.nodes);u.length>0&&(r.geometries=u),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),m.length>0&&(r.images=m),v.length>0&&(r.shapes=v),g.length>0&&(r.skeletons=g),y.length>0&&(r.animations=y),M.length>0&&(r.nodes=M)}return r.object=o,r;function c(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Qn.DEFAULT_UP=new ce(0,1,0);Qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ka extends Qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AA={type:"move"};class Pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ka,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ka,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ka,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,a=null,c=null;const u=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const A of e.hand.values()){const S=t.getJointPose(A,r),x=this._getHandJoint(h,A);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const m=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],g=m.position.distanceTo(v.position),y=.02,M=.005;h.inputState.pinching&&g>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));u!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&a!==null&&(o=a),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(AA)))}return u!==null&&(u.visible=o!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ka;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const ey={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},vc={h:0,s:0,l:0};function Dd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Pt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Ot.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ot.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Ot.workingColorSpace){if(e=hA(e,1),t=Bt(t,0,1),r=Bt(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,c=2*r-a;this.r=Dd(c,a,e+1/3),this.g=Dd(c,a,e),this.b=Dd(c,a,e-1/3)}return Ot.colorSpaceToWorking(this,o),this}setStyle(e,t=Ri){function r(a){a!==void 0&&parseFloat(a)<1&&_t("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],u=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:_t("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);_t("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ri){const r=ey[e.toLowerCase()];return r!==void 0?this.setHex(r,t):_t("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}copyLinearToSRGB(e){return this.r=Fo(e.r),this.g=Fo(e.g),this.b=Fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ri){return Ot.workingToColorSpace(Wn.copy(this),e),Math.round(Bt(Wn.r*255,0,255))*65536+Math.round(Bt(Wn.g*255,0,255))*256+Math.round(Bt(Wn.b*255,0,255))}getHexString(e=Ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ot.workingColorSpace){Ot.workingToColorSpace(Wn.copy(this),t);const r=Wn.r,o=Wn.g,a=Wn.b,c=Math.max(r,o,a),u=Math.min(r,o,a);let d,h;const m=(u+c)/2;if(u===c)d=0,h=0;else{const v=c-u;switch(h=m<=.5?v/(c+u):v/(2-c-u),c){case r:d=(o-a)/v+(o<a?6:0);break;case o:d=(a-r)/v+2;break;case a:d=(r-o)/v+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=Ot.workingColorSpace){return Ot.workingToColorSpace(Wn.copy(this),t),e.r=Wn.r,e.g=Wn.g,e.b=Wn.b,e}getStyle(e=Ri){Ot.workingToColorSpace(Wn.copy(this),e);const t=Wn.r,r=Wn.g,o=Wn.b;return e!==Ri?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(is),this.setHSL(is.h+e,is.s+t,is.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(is),e.getHSL(vc);const r=Td(is.h,vc.h,t),o=Td(is.s,vc.s,t),a=Td(is.l,vc.l,t);return this.setHSL(r,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*o,this.g=a[1]*t+a[4]*r+a[7]*o,this.b=a[2]*t+a[5]*r+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wn=new Pt;Pt.NAMES=ey;class Qp{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pt(e),this.density=t}clone(){return new Qp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class RA extends Qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gs,this.environmentIntensity=1,this.environmentRotation=new Gs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Vi=new ce,Er=new ce,Ld=new ce,Tr=new ce,xo=new ce,yo=new ce,f1=new ce,Nd=new ce,Id=new ce,Ud=new ce,Fd=new hn,Od=new hn,Bd=new hn;class Wi{constructor(e=new ce,t=new ce,r=new ce){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Vi.subVectors(e,t),o.cross(Vi);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,r,o,a){Vi.subVectors(o,t),Er.subVectors(r,t),Ld.subVectors(e,t);const c=Vi.dot(Vi),u=Vi.dot(Er),d=Vi.dot(Ld),h=Er.dot(Er),m=Er.dot(Ld),v=c*h-u*u;if(v===0)return a.set(0,0,0),null;const g=1/v,y=(h*d-u*m)*g,M=(c*m-u*d)*g;return a.set(1-y-M,M,y)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Tr)===null?!1:Tr.x>=0&&Tr.y>=0&&Tr.x+Tr.y<=1}static getInterpolation(e,t,r,o,a,c,u,d){return this.getBarycoord(e,t,r,o,Tr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,Tr.x),d.addScaledVector(c,Tr.y),d.addScaledVector(u,Tr.z),d)}static getInterpolatedAttribute(e,t,r,o,a,c){return Fd.setScalar(0),Od.setScalar(0),Bd.setScalar(0),Fd.fromBufferAttribute(e,t),Od.fromBufferAttribute(e,r),Bd.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Fd,a.x),c.addScaledVector(Od,a.y),c.addScaledVector(Bd,a.z),c}static isFrontFacing(e,t,r,o){return Vi.subVectors(r,t),Er.subVectors(e,t),Vi.cross(Er).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vi.subVectors(this.c,this.b),Er.subVectors(this.a,this.b),Vi.cross(Er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,a){return Wi.getInterpolation(e,this.a,this.b,this.c,t,r,o,a)}containsPoint(e){return Wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,a=this.c;let c,u;xo.subVectors(o,r),yo.subVectors(a,r),Nd.subVectors(e,r);const d=xo.dot(Nd),h=yo.dot(Nd);if(d<=0&&h<=0)return t.copy(r);Id.subVectors(e,o);const m=xo.dot(Id),v=yo.dot(Id);if(m>=0&&v<=m)return t.copy(o);const g=d*v-m*h;if(g<=0&&d>=0&&m<=0)return c=d/(d-m),t.copy(r).addScaledVector(xo,c);Ud.subVectors(e,a);const y=xo.dot(Ud),M=yo.dot(Ud);if(M>=0&&y<=M)return t.copy(a);const A=y*h-d*M;if(A<=0&&h>=0&&M<=0)return u=h/(h-M),t.copy(r).addScaledVector(yo,u);const S=m*M-y*v;if(S<=0&&v-m>=0&&y-M>=0)return f1.subVectors(a,o),u=(v-m)/(v-m+(y-M)),t.copy(o).addScaledVector(f1,u);const x=1/(S+A+g);return c=A*x,u=g*x,t.copy(r).addScaledVector(xo,c).addScaledVector(yo,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class al{constructor(e=new ce(1/0,1/0,1/0),t=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Hi):Hi.fromBufferAttribute(a,c),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_c.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),_c.copy(r.boundingBox)),_c.applyMatrix4(e.matrixWorld),this.union(_c)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ba),xc.subVectors(this.max,ba),So.subVectors(e.a,ba),Mo.subVectors(e.b,ba),Eo.subVectors(e.c,ba),rs.subVectors(Mo,So),ss.subVectors(Eo,Mo),bs.subVectors(So,Eo);let t=[0,-rs.z,rs.y,0,-ss.z,ss.y,0,-bs.z,bs.y,rs.z,0,-rs.x,ss.z,0,-ss.x,bs.z,0,-bs.x,-rs.y,rs.x,0,-ss.y,ss.x,0,-bs.y,bs.x,0];return!kd(t,So,Mo,Eo,xc)||(t=[1,0,0,0,1,0,0,0,1],!kd(t,So,Mo,Eo,xc))?!1:(yc.crossVectors(rs,ss),t=[yc.x,yc.y,yc.z],kd(t,So,Mo,Eo,xc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wr=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],Hi=new ce,_c=new al,So=new ce,Mo=new ce,Eo=new ce,rs=new ce,ss=new ce,bs=new ce,ba=new ce,xc=new ce,yc=new ce,Ps=new ce;function kd(n,e,t,r,o){for(let a=0,c=n.length-3;a<=c;a+=3){Ps.fromArray(n,a);const u=o.x*Math.abs(Ps.x)+o.y*Math.abs(Ps.y)+o.z*Math.abs(Ps.z),d=e.dot(Ps),h=t.dot(Ps),m=r.dot(Ps);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>u)return!1}return!0}const xn=new ce,Sc=new jt;let CA=0;class oi extends Xs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:CA++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=lA,this.updateRanges=[],this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Sc.fromBufferAttribute(this,t),Sc.applyMatrix3(e),this.setXY(t,Sc.x,Sc.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix3(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ra(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=si(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ra(t,this.array)),t}setX(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ra(t,this.array)),t}setY(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ra(t,this.array)),t}setZ(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ra(t,this.array)),t}setW(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),r=si(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),r=si(r,this.array),o=si(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,a){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),r=si(r,this.array),o=si(o,this.array),a=si(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class ty extends oi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class ny extends oi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class or extends oi{constructor(e,t,r){super(new Float32Array(e),t,r)}}const bA=new al,Pa=new ce,zd=new ce;class ll{constructor(e=new ce,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):bA.setFromPoints(e).getCenter(r);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pa.subVectors(e,this.center);const t=Pa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Pa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pa.copy(e.center).add(zd)),this.expandByPoint(Pa.copy(e.center).sub(zd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let PA=0;const wi=new pn,Vd=new Qn,To=new ce,pi=new al,Da=new al,Dn=new ce;class li extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PA++}),this.uuid=ol(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cA(e)?ny:ty)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new Et().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return wi.makeRotationFromQuaternion(e),this.applyMatrix4(wi),this}rotateX(e){return wi.makeRotationX(e),this.applyMatrix4(wi),this}rotateY(e){return wi.makeRotationY(e),this.applyMatrix4(wi),this}rotateZ(e){return wi.makeRotationZ(e),this.applyMatrix4(wi),this}translate(e,t,r){return wi.makeTranslation(e,t,r),this.applyMatrix4(wi),this}scale(e,t,r){return wi.makeScale(e,t,r),this.applyMatrix4(wi),this}lookAt(e){return Vd.lookAt(e),Vd.updateMatrix(),this.applyMatrix4(Vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(To).negate(),this.translate(To.x,To.y,To.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new or(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&_t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new al);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];pi.setFromBufferAttribute(a),this.morphTargetsRelative?(Dn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(Dn),Dn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(Dn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ll);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){const r=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];Da.setFromBufferAttribute(u),this.morphTargetsRelative?(Dn.addVectors(pi.min,Da.min),pi.expandByPoint(Dn),Dn.addVectors(pi.max,Da.max),pi.expandByPoint(Dn)):(pi.expandByPoint(Da.min),pi.expandByPoint(Da.max))}pi.getCenter(r);let o=0;for(let a=0,c=e.count;a<c;a++)Dn.fromBufferAttribute(e,a),o=Math.max(o,r.distanceToSquared(Dn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],d=this.morphTargetsRelative;for(let h=0,m=u.count;h<m;h++)Dn.fromBufferAttribute(u,h),d&&(To.fromBufferAttribute(e,h),Dn.add(To)),o=Math.max(o,r.distanceToSquared(Dn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,a=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==r.count)&&(c=new oi(new Float32Array(4*r.count),4),this.setAttribute("tangent",c));const u=[],d=[];for(let T=0;T<r.count;T++)u[T]=new ce,d[T]=new ce;const h=new ce,m=new ce,v=new ce,g=new jt,y=new jt,M=new jt,A=new ce,S=new ce;function x(T,w,B){h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,w),v.fromBufferAttribute(r,B),g.fromBufferAttribute(a,T),y.fromBufferAttribute(a,w),M.fromBufferAttribute(a,B),m.sub(h),v.sub(h),y.sub(g),M.sub(g);const Y=1/(y.x*M.y-M.x*y.y);isFinite(Y)&&(A.copy(m).multiplyScalar(M.y).addScaledVector(v,-y.y).multiplyScalar(Y),S.copy(v).multiplyScalar(y.x).addScaledVector(m,-M.x).multiplyScalar(Y),u[T].add(A),u[w].add(A),u[B].add(A),d[T].add(S),d[w].add(S),d[B].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let T=0,w=D.length;T<w;++T){const B=D[T],Y=B.start,J=B.count;for(let se=Y,q=Y+J;se<q;se+=3)x(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const I=new ce,b=new ce,P=new ce,L=new ce;function F(T){P.fromBufferAttribute(o,T),L.copy(P);const w=u[T];I.copy(w),I.sub(P.multiplyScalar(P.dot(w))).normalize(),b.crossVectors(L,w);const Y=b.dot(d[T])<0?-1:1;c.setXYZW(T,I.x,I.y,I.z,Y)}for(let T=0,w=D.length;T<w;++T){const B=D[T],Y=B.start,J=B.count;for(let se=Y,q=Y+J;se<q;se+=3)F(e.getX(se+0)),F(e.getX(se+1)),F(e.getX(se+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new oi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,y=r.count;g<y;g++)r.setXYZ(g,0,0,0);const o=new ce,a=new ce,c=new ce,u=new ce,d=new ce,h=new ce,m=new ce,v=new ce;if(e)for(let g=0,y=e.count;g<y;g+=3){const M=e.getX(g+0),A=e.getX(g+1),S=e.getX(g+2);o.fromBufferAttribute(t,M),a.fromBufferAttribute(t,A),c.fromBufferAttribute(t,S),m.subVectors(c,a),v.subVectors(o,a),m.cross(v),u.fromBufferAttribute(r,M),d.fromBufferAttribute(r,A),h.fromBufferAttribute(r,S),u.add(m),d.add(m),h.add(m),r.setXYZ(M,u.x,u.y,u.z),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let g=0,y=t.count;g<y;g+=3)o.fromBufferAttribute(t,g+0),a.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),m.subVectors(c,a),v.subVectors(o,a),m.cross(v),r.setXYZ(g+0,m.x,m.y,m.z),r.setXYZ(g+1,m.x,m.y,m.z),r.setXYZ(g+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Dn.fromBufferAttribute(e,t),Dn.normalize(),e.setXYZ(t,Dn.x,Dn.y,Dn.z)}toNonIndexed(){function e(u,d){const h=u.array,m=u.itemSize,v=u.normalized,g=new h.constructor(d.length*m);let y=0,M=0;for(let A=0,S=d.length;A<S;A++){u.isInterleavedBufferAttribute?y=d[A]*u.data.stride+u.offset:y=d[A]*m;for(let x=0;x<m;x++)g[M++]=h[y++]}return new oi(g,m,v)}if(this.index===null)return _t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new li,r=this.index.array,o=this.attributes;for(const u in o){const d=o[u],h=e(d,r);t.setAttribute(u,h)}const a=this.morphAttributes;for(const u in a){const d=[],h=a[u];for(let m=0,v=h.length;m<v;m++){const g=h[m],y=e(g,r);d.push(y)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let v=0,g=h.length;v<g;v++){const y=h[v];m.push(y.toJSON(e.data))}m.length>0&&(o[d]=m,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const m=o[h];this.setAttribute(h,m.clone(t))}const a=e.morphAttributes;for(const h in a){const m=[],v=a[h];for(let g=0,y=v.length;g<y;g++)m.push(v[g].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,m=c.length;h<m;h++){const v=c[h];this.addGroup(v.start,v.count,v.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hd=new ce,DA=new ce,LA=new Et;class ls{constructor(e=new ce(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Hd.subVectors(r,t).cross(DA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(Hd),a=this.normal.dot(o);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||LA.getNormalMatrix(e),o=this.coplanarPoint(Hd).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let NA=0;class Xo extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NA++}),this.uuid=ol(),this.name="",this.type="Material",this.blending=Xa,this.side=zs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nx,this.blendDst=Ix,this.blendEquation=Co,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Qa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tA,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Md,this.stencilZFail=Md,this.stencilZPass=Md,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){_t(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){_t(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(a){const c=[];for(const u in a){const d=a[u];delete d.metadata,c.push(d)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(r.textures=a),c.length>0&&(r.images=c)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Pt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new ls().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new jt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new jt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let a=0;a!==o;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ar=new ce,Gd=new ce,Mc=new ce,Ec=new ce;class Jp{constructor(e=new ce,t=new ce(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ar.copy(this.origin).addScaledVector(this.direction,t),Ar.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Gd.copy(e).add(t).multiplyScalar(.5),Mc.copy(t).sub(e).normalize(),Ec.copy(this.origin).sub(Gd);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Mc),u=Ec.dot(this.direction),d=-Ec.dot(Mc),h=Ec.lengthSq(),m=Math.abs(1-c*c);let v,g,y,M;if(m>0)if(v=c*d-u,g=c*u-d,M=a*m,v>=0)if(g>=-M)if(g<=M){const A=1/m;v*=A,g*=A,y=v*(v+c*g+2*u)+g*(c*v+g+2*d)+h}else g=a,v=Math.max(0,-(c*g+u)),y=-v*v+g*(g+2*d)+h;else g=-a,v=Math.max(0,-(c*g+u)),y=-v*v+g*(g+2*d)+h;else g<=-M?(v=Math.max(0,-(-c*a+u)),g=v>0?-a:Math.min(Math.max(-a,-d),a),y=-v*v+g*(g+2*d)+h):g<=M?(v=0,g=Math.min(Math.max(-a,-d),a),y=g*(g+2*d)+h):(v=Math.max(0,-(c*a+u)),g=v>0?a:Math.min(Math.max(-a,-d),a),y=-v*v+g*(g+2*d)+h);else g=c>0?-a:a,v=Math.max(0,-(c*g+u)),y=-v*v+g*(g+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Gd).addScaledVector(Mc,g),y}intersectSphere(e,t){if(e.radius<0)return null;Ar.subVectors(e.center,this.origin);const r=Ar.dot(this.direction),o=Ar.dot(Ar)-r*r,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),u=r-c,d=r+c;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,a,c,u,d;const h=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,o=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,o=(e.min.x-g.x)*h),m>=0?(a=(e.min.y-g.y)*m,c=(e.max.y-g.y)*m):(a=(e.max.y-g.y)*m,c=(e.min.y-g.y)*m),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),v>=0?(u=(e.min.z-g.z)*v,d=(e.max.z-g.z)*v):(u=(e.max.z-g.z)*v,d=(e.min.z-g.z)*v),r>d||u>o)||((u>r||r!==r)&&(r=u),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Ar)!==null}intersectTriangle(e,t,r,o,a){const c=this.origin,u=this.direction,d=u.x,h=u.y,m=u.z,v=e.x-c.x,g=e.y-c.y,y=e.z-c.z,M=t.x-c.x,A=t.y-c.y,S=t.z-c.z,x=r.x-c.x,D=r.y-c.y,I=r.z-c.z,b=Math.abs(d),P=Math.abs(h),L=Math.abs(m);let F,T,w,B,Y,J,se,q,ee,me,$,H;if(b>=P&&b>=L?(w=d,J=v,ee=M,H=x,d>=0?(F=h,T=m,B=g,Y=y,se=A,q=S,me=D,$=I):(F=m,T=h,B=y,Y=g,se=S,q=A,me=I,$=D)):P>=L?(w=h,J=g,ee=A,H=D,h>=0?(F=m,T=d,B=y,Y=v,se=S,q=M,me=I,$=x):(F=d,T=m,B=v,Y=y,se=M,q=S,me=x,$=I)):(w=m,J=y,ee=S,H=I,m>=0?(F=d,T=h,B=v,Y=g,se=M,q=A,me=x,$=D):(F=h,T=d,B=g,Y=v,se=A,q=M,me=D,$=x)),w===0)return null;const Z=F/w,X=T/w,N=1/w,re=B-Z*J,we=Y-X*J,qe=se-Z*ee,We=q-X*ee,Ke=me-Z*H,oe=$-X*H,fe=Ke*We-oe*qe,Re=re*oe-we*Ke,ye=qe*we-We*re;if(o){if(fe<0||Re<0||ye<0)return null}else if((fe<0||Re<0||ye<0)&&(fe>0||Re>0||ye>0))return null;const Me=fe+Re+ye;if(Me===0)return null;const De=N*(fe*J+Re*ee+ye*H);return(Me>0?De<0:De>0)?null:this.at(De/Me,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class iy extends Xo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gs,this.combine=Ux,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const d1=new pn,Ds=new Jp,Tc=new ll,h1=new ce,wc=new ce,Ac=new ce,Rc=new ce,Wd=new ce,Cc=new ce,p1=new ce,bc=new ce;class Ur extends Qn{constructor(e=new li,t=new iy){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,a=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(a&&u){Cc.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const m=u[d],v=a[d];m!==0&&(Wd.fromBufferAttribute(v,e),c?Cc.addScaledVector(Wd,m):Cc.addScaledVector(Wd.sub(t),m))}t.add(Cc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Tc.copy(r.boundingSphere),Tc.applyMatrix4(a),Ds.copy(e.ray).recast(e.near),!(Tc.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(Tc,h1)===null||Ds.origin.distanceToSquared(h1)>(e.far-e.near)**2))&&(d1.copy(a).invert(),Ds.copy(e.ray).applyMatrix4(d1),!(r.boundingBox!==null&&Ds.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Ds)))}_computeIntersections(e,t,r){let o;const a=this.geometry,c=this.material,u=a.index,d=a.attributes.position,h=a.attributes.uv,m=a.attributes.uv1,v=a.attributes.normal,g=a.groups,y=a.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,A=g.length;M<A;M++){const S=g[M],x=c[S.materialIndex],D=Math.max(S.start,y.start),I=Math.min(u.count,Math.min(S.start+S.count,y.start+y.count));for(let b=D,P=I;b<P;b+=3){const L=u.getX(b),F=u.getX(b+1),T=u.getX(b+2);o=Pc(this,x,e,r,h,m,v,L,F,T),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),A=Math.min(u.count,y.start+y.count);for(let S=M,x=A;S<x;S+=3){const D=u.getX(S),I=u.getX(S+1),b=u.getX(S+2);o=Pc(this,c,e,r,h,m,v,D,I,b),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(c))for(let M=0,A=g.length;M<A;M++){const S=g[M],x=c[S.materialIndex],D=Math.max(S.start,y.start),I=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let b=D,P=I;b<P;b+=3){const L=b,F=b+1,T=b+2;o=Pc(this,x,e,r,h,m,v,L,F,T),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),A=Math.min(d.count,y.start+y.count);for(let S=M,x=A;S<x;S+=3){const D=S,I=S+1,b=S+2;o=Pc(this,c,e,r,h,m,v,D,I,b),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function IA(n,e,t,r,o,a,c,u){let d;if(e.side===ai?d=r.intersectTriangle(c,a,o,!0,u):d=r.intersectTriangle(o,a,c,e.side===zs,u),d===null)return null;bc.copy(u),bc.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(bc);return h<t.near||h>t.far?null:{distance:h,point:bc.clone(),object:n}}function Pc(n,e,t,r,o,a,c,u,d,h){n.getVertexPosition(u,wc),n.getVertexPosition(d,Ac),n.getVertexPosition(h,Rc);const m=IA(n,e,t,r,wc,Ac,Rc,p1);if(m){const v=new ce;Wi.getBarycoord(p1,wc,Ac,Rc,v),o&&(m.uv=Wi.getInterpolatedAttribute(o,u,d,h,v,new jt)),a&&(m.uv1=Wi.getInterpolatedAttribute(a,u,d,h,v,new jt)),c&&(m.normal=Wi.getInterpolatedAttribute(c,u,d,h,v,new ce),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const g={a:u,b:d,c:h,normal:new ce,materialIndex:0};Wi.getNormal(wc,Ac,Rc,g.normal),m.face=g,m.barycoord=v}return m}class UA extends qn{constructor(e=null,t=1,r=1,o,a,c,u,d,h=Fn,m=Fn,v,g){super(null,c,u,d,h,m,o,a,v,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ls=new ll,FA=new jt(.5,.5),Dc=new ce;class ry{constructor(e=new ls,t=new ls,r=new ls,o=new ls,a=new ls,c=new ls){this.planes=[e,t,r,o,a,c]}set(e,t,r,o,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(r),u[3].copy(o),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=nr,r=!1){const o=this.planes,a=e.elements,c=a[0],u=a[1],d=a[2],h=a[3],m=a[4],v=a[5],g=a[6],y=a[7],M=a[8],A=a[9],S=a[10],x=a[11],D=a[12],I=a[13],b=a[14],P=a[15];if(o[0].setComponents(h-c,y-m,x-M,P-D).normalize(),o[1].setComponents(h+c,y+m,x+M,P+D).normalize(),o[2].setComponents(h+u,y+v,x+A,P+I).normalize(),o[3].setComponents(h-u,y-v,x-A,P-I).normalize(),r)o[4].setComponents(d,g,S,b).normalize(),o[5].setComponents(h-d,y-g,x-S,P-b).normalize();else if(o[4].setComponents(h-d,y-g,x-S,P-b).normalize(),t===nr)o[5].setComponents(h+d,y+g,x+S,P+b).normalize();else if(t===cu)o[5].setComponents(d,g,S,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(e){Ls.center.set(0,0,0);const t=FA.distanceTo(e.center);return Ls.radius=.7071067811865476+t,Ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Dc.x=o.normal.x>0?e.max.x:e.min.x,Dc.y=o.normal.y>0?e.max.y:e.min.y,Dc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sy extends Xo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fu=new ce,du=new ce,m1=new pn,La=new Jp,Lc=new ll,Xd=new ce,g1=new ce;class OA extends Qn{constructor(e=new li,t=new sy){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,a=t.count;o<a;o++)fu.fromBufferAttribute(t,o-1),du.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=fu.distanceTo(du);e.setAttribute("lineDistance",new or(r,1))}else _t("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.matrixWorld,a=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Lc.copy(r.boundingSphere),Lc.applyMatrix4(o),Lc.radius+=a,e.ray.intersectsSphere(Lc)===!1)return;m1.copy(o).invert(),La.copy(e.ray).applyMatrix4(m1);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,h=this.isLineSegments?2:1,m=r.index,g=r.attributes.position;if(m!==null){const y=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let A=y,S=M-1;A<S;A+=h){const x=m.getX(A),D=m.getX(A+1),I=Nc(this,e,La,d,x,D,A);I&&t.push(I)}if(this.isLineLoop){const A=m.getX(M-1),S=m.getX(y),x=Nc(this,e,La,d,A,S,M-1);x&&t.push(x)}}else{const y=Math.max(0,c.start),M=Math.min(g.count,c.start+c.count);for(let A=y,S=M-1;A<S;A+=h){const x=Nc(this,e,La,d,A,A+1,A);x&&t.push(x)}if(this.isLineLoop){const A=Nc(this,e,La,d,M-1,y,M-1);A&&t.push(A)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function Nc(n,e,t,r,o,a,c){const u=n.geometry.attributes.position;if(fu.fromBufferAttribute(u,o),du.fromBufferAttribute(u,a),t.distanceSqToSegment(fu,du,Xd,g1)>r)return;Xd.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(Xd);if(!(h<e.near||h>e.far))return{distance:h,point:g1.clone().applyMatrix4(n.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:n}}class BA extends OA{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class np extends Xo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const v1=new pn,ip=new Jp,Ic=new ll,Uc=new ce;class _1 extends Qn{constructor(e=new li,t=new np){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.matrixWorld,a=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ic.copy(r.boundingSphere),Ic.applyMatrix4(o),Ic.radius+=a,e.ray.intersectsSphere(Ic)===!1)return;v1.copy(o).invert(),ip.copy(e.ray).applyMatrix4(v1);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,h=r.index,v=r.attributes.position;if(h!==null){const g=Math.max(0,c.start),y=Math.min(h.count,c.start+c.count);for(let M=g,A=y;M<A;M++){const S=h.getX(M);Uc.fromBufferAttribute(v,S),x1(Uc,S,d,o,e,t,this)}}else{const g=Math.max(0,c.start),y=Math.min(v.count,c.start+c.count);for(let M=g,A=y;M<A;M++)Uc.fromBufferAttribute(v,M),x1(Uc,M,d,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function x1(n,e,t,r,o,a,c){const u=ip.distanceSqToPoint(n);if(u<t){const d=new ce;ip.closestPointToPoint(n,d),d.applyMatrix4(r);const h=o.ray.origin.distanceTo(d);if(h<o.near||h>o.far)return;a.push({distance:h,distanceToRay:Math.sqrt(u),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class oy extends qn{constructor(e=[],t=Vs,r,o,a,c,u,d,h,m){super(e,t,r,o,a,c,u,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kA extends qn{constructor(e,t,r,o,a,c,u,d,h){super(e,t,r,o,a,c,u,d,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tl extends qn{constructor(e,t,r=ar,o,a,c,u=Fn,d=Fn,h,m=Ir,v=1){if(m!==Ir&&m!==Bs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:v};super(g,o,a,c,u,d,m,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class zA extends tl{constructor(e,t=ar,r=Vs,o,a,c=Fn,u=Fn,d,h=Ir){const m={width:e,height:e,depth:1},v=[m,m,m,m,m,m];super(e,e,t,r,o,a,c,u,d,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ay extends qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class cl extends li{constructor(e=1,t=1,r=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:a,depthSegments:c};const u=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const d=[],h=[],m=[],v=[];let g=0,y=0;M("z","y","x",-1,-1,r,t,e,c,a,0),M("z","y","x",1,-1,r,t,-e,c,a,1),M("x","z","y",1,1,e,r,t,o,c,2),M("x","z","y",1,-1,e,r,-t,o,c,3),M("x","y","z",1,-1,e,t,r,o,a,4),M("x","y","z",-1,-1,e,t,-r,o,a,5),this.setIndex(d),this.setAttribute("position",new or(h,3)),this.setAttribute("normal",new or(m,3)),this.setAttribute("uv",new or(v,2));function M(A,S,x,D,I,b,P,L,F,T,w){const B=b/F,Y=P/T,J=b/2,se=P/2,q=L/2,ee=F+1,me=T+1;let $=0,H=0;const Z=new ce;for(let X=0;X<me;X++){const N=X*Y-se;for(let re=0;re<ee;re++){const we=re*B-J;Z[A]=we*D,Z[S]=N*I,Z[x]=q,h.push(Z.x,Z.y,Z.z),Z[A]=0,Z[S]=0,Z[x]=L>0?1:-1,m.push(Z.x,Z.y,Z.z),v.push(re/F),v.push(1-X/T),$+=1}}for(let X=0;X<T;X++)for(let N=0;N<F;N++){const re=g+N+ee*X,we=g+N+ee*(X+1),qe=g+(N+1)+ee*(X+1),We=g+(N+1)+ee*X;d.push(re,we,We),d.push(we,qe,We),H+=6}u.addGroup(y,H,w),y+=H,g+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Mu extends li{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const a=e/2,c=t/2,u=Math.floor(r),d=Math.floor(o),h=u+1,m=d+1,v=e/u,g=t/d,y=[],M=[],A=[],S=[];for(let x=0;x<m;x++){const D=x*g-c;for(let I=0;I<h;I++){const b=I*v-a;M.push(b,-D,0),A.push(0,0,1),S.push(I/u),S.push(1-x/d)}}for(let x=0;x<d;x++)for(let D=0;D<u;D++){const I=D+h*x,b=D+h*(x+1),P=D+1+h*(x+1),L=D+1+h*x;y.push(I,b,L),y.push(b,P,L)}this.setIndex(y),this.setAttribute("position",new or(M,3)),this.setAttribute("normal",new or(A,3)),this.setAttribute("uv",new or(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mu(e.width,e.height,e.widthSegments,e.heightSegments)}}function Vo(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];if(y1(o))o.isRenderTargetTexture?(_t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(y1(o[0])){const a=[];for(let c=0,u=o.length;c<u;c++)a[c]=o[c].clone();e[t][r]=a}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Zn(n){const e={};for(let t=0;t<n.length;t++){const r=Vo(n[t]);for(const o in r)e[o]=r[o]}return e}function y1(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function VA(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ly(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ot.workingColorSpace}const HA={clone:Vo,merge:Zn};var GA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cr extends Xo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GA,this.fragmentShader=WA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vo(e.uniforms),this.uniformsGroups=VA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new Pt().setHex(o.value);break;case"v2":this.uniforms[r].value=new jt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ce().fromArray(o.value);break;case"v4":this.uniforms[r].value=new hn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new Et().fromArray(o.value);break;case"m4":this.uniforms[r].value=new pn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class XA extends cr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jA extends Xo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class YA extends Xo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fc=new ce,Oc=new Wo,Qi=new ce;class cy extends Qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn,this.coordinateSystem=nr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fc,Oc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fc,Oc,Qi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Fc,Oc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fc,Oc,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const os=new ce,S1=new jt,M1=new jt;class Ci extends cy{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=tp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ed*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tp*2*Math.atan(Math.tan(Ed*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,t){return this.getViewBounds(e,S1,M1),t.subVectors(M1,S1)}setViewOffset(e,t,r,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ed*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;a+=c.offsetX*o/d,t-=c.offsetY*r/h,o*=c.width/d,r*=c.height/h}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class uy extends cy{constructor(e=-1,t=1,r=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=r-e,c=r+e,u=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,c=a+h*this.view.width,u-=m*this.view.offsetY,d=u-m*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const wo=-90,Ao=1;class qA extends Qn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ci(wo,Ao,e,t);o.layers=this.layers,this.add(o);const a=new Ci(wo,Ao,e,t);a.layers=this.layers,this.add(a);const c=new Ci(wo,Ao,e,t);c.layers=this.layers,this.add(c);const u=new Ci(wo,Ao,e,t);u.layers=this.layers,this.add(u);const d=new Ci(wo,Ao,e,t);d.layers=this.layers,this.add(d);const h=new Ci(wo,Ao,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,a,c,u,d]=t;for(const h of t)this.remove(h);if(e===nr)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===cu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,d,h,m]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(r,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(v,g,y),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class KA extends Ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class $A{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,_t("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const rm=class rm{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const a=this.elements;return a[0]=e,a[2]=t,a[1]=r,a[3]=o,this}};rm.prototype.isMatrix2=!0;let E1=rm;function T1(n,e,t,r){const o=ZA(r);switch(t){case qx:return n*e;case $x:return n*e/o.components*o.byteLength;case jp:return n*e/o.components*o.byteLength;case Hs:return n*e*2/o.components*o.byteLength;case Yp:return n*e*2/o.components*o.byteLength;case Kx:return n*e*3/o.components*o.byteLength;case Xi:return n*e*4/o.components*o.byteLength;case qp:return n*e*4/o.components*o.byteLength;case Xc:case jc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Yc:case qc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ah:case Ch:return Math.max(n,16)*Math.max(e,8)/4;case wh:case Rh:return Math.max(n,8)*Math.max(e,8)/2;case bh:case Ph:case Lh:case Nh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Dh:case su:case Ih:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case kh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case zh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Gh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case jh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Yh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case qh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Kh:case $h:case Zh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Qh:case Jh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ou:case ep:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ZA(n){switch(n){case bi:case Wx:return{byteLength:1,components:1};case Ja:case Xx:case lr:return{byteLength:2,components:1};case Wp:case Xp:return{byteLength:2,components:4};case ar:case Gp:case tr:return{byteLength:4,components:1};case jx:case Yx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hp}}));typeof window<"u"&&(window.__THREE__?_t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fy(){let n=null,e=!1,t=null,r=null;function o(a,c){r=n.requestAnimationFrame(o),t(a,c)}return{start:function(){e!==!0&&t!==null&&n!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function QA(n){const e=new WeakMap;function t(u,d){const h=u.array,m=u.usage,v=h.byteLength,g=n.createBuffer();n.bindBuffer(d,g),n.bufferData(d,h,m),u.onUploadCallback();let y;if(h instanceof Float32Array)y=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=n.HALF_FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?y=n.HALF_FLOAT:y=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=n.SHORT;else if(h instanceof Uint32Array)y=n.UNSIGNED_INT;else if(h instanceof Int32Array)y=n.INT;else if(h instanceof Int8Array)y=n.BYTE;else if(h instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:v}}function r(u,d,h){const m=d.array,v=d.updateRanges;if(n.bindBuffer(h,u),v.length===0)n.bufferSubData(h,0,m);else{v.sort((y,M)=>y.start-M.start);let g=0;for(let y=1;y<v.length;y++){const M=v[g],A=v[y];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++g,v[g]=A)}v.length=g+1;for(let y=0,M=v.length;y<M;y++){const A=v[y];n.bufferSubData(h,A.start*m.BYTES_PER_ELEMENT,m,A.start,A.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);d&&(n.deleteBuffer(d.buffer),e.delete(u))}function c(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const m=e.get(u);(!m||m.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,t(u,d));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,u,d),h.version=u.version}}return{get:o,remove:a,update:c}}var JA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eR=`#ifdef USE_ALPHAHASH
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
#endif`,tR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sR=`#ifdef USE_AOMAP
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
#endif`,oR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aR=`#ifdef USE_BATCHING
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
#endif`,lR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dR=`#ifdef USE_IRIDESCENCE
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
#endif`,hR=`#ifdef USE_BUMPMAP
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
#endif`,pR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_R=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,SR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,MR=`#define PI 3.141592653589793
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
} // validated`,ER=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,TR=`vec3 transformedNormal = objectNormal;
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
#endif`,wR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bR="gl_FragColor = linearToOutputTexel( gl_FragColor );",PR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,DR=`#ifdef USE_ENVMAP
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
#endif`,LR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,NR=`#ifdef USE_ENVMAP
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
#endif`,IR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UR=`#ifdef USE_ENVMAP
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
#endif`,FR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zR=`#ifdef USE_GRADIENTMAP
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
}`,VR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WR=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,XR=`#ifdef USE_ENVMAP
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
#endif`,jR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$R=`PhysicalMaterial material;
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
#endif`,ZR=`uniform sampler2D dfgLUT;
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
}`,QR=`
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
#endif`,JR=`#if defined( RE_IndirectDiffuse )
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
#endif`,eC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tC=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,nC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cC=`#if defined( USE_POINTS_UV )
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
#endif`,uC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mC=`#ifdef USE_MORPHTARGETS
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
#endif`,gC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_C=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,MC=`#ifdef USE_NORMALMAP
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
#endif`,EC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,UC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,BC=`float getShadowMask() {
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
}`,kC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zC=`#ifdef USE_SKINNING
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
#endif`,VC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HC=`#ifdef USE_SKINNING
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
#endif`,GC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,YC=`#ifdef USE_TRANSMISSION
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
#endif`,qC=`#ifdef USE_TRANSMISSION
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
#endif`,KC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$C=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const JC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eb=`uniform sampler2D t2D;
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
}`,tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sb=`#include <common>
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
}`,ob=`#if DEPTH_PACKING == 3200
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
}`,ab=`#define DISTANCE
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
}`,lb=`#define DISTANCE
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
}`,cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ub=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fb=`uniform float scale;
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
}`,db=`uniform vec3 diffuse;
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
}`,hb=`#include <common>
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
}`,pb=`uniform vec3 diffuse;
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
}`,mb=`#define LAMBERT
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
}`,gb=`#define LAMBERT
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
}`,vb=`#define MATCAP
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
}`,_b=`#define MATCAP
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
}`,xb=`#define NORMAL
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
}`,yb=`#define NORMAL
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
}`,Sb=`#define PHONG
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
}`,Mb=`#define PHONG
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
}`,Eb=`#define STANDARD
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
}`,Tb=`#define STANDARD
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
}`,wb=`#define TOON
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
}`,Ab=`#define TOON
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
}`,Rb=`uniform float size;
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
}`,Cb=`uniform vec3 diffuse;
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
}`,bb=`#include <common>
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
}`,Pb=`uniform vec3 color;
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
}`,Db=`uniform float rotation;
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
}`,Lb=`uniform vec3 diffuse;
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
}`,Rt={alphahash_fragment:JA,alphahash_pars_fragment:eR,alphamap_fragment:tR,alphamap_pars_fragment:nR,alphatest_fragment:iR,alphatest_pars_fragment:rR,aomap_fragment:sR,aomap_pars_fragment:oR,batching_pars_vertex:aR,batching_vertex:lR,begin_vertex:cR,beginnormal_vertex:uR,bsdfs:fR,iridescence_fragment:dR,bumpmap_pars_fragment:hR,clipping_planes_fragment:pR,clipping_planes_pars_fragment:mR,clipping_planes_pars_vertex:gR,clipping_planes_vertex:vR,color_fragment:_R,color_pars_fragment:xR,color_pars_vertex:yR,color_vertex:SR,common:MR,cube_uv_reflection_fragment:ER,defaultnormal_vertex:TR,displacementmap_pars_vertex:wR,displacementmap_vertex:AR,emissivemap_fragment:RR,emissivemap_pars_fragment:CR,colorspace_fragment:bR,colorspace_pars_fragment:PR,envmap_fragment:DR,envmap_common_pars_fragment:LR,envmap_pars_fragment:NR,envmap_pars_vertex:IR,envmap_physical_pars_fragment:XR,envmap_vertex:UR,fog_vertex:FR,fog_pars_vertex:OR,fog_fragment:BR,fog_pars_fragment:kR,gradientmap_pars_fragment:zR,lightmap_pars_fragment:VR,lights_lambert_fragment:HR,lights_lambert_pars_fragment:GR,lights_pars_begin:WR,lights_toon_fragment:jR,lights_toon_pars_fragment:YR,lights_phong_fragment:qR,lights_phong_pars_fragment:KR,lights_physical_fragment:$R,lights_physical_pars_fragment:ZR,lights_fragment_begin:QR,lights_fragment_maps:JR,lights_fragment_end:eC,lightprobes_pars_fragment:tC,logdepthbuf_fragment:nC,logdepthbuf_pars_fragment:iC,logdepthbuf_pars_vertex:rC,logdepthbuf_vertex:sC,map_fragment:oC,map_pars_fragment:aC,map_particle_fragment:lC,map_particle_pars_fragment:cC,metalnessmap_fragment:uC,metalnessmap_pars_fragment:fC,morphinstance_vertex:dC,morphcolor_vertex:hC,morphnormal_vertex:pC,morphtarget_pars_vertex:mC,morphtarget_vertex:gC,normal_fragment_begin:vC,normal_fragment_maps:_C,normal_pars_fragment:xC,normal_pars_vertex:yC,normal_vertex:SC,normalmap_pars_fragment:MC,clearcoat_normal_fragment_begin:EC,clearcoat_normal_fragment_maps:TC,clearcoat_pars_fragment:wC,iridescence_pars_fragment:AC,opaque_fragment:RC,packing:CC,premultiplied_alpha_fragment:bC,project_vertex:PC,dithering_fragment:DC,dithering_pars_fragment:LC,roughnessmap_fragment:NC,roughnessmap_pars_fragment:IC,shadowmap_pars_fragment:UC,shadowmap_pars_vertex:FC,shadowmap_vertex:OC,shadowmask_pars_fragment:BC,skinbase_vertex:kC,skinning_pars_vertex:zC,skinning_vertex:VC,skinnormal_vertex:HC,specularmap_fragment:GC,specularmap_pars_fragment:WC,tonemapping_fragment:XC,tonemapping_pars_fragment:jC,transmission_fragment:YC,transmission_pars_fragment:qC,uv_pars_fragment:KC,uv_pars_vertex:$C,uv_vertex:ZC,worldpos_vertex:QC,background_vert:JC,background_frag:eb,backgroundCube_vert:tb,backgroundCube_frag:nb,cube_vert:ib,cube_frag:rb,depth_vert:sb,depth_frag:ob,distance_vert:ab,distance_frag:lb,equirect_vert:cb,equirect_frag:ub,linedashed_vert:fb,linedashed_frag:db,meshbasic_vert:hb,meshbasic_frag:pb,meshlambert_vert:mb,meshlambert_frag:gb,meshmatcap_vert:vb,meshmatcap_frag:_b,meshnormal_vert:xb,meshnormal_frag:yb,meshphong_vert:Sb,meshphong_frag:Mb,meshphysical_vert:Eb,meshphysical_frag:Tb,meshtoon_vert:wb,meshtoon_frag:Ab,points_vert:Rb,points_frag:Cb,shadow_vert:bb,shadow_frag:Pb,sprite_vert:Db,sprite_frag:Lb},Ge={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Et}},envmap:{envMap:{value:null},envMapRotation:{value:new Et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Et},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ce},probesMax:{value:new ce},probesResolution:{value:new ce}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}}},er={basic:{uniforms:Zn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:Rt.meshbasic_vert,fragmentShader:Rt.meshbasic_frag},lambert:{uniforms:Zn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Pt(0)},envMapIntensity:{value:1}}]),vertexShader:Rt.meshlambert_vert,fragmentShader:Rt.meshlambert_frag},phong:{uniforms:Zn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphong_vert,fragmentShader:Rt.meshphong_frag},standard:{uniforms:Zn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag},toon:{uniforms:Zn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Rt.meshtoon_vert,fragmentShader:Rt.meshtoon_frag},matcap:{uniforms:Zn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:Rt.meshmatcap_vert,fragmentShader:Rt.meshmatcap_frag},points:{uniforms:Zn([Ge.points,Ge.fog]),vertexShader:Rt.points_vert,fragmentShader:Rt.points_frag},dashed:{uniforms:Zn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Rt.linedashed_vert,fragmentShader:Rt.linedashed_frag},depth:{uniforms:Zn([Ge.common,Ge.displacementmap]),vertexShader:Rt.depth_vert,fragmentShader:Rt.depth_frag},normal:{uniforms:Zn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:Rt.meshnormal_vert,fragmentShader:Rt.meshnormal_frag},sprite:{uniforms:Zn([Ge.sprite,Ge.fog]),vertexShader:Rt.sprite_vert,fragmentShader:Rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Rt.background_vert,fragmentShader:Rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Et}},vertexShader:Rt.backgroundCube_vert,fragmentShader:Rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Rt.cube_vert,fragmentShader:Rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Rt.equirect_vert,fragmentShader:Rt.equirect_frag},distance:{uniforms:Zn([Ge.common,Ge.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Rt.distance_vert,fragmentShader:Rt.distance_frag},shadow:{uniforms:Zn([Ge.lights,Ge.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:Rt.shadow_vert,fragmentShader:Rt.shadow_frag}};er.physical={uniforms:Zn([er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Et},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Et},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Et},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Et},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Et},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Et}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag};const Bc={r:0,b:0,g:0},Nb=new pn,dy=new Et;dy.set(-1,0,0,0,1,0,0,0,1);function Ib(n,e,t,r,o,a){const c=new Pt(0);let u=o===!0?0:1,d,h,m=null,v=0,g=null;function y(D){let I=D.isScene===!0?D.background:null;if(I&&I.isTexture){const b=D.backgroundBlurriness>0;I=e.get(I,b)}return I}function M(D){let I=!1;const b=y(D);b===null?S(c,u):b&&b.isColor&&(S(b,1),I=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function A(D,I){const b=y(I);b&&(b.isCubeTexture||b.mapping===Su)?(h===void 0&&(h=new Ur(new cl(1,1,1),new cr({name:"BackgroundCubeMaterial",uniforms:Vo(er.backgroundCube.uniforms),vertexShader:er.backgroundCube.vertexShader,fragmentShader:er.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,L,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Nb.makeRotationFromEuler(I.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(dy),h.material.toneMapped=Ot.getTransfer(b.colorSpace)!==Kt,(m!==b||v!==b.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,m=b,v=b.version,g=n.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(d===void 0&&(d=new Ur(new Mu(2,2),new cr({name:"BackgroundMaterial",uniforms:Vo(er.background.uniforms),vertexShader:er.background.vertexShader,fragmentShader:er.background.fragmentShader,side:zs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=b,d.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,d.material.toneMapped=Ot.getTransfer(b.colorSpace)!==Kt,b.matrixAutoUpdate===!0&&b.updateMatrix(),d.material.uniforms.uvTransform.value.copy(b.matrix),(m!==b||v!==b.version||g!==n.toneMapping)&&(d.material.needsUpdate=!0,m=b,v=b.version,g=n.toneMapping),d.layers.enableAll(),D.unshift(d,d.geometry,d.material,0,0,null))}function S(D,I){D.getRGB(Bc,ly(n)),t.buffers.color.setClear(Bc.r,Bc.g,Bc.b,I,a)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(D,I=1){c.set(D),u=I,S(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(D){u=D,S(c,u)},render:M,addToRenderList:A,dispose:x}}function Ub(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=g(null);let a=o,c=!1;function u(Y,J,se,q,ee){let me=!1;const $=v(Y,q,se,J);a!==$&&(a=$,h(a.object)),me=y(Y,q,se,ee),me&&M(Y,q,se,ee),ee!==null&&e.update(ee,n.ELEMENT_ARRAY_BUFFER),(me||c)&&(c=!1,b(Y,J,se,q),ee!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function d(){return n.createVertexArray()}function h(Y){return n.bindVertexArray(Y)}function m(Y){return n.deleteVertexArray(Y)}function v(Y,J,se,q){const ee=q.wireframe===!0;let me=r[J.id];me===void 0&&(me={},r[J.id]=me);const $=Y.isInstancedMesh===!0?Y.id:0;let H=me[$];H===void 0&&(H={},me[$]=H);let Z=H[se.id];Z===void 0&&(Z={},H[se.id]=Z);let X=Z[ee];return X===void 0&&(X=g(d()),Z[ee]=X),X}function g(Y){const J=[],se=[],q=[];for(let ee=0;ee<t;ee++)J[ee]=0,se[ee]=0,q[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:se,attributeDivisors:q,object:Y,attributes:{},index:null}}function y(Y,J,se,q){const ee=a.attributes,me=J.attributes;let $=0;const H=se.getAttributes();for(const Z in H)if(H[Z].location>=0){const N=ee[Z];let re=me[Z];if(re===void 0&&(Z==="instanceMatrix"&&Y.instanceMatrix&&(re=Y.instanceMatrix),Z==="instanceColor"&&Y.instanceColor&&(re=Y.instanceColor)),N===void 0||N.attribute!==re||re&&N.data!==re.data)return!0;$++}return a.attributesNum!==$||a.index!==q}function M(Y,J,se,q){const ee={},me=J.attributes;let $=0;const H=se.getAttributes();for(const Z in H)if(H[Z].location>=0){let N=me[Z];N===void 0&&(Z==="instanceMatrix"&&Y.instanceMatrix&&(N=Y.instanceMatrix),Z==="instanceColor"&&Y.instanceColor&&(N=Y.instanceColor));const re={};re.attribute=N,N&&N.data&&(re.data=N.data),ee[Z]=re,$++}a.attributes=ee,a.attributesNum=$,a.index=q}function A(){const Y=a.newAttributes;for(let J=0,se=Y.length;J<se;J++)Y[J]=0}function S(Y){x(Y,0)}function x(Y,J){const se=a.newAttributes,q=a.enabledAttributes,ee=a.attributeDivisors;se[Y]=1,q[Y]===0&&(n.enableVertexAttribArray(Y),q[Y]=1),ee[Y]!==J&&(n.vertexAttribDivisor(Y,J),ee[Y]=J)}function D(){const Y=a.newAttributes,J=a.enabledAttributes;for(let se=0,q=J.length;se<q;se++)J[se]!==Y[se]&&(n.disableVertexAttribArray(se),J[se]=0)}function I(Y,J,se,q,ee,me,$){$===!0?n.vertexAttribIPointer(Y,J,se,ee,me):n.vertexAttribPointer(Y,J,se,q,ee,me)}function b(Y,J,se,q){A();const ee=q.attributes,me=se.getAttributes(),$=J.defaultAttributeValues;for(const H in me){const Z=me[H];if(Z.location>=0){let X=ee[H];if(X===void 0&&(H==="instanceMatrix"&&Y.instanceMatrix&&(X=Y.instanceMatrix),H==="instanceColor"&&Y.instanceColor&&(X=Y.instanceColor)),X!==void 0){const N=X.normalized,re=X.itemSize,we=e.get(X);if(we===void 0)continue;const qe=we.buffer,We=we.type,Ke=we.bytesPerElement,oe=We===n.INT||We===n.UNSIGNED_INT||X.gpuType===Gp;if(X.isInterleavedBufferAttribute){const fe=X.data,Re=fe.stride,ye=X.offset;if(fe.isInstancedInterleavedBuffer){for(let Me=0;Me<Z.locationSize;Me++)x(Z.location+Me,fe.meshPerAttribute);Y.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Me=0;Me<Z.locationSize;Me++)S(Z.location+Me);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let Me=0;Me<Z.locationSize;Me++)I(Z.location+Me,re/Z.locationSize,We,N,Re*Ke,(ye+re/Z.locationSize*Me)*Ke,oe)}else{if(X.isInstancedBufferAttribute){for(let fe=0;fe<Z.locationSize;fe++)x(Z.location+fe,X.meshPerAttribute);Y.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let fe=0;fe<Z.locationSize;fe++)S(Z.location+fe);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let fe=0;fe<Z.locationSize;fe++)I(Z.location+fe,re/Z.locationSize,We,N,re*Ke,re/Z.locationSize*fe*Ke,oe)}}else if($!==void 0){const N=$[H];if(N!==void 0)switch(N.length){case 2:n.vertexAttrib2fv(Z.location,N);break;case 3:n.vertexAttrib3fv(Z.location,N);break;case 4:n.vertexAttrib4fv(Z.location,N);break;default:n.vertexAttrib1fv(Z.location,N)}}}}D()}function P(){w();for(const Y in r){const J=r[Y];for(const se in J){const q=J[se];for(const ee in q){const me=q[ee];for(const $ in me)m(me[$].object),delete me[$];delete q[ee]}}delete r[Y]}}function L(Y){if(r[Y.id]===void 0)return;const J=r[Y.id];for(const se in J){const q=J[se];for(const ee in q){const me=q[ee];for(const $ in me)m(me[$].object),delete me[$];delete q[ee]}}delete r[Y.id]}function F(Y){for(const J in r){const se=r[J];for(const q in se){const ee=se[q];if(ee[Y.id]===void 0)continue;const me=ee[Y.id];for(const $ in me)m(me[$].object),delete me[$];delete ee[Y.id]}}}function T(Y){for(const J in r){const se=r[J],q=Y.isInstancedMesh===!0?Y.id:0,ee=se[q];if(ee!==void 0){for(const me in ee){const $=ee[me];for(const H in $)m($[H].object),delete $[H];delete ee[me]}delete se[q],Object.keys(se).length===0&&delete r[J]}}}function w(){B(),c=!0,a!==o&&(a=o,h(a.object))}function B(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:w,resetDefaultState:B,dispose:P,releaseStatesOfGeometry:L,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:S,disableUnusedAttributes:D}}function Fb(n,e,t){let r;function o(d){r=d}function a(d,h){n.drawArrays(r,d,h),t.update(h,r,1)}function c(d,h,m){m!==0&&(n.drawArraysInstanced(r,d,h,m),t.update(h,r,m))}function u(d,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,h,0,m);let g=0;for(let y=0;y<m;y++)g+=h[y];t.update(g,r,1)}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=u}function Ob(n,e,t,r){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(F){return!(F!==Xi&&r.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(F){const T=F===lr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==bi&&F!==tr&&!T&&r.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function d(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(_t("WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const v=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&_t("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),D=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),I=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=n.getParameter(n.MAX_SAMPLES),L=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:D,maxVaryings:I,maxFragmentUniforms:b,maxSamples:P,samples:L}}function Bb(n){const e=this;let t=null,r=0,o=!1,a=!1;const c=new ls,u=new Et,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const y=v.length!==0||g||r!==0||o;return o=g,r=v.length,y},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(v,g){t=m(v,g,0)},this.setState=function(v,g,y){const M=v.clippingPlanes,A=v.clipIntersection,S=v.clipShadows,x=n.get(v);if(!o||M===null||M.length===0||a&&!S)a?m(null):h();else{const D=a?0:r,I=D*4;let b=x.clippingState||null;d.value=b,b=m(M,g,I,y);for(let P=0;P!==I;++P)b[P]=t[P];x.clippingState=b,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=D}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(v,g,y,M){const A=v!==null?v.length:0;let S=null;if(A!==0){if(S=d.value,M!==!0||S===null){const x=y+A*4,D=g.matrixWorldInverse;u.getNormalMatrix(D),(S===null||S.length<x)&&(S=new Float32Array(x));for(let I=0,b=y;I!==A;++I,b+=4)c.copy(v[I]).applyMatrix4(D,u),c.normal.toArray(S,b),S[b+3]=c.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}const Io=4,kb=6,zb=20,Vb=256,Na=new uy,w1=new Pt;let jd=null,Yd=0,qd=0,Kd=!1;const Hb=new ce,Ns=new ce;class A1{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,a={}){const{size:c=256,position:u=Hb}=a;jd=this._renderer.getRenderTarget(),Yd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,u),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=b1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=C1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(jd,Yd,qd),this._renderer.xr.enabled=Kd,e.scissorTest=!1,Ro(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vs||e.mapping===zo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jd=this._renderer.getRenderTarget(),Yd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:lr,format:Xi,colorSpace:au,depthBuffer:!1},o=R1(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=R1(e,t,r);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Gb(a)),this._blurMaterial=Xb(a,e,t),this._ggxMaterial=Wb(a,e,t)}return o}_compileMaterial(e){const t=new Ur(new li,e);this._renderer.compile(t,Na)}_sceneToCubeUV(e,t,r,o,a){const d=new Ci(90,1,t,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,y=v.toneMapping;v.getClearColor(w1),v.toneMapping=sr,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ur(new cl,new iy({name:"PMREM.Background",side:ai,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,S=A.material;let x=!1;const D=e.background;D?D.isColor&&(S.color.copy(D),e.background=null,x=!0):(S.color.copy(w1),x=!0);for(let I=0;I<6;I++){const b=I%3;b===0?(d.up.set(0,h[I],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+m[I],a.y,a.z)):b===1?(d.up.set(0,0,h[I]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+m[I],a.z)):(d.up.set(0,h[I],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+m[I]));const P=this._cubeSize;Ro(o,b*P,I>2?P:0,P,P),v.setRenderTarget(o),x&&v.render(A,d),v.render(e,d)}v.toneMapping=y,v.autoClear=g,e.background=D}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Vs||e.mapping===zo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=b1()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=C1());const a=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;const u=a.uniforms;u.envMap.value=e;const d=this._cubeSize;Ro(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(c,Na)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let a=1;a<o;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[r];u.material=c;const d=c.uniforms,h=r/(this._lodMeshes.length-1),m=t/(this._lodMeshes.length-1),v=Math.sqrt(h*h-m*m),g=h*1.25,y=v*g,{_lodMax:M}=this,A=this._sizeLods[r],S=3*A*(r>M-Io?r-M+Io:0),x=4*(this._cubeSize-A);d.envMap.value=e.texture,d.roughness.value=y,d.mipInt.value=M-t,Ro(a,S,x,3*A,2*A),o.setRenderTarget(a),o.render(u,Na),d.envMap.value=a.texture,d.roughness.value=0,d.mipInt.value=M-r,Ro(e,S,x,3*A,2*A),o.setRenderTarget(e),o.render(u,Na)}_blur(e,t,r,o){const a=this._pingPongRenderTarget,c=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,r,c),this._blurPass(a,e,r,r,c)}_blurPass(e,t,r,o,a){const c=this._renderer,u=this._blurMaterial,d=this._lodMeshes[o];d.material=u;const h=u.uniforms;h.envMap.value=e.texture,h.sigma.value=a,h.mipInt.value=this._lodMax-r;const m=this._sizeLods[o],v=3*m*(o>this._lodMax-Io?o-this._lodMax+Io:0),g=4*(this._cubeSize-m);Ro(t,v,g,3*m,2*m),c.setRenderTarget(t),c.render(d,Na)}}function Gb(n){const e=[],t=[];let r=n;const o=n-Io+1+kb;for(let a=0;a<o;a++){const c=Math.pow(2,r);e.push(c);const u=1/(c-2),d=-u,h=1+u,m=[d,d,h,d,h,h,d,d,h,h,d,h],v=6,g=6,y=3,M=new Float32Array(y*g*v),A=new Float32Array(y*g*v);for(let x=0;x<v;x++){const D=x%3*2/3-1,I=x>2?0:-1,b=[D,I,0,D+2/3,I,0,D+2/3,I+1,0,D,I,0,D+2/3,I+1,0,D,I+1,0];M.set(b,y*g*x);for(let P=0;P<g;P++){const L=m[P*2]*2-1,F=m[P*2+1]*2-1;x===0?Ns.set(1,F,L):x===1?Ns.set(-L,1,-F):x===2?Ns.set(-L,F,1):x===3?Ns.set(-1,F,-L):x===4?Ns.set(-L,-1,F):Ns.set(L,F,-1),Ns.toArray(A,(x*g+P)*y)}}const S=new li;S.setAttribute("position",new oi(M,y)),S.setAttribute("outputDirection",new oi(A,y)),t.push(new Ur(S,null)),r>Io&&r--}return{lodMeshes:t,sizeLods:e}}function R1(n,e,t){const r=new ji(n,e,t);return r.texture.mapping=Su,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ro(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function Wb(n,e,t){return new cr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Vb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Eu(),fragmentShader:`

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
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function Xb(n,e,t){return new cr({name:"SphericalGaussianBlur",defines:{SAMPLES:zb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Eu(),fragmentShader:`

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
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function C1(){return new cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eu(),fragmentShader:`

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
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function b1(){return new cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function Eu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class hy extends ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new oy(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new cl(5,5,5),a=new cr({name:"CubemapFromEquirect",uniforms:Vo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ai,blending:Dr});a.uniforms.tEquirect.value=t;const c=new Ur(o,a),u=t.minFilter;return t.minFilter===Os&&(t.minFilter=Yn),new qA(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(a)}}function jb(n){let e=new WeakMap,t=new WeakMap,r=null;function o(g,y=!1){return g==null?null:y?c(g):a(g)}function a(g){if(g&&g.isTexture){const y=g.mapping;if(y===xd||y===yd)if(e.has(g)){const M=e.get(g).texture;return u(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const A=new hy(M.height);return A.fromEquirectangularTexture(n,g),e.set(g,A),g.addEventListener("dispose",h),u(A.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const y=g.mapping,M=y===xd||y===yd,A=y===Vs||y===zo;if(M||A){let S=t.get(g);const x=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return r===null&&(r=new A1(n)),S=M?r.fromEquirectangular(g,S):r.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),S.texture;if(S!==void 0)return S.texture;{const D=g.image;return M&&D&&D.height>0||A&&D&&d(D)?(r===null&&(r=new A1(n)),S=M?r.fromEquirectangular(g):r.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),g.addEventListener("dispose",m),S.texture):null}}}return g}function u(g,y){return y===xd?g.mapping=Vs:y===yd&&(g.mapping=zo),g}function d(g){let y=0;const M=6;for(let A=0;A<M;A++)g[A]!==void 0&&y++;return y===M}function h(g){const y=g.target;y.removeEventListener("dispose",h);const M=e.get(y);M!==void 0&&(e.delete(y),M.dispose())}function m(g){const y=g.target;y.removeEventListener("dispose",m);const M=t.get(y);M!==void 0&&(t.delete(y),M.dispose())}function v(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function Yb(n){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=n.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Uo("WebGLRenderer: "+r+" extension not supported."),o}}}function qb(n,e,t,r){const o={},a=new WeakMap;function c(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",c),delete o[g.id];const y=a.get(g);y&&(e.remove(y),a.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function u(v,g){return o[g.id]===!0||(g.addEventListener("dispose",c),o[g.id]=!0,t.memory.geometries++),g}function d(v){const g=v.attributes;for(const y in g)e.update(g[y],n.ARRAY_BUFFER)}function h(v){const g=[],y=v.index,M=v.attributes.position;let A=0;if(M===void 0)return;if(y!==null){const D=y.array;A=y.version;for(let I=0,b=D.length;I<b;I+=3){const P=D[I+0],L=D[I+1],F=D[I+2];g.push(P,L,L,F,F,P)}}else{const D=M.array;A=M.version;for(let I=0,b=D.length/3-1;I<b;I+=3){const P=I+0,L=I+1,F=I+2;g.push(P,L,L,F,F,P)}}const S=new(M.count>=65535?ny:ty)(g,1);S.version=A;const x=a.get(v);x&&e.remove(x),a.set(v,S)}function m(v){const g=a.get(v);if(g){const y=v.index;y!==null&&g.version<y.version&&h(v)}else h(v);return a.get(v)}return{get:u,update:d,getWireframeAttribute:m}}function Kb(n,e,t){let r;function o(v){r=v}let a,c;function u(v){a=v.type,c=v.bytesPerElement}function d(v,g){n.drawElements(r,g,a,v*c),t.update(g,r,1)}function h(v,g,y){y!==0&&(n.drawElementsInstanced(r,g,a,v*c,y),t.update(g,r,y))}function m(v,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,a,v,0,y);let A=0;for(let S=0;S<y;S++)A+=g[S];t.update(A,r,1)}this.setMode=o,this.setIndex=u,this.render=d,this.renderInstances=h,this.renderMultiDraw=m}function $b(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,c,u){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=u*(a/3);break;case n.LINES:t.lines+=u*(a/2);break;case n.LINE_STRIP:t.lines+=u*(a-1);break;case n.LINE_LOOP:t.lines+=u*a;break;case n.POINTS:t.points+=u*a;break;default:Wt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function Zb(n,e,t){const r=new WeakMap,o=new hn;function a(c,u,d){const h=c.morphTargetInfluences,m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=m!==void 0?m.length:0;let g=r.get(u);if(g===void 0||g.count!==v){let B=function(){T.dispose(),r.delete(u),u.removeEventListener("dispose",B)};var y=B;g!==void 0&&g.texture.dispose();const M=u.morphAttributes.position!==void 0,A=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,x=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],I=u.morphAttributes.color||[];let b=0;M===!0&&(b=1),A===!0&&(b=2),S===!0&&(b=3);let P=u.attributes.position.count*b,L=1;P>e.maxTextureSize&&(L=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const F=new Float32Array(P*L*4*v),T=new Qx(F,P,L,v);T.type=tr,T.needsUpdate=!0;const w=b*4;for(let Y=0;Y<v;Y++){const J=x[Y],se=D[Y],q=I[Y],ee=P*L*4*Y;for(let me=0;me<J.count;me++){const $=me*w;M===!0&&(o.fromBufferAttribute(J,me),F[ee+$+0]=o.x,F[ee+$+1]=o.y,F[ee+$+2]=o.z,F[ee+$+3]=0),A===!0&&(o.fromBufferAttribute(se,me),F[ee+$+4]=o.x,F[ee+$+5]=o.y,F[ee+$+6]=o.z,F[ee+$+7]=0),S===!0&&(o.fromBufferAttribute(q,me),F[ee+$+8]=o.x,F[ee+$+9]=o.y,F[ee+$+10]=o.z,F[ee+$+11]=q.itemSize===4?o.w:1)}}g={count:v,texture:T,size:new jt(P,L)},r.set(u,g),u.addEventListener("dispose",B)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const A=u.morphTargetsRelative?1:1-M;d.getUniforms().setValue(n,"morphTargetBaseInfluence",A),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}return{update:a}}function Qb(n,e,t,r,o){let a=new WeakMap;function c(h){const m=o.render.frame,v=h.geometry,g=e.get(h,v);if(a.get(g)!==m&&(e.update(g),a.set(g,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==m&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const y=h.skeleton;a.get(y)!==m&&(y.update(),a.set(y,m))}return g}function u(){a=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),r.releaseStatesOfObject(m),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:c,dispose:u}}const Jb={[Fx]:"LINEAR_TONE_MAPPING",[Ox]:"REINHARD_TONE_MAPPING",[Bx]:"CINEON_TONE_MAPPING",[kx]:"ACES_FILMIC_TONE_MAPPING",[Vx]:"AGX_TONE_MAPPING",[Hx]:"NEUTRAL_TONE_MAPPING",[zx]:"CUSTOM_TONE_MAPPING"};function eP(n,e,t,r,o,a){const c=new ji(e,t,{type:n,depthBuffer:o,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let u=null,d=null;const h=new li;h.setAttribute("position",new or([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new or([0,2,0,0,2,0],2));const m=new XA({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Ur(h,m),g=new uy(-1,1,1,-1,0,1);let y=null,M=null,A=!1,S,x=null,D=[],I=!1;this.setSize=function(b,P){c.setSize(b,P),u!==null&&u.setSize(b,P),d!==null&&d.setSize(b,P);for(let L=0;L<D.length;L++){const F=D[L];F.setSize&&F.setSize(b,P)}},this.setEffects=function(b){D=b,I=D.length>0&&D[0].isRenderPass===!0;const P=c.width,L=c.height;D.length>0&&u===null&&(u=new ji(P,L,{type:lr,depthBuffer:!1,stencilBuffer:!1}),d=new ji(P,L,{type:lr,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<D.length;F++){const T=D[F];T.setSize&&T.setSize(P,L)}},this.begin=function(b,P){if(A||b.toneMapping===sr&&D.length===0)return!1;if(x=P,P!==null){const L=P.width,F=P.height;(c.width!==L||c.height!==F)&&this.setSize(L,F)}return I===!1&&b.setRenderTarget(c),S=b.toneMapping,b.toneMapping=sr,!0},this.hasRenderPass=function(){return I},this.end=function(b,P){b.toneMapping=S,A=!0;let L=c,F=u;for(let T=0;T<D.length;T++){const w=D[T];w.enabled!==!1&&(w.render(b,F,L,P),w.needsSwap!==!1&&(L=F,F=F===u?d:u))}if(y!==b.outputColorSpace||M!==b.toneMapping){y=b.outputColorSpace,M=b.toneMapping,m.defines={},Ot.getTransfer(y)===Kt&&(m.defines.SRGB_TRANSFER="");const T=Jb[M];T&&(m.defines[T]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,b.setRenderTarget(x),b.render(v,g),x=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){c.dispose(),u!==null&&u.dispose(),d!==null&&d.dispose(),h.dispose(),m.dispose()}}const py=new qn,rp=new tl(1,1),my=new Qx,gy=new xA,vy=new oy,P1=[],D1=[],L1=new Float32Array(16),N1=new Float32Array(9),I1=new Float32Array(4);function jo(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let a=P1[o];if(a===void 0&&(a=new Float32Array(o),P1[o]=a),e!==0){r.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,n[c].toArray(a,u)}return a}function Tn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function wn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function Tu(n,e){let t=D1[e];t===void 0&&(t=new Int32Array(e),D1[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function tP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function nP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;n.uniform2fv(this.addr,e),wn(t,e)}}function iP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tn(t,e))return;n.uniform3fv(this.addr,e),wn(t,e)}}function rP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;n.uniform4fv(this.addr,e),wn(t,e)}}function sP(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Tn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wn(t,e)}else{if(Tn(t,r))return;I1.set(r),n.uniformMatrix2fv(this.addr,!1,I1),wn(t,r)}}function oP(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Tn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wn(t,e)}else{if(Tn(t,r))return;N1.set(r),n.uniformMatrix3fv(this.addr,!1,N1),wn(t,r)}}function aP(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Tn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wn(t,e)}else{if(Tn(t,r))return;L1.set(r),n.uniformMatrix4fv(this.addr,!1,L1),wn(t,r)}}function lP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function cP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;n.uniform2iv(this.addr,e),wn(t,e)}}function uP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;n.uniform3iv(this.addr,e),wn(t,e)}}function fP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;n.uniform4iv(this.addr,e),wn(t,e)}}function dP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function hP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;n.uniform2uiv(this.addr,e),wn(t,e)}}function pP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;n.uniform3uiv(this.addr,e),wn(t,e)}}function mP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;n.uniform4uiv(this.addr,e),wn(t,e)}}function gP(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let a;this.type===n.SAMPLER_2D_SHADOW?(rp.compareFunction=t.isReversedDepthBuffer()?$p:Kp,a=rp):a=py,t.setTexture2D(e||a,o)}function vP(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||gy,o)}function _P(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||vy,o)}function xP(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||my,o)}function yP(n){switch(n){case 5126:return tP;case 35664:return nP;case 35665:return iP;case 35666:return rP;case 35674:return sP;case 35675:return oP;case 35676:return aP;case 5124:case 35670:return lP;case 35667:case 35671:return cP;case 35668:case 35672:return uP;case 35669:case 35673:return fP;case 5125:return dP;case 36294:return hP;case 36295:return pP;case 36296:return mP;case 35678:case 36198:case 36298:case 36306:case 35682:return gP;case 35679:case 36299:case 36307:return vP;case 35680:case 36300:case 36308:case 36293:return _P;case 36289:case 36303:case 36311:case 36292:return xP}}function SP(n,e){n.uniform1fv(this.addr,e)}function MP(n,e){const t=jo(e,this.size,2);n.uniform2fv(this.addr,t)}function EP(n,e){const t=jo(e,this.size,3);n.uniform3fv(this.addr,t)}function TP(n,e){const t=jo(e,this.size,4);n.uniform4fv(this.addr,t)}function wP(n,e){const t=jo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function AP(n,e){const t=jo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function RP(n,e){const t=jo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function CP(n,e){n.uniform1iv(this.addr,e)}function bP(n,e){n.uniform2iv(this.addr,e)}function PP(n,e){n.uniform3iv(this.addr,e)}function DP(n,e){n.uniform4iv(this.addr,e)}function LP(n,e){n.uniform1uiv(this.addr,e)}function NP(n,e){n.uniform2uiv(this.addr,e)}function IP(n,e){n.uniform3uiv(this.addr,e)}function UP(n,e){n.uniform4uiv(this.addr,e)}function FP(n,e,t){const r=this.cache,o=e.length,a=Tu(t,o);Tn(r,a)||(n.uniform1iv(this.addr,a),wn(r,a));let c;this.type===n.SAMPLER_2D_SHADOW?c=rp:c=py;for(let u=0;u!==o;++u)t.setTexture2D(e[u]||c,a[u])}function OP(n,e,t){const r=this.cache,o=e.length,a=Tu(t,o);Tn(r,a)||(n.uniform1iv(this.addr,a),wn(r,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||gy,a[c])}function BP(n,e,t){const r=this.cache,o=e.length,a=Tu(t,o);Tn(r,a)||(n.uniform1iv(this.addr,a),wn(r,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||vy,a[c])}function kP(n,e,t){const r=this.cache,o=e.length,a=Tu(t,o);Tn(r,a)||(n.uniform1iv(this.addr,a),wn(r,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||my,a[c])}function zP(n){switch(n){case 5126:return SP;case 35664:return MP;case 35665:return EP;case 35666:return TP;case 35674:return wP;case 35675:return AP;case 35676:return RP;case 5124:case 35670:return CP;case 35667:case 35671:return bP;case 35668:case 35672:return PP;case 35669:case 35673:return DP;case 5125:return LP;case 36294:return NP;case 36295:return IP;case 36296:return UP;case 35678:case 36198:case 36298:case 36306:case 35682:return FP;case 35679:case 36299:case 36307:return OP;case 35680:case 36300:case 36308:case 36293:return BP;case 36289:case 36303:case 36311:case 36292:return kP}}class VP{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=yP(t.type)}}class HP{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zP(t.type)}}class GP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const u=o[a];u.setValue(e,t[u.id],r)}}}const $d=/(\w+)(\])?(\[|\.)?/g;function U1(n,e){n.seq.push(e),n.map[e.id]=e}function WP(n,e,t){const r=n.name,o=r.length;for($d.lastIndex=0;;){const a=$d.exec(r),c=$d.lastIndex;let u=a[1];const d=a[2]==="]",h=a[3];if(d&&(u=u|0),h===void 0||h==="["&&c+2===o){U1(t,h===void 0?new VP(u,n,e):new HP(u,n,e));break}else{let v=t.map[u];v===void 0&&(v=new GP(u),U1(t,v)),t=v}}}class Kc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const u=e.getActiveUniform(t,c),d=e.getUniformLocation(t,u.name);WP(u,d,this)}const o=[],a=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):a.push(c);o.length>0&&(this.seq=o.concat(a))}setValue(e,t,r,o){const a=this.map[t];a!==void 0&&a.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let a=0,c=t.length;a!==c;++a){const u=t[a],d=r[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function F1(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const XP=37297;let jP=0;function YP(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const u=c+1;r.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return r.join(`
`)}const O1=new Et;function qP(n){Ot._getMatrix(O1,Ot.workingColorSpace,n);const e=`mat3( ${O1.elements.map(t=>t.toFixed(4))} )`;switch(Ot.getTransfer(n)){case lu:return[e,"LinearTransferOETF"];case Kt:return[e,"sRGBTransferOETF"];default:return _t("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function B1(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+YP(n.getShaderSource(e),u)}else return a}function KP(n,e){const t=qP(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const $P={[Fx]:"Linear",[Ox]:"Reinhard",[Bx]:"Cineon",[kx]:"ACESFilmic",[Vx]:"AgX",[Hx]:"Neutral",[zx]:"Custom"};function ZP(n,e){const t=$P[e];return t===void 0?(_t("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const kc=new ce;function QP(){Ot.getLuminanceCoefficients(kc);const n=kc.x.toFixed(4),e=kc.y.toFixed(4),t=kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(za).join(`
`)}function e4(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function t4(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const a=n.getActiveAttrib(e,o),c=a.name;let u=1;a.type===n.FLOAT_MAT2&&(u=2),a.type===n.FLOAT_MAT3&&(u=3),a.type===n.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:n.getAttribLocation(e,c),locationSize:u}}return t}function za(n){return n!==""}function k1(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function z1(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const n4=/^[ \t]*#include +<([\w\d./]+)>/gm;function sp(n){return n.replace(n4,r4)}const i4=new Map;function r4(n,e){let t=Rt[e];if(t===void 0){const r=i4.get(e);if(r!==void 0)t=Rt[r],_t('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return sp(t)}const s4=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function V1(n){return n.replace(s4,o4)}function o4(n,e,t,r){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function H1(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const a4={[Wc]:"SHADOWMAP_TYPE_PCF",[Ba]:"SHADOWMAP_TYPE_VSM"};function l4(n){return a4[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const c4={[Vs]:"ENVMAP_TYPE_CUBE",[zo]:"ENVMAP_TYPE_CUBE",[Su]:"ENVMAP_TYPE_CUBE_UV"};function u4(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":c4[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const f4={[zo]:"ENVMAP_MODE_REFRACTION"};function d4(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":f4[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const h4={[Ux]:"ENVMAP_BLENDING_MULTIPLY",[$w]:"ENVMAP_BLENDING_MIX",[Zw]:"ENVMAP_BLENDING_ADD"};function p4(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":h4[n.combine]||"ENVMAP_BLENDING_NONE"}function m4(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function g4(n,e,t,r){const o=n.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const d=l4(t),h=u4(t),m=d4(t),v=p4(t),g=m4(t),y=JP(t),M=e4(a),A=o.createProgram();let S,x,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(za).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(za).join(`
`),x.length>0&&(x+=`
`)):(S=[H1(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(za).join(`
`),x=[H1(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==sr?"#define TONE_MAPPING":"",t.toneMapping!==sr?Rt.tonemapping_pars_fragment:"",t.toneMapping!==sr?ZP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Rt.colorspace_pars_fragment,KP("linearToOutputTexel",t.outputColorSpace),QP(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(za).join(`
`)),c=sp(c),c=k1(c,t),c=z1(c,t),u=sp(u),u=k1(u,t),u=z1(u,t),c=V1(c),u=V1(u),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===Qv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const I=D+S+c,b=D+x+u,P=F1(o,o.VERTEX_SHADER,I),L=F1(o,o.FRAGMENT_SHADER,b);o.attachShader(A,P),o.attachShader(A,L),t.index0AttributeName!==void 0?o.bindAttribLocation(A,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function F(Y){if(n.debug.checkShaderErrors){const J=o.getProgramInfoLog(A)||"",se=o.getShaderInfoLog(P)||"",q=o.getShaderInfoLog(L)||"",ee=J.trim(),me=se.trim(),$=q.trim();let H=!0,Z=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,A,P,L);else{const X=B1(o,P,"vertex"),N=B1(o,L,"fragment");Wt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+Y.name+`
Material Type: `+Y.type+`

Program Info Log: `+ee+`
`+X+`
`+N)}else ee!==""?_t("WebGLProgram: Program Info Log:",ee):(me===""||$==="")&&(Z=!1);Z&&(Y.diagnostics={runnable:H,programLog:ee,vertexShader:{log:me,prefix:S},fragmentShader:{log:$,prefix:x}})}o.deleteShader(P),o.deleteShader(L),T=new Kc(o,A),w=t4(o,A)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=o.getProgramParameter(A,XP)),B},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jP++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=P,this.fragmentShader=L,this}let v4=0;class _4{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new x4(e),t.set(e,r)),r}}class x4{constructor(e){this.id=v4++,this.code=e,this.usedTimes=0}}function y4(n){return n===Hs||n===su||n===ou}function S4(n,e,t,r,o,a){const c=new Jx,u=new _4,d=new Set,h=[],m=new Map,v=r.logarithmicDepthBuffer;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return d.add(T),T===0?"uv":`uv${T}`}function A(T,w,B,Y,J,se){const q=Y.fog,ee=J.geometry,me=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?Y.environment:null,$=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,H=e.get(T.envMap||me,$),Z=H&&H.mapping===Su?H.image.height:null,X=y[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&_t("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const N=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,re=N!==void 0?N.length:0;let we=0;ee.morphAttributes.position!==void 0&&(we=1),ee.morphAttributes.normal!==void 0&&(we=2),ee.morphAttributes.color!==void 0&&(we=3);let qe,We,Ke,oe;if(X){const kt=er[X];qe=kt.vertexShader,We=kt.fragmentShader}else{qe=T.vertexShader,We=T.fragmentShader;const kt=u.getVertexShaderStage(T),Nt=u.getFragmentShaderStage(T);u.update(T,kt,Nt),Ke=kt.id,oe=Nt.id}const fe=n.getRenderTarget(),Re=n.state.buffers.depth.getReversed(),ye=J.isInstancedMesh===!0,Me=J.isBatchedMesh===!0,De=!!T.map,Xe=!!T.matcap,dt=!!H,xt=!!T.aoMap,yt=!!T.lightMap,ut=!!T.bumpMap&&T.wireframe===!1,ft=!!T.normalMap,Dt=!!T.displacementMap,Lt=!!T.emissiveMap,Ct=!!T.metalnessMap,Vt=!!T.roughnessMap,V=T.anisotropy>0,$t=T.clearcoat>0,wt=T.dispersion>0,U=T.retroreflectivity>0,E=T.iridescence>0,Q=T.sheen>0,ae=T.transmission>0,pe=V&&!!T.anisotropyMap,Ce=$t&&!!T.clearcoatMap,Ie=$t&&!!T.clearcoatNormalMap,ge=$t&&!!T.clearcoatRoughnessMap,xe=E&&!!T.iridescenceMap,Ue=E&&!!T.iridescenceThicknessMap,nt=Q&&!!T.sheenColorMap,Be=Q&&!!T.sheenRoughnessMap,Le=!!T.specularMap,it=!!T.specularColorMap,lt=!!T.specularIntensityMap,mt=ae&&!!T.transmissionMap,G=ae&&!!T.thicknessMap,Fe=!!T.gradientMap,_e=!!T.alphaMap,Ne=T.alphaTest>0,ze=!!T.alphaHash,Se=!!T.extensions;let Je=sr;T.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Je=n.toneMapping);const Qe={shaderID:X,shaderType:T.type,shaderName:T.name,vertexShader:qe,fragmentShader:We,defines:T.defines,customVertexShaderID:Ke,customFragmentShaderID:oe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Me,batchingColor:Me&&J._colorsTexture!==null,instancing:ye,instancingColor:ye&&J.instanceColor!==null,instancingMorph:ye&&J.morphTexture!==null,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Ot.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:De,matcap:Xe,envMap:dt,envMapMode:dt&&H.mapping,envMapCubeUVHeight:Z,aoMap:xt,lightMap:yt,bumpMap:ut,normalMap:ft,displacementMap:Dt,emissiveMap:Lt,normalMapObjectSpace:ft&&T.normalMapType===eA,normalMapTangentSpace:ft&&T.normalMapType===Zv,packedNormalMap:ft&&T.normalMapType===Zv&&y4(T.normalMap.format),metalnessMap:Ct,roughnessMap:Vt,anisotropy:V,anisotropyMap:pe,clearcoat:$t,clearcoatMap:Ce,clearcoatNormalMap:Ie,clearcoatRoughnessMap:ge,dispersion:wt,retroreflection:U,iridescence:E,iridescenceMap:xe,iridescenceThicknessMap:Ue,sheen:Q,sheenColorMap:nt,sheenRoughnessMap:Be,specularMap:Le,specularColorMap:it,specularIntensityMap:lt,transmission:ae,transmissionMap:mt,thicknessMap:G,gradientMap:Fe,opaque:T.transparent===!1&&T.blending===Xa&&T.alphaToCoverage===!1,alphaMap:_e,alphaTest:Ne,alphaHash:ze,combine:T.combine,mapUv:De&&M(T.map.channel),aoMapUv:xt&&M(T.aoMap.channel),lightMapUv:yt&&M(T.lightMap.channel),bumpMapUv:ut&&M(T.bumpMap.channel),normalMapUv:ft&&M(T.normalMap.channel),displacementMapUv:Dt&&M(T.displacementMap.channel),emissiveMapUv:Lt&&M(T.emissiveMap.channel),metalnessMapUv:Ct&&M(T.metalnessMap.channel),roughnessMapUv:Vt&&M(T.roughnessMap.channel),anisotropyMapUv:pe&&M(T.anisotropyMap.channel),clearcoatMapUv:Ce&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:Be&&M(T.sheenRoughnessMap.channel),specularMapUv:Le&&M(T.specularMap.channel),specularColorMapUv:it&&M(T.specularColorMap.channel),specularIntensityMapUv:lt&&M(T.specularIntensityMap.channel),transmissionMapUv:mt&&M(T.transmissionMap.channel),thicknessMapUv:G&&M(T.thicknessMap.channel),alphaMapUv:_e&&M(T.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(ft||V),vertexNormals:!!ee.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!ee.attributes.uv&&(De||_e),fog:!!q,useFog:T.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||ee.attributes.normal===void 0&&ft===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Re,skinning:J.isSkinnedMesh===!0,hasPositionAttribute:ee.attributes.position!==void 0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:we,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:se.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:Je,decodeVideoTexture:De&&T.map.isVideoTexture===!0&&Ot.getTransfer(T.map.colorSpace)===Kt,decodeVideoTextureEmissive:Lt&&T.emissiveMap.isVideoTexture===!0&&Ot.getTransfer(T.emissiveMap.colorSpace)===Kt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Rr,flipSided:T.side===ai,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Se&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&T.extensions.multiDraw===!0||Me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Qe.vertexUv1s=d.has(1),Qe.vertexUv2s=d.has(2),Qe.vertexUv3s=d.has(3),d.clear(),Qe}function S(T){const w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(const B in T.defines)w.push(B),w.push(T.defines[B]);return T.isRawShaderMaterial===!1&&(x(w,T),D(w,T),w.push(n.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function x(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numSunLights),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numSunLightShadows),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function D(T,w){c.disableAll(),w.instancing&&c.enable(0),w.instancingColor&&c.enable(1),w.instancingMorph&&c.enable(2),w.matcap&&c.enable(3),w.envMap&&c.enable(4),w.normalMapObjectSpace&&c.enable(5),w.normalMapTangentSpace&&c.enable(6),w.clearcoat&&c.enable(7),w.iridescence&&c.enable(8),w.alphaTest&&c.enable(9),w.vertexColors&&c.enable(10),w.vertexAlphas&&c.enable(11),w.vertexUv1s&&c.enable(12),w.vertexUv2s&&c.enable(13),w.vertexUv3s&&c.enable(14),w.vertexTangents&&c.enable(15),w.anisotropy&&c.enable(16),w.alphaHash&&c.enable(17),w.batching&&c.enable(18),w.dispersion&&c.enable(19),w.retroreflection&&c.enable(24),w.batchingColor&&c.enable(20),w.gradientMap&&c.enable(21),w.packedNormalMap&&c.enable(22),w.vertexNormals&&c.enable(23),T.push(c.mask),c.disableAll(),w.fog&&c.enable(0),w.useFog&&c.enable(1),w.flatShading&&c.enable(2),w.logarithmicDepthBuffer&&c.enable(3),w.reversedDepthBuffer&&c.enable(4),w.skinning&&c.enable(5),w.morphTargets&&c.enable(6),w.morphNormals&&c.enable(7),w.morphColors&&c.enable(8),w.premultipliedAlpha&&c.enable(9),w.shadowMapEnabled&&c.enable(10),w.doubleSided&&c.enable(11),w.flipSided&&c.enable(12),w.useDepthPacking&&c.enable(13),w.dithering&&c.enable(14),w.transmission&&c.enable(15),w.sheen&&c.enable(16),w.opaque&&c.enable(17),w.pointsUvs&&c.enable(18),w.decodeVideoTexture&&c.enable(19),w.decodeVideoTextureEmissive&&c.enable(20),w.alphaToCoverage&&c.enable(21),w.numLightProbeGrids>0&&c.enable(22),w.hasPositionAttribute&&c.enable(23),T.push(c.mask)}function I(T){const w=y[T.type];let B;if(w){const Y=er[w];B=HA.clone(Y.uniforms)}else B=T.uniforms;return B}function b(T,w){let B=m.get(w);return B!==void 0?++B.usedTimes:(B=new g4(n,w,T,o),h.push(B),m.set(w,B)),B}function P(T){if(--T.usedTimes===0){const w=h.indexOf(T);h[w]=h[h.length-1],h.pop(),m.delete(T.cacheKey),T.destroy()}}function L(T){u.remove(T)}function F(){u.dispose()}return{getParameters:A,getProgramCacheKey:S,getUniforms:I,acquireProgram:b,releaseProgram:P,releaseShaderCache:L,programs:h,dispose:F}}function M4(){let n=new WeakMap;function e(c){return n.has(c)}function t(c){let u=n.get(c);return u===void 0&&(u={},n.set(c,u)),u}function r(c){n.delete(c)}function o(c,u,d){n.get(c)[u]=d}function a(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:a}}function E4(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function G1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function W1(){const n=[];let e=0;const t=[],r=[],o=[];function a(){e=0,t.length=0,r.length=0,o.length=0}function c(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function u(g,y,M,A,S,x){let D=n[e];return D===void 0?(D={id:g.id,object:g,geometry:y,material:M,materialVariant:c(g),groupOrder:A,renderOrder:g.renderOrder,z:S,group:x},n[e]=D):(D.id=g.id,D.object=g,D.geometry=y,D.material=M,D.materialVariant=c(g),D.groupOrder=A,D.renderOrder=g.renderOrder,D.z=S,D.group=x),e++,D}function d(g,y,M,A,S,x,D){D.reversedDepth===!0&&(S=-S);const I=u(g,y,M,A,S,x);M.transmission>0?r.push(I):M.transparent===!0?o.push(I):t.push(I)}function h(g,y,M,A,S,x){const D=u(g,y,M,A,S,x);M.transmission>0?r.unshift(D):M.transparent===!0?o.unshift(D):t.unshift(D)}function m(g,y){t.length>1&&t.sort(g||E4),r.length>1&&r.sort(y||G1),o.length>1&&o.sort(y||G1)}function v(){for(let g=e,y=n.length;g<y;g++){const M=n[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:a,push:d,unshift:h,finish:v,sort:m}}function T4(){let n=new WeakMap;function e(r,o){const a=n.get(r);let c;return a===void 0?(c=new W1,n.set(r,[c])):o>=a.length?(c=new W1,a.push(c)):c=a[o],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function w4(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ce,color:new Pt};break;case"SpotLight":t={position:new ce,direction:new ce,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ce,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ce,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":t={color:new Pt,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return n[e.id]=t,t}}}function A4(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let R4=0;function C4(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function b4(n){const e=new w4,t=A4(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ce);const o=new ce,a=new pn,c=new pn;function u(h){let m=0,v=0,g=0;for(let J=0;J<9;J++)r.probe[J].set(0,0,0);let y=0,M=0,A=0,S=0,x=0,D=0,I=0,b=0,P=0,L=0,F=0,T=0,w=0,B=0;h.sort(C4);for(let J=0,se=h.length;J<se;J++){const q=h[J],ee=q.color,me=q.intensity,$=q.distance;let H=null;if(q.shadow&&q.shadow.map&&(q.shadow.map.texture.format===Hs?H=q.shadow.map.texture:H=q.shadow.map.depthTexture||q.shadow.map.texture),q.isAmbientLight)m+=ee.r*me,v+=ee.g*me,g+=ee.b*me;else if(q.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(q.sh.coefficients[Z],me);B++}else if(q.isSunLight){const Z=e.get(q);if(Z.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){const X=q.shadow,N=t.get(q);N.shadowIntensity=X.intensity,N.shadowBias=X.bias,N.shadowNormalBias=X.normalBias,N.shadowRadius=X.radius,N.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),r.sunShadow[M]=N,r.sunShadowMap[M]=H;const re=X.getViewportCount();for(let we=0;we<re;we++)r.sunShadowMatrix[A+we]=X.getMatrix(we),r.sunShadowCascade[A+we]=X._cascadeData[we];A+=re,M++}r.sun[y]=Z,y++}else if(q.isDirectionalLight){const Z=e.get(q);if(Z.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){const X=q.shadow,N=t.get(q);N.shadowIntensity=X.intensity,N.shadowBias=X.bias,N.shadowNormalBias=X.normalBias,N.shadowRadius=X.radius,N.shadowMapSize=X.mapSize,r.directionalShadow[S]=N,r.directionalShadowMap[S]=H,r.directionalShadowMatrix[S]=q.shadow.matrix,P++}r.directional[S]=Z,S++}else if(q.isSpotLight){const Z=e.get(q);Z.position.setFromMatrixPosition(q.matrixWorld),Z.color.copy(ee).multiplyScalar(me),Z.distance=$,Z.coneCos=Math.cos(q.angle),Z.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),Z.decay=q.decay,r.spot[D]=Z;const X=q.shadow;if(q.map&&(r.spotLightMap[T]=q.map,T++,X.updateMatrices(q),q.castShadow&&w++),r.spotLightMatrix[D]=X.matrix,q.castShadow){const N=t.get(q);N.shadowIntensity=X.intensity,N.shadowBias=X.bias,N.shadowNormalBias=X.normalBias,N.shadowRadius=X.radius,N.shadowMapSize=X.mapSize,r.spotShadow[D]=N,r.spotShadowMap[D]=H,F++}D++}else if(q.isRectAreaLight){const Z=e.get(q);Z.color.copy(ee).multiplyScalar(me),Z.halfWidth.set(q.width*.5,0,0),Z.halfHeight.set(0,q.height*.5,0),r.rectArea[I]=Z,I++}else if(q.isPointLight){const Z=e.get(q);if(Z.color.copy(q.color).multiplyScalar(q.intensity),Z.distance=q.distance,Z.decay=q.decay,q.castShadow){const X=q.shadow,N=t.get(q);N.shadowIntensity=X.intensity,N.shadowBias=X.bias,N.shadowNormalBias=X.normalBias,N.shadowRadius=X.radius,N.shadowMapSize=X.mapSize,N.shadowCameraNear=X.camera.near,N.shadowCameraFar=X.camera.far,r.pointShadow[x]=N,r.pointShadowMap[x]=H,r.pointShadowMatrix[x]=q.shadow.matrix,L++}r.point[x]=Z,x++}else if(q.isHemisphereLight){const Z=e.get(q);Z.skyColor.copy(q.color).multiplyScalar(me),Z.groundColor.copy(q.groundColor).multiplyScalar(me),r.hemi[b]=Z,b++}}I>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ge.LTC_FLOAT_1,r.rectAreaLTC2=Ge.LTC_FLOAT_2):(r.rectAreaLTC1=Ge.LTC_HALF_1,r.rectAreaLTC2=Ge.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=v,r.ambient[2]=g;const Y=r.hash;(Y.sunLength!==y||Y.directionalLength!==S||Y.pointLength!==x||Y.spotLength!==D||Y.rectAreaLength!==I||Y.hemiLength!==b||Y.numSunShadows!==M||Y.numDirectionalShadows!==P||Y.numPointShadows!==L||Y.numSpotShadows!==F||Y.numSpotMaps!==T||Y.numLightProbes!==B)&&(r.sun.length=y,r.directional.length=S,r.spot.length=D,r.rectArea.length=I,r.point.length=x,r.hemi.length=b,r.sunShadow.length=M,r.sunShadowMap.length=M,r.sunShadowMatrix.length=A,r.sunShadowCascade.length=A,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.directionalShadowMatrix.length=P,r.pointShadow.length=L,r.pointShadowMap.length=L,r.pointShadowMatrix.length=L,r.spotShadow.length=F,r.spotShadowMap.length=F,r.spotLightMatrix.length=F+T-w,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=w,r.numLightProbes=B,Y.sunLength=y,Y.directionalLength=S,Y.pointLength=x,Y.spotLength=D,Y.rectAreaLength=I,Y.hemiLength=b,Y.numSunShadows=M,Y.numDirectionalShadows=P,Y.numPointShadows=L,Y.numSpotShadows=F,Y.numSpotMaps=T,Y.numLightProbes=B,r.version=R4++)}function d(h,m){let v=0,g=0,y=0,M=0,A=0,S=0;const x=m.matrixWorldInverse;for(let D=0,I=h.length;D<I;D++){const b=h[D];if(b.isSunLight){const P=r.sun[v];P.direction.setFromMatrixPosition(b.matrixWorld),P.direction.transformDirection(x),v++}else if(b.isDirectionalLight){const P=r.directional[g];P.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(x),g++}else if(b.isSpotLight){const P=r.spot[M];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(x),P.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(x),M++}else if(b.isRectAreaLight){const P=r.rectArea[A];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(x),c.identity(),a.copy(b.matrixWorld),a.premultiply(x),c.extractRotation(a),P.halfWidth.set(b.width*.5,0,0),P.halfHeight.set(0,b.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),A++}else if(b.isPointLight){const P=r.point[y];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(x),y++}else if(b.isHemisphereLight){const P=r.hemi[S];P.direction.setFromMatrixPosition(b.matrixWorld),P.direction.transformDirection(x),S++}}}return{setup:u,setupView:d,state:r}}function X1(n){const e=new b4(n),t=[],r=[],o=[];function a(g){v.camera=g,t.length=0,r.length=0,o.length=0}function c(g){t.push(g)}function u(g){r.push(g)}function d(g){o.push(g)}function h(){e.setup(t)}function m(g){e.setupView(t,g)}const v={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:v,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:u,pushLightProbeGrid:d}}function P4(n){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let u;return c===void 0?(u=new X1(n),e.set(o,[u])):a>=c.length?(u=new X1(n),c.push(u)):u=c[a],u}function r(){e=new WeakMap}return{get:t,dispose:r}}const D4=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L4=`uniform sampler2D shadow_pass;
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
}`,N4=[new ce(1,0,0),new ce(-1,0,0),new ce(0,1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1)],I4=[new ce(0,-1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1),new ce(0,-1,0),new ce(0,-1,0)],j1=new pn,Ia=new ce,Zd=new ce;function U4(n,e,t){let r=new ry;const o=new jt,a=new jt,c=new hn,u=new jA,d=new YA,h={},m=t.maxTextureSize,v={[zs]:ai,[ai]:zs,[Rr]:Rr},g=new cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:D4,fragmentShader:L4}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const M=new li;M.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Ur(M,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wc;let x=this.type;this.render=function(L,F,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||L.length===0)return;this.type===Dw&&(_t("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Wc);const w=n.getRenderTarget(),B=n.getActiveCubeFace(),Y=n.getActiveMipmapLevel(),J=n.state;J.setBlending(Dr),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const se=x!==this.type;se&&F.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(ee=>ee.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,ee=L.length;q<ee;q++){const me=L[q],$=me.shadow;if($===void 0){_t("WebGLShadowMap:",me,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;o.copy($.mapSize);const H=$.getFrameExtents();o.multiply(H),a.copy($.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(a.x=Math.floor(m/H.x),o.x=a.x*H.x,$.mapSize.x=a.x),o.y>m&&(a.y=Math.floor(m/H.y),o.y=a.y*H.y,$.mapSize.y=a.y));const Z=n.state.buffers.depth.getReversed();if($.camera._reversedDepth=Z,$.map===null||se===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Ba){if(me.isPointLight){_t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new ji(o.x,o.y,{format:Hs,type:lr,minFilter:Yn,magFilter:Yn,generateMipmaps:!1}),$.map.texture.name=me.name+".shadowMap",$.map.depthTexture=new tl(o.x,o.y,tr),$.map.depthTexture.name=me.name+".shadowMapDepth",$.map.depthTexture.format=Ir,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Fn,$.map.depthTexture.magFilter=Fn}else me.isPointLight?($.map=new hy(o.x),$.map.depthTexture=new zA(o.x,ar)):($.map=new ji(o.x,o.y),$.map.depthTexture=new tl(o.x,o.y,ar)),$.map.depthTexture.name=me.name+".shadowMap",$.map.depthTexture.format=Ir,this.type===Wc?($.map.depthTexture.compareFunction=Z?$p:Kp,$.map.depthTexture.minFilter=Yn,$.map.depthTexture.magFilter=Yn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Fn,$.map.depthTexture.magFilter=Fn);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==o.x||$.map.height!==o.y)&&$.map.setSize(o.x,o.y);const X=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();me.isPointLight!==!0&&$.updateMatrices(me,T);for(let N=0;N<X;N++){const re=$.getCamera(N);if(me.isPointLight){const we=$.camera,qe=$.matrix,We=me.distance||we.far;We!==we.far&&(we.far=We,we.updateProjectionMatrix()),Ia.setFromMatrixPosition(me.matrixWorld),we.position.copy(Ia),Zd.copy(we.position),Zd.add(N4[N]),we.up.copy(I4[N]),we.lookAt(Zd),we.updateMatrixWorld(),qe.makeTranslation(-Ia.x,-Ia.y,-Ia.z),j1.multiplyMatrices(we.projectionMatrix,we.matrixWorldInverse),$._frustum.setFromProjectionMatrix(j1,we.coordinateSystem,we.reversedDepth)}if($.map.isWebGLCubeRenderTarget)n.setRenderTarget($.map,N),n.clear();else{N===0&&(n.setRenderTarget($.map),n.clear());const we=$.getViewport(N);c.set(a.x*we.x,a.y*we.y,a.x*we.z,a.y*we.w),J.viewport(c)}r=$.getFrustum(N),b(F,T,re,me,this.type)}$.isPointLightShadow!==!0&&this.type===Ba&&D($,T),$.needsUpdate=!1}x=this.type,S.needsUpdate=!1,n.setRenderTarget(w,B,Y)};function D(L,F){const T=e.update(A);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,y.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),L.mapPass===null?L.mapPass=new ji(o.x,o.y,{format:Hs,type:lr}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value.set(L.map.width,L.map.height),g.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(F,null,T,g,A,null),y.uniforms.shadow_pass.value=L.mapPass.texture,y.uniforms.resolution.value.set(L.map.width,L.map.height),y.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(F,null,T,y,A,null)}function I(L,F,T,w){let B=null;const Y=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(Y!==void 0)B=Y;else if(B=T.isPointLight===!0?d:u,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const J=B.uuid,se=F.uuid;let q=h[J];q===void 0&&(q={},h[J]=q);let ee=q[se];ee===void 0&&(ee=B.clone(),q[se]=ee,F.addEventListener("dispose",P)),B=ee}if(B.visible=F.visible,B.wireframe=F.wireframe,w===Ba?B.side=F.shadowSide!==null?F.shadowSide:F.side:B.side=F.shadowSide!==null?F.shadowSide:v[F.side],B.alphaMap=F.alphaMap,B.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,B.map=F.map,B.clipShadows=F.clipShadows,B.clippingPlanes=F.clippingPlanes,B.clipIntersection=F.clipIntersection,B.displacementMap=F.displacementMap,B.displacementScale=F.displacementScale,B.displacementBias=F.displacementBias,B.wireframeLinewidth=F.wireframeLinewidth,B.linewidth=F.linewidth,T.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const J=n.properties.get(B);J.light=T}return B}function b(L,F,T,w,B){if(L.visible===!1)return;if(L.layers.test(F.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&B===Ba)&&(!L.frustumCulled||L.intersectsFrustum(r))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);const se=e.update(L),q=L.material;if(Array.isArray(q)){const ee=se.groups;for(let me=0,$=ee.length;me<$;me++){const H=ee[me],Z=q[H.materialIndex];if(Z&&Z.visible){const X=I(L,Z,w,B);L.onBeforeShadow(n,L,F,T,se,X,H),n.renderBufferDirect(T,null,se,X,L,H),L.onAfterShadow(n,L,F,T,se,X,H)}}}else if(q.visible){const ee=I(L,q,w,B);L.onBeforeShadow(n,L,F,T,se,ee,null),n.renderBufferDirect(T,null,se,ee,L,null),L.onAfterShadow(n,L,F,T,se,ee,null)}}const J=L.children;for(let se=0,q=J.length;se<q;se++)b(J[se],F,T,w,B)}function P(L){L.target.removeEventListener("dispose",P);for(const T in h){const w=h[T],B=L.target.uuid;B in w&&(w[B].dispose(),delete w[B])}}}function F4(n,e){function t(){let G=!1;const Fe=new hn;let _e=null;const Ne=new hn(0,0,0,0);return{setMask:function(ze){_e!==ze&&!G&&(n.colorMask(ze,ze,ze,ze),_e=ze)},setLocked:function(ze){G=ze},setClear:function(ze,Se,Je,Qe,kt){kt===!0&&(ze*=Qe,Se*=Qe,Je*=Qe),Fe.set(ze,Se,Je,Qe),Ne.equals(Fe)===!1&&(n.clearColor(ze,Se,Je,Qe),Ne.copy(Fe))},reset:function(){G=!1,_e=null,Ne.set(-1,0,0,0)}}}function r(){let G=!1,Fe=!1,_e=null,Ne=null,ze=null;return{setReversed:function(Se){if(Fe!==Se){const Je=e.get("EXT_clip_control");Se?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),Fe=Se;const Qe=ze;ze=null,this.setClear(Qe)}},getReversed:function(){return Fe},setTest:function(Se){Se?fe(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(Se){_e!==Se&&!G&&(n.depthMask(Se),_e=Se)},setFunc:function(Se){if(Fe&&(Se=dA[Se]),Ne!==Se){switch(Se){case gh:n.depthFunc(n.NEVER);break;case vh:n.depthFunc(n.ALWAYS);break;case _h:n.depthFunc(n.LESS);break;case Qa:n.depthFunc(n.LEQUAL);break;case xh:n.depthFunc(n.EQUAL);break;case yh:n.depthFunc(n.GEQUAL);break;case Sh:n.depthFunc(n.GREATER);break;case Mh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ne=Se}},setLocked:function(Se){G=Se},setClear:function(Se){ze!==Se&&(ze=Se,Fe&&(Se=1-Se),n.clearDepth(Se))},reset:function(){G=!1,_e=null,Ne=null,ze=null,Fe=!1}}}function o(){let G=!1,Fe=null,_e=null,Ne=null,ze=null,Se=null,Je=null,Qe=null,kt=null;return{setTest:function(Nt){G||(Nt?fe(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(Nt){Fe!==Nt&&!G&&(n.stencilMask(Nt),Fe=Nt)},setFunc:function(Nt,yn,Ln){(_e!==Nt||Ne!==yn||ze!==Ln)&&(n.stencilFunc(Nt,yn,Ln),_e=Nt,Ne=yn,ze=Ln)},setOp:function(Nt,yn,Ln){(Se!==Nt||Je!==yn||Qe!==Ln)&&(n.stencilOp(Nt,yn,Ln),Se=Nt,Je=yn,Qe=Ln)},setLocked:function(Nt){G=Nt},setClear:function(Nt){kt!==Nt&&(n.clearStencil(Nt),kt=Nt)},reset:function(){G=!1,Fe=null,_e=null,Ne=null,ze=null,Se=null,Je=null,Qe=null,kt=null}}}const a=new t,c=new r,u=new o,d=new WeakMap,h=new WeakMap;let m={},v={},g={},y=new WeakMap,M=[],A=null,S=!1,x=null,D=null,I=null,b=null,P=null,L=null,F=null,T=new Pt(0,0,0),w=0,B=!1,Y=null,J=null,se=null,q=null,ee=null;const me=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,H=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Z)[1]),$=H>=1):Z.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),$=H>=2);let X=null,N={};const re=n.getParameter(n.SCISSOR_BOX),we=n.getParameter(n.VIEWPORT),qe=new hn().fromArray(re),We=new hn().fromArray(we);function Ke(G,Fe,_e,Ne){const ze=new Uint8Array(4),Se=n.createTexture();n.bindTexture(G,Se),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Je=0;Je<_e;Je++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Fe,0,n.RGBA,1,1,Ne,0,n.RGBA,n.UNSIGNED_BYTE,ze):n.texImage2D(Fe+Je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ze);return Se}const oe={};oe[n.TEXTURE_2D]=Ke(n.TEXTURE_2D,n.TEXTURE_2D,1),oe[n.TEXTURE_CUBE_MAP]=Ke(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[n.TEXTURE_2D_ARRAY]=Ke(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),oe[n.TEXTURE_3D]=Ke(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),fe(n.DEPTH_TEST),c.setFunc(Qa),ut(!1),ft(qv),fe(n.CULL_FACE),xt(Dr);function fe(G){m[G]!==!0&&(n.enable(G),m[G]=!0)}function Re(G){m[G]!==!1&&(n.disable(G),m[G]=!1)}function ye(G,Fe){return g[G]!==Fe?(n.bindFramebuffer(G,Fe),g[G]=Fe,G===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=Fe),G===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=Fe),!0):!1}function Me(G,Fe){let _e=M,Ne=!1;if(G){_e=y.get(Fe),_e===void 0&&(_e=[],y.set(Fe,_e));const ze=G.textures;if(_e.length!==ze.length||_e[0]!==n.COLOR_ATTACHMENT0){for(let Se=0,Je=ze.length;Se<Je;Se++)_e[Se]=n.COLOR_ATTACHMENT0+Se;_e.length=ze.length,Ne=!0}}else _e[0]!==n.BACK&&(_e[0]=n.BACK,Ne=!0);Ne&&n.drawBuffers(_e)}function De(G){return A!==G?(n.useProgram(G),A=G,!0):!1}const Xe={[Co]:n.FUNC_ADD,[Nw]:n.FUNC_SUBTRACT,[Iw]:n.FUNC_REVERSE_SUBTRACT};Xe[Uw]=n.MIN,Xe[Fw]=n.MAX;const dt={[Ow]:n.ZERO,[Bw]:n.ONE,[kw]:n.SRC_COLOR,[Nx]:n.SRC_ALPHA,[Xw]:n.SRC_ALPHA_SATURATE,[Gw]:n.DST_COLOR,[Vw]:n.DST_ALPHA,[zw]:n.ONE_MINUS_SRC_COLOR,[Ix]:n.ONE_MINUS_SRC_ALPHA,[Ww]:n.ONE_MINUS_DST_COLOR,[Hw]:n.ONE_MINUS_DST_ALPHA,[jw]:n.CONSTANT_COLOR,[Yw]:n.ONE_MINUS_CONSTANT_COLOR,[qw]:n.CONSTANT_ALPHA,[Kw]:n.ONE_MINUS_CONSTANT_ALPHA};function xt(G,Fe,_e,Ne,ze,Se,Je,Qe,kt,Nt){if(G===Dr){S===!0&&(Re(n.BLEND),S=!1);return}if(S===!1&&(fe(n.BLEND),S=!0),G!==Lw){if(G!==x||Nt!==B){if((D!==Co||P!==Co)&&(n.blendEquation(n.FUNC_ADD),D=Co,P=Co),Nt)switch(G){case Xa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ja:n.blendFunc(n.ONE,n.ONE);break;case Kv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $v:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Wt("WebGLState: Invalid blending: ",G);break}else switch(G){case Xa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ja:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Kv:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $v:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",G);break}I=null,b=null,L=null,F=null,T.set(0,0,0),w=0,x=G,B=Nt}return}ze=ze||Fe,Se=Se||_e,Je=Je||Ne,(Fe!==D||ze!==P)&&(n.blendEquationSeparate(Xe[Fe],Xe[ze]),D=Fe,P=ze),(_e!==I||Ne!==b||Se!==L||Je!==F)&&(n.blendFuncSeparate(dt[_e],dt[Ne],dt[Se],dt[Je]),I=_e,b=Ne,L=Se,F=Je),(Qe.equals(T)===!1||kt!==w)&&(n.blendColor(Qe.r,Qe.g,Qe.b,kt),T.copy(Qe),w=kt),x=G,B=!1}function yt(G,Fe){G.side===Rr?Re(n.CULL_FACE):fe(n.CULL_FACE);let _e=G.side===ai;Fe&&(_e=!_e),ut(_e),G.blending===Xa&&G.transparent===!1?xt(Dr):xt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),a.setMask(G.colorWrite);const Ne=G.stencilWrite;u.setTest(Ne),Ne&&(u.setMask(G.stencilWriteMask),u.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),u.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Lt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function ut(G){Y!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),Y=G)}function ft(G){G!==bw?(fe(n.CULL_FACE),G!==J&&(G===qv?n.cullFace(n.BACK):G===Pw?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),J=G}function Dt(G){G!==se&&($&&n.lineWidth(G),se=G)}function Lt(G,Fe,_e){G?(fe(n.POLYGON_OFFSET_FILL),(q!==Fe||ee!==_e)&&(q=Fe,ee=_e,c.getReversed()&&(Fe=-Fe),n.polygonOffset(Fe,_e))):Re(n.POLYGON_OFFSET_FILL)}function Ct(G){G?fe(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function Vt(G){G===void 0&&(G=n.TEXTURE0+me-1),X!==G&&(n.activeTexture(G),X=G)}function V(G,Fe,_e){_e===void 0&&(X===null?_e=n.TEXTURE0+me-1:_e=X);let Ne=N[_e];Ne===void 0&&(Ne={type:void 0,texture:void 0},N[_e]=Ne),(Ne.type!==G||Ne.texture!==Fe)&&(X!==_e&&(n.activeTexture(_e),X=_e),n.bindTexture(G,Fe||oe[G]),Ne.type=G,Ne.texture=Fe)}function $t(){const G=N[X];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function wt(){try{n.compressedTexImage2D(...arguments)}catch(G){Wt("WebGLState:",G)}}function U(){try{n.compressedTexImage3D(...arguments)}catch(G){Wt("WebGLState:",G)}}function E(){try{n.texSubImage2D(...arguments)}catch(G){Wt("WebGLState:",G)}}function Q(){try{n.texSubImage3D(...arguments)}catch(G){Wt("WebGLState:",G)}}function ae(){try{n.compressedTexSubImage2D(...arguments)}catch(G){Wt("WebGLState:",G)}}function pe(){try{n.compressedTexSubImage3D(...arguments)}catch(G){Wt("WebGLState:",G)}}function Ce(){try{n.texStorage2D(...arguments)}catch(G){Wt("WebGLState:",G)}}function Ie(){try{n.texStorage3D(...arguments)}catch(G){Wt("WebGLState:",G)}}function ge(){try{n.texImage2D(...arguments)}catch(G){Wt("WebGLState:",G)}}function xe(){try{n.texImage3D(...arguments)}catch(G){Wt("WebGLState:",G)}}function Ue(G){return v[G]!==void 0?v[G]:n.getParameter(G)}function nt(G,Fe){v[G]!==Fe&&(n.pixelStorei(G,Fe),v[G]=Fe)}function Be(G){qe.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),qe.copy(G))}function Le(G){We.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),We.copy(G))}function it(G,Fe){let _e=h.get(Fe);_e===void 0&&(_e=new WeakMap,h.set(Fe,_e));let Ne=_e.get(G);Ne===void 0&&(Ne=n.getUniformBlockIndex(Fe,G.name),_e.set(G,Ne))}function lt(G,Fe){const Ne=h.get(Fe).get(G);d.get(Fe)!==Ne&&(n.uniformBlockBinding(Fe,Ne,G.__bindingPointIndex),d.set(Fe,Ne))}function mt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),m={},v={},X=null,N={},g={},y=new WeakMap,M=[],A=null,S=!1,x=null,D=null,I=null,b=null,P=null,L=null,F=null,T=new Pt(0,0,0),w=0,B=!1,Y=null,J=null,se=null,q=null,ee=null,qe.set(0,0,n.canvas.width,n.canvas.height),We.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:fe,disable:Re,bindFramebuffer:ye,drawBuffers:Me,useProgram:De,setBlending:xt,setMaterial:yt,setFlipSided:ut,setCullFace:ft,setLineWidth:Dt,setPolygonOffset:Lt,setScissorTest:Ct,activeTexture:Vt,bindTexture:V,unbindTexture:$t,compressedTexImage2D:wt,compressedTexImage3D:U,texImage2D:ge,texImage3D:xe,pixelStorei:nt,getParameter:Ue,updateUBOMapping:it,uniformBlockBinding:lt,texStorage2D:Ce,texStorage3D:Ie,texSubImage2D:E,texSubImage3D:Q,compressedTexSubImage2D:ae,compressedTexSubImage3D:pe,scissor:Be,viewport:Le,reset:mt}}function O4(n,e,t,r,o,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new jt,m=new WeakMap,v=new Set;let g;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(U,E){return M?new OffscreenCanvas(U,E):uu("canvas")}function S(U,E,Q){let ae=1;const pe=wt(U);if((pe.width>Q||pe.height>Q)&&(ae=Q/Math.max(pe.width,pe.height)),ae<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Ce=Math.floor(ae*pe.width),Ie=Math.floor(ae*pe.height);g===void 0&&(g=A(Ce,Ie));const ge=E?A(Ce,Ie):g;return ge.width=Ce,ge.height=Ie,ge.getContext("2d").drawImage(U,0,0,Ce,Ie),_t("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+Ce+"x"+Ie+")."),ge}else return"data"in U&&_t("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),U;return U}function x(U){return U.generateMipmaps}function D(U){n.generateMipmap(U)}function I(U){return U.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?n.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(U,E,Q,ae,pe,Ce=!1){if(U!==null){if(n[U]!==void 0)return n[U];_t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Ie;ae&&(Ie=e.get("EXT_texture_norm16"),Ie||_t("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=E;if(E===n.RED&&(Q===n.FLOAT&&(ge=n.R32F),Q===n.HALF_FLOAT&&(ge=n.R16F),Q===n.UNSIGNED_BYTE&&(ge=n.R8),Q===n.UNSIGNED_SHORT&&Ie&&(ge=Ie.R16_EXT),Q===n.SHORT&&Ie&&(ge=Ie.R16_SNORM_EXT)),E===n.RED_INTEGER&&(Q===n.UNSIGNED_BYTE&&(ge=n.R8UI),Q===n.UNSIGNED_SHORT&&(ge=n.R16UI),Q===n.UNSIGNED_INT&&(ge=n.R32UI),Q===n.BYTE&&(ge=n.R8I),Q===n.SHORT&&(ge=n.R16I),Q===n.INT&&(ge=n.R32I)),E===n.RG&&(Q===n.FLOAT&&(ge=n.RG32F),Q===n.HALF_FLOAT&&(ge=n.RG16F),Q===n.UNSIGNED_BYTE&&(ge=n.RG8),Q===n.UNSIGNED_SHORT&&Ie&&(ge=Ie.RG16_EXT),Q===n.SHORT&&Ie&&(ge=Ie.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(Q===n.UNSIGNED_BYTE&&(ge=n.RG8UI),Q===n.UNSIGNED_SHORT&&(ge=n.RG16UI),Q===n.UNSIGNED_INT&&(ge=n.RG32UI),Q===n.BYTE&&(ge=n.RG8I),Q===n.SHORT&&(ge=n.RG16I),Q===n.INT&&(ge=n.RG32I)),E===n.RGB_INTEGER&&(Q===n.UNSIGNED_BYTE&&(ge=n.RGB8UI),Q===n.UNSIGNED_SHORT&&(ge=n.RGB16UI),Q===n.UNSIGNED_INT&&(ge=n.RGB32UI),Q===n.BYTE&&(ge=n.RGB8I),Q===n.SHORT&&(ge=n.RGB16I),Q===n.INT&&(ge=n.RGB32I)),E===n.RGBA_INTEGER&&(Q===n.UNSIGNED_BYTE&&(ge=n.RGBA8UI),Q===n.UNSIGNED_SHORT&&(ge=n.RGBA16UI),Q===n.UNSIGNED_INT&&(ge=n.RGBA32UI),Q===n.BYTE&&(ge=n.RGBA8I),Q===n.SHORT&&(ge=n.RGBA16I),Q===n.INT&&(ge=n.RGBA32I)),E===n.RGB&&(Q===n.UNSIGNED_SHORT&&Ie&&(ge=Ie.RGB16_EXT),Q===n.SHORT&&Ie&&(ge=Ie.RGB16_SNORM_EXT),Q===n.UNSIGNED_INT_5_9_9_9_REV&&(ge=n.RGB9_E5),Q===n.UNSIGNED_INT_10F_11F_11F_REV&&(ge=n.R11F_G11F_B10F)),E===n.RGBA){const xe=Ce?lu:Ot.getTransfer(pe);Q===n.FLOAT&&(ge=n.RGBA32F),Q===n.HALF_FLOAT&&(ge=n.RGBA16F),Q===n.UNSIGNED_BYTE&&(ge=xe===Kt?n.SRGB8_ALPHA8:n.RGBA8),Q===n.UNSIGNED_SHORT&&Ie&&(ge=Ie.RGBA16_EXT),Q===n.SHORT&&Ie&&(ge=Ie.RGBA16_SNORM_EXT),Q===n.UNSIGNED_SHORT_4_4_4_4&&(ge=n.RGBA4),Q===n.UNSIGNED_SHORT_5_5_5_1&&(ge=n.RGB5_A1)}return(ge===n.R16F||ge===n.R32F||ge===n.RG16F||ge===n.RG32F||ge===n.RGBA16F||ge===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function P(U,E){let Q;return U?E===null||E===ar||E===el?Q=n.DEPTH24_STENCIL8:E===tr?Q=n.DEPTH32F_STENCIL8:E===Ja&&(Q=n.DEPTH24_STENCIL8,_t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ar||E===el?Q=n.DEPTH_COMPONENT24:E===tr?Q=n.DEPTH_COMPONENT32F:E===Ja&&(Q=n.DEPTH_COMPONENT16),Q}function L(U,E){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==Fn&&U.minFilter!==Yn?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function F(U){const E=U.target;E.removeEventListener("dispose",F),w(E),E.isVideoTexture&&m.delete(E),E.isHTMLTexture&&v.delete(E)}function T(U){const E=U.target;E.removeEventListener("dispose",T),Y(E)}function w(U){const E=r.get(U);if(E.__webglInit===void 0)return;const Q=U.source,ae=y.get(Q);if(ae){const pe=ae[E.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&B(U),Object.keys(ae).length===0&&y.delete(Q)}r.remove(U)}function B(U){const E=r.get(U);n.deleteTexture(E.__webglTexture);const Q=U.source,ae=y.get(Q);delete ae[E.__cacheKey],c.memory.textures--}function Y(U){const E=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(E.__webglFramebuffer[ae]))for(let pe=0;pe<E.__webglFramebuffer[ae].length;pe++)n.deleteFramebuffer(E.__webglFramebuffer[ae][pe]);else n.deleteFramebuffer(E.__webglFramebuffer[ae]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[ae])}else{if(Array.isArray(E.__webglFramebuffer))for(let ae=0;ae<E.__webglFramebuffer.length;ae++)n.deleteFramebuffer(E.__webglFramebuffer[ae]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ae=0;ae<E.__webglColorRenderbuffer.length;ae++)E.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[ae]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=U.textures;for(let ae=0,pe=Q.length;ae<pe;ae++){const Ce=r.get(Q[ae]);Ce.__webglTexture&&(n.deleteTexture(Ce.__webglTexture),c.memory.textures--),r.remove(Q[ae])}r.remove(U)}let J=0;function se(){J=0}function q(){return J}function ee(U){J=U}function me(){const U=J;return U>=o.maxTextures&&_t("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+o.maxTextures),J+=1,U}function $(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function H(U,E){const Q=r.get(U);if(U.isVideoTexture&&V(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&Q.__version!==U.version){const ae=U.image;if(ae===null)_t("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)_t("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(Q,U,E);return}}else U.isExternalTexture&&(Q.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture,n.TEXTURE0+E)}function Z(U,E){const Q=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){Re(Q,U,E);return}else U.isExternalTexture&&(Q.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Q.__webglTexture,n.TEXTURE0+E)}function X(U,E){const Q=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){Re(Q,U,E);return}t.bindTexture(n.TEXTURE_3D,Q.__webglTexture,n.TEXTURE0+E)}function N(U,E){const Q=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&Q.__version!==U.version){ye(Q,U,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture,n.TEXTURE0+E)}const re={[Eh]:n.REPEAT,[Cr]:n.CLAMP_TO_EDGE,[Th]:n.MIRRORED_REPEAT},we={[Fn]:n.NEAREST,[Qw]:n.NEAREST_MIPMAP_NEAREST,[pc]:n.NEAREST_MIPMAP_LINEAR,[Yn]:n.LINEAR,[Sd]:n.LINEAR_MIPMAP_NEAREST,[Os]:n.LINEAR_MIPMAP_LINEAR},qe={[nA]:n.NEVER,[aA]:n.ALWAYS,[iA]:n.LESS,[Kp]:n.LEQUAL,[rA]:n.EQUAL,[$p]:n.GEQUAL,[sA]:n.GREATER,[oA]:n.NOTEQUAL};function We(U,E){if(E.type===tr&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Yn||E.magFilter===Sd||E.magFilter===pc||E.magFilter===Os||E.minFilter===Yn||E.minFilter===Sd||E.minFilter===pc||E.minFilter===Os)&&_t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(U,n.TEXTURE_WRAP_S,re[E.wrapS]),n.texParameteri(U,n.TEXTURE_WRAP_T,re[E.wrapT]),(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)&&n.texParameteri(U,n.TEXTURE_WRAP_R,re[E.wrapR]),n.texParameteri(U,n.TEXTURE_MAG_FILTER,we[E.magFilter]),n.texParameteri(U,n.TEXTURE_MIN_FILTER,we[E.minFilter]),E.compareFunction&&(n.texParameteri(U,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(U,n.TEXTURE_COMPARE_FUNC,qe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Fn||E.minFilter!==pc&&E.minFilter!==Os||E.type===tr&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(U,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ke(U,E){let Q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",F));const ae=E.source;let pe=y.get(ae);pe===void 0&&(pe={},y.set(ae,pe));const Ce=$(E);if(Ce!==U.__cacheKey){pe[Ce]===void 0&&(pe[Ce]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,Q=!0),pe[Ce].usedTimes++;const Ie=pe[U.__cacheKey];Ie!==void 0&&(pe[U.__cacheKey].usedTimes--,Ie.usedTimes===0&&B(E)),U.__cacheKey=Ce,U.__webglTexture=pe[Ce].texture}return Q}function oe(U,E,Q){return Math.floor(Math.floor(U/Q)/E)}function fe(U,E,Q,ae){const Ce=U.updateRanges;if(Ce.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,Q,ae,E.data);else{Ce.sort((nt,Be)=>nt.start-Be.start);let Ie=0;for(let nt=1;nt<Ce.length;nt++){const Be=Ce[Ie],Le=Ce[nt],it=Be.start+Be.count,lt=oe(Le.start,E.width,4),mt=oe(Be.start,E.width,4);Le.start<=it+1&&lt===mt&&oe(Le.start+Le.count-1,E.width,4)===lt?Be.count=Math.max(Be.count,Le.start+Le.count-Be.start):(++Ie,Ce[Ie]=Le)}Ce.length=Ie+1;const ge=t.getParameter(n.UNPACK_ROW_LENGTH),xe=t.getParameter(n.UNPACK_SKIP_PIXELS),Ue=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let nt=0,Be=Ce.length;nt<Be;nt++){const Le=Ce[nt],it=Math.floor(Le.start/4),lt=Math.ceil(Le.count/4),mt=it%E.width,G=Math.floor(it/E.width),Fe=lt,_e=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,mt),t.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,mt,G,Fe,_e,Q,ae,E.data)}U.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ge),t.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ue)}}function Re(U,E,Q){let ae=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ae=n.TEXTURE_3D);const pe=Ke(U,E),Ce=E.source;t.bindTexture(ae,U.__webglTexture,n.TEXTURE0+Q);const Ie=r.get(Ce);if(Ce.version!==Ie.__version||pe===!0){if(t.activeTexture(n.TEXTURE0+Q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const _e=Ot.getPrimaries(Ot.workingColorSpace),Ne=E.colorSpace===cs?null:Ot.getPrimaries(E.colorSpace),ze=E.colorSpace===cs||_e===Ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let xe=S(E.image,!1,o.maxTextureSize);xe=$t(E,xe);const Ue=a.convert(E.format,E.colorSpace),nt=a.convert(E.type);let Be=b(E.internalFormat,Ue,nt,E.normalized,E.colorSpace,E.isVideoTexture);We(ae,E);let Le;const it=E.mipmaps,lt=E.isVideoTexture!==!0,mt=Ie.__version===void 0||pe===!0,G=Ce.dataReady,Fe=L(E,xe);if(E.isDepthTexture)Be=P(E.format===Bs,E.type),mt&&(lt?t.texStorage2D(n.TEXTURE_2D,1,Be,xe.width,xe.height):t.texImage2D(n.TEXTURE_2D,0,Be,xe.width,xe.height,0,Ue,nt,null));else if(E.isDataTexture)if(it.length>0){lt&&mt&&t.texStorage2D(n.TEXTURE_2D,Fe,Be,it[0].width,it[0].height);for(let _e=0,Ne=it.length;_e<Ne;_e++)Le=it[_e],lt?G&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Le.width,Le.height,Ue,nt,Le.data):t.texImage2D(n.TEXTURE_2D,_e,Be,Le.width,Le.height,0,Ue,nt,Le.data);E.generateMipmaps=!1}else lt?(mt&&t.texStorage2D(n.TEXTURE_2D,Fe,Be,xe.width,xe.height),G&&fe(E,xe,Ue,nt)):t.texImage2D(n.TEXTURE_2D,0,Be,xe.width,xe.height,0,Ue,nt,xe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){lt&&mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Fe,Be,it[0].width,it[0].height,xe.depth);for(let _e=0,Ne=it.length;_e<Ne;_e++)if(Le=it[_e],E.format!==Xi)if(Ue!==null)if(lt){if(G)if(E.layerUpdates.size>0){const ze=T1(Le.width,Le.height,E.format,E.type);for(const Se of E.layerUpdates){const Je=Le.data.subarray(Se*ze/Le.data.BYTES_PER_ELEMENT,(Se+1)*ze/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,Se,Le.width,Le.height,1,Ue,Je)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Le.width,Le.height,xe.depth,Ue,Le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_e,Be,Le.width,Le.height,xe.depth,0,Le.data,0,0);else _t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Le.width,Le.height,xe.depth,Ue,nt,Le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,_e,Be,Le.width,Le.height,xe.depth,0,Ue,nt,Le.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{lt&&mt&&t.texStorage2D(n.TEXTURE_2D,Fe,Be,it[0].width,it[0].height);for(let _e=0,Ne=it.length;_e<Ne;_e++)Le=it[_e],E.format!==Xi?Ue!==null?lt?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,_e,0,0,Le.width,Le.height,Ue,Le.data):t.compressedTexImage2D(n.TEXTURE_2D,_e,Be,Le.width,Le.height,0,Le.data):_t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?G&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Le.width,Le.height,Ue,nt,Le.data):t.texImage2D(n.TEXTURE_2D,_e,Be,Le.width,Le.height,0,Ue,nt,Le.data)}else if(E.isDataArrayTexture)if(lt){if(mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Fe,Be,xe.width,xe.height,xe.depth),G)if(E.layerUpdates.size>0){const _e=T1(xe.width,xe.height,E.format,E.type);for(const Ne of E.layerUpdates){const ze=xe.data.subarray(Ne*_e/xe.data.BYTES_PER_ELEMENT,(Ne+1)*_e/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ne,xe.width,xe.height,1,Ue,nt,ze)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ue,nt,xe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Be,xe.width,xe.height,xe.depth,0,Ue,nt,xe.data);else if(E.isData3DTexture)lt?(mt&&t.texStorage3D(n.TEXTURE_3D,Fe,Be,xe.width,xe.height,xe.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ue,nt,xe.data)):t.texImage3D(n.TEXTURE_3D,0,Be,xe.width,xe.height,xe.depth,0,Ue,nt,xe.data);else if(E.isFramebufferTexture){if(mt)if(lt)t.texStorage2D(n.TEXTURE_2D,Fe,Be,xe.width,xe.height);else{let _e=xe.width,Ne=xe.height;for(let ze=0;ze<Fe;ze++)t.texImage2D(n.TEXTURE_2D,ze,Be,_e,Ne,0,Ue,nt,null),_e>>=1,Ne>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){const _e=n.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),xe.parentNode!==_e){_e.appendChild(xe),v.add(E),_e.onpaint=Ne=>{const ze=Ne.changedElements;for(const Se of v)ze.includes(Se.image)&&(Se.needsUpdate=!0)},_e.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,xe);else{const ze=n.RGBA,Se=n.RGBA,Je=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ze,Se,Je,xe)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(it.length>0){if(lt&&mt){const _e=wt(it[0]);t.texStorage2D(n.TEXTURE_2D,Fe,Be,_e.width,_e.height)}for(let _e=0,Ne=it.length;_e<Ne;_e++)Le=it[_e],lt?G&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Ue,nt,Le):t.texImage2D(n.TEXTURE_2D,_e,Be,Ue,nt,Le);E.generateMipmaps=!1}else if(lt){if(mt){const _e=wt(xe);t.texStorage2D(n.TEXTURE_2D,Fe,Be,_e.width,_e.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ue,nt,xe)}else t.texImage2D(n.TEXTURE_2D,0,Be,Ue,nt,xe);x(E)&&D(ae),Ie.__version=Ce.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function ye(U,E,Q){if(E.image.length!==6)return;const ae=Ke(U,E),pe=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+Q);const Ce=r.get(pe);if(pe.version!==Ce.__version||ae===!0){t.activeTexture(n.TEXTURE0+Q);const Ie=Ot.getPrimaries(Ot.workingColorSpace),ge=E.colorSpace===cs?null:Ot.getPrimaries(E.colorSpace),xe=E.colorSpace===cs||Ie===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ue=E.isCompressedTexture||E.image[0].isCompressedTexture,nt=E.image[0]&&E.image[0].isDataTexture,Be=[];for(let Se=0;Se<6;Se++)!Ue&&!nt?Be[Se]=S(E.image[Se],!0,o.maxCubemapSize):Be[Se]=nt?E.image[Se].image:E.image[Se],Be[Se]=$t(E,Be[Se]);const Le=Be[0],it=a.convert(E.format,E.colorSpace),lt=a.convert(E.type),mt=b(E.internalFormat,it,lt,E.normalized,E.colorSpace),G=E.isVideoTexture!==!0,Fe=Ce.__version===void 0||ae===!0,_e=pe.dataReady;let Ne=L(E,Le);We(n.TEXTURE_CUBE_MAP,E);let ze;if(Ue){G&&Fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,mt,Le.width,Le.height);for(let Se=0;Se<6;Se++){ze=Be[Se].mipmaps;for(let Je=0;Je<ze.length;Je++){const Qe=ze[Je];E.format!==Xi?it!==null?G?_e&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je,0,0,Qe.width,Qe.height,it,Qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je,mt,Qe.width,Qe.height,0,Qe.data):_t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je,0,0,Qe.width,Qe.height,it,lt,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je,mt,Qe.width,Qe.height,0,it,lt,Qe.data)}}}else{if(ze=E.mipmaps,G&&Fe){ze.length>0&&Ne++;const Se=wt(Be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,mt,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(nt){G?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Be[Se].width,Be[Se].height,it,lt,Be[Se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,mt,Be[Se].width,Be[Se].height,0,it,lt,Be[Se].data);for(let Je=0;Je<ze.length;Je++){const kt=ze[Je].image[Se].image;G?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je+1,0,0,kt.width,kt.height,it,lt,kt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je+1,mt,kt.width,kt.height,0,it,lt,kt.data)}}else{G?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,it,lt,Be[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,mt,it,lt,Be[Se]);for(let Je=0;Je<ze.length;Je++){const Qe=ze[Je];G?_e&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je+1,0,0,it,lt,Qe.image[Se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je+1,mt,it,lt,Qe.image[Se])}}}x(E)&&D(n.TEXTURE_CUBE_MAP),Ce.__version=pe.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Me(U,E,Q,ae,pe,Ce){const Ie=a.convert(Q.format,Q.colorSpace),ge=a.convert(Q.type),xe=b(Q.internalFormat,Ie,ge,Q.normalized,Q.colorSpace),Ue=r.get(E),nt=r.get(Q);if(nt.__renderTarget=E,!Ue.__hasExternalTextures){const Be=Math.max(1,E.width>>Ce),Le=Math.max(1,E.height>>Ce);pe===n.TEXTURE_3D||pe===n.TEXTURE_2D_ARRAY?t.texImage3D(pe,Ce,xe,Be,Le,E.depth,0,Ie,ge,null):t.texImage2D(pe,Ce,xe,Be,Le,0,Ie,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,U),Vt(E)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,pe,nt.__webglTexture,0,Ct(E)):(pe===n.TEXTURE_2D||pe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,pe,nt.__webglTexture,Ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(U,E,Q){if(n.bindRenderbuffer(n.RENDERBUFFER,U),E.depthBuffer){const ae=E.depthTexture,pe=ae&&ae.isDepthTexture?ae.type:null,Ce=P(E.stencilBuffer,pe),Ie=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Vt(E)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ct(E),Ce,E.width,E.height):Q?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct(E),Ce,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Ce,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ie,n.RENDERBUFFER,U)}else{const ae=E.textures;for(let pe=0;pe<ae.length;pe++){const Ce=ae[pe],Ie=a.convert(Ce.format,Ce.colorSpace),ge=a.convert(Ce.type),xe=b(Ce.internalFormat,Ie,ge,Ce.normalized,Ce.colorSpace);Vt(E)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ct(E),xe,E.width,E.height):Q?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct(E),xe,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,xe,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Xe(U,E,Q){const ae=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pe=r.get(E.depthTexture);if(pe.__renderTarget=E,(!pe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ae){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),pe.__webglTexture===void 0){pe.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,pe.__webglTexture),We(n.TEXTURE_CUBE_MAP,E.depthTexture);const Ue=a.convert(E.depthTexture.format),nt=a.convert(E.depthTexture.type);let Be;E.depthTexture.format===Ir?Be=n.DEPTH_COMPONENT24:E.depthTexture.format===Bs&&(Be=n.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Be,E.width,E.height,0,Ue,nt,null)}}else H(E.depthTexture,0);const Ce=pe.__webglTexture,Ie=Ct(E),ge=ae?n.TEXTURE_CUBE_MAP_POSITIVE_X+Q:n.TEXTURE_2D,xe=E.depthTexture.format===Bs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ir)Vt(E)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,ge,Ce,0,Ie):n.framebufferTexture2D(n.FRAMEBUFFER,xe,ge,Ce,0);else if(E.depthTexture.format===Bs)Vt(E)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xe,ge,Ce,0,Ie):n.framebufferTexture2D(n.FRAMEBUFFER,xe,ge,Ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(U){const E=r.get(U),Q=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const ae=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ae){const pe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ae.removeEventListener("dispose",pe)};ae.addEventListener("dispose",pe),E.__depthDisposeCallback=pe}E.__boundDepthTexture=ae}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(Q)for(let ae=0;ae<6;ae++)Xe(E.__webglFramebuffer[ae],U,ae);else{const ae=U.texture.mipmaps;ae&&ae.length>0?Xe(E.__webglFramebuffer[0],U,0):Xe(E.__webglFramebuffer,U,0)}else if(Q){E.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[ae]),E.__webglDepthbuffer[ae]===void 0)E.__webglDepthbuffer[ae]=n.createRenderbuffer(),De(E.__webglDepthbuffer[ae],U,!1);else{const pe=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=E.__webglDepthbuffer[ae];n.bindRenderbuffer(n.RENDERBUFFER,Ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,Ce)}}else{const ae=U.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),De(E.__webglDepthbuffer,U,!1);else{const pe=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,Ce)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function xt(U,E,Q){const ae=r.get(U);E!==void 0&&Me(ae.__webglFramebuffer,U,U.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Q!==void 0&&dt(U)}function yt(U){const E=U.texture,Q=r.get(U),ae=r.get(E);U.addEventListener("dispose",T);const pe=U.textures,Ce=U.isWebGLCubeRenderTarget===!0,Ie=pe.length>1;if(Ie||(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=E.version,c.memory.textures++),Ce){Q.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[ge]=[];for(let xe=0;xe<E.mipmaps.length;xe++)Q.__webglFramebuffer[ge][xe]=n.createFramebuffer()}else Q.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ge=0;ge<E.mipmaps.length;ge++)Q.__webglFramebuffer[ge]=n.createFramebuffer()}else Q.__webglFramebuffer=n.createFramebuffer();if(Ie)for(let ge=0,xe=pe.length;ge<xe;ge++){const Ue=r.get(pe[ge]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),c.memory.textures++)}if(U.samples>0&&Vt(U)===!1){Q.__webglMultisampledFramebuffer=n.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ge=0;ge<pe.length;ge++){const xe=pe[ge];Q.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Q.__webglColorRenderbuffer[ge]);const Ue=a.convert(xe.format,xe.colorSpace),nt=a.convert(xe.type),Be=b(xe.internalFormat,Ue,nt,xe.normalized,xe.colorSpace,U.isXRRenderTarget===!0),Le=Ct(U);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,Be,U.width,U.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,Q.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),U.depthBuffer&&(Q.__webglDepthRenderbuffer=n.createRenderbuffer(),De(Q.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ce){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),We(n.TEXTURE_CUBE_MAP,E);for(let ge=0;ge<6;ge++)if(E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)Me(Q.__webglFramebuffer[ge][xe],U,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,xe);else Me(Q.__webglFramebuffer[ge],U,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);x(E)&&D(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let ge=0,xe=pe.length;ge<xe;ge++){const Ue=pe[ge],nt=r.get(Ue);let Be=n.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Be=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Be,nt.__webglTexture),We(Be,Ue),Me(Q.__webglFramebuffer,U,Ue,n.COLOR_ATTACHMENT0+ge,Be,0),x(Ue)&&D(Be)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ge=U.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,ae.__webglTexture),We(ge,E),E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)Me(Q.__webglFramebuffer[xe],U,E,n.COLOR_ATTACHMENT0,ge,xe);else Me(Q.__webglFramebuffer,U,E,n.COLOR_ATTACHMENT0,ge,0);x(E)&&D(ge),t.unbindTexture()}U.depthBuffer&&dt(U)}function ut(U){const E=U.textures;for(let Q=0,ae=E.length;Q<ae;Q++){const pe=E[Q];if(x(pe)){const Ce=I(U),Ie=r.get(pe).__webglTexture;t.bindTexture(Ce,Ie),D(Ce),t.unbindTexture()}}}const ft=[],Dt=[];function Lt(U){if(U.samples>0){if(Vt(U)===!1){const E=U.textures,Q=U.width,ae=U.height;let pe=n.COLOR_BUFFER_BIT;const Ce=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ie=r.get(U),ge=E.length>1;if(ge)for(let Ue=0;Ue<E.length;Ue++)t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const xe=U.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ue=0;Ue<E.length;Ue++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(pe|=n.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(pe|=n.STENCIL_BUFFER_BIT)),ge){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ue]);const nt=r.get(E[Ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,nt,0)}n.blitFramebuffer(0,0,Q,ae,0,0,Q,ae,pe,n.NEAREST),d===!0&&(ft.length=0,Dt.length=0,ft.push(n.COLOR_ATTACHMENT0+Ue),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(ft.push(Ce),Dt.push(Ce),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Dt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let Ue=0;Ue<E.length;Ue++){t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ue]);const nt=r.get(E[Ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,nt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&d){const E=U.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Ct(U){return Math.min(o.maxSamples,U.samples)}function Vt(U){const E=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function V(U){const E=c.render.frame;m.get(U)!==E&&(m.set(U,E),U.update())}function $t(U,E){const Q=U.colorSpace,ae=U.format,pe=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Q!==au&&Q!==cs&&(Ot.getTransfer(Q)===Kt?(ae!==Xi||pe!==bi)&&_t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",Q)),E}function wt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=me,this.resetTextureUnits=se,this.getTextureUnits=q,this.setTextureUnits=ee,this.setTexture2D=H,this.setTexture2DArray=Z,this.setTexture3D=X,this.setTextureCube=N,this.rebindTextures=xt,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Vt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function B4(n,e){function t(r,o=cs){let a;const c=Ot.getTransfer(o);if(r===bi)return n.UNSIGNED_BYTE;if(r===Wp)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Xp)return n.UNSIGNED_SHORT_5_5_5_1;if(r===jx)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===Yx)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===Wx)return n.BYTE;if(r===Xx)return n.SHORT;if(r===Ja)return n.UNSIGNED_SHORT;if(r===Gp)return n.INT;if(r===ar)return n.UNSIGNED_INT;if(r===tr)return n.FLOAT;if(r===lr)return n.HALF_FLOAT;if(r===qx)return n.ALPHA;if(r===Kx)return n.RGB;if(r===Xi)return n.RGBA;if(r===Ir)return n.DEPTH_COMPONENT;if(r===Bs)return n.DEPTH_STENCIL;if(r===$x)return n.RED;if(r===jp)return n.RED_INTEGER;if(r===Hs)return n.RG;if(r===Yp)return n.RG_INTEGER;if(r===qp)return n.RGBA_INTEGER;if(r===Xc||r===jc||r===Yc||r===qc)if(c===Kt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Xc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===jc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Yc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===qc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Xc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===jc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Yc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===qc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===wh||r===Ah||r===Rh||r===Ch)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===wh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ah)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Rh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ch)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===bh||r===Ph||r===Dh||r===Lh||r===Nh||r===su||r===Ih)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===bh||r===Ph)return c===Kt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Dh)return c===Kt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(r===Lh)return a.COMPRESSED_R11_EAC;if(r===Nh)return a.COMPRESSED_SIGNED_R11_EAC;if(r===su)return a.COMPRESSED_RG11_EAC;if(r===Ih)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Uh||r===Fh||r===Oh||r===Bh||r===kh||r===zh||r===Vh||r===Hh||r===Gh||r===Wh||r===Xh||r===jh||r===Yh||r===qh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Uh)return c===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Fh)return c===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Oh)return c===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bh)return c===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===kh)return c===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===zh)return c===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vh)return c===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Hh)return c===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Gh)return c===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Wh)return c===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xh)return c===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jh)return c===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Yh)return c===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===qh)return c===Kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Kh||r===$h||r===Zh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Kh)return c===Kt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===$h)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Zh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Qh||r===Jh||r===ou||r===ep)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Qh)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Jh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ou)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ep)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===el?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const k4=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z4=`
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

}`;class V4{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new ay(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new cr({vertexShader:k4,fragmentShader:z4,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ur(new Mu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class H4 extends Xs{constructor(e,t){super();const r=this;let o=null,a=1,c=null,u="local-floor",d=1,h=null,m=null,v=null,g=null,y=null,M=null;const A=typeof XRWebGLBinding<"u",S=new V4,x={},D=t.getContextAttributes();let I=null,b=null;const P=[],L=[],F=new jt;let T=null,w=null;const B=new Ci;B.viewport=new hn;const Y=new Ci;Y.viewport=new hn;const J=[B,Y],se=new KA;let q=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let fe=P[oe];return fe===void 0&&(fe=new Pd,P[oe]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(oe){let fe=P[oe];return fe===void 0&&(fe=new Pd,P[oe]=fe),fe.getGripSpace()},this.getHand=function(oe){let fe=P[oe];return fe===void 0&&(fe=new Pd,P[oe]=fe),fe.getHandSpace()};function me(oe){const fe=L.indexOf(oe.inputSource);if(fe===-1)return;const Re=P[fe];Re!==void 0&&(Re.update(oe.inputSource,oe.frame,h||c),Re.dispatchEvent({type:oe.type,data:oe.inputSource}))}function $(){o.removeEventListener("select",me),o.removeEventListener("selectstart",me),o.removeEventListener("selectend",me),o.removeEventListener("squeeze",me),o.removeEventListener("squeezestart",me),o.removeEventListener("squeezeend",me),o.removeEventListener("end",$),o.removeEventListener("inputsourceschange",H);for(let oe=0;oe<P.length;oe++){const fe=L[oe];fe!==null&&(L[oe]=null,P[oe].disconnect(fe))}q=null,ee=null,S.reset();for(const oe in x)delete x[oe];if(e.setRenderTarget(I),y=null,g=null,v=null,o=null,b=null,Ke.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(F.width,F.height,!1),w!==null){const oe=w.camera;oe.fov=w.fov,oe.zoom=w.zoom,oe.updateProjectionMatrix(),w=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){a=oe,r.isPresenting===!0&&_t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){u=oe,r.isPresenting===!0&&_t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(oe){h=oe},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(oe){if(o=oe,o!==null){if(I=e.getRenderTarget(),o.addEventListener("select",me),o.addEventListener("selectstart",me),o.addEventListener("selectend",me),o.addEventListener("squeeze",me),o.addEventListener("squeezestart",me),o.addEventListener("squeezeend",me),o.addEventListener("end",$),o.addEventListener("inputsourceschange",H),D.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(F),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,ye=null,Me=null;D.depth&&(Me=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=D.stencil?Bs:Ir,ye=D.stencil?el:ar);const De={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:a};v=this.getBinding(),g=v.createProjectionLayer(De),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),b=new ji(g.textureWidth,g.textureHeight,{format:Xi,type:bi,depthTexture:new tl(g.textureWidth,g.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const Re={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(o,t,Re),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),b=new ji(y.framebufferWidth,y.framebufferHeight,{format:Xi,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await o.requestReferenceSpace(u),Ke.setContext(o),Ke.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function H(oe){for(let fe=0;fe<oe.removed.length;fe++){const Re=oe.removed[fe],ye=L.indexOf(Re);ye>=0&&(L[ye]=null,P[ye].disconnect(Re))}for(let fe=0;fe<oe.added.length;fe++){const Re=oe.added[fe];let ye=L.indexOf(Re);if(ye===-1){for(let De=0;De<P.length;De++)if(De>=L.length){L.push(Re),ye=De;break}else if(L[De]===null){L[De]=Re,ye=De;break}if(ye===-1)break}const Me=P[ye];Me&&Me.connect(Re)}}const Z=new ce,X=new ce;function N(oe,fe,Re){Z.setFromMatrixPosition(fe.matrixWorld),X.setFromMatrixPosition(Re.matrixWorld);const ye=Z.distanceTo(X),Me=fe.projectionMatrix.elements,De=Re.projectionMatrix.elements,Xe=Me[14]/(Me[10]-1),dt=Me[14]/(Me[10]+1),xt=(Me[9]+1)/Me[5],yt=(Me[9]-1)/Me[5],ut=(Me[8]-1)/Me[0],ft=(De[8]+1)/De[0],Dt=Xe*ut,Lt=Xe*ft,Ct=ye/(-ut+ft),Vt=Ct*-ut;if(fe.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Vt),oe.translateZ(Ct),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),Me[10]===-1)oe.projectionMatrix.copy(fe.projectionMatrix),oe.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const V=Xe+Ct,$t=dt+Ct,wt=Dt-Vt,U=Lt+(ye-Vt),E=xt*dt/$t*V,Q=yt*dt/$t*V;oe.projectionMatrix.makePerspective(wt,U,E,Q,V,$t),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function re(oe,fe){fe===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(fe.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(o===null)return;let fe=oe.near,Re=oe.far;S.texture!==null&&(S.depthNear>0&&(fe=S.depthNear),S.depthFar>0&&(Re=S.depthFar)),se.near=Y.near=B.near=fe,se.far=Y.far=B.far=Re,(q!==se.near||ee!==se.far)&&(o.updateRenderState({depthNear:se.near,depthFar:se.far}),q=se.near,ee=se.far),se.layers.mask=oe.layers.mask|6,B.layers.mask=se.layers.mask&-5,Y.layers.mask=se.layers.mask&-3;const ye=oe.parent,Me=se.cameras;re(se,ye);for(let De=0;De<Me.length;De++)re(Me[De],ye);Me.length===2?N(se,B,Y):se.projectionMatrix.copy(B.projectionMatrix),w===null&&oe.isPerspectiveCamera&&(w={camera:oe,fov:oe.fov,zoom:oe.zoom}),we(oe,se,ye)};function we(oe,fe,Re){Re===null?oe.matrix.copy(fe.matrixWorld):(oe.matrix.copy(Re.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(fe.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(fe.projectionMatrix),oe.projectionMatrixInverse.copy(fe.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=tp*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return se},this.getFoveation=function(){if(!(g===null&&y===null))return d},this.setFoveation=function(oe){d=oe,g!==null&&(g.fixedFoveation=oe),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=oe)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(se)},this.getCameraTexture=function(oe){return x[oe]};let qe=null;function We(oe,fe){if(m=fe.getViewerPose(h||c),M=fe,m!==null){const Re=m.views;y!==null&&(e.setRenderTargetFramebuffer(b,y.framebuffer),e.setRenderTarget(b));let ye=!1;Re.length!==se.cameras.length&&(se.cameras.length=0,ye=!0);for(let dt=0;dt<Re.length;dt++){const xt=Re[dt];let yt=null;if(y!==null)yt=y.getViewport(xt);else{const ft=v.getViewSubImage(g,xt);yt=ft.viewport,dt===0&&(e.setRenderTargetTextures(b,ft.colorTexture,ft.depthStencilTexture),e.setRenderTarget(b))}let ut=J[dt];ut===void 0&&(ut=new Ci,ut.layers.enable(dt),ut.viewport=new hn,J[dt]=ut),ut.matrix.fromArray(xt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(xt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(yt.x,yt.y,yt.width,yt.height),dt===0&&(se.matrix.copy(ut.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale)),ye===!0&&se.cameras.push(ut)}const Me=o.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){v=r.getBinding();const dt=v.getDepthInformation(Re[0]);dt&&dt.isValid&&dt.texture&&S.init(dt,o.renderState)}if(Me&&Me.includes("camera-access")&&A){e.state.unbindTexture(),v=r.getBinding();for(let dt=0;dt<Re.length;dt++){const xt=Re[dt].camera;if(xt){let yt=x[xt];yt||(yt=new ay,x[xt]=yt);const ut=v.getCameraImage(xt);yt.sourceTexture=ut}}}}for(let Re=0;Re<P.length;Re++){const ye=L[Re],Me=P[Re];ye!==null&&Me!==void 0&&Me.update(ye,fe,h||c)}qe&&qe(oe,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),M=null}const Ke=new fy;Ke.setAnimationLoop(We),this.setAnimationLoop=function(oe){qe=oe},this.dispose=function(){}}}const G4=new pn,_y=new Et;_y.set(-1,0,0,0,1,0,0,0,1);function W4(n,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,ly(n)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function o(S,x,D,I,b){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?a(S,x):x.isMeshLambertMaterial?(a(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(a(S,x),v(S,x)):x.isMeshPhongMaterial?(a(S,x),m(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(a(S,x),g(S,x),x.isMeshPhysicalMaterial&&y(S,x,b)):x.isMeshMatcapMaterial?(a(S,x),M(S,x)):x.isMeshDepthMaterial?a(S,x):x.isMeshDistanceMaterial?(a(S,x),A(S,x)):x.isMeshNormalMaterial?a(S,x):x.isLineBasicMaterial?(c(S,x),x.isLineDashedMaterial&&u(S,x)):x.isPointsMaterial?d(S,x,D,I):x.isSpriteMaterial?h(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===ai&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===ai&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const D=e.get(x),I=D.envMap,b=D.envMapRotation;I&&(S.envMap.value=I,S.envMapRotation.value.setFromMatrix4(G4.makeRotationFromEuler(b)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(_y),S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function c(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function u(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function d(S,x,D,I){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*D,S.scale.value=I*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function m(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function v(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function g(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,D){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ai&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.retroreflectivity>0&&(S.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function A(S,x){const D=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function X4(n,e,t,r){let o={},a={},c=[];const u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(b,P){const L=P.program;r.uniformBlockBinding(b,L)}function h(b,P){let L=o[b.id];L===void 0&&(S(b),L=m(b),o[b.id]=L,b.addEventListener("dispose",D));const F=P.program;r.updateUBOMapping(b,F);const T=e.render.frame;a[b.id]!==T&&(g(b),a[b.id]=T)}function m(b){const P=v();b.__bindingPointIndex=P;const L=n.createBuffer(),F=b.__size,T=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,L),n.bufferData(n.UNIFORM_BUFFER,F,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,P,L),L}function v(){for(let b=0;b<u;b++)if(c.indexOf(b)===-1)return c.push(b),b;return Wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const P=o[b.id],L=b.uniforms,F=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,P);for(let T=0,w=L.length;T<w;T++){const B=L[T];if(Array.isArray(B))for(let Y=0,J=B.length;Y<J;Y++)y(B[Y],T,Y,F);else y(B,T,0,F)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function y(b,P,L,F){if(A(b,P,L,F)===!0){const T=b.__offset,w=b.value;if(Array.isArray(w)){let B=0;for(let Y=0;Y<w.length;Y++){const J=w[Y],se=x(J);M(J,b.__data,B),typeof J!="number"&&typeof J!="boolean"&&!J.isMatrix3&&!ArrayBuffer.isView(J)&&(B+=se.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(w,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,b.__data)}}function M(b,P,L){typeof b=="number"||typeof b=="boolean"?P[0]=b:b.isMatrix3?(P[0]=b.elements[0],P[1]=b.elements[1],P[2]=b.elements[2],P[3]=0,P[4]=b.elements[3],P[5]=b.elements[4],P[6]=b.elements[5],P[7]=0,P[8]=b.elements[6],P[9]=b.elements[7],P[10]=b.elements[8],P[11]=0):ArrayBuffer.isView(b)?P.set(new b.constructor(b.buffer,b.byteOffset,P.length)):b.toArray(P,L)}function A(b,P,L,F){const T=b.value,w=P+"_"+L;if(F[w]===void 0)return typeof T=="number"||typeof T=="boolean"?F[w]=T:ArrayBuffer.isView(T)?F[w]=T.slice():F[w]=T.clone(),!0;{const B=F[w];if(typeof T=="number"||typeof T=="boolean"){if(B!==T)return F[w]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(B.equals(T)===!1)return B.copy(T),!0}}return!1}function S(b){const P=b.uniforms;let L=0;const F=16;for(let w=0,B=P.length;w<B;w++){const Y=Array.isArray(P[w])?P[w]:[P[w]];for(let J=0,se=Y.length;J<se;J++){const q=Y[J],ee=Array.isArray(q.value)?q.value:[q.value];for(let me=0,$=ee.length;me<$;me++){const H=ee[me],Z=x(H),X=L%F,N=X%Z.boundary,re=X+N;L+=N,re!==0&&F-re<Z.storage&&(L+=F-re),q.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=L,L+=Z.storage}}}const T=L%F;return T>0&&(L+=F-T),b.__size=L,b.__cache={},this}function x(b){const P={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(P.boundary=4,P.storage=4):b.isVector2?(P.boundary=8,P.storage=8):b.isVector3||b.isColor?(P.boundary=16,P.storage=12):b.isVector4?(P.boundary=16,P.storage=16):b.isMatrix3?(P.boundary=48,P.storage=48):b.isMatrix4?(P.boundary=64,P.storage=64):b.isTexture?_t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(P.boundary=16,P.storage=b.byteLength):_t("WebGLRenderer: Unsupported uniform value type.",b),P}function D(b){const P=b.target;P.removeEventListener("dispose",D);const L=c.indexOf(P.__bindingPointIndex);c.splice(L,1),n.deleteBuffer(o[P.id]),delete o[P.id],delete a[P.id]}function I(){for(const b in o)n.deleteBuffer(o[b]);c=[],o={},a={}}return{bind:d,update:h,dispose:I}}const j4=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ji=null;function Y4(){return Ji===null&&(Ji=new UA(j4,16,16,Hs,lr),Ji.name="DFG_LUT",Ji.minFilter=Yn,Ji.magFilter=Yn,Ji.wrapS=Cr,Ji.wrapT=Cr,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}class q4{constructor(e={}){const{canvas:t=uA(),context:r=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:y=bi}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=c;const A=y,S=new Set([qp,Yp,jp]),x=new Set([bi,ar,Ja,el,Wp,Xp]),D=new Uint32Array(4),I=new Int32Array(4),b=new ce;let P=null,L=null;const F=[],T=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let Y=!1,J=null,se=null,q=null,ee=null;this._outputColorSpace=Ri;let me=0,$=0,H=null,Z=-1,X=null;const N=new hn,re=new hn;let we=null;const qe=new Pt(0);let We=0,Ke=t.width,oe=t.height,fe=1,Re=null,ye=null;const Me=new hn(0,0,Ke,oe),De=new hn(0,0,Ke,oe);let Xe=!1;const dt=new ry;let xt=!1,yt=!1;const ut=new pn,ft=new ce,Dt=new hn,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ct=!1;function Vt(){return H===null?fe:1}let V=r;function $t(C,W){return t.getContext(C,W)}let wt,U,E,Q,ae,pe,Ce,Ie,ge,xe,Ue,nt,Be,Le,it,lt,mt,G,Fe,_e,Ne,ze,Se;try{const C={alpha:!0,depth:o,stencil:a,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hp}`),t.addEventListener("webglcontextlost",kt,!1),t.addEventListener("webglcontextrestored",Nt,!1),t.addEventListener("webglcontextcreationerror",yn,!1),V===null){const W="webgl2";if(V=$t(W,C),V===null)throw $t(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Je()}catch(C){throw t.removeEventListener("webglcontextlost",kt,!1),t.removeEventListener("webglcontextrestored",Nt,!1),t.removeEventListener("webglcontextcreationerror",yn,!1),Wt("WebGLRenderer: "+C.message),C}function Je(){wt=new Yb(V),wt.init(),Ne=new B4(V,wt),U=new Ob(V,wt,e,Ne),E=new F4(V,wt),U.reversedDepthBuffer&&g&&E.buffers.depth.setReversed(!0),se=V.createFramebuffer(),q=V.createFramebuffer(),ee=V.createFramebuffer(),Q=new $b(V),ae=new M4,pe=new O4(V,wt,E,ae,U,Ne,Q),Ce=new jb(B),Ie=new QA(V),ze=new Ub(V,Ie),ge=new qb(V,Ie,Q,ze),xe=new Qb(V,ge,Ie,ze,Q),G=new Zb(V,U,pe),it=new Bb(ae),Ue=new S4(B,Ce,wt,U,ze,it),nt=new W4(B,ae),Be=new T4,Le=new P4(wt),mt=new Ib(B,Ce,E,xe,M,d),lt=new U4(B,xe,U),Se=new X4(V,Q,U,E),Fe=new Fb(V,wt,Q),_e=new Kb(V,wt,Q),Q.programs=Ue.programs,B.capabilities=U,B.extensions=wt,B.properties=ae,B.renderLists=Be,B.shadowMap=lt,B.state=E,B.info=Q}A!==bi&&(w=new eP(A,t.width,t.height,u,o,a));const Qe=new H4(B,V);this.xr=Qe,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=wt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=wt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(C){C!==void 0&&(fe=C,this.setSize(Ke,oe,!1))},this.getSize=function(C){return C.set(Ke,oe)},this.setSize=function(C,W,ue=!0){if(Qe.isPresenting){_t("WebGLRenderer: Can't change size while VR device is presenting.");return}Ke=C,oe=W,t.width=Math.floor(C*fe),t.height=Math.floor(W*fe),ue===!0&&(t.style.width=C+"px",t.style.height=W+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(Ke*fe,oe*fe).floor()},this.setDrawingBufferSize=function(C,W,ue){Ke=C,oe=W,fe=ue,t.width=Math.floor(C*ue),t.height=Math.floor(W*ue),this.setViewport(0,0,C,W)},this.setEffects=function(C){if(A===bi){Wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let W=0;W<C.length;W++)if(C[W].isOutputPass===!0){_t("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(N)},this.getViewport=function(C){return C.copy(Me)},this.setViewport=function(C,W,ue,ne){C.isVector4?Me.set(C.x,C.y,C.z,C.w):Me.set(C,W,ue,ne),E.viewport(N.copy(Me).multiplyScalar(fe).round())},this.getScissor=function(C){return C.copy(De)},this.setScissor=function(C,W,ue,ne){C.isVector4?De.set(C.x,C.y,C.z,C.w):De.set(C,W,ue,ne),E.scissor(re.copy(De).multiplyScalar(fe).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(C){E.setScissorTest(Xe=C)},this.setOpaqueSort=function(C){Re=C},this.setTransparentSort=function(C){ye=C},this.getClearColor=function(C){return C.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor(...arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha(...arguments)},this.clear=function(C=!0,W=!0,ue=!0){let ne=0;if(C){let te=!1;if(H!==null){const He=H.texture.format;te=S.has(He)}if(te){const He=H.texture.type,ke=x.has(He),Ve=mt.getClearColor(),et=mt.getClearAlpha(),st=Ve.r,Mt=Ve.g,Tt=Ve.b;ke?(D[0]=st,D[1]=Mt,D[2]=Tt,D[3]=et,V.clearBufferuiv(V.COLOR,0,D)):(I[0]=st,I[1]=Mt,I[2]=Tt,I[3]=et,V.clearBufferiv(V.COLOR,0,I))}else ne|=V.COLOR_BUFFER_BIT}W&&(ne|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(ne|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&V.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),J=C},this.dispose=function(){t.removeEventListener("webglcontextlost",kt,!1),t.removeEventListener("webglcontextrestored",Nt,!1),t.removeEventListener("webglcontextcreationerror",yn,!1),mt.dispose(),Be.dispose(),Le.dispose(),ae.dispose(),Ce.dispose(),xe.dispose(),ze.dispose(),Se.dispose(),Ue.dispose(),Qe.dispose(),Qe.removeEventListener("sessionstart",ps),Qe.removeEventListener("sessionend",ms),Rn.stop()};function kt(C){C.preventDefault(),e1("WebGLRenderer: Context Lost."),Y=!0}function Nt(){e1("WebGLRenderer: Context Restored."),Y=!1;const C=Q.autoReset,W=lt.enabled,ue=lt.autoUpdate,ne=lt.needsUpdate,te=lt.type;Je(),Q.autoReset=C,lt.enabled=W,lt.autoUpdate=ue,lt.needsUpdate=ne,lt.type=te}function yn(C){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ln(C){const W=C.target;W.removeEventListener("dispose",Ln),ur(W)}function ur(C){Fr(C),ae.remove(C)}function Fr(C){const W=ae.get(C).programs;W!==void 0&&(W.forEach(function(ue){Ue.releaseProgram(ue)}),C.isShaderMaterial&&Ue.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,ue,ne,te,He){W===null&&(W=Lt);const ke=te.isMesh&&te.matrixWorld.determinantAffine()<0,Ve=at(C,W,ue,ne,te);E.setMaterial(ne,ke);let et=ue.index,st=1;if(ne.wireframe===!0){if(et=ge.getWireframeAttribute(ue),et===void 0)return;st=2}const Mt=ue.drawRange,Tt=ue.attributes.position;let $e=Mt.start*st,Ut=(Mt.start+Mt.count)*st;He!==null&&($e=Math.max($e,He.start*st),Ut=Math.min(Ut,(He.start+He.count)*st)),et!==null?($e=Math.max($e,0),Ut=Math.min(Ut,et.count)):Tt!=null&&($e=Math.max($e,0),Ut=Math.min(Ut,Tt.count));const un=Ut-$e;if(un<0||un===1/0)return;ze.setup(te,ne,Ve,ue,et);let Zt,Xt=Fe;if(et!==null&&(Zt=Ie.get(et),Xt=_e,Xt.setIndex(Zt)),te.isMesh)ne.wireframe===!0?(E.setLineWidth(ne.wireframeLinewidth*Vt()),Xt.setMode(V.LINES)):Xt.setMode(V.TRIANGLES);else if(te.isLine){let Sn=ne.linewidth;Sn===void 0&&(Sn=1),E.setLineWidth(Sn*Vt()),te.isLineSegments?Xt.setMode(V.LINES):te.isLineLoop?Xt.setMode(V.LINE_LOOP):Xt.setMode(V.LINE_STRIP)}else te.isPoints?Xt.setMode(V.POINTS):te.isSprite&&Xt.setMode(V.TRIANGLES);if(te.isBatchedMesh)if(wt.get("WEBGL_multi_draw"))Xt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const Sn=te._multiDrawStarts,je=te._multiDrawCounts,mn=te._multiDrawCount,Ft=et?Ie.get(et).bytesPerElement:1,Bn=ae.get(ne).currentProgram.getUniforms();for(let At=0;At<mn;At++)Bn.setValue(V,"_gl_DrawID",At),Xt.render(Sn[At]/Ft,je[At])}else if(te.isInstancedMesh)Xt.renderInstances($e,un,te.count);else if(ue.isInstancedBufferGeometry){const Sn=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,je=Math.min(ue.instanceCount,Sn);Xt.renderInstances($e,un,je)}else Xt.render($e,un)};function Yi(C,W,ue,ne){J!==null&&C.isNodeMaterial&&J.setObject(ne,C),xt===!0&&it.setState(C,ue,!1),C.transparent===!0&&C.side===Rr&&C.forceSinglePass===!1?(C.side=ai,C.needsUpdate=!0,ve(C,W,ne),C.side=zs,C.needsUpdate=!0,ve(C,W,ne),C.side=Rr):ve(C,W,ne)}this.compile=function(C,W,ue=null){ue===null&&(ue=C),J!==null&&J.renderStart(C,W,ue),L=Le.get(ue),L.init(W),T.push(L),ue.traverseVisible(function(te){te.isLight&&te.layers.test(W.layers)&&(L.pushLight(te),te.castShadow&&L.pushShadow(te))}),C!==ue&&C.traverseVisible(function(te){te.isLight&&te.layers.test(W.layers)&&(L.pushLight(te),te.castShadow&&L.pushShadow(te))}),L.setupLights(),J!==null&&J.updateLights(L.state.lightsArray),yt=this.localClippingEnabled,xt=it.init(this.clippingPlanes,yt),xt===!0&&it.setGlobalState(this.clippingPlanes,W),J!==null&&lt.render(L.state.shadowsArray,ue,W);const ne=new Set;return C.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const He=te.material;if(He)if(Array.isArray(He))for(let ke=0;ke<He.length;ke++){const Ve=He[ke];Yi(Ve,ue,W,te),ne.add(Ve)}else Yi(He,ue,W,te),ne.add(He)}),L=T.pop(),J!==null&&J.renderEnd(),ne},this.compileAsync=function(C,W,ue=null){const ne=this.compile(C,W,ue);return new Promise(te=>{function He(){if(ne.forEach(function(ke){const et=ae.get(ke).currentProgram;(et===void 0||et.isReady())&&ne.delete(ke)}),ne.size===0){te(C);return}setTimeout(He,10)}wt.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let An=null;function Yo(C){An&&An(C)}function ps(){Rn.stop()}function ms(){Rn.start()}const Rn=new fy;Rn.setAnimationLoop(Yo),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(C){An=C,Qe.setAnimationLoop(C),C===null?Rn.stop():Rn.start()},Qe.addEventListener("sessionstart",ps),Qe.addEventListener("sessionend",ms),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;J!==null&&J.renderStart(C,W);const ue=Qe.enabled===!0&&Qe.isPresenting===!0,ne=w!==null&&(H===null||ue)&&w.begin(B,H);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Qe.enabled===!0&&Qe.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Qe.cameraAutoUpdate===!0&&Qe.updateCamera(W),W=Qe.getCamera()),C.isScene===!0&&C.onBeforeRender(B,C,W,H),L=Le.get(C,T.length),L.init(W),L.state.textureUnits=pe.getTextureUnits(),T.push(L),ut.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),dt.setFromProjectionMatrix(ut,nr,W.reversedDepth),yt=this.localClippingEnabled,xt=it.init(this.clippingPlanes,yt),P=Be.get(C,F.length),P.init(),F.push(P),Qe.enabled===!0&&Qe.isPresenting===!0){const ke=B.xr.getDepthSensingMesh();ke!==null&&fr(ke,W,-1/0,B.sortObjects)}fr(C,W,0,B.sortObjects),P.finish(),J!==null&&J.updateLights(L.state.lightsArray),B.sortObjects===!0&&P.sort(Re,ye),Ct=Qe.enabled===!1||Qe.isPresenting===!1||Qe.hasDepthSensing()===!1,Ct&&mt.addToRenderList(P,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xt===!0&&it.beginShadows();const te=L.state.shadowsArray;if(lt.render(te,C,W),xt===!0&&it.endShadows(),(ne&&w.hasRenderPass())===!1){const ke=P.opaque,Ve=P.transmissive;if(L.setupLights(),W.isArrayCamera){const et=W.cameras;if(Ve.length>0)for(let st=0,Mt=et.length;st<Mt;st++){const Tt=et[st];dr(ke,Ve,C,Tt)}Ct&&mt.render(C);for(let st=0,Mt=et.length;st<Mt;st++){const Tt=et[st];Or(P,C,Tt,Tt.viewport)}}else Ve.length>0&&dr(ke,Ve,C,W),Ct&&mt.render(C),Or(P,C,W)}H!==null&&$===0&&(pe.updateMultisampleRenderTarget(H),pe.updateRenderTargetMipmap(H)),ne&&w.end(B),C.isScene===!0&&C.onAfterRender(B,C,W),ze.resetDefaultState(),Z=-1,X=null,T.pop(),T.length>0?(L=T[T.length-1],pe.setTextureUnits(L.state.textureUnits),xt===!0&&it.setGlobalState(B.clippingPlanes,L.state.camera)):L=null,F.pop(),F.length>0?P=F[F.length-1]:P=null,J!==null&&J.renderEnd()};function fr(C,W,ue,ne){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)ue=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLightProbeGrid)L.pushLightProbeGrid(C);else if(C.isLight)L.pushLight(C),C.castShadow&&L.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(dt)){ne&&Dt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ut);const ke=xe.update(C),Ve=C.material;Ve.visible&&P.push(C,ke,Ve,ue,Dt.z,null,W)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(dt))){const ke=xe.update(C),Ve=C.material;if(ne&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Dt.copy(C.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),Dt.copy(ke.boundingSphere.center)),Dt.applyMatrix4(C.matrixWorld).applyMatrix4(ut)),Array.isArray(Ve)){const et=ke.groups;for(let st=0,Mt=et.length;st<Mt;st++){const Tt=et[st],$e=Ve[Tt.materialIndex];$e&&$e.visible&&P.push(C,ke,$e,ue,Dt.z,Tt,W)}}else Ve.visible&&P.push(C,ke,Ve,ue,Dt.z,null,W)}}const He=C.children;for(let ke=0,Ve=He.length;ke<Ve;ke++)fr(He[ke],W,ue,ne)}function Or(C,W,ue,ne){const{opaque:te,transmissive:He,transparent:ke}=C;L.setupLightsView(ue),xt===!0&&it.setGlobalState(B.clippingPlanes,ue),ne&&E.viewport(N.copy(ne)),te.length>0&&k(te,W,ue),He.length>0&&k(He,W,ue),ke.length>0&&k(ke,W,ue),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function dr(C,W,ue,ne){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ne.id]===void 0){const $e=wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ne.id]=new ji(1,1,{generateMipmaps:!0,type:$e?lr:bi,minFilter:Os,samples:Math.max(4,U.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ot.workingColorSpace})}const He=L.state.transmissionRenderTarget[ne.id],ke=ne.viewport||N;He.setSize(ke.z*B.transmissionResolutionScale,ke.w*B.transmissionResolutionScale);const Ve=B.getRenderTarget(),et=B.getActiveCubeFace(),st=B.getActiveMipmapLevel();B.setRenderTarget(He),B.getClearColor(qe),We=B.getClearAlpha(),We<1&&B.setClearColor(16777215,.5),B.clear(),Ct&&mt.render(ue);const Mt=B.toneMapping;B.toneMapping=sr;const Tt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),L.setupLightsView(ne),xt===!0&&it.setGlobalState(B.clippingPlanes,ne),k(C,ue,ne),pe.updateMultisampleRenderTarget(He),pe.updateRenderTargetMipmap(He),wt.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Ut=0,un=W.length;Ut<un;Ut++){const Zt=W[Ut],{object:Xt,geometry:Sn,material:je,group:mn}=Zt;if(je.side===Rr&&Xt.layers.test(ne.layers)){const Ft=je.side;je.side=ai,je.needsUpdate=!0,he(Xt,ue,ne,Sn,je,mn),je.side=Ft,je.needsUpdate=!0,$e=!0}}$e===!0&&(pe.updateMultisampleRenderTarget(He),pe.updateRenderTargetMipmap(He))}B.setRenderTarget(Ve,et,st),B.setClearColor(qe,We),Tt!==void 0&&(ne.viewport=Tt),B.toneMapping=Mt}function k(C,W,ue){const ne=W.isScene===!0?W.overrideMaterial:null;for(let te=0,He=C.length;te<He;te++){const ke=C[te],{object:Ve,geometry:et,group:st}=ke;let Mt=ke.material;Mt.allowOverride===!0&&ne!==null&&(Mt=ne),Ve.layers.test(ue.layers)&&he(Ve,W,ue,et,Mt,st)}}function he(C,W,ue,ne,te,He){J!==null&&te.isNodeMaterial&&J.setObject(C,te),C.onBeforeRender(B,W,ue,ne,te,He),C.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),te.onBeforeRender(B,W,ue,ne,C,He),te.transparent===!0&&te.side===Rr&&te.forceSinglePass===!1?(te.side=ai,te.needsUpdate=!0,B.renderBufferDirect(ue,W,ne,te,C,He),te.side=zs,te.needsUpdate=!0,B.renderBufferDirect(ue,W,ne,te,C,He),te.side=Rr):B.renderBufferDirect(ue,W,ne,te,C,He),C.onAfterRender(B,W,ue,ne,te,He)}function ve(C,W,ue){W.isScene!==!0&&(W=Lt);const ne=ae.get(C),te=L.state.lights,He=L.state.shadowsArray,ke=te.state.version,Ve=Ue.getParameters(C,te.state,He,W,ue,L.state.lightProbeGridArray),et=Ue.getProgramCacheKey(Ve);let st=ne.programs;ne.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?W.environment:null,ne.fog=W.fog;const Mt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ne.envMap=Ce.get(C.envMap||ne.environment,Mt),ne.envMapRotation=ne.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,st===void 0&&(C.addEventListener("dispose",Ln),st=new Map,ne.programs=st);let Tt=st.get(et);if(Tt!==void 0){if(ne.currentProgram===Tt&&ne.lightsStateVersion===ke)return ct(C,Ve),Tt}else Ve.uniforms=Ue.getUniforms(C),J!==null&&C.isNodeMaterial&&J.build(C,ue,Ve),C.onBeforeCompile(Ve,B),Tt=Ue.acquireProgram(Ve,et),st.set(et,Tt),ne.uniforms=Ve.uniforms;const $e=ne.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&($e.clippingPlanes=it.uniform),ct(C,Ve),ne.needsLights=Jt(C),ne.lightsStateVersion=ke,ne.needsLights&&($e.ambientLightColor.value=te.state.ambient,$e.lightProbe.value=te.state.probe,$e.sunLights.value=te.state.sun,$e.sunLightShadows.value=te.state.sunShadow,$e.directionalLights.value=te.state.directional,$e.directionalLightShadows.value=te.state.directionalShadow,$e.spotLights.value=te.state.spot,$e.spotLightShadows.value=te.state.spotShadow,$e.rectAreaLights.value=te.state.rectArea,$e.ltc_1.value=te.state.rectAreaLTC1,$e.ltc_2.value=te.state.rectAreaLTC2,$e.pointLights.value=te.state.point,$e.pointLightShadows.value=te.state.pointShadow,$e.hemisphereLights.value=te.state.hemi,$e.sunShadowMatrix.value=te.state.sunShadowMatrix,$e.sunShadowCascade.value=te.state.sunShadowCascade,$e.directionalShadowMatrix.value=te.state.directionalShadowMatrix,$e.spotLightMatrix.value=te.state.spotLightMatrix,$e.spotLightMap.value=te.state.spotLightMap,$e.pointShadowMatrix.value=te.state.pointShadowMatrix),ne.lightProbeGrid=L.state.lightProbeGridArray.length>0,ne.currentProgram=Tt,ne.uniformsList=null,Tt}function Oe(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=Kc.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function ct(C,W){const ue=ae.get(C);ue.outputColorSpace=W.outputColorSpace,ue.batching=W.batching,ue.batchingColor=W.batchingColor,ue.instancing=W.instancing,ue.instancingColor=W.instancingColor,ue.instancingMorph=W.instancingMorph,ue.skinning=W.skinning,ue.morphTargets=W.morphTargets,ue.morphNormals=W.morphNormals,ue.morphColors=W.morphColors,ue.morphTargetsCount=W.morphTargetsCount,ue.numClippingPlanes=W.numClippingPlanes,ue.numIntersection=W.numClipIntersection,ue.vertexAlphas=W.vertexAlphas,ue.vertexTangents=W.vertexTangents,ue.toneMapping=W.toneMapping}function It(C,W){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;b.setFromMatrixPosition(W.matrixWorld);for(let ue=0,ne=C.length;ue<ne;ue++){const te=C[ue];if(te.texture!==null&&te.boundingBox.containsPoint(b))return te}return null}function at(C,W,ue,ne,te){W.isScene!==!0&&(W=Lt),pe.resetTextureUnits();const He=W.fog,ke=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?W.environment:null,Ve=H===null?B.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Ot.workingColorSpace,et=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,st=Ce.get(ne.envMap||ke,et),Mt=ne.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,Tt=!!ue.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),$e=!!ue.morphAttributes.position,Ut=!!ue.morphAttributes.normal,un=!!ue.morphAttributes.color;let Zt=sr;ne.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Zt=B.toneMapping);const Xt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Sn=Xt!==void 0?Xt.length:0,je=ae.get(ne),mn=L.state.lights;if(xt===!0&&(yt===!0||C!==X)){const qt=C===X&&ne.id===Z;it.setState(ne,C,qt)}let Ft=!1;ne.version===je.__version?(je.needsLights&&je.lightsStateVersion!==mn.state.version||je.outputColorSpace!==Ve||te.isBatchedMesh&&je.batching===!1||!te.isBatchedMesh&&je.batching===!0||te.isBatchedMesh&&je.batchingColor===!0&&te._colorsTexture===null||te.isBatchedMesh&&je.batchingColor===!1&&te._colorsTexture!==null||te.isInstancedMesh&&je.instancing===!1||!te.isInstancedMesh&&je.instancing===!0||te.isSkinnedMesh&&je.skinning===!1||!te.isSkinnedMesh&&je.skinning===!0||te.isInstancedMesh&&je.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&je.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&je.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&je.instancingMorph===!1&&te.morphTexture!==null||je.envMap!==st||ne.fog===!0&&je.fog!==He||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==it.numPlanes||je.numIntersection!==it.numIntersection)||je.vertexAlphas!==Mt||je.vertexTangents!==Tt||je.morphTargets!==$e||je.morphNormals!==Ut||je.morphColors!==un||je.toneMapping!==Zt||je.morphTargetsCount!==Sn||!!je.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(Ft=!0):(Ft=!0,je.__version=ne.version);let Bn=je.currentProgram;Ft===!0&&(Bn=ve(ne,W,te),J&&ne.isNodeMaterial&&J.onUpdateProgram(ne,Bn,je));let At=!1,Pi=!1,hr=!1;const Ht=Bn.getUniforms(),rn=je.uniforms;if(E.useProgram(Bn.program)&&(At=!0,Pi=!0,hr=!0),ne.id!==Z&&(Z=ne.id,Pi=!0),je.needsLights){const qt=It(L.state.lightProbeGridArray,te);je.lightProbeGrid!==qt&&(je.lightProbeGrid=qt,Pi=!0)}if(At||X!==C){E.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ht.setValue(V,"projectionMatrix",C.projectionMatrix),Ht.setValue(V,"viewMatrix",C.matrixWorldInverse);const vi=Ht.map.cameraPosition;vi!==void 0&&vi.setValue(V,ft.setFromMatrixPosition(C.matrixWorld)),U.logarithmicDepthBuffer&&Ht.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ht.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),X!==C&&(X=C,Pi=!0,hr=!0)}if(je.needsLights&&(mn.state.sunShadowMap.length>0&&Ht.setValue(V,"sunShadowMap",mn.state.sunShadowMap,pe),mn.state.directionalShadowMap.length>0&&Ht.setValue(V,"directionalShadowMap",mn.state.directionalShadowMap,pe),mn.state.spotShadowMap.length>0&&Ht.setValue(V,"spotShadowMap",mn.state.spotShadowMap,pe),mn.state.pointShadowMap.length>0&&Ht.setValue(V,"pointShadowMap",mn.state.pointShadowMap,pe)),te.isSkinnedMesh){Ht.setOptional(V,te,"bindMatrix"),Ht.setOptional(V,te,"bindMatrixInverse");const qt=te.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Ht.setValue(V,"boneTexture",qt.boneTexture,pe))}te.isBatchedMesh&&(Ht.setOptional(V,te,"batchingTexture"),Ht.setValue(V,"batchingTexture",te._matricesTexture,pe),Ht.setOptional(V,te,"batchingIdTexture"),Ht.setValue(V,"batchingIdTexture",te._indirectTexture,pe),Ht.setOptional(V,te,"batchingColorTexture"),te._colorsTexture!==null&&Ht.setValue(V,"batchingColorTexture",te._colorsTexture,pe));const Di=ue.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&G.update(te,ue,Bn),(Pi||je.receiveShadow!==te.receiveShadow)&&(je.receiveShadow=te.receiveShadow,Ht.setValue(V,"receiveShadow",te.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&W.environment!==null&&(rn.envMapIntensity.value=W.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=Y4()),Pi){if(Ht.setValue(V,"toneMappingExposure",B.toneMappingExposure),je.needsLights&&cn(rn,hr),He&&ne.fog===!0&&nt.refreshFogUniforms(rn,He),nt.refreshMaterialUniforms(rn,ne,fe,oe,L.state.transmissionRenderTarget[C.id]),je.needsLights&&je.lightProbeGrid){const qt=je.lightProbeGrid;rn.probesSH.value=qt.texture,rn.probesMin.value.copy(qt.boundingBox.min),rn.probesMax.value.copy(qt.boundingBox.max),rn.probesResolution.value.copy(qt.resolution)}Kc.upload(V,Oe(je),rn,pe)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Kc.upload(V,Oe(je),rn,pe),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ht.setValue(V,"center",te.center),Ht.setValue(V,"modelViewMatrix",te.modelViewMatrix),Ht.setValue(V,"normalMatrix",te.normalMatrix),Ht.setValue(V,"modelMatrix",te.matrixWorld),ne.uniformsGroups!==void 0){const qt=ne.uniformsGroups;for(let vi=0,Li=qt.length;vi<Li;vi++){const Ni=qt[vi];Se.update(Ni,Bn),Se.bind(Ni,Bn)}}return Bn}function cn(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.sunLights.needsUpdate=W,C.sunLightShadows.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function Jt(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return me},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(C,W,ue){const ne=ae.get(C);ne.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),ae.get(C.texture).__webglTexture=W,ae.get(C.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ue,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,W){const ue=ae.get(C);ue.__webglFramebuffer=W,ue.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,ue=0){H=C,me=W,$=ue;let ne=null,te=!1,He=!1;if(C){const Ve=ae.get(C);if(Ve.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(V.FRAMEBUFFER,Ve.__webglFramebuffer),N.copy(C.viewport),re.copy(C.scissor),we=C.scissorTest,E.viewport(N),E.scissor(re),E.setScissorTest(we),Z=-1;return}else if(Ve.__webglFramebuffer===void 0)pe.setupRenderTarget(C);else if(Ve.__hasExternalTextures)pe.rebindTextures(C,ae.get(C.texture).__webglTexture,ae.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Mt=C.depthTexture;if(Ve.__boundDepthTexture!==Mt){if(Mt!==null&&ae.has(Mt)&&(C.width!==Mt.image.width||C.height!==Mt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(C)}}const et=C.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(He=!0);const st=ae.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(st[W])?ne=st[W][ue]:ne=st[W],te=!0):C.samples>0&&pe.useMultisampledRTT(C)===!1?ne=ae.get(C).__webglMultisampledFramebuffer:Array.isArray(st)?ne=st[ue]:ne=st,N.copy(C.viewport),re.copy(C.scissor),we=C.scissorTest}else N.copy(Me).multiplyScalar(fe).floor(),re.copy(De).multiplyScalar(fe).floor(),we=Xe;if(ue!==0&&(ne=se),E.bindFramebuffer(V.FRAMEBUFFER,ne)&&E.drawBuffers(C,ne),E.viewport(N),E.scissor(re),E.setScissorTest(we),te){const Ve=ae.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ve.__webglTexture,ue)}else if(He){const Ve=W;for(let et=0;et<C.textures.length;et++){const st=ae.get(C.textures[et]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+et,st.__webglTexture,ue,Ve)}}else if(C!==null&&ue!==0){const Ve=ae.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ve.__webglTexture,ue)}Z=-1};function On(C){const W=ae.get(C);return(W.__readFormat!==C.format||W.__readType!==C.type)&&(W.__readFormat=C.format,W.__readType=C.type,W.__formatReadable=U.textureFormatReadable(C.format),W.__typeReadable=U.textureTypeReadable(C.type)),W}this.readRenderTargetPixels=function(C,W,ue,ne,te,He,ke,Ve=0){if(!(C&&C.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let et=ae.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ke!==void 0&&(et=et[ke]),et){E.bindFramebuffer(V.FRAMEBUFFER,et);try{const st=C.textures[Ve],Mt=st.format,Tt=st.type;C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ve);const $e=On(st);if($e.__formatReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if($e.__typeReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-ne&&ue>=0&&ue<=C.height-te&&V.readPixels(W,ue,ne,te,Ne.convert(Mt),Ne.convert(Tt),He)}finally{const st=H!==null?ae.get(H).__webglFramebuffer:null;E.bindFramebuffer(V.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(C,W,ue,ne,te,He,ke,Ve=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let et=ae.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ke!==void 0&&(et=et[ke]),et)if(W>=0&&W<=C.width-ne&&ue>=0&&ue<=C.height-te){E.bindFramebuffer(V.FRAMEBUFFER,et);const st=C.textures[Ve],Mt=st.format,Tt=st.type;C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ve);const $e=On(st);if($e.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if($e.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ut=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ut),V.bufferData(V.PIXEL_PACK_BUFFER,He.byteLength,V.STREAM_READ),V.readPixels(W,ue,ne,te,Ne.convert(Mt),Ne.convert(Tt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);const un=H!==null?ae.get(H).__webglFramebuffer:null;E.bindFramebuffer(V.FRAMEBUFFER,un);const Zt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await fA(V,Zt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ut),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,He),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(Ut),V.deleteSync(Zt),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,W=null,ue=0){const ne=Math.pow(2,-ue),te=Math.floor(C.image.width*ne),He=Math.floor(C.image.height*ne),ke=W!==null?W.x:0,Ve=W!==null?W.y:0;pe.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,ue,0,0,ke,Ve,te,He),E.unbindTexture()},this.copyTextureToTexture=function(C,W,ue=null,ne=null,te=0,He=0){let ke,Ve,et,st,Mt,Tt,$e,Ut,un;const Zt=C.isCompressedTexture?C.mipmaps[He]:C.image;if(ue!==null)ke=ue.max.x-ue.min.x,Ve=ue.max.y-ue.min.y,et=ue.isBox3?ue.max.z-ue.min.z:1,st=ue.min.x,Mt=ue.min.y,Tt=ue.isBox3?ue.min.z:0;else{const rn=Math.pow(2,-te);ke=Math.floor(Zt.width*rn),Ve=Math.floor(Zt.height*rn),C.isDataArrayTexture?et=Zt.depth:C.isData3DTexture?et=Math.floor(Zt.depth*rn):et=1,st=0,Mt=0,Tt=0}ne!==null?($e=ne.x,Ut=ne.y,un=ne.z):($e=0,Ut=0,un=0);const Xt=Ne.convert(W.format),Sn=Ne.convert(W.type);let je;W.isData3DTexture?(pe.setTexture3D(W,0),je=V.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(pe.setTexture2DArray(W,0),je=V.TEXTURE_2D_ARRAY):(pe.setTexture2D(W,0),je=V.TEXTURE_2D),E.activeTexture(V.TEXTURE0),E.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,W.flipY),E.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),E.pixelStorei(V.UNPACK_ALIGNMENT,W.unpackAlignment);const mn=E.getParameter(V.UNPACK_ROW_LENGTH),Ft=E.getParameter(V.UNPACK_IMAGE_HEIGHT),Bn=E.getParameter(V.UNPACK_SKIP_PIXELS),At=E.getParameter(V.UNPACK_SKIP_ROWS),Pi=E.getParameter(V.UNPACK_SKIP_IMAGES);E.pixelStorei(V.UNPACK_ROW_LENGTH,Zt.width),E.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Zt.height),E.pixelStorei(V.UNPACK_SKIP_PIXELS,st),E.pixelStorei(V.UNPACK_SKIP_ROWS,Mt),E.pixelStorei(V.UNPACK_SKIP_IMAGES,Tt);const hr=C.isDataArrayTexture||C.isData3DTexture,Ht=W.isDataArrayTexture||W.isData3DTexture;if(C.isDepthTexture){const rn=ae.get(C),Di=ae.get(W),qt=ae.get(rn.__renderTarget),vi=ae.get(Di.__renderTarget);E.bindFramebuffer(V.READ_FRAMEBUFFER,qt.__webglFramebuffer),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let Li=0;Li<et;Li++)hr&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ae.get(C).__webglTexture,te,Tt+Li),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ae.get(W).__webglTexture,He,un+Li)),V.blitFramebuffer(st,Mt,ke,Ve,$e,Ut,ke,Ve,V.DEPTH_BUFFER_BIT,V.NEAREST);E.bindFramebuffer(V.READ_FRAMEBUFFER,null),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(te!==0||C.isRenderTargetTexture||ae.has(C)){const rn=ae.get(C),Di=ae.get(W);E.bindFramebuffer(V.READ_FRAMEBUFFER,q),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,ee);for(let qt=0;qt<et;qt++)hr?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,rn.__webglTexture,te,Tt+qt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,rn.__webglTexture,te),Ht?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Di.__webglTexture,He,un+qt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Di.__webglTexture,He),te!==0?V.blitFramebuffer(st,Mt,ke,Ve,$e,Ut,ke,Ve,V.COLOR_BUFFER_BIT,V.NEAREST):Ht?V.copyTexSubImage3D(je,He,$e,Ut,un+qt,st,Mt,ke,Ve):V.copyTexSubImage2D(je,He,$e,Ut,st,Mt,ke,Ve);E.bindFramebuffer(V.READ_FRAMEBUFFER,null),E.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Ht?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(je,He,$e,Ut,un,ke,Ve,et,Xt,Sn,Zt.data):W.isCompressedArrayTexture?V.compressedTexSubImage3D(je,He,$e,Ut,un,ke,Ve,et,Xt,Zt.data):V.texSubImage3D(je,He,$e,Ut,un,ke,Ve,et,Xt,Sn,Zt):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,He,$e,Ut,ke,Ve,Xt,Sn,Zt.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,He,$e,Ut,Zt.width,Zt.height,Xt,Zt.data):V.texSubImage2D(V.TEXTURE_2D,He,$e,Ut,ke,Ve,Xt,Sn,Zt);E.pixelStorei(V.UNPACK_ROW_LENGTH,mn),E.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ft),E.pixelStorei(V.UNPACK_SKIP_PIXELS,Bn),E.pixelStorei(V.UNPACK_SKIP_ROWS,At),E.pixelStorei(V.UNPACK_SKIP_IMAGES,Pi),He===0&&W.generateMipmaps&&V.generateMipmap(je),E.unbindTexture()},this.initRenderTarget=function(C){ae.get(C).__webglFramebuffer===void 0&&pe.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?pe.setTextureCube(C,0):C.isData3DTexture?pe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?pe.setTexture2DArray(C,0):pe.setTexture2D(C,0),E.unbindTexture()},this.resetState=function(){me=0,$=0,H=null,E.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ot._getUnpackColorSpace()}}const Qd=["logo","torus","constellation","tree","portal"];function K4(){const n=document.createElement("canvas");n.width=64,n.height=64;const e=n.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255, 255, 255, 1)"),t.addColorStop(.2,"rgba(77, 232, 255, 0.9)"),t.addColorStop(.55,"rgba(62, 123, 250, 0.45)"),t.addColorStop(.85,"rgba(155, 92, 255, 0.15)"),t.addColorStop(1,"rgba(155, 92, 255, 0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const r=new kA(n);return r.needsUpdate=!0,r}function Y1(n,e){const t=new Float32Array(e*3);switch(n){case"tree":$4(t,e);break;case"torus":Z4(t,e);break;case"constellation":Q4(t,e);break;case"portal":J4(t,e);break;case"logo":q1(t,e);break;default:q1(t,e)}return t}function $4(n,e){let t=0;const r=Math.floor(e*.22),o=Math.floor(e*.38);for(let u=0;u<r;u++){const d=u/r,h=-2.2+d*2,m=(1-d*.6)*.35+Math.sin(h*4)*.05,v=Math.random()*Math.PI*2,g=m*(.4+.6*Math.random());n[t++]=Math.cos(v)*g,n[t++]=h+(Math.random()-.5)*.05,n[t++]=Math.sin(v)*g}const a=8,c=Math.floor(o/a);for(let u=0;u<a;u++){const d=u/a*Math.PI*2+(Math.random()-.5)*.3,h=.3+Math.random()*.5;for(let m=0;m<c&&!(t>=(r+o)*3);m++){const v=m/c,g=v*1.9,y=-.2+v*h*2.2+Math.sin(v*5)*.15,M=v*.25;n[t++]=Math.cos(d)*g+(Math.random()-.5)*M,n[t++]=y+(Math.random()-.5)*M,n[t++]=Math.sin(d)*g+(Math.random()-.5)*M}}for(;t<e*3;){const u=Math.random()*Math.PI*2,d=Math.random()*Math.PI,h=1.4+Math.random()*1.2;n[t++]=h*Math.sin(d)*Math.cos(u)*1.2,n[t++]=1.2+h*Math.cos(d)*.85+(Math.random()-.5)*.3,n[t++]=h*Math.sin(d)*Math.sin(u)*1.2}}function Z4(n,e){let t=0;const r=2,o=.65,a=Math.floor(e*.7);for(let c=0;c<a;c++){const u=Math.random()*Math.PI*2,d=Math.random()*Math.PI*2,h=o*(.3+.7*Math.sqrt(Math.random())),m=(r+h*Math.cos(d))*Math.cos(u),v=h*Math.sin(d)+Math.sin(u*3)*.2,g=(r+h*Math.cos(d))*Math.sin(u);n[t++]=m*.85-v*.3,n[t++]=v*.85+m*.3,n[t++]=g}for(;t<e*3;){const c=Math.random()*Math.PI*2,u=2.7+(Math.random()-.5)*.4;n[t++]=Math.cos(c)*u,n[t++]=Math.sin(c*2)*.6,n[t++]=Math.sin(c)*u}}function Q4(n,e){let t=0;const r=[[-1.8,1.1,.5],[1.8,1.2,-.4],[-1.2,-.5,1.3],[1.3,-.6,-1.2],[0,1.9,0],[-1.9,-1,-.6],[1.7,-1.1,.7],[0,-1.8,0]],o=Math.floor(e*.55/r.length);for(const u of r)for(let d=0;d<o&&!(t>=e*.55*3);d++){const h=Math.pow(Math.random(),2)*.45,m=Math.random()*Math.PI*2,v=Math.acos(Math.random()*2-1);n[t++]=u[0]+h*Math.sin(v)*Math.cos(m),n[t++]=u[1]+h*Math.sin(v)*Math.sin(m),n[t++]=u[2]+h*Math.cos(v)}const a=[[0,1],[0,4],[1,4],[0,2],[1,3],[2,7],[3,7],[2,5],[3,6],[5,7],[6,7]],c=Math.floor(e*.3/a.length);for(const[u,d]of a){const h=r[u],m=r[d];for(let v=0;v<c&&!(t>=e*.85*3);v++){const g=v/c,y=(Math.random()-.5)*.12;n[t++]=h[0]+(m[0]-h[0])*g+y,n[t++]=h[1]+(m[1]-h[1])*g+y,n[t++]=h[2]+(m[2]-h[2])*g+y}}for(;t<e*3;){const u=Math.random()*Math.PI*2,d=Math.acos(Math.random()*2-1),h=1+Math.random()*2.2;n[t++]=h*Math.sin(d)*Math.cos(u),n[t++]=h*Math.sin(d)*Math.sin(u),n[t++]=h*Math.cos(d)}}function J4(n,e){let t=0;for(let r=0;r<e;r++){const a=-2.2+r/e*4.4,u=.35+Math.pow(a*.55,2)+Math.random()*.25,d=a*4.8+Math.PI*2*(r%6)/6+(Math.random()-.5)*.2;n[t++]=Math.cos(d)*u,n[t++]=a,n[t++]=Math.sin(d)*u}}function q1(n,e){let t=0;const r=Math.floor(e*.44),o=Math.floor(e*.44),a=Math.floor(r/2),c=-.75,u=.52,d=-.52,h=.46,m=.55,v=1.5*Math.PI-.25;for(let x=0;x<a;x++){const I=.25+x/a*v,b=(Math.random()-.5)*.08,P=(Math.random()-.5)*.08,L=(Math.random()-.5)*.22;n[t++]=c+h*Math.cos(I)+b,n[t++]=u+m*Math.sin(I)+P,n[t++]=L}const g=r-a;for(let x=0;x<g;x++){const D=x/g,I=.5*Math.PI-D*v,b=(Math.random()-.5)*.08,P=(Math.random()-.5)*.08,L=(Math.random()-.5)*.22;n[t++]=c+h*Math.cos(I)+b,n[t++]=d+m*Math.sin(I)+P,n[t++]=L}const y=.25,M=.6,A=.65,S=1.07;for(let x=0;x<o;x++){const D=x/o;let I,b;if(D<.38){const T=D/.38;I=y,b=-S+T*(2*S)}else if(D<.45){const T=(D-.38)/.07;I=y+T*(M-y),b=S}else if(D<.93){const T=(D-.45)/.48,w=.5*Math.PI-T*Math.PI;I=M+A*Math.cos(w),b=S*Math.sin(w)}else{const T=(D-.93)/.07;I=M-T*(M-y),b=-S}const P=(Math.random()-.5)*.08,L=(Math.random()-.5)*.08,F=(Math.random()-.5)*.22;n[t++]=I+P,n[t++]=b+L,n[t++]=F}for(;t<e*3;){const x=Math.random()*Math.PI*2,D=2.2+(Math.random()-.5)*.25;n[t++]=Math.cos(x)*D,n[t++]=Math.sin(x)*D,n[t++]=(Math.random()-.5)*.3}}function eD({shape:n="logo",interactiveMouse:e=!0,autoMorph:t=!0,morphInterval:r=5e3,className:o="",style:a={}}){const c=Pe.useRef(null),u=Pe.useRef(n),d=Pe.useRef({x:0,y:0,targetX:0,targetY:0,worldX:0,worldY:0});return Pe.useEffect(()=>{u.current=n},[n]),Pe.useEffect(()=>{if(!t)return;let h=Qd.indexOf(u.current);h===-1&&(h=0);const m=setInterval(()=>{h=(h+1)%Qd.length,u.current=Qd[h]},r);return()=>clearInterval(m)},[t,r]),Pe.useEffect(()=>{const h=c.current;if(!h)return;const m=window.innerWidth<768,v=m?2600:5200,g=new RA;g.fog=new Qp(263953,.08);const y=new Ci(55,h.clientWidth/(h.clientHeight||1),.1,100);y.position.set(0,.2,5.8);const M=new q4({powerPreference:"high-performance",antialias:!0,alpha:!0});M.setSize(h.clientWidth,h.clientHeight),M.setPixelRatio(Math.min(window.devicePixelRatio,2)),M.setClearColor(263953,0),h.appendChild(M.domElement);const A=m?400:900,S=new li,x=new Float32Array(A*3),D=new Float32Array(A*3);for(let ye=0;ye<A;ye++){x[ye*3]=(Math.random()-.5)*45,x[ye*3+1]=(Math.random()-.5)*35,x[ye*3+2]=-5-Math.random()*25;const Me=Math.random();Me>.7?(D[ye*3]=.3,D[ye*3+1]=.9,D[ye*3+2]=1):Me>.4?(D[ye*3]=.4,D[ye*3+1]=.5,D[ye*3+2]=1):(D[ye*3]=.8,D[ye*3+1]=.85,D[ye*3+2]=.95)}S.setAttribute("position",new oi(x,3)),S.setAttribute("color",new oi(D,3));const I=new np({size:.05,vertexColors:!0,transparent:!0,opacity:.65,blending:ja,depthWrite:!1}),b=new _1(S,I);g.add(b);const P=new li,L=new Float32Array(v*3),F=new Float32Array(v*3),T=new Float32Array(v*3),w=new Float32Array(v*3),B=Y1(u.current,v);for(let ye=0;ye<v*3;ye++)L[ye]=B[ye],F[ye]=B[ye],T[ye]=B[ye];const Y=new Pt(5105919),J=new Pt(4094970),se=new Pt(10181887);for(let ye=0;ye<v;ye++){const Me=(B[ye*3+1]+2.5)/5,De=new Pt;Me<.45?De.copy(Y).lerp(J,Me/.45):De.copy(J).lerp(se,(Me-.45)/.55);const Xe=(Math.random()-.5)*.15;w[ye*3]=Math.min(1,Math.max(0,De.r+Xe)),w[ye*3+1]=Math.min(1,Math.max(0,De.g+Xe)),w[ye*3+2]=Math.min(1,Math.max(0,De.b+Xe))}P.setAttribute("position",new oi(L,3)),P.setAttribute("color",new oi(w,3));const q=K4(),ee=new np({size:m?.085:.075,map:q,vertexColors:!0,transparent:!0,opacity:.88,blending:ja,depthWrite:!1}),me=()=>{const ye=h.clientWidth||window.innerWidth;return ye>=1200?1.65:ye>=992?1.35:0};let $=me();const H=new _1(P,ee);H.position.x=$,g.add(H);const Z=6,X=new ka;X.position.set($,-2.2,0),X.rotation.x=Math.PI/2;const N=[];for(let ye=0;ye<Z;ye++){const De=new li,Xe=new Float32Array(195);for(let yt=0;yt<=64;yt++){const ut=yt/64*Math.PI*2;Xe[yt*3]=Math.cos(ut),Xe[yt*3+1]=Math.sin(ut),Xe[yt*3+2]=0}De.setAttribute("position",new oi(Xe,3));const dt=new sy({color:ye%2===0?5105919:4094970,transparent:!0,opacity:.35,blending:ja,depthWrite:!1}),xt=new BA(De,dt);N.push({mesh:xt,phase:ye/Z,baseSpeed:.18}),X.add(xt)}g.add(X);let re=u.current;const we=ye=>{const Me=Y1(ye,v);for(let De=0;De<v*3;De++)F[De]=Me[De],T[De]=Me[De]},qe=ye=>{if(!e)return;const Me=h.getBoundingClientRect(),De=Me.width||window.innerWidth,Xe=Me.height||window.innerHeight,dt=(ye.clientX-Me.left)/De*2-1,xt=-((ye.clientY-Me.top)/Xe*2-1);d.current.targetX=dt,d.current.targetY=xt,d.current.worldX=dt*3.2,d.current.worldY=xt*2.2};window.addEventListener("mousemove",qe,{passive:!0});const We=()=>{if(!h)return;const ye=h.clientWidth||window.innerWidth,Me=h.clientHeight||window.innerHeight;y.aspect=ye/Me,y.updateProjectionMatrix(),M.setSize(ye,Me),$=me(),H.position.x=$,X.position.x=$},Ke=new ResizeObserver(()=>We());Ke.observe(h),window.addEventListener("resize",We);let oe;const fe=new $A,Re=()=>{oe=requestAnimationFrame(Re);const ye=fe.getElapsedTime();u.current!==re&&(re=u.current,we(re)),d.current.x+=(d.current.targetX-d.current.x)*.06,d.current.y+=(d.current.targetY-d.current.y)*.06,u.current==="logo"?H.rotation.y=Math.sin(ye*.45)*.22+d.current.x*.4:H.rotation.y=ye*.12+d.current.x*.45,H.rotation.x=Math.sin(ye*.08)*.08-d.current.y*.35,H.position.y=Math.sin(ye*.6)*.08,H.position.x=$,b.rotation.y=ye*.02+d.current.x*.08,b.rotation.x=-d.current.y*.05;const De=P.attributes.position.array,Xe=d.current.worldX,dt=d.current.worldY,xt=1.4*1.4,yt=Xe-$;for(let ut=0;ut<v;ut++){const ft=ut*3,Dt=F[ft],Lt=F[ft+1],Ct=F[ft+2],Vt=.065;if(De[ft]+=(Dt-De[ft])*Vt,De[ft+1]+=(Lt-De[ft+1])*Vt,De[ft+2]+=(Ct-De[ft+2])*Vt,e){const V=De[ft]-yt,$t=De[ft+1]-dt,wt=V*V+$t*$t;if(wt<xt&&wt>.001){const U=Math.sqrt(wt),E=(1.4-U)*.07;De[ft]+=V/U*E,De[ft+1]+=$t/U*E,De[ft+2]+=(Math.random()-.5)*.02}}}P.attributes.position.needsUpdate=!0;for(let ut=0;ut<N.length;ut++){const ft=N[ut];ft.phase=(ft.phase+ft.baseSpeed*.015)%1;const Dt=.4+ft.phase*3.4;ft.mesh.scale.set(Dt,Dt,1);const Lt=ft.mesh.material,Ct=Math.sin(ft.phase*Math.PI);Lt.opacity=Ct*.48}M.render(g,y)};return Re(),()=>{cancelAnimationFrame(oe),window.removeEventListener("mousemove",qe),window.removeEventListener("resize",We),Ke.disconnect(),h.contains(M.domElement)&&h.removeChild(M.domElement),M.dispose(),P.dispose(),ee.dispose(),S.dispose(),I.dispose(),q.dispose(),N.forEach(ye=>{ye.mesh.geometry.dispose(),ye.mesh.material.dispose()})}},[e]),K.jsx("div",{ref:c,"aria-hidden":"true",className:`particle-bg-root ${o}`,style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",pointerEvents:"none",zIndex:-1,overflow:"hidden",background:"radial-gradient(ellipse at 50% 40%, #080f24 0%, #040711 75%, #02040a 100%)",...a}})}const tD=({onComplete:n,name:e="SD"})=>{const[t,r]=Pe.useState(0),[o,a]=Pe.useState(1),[c,u]=Pe.useState(!1);Pe.useEffect(()=>{const h=setTimeout(()=>r(1),400),m=setTimeout(()=>r(2),1200),v=setTimeout(()=>r(3),2e3),g=setTimeout(()=>r(4),2400),y=Date.now(),M=3200,A=setInterval(()=>{const S=Date.now()-y,x=Math.min(S/M,1),D=Math.floor(1+Math.pow(x,1.2)*99);a(D),x>=1&&(clearInterval(A),a(100),setTimeout(()=>{u(!0),setTimeout(n,950)},350))},35);return()=>{clearTimeout(h),clearTimeout(m),clearTimeout(v),clearTimeout(g),clearInterval(A)}},[n]);const d=()=>{u(!0),setTimeout(n,900)};return K.jsxs("div",{id:"intro-loader-curtain",className:`fixed inset-0 z-50 flex flex-col justify-between p-6 sm:p-10 md:p-12 bg-[#0c0d12] text-neutral-100 select-none overflow-hidden transition-transform duration-[950ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${c?"curtain-up -translate-y-full shadow-[0_30px_90px_rgba(0,0,0,0.9)]":"curtain-down translate-y-0"}`,children:[K.jsx("div",{className:"loader-header flex items-center justify-end w-full",children:K.jsx("button",{onClick:d,className:"loader-skip-btn text-[10px] font-mono tracking-[0.2em] text-neutral-500 hover:text-neutral-200 transition-colors uppercase cursor-pointer px-2 py-1",children:"SKIP"})}),K.jsxs("div",{className:"loader-hero flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto my-auto",children:[K.jsx("div",{className:`loader-accent-line w-12 sm:w-14 h-[1px] bg-neutral-600/80 mb-6 sm:mb-8 transition-all duration-700 ${t>=1?"loader-line-visible opacity-100 scale-100":"loader-line-hidden opacity-0 scale-50"}`}),K.jsxs("div",{className:"loader-headline space-y-1 sm:space-y-2 font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-[0.14em] sm:tracking-[0.18em] text-[#FAFAFC] uppercase leading-[1.25]",children:[K.jsx("div",{className:"loader-line-mask overflow-hidden py-1",children:K.jsx("div",{className:`loader-line-text transform transition-all duration-700 ease-out ${t>=1?"loader-line-visible translate-y-0 opacity-100":"loader-line-hidden translate-y-8 opacity-0"}`,children:"WELCOME TO"})}),K.jsx("div",{className:"loader-line-mask overflow-hidden py-1",children:K.jsxs("div",{className:`loader-line-text transform transition-all duration-700 ease-out ${t>=2?"loader-line-visible translate-y-0 opacity-100":"loader-line-hidden translate-y-8 opacity-0"}`,children:[e,"'S"]})}),K.jsx("div",{className:"loader-line-mask overflow-hidden py-1",children:K.jsx("div",{className:`loader-line-text transform transition-all duration-700 ease-out ${t>=3?"loader-line-visible translate-y-0 opacity-100":"loader-line-hidden translate-y-8 opacity-0"}`,children:"PORTFOLIO"})})]}),K.jsx("div",{className:`loader-subtitle mt-6 sm:mt-8 text-[11px] sm:text-xs font-mono tracking-[0.3em] sm:tracking-[0.36em] text-neutral-400/90 uppercase transition-all duration-700 ${t>=4?"loader-line-visible opacity-100 translate-y-0":"loader-line-hidden opacity-0 translate-y-3"}`,children:"— LOADING EXPERIENCE —"})]}),K.jsxs("div",{className:"loader-footer relative flex items-center justify-between w-full",children:[K.jsx("div",{className:"flex items-center gap-3",children:K.jsx("div",{className:"loader-monogram-badge w-8 h-8 rounded-full border border-neutral-700/80 flex items-center justify-center font-serif text-xs text-neutral-300",children:e})}),K.jsx("div",{className:"loader-counter absolute left-1/2 -translate-x-1/2 font-mono text-xs sm:text-sm tracking-[0.25em] text-neutral-400 tabular-nums font-light",children:o<10?`0${o}`:o}),K.jsx("div",{className:"loader-footer-spacer w-8"})]})]})};function nD(){const[n,e]=Pe.useState(!0);return K.jsxs(a2,{children:[n&&K.jsx(tD,{onComplete:()=>e(!1),name:"SD"}),K.jsx(eD,{shape:"logo",autoMorph:!0,morphInterval:5e3,interactiveMouse:!0}),K.jsx(Cw,{RAINBOW_MODE:!1,COLOR:"#8b5cf6",SIM_RESOLUTION:128,DYE_RESOLUTION:1440,DENSITY_DISSIPATION:4.5,VELOCITY_DISSIPATION:2,PRESSURE:.1,CURL:3,SPLAT_RADIUS:.2,SPLAT_FORCE:6e3,SHADING:!0,TRANSPARENT:!0,OPACITY:.35}),K.jsx(ZT,{}),K.jsxs("main",{children:[K.jsx(iw,{}),K.jsx(ow,{}),K.jsx(Mw,{}),K.jsx(ww,{}),K.jsx(Aw,{})]}),K.jsx(Rw,{})]})}o2.createRoot(document.getElementById("root")).render(K.jsx(us.StrictMode,{children:K.jsx(nD,{})}));
